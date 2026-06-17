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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-4 lg:gap-6 cursor-pointer group">
<div className="flex items-center gap-2">
<iconify-icon className="text-3xl text-[#006eb5] group-hover:scale-105 transition-transform duration-300" icon="solar:layers-linear"></iconify-icon>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-[#006eb5] transition-colors">Economy</span>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-[#006eb5] transition-colors">League</span>
</div>
</div>
<div className="h-8 w-px bg-slate-200/60"></div>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<div className="w-2.5 h-5 bg-[#006eb5] rounded-l-sm shadow-sm"></div>
<div className="w-2.5 h-5 bg-[#006eb5]/40 rounded-r-sm backdrop-blur-sm"></div>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight text-slate-900 uppercase">Bridge</span>
<span className="text-xs font-medium text-slate-500 lowercase">Civic</span>
</div>
</div>
</div>
<button className="p-2.5 rounded-xl hover:bg-slate-100/50 active:scale-95 transition-all text-slate-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-[#e0f2fe]/40 to-white">

<div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" style={{animationDuration: '10s'}}></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-200/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 flex flex-col fade-in-up w-full justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-[#006eb5] text-xs font-medium uppercase tracking-widest mb-6 w-max">
<span className="w-1.5 h-1.5 rounded-full bg-[#006eb5] animate-ping"></span>
                    Discover Bridge-Civic
                </div>
<h1 className="leading-tight lg:text-7xl md:bg-clip-text md:text-transparent text-5xl font-semibold tracking-tight bg-gradient-to-br from-blue-500/100 to-blue-500/50 mb-8">
                    About <span className="bg-clip-text bg-gradient-to-br from-blue-500/50 via-blue-500/100 to-blue-500/50">Us</span>
</h1>
<div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
<p className="first-letter:text-3xl first-letter:font-semibold first-letter:text-[#006eb5] first-letter:mr-1">
                        BRIDGE-Civic—Bridging Resources and Integrating Datasets to Guide Evidence-Based Change and Accountability—is more than a data platform. It's a new civic infrastructure designed to strengthen trust in local democracy by making data transparent, accessible, and actionable for everyone in Philadelphia.
                    </p>
<p className="">
                        We exist to close the city's civic data divide. Too often, information is created in silos, hard to find, or presented in ways that only experts can use. These barriers limit accountability and civic participation, especially in historically marginalized communities.
                    </p>
<p className="">
                        Our mission is to centralize and democratize public and community data, empower residents and civic leaders with interpretive tools and training, and provide personalized support to ensure data informs real change.
                    </p>
<p className="">
                        Anchored in the R.E.A.L. principles—Responsive, Equitable, Accessible, and Local—BRIDGE-Civic is co-created with community voices. We believe that data should be a public good that strengthens democracy, not a privilege for the few.
                    </p>
</div>
<button className="inline-flex gap-2 hover:bg-slate-800 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group font-medium text-white bg-[#006eb5] w-max rounded-full mt-10 px-7 py-3.5 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:play-circle-linear"></iconify-icon>
                    Take A Tour
                </button>
</div>
<div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center fade-in-up delay-200">

<div className="relative w-full aspect-square max-w-[500px]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#006eb5]/10 to-transparent rounded-3xl transform rotate-3 scale-105 border border-white/40 backdrop-blur-3xl shadow-xl"></div>
<div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl transform -rotate-2 border border-white/60 shadow-2xl overflow-hidden float-anim">
<img alt="Data Analytics" className="w-full h-full object-cover mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="bg-gradient-to-t from-white/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/4 -left-6 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 transform -rotate-3 animate-bounce" style={{animationDuration: '5s'}}>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#006eb5]">
<iconify-icon className="text-xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="w-2/3 h-full bg-[#006eb5] rounded-full"></div></div>
</div>
<div className="absolute bottom-1/4 -right-8 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 transform rotate-6 animate-bounce" style={{animationDuration: '7s'}}>
<div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<div className="w-16 h-1.5 bg-slate-100 rounded-full"></div>
<div className="w-10 h-1.5 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="flex flex-col lg:flex-row gap-16 gap-x-16 gap-y-16 items-center">
<div className="w-full lg:w-5/12 fade-in-up">
<p className="text-xl text-slate-800 leading-relaxed font-medium mb-10">
                    BRIDGE-Civic is more than a platform. Built primarily for journalists and civil society organizations, it aims to translate data into action through three pillars:
                </p>
</div>
<div className="w-full lg:w-7/12 flex flex-col gap-4 fade-in-up delay-200">
<div className="group hover:border-[#006eb5]/30 hover:shadow-[0_8px_30px_rgb(0,110,181,0.06)] transition-all duration-500 hover:-translate-y-1 overflow-hidden flex gap-5 bg-white border-slate-200/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm gap-x-5 gap-y-5 items-start">
<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#006eb5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#006eb5] group-hover:bg-blue-50 transition-colors">
<span className="text-lg font-semibold">1</span>
</div>
<p className="text-base text-slate-700 leading-relaxed pt-3">
                        Centralization &amp; democratization of public and community datasets;
                    </p>
</div>
<div className="group bg-white border border-slate-200/60 hover:border-sky-400/30 shadow-sm hover:shadow-[0_8px_30px_rgb(56,189,248,0.06)] p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex items-start gap-5 ml-0 lg:ml-8">
<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-sky-500 group-hover:bg-sky-50 transition-colors">
<span className="text-lg font-semibold">2</span>
</div>
<p className="text-base text-slate-700 leading-relaxed pt-3">
                        Equipping residents and civic leaders with intuitive analytics and visualization tools; and
                    </p>
</div>
<div className="group hover:border-indigo-400/30 hover:shadow-[0_8px_30px_rgb(99,102,241,0.06)] transition-all duration-500 hover:-translate-y-1 overflow-hidden flex gap-5 lg:ml-16 bg-white border-slate-200/60 border rounded-2xl ml-0 pt-6 pr-6 pb-6 pl-6 relative shadow-sm gap-x-5 gap-y-5 items-start">
<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-500 group-hover:bg-indigo-50 transition-colors">
<span className="text-lg font-semibold">3</span>
</div>
<p className="text-base text-slate-700 leading-relaxed pt-3">
                        Providing personalized support so data informs real-world strategies.
                    </p>
</div>
</div>
</div>
</section>

<section className="lg:px-12 bg-white border-slate-100 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-3xl mx-auto text-center mb-20 space-y-6 fade-in-up">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">The R.E.A.L. Principles</h2>
<p className="text-base text-slate-600 leading-relaxed">
                We believe that data should be a public good that strengthens democracy, not a privilege for the few.
            </p>
<p className="text-base text-slate-600 leading-relaxed">
                We have therefore identified the R.E.A.L. principles that serve as the north star for BRIDGE-Civic. Our hope is that these principles will allow the platform to be not only a relevant solution, but also an effective and sustainable one that is adopted by the community in Philadelphia.
            </p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-3xl bg-[#fafcff] border border-blue-100 hover:border-blue-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,110,181,0.1)] fade-in-up">
<div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#006eb5] to-blue-400 rounded-2xl shadow-inner flex items-center justify-center text-white text-2xl font-semibold tracking-tight group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">R</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Relevant</h3>
<p className="text-sm text-slate-600 leading-relaxed">Anchored in Philadelphia's priorities—providing a one-stop hub for local data, actionable insights, and tools that support visualization and integration.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#fffbf5] border border-orange-100 hover:border-orange-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] fade-in-up delay-100">
<div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl shadow-inner flex items-center justify-center text-white text-2xl font-semibold tracking-tight group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">E</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Efficient</h3>
<p className="text-sm text-slate-600 leading-relaxed">Maximizes impact with minimal resource use by leveraging existing data ecosystems and partnerships—fostering shared ownership and reducing duplication.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#fdf4ff] border border-fuchsia-100 hover:border-fuchsia-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.1)] fade-in-up delay-200">
<div className="w-16 h-16 mb-6 bg-gradient-to-br from-fuchsia-500 to-pink-400 rounded-2xl shadow-inner flex items-center justify-center text-white text-2xl font-semibold tracking-tight group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">A</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Automated</h3>
<p className="text-sm text-slate-600 leading-relaxed">Streamlines data workflows through automation — reducing manual effort, increasing accuracy, and ensuring timely updates.</p>
</div>

<div className="group p-8 rounded-3xl bg-[#f0fdfa] border border-teal-100 hover:border-teal-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.1)] fade-in-up delay-300">
<div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-500 to-emerald-400 rounded-2xl shadow-inner flex items-center justify-center text-white text-2xl font-semibold tracking-tight group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">L</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Lasting &amp; Trustworthy</h3>
<p className="text-sm text-slate-600 leading-relaxed">Built for durability and community trust, with strong ethical data practices that safeguard privacy, ensure transparency, and promote responsible data use.</p>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#f0f7ff] to-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-[60px] opacity-50"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-20">

<div className="lg:w-1/2 fade-in-up">
<div className="inline-flex items-center gap-2 mb-6">
<iconify-icon className="text-lg text-[#006eb5]" icon="solar:bookmark-linear"></iconify-icon>
<span className="text-xs font-semibold text-[#006eb5] uppercase tracking-widest">Our Heritage</span>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-8 text-slate-900">A Project of the Economy League</h2>
<div className="space-y-6 text-base text-slate-600 leading-relaxed relative">
<div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#006eb5]/30 to-transparent"></div>
<p className="pl-6">
                        BRIDGE-Civic is a flagship initiative of the Economy League of Greater Philadelphia (ELGP).
                    </p>
<p className="pl-6">
                        Founded in 1909, the Economy League began as a civic leadership forum bringing together the region's most influential voices to shape the future of Greater Philadelphia. Over the decades, the organization has evolved from a policy roundtable into a nonpartisan think-and-do tank, tackling challenges from economic competitiveness to workforce development, education, and inclusive growth.
                    </p>
<p className="pl-6">
                        What has remained constant for more than a century is ELGP's role as a bridge-builder—linking business, government, nonprofit, and community leaders to turn research into action.
                    </p>
<p className="pl-6 font-medium text-slate-800">
                        Today, ELGP is recognized for combining data analysis with civic engagement to drive measurable impact. Its Research &amp; Analytics Division powers this work by producing independent, evidence-based insights that inform decision-making, elevate community voices, and hold systems accountable. BRIDGE-Civic emerges directly from this tradition: taking ELGP's legacy of convening and research and transforming it into a public good for all Philadelphians.
                    </p>
</div>
</div>

<div className="lg:w-1/2 grid grid-cols-2 gap-4 lg:gap-6 mt-10 lg:mt-0">

<div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,110,181,0.08)] hover:-translate-y-2 transition-all duration-500 group fade-in-up delay-100 flex flex-col items-center text-center">
<div className="w-20 h-20 mb-5 rounded-2xl bg-slate-100 overflow-hidden relative group-hover:scale-110 transition-transform duration-500 shadow-sm rotate-3 group-hover:rotate-0">
<img alt="Jeff Hornstein" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Jeff Hornstein</h4>
<p className="text-xs text-[#006eb5] font-medium uppercase tracking-wide">Executive Director</p>
</div>

<div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,110,181,0.08)] hover:-translate-y-2 transition-all duration-500 group fade-in-up delay-200 flex flex-col items-center text-center translate-y-6">
<div className="w-20 h-20 mb-5 rounded-2xl bg-slate-100 overflow-hidden relative group-hover:scale-110 transition-transform duration-500 shadow-sm -rotate-3 group-hover:rotate-0">
<img alt="Saloni Tandon" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Saloni Tandon</h4>
<p className="text-xs text-[#006eb5] font-medium uppercase tracking-wide">Impact Manager</p>
</div>

<div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,110,181,0.08)] hover:-translate-y-2 transition-all duration-500 group fade-in-up delay-300 flex flex-col items-center text-center">
<div className="w-20 h-20 mb-5 rounded-2xl bg-slate-100 overflow-hidden relative group-hover:scale-110 transition-transform duration-500 shadow-sm -rotate-2 group-hover:rotate-0">
<img alt="Swapnil Agarwal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Swapnil Agarwal</h4>
<p className="text-xs text-[#006eb5] font-medium uppercase tracking-wide">Dhwani RIS</p>
</div>

<div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,110,181,0.08)] hover:-translate-y-2 transition-all duration-500 group fade-in-up delay-400 flex flex-col items-center text-center translate-y-6">
<div className="w-20 h-20 mb-5 rounded-2xl bg-slate-100 overflow-hidden relative group-hover:scale-110 transition-transform duration-500 shadow-sm rotate-2 group-hover:rotate-0">
<img alt="Ziqi Zhou" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Ziqi Zhou</h4>
<p className="text-xs text-[#006eb5] font-medium uppercase tracking-wide">Research Analyst</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-100 fade-in-up">
<div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-16 border border-slate-100 flex flex-col lg:flex-row gap-16 items-center shadow-inner">
<div className="lg:w-1/2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Support &amp; Partners</h2>
<p className="text-base text-slate-600 leading-relaxed">
                    BRIDGE-Civic was made possible through the founding support of the Lenfest Institute for Journalism and the United Way of Greater Philadelphia and Southern New Jersey. Their investment underscores the critical role of data in advancing civic trust, accountability, and equity.
                </p>
</div>
<div className="lg:w-1/2 flex flex-col sm:flex-row gap-8 lg:gap-16 items-center justify-center w-full">

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col items-start gap-1 w-full sm:w-auto">
<div className="flex gap-1.5 mb-2">
<div className="w-1.5 h-10 bg-red-500 rounded-full group-hover:scale-y-110 transition-transform"></div>
<div className="w-1.5 h-10 bg-red-500 rounded-full group-hover:scale-y-110 transition-transform delay-75"></div>
<div className="w-1.5 h-10 bg-red-500 rounded-full group-hover:scale-y-110 transition-transform delay-100"></div>
<div className="w-1.5 h-10 bg-red-500 rounded-full group-hover:scale-y-110 transition-transform delay-150"></div>
<div className="w-1.5 h-10 bg-red-500 rounded-full group-hover:scale-y-110 transition-transform delay-200"></div>
</div>
<div className="text-[9px] tracking-[0.2em] text-slate-500 font-semibold uppercase leading-tight">The</div>
<div className="text-xl font-bold tracking-tight text-slate-900 uppercase leading-none">Lenfest</div>
<div className="text-[9px] tracking-[0.2em] text-slate-500 font-semibold uppercase leading-tight mt-0.5">Institute</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col items-center gap-3 w-full sm:w-auto">
<div className="flex items-center gap-2 border-b-2 border-slate-100 pb-2 group-hover:border-[#004a7a]/20 transition-colors">
<div className="text-xl font-bold tracking-tight text-[#004a7a]">United</div>
<div className="text-xl font-bold tracking-tight text-[#004a7a]">Way</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-[#006eb5] flex items-center justify-center p-0.5 group-hover:rotate-12 transition-transform">
<div className="w-full h-full bg-white rounded-full flex items-center justify-center">
<iconify-icon className="text-sm text-[#004a7a]" icon="solar:user-linear"></iconify-icon>
</div>
</div>
</div>
<div className="text-center">
<div className="text-[9px] font-semibold text-slate-500 uppercase leading-tight group-hover:text-[#004a7a] transition-colors">United Way</div>
<div className="text-[9px] font-semibold text-slate-500 uppercase leading-tight group-hover:text-[#004a7a] transition-colors">of Greater Philadelphia</div>
<div className="text-[9px] font-semibold text-slate-500 uppercase leading-tight group-hover:text-[#004a7a] transition-colors">and Southern New Jersey</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 lg:px-12 text-center relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-4xl mx-auto relative z-10 fade-in-up">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Who We Serve</h2>
<p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                BRIDGE-Civic is built for journalists, policymakers, community organizations, advocates, researchers, and residents. By centralizing data and providing the tools to interpret it, we help Philadelphians at every level engage with evidence, shape public discourse, and hold institutions accountable.
            </p>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe]/50 border-t border-slate-100">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 fade-in-up">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">How We Work</h2>
<div className="h-1 w-12 bg-[#006eb5] rounded-full mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

<div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-slate-200 border-t border-dashed border-slate-300"></div>

<div className="relative flex flex-col items-center text-center group fade-in-up delay-100">
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center z-10 mb-6 group-hover:scale-110 group-hover:shadow-md group-hover:border-[#006eb5]/30 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#006eb5] group-hover:bg-[#006eb5] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-3xl" icon="solar:widget-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Centralized Datasets</h3>
<p className="text-sm text-slate-500 leading-relaxed px-2">Bringing together public, private, and community data in one place.</p>
</div>

<div className="relative flex flex-col items-center text-center group fade-in-up delay-200 mt-0 lg:mt-8">
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center z-10 mb-6 group-hover:scale-110 group-hover:shadow-md group-hover:border-sky-500/30 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-3xl" icon="solar:wrench-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Interpretive Tools &amp; Insights</h3>
<p className="text-sm text-slate-500 leading-relaxed px-2">From Leading Indicators to policy briefs, turning numbers into narratives.</p>
</div>

<div className="relative flex flex-col items-center text-center group fade-in-up delay-300">
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center z-10 mb-6 group-hover:scale-110 group-hover:shadow-md group-hover:border-indigo-500/30 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-3xl" icon="solar:box-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Capacity Building</h3>
<p className="text-sm text-slate-500 leading-relaxed px-2">Personalized support so data can inform action.</p>
</div>

<div className="relative flex flex-col items-center text-center group fade-in-up delay-400 mt-0 lg:mt-8">
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center z-10 mb-6 group-hover:scale-110 group-hover:shadow-md group-hover:border-[#006eb5]/30 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#006eb5] group-hover:bg-[#006eb5] group-hover:text-white transition-colors duration-500">
<iconify-icon className="text-3xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Community Co-Creation</h3>
<p className="text-sm text-slate-500 leading-relaxed px-2">Building the platform with input from residents and civic leaders alike.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white px-6 lg:px-12 relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50"></div>
<div className="max-w-4xl mx-auto relative z-10 fade-in-up">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Contact Us Now</h2>
<p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
                    We are growing a coalition of partners who share our vision of a Philadelphia where data strengthens democracy.<br/>
                    Interested in collaborating?
                </p>
</div>
<div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative group">
<input className="peer w-full px-4 py-4 rounded-xl border border-slate-200 bg-transparent focus:ring-2 focus:ring-[#006eb5]/20 focus:border-[#006eb5] outline-none transition-all text-sm text-slate-900 placeholder-transparent" id="name" placeholder="Full Name *" required="" type="text"/>
<label className="absolute left-4 top-4 text-sm text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#006eb5] peer-focus:bg-white peer-focus:px-1 bg-white px-1 -top-2.5 text-xs" htmlFor="name">Full Name *</label>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-slate-300 peer-focus:text-[#006eb5] transition-colors" icon="solar:user-linear"></iconify-icon>
</div>
<div className="relative group">
<input className="peer w-full px-4 py-4 rounded-xl border border-slate-200 bg-transparent focus:ring-2 focus:ring-[#006eb5]/20 focus:border-[#006eb5] outline-none transition-all text-sm text-slate-900 placeholder-transparent" id="email" placeholder="Email Address *" required="" type="email"/>
<label className="absolute left-4 top-4 text-sm text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#006eb5] peer-focus:bg-white peer-focus:px-1 bg-white px-1 -top-2.5 text-xs" htmlFor="email">Email Address *</label>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-slate-300 peer-focus:text-[#006eb5] transition-colors" icon="solar:letter-linear"></iconify-icon>
</div>
</div>
<div className="relative group">
<select className="w-full px-4 py-4 rounded-xl border border-slate-200 bg-transparent focus:ring-2 focus:ring-[#006eb5]/20 focus:border-[#006eb5] outline-none transition-all text-sm text-slate-600 appearance-none cursor-pointer hover:border-slate-300" required="">
<option disabled="" selected="" value="">Type of User *</option>
<option value="journalist">Journalist</option>
<option value="policymaker">Policymaker</option>
<option value="organization">Community Organization</option>
<option value="resident">Resident</option>
<option value="other">Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-slate-400 pointer-events-none group-focus-within:text-[#006eb5] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group">
<textarea className="peer w-full px-4 py-4 rounded-xl border border-slate-200 bg-transparent focus:ring-2 focus:ring-[#006eb5]/20 focus:border-[#006eb5] outline-none transition-all text-sm text-slate-900 placeholder-transparent resize-none" id="query" placeholder="Your Query *" required="" rows="4"></textarea>
<label className="absolute left-4 top-4 text-sm text-slate-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#006eb5] peer-focus:bg-white peer-focus:px-1 bg-white px-1 -top-2.5 text-xs" htmlFor="query">Your Query *</label>
</div>
<button className="w-full bg-[#006eb5] hover:bg-[#005a96] text-white font-medium py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] mt-2" type="submit">
                        Submit
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-blue-50/80 text-slate-700 pt-16 pb-8 px-6 lg:px-12 border-t border-blue-100">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
<a className="hover:text-[#006eb5] transition-colors" href="#">Explore Datasets</a>
<a className="hover:text-[#006eb5] transition-colors" href="#">Impact Stories</a>
<a className="hover:text-[#006eb5] transition-colors" href="#">Help Center</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-slate-500 hover:text-[#006eb5] hover:border-[#006eb5]/30 hover:-translate-y-1 hover:shadow-sm transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-slate-500 hover:text-[#006eb5] hover:border-[#006eb5]/30 hover:-translate-y-1 hover:shadow-sm transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:share-circle-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-slate-500 hover:text-[#006eb5] hover:border-[#006eb5]/30 hover:-translate-y-1 hover:shadow-sm transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-slate-500 hover:text-[#006eb5] hover:border-[#006eb5]/30 hover:-translate-y-1 hover:shadow-sm transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 pt-8 border-t border-blue-200/50">
<div>© 2025 All rights reserved</div>
<div className="flex gap-6 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}
