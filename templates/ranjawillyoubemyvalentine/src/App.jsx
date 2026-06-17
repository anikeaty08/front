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



      const envelope = document.querySelector('.envelope-wrapper');
      const btnYes = document.getElementById('btn-yes');
      const btnNo = document.getElementById('btn-no');
      const zone = document.getElementById('button-zone');

      // Envelope interaction
      if (envelope) {
        envelope.addEventListener('click', () => {
          if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            setTimeout(() => {
              if (zone) {
                zone.classList.remove('opacity-0', 'pointer-events-none');
                zone.classList.add('opacity-100');
              }
            }, 3200);
          }
        });
      }

      // No button playful dodge behavior
      if (btnNo && zone) {
        const dodge = (e) => {
          // Move away from cursor and stay safe
          // Since YES button is to the left, we prefer moving right (positive X)
          // Range: 20px to 80px to the right
          const x = 20 + Math.random() * 60;
          // Range: -20px to 20px vertically to stay in letter bounds
          const y = (Math.random() * 40) - 20;

          btnNo.style.transition = 'transform 0.2s ease-out';
          btnNo.style.transform = `translate(${x}px, ${y}px)`;
        };

        btnNo.addEventListener('mouseover', dodge);
        btnNo.addEventListener('touchstart', dodge);
        btnNo.addEventListener('click', (e) => { e.preventDefault(); });
      }

      // Yes button interaction
      if (btnYes) {
        btnYes.addEventListener('click', (e) => {
          e.stopPropagation();
          const landing = document.getElementById('view-landing');
          const flipbook = document.getElementById('view-flipbook');

          // Fade out landing
          if (landing) {
            landing.style.transition = 'opacity 0.8s ease';
            landing.style.opacity = '0';
            landing.style.pointerEvents = 'none';
          }

          setTimeout(() => {
            if (landing) landing.style.display = 'none';
            if (flipbook) {
              flipbook.classList.remove('hidden');
              flipbook.classList.add('flex');
              // Fade in
              setTimeout(() => {
                flipbook.classList.remove('opacity-0');
              }, 50);
            }
          }, 800);
        });
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
      

<main className="flex flex-col transition-opacity duration-700 z-10 w-full h-full relative items-center justify-center" id="view-landing">
<div className="relative w-72 h-48 sm:w-80 sm:h-56 perspective-1500 group translate-y-8" id="scene-container">

<div className="absolute -bottom-12 left-8 right-8 h-4 bg-pink-400/20 blur-xl rounded-[100%] transition-all duration-1000"></div>
<div className="envelope-wrapper w-full h-full">

<div className="absolute inset-0 bg-pink-200 rounded-lg shadow-sm border border-pink-300/40"></div>

<div className="letter absolute left-8 right-8 bottom-0 h-[120%] bg-pink-50 rounded-3xl shadow-xl border-2 border-white flex flex-col items-center justify-center p-6 overflow-hidden" id="the-letter">

<div className="flex flex-col items-center w-full h-full relative z-10">

<h1 className="font-script text-2xl sm:text-3xl text-pink-500 leading-tight text-center mb-4 drop-shadow-sm tracking-tight font-semibold">
                Baby, will you be
                <br/>
                my Valentine?
              </h1>

<div className="relative w-full flex items-center justify-center mt-2 opacity-0 transition-opacity duration-1000 delay-300 pointer-events-none" id="button-zone">
<div className="relative w-full h-16 flex items-center justify-center gap-4">

<button className="btn-glass px-6 py-2 rounded-full text-pink-500 font-ui text-xs sm:text-sm tracking-wide z-20 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] active:scale-95 cursor-pointer" id="btn-yes">
                    YESSSS!!!
                  </button>

<button className="btn-glass px-6 py-2 rounded-full text-pink-400 font-ui text-xs sm:text-sm tracking-wide z-10 transition-all duration-150 ease-out font-normal cursor-default" id="btn-no">
                    No :(
                  </button>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-pink-100/30 to-white/50 pointer-events-none z-0"></div>
</div>

<div className="absolute inset-0 z-30 pointer-events-none">
<div className="absolute bottom-0 left-0 w-full h-full bg-pink-300 rounded-b-lg shadow-inner border-t border-pink-200" style={{clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 50% 55%, 0% 0%)', background: 'linear-gradient(135deg, #f9a8d4, #f472b6)'}}></div>
</div>

<div className="flap w-full h-full absolute top-0 left-0">
<div className="origin-top flex bg-pink-300 w-full h-1/2 border-white/20 rounded-t-lg border-t relative shadow-sm items-center justify-center" style={{clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)', background: '#f9a8d4'}}>

<div className="absolute bottom-0 translate-y-1/3 drop-shadow-md">
<iconify-icon className="text-pink-500 text-3xl filter drop-shadow-sm" icon="solar:heart-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-1000 bg-pink-100" id="view-flipbook">
<div className="absolute inset-0 pointer-events-none opacity-40" style={{backgroundImage: 'radial-gradient(#fecdd3 1.5px, transparent 1.5px)', backgroundSize: '24px 24px'}}></div>
<div className="z-20 w-full max-w-5xl h-full flex items-center justify-center p-4">
<iframe allow="clipboard-write" allowfullscreen="allowfullscreen" className="fp-iframe shadow-2xl rounded-xl border-4 border-white bg-white" scrolling="no" src="https://heyzine.com/flip-book/402fbad60a.html" style={{border: '0px', width: '100%', height: '482px'}}></iframe>
</div>
</div>


    </>
  );
}
