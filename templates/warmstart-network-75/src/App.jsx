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



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));

            // Accordion Logic
            const accordions = document.querySelectorAll('.accordion-item');
            
            accordions.forEach(item => {
                const button = item.querySelector('button');
                const content = item.querySelector('.accordion-content');
                
                button.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other accordions
                    accordions.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            otherItem.classList.remove('border-[#29B6D6]');
                            otherItem.classList.add('border-transparent');
                            otherItem.querySelector('.accordion-content').style.maxHeight = null;
                        }
                    });

                    // Toggle current
                    if (isActive) {
                        item.classList.remove('active');
                        item.classList.remove('border-[#29B6D6]');
                        item.classList.add('border-transparent');
                        content.style.maxHeight = null;
                    } else {
                        item.classList.add('active');
                        item.classList.remove('border-transparent');
                        item.classList.add('border-[#29B6D6]');
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute inset-0 bg-[#0F172A]"></div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#29B6D6]/10 blur-[120px] rounded-full opacity-60 translate-x-1/3 -translate-y-1/3"></div>

<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F97316]/10 blur-[100px] rounded-full opacity-40 -translate-x-1/4 translate-y-1/4"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] mask-image:radial-gradient(black,transparent)"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#0F172A] border-b border-white/5 shadow-lg shadow-black/20">
<div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="text-xl font-bold tracking-tight text-[#FBBF24]">Warmstart</span>
</a>

<div className="hidden md:flex items-center gap-10">

<div className="relative group h-20 flex items-center">
<button className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#29B6D6] transition-colors focus:outline-none">
                        Who We Help
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-[#29B6D6] transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
<div className="bg-[#1E293B] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1.5">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="w-8 h-8 rounded-lg bg-[#29B6D6]/10 flex items-center justify-center text-[#29B6D6]"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                                Agencies
                            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="w-8 h-8 rounded-lg bg-[#F97316]/10 flex items-center justify-center text-[#F97316]"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span>
                                Founders
                            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="w-8 h-8 rounded-lg bg-[#FBBF24]/10 flex items-center justify-center text-[#FBBF24]"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg></span>
                                Sales Teams
                            </a>
</div>
</div>
</div>
<a className="text-sm font-medium text-white hover:text-[#29B6D6] transition-colors" href="#">About</a>
<a className="text-sm font-medium text-white hover:text-[#29B6D6] transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-8">

<button aria-label="Toggle Theme" className="text-slate-400 hover:text-[#FBBF24] transition-colors">
<svg className="lucide lucide-sun" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41-1.41"></path><path d="m19.07 4.93-1.41-1.41"></path></svg>
</button>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-sm font-medium text-white hover:text-[#29B6D6] transition-colors" href="#">Sign In</a>
<a className="px-5 py-2.5 text-sm font-medium text-[#29B6D6] bg-transparent border border-[#29B6D6] rounded-full hover:bg-[#29B6D6]/10 transition-all" href="#">
                        Start Free Trial
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative z-10 pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border-b border-white/5">

<div className="flex-1 text-center lg:text-left space-y-8 lg:max-w-xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29B6D6]/20 bg-[#29B6D6]/5 text-[#29B6D6] text-xs font-medium backdrop-blur-sm mx-auto lg:mx-0">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29B6D6] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#29B6D6]"></span>
</span>
                New: LinkedIn Deep Sync Integration
            </div>

<div className="space-y-4">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
                    Your network already has your next <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29B6D6] via-[#FBBF24] to-white">
                        6 clients.
                    </span>
</h1>
<h2 className="text-xl md:text-2xl font-medium text-slate-300 tracking-tight">
                    Find and close them before your competitors do.
                </h2>
</div>

<p className="text-base text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                Stop chasing cold leads. Warmstart monitors your relationships across email and social: spotting job changes, new posts, and perfect moments to reconnect, then delivers personalized drafts to your inbox each morning.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-[0_0_20px_rgba(41,182,214,0.25)] bg-[#29B6D6] hover:bg-[#0891B2] text-white flex items-center justify-center gap-2 group border border-transparent hover:scale-[1.02]">
                    Start Free for 14 Days
                    <svg className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-slate-300 rounded-full font-medium text-sm hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2">
<svg className="lucide lucide-calendar" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Book a Demo Call
                </button>
</div>
<div className="pt-6 flex items-center gap-4 justify-center lg:justify-start opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Trusted by founders at</span>
<div className="flex gap-4">
<svg className="h-4 w-auto text-white" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z" opacity="0.8"></path></svg>
<svg className="h-4 w-auto text-white" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" opacity="0.8" r="8"></circle></svg>
</div>
</div>
</div>

<div className="flex-1 w-full perspective-container relative pt-10 lg:pt-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] glow-warm blur-[80px] -z-10 opacity-50"></div>
<div className="tilt-card w-full max-w-2xl mx-auto glass-panel rounded-xl overflow-hidden shadow-2xl relative bg-[#0F172A]">

<div className="h-10 border-b border-white/5 bg-white/[0.03] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
</div>
<div className="ml-auto flex items-center gap-2 text-[10px] text-slate-500">
<svg className="lucide lucide-shield-check" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        AI Draft Mode
                    </div>
</div>

<div className="flex h-[450px]">

<div className="w-16 border-r border-white/5 bg-white/[0.02] flex flex-col items-center py-4 gap-4">
<div className="w-8 h-8 rounded-lg bg-[#29B6D6]/10 text-[#29B6D6] flex items-center justify-center border border-[#29B6D6]/20">
<svg className="lucide lucide-pen-tool" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div className="w-8 h-8 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 flex items-center justify-center transition-colors cursor-pointer">
<svg className="lucide lucide-inbox" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<div className="w-8 h-8 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 flex items-center justify-center transition-colors cursor-pointer">
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>

<div className="flex-1 p-6 md:p-8 flex flex-col relative">

<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 pb-3 border-b border-white/5">
<span className="text-xs text-slate-500 w-12 font-medium">To:</span>
<div className="flex items-center gap-2 bg-slate-800/50 px-2 py-1 rounded border border-white/5">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400"></div>
<span className="text-xs text-slate-200">Sarah Chen</span>
<span className="text-[10px] text-slate-500">(VP Growth @ Acme)</span>
</div>
</div>
<div className="flex items-center gap-3 pb-3 border-b border-white/5">
<span className="text-xs text-slate-500 w-12 font-medium">Subject:</span>
<span className="text-xs text-white">Re: Scaling the partner program in Q4</span>
</div>
</div>

<div className="flex-1 space-y-4 font-light">
<p className="text-sm text-slate-300 leading-relaxed">
                                Hi Sarah,
                            </p>
<p className="text-sm text-slate-300 leading-relaxed">
                                Great seeing you at the SaaS Summit last week. <span className="bg-[#F97316]/10 text-[#F97316] px-1 py-0.5 rounded border-b border-[#F97316]/20">Your point about activating dormant partners</span> really resonated with our current strategy.
                            </p>
<p className="text-sm text-slate-300 leading-relaxed">
                                I mentioned I'd share how we helped TechFlow increase their referral revenue by 40% in 30 days using existing relationships.
                            </p>
<div className="h-20 w-full rounded-lg border border-dashed border-white/10 bg-white/[0.02] flex items-center justify-center gap-2 text-xs text-slate-500">
<svg className="lucide lucide-file-text" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
                                TechFlow_Case_Study.pdf attached
                            </div>
</div>

<div className="absolute bottom-6 right-6 w-64 bg-[#1E293B] border border-[#29B6D6]/20 rounded-xl p-4 shadow-2xl animate-bounce-slow" style={{animationDuration: '3s', animationIterationCount: 'infinite'}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-sparkles text-[#29B6D6]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<span className="text-[10px] uppercase font-bold text-[#29B6D6] tracking-wider">Relationship Insight</span>
</div>
<p className="text-[11px] text-slate-300 leading-tight">
                                You and Sarah have <span className="text-white font-medium">3 mutual connections</span> who recently closed deals with her. Mentioning <span className="text-white font-medium">Jason Lemkin</span> might increase reply rate by 24%.
                            </p>
<div className="mt-3 flex gap-2">
<button className="flex-1 bg-[#29B6D6]/10 hover:bg-[#29B6D6]/20 text-[#29B6D6] text-[10px] py-1.5 rounded transition-colors font-medium border border-[#29B6D6]/20">Apply Edit</button>
<button className="px-2 text-slate-500 hover:text-white transition-colors">
<svg className="lucide lucide-x" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-[#F8FAFC] text-slate-900 overflow-hidden">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#29B6D6]/20 rounded-full blur-[100px] animate-pulse"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#F97316]/20 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="relative max-w-7xl mx-auto px-6">

<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Go from Feast-or-Famine to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29B6D6] to-[#0891B2]">Predictable Pipeline</span>
</h2>
<p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                    Replace the anxiety of cold outreach with the confidence of warm introductions. 
                    See the difference relationship intelligence makes in your weekly numbers.
                </p>
</div>

<div className="max-w-6xl mx-auto relative reveal-on-scroll delay-100">
<div className="grid md:grid-cols-[1fr,auto,1fr] gap-8 items-center">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
<div className="relative bg-white rounded-xl border border-slate-200 shadow-sm p-6 overflow-hidden h-[420px] flex flex-col">

<div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
<div className="flex items-center gap-2 text-slate-400">
<svg className="lucide lucide-mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span className="text-sm font-medium">Cold Outreach</span>
</div>
<span className="bg-slate-100 text-slate-500 text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wider">Ineffective</span>
</div>

<div className="space-y-3 flex-1 opacity-60 grayscale-[0.8]">

<div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-24 bg-slate-200 rounded"></div>
<div className="h-2 w-full bg-slate-100 rounded"></div>
</div>
<span className="text-[10px] text-slate-400 mt-1">Sent 2d</span>
</div>

<div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-32 bg-slate-200 rounded"></div>
<div className="h-2 w-3/4 bg-slate-100 rounded"></div>
</div>
<span className="text-[10px] text-slate-400 mt-1">Sent 5d</span>
</div>

<div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-20 bg-slate-200 rounded"></div>
<div className="h-2 w-5/6 bg-slate-100 rounded"></div>
</div>
<span className="text-[10px] text-slate-400 mt-1">Sent 7d</span>
</div>
</div>

<div className="mt-auto pt-6 text-center">
<p className="text-3xl font-semibold text-slate-300 tracking-tight">0.8%</p>
<p className="text-xs text-slate-400 font-medium mt-1">Average Reply Rate</p>
</div>
</div>
</div>

<div className="flex justify-center md:rotate-0 rotate-90 my-[-20px] md:my-0 z-10 relative">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-400">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="relative group perspective-container">
<div className="absolute -inset-1 bg-gradient-to-r from-[#29B6D6]/40 to-[#F97316]/40 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
<div className="relative bg-white rounded-xl border border-[#29B6D6]/20 shadow-[0_20px_50px_-12px_rgba(41,182,214,0.1)] p-6 overflow-hidden h-[420px] flex flex-col tilt-card">

<div className="flex items-center justify-between mb-8 border-b border-[#29B6D6]/10 pb-4">
<div className="flex items-center gap-2 text-slate-800">
<div className="p-1 rounded bg-[#29B6D6]/10 text-[#29B6D6]">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<span className="text-sm font-semibold">Warm Conversations</span>
</div>
<span className="bg-gradient-to-r from-[#29B6D6]/10 to-[#F97316]/10 text-[#0891B2] text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wider border border-[#29B6D6]/20">High Value</span>
</div>

<div className="space-y-4 flex-1">

<div className="p-4 rounded-xl bg-gradient-to-br from-white to-[#29B6D6]/5 border border-[#29B6D6]/20 shadow-sm relative group/item hover:-translate-y-1 transition-transform cursor-pointer">
<div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#29B6D6]"></div>
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#29B6D6] to-[#F97316] p-0.5">
<div className="w-full h-full rounded-full bg-white border-2 border-transparent"></div>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-slate-800">David from Stripe</p>
<p className="text-xs text-slate-500 mt-1 line-clamp-1">"Thanks for the intro! Let's chat..."</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-700 font-medium">Interested</span>
<span className="text-[10px] text-slate-400">1h ago</span>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm relative group/item hover:-translate-y-1 transition-transform cursor-pointer">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0891B2] to-teal-400 p-0.5">
<div className="w-full h-full rounded-full bg-white border-2 border-transparent"></div>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-slate-800">Sarah Chen</p>
<div className="flex items-center gap-2 mt-1">
<svg className="lucide lucide-calendar-check text-[#F97316]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
<p className="text-xs text-[#F97316] font-medium">Demo Booked: tomorrow</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-auto pt-6 text-center relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#29B6D6]/30 to-transparent"></div>
<p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#29B6D6] to-[#0891B2] tracking-tight">32.4%</p>
<p className="text-xs text-[#0891B2]/60 font-medium mt-1">Reply Rate</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-[#0F172A] border-t border-white/5 overflow-hidden">

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#29B6D6]/20 to-transparent -translate-y-4 hidden md:block"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-20 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Your Network Is Golden. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29B6D6] to-[#FBBF24]">Stop Leaving Money On The Table.</span>
</h2>
<p className="text-base text-slate-400 font-light max-w-2xl mx-auto">
                    Connect your existing tools to unlock the hidden value in your professional relationships instantly.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-2xl bg-[#1E293B] border border-white/10 hover:border-[#29B6D6]/40 transition-all duration-300 flex flex-col items-center text-center reveal-on-scroll delay-100">

<div className="hidden md:block absolute top-[28%] -left-[17px] w-8 h-[1px] bg-gradient-to-r from-transparent to-[#29B6D6]/30"></div>
<div className="hidden md:block absolute top-[28%] -right-[17px] w-8 h-[1px] bg-gradient-to-l from-transparent to-[#29B6D6]/30"></div>

<div className="w-16 h-16 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,119,181,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(0,119,181,0.3)] transition-all duration-300 relative z-20">
<svg className="lucide lucide-linkedin text-[#0077b5]" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>

<h3 className="text-lg font-semibold text-white mb-3">LinkedIn Sync</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Monitors job changes, promotions, and funding rounds in real-time to surface perfect outreach triggers.
                    </p>

<div className="absolute inset-0 bg-gradient-to-b from-[#29B6D6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
</div>

<div className="group relative p-8 rounded-2xl bg-[#1E293B] border border-white/10 hover:border-[#29B6D6]/40 transition-all duration-300 flex flex-col items-center text-center reveal-on-scroll delay-200">

<div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(244,63,94,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(244,63,94,0.3)] transition-all duration-300 relative z-20">
<svg className="lucide lucide-mail text-rose-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>

<h3 className="text-lg font-semibold text-white mb-3">Inbox Intelligence</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Surfaces dormant threads and identifies the perfect follow-up moments based on past interaction frequency.
                    </p>

<div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
</div>

<div className="group relative p-8 rounded-2xl bg-[#1E293B] border border-white/10 hover:border-[#29B6D6]/40 transition-all duration-300 flex flex-col items-center text-center reveal-on-scroll delay-300">

<div className="hidden md:block absolute top-[28%] -left-[17px] w-8 h-[1px] bg-gradient-to-r from-transparent to-[#29B6D6]/30"></div>
<div className="hidden md:block absolute top-[28%] -right-[17px] w-8 h-[1px] bg-gradient-to-l from-transparent to-[#29B6D6]/30"></div>

<div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-300 relative z-20">
<svg className="lucide lucide-file-spreadsheet text-emerald-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>

<h3 className="text-lg font-semibold text-white mb-3">Instant Enrichment</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Transforms raw CSV contact lists into enriched opportunities with current titles, locations, and mutuals.
                    </p>

<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-[#F8FAFC] overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent opacity-70"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center max-w-2xl mx-auto mb-20 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">How It Works</h2>
<p className="text-lg text-slate-500 font-light">
                    Three simple steps to transform your agency's outreach
                </p>
</div>

<div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">

<div className="hidden md:block absolute top-[3rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<div className="hidden md:block absolute top-[3rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#29B6D6]/40 to-transparent animate-pulse-line" style={{width: '100%', maskImage: 'linear-gradient(to right, transparent, black 50%, transparent)'}}></div>

<div className="relative flex flex-col items-center text-center group reveal-on-scroll delay-100">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-4 border-[#F8FAFC]">01</div>
<svg className="lucide lucide-network text-slate-700" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Connect &amp; Analyze</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs font-light">
                        Sync your Gmail and LinkedIn. We analyze your history to uncover warm opportunities you didn't know you had.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center group reveal-on-scroll delay-200">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-4 border-[#F8FAFC]">02</div>
<svg className="lucide lucide-wand-2 text-[#29B6D6]" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Craft in Your Voice</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs font-light">
                        Our AI drafts hyper-personalized messages that sound exactly like you, not a robot, boosting reply rates instantly.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center group reveal-on-scroll delay-300">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-4 border-[#F8FAFC]">03</div>
<svg className="lucide lucide-send text-[#F97316]" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Send &amp; Optimize</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs font-light">
                        Launch campaigns directly and track what's working with real-time analytics on open rates and positive replies.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-[#0F172A] overflow-hidden">

<div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#29B6D6]/10 rounded-full blur-[100px] animate-pulse opacity-30"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FBBF24]/10 rounded-full blur-[100px] opacity-20"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-20 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Trusted by deal-makers
                </h2>
<p className="text-base text-slate-400 font-light max-w-2xl mx-auto">
                    See how top performers are using relationship intelligence to close more deals.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel bg-[#1E293B] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-[#29B6D6]/30 transition-all duration-500 reveal-on-scroll delay-100 flex flex-col h-full">

<div className="absolute inset-0 bg-gradient-to-br from-[#29B6D6]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="absolute -top-4 -left-2 text-8xl font-serif text-white/[0.03] select-none pointer-events-none group-hover:text-[#29B6D6]/10 transition-colors">“</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex-1 mb-6">
<div className="flex gap-1 mb-4">
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-slate-300 font-light leading-relaxed mb-6">"I thought my network was tapped out until I ran the sync. Warmstart surfaced a college friend who is now a VP at a target account. Landed a <span className="text-white font-medium border-b border-[#29B6D6]/50">$50K project from one reconnection</span>."</p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="relative group-hover:scale-105 transition-transform duration-300">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#29B6D6]/20 group-hover:border-[#29B6D6]/50 shadow-[0_0_15px_rgba(41,182,214,0.2)]">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=150&amp;h=150"/>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white">Alex Rivera</h4>
<p className="text-xs text-slate-500">Founder, Arc Digital</p>
</div>
</div>
</div>
</div>

<div className="glass-panel bg-[#1E293B] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-[#F97316]/30 transition-all duration-500 reveal-on-scroll delay-200 flex flex-col h-full">

<div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="absolute -top-4 -left-2 text-8xl font-serif text-white/[0.03] select-none pointer-events-none group-hover:text-[#F97316]/10 transition-colors">“</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex-1 mb-6">
<div className="flex gap-1 mb-4">
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-slate-300 font-light leading-relaxed mb-6">"Cold email is dead. We switched to network-led outreach and <span className="text-white font-medium border-b border-[#F97316]/50">cut our BD time in half while doubling conversion</span>. The inbox intelligence is scary good."</p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="relative group-hover:scale-105 transition-transform duration-300">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F97316]/20 group-hover:border-[#F97316]/50 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&amp;w=150&amp;h=150"/>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white">Elena Scott</h4>
<p className="text-xs text-slate-500">VP Sales, Motion</p>
</div>
</div>
</div>
</div>

<div className="glass-panel bg-[#1E293B] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-[#FBBF24]/30 transition-all duration-500 reveal-on-scroll delay-300 flex flex-col h-full">

<div className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="absolute -top-4 -left-2 text-8xl font-serif text-white/[0.03] select-none pointer-events-none group-hover:text-[#FBBF24]/10 transition-colors">“</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex-1 mb-6">
<div className="flex gap-1 mb-4">
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 text-[#F97316] fill-[#F97316]" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-slate-300 font-light leading-relaxed mb-6">"Finally, a tool that understands relationships. It's not just about email; it's about timing and context. We now have a <span className="text-white font-medium border-b border-[#FBBF24]/50">steady flow of warm conversations</span>."</p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="relative group-hover:scale-105 transition-transform duration-300">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FBBF24]/20 group-hover:border-[#FBBF24]/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&amp;w=150&amp;h=150"/>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white">James Wu</h4>
<p className="text-xs text-slate-500">Partner, VentureScale</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-[#F8FAFC]">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0F172A] mb-6">
                    Risk-Free, Results-Driven Pricing
                </h2>
<p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                    We succeed when you succeed. Start risk-free and only pay full price once you're seeing results.
                </p>
</div>

<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-[#29B6D6] flex flex-col hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-100">

<div className="absolute top-0 right-0 left-0 flex justify-center -mt-3.5">
<span className="bg-[#F97316] text-white text-[10px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full shadow-sm">Most Popular</span>
</div>

<div className="mb-6">
<h3 className="text-xl font-semibold text-[#0F172A] mb-2">Starter</h3>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-[#29B6D6] tracking-tight">$99</span>
<span className="text-sm text-slate-400 font-medium">/month</span>
</div>
<p className="text-xs text-slate-500 font-medium mt-2">For your first 90 days</p>
</div>
<div className="w-full h-px bg-slate-100 mb-6"></div>

<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Full access to all platform features</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">AI-powered message drafting in your voice</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Gmail and LinkedIn integration</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Up to 500 contacts analyzed</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">10 personalized outreach drafts per day</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Email support</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Full money-back guarantee</span>
</li>
</ul>

<button className="w-full py-3.5 bg-[#29B6D6] text-white rounded-lg font-medium text-sm hover:bg-[#0891B2] transition-colors shadow-lg shadow-[#29B6D6]/20">
                        Start Risk-Free Trial
                    </button>
</div>

<div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-200">

<div className="mb-6">
<h3 className="text-xl font-semibold text-[#0F172A] mb-2">Scale</h3>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-[#0F172A] tracking-tight">$349</span>
<span className="text-sm text-slate-400 font-medium">/seat per month</span>
</div>
<p className="text-xs text-slate-500 font-medium mt-2">After you're seeing results</p>
</div>
<div className="w-full h-px bg-slate-100 mb-6"></div>

<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light"><span className="font-medium text-slate-800">Everything in Starter, plus:</span></span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Unlimited contacts analyzed</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Unlimited outreach drafts</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">CSV import and enrichment</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Priority support</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Team collaboration features</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check text-[#29B6D6] shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600 font-light">Custom onboarding session</span>
</li>
</ul>

<button className="w-full py-3.5 bg-transparent border border-[#29B6D6] text-[#29B6D6] rounded-lg font-medium text-sm hover:bg-[#29B6D6]/5 transition-colors">
                        Get Started Risk-Free
                    </button>
</div>
</div>

<div className="text-center mt-8">
<p className="text-xs text-slate-400 font-medium">No long-term commitment. Cancel anytime.</p>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-[#0F172A] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Frequently Asked Questions
                </h2>
<p className="text-lg text-[#CBD5E1] font-light">
                    Everything you need to know about Warmstart and how it can transform your agency's growth.
                </p>
</div>

<div className="max-w-3xl mx-auto rounded-2xl bg-[#1E293B] border border-white/10 shadow-2xl divide-y divide-white/5 reveal-on-scroll delay-100 overflow-hidden">

<div className="accordion-item group border-l-2 border-transparent transition-all duration-300">
<button className="flex items-center justify-between w-full p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none">
<span className="text-white font-medium pr-8">How exactly does Warmstart find 'warm' opportunities in my network?</span>
<svg className="lucide lucide-chevron-down text-[#29B6D6] shrink-0 accordion-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content">
<div className="p-6 pt-0 text-[#CBD5E1] font-light leading-relaxed text-sm">
                            Warmstart analyzes your Gmail history and LinkedIn connections to identify high-response opportunities: job changes, funding rounds, content engagement, and dormant relationships ready for reactivation. We surface the perfect moment to reach out with specific context for why your message will resonate.
                        </div>
</div>
</div>

<div className="accordion-item group border-l-2 border-transparent transition-all duration-300">
<button className="flex items-center justify-between w-full p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none">
<span className="text-white font-medium pr-8">What are you doing with my email?</span>
<svg className="lucide lucide-chevron-down text-[#29B6D6] shrink-0 accordion-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content">
<div className="p-6 pt-0 text-[#CBD5E1] font-light leading-relaxed text-sm">
                            We analyze your email metadata and conversation history to understand your relationships and communication style. Your data stays yours—we never store full email contents, never train AI on your data, and never share information with third parties. Security and privacy are paramount.
                        </div>
</div>
</div>

<div className="accordion-item group border-l-2 border-transparent transition-all duration-300">
<button className="flex items-center justify-between w-full p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none">
<span className="text-white font-medium pr-8">I'm already swamped with client work. How much time will this take?</span>
<svg className="lucide lucide-chevron-down text-[#29B6D6] shrink-0 accordion-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content">
<div className="p-6 pt-0 text-[#CBD5E1] font-light leading-relaxed text-sm">
                            Just 15 minutes a day. Warmstart does the heavy lifting—researching contacts, finding the right moment, and drafting personalized messages. You review, tweak if needed, and send. Most users accomplish in 15 minutes what used to take hours of manual research.
                        </div>
</div>
</div>

<div className="accordion-item group border-l-2 border-transparent transition-all duration-300">
<button className="flex items-center justify-between w-full p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none">
<span className="text-white font-medium pr-8">How is this different from other sales tools?</span>
<svg className="lucide lucide-chevron-down text-[#29B6D6] shrink-0 accordion-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content">
<div className="p-6 pt-0 text-[#CBD5E1] font-light leading-relaxed text-sm">
                            Traditional sales tools focus on cold outreach at scale. Warmstart focuses on warm outreach—people who already know you. We surface opportunities in your existing network and craft messages based on your actual relationship history, not generic templates.
                        </div>
</div>
</div>

<div className="accordion-item group border-l-2 border-transparent transition-all duration-300">
<button className="flex items-center justify-between w-full p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none">
<span className="text-white font-medium pr-8">Can I import my existing contact lists?</span>
<svg className="lucide lucide-chevron-down text-[#29B6D6] shrink-0 accordion-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content">
<div className="p-6 pt-0 text-[#CBD5E1] font-light leading-relaxed text-sm">
                            Yes! Upload any CSV and we'll enrich it with company intelligence, social signals, and personalized conversation starters. Transform static spreadsheets into actionable warm outreach opportunities.
                        </div>
</div>
</div>

<div className="accordion-item group border-l-2 border-transparent transition-all duration-300">
<button className="flex items-center justify-between w-full p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none">
<span className="text-white font-medium pr-8">How quickly will I see results?</span>
<svg className="lucide lucide-chevron-down text-[#29B6D6] shrink-0 accordion-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content">
<div className="p-6 pt-0 text-[#CBD5E1] font-light leading-relaxed text-sm">
                            Most customers see their first responses within the first week. Meaningful pipeline impact typically happens within 30-60 days. Our $99 trial period gives you 90 days to see real ROI before moving to full pricing—and we back it with a money-back guarantee.
                        </div>
</div>
</div>

<div className="accordion-item group border-l-2 border-transparent transition-all duration-300">
<button className="flex items-center justify-between w-full p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none">
<span className="text-white font-medium pr-8">What happens after the trial?</span>
<svg className="lucide lucide-chevron-down text-[#29B6D6] shrink-0 accordion-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content">
<div className="p-6 pt-0 text-[#CBD5E1] font-light leading-relaxed text-sm">
                            After 90 days at $99/month, you move to our standard rate of $349/seat. By then, most customers have closed enough business to see clear positive ROI. If you're not seeing results, our money-back guarantee means you pay nothing.
                        </div>
</div>
</div>

<div className="accordion-item group border-l-2 border-transparent transition-all duration-300">
<button className="flex items-center justify-between w-full p-6 text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none">
<span className="text-white font-medium pr-8">How is this better than hiring a business development person?</span>
<svg className="lucide lucide-chevron-down text-[#29B6D6] shrink-0 accordion-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content">
<div className="p-6 pt-0 text-[#CBD5E1] font-light leading-relaxed text-sm">
                            A BD hire costs $60-100K+ per year, takes months to ramp up, and still needs tools and data. Warmstart gives you the research and outreach capabilities of a dedicated BD person for a fraction of the cost—and starts delivering opportunities in your first week.
                        </div>
</div>
</div>
</div>

<div className="text-center mt-12">
<p className="text-sm font-light text-white">Still have questions? <a className="text-[#29B6D6] hover:text-[#0891B2] transition-colors font-medium" href="#">Contact Us</a></p>
</div>
</div>
</section>

<footer className="relative z-10 bg-[#29B6D6] pt-24 pb-12 text-[#0F172A]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div>
<h3 className="font-semibold text-[#0F172A] text-lg mb-6 tracking-tight">Who We Help</h3>
<ul className="space-y-4">
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Digital Agencies</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Business Professionals</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Company Founders</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Real Estate Agents</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Wealth Managers</a></li>
</ul>
</div>

<div>
<h3 className="font-semibold text-[#0F172A] text-lg mb-6 tracking-tight">Company</h3>
<ul className="space-y-4">
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">About Us</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Pricing</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Contact Us</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Got an Offer Code?</a></li>
</ul>
</div>

<div>
<h3 className="font-semibold text-[#0F172A] text-lg mb-6 tracking-tight">Social</h3>
<ul className="space-y-4">
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">LinkedIn</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Twitter / X</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Instagram</a></li>
</ul>
</div>

<div>
<h3 className="font-semibold text-[#0F172A] text-lg mb-6 tracking-tight">Legal</h3>
<ul className="space-y-4">
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Terms &amp; Conditions</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Acceptable Use</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Cookies</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Privacy</a></li>
<li><a className="text-[#1E293B] hover:text-[#0F172A] hover:underline transition-all font-medium" href="#">Spam</a></li>
</ul>
</div>
</div>

<div className="border-t border-[#1E293B]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#1E293B]">
<div className="font-medium text-sm md:text-base">©2023, 2024, 2025 Brainfilter LLC</div>
<div className="font-medium text-sm md:text-base opacity-80">All rights reserved.</div>
</div>
</div>
</footer>


    </>
  );
}
