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
      

<div className="fixed z-0 cursor-default top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-10 w-full md:w-[45%] lg:max-w-xl bg-white h-screen flex flex-col shadow-2xl border-l border-gray-200 overflow-hidden">

<div className="flex-1 overflow-y-auto md:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="flex flex-wrap items-center justify-between gap-4 mb-6 w-full">

<span className="block text-xl font-bold tracking-tight text-gray-900">View Passport</span>

<div className="flex items-center gap-2.5">
<button className="flex items-center gap-2 px-3.5 py-2 border border-gray-200 text-gray-700 rounded-lg bg-white hover:bg-gray-50 transition-colors text-sm font-semibold shadow-sm">
<i className="w-4 h-4 text-gray-500" data-lucide="link" strokeWidth="1.5"></i>
                        Copy Link
                    </button>
<button className="flex text-sm font-semibold text-white bg-[#5B4EE8] rounded-lg pt-2 pr-3.5 pb-2 pl-3.5 shadow-sm gap-x-2 gap-y-2 items-center">
<i className="w-4 h-4 text-white" data-lucide="bookmark" strokeWidth="1.5"></i>
                        Save
                    </button>
</div>
</div>

<div className="bg-[#5B4EE8] w-full rounded-xl mb-8 pt-6 pr-6 pb-6 pl-6">

<div className="flex gap-4">
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-semibold flex-shrink-0">
                        PM
                    </div>
<div className="flex flex-col">
<h2 className="text-xl font-semibold text-white tracking-tight mb-1">Pras Mish</h2>
<span className="block text-base text-white/90 mb-1">Toronto, ON, Canada</span>
<span className="block text-sm text-white/80 mb-1">prasanna.mishra+dev_mar24@futurefit.ai</span>
<span className="block text-sm text-white">FFAI</span>
</div>
</div>
</div>

<div className="flex border-b border-gray-200 mb-8 w-full">
<div className="text-base font-semibold text-gray-900 border-[#5B4EE8] border-b-2 pr-1 pb-3 pl-1">
                    Experience
                </div>
</div>

<div className="mb-10 w-full">
<h3 className="block text-xl font-bold text-gray-900 mb-5">Work Experience</h3>
<div className="flex flex-col gap-6 w-full">

<div className="flex justify-between items-start w-full gap-4">
<div className="flex flex-col">
<span className="text-base font-semibold text-gray-900">Software Engineer</span>
<span className="block text-base text-slate-500 mt-0.5">TechCorp</span>
</div>
<span className="whitespace-nowrap text-sm text-gray-500 text-right mt-0.5">2021 – Present</span>
</div>

<div className="flex justify-between items-start w-full gap-4">
<div className="flex flex-col">
<span className="text-base font-semibold text-gray-900">Junior Developer</span>
<span className="block text-base text-slate-500 mt-0.5">StartupXYZ</span>
</div>
<span className="text-sm text-gray-500 mt-0.5 whitespace-nowrap text-right">2019 – 2021</span>
</div>
</div>
</div>

<div className="w-full">
<h3 className="block text-xl font-bold text-gray-900 mb-5">Skills</h3>

<div className="mb-6 w-full">
<h4 className="text-base font-semibold text-gray-900 mb-3 block">Technical</h4>
<div className="flex flex-wrap gap-2 w-full">
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Customer Service</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Data Structures And Algorithms</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Database Management</span>
<span className="-multi text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Programming Languages</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Scheduling</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Software Development</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Web Development</span>
</div>
</div>

<div className="w-full">
<h4 className="text-base font-semibold text-gray-900 mb-3 block">Foundational</h4>
<div className="flex flex-wrap gap-2 w-full">
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Communication Skills</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Detail-Oriented</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Developing Relationships</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Organizational Skills</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Problem Solving</span>
<span className="text-sm text-gray-900 bg-white border-gray-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Teamwork</span>
</div>
</div>
</div>
</div>

<div className="p-6 md:px-8 py-5 border-t border-gray-200 bg-white flex flex-col sm:flex-row justify-between items-center gap-4 flex-shrink-0 w-full z-20">
<span className="sm:text-left sm:w-auto text-base text-gray-500 text-center w-full">Let Pras know about relevant opportunities</span>
<button className="bg-[#5B4EE8] text-white px-5 py-2.5 rounded-lg flex items-center justify-center gap-2.5 text-base font-semibold hover:bg-indigo-700 transition-colors flex-shrink-0 w-full sm:w-auto shadow-sm">
<i className="w-5 h-5 text-white" data-lucide="message-square" strokeWidth="1.5"></i>
                Contact
            </button>
</div>
</div>


    </>
  );
}
