import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const container = document.getElementById('petals-container');
        const colors = ['from-yellow-200/50 to-lime-200/50', 'from-lime-200/50 to-green-200/50', 'from-white/70 to-lime-100/70'];
        
        for (let i = 0; i < 12; i++) {
            const petal = document.createElement('div');
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomLeft = Math.floor(Math.random() * 100);
            const randomDelay = Math.random() * 15;
            const randomDuration = 15 + Math.random() * 15;
            const randomScale = 0.4 + Math.random() * 0.6;
            
            petal.className = `petal bg-gradient-to-br ${randomColor} backdrop-blur-[2px] shadow-sm`;
            petal.style.left = `${randomLeft}vw`;
            petal.style.animation = `drift ${randomDuration}s linear ${randomDelay}s infinite`;
            petal.style.transform = `scale(${randomScale})`;
            
            container.appendChild(petal);
        }

        // Canvas Scratch Logic
        const canvas = document.getElementById('scratchCanvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        let isDrawing = false;
        let scratched = false;

        function initCanvas() {
            canvas.width = 256; // 16rem = 256px
            canvas.height = 80; // h-20 = 80px

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#fef08a'); // yellow-200
            gradient.addColorStop(0.5, '#d9f99d'); // lime-200
            gradient.addColorStop(1, '#bbf7d0'); // green-200
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add subtle noise texture
            for(let i=0; i<800; i++) {
                ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.04)';
                ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
            }

            ctx.font = '500 13px Inter, sans-serif';
            ctx.fillStyle = '#475569';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Scratch to reveal', canvas.width / 2, canvas.height / 2);
        }

        function getMousePos(e) {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        }

        function startDrawing(e) {
            if (scratched) return;
            isDrawing = true;
            const pos = getMousePos(e);
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = 24;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        }

        let checkCounter = 0;
        function draw(e) {
            if (!isDrawing || scratched) return;
            e.preventDefault(); 
            const pos = getMousePos(e);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();

            checkCounter++;
            if (checkCounter % 5 === 0) checkReveal();
        }

        function stopDrawing() {
            isDrawing = false;
        }

        function checkReveal() {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            let transparentPixels = 0;
            
            for (let i = 3; i < pixels.length; i += 4) {
                if (pixels[i] < 128) {
                    transparentPixels++;
                }
            }
            
            const percent = (transparentPixels / (pixels.length / 4)) * 100;
            if (percent > 45) {
                scratched = true;
                canvas.style.opacity = '0';
                setTimeout(() => canvas.remove(), 700);
            }
        }

        // Bind events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);
        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);

        // Initialize canvas but wait to set up properly until the page opens
        initCanvas();

        function openInvitation() {
            const p1 = document.getElementById('page1');
            const p2 = document.getElementById('page2');

            p1.style.opacity = '0';
            p1.style.transform = 'scale(1.02)';
            p1.style.filter = 'blur(8px)';
            p1.style.pointerEvents = 'none';

            setTimeout(() => {
                p2.classList.remove('opacity-0', 'scale-[0.98]', 'pointer-events-none');
                p2.classList.add('opacity-100', 'scale-100');
                p2.style.pointerEvents = 'auto';
            }, 500);
        }

        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            document.getElementById('liveClock').textContent = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        const targetDate = new Date("May 16, 2026 10:00:00").getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                document.getElementById('cd-days').textContent = "00";
                document.getElementById('cd-hours').textContent = "00";
                document.getElementById('cd-mins').textContent = "00";
                document.getElementById('cd-secs').textContent = "00";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
            document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('cd-mins').textContent = String(minutes).padStart(2, '0');
            document.getElementById('cd-secs').textContent = String(seconds).padStart(2, '0');
        }
        
        setInterval(updateCountdown, 1000);
        updateCountdown();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 bg-noise z-50"></div>

<div className="fixed inset-0 bg-gradient-to-br from-yellow-100/70 via-lime-100/50 to-green-100/60 z-0 pointer-events-none"></div>
<div className="fixed -top-32 -left-20 w-[30rem] h-[30rem] animate-float-1 z-0 pointer-events-none">
<div className="absolute inset-0 bg-lime-300/30 rounded-full blur-3xl animate-glow"></div>
<div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-tr from-yellow-200/80 to-lime-100 rounded-full opacity-70 blur-2xl"></div>
</div>
<div className="fixed -bottom-40 -right-20 w-[35rem] h-[35rem] animate-float-2 z-0 pointer-events-none">
<div className="absolute inset-0 bg-yellow-200/30 rounded-full blur-3xl animate-glow" style={{animationDelay: '-3s'}}></div>
<div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tr from-green-200/80 to-lime-100 rounded-full opacity-70 blur-2xl"></div>
</div>
<div className="fixed top-8 left-8 sm:top-16 sm:left-16 z-10 pointer-events-none opacity-70">
<div className="absolute -top-10 -left-10 w-32 h-32 sm:w-48 sm:h-48 animate-spin-slow">
<div className="absolute top-0 left-1/4 w-1/2 h-full bg-lime-200/60 rounded-full blur-sm"></div>
<div className="absolute top-1/4 left-0 w-full h-1/2 bg-yellow-200/60 rounded-full blur-sm"></div>
</div>
<div className="relative w-24 h-32 sm:w-32 sm:h-40 animate-float-1" style={{animationDelay: '-2s'}}>
<div className="w-full h-full rounded-[50%_50%_50%_50%/40%_40%_60%_60%] bg-[radial-gradient(circle_at_30%_30%,#fef08a,#facc15)] shadow-[-10px_-10px_20px_rgba(0,0,0,0.02)_inset,10px_10px_20px_rgba(255,255,255,0.8)_inset]"></div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-yellow-500/80"></div>
<div className="absolute -bottom-12 left-1/2 w-[1px] h-12 bg-slate-300/60"></div>
</div>
</div>
<div className="fixed bottom-16 right-8 sm:bottom-24 sm:right-16 z-10 pointer-events-none opacity-70">
<div className="absolute top-10 right-10 w-40 h-40 sm:w-56 sm:h-56 animate-spin-reverse-slow scale-110">
<div className="absolute inset-0 w-full h-full border-[12px] border-lime-300/30 rounded-full border-dashed blur-[1px]"></div>
<div className="absolute inset-4 bg-yellow-100/50 rounded-[40%] animate-spin-slow blur-sm"></div>
</div>
<div className="relative w-28 h-36 sm:w-36 sm:h-48 animate-float-2">
<div className="w-full h-full rounded-[50%_50%_50%_50%/40%_40%_60%_60%] bg-[radial-gradient(circle_at_30%_30%,#d9f99d,#84cc16)] shadow-[-10px_-10px_20px_rgba(0,0,0,0.02)_inset,10px_10px_20px_rgba(255,255,255,0.8)_inset]"></div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-transparent border-b-lime-600/80"></div>
<div className="absolute -bottom-16 left-1/2 w-[1px] h-16 bg-slate-300/60"></div>
</div>
</div>
<div className="fixed top-12 right-12 sm:top-20 sm:right-20 z-10 pointer-events-none opacity-60">
<div className="relative w-20 h-28 sm:w-24 sm:h-32 animate-float-1" style={{animationDelay: '-5s'}}>
<div className="w-full h-full rounded-[50%_50%_50%_50%/40%_40%_60%_60%] bg-[radial-gradient(circle_at_30%_30%,#bbf7d0,#22c55e)] shadow-[-10px_-10px_20px_rgba(0,0,0,0.02)_inset,10px_10px_20px_rgba(255,255,255,0.8)_inset]"></div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-transparent border-b-green-500/80"></div>
<div className="absolute -bottom-10 left-1/2 w-[1px] h-10 bg-slate-300/60"></div>
</div>
</div>
<div className="fixed bottom-12 left-12 sm:bottom-20 sm:left-20 z-10 pointer-events-none opacity-60">
<div className="relative w-24 h-24 sm:w-32 sm:h-32 animate-spin-slow blur-sm">
<div className="absolute inset-0 bg-lime-300/30 rounded-3xl rotate-12"></div>
<div className="absolute inset-0 bg-yellow-300/30 rounded-3xl rotate-45"></div>
</div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" id="petals-container">
</div>
<div className="absolute inset-0 z-30 flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]" id="page1">
<div className="relative group">
<div className="absolute -inset-2 bg-gradient-to-r from-yellow-300/50 via-lime-300/50 to-green-300/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
<button className="relative glass-button px-8 py-3.5 rounded-full flex items-center gap-2.5 text-slate-700 transition-all duration-500 hover:scale-[1.01] hover:bg-white active:scale-[0.98] cursor-pointer" onclick="openInvitation()">
<span className="text-xs tracking-[0.2em] uppercase font-semibold">Open</span>
<iconify-icon className="text-lime-600 text-lg group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 sm:p-8 opacity-0 scale-[0.98] pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]" id="page2">
<div className="absolute top-6 right-6 sm:top-10 sm:right-10 bg-white/50 backdrop-blur-md border border-white/80 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm z-40">
<div className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></div>
<span className="text-xs font-semibold text-slate-600 tracking-wide" id="liveClock"></span>
</div>
<div className="glass-panel w-full max-w-3xl rounded-[2rem] p-8 sm:p-14 text-center relative overflow-hidden group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
<div className="relative z-10 flex flex-col items-center">
<span className="font-serif italic text-base sm:text-lg text-emerald-700/80 mb-3 font-medium tracking-wide">Memories Forever</span>
<h1 className="font-serif text-5xl sm:text-7xl text-slate-900 tracking-tighter mb-10 font-medium uppercase leading-[1.1]">
                    Farewell <br/> Party
                </h1>
<div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-lg mb-10">
<div className="flex flex-col items-center group/time">
<div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center justify-center mb-3 transition-transform duration-500 group-hover/time:-translate-y-1">
<span className="text-3xl sm:text-5xl text-slate-800 font-medium tracking-tight" id="cd-days">00</span>
</div>
<span className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold">Days</span>
</div>
<div className="flex flex-col items-center group/time">
<div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center justify-center mb-3 transition-transform duration-500 group-hover/time:-translate-y-1">
<span className="text-3xl sm:text-5xl text-slate-800 font-medium tracking-tight" id="cd-hours">00</span>
</div>
<span className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold">Hours</span>
</div>
<div className="flex flex-col items-center group/time">
<div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center justify-center mb-3 transition-transform duration-500 group-hover/time:-translate-y-1">
<span className="text-3xl sm:text-5xl text-slate-800 font-medium tracking-tight" id="cd-mins">00</span>
</div>
<span className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold">Mins</span>
</div>
<div className="flex flex-col items-center group/time">
<div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center justify-center mb-3 transition-transform duration-500 group-hover/time:-translate-y-1">
<span className="text-3xl sm:text-5xl text-lime-600 font-medium tracking-tight" id="cd-secs">00</span>
</div>
<span className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold">Secs</span>
</div>
</div>

<div className="w-64 h-20 relative mx-auto rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-white bg-white/60 backdrop-blur-md mb-10 group/scratch" id="scratchContainer">
<div className="absolute inset-0 flex flex-col items-center justify-center p-2 select-none pointer-events-none">
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400 mb-0.5">You are invited</span>
<span className="text-lg font-medium tracking-tight text-slate-800">16 May 2026</span>
</div>
<canvas className="absolute inset-0 cursor-crosshair transition-opacity duration-700 z-10 touch-none" id="scratchCanvas"></canvas>
</div>
<div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>
<div className="space-y-6 w-full flex flex-col items-center">
<div className="flex flex-col items-center justify-center gap-2 group/loc cursor-default text-center">
<h2 className="text-slate-800 text-sm sm:text-base font-semibold tracking-tight uppercase px-4">
                            BIU College of Humanities &amp; Journalism
                        </h2>
<div className="flex items-center gap-3">
<div className="w-8 h-[1px] bg-slate-300/60"></div>
<span className="text-lime-600/70 text-xs font-semibold">&amp;</span>
<div className="w-8 h-[1px] bg-slate-300/60"></div>
</div>
<h2 className="text-slate-800 text-sm sm:text-base font-semibold tracking-tight uppercase px-4">
                            BIU College of Management
                        </h2>
</div>
<button className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white/70 border border-white shadow-sm transition-all hover:bg-white hover:shadow-md group/pin cursor-pointer text-slate-600 hover:text-slate-900 mt-2">
<iconify-icon className="text-lime-600 text-lg group-hover/pin:translate-y-[-2px] transition-transform" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                            BIU House near Jhanda Ground
                        </span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
