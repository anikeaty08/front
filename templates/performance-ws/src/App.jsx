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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['IBM Plex Serif', 'serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b', // Main background
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
}
});
}, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
// Trigger hero animations immediately
setTimeout(() => {
document.querySelectorAll("#hero .animate-on-scroll").forEach(el => el.classList.add("animate"));
}, 100);
});



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        const body = document.getElementById('main-body');
        const spotlightGroups = document.querySelectorAll('.spotlight-group');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            body.style.setProperty('--mouse-x', `${x}px`);
            body.style.setProperty('--mouse-y', `${y}px`);

            spotlightGroups.forEach(group => {
                const rect = group.getBoundingClientRect();
                const relX = x - rect.left;
                const relY = y - rect.top;
                
                group.style.setProperty('--mouse-x-rel', `${relX}px`);
                group.style.setProperty('--mouse-y-rel', `${relY}px`);
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
      

<div className="aura-background-component fixed -z-10 w-full h-screen top-0 saturate-50 gap-x-4 gap-y-4" data-alpha-mask="52" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 52%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 52%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<div className="fixed -translate-x-1/2 -z-10 pointer-events-none bg-gradient-to-b from-zinc-900/40 via-zinc-950/20 to-transparent w-full h-[800px] top-0 left-1/2 gap-x-4 gap-y-4"></div>
<div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<div className="pointer-events-none fixed z-0 transition-opacity duration-300 top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03), transparent 40%)'}}></div>

<div className="fixed bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50 h-[1px] z-50 top-0 right-0 left-0"></div>

<div className="pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 border-x h-[1200px] max-w-7xl border-white/5 mr-auto ml-auto absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4">
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden delay-100">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-beam" style={{animationDuration: '7s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-150 relative overflow-hidden">
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '2s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-75"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-100 relative overflow-hidden">
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '1.5s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-400"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-150"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-300"></div>
</div>

<nav className="fixed z-50 -translate-x-1/2 md:w-auto shrink-0 w-[90%] max-w-5xl top-6 left-1/2 gap-x-4 gap-y-4">
<div className="shadow-black/50 md:px-6 flex gap-4 md:gap-12 bg-zinc-900/70 h-14 border-white/10 border rounded-full pr-4 pl-4 shadow-2xl backdrop-blur-xl gap-x-4 gap-y-4 items-center justify-between">

<a className="flex items-center shrink-0 mr-4" href="#hero">
<img alt="Nexus" className="block cursor-pointer w-auto h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c03c0523-61f7-42b7-8887-81982fc8f4c6_800w.png?w=800&amp;q=80"/>
</a>

<div className="flex gap-8 hidden md:flex font-jakarta gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors flex items-center gap-1 group text-sm font-medium text-zinc-400 font-jakarta" href="https://medium.com" rel="noopener noreferrer" target="_blank">
                    Insights 
                </a>
<a className="hover:text-white transition-colors text-sm font-medium text-zinc-400 font-jakarta" href="#Manifesto">Manifesto</a>
<a className="hover:text-white transition-colors text-sm font-medium text-zinc-400 font-jakarta" href="#Contact" style={{}}>Contact</a>
</div>

<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>
</nav>

<main className="pt-24 relative gap-x-4 gap-y-4">

<section className="flex flex-col z-10 md:mt-32 min-h-[80vh] w-full max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6 relative justify-center" id="hero">

<div className="flex spotlight-group animate-on-scroll animate w-full mb-10 relative justify-start" style={{'--mouse-x-rel': '1557px', '--mouse-y-rel': '3586.5px'}}>
<a className="z-10 group flex items-center gap-3 hover:border-white/20 transition-all overflow-hidden bg-zinc-900/50 border-white/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-1.5 relative" href="https://performance.network/" rel="noopener noreferrer" target="_blank">
<span className="text-[10px] uppercase font-bold text-white tracking-wide bg-zinc-800 border-white/5 border rounded-full pt-0.5 pr-2.5 pb-0.5 pl-2.5 font-jakarta" style={{}}>Beta</span>
<span className="group-hover:text-zinc-300 cursor-pointer text-sm font-medium text-zinc-400 font-jakarta" style={{}}>Performance Network</span>
<iconify-icon className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="w-full max-w-5xl">
<div className="relative z-20 animate-on-scroll animate">
<div className="flex flex-col gap-2 gap-x-2 gap-y-2">
<div className="flex uppercase text-xs text-zinc-500 tracking-widest font-mono mb-4 gap-x-2 gap-y-2 items-center font-jakarta" style={{}}>THE FUTURE OF WORK</div>
<h1 className="md:text-8xl lg:text-[100px] leading-[0.95] text-5xl text-white tracking-tighter font-serif mix-blend-screen">
<span className="block word-mask font-serif"><span className="block word-reveal font-extrabold font-jakarta" style={{}}>AI Changes</span><span className="block word-reveal italic font-playfair" style={{}}>the rules.</span></span>
</h1>
</div>
</div>
</div>

<div className="md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 animate-on-scroll animate w-full mt-32 gap-x-4 gap-y-4 items-end">

<div className="group md:p-8 spotlight-group overflow-hidden hover:bg-zinc-900/50 transition-all duration-500 bg-zinc-900/30 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm gap-x-4 gap-y-4" style={{'--mouse-x-rel': '1557px', '--mouse-y-rel': '3143.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="absolute left-0 top-8 w-0.5 h-12 bg-white rounded-r-full"></div>
<p className="leading-relaxed z-10 md:text-2xl text-lg italic text-zinc-300 font-playfair max-w-lg relative">How we work is being rewritten right now. The changes are massive and are happening at tremendous speed. Work is being restructured at its core. Capabilities that defined success in the past are no longer relevant, while new competitive advantages are emerging, under conditions that are not yet fully visible.</p>
</div>

</div>

</section>

<section className="flex flex-col md:mt-44 z-20 opacity-100 w-full border-white/5 border-t mt-44 pt-32 pb-32 relative" id="features">
<div className="[background-size:100px_50px] pointer-events-none opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="animate-on-scroll text-center max-w-2xl mr-auto mb-20 ml-auto">
<h2 className="md:text-5xl text-4xl italic text-white tracking-tight font-playfair mb-4">The future <span className="not-italic font-normal text-zinc-500 font-playfair">of work.</span></h2>
<p className="leading-relaxed text-lg font-light text-zinc-500 font-jakarta" style={{}}>Artificial intelligence is reshaping how we work, learn, and earn a living. For many people, this brings uncertainty —even job loss. We are creating an environment to learn, collaborate, and turn ideas into real outcomes.  And together, we shape what comes next.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="group spotlight-group overflow-hidden hover:bg-zinc-900/60 transition-all duration-300 flex flex-col animate-on-scroll bg-zinc-900/20 h-full border-white/5 border rounded-2xl p-8 relative" style={{'--mouse-x-rel': '1557px', '--mouse-y-rel': '2254px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="z-10 flex flex-col h-full relative">

<h3 className="group-hover:text-white transition-colors text-3xl italic text-white tracking-tight font-playfair mb-4">Understand fast.</h3>

<p className="leading-7 flex-grow text-sm font-light text-zinc-500 font-jakarta mb-10">
                                Market leadership, stability, and security can no longer be assumed. Adaptability and continuous learning now decide who moves forward. Without access to technology, knowledge, and practical environments, exclusion becomes inevitable.
                            </p>

</div>
</div>

<div className="group spotlight-group overflow-hidden hover:bg-zinc-900/60 transition-all duration-300 flex flex-col animate-on-scroll bg-zinc-900/20 h-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative" style={{'--mouse-x-rel': '1138.34375px', '--mouse-y-rel': '2254px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="relative z-10 flex flex-col h-full">

<h3 className="group-hover:text-white transition-colors text-3xl italic text-white tracking-tight font-serif mb-4">Act with intention.</h3>

<p className="text-sm text-zinc-500 leading-7 font-light mb-10 flex-grow font-jakarta" style={{}}>
                                The future cannot be predicted, but participation remains possible when one knows how. We know the way and provide orientation. Those who start early and keep learning shape outcomes, not just react to them.
                            </p>

</div>
</div>

<div className="group spotlight-group overflow-hidden hover:bg-zinc-900/60 transition-all duration-300 flex flex-col animate-on-scroll bg-zinc-900/20 h-full border-white/5 border rounded-2xl p-8 relative" style={{'--mouse-x-rel': '719.671875px', '--mouse-y-rel': '2254px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}></div>
<div className="relative z-10 flex flex-col h-full">

<h3 className="group-hover:text-white transition-colors text-3xl italic text-white tracking-tight font-serif mb-4">We leave no partner behind.</h3>

<p className="text-sm text-zinc-500 leading-7 font-light mb-10 flex-grow font-jakarta" style={{}}>
                                Performance Workspace supports the global transition of work in the age of artificial intelligence by providing tools, structure, and a stable environment to adapt, grow, and remain an active part of the future of work.
                            </p>

</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col md:mt-40 w-full max-w-7xl mt-40 mr-auto ml-auto pr-6 pl-6 relative gap-x-4 gap-y-4" id="workflow">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent blur-3xl -z-10 opacity-30 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 w-full gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-5 flex flex-col animate-on-scroll justify-center">
<h2 className="md:text-5xl leading-[1.05] text-4xl text-white tracking-tight font-serif mb-8 font-jakarta" style={{}}>
                        First look at what we’re <span className="italic text-zinc-500 font-jakarta" style={{}}>addressing today.</span>
</h2>
<p className="leading-relaxed text-base font-light text-zinc-400 border-white/10 border-l mb-10 pl-6 font-jakarta" style={{}}>
                        Our first products focus on sales and network marketing, demonstrating how AI agents turn ideas into practical solutions. Throughout 2026, additional vertical agents will roll out in our B2B Performance App Store.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="lucide:network" width="16"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-1 font-jakarta" style={{}}>Network Marketing Optimization</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed font-jakarta" style={{}}>Automated structure analysis and growth projection algorithms.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-1 font-jakarta" style={{}}>Agent Swarms</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed font-jakarta" style={{}}>Self-organizing AI agents for lead generation and nurturing.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="lucide:bar-chart-3" width="16"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-1 font-jakarta" style={{}}>Real-time Performance</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed font-jakarta" style={{}}>Live dashboards replacing static monthly reports.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 animate-on-scroll relative">

<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-30"></div>

<div className="glass-panel rounded-xl border border-white/10 p-1 relative overflow-hidden">

<div className="bg-zinc-900/90 border-b border-white/5 px-4 py-3 flex items-center justify-between rounded-t-lg">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] flex gap-2 text-zinc-500 font-mono gap-x-2 gap-y-2 items-center font-jakarta" style={{}}>Performance Network</div>
</div>

<div className="min-h-[360px] bg-zinc-950/50 pt-6 pr-6 pb-6 pl-6 relative">

<div className="flex justify-between items-end mb-8">
<div className="">
<div className="text-xs text-zinc-500 font-mono mb-1 font-jakarta" style={{}}>WORKSPACE</div>
<div className="text-lg text-white font-medium tracking-tight font-jakarta" style={{}}>Global Sales Operations</div>
</div>
<div className="flex items-center gap-2 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-emerald-400 font-jakarta" style={{}}>System Active</span>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mb-8">
<div className="bg-zinc-900/60 border-white/5 border rounded-lg pt-3 pr-3 pb-3 pl-3">
<div className="text-[10px] text-zinc-500 mb-1 font-jakarta" style={{}}>MEMBERS ACTIVE</div>
<div className="text-xl font-medium text-white font-jakarta" style={{}}>1,325</div>
</div>
<div className="bg-zinc-900/60 border border-white/5 rounded-lg p-3">
<div className="text-[10px] text-zinc-500 mb-1 font-jakarta" style={{}}>GROWTH</div>
<div className="text-xl text-white font-medium font-jakarta" style={{}}>+22.4%</div>
</div>
<div className="bg-zinc-900/60 border border-white/5 rounded-lg p-3">
<div className="text-[10px] text-zinc-500 mb-1 font-jakarta" style={{}}>ONBOARDING</div>
<div className="text-xl text-white font-medium font-jakarta" style={{}}>12ms</div>
</div>
</div>

<div className="space-y-2">
<div className="flex hover:border-white/10 transition-colors group cursor-default bg-zinc-900/40 border-white/5 border rounded-lg pt-3 pr-3 pb-3 pl-3 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-8 h-8 border-indigo-500/20 border rounded items-center justify-center">
<svg className="text-indigo-400" data-icon-set="lucide" data-lucide="users" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle className="" cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div className="">
<div className="text-xs font-medium text-white font-jakarta" style={{}}>PIONEERS PHASE</div>
<div className="text-[10px] text-zinc-500 font-jakarta" style={{}}>Early access</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-1 w-12 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-indigo-500 rounded-full"></div>
</div>
<iconify-icon className="text-zinc-600" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>
</div>
<div className="flex hover:border-white/10 transition-colors group cursor-default bg-zinc-900/40 border-white/5 border rounded-lg pt-3 pr-3 pb-3 pl-3 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="lucide:share-2" width="14"></iconify-icon>
</div>
<div className="">
<div className="text-xs font-medium text-white font-jakarta" style={{}}>GROWING NETWORK</div>
<div className="text-[10px] text-zinc-500 font-jakarta" style={{}}>Adding nodes</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-1 w-12 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-full bg-emerald-500 rounded-full animate-pulse-slow"></div>
</div>
<iconify-icon className="text-zinc-600" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors group cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/20">
<iconify-icon className="text-amber-400" icon="lucide:database" width="14"></iconify-icon>
</div>
<div className="">
<div className="text-xs font-medium text-white font-jakarta" style={{}}>GATHERING INFORMATION</div>
<div className="text-[10px] text-zinc-500 font-jakarta" style={{}}>Awaiting input</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-1 w-12 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-1/4 bg-zinc-500 rounded-full"></div>
</div>
<iconify-icon className="text-zinc-600" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 bg-zinc-900 border border-white/10 px-3 py-2 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<span className="text-[10px] font-medium text-zinc-300 font-jakarta" style={{}}>Connected</span>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col z-20 bg-zinc-950 w-full border-white/5 border-t mt-32 pt-32 pb-32 relative gap-x-4 gap-y-4" id="Manifesto">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_50px] pointer-events-none"></div>
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row gap-8 animate-on-scroll mb-16 gap-x-4 gap-y-4 items-start justify-between">
<div className="max-w-4xl gap-x-4 gap-y-4 w-full">
<h2 className="md:text-5xl leading-none text-4xl text-white tracking-tight font-serif mb-12">
<span className="block font-light italic text-zinc-500 font-jakarta" style={{}}>A Statement on Work,</span>
<span className="font-medium font-jakarta" style={{}}>Intelligence and Responsibility.</span>
</h2>
<div className="rich-text-box bg-zinc-900/30 border border-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
<div className="leading-relaxed text-2xl font-light text-zinc-400 font-serif space-y-6">
<p className="font-jakarta" style={{}}>Artificial Intelligence has been in development for decades. What has changed is not its existence, but its impact.</p>
<p className="font-jakarta" style={{}}>For the first time, intelligent systems can generate, adapt, and improve at a scale that directly affects how people work, learn, and create value. This shift is not theoretical. It is already visible across industries, roles, and societies.</p>
<p className="font-jakarta" style={{}}>Artificial Intelligence increases productivity and reduces the time required to perform many tasks. As a result, work will change — not gradually, but structurally. Some jobs will disappear. Others will be reshaped. New forms of work will emerge.</p>
<p className="text-white italic font-jakarta" style={{}}>This is neither good nor bad by default.It is a transition.</p>
<p className="font-jakarta" style={{}}>The future of work cannot be fully planned, but it can be approached with clarity. Technology alone does not determine outcomes. Human decisions — economic, organizational, and societal — do.</p>
<p className="font-jakarta" style={{}}>We do not believe fear is a useful response.We also do not believe denial is responsible.</p>
<p className="font-jakarta" style={{}}>Artificial Intelligence cannot be undone or ignored. Attempts to slow it through avoidance or prohibition only increase the risk of unpreparedness. The question is not whether AI will change work, but how people will be supported through that change.</p>
<p className="pl-4 border-l border-white/20 font-jakarta" style={{}}>We believe access matters.We believe understanding matters.We believe people should not be left alone in this transition.</p>
<p className="font-jakarta" style={{}}>This moment requires new ways of working, learning, and collaborating — grounded in reality, not hype; in responsibility, not nostalgia.</p>
<p className="font-jakarta" style={{}}>The future of work is not a distant concept.It is already unfolding.</p>
<p className="text-white font-medium font-jakarta" style={{}}>Our role is not to predict it.Our role is to participate in shaping it.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-zinc-950 w-full border-white/10 border-t pt-32 pb-32 relative" id="Contact">
<div className="flex flex-col z-10 animate-on-scroll text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<h2 className="md:text-[64px] leading-none text-5xl text-white tracking-tight font-serif mb-6 font-jakarta" style={{}}>
                    Start the <span className="italic text-zinc-500 font-jakarta" style={{}}>evolution.</span>
</h2>
<p className="text-xl text-zinc-500 font-light max-w-2xl mb-10 font-jakarta" style={{}}>
                    Join the platform powering over <span className="text-white font-normal font-jakarta" style={{}}>20,000+</span> microservices.
                </p>

<div className="w-full max-w-md mt-6 animate-on-scroll">
<form className="flex flex-col gap-5 text-left bg-zinc-900/20 p-6 rounded-2xl border border-white/5">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium pl-1 font-jakarta" style={{}}>Name</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:bg-zinc-900/80 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium pl-1 font-jakarta" style={{}}>Email</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:bg-zinc-900/80 transition-all" placeholder="jane@acme.com" type="email"/>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium pl-1 font-jakarta" style={{}}>Inquiry</label>
<textarea className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:bg-zinc-900/80 transition-all resize-none" placeholder="Tell us about your project..." rows="3"></textarea>
</div>

<button className="mt-2 group w-full bg-white text-black hover:bg-zinc-200 transition-colors font-medium text-sm py-2.5 rounded-lg flex items-center justify-center gap-2 font-jakarta" style={{}} type="submit">
                            Send Request
                            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="z-20 text-zinc-400 bg-black w-full border-zinc-900 border-t pt-20 pb-12 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-20 gap-x-10 gap-y-10">
<div className="col-span-2 md:col-span-4 flex flex-col gap-6 gap-x-6 gap-y-6">
<div className="flex gap-2 items-center">
<img alt="Nexus" className="w-auto h-6 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61152178-68bc-4fec-a1b9-e0fd3e61391f_320w.png"/>
</div>
<p className="leading-relaxed text-sm font-light text-zinc-500 max-w-xs font-jakarta" style={{}}>Performance Workspace is where people and Artificial Intelligence come together to shape the future of work.</p>
<div className="flex gap-4 mt-2 gap-x-4 gap-y-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon className="" icon="simple-icons:x" width="18"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon className="" icon="simple-icons:github" width="18"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon className="" icon="simple-icons:discord" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 border-zinc-900 border-t pt-8 items-center justify-between">
<div className="text-xs text-zinc-600 font-mono font-jakarta" style={{}}>© 2025 Performance Workspace</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
