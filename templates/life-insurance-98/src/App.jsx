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
      

<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-stone-200/50 z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2" href="#">
<svg className="h-10 w-auto" fill="none" viewbox="0 0 220 50" xmlns="http://www.w3.org/2000/svg">

<path d="M25 5C13.954 5 5 13.954 5 25s8.954 20 20 20" fill="none" stroke="#5DBCD2" strokeLinecap="round" strokeWidth="3"></path>
<path d="M25 5c11.046 0 20 8.954 20 20s-8.954 20-20 20" fill="none" opacity="0.5" stroke="#6B7280" strokeLinecap="round" strokeWidth="3"></path>

<path d="M8 32c4-2 10-4 18-2 6 1.5 12 4 16 6" fill="none" stroke="#6B7280" strokeLinecap="round" strokeWidth="3"></path>
<path d="M8 32c-2 1-4 3-4 5 0 3 4 5 8 3" fill="none" stroke="#6B7280" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="22" cy="16" fill="#1E3A5F" r="3"></circle>
<path d="M22 19v8M19 28h6M22 23l-3 5M22 23l3 5" stroke="#1E3A5F" strokeLinecap="round" strokeWidth="1.5"></path>

<circle cx="30" cy="20" fill="#5DBCD2" r="2"></circle>
<path d="M30 22v5M28 27h4M30 24l-2 3M30 24l2 3" stroke="#5DBCD2" strokeLinecap="round" strokeWidth="1.2"></path>

<text fill="#1E3A5F" fontFamily="Inter, sans-serif" fontSize="28" font-weight="700" x="55" y="35">AMSO</text>
</svg>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#process">How It Works</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#resources">Resources</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</div>
<button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">
                    Schedule a call
                </button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 leading-tight">
                        Life insurance guidance in Atlanta, GA for families and business owners
                    </h1>
<p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-xl">
                        Make confident coverage decisions with a simple call. If you are unsure what type of coverage fits your goals, we help you understand options clearly and choose a practical next step.
                    </p>
<button className="mt-8 bg-stone-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-stone-800 transition-colors inline-flex items-center gap-2">
                        Schedule a call
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-stone-500">
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:shield-check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                            Licensed insurance professionals
                        </span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:video" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
                            Phone or Zoom meeting
                        </span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:map-pin" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                            Atlanta based, serving eligible clients nationwide
                        </span>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-3xl overflow-hidden">
<img alt="Professional consultation" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&amp;h=800&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-medium text-stone-900">Trusted by families</span>
</div>
<p className="text-sm text-stone-500">Clear guidance for life's important decisions</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="bg-stone-100 rounded-2xl p-6">
<svg aria-hidden="true" className="iconify text-stone-700 mb-4 iconify--lucide" data-icon="lucide:target" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
<h4 className="font-medium text-stone-900 mb-2">Review your goals</h4>
<p className="text-sm text-stone-500">Timeline, priorities, and what matters most</p>
</div>
<div className="bg-stone-100 rounded-2xl p-6">
<svg aria-hidden="true" className="iconify text-stone-700 mb-4 iconify--lucide" data-icon="lucide:file-search" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><circle cx="11.5" cy="14.5" r="2.5"></circle><path d="M13.3 16.3L15 18"></path></g></svg>
<h4 className="font-medium text-stone-900 mb-2">Current policy review</h4>
<p className="text-sm text-stone-500">Understand what you already have</p>
</div>
<div className="bg-stone-100 rounded-2xl p-6">
<svg aria-hidden="true" className="iconify text-stone-700 mb-4 iconify--lucide" data-icon="lucide:message-circle" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-medium text-stone-900 mb-2">Plain language</h4>
<p className="text-sm text-stone-500">Policy types explained simply</p>
</div>
<div className="bg-stone-100 rounded-2xl p-6">
<svg aria-hidden="true" className="iconify text-stone-700 mb-4 iconify--lucide" data-icon="lucide:search" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<h4 className="font-medium text-stone-900 mb-2">Identify gaps</h4>
<p className="text-sm text-stone-500">Common issues when life changes</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">What you get from the call</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                        A clear next step, not confusion.
                    </h2>
<p className="mt-6 text-lg text-stone-600 leading-relaxed">
                        This is a short, no pressure conversation designed to help you understand where you are today and what to do next.
                    </p>
<button className="mt-8 bg-stone-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-stone-800 transition-colors">
                        Schedule a call
                    </button>
<p className="mt-3 text-sm text-stone-400">No pressure. No obligation.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">Core Services</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                    Topics we can help you explore
                </h2>
<p className="mt-6 text-lg text-stone-600">
                    Amso Group, Inc. provides life insurance guidance in Atlanta, Georgia. Meetings are available by phone or Zoom meeting.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<a className="group bg-white rounded-2xl p-8 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all" href="#">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:clock" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 group-hover:text-emerald-600 transition-colors">Term Life Insurance</h3>
<p className="mt-3 text-stone-500">Straightforward coverage for a specific period of time.</p>
<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
                        Learn more
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="group bg-white rounded-2xl p-8 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all" href="#">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:shield" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 group-hover:text-blue-600 transition-colors">Whole Life Insurance</h3>
<p className="mt-3 text-stone-500">Permanent coverage with cash value accumulation.</p>
<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        Learn more
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="group bg-white rounded-2xl p-8 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all" href="#">
<div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-violet-600 iconify--lucide" data-icon="lucide:trending-up" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 group-hover:text-violet-600 transition-colors">Indexed Universal Life</h3>
<p className="mt-3 text-stone-500">Flexible coverage with index-linked growth potential.</p>
<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600">
                        Learn more
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="group bg-white rounded-2xl p-8 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all" href="#">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-amber-600 iconify--lucide" data-icon="lucide:heart-handshake" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 group-hover:text-amber-600 transition-colors">Long Term Care Options</h3>
<p className="mt-3 text-stone-500">Plan for future care needs and protect your assets.</p>
<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600">
                        Learn more
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="group bg-white rounded-2xl p-8 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all" href="#">
<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-teal-600 iconify--lucide" data-icon="lucide:piggy-bank" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5-7h.01M2 8v1a2 2 0 0 0 2 2h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 group-hover:text-teal-600 transition-colors">Annuity Options</h3>
<p className="mt-3 text-stone-500">Guaranteed income streams for retirement planning.</p>
<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600">
                        Learn more
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<div className="bg-stone-900 rounded-2xl p-8 text-white flex flex-col justify-between">
<div>
<h3 className="text-xl font-semibold">Not sure where to start?</h3>
<p className="mt-3 text-stone-400">Schedule a call and we will guide you to the right conversation.</p>
</div>
<button className="mt-6 bg-white text-stone-900 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-100 transition-colors w-fit">
                        Schedule a call
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">How It Works</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                    A straightforward process
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
<div className="relative">
<div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center text-white font-semibold text-xl mb-6">1</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Discover</h3>
<p className="text-stone-600">We learn what you want to protect, your timeline, and what matters most.</p>
<div className="hidden md:block absolute top-7 left-20 w-full h-0.5 bg-stone-200"></div>
</div>
<div className="relative">
<div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center text-white font-semibold text-xl mb-6">2</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Review</h3>
<p className="text-stone-600">We explain relevant options and key tradeoffs in plain language.</p>
<div className="hidden md:block absolute top-7 left-20 w-full h-0.5 bg-stone-200"></div>
</div>
<div>
<div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-semibold text-xl mb-6">3</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3">Next Steps</h3>
<p className="text-stone-600">If you choose to proceed, we outline what happens next and what information is needed.</p>
</div>
</div>
<div className="text-center mt-12">
<button className="bg-stone-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-stone-800 transition-colors">
                    Schedule a call
                </button>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">Who We Help</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                        Built for real life decisions
                    </h2>
<p className="mt-6 text-lg text-stone-600 mb-8">
                        We commonly work with people navigating life's important transitions.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-stone-700">Families and new parents</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-stone-700">Homeowners</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-stone-700">Business owners and self employed professionals</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-stone-700">People updating coverage after marriage, a new baby, or a job change</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-stone-700">People who want a second look at an existing policy</span>
</li>
</ul>
</div>
<div className="relative">
<img alt="Family consultation" className="rounded-2xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&amp;h=600&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-stone-900 rounded-3xl p-8 lg:p-16 text-center">
<span className="text-sm font-medium text-emerald-400 uppercase tracking-wide">Service Areas</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    Atlanta based, local and nationwide support
                </h2>
<p className="mt-6 text-lg text-stone-400 max-w-2xl mx-auto">
                    We are based in Atlanta, Georgia and currently serve clients in Alpharetta, Johns Creek, Duluth, Cumming, and Norcross. We also work with eligible clients across the United States by phone or Zoom meeting.
                </p>
<div className="mt-8 flex flex-wrap justify-center gap-3">
<span className="bg-stone-800 text-stone-300 px-4 py-2 rounded-full text-sm">Atlanta</span>
<span className="bg-stone-800 text-stone-300 px-4 py-2 rounded-full text-sm">Alpharetta</span>
<span className="bg-stone-800 text-stone-300 px-4 py-2 rounded-full text-sm">Johns Creek</span>
<span className="bg-stone-800 text-stone-300 px-4 py-2 rounded-full text-sm">Duluth</span>
<span className="bg-stone-800 text-stone-300 px-4 py-2 rounded-full text-sm">Cumming</span>
<span className="bg-stone-800 text-stone-300 px-4 py-2 rounded-full text-sm">Norcross</span>
<span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm">+ Nationwide</span>
</div>
<button className="mt-10 bg-white text-stone-900 px-6 py-3 rounded-lg text-base font-medium hover:bg-stone-100 transition-colors">
                    Schedule a call
                </button>
<p className="mt-3 text-sm text-stone-500">Product availability varies by state and carrier guidelines.</p>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">Why Amso Group, Inc.</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                        Education first, always.
                    </h2>
<p className="mt-6 text-lg text-stone-600">
                        We believe coverage decisions should feel clear and respectful. Our role is to answer questions, explain options, and help you choose the next step that fits your situation.
                    </p>
</div>
<div className="grid gap-4">
<div className="bg-white rounded-xl p-6 border border-stone-200">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:message-square" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-stone-900">Clear explanations without jargon</h4>
<p className="mt-1 text-sm text-stone-500">Complex topics made simple and understandable.</p>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border border-stone-200">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:heart" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-stone-900">A respectful process, never pushy</h4>
<p className="mt-1 text-sm text-stone-500">Your comfort and understanding come first.</p>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border border-stone-200">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-violet-600 iconify--lucide" data-icon="lucide:list-checks" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4M3 7l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-stone-900">Simple next steps you can actually follow</h4>
<p className="mt-1 text-sm text-stone-500">Actionable guidance, not overwhelming information.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="resources">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">Resource Preview</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                    Learn before you decide
                </h2>
<p className="mt-6 text-lg text-stone-600">
                    Explore answers to common questions.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<a className="group bg-stone-50 rounded-xl p-6 hover:bg-stone-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-emerald-600 transition-colors mb-4 iconify--lucide" data-icon="lucide:calculator" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></g></svg>
<h4 className="font-medium text-stone-900 group-hover:text-emerald-600 transition-colors">How much life insurance do I need?</h4>
<span className="mt-3 inline-flex items-center gap-1 text-sm text-stone-500">
                        Read more
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="group bg-stone-50 rounded-xl p-6 hover:bg-stone-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-emerald-600 transition-colors mb-4 iconify--lucide" data-icon="lucide:git-compare" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7m-7 3H8a2 2 0 0 1-2-2V9"></path></g></svg>
<h4 className="font-medium text-stone-900 group-hover:text-emerald-600 transition-colors">Term Life vs Whole Life: what to know</h4>
<span className="mt-3 inline-flex items-center gap-1 text-sm text-stone-500">
                        Read more
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="group bg-stone-50 rounded-xl p-6 hover:bg-stone-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-emerald-600 transition-colors mb-4 iconify--lucide" data-icon="lucide:clipboard-list" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"></path></g></svg>
<h4 className="font-medium text-stone-900 group-hover:text-emerald-600 transition-colors">What to bring to a policy review call</h4>
<span className="mt-3 inline-flex items-center gap-1 text-sm text-stone-500">
                        Read more
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="group bg-stone-50 rounded-xl p-6 hover:bg-stone-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-emerald-600 transition-colors mb-4 iconify--lucide" data-icon="lucide:help-circle" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
<h4 className="font-medium text-stone-900 group-hover:text-emerald-600 transition-colors">Indexed Universal Life: common questions</h4>
<span className="mt-3 inline-flex items-center gap-1 text-sm text-stone-500">
                        Read more
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
</div>
<div className="text-center mt-12">
<button className="bg-stone-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-stone-800 transition-colors">
                    Schedule a call
                </button>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-50" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">FAQ</span>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
                    Common questions
                </h2>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-stone-900">Do you meet by Zoom?</span>
<svg aria-hidden="true" className="iconify text-stone-400 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-stone-600">
                        Yes. We meet by phone or Zoom meeting.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-stone-900">Can you review my current policy?</span>
<svg aria-hidden="true" className="iconify text-stone-400 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-stone-600">
                        Yes. Many people contact us because they want a clearer understanding of what they already have.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-stone-900">Do you provide quotes during the call?</span>
<svg aria-hidden="true" className="iconify text-stone-400 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-stone-600">
                        We can explain how pricing typically works and what affects it. Accurate pricing depends on eligibility and underwriting guidelines, and additional information may be needed.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-stone-900">What should I have ready?</span>
<svg aria-hidden="true" className="iconify text-stone-400 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-stone-600">
                        If you have an existing policy, keep it nearby. If not, just be ready to share your goals and timeline.
                    </div>
</details>
</div>
</div>
</section>

<section className="lg:py-32 bg-white pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 lg:p-20 text-center relative overflow-hidden">
<div %3e%3c="" 0="" 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v0h-2v4h-4v2h4v4h2v6h4v4h-4zm6="" 34v-4h4v4h0v2h4v4h2v-4h4v-2h6zm6="" 4v0h4v4h0v2h4v4h2v6h4v4h6z\"="" 60="" 60\"="" className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\" d='\"M36' fill='\"none\"' fillOpacity='\"0.03\"%3E%3Cpath' fill-rule='\"evenodd\"%3E%3Cg' g%3e%3c="" height='\"60\"' opacity-50"="" svg%3e')]="" viewbox='\"0' xmlns='\"http://www.w3.org/2000/svg\"%3E%3Cg'></div>
<div className="relative">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                        Ready for clarity?
                    </h2>
<p className="mt-6 text-lg text-stone-400 max-w-xl mx-auto">
                        Schedule a call and get a clear next step.
                    </p>
<button className="mt-10 bg-white text-stone-900 px-8 py-4 rounded-lg text-base font-medium hover:bg-stone-100 transition-colors inline-flex items-center gap-2">
                        Schedule a call
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="lg:col-span-2">
<a className="inline-block" href="#">
<svg className="h-10 w-auto" fill="none" viewbox="0 0 220 50" xmlns="http://www.w3.org/2000/svg">

<path d="M25 5C13.954 5 5 13.954 5 25s8.954 20 20 20" fill="none" stroke="#7DD3E8" strokeLinecap="round" strokeWidth="3"></path>
<path d="M25 5c11.046 0 20 8.954 20 20s-8.954 20-20 20" fill="none" opacity="0.5" stroke="#9CA3AF" strokeLinecap="round" strokeWidth="3"></path>

<path d="M8 32c4-2 10-4 18-2 6 1.5 12 4 16 6" fill="none" stroke="#9CA3AF" strokeLinecap="round" strokeWidth="3"></path>
<path d="M8 32c-2 1-4 3-4 5 0 3 4 5 8 3" fill="none" stroke="#9CA3AF" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="22" cy="16" fill="#FFFFFF" r="3"></circle>
<path d="M22 19v8M19 28h6M22 23l-3 5M22 23l3 5" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>

<circle cx="30" cy="20" fill="#7DD3E8" r="2"></circle>
<path d="M30 22v5M28 27h4M30 24l-2 3M30 24l2 3" stroke="#7DD3E8" strokeLinecap="round" strokeWidth="1.2"></path>

<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="28" font-weight="700" x="55" y="35">AMSO</text>
</svg>
</a>
<p className="mt-4 text-sm max-w-md">
                        Life insurance guidance for families and business owners in Atlanta, GA and nationwide.
                    </p>
<div className="mt-6 space-y-2 text-sm">
<p className="">1770 Indian Trail Rd. Suite #175
Norcross, GA 30093</p>
<p className="">(770) 872-8116</p>
<p className="">info@amsogroup.com</p>
</div>
</div>
<div className="">
<h4 className="font-medium text-white mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Term Life Insurance</a></li>
<li><a className="hover:text-white transition-colors" href="#">Whole Life Insurance</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Indexed Universal Life</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Long Term Care</a></li>
<li><a className="hover:text-white transition-colors" href="#">Annuity Options</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">How Much Coverage?</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Term vs Whole Life</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Policy Review Guide</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-800 pt-8">
<p className="text-xs text-stone-500 leading-relaxed">
                    Information on this website is for educational purposes only and is not tax or legal advice. Insurance products and services are offered through properly licensed individuals. Product availability and features vary by state and carrier. Coverage is subject to eligibility, underwriting, and policy terms. No statement on this website is a guarantee of coverage, benefits, or outcomes.
                </p>
<p className="text-xs text-stone-600 mt-4">© 2026 Amso Group, Inc. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
