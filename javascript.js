<script>
    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contact-form');
        const messageContainer = document.getElementById('message-container');

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from actually submitting

            // Get the form input values
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // You can perform additional validation here if needed

            // Display a success message
            messageContainer.innerHTML = `<p>Thank you, ${fullName}! Your message has been sent.</p>`;

            // Clear the form inputs
            contactForm.reset();
        });
    });
</script>
