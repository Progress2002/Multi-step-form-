const planSelectorBtn = document.querySelector(".toggle");
const planBonus = document.querySelectorAll(".plan-bonus");
const planSelector = document.querySelectorAll("p.plan");

// step-2 amount selectors
const arcadePlanAmount = document.querySelector(".arcade-plan-amount");
const advancedPlanAmount = document.querySelector(".advanced-plan-amount");
const proPlanAmount = document.querySelector(".pro-plan-amount");

// step-3 amount selectors
const onlineAmount = document.querySelector(".online-amount");
const storageAmount = document.querySelector(".storage-amount");
const profileAmount = document.querySelector(".profile-amount");

// step-4 duration selectors
const finalDuration = document.querySelector("span.final-duration");
const totalDuration = document.querySelector("span.total-duration");
const totalAmountDuration = document.querySelector(
  "span.total-amount-duration"
);

// const btn =document.querySelector('.btn-next');

// toggle plan price
let isMonthly = true;
const priceValue = () => {
  if (isMonthly) {
    arcadePlanAmount.innerHTML = "$90/yr";
    advancedPlanAmount.innerHTML = "$120/yr";
    proPlanAmount.innerHTML = "$150/yr";
    onlineAmount.innerHTML = "+$10/yr";
    storageAmount.innerHTML = "+$20/yr";
    profileAmount.innerHTML = "+$20/yr";
    finalDuration.innerHTML = "(Yearly)";
    totalDuration.innerHTML = "(per year)";
    totalAmountDuration.innerHTML = "/yr";
    isMonthly = false;
  } else {
    arcadePlanAmount.innerHTML = "$9/mo";
    advancedPlanAmount.innerHTML = "$12/mo";
    proPlanAmount.innerHTML = "$15/mo";
    onlineAmount.innerHTML = "+$1/mo";
    storageAmount.innerHTML = "+$2/mo";
    profileAmount.innerHTML = "+$2/mo";
    finalDuration.innerHTML = "(Monthly)";
    totalDuration.innerHTML = "(per month)";
    totalAmountDuration.innerHTML = "/mo";
    isMonthly = true;
  }
  return isMonthly;
};

export const planToggle = () => {
  planSelectorBtn.classList.toggle("year-plan");
  planBonus.forEach((item) => item.classList.toggle("disable"));
  planSelector.forEach((plan) => plan.classList.toggle("selected"));

  return priceValue();
};
