import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const micBtn = document.getElementById('mic-btn');
        const micIcon = document.getElementById('mic-icon');
        const inputField = document.getElementById('command-input');
        const sendBtn = document.getElementById('send-btn');
        const inputContainer = document.getElementById('input-container');
        const inputGlow = document.getElementById('input-glow');
        
        const orbCore = document.getElementById('orb-core');
        const ripple1 = document.getElementById('ripple-1');
        const ripple2 = document.getElementById('ripple-2');
        
        const greetingTitle = document.getElementById('greeting-title');
        const greetingDesc = document.getElementById('greeting-desc');
        const statusText = document.getElementById('status-text');
        const statusDot = document.getElementById('status-dot');

        const envToggle = document.getElementById('env-toggle');
        const envDot = document.getElementById('env-toggle-dot');
        const lightsStatus = document.getElementById('lights-status');

        let isListening = false;
        let isEnvDimmed = false;
        let animationFrame;
        let startTime;
        let voiceSpike = 0;

        // Setup Speech Recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition = null;
        
        if (SpeechRecognition) {
            recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;

            recognition.onstart = () => activateVoiceMode();
            
            recognition.onresult = (event) => {
                let finalTranscript = '';
                let interimTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }
                
                inputField.value = finalTranscript || interimTranscript;
                voiceSpike = 1.0; 
                
                if (finalTranscript) {
                    executeCommand(finalTranscript.toLowerCase());
                }
            };
            
            recognition.onerror = (event) => {
                console.error("Speech error:", event.error);
                deactivateVoiceMode();
                // Fallback if mic permission is denied or fails
                if (event.error === 'not-allowed') {
                    activateVoiceMode();
                    simulateOperation();
                }
            };

            recognition.onend = () => {
                if (isListening) {
                    try { recognition.start(); } catch(e) {}
                }
            };
        }

        // Voice Animation and State Management
        function activateVoiceMode() {
            isListening = true;
            startTime = Date.now();
            
            greetingTitle.innerText = "Listening...";
            greetingTitle.classList.replace('text-white', 'text-sky-400');
            greetingDesc.innerText = "Processing acoustic and biometric inputs...";
            inputField.placeholder = "Speak your command...";
            inputField.value = "";
            
            statusText.innerText = "Audio Active";
            statusDot.style.background = "#38bdf8";
            statusDot.style.boxShadow = "0 0 8px #38bdf8";
            
            micIcon.setAttribute('icon', 'solar:microphone-3-bold');
            micBtn.style.color = '#38bdf8';
            micBtn.style.background = 'rgba(56, 189, 248, 0.1)';
            inputContainer.style.borderColor = 'rgba(56, 189, 248, 0.5)';
            inputGlow.className = "absolute -inset-1 bg-gradient-to-r from-sky-500/30 via-purple-500/30 to-sky-500/30 rounded-2xl blur-md opacity-100 transition duration-300";

            ripple1.className = "absolute inset-[-50%] rounded-full border border-sky-500/30";
            ripple2.className = "absolute inset-[-20%] rounded-full border border-purple-500/30";

            animateCrazy();
        }

        function deactivateVoiceMode() {
            isListening = false;
            cancelAnimationFrame(animationFrame);
            if (recognition) {
                try { recognition.stop(); } catch(e) {}
            }
            
            greetingTitle.innerText = "Good evening, Sir.";
            greetingTitle.classList.replace('text-sky-400', 'text-white');
            greetingDesc.innerText = "All systems are operating within normal parameters. How can I assist you tonight?";
            inputField.placeholder = "Type a command or ask a question...";
            
            statusText.innerText = "Online";
            statusDot.style.background = "#10b981";
            statusDot.style.boxShadow = "0 0 8px #10b981";
            
            micIcon.setAttribute('icon', 'solar:microphone-3-linear');
            micBtn.style.color = '';
            micBtn.style.background = '';
            inputContainer.style.borderColor = '';
            inputGlow.className = "absolute -inset-1 bg-gradient-to-r from-zinc-800/30 via-zinc-700/20 to-zinc-800/30 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200";

            orbCore.style = "box-shadow: 0 0 40px rgba(255,255,255,0.15);";
            ripple1.style = "";
            ripple2.style = "animation-delay: 1s;";
            ripple1.className = "absolute inset-[-50%] rounded-full border border-white/5 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]";
            ripple2.className = "absolute inset-[-20%] rounded-full border border-white/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]";
        }

        function animateCrazy() {
            if (!isListening) return;
            const t = Date.now() - startTime;
            
            voiceSpike = Math.max(0, voiceSpike - 0.05);
            
            const baseScale = 1 + Math.abs(Math.sin(t/150)) * 0.2 + Math.abs(Math.cos(t/50)) * 0.1;
            const scale = baseScale + (voiceSpike * 0.6); 
            const rot = (t / 3) % 360;
            
            const r = Math.floor(100 + Math.sin(t/200)*50);
            const g = Math.floor(150 + Math.cos(t/300)*100);
            const b = 255;
            
            orbCore.style.transform = `scale(${scale}) rotate(${rot}deg)`;
            orbCore.style.boxShadow = `0 0 ${40 + scale*50}px rgba(${r},${g},${b},0.8), inset 0 0 ${20*scale}px rgba(255,255,255,0.9)`;
            orbCore.style.background = `conic-gradient(from ${rot*2}deg, #38bdf8, #a855f7, #ffffff, #38bdf8)`;

            const r1Scale = 1 + ((t * 1.5) % 800) / 300 + (voiceSpike * 0.5);
            const r1Opacity = Math.max(0, 1 - ((t * 1.5) % 800) / 800);
            ripple1.style.transform = `scale(${r1Scale}) rotate(${-rot}deg)`;
            ripple1.style.opacity = r1Opacity;

            const r2Scale = 1 + ((t * 2 + 400) % 800) / 300 + (voiceSpike * 0.3);
            const r2Opacity = Math.max(0, 1 - ((t * 2 + 400) % 800) / 800);
            ripple2.style.transform = `scale(${r2Scale}) rotate(${rot*1.5}deg)`;
            ripple2.style.opacity = r2Opacity;
            
            animationFrame = requestAnimationFrame(animateCrazy);
        }

        // Simulating operation if voice isn't supported/allowed
        function simulateOperation() {
            const fakeText = "dim the studio lights";
            let i = 0;
            
            setTimeout(() => {
                const typeInterval = setInterval(() => {
                    inputField.value += fakeText[i];
                    voiceSpike = 0.8; 
                    i++;
                    
                    if (i >= fakeText.length) {
                        clearInterval(typeInterval);
                        setTimeout(() => executeCommand(fakeText), 600);
                        setTimeout(() => deactivateVoiceMode(), 2000);
                    }
                }, 80);
            }, 1000);
        }

        // Logic for specific commands and visual execution
        function executeCommand(text) {
            if (text.trim() === '') return;
            
            // Basic UI reaction
            greetingTitle.innerText = "Executing...";
            greetingDesc.innerText = "Processing request parameters.";
            
            // Spike core system compute
            document.getElementById('compute-bar').classList.replace('w-[24%]', 'w-[89%]');
            document.getElementById('compute-text').innerText = "89%";

            if (text.includes("light") || text.includes("dim")) {
                if (!isEnvDimmed) toggleEnvironment();
            } else if (text.includes("reset") || text.includes("normal")) {
                if (isEnvDimmed) toggleEnvironment();
            }

            setTimeout(() => {
                document.getElementById('compute-bar').classList.replace('w-[89%]', 'w-[28%]');
                document.getElementById('compute-text').innerText = "28%";
                
                if(!isListening) {
                    greetingTitle.innerText = "Good evening, Sir.";
                    greetingDesc.innerText = "Task completed successfully. Any further requests?";
                }
            }, 2000);
        }

        function toggleEnvironment() {
            isEnvDimmed = !isEnvDimmed;
            if (isEnvDimmed) {
                envToggle.classList.replace('bg-white', 'bg-zinc-800');
                envDot.classList.replace('bg-black', 'bg-zinc-400');
                envDot.classList.replace('translate-x-0', '-translate-x-5');
                lightsStatus.innerText = "Studio • Lights 10%";
                lightsStatus.classList.replace('text-zinc-400', 'text-sky-400');
            } else {
                envToggle.classList.replace('bg-zinc-800', 'bg-white');
                envDot.classList.replace('bg-zinc-400', 'bg-black');
                envDot.classList.replace('-translate-x-5', 'translate-x-0');
                lightsStatus.innerText = "Studio • Lights 30%";
                lightsStatus.classList.replace('text-sky-400', 'text-zinc-400');
            }
        }

        // Event Listeners
        micBtn.addEventListener('click', () => {
            if (isListening) {
                deactivateVoiceMode();
            } else {
                if (recognition) {
                    try {
                        recognition.start();
                    } catch(e) {
                        activateVoiceMode();
                        simulateOperation();
                    }
                } else {
                    activateVoiceMode();
                    simulateOperation();
                }
            }
        });

        // Input Field text entry
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                executeCommand(inputField.value.toLowerCase());
                inputField.value = '';
                inputField.blur();
            }
        });

        // Send Button manually clicking
        sendBtn.addEventListener('click', () => {
            executeCommand(inputField.value.toLowerCase());
            inputField.value = '';
        });

        // Manual click on environment toggle
        envToggle.addEventListener('click', toggleEnvironment);

        // Shortcut Hint (Cmd/Ctrl + K to focus input)
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                inputField.focus();
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex items-center justify-between p-6 w-full max-w-6xl mx-auto">
<div className="font-medium text-lg tracking-tighter text-white select-none">JRV</div>
<div className="flex items-center gap-6 text-sm text-zinc-500">
<div className="hidden sm:flex items-center gap-2">
<iconify-icon height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span>Secure Connection</span>
</div>
<div className="w-px h-4 bg-zinc-800 hidden sm:block"></div>
<span className="tracking-widest tabular-nums uppercase text-xs">21:43 PST</span>
<div className="flex items-center gap-2 bg-zinc-900/50 px-2.5 py-1 rounded-full border border-zinc-800/50" id="status-indicator">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 transition-colors duration-300" id="status-dot" style={{boxShadow: '0 0 8px #10b981'}}></div>
<span className="text-xs font-medium text-zinc-300" id="status-text">Online</span>
</div>
</div>
</header>

<main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-4xl mx-auto gap-12 mt-10 md:mt-0">

<div className="flex flex-col items-center gap-8 text-center w-full">

<div className="relative flex items-center justify-center w-24 h-24" id="orb-container">

<div className="absolute inset-[-50%] rounded-full border border-white/5 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" id="ripple-1"></div>
<div className="absolute inset-[-20%] rounded-full border border-white/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" id="ripple-2" style={{animationDelay: '1s'}}></div>

<div className="absolute inset-0 rounded-full border border-zinc-700/50" id="core-ring"></div>

<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-400 to-white relative z-10 transition-colors duration-300" id="orb-core" style={{boxShadow: '0 0 40px rgba(255,255,255,0.15)'}}></div>
</div>
<div className="space-y-3">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white transition-all duration-300" id="greeting-title">Good evening, Sir.</h1>
<p className="text-base text-zinc-500 max-w-md mx-auto transition-all duration-300" id="greeting-desc">All systems are operating within normal parameters. How can I assist you tonight?</p>
</div>
</div>

<div className="w-full relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-zinc-800/30 via-zinc-700/20 to-zinc-800/30 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" id="input-glow"></div>
<div className="relative bg-[#09090b] backdrop-blur-xl border border-zinc-800 rounded-2xl p-2 flex items-center gap-2 transition-all duration-300 focus-within:border-zinc-600 shadow-2xl shadow-black" id="input-container">
<button aria-label="Voice input" className="p-3 text-zinc-500 hover:text-white transition-all duration-300 rounded-xl hover:bg-zinc-900 flex items-center justify-center group/mic" id="mic-btn">
<iconify-icon className="group-hover/mic:scale-110 transition-transform" height="22" icon="solar:microphone-3-linear" id="mic-icon" width="22"></iconify-icon>
</button>
<input autocomplete="off" autofocus="" className="flex-1 bg-transparent border-none outline-none text-zinc-200 text-base placeholder:text-zinc-600 px-2 font-medium transition-all duration-300" id="command-input" placeholder="Type a command or ask a question..." type="text"/>
<div className="hidden sm:flex items-center gap-2 px-3 text-xs text-zinc-600 font-medium tracking-wide" id="shortcut-hint">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900/50">⌘</span>
<span>K</span>
</div>
<button aria-label="Send command" className="p-3 bg-white text-black rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center shadow-sm" id="send-btn">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl">

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-5 flex flex-col justify-between gap-6 hover:bg-zinc-900/50 transition-colors cursor-pointer group">
<div className="flex items-center justify-between text-zinc-500 text-xs">
<span className="flex items-center gap-2 uppercase tracking-widest font-medium">
<iconify-icon height="16" icon="solar:calendar-mark-linear" width="16"></iconify-icon>
                        Schedule
                    </span>
<span className="px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-400 group-hover:bg-zinc-700/50 transition-colors">Next</span>
</div>
<div>
<h3 className="text-white text-lg font-medium tracking-tight leading-snug">Q3 Architecture Review</h3>
<div className="flex items-center gap-2 mt-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
<p className="text-sm text-zinc-400">Tomorrow • 10:00 AM</p>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-5 flex flex-col justify-between gap-6 hover:bg-zinc-900/50 transition-colors">
<div className="flex items-center justify-between text-zinc-500 text-xs">
<span className="flex items-center gap-2 uppercase tracking-widest font-medium">
<iconify-icon height="16" icon="solar:home-2-linear" width="16"></iconify-icon>
                        Environment
                    </span>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-white text-3xl font-medium tracking-tight">71°</h3>
<p className="text-sm text-zinc-400 mt-1 transition-all duration-500" id="lights-status">Studio • Lights 30%</p>
</div>

<div aria-label="Toggle environment auto mode" className="w-10 h-5 bg-white rounded-full relative cursor-pointer border border-transparent shadow-sm flex items-center justify-end px-0.5 transition-colors duration-500" id="env-toggle">
<div className="w-4 h-4 bg-black rounded-full shadow-sm transition-transform duration-500 transform translate-x-0" id="env-toggle-dot"></div>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-5 flex flex-col justify-between gap-6 hover:bg-zinc-900/50 transition-colors">
<div className="flex items-center justify-between text-zinc-500 text-xs">
<span className="flex items-center gap-2 uppercase tracking-widest font-medium">
<iconify-icon height="16" icon="solar:cpu-linear" width="16"></iconify-icon>
                        Core Status
                    </span>
<iconify-icon className="cursor-pointer hover:text-white transition-colors" height="16" icon="solar:menu-dots-linear" width="16"></iconify-icon>
</div>
<div className="space-y-3">
<div className="space-y-1.5">
<div className="flex justify-between text-xs font-medium">
<span className="text-zinc-500">Neural Compute</span>
<span className="text-white transition-all duration-300" id="compute-text">24%</span>
</div>

<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[24%] h-full bg-zinc-300 rounded-full transition-all duration-700" id="compute-bar"></div>
</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-xs font-medium">
<span className="text-zinc-500">Memory Allocation</span>
<span className="text-white">4.1 TB</span>
</div>

<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[68%] h-full bg-zinc-600 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full p-6 text-center text-xs font-medium text-zinc-600 tracking-wide uppercase mt-auto select-none">
        v.4.2.0 • Build 8921 • Local Instance
    </footer>


    </>
  );
}
