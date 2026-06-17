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
      

<nav className="fixed z-50 bg-gray-700 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded flex items-center justify-center font-semibold tracking-tighter group-hover:bg-gray-200 transition-colors bg-white text-black font-geist">
                    DS
                </div>
<span className="text-sm font-medium tracking-tight group-hover:text-gray-300 transition-colors text-white font-geist">Kaseenchi Labs</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium transition-colors hover:text-white font-geist" href="#services">Services</a>
<a className="text-xs font-medium transition-colors hover:text-white font-geist" href="#process">Process</a>
<a className="text-xs font-medium transition-colors hover:text-white font-geist" href="#work">Work</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full transition-colors text-black bg-white hover:bg-gray-200 font-geist" href="#contact">
                Start a Project
            </a>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="overflow-hidden md:pt-48 md:pb-32 md:text-blue-600 bg-gradient-to-br from-cyan-400 to-cyan-600 pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 backdrop-blur-sm border-white/10 bg-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium tracking-wide text-white font-geist">Available for new projects</span>
</div>
<h1 className="md:text-7xl lg:text-8xl bg-clip-text text-5xl font-semibold text-transparent tracking-tighter font-space-grotesk bg-gradient-to-b from-white via-white to-white/50 mb-6" style={{}}>Assimilating the<br/>digital future.</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light text-gray-400 font-geist">
                Full-cycle web development and design agency tailored for ambitious brands. We blend technical precision with aesthetic excellence.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 font-geist" href="#contact">
                    Book a consultation
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full md:w-auto px-8 py-3 border text-sm font-medium rounded-full transition-all backdrop-blur-sm border-white/10 bg-white/5 text-white hover:bg-white/10 font-geist" href="#work">
                    View recent work
                </a>
</div>
</div>
</section>

<section className="py-12 border-y bg-white/[0.02] border-white/5">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-gray-500 mb-8 uppercase tracking-widest font-geist">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold tracking-tighter text-white font-geist">ACME Corp</span>
<span className="text-lg font-semibold tracking-tighter text-white font-geist">Stark Ind</span>
<span className="text-lg font-semibold tracking-tighter text-white font-geist">Oscorp</span>
<span className="text-lg font-semibold tracking-tighter text-white font-geist">Cyberdyne</span>
<span className="text-lg font-semibold tracking-tighter text-white font-geist">Umbrella</span>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-white font-space-grotesk font-semibold">Comprehensive Solutions</h2>
<p className="font-light text-gray-400 font-geist">From first pixel to final deploy, we handle the entire lifecycle of your digital product.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm transition-colors pb-1 text-white hover:text-gray-300 font-geist" href="#contact">
                    See full details <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all border-white/10 hover:border-white/20">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gray-900 border-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-template" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white font-geist">Web Design</h3>
<p className="text-sm leading-relaxed text-gray-400 font-geist">
                        User-centric interfaces designed in Figma. We focus on usability, accessibility, and modern aesthetics that convert visitors.
                    </p>
</div>

<div className="group p-8 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all border-white/10 hover:border-white/20">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gray-900 border-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:code-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white font-geist">Development</h3>
<p className="text-sm leading-relaxed text-gray-400 font-geist">
                        Clean, semantic code using the latest frameworks. Responsive, fast, and built for scale from the ground up.
                    </p>
</div>

<div className="group p-8 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all border-white/10 hover:border-white/20">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gray-900 border-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:database" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white font-geist">Database Architecture</h3>
<p className="text-sm leading-relaxed text-gray-400 font-geist">
                        Secure and efficient data modeling. SQL &amp; NoSQL solutions tailored for performance and data integrity.
                    </p>
</div>

<div className="group p-8 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all border-white/10 hover:border-white/20">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gray-900 border-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white font-geist">Technical SEO</h3>
<p className="text-sm leading-relaxed text-gray-400 font-geist">
                        Optimizing structure and content to dominate search rankings. Core Web Vitals optimization and schema implementation.
                    </p>
</div>

<div className="group p-8 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all border-white/10 hover:border-white/20">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gray-900 border-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pen-tool" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white font-geist">Graphic Design</h3>
<p className="text-sm leading-relaxed text-gray-400 font-geist">
                        Brand identity systems, vectors, and digital assets. Visual consistency across all your touchpoints.
                    </p>
</div>

<div className="group p-8 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all border-white/10 hover:border-white/20">
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gray-900 border-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:share-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white font-geist">Social Marketing</h3>
<p className="text-sm leading-relaxed text-gray-400 font-geist">
                        Data-driven campaigns to engage your audience. Content strategy, scheduling, and analytics reporting.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-300/20 border-white/5 border-t px-6 py-24" id="process">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 text-white font-space-grotesk font-semibold">Built on precision.</h2>
<p className="mb-8 font-light text-lg text-gray-400 font-geist">
                        We don't just write code; we engineer solutions. Our process minimizes friction and maximizes output quality through iterative development.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono border-white/20 text-white font-geist">01</div>
<div>
<h4 className="font-medium mb-1 text-white font-geist">Discovery &amp; Strategy</h4>
<p className="text-sm text-gray-500 font-geist">Understanding business logic, competitors, and defining KPIs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono border-white/20 text-white font-geist">02</div>
<div>
<h4 className="font-medium mb-1 text-white font-geist">Design &amp; Prototyping</h4>
<p className="text-sm text-gray-500 font-geist">High-fidelity wireframes in Figma to visualize the end product.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono border-white/20 text-white font-geist">03</div>
<div>
<h4 className="font-medium mb-1 text-white font-geist">Development &amp; QA</h4>
<p className="text-sm text-gray-500 font-geist">Agile sprints, rigorous testing, and performance tuning.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 blur-3xl rounded-full opacity-30"></div>
<div className="relative border rounded-xl p-6 shadow-2xl border-white/10 bg-gray-950">

<div className="flex gap-2 mb-4 border-b pb-4 border-white/5">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-purple-500/50"></div>
</div>
<div className="font-mono text-xs space-y-2 text-gray-400">
<p className="font-geist"><span className="text-blue-400 font-geist">const</span> <span className="text-pink-400 font-geist">optimize</span> = <span className="text-yellow-300 font-geist">async</span> () =&gt; {</p>
<p className="pl-4 font-geist"><span className="text-blue-400 font-geist">const</span> analytics = <span className="text-blue-400 font-geist">await</span> db.fetch(<span className="text-purple-400 font-geist">'growth'</span>);</p>
<p className="pl-4 font-geist"><span className="text-blue-400 font-geist">if</span> (analytics.trend === <span className="text-purple-400 font-geist">'up'</span>) {</p>
<p className="pl-8 font-geist">return <span className="text-pink-400 font-geist">scaleInfrastructure</span>();</p>
<p className="pl-4 font-geist">}</p>
<p className="pl-4"><span className="text-gray-500 font-geist">// Deploying continuous improvements</span></p>
<p className="pl-4 font-geist">await <span className="text-pink-400 font-geist">deploy</span>(<span className="text-purple-400 font-geist">'production'</span>);</p>
<p className="font-geist">}</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="work">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl tracking-tight mb-12 text-white font-space-grotesk font-semibold">Selected Works</h2>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 from-black/80"></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<span className="text-xs font-medium mb-2 block text-pink-400 font-geist">Fintech</span>
<h3 className="text-2xl tracking-tight text-white font-space-grotesk font-semibold">Nova Finance Dashboard</h3>
<p className="text-sm mt-2 text-gray-400 font-geist">React, Tailwind, Postgres</p>
</div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
</div>

<div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-2xl border min-h-[250px] border-white/10 bg-gray-900">
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 from-black/80"></div>
<div className="absolute bottom-0 left-0 p-6 z-20">
<span className="text-xs font-medium mb-2 block text-blue-400 font-geist">E-Commerce</span>
<h3 className="text-xl font-medium tracking-tight text-white font-geist">Lumina Store</h3>
</div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
</div>

<div className="col-span-1 relative group overflow-hidden rounded-2xl border min-h-[250px] border-white/10 bg-gray-900">
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 from-black/80"></div>
<div className="absolute bottom-0 left-0 p-6 z-20">
<span className="text-xs font-medium mb-2 block text-purple-400 font-geist">SEO</span>
<h3 className="text-lg font-medium tracking-tight text-white font-geist">Growth Audit</h3>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:line-chart" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg>
</div>
</div>

<div className="col-span-1 relative group overflow-hidden rounded-2xl border min-h-[250px] border-white/10 bg-gray-900">
<div className="absolute inset-0 bg-gradient-to-t to-transparent z-10 from-black/80"></div>
<div className="absolute bottom-0 left-0 p-6 z-20">
<span className="text-xs font-medium mb-2 block text-purple-400 font-geist">Branding</span>
<h3 className="text-lg font-medium tracking-tight text-white font-geist">Kroma Identity</h3>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:layers" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y bg-white/[0.01] border-white/5">
<div className="max-w-3xl mx-auto text-center">
<svg aria-hidden="true" className="iconify inline-block mb-6 text-gray-600 iconify--lucide" data-icon="lucide:quote" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<blockquote className="text-2xl md:text-3xl leading-tight tracking-tight mb-8 text-white font-space-grotesk font-semibold">
                "The team transformed our fragmented legacy system into a cohesive, high-performance web platform. The attention to detail in the UI is unmatched."
            </blockquote>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs bg-gray-800 text-white font-geist">JD</div>
<div className="text-left">
<div className="text-sm font-medium text-white font-geist">James Doe</div>
<div className="text-xs text-gray-500 font-geist">CTO at TechFlow</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 relative overflow-hidden bg-black" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 blur-[100px] pointer-events-none bg-white/5"></div>
<div className="max-w-2xl mx-auto text-center mb-20">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 text-white font-space-grotesk font-semibold">Ready to scale?</h2>
<p className="mb-10 text-gray-400 font-geist">Let's discuss how we can engineer your next digital success story.</p>
<form className="space-y-4 text-left max-w-md mx-auto">
<div>
<label className="sr-only font-geist" htmlFor="email">Email</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors bg-gray-900 border-gray-800 text-white" id="email" placeholder="Enter your email" type="email"/>
</div>
<div>
<label className="sr-only font-geist" htmlFor="message">Message</label>
<textarea className="w-full border rounded-lg px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors bg-gray-900 border-gray-800 text-white" id="message" placeholder="Tell us about your project" rows="3"></textarea>
</div>
<button className="w-full font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 font-geist" type="button">
                    Send Inquiry <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
<div className="max-w-7xl mx-auto border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-gray-900">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] bg-white text-black font-geist">DS</div>
<span className="text-xs text-gray-500 font-geist">© 2026 Kaseenchi Labs</span>
</div>
<div className="flex gap-6">
<a className="text-gray-500 transition-colors hover:text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-gray-500 transition-colors hover:text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-gray-500 transition-colors hover:text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-gray-500 transition-colors hover:text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
