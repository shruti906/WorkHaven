document.addEventListener("DOMContentLoaded", function() {
    fetch('shruti.json')
        .then(response => response.json())
        .then(data => {
            const messageElement = document.getElementById('message');
            messageElement.textContent = data.message;
        })
        .catch(error => {
            console.error("Error fetching the JSON file:", error);
            document.getElementById('message').textContent = "Failed to load message.";
        });
});
