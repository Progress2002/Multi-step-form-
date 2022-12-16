const backBtn = document.querySelector("button.btn-back");
const nextBtn = document.querySelector("button.btn-next");
const confirmBtn = document.querySelector("button.btn-confirm");
const sideBarNav = document.querySelectorAll("div.step-index");
const pages = document.querySelectorAll("div.steps");
const footer = document.querySelector("div.main-footer");
const extraServicesContainer = document.querySelector("ul.extra-services");
const addOnsSelector = document.querySelectorAll("li.item");

const sideBarNavigation = (index) => {
  if (index < 0) {
    sideBarNav[0].classList.add("active");
    return;
  }
  sideBarNav.forEach((nav) => {
    if (nav !== sideBarNav[index]) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  });

  pages.forEach((page) => {
    if (page !== pages[index]) {
      page.classList.add("disable");
    } else {
      page.classList.remove("disable");
    }
  });
};

const displaySelectedAddOns = () => {
  extraServicesContainer.innerHTML = "";
  addOnsSelector.forEach((plan) => {
    if (plan.classList.contains("checked")) {
      let planName = plan.children[0].children[1].children[0].innerHTML;
      let planPrice = plan.children[1].children[0].innerHTML;
      extraServicesContainer.innerHTML += `
        <li class="flex list">
          <p>${planName}</p>
          <p class="amount">${planPrice}</p>
        </li>
      `;
    }
  });
};

let index = 0;
export const forwardNavigation = () => {
  index++;
  if (index === 3) {
    displaySelectedAddOns();
    nextBtn.classList.add("disable");
    confirmBtn.classList.remove("disable");
  }
  sideBarNavigation(index);
  backBtn.classList.remove("disable");
};

export const backwardNavigation = () => {
  if (index === 3) {
    nextBtn.classList.remove("disable");
    confirmBtn.classList.add("disable");
  }
  index--;
  sideBarNavigation(index);
  if (index <= 0) {
    backBtn.classList.add("disable");
    return;
  }
};

export const conclusionPage = () => {
  pages.forEach((page) => {
    if (page !== pages[4]) {
      page.classList.add("disable");
    } else {
      page.classList.remove("disable");
    }
  });
  footer.classList.add("disable");
};

export const BackToPlanSelection = () => {
  index = 1;
  sideBarNavigation(index);
  nextBtn.classList.remove("disable");
  confirmBtn.classList.add("disable");
};
