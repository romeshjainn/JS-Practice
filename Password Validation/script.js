// Getting Elements
let firstName = document.getElementById("firstName");
let middleName = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let githubLink = document.getElementById("githubLink");
let linkedinLink = document.getElementById("linkedinLink");
let submit = document.getElementById("submit");

// Error elements
let firstNameError = document.getElementById("firstNameError");
let middleNameError = document.getElementById("middleNameError");
let lastNameError = document.getElementById("lastNameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let githubError = document.getElementById("githubError");
let linkedinError = document.getElementById("linkedinError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

// Regular expression patterns
const passwordPattern = /^(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
const githubPattern = /github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+/;
const linkedinPattern = /linkedin\.com\/in\/[A-Za-z0-9_-]+/;

// First Name validation
firstName.oninput = () => {
  const inputValue = firstName.value;

  for (let i = 0; i < inputValue.length; i++) {
    const asciiValue = inputValue.charCodeAt(i);
    if (
      !(
        (asciiValue >= 65 && asciiValue <= 90) ||
        (asciiValue >= 97 && asciiValue <= 122)
      )
    ) {
      firstNameError.innerText = "Invalid characters";
      firstNameError.style.display = "block";
      break;
    } else {
      firstNameError.style.display = "none";
    }
  }
};

// Middle Name validation
middleName.oninput = () => {
  const inputValue = middleName.value;

  for (let i = 0; i < inputValue.length; i++) {
    const asciiValue = inputValue.charCodeAt(i);
    if (
      !(
        (asciiValue >= 65 && asciiValue <= 90) ||
        (asciiValue >= 97 && asciiValue <= 122)
      )
    ) {
      middleNameError.innerText = "Invalid characters";
      middleNameError.style.display = "block";
      break;
    } else {
      middleNameError.style.display = "none";
    }
  }
};

// Last Name validation
lastName.oninput = () => {
  const inputValue = lastName.value;

  for (let i = 0; i < inputValue.length; i++) {
    const asciiValue = inputValue.charCodeAt(i);
    if (
      !(
        (asciiValue >= 65 && asciiValue <= 90) ||
        (asciiValue >= 97 && asciiValue <= 122)
      )
    ) {
      lastNameError.innerText = "Invalid characters";
      lastNameError.style.display = "block";
      break;
    } else {
      lastNameError.style.display = "none";
    }
  }
};

// Form submission validation
submit.onclick = () => {
  // Email validation
  if (
    !(
      email.value.includes("@gmail.com") ||
      email.value.includes("@outlook.com") ||
      email.value.includes("@yahoo.com") ||
      email.value.includes("@aol.com") ||
      email.value.includes("@mail.com")
    )
  ) {
    emailError.innerText = "Invalid email format";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  // Password validation
  if (password.value.length <= 8 && !passwordPattern.test(password.value)) {
    passwordError.innerText =
      "Password must contain at least 8 characters with a number and a special character";
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }

  // Confirm Password validation
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.innerText = "Passwords do not match";
    confirmPasswordError.style.display = "block";
  } else {
    confirmPasswordError.style.display = "none";
  }

  // GitHub URL validation
  if (!githubPattern.test(githubLink.value)) {
    githubError.innerText = "Invalid GitHub URL format";
    githubError.style.display = "block";
  } else {
    githubError.style.display = "none";
  }

  // LinkedIn URL validation
  if (!linkedinPattern.test(linkedinLink.value)) {
    linkedinError.innerText = "Invalid LinkedIn URL format";
    linkedinError.style.display = "block";
  } else {
    linkedinError.style.display = "none";
  }

  // First Name validation
  if (firstName.value.trim() === "") {
    firstNameError.innerText = "First name cannot be empty";
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
  }

  // Middle Name validation
  if (middleName.value.trim() === "") {
    middleNameError.innerText = "Middle name cannot be empty";
    middleNameError.style.display = "block";
  } else {
    middleNameError.style.display = "none";
  }

  // Last Name validation
  if (lastName.value.trim() === "") {
    lastNameError.innerText = "Last name cannot be empty";
    lastNameError.style.display = "block";
  } else {
    lastNameError.style.display = "none";
  }
};
