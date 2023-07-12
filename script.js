const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const validation = document.getElementById('validation');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  /* Getting the values of all inputs */
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const repeatPasswordValue = repeatPassword.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else if (!isUsername(usernameValue)) {
    setErrorFor(username, 'Letters only, 4+ characters');
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (!isPassword(passwordValue)) {
    setErrorFor(password, 'a, A, 0-9, @, longer than 8');
  } else {
    setSuccessFor(password);
  }

  if (repeatPasswordValue === '') {
    setErrorFor(repeatPassword, 'Password cannot be blank');
  } else if (password.parentElement.classList.contains('error')) {
    //If the password is not valid, the repeated password should be an error too.
    setErrorFor(repeatPassword, 'Password is not valid');
  } else if (passwordValue !== repeatPasswordValue) {
    setErrorFor(repeatPassword, 'Passwords do not match');
  } else {
    setSuccessFor(repeatPassword);
  }

  if (
    username.parentElement.classList.contains('success') &&
    email.parentElement.classList.contains('success') &&
    password.parentElement.classList.contains('success') &&
    repeatPassword.parentElement.classList.contains('success')
  ) {
    validation.style.display = 'inline-block';
  } else {
    validation.style.display = 'none';
  }

  /* Set success and error succes will target the parent element of the input which has the form control */

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
  }

  /* The functions below are responsible for the validation of the inputs when the submit button is clicked */
  /* There is no function defined for the 'Repeat password' input because it has to be the same as the password so the same criteria is applied */

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  function isUsername(username) {
    return (
      (/[A-Z]/.test(username) || /[a-z]/.test(username)) &&
      !/[0-9]/.test(username) &&
      !/[!@#$%^&*]/.test(username) &&
      username.length >= 4
    );
  }
  function isPassword(password) {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password) &&
      password.length >= 8
    );
  }
}
