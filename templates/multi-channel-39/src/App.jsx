import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Elements
        const dial = document.getElementById('dial');
        const knob = document.getElementById('knob');
        const activeArc = document.getElementById('active-arc');
        const cards = document.querySelectorAll('.floating-card');
        const labels = document.querySelectorAll('.dial-text'); // SVG text paths

        // Constants for Arc Geometry
        const centerX = 170;
        const centerY = 150;
        const radius = 150;
        
        let isDragging = false;
        let currentProgress = 0.5;

        // Parallax Logic
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) * 0.015; // Subtle multiplier
            const y = (window.innerHeight / 2 - e.clientY) * 0.015;
            
            // Apply to CSS variables on body so all cards inherit
            document.body.style.setProperty('--px', `${x}px`);
            document.body.style.setProperty('--py', `${y}px`);
        });

        // Helper to update UI
        function updateUI(progress) {
            currentProgress = Math.max(0, Math.min(1, progress));
            
            // 1. Update Arc
            const totalLength = Math.PI * radius;
            const offset = totalLength * (1 - currentProgress);
            activeArc.style.strokeDashoffset = offset;

            // 2. Update Knob Position
            const angle = Math.PI * (1 - currentProgress);
            const x = centerX + radius * Math.cos(angle);
            const y = centerY - radius * Math.sin(angle);
            knob.style.transform = `translate(${x}px, ${y}px)`;

            // 3. Update Images
            const blurAmount = 12 * (1 - currentProgress);
            const grayscaleAmount = 100 * (1 - currentProgress);
            const opacityAmount = 0.3 + (0.7 * currentProgress);

            cards.forEach(card => {
                card.style.filter = `blur(${blurAmount}px) grayscale(${grayscaleAmount}%)`;
                card.style.opacity = opacityAmount;
            });

            // 4. Update SVG Labels
            labels.forEach((label, index) => {
                const labelPos = index / (labels.length - 1);
                const distance = Math.abs(currentProgress - labelPos);
                
                if (distance < 0.15) {
                    label.setAttribute('class', 'dial-text fill-slate-900 font-semibold');
                } else {
                    label.setAttribute('class', 'dial-text fill-slate-300 font-medium');
                }
            });
        }

        // Input Handlers
        function handleStart(e) {
            isDragging = true;
            document.body.style.cursor = 'grabbing';
            handleMove(e);
        }

        function handleEnd() {
            isDragging = false;
            document.body.style.cursor = 'default';
        }

        function handleMove(e) {
            if (!isDragging) return;
            
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            const rect = dial.getBoundingClientRect();
            const dialCenterX = rect.left + centerX;
            const dialCenterY = rect.top + centerY;

            const dx = clientX - dialCenterX;
            const dy = clientY - dialCenterY;

            let angle = Math.atan2(-dy, dx);
            if (angle < 0) angle = 0;
            
            let progress = 1 - (angle / Math.PI);
            progress = Math.max(0, Math.min(1, progress));

            updateUI(progress);
        }

        // Initial render
        updateUI(0.5);

        // Listeners
        dial.addEventListener('mousedown', handleStart);
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);

        dial.addEventListener('touchstart', handleStart);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('touchend', handleEnd);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" id="canvas">

<div className="floating-card absolute top-[10%] left-[-5%] md:left-[5%] w-48 h-56 md:w-64 md:h-72 rounded-xl overflow-hidden shadow-2xl bg-gray-100" style={{-Rot: '-6deg'}}>
<img alt="T-Shirt" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
<i className="w-3 h-3 text-white stroke-[1.5]" data-lucide="video"></i>
<span className="text-white text-xs font-medium tracking-wide">TikTok</span>
</div>
</div>

<div className="floating-card absolute top-[5%] right-[-10%] md:right-[5%] w-56 h-48 md:w-72 md:h-60 rounded-xl overflow-hidden shadow-2xl bg-gray-100" style={{-Rot: '4deg'}}>
<img alt="Furniture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
<i className="w-3 h-3 text-white stroke-[1.5]" data-lucide="shopping-bag"></i>
<span className="text-white text-xs font-medium tracking-wide">eBay</span>
</div>
</div>

<div className="floating-card absolute top-[45%] left-[-8%] md:left-[10%] w-52 h-40 md:w-64 md:h-48 rounded-xl overflow-hidden shadow-2xl bg-gray-100" style={{-Rot: '3deg'}}>
<img alt="Shoes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
<i className="w-3 h-3 text-white stroke-[1.5]" data-lucide="package"></i>
<span className="text-white text-xs font-medium tracking-wide">Amazon</span>
</div>
</div>

<div className="floating-card absolute top-[35%] right-[-5%] md:right-[2%] w-64 h-48 md:w-80 md:h-64 rounded-xl overflow-hidden shadow-2xl bg-gray-100" style={{-Rot: '-2deg'}}>
<img alt="Laptop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
<i className="w-3 h-3 text-white stroke-[1.5]" data-lucide="target"></i>
<span className="text-white text-xs font-medium tracking-wide">Target</span>
</div>
</div>

<div className="floating-card absolute bottom-[10%] left-[5%] md:left-[20%] w-60 h-40 md:w-72 md:h-48 rounded-xl overflow-hidden shadow-2xl bg-gray-100" style={{-Rot: '-3deg'}}>
<img alt="TV" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
<i className="w-3 h-3 text-white stroke-[1.5]" data-lucide="store"></i>
<span className="text-white text-xs font-medium tracking-wide">Walmart</span>
</div>
</div>

<div className="floating-card absolute bottom-[-5%] right-[5%] md:right-[15%] w-48 h-72 md:w-56 md:h-80 rounded-xl overflow-hidden shadow-2xl bg-gray-100" style={{-Rot: '5deg'}}>
<img alt="Fitness" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
<i className="w-3 h-3 text-white stroke-[1.5]" data-lucide="camera"></i>
<span className="text-white text-xs font-medium tracking-wide">Instagram</span>
</div>
</div>
</div>

<main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 w-full max-w-7xl mx-auto pt-20">

<div className="relative w-[340px] h-[170px] mb-8 no-select dial-container group cursor-grab active:cursor-grabbing" id="dial">
<svg className="w-full h-full overflow-visible" viewbox="0 0 340 170">

<defs>
<lineargradient id="arcGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#10b981'}}></stop> 
<stop offset="100%" style={{stopColor: '#3b82f6'}}></stop> 
</lineargradient>

<path d="M 20,150 A 150,150 0 0,1 320,150" id="textPathCurve"></path>
</defs>

<path d="M 20,150 A 150,150 0 0,1 320,150" fill="none" stroke="#e2e8f0" stroke-dasharray="6 6" strokeLinecap="round" strokeWidth="2"></path>

<path d="M 20,150 A 150,150 0 0,1 320,150" fill="none" id="active-arc" stroke="url(#arcGradient)" stroke-dasharray="471" stroke-dashoffset="471" strokeLinecap="round" strokeWidth="3"></path>

<text className="text-[10px] md:text-xs font-medium uppercase tracking-widest pointer-events-none" dy="-15">
<textpath className="dial-text fill-slate-300" href="#textPathCurve" startoffset="0%" text-anchor="start">Target</textpath>
<textpath className="dial-text fill-slate-300" href="#textPathCurve" startoffset="25%" text-anchor="middle">TikTok</textpath>
<textpath className="dial-text fill-slate-900 font-bold" href="#textPathCurve" startoffset="50%" text-anchor="middle">Instagram</textpath>
<textpath className="dial-text fill-slate-300" href="#textPathCurve" startoffset="75%" text-anchor="middle">eBay</textpath>
<textpath className="dial-text fill-slate-300" href="#textPathCurve" startoffset="100%" text-anchor="end">Amazon</textpath>
</text>
</svg>

<div className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center justify-center transform transition-transform active:scale-110 z-20 will-change-transform" id="knob" style={{transform: 'translate(20px, 150px)'}}>
<div className="pointer-events-none">
<i className="w-4 h-4 text-slate-500 stroke-[1.5]" data-lucide="hand"></i>
</div>
</div>
</div>

<div className="text-center max-w-4xl mx-auto z-20 pointer-events-none select-none">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Unlock 
                <span className="animate-gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 pb-2">Visibility</span><br/>
                Across All Channels.
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
                Turn your product data into real visibility across ads, marketplaces, and AI channels with our industry-leading solutions.
            </p>
</div>
</main>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-slate-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="mouse"></i>
</div>


    </>
  );
}
