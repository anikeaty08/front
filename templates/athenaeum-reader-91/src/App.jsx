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
      

<div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_120%)] opacity-80 z-0"></div>

<div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-6 md:p-8">

<div className="flex items-start justify-between w-full">

<a className="group flex items-center gap-2 glass-pill hover:text-[#e8e4d9] hover:bg-white/5 transition-all duration-300 hover:opacity-100 text-[#a8a29e] opacity-60 pointer-events-auto rounded-full pt-2 pr-4 pb-2 pl-4" href="#" onclick="history.back(); return false;">
<svg className="" data-icon-set="lucide" data-lucide="arrow-left" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium tracking-wide">Library</span>
</a>

<div className="absolute left-1/2 -translate-x-1/2 top-8 text-center transition-opacity duration-500 hover:opacity-100 opacity-40">
<span className="font-book text-[#8c847b] text-sm tracking-wide italic">The Poetics of Space — Gaston Bachelard</span>
</div>

<div className="pointer-events-auto flex p-1 rounded-full glass-pill">
<button className="px-3 py-1 rounded-full bg-[#d4b483] text-[#120f0d] shadow-sm text-xs font-semibold transition-all">
                    Reading
                </button>
<button className="px-3 py-1 rounded-full text-[#78716c] hover:text-[#a8a29e] text-xs font-medium transition-all flex items-center gap-1.5">
<iconify-icon icon="lucide:highlighter" width="12"></iconify-icon>
<span>Annotate</span>
</button>
</div>
</div>

<div className="pointer-events-auto mx-auto w-full max-w-md group transition-all duration-500 opacity-0 hover:opacity-100">
<div className="flex justify-between text-[10px] text-[#78716c] mb-2 font-medium tracking-widest uppercase">
<span>Page 24</span>
<span>241 Pages</span>
</div>
<div className="h-[2px] w-full bg-[#2a2420] rounded-full overflow-hidden">
<div className="h-full bg-[#57534e] w-[10%] group-hover:bg-[#d4b483] transition-colors duration-300"></div>
</div>
</div>
</div>

<main className="z-10 flex w-full h-full relative perspective-container items-center justify-center">

<button className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 text-[#57534e] hover:text-[#d4b483] transition-all duration-300 opacity-0 hover:opacity-100 z-50">
<iconify-icon icon="lucide:chevron-left" width="32"></iconify-icon>
</button>


<div className="relative flex w-full max-w-5xl h-[85vh] md:h-[80vh] aspect-[1.5/1] book-spread transition-transform duration-500">

<div className="flex-1 bg-paper relative rounded-l-sm overflow-hidden text-[#1c1917] flex flex-col shadow-inner">

<div className="absolute left-0 top-1 bottom-1 w-[2px] page-thickness-left z-20"></div>

<div className="absolute right-0 top-0 bottom-0 w-16 spine-shadow-center z-10 pointer-events-none opacity-60"></div>

<div className="flex-1 px-10 py-12 md:px-14 md:py-16 overflow-hidden relative">
<div className="text-[10px] text-[#8c847b] text-center font-ui font-semibold tracking-[0.2em] uppercase mb-12 opacity-60">
                        Chapter I
                    </div>
<div className="font-book text-lg md:text-[19px] leading-[1.7] text-[#2c2420] text-justify hyphens-auto">
<p className="mb-6 indent-8">
<span className="float-left text-6xl leading-[0.8] font-display mr-3 mt-[-4px] text-[#120f0d]">T</span>he house is one of the greatest powers of integration for the thoughts, memories and dreams of mankind. The binding principle in this integration is the daydream. Past, present and future give the house different dynamisms, which often interfere, at times opposing, at others, stimulating one another.
                        </p>
<p className="mb-6 indent-8">
                            In the life of a man, the house thrusts aside contingencies, its councils of continuity are unceasing. Without it, man would be a dispersed being. It maintains him through the storms of the heavens and through those of life. It is body and soul. It is the human being's first world. Before he is "cast into the world," as claimed by certain hasty metaphysics, man is laid in the cradle of the house.
                        </p>
</div>

<div className="absolute bottom-8 left-0 right-0 text-center">
<span className="text-[10px] font-ui text-[#8c847b] font-medium opacity-50">24</span>
</div>
</div>
</div>

<div className="flex-1 bg-paper relative rounded-r-sm overflow-hidden text-[#1c1917] flex flex-col shadow-inner">

<div className="absolute right-0 top-1 bottom-1 w-[3px] page-thickness-right z-20"></div>

<div className="absolute left-0 top-0 bottom-0 w-16 spine-shadow-center z-10 pointer-events-none opacity-60 transform scale-x-[-1]"></div>

<div className="flex-1 px-10 py-12 md:px-14 md:py-16 overflow-hidden relative">
<div className="text-[10px] text-[#8c847b] text-center font-ui font-semibold tracking-[0.2em] uppercase mb-12 opacity-60">
                        The House
                    </div>
<div className="font-book text-lg md:text-[19px] leading-[1.7] text-[#2c2420] text-justify hyphens-auto">
<p className="mb-6 indent-8">
                            And always, in our daydreams, the house is a large cradle. A concrete metaphysics cannot neglect this fact, this simple fact, all the more, since this fact is a value, an important value, to which we return in our daydreaming. Being is already a value. Life begins well, it begins enclosed, protected, all warm in the bosom of the house.
                        </p>
<p className="mb-6 indent-8">
                            From my viewpoint, from the phenomenologist's viewpoint, the conscious metaphysics that starts from the moment when the being is "cast into the world" is a secondary metaphysics. It passes over the preliminaries, when being is being-well, when the human being is deposited in a being-well which is associated with the  of the refuge.
                        </p>
</div>

<div className="absolute bottom-8 left-0 right-0 text-center">
<span className="text-[10px] font-ui text-[#8c847b] font-medium opacity-50">25</span>
</div>
</div>
</div>
</div>

<button className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 text-[#57534e] hover:text-[#d4b483] transition-all duration-300 opacity-0 hover:opacity-100 z-50">
<iconify-icon icon="lucide:chevron-right" width="32"></iconify-icon>
</button>
</main>

    </>
  );
}
