// function toggleChatContainer() {
    //   var chatContainer = document.getElementById('chat-container');
    //   chatContainer.classList.toggle('hidden');
    // }

    function sendMessage() {
      const userInput = document.getElementById('user-input').value;
      const chatMessages = document.getElementById('chat-messages');

      // Display user message
      chatMessages.innerHTML += `<div style="color: blue;">You: ${userInput}</div>`;

      // Sample function to process messages
      function processMessage(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost')) {
          return "Our pricing varies depending on the product/service. Could you please specify which product/service you're interested in?";
        } else if (lowerCaseMessage.includes('product') || lowerCaseMessage.includes('service')) {
          return "We offer a wide range of products/services. Could you please specify what you're looking for?";
        } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('reach out')) {
          return "You can contact our sales team at sales@example.com or call us at +123456789.";
        } else {
          return "Hello! Thank you for your inquiry. How can I assist you today?";
        }
      }

      // Send user message to backend server (mocked here)
      const botResponse = processMessage(userInput);

      // Display bot response
      chatMessages.innerHTML += `<div style="color: green;">Bot: ${botResponse}</div>`;

      // Clear input field after sending message
      document.getElementById('user-input').value = '';
    }

    function clearChat() {
      // Clear chat messages
      document.getElementById('chat-messages').innerHTML = '';
    }