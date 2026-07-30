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

        const scrollContainer = document.getElementById('scroll-container');
        const cards = document.querySelectorAll('.card-layer');
        
        // CONFIG
        const Z_DISTANCE_BETWEEN_CARDS = 400; // Distance between cards
        const SPREAD_X = 150; // Horizontal spread distance
        const SPREAD_Y = -100; // Vertical spread distance (negative = goes up)
        
        // Animation Loop
        let currentScroll = 0;
        let targetScroll = 0;

        // Smooth scroll interpolation
        function lerp(start, end, factor) {
            return start + (end - start) * factor;
        }

        function update() {
            targetScroll = scrollContainer.scrollTop;
            currentScroll = lerp(currentScroll, targetScroll, 0.08);

            // Calculate "Progress" through the stack
            // We interpret scroll as traveling along the Z axis.
            // 1 unit of "index" = Z_DISTANCE_BETWEEN_CARDS pixels of scroll.
            const scrollProgressIndex = currentScroll / Z_DISTANCE_BETWEEN_CARDS;

            cards.forEach((card) => {
                const index = parseInt(card.getAttribute('data-index'));
                
                // Calculate position relative to the "camera" (scroll position)
                // We want the card at 'index' to be centered when scrollProgressIndex == index.
                
                // Relative index tells us how far this card is from the center of attention
                const relativeIndex = index - scrollProgressIndex;

                // Z position: 
                // If relativeIndex is 0, Z should be 0.
                // If relativeIndex is 1, Z should be -400 (further back).
                // If relativeIndex is -1, Z should be 400 (behind camera/passed).
                const z = relativeIndex * -Z_DISTANCE_BETWEEN_CARDS;

                // X and Y positions:
                // We want the stream to be diagonal, BUT we want the active card to be at (0,0).
                // So we offset the whole world based on current scroll.
                // Standard position for card 'i' is (i * SPREAD).
                // Camera offset is (scrollProgress * SPREAD).
                // Final position = (i - scrollProgress) * SPREAD.
                const x = relativeIndex * SPREAD_X;
                const y = relativeIndex * SPREAD_Y;

                // Opacity handling
                // Fade out as it passes camera (z > 200)
                // Fade out if too far back (z < -3000)
                let opacity = 1;
                
                // Near camera fade
                if (z > 100) {
                    opacity = Math.max(0, 1 - (z - 100) / 300);
                }
                // Far distance fade
                if (z < -2500) {
                    opacity = Math.max(0, 1 - (Math.abs(z) - 2500) / 1000);
                }

                // Apply styles
                // We use scale to help with aliasing and depth perception
                const scale = 1; 

                if (opacity <= 0.01) {
                    card.style.display = 'none';
                } else {
                    card.style.display = 'block';
                    card.style.opacity = opacity;
                    // transform-origin center is default
                    card.style.transform = `
                        translate3d(${x}px, ${y}px, ${z}px)
                        scale(${scale})
                    `;
                    // Adjust z-index to ensure correct layering when they overlap closely
                    // Closer cards (higher Z) should be on top.
                    // z value is actual depth. Higher z = closer.
                    // We can just trust preserve-3d usually, but explicit z-index helps with glitches
                    card.style.zIndex = Math.round(10000 + z);
                }
            });

            requestAnimationFrame(update);
        }

        update();

    
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
      

<header className="fixed top-0 left-0 right-0 z-50 p-6 sm:p-8 flex items-center justify-between pointer-events-none mix-blend-multiply">

<nav className="flex items-center gap-2 pointer-events-auto">
<a className="group flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-600 shadow-sm transition-all hover:border-neutral-300 hover:text-black" href="#">
<span className="tracking-tight">UNVEIL ® PROJECTS</span>
</a>
<div className="hidden sm:flex gap-2">
<a className="flex items-center justify-center rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-neutral-500 transition-colors hover:bg-white hover:text-neutral-900 hover:shadow-sm hover:border-neutral-200" href="#">
                    RESEARCH
                </a>
<a className="flex items-center justify-center rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-neutral-500 transition-colors hover:bg-white hover:text-neutral-900 hover:shadow-sm hover:border-neutral-200" href="#">
                    STUDIO
                </a>
<a className="flex items-center justify-center rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-neutral-500 transition-colors hover:bg-white hover:text-neutral-900 hover:shadow-sm hover:border-neutral-200" href="#">
                    CONTACT
                </a>
</div>
</nav>

<div className="flex items-center gap-4 pointer-events-auto">
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="search"></i>
</button>
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</header>


<div className="absolute inset-0 overflow-y-auto overflow-x-hidden" id="scroll-container">
<div style={{height: `800vh`}}></div> 
</div>

<main className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none perspective-container">
<div className="preserve-3d relative w-full h-full flex items-center justify-center" id="world">



<div className="card-layer absolute w-[320px] h-[420px] sm:w-[500px] sm:h-[660px] bg-neutral-100 rounded-xl shadow-2xl overflow-hidden" data-index="6">
<img alt="Abstract" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>

<div className="card-layer absolute w-[320px] h-[420px] sm:w-[500px] sm:h-[660px] bg-white rounded-xl shadow-2xl overflow-hidden border border-neutral-100" data-index="5">
<div className="relative w-full h-full p-8 flex flex-col justify-between">
<div>
<h2 className="text-3xl tracking-tight font-medium text-neutral-900">Interfaces</h2>
<p className="text-base text-neutral-500 mt-2">Exploration of depth and layer.</p>
</div>
<div className="w-full h-64 rounded-lg overflow-hidden relative">
<img alt="Interface" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" />
</div>
</div>
</div>

<div className="card-layer absolute w-[320px] h-[420px] sm:w-[500px] sm:h-[660px] bg-neutral-900 rounded-xl shadow-2xl overflow-hidden border border-neutral-800" data-index="4">
<img alt="Dark Art" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop" />
<div className="absolute bottom-10 left-10 text-white">
<p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">Concept</p>
<h3 className="text-4xl tracking-tight font-medium">Voidwalker</h3>
</div>
</div>

<div className="card-layer absolute w-[320px] h-[420px] sm:w-[500px] sm:h-[660px] bg-white/60 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/50" data-index="3">

<div className="absolute inset-0 opacity-40">
<img alt="Glass" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" />
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center z-10">
<div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm mb-6">
<i className="w-12 h-12 text-neutral-800 stroke-[1]" data-lucide="box"></i>
</div>
<span className="text-2xl font-medium tracking-tight text-neutral-800">Components System</span>
</div>
</div>

<div className="card-layer absolute w-[320px] h-[420px] sm:w-[500px] sm:h-[660px] bg-white rounded-xl shadow-2xl overflow-hidden border border-neutral-100" data-index="2">
<img alt="Minimal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop" />
<div className="absolute top-6 right-6 bg-neutral-900 text-white px-3 py-1.5 rounded-full text-xs font-medium tracking-wide">
                     2024
                 </div>
</div>

<div className="card-layer absolute w-[320px] h-[420px] sm:w-[500px] sm:h-[660px] bg-neutral-800 rounded-xl shadow-2xl overflow-hidden" data-index="1">
<div className="h-full w-full relative">
<img alt="Dev" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000&auto=format&fit=crop" />
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<h2 className="text-5xl tracking-tight font-medium text-white mb-2">Composites</h2>
<p className="text-lg text-neutral-400 max-w-xs leading-relaxed">Procedural generation using WebGL.</p>
</div>
</div>
</div>

<div className="card-layer absolute w-[320px] h-[420px] sm:w-[500px] sm:h-[660px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden border border-white/60" data-index="0">
<div className="relative h-full w-full">
<img alt="Hero" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=1000&auto=format&fit=crop" />
<div className="absolute inset-0 flex items-center justify-center">
<h1 className="text-5xl sm:text-7xl tracking-tighter font-medium text-white drop-shadow-xl text-center mix-blend-overlay">UNVEIL</h1>
</div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 left-0 right-0 p-6 sm:p-8 z-50 flex items-end justify-between pointer-events-none">

<div className="hidden sm:flex items-center gap-3 text-neutral-400 mix-blend-multiply opacity-80">
<span className="text-xs font-medium tracking-widest">SCROLL TO EXPLORE</span>
</div>

<div className="pointer-events-auto bg-white rounded-lg shadow-lg border border-neutral-200 p-1 flex">
<button className="px-5 py-2 rounded-[4px] text-xs font-semibold text-neutral-900 bg-neutral-50 shadow-sm border border-neutral-200/50">
                OVERVIEW
            </button>
<button className="px-5 py-2 rounded-[4px] text-xs font-medium text-neutral-500 hover:text-neutral-800 transition-colors">
                INDEX
            </button>
</div>
</footer>


    </>
  );
}
