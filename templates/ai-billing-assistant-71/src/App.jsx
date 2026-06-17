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
      

<aside className="flex flex-col shrink-0 bg-white w-20 h-full border-indigo-200 border-r pt-6 pb-6 relative items-center">

<div className="flex text-xl font-semibold text-blue-500 tracking-tighter mb-10 items-center justify-center">
            HB
        </div>

<nav className="flex flex-col gap-6 w-full px-4">
<a aria-label="AI Assistant" className="flex justify-center transition-colors group text-blue-500 bg-blue-50 rounded-xl pt-3 pr-3 pb-3 pl-3 relative" href="#">
<iconify-icon className="" height="24" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</a>
<a aria-label="Claims" className="flex justify-center p-3 rounded-xl text-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors relative group" href="#">
<svg className="" data-icon-set="solar" data-solar="documents-minimalistic-linear" height="24" style={{strokeWidth: '1.5px', color: 'rgb(79, 70, 229)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></path><path d="M9 13h6M9 9h6m-6 8h3M2 19V5m20 14V5" strokeLinecap="round"></path></g></svg>
</a>
<a aria-label="Patients" className="flex justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-colors group text-indigo-400 rounded-xl pt-3 pr-3 pb-3 pl-3 relative" href="#">
<iconify-icon className="" height="24" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</a>
<a aria-label="Analytics" className="flex justify-center p-3 rounded-xl text-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors relative group" href="#">
<iconify-icon height="24" icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</a>
</nav>

<div className="flex flex-col gap-6 w-full mt-auto pr-4 pl-4 items-center">
<a aria-label="Settings" className="flex justify-center p-3 rounded-xl text-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors relative group" href="#">
<iconify-icon height="24" icon="solar:settings-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</a>
<button className="w-10 h-10 rounded-full border border-indigo-200 overflow-hidden hover:border-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
<img alt="User Avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=32"/>
</button>
</div>
</aside>

<main className="flex-1 min-w-0 flex flex-col h-full bg-indigo-50">

<header className="h-20 px-8 lg:px-12 flex items-center justify-between border-b border-indigo-200/50 bg-white/80 backdrop-blur-md sticky top-0 z-10 shrink-0">
<div className="flex items-center gap-4">
<h1 className="font-['Open_Sans'] text-xl font-semibold tracking-tight text-indigo-900">AI Billing Assistant</h1>
<div className="h-4 w-px bg-indigo-200 hidden sm:block"></div>
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-indigo-100 rounded-full border border-indigo-200">
<span className="text-xs font-medium text-indigo-500">Active Context:</span>
<span className="text-xs font-semibold text-indigo-700">None selected</span>
<iconify-icon className="text-indigo-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="14"></iconify-icon>
</div>
</div>
<button className="relative p-2.5 text-indigo-400 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-100 border border-transparent hover:border-indigo-200">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-blue-500 rounded-full border border-indigo-100"></span>
</button>
</header>

<div className="flex-1 overflow-y-auto p-8 lg:p-12 w-full">
<div className="w-full max-w-3xl mr-auto ml-auto space-y-8">

<div className="text-center space-y-2 mb-12 chat-animate" style={{animationDelay: '0s'}}>
<div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-200/50">
<iconify-icon icon="solar:medical-kit-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-indigo-900 font-['Open_Sans']">How can I help with billing today?</h2>
<p className="text-sm text-indigo-500">Analyze claims, look up ICD-10/CPT codes, or draft appeal letters.</p>
</div>

<div className="flex gap-4 chat-animate" style={{animationDelay: '0.1s'}}>
<img alt="User" className="w-8 h-8 rounded-full border border-indigo-200 shrink-0 object-cover" src="https://i.pravatar.cc/150?img=32"/>
<div className="flex flex-col gap-1.5 w-full">
<span className="text-xs font-semibold text-indigo-900 pl-1">You</span>
<div className="text-sm text-indigo-700 bg-white border border-indigo-200 p-4 rounded-2xl shadow-sm rounded-tl-none w-fit">
                            Can you check why claim #CLM-9923 was denied by BlueCross?
                        </div>
</div>
</div>

<div className="flex gap-4 chat-animate" style={{animationDelay: '0.2s'}}>
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0 text-white shadow-sm">
<iconify-icon icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5 w-full">
<span className="text-xs font-semibold text-indigo-900 pl-1">Billing Assistant</span>
<div className="text-sm text-indigo-700 bg-white border border-indigo-200 p-5 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.03)] rounded-tl-none space-y-5 w-full">
<p className="leading-relaxed">I've reviewed the Remittance Advice for claim <strong className="text-indigo-900 font-semibold">#CLM-9923</strong>. It was denied with the following standard reason code:</p>

<div className="bg-cyan-50/50 border border-cyan-100 rounded-xl p-4 flex gap-3">
<iconify-icon className="text-cyan-500 shrink-0 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
<div>
<p className="text-sm font-semibold text-cyan-900 mb-1">PR-50: Medical Necessity</p>
<p className="text-sm text-cyan-700/80 leading-relaxed">These are non-covered services because this is not deemed a 'medical necessity' by the payer.</p>
</div>
</div>
<p className="leading-relaxed">The primary diagnosis code submitted was <code className="bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded border border-indigo-200 text-xs font-medium">J01.90</code> (Acute sinusitis, unspecified). However, the procedure code <code className="bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded border border-indigo-200 text-xs font-medium">31256</code> (Nasal/sinus endoscopy) requires a more specific chronic diagnosis or detailed documentation of medical necessity according to BlueCross policy guidelines.</p>

<div className="border-t border-indigo-100 pt-4 mt-2">
<p className="font-medium text-indigo-900 mb-3 text-xs uppercase tracking-wider">Suggested Next Steps</p>
<ul className="space-y-3">
<li className="flex gap-3 items-start group cursor-pointer hover:bg-indigo-50 p-2 -mx-2 rounded-lg transition-colors">
<div className="w-5 h-5 rounded border border-indigo-200 bg-white flex items-center justify-center shrink-0 mt-0.5 group-hover:border-blue-300">
<iconify-icon className="text-indigo-400 group-hover:text-blue-500" icon="solar:folder-with-files-linear" width="12"></iconify-icon>
</div>
<span className="text-indigo-600">Review clinical notes for a specific chronic ICD-10 code (e.g., J32.0).</span>
</li>
<li className="flex gap-3 items-start group cursor-pointer hover:bg-indigo-50 p-2 -mx-2 rounded-lg transition-colors">
<div className="w-5 h-5 rounded border border-indigo-200 bg-white flex items-center justify-center shrink-0 mt-0.5 group-hover:border-blue-300">
<iconify-icon className="text-indigo-400 group-hover:text-blue-500" icon="solar:pen-new-square-linear" width="12"></iconify-icon>
</div>
<span className="text-indigo-600">Draft an appeal letter and attach the operative report.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="flex gap-4 chat-animate" style={{animationDelay: '0.3s'}}>
<img alt="User" className="w-8 h-8 rounded-full border border-indigo-200 shrink-0 object-cover" src="https://i.pravatar.cc/150?img=32"/>
<div className="flex flex-col gap-1.5 w-full">
<span className="text-xs font-semibold text-indigo-900 pl-1">You</span>
<div className="text-sm text-indigo-700 bg-white border border-indigo-200 p-4 rounded-2xl shadow-sm rounded-tl-none w-fit">
                            Draft the appeal letter based on the operative report in the patient's file.
                        </div>
</div>
</div>

<div className="flex gap-4 chat-animate" style={{animationDelay: '0.4s'}}>
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 border border-blue-200/50">
<iconify-icon icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs font-semibold text-indigo-900 pl-1">Billing Assistant</span>
<div className="text-sm text-indigo-500 bg-transparent py-2 flex items-center gap-2.5 w-fit">
<iconify-icon className="animate-pulse text-blue-500" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                            Drafting formal appeal letter...
                        </div>
</div>
</div>
</div>
</div>

<div className="p-6 lg:px-12 bg-white/80 backdrop-blur-md border-t border-indigo-200/50 shrink-0 z-10">
<div className="max-w-3xl mx-auto flex flex-col gap-3">
<div className="relative flex items-end gap-2 bg-white border border-indigo-300 rounded-2xl shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all p-2">
<button className="p-2 text-indigo-400 hover:text-indigo-600 transition-colors rounded-xl hover:bg-indigo-50 shrink-0 focus:outline-none" title="Attach EOB or Medical Record">
<iconify-icon icon="solar:paperclip-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</button>
<textarea className="w-full bg-transparent border-none text-sm focus:outline-none focus:ring-0 text-indigo-700 placeholder:text-indigo-400 resize-none py-2.5 max-h-32 overflow-y-auto font-sans" placeholder="Ask about a claim, ICD-10 code, or patient balance..." rows="1"></textarea>
<button className="p-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-xl shadow-sm shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" title="Send message">
<iconify-icon icon="solar:plain-2-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</button>
</div>
<p className="text-center text-xs text-indigo-400 font-medium">AI can make mistakes. Always verify medical codes and patient PHI before submission.</p>
</div>
</div>
</main>

    </>
  );
}
