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
},
colors: {
// Custom palette replacing the green with a "Cyber Violet" & "Electric Blue" theme
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0ea5e9', // Primary Blue
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
950: '#082f49',
},
accent: {
500: '#8b5cf6', // Violet
600: '#7c3aed',
},
dark: {
900: '#0a0a0a', // Deep black/zinc
800: '#171717',
700: '#262626',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 3s linear infinite',
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // State
        const state = {
            currentScreen: 'screen-intro',
            isConnected: false,
            selectedCountry: { code: 'us', name: 'United States', ip: '79.110.53.95' },
            timerInterval: null,
            gaugeInterval: null,
            startTime: 0
        };

        // Server Data
        const servers = [
            { code: 'us', name: 'United States', signal: 4 },
            { code: 'fr', name: 'France', signal: 3 },
            { code: 'de', name: 'Germany', signal: 3 },
            { code: 'au', name: 'Australia', signal: 2 },
            { code: 'in', name: 'India', signal: 3 },
            { code: 'ca', name: 'Canada', signal: 4 },
            { code: 'ru', name: 'Russia', signal: 2 },
            { code: 'gb', name: 'United Kingdom', signal: 4 },
            { code: 'jp', name: 'Japan', signal: 3 },
            { code: 'cn', name: 'China', signal: 2 },
            { code: 'nl', name: 'Netherlands', signal: 4 },
        ];

        // --- Navigation ---
        
        function navigateTo(screenId) {
            const current = document.getElementById(state.currentScreen);
            const next = document.getElementById('screen-' + screenId);

            if(screenId === 'home') {
                // If coming from Intro
                document.getElementById('screen-intro').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('screen-intro').classList.add('hidden');
                    next.classList.remove('hidden');
                    // Reflow
                    void next.offsetWidth;
                    next.style.opacity = '1';
                }, 500);
            } else if (screenId === 'servers' || screenId === 'premium') {
                next.classList.remove('hidden');
                // Ensure slide animation plays
                next.classList.remove('slide-in-right');
                void next.offsetWidth;
                next.classList.add('slide-in-right');
            } else if (screenId === 'connected') {
                // Fade transition
                current.style.opacity = '0';
                setTimeout(() => {
                    current.classList.add('hidden');
                    next.classList.remove('hidden');
                    void next.offsetWidth;
                    next.style.opacity = '1';
                    startGaugeAnimation();
                }, 300);
            }

            // Update stack logic simplistically
            if(screenId !== 'servers' && screenId !== 'premium') {
                state.currentScreen = 'screen-' + screenId;
            }
        }

        function goBack() {
            // Closes modal screens (servers, premium)
            const serversScreen = document.getElementById('screen-servers');
            const premiumScreen = document.getElementById('screen-premium');

            if (!serversScreen.classList.contains('hidden')) {
                serversScreen.classList.add('hidden');
            }
            if (!premiumScreen.classList.contains('hidden')) {
                premiumScreen.classList.add('hidden');
            }
        }

        // --- Intro Logic ---
        
        window.addEventListener('DOMContentLoaded', () => {
            // Animate Loader
            setTimeout(() => {
                document.getElementById('loader-bar').style.width = '100%';
            }, 100);

            // Show Start Button after load
            setTimeout(() => {
                const btn = document.getElementById('btn-start');
                btn.classList.remove('opacity-0', 'translate-y-4');
            }, 2100);

            renderServerList();
        });

        // --- VPN Logic ---

        function connectVPN() {
            const statusEl = document.getElementById('connection-status');
            const btn = document.getElementById('power-btn');
            
            statusEl.innerText = "CONNECTING...";
            statusEl.classList.add('text-brand-400', 'animate-pulse');
            
            // Simulate connection delay
            setTimeout(() => {
                state.isConnected = true;
                state.startTime = Date.now();
                startTimer();
                
                // Update connected screen data
                document.getElementById('connected-flag').src = `https://flagcdn.com/w80/${state.selectedCountry.code}.png`;
                document.getElementById('connected-country').innerText = state.selectedCountry.name;

                navigateTo('connected');
                
                // Reset Home UI for when we come back
                statusEl.innerText = "TAP TO CONNECT";
                statusEl.classList.remove('text-brand-400', 'animate-pulse');
            }, 2000);
        }

        function disconnectVPN() {
            state.isConnected = false;
            stopTimer();
            stopGaugeAnimation();
            navigateTo('home');
        }

        function startTimer() {
            const timerEl = document.getElementById('timer');
            state.timerInterval = setInterval(() => {
                const now = Date.now();
                const diff = now - state.startTime;
                const date = new Date(diff);
                const h = String(date.getUTCHours()).padStart(2, '0');
                const m = String(date.getUTCMinutes()).padStart(2, '0');
                const s = String(date.getUTCSeconds()).padStart(2, '0');
                timerEl.innerText = `${h}:${m}:${s}`;
            }, 1000);
        }

        function stopTimer() {
            clearInterval(state.timerInterval);
            document.getElementById('timer').innerText = "00:00:00";
        }

        // --- Gauge Animation ---
        function startGaugeAnimation() {
            const needle = document.getElementById('needle');
            const speedVal = document.getElementById('speed-val');
            const gaugePath = document.getElementById('gauge-path');
            
            // SVG Path length for 200 viewbox 80 radius is approx 251.2 for partial circle
            // full circle 2*PI*80 = 502. 
            // Arc is from 20 to 180 = ~260 degrees? No path calc:
            // The path "M 20 100 A 80 80 0 0 1 180 100" is roughly half circle + bit more.
            // Let's just oscillate.

            state.gaugeInterval = setInterval(() => {
                // Random speed between 30 and 90
                const speed = Math.floor(Math.random() * (90 - 30 + 1) + 30) + Math.random().toFixed(1);
                speedVal.innerText = speed;

                // Rotate needle (-90deg is 0, 90deg is max)
                // Map speed 0-100 to -90 to 90
                const rotation = -90 + (speed / 100 * 180);
                needle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;

                // Stroke offset (251.2 is full dasharray)
                // 0 speed -> 251.2 offset (hidden)
                // 100 speed -> 0 offset (full)
                const offset = 251.2 - ((speed / 100) * 251.2);
                gaugePath.style.strokeDashoffset = offset;

            }, 2000);
            
            // Trigger first run immediately
             const speed = 54.8;
             speedVal.innerText = speed;
             needle.style.transform = `translateX(-50%) rotate(${ -90 + (speed/100*180) }deg)`;
             gaugePath.style.strokeDashoffset = 251.2 - ((speed / 100) * 251.2);
        }

        function stopGaugeAnimation() {
            clearInterval(state.gaugeInterval);
        }


        // --- Server List Logic ---
        
        function renderServerList(filter = '') {
            const container = document.getElementById('server-list');
            container.innerHTML = '';
            
            const filtered = servers.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));

            filtered.forEach(s => {
                const isSelected = s.code === state.selectedCountry.code;
                
                // Signal Bars HTML
                let barsHtml = '<div class="flex items-end space-x-0.5 h-3">';
                for(let i=1; i<=4; i++) {
                    barsHtml += `<div class="w-0.5 rounded-sm ${i <= s.signal ? 'bg-green-500' : 'bg-slate-700'}" style="height:${i*3}px"></div>`;
                }
                barsHtml += '</div>';

                const el = document.createElement('div');
                el.className = "flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer border border-transparent hover:border-slate-800 transition-all";
                el.onclick = () => selectServer(s.code, s.name);

                el.innerHTML = `
                    <div class="flex items-center space-x-3">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-8 h-8 rounded-full object-cover border border-slate-700">
                        <span class="text-white font-medium text-base">${s.name}</span>
                    </div>
                    <div class="flex items-center space-x-4">
                        ${barsHtml}
                        <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-brand-500 bg-brand-500' : 'border-slate-600'}">
                            ${isSelected ? '<i data-lucide="check" class="w-3 h-3 text-white"></i>' : ''}
                        </div>
                    </div>
                `;
                container.appendChild(el);
            });
            lucide.createIcons();
        }

        function filterServers(val) {
            renderServerList(val);
        }

        function selectServer(code, name) {
            // Generate fake IP
            const ip = `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
            
            state.selectedCountry = { code, name, ip };
            
            // Update Home
            document.getElementById('home-flag').src = `https://flagcdn.com/w80/${code}.png`;
            document.getElementById('home-country').innerText = name;
            document.getElementById('home-ip').innerText = `IP ${ip}`;
            
            renderServerList(); // Re-render to update checkmark
            goBack();
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
      

<div className="relative w-full h-full max-w-md bg-dark-900 shadow-2xl overflow-hidden flex flex-col" id="app-container">

<div className="absolute inset-0 bg-map pointer-events-none opacity-50 z-0"></div>
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none"></div>

<div className="absolute inset-0 z-50 bg-dark-900 flex flex-col items-center justify-between p-8 pb-12 transition-opacity duration-500" id="screen-intro">
<div className="flex-1 flex flex-col justify-center items-center w-full relative">

<div className="absolute inset-0 flex items-center justify-center opacity-20">
<i className="w-64 h-64 text-brand-500 stroke-1" data-lucide="globe"></i>
</div>
<div className="z-10 text-center space-y-4">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-600 shadow-lg shadow-brand-500/20 mb-4">
<i className="text-white w-8 h-8" data-lucide="shield-check"></i>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-white">
                        Satellite <span className="text-brand-400">VPN</span>
</h1>
<p className="text-slate-400 text-lg leading-relaxed max-w-[250px]">
                        Secure your connection with military-grade encryption.
                    </p>
</div>
</div>

<div className="w-full flex flex-col items-center space-y-6">
<div className="w-full max-w-[200px] h-1 bg-slate-800 rounded-full overflow-hidden" id="intro-loader">
<div className="h-full bg-brand-500 w-0 transition-all duration-[2000ms] ease-out" id="loader-bar"></div>
</div>
<button className="opacity-0 translate-y-4 transition-all duration-500 w-full py-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-medium text-lg tracking-wide shadow-lg group relative overflow-hidden" id="btn-start" onclick="navigateTo('home')">
<span className="relative z-10 group-hover:tracking-wider transition-all">START</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>

<div className="absolute inset-0 z-30 flex flex-col hidden opacity-0 transition-opacity duration-300" id="screen-home">

<header className="flex justify-between items-center p-6 z-20">
<button className="p-2 rounded-full hover:bg-white/5 transition-colors">
<i className="w-6 h-6 text-slate-300" data-lucide="menu"></i>
</button>
<div className="text-xl font-semibold tracking-tight text-white">Satellite <span className="text-brand-400">VPN</span></div>
<button className="p-2 rounded-full hover:bg-white/5 transition-colors">
<i className="w-6 h-6 text-slate-300" data-lucide="radio"></i>
</button>
</header>

<main className="flex-1 flex flex-col items-center justify-start pt-4 px-6 relative z-10 overflow-y-auto scrollbar-hide pb-24">

<button className="flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full mb-8 hover:bg-amber-500/20 transition-all" onclick="navigateTo('premium')">
<i className="w-4 h-4 text-amber-400 fill-amber-400" data-lucide="crown"></i>
<span className="text-amber-400 text-xs font-semibold tracking-wide uppercase">Go Premium</span>
</button>

<div className="relative w-64 h-64 flex items-center justify-center mb-10">

<div className="absolute inset-0 rounded-full border border-white/5 animate-pulse-slow"></div>
<div className="absolute inset-4 rounded-full border border-white/5"></div>

<button className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center group transition-all duration-300 hover:scale-105 active:scale-95" id="power-btn" onclick="connectVPN()">
<div className="absolute inset-0 rounded-full bg-brand-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
<i className="w-12 h-12 text-slate-400 group-hover:text-brand-400 transition-colors stroke-[2px]" data-lucide="power"></i>
</button>

<div className="absolute -bottom-8 text-center">
<span className="text-slate-400 text-sm font-medium tracking-wide" id="connection-status">TAP TO CONNECT</span>
</div>
</div>

<div className="w-full glass rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors group border border-slate-800" onclick="navigateTo('servers')">
<div className="flex items-center space-x-4">
<img alt="USA" className="w-10 h-7 rounded shadow-sm object-cover" id="home-flag" src="https://flagcdn.com/w80/us.png"/>
<div>
<div className="text-white font-medium text-base" id="home-country">United States</div>
<div className="text-slate-500 text-xs font-mono mt-0.5" id="home-ip">IP 79.110.53.95</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="flex items-end space-x-0.5 h-4">
<div className="w-1 bg-brand-500 h-2 rounded-sm"></div>
<div className="w-1 bg-brand-500 h-3 rounded-sm"></div>
<div className="w-1 bg-brand-500 h-4 rounded-sm"></div>
</div>
<i className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="mt-6 flex flex-col items-center w-full">
<div className="flex items-center space-x-2 text-brand-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
<span className="text-xs font-bold tracking-wider uppercase">Optimal Location</span>
</div>
<div className="flex justify-between w-full px-4">

<div className="flex flex-col items-center space-y-2 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-brand-500/50 transition-colors">
<img className="w-5 h-5 rounded-full object-cover" src="https://flagcdn.com/w40/fr.png"/>
</div>
<span className="text-[10px] text-slate-400 uppercase font-medium">Auto</span>
</div>

<div className="flex flex-col items-center space-y-2 cursor-pointer group">
<div className="w-12 h-12 -mt-1 rounded-full bg-slate-800 flex items-center justify-center border-2 border-brand-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
<img className="w-6 h-6 rounded-full object-cover" src="https://flagcdn.com/w40/lu.png"/>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-white font-bold uppercase tracking-tight">Luxembourg</span>
<span className="text-[9px] text-slate-500 font-mono">5.149.112</span>
</div>
</div>

<div className="flex flex-col items-center space-y-2 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-brand-500/50 transition-colors">
<img className="w-5 h-5 rounded-full object-cover" src="https://flagcdn.com/w40/be.png"/>
</div>
<span className="text-[10px] text-slate-400 uppercase font-medium">26 ms</span>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-6 left-6 right-6 h-16 glass rounded-2xl flex justify-between items-center px-6 z-40 shadow-2xl">
<button className="nav-item active text-brand-400 flex flex-col items-center justify-center w-10">
<i className="w-6 h-6 stroke-[2px]" data-lucide="home"></i>
<div className="w-1 h-1 bg-brand-400 rounded-full mt-1"></div>
</button>
<button className="nav-item text-slate-500 hover:text-white transition-colors flex flex-col items-center justify-center w-10">
<i className="w-6 h-6 stroke-[2px]" data-lucide="user"></i>
</button>
<button className="nav-item text-slate-500 hover:text-white transition-colors flex flex-col items-center justify-center w-10">
<i className="w-6 h-6 stroke-[2px]" data-lucide="settings"></i>
</button>
<button className="nav-item text-slate-500 hover:text-white transition-colors flex flex-col items-center justify-center w-10">
<i className="w-6 h-6 stroke-[2px]" data-lucide="bell"></i>
</button>
</nav>
</div>

<div className="absolute inset-0 z-40 bg-dark-900 flex flex-col hidden opacity-0 transition-opacity duration-300" id="screen-connected">

<header className="flex justify-between items-center p-6">
<button className="p-2" onclick="disconnectVPN()">
<i className="w-6 h-6 text-slate-300" data-lucide="arrow-left"></i>
</button>
<div className="text-xl font-semibold tracking-tight text-white">Satellite <span className="text-brand-400">VPN</span></div>
<button className="p-2">
<i className="w-6 h-6 text-brand-400 animate-pulse" data-lucide="radio"></i>
</button>
</header>
<main className="flex-1 flex flex-col items-center px-6 pb-24 overflow-y-auto scrollbar-hide">

<div className="relative w-64 h-64 mt-4 mb-8">

<svg className="w-full h-full" viewbox="0 0 200 120">

<path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#1e293b" strokeLinecap="round" strokeWidth="15"></path>

<path className="transition-all duration-1000 ease-out" d="M 20 100 A 80 80 0 0 1 180 100" fill="none" id="gauge-path" stroke="url(#gradient)" stroke-dasharray="251.2" stroke-dashoffset="251.2" strokeLinecap="round" strokeWidth="15"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#38bdf8'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6'}}></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute bottom-12 left-0 right-0 text-center flex flex-col items-center">
<div className="text-5xl font-bold text-white tracking-tighter" id="speed-val">0.0</div>
<div className="flex items-center text-brand-400 text-sm font-medium mt-1">
<i className="w-4 h-4 mr-1" data-lucide="arrow-up-circle"></i> Mbps
                        </div>
</div>

<div className="absolute bottom-[20px] left-1/2 w-[2px] h-[70px] bg-white origin-bottom -translate-x-1/2 transition-transform duration-700 ease-out" id="needle" style={{transform: 'translateX(-50%) rotate(-90deg)'}}></div>
<div className="absolute bottom-[16px] left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 shadow-[0_0_10px_white]"></div>
</div>

<button className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 px-8 py-2 rounded-full text-sm font-bold tracking-wide uppercase transition-colors mb-8" onclick="disconnectVPN()">
                    Stop
                </button>

<div className="w-full glass rounded-2xl p-4 flex items-center justify-between border border-slate-800 mb-6 relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-500"></div>
<div className="flex items-center space-x-4 pl-2">
<img className="w-10 h-7 rounded shadow-sm object-cover" id="connected-flag" src="https://flagcdn.com/w80/us.png"/>
<div>
<div className="text-white font-medium text-base" id="connected-country">United States</div>
<div className="text-brand-400 text-xs font-bold uppercase tracking-wider">Connected</div>
</div>
</div>
<div className="flex flex-col items-end">
<div className="text-slate-200 font-mono text-lg" id="timer">00:00:00</div>
<div className="flex space-x-0.5 items-end h-3 mt-1">
<div className="w-0.5 h-1 bg-green-500"></div>
<div className="w-0.5 h-2 bg-green-500"></div>
<div className="w-0.5 h-3 bg-green-500"></div>
<div className="w-0.5 h-2 bg-green-500"></div>
<div className="w-0.5 h-3 bg-green-500"></div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 w-full mb-6">

<div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-800">
<div className="flex items-center space-x-2 mb-2">
<div className="p-1.5 bg-brand-500/20 rounded-full">
<i className="w-4 h-4 text-brand-400" data-lucide="arrow-up"></i>
</div>
<span className="text-slate-400 text-xs font-medium">Upload</span>
</div>
<div className="text-xl font-semibold text-white tracking-tight">32.3 <span className="text-xs font-normal text-slate-500">Mbps</span></div>

<div className="h-10 w-full mt-2 flex items-end space-x-1 opacity-50">
<div className="w-full bg-brand-500/20 h-4 rounded-t-sm"></div>
<div className="w-full bg-brand-500/40 h-6 rounded-t-sm"></div>
<div className="w-full bg-brand-500/60 h-3 rounded-t-sm"></div>
<div className="w-full bg-brand-500/80 h-8 rounded-t-sm"></div>
</div>
</div>

<div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-800">
<div className="flex items-center space-x-2 mb-2">
<div className="p-1.5 bg-accent-500/20 rounded-full">
<i className="w-4 h-4 text-accent-400" data-lucide="arrow-down"></i>
</div>
<span className="text-slate-400 text-xs font-medium">Download</span>
</div>
<div className="text-xl font-semibold text-white tracking-tight">54.8 <span className="text-xs font-normal text-slate-500">Mbps</span></div>

<div className="h-10 w-full mt-2 flex items-end space-x-1 opacity-50">
<div className="w-full bg-accent-500/20 h-5 rounded-t-sm"></div>
<div className="w-full bg-accent-500/40 h-3 rounded-t-sm"></div>
<div className="w-full bg-accent-500/60 h-7 rounded-t-sm"></div>
<div className="w-full bg-accent-500/80 h-6 rounded-t-sm"></div>
</div>
</div>
</div>

<div className="w-full bg-black/40 rounded-xl p-4 flex justify-between items-center text-center border border-white/5">
<div>
<div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Latency</div>
<div className="text-white font-mono text-sm mt-1">40 ms</div>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div>
<div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Jitter</div>
<div className="text-white font-mono text-sm mt-1">61 ms</div>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div>
<div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Loss</div>
<div className="text-white font-mono text-sm mt-1">0%</div>
</div>
</div>
</main>

<nav className="absolute bottom-6 left-6 right-6 h-16 glass rounded-2xl flex justify-between items-center px-6 z-40 shadow-2xl">
<button className="nav-item active text-brand-400 flex flex-col items-center justify-center w-10">
<i className="w-6 h-6 stroke-[2px]" data-lucide="home"></i>
<div className="w-1 h-1 bg-brand-400 rounded-full mt-1"></div>
</button>
<button className="nav-item text-slate-500 hover:text-white transition-colors flex flex-col items-center justify-center w-10">
<i className="w-6 h-6 stroke-[2px]" data-lucide="user"></i>
</button>
<button className="nav-item text-slate-500 hover:text-white transition-colors flex flex-col items-center justify-center w-10">
<i className="w-6 h-6 stroke-[2px]" data-lucide="settings"></i>
</button>
<button className="nav-item text-slate-500 hover:text-white transition-colors flex flex-col items-center justify-center w-10">
<i className="w-6 h-6 stroke-[2px]" data-lucide="bell"></i>
</button>
</nav>
</div>

<div className="absolute inset-0 z-50 bg-dark-900 flex flex-col hidden slide-in-right" id="screen-servers">

<header className="flex items-center p-6 space-x-4">
<button className="p-2 -ml-2 rounded-full hover:bg-white/5" onclick="goBack()">
<i className="w-6 h-6 text-slate-300" data-lucide="arrow-left"></i>
</button>
<div className="text-xl font-semibold tracking-tight text-white flex-1">Select Location</div>
<i className="w-6 h-6 text-slate-500" data-lucide="globe"></i>
</header>

<div className="px-6 mb-4">
<div className="relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" data-lucide="search"></i>
<input className="w-full bg-slate-800/50 border border-slate-700 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-500 text-base" onkeyup="filterServers(this.value)" placeholder="Search location" type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-6 space-y-3" id="server-list">

</div>
</div>

<div className="absolute inset-0 z-50 bg-dark-900 flex flex-col hidden slide-in-right" id="screen-premium">

<header className="flex items-center justify-between p-6">
<button className="p-2 -ml-2 rounded-full hover:bg-white/5" onclick="goBack()">
<i className="w-6 h-6 text-slate-300" data-lucide="arrow-left"></i>
</button>
<div className="text-xl font-semibold tracking-tight text-white">Satellite <span className="text-brand-400">VIP</span></div>
<i className="w-6 h-6 text-slate-600" data-lucide="radio"></i>
</header>
<main className="flex-1 overflow-y-auto px-6 pb-6 text-center">
<div className="flex justify-center mb-4">
<div className="w-20 h-20 bg-gradient-to-br from-amber-300 to-yellow-600 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]">
<i className="w-10 h-10 text-white fill-white" data-lucide="crown"></i>
</div>
</div>
<h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Get premium today</h2>
<p className="text-slate-400 text-base mb-8">Remove ads and unlock all locations with faster speed.</p>

<div className="grid grid-cols-2 gap-4 text-left mb-8">
<div className="flex flex-col space-y-1 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="flex items-center space-x-2 text-white font-semibold">
<i className="w-5 h-5 text-brand-400" data-lucide="ghost"></i>
<span>Anonymous</span>
</div>
<span className="text-xs text-slate-500 leading-tight">Hide your ip, surf anonymously</span>
</div>
<div className="flex flex-col space-y-1 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="flex items-center space-x-2 text-white font-semibold">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="zap"></i>
<span>Fast</span>
</div>
<span className="text-xs text-slate-500 leading-tight">Up to 1000 Mb/s bandwidth</span>
</div>
<div className="flex flex-col space-y-1 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="flex items-center space-x-2 text-white font-semibold">
<i className="w-5 h-5 text-red-400" data-lucide="ban"></i>
<span>No Ads</span>
</div>
<span className="text-xs text-slate-500 leading-tight">Surf without annoying ads</span>
</div>
<div className="flex flex-col space-y-1 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="flex items-center space-x-2 text-white font-semibold">
<i className="w-5 h-5 text-green-400" data-lucide="shield-check"></i>
<span>Secure</span>
</div>
<span className="text-xs text-slate-500 leading-tight">Traffic via encrypted tunnel</span>
</div>
</div>

<div className="space-y-3 mb-6">

<label className="block relative cursor-pointer group">
<input className="peer sr-only" name="plan" type="radio"/>
<div className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-4 flex justify-between items-center peer-checked:border-brand-500 peer-checked:bg-brand-500/10 transition-all">
<div className="text-left">
<div className="text-white font-bold text-lg">1 Month</div>
<div className="text-slate-500 text-xs">Total price $9.99</div>
</div>
<div className="text-right">
<div className="text-white font-bold text-xl tracking-tight">9.92</div>
<div className="text-slate-500 text-[10px] uppercase">$/Month</div>
</div>
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-brand-500 rounded-2xl pointer-events-none"></div>
</div>
</label>

<label className="block relative cursor-pointer group">
<input checked="" className="peer sr-only" name="plan" type="radio"/>
<div className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-4 flex justify-between items-center peer-checked:border-brand-500 peer-checked:bg-brand-500/10 transition-all">
<div className="absolute -top-3 left-4 bg-brand-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Most Popular</div>
<div className="text-left">
<div className="text-white font-bold text-lg">6 Month</div>
<div className="text-slate-500 text-xs">Total price $54.99</div>
</div>
<div className="text-right">
<div className="text-white font-bold text-xl tracking-tight">7.19</div>
<div className="text-slate-500 text-[10px] uppercase">$/Month</div>
</div>
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-brand-500 rounded-2xl pointer-events-none"></div>
</div>
</label>

<label className="block relative cursor-pointer group">
<input className="peer sr-only" name="plan" type="radio"/>
<div className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-4 flex justify-between items-center peer-checked:border-brand-500 peer-checked:bg-brand-500/10 transition-all">
<div className="text-left">
<div className="text-white font-bold text-lg">12 Month</div>
<div className="text-slate-500 text-xs">Total price $84.99</div>
</div>
<div className="text-right">
<div className="text-white font-bold text-xl tracking-tight">6.59</div>
<div className="text-slate-500 text-[10px] uppercase">$/Month</div>
</div>
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-brand-500 rounded-2xl pointer-events-none"></div>
</div>
</label>
</div>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold text-lg shadow-lg hover:shadow-brand-500/25 transition-all active:scale-[0.98]">
                    Get Premium Now <i className="inline w-5 h-5 mb-0.5" data-lucide="chevron-right"></i>
</button>
<div className="mt-4 text-center">
<button className="text-xs text-slate-500 hover:text-white transition-colors">Restore purchase</button>
</div>
</main>
</div>
</div>



    </>
  );
}
