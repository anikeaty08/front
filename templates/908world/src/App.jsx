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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        // CSS Variable for Glow Effect
        document.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Update main cursor
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Animate outline with slight delay
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });

            // Update CSS variables for torch/glow effects
            document.documentElement.style.setProperty('--cursor-x', `${posX}px`);
            document.documentElement.style.setProperty('--cursor-y', `${posY}px`);
        });

        // Interactive Elements Hover State
        const interactables = document.querySelectorAll('a, button, input, .cursor-none');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(153, 27, 27, 0.05)';
                cursorDot.style.opacity = '0';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
                cursorDot.style.opacity = '1';
            });
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text, .reveal-blur').forEach(el => {
            observer.observe(el);
        });

        // Horizontal Scroll Drag Logic
        const slider = document.querySelector('.overflow-x-auto');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'none';
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'none';
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; 
            slider.scrollLeft = scrollLeft - walk;
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
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-orange-500/10 blur-[120px] animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-red-900/10 blur-[140px] animate-pulse" style={{animationDuration: '12s'}}></div>
<div className="glow-point hidden md:block"></div>
</div>

<div className="noise-bg"></div>

<nav className="fixed top-0 left-0 w-full z-40 flex justify-center py-6 px-4 md:px-0">
<div className="glass-panel rounded-full px-8 py-4 flex items-center justify-between gap-12 transition-transform duration-500 hover:scale-[1.02] shadow-lg shadow-red-900/5">
<a className="text-xs font-medium tracking-tight text-stone-600 hover:text-red-700 transition-colors uppercase" href="#">work</a>

<div className="w-8 h-8 relative perspective-container">
<svg className="w-full h-full text-red-700 animate-[spin_10s_linear_infinite]" style={{animationDuration: '20s'}} viewbox="0 0 100 100">
<filter id="displacementFilter">
<feturbulence basefrequency="0.05" numoctaves="2" result="turbulence" type="turbulence"></feturbulence>
<fedisplacementmap in="SourceGraphic" in2="turbulence" scale="20" xchannelselector="R" ychannelselector="G"></fedisplacementmap>
</filter>
<circle className="opacity-80" cx="50" cy="50" fill="currentColor" filter="url(#displacementFilter)" r="40"></circle>
</svg>
</div>
<a className="text-xs font-medium tracking-tight text-stone-600 hover:text-red-700 transition-colors uppercase" href="#contact">agency</a>
</div>
</nav>

<section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center z-10 overflow-hidden perspective-container">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none preserve-3d">
<div className="w-[600px] h-[600px] absolute opacity-20 border border-red-500/20 rounded-full spin-3d-slow" style={{borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'}}></div>
<div className="w-[500px] h-[500px] absolute opacity-10 bg-gradient-to-tr from-red-500 to-orange-500 blur-3xl rounded-full floating-3d"></div>
</div>
<div className="text-center relative z-20 flex flex-col items-center gap-8 px-4 preserve-3d">
<span className="reveal-text inline-block py-1 px-4 rounded-full glass-panel text-[10px] uppercase tracking-[0.25em] text-red-900/60 mb-2 border border-white/60 font-medium">Est. 2024</span>
<div className="relative preserve-3d group">
<h1 className="reveal-text font-stain text-9xl md:text-[14rem] tracking-tight leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-600 to-orange-600 delay-100 drop-shadow-2xl floating-3d transform transition-transform duration-700">
                    908
                </h1>

<h1 className="font-stain text-9xl md:text-[14rem] tracking-tight leading-[0.8] text-black/5 absolute top-full left-0 w-full transform -scale-y-100 blur-sm origin-top mask-image-gradient pointer-events-none">
                    908
                </h1>
</div>
<p className="reveal-text text-xl md:text-2xl text-stone-600 font-light max-w-lg mx-auto delay-200 mt-8">
                creative agency
                <span className="block text-base text-stone-400 mt-2 font-light">we build websites that feel alive.</span>
</p>
<div className="reveal-text flex flex-col md:flex-row gap-4 mt-12 delay-300 preserve-3d hover:translate-z-10 transition-transform">
<button className="group relative px-10 py-5 rounded-full glass-panel overflow-hidden transition-all duration-500 hover:border-red-500/30 magnetic-btn shadow-xl shadow-red-900/5">
<div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
<span className="relative z-10 text-xs font-semibold uppercase tracking-widest text-stone-800 group-hover:text-red-900 btn-text block">view work</span>
</button>
<button className="group px-10 py-5 rounded-full border border-stone-200 hover:border-stone-300 text-stone-500 hover:text-stone-800 transition-all duration-300 text-xs font-semibold uppercase tracking-widest bg-white/30 backdrop-blur-sm">
                    packages
                </button>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
<span className="text-[9px] tracking-[0.3em] uppercase text-stone-500">scroll</span>
<div className="w-[1px] h-16 bg-gradient-to-b from-red-800/50 to-transparent"></div>
</div>
</section>

<section className="relative py-32 z-10">
<div className="container mx-auto px-6 md:px-12">
<div className="reveal-blur glass-panel-heavy p-10 md:p-20 rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-orange-900/5">

<div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 blur-[80px] rounded-full"></div>
<div className="absolute -bottom-20 -left-20 w-80 h-80 bg-stone-200/50 blur-[60px] rounded-full"></div>
<h2 className="font-stain text-5xl md:text-7xl text-stone-900 text-center md:text-left max-w-5xl mx-auto md:mx-0 relative z-10">
                    we make digital <br/>
<span className="text-red-700/60 font-sans font-light tracking-tighter italic text-4xl md:text-6xl ml-4">look effortless.</span>
</h2>
</div>
</div>
</section>

<section className="relative py-20 z-10">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal-text group glass-panel p-10 rounded-3xl hover:bg-white/60 transition-all duration-500 border border-white/60 hover:border-red-200 h-72 flex flex-col justify-between cursor-none shadow-sm hover:shadow-xl hover:shadow-red-900/5">
<div className="flex justify-between items-start">
<i className="w-8 h-8 text-stone-400 group-hover:text-red-500 transition-colors duration-300 stroke-[1.5]" data-lucide="monitor"></i>
<i className="w-6 h-6 text-stone-300 group-hover:text-stone-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
<div>
<h3 className="text-xl font-stain text-stone-800 mb-3 group-hover:text-red-800 transition-colors">web design</h3>
<p className="text-base text-stone-500 font-light leading-relaxed">Crafting immersive visual languages that define brands.</p>
</div>
</div>

<div className="reveal-text group glass-panel p-10 rounded-3xl hover:bg-white/60 transition-all duration-500 border border-white/60 hover:border-orange-200 h-72 flex flex-col justify-between cursor-none delay-100 shadow-sm hover:shadow-xl hover:shadow-orange-900/5">
<div className="flex justify-between items-start">
<i className="w-8 h-8 text-stone-400 group-hover:text-orange-500 transition-colors duration-300 stroke-[1.5]" data-lucide="layers"></i>
<i className="w-6 h-6 text-stone-300 group-hover:text-stone-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
<div>
<h3 className="text-xl font-stain text-stone-800 mb-3 group-hover:text-orange-800 transition-colors">ui / ux</h3>
<p className="text-base text-stone-500 font-light leading-relaxed">Intuitive interfaces built on human behavior patterns.</p>
</div>
</div>

<div className="reveal-text group glass-panel p-10 rounded-3xl hover:bg-white/60 transition-all duration-500 border border-white/60 hover:border-red-200 h-72 flex flex-col justify-between cursor-none delay-200 shadow-sm hover:shadow-xl hover:shadow-red-900/5">
<div className="flex justify-between items-start">
<i className="w-8 h-8 text-stone-400 group-hover:text-red-500 transition-colors duration-300 stroke-[1.5]" data-lucide="code-2"></i>
<i className="w-6 h-6 text-stone-300 group-hover:text-stone-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
<div>
<h3 className="text-xl font-stain text-stone-800 mb-3 group-hover:text-red-800 transition-colors">development</h3>
<p className="text-base text-stone-500 font-light leading-relaxed">Clean, semantic code that performs at elite speeds.</p>
</div>
</div>

<div className="reveal-text group glass-panel p-10 rounded-3xl hover:bg-white/60 transition-all duration-500 border border-white/60 hover:border-orange-200 h-72 flex flex-col justify-between cursor-none shadow-sm hover:shadow-xl hover:shadow-orange-900/5">
<div className="flex justify-between items-start">
<i className="w-8 h-8 text-stone-400 group-hover:text-orange-500 transition-colors duration-300 stroke-[1.5]" data-lucide="wand-2"></i>
<i className="w-6 h-6 text-stone-300 group-hover:text-stone-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
<div>
<h3 className="text-xl font-stain text-stone-800 mb-3 group-hover:text-orange-800 transition-colors">brand systems</h3>
<p className="text-base text-stone-500 font-light leading-relaxed">Cohesive identities from logomarks to design tokens.</p>
</div>
</div>

<div className="reveal-text group glass-panel p-10 rounded-3xl hover:bg-white/60 transition-all duration-500 border border-white/60 hover:border-red-200 h-72 flex flex-col justify-between cursor-none delay-100 shadow-sm hover:shadow-xl hover:shadow-red-900/5">
<div className="flex justify-between items-start">
<i className="w-8 h-8 text-stone-400 group-hover:text-red-500 transition-colors duration-300 stroke-[1.5]" data-lucide="play-circle"></i>
<i className="w-6 h-6 text-stone-300 group-hover:text-stone-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
<div>
<h3 className="text-xl font-stain text-stone-800 mb-3 group-hover:text-red-800 transition-colors">motion</h3>
<p className="text-base text-stone-500 font-light leading-relaxed">Physics-based animations that guide and delight.</p>
</div>
</div>

<div className="reveal-text group glass-panel p-10 rounded-3xl hover:bg-white/60 transition-all duration-500 border border-white/60 hover:border-orange-200 h-72 flex flex-col justify-between cursor-none delay-200 shadow-sm hover:shadow-xl hover:shadow-orange-900/5">
<div className="flex justify-between items-start">
<i className="w-8 h-8 text-stone-400 group-hover:text-orange-500 transition-colors duration-300 stroke-[1.5]" data-lucide="trending-up"></i>
<i className="w-6 h-6 text-stone-300 group-hover:text-stone-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
<div>
<h3 className="text-xl font-stain text-stone-800 mb-3 group-hover:text-orange-800 transition-colors">optimisation</h3>
<p className="text-base text-stone-500 font-light leading-relaxed">SEO and performance tuning for maximum reach.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 z-10 overflow-hidden">
<div className="container mx-auto px-6 md:px-12 mb-16 flex items-end justify-between">
<h2 className="reveal-text text-4xl font-stain text-stone-900">selected work</h2>
<div className="reveal-text text-sm text-stone-400 hidden md:block tracking-wide">drag to explore</div>
</div>
<div className="flex gap-10 overflow-x-auto no-scrollbar px-6 md:px-12 pb-16 snap-x snap-mandatory">

<div className="reveal-blur group relative min-w-[85vw] md:min-w-[700px] aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden glass-panel border border-white/80 snap-center cursor-none shadow-xl">
<div className="absolute inset-0 bg-stone-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out">
<div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-100"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-400/20 blur-3xl rounded-full"></div>
<img alt="Work" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-white/90 via-white/50 to-transparent flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-sm">
<div>
<div className="text-[10px] uppercase tracking-[0.2em] text-red-700 mb-2 font-semibold">fintech</div>
<h3 className="text-3xl font-stain text-stone-900">Nova Bank</h3>
</div>
<span className="text-sm text-stone-500 font-medium">ui/ux — build</span>
</div>
</div>

<div className="reveal-blur group relative min-w-[85vw] md:min-w-[700px] aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden glass-panel border border-white/80 snap-center cursor-none delay-100 shadow-xl">
<div className="absolute inset-0 bg-stone-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-400/20 blur-3xl rounded-full"></div>
<img alt="Work" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-white/90 via-white/50 to-transparent flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-sm">
<div>
<div className="text-[10px] uppercase tracking-[0.2em] text-orange-700 mb-2 font-semibold">architecture</div>
<h3 className="text-3xl font-stain text-stone-900">Vessel</h3>
</div>
<span className="text-sm text-stone-500 font-medium">brand — web</span>
</div>
</div>

<div className="reveal-blur group relative min-w-[85vw] md:min-w-[700px] aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden glass-panel border border-white/80 snap-center cursor-none delay-200 shadow-xl">
<div className="absolute inset-0 bg-stone-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out">
<img alt="Work" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-white/90 via-white/50 to-transparent flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-sm">
<div>
<div className="text-[10px] uppercase tracking-[0.2em] text-red-700 mb-2 font-semibold">e-commerce</div>
<h3 className="text-3xl font-stain text-stone-900">Kroma</h3>
</div>
<span className="text-sm text-stone-500 font-medium">strategy — dev</span>
</div>
</div>
</div>
</section>

<section className="relative py-32 z-10">
<div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
<div className="glass-panel px-12 py-16 md:px-24 md:py-24 rounded-[3rem] border-t border-white/60 shadow-[0_20px_60px_-15px_rgba(153,27,27,0.1)]">
<div className="space-y-6">
<p className="reveal-text text-4xl md:text-6xl font-light tracking-tighter text-stone-400">we don’t chase trends.</p>
<p className="reveal-text text-4xl md:text-6xl font-stain text-red-700 delay-100">we refine them.</p>
</div>
<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 relative">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-300 to-transparent hidden md:block"></div>
<div className="reveal-text flex flex-col items-center gap-6 relative bg-white/40 backdrop-blur-md p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none delay-200">
<span className="text-sm font-mono text-red-600 bg-red-100 px-2 py-1 rounded">01</span>
<h4 className="text-2xl font-stain text-stone-900">we think</h4>
<p className="text-base text-stone-500 max-w-[180px]">Strategy first. Design second.</p>
</div>
<div className="reveal-text flex flex-col items-center gap-6 relative bg-white/40 backdrop-blur-md p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none delay-300">
<span className="text-sm font-mono text-orange-600 bg-orange-100 px-2 py-1 rounded">02</span>
<h4 className="text-2xl font-stain text-stone-900">we make</h4>
<p className="text-base text-stone-500 max-w-[180px]">Pixel perfect. Every interaction.</p>
</div>
<div className="reveal-text flex flex-col items-center gap-6 relative bg-white/40 backdrop-blur-md p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none delay-400">
<span className="text-sm font-mono text-stone-600 bg-stone-200 px-2 py-1 rounded">03</span>
<h4 className="text-2xl font-stain text-stone-900">we ship</h4>
<p className="text-base text-stone-500 max-w-[180px]">Fast. Optimized. Scalable.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 z-10">
<div className="container mx-auto px-6 md:px-12">
<h2 className="reveal-text text-center text-5xl font-stain text-stone-900 mb-20">engagement models</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

<div className="reveal-text glass-panel p-10 rounded-3xl border border-white/60 hover:border-red-200 transition-all duration-500 hover:-translate-y-2 flex flex-col hover:shadow-xl hover:shadow-stone-200/50">
<div className="mb-10">
<h3 className="text-xl font-stain text-stone-800">core</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-light text-stone-900">£500</span>
<span className="text-sm text-stone-400">/ start</span>
</div>
<p className="mt-4 text-xs text-stone-500 leading-relaxed h-10 font-medium">Perfect for landing pages and simple portfolios.</p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-base text-stone-600">
<i className="w-4 h-4 text-stone-400" data-lucide="check-circle"></i> One Page Site
                        </li>
<li className="flex items-center gap-3 text-base text-stone-600">
<i className="w-4 h-4 text-stone-400" data-lucide="check-circle"></i> Mobile Responsive
                        </li>
<li className="flex items-center gap-3 text-base text-stone-600">
<i className="w-4 h-4 text-stone-400" data-lucide="check-circle"></i> Basic SEO
                        </li>
</ul>
<button className="w-full py-4 rounded-xl border border-stone-200 hover:bg-white/50 text-sm font-semibold tracking-wide transition-colors text-stone-600 uppercase">select</button>
</div>

<div className="reveal-text glass-panel p-10 rounded-3xl border border-white/80 hover:border-orange-300 transition-all duration-500 hover:-translate-y-4 relative flex flex-col bg-white/40 shadow-2xl shadow-orange-900/10">
<div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
<div className="mb-10">
<h3 className="text-xl font-stain text-red-700">boost</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-light text-stone-900">£1,200</span>
<span className="text-sm text-stone-400">/ project</span>
</div>
<p className="mt-4 text-xs text-stone-500 leading-relaxed h-10 font-medium">Full multi-page experience with custom interactions.</p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-base text-stone-800">
<i className="w-4 h-4 text-orange-500 fill-orange-100" data-lucide="check-circle-2"></i> 5 Page Site
                        </li>
<li className="flex items-center gap-3 text-base text-stone-800">
<i className="w-4 h-4 text-orange-500 fill-orange-100" data-lucide="check-circle-2"></i> CMS Integration
                        </li>
<li className="flex items-center gap-3 text-base text-stone-800">
<i className="w-4 h-4 text-orange-500 fill-orange-100" data-lucide="check-circle-2"></i> Custom Animations
                        </li>
<li className="flex items-center gap-3 text-base text-stone-800">
<i className="w-4 h-4 text-orange-500 fill-orange-100" data-lucide="check-circle-2"></i> Advanced SEO
                        </li>
</ul>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold text-sm hover:shadow-lg transition-all shadow-orange-500/20 uppercase tracking-wide">select</button>
</div>

<div className="reveal-text glass-panel p-10 rounded-3xl border border-white/60 hover:border-red-200 transition-all duration-500 hover:-translate-y-2 flex flex-col hover:shadow-xl hover:shadow-stone-200/50">
<div className="mb-10">
<h3 className="text-xl font-stain text-stone-800">elite</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-light text-stone-900">£2,500+</span>
</div>
<p className="mt-4 text-xs text-stone-500 leading-relaxed h-10 font-medium">Complete brand overhaul and complex web apps.</p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-base text-stone-600">
<i className="w-4 h-4 text-stone-400" data-lucide="check-circle"></i> Brand Strategy
                        </li>
<li className="flex items-center gap-3 text-base text-stone-600">
<i className="w-4 h-4 text-stone-400" data-lucide="check-circle"></i> E-commerce / Web App
                        </li>
<li className="flex items-center gap-3 text-base text-stone-600">
<i className="w-4 h-4 text-stone-400" data-lucide="check-circle"></i> 3D / WebGL
                        </li>
</ul>
<button className="w-full py-4 rounded-xl border border-stone-200 hover:bg-white/50 text-sm font-semibold tracking-wide transition-colors text-stone-600 uppercase">contact us</button>
</div>
</div>
</div>
</section>

<section className="relative py-20 z-10 border-t border-stone-200">
<div className="container mx-auto px-6 text-center">
<div className="flex flex-wrap justify-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
<span className="text-xl font-semibold tracking-tight text-stone-800">Linear</span>
<span className="text-xl font-semibold tracking-tight text-stone-800">Stripe</span>
<span className="text-xl font-semibold tracking-tight text-stone-800">Vercel</span>
<span className="text-xl font-semibold tracking-tight text-stone-800">Arc</span>
</div>
<p className="mt-10 text-[10px] text-stone-400 tracking-[0.2em] uppercase font-semibold">Trusted by next-gen startups</p>
</div>
</section>

<footer className="relative py-32 z-10 flex flex-col items-center justify-center overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-red-500/10 to-transparent blur-[100px] pointer-events-none"></div>
<div className="glass-panel px-8 py-16 md:px-24 md:py-20 rounded-[2.5rem] text-center max-w-5xl mx-6 md:mx-auto relative z-20 border border-white/80 shadow-2xl shadow-red-900/5">
<h2 className="reveal-text text-5xl md:text-8xl font-stain text-stone-900 mb-8 leading-none">
                let’s make something <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">worth remembering.</span>
</h2>
<form className="mt-16 max-w-lg mx-auto space-y-5 text-left">
<div className="relative group">
<input className="w-full bg-white/50 border border-stone-200 rounded-xl px-6 py-4 text-base text-stone-800 focus:outline-none focus:border-red-400 transition-colors placeholder:text-stone-400" placeholder="email address" type="email"/>
<div className="absolute inset-0 border border-white/0 group-hover:border-white/40 rounded-xl pointer-events-none transition-colors"></div>
</div>
<div className="flex items-center gap-3 mt-4">
<label className="relative inline-flex items-center cursor-pointer group">
<input className="sr-only peer" type="checkbox"/>
<div className="w-10 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600 shadow-inner"></div>
<span className="ml-3 text-xs text-stone-500 font-medium group-hover:text-red-700 transition-colors">Subscribe to newsletter</span>
</label>
</div>
<button className="w-full mt-6 bg-stone-900 text-white font-semibold tracking-wide py-4 rounded-xl hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/20 uppercase text-sm">
                    start a project
                </button>
</form>
</div>
<div className="mt-24 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-12 text-xs text-stone-400 font-medium">
<div className="tracking-widest uppercase">© 2024 908 Agency</div>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-red-600 transition-colors" href="#">Twitter</a>
<a className="hover:text-red-600 transition-colors" href="#">Instagram</a>
<a className="hover:text-red-600 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>


    </>
  );
}
