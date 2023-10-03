document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simulate form submission (you can replace this with your backend code)
        setTimeout(function () {
            contactForm.reset();
            successMessage.style.display = 'block';
            setTimeout(function () {
                successMessage.style.display = 'none';
            }, 5000); // Hide success message after 5 seconds
        }, 1000); // Simulate a delay for demonstration purposes
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll and check if the section is in the viewport
    function checkViewport() {
        var animatedSection = document.querySelector('.animated-section');
        if (isElementInViewport(animatedSection)) {
            animatedSection.classList.add('in-viewport');
        } else {
            animatedSection.classList.remove('in-viewport');
        }
    }

    // Initial check on page load
    checkViewport();

    // Check on scroll
    window.addEventListener('scroll', checkViewport);
});
