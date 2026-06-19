// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {

    /* 1. BOOKING FORM VALIDATION                   */

    var bookingForm = document.getElementById('bookingForm');
    var bookingError = document.getElementById('form-error');
    var bookingSuccess = document.getElementById('form-success');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting normally
            event.preventDefault();

            // Clear previous messages
            if (bookingError) bookingError.textContent = '';
            if (bookingSuccess) bookingSuccess.textContent = '';

            // Get form values
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var phone = document.getElementById('phone').value.trim();
            var style = document.getElementById('tattoo-style').value;
            var description = document.getElementById('description').value.trim();
            var date = document.getElementById('date').value;

            // Validation flag
            var isValid = true;
            var errorMessage = '';

            // Validate Name
            if (name === '') {
                errorMessage += 'Please enter your full name.\n';
                isValid = false;
            } else if (name.length < 2) {
                errorMessage += 'Name must be at least 2 characters.\n';
                isValid = false;
            }

            // Validate Email
            if (email === '') {
                errorMessage += 'Please enter your email address.\n';
                isValid = false;
            } else if (!email.includes('@') || !email.includes('.')) {
                errorMessage += 'Please enter a valid email address.\n';
                isValid = false;
            }

            // Validate Phone
            if (phone === '') {
                errorMessage += 'Please enter your phone number.\n';
                isValid = false;
            } else if (phone.length < 10) {
                errorMessage += 'Phone number must be at least 10 digits.\n';
                isValid = false;
            }

            // Validate Tattoo Style
            if (style === '') {
                errorMessage += 'Please select a preferred tattoo style.\n';
                isValid = false;
            }

            // Validate Description
            if (description === '') {
                errorMessage += 'Please describe your tattoo idea.\n';
                isValid = false;
            }

            // Validate Date
            if (date === '') {
                errorMessage += 'Please select a preferred date.\n';
                isValid = false;
            }

            // Show error or success
            if (!isValid) {
                if (bookingError) {
                    bookingError.textContent = errorMessage;
                    bookingError.style.color = '#E63946';
                    bookingError.style.backgroundColor = '#FEE2E2';
                    bookingError.style.padding = '10px';
                    bookingError.style.borderRadius = '5px';
                    bookingError.style.marginTop = '10px';
                }
            } else {
                if (bookingSuccess) {
                    bookingSuccess.textContent = 'Thank you! Your booking request has been submitted. We will contact you within 48 hours.';
                    bookingSuccess.style.color = '#28A745';
                    bookingSuccess.style.backgroundColor = '#D1FAE5';
                    bookingSuccess.style.padding = '10px';
                    bookingSuccess.style.borderRadius = '5px';
                    bookingSuccess.style.marginTop = '10px';
                }
                // Reset the form after successful submission
                bookingForm.reset();
            }
        });
    }

    /* 2. CONTACT FORM VALIDATION                  */

    var contactForm = document.getElementById('contactForm');
    var contactError = document.getElementById('contact-error');
    var contactSuccess = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting normally
            event.preventDefault();

            // Clear previous messages
            if (contactError) contactError.textContent = '';
            if (contactSuccess) contactSuccess.textContent = '';

            // Get form values
            var name = document.getElementById('contactName').value.trim();
            var email = document.getElementById('contactEmail').value.trim();
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value.trim();

            // Validation flag
            var isValid = true;
            var errorMessage = '';

            // Validate Name
            if (name === '') {
                errorMessage += 'Please enter your name.\n';
                isValid = false;
            } else if (name.length < 2) {
                errorMessage += 'Name must be at least 2 characters.\n';
                isValid = false;
            }

            // Validate Email
            if (email === '') {
                errorMessage += 'Please enter your email address.\n';
                isValid = false;
            } else if (!email.includes('@') || !email.includes('.')) {
                errorMessage += 'Please enter a valid email address.\n';
                isValid = false;
            }

            // Validate Subject
            if (subject === '') {
                errorMessage += 'Please select a subject.\n';
                isValid = false;
            }

            // Validate Message
            if (message === '') {
                errorMessage += 'Please enter your message.\n';
                isValid = false;
            } else if (message.length < 10) {
                errorMessage += 'Message must be at least 10 characters.\n';
                isValid = false;
            }

            // Show error or success
            if (!isValid) {
                if (contactError) {
                    contactError.textContent = errorMessage;
                    contactError.style.color = '#E63946';
                    contactError.style.backgroundColor = '#FEE2E2';
                    contactError.style.padding = '10px';
                    contactError.style.borderRadius = '5px';
                    contactError.style.marginTop = '10px';
                }
            } else {
                if (contactSuccess) {
                    contactSuccess.textContent = 'Thank you! Your message has been sent. We will respond within 48 hours.';
                    contactSuccess.style.color = '#28A745';
                    contactSuccess.style.backgroundColor = '#D1FAE5';
                    contactSuccess.style.padding = '10px';
                    contactSuccess.style.borderRadius = '5px';
                    contactSuccess.style.marginTop = '10px';
                }
                // Reset the form after successful submission
                contactForm.reset();
            }
        });
    }

    /* 3. LIGHTBOX FOR GALLERY                     */

    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');
    var closeBtn = document.querySelector('.close-lightbox');
    var galleryImages = document.querySelectorAll('.gallery-image');

    if (lightbox && galleryImages.length > 0) {
        // Add click event to each gallery image
        galleryImages.forEach(function(img) {
            img.addEventListener('click', function() {
                // Show the lightbox
                lightbox.style.display = 'block';
                // Set the image source to the clicked image
                lightboxImg.src = this.src;
                // Set the caption to the alt text
                if (lightboxCaption) {
                    lightboxCaption.textContent = this.alt;
                }
                // Add animation (fade in)
                lightbox.style.opacity = '1';
            });
        });

        // Close lightbox when clicking the close button
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                lightbox.style.display = 'none';
            });
        }

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(event) {
            if (event.target === this) {
                lightbox.style.display = 'none';
            }
        });

        // Close lightbox with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && lightbox.style.display === 'block') {
                lightbox.style.display = 'none';
            }
        });
    }

    /* 4. LEAFLET MAPS FOR CONTACT PAGE           */

    // Check if Leaflet is available and maps exist
    if (typeof L !== 'undefined') {

        // ----- Map 1: Main Studio - Braamfontein -----
        var map1 = document.getElementById('map1');
        if (map1) {
            var map1Instance = L.map('map1').setView([-26.1900, 28.0300], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map1Instance);

            L.marker([-26.1900, 28.0300]).addTo(map1Instance)
                .bindPopup('<strong>Beru Art Tattoo Studio</strong><br>123 Juta Street<br>Braamfontein, Johannesburg')
                .openPopup();
        }

        // ----- Map 2: Satellite Studio - Melville -----
        var map2 = document.getElementById('map2');
        if (map2) {
            var map2Instance = L.map('map2').setView([-26.1750, 28.0080], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map2Instance);

            L.marker([-26.1750, 28.0080]).addTo(map2Instance)
                .bindPopup('<strong>Beru Art Tattoo Studio - Melville</strong><br>45 7th Street<br>Melville, Johannesburg')
                .openPopup();
        }

    } else {
        console.log('Leaflet library not loaded. Maps will not display.');
    }

    /* 5. SMOOTH SCROLLING FOR NAVIGATION LINKS    */

    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Only apply to same-page links (anchor links)
            if (this.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                var targetId = this.getAttribute('href');
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    console.log('Beru Art Tattoo Studio - JavaScript loaded successfully!');
});