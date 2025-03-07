// script.js
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');
    
    // Simulate AI response (replace with actual AI logic)
    const response = `Thank you for your input: ${userInput}.`;
    
    // Display response
    const responseElement = document.createElement('div');
    responseElement.textContent = response;
    chatbox.appendChild(responseElement);
    
    // Clear input field
    document.getElementById('userInput').value = '';
});
