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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
orange: '#f97316',
pink: '#ec4899',
red: '#ef4444',
}
},
keyframes: {
blob: {
"0%": { transform: "translate(0px, 0px) scale(1)" },
"33%": { transform: "translate(30px, -50px) scale(1.1)" },
"66%": { transform: "translate(-20px, 20px) scale(0.9)" },
"100%": { transform: "translate(0px, 0px) scale(1)" }
},
fadeIn: {
"0%": { opacity: "0", transform: "translateY(10px)" },
"100%": { opacity: "1", transform: "translateY(0)" }
}
},
animation: {
blob: "blob 7s infinite",
"fade-in": "fadeIn 0.3s ease-out forwards",
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            // --- Dark Mode Logic ---
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
            const themeIcon = document.getElementById('theme-icon');
            const html = document.documentElement;

            function updateThemeIcon() {
                const isDark = html.classList.contains('dark');
                const iconName = isDark ? 'lucide:sun' : 'lucide:moon';
                if(themeIcon) themeIcon.setAttribute('icon', iconName);
            }

            function toggleTheme() {
                html.classList.toggle('dark');
                const isDark = html.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                updateThemeIcon();
            }

            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
            updateThemeIcon();

            if(themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
            if(themeToggleBtnMobile) themeToggleBtnMobile.addEventListener('click', toggleTheme);

            // --- Clock Logic ---
            function updateClock() {
                const now = new Date();
                const timeString = now.toLocaleTimeString('pl-PL', { hour12: false });
                document.getElementById('current-time').textContent = timeString;
                const dateString = now.toLocaleDateString('pl-PL', { 
                    day: '2-digit', month: '2-digit', year: 'numeric' 
                });
                document.getElementById('current-date').textContent = dateString;
            }
            setInterval(updateClock, 1000);
            updateClock();

            // --- Weather Widget Logic (REAL DATA) ---
            async function fetchWeather() {
                const tempEl = document.getElementById('weather-temp');
                const descEl = document.getElementById('weather-desc');
                const iconEl = document.getElementById('weather-icon');
                
                try {
                    // Fetch from Open-Meteo for Brzeg Dolny (51.27, 16.72)
                    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.27&longitude=16.72&current_weather=true');
                    
                    if (!response.ok) throw new Error('Weather API error');
                    
                    const data = await response.json();
                    const temp = Math.round(data.current_weather.temperature);
                    const weatherCode = data.current_weather.weathercode;

                    // Map WMO codes to description and icons
                    let desc = "Pogodnie";
                    let icon = "lucide:sun";

                    if (weatherCode >= 1 && weatherCode <= 3) { desc = "Zachmurzenie"; icon = "lucide:cloud-sun"; }
                    else if (weatherCode >= 45 && weatherCode <= 48) { desc = "Mgła"; icon = "lucide:cloud-fog"; }
                    else if (weatherCode >= 51 && weatherCode <= 67) { desc = "Deszcz"; icon = "lucide:cloud-rain"; }
                    else if (weatherCode >= 71 && weatherCode <= 77) { desc = "Śnieg"; icon = "lucide:snowflake"; }
                    else if (weatherCode >= 95) { desc = "Burza"; icon = "lucide:cloud-lightning"; }

                    tempEl.textContent = `${temp}°C`;
                    descEl.textContent = desc;
                    iconEl.setAttribute('icon', icon);
                    iconEl.classList.remove('animate-spin'); // Stop loading spinner

                } catch (error) {
                    console.error("Weather fetch failed:", error);
                    tempEl.textContent = "--";
                    descEl.textContent = "Błąd";
                    iconEl.setAttribute('icon', 'lucide:alert-circle');
                    iconEl.classList.remove('animate-spin');
                }
            }
            // Fetch immediately then every 15 mins
            fetchWeather();
            setInterval(fetchWeather, 900000);

            // --- CHATBOT LOGIC (FIXED) ---
            
            // 1. Knowledge Base
            const knowledgeBase = [];
            
            function initKnowledgeBase() {
                const articles = document.querySelectorAll('article');
                articles.forEach(art => {
                    const title = art.querySelector('.article-title').innerText.trim();
                    const desc = art.querySelector('.article-desc').innerText.trim();
                    const category = art.querySelector('.article-cat').innerText.trim();
                    knowledgeBase.push({ title, desc, category, fullText: (title + " " + desc + " " + category).toLowerCase() });
                });
                // Add general info
                knowledgeBase.push({
                    title: "O nas",
                    desc: "Jesteśmy blogiem poświęconym zdrowiu psychicznemu. Pomagamy zrozumieć emocje i budować relacje.",
                    category: "Info",
                    fullText: "o nas kontakt czym jest ten blog kim jesteście pomoc autor"
                });
            }
            initKnowledgeBase();

            // 2. Chat UI Elements
            const toggleChatBtn = document.getElementById('toggle-chat');
            const closeChatBtn = document.getElementById('close-chat');
            const chatWindow = document.getElementById('chat-window');
            const chatMessages = document.getElementById('chat-messages');
            const chatForm = document.getElementById('chat-form');
            const chatInput = document.getElementById('chat-input');

            // 3. Toggle Logic
            function toggleChatVisibility() {
                const isHidden = chatWindow.classList.contains('hidden');
                
                if (isHidden) {
                    chatWindow.classList.remove('hidden');
                    // Small delay to allow display:block to apply before transition
                    setTimeout(() => {
                        chatInput.focus();
                    }, 50);
                    // Remove notification dot
                    const dot = toggleChatBtn.querySelector('.bg-red-500');
                    if(dot) dot.style.display = 'none';
                } else {
                    chatWindow.classList.add('hidden');
                }
            }

            if(toggleChatBtn) toggleChatBtn.addEventListener('click', toggleChatVisibility);
            if(closeChatBtn) closeChatBtn.addEventListener('click', toggleChatVisibility);

            // 4. Message Handling
            if(chatForm) {
                chatForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const text = chatInput.value.trim();
                    if(!text) return;

                    // Add User Message
                    addMessage(text, 'user');
                    chatInput.value = '';

                    // Simulate Bot "Thinking"
                    addTypingIndicator();

                    setTimeout(() => {
                        removeTypingIndicator();
                        const response = generateResponse(text);
                        addMessage(response, 'bot');
                    }, 800 + Math.random() * 500);
                });
            }

            function addMessage(text, sender) {
                const div = document.createElement('div');
                div.className = `flex gap-3 ${sender === 'user' ? 'flex-row-reverse' : ''} animate-fade-in`;
                
                const avatar = sender === 'bot' 
                    ? `<div class="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-400 to-rose-500 flex-shrink-0 flex items-center justify-center text-white text-xs mt-0.5"><iconify-icon icon="lucide:bot" width="14"></iconify-icon></div>`
                    : `<div class="w-7 h-7 rounded-full bg-slate-200 dark:bg-neutral-700 flex-shrink-0 flex items-center justify-center text-slate-500 dark:text-slate-300 text-xs mt-0.5"><iconify-icon icon="lucide:user" width="14"></iconify-icon></div>`;

                const bubbleClass = sender === 'bot'
                    ? "bg-white dark:bg-neutral-800 border border-slate-100 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-2xl rounded-tl-sm"
                    : "bg-rose-500 text-white rounded-2xl rounded-tr-sm shadow-md border border-rose-600";

                div.innerHTML = `
                    ${avatar}
                    <div class="${bubbleClass} p-3 shadow-sm max-w-[85%] text-sm leading-relaxed">
                        ${text}
                    </div>
                `;
                chatMessages.appendChild(div);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

            function addTypingIndicator() {
                const div = document.createElement('div');
                div.id = 'typing-indicator';
                div.className = 'flex gap-3 animate-fade-in';
                div.innerHTML = `
                    <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-400 to-rose-500 flex-shrink-0 flex items-center justify-center text-white text-xs mt-0.5"><iconify-icon icon="lucide:bot" width="14"></iconify-icon></div>
                    <div class="bg-white dark:bg-neutral-800 border border-slate-100 dark:border-white/10 p-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1 h-10 w-16 justify-center">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
                    </div>
                `;
                chatMessages.appendChild(div);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

            function removeTypingIndicator() {
                const el = document.getElementById('typing-indicator');
                if(el) el.remove();
            }

            // 5. Response Generator
            function generateResponse(input) {
                const lowerInput = input.toLowerCase();
                
                if(lowerInput.match(/^(hej|cześć|witaj|dzień dobry|siema|hello)/)) {
                    return "Cześć! W czym mogę Ci dzisiaj pomóc? Możesz pytać o artykuły z bloga.";
                }

                const matches = knowledgeBase.filter(item => item.fullText.includes(lowerInput));
                
                if(matches.length > 0) {
                    if(matches.length === 1) {
                        return `Znalazłem artykuł na ten temat:<br><br><strong>${matches[0].title}</strong><br><em>${matches[0].desc}</em>`;
                    } else {
                        let response = "Znalazłem kilka pasujących wpisów:<br><ul class='list-disc pl-4 mt-2 space-y-1'>";
                        matches.slice(0, 3).forEach(m => {
                            response += `<li><strong>${m.title}</strong></li>`;
                        });
                        response += "</ul>";
                        return response;
                    }
                }
                
                return "Nie znalazłem w moich artykułach nic na ten temat. Spróbuj zapytać o: autyzm, relacje, alkohol, osobowość lub emocje.";
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
      

<header className="glass-header text-white shadow-lg sticky top-0 z-40">

<div className="border-b border-white/20 bg-black/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs sm:text-sm font-medium">

<div className="flex items-center gap-3" id="weather-widget">
<div className="flex items-center gap-1.5 opacity-90">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="14"></iconify-icon>
<span className="hidden sm:inline">Brzeg Dolny, PL</span>
</div>
<div className="h-3 w-px bg-white/30 mx-1"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="" icon="lucide:cloud-sun" id="weather-icon" strokeWidth="1.5" width="16"></iconify-icon>
<span id="weather-temp">-8°C</span>
<span className="hidden sm:inline opacity-80 text-[10px] uppercase tracking-wide" id="weather-desc">Zachmurzenie</span>
</div>
</div>

<div className="flex items-center gap-3 font-mono tracking-tight text-xs">
<span className="opacity-80 hidden sm:inline" id="current-date">09.01.2026</span>
<span className="bg-white/20 px-2 py-0.5 rounded text-white font-semibold" id="current-time">23:46:21</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

<div className="flex items-center justify-between">
<a className="group flex items-center gap-2" href="#">
<div className="bg-white text-rose-500 p-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:sun" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg md:text-xl font-semibold tracking-tight text-white group-hover:opacity-90 transition-opacity">
                            Spokój w Głowie
                        </span>
</a>

<div className="flex items-center gap-2 md:hidden">
<button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" id="theme-toggle-mobile">
<iconify-icon icon="lucide:moon" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="p-2 text-white hover:bg-white/10 rounded-lg">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<nav className="hidden md:flex items-center gap-1 bg-white/10 p-1 rounded-full backdrop-blur-sm self-center">
<a className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all text-white" href="#">Strona Główna</a>
<a className="px-4 py-1.5 rounded-full text-sm font-medium bg-white text-rose-600 shadow-sm" href="#">Blog</a>
<a className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all text-white" href="#">O Nas</a>
<a className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all text-white" href="#">Kontakt</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<div className="relative group">
<input className="bg-white/20 border border-white/30 text-white placeholder-white/70 text-sm rounded-full py-2 pl-4 pr-10 focus:outline-none focus:bg-white/30 focus:border-white/50 transition-all w-48 focus:w-64" placeholder="Szukaj..." type="text"/>
<iconify-icon className="absolute right-3 top-2.5 text-white/70 pointer-events-none" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<button aria-label="Toggle Dark Mode" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all shadow-sm border border-white/10" id="theme-toggle">
<iconify-icon className="text-white" icon="lucide:sun" id="theme-icon" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden mt-2 relative">
<input className="w-full bg-white/20 border border-white/30 text-white placeholder-white/70 text-sm rounded-lg py-2.5 pl-4 pr-10 focus:outline-none focus:bg-white/30" placeholder="Szukaj artykułów..." type="text"/>
<iconify-icon className="absolute right-3 top-3 text-white/70" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</header>

<main className="flex-grow">

<section className="relative pt-16 pb-12 sm:pt-24 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 dark:opacity-10 pointer-events-none -z-10">
<div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
<div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-medium mb-6 border border-indigo-100 dark:border-indigo-800">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                Nowe artykuły w tym tygodniu
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">
                Inwestuj w swój rozwój. <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">Zadbaj o zdrowie psychiczne.</span>
</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Odkryj przestrzeń pełną zrozumienia i fachowej wiedzy. Znajdziesz tu artykuły, które pomogą Ci zrozumieć siebie i otaczający Cię świat.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all bg-slate-900 dark:bg-white dark:text-black rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#articles">
                    Przeczytaj najnowsze
                    <iconify-icon className="ml-2" icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all bg-white dark:bg-white/5 border border-slate-200 dark:border-neutral-800 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 focus:outline-none" href="#">
                    O nas
                </a>
</div>
</section>

<section className="py-12 sm:py-16 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-neutral-900" id="articles">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Najnowsze wpisy</h2>
<a className="text-sm font-medium text-rose-500 hover:text-rose-600 flex items-center gap-1 transition-colors" href="#">
                        Zobacz wszystkie
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="articles-container">

<article className="group flex flex-col h-full bg-slate-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/30">
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> 24.10.2023</span>
<span className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-md"><iconify-icon icon="lucide:eye" width="12"></iconify-icon> 1,249</span>
</div>
<h3 className="article-title text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                Objawy autyzmu u dorosłych
                            </h3>
<p className="article-desc text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Spektrum autyzmu u dorosłych często pozostaje niezdiagnozowane. Poznaj subtelne sygnały, które mogą świadczyć o neuroatypowości w dorosłym życiu.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-neutral-800">
<span className="article-cat text-xs font-medium text-slate-500 uppercase tracking-wider">Psychologia</span>
<a className="inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-neutral-800 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-neutral-700 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all" href="#">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group flex flex-col h-full bg-slate-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/30">
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> 22.10.2023</span>
<span className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-md"><iconify-icon icon="lucide:eye" width="12"></iconify-icon> 982</span>
</div>
<h3 className="article-title text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                Detoks alkoholowy
                            </h3>
<p className="article-desc text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Jak bezpiecznie przeprowadzić detoks i jakie są pierwsze kroki w walce z uzależnieniem? Przewodnik po fizycznych i psychicznych aspektach trzeźwienia.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-neutral-800">
<span className="article-cat text-xs font-medium text-slate-500 uppercase tracking-wider">Zdrowie</span>
<a className="inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-neutral-800 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-neutral-700 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all" href="#">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group flex flex-col h-full bg-slate-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/30">
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> 19.10.2023</span>
<span className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-md"><iconify-icon icon="lucide:eye" width="12"></iconify-icon> 3,401</span>
</div>
<h3 className="article-title text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                Mniej hałasu, więcej siebie
                            </h3>
<p className="article-desc text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                W świecie pełnym bodźców, cisza staje się luksusem. Dowiedz się, jak ograniczenie hałasu informacyjnego wpływa na regenerację układu nerwowego.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-neutral-800">
<span className="article-cat text-xs font-medium text-slate-500 uppercase tracking-wider">Lifestyle</span>
<a className="inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-neutral-800 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-neutral-700 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all" href="#">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group flex flex-col h-full bg-slate-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/30">
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> 15.10.2023</span>
<span className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-md"><iconify-icon icon="lucide:eye" width="12"></iconify-icon> 2,100</span>
</div>
<h3 className="article-title text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                Mizoandria
                            </h3>
<p className="article-desc text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Czym jest nienawiść do mężczyzn i skąd się bierze? Analiza zjawiska społecznego z perspektywy psychologicznej i socjologicznej.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-neutral-800">
<span className="article-cat text-xs font-medium text-slate-500 uppercase tracking-wider">Społeczeństwo</span>
<a className="inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-neutral-800 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-neutral-700 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all" href="#">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group flex flex-col h-full bg-slate-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/30">
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> 12.10.2023</span>
<span className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-md"><iconify-icon icon="lucide:eye" width="12"></iconify-icon> 4,520</span>
</div>
<h3 className="article-title text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                Neurotyk
                            </h3>
<p className="article-desc text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Życie z wysokim poziomem lęku. Jak cechy neurotyczne wpływają na codzienne funkcjonowanie i jak przekuć tę wrażliwość w siłę.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-neutral-800">
<span className="article-cat text-xs font-medium text-slate-500 uppercase tracking-wider">Osobowość</span>
<a className="inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-neutral-800 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-neutral-700 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all" href="#">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group flex flex-col h-full bg-slate-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/30">
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> 10.10.2023</span>
<span className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-md"><iconify-icon icon="lucide:eye" width="12"></iconify-icon> 1,855</span>
</div>
<h3 className="article-title text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                Osobowość schizotypowa
                            </h3>
<p className="article-desc text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Ekscentryczność czy zaburzenie? Charakterystyka osobowości schizotypowej, objawy, diagnoza i metody terapii.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-neutral-800">
<span className="article-cat text-xs font-medium text-slate-500 uppercase tracking-wider">Zaburzenia</span>
<a className="inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-neutral-800 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-neutral-700 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all" href="#">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group flex flex-col h-full bg-slate-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/30">
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> 08.10.2023</span>
<span className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-md"><iconify-icon icon="lucide:eye" width="12"></iconify-icon> 2,740</span>
</div>
<h3 className="article-title text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                Femboy i Tomboy
                            </h3>
<p className="article-desc text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Płynność ekspresji płciowej we współczesnej kulturze. Co oznaczają te terminy i jak wpływają na postrzeganie tożsamości.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-neutral-800">
<span className="article-cat text-xs font-medium text-slate-500 uppercase tracking-wider">Tożsamość</span>
<a className="inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-neutral-800 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-neutral-700 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all" href="#">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group flex flex-col h-full bg-slate-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/30">
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> 05.10.2023</span>
<span className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-md"><iconify-icon icon="lucide:eye" width="12"></iconify-icon> 5,120</span>
</div>
<h3 className="article-title text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                Jak rozmawiać w związku
                            </h3>
<p className="article-desc text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Komunikacja to klucz. Poznaj techniki aktywnego słuchania i wyrażania potrzeb, które uratowały niejedną relację.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-neutral-800">
<span className="article-cat text-xs font-medium text-slate-500 uppercase tracking-wider">Relacje</span>
<a className="inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-neutral-800 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-neutral-700 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all" href="#">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group flex flex-col h-full bg-slate-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/30">
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> 01.10.2023</span>
<span className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-md"><iconify-icon icon="lucide:eye" width="12"></iconify-icon> 3,890</span>
</div>
<h3 className="article-title text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                                Etapy psychiki po rozwodzie
                            </h3>
<p className="article-desc text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Rozstanie to proces żałoby. Przejdźmy razem przez etapy: od szoku i zaprzeczenia, przez gniew, aż po akceptację i nowe życie.
                            </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-neutral-800">
<span className="article-cat text-xs font-medium text-slate-500 uppercase tracking-wider">Kryzys</span>
<a className="inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-neutral-800 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-neutral-700 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all" href="#">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</article>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-neutral-700 rounded-full text-sm font-medium hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors">
                        Wczytaj więcej artykułów
                        <iconify-icon icon="lucide:refresh-cw" width="14"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

<footer className="bg-white dark:bg-neutral-900 border-t border-slate-100 dark:border-neutral-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4 text-rose-500">
<iconify-icon icon="lucide:sun" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Spokój w Głowie</span>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mb-6">
                        Twoje codzienne źródło wiedzy o zdrowiu psychicznym. Pomagamy zrozumieć emocje, budować relacje i odnaleźć wewnętrzny spokój.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-rose-500 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-rose-500 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-rose-500 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Na skróty</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
<li className=""><a className="hover:text-rose-500 transition-colors" href="#">Strona Główna</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-rose-500 transition-colors" href="#">O Nas</a></li>
<li className=""><a className="hover:text-rose-500 transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Wsparcie</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
<li className=""><a className="hover:text-rose-500 transition-colors" href="https://freedpotool.com/pl/download">Prywatność</a></li>
<li className=""><a className="hover:text-rose-500 transition-colors" href="#">Regulamin</a></li>
<li><a className="hover:text-rose-500 transition-colors" href="#">Współpraca</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 text-center md:text-left">
                    © 2023 Spokój w Głowie. Wszelkie prawa zastrzeżone.
                </p>
<div className="flex gap-6 text-xs text-slate-400">
<span>Brzeg Dolny, Polska</span>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-3 font-sans" id="chatbot-container">

<div className="hidden w-[90vw] sm:w-[380px] h-[500px] max-h-[80vh] bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden chat-enter transition-all origin-bottom-left" id="chat-window">

<div className="p-4 border-b border-slate-100 dark:border-white/10 flex justify-between items-center bg-slate-50/50 dark:bg-white/5">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-rose-500 flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-sm text-slate-900 dark:text-white tracking-tight">Asystent Spokoju</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Dostępny
                        </p>
</div>
</div>
<button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors" id="close-chat">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50/30 dark:bg-black/20 text-sm scroll-smooth chat-scroll" id="chat-messages">

<div className="flex gap-3 animate-fade-in">
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-400 to-rose-500 flex-shrink-0 flex items-center justify-center text-white text-xs mt-0.5">
<iconify-icon icon="lucide:bot" width="14"></iconify-icon>
</div>
<div className="bg-white dark:bg-neutral-800 border border-slate-100 dark:border-white/10 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-slate-700 dark:text-slate-300 leading-relaxed">
                        Cześć! 👋 Jestem wirtualnym asystentem bloga. Działam poprawnie i mogę wyszukać dla Ciebie artykuły. O co chcesz zapytać?
                    </div>
</div>
</div>

<div className="p-3 bg-white dark:bg-neutral-900 border-t border-slate-100 dark:border-white/10">
<form className="relative flex items-center" id="chat-form">
<input autocomplete="off" className="w-full bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm rounded-full py-2.5 pl-4 pr-12 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-all shadow-inner" id="chat-input" placeholder="Napisz wiadomość..." type="text"/>
<button className="absolute right-1.5 p-1.5 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors shadow-sm flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
<iconify-icon className="ml-0.5" icon="lucide:send" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</form>
<p className="text-[10px] text-center text-slate-400 dark:text-slate-600 mt-2">
                    Odpowiedzi generowane na podstawie treści strony.
                </p>
</div>
</div>

<button className="w-14 h-14 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group relative overflow-hidden z-50" id="toggle-chat">
<span className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
<iconify-icon className="group-hover:rotate-12 transition-transform duration-300" icon="lucide:message-circle" strokeWidth="1.5" width="28"></iconify-icon>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
</button>
</div>




    </>
  );
}
