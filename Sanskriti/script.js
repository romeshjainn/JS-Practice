const firstnameinput = document.getElementById("firstname");
const middlenameinput = document.getElementById("middlename");
const lastnameinput = document.getElementById("lastname");
const githubinput = document.getElementById("git");
const linkedlninput = document.getElementById("Linkedln");
const submitButton = document.getElementsByClassName("submit-btn");
const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
const passwordconfirm = document.getElementById("confirm-password");

submitButton.addEventListener("onclick", function (e) {
  e.preventDefault();
  checksInputs();
});

function checksInputs() {
  const ValidCharacter = /^[A-Za-z]+$/;
  const ValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const ValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const ValidURL =
    /^(https?:\/\/)?(www\.)?[a-z0-9\-]+(\.[a-z]{2,})(\/[^\s]*)?$/i;

  if (!ValidCharacter(middlenameinput.value)) {
    middlenameinput.innerText = "invalid";
    middlenameinput.style.color = "red";
    middlenameinput.style.border = "1px solid red";
  } else {
    middlenameinput.style.border = "1px solid green";
    middlenameinput.style.color = "green";
  }

  if (!ValidCharacter(firstnameinput.value)) {
    firstnameinput.innerText = "invalid";
    firstnameinput.style.color = "red";
    firstnameinput.style.border = "1px red";
  } else {
    firstnameinput.style.border = "1px solid green";
    firstnameinput.style.color = "green";
  }
  if (!ValidCharacter(lastnameinput.value)) {
    lastnameinput.innerText = "invalid";
    lastnameinput.style.color = "red";
    lastnameinput.style.border = "1px red";
  } else {
    lastnameinput.style.border = "1px solid green";
    lastnameinput.style.color = "green";
  }

  if (!ValidEmail(emailinput.value)) {
    emailinput.innerText = "invalid";
    emailinput.style.color = "red";
    emailinput.style.border = "1px red";
  } else {
    emailinput.style.color = "green";
    emailinput.style.border = "1px green";
  }

  if (!ValidPassword(passwordinput.value)) {
    ValidPassword.innerText = "invalid";
    ValidPassword.style.color = "red";
    ValidPassword.style.border = "1px red";
  } else {
    ValidPassword.style.color = "green";
    ValidPassword.style.border = "1px green";
  }
  if (!ValidPassword(passwordconfirm.value)) {
    ValidPassword.innerText = "invalid";
    ValidPassword.style.color = "red";
    ValidPassword.style.border = "1px red";
  } else {
    ValidPassword.style.color = "green";
    ValidPassword.style.border = "1px green";
  }

  if (!ValidURL(githubinput.value)) {
    ValidURL.innerText = "invalid";
    ValidURL.style.color = "red";
    ValidURL.style.border = "1px red";
  } else {
    ValidURL.style.color = "green";
    ValidURL.style.border = "1px green";
  }
  if (!ValidURL(linkedlninput.value)) {
    ValidURL.innerText = "invalid";
    ValidURL.style.color = "red";
    ValidURL.style.border = "1px red";
  } else {
    ValidURL.style.color = "green";
    ValidURL.style.border = "1px green";
  }
}
