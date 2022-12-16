const checkBoxS = document.querySelectorAll('input[type="checkbox"]');

export const page3Selection = () => {
  checkBoxS.forEach((checkBox) => {
    checkBox.addEventListener("click", (e) => {
      let checkedParentNode = e.target.parentNode.parentNode;
      checkedParentNode.classList.toggle("checked");
    });
  });
};
