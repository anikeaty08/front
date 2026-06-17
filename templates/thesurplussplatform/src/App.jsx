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

        // Number Counter Animation
        const animateValue = (obj, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                
                // Add commas and prefixes
                const currentVal = Math.floor(progress * (end - start) + start);
                let formatted = currentVal.toLocaleString();
                
                // Handle K/M formatting for large numbers if needed, or keeping it exact
                if (end > 1000000 && obj.dataset.target > 1000000) {
                     formatted = (currentVal / 1000000).toFixed(1) + 'M';
                } else if (end > 1000 && obj.dataset.target > 1000) {
                     // formatted = (currentVal / 1000).toFixed(1) + 'k';
                }

                if(obj.dataset.prefix) formatted = obj.dataset.prefix + formatted;
                if(obj.dataset.suffix) formatted = formatted + obj.dataset.suffix;

                obj.innerHTML = formatted;
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Handle generic fade/slide elements
                    if (entry.target.classList.contains('scroll-trigger')) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                    
                    // Handle Counters
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = parseFloat(counter.getAttribute('data-target'));
                        if (target && !counter.classList.contains('counted')) {
                            animateValue(counter, 0, target, 2000);
                            counter.classList.add('counted');
                        }
                    });

                    // Handle Chat Bubbles
                    if (entry.target.id === 'chat-demo') {
                        const bubbles = entry.target.querySelectorAll('.chat-bubble');
                        bubbles.forEach((bubble, index) => {
                            setTimeout(() => {
                                bubble.classList.add('visible');
                            }, index * 800); // Staggered delay
                        });
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.scroll-trigger').forEach(el => observer.observe(el));
        
        // Also observe sections containing counters that aren't scroll-triggers themselves
        const counterSections = document.querySelectorAll('.counter').forEach(el => {
            const section = el.closest('section') || el.closest('div');
            observer.observe(section);
        });

        // Chat demo specifically
        const chatSection = document.getElementById('chat-demo');
        if(chatSection) observer.observe(chatSection);

    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0B0E14]/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center group" href="#">
<img alt="The Surpluss" className="h-8 w-auto transition-transform group-hover:scale-105" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 32' fill='none'%3E%3Ctext x='0' y='24' fontFamily='Inter, sans-serif' font-weight='600' fontSize='22' fill='white' letter-spacing='-0.5'%3EThe Surpluss%3C/text%3E%3C/svg%3E"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors relative group" href="#features">
                    Platform
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors relative group" href="#impact">
                    Impact
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors relative group" href="#network">
                    Network
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors relative group" href="#">
                    Company
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Sign in</a>
<a className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-200 transition-all shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95" href="#">
                    Book a Demo
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 overflow-hidden">
<div className="absolute inset-0 hero-glow z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-300 text-xs font-medium mb-8 hover:bg-teal-500/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                New: AI Agent Negotiations
            </div>
<h1 className="animate-enter delay-100 text-5xl md:text-7xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                Turn business waste <br/>
                into <span className="text-gradient-animated">recurring revenue.</span>
</h1>
<p className="animate-enter delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Connect your surplus materials with companies that need them. 
                Our AI-driven synergy platform transforms your waste streams into measurable assets and CO₂ reductions.
            </p>
<div className="animate-enter delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-medium hover:opacity-90 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] flex items-center justify-center gap-2 group">
                    Start Synergizing
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium transition-all hover:border-slate-600 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="calculator"></i>
                    Calculate Savings
                </button>
</div>

<div className="relative max-w-5xl mx-auto perspective-1000 animate-enter delay-500">

<div className="animate-float bg-[#11141D] rounded-xl border border-slate-800 shadow-2xl p-6 md:p-8 text-left relative overflow-hidden group hover:border-slate-600 transition-colors duration-500">

<div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
<div>
<h3 className="text-white text-lg font-medium">Welcome Back, Alma!</h3>
<p className="text-slate-500 text-sm">Let's review what we discovered together</p>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-slate-400">3 Active Agents</span>
</div>
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer relative">
<i className="w-4 h-4 text-slate-400" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-800"></span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-panel rounded-xl p-8 relative overflow-hidden group-hover:bg-white/[0.04] transition-colors">
<div className="absolute top-0 right-0 p-40 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
<div className="flex justify-between items-start mb-12">
<h4 className="text-white text-xl font-normal">Control Center</h4>
<div className="text-right">
<p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Money Saved</p>
<p className="text-2xl text-white font-medium counter" data-target="34101">$0</p>
</div>
</div>

<div className="flex flex-col items-center justify-center mb-6 relative hover:scale-105 transition-transform duration-500">
<div className="relative">
<div className="gauge-arc"></div>
<div className="gauge-fill gauge-animate"></div>

<div className="absolute -left-4 bottom-0 w-8 h-8 bg-[#11141D] rounded-full border border-slate-700 flex items-center justify-center shadow-lg">
<i className="w-4 h-4 text-slate-500" data-lucide="check"></i>
</div>
<div className="absolute -right-4 bottom-0 w-8 h-8 bg-[#11141D] rounded-full border border-slate-700 flex items-center justify-center shadow-lg">
<i className="w-4 h-4 text-indigo-500 fill-indigo-500/20" data-lucide="circle"></i>
</div>
<div className="absolute top-4 left-4 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center z-10 shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<div className="absolute top-8 right-6 w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center z-10 border border-teal-500/30 shadow-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}>
<i className="w-4 h-4 text-teal-400" data-lucide="home"></i>
</div>
</div>
<div className="text-center -mt-12 z-10">
<span className="text-6xl text-white font-medium block counter" data-target="72">0</span>
<span className="text-slate-400 text-sm">Activity Score</span>
</div>
</div>
<p className="text-center text-xs text-slate-500 mt-4 italic">Based on your activity and confirmed outcomes.</p>
</div>

<div className="glass-panel rounded-xl p-6 flex flex-col justify-between hover:bg-white/[0.04] transition-colors group">
<div className="flex justify-between items-center mb-6">
<h4 className="text-white text-base font-medium">Intelligent Insights</h4>
<i className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
<div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800 mb-4 hover:border-slate-600 transition-colors cursor-pointer">
<div className="flex items-start gap-3 mb-3">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-indigo-400" data-lucide="zap"></i>
</div>
<div>
<p className="text-sm text-slate-200 mb-2 leading-relaxed">Price window shifting, timing risk for current negotiation</p>
<div className="flex gap-2">
<span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded">Market Shift</span>
<span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">High Priority</span>
</div>
</div>
</div>
<button className="w-full py-2 bg-slate-800 hover:bg-slate-700 rounded text-xs text-white transition-colors border border-slate-700">View details</button>
</div>
<div className="flex justify-between items-center text-xs text-slate-500 mt-auto">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-teal-500" data-lucide="check-circle"></i> State: New</span>
<span>2 hours ago</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

<div className="bg-[#151923] border border-white/5 rounded-lg p-5 hover:bg-[#1A1E29] transition-all hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-slate-400 font-medium">CO₂ Reduction</span>
<span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded flex items-center gap-1">
                                    +32% <i className="w-2 h-2" data-lucide="arrow-up"></i>
</span>
</div>
<div className="flex items-end justify-between">
<div>
<span className="text-2xl text-white font-medium counter" data-target="1812">0</span>
<span className="text-[10px] text-slate-500 block mt-1">Tons avoided</span>
</div>
<div className="flex items-end gap-1 h-8">
<div className="w-1.5 h-3 bg-slate-700 rounded-sm"></div>
<div className="w-1.5 h-5 bg-slate-700 rounded-sm"></div>
<div className="w-1.5 h-8 bg-white rounded-sm animate-pulse"></div>
</div>
</div>
</div>

<div className="bg-[#151923] border border-white/5 rounded-lg p-5 hover:bg-[#1A1E29] transition-all hover:-translate-y-1 transition-delay-100">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-slate-400 font-medium">Hours Saved</span>
<span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded flex items-center gap-1">
                                    +15% <i className="w-2 h-2" data-lucide="arrow-up"></i>
</span>
</div>
<div className="flex items-end justify-between">
<div>
<span className="text-2xl text-white font-medium counter" data-target="30">0</span>
<span className="text-[10px] text-slate-500 block mt-1">Operational efficiency</span>
</div>
<div className="flex items-end gap-1 h-8">
<div className="w-1.5 h-2 bg-slate-700 rounded-sm"></div>
<div className="w-1.5 h-4 bg-white rounded-sm animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 h-6 bg-slate-700 rounded-sm"></div>
</div>
</div>
</div>

<div className="bg-[#151923] border border-white/5 rounded-lg p-5 hover:bg-[#1A1E29] transition-all hover:-translate-y-1 transition-delay-200">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-slate-400 font-medium">Synergies/mo</span>
<span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded flex items-center gap-1">
                                    +15% <i className="w-2 h-2" data-lucide="arrow-up"></i>
</span>
</div>
<div className="flex items-end justify-between">
<div>
<span className="text-2xl text-white font-medium counter" data-target="13">0</span>
<span className="text-[10px] text-slate-500 block mt-1">Completed deals</span>
</div>
<div className="flex items-end gap-1 h-8">
<div className="w-1.5 h-4 bg-slate-700 rounded-sm"></div>
<div className="w-1.5 h-8 bg-white rounded-sm animate-pulse" style={{animationDelay: '0.4s'}}></div>
<div className="w-1.5 h-5 bg-slate-700 rounded-sm"></div>
</div>
</div>
</div>

<div className="bg-[#151923] border border-white/5 rounded-lg p-5 relative overflow-hidden hover:bg-[#1A1E29] transition-all hover:-translate-y-1 transition-delay-300 group/card">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none group-hover/card:from-indigo-500/20 transition-all"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-xs text-slate-400 font-medium">KGs / mo</span>
<span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded flex items-center gap-1">
                                    +75% <i className="w-2 h-2" data-lucide="arrow-up"></i>
</span>
</div>
<div className="flex items-end justify-between relative z-10">
<div>
<span className="text-2xl text-white font-medium counter" data-target="1205">0</span>
<span className="text-[10px] text-slate-500 block mt-1">Diverted from landfill</span>
</div>
<div className="flex items-end gap-1 h-8">
<div className="w-1.5 h-3 bg-slate-700 rounded-sm"></div>
<div className="w-1.5 h-5 bg-slate-700 rounded-sm"></div>
<div className="w-1.5 h-8 bg-white rounded-sm animate-pulse" style={{animationDelay: '0.6s'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black/20 py-12 overflow-hidden">
<div className="max-w-7xl mx-auto text-center">
<p className="text-sm text-slate-500 font-medium mb-8">TRUSTED BY INNOVATIVE SUSTAINABILITY TEAMS</p>
<div className="marquee-container w-full overflow-hidden">
<div className="marquee-track">

<div className="flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="triangle"></i> BuildTech</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="hexagon"></i> ChemCo</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="circle"></i> Circularity</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="box"></i> PackGroup</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="droplet"></i> PureWater</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="wind"></i> AeroGreen</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="zap"></i> EnergyPlus</div>
</div>

<div className="flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="triangle"></i> BuildTech</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="hexagon"></i> ChemCo</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="circle"></i> Circularity</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="box"></i> PackGroup</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="droplet"></i> PureWater</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="wind"></i> AeroGreen</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg flex-shrink-0"><i className="fill-white" data-lucide="zap"></i> EnergyPlus</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 scroll-trigger opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div>
<div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-6 group hover:bg-teal-500/20 transition-colors">
<i className="w-6 h-6 text-teal-400 group-hover:rotate-180 transition-transform duration-700" data-lucide="recycle"></i>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Matchmaking that understands materials.</h2>
<p className="text-lg text-slate-400 leading-relaxed mb-8">
                        Our platform doesn't just list items. It analyzes the chemical and physical properties of your surplus to find perfect industrial matches, ensuring regulatory compliance and maximum value recovery.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-teal-400" data-lucide="check"></i>
                            Auto-identification of 4,000+ material types
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-teal-400" data-lucide="check"></i>
                            Regulatory compliance checks built-in
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-teal-400" data-lucide="check"></i>
                            Instant value estimation calculator
                        </li>
</ul>
</div>
<div className="relative group cursor-default perspective-1000">
<div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-50"></div>
<div className="relative bg-[#0F1218] border border-white/10 rounded-2xl p-8 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-700 p-1 relative">
<img className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0F1218]"></div>
</div>
<div className="h-px w-16 bg-gradient-to-r from-slate-700 to-teal-500 relative">
<div className="absolute inset-y-0 left-0 w-1 bg-teal-400 animate-[marquee_1.5s_linear_infinite] rounded-full" style={{animationDirection: 'reverse'}}></div>
</div>
<div className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center border border-teal-700 group-hover:bg-teal-800 transition-colors">
<span className="text-teal-100 font-medium">B</span>
</div>
</div>
<div className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs text-teal-400 animate-pulse">
                                98% Compatibility
                            </div>
</div>
<div className="space-y-3">
<div className="p-4 bg-slate-900/50 rounded border border-white/5 hover:border-white/20 transition-colors">
<p className="text-xs text-slate-500 mb-1">Source</p>
<p className="text-white text-sm">Excess Steel Inventory (850kg)</p>
</div>
<div className="p-4 bg-slate-900/50 rounded border border-white/5 hover:border-white/20 transition-colors">
<p className="text-xs text-slate-500 mb-1">Destination</p>
<p className="text-white text-sm">BuildTech Solutions - Q1 Construction</p>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
<span className="text-slate-400 text-sm">Potential Value</span>
<span className="text-white text-lg font-medium">$12,400</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center scroll-trigger opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="order-2 md:order-1 relative group" id="chat-demo">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-50"></div>
<div className="relative bg-[#0F1218] border border-white/10 rounded-2xl p-8 min-h-[300px] flex flex-col justify-center">
<div className="flex items-start gap-4 mb-6 chat-bubble delay-100">
<div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 p-[1px] animate-spin-slow">
<div className="w-full h-full bg-[#0F1218] rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="bot"></i>
</div>
</div>
<div className="bg-slate-800/80 rounded-r-xl rounded-bl-xl p-4 text-sm text-slate-300 border border-slate-700 max-w-[80%] shadow-lg">
                                I've found a buyer for your steel inventory. They are offering $38,700 with pickup this Friday. Should I negotiate?
                            </div>
</div>
<div className="flex items-start gap-4 justify-end chat-bubble delay-500">
<div className="bg-indigo-600 rounded-l-xl rounded-br-xl p-4 text-sm text-white max-w-[80%] shadow-lg shadow-indigo-500/20">
                                Yes, ask if they can cover logistics costs.
                            </div>
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
<span className="text-xs text-white">You</span>
</div>
</div>
<div className="flex items-start gap-4 mt-6 chat-bubble delay-700">
<div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 p-[1px]">
<div className="w-full h-full bg-[#0F1218] rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="bot"></i>
</div>
</div>
<div className="bg-slate-800/80 rounded-r-xl rounded-bl-xl p-4 text-sm text-slate-300 border border-slate-700 max-w-[80%] shadow-lg flex items-center gap-2">
<span className="flex gap-1">
<span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></span>
<span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-100"></span>
<span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-200"></span>
</span>
                                Negotiating...
                            </div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6 group hover:bg-indigo-500/20 transition-colors">
<i className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" data-lucide="messages-square"></i>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Agents that negotiate for you.</h2>
<p className="text-lg text-slate-400 leading-relaxed mb-8">
                        Don't waste time on cold calls. Our AI agents actively scan the network, identify needs, and handle the initial negotiation to secure the best deal for your surplus.
                    </p>
<button className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 transition-all hover:translate-x-2">
                        Meet our Agents <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F1218] border-y border-white/5 scroll-trigger opacity-0 translate-y-8 transition-all duration-700 ease-out" id="impact">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">Measurable Impact</h2>
<p className="text-slate-400">Track your contribution to the circular economy with real-time ESG reporting.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-[#0B0E14] border border-white/5 hover:border-teal-500/30 transition-all hover:-translate-y-2 group">
<div className="w-14 h-14 bg-teal-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-teal-500" data-lucide="globe"></i>
</div>
<h3 className="text-4xl font-medium text-white mb-2 counter" data-suffix="+" data-target="12450">0</h3>
<p className="text-slate-400 text-sm">Tons of CO₂ Diverted</p>
</div>
<div className="p-8 rounded-2xl bg-[#0B0E14] border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-2 group">
<div className="w-14 h-14 bg-indigo-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-indigo-500" data-lucide="banknote"></i>
</div>
<h3 className="text-4xl font-medium text-white mb-2 counter" data-prefix="$" data-suffix="+" data-target="4200000">0</h3>
<p className="text-slate-400 text-sm">Value Recovered for Clients</p>
</div>
<div className="p-8 rounded-2xl bg-[#0B0E14] border border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-2 group">
<div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-purple-500" data-lucide="network"></i>
</div>
<h3 className="text-4xl font-medium text-white mb-2 counter" data-suffix="+" data-target="850">0</h3>
<p className="text-slate-400 text-sm">Active Industrial Synergies</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden scroll-trigger opacity-0 transition-opacity duration-1000">
<div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] to-[#111827] z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Ready to close the loop?</h2>
<p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                Join the network of forward-thinking companies turning their supply chain waste into a competitive advantage.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                    Get Started for Free
                </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 transition-all hover:border-slate-500 flex items-center justify-center gap-2 group">
                    Read Case Studies
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0B0E14] pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-3 mb-6">

<img alt="The Surpluss" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 32' fill='none'%3E%3Ctext x='0' y='24' fontFamily='Inter, sans-serif' font-weight='600' fontSize='22' fill='white' letter-spacing='-0.5'%3EThe Surpluss%3C/text%3E%3C/svg%3E"/>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                        The intelligent platform for industrial symbiosis. We help companies share resources, reduce waste, and boost profitability.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-teal-400 transition-colors" href="#">Marketplace</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">AI Agents</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">ESG Reporting</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-teal-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-teal-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 The Surpluss Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors hover:scale-110" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-600 hover:text-white transition-colors hover:scale-110" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-slate-600 hover:text-white transition-colors hover:scale-110" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
