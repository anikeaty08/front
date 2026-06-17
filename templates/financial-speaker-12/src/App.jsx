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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 z-50">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="tracking-tight font-semibold text-lg">SPEAKER PROFILE</span>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-zinc-600 transition-colors" href="#contact">
                Book for Event
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for 2024-2025 Keynotes &amp; Panels
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Wealth strategy,<br/>
                simplified &amp; amplified.
            </h1>
<p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl">
                Expert insights on comprehensive financial planning, investment architecture, and the future of wealth management.
            </p>
<div className="mt-10 flex flex-wrap gap-4">
<a className="bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2" href="#core">
                    Explore Core Topics
                    <iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors" href="#contact">
                    Inquire Booking
                </a>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-6 space-y-32">

<section id="core">
<div className="flex flex-col md:flex-row justify-between items-start mb-12 border-t border-zinc-100 pt-12">
<div className="max-w-sm">
<h2 className="text-3xl font-medium tracking-tight mb-4">Core Financial Planning</h2>
<p className="text-zinc-500">Foundational strategies designed to build, protect, and transfer wealth efficiently. These talks break down complex mechanisms into actionable frameworks.</p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-zinc-200" icon="solar:chart-square-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Comprehensive Financial Planning</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        A holistic approach to managing finances, covering investments, retirement, taxes, and estate planning in a unified strategy.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:graph-new-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Investment Planning</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Selecting investments, creating asset allocation strategies, portfolio rebalancing, and risk management through intelligent diversification.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:armchair-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Retirement Planning</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Setting goals, saving strategies, withdrawal frameworks, and evaluating income sources like Social Security and pensions.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:bill-list-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Tax Bracket Management</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Leveraging tax-deferred accounts, reducing capital gains taxes, and utilizing charitable giving strategies to optimize liabilities.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Direct Indexing</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Customizing index investments for individual needs, boosting after-tax returns, reducing concentration risk, and aligning with values.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Alternative Investments</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Exploring options beyond traditional stocks and bonds for diversification and growth in volatile markets.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Equity Compensation (RSUs, ISOs)</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Understanding the intricacies of stock options, RSUs, and deferred compensation plans, tailored for tech professionals.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Philanthropic Gifting (DAFs)</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Maximizing charitable impact through strategies like donating appreciated securities, bunching contributions, and QCDs.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Trust &amp; Estate Planning</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Utilizing tools like trusts to avoid probate, protect assets, minimize taxes, and ensure smooth wealth transfer.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:case-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">401(k) Allocation &amp; Mgmt</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Explaining the benefits and workings of 401(k) programs, allocation strategies, and maximizing participation.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:mortarboard-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Education Planning</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Strategies to finance education, including leveraging 529 plans, trusts, and gifting strategies for affluent families.
                    </p>
</div>

<div className="group">
<div className="mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Cash Flow &amp; Budgeting</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Building the bedrock of financial health through effective cash flow management and intentional spending.
                    </p>
</div>
</div>
</section>

<section>
<div className="flex flex-col md:flex-row justify-between items-start mb-12 border-t border-zinc-100 pt-12">
<div className="max-w-sm">
<h2 className="text-3xl font-medium tracking-tight mb-4">Emerging &amp; Specialized</h2>
<p className="text-zinc-500">Addressing the evolving landscape of finance, from demographic shifts and ESG to the personalization of digital tools.</p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-zinc-200" icon="solar:atom-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Digital Financial Tools</h4>
<p className="text-xs text-zinc-500">The role of technology in modern planning.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:user-id-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Personalization</h4>
<p className="text-xs text-zinc-500">Using data &amp; behavioral finance to tailor plans.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:meditation-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Financial Wellness</h4>
<p className="text-xs text-zinc-500">Achieving a healthy relationship with finances.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Demographic Shifts</h4>
<p className="text-xs text-zinc-500">Addressing generational financial needs.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">ESG Investing</h4>
<p className="text-xs text-zinc-500">Environmental, Social, and Governance strategies.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:history-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Legacy Planning</h4>
<p className="text-xs text-zinc-500">Philanthropy and tax-efficient wealth transfer.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:scale-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Ed &amp; Retirement</h4>
<p className="text-xs text-zinc-500">Balancing funding for competing major goals.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:stethoscope-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Healthcare</h4>
<p className="text-xs text-zinc-500">Planning for medical expenses in retirement.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:umbrella-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Risk Management</h4>
<p className="text-xs text-zinc-500">Life, disability, and long-term care insurance.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Integrating Equity</h4>
<p className="text-xs text-zinc-500">Aligning RSUs with long-term financial goals.</p>
</div>

<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-semibold text-zinc-900 mb-1">Employer Benefits</h4>
<p className="text-xs text-zinc-500">Maximizing 401k match, ESPP, HSA, &amp; more.</p>
</div>
</div>
</section>

<section className="border-t border-zinc-100 pt-16" id="contact">
<div className="bg-zinc-900 rounded-2xl p-8 md:p-16 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Ready to elevate your event?</h2>
<p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                    I am available for keynotes, workshops, and panel discussions. Let's discuss how I can tailor these topics for your audience.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-white text-zinc-900 px-8 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2" href="mailto:contact@example.com">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Contact for Booking
                    </a>
<a className="bg-zinc-800 text-white border border-zinc-700 px-8 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:file-download-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Download Speaker Kit
                    </a>
</div>
</div>
</section>
</main>
<footer className="mt-24 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
<p>© 2024 Financial Speaker. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-900" href="#">LinkedIn</a>
<a className="hover:text-zinc-900" href="#">Twitter</a>
<a className="hover:text-zinc-900" href="#">Substack</a>
</div>
</div>
</footer>

    </>
  );
}
