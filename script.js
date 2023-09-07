function updateDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const currentDay = daysOfWeek[currentDate.getUTCDay()];
        const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
        dayElement.textContent = currentDay;
    }

    // Function to update the current UTC time
    function updateUTCTime() {
        const currentDate = new Date();
        const currentUTCTime = currentDate.toISOString().substr(11, 8);
        const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
        timeElement.textContent = currentUTCTime;
    }

    // Call the functions to update the elements on page load
    updateDayOfWeek();
    updateUTCTime();

    // Set up a timer to update the time every second (1000 milliseconds)
    setInterval(updateUTCTime, 1000);
