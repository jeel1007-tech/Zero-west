        // Function to toggle the mobile navigation menu when hamburger is clicked
        function toggleMenu() {
            const nav = document.querySelector('.nav ul');
            nav.classList.toggle('active');  // Toggles the active class to show/hide the menu
        }

        // JavaScript to handle form submission
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Collect form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you can process the data as needed (e.g., send it to a server via AJAX)
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Redirect to the thank you page
            window.location.href = 'submit.html'; // Change this to your desired page
        });