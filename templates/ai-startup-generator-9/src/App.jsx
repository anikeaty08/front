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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="mx-auto max-w-7xl border-l border-r border-dashed border-gray-300 min-h-screen relative bg-gray-50/50">

<div className="absolute inset-0 pointer-events-none flex justify-between px-4 opacity-20 z-0">
<div className="w-px h-full bg-gray-300"></div>
<div className="w-px h-full bg-gray-300"></div>
<div className="w-px h-full bg-gray-300"></div>
</div>
<main className="relative z-10 p-4 md:p-6 lg:p-8 space-y-6">

<section className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0f1115] text-white min-h-[650px] flex flex-col justify-between p-8 lg:p-12 shadow-2xl shadow-gray-200">

<div className="absolute inset-0 z-0">
<img alt="Abstract 3D" className="opacity-40 mix-blend-overlay w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#0f1115] via-transparent to-[#0f1115]/80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full flex justify-center">
<nav className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 flex items-center gap-6 text-sm">

<a className="inline-flex items-center justify-center h-[32px] px-3 font-manrope font-semibold text-white text-base tracking-tight" href="#">
                            Instant<span className="text-emerald-500">Company</span>
</a>
<a className="text-gray-300 hover:text-white transition-colors font-sans hidden md:block" href="#">Generate</a>
<a className="text-gray-300 hover:text-white transition-colors font-sans hidden sm:block" href="#">How it Works</a>
<a className="text-gray-300 hover:text-white transition-colors font-sans hidden md:block" href="#">Pricing</a>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-sm hover:bg-emerald-50 transition-colors font-sans ml-2">
                            Explore Categories
                        </button>
</nav>
</div>

<div className="relative z-10 mt-auto max-w-4xl pb-4">
<h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 text-white font-manrope font-medium tracking-tighter">
                        Turn Any Idea Into a <br/>
<span className="text-gray-400 font-manrope font-medium tracking-tighter">Company</span> <br/>
                        in 60 Seconds.
                    </h1>
<p className="text-lg md:text-xl text-gray-300 font-sans mb-10 max-w-2xl leading-relaxed">
                        Stop overthinking and start building. Enter a 5-word prompt and receive a full brand identity, value proposition, and go-to-market strategy instantly.
                    </p>

<div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-colors font-sans text-base backdrop-blur-sm" placeholder="e.g., SaaS for dog walkers" type="text"/>
<button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-sans font-medium hover:bg-emerald-400 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2">
                            Generate My Business <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-12">

<div className="lg:col-span-4 flex flex-col justify-between space-y-12 py-4">
<div className="flex justify-between border-b border-gray-200 pb-4">
<span className="text-sm text-black font-sans">01</span>
<div className="flex gap-2 text-gray-400 text-xs font-mono">
<span className="font-sans">02</span>
<span className="font-sans">03</span>
<span className="font-sans">04</span>
</div>
</div>
<div className="">
<h3 className="text-3xl lg:text-4xl text-gray-900 leading-tight mb-6 font-manrope font-medium tracking-tighter">
                            The AI <br/>
<span className="text-gray-400 font-manrope font-medium tracking-tighter">Business</span> <br/>
                            Architect.
                        </h3>
<p className="text-lg text-gray-500 leading-relaxed mb-8 font-sans">
                            InstantCompany.com is an AI-powered business architect. By analyzing market trends and lean startup principles, our engine takes your basic idea and builds a high-fidelity business blueprint. We don't just give you a name; we give you the foundation—from domain availability to pricing models and initial landing page copy.
                        </p>
<button className="group flex items-center gap-3 bg-gray-900 text-white pl-5 pr-2 py-2 rounded-full text-base font-medium hover:bg-gray-800 transition-all">
<span className="font-sans">See Examples</span>
<span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="lg:col-span-4 relative group cursor-pointer">
<div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-gray-200">
<img alt="Clean Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
<div className="absolute top-6 left-6 text-white mix-blend-difference">
<p className="text-lg tracking-tight font-sans">Brand Identity</p>
<p className="text-sm text-gray-300 font-sans">Logo &amp; Domains</p>
</div>
<div className="absolute bottom-6 w-full px-6 flex justify-between items-end text-white">
<div>
<p className="text-xl font-manrope font-medium tracking-tighter">Complete Visual Style</p>
<button className="mt-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition font-sans">
                                     Explore <iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<span className="text-5xl opacity-50 font-manrope font-medium tracking-tighter">02</span>
</div>
</div>
</div>

<div className="lg:col-span-4 relative group cursor-pointer">
<div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-[#1a1a1a]">
<img alt="Dark Tech Texture" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>
<div className="absolute top-6 left-6 text-white">
<p className="text-lg tracking-tight font-sans">Go-To-Market</p>
<p className="text-sm text-gray-400 font-sans">Positioning</p>
</div>
<div className="absolute bottom-6 w-full px-6 flex justify-between items-end text-white">
<div className="max-w-[70%]">
<p className="text-xl mb-2 font-manrope font-medium tracking-tighter">Launch Strategy</p>
<p className="text-sm text-gray-400 line-clamp-2 font-sans">Receive validated pricing models and structured UVPs for immediate use.</p>
<button className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition font-sans">
                                     Read More <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<span className="absolute bottom-6 right-6 text-5xl opacity-50 font-manrope font-medium tracking-tighter">03</span>
</div>
</div>

<div className="flex justify-end mt-4 gap-3">
<button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition text-gray-500 hover:text-gray-900">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-black transition">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-b border-gray-200/60 bg-white/50">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs text-gray-500 mb-6 shadow-sm font-sans">
                            Process
                        </div>
<h2 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-[1.1] font-manrope font-medium tracking-tighter">
                            How It Works
                        </h2>
<p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-sans">
                            From idea to launch-ready in three simple steps.
                        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10">

<div className="group flex flex-col items-center text-center">

<div className="relative h-56 w-full flex items-center justify-center mb-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] group-hover:border-emerald-100">

<div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="relative z-10 w-4/5">
<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 transform transition-all duration-500 group-hover:-translate-y-1">
<div className="flex gap-2 items-center mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20 border border-emerald-400/50"></div>
</div>
<div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
<div className="h-1.5 w-1/2 bg-gray-300 rounded-full"></div>
<div className="w-0.5 h-3 bg-emerald-500 animate-pulse ml-1"></div>
</div>
</div>
</div>
</div>
<h3 className="text-lg text-gray-900 mb-3 tracking-tight font-sans">Step 1: The Spark</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto font-sans">
                                Type a simple description of your idea (e.g., "SaaS for dog walkers").
                            </p>
</div>

<div className="group flex flex-col items-center text-center">

<div className="relative h-56 w-full flex items-center justify-center mb-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] group-hover:border-emerald-100">

<div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="relative z-10 w-full flex items-center justify-center h-full">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-dashed border-emerald-500/30 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-24 h-24 rounded-full border border-gray-200"></div>
</div>
<div className="relative bg-white w-14 h-14 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
<iconify-icon className="text-emerald-500 text-2xl" icon="solar:cpu-linear"></iconify-icon>
<div className="absolute -right-1 -top-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></div>
</div>

<div className="absolute top-8 left-8 bg-white p-2 rounded-lg shadow-sm border border-gray-100 transform transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
<iconify-icon className="text-gray-400" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="absolute bottom-8 right-8 bg-white p-2 rounded-lg shadow-sm border border-gray-100 transform transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
<iconify-icon className="text-gray-400" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-lg text-gray-900 mb-3 tracking-tight font-sans">Step 2: The Synthesis</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto font-sans">
                                Our AI analyzes the niche, identifies the target persona, and scouts the competitive landscape.
                            </p>
</div>

<div className="group flex flex-col items-center text-center">

<div className="relative h-56 w-full flex items-center justify-center mb-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] group-hover:border-emerald-100">

<div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="relative z-10 w-4/5">
<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 transform transition-all duration-500 group-hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:case-minimalistic-linear"></iconify-icon>
</div>
<span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">Output Ready</span>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
<div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
</div>
<div className="mt-4 pt-3 border-t border-gray-50 flex gap-2">
<div className="h-7 flex-1 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-gray-400 text-sm" icon="solar:global-linear"></iconify-icon>
</div>
<div className="h-7 flex-1 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-gray-400 text-sm" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<h3 className="text-lg text-gray-900 mb-3 tracking-tight font-sans">Step 3: The Reveal</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto font-sans">
                                Get a complete digital dossier: names, domains, logos, positioning, and a ready-to-use pitch.
                            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-gray-50 border-gray-200/60 border-b pt-24 pb-24 relative">
<div className="lg:px-8 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 max-w-4xl leading-[1.05] font-manrope font-medium tracking-tighter">
                            Key Benefits
                        </h2>
<a className="group inline-flex items-center text-sm text-gray-900 hover:text-emerald-600 transition-colors border-b border-gray-900 hover:border-emerald-600 pb-0.5 whitespace-nowrap font-sans" href="#">
                            View Example Output
                            <iconify-icon className="ml-1 text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 min-h-[520px] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500 group rounded-3xl">
<div className="">
<h3 className="text-xl text-gray-900 mb-6 leading-snug font-manrope font-medium tracking-tighter">
                                    Zero Friction<br/>Start
                                </h3>
<p className="text-gray-500 leading-relaxed text-sm font-sans">
                                    Eliminate the weeks of brainstorming that kill most ideas before they start. Go from raw thought to structured venture instantly.
                                </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-gray-100 mt-auto">
<img alt="Profile" className="w-10 h-10 rounded-full object-cover bg-gray-100 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-sm text-gray-900 font-sans">Sarah J.</p>
<p className="text-xs text-gray-500 font-sans">Founding Designer</p>
</div>
</div>
</div>

<div className="relative min-h-[520px] bg-gray-900 overflow-hidden group rounded-3xl">
<img alt="Brand Colors Abstract" className="group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 opacity-70 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&amp;fit=crop&amp;w=800"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
<span className="text-white text-lg tracking-tight mix-blend-overlay font-sans">Brand Intelligence©</span>
</div>
<div className="absolute bottom-8 left-8 right-8 z-10">
<p className="text-white text-sm mb-4 font-sans max-w-[200px]">Get names that aren't just cool, but have available domains and high brandability scores.</p>
<span className="text-white/60 text-xs uppercase tracking-widest font-sans">Smart Analysis</span>
</div>
</div>

<div className="min-h-[520px] flex flex-col overflow-hidden group text-center bg-white pt-8 pr-8 pb-8 pl-8 relative items-center justify-between rounded-3xl">
<p className="text-gray-500 text-lg mt-8 font-sans">Structured Logic &amp; <br/> Pricing Models</p>
<div className="relative flex items-center justify-center w-56 h-56 my-8">
<svg className="w-full h-full transform -rotate-90 drop-shadow-xl" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="90" stroke="#f3f4f6" strokeWidth="1.5"></circle>
<circle className="transition-all duration-1000 ease-out group-hover:stroke-[3]" cx="100" cy="100" fill="none" r="90" stroke="#10b981" stroke-dasharray="565" stroke-dashoffset="0" strokeWidth="1.5"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-4xl text-gray-900 font-manrope font-medium tracking-tighter">100%</span>
<span className="text-xs text-gray-500 font-sans mt-1">Validated UVP</span>
</div>
</div>
</div>

<div className="min-h-[520px] flex flex-col group overflow-hidden text-white bg-[#0f1115] pt-8 pr-8 pb-8 pl-8 relative justify-between rounded-3xl">
<div className="flex justify-between items-start z-10">
<span className="text-xl font-manrope font-medium tracking-tighter">Investor Ready</span>
<iconify-icon className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="z-10 relative">
<p className="text-gray-400 leading-relaxed mb-12 max-w-[260px] text-sm font-sans">
                                    Use the generated output as a baseline for your first pitch deck, landing page copy, or investor memo.
                                </p>
<div className="space-y-2 text-sm text-gray-400 font-mono">
<a className="block hover:text-emerald-400 transition-colors font-sans" href="#">Pitch Deck Exports</a>
<a className="block hover:text-emerald-400 transition-colors font-sans" href="#">Copy Frameworks</a>
<a className="block hover:text-emerald-400 transition-colors font-sans" href="#">Go-To-Market Plans</a>
</div>
</div>
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#0f1115] rounded-[2.5rem] p-8 lg:p-16 overflow-hidden shadow-2xl mt-8">

<div className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center">
<span className="text-[12rem] lg:text-[18rem] text-white/[0.02] leading-none font-manrope font-medium tracking-tighter">PLANS</span>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
<span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400 mb-6 font-sans">
                        Pricing
                    </span>
<h2 className="text-4xl md:text-5xl text-white mb-4 font-manrope font-medium tracking-tighter">
                        Pay as you <br/> generate.
                    </h2>
<p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed font-sans">
                        Start for free. Upgrade when you're ready for deep-dive market analysis and advanced asset exports.
                    </p>
</div>

<div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

<div className="group relative flex flex-col p-8 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-colors duration-300">
<div className="mb-6 flex items-start justify-between">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:box-linear"></iconify-icon>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl text-white font-manrope font-medium tracking-tighter">$0</span>
</div>
<h3 className="text-lg text-white mt-4 font-sans">Spark</h3>
<p className="text-sm text-gray-400 mt-2 leading-relaxed font-sans">Basic concept validation and brand generation.</p>
</div>
<button className="w-full bg-white text-black py-3 rounded-xl text-sm mb-8 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-sans">
                            Start Building <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="space-y-4 mt-auto">
<p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Includes</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> 5 idea generations
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Brand names &amp; domains
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Core value proposition
                                </li>
</ul>
</div>
</div>

<div className="group relative flex flex-col p-8 bg-white/[0.08] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-emerald-500/20 to-transparent pointer-events-none"></div>
<div className="mb-6 flex items-start justify-between relative z-10">
<div className="h-10 w-10 rounded-xl bg-emerald-400/20 flex items-center justify-center border border-emerald-400/30">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:layers-linear"></iconify-icon>
</div>
<span className="bg-emerald-400 text-black text-xs px-2 py-1 rounded uppercase tracking-wider font-sans">Most Popular</span>
</div>
<div className="mb-6 relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-3xl text-white font-manrope font-medium tracking-tighter">$29</span>
<span className="text-sm text-gray-500 font-sans">/mo</span>
</div>
<h3 className="text-lg text-white mt-4 font-sans">Pro</h3>
<p className="text-sm text-gray-400 mt-2 leading-relaxed font-sans">Advanced market deep-dives and full asset exports.</p>
</div>
<button className="relative z-10 w-full bg-[#10b981] text-white py-3 rounded-xl text-sm mb-8 hover:bg-[#059669] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-sans">
                            Upgrade Now <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="space-y-4 mt-auto relative z-10">
<p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Everything in Spark plus</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited generations
                                </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Pitch deck exports
                                </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Detailed competitor analysis
                                </li>
</ul>
</div>
</div>

<div className="group relative flex flex-col p-8 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-colors duration-300">
<div className="mb-6 flex items-start justify-between">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:diamond-linear"></iconify-icon>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl text-white font-manrope font-medium tracking-tighter">$99</span>
<span className="text-sm text-gray-500 font-sans">/mo</span>
</div>
<h3 className="text-lg text-white mt-4 font-sans">Agency</h3>
<p className="text-sm text-gray-400 mt-2 leading-relaxed font-sans">For venture studios and creative agencies.</p>
</div>
<button className="w-full bg-white text-black py-3 rounded-xl text-sm mb-8 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-sans">
                            Start Free Trial <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="space-y-4 mt-auto">
<p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Features</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> API access
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> White-label reports
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon> Dedicated support
                                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 px-4">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<span className="text-sm text-gray-500 mb-2 block font-sans">/ Support</span>
<h2 className="text-3xl text-gray-900 font-manrope font-medium tracking-tighter">Frequently Asked Questions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

<div className="group">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:add-circle-linear"></iconify-icon>
</span>
                                Is the output unique to me?
                            </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                                Yes. Every generation uses fresh AI cycles to ensure your brand identity and positioning are tailored specifically to your prompt.
                            </p>
</div>

<div className="group">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:add-circle-linear"></iconify-icon>
</span>
                                Do you register the domains for me?
                            </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                                We check for availability and provide links to register them instantly; we do not hold the domains ourselves.
                            </p>
</div>

<div className="group">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:add-circle-linear"></iconify-icon>
</span>
                                Can I use this for real-world businesses?
                            </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                                Both. While we excel at digital products, it is equally effective for local services and physical goods.
                            </p>
</div>

<div className="group">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:add-circle-linear"></iconify-icon>
</span>
                                What if I don't like the result?
                            </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                                You can tweak your prompt and re-run the generator as many times as you like until the output fits your vision perfectly.
                            </p>
</div>

<div className="group">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="solar:add-circle-linear"></iconify-icon>
</span>
                                Is there a cost?
                            </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                                The basic "Spark" report is free. Advanced market deep-dives and exports are available under our Pro plan.
                            </p>
</div>
</div>
</div>
</section>

<footer className="mt-8 w-full bg-[#050505] rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/5">
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

<div className="pt-24 pb-16 px-8 text-center relative z-10">
<div className="mx-auto w-20 h-20 bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur-sm">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/30">
<iconify-icon className="text-emerald-400 text-2xl drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" icon="solar:card-linear"></iconify-icon>
</div>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-manrope font-medium tracking-tighter">Your next venture starts here.</h2>
<p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed font-sans">Join 10,000+ founders who used InstantCompany to validate their latest concept.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-700 text-white hover:brightness-110 transition-all shadow-[0_0_25px_rgba(16,185,129,0.2)] flex items-center gap-2 border border-emerald-400/20 font-sans">
                            Launch Your Idea Now <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-8 opacity-50"></div>

<div className="px-8 md:px-16 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

<div className="lg:col-span-5 space-y-6">
<h3 className="text-3xl text-white font-manrope font-medium tracking-tighter">InstantCompany<span className="text-emerald-500 font-manrope font-medium tracking-tighter">.com</span></h3>
<p className="text-gray-500 text-sm leading-relaxed max-w-sm font-sans">
                            Stop overthinking and start building. The ultimate AI business architect for ambitious founders.
                        </p>
</div>

<div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-12">

<div className="space-y-6">
<h4 className="text-white font-sans">Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Generate Idea</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Pricing</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Examples</a></li>
</ul>
</div>

<div className="space-y-6">
<h4 className="text-white font-sans">Resources</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">How it Works</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Blog</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">API</a></li>
</ul>
</div>

<div className="space-y-6 hidden sm:block">
<h4 className="text-white font-sans">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">About Us</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Contact</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Terms &amp; Privacy</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-white/5 mt-8 py-8 px-8 md:px-16 relative z-10 text-center md:text-left">
<p className="text-xs text-gray-600 font-sans leading-relaxed">
                        © 2026 InstantCompany.com. All rights reserved. Intellectual property generated is for conceptual purposes; users are responsible for final trademark clearances and legal business registration.
                    </p>
</div>
</footer>
</main>
</div>

    </>
  );
}
