document.getElementById('showSignupForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

document.getElementById('showLoginForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});



// title content

document.getElementById('showSignupForm').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    
    // Hide the <i> tag and change the title
    document.getElementById('icon').style.display = 'none';
    document.getElementById('formTitle').textContent = 'SIGNUP PAGE';
});

document.getElementById('showLoginForm').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    
    // Show the <i> tag and change the title back
    document.getElementById('icon').style.display = 'inline-block';
    document.getElementById('formTitle').textContent = 'LOGIN PAGE';
});
