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



    // Toggle switches
    document.querySelectorAll('[data-toggle]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const circle=btn.querySelector('span');
        btn.classList.toggle('bg-black');
        circle.classList.toggle('translate-x-3');
      });
    });

    // Download the current page
    document.getElementById('download').addEventListener('click',()=>{
      const blob=new Blob([document.documentElement.outerHTML],{type:'text/html'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url;
      a.download='nimbus-features.html';
      a.style.display='none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

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
      <iframe className="fixed top-0 w-full h-screen" frameborder="0" height="100%" src="https://my.spline.design/twistcopy-CPActtgUfoQoOToZfH4Pt18Q" width="100%"></iframe>

<header className="md:py-24 beautiful-shadow max-w-6xl rounded-xl mr-auto mb-8 ml-auto pt-16 pb-16 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center space-y-6 fade-seq" style={{animationDelay: `.1s`}}>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium beautiful-shadow font-geist text-black bg-gray-100">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
        Version 3.2 just shipped
      </span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-semibold tracking-tighter text-black" style={{}}>
        The complete command center to run your studio
      </h1>
<p className="max-w-xl mx-auto text-base font-geist text-gray-700">
        Nimbus bundles the tools you need—insights, docs, payments, and signatures—into one intuitive workspace.
      </p>
</div>
</header>

<main className="max-w-6xl mx-auto px-6 space-y-8">

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<section className="rounded-xl p-6 beautiful-shadow fade-seq bg-white" style={{animationDelay: `.2s`}}>
<div className="mb-4">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-activity w-4 h-4 text-black" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="text-lg font-medium font-geist text-black">Unified Control Center</h3>
</div>
<p className="text-sm mb-6 font-geist text-gray-700">
            Keep an eye on cashflow, upcoming filings, and real-time KPIs without juggling spreadsheets.
          </p>
</div>
<div className="rounded-lg p-4 border space-y-4 bg-gray-50 border-gray-200">
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500 font-geist">Revenue</span>
<span className="inline-flex items-center gap-1 text-xs font-medium font-geist text-black">
<svg className="lucide lucide-bell w-3 h-3" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
              Auto-alerts
            </span>
</div>
<div className="grid grid-cols-3 gap-3 text-center text-xs">
<div className="rounded-lg p-3 beautiful-shadow bg-white">
<div className="text-lg font-light font-geist text-black">$41,960</div>
<div className="font-medium font-geist text-black">+14.2%</div>
</div>
<div className="rounded-lg p-3 beautiful-shadow bg-white">
<div className="text-lg font-light font-geist text-black">$6,845</div>
<div className="text-gray-500 font-geist">Next payout</div>
</div>
<div className="rounded-lg p-3 beautiful-shadow bg-white">
<div className="text-xs font-light font-geist text-black">Aug 15 2025</div>
<div className="text-gray-500 font-geist">Tax deadline</div>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<p className="text-xs font-geist text-gray-700">Daily digest email</p>
<button className="relative h-4 w-7 rounded-full transition-colors bg-gray-200" data-toggle="">
<span className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full transition-transform border bg-white border-gray-200"></span>
</button>
</div>
</div>
</section>

<section className="beautiful-shadow fade-seq rounded-xl pt-6 pr-6 pb-6 pl-6 bg-gray-900" style={{animationDelay: `.3s`}}>
<div className="mb-4">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-files w-4 h-4 text-white" data-lucide="files" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-3a2 2 0 0 1-2-2V2"></path><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></path><path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"></path></svg>
<h3 className="text-lg font-medium font-geist text-white">Instant compliance docs</h3>
</div>
<p className="text-sm mb-6 font-geist text-gray-300">
            Generate region-specific contracts and NDAs in seconds—always up to date with the latest regulations.
          </p>
</div>
<div className="rounded-lg p-6 border flex items-center justify-center flex-col space-y-3 h-32 bg-gray-800 border-gray-700">
<svg className="lucide lucide-file-text w-8 h-8 text-white" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<p className="text-sm font-medium font-geist text-white">Compliance vault</p>
<div className="flex items-center gap-2 text-xs font-geist text-gray-400">
<span className="inline-flex items-center gap-1">
<img alt="US" className="w-3 h-3 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80" />
<img alt="EU" className="w-3 h-3 object-cover" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80" />
</span>
            Multi-region
          </div>
</div>
</section>

<section className="rounded-xl p-6 beautiful-shadow fade-seq bg-white" style={{animationDelay: `.4s`}}>
<div className="mb-4">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-refresh-ccw w-4 h-4 text-black" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
<h3 className="text-lg font-medium font-geist text-black">Auto reconcile</h3>
</div>
<p className="text-sm mb-6 font-geist text-gray-700">
            Nimbus matches invoices with bank transactions automatically—no spreadsheets, no headaches.
          </p>
</div>
<div className="rounded-lg p-4 border space-y-2 bg-gray-50 border-gray-200">
<div className="flex items-center justify-between py-2">
<span className="text-sm font-geist text-gray-900">$1,450.00</span>
<span className="px-2 py-1 text-xs rounded font-geist bg-black text-white">Cleared</span>
</div>
<div className="flex items-center justify-between py-2 border-t border-gray-200">
<span className="text-sm font-geist text-gray-900">$2,999.00</span>
<span className="px-2 py-1 text-xs rounded font-geist bg-black text-white">Cleared</span>
</div>
<div className="flex items-center justify-between py-2 border-t border-gray-200">
<span className="text-sm font-geist text-gray-900">$817.00</span>
<span className="px-2 py-1 text-xs rounded font-geist bg-gray-200 text-gray-700">Pending</span>
</div>
<div className="pt-2 text-center">
<span className="text-xs text-gray-500 font-geist">Reconciling...</span>
</div>
</div>
</section>
</div>

<div className="grid gap-6 md:grid-cols-2">

<section className="rounded-xl p-6 beautiful-shadow fade-seq bg-white" style={{animationDelay: `.5s`}}>
<div className="mb-4">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-user-plus w-4 h-4 text-black" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<h3 className="text-lg font-medium font-geist text-black">Client onboarding form</h3>
</div>
<p className="text-sm mb-6 font-geist text-gray-700">
            Send one secure link—collect requirements, assets, and approvals before a single kickoff call.
          </p>
</div>
<div className="rounded-lg p-4 border space-y-4 bg-gray-50 border-gray-200">
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500 font-geist">Form Status</span>
<span className="inline-flex items-center gap-1 text-xs font-medium font-geist text-black">
<svg className="lucide lucide-shield w-3 h-3" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Encrypted link
            </span>
</div>
<div className="flex -space-x-2 mb-4">
<img alt="" className="w-6 h-6 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?w=800&q=80" />
<img alt="" className="w-6 h-6 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=800&q=80" />
<img alt="" className="w-6 h-6 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=800&q=80" />
</div>
<div className="space-y-3 text-xs">
<div className="flex justify-between py-1">
<span className="font-geist text-gray-700">Contact details</span>
<span className="px-2 py-1 rounded font-geist bg-black text-white">Done</span>
</div>
<div className="flex justify-between py-1 border-t border-gray-200">
<span className="font-geist text-gray-700">Project scope</span>
<span className="px-2 py-1 rounded font-geist bg-black text-white">Done</span>
</div>
<div className="flex justify-between py-1 border-t border-gray-200">
<span className="font-geist text-gray-700">Budget range</span>
<span className="px-2 py-1 rounded font-geist bg-gray-200 text-gray-700">Pending</span>
</div>
</div>
</div>
</section>

<section className="rounded-xl p-6 beautiful-shadow fade-seq bg-white" style={{animationDelay: `.6s`}}>
<div className="mb-4">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-file-signature w-4 h-4 text-black" data-lucide="file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><path d="M8 18h1"></path></svg>
<h3 className="text-lg font-medium font-geist text-black">Smart eSign</h3>
</div>
<p className="text-sm mb-6 font-geist text-gray-700">
            Send trackable, legally-binding signature links and get a real-time audit trail the moment a client opens them.
          </p>
</div>
<div className="rounded-lg p-4 border space-y-3 bg-gray-50 border-gray-200">
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500 font-geist">Recent Activity</span>
<span className="text-xs font-medium font-geist text-black">"Signed & sent back 🎉"</span>
</div>
<div className="space-y-2 text-xs">
<div className="flex justify-between">
<span className="font-geist text-gray-700">Document:</span>
<span className="font-medium font-geist text-black">Service Agreement</span>
</div>
<div className="flex justify-between">
<span className="font-geist text-gray-700">Doc ID:</span>
<span className="text-gray-500 font-geist">9f2e-ab34-861c</span>
</div>
<div className="flex justify-between">
<span className="font-geist text-gray-700">Status:</span>
<span className="px-2 py-1 rounded font-geist bg-black text-white">Completed</span>
</div>
</div>
<div className="border-t pt-3 space-y-2 text-xs border-gray-200">
<div className="flex items-center justify-between">
<span className="font-geist text-gray-700">Signers:</span>
<span className="font-medium font-geist text-black">2 people</span>
</div>
<div className="flex items-center justify-between">
<span className="font-geist text-gray-700">Views:</span>
<span className="font-medium font-geist text-black">5 times</span>
</div>
<div className="flex items-center justify-between">
<span className="font-geist text-gray-700">Avg. time:</span>
<span className="font-medium font-geist text-black">03:12</span>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="beautiful-shadow fade-seq max-w-6xl rounded-xl mt-8 mr-auto ml-auto pt-16 pb-16 bg-gray-900" id="aura-emcn7j9d0" style={{animationDelay: `.7s`}}>
<div className="max-w-4xl mx-auto px-6 text-center space-y-4">
<h2 className="text-2xl font-space-grotesk font-semibold tracking-tighter text-white" style={{}}>Ready to try Nimbus?</h2>
<p className="max-w-lg mx-auto font-geist text-gray-300">
        Download this page as a starter template and build your own bespoke dashboard today.
      </p>
<button className="inline-flex items-center gap-2 font-medium py-3 px-6 rounded-lg transition-colors beautiful-shadow font-geist bg-white hover:bg-gray-200 text-black" id="download">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
        Download template
      </button>
<p className="text-xs font-geist text-gray-400">The HTML file will save directly to your computer.</p>
</div>
</footer>



    </>
  );
}
