import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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

        const rotator = document.getElementById('cards-rotator');
        const wrapper = document.getElementById('cards-wrapper');
        const cards = document.querySelectorAll('.card-item');
        const header = document.getElementById('header-content');
        
        // Initial setup
        const initialRotateY = -25;
        const initialRotateX = 10;
        let currentScrollProgress = 0;
        
        // Mouse Tracking
        let mouseX = 0;
        let mouseY = 0;
        let targetRotateX = initialRotateX;
        let targetRotateY = initialRotateY;

        const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

        // Function to update the transform based on both scroll AND mouse
        function updateTransform() {
            // Scroll logic (base rotation)
            const scrollRotY = initialRotateY * (1 - currentScrollProgress);
            const scrollRotX = initialRotateX * (1 - currentScrollProgress);

            // Mouse logic (added subtle parallax)
            // We dampen the mouse effect as we scroll down to lock it in place
            const dampen = 1 - currentScrollProgress;
            const mouseEffectX = (mouseY * 10) * dampen; // Tilt X based on Mouse Y
            const mouseEffectY = (mouseX * 10) * dampen; // Tilt Y based on Mouse X

            // Combine
            const finalX = scrollRotX - mouseEffectX;
            const finalY = scrollRotY + mouseEffectY;

            rotator.style.transform = `rotateY(${finalY}deg) rotateX(${finalX}deg)`;
        }

        // Scroll Event
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            let rawProgress = Math.min(Math.max(scrollY / (windowHeight * 0.8), 0), 1);
            currentScrollProgress = easeOutCubic(rawProgress);

            // Card Spacing Logic
            const isMobile = window.innerWidth < 768;
            const startMargin = isMobile ? -180 : -140; 
            const endMargin = isMobile ? 10 : 24;
            const currentMargin = startMargin + (endMargin - startMargin) * currentScrollProgress;

            cards.forEach((card, index) => {
                if (index < cards.length - 1) {
                    card.style.marginRight = `${currentMargin}px`;
                }
                // Optional: subtle z-axis movement on scroll only
                if (currentScrollProgress < 1 && currentScrollProgress > 0) {
                     card.style.transform = `translateZ(${index * 5 * (1-currentScrollProgress)}px)`;
                } else {
                    // We remove inline transform to let CSS hover effects take over smoothly when scroll is done or at top
                    card.style.transform = ''; 
                }
            });

            // Header opacity
            if(header) {
                header.style.opacity = Math.max(1 - rawProgress * 2, 0);
                header.style.transform = `translateY(-${rawProgress * 50}px) scale(${1 - rawProgress * 0.1})`;
            }

            updateTransform();
        }, { passive: true });

        // Mouse Move Event for "Alive" feel
        document.addEventListener('mousemove', (e) => {
            // Normalize mouse position from -1 to 1 based on window center
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;

            mouseX = x; 
            mouseY = y;

            requestAnimationFrame(updateTransform);
        });

        // Trigger initial render
        window.dispatchEvent(new Event('scroll'));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/70 border-b border-black/5 transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-lg flex items-center justify-center shadow-lg hover:rotate-12 transition-transform duration-500">
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
</div>
<span className="font-semibold tracking-tight text-sm text-zinc-900">Layers</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Platform</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Workflow</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Insights</a>
</div>
<button className="bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all hover:shadow-lg hover:scale-105 active:scale-95">
            Start Building
        </button>
</nav>
<div className="relative h-[250vh]">
<main className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-zinc-200/50 to-transparent rounded-full blur-[100px] opacity-50"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-500/5 to-transparent rounded-full blur-[80px] opacity-30"></div>
</div>

<div className="text-center mb-16 px-4 z-10 transition-opacity duration-500 origin-bottom" id="header-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 mb-6 shadow-sm hover:shadow-md transition-shadow cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Interactive Scroll</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-4 cursor-default">
                    Deconstructed <span className="text-zinc-400">View</span>
</h1>
<p className="text-lg text-zinc-500 max-w-md mx-auto font-light leading-relaxed">
                    Hover to explore the depth. Scroll to align the workflow.
                </p>
</div>


<div className="relative w-full max-w-7xl flex items-center justify-center perspective-container z-20 h-[500px] group/container" id="cards-wrapper">

<div className="flex items-center justify-center transform-style-3d hardware-accel origin-center transition-transform duration-100 ease-out" id="cards-rotator" style={{transform: 'rotateY(-25deg) rotateX(10deg)'}}>

<div className="card-item card-transition relative w-60 h-80 md:w-64 md:h-96 rounded-2xl glass-panel flex-shrink-0 z-10 hardware-accel origin-center shadow-xl group/card cursor-pointer hover:!opacity-100 hover:scale-105 hover:-translate-y-6 hover:shadow-2xl hover:bg-white/80 hover:z-50 group-hover/container:opacity-60" style={{marginRight: '-140px'}}>
<div className="absolute inset-0 p-6 flex flex-col justify-between opacity-60 group-hover/card:opacity-100 transition-opacity duration-300">
<div className="flex justify-between items-center">
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest group-hover/card:text-zinc-600">L-01</span>
<i className="w-4 h-4 text-zinc-400 group-hover/card:text-zinc-800 transition-colors" data-lucide="layout-grid"></i>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-800 tracking-tight">Wireframe</h3>
<p className="text-xs text-zinc-500 mt-1">Structural foundation.</p>
</div>
<div className="space-y-2 opacity-50 group-hover/card:opacity-80 transition-opacity">
<div className="h-1.5 w-full bg-zinc-300 rounded-full"></div>
<div className="h-1.5 w-2/3 bg-zinc-300 rounded-full"></div>
</div>
</div>
</div>

<div className="card-item card-transition relative w-60 h-80 md:w-64 md:h-96 rounded-2xl glass-panel flex-shrink-0 z-20 hardware-accel origin-center shadow-xl bg-white/40 group/card cursor-pointer hover:!opacity-100 hover:scale-105 hover:-translate-y-6 hover:shadow-2xl hover:bg-white/80 hover:z-50 group-hover/container:opacity-60" style={{marginRight: '-140px'}}>
<div className="absolute inset-0 p-6 flex flex-col">
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-4 group-hover/card:text-zinc-600">L-02</span>
<div className="flex-1 flex items-center justify-center">
<div className="relative w-24 h-24 group-hover/card:scale-110 transition-transform duration-500">
<div className="absolute inset-0 border border-zinc-300 rounded-full animate-[spin_8s_linear_infinite]"></div>
<div className="absolute inset-4 border border-zinc-400 rounded-full border-dashed animate-[spin_12s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-6 h-6 text-zinc-700" data-lucide="cpu"></i>
</div>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-800 tracking-tight">Logic</h3>
</div>
</div>
</div>

<div className="card-item card-transition relative w-60 h-80 md:w-64 md:h-96 rounded-2xl glass-panel flex-shrink-0 z-30 hardware-accel origin-center shadow-xl overflow-hidden bg-white/60 group/card cursor-pointer hover:!opacity-100 hover:scale-105 hover:-translate-y-6 hover:shadow-2xl hover:bg-white/90 hover:z-50 group-hover/container:opacity-60" style={{marginRight: '-140px'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-[40px] group-hover/card:bg-purple-400/30 transition-colors"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-[40px] group-hover/card:bg-blue-400/30 transition-colors"></div>
<div className="absolute inset-0 p-6 flex flex-col">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest group-hover/card:text-zinc-600">L-03</span>
<div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
<i className="w-3.5 h-3.5 text-zinc-600" data-lucide="image"></i>
</div>
</div>
<div className="grid grid-cols-2 gap-2 flex-1 content-center opacity-80 group-hover/card:opacity-100 transition-opacity">
<div className="aspect-square rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 border border-white"></div>
<div className="aspect-square rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 border border-white"></div>
<div className="aspect-square rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 border border-white"></div>
<div className="aspect-square rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 border border-white flex items-center justify-center">
<span className="text-[10px] text-zinc-400">+12</span>
</div>
</div>
</div>
</div>

<div className="card-item card-transition relative w-60 h-80 md:w-64 md:h-96 rounded-2xl bg-white border border-zinc-100 flex-shrink-0 z-40 hardware-accel origin-center shadow-2xl group/card cursor-pointer hover:!opacity-100 hover:scale-105 hover:-translate-y-6 hover:shadow-2xl hover:z-50 group-hover/container:opacity-60" style={{marginRight: '-140px'}}>
<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div>
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest group-hover/card:text-zinc-600">L-04</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mt-4 group-hover/card:text-emerald-600 transition-colors">98.2<span className="text-zinc-300 group-hover/card:text-emerald-300">%</span></h2>
</div>
<div className="relative h-32 w-full mt-4">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,40 C140,30 160,10 180,20 C200,30 220,10 240,5" fill="none" stroke="#18181b" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="absolute top-0 right-0 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded group-hover/card:bg-emerald-500 transition-colors">Live</div>
</div>
</div>
</div>

<div className="card-item card-transition relative w-60 h-80 md:w-64 md:h-96 rounded-2xl bg-zinc-50 border border-white/50 flex-shrink-0 z-50 hardware-accel origin-center shadow-2xl p-2 group/card cursor-pointer hover:!opacity-100 hover:scale-105 hover:-translate-y-6 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:z-50 group-hover/container:opacity-60">
<div className="w-full h-full bg-white rounded-xl overflow-hidden relative border border-zinc-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)] group-hover/card:opacity-100 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-28 h-36 transform preserve-3d rotate-y-12 rotate-x-12 shadow-xl transition-transform duration-700 group-hover/card:rotate-y-[180deg]">

<div className="absolute inset-0 bg-zinc-900 rounded-[2px] flex flex-col items-center justify-center gap-2 backface-hidden z-10">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
<i className="w-4 h-4 text-emerald-400 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-[10px] text-zinc-400 font-medium">Complete</span>
</div>

<div className="absolute inset-0 bg-emerald-500 rounded-[2px] flex flex-col items-center justify-center gap-2 transform rotate-y-180 backface-hidden">
<i className="w-6 h-6 text-white" data-lucide="sparkles"></i>
<span className="text-[10px] text-white font-medium">Ready</span>
</div>
</div>
</div>
<div className="absolute bottom-4 left-0 right-0 text-center">
<span className="text-xs font-semibold text-zinc-900 group-hover/card:text-emerald-600 transition-colors">Final Output</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 transition-opacity duration-300" id="scroll-hint">
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Scroll to Align</span>
<div className="w-[1px] h-8 bg-zinc-300 rounded-full overflow-hidden">
<div className="w-full h-1/2 bg-zinc-800 animate-[drop_1.5s_infinite]"></div>
</div>
</div>
</div>
</main>
</div>
<section className="bg-white py-32 px-6 border-t border-zinc-100 z-50 relative">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-6">Seamless Integration</h2>
<p className="text-zinc-500 mb-8">Ready to integrate this stack into your process?</p>
<button className="bg-zinc-900 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors">Get Access Now</button>
</div>
</section>
<style>
        @keyframes drop {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
        }
        
        /* Utility to hide backface for flip card */
        .backface-hidden {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
    </style>


    </>
  );
}
