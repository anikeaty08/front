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



    // Vanta Fog
    document.addEventListener('DOMContentLoaded', () => {
      VANTA.FOG({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        highlightColor: 0xb5a89c,
        midtoneColor: 0xfdfaf7,
        lowlightColor: 0xcdbeb1,
        baseColor: 0xfdfaf7,
        blurFactor: 0.4,
        speed: 0.5,
        zoom: 0.7
      });
    });

    // Chat Logic
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    function addMessage(text, sender = 'user') {
      const msg = document.createElement('div');
      msg.className = `p-4 w-fit max-w-[75%] ${sender === 'user' ? 'self-end bg-black text-white' : ''}`;
      msg.style = "background:rgba(255,255,255,.12);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-radius:1rem;border:1px solid rgba(255,255,255,.2);box-shadow:0 8px 20px rgba(0,0,0,.08);";
      msg.innerHTML = `<p class="text-sm">${text}</p>`;
      chatWindow.appendChild(msg);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    sendBtn.addEventListener('click', () => {
      const text = userInput.value.trim();
      if (!text) return;

      const task = document.getElementById('task-type').value;
      addMessage(text, 'user');
      userInput.value = '';

      setTimeout(() => {
        addMessage(`TaskTune is processing your ${task !== 'Select Task Type' ? task : 'request'}…`, 'ai');
      }, 600);
    });

    // Enter key support
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendBtn.click();
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
      
<div className="absolute inset-0 z-0 opacity-80" id="vanta-bg"></div>

<div className="relative z-10 flex flex-col w-full max-w-4xl mx-auto h-screen px-4">

<header className="flex items-center justify-between py-5">
<h1 className="text-2xl font-semibold tracking-tight">TaskTune Chat</h1>
<button className="px-5 py-2 bg-black text-white rounded-full text-sm hover:bg-opacity-90 transition">
        New Chat
      </button>
</header>

<main className="flex-1 overflow-y-auto space-y-4 pb-6" id="chat-window">

<div className="p-4 w-fit max-w-[75%]" style={{background: 'rgba(255, 255, 255, .12)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, .2)', boxShadow: '0 8px 20px rgba(0,0,0,.08)'}}>
<p className="text-sm">Hey there! Select a task type and start chatting with TaskTune 🚀</p>
</div>
</main>

<div className="sticky bottom-4 flex items-center gap-4 p-4" style={{background: 'rgba(255, 255, 255, .12)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, .2)', boxShadow: '0 8px 20px rgba(0,0,0,.08)'}}>

<select className="px-3 py-2 rounded-md text-sm bg-white border border-gray-300 focus:outline-none" id="task-type">
<option>Select Task Type</option>
<option>Chat</option>
<option>Write</option>
<option>Code</option>
<option>Summarize</option>
<option>Translate</option>
<option>Extract</option>
<option>Brainstorm</option>
<option>Visualize</option>
<option>Math</option>
<option>Document Analysis</option>
<option>Analyze Data</option>
<option>Chart</option>
<option>Report</option>
</select>

<input className="flex-1 bg-transparent focus:outline-none text-sm" id="user-input" placeholder="Ask TaskTune anything…" type="text"/>

<button className="flex items-center gap-1 px-5 py-2 bg-black text-white rounded-full text-sm hover:bg-opacity-90 transition" id="send-btn">
<span>Send</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2 11 13"></path>
<path d="m22 2-7 20-4-9-9-4Z"></path>
</svg>
</button>
</div>
</div>



    </>
  );
}
