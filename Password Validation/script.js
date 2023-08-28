// Getting Elements
let firstName = document.getElementById("firstName");
let middleName = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
let firstNameError = document.getElementById("firstNameError");
let middleNameError = document.getElementById("middleNameError");
let lastNameError = document.getElementById("lastNameError");

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
  let emailValue = email.value;
  let passwordValue = password.value;
  let confirmPasswordValue = confirmPassword.value;
  let githubLinkValue = github.value;
  let linkedinLinkValue = github.value;

  if (
    !emailValue.includes(
      "@gmail.com" || "@outlook.com" || "@yahoo.com" || "@aol" || "@mail" || "@"
    )
  ) {
      
  }
};
