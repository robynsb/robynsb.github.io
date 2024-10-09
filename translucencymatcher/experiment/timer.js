// Start time when user enters the site
var startTime = Date.now();

// Get the form element
var form = document.getElementById('my-form');

// Listen for the form submit event
form.addEventListener('submit', function() {
    // Calculate time spent in seconds
    var timeSpent = Math.floor((Date.now() - startTime) / 1000);

    // Insert time spent into the hidden input field
    document.getElementById('timeSpent').value = timeSpent;
});