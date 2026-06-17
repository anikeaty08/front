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



        // --- Wheel Configuration ---
        const segments = [
            "National Day",
            "International Day",
            "Liberation Day",
            "Constitution Day",
            "Oil",
            "Gulf War",
            "Leaders / قادة", 
            "Government",
            "Grgean / قرقيعان",
            "Ramadan / رمضان",
            "Eid Alfeter",
            "Eid Al-Adha"
        ];

        // Linear Design Palette matching Kuwait Flag
        const colors = [
            "#059669", // Green (Emerald 600)
            "#FAFAFA", // White (Zinc 50)
            "#DC2626", // Red (Red 600)
            "#18181b", // Black (Zinc 900)
            "#059669", "#FAFAFA", "#DC2626", "#18181b",
            "#059669", "#FAFAFA", "#DC2626", "#18181b"
        ];

        // TARGET UPDATED: Index 5 is "Gulf War"
        const targetIndex = 5; 
        
        // --- Elements ---
        const canvas = document.getElementById('wheelCanvas');
        const ctx = canvas.getContext('2d');
        const spinBtn = document.getElementById('spinBtn');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalContent = document.getElementById('modalContent');
        const resultText = document.getElementById('resultText');
        const closeModal = document.getElementById('closeModal');
        const confettiCanvas = document.getElementById('confettiCanvas');
        const confettiCtx = confettiCanvas.getContext('2d');

        // --- High DPI Scaling ---
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        // Important: translate context to center
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const radius = rect.width / 2;

        // --- State ---
        let currentRotation = 0;
        let isSpinning = false;
        const arc = (2 * Math.PI) / segments.length;

        // --- Drawing ---
        function drawWheel() {
            ctx.clearRect(0, 0, rect.width, rect.height);
            
            segments.forEach((segment, i) => {
                const angle = i * arc;
                
                ctx.beginPath();
                ctx.fillStyle = colors[i];
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, radius, angle, angle + arc);
                ctx.lineTo(centerX, centerY);
                ctx.fill();

                // Stroke for separation (Subtle)
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                ctx.lineWidth = 1;
                ctx.stroke();

                // Text
                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate(angle + arc / 2);
                ctx.textAlign = "right";
                
                // Text Contrast
                if (colors[i] === "#FAFAFA") {
                    ctx.fillStyle = "#18181b"; // Dark text on white
                } else {
                    ctx.fillStyle = "#FFFFFF"; // White text on dark
                }
                
                ctx.font = "500 12px 'Inter', sans-serif";
                // Adjust text position
                ctx.fillText(segment, radius - 20, 4);
                ctx.restore();
            });
        }

        drawWheel();

        // --- Spinning Logic (Rigged) ---
        spinBtn.addEventListener('click', () => {
            if (isSpinning) return;
            isSpinning = true;
            spinBtn.disabled = true;

            // Calculate target rotation
            // 1. Where is the target segment currently?
            // Target Index * Degrees Per Segment + Half Segment (Center)
            const segmentCenterDeg = (targetIndex * (360/segments.length)) + ((360/segments.length)/2);
            
            // We want this segment center to align with the pointer at Top (270 degrees)
            const targetPosDeg = 270; 
            
            // Calculate how much we need to move from "start" (0 rotation) to align target to pointer
            // If segment is at X, we need to rotate Y so X+Y = 270. Y = 270 - X.
            let delta = targetPosDeg - segmentCenterDeg;
            
            // Normalize delta to be positive 0-360
            if (delta < 0) delta += 360;
            
            // Add randomness in spin count (min 8 spins)
            const extraSpins = 360 * 8; 
            
            // Adjust for current existing rotation
            const currentMod = currentRotation % 360;
            
            // Distance from current position to the required delta
            let distance = delta - currentMod;
            if (distance < 0) distance += 360;
            
            const finalRotation = currentRotation + distance + extraSpins;
            
            // Apply CSS transform
            canvas.style.transition = "transform 5s cubic-bezier(0.15, 0.85, 0.35, 1.0)";
            canvas.style.transform = `rotate(${finalRotation}deg)`;
            
            currentRotation = finalRotation;

            // Wait for end
            setTimeout(() => {
                isSpinning = false;
                spinBtn.disabled = false;
                showModal(segments[targetIndex]);
            }, 5000);
        });

        // --- Modal & Confetti ---
        function showModal(text) {
            resultText.textContent = text;
            modalOverlay.classList.remove('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-95', 'translate-y-4');
            modalContent.classList.add('scale-100', 'translate-y-0');
            startConfetti();
        }

        function hideModal() {
            modalOverlay.classList.add('opacity-0', 'pointer-events-none');
            modalContent.classList.add('scale-95', 'translate-y-4');
            modalContent.classList.remove('scale-100', 'translate-y-0');
            stopConfetti();
        }

        closeModal.addEventListener('click', hideModal);

        // --- Confetti Engine ---
        let confettiReq;
        let particles = [];

        function startConfetti() {
            confettiCanvas.width = window.innerWidth;
            confettiCanvas.height = window.innerHeight;
            particles = [];
            const colors = ['#059669', '#DC2626', '#fbbf24', '#FFFFFF'];
            
            for(let i=0; i<100; i++) {
                particles.push({
                    x: Math.random() * confettiCanvas.width,
                    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
                    w: Math.random() * 8 + 4,
                    h: Math.random() * 8 + 4,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    vy: Math.random() * 3 + 2,
                    vx: Math.random() * 2 - 1,
                    spin: Math.random() * 0.2 - 0.1
                });
            }
            renderConfetti();
        }

        function renderConfetti() {
            confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            particles.forEach(p => {
                p.y += p.vy;
                p.x += p.vx;
                
                confettiCtx.fillStyle = p.color;
                confettiCtx.fillRect(p.x, p.y, p.w, p.h);
                
                if(p.y > confettiCanvas.height) {
                    p.y = -10;
                    p.x = Math.random() * confettiCanvas.width;
                }
            });
            confettiReq = requestAnimationFrame(renderConfetti);
        }

        function stopConfetti() {
            cancelAnimationFrame(confettiReq);
            confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }

        window.addEventListener('resize', () => {
             const newRect = canvas.getBoundingClientRect();
             // In a full implementation, redraw here
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
      

<nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50 pointer-events-none">
<div className="flex items-center gap-2 pointer-events-auto cursor-default">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-700 via-white to-red-600 flex items-center justify-center shadow-lg shadow-green-900/20">
<span className="text-black font-bold text-xs">KW</span>
</div>
<span className="font-medium tracking-tight text-sm text-zinc-400">Kuwait National Events</span>
</div>
<div className="pointer-events-auto">
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="flex flex-col items-center justify-center w-full max-w-4xl relative z-10">

<div className="text-center mb-12 space-y-2">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-amber-400 mb-4 animate-fade-in">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span>National Celebration Edition</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight">
                Spin the <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-white to-red-500">Legacy</span>
</h1>
<p className="text-lg text-zinc-500 max-w-md mx-auto font-light">
                Discover the rich history and celebrations of Kuwait. Spin the wheel to reveal a national treasure.
            </p>
</div>

<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 via-white/10 to-red-600/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

<div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-xl">
<div className="text-amber-400 filter drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
<iconify-icon height="48" icon="solar:map-arrow-down-bold" width="48"></iconify-icon>
</div>
</div>

<div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] rounded-full p-2 glass-panel shadow-2xl wheel-container">

<canvas className="w-full h-full rounded-full" height="864" id="wheelCanvas" width="864"></canvas>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-zinc-950 rounded-full border border-white/10 flex items-center justify-center shadow-2xl z-20">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 flex items-center justify-center border border-white/5">
<iconify-icon className="text-amber-400" height="28" icon="solar:crown-star-linear" width="28"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="mt-12 flex flex-col items-center gap-4">
<button className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold text-sm tracking-tight overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" id="spinBtn">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
<span className="relative flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Spin Wheel
                </span>
</button>
<div className="flex items-center gap-6 mt-4 text-xs text-zinc-600 font-medium">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-600"></div>
<span>Culture</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-600"></div>
<span>History</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white"></div>
<span>Religion</span>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-6 text-zinc-700 text-xs font-medium tracking-tight">
        Designed with precision. Respecting heritage.
    </footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 bg-black/60 backdrop-blur-sm" id="modalOverlay">
<div className="relative bg-zinc-900 border border-white/10 p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 text-center transform scale-95 transition-transform duration-300 translate-y-4" id="modalContent">

<div className="mb-6 flex justify-center">
<div className="w-16 h-16 rounded-full bg-green-900/20 flex items-center justify-center border border-green-500/20 text-green-500">
<iconify-icon icon="solar:cup-star-linear" width="32"></iconify-icon>
</div>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-1">Congratulations!</h2>
<p className="text-zinc-400 text-sm mb-6">The wheel has spoken.</p>

<div className="py-4 px-6 bg-zinc-950/50 rounded-xl border border-white/5 mb-8">
<p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 tracking-tight leading-relaxed" id="resultText">
                    ...
                </p>
</div>

<button className="w-full py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors" id="closeModal">
                Claim Reward
            </button>
</div>
</div>

<canvas className="fixed inset-0 pointer-events-none z-[90]" id="confettiCanvas"></canvas>


    </>
  );
}
