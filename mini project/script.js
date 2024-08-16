let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingcart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    shoppingcart.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}



/**admin**/ 


/*farmer*/

    var x=document.getElementById("signup");
    var y=document.getElementById("register");
    var z=document.getElementById("btn");

    function register(){
       x.style.left = "-400px";
       y.style.left = "0px";
       z.style.left = "110px";
    }

    function signup(){
      x.style.left = "0px";
      y.style.left = "450px";
      z.style.left = "0";
   }
/*farmer*/


/*customer*/

var a=document.getElementById("c-signup");
var b=document.getElementById("c-register");
var c=document.getElementById("c-btn");

function regis(){
   a.style.left = "-400px";
   b.style.left = "0px";
   c.style.left = "110px";
}

function sign(){
  a.style.left = "0px";
  b.style.left = "450px";
  c.style.left = "0";
}
/*customer*/



/**product**/
var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay:7500,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
/*product*/


// login

document.addEventListener("DOMContentLoaded", function() {
  // Get the login form and login button
  const loginForm = document.getElementById("LoginForm");
  const loginButton = document.getElementById("Login");

  // Add event listener to the login form submission
  loginForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the username and password values from the form inputs
      const username = document.getElementById("LoginUsername").value;
      const password = document.getElementById("LoginPassword").value;

      // Perform validation (You may add your own validation logic here)

      // Example: Check if the fields are not empty
      if (username.trim() === "" || password.trim() === "") {
          alert("Please enter both username and password.");
          return; // Stop further execution
      }

      // Assuming validation passed, proceed with login
      // Here you can perform AJAX request to submit the form data to server-side for authentication
      
      // For demonstration purposes, let's just display an alert message
      alert("Login successful! Welcome, " + username + "!");
  });
});

// login 



// farmer sign-up


document.addEventListener("DOMContentLoaded", function() {
  // Get the signup form and signup button
  const signupForm = document.getElementById("signup");
  const signupButton = document.getElementById("Submit");

  // Add event listener to the signup form submission
  signupForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the values from the signup form inputs
      const username = document.getElementById("SignupUsername").value;
      const email = document.getElementById("SignupEmail").value;
      const password = document.getElementById("SignupPassword").value;
      const confirmPassword = document.getElementById("SignupConfirmPassword").value;

      // Perform validation (You may add your own validation logic here)

      // Example: Check if the password and confirm password match
      if (password !== confirmPassword) {
          alert("Passwords do not match. Please enter matching passwords.");
          return; // Stop further execution
      }

      // Assuming validation passed, proceed with signup
      // Here you can perform AJAX request to submit the form data to server-side for registration
      
      // For demonstration purposes, let's just display an alert message
      alert("Sign up successful! Welcome, " + username + "!");
  });
});

// farmer sign up


// farmer register


document.addEventListener("DOMContentLoaded", function() {
  // Get the registration form and register button
  const registerForm = document.getElementById("register");
  const registerButton = registerForm.querySelector(".submit");

  // Add event listener to the registration form submission
  registerForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the values from the registration form inputs
      const username = registerForm.querySelector("input[type='text'][placeholder='username']").value;
      const password = registerForm.querySelector("input[type='password'][placeholder='password']").value;
      const product = registerForm.querySelector("input[type='text'][placeholder='product']").value;
      const quantity = registerForm.querySelector("input[type='text'][placeholder='quantity']").value;
      const acceptTerms = registerForm.querySelector("input[type='checkbox']").checked;

      // Perform validation (You may add your own validation logic here)

      // Example: Check if the username, password, product, and quantity are not empty
      if (username.trim() === "" || password.trim() === "" || product.trim() === "" || quantity.trim() === "") {
          alert("Please fill in all the required fields.");
          return; // Stop further execution
      }

      // Example: Check if the user has accepted the terms and conditions
      if (!acceptTerms) {
          alert("Please accept the Terms & Conditions.");
          return; // Stop further execution
      }

    
      alert("Registration successful! Welcome, " + username + "!");
  });
});

// farmer register 


// CUSTOMER SIGNUP

document.addEventListener("DOMContentLoaded", function() {
  // Get the signup form and signup button
  const signupForm = document.getElementById("c-signup");
  const signupButton = signupForm.querySelector(".c-submit");

  // Add event listener to the signup form submission
  signupForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the values from the signup form inputs
      const username = signupForm.querySelector("input[type='text'][placeholder='username']").value;
      const email = signupForm.querySelector("input[type='email'][placeholder='e-mail']").value;
      const password = signupForm.querySelector("input[type='password'][placeholder='password']").value;
      const confirmPassword = signupForm.querySelector("input[type='password'][placeholder='confirm-password']").value;
      const rememberPassword = signupForm.querySelector("input[type='checkbox']").checked;

      // Perform validation (You may add your own validation logic here)

      // Example: Check if the password and confirm password match
      if (password !== confirmPassword) {
          alert("Passwords do not match. Please enter matching passwords.");
          return; // Stop further execution
      }

      // Example: Check if the username, email, and password fields are not empty
      if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
          alert("Please fill in all the required fields.");
          return; // Stop further execution
      }

      alert("Sign up successful! Welcome, " + username + "!");
  });
});

// CUSTOMER SIGNUP


// CUSTOMER REGISTER

document.addEventListener("DOMContentLoaded", function() {
  // Get the registration form and register button
  const registerForm = document.getElementById("c-register");
  const registerButton = registerForm.querySelector(".c-submit");

  // Add event listener to the registration form submission
  registerForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the values from the registration form inputs
      const username = document.getElementById("c-username").value;
      const password = document.getElementById("c-password").value;
      const product = document.getElementById("c-product").value;
      const quantity = document.getElementById("c-quantity").value;
      const acceptTerms = document.getElementById("c-submit").checked;

      // Perform validation (You may add your own validation logic here)

      // Example: Check if the username, password, product, and quantity are not empty
      if (username.trim() === "" || password.trim() === "" || product.trim() === "" || quantity.trim() === "") {
          alert("Please fill in all the required fields.");
          return; // Stop further execution
      }

      // Example: Check if the user has accepted the terms and conditions
      if (!acceptTerms) {
          alert("Please accept the Terms & Conditions.");
          return; // Stop further execution
      }

      alert("Registration successful! Welcome, " + username + "!");
  });
});


// CUSTOMER REGISTER