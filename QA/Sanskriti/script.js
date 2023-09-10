const firstnameinput = document.getElementById("firstname");
const middlenameinput = document.getElementById("middlename");
const lastnameinput = document.getElementById("lastname");
const githubinput = document.getElementById("git");
const linkedlninput = document.getElementById("Linkedln");
const submitButton = document.getElementById("submit-btn");
console.log(submitButton);
const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
const passwordconfirm = document.getElementById("confirm-password");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  checksInputs();
});

function checksInputs() {
  const ValidCharacter = /^[A-Za-z]+$/;
  const ValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const ValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const ValidURL =
    /^(https?:\/\/)?(www\.)?[a-z0-9\-]+(\.[a-z]{2,})(\/[^\s]*)?$/i;

  if (!ValidCharacter.test(middlenameinput.value)) {
    middlenameinput.value = "invalid";
    // middlenameinput.style.color = "red";
    // middlenameinput.style.border = "1px solid red";
  } else {
    // middlenameinput.style.border = "1px solid green";
    middlenameinput.style.color = "green";
  }
  if (!ValidCharacter.test(firstnameinput.value)) {
    firstnameinput.value = "invalid";
    // firstnameinput.style.color = "red";
    // firstnameinput.style.border = "1px red";
  } else {
    // firstnameinput.style.border = "1px solid green";
    firstnameinput.style.color = "green";
  }
  if (!ValidCharacter.test(lastnameinput.value)) {
    lastnameinput.value = "invalid";
    // lastnameinput.style.color = "red";
    // lastnameinput.style.border = "1px red";
  } else {
    // lastnameinput.style.border = "1px solid green";
    lastnameinput.style.color = "green";
  }

  if (!ValidEmail.test(emailinput.value)) {
    emailinput.value = "invalid";
    // emailinput.style.color = "red";
    // emailinput.style.border = "1px red";
  } else {
    emailinput.style.color = "green";
    // emailinput.style.border = "1px green";
  }

  if (!ValidPassword.test(passwordinput.value)) {
    passwordinput.value = "invalid";
    // ValidPassword.style.color = "red";
    // ValidPassword.style.border = "1px red";
  } else {
    ValidPassword.style.color = "green";
    // ValidPassword.style.border = "1px green";
  }
  if (!ValidPassword.test(passwordconfirm.value)) {
    passwordconfirm.value = "invalid";
    // ValidPassword.style.color = "red";
    // ValidPassword.style.border = "1px red";
  } else {
    ValidPassword.style.color = "green";
    // ValidPassword.style.border = "1px green";
  }

  if (!ValidURL.test(githubinput.value)) {
    githubinput.value = "invalid";
    // ValidURL.style.color = "red";
    // ValidURL.style.border = "1px red";
  } else {
    githubinput.style.color = "green";
    // ValidURL.style.border  = "1px green";
  }
  if (!ValidURL.test(linkedlninput.value)) {
    linkedlninput.value = "invalid";
    // ValidURL.style.color = "red";
    // ValidURL.style.border = "1px red";
  } else {
    linkedlninput.style.color = "green";
    // ValidURL.style.border = "1px green";
  }
}
