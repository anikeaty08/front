import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Confetti Configuration ---
        const confettiColors = ['#fbcfe8', '#fef08a', '#ffffff', '#e9d5ff']; // Pink, Gold, White, Purple
        
        function fireConfetti() {
            var duration = 2 * 1000;
            var end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: confettiColors
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: confettiColors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }

        // --- Page Transition Logic ---
        const page1 = document.getElementById('page1');
        const page2 = document.getElementById('page2');
        const openBtn = document.getElementById('openBtn');

        openBtn.addEventListener('click', () => {
            // 1. Confetti burst
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: confettiColors,
                disableForReducedMotion: true
            });

            // Play optional pop sound (subtle)
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
                gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                oscillator.start();
                oscillator.stop(audioCtx.currentTime + 0.1);
            } catch(e) { /* ignore audio errors */ }

            // 2. Transition
            setTimeout(() => {
                page1.classList.add('opacity-0');
                setTimeout(() => {
                    page1.classList.add('hidden');
                    page2.classList.remove('hidden');
                    // Small delay to allow display:block to apply before opacity transition
                    requestAnimationFrame(() => {
                        page2.classList.remove('opacity-0');
                        initScratchCard(); // Initialize canvas once it's visible to get correct dimensions
                    });
                }, 1000); // Wait for fade out
            }, 1200); // Delay after click
        });

        // --- Scratch Card Logic ---
        function initScratchCard() {
            const canvas = document.getElementById('scratchCanvas');
            const ctx = canvas.getContext('2d');
            const hint = document.getElementById('scratchHint');
            const revealContent = document.getElementById('revealContent');
            
            // Set exact dimensions
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            // Fill canvas with gradient overlay
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#fef08a'); // Yellow 200
            gradient.addColorStop(0.5, '#dcfce3'); // Green 100
            gradient.addColorStop(1, '#fef9c3'); // Yellow 50
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add noise/texture to make it look like a scratch card
            ctx.fillStyle = 'rgba(255,255,255,0.4)';
            for(let i=0; i<1000; i++) {
                ctx.beginPath();
                ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2);
                ctx.fill();
            }

            let isDrawing = false;
            let scratchedTriggered = false;

            function getMousePos(e) {
                const rect = canvas.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                return {
                    x: clientX - rect.left,
                    y: clientY - rect.top
                };
            }

            function scratch(e) {
                if (!isDrawing) return;
                e.preventDefault();
                hint.style.opacity = '0'; // Hide hint once scratching starts
                revealContent.style.opacity = '1'; // Show content underneath

                const pos = getMousePos(e);
                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
                ctx.fill();

                checkReveal();
            }

            function checkReveal() {
                if (scratchedTriggered) return;
                
                // Sample pixels to see how much is cleared (performance optimization: check fewer pixels)
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                let transparentPixels = 0;
                const totalPixels = imageData.data.length / 4;
                const step = 4 * 10; // Check every 10th pixel
                
                for (let i = 3; i < imageData.data.length; i += step) {
                    if (imageData.data[i] === 0) transparentPixels++;
                }

                const percentCleared = (transparentPixels / (totalPixels / 10)) * 100;

                if (percentCleared > 45) { // If ~45% is cleared
                    scratchedTriggered = true;
                    canvas.style.opacity = '0';
                    setTimeout(() => {
                        canvas.style.display = 'none';
                        fireConfetti();
                    }, 500);
                }
            }

            // Events
            canvas.addEventListener('mousedown', (e) => { isDrawing = true; scratch(e); });
            canvas.addEventListener('mousemove', scratch);
            canvas.addEventListener('mouseup', () => isDrawing = false);
            canvas.addEventListener('mouseleave', () => isDrawing = false);

            canvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); }, {passive: false});
            canvas.addEventListener('touchmove', scratch, {passive: false});
            canvas.addEventListener('touchend', () => isDrawing = false);
        }

        // --- Timers Logic ---
        function updateTimers() {
            // Live Time
            const now = new Date();
            document.getElementById('liveTime').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

            // Countdown to 16 May 2026, 09:00 AM
            const targetDate = new Date('May 16, 2026 09:00:00').getTime();
            const distance = targetDate - now.getTime();

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('cd-days').textContent = days.toString().padStart(2, '0');
                document.getElementById('cd-hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('cd-mins').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('cd-secs').textContent = seconds.toString().padStart(2, '0');
            } else {
                // Event passed
                document.getElementById('cd-days').textContent = '00';
                document.getElementById('cd-hours').textContent = '00';
                document.getElementById('cd-mins').textContent = '00';
                document.getElementById('cd-secs').textContent = '00';
            }
        }

        setInterval(updateTimers, 1000);
        updateTimers(); // Initial call
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-yellow-200/40 blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-green-200/40 blur-[100px]"></div>


<div className="absolute top-[-2%] left-[-2%] text-[100px] md:text-[180px] opacity-60 blur-[2px] animate-float rotate-12 drop-shadow-xl">🌸🌿</div>
<div className="absolute top-[5%] left-[8%] text-[60px] md:text-[100px] opacity-50 blur-[4px] animate-float-slow drop-shadow-lg">🎈</div>

<div className="absolute top-[-5%] right-[-2%] text-[120px] md:text-[200px] opacity-60 blur-[3px] animate-float-slow -rotate-12 drop-shadow-xl">🌺🍃</div>
<div className="absolute top-[10%] right-[10%] text-[80px] md:text-[120px] opacity-40 blur-[5px] animate-float drop-shadow-lg">🎈</div>

<div className="absolute bottom-[-5%] left-[-5%] text-[110px] md:text-[190px] opacity-70 blur-[2px] animate-float-slow rotate-45 drop-shadow-xl">🌹✨</div>

<div className="absolute bottom-[-2%] right-[-5%] text-[100px] md:text-[170px] opacity-60 blur-[3px] animate-float -rotate-12 drop-shadow-xl">🌷🌿</div>

<div className="absolute top-[20%] left-[30%] text-xl md:text-3xl opacity-40 blur-[1px] animate-float">🌸</div>
<div className="absolute top-[60%] right-[20%] text-lg md:text-2xl opacity-50 blur-[2px] animate-float-slow">🍃</div>
<div className="absolute bottom-[30%] left-[15%] text-2xl md:text-4xl opacity-30 blur-[1px] animate-float"> petals </div> 
<div className="absolute bottom-[30%] left-[15%] text-2xl md:text-4xl opacity-50 blur-[1px] animate-float">🌸</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ease-in-out bg-white/10 backdrop-blur-sm" id="page1">
<button className="group relative px-10 py-4 bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-green-900 shadow-xl hover:scale-105 hover:bg-white/30 transition-all duration-500 animate-glow overflow-hidden" id="openBtn">
<span className="relative z-10 text-base md:text-lg font-medium tracking-widest uppercase">Open</span>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
</button>
</div>

<div className="hidden opacity-0 relative z-10 min-h-screen w-full flex flex-col items-center justify-start pt-16 pb-12 px-4 transition-opacity duration-1000 ease-in-out" id="page2">

<div className="text-center mb-10 flex flex-col items-center">
<h2 className="font-script text-green-700/80 text-3xl md:text-5xl mb-[-15px] md:mb-[-20px] -rotate-3 drop-shadow-sm z-10">Memories Forever</h2>
<h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-800 to-yellow-700 drop-shadow-lg z-0">
                Farewell Party
            </h1>
</div>

<div className="relative w-full max-w-sm md:max-w-md h-48 md:h-56 bg-white/30 backdrop-blur-xl border border-white/50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col items-center justify-center p-6 mb-10 group transition-transform hover:scale-[1.01]">

<div className="text-center opacity-0 transition-opacity duration-500" id="revealContent">
<p className="text-xs md:text-sm text-green-700 font-medium tracking-widest uppercase mb-2">You are invited</p>
<p className="font-serif text-2xl md:text-3xl text-green-950 font-semibold tracking-tight mb-3">16-MAY-2026</p>
<div className="inline-block px-4 py-2 bg-green-900/5 rounded-full border border-green-900/10">
<p className="text-xs md:text-sm text-green-800 font-medium tracking-tight">BIU COLLEGE OF HUMANITIES &amp; JOURNALISM</p>
</div>
</div>

<canvas className="absolute inset-0 w-full h-full cursor-pointer touch-none z-10 transition-opacity duration-500" id="scratchCanvas"></canvas>

<div className="absolute pointer-events-none z-20 flex flex-col items-center opacity-70 animate-pulse" id="scratchHint">
<iconify-icon className="text-3xl text-green-900 mb-1" icon="solar:hand-stars-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs font-medium tracking-widest text-green-900 uppercase">Scratch to Reveal</p>
</div>
</div>

<div className="w-full max-w-3xl flex flex-col md:flex-row gap-4 md:gap-6 mb-10">

<div className="flex-1 bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center">
<p className="text-[10px] md:text-xs text-green-700/80 uppercase tracking-widest mb-1">Current Time</p>
<p className="text-xl md:text-2xl font-medium text-green-900 tracking-tight" id="liveTime"></p>
</div>

<div className="flex-[2] bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center">
<p className="text-[10px] md:text-xs text-green-700/80 uppercase tracking-widest mb-2">Countdown to Celebration</p>
<div className="flex items-center gap-3 md:gap-5 text-green-950">
<div className="flex flex-col items-center"><span className="text-2xl md:text-4xl font-medium tracking-tighter" id="cd-days">00</span><span className="text-[9px] md:text-[10px] uppercase tracking-wider text-green-800/70 mt-1">Days</span></div>
<span className="text-xl md:text-2xl font-light text-green-900/30 mb-4">:</span>
<div className="flex flex-col items-center"><span className="text-2xl md:text-4xl font-medium tracking-tighter" id="cd-hours">00</span><span className="text-[9px] md:text-[10px] uppercase tracking-wider text-green-800/70 mt-1">Hrs</span></div>
<span className="text-xl md:text-2xl font-light text-green-900/30 mb-4">:</span>
<div className="flex flex-col items-center"><span className="text-2xl md:text-4xl font-medium tracking-tighter" id="cd-mins">00</span><span className="text-[9px] md:text-[10px] uppercase tracking-wider text-green-800/70 mt-1">Mins</span></div>
<span className="text-xl md:text-2xl font-light text-green-900/30 mb-4">:</span>
<div className="flex flex-col items-center"><span className="text-2xl md:text-4xl font-medium tracking-tighter" id="cd-secs">00</span><span className="text-[9px] md:text-[10px] uppercase tracking-wider text-green-800/70 mt-1">Secs</span></div>
</div>
</div>
</div>

<div className="w-full max-w-2xl relative overflow-hidden bg-gradient-to-br from-yellow-100/50 to-green-200/50 backdrop-blur-xl border border-white/60 rounded-3xl p-6 md:p-8 text-center shadow-lg group">

<div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 className="relative z-10 text-lg md:text-xl font-semibold text-green-950 tracking-tight mb-3">
                Bareilly International University
            </h3>
<div className="relative z-10 flex items-start justify-center gap-2 text-green-800 bg-white/30 rounded-xl p-3 border border-white/40">
<iconify-icon className="text-xl md:text-2xl text-green-700 animate-bounce mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm md:text-base font-medium leading-snug max-w-md">
                    Conference Hall, Guest House near Jhanda Ground, BIU
                </p>
</div>
</div>
</div>


    </>
  );
}
