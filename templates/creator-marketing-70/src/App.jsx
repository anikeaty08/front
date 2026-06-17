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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
50: '#F8FAFC',
100: '#F1F5F9',
200: '#E2E8F0',
300: '#CBD5E1',
400: '#94A3B8',
500: '#64748B',
600: '#475569',
700: '#334155',
800: '#1E293B',
900: '#0F172A',
},
pink: {
50: '#FDF2F8',
100: '#FCE7F3',
500: '#EC4899',
600: '#DB2777',
},
purple: {
50: '#FAF5FF',
600: '#9333EA',
900: '#581C87',
950: '#3B0764',
}
}
}
}
}



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
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
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-slate-900 tracking-tight">OYE CREATORS</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Product</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">How it works</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Resources</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-4 border-r border-slate-200 pr-4 mr-2">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">For Brands</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">For Agencies</a>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2" href="#">
                    Launch Free Campaign
                </a>
</div>
</div>
</header>
<main className="pt-24">

<section className="lg:py-24 overflow-hidden max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">

<div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-purple-50/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Turn shortlisted creators into confirmed campaign deliverables.
                    </h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                        Oye Creators helps brands and agencies manage creator outreach, confirmations, scheduling, and approvals in one simple workflow — so campaigns move forward without follow-ups or confusion.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5" href="#">
                            Start a campaign pilot
                            <svg className="lucide lucide-arrow-right ml-2 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
                            Request a demo
                        </a>
</div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                        Built for nano and micro creators. Trusted by brands across India.
                    </p>
</div>

<div className="relative w-full h-[500px] bg-slate-50/50 rounded-2xl border border-slate-100 p-8 flex flex-col justify-center items-center shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]">

<div className="absolute left-1/2 top-20 bottom-20 w-px bg-gradient-to-b from-slate-200 via-pink-200 to-green-200 -translate-x-1/2 z-0"></div>

<div className="relative z-10 w-72 bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 translate-x-[-20px] opacity-80 scale-95">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-500">RK</div>
<div>
<div className="text-sm font-medium text-slate-900">Rohan Kumar</div>
<div className="text-xs text-slate-500">Instagram • 12k</div>
</div>
</div>
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-500 ring-1 ring-inset ring-slate-200">Shortlisted</span>
</div>
<div className="h-2 w-3/4 bg-slate-50 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-slate-50 rounded"></div>
</div>

<div className="relative z-20 w-72 bg-white rounded-xl shadow-lg border border-slate-200 p-4 mb-6">
<div className="absolute -right-3 top-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-medium text-pink-600">AS</div>
<div>
<div className="text-sm font-medium text-slate-900">Ananya Singh</div>
<div className="text-xs text-slate-500">Youtube • 45k</div>
</div>
</div>
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Confirmed</span>
</div>
<div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-50">
<svg className="lucide lucide-calendar w-3 h-3 text-slate-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs text-slate-500">Draft due: 14 Oct</span>
</div>
</div>

<div className="relative z-10 w-72 bg-white rounded-xl shadow-sm border border-slate-200 p-4 translate-x-[20px] opacity-90 scale-95">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-medium text-indigo-600">VJ</div>
<div>
<div className="text-sm font-medium text-slate-900">Vikram J.</div>
<div className="text-xs text-slate-500">Instagram • 8k</div>
</div>
</div>
<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Delivered</span>
</div>
<div className="mt-2 w-full h-24 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
<svg className="lucide lucide-play-circle w-8 h-8 text-slate-300" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                    From shortlist to confirmed — without chasing creators.
                </h2>
<p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-16">
                    Shortlisting creators is easy. Getting confirmations, timelines, and deliverables is where campaigns slow down. Oye Creators replaces scattered messages with a clear, trackable workflow that moves every creator forward.
                </p>

<div className="flex items-center justify-between relative max-w-3xl mx-auto">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>

<div className="bg-slate-50 px-2">
<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<span className="text-xs font-medium text-slate-500">Shortlist</span>
</div>
</div>

<div className="bg-slate-50 px-2">
<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border-2 border-pink-500 shadow-sm flex items-center justify-center text-pink-600">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<span className="text-xs font-semibold text-pink-600">Outreach</span>
</div>
</div>

<div className="bg-slate-50 px-2">
<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-xs font-medium text-slate-500">Confirm</span>
</div>
</div>

<div className="bg-slate-50 px-2">
<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
<svg className="lucide lucide-upload-cloud w-5 h-5" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<span className="text-xs font-medium text-slate-500">Deliver</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24">
<div className="relative space-y-24">

<div className="absolute left-6 top-8 bottom-8 w-px bg-slate-200 lg:left-1/2 lg:-translate-x-1/2 border-l border-dashed border-slate-300"></div>

<div className="relative grid lg:grid-cols-2 gap-12 items-center">
<div className="lg:text-right lg:pr-12 order-2 lg:order-1">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Build your outreach list with clarity.</h3>
<p className="text-slate-500 leading-relaxed">
                            Discover creators by city, platform, and category. Segment them based on relevance, reach, and campaign fit before sending a single message.
                        </p>
</div>
<div className="absolute left-6 lg:left-1/2 w-3 h-3 bg-pink-500 rounded-full -translate-x-1.5 ring-4 ring-white shadow-sm z-10"></div>
<div className="pl-12 lg:pl-12 order-1 lg:order-2">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-sm">
<div className="flex gap-2 mb-4">
<span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">Bangalore</span>
<span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">Lifestyle</span>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-slate-100 rounded"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>

<div className="relative grid lg:grid-cols-2 gap-12 items-center">
<div className="pl-12 lg:pr-12 order-2 lg:order-1 lg:flex lg:justify-end">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-sm w-full">
<div className="flex items-center gap-3 mb-4 border-b border-slate-50 pb-3">
<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs">B</div>
<div className="text-sm font-medium">Brief_v1.pdf</div>
</div>
<div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
                                "Hey, can we adjust the deliverable date to the 15th?"
                            </div>
</div>
</div>
<div className="absolute left-6 lg:left-1/2 w-3 h-3 bg-white border-2 border-slate-300 rounded-full -translate-x-1.5 ring-4 ring-white shadow-sm z-10"></div>
<div className="pl-12 lg:pl-12 order-1 lg:order-2">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Pitch, negotiate, and lock terms.</h3>
<p className="text-slate-500 leading-relaxed">
                            Share briefs, discuss pricing, and confirm deliverables inside a single thread. No lost messages. No last-minute surprises.
                        </p>
</div>
</div>

<div className="relative grid lg:grid-cols-2 gap-12 items-center">
<div className="lg:text-right lg:pr-12 order-2 lg:order-1">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Confirm participation &amp; schedule.</h3>
<p className="text-slate-500 leading-relaxed">
                            Assign timelines, shoot dates, and posting schedules once creators confirm. Turn conversations into planned actions immediately.
                        </p>
</div>
<div className="absolute left-6 lg:left-1/2 w-3 h-3 bg-white border-2 border-slate-300 rounded-full -translate-x-1.5 ring-4 ring-white shadow-sm z-10"></div>
<div className="pl-12 lg:pl-12 order-1 lg:order-2">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm max-w-sm">
<div className="flex items-center gap-3 mb-2">
<svg className="lucide lucide-calendar-check w-5 h-5 text-green-600" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
<span className="text-sm font-medium text-slate-900">Reel Posting Date</span>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">Oct 24, 2023</div>
<div className="text-xs text-slate-500 mt-1">Confirmed by Creator</div>
</div>
</div>
</div>

<div className="relative grid lg:grid-cols-2 gap-12 items-center">
<div className="pl-12 lg:pr-12 order-2 lg:order-1 lg:flex lg:justify-end">
<div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm max-w-sm w-full">
<div className="bg-slate-100 rounded-lg h-32 w-full flex items-center justify-center mb-3">
<svg className="lucide lucide-play w-8 h-8 text-slate-300 fill-slate-300" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="flex gap-2 px-2 pb-2">
<button className="flex-1 bg-slate-900 text-white text-xs py-2 rounded-md font-medium">Approve</button>
<button className="flex-1 bg-white border border-slate-200 text-slate-600 text-xs py-2 rounded-md font-medium">Revision</button>
</div>
</div>
</div>
<div className="absolute left-6 lg:left-1/2 w-3 h-3 bg-white border-2 border-slate-300 rounded-full -translate-x-1.5 ring-4 ring-white shadow-sm z-10"></div>
<div className="pl-12 lg:pl-12 order-1 lg:order-2">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Review content before it goes live.</h3>
<p className="text-slate-500 leading-relaxed">
                            Collect submissions, request revisions, and approve content centrally. Maintain brand control without slowing the campaign down.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">How campaign execution works on Oye Creators</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
<span className="inline-block w-8 h-8 rounded-full bg-slate-50 text-slate-500 text-sm font-medium flex items-center justify-center border border-slate-200 mb-4 group-hover:bg-pink-50 group-hover:text-pink-600 group-hover:border-pink-100 transition-colors">1</span>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Shortlist creators</h4>
<p className="text-xs text-slate-500">Filter and select the right fit.</p>
</div>

<div className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
<span className="inline-block w-8 h-8 rounded-full bg-slate-50 text-slate-500 text-sm font-medium flex items-center justify-center border border-slate-200 mb-4 group-hover:bg-pink-50 group-hover:text-pink-600 group-hover:border-pink-100 transition-colors">2</span>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Share brief</h4>
<p className="text-xs text-slate-500">Send requirements instantly.</p>
</div>

<div className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
<span className="inline-block w-8 h-8 rounded-full bg-slate-50 text-slate-500 text-sm font-medium flex items-center justify-center border border-slate-200 mb-4 group-hover:bg-pink-50 group-hover:text-pink-600 group-hover:border-pink-100 transition-colors">3</span>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Track status</h4>
<p className="text-xs text-slate-500">See who is interested.</p>
</div>

<div className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
<span className="inline-block w-8 h-8 rounded-full bg-slate-50 text-slate-500 text-sm font-medium flex items-center justify-center border border-slate-200 mb-4 group-hover:bg-pink-50 group-hover:text-pink-600 group-hover:border-pink-100 transition-colors">4</span>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Schedule</h4>
<p className="text-xs text-slate-500">Lock dates and timelines.</p>
</div>

<div className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
<span className="inline-block w-8 h-8 rounded-full bg-slate-50 text-slate-500 text-sm font-medium flex items-center justify-center border border-slate-200 mb-4 group-hover:bg-pink-50 group-hover:text-pink-600 group-hover:border-pink-100 transition-colors">5</span>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Review &amp; Approve</h4>
<p className="text-xs text-slate-500">Finalize content for live.</p>
</div>
</div>
<div className="text-center mt-12">
<p className="text-sm font-medium text-slate-400">One workflow. One source of truth.</p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Run your next creator campaign with confidence.</h2>
<p className="text-lg text-slate-500 mb-10">Start a campaign pilot and experience structured creator execution without chaos.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl hover:shadow-pink-500/20 transition-all transform hover:-translate-y-0.5" href="#">
                        Start a campaign pilot
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors" href="#">
                        Talk to our team
                    </a>
</div>
<p className="mt-6 text-xs text-slate-400">Get started in minutes. No complicated setup.</p>
</div>
</section>
</main>

<footer className="bg-gradient-to-b from-purple-900 to-purple-950 text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<span className="text-lg font-semibold tracking-tight text-white mb-6 block">OYE CREATORS</span>
<p className="text-sm text-purple-200 leading-relaxed">
                        Helping brands and agencies grow with creator-led marketing by simplifying execution.
                    </p>
</div>
<div>
<h4 className="font-medium text-white mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-purple-200/80">
<li><a className="hover:text-white transition-colors" href="#">For Brands</a></li>
<li><a className="hover:text-white transition-colors" href="#">For Agencies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Login</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-purple-200/80">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-purple-200/80">
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-purple-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-purple-300">© 2023 Oye Creators. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-purple-300 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-purple-300 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-purple-300 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
