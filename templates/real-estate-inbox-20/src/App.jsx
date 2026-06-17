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
      

<nav className="w-16 border-r border-gray-200 flex flex-col items-center py-5 gap-6 bg-gray-50/50 shrink-0 z-20">
<div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center mb-2 shadow-sm">
<span className="font-bold text-lg tracking-tighter">N</span>
</div>
<div className="flex flex-col gap-6 w-full items-center">
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon></button>
<div className="relative group">
<button className="text-blue-600 bg-blue-50/80 p-2 rounded-xl transition-colors shadow-sm"><iconify-icon icon="solar:inbox-linear" width="22"></iconify-icon></button>
<div className="absolute right-1 top-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon></button>
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon icon="solar:home-smile-linear" width="22"></iconify-icon></button>
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon icon="solar:chart-2-linear" width="22"></iconify-icon></button>
</div>
<div className="mt-auto flex flex-col gap-5 items-center pb-2">
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon icon="solar:settings-linear" width="22"></iconify-icon></button>
<img className="w-8 h-8 rounded-full border border-gray-200 object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer" src="https://i.pravatar.cc/100?img=33"/>
</div>
</nav>

<div className="w-[380px] flex flex-col border-r border-gray-200 shrink-0 bg-white">

<div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between h-16 shrink-0">
<h2 className="text-base font-semibold text-gray-900 tracking-tight">Inbox</h2>
<div className="flex gap-2">
<button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-all">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-all">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="px-4 py-3">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/20 focus:bg-white transition-all placeholder-gray-400 font-normal" placeholder="Search messages..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="px-4 py-3.5 border-l-[3px] border-l-blue-600 bg-blue-50/30 cursor-pointer group hover:bg-blue-50/50 transition-colors flex gap-3">
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-gray-900 truncate">Lucas Pelloni</span>
<span className="text-xs text-gray-500 tabular-nums">14:20</span>
</div>
<div className="font-medium text-gray-800 text-xs mb-1 truncate tracking-tight">Anfrage: 4.5-Zimmer-Wohnung</div>
<p className="text-xs text-gray-500 line-clamp-1">Guten Tag, ist die Wohnung noch verfügbar? Ich würde gerne...</p>
</div>
<div className="w-12 h-12 shrink-0 rounded-lg bg-gray-200 overflow-hidden border border-gray-200/50 mt-1">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
</div>

<div className="px-4 py-3.5 border-l-[3px] border-l-transparent border-b border-gray-50 hover:bg-gray-50 cursor-pointer group transition-colors flex gap-3">
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-gray-900 truncate">Severin Wullschleger</span>
<span className="text-xs font-semibold text-blue-600 tabular-nums">09:45</span>
</div>
<div className="font-medium text-gray-900 text-xs mb-1 truncate tracking-tight">Besichtigungstermin bestätigen</div>
<p className="text-xs text-gray-500 line-clamp-1 text-gray-600 font-medium">Vielen Dank für die Einladung. Dienstag passt mir gut.</p>
</div>
<div className="w-12 h-12 shrink-0 rounded-lg bg-gray-200 overflow-hidden border border-gray-200 mt-1">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
</div>

<div className="px-4 py-3.5 border-l-[3px] border-l-transparent border-b border-gray-50 hover:bg-gray-50 cursor-pointer group transition-colors flex gap-3 opacity-80 hover:opacity-100">
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<span className="font-medium text-gray-700 truncate">Lexus Kuphal</span>
<span className="text-xs text-gray-400 tabular-nums">Yesterday</span>
</div>
<div className="text-gray-600 text-xs mb-1 truncate tracking-tight">Application documents received</div>
<p className="text-xs text-gray-400 line-clamp-1">Here are the documents you requested regarding the rental...</p>
</div>
<div className="w-12 h-12 shrink-0 rounded-lg bg-gray-200 overflow-hidden border border-gray-200 mt-1">
<img className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1600596542815-3ad19fb2a258?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
</div>

<div className="px-4 py-3.5 border-l-[3px] border-l-transparent border-b border-gray-50 hover:bg-gray-50 cursor-pointer group transition-colors flex gap-3 opacity-80 hover:opacity-100">
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<span className="font-medium text-gray-700 truncate">Maria Garcia</span>
<span className="text-xs text-gray-400 tabular-nums">Jan 12</span>
</div>
<div className="text-gray-600 text-xs mb-1 truncate tracking-tight">Question about parking</div>
<p className="text-xs text-gray-400 line-clamp-1">Is there a garage included in the rent or is it extra?</p>
</div>
<div className="w-12 h-12 shrink-0 rounded-lg bg-gray-200 overflow-hidden border border-gray-200 mt-1">
<img className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
</div>
</div>
</div>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-16 flex items-center justify-between px-8 shrink-0 bg-white">
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Archive">
<iconify-icon icon="solar:archive-down-minimlistic-linear" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Report Spam">
<iconify-icon icon="solar:danger-circle-linear" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Delete">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
<div className="w-px h-4 bg-gray-200 mx-2"></div>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Mark as unread">
<iconify-icon icon="solar:letter-unread-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-4 text-gray-400">
<span className="text-xs font-medium">1 of 34</span>
<div className="flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 hover:text-gray-600 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 hover:text-gray-600 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto px-8 pb-8">

<div className="pt-4 pb-6 border-b border-gray-100 mb-8">
<div className="flex items-start justify-between gap-4 mb-5">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight leading-snug">
                        Anfrage: 4.5-Zimmer-Wohnung in Zürich (Ref. SM-8298)
                    </h1>
<span className="shrink-0 px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium border border-blue-100">Active Deal</span>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 hover:border-blue-200 transition-all cursor-pointer group">
<div className="h-12 w-16 shrink-0 rounded-lg overflow-hidden bg-gray-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="min-w-0">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5 flex items-center gap-1">
<iconify-icon icon="solar:home-2-linear" width="12"></iconify-icon> Property
                            </div>
<div className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">4.5 Room Apartment Zürich</div>
<div className="text-xs text-gray-500">3,100 CHF • Ref: SM-8298</div>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 hover:border-blue-200 transition-all cursor-pointer group">
<div className="h-12 w-12 shrink-0 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-blue-200">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">L</div>
</div>
<div className="min-w-0">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5 flex items-center gap-1">
<iconify-icon icon="solar:user-id-linear" width="12"></iconify-icon> Lead
                            </div>
<div className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">Lucas Pelloni</div>
<div className="flex items-center gap-2 text-xs text-gray-500">
<span className="truncate">lucas.pelloni@gmail.com</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="tabular-nums">+41 79 123 45 67</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-8">

<div className="relative group cursor-pointer">
<div className="absolute left-4 top-8 bottom-0 w-px bg-gray-200 group-last:hidden"></div>
<div className="flex gap-4">
<div className="shrink-0 relative z-10">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold border-2 border-white shadow-sm">L</div>
</div>
<div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="font-semibold text-gray-900 text-sm">Lucas Pelloni</span>
<span className="text-xs text-gray-500">&lt;lucas.pelloni@gmail.com&gt;</span>
</div>
<span className="text-xs text-gray-500">Tue, Jan 16, 2:20 PM</span>
</div>
<div className="text-gray-500 text-sm truncate">
                                Guten Tag, ich interessiere mich für die ausgeschriebene 4.5-Zimmer-Wohnung in Zürich...
                            </div>
</div>
</div>
</div>

<div className="relative">
<div className="flex gap-4">
<div className="shrink-0">
<img className="w-10 h-10 rounded-full border border-gray-200 shadow-sm" src="https://i.pravatar.cc/100?img=12"/>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<div className="flex items-baseline gap-2">
<span className="font-bold text-gray-900">Lucas Pelloni</span>
<span className="text-xs text-gray-500 font-normal">to me</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-gray-500">Today, 2:45 PM (2 hours ago)</span>
<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:reply-linear" width="16"></iconify-icon></button>
<button className="text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</div>
</div>
</div>

<div className="mt-6 text-sm text-gray-800 leading-7 space-y-4 max-w-3xl">
<p>Guten Tag Severin,</p>
<p>Vielen Dank für die rasche Rückmeldung.</p>
<p>Gerne würde ich die Wohnung besichtigen. Wäre ein Termin morgen Vormittag um 10:00 Uhr möglich? Alternativ hätte ich auch am Donnerstag Nachmittag Zeit.</p>
<p>Freundliche Grüsse,<br/>Lucas</p>

<div className="pt-4 border-t border-gray-100 mt-6">
<div className="inline-flex items-center gap-3 p-2 pr-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded bg-red-50 text-red-500 flex items-center justify-center">
<iconify-icon icon="solar:file-text-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900 group-hover:text-blue-600">Betreibungsregisterauszug.pdf</span>
<span className="text-[10px] text-gray-400">145 KB</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 z-10">
<div className="flex gap-4 items-start">
<img className="w-8 h-8 rounded-full border border-gray-200" src="https://i.pravatar.cc/100?img=33"/>
<div className="flex-1 relative shadow-sm rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all bg-white">
<div className="p-3 min-h-[60px] text-sm text-gray-600" contenteditable="true">
                        Click here to <span className="text-gray-400">Reply</span> to Lucas...
                    </div>
<div className="px-2 py-2 flex items-center justify-between border-t border-gray-100 bg-gray-50/50 rounded-b-lg">
<div className="flex gap-1">
<button className="p-1.5 text-gray-400 hover:text-gray-700 rounded hover:bg-gray-200/50">
<iconify-icon icon="solar:text-bold-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-gray-400 hover:text-gray-700 rounded hover:bg-gray-200/50">
<iconify-icon icon="solar:paperclip-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-gray-400 hover:text-gray-700 rounded hover:bg-gray-200/50">
<iconify-icon icon="solar:gallery-linear" width="16"></iconify-icon>
</button>
</div>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm flex items-center gap-1.5">
                            Send <iconify-icon icon="solar:plain-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<aside className="w-[320px] bg-white border-l border-gray-200 flex flex-col shrink-0 overflow-y-auto hidden xl:flex">

<div className="h-14 flex items-center justify-between px-6 border-b border-gray-100 shrink-0">
<h3 className="font-semibold text-gray-900 text-sm">Context</h3>
<button className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-md hover:bg-gray-50">
<iconify-icon icon="solar:sidebar-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
<div className="divide-y divide-gray-100">

<div className="p-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Lead Details</h3>
<button className="text-blue-600 hover:text-blue-700 text-xs font-medium">Edit</button>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg font-bold border-2 border-white shadow-sm ring-1 ring-gray-100">L</div>
<div>
<div className="font-bold text-gray-900">Lucas Pelloni</div>
<div className="text-xs text-gray-500">Applicant • High Intent</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<div className="truncate text-gray-700">lucas.pelloni@gmail.com</div>
</div>
<div className="flex items-center gap-3 text-sm">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
</div>
<div className="text-gray-700">+41 79 123 45 67</div>
</div>
<div className="flex items-center gap-3 text-sm">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
<iconify-icon icon="solar:calendar-date-linear" width="16"></iconify-icon>
</div>
<div className="text-gray-700">Created Jan 16, 2024</div>
</div>
</div>
</div>

<div className="p-6 bg-gradient-to-b from-purple-50/40 to-white">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-purple-600" icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
<h3 className="text-xs font-semibold text-purple-900/80 uppercase tracking-wider">AI Insights</h3>
</div>
<div className="space-y-3">
<div className="bg-white border border-purple-100 rounded-lg p-3 shadow-sm">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-gray-500">Match Score</span>
<span className="text-xs font-bold text-purple-600">92%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-purple-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
<div className="text-xs leading-relaxed text-gray-600">
<span className="font-semibold text-gray-900">Summary:</span> User is highly interested in the 4.5 room apartment. Mentioned flexible viewing times. Documents provided (Solvency Check).
                    </div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-2 py-1 rounded bg-white border border-purple-100 text-purple-700 text-[10px] font-medium shadow-sm">Positive Sentiment</span>
<span className="px-2 py-1 rounded bg-white border border-purple-100 text-purple-700 text-[10px] font-medium shadow-sm">Urgent</span>
</div>
</div>
</div>

<div className="p-6">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    Search Profile 
                    <iconify-icon icon="solar:tuning-2-linear" width="14"></iconify-icon>
</h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs border border-gray-200">Zürich City</span>
<span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs border border-gray-200">Max 3,500 CHF</span>
<span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs border border-gray-200">Min 3.5 Rooms</span>
<span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs border border-gray-200">Balcony</span>
</div>
<div className="text-xs text-gray-500 italic">
                    Matches 3 other active listings in your portfolio.
                </div>
</div>

<div className="p-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Property</h3>
<button className="text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon></button>
</div>
<div className="bg-gray-50 rounded-xl p-3 border border-gray-100 mb-4 group cursor-pointer hover:border-blue-200 transition-colors">
<div className="relative h-28 mb-3 overflow-hidden rounded-lg">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-gray-900 shadow-sm">3,100 CHF</div>
<div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">Active</div>
</div>
<div className="text-sm font-semibold text-gray-900 leading-tight mb-1">Modern 4.5 Room Apartment</div>
<div className="text-xs text-gray-500 mb-2">8004 Zürich • Langstrasse 14</div>
<div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-200 pt-2">
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear" width="12"></iconify-icon> 112m²</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear" width="12"></iconify-icon> 4.5</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear" width="12"></iconify-icon> 2</span>
</div>
</div>
</div>
</div>
</aside>

    </>
  );
}
