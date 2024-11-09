
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector(".contact-form");
        const confirmationMessage = document.getElementById("confirmationMessage");

        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent default form submission

            // Show confirmation message
            confirmationMessage.style.display = "block";
            confirmationMessage.style.opacity = 1;

            // Clear form fields
            form.reset();

            // Fade out confirmation message after 5 seconds
            setTimeout(() => {
                confirmationMessage.style.opacity = 0;
                setTimeout(() => {
                    confirmationMessage.style.display = "none";
                }, 500);
            }, 3000);
        });
    });
