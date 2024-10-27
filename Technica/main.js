// Get the message container
const messageContainer = document.getElementById('message-container');

// Add event listeners for existing buttons
document.getElementById('info-btn').addEventListener('click', function() {
    messageContainer.innerText = 'More Information button clicked!';
});

document.getElementById('event-btn').addEventListener('click', function() {
    messageContainer.innerText = 'Event Generator button clicked!';
});

document.getElementById('calendar-btn').addEventListener('click', function() {
    messageContainer.innerText = 'Calendar button clicked!';
});

document.getElementById('check-in-btn').addEventListener('click', function() {
    messageContainer.innerText = 'Daily mood checker button clicked!';
});

