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
      

<div className="fixed inset-0 z-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)', backgroundSize: '4rem 4rem', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'}}></div>

<div className="fixed top-0 left-0 right-0 h-px bg-gray-100 z-50 flex justify-between items-center px-6">
<span className="bg-white px-2 text-[10px] font-mono text-gray-300 relative -top-2">portfolio.config.ts</span>
<span className="bg-white px-2 text-[10px] font-mono text-gray-300 relative -top-2">v2.4.0</span>
</div>

<div className="max-w-7xl mx-auto border-x border-gray-100 min-h-screen relative bg-white/50">

<div className="h-20 border-b border-dashed border-gray-100 flex items-center justify-between px-8 relative">
<div className="text-sm font-semibold tracking-tight font-space-grotesk">Mikołaj Abramczuk</div>
<div className="hidden sm:flex items-center gap-6 text-xs font-mono text-gray-400">
<span>PL / EN</span>
<span>--status:online</span>
</div>
</div>

<main className="sm:px-6 z-10 pt-20 pr-4 pb-20 pl-4 relative">

<div className="-translate-x-1/2 text-[10px] uppercase text-gray-300 tracking-widest font-mono absolute top-8 left-1/2">
                Interactive_Mode
            </div>
<div className="max-w-5xl mr-auto ml-auto space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center gap-4 items-start justify-between">

<div className="inline-flex gap-3 overflow-hidden group bg-white border-gray-200 border rounded-full pt-2 pr-4 pb-2 pl-4 relative shadow-sm items-center">
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-gray-50/50 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="flex h-2.5 w-2.5 z-10 relative">
<span className="animate-ping inline-flex bg-emerald-400 opacity-75 w-full h-full rounded-full absolute"></span>
<span className="inline-flex h-2.5 w-2.5 bg-emerald-500 rounded-full relative"></span>
</span>
<span className="z-10 text-sm font-medium text-gray-700 font-geist">Available for Work</span>
</div>

<div className="inline-flex gap-2 overflow-hidden group text-gray-600 bg-white border-gray-200 border rounded-full pt-2 pr-4 pb-2 pl-4 relative shadow-sm items-center">
<div className="absolute inset-0 bg-gray-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="text-gray-400 z-10" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-gray-700 font-geist z-10">Based in Warsaw</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[600px] h-auto rounded-sm relative">

<div className="absolute -top-2 -left-2 w-4 h-4 border-l border-t border-gray-200 hidden md:block"></div>
<div className="absolute -top-2 -right-2 w-4 h-4 border-r border-t border-gray-200 hidden md:block"></div>
<div className="-bottom-2 -left-2 hidden md:block w-4 h-4 border-gray-200 border-b border-l absolute"></div>
<div className="-bottom-2 -right-2 hidden md:block w-4 h-4 border-gray-200 border-r border-b absolute"></div>

<div className="md:col-span-5 overflow-hidden group md:h-full bg-white h-[500px] border-gray-200 border rounded-sm relative shadow-sm">
<div className="bg-gray-100 rounded-sm absolute top-0 right-0 bottom-0 left-0">
<img alt="Mikołaj Abramczuk" className="object-top group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out opacity-95 w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:col-span-7 sm:p-12 flex flex-col md:h-full overflow-hidden bg-white h-auto border-gray-200 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative shadow-sm justify-between">

<div className="-mr-16 -mt-16 pointer-events-none bg-gray-50 opacity-50 w-64 h-64 rounded-full absolute top-0 right-0 blur-3xl"></div>
<div className="z-10 relative">
<h1 className="sm:text-5xl text-4xl font-semibold text-gray-900 tracking-tight font-space-grotesk mb-8">
                                Mikołaj Abramczuk
                            </h1>
<div className="space-y-6">
<p className="leading-relaxed text-lg font-normal text-gray-500 font-geist">
                                    Seasoned Full Stack Developer and Product Strategist based in Warsaw. With a solid background in leveraging advanced frameworks like React and Node.js, I specialize in architecting scalable digital solutions and optimizing user experiences.
                                </p>
<p className="leading-relaxed text-lg font-normal text-gray-500 font-geist">
                                    My forte lies in translating complex business requirements into elegant, high-performance interfaces, combined with a transparent communication style to keep stakeholders aligned at every stage of the product lifecycle.
                                </p>
</div>
</div>

<div className="z-10 flex pt-12 relative items-end justify-between">

<a className="group flex items-center justify-center hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-gray-400 w-14 h-14 border-gray-200 border rounded-2xl relative" href="#">
<span className="-top-1 -right-1 group-hover:opacity-100 transition-opacity bg-blue-500 opacity-0 w-2 h-2 rounded-full absolute"></span>
<svg className="w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="solar" data-solar="widget-linear" height="28" strokeWidth="2" style={{width: '28px', height: '28px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414Zm-11 0c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Zm11-11c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</a>

<div className="flex gap-5 hover:grayscale-0 transition-all duration-500 opacity-60 grayscale items-center">
<a className="hover:opacity-80 transition-opacity" href="#" title="GitHub">
<iconify-icon className="" icon="simple-icons:github" width="24"></iconify-icon>
</a>
<a className="hover:opacity-80 transition-opacity" href="#" title="LinkedIn">
<iconify-icon icon="simple-icons:linkedin" width="24"></iconify-icon>
</a>
<a className="hover:opacity-80 transition-opacity" href="#" title="Vercel">
<iconify-icon className="" icon="simple-icons:vercel" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="border-dashed flex w-full border-gray-200 border-t relative items-center justify-center">
<div className="flex bg-white/40 w-16 border-gray-100 border-r absolute top-0 bottom-0 left-0 backdrop-blur-sm items-center justify-center">
</div>
<div className="-top-3 text-[10px] text-gray-400 font-mono bg-white pr-2 pl-2 absolute right-8">
                services.json
            </div>
</div>
<section className="sm:px-6 bg-white pr-4 pb-20 pl-4 relative">

<div className="absolute left-16 top-0 bottom-0 border-r border-dashed border-gray-100 hidden md:block"></div>
<div className="max-w-5xl mr-auto ml-auto pt-20">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pl-0 md:pl-10">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 font-space-grotesk flex items-center gap-3">
                            Expertise &amp; Services
                            <span className="w-12 h-px bg-gray-300 inline-block"></span>
</h2>
<p className="mt-4 text-lg text-gray-500 font-geist leading-relaxed">
                            Comprehensive digital solutions tailored to your business needs, from initial strategy to final deployment.
                        </p>
</div>
<div className="hidden md:block pb-2">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors font-geist group border border-gray-200 rounded-md px-4 py-2 hover:bg-gray-50" href="#">
                            View full capabilities
                            <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="group relative flex flex-col bg-white border border-gray-200 p-8 rounded-sm shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
<div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-8 right-8 text-xs font-mono font-medium text-gray-300 group-hover:text-gray-400 transition-colors">01</div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 text-gray-900 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 font-space-grotesk tracking-tight mb-3">Product Strategy</h3>
<p className="text-gray-500 font-geist leading-relaxed">
                            Translating ambiguous business goals into clear, actionable technical roadmaps. I help define MVPs that deliver maximum value with minimal friction.
                        </p>
</div>

<div className="group relative flex flex-col bg-white border border-gray-200 p-8 rounded-sm shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
<div className="absolute top-8 right-8 text-xs font-mono font-medium text-gray-300 group-hover:text-gray-400 transition-colors">02</div>

<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(249,250,251,0.5))] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"></div>
<div className="relative z-10">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-900 text-white border border-gray-800 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 font-space-grotesk tracking-tight mb-3">Full Stack Engineering</h3>
<p className="text-gray-500 font-geist leading-relaxed">
                                Building robust, scalable applications using React, Node.js, and TypeScript. Focus on performance, clean architecture, and long-term maintainability.
                            </p>
</div>
</div>

<div className="group relative flex flex-col bg-white border border-gray-200 p-8 rounded-sm shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
<div className="absolute top-8 right-8 text-xs font-mono font-medium text-gray-300 group-hover:text-gray-400 transition-colors">03</div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 text-gray-900 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 font-space-grotesk tracking-tight mb-3">UI/UX refinement</h3>
<p className="text-gray-500 font-geist leading-relaxed">
                            Polishing existing interfaces to world-class standards. I optimize user journeys, micro-interactions, and accessibility to boost conversion rates.
                        </p>
</div>
</div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent absolute right-0 bottom-0 left-0"></div>
</section>

<div className="border-t border-dashed border-gray-100 py-4 px-8 flex justify-between items-center bg-gray-50/50">
<div className="text-[10px] font-mono text-gray-400">
                system.ready
            </div>
<div className="text-[10px] font-mono text-gray-400">
                latency: 12ms
            </div>
</div>
</div>

    </>
  );
}
