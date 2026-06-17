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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => {
initInViewAnimations();
// Existing Parallax Logic
const heroBg = document.getElementById('hero-bg');
window.addEventListener('scroll', () => {
if(!heroBg) return;
const scrolled = window.scrollY;
heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
});
});
})();



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
      

<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<nav className="z-50 md:mx-4 md:px-12 flex bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[2.5rem] mt-4 mr-2 mb-4 ml-2 pt-4 pr-6 pb-4 pl-6 relative shadow-xl shadow-slate-200/40 items-center justify-center [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll">
<div className="flex w-full max-w-[1600px] items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<span className="bg-center text-2xl font-semibold text-slate-900 tracking-tighter font-geist w-[180px] h-[60px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8ba4f32-187b-4915-bcf4-56b17cd4edd0_320w.webp)] bg-cover relative"></span>
</div>
<div className="hidden md:flex text-sm font-medium text-slate-500 bg-slate-100/50 border border-slate-200/60 rounded-full px-8 py-3 backdrop-blur-xl shadow-sm gap-8 items-center">
<a className="hover:text-blue-600 transition-colors font-geist" href="#">Company</a>
<a className="hover:text-blue-600 transition-colors font-geist" href="#">Business Solutions</a>
<a className="hover:text-blue-600 transition-colors font-geist" href="#">Services</a>
<a className="hover:text-blue-600 transition-colors font-geist" href="#">Resources</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<button className="hidden md:flex h-12 items-center gap-2 rounded-full bg-slate-950 border border-slate-800 pl-6 pr-5 text-white hover:bg-slate-800 transition-all hover:scale-105 shadow-sm group">
<span className="text-sm font-medium font-geist">Contact</span>
<svg className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-white hover:bg-slate-800 transition-all hover:scale-105 group shadow-sm">
<svg className="lucide lucide-phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</button>
<button className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-white hover:bg-slate-800 transition-all hover:scale-105 md:hidden shadow-lg shadow-slate-950/20">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</nav>

<header className="relative h-[90vh] min-h-[700px] overflow-hidden group mx-2 md:mx-4 mb-4 rounded-[2.5rem] shadow-2xl [animation:animationIn_1s_ease-out_0.1s_both] animate-on-scroll">

<img alt="Security Background" className="absolute inset-0 w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-[2000ms] ease-in-out alpha-mask-x" id="hero-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98251627-a041-45cd-857a-e477604fdfe5_3840w.webp" style={{transform: 'translateY(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-900/20 alpha-mask-x"></div>

<div className="absolute top-1/3 right-[15%] hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full shadow-2xl [animation:animationIn_1s_ease-out_0.8s_both] animate-on-scroll">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-widest font-geist">Surveillance Active</span>
</div>
<div className="absolute bottom-1/3 left-[15%] hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full shadow-2xl [animation:animationIn_1s_ease-out_1s_both] animate-on-scroll">
<span className="iconify text-blue-400" data-height="16" data-icon="solar:shield-check-bold-duotone" data-width="16"></span>
<span className="text-xs font-semibold uppercase tracking-widest font-geist">Access Control</span>
</div>

<div className="flex flex-col md:pb-32 text-center pr-6 pb-24 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-end">
<div className="mb-8 [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll">
<span className="bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest font-geist shadow-lg">
            South Bay &amp; OC Security
          </span>
</div>
<h1 className="text-[18vw] lg:text-[15vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 mix-blend-overlay opacity-90 font-geist select-none font-semibold [animation:animationIn_1s_ease-out_0.4s_both] animate-on-scroll">
          SECURITY
        </h1>
<p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mt-8 leading-relaxed font-geist [animation:animationIn_1s_ease-out_0.6s_both] animate-on-scroll">
          Business. Security. Integrated. Securing your business and the bottom-line is our goal in designing your perfect security system.
        </p>
</div>
</header>
<section className="py-24 px-6 md:px-16 mx-2 md:mx-4 mb-4 bg-white rounded-[2.5rem] shadow-sm">
<div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start [animation:animationIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="px-5 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide font-geist border border-blue-100">Our Story</span>
<span className="px-5 py-2 rounded-full bg-slate-50 text-slate-600 text-sm font-semibold tracking-wide font-geist border border-slate-100">Certified Experts</span>
<span className="px-5 py-2 rounded-full bg-slate-50 text-slate-600 text-sm font-semibold tracking-wide font-geist border border-slate-100">Local Service</span>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-slate-900 mb-16 max-w-4xl font-geist [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll">
        Where Security Meets <br/><span className="text-slate-400">Technology.</span>
</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

<div className="lg:col-span-5 relative h-[500px] lg:h-auto rounded-[2rem] overflow-hidden group shadow-2xl shadow-slate-200 border-gradient [animation:animationIn_1s_ease-out_0.3s_both] animate-on-scroll">
<img alt="Security Center" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a96d5836-da47-408e-8d27-76bd701802ae_800w.webp"/>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white border border-white/20">
<span className="iconify text-white" data-height="24" data-icon="solar:shield-bold-duotone" data-width="24"></span>
</div>
<h3 className="text-white text-xl font-medium font-geist tracking-tight">Operations Center</h3>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-8">
<div className="h-[350px] rounded-[2rem] overflow-hidden relative shadow-xl shadow-slate-200 [animation:animationIn_1s_ease-out_0.4s_both] animate-on-scroll">
<img alt="Technical Team" className="w-full h-full object-cover alpha-mask-x" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&amp;q=80"/>
<div className="absolute top-6 right-6 bg-white rounded-full p-4 shadow-xl text-blue-600">
<span className="iconify text-blue-600" data-height="24" data-icon="solar:medal-star-bold-duotone" data-width="24"></span>
</div>
</div>
<div className="bg-slate-50 rounded-[2rem] p-10 md:p-12 border border-slate-100 [animation:animationIn_1s_ease-out_0.5s_both] animate-on-scroll">
<p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-light font-geist">
              At SafetyCentric, we are more than just installers; we are your <span className="text-blue-600 font-medium">strategic partners</span>. Our team specializes in system integration, technology consultation, and staff augmentation to protect your facility.
            </p>
<button className="aura-button-emihv7fxc5ufm9ks group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-0 outline-none px-8 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-1 active:scale-95 font-geist tracking-wide" type="button">
<style>
                    .aura-button-emihv7fxc5ufm9ks { background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(59, 130, 246, 0.5) 0%, rgba(15, 23, 42, 0) 100%), linear-gradient(0deg, #0f172a, #0f172a); }
                    .aura-button-emihv7fxc5ufm9ks::before { content: ""; position: absolute; inset: 1px; background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%); border-radius: calc(0.75rem - 1px); transition: all 0.5s ease-in-out; z-index: 0; pointer-events: none; }
                    .aura-button-emihv7fxc5ufm9ks::after { content: ""; position: absolute; inset: 2px; background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(59, 130, 246, 0.6) 0%, rgba(15, 23, 42, 0) 100%), linear-gradient(0deg, #0f172a, #0f172a); border-radius: calc(0.75rem - 2px); transition: all 0.5s ease-in-out; z-index: 0; pointer-events: none; }
                    .aura-points-wrapper { overflow: hidden; width: 100%; height: 100%; pointer-events: none; position: absolute; inset: 0; z-index: 1; }
                    .aura-point { bottom: -10px; position: absolute; animation: aura-floating-points infinite ease-in-out; pointer-events: none; width: 2px; height: 2px; background-color: #60a5fa; border-radius: 9999px; }
                    @keyframes aura-floating-points { 0% { transform: translateY(0); } 85% { opacity: 0; } 100% { transform: translateY(-55px); opacity: 0; } }
                    .aura-button-inner { z-index: 2; display: flex; align-items: center; gap: 8px; position: relative; }
                    .aura-icon { transition: transform 0.3s ease; } .group:hover .aura-icon { transform: translateX(4px); }
                    .aura-point:nth-child(1) { left: 10%; opacity: 1; animation-duration: 2.35s; animation-delay: 0.2s; } .aura-point:nth-child(2) { left: 30%; opacity: 0.7; animation-duration: 2.5s; animation-delay: 0.5s; }
                    .aura-point:nth-child(3) { left: 25%; opacity: 0.8; animation-duration: 2.2s; animation-delay: 0.1s; } .aura-point:nth-child(4) { left: 44%; opacity: 0.6; animation-duration: 2.05s; }
                    .aura-point:nth-child(5) { left: 50%; opacity: 1; animation-duration: 1.9s; }
                </style>
<div className="aura-points-wrapper">
<i className="aura-point"></i><i className="aura-point"></i><i className="aura-point"></i><i className="aura-point"></i><i className="aura-point"></i>
</div>
<span className="aura-button-inner">Explore Solutions <svg className="aura-icon w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</button>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 text-white py-24 md:py-32 rounded-[2.5rem] mx-2 md:mx-4 mb-4 overflow-hidden relative shadow-2xl [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll">

<div className="opacity-[0.15] absolute inset-0 pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="md:px-12 z-10 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative">
<div className="mb-20 md:mb-24 [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="md:text-7xl leading-[1.1] text-5xl font-light font-geist text-white tracking-tighter">Integrated <span className="text-blue-400">Ecosystems</span></h2>
<p className="text-slate-400 text-lg max-w-xl mt-6 font-light font-geist">Seamlessly connecting video, access, and intrusion systems for total control.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="group flex flex-col gap-6 [animation:animationIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="bg-slate-900/50 border-gradient rounded-[2rem] h-[450px] relative overflow-hidden flex items-center justify-center p-8 shadow-2xl backdrop-blur-sm group-hover:border-blue-500/30 transition-colors duration-500" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full max-w-[280px] aspect-[3/4] bg-slate-950 rounded-[24px] border border-white/10 overflow-hidden shadow-2xl relative flex flex-col">
<div className="px-5 py-4 border-b border-white/5 flex justify-between items-center bg-slate-900">
<span className="text-[10px] font-medium text-slate-400 font-geist uppercase tracking-wider">System Status</span>
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<div className="p-5 flex-1 relative">
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative w-48 h-48">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
<svg className="absolute inset-0 w-full h-full pointer-events-none filter drop-shadow-[0_0_3px_rgba(59,130,246,0.5)]"><path className="opacity-80" d="M96 28 L28 140 L164 140 Z" fill="none" stroke="url(#lineGradient)" stroke-dasharray="6 4" strokeWidth="1.5"></path></svg>
<div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
<div className="relative w-14 h-14 bg-slate-950 rounded-2xl border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10"><svg className="lucide lucide-camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg></div>
</div>
<div className="absolute bottom-6 left-0 flex flex-col items-center z-10">
<div className="relative w-14 h-14 bg-slate-950 rounded-2xl border border-indigo-500/30 flex items-center justify-center text-indigo-400"><svg className="lucide lucide-lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
</div>
<div className="absolute bottom-6 right-0 flex flex-col items-center z-10">
<div className="relative w-14 h-14 bg-slate-950 rounded-2xl border border-emerald-500/30 flex items-center justify-center text-emerald-400"><svg className="lucide lucide-bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-normal leading-relaxed font-geist"><span className="text-white font-medium">System Integration.</span> <span className="text-slate-500">Connect network IP surveillance and access control into a cohesive ecosystem.</span></h3>
</div>
</div>

<div className="group flex flex-col gap-6 [animation:animationIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="bg-slate-900/50 border-gradient rounded-[2rem] h-[450px] relative overflow-hidden flex items-center justify-center p-8 shadow-2xl backdrop-blur-sm transition-colors duration-500" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="overflow-hidden flex flex-col gap-5 bg-slate-950/95 backdrop-blur-xl w-full max-w-[280px] border border-white/10 rounded-[24px] p-6 shadow-2xl relative group hover:border-indigo-500/40 hover:shadow-indigo-500/20 transition-all duration-500 ease-out">
<div className="flex items-center gap-4 border-b border-white/5 pb-4 relative z-10">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-indigo-500/30 flex items-center justify-center text-indigo-400 relative shadow-[inset_0_0_10px_rgba(99,102,241,0.2)]">
<svg className="lucide lucide-user-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
</div>
</div>
<div className="flex-1"><div className="text-sm text-white font-medium font-geist tracking-tight mb-1">Expert Tech</div><div className="text-xs text-emerald-400 font-medium tracking-wide">Deployed</div></div>
</div>
<div className="space-y-4 relative z-10">
<div className="space-y-1.5"><div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5"><div className="h-full bg-indigo-500 w-[94%] rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div></div></div>
<div className="space-y-1.5"><div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5"><div className="h-full bg-emerald-500 w-[65%] rounded-full relative"></div></div></div>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-normal leading-relaxed font-geist"><span className="text-white font-medium">Staff Augmentation.</span> <span className="text-slate-500">Expertly managed security projects with our professional staff services.</span></h3>
</div>
</div>

<div className="group flex flex-col gap-6 [animation:animationIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="bg-slate-900/50 border-gradient rounded-[2rem] h-[450px] relative overflow-hidden flex items-center justify-center p-8 shadow-2xl backdrop-blur-sm transition-colors duration-500" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="overflow-hidden flex flex-col gap-5 bg-slate-950/95 backdrop-blur-xl w-full max-w-[280px] border border-white/10 rounded-[24px] p-6 shadow-2xl relative group hover:border-emerald-500/40 hover:shadow-emerald-500/20 transition-all duration-500 ease-out text-left">
<div className="flex items-center gap-4 border-b border-white/5 pb-4 relative z-10">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 relative shadow-[inset_0_0_10px_rgba(16,185,129,0.2)]">
<svg className="lucide lucide-wrench" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
</div>
<div className="flex-1"><div className="text-sm text-white font-medium font-geist tracking-tight mb-1">Service Dispatch</div><div className="text-xs text-emerald-400 font-medium tracking-wide">Ready 24/7</div></div>
</div>
<div className="relative h-28 w-full bg-slate-900/50 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center z-10 group-hover:border-emerald-500/20 transition-colors duration-500">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10 bg-slate-950 p-2 rounded-full border border-emerald-500/50 shadow-lg shadow-emerald-500/20 text-emerald-400"><svg className="lucide lucide-map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-normal leading-relaxed font-geist"><span className="text-white font-medium">Maintenance.</span> <span className="text-slate-500">Reliable service dispatch to keep your intrusion systems running around the clock.</span></h3>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 md:px-16 mx-2 md:mx-4 mb-4 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden group [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60"></div>
<div className="relative z-10 max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl [animation:animationIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex items-center gap-2 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-500 font-geist">Proven Results</span>
</div>
<h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-6 font-geist leading-[1.1]">Engineering secure environments.</h3>
<p className="text-slate-500 text-lg font-light font-geist max-w-xl leading-relaxed">See how SafetyCentric designs custom security infrastructures for leading enterprises across South Bay and Orange County.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors group/link font-geist bg-slate-50 px-5 py-2.5 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 [animation:animationIn_1s_ease-out_0.5s_both] animate-on-scroll" href="#">View all case studies <svg className="lucide lucide-arrow-right group-hover/link:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<a className="group/card flex flex-col bg-slate-50 rounded-[2rem] border border-slate-100 p-3 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 [animation:animationIn_1s_ease-out_0.3s_both] animate-on-scroll" href="#">
<div className="relative w-full aspect-[4/3] bg-slate-200 rounded-[1.5rem] overflow-hidden mb-5">
<img alt="South Bay Retail" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 alpha-mask-x" src="https://images.unsplash.com/photo-1595191497467-f31ae50927b2?w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-900 shadow-sm border border-white/20">Retail</div>
</div>
<div className="px-3 pb-4 flex-1 flex flex-col">
<h4 className="text-xl font-medium text-slate-900 mb-2 font-geist tracking-tight group-hover/card:text-blue-600 transition-colors">South Bay Retail</h4>
<p className="text-slate-500 text-sm leading-relaxed font-geist font-light line-clamp-2 mb-4">Complete Video Surveillance solution to protect inventory and monitor employee safety with AI-driven analytics.</p>
<div className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0"><span>Read Case Study</span><svg className="lucide lucide-arrow-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div>
</div>
</a>

<a className="group/card flex flex-col bg-slate-50 rounded-[2rem] border border-slate-100 p-3 hover:border-indigo-200 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-900/5 hover:-translate-y-1 [animation:animationIn_1s_ease-out_0.5s_both] animate-on-scroll" href="#">
<div className="relative w-full aspect-[4/3] bg-slate-200 rounded-[1.5rem] overflow-hidden mb-5">
<img alt="Industrial Detection" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 alpha-mask-x" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-900 shadow-sm border border-white/20">Industrial</div>
</div>
<div className="px-3 pb-4 flex-1 flex flex-col">
<h4 className="text-xl font-medium text-slate-900 mb-2 font-geist tracking-tight group-hover/card:text-indigo-600 transition-colors">Industrial Detection</h4>
<p className="text-slate-500 text-sm leading-relaxed font-geist font-light line-clamp-2 mb-4">Advanced intrusion detection for a warehouse facility with remote dispatch services and perimeter defense.</p>
<div className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0"><span>Read Case Study</span><svg className="lucide lucide-arrow-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div>
</div>
</a>

<a className="group/card flex flex-col bg-slate-50 rounded-[2rem] border border-slate-100 p-3 hover:border-emerald-200 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 [animation:animationIn_1s_ease-out_0.7s_both] animate-on-scroll" href="#">
<div className="relative w-full aspect-[4/3] bg-slate-200 rounded-[1.5rem] overflow-hidden mb-5">
<img alt="Corporate Access" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 alpha-mask-x" src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=1600&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-900 shadow-sm border border-white/20">Corporate</div>
</div>
<div className="px-3 pb-4 flex-1 flex flex-col">
<h4 className="text-xl font-medium text-slate-900 mb-2 font-geist tracking-tight group-hover/card:text-emerald-600 transition-colors">Corporate Access</h4>
<p className="text-slate-500 text-sm leading-relaxed font-geist font-light line-clamp-2 mb-4">Seamless access control integration for a multi-tenant office building with mobile credentials.</p>
<div className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0"><span>Read Case Study</span><svg className="lucide lucide-arrow-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div>
</div>
</a>
</div>
</div>
</section>
<section className="relative md:px-16 md:mx-4 bg-slate-950 rounded-[2.5rem] mr-2 mb-4 ml-2 pt-24 pr-6 pb-24 pl-6 shadow-2xl overflow-hidden group isolate border border-slate-900 [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none opacity-60"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20 max-w-3xl mx-auto [animation:animationIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
<span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span></span>
                Trusted Partnership
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white font-geist tracking-tighter leading-[1.1]">Join a community of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400">secure businesses.</span></h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
<div className="flex flex-col gap-8">
<div className="group relative bg-slate-900/60 backdrop-blur-sm border-gradient rounded-[2rem] p-8 md:p-10 hover:border-blue-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 [animation:animationIn_1s_ease-out_0.4s_both] animate-on-scroll">
<p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed font-geist mt-4 mb-8">"SafetyCentric's video surveillance system gave us complete peace of mind. Their project management handled the installation efficiently and the post-setup support has been exceptional."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden relative shadow-inner"><img alt="John" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=320&amp;q=80"/></div>
<div><div className="text-white font-medium font-geist">John Davidson</div><div className="text-blue-400 text-sm font-geist tracking-wide">Business Owner</div></div>
</div>
</div>
<div className="group relative bg-slate-900/60 backdrop-blur-sm border-gradient rounded-[2rem] p-8 md:p-10 hover:border-indigo-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-900/10 hover:-translate-y-1 ml-0 md:ml-8 lg:ml-12 [animation:animationIn_1s_ease-out_0.6s_both] animate-on-scroll">
<p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed font-geist mt-4 mb-8">"The access control solution was exactly what we needed. Now we can easily keep track of visitors and secure our entry points with a single dashboard."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden relative shadow-inner"><img alt="Sarah" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&amp;q=80"/></div>
<div><div className="text-white font-medium font-geist">Sarah Jenkins</div><div className="text-indigo-400 text-sm font-geist tracking-wide">Office Manager</div></div>
</div>
</div>
</div>
<div className="relative h-[650px] w-full perspective-normal group/visuals hidden lg:block [animation:animationIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none opacity-50"></div>
<div className="absolute top-0 right-0 w-[85%] h-[75%] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 transition-all duration-700 ease-out group-hover/visuals:translate-x-4 group-hover/visuals:-translate-y-4 group-hover/visuals:rotate-1 alpha-mask-x">
<img alt="Secure Facility" className="w-full h-full object-cover opacity-60 group-hover/visuals:opacity-100 group-hover/visuals:scale-105 transition-all duration-700 grayscale group-hover/visuals:grayscale-0" src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
</div>
<div className="absolute bottom-6 left-0 w-[70%] h-[60%] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-900 transition-all duration-700 ease-out group-hover/visuals:-translate-x-4 group-hover/visuals:translate-y-4 group-hover/visuals:-rotate-1 alpha-mask-x">
<img alt="Monitoring Center" className="w-full h-full object-cover group-hover/visuals:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1754494977436-a5c202306fe4?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="flex items-center gap-3 mb-5">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 shadow-md"></div>
<div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-600 shadow-md"></div>
<div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-500 flex items-center justify-center text-[10px] text-white font-bold shadow-md">+5</div>
</div>
<div className="text-sm text-slate-300 font-medium font-geist tracking-tight">Security Team Active</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24 bg-white rounded-[2.5rem] mx-2 md:mx-4 mb-4 border border-slate-100 shadow-sm flex flex-col items-center justify-center relative overflow-hidden group [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="relative z-10 w-full px-6 md:px-12">
<p className="text-center text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-widest font-geist mb-12 select-none">Trusted by security teams at</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 lg:gap-x-24 max-w-6xl mx-auto opacity-100">

<svg className="h-7 md:h-8 w-auto text-slate-400 hover:text-slate-900 transition-colors duration-300 cursor-pointer [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll" fill="currentColor" viewbox="0 0 116 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 0L23 20H0L11.5 0Z"></path><path d="M43.5 20V16.8H48.2V11H44.6V11.2C44.6 13.9 42.4 15.6 39.5 15.6C36.6 15.6 34.6 13.5 34.6 10.3C34.6 7 36.6 4.8 39.7 4.8C42.2 4.8 44 6.2 44.5 8.7H48.1C47.4 4.3 44.1 1.7 39.7 1.7C34.6 1.7 30.9 5.5 30.9 10.3C30.9 15 34.6 18.8 39.6 18.8C42.4 18.8 44.4 17.6 45.6 15.8L46.2 16.8L43.5 20Z"></path><path d="M62.6 1.9H58.9V18.6H62.6V1.9Z"></path><path d="M84.1 20V16.8H88.8V11H85.2V11.2C85.2 13.9 83 15.6 80.1 15.6C77.2 15.6 75.2 13.5 75.2 10.3C75.2 7 77.2 4.8 80.3 4.8C82.8 4.8 84.6 6.2 85.1 8.7H88.7C88 4.3 84.7 1.7 80.3 1.7C75.2 1.7 71.5 5.5 71.5 10.3C71.5 15 75.2 18.8 80.2 18.8C83 18.8 85 17.6 86.2 15.8L86.8 16.8L84.1 20Z"></path><path d="M103.6 10.3C103.6 13.5 101.6 15.6 98.7 15.6C95.8 15.6 93.8 13.5 93.8 10.3C93.8 7 95.8 4.9 98.7 4.9C101.6 4.9 103.6 7 103.6 10.3ZM98.7 18.8C103.8 18.8 107.4 15 107.4 10.3C107.4 5.5 103.8 1.7 98.7 1.7C93.6 1.7 90 5.5 90 10.3C90 15 93.6 18.8 98.7 18.8Z"></path></svg>
<svg className="h-6 md:h-7 w-auto text-slate-400 hover:text-slate-900 transition-colors duration-300 cursor-pointer [animation:animationIn_1s_ease-out_0.3s_both] animate-on-scroll" fill="currentColor" viewbox="0 0 130 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="6"></circle><path d="M40 21V3H44V19H52V21H40Z"></path><path d="M58 21V3H62V21H58Z"></path><path d="M68 21V3H72L79 13L86 3H90V21H86V9L79 19L72 9V21H68Z"></path><path d="M108 21V19H116V13H108V11H116V9H108V3H120V5H112V9H120V15H112V19H120V21H108Z"></path></svg>
<svg className="h-7 md:h-9 w-auto text-slate-400 hover:text-slate-900 transition-colors duration-300 cursor-pointer [animation:animationIn_1s_ease-out_0.4s_both] animate-on-scroll" fill="currentColor" viewbox="0 0 100 28" xmlns="http://www.w3.org/2000/svg"><path d="M14 0L0 7L14 14L28 7L14 0Z" fillOpacity="0.8"></path><path d="M0 10L14 17L28 10V18L14 25L0 18V10Z"></path><path d="M45 20V5H49V11H55V5H59V20H55V14H49V20H45Z"></path><path d="M65 20V5H69V20H65Z"></path><path d="M75 20V5H85V8H79V11H84V14H79V17H85V20H75Z"></path></svg>
<svg className="h-6 md:h-7 w-auto text-slate-400 hover:text-slate-900 transition-colors duration-300 cursor-pointer [animation:animationIn_1s_ease-out_0.5s_both] animate-on-scroll" fill="currentColor" viewbox="0 0 120 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L22.3923 6V18L12 24L1.6077 18V6L12 0Z"></path><path d="M45 12C45 16.9706 40.9706 21 36 21C31.0294 21 27 16.9706 27 12C27 7.02944 31.0294 3 36 3C40.9706 3 45 7.02944 45 12ZM42 12C42 8.68629 39.3137 6 36 6C32.6863 6 30 8.68629 30 12C30 15.3137 32.6863 18 36 18C39.3137 18 42 15.3137 42 12Z"></path><path d="M52 21V3H59C63.4183 3 67 6.58172 67 11V13C67 17.4183 63.4183 21 59 21H52ZM55 6V18H59C61.7614 18 64 15.7614 64 13V11C64 8.23858 61.7614 6 59 6H55Z"></path><path d="M74 21V3H86V6H77V10.5H85V13.5H77V18H86V21H74Z"></path></svg>
<svg className="h-6 md:h-7 w-auto text-slate-400 hover:text-slate-900 transition-colors duration-300 cursor-pointer [animation:animationIn_1s_ease-out_0.6s_both] animate-on-scroll" fill="currentColor" viewbox="0 0 100 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L3 14H11V24L20 10H12V0Z"></path><path d="M40 21V3H43L50 12L57 3H60V21H57V9L50 18L43 9V21H40Z"></path><path d="M70 21L76 3H79L85 21H82L80 15H75L73 21H70ZM76 12H79L77.5 7L76 12Z"></path></svg>
</div>
</div>
</section>
<footer className="bg-slate-900 text-white mx-2 md:mx-4 mb-4 rounded-[2.5rem] px-8 md:px-16 py-16 shadow-2xl [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div><h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 font-geist">Secure your business <br/> today.</h3></div>
<div className="mt-6 md:mt-0 w-full md:w-auto">
<form className="flex items-center bg-slate-800 rounded-full p-2 border border-slate-700 w-full md:w-[400px]">
<input className="bg-transparent flex-1 px-4 text-sm text-white placeholder-slate-500 focus:outline-none font-geist" placeholder="Enter your email" type="email"/>
<button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-colors" type="button">
<span className="iconify text-white" data-height="20" data-icon="solar:arrow-right-bold-duotone" data-width="20"></span>
</button>
</form>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium font-geist">
<div className="flex items-center gap-2"><span className="text-white font-bold tracking-tight text-lg">SafetyCentric</span></div>
<div className="flex gap-8"><a className="hover:text-white transition" href="#">About Us</a><a className="hover:text-white transition" href="#">Services</a><a className="hover:text-white transition" href="#">Projects</a><a className="hover:text-white transition" href="#">Contact</a></div>
<div className="flex gap-4"><a className="hover:text-white transition" href="#">LinkedIn</a><a className="hover:text-white transition" href="#">Twitter</a></div>
</div>
</footer>


    </>
  );
}
