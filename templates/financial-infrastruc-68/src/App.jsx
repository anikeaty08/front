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
gtag('config', 'G-YNQ2E4NBMY');

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

<section className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0f1115] text-white min-h-[600px] flex flex-col justify-between p-8 lg:p-12 shadow-2xl shadow-gray-200">

<div className="absolute inset-0 z-0">
<img alt="Abstract 3D" className="opacity-60 mix-blend-overlay w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f147f7d-661c-4181-a17e-e2ca5322b1b0_1600w.webp"/>
<div className="bg-gradient-to-t from-[#0f1115] via-transparent to-[#0f1115]/80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full flex justify-center">
<nav className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 flex items-center gap-6 text-sm">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52ee558b-0436-4cc7-9737-33c078b5b091_1600w.png)] bg-cover rounded" href="#"></a>
<a className="text-gray-300 hover:text-white transition-colors font-sans" href="#">Products</a>
<a className="text-gray-300 hover:text-white transition-colors font-sans" href="#">Solutions</a>
<a className="text-gray-300 hover:text-white transition-colors font-sans" href="#">Developers</a>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-sm hover:bg-emerald-50 transition-colors font-sans">
                            Dashboard
                        </button>
</nav>
</div>

<div className="relative z-10 mt-auto max-w-4xl">
<h1 className="text-5xl md:text-7xl leading-[1.1] mb-8 text-white font-manrope font-medium tracking-tighter">
                        The unified API for <br/>
<span className="text-gray-400 font-manrope font-medium tracking-tighter">modern financial</span> <br/>
                        infrastructure.
                    </h1>
</div>

<div className="absolute bottom-12 right-12 z-20 hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-2 pr-5 rounded-2xl">
<div className="overflow-hidden w-12 h-16 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1a3863d-784c-4cf0-9cb1-c0a79691ce9a_320w.jpg)] bg-cover bg-center rounded-xl relative shadow-lg">
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="">
<p className="text-xs text-gray-400 uppercase tracking-widest font-sans">Status</p>
<p className="text-sm text-white font-sans">All Systems Operational</p>
</div>
<div className="flex gap-2 ml-4">
<button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
<iconify-icon className="text-white text-base" icon="lucide:arrow-left"></iconify-icon>
</button>
<button className="h-8 w-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition">
<iconify-icon className="text-black text-base" icon="lucide:arrow-right"></iconify-icon>
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
                            Built for <br/>
<span className="text-gray-400 font-manrope font-medium tracking-tighter">Scale &amp; Velocity</span> <br/>
                            From First Commit.
                        </h3>
<p className="text-lg text-gray-500 leading-relaxed mb-8 font-sans">
                            We abstract away the complexity of banking rails so you can focus on building your product, not maintaining infrastructure.
                        </p>
<button className="group flex items-center gap-3 bg-gray-900 text-white pl-5 pr-2 py-2 rounded-full text-base font-medium hover:bg-gray-800 transition-all">
<span className="font-sans">Read Documentation</span>
<span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="lucide:arrow-up-right"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="lg:col-span-4 relative group cursor-pointer">
<div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-gray-200">
<img alt="Sand Texture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e062daf-ac81-41e0-a217-47ea6430b253_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
<div className="absolute top-6 left-6 text-white mix-blend-difference">
<p className="text-lg tracking-tight font-sans">Instant Settlement</p>
<p className="text-sm text-gray-300 font-sans">Global Reach</p>
</div>
<div className="absolute bottom-6 w-full px-6 flex justify-between items-end text-white">
<div>
<p className="text-xl font-manrope font-medium tracking-tighter">Real-time Rails</p>
<button className="mt-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition font-sans">
                                     Explore <iconify-icon className="text-base" icon="lucide:plus"></iconify-icon>
</button>
</div>
<span className="text-5xl opacity-50 font-manrope font-medium tracking-tighter">02</span>
</div>
</div>
</div>

<div className="lg:col-span-4 relative group cursor-pointer">
<div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-[#1a1a1a]">
<img alt="Dark Texture" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61714d78-adc9-4724-b65b-b53759c3ea36_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>
<div className="absolute top-6 left-6 text-white">
<p className="text-lg tracking-tight font-sans">Vault Security</p>
<p className="text-sm text-gray-400 font-sans">SOC2 Type II</p>
</div>
<div className="absolute bottom-6 w-full px-6 flex justify-between items-end text-white">
<div className="max-w-[70%]">
<p className="text-xl mb-2 font-manrope font-medium tracking-tighter">Zero-Trust Architecture</p>
<p className="text-sm text-gray-400 line-clamp-2 font-sans">Tokenized credentials and end-to-end encryption for every transaction.</p>
<button className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition font-sans">
                                     Read More <iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<span className="absolute bottom-6 right-6 text-5xl opacity-50 font-manrope font-medium tracking-tighter">03</span>
</div>
</div>

<div className="flex justify-end mt-4 gap-3">
<button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition text-gray-500 hover:text-gray-900">
<iconify-icon className="text-lg" icon="lucide:arrow-left"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-black transition">
<iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</section><section className="py-24 relative overflow-hidden border-b border-gray-200/60 bg-white/50">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs text-gray-500 mb-6 shadow-sm font-sans">
                Benefits
            </div>
<h2 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-[1.1] font-manrope font-medium tracking-tighter">
                Improve every step of the <br className="hidden md:block"/> financial lifecycle
            </h2>
<p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-sans">
                Convert faster, automate reconciliation, reduce operational overhead, and boost net revenue retention with a single integration.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

<div className="group flex flex-col items-center text-center">

<div className="relative h-48 w-full flex items-center justify-center mb-8">

<div className="w-64 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-5 relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)]">

<div className="flex items-center gap-3 mb-5">
<div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
<iconify-icon className="text-emerald-600 text-sm" icon="lucide:scan-face"></iconify-icon>
</div>
<div className="text-left space-y-1.5">
<div className="h-2 w-24 bg-gray-100 rounded-full"></div>
<div className="h-1.5 w-16 bg-gray-50 rounded-full"></div>
</div>
</div>

<div className="space-y-2.5 mb-5">
<div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-emerald-500/20 rounded-full group-hover:w-full transition-all duration-1000 ease-out"></div>
</div>
<div className="h-1.5 w-5/6 bg-gray-50 rounded-full"></div>
</div>

<div className="flex items-center justify-between border-t border-gray-50 pt-3">
<div className="h-1.5 w-10 bg-gray-100 rounded-full"></div>
<span className="flex items-center gap-1.5 text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/50 font-sans">
<iconify-icon className="text-xs" icon="lucide:check-circle-2"></iconify-icon> KYB Verified
                            </span>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 to-transparent rounded-full blur-3xl -z-10 transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<h3 className="text-lg text-gray-900 mb-3 tracking-tight font-sans">Accelerate Onboarding</h3>
<p className="text-[15px] text-gray-500 leading-relaxed max-w-xs mx-auto font-sans">
                    Don't let compliance kill deals. Swipeeely turns manual KYB reviews into fully automated, instant approvals.
                </p>
</div>

<div className="group flex flex-col items-center text-center">

<div className="relative h-48 w-full flex items-center justify-center mb-8">

<div className="relative w-32 h-32 flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="38" stroke="#f3f4f6" strokeWidth="3"></circle>
<circle className="transition-all duration-[1.5s] ease-out group-hover:stroke-dashoffset-0" cx="50" cy="50" fill="none" r="38" stroke="#10b981" stroke-dasharray="238" stroke-dashoffset="238" strokeLinecap="round" strokeWidth="3"></circle>
</svg>

<div className="w-16 h-16 bg-white shadow-[0_10px_30px_-5px_rgba(16,185,129,0.15)] rounded-2xl flex items-center justify-center border border-gray-100 z-10 relative transform transition-transform duration-500 group-hover:scale-110">
<iconify-icon className="text-2xl text-emerald-500" icon="lucide:arrow-left-right"></iconify-icon>
</div>

<div className="absolute w-2 h-2 bg-emerald-400 rounded-full top-0 right-1/4 opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-500"></div>
<div className="absolute w-1.5 h-1.5 bg-emerald-300 rounded-full bottom-2 left-1/3 opacity-0 group-hover:opacity-100 transition-opacity delay-500 duration-500"></div>
</div>
</div>
<h3 className="text-lg text-gray-900 mb-3 tracking-tight font-sans">Automate Reconciliation</h3>
<p className="text-[15px] text-gray-500 leading-relaxed max-w-xs mx-auto font-sans">
                    Give your finance team superpowers. Every transaction is automatically reconciled in real-time with zero manual input.
                </p>
</div>

<div className="group flex flex-col items-center text-center">

<div className="relative h-48 w-full flex items-center justify-center mb-8">

<div className="relative w-64 h-32 pl-4">

<div className="absolute -top-4 right-2 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 px-3 py-2 rounded-lg text-center z-20 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
<span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 font-sans">Net Retention</span>
<span className="block text-sm text-gray-900 flex items-center gap-1 font-sans">
                                130% 
                                <iconify-icon className="text-emerald-500 text-xs" icon="lucide:arrow-up"></iconify-icon>
</span>
</div>

<svg className="w-full h-full overflow-visible" viewbox="0 0 240 100">

<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="240" y1="25" y2="25"></line>
<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="240" y1="55" y2="55"></line>
<line stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="240" y1="85" y2="85"></line>

<path className="drop-shadow-sm" d="M0,85 C50,80 80,60 120,50 S180,30 240,15" fill="none" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>

<path className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" d="M0,85 C50,80 80,60 120,50 S180,30 240,15 V110 H0 Z" fill="url(#chartGradient)"></path>
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<circle className="group-hover:scale-125 transition-transform duration-300" cx="240" cy="15" fill="#ffffff" r="4" stroke="#10b981" strokeWidth="2"></circle>
</svg>
</div>
</div>
<h3 className="text-lg text-gray-900 mb-3 tracking-tight font-sans">Maximize Revenue</h3>
<p className="text-[15px] text-gray-500 leading-relaxed max-w-xs mx-auto font-sans">
                    Intelligent routing automatically directs transactions to the highest performing networks, reducing churn significantly.
                </p>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-gray-50 border-gray-200/60 border-b pt-24 pb-24 relative">
<div className="lg:px-8 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 max-w-4xl leading-[1.05] font-manrope font-medium tracking-tighter">
                Helping ambitious fintechs <span className="text-gray-400 font-manrope font-medium tracking-tighter">craft financial experiences that empower users globally.</span>
</h2>
<a className="group inline-flex items-center text-sm text-gray-900 hover:text-emerald-600 transition-colors border-b border-gray-900 hover:border-emerald-600 pb-0.5 whitespace-nowrap font-sans" href="#">
                View Customers
                <iconify-icon className="ml-1 text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="lucide:arrow-up-right"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 min-h-[520px] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500 group rounded-3xl">
<div className="">
<h3 className="text-xl text-gray-900 mb-6 leading-snug font-manrope font-medium tracking-tighter">
                        Payments that scale.<br/>Reliability you trust.
                    </h3>
<p className="text-gray-500 leading-relaxed text-[15px] font-sans">
                        "Swipeeely captured the complexity of our ledger and translated it into an API that’s sharp, fast, and undeniably effective for our scale."
                    </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-gray-100 mt-auto">
<img alt="Profile" className="w-10 h-10 rounded-full object-cover bg-gray-100 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-sm text-gray-900 font-sans">Sarah J.</p>
<p className="text-xs text-gray-500 font-sans">VP Engineering</p>
</div>
</div>
</div>

<div className="relative min-h-[520px] bg-gray-900 overflow-hidden group rounded-3xl">
<img alt="Abstract" className="group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 opacity-70 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8188a0ea-1b46-4f51-b821-9271bdd23929_800w.jpg"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
<span className="text-white text-lg tracking-tight mix-blend-overlay font-sans">Global Network©</span>
</div>
<div className="absolute bottom-8 right-8 z-10">
<span className="text-white/60 text-xs uppercase tracking-widest font-sans">Since '21</span>
</div>
</div>

<div className="min-h-[520px] flex flex-col overflow-hidden group text-center bg-white pt-8 pr-8 pb-8 pl-8 relative items-center justify-between rounded-3xl">
<p className="text-gray-500 text-lg mt-8 font-sans">Increase in <br/> authorization rates</p>
<div className="relative flex items-center justify-center w-56 h-56 my-8">

<svg className="w-full h-full transform -rotate-90 drop-shadow-xl" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="90" stroke="#f3f4f6" strokeWidth="1.5"></circle>
<circle className="transition-all duration-1000 ease-out group-hover:stroke-[3]" cx="100" cy="100" fill="none" r="90" stroke="#10b981" stroke-dasharray="565" stroke-dashoffset="141" strokeWidth="1.5"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-5xl text-gray-900 font-manrope font-medium tracking-tighter">+14%</span>
</div>
</div>
</div>

<div className="min-h-[520px] flex flex-col group overflow-hidden text-white bg-[#0f1115] pt-8 pr-8 pb-8 pl-8 relative justify-between rounded-3xl">
<div className="flex justify-between items-start z-10">
<span className="text-xl font-manrope font-medium tracking-tighter">Integration</span>
<iconify-icon className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<div className="z-10 relative">
<p className="text-gray-400 leading-relaxed mb-12 max-w-[260px] text-[15px] font-sans">
                        Let's start integrating — whether you've got a complex marketplace, a neobank idea, or just curiosity, our docs are ready.
                    </p>
<div className="space-y-2 text-sm text-gray-400 font-mono">
<a className="block hover:text-emerald-400 transition-colors font-sans" href="#">dev@swipeeely.com</a>
<a className="block hover:text-emerald-400 transition-colors font-sans" href="#">+1 (555) 123-4567</a>
<a className="block hover:text-emerald-400 transition-colors font-sans" href="#">docs.swipeeely.com</a>
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
                        Simple Pricing
                    </span>
<h2 className="text-4xl md:text-5xl text-white mb-4 font-manrope font-medium tracking-tighter">
                        Pay as you <br/> grow.
                    </h2>
<p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed font-sans">
                        Start for free in sandbox. Upgrade when you're ready to go live. No hidden fees or monthly minimums.
                    </p>
</div>

<div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

<div className="group relative flex flex-col p-8 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-colors duration-300">
<div className="mb-6 flex items-start justify-between">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-xl" icon="lucide:box"></iconify-icon>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl text-white font-manrope font-medium tracking-tighter">$29</span>
<span className="text-sm text-gray-500 font-sans">/mo</span>
</div>
<h3 className="text-lg text-white mt-4 font-sans">Startup</h3>
<p className="text-sm text-gray-400 mt-2 leading-relaxed font-sans">For validation and early stage products.</p>
</div>
<button className="w-full bg-white text-black py-3 rounded-xl text-sm mb-8 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-sans">
                            Start Building <iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</button>
<div className="space-y-4 mt-auto">
<p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Includes</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="lucide:check-circle"></iconify-icon> 5,000 live API requests
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="lucide:check-circle"></iconify-icon> Full sandbox access
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="lucide:check-circle"></iconify-icon> Email support
                                </li>
</ul>
</div>
</div>

<div className="group relative flex flex-col p-8 bg-white/[0.08] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-emerald-500/20 to-transparent pointer-events-none"></div>
<div className="mb-6 flex items-start justify-between relative z-10">
<div className="h-10 w-10 rounded-xl bg-emerald-400/20 flex items-center justify-center border border-emerald-400/30">
<iconify-icon className="text-emerald-400 text-xl" icon="lucide:layers"></iconify-icon>
</div>
<span className="bg-emerald-400 text-black text-[10px] px-2 py-1 rounded uppercase tracking-wider font-sans">Most Popular</span>
</div>
<div className="mb-6 relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-3xl text-white font-manrope font-medium tracking-tighter">$99</span>
<span className="text-sm text-gray-500 font-sans">/mo</span>
</div>
<h3 className="text-lg text-white mt-4 font-sans">Scale</h3>
<p className="text-sm text-gray-400 mt-2 leading-relaxed font-sans">For high-volume production apps.</p>
</div>
<button className="relative z-10 w-full bg-[#10b981] text-white py-3 rounded-xl text-sm mb-8 hover:bg-[#059669] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-sans">
                            Upgrade Now <iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</button>
<div className="space-y-4 mt-auto relative z-10">
<p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Everything in Startup plus</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle"></iconify-icon> 100,000 live API requests
                                </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle"></iconify-icon> Priority 24/7 support
                                </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle"></iconify-icon> Advanced fraud rules
                                </li>
</ul>
</div>
</div>

<div className="group relative flex flex-col p-8 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-colors duration-300">
<div className="mb-6 flex items-start justify-between">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-xl" icon="lucide:diamond"></iconify-icon>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl text-white font-manrope font-medium tracking-tighter">Custom</span>
</div>
<h3 className="text-lg text-white mt-4 font-sans">Platform</h3>
<p className="text-sm text-gray-400 mt-2 leading-relaxed font-sans">For marketplaces and large platforms.</p>
</div>
<button className="w-full bg-white text-black py-3 rounded-xl text-sm mb-8 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-sans">
                            Contact Sales <iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</button>
<div className="space-y-4 mt-auto">
<p className="text-xs text-gray-500 uppercase tracking-wider font-sans">Features</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="lucide:check-circle"></iconify-icon> Volume discounts
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="lucide:check-circle"></iconify-icon> Dedicated success manager
                                </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-gray-500" icon="lucide:check-circle"></iconify-icon> 99.99% Uptime SLA
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
<iconify-icon className="text-gray-400 text-sm" icon="lucide:plus"></iconify-icon>
</span>
                                Can I change my plan later?
                            </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                                Absolutely. You can upgrade, downgrade, or pause your subscription instantly via the dashboard. Usage is prorated to the second.
                            </p>
</div>

<div className="group">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="lucide:plus"></iconify-icon>
</span>
                                How does the Sandbox work?
                            </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                                Sandbox is an exact mirror of our production environment. You can simulate charges, disputes, and payouts without moving real money.
                            </p>
</div>

<div className="group">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="lucide:plus"></iconify-icon>
</span>
                                Is my data secure?
                            </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                                We are SOC2 Type II certified. All sensitive data is encrypted at rest and in transit using bank-grade AES-256 protocols.
                            </p>
</div>

<div className="group">
<h3 className="text-lg text-gray-900 mb-2 flex items-center gap-2 font-sans">
<span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
<iconify-icon className="text-gray-400 text-sm" icon="lucide:plus"></iconify-icon>
</span>
                                What happens if I hit my rate limit?
                            </h3>
<p className="text-gray-500 text-sm leading-relaxed pl-8 font-sans">
                                We provide soft limits and will alert you before throttling. For unexpected spikes, we offer burst capacity to keep you online.
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
<iconify-icon className="text-emerald-400 text-2xl drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" icon="lucide:credit-card"></iconify-icon>
</div>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-manrope font-medium tracking-tighter">Ready to build the future?</h2>
<p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed font-sans">Join thousands of developers building the next generation of financial products with Swipeeely.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-700 text-white hover:brightness-110 transition-all shadow-[0_0_25px_rgba(16,185,129,0.2)] flex items-center gap-2 border border-emerald-400/20 font-sans">
                            Start building now <iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-sans">
                            View Documentation
                        </button>
</div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-8 opacity-50"></div>

<div className="px-8 md:px-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

<div className="lg:col-span-5 space-y-6">
<h3 className="text-3xl text-white font-manrope font-medium tracking-tighter">Swipeeely<span className="text-emerald-500 font-manrope font-medium tracking-tighter">.</span></h3>
<p className="text-gray-500 text-sm leading-relaxed max-w-sm font-sans">
                            Democratizing financial infrastructure for the internet economy.
                        </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-white/5" href="#">
<iconify-icon className="text-lg" icon="lucide:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-white/5" href="#">
<iconify-icon className="text-lg" icon="lucide:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-white/5" href="#">
<iconify-icon className="text-lg" icon="lucide:twitter"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-12">

<div className="space-y-6">
<h4 className="text-white font-sans">Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Payments</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Billing</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Connect</a></li>
</ul>
</div>

<div className="space-y-6">
<h4 className="text-white font-sans">Developers</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Documentation</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">API Reference</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Libraries</a></li>
</ul>
</div>

<div className="space-y-6 hidden sm:block">
<h4 className="text-white font-sans">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">About Us</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-sans" href="#">Legal</a></li>
</ul>
</div>
</div>
</div>
</footer>
</main>
</div>

    </>
  );
}
