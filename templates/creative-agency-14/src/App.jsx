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



    !function () {
          if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: !1 };
            var i = document.createElement("script");
            i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
            i.onload = function () {
              window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
            },
            (document.head || document.body).appendChild(i)
          }
        }();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full top-0 saturate-150 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="bcBYZIStYXwiogchBNHO"></div>

</div></div>

<div className="fixed top-0 w-full h-screen mix-blend-lighten pointer-events-none -z-40">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.15),transparent_50%)]"></div>
<div className="absolute top-[20%] left-[20%] w-96 h-96 bg-red-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav className="w-full max-w-5xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-lg px-2 py-2 flex items-center justify-between shadow-2xl shadow-black/50">

<div className="flex ring-green-700 pt-1 pb-1 pl-1 hue-rotate-0 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
<svg className="bg-gradient-to-br from-white/10 to-white/0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] drop-shadow-lg w-[96px] h-[55px]" data-icon-replaced="true" data-icon-set="skill-icons" data-skill-icons="activitypub-dark" fill="none" height="56" strokeWidth="0.5" style={{width: '96px', height: '55px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 256 256" width="98" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none"><rect className="" fill="#242938" height="256" rx="60" width="256"></rect><path className="" clip-rule="evenodd" d="m137.15 52l86.841 63.279v25.237l-86.841 63.655v-25.236l69.533-50.849l-69.533-50.473z" fill="#F1027E" fill-rule="evenodd"></path><path clip-rule="evenodd" d="m137.15 102.849l34.617 25.237l-34.617 25.236z" fill="#F1027E" fill-rule="evenodd"></path><path className="" clip-rule="evenodd" d="M119.841 52L33 115.279v25.237l69.533-50.473v101.322l17.308 12.806zm-34.617 76.086L50.31 153.322l34.617 25.236v-50.472z" fill="#6D6D6D" fill-rule="evenodd"></path></g></svg>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#work">Work</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#about">Services</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#about">About</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</div>

<div className="">
<a className="group flex items-center gap-2 bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 rounded px-5 py-2 transition-all duration-300" href="#">
<span className="text-xs font-semibold tracking-wide uppercase text-neutral-200 group-hover:text-white">Book Call</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5 text-neutral-400 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>
</header>

<section className="flex flex-col min-h-screen pt-32 pb-10 relative items-center justify-center px-4" id="home">

<div className="mb-10 animate-fade-in-down" style={{animation: 'fadeIn 0.8s ease-out forwards'}}>
<div className="inline-flex transition-transform hover:scale-105 cursor-default border-white/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="text-sm text-neutral-300 font-medium tracking-wide">Available for new projects</span>
</div>
</div>

<div className="max-w-6xl mx-auto text-center space-y-2 mb-10">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] md:leading-[1.1]" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'}}>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">Design your</span>
<span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] relative z-10">vision</span>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">with</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">creative excellence</span>
</h1>
</div>

<p className="max-w-2xl mx-auto text-center text-lg md:text-xl text-neutral-400 font-normal leading-relaxed mb-16 tracking-wide" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'}}>
            Crafting digital experiences that merge art and technology. From branding to web development, I build it all.
        </p>

<div className="flex flex-col md:flex-row items-center gap-6">
<a className="group relative px-8 py-3.5 bg-neutral-900 border border-white/10 hover:border-red-500/50 rounded overflow-hidden transition-all duration-300 w-full md:w-auto" href="#work" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'}}>
<div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative flex items-center justify-center gap-2">
<span className="text-sm font-semibold tracking-widest uppercase text-white">View Portfolio</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-400 group-hover:text-red-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<button className="group relative px-8 py-3.5 bg-transparent border border-white/10 hover:border-white/30 hover:bg-white/[0.02] rounded transition-all duration-300 w-full md:w-auto" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'}}>
<div className="relative flex items-center justify-center gap-2">
<span className="text-sm font-semibold tracking-widest uppercase text-white">Contact Me</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-12 md:py-24 relative z-10" id="work" style={{opacity: '1', transform: 'translateY(0px)', transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'}}>

<div className="mb-16">
<span className="text-red-600 font-mono text-xs font-semibold tracking-widest uppercase mb-4 block">01. Featured Case Study</span>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
<div className="">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
                        Real <span className="text-red-600">Products</span>
</h2>
<p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                        A selected case study showcasing how we design and build scalable digital products, driven by performance, data, and real business impact.
                    </p>
</div>
<a className="group flex items-center gap-3 px-6 py-3 bg-[#0f0f0f] border border-white/10 rounded-md hover:bg-[#151515] hover:border-white/20 transition-all" href="#">
<span className="text-sm font-semibold text-white">View Case Study</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-neutral-400 group-hover:text-red-500 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="border border-white/10 rounded-2xl bg-[#080808] overflow-hidden flex flex-col lg:flex-row shadow-2xl">

<div className="w-full lg:w-[45%] border-b lg:border-b-0 lg:border-r border-white/10 relative group overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-black">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-900/10 blur-[80px] rounded-full"></div>

<div className="h-full flex items-center justify-center p-8 lg:p-12 min-h-[600px]">
<div className="relative w-[300px] h-[600px] bg-[#050505] rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-xl z-20"></div>

<div className="w-full h-full text-white p-5 flex flex-col relative z-10">

<div className="flex justify-between items-center text-[10px] text-neutral-400 font-medium mb-6 mt-1 px-1">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<svg className="lucide lucide-wifi" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a14.7 14.7 0 0 0-12.8 6.9"></path><path d="M12 7a9.4 9.4 0 0 0-9 5.5"></path><path d="M12 12a5.4 5.4 0 0 0-4.5 2.5"></path><path d="M12 17a1 1 0 0 0-1 1"></path></svg>
<div className="w-4 h-2.5 border border-neutral-600 rounded-[2px] relative"><div className="absolute inset-0.5 bg-neutral-400 w-[70%]"></div></div>
</div>
</div>

<div className="flex justify-between items-center mb-8">
<h3 className="text-2xl font-serif italic">Stats</h3>
<div className="flex gap-3">
<div className="p-2 rounded-full bg-neutral-900 border border-white/10"><svg className="lucide lucide-bell" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg></div>
<div className="p-2 rounded-full bg-neutral-800 border border-white/10"><svg className="lucide lucide-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></div>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-2xl p-5 mb-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-900/20 blur-xl rounded-full -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="text-lg font-semibold mb-1">New User</h4>
<p className="text-xs text-neutral-500">Last 6 months</p>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-neutral-400 bg-white/5 px-2 py-1 rounded-full border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                        Overall - 80%
                                    </div>
</div>

<div className="h-40 flex items-end justify-between gap-2 pl-4 border-l border-white/5 relative">

<div className="absolute -left-0 bottom-0 h-full flex flex-col justify-between text-[8px] text-neutral-600 py-1">
<span>0</span>
<span>50</span>
<span>100</span>
</div>

<div className="w-full flex items-end justify-between h-full pl-2 gap-2">

<div className="w-full h-[20%] relative group/bar">
<div className="absolute bottom-0 w-full h-full bg-neutral-800 rounded-t-sm animate-bar-infinite shadow-sm delay-100" style={{animationDuration: '2.2s'}}></div>
</div>

<div className="w-full h-[50%] relative group/bar">
<div className="absolute bottom-0 w-full h-full bg-[#1c1c1c] rounded-t-sm animate-bar-infinite shadow-sm delay-200" style={{animationDuration: '3.5s'}}></div>

<div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 flex flex-col items-center z-10 animate-bar-infinite delay-200" style={{animationDuration: '3.5s', transformOrigin: 'bottom center'}}>
<div className="bg-[#1a1a1a] border border-white/10 px-2 py-1.5 rounded text-[9px] text-center shadow-lg">
<span className="block text-white font-semibold tracking-wide">70%</span>
<span className="block text-neutral-500 font-medium">41K</span>
</div>
</div>
</div>

<div className="w-full h-[30%] relative group/bar">
<div className="absolute bottom-0 w-full h-full bg-red-900/60 rounded-t-sm animate-bar-infinite shadow-[0_0_10px_rgba(153,27,27,0.2)] delay-300" style={{animationDuration: '2.8s'}}></div>
</div>

<div className="w-full h-[75%] relative shadow-[0_0_15px_rgba(220,38,38,0.3)]">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-red-800 to-red-500 rounded-t-md animate-bar-infinite delay-500" style={{animationDuration: '4s'}}></div>

<div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-white/10 px-2 py-1.5 rounded text-[9px] text-center w-max z-20 shadow-xl animate-bar-infinite delay-500" style={{animationDuration: '4s', transformOrigin: 'bottom center'}}>
<span className="block text-white font-semibold tracking-wide">78%</span>
<span className="block text-neutral-500 font-medium">30K</span>
</div>
</div>
</div>
</div>

<div className="flex justify-between text-[8px] text-neutral-500 mt-3 px-2">
<span>App Install</span>
<span>App open</span>
<span>Sign Up</span>
<span>Home page</span>
</div>
</div>

<div className="mt-auto mx-auto w-32 h-1 bg-white/20 rounded-full"></div>
</div>

<div className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-white/10 rounded-full">
<div className="w-full h-8 bg-white/30 rounded-full mt-2"></div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[55%] flex flex-col" id="about">

<div className="border-b border-white/10 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="">
<h3 className="text-3xl font-semibold text-white mb-1">Creative Agency</h3>
<p className="text-xs text-neutral-500 font-medium tracking-wide uppercase">Digital Product Studio • EST. 2012</p>
</div>
<div className="flex gap-8 md:gap-12">
<div className="text-center">
<span className="block text-xs text-neutral-500 font-semibold tracking-wider uppercase mb-1">Projects</span>
<span className="block text-2xl font-medium text-white">142</span>
</div>
<div className="text-center">
<span className="block text-xs text-neutral-500 font-semibold tracking-wider uppercase mb-1">Awards</span>
<span className="block text-2xl font-medium text-white">28</span>
</div>
<div className="text-center">
<span className="block text-xs text-neutral-500 font-semibold tracking-wider uppercase mb-1">Offices</span>
<span className="block text-2xl font-medium text-white">4</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row border-b border-white/10 flex-1">

<div className="w-full md:w-1/2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between gap-10">
<p className="text-neutral-400 leading-relaxed text-sm">
                            We craft digital experiences that merge art, technology, and strategy. Our approach is rooted in rigorous design systems and future-ready engineering to help brands thrive in the modern economy.
                        </p>
<div className="">
<button className="flex items-center gap-3 px-5 py-3 border border-white/10 bg-white/[0.02] hover:bg-white/5 rounded text-xs font-semibold tracking-wider uppercase text-white transition-colors mb-8 w-fit">
<svg className="lucide lucide-play w-3.5 h-3.5 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                                Agency Reel
                            </button>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Accepting Q3 Projects</span>
</div>
</div>
</div>

<div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between gap-6 bg-[#0a0a0a]">
<div className="space-y-2">
<a className="flex justify-between items-center p-3 border border-white/5 rounded bg-[#0f0f0f] hover:border-white/20 hover:bg-[#151515] transition-all group" href="#">
<span className="text-sm font-medium text-neutral-300 group-hover:text-white">LinkedIn</span>
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="flex justify-between items-center p-3 border border-white/5 rounded bg-[#0f0f0f] hover:border-white/20 hover:bg-[#151515] transition-all group" href="#">
<span className="text-sm font-medium text-neutral-300 group-hover:text-white">Behance</span>
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<a className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-colors mt-auto shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]" href="#">
                            Start a Project
                            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="p-8 md:p-10">
<div className="flex justify-between items-end mb-6">
<span className="text-red-600 font-mono text-xs font-semibold tracking-widest uppercase">Recent Work</span>
<a className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors" href="#">View All Projects</a>
</div>
<div className="grid grid-cols-2 gap-4 h-40">
<div className="relative w-full h-full rounded bg-neutral-900 overflow-hidden group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-neutral-900 to-neutral-900 group-hover:scale-110 transition-transform duration-700"></div>
<div className="bg-center bg-[url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-white">Vesper Finance</span>
</div>
</div>
<div className="relative w-full h-full rounded bg-neutral-900 overflow-hidden group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-neutral-900 to-neutral-900 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-white">Luma AI</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-24 relative z-10" id="pricing">
<div className="mb-20 text-center max-w-2xl mx-auto">
<span className="text-red-600 font-mono text-xs font-semibold tracking-widest uppercase mb-4 block">02. Pricing</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Scalable <span className="text-red-600">solutions</span>
</h2>
<p className="text-lg text-neutral-400 leading-relaxed">
                Transparent pricing for world-class design and engineering. Pause or cancel anytime.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

<div className="relative p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors group overflow-hidden">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-neutral-800/20 blur-[80px] rounded-full group-hover:bg-neutral-800/30 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-pencil-ruler w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 2.9 5 5"></path><path d="m12 7 3 3"></path><path d="m8 11 3 3"></path><path d="m2 17 3 3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Design</h3>
<p className="text-sm text-neutral-400 mb-6 h-10">UI/UX design for web and mobile apps. Unlimited requests.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-white">$4,500</span>
<span className="text-sm text-neutral-500">/month</span>
</div>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 text-white text-sm font-medium transition-all mb-8">
                        Choose design
                    </button>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-user w-4 h-4 text-neutral-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>1 active request</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-clock w-4 h-4 text-neutral-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>48h turnaround</span>
</div>
</div>
<div className="h-px bg-white/5 w-full mb-8"></div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-neutral-600 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Figma source files</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-neutral-600 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Weekly calls</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-neutral-600 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Slack channel access</span>
</li>
</ul>
</div>
</div>

<div className="relative p-6 rounded-2xl bg-[#080808] border border-red-500/30 hover:border-red-500/50 transition-colors group overflow-hidden lg:-mt-6 lg:mb-6 shadow-[0_0_50px_rgba(220,38,38,0.1)]">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full group-hover:bg-red-600/20 transition-all"></div>

<div className="absolute top-0 right-0 m-2 px-3 py-1 bg-gradient-to-r from-red-600/20 to-red-900/20 border border-red-500/20 rounded-full backdrop-blur-md">
<span className="text-[10px] font-semibold tracking-wider uppercase text-red-200">Most Popular</span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900/40 to-black border border-red-500/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
<svg className="lucide lucide-code-2 w-6 h-6 text-red-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Engineering</h3>
<p className="text-sm text-neutral-400 mb-6 h-10">Full-stack development for scalable products. React, Node &amp; more.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-white">$8,500</span>
<span className="text-sm text-neutral-500">/month</span>
</div>
<button className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all mb-8 shadow-lg shadow-red-900/20">
                        Choose engineering
                    </button>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-zap w-4 h-4 text-red-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span>2 active requests</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-history w-4 h-4 text-red-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
<span>Daily progress updates</span>
</div>
</div>
<div className="h-px bg-white/5 w-full mb-8"></div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-red-500 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>React, Next.js, TypeScript</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-red-500 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>API Integration &amp; Database</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-red-500 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Technical SEO Optimization</span>
</li>
</ul>
</div>
</div>

<div className="relative p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors group overflow-hidden">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-neutral-800/20 blur-[80px] rounded-full group-hover:bg-neutral-800/30 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-sparkles w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Product Lab</h3>
<p className="text-sm text-neutral-400 mb-6 h-10">End-to-end product development. From idea to launch.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-white">Custom</span>
</div>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 text-white text-sm font-medium transition-all mb-8">
                        Book a call
                    </button>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-users w-4 h-4 text-neutral-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span>Dedicated team</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-message-square w-4 h-4 text-neutral-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span>Priority support</span>
</div>
</div>
<div className="h-px bg-white/5 w-full mb-8"></div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-neutral-600 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Strategy &amp; Consulting</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-neutral-600 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Design + Engineering</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-neutral-600 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Growth &amp; Marketing</span>
</li>
</ul>
</div>
</div>
</div>
</section>

    </>
  );
}
