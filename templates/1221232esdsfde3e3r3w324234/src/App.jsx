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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once active if you don't want it to fade out again
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none"></div>
<div className="fixed inset-0 bg-grid -z-20 pointer-events-none h-screen"></div>

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
                Vast.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-zinc-900 transition-colors relative group" href="#approach">
                    Approach
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-900 transition-colors relative group" href="#services">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-900 transition-colors relative group" href="#cases">
                    Cases
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-900 transition-colors relative group" href="#team">
                    Team
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 transition-all group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#contact">Contact</a>
<button className="md:hidden text-zinc-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-start max-w-4xl reveal active">
<div className="flex items-center gap-2 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-900"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Available for Q4 2024</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-zinc-900 tracking-tight leading-[1.05] mb-8">
                    Strategic partner <br className="hidden md:block"/>
<span className="text-zinc-300">working inside</span> <br className="hidden md:block"/>
<span className="text-gradient">your team.</span>
</h1>
<p className="text-lg md:text-xl leading-relaxed max-w-2xl text-zinc-500 mb-10 font-normal">
                    Stop outsourcing your brain. Vast integrates directly into your organization to build marketing capability, drive strategy, and ensure long-term growth.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="btn-glow inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 duration-300 shadow-lg shadow-zinc-200">
                        Reinforce your team
                    </button>
<button className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-zinc-200 bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 duration-300">
                        Check availability
                    </button>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-100 bg-white/50 backdrop-blur-sm overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Trusted by forward-thinking companies</p>
</div>
<div className="relative w-full overflow-hidden">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-scroll pause-hover">

<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-zinc-800">ACME Corp</span>
<span className="text-xl font-semibold tracking-tight text-zinc-800 flex items-center gap-1"><iconify-icon icon="lucide:triangle" width="18"></iconify-icon> Vertex</span>
<span className="text-xl font-bold tracking-tight text-zinc-800 italic">SaaSify</span>
<span className="text-xl font-bold tracking-tight text-zinc-800">GlobalBank</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-800">TechStart</span>
<span className="text-xl font-bold tracking-tight text-zinc-800 flex items-center gap-1"><iconify-icon icon="lucide:layers" width="18"></iconify-icon> Stack</span>
</div>

<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-zinc-800">ACME Corp</span>
<span className="text-xl font-semibold tracking-tight text-zinc-800 flex items-center gap-1"><iconify-icon icon="lucide:triangle" width="18"></iconify-icon> Vertex</span>
<span className="text-xl font-bold tracking-tight text-zinc-800 italic">SaaSify</span>
<span className="text-xl font-bold tracking-tight text-zinc-800">GlobalBank</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-800">TechStart</span>
<span className="text-xl font-bold tracking-tight text-zinc-800 flex items-center gap-1"><iconify-icon icon="lucide:layers" width="18"></iconify-icon> Stack</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-16 max-w-xl">
                    Is your growth stuck in operational chaos?
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group reveal delay-100">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-zinc-50 rounded-lg text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:map" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-300 group-hover:text-zinc-500">01</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Strategy Gap</h3>
<p className="text-sm leading-relaxed text-zinc-500">Tactics without strategy. Teams running fast but in the wrong direction.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group reveal delay-200">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-zinc-50 rounded-lg text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-300 group-hover:text-zinc-500">02</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Knowledge Deficit</h3>
<p className="text-sm leading-relaxed text-zinc-500">Activity does not equal progress. Missing the connecting roadmap.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group reveal delay-300">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-zinc-50 rounded-lg text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-300 group-hover:text-zinc-500">03</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Data Blindness</h3>
<p className="text-sm leading-relaxed text-zinc-500">Decisions on gut feeling. Talented team, but no data expertise.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group reveal">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-zinc-50 rounded-lg text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:pause-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-300 group-hover:text-zinc-500">04</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Temporary Void</h3>
<p className="text-sm leading-relaxed text-zinc-500">Missing leadership stalls momentum. We fill the gap immediately.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="approach">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="reveal">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 block">The Vast Way</span>
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-6">
                        Co-entrepreneurship.<br/>
                        Not just consultancy.
                    </h2>
<p className="text-lg leading-relaxed text-zinc-500">
                        We don't deliver a PDF and leave. We step into the mud with you. We adopt an in-house mindset where your problems become our problems. We build the systems you keep.
                    </p>
</div>
<div className="flex flex-col gap-6">
<div className="group flex items-start gap-4 p-6 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300 reveal delay-100 cursor-default">
<div className="mt-1 text-zinc-400 group-hover:text-zinc-900 transition-colors">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-1">Strategy first, execution second</h4>
<p className="text-sm text-zinc-500">We align every action with your long-term business objectives before we build.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-6 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300 reveal delay-200 cursor-default">
<div className="mt-1 text-zinc-400 group-hover:text-zinc-900 transition-colors">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-1">AI-enhanced workflows for speed</h4>
<p className="text-sm text-zinc-500">Leveraging modern tools to automate the mundane and focus on creative leverage.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-6 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300 reveal delay-300 cursor-default">
<div className="mt-1 text-zinc-400 group-hover:text-zinc-900 transition-colors">
<iconify-icon icon="lucide:message-square" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-1">Radical honesty and transparency</h4>
<p className="text-sm text-zinc-500">We tell you what you need to hear, not just what you want to hear.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-400 relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-800/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-md">
                    Capabilities we embed in your organization
                </h2>
<a className="text-sm font-medium text-white hover:text-zinc-300 flex items-center gap-2 group transition-colors" href="#">
                    View all services
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group flex flex-col justify-between h-full border border-zinc-800 p-8 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1 reveal delay-100">
<div>
<div className="mb-6 p-3 bg-zinc-800 border border-zinc-700 w-fit rounded-lg text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:compass" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Marketing Strategy</h3>
<p className="text-sm leading-relaxed mb-8 text-zinc-500 group-hover:text-zinc-400 transition-colors">Defining the roadmap, positioning, and long-term growth levers. We clarify the 'Why' and the 'How'.</p>
</div>
<a className="text-sm font-medium text-white flex items-center gap-2 group-hover:gap-3 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" href="#">
                        Learn more <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group flex flex-col justify-between h-full border border-zinc-800 p-8 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1 reveal delay-200">
<div>
<div className="mb-6 p-3 bg-zinc-800 border border-zinc-700 w-fit rounded-lg text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Growth &amp; Data</h3>
<p className="text-sm leading-relaxed mb-8 text-zinc-500 group-hover:text-zinc-400 transition-colors">Implementing data-driven loops and performance infrastructure. Turning metrics into revenue.</p>
</div>
<a className="text-sm font-medium text-white flex items-center gap-2 group-hover:gap-3 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" href="#">
                        Learn more <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group flex flex-col justify-between h-full border border-zinc-800 p-8 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1 reveal delay-300">
<div>
<div className="mb-6 p-3 bg-zinc-800 border border-zinc-700 w-fit rounded-lg text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Interim Leadership</h3>
<p className="text-sm leading-relaxed mb-8 text-zinc-500 group-hover:text-zinc-400 transition-colors">Senior marketing leadership to bridge gaps and mentor your internal team when you need it most.</p>
</div>
<a className="text-sm font-medium text-white flex items-center gap-2 group-hover:gap-3 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" href="#">
                        Learn more <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="cases">
<div className="max-w-7xl mx-auto">
<div className="bg-gradient-to-br from-zinc-50 to-white rounded-3xl p-8 md:p-16 border border-zinc-200 shadow-sm overflow-hidden relative reveal">

<div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="flex gap-2 mb-6">
<span className="px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 shadow-sm">Strategy</span>
<span className="px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 shadow-sm">Growth</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">
                            How we helped ScaleUp X double their lead volume in 6 months.
                        </h2>
<p className="text-zinc-500 mb-8 leading-relaxed">
                            By restructuring the marketing team and implementing a new data attribution model, we identified wasted spend and reallocated it to high-intent channels.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:gap-3 transition-all" href="#">
                            Read full case study
                            <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="bg-white rounded-xl shadow-lg shadow-zinc-200/50 border border-zinc-100 p-8 lg:p-12 transform hover:scale-[1.02] transition-transform duration-500">
<div className="flex items-end gap-4 mb-2">
<span className="text-5xl font-bold text-zinc-900 tracking-tighter">+104%</span>
<span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full mb-2 flex items-center">
<iconify-icon className="mr-1" icon="lucide:trending-up" width="12"></iconify-icon> YoY
                            </span>
</div>
<p className="text-sm text-zinc-400 mb-8">Qualified Lead Volume</p>
<div className="space-y-6">
<div className="group">
<div className="flex justify-between text-xs text-zinc-500 mb-2">
<span>Organic Traffic</span>
<span className="font-semibold text-zinc-900">+85%</span>
</div>
<div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-900 w-[0%] animate-fill rounded-full transition-all duration-1000 ease-out" style={{width: '85%'}}></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs text-zinc-500 mb-2">
<span>Conversion Rate</span>
<span className="font-semibold text-zinc-900">+60%</span>
</div>
<div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-[0%] animate-fill rounded-full transition-all duration-1000 ease-out delay-200" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-zinc-100 bg-white">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-6">Vast means Steady.</h2>
<p className="text-xl text-zinc-500 leading-relaxed mb-16">
                In a world of fluctuating trends and rotating consultants, we offer a steady hand. Reliable expertise. A partner that has your back when things get tough. We are Vast.
            </p>
<div className="grid grid-cols-2 gap-8 md:gap-24 border-t border-zinc-100 pt-12">
<div className="group">
<div className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tighter mb-2 group-hover:scale-110 transition-transform origin-bottom duration-300">100%</div>
<div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Commitment</div>
</div>
<div className="group">
<div className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tighter mb-2 group-hover:scale-110 transition-transform origin-bottom duration-300">0%</div>
<div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Nonsense</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50/50" id="team">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2 block">Steady Faces</span>
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">The people behind the partnership.</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group reveal delay-100">
<div className="aspect-square bg-zinc-100 rounded-2xl mb-4 overflow-hidden relative border border-zinc-200">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-white group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-zinc-300 group-hover:text-zinc-400">
<iconify-icon icon="lucide:user" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900">Sarah DeVries</h3>
<p className="text-sm text-zinc-500">Strategic Lead</p>
</div>

<div className="group reveal delay-200">
<div className="aspect-square bg-zinc-100 rounded-2xl mb-4 overflow-hidden relative border border-zinc-200">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-white group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-zinc-300 group-hover:text-zinc-400">
<iconify-icon icon="lucide:user" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900">Mark Jansen</h3>
<p className="text-sm text-zinc-500">Growth Director</p>
</div>

<div className="group reveal delay-300">
<div className="aspect-square bg-zinc-100 rounded-2xl mb-4 overflow-hidden relative border border-zinc-200">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-white group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-zinc-300 group-hover:text-zinc-400">
<iconify-icon icon="lucide:user" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900">Elise Bakker</h3>
<p className="text-sm text-zinc-500">Content Strategist</p>
</div>

<div className="group reveal">
<div className="aspect-square bg-zinc-100 rounded-2xl mb-4 overflow-hidden relative border border-zinc-200">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-white group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-zinc-300 group-hover:text-zinc-400">
<iconify-icon icon="lucide:user" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900">Tom Smit</h3>
<p className="text-sm text-zinc-500">Data &amp; Automation</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-100" id="insights">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5 reveal">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 block">Knowledge</span>
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">We share what we know.</h2>
<p className="text-zinc-500 mb-8 leading-relaxed">
                    We believe in open sourcing our strategy. Download our latest guides or sign up for our upcoming podcast.
                </p>
<form className="flex flex-col gap-3 max-w-sm">
<label className="text-sm font-medium text-zinc-900">Stay updated</label>
<div className="flex gap-2">
<input className="flex-1 bg-white border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow" placeholder="Get the latest insights" type="email"/>
<button className="px-5 py-2.5 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200" type="button">Subscribe</button>
</div>
</form>
</div>

<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col justify-between h-full hover:border-zinc-300 transition-colors reveal delay-100">
<div className="mb-6">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-4 text-zinc-900 shadow-sm">
<iconify-icon icon="lucide:mic" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">The In-House Podcast</h3>
<p className="text-sm text-zinc-500">Coming soon. Conversations with marketing leaders.</p>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-900 text-white flex flex-col justify-between h-full group cursor-pointer hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-zinc-200 reveal delay-200">
<div className="mb-6">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-white border border-zinc-700">
<iconify-icon icon="lucide:book" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">The Strategy Playbook</h3>
<p className="text-sm text-zinc-400">Guide for 2025 planning. Download now.</p>
</div>
<div className="flex justify-end">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="lucide:download" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-100/50 to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-6">Stop guessing. <br/>Start building.</h2>
<p className="text-lg text-zinc-500 mb-10">We are ready to become the steady force in your marketing team. Let's discuss where you need support.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="btn-glow inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all hover:-translate-y-0.5 shadow-lg shadow-zinc-200">
                    Reinforce your team now
                </button>
<button className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-zinc-200 bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-all hover:-translate-y-0.5">
                    Check availability
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-16 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 mb-6 flex items-center gap-2" href="#">
<div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
                        Vast.
                    </a>
<div className="text-sm text-zinc-500 space-y-2">
<p>Amsterdam, Netherlands</p>
<p>+31 (0)20 123 4567</p>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Strategy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Growth</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Interim</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Cases</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors transform hover:scale-110 duration-200" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors transform hover:scale-110 duration-200" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 text-xs text-zinc-400">
<p>© 2024 Vast Marketing Consultancy. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
