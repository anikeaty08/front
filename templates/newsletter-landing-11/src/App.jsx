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
      
<div className="w-full px-4 py-8">
<div className="mx-auto w-full max-w-[600px] bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

<div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md flex items-center justify-center" style={{backgroundColor: '#1C4039'}}>
<span className="text-white text-[12px] tracking-tight font-semibold" style={{letterSpacing: '-0.02em'}}>GC</span>
</div>
<div className="flex flex-col">
<span className="text-sm text-slate-500">Header &amp; Main Story</span>
<span className="text-[18px] md:text-[19px] font-semibold tracking-tight" style={{color: '#0A0B1C', letterSpacing: '-0.02em'}}>The Growth Catalyst</span>
</div>
</div>
<a className="text-[12px] text-slate-500 hover:text-slate-700 underline underline-offset-2" href="#">View in browser</a>
</div>

<div className="relative">
<img alt="Upward-trending financial line over a keyboard" className="w-full h-[220px] object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 pointer-events-none">
<svg className="w-full h-full" viewbox="0 0 600 220">
<defs>
<lineargradient id="fillArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#1C4039" stop-opacity="0.14"></stop>
<stop offset="100%" stop-color="#1C4039" stop-opacity="0.00"></stop>
</lineargradient>
</defs>
<path d="M0 180 L70 170 L120 150 L180 160 L240 130 L300 145 L360 115 L420 130 L480 95 L540 110 L600 80 L600 220 L0 220 Z" fill="url(#fillArea)"></path>
<polyline fill="none" points="0,180 70,170 120,150 180,160 240,130 300,145 360,115 420,130 480,95 540,110 600,80" stroke="#1C4039" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></polyline>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-white/80 backdrop-blur">
<p className="text-[14px] text-slate-600">Smart strategies for entrepreneurs and investors.</p>
</div>
</div>

<div className="px-6 pt-6 pb-2">
<h1 className="text-[22px] md:text-[24px] font-semibold tracking-tight mb-2" style={{color: '#0A0B1C', letterSpacing: '-0.02em'}}>
            The 3 Pricing Models Driving Freelancers to Six Figures
          </h1>
<p className="text-[14px] leading-6 text-slate-700">
            The traditional hourly model is dead for elite freelancers. Our investigation reveals the rise of
            value-based pricing and productized services—two strategies that allow independent workers to charge significantly more.
            We break down how you can shift your model and earn what you're truly worth.
          </p>
<div className="mt-5">
<a className="block w-full text-center text-[14px] font-medium tracking-tight text-white px-4 py-3 rounded-md shadow-sm ring-1 hover:shadow transition-colors" href="#" style={{backgroundColor: '#1C4039', ringColor: '#17362F'}}>
              Read the Full Strategy
            </a>
</div>
</div>

<div className="px-6">
<div className="h-px w-full my-6 bg-slate-200"></div>
</div>

<div className="px-6 pb-6">
<h2 className="text-[18px] md:text-[19px] font-semibold tracking-tight mb-1" style={{color: '#0A0B1C', letterSpacing: '-0.02em'}}>
            Quick Insights: Market &amp; Money
          </h2>
<p className="text-[13px] text-slate-600 mb-4">
            This section uses clear headings to break up the quick tips.
          </p>

<div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
<div className="flex items-start gap-3 p-4">

<div className="h-10 w-10 rounded-md flex items-center justify-center" style={{backgroundColor: '#E0E9E9'}}>
<svg className="text-slate-700" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">

<circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round"></circle>
<line strokeLinecap="round" strokeLinejoin="round" x1="16.65" x2="21" y1="16.65" y2="21"></line>

<path d="M11 7.5c-1.2 0-2 .7-2 1.7s.8 1.5 2 1.8 2 .7 2 1.8-.9 1.7-2 1.7m0-7v10" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight" style={{color: '#0A0B1C', letterSpacing: '-0.01em'}}>The Expert Tip</h3>
</div>
<p className="text-[14px] text-slate-700 mt-1">
                  Tax Hacks for Side Hustlers: Deductions You Should Be Claiming Now. Don't leave money on the table.
                </p>
</div>
</div>
</div>

<div className="h-3"></div>

<div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
<div className="flex items-start gap-3 p-4">

<div className="h-10 w-10 rounded-md flex items-center justify-center" style={{backgroundColor: '#E0E9E9'}}>
<svg className="text-slate-700" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11v2a2 2 0 0 0 2 2h2l7 3V6l-7 3H5a2 2 0 0 0-2 2z" strokeLinejoin="round"></path>
<path d="M14 6v12" strokeLinecap="round"></path>
<path d="M9 16v3a2 2 0 0 0 2 2h1" strokeLinecap="round"></path>
</svg>
</div>
<div className="flex-1">
<h3 className="text-[15px] font-semibold tracking-tight" style={{color: '#0A0B1C', letterSpacing: '-0.01em'}}>Market Watch</h3>
<p className="text-[14px] text-slate-700 mt-1">
                  Marketing Disruption: Why Authenticity Is Replacing Expensive Ad Campaigns. Brands with genuine connection see higher ROI.
                </p>
</div>
</div>
</div>
</div>

<div className="px-6 pb-6">
<h2 className="text-[18px] md:text-[19px] font-semibold tracking-tight mb-1" style={{color: '#0A0B1C', letterSpacing: '-0.02em'}}>
            Weekly Inspiration
          </h2>
<p className="text-[13px] text-slate-600 mb-4">
            This new section provides a brief moment of motivation.
          </p>
<div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
<div className="flex items-start gap-3 p-4">

<div className="h-10 w-10 rounded-md flex items-center justify-center" style={{backgroundColor: '#E0E9E9'}}>
<svg aria-hidden="true" className="text-slate-700" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h4v6H7a3 3 0 0 0-3 3v1" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M17 7h4v6h-4a3 3 0 0 0-3 3v1" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight" style={{color: '#0A0B1C', letterSpacing: '-0.01em'}}>Quote of the Week</h3>
</div>
<blockquote className="text-[15px] italic text-slate-700 mt-2">
                  "The fastest way to change yourself is to hang out with people who are already the way you want to be."
                  <span className="not-italic text-slate-500">— Reid Hoffman (Co-Founder of LinkedIn)</span>
</blockquote>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-slate-200 px-6 py-5">
<p className="text-[12px] text-slate-500">
            Our mailing address is: 789 Startup Blvd, New York, NY 10005
          </p>
<div className="flex items-center gap-3 mt-3">

<a aria-label="LinkedIn" className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-300 text-[12px] font-medium tracking-tight hover:bg-slate-50 hover:border-slate-400" href="#" style={{color: '#0A0B1C', letterSpacing: '-0.02em'}} title="LinkedIn">
              in
            </a>
<a aria-label="X / Twitter" className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-300 text-[12px] font-medium tracking-tight hover:bg-slate-50 hover:border-slate-400" href="#" style={{color: '#0A0B1C', letterSpacing: '-0.02em'}} title="X / Twitter">
              X
            </a>
<a aria-label="YouTube" className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-300 hover:bg-slate-50 hover:border-slate-400" href="#" title="YouTube">
<svg aria-hidden="true" className="text-slate-700" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="3" ry="3" width="18" x="3" y="6"></rect>
<polygon fill="currentColor" points="10,9 16,12 10,15" stroke="none"></polygon>
</svg>
</a>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4">
<p className="text-[12px] text-slate-500">
              Copyright © 2025 The Growth Catalyst. All rights reserved.
            </p>
<a className="text-[12px] font-medium underline underline-offset-2 hover:text-slate-800" href="#" style={{color: '#1C4039'}}>
              Unsubscribe
            </a>
</div>
</div>
</div>

<div className="mx-auto w-full max-w-[600px] text-[11px] text-slate-500 text-center mt-3">
<span className="inline-flex items-center gap-2">
<span className="inline-flex items-center"><span className="h-2.5 w-2.5 rounded-full mr-1" style={{backgroundColor: '#0A0B1C'}}></span>Title</span>
<span className="inline-flex items-center"><span className="h-2.5 w-2.5 rounded-full mr-1" style={{backgroundColor: '#1C4039'}}></span>Primary</span>
<span className="inline-flex items-center"><span className="h-2.5 w-2.5 rounded-full mr-1" style={{backgroundColor: '#E0E9E9'}}></span>Secondary</span>
</span>
</div>
</div>

    </>
  );
}
