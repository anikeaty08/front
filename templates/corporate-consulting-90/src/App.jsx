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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-lg font-semibold tracking-tighter text-slate-900" href="#">
                    C N S L T
                </a>
<div className="hidden md:flex gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Expertise</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">Clients</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#case-studies">Case Studies</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#insights">Insights</a>
</div>
</div>
<div>
<a className="inline-flex items-center justify-center text-sm font-medium transition-colors bg-slate-900 text-white hover:bg-slate-800 h-9 px-4 rounded-md" href="#book">
                    Schedule Session
                </a>
</div>
</div>
</nav>

<header className="pt-24 pb-20 sm:pt-32 sm:pb-28 px-6 text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            Accepting new engagements for Q4
        </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
            Strategic clarity for <br className="hidden sm:block"/>modern enterprises.
        </h1>
<p className="text-base sm:text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            We partner with visionary leaders to navigate complexity, optimize operational frameworks, and drive sustainable growth in highly competitive markets.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center text-sm font-medium transition-colors bg-slate-900 text-white hover:bg-slate-800 h-11 px-6 rounded-md w-full sm:w-auto gap-2" href="#book">
                Book Consultation
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center text-sm font-medium transition-colors bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 h-11 px-6 rounded-md w-full sm:w-auto" href="#case-studies">
                Review Case Studies
            </a>
</div>
</header>

<section className="bg-slate-900 py-24" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 md:flex md:items-end md:justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">Client Perspectives</h2>
<p className="text-base text-slate-400">Hear directly from leaders who have transformed their organizations.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative">
<div className="aspect-video bg-slate-800 rounded-lg overflow-hidden relative cursor-pointer border border-slate-700">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white text-xl ml-1" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="mt-4">
<p className="text-base text-slate-300 italic mb-2">"The framework they implemented increased our operational efficiency by 34% within six months."</p>
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-slate-500">COO, Vertex Tech</p>
</div>
</div>

<div className="group relative">
<div className="aspect-video bg-slate-800 rounded-lg overflow-hidden relative cursor-pointer border border-slate-700">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white text-xl ml-1" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="mt-4">
<p className="text-base text-slate-300 italic mb-2">"Unparalleled clarity. They helped us navigate a complex merger without losing our core culture."</p>
<p className="text-sm font-medium text-white">Marcus Chen</p>
<p className="text-xs text-slate-500">CEO, Nexus Global</p>
</div>
</div>

<div className="group relative hidden lg:block">
<div className="aspect-video bg-slate-800 rounded-lg overflow-hidden relative cursor-pointer border border-slate-700">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white text-xl ml-1" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="mt-4">
<p className="text-base text-slate-300 italic mb-2">"A masterclass in strategic pivot. We avoided a major market downturn thanks to their foresight."</p>
<p className="text-sm font-medium text-white">Elena Rodriguez</p>
<p className="text-xs text-slate-500">Founder, Shift Retail</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="case-studies">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Research &amp; Case Studies</h2>
<p className="text-base text-slate-500 mb-12">Deep dives into our methodologies and the quantifiable results we deliver.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group border border-slate-200 rounded-xl p-6 hover:shadow-sm hover:border-slate-300 transition-all flex flex-col sm:flex-row gap-6 items-start">
<div className="h-16 w-16 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Enterprise Tech</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-xs text-slate-500">PDF, 2.4 MB</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Restructuring Legacy Systems for Scale</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">How we helped a Fortune 500 tech firm transition from monolithic architecture to agile microservices, reducing time-to-market by 40%.</p>
<button className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Download Report
                        </button>
</div>
</div>

<div className="group border border-slate-200 rounded-xl p-6 hover:shadow-sm hover:border-slate-300 transition-all flex flex-col sm:flex-row gap-6 items-start">
<div className="h-16 w-16 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Financial Services</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-xs text-slate-500">PDF, 1.8 MB</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Market Expansion Strategy in APAC</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">A comprehensive analysis of entry barriers and acquisition targets for a mid-tier investment bank expanding into emerging markets.</p>
<button className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Download Report
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="book">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-3">Initiate a Conversation</h2>
<p className="text-base text-slate-500">Select a time to discuss your current challenges and potential synergies.</p>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">

<div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200 md:w-1/3 bg-slate-50/50">
<div className="h-12 w-12 rounded-full bg-slate-200 mb-4 overflow-hidden border border-slate-300">
<img alt="Consultant" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">C N S L T Advisory</p>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Discovery Session</h3>
<div className="space-y-3 mt-6">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 text-lg" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            45 min
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400 text-lg" icon="solar:videocamera-record-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Google Meet or Zoom
                        </div>
</div>
<p className="text-sm text-slate-500 mt-6 pt-6 border-t border-slate-200">
                        An initial assessment to understand your strategic imperatives and determine if our frameworks align with your goals.
                    </p>
</div>

<div className="p-6 md:p-8 md:w-2/3 flex flex-col lg:flex-row gap-8">

<div className="flex-1">
<div className="flex items-center justify-between mb-6">
<h4 className="text-base font-semibold text-slate-900">October 2023</h4>
<div className="flex gap-2">
<button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center mb-2">
<div className="text-xs font-medium text-slate-400 py-1">SU</div>
<div className="text-xs font-medium text-slate-400 py-1">MO</div>
<div className="text-xs font-medium text-slate-400 py-1">TU</div>
<div className="text-xs font-medium text-slate-400 py-1">WE</div>
<div className="text-xs font-medium text-slate-400 py-1">TH</div>
<div className="text-xs font-medium text-slate-400 py-1">FR</div>
<div className="text-xs font-medium text-slate-400 py-1">SA</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center">

<div className="py-2"></div>
<div className="py-2"></div>

<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-300 cursor-not-allowed">1</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-300 cursor-not-allowed">2</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-300 cursor-not-allowed">3</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-300 cursor-not-allowed">4</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-300 cursor-not-allowed">5</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-300 cursor-not-allowed">6</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-700 hover:bg-slate-100 transition-colors">7</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-700 hover:bg-slate-100 transition-colors">8</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-700 hover:bg-slate-100 transition-colors">9</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm font-semibold bg-blue-600 text-white shadow-sm ring-2 ring-blue-600 ring-offset-2 transition-colors">10</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-700 hover:bg-slate-100 transition-colors">11</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-300 cursor-not-allowed">12</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-300 cursor-not-allowed">13</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-700 hover:bg-slate-100 transition-colors">14</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-700 hover:bg-slate-100 transition-colors">15</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-700 hover:bg-slate-100 transition-colors">16</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-700 hover:bg-slate-100 transition-colors">17</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-700 hover:bg-slate-100 transition-colors">18</button></div>
<div className="py-2"><button className="h-8 w-8 rounded-full text-sm text-slate-300 cursor-not-allowed">19</button></div>

</div>
</div>

<div className="w-full lg:w-48 lg:border-l border-slate-200 lg:pl-8 flex flex-col">
<h4 className="text-sm font-medium text-slate-900 mb-4 hidden lg:block">Thursday, Oct 10</h4>
<div className="space-y-2 overflow-y-auto max-h-[280px] pr-2 custom-scrollbar">
<button className="w-full py-2 px-4 rounded-md border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-400 transition-colors text-center">
                                09:00 AM
                            </button>
<button className="w-full py-2 px-4 rounded-md border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-400 transition-colors text-center">
                                09:45 AM
                            </button>
<button className="w-full py-2 px-4 rounded-md border border-blue-600 bg-slate-50 text-sm font-medium text-slate-900 transition-colors text-center relative flex items-center justify-center gap-2">
                                10:30 AM
                            </button>
<button className="w-full py-2 px-4 rounded-md border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-400 transition-colors text-center">
                                11:15 AM
                            </button>
<button className="w-full py-2 px-4 rounded-md border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-400 transition-colors text-center">
                                01:00 PM
                            </button>
<button className="w-full py-2 px-4 rounded-md border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-400 transition-colors text-center">
                                02:30 PM
                            </button>
<button className="w-full py-2 px-4 rounded-md border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-400 transition-colors text-center">
                                04:00 PM
                            </button>
</div>
<button className="mt-4 w-full h-10 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
                            Confirm Time
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="insights">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12 border-b border-slate-200 pb-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Latest Insights</h2>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors flex items-center gap-1" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<article className="group cursor-pointer">
<p className="text-xs font-medium text-slate-500 mb-3">Leadership • Oct 2, 2023</p>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">The Architecture of Resilient Teams in Remote Environments</h3>
<p className="text-sm text-slate-500 line-clamp-3">Examining how top-tier organizations are redefining cultural touchpoints and communication protocols to maintain high output without proximity.</p>
</article>

<article className="group cursor-pointer">
<p className="text-xs font-medium text-slate-500 mb-3">Operations • Sep 18, 2023</p>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">Supply Chain Redundancy: Cost vs. Imperative</h3>
<p className="text-sm text-slate-500 line-clamp-3">A quantitative look at why single-source dependencies are no longer viable, and how to build margin-preserving redundancy models.</p>
</article>

<article className="group cursor-pointer">
<p className="text-xs font-medium text-slate-500 mb-3">Technology • Sep 05, 2023</p>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">Evaluating AI Implementation Debt</h3>
<p className="text-sm text-slate-500 line-clamp-3">Before integrating generative models, enterprises must assess their data readiness to avoid creating technical debt that stifles long-term agility.</p>
</article>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="text-lg font-semibold tracking-tighter text-slate-900 mb-4">C N S L T</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Precision strategy for organizations ready to scale, adapt, and lead in complex environments.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Firm</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Partners</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Expertise</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Digital Transformation</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">M&amp;A Integration</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Operational Scaling</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Executive Advisory</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
                    © 2023 CNSLT Advisory Partners. All rights reserved.
                </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
