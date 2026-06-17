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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Select all elements with the 'reveal' class
            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 glass-nav" id="navbar">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
<img alt="26lights Logo" className="w-auto h-8 object-cover rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3cac0d9-8724-48dd-8dbf-ef47f070289d_320w.png"/>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="transition-all transform hover:scale-105 active:scale-95 text-xs font-medium rounded-full py-2.5 px-5 hover:bg-gray-800 text-white bg-black shadow-lg shadow-black/10" href="#audit">Book a Strategy Call</a>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-24 overflow-visible bg-white pt-32 pb-20 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="flex flex-col gap-8 items-start reveal reveal-from-left">
<div className="space-y-6">
<div className="flex flex-wrap gap-3 mt-2 gap-x-3 gap-y-3">
<div className="flex gap-2 text-xs font-medium text-gray-700 bg-gray-50 border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-sm text-purple-600" icon="solar:cpu-linear"></iconify-icon>
                            AI Agents
                        </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700">
<iconify-icon className="text-sm text-blue-600" icon="solar:database-linear"></iconify-icon>
                            Custom ERPs
                        </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700">
<iconify-icon className="text-sm text-orange-600" icon="solar:code-circle-linear"></iconify-icon>
                            Refactoring
                        </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700">
<iconify-icon className="text-sm text-green-600" icon="solar:round-transfer-horizontal-linear"></iconify-icon>
                            Smart Automation
                        </div>
</div><h1 className="md:text-6xl leading-[1.05] text-balance text-5xl font-semibold text-gray-900 tracking-tight">
                        Your 360° Architect
                        <span className="block text-gray-400">for Business AI.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-gray-600 max-w-lg">
                        Stop fragmented tools. Start integrated efficiency. We architect, build, and secure the complete AI ecosystem of your SME — from autonomous agents to custom ERPs.
                    </p>

</div>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
<a className="group hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-xl shadow-gray-500/20 flex gap-2 font-medium text-white bg-gray-900 rounded-xl pt-4 pr-8 pb-4 pl-8 items-center justify-center" href="#powerups">
                        Discover our 5 AI Power-ups
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group transition-all transform hover:-translate-y-1 flex gap-2 font-medium text-gray-700 bg-white border border-gray-200 rounded-xl pt-4 pr-8 pb-4 pl-8 items-center justify-center hover:bg-gray-50 hover:border-gray-300" href="#audit">
                        Book a Strategy Call
                    </a>
</div>
</div>

<div className="min-h-[400px] lg:min-h-[550px] flex flex-col bg-gray-100 reveal reveal-from-right delay-200 overflow-hidden isolate w-full h-full border-gray-200 border rounded-3xl relative shadow-2xl">
<img alt="Business AI Visual Placeholder" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bc24e36-c360-42f5-ace9-707c60d0a11e_1600w.png"/>
</div>
</div>
</section>
<section className="border-y overflow-hidden bg-gray-900 border-gray-200 pt-20 pb-20 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-blue-500/5 blur-[60px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="reveal reveal-from-bottom text-center mb-12">
<h2 className="md:text-3xl text-2xl font-semibold text-gray-100 tracking-tight mb-3">We build on the best AI frameworks.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 gap-x-12 gap-y-12 items-center justify-items-center reveal reveal-from-bottom delay-200">
<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/017cd52f-9c70-4f8b-90f3-4539acf6dfdb_320w.png"/>
</div>
<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bbc1243-4e22-4a41-9366-60224a942433_320w.png"/>
</div>
<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dc3ec8d-53aa-41b4-9c70-63fce5ddf6a2_320w.png"/>
</div>
<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf04e0ff-0c76-403c-87d0-9dc8d1077538_320w.png"/>
</div>
<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80e42a04-a1ac-4405-80d9-94c335bbac94_320w.png"/>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="powerups">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal reveal-from-bottom text-center max-w-2xl mx-auto mb-16">
<span className="uppercase inline-block text-[10px] font-medium text-blue-600 tracking-widest mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">Defining The Scope</span>
<h2 className="md:text-5xl text-3xl font-normal text-gray-900 tracking-tight">
<span className="block font-semibold">Our 5 AI Power-ups</span>
</h2>
<p className="mt-6 text-lg leading-relaxed text-gray-600">We cover the full spectrum of AI implementation to build your modern operations.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 reveal reveal-scale delay-100 relative overflow-hidden">
<div className="w-full h-48 mb-8 rounded-xl bg-gradient-to-b from-gray-50/80 to-white border border-gray-100 relative overflow-hidden transition-colors duration-300">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-purple-400/20 rounded-full blur-2xl group-hover:bg-purple-400/30 group-hover:scale-110 transition-all duration-500"></div>

<div className="absolute top-6 left-6 w-14 h-5 bg-white/90 backdrop-blur-sm rounded-md shadow-sm border border-gray-100 flex items-center px-1.5 gap-1.5 group-hover:-translate-y-1 transition-transform duration-500">
<div className="w-2 h-2 rounded-full bg-purple-300"></div>
<div className="w-8 h-1 rounded-full bg-gray-200"></div>
</div>
<div className="absolute bottom-6 right-6 w-20 h-6 bg-white/90 backdrop-blur-sm rounded-md shadow-sm border border-gray-100 flex items-center px-2 gap-1.5 group-hover:translate-y-1 transition-transform duration-500">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<div className="w-12 h-1 rounded-full bg-gray-200"></div>
</div>
<div className="absolute top-8 right-8 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
<svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="absolute inset-0 flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.15]" viewbox="0 0 200 200">
<path d="M100 100 L 40 40 M100 100 L 160 150 M100 100 L 150 50" stroke="#a855f7" stroke-dasharray="4 4" strokeWidth="1.5"></path>
</svg>
<div className="w-16 h-16 bg-white border border-purple-100/50 rounded-2xl flex items-center justify-center text-purple-600 shadow-xl shadow-purple-500/10 group-hover:scale-110 transition-transform duration-500 z-10">
<svg className="lucide lucide-bot" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">AI Agents (Digital Workforce)</h3>
<p className="leading-relaxed text-base text-gray-500">
                        Hire autonomous workers for Support, Sales, or Admin. They handle 24/7 tasks using your internal knowledge, without hallucinations.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 reveal reveal-scale delay-200 relative overflow-hidden">
<div className="w-full h-48 mb-8 rounded-xl bg-gradient-to-b from-gray-50/80 to-white border border-gray-100 relative overflow-hidden transition-colors duration-300">

<div className="absolute inset-0 bg-[linear-gradient(45deg,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl group-hover:bg-blue-400/25 group-hover:scale-110 transition-all duration-500"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-0">

<div className="w-36 h-8 bg-white/80 backdrop-blur-md border border-gray-100/50 rounded-lg shadow-sm flex items-center px-3 gap-2 transform -translate-y-5 group-hover:-translate-y-7 opacity-80 transition-all duration-500">
<div className="w-3 h-3 rounded bg-blue-100"></div>
<div className="w-14 h-1.5 rounded-full bg-gray-200"></div>
<div className="w-4 h-1.5 rounded-full bg-gray-100 ml-auto"></div>
</div>

<div className="w-40 h-8 bg-white/80 backdrop-blur-md border border-gray-100/50 rounded-lg shadow-sm flex items-center px-3 gap-2 transform translate-y-5 group-hover:translate-y-7 opacity-80 transition-all duration-500">
<div className="w-3 h-3 rounded bg-blue-200"></div>
<div className="w-16 h-1.5 rounded-full bg-gray-200"></div>
<div className="w-6 h-1.5 rounded-full bg-blue-100 ml-auto"></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-16 h-16 bg-white border border-blue-100/50 rounded-2xl flex items-center justify-center text-blue-600 shadow-xl shadow-blue-500/10 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-network" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Simple AI ERP (Management Backbone)</h3>
<p className="leading-relaxed text-base text-gray-500">
                        A custom-built, lightweight management system that follows your business rules, not the other way around.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 reveal reveal-scale delay-300 relative overflow-hidden">
<div className="w-full h-48 mb-8 rounded-xl bg-[#fafafa] border border-gray-100 relative overflow-hidden transition-colors duration-300">

<div className="absolute -right-4 -bottom-4 w-36 h-36 bg-orange-400/20 rounded-full blur-3xl group-hover:bg-orange-400/30 transition-all duration-500"></div>
<div className="absolute -left-4 -top-4 w-24 h-24 bg-orange-300/15 rounded-full blur-2xl group-hover:scale-110 transition-all duration-500"></div>

<div className="absolute top-4 left-4 w-28 h-20 bg-gray-900 rounded-lg shadow-lg border border-gray-800 p-2.5 transform -rotate-6 group-hover:-rotate-12 group-hover:-translate-y-1 transition-all duration-500 z-0">
<div className="flex gap-1 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="space-y-2">
<div className="w-14 h-1 rounded-full bg-orange-400/80"></div>
<div className="w-20 h-1 rounded-full bg-gray-600/80 ml-2"></div>
<div className="w-12 h-1 rounded-full bg-blue-400/80 ml-2"></div>
<div className="w-16 h-1 rounded-full bg-gray-600/80"></div>
</div>
</div>
<div className="absolute bottom-5 right-5 w-24 h-16 bg-white rounded-lg shadow-md border border-gray-200 p-2.5 transform rotate-3 group-hover:rotate-6 group-hover:translate-y-1 transition-all duration-500 z-0">
<div className="space-y-2 mt-1">
<div className="w-12 h-1.5 rounded-full bg-orange-100"></div>
<div className="w-16 h-1.5 rounded-full bg-gray-100"></div>
<div className="w-10 h-1.5 rounded-full bg-gray-100"></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-16 h-16 bg-white border border-orange-100/50 rounded-2xl flex items-center justify-center text-orange-500 shadow-xl shadow-orange-500/10 group-hover:scale-110 transition-transform duration-500 backdrop-blur-md bg-white/90">
<svg className="lucide lucide-code-2" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Vibe Coding Refactoring</h3>
<p className="leading-relaxed text-base text-gray-500">
                        Taking prototypes built with tools like Bolt, Lovable, or Cursor and transforming them into secure, scalable, and market-ready software (80% to 100%).
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 reveal reveal-scale delay-100 relative overflow-hidden">
<div className="w-full h-48 mb-8 rounded-xl bg-gradient-to-b from-gray-50/50 to-white border border-gray-100 relative overflow-hidden transition-colors duration-300">

<div className="absolute inset-0 bg-[radial-gradient(#80808020_1px,transparent_1px)] bg-[size:16px_16px]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-green-400/15 rounded-full blur-2xl group-hover:bg-green-400/25 group-hover:scale-110 transition-all duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center z-0">
<svg className="absolute w-full h-full text-green-300 stroke-current opacity-60" fill="none" viewbox="0 0 200 100">
<path d="M40 50 C 70 50, 70 20, 100 20" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M40 50 C 70 50, 70 80, 100 80" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M160 50 C 130 50, 130 20, 100 20" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M160 50 C 130 50, 130 80, 100 80" stroke-dasharray="4 4" strokeWidth="1.5"></path>
</svg>

<div className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm flex items-center justify-center group-hover:-translate-x-1.5 transition-transform duration-500">
<div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
</div>
<div className="absolute right-8 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-500">
<div className="w-3 h-3 rounded-full bg-green-300"></div>
</div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-lg shadow-sm flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-500">
<svg className="text-gray-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-16 h-16 bg-white border border-green-100/50 rounded-2xl flex items-center justify-center text-green-500 shadow-xl shadow-green-500/10 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-1000">
<svg className="lucide lucide-workflow" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Smart Automation (Workflow Sync)</h3>
<p className="leading-relaxed text-base text-gray-500">
                        We connect your existing apps (CRM, Email, Slack) with intelligent AI layers to eliminate repetitive manual data entry.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 reveal reveal-scale delay-200 relative overflow-hidden">
<div className="w-full h-48 mb-8 rounded-xl bg-gradient-to-tr from-gray-50/50 to-pink-50/30 border border-gray-100 relative overflow-hidden transition-colors duration-300">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-pink-100/60 rounded-full opacity-60 scale-75 group-hover:scale-100 transition-transform duration-700"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border border-pink-200/60 rounded-full opacity-60 scale-75 group-hover:scale-100 transition-transform duration-700 delay-75"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-pink-400/15 rounded-full blur-2xl group-hover:bg-pink-400/25 group-hover:scale-110 transition-all duration-500"></div>

<div className="absolute top-6 left-8 w-16 h-12 bg-white/60 backdrop-blur-sm border-2 border-dashed border-gray-200/80 rounded-lg group-hover:-translate-y-1.5 group-hover:-translate-x-1.5 transition-transform duration-500 z-0"></div>
<div className="absolute bottom-6 right-8 group-hover:translate-x-2 group-hover:translate-y-1 transition-transform duration-500 z-10">
<svg className="text-pink-500 fill-pink-100 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m4 4 7.07 17 2.51-7.39L21 11.07z"></path></svg>
</div>

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative w-24 h-24 flex items-center justify-center">

<div className="absolute w-12 h-12 bg-white/40 border border-dashed border-pink-200/50 rounded-xl -translate-x-5 -translate-y-4 rotate-[-12deg] group-hover:-translate-x-8 group-hover:-translate-y-7 group-hover:rotate-[-16deg] transition-all duration-500 z-0 flex flex-col p-2 backdrop-blur-sm shadow-sm">
<span className="text-[7px] font-mono text-pink-400/70 font-bold mb-1">v1</span>
<div className="w-full h-1 bg-pink-200/60 rounded-full mb-0.5"></div>
<div className="w-2/3 h-1 bg-pink-200/60 rounded-full"></div>
</div>

<div className="absolute w-14 h-14 bg-white/70 border border-pink-200/70 rounded-xl translate-x-5 -translate-y-2 rotate-[8deg] group-hover:translate-x-8 group-hover:-translate-y-4 group-hover:rotate-[12deg] transition-all duration-500 z-10 flex flex-col p-2 backdrop-blur-md shadow-sm">
<span className="text-[8px] font-mono text-pink-400/80 font-bold mb-1.5">v2</span>
<div className="w-full h-1 bg-pink-300/70 rounded-full mb-1"></div>
<div className="w-4/5 h-1 bg-pink-300/70 rounded-full mb-1"></div>
<div className="w-1/2 h-1 bg-pink-300/70 rounded-full"></div>
</div>

<div className="absolute w-16 h-16 bg-white border border-pink-100/80 rounded-2xl flex items-center justify-center text-pink-500 shadow-xl shadow-pink-500/15 z-20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
<span className="absolute top-1.5 left-2 text-[8px] font-mono text-pink-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">v3</span>
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="align-end-horizontal" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(236, 72, 153)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="6" x="4" y="2"></rect><rect height="9" rx="2" width="6" x="14" y="9"></rect><path d="M22 22H2"></path></svg>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">AI Prototyping (Proof of Concept)</h3>
<p className="leading-relaxed text-base text-gray-500">
                        Validate your most ambitious ideas in days. We build a functional version to test ROI before any heavy investment.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-y bg-gray-950 w-full border-gray-800 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 gap-x-16 gap-y-16 items-start">

<div className="lg:col-span-4 sticky top-24 reveal reveal-from-left">
<div className="inline-block text-[10px] uppercase font-semibold text-blue-400 tracking-widest border-blue-800/50 border bg-blue-900/20 rounded-full px-3 py-1 mb-4">
                    360° Expertise
                </div>
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">One partner. Every skill you need.</h2>
<p className="text-lg leading-relaxed text-gray-400 mb-8">
                    We don't just "code". We deliver complete, business-ready products with a deeply integrated approach.
                </p>

<div className="p-6 bg-black rounded-2xl text-white shadow-xl border border-gray-800 mt-4">
<div className="text-2xl font-semibold mb-2 text-white tracking-tight">"No Junior Zone"</div>
<p className="text-sm text-gray-400 leading-relaxed">
                        Only senior experts and state-of-the-art AI. Guaranteed execution quality and precision from day one.
                    </p>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="hover:shadow-lg transition-shadow duration-300 reveal reveal-from-bottom delay-100 bg-gray-900 border-gray-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-[120px] h-[120px] rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-5 overflow-hidden">
<img alt="Arik" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60e9792b-6a93-4b45-89d9-52962fd3a36d_320w.png"/>
</div>
<h3 className="text-xl font-semibold text-white mb-1">Arik</h3>
<p className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 mb-3">Business Strategy</p>
<p className="text-sm text-gray-400 leading-relaxed">
                        14+ years experience. Ensuring your AI project delivers real business ROI and operational impact.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-gray-800 bg-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal reveal-from-bottom delay-200">
<div className="flex mb-5">
<div className="w-[120px] h-[120px] rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center overflow-hidden z-10 shadow-sm">
<img alt="Olivier" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6445ba17-1e6f-4ded-a8a4-b7bac8e939c1_320w.png"/>
</div>
<div className="w-[120px] h-[120px] rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center overflow-hidden -ml-8 z-0 shadow-sm">
<img alt="Renaud" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc82b49b-379c-4b7c-a6d4-eda7de4f70c6_320w.png"/>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-1">Olivier &amp; Renaud</h3>
<p className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 mb-3">Tech &amp; Architecture</p>
<p className="text-sm text-gray-400 leading-relaxed">
                        Senior Engineering leads. Guardians of security, scalability, and "Production-Grade" quality.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-gray-800 bg-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal reveal-from-bottom delay-300">
<div className="w-[120px] h-[120px] rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-5 overflow-hidden">
<img alt="Céline" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a0d0486-a8f6-4bef-9bae-8e93635aa7cc_320w.png"/>
</div>
<h3 className="text-xl font-semibold text-white mb-1">Céline</h3>
<p className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 mb-3">Product Management</p>
<p className="text-sm text-gray-400 leading-relaxed">
                        Translating complex business pains into simple, powerful AI workflows for your team.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-gray-800 bg-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal reveal-from-bottom delay-400">
<div className="w-[120px] h-[120px] rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-5 overflow-hidden">
<img alt="Laurent" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fafa9551-95e3-4bec-a6eb-d7e8bead9843_320w.png"/>
</div>
<h3 className="text-xl font-semibold text-white mb-1">Laurent</h3>
<p className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 mb-3">UI/UX Design</p>
<p className="text-sm text-gray-400 leading-relaxed">
                        Crafting intuitive, beautiful interfaces for seamless adoption by your team and clients.
                    </p>
</div>
</div>
</div>
</div>
</section>


<section className="bg-white w-full border-gray-200 border-b pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-16 reveal reveal-from-bottom">
<span className="inline-block text-[10px] uppercase font-semibold text-indigo-600 tracking-widest border-indigo-100 border bg-indigo-50 rounded-full px-3 py-1 mb-6">Case Studies</span>
<h2 className="md:text-5xl text-4xl font-semibold text-gray-900 tracking-tight mb-6 text-balance">
                    Real Impact.
                </h2>
<p className="leading-relaxed text-lg text-gray-600">
                    We measure success by the tangible ROI and speed we bring to your operations.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">
<div className="hidden md:block absolute top-[40%] left-12 right-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 z-0"></div>

<div className="group p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-from-bottom delay-100 flex flex-col relative z-10">
<div className="mb-6">
<div className="text-5xl font-bold tracking-tight text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">70%</div>
<div className="text-xs uppercase tracking-wider font-semibold text-gray-400">Resolution Rate</div>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">The Autonomous Support</h3>
<span className="inline-block text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded w-fit mb-4">SaaS Industry</span>
<p className="leading-relaxed text-sm sm:text-base text-gray-500 flex-1">
                        70% of support tickets resolved instantly via a custom AI Agent connected securely to product documentation.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-200 bg-gray-50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-from-bottom delay-200 flex flex-col relative z-10 overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gray-100 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 mb-6">
<div className="text-5xl font-bold tracking-tight text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">40%</div>
<div className="text-xs uppercase tracking-wider font-semibold text-gray-400">Gain in Speed</div>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight relative z-10">The Tailored ERP</h3>
<span className="relative z-10 inline-block text-xs font-medium bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded w-fit mb-4">Logistics SME</span>
<p className="relative z-10 leading-relaxed text-sm sm:text-base text-gray-600 flex-1">
                        40% gain in operational speed by replacing a rigid legacy system with a fully custom, lightweight AI-native ERP.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-from-bottom delay-300 flex flex-col relative z-10">
<div className="mb-6 flex items-baseline gap-2">
<div className="text-5xl font-bold tracking-tight text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">80<span className="text-3xl text-gray-400 font-medium">→</span>100<span className="text-3xl">%</span></div>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">The Rescue Refactor</h3>
<span className="inline-block text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded w-fit mb-4">Fintech Startup</span>
<p className="leading-relaxed text-sm sm:text-base text-gray-500 flex-1">
                        Secured, refactored, and successfully launched a prototype built with AI-coding tools that was failing in production.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 z-20 pt-24 pb-32 relative" id="audit">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 reveal reveal-from-bottom">
<h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-semibold tracking-tight">No code without a plan.</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">Every 360° partnership starts with a structured audit.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

<div className="lg:col-span-3 flex flex-col transform hover:shadow-2xl transition-shadow text-white bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12 relative shadow-xl reveal reveal-from-left delay-100">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">The First Step</div>
<div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between mb-8 pb-8 border-b border-gray-800">
<div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight">Audit &amp; Blueprint</h3>
<p className="text-gray-400">Map workflows, select the stack, and define the ROI before writing a single line of code.</p>
</div>
<div className="text-4xl font-semibold text-white tracking-tight shrink-0">€900</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 text-sm text-gray-300">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 
                            Workflow &amp; Process Audit
                        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 
                            Tool &amp; Tech Stack Selection
                        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 
                            Data Architecture Mapping
                        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 
                            Clear ROI Definition
                        </div>
</div>
<a className="mt-auto inline-flex justify-center items-center gap-2 hover:bg-gray-100 transition-all transform hover:-translate-y-1 duration-200 text-base font-medium text-gray-900 bg-white w-full rounded-xl py-4 shadow-lg" href="https://calendly.com/alicia-26lights/30min?month=2026-02">
                        Start your Audit
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:col-span-2 flex flex-col transform hover:shadow-xl transition-shadow bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 relative shadow-lg reveal reveal-from-right delay-200">
<div className="flex gap-4 mb-6 gap-x-4 gap-y-4 items-center">
<div className="w-[120px] h-[120px] rounded-full overflow-hidden border border-gray-100 shadow-sm shrink-0">
<img alt="Profile" className="w-[120px] h-[120px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3126296e-981b-4239-9323-ace4001939d9_320w.png"/>
</div>
<div className="">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Alicia</h3>
<p className="text-sm text-gray-500">CEO</p>
</div>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-gray-900">Not sure where to start?</h3>
<p className="text-gray-500 mb-8 leading-relaxed">Book a quick discovery call. We'll discuss your current bottlenecks and explore if AI can provide a tangible ROI.</p>
<div className="space-y-4 mb-10 text-sm text-gray-600">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:calendar-date-linear"></iconify-icon> 
                            Free 15-min consultation
                        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:lightbulb-bolt-linear"></iconify-icon> 
                            Initial feasibility check
                        </div>
</div>
<a className="mt-auto inline-flex justify-center items-center gap-2 hover:bg-gray-50 transition-all transform hover:-translate-y-1 duration-200 text-base font-medium text-gray-900 bg-white border border-gray-200 w-full rounded-xl py-4 shadow-sm" href="mailto:alicia@26lights.com">
                        Contact Us
                        <iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-gray-200 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
<div className="reveal reveal-from-bottom">
<h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-4">Ready to architect your AI future?</h2>
<div className="flex flex-col sm:flex-row gap-4 text-gray-500 items-start sm:items-center text-sm">
<a className="transition-colors hover:text-black flex items-center gap-2" href="mailto:alicia@26lights.com"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> alicia@26lights.com</a>
<span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></span>
<a className="transition-colors hover:text-black flex items-center gap-2" href="/tel:+32492660089"><iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon> +32 492 66 00 89</a>
</div>
<div className="mt-4 text-gray-400 text-sm">Brussels / Paris</div>
</div>
<div className="flex flex-col gap-4 md:items-end justify-center reveal reveal-from-bottom delay-100">
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 hover:gap-3 transition-all font-medium text-white bg-gray-900 px-8 py-3.5 rounded-xl shadow-lg shadow-gray-200/50 hover:bg-gray-800" href="https://calendly.com/alicia-26lights/30min?month=2026-02">
                        Schedule a 360° Strategy Call <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-[#25D366]/20" href="#">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
                        Chat via WhatsApp
                    </a>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs border-gray-100 text-gray-400 reveal reveal-from-bottom delay-200">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span>© 2026 26lights. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
