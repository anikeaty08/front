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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Elements
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
    const newChatButton = document.getElementById('new-chat-btn');
    const conversationList = document.getElementById('conversation-list');
    
    // Sample responses for demonstration
    const sampleResponses = [
      "I'd be happy to help with that! Let me think about this for a moment...",
      "That's an interesting question. From my understanding, there are several factors to consider...",
      "Based on the information available to me, I can tell you that this topic has multiple perspectives...",
      "Great question! Here's what I know about this subject...",
      "I'd like to provide some context before answering your question directly..."
    ];
    
    // More detailed responses for specific keywords
    const keywordResponses = {
      "hello": "Hello! How can I assist you today?",
      "help": "I'm here to help! Please let me know what you need assistance with, and I'll do my best to provide information or guidance.",
      "thanks": "You're welcome! If you have any other questions or need further assistance, feel free to ask.",
      "weather": "I don't have real-time access to weather data, but I can help you understand weather patterns or direct you to reliable weather services.",
      "javascript": "JavaScript is a programming language commonly used to create interactive effects within web browsers. What specific aspect of JavaScript would you like to know about?",
      "python": "Python is a high-level, interpreted programming language known for its readability and versatility. It's widely used in data science, web development, automation, and many other fields. What would you like to know about Python?"
    };

    // Function to add user message to chat
    function addUserMessage(message) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'flex items-start';
      messageDiv.innerHTML = `
        <div class="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mr-3">
          <span class="text-xs font-medium text-white">YN</span>
        </div>
        <div class="flex-1">
          <div class="text-sm text-gray-200">
            <p class="mb-2"><strong>You</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // Add to conversation list
      addToConversationList(message);
    }
    
    // Function to add AI response to chat
    function addAIResponse(message) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'flex items-start';
      messageDiv.innerHTML = `
        <div class="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mr-3">
          <svg fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13v4h-3v2h3v4h2v-4h3v-2h-3V7h-2z"></path></svg>
        </div>
        <div class="flex-1">
          <div class="text-sm text-gray-200">
            <p class="mb-2"><strong>ChatGPT</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to add typing indicator
    function showTypingIndicator() {
      const indicatorDiv = document.createElement('div');
      indicatorDiv.className = 'flex items-start typing-container';
      indicatorDiv.id = 'typing-indicator';
      indicatorDiv.innerHTML = `
        <div class="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mr-3">
          <svg fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13v4h-3v2h3v4h2v-4h3v-2h-3V7h-2z"></path></svg>
        </div>
        <div class="flex-1">
          <div class="text-sm text-gray-200">
            <p class="mb-2"><strong>ChatGPT</strong></p>
            <p class="typing-indicator">
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </p>
          </div>
        </div>
      `;
      chatMessages.appendChild(indicatorDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to remove typing indicator
    function removeTypingIndicator() {
      const indicator = document.getElementById('typing-indicator');
      if (indicator) {
        indicator.remove();
      }
    }
    
    // Function to get response based on user input
    function getAIResponse(userMessage) {
      const lowercaseMessage = userMessage.toLowerCase();
      
      // Check for keyword matches first
      for (const [keyword, response] of Object.entries(keywordResponses)) {
        if (lowercaseMessage.includes(keyword)) {
          return response;
        }
      }
      
      // If no keyword match, return a random response
      return sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
    }
    
    // Function to add conversation to the sidebar list
    function addToConversationList(message) {
      // Truncate message if too long
      const truncatedMessage = message.length > 30 ? message.substring(0, 27) + '...' : message;
      
      const conversationButton = document.createElement('button');
      conversationButton.className = 'w-full text-left rounded-md px-3 py-2 text-sm hover:bg-gray-700 flex items-center justify-between group text-gray-300';
      conversationButton.innerHTML = `
        <div class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
          ${truncatedMessage}
        </div>
      `;
      
      // Insert at the top of the list
      if (conversationList.firstChild) {
        conversationList.insertBefore(conversationButton, conversationList.firstChild);
      } else {
        conversationList.appendChild(conversationButton);
      }
    }
    
    // Function to handle sending a message
    function sendMessage() {
      const message = userInput.value.trim();
      if (message) {
        // Add user message to chat
        addUserMessage(message);
        userInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate AI thinking and responding
        setTimeout(() => {
          removeTypingIndicator();
          const response = getAIResponse(message);
          addAIResponse(response);
        }, 1500);
      }
    }
    
    // Function to clear chat
    function clearChat() {
      while (chatMessages.children.length > 1) {
        chatMessages.removeChild(chatMessages.lastChild);
      }
    }
    
    // Event Listeners
    sendButton.addEventListener('click', sendMessage);
    
    userInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    
    newChatButton.addEventListener('click', clearChat);
    
    // Auto-resize textarea as user types
    userInput.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  
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
      
<div className="w-full max-w-6xl h-[700px] rounded-lg bg-[#1E1E1E] shadow-2xl overflow-hidden border border-gray-700 relative">

<div className="h-6 bg-[#2A2A2A] flex items-center px-3">
<div className="flex items-center space-x-1.5">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
</div>

<div className="flex h-[calc(100%-1.5rem)]">

<div className="w-64 bg-gray-800 flex flex-col border-r border-gray-700">

<div className="p-4">
<button className="w-full flex items-center justify-between rounded-md border border-gray-600 px-3 py-2 text-sm font-medium hover:bg-gray-700 text-white" id="new-chat-btn">
<span className="flex items-center">
<svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5v15m7.5-7.5h-15"></path></svg>
              New chat
            </span>
</button>
</div>

<div className="flex-1 overflow-y-auto">
<div className="px-3 py-2">
<h3 className="text-xs text-gray-400 font-medium mb-2">Today</h3>
<div className="space-y-1" id="conversation-list">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-gray-700 flex items-center justify-between group text-white">
<div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  Explaining quantum computing
                </div>
</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-gray-700 flex items-center justify-between group text-gray-300">
<div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  Creative writing prompts
                </div>
</button>
</div>
</div>
</div>

<div className="border-t border-gray-700 pt-2 pb-4">
<div className="px-3 py-2">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-gray-700 flex items-center text-gray-300">
<svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5.636-1.968m-11.272 0A9 9 0 0 0 12 21Z"></path><circle cx="12" cy="9" r="3"></circle></svg>
              Upgrade to Plus
            </button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-gray-700 flex items-center justify-between text-white">
<div className="flex items-center">
<div className="h-7 w-7 rounded-full bg-green-600 flex items-center justify-center mr-2">
<span className="text-xs font-medium">YN</span>
</div>
<span>Your Name</span>
</div>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01M12 6h.01M12 18h.01"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden relative">

<div className="border-b border-gray-700 p-3 flex items-center justify-between bg-gray-800">
<div className="flex items-center">
<span className="font-medium text-white">ChatGPT</span>
<span className="ml-2 px-2 py-1 rounded-md bg-gray-700 text-xs text-gray-300">3.5</span>
</div>
<div className="flex items-center space-x-2">
<button className="p-1.5 rounded-md hover:bg-gray-700 text-gray-300">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m-7-7h14"></path></svg>
</button>
<button className="p-1.5 rounded-md hover:bg-gray-700 text-gray-300">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="M12 12h.01M12 8h.01M12 16h.01"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-900" id="chat-messages">

<div className="flex items-start">
<div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mr-3">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13v4h-3v2h3v4h2v-4h3v-2h-3V7h-2z"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm text-gray-200">
<p className="mb-2"><strong>ChatGPT</strong></p>
<p>Hello! I'm ChatGPT, an AI assistant created by OpenAI. I'm here to provide information, answer questions, assist with tasks, and engage in conversations on a wide range of topics. How can I help you today?</p>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-700 bg-gray-800">
<div className="relative rounded-lg border border-gray-600 bg-gray-700 shadow-sm">
<textarea className="w-full p-3 pr-12 text-sm bg-transparent focus:outline-none resize-none text-white" id="user-input" placeholder="Message ChatGPT..." rows="1"></textarea>
<button className="absolute right-2 bottom-2 p-1 rounded-md text-gray-400 hover:bg-gray-600" id="send-button">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
</svg>
</button>
</div>
<div className="mt-2 text-xs text-center text-gray-400">
            ChatGPT can make mistakes. Consider checking important information.
          </div>
</div>
</div>
</div>
</div>


    </>
  );
}
