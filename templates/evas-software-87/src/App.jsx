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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center text-white font-semibold">E</div>
<span className="text-white text-lg font-semibold tracking-tight">EVAS<span className="text-slate-500 font-normal">.os</span></span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm text-slate-300 hover:text-cyan-400 transition-colors" href="#">Home</a>
<a className="text-sm text-slate-300 hover:text-cyan-400 transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-300 hover:text-cyan-400 transition-colors" href="#solutions">Solutions</a>
<a className="text-sm text-slate-300 hover:text-cyan-400 transition-colors" href="#team">Team</a>
<a className="text-sm text-slate-300 hover:text-cyan-400 transition-colors" href="#company">Company</a>
<a className="text-sm px-4 py-2 border border-slate-700 rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500">
<span className="text-white cursor-pointer hover:text-cyan-400">DE</span>
<span className="w-px h-3 bg-slate-700"></span>
<span className="cursor-pointer hover:text-cyan-400">EN</span>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 tech-grid border-b border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-8 leading-tight">
                    Cloud- and vertical <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 glow-text">software solutions</span><br/>
                    for business.
                </h1>
<p className="text-lg text-slate-400 mb-6 italic border-l-2 border-cyan-500 pl-4">
                    Collaboration is at the heart of everything we do at EVAS, ensuring that our projects and products benefit our customers.
                </p>
<p className="text-lg text-slate-400 mb-8 max-w-xl">
                    To achieve this, our team works together toward a common goal, despite their different roles, to solve our customers' real-world problems with the help of software.
                </p>
<div className="flex gap-4">
<button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded text-sm font-medium transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)]">
                        Explore Solutions
                    </button>
<button className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-3 rounded text-sm font-medium transition-all">
                        Learn More
                    </button>
</div>
</div>

<div className="relative h-[400px] w-full bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-48 h-48 border border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<i className="w-16 h-16 text-cyan-400 absolute stroke-[1]" data-lucide="cloud"></i>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-slate-900/80 backdrop-blur border-t border-slate-800 p-6 flex flex-col gap-3">
<div className="w-1/3 h-2 bg-slate-700 rounded-full"></div>
<div className="w-2/3 h-2 bg-slate-800 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-950">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

<div className="bg-slate-900/30 border border-white/10 p-8 rounded-xl hover:border-cyan-500/50 transition-all hover:bg-slate-900/50 group">
<div className="flex justify-between items-start mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">Services</h2>
<i className="text-cyan-500 group-hover:scale-110 transition-transform" data-lucide="layers"></i>
</div>
<p className="text-lg text-slate-400 mb-6">
                    The challenge of turning an idea into a product and the joy of implementing it are our passion. We help you bring new ideas to life and extend existing solutions.
                </p>
</div>

<div className="bg-slate-900/30 border border-white/10 p-8 rounded-xl hover:border-cyan-500/50 transition-all hover:bg-slate-900/50 group">
<div className="flex justify-between items-start mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">Solutions</h2>
<i className="text-cyan-500 group-hover:scale-110 transition-transform" data-lucide="package"></i>
</div>
<p className="text-lg text-slate-400 mb-6">
                    Ease of use, practicality, optimal performance, and comprehensive support are the cornerstones of our products, focused on vertical solutions in healthcare.
                </p>
</div>

<div className="bg-slate-900/30 border border-white/10 p-8 rounded-xl hover:border-cyan-500/50 transition-all hover:bg-slate-900/50 group">
<div className="flex justify-between items-start mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">Team</h2>
<i className="text-cyan-500 group-hover:scale-110 transition-transform" data-lucide="users"></i>
</div>
<p className="text-lg text-slate-400 italic mb-4 border-l-2 border-slate-700 pl-3">
                    “Coming together is a beginning. Keeping together is progress. Working together is success.” <span className="text-slate-500 not-italic block text-sm mt-1">— Henry Ford</span>
</p>
<p className="text-lg text-slate-400 mb-6">
                    Whether in design, implementation, quality assurance, or customer service, particularly good solutions require special attention.
                </p>
</div>

<div className="bg-slate-900/30 border border-white/10 p-8 rounded-xl hover:border-cyan-500/50 transition-all hover:bg-slate-900/50 group">
<div className="flex justify-between items-start mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">Company</h2>
<i className="text-cyan-500 group-hover:scale-110 transition-transform" data-lucide="building-2"></i>
</div>
<p className="text-lg text-slate-400 mb-6">
                    We are a small, owner-managed company specializing in the B2B market in the development of sophisticated software solutions with ergonomic user interfaces and modern technology.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-900/20" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-8">Services</h2>
<p className="text-lg text-slate-400 mb-16 max-w-3xl">
                With our extensive experience, we can support you throughout the entire lifecycle of software solutions. Understanding the importance of changing perspectives, we offer a holistic view of software systems and the different expectations of stakeholder groups.
            </p>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-3 flex flex-col gap-4 text-slate-400 text-lg">
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
<span className="group-hover:text-cyan-400 transition-colors">All-in-one</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
<span className="group-hover:text-cyan-400 transition-colors">Cloud native</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-8 h-px bg-cyan-500"></span>
<span className="text-white font-medium">Security &amp; Data</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
<span className="group-hover:text-cyan-400 transition-colors">Connecting worlds</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
<span className="group-hover:text-cyan-400 transition-colors">Future-proof</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
<span className="group-hover:text-cyan-400 transition-colors">Mobile Apps</span>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="bg-slate-900 border border-slate-700 p-8 rounded-xl shadow-2xl relative z-10">
<div className="absolute -top-3 -left-3">
<i className="w-10 h-10 text-cyan-500 fill-cyan-950" data-lucide="shield-check"></i>
</div>
<p className="text-lg text-slate-300 mb-6 leading-relaxed">
                            Software systems must be designed to be secure from the outset in order to be resilient against cyber threats and many other security challenges during operation.
                        </p>
<p className="text-lg text-slate-300 mb-6 leading-relaxed">
                            Because transparency and traceability are essential components of secure systems, we work with established standards and are certified as <span className="text-white font-semibold">TÜV-approved IT security experts</span>.
                        </p>
<div className="bg-slate-800/50 p-4 rounded border border-slate-700 text-sm text-slate-400">
<span className="text-cyan-400 font-semibold block mb-1">Compliance Check</span>
                            We consider data protection to be one of the tasks that must be continuously addressed in the development process right from the start.
                        </div>
</div>

<div className="hidden lg:block absolute top-12 -left-8 w-8 h-px bg-cyan-500/50"></div>
</div>

<div className="lg:col-span-4 h-full min-h-[300px] bg-slate-800 rounded-xl relative overflow-hidden border border-slate-700">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgydjJIMUMxeiIgZmlsbD0iIzMzNDE1NSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border-2 border-cyan-500/20 rounded-full flex items-center justify-center">
<div className="w-24 h-24 border-2 border-cyan-500/40 rounded-full flex items-center justify-center">
<i className="w-10 h-10 text-cyan-400" data-lucide="lock"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="solutions">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-8">Solutions</h2>
<p className="text-lg text-slate-400 mb-16 max-w-3xl italic">
                EVAS has been developing comprehensive software solutions for many years, with a focus on the healthcare sector. We have extensive domain expertise and practical experience.
            </p>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-3 h-full min-h-[400px] bg-slate-800 rounded-xl relative overflow-hidden border border-slate-700 order-2 lg:order-1">
<div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>

<div className="absolute top-8 left-4 right-4 bottom-0 bg-slate-950 rounded-t-lg border-t border-l border-r border-slate-700 p-4">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="space-y-3">
<div className="h-2 w-1/2 bg-slate-800 rounded"></div>
<div className="h-24 w-full bg-slate-800/50 rounded border border-slate-800"></div>
<div className="h-24 w-full bg-slate-800/50 rounded border border-slate-800"></div>
</div>
</div>
</div>

<div className="lg:col-span-6 order-1 lg:order-2">
<div className="mb-8">
<h3 className="text-xl text-white font-medium mb-4">SME Healthcare Management</h3>
<p className="text-lg text-slate-400 mb-6">
                            In small and medium-sized enterprises (SMEs), management or senior staff are often responsible for staff planning as an additional task. Therefore, software for this target group must be particularly easy to set up and use.
                        </p>
<p className="text-lg text-slate-400 mb-6">
                            With our solution named <span className="text-cyan-400 font-semibold">"ploydo"</span>, organisations can quickly and easily manage related tasks.
                            <a className="text-cyan-500 underline decoration-cyan-500/30 hover:decoration-cyan-500 underline-offset-4 ml-1" href="#">visit ploydo.com</a>
</p>
</div>

<div className="bg-slate-900/50 border border-slate-700 p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:border-blue-500/30 transition-all mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="relative z-10 flex flex-col items-center scale-90 sm:scale-100 select-none">
<div className="flex items-end justify-center relative">

<span className="text-6xl sm:text-7xl font-bold text-slate-200 tracking-tighter leading-none mb-1">plo</span>

<div className="relative w-16 h-24 sm:w-20 sm:h-28 mx-1 -mb-1">
<svg className="w-full h-full" viewbox="0 0 100 130">

<path d="M20 15 H80 L82 35" fill="none" stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
<path d="M20 35 L18 15" fill="none" stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>

<rect className="fill-slate-500" height="10" rx="2" width="8" x="32" y="10"></rect>
<rect className="fill-slate-500" height="10" rx="2" width="8" x="60" y="10"></rect>


<circle className="fill-blue-600" cx="50" cy="50" r="10"></circle>

<path className="fill-blue-600" d="M25 45 Q 50 80 50 85 Q 50 110 38 130 L 32 125 Q 42 105 42 85 Q 42 75 75 45 L 70 40 Q 42 65 35 60 Z"></path>
</svg>
</div>

<span className="text-6xl sm:text-7xl font-bold text-slate-200 tracking-tighter leading-none mb-1">do</span>
</div>

<div className="w-full text-right pr-4 sm:pr-8 mt-1">
<span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-widest">Employee App</span>
</div>
</div>
</div>

<div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden mb-12">

<div className="flex border-b border-slate-700 bg-slate-950/50">
<div className="px-4 py-3 bg-cyan-900/20 border-b-2 border-cyan-500 text-cyan-400 text-xs font-medium uppercase tracking-wider">Staff Planning</div>
<div className="px-4 py-3 text-slate-500 text-xs font-medium uppercase tracking-wider hover:text-slate-300 cursor-pointer">Time Recording</div>
<div className="px-4 py-3 text-slate-500 text-xs font-medium uppercase tracking-wider hover:text-slate-300 cursor-pointer">Absence Mgmt</div>
</div>
<div className="p-6">
<h4 className="text-white font-medium mb-4">Key Features:</h4>
<ul className="space-y-4">
<li className="flex gap-3 text-slate-400">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-1" data-lucide="check-circle"></i>
<span><strong className="text-slate-200">Easy shift scheduling:</strong> Organize shift schedules for your team in less time with our simple three-step process.</span>
</li>
<li className="flex gap-3 text-slate-400">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-1" data-lucide="check-circle"></i>
<span><strong className="text-slate-200">Flexible Notifications:</strong> Choose from four different methods, from the employee app to email.</span>
</li>
<li className="flex gap-3 text-slate-400">
<i className="w-5 h-5 text-cyan-500 shrink-0 mt-1" data-lucide="check-circle"></i>
<span><strong className="text-slate-200">Automated accounts:</strong> Focus on creating work schedules—working time accounts are managed automatically.</span>
</li>
</ul>
</div>
</div>

<div className="w-full h-px bg-slate-800 my-12"></div>

<div className="mb-6">
<h3 className="text-xl text-white font-medium mb-4">Pharmacy &amp; Hazardous Material Management</h3>
<p className="text-lg text-slate-400 mb-8">
                            Safety in handling hazardous substances is paramount in pharmacies. Our specialized software ensures you meet all legal requirements effortlessly.
                        </p>

<div className="bg-slate-900/50 border border-slate-700 p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:border-orange-500/30 transition-all mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="relative z-10 flex flex-col items-center sm:items-start scale-90 sm:scale-100 select-none">
<div className="flex items-center font-bold text-4xl sm:text-5xl text-slate-200 tracking-tighter lowercase font-[Inter]">
<span>gefahrst</span>

<div className="relative w-12 h-12 sm:w-14 sm:h-14 mx-1 flex items-center justify-center">

<div className="absolute inset-0 border-[3px] border-slate-600 rounded-xl rotate-[15deg] group-hover:border-slate-500 transition-colors"></div>

<div className="absolute inset-1.5 border-[3px] border-orange-500 rounded-full flex items-center justify-center bg-slate-900">

<i className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500 fill-orange-500" data-lucide="flame"></i>
</div>
</div>
<span>ff</span>
</div>
<div className="font-bold text-2xl sm:text-3xl text-slate-200 tracking-tight lowercase -mt-1 ml-1">programm</div>
<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-slate-500 mt-2 ml-1.5 group-hover:text-slate-400 transition-colors">für die apothekenpraxis</div>
</div>
</div>
<p className="text-lg text-slate-400 mb-6">
                            The <span className="text-orange-400 font-semibold">Gefahrstoff-Programm</span> helps you manage safety data sheets, risk assessments, and operating instructions in one secure place.
                        </p>
<a className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-400 transition-colors" href="#">
                            View product details <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="lg:col-span-3 order-3 flex flex-col gap-4 text-slate-400 text-lg lg:pt-8 relative">

<div className="hidden lg:block absolute top-12 -left-8 w-8 h-px bg-slate-700"></div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
<span className="text-white font-medium">Staff scheduling</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer pl-4 border-l border-slate-800">
<span className="hover:text-cyan-400 transition-colors">Safety &amp; documentation</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer pl-4 border-l border-slate-800">
<span className="hover:text-cyan-400 transition-colors">Accounting solutions</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer pl-4 border-l border-slate-800">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
<span className="text-white font-medium">Hazardous Mgmt</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-900/20" id="team">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-8">Team</h2>
<p className="text-lg text-slate-400 mb-16 max-w-3xl border-l-2 border-cyan-500 pl-4">
                Collaboration is at the heart of everything we do at EVAS, ensuring that our projects and products are successful. To this end, our team members work together toward a common goal.
            </p>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-3 flex flex-col gap-4 text-slate-400 text-lg">
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-8 h-px bg-cyan-500"></span>
<span className="text-white font-medium">Curiosity</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
<span className="group-hover:text-cyan-400 transition-colors">Standards vs New</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
<span className="group-hover:text-cyan-400 transition-colors">Our Achievement</span>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="hidden lg:block absolute top-6 -left-8 w-8 h-px bg-cyan-500/50"></div>
<div className="bg-slate-900 border border-slate-700 p-8 rounded-xl shadow-lg">
<p className="text-xl text-white font-medium mb-6">
                            Our team demonstrates its professional curiosity and willingness to learn on a daily basis.
                        </p>
<p className="text-lg text-slate-400 mb-6">
                            Whether in design, implementation, quality assurance, or customer service, particularly good solutions require special attention, even for inconspicuous details.
                        </p>
<div className="p-4 bg-gradient-to-r from-cyan-900/20 to-transparent border-l-2 border-cyan-500">
<p className="text-slate-300">This commitment is rewarded with user acceptance of the solutions.</p>
</div>
</div>
</div>

<div className="lg:col-span-4 h-full min-h-[300px] bg-slate-800 rounded-xl relative overflow-hidden border border-slate-700 group">
<div className="absolute inset-0 bg-slate-900 flex flex-wrap gap-1 p-4 content-center justify-center opacity-50">

<div className="w-12 h-12 rounded bg-slate-700"></div>
<div className="w-12 h-12 rounded bg-cyan-900"></div>
<div className="w-12 h-12 rounded bg-slate-700"></div>
<div className="w-12 h-12 rounded bg-slate-700"></div>
<div className="w-12 h-12 rounded bg-slate-700"></div>
<div className="w-12 h-12 rounded bg-blue-900"></div>
<div className="w-12 h-12 rounded bg-slate-700"></div>
<div className="w-12 h-12 rounded bg-slate-700"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-cyan-400/80 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" data-lucide="users"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="company">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-8">Company</h2>
<p className="text-lg text-slate-400 mb-16 max-w-3xl italic">
                We use technology to create added value for you, our customers. That is what drives us.
            </p>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-3 flex flex-col gap-4 text-slate-400 text-lg">
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-8 h-px bg-cyan-500"></span>
<span className="text-white font-medium">Management</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
<span className="group-hover:text-cyan-400 transition-colors">Location</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></span>
<span className="group-hover:text-cyan-400 transition-colors">Microsoft Partner</span>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="hidden lg:block absolute top-6 -left-8 w-8 h-px bg-cyan-500/50"></div>
<div className="bg-slate-900 border border-slate-700 p-8 rounded-xl shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24 text-white" data-lucide="history"></i>
</div>
<p className="text-lg text-slate-300 mb-6 font-medium">
                           EVAS was founded in 1989 as a civil law partnership (GbR) and has been operating as a limited partnership (GmbH &amp; Co. KG) since 2012.
                       </p>
<div className="border-t border-slate-800 pt-6 mt-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-500 font-bold">CS</div>
<div>
<h4 className="text-white font-medium">Carsten Schult</h4>
<p className="text-sm text-slate-500">Managing Partner</p>
</div>
</div>
<p className="text-lg text-slate-400">
                               He regularly works as a consultant and project manager and is very familiar with the challenges of software development thanks to more than twenty years of practical experience.
                           </p>
</div>
</div>
</div>

<div className="lg:col-span-4 h-full min-h-[300px] bg-slate-800 rounded-xl relative overflow-hidden border border-slate-700">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
<div className="absolute inset-0 flex items-center justify-center p-8">

<div className="w-full h-full border border-slate-600 rounded grid grid-cols-4 grid-rows-4 gap-1 p-1">
<div className="col-span-2 row-span-2 bg-slate-700/50 rounded"></div>
<div className="col-span-1 row-span-1 bg-cyan-500/20 rounded border border-cyan-500/50"></div>
<div className="col-span-1 row-span-3 bg-slate-700/50 rounded"></div>
<div className="col-span-3 row-span-1 bg-slate-700/50 rounded mt-auto"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-900/50" id="contact">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-12">Contact</h2>
<div className="grid lg:grid-cols-2 gap-16">

<div>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-400 mb-2">E-Mail</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
<textarea className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" rows="6"></textarea>
</div>
<div className="flex items-center gap-3">
<input className="w-4 h-4 bg-slate-950 border-slate-700 rounded text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-900" id="privacy" type="checkbox"/>
<label className="text-sm text-slate-500" htmlFor="privacy">I agree to the <a className="underline hover:text-cyan-400" href="#">data privacy policy</a>.</label>
</div>
<button className="bg-slate-100 hover:bg-white text-slate-900 px-8 py-3 rounded font-medium transition-colors border-2 border-transparent hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" type="button">
                            Confirm request
                        </button>
</form>
</div>

<div className="h-full min-h-[400px] bg-slate-800 rounded-xl relative overflow-hidden border border-slate-700 grayscale hover:grayscale-0 transition-all duration-700">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSIjMGUxNzJhIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkM9Ik0wIDQwaDQwTTAgMGg0MCIgc3Ryb2tlPSIjM2IzYjNiIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9zdmc+')]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<div className="w-4 h-4 bg-cyan-500 rounded-full animate-ping absolute top-0 left-1/2 -translate-x-1/2"></div>
<i className="w-10 h-10 text-cyan-400 fill-cyan-900/50 relative z-10" data-lucide="map-pin"></i>
<p className="mt-4 text-white font-medium bg-slate-900/80 px-3 py-1 rounded backdrop-blur">Ruesselsheim am Main</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/10 py-16 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div className="flex gap-6 max-w-sm">
<div className="w-16 h-16 bg-slate-800 rounded flex items-center justify-center shrink-0 border border-slate-700">
<i className="w-8 h-8 text-cyan-500" data-lucide="box"></i>
</div>
<div className="text-sm text-slate-400">
<strong className="text-white block mb-1">EVAS Softwarelösungen GmbH &amp; Co. KG</strong>
                    Eisenstr. 2-4<br/>
                    65428 Ruesselsheim am Main<br/>
                    Germany
                </div>
</div>
<div className="flex gap-6 text-sm">
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">Data privacy</a>
<span className="text-slate-700">|</span>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">Imprint</a>
</div>
</div>
</footer>


    </>
  );
}
