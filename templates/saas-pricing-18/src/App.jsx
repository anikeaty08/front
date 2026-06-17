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



        // AOS Animation Init
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });

        // Pricing Toggle Logic
        const toggle = document.getElementById('billingToggle');
        const priceTexts = document.querySelectorAll('.price-text');
        const periods = document.querySelectorAll('.billing-period');

        toggle.addEventListener('change', function() {
            const isYearly = this.checked;

            // Animate transition
            priceTexts.forEach(el => {
                el.classList.add('fade-out');
                setTimeout(() => {
                    if (isYearly) {
                        el.innerText = el.getAttribute('data-yearly');
                    } else {
                        el.innerText = el.getAttribute('data-monthly');
                    }
                    el.classList.remove('fade-out');
                }, 200);
            });

            periods.forEach(el => {
                el.classList.add('fade-out');
                setTimeout(() => {
                    el.innerText = isYearly ? '/ year' : '/ month';
                    el.classList.remove('fade-out');
                }, 200);
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
      

<header className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto" data-aos="fade-down" data-aos-duration="800">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">C</div>
<span className="font-semibold tracking-tight text-lg text-slate-900">Checker<span className="text-blue-600">.io</span></span>
</div>
<nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#">Features</a>
<a className="hover:text-blue-600 transition-colors" href="#">Pricing</a>
<a className="hover:text-blue-600 transition-colors" href="#">Login</a>
</nav>
</header>

<section className="relative pt-16 pb-12 px-4 text-center max-w-5xl mx-auto">
<div data-aos="fade-up" data-aos-duration="800">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                Simple, Transparent Pricing
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-8 font-light">
                Choose the plan that fits your writing needs. Upgrade anytime. No hidden fees.
            </p>

<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-slate-600 mb-12">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:card-check-linear"></iconify-icon>
<span>No credit card for free plan</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span>Secure payments</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:restart-linear"></iconify-icon>
<span>Cancel anytime</span>
</div>
</div>

<div className="flex items-center justify-center gap-4 mb-16">
<span className="text-slate-600 font-medium text-sm" id="monthly-label">Monthly</span>
<div className="relative inline-block w-14 h-8 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-all duration-300 ease-in-out top-1 left-1 checked:left-7 checked:border-blue-600 z-10" id="billingToggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-8 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300 ease-in-out checked:bg-blue-600" htmlFor="billingToggle"></label>
</div>
<span className="text-slate-900 font-medium text-sm flex items-center gap-2" id="yearly-label">
                    Yearly
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold">Save 20%</span>
</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Free</h3>
<p className="text-sm text-slate-500 mb-6">For casual users and students.</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-slate-900">$0</span>
<span className="text-slate-500 text-sm">/ month</span>
</div>
</div>
<a className="w-full block text-center py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors mb-8 text-sm" href="#">
                    Start Free
                </a>
<ul className="space-y-4 text-sm text-slate-600 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>1,000 words per check</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Limited daily checks</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Basic plagiarism report</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Paste text only</span>
</li>
<li className="flex items-start gap-3 text-slate-400">
<iconify-icon className="text-slate-300 text-lg flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>No file upload</span>
</li>
<li className="flex items-start gap-3 text-slate-400">
<iconify-icon className="text-slate-300 text-lg flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>No PDF export</span>
</li>
</ul>
</div>

<div className="relative bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl md:scale-105 z-10 flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
                    Most Popular
                </div>
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Pro</h3>
<p className="text-sm text-slate-500 mb-6">For bloggers, writers &amp; SEO.</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-slate-900 price-text" data-monthly="$9" data-yearly="$90">$9</span>
<span className="text-slate-500 text-sm billing-period">/ month</span>
</div>
</div>
<a className="w-full block text-center py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 mb-8 text-sm" href="#">
                    Upgrade to Pro
                </a>
<ul className="space-y-4 text-sm text-slate-600 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-slate-900">Unlimited checks</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Up to 10,000 words per scan</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:file-text-linear"></iconify-icon>
<span>File upload (PDF, DOC, TXT)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Detailed source matching</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:file-download-linear"></iconify-icon>
<span>PDF report download</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:bolt-linear"></iconify-icon>
<span>Faster scanning</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:star-linear"></iconify-icon>
<span>Priority support</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay="300">
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Team</h3>
<p className="text-sm text-slate-500 mb-6">For agencies and institutions.</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-slate-900 price-text" data-monthly="$29" data-yearly="$290">$29</span>
<span className="text-slate-500 text-sm billing-period">/ month</span>
</div>
</div>
<a className="w-full block text-center py-2.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors mb-8 text-sm" href="#">
                    Get Started
                </a>
<ul className="space-y-4 text-sm text-slate-600 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-slate-900">Everything in Pro</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>Team accounts (5–10 users)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:layers-linear"></iconify-icon>
<span>Bulk checks</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:code-scan-linear"></iconify-icon>
<span>API access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:tag-linear"></iconify-icon>
<span>White-label reports</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:chart-2-linear"></iconify-icon>
<span>Usage analytics</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0" icon="solar:headset-linear"></iconify-icon>
<span>Dedicated support</span>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 md:px-8 pb-24" data-aos="fade-up">
<h2 className="text-2xl font-semibold text-slate-900 text-center mb-8 tracking-tight">Compare Plans</h2>
<div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 border-b border-slate-200">
<th className="p-4 text-sm font-medium text-slate-500">Feature</th>
<th className="p-4 text-sm font-semibold text-slate-900">Free</th>
<th className="p-4 text-sm font-semibold text-blue-600">Pro</th>
<th className="p-4 text-sm font-semibold text-slate-900">Team</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
<td className="p-4 font-medium text-slate-700">Word limit</td>
<td className="p-4 text-slate-500">1,000</td>
<td className="p-4 text-slate-900 font-medium">10,000</td>
<td className="p-4 text-slate-900 font-medium">Unlimited</td>
</tr>
<tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
<td className="p-4 font-medium text-slate-700">File upload</td>
<td className="p-4"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
<td className="p-4 font-medium text-slate-700">PDF report</td>
<td className="p-4"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="p-4"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
<td className="p-4 font-medium text-slate-700">Bulk check</td>
<td className="p-4"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
<td className="p-4 font-medium text-slate-700">API access</td>
<td className="p-4"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4"><iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon></td>
<td className="p-4"><iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr>
<td className="p-4 font-medium text-slate-700">Support</td>
<td className="p-4 text-slate-500">Basic</td>
<td className="p-4 text-blue-600 font-medium">Priority</td>
<td className="p-4 text-slate-900 font-medium">Dedicated</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="bg-white border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center gap-2" data-aos="fade-up" data-aos-delay="0">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 text-sm">Secure payments</h4>
<p className="text-xs text-slate-500">256-bit SSL encryption</p>
</div>
<div className="flex flex-col items-center text-center gap-2" data-aos="fade-up" data-aos-delay="100">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2">
<iconify-icon className="text-2xl" icon="solar:restart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 text-sm">Cancel anytime</h4>
<p className="text-xs text-slate-500">No long-term contracts</p>
</div>
<div className="flex flex-col items-center text-center gap-2" data-aos="fade-up" data-aos-delay="200">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2">
<iconify-icon className="text-2xl" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 text-sm">7-day guarantee</h4>
<p className="text-xs text-slate-500">Money-back if unsatisfied</p>
</div>
<div className="flex flex-col items-center text-center gap-2" data-aos="fade-up" data-aos-delay="300">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2">
<iconify-icon className="text-2xl" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 text-sm">Privacy First</h4>
<p className="text-xs text-slate-500">We don’t store content</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 text-center">
<div className="max-w-4xl mx-auto" data-aos="zoom-in">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Start Checking Your Content <br className="hidden md:block"/>with Confidence
            </h2>
<p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
                Join 10,000+ writers and agencies ensuring their content is original and SEO-friendly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 rounded-lg text-slate-600 bg-white border border-slate-300 font-medium hover:bg-slate-50 transition-all text-sm w-full sm:w-auto" href="#">
                    Try Free
                </a>
<a className="px-8 py-3 rounded-lg text-white bg-blue-600 font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-sm w-full sm:w-auto" href="#">
                    Go Pro Now
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-12 pb-8 px-4">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-slate-400">
                © 2023 Checker.io Inc. All rights reserved.
            </div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
