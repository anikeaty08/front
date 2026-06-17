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
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
},
colors: {
brand: {
lime: '#c1ff72',
},
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'clip-in': 'clipIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) both',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        function handleSpotlight(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">

<a className="block group text-2xl lg:text-3xl font-semibold tracking-tighter font-google-sans-flex" href="#">
                Optimal<span className="transition-colors text-stone-500">Factors</span>
</a>

<nav className="hidden lg:flex font-montserrat gap-x-10 items-center">
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#cases">Case Studies</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#">Login</a>
</nav>

<div className="flex gap-x-8 items-center">
<button className="bg-stone-900 text-[#c1ff72] hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">
                    Book Strategy Call
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed grid-lines w-full h-[100vh] top-0 right-0 left-0 pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">

<main className="flex-1 w-full">

<section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-[1600px] mr-auto ml-auto pt-8 pr-6 pb-12 pl-6 items-center">
<div className="animate-clip-in lg:col-span-7 space-y-6" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600">
<span className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse"></span>
                        Digital Infrastructure &amp; Growth
                    </div>

<h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-stone-900 tracking-tighter">
                        Your Technology, 
                        <span className="text-slate-950 font-google-sans-flex relative inline-block">Optimized
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#c1ff72] -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" opacity="0.4" stroke="currentColor" strokeWidth="8"></path></svg>
</span> for Growth.
                    </h1>
<p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 font-montserrat max-w-2xl">
                        We design, build, and manage the digital systems—cloud, ERP, and marketing—that power your business. No silos, just results.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full relative group">
<span className="button-text block select-none text-lg font-semibold text-stone-900 tracking-tight pt-4 pr-8 pb-4 pl-8 relative">
                                Start Your Optimization
                            </span>
<div className="button-shine"></div>
</button>
<button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 font-semibold text-stone-700 hover:bg-stone-200/50 transition-colors">
                            View Our Work
                        </button>
</div>
<style>
                    @property --angle-1 { syntax: "<angle>"; inherits: false; initial-value: -75deg; }
                    @property --angle-2 { syntax: "<angle>"; inherits: false; initial-value: -45deg; }
                    .glass-button {
                        background: linear-gradient(-75deg, rgba(193, 255, 114, 0.1), rgba(255, 255, 255, 0.5), rgba(193, 255, 114, 0.1));
                        box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05), inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5), 0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2), 0 0 0.1em 0.25em rgba(193, 255, 114, 0.4) inset, 0 0 0 0 rgba(255, 255, 255, 1);
                        backdrop-filter: blur(4px);
                        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    .glass-button:hover { transform: scale(0.98); }
                    .button-shine {
                        position: absolute; inset: 0; border-radius: 999px; width: calc(100% - 1px); height: calc(100% - 1px); top: 0.5px; left: 0.5px;
                        background: linear-gradient(var(--angle-2), rgba(255, 255, 255, 0) 0%, rgba(193, 255, 114, 0.5) 40% 50%, rgba(255, 255, 255, 0) 55%);
                        mix-blend-mode: screen; pointer-events: none; background-size: 200% 200%; background-position: 0% 50%; background-repeat: no-repeat;
                        transition: background-position 500ms, --angle-2 500ms;
                    }
                    .glass-button:hover .button-shine { background-position: 25% 50%; }
                    </style>
</div>

<div className="lg:col-span-5 flex flex-col animate-fade-up lg:mt-0 h-full mt-8 relative justify-center" style={{animationDelay: '0.3s'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c1ff72] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative space-y-4">

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-0 max-w-sm mx-auto w-full" style={{animationDelay: '0s'}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-lime-50 text-lime-600 border-lime-100">
<iconify-icon className="" icon="lucide:server" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Kubernetes Cluster</p>
<span className="text-[10px] text-stone-400">us-east-1</span>
</div>
<p className="text-xs text-stone-500 truncate">Autoscaling Triggered</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-100 text-stone-600 border-stone-200">99.9% Uptime</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-8 max-w-sm mx-auto w-full" style={{animationDelay: '1.5s'}}>
<div className="flex shrink-0 bg-[#c1ff72] w-10 h-10 border rounded-full items-center justify-center text-stone-900 border-lime-600">
<iconify-icon icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Campaign ROAS</p>
<span className="text-[10px] text-stone-400">Real-time</span>
</div>
<p className="text-xs text-stone-500 truncate">Q3 Paid Search Performance</p>
</div>
<span className="bg-[#c1ff72] text-[10px] px-2 py-0.5 rounded border border-[#aae65f] font-medium text-stone-900">+15.4%</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:-ml-4 max-w-sm mx-auto w-full" style={{animationDelay: '2.5s'}}>
<div className="w-10 h-10 rounded-full text-[#c1ff72] flex items-center justify-center border shrink-0 bg-stone-900 border-stone-800">
<iconify-icon className="" icon="lucide:database" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">ERP Sync</p>
<span className="text-[10px] text-stone-400">Now</span>
</div>
<p className="text-xs text-stone-500 truncate">Odoo &lt;-&gt; Shopify Connected</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-900 text-white border-stone-700">Active</span>
</div>
</div>
</div>
</section>

<div className="bg-white w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">

<section className="max-w-[1600px] mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
<p className="text-left text-sm font-medium text-stone-400 uppercase tracking-widest mb-6">Trusted by forward-thinking companies</p>
<div className="overflow-hidden w-full relative">
<div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-white"></div>
<div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-white"></div>
<div className="flex w-max animate-marquee hover:pause-animation">
<div className="flex items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cloud-lightning"></iconify-icon> SaaSforce</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon className="" icon="lucide:cpu"></iconify-icon> TechFlow</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:database"></iconify-icon> DataScale</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:globe"></iconify-icon> VentureCorp</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:server"></iconify-icon> CloudNine</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:zap"></iconify-icon> BoltSoft</div>
</div>
<div className="flex items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 ml-12 lg:ml-24">
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cloud-lightning"></iconify-icon> SaaSforce</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:cpu"></iconify-icon> TechFlow</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:database"></iconify-icon> DataScale</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:globe"></iconify-icon> VentureCorp</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:server"></iconify-icon> CloudNine</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans"><iconify-icon icon="lucide:zap"></iconify-icon> BoltSoft</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20" style={{animationDelay: '0.4s'}}>
<div className="text-center mb-12">
<h2 className="lg:text-5xl text-3xl font-medium text-stone-900 tracking-tight font-montserrat">
                            Stop Letting Your Tech Stack  <span className="text-stone-400">Slow You Down.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:alert-triangle" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">Tired of downtime?</h3>
<p className="text-stone-500 text-sm leading-relaxed">We ensure 99.9% uptime with scalable cloud architecture so your business never stops.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="" icon="lucide:eye" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">Blind to risks?</h3>
<p className="text-stone-500 text-sm leading-relaxed">Get total visibility with our integrated monitoring dashboards across all systems.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:bar-chart-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">Losing leads?</h3>
<p className="text-stone-500 text-sm leading-relaxed">We connect your ads directly to your CRM for perfect attribution and follow-up.</p>
</div>
</div>
</section>

<section className="lg:px-12 lg:mb-20 max-w-[1600px] mr-auto mb-12 ml-auto pr-6 pl-6" id="services">
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-montserrat mb-10 lg:mb-12">End-to-End Digital Engineering</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">

<div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-[#002f43] border-[#002f43] border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="z-20 mt-auto relative">
<div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
<iconify-icon className="" icon="lucide:cloud" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-white font-montserrat mb-3">Cloud &amp; DevOps</h3>
<p className="text-stone-300 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
                                    Scale without the crash. AWS, Azure, &amp; Kubernetes expert management and automation.
                                </p>
<a className="inline-flex items-center text-white font-medium text-sm hover:underline underline-offset-4 group/link" href="#">
                                    Explore Cloud Services 
                                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div><div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

<div className="transform group-hover:-translate-y-2 transition-transform duration-500 bg-stone-900 w-full max-w-[280px] z-10 rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-2xl border border-stone-800">

<div className="flex gap-2 border-stone-800 border-b mb-4 pb-3 gap-x-2 gap-y-2 items-center">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
</div>

<div className="space-y-3 font-mono text-[10px] text-stone-400">
<div className="flex gap-2"><span className="text-blue-400">apiVersion:</span> apps/v1</div>
<div className="flex gap-2"><span className="text-blue-400">kind:</span> Deployment</div>
<div className="flex gap-2"><span className="text-blue-400">metadata:</span></div>
<div className="pl-4 flex gap-2"><span className="text-purple-400">name:</span> production-api</div>
<div className="flex gap-2"><span className="text-blue-400">spec:</span></div>
<div className="pl-4 flex gap-2"><span className="text-purple-400">replicas:</span> <span className="text-[#c1ff72]">12</span></div>

<div className="flex gap-3 bg-stone-800 border-stone-700 border rounded-lg mt-4 pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
<div className="h-6 w-6 rounded bg-lime-900/50 text-lime-400 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div className="flex-1 text-[9px] text-stone-300">Autoscaling Policy</div>
<div className="h-5 w-10 bg-[#c1ff72] rounded text-[8px] text-stone-900 font-bold flex items-center justify-center">ON</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-lime-300 border-lime-300 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">

<div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
<div className="">
<div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="lucide:layers" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-stone-900 font-montserrat mb-3">ERP &amp; Operations</h3>
<p className="text-stone-800 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                                        Unified business logic. Odoo &amp; SAP integrations that actually work together.
                                    </p>
</div>
<a className="inline-flex items-center text-stone-900 font-bold text-sm hover:underline underline-offset-4 group/link" href="#">
                                    See Integrations 
                                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">

<div className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 ease-out">
<div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-lime-400/50 p-4">

<div className="flex gap-3">

<div className="flex-1 bg-stone-50 rounded-lg p-2 space-y-2">
<div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Inventory</div>
<div className="bg-white p-3 rounded border border-stone-100 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div className="h-1.5 w-12 bg-lime-300 rounded"></div>
<span className="text-[8px] text-stone-400">SKU-102</span>
</div>
<div className="h-1 w-full bg-stone-100 rounded"></div>
</div>
</div>

<div className="flex-1 bg-stone-50 rounded-lg p-2 space-y-2">
<div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Processing</div>
<div className="bg-white p-3 rounded border border-lime-500 shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-500"></div>
<div className="h-1.5 w-16 bg-stone-800 rounded mb-2"></div>
<div className="h-1 w-full bg-stone-100 rounded"></div>
<div className="mt-2 flex items-center gap-1">
<div className="w-4 h-4 rounded-full bg-stone-200"></div>
<div className="text-[8px] text-stone-400">Syncing...</div>
</div>
</div>
</div>

<div className="flex-1 bg-stone-50 rounded-lg p-2 opacity-50">
<div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Shipped</div>
<div className="bg-white p-3 rounded shadow-sm h-16 border-dashed border-2 border-stone-200"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-lime-100/80 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-lime-200">

<div className="relative w-full h-32 mb-4">
<div className="absolute right-0 top-0 space-y-3 w-full max-w-[220px]">
<div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-stone-600 ml-auto w-fit transform group-hover:-translate-x-1 transition-transform delay-75">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-400" icon="lucide:user"></iconify-icon>
                                            New Lead Captured
                                        </div>
</div>
<div className="bg-[#002f43] p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-white w-fit transform group-hover:translate-x-1 transition-transform delay-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#c1ff72]" icon="lucide:arrow-right"></iconify-icon>
                                            Sent to Sales Pipeline
                                        </div>
</div>
</div>
</div>
<div className="mt-auto relative z-20">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">Growth Marketing</h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">Data-driven acquisition. Campaigns that feed directly into your sales pipeline.</p>
<a className="inline-flex items-center text-stone-900 font-bold text-xs uppercase tracking-wide hover:opacity-70" href="#">
                                    Learn More <iconify-icon className="ml-1" icon="lucide:chevron-right"></iconify-icon>
</a>
</div>
</div>

<div className="group relative overflow-hidden bg-sky-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-sky-100">

<div className="flex w-full h-32 relative justify-end">
<div className="relative transform rotate-3 group-hover:rotate-6 transition-transform duration-500 origin-bottom-right">
<div className="bg-white p-3 rounded-xl shadow-lg border border-sky-100 w-32">
<div className="w-full aspect-square bg-stone-100 rounded-lg mb-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-transparent opacity-50"></div>
</div>
<div className="h-1.5 bg-stone-200 rounded w-2/3 mb-1"></div>
<div className="h-1.5 bg-stone-100 rounded w-1/2"></div>
<div className="-top-2 -right-2 text-[10px] font-bold text-white bg-stone-900 rounded-full pt-1 pr-2 pb-1 pl-2 absolute shadow-md" style={{}}>$</div>
</div>
</div>
</div>
<div className="z-20 mt-auto relative">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">E-Commerce</h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">High-performance storefronts. Shopify &amp; Custom builds designed to sell.</p>
<a className="inline-flex items-center text-stone-900 font-bold text-xs uppercase tracking-wide hover:opacity-70" href="#">
                                    View Storefronts <iconify-icon className="ml-1" icon="lucide:chevron-right"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="text-center max-w-4xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-6xl font-medium text-stone-900 tracking-tight font-montserrat leading-tight">
                            Why Optimal Factors?
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:binary" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900">We Speak Data</h3>
<p className="text-stone-600 text-sm leading-relaxed">No guessing. Every decision is backed by analytics and raw performance metrics.</p>
</div>
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:monitor" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900">Full-Stack Visibility</h3>
<p className="text-stone-600 text-sm leading-relaxed">We don't just fix the code; we optimize the business outcome across the stack.</p>
</div>
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:users" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900">Partner, Not Vendor</h3>
<p className="text-stone-600 text-sm leading-relaxed">We integrate with your team via Slack/Teams for real-time collaboration.</p>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20" id="cases">
<div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative shadow-2xl border shadow-zinc-900/30 bg-stone-900 border-stone-800">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="flex flex-col lg:flex-row h-full">
<div className="flex-1 lg:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-[#c1ff72] rounded-full animate-pulse"></div>
<span className="text-[#c1ff72] font-mono text-xs uppercase tracking-wider">Verified Results</span>
</div>
<h2 className="lg:text-5xl xl:text-6xl leading-tight lg:mr-6 lg:mb-8 text-3xl font-medium text-white tracking-tight font-montserrat mb-6">
                                Results that Compound.
                            </h2>
<p className="text-base lg:text-lg text-stone-400 font-montserrat max-w-md mb-8 lg:mb-10 leading-relaxed">
                                See how we deliver measurable impact for our partners.
                            </p>
<button className="group flex items-center gap-3 bg-[#c1ff72] hover:bg-[#b0f060] transition-all text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-lg hover:shadow-[0_0_20px_rgba(193,255,114,0.3)] text-stone-900">
<span>Read Case Studies</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<div className="flex lg:w-[50%] lg:pt-24 lg:pr-16 lg:pl-0 lg:items-center lg:pb-34 pt-8 pr-4 pb-16 pl-4 relative items-end">
<div className="transform [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] lg:rounded-xl lg:translate-y-12 text-xs text-stone-400 font-mono bg-slate-950/80 w-full border-stone-800 border rounded-t-xl pt-8 pr-8 pb-16 pl-8 shadow-2xl backdrop-blur-md">
<div className="flex items-center justify-between border-b pb-4 mb-4 border-stone-800">
<span className="text-stone-300">performance_metrics.json</span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 bg-orange-700/50 rounded-full"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-lime-500/50"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="p-4 rounded border bg-stone-900 border-stone-800">
<span className="block text-stone-500 mb-2">Cloud Spend</span>
<span className="text-2xl font-bold text-white block mb-1">-40%</span>
<span className="text-[#c1ff72] text-[10px]">SaaS Client / Kubernetes</span>
</div>
<div className="p-4 rounded border bg-stone-900 border-stone-800">
<span className="block text-stone-500 mb-2">Conversion Rate</span>
<span className="text-2xl font-bold text-white block mb-1">+15%</span>
<span className="text-[#c1ff72] text-[10px]">Retail Brand / Speed</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-lime-400 text-sm" icon="lucide:timer"></iconify-icon>
<span className="text-stone-300">Checkout speed increased by 2.5s</span>
</div>
<span className="text-[#c1ff72]"><iconify-icon icon="lucide:check"></iconify-icon></span>
</div>
<div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-lime-400 text-sm" icon="lucide:server"></iconify-icon>
<span className="text-stone-300">Legacy infrastructure migration complete</span>
</div>
<span className="text-[#c1ff72]"><iconify-icon icon="lucide:check"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
<div className="lg:p-20 overflow-hidden text-center bg-[#c1ff72] rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10 max-w-3xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-6xl leading-tight font-medium text-stone-900 tracking-tight font-montserrat">Ready to optimize your infrastructure?</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center justify-center flex">
                                    Book a Strategy Call
                                </button>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 20%)'}}></div>
</div>
</section>

<footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
<div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-stone-200">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
<div className="lg:w-1/3 space-y-5">
<div className="flex gap-2 items-center">
<span className="text-2xl font-bold tracking-tighter font-google-sans-flex">Optimal<span className="text-lime-500">Factors</span></span>
</div>
<p className="text-sm text-stone-500 font-montserrat max-w-sm leading-relaxed">
                                End-to-end digital engineering for modern business.
                            </p>
</div>
<div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Company</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#cases">Case Studies</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Login</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Connect</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon> LinkedIn</a></li>
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="simple-icons:twitter" width="14"></iconify-icon> Twitter</a></li>
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="simple-icons:github" width="14"></iconify-icon> GitHub</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Legal</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-200 text-stone-400">
<p>© 2026 Optimal Factors. All rights reserved.</p>
</div>
</div>
</footer>
</div>

</main>
</div>


    </>
  );
}
