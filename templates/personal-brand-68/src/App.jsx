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
      

<main className="shadow-slate-200/50 overflow-hidden min-h-screen bg-white max-w-[1600px] z-10 mr-auto ml-auto relative shadow-2xl">

<nav className="fixed -translate-x-1/2 flex transition-all duration-300 bg-white/90 w-[92%] max-w-3xl z-50 border-neutral-200/60 border rounded-full pt-3 pr-3 pb-3 pl-3 top-6 left-1/2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2 pl-2">
<div className="flex text-white bg-blue-600 w-8 h-8 rounded-full items-center justify-center shadow-md">
<iconify-icon height="18" icon="solar:star-fall-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight font-geist text-neutral-900">GetKnown.com</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-blue-600 transition-colors font-geist" href="#">Platform</a>
<a className="hover:text-blue-600 transition-colors font-geist" href="#">Guides</a>
<a className="hover:text-blue-600 transition-colors font-geist" href="#">Resources</a>
<a className="hover:text-blue-600 transition-colors font-geist" href="#">Pricing</a>
</div>
<button className="hidden md:flex items-center justify-center px-5 py-2 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm font-geist">
         Audit Brand
    </button>
</nav>

<section className="grid min-h-[600px] pt-24 lg:grid-cols-12 lg:pt-0">

<div className="lg:col-span-7 lg:px-12 flex flex-col z-10 pt-12 pr-6 pb-12 pl-6 relative justify-center">

<div className="flex lg:mt-28 w-fit mt-0 mb-6 gap-x-2 gap-y-2 items-center">
<div className="inline-flex gap-2 text-[11px] uppercase font-medium text-blue-600 tracking-wider font-geist bg-blue-50 border-blue-100 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
            Accepting New Experts for 2026
        </div>
</div>
<h1 className="leading-[0.95] lg:text-7xl text-6xl text-neutral-900 tracking-tighter mb-8">
<span className="block font-geist">Get known for</span>
<span className="block font-geist ml-2 text-blue-600">what you do.</span>
</h1>
<p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-10 font-normal font-geist">
      You’ve spent years mastering your craft. Now, let’s make sure the world knows it. Build a category-defining personal brand, scale your visibility, and attract high-value opportunities on autopilot in 2026.
    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16">
<button className="group shadow-blue-500/30 hover:shadow-blue-500/60 transition-all duration-300 overflow-hidden hover:bg-blue-700 font-medium text-white bg-blue-600 rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg" style={{boxShadow: '0 18px 40px -15px rgba(37,99,235,0.85), inset 0 2px 4px rgba(255,255,255,0.2)', borderRadius: '0.5rem', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(147, 197, 253, 0.4), rgba(37, 99, 235, 0.5))', '--border-radius-before': '8px'}}>
<div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="flex items-center gap-2 relative font-geist">Audit Your Authority <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon></span>
</button>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=32"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=53"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=68"/>
</div>
<div className="text-xs font-medium text-neutral-600 font-geist">
<div className="flex items-center text-yellow-500 mb-0.5 gap-0.5">
<iconify-icon height="14" icon="solar:star-linear" strokeWidth="1.5" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-linear" strokeWidth="1.5" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-linear" strokeWidth="1.5" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-linear" strokeWidth="1.5" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
          Trusted by 50+ Industry Leaders
        </div>
</div>
</div>
<div className="flex flex-wrap hover:grayscale-0 transition-all duration-500 text-neutral-800 opacity-60 mb-12 grayscale gap-x-8 gap-y-8 items-center">
<iconify-icon height="28" icon="simple-icons:forbes" width="28"></iconify-icon>
<iconify-icon height="28" icon="simple-icons:bloomberg" width="28"></iconify-icon>
<iconify-icon height="28" icon="simple-icons:fastcompany" width="28"></iconify-icon>
<iconify-icon height="28" icon="simple-icons:wsj" width="28"></iconify-icon>
</div>
</div>

<div className="lg:col-span-5 lg:h-auto overflow-hidden bg-center bg-neutral-900 w-full h-[500px] bg-cover relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/122547d3-40ef-497e-a00d-f533aa8ef763_1600w.webp)]" style={{}}>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
</div>
</section>

<section className="bg-blue-600 border-blue-600 border-t">
<div className="flex flex-col lg:flex-row lg:px-12 lg:pt-28 lg:pb-28 pt-20 pr-6 pb-20 pl-6 gap-x-12 gap-y-12 items-center">

<div className="w-full overflow-hidden space-y-12">
<p className="text-2xl lg:text-3xl text-white leading-snug tracking-tight max-w-3xl font-geist mx-auto text-center" style={{}}>
      We engineer the transition from <span className="text-blue-200 font-bold font-geist" style={{}}>Invisible Expert</span> to a recognized Category of One.
    </p>
<div className="w-full mask-gradient no-scrollbar mt-12" style={{overflowX: 'auto', overflowY: 'hidden'}}>
<div className="flex gap-6 w-[200%] gap-x-6 gap-y-6 items-stretch">

<div className="flex gap-6 w-1/2 pr-6 gap-x-6 gap-y-6 items-stretch" style={{flexWrap: 'nowrap'}}>

<div className="flex-1 min-w-[260px] shrink-0 bg-blue-700 p-6 rounded-2xl shadow-sm flex flex-col h-64 group hover:bg-blue-800 transition-colors duration-300">
<div className="flex transition-colors duration-300 text-white bg-white/10 w-10 h-10 rounded-lg mb-0 items-center justify-center">
<iconify-icon height="22" icon="solar:scanner-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white leading-tight mt-6 mb-2 font-geist">Audit</h4>
<p className="text-blue-100 text-sm font-geist leading-relaxed mb-4">Scan your digital footprint with our AI engine to uncover authority gaps.</p>
<div className="mt-auto w-full">
<button className="group shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300 overflow-hidden font-medium text-white bg-white/10 rounded-lg py-2.5 px-4 relative shadow-none w-full text-sm">
<span className="relative flex items-center justify-center gap-2 font-geist">
                    Scan Profile
                    <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="flex-1 min-w-[260px] shrink-0 shadow-blue-900/20 flex flex-col bg-blue-700 h-64 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg group hover:bg-blue-800 transition-colors duration-300">
<div className="flex transition-colors duration-300 text-white bg-white/10 w-10 h-10 rounded-lg mb-0 items-center justify-center">
<iconify-icon height="22" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white leading-tight mt-6 mb-2 font-geist">Define</h4>
<p className="text-blue-100 text-sm font-geist leading-relaxed mb-4">Carve out a "Category of One" to instantly differentiate your expertise.</p>
<div className="mt-auto w-full">
<button className="group shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300 overflow-hidden font-medium text-white bg-white/10 rounded-lg py-2.5 px-4 relative shadow-none w-full text-sm">
<span className="relative flex items-center justify-center gap-2 font-geist">
                    Find Niche
                     <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="flex-1 min-w-[260px] shrink-0 bg-blue-700 p-6 rounded-2xl shadow-sm flex flex-col h-64 group hover:bg-blue-800 transition-colors duration-300">
<div className="flex transition-colors duration-300 text-white bg-white/10 w-10 h-10 rounded-lg mb-0 items-center justify-center">
<iconify-icon height="22" icon="solar:settings-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white leading-tight mt-6 mb-2 font-geist">Automate</h4>
<p className="text-blue-100 text-sm font-geist leading-relaxed mb-4">Deploy a multi-channel content strategy seamlessly without the grind.</p>
<div className="mt-auto w-full">
<button className="group shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300 overflow-hidden font-medium text-white bg-white/10 rounded-lg py-2.5 px-4 relative shadow-none w-full text-sm">
<span className="relative flex items-center justify-center gap-2 font-geist">
                    Build Systems
                     <iconify-icon className="" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="flex-1 min-w-[260px] shrink-0 bg-blue-700 p-6 rounded-2xl shadow-sm flex flex-col h-64 group hover:bg-blue-800 transition-colors duration-300">
<div className="flex transition-colors duration-300 text-white bg-white/10 w-10 h-10 rounded-lg mb-0 items-center justify-center">
<iconify-icon height="22" icon="solar:rocket-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white leading-tight mt-6 mb-2 font-geist">Scale</h4>
<p className="text-blue-100 text-sm font-geist leading-relaxed mb-4">Move confidently into tier-1 PR placements and keynote speaking circuits.</p>
<div className="mt-auto w-full">
<button className="group shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300 overflow-hidden font-medium text-white bg-white/10 rounded-lg py-2.5 px-4 relative shadow-none w-full text-sm">
<span className="relative flex items-center justify-center gap-2 font-geist">
                    Go Big
                     <iconify-icon className="" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-neutral-100/50 border-neutral-200 border-t pt-24 pb-24 relative">
<div className="container mx-auto px-6 lg:px-12 relative z-10">

<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
<div className="max-w-3xl">
<h2 className="text-4xl lg:text-5xl tracking-tight text-neutral-900 leading-[1.05] font-geist mb-4" style={{}}>
            The Sovereign Expert Advantage
          </h2>
<p className="text-lg text-neutral-500 font-geist">Focus on Inbound Opportunities, Pricing Power, and Network Equity.</p>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-blue-600 border-b border-transparent pb-1 hover:border-blue-600 transition-all mt-2 font-geist" href="#">
        Unlock Your Advantage
        <iconify-icon height="20" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="bg-white p-8 rounded-2xl flex flex-col justify-between h-[520px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-colors border border-neutral-100">
<div className="">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
<iconify-icon height="24" icon="solar:magnet-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-4 leading-tight tracking-tight font-geist">
            Inbound Opportunities
          </h3>
<p className="text-neutral-500 leading-relaxed text-base font-geist">
            Stop chasing cold leads. By establishing absolute authority in your niche, high-value deals, partnerships, and speaking engagements start coming directly to you.
          </p>
</div>
<div className="mt-8 border-t border-neutral-100 pt-6">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div>
<div className="text-sm font-semibold text-neutral-900 leading-none mb-1 font-geist">Sarah Jenkins</div>
<div className="text-xs text-neutral-400 font-medium font-geist">Founder, ScaleAI</div>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden h-[520px] group bg-neutral-900 shadow-lg border border-neutral-800">
<img alt="Mood" className="transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71205a4d-4eb6-446d-bbb8-158b16d694bf_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
<div className="flex flex-col z-10 text-white pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="text-sm font-medium tracking-wide font-geist text-blue-300">Category of One</span>
</div>
<div>
<h3 className="text-3xl font-semibold text-white mb-2 leading-tight tracking-tight font-geist">
              Pricing Power
            </h3>
<p className="text-neutral-300 text-sm font-geist">Authority removes you from the commodity trap, allowing you to command premium rates without friction.</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl flex flex-col items-center justify-between h-[520px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-colors relative overflow-hidden group border border-neutral-100">

<div className="absolute inset-0 pointer-events-none opacity-[0.03]">
<svg className="w-full h-full stroke-neutral-900 fill-none" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="20"></circle>
<circle cx="50" cy="50" r="35"></circle>
<circle cx="50" cy="50" r="48"></circle>
</svg>
</div>
<div className="text-center relative z-10 mt-4">
<span className="text-sm text-blue-600 font-medium block mb-2 font-geist">Network Equity</span>
<span className="text-2xl font-semibold text-neutral-900 tracking-tight font-geist">Authority Score</span>
</div>

<div className="relative w-56 h-56 flex items-center justify-center" style={{}}>
<div className="flex flex-col absolute top-0 right-0 bottom-0 left-0 items-center justify-center" style={{}}>
<div className="text-5xl text-neutral-900 tracking-tighter mb-8 font-geist" style={{}}>+142%</div>
</div>
</div>
<button className="w-full bg-blue-600 text-white text-sm font-medium py-3.5 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform group-hover:-translate-y-1 font-geist">
          Calculate Your Score
        </button>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-neutral-950 border-neutral-800 border-t pt-24 pb-24 relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-950 to-neutral-950"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">

<div className="flex flex-col items-center mb-14">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 shadow-sm mb-6">
<iconify-icon className="text-blue-400" height="18" icon="solar:infinity-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300 font-geist">
          The Authority Flywheel
        </span>
</div>
<h2 className="text-4xl lg:text-5xl tracking-tight text-white text-center max-w-3xl leading-[1.05] font-geist" style={{}}>
        A systematic approach to being seen by the right people.
      </h2>
</div>

<div className="relative mt-16">

<div className="pointer-events-none absolute inset-6 rounded-3xl bg-neutral-900/0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative gap-x-6 gap-y-6">

<div className="flex flex-col gap-4">
<div className="h-16 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5 flex flex-col justify-center gap-2.5 opacity-50">
<div className="h-1 w-12 rounded-full bg-white/10"></div>
</div>
<div className="rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-8 flex flex-col h-full justify-start hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-blue-400 mb-6 border border-neutral-700">
<iconify-icon height="24" icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist tracking-tight">Foundations</h3>
<p className="text-base text-neutral-400 leading-relaxed font-geist">
              Personal branding basics. Optimize your existing profiles, website, and digital footprint for the 2026 AI-search era.
            </p>
</div>
<div className="h-16 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5 flex flex-col justify-center gap-2.5 opacity-50">
<div className="h-1 w-20 rounded-full bg-white/10"></div>
</div>
</div>

<div className="flex flex-col gap-4 pt-6 md:pt-0">
<div className="h-20 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5 flex flex-col justify-center gap-2.5 opacity-50">
<div className="h-1 w-16 rounded-full bg-white/10"></div>
<div className="h-1 w-2/3 rounded-full bg-white/5"></div>
</div>
<div className="rounded-2xl bg-neutral-900 border border-blue-900/30 shadow-[0_0_30px_-5px_rgba(37,99,235,0.15)] p-8 flex flex-col h-full justify-start relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
<iconify-icon height="24" icon="solar:clapperboard-play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist tracking-tight">Content Engine</h3>
<p className="text-base text-neutral-400 leading-relaxed font-geist">
                  High-leverage visibility systems tailored for LinkedIn, premium newsletters, and top-tier podcast appearances.
                </p>
</div>
</div>
<div className="h-12 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5 flex flex-col justify-center gap-2.5 opacity-50">
</div>
</div>

<div className="flex flex-col gap-4 pt-12 md:pt-0">
<div className="h-12 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5 flex flex-col justify-center gap-2.5 opacity-50">
</div>
<div className="rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-8 flex flex-col h-full justify-start hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-blue-400 mb-6 border border-neutral-700">
<iconify-icon height="24" icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-geist tracking-tight">Reputation Scale</h3>
<p className="text-base text-neutral-400 leading-relaxed font-geist">
              AI-assisted reputation building. Actively monitor your sentiment, dominate branded search, and grow your global authority score.
            </p>
</div>
<div className="h-20 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-5 flex flex-col justify-center gap-2.5 opacity-50">
<div className="h-1 w-16 rounded-full bg-white/10"></div>
<div className="h-1 w-1/2 rounded-full bg-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-neutral-200 pt-24 pb-24">
<div className="container mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-neutral-900 font-semibold font-geist mb-3">Authority Resources</h2>
<p className="text-neutral-500 font-geist">Playbooks, frameworks, and insights to build your personal brand.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors font-geist" href="#">
                View All Articles
                <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group flex flex-col bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300" href="#">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors mb-6">
<iconify-icon height="20" icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-3 font-geist group-hover:text-blue-600 transition-colors">How to Get Known in Your Industry</h3>
<span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 group-hover:text-blue-600 transition-colors font-geist pt-4">
                    Read Guide <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</span>
</a>

<a className="group flex flex-col bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300" href="#">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors mb-6">
<iconify-icon height="20" icon="solar:ghost-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-3 font-geist group-hover:text-blue-600 transition-colors">Why Great Businesses Still Stay Invisible</h3>
<span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 group-hover:text-blue-600 transition-colors font-geist pt-4">
                    Read Guide <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</span>
</a>

<a className="group flex flex-col bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300" href="#">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors mb-6">
<iconify-icon height="20" icon="solar:crown-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-3 font-geist group-hover:text-blue-600 transition-colors">How Founders Build Authority Online</h3>
<span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 group-hover:text-blue-600 transition-colors font-geist pt-4">
                    Read Guide <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</span>
</a>

<a className="group flex flex-col bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300" href="#">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors mb-6">
<iconify-icon height="20" icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-3 font-geist group-hover:text-blue-600 transition-colors">The Fastest Way to Build Credibility in 2026</h3>
<span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 group-hover:text-blue-600 transition-colors font-geist pt-4">
                    Read Guide <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="overflow-hidden bg-center bg-blue-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b74796-d4c9-452f-a6cb-08cb3daa1ee3_3840w.webp)] bg-cover border-blue-950 border-t pt-24 pb-20 relative">
<div className="bg-blue-950/90 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="max-w-2xl mx-auto text-center">
<div className="inline-flex bg-white/10 rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md gap-x-2 gap-y-2 items-center border border-white/20">
<iconify-icon className="text-blue-300" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[11px] uppercase font-semibold text-white tracking-[0.18em] font-geist">
          Join the Authority Weekly
        </span>
</div>
<h2 className="text-4xl lg:text-5xl tracking-tight text-white leading-[1.05] mb-6 font-geist" style={{}}>
        Get the internal playbooks for industry visibility.
      </h2>
<p className="text-lg text-blue-200 mx-auto mb-10 font-geist">
        Join over 50,000+ experts, founders, and leaders building their personal brand in 2026. No fluff, just actionable systems.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg mx-auto">
<input className="w-full px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-300 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all font-geist text-sm backdrop-blur-md" placeholder="Enter your best email..." type="email"/>
<button className="w-full sm:w-auto shrink-0 group inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium px-8 py-3.5 shadow-lg hover:bg-blue-500 transition-all gap-2 font-geist">
            Subscribe
            <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<footer className="bg-neutral-950 border-t border-neutral-900 pt-14 pb-10">
<div className="container mx-auto px-6 lg:px-12">
<div className="bg-neutral-900/50 border border-white/5 rounded-3xl px-6 py-10 lg:px-10 lg:py-12 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.5)]">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

<div className="lg:w-1/3 space-y-5">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
<iconify-icon height="20" icon="solar:star-fall-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-white font-geist">GetKnown.com</span>
<span className="text-[11px] uppercase tracking-[0.16em] text-neutral-500 font-geist">Visibility Platform</span>
</div>
</div>
<p className="text-sm text-neutral-400 max-w-sm font-geist">
            Helping experts move from invisible to iconic. Build a category-defining personal brand and attract high-value opportunities.
          </p>
<div className="flex items-center gap-3 text-neutral-500">
<a className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-blue-500 hover:text-white transition-colors" href="#">
<iconify-icon height="14" icon="simple-icons:x" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-blue-500 hover:text-white transition-colors" href="#">
<iconify-icon height="14" icon="simple-icons:linkedin" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-blue-500 hover:text-white transition-colors" href="#">
<iconify-icon height="14" icon="simple-icons:instagram" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
<div className="space-y-3">
<h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 font-geist">Platform</h3>
<ul className="space-y-2 text-neutral-400">
<li><a className="hover:text-white transition-colors font-geist" href="#">Authority Audit</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Content Systems</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Reputation Engine</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Pricing</a></li>
</ul>
</div>
<div className="space-y-3">
<h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 font-geist">Resources</h3>
<ul className="space-y-2 text-neutral-400">
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Authority Guides</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Expert Newsletter</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Playbooks</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Podcast</a></li>
</ul>
</div>
<div className="space-y-3">
<h3 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 font-geist">Company</h3>
<ul className="space-y-2 text-neutral-400">
<li><a className="hover:text-white transition-colors font-geist" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Success Stories</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Partners</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-10 border-t border-neutral-800 pt-6 flex flex-col gap-4">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-neutral-500">
<p className="font-geist">Copyright 2026 GetKnown. Helping experts move from invisible to iconic.</p>
<div className="flex flex-wrap gap-4">
<a className="hover:text-neutral-300 transition-colors font-geist" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300 transition-colors font-geist" href="#">Terms of Service</a>
<a className="hover:text-neutral-300 transition-colors font-geist" href="#">Cookie Settings</a>
</div>
</div>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
