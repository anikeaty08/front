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
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center text-xs font-medium tracking-tighter rounded-sm group-hover:bg-zinc-800 transition-colors">
                    RB
                </div>
<span className="text-sm font-medium tracking-tight text-zinc-900 uppercase">Roland Berger</span>
</a>

<nav className="hidden md:flex items-center gap-10 text-xs font-medium text-zinc-500 uppercase tracking-wide">
<a className="hover:text-zinc-900 transition-colors duration-300" href="#">Firm</a>
<a className="hover:text-zinc-900 transition-colors duration-300" href="#">Insights</a>
<a className="hover:text-zinc-900 transition-colors duration-300" href="#">Expertise</a>
<a className="hover:text-zinc-900 transition-colors duration-300" href="#">Careers</a>
</nav>

<div className="flex items-center gap-6">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle className="" cx="11" cy="11" r="8"></circle></g></svg>
</button>
<div className="w-px h-4 bg-zinc-200 hidden md:block"></div>
<a className="hidden md:flex text-xs font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                    Global (EN)
                </a>
<button className="md:hidden text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="22" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<main className="flex-grow md:px-12 pt-32 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">

<nav className="flex items-center gap-3 text-[10px] text-zinc-400 font-medium uppercase tracking-widest mb-16">
<a className="hover:text-zinc-900 transition-colors" href="#">Home</a>
<span className="text-zinc-300">/</span>
<a className="hover:text-zinc-900 transition-colors" href="#">Leadership</a>
<span className="text-zinc-300">/</span>
<span className="text-zinc-900">Stefan Schaible</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-7 space-y-12">

<div className="space-y-6">
<span className="inline-block text-xs font-semibold text-zinc-500 uppercase tracking-widest border-b border-zinc-200 pb-1">
                            Global Managing Partner
                        </span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-zinc-900 leading-[1.1]">
                            Stefan<br/>Schaible
                        </h1>

<div className="flex gap-4 pt-2">
<a className="group flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify group-hover:-translate-y-0.5 transition-transform duration-300 iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
<span className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-300">LinkedIn</span>
</a>
<a className="group flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify group-hover:-translate-y-0.5 transition-transform duration-300 iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<span className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-300">Email</span>
</a>
<a className="group flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify group-hover:-translate-y-0.5 transition-transform duration-300 iconify--lucide" data-icon="lucide:arrow-down-to-line" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 17V3m-6 8l6 6l6-6m1 10H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-300">VCard</span>
</a>
</div>
</div>

<div className="relative py-8">
<p className="text-2xl md:text-3xl font-light leading-tight text-zinc-800 tracking-tight">
                            "My goal is to support our clients in mastering the great challenges of our time – such as digitalization and climate change."
                        </p>
</div>

<div className="prose prose-zinc prose-lg text-zinc-500 leading-8 font-light max-w-none">
<p className="">
                            Stefan Schaible is the <strong className="font-medium text-zinc-900">Global Managing Partner</strong> of Roland Berger. He holds responsibility for the strategic development and global management of the consultancy, bringing over two decades of experience in high-level management consulting.
                        </p>
<p className="">
                            His work focuses on supporting clients through major transformation projects, with deep expertise in the public sector, financial services, and infrastructure industries. As a strategic advisor, he navigates the complexities of modern governance and corporate evolution.
                        </p>
<p className="">
                            Schaible is a recognized authority on macro-trends including digitalization, climate transition, and the shifting geopolitical landscape. He regularly publishes thought leadership on these critical topics and speaks at international economic forums.
                        </p>
<p className="">
                            He joined Roland Berger in 1997. He studied Chemistry and Law at the University of Konstanz and holds a degree in Public Administration.
                        </p>
</div>

<div className="border-zinc-100 border-t pt-12">
<h3 className="text-sm font-medium text-zinc-900 uppercase tracking-widest mb-8">Selected Insights</h3>
<div className="space-y-6">

<a className="group flex flex-col md:flex-row gap-6 items-start justify-between p-6 -mx-6 hover:bg-zinc-50 rounded-lg transition-colors duration-300" href="#">
<div className="space-y-2 max-w-lg">
<div className="flex items-center gap-2 mb-1">
<span className="w-1.5 h-1.5 bg-zinc-900 rounded-full"></span>
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Trend Analysis</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors tracking-tight">The Future of European Competitiveness</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Analyzing strategic imperatives for Europe in a shifting global landscape.</p>
</div>
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>

<a className="group flex flex-col md:flex-row gap-6 items-start justify-between p-6 -mx-6 hover:bg-zinc-50 rounded-lg transition-colors duration-300" href="#">
<div className="space-y-2 max-w-lg">
<div className="flex items-center gap-2 mb-1">
<span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span>
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Study</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors tracking-tight">Sustainability in Financial Services</h4>
<p className="text-sm text-zinc-400 leading-relaxed">How ESG criteria are reshaping investment portfolios and risk management.</p>
</div>
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
</div>
</div>
</div>

<aside className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 h-fit">

<div className="relative group">
<div className="aspect-[4/5] overflow-hidden rounded-sm bg-zinc-100">

<img alt="Stefan Schaible" className="object-cover w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-[1.02] transition-all duration-700 ease-in-out" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stefan_Schaible_2018.jpg"/>
</div>
<div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<p className="text-xs font-medium tracking-wider uppercase drop-shadow-md">Munich Based</p>
</div>
</div>

<div className="grid grid-cols-1 gap-8">

<div className="space-y-4">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                Core Competencies
                            </h3>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:border-zinc-400 transition-colors cursor-default tracking-wide">
                                    Strategy &amp; Organization
                                </span>
<span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:border-zinc-400 transition-colors cursor-default tracking-wide">
                                    Public Sector
                                </span>
<span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:border-zinc-400 transition-colors cursor-default tracking-wide">
                                    Finance
                                </span>
<span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:border-zinc-400 transition-colors cursor-default tracking-wide">
                                    Transformation
                                </span>
</div>
</div>

<div className="overflow-hidden text-white bg-zinc-900 rounded-sm pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 p-8 opacity-10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Get in touch</h3>
<p className="text-sm text-zinc-400 mb-8 font-light leading-relaxed max-w-[240px]">
                                Discuss strategic transformation or global trends directly with the office.
                            </p>
<a className="group inline-flex items-center justify-between hover:border-zinc-500 hover:bg-zinc-800 transition-all text-sm font-medium text-white bg-zinc-800/50 w-full border-zinc-700 border pt-3 pr-4 pb-3 pl-4" href="#">
<span className="">Schedule Call</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a><a className="group inline-flex items-center justify-between hover:border-zinc-500 hover:bg-zinc-800 transition-all text-sm font-medium text-white bg-zinc-800/50 w-full border-zinc-700 border my-3 pt-3 pr-4 pb-3 pl-4" href="/#">
<span className="">Write Message</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<div className="mt-6 pt-6 border-t border-zinc-800 flex justify-between items-end text-[10px] text-zinc-500 uppercase tracking-wider">
<div className="">
<div className="text-zinc-300 mb-1">Munich HQ</div>
<div className="">Sederanger 1</div>
</div>
<div>+49 89 9230-0</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</main>

<footer className="bg-white border-t border-zinc-100 py-16 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
<div className="col-span-1 md:col-span-1 space-y-6">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center text-[10px] font-bold rounded-sm">RB</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">Roland Berger</span>
</a>
<p className="text-xs text-zinc-400 leading-relaxed font-light">
                        The only strategy consultancy of European origin with a strong international presence.
                    </p>
</div>
<div className="space-y-6">
<h4 className="text-[10px] font-semibold text-zinc-900 uppercase tracking-widest">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-[10px] font-semibold text-zinc-900 uppercase tracking-widest">Connect</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Instagram</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-[10px] font-semibold text-zinc-900 uppercase tracking-widest">Legal</h4>
<div className="flex flex-col gap-3 text-sm text-zinc-500 font-light">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Use</a>
<span className="text-zinc-300 mt-2 text-xs">© 2024 Roland Berger</span>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
