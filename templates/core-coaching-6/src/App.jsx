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

        // Simple scroll reveal
        window.addEventListener('scroll', reveal);
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;
                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');
                }
            }
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
      

<nav className="fixed w-full z-50 backdrop-blur-md bg-black/90 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex gap-3 items-center group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 border-2 border-[#F7D300] rounded-full group-hover:scale-110 transition-transform duration-500"></div>
<div className="w-3 h-3 bg-[#F7D300] rounded-full animate-pulse"></div>
</div>
<span className="text-xl font-bold tracking-tight text-white group-hover:text-[#F7D300] transition-colors">CORE</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-[#F7D300] transition-colors" href="#manifesto">Manifesto</a>
<a className="text-sm font-medium text-slate-300 hover:text-[#F7D300] transition-colors" href="#coaches">Coaches</a>
<a className="text-sm font-medium text-slate-300 hover:text-[#F7D300] transition-colors" href="#framework">Framework</a>
<a className="text-sm font-medium text-slate-300 hover:text-[#F7D300] transition-colors" href="#stories">Stories</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-[#F7D300] text-black text-sm font-bold rounded-full px-6 py-3 hover:shadow-[0_0_20px_rgba(247,211,0,0.4)] hover:scale-105 transition-all duration-300" href="#contact">
                Book Discovery
            </a>
<button className="md:hidden text-white hover:text-[#F7D300]">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#F7D300] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#F7D300] blur-[120px] opacity-5 rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

<div className="text-left space-y-8 order-2 lg:order-1">
<h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                    Transformation <br/>
                    Begins at Your <br/>
<span className="text-[#F7D300]">CORE.</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed font-light">
                    Coaching designed to realign your identity, clarity, and inner strength. Strip away the noise and find your power.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center bg-[#F7D300] text-black font-bold text-lg rounded-full px-8 py-4 hover:shadow-[0_0_25px_rgba(247,211,0,0.5)] hover:scale-105 transition-all duration-300 w-fit" href="#contact">
                        Book Your Discovery Call
                    </a>
</div>
</div>

<div className="relative w-full aspect-square flex items-center justify-center order-1 lg:order-2 animate-float">

<div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-white/10 animate-orbit-slow border-dashed"></div>

<div className="absolute inset-4 rounded-full border border-white/20 animate-orbit-medium rotate-45"></div>

<div className="absolute inset-12 rounded-full border border-[#F7D300]/30 animate-orbit-fast border-t-[#F7D300] border-r-transparent border-b-[#F7D300] border-l-transparent" style={{borderWidth: '2px'}}></div>

<div className="absolute inset-20 rounded-full border border-white/10 animate-orbit-slow flex items-center justify-center">
<div className="w-full h-[1px] bg-white/10 absolute top-1/2 left-0"></div>
<div className="h-full w-[1px] bg-white/10 absolute left-1/2 top-0"></div>
</div>

<div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-[#F7D300] to-[#FFE55C] animate-pulse-core z-10 blur-sm"></div>
<div className="absolute w-20 h-20 rounded-full bg-[#F7D300] z-20 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>

<div className="absolute w-full h-full animate-orbit-cw duration-[30s]">
<div className="absolute top-0 left-1/2 w-2 h-2 bg-[#F7D300] rounded-full blur-[1px]"></div>
<div className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full"></div>
<div className="absolute top-1/4 left-10 w-1.5 h-1.5 bg-[#F7D300]/50 rounded-full"></div>
</div>

<div className="absolute w-[120%] h-[120%] bg-[#F7D300]/10 blur-[60px] rounded-full -z-10"></div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-black relative border-t border-white/5" id="manifesto">
<div className="max-w-4xl mx-auto">
<div className="flex gap-8 items-start">

<div className="hidden md:block w-1 h-64 bg-gradient-to-b from-[#F7D300] to-transparent rounded-full"></div>
<div className="space-y-12">
<span className="text-[#F7D300] text-sm font-bold tracking-widest uppercase">The Manifesto</span>
<h2 className="text-3xl md:text-5xl font-medium leading-tight text-white">
                        We live in a world of surface-level fixes. <br/>
                        But to build a life of purpose, you must dig deeper.
                    </h2>
<div className="text-xl md:text-2xl text-slate-400 space-y-8 font-light leading-relaxed">
<p>
                            True power isn't about force; it's about <span className="text-[#F7D300] font-semibold">alignment</span>. When your actions reflect your inner truth, resistance fades.
                        </p>
<p>
                            This is the work we do. We strip away the noise to reveal your <span className="text-[#F7D300] font-semibold">clarity</span>, your courage, and your undeniable <span className="text-[#F7D300] font-semibold">CORE</span> strength.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black relative" id="coaches">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-bold mb-4">Meet The Guides</h2>
<p className="text-slate-400 max-w-xl mx-auto">Experts dedicated to your transformation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-[#0A0A0A] rounded-2xl border border-white/10 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Coach" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-1">James Sterling</h3>
<p className="text-[#F7D300] text-sm font-medium mb-3">Executive Performance</p>
<p className="text-slate-400 text-sm leading-relaxed">"Master your mind, master your industry."</p>
</div>
</div>

<div className="group relative bg-[#0A0A0A] rounded-2xl border border-white/10 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Coach" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-1">Elena Vance</h3>
<p className="text-[#F7D300] text-sm font-medium mb-3">Holistic Leadership</p>
<p className="text-slate-400 text-sm leading-relaxed">"Leadership starts with self-awareness."</p>
</div>
</div>

<div className="group relative bg-[#0A0A0A] rounded-2xl border border-white/10 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Coach" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-1">Marcus Chen</h3>
<p className="text-[#F7D300] text-sm font-medium mb-3">Strategic Vision</p>
<p className="text-slate-400 text-sm leading-relaxed">"Clarity is the ultimate competitive advantage."</p>
</div>
</div>

<div className="group relative bg-[#0A0A0A] rounded-2xl border border-white/10 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Coach" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-white mb-1">Sarah O'Neil</h3>
<p className="text-[#F7D300] text-sm font-medium mb-3">Emotional Intelligence</p>
<p className="text-slate-400 text-sm leading-relaxed">"Connect with yourself to connect with others."</p>
</div>
</div>
</div>
<div className="flex justify-center mt-16">
<button className="flex items-center gap-2 border border-white/20 bg-transparent hover:bg-white/5 text-white rounded-full px-8 py-3 transition-all duration-300 hover:scale-105">
                    Meet The Team
                    <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black border-t border-white/5" id="framework">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
<div className="md:col-span-2 mb-8">
<h2 className="text-3xl md:text-5xl font-bold mb-4">The Framework</h2>
<p className="text-slate-400">Our structured path to sustainable growth.</p>
</div>

<div className="group p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-black border border-[#F7D300] flex items-center justify-center mb-8 group-hover:bg-[#F7D300] transition-colors duration-500">
<svg className="lucide lucide-circle-dot group-hover:stroke-black transition-colors" fill="none" height="24" stroke="#F7D300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</div>
<h3 className="text-2xl font-bold text-[#F7D300] mb-4">01. Identity</h3>
<p className="text-slate-300 leading-relaxed">
                        Deconstruct the limiting beliefs that hold you back. We identify the gap between who you are and who you must become.
                    </p>
</div>

<div className="group p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-black border border-[#F7D300] flex items-center justify-center mb-8 group-hover:bg-[#F7D300] transition-colors duration-500">
<svg className="lucide lucide-compass group-hover:stroke-black transition-colors" fill="none" height="24" stroke="#F7D300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
</div>
<h3 className="text-2xl font-bold text-[#F7D300] mb-4">02. Alignment</h3>
<p className="text-slate-300 leading-relaxed">
                        Structure your environment and habits to support your vision. We align your daily actions with your deepest values.
                    </p>
</div>

<div className="group p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-black border border-[#F7D300] flex items-center justify-center mb-8 group-hover:bg-[#F7D300] transition-colors duration-500">
<svg className="lucide lucide-zap group-hover:stroke-black transition-colors" fill="none" height="24" stroke="#F7D300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-2xl font-bold text-[#F7D300] mb-4">03. Embodiment</h3>
<p className="text-slate-300 leading-relaxed">
                        Move beyond theory. This phase is about becoming the person who naturally achieves the results you seek through consistency.
                    </p>
</div>

<div className="group p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-black border border-[#F7D300] flex items-center justify-center mb-8 group-hover:bg-[#F7D300] transition-colors duration-500">
<svg className="lucide lucide-mountain group-hover:stroke-black transition-colors" fill="none" height="24" stroke="#F7D300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</div>
<h3 className="text-2xl font-bold text-[#F7D300] mb-4">04. Mastery</h3>
<p className="text-slate-300 leading-relaxed">
                        Sustain your growth. We implement systems for long-term resilience, ensuring you stay at your peak indefinitely.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 diagonal-split relative overflow-hidden" id="stories">
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-black md:text-white mix-blend-difference">Client Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-black p-8 rounded-2xl shadow-2xl border-t-4 border-[#F7D300] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
<div className="flex gap-1 mb-6 text-[#F7D300]">
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-white text-lg mb-6 font-light leading-relaxed">"I was successful on paper but hollow inside. CORE reconnected me with who I actually am."</p>
<div className="border-t border-white/10 pt-4">
<p className="font-bold text-[#F7D300]">Sarah Jenkins</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Creative Director</p>
</div>
</div>

<div className="bg-black p-8 rounded-2xl shadow-2xl border-t-4 border-[#F7D300] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
<div className="flex gap-1 mb-6 text-[#F7D300]">
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-white text-lg mb-6 font-light leading-relaxed">"The clarity I gained in just four sessions was worth years of therapy. Truly transformational."</p>
<div className="border-t border-white/10 pt-4">
<p className="font-bold text-[#F7D300]">Marcus Chen</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Startup Founder</p>
</div>
</div>

<div className="bg-black p-8 rounded-2xl shadow-2xl border-t-4 border-[#F7D300] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
<div className="flex gap-1 mb-6 text-[#F7D300]">
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-white text-lg mb-6 font-light leading-relaxed">"Grounded, powerful, and deeply insightful. It completely shifted how I approach leadership."</p>
<div className="border-t border-white/10 pt-4">
<p className="font-bold text-[#F7D300]">Elena Rodriguez</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">VP of Operations</p>
</div>
</div>

<div className="bg-black p-8 rounded-2xl shadow-2xl border-t-4 border-[#F7D300] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
<div className="flex gap-1 mb-6 text-[#F7D300]">
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-white text-lg mb-6 font-light leading-relaxed">"A challenging but incredibly rewarding process. I finally feel aligned with my purpose."</p>
<div className="border-t border-white/10 pt-4">
<p className="font-bold text-[#F7D300]">David Kim</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Entrepreneur</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[80vh] flex items-center justify-center bg-black relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F7D300]/10 via-black to-black"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
                Ready to Return <br/> to Your <span className="text-[#F7D300]">CORE</span>?
            </h2>
<p className="text-xl md:text-2xl text-slate-400 mb-12 font-light">
                Let's begin your transformation with clarity and intention.
            </p>
<a className="group relative inline-flex items-center justify-center" href="#">
<div className="absolute inset-0 bg-[#F7D300] rounded-full blur-xl opacity-50 group-hover:opacity-80 animate-pulse transition-opacity duration-500"></div>
<div className="relative bg-[#F7D300] text-black text-xl font-bold rounded-full px-12 py-6 hover:scale-105 transition-transform duration-300 flex items-center gap-3">
                    Start Your Journey
                    <svg className="lucide lucide-arrow-right w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</section>

<footer className="bg-black text-white pt-20 px-6 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">

<div className="flex gap-3 items-center">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 border-2 border-[#F7D300] rounded-full"></div>
<div className="w-3 h-3 bg-[#F7D300] rounded-full"></div>
</div>
<span className="text-xl font-bold tracking-tight">CORE</span>
</div>

<div className="flex gap-8">
<a className="text-slate-400 hover:text-[#F7D300] hover:-translate-y-1 transition-all duration-300" href="#">
<svg className="lucide lucide-instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-slate-400 hover:text-[#F7D300] hover:-translate-y-1 transition-all duration-300" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-slate-400 hover:text-[#F7D300] hover:-translate-y-1 transition-all duration-300" href="#">
<svg className="lucide lucide-twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 border-t border-white/10 pt-8">
<p>© 2024 CORE Coaching. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
