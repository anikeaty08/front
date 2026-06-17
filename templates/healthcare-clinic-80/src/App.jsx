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



      // Initialize VANTA.FOG with Medical/Clean Colors
      VANTA.FOG({
          el: "#bg-animation",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xe0f2fe, // Light Sky Blue
          midtoneColor: 0xffffff,   // White
          lowlightColor: 0xf1f5f9,  // Slate 100
          baseColor: 0xffffff,      // White
          blurFactor: 0.6,
          speed: 1.20,
          zoom: 0.50
      });

      // Scroll Animation Observer
      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('opacity-100', 'translate-y-0');
                      entry.target.classList.remove('opacity-0', 'translate-y-10');
                  }
              });
          }, {
              threshold: 0.1
          });

          // Animate headings and cards that don't have explicit animation classes yet
          const animatedElements = document.querySelectorAll('section h2, section p, .glass-card, #why-us .flex, #doctors .group');
          animatedElements.forEach(el => {
              el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
              observer.observe(el);
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
      

<div className="fixed inset-0 w-full h-full -z-10 opacity-50 pointer-events-none" id="bg-animation"><canvas className="vanta-canvas" height="686" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1022px', height: '686px'}} width="1022"></canvas><canvas className="vanta-canvas" height="686" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1022px', height: '686px'}} width="1022"></canvas><canvas className="vanta-canvas" height="686" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1022px', height: '686px'}} width="1022"></canvas></div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14m-7-7h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">
            CarePoint
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors" href="#why-us">Why Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors" href="#doctors">Doctors</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex px-5 py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-full shadow-md shadow-sky-600/20 hover:shadow-sky-600/30 transition-all transform hover:-translate-y-0.5" href="#contact">
            Book Appointment
          </a>
<button className="md:hidden text-slate-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16M4 6h16M4 18h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-semibold uppercase tracking-wide mb-6 animate-fade-in">
<span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            Accepting New Patients
          </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-6 animate-fade-in delay-100 leading-[1.1]">
            Trusted Care for <br className="hidden lg:block"/>
<span className="text-gradient">You and Your Family</span>
</h1>
<p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg animate-fade-in delay-200 transition-all duration-700 ease-out">
            Professional healthcare services with experienced doctors committed to your well-being. Modern facilities, compassionate care.
          </p>
<div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
<a className="px-8 py-3.5 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-full shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] text-center" href="#contact">
              Book Appointment
            </a>
<a className="px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-full shadow-sm transition-all text-center flex items-center justify-center gap-2" href="#services">
              Explore Services
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14m-7-7l7 7l7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="mt-10 flex items-center gap-4 animate-fade-in delay-500 text-sm text-slate-500">
<div className="flex -space-x-3">
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">+2k</div>
</div>
<p className="transition-all duration-700 ease-out opacity-0 translate-y-10">Trusted by 2,000+ patients</p>
</div>
</div>

<div className="animate-fade-in delay-200 md:h-[600px] flex relative items-center justify-center group perspective-midrange">

<div className="absolute inset-0 bg-gradient-to-tr from-sky-100/40 via-blue-50/40 to-white/0 rounded-full blur-[100px] -z-10 scale-125 opacity-80"></div>

<div className="absolute -right-8 -top-8 -z-10 opacity-30">
<svg fill="none" height="120" viewbox="0 0 120 120" width="120">
<pattern height="20" id="grid-dots" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle className="text-sky-400" cx="2" cy="2" fill="currentColor" r="1.5"></circle>
</pattern>
<rect fill="url(#grid-dots)" height="120" width="120"></rect>
</svg>
</div>

<div className="relative z-10 transition-transform duration-700 ease-out transform group-hover:scale-[1.02]">

<div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 rounded-[2.5rem] rotate-3 opacity-10 blur-sm transform translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-y-6"></div>

<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-900/10 border-[6px] border-white/60 bg-white backdrop-blur-sm">
<img alt="Doctor" className="md:max-w-md w-full h-[540px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none"></div>
</div>

<div className="absolute bottom-10 -left-10 bg-white/95 backdrop-blur-xl p-5 pr-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60 animate-bounce" style={{animationDuration: '4s'}}>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover ring-1 ring-slate-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover ring-1 ring-slate-100" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-sky-50 flex items-center justify-center text-xs font-bold text-sky-600 ring-1 ring-slate-100">+2k</div>
</div>
<div>
<div className="flex text-amber-400 mb-1 gap-0.5">
<svg className="lucide lucide-star" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-xs font-semibold text-slate-800 tracking-tight transition-all duration-700 ease-out opacity-0 translate-y-10">Top Rated Clinic</p>
</div>
</div>
</div>

<div className="absolute top-12 -right-12 bg-white/95 backdrop-blur-xl p-4 pr-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60 hidden lg:block transition-all duration-300 hover:scale-105 hover:-rotate-1">
<div className="flex items-center gap-4">
<div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-50 to-blue-50 flex items-center justify-center border border-sky-100/50 shadow-sm">
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
</span>
<svg aria-hidden="true" className="text-sky-600 iconify iconify--lucide" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-0.5 transition-all duration-700 ease-out">Response Time</p>
<p className="text-sm font-semibold text-slate-900 transition-all duration-700 ease-out">&lt; 15 Mins</p>
</div>
</div>
</div>

<div className="absolute top-1/2 -left-3 w-8 h-8 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center hidden md:flex animate-pulse">
<svg className="text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-slate-100" id="about">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6 transition-all duration-700 ease-out opacity-0 translate-y-10">About CarePoint</h2>
<p className="text-xl leading-relaxed text-slate-600 transition-all duration-700 ease-out opacity-0 translate-y-10">
          A healthcare clinic providing quality medical services with fast and friendly care. 
          We believe in treating the person, not just the symptoms, ensuring a holistic approach to your recovery and long-term health.
        </p>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<span className="text-sky-600 font-semibold tracking-wider text-sm uppercase">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-2 transition-all duration-700 ease-out opacity-0 translate-y-10">
            Comprehensive Medical Services
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white/60 duration-700 ease-out opacity-0 translate-y-10">
<div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:stethoscope" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="20" cy="10" fill="none" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">General Check-Up</h3>
<p className="text-slate-600 leading-relaxed mb-6 transition-all duration-700 ease-out opacity-0 translate-y-10">
              Routine health screenings and physical examinations to monitor your overall well-being and detect issues early.
            </p>
<a className="text-sm font-semibold text-sky-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
              Learn more 
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white/60 duration-700 ease-out opacity-0 translate-y-10">
<div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square-plus" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M9 10h6m-3-3v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Medical Consultation</h3>
<p className="text-slate-600 leading-relaxed mb-6 transition-all duration-700 ease-out opacity-0 translate-y-10">
              One-on-one sessions with our specialist doctors to diagnose conditions and create personalized treatment plans.
            </p>
<a className="text-sm font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
              Learn more 
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white/60 duration-700 ease-out opacity-0 translate-y-10">
<div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flask-conical" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2M8.5 2h7m-9 14h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Laboratory Test</h3>
<p className="text-slate-600 leading-relaxed mb-6 transition-all duration-700 ease-out opacity-0 translate-y-10">
              Advanced on-site diagnostic testing services ensuring quick and accurate results for your peace of mind.
            </p>
<a className="text-sm font-semibold text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
              Learn more 
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 lg:mx-10 relative overflow-hidden" id="why-us">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600 rounded-full blur-[120px] opacity-20 -mr-20 -mt-20"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600 rounded-full blur-[120px] opacity-20 -ml-20 -mb-20"></div>
<div className="relative max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 transition-all duration-700 ease-out opacity-0 translate-y-10">Why Choose CarePoint?</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto transition-all duration-700 ease-out opacity-0 translate-y-10">We combine medical expertise with a patient-centered approach to deliver the best healthcare experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors transition-all duration-700 ease-out opacity-0 translate-y-10">
<div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-inner border border-slate-700 text-sky-400 transition-all duration-700 ease-out opacity-0 translate-y-10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" fill="none" r="7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
<path d="M8.21 13.89L7 23l5-3l5 3l-1.21-9.12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Experienced Doctors</h3>
<p className="text-slate-400 text-sm leading-relaxed transition-all duration-700 ease-out opacity-0 translate-y-10">Top-tier medical professionals with years of experience in various specialities.</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors transition-all duration-700 ease-out opacity-0 translate-y-10">
<div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-inner border border-slate-700 text-sky-400 transition-all duration-700 ease-out opacity-0 translate-y-10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polygon fill="none" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Fast Service</h3>
<p className="text-slate-400 text-sm leading-relaxed transition-all duration-700 ease-out opacity-0 translate-y-10">Streamlined appointments and quick result turnaround times to value your schedule.</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors transition-all duration-700 ease-out opacity-0 translate-y-10">
<div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-inner border border-slate-700 text-sky-400 transition-all duration-700 ease-out opacity-0 translate-y-10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:building-2" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M10 6h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M10 10h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M10 14h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M10 18h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
<p className="text-slate-400 text-sm leading-relaxed transition-all duration-700 ease-out opacity-0 translate-y-10">State-of-the-art medical equipment and comfortable environments for your care.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="doctors">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<span className="text-sky-600 font-semibold tracking-wider text-sm uppercase">Our Team</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-2 mb-4 transition-all duration-700 ease-out opacity-0 translate-y-10">
              Meet Our Specialists
            </h2>
<p className="text-slate-600 text-lg transition-all duration-700 ease-out opacity-0 translate-y-10">
              Our medical team and facilities are ready to support your health needs. We are proud to work with the region's top medical talent.
            </p>
</div>
<a className="text-sky-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap" href="#">
            View all doctors
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] transition-all duration-700 ease-out opacity-0 translate-y-10">
<img alt="Dr. Sarah Johnson" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100"></div>
<div className="absolute bottom-0 left-0 p-6 text-white">
<p className="text-xs font-semibold text-sky-300 uppercase mb-1 transition-all duration-700 ease-out opacity-0 translate-y-10">Cardiology</p>
<h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] transition-all duration-700 ease-out opacity-0 translate-y-10">
<img alt="Dr. Mark Davis" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100"></div>
<div className="absolute bottom-0 left-0 p-6 text-white">
<p className="text-xs font-semibold text-sky-300 uppercase mb-1 transition-all duration-700 ease-out opacity-0 translate-y-10">Pediatrics</p>
<h3 className="text-xl font-bold">Dr. Mark Davis</h3>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] transition-all duration-700 ease-out opacity-0 translate-y-10">
<img alt="Dr. Emily Chen" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100"></div>
<div className="absolute bottom-0 left-0 p-6 text-white">
<p className="text-xs font-semibold text-sky-300 uppercase mb-1 transition-all duration-700 ease-out opacity-0 translate-y-10">Neurology</p>
<h3 className="text-xl font-bold">Dr. Emily Chen</h3>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] transition-all duration-700 ease-out opacity-0 translate-y-10">
<img alt="Modern Lobby" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100"></div>
<div className="absolute bottom-0 left-0 p-6 text-white">
<p className="text-xs font-semibold text-sky-300 uppercase mb-1 transition-all duration-700 ease-out opacity-0 translate-y-10">Facilities</p>
<h3 className="text-xl font-bold">Main Clinic</h3>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="contact">
<div className="max-w-5xl mx-auto">
<div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-sky-500 to-blue-600 text-white px-6 py-16 md:py-20 text-center shadow-2xl">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 transition-all duration-700 ease-out opacity-0 translate-y-10">
              Need a medical consultation?
            </h2>
<p className="text-lg md:text-xl text-sky-50 mb-10 opacity-90 transition-all duration-700 ease-out opacity-0 translate-y-10">
              Schedule your visit online today. Fast, easy, and secure booking for you and your family.
            </p>
<button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-sky-50 transition-all shadow-xl transform hover:-translate-y-1">
              Make an Appointment
            </button>
</div>
</div>
</div>
</section>

<footer className="pt-16 pb-8 px-6 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-sky-600 flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14m-7-7h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">
                CarePoint
              </span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              Your trusted partner in health. Providing compassionate, high-quality care for the whole community.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-slate-600">
<li><a className="hover:text-sky-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Doctors</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Book Appointment</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify shrink-0 mt-0.5 iconify--lucide" data-icon="lucide:map-pin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="12" cy="10" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
</svg>
<span>123 Medical Center Dr.New York, NY 10001</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.05 12.05 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>(555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect fill="none" height="16" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="4"></rect>
<path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>support@carepoint.com</span>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-6">Opening Hours</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="font-medium text-slate-900">8:00 AM - 8:00 PM</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="font-medium text-slate-900">9:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="font-medium text-slate-900">Emergency Only</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2025 CarePoint Clinic. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
