const textError = document.querySelector("small.name-error");
const text = document.querySelector("input#text");
const emailError = document.querySelector("small.email-error");
const email = document.querySelector("input#email");
const numberError = document.querySelector("small.number-error");
const number = document.querySelector("input#number");

const arrInput = [text, email, number];
const errorArr = [textError, emailError, numberError];
export const inputValidation = () => {
  let output = true;
  arrInput.forEach((input) => {
    input.addEventListener("click", () => {
      arrInput.forEach((element) => {
        element.classList.remove("error");
      });

      errorArr.forEach((error) => {
        error.innerHTML = "";
      });
    });

    let inputValue = input.value;
    let inputId = input.getAttribute("id");
    if (inputValue.length === 0) {
      output = false;
      if (inputId === "text") {
        textError.innerHTML = "This field is required";
        input.classList.add("error");
      } else if (inputId === "email") {
        emailError.innerHTML = "This field is required";
        input.classList.add("error");
      } else {
        numberError.innerHTML = "This field is required";
        input.classList.add("error");
      }
    } else if (inputId === "email") {
      let valid = /[A-Z]/.test(inputValue);
      let format = ".com";
      let signFormat = "@";
      if (
        valid ||
        !inputValue.includes(format) ||
        !inputValue.includes(signFormat)
      ) {
        emailError.innerHTML = "Invalid Email Format";
        input.classList.add("error");
        output = false;
      }
    } else if (inputId === "number") {
      if (inputValue.length < 10 || inputValue.length > 15) {
        numberError.innerHTML = "Invalid input";
        input.classList.add("error");
        output = false;
      }
    }
  });
  return output;
};
