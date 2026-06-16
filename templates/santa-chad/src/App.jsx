import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const form = document.getElementById('chat-form');
        const input = document.getElementById('user-input');
        const subtitleText = document.getElementById('subtitle-text');
        const statusText = document.getElementById('status-text');
        const visualizer = document.getElementById('visualizer');
        const avatarContainer = document.getElementById('avatar-container');
        const micBtn = document.getElementById('mic-btn');

        // Chad Santa's Brain (Mock Responses)
        const responses = [
            "Ho ho hold up. You think you're getting on the nice list without hitting PRs? Nice try, bro.",
            "I checked the list twice. You're lacking protein, and your squat depth is questionable. coal for you.",
            "Listen, the reindeer are on a strict keto diet this year. Rudolf is shredded. Ask me about my glute routine.",
            "Gifts? The only gift I'm giving out this year is the gift of gains. Merry Liftmas.",
            "Just finished a set of 500 chimney pushups. I'm pumped. What do you want?",
            "Bro, Mrs. Claus got me these new tactical lifting gloves. My grip strength is infinite right now.",
            "I'm detecting low testosterone levels in that question. Try again with more intensity."
        ];

        let isSpeaking = false;
        let typingInterval;

        // UI Logic
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text || isSpeaking) return;

            // Reset UI
            input.value = '';
            handleUserInteraction(text);
        });

        micBtn.addEventListener('click', () => {
            if (isSpeaking) return;
            statusText.textContent = "LISTENING...";
            statusText.classList.add('text-red-400');
            statusText.classList.remove('text-neutral-500');
            
            // Simulate listening delay
            setTimeout(() => {
                handleUserInteraction("Voice Input Detected...");
            }, 1500);
        });

        function handleUserInteraction(userText) {
            // Processing State
            statusText.textContent = "CHAD SANTA IS THINKING...";
            statusText.classList.remove('text-red-400');
            statusText.classList.add('text-emerald-400');
            subtitleText.classList.add('hidden');
            subtitleText.textContent = '';
            
            // Randomize Response
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            // Simulate Network/Processing Delay
            setTimeout(() => {
                simulateSpeaking(randomResponse);
            }, 1200);
        }

        function simulateSpeaking(text) {
            isSpeaking = true;
            statusText.textContent = "GENERATING RESPONSE...";
            statusText.classList.remove('text-emerald-400');
            statusText.classList.add('text-red-500');
            
            // UI visual feedback
            visualizer.classList.remove('opacity-0');
            avatarContainer.classList.add('scale-110');
            
            subtitleText.classList.remove('hidden');
            
            // Typewriter effect
            let i = 0;
            clearInterval(typingInterval);
            
            // Calculate timing based on text length to simulate speech cadence roughly
            const speed = 40; 
            
            typingInterval = setInterval(() => {
                if (i < text.length) {
                    subtitleText.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(stopSpeaking, 2000); // Wait a bit after finishing text
                }
            }, speed);
        }

        function stopSpeaking() {
            isSpeaking = false;
            visualizer.classList.add('opacity-0');
            avatarContainer.classList.remove('scale-110');
            statusText.textContent = "WAITING FOR INPUT...";
            statusText.classList.remove('text-red-500');
            statusText.classList.add('text-neutral-500');
        }

        // Initialize with random subtle movement for the avatar
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            avatarContainer.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-50 scanline opacity-10"></div>
<div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)]"></div>

<header className="flex-none flex items-center justify-between px-6 py-4 border-b border-neutral-900/50 bg-black/20 backdrop-blur-sm z-30">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tighter text-white">CS</span>
</div>
<div>
<h1 className="text-sm font-medium tracking-tight text-white leading-none">CHAD SANTA</h1>
<span className="text-[10px] text-neutral-500 font-medium tracking-wide uppercase">Interactive Agent</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/50 border border-neutral-800">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></div>
<span className="text-[10px] font-medium text-neutral-400 tracking-wide">SYSTEM ONLINE</span>
</div>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon height="18" icon="lucide:settings-2" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex flex-col items-center justify-center relative z-10 p-6">

<div className="relative w-full max-w-lg aspect-square flex items-center justify-center">

<div className="absolute inset-0 border border-neutral-800/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-neutral-800/30 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>

<div className="relative w-64 h-64 wireframe-effect text-red-500/80 transition-all duration-300" id="avatar-container">
<svg className="w-full h-full drop-shadow-[0_0_15px_rgba(220,38,38,0.2)]" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<path d="M50 60 C50 20, 150 20, 150 60 L150 100 C150 160, 100 180, 100 190 C100 180, 50 160, 50 100 Z" stroke="currentColor" strokeWidth="0.5"></path>

<path d="M45 60 C45 60, 100 10, 155 60" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M155 60 L180 80 L160 90" stroke="currentColor" strokeWidth="0.5"></path> 
<circle cx="160" cy="90" r="5" stroke="currentColor" strokeWidth="0.5"></circle>

<path d="M60 90 L95 90 L100 95 L105 90 L140 90 L135 110 L105 110 L100 105 L95 110 L65 110 Z" fill="rgba(20,20,20,0.8)" stroke="currentColor" strokeWidth="0.5"></path>
<line stroke="currentColor" strokeWidth="0.5" x1="60" x2="45" y1="90" y2="85"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="140" x2="155" y1="90" y2="85"></line>

<path d="M60 120 C60 120, 70 160, 100 160 C130 160, 140 120, 140 120" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<path d="M70 130 L100 170 L130 130" stroke="currentColor" strokeWidth="0.2"></path>

<path d="M100 20 L100 190" opacity="0.5" stroke="currentColor" strokeWidth="0.1"></path>
<path d="M50 100 L150 100" opacity="0.5" stroke="currentColor" strokeWidth="0.1"></path>
<ellipse cx="100" cy="100" opacity="0.5" rx="40" ry="60" stroke="currentColor" strokeWidth="0.1"></ellipse>
</svg>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-1 h-12 opacity-0 transition-opacity duration-300" id="visualizer">
<div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
<div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
</div>
</div>

<div className="mt-8 min-h-[4rem] flex flex-col items-center justify-center max-w-2xl text-center z-20">
<h2 className="text-lg md:text-xl font-medium tracking-tight text-white drop-shadow-md typing-cursor hidden" id="subtitle-text"></h2>
<p className="text-xs text-neutral-500 font-mono mt-2 animate-pulse" id="status-text">WAITING FOR INPUT...</p>
</div>
</main>

<footer className="flex-none p-4 md:p-6 max-w-3xl mx-auto w-full z-30">

<div className="absolute bottom-24 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-neutral-700/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<form className="relative flex items-center gap-2 bg-neutral-900/80 backdrop-blur-xl border border-white/10 p-2 rounded-xl shadow-2xl" id="chat-form">
<button className="flex-none w-10 h-10 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all" id="mic-btn" type="button">
<iconify-icon height="20" icon="lucide:mic" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<input autocomplete="off" className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-neutral-500 px-2 font-light" id="user-input" placeholder="Ask Chad Santa for gains or gifts..." type="text"/>
<div className="h-4 w-[1px] bg-neutral-800"></div>
<button className="flex-none px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2 group/send" type="submit">
<span className="text-xs font-semibold tracking-tight">SEND</span>
<iconify-icon className="group-hover/send:-translate-y-0.5 transition-transform" height="16" icon="lucide:arrow-up" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</form>
</div>
<div className="text-center mt-4">
<p className="text-[10px] text-neutral-600 font-medium tracking-wide">POWERED BY ELEVEN LABS • NEURAL AUDIO SYNTHESIS</p>
</div>
</footer>


    </>
  );
}
