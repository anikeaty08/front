import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Data Definition
        const cardsData = [
            { bg: '#b92b27', text: 'text-white' },
            { bg: '#f6e7a2', text: 'text-slate-900' },
            { bg: '#f3ebd7', text: 'text-slate-900' },
            { bg: '#1c1c1c', text: 'text-white' },
            { bg: '#276f25', text: 'text-white' },
            { bg: '#5ff08e', text: 'text-slate-900' }, 
            { bg: '#a7f3df', text: 'text-slate-900' },
            { bg: '#2f91af', text: 'text-white' },
            { bg: '#3454d1', text: 'text-white' },
            { bg: '#6a1b82', text: 'text-white' },
            { bg: '#d430d4', text: 'text-white' }
        ];

        const container = document.getElementById('carousel');
        const sliderThumb = document.getElementById('slider-thumb');
        const N = cardsData.length;
        
        // State
        let progress = 5; // Start centered on Bright Neon Green
        let targetProgress = 5;
        let domElements = [];

        // SVG Generators
        const generatePattern = (id) => `
            <svg class="absolute top-0 left-0 w-full h-20 opacity-20 pointer-events-none rounded-t-[20px]" style="overflow: hidden;">
                <pattern id="pat-${id}" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
                    <line x1="0" y1="9" x2="10" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pat-${id})" />
            </svg>
        `;

        const generateScribble = () => `
            <svg class="w-14 h-14 stroke-current fill-none opacity-90 drop-shadow-sm" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 100 100">
                <path d="M70 25 L35 75" />
                <path d="M30 65 Q 45 90 75 55" />
            </svg>
        `;

        // Initialize DOM Elements
        cardsData.forEach((data, index) => {
            const el = document.createElement('div');
            el.className = `absolute w-[260px] h-[300px] rounded-[20px] p-6 flex flex-col justify-between cursor-grab active:cursor-grabbing card-surface transition-colors duration-300 ${data.text}`;
            el.style.backgroundColor = data.bg;

            el.innerHTML = `
                ${generatePattern(index)}
                <div class="relative z-10 flex-1 flex flex-col justify-end">
                    <h3 class="text-lg font-medium tracking-tight leading-snug mb-8">Interface Craft<br>Library Card</h3>
                    
                    <div class="flex justify-between items-end w-full relative">
                        <div class="flex flex-col gap-0.5 z-10">
                            <span class="text-xs uppercase tracking-widest opacity-60 font-medium">Author</span>
                            <span class="text-base font-medium">Josh Puckett</span>
                        </div>
                        
                        <div class="absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-3 z-0">
                            ${generateScribble()}
                        </div>
                        
                        <div class="flex flex-col gap-0.5 text-right z-10">
                            <span class="text-xs uppercase tracking-widest opacity-60 font-medium">Issued On</span>
                            <span class="text-base font-medium">01/12/26</span>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(el);
            domElements.push(el);
        });

        // Core Animation Loop
        function render() {
            // Spring physics interpolation
            progress += (targetProgress - progress) * 0.08;

            domElements.forEach((el, i) => {
                // Calculate conceptual position relative to center (0)
                let relPos = ((i - progress) % N + N) % N;
                // Shift range to roughly -5 to +5 for centering
                if (relPos > N / 2) relPos -= N;

                const absPos = Math.abs(relPos);
                const sign = Math.sign(relPos);

                // Optimization: fully hide cards at the back of the carousel loop
                if (absPos > 4.5) {
                    el.style.opacity = 0;
                    el.style.pointerEvents = 'none';
                    return;
                }

                // Mathematics for physical layout matching requirements
                const scale = Math.max(0.7, 1 - absPos * 0.15); // 1.0 -> 0.85 -> 0.7
                
                // Curved translation for overlapping depth effect
                const translateX = sign * (135 * absPos - 12 * absPos * absPos);
                const rotateY = relPos * -12; // Slight 3D rotation facing inward
                
                const zIndex = 100 - Math.round(absPos * 10);
                let opacity = Math.max(0, 1 - (absPos * 0.18)); // Smooth fadeout for edges

                // Center Focus Styling
                if (absPos < 0.2) {
                    el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15)';
                    el.style.filter = 'brightness(1.02)';
                } else {
                    el.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                    el.style.filter = 'brightness(0.95)';
                    opacity *= 0.75; // Side cards slightly faded as requested
                }

                // Apply Hardware Accelerated Transforms
                el.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
                el.style.zIndex = zIndex;
                el.style.opacity = opacity;
                el.style.pointerEvents = absPos < 0.5 ? 'auto' : 'none';
            });

            // Update bottom slider visual representation based on scroll modulo
            if (sliderThumb) {
                const fraction = progress - Math.floor(progress);
                const travelDist = 128 - 52; // Width of pill minus width of thumb/padding
                sliderThumb.style.transform = `translateX(${fraction * travelDist}px)`;
            }

            requestAnimationFrame(render);
        }
        
        // Start Render Loop
        requestAnimationFrame(render);

        // Interaction Logic (Drag & Swipe)
        let isDragging = false;
        let startX = 0;
        let startProgress = 0;

        const handleStart = (e) => {
            isDragging = true;
            startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
            startProgress = targetProgress;
            container.style.cursor = 'grabbing';
        };

        const handleMove = (e) => {
            if (!isDragging) return;
            const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
            const deltaX = startX - currentX;
            targetProgress = startProgress + (deltaX * 0.008); // Drag sensitivity
        };

        const handleEnd = () => {
            if (!isDragging) return;
            isDragging = false;
            container.style.cursor = 'grab';
            // Snap physics to nearest full card
            targetProgress = Math.round(targetProgress);
        };

        // Event Listeners
        container.addEventListener('mousedown', handleStart);
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);

        container.addEventListener('touchstart', handleStart, { passive: true });
        window.addEventListener('touchmove', handleMove, { passive: true });
        window.addEventListener('touchend', handleEnd);

        // Navigation Buttons
        document.getElementById('btn-prev').addEventListener('click', () => {
            targetProgress -= 1;
        });
        document.getElementById('btn-next').addEventListener('click', () => {
            targetProgress += 1;
        });

        // Keyboard Support
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') targetProgress -= 1;
            if (e.key === 'ArrowRight') targetProgress += 1;
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="relative w-full h-[420px] flex items-center justify-center carousel-container touch-pan-y" id="carousel">

</main>

<footer className="flex flex-col items-center mt-8 z-10 w-full px-6">

<div className="mb-10 text-gray-200/80 pointer-events-none">
<svg fill="none" height="90" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14" viewbox="0 0 200 100" width="220">
<path d="M 50,50 C 20,20 20,80 50,50 C 80,20 120,80 150,50 C 180,20 180,80 150,50 C 120,20 80,80 50,50 Z"></path>
</svg>
</div>

<div className="flex items-center gap-5 mb-8">

<div className="bg-gray-200/50 p-1.5 rounded-full flex items-center gap-1 backdrop-blur-md">
<button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="square" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="triangle" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="circle" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-900 transition-transform active:scale-95">
<i className="w-4 h-4" data-lucide="pen-tool" strokeWidth="1.5"></i>
</button>
</div>

<div className="w-32 h-[52px] bg-[#5ff08e] rounded-full relative shadow-inner flex items-center px-1.5 overflow-hidden">
<div className="w-10 h-10 border-[4px] border-[#5ff08e] bg-white rounded-full shadow-sm absolute left-1.5 will-change-transform" id="slider-thumb"></div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="w-[56px] h-[56px] bg-gray-200/60 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-all active:scale-90 backdrop-blur-sm" id="btn-prev">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="h-[56px] w-[160px] bg-[#111111] hover:bg-black rounded-full flex items-center justify-center text-white transition-all active:scale-[0.98] shadow-lg group" id="btn-next">
<i className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</footer>


    </>
  );
}
