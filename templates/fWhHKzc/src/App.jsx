import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
        function updateUserMessage() {
            const inputField = document.getElementById('userInput');
            const userMessageDisplay = document.getElementById('userMessages');
            if(inputField.value.trim()) {
                const newMessage = document.createElement('p');
                newMessage.className = 'text-gray-700 mb-4';
                newMessage.innerHTML = `<strong>User:</strong> ${inputField.value}`;
                userMessageDisplay.appendChild(newMessage);
                inputField.value = '';  // Clear input field
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="container mx-auto px-4 pt-8">
<div className="bg-white rounded-lg shadow-md p-6">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-bold text-gray-900">AI App</h1>
<button className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200">Settings</button>
</div>
<div className="bg-gray-200 p-4 rounded-lg mb-6">
<h2 className="text-lg font-semibold text-gray-700 mb-2">Chat with AI</h2>
<div className="bg-white rounded-lg shadow-inner p-4 h-64 overflow-y-scroll" id="userMessages">
<p className="text-gray-700 mb-4"><strong>AI:</strong> Hello! How can I assist you today?</p>
</div>
</div>
<div className="relative mb-6">
<input className="w-full text-gray-900 bg-white rounded-lg shadow-sm p-4 focus:outline-none focus:ring-2 focus:ring-blue-500" id="userInput" placeholder="Type your message" type="text"/>
<button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" onclick="updateUserMessage()">Send</button>
</div>
<div className="flex justify-around">
<button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200">Help</button>
<button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200">Contact Us</button>
</div>
</div>
</div>

    </>
  );
}
