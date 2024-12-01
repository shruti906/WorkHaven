document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector('form');
    
    signupForm.addEventListener('submit', function(event) {
        // Add any client-side validation if needed
        // For example:
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            event.preventDefault();
            alert('Please enter both email and password.');
        }
    });
});
