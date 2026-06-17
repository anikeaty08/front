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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) translateX(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
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
      

<div className="fixed top-[-20%] left-[-10%] w-3/4 aspect-square bg-[#8A2BE2]/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-3/4 aspect-square bg-[#00F5FF]/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen"></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="particle w-1 h-1 top-1/4 left-1/4" style={{animationDelay: '0s'}}></div>
<div className="particle w-1.5 h-1.5 top-3/4 left-1/3 bg-[#FF007F]" style={{animationDelay: '2s'}}></div>
<div className="particle w-2 h-2 top-1/2 left-3/4 bg-[#8A2BE2]" style={{animationDelay: '4s'}}></div>
<div className="particle w-1 h-1 top-1/3 left-2/3" style={{animationDelay: '6s'}}></div>
<div className="particle w-1.5 h-1.5 top-2/3 left-1/5 bg-[#00F5FF]" style={{animationDelay: '8s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-[0_0_8px_rgba(0,245,255,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(138,43,226,0.8)] transition-all duration-300" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="eagleGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#00F5FF"></stop>
<stop offset="100%" stop-color="#8A2BE2"></stop>
</lineargradient>
</defs>

<path className="animate-[pulse_4s_ease-in-out_infinite]" d="M15 55 L45 15 L95 25 L85 55 L95 85 L55 95 Z" stroke="url(#eagleGrad)" strokeLinejoin="round" strokeWidth="4"></path>

<path d="M45 15 L55 45 L95 25" stroke="url(#eagleGrad)" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M55 45 L85 55 L95 85" stroke="url(#eagleGrad)" strokeLinejoin="round" strokeWidth="2.5"></path>

<circle className="animate-pulse shadow-[0_0_10px_#FF007F]" cx="68" cy="40" fill="#FF007F" r="4"></circle>

<path d="M25 55 L35 55 L40 45" stroke="#00F5FF" stroke-dasharray="3 3" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-[#00F5FF] transition-colors">Automate the Impossible</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-slate-400">
<a className="hover:text-[#00F5FF] hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)] transition-all" href="#services">Services</a>
<a className="hover:text-[#8A2BE2] hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.8)] transition-all" href="#why-us">Why Us</a>
<a className="hover:text-[#FF007F] hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.8)] transition-all" href="#testimonials">Validation</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium rounded-full bg-gradient-to-r from-[#00F5FF]/10 to-[#8A2BE2]/10 text-white border border-[#00F5FF]/30 hover:border-[#00F5FF] transition-all duration-300 neon-box-blue-hover" href="#contact">
                Connect Node
            </a>

<button className="md:hidden text-slate-300 hover:text-[#00F5FF]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden z-10 perspective-1000">
<div className="absolute inset-0 bg-grid opacity-30 animate-grid"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/60 to-[#0A0A0F]"></div>

<div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F5FF]/50 to-transparent opacity-30 transform -rotate-12 translate-y-20 animate-pulse"></div>
<div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF007F]/30 to-transparent opacity-30 transform rotate-6 translate-y-10 animate-[pulse_3s_ease-in-out_infinite]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
<div className="max-w-2xl reveal-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00F5FF]/30 bg-[#00F5FF]/5 text-[#00F5FF] text-[10px] uppercase tracking-widest font-medium mb-6 glass">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00F5FF]"></span>
</span>
                    System Online V2.0
                </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
                    Automate the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#8A2BE2] to-[#FF007F] animate-pulse">Impossible.</span>
</h1>
<p className="text-sm md:text-base text-slate-400 mb-10 leading-relaxed max-w-xl">
                    We build intelligent AI agents, smart automation systems, and scalable digital platforms that transform businesses into unstoppable machines.
                </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="inline-flex items-center justify-center px-8 py-4 text-xs font-medium tracking-wide uppercase rounded-full bg-[#00F5FF] text-[#0A0A0F] hover:bg-white transition-all btn-pulse-blue shadow-[0_0_20px_rgba(0,245,255,0.4)]" href="#contact">
                        Get Started
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-xs font-medium tracking-wide uppercase rounded-full border border-[#8A2BE2]/50 text-white hover:bg-[#8A2BE2]/10 hover:border-[#8A2BE2] transition-all shadow-[0_0_15px_rgba(138,43,226,0)_inset] hover:shadow-[0_0_15px_rgba(138,43,226,0.3)_inset]" href="#contact">
                        Book Free Strategy Call
                    </a>
</div>
</div>

<div className="relative hidden lg:flex h-[600px] items-center justify-center reveal-right perspective-1000">
<div className="relative w-full h-full flex items-center justify-center animate-float preserve-3d">

<div className="absolute w-[90%] aspect-square rounded-full border border-[#00F5FF]/20 border-r-[#00F5FF]/80 shadow-[0_0_30px_rgba(0,245,255,0.15)] animate-[spin_12s_linear_infinite]" style={{transform: 'rotateX(70deg) rotateY(20deg)'}}></div>
<div className="absolute w-[75%] aspect-square rounded-full border border-[#8A2BE2]/20 border-t-[#8A2BE2]/80 shadow-[0_0_30px_rgba(138,43,226,0.15)] animate-[spin_8s_linear_infinite_reverse]" style={{transform: 'rotateX(60deg) rotateY(-20deg)'}}></div>
<div className="absolute w-[60%] aspect-square rounded-full border border-[#FF007F]/20 border-l-[#FF007F]/60 animate-[spin_15s_linear_infinite]" style={{transform: 'rotateX(80deg) rotateZ(45deg)'}}></div>

<div className="relative w-48 h-64 bg-gradient-to-b from-[#1a1a24] to-[#0A0A0F] rounded-[3rem] border border-[#00F5FF]/40 shadow-[0_0_50px_rgba(0,245,255,0.2)_inset,0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-10 flex flex-col items-center group">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50"></div>

<div className="w-32 h-32 mt-6 rounded-full border border-[#8A2BE2]/50 relative flex items-center justify-center bg-[#0A0A0F]/50 backdrop-blur-md shadow-[0_0_20px_rgba(138,43,226,0.3)_inset]">
<div className="w-16 h-16 rounded-full bg-[#00F5FF]/20 border border-[#00F5FF] flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_20px_#00F5FF]">
<div className="w-6 h-6 rounded-full bg-[#FF007F] shadow-[0_0_15px_#FF007F]"></div>
</div>

<div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
<div className="w-full h-1 bg-[#00F5FF] shadow-[0_0_10px_#00F5FF] opacity-70 animate-scan absolute top-1/2 -translate-y-1/2"></div>
</div>
</div>

<div className="absolute bottom-0 w-24 h-16 flex flex-col justify-end pb-3 gap-1.5 opacity-80">
<div className="w-full h-1.5 bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent shadow-[0_0_5px_#00F5FF]"></div>
<div className="w-full h-1 bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent shadow-[0_0_5px_#8A2BE2]"></div>
<div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF007F] to-transparent shadow-[0_0_5px_#FF007F]"></div>
</div>
</div>

<div className="absolute top-[20%] right-[10%] glass p-4 rounded-xl border border-[#00F5FF]/30 shadow-[0_0_20px_rgba(0,245,255,0.15)] transform translate-z-12 animate-float" style={{animationDelay: '1s'}}>
<div className="flex flex-col gap-2 w-32">
<div className="flex justify-between items-center text-[8px] text-[#00F5FF] tracking-widest font-mono">
<span>SYS.LOAD</span>
<span>100%</span>
</div>
<div className="w-full h-1 bg-[#00F5FF]/20 rounded-full overflow-hidden">
<div className="w-full h-full bg-[#00F5FF] shadow-[0_0_5px_#00F5FF]"></div>
</div>
</div>
</div>
<div className="absolute bottom-[25%] left-[5%] glass p-4 rounded-xl border border-[#FF007F]/30 shadow-[0_0_20px_rgba(255,0,127,0.15)] transform translate-z-12 animate-float" style={{animationDelay: '2.5s'}}>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF007F] text-2xl drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]" icon="solar:shield-check-linear"></iconify-icon>
<div>
<div className="text-[8px] text-slate-400 font-mono tracking-wider">DEFENSE_NET</div>
<div className="text-xs text-white font-medium">ACTIVE</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 perspective-1000" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Core Systems</h2>
<div className="w-16 h-1 bg-gradient-to-r from-[#00F5FF] to-[#8A2BE2] mx-auto rounded-full shadow-[0_0_10px_rgba(0,245,255,0.5)]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass p-8 rounded-2xl group transition-all duration-500 hover:-translate-y-3 hover:rotate-x-12 border border-white/5 hover:border-[#00F5FF]/50 hover:shadow-[0_15px_30px_rgba(0,245,255,0.15)] relative overflow-hidden preserve-3d reveal">
<div className="absolute top-0 right-0 w-40 h-40 bg-[#00F5FF]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 blur-2xl"></div>
<div className="h-14 w-14 rounded-xl bg-[#0A0A0F] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00F5FF]/50 transition-colors relative z-10">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#00F5FF] transition-colors drop-shadow-[0_0_8px_rgba(0,245,255,0)] group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.8)]" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight relative z-10">AI Agents</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">Autonomous AI systems that execute complex workflows, decision-making, and operations independently.</p>
</div>

<div className="glass p-8 rounded-2xl group transition-all duration-500 hover:-translate-y-3 hover:-rotate-x-12 border border-white/5 hover:border-[#8A2BE2]/50 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] relative overflow-hidden preserve-3d reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 w-40 h-40 bg-[#8A2BE2]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 blur-2xl"></div>
<div className="h-14 w-14 rounded-xl bg-[#0A0A0F] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#8A2BE2]/50 transition-colors relative z-10">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#8A2BE2] transition-colors drop-shadow-[0_0_8px_rgba(138,43,226,0)] group-hover:drop-shadow-[0_0_12px_rgba(138,43,226,0.8)]" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight relative z-10">AI Chatbots</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">Conversational AI designed to engage customers, automate support, and increase conversions 24/7.</p>
</div>

<div className="glass p-8 rounded-2xl group transition-all duration-500 hover:-translate-y-3 hover:rotate-x-12 border border-white/5 hover:border-[#FF007F]/50 hover:shadow-[0_15px_30px_rgba(255,0,127,0.15)] relative overflow-hidden preserve-3d reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 right-0 w-40 h-40 bg-[#FF007F]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 blur-2xl"></div>
<div className="h-14 w-14 rounded-xl bg-[#0A0A0F] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#FF007F]/50 transition-colors relative z-10">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#FF007F] transition-colors drop-shadow-[0_0_8px_rgba(255,0,127,0)] group-hover:drop-shadow-[0_0_12px_rgba(255,0,127,0.8)]" icon="solar:branching-paths-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight relative z-10">Workflow Automation</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">Smart automation pipelines that eliminate repetitive tasks and maximize efficiency.</p>
</div>

<div className="glass p-8 rounded-2xl group transition-all duration-500 hover:-translate-y-3 hover:-rotate-x-12 border border-white/5 hover:border-[#00F5FF]/50 hover:shadow-[0_15px_30px_rgba(0,245,255,0.15)] relative overflow-hidden preserve-3d md:col-span-2 lg:col-span-1 reveal">
<div className="absolute top-0 right-0 w-40 h-40 bg-[#00F5FF]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 blur-2xl"></div>
<div className="h-14 w-14 rounded-xl bg-[#0A0A0F] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00F5FF]/50 transition-colors relative z-10">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#00F5FF] transition-colors drop-shadow-[0_0_8px_rgba(0,245,255,0)] group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.8)]" icon="solar:laptop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight relative z-10">Website Development</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">High-performance, conversion-optimized websites with cutting-edge UI/UX.</p>
</div>

<div className="glass p-8 rounded-2xl group transition-all duration-500 hover:-translate-y-3 hover:rotate-x-12 border border-white/5 hover:border-[#8A2BE2]/50 hover:shadow-[0_15px_30px_rgba(138,43,226,0.15)] relative overflow-hidden preserve-3d md:col-span-2 lg:col-span-2 reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 w-40 h-40 bg-[#8A2BE2]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 blur-2xl"></div>
<div className="h-14 w-14 rounded-xl bg-[#0A0A0F] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#8A2BE2]/50 transition-colors relative z-10">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#8A2BE2] transition-colors drop-shadow-[0_0_8px_rgba(138,43,226,0)] group-hover:drop-shadow-[0_0_12px_rgba(138,43,226,0.8)]" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight relative z-10">App Development</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xl relative z-10">Scalable mobile and web applications engineered for performance and growth, seamlessly integrated with our AI infrastructure.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-y border-white/5 bg-[#0A0A0F]" id="why-us">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A2BE2]/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-left">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#8A2BE2]">Future.</span></h2>
<p className="text-sm md:text-base text-slate-400 mb-12 leading-relaxed">
                        We don't just build software; we engineer intelligent systems that adapt, learn, and scale. Our architecture is designed for extreme performance and absolute security.
                    </p>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00F5FF] before:via-[#8A2BE2] before:to-transparent before:opacity-20">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A0A0F] border border-[#00F5FF]/50 shadow-[0_0_15px_rgba(0,245,255,0.3)] z-10 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#00F5FF]" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] glass p-5 rounded-xl border border-white/5 group-hover:border-[#00F5FF]/30 transition-colors ml-4 md:ml-0 md:mr-4 md:text-right">
<h4 className="text-sm font-medium text-white mb-1 tracking-tight">Lightning-fast deployment</h4>
<p className="text-[11px] text-slate-400 leading-relaxed">Rapid integration into your existing infrastructure without downtime.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal group">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A0A0F] border border-[#8A2BE2]/50 shadow-[0_0_15px_rgba(138,43,226,0.3)] z-10 group-hover:scale-110 transition-transform md:order-1 md:ml-4">
<iconify-icon className="text-[#8A2BE2]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] glass p-5 rounded-xl border border-white/5 group-hover:border-[#8A2BE2]/30 transition-colors ml-4 md:ml-0 md:mr-0 md:text-left">
<h4 className="text-sm font-medium text-white mb-1 tracking-tight">Enterprise-grade security</h4>
<p className="text-[11px] text-slate-400 leading-relaxed">Military-grade encryption and access controls protecting your data.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A0A0F] border border-[#FF007F]/50 shadow-[0_0_15px_rgba(255,0,127,0.3)] z-10 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#FF007F]" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] glass p-5 rounded-xl border border-white/5 group-hover:border-[#FF007F]/30 transition-colors ml-4 md:ml-0 md:mr-4 md:text-right">
<h4 className="text-sm font-medium text-white mb-1 tracking-tight">Custom AI architecture</h4>
<p className="text-[11px] text-slate-400 leading-relaxed">Tailored models trained specifically on your proprietary business data.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal group">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A0A0F] border border-[#00F5FF]/50 shadow-[0_0_15px_rgba(0,245,255,0.3)] z-10 group-hover:scale-110 transition-transform md:order-1 md:ml-4">
<iconify-icon className="text-[#00F5FF]" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] glass p-5 rounded-xl border border-white/5 group-hover:border-[#00F5FF]/30 transition-colors ml-4 md:ml-0 md:mr-0 md:text-left">
<h4 className="text-sm font-medium text-white mb-1 tracking-tight">Cloud scalability</h4>
<p className="text-[11px] text-slate-400 leading-relaxed">Infinite horizontal scaling to match your operational demands.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A0A0F] border border-[#8A2BE2]/50 shadow-[0_0_15px_rgba(138,43,226,0.3)] z-10 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#8A2BE2]" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] glass p-5 rounded-xl border border-white/5 group-hover:border-[#8A2BE2]/30 transition-colors ml-4 md:ml-0 md:mr-4 md:text-right">
<h4 className="text-sm font-medium text-white mb-1 tracking-tight">Continuous optimization</h4>
<p className="text-[11px] text-slate-400 leading-relaxed">24/7 monitoring and model refinement to ensure peak performance.</p>
</div>
</div>
</div>
</div>
<div className="relative rounded-2xl glass p-1 overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(138,43,226,0.1)] reveal-right">
<div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/20 via-[#8A2BE2]/10 to-[#FF007F]/20"></div>

<div className="bg-[#0A0A0F] rounded-xl p-6 h-full relative z-10 font-mono text-[11px] text-slate-400 leading-loose">
<div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
<div className="w-3 h-3 rounded-full bg-[#FF007F]/80 shadow-[0_0_5px_#FF007F]"></div>
<div className="w-3 h-3 rounded-full bg-[#00F5FF]/80 shadow-[0_0_5px_#00F5FF]"></div>
<div className="w-3 h-3 rounded-full bg-[#8A2BE2]/80 shadow-[0_0_5px_#8A2BE2]"></div>
</div>
<p><span className="text-[#FF007F]">import</span> { CoreEngine } <span className="text-[#FF007F]">from</span> '@automate/ai';</p>
<p className="mt-2"><span className="text-[#00F5FF]">const</span> initializeSystem <span className="text-[#FF007F]">=</span> <span className="text-[#00F5FF]">async</span> () =&gt; {</p>
<p className="ml-4"><span className="text-[#00F5FF]">const</span> nexus = <span className="text-[#FF007F]">new</span> CoreEngine({</p>
<p className="ml-8">protocol: <span className="text-[#8A2BE2]">'autonomous'</span>,</p>
<p className="ml-8">scale: <span className="text-[#8A2BE2]">'infinite'</span>,</p>
<p className="ml-8">security: <span className="text-[#00F5FF]">true</span></p>
<p className="ml-4">});</p>
<p className="ml-4 mt-2"><span className="text-[#00F5FF]">await</span> nexus.<span className="text-[#FF007F]">deploy</span>();</p>
<p className="ml-4"><span className="text-slate-500">console</span>.<span className="text-[#FF007F]">log</span>(<span className="text-[#8A2BE2]">'System operational. Limits disabled.'</span>);</p>
<p>}</p>
<p className="mt-4 animate-pulse text-[#00F5FF]">_</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 overflow-hidden" id="testimonials">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center reveal">Validation Log</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass p-8 rounded-2xl border border-white/5 relative group hover:border-[#8A2BE2]/50 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)] transition-all duration-500 reveal-left">
<iconify-icon className="text-5xl text-white/5 absolute top-6 right-6 group-hover:text-[#8A2BE2]/10 transition-colors" icon="solar:quote-left-linear"></iconify-icon>
<div className="flex text-[#00F5FF] mb-6 text-base gap-1 drop-shadow-[0_0_5px_rgba(0,245,255,0.8)]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8 font-light">"Integrating their autonomous agents reduced our operational overhead by 60% within the first month. The system is flawless and the transition was invisible."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#0A0A0F] border border-[#8A2BE2]/40 flex items-center justify-center text-sm font-medium text-[#8A2BE2] shadow-[0_0_15px_rgba(138,43,226,0.2)]">
                            JD
                        </div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Jared Dunn</div>
<div className="text-xs text-[#00F5FF] font-mono tracking-wider mt-1">CTO, Nexus Corp</div>
</div>
</div>
</div>
<div className="glass p-8 rounded-2xl border border-white/5 relative group hover:border-[#FF007F]/50 hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] transition-all duration-500 reveal-right">
<iconify-icon className="text-5xl text-white/5 absolute top-6 right-6 group-hover:text-[#FF007F]/10 transition-colors" icon="solar:quote-left-linear"></iconify-icon>
<div className="flex text-[#00F5FF] mb-6 text-base gap-1 drop-shadow-[0_0_5px_rgba(0,245,255,0.8)]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8 font-light">"The custom chatbot they deployed doesn't just answer queries; it closes sales. It's like having our best performing agent working 24/7."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#0A0A0F] border border-[#FF007F]/40 flex items-center justify-center text-sm font-medium text-[#FF007F] shadow-[0_0_15px_rgba(255,0,127,0.2)]">
                            SH
                        </div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Sarah Hendricks</div>
<div className="text-xs text-[#00F5FF] font-mono tracking-wider mt-1">VP Operations, Velocity</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="contact">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 reveal">
<div className="glass rounded-3xl p-8 md:p-14 border border-white/10 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-[#00F5FF]/10 to-transparent blur-xl"></div>
<div className="relative z-10 text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Let's Build the Future Together</h2>
<p className="text-sm text-slate-400 font-light">Initialize a secure channel with our engineering team.</p>
</div>
<form className="relative z-10 space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2 group">
<label className="text-[10px] font-mono uppercase tracking-widest text-[#00F5FF] ml-1">Entity Name</label>
<input className="w-full bg-[#0A0A0F]/80 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00F5FF] focus:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all glass" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2 group">
<label className="text-[10px] font-mono uppercase tracking-widest text-[#8A2BE2] ml-1">Comms Uplink</label>
<input className="w-full bg-[#0A0A0F]/80 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#8A2BE2] focus:shadow-[0_0_20px_rgba(138,43,226,0.2)] transition-all glass" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-mono uppercase tracking-widest text-[#FF007F] ml-1">Primary Directive</label>
<select className="w-full bg-[#0A0A0F]/80 border border-white/10 rounded-xl px-5 py-4 text-sm text-slate-400 focus:outline-none focus:border-[#FF007F] focus:shadow-[0_0_20px_rgba(255,0,127,0.2)] transition-all appearance-none cursor-pointer glass">
<option value="">Select Architecture Required...</option>
<option value="agents">Deploy Autonomous AI Agents</option>
<option value="bots">Implement Conversational AI</option>
<option value="workflow">Smart Workflow Automation</option>
<option value="dev">Scalable App/Web Development</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 ml-1">Transmission Data</label>
<textarea className="w-full bg-[#0A0A0F]/80 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-white/30 transition-all resize-none glass" placeholder="Detail your operational bottlenecks..." rows="4"></textarea>
</div>
<button className="w-full py-5 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#8A2BE2] text-[#0A0A0F] text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-all btn-pulse-blue shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-3 mt-4" type="button">
                        Transmit Request
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0A0A0F] relative z-10 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00F5FF] via-[#8A2BE2] to-[#FF007F] opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 py-16 relative">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start">
<div className="flex items-center gap-3 mb-3">
<div className="w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-[0_0_5px_rgba(0,245,255,0.8)]" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M15 55 L45 15 L95 25 L85 55 L95 85 L55 95 Z" stroke="#00F5FF" strokeLinejoin="round" strokeWidth="4"></path>
<path d="M45 15 L55 45 L95 25" stroke="#8A2BE2" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M55 45 L85 55 L95 85" stroke="#8A2BE2" strokeLinejoin="round" strokeWidth="2.5"></path>
<circle cx="68" cy="40" fill="#FF007F" r="4"></circle>
</svg>
</div>
<span className="text-xl font-medium tracking-tight text-white">Automate the Impossible</span>
</div>
<p className="text-xs text-slate-500 font-mono tracking-widest uppercase">Next-Generation AI Automation</p>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#00F5FF] hover:border-[#00F5FF]/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#8A2BE2] hover:border-[#8A2BE2]/50 hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:code-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#FF007F] hover:border-[#FF007F]/50 hover:shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 text-center text-[10px] text-slate-600 font-mono uppercase tracking-widest border-t border-white/5 pt-8">
                © 2024 Automate the Impossible. All systems operational.
            </div>
</div>
</footer>



    </>
  );
}
