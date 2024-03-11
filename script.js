document.addEventListener('DOMContentLoaded', function () {
    // Get references to the textareas and error output div
    var userInput = document.getElementById('userInput');
    var comparisonText = document.getElementById('comparisonText');
    var errorOutput = document.getElementById('errorOutput');

    // Listen for input events on both textareas
    userInput.addEventListener('input', compareText);
    comparisonText.addEventListener('input', compareText);

    // Function to compare text in the textareas
    function compareText() {
        // Get the text from both textareas
        var userText = userInput.value.trim();
        var compareText = comparisonText.value.trim();

        // Compare the text and display error if they are not similar
        if (userText !== compareText) {
            errorOutput.textContent = "Texts do not match!";
        } else {
            errorOutput.textContent = ""; // Clear error message if texts match
        }
    }
});
