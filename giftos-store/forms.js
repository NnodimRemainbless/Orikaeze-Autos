

const loginButton = document.querySelector('.login-button');
const loginForm = document.getElementById('login-form');
const closeButton = document.querySelector('.close-button');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginFormContent = document.getElementById('login-form-content');
const registerFormContent = document.getElementById('register-form-content');

console.log('JavaScript code is running');

loginButton.addEventListener('click', () => {
  console.log('Login button clicked');
  loginForm.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  loginForm.style.display = 'none';
});

registerLink.addEventListener('click', () => {
  loginFormContent.style.display = 'none';
  registerFormContent.style.display = 'block';
});

loginLink.addEventListener('click', () => {
  loginFormContent.style.display = 'block';
  registerFormContent.style.display = 'none';
});