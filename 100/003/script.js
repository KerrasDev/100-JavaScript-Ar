document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const minutes = parseFloat(document.getElementById('minutes').value);
    try {
        const seconds = convertMinutesToSeconds(minutes);
        document.getElementById('seconds-output').textContent = `${minutes} minutes is equal to ${seconds} seconds.`;
    } catch (error) {
        document.getElementById('seconds-output').textContent = error.message;
    }
});

function convertMinutesToSeconds(minutes) {
    if (typeof minutes !== 'number' || isNaN(minutes)) {
        throw new Error('Input must be a number');
    }
    return minutes * 60;
}