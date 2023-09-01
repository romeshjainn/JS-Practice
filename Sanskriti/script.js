function checkInputs() {
  const firstnameinput = document.getElementById("firstname");
  const middlenameinput = document.getElementById("middlename");
  const lastnameinput = document.getElementById("lastname");
  const githubinput = document.getElementById("git");
  const linkedlninput = document.getElementById("Linkedln");
  const emailinput = document.getElementById("email");
  const passwordinput = document.getElementById("password");
  const passwordconfirm = document.getElementById("confirm-password");

  const ValidCharacter = /^[A-Za-z]+$/;
  const ValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const ValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const ValidURL =
    /^(https?:\/\/)?(www\.)?[a-z0-9\-]+(\.[a-z]{2,})(\/[^\s]*)?$/i;

  if (!ValidCharacter.test(firstnameinput.value)) {
    setErrorFor(firstnameinput, "First name is invalid");
  } else {
    setSuccessFor(firstnameinput);
  }

  if (!ValidCharacter.test(middlenameinput.value)) {
    setErrorFor(middlenameinput, "Middle name is invalid");
  } else {
    setSuccessFor(middlenameinput);
  }

  if (!ValidCharacter.test(lastnameinput.value)) {
    setErrorFor(lastnameinput, "Last name is invalid");
  } else {
    setSuccessFor(lastnameinput);
  }

  if (!ValidEmail.test(emailinput.value)) {
    setErrorFor(emailinput, "Email is invalid");
  } else {
    setSuccessFor(emailinput);
  }

  if (!ValidPassword.test(passwordinput.value)) {
    setErrorFor(passwordinput, "Password is invalid");
  } else {
    setSuccessFor(passwordinput);
  }

  if (passwordinput.value !== passwordconfirm.value) {
    setErrorFor(passwordconfirm, "Passwords do not match");
  } else {
    setSuccessFor(passwordconfirm);
  }

  if (!ValidURL.test(githubinput.value)) {
    setErrorFor(githubinput, "GitHub URL is invalid");
  } else {
    setSuccessFor(githubinput);
  }

  if (!ValidURL.test(linkedlninput.value)) {
    setErrorFor(linkedlninput, "LinkedIn URL is invalid");
  } else {
    setSuccessFor(linkedlninput);
  }
}

function setErrorFor(input, message) {
  const inputControl = input.parentElement;
  const errorElement = inputControl.querySelector(".error-message");
  inputControl.className = "input-control error";
  errorElement.innerText = message;
}

function setSuccessFor(input) {
  const inputControl = input.parentElement;
  inputControl.className = "input-control success";
}
