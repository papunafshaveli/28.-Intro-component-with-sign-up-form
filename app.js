const submitBtn = document.querySelector("#submit-button");
const allInputs = document.querySelectorAll(".info");
const errorsInfo = document.querySelectorAll(".error");
const emailInput = document.querySelector(".email");
const emailError = document.querySelector(".three");

submitBtn.addEventListener("click", () => {
  // reset
  for (let i = 0; i < allInputs.length; i++) {
    errorsInfo[i].style.display = "none";
    errorsInfo[i].textContent = "";
    allInputs[i].style.borderColor = "#bab7d4";
  }
  //check if input field is empty
  for (let j = 0; j < allInputs.length; j++) {
    if (allInputs[j].value == "") {
      allInputs[j].style.borderColor = "#ff7979";
      errorsInfo[j].style.display = "block";
      errorsInfo[j].textContent = "The field must not be ampty";
    }
  }
  //email vadiladion function
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }

  // check if user input is email
  if (!validateEmail(emailInput.value)) {
    emailError.style.display = "block";
    emailInput.value = "";
    emailInput.placeholder = "email@example.com";
    emailInput.style.borderColor = "#ff7979";
    emailError.textContent = "Looks like this is not an email";
  }
});
