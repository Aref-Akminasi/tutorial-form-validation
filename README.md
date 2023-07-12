# Tutorial Form Validation

This is a tutorial project of a form validation with regular expressions.

## Overview

### Functionality

Users should be able to:

- Write inputs in the input fields.
- View error messages.
- View inputs criterias.

### Screenshots

![](/screenshots/screenshot1.png)

### Links

- Live Site URL: [GitHub Pages](https://aref-akminasi.github.io/tutorial-form-validation/)
- Tutorial: [YouTube](https://www.youtube.com/watch?v=rsd4FNGTRBw&list=WL&index=4&ab_channel=FlorinPop)

## My process

### Built with

- HTML5
- CSS3
- JavaScript

### What I learned

I learned how to write regular expressions for input validation

```js
function isPassword(password) {
  return (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password) &&
    password.length >= 8
  );
}
```
