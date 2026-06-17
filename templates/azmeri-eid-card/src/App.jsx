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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const state = { isOpen: false, isAnimating: false };
        
        const elements = {
            flap: document.getElementById('flap'),
            flapText: document.getElementById('flap-text'),
            card: document.getElementById('card'),
            cardContent: document.getElementById('card-content'),
            scene: document.getElementById('scene'),
            bubu: document.getElementById('bubu'),
            dudu: document.getElementById('dudu'),
            flower: document.getElementById('flower'),
            heart: document.getElementById('heart'),
            animText: document.getElementById('anim-text')
        };

        function openEnvelope() {
            if (state.isOpen) return;
            state.isOpen = true;

            // 1. Open flap
            elements.flap.classList.add('flap-open');
            elements.flapText.style.opacity = '0';
            elements.flap.classList.remove('cursor-pointer');

            // 2. Slide card up after flap opens
            setTimeout(() => {
                elements.card.classList.add('card-up');
                elements.scene.classList.add('scene-shifted');
            }, 400);

            // 3. Fade in content and trigger scene
            setTimeout(() => {
                elements.cardContent.classList.remove('opacity-0');
                playAnimation();
            }, 1000);
        }

        function closeEnvelope(e) {
            e.stopPropagation();
            if (!state.isOpen) return;
            state.isOpen = false;

            // Hide content and reset animation
            elements.cardContent.classList.add('opacity-0');
            resetAnimationClasses();

            // Slide card down
            setTimeout(() => {
                elements.card.classList.remove('card-up');
                elements.scene.classList.remove('scene-shifted');
            }, 300);

            // Close flap
            setTimeout(() => {
                elements.flap.classList.remove('flap-open');
                elements.flapText.style.opacity = '1';
                elements.flap.classList.add('cursor-pointer');
            }, 900);
        }

        function resetAnimationClasses() {
            const animElements = [elements.bubu, elements.dudu, elements.flower, elements.heart, elements.animText];
            animElements.forEach(el => {
                el.classList.remove('play', 'hide');
                // Force reflow to allow animation restart
                void el.offsetWidth;
            });
        }

        function playAnimation(e) {
            if (e) e.stopPropagation();
            if (state.isAnimating) return;
            state.isAnimating = true;

            resetAnimationClasses();

            // Sequence:
            // 0.0s: Walk towards each other
            // 0.5s: Flower appears on Dudu
            // 1.5s: Hug (walk completes) -> Flower hides
            // 1.6s: Heart floats up
            // 1.8s: Text pops in

            elements.bubu.classList.add('play');
            elements.dudu.classList.add('play');
            elements.flower.classList.add('play');

            setTimeout(() => {
                elements.flower.classList.add('hide');
            }, 1500);

            elements.heart.classList.add('play');
            elements.animText.classList.add('play');

            setTimeout(() => {
                state.isAnimating = false;
            }, 3600); // Wait for full sequence before allowing replay
        }
    
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
      

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<iconify-icon className="absolute top-1/4 left-1/4 text-rose-200 text-6xl float-1 opacity-50" icon="solar:moon-stars-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute top-1/3 right-1/4 text-amber-200 text-4xl float-2 opacity-60" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute bottom-1/3 left-1/3 text-rose-200 text-2xl float-3 opacity-40" icon="solar:star-outline" strokeWidth="1.5"></iconify-icon>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] aspect-square bg-gradient-to-tr from-rose-100/20 to-transparent rounded-full blur-3xl pulse-soft pointer-events-none"></div>
</div>

<main className="relative w-[85vw] max-w-sm aspect-[4/3] perspective-container z-10 scene-transition mt-16" id="scene">

<div className="absolute inset-0 rounded-lg shadow-sm z-10 overflow-hidden">
<svg className="absolute inset-0" height="100%" preserveaspectratio="none" width="100%">
<rect fill="#fecdd3" height="100%" width="100%"></rect>
<pattern height="20" id="pattern-dots" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" fill="#fda4af" opacity="0.4" r="1"></circle>
</pattern>
<rect fill="url(#pattern-dots)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute bottom-[2%] left-[2.5%] w-[95%] aspect-[3/4] bg-white rounded-xl flex flex-col items-center p-6 text-center card-transition z-20 shadow-md border border-white/60" id="card">
<div className="opacity-0 transition-opacity duration-700 delay-300 flex flex-col items-center justify-between h-full w-full" id="card-content">
<div className="w-full">
<h1 className="text-xl md:text-2xl font-semibold tracking-tight text-rose-500 mb-1 leading-tight">Eid Mubarak<br/>Dear Bubu <span className="text-rose-400">❤️</span></h1>
<p className="text-sm text-zinc-500 mb-6 font-medium">Wishing you happiness, love<br/>and endless smiles 🌙✨</p>
</div>

<div className="relative w-full aspect-video bg-gradient-to-b from-rose-50/50 to-rose-50/10 rounded-2xl mb-4 flex items-end justify-center pb-4 border border-rose-100/50 overflow-hidden">

<div className="absolute bottom-0 w-full h-1/3 bg-white/40 blur-md"></div>

<div className="bear bubu-bear w-1/5 aspect-[4/5] rounded-t-[2rem] rounded-b-xl anim-bubu z-10 mr-4 shadow-sm" id="bubu">
<div className="eye left-[20%]"></div>
<div className="eye right-[20%]"></div>
<div className="blush left-[10%]"></div>
<div className="blush right-[10%]"></div>
<div className="snout"></div>
</div>

<div className="bear dudu-bear w-1/5 aspect-[4/5] rounded-t-[2rem] rounded-b-xl anim-dudu z-10 ml-4 shadow-sm flex items-center justify-center relative" id="dudu">
<div className="eye left-[20%]"></div>
<div className="eye right-[20%]"></div>
<div className="blush left-[10%]"></div>
<div className="blush right-[10%]"></div>
<div className="snout"></div>

<div className="absolute -left-[30%] top-[40%] text-xl anim-flower z-20 origin-bottom" id="flower">🌸</div>
</div>

<div className="absolute top-[20%] text-3xl anim-heart z-30 drop-shadow-sm" id="heart">❤️</div>

<div className="absolute top-[10%] text-sm font-semibold text-rose-400 anim-text tracking-tight bg-white/80 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm" id="anim-text">Yay! Hugs! ✨</div>
</div>

<div className="flex gap-3 w-full justify-center">
<button className="group flex items-center gap-1 text-xs px-4 py-2 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 transition-all font-medium border border-rose-100 active:scale-95" onclick="playAnimation(event)">
<iconify-icon className="text-base group-hover:-rotate-90 transition-transform duration-500" icon="solar:restart-circle-linear"></iconify-icon> Replay
                    </button>
<button className="flex items-center gap-1 text-xs px-4 py-2 rounded-full bg-zinc-50 text-zinc-600 hover:bg-zinc-100 transition-all font-medium border border-zinc-200 active:scale-95" onclick="closeEnvelope(event)">
<iconify-icon className="text-base" icon="solar:box-minimalistic-linear"></iconify-icon> Close
                    </button>
</div>
</div>
</div>

<div className="absolute inset-0 z-30 pointer-events-none drop-shadow-sm">
<svg height="100%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">

<polygon fill="#fda4af" points="0,0 50,55 0,100"></polygon>
<polygon fill="#000000" opacity="0.02" points="0,0 50,55 0,100"></polygon>

<polygon fill="#fda4af" points="100,0 50,55 100,100"></polygon>
<polygon fill="#000000" opacity="0.04" points="100,0 50,55 100,100"></polygon>

<polygon fill="#fb7185" points="0,100 50,55 100,100"></polygon>
</svg>
</div>

<div className="absolute inset-0 z-40 flap-transition cursor-pointer" id="flap" onclick="openEnvelope()">
<svg className="drop-shadow-md" height="100%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">
<polygon fill="#fb7185" points="0,0 100,0 50,60"></polygon>

<polygon fill="#000000" opacity="0.05" points="0,0 100,0 50,60"></polygon>
</svg>
<div className="absolute top-[25%] left-1/2 -translate-x-1/2 text-white/90 text-sm font-medium tracking-wide flex items-center gap-2 transition-opacity duration-300" id="flap-text">
                Tap to Open <iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
</div>
</main>

<footer className="absolute bottom-6 text-xs text-zinc-400 font-medium tracking-wide z-0">
        Made with <span className="text-rose-400">❤️</span> for Bubu
    </footer>


    </>
  );
}
