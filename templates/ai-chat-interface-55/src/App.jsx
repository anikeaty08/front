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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Outfit', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
bg: '#131314', // Gemini Dark
surface: '#1E1F20',
surfaceHover: '#2D2E2F',
accent: '#A8C7FA',
secondary: '#444746',
},
animation: {
'spin-slow': 'spin 3s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slide-up': 'slideUp 0.3s ease-out forwards',
'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
slideUp: {
'0%': { transform: 'translateY(10px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
},
slideInRight: {
'0%': { transform: 'translateX(100%)', opacity: '0' },
'100%': { transform: 'translateX(0)', opacity: '1' },
}
}
}
}
}



        // --- Variables ---
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        const chatStream = document.getElementById('chat-stream');
        const welcomeScreen = document.getElementById('welcome-screen');
        const liveCanvas = document.getElementById('live-canvas');
        const mainContainer = document.getElementById('main-container');
        const codeDisplay = document.getElementById('code-display');
        let isTyping = false;

        // --- Event Listeners ---
        chatInput.addEventListener('input', () => {
            if (chatInput.value.trim().length > 0) {
                sendBtn.removeAttribute('disabled');
                sendBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            } else {
                sendBtn.setAttribute('disabled', 'true');
                sendBtn.classList.add('opacity-50', 'cursor-not-allowed');
            }
        });

        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        // --- Functions ---

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('w-[280px]');
            sidebar.classList.toggle('w-0');
            sidebar.classList.toggle('overflow-hidden');
            sidebar.classList.toggle('p-0');
        }

        function setInput(text) {
            chatInput.value = text;
            chatInput.focus();
            adjustHeight(chatInput);
            sendBtn.removeAttribute('disabled');
            sendBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        function adjustHeight(element) {
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        }

        function showToolbar() {
            document.getElementById('input-toolbar').classList.remove('opacity-0');
        }

        function newChat() {
            chatStream.innerHTML = '';
            chatStream.appendChild(welcomeScreen);
            welcomeScreen.classList.remove('hidden');
            closeCanvas();
        }

        function closeCanvas() {
            liveCanvas.classList.add('translate-x-full');
            liveCanvas.classList.add('hidden');
            setTimeout(() => liveCanvas.classList.remove('flex'), 500); // Wait for transition
            // Reset main container width logic if needed, but flex handles it
        }

        function openCanvas(codeContent) {
            liveCanvas.classList.remove('hidden');
            liveCanvas.classList.add('flex');
            // Allow reflow
            setTimeout(() => {
                liveCanvas.classList.remove('translate-x-full');
            }, 10);
            
            // Typewriter effect for code
            codeDisplay.innerHTML = '';
            let i = 0;
            const typeCode = setInterval(() => {
                codeDisplay.textContent += codeContent.charAt(i);
                i++;
                if (i > codeContent.length - 1) clearInterval(typeCode);
            }, 5);
        }

        function formatTime() {
            return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }

        function sendMessage() {
            const text = chatInput.value.trim();
            if (!text || isTyping) return;

            // 1. Hide Welcome Screen
            if (!welcomeScreen.classList.contains('hidden')) {
                welcomeScreen.classList.add('hidden');
            }

            // 2. Add User Message
            addMessage(text, 'user');
            
            // 3. Clear Input
            chatInput.value = '';
            chatInput.style.height = 'auto';
            sendBtn.setAttribute('disabled', 'true');
            sendBtn.classList.add('opacity-50', 'cursor-not-allowed');
            document.getElementById('input-toolbar').classList.add('opacity-0');

            // 4. Simulate Processing
            isTyping = true;
            const loadingId = addLoadingIndicator();

            // 5. Simulate AI Response (Delay)
            setTimeout(() => {
                removeLoadingIndicator(loadingId);
                generateAIResponse(text);
                isTyping = false;
            }, 2000);
        }

        function addMessage(content, role) {
            const div = document.createElement('div');
            div.className = `flex gap-4 animate-slide-up ${role === 'user' ? 'justify-end' : ''}`;
            
            if (role === 'user') {
                div.innerHTML = `
                    <div class="max-w-[80%] bg-[#2D2E2F] text-gray-100 px-5 py-3.5 rounded-[1.5rem] rounded-tr-sm">
                        <p class="text-sm leading-relaxed whitespace-pre-wrap">${content}</p>
                    </div>
                `;
            } else {
                div.innerHTML = `
                    <div class="flex-shrink-0 mt-1">
                         <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px]">
                            <div class="w-full h-full rounded-full bg-bg flex items-center justify-center">
                                <span class="iconify text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-purple-400" data-icon="lucide:sparkles" data-width="16"></span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 max-w-[90%] space-y-2">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Nebula</span>
                            <span class="text-[10px] text-gray-600">${formatTime()}</span>
                        </div>
                        <div class="text-sm text-gray-300 leading-relaxed message-content">${content}</div>
                        
                        <!-- Response Actions -->
                        <div class="flex gap-2 pt-2">
                             <button class="p-1.5 text-gray-500 hover:text-white rounded-lg hover:bg-white/5 transition-colors" title="Copy">
                                <span class="iconify" data-icon="lucide:copy" data-width="14"></span>
                            </button>
                             <button class="p-1.5 text-gray-500 hover:text-white rounded-lg hover:bg-white/5 transition-colors" title="Regenerate">
                                <span class="iconify" data-icon="lucide:refresh-cw" data-width="14"></span>
                            </button>
                             <button class="p-1.5 text-gray-500 hover:text-white rounded-lg hover:bg-white/5 transition-colors" title="Good response">
                                <span class="iconify" data-icon="lucide:thumbs-up" data-width="14"></span>
                            </button>
                        </div>
                    </div>
                `;
            }
            
            chatStream.appendChild(div);
            // Scroll to bottom
            const container = document.getElementById('chat-container');
            container.scrollTop = container.scrollHeight;
        }

        function addLoadingIndicator() {
            const id = 'loader-' + Date.now();
            const div = document.createElement('div');
            div.id = id;
            div.className = 'flex gap-4 animate-pulse';
            div.innerHTML = `
                 <div class="flex-shrink-0 mt-1">
                     <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px] opacity-50">
                        <div class="w-full h-full rounded-full bg-bg"></div>
                    </div>
                </div>
                <div class="flex-1 max-w-[90%] space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="text-xs text-gray-500 font-medium">Reasoning...</span>
                    </div>
                    <!-- Cognitive Trace Visualizer -->
                    <div class="flex flex-col gap-2 max-w-sm">
                        <div class="flex items-center gap-2 text-xs text-gray-600">
                             <span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="12"></span>
                             Analyzing context
                        </div>
                        <div class="h-1 w-full bg-surface rounded-full overflow-hidden">
                            <div class="loader-bar"></div>
                        </div>
                    </div>
                </div>
            `;
            chatStream.appendChild(div);
            const container = document.getElementById('chat-container');
            container.scrollTop = container.scrollHeight;
            return id;
        }

        function removeLoadingIndicator(id) {
            const el = document.getElementById(id);
            if (el) el.remove();
        }

        function generateAIResponse(userText) {
            // Mock logic to determine response type
            let responseHTML = '';
            let openCanvasCode = null;

            if (userText.toLowerCase().includes('code') || userText.toLowerCase().includes('python') || userText.toLowerCase().includes('script')) {
                // Code Response
                responseHTML = `
                    <div class="space-y-4">
                        <div class="bg-[#18181b] border border-white/5 rounded-xl p-3 cursor-pointer hover:border-blue-500/30 transition-colors group" onclick="openCanvas(this.dataset.code)" data-code="import pandas as pd\nimport numpy as np\n\ndef analyze_stock(ticker):\n    print(f'Analyzing {ticker}...')\n    data = np.random.normal(100, 10, 100)\n    return pd.DataFrame(data, columns=['Price'])\n\nresult = analyze_stock('AAPL')\nprint(result.head())">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-2">
                                    <span class="iconify text-blue-400" data-icon="lucide:file-code" data-width="16"></span>
                                    <span class="text-xs text-gray-300 font-mono">analysis.py</span>
                                </div>
                                <span class="text-[10px] text-gray-500 group-hover:text-blue-400 transition-colors">Click to open Live Canvas</span>
                            </div>
                            <div class="font-mono text-xs text-gray-500 truncate">import pandas as pd...</div>
                        </div>
                        <p>I've drafted a Python script to analyze the stock data as requested. It uses pandas for data manipulation and numpy for simulation. Click the block above to view and run the code in the <b>Live Canvas</b>.</p>
                    </div>
                `;
                openCanvasCode = "import pandas as pd\nimport numpy as np\n\ndef analyze_stock(ticker):\n    print(f'Analyzing {ticker}...')\n    # Simulate data fetching\n    data = np.random.normal(100, 10, 100)\n    return pd.DataFrame(data, columns=['Price'])\n\n# Main execution\nresult = analyze_stock('AAPL')\nprint(' Analysis Complete:')\nprint(result.describe())";
            } else if (userText.toLowerCase().includes('image') || userText.toLowerCase().includes('visual')) {
                // Image Generation Mock
                 responseHTML = `
                    <p class="mb-3">Here is a visual representation based on your prompt.</p>
                    <div class="grid grid-cols-2 gap-2 max-w-md">
                        <div class="aspect-square rounded-xl bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center relative group overflow-hidden border border-white/10">
                            <span class="iconify text-white/20 group-hover:scale-110 transition-transform duration-700" data-icon="lucide:image" data-width="40"></span>
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button class="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs text-white">Upscale</button>
                            </div>
                        </div>
                         <div class="aspect-square rounded-xl bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center relative group overflow-hidden border border-white/10">
                            <span class="iconify text-white/20 group-hover:scale-110 transition-transform duration-700" data-icon="lucide:image" data-width="40"></span>
                        </div>
                    </div>
                `;
            } else {
                // Text Response with "Cognitive Trace"
                responseHTML = `
                    <!-- Cognitive Trace Collapsible -->
                    <details class="mb-4 group">
                        <summary class="list-none cursor-pointer">
                            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface hover:bg-surfaceHover text-xs text-gray-400 transition-colors select-none">
                                <span class="iconify group-open:rotate-90 transition-transform" data-icon="lucide:chevron-right" data-width="12"></span>
                                <span class="iconify text-blue-400" data-icon="lucide:brain-circuit" data-width="14"></span>
                                View thought process
                            </div>
                        </summary>
                        <div class="mt-2 pl-4 border-l-2 border-white/5 space-y-2">
                            <div class="text-[10px] text-gray-500 font-mono">1. Analyzing intent: "${userText}"</div>
                            <div class="text-[10px] text-gray-500 font-mono">2. Retrieving knowledge base: General</div>
                            <div class="text-[10px] text-gray-500 font-mono">3. Formulating response structure</div>
                        </div>
                    </details>
                    
                    <p>That is an interesting topic. To better understand it, we need to look at the underlying principles.</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1 marker:text-gray-500">
                        <li><b>Core Concept:</b> The fundamental idea revolves around scalability.</li>
                        <li><b>Application:</b> This can be applied in various fields, from software engineering to urban planning.</li>
                    </ul>
                    <p class="mt-2">Would you like me to elaborate on a specific aspect?</p>
                `;
            }

            // Create container for new message
            const div = document.createElement('div');
            div.className = 'flex gap-4 animate-slide-up';
            div.innerHTML = `
                <div class="flex-shrink-0 mt-1">
                     <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px]">
                        <div class="w-full h-full rounded-full bg-bg flex items-center justify-center">
                            <span class="iconify text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-purple-400" data-icon="lucide:sparkles" data-width="16"></span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 max-w-[90%] space-y-2">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Nebula</span>
                         <span class="text-[10px] text-gray-600">${formatTime()}</span>
                    </div>
                    <div class="text-sm text-gray-300 leading-relaxed message-content typing-cursor"></div>
                     <div class="flex gap-2 pt-2 opacity-0 transition-opacity duration-500" id="actions-${Date.now()}">
                         <button class="p-1.5 text-gray-500 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                            <span class="iconify" data-icon="lucide:copy" data-width="14"></span>
                        </button>
                         <button class="p-1.5 text-gray-500 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                            <span class="iconify" data-icon="lucide:refresh-cw" data-width="14"></span>
                        </button>
                    </div>
                </div>
            `;
            chatStream.appendChild(div);

            // Typing Effect Logic
            const contentDiv = div.querySelector('.message-content');
            const actionsDiv = div.querySelector('div[id^="actions-"]');
            
            // Insert HTML immediately for complex structures (simulating typing would break HTML tags)
            // But we delay the removal of the cursor
            setTimeout(() => {
                contentDiv.innerHTML = responseHTML;
                contentDiv.classList.remove('typing-cursor');
                actionsDiv.classList.remove('opacity-0');
                
                // Auto-scroll
                const container = document.getElementById('chat-container');
                container.scrollTo({
                    top: container.scrollHeight,
                    behavior: 'smooth'
                });

                // Auto open canvas if code
                if (openCanvasCode) {
                    setTimeout(() => openCanvas(openCanvasCode), 500);
                }

            }, 500); // Small delay to feel natural
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
      

<aside className="hidden md:flex w-[280px] flex-col h-full bg-[#0E0E0F] p-4 transition-all duration-300 z-20 shrink-0" id="sidebar">
<div className="flex items-center gap-3 px-2 mb-8">
<button className="p-2 hover:bg-surface rounded-full text-gray-400 transition-colors" onclick="toggleSidebar()">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<span className="text-lg font-medium tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Nebula</span>
</div>
<button className="flex items-center gap-3 px-4 py-3 bg-surface hover:bg-surfaceHover rounded-full text-sm font-medium text-gray-200 transition-all group mb-6 border border-transparent hover:border-white/10 shadow-lg shadow-black/20" onclick="newChat()">
<span className="iconify text-gray-400 group-hover:text-blue-400 transition-colors" data-icon="lucide:plus" data-width="18"></span>
            New Chat
        </button>
<div className="flex-1 overflow-y-auto space-y-2 pr-2">
<div className="px-3 pb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Recent</div>
<div className="group flex items-center gap-3 px-3 py-2 rounded-full hover:bg-surface/50 text-sm cursor-pointer transition-colors text-gray-300">
<span className="iconify text-gray-500" data-icon="lucide:message-square" data-width="14"></span>
<span className="truncate">Quantum Physics Expl...</span>
</div>
<div className="group flex items-center gap-3 px-3 py-2 rounded-full hover:bg-surface/50 text-sm cursor-pointer transition-colors text-gray-300">
<span className="iconify text-gray-500" data-icon="lucide:code-2" data-width="14"></span>
<span className="truncate">React Component Gen</span>
</div>
<div className="group flex items-center gap-3 px-3 py-2 rounded-full hover:bg-surface/50 text-sm cursor-pointer transition-colors text-gray-300">
<span className="iconify text-gray-500" data-icon="lucide:image" data-width="14"></span>
<span className="truncate">Surrealist Landscape</span>
</div>
</div>

<div className="mt-auto pt-4 border-t border-white/5 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface text-sm text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:gem" data-width="16"></span>
                Upgrade Plan
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface text-sm text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:settings" data-width="16"></span>
                Settings
            </button>
<div className="px-3 py-2 flex items-center gap-2 text-[10px] text-gray-600">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Nebula 1.5 Pro • Low Latency
            </div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden transition-all duration-500" id="main-container">

<div className="md:hidden flex items-center justify-between p-4 bg-bg/80 backdrop-blur z-10 sticky top-0">
<span className="text-lg font-medium gradient-text">Nebula</span>
<button className="p-2 text-gray-400"><span className="iconify" data-icon="lucide:menu" data-width="24"></span></button>
</div>

<div className="flex-1 overflow-y-auto px-4 md:px-0 pb-32 pt-8 scroll-smooth" id="chat-container">
<div className="max-w-3xl mx-auto flex flex-col gap-6" id="chat-stream">

<div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-slide-up" id="welcome-screen">
<div className="space-y-2">
<h1 className="text-4xl md:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 tracking-tight">
                            Hello, Creator.
                        </h1>
<p className="text-xl text-gray-500 font-light">How can I help you evolve today?</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl px-4">
<button className="text-left p-4 rounded-2xl bg-surface hover:bg-surfaceHover border border-transparent hover:border-white/5 transition-all group" onclick="setInput('Explain quantum entanglement to a 5 year old')">
<span className="iconify text-purple-400 mb-2 group-hover:scale-110 transition-transform" data-icon="lucide:atom" data-width="20"></span>
<p className="text-sm text-gray-300">Explain quantum entanglement</p>
</button>
<button className="text-left p-4 rounded-2xl bg-surface hover:bg-surfaceHover border border-transparent hover:border-white/5 transition-all group" onclick="setInput('Write a Python script to analyze stock data')">
<span className="iconify text-blue-400 mb-2 group-hover:scale-110 transition-transform" data-icon="lucide:code-2" data-width="20"></span>
<p className="text-sm text-gray-300">Code a stock analyzer</p>
</button>
<button className="text-left p-4 rounded-2xl bg-surface hover:bg-surfaceHover border border-transparent hover:border-white/5 transition-all group" onclick="setInput('Draft a comparison between React and Vue')">
<span className="iconify text-pink-400 mb-2 group-hover:scale-110 transition-transform" data-icon="lucide:file-text" data-width="20"></span>
<p className="text-sm text-gray-300">Compare JS frameworks</p>
</button>
<button className="text-left p-4 rounded-2xl bg-surface hover:bg-surfaceHover border border-transparent hover:border-white/5 transition-all group" onclick="setInput('Generate an image of a futuristic city')">
<span className="iconify text-green-400 mb-2 group-hover:scale-110 transition-transform" data-icon="lucide:image-plus" data-width="20"></span>
<p className="text-sm text-gray-300">Generate creative visuals</p>
</button>
</div>
</div>

</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg via-bg to-transparent pt-10 pb-6 px-4 z-20">
<div className="max-w-3xl mx-auto">

<div className="flex items-center gap-2 mb-2 px-2 opacity-0 transition-opacity duration-300" id="input-toolbar">
<button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-white/5 text-xs text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:globe" data-width="12"></span> Search
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-white/5 text-xs text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:image" data-width="12"></span> Create
                    </button>
</div>
<div className="relative gemini-gradient-border bg-surface rounded-[2rem] shadow-2xl shadow-black/50 transition-all focus-within:shadow-blue-900/10">
<div className="flex items-end p-2">
<button className="p-3 text-gray-400 hover:text-gray-200 hover:bg-white/5 rounded-full transition-colors flex-shrink-0" title="Upload Image">
<span className="iconify" data-icon="lucide:plus-circle" data-width="22" style={{strokeWidth: '1.5'}}></span>
</button>
<textarea className="w-full bg-transparent text-gray-200 text-base placeholder-gray-500 px-2 py-3 focus:outline-none resize-none max-h-32" id="chat-input" oninput="adjustHeight(this); showToolbar()" placeholder="Ask anything..." rows="1"></textarea>
<div className="flex items-center gap-1 pr-1 pb-1">
<button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-white/5 rounded-full transition-colors">
<span className="iconify" data-icon="lucide:mic" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors opacity-50 cursor-not-allowed" disabled="" id="send-btn" onclick="sendMessage()">
<span className="iconify" data-icon="lucide:arrow-up" data-width="20" style={{strokeWidth: '2'}}></span>
</button>
</div>
</div>
</div>
<div className="text-center mt-3 text-[10px] text-gray-500">
                    Nebula may display inaccurate info, including about people, so double-check its responses.
                </div>
</div>
</div>
</main>

<aside className="hidden w-[400px] lg:w-[500px] bg-[#0E0E0F] border-l border-white/5 flex-col h-full z-30 shadow-2xl absolute right-0 top-0 bottom-0 transform translate-x-full transition-transform duration-500 ease-in-out" id="live-canvas">
<div className="h-14 flex items-center justify-between px-4 border-b border-white/5 bg-[#0E0E0F]">
<div className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:sparkles" data-width="16"></span>
<span className="text-sm font-medium text-gray-200">Live Canvas</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
</button>
<button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors" onclick="closeCanvas()">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-0 bg-[#1e1e1e] font-mono text-sm relative">
<div className="absolute top-2 right-2 flex gap-2">
<div className="px-2 py-1 bg-black/50 rounded text-[10px] text-gray-400">Python</div>
<div className="px-2 py-1 bg-black/50 rounded text-[10px] text-gray-400">Read-Only</div>
</div>
<pre className="p-4 text-gray-300"><code className="language-python" id="code-display"># Waiting for generation...</code></pre>
</div>

<div className="h-12 border-t border-white/5 flex items-center justify-between px-4 bg-[#0E0E0F]">
<span className="text-[10px] text-gray-500">Generated in 120ms</span>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 rounded text-xs transition-colors">
<span className="iconify" data-icon="lucide:play" data-width="10"></span>
                Run Code
            </button>
</div>
</aside>


    </>
  );
}
