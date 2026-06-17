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
      

<header className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 shrink-0 shadow-sm z-10">
<div className="flex items-center gap-6">
<div className="font-semibold text-lg tracking-tighter flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white text-xs">C</div>
                CRS
            </div>
<div className="h-5 w-px bg-slate-200"></div>
<div className="flex items-center gap-4 text-sm">
<div className="flex items-center gap-1.5 text-slate-500">
<iconify-icon icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>APP-1023</span>
</div>
<div className="flex items-center gap-1.5 text-slate-500">
<iconify-icon icon="solar:document-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Q-2044</span>
</div>
<div className="flex items-center gap-1.5 text-slate-500">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Meydan Free Zone</span>
</div>
</div>
<div className="px-2.5 py-1 text-xs font-medium rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                AI Review Required
            </div>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
<iconify-icon icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Run AI Compliance Check
        </button>
</header>

<main className="flex flex-1 overflow-hidden w-full max-w-[1440px] mx-auto">

<div className="w-full lg:w-[65%] h-full overflow-y-auto p-6 lg:p-8 flex flex-col gap-6">
<h1 className="text-xl font-medium tracking-tight text-slate-900">Application Data</h1>

<section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-sm font-medium text-slate-800">Company Information</h2>
</div>
<div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<label className="block text-xs text-slate-500 mb-1">Company Name</label>
<div className="text-sm text-slate-900">Nexus Technologies FZ-LLC</div>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Business Activity</label>
<div className="text-sm text-slate-900">Software Development</div>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Office Type</label>
<div className="text-sm text-slate-900">Flexi Desk</div>
</div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-sm font-medium text-slate-800">Shareholders</h2>
</div>
<div className="flex flex-col">
<div className="px-5 py-3.5 border-b border-slate-50 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-medium">JD</div>
<span className="text-sm text-slate-700">John Doe</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                            Passport Uploaded
                        </div>
</div>
<div className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-medium">AK</div>
<span className="text-sm text-slate-700">Ali Khan</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                            Passport Uploaded
                        </div>
</div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-sm font-medium text-slate-800">Visa Applicants</h2>
</div>
<span className="text-xs text-slate-500">4 Applicants Total</span>
</div>
<div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-800">John Doe</div>
<div className="text-xs text-slate-500">General Manager</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-800">Ali Khan</div>
<div className="text-xs text-slate-500">Sales Director</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-800">Sara Ahmed</div>
<div className="text-xs text-slate-500">Marketing Lead</div>
</div>
</div>

<div className="flex items-center justify-between gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
<iconify-icon icon="solar:user-cross-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-amber-900">David Lee</div>
<div className="text-xs text-amber-700">Developer</div>
</div>
</div>
<span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Exceeds Limit</span>
</div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:documents-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-sm font-medium text-slate-800">Document Checklist</h2>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear"></iconify-icon>
                            Passport – John Doe
                        </div>
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
<div className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear"></iconify-icon>
                            Passport – Ali Khan
                        </div>
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>

<div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
<div className="flex items-center gap-3 text-sm text-red-900 font-medium">
<iconify-icon className="text-red-500" icon="solar:document-text-linear"></iconify-icon>
                            Passport Photo – Sara Ahmed
                        </div>
<iconify-icon className="text-red-500 text-lg" icon="solar:close-circle-linear"></iconify-icon>
</div>
</div>
</section>
<div className="h-8"></div> 
</div>

<div className="w-full lg:w-[35%] h-full overflow-y-auto bg-white border-l border-slate-200 p-6 lg:p-8 flex flex-col gap-6 shadow-[-4px_0_24px_-16px_rgba(0,0,0,0.1)] relative z-0">
<div className="flex items-center justify-between pb-2 border-b border-slate-100">
<h1 className="text-xl font-medium tracking-tight text-slate-900">AI Inspector</h1>
<div className="px-2.5 py-1 text-xs font-medium rounded-md bg-red-50 text-red-600 border border-red-100 flex items-center gap-1.5">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
                    Attention Required
                </div>
</div>

<section className="flex flex-col gap-4">
<div className="flex items-end justify-between">
<div className="text-sm font-medium text-slate-700">Overall Compliance</div>
<div className="text-2xl font-medium tracking-tight text-indigo-600">82%</div>
</div>
<div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-600 rounded-full" style={{width: '82%'}}></div>
</div>
<div className="flex flex-col gap-2 mt-2">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Quote Alignment</span>
<span className="font-medium text-slate-700">40/50</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Document Compliance</span>
<span className="font-medium text-slate-700">22/30</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Jurisdiction Rules</span>
<span className="font-medium text-green-600">20/20</span>
</div>
</div>
</section>
<hr className="border-slate-100"/>

<section className="flex flex-col gap-4">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Detected Issues</h3>

<div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FECACA] flex flex-col gap-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-red-500">
<iconify-icon className="text-lg" icon="solar:shield-cross-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#991B1B]">Visa Count Mismatch</h4>
<p className="text-xs text-[#991B1B]/80 mt-1 leading-relaxed">Quote allows 3 visas but application has 4 applicants.</p>
</div>
</div>
<button className="mt-1 w-full py-2 bg-white border border-[#FECACA] text-[#991B1B] text-xs font-medium rounded-lg hover:bg-[#FEE2E2] transition-colors shadow-sm">
                        Remove Extra Applicant
                    </button>
</div>

<div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] flex flex-col gap-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-amber-500">
<iconify-icon className="text-lg" icon="solar:gallery-remove-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#92400E]">Missing Document</h4>
<p className="text-xs text-[#92400E]/80 mt-1 leading-relaxed">Passport photo missing for Sara Ahmed.</p>
</div>
</div>
<button className="mt-1 w-full py-2 bg-white border border-[#FDE68A] text-[#92400E] text-xs font-medium rounded-lg hover:bg-[#FEF3C7] transition-colors shadow-sm">
                        Upload Document
                    </button>
</div>
</section>

<section className="mt-2 border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
<details className="group" open="">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:brain-linear"></iconify-icon>
                            AI Reasoning Log
                        </div>
<iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 pt-1 text-xs text-slate-600 flex flex-col gap-3 border-t border-slate-100">
<div>
<span className="font-medium text-slate-700 block mb-0.5">Rule evaluated:</span>
                            Visa applicants must not exceed visa quota defined in the approved quote.
                        </div>
<div className="p-2.5 bg-slate-100 rounded-lg text-slate-700 font-mono text-[11px] leading-relaxed">
                            Application.Applicants.Count (4) &gt; Quote.VisaQuota (3)
                            Result: FAIL
                        </div>
<div>
<span className="font-medium text-slate-700 block mb-0.5">Recommendation:</span>
                            Remove the extra applicant or request an updated quote with a higher visa allocation.
                        </div>
</div>
</details>
</section>
<div className="flex-1"></div>

<section className="pt-4 border-t border-slate-100 flex flex-col gap-3">
<label className="text-xs font-medium text-slate-700">Manual Override</label>
<textarea className="w-full text-sm p-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-slate-400 resize-none" placeholder="Reason for override..." rows="2"></textarea>
<button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors border border-slate-200 shadow-sm flex items-center justify-center gap-2">
                    Override &amp; Continue
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</section>
<div className="h-4"></div>
</div>
</main>

    </>
  );
}
