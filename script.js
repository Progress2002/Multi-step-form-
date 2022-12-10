import { planToggle } from "./module/planPrice.js";
import { forwardNavigation, backwardNavigation,conclusionPage  } from "./module/stepNav.js";
const planSelectorBtn = document.querySelector('.toggle');
const nextBtn = document.querySelector('button.btn-next');
const backBtn = document.querySelector('button.btn-back');
const confirmBtn = document.querySelector('button.btn-confirm');



// Select between monthly and yearly plan
planSelectorBtn.addEventListener('click',planToggle);


// navigate between pages 
nextBtn.addEventListener('click', forwardNavigation)
backBtn.addEventListener('click', backwardNavigation)


confirmBtn.addEventListener('click', conclusionPage)