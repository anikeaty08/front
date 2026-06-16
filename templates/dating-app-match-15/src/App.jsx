import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        let timeLeft = 30 * 60; // 30 minutes in seconds
        let timerInterval;
        let phase = 0; // 0: Free, 1: Prompt, 2: Map
        const borderElement = document.getElementById('timer-border');
        const countdownElement = document.getElementById('countdown');
        
        // Colors
        const COLOR_CYAN = '#00F0FF';
        const COLOR_ORANGE = '#FF5E00';
        const COLOR_RED = '#FF0000';

        function startMatch() {
            // Shared Element Transition Simulation
            const dashboard = document.getElementById('view-dashboard');
            const arena = document.getElementById('view-arena');
            
            dashboard.style.transform = 'scale(1.1)';
            dashboard.style.opacity = '0';
            
            setTimeout(() => {
                dashboard.classList.add('hidden');
                arena.classList.remove('hidden');
                
                // Accelerate timer for demo purposes (1 real second = 1 minute simulated)
                startTimer();
                simulateChat();
            }, 500);
        }

        function startTimer() {
            // Set initial perimeter dasharray
            const totalLength = 2000; // approximate perimeter
            
            timerInterval = setInterval(() => {
                // For demo: decrease by 30 seconds every tick to show phases quickly
                timeLeft -= 30; 
                
                // Format Time
                const m = Math.floor(timeLeft / 60);
                const s = timeLeft % 60;
                countdownElement.innerText = `${m}:${s < 10 ? '0'+s : s}`;

                // Update Border Stroke
                const percentage = timeLeft / (30 * 60);
                const offset = totalLength * (1 - percentage);
                borderElement.style.strokeDashoffset = offset;

                // Color & Phase Logic
                if (m < 20 && phase === 0) { // < 20 mins remaining (passed 10)
                    phase = 1;
                    document.getElementById('phase-prompts').classList.remove('hidden');
                    document.getElementById('phase-prompts').classList.add('fade-in');
                    borderElement.style.stroke = COLOR_ORANGE;
                    borderElement.style.filter = `drop-shadow(0 0 4px ${COLOR_ORANGE}aa)`;
                    document.getElementById('status-indicator').children[0].classList.replace('bg-[#00F0FF]', 'bg-[#FF5E00]');
                    document.getElementById('status-indicator').children[1].classList.replace('text-[#00F0FF]', 'text-[#FF5E00]');
                }

                if (m < 10 && phase === 1) { // < 10 mins remaining
                    phase = 2;
                    document.getElementById('phase-map').classList.remove('hidden');
                    document.getElementById('phase-map').classList.add('fade-in');
                    // Lock prompt
                    document.getElementById('phase-prompts').classList.add('opacity-50', 'pointer-events-none');
                }

                if (m < 5) {
                    borderElement.style.stroke = COLOR_RED;
                    countdownElement.classList.add('text-red-500', 'animate-pulse');
                }

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    triggerDecision();
                }

            }, 200); // Fast speed for demo
        }

        function simulateChat() {
            const chatStream = document.getElementById('chat-stream');
            const typingIndicator = document.getElementById('live-typing-indicator');

            // Simulate incoming message sequence
            setTimeout(() => { typingIndicator.classList.remove('hidden'); }, 1000);
            
            setTimeout(() => { 
                typingIndicator.classList.add('hidden');
                const msg = document.createElement('div');
                msg.className = "self-start max-w-[80%] glass-panel rounded-2xl rounded-tl-sm p-4 text-sm font-light text-white/90 leading-relaxed fade-in";
                msg.innerHTML = "I prefer chaos over curated. The neon installation in the back is mesmerizing.";
                chatStream.appendChild(msg);
                chatStream.scrollTop = chatStream.scrollHeight;
            }, 3500);

            setTimeout(() => {
                const myMsg = document.createElement('div');
                myMsg.className = "self-end max-w-[80%] bg-[#00F0FF]/10 border border-[#00F0FF]/20 rounded-2xl rounded-tr-sm p-4 text-sm font-light text-white/90 leading-relaxed fade-in";
                myMsg.innerHTML = "Agreed. It feels like the interface we're using right now. Bio-digital.";
                chatStream.appendChild(myMsg);
                chatStream.scrollTop = chatStream.scrollHeight;
            }, 5500);
        }

        function triggerDecision() {
            document.getElementById('view-arena').classList.add('blur-sm');
            document.getElementById('view-decision').classList.remove('hidden');
            document.getElementById('view-decision').classList.add('fade-in');
        }

        function makeChoice(isYes) {
            if(isYes) {
                document.getElementById('view-decision').classList.add('hidden');
                const meetingView = document.getElementById('view-meeting');
                meetingView.classList.remove('hidden');
                meetingView.classList.add('fade-in');
                
                // Trigger Confetti
                const container = document.getElementById('confetti-container');
                for(let i=0; i<30; i++) {
                    const c = document.createElement('div');
                    c.className = 'confetti-piece';
                    c.style.left = Math.random() * 100 + '%';
                    c.style.animationDelay = Math.random() * 2 + 's';
                    c.style.backgroundColor = Math.random() > 0.5 ? COLOR_CYAN : COLOR_ORANGE;
                    container.appendChild(c);
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 pointer-events-none">
<div className="pointer-events-auto">
<h1 className="font-medium tracking-tight text-lg text-white/90">INSTANT</h1>
</div>
<button className="pointer-events-auto group flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md hover:bg-red-500/20 transition-all active:scale-95">
<iconify-icon className="text-red-400 text-lg" icon="solar:shield-warning-linear"></iconify-icon>
<span className="text-xs font-medium text-red-400 tracking-wide">SOS</span>
</button>
</nav>

<main className="relative w-full h-full" id="app-container">

<section className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-12 transition-all duration-700 ease-in-out" id="view-dashboard">

<div className="absolute inset-0 z-0">
<img alt="Profile" className="w-full h-full object-cover opacity-60 grayscale-[30%] contrast-125 transition-transform duration-[2s] hover:scale-105" src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&amp;w=2694&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
</div>

<div className="relative z-10 w-full max-w-md px-6 flex flex-col gap-6 fade-in">
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
<span className="text-xs font-medium tracking-widest uppercase text-[#00F0FF]">Nearby • 400m</span>
</div>
<h2 className="text-4xl font-light tracking-tight text-white">Elena, 26</h2>
<p className="text-sm font-light text-white/70 leading-relaxed">
                        Digital architect. Seeking spontaneous dialogue over structure. 
                        Let's skip the small talk.
                    </p>
</div>

<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-light text-white/80">Design</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-light text-white/80">Night Drives</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-light text-white/80">Ramen</span>
</div>

<div className="pt-4 flex justify-center">
<button className="group relative flex items-center justify-center w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl transition-all active:scale-90" onclick="startMatch()">
<div className="absolute inset-0 rounded-full border border-[#00F0FF]/30 animate-ripple-effect"></div>
<iconify-icon className="text-3xl text-[#00F0FF] group-hover:text-white transition-colors duration-300" icon="solar:bolt-linear"></iconify-icon>
</button>
</div>
<p className="text-center text-[10px] text-white/40 tracking-wider">TAP TO CONNECT</p>
</div>
</section>

<section className="hidden absolute inset-0 z-20 bg-[#050505]" id="view-arena">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible">
<rect className="transition-all duration-1000 ease-linear opacity-50" fill="none" height="100%" id="timer-border" rx="0" ry="0" stroke="#00F0FF" strokeWidth="4" style={{width: 'calc(100% - 4px)', height: 'calc(100% - 4px)', strokeDasharray: '2000', strokeDashoffset: '0', filter: 'drop-shadow(0 0 4px rgba(0,240,255,0.4))'}} width="100%" x="2" y="2"></rect>
</svg>

<div className="absolute top-0 w-full pt-16 pb-4 px-6 bg-gradient-to-b from-[#050505] to-transparent z-40 flex justify-between items-end">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover border border-white/10 filter grayscale-[20%]" src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Elena</h3>
<div className="flex items-center gap-1.5" id="status-indicator">
<span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse"></span>
<span className="text-xs text-[#00F0FF] font-light tracking-wide">Live</span>
</div>
</div>
</div>
<div className="text-right">
<span className="text-2xl font-light font-mono tracking-tighter text-white tabular-nums" id="countdown">29:59</span>
<p className="text-[10px] text-white/40 uppercase tracking-widest text-right">Time Remaining</p>
</div>
</div>

<div className="absolute inset-0 pt-32 pb-24 px-4 overflow-y-auto no-scrollbar flex flex-col gap-4" id="chat-stream">

<div className="flex justify-center my-4">
<span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] text-white/40 uppercase tracking-widest">Connection Secured</span>
</div>

<div className="self-start max-w-[80%] glass-panel rounded-2xl rounded-tl-sm p-4 text-sm font-light text-white/90 leading-relaxed fade-in">
                    I see we're both near the Art District. What's your take on the new exhibit?
                </div>

</div>

<div className="absolute bottom-0 w-full p-4 pb-8 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent z-40" id="input-area">
<div className="relative w-full">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00F0FF]/50 focus:bg-white/10 transition-all font-light" placeholder="Type a message..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-[#00F0FF] transition-colors">
<iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
</button>
</div>

<div className="hidden absolute -top-8 left-6 flex items-center gap-1 opacity-70" id="live-typing-indicator">
<span className="text-[10px] text-white/50 mr-2">Elena is typing</span>
<div className="typing-dot w-1 h-1 rounded-full bg-white"></div>
<div className="typing-dot w-1 h-1 rounded-full bg-white"></div>
<div className="typing-dot w-1 h-1 rounded-full bg-white"></div>
</div>
</div>

<div className="hidden absolute bottom-24 left-4 right-4 z-30 flex flex-col gap-2" id="phase-prompts">
<div className="glass-panel p-4 rounded-xl border-l-2 border-[#FF5E00]">
<div className="flex justify-between items-center mb-2">
<h4 className="text-xs font-semibold text-[#FF5E00] uppercase tracking-widest">Phase 2: Deep Dive</h4>
<iconify-icon className="text-[#FF5E00]" icon="solar:lock-unlocked-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-white mb-3">Tell me about a time you failed and what you learned.</p>
<div className="flex gap-2">
<button className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium transition-colors">Skip</button>
<button className="flex-1 py-2 bg-[#FF5E00]/20 text-[#FF5E00] border border-[#FF5E00]/30 rounded-lg text-xs font-medium transition-colors">Answer</button>
</div>
</div>
</div>

<div className="hidden absolute top-32 left-4 right-4 z-20 h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black" id="phase-map">
<div className="bg-[#111] w-full h-full relative opacity-90">

<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-74.006,40.7128,12,0/600x300@2x?access_token=pk.eyJ1IjoiZGVtb3MiLCJhIjoiY2oyMiJ9.5-z29-6')] bg-cover bg-center grayscale opacity-60"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-16 h-16 rounded-full bg-[#00F0FF]/20 animate-pulse flex items-center justify-center">
<div className="w-3 h-3 bg-[#00F0FF] rounded-full shadow-[0_0_10px_#00F0FF]"></div>
</div>
</div>
<div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white/70">
                        Midpoint: Neon Coffee Bar
                    </div>
</div>
</div>
</section>

<section className="hidden absolute inset-0 z-50 flex flex-col justify-center px-6 bg-[#050505]/80 backdrop-blur-2xl transition-opacity duration-500" id="view-decision">
<div className="text-center mb-12">
<h2 className="text-3xl font-light text-white tracking-tight mb-2">Time's Up</h2>
<p className="text-sm text-white/50 font-light">Make your choice. No turning back.</p>
</div>
<div className="space-y-4 w-full max-w-sm mx-auto">
<button className="w-full h-24 neumorphic-btn rounded-xl flex items-center justify-between px-8 group hover:bg-[#111] transition-all border border-white/5" onclick="makeChoice(true)">
<span className="text-xl font-medium tracking-tight group-hover:text-[#00F0FF] transition-colors">MEET NOW</span>
<iconify-icon className="text-3xl text-white/20 group-hover:text-[#00F0FF] transition-colors" icon="solar:check-circle-linear"></iconify-icon>
</button>
<button className="w-full h-16 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all" onclick="location.reload()">
<span className="text-sm font-light text-white/40">Disconnect</span>
</button>
</div>
</section>

<section className="hidden absolute inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center overflow-hidden" id="view-meeting">

<div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/20 via-transparent to-[#FF5E00]/10 opacity-0 animate-pulse" style={{animationDuration: '3s'}}></div>
<div className="relative z-10 text-center px-8">
<div className="mb-8 relative inline-block">
<div className="w-24 h-24 rounded-full border border-white/10 bg-white/5 flex items-center justify-center relative z-10">
<iconify-icon className="text-4xl text-[#00F0FF]" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[#00F0FF] blur-3xl opacity-40 animate-pulse"></div>
</div>
<h2 className="text-4xl font-light tracking-tighter text-white mb-2 text-glow-cyan">IT'S A MATCH</h2>
<p className="text-sm font-light text-white/60 mb-8">Navigation locked. Go.</p>
<div className="w-full max-w-xs mx-auto glass-panel p-6 rounded-2xl text-left border-l-4 border-[#00F0FF]">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-[10px] uppercase tracking-widest text-white/40">Destination</p>
<p className="text-lg font-medium text-white">Neon Coffee Bar</p>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-widest text-white/40">ETA</p>
<p className="text-lg font-medium text-[#00F0FF]">4 min</p>
</div>
</div>
<button className="w-full py-3 bg-[#00F0FF] text-black font-semibold rounded-lg text-sm hover:bg-[#00D1DF] transition-colors flex items-center justify-center gap-2">
<span>Open GPS</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute inset-0 pointer-events-none" id="confetti-container"></div>
</section>
</main>

<div className="scanline"></div>


    </>
  );
}
