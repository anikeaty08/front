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
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'blob': 'blob 10s infinite',
'scan': 'scan 8s linear infinite',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up-delayed': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
}
}
}
}
}



        // Mouse Tracking
        window.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                const x = e.clientX;
                const y = e.clientY;
                document.body.style.setProperty('--mouse-x', `${x}px`);
                document.body.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Theme Toggle
        const themeBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;

        function initTheme() {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
        }
        initTheme();

        themeBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                html.classList.add('dark');
                localStorage.theme = 'dark';
            }
            // Redraw lasers on theme change for color update
            requestAnimationFrame(() => {}); 
        });

        // Laser Beams Canvas
        const canvas = document.getElementById('laser-canvas');
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const laserCount = 15;
        const lasers = [];

        function initLasers() {
            lasers.length = 0;
            for(let i=0; i<laserCount; i++) {
                lasers.push({ x: Math.random() * width, y: Math.random() * height, speed: Math.random() * 15 + 10, length: Math.random() * 200 + 100 });
            }
        }
        initLasers();

        function drawLasers() {
            ctx.clearRect(0, 0, width, height);
            
            // Determine laser color based on theme (subtle blue vs bright blue)
            const isDark = html.classList.contains('dark');
            const color = isDark ? '59, 130, 246' : '37, 99, 235'; // RGB values for Blue-500/600
            
            lasers.forEach(laser => {
                // Move laser down
                laser.y += laser.speed * 0.5;
                
                // Reset if off screen
                if (laser.y > height + laser.length) {
                    laser.y = -laser.length;
                    laser.x = Math.random() * width;
                    laser.speed = Math.random() * 15 + 10;
                }

                // Draw Laser with gradient tail
                const gradient = ctx.createLinearGradient(laser.x, laser.y, laser.x, laser.y - laser.length);
                gradient.addColorStop(0, `rgba(${color}, 0)`);
                gradient.addColorStop(0.5, `rgba(${color}, 0.15)`); // Peak opacity
                gradient.addColorStop(1, `rgba(${color}, 0)`);

                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5;
                ctx.moveTo(laser.x, laser.y);
                ctx.lineTo(laser.x, laser.y - laser.length);
                ctx.stroke();
            });
            
            requestAnimationFrame(drawLasers);
        }

        // Start Animation Loop
        drawLasers();

        // Handle Resize
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initLasers();
        });

        // Typewriter Effect Logic
        const words = ["capture leads.", "automate sales.", "scale revenue.", "save time."];
        let i = 0;
        let timer;
        const typeWriterElement = document.getElementById('typewriter-text');
        
        function typingEffect() {
            if (!typeWriterElement) return;
            const word = words[i].split("");
            
            const loopTyping = function() {
                if (word.length > 0) {
                    typeWriterElement.innerHTML += word.shift();
                } else {
                    // Word finished, pause then delete
                    setTimeout(deletingEffect, 2000);
                    return false;
                }
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        }

        function deletingEffect() {
            const word = words[i].split("");
            
            const loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    typeWriterElement.innerHTML = word.join("");
                } else {
                    // Word deleted, move to next
                    if (words.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    }
                    typingEffect();
                    return false;
                }
                timer = setTimeout(loopDeleting, 50);
            };
            loopDeleting();
        }

        // Initialize Typewriter
        typingEffect();
        
        // Scroll Effect for "Sell" Emphasis
        const sellWord = document.getElementById('word-sell');
        window.addEventListener('scroll', () => {
            if (sellWord) {
                if(window.scrollY > 50) {
                    sellWord.classList.add('emphasized');
                } else {
                    sellWord.classList.remove('emphasized');
                }
            }
        });

        // Modal Form Logic
        let currentStep = 1;
        const totalSteps = 5;
        const modal = document.getElementById('audit-modal');
        
        function openAuditModal() {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            updateModalUI(); // Ensure UI is reset/current
        }

        function closeAuditModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        function updateModalUI() {
            // Update Progress Bar
            const progress = (currentStep / totalSteps) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;
            
            // Handle Success State (Step > Total)
            if (currentStep > totalSteps) {
                 document.getElementById('step-success').classList.remove('hidden');
                 document.getElementById('step-success').classList.add('flex');
                 document.getElementById('modal-footer').classList.add('hidden');
                 document.getElementById('step-indicator').innerText = 'Complete';
                 document.getElementById('step-title').innerText = 'Submission Received';
             document.getElementById('step-desc').classList.add('hidden');
             return;
        }

        // Standard Logic for Active Steps
        document.getElementById('step-indicator').innerText = `Step ${currentStep} of ${totalSteps}`;
        document.getElementById('step-desc').classList.remove('hidden');
        
        // Dynamic Titles & Descriptions
        const titles = [
            "Let’s start with the basics",
            "Revenue & Targets",
            "Positioning & Ideal Client",
            "Current Systems",
            "Digital Assets & Goals"
        ];
        const descs = [
            "This helps us understand your business at a high level.",
            "We need to know where you are and where you want to go.",
            "Who do you serve best? Who do you want more of?",
            "What tools (or lack thereof) are you using right now?",
            "Final checks on your current web presence."
        ];
        
        if(titles[currentStep-1]) document.getElementById('step-title').innerText = titles[currentStep-1];
        if(descs[currentStep-1]) document.getElementById('step-desc').innerText = descs[currentStep-1];

        // Hide all steps, Show current
        document.querySelectorAll('.step-content').forEach(el => {
            if(!el.id.includes('success')) {
                el.classList.add('hidden');
                el.classList.remove('animate-slide-up');
            }
        });
        
        const currentEl = document.getElementById(`step-${currentStep}`);
        if(currentEl) {
            currentEl.classList.remove('hidden');
            currentEl.classList.add('animate-slide-up');
        }

        // Button States
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        // Back Button Visibility
        if (currentStep === 1) {
            prevBtn.classList.add('opacity-0', 'pointer-events-none');
        } else {
            prevBtn.classList.remove('opacity-0', 'pointer-events-none');
        }

        // Next/Submit Button Styling
        if (currentStep === totalSteps) {
            nextBtn.innerHTML = 'Submit Audit <iconify-icon icon="lucide:check" width="14"></iconify-icon>';
            nextBtn.classList.remove('bg-blue-600', 'hover:bg-blue-500', 'shadow-blue-500/20');
            nextBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-500', 'shadow-emerald-500/20');
        } else {
            nextBtn.innerHTML = 'Next Step <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>';
            nextBtn.classList.add('bg-blue-600', 'hover:bg-blue-500', 'shadow-blue-500/20');
            nextBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-500', 'shadow-emerald-500/20');
        }
    }

    function nextStep() {
        // Simple input validation (visual only for demo)
        const currentEl = document.getElementById(`step-${currentStep}`);
        const inputs = currentEl.querySelectorAll('input[required], textarea[required]');
        let valid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add('ring-2', 'ring-red-500', 'ring-offset-1');
                setTimeout(() => input.classList.remove('ring-2', 'ring-red-500', 'ring-offset-1'), 2000);
            }
        });

        // Proceed if valid (or strictly for demo purposes)
        if (valid && currentStep <= totalSteps) {
            currentStep++;
            updateModalUI();
        }
    }

    function prevStep() {
        if (currentStep > 1) {
            currentStep--;
            updateModalUI();
        }
    }

    // Initialize Modal State
    updateModalUI();

    
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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-blue-50/30 dark:bg-[#020204] transition-colors duration-500 overflow-hidden">

<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] rounded-[100%] bg-radial-gradient from-blue-200/40 via-blue-100/10 to-transparent dark:from-blue-600/20 dark:via-blue-900/10 dark:to-transparent blur-3xl pointer-events-none mix-blend-normal dark:mix-blend-screen">
<div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/50 via-transparent to-transparent dark:from-blue-600/15 dark:via-transparent dark:to-transparent"></div>
</div>

<div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[900px] rounded-full bg-cyan-300/20 dark:bg-blue-800/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
<div className="absolute top-[40%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-300/20 dark:bg-indigo-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.15),rgba(0,0,0,0))]"></div>
<div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[linear-gradient(to_top,rgba(255,255,255,0.8),transparent)] dark:bg-[linear-gradient(to_top,rgba(2,2,4,0.8),transparent)]"></div>

<canvas id="laser-canvas"></canvas>

<div className="ambient-glow">
<div className="glow-blob bg-blue-400/30 dark:bg-blue-500/20 w-[600px] h-[600px] top-[-20%] left-[-10%] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
<div className="glow-blob bg-purple-300/30 dark:bg-indigo-500/20 w-[500px] h-[500px] top-[40%] right-[-10%] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{animationDelay: '2s'}}></div>
<div className="glow-blob bg-cyan-300/30 dark:bg-cyan-600/20 w-[400px] h-[400px] bottom-[-10%] left-[20%] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{animationDelay: '4s'}}></div>
</div>

<div className="spotlight-overlay"></div>

<div className="tech-grid bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-blue-500/20"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-white/70 dark:bg-[#020204]/70 backdrop-blur-xl border-slate-200 dark:border-white/5 transition-all duration-300 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#020204]/60">
<a className="flex items-center gap-2 cursor-pointer group" href="#" onclick="window.scrollTo(0,0); return false;">
<div className="relative flex items-center justify-center w-9 h-9 transition-transform group-active:scale-95 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-500/20 dark:to-emerald-500/20 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
<iconify-icon className="text-blue-600 dark:text-blue-400" icon="lucide:layers" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm tracking-tight font-bold text-slate-900 dark:text-white leading-none">SORA</span>
<span className="text-[9px] tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono mt-0.5">Business Solutions</span>
</div>
</a>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-slate-100/50 dark:bg-white/5 border-slate-200 dark:border-white/5">
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#home">Home</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#services">Systems</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#app">Sora App</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#method">Method</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">

<button aria-label="Toggle Theme" className="group theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0c] text-slate-600 dark:text-slate-400 hover:border-blue-500/50 hover:text-blue-500 transition-all shadow-sm dark:shadow-none" id="theme-toggle">
<iconify-icon className="absolute transition-transform duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 dark:opacity-0" icon="lucide:moon" id="theme-icon-moon" width="16"></iconify-icon>
<iconify-icon className="absolute transition-transform duration-500 rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" icon="lucide:sun" id="theme-icon-sun" width="16"></iconify-icon>
</button>
<button className="group relative text-xs font-semibold bg-white dark:bg-[#0a0a0c] border px-5 py-2 rounded-md transition-all overflow-hidden hover:border-blue-500/50 shadow-sm dark:shadow-[0_0_0_1px_rgba(0,0,0,0)] dark:hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2)] text-slate-900 dark:text-white border-slate-200 dark:border-white/10 active:scale-95" onclick="openAuditModal()">
<span className="btn-content-slide">
<span className="btn-text-original">Free Growth Audit</span>
<span className="btn-text-hover text-blue-600 dark:text-blue-300">Book Audit →</span>
</span>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden z-10 w-full pt-32 pb-20 relative items-center" id="home">

<div className="z-20 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 dark:bg-blue-500/5 text-[11px] font-medium mb-6 animate-fade-in shadow-[0_0_20px_rgba(59,130,246,0.15)] text-blue-700 dark:text-blue-300 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span>Sora Business Solutions</span>
</div>
<h1 className="flex flex-col items-center text-center z-20 mt-2 mb-10">

<span className="block text-5xl md:text-8xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[0.95] animate-slide-up bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-white dark:to-white/80 drop-shadow-sm pb-2 md:pb-3">
                    Automate. <span className="sell-word text-slate-900 dark:text-white" id="word-sell">Sell</span>. Scale.
                </span>

<span className="block h-[1.1em] text-4xl md:text-7xl font-serif italic font-light text-slate-500 dark:text-slate-400/90 tracking-tight mt-1 md:-mt-2 opacity-100 min-h-[1.1em]">
<span id="typewriter-text"></span><span className="cursor-blink inline-block w-[2px] md:w-[3px] h-[0.85em] bg-blue-500/80 dark:bg-blue-400/80 ml-1 align-baseline rounded-full relative top-[2px]" id="cursor"></span>
</span>
</h1>
<p className="leading-relaxed text-base max-w-2xl mx-auto mb-10 font-light text-slate-600 dark:text-slate-400 relative z-20 animate-slide-up-delayed opacity-0" style={{animationDelay: '2.2s'}}>
                Sora builds the <span className="text-slate-900 dark:text-white font-medium">AI infrastructure</span> that captures, qualifies, and converts leads automatically. Stop chasing work and start growing your business.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-5 relative z-20 animate-slide-up-delayed opacity-0" style={{animationDelay: '2.3s'}}>

<div className="btn-glow-border group cursor-pointer w-full md:w-auto shadow-lg shadow-blue-500/10 dark:shadow-none">
<button className="relative z-10 w-full md:w-auto block px-8 py-3.5 bg-slate-900 dark:bg-[#0a0a0c] text-sm font-semibold rounded-[5px] transition-all hover:bg-slate-800 dark:hover:bg-[#121215] active:bg-black dark:active:bg-[#16161a] text-white" onclick="openAuditModal()">
<span className="btn-content-slide">
<span className="btn-text-original">Book Free AI Audit</span>
<span className="btn-text-hover text-blue-300">Start Scaling Now</span>
</span>
</button>
</div>

<button className="group flex transition-all md:w-auto text-sm font-medium bg-white/80 dark:bg-[#0a0a0b] w-full border border-slate-200 dark:border-transparent rounded-md pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center hover:text-slate-900 dark:hover:text-white text-slate-500 dark:text-slate-400 active:scale-95 shadow-sm dark:shadow-none backdrop-blur-sm" onclick="document.getElementById('app').scrollIntoView({behavior: 'smooth'})">
<iconify-icon className="text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" icon="lucide:layout-grid" width="16"></iconify-icon>
<span className="border-b border-transparent group-hover:border-slate-500 transition-all">See the Sora System</span>
</button>
</div>
</div>

<div className="dashboard-container w-full max-w-6xl z-20 mx-auto px-4 mt-16 relative animate-slide-up-delayed opacity-0" style={{animationDelay: '0.5s'}}>
<div className="dashboard-ui relative w-full rounded-xl border bg-white dark:bg-[#0a0a0c] overflow-hidden border-slate-200 dark:border-white/10">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full animate-scan pointer-events-none z-30"></div>

<div className="h-10 border-b bg-slate-50 dark:bg-white/[0.02] flex items-center px-4 justify-between select-none border-slate-200 dark:border-white/5">
<div className="flex items-center gap-3">
<div className="flex gap-1.5 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-px mx-1 bg-slate-300 dark:bg-white/10"></div>
<div className="flex items-center gap-2 text-[10px] px-2 py-0.5 rounded border bg-white dark:bg-black/40 border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400">
<iconify-icon icon="lucide:command" width="10"></iconify-icon>
<span className="font-mono">sora-operating-system</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-6">
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            LIVE SALES FEED
                        </div>
</div>
</div>

<div className="flex h-[450px]">

<div className="w-14 md:w-56 border-r bg-slate-50/50 dark:bg-white/[0.01] flex flex-col justify-between py-4 border-slate-200 dark:border-white/5">
<div className="space-y-1 px-2">
<div className="flex items-center gap-3 px-3 py-2 rounded-md border text-xs cursor-pointer bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-300">
<iconify-icon icon="lucide:layout-dashboard" width="14"></iconify-icon>
<span className="hidden md:inline font-medium">Command Center</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-all text-xs cursor-pointer hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5">
<iconify-icon icon="lucide:inbox" width="14"></iconify-icon>
<span className="hidden md:inline">Unified Inbox</span>
<span className="hidden md:flex ml-auto w-5 h-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-mono">4</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-all text-xs cursor-pointer hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5">
<iconify-icon icon="lucide:calendar-check" width="14"></iconify-icon>
<span className="hidden md:inline">Jobs Booked</span>
</div>
</div>
<div className="px-4 hidden md:block">
<div className="text-[10px] uppercase tracking-widest mb-2 font-semibold text-slate-600">Monthly Revenue</div>
<div className="w-full h-1 rounded-full overflow-hidden mb-1 bg-slate-200 dark:bg-white/5">
<div className="bg-blue-500 w-[75%] h-full rounded-full shadow-[0_0_10px_#3b82f6]"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500">
<span>Target: $50k</span>
<span className="text-slate-700 dark:text-white">$37.5k</span>
</div>
</div>
</div>

<div className="flex-1 p-6 overflow-hidden flex flex-col gap-6">

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-lg border bg-white dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-transparent border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Leads Captured</div>
<div className="text-xl font-medium font-mono text-slate-900 dark:text-white">128</div>
<div className="text-[10px] mt-1 flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
<iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon> +24 this week
                                </div>
</div>
<div className="p-4 rounded-lg border bg-white dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-transparent border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Jobs Quoted</div>
<div className="text-xl font-medium font-mono text-slate-900 dark:text-white">$84.2k</div>
<div className="text-[10px] mt-1 flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
<iconify-icon icon="lucide:zap" width="10"></iconify-icon> Auto-Quoted
                                </div>
</div>
<div className="p-4 rounded-lg border bg-white dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-transparent border-slate-100 dark:border-white/5 shadow-sm dark:shadow-none">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Response Time</div>
<div className="text-xl font-medium font-mono text-slate-900 dark:text-white">0:12s</div>
<div className="text-[10px] text-slate-500 mt-1">Instant Response</div>
</div>
</div>

<div className="flex-1 rounded-lg border bg-slate-50 dark:bg-[#050505] p-4 relative overflow-hidden flex items-center justify-center border-slate-200 dark:border-white/5 transition-colors duration-300">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, var(--dot-color, #cbd5e1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<style>
                                html.dark .absolute[style*="background-image"] { --dot-color: #333; }
                            </style>

<div className="absolute left-[20%] top-[40%] bg-white dark:bg-[#1c1c1f] border border-slate-200 dark:border-white/10 rounded-lg p-3 shadow-lg dark:shadow-xl z-10 w-32 transition-colors duration-300">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="lucide:phone-incoming" width="16"></iconify-icon>
<span className="text-[10px] text-slate-900 dark:text-white font-medium">Missed Call</span>
</div>
<div className="h-1 w-full bg-red-500/40 rounded"></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path className="text-slate-300 dark:text-slate-600 opacity-50" d="M 220 190 C 300 190, 300 150, 380 150" fill="none" stroke="currentColor" stroke-dasharray="4" strokeWidth="2"></path>
<circle className="animate-ping" cx="300" cy="170" fill="#3b82f6" r="3"></circle>
</svg>

<div className="absolute left-[45%] top-[30%] bg-white dark:bg-[#1c1c1f] border border-blue-200 dark:border-blue-500/30 rounded-lg p-3 shadow-lg shadow-blue-500/5 dark:shadow-[0_0_20px_rgba(59,130,246,0.1)] z-10 w-40 transition-colors duration-300">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-blue-500 dark:text-blue-400" icon="lucide:bot" width="16"></iconify-icon>
<span className="text-[10px] text-slate-900 dark:text-white font-medium">Sora Receptionist</span>
</div>
<div className="text-[9px] text-slate-500 leading-tight">SMS follow-up sent. Qualifying lead intent...</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path className="text-slate-300 dark:text-slate-600 opacity-50" d="M 540 150 C 620 150, 620 220, 700 220" fill="none" stroke="currentColor" stroke-dasharray="4" strokeWidth="2"></path>
</svg>

<div className="absolute left-[70%] top-[45%] bg-white dark:bg-[#1c1c1f] border border-slate-200 dark:border-white/10 rounded-lg p-3 shadow-lg dark:shadow-xl z-10 w-32 transition-colors duration-300">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-500 dark:text-emerald-400" icon="lucide:calendar-check-2" width="16"></iconify-icon>
<span className="text-[10px] text-slate-900 dark:text-white font-medium">Job Booked</span>
</div>
<div className="h-1 w-full bg-emerald-500/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="horizon-ring border border-slate-200 dark:border-white/5 shadow-[0_-40px_100px_-20px_rgba(59,130,246,0.1),inset_0_20px_100px_-20px_rgba(16,185,129,0.05)] dark:shadow-[0_-40px_100px_-20px_rgba(59,130,246,0.2),inset_0_20px_100px_-20px_rgba(16,185,129,0.1)]"></div>
</main>

<section className="overflow-hidden bg-transparent border-slate-200 dark:border-white/5 border-t pt-32 pb-32 relative" id="services">
<div className="absolute inset-0 bg-slate-50/20 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-serif text-slate-900 dark:text-white">
                    Built for
                    <span className="font-serif text-blue-600 dark:text-blue-400">real-world outcomes.</span>
</h2>
<p className="text-lg leading-relaxed font-light text-slate-600 dark:text-slate-400">
                    We don't just "do AI". We implement complete business operating systems that handle your reception, sales, and admin.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-2xl border bg-white/70 dark:bg-[#050505]/80 p-8 hover:border-blue-500/30 transition-all duration-500 shadow-sm dark:shadow-lg border-slate-200 dark:border-white/10 backdrop-blur-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)]"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-blue-50 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/10">
<iconify-icon icon="lucide:phone-call" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">AI Lead Reception</h3>
</div>
<p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                Never miss a job because you were on a ladder. Our AI handles calls, SMS, and web forms 24/7. It qualifies leads, answers questions, and books appointments directly into your calendar.
                            </p>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="px-3 py-2 border border-slate-200 dark:border-white/5 rounded bg-slate-50 dark:bg-white/[0.02] text-xs text-slate-500 dark:text-slate-300">Missed Call Textback</div>
<div className="px-3 py-2 border border-slate-200 dark:border-white/5 rounded bg-slate-50 dark:bg-white/[0.02] text-xs text-slate-500 dark:text-slate-300">Instant Quotes</div>
<div className="px-3 py-2 border border-slate-200 dark:border-white/5 rounded bg-slate-50 dark:bg-white/[0.02] text-xs text-slate-500 dark:text-slate-300">Calendar Booking</div>
<div className="px-3 py-2 border border-slate-200 dark:border-white/5 rounded bg-slate-50 dark:bg-white/[0.02] text-xs text-slate-500 dark:text-slate-300">Google Review AI</div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-2xl border bg-white/70 dark:bg-[#050505]/80 p-8 hover:border-emerald-500/30 transition-all duration-500 shadow-sm dark:shadow-lg border-slate-200 dark:border-white/10 backdrop-blur-sm">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-emerald-50 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/10">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">CRM &amp; Sales Automation</h3>
</div>
<p className="text-sm leading-relaxed mb-6 text-slate-600 dark:text-slate-400">
                            Stop using spreadsheets. We build visual pipelines that track every dollar. Automate follow-ups so no lead goes cold.
                        </p>
<div className="flex items-center gap-4 opacity-100 dark:opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="flex flex-col gap-1">
<span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">PIPELINE VALUE</span>
<span className="text-lg font-mono text-slate-900 dark:text-white">$142,500</span>
</div>
<div className="w-px h-8 bg-slate-200 dark:bg-white/10"></div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">CONVERSION</span>
<span className="text-lg font-mono text-slate-900 dark:text-white">28%</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border bg-white/70 dark:bg-[#050505]/80 p-8 hover:border-purple-500/30 transition-all duration-500 shadow-sm dark:shadow-lg border-slate-200 dark:border-white/10 backdrop-blur-sm">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-purple-50 dark:bg-white/5 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-white/10">
<iconify-icon icon="lucide:layout" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">Websites</h3>
</div>
<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                            High-conversion sites designed to turn visitors into booked jobs. Mobile-optimized for trades.
                        </p>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border bg-white/70 dark:bg-[#050505]/80 p-8 hover:border-orange-500/30 transition-all duration-500 shadow-sm dark:shadow-lg border-slate-200 dark:border-white/10 backdrop-blur-sm">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-orange-50 dark:bg-white/5 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-white/10">
<iconify-icon icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">Growth Ops</h3>
</div>
<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                            Funnels, ads management, and reputation management to keep the leads flowing.
                        </p>
</div>
</div>

<div className="md:col-span-3 lg:col-span-2 group relative overflow-hidden rounded-2xl border bg-white/70 dark:bg-[#050505]/80 p-8 hover:border-blue-500/30 transition-all duration-500 shadow-sm dark:shadow-lg border-slate-200 dark:border-white/10 backdrop-blur-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_50%)]"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-white/10">
<iconify-icon icon="lucide:network" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">Total Integration</h3>
</div>
<p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
                            We connect your world. Ads to Website → Website to CRM → CRM to Invoicing (Xero/Quickbooks). Eliminating manual admin data entry entirely.
                        </p>
<a className="inline-flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" href="#" onclick="openAuditModal(); return false;">
                            Audit your workflow <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-transparent border-t border-slate-200 dark:border-white/5 overflow-hidden" id="app">

<div className="absolute inset-0 bg-blue-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="z-10 flex flex-col max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="text-center mb-20 max-w-3xl">
<span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6 block">The Sora Solution</span>
<h2 className="md:text-6xl text-4xl font-medium text-slate-900 dark:text-white tracking-tight mb-6"> Every Conversation.
<span className="text-blue-500">One Inbox.</span>
Total Control.</h2>
<p className="text-slate-600 dark:text-slate-400 text-lg font-light max-w-xl mx-auto">
                CRM, Messages, Pipeline, Tasks, Automations — Unified.
            </p>
</div>

<div className="relative w-full max-w-[320px] md:max-w-[360px] perspective-dramatic mx-auto">

<div className="absolute top-32 -left-12 md:-left-20 w-48 h-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-900/5 dark:shadow-2xl z-0 transform -rotate-6 opacity-80 md:opacity-100 transition-all duration-700 border border-slate-100 dark:border-transparent">
<div className="p-5 space-y-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">New Lead</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
<div className="h-8 w-full bg-slate-50 rounded-lg mt-4 border border-slate-100"></div>
</div>
</div>

<div className="absolute top-48 -right-12 md:-right-20 w-48 h-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-900/5 dark:shadow-2xl z-0 transform rotate-6 opacity-80 md:opacity-100 transition-all duration-700 border border-slate-100 dark:border-transparent">
<div className="p-5 space-y-3">
<div className="flex gap-2 mb-4">
<div className="h-8 w-8 rounded-full bg-purple-100 border border-purple-200"></div>
<div className="h-8 w-8 rounded-full bg-blue-100 border border-blue-200"></div>
<div className="h-8 w-8 rounded-full bg-orange-100 border border-orange-200"></div>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="relative z-10 bg-white rounded-[3rem] border-[8px] border-[#1c1c1e] overflow-hidden h-[720px] shadow-2xl flex flex-col ring-1 ring-black/5 dark:ring-white/10">
<div className="absolute top-0 inset-x-0 h-8 bg-transparent z-50 flex justify-center pointer-events-none">
<div className="w-28 h-7 bg-[#1c1c1e] rounded-b-2xl"></div>
</div>
<div className="pt-14 pb-2 px-6 bg-white flex items-center justify-between border-b border-transparent">
<div className="flex items-center gap-2">
<div className="text-blue-600">
<iconify-icon icon="lucide:layers" width="22"></iconify-icon>
</div>
<span className="font-bold text-slate-900 tracking-tight text-lg">SORA</span>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon className="" icon="lucide:search" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-center px-6 border-b border-slate-100 bg-white pt-2">
<div className="pb-3 border-b-[2.5px] border-blue-600 text-blue-600 text-sm font-semibold cursor-pointer mr-6 transition-colors">Inbox</div>
<div className="pb-3 border-b-[2.5px] border-transparent text-slate-400 text-sm font-medium cursor-pointer hover:text-slate-600 mr-6 transition-colors">CRM</div>
<div className="pb-3 border-b-[2.5px] border-transparent text-slate-400 text-sm font-medium cursor-pointer hover:text-slate-600 mr-6 transition-colors">Calendar</div>
<div className="pb-3 border-b-[2.5px] border-transparent text-slate-400 text-sm font-medium cursor-pointer hover:text-slate-600 transition-colors">Tasks</div>
</div>
<div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 space-y-3 no-scrollbar scroll-smooth">
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm border border-emerald-200/50">R</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">Rick</span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="logos:whatsapp-icon" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">Yep lock it in 👍</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-sm border border-orange-200/50">C</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">Clark</span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="skill-icons:instagram" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">Deposit paid just now...</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm border border-blue-200/50">C</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">Christine</span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="logos:messenger" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">Great — when can you start?</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold text-sm border border-rose-200/50">T</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">Tammy</span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="logos:google-gmail" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">Thursday works for us...</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center gap-3.5 hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm border border-blue-200/50">M</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold text-slate-900 text-[15px]">Michael</span>
<iconify-icon className="opacity-80 group-hover:opacity-100 transition-opacity" icon="logos:linkedin-icon" width="16"></iconify-icon>
</div>
<p className="text-[13px] text-slate-500 truncate group-hover:text-slate-700 transition-colors">Can you send the contract?</p>
</div>
</div>
</div>
<div className="h-[88px] bg-white border-t border-slate-100 px-6 pb-4 flex items-center justify-between relative z-20">
<button className="flex flex-col items-center gap-1.5 text-blue-600 w-12 hover:bg-slate-50/50 rounded-lg py-1 transition-colors">
<iconify-icon icon="lucide:inbox" width="22"></iconify-icon>
<span className="text-[10px] font-semibold">Inbox</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 w-12 hover:bg-slate-50/50 rounded-lg py-1 transition-colors">
<iconify-icon icon="lucide:users" width="22"></iconify-icon>
<span className="text-[10px] font-medium">CRM</span>
</button>
<div className="absolute left-1/2 -top-6 -translate-x-1/2">
<button className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all">
<iconify-icon icon="lucide:plus" width="28"></iconify-icon>
</button>
</div>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 w-12 hover:bg-slate-50/50 rounded-lg py-1 transition-colors">
<iconify-icon icon="lucide:check-square" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Tasks</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 w-12 hover:bg-slate-50/50 rounded-lg py-1 transition-colors">
<iconify-icon icon="lucide:settings" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Auto</span>
</button>
</div>
<div className="absolute bottom-2 left-0 right-0 flex justify-center z-30 pointer-events-none">
<div className="w-32 h-1 bg-slate-200/80 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-200 dark:border-white/5" id="method">
<div className="absolute inset-0 bg-slate-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 dark:text-white tracking-tight font-serif mb-4">The Sora System</h2>
<p className="text-slate-600 dark:text-slate-400">A proven 3-step framework to scale service businesses.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-blue-500/10 transition-colors">01</div>
<div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
<iconify-icon icon="lucide:search" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-medium mb-3">Audit &amp; Strategy</h3>
<p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">We analyze your entire customer journey. We identify where you are leaking leads and find the highest-ROI automation opportunities.</p>
</div>

<div className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-emerald-500/10 transition-colors">02</div>
<div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
<iconify-icon icon="lucide:cpu" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-medium mb-3">Build &amp; Automate</h3>
<p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">We deploy the Sora Operating System. We set up your AI reception, CRM, and workflow automations tailored to your specific trade.</p>
</div>

<div className="p-8 rounded-xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:bg-white/[0.04] transition-all relative group backdrop-blur-sm shadow-sm dark:shadow-none">
<div className="text-5xl font-bold text-slate-100 dark:text-white/5 absolute right-4 top-4 group-hover:text-orange-500/10 transition-colors">03</div>
<div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/20">
<iconify-icon icon="lucide:rocket" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-medium mb-3">Optimise &amp; Scale</h3>
<p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">We don't leave you hanging. We refine the AI's performance, train your team on the app, and support your growth to 7-figures and beyond.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-transparent border-t border-slate-200 dark:border-white/5" id="pricing">
<div className="absolute inset-0 bg-slate-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 dark:text-white tracking-tight font-serif mb-4">Simple, transparent pricing.</h2>
<p className="text-slate-600 dark:text-slate-400">Choose the scale that fits your business.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start group/pricing">

<div className="group relative rounded-2xl p-[3px] transition-all duration-300 ease-out outline-none /* Border Gradient: Light Copper -&gt; Deep Bronze -&gt; Dark Brown */ bg-gradient-to-br from-[#fdba74] via-[#ea580c] to-[#7c2d12] /* Hover/Focus Actions: Scale Up, Z-Index Lift, Shadow Color */ hover:scale-[1.05] focus:scale-[1.05] hover:z-10 focus:z-10 hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.3)] focus:shadow-[0_0_40px_-10px_rgba(234,88,12,0.3)] /* Peer Fading */ md:group-hover/pricing:opacity-90 md:hover:!opacity-100 md:focus:!opacity-100" tabindex="0">

<div className="h-full w-full rounded-xl flex flex-col p-6 relative overflow-hidden backdrop-blur-sm /* Background: Warm Bronze Tint */ bg-gradient-to-b from-[#fff7ed] to-[#ffedd5] dark:from-[#2a1205] dark:to-[#0c0a09] /* Specular Highlight simulation */ ring-1 ring-inset ring-white/40 dark:ring-white/5">
<div className="mb-6">
<h3 className="text-xl font-bold text-[#7c2d12] dark:text-[#fdba74] mb-2 flex items-center gap-2">
                                Foundation
                                
<span className="w-2 h-2 rounded-full bg-[#ea580c] shadow-[0_0_8px_#ea580c]"></span>
</h3>
<p className="text-xs font-medium text-orange-800/70 dark:text-orange-200/60 h-8 leading-snug">For businesses getting systems in place fast.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">$500</span>
<span className="text-sm text-slate-500 font-medium">/mo AUD</span>
</div>
<div className="text-xs text-orange-800/60 dark:text-orange-400/60 mt-2 font-mono">+ $1,000 Setup</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-orange-600 dark:text-orange-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>CRM setup</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-orange-600 dark:text-orange-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>SMS follow-ups &amp; text back</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-orange-600 dark:text-orange-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Ads + landing page</span>
</li>
</ul>

<button className="w-full py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 shadow-md bg-gradient-to-r from-orange-700 to-orange-800 hover:from-orange-600 hover:to-orange-700 shadow-orange-900/10" onclick="openAuditModal()">
                            Get Started
                        </button>
</div>
</div>

<div className="group relative rounded-2xl p-[3px] transition-all duration-300 ease-out outline-none /* Border Gradient: Bright Silver -&gt; Slate -&gt; Deep Graphite */ bg-gradient-to-br from-[#e2e8f0] via-[#94a3b8] to-[#475569] hover:scale-[1.05] focus:scale-[1.05] hover:z-10 focus:z-10 hover:shadow-[0_0_40px_-10px_rgba(148,163,184,0.3)] focus:shadow-[0_0_40px_-10px_rgba(148,163,184,0.3)] md:group-hover/pricing:opacity-90 md:hover:!opacity-100 md:focus:!opacity-100" tabindex="0">
<div className="h-full w-full rounded-xl flex flex-col p-6 relative overflow-hidden backdrop-blur-sm /* Background: Cool Silver Tint */ bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] dark:from-[#0f172a] dark:to-[#020617] ring-1 ring-inset ring-white/40 dark:ring-white/5">
<div className="mb-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold text-[#334155] dark:text-[#e2e8f0] flex items-center gap-2">
                                    Growth
                                    
<span className="w-2 h-2 rounded-full bg-[#94a3b8] shadow-[0_0_8px_#94a3b8]"></span>
</h3>
<span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 dark:text-white bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 px-2 py-0.5 rounded-full">Recommended</span>
</div>
<p className="text-xs font-medium text-slate-600 dark:text-slate-400 h-8 leading-snug">For businesses ready for predictable monthly revenue.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">$1,600</span>
<span className="text-sm text-slate-500 font-medium">/mo AUD</span>
</div>
<div className="text-xs text-slate-500/80 dark:text-slate-400/60 mt-2 font-mono">+ $2,000 Setup</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Full automation (SMS + Email)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Smart lead routing</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Enhanced ads &amp; tracking</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Reviews &amp; social proof system</span>
</li>
</ul>

<button className="w-full py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 shadow-md bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 shadow-slate-900/10" onclick="openAuditModal()">
                            Book a Free Audit
                        </button>
</div>
</div>

<div className="group relative rounded-2xl p-[3px] transition-all duration-300 ease-out outline-none /* Border Gradient: Champagne -&gt; Rich Gold -&gt; Deep Amber */ bg-gradient-to-br from-[#fde047] via-[#ca8a04] to-[#854d0e] hover:scale-[1.05] focus:scale-[1.05] hover:z-10 focus:z-10 hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] focus:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] md:group-hover/pricing:opacity-90 md:hover:!opacity-100 md:focus:!opacity-100" tabindex="0">
<div className="h-full w-full rounded-xl flex flex-col p-6 relative overflow-hidden backdrop-blur-sm /* Background: Warm Gold Tint */ bg-gradient-to-b from-[#fefce8] to-[#fef9c3] dark:from-[#422006] dark:to-[#0c0a09] ring-1 ring-inset ring-white/40 dark:ring-white/5">
<div className="mb-6">
<h3 className="text-xl font-bold text-[#854d0e] dark:text-[#fde047] mb-2 flex items-center gap-2">
                                Enterprise
                                
<span className="w-2 h-2 rounded-full bg-[#ca8a04] shadow-[0_0_8px_#ca8a04]"></span>
</h3>
<p className="text-xs font-medium text-yellow-800/70 dark:text-yellow-200/60 h-8 leading-snug">For businesses scaling without adding staff.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">$2,000</span>
<span className="text-sm text-slate-500 font-medium">/mo AUD</span>
</div>
<div className="text-xs text-yellow-800/60 dark:text-yellow-400/60 mt-2 font-mono">+ $3,000 Setup</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>AI receptionist &amp; setter</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Multi-location systems</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Advanced automations</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Authority &amp; content engine</span>
</li>
</ul>

<button className="w-full py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 shadow-md bg-gradient-to-r from-yellow-700 to-yellow-800 hover:from-yellow-600 hover:to-yellow-700 shadow-yellow-900/10" onclick="openAuditModal()">
                            Talk to Us
                        </button>
</div>
</div>
</div>
<div className="text-center mt-12">
<p className="text-xs text-slate-400 dark:text-slate-600 font-medium">Built for service businesses. Scales with you.</p>
</div>
</div>
</section>

<section className="overflow-hidden bg-transparent w-full border-slate-200 dark:border-white/5 border-t py-12 relative">
<div className="absolute inset-0 bg-slate-50/10 dark:bg-[#020204]/70 -z-10 transition-colors duration-500"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-6">Ready to scale?</h2>
<button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all font-medium mb-12 shadow-lg shadow-blue-500/20 active:scale-95" onclick="openAuditModal()">
                Book Free Growth Audit <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>

<div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400 items-center justify-between">
<div>
<a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors mr-6" href="mailto:hello@sorasolutions.com">hello@sorasolutions.com</a>
</div>
<div className="flex gap-4">
<a className="hover:text-slate-900 dark:hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 dark:hover:text-white" href="#">Terms</a>
</div>
</div>
<div className="text-center text-xs text-slate-500 dark:text-slate-600 mt-6">
                © 2024 Sora Business Solutions. All rights reserved.
            </div>
</div>
</section>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="audit-modal">

<div className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity" onclick="closeAuditModal()"></div>

<div className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0c] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col max-h-[90vh]">

<div className="h-1 w-full bg-slate-100 dark:bg-white/5">
<div className="h-full bg-blue-600 transition-all duration-500 ease-out w-[20%]" id="progress-bar"></div>
</div>

<div className="px-8 pt-8 pb-4 border-b border-transparent flex justify-between items-start shrink-0">
<div>
<div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2" id="step-indicator">Step 1 of 5</div>
<h3 className="text-2xl font-medium text-slate-900 dark:text-white tracking-tight" id="step-title">Let’s start with the basics</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1" id="step-desc">This helps us understand your business at a high level.</p>
</div>
<button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1" onclick="closeAuditModal()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>

<div className="p-8 overflow-y-auto no-scrollbar flex-1">
<form id="audit-form" onsubmit="return false;">

<div className="step-content space-y-6 animate-slide-up" id="step-1">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">Business Name *</label>
<input className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400" placeholder="Smith Electrical Services Pty Ltd" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">Industry / Services *</label>
<input className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400" placeholder="Residential &amp; commercial electrical work, switchboards..." required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">Service Area *</label>
<input className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400" placeholder="Sydney metro, Newcastle &amp; Central Coast" required="" type="text"/>
</div>
</div>

<div className="step-content hidden space-y-6" id="step-2">
<div className="space-y-3">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">Current Monthly Revenue *</label>
<div className="grid grid-cols-2 gap-3">
<div className="relative">
<input className="peer sr-only custom-input" id="rev_1" name="revenue" type="radio" value="&lt;10k"/>
<label className="flex items-center justify-center p-3 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 transition-all text-slate-600 dark:text-slate-300 font-medium h-12" htmlFor="rev_1">Under $10k</label>
</div>
<div className="relative">
<input className="peer sr-only custom-input" id="rev_2" name="revenue" type="radio" value="10k-30k"/>
<label className="flex items-center justify-center p-3 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 transition-all text-slate-600 dark:text-slate-300 font-medium h-12" htmlFor="rev_2">$10k – $30k</label>
</div>
<div className="relative">
<input className="peer sr-only custom-input" id="rev_3" name="revenue" type="radio" value="30k-75k"/>
<label className="flex items-center justify-center p-3 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 transition-all text-slate-600 dark:text-slate-300 font-medium h-12" htmlFor="rev_3">$30k – $75k</label>
</div>
<div className="relative">
<input className="peer sr-only custom-input" id="rev_4" name="revenue" type="radio" value="75k-150k"/>
<label className="flex items-center justify-center p-3 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 transition-all text-slate-600 dark:text-slate-300 font-medium h-12" htmlFor="rev_4">$75k – $150k</label>
</div>
<div className="relative col-span-2">
<input className="peer sr-only custom-input" id="rev_5" name="revenue" type="radio" value="150k+"/>
<label className="flex items-center justify-center p-3 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 transition-all text-slate-600 dark:text-slate-300 font-medium h-12" htmlFor="rev_5">$150,000+</label>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">Target Monthly Revenue *</label>
<input className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400" placeholder="$60,000 per month" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">Average Job Value</label>
<input className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400" placeholder="$1,200 per job" type="text"/>
</div>
</div>
</div>

<div className="step-content hidden space-y-6" id="step-3">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">Ideal Client Description *</label>
<textarea className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400 resize-none leading-relaxed" placeholder="Homeowners and builders who value quality, fast response times, and are willing to pay for reliability" required="" rows="4"></textarea>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">Why Clients Choose You *</label>
<textarea className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400 resize-none leading-relaxed" placeholder="Fast response, upfront pricing, clean workmanship" required="" rows="3"></textarea>
</div>
</div>

<div className="step-content hidden space-y-8" id="step-4">
<div>
<label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-3">Lead Sources</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">Google Search</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">Social Media</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">Referrals</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">Paid Ads</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">HiPages/Markets</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">Other</span>
</label>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-3">Follow-Up System</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="relative">
<input className="peer sr-only custom-input" id="fu_1" name="followup" type="radio" value="none"/>
<label className="flex items-center justify-start px-4 py-3 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 transition-all text-slate-600 dark:text-slate-300 font-medium" htmlFor="fu_1">No system (Just call back)</label>
</div>
<div className="relative">
<input className="peer sr-only custom-input" id="fu_2" name="followup" type="radio" value="manual"/>
<label className="flex items-center justify-start px-4 py-3 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 transition-all text-slate-600 dark:text-slate-300 font-medium" htmlFor="fu_2">Manual SMS / Email</label>
</div>
<div className="relative">
<input className="peer sr-only custom-input" id="fu_3" name="followup" type="radio" value="automated"/>
<label className="flex items-center justify-start px-4 py-3 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 transition-all text-slate-600 dark:text-slate-300 font-medium" htmlFor="fu_3">Automated CRM</label>
</div>
</div>
</div>
</div>

<div className="step-content hidden space-y-6" id="step-5">
<div>
<label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-3">Digital Assets</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">Logo &amp; Branding</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">Professional Website</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">Site Generates Leads</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-lg cursor-pointer bg-slate-50 dark:bg-white/5 custom-checkbox-card transition-all">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-300">None of the above</span>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">Website URL</label>
<input className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400" placeholder="https://www.yourbusiness.com.au" type="url"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300">What does success look like in 12 months? *</label>
<textarea className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400 resize-none leading-relaxed" placeholder="Consistent leads, fewer missed calls, higher-value jobs, less admin..." required="" rows="3"></textarea>
</div>
</div>

<div className="step-content hidden flex flex-col items-center justify-center text-center py-10 space-y-6" id="step-success">
<div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
<iconify-icon icon="lucide:check" width="40"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-2xl font-medium text-slate-900 dark:text-white">Audit Request Submitted</h3>
<p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                                Our team will review your responses and identify where revenue, leads, and time are being lost. You’ll be contacted shortly with next steps.
                            </p>
</div>
<div className="text-xs text-slate-400 pt-8 flex items-center gap-2">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
                            No spam. No obligation. Real recommendations.
                        </div>
</div>
</form>
</div>

<div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] flex justify-between items-center shrink-0" id="modal-footer">
<button className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-4 py-2 transition-colors opacity-0 pointer-events-none" id="prev-btn" onclick="prevStep()" type="button">
                    ← Back
                </button>
<button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-8 py-2.5 rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center gap-2" id="next-btn" onclick="nextStep()" type="button">
                    Next Step <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>



    </>
  );
}
