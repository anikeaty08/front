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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



    (function() {
      const wall = document.getElementById('photo-wall');
      const frameContainer = document.getElementById('anchor-frame-container');
      const anchorImage = document.getElementById('anchor-image');
      const anchorLabel = document.getElementById('anchor-label');
      const tiles = document.querySelectorAll('.photo-tile');
      
      let activeTile = null;
      let isAnimating = false;

      // Pan animation keyframes logic handled via CSS class, 
      // but we need to reset it on change to restart the "Cinematic" feel
      function resetPanAnimation(element) {
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = 'cinematicPan 20s ease-in-out infinite alternate';
      }

      tiles.forEach(tile => {
        // Desktop Hover Interaction
        tile.addEventListener('mouseenter', handleInteraction);
        // Mobile Tap Interaction
        tile.addEventListener('click', handleInteraction);
      });

      function handleInteraction(e) {
        // Prevent spamming
        if (isAnimating) return;
        
        const tile = e.currentTarget;
        if (tile === activeTile) return;

        // Visual feedback for interaction immediately
        if (activeTile) {
          activeTile.classList.remove('ghost');
        }
        activeTile = tile;
        tile.classList.add('ghost');

        // Prepare data
        const newSrc = tile.getAttribute('data-src');
        const labelText = tile.getAttribute('data-type');
        const img = tile.querySelector('img');
        
        // 1. Create the flyer element (clone of the tile image)
        const rect = img.getBoundingClientRect();
        const flyer = document.createElement('img');
        flyer.src = newSrc;
        flyer.classList.add('flyer');
        flyer.style.width = rect.width + 'px';
        flyer.style.height = rect.height + 'px';
        flyer.style.top = rect.top + 'px';
        flyer.style.left = rect.left + 'px';
        flyer.style.objectFit = 'cover';
        
        // Match rotation of source
        const rotation = getComputedStyle(tile).transform;
        if (rotation !== 'none') {
             flyer.style.transform = rotation;
        }

        document.body.appendChild(flyer);
        
        // 2. Calculate destination
        // We target the anchor image inside the frame
        const destRect = anchorImage.getBoundingClientRect();
        
        // Force layout for transition to work
        requestAnimationFrame(() => {
          isAnimating = true;
          
          // Move flyer to destination
          // We use transform to move it, calculating the delta
          const deltaX = destRect.left + (destRect.width/2) - (rect.left + (rect.width/2));
          const deltaY = destRect.top + (destRect.height/2) - (rect.top + (rect.height/2));
          
          // Calculate scale to match destination height (approx)
          const scale = destRect.height / rect.height;

          flyer.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
          flyer.style.opacity = '0.8'; // Slight fade as it merges
          flyer.style.borderRadius = '14px'; // Match frame radius
          
          // 3. When animation ends
          setTimeout(() => {
            // Update the actual frame
            anchorImage.src = newSrc;
            if (anchorLabel) anchorLabel.textContent = labelText;
            
            // Trigger a flash/pulse on the frame to sell the "arrival"
            anchorImage.classList.remove('anchor-frame-enter');
            void anchorImage.offsetWidth; // reflow
            anchorImage.classList.add('anchor-frame-enter');
            
            // Reset the cinematic pan
            resetPanAnimation(anchorImage);

            // Cleanup flyer
            flyer.remove();
            isAnimating = false;
            
          }, 600); // Match CSS transition time
        });
      }

    })();
  


        (function() {
          const slider = document.getElementById('proximity-slider');
          const screenDiv = document.getElementById('prox-screen');
          const statusText = document.getElementById('prox-status-text');
          const activeIndicator = document.getElementById('prox-active-indicator');
          const radarContainer = document.getElementById('radar-container');
          
          function updateFrameState() {
            const val = parseInt(slider.value);
            
            // 1. Update Slider Gradient Track
            const percentage = val;
            let trackColor = '#cbd5e1';
            if (val > 70) trackColor = '#f43f5e'; // rose-500
            else if (val > 30) trackColor = '#94a3b8'; // slate-400
            
            slider.style.background = `linear-gradient(to right, ${trackColor} 0%, ${trackColor} ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;
            
            // 2. Logic for States
            screenDiv.classList.remove('prox-state-idle', 'prox-state-detecting', 'prox-state-active');
            
            if (val < 30) {
              // IDLE
              screenDiv.classList.add('prox-state-idle');
              statusText.textContent = "Idle • Low Power";
              statusText.className = "text-[9px] font-bold uppercase tracking-widest text-white/50 bg-black/40 px-2 py-1 rounded-full border border-white/5 backdrop-blur-md";
              activeIndicator.classList.add('hidden');
              radarContainer.classList.remove('radar-active');
              radarContainer.style.opacity = '0';
            } 
            else if (val >= 30 && val < 70) {
              // DETECTING
              screenDiv.classList.add('prox-state-detecting');
              statusText.textContent = "Detecting...";
              statusText.className = "text-[9px] font-bold uppercase tracking-widest text-white/80 bg-black/40 px-2 py-1 rounded-full border border-white/10 backdrop-blur-md";
              activeIndicator.classList.add('hidden');
              radarContainer.classList.add('radar-active');
              radarContainer.style.opacity = '1';
            } 
            else {
              // ACTIVE
              screenDiv.classList.add('prox-state-active');
              statusText.textContent = "Motion Active";
              statusText.className = "text-[9px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded-full border border-emerald-500/20 backdrop-blur-md";
              activeIndicator.classList.remove('hidden');
              radarContainer.classList.remove('radar-active'); // Stop ripple when fully engaged or keep it? Let's stop it as "connection made"
              radarContainer.style.opacity = '0';
            }
          }
          
          slider.addEventListener('input', updateFrameState);
          // Init
          updateFrameState();
        })();
      
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
      

<nav className="fixed bg-white/80 w-full z-50 border-white/20 border-b top-0 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-1" href="#">
<svg className="lucide lucide-frame w-5 h-5" data-lucide="frame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="6" y2="6"></line><line x1="22" x2="2" y1="18" y2="18"></line><line x1="6" x2="6" y1="2" y2="22"></line><line x1="18" x2="18" y1="2" y2="22"></line></svg>
            Lumina
          </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#demo">
              Demo
            </a>
<a className="hover:text-slate-900 transition-colors" href="#mmwave-proximity">
              Tech
            </a>
<a className="hover:text-slate-900 transition-colors" href="#moving-portrait-wall">
              Gallery
            </a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">
              Pricing
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-slate-600 hover:text-slate-900">
            Sign in
          </button>
<button className="bg-slate-900 text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10">
            Create a Gift
          </button>
</div>
</div>
</nav>

<section className="md:py-32 overflow-hidden bg-gradient-to-b from-[#fafafa] via-[#f5f0f0] to-[#fafafa] w-full pt-24 pb-24 relative" id="cinematic-anchor-frame-wall">

<div className="absolute top-0 left-0 w-[800px] h-[800px] bg-rose-100/30 rounded-full blur-[120px] mix-blend-multiply pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] mix-blend-multiply pointer-events-none translate-x-1/4 translate-y-1/4"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">

<div className="fade-up text-center max-w-4xl mr-auto mb-16 ml-auto visible">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-medium mb-6 animate-pulse">
<svg className="lucide lucide-gift w-3 h-3" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
          Gift-ready for the holidays
        </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight mb-6">
          The gift that moves
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-orange-400">
            memories.
          </span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-slate-500 max-w-2xl mr-auto mb-10 ml-auto">
          Turn everyday photos into living moments. The first AI digital frame
          designed specifically for Mom, Dad, and everyone you miss.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-slate-900 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 group">
            Create a Gift
            <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

<div className="w-full lg:w-3/5 order-2 lg:order-1">
<div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6 p-2" id="photo-wall">

<div className="photo-tile break-inside-avoid relative group cursor-pointer bg-white p-2 rounded-sm shadow-sm hover:shadow-lg rotate-1 transition-all duration-300" data-src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&amp;q=80" data-type="Family Portrait">
<div className="relative overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-100">
<img alt="Family" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
</div>

<div className="photo-tile break-inside-avoid relative group cursor-pointer bg-white p-2 rounded-sm shadow-sm hover:shadow-lg -rotate-1 transition-all duration-300" data-src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&amp;q=80" data-type="Generations">
<div className="relative overflow-hidden aspect-square bg-slate-100 border border-slate-100">
<img alt="Generations" className="w-full h-full object-cover grayscale contrast-110" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&amp;q=80"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide text-slate-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Restored</div>
</div>
</div>

<div className="photo-tile break-inside-avoid relative group cursor-pointer bg-white p-2 rounded-sm shadow-sm hover:shadow-lg rotate-2 transition-all duration-300" data-src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&amp;q=80" data-type="Travel Memories">
<div className="relative overflow-hidden aspect-[3/4] bg-slate-100 border border-slate-100">
<img alt="Travel" className="w-full h-full object-cover sepia-[0.3]" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&amp;q=80"/>
</div>
</div>

<div className="photo-tile break-inside-avoid relative group cursor-pointer bg-white p-2 rounded-sm shadow-sm hover:shadow-lg -rotate-2 transition-all duration-300" data-src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&amp;q=80" data-type="Portrait">
<div className="relative overflow-hidden aspect-[2/3] bg-slate-100 border border-slate-100">
<img alt="Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&amp;q=80"/>
</div>
</div>

<div className="photo-tile break-inside-avoid relative group cursor-pointer bg-white p-2 rounded-sm shadow-sm hover:shadow-lg rotate-1 transition-all duration-300" data-src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&amp;q=80" data-type="Candid Moment">
<div className="relative overflow-hidden aspect-square bg-slate-100 border border-slate-100">
<img alt="Candid" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-2/5 order-1 lg:order-2 lg:sticky lg:top-32 lg:h-[calc(100vh-200px)] flex flex-col items-center justify-center pointer-events-none">

<div className="relative w-full max-w-md mx-auto perspective-distant pointer-events-auto" id="anchor-frame-container">

<div className="relative bg-[#111] rounded-[16px] md:rounded-[20px] shadow-2xl frame-shadow transform transition-transform duration-700 hover:scale-[1.02]">

<div className="absolute inset-0 border-[16px] md:border-[24px] border-[#1a1a1a] rounded-[16px] md:rounded-[20px] pointer-events-none z-20 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">

<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
</div>

<div className="aspect-[4/5] bg-black rounded-[14px] md:rounded-[18px] overflow-hidden relative z-10">

<img alt="Active Frame Content" className="w-full h-full object-cover transition-transform duration-[20s] ease-in-out scale-100 animate-slow-pan" id="anchor-image" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 z-30 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 z-30 pointer-events-none mix-blend-overlay"></div>

<div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-30 flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
<span className="text-[10px] md:text-xs font-medium text-white/80 tracking-widest uppercase backdrop-blur-md bg-black/20 px-2 py-1 rounded border border-white/10" id="anchor-label">
                  Family Portrait
                </span>
</div>

<div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] z-20 pointer-events-none"></div>
</div>
</div>

<div className="absolute -bottom-10 left-10 right-10 h-4 bg-black/20 blur-xl rounded-[100%] z-0 transform rotate-x-60"></div>
</div>

<div className="mt-12 text-center pointer-events-auto">
<button className="bg-slate-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/10 inline-flex items-center gap-2 group">
<svg className="lucide lucide-sparkles text-amber-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Try AI Motion Demo
          </button>
<div className="mt-4">
<a className="text-xs font-semibold text-slate-500 uppercase tracking-widest hover:text-slate-900 transition-colors border-b border-transparent hover:border-slate-300 pb-0.5" href="#how-it-works">How it works</a>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="bg-white pt-24 pb-24 border-b border-slate-100" id="finder">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-12">
<h2 className="md:text-4xl flex items-center justify-center gap-2.5 text-3xl font-medium text-slate-900 tracking-tight font-playfair mb-4">
  Who are you <span className="text-rose-500 italic">gifting</span> to?
  
</h2>
<p className="text-slate-500">
            We'll tailor the features and preview the experience just for them.
          </p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="gift-btn active ring-offset-2 hover:bg-white transition-all text-sm font-medium bg-slate-50 border-slate-200 border ring-slate-900 ring-2 rounded-xl pt-3 pr-6 pb-3 pl-6" onclick="selectGiftTarget(this, 'mom')">
            Mom
          </button>
<button className="gift-btn hover:bg-slate-50 transition-all text-sm font-medium text-slate-600 bg-white border-slate-200 border rounded-xl pt-3 pr-6 pb-3 pl-6" onclick="selectGiftTarget(this, 'dad')">
            Dad
          </button>
<button className="gift-btn bg-white border border-slate-200 px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all text-slate-600" onclick="selectGiftTarget(this, 'partner')">
            Partner
          </button>
<button className="gift-btn bg-white border border-slate-200 px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all text-slate-600" onclick="selectGiftTarget(this, 'grandparents')">
            Grandparents
          </button>
<button className="gift-btn bg-white border border-slate-200 px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all text-slate-600" onclick="selectGiftTarget(this, 'long-distance')">
            Long Distance
          </button>
</div>

<div className="bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row min-h-[600px] transition-all duration-300" id="gift-output">

<div className="w-full md:w-1/2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col relative bg-slate-50/30">
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900 mb-1">
                Gift Mode
              </h3>
<p className="text-sm text-slate-500">
                Choose how you want them to receive it.
              </p>
</div>

<div className="grid grid-cols-1 gap-3 mb-8">

<div className="cursor-pointer relative p-4 rounded-xl border border-slate-200 bg-white ring-2 ring-slate-900 shadow-sm transition-all group" id="mode-card-hands-on" onclick="selectGiftMode('hands-on')">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<svg className="lucide lucide-package-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 2 2 4-4"></path>
<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
<path d="m16.5 9.4-9-5.19"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
                    Hands-on Gifting
                  </span>
<span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    In-Person
                  </span>
</div>
<p className="text-xs text-slate-500 mb-3">
                  Scan a QR to preload photos + a note.
                </p>
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded">
                    Preload in minutes
                  </span>
<span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded">
                    Instant surprise
                  </span>
</div>
</div>

<div className="cursor-pointer relative p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-all group" id="mode-card-remote" onclick="selectGiftMode('remote')">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<svg className="lucide lucide-send" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
                    Remote Gifting
                  </span>
<span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    Long Distance
                  </span>
</div>
<p className="text-xs text-slate-500 mb-3">
                  Send a unique gift code from anywhere.
                </p>
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded">
                    Code delivery
                  </span>
<span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded">
                    Enter once
                  </span>
</div>
</div>
</div>

<div className="mb-auto">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                How it works
              </h4>
<div className="space-y-4 relative pl-2">

<div className="absolute left-[15px] top-2 bottom-4 w-px bg-slate-200"></div>
<div className="relative flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold z-10 shadow-sm">
                    1
                  </div>
<div className="text-sm text-slate-700 font-medium" id="step-1-text">
                    Choose photos + write a note
                  </div>
</div>
<div className="relative flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold z-10">
                    2
                  </div>
<div className="text-sm text-slate-600" id="step-2-text">
                    Scan QR to preload
                  </div>
</div>
<div className="relative flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold z-10">
                    3
                  </div>
<div className="text-sm text-slate-600" id="step-3-text">
                    Plug in → surprise plays
                  </div>
</div>
</div>
</div>

<div className="flex gap-4 border-t border-slate-100 pt-6 mb-6">
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<svg className="lucide lucide-zap text-amber-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
                Fast setup
              </div>
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<svg className="lucide lucide-lock text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
                Privacy-first
              </div>
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<svg className="lucide lucide-users text-blue-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
                Families
              </div>
</div>

<div className="mt-4 sticky bottom-0">
<button className="w-full bg-slate-900 text-white text-sm font-medium py-3.5 rounded-xl hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2">
                Create This Gift
              </button>
<div className="text-center mt-3">
<a className="text-xs font-medium text-slate-500 underline decoration-slate-300 hover:text-slate-800" href="#">
                  See how it works
                </a>
</div>
</div>
</div>

<div className="w-full md:w-1/2 p-8 md:p-10 bg-white relative flex flex-col items-center justify-center">
<div className="w-full flex justify-between items-center mb-8 px-4">
<h3 className="text-lg font-semibold tracking-tight">Preview</h3>
<span className="text-xs text-slate-400 font-medium">
                See what they'll see
              </span>
</div>

<div className="relative group cursor-pointer w-full max-w-[280px] mx-auto aspect-[4/5] rounded-[24px] bg-[#f0f0f0] shadow-2xl p-3 border border-slate-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500">

<div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-inner">
<img alt="Preview" className="w-full h-full object-cover frame-image animate-breathe" id="frame-preview-img" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60 pointer-events-none"></div>

<div className="absolute bottom-4 left-4 right-4">
<div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2 text-white/90">
<div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-[10px] font-medium tracking-wide uppercase" id="frame-relationship">
                      From: Son → To: Mom
                    </span>
<span className="text-[10px] text-white/60 ml-auto hidden" id="preview-action-text">
                      Smile
                    </span>
</div>
</div>
</div>

<div className="absolute -top-3 -right-3 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg transform rotate-3 z-10">
                Gift-ready
              </div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-white/50 shadow-xl rounded-xl p-3 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scale-95 group-hover:scale-100 duration-300" id="preview-hint">
<div className="p-2 bg-slate-100 rounded-lg" id="preview-hint-icon">

<svg className="lucide lucide-qr-code text-slate-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="5" rx="1" width="5" x="3" y="3"></rect>
<rect height="5" rx="1" width="5" x="16" y="3"></rect>
<rect height="5" rx="1" width="5" x="3" y="16"></rect>
<path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
<path d="M21 21v.01"></path>
<path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
<path d="M3 12h.01"></path>
<path d="M12 3h.01"></path>
<path d="M12 16v.01"></path>
<path d="M16 12h1"></path>
<path d="M21 12v.01"></path>
<path d="M12 21v-1"></path>
</svg>
</div>
<span className="text-[10px] font-bold text-slate-900 whitespace-nowrap" id="preview-hint-text">
                  Scan QR to preload
                </span>
</div>
</div>

<div className="mt-8">
<div className="flex justify-center gap-2">
<button className="emotion-btn hover:border-slate-300 hover:bg-white transition-all active:scale-95 text-xs font-medium text-slate-600 bg-slate-50 border-slate-200 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" onclick="triggerEmotion('smile')">
                  Smile
                </button>
<button className="emotion-btn px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-white transition-all active:scale-95" onclick="triggerEmotion('wave')">
                  Wave
                </button>
<button className="emotion-btn px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-white transition-all active:scale-95" onclick="triggerEmotion('hug')">
                  Hug
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#fafafa] to-white py-24 md:py-32" id="mmwave-proximity">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-6">
<svg className="lucide lucide-radio-tower" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19.1"></path></svg>
              Presence Sensing
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 font-playfair">
              It plays when you’re <span className="italic text-rose-500">near</span>.
            </h2>
<p className="text-lg text-slate-600 font-medium mb-2 leading-relaxed">
              Built-in mmWave proximity sensing wakes the frame the moment you walk up.
            </p>
<p className="text-slate-500 mb-8 leading-relaxed">
              A tiny millimeter-wave sensor detects sub-millimeter movement, distinguishing between a person approaching and a pet passing by—so motion starts at the perfect moment.
            </p>

<div className="space-y-4 mb-10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
<svg className="lucide lucide-sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-sm font-medium text-slate-800">Feels magical in the room</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
<svg className="lucide lucide-hand-metal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"></path><path d="M14 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3.1"></path><path d="M10 12.5V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.6"></path><path d="M6 11v11a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-6.9c0-1.1-.9-2-2-2v2"></path></svg>
</div>
<span className="text-sm font-medium text-slate-800">No buttons. No tapping.</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
<svg className="lucide lucide-battery-charging" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path><path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path><path d="m11 7-3 5h4l-3 5"></path><line x1="22" x2="22" y1="11" y2="13"></line></svg>
</div>
<span className="text-sm font-medium text-slate-800">Saves power when you’re away</span>
</div>
</div>

<div className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100 max-w-sm">
<svg className="lucide lucide-shield-check text-slate-400 mt-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="text-[11px] text-slate-500 font-medium leading-tight">Privacy-friendly: The sensor detects presence via radar waves, not a camera. It cannot identify faces or record video.</p>
</div>
<button className="mt-8 text-sm font-semibold text-slate-900 border-b border-slate-200 hover:border-slate-900 pb-0.5 transition-colors" onclick="document.getElementById('proximity-slider').focus()">
              See it in action
            </button>
</div>

<div className="order-1 lg:order-2 flex flex-col items-center">

<div className="relative w-full max-w-md mx-auto aspect-[4/5] md:aspect-square bg-slate-100/50 rounded-3xl flex items-center justify-center mb-8 border border-slate-100 shadow-inner overflow-hidden select-none">

<div className="absolute bottom-0 w-3/4 h-2 bg-slate-300/50 rounded-[100%] blur-md transform translate-y-1"></div>

<div className="relative w-64 h-80 bg-slate-900 rounded-xl shadow-2xl transition-transform duration-300 transform perspective-1000 rotate-y-6" id="prox-frame">

<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center z-0 transition-opacity duration-300" id="radar-container">
<div className="radar-ring"></div>
<div className="radar-ring"></div>
<div className="radar-ring"></div>
</div>

<div className="absolute inset-0 border-[12px] border-[#222] rounded-xl z-20 shadow-[inset_0_0_10px_rgba(0,0,0,1)]"></div>

<div className="w-full h-full bg-black rounded-[8px] overflow-hidden relative z-10 prox-state-idle" id="prox-screen">
<img alt="Wedding Couple" className="w-full h-full object-cover" id="prox-frame-content" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-30 pointer-events-none"></div>

<div className="absolute bottom-4 left-0 right-0 flex justify-center z-40 transition-opacity duration-300" id="prox-status-container">
<span className="text-[9px] font-bold uppercase tracking-widest text-white/50 bg-black/40 px-2 py-1 rounded-full border border-white/5 backdrop-blur-md" id="prox-status-text">Idle • Low Power</span>
</div>
</div>
</div>
</div>

<div className="w-full max-w-sm px-4">
<div className="flex justify-between items-end mb-3">
<label className="text-sm font-semibold text-slate-900">Try it</label>
<span className="text-xs text-rose-500 font-medium animate-pulse hidden" id="prox-active-indicator">Motion Active</span>
</div>

<div className="relative h-8 flex items-center mb-1">
<input aria-label="Distance from frame" className="w-full z-20 relative" id="proximity-slider" max="100" min="0" type="range" value="0"/>
</div>
<div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-6">
<span>Across the room</span>
<span>Right in front</span>
</div>
<p className="text-xs text-slate-500 text-center bg-slate-50 py-2 rounded-lg border border-slate-100">
                Move the control closer to see how the frame wakes up automatically.
              </p>
</div>

<div className="mt-8 flex items-center justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-footprints text-slate-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 11 3.8 11 8c0 1.25-.51 2-1.5 2.52-1.25.64-2.5 1.55-2.5 3.52V18"></path><path d="M14 16v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C8.63 2 7 3.8 7 8c0 1.25.51 2 1.5 2.52 1.25.64 2.5 1.55 2.5 3.52V18"></path></svg>
</div>
<span className="text-[9px] font-bold text-slate-400 uppercase">Walk Up</span>
</div>
<div className="w-8 h-px bg-slate-300"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-waves text-slate-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<span className="text-[9px] font-bold text-slate-400 uppercase">Detect</span>
</div>
<div className="w-8 h-px bg-slate-300"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-play text-slate-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</div>
<span className="text-[9px] font-bold text-slate-400 uppercase">Play</span>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="overflow-hidden bg-white pt-24 pb-24" id="old-photo-restoration">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

<div className="relative w-full">

<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 cursor-ew-resize select-none border border-slate-100 group touch-none" id="restoration-container">

<div className="absolute inset-0 w-full h-full bg-slate-100">
<img alt="Restoration Before" className="w-full h-full object-cover photo-damaged pointer-events-none" id="restore-img-before" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 noise-overlay"></div>
<div className="absolute inset-0 scratches opacity-40"></div>
<div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
</div>

<div className="absolute top-0 left-0 bottom-0 w-[50%] overflow-hidden bg-white border-r border-white/50" id="restore-after-wrapper" style={{transition: 'width 0.1s ease-out'}}>
<img alt="Restoration After" className="absolute top-0 left-0 max-w-none h-full object-cover pointer-events-none" id="restore-img-after" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{width: 'calc(100% * (100 / 50))'}}/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-slate-900 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   REBORN
                 </div>
</div>

<div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-white/80 z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.2)]" id="restore-handle" style={{transition: 'left 0.1s ease-out'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 group-hover:text-slate-600 transition-colors group-hover:scale-110 duration-300">
<svg className="lucide lucide-arrow-left-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium pointer-events-none transition-opacity duration-500 delay-1000" id="restore-hint">
                Drag to reveal
              </div>
</div>

<div className="flex gap-4 mt-6 justify-center md:justify-start">
<button aria-label="Load Wedding Photo" className="w-16 h-16 rounded-xl overflow-hidden border-2 border-slate-900 opacity-100 hover:opacity-100 transition-all restore-thumb ring-2 ring-offset-2 ring-slate-900" onclick="changeRestoration(0)">
<img className="w-full h-full object-cover grayscale brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</button>
<button aria-label="Load Grandpa Photo" className="w-16 h-16 rounded-xl overflow-hidden border-2 border-transparent opacity-60 hover:opacity-100 transition-all restore-thumb hover:scale-105" onclick="changeRestoration(1)">
<img className="w-full h-full object-cover sepia brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</button>
<button aria-label="Load Family Photo" className="w-16 h-16 rounded-xl overflow-hidden border-2 border-transparent opacity-60 hover:opacity-100 transition-all restore-thumb hover:scale-105" onclick="changeRestoration(2)">
<img className="w-full h-full object-cover contrast-125 grayscale-[0.5]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</button>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-6 w-fit">
              Made for the people you love
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 font-playfair">
              Bring the moment back.
            </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-10">
              Repair, restore, and relive the memories they thought were gone—then gift them in a frame they’ll see every day.
            </p>


<p className="text-sm font-medium text-slate-900 mb-8 flex items-center gap-2 animate-pulse" id="restore-context-text">
<svg className="lucide lucide-sparkles text-amber-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Perfect for: the day she became a mom.
            </p>

<div className="bg-rose-50/50 border border-rose-100 rounded-xl p-5 mb-10">
<div className="flex items-start gap-3">
<div className="p-2 bg-white rounded-lg shadow-sm text-rose-500">
<svg className="lucide lucide-gift" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-bold text-rose-900 mb-1">The first time they see it</h4>
<p className="text-sm text-rose-800/80 italic">"A quiet smile. A long pause. Then: 'I can't believe you found this.'"</p>
</div>
</div>
</div>

<p className="mt-4 text-[10px] text-slate-400">
              Each restoration uses about 100 credits. Results vary by photo condition.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-white pb-24 border-t border-slate-100" id="social-proof-videos">

<div className="pt-20 pb-12 max-w-7xl mx-auto px-6 text-center">
<h2 className="md:text-4xl text-3xl font-medium text-slate-900 tracking-tight font-playfair mb-3">
          The internet’s favorite gift <span className="text-slate-400 italic font-serif">(that they actually use).</span>
</h2>
<p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Creator reviews + real customer photos in real homes.
        </p>
</div>
<div className="max-w-[1400px] mx-auto px-4 md:px-6">

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">

<div className="video-card group relative overflow-hidden rounded-2xl bg-slate-900 cursor-pointer md:col-span-2 md:row-span-2 aspect-[9/10] md:aspect-auto" onclick="openVideoModal('featured')">

<img alt="Video Review - Living Room Frame" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="video-preview absolute inset-0 bg-black opacity-0 transition-opacity duration-300 pointer-events-none">

</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-90"></div>
<div className="absolute top-4 left-4 flex gap-2 z-20">
<span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Verified Creator</span>
</div>
<div className="absolute top-4 right-4 z-20">
<span className="flex items-center gap-1 bg-black/40 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
<svg className="lucide lucide-instagram" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                850K
              </span>
</div>
<div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shadow-xl">
<svg className="ml-1" fill="currentColor" height="28" stroke="none" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>

<div className="absolute bottom-8 left-8 z-30 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
<div className="bg-[#FCD34D] text-slate-900 font-bold px-4 py-2 rounded-lg shadow-lg text-sm md:text-base border-2 border-slate-900/10">
                 "Best gift for parents 🏆"
               </div>
<div className="flex text-yellow-400 mt-2 drop-shadow-md">
                 ★★★★★
               </div>
</div>
</div>

<div className="video-card group relative overflow-hidden rounded-2xl bg-slate-100 cursor-pointer aspect-[9/16]" onclick="openVideoModal('1')">
<img alt="Frame on Desk" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 z-20">
<span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full border border-white/10">TikTok • 1.2M</span>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md inline-block transform rotate-1 mb-1">
                  "Mom cried 😭"
                </div>
<div className="text-white text-xs font-medium opacity-90 mt-1">@sarahjenkins</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur flex items-center justify-center text-white"><svg className="ml-1" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>
</div>
</div>

<div className="video-card group relative overflow-hidden rounded-2xl bg-slate-100 cursor-pointer aspect-[9/16]" onclick="openVideoModal('2')">
<img alt="Frame Reveal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 z-20">
<span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full border border-white/10">Shorts • 500K</span>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md inline-block transform -rotate-1 mb-1">
                  "Setup in 2 mins"
                </div>
<div className="text-white text-xs font-medium opacity-90 mt-1">@techdad_reviews</div>
</div>
</div>

<div className="video-card group relative overflow-hidden rounded-2xl bg-slate-100 cursor-pointer aspect-[9/16] hidden md:block" onclick="openVideoModal('3')">
<img alt="Unboxing Frame" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 z-20">
<span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full border border-white/10">IG • 320K</span>
</div></div></div></div></section>
    </>
  );
}
