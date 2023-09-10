const firstnameinput = document.getElementById("firstname");
const middlenameinput = document.getElementById("middlename");
const lastnameinput = document.getElementById("lastname");
const githubinput = document.getElementById("git");
const linkedlninput = document.getElementById("Linkedln");
const submitButton = document.getElementById("submit-btn");
// console.log(submitButton);
const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
const passwordconfirm = document.getElementById("confirm-password");
const DOB = document.getElementById("DOB");
const dobError = document.getElementById("dobError");

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
    middlenameinput.style.border = "1px solid red";
    // middlenameinput.style.color = "red";
  } else {
    // middlenameinput.style.border = "1px solid green";
    // middlenameinput.style.color = "green";
  }

  if (!ValidCharacter.test(firstnameinput.value)) {
    firstnameinput.value = "invalid";
    firstnameinput.style.border = "1px solid red";
    // firstnameinput.style.color = "red";
  } else {
    // firstnameinput.style.border = "1px solid green";
    // firstnameinput.style.color = "green";
  }
  if (!ValidCharacter.test(lastnameinput.value)) {
    lastnameinput.value = "invalid";
    lastnameinput.style.border = "1px solid red";

    // lastnameinput.style.color = "red";
    // lastnameinput.style.border = "1px red";
  } else {
    // lastnameinput.style.border = "1px solid green";
    // lastnameinput.style.color = "green";
  }

  if (!ValidEmail.test(emailinput.value)) {
      emailinput.value = "invalid";
    emailinput.style.border = "1px solid red";
      
    // emailinput.style.color = "red";
    // emailinput.style.border = "1px red";
  } else {
    // emailinput.style.color = "green";
    // emailinput.style.border = "1px green";
  }

  if (!ValidPassword.test(passwordinput.value)) {
      passwordinput.value = "invalid";
    passwordinput.style.border = "1px solid red";
      
    // ValidPassword.style.color = "red";
    // ValidPassword.style.border = "1px red";
  } else {
    // ValidPassword.style.color = "green";
    // ValidPassword.style.border = "1px green";
  }
  if (!(passwordinput == passwordconfirm)) {
      passwordconfirm.value = "invalid";
    passwordconfirm.style.border = "1px solid red";
      
    // ValidPassword.style.color = "red";
    // ValidPassword.style.border = "1px red";
  } else {
    // ValidPassword.style.color = "green";
    // ValidPassword.style.border = "1px green";
  }

  if (!ValidURL.test(githubinput.value)) {
      githubinput.value = "invalid";
    githubinput.style.border = "1px solid red";
      
    // ValidURL.style.color = "red";
    // ValidURL.style.border = "1px red";
  } else {
    // ValidURL.style.color = "green";
    // ValidURL.style.border = "1px green";
  }
  if (!ValidURL.test(linkedlninput.value)) {
      linkedlninput.value = "invalid";
    linkedlninput.style.border = "1px solid red";
      
    // ValidURL.style.color = "red";
    // ValidURL.style.border = "1px red";
  } else {
    // ValidURL.style.color = "green";
    // ValidURL.style.border = "1px green";
  }

  // dob logic here
  if (!DOB.value) {
    //   dobError.style.display = "block";
      DOB.style.border = "1px solid red"
  }
}
