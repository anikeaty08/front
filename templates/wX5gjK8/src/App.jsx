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
      
<div className="flex flex-col md:flex-row max-w-screen-xl mx-auto min-h-[80vh] gap-6">

<aside className="w-full md:w-72 flex-shrink-0 flex flex-col gap-6">
<div className="neomorph px-6 py-5 flex items-center gap-3">
<img alt="Logo" className="w-10 h-10 rounded-lg shadow-sm" src="https://s3-alpha.figma.com/thumbnails/933cfc5c-8ba1-41c7-a01e-37a2a86d9916"/>
<span className="font-semibold text-lg text-[#13151a] tracking-wide select-none">MindMatter</span>
</div>
<nav className="flex flex-col gap-3">
<a className="neomorph flex items-center gap-3 px-5 py-3 text-[#13151a] text-base font-medium hover:scale-[1.03] transition" href="#">
<svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 13h2v-2H3v2zm4 0h14v-2H7v2zm0-6h14v2H7V7zM3 17h2v-2H3v2zm0-10h2v2H3V7zm0 2h2v2H3v-2zm0 4h2v2H3v-2zm0 4h2v2H3v-2zm0-8h2V3H3v2zm16 14H7v-2h12v2z"></path>
</svg>
          Dashboard
        </a>
<a className="neomorph flex items-center gap-3 px-5 py-3 text-[#13151a] text-base font-medium hover:scale-[1.03] transition" href="#">
<svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="8" r="4"></circle>
<path d="M2 21v-2a4 4 0 014-4h12a4 4 0 014 4v2"></path>
</svg>
          Agents
        </a>
<a className="neomorph flex items-center gap-3 px-5 py-3 text-[#13151a] text-base font-medium hover:scale-[1.03] transition" href="#">
<svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 3v4M8 3v4M4 11h16"></path>
</svg>
          Sessions
        </a>
<a className="neomorph flex items-center gap-3 px-5 py-3 text-[#13151a] text-base font-medium hover:scale-[1.03] transition" href="#">
<svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 17v-6h6v6M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"></path>
</svg>
          Knowledge Base
        </a>
<a className="neomorph flex items-center gap-3 px-5 py-3 text-[#13151a] text-base font-medium hover:scale-[1.03] transition" href="#">
<svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a8 8 0 10-6.4 2.6"></path>
</svg>
          Settings
        </a>
</nav>
</aside>

<main className="flex-1 flex flex-col gap-8 bg-transparent">
<header className="mb-2">
<h1 className="text-3xl font-bold text-[#13151a] mb-1">Dashboard</h1>
</header>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
<div className="neomorph p-7 flex flex-col gap-2 min-w-[180px]">
<span className="text-[#13151a] font-medium text-base mb-1">Total Chat Count</span>
<span className="text-2xl font-bold text-[#13151a]">1,234</span>
</div>
<div className="neomorph p-7 flex flex-col gap-2 min-w-[180px]">
<span className="text-[#13151a] font-medium text-base mb-1">Audio Call Count</span>
<span className="text-2xl font-bold text-[#13151a]">567</span>
</div>
<div className="neomorph p-7 flex flex-col gap-2 min-w-[180px]">
<span className="text-[#13151a] font-medium text-base mb-1">Video Call Count</span>
<span className="text-2xl font-bold text-[#13151a]">890</span>
</div>
<div className="neomorph p-7 flex flex-col gap-2 min-w-[180px]">
<span className="text-[#13151a] font-medium text-base mb-1">Avg. Chat Session Duration</span>
<span className="text-2xl font-bold text-[#13151a]">15 min</span>
</div>
<div className="neomorph p-7 flex flex-col gap-2 min-w-[180px]">
<span className="text-[#13151a] font-medium text-base mb-1">Avg. Audio Session Duration</span>
<span className="text-2xl font-bold text-[#13151a]">20 min</span>
</div>
<div className="neomorph p-7 flex flex-col gap-2 min-w-[180px]">
<span className="text-[#13151a] font-medium text-base mb-1">Avg. Video Session Duration</span>
<span className="text-2xl font-bold text-[#13151a]">25 min</span>
</div>
</div>

<section className="neomorph p-8 pt-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
<span className="font-semibold text-xl text-[#13151a]">Session Duration by Channel</span>
<span className="text-lg text-[#13151a] font-bold px-3 py-1 rounded-lg">+8%</span>
</div>
<div className="flex flex-wrap items-end gap-7 mt-7">
<div className="flex flex-col items-center flex-1 min-w-[100px]">
<span className="mb-1 text-[13px] font-bold text-[#6B7280]">Chat</span>
<div className="neomorph-inset h-6 w-full mb-2"></div>
<span className="text-xs font-medium text-[#6B7280]">15 min</span>
</div>
<div className="flex flex-col items-center flex-1 min-w-[100px]">
<span className="mb-1 text-[13px] font-bold text-[#6B7280]">Audio</span>
<div className="neomorph-inset h-6 w-3/4 mb-2"></div>
<span className="text-xs font-medium text-[#6B7280]">20 min</span>
</div>
<div className="flex flex-col items-center flex-1 min-w-[100px]">
<span className="mb-1 text-[13px] font-bold text-[#6B7280]">Video</span>
<div className="neomorph-inset h-6 w-full mb-2"></div>
<span className="text-xs font-medium text-[#6B7280]">25 min</span>
</div>
</div>
<div className="flex justify-between text-sm text-[#13151a] mt-6">
<span>Last 90 Days</span>
<span className="font-medium text-green-600">+8%</span>
</div>
</section>
</main>
</div>

    </>
  );
}
