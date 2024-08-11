// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve form values
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    // Basic form validation
    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
        this.reset(); // Clear the form fields
    } else {
        alert('Please fill in all fields.');
    }
});
