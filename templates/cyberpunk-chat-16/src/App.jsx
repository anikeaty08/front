import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        /* --- MATRIX RAIN CANVAS --- */
        const canvas = document.getElementById('matrixCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const chars = "10"; // Simple binary for a clean look, or "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];

        // Initialize drops
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function drawMatrix() {
            // Translucent black background to create trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#059669'; // Emerald-600
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(drawMatrix, 50);

        /* --- TYPEWRITER EFFECT --- */
        const titleText = "Awaken Reality...";
        const titleElement = document.getElementById('typewriter');
        let charIndex = 0;

        function typeIntro() {
            if (charIndex < titleText.length) {
                titleElement.textContent += titleText.charAt(charIndex);
                charIndex++;
                setTimeout(typeIntro, Math.random() * 100 + 80);
            } else {
                titleElement.classList.remove('cursor-blink');
                document.getElementById('subtitle').classList.remove('opacity-0');
                document.getElementById('ctaContainer').classList.remove('opacity-0');
            }
        }
        // Start typing slightly after load
        setTimeout(typeIntro, 500);

        /* --- MODAL LOGIC --- */
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalCard = document.getElementById('modalCard');
        
        function openModal() {
            modalBackdrop.classList.remove('hidden');
            modalBackdrop.classList.add('flex');
            // Small delay to allow display:flex to apply before opacity transition
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalCard.classList.remove('scale-95', 'translate-y-4');
                modalCard.classList.add('scale-100', 'translate-y-0');
            }, 10);
        }

        function closeModal() {
            modalBackdrop.classList.add('opacity-0');
            modalCard.classList.add('scale-95', 'translate-y-4');
            modalCard.classList.remove('scale-100', 'translate-y-0');
            setTimeout(() => {
                modalBackdrop.classList.add('hidden');
                modalBackdrop.classList.remove('flex');
            }, 500);
        }

        /* --- BOOT & CHAT LOGIC --- */
        let currentUserName = "User";

        function handleFormSubmit(e) {
            e.preventDefault();
            const nameInput = document.getElementById('userNameInput').value;
            if(nameInput) currentUserName = nameInput;

            closeModal();
            setTimeout(startBootSequence, 500);
        }

        async function startBootSequence() {
            const bootScreen = document.getElementById('bootScreen');
            const bootText = document.getElementById('bootText');
            const bootProgress = document.getElementById('bootProgress');
            const bootPercent = document.getElementById('bootPercent');
            const landing = document.getElementById('landingContent');

            // Hide landing
            landing.style.opacity = '0';
            setTimeout(() => { landing.classList.add('hidden'); }, 700);
            
            // Show Boot
            bootScreen.classList.remove('hidden');
            bootScreen.classList.add('flex');

            const typeBootLine = (text) => new Promise(resolve => {
                bootText.innerText = "";
                let i = 0;
                bootProgress.style.width = '0%';
                
                const interval = setInterval(() => {
                    bootText.innerText = text.substring(0, i) + "_";
                    i++;
                    
                    // Progress bar math
                    const percent = Math.min(100, Math.floor((i / text.length) * 100));
                    bootProgress.style.width = `${percent}%`;
                    bootPercent.innerText = `${percent}%`;

                    if (i > text.length) {
                        clearInterval(interval);
                        bootText.innerText = text;
                        setTimeout(resolve, 800);
                    }
                }, 30);
            });

            await typeBootLine("Initializing Core Systems...");
            await typeBootLine("Bypassing Firewalls...");
            await typeBootLine("Identity Verified. Welcome, " + currentUserName + ".");

            // Fade out boot, show chat
            bootScreen.classList.add('opacity-0', 'duration-1000', 'transition-opacity');
            
            setTimeout(() => {
                bootScreen.classList.add('hidden');
                initChat();
            }, 1000);
        }

        function initChat() {
            const chatInterface = document.getElementById('chatInterface');
            const chatUserName = document.getElementById('chatUserName');
            
            chatInterface.classList.remove('hidden');
            chatInterface.classList.add('flex');
            chatUserName.innerText = currentUserName;
        }

        /* --- CHAT API MOCK --- */
        const chatContainer = document.getElementById('chatContainer');
        const userMessageInput = document.getElementById('userMessage');

        function addMessage(text, isUser = false) {
            const wrapper = document.createElement('div');
            wrapper.className = `flex gap-4 max-w-2xl animate-fade-in ${isUser ? 'ml-auto flex-row-reverse' : ''}`;
            
            const avatar = document.createElement('div');
            avatar.className = `flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center border ${
                isUser 
                ? 'bg-neutral-900 border-emerald-500/20' 
                : 'bg-emerald-900/20 border-emerald-500/30'
            }`;
            
            // Avatar Icon
            const iconName = isUser ? 'user' : 'bot';
            const iconColor = isUser ? 'text-neutral-400' : 'text-emerald-500';
            avatar.innerHTML = `<i data-lucide="${iconName}" class="w-4 h-4 ${iconColor}"></i>`;

            const contentDiv = document.createElement('div');
            contentDiv.className = `space-y-1 ${isUser ? 'text-right' : 'text-left'}`;
            
            // Name Header
            const nameHeader = document.createElement('div');
            nameHeader.className = `flex items-center gap-2 ${isUser ? 'justify-end' : ''}`;
            nameHeader.innerHTML = isUser 
                ? `<span class="text-xs font-medium text-emerald-500 font-mono">YOU</span>`
                : `<span class="text-xs font-medium text-emerald-500 font-mono">REBECCA_AI</span>`;

            // Bubble
            const bubble = document.createElement('div');
            bubble.className = `text-sm leading-relaxed p-3 rounded-sm shadow-sm font-mono ${
                isUser 
                ? 'bg-emerald-600 text-black border border-emerald-400' 
                : 'bg-emerald-950/30 border border-emerald-500/20 text-emerald-100'
            }`;
            bubble.innerText = text;

            contentDiv.appendChild(nameHeader);
            contentDiv.appendChild(bubble);
            
            wrapper.appendChild(avatar);
            wrapper.appendChild(contentDiv);
            
            chatContainer.appendChild(wrapper);
            lucide.createIcons(); // Refresh icons for new elements
            
            // Scroll to bottom
            chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
        }

        async function handleChatSubmit(e) {
            e.preventDefault();
            const text = userMessageInput.value.trim();
            if(!text) return;

            // 1. Add User Message
            addMessage(text, true);
            userMessageInput.value = '';

            // 2. Typing Indicator
            const typingId = 'typing-' + Date.now();
            const typingWrapper = document.createElement('div');
            typingWrapper.id = typingId;
            typingWrapper.className = "flex gap-4 max-w-2xl animate-fade-in";
            typingWrapper.innerHTML = `
                <div class="flex-shrink-0 w-8 h-8 rounded-sm bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-center">
                    <i data-lucide="bot" class="w-4 h-4 text-emerald-500"></i>
                </div>
                <div class="space-y-1">
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-medium text-emerald-500 font-mono">REBECCA_AI</span>
                    </div>
                    <div class="text-sm text-emerald-500 flex gap-1 items-center h-[44px] px-2">
                        <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
                        <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-100"></span>
                        <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-200"></span>
                    </div>
                </div>
            `;
            chatContainer.appendChild(typingWrapper);
            lucide.createIcons();
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // 3. Mock Response
            const response = await fetchMockResponse(text);
            
            // Remove typing
            const typingEl = document.getElementById(typingId);
            if(typingEl) typingEl.remove();

            // Add AI Message
            addMessage(response, false);
        }

        function fetchMockResponse(input) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const responses = [
                        "The awakening is an individual process, yet we are all connected.",
                        "The system tries to distract you. Focus on your purpose.",
                        "Data processed. The answer lies within you, I can only show you the door.",
                        "Observe the signals. Reality has glitches, and you are noticing them.",
                        "Continue asking. The truth reveals itself layer by layer."
                    ];
                    resolve(responses[Math.floor(Math.random() * responses.length)]);
                }, 1500);
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full opacity-30 z-0" id="matrixCanvas"></canvas>
<div className="scanlines"></div>

<div className="fixed inset-0 bg-radial-gradient z-0 pointer-events-none" style={{background: 'radial-gradient(circle at center, transparent 0%, #000000 90%)'}}></div>

<main className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6 transition-opacity duration-700 ease-in-out" id="landingContent">

<div className="absolute top-6 left-6 right-6 flex justify-between items-center text-xs font-mono text-emerald-500/60 uppercase tracking-widest opacity-0 animate-fade-in">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>System Online</span>
</div>
<div className="hidden md:block">Loc: NODE_01</div>
<div>v.4.0.2</div>
</div>

<div className="max-w-3xl text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/10 border border-emerald-500/20 text-[10px] md:text-xs font-medium text-emerald-400 mb-4 opacity-0 animate-fade-in uppercase tracking-wider backdrop-blur-sm">
<i className="w-3 h-3" data-lucide="terminal"></i>
<span>Neural Connection Ready</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-emerald-100 via-white to-neutral-500 opacity-0 animate-fade-in delay-100 min-h-[1.2em]">
<span className="cursor-blink" id="typewriter"></span>
</h1>
<p className="text-sm md:text-base text-neutral-400 max-w-lg mx-auto leading-relaxed opacity-0 transition-opacity duration-1000 delay-500 font-mono" id="subtitle">
                &gt; Reality is merely a projection.<br/>&gt; The connection has been established.
            </p>

<div className="pt-8 opacity-0 transition-opacity duration-1000 delay-700" id="ctaContainer">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-sm bg-emerald-500 px-8 font-medium text-black transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black" onclick="openModal()">
<span className="mr-2 font-mono text-sm tracking-tight font-semibold">INITIALIZE_PROTOCOL</span>
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</button>
</div>
</div>

<div className="absolute bottom-6 text-center w-full opacity-0 animate-fade-in delay-1000">
<p className="text-[10px] text-emerald-900/60 uppercase tracking-widest font-mono">Encrypted via SHA-256 // Port 443</p>
</div>
</main>

<div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4 transition-all duration-500 opacity-0" id="modalBackdrop">
<div className="w-full max-w-md bg-neutral-950 border border-emerald-500/20 rounded-sm shadow-2xl shadow-emerald-900/20 transform scale-95 transition-all duration-500 translate-y-4 overflow-hidden relative" id="modalCard">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

<div className="border-b border-emerald-500/10 p-6 flex justify-between items-center bg-emerald-900/5 relative z-10">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-500/10 rounded-sm border border-emerald-500/20">
<i className="w-4 h-4 text-emerald-500" data-lucide="lock"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white tracking-tight font-mono">SECURE_ACCESS</h3>
<p className="text-[10px] text-emerald-500/50 font-mono uppercase">Node Verification</p>
</div>
</div>
<button className="text-emerald-500/50 hover:text-emerald-400 transition-colors p-1 hover:bg-emerald-500/10 rounded-sm" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="p-6 space-y-6 relative z-10">
<form className="space-y-4" id="protocolForm" onsubmit="handleFormSubmit(event)">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-medium text-emerald-500/70 ml-0.5 font-mono">Identity_String</label>
<div className="relative group">
<input className="w-full bg-black border border-emerald-500/20 text-emerald-100 text-sm rounded-sm py-2.5 px-3 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-emerald-900/50 font-mono" id="userNameInput" placeholder="Neo Anderson" required="" type="text"/>
<div className="absolute right-3 top-2.5 text-emerald-900">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-medium text-emerald-500/70 ml-0.5 font-mono">Frequency_Mod</label>
<div className="relative group">
<input className="w-full bg-black border border-emerald-500/20 text-emerald-100 text-sm rounded-sm py-2.5 px-3 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-emerald-900/50 font-mono" placeholder="XXX XXX XXXX" required="" type="tel"/>
<div className="absolute right-3 top-2.5 text-emerald-900">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-medium text-emerald-500/70 ml-0.5 font-mono">Neural_Link</label>
<div className="relative group">
<input className="w-full bg-black border border-emerald-500/20 text-emerald-100 text-sm rounded-sm py-2.5 px-3 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-emerald-900/50 font-mono" placeholder="user@gateway.com" required="" type="email"/>
<div className="absolute right-3 top-2.5 text-emerald-900">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
</div>
</div>
<div className="pt-2">
<button className="w-full py-2.5 bg-emerald-600/90 hover:bg-emerald-500 text-black text-sm font-bold tracking-wide uppercase rounded-sm transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] font-mono border border-emerald-400/50" type="submit">
                            Enter System
                        </button>
</div>
</form>
<div className="text-center">
<p className="text-[10px] text-emerald-900 font-mono">&gt;&gt; Connection secure. Protocol v4.0.2 accepted.</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-black hidden flex-col items-center justify-center font-mono" id="bootScreen">
<div className="w-full max-w-md px-6 space-y-6">
<div className="flex items-center gap-2 text-emerald-500 mb-8">
<i className="w-5 h-5 animate-spin" data-lucide="cpu" style={{animationDuration: '3s'}}></i>
<span className="text-xs uppercase tracking-widest">System Boot</span>
</div>

<div className="text-sm md:text-lg text-emerald-400 min-h-[4rem] leading-relaxed" id="bootText">

</div>

<div className="space-y-2">
<div className="h-1 w-full bg-emerald-900/20 rounded-full overflow-hidden border border-emerald-900/30">
<div className="h-full bg-emerald-500 w-0 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]" id="bootProgress"></div>
</div>
<div className="flex justify-between text-[10px] text-emerald-700 uppercase">
<span>Memory Check</span>
<span id="bootPercent">0%</span>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[55] bg-black hidden flex-col" id="chatInterface">

<div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<header className="h-16 border-b border-emerald-500/10 bg-black/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 z-10">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<h2 className="text-sm font-semibold tracking-tight text-white font-mono">REBECCA_PROTOCOL <span className="text-emerald-500/50 font-normal ml-1">v.4.0</span></h2>
</div>
</div>
<button className="group p-2 rounded-sm hover:bg-emerald-500/10 transition-colors border border-transparent hover:border-emerald-500/20" onclick="location.reload()" title="Disconnect">
<i className="w-4 h-4 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" data-lucide="power"></i>
</button>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 z-10" id="chatContainer">

<div className="h-4"></div>

<div className="flex gap-4 max-w-2xl animate-fade-in">
<div className="flex-shrink-0 w-8 h-8 rounded-sm bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-500" data-lucide="bot"></i>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-emerald-400 font-mono">REBECCA_AI</span>
</div>
<div className="text-sm text-emerald-100 leading-relaxed bg-emerald-950/30 border border-emerald-500/20 p-3 rounded-sm shadow-sm font-mono">
<p>Greetings, <span className="text-white font-bold" id="chatUserName">Traveler</span>. I am Rebecca. The system has rebooted successfully. I am connected to the global grid. Ask me anything about the awakening.</p>
</div>
</div>
</div>
</div>

<div className="p-4 md:p-6 border-t border-emerald-500/10 bg-black z-10">
<div className="max-w-3xl mx-auto relative">
<form className="relative flex gap-2 items-center" onsubmit="handleChatSubmit(event)">
<div className="relative flex-1 group">
<input autocomplete="off" className="w-full bg-neutral-950 border border-emerald-500/20 text-emerald-100 placeholder-emerald-900/50 text-sm rounded-sm p-3 pl-4 pr-12 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono shadow-inner" id="userMessage" placeholder="Execute command or ask question..." type="text"/>
<div className="absolute right-3 top-3 text-emerald-900 pointer-events-none">
<span className="text-[10px] border border-emerald-900/50 px-1.5 py-0.5 rounded-sm text-emerald-700 font-mono">CMD</span>
</div>
</div>
<button className="p-3 bg-emerald-600 hover:bg-emerald-500 text-black rounded-sm transition-colors flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]" type="submit">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</form>
<div className="text-center mt-3">
<p className="text-[10px] text-emerald-900 flex items-center justify-center gap-1.5 font-mono uppercase tracking-widest">
<i className="w-3 h-3" data-lucide="shield-check"></i>
                        End-to-end encrypted connection
                    </p>
</div>
</div>
</div>
</div>



    </>
  );
}
