import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    document.getElementById('send-button').addEventListener('click', function() {
        const userInput = document.getElementById('user-input').value.trim();
        if (userInput) {
            displayMessage(`User: ${userInput}`, 'user');
            document.getElementById('user-input').value = '';
            // Simulating AI response for demonstration
            setTimeout(() => {
                displayMessage(`AI: 感谢您的消息，正在处理中...`, 'ai');
            }, 1000);
        }
    });

    function displayMessage(message, sender) {
        const messagesContainer = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('p-2', 'rounded-md', 'max-w-xs', 'text-sm', 'mx-auto');
        if (sender === 'user') {
            messageElement.classList.add('bg-blue-100', 'text-right');
        } else {
            messageElement.classList.add('bg-gray-200', 'text-left');
        }
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex justify-center items-center h-screen">
<div className="w-full max-w-md bg-white shadow-lg rounded-lg border border-gray-200">
<div className="p-4 border-b">
<h1 className="text-xl font-bold text-gray-700">AI Chatbot</h1>
</div>
<div className="p-4 h-96 overflow-y-auto space-y-2" id="messages">

</div>
<div className="p-4 border-t flex">
<input className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none" id="user-input" placeholder="Type your message..." type="text"/>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md" id="send-button">Send</button>
</div>
</div>
</div>


    </>
  );
}
