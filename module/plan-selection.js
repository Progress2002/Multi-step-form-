const arcadePlanAmount = document.querySelector('.arcade-plan-amount');
const advancedPlanAmount = document.querySelector('.advanced-plan-amount');
const proPlanAmount = document.querySelector('.pro-plan-amount');

// step-2 plan selector
const plans = document.querySelectorAll('li.plan');

let selected = false;
export const planSelection = () => { 
  plans.forEach(plan => {
    plan.addEventListener('click', () => {
      let planId = plan.id;
      plans.forEach((element) => {
        if(element.id === planId) {
          element.classList.add('checked')
          selected = true
        }else {
          element.classList.remove('checked')
        }
      })
    })
  })
  return selected
}

// export default {planSelection()}