document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('transportation-options');
    const detailsElement = document.getElementById('transportation-details');

    const details = {
        option1: 'Details for option 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        option2: 'Details for option 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        option3: 'Details for option 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        option4: 'Details for option 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
    };

    selectElement.addEventListener('change', function() {
        const selectedOption = selectElement.value;
        detailsElement.textContent = details[selectedOption];
    });

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
            countdownElement.innerHTML = `
                <div class="countdown-box">${days} <span>Days</span></div>
                <div class="countdown-box">${hours} <span>Hours</span></div>
                <div class="countdown-box">${minutes} <span>Minutes</span></div>
                <div class="countdown-box">${seconds} <span>Seconds</span></div>
            `;
        } else {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "The event has started!";
        }
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});
