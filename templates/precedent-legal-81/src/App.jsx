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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-stone-200/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase text-slate-900 flex items-center gap-2" href="#">
<iconify-icon className="text-slate-900" icon="solar:scale-linear" width="20"></iconify-icon>
                Precedent
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-slate-900 transition-colors" href="#attorneys">Attorneys</a>
<a className="hover:text-slate-900 transition-colors" href="#results">Results</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors tracking-wide items-center gap-2" href="#consultation">
                Consultation
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">hh</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
<div className="absolute bottom-0 right-20 w-px h-32 bg-gradient-to-t from-transparent via-slate-800 to-transparent"></div>
</section>

<section className="py-12 border-b border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs text-slate-400 text-center uppercase tracking-widest mb-8">Trusted counsel for market leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">

<span className="text-xl font-semibold tracking-tighter text-slate-800">ACME</span>
<span className="text-xl font-bold italic text-slate-800">Vertex</span>
<span className="text-lg font-medium tracking-widest text-slate-800">HORIZON</span>
<span className="text-xl font-bold text-slate-800 flex items-center gap-1"><div className="w-4 h-4 bg-slate-800 rounded-full"></div> CIRCLE</span>
<span className="text-xl font-serif text-slate-800">Steward</span>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Our Expertise</h2>
<p className="text-slate-500 max-w-md font-light">Specialized legal frameworks designed for technology, finance, and healthcare sectors.</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View all services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-xl border border-stone-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Corporate Defense</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Proactive litigation strategies for white-collar defense and regulatory investigations.
                    </p>
</div>

<div className="group hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer bg-white border-stone-200 border rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Intellectual Property</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Safeguarding patents, trademarks, and trade secrets in a global digital economy.
                    </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-stone-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Employment Law</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Navigating complex labor regulations, executive compensation, and workplace disputes.
                    </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-stone-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Mergers &amp; Acquisitions</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        End-to-end deal structuring, due diligence, and regulatory compliance for growth.
                    </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-stone-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Venture Capital</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Advising founders and firms on fundraising, equity allocation, and exits.
                    </p>
</div>

<div className="group p-8 bg-white rounded-xl border border-stone-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:scale-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Private Equity</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Comprehensive legal support for buyouts, restructuring, and portfolio management.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">The Precedent Approach</h2>
<p className="text-slate-500 font-light">We combine deep legal knowledge with a modern, agile operational model to deliver faster, more effective results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-2 md:row-span-2 relative bg-slate-950 rounded-2xl p-8 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Efficiency First</h3>
<p className="text-slate-400 font-light text-sm max-w-sm">We utilize proprietary legal-tech to automate discovery and contract review, reducing billable hours on mundane tasks by 40%.</p>
</div>
<div className="relative z-10 mt-8">
<div className="text-5xl font-medium text-white tracking-tighter mb-1">40%</div>
<div className="text-xs font-medium uppercase tracking-widest text-slate-500">Efficiency Increase</div>
</div>
</div>

<div className="md:col-span-1 bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-center">
<div className="text-4xl font-medium text-slate-900 tracking-tighter mb-2">$2B+</div>
<p className="text-xs text-slate-500 uppercase tracking-wide">Transaction Value</p>
<p className="text-xs text-slate-400 mt-2 font-light">Handled in 2023</p>
</div>

<div className="md:col-span-1 bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-center">
<div className="text-4xl font-medium text-slate-900 tracking-tighter mb-2">150+</div>
<p className="text-xs text-slate-500 uppercase tracking-wide">Attorneys</p>
<p className="text-xs text-slate-400 mt-2 font-light">Global Network</p>
</div>

<div className="md:col-span-2 bg-stone-100 rounded-2xl p-8 border border-stone-200 flex items-center justify-between">
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Transparent Billing</h4>
<p className="text-sm text-slate-500 font-light max-w-xs">No hidden fees. Real-time dashboard access to your case financials.</p>
</div>
<div className="h-16 w-16 rounded-full bg-white border border-stone-200 flex items-center justify-center text-slate-900 shadow-sm">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 overflow-hidden" id="attorneys">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12">Principals</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col gap-4">
<div className="aspect-[4/5] w-full bg-slate-200 rounded-lg overflow-hidden relative group">

<div className="absolute inset-0 bg-slate-300"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">View Biography</span>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Elena Vance</h4>
<p className="text-sm text-slate-500">Managing Partner, Corporate</p>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="aspect-[4/5] w-full bg-slate-200 rounded-lg overflow-hidden relative group">

<div className="absolute inset-0 bg-slate-300"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">View Biography</span>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Marcus Thorne</h4>
<p className="text-sm text-slate-500">Partner, Litigation</p>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="aspect-[4/5] w-full bg-slate-200 rounded-lg overflow-hidden relative group">

<div className="absolute inset-0 bg-slate-300"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white text-sm font-medium">View Biography</span>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Sarah Jenkins</h4>
<p className="text-sm text-slate-500">Partner, Intellectual Property</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Secure your legacy.</h2>
<p className="text-slate-500 font-light">Tell us about your case. Confidentiality guaranteed from the first click.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">First Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="Jane" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Email Address</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="jane@company.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Legal Area</label>
<div className="relative">
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all appearance-none cursor-pointer">
<option>Corporate Defense</option>
<option>Intellectual Property</option>
<option>Mergers &amp; Acquisitions</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Case Details</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400 resize-none" placeholder="Briefly describe your legal needs..." rows="4"></textarea>
</div>

<div className="flex items-center gap-3 pt-2">
<label className="relative flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</label>
<span className="text-sm text-slate-500 font-light">I agree to the processing of my personal data.</span>
</div>
<button className="w-full py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex justify-center items-center gap-2 mt-4" type="submit">
                    Request Consultation
                    <iconify-icon icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-white text-lg font-medium tracking-tighter uppercase flex items-center gap-2 mb-6" href="#">
<iconify-icon icon="solar:scale-linear" width="20"></iconify-icon>
                        Precedent
                    </a>
<p className="text-sm font-light leading-relaxed max-w-xs">
                        Redefining legal counsel for the modern era. Precision, transparency, and results.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Practice</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Corporate</a></li>
<li><a className="hover:text-white transition-colors" href="#">Litigation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Real Estate</a></li>
<li><a className="hover:text-white transition-colors" href="#">Taxation</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Firm</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">News &amp; Insights</a></li>
<li><a className="hover:text-white transition-colors" href="#">Diversity</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Offices</h4>
<ul className="space-y-3 text-sm font-light">
<li>New York</li>
<li>London</li>
<li>Singapore</li>
<li>San Francisco</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
<div>© 2023 Precedent Legal Group LLP. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Attorney Advertising</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
