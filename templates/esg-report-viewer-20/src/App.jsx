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
colors: {
esg: {
dark: '#163300',
light: '#E2F6D5',
accent: '#77C744',
gray: '#F5F5F5',
}
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
backgroundImage: {
'card-gradient': 'linear-gradient(180deg, #E2F6D5 0%, #FFFFFF 100%)',
}
}
}
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
      

<nav className="z-50 pointer-events-none w-full fixed top-0 left-0" id="global-nav">

<a className="pointer-events-auto z-10 hover:opacity-80 transition-opacity absolute top-8 left-8" href="#">
<div className="block group">
<img alt="TDB Logo" className="group-hover:opacity-80 transition-opacity w-auto h-12 object-contain z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/101e00f6-a6c0-44c6-aad1-49e6c01fa8a8_320w.png"/>
</div>
</a>

<div className="fixed pointer-events-auto z-50 transition-transform duration-500 ease-in-out top-6 right-6 gap-x-6 gap-y-6" id="smart-nav-root">
<div className="flex gap-3 relative gap-x-6 gap-y-6 items-center">

<div className="js-nav-item hidden md:flex gap-6 transition-all duration-300 hover:bg-black/50 hover:border-white/20 bg-black/40 h-12 border border-white/10 rounded-full pr-6 pl-6 backdrop-blur-xl gap-x-6 gap-y-6 items-center shadow-2xl">
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="hover:text-blue-400 transition-colors text-base font-medium text-white/90 font-google-sans-flex" href="#">Home</a>
<a className="hover:text-blue-400 transition-colors text-base font-medium text-white/90 font-google-sans-flex" href="#">Who We Are</a>
<a className="text-blue-400 cursor-default text-base font-medium font-google-sans-flex" href="#">Reports</a>
</div>
<div className="w-px h-4 bg-white/20"></div>
<button className="hover:text-blue-400 transition-colors text-base font-medium text-white font-google-sans-flex gap-x-6 gap-y-6">EN</button>
</div>

<button className="z-50 js-nav-item flex hover:bg-black/50 hover:border-white/20 transition-all duration-300 active:scale-95 text-white bg-black/40 border-white/10 w-12 h-12 border rounded-full relative backdrop-blur-xl items-center justify-center shadow-2xl" id="nav-trigger-btn">
<iconify-icon className="" icon="solar:hamburger-menu-linear" id="nav-icon" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="bg-esg-dark min-h-screen relative z-10">

<section className="md:px-12 max-w-[1800px] mr-auto ml-auto pt-32 pr-6 pb-10 pl-6">
<div className="flex flex-col lg:flex-row gap-8 mb-8 gap-x-8 gap-y-8 items-end justify-between">
<div className="space-y-4">

<div className="flex gap-2 text-esg-light/50 text-sm font-medium tracking-wide font-google-sans-flex gap-x-2 gap-y-2 items-center">
<a className="hover:text-white transition-colors" href="#">Documents</a>
<iconify-icon height="12" icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="#">Sustainability</a>
<iconify-icon height="12" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-esg-accent">2023 Report</span>
</div>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight font-google-sans-flex">
      Sustainability Impact Report 2023
    </h1>

<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
<p className="text-lg text-esg-light/70 font-normal max-w-2xl leading-relaxed">
        Comprehensive analysis of our environmental impact, governance milestones, and future carbon reduction goals.
      </p>
<div className="hidden md:block w-px h-8 bg-white/10"></div>
<div className="flex items-center gap-4 text-sm font-medium text-esg-light/60">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Published Oct 2023</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:file-check-linear"></iconify-icon> PDF 12.4 MB</span>
</div>
</div>
</div>

<button className="flex-shrink-0 bg-white text-esg-dark hover:bg-esg-light transition-colors h-12 px-6 rounded-full font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 duration-200">
<iconify-icon icon="solar:download-minimalistic-linear" strokeWidth="2" width="20"></iconify-icon>
<span>Download PDF</span>
</button>
</div>
</section>

<section className="px-4 md:px-12 pb-24 max-w-[1800px] mx-auto">
<div className="bg-[#1C1C1E] border border-white/10 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[85vh] relative group">

<div className="h-16 bg-[#252525] border-b border-white/5 flex items-center justify-between px-4 md:px-6 flex-shrink-0 z-20">

<div className="flex items-center gap-4">
<button className="text-white/70 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors" title="Toggle Sidebar">
<iconify-icon icon="solar:sidebar-minimalistic-linear" width="20"></iconify-icon>
</button>
<div className="h-6 w-px bg-white/10 hidden md:block"></div>
<span className="text-sm font-medium text-white/90 hidden md:block">TDB_Sustainability_Report_2023_Final.pdf</span>
</div>

<div className="flex items-center gap-2 bg-black/20 rounded-lg p-1">
<button className="text-white/70 hover:text-white p-1.5 hover:bg-white/10 rounded-md transition-colors" title="Previous Page">
<iconify-icon icon="solar:arrow-up-linear" width="18"></iconify-icon>
</button>
<div className="px-2 text-xs font-mono text-white/90 select-none">
<span className="bg-white/10 px-1.5 py-0.5 rounded">1</span> / 48
                        </div>
<button className="text-white/70 hover:text-white p-1.5 hover:bg-white/10 rounded-md transition-colors" title="Next Page">
<iconify-icon icon="solar:arrow-down-linear" width="18"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="flex items-center gap-1 text-white/70">
<button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
<iconify-icon icon="solar:magnifier-minus-linear" width="18"></iconify-icon>
</button>
<span className="text-xs font-medium w-12 text-center">100%</span>
<button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
<iconify-icon icon="solar:magnifier-plus-linear" width="18"></iconify-icon>
</button>
</div>
<div className="h-6 w-px bg-white/10 hidden md:block"></div>
<button className="text-white/70 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors" title="Print">
<iconify-icon icon="solar:printer-linear" width="20"></iconify-icon>
</button>
<button className="text-white/70 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors" title="Fullscreen">
<iconify-icon icon="solar:maximize-square-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 flex bg-[#525659] relative overflow-hidden">

<div className="hidden lg:block w-72 bg-[#1C1C1E] border-r border-white/5 overflow-y-auto flex-shrink-0">
<div className="p-4">
<h3 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-4 px-2">Table of Contents</h3>
<ul className="space-y-1">
<li className="">
<button className="w-full text-left px-3 py-2 text-sm text-esg-accent bg-white/5 rounded-lg font-medium transition-colors">
                                        1. Executive Summary
                                    </button>
</li>
<li className="">
<button className="w-full text-left px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
                                        2. Governance &amp; Strategy
                                    </button>
</li>
<li className="">
<button className="w-full text-left px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
                                        3. Climate Action
                                    </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
                                        4. Social Responsibility
                                    </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
                                        5. Financial Indicators
                                    </button>
</li>
<li>
<button className="w-full text-left px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
                                        6. Appendix
                                    </button>
</li>
</ul>
</div>
</div>

<div className="flex-1 bg-[#2C2C2E] overflow-y-auto flex justify-center p-6 md:p-10 relative">

<div className="w-full max-w-[800px] aspect-[1/1.414] bg-white shadow-2xl rounded-sm relative group/page transition-transform duration-500 ease-out origin-top">

<div className="absolute inset-0 p-12 md:p-16 flex flex-col text-black">
<div className="flex justify-between items-start mb-12">
<div className="w-8 h-8 rounded-full border-2 border-black"></div>
<div className="text-[10px] font-mono tracking-widest uppercase">2024 Report</div>
</div>
<h2 className="text-4xl font-bold tracking-tight mb-6 leading-tight max-w-lg">Accelerating our
        transition to a net-zero future.</h2>
<p className="text-sm leading-relaxed text-gray-600 max-w-md mb-8">
        In 2023, we reduced our Scope 1 and 2 emissions by 14% compared to our 2020 baseline,
        putting us firmly on track to meet our 2030 targets.
      </p>

<div className="mt-auto h-48 w-full bg-gray-50 border border-gray-100 rounded flex items-end justify-between p-4 gap-2">
<div className="w-full bg-esg-accent h-[40%] rounded-t-sm opacity-50"></div>
<div className="w-full bg-esg-accent h-[55%] rounded-t-sm opacity-70"></div>
<div className="w-full bg-esg-accent h-[65%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-[#163300] h-[85%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:rounded-t-[4rem] overflow-hidden bg-white rounded-t-[3rem] pt-20 pb-20 relative">
<div className="px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight font-google-sans-flex">
                        Suggested Reports
                    </h2>
<a className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors" href="#">
                        View All Archive
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="group relative bg-slate-50 border border-slate-200 rounded-[32px] p-6 hover:bg-white hover:border-esg-dark/20 hover:shadow-xl hover:shadow-esg-dark/5 transition-all duration-300 cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-esg-dark group-hover:bg-esg-light group-hover:text-esg-dark transition-colors">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wide">2022</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-esg-dark transition-colors">Annual Report 2022
    </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">Detailed financial overview and strategic
      outcomes for the fiscal year 2022.</p>
<div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 group-hover:border-esg-light/50">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider group-hover:text-esg-dark/70">8.2 MB • PDF</span>
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-esg-dark group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-slate-50 border border-slate-200 rounded-[32px] p-6 hover:bg-white hover:border-esg-dark/20 hover:shadow-xl hover:shadow-esg-dark/5 transition-all duration-300 cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-esg-dark group-hover:bg-esg-light group-hover:text-esg-dark transition-colors">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-[#E2F6D5] text-xs font-bold text-[#163300] uppercase tracking-wide">Green</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-esg-dark transition-colors">Green Bond Framework
    </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">Methodology and impact assessment criteria for
      our sustainable bond issuances.</p>
<div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 group-hover:border-esg-light/50">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider group-hover:text-esg-dark/70">2.1 MB • PDF</span>
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-esg-dark group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-slate-50 border border-slate-200 rounded-[32px] p-6 hover:bg-white hover:border-esg-dark/20 hover:shadow-xl hover:shadow-esg-dark/5 transition-all duration-300 cursor-pointer flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-esg-dark group-hover:bg-esg-light group-hover:text-esg-dark transition-colors">
<iconify-icon className="" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wide">Policy</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-esg-dark transition-colors">Gender Equality Policy
    </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">Our commitment to fostering an inclusive
      workplace and diverse leadership structure.</p>
<div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 group-hover:border-esg-light/50">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider group-hover:text-esg-dark/70">1.4 MB • PDF</span>
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-esg-dark group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6 text-slate-400 text-center text-sm">
<p>© 2024 ESG Initiative. All rights reserved.</p>
</footer>
</main>
<div className="host-lopnbnfpjmgpbppclhclehhgafnifija" style={{position: 'relative', zIndex: '2147483647'}}></div><div className="host-lopnbnfpjmgpbppclhclehhgafnifija" style={{position: 'relative', zIndex: '2147483647'}}></div><div className="host-lopnbnfpjmgpbppclhclehhgafnifija" style={{position: 'relative', zIndex: '2147483647'}}></div>
    </>
  );
}
