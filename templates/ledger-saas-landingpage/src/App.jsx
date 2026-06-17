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
      

<nav className="fixed -translate-x-1/2 w-full max-w-4xl z-50 pr-4 pl-4 top-6 left-1/2">
<div className="flex bg-[#000000] border-white/10 border rounded-full pt-2 pr-3 pb-2 pl-2 shadow-xl backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center bg-center w-[140px] h-[40px] bg-[url(https://cdn.midjourney.com/157d0411-d6a6-4bee-b082-5167e8459074/0_1.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#">Home</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#">About</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#">Support</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#">Download</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors text-sm font-semibold text-neutral-400 font-sans hidden sm:block" href="#">Login</a>
<button className="group shadow-[#FF7F50]/30 hover:shadow-[#FF7F50]/50 transition-all duration-300 overflow-hidden cursor-pointer text-xs font-semibold text-white bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-lg" style={{boxShadow: '0 10px 25px -10px rgba(255, 127, 80, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -2px 4px rgba(0,0,0,0.1)', borderRadius: '9999px'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative font-sans">Try for free</span>
</button>
</div>
</div>
</nav>

<section className="mesh-gradient overflow-hidden pt-32 pb-20 relative">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur border border-neutral-200 px-3 py-1 rounded-full mb-8">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500 font-sans">Modernize Your Billing</span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tight text-neutral-900 mb-6 max-w-4xl mx-auto leading-[1.1] font-google-sans-flex font-normal">
      Simple Time Tracking and <span className="text-[#FF7F50] font-google-sans-flex font-normal">Professional</span> Invoicing</h1>
<p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed font-sans">The all-in-one platform for
      freelancers and teams to track hours, manage expenses, and get paid faster with beautiful automated invoices.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-20 items-center justify-center w-full max-w-2xl mx-auto">
<div className="relative w-full sm:w-80 group">
<div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
<svg className="lucide lucide-mail text-neutral-400 group-focus-within:text-orange-500/60 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<input className="w-full bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full pl-12 pr-6 py-4 text-base font-medium text-neutral-900 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500/40 transition-all placeholder:text-neutral-400 shadow-sm hover:border-neutral-300" placeholder="Enter your work email" type="email"/>
</div>
<button className="group shadow-[#FF7F50]/30 hover:shadow-[#FF7F50]/50 transition-all duration-300 overflow-hidden cursor-pointer font-medium text-white bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-full pt-4 pr-8 pb-4 pl-8 relative shadow-lg" onclick="window.location.href='/signup'" role="button" style={{boxShadow: '0 15px 33px -12px rgba(255, 127, 80, 0.6), inset 0 4px 6.3px rgba(255, 255, 255, 0.3), inset 0 -5px 6.3px rgba(0,0,0,0.1)', borderRadius: '9999px'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative flex items-center gap-2 font-sans">
        Get started for free
        <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>

<div className="overflow-hidden flex flex-col bg-white h-[850px] max-w-6xl border-neutral-200/60 border rounded-2xl mr-auto ml-auto relative shadow-2xl">
<header className="flex z-20 shrink-0 bg-white border-neutral-100 border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<h2 className="text-base font-semibold text-neutral-900 tracking-tight font-sans">Create Invoice</h2>
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer appearance-none checked:border-[#FF7F50] checked:bg-[#FF7F50] transition-all bg-white w-4 h-4 border-neutral-300 border rounded" type="checkbox"/>
<svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-700 transition-colors font-sans">Create another invoice</span>
</label>
<div className="h-4 w-px bg-neutral-200 mx-1"></div>
<button className="inline-flex hover:bg-[#ff6a33] shadow-orange-500/20 transition-all text-xs font-semibold text-white bg-[#FF7F50] rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-sm gap-x-2 gap-y-2 items-center font-sans">Send Invoice</button>
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors rounded-lg hover:bg-neutral-50">
<svg className="lucide lucide-x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</header>
<div className="flex flex-1 overflow-hidden">
<div className="w-[42%] bg-white border-r border-neutral-100 flex flex-col h-full">
<div className="flex-1 overflow-y-auto p-6 space-y-8">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="relative flex-1 group">
<label className="-top-2 text-[10px] uppercase font-bold text-neutral-400 tracking-widest bg-white z-10 pr-1 pl-1 absolute left-3 font-sans">Customer</label>
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<svg className="lucide lucide-user text-neutral-400 group-focus-within:text-[#FF7F50] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<input className="focus:outline-none focus:ring-4 focus:ring-[#FF7F50]/10 focus:border-[#FF7F50] transition-all placeholder:text-neutral-400 text-sm font-semibold text-neutral-900 bg-white w-full border-neutral-200 border-2 rounded-xl pt-3 pr-3 pb-3 pl-10" placeholder="Select customer" type="text" value="Jessica Laving"/>
</div>
<div className="relative w-44">
<label className="-top-2 text-[10px] uppercase z-10 font-bold text-neutral-400 tracking-widest bg-white pr-1 pl-1 absolute left-3 font-sans">Template</label>
<select className="w-full pl-3 pr-10 py-3 bg-neutral-50 border-2 border-neutral-100 rounded-xl text-sm font-semibold text-neutral-700 focus:outline-none focus:border-[#FF7F50] focus:bg-white appearance-none transition-all cursor-pointer">
<option className="font-sans">Design Service</option>
<option className="font-sans">Consulting</option>
<option className="font-sans">Development</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="flex flex-col w-full gap-4">
<div className="flex gap-1 bg-neutral-100 w-full border-neutral-200/50 border rounded-xl p-1">
<button className="flex-1 text-xs font-semibold text-neutral-500 py-2.5 hover:text-neutral-900 transition-colors font-sans">
            Single Invoice
        </button>
<button className="flex-1 bg-white shadow-sm border border-neutral-200/60 rounded-lg py-2.5 text-xs font-semibold text-neutral-900 transition-all font-sans">
            Recurring
        </button>
</div>
<div className="mt-2 pt-6 border-t border-neutral-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-900 font-sans">Automatic Delivery</span>
<span className="text-[11px] text-neutral-400 font-medium font-sans">Send email to customer automatically when generated</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#FF7F50]"></div>
</label>
</div>
</div>
<section className="border-0 rounded-none pt-0 pr-0 pb-0 pl-0">
<div className="flex mb-6 items-center justify-between">
<h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest font-sans">Billing Schedule</h3>
<button className="text-[11px] font-bold text-[#FF7F50] hover:underline decoration-2 underline-offset-4 transition-all font-sans">Set Net-30</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative group">
<label className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-neutral-400 uppercase tracking-widest z-10 group-focus-within:text-[#FF7F50] transition-colors font-sans">
        Issued
      </label>
<div className="relative">
<input className="focus:outline-none focus:ring-4 focus:ring-[#FF7F50]/10 focus:border-[#FF7F50] transition-all text-sm font-semibold text-neutral-900 bg-white w-full border-neutral-200 border-2 rounded-xl py-3 px-4" type="text" value="Jan 10, 2026"/>
<svg className="lucide lucide-calendar absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none group-focus-within:text-[#FF7F50] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
</div>
</div>
<div className="relative group">
<label className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-neutral-400 uppercase tracking-widest z-10 group-focus-within:text-[#FF7F50] transition-colors font-sans">
        Due Date
      </label>
<div className="relative">
<input className="focus:outline-none focus:ring-4 focus:ring-[#FF7F50]/10 focus:border-[#FF7F50] transition-all text-sm font-semibold text-neutral-900 bg-white w-full border-neutral-200 border-2 rounded-xl py-3 px-4" type="text" value="Feb 10, 2026"/>
<svg className="lucide lucide-calendar absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none group-focus-within:text-[#FF7F50] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
</div>
</div>
</div>
</section>
<section className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest font-sans">Line Items</h3>
<button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7F50] bg-[#FF7F50]/10 px-3 py-1.5 rounded-lg hover:bg-[#FF7F50]/20 transition-all font-sans">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14"></path></svg>
          Add Item
        </button>
</div>
<div className="border-2 border-neutral-100 rounded-2xl overflow-hidden shadow-sm">
<div className="flex items-center px-4 py-3 bg-neutral-50/80 border-b-2 border-neutral-100">
<div className="flex-1 text-[10px] font-black text-neutral-400 uppercase tracking-widest font-sans">Description
              </div>
<div className="w-12 text-center text-[10px] font-black text-neutral-400 uppercase tracking-widest font-sans">Qty
              </div>
<div className="w-24 text-right text-[10px] font-black text-neutral-400 uppercase tracking-widest font-sans">Rate
              </div>
</div>
<div className="group flex items-center px-4 py-4 bg-white border-b border-neutral-100 hover:bg-neutral-50/30 transition-colors">
<div className="flex-1">
<p className="text-sm font-bold text-neutral-900 font-sans">Web Design Project</p>
<p className="text-xs text-neutral-400 font-medium font-sans">Homepage &amp; Dashboard Redesign</p>
</div>
<div className="w-12 text-center text-sm font-bold text-neutral-600 font-sans">1</div>
<div className="w-24 text-right text-sm font-bold text-neutral-900 font-sans">$4,200.00</div>
</div>
<div className="group flex items-center px-4 py-4 bg-white hover:bg-neutral-50/30 transition-colors">
<div className="flex-1">
<p className="text-sm font-bold text-neutral-900 font-sans">Support (Monthly)</p>
<p className="text-xs text-neutral-400 font-medium font-sans">Priority fixes + small updates</p>
</div>
<div className="w-12 text-center text-sm font-bold text-neutral-600 font-sans">1</div>
<div className="w-24 text-right text-xs font-black text-emerald-500 uppercase tracking-widest font-sans">Free
              </div>
</div>
</div>
</section><div className="flex gap-2 gap-x-2 gap-y-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#FF7F50]/10 text-[#FF7F50] text-xs font-semibold border border-[#FF7F50]/20 hover:bg-[#FF7F50]/20 transition-colors font-sans">
<svg className="lucide lucide-percent" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="19" x2="5" y1="5" y2="19"></line>
<circle cx="6.5" cy="6.5" r="2.5"></circle>
<circle cx="17.5" cy="17.5" r="2.5"></circle>
</svg>
                Discount
              </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-100 text-neutral-700 text-xs font-semibold border border-neutral-200 hover:bg-neutral-200 transition-colors font-sans">
<svg className="lucide lucide-paperclip" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
                Attach
              </button>
</div>
<div className="border-neutral-100 border-t pt-4">
<button className="flex items-center justify-between w-full text-left group">
<span className="text-sm font-medium text-neutral-900 font-sans">Advanced Settings</span>
<svg className="lucide lucide-chevron-down text-neutral-400 group-hover:text-neutral-600 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
<div className="px-6 py-4 border-t border-neutral-100 bg-white flex justify-between items-center shrink-0">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-600 hover:bg-neutral-50 transition-colors font-sans">
<svg className="lucide lucide-settings" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Reset
                </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-600 hover:bg-neutral-50 transition-colors font-sans">
<svg className="lucide lucide-eye-off" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>
                    Hide Preview
                </button>
</div>
</div>
<div className="flex-1 overflow-y-auto flex bg-neutral-50/50 pt-8 pr-8 pb-8 pl-8 items-start justify-center">
<div className="min-h-[700px] shadow-neutral-200/40 flex flex-col bg-white w-full max-w-[600px] border-neutral-200/60 border rounded-lg pt-10 pr-10 pb-10 pl-10 shadow-xl justify-between">
<div className="">

<div className="flex justify-between items-start mb-12">
<div className="flex items-center gap-3">
<div className="">
<h1 className="font-bold text-lg text-neutral-900 tracking-tight leading-none font-sans">LEDGER</h1>
<span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase font-sans">Finance</span>
</div>
</div>
<div className="text-right">
<h2 className="text-xl font-bold text-neutral-900 tracking-tight mb-1 font-sans">Invoice #2025-004</h2>
<p className="text-xs text-neutral-500 font-medium font-sans">Issued: Mar 10, 2025</p>
</div>
</div>

<div className="grid grid-cols-2 gap-12 mb-12 text-xs">
<div className="">
<p className="font-semibold text-neutral-900 mb-2 uppercase tracking-wide text-[10px] font-sans">From</p>
<p className="font-medium text-neutral-800 font-sans">Ledger Inc.</p>
<p className="text-neutral-500 leading-relaxed mt-1 font-sans">880 Harrison StSan Francisco, CA 94107United States
              </p>
</div>
<div className="">
<p className="font-semibold text-neutral-900 mb-2 uppercase tracking-wide text-[10px] font-sans">To</p>
<p className="font-medium text-neutral-800 font-sans">Acme Corp</p>
<p className="text-neutral-500 leading-relaxed mt-1 font-sans">123 Business Rd.New York, NY
                10001billing@acmecorp.com</p>
</div>
</div>

<div className="mb-8">
<div className="flex items-center bg-neutral-50 rounded-lg px-4 py-2 mb-2">
<span className="flex-1 text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-sans">Item Description</span>
<span className="w-16 text-center text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-sans">Qty</span>
<span className="w-24 text-right text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-sans">Price</span>
<span className="w-24 text-right text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-sans">Amount</span>
</div>
<div className="flex items-center px-4 py-3 border-b border-neutral-100/50">
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900 font-sans">Web Design Project</p>
<p className="text-[11px] text-neutral-400 mt-0.5 font-sans">Homepage &amp; Dashboard Redesign</p>
</div>
<span className="w-16 text-center text-sm text-neutral-600 font-sans">1</span>
<span className="w-24 text-right text-sm text-neutral-600 font-sans">$4,200.00</span>
<span className="w-24 text-right text-sm font-semibold text-neutral-900 font-sans">$4,200.00</span>
</div>
</div>
</div>

<div className="border-t-2 border-neutral-900 pt-6">
<div className="flex justify-end">
<div className="w-64 space-y-3">
<div className="flex justify-between text-xs text-neutral-500">
<span className="font-sans">Subtotal</span>
<span className="font-sans">$4,200.00</span>
</div>
<div className="flex justify-between text-base font-bold text-neutral-900">
<span className="font-sans">Total Due</span>
<span className="font-sans">$4,200.00</span>
</div>
</div>
</div>
<div className="mt-12 text-[10px] text-neutral-400 max-w-sm leading-relaxed">
<p className="font-medium text-neutral-900 mb-1 font-sans">Payment Instructions</p>
<p className="font-sans">Please send payment within 21 days of receiving this invoice. Wire transfers are preferred
              for amounts over $5,000.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 pt-6 pr-6 pb-6 pl-6 w-full">
<div className="text-center">
<p className="uppercase text-sm font-medium text-zinc-400 tracking-wide font-sans">Powering the world’s most focused product
          teams
        </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1040d3ec-8da2-47f6-b134-1341261ccfb9_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca43984b-3298-41bb-871b-d113545c657c_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33a31345-28f8-4702-985f-4c087c82987d_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07ee863a-59fe-4785-a806-5592f2439df2_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62da197c-b71a-4478-9ce5-ded8ced2b11b_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3347b589-6a0c-4520-a84f-11a867a72d7f_320w.jpg)] bg-cover rounded invert" href="#"></a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-y bg-[#ffffff] border-neutral-200 pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">Why Ledger?</span>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors font-sans" href="#">
            Read documentation
            <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">We believe that precision is the engine of every succesful scale.</h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2">
<p className="leading-relaxed text-base text-neutral-600 font-sans">Fragmented data is the enemy of growth. Ledger unifies your financial stack into a single, unbreakable source of truth.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group flex flex-col hover:shadow-xl hover:shadow-[#FF7F50]/5 transition-all duration-500 bg-neutral-50 h-[520px] border-neutral-200/60 border rounded-[40px] px-10 py-10 justify-between">
<div className="">
<div className="w-12 h-12 bg-[#FF7F50]/10 rounded-2xl flex items-center justify-center text-[#FF7F50] mb-8">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<h3 className="text-2xl text-neutral-900 mb-6 tracking-tight leading-tight font-google-sans-flex font-normal">Institutional grade security as standard.</h3>
<p className="text-neutral-500 leading-relaxed font-sans">Your data is protected by multi-layer encryption and SOC2 compliance, ensuring your financial integrity is never compromised.</p>
</div>
<div className="pt-6 border-t border-neutral-100">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-sans">Unrivaled Security</span>
</div>
</div>
<div className="relative rounded-[40px] overflow-hidden h-[520px] bg-neutral-900 group">
<img alt="Data visualization" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-10 left-10 text-white pr-10">
<span className="inline-block px-3 py-1 bg-[#FF7F50] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 font-sans">Real-time Insights</span>
<p className="text-2xl leading-tight font-google-sans-flex font-normal">Move at the speed of thought, not the speed of spreadsheets.</p>
</div>
</div>
<div className="flex flex-col overflow-hidden group bg-neutral-50 h-[520px] border-neutral-200 border rounded-[40px] px-10 py-10 relative shadow-sm items-center justify-between">
<div className="text-center">
<span className="text-xs text-[#FF7F50] font-bold block mb-2 uppercase tracking-[0.2em] font-sans">Effortless Scale</span>
<span className="text-xl font-medium text-neutral-900 font-sans">Uptime Reliability</span>
</div>
<div className="flex w-56 h-56 relative items-center justify-center">
<div className="absolute inset-0 bg-[#FF7F50]/5 rounded-full animate-pulse"></div>
<div className="absolute inset-0 border-[14px] border-neutral-100 rounded-full"></div>
<div className="border-[14px] border-t-transparent border-r-transparent border-[#FF7F50] rounded-full absolute top-0 right-0 bottom-0 left-0 -rotate-45">
</div>
<div className="text-5xl tracking-tighter text-neutral-900 font-google-sans-flex font-normal">99.9%</div>
</div>
<button className="w-full bg-neutral-900 text-white py-4 rounded-[20px] text-sm font-semibold hover:bg-[#FF7F50] transition-colors duration-300 shadow-lg shadow-neutral-200 font-sans">See Infrastructure</button>
</div>
<div className="bg-neutral-950 p-10 rounded-[40px] flex flex-col justify-between h-[520px] text-white relative hover:shadow-2xl hover:shadow-[#FF7F50]/20 transition-all duration-500">
<div className="flex justify-between items-start">
<span className="text-lg font-medium tracking-tight text-[#FF7F50] font-sans">Expert Support</span>
<div className="p-2 bg-white/10 rounded-full">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
</div>
<p className="text-3xl leading-[1.2] font-google-sans-flex font-normal">Humans in the loop, whenever you need us.</p>
<div className="space-y-6">
<div className="group/link cursor-pointer">
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-1 font-sans">Average Response</p>
<p className="text-lg font-medium border-b border-white/10 pb-2 group-hover/link:text-[#FF7F50] transition-colors font-sans">
            &lt; 5 Minutes</p>
</div>
<div className="group/link cursor-pointer">
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-1 font-sans">Coverage</p>
<p className="text-lg font-medium group-hover/link:text-[#FF7F50] transition-colors font-sans">24/7 Global White-Glove</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="max-w-7xl z-10 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="overflow-hidden bg-white ring-neutral-200 ring-1 rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">

<div className="flex flex-col w-full pb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">Core features</span>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors font-sans" href="#">
            Read documentation
            <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">
            Everything you need to run your business smoothly</h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2">
<p className="leading-relaxed text-base text-neutral-600 font-sans">Ledger provides a streamlined interface for tracking
                every minute, dollar, and expense so you can focus on the work that matters.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<article className="lg:col-span-1 group relative flex flex-col justify-between overflow-hidden bg-white border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300">
<div className="relative z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold tracking-medium mb-6 font-sans">
        Time Tracking
      </div>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">Your time, monetized.</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 font-sans">
        Versatile calendar tools crafted to empower you in billing every billable second.
      </p>
</div>

<div className="relative w-full h-[240px] bg-neutral-50 border border-neutral-100 rounded-2xl p-4 overflow-hidden select-none">

<div className="flex items-center justify-between mb-4 bg-white rounded-lg p-2 shadow-sm border border-neutral-100">
<button className="p-1 hover:bg-neutral-100 rounded"><svg className="text-neutral-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="m15 18-6-6 6-6"></path></svg></button>
<span className="text-[10px] font-semibold text-neutral-900 font-sans">Today</span>
<button className="p-1 hover:bg-neutral-100 rounded"><svg className="text-neutral-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>

<div className="relative h-full">

<div className="absolute top-0 bottom-0 left-4 w-px bg-neutral-200"></div>
<div className="absolute top-8 left-0 right-0 h-px bg-neutral-100"></div>
<div className="absolute top-24 left-0 right-0 h-px bg-neutral-100"></div>
<div className="absolute top-40 left-0 right-0 h-px bg-neutral-100"></div>

<div className="absolute top-0 bottom-0 left-1/2 w-px bg-red-400 z-10">
<div className="absolute -top-1 -translate-x-1/2 bg-red-50 text-red-500 text-[8px] font-bold px-1 rounded border border-red-100 font-sans">11:50 AM</div>
<div className="absolute bottom-0 -translate-x-1/2 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
</div>

<div className="absolute top-10 left-8 w-[100px] bg-blue-50 border border-blue-100 rounded-lg p-2 shadow-sm">
<div className="flex items-center gap-1.5 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
<span className="text-[8px] font-semibold text-blue-900 font-sans">Client Meeting</span>
</div>
<div className="h-1 w-12 bg-blue-200/50 rounded-full"></div>
</div>

<div className="absolute top-32 left-[45%] w-[110px] bg-pink-50 border border-pink-100 rounded-lg p-2 shadow-sm z-20">
<div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md border border-neutral-100">
<svg className="text-pink-500" fill="none" height="8" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="8"><path d="M12 5v14M5 12h14"></path></svg>
</div>
<div className="flex items-center gap-1.5 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
<span className="text-[8px] font-semibold text-pink-900 font-sans">Design Review</span>
</div>
<div className="text-[7px] text-pink-700/70 font-sans">11:45 AM - 12:30 PM</div>
</div>
</div>
</div>
</article>

<article className="lg:col-span-2 group relative flex flex-col justify-between overflow-hidden bg-white border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300">
<div className="relative z-10 max-w-lg">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-medium mb-6 font-sans">
        Asset Management
      </div>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">Your secure digital vault.</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 font-sans">
        All-in-one solution for secure contract storage, receipt management, and client deliverables with military-grade encryption.
      </p>
</div>

<div className="relative w-full h-[240px] bg-neutral-50 border border-neutral-100 rounded-2xl p-4 overflow-hidden flex gap-4 select-none">

<div className="w-1/4 hidden sm:flex flex-col gap-3 pt-2">
<div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-neutral-200 shadow-sm text-neutral-800">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
<span className="text-[10px] font-semibold font-sans">Upload</span>
</div>
<div className="space-y-1 px-2">
<div className="h-1.5 w-16 bg-neutral-200 rounded-full mb-2"></div>
<div className="h-1.5 w-10 bg-neutral-200 rounded-full"></div>
</div>
<div className="mt-auto px-3 py-2 bg-neutral-200/50 rounded-lg flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-neutral-300"></div>
<div className="h-1.5 w-12 bg-neutral-300 rounded-full"></div>
</div>
</div>

<div className="flex-1 bg-white rounded-xl border border-neutral-200 shadow-sm p-4">
<div className="flex items-center justify-between mb-6">
<span className="text-[10px] font-bold text-neutral-900 font-sans">My Files</span>
<div className="flex items-center gap-2">
<span className="text-[9px] text-neutral-400 font-sans">Sort by Name</span>
<svg className="text-neutral-400" fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="flex gap-4 overflow-hidden">

<div className="w-28 p-3 rounded-xl border border-neutral-100 bg-neutral-50 flex flex-col gap-6">
<div className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center text-emerald-600">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>
</div>
<div className="space-y-1">
<div className="h-1.5 w-16 bg-neutral-200 rounded-full"></div>
<div className="h-1 w-8 bg-neutral-100 rounded-full"></div>
</div>
</div>

<div className="w-28 p-3 rounded-xl border border-neutral-100 bg-neutral-50 flex flex-col gap-6">
<div className="w-6 h-6 rounded bg-blue-50 flex items-center justify-center text-blue-500">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>
</div>
<div className="space-y-1">
<div className="h-1.5 w-14 bg-neutral-200 rounded-full"></div>
<div className="h-1 w-10 bg-neutral-100 rounded-full"></div>
</div>
</div>

<div className="absolute right-4 top-16 w-32 bg-white rounded-lg shadow-xl border border-neutral-100 p-2 z-10">
<div className="flex items-center gap-2 p-1.5 hover:bg-neutral-50 rounded text-[9px] text-neutral-600 font-sans">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg> Upload files
            </div>
<div className="flex items-center gap-2 p-1.5 hover:bg-neutral-50 rounded text-[9px] text-neutral-600 font-sans">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg> New Folder
            </div>
</div>
</div>
</div>
</div>
</article>

<article className="lg:col-span-2 group relative flex flex-col justify-between overflow-hidden bg-white border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300">
<div className="relative z-10 max-w-lg">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold tracking-medium mb-6 font-sans">
        Invoicing
      </div>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">Your billing experience.</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 font-sans">
        The ultimate invoicing engine designed to revolutionise how you get paid and manage client relationships.
      </p>
</div>

<div className="relative w-full h-[240px] bg-neutral-50 border border-neutral-100 rounded-2xl p-4 overflow-hidden select-none">
<div className="absolute inset-x-4 top-4 bottom-0 bg-white rounded-t-xl border-x border-t border-neutral-200 shadow-sm flex flex-col">

<div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-neutral-900 font-sans">Invoices</span>
<span className="px-1.5 py-0.5 rounded-full bg-red-100 text-red-600 text-[8px] font-bold font-sans">23</span>
</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-200"></div>
<div className="w-2 h-2 rounded-full bg-neutral-200"></div>
</div>
</div>

<div className="flex-1 overflow-hidden">

<div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-50 hover:bg-neutral-50">
<div className="w-6 h-6 rounded bg-pink-100 flex items-center justify-center text-[10px] font-bold text-pink-600 font-sans">A</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-[10px] font-semibold text-neutral-900 font-sans">Acme Corp</span>
<span className="text-[9px] text-neutral-400 font-sans">10:45 AM</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<span className="text-[9px] text-neutral-500 truncate font-sans">Invoice #2929 - Overdue payment warning</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-50 bg-blue-50/30">
<div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600 font-sans">S</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-[10px] font-semibold text-neutral-900 font-sans">Stripe Inc.</span>
<span className="text-[9px] text-neutral-400 font-sans">Yesterday</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-[9px] text-neutral-500 truncate font-sans">Payment Received - $4,250.00</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-50 hover:bg-neutral-50">
<div className="w-6 h-6 rounded bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600 font-sans">M</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-[10px] font-semibold text-neutral-900 font-sans">Meta</span>
<span className="text-[9px] text-neutral-400 font-sans">Jan 20</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
<span className="text-[9px] text-neutral-500 truncate font-sans">Draft Saved: Q1 Consultation</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-xl border border-neutral-100 px-3 py-2 flex flex-col gap-2 w-48">
<div className="flex justify-between items-center pb-1 border-b border-neutral-100">
<span className="text-[9px] font-semibold font-sans">New Invoice</span>
<svg fill="none" height="8" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="8"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<div className="flex items-center gap-1">
<span className="text-[8px] text-neutral-400 font-sans">To:</span>
<div className="bg-neutral-100 px-1.5 py-0.5 rounded text-[8px] font-sans">finance@stripe.com</div>
</div>
</div>
</div>
</div>
</article>

<article className="lg:col-span-1 group relative flex flex-col justify-between overflow-hidden bg-white border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300">
<div className="relative z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-medium mb-6 font-sans">
        Proposals
      </div>
<h3 className="text-neutral-900 text-2xl tracking-tight mb-3 font-google-sans-flex font-normal">Your creativity empowered.</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 font-sans">
        Your go-to app for crafting stunning proposals and financial reports with ease.
      </p>
</div>

<div className="relative w-full h-[240px] bg-neutral-50 border border-neutral-100 rounded-2xl p-4 overflow-hidden select-none">
<div className="w-full h-full bg-white rounded-xl shadow-sm border border-neutral-200 flex flex-col">

<div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-100">
<div className="p-1 hover:bg-neutral-50 rounded"><svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><polyline points="15 18 9 12 15 6"></polyline></svg></div>
<div className="h-3 w-px bg-neutral-200"></div>
<span className="text-[9px] font-semibold text-neutral-700 font-sans">Proposal Q3</span>
</div>

<div className="p-4 relative">

<div className="flex items-center gap-2 mb-4 bg-neutral-50/50 p-1.5 rounded-lg w-max border border-neutral-100">
<div className="px-1 font-serif font-bold text-[10px] font-sans">B</div>
<div className="px-1 font-serif italic text-[10px] font-sans">I</div>
<div className="px-1 text-[10px] line-through font-sans">S</div>
<div className="h-3 w-px bg-neutral-200 mx-1"></div>
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path></svg>
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M21 12H3"></path><path d="M21 6H3"></path><path d="M21 18H3"></path></svg>
</div>

<div className="space-y-2">
<div className="h-2 w-3/4 bg-neutral-900 rounded-sm mb-3"></div>
<div className="h-1.5 w-full bg-neutral-200 rounded-sm"></div>
<div className="h-1.5 w-full bg-neutral-200 rounded-sm"></div>
<div className="h-1.5 w-5/6 bg-neutral-200 rounded-sm"></div>
</div>

<div className="absolute top-10 left-10 bg-neutral-900 text-white rounded-lg shadow-xl p-1 z-20 w-32">
<div className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-neutral-800 cursor-pointer">
<span className="text-[9px] font-medium font-sans">Heading 2</span>
<svg fill="none" height="8" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="8"><polyline points="6 9 12 15 18 9"></polyline></svg>
</div>
<div className="px-2 py-1.5 text-[8px] text-neutral-400 font-sans">
                Change text style to organize your document structure.
             </div>
</div>

<div className="absolute top-28 left-4 w-px h-3 bg-blue-500 animate-pulse"></div>
</div>
</div>

<div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-lg shadow-lg shadow-blue-500/20 flex items-center justify-center text-white">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M12 5v14M5 12h14"></path></svg>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="overflow-hidden border-y bg-[#ffffff] border-neutral-200 pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="flex flex-col w-full mb-16">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-bold text-[#FF7F50] tracking-[0.2em] font-sans">TESTIMONIALS</span>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors font-sans" href="#">
            Read documentation
            <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">Build trust with transparent billing that clients appreciate</h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2">
<p className="leading-relaxed text-base text-neutral-600 font-sans">Ledger is trusted by operators, founders, and finance teams who rely on accuracy every day.
Their feedback reflects how Ledger performs in real workflows, not marketing promises.</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group flex flex-col hover:bg-white hover:shadow-xl hover:shadow-[#FF7F50]/10 transition-all duration-500 bg-neutral-50 border-neutral-200/60 border rounded-[40px] px-8 py-8 justify-between">
<div className="">
<div className="flex gap-1 mb-6 text-[#FF7F50]">
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
</div>
<blockquote className="text-xl text-neutral-800 leading-snug font-medium tracking-tight font-sans">
                    "Ledger helped us streamline our operations and scale faster than we imagined. Their mix of strategy and execution is unmatched."
                </blockquote>
</div>
<div className="flex items-center gap-4 mt-12 pt-6 border-t border-neutral-200/50">
<img alt="Talia Smith" className="group-hover:grayscale-0 transition-all duration-500 w-12 h-12 object-cover rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9f2a6f7-f473-484f-9db4-504cae45afd1_320w.webp"/>
<div className="">
<div className="font-bold text-neutral-900 text-base font-sans">Talia Smith</div>
<div className="text-neutral-500 text-xs font-medium uppercase tracking-wider font-sans">Product at Forma</div>
</div>
</div>
</div>
<div className="group bg-gradient-to-br from-[#FF7F50] to-[#FF6347] p-8 rounded-[40px] flex flex-col justify-between shadow-2xl shadow-[#FF7F50]/20 transition-all duration-500 hover:-translate-y-2">
<div className="">
<div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl mb-8 backdrop-blur-sm">
<svg fill="white" height="24" viewbox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72Zm116,0v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H152a16,16,0,0,1-16-16V72a16,16,0,0,1,16-16h60A16,16,0,0,1,232,72Z"></path></svg>
</div>
<blockquote className="text-xl text-white leading-snug font-medium tracking-tight font-sans">
                    "Working with Ledger felt like having an extension of our team. They understood our challenges and delivered real, measurable results."
                </blockquote>
</div>
<div className="flex items-center gap-4 mt-12 pt-6 border-t border-white/10">
<img alt="Jordan Johnson" className="w-12 h-12 object-cover border-white/20 border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp"/>
<div>
<div className="font-bold text-white text-base font-sans">Jordan Johnson</div>
<div className="text-orange-100 text-xs font-medium uppercase tracking-wider font-sans">COO at Metricon</div>
</div>
</div>
</div>
<div className="group flex flex-col hover:bg-white hover:shadow-xl hover:shadow-[#FF7F50]/10 transition-all duration-500 bg-neutral-50 border-neutral-200/60 border rounded-[40px] px-8 py-8 justify-between">
<div className="">
<div className="flex gap-1 mb-6 text-[#FF7F50]">
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.07-31-51.07,31a16,16,0,0,1-23.84-17.34l13.51-58.6-45.1-39.36A16,16,0,0,1,30.5,87.49l59.6-5.49L113.84,26a16,16,0,0,1,28.32,0L165.9,82l59.6,5.49a16,16,0,0,1,9,26.89Z"></path></svg>
</div>
<blockquote className="text-xl text-neutral-800 leading-snug font-medium tracking-tight font-sans">
                    "From the first meeting, Ledger brought clarity and momentum to our hiring strategy. We’ve seen a major improvement in performance."
                </blockquote>
</div>
<div className="flex items-center gap-4 mt-12 pt-6 border-t border-neutral-200/50">
<img alt="Samuel Torres" className="group-hover:grayscale-0 transition-all duration-500 w-12 h-12 object-cover rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/152b527e-f3bb-44db-98a8-e224a84a1318_320w.webp"/>
<div>
<div className="font-bold text-neutral-900 text-base font-sans">Samuel Torres</div>
<div className="text-neutral-500 text-xs font-medium uppercase tracking-wider font-sans">Founder at Bloomtech</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="flex flex-col w-full mb-12">
<div className="flex items-end justify-between w-full pb-5">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="w-8 h-px bg-[#FF7F50]"></span>
<span className="uppercase text-xs font-semibold text-[#FF7F50] tracking-[0.2em] font-sans">PRICING</span>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors font-sans" href="#">
                Compare all plans
                <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="w-full h-px bg-neutral-200 mb-8"></div>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-16">
<h2 className="md:text-4xl lg:text-5xl leading-[1.05] text-3xl text-neutral-900 tracking-tight max-w-3xl font-google-sans-flex font-normal">
                Simple, transparent pricing that scales with your ambition</h2>
<div className="lg:max-w-sm flex-shrink-0 lg:pt-2">
<p className="leading-relaxed text-base text-neutral-600 font-sans">Choose the plan that fits your current workflow. Ledger is built to support you from your first client to your hundredth employee.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1">
<div className="hover:shadow-md transition-shadow bg-white h-full border-neutral-200 border rounded-[32px] px-8 py-10 shadow-sm flex flex-col">
<h3 className="text-3xl tracking-tight mb-2 font-google-sans-flex font-normal">Free</h3>
<p className="text-neutral-500 mb-8 text-sm font-sans">Perfect for individuals just starting out.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-google-sans-flex font-normal">$0</span>
<span className="text-neutral-400 text-sm font-sans">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-neutral-600 font-sans">
<svg className="lucide lucide-check text-neutral-950" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> 3 Active projects
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-600 font-sans">
<svg className="lucide lucide-check text-neutral-950" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> 24-hour history
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-600 font-sans">
<svg className="lucide lucide-check text-neutral-950" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Basic invoicing
                    </li>
</ul>
<button className="hover:bg-neutral-50 transition-colors font-medium text-neutral-950 font-sans w-full border-neutral-200 border rounded-full pt-4 pb-4">Get Started</button>
</div>
</div>

<div className="lg:col-span-1">
<div className="hover:shadow-md transition-shadow bg-neutral-50 h-full border-neutral-200 border rounded-[32px] px-8 py-10 shadow-sm flex flex-col">
<h3 className="text-3xl tracking-tight mb-2 font-google-sans-flex font-normal">Starter</h3>
<p className="text-neutral-500 mb-8 text-sm font-sans">For growing freelancers and small teams.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-google-sans-flex font-normal">$12</span>
<span className="text-neutral-400 text-sm font-sans">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-neutral-600 font-sans">
<svg className="lucide lucide-check text-neutral-950" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> 10 Active projects
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-600 font-sans">
<svg className="lucide lucide-check text-neutral-950" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6 9 17l-5-5"></path>
</svg> 7-day message history
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-600 font-sans">
<svg className="lucide lucide-check text-neutral-950" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Standard AI features
                    </li>
</ul>
<button className="hover:bg-neutral-800 transition-colors font-medium text-white font-sans bg-neutral-950 w-full rounded-full pt-4 pb-4">Start Free Trial</button>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-neutral-950 border border-white/10 rounded-[32px] px-8 py-10 h-full text-white relative shadow-2xl overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl"></div>
<h3 className="text-3xl tracking-tight mb-2 font-google-sans-flex font-normal">Pro</h3>
<p className="text-neutral-400 mb-8 text-sm font-sans">For teams that need powerful reporting.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-google-sans-flex font-normal">$49</span>
<span className="text-neutral-500 text-sm font-sans">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="lucide lucide-check text-[#FF7F50]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Unlimited Projects
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="lucide lucide-check text-[#FF7F50]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Lifetime history sync
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="lucide lucide-check text-[#FF7F50]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Advanced API access
                    </li>
</ul>
<button className="hover:opacity-90 transition-opacity font-medium text-white font-sans bg-[#FF7F50] w-full rounded-full pt-4 pb-4">Start Team Plan</button>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-[#ffffff] border-neutral-200 pt-24 pb-24 relative">
<div className="max-w-7xl z-10 mr-auto ml-auto pt-0 pr-6 pb-0 pl-6 relative">
<div className="overflow-hidden lg:p-24 text-center bg-neutral-50 border-neutral-200/60 border rounded-[40px] px-12 py-12 relative shadow-sm">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,127,80,0.07),transparent_50%)] pointer-events-none">
</div>
<div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7F50]/10 border border-[#FF7F50]/20 mb-10">
<span className="text-[10px] font-semibold text-[#FF7F50] uppercase tracking-widest font-sans">Scale with Ledger</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-[1.1] mb-8 font-google-sans-flex font-normal">
          Build trust with transparent billing that <span className="text-[#FF7F50] font-google-sans-flex font-normal">clients appreciate</span>
</h2>
<p className="text-lg text-neutral-600 mb-12 leading-relaxed max-w-2xl font-sans">
          Ledger is trusted by operators, founders, and finance teams who rely on accuracy every day. Start your free
          trial today and join over 5,000+ growing agencies.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
<button className="w-full sm:w-auto bg-neutral-900 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-200/50 flex items-center justify-center gap-2 font-sans">
                    Get started for free
                    <svg className="lucide lucide-zap fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</button>
<button className="w-full sm:w-auto bg-white border border-neutral-200 text-neutral-900 px-10 py-4 rounded-full text-sm font-medium hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 font-sans">
                    Book a live demo
                    <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-neutral-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check text-[#FF7F50]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-xs font-medium uppercase tracking-wider font-sans">Enterprise Security</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-credit-card text-[#FF7F50]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
<span className="text-xs font-medium uppercase tracking-wider font-sans">No card required</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users text-[#FF7F50]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="text-xs font-medium uppercase tracking-wider font-sans">Unlimited seats</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6" style={{}}>
<div className="bg-neutral-950 rounded-[40px] p-12 relative overflow-hidden text-white" style={{}}>
<div className="bg-[#000000] w-full h-full absolute top-0 left-0"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="">
<a className="inline-flex items-center justify-center bg-center w-[140px] h-[40px] bg-[url(https://cdn.midjourney.com/157d0411-d6a6-4bee-b082-5167e8459074/0_1.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a>
<p className="text-neutral-400 max-w-sm mb-10 leading-relaxed font-sans">The modern standard for time tracking and
                    financial management for creative professionals.</p>
<form className="flex gap-2 max-w-md">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20 transition-all" placeholder="Enter your email" type="email"/>
<button className="bg-white text-neutral-950 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors font-sans">Join Newsletter</button>
</form>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
<div className="">
<h4 className="text-sm font-medium mb-6 font-sans">Product</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li className=""><a className="hover:text-white transition-colors font-sans" href="#">Features</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Pricing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium mb-6 font-sans">Company</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li className=""><a className="hover:text-white transition-colors font-sans" href="#">About</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#">Careers</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium mb-6 font-sans">Social</h4>
<div className="flex gap-4">
<a className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-neutral-600 font-sans">© 2025 Ledger Inc. All rights reserved.</p>
<div className="flex gap-8 text-xs text-neutral-600">
<a className="hover:text-white transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-sans" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
