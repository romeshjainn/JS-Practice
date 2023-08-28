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

let firstNameError = document.getElementById("firstNameError");
let middleNameError = document.getElementById("middleNameError");
let lastNameError = document.getElementById("lastNameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");
const passwordPattern = /^(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;

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
      firstNameError.style.display = "block";
      break;
    } else {
      firstNameError.style.display = "none";
    }
  }
};

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
      middleNameError.style.display = "block";
      break;
    } else {
      middleNameError.style.display = "none";
    }
  }
};

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
      lastNameError.style.display = "block";
      break;
    } else {
      lastNameError.style.display = "none";
    }
  }
};

submit.onclick = () => {
  // email
  if (
    !(
      email.value.includes("@gmail.com") ||
      email.value.includes("@outlook.com") ||
      email.value.includes("@yahoo.com") ||
      email.value.includes("@aol.com") ||
      email.value.includes("@mail.com")
    )
  ) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  // password

  if (password.value.length <= 8 && !passwordPattern.test(password.value)) {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }

  // confirm password
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.style.display = "block";
  } else {
    confirmPasswordError.style.display = "none";
    }
    
    // github & linkedin
};
