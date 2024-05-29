document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const countdownElement = document.getElementById('countdown-timer');
    const targetDate = new Date('June 15, 2024 15:30:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        if (timeRemaining >= 0) {
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        } else {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "The event has started!";
        }
    }

    updateCountdown(); // Initial call to populate the timer
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Menu Toggle for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    const navLinksArr = Array.from(navLinks.querySelectorAll('a'));
    navLinksArr.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Close the mobile menu after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    }
});
