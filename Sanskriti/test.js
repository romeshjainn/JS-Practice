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
