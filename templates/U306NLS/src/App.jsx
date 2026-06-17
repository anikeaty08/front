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
      
    // Navigation logic for SPA-like behavior
    document.addEventListener('DOMContentLoaded', function () {
      function showPage(page) {
        document.querySelectorAll('.main-page').forEach(el => el.classList.add('hidden'));
        document.getElementById(page).classList.remove('hidden');
        window.scrollTo(0,0);
      }
      document.querySelectorAll('a[data-nav]').forEach(link => {
        link.addEventListener('click', function(e){
          e.preventDefault();
          showPage(this.getAttribute('data-nav'));
        });
      });

      // Chat logic
      const chatForm = document.getElementById('chat-form');
      if (chatForm) {
        chatForm.addEventListener('submit', function(e){
          e.preventDefault();
          const input = document.getElementById('chat-input');
          const msg = input.value.trim();
          if (!msg) return;
          addMessage('user', msg);
          input.value = '';
          setTimeout(() => {
            // Simulated AI response
            const model = document.getElementById('model-select').value;
            addMessage('ai', `(${model}) Here's a simulated response to: "${msg}"`);
          }, 700);
        });
      }
      function addMessage(role, content) {
        const chat = document.getElementById('chat-messages');
        const msgDiv = document.createElement('div');
        if (role === 'user') {
          msgDiv.className = 'flex justify-end my-2';
          msgDiv.innerHTML = `<div class="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">${content}</div>`;
        } else {
          msgDiv.className = 'flex justify-start my-2';
          msgDiv.innerHTML = `<div class="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 max-w-xs">${content}</div>`;
        }
        chat.appendChild(msgDiv);
        chat.scrollTop = chat.scrollHeight;
      }
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
      

<nav className="bg-white border-b fixed w-full z-20 top-0 left-0 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center space-x-3">
<span className="inline-block text-2xl font-bold text-blue-600 tracking-tight">Mammoth<span className="text-gray-800">AI</span></span>
</div>
<div className="flex items-center space-x-6">
<a className="font-medium hover:text-blue-600 transition" data-nav="home" href="#">Home</a>
<a className="font-medium hover:text-blue-600 transition" data-nav="prompt" href="#">Prompt</a>
<a className="font-medium hover:text-blue-600 transition" data-nav="about" href="#">About</a>
</div>
</div>
</nav>

<main className="main-page pt-24 max-w-4xl mx-auto px-6 animate-fadeIn" id="home">
<section className="text-center space-y-8">
<h1 className="text-5xl font-extrabold text-blue-700 mb-4">Welcome to MammothAI Replica</h1>
<p className="text-lg text-gray-700 mb-6">Experience seamless, modern AI chat—with multiple LLMs and a clean interface inspired by Mammoth.ai.</p>
<div className="flex justify-center space-x-4">
<a className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold text-lg" data-nav="prompt" href="#">Try the Chat</a>
<a className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold text-lg" data-nav="about" href="#">Learn More</a>
</div>
</section>
<section className="mt-16 grid md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-lg shadow text-center">
<svg className="mx-auto mb-3 h-10 w-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M8 16v2a2 2 0 002 2h4a2 2 0 002-2v-2m-2-4V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6m2 4h4"></path></svg>
<h2 className="font-bold text-xl mb-1">Modern AI Chat</h2>
<p className="text-gray-600">Chat with advanced LLMs in a sleek, distraction-free environment.</p>
</div>
<div className="bg-white p-6 rounded-lg shadow text-center">
<svg className="mx-auto mb-3 h-10 w-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5zm0-10V4m0 0L3 9m9-5l9 5"></path></svg>
<h2 className="font-bold text-xl mb-1">Switchable LLMs</h2>
<p className="text-gray-600">Easily toggle between popular language models for different needs.</p>
</div>
<div className="bg-white p-6 rounded-lg shadow text-center">
<svg className="mx-auto mb-3 h-10 w-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm8 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"></path></svg>
<h2 className="font-bold text-xl mb-1">Open &amp; User-Friendly</h2>
<p className="text-gray-600">Intuitive design and smooth navigation for everyone.</p>
</div>
</section>
</main>

<main className="main-page hidden pt-24 max-w-3xl mx-auto px-4" id="prompt">
<section className="bg-white rounded-xl shadow-lg p-6 flex flex-col min-h-[70vh]">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
<svg className="h-7 w-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5zm0-10V4m0 0L3 9m9-5l9 5"></path></svg>
          AI Prompt Chat
        </h2>
<select className="border-gray-300 rounded px-3 py-2 bg-gray-50 focus:outline-blue-500" id="model-select">
<option>GPT-4</option>
<option>GPT-3.5 Turbo</option>
<option>Claude 3 Sonnet</option>
<option>Llama 2</option>
</select>
</div>
<div className="flex-1 overflow-y-auto mb-4 space-y-2 px-1" id="chat-messages">
<div className="flex justify-start my-2">
<div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 max-w-xs">Hello! 👋 How can I help you today?</div>
</div>
</div>
<form className="flex items-center gap-2 mt-4" id="chat-form">
<input autocomplete="off" className="flex-1 py-3 px-4 rounded-lg border focus:outline-blue-600 bg-gray-50" id="chat-input" placeholder="Type your message..." required="" type="text"/>
<button className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition" type="submit">Send</button>
</form>
<p className="text-xs text-gray-400 mt-4 text-center">Switch models anytime. This is a demo and does not connect to real LLMs.</p>
</section>
</main>

<main className="main-page hidden pt-24 max-w-3xl mx-auto px-6 animate-fadeIn" id="about">
<section className="bg-white rounded-xl shadow-lg p-8">
<h2 className="text-3xl font-bold text-blue-700 mb-4">About MammothAI Replica</h2>
<p className="text-gray-700 text-lg mb-4">
        MammothAI Replica is a modern, user-friendly web app inspired by <span className="font-semibold">Mammoth.ai</span>. It demonstrates clean design, seamless navigation, and a multi-model chat interface similar to ChatGPT.
      </p>
<ul className="list-disc ml-8 text-gray-700 mb-4">
<li>Switch between multiple Language Models (LLMs) instantly.</li>
<li>Enjoy a minimalist, distraction-free chat experience.</li>
<li>Navigate easily between pages with a sticky, responsive navbar.</li>
</ul>
<p className="text-gray-500 text-sm">Built with pure HTML and modern styling techniques. For demonstration purposes only — no AI data is sent or received.</p>
<div className="mt-8">
<a className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold" data-nav="home" href="#">Back to Home</a>
</div>
</section>
</main>

<footer className="mt-24 border-t py-6 text-center text-gray-400 text-sm">
    © 2024 MammothAI Replica. Inspired by <a className="text-blue-500 hover:underline" href="https://mammoth.ai" target="_blank">Mammoth.ai</a>.
  </footer>

    </>
  );
}
