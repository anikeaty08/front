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
paper: '#F6F1E7',
ink: '#1B1B1B',
sienna: '#B64A2B',
slate: '#2F3A56',
border: 'rgba(27, 27, 27, 0.08)'
},
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
spacing: {
'1200': '1200px',
'col-4': '384px',
'col-5': '486px',
'col-6': '588px',
'col-7': '690px',
'col-8': '792px',
},
backgroundImage: {
'paper-grain': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRjZGMUU3Ii8+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMxQjFCMUIiIG9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')",
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
      

<nav className="w-full h-[88px] flex items-center justify-center sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-border">
<div className="w-full max-w-[1200px] px-6 lg:px-0 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-7 h-7 rounded-full border border-ink flex items-center justify-center bg-transparent group-hover:bg-ink group-hover:text-paper transition-colors duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
<div className="flex flex-col leading-none">
<span className="uppercase caps-tracking cursor-pointer text-sm font-semibold font-serif" onclick="window.location.href='/home'" role="button">Clarity Atlas</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-sienna transition-colors" href="/page2-start-here">Start Here</a>
<a className="hover:text-sienna transition-colors" href="/page3-library">Library</a>
<a className="hover:text-sienna transition-colors" href="/page4-product">Products</a>
<a className="hover:text-sienna transition-colors" href="/page5-work-with-me">Work With Me</a>
<a className="hover:text-sienna transition-colors relative" href="/page6-now">
                    Now
                    <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-sienna rounded-full"></span>
</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden lg:block hover:text-slate transition-colors text-sm font-medium" href="#">Newsletter</a>
<button className="text-paper hover:bg-slate transition-colors flex text-sm font-medium h-12 rounded-[14px] pr-6 pl-6 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:brain-circuit" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
                    Ask My Brain
                </button>
</div>
</div>
</nav>

<section className="flex w-full pt-20 pb-24 justify-center">
<div className="w-full max-w-[1200px] px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-12">
<span className="text-xs font-semibold uppercase caps-tracking text-sienna mb-6">Productized Knowledge for Modern Teams</span>
<h1 className="font-serif text-5xl lg:text-7xl lg:leading-[1.1] font-semibold editorial-tracking mb-8 text-ink">
                    Turn messy experience into clear, sellable systems.
                </h1>
<p className="text-lg leading-relaxed text-ink/80 mb-10 max-w-[580px]">
                    I publish high-signal mental models, decision playbooks, and strategy notes—then package the best into tools you can use in a week, not a semester.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="h-12 px-8 bg-sienna text-paper text-sm font-medium rounded-[14px] hover:bg-slate transition-colors">
                        Start Here
                    </button>
<button className="border-ink/20 text-ink hover:border-ink transition-colors text-sm font-medium bg-transparent h-12 border rounded-[14px] pr-8 pl-8 cursor-pointer" onclick="window.location.href='/page4-product'" role="button">
                        Explore Products
                    </button>
</div>
<p className="text-xs text-ink/50 mt-8 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                    Trusted by operators in fintech, consumer, and SaaS. New essays every Sunday.
                </p>
</div>

<div className="lg:col-span-5 relative mt-12 lg:mt-0">
<div className="aspect-[4/5] w-full rounded-[20px] overflow-hidden border border-ink/10 relative bg-[#EFE9DD]">

<img alt="Abstract geometric paper structure" className="hover:scale-105 transition-transform duration-700 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7faa3578-f7a1-4488-8ffc-57d935ec02d2_1600w.webp" style={{}}/>

<div className="absolute inset-0 border-[0.5px] border-white/20 m-4 rounded-[16px] pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="flex border-ink/5 w-full border-t pt-[72px] pb-[72px] justify-center">
<div className="w-full max-w-[1200px] px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/40 p-8 rounded-[20px] border border-ink/5 hover:border-ink/20 transition-all duration-300 group">
<div className="border-ink/10 flex text-sienna group-hover:scale-110 transition-transform w-16 h-16 border rounded-full mb-6 items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:grid-2x2" data-icon-replaced="true" data-icon-set="lucide" data-lucide="grid-2x2" data-strokeWidth="1.5" data-width="32" fill="none" height="32" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(182, 74, 43)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path className="" d="M3 12h18"></path>
<rect className="" height="18" rx="2" width="18" x="3" y="3"></rect>
</svg>
</div>
<h3 className="font-serif text-2xl font-semibold mb-3">High-signal frameworks</h3>
<p className="text-sm leading-relaxed text-ink/70 mb-6">
                    One model at a time. Clear definitions, edge cases, and when <i>not</i> to use it.
                </p>
<div className="inline-flex items-center text-xs font-medium bg-ink/5 px-3 py-1.5 rounded-full text-ink/60">
                    Reading time: 5–8 min
                </div>
</div>

<div className="bg-white/40 p-8 rounded-[20px] border border-ink/5 hover:border-ink/20 transition-all duration-300 group">
<div className="w-16 h-16 mb-6 rounded-full bg-paper border border-ink/10 flex items-center justify-center text-sienna group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<h3 className="font-serif text-2xl font-semibold mb-3">Reusable playbooks</h3>
<p className="text-sm leading-relaxed text-ink/70 mb-6">
                    Decision templates, meeting scripts, and checklists that survive real-world chaos.
                </p>
<div className="inline-flex items-center text-xs font-medium bg-ink/5 px-3 py-1.5 rounded-full text-ink/60">
                    Downloadable tools
                </div>
</div>

<div className="border-ink/5 hover:border-ink/20 transition-all duration-300 group bg-white/40 border rounded-[20px] pt-8 pr-8 pb-8 pl-8">
<div className="w-16 h-16 mb-6 rounded-full bg-paper border border-ink/10 flex items-center justify-center text-sienna group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:anchor" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v16m7-9l2-1a9 9 0 0 1-18 0l2 1m4-2h6"></path><circle cx="12" cy="4" r="2"></circle></g></svg>
</div>
<h3 className="font-serif text-2xl font-semibold mb-3">Strategy you can ship</h3>
<p className="text-sm leading-relaxed text-ink/70 mb-6">
                    From insight → action: a weekly cadence that turns thinking into shipping.
                </p>
<div className="inline-flex items-center text-xs font-medium bg-ink/5 px-3 py-1.5 rounded-full text-ink/60">
                    Built for small teams
                </div>
</div>
</div>
</section>

<section className="flex w-full pt-24 pb-24 justify-center">
<div className="w-full max-w-[1200px] px-6 lg:px-0">
<div className="mb-16 max-w-2xl">
<h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-4 editorial-tracking">Start Here: pick your path</h2>
<p className="text-lg text-ink/70">Choose a route based on where you are today. Each path is a short sequence you can
        finish in 30 minutes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group flex flex-col h-full bg-white rounded-[20px] border border-ink/10 overflow-hidden hover:shadow-lg hover:shadow-ink/5 transition-all duration-300">
<div className="h-40 w-full overflow-hidden bg-[#F0EBE0] relative">
<img alt="Beginner path cover" className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2da099d6-76c2-45c8-a052-214a70c27e86_800w.webp" style={{}}/>
</div>
<div className="p-8 flex flex-col flex-grow">
<span className="text-xs uppercase font-semibold tracking-wider text-slate mb-2">Beginner</span>
<h3 className="font-serif text-2xl font-semibold mb-2">Get clarity fast</h3>
<p className="text-sm text-ink/70 mb-6">Understand the core mental models I use weekly.</p>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm">
<svg aria-hidden="true" className="iconify text-sienna mt-0.5 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              The 2×2 for better trade-offs
            </li>
<li className="flex items-start gap-3 text-sm">
<svg aria-hidden="true" className="iconify text-sienna mt-0.5 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Default decisions vs. real decisions
            </li>
<li className="flex items-start gap-3 text-sm">
<svg aria-hidden="true" className="iconify text-sienna mt-0.5 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              A simple weekly review
            </li>
</ul>
<a className="w-full py-3 flex items-center justify-center rounded-[14px] bg-paper border border-ink/10 text-sm font-medium hover:bg-ink hover:text-paper transition-colors" href="#">
            Open Beginner Path
          </a>
</div>
</div>

<div className="group flex flex-col h-full bg-white rounded-[20px] border border-ink/10 overflow-hidden hover:shadow-lg hover:shadow-ink/5 transition-all duration-300">
<div className="h-40 w-full overflow-hidden bg-[#F0EBE0] relative">
<img alt="Builder path cover" className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19878212-6e42-4459-b3d1-ea705bc7d795_800w.webp" style={{}}/>
</div>
<div className="p-8 flex flex-col flex-grow">
<span className="text-xs uppercase font-semibold tracking-wider text-slate mb-2">Builder</span>
<h3 className="font-serif text-2xl font-semibold mb-2">Build your system</h3>
<p className="text-sm text-ink/70 mb-6">Turn notes into assets: templates, checklists, and living docs.</p>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm">
<svg aria-hidden="true" className="iconify text-sienna mt-0.5 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Knowledge capture that doesn’t rot
            </li>
<li className="flex items-start gap-3 text-sm">
<svg aria-hidden="true" className="iconify text-sienna mt-0.5 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Reusable meeting notes
            </li>
<li className="flex items-start gap-3 text-sm">
<svg aria-hidden="true" className="iconify text-sienna mt-0.5 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              A personal operating system
            </li>
</ul>
<a className="w-full py-3 flex items-center justify-center rounded-[14px] bg-paper border border-ink/10 text-sm font-medium hover:bg-ink hover:text-paper transition-colors" href="#">
            Open Builder Path
          </a>
</div>
</div>

<div className="group flex flex-col h-full bg-white rounded-[20px] border border-ink/10 overflow-hidden hover:shadow-lg hover:shadow-ink/5 transition-all duration-300">
<div className="h-40 w-full overflow-hidden bg-[#F0EBE0] relative">
<img alt="Expert path cover" className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover graysca" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa779cc5-8d74-4516-947b-6bf244810742_800w.webp" style={{}}/>
</div>
<div className="p-8 flex flex-col flex-grow">
<span className="text-xs uppercase font-semibold tracking-wider text-slate mb-2">Expert</span>
<h3 className="font-serif text-2xl font-semibold mb-2">Go deep</h3>
<p className="text-sm text-ink/70 mb-6">Case notes, contrarian takes, and second-order thinking.</p>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm">
<svg aria-hidden="true" className="iconify text-sienna mt-0.5 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Strategy under constraints
            </li>
<li className="flex items-start gap-3 text-sm">
<svg aria-hidden="true" className="iconify text-sienna mt-0.5 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Second-order effects
            </li>
<li className="flex items-start gap-3 text-sm">
<svg aria-hidden="true" className="iconify text-sienna mt-0.5 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              How to design incentives
            </li>
</ul>
<a className="w-full py-3 flex items-center justify-center rounded-[14px] bg-paper border border-ink/10 text-sm font-medium hover:bg-ink hover:text-paper transition-colors" href="#">
            Open Expert Path
          </a>
</div>
</div>
</div>
</div>
</section>

<section className="flex border-y border-ink/5 bg-white w-full pt-24 pb-24 justify-center">
<div className="w-full max-w-[1200px] px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

<div className="lg:col-span-6 pr-0 lg:pr-12">
<div className="flex items-center gap-2 mb-4 text-sienna">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4">
</path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
<span className="text-xs uppercase font-semibold tracking-wider">AI Powered</span>
</div>
<h2 className="font-serif text-4xl font-semibold mb-6 editorial-tracking text-ink">Ask My Brain</h2>
<p className="text-lg leading-relaxed text-ink/70 mb-8">
        Skip keyword search. Ask a question in plain English—get a concise answer with the most relevant essays behind
        it.
      </p>

<div className="flex flex-wrap gap-3 mb-8">
<button className="px-4 py-2 rounded-full border border-ink/10 text-xs font-medium bg-paper hover:bg-slate hover:text-white transition-colors">
                        "How do I decide what not to build?"
                    </button>
<button className="px-4 py-2 rounded-full border border-ink/10 text-xs font-medium bg-paper hover:bg-slate hover:text-white transition-colors">
                        "Spot second-order effects?"
                    </button>
<button className="px-4 py-2 rounded-full border border-ink/10 text-xs font-medium bg-paper hover:bg-slate hover:text-white transition-colors">
                        "Design a weekly review?"
                    </button>
</div>

<div className="bg-paper p-6 rounded-[16px] border border-ink/5 relative mb-8">
<div className="absolute -top-3 left-6 px-2 bg-paper text-[10px] uppercase font-bold tracking-widest text-slate border border-ink/10 rounded">
          Answer Preview</div>
<p className="font-serif text-lg italic text-ink/80 leading-relaxed">
          "Use a constraints-first filter: capacity, risk, and reversibility. Then rank by compounding impact. If two
          options tie, choose the one that improves your decision process."
        </p>
</div>
<div className="flex items-center gap-6">
<button className="h-12 px-8 bg-ink text-paper text-sm font-medium rounded-[14px] hover:bg-slate transition-colors shadow-lg shadow-ink/10">
                        Try Ask My Brain
                    </button>
<a className="underline decoration-ink/30 hover:decoration-ink underline-offset-4 text-sm font-medium" href="/page3-library">Browse the
          Library</a>
</div>
</div>

<div className="lg:col-span-6">
<div className="aspect-[4/3] w-full rounded-[20px] bg-[#EAE5D9] border border-ink/10 relative overflow-hidden flex items-center justify-center p-8">

<img alt="Newsletter" className="group-hover:scale-105 transition-transform duration-700 opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37b1493f-fc4c-41df-a403-03de9a8f70ae_1600w.webp" style={{}}/>
</div>
</div>
</div>
</section>

<section className="flex w-full pt-24 pb-24 justify-center">
<div className="w-full max-w-[1200px] px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col bg-white rounded-[20px] border border-ink/10 overflow-hidden group">
<div className="h-[180px] w-full bg-slate/5 relative overflow-hidden">
<img alt="Products" className="group-hover:scale-105 transition-transform duration-700 opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fb32866-0bea-4d2f-9f76-a8ed92e23730_800w.webp" style={{}}/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-serif text-2xl font-semibold mb-2">Digital Products</h3>
<p className="text-sm text-ink/70 mb-6 min-h-[40px]">Templates and field guides you can apply immediately.</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex justify-between items-center text-sm border-b border-ink/5 pb-2">
<span>Decision OS (Notion)</span>
<span className="font-medium">$49</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-ink/5 pb-2">
<span>Mental Models Guide</span>
<span className="font-medium">$29</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-ink/5 pb-2">
<span>Strategy Sprint Course</span>
<span className="font-medium">$99</span>
</li>
</ul>
<a className="w-full py-3 text-center border border-ink text-sm font-medium rounded-[14px] hover:bg-ink hover:text-paper transition-colors" href="#">View Products</a>
</div>
</div>

<div className="flex flex-col bg-ink text-paper rounded-[20px] border border-ink overflow-hidden group">
<div className="h-[180px] w-full bg-white/5 relative overflow-hidden">
<img alt="Consulting" className="group-hover:scale-105 transition-transform duration-700 opacity-40 mix-blend-overlay w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7dd2522-3d92-488e-b766-080ca2dbfbcb_800w.webp"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-serif text-2xl font-semibold mb-2">Consulting</h3>
<p className="text-sm text-paper/70 mb-6 min-h-[40px]">Fast clarity for teams under pressure—without the fluff.</p>
<ul className="space-y-4 mb-8 flex-grow text-paper/90">
<li className="flex justify-between items-center text-sm border-b border-paper/10 pb-2">
<span className="">90-Min Clarity Session</span>
<span className="font-medium">$350</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-paper/10 pb-2">
<span className="">2-Week Strategy Reset</span>
<span className="font-medium">$2,400</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-paper/10 pb-2">
<span className="">Executive Coaching</span>
<span className="font-medium">$900/mo</span>
</li>
</ul>
<a className="text-ink hover:bg-sienna hover:text-paper transition-colors text-sm font-medium text-center w-full rounded-[14px] pt-3 pb-3" href="/page5-work-with-me">Work With Me</a>
</div>
</div>

<div className="flex flex-col bg-white rounded-[20px] border border-ink/10 overflow-hidden group">
<div className="h-[180px] w-full bg-sienna/5 relative overflow-hidden">
<img alt="Newsletter" className="group-hover:scale-105 transition-transform duration-700 opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8079f1a6-6f17-4350-8e27-6da09475bea6_800w.webp" style={{}}/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-serif text-2xl font-semibold mb-2">Sunday Signals</h3>
<p className="text-sm text-ink/70 mb-6 min-h-[40px]">One model. Five minutes. Every Sunday.</p>
<div className="grid grid-cols-2 gap-4 mb-8 flex-grow">
<div className="p-3 bg-paper rounded-lg border border-ink/5">
<div className="text-lg font-semibold">24k+</div>
<div className="text-[10px] uppercase tracking-wider text-ink/50">Readers</div>
</div>
<div className="p-3 bg-paper rounded-lg border border-ink/5">
<div className="text-lg font-semibold">12</div>
<div className="text-[10px] uppercase tracking-wider text-ink/50">Last 90 Days</div>
</div>
<div className="col-span-2 p-3 bg-paper rounded-lg border border-ink/5 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-sienna iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-sm text-ink/70">Typical read time: 4–6 min</span>
</div>
</div>
<a className="border-ink hover:bg-ink hover:text-paper transition-colors text-sm font-medium text-center w-full border rounded-[14px] pt-3 pb-3" href="/page5-work-with-me">Join Free</a>
</div>
</div>
</div>
</section>

<section className="w-full py-24 flex justify-center bg-white border-y border-ink/5">
<div className="w-full max-w-[1200px] px-6 lg:px-0">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="font-serif text-4xl font-semibold mb-4 editorial-tracking">What clients say</h2>
<p className="text-lg text-ink/70">Clear thinking is a competitive advantage. Here’s what changed after we shipped the
        system.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 bg-paper rounded-[20px] border border-ink/5 flex flex-col sm:flex-row gap-6 items-start">
<img alt="Maya" className="border-ink/10 flex-shrink-0 w-[72px] h-[72px] object-cover border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cdd1035-405b-48dd-99b2-92ae8ad0f037_320w.webp" style={{}}/>
<div className="">
<blockquote className="font-serif text-lg leading-relaxed italic mb-4">“We replaced vague debates with a simple
            decision rubric. In two weeks, our roadmap meeting went from 90 minutes to 35.”</blockquote>
<div className="flex justify-between items-end border-t border-ink/10 pt-4">
<div className="">
<div className="font-semibold text-sm">Maya Chen</div>
<div className="text-xs text-ink/50">Product Lead, Fintech</div>
</div>
<div className="text-xs font-semibold text-sienna bg-sienna/5 px-2 py-1 rounded">Time ↓ 61%</div>
</div>
</div>
</div>

<div className="p-8 bg-paper rounded-[20px] border border-ink/5 flex flex-col sm:flex-row gap-6 items-start">
<img alt="Daniel" className="border-ink/10 flex-shrink-0 w-[72px] h-[72px] object-cover border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b8ea1db-962f-40c8-a008-26ac1e09a7bc_320w.webp" style={{}}/>
<div className="">
<blockquote className="font-serif text-lg leading-relaxed italic mb-4">“The playbooks turned our ‘tribal
            knowledge’ into a living system. New hires ramped in days instead of weeks.”</blockquote>
<div className="flex justify-between items-end border-t border-ink/10 pt-4">
<div className="">
<div className="font-semibold text-sm">Daniel Rivera</div>
<div className="text-xs text-ink/50">Head of Growth, B2C</div>
</div>
<div className="text-xs font-semibold text-sienna bg-sienna/5 px-2 py-1 rounded">Ramp ↓ 40%</div>
</div>
</div>
</div>

<div className="p-8 bg-paper rounded-[20px] border border-ink/5 flex flex-col sm:flex-row gap-6 items-start">
<img alt="Amina" className="border-ink/10 flex-shrink-0 w-[72px] h-[72px] object-cover border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77e64e75-f3a2-4e29-856f-778a7735022f_320w.webp" style={{}}/>
<div className="">
<blockquote className="font-serif text-lg leading-relaxed italic mb-4">“Clarity Atlas didn’t give us more ideas—it
            gave us better constraints. Alignment finally felt calm and specific.”</blockquote>
<div className="flex justify-between items-end border-t border-ink/10 pt-4">
<div className="">
<div className="font-semibold text-sm">Amina Hassan</div>
<div className="text-xs text-ink/50">COO, Boutique SaaS</div>
</div>
<div className="text-xs font-semibold text-sienna bg-sienna/5 px-2 py-1 rounded">Alignment ↑</div>
</div>
</div>
</div>

<div className="p-8 bg-paper rounded-[20px] border border-ink/5 flex flex-col sm:flex-row gap-6 items-start">
<img alt="Ethan" className="border-ink/10 flex-shrink-0 w-[72px] h-[72px] object-cover border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e85e499-94bf-4870-9082-5987e9a28156_320w.webp"/>
<div className="">
<blockquote className="font-serif text-lg leading-relaxed italic mb-4">“The ‘second-order effects’ lens saved us
            from a costly pricing change. The framework paid for itself in one meeting.”</blockquote>
<div className="flex justify-between items-end border-t border-ink/10 pt-4">
<div>
<div className="font-semibold text-sm">Ethan Brooks</div>
<div className="text-xs text-ink/50">Founder, DevTools</div>
</div>
<div className="text-xs font-semibold text-sienna bg-sienna/5 px-2 py-1 rounded">Saved $$$</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 flex justify-center">
<div className="w-full max-w-[1200px] px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs uppercase font-semibold tracking-wider text-ink/50">Live Status</span>
</div>
<h2 className="font-serif text-4xl font-semibold mb-6 editorial-tracking">Now</h2>
<p className="text-lg text-ink/70 mb-8 leading-relaxed">
                    This month I’m building a decision cadence for small teams, reading about incentives, and collecting case notes on “strategy under constraints.”
                </p>
<ul className="space-y-4 mb-8">
<li className="flex gap-4 items-baseline">
<span className="text-xs font-bold uppercase w-20 text-sienna shrink-0 tracking-wide">Building</span>
<span className="text-ink/80 text-sm">A lightweight “Decision Log” workflow for Notion</span>
</li>
<li className="flex gap-4 items-baseline">
<span className="text-xs font-bold uppercase w-20 text-sienna shrink-0 tracking-wide">Reading</span>
<span className="text-ink/80 text-sm"><i className="">Thinking in Systems</i> (re-reading), plus case studies on pricing</span>
</li>
<li className="flex gap-4 items-baseline">
<span className="text-xs font-bold uppercase w-20 text-sienna shrink-0 tracking-wide">Exploring</span>
<span className="text-ink/80 text-sm">Reversibility, incentives, and second-order effects</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 border-ink/30 hover:border-ink hover:gap-3 transition-all text-sm font-semibold border-b pb-1" href="/page5-work-with-me">
                    See what I’m doing now
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="lg:col-span-5">
<div className="aspect-[4/5] rounded-[20px] overflow-hidden border border-ink/10 rotate-1 hover:rotate-0 transition-transform duration-500">
<img alt="Desk workspace" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0088eb6d-fca8-432e-bca1-263ecc525f79_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="flex border-ink/5 w-full border-b pt-24 pb-24 justify-center">
<div className="w-full max-w-[1200px] px-6 lg:px-0">
<div className="bg-ink rounded-[24px] text-paper overflow-hidden grid grid-cols-1 lg:grid-cols-12">
<div className="lg:col-span-8 p-12 lg:p-16 flex flex-col justify-center">
<h2 className="font-serif text-4xl font-semibold mb-4 editorial-tracking">Sunday Signals</h2>
<p className="text-lg text-paper/70 mb-8 max-w-lg">One model, five minutes, every Sunday—built for operators who hate fluff.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md w-full mb-6">
<input className="input-reset flex-grow border-paper/20 text-paper placeholder-paper/40 focus:bg-paper/15 transition-colors text-sm h-12 border rounded-[12px] pr-4 pl-4" placeholder="you@domain.com" type="email"/>
<button className="h-12 px-8 bg-paper text-ink text-sm font-semibold rounded-[12px] hover:bg-sienna hover:text-paper transition-colors">
                            Join Free
                        </button>
</form>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-paper/40 font-medium tracking-wide">
<span className="flex items-center gap-1.5"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg> 24,600 readers</span>
<span className="w-1 h-1 rounded-full bg-paper/20"></span>
<span className="">4–6 min read</span>
<span className="w-1 h-1 rounded-full bg-paper/20"></span>
<span className="">No spam</span>
</div>
</div>
<div className="hidden lg:block lg:col-span-4 bg-[#232323] relative overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(45deg, #2F3A56 25%, transparent 25%, transparent 50%, #2F3A56 50%, #2F3A56 75%, transparent 75%, transparent)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<img alt="Expert path cover" className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b428e5e-6fb1-4aa4-a686-bc431a174944_800w.webp"/>
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full py-16 flex justify-center text-sm">
<div className="w-full max-w-[1200px] px-6 lg:px-0 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-5 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4 text-ink">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
<span className="font-serif uppercase caps-tracking font-bold">Clarity Atlas</span>
</div>
<p className="text-ink/60 mb-8">Packaged thinking for better decisions.</p>
</div>
<div className="text-xs text-ink/40">
                    © 2026 Clarity Atlas. All rights reserved.
                </div>
</div>
<div className="md:col-span-4">
<div className="flex flex-col gap-3 font-medium">
<a className="hover:text-sienna transition-colors" href="/page2-start-here">Start Here</a>
<a className="hover:text-sienna transition-colors" href="/page3-library">Library</a>
<a className="hover:text-sienna transition-colors" href="/page4-product">Products</a>
<a className="hover:text-sienna transition-colors" href="/page5-work-with-me">Work With Me</a>
<a className="hover:text-sienna transition-colors" href="/home">Now</a>
</div>
</div>
<div className="md:col-span-3 flex flex-col justify-between h-full">
<div className="flex gap-4">
<a className="text-ink/40 hover:text-ink transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide w-[18px] h-[18px]" data-icon="lucide:twitter" data-icon-replaced="true" data-width="18" height="18" role="img" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(27, 27, 27)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-ink/40 hover:text-ink transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-ink/40 hover:text-ink transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:youtube" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg></a>
</div>
<div className="flex gap-6 text-xs text-ink/40 mt-8 md:mt-0">
<a className="hover:text-ink transition-colors" href="#">Privacy</a>
<a className="hover:text-ink transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
