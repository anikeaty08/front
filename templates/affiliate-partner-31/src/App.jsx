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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-slate-900 font-semibold tracking-tighter text-lg uppercase" href="#">
                Stryke Markets
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Trading</a>
<a className="hover:text-slate-900 transition-colors" href="#">Platforms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Company</a>
<a className="text-slate-900 transition-colors" href="#">Partners</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="#apply">
                Partner Login
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-70"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
</span>
                Affiliate &amp; Partner Program
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6">
                Grow Your Network. <br className="hidden md:block"/>
                Build Recurring Revenue.
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
                Partner with a global trading brand. Designed for professionals, educators, and businesses building long-term revenue in a secure, execution-focused environment.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#apply">
                    Become a Partner
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-all" href="#learn-more">
                    How it Works
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="learn-more">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-3xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Why Partner with Stryke Markets</h2>
<p className="text-slate-500 text-lg">
                    We handle the infrastructure, execution, and client support so you can focus on growth.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 text-slate-900 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Institutional-Grade Environment</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Offer your clients access to a professional trading ecosystem built around reliability, transparency, and global market access.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 text-slate-900 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Two-Tier Commission</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        A model designed to reward both direct partner activity and extended referral networks. Full details provided upon approval.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 text-slate-900 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Global Reach</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Work with clients across multiple regions, markets, and asset classes under a unified, execution-focused trading platform.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-100 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-6">Who This Program Is For</h2>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 text-slate-900">
<iconify-icon icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium text-sm">Trading educators and mentors</h4>
<p className="text-slate-500 text-sm mt-1">Monetize your educational content with a trusted broker.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-slate-900">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium text-sm">Financial communities and influencers</h4>
<p className="text-slate-500 text-sm mt-1">Provide your audience with superior market access.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-slate-900">
<iconify-icon icon="solar:briefcase-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium text-sm">Introducing Brokers (IBs)</h4>
<p className="text-slate-500 text-sm mt-1">Scale your business with our infrastructure.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-slate-900">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium text-sm">Signal providers &amp; Fintech platforms</h4>
<p className="text-slate-500 text-sm mt-1">Integrate seamless execution for your users.</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-6 text-slate-900">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
<h2 className="text-xl font-medium tracking-tight">Eligibility Requirements</h2>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        To participate in the Stryke Markets Affiliate &amp; Partner Program, applicants must be current Stryke Markets customers with an <strong>active trading account in good standing</strong>.
                    </p>
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-600">
<p>Partner access is subject to review, approval, and ongoing compliance with program terms and regulatory standards.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">How It Works</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative">
<div className="text-5xl font-light text-slate-100 absolute -top-8 -left-2 z-0">01</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-slate-900 mb-2">Apply Online</h3>
<p className="text-sm text-slate-500 leading-relaxed">Submit your application below. You must provide a valid Stryke Markets trading account number.</p>
</div>
</div>

<div className="relative">
<div className="text-5xl font-light text-slate-100 absolute -top-8 -left-2 z-0">02</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-slate-900 mb-2">Review &amp; Approval</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our team reviews your details, validates your account standing, and verifies eligibility.</p>
</div>
</div>

<div className="relative">
<div className="text-5xl font-light text-slate-100 absolute -top-8 -left-2 z-0">03</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-slate-900 mb-2">Welcome &amp; Setup</h3>
<p className="text-sm text-slate-500 leading-relaxed">Receive your welcome email with commission structure details, tracking links, and resources.</p>
</div>
</div>

<div className="relative">
<div className="text-5xl font-light text-slate-100 absolute -top-8 -left-2 z-0">04</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-slate-900 mb-2">Refer &amp; Earn</h3>
<p className="text-sm text-slate-500 leading-relaxed">Introduce clients and begin earning commissions based on approved referral activity.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="apply">
<div className="max-w-2xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Partner Application Form</h2>
<p className="text-slate-500 text-sm mt-2">Join the network. Please ensure all details match your trading account.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-slate-500">First Name</label>
<input className="w-full h-11 px-3 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-300" placeholder="Jane" type="text"/>
</div>

<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-slate-500">Last Name</label>
<input className="w-full h-11 px-3 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-300" placeholder="Doe" type="text"/>
</div>
</div>

<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-slate-500">Email Address</label>
<input className="w-full h-11 px-3 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-300" placeholder="jane@company.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-slate-500">Trading Account No.</label>
<input className="w-full h-11 px-3 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-300" placeholder="e.g. 8002341" type="text"/>
</div>

<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-slate-500">Phone Number</label>
<input className="w-full h-11 px-3 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-300" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>

<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-slate-500">Country of Residence</label>
<div className="relative">
<select className="w-full h-11 px-3 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all bg-white appearance-none cursor-pointer">
<option>Select Country</option>
<option>United Kingdom</option>
<option>Germany</option>
<option>France</option>
<option>Australia</option>
<option>Canada</option>
<option>Singapore</option>
<option>United Arab Emirates</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="pt-4">
<label className="custom-checkbox flex items-start gap-3 cursor-pointer group">
<input className="hidden peer" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center shrink-0 transition-all peer-checked:border-slate-900 peer-checked:bg-slate-900 group-hover:border-slate-400">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-slate-600 leading-tight select-none">
                                I confirm that I have read and agree to abide by the <a className="text-slate-900 underline underline-offset-2 decoration-slate-300 hover:decoration-slate-900" href="#">Stryke Markets Affiliate &amp; Partner Agreement</a>.
                            </span>
</label>
</div>
<div className="bg-slate-50 p-4 rounded-lg text-xs text-slate-500 leading-relaxed border border-slate-100">
                        By submitting this application, you acknowledge that participation in the Stryke Markets Affiliate &amp; Partner Program is subject to approval, compliance review, and ongoing adherence to our terms, marketing guidelines, and applicable regulations.
                    </div>
<button className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group" type="button">
                        Submit to Become a Partner
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12 md:py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<a className="text-slate-900 font-semibold tracking-tighter text-lg uppercase mb-4 md:mb-0" href="#">
                    Stryke Markets
                </a>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Business</a>
<a className="hover:text-slate-900" href="#">Risk Disclosure</a>
</div>
</div>
<div className="border-t border-slate-100 pt-8">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Transparency &amp; Compliance Notice</h4>
<p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
                    Stryke Markets maintains strict standards for ethical marketing, accurate representation, and regulatory compliance. Partners are required to promote our services responsibly, avoid misleading claims, and adhere to all applicable local laws and advertising guidelines. Trading involves significant risk and is not suitable for all investors.
                </p>
<p className="text-xs text-slate-400 mt-6">
                    © 2024 Stryke Markets. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
