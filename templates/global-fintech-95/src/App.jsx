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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="flex items-center justify-between px-6 py-5 max-w-[90rem] mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-50">
<div className="flex items-center gap-10">
<a className="text-3xl font-semibold tracking-tight lowercase" href="#">deel.</a>
<div className="hidden lg:flex items-center gap-6 text-lg font-medium text-gray-700">
<a className="hover:text-gray-900 transition-colors flex items-center gap-1" href="#">Platform <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i></a>
<a className="hover:text-gray-900 transition-colors flex items-center gap-1" href="#">Solutions <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i></a>
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-gray-900 transition-colors flex items-center gap-1" href="#">Resources <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i></a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 border border-gray-300 rounded-full" href="#">Log in</a>
<a className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors" href="#">Book a demo</a>
<button className="lg:hidden p-2"><i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i></button>
</div>
</nav>

<div className="max-w-[90rem] mx-auto px-4 md:px-6 mb-24 mt-2">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[600px]">

<div className="bg-[#14052C] rounded-[2rem] p-8 md:p-14 flex flex-col items-start justify-center text-white relative overflow-hidden h-full">
<a className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A1B44] text-sm font-medium hover:bg-[#352355] transition-colors mb-8" href="#">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10"><i className="w-3 h-3 text-white stroke-[1.5]" data-lucide="arrow-right"></i></span>
                    Skip the sales call. Hire your first employee now.
                    <i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-right"></i>
</a>
<h1 className="text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] font-semibold tracking-tight mb-6">
                    Hire, manage, pay, &amp; equip anyone, <br/>
<span className="text-[#A17BFF]">anywhere.</span>
</h1>
<p className="text-xl text-gray-300 mb-10 max-w-md font-medium leading-relaxed">
                    Payroll, HR, IT, and immigration for every worker type. All in one platform from one trusted partner.
                </p>
<a className="bg-[#5B2CBA] text-white px-6 py-3.5 rounded-full text-lg font-medium hover:bg-[#4A2299] transition-colors flex items-center gap-2" href="#">
                    Book a demo <i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-right"></i>
</a>
</div>

<div className="bg-gray-200 rounded-[2rem] relative overflow-hidden h-[400px] lg:h-full group">
<img alt="Worker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-10 left-8 right-8 flex gap-4">

<div className="bg-[#1C2A4A]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex-1 shadow-xl">
<div className="flex items-center gap-2 bg-black/40 w-fit px-3 py-1 rounded-md mb-3">
<i className="w-4 h-4 text-white fill-white stroke-[1.5]" data-lucide="zap"></i>
<span className="text-xs text-white font-medium">Beam</span>
</div>
<p className="text-2xl font-semibold tracking-tight text-white mb-1">480+ hrs</p>
<p className="text-sm text-gray-300 font-medium">Saved monthly on IT admin</p>
</div>

<div className="bg-[#1A335D]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex-1 shadow-xl">
<p className="text-2xl font-semibold tracking-tight text-white mb-1">100%</p>
<p className="text-sm text-gray-300 font-medium leading-tight mt-3">compliant offboarding + IT asset retrieval</p>
</div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-32 pt-10">
<p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">Trusted by 40,000+ companies from startups to enterprise</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">

<span className="text-2xl font-semibold tracking-tight font-sans text-gray-800">INTUIT</span>
<span className="text-2xl font-semibold tracking-tight flex items-center gap-1 text-gray-800"><div className="w-6 h-6 rounded-full bg-gray-800"></div> reddit</span>
<span className="text-2xl font-medium tracking-tight text-gray-800">Uber</span>
<span className="text-2xl font-medium tracking-tight text-gray-800">coinbase</span>
<span className="text-2xl font-semibold tracking-tight text-gray-800">citi</span>
<span className="text-2xl font-semibold tracking-tight text-gray-800">ramp</span>
<span className="text-2xl font-medium tracking-tight text-gray-800 uppercase">Lucid</span>
<span className="text-2xl font-semibold tracking-tight italic text-gray-800 uppercase">Puma</span>
<span className="text-xl font-medium tracking-tight text-gray-800 uppercase">Lockheed Martin</span>
<span className="text-2xl font-semibold tracking-tight text-gray-800">Zillow</span>
<span className="text-2xl font-semibold tracking-tight text-gray-800 flex items-center gap-1">Linked<div className="bg-gray-800 text-white text-sm px-1 rounded">in</div></span>
<span className="text-2xl font-semibold tracking-tight text-gray-800">verizon</span>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-32">
<div className="mb-10">
<h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">What Deel does</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight">The Global People Platform</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#F5F6F8] rounded-[2rem] p-8 md:p-10 flex flex-col group cursor-pointer h-[340px] relative overflow-hidden">
<h4 className="text-2xl font-semibold tracking-tight mb-3">Deel Payroll</h4>
<p className="text-lg text-gray-600 font-medium mb-8 max-w-[200px]">Local and global payroll, your way.</p>

<div className="mt-auto bg-white rounded-xl p-4 shadow-sm border border-gray-100 w-4/5">
<div className="flex items-center gap-2 mb-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-blue-500"></div>
<div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
<div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white"></div>
</div>
<span className="text-xs font-semibold">Acme Inc.</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md w-fit mb-2">
<i className="w-3 h-3 fill-green-600 text-white stroke-[1.5]" data-lucide="check-circle-2"></i> Payroll complete
                    </div>
<p className="text-2xl font-semibold tracking-tight">$800,450<span className="text-sm text-gray-400">.30</span></p>
</div>
<i className="absolute bottom-8 right-8 w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</div>

<div className="bg-[#F5F6F8] rounded-[2rem] p-8 md:p-10 flex flex-col group cursor-pointer h-[340px] relative">
<h4 className="text-2xl font-semibold tracking-tight mb-3">Deel HR</h4>
<p className="text-lg text-gray-600 font-medium mb-8 max-w-[200px]">One HR system for every worker.</p>
<i className="absolute bottom-8 right-8 w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</div>

<div className="bg-[#F5F6F8] rounded-[2rem] p-8 md:p-10 flex flex-col group cursor-pointer h-[340px] relative">
<h4 className="text-2xl font-semibold tracking-tight mb-3">Deel IT</h4>
<p className="text-lg text-gray-600 font-medium mb-8 max-w-[200px]">Devices and support, anywhere.</p>
<i className="absolute bottom-8 right-8 w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</div>

<div className="bg-[#F5F6F8] rounded-[2rem] p-8 md:p-10 flex flex-col group cursor-pointer h-[340px] relative">
<h4 className="text-2xl font-semibold tracking-tight mb-3">Deel Benefits</h4>
<p className="text-lg text-gray-600 font-medium mb-8 max-w-[250px]">Easily set up plans, handle enrollment, sync deductions, and more.</p>
<i className="absolute bottom-8 right-8 w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</div>

<div className="bg-[#F5F6F8] rounded-[2rem] p-8 md:p-10 flex flex-col group cursor-pointer h-[340px] relative">
<h4 className="text-2xl font-semibold tracking-tight mb-3">Deel Hire</h4>
<p className="text-lg text-gray-600 font-medium mb-8 max-w-[200px]">Hire anywhere in days, fully compliant.</p>
<i className="absolute bottom-8 right-8 w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</div>

<div className="bg-[#F5F6F8] rounded-[2rem] p-8 md:p-10 flex flex-col group cursor-pointer h-[340px] relative">
<h4 className="text-2xl font-semibold tracking-tight mb-3">Deel Mobility</h4>
<p className="text-lg text-gray-600 font-medium mb-8 max-w-[200px]">Visas handled in-house, end to end.</p>
<i className="absolute bottom-8 right-8 w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 mb-40 text-center">
<h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Deel Speed</h2>
<h3 className="text-4xl font-semibold tracking-tight mb-10">Accomplish more in less time</h3>

<div className="flex flex-wrap justify-center gap-2 mb-16">
<button className="bg-[#EAF2FF] text-[#0A2540] px-6 py-2.5 rounded-full text-lg font-semibold flex items-center gap-2 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="globe-2"></i> Deel Payroll
            </button>
<button className="text-gray-600 hover:bg-gray-100 px-6 py-2.5 rounded-full text-lg font-medium flex items-center gap-2 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bar-chart-2"></i> Deel HR
            </button>
<button className="text-gray-600 hover:bg-gray-100 px-6 py-2.5 rounded-full text-lg font-medium flex items-center gap-2 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="laptop"></i> Deel IT
            </button>
<button className="text-gray-600 hover:bg-gray-100 px-6 py-2.5 rounded-full text-lg font-medium flex items-center gap-2 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user-plus"></i> Deel Hire
            </button>
</div>

<div className="relative mt-8">
<div className="hidden md:block absolute top-[14px] left-[10%] right-[10%] border-t-[3px] border-dotted border-gray-200 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-gray-300 ring-8 ring-white mb-6"></div>
<h4 className="text-xl font-semibold tracking-tight mb-4">Today</h4>
<div className="bg-[#EAF2FF] text-[#0A2540] p-6 rounded-2xl w-full h-full flex items-center justify-center min-h-[100px]">
<p className="text-lg font-medium leading-tight">Set up payroll countries and owners</p>
</div>
</div>

<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-gray-300 ring-8 ring-white mb-6"></div>
<h4 className="text-xl font-semibold tracking-tight mb-4">Hours later</h4>
<div className="bg-[#EAF2FF] text-[#0A2540] p-6 rounded-2xl w-full h-full flex items-center justify-center min-h-[100px]">
<p className="text-lg font-medium leading-tight">Configure pay rules, approvals, and cutoffs</p>
</div>
</div>

<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-gray-300 ring-8 ring-white mb-6"></div>
<h4 className="text-xl font-semibold tracking-tight mb-4">Tomorrow</h4>
<div className="bg-[#EAF2FF] text-[#0A2540] p-6 rounded-2xl w-full h-full flex items-center justify-center min-h-[100px]">
<p className="text-lg font-medium leading-tight">Everyone gets paid on time</p>
</div>
</div>
</div>
</div>
</div>

<div className="px-2 md:px-4 mb-32">
<div className="bg-[#242424] text-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-14 max-w-[90rem] mx-auto flex flex-col items-start overflow-hidden relative">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12 max-w-3xl">
                One modern experience for today's workforce
            </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
<div className="bg-[#2D2D2D] rounded-2xl p-8">
<p className="text-lg text-gray-300 font-medium mb-6 leading-relaxed">
<span className="font-semibold text-white">150+ currencies supported,</span> including crypto, for centralized compliant payroll.
                    </p>
<a className="text-white font-medium flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">Learn more <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i></a>
</div>
<div className="bg-[#2D2D2D] rounded-2xl p-8">
<p className="text-lg text-gray-300 font-medium mb-6 leading-relaxed">
<span className="font-semibold text-white">Actionable AI</span> for approving hiring, payroll, IT flows on Deel. More scaling, not headcount.
                    </p>
<a className="text-white font-medium flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">Learn more <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i></a>
</div>
<div className="bg-[#2D2D2D] rounded-2xl p-8">
<p className="text-lg text-gray-300 font-medium mb-6 leading-relaxed">
<span className="font-semibold text-white">2,000+ local experts</span> combined with in-house compliance logic and real-time AI.
                    </p>
<a className="text-white font-medium flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">Book a demo <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="w-full h-[500px] bg-gray-800 rounded-[2rem] relative overflow-hidden mb-8 group">
<img alt="Team working" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>

<div className="absolute top-1/2 left-[10%] -translate-y-1/2 flex flex-col gap-4 z-10 w-80">

<div className="bg-[#FFE5D4] rounded-2xl p-5 shadow-2xl transform transition-transform hover:-translate-y-1 text-gray-900">
<p className="text-lg font-semibold mb-3">Trigger</p>
<div className="bg-white rounded-lg p-2.5 flex items-center gap-3 text-sm font-medium">
<span className="text-gray-500">If</span>
<div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded border border-gray-100">
<div className="w-5 h-5 rounded-full bg-blue-200 overflow-hidden"><img alt="avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=1"/></div>
                                Employee start date
                            </div>
<span className="text-gray-500">is</span>
<span className="bg-gray-50 px-2 py-1 rounded border border-gray-100">Today</span>
</div>
</div>

<div className="bg-[#F2E8FF] rounded-2xl p-5 shadow-2xl ml-8 transform transition-transform hover:-translate-y-1 text-gray-900">
<p className="text-lg font-semibold mb-4">Actions</p>
<div className="space-y-3">
<div className="flex items-center gap-4 bg-white rounded-xl p-3 shadow-sm">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center"><i className="w-4 h-4 text-gray-700 stroke-[1.5]" data-lucide="chrome"></i></div>
<span className="text-base font-medium">Send meeting invite</span>
</div>
<div className="flex items-center gap-4 bg-white rounded-xl p-3 shadow-sm">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"><i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="book-open"></i></div>
<span className="text-base font-medium">Assign learning courses</span>
</div>
<div className="flex items-center gap-4 bg-white rounded-xl p-3 shadow-sm">
<div className="w-8 h-8 rounded-full bg-[#5B2CBA] flex items-center justify-center"><i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="message-square"></i></div>
<span className="text-base font-medium">Check in after week 1</span>
</div>
<div className="flex items-center gap-4 bg-white rounded-xl p-3 shadow-sm">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"><i className="w-4 h-4 text-gray-700 stroke-[1.5]" data-lucide="building-2"></i></div>
<span className="text-base font-medium">Set reminder for payroll</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full bg-[#2D2D2D] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-md">
<p className="text-xl text-gray-300 font-medium mb-6 leading-relaxed">
<span className="font-semibold text-white">Built on in-house infrastructure,</span> with single payroll engines, owned entities, and more.
                    </p>
<a className="text-white font-medium flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">Learn more <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i></a>
</div>

<div className="flex-1 w-full flex flex-wrap gap-2 justify-end opacity-70">
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-green-400 stroke-[1.5]" data-lucide="shield-check"></i> Endpoint Protection</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-blue-400 stroke-[1.5]" data-lucide="users"></i> PEO</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-purple-400 stroke-[1.5]" data-lucide="globe"></i> EOR</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-gray-400 stroke-[1.5]" data-lucide="laptop"></i> Device Lifecycle Management</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-pink-400 stroke-[1.5]" data-lucide="heart"></i> Deel Benefits</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-orange-400 stroke-[1.5]" data-lucide="plane"></i> Deel Mobility</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-yellow-400 stroke-[1.5]" data-lucide="database"></i> HRIS</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-blue-300 stroke-[1.5]" data-lucide="smartphone"></i> Mobile Device Management</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-green-300 stroke-[1.5]" data-lucide="file-check"></i> Background Checks</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-gray-300 stroke-[1.5]" data-lucide="briefcase"></i> Contractor</div>
<div className="flex items-center gap-1.5 bg-[#3D3D3D] px-3 py-1.5 rounded-md text-xs font-medium"><i className="w-3 h-3 text-indigo-400 stroke-[1.5]" data-lucide="layers"></i> Workforce Planning</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-32 overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
<div className="max-w-xl">
<h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Testimonials</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Our customer reviews</h3>
</div>
<p className="text-xl text-gray-600 max-w-md font-medium leading-relaxed">
                Discover the insights from customers regarding their experiences with Deel.
            </p>
</div>
<div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">

<div className="min-w-[80%] md:min-w-[60%] snap-center flex flex-col">
<div className="bg-gray-900 rounded-[2rem] aspect-video w-full mb-8 relative overflow-hidden group cursor-pointer">
<img alt="Revolut office" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<div className="w-20 h-24 border-2 border-[#ff7b59] rounded-xl mb-4 hidden md:block"></div>
<h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-white max-w-lg text-center px-4 leading-tight">What has Deel helped Revolut achieve?</h4>
</div>
<button className="absolute bottom-6 left-6 w-14 h-14 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black transition-colors">
<i className="w-6 h-6 text-white ml-1 fill-white stroke-[1.5]" data-lucide="play"></i>
</button>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<h5 className="text-2xl font-semibold tracking-tight mb-2">Revolut</h5>
<p className="text-lg text-gray-600 font-medium">See how the Revolut team has hired 150+ workers and relocated 10+ people through Deel.</p>
</div>
<a className="shrink-0 flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors whitespace-nowrap" href="#">
                        Learn more <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="min-w-[80%] md:min-w-[60%] snap-center flex flex-col opacity-50 blur-[2px]">
<div className="bg-gray-200 rounded-[2rem] aspect-video w-full mb-8 relative overflow-hidden">
</div>
</div>
</div>

<div className="flex justify-center gap-3 mt-8">
<div className="w-2.5 h-2.5 rounded-full border border-[#5B2CBA] bg-transparent flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#5B2CBA] rounded-full"></div></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-32 text-center flex flex-col items-center">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-20 max-w-3xl leading-tight">
            Deel makes growing remote and international teams effortless
        </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mb-16">
<div className="flex flex-col items-center">
<p className="text-6xl md:text-[5rem] font-semibold tracking-tighter mb-4 text-gray-900 leading-none">150+</p>
<p className="text-lg font-medium text-gray-600">countries</p>
</div>
<div className="flex flex-col items-center">
<p className="text-6xl md:text-[5rem] font-semibold tracking-tighter mb-4 text-gray-900 leading-none">40,000+</p>
<p className="text-lg font-medium text-gray-600">customers</p>
</div>
<div className="flex flex-col items-center">
<p className="text-6xl md:text-[5rem] font-semibold tracking-tighter mb-4 text-gray-900 leading-none">$20B+</p>
<p className="text-lg font-medium text-gray-600 text-center max-w-[200px]">compliantly processed global payroll</p>
</div>
<div className="flex flex-col items-center">
<p className="text-6xl md:text-[5rem] font-semibold tracking-tighter mb-4 text-gray-900 leading-none">90+</p>
<p className="text-lg font-medium text-gray-600 text-center max-w-[200px]">NPS for enterprise customers</p>
</div>
</div>
<a className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors" href="#">
            Get a free 30-minute demo
        </a>
</div>

<footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-gray-800 pb-12">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
<i className="w-8 h-8 text-white fill-white stroke-[1.5]" data-lucide="star"></i>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight">Excellent global payroll</h4>
<a className="text-lg text-gray-400 font-medium underline hover:text-white transition-colors" href="#">4.8/5 based on 5,655+ reviews</a>
</div>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

<div>
<p className="text-sm font-semibold mb-2">Jeremy C.</p>
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
</div>
<p className="text-base text-gray-300 font-medium leading-relaxed line-clamp-4">The best payroll solution, period. We've used every payroll solution - Gusto, Rippling, you name it - Deel is the only one that is...</p>
</div>

<div>
<p className="text-sm font-semibold mb-2">Kanshobi S.</p>
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
</div>
<p className="text-base text-gray-300 font-medium leading-relaxed line-clamp-4">Simply the best platform for global payroll. Admin that used to take days now takes 5 minutes.</p>
</div>

<div>
<p className="text-sm font-semibold mb-2">Sparsh S.</p>
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 text-[#00B67A] fill-[#00B67A] stroke-[1.5]" data-lucide="star"></i>
</div>
<p className="text-base text-gray-300 font-medium leading-relaxed line-clamp-4">I love the money transfer feature. With one click you can transfer money to any bank in the world.</p>
</div>
</div>

<div className="flex flex-wrap gap-8 mb-16 border-b border-gray-800 pb-12 text-sm font-semibold">
<a className="hover:text-gray-300 transition-colors" href="#">About us</a>
<a className="hover:text-gray-300 transition-colors" href="#">Leadership team</a>
<a className="hover:text-gray-300 transition-colors" href="#">Careers</a>
<a className="hover:text-gray-300 transition-colors" href="#">Pricing</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
<div>
<h5 className="text-base font-semibold mb-6">Solutions</h5>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel Payroll</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel HR</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel IT</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel Benefits</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel Hire</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel Mobility</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel Embedded</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel Services</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">All Solutions</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-semibold mb-6">Deel Platform</h5>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">HR Platform</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel AI</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">White Label</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel API</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Integrations</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Workflows</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2" href="#">Platform Status <span className="w-2 h-2 rounded-full bg-green-500"></span></a></li>
</ul>
</div>
<div>
<h5 className="text-base font-semibold mb-6">Why Deel?</h5>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium leading-tight block" href="#">Built on in-house infrastructure</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Customer stories</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Compare Deel</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Security</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Trust Center</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Become a partner</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Become an affiliate</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">G2 customer reviews</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-semibold mb-6">Resources</h5>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Blog</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium leading-tight block" href="#">Templates And Guides</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium leading-tight block" href="#">Global Hiring Guides</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Webinars &amp; Events</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium leading-tight block" href="#">Global Work Glossary</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Deel Impact</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium leading-tight block" href="#">Job Description Templates</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Free HR tools</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">API Documentation</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Help Center</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Press</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-semibold mb-6">Customers</h5>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Revolut</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">BCG</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">FICO</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Puma</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Outreach</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Zip Co</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors font-medium" href="#">Directional Pizza</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-t border-b border-gray-800 mb-8 gap-8">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-sm">
                    Get the latest insights on today's world of work delivered straight to your inbox.
                </h3>
<div className="w-full md:w-auto max-w-md">
<div className="flex bg-white rounded-full p-1.5 focus-within:ring-2 ring-[#5B2CBA] transition-all mb-3">
<input className="w-full bg-transparent border-none outline-none text-base px-4 text-gray-900 placeholder:text-gray-500 font-medium" placeholder="What's your e-mail?" type="email"/>
<button className="bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
<p className="text-xs text-gray-500 font-medium">
                        I confirm that I have read <a className="text-white hover:underline" href="#">Deel's Privacy Policy</a> and agree with it.
                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-gray-400 font-medium">
<p>© Copyright 2024. All Rights Reserved.</p>
<div className="flex flex-wrap gap-x-6 gap-y-2">
<a className="hover:text-white transition-colors" href="#">LLM Info</a>
<a className="hover:text-white transition-colors" href="#">Disclaimer</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
<a className="hover:text-white transition-colors" href="#">Legal Hub</a>
<a className="hover:text-white transition-colors" href="#">Whistleblower Policy</a>
<a className="hover:text-white transition-colors" href="#">Disclosures</a>
<a className="hover:text-white transition-colors" href="#">Licenses and Compliance</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
