import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
}
});
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
}
});
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`
};
}
});
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
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



      // Scroll Reveal Logic
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach((elem) => {
        observer.observe(elem);
      });

      // Keyboard Automation Simulation (CMD + K)
      document.addEventListener('DOMContentLoaded', () => {
        const cmdKey = document.querySelectorAll('.key-cmd');
        const kKey = document.querySelector('.key-k');
        const indicator = document.getElementById('actionIndicator');

        const simulateTyping = () => {
          // Press CMD
          setTimeout(() => {
            cmdKey.forEach(k => k.classList.add('key-active'));
          }, 1000);
          
          // Press K
          setTimeout(() => {
            if(kKey) kKey.classList.add('key-active');
          }, 1150);
          
          // Release and show Toast
          setTimeout(() => {
            cmdKey.forEach(k => k.classList.remove('key-active'));
            if(kKey) kKey.classList.remove('key-active');
            
            if(indicator) {
              indicator.style.opacity = '1';
              indicator.style.transform = 'translate(-50%, -10px)';
            }
          }, 1350);
          
          // Hide Toast
          setTimeout(() => {
            if(indicator) {
              indicator.style.opacity = '0';
              indicator.style.transform = 'translate(-50%, 0)';
            }
          }, 4000);
        };

        // Loop the simulation
        setInterval(simulateTyping, 7000);
        simulateTyping();
      });

      // Simple Parallax for Timeline Cards
      if (window.innerWidth > 1024) {
        window.addEventListener('scroll', () => {
          const scrolled = window.scrollY;
          document.querySelectorAll('[data-parallax-base]').forEach(el => {
            const base = parseFloat(el.getAttribute('data-parallax-base'));
            const intensity = parseFloat(el.getAttribute('data-parallax-intensity'));
            
            if(!isNaN(base) && !isNaN(intensity)) {
              // Calculate offset relative to viewport
              const rect = el.getBoundingClientRect();
              const viewportOffset = (window.innerHeight - rect.top) * intensity;
              const finalOffset = base + viewportOffset;
              
              // Only apply if element is somewhat visible
              if(rect.top < window.innerHeight && rect.bottom > 0) {
                 el.style.transform = `translateY(${finalOffset}px)`;
              }
            }
          });
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl h-16 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-cyan-500/10 rounded-lg border border-cyan-500/20 flex items-center justify-center">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:programming-broken"></iconify-icon>
</div>
<span className="font-medium text-white tracking-widest font-mono">EVOLVIUM<span className="text-cyan-400">_</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Agents</a>
<a className="hover:text-white transition-colors" href="#">How It Works</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex gap-4 items-center">
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">
            Sign In
          </a>
<button className="group h-10 px-5 bg-white text-black text-sm font-medium rounded-lg border-b-[3px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-400 hover:border-b-[2px] hover:translate-y-[1px] active:translate-y-[3px] active:border-b-0 transition-all flex items-center gap-2 shadow-sm">
<span>Get Started</span>
<span className="text-xs group-hover:bg-black/20 transition-colors font-medium font-mono bg-black/10 rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
<main className="w-full max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 relative">

<div className="text-center mb-24 relative z-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -z-10 pointer-events-none mix-blend-screen opacity-40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full -z-10 pointer-events-none mix-blend-screen opacity-30 delay-700 animate-pulse-glow"></div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 mb-8 tracking-wide shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)] backdrop-blur-md reveal-on-scroll">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
          EVOLVIUM DEMO LIVE
        </div>
<h1 className="relative z-10 md:text-9xl text-6xl font-normal tracking-tight text-white mb-10 leading-[0.9] flex flex-col items-center gap-2 reveal-on-scroll">
<span className="block text-4xl md:text-6xl font-instrument-serif italic text-zinc-200 tracking-tight mix-blend-plus-lighter">
            Designed for
          </span>
<span className="relative inline-block mt-[-0.2em]">
<span className="absolute -inset-x-6 -inset-y-4 bg-cyan-500/10 blur-3xl rounded-full opacity-50"></span>
<span className="bg-clip-text block text-transparent bg-gradient-to-b from-white via-cyan-50 to-cyan-200 pb-2 relative drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]">
              Flow State.
            </span>
<span className="absolute -right-8 top-0 text-cyan-400 animate-pulse font-light text-4xl md:text-6xl opacity-80 mt-4 md:mt-8">_</span>
</span>
</h1>
<p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-12 reveal-on-scroll">
          Build Software with AI Agents. Evolvium orchestrates 6 specialized AI agents that collaborate to architect, build, debug, optimize, test, and secure your code in real-time.
        </p>
<div className="flex items-center justify-center gap-4 reveal-on-scroll">
<button className="h-14 px-8 bg-cyan-500 rounded-lg border-b-4 border-cyan-700 text-black font-medium hover:bg-cyan-400 hover:border-cyan-600 active:translate-y-1 active:border-b-0 transition-all flex items-center gap-3 group shadow-[0_5px_0_rgb(8,145,178)] active:shadow-none">
<iconify-icon className="text-xl fill-black/20 group-hover:scale-110 transition-transform" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg tracking-tight">Try the Demo</span>
<div className="ml-2 px-1.5 py-0.5 bg-black/10 rounded text-xs font-mono opacity-60 font-medium border border-black/10">
              ⏎
            </div>
</button>
<button className="h-14 px-8 bg-zinc-900 rounded-lg border border-white/10 text-white font-medium hover:bg-zinc-800 hover:border-white/20 active:translate-y-1 transition-all flex items-center gap-3">
<span className="text-lg tracking-tight">Learn More</span>
</button>
</div>
<div className="absolute top-12 left-[10%] hidden lg:flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-full animate-float delay-100 z-0 pointer-events-none select-none">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Agent_Sync</span>
</div>
<div className="absolute bottom-24 right-[12%] hidden lg:flex flex-col gap-2 p-3 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-xl animate-float delay-300 shadow-xl z-0 rotate-6 pointer-events-none select-none">
<div className="flex items-center justify-between gap-8 mb-0.5">
<span className="text-xs font-mono text-zinc-600 uppercase tracking-wider">Test Coverage</span>
<span className="text-xs font-mono text-cyan-500/80 font-medium">99.9%</span>
</div>
<div className="flex gap-0.5">
<div className="w-0.5 h-2 bg-cyan-500/40 rounded-full"></div>
<div className="w-0.5 h-3 bg-cyan-500/60 rounded-full"></div>
<div className="w-0.5 h-2 bg-cyan-500/40 rounded-full"></div>
<div className="w-0.5 h-4 bg-cyan-500/80 rounded-full"></div>
<div className="w-0.5 h-2 bg-cyan-500/40 rounded-full"></div>
<div className="w-0.5 h-3 bg-cyan-500/60 rounded-full"></div>
</div>
</div>
<div className="absolute top-[15%] right-[18%] hidden lg:block animate-float delay-500 z-0 pointer-events-none opacity-30">
<svg className="animate-[spin_20s_linear_infinite]" fill="none" height="100" viewbox="0 0 100 100" width="100"><circle cx="50" cy="50" opacity="0.5" r="48" stroke="#22d3ee" stroke-dasharray="4 6" strokeWidth="0.5"></circle><circle cx="50" cy="50" opacity="0.3" r="38" stroke="#a78bfa" stroke-dasharray="2 4" strokeWidth="0.5"></circle></svg>
</div>
<div className="absolute bottom-[20%] left-[6%] hidden lg:block animate-float delay-700 z-0 pointer-events-none opacity-30 mix-blend-screen">
<div className="w-24 h-24 border-[0.5px] border-cyan-500/20 rounded-full flex items-center justify-center"><div className="w-16 h-16 border-[0.5px] border-purple-500/20 rounded-full"></div></div>
</div>
</div>

<section className="w-full">

<div className="group glass-panel transition-all duration-500 w-full h-full rounded-3xl pt-1 pr-1 pb-1 pl-1 relative reveal-on-scroll">
<div className="overflow-visible flex flex-col bg-black/40 rounded-[20px] pt-10 pr-12 pb-20 pl-12 relative h-full items-center md:pt-4 md:pb-2 md:pl-4 md:pr-4">
<div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-700"></div>

<div className="flex w-full max-w-6xl mr-auto mb-20 ml-auto pt-10 pb-10 relative perspective-[1200px] justify-center">
<div className="relative bg-[#09090b] rounded-3xl border border-white/10 p-3 md:p-4 shadow-2xl backdrop-blur-xl transform rotate-x-12 transition-transform duration-500 group-hover:rotate-x-0 group-hover:scale-[1.02] origin-center w-full max-w-5xl">

<div className="absolute -top-24 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900/90 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20 opacity-0 transition-all duration-300 flex items-center gap-2 whitespace-nowrap z-30 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md" id="actionIndicator">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
<span className="tracking-wide">AGENT DEPLOYED</span>
<span className="text-zinc-600 border-l border-white/10 pl-2 ml-1">
                    CMD + K
                  </span>
</div>

<div className="bg-[#121214] rounded-2xl border border-white/5 p-4 md:p-6 shadow-inner relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

<div className="flex items-center justify-between mb-8 px-1">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-zinc-400">
<iconify-icon className="text-cyan-400" icon="solar:command-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 tracking-widest">EV-65 <span className="text-zinc-600">PRO</span></span>
</div>
<div className="h-3 w-[1px] bg-white/10"></div>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                          Mode
                        </span>
<div className="relative w-24 h-6 bg-zinc-900 rounded-full border border-white/5 p-0.5 flex">
<div className="absolute inset-y-0.5 left-0.5 w-11 bg-zinc-800 rounded-full border border-white/10 shadow-sm z-10"></div>
<div className="w-1/2 flex items-center justify-center text-xs font-medium text-zinc-600 z-20 relative cursor-pointer hover:text-zinc-400 transition-colors">
                            AI
                          </div>
</div>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded-md border border-white/5">
<iconify-icon className="text-blue-400" icon="solar:bluetooth-linear" strokeWidth="1.5"></iconify-icon>
<span>100%</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2 relative z-10">

<div className="flex gap-2 w-full">
<div className="h-10 md:h-12 w-10 md:w-14 bg-zinc-800/50 rounded-lg flex items-center justify-center text-xs font-medium text-red-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700/80 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">
                        ESC
                      </div>
<div className="flex-1 flex gap-2">
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">1</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">2</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">3</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">4</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">5</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">6</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">7</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">8</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">9</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">0</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">-</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">=</div>
</div>
<div className="h-10 md:h-12 w-16 md:w-24 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-medium text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">
                        BACK
                      </div>
<div className="h-10 md:h-12 w-10 md:w-12 bg-zinc-900 rounded-lg border border-white/5 flex items-center justify-center text-zinc-600 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer">
<iconify-icon className="text-sm" icon="solar:microphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex gap-2 w-full">
<div className="h-10 md:h-12 w-14 md:w-20 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-medium text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">
                        TAB
                      </div>
<div className="flex-1 flex gap-2">
<div className="key-q h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">Q</div>
<div className="key-w h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">W</div>
<div className="key-e h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">E</div>
<div className="key-r h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">R</div>
<div className="key-t h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">T</div>
<div className="key-y h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">Y</div>
<div className="key-u h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">U</div>
<div className="key-i h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">I</div>
<div className="key-o h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">O</div>
<div className="key-p h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">P</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-400 transition-transform duration-75">[</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-400 transition-transform duration-75">]</div>
</div>
<div className="h-10 md:h-12 w-10 md:w-16 bg-zinc-800 rounded-lg flex items-center justify-center text-sm font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">
                        \
                      </div>
<div className="h-10 md:h-12 w-10 md:w-12 bg-zinc-900 rounded-lg border border-white/5 flex items-center justify-center text-zinc-600 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-pointer">
<iconify-icon className="text-sm" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex gap-2 w-full">
<div className="h-10 md:h-12 w-16 md:w-24 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-medium text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">
                        CAPS
                      </div>
<div className="flex-1 flex gap-2">
<div className="key-a h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">A</div>
<div className="key-s h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">S</div>
<div className="key-d h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">D</div>
<div className="key-f h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">F</div>
<div className="key-g h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">G</div>
<div className="key-h h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">H</div>
<div className="key-j h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">J</div>
<div className="key-k h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">K</div>
<div className="key-l h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">L</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-400 transition-transform duration-75">;</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-400 transition-transform duration-75">'</div>
</div>
<div className="key-enter h-10 md:h-12 w-16 md:w-28 bg-zinc-700 hover:bg-zinc-600 rounded-lg flex items-center justify-center text-xs font-medium text-white border-b-[3px] border-zinc-900 transition-all cursor-pointer shadow-[0_0_15px_-3px_rgba(6,182,212,0.15)] transition-transform duration-75">
                        ENTER
                      </div>
<div className="h-10 md:h-12 w-10 md:w-12 bg-zinc-900 rounded-lg border border-white/5 flex items-center justify-center text-zinc-600 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer">
<iconify-icon className="text-sm" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex gap-2 w-full">
<div className="h-10 md:h-12 w-20 md:w-32 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-medium text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">
                        SHIFT
                      </div>
<div className="flex-1 flex gap-2">
<div className="key-z md:h-12 flex-1 hover:bg-zinc-700 cursor-pointer border-b-[3px] transition-all flex text-sm font-normal text-zinc-300 bg-zinc-800 h-10 border-zinc-950 rounded-lg shadow-sm items-center justify-center transition-transform duration-75">Z</div>
<div className="key-x h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">X</div>
<div className="key-c md:h-12 flex-1 hover:bg-zinc-700 cursor-pointer border-b-[3px] transition-all bg-zinc-800 h-10 border-zinc-950 rounded-lg shadow-sm flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">C</div>
<div className="key-v h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">V</div>
<div className="key-b h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">B</div>
<div className="key-n h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">N</div>
<div className="key-m h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-300 transition-transform duration-75">M</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-400 transition-transform duration-75">,</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-400 transition-transform duration-75">.</div>
<div className="h-10 md:h-12 flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg cursor-pointer border-b-[3px] border-zinc-950 shadow-sm transition-all flex items-center justify-center text-sm font-normal text-zinc-400 transition-transform duration-75">/</div>
</div>
<div className="h-10 md:h-12 w-16 md:w-20 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-medium text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">
                        SHIFT
                      </div>
<div className="h-10 md:h-12 w-10 md:w-12 bg-zinc-900 rounded-lg border border-white/5 flex items-center justify-center text-zinc-600 hover:text-yellow-400 hover:border-yellow-500/30 transition-all cursor-pointer">
<iconify-icon className="text-sm" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex gap-2 w-full mt-1">
<div className="h-10 md:h-12 w-10 md:w-16 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-medium text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">CTRL</div>
<div className="h-10 md:h-12 w-10 md:w-16 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-medium text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">OPT</div>
<div className="key-cmd h-10 md:h-12 w-12 md:w-20 bg-zinc-800 rounded-lg flex items-center justify-center text-sm font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">⌘</div>
<div className="key-space h-10 md:h-12 flex-1 bg-zinc-800 rounded-lg border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm flex items-center justify-center transition-transform duration-75">
<div className="w-16 h-1 bg-white/10 rounded-full"></div>
</div>
<div className="key-cmd h-10 md:h-12 w-10 md:w-16 bg-zinc-800 rounded-lg flex items-center justify-center text-sm font-normal text-zinc-400 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer shadow-sm transition-transform duration-75">⌘</div>
<div className="h-10 md:h-12 w-10 md:w-12 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-medium text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm">FN</div>
<div className="flex gap-2">
<div className="h-10 md:h-12 w-10 md:w-12 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm group/arrow">
<iconify-icon className="text-sm group-hover/arrow:-translate-x-0.5 transition-transform" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<div className="h-[18px] md:h-[22px] w-10 md:w-12 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-500 border-b-2 border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[1px] active:border-b-0 shadow-sm group/arrow">
<iconify-icon className="text-xs group-hover/arrow:-translate-y-0.5 transition-transform" icon="solar:arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="h-[18px] md:h-[22px] w-10 md:w-12 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-500 border-b-2 border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[1px] active:border-b-0 shadow-sm group/arrow">
<iconify-icon className="text-xs group-hover/arrow:translate-y-0.5 transition-transform" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="h-10 md:h-12 w-10 md:w-12 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 border-b-[3px] border-zinc-950 hover:bg-zinc-700 transition-all cursor-pointer active:translate-y-[2px] active:border-b-0 shadow-sm group/arrow">
<iconify-icon className="text-sm group-hover/arrow:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="h-10 md:h-12 w-10 md:w-12 bg-zinc-900 rounded-lg border border-white/5 flex items-center justify-center text-zinc-600 hover:text-red-400 hover:border-red-500/30 transition-all cursor-pointer">
<iconify-icon className="text-sm" icon="solar:radio-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-cyan-500/20 blur-lg rounded-full"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-purple-500/20 blur-lg rounded-full"></div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16 w-full max-w-4xl px-4">
<div className="space-y-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest pl-2 border-l-2 border-cyan-500/20">
                  Navigation
                </h3>
<div className="space-y-1">
<div className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">Omni Search</span>
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-zinc-500 group-hover/item:text-white transition-colors">⌘K</span>
</div>
<div className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">Agent Hub</span>
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-zinc-500 group-hover/item:text-white transition-colors">G I</span>
</div>
</div>
</div>
<div className="space-y-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest pl-2 border-l-2 border-purple-500/20">
                  Agents
                </h3>
<div className="space-y-1">
<div className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">Deploy Feature</span>
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-zinc-500 group-hover/item:text-white transition-colors">F</span>
</div>
<div className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">Run Security Scan</span>
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-zinc-500 group-hover/item:text-white transition-colors">⌘\</span>
</div>
</div>
</div>
<div className="space-y-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest pl-2 border-l-2 border-emerald-500/20">
                  View
                </h3>
<div className="space-y-1">
<div className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                   Task DAG
                    <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-zinc-500 group-hover/item:text-white transition-colors">⌥T</span>
</div>
<div className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">Zen Mode</span>
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-zinc-500 group-hover/item:text-white transition-colors">Z</span>
</div>
</div>
</div>
<div className="space-y-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest pl-2 border-l-2 border-blue-500/20">
                  System
                </h3>
<div className="space-y-1">
<div className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">Preferences</span>
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-zinc-500 group-hover/item:text-white transition-colors">⌘,</span>
</div>
<div className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<span className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">Deploy</span>
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-zinc-500 group-hover/item:text-white transition-colors">⇧D</span>
</div>
</div>
</div>
</div>

<div className="mt-auto text-center max-w-2xl">
<div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/5 rounded-full border border-white/5">
<iconify-icon className="text-cyan-400 text-sm" icon="solar:keyboard-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-white tracking-tight">Command Center</span>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                Complete control at your fingertips
              </h2>
<p className="text-base text-zinc-400 font-light leading-relaxed">
                Every pixel of the interface is accessible via keyboard. Chain commands, direct agents, and execute architectural overhauls without ever lifting a finger from the home row.
              </p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mt-8 mt-8 gap-x-8 gap-y-8">

<div className="lg:col-span-2 group relative rounded-3xl glass-panel p-1 transition-all duration-500 reveal-on-scroll">
<div className="relative h-full rounded-[20px] bg-black/40 overflow-hidden p-8 flex flex-col justify-between min-h-[320px]">
<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="relative w-full h-40 mb-6 flex items-center justify-between px-4 lg:px-12 mt-4">
<div className="absolute top-1/2 left-10 right-10 h-[1px] bg-white/5"></div>
<div className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-stream w-1/2 opacity-50"></div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-zinc-800 border-b-[3px] border-black flex items-center justify-center shadow-sm group-hover:bg-zinc-700 transition-all">
<iconify-icon className="text-zinc-400 group-hover:text-cyan-400 transition-colors text-2xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-zinc-500 uppercase tracking-widest font-medium">
                  Architect
                </div>
</div>

<div className="relative z-10">
<div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse-glow"></div>
<div className="w-16 h-16 rounded-xl bg-zinc-800 border-b-4 border-black flex items-center justify-center shadow-xl relative active:translate-y-1 active:border-b-0 transition-all">
<iconify-icon className="text-cyan-400 text-3xl" icon="solar:network-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-zinc-800 border-b-[3px] border-black flex items-center justify-center shadow-sm group-hover:bg-zinc-700 transition-all">
<iconify-icon className="text-zinc-400 group-hover:text-purple-400 transition-colors text-2xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-zinc-500 uppercase tracking-widest font-medium whitespace-nowrap">
                  Feature
                </div>
</div>
</div>
<div className="z-10 relative">
<h3 className="flex items-center gap-2 text-xl font-medium text-white tracking-tight mb-2 pt-0 pb-0">
                Architect &amp; Feature Agents
              </h3>
<p className="leading-relaxed text-sm font-light text-slate-400 max-w-md">
                Designs system architecture and breaks down complex tasks into manageable components, while implementing new features following best practices and existing code patterns.
              </p>
</div>
</div>
</div>

<div className="lg:col-span-1 group glass-panel transition-all duration-500 rounded-3xl pt-1 pr-1 pb-1 pl-1 relative reveal-on-scroll">
<style>
              @keyframes shimmer-bg {
                  0% { background-position: 200% 0; }
                  100% { background-position: -200% 0; }
              }
          </style>
<div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
<div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(16,185,129,0.15)_50%,transparent_65%)] bg-[length:200%_100%] animate-[shimmer-bg_4s_linear_infinite]"></div>
</div>
<div className="relative z-10 h-full rounded-[20px] bg-black/40 overflow-hidden p-8 flex flex-col min-h-[320px]">
<div className="relative flex-1 flex items-center justify-center mb-6">
<div className="relative w-32 h-32 flex items-center justify-center">
<div className="absolute inset-0 rounded-full border border-emerald-500/10 border-dashed animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-emerald-500/10 border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-16 h-16 bg-emerald-900/10 rounded-xl rotate-45 flex items-center justify-center border border-emerald-500/20 backdrop-blur-md transition-transform duration-500 group-hover:rotate-90">
<iconify-icon className="text-emerald-400 -rotate-45 group-hover:-rotate-90 transition-transform duration-500 text-4xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">
                      Security Agent
                  </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                      Reviews code for vulnerabilities and implements enterprise-grade security hardening in real-time.
                  </p>
</div>
</div>
</div>

<div className="lg:col-span-3 group relative rounded-3xl glass-panel p-1 transition-all duration-500 reveal-on-scroll">
<div className="relative rounded-[20px] bg-black/60 overflow-hidden p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/10 text-xs font-medium text-orange-400 tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                LIVE AGENT LOGS
              </div>
<h3 className="text-2xl font-medium tracking-tight text-white">
                Debugger, Optimizer &amp; Tester
              </h3>
<p className="text-slate-400 text-sm font-light leading-relaxed max-w-xl">
                Diagnoses bugs with root cause analysis, improves performance, reduces latency, and generates comprehensive tests to validate code correctness in real-time.
              </p>
</div>

<div className="md:w-1/2 text-[10px] overflow-hidden font-mono bg-[#0c0c0e] w-full h-40 border-white/5 border rounded-xl relative shadow-inner">
<style>
                @keyframes infinite-scroll-y {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
              </style>
<div className="absolute top-0 left-0 w-full h-8 bg-[#0c0c0e] border-b border-white/5 flex items-center px-4 gap-1.5 z-20">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<div className="absolute inset-0 top-8 z-10 overflow-hidden">
<div className="w-full" style={{animation: 'infinite-scroll-y 15s linear infinite'}}>
<div className="flex flex-col gap-1.5 pr-4 pb-4 pl-4 gap-x-1.5 gap-y-1.5">
<div className="flex gap-2">
<span className="text-zinc-600">10:42:01</span>
<span className="text-cyan-400 w-16">ARCHITECT</span>
<span className="text-zinc-400">task/breakdown</span>
<span className="text-emerald-400">200 OK</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">10:42:02</span>
<span className="text-purple-400 w-16">FEATURE</span>
<span className="text-zinc-400">auth-module generated</span>
<span className="text-zinc-600">4ms</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">10:42:02</span>
<span className="text-blue-400 w-16">DEBUGGER</span>
<span className="text-zinc-400">trace-analysis complete</span>
<span className="text-zinc-600">0 anomalies</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">10:42:03</span>
<span className="text-orange-400 w-16">OPTIMIZER</span>
<span className="text-zinc-400">tree-shaking execution</span>
<span className="text-orange-400">-45kb size</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">10:42:04</span>
<span className="text-cyan-400 w-16">TESTER</span>
<span className="text-zinc-400">suite-execution</span>
<span className="text-emerald-400">100% pass</span>
</div>
</div>
<div className="flex flex-col gap-1.5 px-4 pb-4">
<div className="flex gap-2">
<span className="text-zinc-600">10:42:01</span>
<span className="text-cyan-400 w-16">ARCHITECT</span>
<span className="text-zinc-400">task/breakdown</span>
<span className="text-emerald-400">200 OK</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">10:42:02</span>
<span className="text-purple-400 w-16">FEATURE</span>
<span className="text-zinc-400">auth-module generated</span>
<span className="text-zinc-600">4ms</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">10:42:02</span>
<span className="text-blue-400 w-16">DEBUGGER</span>
<span className="text-zinc-400">trace-analysis complete</span>
<span className="text-zinc-600">0 anomalies</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">10:42:03</span>
<span className="text-orange-400 w-16">OPTIMIZER</span>
<span className="text-zinc-400">tree-shaking execution</span>
<span className="text-orange-400">-45kb size</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-600">10:42:04</span>
<span className="text-cyan-400 w-16">TESTER</span>
<span className="text-zinc-400">suite-execution</span>
<span className="text-emerald-400">100% pass</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0c0c0e] to-transparent pointer-events-none z-30"></div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative">
<div className="absolute inset-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-zinc-900/20 via-zinc-900/5 to-transparent rounded-[100%] blur-3xl pointer-events-none"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
<div className="max-w-3xl reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-zinc-400 mb-6 uppercase tracking-wider backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse"></span>
                How It Works
              </div>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[0.95]">
                Collaborative
                <span className="text-zinc-600">Evolution</span>
</h2>
</div>
<p className="text-zinc-400 max-w-xs text-sm font-light leading-relaxed mb-1 border-l border-zinc-800 pl-6 reveal-on-scroll">
              Scaling digital infrastructure from local prototype to planetary scale through a three-phase continuous loop.
            </p>
</div>
<div className="relative">
<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent -translate-y-4"></div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">

<div className="group relative lg:-translate-y-12 transition-transform duration-75 ease-linear will-change-transform reveal-on-scroll" data-parallax-base="-48" data-parallax-intensity="0.05">
<div className="hidden lg:block absolute bottom-0 left-8 w-px h-[40px] bg-gradient-to-b from-zinc-800 to-transparent translate-y-full group-hover:from-cyan-500/50 transition-colors duration-500"></div>
<div className="hidden lg:block absolute bottom-[-41px] left-[31px] w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-500 z-20"></div>
<div className="h-full rounded-2xl bg-zinc-900/40 border border-white/5 p-8 backdrop-blur-md hover:bg-zinc-900/60 transition-colors group-hover:border-cyan-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<span className="text-6xl font-instrument-serif italic text-cyan-400">01</span>
</div>
<div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-500 shadow-sm relative z-10">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-cyan-400 transition-colors" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-cyan-50 transition-colors relative z-10">Ideation &amp; Architecture</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed relative z-10">
                    Describe your vision in natural language. The Architect agent instantly translates requirements into a scalable system design, breaking down complexities into actionable graphs.
                  </p>
</div>
</div>

<div className="group relative transition-transform duration-75 ease-linear will-change-transform reveal-on-scroll delay-100" data-parallax-base="0" data-parallax-intensity="0">
<div className="hidden lg:block absolute bottom-1/2 right-full w-[40px] h-px bg-gradient-to-r from-zinc-800 to-transparent -translate-x-full group-hover:from-purple-500/50 transition-colors duration-500"></div>
<div className="h-full rounded-2xl bg-zinc-900/40 border border-white/5 p-8 backdrop-blur-md hover:bg-zinc-900/60 transition-colors group-hover:border-purple-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<span className="text-6xl font-instrument-serif italic text-purple-400">02</span>
</div>
<div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-500 shadow-sm relative z-10">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-purple-400 transition-colors" icon="solar:code-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-purple-50 transition-colors relative z-10">Autonomous Execution</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed relative z-10">
                    The Feature agent begins drafting logic while the Debugger and Optimizer run alongside it. Errors are caught and remediated locally before the code ever reaches commit stage.
                  </p>
</div>
</div>

<div className="group relative lg:translate-y-12 transition-transform duration-75 ease-linear will-change-transform reveal-on-scroll delay-200" data-parallax-base="48" data-parallax-intensity="-0.05">
<div className="hidden lg:block absolute top-0 left-8 w-px h-[40px] bg-gradient-to-t from-zinc-800 to-transparent -translate-y-full group-hover:from-emerald-500/50 transition-colors duration-500"></div>
<div className="hidden lg:block absolute top-[-41px] left-[31px] w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-500 z-20"></div>
<div className="h-full rounded-2xl bg-zinc-900/40 border border-white/5 p-8 backdrop-blur-md hover:bg-zinc-900/60 transition-colors group-hover:border-emerald-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<span className="text-6xl font-instrument-serif italic text-emerald-400">03</span>
</div>
<div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-500 shadow-sm relative z-10">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-emerald-400 transition-colors" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-emerald-50 transition-colors relative z-10">Hardening &amp; Deployment</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed relative z-10">
                    The Security agent performs static analysis and injects safeguards, followed immediately by the Tester verifying edge cases. Greenlit builds seamlessly deploy to your production environment.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full rounded-[32px] bg-zinc-900 border border-white/10 overflow-hidden mb-12 reveal-on-scroll">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none mix-blend-overlay"></div>
<div className="absolute -right-[20%] -top-[50%] w-[70%] h-[200%] bg-gradient-to-l from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none rounded-full rotate-12"></div>
<div className="relative z-10 px-8 py-20 md:py-32 flex flex-col items-center text-center max-w-3xl mx-auto">
<div className="w-16 h-16 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
<iconify-icon className="text-3xl text-cyan-400" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
            Ready to evolve your workflow?
          </h2>
<p className="text-lg text-zinc-400 font-light mb-10 leading-relaxed">
            Join thousands of developers building the next generation of software with the industry's most advanced multi-agent orchestrator.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="h-14 px-8 bg-white text-black font-medium rounded-xl border-b-[4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-400 hover:translate-y-[2px] active:translate-y-[4px] active:border-b-0 transition-all flex items-center gap-2 shadow-lg">
<span>Start Building for Free</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
<button className="h-14 px-8 bg-zinc-800 text-white font-medium rounded-xl border border-white/10 hover:bg-zinc-700 hover:border-white/20 active:translate-y-[2px] transition-all flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span>Read the Docs</span>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#030305] pt-16 pb-12 px-6 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-cyan-500/10 rounded-lg border border-cyan-500/20 flex items-center justify-center">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:programming-broken"></iconify-icon>
</div>
<span className="font-medium text-white tracking-widest font-mono">EVOLVIUM<span className="text-cyan-400">_</span></span>
</div>
<p className="text-sm text-zinc-500 max-w-xs font-light">
            Architect, build, deploy, and scale with autonomous AI agents.
          </p>
</div>
<div className="flex flex-wrap items-center gap-x-12 gap-y-4 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Careers <span className="ml-1 px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] border border-cyan-500/20">WE'RE HIRING</span></a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-600 font-light">
          © 2024 Evolvium Inc. All rights reserved.
        </div>
<div className="flex items-center gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="bi:twitter-x"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="bi:github"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="bi:discord"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
