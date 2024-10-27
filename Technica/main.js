// Get the message container
const messageContainer = document.getElementById('message-container');

// Add event listeners for existing buttons
document.getElementById('info-btn').addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/info.html'; // Change to your actual info page URL
});

document.getElementById('event-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Change to your actual event generator page URL
});

document.getElementById('calendar-btn').addEventListener('click', function() {
    window.location.href = 'calendar.html'; // Change to your actual calendar page URL
});

document.getElementById('check-in-btn').addEventListener('click', function() {
    window.location.href = 'test.html'; // Change to your actual check-in page URL
});