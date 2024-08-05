document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phonenoerror').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('categoryError').innerText = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const password = document.getElementById('password').value.trim();
    const category = document.getElementById('category').value;

    let isValid = true;

    // Validate name
    if (name.length < 2) {
        document.getElementById('nameError').innerText = 'Name must be at least 2 characters long.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate contact number
    const contactPattern = /^\d{10}$/; // Assumes a 10-digit phone number without spaces or dashes
    if (!contactPattern.test(contact)) {
        document.getElementById('phonenoerror').innerText = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Validate category
    if (category === '') {
        document.getElementById('categoryError').innerText = 'Please select a category.';
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // You can add code here to actually submit the form, e.g., via AJAX or by removing event.preventDefault()
        // For example:
        // this.submit(); // Uncomment this line if you want the form to actually submit
    }
});
