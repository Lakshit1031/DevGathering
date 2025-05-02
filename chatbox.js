const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.textContent = messageText;
    messagesDiv.appendChild(messageElement);

    messageInput.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Simulate received message for demo
    setTimeout(() => {
        const receivedMessage = document.createElement('div');
        receivedMessage.classList.add('message', 'received');
        receivedMessage.textContent = 'Received: ' + messageText;
        messagesDiv.appendChild(receivedMessage);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000);
}
