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



    document.getElementById('sendButton').addEventListener('click', sendMessage);
    document.getElementById('messageInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    function sendMessage() {
      const input = document.getElementById('messageInput');
      const message = input.value.trim();
      
      if (message) {
        const chatContainer = document.getElementById('chatContainer');
        const now = new Date();
        const time = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ' ' + (now.getHours() >= 12 ? 'PM' : 'AM');
        
        // Create user message
        const userMsg = document.createElement('div');
        userMsg.className = 'flex items-start max-w-3xl mx-auto fade-in';
        userMsg.innerHTML = `
          <div class="flex-1">
            <div class="bg-indigo-900/20 border border-indigo-700/30 p-4 rounded-lg text-sm text-slate-200 leading-relaxed ml-12">
              <p>${message}</p>
            </div>
            <div class="mt-1.5 text-xs text-slate-500 text-right">${time}</div>
          </div>
          <div class="w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-medium ml-4 flex-shrink-0">
            You
          </div>
        `;
        
        chatContainer.appendChild(userMsg);
        
        // Auto-reply after a short delay
        setTimeout(() => {
          const aiMsg = document.createElement('div');
          aiMsg.className = 'flex items-start max-w-3xl mx-auto fade-in';
          aiMsg.innerHTML = `
            <div class="w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-medium mr-4 flex-shrink-0">
              AI
            </div>
            <div class="flex-1">
              <div class="bg-slate-800/50 border border-slate-700/50 p-4 rounded-lg text-sm text-slate-300 leading-relaxed">
                <p>I understand what you're looking for. Let me help you with that request.</p>
              </div>
              <div class="mt-1.5 text-xs text-slate-500">${time}</div>
            </div>
          `;
          
          chatContainer.appendChild(aiMsg);
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 800);
        
        input.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
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
      

<aside className="w-64 border-r border-slate-800 flex flex-col">

<div className="p-4 border-b border-slate-800">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
<svg className="h-4 w-4 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
<path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
</svg>
</div>
<h1 className="text-sm font-semibold text-slate-100">Wavelength</h1>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4">
<div className="px-3 mb-3">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3">Conversations</h2>
</div>
<div className="space-y-1 px-3">
<a className="flex items-center px-3 py-2 text-sm rounded-md bg-slate-800/40 text-slate-100" href="#">
<svg className="h-4 w-4 mr-3 text-slate-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd"></path>
</svg>
<span>Recent Chat</span>
</a>
<a className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-slate-800/30 text-slate-400" href="#">
<svg className="h-4 w-4 mr-3 text-slate-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
</svg>
<span>Team Discussion</span>
</a>
<a className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-slate-800/30 text-slate-400" href="#">
<svg className="h-4 w-4 mr-3 text-slate-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" fill-rule="evenodd"></path>
</svg>
<span>Support</span>
</a>
</div>
<div className="px-3 mt-6 mb-3">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3">Pinned</h2>
</div>
<div className="space-y-1 px-3">
<a className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-slate-800/30 text-slate-400" href="#">
<svg className="h-4 w-4 mr-3 text-slate-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
</svg>
<span>Project Ideas</span>
</a>
</div>
</nav>

<div className="p-4 border-t border-slate-800">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-xs font-medium">
          JD
        </div>
<div className="ml-3">
<p className="text-sm font-medium text-slate-200">John Doe</p>
<p className="text-xs text-slate-500">john@example.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden">

<header className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center">
<div className="flex space-x-2 mr-4">
<div className="w-3 h-3 rounded-full bg-red-500 hover-fade cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 hover-fade cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-green-500 hover-fade cursor-pointer"></div>
</div>
<h2 className="text-sm font-medium text-slate-300 ml-4">Recent Chat</h2>
<div className="ml-auto flex items-center space-x-3">
<button className="text-slate-400 hover:text-slate-300">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill-rule="evenodd"></path>
</svg>
</button>
<button className="text-slate-400 hover:text-slate-300">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-slate-900 to-slate-950" id="chatContainer">

<div className="flex items-start max-w-3xl mx-auto fade-in">
<div className="w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-medium mr-4 flex-shrink-0">
          AI
        </div>
<div className="flex-1">
<div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-lg text-sm text-slate-300 leading-relaxed">
<p>Hello! I'm your AI assistant. How can I help you today with your project?</p>
</div>
<div className="mt-1.5 text-xs text-slate-500">10:42 AM</div>
</div>
</div>

<div className="flex items-start max-w-3xl mx-auto fade-in">
<div className="flex-1">
<div className="bg-indigo-900/20 border border-indigo-700/30 p-4 rounded-lg text-sm text-slate-200 leading-relaxed ml-12">
<p>I need help designing a new dashboard for our analytics platform. We want something clean and minimal.</p>
</div>
<div className="mt-1.5 text-xs text-slate-500 text-right">10:45 AM</div>
</div>
<div className="w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-medium ml-4 flex-shrink-0">
          You
        </div>
</div>

<div className="flex items-start max-w-3xl mx-auto fade-in">
<div className="w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-medium mr-4 flex-shrink-0">
          AI
        </div>
<div className="flex-1">
<div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-lg text-sm text-slate-300 leading-relaxed">
<p>Great! For a clean, minimal analytics dashboard, I'd recommend:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Focus on essential metrics only</li>
<li>Use subtle borders and dividers</li>
<li>Implement a monochromatic color scheme with accent colors for important data</li>
<li>Utilize whitespace effectively</li>
</ul>
<p className="mt-2">Would you like me to suggest some specific layout options?</p>
</div>
<div className="mt-1.5 text-xs text-slate-500">10:47 AM</div>
</div>
</div>
</div>

<div className="border-t border-slate-800 p-4 bg-slate-900">
<div className="max-w-3xl mx-auto">
<div className="flex items-end">
<div className="flex-1 relative">
<textarea className="w-full py-2.5 px-4 rounded-lg bg-slate-800/70 border border-slate-700/50 focus:outline-none border-pulse text-sm text-slate-200 placeholder-slate-500 resize-none" id="messageInput" placeholder="Type a message..." rows="1"></textarea>
<div className="absolute right-2 bottom-2.5 flex space-x-1 text-slate-400">
<button className="p-1 hover:text-slate-300">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4a.5.5 0 01-.5-.5v-6.5a.5.5 0 01.5-.5h12a.5.5 0 01.5.5V15a.5.5 0 01-.5.5zM4 4.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" fill-rule="evenodd"></path>
</svg>
</button>
<button className="p-1 hover:text-slate-300">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<button className="ml-3 p-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 flex-shrink-0" id="sendButton">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
