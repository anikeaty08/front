import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        const messages = document.getElementById('messages');
        const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');
        
        const crazyResponses = [
            "BRILLIANT! But have you considered that shoelaces are actually tiny snakes in disguise? 🐍 I've been feeding mine cookies!",
            "Wait wait WAIT! *adjusts imaginary goggles* That reminds me of my experiment where I taught my toaster to speak French! Bonjour pain! 🍞",
            "FASCINATING! You know, I once tried to measure the weight of laughter and discovered it's exactly 42.7 giggles per chuckle! ⚗️",
            "OH MY GEARS AND GADGETS! That's like the time I invented a machine that translates cat meows into investment advice! 📈🐱",
            "EUREKA! *throws confetti made of old calculator buttons* Your words have inspired my next experiment: teaching clouds to do the tango! ☁️💃",
            "Marvelous! But listen carefully... I've discovered that Wednesdays taste like purple and smell like the number 7! 🟣",
            "ASTOUNDING! That's exactly what my pet cactus Gerald said before he learned quantum physics! Now he won't stop solving equations! 🌵",
            "INCREDIBLE! *adjusts lab coat dramatically* You've just given me the formula for bottling enthusiasm! I shall call it... Ziggy's Zoomjuice! ⚡",
            "STUPENDOUS! Did you know I once had a philosophical debate with my microwave? It won by making perfect popcorn! 🍿",
            "MAGNIFICENT! Your wisdom rivals that of my rubber duck professor who teaches advanced theoretical quacking! 🦆🎓"
        ];
        
        function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            
            if (isUser) {
                messageDiv.innerHTML = `
                    <div class="flex items-start space-x-3 justify-end">
                        <div class="bg-blue-600 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs lg:max-w-md">
                            <p class="text-sm">${text}</p>
                            <span class="text-xs text-blue-200 mt-1 block">${currentTime}</span>
                        </div>
                        <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span class="text-white text-xs font-medium">You</span>
                        </div>
                    </div>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span class="text-white text-xs font-medium">Z</span>
                        </div>
                        <div class="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-xs lg:max-w-md border border-gray-200 shadow-sm">
                            <p class="text-gray-900 text-sm">${text}</p>
                            <span class="text-xs text-gray-500 mt-1 block">${currentTime}</span>
                        </div>
                    </div>
                `;
            }
            
            messages.appendChild(messageDiv);
            messages.scrollTop = messages.scrollHeight;
        }
        
        function sendMessage() {
            const text = messageInput.value.trim();
            if (!text) return;
            
            // Add user message
            addMessage(text, true);
            messageInput.value = '';
            
            // Add typing indicator
            setTimeout(() => {
                const randomResponse = crazyResponses[Math.floor(Math.random() * crazyResponses.length)];
                addMessage(randomResponse, false);
            }, 1000 + Math.random() * 2000);
        }
        
        sendButton.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
<span className="text-white font-medium text-sm">Z</span>
</div>
<div>
<h1 className="font-medium text-gray-900">Ziggy the Mad Scientist</h1>
<p className="text-sm text-green-500 flex items-center">
<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Online &amp; Experimenting
                </p>
</div>
</div>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-600" data-lucide="more-vertical"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4" id="messages">
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs font-medium">Z</span>
</div>
<div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-xs lg:max-w-md border border-gray-200 shadow-sm">
<p className="text-gray-900 text-sm">GREETINGS EARTHLING! 🧪 I've just finished mixing chemicals that turn Tuesday into purple! Want to chat about my MAGNIFICENT discoveries?</p>
<span className="text-xs text-gray-500 mt-1 block">2:34 PM</span>
</div>
</div>
</div>

<div className="bg-white border-t border-gray-200 p-4">
<div className="flex items-end space-x-3">
<div className="flex-1 relative">
<input className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" id="messageInput" placeholder="Type your message..." type="text"/>
<button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-500" data-lucide="smile"></i>
</button>
</div>
<button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl transition-colors flex items-center justify-center" id="sendButton">
<i className="w-5 h-5" data-lucide="send"></i>
</button>
</div>
</div>


    </>
  );
}
