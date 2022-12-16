import { planToggle } from "./module/planPrice.js";
import {
  BackToPlanSelection,
  forwardNavigation,
  backwardNavigation,
  conclusionPage,
} from "./module/stepNav.js";
import { inputValidation } from "./module/formValidation.js";
import { planSelection } from "./module/plan-selection.js";
import { page3Selection } from "./module/add-ons.js";

const planSelectorBtn = document.querySelector(".toggle");
const nextBtn = document.querySelector("button.btn-next");
const backBtn = document.querySelector("button.btn-back");
const confirmBtn = document.querySelector("button.btn-confirm");
const changePlanBtn = document.querySelector("a.change-plan-btn");
const selectedPlan = document.querySelector("span.selected-plan");
const selectedPlanPrice = document.querySelector("p.selected-plan-price");
// const totalAmount = document.querySelector('span.total-amount');

// Select between monthly and yearly plan
planSelectorBtn.addEventListener("click", planToggle);

// navigate between pages
let index = 0;
nextBtn.addEventListener("click", () => {
  if (!inputValidation()) return;
  let isSelected = planSelection();
  if (index === 1 && !isSelected) return;
  forwardNavigation();
  index++;
});

backBtn.addEventListener("click", backwardNavigation);

// display the conclusion page
confirmBtn.addEventListener("click", conclusionPage);

// Select an item from add-ons section
page3Selection();

changePlanBtn.addEventListener("click", () => {
  BackToPlanSelection();
});

// Display selectedPlan in the summary page
const planSelector = document.querySelectorAll("li.plan");
planSelector.forEach((plan) => {
  setInterval(() => {
    if (plan.classList.contains("checked")) {
      selectedPlan.innerHTML = plan.children[1].children[0].innerHTML;
      selectedPlanPrice.innerHTML = plan.children[1].children[1].innerHTML;
    }
  }, 4000);
});

// step-2 plan selector
const plans = document.querySelectorAll("li.plan");

// step-3 plan selector
const addOns = document.querySelectorAll("li.item");

const totalAmount = document.querySelector("span.total-amount");

// Get the price of all the selected plans and add-ons and return the sum
let arr = [];
let sum;

const summaryTotalPrice = () => {
  arr = [];
  addOns.forEach((selectedAddOns) => {
    if (selectedAddOns.classList.contains("checked")) {
      let strAmount = selectedAddOns.children[1].children[0].innerHTML;
      const matches = strAmount.match(/\d+/g);
      arr.push(parseInt(matches[0]));
    }
  });

  plans.forEach((selectedPlan) => {
    if (selectedPlan.classList.contains("checked")) {
      let strAmount = selectedPlan.children[1].children[1].innerHTML;
      const matches = strAmount.match(/\d+/g);
      arr.push(parseInt(matches[0]));
    }
  });

  sum = arr.reduce((a, b) => a + b);
  return sum;
};

setTimeout(() => {
  setInterval(() => {
    totalAmount.innerHTML = summaryTotalPrice();
  }, 3000);
}, 9000);
