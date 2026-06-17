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
      

<nav className="absolute top-0 w-full z-50">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="text-lg font-medium tracking-tight text-slate-900">
                E-RUPIYA<span className="text-orange-600">.</span>CORP
            </div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-orange-600 transition-colors" href="#">Solutions</a>
<a className="hover:text-orange-600 transition-colors" href="#">Pricing</a>
<a className="hover:text-orange-600 transition-colors" href="#">API</a>
</div>
<div className="text-sm font-medium text-slate-900 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                Login
            </div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-24 lg:pt-32">

<div className="absolute inset-0 z-0 subtle-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-100/40 blur-[120px] rounded-full pointer-events-none -z-10 opacity-60"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

<div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Corporate Solution
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Register as a Corporate. <br className="hidden sm:block"/>
<span className="text-slate-400">Unlock Smarter Business Payments.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
                    Get complete control over company spending, employee benefits, and payments — all from one secure platform.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-orange-600 text-white font-medium text-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all shadow-sm shadow-orange-200">
                        Register as Corporate
                        <span className="iconify ml-2" data-height="16" data-icon="lucide:arrow-right" data-inline="false" data-width="16"></span>
</button>
<button className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 transition-all">
                        View Corporate Benefits
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">

<div className="group relative p-6 bg-white border border-slate-200 rounded-xl hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="20" data-icon="lucide:credit-card" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Issue corporate cards</h3>
<p className="text-sm text-slate-500 leading-relaxed">Instantly issue physical or virtual cards for employees with preset spending limits.</p>
</div>

<div className="group relative p-6 bg-white border border-slate-200 rounded-xl hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="20" data-icon="lucide:layers" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Bulk payouts &amp; salary</h3>
<p className="text-sm text-slate-500 leading-relaxed">Disburse salaries and vendor payments in one click with automated reconciliation.</p>
</div>

<div className="group relative p-6 bg-white border border-slate-200 rounded-xl hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="20" data-icon="lucide:gift" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Digital rewards &amp; incentives</h3>
<p className="text-sm text-slate-500 leading-relaxed">Boost morale by sending instant e-rupiya vouchers and tax-free benefits.</p>
</div>

<div className="group relative p-6 bg-white border border-slate-200 rounded-xl hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="20" data-icon="lucide:bar-chart-3" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Real-time expense tracking</h3>
<p className="text-sm text-slate-500 leading-relaxed">Monitor cash flow with live dashboards and automated expense categorization.</p>
</div>

<div className="group relative p-6 bg-white border border-slate-200 rounded-xl hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="20" data-icon="lucide:shield-check" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Role-based access</h3>
<p className="text-sm text-slate-500 leading-relaxed">Granular permission settings for admins, managers, and accountants.</p>
</div>

<div className="group relative p-6 bg-white border border-slate-200 rounded-xl hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="20" data-icon="lucide:file-text" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Detailed reports</h3>
<p className="text-sm text-slate-500 leading-relaxed">Download GST-compliant reports and integrate directly with your accounting software.</p>
</div>
</div>

<div className="mb-24 pt-8 border-t border-slate-100 text-center">
<p className="text-xs text-slate-400 font-medium tracking-wide uppercase mb-4">Trusted by modern enterprises</p>
<div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">

<div className="flex items-center gap-1"><div className="w-4 h-4 bg-slate-800 rounded-sm"></div><span className="font-semibold text-slate-800 text-sm tracking-tighter">ACME.CORP</span></div>
<div className="flex items-center gap-1"><div className="w-4 h-4 rounded-full border-2 border-slate-800"></div><span className="font-semibold text-slate-800 text-sm tracking-tighter">GLOBAL</span></div>
<div className="flex items-center gap-1"><div className="w-4 h-4 bg-slate-800 rotate-45"></div><span className="font-semibold text-slate-800 text-sm tracking-tighter">KINETIC</span></div>
<div className="flex items-center gap-1"><div className="w-4 h-4 bg-slate-800 rounded-tr-lg"></div><span className="font-semibold text-slate-800 text-sm tracking-tighter">NEXUS</span></div>
</div>
</div>

<div className="relative w-full mb-16">
<div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-16 sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-gradient-to-b from-orange-500/10 to-transparent opacity-50 blur-3xl pointer-events-none"></div>
<div className="absolute inset-0 dark-grid opacity-20 pointer-events-none"></div>
<div className="relative mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left z-10">
<h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                            Ready to modernize your <br className="hidden sm:block"/>financial stack?
                        </h2>
<p className="mt-6 text-lg leading-8 text-slate-400 font-light">
                            Join thousands of companies using E-Rupiya to streamline expenses and empower their workforce.
                        </p>
<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
<button className="rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all">
                                Get Started
                            </button>
<button className="text-sm font-medium leading-6 text-white flex items-center gap-2 hover:text-orange-400 transition-colors">
                                Talk to sales <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-width="14"></span></div></div></div></div></div></div></section>
    </>
  );
}
