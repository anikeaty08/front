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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' 
            });

            document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
                observer.observe(element);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-75 opacity-40" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"><div data-us-text="id-n5qcuiyp9yi360xtsetfrj" style={{width: '5px', top: '426.905px', left: '604.35px', fontSize: '10px', lineHeight: '65.1906px', letterSpacing: '0px', fontFamily: 'Inter', fontWeight: '400', textAlign: 'left', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>.</div></div>

</div></div>

<div className="fixed z-0 pointer-events-none inset-0">
<div className="stars absolute inset-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[120px] rounded-full bg-indigo-950/20"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-[100px] rounded-full bg-blue-950/10"></div>
</div>

<nav className="sticky top-4 z-50 flex items-center justify-between max-w-6xl mx-auto p-2 border rounded-2xl shadow-2xl backdrop-blur-xl transition-all bg-black/80 border-white/10">
<a className="flex items-center gap-2 px-4 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 flex items-center justify-center to-blue-600 text-white">
<iconify-icon className="" icon="solar:radar-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-lg font-oswald font-medium tracking-wide group-hover:opacity-80 transition-opacity text-white">Sigmal</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-xs font-normal rounded-xl transition-all text-white bg-white/10 hover:bg-white/15" href="#">Intelligence</a>
<a className="transition-all text-xs font-normal rounded-xl pt-2 pr-4 pb-2 pl-4 hover:text-white hover:bg-white/5 text-neutral-400" href="#">Monitoring</a>
</div>
<div className="flex pr-2 gap-x-5 gap-y-3 items-center">
<a className="hidden sm:block text-xs font-normal transition-colors text-neutral-400 hover:text-white" href="#">Log In</a>
<a className="px-5 py-2 text-xs font-medium hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-500/20 transition-all active:scale-95 flex items-center gap-2 text-white bg-indigo-600" href="#">
<span className="">Start Tracking</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6 relative items-center">

<div className="lg:col-span-7 flex flex-col z-10 relative items-start">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-sm text-[10px] hero-animate delay-100 uppercase tracking-widest font-medium text-indigo-300">
<iconify-icon icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span className="" style={{}}>competitive intelligence without the noise</span>
</div>

<h1 className="lg:text-[72px] leading-[1.05] hero-animate delay-200 text-5xl font-light tracking-tight font-oswald max-w-2xl mb-6 text-white">Know what changed <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400">&amp; why it matters</span></h1>

<p className="leading-relaxed hero-animate delay-300 text-lg font-light max-w-lg mb-10 text-neutral-400">Sigmal monitors competitor websites and social channels, surfaces meaningful changes and explains their impact so your team moves faster with clarity.</p>

<div className="flex flex-col gap-4 hero-animate delay-500 gap-x-4 gap-y-4 items-start">
<div className="flex flex-wrap gap-5 items-center">
<button className="group flex overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] focus:outline-none text-sm font-normal tracking-wide font-sans rounded-full py-3.5 px-8 relative items-center justify-center text-white">

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#6366f1_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>

<div className="-z-10 overflow-hidden rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px] bg-black">

<div className="absolute inset-0 bg-gradient-to-b to-transparent from-white/10"></div>

<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0 transition-all duration-500 group-hover:opacity-60" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '16px 16px', animation: 'dots-move 3s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-500/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-indigo-500/40"></div>
</div>

<div className="flex items-center gap-2 relative z-10">
<span className="">Start tracking competitors</span>
<iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>

</div>
</div>

<div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0 hero-animate delay-700 z-10 relative">
<div className="electric-card bg-[#0A0A0A] w-[380px] rounded-[32px] p-[1px] relative group">

<div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-indigo-500/50 via-blue-500/20 to-transparent opacity-100 z-0"></div>

<div className="z-10 bg-[#080808] h-full rounded-[31px] p-6 relative overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-0 right-0 w-64 h-64 blur-[60px] rounded-full bg-indigo-600/10"></div>

<div className="flex justify-between items-center mb-6 relative">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
<span className="text-[10px] font-mono tracking-widest uppercase text-rose-400">High Priority Alert</span>
</div>
<span className="text-[10px] text-neutral-500 font-mono">14:02 PM</span>
</div>

<div className="relative z-10">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shrink-0 bg-white">

<iconify-icon className="text-black" icon="solar:layers-minimalistic-bold" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="leading-tight text-base font-medium text-white" style={{}}>Linear</h3>
<p className="text-neutral-500 text-xs mt-1">Competitor • Series B</p>
</div>
</div>
<div className="p-4 rounded-2xl border mb-6 backdrop-blur-md bg-white/5 border-white/10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:tag-price-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-indigo-300">Pricing Model Change</span>
</div>
<p className="text-sm leading-relaxed font-light text-neutral-300">
                                Removed "Free Tier" limitations on projects. New "Enterprise" tier added starting at $35/seat.
                            </p>
<div className="mt-3 flex gap-2">
<span className="text-[10px] uppercase tracking-wide bg-rose-500/10 border-rose-500/20 border rounded pt-1 pr-2 pb-1 pl-2 text-rose-400" style={{}}>Strategic Change</span>
</div>
</div>

<div className="flex gap-3">
<button className="flex-1 py-2.5 rounded-lg text-xs font-medium transition-colors bg-white text-black hover:bg-neutral-200">
                                View Analysis
                            </button>
<button className="w-10 flex items-center justify-center rounded-lg border transition-colors border-white/10 hover:bg-white/5 text-neutral-400 hover:text-white">
<iconify-icon icon="solar:share-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-4 lg:px-6 pb-32 relative z-10 reveal-on-scroll reveal-visible">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[400px] blur-[100px] -z-10 rounded-full bg-indigo-900/10"></div>
<div className="overflow-hidden bg-[#0A0A0A]/90 border ring-1 rounded-2xl shadow-2xl backdrop-blur-xl transition-transform duration-100 ease-out will-change-transform border-white/10 ring-white/5" onmouseleave="this.style.transform='perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';" onmousemove="const r=this.getBoundingClientRect();const x=event.clientX-r.left;const y=event.clientY-r.top;const cX=r.width/2;const cY=r.height/2;const rX=((y-cY)/cY)*-1.5;const rY=((x-cX)/cX)*1.5;this.style.transform=`perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.005, 1.005, 1.005)`;" style={{perspective: '1000px', transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>

<div className="flex border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between border-white/5">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full border bg-neutral-800 border-white/10"></div>
<div className="w-3 h-3 rounded-full border bg-neutral-800 border-white/10"></div>
<div className="w-3 h-3 rounded-full border bg-neutral-800 border-white/10"></div>
</div>
<div className="h-4 w-px mx-2 bg-white/10"></div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span className="">Monitoring Active</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1"></span>
</div>
</div>
<div className="flex items-center gap-3 border rounded-lg px-3 py-1.5 w-64 bg-black/50 border-white/10">
<iconify-icon className="text-neutral-500" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="bg-transparent border-none outline-none text-xs placeholder-neutral-600 w-full font-light text-white" placeholder="Search signals..." type="text"/>
</div>
</div>
<div className="grid grid-cols-12 min-h-[600px]">

<div className="hidden md:block col-span-2 flex flex-col gap-6 border-r pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6 border-white/5">
<div className="">
<div className="flex flex-col w-full">
<h4 className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium mb-2 pl-2 select-none">Market</h4>
<ul className="flex flex-col space-y-0.5">
<li className="">
<a className="group flex items-center gap-2.5 hover:text-white hover:bg-white/5 transition-all duration-200 text-xs font-medium text-indigo-300 bg-indigo-500/10 border-indigo-500/20 border rounded-lg pt-1.5 pr-2 pb-1.5 pl-2" href="#">
<svg className="lucide lucide-layout-grid opacity-70 group-hover:opacity-100 transition-opacity" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                Overview
            </a>
</li>
<li className="">
<a className="group flex items-center gap-2.5 px-2 py-1.5 rounded-md text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="lucide lucide-activity opacity-70 group-hover:opacity-100 transition-opacity" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                Monitor
            </a>
</li>
<li className="">
<a className="group flex items-center gap-2.5 px-2 py-1.5 rounded-md text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="lucide lucide-bar-chart-2 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
                Analyze
            </a>
</li>
</ul>
</div>
<ul className="space-y-0.5">
<li className=""></li>
<li className=""></li>
<li className=""></li>
</ul>
</div>
<div className="">
<h4 className="text-[10px] uppercase font-medium text-neutral-500 tracking-widest mb-3 pt-4 pl-2">Tracked</h4>
<ul className="space-y-0.5">
<li className=""><a className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs font-normal transition-colors text-neutral-400 hover:text-white hover:bg-white/5" href="#"><span className="w-2 h-2 rounded-sm bg-white"></span> Stripe</a></li>
<li className=""><a className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs font-normal transition-colors text-neutral-400 hover:text-white hover:bg-white/5" href="#"><span className="w-2 h-2 rounded-sm bg-indigo-500"></span> Adyen</a></li>
<li className=""><a className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs font-normal transition-colors text-neutral-400 hover:text-white hover:bg-white/5" href="#"><span className="w-2 h-2 rounded-sm bg-purple-500"></span> Paddle</a></li>
</ul>
</div>
</div>

<div className="col-span-12 md:col-span-7 bg-[#050505] p-6 relative">

<div className="flex justify-between items-end mb-8 border-b pb-4 border-white/5">
<div className="">
<h2 className="text-xl font-oswald font-light text-white">Signal Feed</h2>
<p className="text-xs text-neutral-500 mt-1 font-light">Live updates from 12 tracked domains.</p>
</div>
<div className="flex gap-2">
<button className="p-1.5 rounded-md transition hover:bg-white/5 text-neutral-400 hover:text-white"><iconify-icon icon="solar:filter-linear" width="16"></iconify-icon></button>
<button className="p-1.5 rounded-md transition hover:bg-white/5 text-neutral-400 hover:text-white"><iconify-icon icon="solar:sort-vertical-linear" width="16"></iconify-icon></button>
</div>
</div>

<div className="space-y-4">

<div className="group relative p-4 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer border-white/5 hover:border-white/10">
<div className="absolute left-0 top-4 bottom-4 w-[2px] bg-indigo-500 rounded-r-full"></div>
<div className="flex justify-between items-start mb-2 pl-2">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-white">Stripe</span>
<span className="text-[10px] text-neutral-500">•</span>
<span className="text-[10px] text-neutral-500">Landing Page Update</span>
</div>
<span className="text-[10px] font-mono text-neutral-600">2h ago</span>
</div>
<h3 className="text-sm pl-2 font-normal text-neutral-200">Headline text changed: "Financial infrastructure" → "The new standard in payments"</h3>
<div className="mt-3 pl-2 flex gap-2">
<span className="px-1.5 py-0.5 rounded text-[10px] border border-white/10 text-neutral-400 bg-white/5">Marketing</span>
<span className="px-1.5 py-0.5 rounded text-[10px] border border-emerald-500/20 bg-emerald-500/5 text-emerald-400">Positive Sentiment</span>
</div>
</div>

<div className="group relative p-4 rounded-xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer border-white/5 hover:border-white/10">
<div className="absolute left-0 top-4 bottom-4 w-[2px] bg-amber-500 rounded-r-full"></div>
<div className="flex justify-between items-start mb-2 pl-2">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-white">Paddle</span>
<span className="text-[10px] text-neutral-500">•</span>
<span className="text-[10px] text-neutral-500">Documentation</span>
</div>
<span className="text-[10px] font-mono text-neutral-600">5h ago</span>
</div>
<h3 className="text-sm pl-2 font-normal text-neutral-200">New API endpoint detected: <code className="">/v2/subscriptions/enterprise</code></h3>
<div className="mt-3 pl-2 flex gap-2">
<span className="px-1.5 py-0.5 rounded text-[10px] border border-white/10 text-neutral-400 bg-white/5">Product</span>
<span className="px-1.5 py-0.5 rounded text-[10px] border border-amber-500/20 bg-amber-500/5 text-amber-400">New Feature</span>
</div>
</div>

<div className="group relative p-4 rounded-xl border bg-transparent hover:bg-white/[0.02] transition-all cursor-pointer opacity-70 border-white/5">
<div className="flex justify-between items-start mb-2 pl-2">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-neutral-400">Adyen</span>
<span className="text-[10px] text-neutral-600">•</span>
<span className="text-[10px] text-neutral-600">Blog</span>
</div>
<span className="text-[10px] font-mono text-neutral-700">1d ago</span>
</div>
<h3 className="text-sm text-neutral-500 pl-2 font-light">New article posted: "Q4 Financial Results"</h3>
</div>
</div>
</div>

<div className="hidden lg:block col-span-3 border-l bg-white/[0.01] p-5 border-white/5">
<div className="h-full flex flex-col">
<h3 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-6">AI Insight</h3>
<div className="flex-1 space-y-6">
<div className="relative pl-4 border-l border-indigo-500">
<p className="text-xs mb-1 font-medium text-indigo-300">Strategic Shift</p>
<p className="text-sm font-light leading-relaxed text-neutral-300">
                                    Stripe's language shift indicates a move towards broader enterprise positioning, moving away from pure developer-centric messaging.
                                </p>
</div>
<div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:bell-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-white">Recommendation</span>
</div>
<p className="text-xs leading-relaxed font-light text-neutral-400">
                                    Review our "Enterprise Gateway" messaging to ensure we differentiate on ease of integration vs. their new "Standard" claim.
                                </p>
<button className="mt-3 w-full py-1.5 rounded hover:bg-indigo-500 text-[10px] transition-colors bg-indigo-600 text-white">Create Task</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="lg:px-6 reveal-on-scroll max-w-7xl z-10 border-t mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative border-white/5">

<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="lg:text-5xl text-3xl font-light tracking-tight font-oswald mb-6 text-white">
<span className="block text-xs font-mono tracking-widest uppercase mb-3 text-indigo-400">The Challenge</span>
    Competitors move fast. Tracking them doesn’t.
</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400">SaaS teams track competitors by manually checking websites, pricing pages, blogs, social, and changelogs. This scattered work across tabs, spreadsheets, and screenshots wastes time and misses key changes.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group relative flex flex-col justify-between p-8 rounded-[32px] border bg-[#080808] overflow-hidden transition-all duration-500 border-white/10 hover:border-white/20">

<div className="relative z-10 mb-10">
<h3 className="text-2xl font-sans font-medium tracking-tight mb-4 text-white">Stale Spreadsheets</h3>
<p className="leading-relaxed text-sm font-normal font-sans text-neutral-400">Manual entry means your data is outdated the moment it’s saved. No history, just static snapshots that lose value fast.</p>
</div>

<div className="relative w-full aspect-[4/3] rounded-2xl bg-[#050505] border p-5 flex flex-col overflow-hidden shadow-inner border-white/5">
<div className="flex items-center justify-between mb-4 border-b pb-3 border-white/5">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
<div className="text-[10px] font-mono tracking-wider text-neutral-600">LATEST_EXPORT.CSV</div>
</div>
<div className="space-y-2 relative">

<div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.02]">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>
<span className="text-[10px] font-mono text-neutral-300">stripe_pricing_v2</span>
</div>
<span className="text-[10px] font-mono text-neutral-500">3d ago</span>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-rose-500/[0.05] border border-rose-500/10 relative overflow-hidden group-hover:bg-rose-500/[0.08] transition-colors">
<div className="flex items-center gap-2 relative z-10">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-rose-200">paddle_features</span>
</div>
<span className="text-[10px] font-mono relative z-10 text-rose-400">MISSING</span>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-500/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.02] opacity-60">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
<span className="text-[10px] font-mono text-neutral-300">adyen_q4_report</span>
</div>
<span className="text-[10px] font-mono text-neutral-500">7d ago</span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
</div>
</div>

<div className="group relative flex flex-col justify-between p-8 rounded-[32px] border bg-[#080808] overflow-hidden transition-all duration-500 border-white/10 hover:border-white/20">

<div className="relative z-10 mb-10">
<h3 className="text-2xl font-sans font-medium tracking-tight mb-4 flex items-center gap-2 text-white">
<svg className="lucide lucide-zap text-indigo-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                Context Switching
            </h3>
<p className="leading-relaxed text-sm font-normal font-sans text-neutral-400">Jumping between browser tabs, social feeds, and job boards breaks your focus and hides the bigger picture.</p>
</div>

<div className="relative w-full aspect-[4/3] rounded-2xl bg-[#050505] border flex items-center justify-center overflow-hidden shadow-inner border-white/5">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/80"></div>

<div className="absolute w-48 h-48 rounded-full border border-dashed animate-[spin_60s_linear_infinite] border-white/5"></div>
<div className="absolute w-32 h-32 rounded-full border border-indigo-500/10 shadow-[0_0_40px_rgba(99,102,241,0.05)]"></div>

<div className="relative z-10 w-12 h-12 rounded-xl bg-[#0A0A0A] border flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 border-white/10">
<svg className="lucide lucide-layers text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
</div>

<div className="absolute top-[25%] right-[25%] p-1.5 rounded-md bg-[#0A0A0A] border animate-[bounce_3s_infinite] shadow-lg border-white/10">
<svg className="lucide lucide-globe text-neutral-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="absolute bottom-[28%] left-[25%] p-1.5 rounded-md bg-[#0A0A0A] border animate-[bounce_4s_infinite] delay-100 shadow-lg border-white/10">
<svg className="lucide lucide-file-text text-neutral-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between p-8 rounded-[32px] border bg-[#080808] overflow-hidden transition-all duration-500 border-white/10 hover:border-white/20">

<div className="relative z-10 mb-10">
<h3 className="text-2xl font-sans font-medium tracking-tight mb-4 text-white">Silent Changes</h3>
<p className="leading-relaxed text-sm font-normal font-sans text-neutral-400">Without constant monitoring, subtle updates like A/B tests or API shifts slip through unnoticed.</p>
</div>

<div className="aspect-[4/3] flex flex-col bg-[#050505] w-full border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-inner justify-center border-white/5">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2.5">
<div className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-rose-400"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
</div>
<span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">DETECTION_LAG</span>
</div>
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full border border-[#050505] flex items-center justify-center text-[8px] bg-neutral-800 text-white">JD</div>
<div className="w-5 h-5 rounded-full border border-[#050505] flex items-center justify-center text-[8px] bg-indigo-900 text-indigo-200">AI</div>
</div>
</div>

<div className="relative">
<div className="flex justify-between text-[10px] font-mono mb-3">
<span className="text-neutral-500">TIMELINE</span>
<span className="group-hover:text-rose-300 transition-colors text-rose-400">4 WEEKS LATE</span>
</div>
<div className="relative h-1.5 w-full rounded-full overflow-hidden bg-white/10">
<div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r to-rose-500 rounded-full transition-all duration-1000 group-hover:w-[90%] from-neutral-600"></div>
</div>

<div className="absolute top-6 left-[85%] -translate-x-1/2 w-3.5 h-3.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] border-2 border-[#050505] transition-all duration-1000 group-hover:left-[90%] bg-white"></div>
</div>

<div className="mt-8 grid grid-cols-2 gap-3">
<div className="px-3 py-2.5 rounded-lg border bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-center gap-2 cursor-pointer border-white/10">
<svg className="lucide lucide-history text-neutral-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
<span className="text-[10px] font-medium text-neutral-300">View Log</span>
</div>
<div className="px-3 py-2.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors flex items-center justify-center gap-2 cursor-pointer">
<svg className="lucide lucide-check-circle text-indigo-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
<span className="text-[10px] font-medium text-indigo-300">Fix Now</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative reveal-on-scroll">

<div className="max-w-3xl mx-auto text-center mb-20">
<span className="block text-xs font-mono tracking-widest uppercase mb-3 text-indigo-400">The Platform</span>
<h2 className="lg:text-5xl text-3xl font-light tracking-tight font-oswald mb-6 text-white">
            From raw changes to usable intelligence.
        </h2>
<p className="leading-relaxed text-lg font-light text-neutral-400">Sigmal monitors competitor websites and social channels and turns key changes into clear insights with explanations you can act on all in one dashboard.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl border overflow-hidden hover:border-indigo-500/30 transition-all duration-500 bg-[#0A0A0A] border-white/10">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay filter blur-xl group-hover:opacity-30 transition-opacity duration-700" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A] to-[#0A0A0A]"></div>
</div>
<div className="relative h-48 mb-8 flex items-center justify-center z-10">
<div className="relative">
<div className="absolute inset-0 bg-indigo-500 blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-20 h-20 border rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 group-hover:border-white/20 group-hover:bg-white/10 bg-white/5 border-white/10">
<iconify-icon className="group-hover:text-white transition-colors text-neutral-400" icon="lucide:scan-eye" width="32"></iconify-icon>
</div>

<div className="absolute -inset-4 border border-dashed rounded-full animate-[spin_10s_linear_infinite] opacity-50 border-white/5"></div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-oswald font-light mb-3 text-white">Monitor Everything</h3>
<p className="leading-relaxed text-sm font-light text-neutral-400">Track websites, documentation, and social feeds in real time. Sigmal watches every pixel 24/7 so you don't have to.</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl border overflow-hidden hover:border-indigo-500/30 transition-all duration-500 bg-[#0A0A0A] border-white/10">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay filter blur-xl group-hover:opacity-30 transition-opacity duration-700" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A] to-[#0A0A0A]"></div>
</div>
<div className="relative h-48 mb-8 flex items-center justify-center z-10">
<div className="relative">
<div className="absolute inset-0 bg-indigo-500 blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-20 h-20 border rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 group-hover:border-white/20 group-hover:bg-white/10 bg-white/5 border-white/10">
<iconify-icon className="group-hover:text-white transition-colors text-neutral-400" icon="lucide:filter" width="32"></iconify-icon>
</div>

<div className="absolute top-1/2 -right-8 w-6 h-px bg-gradient-to-r to-transparent from-white/20"></div>
<div className="absolute top-1/2 -left-8 w-6 h-px bg-gradient-to-l to-transparent from-white/20"></div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-oswald font-light mb-3 text-white">Meaningful Signals</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400">
                    Our AI filters out the noise of timestamps and minor edits, isolating only the meaningful changes that impact your strategy.
                </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl border border-indigo-500/30 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-[0_0_40px_-10px_rgba(99,102,241,0.1)] bg-[#0A0A0A]">

<div className="absolute inset-0 z-0">
<img alt="Gradient Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay filter blur-xl" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b via-[#0A0A0A] to-[#0A0A0A] from-indigo-950/90"></div>
</div>
<div className="relative h-48 mb-8 flex items-center justify-center z-10">
<div className="relative">
<div className="absolute inset-0 bg-indigo-500 blur-[30px] opacity-20 animate-pulse"></div>
<div className="w-20 h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)] transform group-hover:scale-105 transition-transform duration-500 ring-1 from-indigo-600 to-indigo-700 ring-white/20">
<iconify-icon className="text-white" icon="lucide:sparkles" width="36"></iconify-icon>
</div>
<div className="absolute -right-12 top-1/2 w-16 h-px bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
<div className="absolute -left-12 top-1/2 w-16 h-px bg-gradient-to-l from-indigo-500/50 to-transparent"></div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-oswald font-light mb-3 flex items-center gap-3 text-white">
                    Instant Context
                    <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 border border-indigo-500/30 font-sans tracking-wide uppercase font-medium text-indigo-300">New</span>
</h3>
<p className="text-sm font-light leading-relaxed text-indigo-100/70">
                    Understand the 'why' behind every move. Sigmal synthesizes changes into clear, actionable intelligence briefs.
                </p>
</div>
</div>
</div>
</section>

<section className="z-10 reveal-on-scroll max-w-7xl border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative border-white/5">

<div className="text-center max-w-3xl mr-auto mb-16 ml-auto">
<span className="block text-xs font-mono tracking-widest uppercase mb-3 text-indigo-400">The Intelligence</span>
<h2 className="text-4xl lg:text-5xl font-oswald font-light mb-6 tracking-tight text-white">Insights you can act on.</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400">Sigmal cuts through the noise by grouping changes into Product, Pricing, Marketing, and Technology. We summarize the impact in plain language so you can stop digging and start deciding.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 p-8 rounded-3xl border bg-[#0A0A0A] relative overflow-hidden group transition-all duration-500 border-white/10 hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex-1 flex items-center justify-center mb-8 px-4">

<div className="w-full max-w-md bg-[#0F0F0F] rounded-xl border shadow-2xl overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-500 border-white/10">

<div className="px-4 py-3 border-b bg-white/[0.02] flex justify-between items-center border-white/5">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded flex items-center justify-center font-bold text-[8px] bg-white text-black">S</div>
<span className="text-xs font-medium text-white">Stripe</span>
</div>
<span className="px-2 py-0.5 rounded text-[9px] font-medium tracking-wide bg-indigo-500/10 border border-indigo-500/20 uppercase text-indigo-400">Product</span>
</div>

<div className="p-4">
<h4 className="text-sm mb-2 font-medium text-neutral-200">New "Connect Embedded" features launched</h4>
<div className="p-3 rounded-lg border mb-3 bg-neutral-900/50 border-white/5">
<p className="text-xs font-mono leading-relaxed text-neutral-400">
<span className="line-through opacity-60 text-rose-400">"Standard onboarding"</span>
<span className="text-emerald-400">"Customizable onboarding flows"</span>
</p>
</div>
<p className="text-xs font-light leading-relaxed text-neutral-300">
                                     Stripe is aggressively targeting SaaS platforms by allowing fully white-labeled onboarding, directly competing with our "Pro" plan features.
                                </p>
</div>
</div>
</div>
<div className="flex items-end justify-between">
<div className="">
<h3 className="text-xl font-oswald font-light mb-2 text-white">Plain Language Summaries</h3>
<p className="text-sm font-light max-w-md text-neutral-400">Clear explanations of what changed and why it matters to your business.</p>
</div>
<div className="hidden sm:flex gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="flex-1 p-8 rounded-3xl border bg-[#0A0A0A] relative overflow-hidden group transition-all duration-500 border-white/10 hover:border-white/20">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[40px] rounded-full"></div>
<div className="relative z-10">
<div className="mb-6 flex justify-start">

<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#141414] border shadow-lg transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300 border-white/10">
<div className="w-8 h-8 rounded-lg bg-[#4A154B] flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="simple-icons:slack" width="16"></iconify-icon>
</div>
<div>
<div className="h-1.5 w-24 rounded mb-1.5 bg-white/20"></div>
<div className="h-1.5 w-16 rounded bg-white/10"></div>
</div>
<div className="w-2 h-2 rounded-full bg-rose-500 ml-2"></div>
</div>
</div>
<h3 className="text-lg font-oswald font-light mb-2 text-white">Delivered to you</h3>
<p className="leading-relaxed text-sm font-light text-neutral-400">
                            Get alerts in Slack, email, or your dashboard. Never miss a critical signal.
                        </p>
</div>
</div>

<div className="flex-1 p-8 rounded-3xl border bg-[#0A0A0A] relative overflow-hidden group transition-all duration-500 border-white/10 hover:border-white/20">
<div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 blur-[40px] rounded-full"></div>
<div className="relative z-10">
<div className="mb-6 flex justify-start">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-105 transform duration-300 bg-white text-black hover:bg-neutral-200">
<iconify-icon className="" icon="solar:export-linear" width="14"></iconify-icon>
                                Share Brief
                            </button>
</div>
<h3 className="text-lg font-oswald font-light mb-2 text-white">Share in seconds</h3>
<p className="leading-relaxed text-sm font-light text-neutral-400">
                            Generate executive briefs with one click. Keep your team aligned on the competition.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative max-w-5xl mx-auto my-24 rounded-[2.5rem] overflow-hidden border shadow-2xl group reveal-on-scroll border-white/10">

<div className="absolute inset-0 bg-[#080808]">

<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30 animate-[spin_60s_linear_infinite]" style={{background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)'}}>
</div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
</div>

<div className="relative z-10 px-8 py-24 md:py-32 flex flex-col items-center text-center">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm text-indigo-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[11px] font-medium tracking-widest uppercase font-mono">Live Monitoring</span>
</div>

<h2 className="text-5xl md:text-7xl font-oswald font-light tracking-tight mb-6 max-w-3xl leading-[1.1] text-white">
            Turn competitor activity 
            <span className="text-transparent bg-clip-text bg-gradient-to-br to-neutral-500 from-white via-neutral-200">into intelligence.</span>
</h2>

<p className="leading-relaxed text-lg font-light max-w-xl mb-10 text-neutral-400">Stop guessing and start knowing. Get real-time alerts on pricing, product updates, and marketing shifts before anyone else.</p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto group relative px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] overflow-hidden bg-white text-black hover:bg-neutral-200">
<span className="relative z-10">Start tracking competitors</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>

<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent to-transparent z-0 via-white/40"></div>
</button>
</div>

</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 blur-[80px] rounded-full pointer-events-none bg-indigo-600/20"></div>
</section>

<footer className="relative w-full overflow-hidden border-t reveal-on-scroll bg-black text-white border-white/5">
<div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden">
<h1 className="text-[17vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-t to-transparent opacity-50 translate-y-[20%] font-oswald font-light from-neutral-900">
                SIGMAL
            </h1>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded flex items-center justify-center bg-indigo-600 text-white">
<iconify-icon icon="solar:radar-2-linear" width="14"></iconify-icon>
</div>
<span className="text-lg font-oswald font-medium tracking-wide">Sigmal</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed mb-6">
                        Competitive intelligence for the modern enterprise. Track, analyze, and act on market signals in real-time.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-500 transition hover:text-white" href="#"><iconify-icon className="" icon="prime:twitter" width="18"></iconify-icon></a>
<a className="text-neutral-500 transition hover:text-white" href="#"><iconify-icon className="" icon="prime:github" width="18"></iconify-icon></a>
<a className="text-neutral-500 transition hover:text-white" href="#"><iconify-icon className="" icon="prime:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div className="">
<h3 className="text-sm font-medium mb-4 text-white">Product</h3>
<ul className="space-y-2">
<li className=""><a className="text-xs text-neutral-500 transition font-light hover:text-white" href="#">Intelligence</a></li>
<li className=""><a className="transition hover:text-white text-xs font-light text-neutral-500" href="#" style={{}}>Monitoring</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-medium mb-4 text-white">Company</h3>
<ul className="space-y-2">
<li className=""><a className="text-xs text-neutral-500 transition font-light hover:text-white" href="#">About</a></li>
<li className=""><a className="text-xs text-neutral-500 transition font-light hover:text-white" href="#">Customers</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-medium mb-4 text-white">Legal</h3>
<ul className="space-y-2">
<li className=""><a className="text-xs text-neutral-500 transition font-light hover:text-white" href="#">Privacy</a></li>
<li className=""><a className="text-xs text-neutral-500 transition font-light hover:text-white" href="#">Terms</a></li>
<li className=""><a className="text-xs text-neutral-500 transition font-light hover:text-white" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<span className="text-[10px] uppercase tracking-widest text-neutral-600">© 2025 Sigmal Inc.</span>
<div className="flex items-center gap-2">
</div>
</div>
</div>
</footer>



    </>
  );
}
