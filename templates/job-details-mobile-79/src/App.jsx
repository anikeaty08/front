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
      

<div className="w-full max-w-[414px] bg-white h-full shadow-2xl relative flex flex-col border-x border-gray-200">

<header className="flex-none flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-white z-20">
<button className="text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-5 text-slate-500">
<button className="hover:text-slate-800 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:plain-2-linear" width="24"></iconify-icon>
</button>
<button className="hover:text-slate-800 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:menu-dots-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto px-5 py-6">

<div className="flex items-center gap-2.5 mb-4">
<div className="w-8 h-8 rounded-full border-2 border-emerald-600 flex items-center justify-center bg-white text-emerald-600 font-medium text-base">
                    Q
                </div>
<span className="text-base text-slate-600 font-medium tracking-tight">Qlik</span>
</div>

<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1.5">Demand Specialist</h1>
<p className="text-base text-slate-500 mb-5">King of Prussia, PA (Remote)</p>

<div className="flex flex-wrap gap-2 mb-5">
<span className="inline-flex items-center bg-emerald-50 text-emerald-700 px-2.5 py-1.5 rounded-lg text-sm font-medium">
                    $44k/yr – $55K/yr
                </span>
<span className="inline-flex items-center bg-slate-100 text-slate-700 px-2.5 py-1.5 rounded-lg text-sm font-medium">
                    Mid Level
                </span>
<span className="inline-flex items-center bg-slate-100 text-slate-700 px-2.5 py-1.5 rounded-lg text-sm font-medium">
                    Full time
                </span>
</div>
<p className="text-sm text-slate-400 mb-6">Posted 1 hr ago</p>

<div className="flex items-center gap-2 text-teal-700 mb-8 px-1">
<iconify-icon height="20" icon="solar:smile-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-base">Fair match</span>
</div>

<div className="bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-100/80 rounded-2xl p-5 mb-8 shadow-sm relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

<div className="flex items-center gap-2 mb-5 relative">
<div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
<iconify-icon height="18" icon="solar:stars-linear" width="18"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">SalaryGuide AI</h2>
</div>

<div className="text-base text-slate-700 leading-relaxed mb-6 space-y-4 relative">
<p>
                        Role supports campaign execution and marketing-to-sales alignment for a data analytics leader, with exposure to CRM-driven processes and pipeline acceleration.
                    </p>
<ul className="list-disc pl-5 space-y-3 marker:text-indigo-300">
<li>Owns or assists with campaign execution and initial performance analysis</li>
<li>Must-have: Experience with CRM systems</li>
<li>Standout detail: Exposure to tools like Salesforce, LinkedIn, 6Sense, SalesLoft, ZoomInfo, and Qlik Sense in a non-commissioned learning role</li>
</ul>
</div>

<div className="h-px bg-slate-200/60 w-full mb-5"></div>

<div className="mb-5">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Suggested actions</p>
<div className="flex flex-col gap-2.5">
<button className="w-full text-left bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm text-slate-700 px-4 py-3 rounded-xl text-base transition-all group flex items-start gap-3">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 shrink-0 mt-0.5" height="20" icon="solar:chat-square-call-linear" width="20"></iconify-icon>
<span className="leading-snug">Help me write a cold outreach message for LinkedIn</span>
</button>
<button className="w-full text-left bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm text-slate-700 px-4 py-3 rounded-xl text-base transition-all group flex items-center gap-3">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 shrink-0" height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
<span>What are my chances of getting hired?</span>
</button>
<button className="w-full text-left bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm text-slate-700 px-4 py-3 rounded-xl text-base transition-all group flex items-center gap-3">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 shrink-0" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
<span>Can you show me more roles like this?</span>
</button>

<button className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 py-2 mt-1 flex items-center justify-center gap-1.5 transition-colors">
<span>More actions</span>
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="relative mt-2">
<input className="w-full bg-white border border-slate-300 rounded-xl py-3.5 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" placeholder="Ask anything about this role..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center justify-center">
<iconify-icon height="20" icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>


<div className="mb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Original job description</h2>
<p className="text-base text-slate-700 leading-relaxed">
                    Role supports campaign execution and marketing-to-sales alignment...
                </p>
<p className="text-base text-slate-700 leading-relaxed mt-4">
                    This position will offer you the chance to dive deep into our operations and learn from our seasoned team members. We are looking for someone who is detail-oriented, eager to learn, and ready to contribute to a growing environment. If you thrive in dynamic, fast-paced setups, we'd love to hear from you.
                </p>
</div>
</main>

<div className="flex-none bg-white/95 backdrop-blur-sm border-t border-slate-100 px-5 py-4 flex flex-col gap-3 z-20">
<button className="w-full bg-emerald-800 text-white px-6 py-3.5 rounded-xl font-medium text-base hover:bg-emerald-900 transition-colors flex justify-center items-center shadow-sm">
                Apply Now
            </button>
<button className="w-full px-6 py-3.5 rounded-xl font-medium text-base border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors flex justify-center items-center shadow-sm">
                Save
            </button>
</div>
</div>

    </>
  );
}
