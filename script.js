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

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }

  if (repeatPasswordValue === '') {
    setErrorFor(repeatPassword, 'Password cannot be blank');
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

  /* Set error and set succes will target the parent element of the input which has the form control */
  function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
}
