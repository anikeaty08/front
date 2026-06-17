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
      

<aside className="w-64 border-r border-gray-100 flex flex-col bg-white h-full shrink-0 z-20">

<div className="h-16 flex items-center px-5 border-b border-gray-50">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded bg-[#2D1E12] flex items-center justify-center text-white">
<svg className="w-4 h-4 text-[#FF7A00]" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C10 5 9 7 9 9C9 11.5 10.5 12.5 11.5 13.5C10 14 8.5 14 8.5 14C8.5 14 8 12 8 11C8 9 7 8 7 8C6 10 5 12 5 14.5C5 18.6421 8.35786 22 12.5 22C16.6421 22 20 18.6421 20 14.5C20 11 17 8 17 8C17 8 16 11 15 11.5C15.5 10.5 16 8.5 16 7C16 5.5 15.5 4 14.5 3C13.5 2 12.5 2 12 2Z"></path>
</svg>
</div>
<span className="font-display font-medium text-[15px] tracking-tight text-[#2D1E12]">Flamey</span>
</div>
<button className="ml-auto text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="panel-left-close"></i>
</button>
</div>

<div className="p-4">
<button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 shadow-sm text-sm font-medium py-2 rounded-lg text-gray-700 transition-colors">
<i className="w-4 h-4 text-[#FF7A00]" data-lucide="sparkles"></i>
                Ask AI
            </button>
</div>

<nav className="flex-1 px-2 space-y-0.5 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="search"></i>
                Search
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="line-chart"></i>
                Insights
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#2D1E12] bg-gray-100 rounded-md" href="#">
<i className="w-4 h-4 text-[#FF7A00]" data-lucide="send"></i>
                Sequences
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="inbox"></i>
                Inbox
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="list-todo"></i>
                Tasks
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="bar-chart-2"></i>
                Opportunities
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="building-2"></i>
                Companies
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="users"></i>
                Contacts
            </a>
</nav>

<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#22333b] text-white flex items-center justify-center text-xs font-medium">DA</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-[#2D1E12]">David A.</span>
<span className="text-[10px] text-gray-500">Flamey Inc.</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-gray-50/50">

<header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 bg-white shrink-0">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-gray-500">
<span className="hover:text-gray-800 cursor-pointer">Sequences</span>
<i className="w-3 h-3 text-gray-300" data-lucide="chevron-right"></i>
<span className="text-[#2D1E12] font-medium">New Sequence</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-gray-500 hover:text-gray-800 px-3 py-2">Save as Draft</button>
<div className="h-4 w-px bg-gray-200"></div>
<button className="bg-[#2D1E12] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-black transition-colors flex items-center gap-2">
                    Review &amp; Launch
                    <i className="w-3 h-3 opacity-70" data-lucide="arrow-right"></i>
</button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-[440px] border-r border-gray-200 bg-white flex flex-col h-full overflow-y-auto">
<div className="p-6 space-y-8">

<div className="space-y-1">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wide">Sequence Name</label>
<input className="w-full text-lg font-display font-medium text-[#2D1E12] placeholder-gray-300 border-none p-0 focus:ring-0 bg-transparent" placeholder="Untitled Sequence" type="text" value="Cold Outreach - SaaS Founders"/>
</div>

<div className="ai-gradient-border p-5 shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#FF7A00]" data-lucide="sparkles"></i>
</div>
<h3 className="font-medium text-sm text-[#2D1E12]">AI Sequence Builder</h3>
</div>
<span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">Beta</span>
</div>
<div className="space-y-3">
<label className="text-xs text-gray-600 block">What is the goal of this outreach?</label>
<textarea className="w-full text-sm text-[#2D1E12] bg-gray-50 border border-gray-200 rounded-lg p-3 min-h-[100px] focus:ring-1 focus:ring-[#FF7A00] focus:border-[#FF7A00] placeholder-gray-400 resize-none" placeholder="e.g. I want to reach out to VP of Sales at Series A startups to introduce our new automation tool. Keep it concise and friendly."></textarea>
</div>
<div className="flex flex-wrap gap-2">
<button className="text-[11px] border border-gray-200 px-2 py-1 rounded-md text-gray-600 hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50 transition-all">🎯 Book a demo</button>
<button className="text-[11px] border border-gray-200 px-2 py-1 rounded-md text-gray-600 hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50 transition-all">🤝 Partnership</button>
<button className="text-[11px] border border-gray-200 px-2 py-1 rounded-md text-gray-600 hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50 transition-all">👋 Networking</button>
</div>
<div className="pt-2 border-t border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"><i className="w-4 h-4" data-lucide="sliders-horizontal"></i></button>
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"><i className="w-4 h-4" data-lucide="globe"></i></button>
</div>
<button className="bg-[#FF7A00] hover:bg-[#e66e00] text-white text-xs font-medium px-4 py-2 rounded-lg shadow-sm shadow-orange-200 transition-all flex items-center gap-2">
                                Generate Draft
                                <i className="w-3 h-3" data-lucide="wand-2"></i>
</button>
</div>
</div>

<div className="space-y-6 pt-2">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500">
<i className="w-4 h-4" data-lucide="users"></i>
</div>
<div>
<p className="text-sm font-medium text-[#2D1E12]">Target Audience</p>
<p className="text-xs text-gray-500">Who are you sending this to?</p>
</div>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
<div>
<p className="text-sm font-medium text-[#2D1E12]">Schedule &amp; Limits</p>
<p className="text-xs text-gray-500">Weekdays, 9am - 5pm EST</p>
</div>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500">
<i className="w-4 h-4" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm font-medium text-[#2D1E12]">Sender Identity</p>
<p className="text-xs text-gray-500">david@flamey.ai</p>
</div>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="mt-auto p-4 border-t border-gray-100 bg-gray-50/50">
<div className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-gray-400 mt-0.5" data-lucide="info"></i>
<p className="text-[11px] text-gray-500 leading-relaxed">
                            AI-generated sequences perform 32% better when personalized with LinkedIn steps. <a className="text-[#FF7A00] hover:underline" href="#">Learn more</a>
</p>
</div>
</div>
</div>

<div className="flex-1 bg-gray-50/50 relative overflow-y-auto">

<div className="absolute inset-0 z-0 opacity-[0.4]" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 max-w-3xl mx-auto py-12 px-8">

<div className="flex justify-center mb-8">
<div className="bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-full flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-gray-600">Start Sequence</span>
</div>
</div>

<div className="relative pl-8 border-l-2 border-gray-200 ml-[50%] space-y-8 pb-12">

<div className="relative -ml-[25px]">

<div className="absolute left-[17px] top-8 w-4 h-4 bg-gray-50 border-2 border-gray-300 rounded-full z-10"></div>
<div className="ml-12 w-[500px] bg-white rounded-xl border border-gray-200 shadow-sm group hover:shadow-md hover:border-[#FF7A00]/30 transition-all cursor-pointer">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-[#2D1E12]">Step 1: Introduction</h4>
<span className="text-[11px] text-gray-500">Automated Email</span>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-gray-50 rounded text-gray-400"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="p-1.5 hover:bg-gray-50 rounded text-gray-400"><i className="w-3.5 h-3.5" data-lucide="trash"></i></button>
</div>
</div>
<div className="px-5 py-4 bg-gray-50/30">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-gray-500 w-12">Subject:</span>
<span className="text-xs text-[#2D1E12]">Quick question for {{company_name}}</span>
</div>
<p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                                        Hi {{first_name}}, I noticed that {{company_name}} is scaling rapidly. Usually, at this stage, handling outbound sales becomes...
                                    </p>
</div>
</div>
</div>

<div className="relative -ml-[25px] flex items-center">
<div className="absolute left-[17px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full z-10"></div>
<div className="ml-12 bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-gray-500" data-lucide="hourglass"></i>
<span className="text-xs font-medium text-gray-600">Wait for 2 days</span>
</div>
</div>

<div className="relative -ml-[25px]">

<div className="absolute left-[17px] top-8 w-4 h-4 bg-gray-50 border-2 border-gray-300 rounded-full z-10"></div>
<div className="ml-12 w-[500px] bg-white rounded-xl border border-gray-200 shadow-sm group hover:shadow-md hover:border-[#FF7A00]/30 transition-all cursor-pointer">
<div className="px-5 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0a66c2] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-[#2D1E12]">Step 2: Connection Request</h4>
<span className="text-[11px] text-gray-500">Automated Task</span>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-gray-50 rounded text-gray-400"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="p-1.5 hover:bg-gray-50 rounded text-gray-400"><i className="w-3.5 h-3.5" data-lucide="trash"></i></button>
</div>
</div>
</div>
</div>

<div className="relative -ml-[25px] flex items-center">
<div className="absolute left-[17px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full z-10"></div>
<div className="ml-12 bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-gray-500" data-lucide="hourglass"></i>
<span className="text-xs font-medium text-gray-600">Wait for 3 days</span>
</div>
</div>

<div className="relative -ml-[25px]">

<div className="absolute left-[17px] top-6 w-4 h-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-full z-10"></div>
<button className="ml-12 w-[500px] h-14 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center gap-2 text-gray-400 hover:border-[#FF7A00] hover:text-[#FF7A00] hover:bg-orange-50/50 transition-all group">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="text-sm font-medium">Add Step</span>
</button>
</div>
</div>
</div>

<button className="absolute bottom-8 right-8 w-10 h-10 bg-[#2D1E12] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
<i className="w-4 h-4" data-lucide="message-square"></i>
</button>
</div>
</div>
</main>


    </>
  );
}
