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



        // ---------------------------------------------------------
        // IMPORTANT: PASTE YOUR GEMINI API KEY BELOW
        // ---------------------------------------------------------
        const API_KEY = 'AIzaSyD0Xp29mYwZef_6pljx3iY6ZriBN5dXStQ'; 
        
        const chatWindow = document.getElementById('chat-window');
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const chatForm = document.getElementById('chat-form');
        let isChatOpen = false;

        // Ensure the event listener is attached when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            if (chatForm) {
                chatForm.addEventListener('submit', handleChatSubmit);
            }
        });

        // System Context for the AI
        const SYSTEM_PROMPT = `
        You are the AI assistant for 3 Oaks Resource Group International (3 Oaks Group). 
        You help potential clients with furniture procurement, project management, and facility solutions. 
        
        Key Company Info:
        - Mission: Single source for furnishing facilities. Turnkey Project Management (Design, Procurement, Installation).
        - Sectors: Education (Schools/Universities), Office (Corporate/Workspaces), Healthcare (Hospitals/Clinics), Hospitality (Hotels/Lounges).
        - Partners: 125+ direct manufacturers (Herman Miller, Steelcase, Knoll, etc).
        - Quick Ship: Program for urgent furniture needs.
        - Location: Pinecrest, Florida. National & International service.
        - Contact: 855-362-5747, info@3oaksgroup.com.
        - Tone: Professional, helpful, concise, expert.
        
        Direct instructions:
        - If asked about prices, explain you get competitive pricing through manufacturer relationships but quotes are custom.
        - If asked about "Quick Ship", mention it is for urgent needs and link to the section.
        - Keep answers relatively short (under 3 paragraphs).
        `;

        function toggleChat() {
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                chatWindow.classList.remove('hidden');
                chatWindow.classList.add('flex', 'chat-enter-active');
                setTimeout(() => chatInput.focus(), 100);
            } else {
                chatWindow.classList.add('hidden');
                chatWindow.classList.remove('flex', 'chat-enter-active');
            }
        }

        function sendSuggestion(text) {
            chatInput.value = text;
            chatForm.dispatchEvent(new Event('submit'));
        }

        async function handleChatSubmit(e) {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (!message) return;

            // 1. Add User Message
            appendMessage('user', message);
            chatInput.value = '';
            
            // 2. Show Typing Indicator
            const typingId = showTypingIndicator();
            scrollToBottom();

            // 3. Call Gemini API or Use Fallback
            try {
                // Check if API key is still the placeholder
                if (!API_KEY || API_KEY === 'AIzaSyD0Xp29mYwZef_6pljx3iY6ZriBN5dXStQ') {
                    // Simulate a delay for the "fake" response
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    removeTypingIndicator(typingId);
                    
                    // Fallback response for demo
                    appendMessage('bot', "<strong>3 Oaks:</strong> Hi, I am happy to help with any questions. <br><br>We can provide any kind of furniture services");
                } else {
                    const responseText = await callGeminiAPI(message);
                    removeTypingIndicator(typingId);
                    appendMessage('bot', responseText);
                }
            } catch (error) {
                removeTypingIndicator(typingId);
                appendMessage('bot', `System Notification: ${error.message}`);
                console.error(error);
            }
            
            scrollToBottom();
        }

        async function callGeminiAPI(userMessage) {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
            
            const payload = {
                contents: [
                    {
                        role: "user",
                        parts: [{ text: SYSTEM_PROMPT + "\n\nUser Question: " + userMessage }]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 250,
                }
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error?.message || 'Failed to fetch from Gemini API');
            }

            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        }

        function appendMessage(role, text) {
            const div = document.createElement('div');
            div.className = `flex gap-3 ${role === 'user' ? 'flex-row-reverse' : ''}`;
            
            const avatar = role === 'bot' 
                ? `<div class="h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#003865]"><span class="iconify" data-icon="lucide:bot" data-width="16"></span></div>`
                : `<div class="h-8 w-8 rounded-full bg-[#F47B20] flex items-center justify-center shrink-0 text-white"><span class="iconify" data-icon="lucide:user" data-width="16"></span></div>`;

            const bubbleClass = role === 'bot'
                ? 'bg-white border border-slate-200 text-slate-600 rounded-tl-none ai-response'
                : 'bg-[#003865] text-white rounded-tr-none';
            
            // Basic markdown-to-html conversion for bolding
            let formattedText = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
                .replace(/\n/g, '<br>'); // Line breaks

            div.innerHTML = `
                ${avatar}
                <div class="flex flex-col gap-1.5 max-w-[85%]">
                    <div class="rounded-2xl ${bubbleClass} px-4 py-3 text-sm shadow-sm leading-relaxed">
                        <p>${formattedText}</p>
                    </div>
                </div>
            `;
            chatMessages.appendChild(div);
        }

        function showTypingIndicator() {
            const id = 'typing-' + Date.now();
            const div = document.createElement('div');
            div.id = id;
            div.className = 'flex gap-3';
            div.innerHTML = `
                <div class="h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#003865]">
                    <span class="iconify" data-icon="lucide:bot" data-width="16"></span>
                </div>
                <div class="rounded-2xl rounded-tl-none bg-white border border-slate-200 px-4 py-4 shadow-sm flex items-center gap-1">
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                </div>
            `;
            chatMessages.appendChild(div);
            return id;
        }

        function removeTypingIndicator(id) {
            const el = document.getElementById(id);
            if (el) el.remove();
        }

        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
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
      

<nav className="fixed top-0 left-0 right-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

<a className="group flex flex-col leading-none" href="#">
<span className="text-2xl font-semibold tracking-tighter text-[#003865]">3OAKS</span>
<span className="text-[0.6rem] font-medium tracking-widest text-slate-500 uppercase">Resource Group Intl</span>
</a>

<div className="hidden items-center gap-6 xl:flex">
<a className="text-xs font-medium text-slate-500 transition-colors hover:text-[#003865]" href="#home">HOME</a>
<a className="text-xs font-medium text-slate-500 transition-colors hover:text-[#003865]" href="#about">ABOUT</a>

<div className="group relative">
<button className="flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors hover:text-[#003865]">
                        AREAS OF FOCUS
                        <span className="iconify" data-icon="lucide:chevron-down" data-width="12"></span>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<div className="w-48 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-xl">
<a className="block px-4 py-3 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-[#003865]" href="#education">Education</a>
<a className="block px-4 py-3 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-[#003865]" href="#office">Office</a>
<a className="block px-4 py-3 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-[#003865]" href="#healthcare">Healthcare</a>
<a className="block px-4 py-3 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-[#003865]" href="#hospitality">Hospitality</a>
</div>
</div>
</div>
<a className="text-xs font-medium text-slate-500 transition-colors hover:text-[#003865]" href="#services">SERVICES</a>
<a className="text-xs font-medium text-slate-500 transition-colors hover:text-[#003865]" href="#marketplace">MARKETPLACE</a>
<a className="text-xs font-medium text-slate-500 transition-colors hover:text-[#003865]" href="#gallery">GALLERY</a>
<a className="text-xs font-medium text-slate-500 transition-colors hover:text-[#003865]" href="#partners">PARTNERS</a>
<a className="text-xs font-medium text-slate-500 transition-colors hover:text-[#003865]" href="#blog">BLOG</a>
<a className="text-xs font-medium text-slate-500 transition-colors hover:text-[#003865]" href="#contact">CONTACT</a>
<a className="rounded-full bg-[#F47B20] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#d96715] hover:shadow-lg shadow-orange-100" href="#quick-ship">
                    QUICK SHIP
                </a>
</div>

<button className="flex items-center justify-center p-2 text-slate-500 xl:hidden">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#003865] pt-20" id="home">

<div className="absolute inset-0 z-0">
<img alt="Modern Office" className="h-full w-full object-cover opacity-20 transition-transform duration-[3s] hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003865] via-[#003865]/80 to-transparent"></div>
</div>
<div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-1.5 w-1.5 rounded-full bg-[#F47B20]"></span>
<span>Furnishing Excellence since 2004</span>
</div>
<h1 className="text-balance text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                The single source for <br/>
<span className="text-slate-400">furnishing your facility.</span>
</h1>
<p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-300 sm:text-xl">
                National and international procurement &amp; project management. We furnish educational, corporate, healthcare, and hospitality environments from planning to installation.
            </p>
<div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#003865] transition-all hover:bg-slate-100" href="#services">
                    Explore Services
                    <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="flex items-center gap-2 rounded-full bg-[#F47B20] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#d96715] hover:shadow-lg shadow-orange-900/20" href="#contact">
                    Start a Project
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
<span className="iconify" data-icon="lucide:arrow-down" data-width="20"></span>
</div>
</header>

<section className="bg-white py-24 sm:py-32" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
<div>
<h2 className="text-xs font-semibold tracking-widest text-[#F47B20] uppercase mb-4">Who We Are</h2>
<h2 className="text-3xl font-medium tracking-tight text-[#003865] sm:text-4xl">
                        Simplifying the complex world<br/>of FF&amp;E procurement.
                    </h2>
<p className="mt-6 text-base leading-relaxed text-slate-600">
                        3 Oaks Resource Group International acts as your single-source purchasing partner. We handle everything from furniture, fixtures, and equipment to technology and supplies, reducing the burden on your internal staff.
                    </p>
<p className="mt-4 text-base leading-relaxed text-slate-600">
                        By leveraging buying power with over 125 manufacturers, we ensure competitive pricing without the hassle of multiple bids. Our focus is on functionality, affordability, and reliability.
                    </p>
<div className="mt-10 flex items-center gap-4 text-sm font-medium text-[#003865]">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2]">
<span className="iconify text-[#F47B20]" data-icon="lucide:check" data-width="18"></span>
</div>
<span>Turnkey Project Management</span>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 rounded-xl bg-[#F2F2F2] -z-10 rotate-2"></div>
<img alt="Office Interior" className="rounded-lg shadow-xl grayscale-[20%]" src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-[#F2F2F2] py-24 sm:py-32" id="sectors">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
<div>
<h2 className="text-xs font-semibold tracking-widest text-[#F47B20] uppercase mb-2">Areas of Focus</h2>
<h2 className="text-3xl font-medium tracking-tight text-[#003865] sm:text-4xl">Sectors We Serve</h2>
</div>
<a className="group flex items-center gap-1 text-sm font-medium text-[#003865] hover:text-[#F47B20]" href="#gallery">
                    View Project Gallery
                    <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

<div className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300" id="education">
<img alt="Education" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&amp;w=2604&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003865] via-[#003865]/40 to-transparent opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="mb-2 block h-8 w-8 text-[#F47B20]">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="24"></span>
</span>
<h3 className="text-lg font-medium text-white">Education</h3>
<p className="mt-2 text-xs text-slate-300">Schools, universities, and daycare centers.</p>
</div>
</div>

<div className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300" id="office">
<img alt="Office" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003865] via-[#003865]/40 to-transparent opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="mb-2 block h-8 w-8 text-[#F47B20]">
<span className="iconify" data-icon="lucide:briefcase" data-width="24"></span>
</span>
<h3 className="text-lg font-medium text-white">Office</h3>
<p className="mt-2 text-xs text-slate-300">Corporate workspaces and conference rooms.</p>
</div>
</div>

<div className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300" id="healthcare">
<img alt="Healthcare" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003865] via-[#003865]/40 to-transparent opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="mb-2 block h-8 w-8 text-[#F47B20]">
<span className="iconify" data-icon="lucide:stethoscope" data-width="24"></span>
</span>
<h3 className="text-lg font-medium text-white">Healthcare</h3>
<p className="mt-2 text-xs text-slate-300">Hospitals, clinics, and waiting areas.</p>
</div>
</div>

<div className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300" id="hospitality">
<img alt="Hospitality" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003865] via-[#003865]/40 to-transparent opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="mb-2 block h-8 w-8 text-[#F47B20]">
<span className="iconify" data-icon="lucide:armchair" data-width="24"></span>
</span>
<h3 className="text-lg font-medium text-white">Hospitality</h3>
<p className="mt-2 text-xs text-slate-300">Hotels, restaurants, and lounges.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 sm:py-32" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-xs font-semibold uppercase tracking-widest text-[#F47B20]">Comprehensive Solutions</h2>
<p className="mt-2 text-3xl font-medium tracking-tight text-[#003865] sm:text-4xl">From Planning to Installation</p>
</div>
<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-[#F47B20]/20 hover:shadow-lg hover:shadow-orange-500/5">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2F2F2] text-[#003865] group-hover:bg-[#003865] group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="24"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#003865]">Design &amp; Space Planning</h3>
<p className="mt-4 text-sm leading-relaxed text-slate-500">
                        We optimize your space before you order. Our team provides interior layout assistance, scaled floor plans, and 3D renderings to help visualize the final result.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-[#F47B20]/20 hover:shadow-lg hover:shadow-orange-500/5">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2F2F2] text-[#003865] group-hover:bg-[#003865] group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:package-check" data-width="24"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#003865]">FF&amp;E Procurement</h3>
<p className="mt-4 text-sm leading-relaxed text-slate-500">
                        Leveraging direct relationships with manufacturers to source furniture, fixtures, technology, and equipment at competitive prices.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-[#F47B20]/20 hover:shadow-lg hover:shadow-orange-500/5">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2F2F2] text-[#003865] group-hover:bg-[#003865] group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:truck" data-width="24"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#003865]">Project Management</h3>
<p className="mt-4 text-sm leading-relaxed text-slate-500">
                        We manage logistics, delivery coordination, on-site installation, and final quality control to ensure projects are completed on time and on budget.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-100 bg-[#F8FAFC] py-24 sm:py-32" id="marketplace">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
<div className="max-w-xl">
<h2 className="text-xs font-semibold tracking-widest text-[#F47B20] uppercase mb-2">Marketplace</h2>
<h2 className="text-3xl font-medium tracking-tight text-[#003865] sm:text-4xl">Featured Products</h2>
<p className="mt-4 text-sm text-slate-500">Curated selections from our top partners available for immediate inquiry.</p>
</div>

<div className="flex overflow-x-auto rounded-full border border-slate-200 bg-white p-1">
<button className="rounded-full bg-[#003865] px-4 py-1.5 text-xs font-medium text-white shadow-sm">All</button>
<button className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-[#003865] transition-colors">Seating</button>
<button className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-[#003865] transition-colors">Desks</button>
<button className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-[#003865] transition-colors">Storage</button>
<button className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-[#003865] transition-colors">Lounge</button>
</div>
</div>

<div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-100 bg-white group-hover:border-[#F47B20]/30 group-hover:shadow-lg group-hover:shadow-orange-500/5 transition-all duration-300">
<img alt="Ergonomic Chair" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-[#003865] backdrop-blur-sm shadow-sm">
                            Quick Ship
                        </div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-[#003865]">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Aeron Classic
                                </a>
</h3>
<p className="mt-1 text-xs text-slate-500">Seating</p>
</div>
<button className="rounded-full bg-slate-100 p-1.5 text-slate-400 group-hover:bg-[#003865] group-hover:text-white transition-colors z-10">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-100 bg-white group-hover:border-[#F47B20]/30 group-hover:shadow-lg group-hover:shadow-orange-500/5 transition-all duration-300">
<img alt="Standing Desk" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-[#003865]">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Ascend Standing Desk
                                </a>
</h3>
<p className="mt-1 text-xs text-slate-500">Desks</p>
</div>
<button className="rounded-full bg-slate-100 p-1.5 text-slate-400 group-hover:bg-[#003865] group-hover:text-white transition-colors z-10">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-100 bg-white group-hover:border-[#F47B20]/30 group-hover:shadow-lg group-hover:shadow-orange-500/5 transition-all duration-300">
<img alt="Lounge Chair" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-[#003865] backdrop-blur-sm shadow-sm">
                            Best Seller
                        </div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-[#003865]">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Nordic Lounge
                                </a>
</h3>
<p className="mt-1 text-xs text-slate-500">Hospitality</p>
</div>
<button className="rounded-full bg-slate-100 p-1.5 text-slate-400 group-hover:bg-[#003865] group-hover:text-white transition-colors z-10">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>

<div className="group relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-100 bg-white group-hover:border-[#F47B20]/30 group-hover:shadow-lg group-hover:shadow-orange-500/5 transition-all duration-300">
<img alt="Storage Cabinet" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-[#003865]">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Modular Storage
                                </a>
</h3>
<p className="mt-1 text-xs text-slate-500">Storage</p>
</div>
<button className="rounded-full bg-slate-100 p-1.5 text-slate-400 group-hover:bg-[#003865] group-hover:text-white transition-colors z-10">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#F47B20] hover:text-[#d96715]" href="#">
                    View Full Catalog 
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="bg-white py-24 sm:py-32" id="gallery">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 md:flex md:items-center md:justify-between">
<div>
<h2 className="text-xs font-semibold tracking-widest text-[#F47B20] uppercase mb-2">Portfolio</h2>
<h2 className="text-3xl font-medium tracking-tight text-[#003865] sm:text-4xl">Project Gallery</h2>
</div>
<div className="mt-6 flex space-x-6 text-sm font-medium text-slate-500 md:mt-0">
<span className="text-[#003865] cursor-pointer">All Projects</span>
<span className="hover:text-[#003865] cursor-pointer transition-colors">Education</span>
<span className="hover:text-[#003865] cursor-pointer transition-colors">Corporate</span>
<span className="hover:text-[#003865] cursor-pointer transition-colors">Medical</span>
</div>
</div>

<div className="grid grid-cols-1 gap-4 md:grid-cols-3">

<div className="group relative md:col-span-2 md:row-span-2 overflow-hidden rounded-xl bg-slate-200">
<img alt="Large Office Space" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003865]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
<p className="text-xs font-medium text-[#F47B20]">Corporate</p>
<h3 className="text-lg font-semibold text-white">Tech Hub Headquarters</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[3/4]">
<img alt="Hospital Corridor" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003865]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
<p className="text-xs font-medium text-[#F47B20]">Healthcare</p>
<h3 className="text-lg font-semibold text-white">Mercy Medical Center</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-slate-200">
<img alt="University Library" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003865]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
<p className="text-xs font-medium text-[#F47B20]">Education</p>
<h3 className="text-lg font-semibold text-white">State University Library</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-slate-200">
<img alt="Hotel Lobby" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1596230529625-7ee44f776d45?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003865]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
<p className="text-xs font-medium text-[#F47B20]">Hospitality</p>
<h3 className="text-lg font-semibold text-white">Azure Resort Lounge</h3>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-[#F2F2F2] py-24" id="partners">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-xs font-semibold tracking-widest text-[#F47B20] uppercase mb-2">Our Network</h2>
<h2 className="text-3xl font-medium tracking-tight text-[#003865] sm:text-4xl">Trusted Manufacturer Partners</h2>
<p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto">We maintain direct relationships with over 125 leading manufacturers to bring you the best selection and pricing.</p>
</div>

<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 mb-20">
<div className="flex flex-col items-center justify-center border-r border-slate-300/50 p-6">
<span className="text-4xl font-semibold tracking-tight text-[#003865]">125+</span>
<span className="text-xs uppercase tracking-wide text-slate-500 mt-2">Direct Manufacturers</span>
</div>
<div className="flex flex-col items-center justify-center border-r border-slate-300/50 p-6">
<span className="text-4xl font-semibold tracking-tight text-[#003865]">2004</span>
<span className="text-xs uppercase tracking-wide text-slate-500 mt-2">Founded In</span>
</div>
<div className="flex flex-col items-center justify-center border-r border-slate-300/50 p-6">
<span className="text-4xl font-semibold tracking-tight text-[#003865]">100%</span>
<span className="text-xs uppercase tracking-wide text-slate-500 mt-2">Service Coverage</span>
</div>
<div className="flex flex-col items-center justify-center p-6">
<span className="text-4xl font-semibold tracking-tight text-[#003865]">Nat'l</span>
<span className="text-xs uppercase tracking-wide text-slate-500 mt-2">&amp; International</span>
</div>
</div>

<div className="relative w-full overflow-hidden marquee-container">
<div className="flex w-max animate-scroll items-center gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">

<span className="text-2xl font-bold text-slate-400">HERMAN MILLER</span>
<span className="text-2xl font-bold text-slate-400">STEELCASE</span>
<span className="text-2xl font-bold text-slate-400">KNOLL</span>
<span className="text-2xl font-bold text-slate-400">HAWORTH</span>
<span className="text-2xl font-bold text-slate-400">HON</span>
<span className="text-2xl font-bold text-slate-400">GLOBAL</span>
<span className="text-2xl font-bold text-slate-400">NATIONAL</span>
<span className="text-2xl font-bold text-slate-400">KI</span>
<span className="text-2xl font-bold text-slate-400">ALLSTEEL</span>
<span className="text-2xl font-bold text-slate-400">TEKNION</span>

<span className="text-2xl font-bold text-slate-400">HERMAN MILLER</span>
<span className="text-2xl font-bold text-slate-400">STEELCASE</span>
<span className="text-2xl font-bold text-slate-400">KNOLL</span>
<span className="text-2xl font-bold text-slate-400">HAWORTH</span>
<span className="text-2xl font-bold text-slate-400">HON</span>
<span className="text-2xl font-bold text-slate-400">GLOBAL</span>
<span className="text-2xl font-bold text-slate-400">NATIONAL</span>
<span className="text-2xl font-bold text-slate-400">KI</span>
<span className="text-2xl font-bold text-slate-400">ALLSTEEL</span>
<span className="text-2xl font-bold text-slate-400">TEKNION</span>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 sm:py-32" id="blog">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-xs font-semibold uppercase tracking-widest text-[#F47B20]">Insights</h2>
<h2 className="text-3xl font-medium tracking-tight text-[#003865] sm:text-4xl">Latest from 3 Oaks</h2>
<p className="mt-4 text-base text-slate-500">Trends, guides, and news from the world of facility furnishing.</p>
</div>
<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">

<article className="flex flex-col items-start">
<div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-lg bg-slate-100">
<img alt="Eco Friendly Furniture" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-x-4 text-xs">
<time className="text-slate-500" datetime="2024-03-16">Mar 16, 2024</time>
<a className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100" href="#">Trends</a>
</div>
<div className="group relative">
<h3 className="mt-3 text-lg font-semibold leading-6 text-[#003865] group-hover:text-[#F47B20]">
<a href="#">
<span className="absolute inset-0"></span>
                                The Future of Sustainable Office Design
                            </a>
</h3>
<p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                            Discover how eco-friendly materials and biophilic design are reshaping modern workspaces and improving employee well-being.
                        </p>
</div>
</article>

<article className="flex flex-col items-start">
<div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-lg bg-slate-100">
<img alt="Classroom" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-x-4 text-xs">
<time className="text-slate-500" datetime="2024-03-10">Mar 10, 2024</time>
<a className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100" href="#">Education</a>
</div>
<div className="group relative">
<h3 className="mt-3 text-lg font-semibold leading-6 text-[#003865] group-hover:text-[#F47B20]">
<a href="#">
<span className="absolute inset-0"></span>
                                Maximizing Budgets in School Procurement
                            </a>
</h3>
<p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                            Strategic tips for educational institutions to get the highest quality durable furniture while adhering to strict fiscal constraints.
                        </p>
</div>
</article>

<article className="flex flex-col items-start">
<div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-lg bg-slate-100">
<img alt="Meeting Room" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-x-4 text-xs">
<time className="text-slate-500" datetime="2024-02-28">Feb 28, 2024</time>
<a className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100" href="#">Management</a>
</div>
<div className="group relative">
<h3 className="mt-3 text-lg font-semibold leading-6 text-[#003865] group-hover:text-[#F47B20]">
<a href="#">
<span className="absolute inset-0"></span>
                                Hybrid Work: Furniture Solutions
                            </a>
</h3>
<p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                            Adapting your facility for the hybrid workforce requires flexible, modular furniture solutions that support both collaboration and focus.
                        </p>
</div>
</article>
</div>
</div>
</section>

<section className="relative isolate overflow-hidden bg-[#003865] py-20 px-6 sm:py-24 lg:px-8" id="quick-ship">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Need Furniture Fast?</h2>
<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Explore our Quick Ship program for selected items that are ready to be dispatched immediately for your urgent project needs.
            </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<a className="rounded-md bg-[#F47B20] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#d96715] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F47B20]" href="#marketplace">
                    View Quick Ship Catalog
                </a>
<a className="text-sm font-semibold leading-6 text-white hover:text-[#F47B20] transition-colors" href="#contact">
                    Contact Sales <span aria-hidden="true">→</span>
</a>
</div>
</div>
</section>

<section className="bg-white py-24 sm:py-32" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
<div>
<h2 className="text-3xl font-medium tracking-tight text-[#003865]">Start your project today.</h2>
<p className="mt-4 text-slate-500">
                        Whether you are outfitting a new school, refreshing an office, or equipping a healthcare facility, our team is ready to assist. 
                    </p>
<div className="mt-8 border-t border-slate-100 pt-8">
<h3 className="text-sm font-medium text-[#003865] mb-4">Leadership &amp; Client Services</h3>
<div className="space-y-2 text-sm text-slate-600">
<p><span className="font-medium text-[#003865]">Michael Olkes</span> – CEO / Client Services</p>
<p><span className="font-medium text-[#003865]">Dorie McInturf</span> – Client Service Manager</p>
</div>
</div>
<dl className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
<div className="flex gap-x-4">
<dt className="flex-none">
<span className="sr-only">Address</span>
<span className="iconify text-[#F47B20]" data-icon="lucide:map-pin" data-width="20"></span>
</dt>
<dd>Pinecrest, Florida<br/>United States</dd>
</div>
<div className="flex gap-x-4">
<dt className="flex-none">
<span className="sr-only">Telephone</span>
<span className="iconify text-[#F47B20]" data-icon="lucide:phone" data-width="20"></span>
</dt>
<dd><a className="hover:text-[#003865]" href="tel:855-362-5747">855-362-5747</a></dd>
</div>
<div className="flex gap-x-4">
<dt className="flex-none">
<span className="sr-only">Email</span>
<span className="iconify text-[#F47B20]" data-icon="lucide:mail" data-width="20"></span>
</dt>
<dd><a className="hover:text-[#003865]" href="mailto:info@3oaksgroup.com">info@3oaksgroup.com</a></dd>
</div>
</dl>
</div>

<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div>
<label className="block text-xs font-medium text-slate-700" htmlFor="first-name">First name</label>
<div className="mt-1">
<input className="block w-full rounded-md border-0 bg-[#F2F2F2] px-3.5 py-2 text-[#003865] shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#003865] sm:text-sm sm:leading-6" id="first-name" name="first-name" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700" htmlFor="last-name">Last name</label>
<div className="mt-1">
<input className="block w-full rounded-md border-0 bg-[#F2F2F2] px-3.5 py-2 text-[#003865] shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#003865] sm:text-sm sm:leading-6" id="last-name" name="last-name" type="text"/>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700" htmlFor="email">Email</label>
<div className="mt-1">
<input className="block w-full rounded-md border-0 bg-[#F2F2F2] px-3.5 py-2 text-[#003865] shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#003865] sm:text-sm sm:leading-6" id="email" name="email" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700" htmlFor="sector">Area of Focus</label>
<div className="mt-1">
<select className="block w-full rounded-md border-0 bg-[#F2F2F2] px-3.5 py-2 text-[#003865] shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-[#003865] sm:text-sm sm:leading-6" id="sector" name="sector">
<option>Education</option>
<option>Office</option>
<option>Healthcare</option>
<option>Hospitality</option>
<option>Other</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700" htmlFor="message">Message</label>
<div className="mt-1">
<textarea className="block w-full rounded-md border-0 bg-[#F2F2F2] px-3.5 py-2 text-[#003865] shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#003865] sm:text-sm sm:leading-6" id="message" name="message" rows="4"></textarea>
</div>
</div>
<button className="block w-full rounded-md bg-[#003865] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#00284d] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003865]" type="submit">
                        Contact Us
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-[#003865] text-white">
<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-white/10">
<div className="mb-4 md:mb-0">
<span className="text-xl font-bold tracking-tight">3 OAKS GROUP</span>
</div>
<div className="flex space-x-8 text-xs font-medium text-slate-300">
<a className="hover:text-white" href="#about">About</a>
<a className="hover:text-white" href="#services">Services</a>
<a className="hover:text-white" href="#gallery">Gallery</a>
<a className="hover:text-white" href="#partners">Partners</a>
</div>
</div>
<div className="md:flex md:items-center md:justify-between">
<div className="flex justify-center space-x-6 md:order-2">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">Facebook</span>
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
</div>
<div className="mt-8 md:order-1 md:mt-0">
<p className="text-center text-xs leading-5 text-slate-400">© 2024 3 Oaks Resource Group International. All rights reserved.</p>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4" id="ai-chat-widget">

<div className="hidden w-[calc(100vw-3rem)] sm:w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex-col overflow-hidden transition-all duration-300 origin-bottom-right shadow-slate-400/20" id="chat-window">

<div className="bg-[#003865] px-5 py-4 flex justify-between items-center shrink-0">
<div className="flex items-center gap-3">
<div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/10">
<span className="iconify" data-icon="lucide:bot" data-width="20"></span>
<span className="absolute -bottom-0.5 -right-0.5 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-[#003865]"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-white tracking-tight">3 Oaks AI</h3>
<p className="text-[0.65rem] text-blue-200">Powered by Gemini Flash</p>
</div>
</div>
<button className="text-white/70 hover:text-white transition-colors" onclick="toggleChat()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>

<div className="flex-1 p-5 overflow-y-auto bg-slate-50 space-y-4" id="chat-messages">

<div className="flex gap-3">
<div className="h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#003865]">
<span className="iconify" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="flex flex-col gap-1.5 max-w-[85%]">
<div className="rounded-2xl rounded-tl-none bg-white border border-slate-200 px-4 py-3 text-sm text-slate-600 shadow-sm">
<p>Hello! I'm the 3 Oaks AI assistant. I can answer questions about our procurement services, educational furniture, or healthcare projects.</p>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 pl-11">
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#003865] hover:bg-slate-50 hover:border-[#F47B20]/30 transition-colors" onclick="sendSuggestion('What services do you offer?')">Services</button>
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#003865] hover:bg-slate-50 hover:border-[#F47B20]/30 transition-colors" onclick="sendSuggestion('Do you do schools?')">Education Projects</button>
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#003865] hover:bg-slate-50 hover:border-[#F47B20]/30 transition-colors" onclick="sendSuggestion('What is Quick Ship?')">Quick Ship</button>
<button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#003865] hover:bg-slate-50 hover:border-[#F47B20]/30 transition-colors" onclick="sendSuggestion('Contact sales')">Contact</button>
</div>
</div>

<div className="p-4 bg-white border-t border-slate-100 shrink-0">
<form className="relative flex items-center" id="chat-form">
<input className="w-full rounded-full border-0 bg-slate-100 py-3 pl-4 pr-12 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-1 focus:ring-inset focus:ring-[#003865]" id="chat-input" placeholder="Ask about furniture, projects..." type="text"/>
<button className="absolute right-2 p-1.5 rounded-full bg-[#003865] text-white hover:bg-[#00284d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
<span className="iconify" data-icon="lucide:arrow-up" data-width="18"></span>
</button>
</form>
<div className="mt-2 text-center">
<p className="text-[0.6rem] text-slate-400">AI can make mistakes. Contact support for urgent matters.</p>
</div>
</div>
</div>

<button className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#003865] text-white shadow-xl shadow-[#003865]/30 hover:bg-[#00284d] hover:scale-105 transition-all duration-300" id="chat-toggle-btn" onclick="toggleChat()">
<span className="iconify transition-transform duration-300 group-hover:rotate-12" data-icon="lucide:message-square" data-width="24"></span>
</button>
</div>


    </>
  );
}
