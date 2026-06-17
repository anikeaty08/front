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



        lucide.createIcons();

        // 3D Globe Initialization
        import createGlobe from 'https://cdn.skypack.dev/cobe';

        const canvas = document.getElementById("cobe");
        let phi = 0;
        let width = 0;

        const onResize = () => {
            width = canvas.offsetWidth;
            canvas.width = width * 2;
            canvas.height = width * 2;
        };
        window.addEventListener('resize', onResize);
        onResize();

        createGlobe(canvas, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 12,
            baseColor: [0.05, 0.05, 0.1],
            markerColor: [0.2, 0.8, 1],
            glowColor: [0.1, 0.3, 0.6],
            markers: [
                { location: [37.7595, -122.4367], size: 0.05 },
                { location: [40.7128, -74.0060], size: 0.05 },
                { location: [51.5074, -0.1278], size: 0.05 },
                { location: [48.8566, 2.3522], size: 0.05 },
                { location: [35.6762, 139.6503], size: 0.05 },
                { location: [1.3521, 103.8198], size: 0.05 },
                { location: [25.2048, 55.2708], size: 0.05 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005;
                state.width = width * 2;
                state.height = width * 2;
            }
        });

        // ---------------------------------------------------------
        // Pricing Carousel Logic (Touch/Drag/3D)
        // ---------------------------------------------------------
        const track = document.getElementById('track');
        const container = document.getElementById('carousel-container');
        const cards = Array.from(document.querySelectorAll('.pricing-card-wrapper'));
        const dots = Array.from(document.querySelectorAll('.pagination-dot'));
        
        // Configuration
        const cardWidth = 340; 
        const gap = 40; 
        const spacing = cardWidth + gap;
        let currentIndex = 1; // Start at Premium (Index 1)

        // Drag State
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID;
        let dragOffset = 0;

        // Initialize Positions
        updateCarousel();

        // Event Listeners
        container.addEventListener('touchstart', touchStart);
        container.addEventListener('touchend', touchEnd);
        container.addEventListener('touchmove', touchMove);
        
        container.addEventListener('mousedown', touchStart);
        container.addEventListener('mouseup', touchEnd);
        container.addEventListener('mouseleave', () => { if(isDragging) touchEnd() });
        container.addEventListener('mousemove', touchMove);

        // Click on dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        function touchStart(index) {
            return function(event) {
                isDragging = true;
                startPos = getPositionX(event);
                animationID = requestAnimationFrame(animation);
                container.style.cursor = 'grabbing';
            }
        }

        function touchMove(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                dragOffset = currentPosition - startPos;
                // Prevent scrolling page if dragging horizontally
                if(Math.abs(dragOffset) > 5) event.preventDefault();
            }
        }

        function touchEnd() {
            isDragging = false;
            cancelAnimationFrame(animationID);
            container.style.cursor = 'grab';

            const movedBy = dragOffset;
            
            // Threshold to change slide
            if (movedBy < -70 && currentIndex < cards.length - 1) currentIndex += 1;
            if (movedBy > 70 && currentIndex > 0) currentIndex -= 1;

            dragOffset = 0;
            updateCarousel();
        }

        function getPositionX(event) {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        }

        function animation() {
            updateTransforms(dragOffset);
            if (isDragging) requestAnimationFrame(animation);
        }

        function updateCarousel() {
            updateTransforms(0);
            updateDots();
        }

        function updateTransforms(offset) {
            cards.forEach((card, index) => {
                // Calculate distance from center index relative to drag
                const distFromCenter = index - currentIndex;
                
                // Base position relative to center of container
                // We want the currentIndex to be at 0px translation (center)
                const baseTranslate = distFromCenter * spacing;
                
                // Add the drag offset
                const totalTranslate = baseTranslate + offset;

                // Visual Calculations
                // Determine how "active" this card is (0 = active, 1 = neighbor)
                // We normalize the distance based on spacing to get a 0-1 factor
                const distanceFactor = Math.abs(totalTranslate) / spacing;
                
                // Clamp scale between 0.9 and 1.05
                let scale = 1.05 - (Math.min(distanceFactor, 1) * 0.15);
                
                // Opacity logic
                let opacity = 1 - (Math.min(distanceFactor, 1) * 0.4);
                
                // Z-index: Closer to center = higher z-index
                let zIndex = 10 - Math.round(distanceFactor * 10);

                // Apply styles
                card.style.transform = `translateX(${totalTranslate}px) scale(${scale})`;
                card.style.opacity = opacity;
                card.style.zIndex = zIndex;
                
                // Toggle Glow Class based on being the primary active card
                if (index === currentIndex && Math.abs(offset) < 50) {
                    card.classList.add('is-active');
                } else {
                    card.classList.remove('is-active');
                }
            });
        }

        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Smooth Scroll Anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
<svg className="lucide lucide-zap w-5 h-5 text-cyan-400 fill-cyan-400/20" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-white">
                    Flowbook<span className="text-cyan-400">AI</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-cyan-400 transition-colors" href="#features">Features</a>
<a className="hover:text-cyan-400 transition-colors" href="#demo">How it Works</a>
<a className="hover:text-cyan-400 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-6">
<a className="neon-button text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border border-white/10" href="#booking">
                    BOOK A DEMO
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="bg-grid-pattern absolute inset-0 z-10 opacity-30"></div>

<div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-900/30 rounded-full mix-blend-screen blur-[100px] aurora-blob" style={{animationDelay: '0s'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/30 rounded-full mix-blend-screen blur-[100px] aurora-blob" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full mix-blend-screen blur-[120px] aurora-blob" style={{animationDelay: '-10s'}}></div>
</div>
<div className="z-0 bg-gradient-to-b from-transparent via-black/50 to-black w-full h-full absolute top-0 left-0"></div>

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-70 mix-blend-screen pointer-events-none">
<canvas height="2000" id="cobe" style={{width: '1000px', height: '1000px', maxWidth: '100%', aspectRatio: '1'}} width="2000"></canvas>
</div>
<div className="container mx-auto px-6 text-center z-10 fade-in-up" style={{animationDelay: '0.1s'}}>

<div className="inline-flex pointer-events-auto gap-2 bg-white/5 border border-white/10 rounded-full mb-8 py-1.5 px-4 backdrop-blur-md items-center shadow-[0_0_15px_rgba(6,182,212,0.15)]">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
<span className="text-xs font-medium tracking-wide text-cyan-100/80">
                    AI-POWERED RECEPTIONIST v2.0 LIVE
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.05]">
                Never miss a
                
                <span className="text-glass-liquid italic pr-2">client call</span>
                again.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Flowbook AI is your 24/7 virtual receptionist. We answer calls, book appointments, reschedule, and send confirmations—so you can focus on your patients.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 pointer-events-auto">
<a className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold tracking-tight overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all" href="#booking">
<div className="absolute inset-0 w-full h-full bg-cyan-400 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2">
                        Book a Demo
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="px-8 py-4 text-neutral-300 border border-white/10 rounded-full font-medium tracking-tight hover:bg-white/5 hover:text-white hover:border-cyan-500/30 transition-all backdrop-blur-sm flex items-center gap-2 group" href="#demo">
<svg className="lucide lucide-play-circle w-4 h-4 text-cyan-500 group-hover:text-cyan-400 transition-colors" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Watch a quick demo
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600 z-20">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<div className="border-y border-white/5 bg-black/40 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
<span className="uppercase text-xs font-semibold text-neutral-600 tracking-[0.2em]">Trusted by clients</span>
<div className="flex gap-8 md:gap-12 items-center grayscale hover:grayscale-0 transition-all duration-500">
<span className="flex items-center gap-2 text-lg font-bold text-neutral-400 tracking-tight">HATFIELD CITY COLLEGE </span>
<span className="text-lg font-bold tracking-tight text-neutral-400 flex items-center gap-2"><svg className="lucide lucide-smile w-5 h-5" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg> DentAlign</span>
<span className="text-lg font-bold tracking-tight text-neutral-400 flex items-center gap-2"><svg className="lucide lucide-eye w-5 h-5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> OpticFlow</span>
<span className="text-lg font-bold tracking-tight text-neutral-400 flex items-center gap-2"><svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> PureSpa</span>
</div>
</div>
</div>

<section className="md:py-32 z-20 bg-black pt-24 pb-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-cyan-500 text-xs font-bold tracking-widest uppercase mb-4 block">
                    Capabilities
                </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    More than just an <span className="text-neon-gradient">answering machine</span>.
                </h2>
<p className="text-neutral-400 max-w-xl mx-auto text-lg font-light">
                    Flowbook AI handles the entire front-desk scheduling workflow with human-like conversation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<svg className="lucide lucide-phone-incoming w-24 h-24 text-cyan-900" data-lucide="phone-incoming" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 2v6h6"></path><path d="m22 2-6 6"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-zap w-6 h-6 text-cyan-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Instant Pickup</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Zero wait times. Flowbook answers every call instantly, 24/7/365, ensuring you never lose a potential patient to voicemail.
                    </p>
</div>
<div className="glass-panel p-8 rounded-2xl group relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-calendar-check w-6 h-6 text-blue-400" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">No Double-Bookings</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        AI cross-checks your availability in real-time. It intelligently fills gaps in your schedule without creating conflicts.
                    </p>
</div>
<div className="glass-panel p-8 rounded-2xl group relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-message-square w-6 h-6 text-purple-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Auto-Confirmations</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Automatically sends SMS and Email confirmations immediately after booking, reducing no-show rates by up to 40%.
                    </p>
</div>
<div className="glass-panel p-8 rounded-2xl group relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-clock w-6 h-6 text-emerald-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">24/7 Availability</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Capture appointments after hours, on weekends, and during holidays. Your business effectively never closes.
                    </p>
</div>
<div className="glass-panel p-8 rounded-2xl group relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-mic w-6 h-6 text-pink-400" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Natural Voice AI</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Custom greetings and human-like intonation. Clients often don't realize they are speaking to an AI assistant.
                    </p>
</div>
<div className="glass-panel p-8 rounded-2xl group relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-refresh-cw w-6 h-6 text-orange-400" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Google Sync</h3>
<p className="leading-relaxed text-sm text-neutral-400">Seamless 2-way integration with Google Calendar.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#020202] pt-32 pb-32 relative" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-purple-900/10 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Simple, transparent pricing.</h2>
<p className="text-neutral-400">Swipe to find the AI receptionist that fits your practice.</p>
</div>

<div className="carousel-container" id="carousel-container" style={{cursor: 'grab'}}>
<div className="carousel-track" id="track">

<div className="pricing-card-wrapper" style={{transform: 'translateX(-380px) scale(0.9)', opacity: '0.6', zIndex: '0'}}>
<div className="glass-panel flex flex-col h-[420px] rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="text-cyan-400 font-medium mb-2 tracking-widest text-xs uppercase">Standard</div>
<div className="text-3xl font-bold text-white mb-4">R8500</div>
<ul className="space-y-3 text-sm text-neutral-400 mb-8">
<li className="flex gap-x-2 gap-y-2">AI Call Asnwering and Booking</li>
<li className="flex gap-2 gap-x-2 gap-y-2">Google Calender Sync </li>
<li className="flex gap-2 gap-x-2 gap-y-2">Email Confirmation</li>
</ul>
</div>
<button className="hover:bg-white/10 transition-colors text-sm text-white w-full border-white/20 border rounded-lg pt-2 pb-2 cursor-pointer" onclick="window.location.href='https://wa.me/27685167478?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Flowbook%20AI.%20Can%20you%20assist%20me%3F'" role="button">Select Plan</button>
</div>
</div>

<div className="pricing-card-wrapper is-active" style={{transform: 'translateX(0px) scale(1.05)', opacity: '1', zIndex: '10'}}>
<div className="glass-panel h-[460px] rounded-2xl p-8 relative flex flex-col justify-between bg-black/60">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-[0_0_10px_rgba(34,211,238,0.5)]">Most Popular</div>
<div className="">
<div className="text-neon-gradient font-medium mb-2 tracking-widest text-sm uppercase">Premium</div>
<div className="text-5xl font-bold text-white mb-2">R34000 </div>
<p className="text-xs text-neutral-500 mb-6">Perfect for growing clinics.</p>
<div className="h-px w-full bg-white/10 mb-6"></div>
<ul className="text-sm text-neutral-300 mb-8 space-y-4">
<li className="flex gap-3 gap-x-3 gap-y-3 items-center">Everything in standard</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-center">FAQ handling </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-center">Smart Follow-ups</li>
</ul>
</div>
<button className="neon-button cursor-pointer text-sm font-semibold text-white w-full rounded-lg pt-3 pb-3" onclick="window.location.href='https://wa.me/27685167478?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Flowbook%20AI.%20Can%20you%20assist%20me%3F'" role="button">Start Free Trial</button>
</div>
</div>

<div className="pricing-card-wrapper" style={{transform: 'translateX(380px) scale(0.9)', opacity: '0.6', zIndex: '0'}}>
<div className="glass-panel flex flex-col h-[420px] rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="uppercase text-xs font-medium text-purple-400 tracking-widest mb-2">PLATINUM</div>
<div className="text-3xl font-bold text-white mb-4">CUSTOM</div>
<ul className="space-y-3 text-sm text-neutral-400 mb-8">
<li className="flex gap-2 gap-x-2 gap-y-2">Everything in premium</li>
<li className="flex gap-2 gap-x-2 gap-y-2">CRM Integrations </li>
<li className="flex gap-x-2 gap-y-2">Dedicated account manager </li>
</ul>
</div>
<button className="hover:bg-white/10 transition-colors text-sm text-white w-full border-white/20 border rounded-lg pt-2 pb-2 cursor-pointer" onclick="window.location.href='https://wa.me/27685167478?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Flowbook%20AI.%20Can%20you%20assist%20me%3F'" role="button">Contact Sales</button>
</div>
</div>
</div>
</div>

<div className="flex mt-4 gap-x-3 gap-y-3 justify-center" id="pagination">
<div className="pagination-dot"></div>
<div className="pagination-dot active"></div>
<div className="pagination-dot"></div>
</div>
</section>

<section className="overflow-hidden z-20 bg-black border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
      Success Stories
    </h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
<div className="glass-panel p-8 rounded-xl hover:border-cyan-500/30 group transition-all duration-500">
<div className="flex gap-1 text-cyan-400 mb-5">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 text-sm mb-8 leading-relaxed font-light">
        "Flowbook AI captured 45 missed calls in the first weekend alone. That's $12k in revenue we would have lost. The
        voice sounds incredibly real."
      </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center text-xs font-bold text-white border border-white/10">
          Dr
        </div>
<div className="text-xs">
<div className="text-white font-medium">Dr. Emily Chen</div>
<div className="text-neutral-500">Chen Dental Group</div>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-xl border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)] group">
<div className="flex gap-1 text-cyan-400 mb-5">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-sm font-light text-neutral-300 mb-8">“Flowbook AI has improved the way
        communication is handled at Hatfield City College.
        We receive a high volume of enquiries from prospective students, professionals,
        and parents — especially during registration periods. Before Flowbook, this resulted
        in missed calls and long waiting times.

        Since implementing the system, our call handling has become far more efficient.
        We have seen a noticeable drop in missed calls, and our staff now have more time to
        focus on the students and essential administrative work.

        Flowbook AI has brought structure and consistency to our communication. It has
        greatly improved our experience, and we consider it a valuable tool for our institution.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white">
<img alt="Hatfield City College Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a5faf8b-b1c3-44f1-807f-531ad0eff855_320w.jpg?w=800&amp;q=80" style={{}}/>
</div>
<div className="text-xs">
<div className="cursor-pointer font-medium text-white" onclick="window.location.href='https://hatfieldcitycollege.co.za/'" role="button">Hatfield City College
          </div>
<div className="text-neutral-500">Administration Department</div>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-xl hover:border-cyan-500/30 group transition-all duration-500">
<div className="flex gap-1 text-cyan-400 mb-5">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 text-sm mb-8 leading-relaxed font-light">
        "Setup was instant. The Google Calendar sync works perfectly. My patients love the instant confirmation texts.
        Highly recommended."
      </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center text-xs font-bold text-white border border-white/10">
          JS
        </div>
<div className="text-xs">
<div className="text-white font-medium">James Smith</div>
<div className="text-neutral-500">Optometrist</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black z-20 border-white/5 border-t pt-24 pb-24 relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 text-center">
                Frequently Asked Questions
            </h2>
<div className="space-y-4">
<details className="group glass-panel open:bg-white/5 transition-all duration-300 rounded-lg pr-6 pl-6">
<summary className="flex cursor-pointer list-none pt-6 pb-6 items-center justify-between">
<span className="text-neutral-200 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                            Does it integrate with my existing software?
                        </span>
<span className="transition-transform duration-300 group-open:rotate-180 text-cyan-500">
<svg className="lucide lucide-chevron-down w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(6, 182, 212)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-neutral-400 text-sm pb-6 leading-relaxed border-t border-white/5 pt-4">
                        Yes, Flowbook AI integrates with Google Calendar, Outlook, and popular practice management software like Jane, DrChrono, and SimplePractice via our API or Zapier.
                    </div>
</details>
<details className="group glass-panel rounded-lg px-6 open:bg-white/5 transition-all duration-300">
<summary className="flex cursor-pointer list-none pt-6 pb-6 items-center justify-between">
<span className="text-neutral-200 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                            Can I customize the voice and greeting?
                        </span>
<span className="transition-transform duration-300 group-open:rotate-180 text-cyan-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-neutral-400 text-sm pb-6 leading-relaxed border-t border-white/5 pt-4">
                        Absolutely. You can choose from 10+ premium neural voices and script the exact greeting, business hours, and FAQs the AI should know.
                    </div>
</details>
<details className="group glass-panel rounded-lg px-6 open:bg-white/5 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer list-none py-6">
<span className="text-neutral-200 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                            What happens if the AI can't answer a question?
                        </span>
<span className="transition-transform duration-300 group-open:rotate-180 text-cyan-500">
<svg className="lucide lucide-chevron-down w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(6, 182, 212)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-neutral-400 text-sm pb-6 leading-relaxed border-t border-white/5 pt-4">
                        If the AI encounters a complex query, it politely takes a message and marks the call as "Priority" in your dashboard for immediate human follow-up.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative bg-black z-20 overflow-hidden" id="booking">
<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
                Ready to <span className="text-neon-gradient">never miss</span> another call?
            </h2>
<p className="text-lg font-light text-neutral-400 max-w-xl mr-auto mb-12 ml-auto">Join our clients increasing revenue and patient satisfaction with Flowbook AI.</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<button className="sm:w-auto neon-button transition-all transform hover:-translate-y-1 cursor-pointer font-semibold text-white w-full rounded-full pt-4 pr-10 pb-4 pl-10" onclick="window.open('https://wa.me/27685167478?text=Hi%2C%20I%27m%20interested%20in%20Flowbook%20AI%20and%20would%20like%20to%20book%20a%20demo.', '_blank');" role="button">
    Book Your Demo Today
</button>
</div>
<p className="mt-8 text-xs text-neutral-600 uppercase tracking-widest font-semibold">
                No credit card required for demo • Setup in 15 mins
            </p>
</div>
</section>

<footer className="z-20 bg-black border-white/10 border-t pt-20 pb-10 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 group" href="#">
<svg className="lucide lucide-zap w-6 h-6 text-cyan-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-lg font-bold tracking-tight text-white">
                            Flowbook<span className="text-cyan-500">AI</span>
</span>
</a>
<p className="text-neutral-500 text-sm max-w-sm mb-8 leading-relaxed">
                        The future of clinic management. Intelligent, always-on, and seamless.
                    </p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-cyan-400 transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 hover:text-cyan-400 transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-neutral-500 hover:text-cyan-400 transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-neutral-600">
                    © 2024 Flowbook AI Inc. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
