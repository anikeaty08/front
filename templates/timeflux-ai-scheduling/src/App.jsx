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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        // Remove class when out of view to trigger animation again next time
                        entry.target.classList.remove('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<div className="aura-background-component fixed -z-10 w-full h-screen top-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component -z-10 w-full h-full absolute top-0">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<nav className="fixed transition-all duration-300 reveal active z-50 bg-[#030304]/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="calendar-clock" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg><a className="flex items-center gap-8 group" href="#">
<div className="w-full h-full">
<div className="w-full h-full">
</div>
</div>
<span className="group-hover:opacity-80 transition-opacity text-3xl font-extrabold text-white">TimeFLux</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#demo">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium hover:text-white transition-colors" href="#">Sign in</a>
<a className="hover:bg-white/20 transition-all duration-300 text-xs font-medium text-white bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm" href="#join">Dashboard</a>
</div>
</div><div className="w-full border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
</div><div className="w-full border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
</div><div className="w-full border-t border-white/5 bg-white/[0.02]">
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-48 pb-32 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-60"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="reveal inline-flex gap-2 text-[11px] font-medium text-indigo-300 bg-indigo-500/10 border-indigo-500/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center active">v2.0 is now live</div>
<h1 className="reveal delay-100 md:text-7xl leading-[1.1] title-gradient text-5xl font-medium text-white tracking-tight mb-6 active">Manage your availability with ease</h1>
<p className="reveal delay-200 md:text-xl leading-relaxed text-lg font-light text-slate-400 max-w-2xl mb-10 active">The modern scheduling platform for everyone. Connect your calendar, define your hours, and let the world book time with you seamlessly.</p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto active">
<button className="sm:w-auto group hover:bg-slate-100 transition-all duration-300 text-sm font-semibold text-black bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">Get Started</button>
<button className="sm:w-auto hover:border-white/20 transition-all duration-300 flex gap-2 text-sm font-medium text-white bg-transparent w-full border-white/10 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center">Learn More</button>
</div>
</div>

<div className="group reveal delay-300 mt-20 relative perspective-[2000px] active">
<div className="relative w-full max-w-5xl mx-auto glass-panel rounded-xl p-1 shadow-2xl transition-transform duration-700 ease-out transform rotate-x-12 group-hover:rotate-x-0 overflow-hidden border-t border-white/10">
<div className="bg-[#0A0A0C] rounded-lg overflow-hidden border border-white/5 h-[400px] md:h-[600px] flex">


<div className="flex-1 p-6 md:p-8 overflow-hidden relative">

<div className="bg-center opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbb598f1-0b87-48da-8010-a10558ea08c1_1600w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<div className="flex justify-between items-center mb-8">
<div>
<div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
<div className="h-8 w-64 bg-white/5 rounded border border-white/5 flex items-center px-3">
<span className="text-xs text-slate-500">Ask Neura AI to optimize schedule...</span>
</div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center">
</div>
<div className="h-8 w-24 bg-indigo-600/20 border border-indigo-500/30 rounded-full flex items-center justify-center text-[10px] text-indigo-300">
                                        + New Project
                                    </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">



</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-[#030304] to-transparent z-20"></div>
</div>
</div>
</section>

<section className="border-y overflow-hidden reveal border-white/5 pt-10 pb-10">
<div className="max-w-7xl mx-auto px-6 text-center mb-8">
<p className="text-xs font-medium text-slate-500 tracking-wider uppercase">Trusted by forward-thinking teams</p>
</div>
<div className="relative w-full overflow-hidden" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="animate-marquee flex gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold text-lg text-white tracking-tight">AcmeCorp</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold text-lg text-white tracking-tight">Vortex</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
<span className="font-bold text-lg text-white tracking-tight">Sphere</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:square-stack" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2m0 12c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path><rect height="8" rx="2" width="8" x="14" y="14"></rect></g></svg>
<span className="font-bold text-lg text-white tracking-tight">Layer</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
<span className="font-bold text-lg text-white tracking-tight">Crystal</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:boxes" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8"></path></g></svg>
<span className="font-bold text-lg text-white tracking-tight">Block</span>
</div>

<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold text-lg text-white tracking-tight">AcmeCorp</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold text-lg text-white tracking-tight">Vortex</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
<span className="font-bold text-lg text-white tracking-tight">Sphere</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:square-stack" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2m0 12c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path><rect height="8" rx="2" width="8" x="14" y="14"></rect></g></svg>
<span className="font-bold text-lg text-white tracking-tight">Layer</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
<span className="font-bold text-lg text-white tracking-tight">Crystal</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:boxes" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8"></path></g></svg>
<span className="font-bold text-lg text-white tracking-tight">Block</span>
</div>

<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold text-lg text-white tracking-tight">AcmeCorp</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold text-lg text-white tracking-tight">Vortex</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
<span className="font-bold text-lg text-white tracking-tight">Sphere</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:square-stack" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2m0 12c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path><rect height="8" rx="2" width="8" x="14" y="14"></rect></g></svg>
<span className="font-bold text-lg text-white tracking-tight">Layer</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
<span className="font-bold text-lg text-white tracking-tight">Crystal</span>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:boxes" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8"></path></g></svg>
<span className="font-bold text-lg text-white tracking-tight">Block</span>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="features">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-4">Everything you need to schedule with ease</h2>
<p className="text-lg text-slate-400">Powerful features that help you and your team work more efficiently, save time, and close more deals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group glass-panel hover:bg-white/[0.05] transition-all duration-300 overflow-hidden reveal delay-100 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:zap" data-width="100" height="100" role="img" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex group-hover:border-indigo-500/40 transition-colors bg-indigo-500/10 w-12 h-12 border-indigo-500/20 border rounded-lg mb-6 items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:list-todo" data-icon-replaced="true" data-icon-set="lucide" data-lucide="calendar-check" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Calendar Connections</h3>
<p className="leading-relaxed text-sm text-slate-400">Connect your Google Calendar to check availability and create events automatically.</p>
</div>

<div className="group glass-panel hover:bg-white/[0.05] transition-all duration-300 overflow-hidden reveal delay-100 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex group-hover:border-indigo-500/40 transition-colors bg-indigo-500/10 w-12 h-12 border-indigo-500/20 border rounded-lg mb-6 items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:list-todo" data-icon-replaced="true" data-icon-set="lucide" data-lucide="alarm-clock" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Scheduling</h3>
<p className="leading-relaxed text-sm text-slate-400">Share your link and let people pick a time that works for both of you.</p></div>

<div className="group glass-panel hover:bg-white/[0.05] transition-all duration-300 reveal delay-100 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex bg-blue-500/10 w-12 h-12 border-blue-500/20 border rounded-lg mb-6 items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-3" data-icon-replaced="true" data-icon-set="lucide" data-lucide="workflow" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(96, 165, 250)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Workflows</h3>
<p className="leading-relaxed text-sm text-slate-400">Automate reminders and follow-ups to decrease no-shows.</p>
</div>

<div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:messages-square" data-icon-replaced="true" data-icon-set="lucide" data-lucide="globe" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Global Payments</h3>
<p className="leading-relaxed text-sm text-slate-400">Accept payments from invitees as they schedule a meeting with you.</p>
</div>

<div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 reveal delay-300">
<div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:puzzle" data-icon-replaced="true" data-icon-set="lucide" data-lucide="shield" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 146, 60)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Admin Tools</h3>
<p className="leading-relaxed text-sm text-slate-400">Manage your team's availability and route meetings to the right person.</p>
</div>

<div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 reveal delay-300">
<div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:puzzle" data-icon-replaced="true" data-icon-set="lucide" data-lucide="smartphone" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 146, 60)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Mobile App</h3>
<p className="leading-relaxed text-sm text-slate-400">Manage your schedule on the go with our iPhone and Android apps.</p>
</div>
</div>
</div></section>

<section className="py-24 bg-[#050507] border-y border-white/5 relative overflow-hidden" id="demo">
<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050507] to-[#050507] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="flex-1 space-y-6 reveal">
<div className="inline-block text-xs font-medium text-indigo-400 bg-indigo-500/10 border-indigo-500/20 border rounded-full pt-1 pr-3 pb-1 pl-3">Video Tutorials</div>
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight">How TimeFlux Works <p className="text-lg text-slate-400">
                    Simplify your scheduling in three easy steps. No more back-and-forth emails.
                                    </p> <ul className="pt-4 space-y-4">
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check-circle-2" data-width="18" fill="none" height="18" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Create Event Types</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check-circle-2" data-width="18" fill="none" height="18" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                        Share Your Link            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                        Get Booked Automatically
                    </li>
</ul></h2></div>

<div className="flex-1 w-full reveal delay-200">
<div className="bg-[#0e0e11] border-white/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">
<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<article className="overflow-hidden sm:rounded-3xl col-span-2 md:col-span-3 lg:col-span-4 min-h-[220px] sm:min-h-[280px] md:min-h-[500px] flex flex-col bg-zinc-950 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5cfccae6-9871-477a-8895-3446b4fc1402_1600w.png)] max-w-lg bg-cover border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-center justify-between text-zinc-300">
</div>
</article>
</div>

</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium text-center text-white mb-16 tracking-tight reveal">Loved by remote teams worldwide</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors reveal delay-100">
<div className="flex gap-1 mb-4 text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="leading-relaxed text-sm text-slate-300 mb-6">
                    "NeuraLink totally changed how we handle sprints. The AI suggestions are surprisingly accurate and have saved us hours of planning time every week."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div className="">
<p className="text-xs font-medium text-white">Alex Chen</p>
<p className="text-[10px] text-slate-500">CTO, DevScale</p>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors reveal delay-200">
<div className="flex gap-1 mb-4 text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">
                    "The interface is stunning, but the backend AI is where the magic happens. It feels like having a project manager who never sleeps."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Sarah Miller</p>
<p className="text-[10px] text-slate-500">Product Lead, Streamline</p>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors reveal delay-300">
<div className="flex gap-1 mb-4 text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">
                    "We've tried every tool out there. Nothing integrates this smoothly with our existing stack while adding actual intelligence."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">James Wilson</p>
<p className="text-[10px] text-slate-500">Founder, NextGen</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">Simple, transparent pricing</h2>
<p className="text-slate-400">Start for free, scale when you need to.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="reveal delay-100 bg-[#0A0A0C] border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-medium text-white">Free</h3>
<p className="text-sm text-slate-500 mb-6">For individuals</p>
<div className="text-3xl font-medium text-white mb-6">$0</div>
<ul className="mb-8 space-y-3">
<li className="flex gap-2 text-sm text-slate-400 gap-x-2 gap-y-2 items-center"><svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1 Event Type</li>
<li className="flex gap-2 text-sm text-slate-400 gap-x-2 gap-y-2 items-center"><svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Connect 1 Calendar</li>
<li className="flex gap-2 text-sm text-slate-400 gap-x-2 gap-y-2 items-center"><svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Automated Notifications</li>
<li className="flex gap-2 text-sm text-slate-400 gap-x-2 gap-y-2 items-center"><svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> TimeFlux Branding</li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Go to Dashboard</button>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-[#0E0E12] relative reveal delay-200">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-500 text-[10px] text-white font-medium">Most Popular</div>
<h3 className="text-lg font-medium text-white">Pro</h3>
<p className="text-sm text-slate-500 mb-6">For Professionals</p>
<div className="text-3xl font-medium text-white mb-6">$8<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-300"><svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Unlimited Event Types</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Connect 6 Calendars</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Workflows and Integrations</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Redirect on Booking</li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm transition-colors shadow-lg shadow-indigo-500/20">Start Free Trial</button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-[#0A0A0C] reveal delay-300">
<h3 className="text-lg font-medium text-white">Teams</h3>
<p className="text-sm text-slate-500 mb-6">For Growing Teams</p>
<div className="text-3xl font-medium text-white mb-6">$15<span className="text-sm text-slate-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-400"><svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Everything in Pro</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Admin Management</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Round Robin Events</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Lead Dashboard (CRM)</li>
<li className="flex items-center gap-2 text-sm text-slate-400"><svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Team Scheduling Pages</li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="join">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to work smarter?</h2>
<p className="text-slate-400 text-lg mb-10">Get our free guide on TimeFlux.</p>
<form className="max-w-md mx-auto relative flex items-center">
<svg aria-hidden="true" className="iconify absolute left-4 text-slate-500 iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<input className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-11 pr-32 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your email address" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-white text-black text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors" type="button">
                    Claim Your Guide             </button>
</form>
<p className="text-[10px] text-slate-600 mt-4">No spam, ever. Unsubscribe anytime.</p>
</div>

<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] pointer-events-none"></div>
</section>

<footer className="border-t border-white/5 bg-[#020203] py-12 text-sm reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="text-white font-medium tracking-tight">TimeFlux</span>
</div>
<p className="text-slate-500 text-xs leading-relaxed">We take the work out of connecting with others so you can accomplish more.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Support</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Help center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Video tutorials</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-slate-600 text-xs">© 2025 TimeFlux. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
