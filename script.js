const loginForm = document.querySelector('.login');
const registerForm = document.querySelector('.register');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.addEventListener('click', function() {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

loginLink.addEventListener('click', function() {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});

// By default, show the login form
loginForm.classList.add('active');
