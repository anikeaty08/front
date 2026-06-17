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



                    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
                
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-1 font-semibold text-xl tracking-tight" href="#">
<span className="text-slate-900">Next Leader</span>
<span className="text-[#004aad]">OS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#004aad] transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-[#004aad] transition-colors" href="#icps">Programs</a>
<a className="hover:text-[#004aad] transition-colors" href="#transformations">Stories</a>
<a className="hover:text-[#004aad] transition-colors" href="#about">About</a>

<a className="hover:text-[#004aad] transition-colors text-[#004aad]" href="free-training">Free Training</a>
</div>
<a className="hidden md:block hover:bg-[#003680] transition-colors text-sm font-medium text-white bg-[#004aad] rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="https://calendly.com/doctortobias/meet">
                Book Strategy Call
            </a>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden bg-white pt-40 pr-6 pb-20 pl-6 relative">

<div className="aura-background-component absolute top-0 left-0 w-full h-full pointer-events-none z-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full z-0 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div>
</div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50/80 backdrop-blur-sm border border-slate-200 text-slate-600 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#004aad] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#004aad]"></span>
</span>
                Leadership for the AI era
            </div>

<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight mb-8" style={{}}>Update your Leadership OS for the Future of Work.</h1>
<p className="leading-relaxed md:text-2xl text-xl font-normal text-slate-700 max-w-2xl mr-auto mb-10 ml-auto">Dr. Tobias helps tech professionals and leaders find clarity, direction, upgrade their people skills, increase influence, and build resilience for the future of work.</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full sm:w-auto bg-[#004aad] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#003680] transition-colors shadow-lg shadow-[#004aad]/20" href="#icps">
                    Find Your Program
                </a>
<a className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-colors" href="https://calendly.com/doctortobias/meet">
                    Meet Dr. Tobias
                </a>
</div>
</div>
</header>

<section className="md:py-32 bg-[#ffffff] pt-24 pb-24" id="about">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-2 text-slate-300 gap-x-16 gap-y-16 items-center">

<div className="relative mb-24 md:mb-0">
<div className="aspect-[4/5] overflow-hidden text-gray-400 max-h-full rounded-2xl shadow-2xl items-center justify-center">

<img alt="Dr. Tobias van Rennings - Leadership Coach" className="bg-center w-full h-760 object-cover translate-y-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/183fb29b-00cc-488a-996c-5b192fa8b3a0_1600w.png"/>
</div>

<div className="-bottom-6 -right-6 z-10 bg-white max-w-xs border-slate-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 absolute shadow-xl -translate-x-16 translate-y-16 scale-95">
<div className="flex gap-3 mb-2 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-globe text-[#004aad] w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-sm font-semibold text-slate-900">Global Expertise</span>
</div>
<p className="text-sm text-slate-500">17+ Yrs in C-Level, Director &amp; Founder Leadership across the US, UK/EU, and APAC</p>
</div>
</div>
<div className="">

<h2 className="md:text-5xl text-3xl font-semibold text-slate-900 tracking-tight mb-8" style={{}}>The definitive metadata for your leadership growth.</h2>
<div className="space-y-6 text-lg md:text-xl text-slate-600 font-normal">
<p className="" style={{}}>I help ambitious leaders and founders grow into the roles their careers and companies now demand. My work blends close to two decades of leadership across global organizations with advanced research goal attainment, human behavior, cultural intelligence, and sustainable performance.</p>
<p className="" style={{}}>I work with executives, senior managers, and high-performing technical experts who are ready to lead with more clarity, influence, confidence and impact. Together, we close the gap between where you perform today and the leader you must become for the next stage of your career or business.</p><p className="">If you want to accelerate your promotion, scale your leadership capacity, or build a high-performing culture without sacrificing your wellbeing, this is where that shift begins. My approach gives you clear structure, accountability, and proven leadership systems that deliver results fast.</p>
<div className="pt-4">
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium">Multicultural Intelligence</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium">Future of Work</span>
<span className="text-sm font-medium text-slate-600 bg-white border-slate-200 border rounded-full pt-2 pr-4 pb-2 pl-4">EQ</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-white pt-24 pb-24" id="icps">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                    Choose your career stage
                </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Specific programs designed for the unique challenges of tech professionals at every level.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="flex flex-col bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-[#004aad]/30">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#004aad] transition-colors border border-slate-100 group-hover:border-[#004aad]">
<svg className="lucide lucide-terminal w-6 h-6 text-[#004aad] group-hover:text-white transition-colors" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</div>

<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Technical Influence</h3>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                        Shift from Individual Contributor to respected leader. Build influence without authority.
                    </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">For Software Engineers &amp; Data Scientists</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">Develop soft skills behind technical skills</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">Cross cultural collaboration mastery</span>
</li>
</ul>
<div className="pt-6 border-t border-slate-100">
<p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-4">12 Weeks</p>
<a className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-[#004aad] transition-colors" href="https://calendly.com/doctortobias/meet">
                            Inquire Now
                        </a>
</div>
</div>

<div className="flex flex-col bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-[#004aad]/30">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#004aad] transition-colors border border-slate-100 group-hover:border-[#004aad]">
<svg className="lucide lucide-trending-up w-6 h-6 text-[#004aad] group-hover:text-white transition-colors" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Leadership Accelerator</h3>
<p className="leading-relaxed text-base text-slate-500 mb-8">Rapid promotion readiness for emerging leaders. Move up within 3 to 6 months.</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">For Team Leads &amp; Engineering Managers</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">Executive presence development</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">Stakeholder management strategy</span>
</li>
</ul>
<div className="pt-6 border-t border-slate-100">
<p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-4">3 OR 6 MONTHS</p>
<a className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-[#004aad] transition-colors" href="https://calendly.com/doctortobias/meet">
                            Inquire Now
                        </a>
</div>
</div>

<div className="flex flex-col bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-[#004aad]/30">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#004aad] transition-colors border border-slate-100 group-hover:border-[#004aad]">
<svg className="lucide lucide-shield-check w-6 h-6 text-[#004aad] group-hover:text-white transition-colors" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Leadership Mastery</h3>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                        C-suite readiness for Senior Directors and VPs. Navigate politics and complexity.
                    </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">For Heads of Product &amp; Directors</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">Political mastery and influence</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">Leading global remote teams</span>
</li>
</ul>
<div className="pt-6 border-t border-slate-100">
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-4">3 OR 6 MONTHS</p>
<a className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-[#004aad] transition-colors" href="https://calendly.com/doctortobias/meet">
                            Inquire Now
                        </a>
</div>
</div>

<div className="flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-[#004aad]/30 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#004aad] transition-colors border border-slate-100 group-hover:border-[#004aad]">
<svg className="lucide lucide-rocket w-6 h-6 text-[#004aad] group-hover:text-white transition-colors" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Founders Growth</h3>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                        Transition from operator to strategic CEO. Scale your company without the chaos.
                    </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">For Tech Founders &amp; Startup CEOs</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">Decision making &amp; culture building</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#004aad] flex-shrink-0 mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-600">Sustain energy and avoid burnout</span>
</li>
</ul>
<div className="pt-6 border-t border-slate-100">
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-4">6 OR 12 MONTHS</p>
<a className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-[#004aad] transition-colors" href="https://calendly.com/doctortobias/meet">
                            Inquire Now
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-b pt-24 pb-24">
<div className="text-center max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-12">
<h2 className="md:text-5xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Leading Smart in the Age of AI.</h2>
<p className="text-xl text-slate-500 max-w-2xl mr-auto ml-auto">Watch this short Breakdown of How to Secure your Career in Tech and Position for a Leadership Role.</p>
</div>

<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-black group">

<iframe allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/8d5b4dc219d949e9bc4771054655f9dd" webkitallowfullscreen=""></iframe>

<div className="absolute inset-0 bg-slate-900 z-[-1] flex items-center justify-center">
<span className="text-white/20">Loading Video...</span>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#004aad] py-12" id="philosophy">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
                Sustainable performance beats hustle culture.
            </h2>
<div className="grid md:grid-cols-2 gap-12 text-left">
<div className="">
<h4 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
<svg className="lucide lucide-brain-circuit w-5 h-5 text-white" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
                        Psychology &amp; Strategy
                    </h4>
<p className="text-base text-slate-400 leading-relaxed">
                        Dr. Tobias blends deep psychological insight with hard business strategy. We address the imposter syndrome and the P&amp;L simultaneously.
                    </p>
</div>
<div className="">
<h4 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
<svg className="lucide lucide-message-square w-5 h-5 text-white" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                        No "Coach" Fluff
                    </h4>
<p className="text-base text-slate-400 leading-relaxed">
                        We avoid robotic phrasing. We focus on clarity. This is high trust, high depth work for professionals who value their time and results.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="transformations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 block">Testimonials</span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">Transformation Stories</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 items-start">

<div className="flex flex-col gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex items-center gap-3 mb-4">
<img alt="Michael C." className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1c0ccbd-5317-40cd-a00d-022ca736ec22_320w.png?w=800&amp;q=80"/>
<div className="">
<h4 className="text-base font-semibold text-slate-900">Chuck Blevins</h4>
<p className="text-xs text-slate-500">Director of Product Management @ DigiCert</p>
</div>
</div>
<div className="w-full h-px bg-slate-100 mb-4"></div>
<p className="leading-relaxed text-sm text-slate-600">"I was reaching out to Dr. Tobias to improve my team leadership and stakeholder management skills. I noticed improvements in my understanding of other team members and direct reports very fast and learned a lot about myself in my first 3 months with Dr. Tobias. I'm not 6 months on board already and working on other skills needed to become a rounded leader/ executive in the corporate world."</p>
</div>

<div className="hover:shadow-md transition-all bg-white border-slate-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<img alt="Elena R." className="w-12 h-12 object-cover bg-center rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c42b621-9e30-435b-ad7a-c4f9ce567eee_320w.png?w=800&amp;q=80"/>
<div className="">
<h4 className="text-base font-semibold text-slate-900" style={{}}>Saifulla Shariff (Dubai)</h4>
<p className="text-xs text-slate-500" style={{}}>Head of Commercials</p>
</div>
</div>
<div className="w-full h-px bg-slate-100 mb-4"></div>
<p className="text-sm text-slate-600 leading-relaxed">
                            "I was burning out trying to do everything myself. Dr. Tobias taught me strategic delegation and how to manage upwards. My team is happier and I actually have my weekends back."
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-full transform hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 sm:h-80 bg-slate-100">
<img alt="Sarah Jenkins" className="object-top w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4785e25-92ba-4d71-8f51-250083312dd9_800w.png"/>
<div className="text-xs font-medium text-white bg-slate-900 rounded-full pt-1.5DIrectorof pr-4 pb-1.5 pl-4 absolute top-4 right-4 shadow-lg" style={{}}></div>
</div>
<div className="flex flex-col flex-grow text-center pt-8 pr-8 pb-8 pl-8">
<div className="mb-6">
<svg className="lucide lucide-quote w-8 h-8 text-[#004aad] mx-auto opacity-20 fill-current" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="md:text-2xl leading-snug text-xl font-medium text-slate-900 mb-8" style={{}}>"Dr. Tobias's approach is simple, direct, and delivers real results when the stakes are high. I started my new role after working with Dr. Tobias 4 months."</blockquote>
<div className="mt-auto flex items-center justify-around border-t border-slate-100 pt-8">
<div className="text-center">
<span className="block text-3xl font-semibold text-slate-900 tracking-tight">4 Mo</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide">To Promotion</span>
</div>
<div className="w-px h-10 bg-slate-100"></div>
<div className="text-center">
<span className="block text-3xl font-semibold text-slate-900 tracking-tight">32%</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Salary Increase</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex items-center gap-3 mb-4">
<img alt="David K." className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea852f5c-e79c-40e9-ac28-a37bc41ead86_320w.png?w=800&amp;q=80"/>
<div className="">
<h4 className="text-base font-semibold text-slate-900" style={{}}>Helen Yuan</h4>
<p className="text-xs text-slate-500">Growth Strategy Manager @Leidos</p>
</div>
</div>
<div className="w-full h-px bg-slate-100 mb-4"></div>
<p className="leading-relaxed text-sm text-slate-600">"I didn't realize how much my communication style and limiting beliefs were holding me back. The psychological insights were a game-changer for my transition from a senior product manager. to a new role in a different industry."</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex items-center gap-3 mb-4">
<img alt="James W." className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28e30541-6736-4ae9-a063-4821eb8413b7_320w.png?w=800&amp;q=80"/>
<div className="">
<h4 className="text-base font-semibold text-slate-900">Mira Bahou</h4>
<p className="text-xs text-slate-500">Senior Cyber Security Specialist @ EY</p>
</div>
</div>
<div className="w-full h-px bg-slate-100 mb-4"></div>
<p className="leading-relaxed text-sm text-slate-600">"Dr. Tobias has been extremely supportive, he helped me gain different insights on confidence, relationships, and career development. He always uses his expertise to motivate me to do my best and become the best possible version of myself. I’m very thankful for all his support."</p>
</div>
</div>
</div>
</div>
</section>


<section className="bg-slate-50 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 block">Real Results</span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">Client Breakthroughs</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
                    Watch clients discuss their specific challenges and the results we achieved together.
                </p>
</div>


<div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 no-scrollbar">

<div className="min-w-[85vw] md:min-w-0 snap-center rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm relative group">

<div className="aspect-video w-full relative">
<iframe allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/6b61bd0ac59940e5833540f1b78119f3?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true" webkitallowfullscreen=""></iframe>
</div>
</div>

<div className="min-w-[85vw] md:min-w-0 snap-center rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm relative group">
<div className="aspect-video w-full relative">
<iframe allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/24df0fea06e244a48b276026e39aec92?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true" webkitallowfullscreen=""></iframe>
</div>
</div>

<div className="min-w-[85vw] md:min-w-0 snap-center rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm relative group">
<div className="aspect-video w-full relative">
<iframe allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/d7832f7c0555410ab20f46501f29e113?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true" webkitallowfullscreen=""></iframe>
</div>
</div>
</div>

<div className="md:hidden flex justify-center gap-1.5 mt-2">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>
</div>
</section>


<section className="bg-slate-50 pt-24 pb-24">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl overflow-hidden relative">
<div className="grid md:grid-cols-2 gap-x-12 gap-y-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-8 h-8 rounded bg-[#0077b5] flex items-center justify-center text-white">
<svg className="w-[64px] h-[64px]" data-icon-replaced="true" data-icon-set="logos" data-logos="linkedin-icon" fill="currentColor" height="64" stroke="none" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '64px', height: '64px'}} viewbox="0 0 256 256" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#ffffff"></path></svg>
</span>
<span className="uppercase text-sm font-semibold text-slate-500 tracking-widest" style={{}}>Connect on linkedin</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                            Stay Ahead of the Curve
                        </h2>
<p className="leading-relaxed text-lg text-slate-600 mb-8">Let's connect on LinkedIn for 
Tech Job Market developments, Tech News, AI trends, and more about my clients and me.</p>
<a className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-full font-medium hover:bg-[#006097] transition-colors shadow-md hover:shadow-lg" href="https://www.linkedin.com/in/tobias-van-rennings/" rel="noopener noreferrer" target="_blank">
<span className="">Follow Dr. Tobias</span>
<svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden group">

<div className="flex bg-center bg-gradient-to-t from-black/60 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c52ba9e-46a2-42c0-a126-fc6b92f6639c_1600w.png?w=800&amp;q=80)] bg-cover pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
<svg className="" fill="#0077b5" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect className="" height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
<div className="text-white">
<p className="text-xs font-medium opacity-80">Connect with</p>
<p className="text-sm font-semibold">Tobias van Rennings</p>
</div>
</div>
</div><img alt="LinkedIn Networking" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c52ba9e-46a2-42c0-a126-fc6b92f6639c_1600w.png?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#004aad] relative overflow-hidden isolate">

<div className="absolute inset-0 -z-10 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="mb-8">

<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Watch my latest Free Training Video
                </h2>

<p className="text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
                    Discover why leadership feels harder after promotion and what is actually changing beneath the surface. Learn how to move from execution to direction, reduce mental load, and gain clarity in your role as a leader without losing yourself or burning out.
                </p>
</div>
<div className="flex justify-center mt-8">

<a className="px-8 py-4 rounded-full bg-white text-[#004aad] text-lg font-medium hover:bg-blue-50 transition-colors shadow-xl shadow-black/10 flex items-center justify-center gap-2 transform hover:-translate-y-1 duration-300" href="free-training">
<svg className="text-[#004aad]" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"></path></svg>
                    Watch Free training
                </a>
</div>
</div>
</section>


<footer className="bg-slate-50 pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="">

<div className="mb-2 font-semibold text-xl tracking-tight">
<span className="text-slate-900">Next Leader</span>
<span className="text-[#004aad]">OS</span>
</div>
<p className="text-base text-slate-500" style={{}}>Global Tech Leadership Development</p>
</div>
<div className="flex gap-8 text-sm font-medium">
<a className="hover:text-[#004aad] transition-colors text-slate-500" href="https://www.linkedin.com/in/tobias-van-rennings/">LinkedIn</a>
<a className="text-slate-500 hover:text-[#004aad] transition-colors" href="#icps">Programs</a>
<a className="hover:text-[#004aad] transition-colors text-slate-500" href="mailto:me@coachtobias.com">Contact</a>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 text-xs text-slate-400">
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex flex-col gap-3">
<span className="">© 2025 Coach Tobias Limited. All rights reserved.</span>
<span className="block leading-relaxed text-slate-400/80 max-w-md">Coach Tobias Limited is a private limited company registered in England and Wales. Company Registration No. 14776919 Stirling House,
107 Stirling Road,
London, England, N22 5BN
United Kingdom</span>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-2">
<a className="hover:text-slate-600 transition-colors" href="/privacy-policy">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="/terms-of-service">Terms of Service</a>
<a className="hover:text-slate-600 transition-colors" href="/cookie-policy">Cookie Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
