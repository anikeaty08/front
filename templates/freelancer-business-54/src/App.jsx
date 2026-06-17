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
gtag('config', 'G-5SYZ4D1WBX');



document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const emailInput = document.getElementById("emailInput");
    const message = document.getElementById("formMessage");
    const email = emailInput.value.trim();

    if (!email || !email.includes("@")) {
        message.textContent = "Please enter a valid email.";
        message.className = "text-sm mt-4 text-red-500";
        message.classList.remove("hidden");
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbytQZsED8IFbU4FdBs_0IGAxGg7lz6W56ivr3NUksUicHMBpx-64hBNhOKOZnh7DCg/exec", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(data => {
        message.textContent = "You're on the list.";
        message.className = "text-sm mt-4 text-green-600";
        message.classList.remove("hidden");
        emailInput.value = "";
    })
    .catch(error => {
        message.textContent = "Something went wrong. Try again.";
        message.className = "text-sm mt-4 text-red-500";
        message.classList.remove("hidden");
    });
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
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tighter uppercase text-slate-900" href="#">
                HELM-FI
            </a>
<a className="transition-colors hover:text-slate-900 text-xs font-medium text-slate-500" href="#survey">
                Concept &amp; Validation
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full blur-3xl -z-10 opacity-60 bg-slate-50"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
<span className="px-2.5 py-1 rounded-full border text-xs font-medium tracking-wide uppercase bg-blue-50 border-blue-100 text-blue-600">
                    An Idea in Progress
                </span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
                What If Freelancers Managed Business <span className="text-slate-400">Without Chaos?</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                A modular system concept for clients, invoices, and workflow — help us validate if this solves your real problems.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm transition-all duration-200 font-medium rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 text-white bg-slate-900 hover:bg-slate-800 hover:shadow-slate-200" href="#survey">
                    Take the 2-Minute Survey
                    <iconify-icon className="ml-2 group-hover:translate-x-0.5 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="text-sm font-medium text-slate-500 transition-colors px-4 py-2 hover:text-slate-900" href="#notify">
                    Join the Interest List
                </a>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-100 bg-slate-50/50">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-slate-900">
                    Freelance Work Feels Fragmented
                </h2>
<p className="text-slate-500 text-base">You're likely juggling too many tabs to answer simple questions.</p>
</div>
<div className="space-y-4">
<div className="group flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md bg-white border-slate-200 hover:border-blue-200 hover:shadow-blue-100/20">
<div className="flex-shrink-0 mt-1 group-hover:text-blue-500 transition-colors text-slate-400">
<iconify-icon height="24" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-700">Tool Overload</p>
<p className="text-sm text-slate-500 mt-1">You use multiple tools just to keep track of clients and payments.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md bg-white border-slate-200 hover:border-blue-200 hover:shadow-blue-100/20">
<div className="flex-shrink-0 mt-1 group-hover:text-blue-500 transition-colors text-slate-400">
<iconify-icon height="24" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-700">Scattered Assets</p>
<p className="text-sm text-slate-500 mt-1">Projects get scattered between apps, emails, and local folders.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md bg-white border-slate-200 hover:border-blue-200 hover:shadow-blue-100/20">
<div className="flex-shrink-0 mt-1 group-hover:text-blue-500 transition-colors text-slate-400">
<iconify-icon height="24" icon="solar:bill-list-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-700">Invoicing Chaos</p>
<p className="text-sm text-slate-500 mt-1">Invoices emerge in different places and timelines, making cashflow fuzzy.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md bg-white border-slate-200 hover:border-blue-200 hover:shadow-blue-100/20">
<div className="flex-shrink-0 mt-1 group-hover:text-blue-500 transition-colors text-slate-400">
<iconify-icon height="24" icon="solar:tuning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-700">Unstructured Workflow</p>
<p className="text-sm text-slate-500 mt-1">Workflow becomes noisy and unstructured, killing your deep work.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
<div className="md:w-1/3">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-slate-900">
                        The Concept
                    </h2>
<p className="text-sm text-slate-500 uppercase tracking-widest font-medium mb-2 text-blue-600">HELM-FI</p>
<p className="text-base leading-relaxed text-slate-600">
                        A modular business operating system concept designed to help freelancers organize clients, invoices, and workflows in one simple structure.
                    </p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="space-y-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-slate-50 border-slate-100 text-slate-900">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900">Unified Overview</h3>
<p className="text-sm text-slate-500 leading-relaxed">See every client interaction and status in a single pane of glass.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-slate-50 border-slate-100 text-slate-900">
<iconify-icon height="20" icon="solar:card-transfer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900">Streamlined Finance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Track invoices from sent to paid without opening accounting software.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-slate-50 border-slate-100 text-slate-900">
<iconify-icon height="20" icon="solar:widget-5-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900">Modular Control</h3>
<p className="text-sm text-slate-500 leading-relaxed">Turn features on or off. Only see what you need for your workflow.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y bg-slate-50 border-slate-200" id="survey">
<div className="max-w-4xl mx-auto px-6 text-center mb-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-slate-900">
                Help Shape HELM-FI
            </h2>
<p className="text-base text-slate-500 max-w-xl mx-auto">
                We’re talking to real operators before building anything. Your insight will help us understand whether this problem is real and worth solving.
            </p>
</div>
<div className="max-w-3xl mx-auto px-4 md:px-0">
<div className="rounded-2xl shadow-sm border overflow-hidden relative bg-white border-slate-200">
<div className="absolute top-0 w-full h-1 bg-gradient-to-r via-blue-500 from-slate-200 to-slate-200"></div>

<iframe className="w-full bg-white" frameborder="0" height="800" marginheight="0" marginwidth="0" src="https://docs.google.com/forms/d/e/1FAIpQLSd-x-qW72X83YkMv2SH6d5W7JLhsrhSoALLS_VwbLDSXOZ_1g/viewform?embedded=true" width="100%">
                  Loading survey...
                </iframe>
<div className="p-4 border-t text-center md:hidden bg-slate-50 border-slate-100">
<a className="text-sm font-medium text-blue-600 hover:text-blue-700" href="https://docs.google.com/forms/d/e/1FAIpQLSd-x-qW72X83YkMv2SH6d5W7JLhsrhSoALLS_VwbLDSXOZ_1g/viewform" target="_blank">
                        Trouble loading? Open survey in new tab →
                    </a>
</div>
</div>
<p className="text-xs text-center mt-4 text-slate-400">
                Survey takes &lt; 2 minutes. No spam. Just research.
            </p>
</div>
</section>

<section className="py-24 bg-white" id="notify">
<div className="max-w-xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 bg-slate-100 text-slate-900">
<iconify-icon height="24" icon="solar:bell-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-slate-900">
                Get Notified If We Build This
            </h2>
<p className="text-slate-500 mb-8">
                Leave your email to receive updates and early access when HELM-FI moves into development.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" id="emailForm">
<input className="flex-1 appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm" id="emailInput" placeholder="Enter your email" required="" type="email"/>
<button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-all" type="submit">
        Notify Me
    </button>
</form>
<p className="text-sm mt-4 hidden" id="formMessage"></p>
<p className="text-xs mt-4 text-slate-400">No spam. Updates only.</p>
</div>
</section>

<footer className="py-12 border-t border-slate-100 bg-slate-50">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight uppercase text-slate-900">HELM-FI</span>
<span className="text-xs border-l pl-2 ml-2 text-slate-400 border-slate-300">Concept Validation</span>
</div>
<p className="text-xs text-slate-400">
                © 2023 HELM-FI Concept. All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
