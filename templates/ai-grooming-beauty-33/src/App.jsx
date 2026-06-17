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
  


        function updateSpotlight(e) {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    


        // Scroll Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
        });

        // Persona Toggle Logic
        let currentMode = 'b2c';
        
        function setMode(mode) {
            currentMode = mode;
            const toggleBg = document.getElementById('toggle-bg');
            const b2cBtn = document.querySelector('button[onclick="setMode(\'b2c\')"]');
            const b2bBtn = document.querySelector('button[onclick="setMode(\'b2b\')"]');
            
            // Move Background Pill
            if (mode === 'b2c') {
                toggleBg.style.transform = 'translateX(0)';
                toggleBg.style.width = b2cBtn.offsetWidth + 'px';
                b2cBtn.classList.add('text-white');
                b2cBtn.classList.remove('text-slate-400');
                b2bBtn.classList.remove('text-white');
                b2bBtn.classList.add('text-slate-400');
            } else {
                toggleBg.style.transform = `translateX(${b2cBtn.offsetWidth}px)`;
                toggleBg.style.width = b2bBtn.offsetWidth + 'px';
                b2bBtn.classList.add('text-white');
                b2bBtn.classList.remove('text-slate-400');
                b2cBtn.classList.remove('text-white');
                b2cBtn.classList.add('text-slate-400');
            }

            // Toggle Text
            const title = document.getElementById('features-title');
            const subtitle = document.getElementById('features-subtitle');
            
            if (mode === 'b2c') {
                title.innerText = "Tailored for Your Routine";
                subtitle.innerText = "Discover features designed to enhance your personal grooming journey.";
                
                toggleSection('b2c-features', 'b2b-features');
                toggleSection('b2c-trust', 'b2b-trust');
                
                // Pricing Updates
                highlightPlan('tier-pro', 'tier-growth', true);
            } else {
                title.innerText = "Enterprise-Grade Infrastructure";
                subtitle.innerText = "Tools built to scale your beauty brand and retain more customers.";
                
                toggleSection('b2b-features', 'b2c-features');
                toggleSection('b2b-trust', 'b2c-trust');
                
                // Pricing Updates
                highlightPlan('tier-growth', 'tier-pro', false);
            }
        }

        function toggleSection(showId, hideId) {
            const showEl = document.getElementById(showId);
            const hideEl = document.getElementById(hideId);
            
            hideEl.classList.remove('active-section');
            setTimeout(() => {
                showEl.classList.add('active-section');
            }, 200); // slight delay for smooth transition
        }

        function highlightPlan(activeId, inactiveId, isB2C) {
            const activePlan = document.getElementById(activeId);
            const inactivePlan = document.getElementById(inactiveId);
            
            const activeBadge = document.getElementById(activeId === 'tier-pro' ? 'badge-pro' : 'badge-growth');
            const inactiveBadge = document.getElementById(inactiveId === 'tier-pro' ? 'badge-pro' : 'badge-growth');

            // Reset Styles
            inactivePlan.classList.remove('border-indigo-500/30', 'md:-translate-y-2', 'shadow-[0_0_30px_-10px_rgba(79,70,229,0.15)]');
            inactivePlan.classList.add('opacity-60', 'hover:opacity-100', 'border-white/10');
            inactiveBadge.classList.add('hidden');
            
            // Set Active Styles
            activePlan.classList.add('border-indigo-500/30', 'md:-translate-y-2', 'shadow-[0_0_30px_-10px_rgba(79,70,229,0.15)]');
            activePlan.classList.remove('opacity-60', 'hover:opacity-100', 'border-white/10');
            activeBadge.classList.remove('hidden');

            // Handle Buttons inside plans
            const activeBtn = activePlan.querySelector('a');
            activeBtn.className = "w-full py-2 bg-indigo-600 rounded text-xs font-medium text-white hover:bg-indigo-500 text-center transition-colors shadow-lg shadow-indigo-500/20";
            
            const inactiveBtn = inactivePlan.querySelector('a');
            inactiveBtn.className = "w-full py-2 border border-white/10 rounded text-xs font-medium text-white hover:bg-white/5 text-center transition-colors";
            
            // Dim/Undim Tier 1 & 4 based on relevance
            const tier1 = document.querySelector('.b2c-plan');
            if(!isB2C) {
                 tier1.classList.add('opacity-40');
            } else {
                 tier1.classList.remove('opacity-40');
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4OF29NF3HVBYQsrwPvVq"></div>

</div></div>

<div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#0B0C10]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B0C10]/60">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify group-hover:text-indigo-400 transition-colors duration-500 iconify--lucide" data-height="20" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<span className="text-sm font-semibold text-white font-geist tracking-tight" style={{}}>NovaEdge</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300 font-geist tracking-tight" href="#features" style={{}}>Features</a>
<a className="hover:text-white transition-colors duration-300 font-geist tracking-tight" href="#results" style={{}}>Case Studies</a>
<a className="hover:text-white transition-colors duration-300 font-geist tracking-tight" href="#pricing" style={{}}>Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block hover:bg-slate-200 transition-all duration-300 text-xs font-semibold text-black tracking-tight font-geist bg-white rounded-md pt-2 pr-4 pb-2 pl-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="https://qode.world/auth/signin" target="_blank">
  Get Started
</a>
<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<style>
        @keyframes float-slow {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(0, -20px, 0); }
        }
        @keyframes float-medium {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(0, -15px, 0); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
    </style>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-x-24 gap-y-16 items-center">

<div className="text-center lg:text-left relative z-20">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-200 mb-8 font-geist tracking-tight backdrop-blur-sm active">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                    Next Gen Grooming Intelligence
                </div>
<h1 className="reveal delay-100 md:text-7xl leading-[1] active text-5xl font-semibold text-white tracking-tighter font-geist mix-blend-screen mb-8">
                    Precision <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-white/50">Personalization.</span><br/>
                    Powered by AI.
                </h1>
<p className="reveal delay-200 text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed font-geist tracking-tight active">
                    Optimize your personal grooming routine or scale your beauty brand with data-driven AI insights. One platform, two powerful paths.
                </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 active">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 font-geist tracking-tight group" onclick="document.getElementById('mode-toggle-btn').click();">
                        Start Personal Journey
                        <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="reveal delay-300 hidden lg:flex items-center justify-center active w-full h-[600px] relative perspective-1000">

<div className="relative w-[600px] h-[600px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[80px] animate-pulse"></div>
<div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[60px]"></div>

<div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full"></div>
<div className="absolute w-[320px] h-[320px] border border-white/5 rounded-full border-dashed opacity-30"></div>

<div className="animate-spin absolute top-0 right-0 bottom-0 left-0" style={{animationDuration: '40s', animationTimingFunction: 'linear'}}><defs>
<lineargradient id="orbit-line-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(255,255,255,0.01)">
<stop offset="50%" stop-color="rgba(129, 140, 248, 0.4)">
<stop offset="100%" stop-color="rgba(255,255,255,0.01)">
</stop></stop></stop></lineargradient>
</defs><line className="" stroke="url(#orbit-line-grad)" strokeWidth="1.5" x1="300" x2="300" y1="300" y2="75">

<line className="" stroke="url(#orbit-line-grad)" strokeWidth="1.5" x1="300" x2="495" y1="300" y2="412.5">

<line className="" stroke="url(#orbit-line-grad)" strokeWidth="1.5" x1="300" x2="105" y1="300" y2="412.5">

<div className="absolute top-[75px] left-[300px] -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center">
<div className="animate-spin flex flex-col items-center gap-3" style={{animationDuration: '40s', animationDirection: 'reverse', animationTimingFunction: 'linear'}}>
<div className="group relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0E0F14] border border-white/10 shadow-[0_0_25px_-5px_rgba(99,102,241,0.2)] backdrop-blur-md hover:border-indigo-500/50 hover:shadow-indigo-500/40 transition-all duration-300">
<svg className="text-indigo-400 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="text-xs font-semibold text-slate-300 whitespace-nowrap bg-[#0B0C10]/90 px-3 py-1.5 rounded-full border border-white/10 shadow-lg tracking-tight font-geist">Sourcing</span>
</div>
</div>

<div className="absolute top-[412.5px] left-[495px] -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center">
<div className="animate-spin flex flex-col items-center gap-3" style={{animationDuration: '40s', animationDirection: 'reverse', animationTimingFunction: 'linear'}}>
<div className="group relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0E0F14] border border-white/10 shadow-[0_0_25px_-5px_rgba(99,102,241,0.2)] backdrop-blur-md hover:border-indigo-500/50 hover:shadow-indigo-500/40 transition-all duration-300">
<svg className="text-indigo-400 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path className="" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<span className="text-xs font-semibold text-slate-300 whitespace-nowrap bg-[#0B0C10]/90 px-3 py-1.5 rounded-full border border-white/10 shadow-lg tracking-tight font-geist">Jobs &amp; ATS</span>
</div>
</div>

<div className="absolute top-[412.5px] left-[105px] -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center">
<div className="animate-spin flex flex-col items-center gap-3" style={{animationDuration: '40s', animationDirection: 'reverse', animationTimingFunction: 'linear'}}>
<div className="group relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0E0F14] border border-white/10 shadow-[0_0_25px_-5px_rgba(99,102,241,0.2)] backdrop-blur-md hover:border-indigo-500/50 hover:shadow-indigo-500/40 transition-all duration-300">
<svg className="text-indigo-400 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
</div>
<span className="text-xs font-semibold text-slate-300 whitespace-nowrap bg-[#0B0C10]/90 px-3 py-1.5 rounded-full border border-white/10 shadow-lg tracking-tight font-geist">AI Interview</span>
</div>
</div>
</line></line></line></div>

<div className="relative z-10 w-32 h-32 bg-white rounded-[32px] shadow-[0_0_60px_-10px_rgba(59,130,246,0.6)] flex items-center justify-center p-1">
<div className="w-full h-full rounded-[28px] overflow-hidden bg-white">
<img alt="Q Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
</div>

<div className="-inset-6 border-dashed animate-spin border-white/10 border rounded-full absolute" style={{animationDuration: '20s'}}></div>
</div>
</div>
</div>
</div>
</div>
</header><section className="py-24 relative z-20" id="alquen-dashboard">

<style>
        .spotlight-card {
            background-color: rgba(14, 15, 20, 1);
            position: relative;
            overflow: hidden;
            border-radius: 1.5rem; /* rounded-3xl */
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* The glowing radial gradient follower */
        .spotlight-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(129, 140, 248, 0.15), transparent 40%);
            opacity: 0;
            transition: opacity 0.5s;
            pointer-events: none;
            z-index: 1;
        }

        /* Hover state to show the light */
        .spotlight-card:hover::before {
            opacity: 1;
        }

        /* Inner highlight border effect */
        .spotlight-card::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 255, 255, 0.1), transparent 40%);
            opacity: 0;
            z-index: 1;
            pointer-events: none;
            border-radius: 1.5rem;
            mask-image: linear-gradient(black, black), linear-gradient(black, black);
            mask-clip: content-box, border-box;
            mask-composite: exclude;
            -webkit-mask-composite: xor;
            padding: 1px; /* Border width */
        }
        
        .spotlight-card:hover::after {
            opacity: 1;
        }

        /* Animated Pulse for the AI Orb */
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px 0px rgba(139, 92, 246, 0.3); }
            50% { box-shadow: 0 0 40px 10px rgba(139, 92, 246, 0.5); }
        }
    </style>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="spotlight-card p-8 flex flex-col justify-between h-full min-h-[500px] group" onmousemove="updateSpotlight(event)">
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-medium text-white font-geist tracking-tight">Your Profit Margin</h3>
<div className="flex gap-4 text-xs font-geist">
<div className="flex items-center gap-2 text-slate-400">
<span className="w-3 h-0.5 bg-indigo-500 rounded-full"></span> Alqen
                            </div>
<div className="flex items-center gap-2 text-slate-500">
<span className="w-3 h-0.5 border-t border-dashed border-slate-500"></span> Others
                            </div>
</div>
</div>

<div className="w-full h-64 relative mb-8 select-none">

<div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-600 font-mono h-[85%]">
<span>70%</span>
<span>60%</span>
<span>50%</span>
<span>40%</span>
<span>20%</span>
<span>10%</span>
</div>

<div className="ml-8 h-full relative">

<div className="absolute inset-0 flex flex-col justify-between h-[85%]">
<div className="w-full border-t border-dashed border-white/5"></div>
<div className="w-full border-t border-dashed border-white/5"></div>
<div className="w-full border-t border-dashed border-white/5"></div>
<div className="w-full border-t border-dashed border-white/5"></div>
<div className="w-full border-t border-dashed border-white/5"></div>
<div className="w-full border-t border-dashed border-white/5"></div>
</div>

<div className="absolute bottom-0 w-full flex justify-between text-[10px] text-slate-600 font-mono pt-4">
<span>Nov 1</span>
<span>Nov 30</span>
</div>

<svg className="absolute inset-0 h-[85%] w-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="purpleGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0 60 Q 40 40, 80 60 T 160 80 T 240 40 T 320 60 T 400 50" fill="none" stroke="#475569" stroke-dasharray="4 4" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<path className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" d="M0 40 L 40 55 L 80 50 L 120 70 L 160 80 L 200 60 L 240 65 L 280 50 L 320 20 L 400 10" fill="none" stroke="#8b5cf6" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<path d="M0 40 L 40 55 L 80 50 L 120 70 L 160 80 L 200 60 L 240 65 L 280 50 L 320 20 L 400 10 V 150 H 0 Z" fill="url(#purpleGradient)" opacity="0.5" stroke="none"></path>
</svg>
</div>
</div>
</div>
<div className="relative z-10 mt-auto">
<h2 className="text-2xl font-semibold text-white mb-3 font-geist tracking-tight">Make more profit with Alqen</h2>
<p className="text-slate-400 font-geist font-light leading-relaxed max-w-md">Unlock higher profits with Alqen's strategic tools, offering crucial insights for informed decisions.</p>
</div>
</div>

<div className="flex flex-col gap-6 h-full">

<div className="spotlight-card p-8 flex-1 flex flex-col justify-center min-h-[280px] group" onmousemove="updateSpotlight(event)">
<div className="relative z-10 flex flex-col h-full">

<div className="flex items-center justify-center gap-4 mb-10 mt-2">

<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
<svg className="lucide lucide-sparkle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
</div>

<div className="h-[1px] w-8 bg-gradient-to-r from-white/10 to-indigo-500/50"></div>

<div className="w-14 h-14 rounded-2xl bg-indigo-600 shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] border border-indigo-400/50 flex items-center justify-center text-white relative z-20">
<svg className="lucide lucide-infinity" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>

<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30"></div>
</div>

<div className="h-[1px] w-8 bg-gradient-to-r from-indigo-500/50 to-white/10"></div>

<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
<svg className="lucide lucide-shopping-bag" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
</div>
<div className="mt-auto">
<h2 className="text-xl font-semibold text-white mb-3 font-geist tracking-tight">Multiple market</h2>
<p className="text-slate-400 font-geist font-light leading-relaxed text-sm">Explore product across a wide range of e-commerce platforms, from Amazon to Walmart, all in one place.</p>
</div>
</div>
</div>

<div className="spotlight-card p-8 flex-1 flex flex-col justify-center min-h-[280px] group overflow-hidden" onmousemove="updateSpotlight(event)">
<div className="relative z-10 flex flex-col h-full">

<div className="flex-1 flex items-center justify-center py-6">
<div className="relative w-full max-w-[200px] h-[100px] flex items-center justify-center">

<div className="absolute w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
<div className="relative z-10">
<svg className="w-24 h-24 text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.6)]" viewbox="0 0 100 100">
<path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="currentColor" fillOpacity="0.8"></path>
<path className="animate-pulse" d="M50 25 L55 45 L75 50 L55 55 L50 75 L45 55 L25 50 L45 45 Z" fill="#fff" fillOpacity="0.9"></path>
</svg>
</div>

<div className="absolute w-[180px] h-[60px] border border-indigo-500/30 rounded-[100%] rotate-[-15deg]"></div>
<div className="absolute w-2 h-2 bg-white rounded-full top-[18px] right-[25px] shadow-[0_0_10px_white]"></div>
</div>
</div>
<div className="mt-auto">
<h2 className="text-xl font-semibold text-white mb-3 font-geist tracking-tight">Leverage the power of AI</h2>
<p className="text-slate-400 font-geist font-light leading-relaxed text-sm">Our AI chatbot provides automated suggestions based on real data closely related to your queries.</p>
</div>
</div>
</div>
</div>
</div>
</div>


</section>

<div className="sticky top-16 z-40 bg-[#0B0C10]/95 backdrop-blur border-b border-white/5 py-4">
<div className="flex justify-center">
<div className="relative bg-white/5 p-1 rounded-full flex cursor-pointer select-none border border-white/10" id="mode-toggle">
<div className="absolute top-1 left-1 w-[140px] h-[calc(100%-8px)] bg-indigo-600 rounded-full transition-all duration-300 shadow-lg z-0" id="toggle-bg" style={{transform: 'translateX(0px)', width: '140px'}}></div>
<button className="relative z-10 w-[140px] py-2 text-xs font-semibold transition-colors duration-300 text-center text-white font-geist tracking-tight" onclick="setMode('b2c')" style={{}}>
                    For Individuals
                </button>
<button className="relative z-10 w-[140px] py-2 text-xs font-semibold hover:text-white transition-colors duration-300 text-center text-slate-400 font-geist tracking-tight" id="mode-toggle-btn" onclick="setMode('b2b')" style={{}}>
                    For Business
                </button>
</div>
</div>
</div>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal active text-center mb-16">
<h2 className="text-3xl text-white tracking-tight mb-4 font-geist font-semibold" id="features-title" style={{}}>Tailored for Your Routine</h2>
<p className="text-slate-400 font-light font-geist tracking-tight" id="features-subtitle" style={{}}>Discover features designed to enhance your personal grooming journey.</p>
</div>

<div className="content-section grid md:grid-cols-3 gap-6 active-section" id="b2c-features">
<div className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="h-10 w-10 rounded-lg bg-pink-500/20 text-pink-300 flex items-center justify-center mb-6"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg></div>
<h3 className="text-lg font-medium text-white mb-3 font-geist tracking-tight" style={{}}>Personalized Recommendations</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist tracking-tight" style={{}}>AI algorithms analyze your skin type and preferences to suggest the perfect products from global brands.</p>
</div>
<div className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center mb-6"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar-clock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg></div>
<h3 className="text-lg font-medium text-white mb-3 font-geist tracking-tight" style={{}}>Routine Tracking</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist tracking-tight" style={{}}>Log your daily regimen and track progress over time with computer vision progress checks.</p>
</div>
<div className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="h-10 w-10 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center mb-6"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg></div>
<h3 className="text-lg font-medium text-white mb-3 font-geist tracking-tight" style={{}}>AI Style Consultant</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist tracking-tight" style={{}}>Chat with our generative AI to get instant advice on styles, trends, and product ingredients.</p>
</div>
</div>

<div className="content-section grid md:grid-cols-3 gap-6" id="b2b-features">
<div className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="h-10 w-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-6"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:code-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<h3 className="text-lg font-medium text-white mb-3 font-geist tracking-tight" style={{}}>API Integration</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist tracking-tight" style={{}}>Seamlessly embed our recommendation engine into your existing e-commerce stack with RESTful APIs.</p>
</div>
<div className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="h-10 w-10 rounded-lg bg-orange-500/20 text-orange-300 flex items-center justify-center mb-6"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg></div>
<h3 className="text-lg font-medium text-white mb-3 font-geist tracking-tight" style={{}}>White-label Dashboard</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist tracking-tight" style={{}}>Offer your customers a branded portal for their personalization journey without building from scratch.</p>
</div>
<div className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-6"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-3" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<h3 className="text-lg font-medium text-white mb-3 font-geist tracking-tight" style={{}}>Retention Analytics</h3>
<p className="text-sm text-slate-400 leading-relaxed font-geist tracking-tight" style={{}}>Predict churn and identify high-value cohorts with our proprietary machine learning models.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-white/[0.01]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl text-white tracking-tight mb-12 text-center font-geist font-semibold" style={{}}>Flexible Plans for Every Scale</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-6 rounded-xl border border-white/10 bg-[#0E0F14] flex flex-col relative group transition-all duration-300 opacity-100 b2c-plan">
<div className="mb-4">
<span className="text-xs font-bold text-indigo-400 uppercase font-geist tracking-tight" style={{}}>Starter</span>
<div className="mt-2 flex items-baseline gap-1 text-white">
<span className="text-3xl font-geist font-semibold" style={{}}>$0</span>
<span className="text-sm text-slate-500 font-geist tracking-tight" style={{}}>/mo</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-xs text-slate-300 font-geist tracking-tight" style={{}}><svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Basic Skin Analysis</li>
<li className="flex items-start gap-2 text-xs text-slate-300 font-geist tracking-tight" style={{}}><svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 3 Routine Slots</li>
</ul>
<a className="w-full py-2 border border-white/10 rounded text-xs font-medium text-white hover:bg-white/5 text-center transition-colors font-geist tracking-tight" href="#" style={{}}>Start Free</a>
</div>

<div className="p-6 rounded-xl border bg-[#0E0F14] flex flex-col relative group transition-all duration-300 transform border-indigo-500/30 md:-translate-y-2 shadow-[0_0_30px_-10px_rgba(79,70,229,0.15)]" id="tier-pro">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg font-geist tracking-tight" id="badge-pro" style={{}}>Most Popular</div>
<div className="mb-4">
<span className="text-xs font-bold text-indigo-400 uppercase font-geist tracking-tight" style={{}}>Pro</span>
<div className="mt-2 flex items-baseline gap-1 text-white">
<span className="text-3xl font-geist font-semibold" style={{}}>$19</span>
<span className="text-sm text-slate-500 font-geist tracking-tight" style={{}}>/mo</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-xs text-slate-300 font-geist tracking-tight" style={{}}><svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Advanced AI Analysis</li>
<li className="flex items-start gap-2 text-xs text-slate-300 font-geist tracking-tight" style={{}}><svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Unlimited Routines</li>
</ul>
<a className="w-full py-2 bg-indigo-600 rounded text-xs font-medium text-white hover:bg-indigo-500 text-center transition-colors shadow-lg shadow-indigo-500/20 font-geist tracking-tight" href="#" style={{}}>Get Pro</a>
</div>

<div className="p-6 rounded-xl border bg-[#0E0F14] flex flex-col relative group transition-all duration-300 opacity-60 hover:opacity-100 border-white/10" id="tier-growth">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg hidden font-geist tracking-tight" id="badge-growth" style={{}}>Recommended</div>
<div className="mb-4">
<span className="text-xs font-bold text-emerald-400 uppercase font-geist tracking-tight" style={{}}>Growth</span>
<div className="mt-2 flex items-baseline gap-1 text-white">
<span className="text-3xl font-geist font-semibold" style={{}}>$99</span>
<span className="text-sm text-slate-500 font-geist tracking-tight" style={{}}>/mo</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-xs text-slate-300 font-geist tracking-tight" style={{}}><svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> API Access (10k req)</li>
<li className="flex items-start gap-2 text-xs text-slate-300 font-geist tracking-tight" style={{}}><svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 3 Dashboard Seats</li>
</ul>
<a className="w-full py-2 border border-white/10 rounded text-xs font-medium text-white hover:bg-white/5 text-center transition-colors font-geist tracking-tight" href="#" style={{}}>Start Trial</a>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-[#0E0F14] flex flex-col relative group transition-all duration-300 opacity-60 hover:opacity-100">
<div className="mb-4">
<span className="text-xs font-bold text-slate-400 uppercase font-geist tracking-tight" style={{}}>Enterprise</span>
<div className="mt-2 flex items-baseline gap-1 text-white">
<span className="text-3xl font-geist font-semibold" style={{}}>Custom</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-xs text-slate-300 font-geist tracking-tight" style={{}}><svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> White-label Solution</li>
<li className="flex items-start gap-2 text-xs text-slate-300 font-geist tracking-tight" style={{}}><svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dedicated Success Mgr</li>
</ul>
<a className="w-full py-2 border border-white/10 rounded text-xs font-medium text-white hover:bg-white/5 text-center transition-colors font-geist tracking-tight" href="#" style={{}}>Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="border-white/[0.06] overflow-hidden bg-black/40 border-t pt-20 pb-20">

<div className="flex justify-center gap-6 md:gap-12 mb-16 flex-wrap px-6">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:shield-check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-xs font-semibold text-slate-400 font-geist tracking-tight" style={{}}>SOC2 Type II</span>
</div>
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:lock" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
<span className="text-xs font-semibold text-slate-400 font-geist tracking-tight" style={{}}>GDPR Compliant</span>
</div>
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:server" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><path d="M6 6h.01M6 18h.01"></path></g></svg>
<span className="text-xs font-semibold text-slate-400 font-geist tracking-tight" style={{}}>99.9% Uptime</span>
</div>
</div>

<div className="content-section" id="b2b-trust">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium text-slate-500 uppercase font-geist tracking-tight" style={{}}>Powering retail leaders</p>
</div>
<div className="mask-linear w-full inline-flex flex-nowrap overflow-hidden">
<div className="flex items-center justify-center animate-scroll w-max">
<div className="flex items-center gap-16 md:gap-24 px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-lg font-bold text-white">
<span className="font-geist tracking-tight" style={{}}>SEPHORA</span><span className="font-geist tracking-tight" style={{}}>ULTA</span><span className="font-geist tracking-tight" style={{}}>L'OREAL</span><span className="font-geist tracking-tight" style={{}}>ESTEE LAUDER</span><span className="font-geist tracking-tight" style={{}}>SHISEIDO</span><span className="font-geist tracking-tight" style={{}}>GLOSSIER</span><span className="font-geist tracking-tight" style={{}}>SEPHORA</span><span className="font-geist tracking-tight" style={{}}>ULTA</span><span className="font-geist tracking-tight" style={{}}>L'OREAL</span>
</div>
<div className="flex items-center gap-16 md:gap-24 px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-lg font-bold text-white">
<span className="font-geist tracking-tight" style={{}}>SEPHORA</span><span className="font-geist tracking-tight" style={{}}>ULTA</span><span className="font-geist tracking-tight" style={{}}>L'OREAL</span><span className="font-geist tracking-tight" style={{}}>ESTEE LAUDER</span><span className="font-geist tracking-tight" style={{}}>SHISEIDO</span><span className="font-geist tracking-tight" style={{}}>GLOSSIER</span><span className="font-geist tracking-tight" style={{}}>SEPHORA</span><span className="font-geist tracking-tight" style={{}}>ULTA</span><span className="font-geist tracking-tight" style={{}}>L'OREAL</span>
</div>
</div>
</div>
</div>

<div className="content-section active-section" id="b2c-trust">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-500 uppercase mb-8 font-geist tracking-tight" style={{}}>Loved by thousands of users</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-white/5 rounded-xl border border-white/5">
<div className="flex text-yellow-400 mb-3 gap-0.5"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<p className="text-xs text-slate-300 leading-relaxed mb-4 font-geist tracking-tight" style={{}}>"Finally a skincare app that doesn't just push random products. The analysis was spot on."</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700"></div>
<span className="text-[10px] font-semibold text-white font-geist tracking-tight" style={{}}>Sarah Jenkins</span>
</div>
</div>
<div className="p-6 bg-white/5 rounded-xl border border-white/5">
<div className="flex text-yellow-400 mb-3 gap-0.5"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<p className="text-xs text-slate-300 leading-relaxed mb-4 font-geist tracking-tight" style={{}}>"The routine tracker helped me realize I was over-exfoliating. Game changer."</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700"></div>
<span className="text-[10px] font-semibold text-white font-geist tracking-tight" style={{}}>Mike Chen</span>
</div>
</div>
<div className="p-6 bg-white/5 rounded-xl border border-white/5">
<div className="flex text-yellow-400 mb-3 gap-0.5"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<p className="text-xs text-slate-300 leading-relaxed mb-4 font-geist tracking-tight" style={{}}>"The AI consultant answers my questions better than the staff at the store."</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700"></div>
<span className="text-[10px] font-semibold text-white font-geist tracking-tight" style={{}}>Jessica Alba</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-white/[0.06] bg-[#0B0C10] border-t pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="20" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-base font-semibold text-white font-geist tracking-tight" style={{}}>NovaEdge</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light font-geist tracking-tight" style={{}}>
                        Redefining beauty through the lens of data.
                    </p>
</div>
<div className="">
<h4 className="text-white text-xs font-semibold uppercase mb-6 font-geist tracking-tight" style={{}}>Product</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className=""><a className="hover:text-indigo-400 transition-colors font-geist tracking-tight" href="#" style={{}}>Features</a></li>
<li className=""><a className="hover:text-indigo-400 transition-colors font-geist tracking-tight" href="#" style={{}}>Pricing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-xs font-semibold uppercase mb-6 font-geist tracking-tight" style={{}}>Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors font-geist tracking-tight" href="#" style={{}}>About</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist tracking-tight" href="#" style={{}}>Privacy</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-xs font-semibold uppercase mb-6 font-geist tracking-tight" style={{}}>Social</h4>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
<p className="font-geist tracking-tight" style={{}}>© 2024 NovaEdge Inc. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
