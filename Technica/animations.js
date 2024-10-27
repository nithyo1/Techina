const calendarContainer = document.getElementById('calendar-container');
const prevButton = document.getElementById('prev-month');
const nextButton = document.getElementById('next-month');

let currentDate = new Date(); // Start with current date
let displayedMonth = currentDate.getMonth(); // Get the current month
let displayedYear = currentDate.getFullYear(); // Get the current year

// Function to render the calendar for the specified month and year
function renderCalendar(month, year) {
    calendarContainer.innerHTML = ''; // Clear previous calendar
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';
    const monthTitle = document.createElement('h2');
    monthTitle.textContent = `${monthNames[month]} ${year}`;
    monthDiv.appendChild(monthTitle);

    const calendarTable = document.createElement('table');
    calendarTable.className = 'calendar';

    // Create table headers
    const headerRow = document.createElement('tr');
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    calendarTable.appendChild(headerRow);

    // Get the first day of the month and number of days
    const firstDay = new Date(year, month, 1);
    const totalDays = new Date(year, month + 1, 0).getDate();
    const startingDay = firstDay.getDay();

    // Create rows for the calendar days
    let row = document.createElement('tr');
    for (let i = 0; i < startingDay; i++) {
        const td = document.createElement('td'); // Empty cells before first day
        row.appendChild(td);
    }

    for (let day = 1; day <= totalDays; day++) {
        const td = document.createElement('td');
        td.setAttribute('data-date', day);
        td.textContent = day;
    
        // Make each day clickable
        td.addEventListener('click', () => {
            const selectedDate = `${monthNames[month]} ${day}, ${year}`;
            window.location.href = `test.html?date=${encodeURIComponent(selectedDate)}`;
        });
    
        row.appendChild(td);
    
        if ((startingDay + day) % 7 === 0) {
            calendarTable.appendChild(row);
            row = document.createElement('tr');
        }
    }
    

    calendarTable.appendChild(row); // Append the last row
    monthDiv.appendChild(calendarTable);
    calendarContainer.appendChild(monthDiv);
}

// Function to update the calendar display
function updateCalendar() {
    renderCalendar(displayedMonth, displayedYear);
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    displayedMonth--;
    if (displayedMonth < 0) {
        displayedMonth = 11;
        displayedYear--;
    }
    updateCalendar();
});

nextButton.addEventListener('click', () => {
    displayedMonth++;
    if (displayedMonth > 11) {
        displayedMonth = 0;
        displayedYear++;
    }
    updateCalendar();
});

// Initial calendar render
updateCalendar();
