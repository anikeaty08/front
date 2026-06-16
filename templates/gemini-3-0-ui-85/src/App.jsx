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



        // RIPPLE EFFECT
        const rippleBtn = document.getElementById('rippleBtn');
        rippleBtn.addEventListener('click', function(e) {
            const circle = document.createElement('span');
            const diameter = Math.max(rippleBtn.clientWidth, rippleBtn.clientHeight);
            const radius = diameter / 2;
            const rect = rippleBtn.getBoundingClientRect();

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - rect.left - radius}px`;
            circle.style.top = `${e.clientY - rect.top - radius}px`;
            circle.classList.add('ripple');

            const ripple = rippleBtn.getElementsByClassName('ripple')[0];
            if (ripple) { ripple.remove(); }

            rippleBtn.appendChild(circle);
        });

        // SPOTLIGHT EFFECT
        const spotBtn = document.getElementById('spotBtn');
        spotBtn.addEventListener('mousemove', (e) => {
            const rect = spotBtn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            spotBtn.style.setProperty('--x', `${x}px`);
            spotBtn.style.setProperty('--y', `${y}px`);
        });

        // BUBBLE BURST EFFECT
        const burstBtn = document.getElementById('burstBtn');
        burstBtn.addEventListener('click', (e) => {
            const bubbleCount = Math.floor(Math.random() * 4) + 5;

            for (let i = 0; i < bubbleCount; i++) {
                const bubble = document.createElement('span');
                bubble.classList.add('bubble-particle');

                const size = Math.random() * 20 + 10;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;

                const rect = burstBtn.getBoundingClientRect();
                const x = Math.random() * (rect.width - size);
                const y = Math.random() * (rect.height / 2) + (rect.height/2);

                bubble.style.left = `${x}px`;
                bubble.style.top = `${y}px`;

                burstBtn.appendChild(bubble);

                setTimeout(() => {
                    bubble.remove();
                }, 1000);
            }
        });

        // --- BUTTONS4: INTERACTION LIBRARY FUNCTIONS ---

        // Spotlight Logic
        function handleSpotlight(e, card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        }

        // Particle System
        function emitParticles(btn) {
            const colors = ['#fbbf24', '#f59e0b', '#fb7185', '#ffffff'];
            const btnRect = btn.getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

            for(let i=0; i<24; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');

                const size = Math.random() * 6 + 3;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

                particle.style.left = `${btnRect.left + scrollLeft + btnRect.width/2}px`;
                particle.style.top = `${btnRect.top + scrollTop + btnRect.height/2}px`;

                document.body.appendChild(particle);

                const angle = Math.random() * Math.PI * 2;
                const velocity = Math.random() * 120 + 50;
                const tx = Math.cos(angle) * velocity;
                const ty = Math.sin(angle) * velocity;

                particle.animate([
                    { transform: 'translate(0,0) scale(1) rotate(0deg)', opacity: 1 },
                    { transform: `translate(${tx}px, ${ty}px) scale(0) rotate(180deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 600 + 400,
                    easing: 'cubic-bezier(0, .9, .57, 1)',
                }).onfinish = () => particle.remove();
            }
        }

        // Copy Feedback Logic
        function copyToClipboard(btn) {
            const defaultState = btn.querySelector('.default-state');
            const successState = btn.querySelector('.success-state');

            defaultState.classList.add('hidden');
            successState.classList.remove('hidden');
            successState.classList.add('flex');

            setTimeout(() => {
                successState.classList.add('hidden');
                successState.classList.remove('flex');
                defaultState.classList.remove('hidden');
            }, 2000);
        }

        // Initialize Lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<h1 className="text-6xl md:text-7xl">Premium Fluid UI Kit</h1>
<p className="subtitle">Interactive Button Showcase Created with Gemini 3.0</p>

<svg style={{position: 'absolute', width: '0', height: '0'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="goo">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="8"></fegaussianblur>
<fecolormatrix in="blur" mode="matrix" result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"></fecolormatrix>
<fecomposite in="SourceGraphic" in2="goo" operator="atop"></fecomposite>
</filter>
</defs>
</svg>
<div className="grid-container">

<div className="category-header">
<h2 className="category-title">Fluid Interface Kit</h2>
</div>

<div className="btn-wrapper">
<span className="btn-label">01. Kinetic Border</span>
<button className="btn-kinetic btn-size-2">
<span>KINETIC BORDER</span>
</button>
</div>

<div className="btn-wrapper">
<span className="btn-label">02. Neon Pulse</span>
<button className="btn-neon btn-size-2">
                NEON PULSE
            </button>
</div>

<div className="btn-wrapper">
<span className="btn-label">03. Ghost Fade</span>
<button className="btn-ghost btn-size-2">
                GHOST FADE
            </button>
</div>

<div className="btn-wrapper">
<span className="btn-label">04. Holographic</span>
<button className="btn-holo btn-size-2">
                HOLOGRAPHIC
            </button>
</div>

<div className="btn-wrapper">
<span className="btn-label">05. Liquid Fill</span>
<button className="btn-liquid btn-size-1">
<div className="inner-liquid"></div>
<span style={{position: 'relative', zIndex: '2'}}>LIQUID FILL</span>
</button>
</div>

<div className="btn-wrapper">
<span className="btn-label">06. Elastic Slide</span>
<button className="btn-elastic btn-size-2">
<div className="slide-bg"></div>
<span style={{position: 'relative', zIndex: '2'}}>ELASTIC SLIDE</span>
</button>
</div>

<div className="btn-wrapper">
<span className="btn-label">07. Magnetic Orb</span>
<button className="btn-orb btn-size-2">
<div className="orb"></div>
<span style={{position: 'relative', zIndex: '2'}}>MAGNETIC ORB</span>
</button>
</div>

<div className="btn-wrapper">
<span className="btn-label">08. Underline Flow</span>
<button className="btn-under btn-size-2">
<span>UNDERLINE FLOW</span>
</button>
</div>

<div className="btn-wrapper">
<span className="btn-label">09. Jelly Wobble</span>
<button className="btn-jelly btn-size-1">
                JELLY WOBBLE
            </button>
</div>

<div className="btn-wrapper">
<span className="btn-label">10. Elastic Stretch</span>
<button className="btn-elastic-stretch btn-size-1">
                ELASTIC STRETCH
            </button>
</div>

<div className="btn-wrapper">
<span className="btn-label">11. Mercury Drop</span>
<button className="btn-mercury-drop btn-size-1">
                MERCURY DROP
            </button>
</div>

<div className="btn-wrapper">
<span className="btn-label">12. Lava Lamp</span>
<button className="btn-lava btn-size-1">
<div className="lava-container">
<div className="lava-blob"></div>
<div className="lava-blob"></div>
<div className="lava-blob"></div>
</div>
<span style={{position: 'relative', zIndex: '2'}}>LAVA LAMP</span>
</button>
</div>

<div className="btn-wrapper">
<span className="btn-label">13. Bubble Burst</span>
<button className="btn-burst btn-size-1" id="burstBtn">
                BUBBLE BURST
            </button>
</div>

<div className="btn-wrapper">
<span className="btn-label">14. Mercury Pool</span>
<button className="btn-mercury btn-size-2">
<div className="mercury-drop d1"></div>
<div className="mercury-drop d2"></div>
<div className="mercury-drop d3"></div>
<span>MERCURY POOL</span>
</button>
</div>

<div className="btn-wrapper">
<span className="btn-label">15. Ripple Click</span>
<button className="btn-ripple btn-size-2" id="rippleBtn">
                RIPPLE CLICK
            </button>
</div>

<div className="btn-wrapper">
<span className="btn-label">16. Spotlight Flow</span>
<button className="btn-spotlight btn-size-2" id="spotBtn">
<div className="spotlight-beam"></div>
<span style={{position: 'relative', pointerEvents: 'none'}}>SPOTLIGHT FLOW</span>
</button>
</div>

<div className="btn-wrapper">
<span className="btn-label">17. Glitch Liquid</span>
<button className="btn-glitch btn-size-2">
                GLITCH LIQUID
            </button>
</div>

<div className="btn-wrapper">
<span className="btn-label">18. System Scan</span>
<button className="btn-scan btn-size-2">
<div className="scan-line"></div>
<span style={{position: 'relative', zIndex: '2'}}>SYSTEM SCAN</span>
</button>
</div>

<div className="category-header">
<h2 className="category-title">Depth &amp; Dimension</h2>
</div>

<div className="btn-wrapper">
<span className="btn-label">19. Cube Flip</span>
<div className="btn-size-3 group">
<div className="h-14 w-full persp-1000">
<div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:[transform:rotateX(90deg)] cursor-pointer">
<div className="absolute inset-0 bg-zinc-800 border border-zinc-700 flex items-center justify-center gap-2 rounded-lg [transform:translateZ(1.75rem)] shadow-lg">
<span className="text-sm font-medium text-zinc-100">Hover Me</span>
<i className="w-4 h-4 text-zinc-400" data-lucide="box"></i>
</div>
<div className="absolute inset-0 bg-indigo-600 flex items-center justify-center gap-2 rounded-lg [transform:rotateX(-90deg)_translateZ(1.75rem)] shadow-inner">
<span className="text-sm font-medium text-white tracking-wide">HELLO</span>
<i className="w-4 h-4 text-white/80" data-lucide="sparkles"></i>
</div>
</div>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">20. Card Flip</span>
<div className="btn-size-3 group">
<div className="h-14 w-full persp-1000">
<div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:[transform:rotateY(180deg)] cursor-pointer">
<div className="absolute inset-0 backface-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-between px-6 rounded-lg shadow-xl">
<span className="text-sm font-medium">View Details</span>
<i className="w-4 h-4 text-zinc-500" data-lucide="arrow-right"></i>
</div>
<div className="absolute inset-0 backface-hidden bg-emerald-600 rounded-lg [transform:rotateY(180deg)] flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
<span className="text-sm font-semibold text-white">Confirmed</span>
</div>
</div>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">21. Levitate</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center">
<button className="group relative w-full h-12 bg-zinc-800 border border-zinc-700 rounded-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(120,113,255,0.3)] flex items-center justify-center gap-2">
<i className="w-4 h-4 text-zinc-400 group-hover:text-indigo-400 transition-colors" data-lucide="upload-cloud"></i>
<span className="text-sm font-medium text-zinc-200 group-hover:text-white">Lift Off</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">22. Press Down</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-end pb-1">
<button className="w-full h-12 bg-blue-600 rounded-lg relative text-white font-semibold text-sm tracking-tight transition-all duration-100 shadow-[0_6px_0_rgb(30,58,138),0_15px_20px_rgba(0,0,0,0.3)] active:shadow-[0_0px_0_rgb(30,58,138),0_0px_0px_rgba(0,0,0,0.3)] active:translate-y-[6px] flex items-center justify-center gap-2 border-t border-blue-400">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Download</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">23. Perspective Tilt</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center persp-1000">
<button className="w-full h-14 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 rounded-lg shadow-2xl transition-all duration-500 ease-out flex items-center justify-center gap-3 group hover:[transform:rotateX(15deg)_rotateY(-10deg)_scale(1.05)]">
<div className="bg-zinc-950 p-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-600 transition-colors">
<i className="w-4 h-4 text-zinc-400 group-hover:text-white" data-lucide="layers"></i>
</div>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white tracking-tight">Explore 3D</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">24. Layer Stack</span>
<div className="btn-size-3 group">
<div className="h-14 w-full relative flex items-center justify-center">
<div className="absolute w-full h-12 bg-rose-900/40 rounded-lg border border-rose-900/50 transition-transform duration-300 group-hover:translate-y-2 group-hover:translate-x-2"></div>
<div className="absolute w-full h-12 bg-rose-800/60 rounded-lg border border-rose-800/50 transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1 backdrop-blur-sm"></div>
<div className="relative w-full h-12 bg-zinc-900 rounded-lg border border-zinc-700 flex items-center justify-center gap-2 z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 shadow-xl cursor-pointer">
<span className="text-sm font-medium text-rose-500">Stacked</span>
<i className="w-3.5 h-3.5 text-rose-500" data-lucide="copy"></i>
</div>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">25. Isometric</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center pt-2">
<button className="relative group bg-amber-500 border-none w-full max-w-[180px] h-10 mr-2 mb-2 transition-transform duration-200 active:translate-x-[4px] active:translate-y-[4px]" style={{overflow: 'visible'}}>
<div className="absolute inset-0 bg-amber-400 flex items-center justify-center gap-2 z-20 border border-amber-300/20">
<span className="text-amber-950 font-bold text-sm tracking-tight">VOXEL</span>
<i className="w-4 h-4 text-amber-900" data-lucide="box-select"></i>
</div>
<div className="absolute top-[4px] -right-[6px] w-[6px] h-full bg-amber-700 origin-left skew-y-[45deg] z-10 transition-all duration-200 group-active:w-0 group-active:-right-0"></div>
<div className="absolute -bottom-[6px] left-[4px] w-full h-[6px] bg-amber-600 origin-top skew-x-[45deg] z-10 transition-all duration-200 group-active:h-0 group-active:-bottom-0"></div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">26. Emboss Toggle</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<label className="cursor-pointer select-none w-full">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full h-12 rounded-full bg-[#0a0a0f] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)] flex items-center justify-center gap-3 transition-all duration-300 peer-checked:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.8)] peer-checked:text-indigo-400 text-zinc-500">
<i className="w-4 h-4 transition-transform duration-300 peer-checked:scale-90" data-lucide="power"></i>
<span className="text-sm font-semibold tracking-wide transition-all peer-checked:translate-y-[1px]">POWER</span>
</div>
</label>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">27. Drawer Slide</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 relative cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-[150%]">
<span className="text-sm font-medium text-zinc-300">Settings</span>
</div>
<div className="absolute inset-0 flex items-center justify-between px-6 transition-transform duration-300 translate-x-[150%] group-hover:translate-x-0 bg-zinc-800 text-white">
<span className="text-sm font-medium">Open</span>
<i className="w-4 h-4" data-lucide="sliders"></i>
</div>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">28. Trapdoor Hinge</span>
<div className="btn-size-3 group">
<div className="h-14 w-full persp-2000">
<div className="relative w-full h-full cursor-pointer preserve-3d">
<div className="absolute inset-0 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center justify-center gap-2 shadow-[inset_0_0_20px_rgba(34,197,94,0.2)]">
<span className="text-sm font-bold tracking-widest text-green-400 drop-shadow-md">ACCESS GRANTED</span>
</div>
<div className="absolute inset-0 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-between px-6 origin-top transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-x-[110deg] backface-hidden z-10 shadow-lg">
<span className="text-sm font-medium text-zinc-300">Restricted</span>
<div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">29. Elastic Squish</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="w-full h-12 bg-violet-600 rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 transition-transform duration-100 active:scale-95 active:scale-y-90 hover:bg-violet-500">
<i className="w-4 h-4" data-lucide="activity"></i>
<span>Pulse</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">30. Biometric Scan</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center relative overflow-hidden rounded-lg bg-zinc-950 border border-zinc-800 transition-colors duration-300 group-hover:border-emerald-500/50 cursor-pointer">
<span className="text-sm font-medium text-zinc-500 relative z-10 transition-opacity duration-300 group-hover:opacity-0">TOUCH ID</span>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<i className="w-8 h-8 text-emerald-500/80" data-lucide="fingerprint"></i>
</div>
<div className="absolute inset-y-0 w-1 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8),0_0_3px_#fff] z-20 opacity-0 group-hover:opacity-100 animate-scan"></div>
<span className="absolute bottom-1 right-2 text-[10px] font-mono text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity delay-300 tracking-widest">SCANNING...</span>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">31. Skewed Link</span>
<div className="btn-size-3 group">
<div className="h-14 w-full overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800/50 cursor-pointer">
<div className="w-full h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
<div className="h-14 flex items-center justify-center gap-2 text-zinc-300">
<span className="text-sm font-medium">Contact Us</span>
</div>
<div className="h-14 flex items-center justify-center gap-2 bg-zinc-100 text-black">
<span className="text-sm font-bold">Email Now</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">32. Glass Depth</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<div className="relative w-full h-12 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-40 transition-transform duration-500 group-hover:scale-110"></div>
<button className="relative w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white text-sm font-medium shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
<i className="w-3.5 h-3.5 text-pink-300" data-lucide="gem"></i>
<span>Glass UI</span>
</button>
</div>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">33. Folder Open</span>
<div className="btn-size-3 group">
<div className="h-14 w-full persp-1000">
<div className="relative w-full h-12 cursor-pointer preserve-3d">
<div className="absolute inset-0 bg-zinc-800 rounded-r-lg rounded-l-sm border border-zinc-700 flex items-center justify-end px-4 shadow-sm">
<span className="text-xs font-mono text-zinc-500">./confidential</span>
</div>
<div className="absolute top-1 bottom-1 left-0 w-[96%] bg-white rounded-r-md rounded-l-sm transition-transform duration-500 ease-out group-hover:translate-x-2 shadow-sm z-10 flex items-center pl-4">
<div className="w-3/4 h-1 bg-zinc-200 rounded-full"></div>
</div>
<div className="absolute inset-0 bg-zinc-700 rounded-r-lg rounded-l-sm border border-zinc-600 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-y-[-140deg] z-20 flex items-center justify-center gap-2 preserve-3d shadow-xl">
<div className="backface-hidden flex items-center gap-2">
<i className="w-4 h-4 text-zinc-300" data-lucide="folder"></i>
<span className="text-sm font-medium text-white">Docs</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">34. Notification Pop</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center persp-1000">
<button className="relative w-full h-12 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-zinc-750 preserve-3d group-hover:border-zinc-500" style={{overflow: 'visible'}}>
<div className="animate-bell-wiggle origin-top">
<i className="w-4 h-4 group-hover:text-white transition-colors" data-lucide="bell"></i>
</div>
<span className="group-hover:text-white transition-colors">Alerts</span>
<div className="absolute -top-2 -right-2 w-6 h-6 z-20 preserve-3d transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[transform:translateZ(40px)_scale(1.2)]">
<div className="w-full h-full bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#0a0a0f] shadow-lg relative">
                                3
                                <div className="absolute inset-0 rounded-full bg-red-500 -z-10 animate-pulse-ring hidden group-hover:block"></div>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="category-header">
<h2 className="category-title">Button Interaction Library</h2>
</div>

<div className="btn-wrapper">
<span className="btn-label">35. Shimmer</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative px-6 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm font-medium text-white overflow-hidden group hover:border-zinc-700 transition-colors">
<span className="relative z-10">Generate Key</span>
<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">36. Spotlight</span>
<div className="btn-size-3 group/card" onmousemove="handleSpotlight(event, this)">
<div className="h-14 w-full flex items-center justify-center relative">
<div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/card:opacity-100 z-0" style={{background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 40%)'}}></div>
<button className="relative z-10 px-6 py-2.5 rounded-full bg-zinc-800/50 border border-white/10 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all">
                        Explore View
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">37. Liquid</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<div className="goo-filter relative w-full flex justify-center items-center h-full">
<button className="relative w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-90 transition-transform active:scale-75 peer" style={{zIndex: 'auto', backdropFilter: 'none', overflow: 'visible', isolation: 'auto', border: 'none'}}>
<i className="w-5 h-5" data-lucide="plus"></i>
</button>

<div className="absolute w-10 h-10 bg-pink-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-hover:translate-x-[40px] transition-transform duration-500 ease-out -z-10"></div>
<div className="absolute w-10 h-10 bg-pink-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-hover:-translate-x-[40px] transition-transform duration-500 ease-out -z-10"></div>
</div>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">38. Orbit</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative w-14 h-14 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center group" style={{overflow: 'visible'}}>
<i className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" data-lucide="globe"></i>
<div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" style={{animation: 'orbit-spin 3s linear infinite'}}></div>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">39. Glitch</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center overflow-hidden">
<button className="relative px-6 py-2.5 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-500/20 transition-colors">
<span className="glitch-text block">Delete</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">40. Scan</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center overflow-hidden">
<button className="relative w-40 h-10 rounded bg-zinc-950 border border-zinc-800 group-hover:border-cyan-500/50 transition-colors duration-500 flex items-center justify-center overflow-hidden">
<span className="text-xs text-zinc-400 font-medium z-10 flex gap-2 items-center group-hover:text-cyan-100 transition-colors">
<i className="w-4 h-4 text-cyan-500" data-lucide="scan-face"></i> Authenticate
                        </span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent w-[50%] h-full -skew-x-12 opacity-0 group-hover:animate-[scan-line-b4_1.5s_ease-in-out_infinite] blur-sm"></div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">41. Sonic</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="h-10 px-4 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center gap-1 group hover:border-rose-500/50 transition-colors">
<i className="w-3 h-3 fill-zinc-300 text-zinc-300 mr-1" data-lucide="play"></i>
<div className="w-1 bg-rose-500 h-[40%] rounded-full group-hover:animate-[sound-bar_0.5s_ease-in-out_infinite]"></div>
<div className="w-1 bg-rose-500 h-[80%] rounded-full group-hover:animate-[sound-bar_0.4s_ease-in-out_infinite_0.1s]"></div>
<div className="w-1 bg-rose-500 h-[50%] rounded-full group-hover:animate-[sound-bar_0.6s_ease-in-out_infinite_0.2s]"></div>
<div className="w-1 bg-rose-500 h-[70%] rounded-full group-hover:animate-[sound-bar_0.5s_ease-in-out_infinite_0.3s]"></div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">42. Status</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative flex items-center gap-3 px-6 py-2.5 rounded-full border border-emerald-900/50 bg-emerald-950/10 hover:bg-emerald-950/30 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<span className="relative flex h-3 w-3">
<span className="animate-[pulse-ring-b4_1.5s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</span>
<span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Operational</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">43. Terminal</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[linear-gradient(0deg,transparent_24%,rgba(34,197,94,0.3)_25%,rgba(34,197,94,0.3)_26%,transparent_27%,transparent_74%,rgba(34,197,94,0.3)_75%,rgba(34,197,94,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(34,197,94,0.3)_25%,rgba(34,197,94,0.3)_26%,transparent_27%,transparent_74%,rgba(34,197,94,0.3)_75%,rgba(34,197,94,0.3)_76%,transparent_77%,transparent)] bg-[length:30px_30px]"></div>
<button className="relative px-6 py-2 bg-black border border-green-900 text-green-500 font-mono text-xs rounded hover:shadow-[0_0_15px_rgba(22,163,74,0.3)] transition-shadow">
                        &gt; EXECUTE_
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">44. Emitter</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center overflow-hidden">
<button className="group relative px-6 py-2.5 rounded-xl bg-white text-black text-sm font-bold shadow-lg hover:shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all duration-200 z-10" onclick="emitParticles(this)" style={{overflow: 'visible'}}>
<span className="flex items-center gap-2">
                            Click Me
                            <i className="w-4 h-4 text-yellow-600 fill-yellow-500 animate-pulse" data-lucide="sparkles"></i>
</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">45. 3D Push</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="group relative" style={{overflow: 'visible'}}>
<div className="absolute inset-0 bg-violet-800 rounded-lg translate-y-1 group-active:translate-y-0 transition-transform"></div>
<div className="relative bg-violet-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium -translate-y-1 group-active:translate-y-0 transition-transform duration-100 ease-out flex items-center gap-2 border-t border-white/20">
<i className="w-4 h-4" data-lucide="box"></i>
                            Push Me
                        </div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">46. Gradient</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative p-[2px] rounded-lg overflow-hidden group">
<div className="absolute inset-0 animate-[border-rotate_3s_linear_infinite] rainbow-gradient opacity-40 group-hover:opacity-100 blur-[2px] transition-opacity duration-300"></div>
<div className="relative bg-zinc-950 px-8 py-2.5 rounded-[6px] text-sm text-zinc-400 group-hover:text-white transition-colors z-10 flex items-center gap-2">
<span className="font-medium">Prism</span>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">47. Reveal</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-black text-sm font-semibold hover:bg-white hover:pl-5 hover:pr-7 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] shadow hover:shadow-xl">
<i className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 -ml-2 group-hover:ml-0 text-black" data-lucide="arrow-right"></i>
<span>Checkout</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">48. Ghost</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative px-6 py-2 rounded-md border border-zinc-600 text-zinc-400 text-sm overflow-hidden group hover:border-zinc-300 transition-colors">
<span className="relative z-10 group-hover:text-black transition-colors duration-300">Hover Fill</span>
<div className="absolute inset-0 bg-zinc-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">49. Toggle</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="group w-16 h-8 rounded-full bg-zinc-800 border border-zinc-600 relative transition-colors hover:bg-zinc-700 flex items-center justify-start p-1">
<div className="w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-300 group-hover:translate-x-[1.9rem] group-active:scale-90"></div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">50. Feedback</span>
<div className="btn-size-3">
<div className="h-14 w-full flex items-center justify-center">
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-xs text-zinc-300 hover:bg-zinc-700 transition-colors" onclick="copyToClipboard(this)">
<span className="default-state flex items-center gap-2">
<i className="w-3 h-3" data-lucide="copy"></i> Copy Code
                        </span>
<span className="success-state hidden items-center gap-2 text-emerald-400">
<i className="w-3 h-3" data-lucide="check"></i> Copied!
                        </span>
</button>
</div>
</div>
</div>

<div className="category-header">
<h2 className="category-title">Typography &amp; Interaction Lab</h2>
</div>

<div className="btn-wrapper">
<span className="btn-label">51. Wave</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative px-6 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors">
<div className="text-sm font-medium text-zinc-300 flex">
<span className="wave-char">W</span>
<span className="wave-char">a</span>
<span className="wave-char">v</span>
<span className="wave-char">e</span>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">52. Typewriter</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="w-40 h-10 flex items-center justify-center rounded bg-black border border-zinc-800 hover:border-zinc-500 transition-all">
<div className="text-sm font-mono text-zinc-400">
<div className="hidden group-hover:block typewriter-text">console.log()</div>
<span className="group-hover:hidden">Hover Me</span>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">53. Scramble</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative px-8 py-3 bg-[#18181b] text-zinc-300 text-sm font-bold tracking-wider rounded border border-zinc-800 overflow-hidden">
<span className="scramble-text relative z-10 block" data-text="DECODED">ENCRYPT</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">54. Split</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative px-6 py-2 bg-zinc-900 rounded border border-zinc-800 overflow-hidden w-32 h-10">
<div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mix-blend-difference text-white">
<div className="split-reveal-wrapper w-full h-full relative">
<span className="split-top absolute inset-0 flex items-center justify-center bg-zinc-900 text-sm font-medium text-zinc-400">Hover</span>
<span className="split-bottom absolute inset-0 flex items-center justify-center bg-zinc-900 text-sm font-medium text-zinc-400" style={{clipPath: 'inset(50% 0 0 0)'}}>Hover</span>
</div>
</div>
<div className="reveal-layer absolute inset-0 bg-white flex items-center justify-center z-10">
<span className="text-black text-xs font-bold uppercase tracking-wide">Revealed</span>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">55. Morph</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 hover:border-green-900/50 transition-all duration-300">
<div className="css-icon"></div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">56. Gradient Text</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="px-6 py-2.5 rounded-lg bg-black border border-zinc-800">
<span className="text-sm font-bold gradient-move tracking-tight">Prismatic Flow</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">57. Swing</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative text-zinc-300 hover:text-white transition-colors">
<div className="text-xl font-light tracking-widest flex gap-[2px] cursor-default">
<span className="swing-char">H</span>
<span className="swing-char">a</span>
<span className="swing-char">n</span>
<span className="swing-char">g</span>
</div>
<div className="absolute -top-4 left-0 w-full flex justify-between opacity-0 group-hover:opacity-20 transition-opacity">
<div className="w-[1px] h-4 bg-white mx-auto"></div>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">58. Neon</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="bg-black/50 border border-zinc-800 px-6 py-3 rounded-md hover:border-pink-900/50 transition-colors">
<span className="text-sm font-mono font-bold tracking-widest text-zinc-600 transition-colors duration-300 flex gap-1">
<span className="neon-char" style={{animationDelay: '0s'}}>O</span>
<span className="neon-char" style={{animationDelay: '0.1s'}}>P</span>
<span className="neon-char" style={{animationDelay: '0.3s'}}>E</span>
<span className="neon-char" style={{animationDelay: '0.2s'}}>N</span>
</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">59. Rolodex</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center perspective-1000">
<button className="h-10 w-32 relative">
<div className="rolodex-word w-full h-full text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-700 rounded shadow-lg">
<div className="rolodex-front">Menu</div>
<div className="rolodex-back bg-white text-black border border-white rounded">Close</div>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">60. Focus</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="px-8 py-3 rounded-full bg-zinc-950 border border-zinc-800">
<span className="blur-target block text-sm font-semibold text-white tracking-tighter">UNCLASSIFIED</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">61. Strike</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="text-sm font-medium tracking-wide">
<span className="strike-fill">CANCEL</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">62. Stack</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="px-5 py-2 rounded border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition-colors overflow-hidden">
<div className="slide-stack-wrapper text-sm font-medium text-zinc-300">
<div className="slide-stack-inner flex flex-col items-center">
<span>Upload</span>
<span className="text-blue-400">Confirm</span>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">63. Elastic</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="w-full h-full flex items-center justify-center">
<span className="stretch-text text-2xl font-black text-zinc-800 group-hover:text-indigo-500 transition-colors">GO</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">64. Fill</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button>
<span className="outline-text text-3xl font-bold tracking-tight uppercase italic">Hollow</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">65. Marquee</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center overflow-hidden">
<button className="w-32 h-8 rounded-full bg-amber-950/20 border border-amber-900/50 overflow-hidden flex items-center relative">
<div className="marquee-content absolute left-0 flex gap-4 text-[10px] font-bold text-amber-500 uppercase tracking-widest pl-4">
<span>Warning</span>
<span>Warning</span>
<span>Warning</span>
<span>Warning</span>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">66. Slice</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="sliced-wrapper text-xl font-bold text-white tracking-tight">
<div className="slice-top">SYSTEM</div>
<div className="slice-bottom">SYSTEM</div>
</button>
</div>
</div>
</div>

<div className="category-header">
<h2 className="category-title">Design Aesthetics Museum</h2>
</div>

<div className="btn-wrapper">
<span className="btn-label">67. Glassmorphism</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/10 opacity-50"></div>
<button className="glass-btn relative px-8 py-3 rounded-xl overflow-hidden text-white/90 text-sm font-medium tracking-wide">
                        Frosted UI
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">68. Neumorphism</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="neu-btn w-32 h-12 rounded-full flex items-center justify-center text-zinc-500 text-sm font-semibold tracking-wider">
                        Soft Clay
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">69. Brutalist</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="brutalist-btn bg-yellow-400 border-2 border-black text-black px-6 py-2 text-sm font-bold uppercase tracking-tight">
                        Hard Edge
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">70. Retro Pixel</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="pixel-btn bg-transparent border-none text-white px-6 py-2 text-xs font-mono tracking-widest uppercase">
                        Start Game
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">71. Gradient Mesh</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="mesh-btn px-8 py-3 rounded-full text-white font-bold text-sm shadow-lg hover:shadow-pink-500/30 transition-shadow">
                        Aurora
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">72. Outline Draw</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative w-32 h-12 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 128 48">
<rect className="draw-path" fill="none" height="44" rx="4" stroke="white" strokeWidth="2" width="124" x="2" y="2"></rect>
</svg>
<span className="text-white text-sm font-light tracking-widest uppercase">Trace</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">73. Minimal</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="relative pb-1">
<span className="text-zinc-300 group-hover:text-white transition-colors font-serif italic text-lg tracking-wide">Refinement</span>
<div className="elegant-line absolute bottom-0 left-0 h-[1px] bg-white w-0"></div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">74. Chrome</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="chrome-btn w-32 h-10 rounded text-[10px] font-black uppercase tracking-widest text-black flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        Titanium
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">75. Cyberpunk</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center overflow-hidden">
<button className="glitch-btn relative px-6 py-2 bg-black border border-zinc-700 text-white font-mono font-bold tracking-wider" data-text="DECRYPT">
<span className="relative z-10 flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full"></span> DECRYPT
                        </span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">76. Claymorphism</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="clay-btn px-6 py-3 font-bold text-sm tracking-wide">
                        Float 3D
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">77. Skeuomorphic</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="skeuo-btn w-16 h-16 rounded-full flex items-center justify-center text-zinc-400">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" x2="12" y1="2" y2="12"></line></svg>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">78. Liquid Blob</span>
<div className="btn-size-3 group">
<div className="h-24 w-full flex items-center justify-center">
<button className="blob-btn w-24 h-24 bg-white text-black font-bold text-xs flex items-center justify-center transition-colors duration-500">
                        MORPH
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">79. Bauhaus</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="bauhaus-btn w-32 h-12 flex items-center justify-center border-2 border-zinc-900">
<div className="bauhaus-shape bauhaus-1 w-16 h-16 bg-blue-600 rounded-full mix-blend-multiply opacity-80 left-[-10px]"></div>
<div className="bauhaus-shape bauhaus-2 w-8 h-8 bg-red-600 right-2 top-2"></div>
<div className="bauhaus-shape bauhaus-3 w-24 h-2 bg-yellow-500 bottom-2"></div>
<span className="relative z-10 font-bold text-zinc-900 tracking-tight">FORM</span>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">80. Terminal DOS</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="w-full max-w-[160px] bg-black border border-green-900/50 p-3 rounded font-mono text-xs text-green-500 shadow-[0_0_10px_rgba(34,197,94,0.1)] hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-shadow">
<div className="flex flex-col items-start gap-1">
<span className="opacity-50 text-[10px]">C:\USER\ADMIN&gt;</span>
<span className="flex">EXECUTE<span className="cursor-blink bg-green-500 w-2 h-4 ml-1 block"></span></span>
</div>
</button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">81. Isometric</span>
<div className="btn-size-3 group iso-wrap">
<div className="h-14 w-full flex items-center justify-center">
<button className="iso-btn bg-indigo-600 w-28 h-12 flex items-center justify-center text-white font-bold tracking-wider text-sm border border-indigo-400">
                        BLOCK
                    </button>
</div>
</div>
</div>

<div className="btn-wrapper">
<span className="btn-label">82. Origami</span>
<div className="btn-size-3 group">
<div className="h-14 w-full flex items-center justify-center">
<button className="paper-btn px-8 py-3 text-zinc-800 font-bold text-sm tracking-wide shadow-xl">
                        UNFOLD
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
