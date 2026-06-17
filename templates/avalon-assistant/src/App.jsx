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
      

<div className="fixed inset-0 -z-10 h-full w-full bg-slate-50 overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=2500&amp;q=80')] bg-cover bg-center bg-no-repeat blur-[16px] opacity-[0.25] scale-110 saturate-50"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.25]"></div>
<div className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[40%] w-[60%] rounded-full bg-blue-200/50 opacity-50 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[40%] w-[40%] rounded-full bg-slate-300/40 opacity-50 blur-[100px]"></div>
</div>
<header className="w-full bg-white/60 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="tracking-tighter font-semibold text-xl text-slate-900 uppercase">
                Avalon
            </div>
</div>
</header>
<main className="w-full flex-grow relative z-10">
<section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Experience Avalon Realty Group’s AI Assistant
            </h1>
<p className="text-lg sm:text-xl font-normal text-slate-600 mb-6">
                Instant answers, 24/7 support, and a smarter real estate experience.
            </p>
<p className="text-base text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                This live AI assistant demo is designed to assist buyers, sellers, and general inquiries effortlessly. Discover how our intelligent assistant can elevate the Avalon Realty Group experience right here on this page.
            </p>
<div className="flex flex-col items-center gap-4 mt-8">
<button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md ring-1 ring-blue-600/50 cursor-default">
<iconify-icon height="20" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Start Chatting
                </button>
<span className="text-xs text-slate-400 mt-2 font-medium">
                    Look for the chat bubble in the bottom right corner to begin.
                </span>
</div>
</section>
<section className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-200/40">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 mb-6 border border-blue-100/50 shadow-sm">
<iconify-icon height="24" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Instant Responses</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Get immediate answers to common real estate questions without waiting for business hours or return calls.
                    </p>
</div>
<div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 mb-6 border border-blue-100/50 shadow-sm">
<iconify-icon height="24" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">24/7 Availability</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Our AI works around the clock, ensuring clients always have access to support whenever they need it.
                    </p>
</div>
<div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 mb-6 border border-blue-100/50 shadow-sm">
<iconify-icon height="24" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Real Estate Guidance</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Receive helpful insights and detailed step-by-step guidance for both buyers and sellers navigating the market.
                    </p>
</div>
<div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 mb-6 border border-blue-100/50 shadow-sm">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Lead Qualification</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Automatically gathers important client details so the Avalon team can follow up efficiently and effectively.
                    </p>
</div>
</div>
</section>
<section className="max-w-3xl mx-auto px-6 py-16 mb-10">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">How to Test the Assistant</h2>
<p className="text-base text-slate-500">Try asking these sample prompts to see the AI in action.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between p-5 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-colors group cursor-default shadow-sm">
<span className="text-sm font-medium text-slate-700">"What is the process for listing my home?"</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" height="20" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex items-center justify-between p-5 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-colors group cursor-default shadow-sm">
<span className="text-sm font-medium text-slate-700">"How can Avalon Realty Group help me sell my home?"</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" height="20" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex items-center justify-between p-5 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-colors group cursor-default shadow-sm">
<span className="text-sm font-medium text-slate-700">"How do I contact the team?"</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" height="20" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex items-center justify-between p-5 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-colors group cursor-default shadow-sm">
<span className="text-sm font-medium text-slate-700">"Do you help buyers as well as sellers?"</span>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" height="20" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</section>
</main>
<footer className="w-full border-t border-slate-200/60 bg-white/40 backdrop-blur-md mt-auto z-10 relative">
<div className="max-w-6xl mx-auto px-6 py-8 text-center">
<p className="text-sm text-slate-400 font-normal">
                Standalone AI assistant demo for Avalon Realty Group
            </p>
</div>
</footer>


    </>
  );
}
