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



// Configure Tailwind 3D
tailwind.config = {
theme: { extend: {} },
plugins: [
function({ addUtilities }) {
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
const utilities = {};
rotateValues.forEach(v => {
utilities[`.rotate-x-${v}`] = { transform: `perspective(1000px) rotateX(${v}deg)` };
utilities[`.-rotate-x-${v}`] = { transform: `perspective(1000px) rotateX(-${v}deg)` };
});
addUtilities(utilities);
}
]
};
// Spotlight & Cursor Logic
document.addEventListener('DOMContentLoaded', () => {
const cursor = document.getElementById('cursor-spotlight');
const cards = document.querySelectorAll('.glass-card');
document.addEventListener('mousemove', (e) => {
// Move global spotlight
cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';
// Update individual card spotlights
cards.forEach(card => {
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
card.style.setProperty('--mouse-x', `${x}px`);
card.style.setProperty('--mouse-y', `${y}px`);
});
});
// Hide cursor spotlight when leaving window
document.addEventListener('mouseleave', () => {
cursor.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
cursor.style.opacity = '1';
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
      

<div id="cursor-spotlight" style={{opacity: '0', left: '289px', top: '351px'}}></div>

<div className="fixed inset-0 pointer-events-none z-0 bg-[#020202]">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen opacity-40"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[600px] bg-cyan-900/20 blur-[100px] rounded-full mix-blend-screen opacity-30"></div>
<div className="absolute inset-0 grid-lines opacity-100"></div>
</div>

<header className="fixed flex z-50 pt-6 pr-4 pb-6 pl-4 top-0 right-0 left-0 justify-center">
<nav className="glass-panel flex animate-enter w-full max-w-5xl rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center justify-between">
<div className="flex items-center gap-3 shrink-0">
<img alt="Dominate.ai" className="w-auto h-[34px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b492c1df-d364-4073-941a-ded6416540ad_3840w.jpg" style={{}}/>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Leads</a>
<a className="hover:text-white transition-colors" href="#">AI Apps</a>
<a className="hover:text-white transition-colors" href="#">Industries</a>
<a className="hover:text-white transition-colors" href="#">
            How It Works
          </a>
<a className="hover:text-white transition-colors" href="#">Who we are</a>
</div>
<div className="flex items-center gap-3 shrink-0">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">
            Login
          </a>
<button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 shadow-sm">
            Contact Sales
          </button>
</div>
</nav>
</header>
<main className="z-10 pt-40 pr-6 pb-24 pl-6 relative">

<section className="text-center max-w-5xl -mt-12 mr-auto mb-16 ml-auto pt-6 pb-12 relative">

<div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl bg-[#080808]/50 border border-white/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
<style>
            @keyframes orbit-spin {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            @keyframes orbit-spin-reverse {
              from { transform: translate(-50%, -50%) rotate(360deg); }
              to { transform: translate(-50%, -50%) rotate(0deg); }
            }
            @keyframes data-stream-flow {
              0% { left: -20%; opacity: 0; transform: scaleX(0.5); }
              20% { opacity: 1; transform: scaleX(1); }
              80% { opacity: 1; transform: scaleX(1); }
              100% { left: 120%; opacity: 0; transform: scaleX(0.5); }
            }
            @keyframes core-pulse {
              0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); filter: blur(40px); }
              50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.15); filter: blur(55px); }
            }
            @keyframes grid-horizon-move {
              0% { background-position: 0 0; }
              100% { background-position: 0 50px; }
            }
          </style>

<div className="absolute bottom-[-100px] left-[-50%] right-[-50%] h-[500px] opacity-20 pointer-events-none transform-gpu" style="transform: perspective(600px) rotateX(60deg);
                  background-image: linear-gradient(to right, rgba(59, 130, 246, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.4) 1px, transparent 1px);
                  background-size: 50px 50px;
                  mask-image: linear-gradient(to top, black 20%, transparent 100%);
                  -webkit-mask-image: linear-gradient(to top, black 20%, transparent 100%);
                  animation: grid-horizon-move 3s linear infinite;"></div>

<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] mix-blend-screen" style={{animation: 'core-pulse 4s ease-in-out infinite'}}></div>
<div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[60px] mix-blend-screen" style={{transform: 'translate(-50%, -50%)'}}></div>

<div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] border border-white/5 rounded-full" style={{animation: 'orbit-spin 60s linear infinite'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-600 rounded-full"></div>
</div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-dashed border-cyan-500/20 rounded-full" style={{animation: 'orbit-spin-reverse 40s linear infinite'}}></div>
<div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-blue-500/20 rounded-full" style={{animation: 'orbit-spin 25s linear infinite'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-black border border-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
</div>

<div className="absolute top-[20%] h-[1px] w-40 bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent blur-[0.5px]" style={{animation: 'data-stream-flow 3s linear infinite'}}></div>
<div className="absolute top-[35%] h-[2px] w-64 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent blur-[1px]" style={{animation: 'data-stream-flow 4s linear infinite', animationDelay: '1s'}}></div>
<div className="absolute top-[75%] h-[2px] w-56 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent blur-[1px]" style={{animation: 'data-stream-flow 5s linear infinite', animationDelay: '2s'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020202_100%)]"></div>
</div>

<div className="animate-[pulse_4s_ease-in-out_infinite] inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-medium text-blue-400 mb-8 backdrop-blur-md relative z-20 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-shadow duration-500">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
          System Operational
        </div>

<h1 className="animate-enter delay-100 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] z-20 text-4xl font-medium text-white tracking-tighter mb-6 relative" style={{animationDuration: '0.4s'}}>
          AI Lead Gen Infrastructure for
          <br className="hidden md:block"/>
<span className="block sm:inline-block bg-clip-text cursor-default hover:scale-[1.02] transition-transform duration-500 font-normal text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 w-fit mr-auto ml-auto pb-2 drop-shadow-sm">
            Grants, Renewables &amp; Trades.
          </span>
</h1>

<p className="animate-enter delay-200 sm:text-xl md:text-2xl leading-snug hover:bg-white/[0.04] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] transition-all duration-500 group text-lg font-light text-slate-300 tracking-tight max-w-3xl z-20 rounded-2xl mr-auto mb-8 ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-sm">
          We deploy autonomous AI acquisition infrastructures for the
          <span className="relative inline-block font-medium text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 group-hover:text-blue-50 group-hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">
            grant, renewable, and trades sector
          </span>
          — converting raw intent into booked revenue at scale.
        </p>

<div className="animate-enter delay-300 flex flex-col sm:flex-row z-20 max-h-96 relative gap-x-4 gap-y-4 items-center justify-center">
<button className="group relative flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium text-black rounded-full transition-transform duration-300 hover:scale-[1.02]">
<span className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300">
<span className="absolute top-[-50%] left-[-50%] h-[200%] w-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#3b82f6_50%,transparent_100%)]"></span>
<span className="transition-all duration-300 group-hover:shadow-[0_0_40px_#3b82f6] bg-white rounded-full absolute top-[1px] right-[1px] bottom-[1px] left-[1px] shadow-[0_0_25px_#3b82f6]"></span>
</span>
<span className="relative z-10 flex items-center gap-2">
              Book a Discovery Call
              <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
<button className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 shadow-sm">
<iconify-icon className="text-blue-400" icon="lucide:play-circle" width="16"></iconify-icon>
            View Demo
          </button>
</div>
</section>
<style>
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        .animate-infinite-scroll { animation: scroll 40s linear infinite; }
      </style>
<section className="animate-enter delay-500 w-full max-w-7xl mr-auto mb-20 ml-auto pr-6 pl-6 relative">
<div className="text-center mb-8">
<div className="w-full flex flex-col gap-10 mt-12">
<p className="uppercase text-xs font-normal text-slate-500 tracking-widest font-mono text-center">
              Trusted by Forward-Thinking Companies
            </p>
<div className="relative w-full overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex w-max hover:pause">

<div className="flex min-w-full shrink-0 gap-16 animate-infinite-scroll items-center justify-around px-4">
<img alt="Stripe" className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" style={{}}/>
<img alt="Vercel" className="hover:opacity-100 transition-opacity duration-300 cursor-pointer opacity-70 w-auto h-[29px] object-contain invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5b7995d-d7a0-4caf-86bb-62ec0b39f24f_320w.png" style={{}}/>
<img alt="Linear" className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/linear.svg" style={{}}/>
<img alt="Airbnb" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/airbnb-1.svg" style={{}}/>
<img alt="Shopify" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/shopify.svg"/>
<img alt="Coinbase" className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/coinbase-1.svg"/>
</div>

<div aria-hidden="true" className="flex min-w-full shrink-0 gap-16 animate-infinite-scroll items-center justify-around px-4">
<img alt="Stripe" className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" style={{}}/>
<img alt="Vercel" className="h-[29px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5b7995d-d7a0-4caf-86bb-62ec0b39f24f_320w.png" style={{}}/>
<img alt="Linear" className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/linear.svg" style={{}}/>
<img alt="Airbnb" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/airbnb-1.svg" style={{}}/>
<img alt="Shopify" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/shopify.svg"/>
<img alt="Coinbase" className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/coinbase-1.svg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-enter delay-400 max-w-6xl mr-auto mb-32 ml-auto">
<div className="text-center mb-16">
<div className="flex flex-col items-center gap-6 mb-8">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tighter text-center">
              Built to Replace Manual Lead Operations
            </h2>
</div>
<p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Everything we do is designed to generate, convert, and scale demand
            without human bottlenecks.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="glass-card flex flex-col rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{'--mouse-x': '148px', '--mouse-y': '833.25px'}}>
<div className="text-xs text-blue-400 font-mono mb-4 relative z-10">
              01. AI SYSTEMS
            </div>
<h3 className="text-xl font-semibold text-white mb-3 relative z-10">
              End-to-End AI Lead Systems
            </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 relative z-10">
              We design and deploy full AI-driven lead generation systems that
              capture inbound demand, respond instantly, qualify enquiries, and
              book callbacks automatically.
            </p>

<div className="relative z-10 w-full h-40 mb-8 rounded-xl bg-white/5 border border-white/10 overflow-hidden group select-none">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<style>
                @keyframes flowParticle {
                  0% { left: 15%; opacity: 0; transform: translateY(-50%) scale(0.5); }
                  10% { opacity: 1; transform: translateY(-50%) scale(1); }
                  90% { opacity: 1; transform: translateY(-50%) scale(1); }
                  100% { left: 85%; opacity: 0; transform: translateY(-50%) scale(0.5); }
                }
                @keyframes pulseGlow {
                  0%, 100% { box-shadow: 0 0 15px -5px rgba(59, 130, 246, 0.2); border-color: rgba(59, 130, 246, 0.2); }
                  50% { box-shadow: 0 0 25px -5px rgba(59, 130, 246, 0.6); border-color: rgba(59, 130, 246, 0.6); }
                }
              </style>
<div className="absolute top-1/2 left-12 right-12 h-[1px] bg-gradient-to-r from-white/5 via-blue-500/50 to-white/5 -translate-y-1/2"></div>
<div className="absolute top-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[0.5px]" style={{animation: 'flowParticle 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
<div className="absolute inset-0 flex items-center justify-between px-8">
<div className="relative group/node z-10 flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#0f0f0f] border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover/node:border-blue-400 shadow-sm">
<iconify-icon className="text-slate-500 group-hover/node:text-blue-400 transition-colors" icon="lucide:arrow-right-left" width="16"></iconify-icon>
</div>
<div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                    Inbound
                  </div>
</div>
<div className="relative z-20 flex flex-col items-center gap-3">
<div className="absolute top-[6px] w-10 h-10 rounded-xl bg-blue-500/20 animate-ping opacity-40"></div>
<div className="w-12 h-12 rounded-xl bg-[#0f0f0f] border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10" style={{animation: 'pulseGlow 3s ease-in-out infinite'}}>
<iconify-icon className="text-blue-400" icon="lucide:cpu" width="20"></iconify-icon>
</div>
<div className="text-[9px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    Processing
                  </div>
</div>
<div className="relative group/node z-10 flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#0f0f0f] border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover/node:border-cyan-400 shadow-sm">
<iconify-icon className="text-slate-500 group-hover/node:text-cyan-400 transition-colors" icon="lucide:calendar-check" width="16"></iconify-icon>
</div>
<div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                    Booked
                  </div>
</div>
</div>
</div>
<ul className="mt-auto space-y-3 relative z-10">
<li className="flex items-start gap-2 text-xs text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Built per sector and workflow
              </li>
<li className="flex items-start gap-2 text-xs text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Integrated with CRM &amp; calendars
              </li>
<li className="flex items-start gap-2 text-xs text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Runs 24/7 without manual handling
              </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 group/btn relative z-10">
              Find Out More
              <iconify-icon className="transition-transform group-hover/btn:translate-x-1 text-blue-400" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="glass-card flex flex-col rounded-2xl pt-8 pr-8 pb-8 pl-8 relative" style={{'--mouse-x': '-244px', '--mouse-y': '833.25px'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full mix-blend-screen"></div>
<div className="text-xs text-blue-400 font-mono mb-4 relative z-10">
              02. LEADS DONE FOR YOU
            </div>
<h3 className="text-xl font-semibold text-white mb-3 relative z-10">
              Sales-Ready Leads, Delivered
            </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 relative z-10">
              We operate our own AI systems to generate and convert inbound
              demand, then sell the qualified, sales-ready leads directly.
            </p>

<div className="relative z-10 w-full h-40 mb-8 rounded-xl bg-white/5 border border-white/10 overflow-hidden group select-none">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-blue-500/30 shadow-none z-10 flex flex-col items-center justify-start pt-2">
<div className="bg-black/80 backdrop-blur-md border border-blue-500/30 px-1.5 py-0.5 rounded text-[8px] font-mono text-blue-400 whitespace-nowrap -translate-y-1/2 shadow-sm">
                  AI QUALIFICATION
                </div>
</div>
<div className="absolute left-1/2 top-0 bottom-0 w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent z-0"></div>
<style>
                @keyframes leadStream {
                  0% { left: -40%; border-color: rgba(255,255,255,0.05); transform: translateY(-50%) scale(0.9); }
                  40% { border-color: rgba(59,130,246,0.3); transform: translateY(-50%) scale(1); box-shadow: 0 0 0 transparent; }
                  50% { border-color: rgba(59,130,246,0.5); box-shadow: 0 4px 10px rgba(59,130,246,0.2); }
                  60% { border-color: rgba(6,182,212,0.4); box-shadow: 0 4px 10px rgba(6,182,212,0.2); }
                  100% { left: 120%; border-color: rgba(6,182,212,0.4); transform: translateY(-50%) scale(1); }
                }
                @keyframes iconStatus {
                  0%, 45% { color: #525252; }
                  45%, 55% { color: #3b82f6; }
                  55%, 100% { color: #06b6d4; }
                }
                @keyframes checkPopup {
                  0%, 50% { opacity: 0; transform: scale(0); }
                  55% { opacity: 1; transform: scale(1.25); }
                  65% { transform: scale(1); }
                  100% { opacity: 1; transform: scale(1); }
                }
                @keyframes textPulse {
                  0%, 45% { background-color: #333; }
                  50% { background-color: #3b82f6; }
                  55%, 100% { background-color: #22d3ee; }
                }
              </style>
<div className="absolute top-1/2 w-32 h-10 rounded-lg bg-[#0f0f0f] border border-white/10 flex items-center px-3 gap-3 shadow-sm z-20" style={{animation: 'leadStream 4s linear infinite', animationDelay: '0s'}}>
<iconify-icon className="transition-colors duration-300" icon="lucide:user" style={{animation: 'iconStatus 4s linear infinite', animationDelay: '0s'}} width="14"></iconify-icon>
<div className="flex flex-col gap-1.5 w-full">
<div className="h-1 w-12 rounded-full" style={{animation: 'textPulse 4s linear infinite', animationDelay: '0s'}}></div>
<div className="h-1 w-8 rounded-full" style={{animation: 'textPulse 4s linear infinite', animationDelay: '0s'}}></div>
</div>
<div className="absolute -top-1.5 -right-1.5 bg-[#0f0f0f] border border-white/10 rounded-full text-cyan-400 z-30 shadow-md" style={{animation: 'checkPopup 4s linear infinite', animationDelay: '0s'}}>
<iconify-icon icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 w-32 h-10 rounded-lg bg-[#0f0f0f] border border-white/10 flex items-center px-3 gap-3 shadow-sm z-20" style={{animation: 'leadStream 4s linear infinite', animationDelay: '-1.33s'}}>
<iconify-icon className="transition-colors duration-300" icon="lucide:user" style={{animation: 'iconStatus 4s linear infinite', animationDelay: '-1.33s'}} width="14"></iconify-icon>
<div className="flex flex-col gap-1.5 w-full">
<div className="h-1 w-12 rounded-full" style={{animation: 'textPulse 4s linear infinite', animationDelay: '-1.33s'}}></div>
<div className="h-1 w-8 rounded-full" style={{animation: 'textPulse 4s linear infinite', animationDelay: '-1.33s'}}></div>
</div>
<div className="absolute -top-1.5 -right-1.5 bg-[#0f0f0f] border border-white/10 rounded-full text-cyan-400 z-30 shadow-md" style={{animation: 'checkPopup 4s linear infinite', animationDelay: '-1.33s'}}>
<iconify-icon icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
</div>
<div className="absolute top-1/2 w-32 h-10 rounded-lg bg-[#0f0f0f] border border-white/10 flex items-center px-3 gap-3 shadow-sm z-20" style={{animation: 'leadStream 4s linear infinite', animationDelay: '-2.66s'}}>
<iconify-icon className="transition-colors duration-300" icon="lucide:user" style={{animation: 'iconStatus 4s linear infinite', animationDelay: '-2.66s'}} width="14"></iconify-icon>
<div className="flex flex-col gap-1.5 w-full">
<div className="h-1 w-12 rounded-full" style={{animation: 'textPulse 4s linear infinite', animationDelay: '-2.66s'}}></div>
<div className="h-1 w-8 rounded-full" style={{animation: 'textPulse 4s linear infinite', animationDelay: '-2.66s'}}></div>
</div>
<div className="absolute -top-1.5 -right-1.5 bg-[#0f0f0f] border border-white/10 rounded-full text-cyan-400 z-30 shadow-md" style={{animation: 'checkPopup 4s linear infinite', animationDelay: '-2.66s'}}>
<iconify-icon className="" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
</div>
</div>
<ul className="mt-auto space-y-3 relative z-10">
<li className="flex text-xs text-slate-400 gap-x-2 gap-y-2 items-start">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Inbound only
              </li>
<li className="flex items-start gap-2 text-xs text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Qualified automatically
              </li>
<li className="flex items-start gap-2 text-xs text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Booked callbacks, not raw data
              </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 group/btn relative z-10">
              Find Out More
              <iconify-icon className="transition-transform group-hover/btn:translate-x-1 text-blue-400" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="glass-card flex flex-col rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{'--mouse-x': '-636px', '--mouse-y': '833.25px'}}>
<div className="text-xs text-blue-400 font-mono mb-4 relative z-10">
              03. AI APPS WE BUILD
            </div>
<h3 className="text-xl font-semibold text-white mb-3 relative z-10">
              Custom AI Lead-Gen Apps
            </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 relative z-10">
              We build bespoke AI applications designed to capture and convert
              demand more efficiently — from qualification engines to instant
              proposal tools.
            </p>

<div className="relative z-10 w-full h-40 mb-8 rounded-xl bg-white/5 border border-white/10 overflow-hidden group select-none">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<style>
                @keyframes orbitRotate {
                  0% { transform: translate(-50%, -50%) rotate(0deg); }
                  100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes orbitRotateReverse {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(-360deg); }
                }
                @keyframes pulseCore {
                  0%, 100% { box-shadow: 0 0 0 rgba(59, 130, 246, 0); border-color: rgba(255, 255, 255, 0.1); }
                  50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); border-color: rgba(59, 130, 246, 0.5); }
                }
              </style>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full mix-blend-screen"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#0f0f0f] border border-white/10 rounded-2xl flex items-center justify-center z-20 transition-all duration-500" style={{animation: 'pulseCore 3s ease-in-out infinite'}}>
<iconify-icon className="text-slate-200" icon="lucide:layout-grid" width="24"></iconify-icon>
<div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border border-black shadow-sm">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
</div>
<div className="absolute left-1/2 top-1/2 w-32 h-32 border border-dashed border-white/20 rounded-full" style={{animation: 'orbitRotate 20s linear infinite'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0f0f0f] border border-white/10 rounded-lg flex items-center justify-center text-blue-400 shadow-md transition-colors">
<iconify-icon icon="lucide:user" style={{animation: 'orbitRotateReverse 20s linear infinite'}} width="14"></iconify-icon>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#0f0f0f] border border-white/10 rounded-lg flex items-center justify-center text-cyan-400 shadow-md transition-colors">
<iconify-icon icon="lucide:file-text" style={{animation: 'orbitRotateReverse 20s linear infinite'}} width="14"></iconify-icon>
</div>
<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0f0f0f] border border-white/10 rounded-lg flex items-center justify-center text-blue-400 shadow-md transition-colors">
<iconify-icon icon="lucide:cpu" style={{animation: 'orbitRotateReverse 20s linear infinite'}} width="14"></iconify-icon>
</div>
<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0f0f0f] border border-white/10 rounded-lg flex items-center justify-center text-indigo-400 shadow-md transition-colors">
<iconify-icon icon="lucide:zap" style={{animation: 'orbitRotateReverse 20s linear infinite'}} width="14"></iconify-icon>
</div>
</div>
</div>
<ul className="mt-auto space-y-3 relative z-10">
<li className="flex items-start gap-2 text-xs text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Built for lead generation, not demos
              </li>
<li className="flex items-start gap-2 text-xs text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                White-label or owned
              </li>
<li className="flex items-start gap-2 text-xs text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Maximize lead quality &amp; conversion
              </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 group/btn relative z-10">
              Find Out More
              <iconify-icon className="transition-transform group-hover/btn:translate-x-1 text-blue-400" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto mb-32 ml-auto relative">
<div className="absolute inset-0 pointer-events-none -z-10">
<div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 mix-blend-screen"></div>
<div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] mix-blend-screen"></div>
</div>
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tighter mb-4">
            Industries We Dominate
          </h2>
<p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            AI lead generation systems engineered for sectors where speed,
            qualification, and volume decide who wins.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card flex flex-col p-6 rounded-2xl group relative overflow-hidden" style={{'--mouse-x': '148px', '--mouse-y': '-65.75px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-blue-500/10 to-transparent"></div>
<div className="absolute bottom-0 right-0 w-48 h-40 opacity-20 pointer-events-none group-hover:opacity-60 transition-opacity duration-500 overflow-hidden" style={{WebkitMaskImage: 'linear-gradient(to top left, black 40%, transparent 100%)', maskImage: 'linear-gradient(to top left, black 40%, transparent 100%)'}}>
<style>
                @keyframes streamScroll {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
                @keyframes scanLine {
                  0%, 100% { top: 10%; opacity: 0; }
                  20% { opacity: 1; }
                  80% { opacity: 1; }
                  50% { top: 90%; }
                }
              </style>
<div className="absolute inset-0 flex justify-end gap-3 px-6 transform rotate-6 scale-110 origin-bottom-right">
<div className="relative w-8 -mt-20">
<div className="flex flex-col gap-3 w-full" style={{animation: 'streamScroll 8s linear infinite'}}>
<div className="h-12 w-full bg-white/5 rounded-sm"></div>
<div className="h-8 w-full bg-blue-500/20 rounded-sm border border-blue-500/30"></div>
<div className="h-16 w-full bg-white/5 rounded-sm"></div>
<div className="h-10 w-full bg-white/5 rounded-sm"></div>
<div className="h-12 w-full bg-white/5 rounded-sm"></div>
<div className="h-8 w-full bg-blue-500/20 rounded-sm border border-blue-500/30"></div>
<div className="h-16 w-full bg-white/5 rounded-sm"></div>
<div className="h-10 w-full bg-white/5 rounded-sm"></div>
</div>
</div>
<div className="relative w-8 -mt-10">
<div className="flex flex-col gap-3 w-full" style={{animation: 'streamScroll 6s linear infinite'}}>
<div className="h-10 w-full bg-white/5 rounded-sm"></div>
<div className="h-14 w-full bg-cyan-500/20 rounded-sm border border-cyan-500/30"></div>
<div className="h-8 w-full bg-white/5 rounded-sm"></div>
<div className="h-12 w-full bg-white/5 rounded-sm"></div>
<div className="h-10 w-full bg-white/5 rounded-sm"></div>
<div className="h-14 w-full bg-cyan-500/20 rounded-sm border border-cyan-500/30"></div>
<div className="h-8 w-full bg-white/5 rounded-sm"></div>
<div className="h-12 w-full bg-white/5 rounded-sm"></div>
</div>
</div>
<div className="relative w-8 -mt-32">
<div className="flex flex-col gap-3 w-full" style={{animation: 'streamScroll 10s linear infinite'}}>
<div className="h-14 w-full bg-white/5 rounded-sm"></div>
<div className="h-10 w-full bg-white/5 rounded-sm"></div>
<div className="h-12 w-full bg-indigo-500/20 rounded-sm border border-indigo-500/30"></div>
<div className="h-8 w-full bg-white/5 rounded-sm"></div>
<div className="h-14 w-full bg-white/5 rounded-sm"></div>
<div className="h-10 w-full bg-white/5 rounded-sm"></div>
<div className="h-12 w-full bg-indigo-500/20 rounded-sm border border-indigo-500/30"></div>
<div className="h-8 w-full bg-white/5 rounded-sm"></div>
</div>
</div>
</div>
<div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-sm z-10" style={{animation: 'scanLine 3s ease-in-out infinite'}}></div>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="text-xl font-mono text-cyan-400 font-semibold mb-3 tracking-tight">
                01.
              </div>
<h3 className="leading-snug text-lg font-semibold text-white mb-3">
                Grants &amp; Funding
              </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                High-volume inbound demand requires instant response, strict
                qualification, and structured booking. Our systems handle
                eligibility checks automatically.
              </p>
<div className="mt-auto space-y-2">
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  ECO &amp; Govt Schemes
                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  Eligibility Logic
                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  High-Volume
                </div>
</div>
</div>
</div>

<div className="glass-card flex flex-col pt-6 pr-6 pb-6 pl-6 rounded-2xl group relative overflow-hidden" style={{'--mouse-x': '-146px', '--mouse-y': '-63.75px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-blue-500/10 to-transparent"></div>
<div className="absolute bottom-0 right-0 w-64 h-56 opacity-10 pointer-events-none group-hover:opacity-40 transition-opacity duration-500 overflow-hidden">
<style>
                @keyframes barRise {
                   0%, 100% { height: 20%; opacity: 0.3; }
                   50% { height: 80%; opacity: 1; box-shadow: 0 0 10px rgba(34,211,238,0.2); }
                }
                @keyframes sunPulse {
                   0%, 100% { transform: scale(1); opacity: 0.5; }
                   50% { transform: scale(1.1); opacity: 0.9; }
                }
              </style>
<div className="absolute inset-0" style={{maskImage: 'radial-gradient(circle at bottom right, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at bottom right, black 40%, transparent 80%)'}}>
<div className="absolute bottom-12 right-12 w-16 h-16 rounded-full border border-cyan-500/20 flex items-center justify-center">
<div className="w-8 h-8 bg-cyan-400 rounded-full blur-md" style={{animation: 'sunPulse 4s ease-in-out infinite'}}></div>
<div className="absolute inset-0 rounded-full border border-dashed border-slate-700 animate-[spin_10s_linear_infinite]"></div>
</div>
<div className="absolute bottom-0 right-32 flex items-end gap-2 h-32 transform skew-x-[-10deg]">
<div className="w-2 bg-gradient-to-t from-cyan-900 to-cyan-400 rounded-t-sm" style={{animation: 'barRise 3s ease-in-out infinite', animationDelay: '0s'}}></div>
<div className="w-2 bg-gradient-to-t from-cyan-900 to-cyan-400 rounded-t-sm" style={{animation: 'barRise 3s ease-in-out infinite', animationDelay: '0.5s'}}></div>
<div className="w-2 bg-gradient-to-t from-cyan-900 to-cyan-400 rounded-t-sm" style={{animation: 'barRise 3s ease-in-out infinite', animationDelay: '1.2s'}}></div>
<div className="w-2 bg-gradient-to-t from-cyan-900 to-cyan-400 rounded-t-sm" style={{animation: 'barRise 3s ease-in-out infinite', animationDelay: '0.8s'}}></div>
</div>
</div>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="text-xl font-mono text-cyan-400 font-semibold mb-3 tracking-tight">
                02.
              </div>
<h3 className="leading-snug text-lg font-semibold text-white mb-3">
                Renewables
              </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                From initial interest to booked surveys, our AI systems qualify
                intent, handle objections, and book sales conversations without
                manual chasing.
              </p>
<div className="mt-auto space-y-2">
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  Solar &amp; Batteries
                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  Heat Pumps
                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  Proposal-Ready
                </div>
</div>
</div>
</div>

<div className="glass-card flex flex-col pt-6 pr-6 pb-6 pl-6 rounded-2xl group relative overflow-hidden" style={{'--mouse-x': '-440px', '--mouse-y': '-65.75px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-blue-500/10 to-transparent"></div>
<div className="absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none group-hover:opacity-40 transition-opacity duration-500 overflow-hidden">
<style>
                @keyframes radarSpin {
                   0% { transform: rotate(0deg); }
                   100% { transform: rotate(360deg); }
                }
                @keyframes popupCheck {
                   0%, 10% { transform: scale(0) translateY(10px); opacity: 0; }
                   15%, 85% { transform: scale(1) translateY(0); opacity: 1; }
                   90%, 100% { transform: scale(0.8) translateY(-10px); opacity: 0; }
                }
                @keyframes pingDot {
                   0%, 100% { transform: scale(0); opacity: 0; }
                   5%, 20% { transform: scale(1); opacity: 1; }
                   25% { transform: scale(0); opacity: 0; }
                }
                @keyframes lineConnect {
                   0% { height: 0; opacity: 0; }
                   10% { height: 0; opacity: 1; }
                   20% { height: 100px; opacity: 1; }
                   90% { height: 100px; opacity: 0; }
                   100% { height: 0; opacity: 0; }
                }
              </style>
<div className="absolute bottom-[-20%] right-[-15%] w-80 h-80" style={{transform: 'rotateX(55deg) rotateZ(-15deg)', transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 rounded-full border border-white/10 flex items-center justify-center bg-blue-500/5">
<div className="absolute inset-0 rounded-full border border-white/10 scale-75"></div>
<div className="absolute inset-0 rounded-full border border-white/10 scale-50"></div>
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent origin-center animate-[radarSpin_4s_linear_infinite]" style={{maskImage: 'conic-gradient(from 0deg, black 0deg, transparent 90deg)'}}></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border border-slate-300 shadow-sm z-20"></div>
<div className="absolute top-[25%] right-[25%] z-10">
<div className="absolute bottom-0 left-0 w-[1px] bg-gradient-to-t from-slate-600 via-cyan-400 to-transparent origin-bottom" style={{height: '100px', transform: 'rotate(35deg)', transformOrigin: 'bottom center', animation: 'lineConnect 4s ease-in-out infinite', animationDelay: '0.5s'}}></div>
<div className="w-2 h-2 bg-cyan-500 rounded-full" style={{animation: 'pingDot 4s ease-in-out infinite', animationDelay: '0.5s'}}></div>
<div className="absolute bottom-4 -left-6 bg-[#111] border border-cyan-500/30 px-2 py-0.5 rounded text-[8px] text-cyan-400 font-mono flex items-center gap-1 shadow-sm whitespace-nowrap" style={{animation: 'popupCheck 4s ease-in-out infinite', animationDelay: '0.7s'}}>
<iconify-icon icon="lucide:check" width="8"></iconify-icon>
                    BOOKED
                  </div>
</div>
<div className="absolute bottom-[30%] left-[30%] z-10">
<div className="absolute top-0 right-0 w-[1px] bg-gradient-to-b from-slate-600 via-blue-400 to-transparent origin-top" style={{height: '100px', transform: 'rotate(35deg)', transformOrigin: 'top center', animation: 'lineConnect 4s ease-in-out infinite', animationDelay: '2.5s'}}></div>
<div className="w-2 h-2 bg-blue-500 rounded-full" style={{animation: 'pingDot 4s ease-in-out infinite', animationDelay: '2.5s'}}></div>
<div className="absolute top-4 -right-4 bg-[#111] border border-blue-500/30 px-2 py-0.5 rounded text-[8px] text-blue-400 font-mono flex items-center gap-1 shadow-sm whitespace-nowrap" style={{animation: 'popupCheck 4s ease-in-out infinite', animationDelay: '2.7s'}}>
<iconify-icon icon="lucide:zap" width="8"></iconify-icon>
                    SENT
                  </div>
</div>
</div>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="text-xl font-mono text-cyan-400 font-semibold mb-3 tracking-tight">
                03.
              </div>
<h3 className="leading-snug text-lg font-semibold text-white mb-3">
                Trades &amp; Home Services
              </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                Trades win on speed. Our systems capture inbound enquiries,
                respond instantly 24/7, and book jobs or sales calls
                automatically.
              </p>
<div className="mt-auto space-y-2">
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  Heating &amp; Boilers
                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  Compliance Surveys
                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  Local Demand
                </div>
</div>
</div>
</div>

<div className="glass-card flex flex-col pt-6 pr-6 pb-6 pl-6 rounded-2xl group relative overflow-hidden" style={{'--mouse-x': '-734px', '--mouse-y': '-65.75px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-blue-500/10 to-transparent"></div>
<div className="absolute bottom-0 right-0 w-full h-full opacity-20 pointer-events-none group-hover:opacity-60 transition-opacity duration-500 overflow-hidden">
<style>
                @keyframes signalTravel1 {
                   0% { transform: translate(0, 0) scale(0); opacity: 0; }
                   10% { opacity: 1; transform: translate(0, 0) scale(1); }
                   100% { transform: translate(-120px, -80px); opacity: 0; }
                }
                @keyframes signalTravel2 {
                   0% { transform: translate(0, 0) scale(0); opacity: 0; }
                   10% { opacity: 1; transform: translate(0, 0) scale(1); }
                   100% { transform: translate(-160px, -20px); opacity: 0; }
                }
                @keyframes signalTravel3 {
                   0% { transform: translate(0, 0) scale(0); opacity: 0; }
                   10% { opacity: 1; transform: translate(0, 0) scale(1); }
                   100% { transform: translate(-40px, -140px); opacity: 0; }
                }
                @keyframes nodeActivate {
                   0%, 90% { background-color: #111; border-color: rgba(255,255,255,0.1); box-shadow: none; color: #555; }
                   95% { background-color: #0c4a6e; border-color: #22d3ee; box-shadow: 0 0 10px rgba(34, 211, 238, 0.2); color: #22d3ee; }
                   100% { background-color: #111; border-color: rgba(255,255,255,0.1); box-shadow: none; color: #555; }
                }
              </style>
<div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#111] border border-cyan-500/30 rounded-full flex items-center justify-center z-20 shadow-sm">
<div className="w-24 h-24 border border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-12 h-12 bg-black rounded-full border border-cyan-500/50 flex items-center justify-center">
<div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
</div>
</div>
<div className="absolute bottom-8 right-8 z-10">
<div className="absolute" style={{transform: 'translate(-120px, -80px)'}}>
<div className="w-8 h-8 rounded-md bg-[#111] border border-white/10 flex items-center justify-center transition-colors duration-300" style={{animation: 'nodeActivate 4s infinite 1s'}}>
<iconify-icon icon="lucide:layers" width="14"></iconify-icon>
</div>
</div>
<div className="absolute top-0 right-0 w-[144px] h-[1px] bg-gradient-to-l from-cyan-400 to-transparent origin-right" style={{transform: 'rotate(33.7deg)'}}></div>
<div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full" style={{animation: 'signalTravel1 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s'}}></div>
</div>
<div className="absolute bottom-8 right-8 z-10">
<div className="absolute" style={{transform: 'translate(-160px, -20px)'}}>
<div className="w-8 h-8 rounded-md bg-[#111] border border-white/10 flex items-center justify-center transition-colors duration-300" style={{animation: 'nodeActivate 4s infinite 2s'}}>
<iconify-icon icon="lucide:package" width="14"></iconify-icon>
</div>
</div>
<div className="absolute top-0 right-0 w-[161px] h-[1px] bg-gradient-to-l from-cyan-400 to-transparent origin-right" style={{transform: 'rotate(7.1deg)'}}></div>
<div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full" style={{animation: 'signalTravel2 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 2s'}}></div>
</div>
<div className="absolute bottom-8 right-8 z-10">
<div className="absolute" style={{transform: 'translate(-40px, -140px)'}}>
<div className="w-8 h-8 rounded-md bg-[#111] border border-white/10 flex items-center justify-center transition-colors duration-300" style={{animation: 'nodeActivate 4s infinite 3s'}}>
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
</div>
</div>
<div className="absolute top-0 right-0 w-[145px] h-[1px] bg-gradient-to-l from-cyan-400 to-transparent origin-right" style={{transform: 'rotate(74deg)'}}></div>
<div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full" style={{animation: 'signalTravel3 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 3s'}}></div>
</div>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="text-xl font-mono text-cyan-400 font-semibold mb-3 tracking-tight">
                04.
              </div>
<h3 className="leading-snug text-lg font-semibold text-white mb-3">
                Multi-Service Operators
              </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                For businesses running multiple services, we deploy AI systems
                that route, qualify, and book enquiries correctly across
                different verticals.
              </p>
<div className="mt-auto space-y-2">
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  One System
                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  Smart Routing
                </div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                  Scalable
                </div>
</div>
</div>
</div>
</div><div className="mt-14 flex justify-center relative z-20">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none mix-blend-screen opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<button className="group relative flex items-center px-8 py-4 bg-[#0A0A0A] border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] active:scale-[0.98] [--fx-filter:blur(10px)_liquid-glass(2.7,10)_saturate(1.25)_noise(0.5,1,0)] gap-x-4">

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-600/30 via-cyan-400/30 to-blue-600/30 blur-md mix-blend-screen">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out -skew-x-12"></div>
</div>

<span className="z-10 group-hover:text-blue-50 transition-colors text-base font-semibold text-white tracking-wide relative">Book Discovery Call</span>

<div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-500 group-hover:border-blue-400 group-hover:text-white transition-all duration-300 shadow-sm">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-x-full">
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100">
<iconify-icon className="" icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</div>
</button>
</div>
</section>

<section className="max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<div className="text-center mb-10 md:mb-16">
<h2 className="md:text-4xl flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 text-3xl font-medium text-white tracking-tighter mb-4">
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Real-Time AI Command Center
            </span>
<span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs uppercase animate-pulse animate-in fade-in slide-in-from-bottom-2 duration-700 font-semibold text-emerald-400 tracking-wider font-mono bg-emerald-500/10 border-emerald-500/20 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 shadow-[0_0_10px_rgba(16,185,129,0.2)] backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
              System Live
            </span>
</h2>
<p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Monitor your entire lead operation from a single, intelligent
            dashboard. Optimized for desktop command and mobile response.
          </p>
</div>
<div className="glass-card flex flex-col group select-none lg:h-[750px] overflow-hidden bg-[#0B1120] w-full h-auto rounded-xl relative shadow-2xl" style={{'--mouse-x': '188px', '--mouse-y': '-801px'}}>
<div className="min-h-[750px] flex flex-col z-30 bg-[#0B1120] w-full h-full pt-12 pr-4 pb-12 pl-4 relative gap-y-12 items-center justify-center">

<div className="flex flex-col lg:flex-row gap-8 z-10 w-full perspective-[1000px] gap-x-8 gap-y-8 items-center justify-center">

<div className="border-[8px] overflow-hidden flex flex-col group select-none transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] hover:border-slate-800 transform-gpu bg-[#020617] w-full h-[560px] max-w-[290px] border-slate-900 ring-white/10 ring-1 rounded-[2.5rem] relative shadow-2xl">
<div className="absolute top-0 inset-x-0 h-64 bg-blue-500/10 blur-[60px] pointer-events-none mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[50px] pointer-events-none mix-blend-screen opacity-30"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
<div className="flex bg-transparent h-11 pr-6 pb-2 pl-6 items-end justify-between z-20 relative">
<span className="text-[12px] font-medium text-white tracking-wide">
                    9:41
                  </span>
<div className="flex gap-1.5 items-center pb-0.5">
<iconify-icon className="text-white text-[12px]" icon="lucide:signal"></iconify-icon>
<div className="relative">
<iconify-icon className="text-emerald-400 text-[14px]" icon="lucide:battery-full"></iconify-icon>
<div className="absolute inset-0 bg-emerald-400 blur-[4px] opacity-40 animate-pulse"></div>
</div>
</div>
</div>
<div className="px-5 py-4 flex justify-between items-end border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl sticky top-0 z-30 transition-all duration-300 group-hover:bg-[#020617]/60">
<div className="">
<h2 className="text-xl font-semibold text-white tracking-tight drop-shadow-sm">
                      Pipeline
                    </h2>
<div className="flex items-center gap-2 mt-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<p className="text-xs font-medium text-slate-400 group-hover:text-blue-300 transition-colors duration-300">
                        £42,500 Potential
                      </p>
</div>
</div>
<button className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 active:scale-90 hover:scale-110 hover:shadow-blue-500/50 transition-all duration-300 group/btn relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="relative z-10" icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-hidden p-4 space-y-4 bg-gradient-to-b from-transparent to-[#0B1120] relative z-10">
<div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar snap-x snap-mandatory perspective-[1000px]">
<div className="flex-shrink-0 w-32 snap-center bg-slate-900/40 border border-white/5 p-3.5 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-1 group/card backdrop-blur-sm cursor-pointer">
<div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider group-hover/card:text-blue-400 transition-colors">
                        Qualified
                      </div>
<div className="text-2xl font-bold text-white mt-1 tracking-tight flex items-baseline gap-1">
                        12
                        <span className="text-[10px] text-emerald-400 font-medium">
                          ↑ 2
                        </span>
</div>
</div>
<div className="flex-shrink-0 w-32 snap-center bg-slate-900/40 border border-white/5 p-3.5 rounded-2xl hover:bg-slate-800/60 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1 group/card backdrop-blur-sm cursor-pointer">
<div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider group-hover/card:text-emerald-400 transition-colors">
                        Booked
                      </div>
<div className="text-2xl font-bold text-white mt-1 tracking-tight flex items-baseline gap-1">
                        8
                        <span className="text-[10px] text-emerald-400 font-medium">
                          ↑ 1
                        </span>
</div>
</div>
<div className="flex-shrink-0 w-32 snap-center bg-slate-900/40 border border-white/5 p-3.5 rounded-2xl hover:bg-slate-800/60 hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300 hover:-translate-y-1 group/card backdrop-blur-sm cursor-pointer">
<div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider group-hover/card:text-orange-400 transition-colors">
                        Action
                      </div>
<div className="text-2xl font-bold text-white mt-1 tracking-tight flex items-baseline gap-1">
                        5
                        <span className="text-[10px] text-rose-400 font-medium">
                          ↓ 1
                        </span>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-1 px-1">
<span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                      Live Feed
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
</span>
<span className="text-[10px] text-blue-400 font-medium cursor-pointer hover:text-blue-300 transition-colors">
                      View All
                    </span>
</div>
<div className="space-y-2.5">
<div className="group/item relative bg-slate-900/40 border border-white/5 p-3.5 rounded-2xl hover:bg-slate-800/80 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000"></div>
<div className="flex justify-between mb-2.5 relative z-10">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-bold ring-2 ring-transparent group-hover/item:ring-blue-500/30 transition-all">
                            JD
                          </div>
<div className="">
<div className="text-sm font-semibold text-white group-hover/item:text-blue-200 transition-colors">
                              John Doe
                            </div>
<div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1.5">
<iconify-icon icon="lucide:sun" width="10"></iconify-icon>
                              Solar PV •
                              <span className="text-green-400">Just now</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-white">£8,450</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mt-1 font-medium shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                            Qualified
                          </span>
</div>
</div>
<div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden relative z-10">
<div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[75%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)] relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
<div className="group/item relative bg-slate-900/40 border border-white/5 p-3.5 rounded-2xl hover:bg-slate-800/80 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000"></div>
<div className="flex justify-between mb-2.5 relative z-10">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center text-xs font-bold ring-2 ring-transparent group-hover/item:ring-purple-500/30 transition-all">
                            SL
                          </div>
<div className="">
<div className="text-sm font-semibold text-white group-hover/item:text-purple-200 transition-colors">
                              Sarah Lee
                            </div>
<div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1.5">
<iconify-icon icon="lucide:wind" width="10"></iconify-icon>
                              Heat Pump • 14m ago
                            </div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-white">
                            £12,000
                          </div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-1 font-medium shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                            New Lead
                          </span>
</div>
</div>
<div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden relative z-10">
<div className="bg-blue-500 h-full w-[25%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
<div className="group/item relative bg-slate-900/40 border border-white/5 p-3.5 rounded-2xl hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000"></div>
<div className="flex justify-between mb-2.5 relative z-10">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center text-xs font-bold ring-2 ring-transparent group-hover/item:ring-orange-500/30 transition-all">
                            MW
                          </div>
<div>
<div className="text-sm font-semibold text-white group-hover/item:text-orange-200 transition-colors">
                              Mike Wilson
                            </div>
<div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1.5">
<iconify-icon icon="lucide:flame" width="10"></iconify-icon>
                              Boiler • 2h ago
                            </div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-white">£3,200</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-1 font-medium shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            Booked
                          </span>
</div>
</div>
<div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden relative z-10">
<div className="bg-emerald-500 h-full w-[100%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
</div>
<div className="h-[72px] border-t border-white/5 bg-[#0B1120]/80 backdrop-blur-xl flex items-center justify-around px-2 pb-2 z-30 relative">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="flex flex-col items-center gap-1.5 text-blue-400 pt-2 cursor-pointer hover:scale-110 transition-transform duration-200">
<div className="relative">
<iconify-icon className="drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" icon="lucide:layout-grid" width="22"></iconify-icon>
</div>
<span className="text-[10px] font-bold">Pipeline</span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 pt-2 hover:text-slate-300 transition-colors cursor-pointer hover:scale-110 duration-200 group/nav">
<iconify-icon className="group-hover/nav:drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]" icon="lucide:message-square" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Inbox</span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 pt-2 hover:text-slate-300 transition-colors cursor-pointer hover:scale-110 duration-200 group/nav">
<iconify-icon className="group-hover/nav:drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]" icon="lucide:menu" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Menu</span>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40 backdrop-blur-md"></div>
<style>
                  @keyframes shimmer {
                      100% { transform: translateX(100%); }
                  }
                </style>
</div>

<div className="border-[8px] overflow-hidden flex flex-col group select-none bg-[#020617] w-[290px] h-[560px] border-slate-900 ring-white/10 ring-1 rounded-[2.5rem] relative shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)] hover:border-blue-500/50">
<style>
                  @keyframes slideInMsg {
                      0% { opacity: 0; transform: translateY(20px) scale(0.95); }
                      100% { opacity: 1; transform: translateY(0) scale(1); }
                  }
                  @keyframes pulseBadge {
                      0%, 100% { transform: scale(1); opacity: 1; }
                      50% { transform: scale(1.2); opacity: 0.9; }
                  }
                  @keyframes shimmerText {
                      0% { background-position: 200% center; }
                      100% { background-position: -200% center; }
                  }
                  @keyframes floatEffect {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-3px); }
                  }
                  @keyframes bgPulse {
                      0%, 100% { opacity: 0.3; }
                      50% { opacity: 0.6; }
                  }
                </style>
<div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
<div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[50%] bg-blue-500/5 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 animate-[bgPulse_4s_ease-in-out_infinite]"></div>
<div className="h-11 bg-transparent flex justify-between items-end px-6 pb-2 z-20 relative">
<span className="text-[12px] font-medium text-white tracking-wide">
                    9:41
                  </span>
<div className="flex gap-1.5 items-center pb-0.5">
<iconify-icon className="text-white text-[12px]" icon="lucide:signal"></iconify-icon>
<iconify-icon className="text-white text-[12px]" icon="lucide:wifi"></iconify-icon>
<div className="relative">
<iconify-icon className="text-white text-[14px]" icon="lucide:battery-full"></iconify-icon>
<div className="absolute inset-0 bg-white/50 blur-[2px] opacity-0 animate-[pulse_2s_infinite]"></div>
</div>
</div>
</div>
<div className="px-5 py-4 flex justify-between items-end border-b border-slate-800/50 bg-[#020617]/90 backdrop-blur-md sticky top-0 z-20">
<div className="">
<h2 className="text-xl font-semibold text-white tracking-tight group-hover:text-blue-100 transition-colors duration-300">
                      Inbox
                    </h2>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
<p className="text-xs text-slate-400 font-medium group-hover:text-blue-300/80 transition-colors duration-300">
                        3 Unread Messages
                      </p>
</div>
</div>
<button className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 active:bg-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-sm border border-slate-700/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:border-blue-500/30">
<iconify-icon className="" icon="lucide:search" width="18"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-0 no-scrollbar bg-[#020617]/50 relative z-10">
<div className="p-4 border-b border-slate-800/50 bg-slate-900/40 border-l-[3px] border-l-blue-500 active:bg-slate-800/60 transition-colors hover:bg-slate-900/60 cursor-pointer" style={{animation: 'slideInMsg 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both'}}>
<div className="flex justify-between items-start mb-1.5">
<div className="flex items-center gap-3">
<div className="relative group/avatar">
<div className="w-11 h-11 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover/avatar:border-blue-500/50 group-hover/avatar:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                            JD
                          </div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-900 rounded-full flex items-center justify-center ring-2 ring-[#020617]">
<div className="w-2 h-2 bg-green-500 rounded-full animate-[pulse_2s_infinite]"></div>
</div>
</div>
<div className="">
<div className="text-sm font-semibold text-white group-hover:text-blue-200 transition-colors">
                            John Doe
                          </div>
<div className="text-[11px] text-blue-400 font-medium flex items-center gap-1">
                            Solar PV Enquiry
                            <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></span>
</div>
</div>
</div>
<span className="text-[10px] text-blue-400 font-semibold bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                        Now
                      </span>
</div>
<p className="text-xs text-slate-300 mt-2 line-clamp-2 pl-[56px] leading-relaxed group-hover:text-slate-200 transition-colors">
<span className="font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmerText_3s_linear_infinite]">
                        AI Agent:
                      </span>
                      I've checked your roof orientation and you qualify for the
                      grant. Would you like to proceed?
                    </p>
</div>
<div className="p-4 border-b border-slate-800/50 bg-slate-900/20 active:bg-slate-800/50 transition-colors hover:bg-slate-900/40 cursor-pointer" style={{animation: 'slideInMsg 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both'}}>
<div className="flex justify-between items-start mb-1.5">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center text-xs font-bold group-hover:border-purple-500/40 transition-colors">
                          SL
                        </div>
<div className="">
<div className="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors">
                            Sarah Lee
                          </div>
<div className="text-[11px] text-slate-400 font-medium">
                            Documentation
                          </div>
</div>
</div>
<span className="text-[10px] text-slate-500 font-medium">
                        14m
                      </span>
</div>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 pl-[56px] leading-relaxed group-hover:text-slate-300 transition-colors">
                      I've uploaded the utility bills you requested for the
                      application.
                    </p>
</div>
<div className="p-4 border-b border-slate-800/50 active:bg-slate-800/50 transition-colors hover:bg-slate-900/20 cursor-pointer" style={{animation: 'slideInMsg 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both'}}>
<div className="flex justify-between items-start mb-1.5">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center text-xs font-bold group-hover:border-orange-500/40 transition-colors">
                          MW
                        </div>
<div className="">
<div className="text-sm font-semibold text-white group-hover:text-orange-200 transition-colors">
                            Mike Wilson
                          </div>
<div className="text-[11px] text-slate-400 font-medium">
                            Call Summary
                          </div>
</div>
</div>
<span className="text-[10px] text-slate-500 font-medium">
                        1h
                      </span>
</div>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 pl-[56px] leading-relaxed group-hover:text-slate-300 transition-colors">
<span className="text-slate-500 font-medium">System:</span>
                      Call duration 4m 12s. Outcome: Booked for Tuesday 10am.
                    </p>
</div>
<div className="p-4 border-b border-slate-800/50 active:bg-slate-800/50 transition-colors hover:bg-slate-900/20 cursor-pointer" style={{animation: 'slideInMsg 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both'}}>
<div className="flex justify-between items-start mb-1.5">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-full bg-slate-800/50 text-slate-400 border border-slate-700/50 flex items-center justify-center text-xs font-bold group-hover:border-slate-600 transition-colors">
                          DK
                        </div>
<div className="">
<div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                            David King
                          </div>
<div className="text-[11px] text-slate-500 font-medium">
                            General Enquiry
                          </div>
</div>
</div>
<span className="text-[10px] text-slate-500 font-medium">
                        3h
                      </span>
</div>
<p className="text-xs text-slate-500 mt-2 line-clamp-2 pl-[56px] leading-relaxed group-hover:text-slate-400 transition-colors">
                      Can you tell me more about the battery storage options
                      available for my existing system?
                    </p>
</div>
</div>
<div className="h-[72px] border-t border-slate-800 bg-[#0B1120]/90 backdrop-blur-lg flex items-center justify-around px-2 pb-2 z-20 relative">
<div className="flex flex-col items-center gap-1.5 text-slate-500 pt-2 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-pointer hover:scale-110 duration-200">
<iconify-icon icon="lucide:layout-grid" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Pipeline</span>
</div>
<div className="flex flex-col items-center gap-1.5 text-blue-500 pt-2 relative cursor-pointer hover:scale-110 transition-transform duration-200" style={{animation: 'floatEffect 3s ease-in-out infinite'}}>
<div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0B1120] animate-[pulseBadge_2s_infinite] shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
<div className="absolute inset-0 bg-blue-500/20 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
<iconify-icon className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" icon="lucide:message-square" width="22"></iconify-icon>
<span className="text-[10px] font-medium font-semibold">
                      Inbox
                    </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 pt-2 opacity-60 hover:opacity-100 hover:text-white transition-all cursor-pointer hover:scale-110 duration-200">
<iconify-icon className="" icon="lucide:menu" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Menu</span>
</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30 pointer-events-none"></div>
</div>

<div className="border-[8px] overflow-hidden flex flex-col group select-none bg-[#020617] w-[290px] h-[560px] border-slate-900 ring-white/10 ring-1 rounded-[2.5rem] relative shadow-2xl">
<div className="flex shrink-0 w-full h-11 pr-6 pb-2 pl-6 items-end justify-between bg-[#020617] z-20">
<span className="text-[12px] font-medium tracking-wide text-white">
                    9:41
                  </span>
<div className="flex items-center gap-1.5 pb-0.5">
<iconify-icon className="text-[12px] text-white" icon="lucide:signal"></iconify-icon>
<iconify-icon className="text-[12px] text-white" icon="lucide:wifi"></iconify-icon>
<div className="relative">
<iconify-icon className="text-[14px] text-white" icon="lucide:battery-full"></iconify-icon>
</div>
</div>
</div>
<div className="flex shrink-0 bg-[#020617]/80 border-slate-800/50 border-b pt-4 pr-5 pb-4 pl-5 backdrop-blur-md items-end justify-between z-10 sticky top-0">
<div className="">
<h2 className="text-xl font-semibold tracking-tight text-white">
                      Calendar
                    </h2>
<div className="mt-1 flex items-center gap-1.5">
<span className="text-xs font-medium text-slate-400">
                        October 2024
                      </span>
<iconify-icon className="text-[10px] text-slate-500" icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
<div className="flex gap-2">
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white">
<iconify-icon className="" icon="lucide:chevron-left" width="16"></iconify-icon>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white">
<iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto scrollbar-hide bg-gradient-to-b from-[#020617] to-[#0B1120] pt-4 pr-4 pb-4 pl-4 relative">
<div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-2 -mx-4 px-4 snap-x">
<div className="flex min-w-[3.5rem] shrink-0 flex-col items-center rounded-xl border border-slate-800 bg-slate-900/50 p-2.5 snap-center">
<span className="text-[10px] font-medium uppercase text-slate-500">
                        Mon
                      </span>
<span className="text-sm font-semibold text-slate-400">
                        21
                      </span>
</div>
<div className="flex min-w-[3.5rem] shrink-0 flex-col bg-blue-500/10 border-blue-500/30 border rounded-xl pt-2.5 pr-2.5 pb-2.5 pl-2.5 shadow-[0_0_10px_rgba(59,130,246,0.1)] items-center snap-center">
<span className="text-[10px] font-medium uppercase text-blue-400">
                        Tue
                      </span>
<span className="text-sm font-semibold text-white">22</span>
<div className="mt-1 h-1 w-1 rounded-full bg-blue-400"></div>
</div>
<div className="flex min-w-[3.5rem] shrink-0 flex-col items-center rounded-xl border border-slate-800 bg-slate-900/50 p-2.5 snap-center">
<span className="text-[10px] font-medium uppercase text-slate-500">
                        Wed
                      </span>
<span className="text-sm font-semibold text-slate-400">
                        23
                      </span>
</div>
<div className="flex min-w-[3.5rem] shrink-0 flex-col bg-slate-900/50 border-slate-800 border rounded-xl pt-2.5 pr-2.5 pb-2.5 pl-2.5 items-center snap-center">
<span className="text-[10px] font-medium uppercase text-slate-500">
                        Thu
                      </span>
<span className="text-sm font-semibold text-slate-400">
                        24
                      </span>
<div className="mt-1 h-1 w-1 rounded-full bg-slate-600"></div>
</div>
<div className="flex min-w-[3.5rem] shrink-0 flex-col items-center rounded-xl border border-slate-800 bg-slate-900/50 p-2.5 snap-center">
<span className="text-[10px] font-medium uppercase text-slate-500">
                        Fri
                      </span>
<span className="text-sm font-semibold text-slate-400">
                        25
                      </span>
</div>
</div>
<div className="space-y-4 pb-4">
<div className="flex items-center justify-between px-1">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Today's Schedule
                      </span>
<span className="text-[10px] font-medium text-blue-400">
                        8 Bookings
                      </span>
</div>
<div className="group relative flex gap-4">
<div className="flex flex-col items-center pt-1">
<span className="text-xs font-medium text-slate-400">
                          09:00
                        </span>
<div className="my-2 h-full w-[1px] bg-slate-800"></div>
</div>
<div className="flex-1 cursor-pointer rounded-2xl border border-slate-800/60 bg-slate-900/40 p-3 transition-all hover:border-yellow-500/30 hover:bg-slate-800/60 active:scale-[0.98]">
<div className="mb-2 flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500">
<iconify-icon className="" icon="lucide:sun" width="12"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-semibold text-yellow-500 tracking-wide">
                              Solar Booking
                            </span>
</div>
<iconify-icon className="text-slate-600 group-hover:text-slate-400" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>
<div className="mb-1 text-sm font-medium text-white">
                          John Smith Residence
                        </div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<iconify-icon icon="lucide:map-pin" width="10"></iconify-icon>
<span className="">142 Oak Avenue, London</span>
</div>
<div className="mt-3 flex items-center gap-2 border-t border-slate-800/50 pt-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-[9px] font-bold text-blue-400">
                            JD
                          </div>
<span className="text-[10px] text-slate-500">
                            Assigned to
                            <span className="text-slate-300">John Doe</span>
</span>
</div>
</div>
</div>
<div className="group relative flex gap-4">
<div className="flex flex-col items-center pt-1">
<span className="text-xs font-medium text-slate-400">
                          11:30
                        </span>
<div className="my-2 h-full w-[1px] bg-slate-800"></div>
</div>
<div className="flex-1 cursor-pointer rounded-2xl border border-slate-800/60 bg-slate-900/40 p-3 transition-all hover:border-cyan-500/30 hover:bg-slate-800/60 active:scale-[0.98]">
<div className="mb-2 flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500">
<iconify-icon icon="lucide:wind" width="12"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-semibold text-cyan-500 tracking-wide">
                              Heat Pump Booking
                            </span>
</div>
<iconify-icon className="text-slate-600 group-hover:text-slate-400" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>
<div className="mb-1 text-sm font-medium text-white">
                          Sarah Lee Residence
                        </div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<iconify-icon icon="lucide:map-pin" width="10"></iconify-icon>
<span className="">88 Park Lane, Manchester</span>
</div>
<div className="mt-3 flex items-center gap-2 border-t border-slate-800/50 pt-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[9px] font-bold text-cyan-400">
                            MW
                          </div>
<span className="text-[10px] text-slate-500">
                            Assigned to
                            <span className="text-slate-300">Mike Wilson</span>
</span>
</div>
</div>
</div>
<div className="group relative flex gap-4">
<div className="flex flex-col items-center pt-1">
<span className="text-xs font-medium text-slate-400">
                          14:00
                        </span>
<div className="my-2 h-full w-[1px] bg-slate-800"></div>
</div>
<div className="flex-1 cursor-pointer rounded-2xl border border-slate-800/60 bg-slate-900/40 p-3 transition-all hover:border-orange-500/30 hover:bg-slate-800/60 active:scale-[0.98]">
<div className="mb-2 flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
<iconify-icon icon="lucide:flame" width="12"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-semibold text-orange-500 tracking-wide">
                              Boiler Service
                            </span>
</div>
<iconify-icon className="text-slate-600 group-hover:text-slate-400" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>
<div className="mb-1 text-sm font-medium text-white">
                          Michael Chen Apt
                        </div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<iconify-icon icon="lucide:map-pin" width="10"></iconify-icon>
<span className="">23 High St, Birmingham</span>
</div>
<div className="mt-3 flex items-center gap-2 border-t border-slate-800/50 pt-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-[9px] font-bold text-orange-400">
                            DK
                          </div>
<span className="text-[10px] text-slate-500">
                            Assigned to
                            <span className="text-slate-300">David King</span>
</span>
</div>
</div>
</div>
<div className="group relative flex gap-4">
<div className="flex flex-col items-center pt-1">
<span className="text-xs font-medium text-slate-400">
                          16:30
                        </span>
<div className="my-2 h-full w-[1px] bg-slate-800"></div>
</div>
<div className="flex-1 cursor-pointer rounded-2xl border border-slate-800/60 bg-slate-900/40 p-3 transition-all hover:border-purple-500/30 hover:bg-slate-800/60 active:scale-[0.98]">
<div className="mb-2 flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
<iconify-icon icon="lucide:clipboard-list" width="12"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-semibold text-purple-500 tracking-wide">
                              Site Survey
                            </span>
</div>
<iconify-icon className="text-slate-600 group-hover:text-slate-400" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>
<div className="mb-1 text-sm font-medium text-white">
                          Emma Watson House
                        </div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<iconify-icon icon="lucide:map-pin" width="10"></iconify-icon>
<span className="">45 River Rd, Bristol</span>
</div>
<div className="mt-3 flex items-center gap-2 border-t border-slate-800/50 pt-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20 text-[9px] font-bold text-purple-400">
                            JD
                          </div>
<span className="text-[10px] text-slate-500">
                            Assigned to
                            <span className="text-slate-300">John Doe</span>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="z-20 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both delay-300">
<button className="group flex items-center justify-center gap-2 md:gap-3 py-3 px-6 md:py-4 md:px-8 hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:ring-white/40 overflow-hidden font-semibold text-white bg-gradient-to-b from-blue-500 to-blue-600 ring-white/20 ring-1 rounded-full relative shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
<span className="text-shadow-sm text-sm md:text-lg tracking-tight whitespace-nowrap">
                  Book your discovery call now
                </span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<section className="animate-enter delay-200 max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6 relative">

<div className="text-center mb-16">
<h2 className="md:text-5xl flex flex-col items-center gap-3 animate-enter group text-3xl font-semibold text-white tracking-tighter text-center mb-6">
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md mb-2 transition-all duration-300 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</div>
<span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">System Metrics</span>
</div>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Proven Performance
            </span>
</h2>
<p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Autonomous infrastructure that outperforms manual teams in speed,
            scale, and reliability.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group md:col-span-2 p-8 md:p-10 flex flex-col overflow-hidden hover:border-white/10 transition-colors duration-500 bg-[#0A0A0A] border-white/5 border rounded-[2.5rem] relative justify-between">

<style>
              @keyframes radar-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes grid-drift {
                0% { background-position: 0 0; }
                100% { background-position: 20px 20px; }
              }
              @keyframes signal-pulse {
                0%, 100% { opacity: 0.2; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(1.05); }
              }
            </style>

<div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

<div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700" style="background-image: linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px); 
                          background-size: 40px 40px; 
                          mask-image: radial-gradient(circle at top left, black, transparent 70%);
                          -webkit-mask-image: radial-gradient(circle at top left, black, transparent 70%);
                          animation: grid-drift 20s linear infinite;">
</div>

<div className="absolute -top-[50%] -right-[50%] w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen pointer-events-none">
<div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,rgba(59,130,246,0.1)_360deg)]" style={{animation: 'radar-spin 8s linear infinite'}}></div>
</div>

<div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full mix-blend-screen opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
</div>

<div className="relative z-10">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-7xl md:text-8xl font-semibold text-white tracking-tighter relative inline-block">
                  28
                  
<span className="absolute -top-1 -right-3 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</span>
</span>
<span className="text-xl md:text-2xl text-slate-500 font-medium">
                  ms
                </span>
</div>
<div className="text-sm font-mono text-slate-500 mb-8 uppercase tracking-widest flex items-center gap-3">
                Global Response Latency
                
<div className="h-px w-8 bg-slate-800 group-hover:w-16 group-hover:bg-blue-500/50 transition-all duration-700"></div>
</div>
<p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl relative">
<span className="absolute -left-5 -top-1 text-blue-500/20 text-4xl font-serif">"</span>
                From integration to execution, the Dominate API suite is
                flawless. The latency on our lead response dropped
                significantly, giving us a competitive edge in high-frequency
                local markets."
              </p>
</div>
<div className="relative z-10 flex items-center gap-4 mt-12 pt-8 border-t border-white/5 group-hover:border-white/10 transition-colors duration-500">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden relative group/avatar">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
<img alt="David Chen" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity relative z-0" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div>
<div className="text-white font-semibold group-hover:text-blue-100 transition-colors">David Chen</div>
<div className="text-sm text-slate-500">CTO, SolarLink</div>
</div>
<div className="ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/5 text-slate-600 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all duration-300 shadow-sm">
<iconify-icon icon="lucide:hexagon" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative md:col-span-1 md:row-span-2 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col overflow-hidden hover:border-white/10 transition-colors duration-500">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent opacity-30 pointer-events-none"></div>
<div className="relative z-10 mb-12">
<span className="text-7xl md:text-8xl font-semibold bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tighter">
                99
                <span className="text-4xl text-blue-500/50 align-top">%</span>
</span>
<div className="flex gap-4 mt-8 mb-4">
<div className="w-1 h-12 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
<p className="text-slate-300 font-medium text-lg leading-snug py-1">
                  Qualification accuracy with our decentralized agent network.
                </p>
</div>
</div>
<div className="relative z-10 mt-auto">
<p className="text-slate-400 leading-relaxed mb-10 font-light">
                "Migrating our call center to Dominate's AI infrastructure was
                seamless. We've seen zero downtime in 18 months of operation,
                even during peak winter demand."
              </p>
<div className="w-full h-px bg-white/10 mb-6"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
<img alt="James Wu" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=a04258114e29026302d"/>
</div>
<div>
<div className="text-white font-semibold">James Wu</div>
<div className="text-sm text-slate-500">
                    Director, HeatPump Pro
                  </div>
</div>
</div>
</div>
</div>

<div className="group relative md:col-span-1 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden hover:border-white/10 transition-colors duration-500 min-h-[340px]">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 mb-6 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="lucide:heart" width="18"></iconify-icon>
</div>
<p className="text-slate-300 mb-8 leading-relaxed font-light">
              "Their conversational AI took our booking rates to the next level.
              The team truly understands lead psychology and automation."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
<img alt="Stani Kulechov" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div>
<div className="text-white text-sm font-semibold">
                  Stani Kulechov
                </div>
<div className="text-xs text-slate-500">Founder, EcoHomes</div>
</div>
</div>
</div>

<div className="group md:col-span-1 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 min-h-[340px] bg-[#F8FAFC] border-white/5 border rounded-[2.5rem] p-8 relative justify-between">
<style>
              @keyframes blob-float {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(15px, -20px) scale(1.05); }
                66% { transform: translate(-10px, 15px) scale(0.95); }
              }
              @keyframes scan-beam {
                0% { transform: translateX(-100%) skewX(-20deg); opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { transform: translateX(200%) skewX(-20deg); opacity: 0; }
              }
            </style>

<div className="absolute inset-0 pointer-events-none rounded-[2.5rem] overflow-hidden">

<div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/10 rounded-full blur-[60px] mix-blend-multiply animate-[blob-float_10s_ease-in-out_infinite]"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cyan-400/10 rounded-full blur-[60px] mix-blend-multiply animate-[blob-float_12s_ease-in-out_infinite_reverse]"></div>

<div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-700" style="background-image: linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px);
                           background-size: 32px 32px;
                           mask-image: radial-gradient(circle at top right, black, transparent 70%);
                           -webkit-mask-image: radial-gradient(circle at top right, black, transparent 70%);">
</div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-[scan-beam_6s_linear_infinite]" style={{animationDelay: '2s'}}></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply pointer-events-none"></div>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-500 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-blue-500 shadow-sm">
<iconify-icon className="fill-current" icon="lucide:star" width="18"></iconify-icon>
</div>
<p className="text-slate-800 font-medium mb-8 leading-relaxed">
                "The team nailed our MVP workflow with fast turnaround and
                incredible attention to detail. The final product felt polished
                and professional."
              </p>
</div>
<div className="relative z-10 flex items-center gap-3 border-t border-slate-300/50 pt-6">
<div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden border border-slate-400/30 group-hover:border-blue-400/30 transition-colors">
<img alt="Jeanne Grey" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704g"/>
</div>
<div>
<div className="text-slate-900 text-sm font-semibold">Jeanne Grey</div>
<div className="text-xs text-slate-500 font-semibold">
                  Director, BuildTech
                </div>
</div>
<div className="ml-auto text-slate-400 group-hover:text-blue-500 transition-colors transform group-hover:rotate-90 duration-500">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
