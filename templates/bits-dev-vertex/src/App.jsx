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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<nav className="fixed z-50 w-full border-b top-0 backdrop-blur-md bg-white/80 border-slate-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-2xl font-semibold tracking-tighter uppercase text-slate-900" href="#">
                        Vertex<span className="text-yellow-500">.</span>
</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#about">About</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#why-vertex">Why Vertex</a>

<div className="relative group h-16 flex items-center">
<button className="flex items-center text-sm font-medium group-hover:text-slate-900 transition-colors focus:outline-none text-slate-600">
                            Services
                            <svg aria-hidden="true" className="iconify ml-1 group-hover:text-slate-900 transition-colors iconify--lucide text-slate-400" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 border shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top pt-2 overflow-hidden bg-white border-slate-200">
<a className="block px-4 py-3 text-sm border-b flex items-center gap-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-slate-50" href="#">
<svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-icon="lucide:hard-hat" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></g></svg> Construction
                            </a>
<a className="block px-4 py-3 text-sm border-b flex items-center gap-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-slate-50" href="#">
<svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-icon="lucide:hammer" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg> Demolition
                            </a>
<a className="block px-4 py-3 text-sm flex items-center gap-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900" href="#">
<svg aria-hidden="true" className="iconify text-yellow-500 iconify--lucide" data-icon="lucide:truck" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg> Land Hauling
                            </a>
</div>
</div>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900" href="#contact">Contact</a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-sm text-slate-900 bg-yellow-400" href="#quote">
                        Quote Request
                    </a>

<button className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-white bg-[url(https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=3840&amp;q=80)] bg-cover bg-center pt-32 pb-20 relative">

<div className="absolute inset-0 w-full h-full pointer-events-none">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover object-[75%_center] opacity-90" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/1592398/1592398-hd_1920_1080_30fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-r to-transparent from-white via-white/95"></div>

<div className="absolute inset-0 bg-white/10"></div>
</div>

<div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none mix-blend-multiply"></div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none mix-blend-overlay bg-yellow-200/20">
</div>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center space-x-2 backdrop-blur-sm border rounded-full px-3 py-1 mb-8 shadow-sm bg-slate-50/80 border-slate-200/60">
<span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase text-slate-600">Serving All of Louisiana</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 drop-shadow-sm text-slate-900">
                Building the future, <br/>
<span className="text-slate-400">demolishing the past.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl font-light">
                Vertex delivers precision engineering support for large-scale commercial, industrial, and government
                projects. We handle the heavy lifting so you can focus on the blueprint.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm font-medium rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-lg hover:bg-slate-800 text-white bg-slate-900" href="/#services">Explore
                    Capabilities</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg backdrop-blur-sm border transition-all shadow-sm text-slate-700 bg-white/80 border-slate-200 hover:bg-slate-50 hover:border-slate-300" href="#contact">
                    View Coverage Map
                </a>
</div>
</div>
</div>

<div className="mt-20 border-y backdrop-blur-md relative z-10 border-slate-100 bg-white/60">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">15+</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">500+</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Projects Completed
                    </div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight text-slate-900">100%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Safety Record</div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight text-slate-900">LA</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Statewide Service</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-slate-900">Core Capabilities</h2>
<p className="mt-4 text-lg text-slate-500 max-w-2xl">Comprehensive infrastructure solutions tailored for project managers demanding precision and reliability.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-xl border p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white border-slate-200">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="iconify w-24 h-24 iconify--lucide text-slate-900" data-icon="lucide:hard-hat" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></g></svg>
</div>
<div className="h-12 w-12 rounded-lg flex items-center justify-center mb-6 bg-yellow-100 text-yellow-600">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:wrench" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900">Construction Support</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Site preparation, foundation digging, and logistical support for industrial builds. We ensure your site is ready for vertical construction on schedule.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-sm text-slate-600">
<svg aria-hidden="true" className="iconify mr-2 text-yellow-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Site Preparation
                        </li>
<li className="flex items-center text-sm text-slate-600">
<svg aria-hidden="true" className="iconify mr-2 text-yellow-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Trenching &amp; Excavation
                        </li>
<li className="flex items-center text-sm text-slate-600">
<svg aria-hidden="true" className="iconify mr-2 text-yellow-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Utility Installation
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-medium transition-colors text-slate-900 hover:text-yellow-600" href="#">
                        Learn more <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group relative rounded-xl border p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white border-slate-200">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="iconify w-24 h-24 iconify--lucide text-slate-900" data-icon="lucide:hammer" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<div className="h-12 w-12 rounded-lg flex items-center justify-center mb-6 bg-slate-100 text-slate-600">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:trash-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900">Precision Demolition</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Safe, controlled teardowns for commercial and industrial structures. We prioritize material recycling and hazardous material containment.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-sm text-slate-600">
<svg aria-hidden="true" className="iconify mr-2 text-yellow-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Structural Demolition
                        </li>
<li className="flex items-center text-sm text-slate-600">
<svg aria-hidden="true" className="iconify mr-2 text-yellow-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Interior Gut-outs
                        </li>
<li className="flex items-center text-sm text-slate-600">
<svg aria-hidden="true" className="iconify mr-2 text-yellow-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Debris Removal
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-medium transition-colors text-slate-900 hover:text-yellow-600" href="#">
                        Learn more <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group relative rounded-xl border p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white border-slate-200">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="iconify w-24 h-24 iconify--lucide text-slate-900" data-icon="lucide:mountain" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m8 3l4 8l5-5l5 15H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-12 w-12 rounded-lg flex items-center justify-center mb-6 bg-slate-100 text-slate-600">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:truck" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900">Land &amp; Material Hauling</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Large-scale material transport. Whether it's removing earth or delivering aggregate, our fleet is equipped for heavy loads.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-sm text-slate-600">
<svg aria-hidden="true" className="iconify mr-2 text-yellow-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Aggregate Delivery
                        </li>
<li className="flex items-center text-sm text-slate-600">
<svg aria-hidden="true" className="iconify mr-2 text-yellow-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Dirt &amp; Concrete Removal
                        </li>
<li className="flex items-center text-sm text-slate-600">
<svg aria-hidden="true" className="iconify mr-2 text-yellow-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Heavy Equipment Transport
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-medium transition-colors text-slate-900 hover:text-yellow-600" href="#">
                        Learn more <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-900" id="why-vertex">
<div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="md:flex md:justify-between md:items-end mb-16">
<div className="max-w-xl">
<h2 className="font-medium tracking-wider uppercase text-sm mb-3 text-yellow-400">The Vertex Standard</h2>
<h3 className="text-3xl font-semibold tracking-tight sm:text-4xl text-white">Engineered for Efficiency</h3>
<p className="mt-4 text-lg text-slate-400">We understand that time is the most expensive commodity in construction. Our workflows are designed to keep your project moving forward.</p>
</div>
<div className="mt-6 md:mt-0">
<a className="border-b border-yellow-500 pb-1 transition-colors inline-flex items-center gap-2 text-white hover:text-yellow-400" href="#about">
                        Read about our history <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 border rounded-lg backdrop-blur-sm border-slate-700/50 bg-slate-800/30">
<svg aria-hidden="true" className="iconify w-8 h-8 mb-4 iconify--lucide text-yellow-400" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h4 className="font-medium mb-2 text-white">Safety First</h4>
<p className="text-sm text-slate-400">Strict adherence to OSHA regulations and proactive hazard management.</p>
</div>

<div className="p-6 border rounded-lg backdrop-blur-sm border-slate-700/50 bg-slate-800/30">
<svg aria-hidden="true" className="iconify w-8 h-8 mb-4 iconify--lucide text-yellow-400" data-icon="lucide:clock-4" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<h4 className="font-medium mb-2 text-white">On-Time Delivery</h4>
<p className="text-sm text-slate-400">Logistics optimized to prevent downtime and meet critical milestones.</p>
</div>

<div className="p-6 border rounded-lg backdrop-blur-sm border-slate-700/50 bg-slate-800/30">
<svg aria-hidden="true" className="iconify w-8 h-8 mb-4 iconify--lucide text-yellow-400" data-icon="lucide:award" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
<h4 className="font-medium mb-2 text-white">Licensed &amp; Insured</h4>
<p className="text-sm text-slate-400">Fully certified for state and federal government contracting in Louisiana.</p>
</div>

<div className="p-6 border rounded-lg backdrop-blur-sm border-slate-700/50 bg-slate-800/30">
<svg aria-hidden="true" className="iconify w-8 h-8 mb-4 iconify--lucide text-yellow-400" data-icon="lucide:monitor-smartphone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8m-2 4v-3.96v3.15M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></g></svg>
<h4 className="font-medium mb-2 text-white">Modern Fleet</h4>
<p className="text-sm text-slate-400">State-of-the-art Caterpillar machinery maintained for peak performance.</p>
</div>
</div>
</div>
</section>

<section className="border-b pt-24 pb-24 bg-white border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900">Local Roots, Statewide Reach</h2>
<p className="text-lg text-slate-500 mb-8">
                        Headquartered in the heart of Louisiana, Vertex is strategically positioned to deploy equipment and teams rapidly across the state.
                    </p>
<div className="space-y-6">
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
</div>
<div className="ml-4">
<h4 className="text-sm font-medium text-slate-900">Operations Hub</h4>
<p className="text-sm text-slate-500 mt-1">Baton Rouge, Louisiana</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="ml-4">
<h4 className="text-sm font-medium text-slate-900">Direct Line</h4>
<p className="text-sm text-slate-500 mt-1">+1 (555) 123-4567</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
</div>
<div className="ml-4">
<h4 className="text-sm font-medium text-slate-900">Projects / RFPs</h4>
<p className="text-sm text-slate-500 mt-1">bids@vertex-la.com</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-sm font-medium underline underline-offset-4 transition-all text-slate-900 decoration-slate-300 hover:decoration-yellow-400" href="#about">
                            View our complete service area map
                        </a>
</div>
</div>

<div className="relative rounded-2xl p-4 border aspect-video flex items-center justify-center overflow-hidden bg-slate-50 border-slate-200">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNjYmQ1ZTEiLz48L3N2Zz4=')] opacity-50"></div>

<div className="w-3/4 h-3/4 relative">

<div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-slate-300"></div>
<div className="absolute top-1/4 left-1/2 h-1/2 w-px bg-slate-300"></div>
<div className="absolute top-1/3 left-1/3 w-24 h-px rotate-45 bg-slate-300"></div>

<div className="absolute top-1/2 left-1/2 -ml-2 -mt-2">
<span className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-yellow-400"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500 border-2 border-white"></span>
</span>
</div>
<div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full border-2 bg-slate-300 border-white"></div>
<div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full border-2 bg-slate-300 border-white"></div>
<div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full border-2 bg-slate-300 border-white"></div>
<div className="absolute bottom-4 left-4 backdrop-blur px-3 py-1 rounded shadow-sm border text-xs font-semibold bg-white/90 border-slate-100 text-slate-700">
                            Louisiana Coverage
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-slate-50 border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter uppercase text-slate-900" href="#">
                        Vertex<span className="text-yellow-500">.</span>
</a>
<p className="mt-4 text-sm text-slate-500 max-w-xs">
                        Premier construction, demolition, and land services for Louisiana's industrial sector. 
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-slate-900">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm transition-colors text-slate-600 hover:text-slate-900" href="#about">About Us</a></li>
<li><a className="text-sm transition-colors text-slate-600 hover:text-slate-900" href="#why-vertex">Why Vertex</a></li>
<li><a className="text-sm transition-colors text-slate-600 hover:text-slate-900" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-slate-900">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm transition-colors text-slate-600 hover:text-slate-900" href="#">Construction</a></li>
<li><a className="text-sm transition-colors text-slate-600 hover:text-slate-900" href="#">Demolition</a></li>
<li><a className="text-sm transition-colors text-slate-600 hover:text-slate-900" href="#">Land Hauling</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-slate-900">Contact</h4>
<ul className="space-y-3">
<li className=""><a className="transition-colors text-sm hover:text-slate-900 text-slate-600" href="#quote">Request Quote</a></li>
<li><a className="text-sm transition-colors text-slate-600 hover:text-slate-900" href="#contact">Contact Support</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-xs text-slate-400">© 2023 Vertex Services LLC. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-slate-400 hover:text-slate-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-slate-400 hover:text-slate-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
