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
      

<header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0 bg-white/80 backdrop-blur-md z-20">
<div className="font-medium tracking-tighter text-xl text-gray-900">WK.</div>
<button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 border border-gray-200 hover:bg-gray-100 transition-colors">
<iconify-icon height="16" icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</header>

<main className="flex-1 overflow-y-auto w-full scroll-smooth">
<div className="max-w-3xl mx-auto p-4 sm:p-6 pb-56 space-y-12">

<div className="flex gap-4 flex-row-reverse animate-fade-in-up">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-200">
<iconify-icon className="text-gray-500" height="16" icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex items-center">
<div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-3 cursor-default">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
<iconify-icon className="text-gray-600" height="18" icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Alex_Marketing_Resume.pdf</p>
<p className="text-xs text-gray-500">2.4 MB</p>
</div>
<iconify-icon className="text-gray-900 ml-2" height="18" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
<iconify-icon className="text-white" height="16" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="space-y-5 w-full max-w-2xl">
<div className="text-sm text-gray-700 leading-relaxed space-y-4">
<p>Hi Alex! Thanks for sharing your resume. I see you have some impressive experience driving growth and leading marketing campaigns over the last 4 years. That background is highly sought after right now.</p>
<p>Let's get your profile set up so I can curate the right opportunities. What is your preferred work arrangement?</p>
</div>

<div className="bg-white border border-gray-100 rounded-3xl p-2 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
<div className="grid grid-cols-3 gap-2">

<button className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-900 bg-gray-50 transition-all">
<iconify-icon className="text-gray-900" height="24" icon="solar:laptop-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Remote</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-transparent hover:bg-gray-50 hover:border-gray-200 text-gray-500 transition-all">
<iconify-icon height="24" icon="solar:buildings-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">Hybrid</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-transparent hover:bg-gray-50 hover:border-gray-200 text-gray-500 transition-all">
<iconify-icon height="24" icon="solar:city-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">Onsite</span>
</button>
</div>
<div className="mt-4 px-2 pb-2">
<label className="text-xs text-gray-500 mb-1.5 block px-1">Location preference</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-gray-400" height="18" icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-gray-300 transition-shadow" type="text" value="San Francisco, CA or Anywhere (US)"/>
</div>
<div className="flex justify-end mt-3">
<button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors">Confirm</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse opacity-70">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-200">
<iconify-icon className="text-gray-500" height="16" icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex items-center">
<div className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2 text-sm text-gray-700">
                        Remote • San Francisco, CA or Anywhere (US)
                    </div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
<iconify-icon className="text-white" height="16" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="space-y-4 w-full max-w-2xl">
<p className="text-sm text-gray-700 leading-relaxed">
                        Got it. Remote work offers great flexibility. Based on your marketing experience, what kind of company environments do you thrive in?
                    </p>

<div className="flex flex-wrap gap-2 pt-1">

<button className="border border-gray-900 bg-gray-900 text-white rounded-full px-4 py-2 text-sm transition-all flex items-center gap-1.5 shadow-sm">
                            Early Stage (Seed/A)
                            <iconify-icon className="opacity-80" height="14" icon="solar:close-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>

<button className="border border-gray-900 bg-gray-900 text-white rounded-full px-4 py-2 text-sm transition-all flex items-center gap-1.5 shadow-sm">
                            Growth (Series B-D)
                            <iconify-icon className="opacity-80" height="14" icon="solar:close-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>

<button className="border border-gray-200 bg-white text-gray-600 rounded-full px-4 py-2 text-sm hover:border-gray-300 hover:bg-gray-50 transition-all">
                            Enterprise (Public)
                        </button>
<button className="border border-gray-200 bg-white text-gray-600 rounded-full px-4 py-2 text-sm hover:border-gray-300 hover:bg-gray-50 transition-all">
                            Agency / Studio
                        </button>
<button className="border border-gray-200 bg-white text-gray-600 rounded-full px-4 py-2 text-sm hover:border-gray-300 hover:bg-gray-50 transition-all">
                            Bootstrapped
                        </button>
</div>
<div className="flex justify-start">
<button className="bg-gray-100 text-gray-900 border border-gray-200 text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors mt-2">Next step</button>
</div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse opacity-70">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-200">
<iconify-icon className="text-gray-500" height="16" icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex items-center">
<div className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2 text-sm text-gray-700">
                        Early Stage, Growth
                    </div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
<iconify-icon className="text-white" height="16" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="space-y-4 w-full max-w-2xl">
<p className="text-sm text-gray-700 leading-relaxed">
                        Startups are an excellent place to make a significant impact. Finally, to help me gauge the right pacing, how actively are you looking?
                    </p>

<div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
<button className="w-full text-left px-5 py-4 border-b border-gray-50 text-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                            Just casually browsing
                            <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-gray-400"></div>
</button>

<button className="w-full text-left px-5 py-4 border-b border-gray-50 text-sm font-medium text-gray-900 bg-gray-50 flex items-center justify-between relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-900 rounded-r-sm"></div>
                            Open to the right opportunity
                            <div className="w-4 h-4 rounded-full border-4 border-gray-900 bg-white"></div>
</button>
<button className="w-full text-left px-5 py-4 border-b border-gray-50 text-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                            Actively interviewing
                            <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-gray-400"></div>
</button>
<button className="w-full text-left px-5 py-4 text-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                            Need a role immediately
                            <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-gray-400"></div>
</button>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
<iconify-icon className="text-white" height="16" icon="solar:stars-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="space-y-5 w-full">
<p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
                        Perfect. I've analyzed your profile and preferences against current openings. Here are a few curated roles that look like a very strong match to get started:
                    </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="border border-gray-200 rounded-2xl p-5 bg-white hover:border-gray-300 transition-colors group relative cursor-pointer flex flex-col justify-between min-h-[160px]">
<div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center font-medium tracking-tight text-gray-900">
                                            NX
                                        </div>
<div>
<p className="text-xs text-gray-500 font-medium tracking-tight uppercase">Nexus</p>
<p className="text-xs text-gray-400">2 hours ago</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight leading-snug">Senior Growth Marketer</h3>
<p className="text-sm text-gray-500 mt-1">$120k - $150k • 0.2% Equity</p>
</div>
<div className="flex gap-2 mt-4">
<span className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md">Remote</span>
<span className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md">Series A</span>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-5 bg-white hover:border-gray-300 transition-colors group relative cursor-pointer flex flex-col justify-between min-h-[160px]">
<div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center font-medium tracking-tight text-gray-900">
                                            OR
                                        </div>
<div>
<p className="text-xs text-gray-500 font-medium tracking-tight uppercase">Orbit</p>
<p className="text-xs text-gray-400">1 day ago</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight leading-snug">Product Marketing Manager</h3>
<p className="text-sm text-gray-500 mt-1">$140k - $170k</p>
</div>
<div className="flex gap-2 mt-4">
<span className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md">Remote (US)</span>
<span className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md">GTM Strategy</span>
</div>
</div>
</div>
<button className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors mt-2">
                        View 14 more matches
                        <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-10 pb-6 px-4 z-10">
<div className="max-w-3xl mx-auto flex flex-col gap-3">

<div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
<button className="flex-shrink-0 border border-gray-200 bg-white rounded-full px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Interview prep
                </button>
<button className="flex-shrink-0 border border-gray-200 bg-white rounded-full px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:wad-of-money-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Negotiation coach
                </button>
<button className="flex-shrink-0 border border-gray-200 bg-white rounded-full px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:target-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Job hunt strategy
                </button>
<button className="flex-shrink-0 border border-gray-200 bg-white rounded-full px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:map-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Career planning
                </button>
</div>

<div className="relative flex items-end bg-white border border-gray-200 rounded-3xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] focus-within:ring-1 focus-within:ring-gray-300 focus-within:border-gray-300 transition-all p-2 pl-4">
<button className="mb-1.5 mr-2 text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0">
<iconify-icon height="20" icon="solar:paperclip-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<textarea className="w-full bg-transparent outline-none text-sm text-gray-900 placeholder-gray-400 resize-none max-h-32 min-h-[24px] py-1.5 leading-relaxed" placeholder="Ask anything about marketing jobs, salaries, career advice etc." rows="1"></textarea>
<button className="mb-1.5 mx-2 text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0">
<iconify-icon height="20" icon="solar:microphone-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white flex-shrink-0 hover:bg-gray-800 transition-colors">
<iconify-icon height="18" icon="solar:arrow-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="text-center">
<p className="text-[10px] text-gray-400">AI can make mistakes. Verify important information regarding salaries and roles.</p>
</div>
</div>
</div>

    </>
  );
}
