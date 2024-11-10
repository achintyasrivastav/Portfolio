
    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Show the custom alert
        document.getElementById('custom-alert').classList.remove('hidden');
        
        // Optionally reset the form
        this.reset();
    });

    document.getElementById('close-alert').addEventListener('click', function() {
        // Hide the custom alert
        document.getElementById('custom-alert').classList.add('hidden');
    });
