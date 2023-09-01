let firstName = document.getElementById("firstName");
let middleName = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let github = document.getElementById("github");
let linkedin = document.getElementById("linkedin");
let dob = document.getElementById("dob");
let submit = document.getElementById("submit");
let okbox = document.getElementById("okbox");
let ok = document.getElementById("ok");

const dateError = document.getElementById("dobError");
let firstNameError = document.getElementById("firstNameError");
let middleNameError = document.getElementById("middleNameError");
let lastNameError = document.getElementById("lastNameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let githubError = document.getElementById("githubError");
let linkedinError = document.getElementById("linkedinError");

const passwordPattern = /^(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
const githubPattern = /github\.com\/([A-Za-z_-]+\/)?[A-Za-z0-9_-]+$/;
const linkedinPattern = /linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/;

firstName.oninput = () => {
  const inputValue = firstName.value;
  const regex = /^[A-Za-z]+$/;

  if (!regex.test(inputValue)) {
    firstNameError.innerText = "Invalid characters";
    firstNameError.style.display = "block";
    firstName.style.outline = "1px solid red";
  } else {
    firstNameError.style.display = "none";
    firstName.style.outline = "none";
  }
};

middleName.oninput = () => {
  const inputValue = middleName.value;
  const regex = /^[A-Za-z]*$/;

  if (!regex.test(inputValue)) {
    middleNameError.innerText = "Invalid characters";
    middleNameError.style.display = "block";
    middleName.style.outline = "1px solid red";
  } else {
    middleNameError.style.display = "none";
    middleName.style.outline = "none";
  }
};

lastName.oninput = () => {
  const inputValue = lastName.value;
  const regex = /^[A-Za-z]+$/;

  if (!regex.test(inputValue)) {
    lastNameError.innerText = "Invalid characters";
    lastNameError.style.display = "block";
    lastName.style.outline = "1px solid red";
  } else {
    lastNameError.style.display = "none";
    lastName.style.outline = "none";
  }
};

signUp.onclick = () => {
  // Email validation
  if (!/.+@.+\..+/.test(email.value)) {
    emailError.innerText = "Invalid email format";
    emailError.style.display = "block";
    email.style.outline = "1px solid red";
  } else {
    emailError.style.display = "none";
    email.style.outline = "none";
  }

  // Password validation
  if (password.value.length < 8 || !passwordPattern.test(password.value)) {
    passwordError.innerText =
      "Password must contain at least 8 characters with a number and a special character";
    passwordError.style.display = "block";
    password.style.outline = "1px solid red";
  } else {
    passwordError.style.display = "none";
    password.style.outline = "none";
  }

  // GitHub URL validation
  if (github.value.trim() !== "" && !githubPattern.test(github.value)) {
    githubError.innerText = "Invalid GitHub URL format";
    githubError.style.display = "block";
    github.style.outline = "1px solid red";
  } else {
    githubError.style.display = "none";
    github.style.outline = "none";
  }

  // LinkedIn URL validation
  if (linkedin.value.trim() !== "" && !linkedinPattern.test(linkedin.value)) {
    linkedinError.innerText = "Invalid LinkedIn URL format";
    linkedinError.style.display = "block";
    linkedin.style.outline = "1px solid red";
  } else {
    linkedinError.style.display = "none";
    linkedin.style.outline = "none";
  }

  // Date of Birth validation
  if (!dob.value) {
    dateError.style.display = "block";
  } else {
    dateError.style.display = "none";
  }

  if (
    emailError.style.display === "none" &&
    passwordError.style.display === "none" &&
    githubError.style.display === "none" &&
    linkedinError.style.display === "none" &&
    firstNameError.style.display === "none" &&
    middleNameError.style.display === "none" &&
    lastNameError.style.display === "none" &&
    dateError.style.display === "none"
  ) {
    okbox.style.display = "block";
  }
};
