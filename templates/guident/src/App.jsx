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
      

<header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter text-slate-900">Guident.ai</div>
<button className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
                Book My Free Audit
            </button>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="trending-up"></i>
                    Found Money in 45 Days
                </div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Recover the revenue your practice already earned.
                </h1>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    12-month "Found-Money" Audit. Pay nothing until you collect. First reimbursements in 30–45 days.
                </p>
<button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-base font-medium rounded-lg hover:bg-slate-800 transition-colors mb-6">
                    Get My Free 12-Month Estimate
                </button>
<div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                        HIPAA Compliant
                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="file-check"></i>
                        BAA Included
                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="check-circle"></i>
                        Pay-When-Paid Guarantee
                    </div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
<div className="bg-white rounded-xl border border-slate-200 p-6 mb-4">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-slate-600">Revenue Recovery Dashboard</span>
<div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 border border-emerald-200 rounded text-emerald-700 text-xs font-medium">
<i className="w-3 h-3" data-lucide="check"></i>
                            Verified
                        </div>
</div>
<div className="mb-6">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">$92,847</div>
<div className="text-sm text-slate-600">Recovered in 90 days</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-600">Claims refiled</span>
<span className="font-medium text-slate-900">247</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-slate-900 h-2 rounded-full" style={{width: '82%'}}></div>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-600">Success rate</span>
<span className="font-medium text-slate-900">82%</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white rounded-lg border border-slate-200 p-4">
<div className="text-2xl font-semibold text-slate-900 mb-1">45</div>
<div className="text-xs text-slate-600">Days to first cash</div>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-4">
<div className="text-2xl font-semibold text-slate-900 mb-1">100%</div>
<div className="text-xs text-slate-600">Compliance score</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                    You're not losing patients — you're losing reimbursements.
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-12">
<div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-slate-900" data-lucide="alert-circle"></i>
</div>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">1 in 3</div>
<div className="text-slate-600">dental claims underpaid or denied</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-slate-900" data-lucide="x-circle"></i>
</div>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">90%</div>
<div className="text-slate-600">of offices never refile</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
<i className="w-6 h-6 text-slate-900" data-lucide="dollar-sign"></i>
</div>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">$27K+</div>
<div className="text-slate-600">uncollected per provider per year</div>
</div>
</div>
<div className="max-w-2xl mx-auto text-center">
<p className="text-lg text-slate-600 mb-8">
                    It's not your dentistry—it's your data. Missed codes, expired credentialing, and outdated processes silently drain profit.
                </p>
<button className="px-8 py-4 bg-slate-900 text-white text-base font-medium rounded-lg hover:bg-slate-800 transition-colors">
                    Run Your Free Look-Back Audit
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                One system. Three outcomes: cash, compliance, confidence.
            </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-12">
<div className="relative">
<div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-semibold text-lg">
                        1
                    </div>
<div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-slate-900" data-lucide="search"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Audit</h3>
<p className="text-slate-600 leading-relaxed">
                        AI scans 12 months of claims and narratives to identify underpayments and missed opportunities.
                    </p>
</div>
</div>
<div className="relative">
<div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-semibold text-lg">
                        2
                    </div>
<div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-slate-900" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Recover</h3>
<p className="text-slate-600 leading-relaxed">
                        We refile and track every claim to payment. You see cash in 30–45 days.
                    </p>
</div>
</div>
<div className="relative">
<div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-semibold text-lg">
                        3
                    </div>
<div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-slate-900" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Automate</h3>
<p className="text-slate-600 leading-relaxed">
                        Set compliant workflows for future claims. Never leave money on the table again.
                    </p>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-center">
<p className="text-slate-600 mb-6">
                All under HIPAA-secure rails. You pay only when you collect.
            </p>
<button className="px-8 py-4 bg-slate-900 text-white text-base font-medium rounded-lg hover:bg-slate-800 transition-colors">
                See How the Audit Works
            </button>
</div>
</section>

<section className="bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                    Real cash. Real speed.
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="bg-white rounded-xl border border-slate-200 p-8">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-full flex-shrink-0"></div>
<div>
<div className="font-medium text-slate-900 mb-1">Dr. Lisa Chen</div>
<div className="text-sm text-slate-600">Solo Practice, Portland</div>
</div>
</div>
<div className="mb-6">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">$92,000 recovered</div>
<div className="text-slate-600">in 90 days</div>
</div>
<div className="border-t border-slate-200 pt-6">
<p className="text-slate-600 italic leading-relaxed">
                            "We didn't add hours or staff—just Guident. The audit found claims I didn't even know were denied."
                        </p>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-8">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-full flex-shrink-0"></div>
<div>
<div className="font-medium text-slate-900 mb-1">Bright Smiles Group</div>
<div className="text-sm text-slate-600">3-Site Practice, Texas</div>
</div>
</div>
<div className="mb-6">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">$380,000 recovered</div>
<div className="text-slate-600">denial rate reduced by 22%</div>
</div>
<div className="border-t border-slate-200 pt-6">
<p className="text-slate-600 italic leading-relaxed">
                            "The forward billing automation caught errors before they became denials. Game changer for our DSO."
                        </p>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-8 text-center mb-8">
<div className="flex items-center justify-center gap-2 mb-2">
<i className="w-5 h-5 text-slate-900" data-lucide="bar-chart-3"></i>
<span className="text-sm font-medium text-slate-600">Average Recovery</span>
</div>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">$27,000</div>
<div className="text-slate-600">per provider, per audit cycle</div>
</div>
<div className="text-center">
<button className="px-8 py-4 bg-slate-900 text-white text-base font-medium rounded-lg hover:bg-slate-800 transition-colors">
                    Find Out What's Hiding in Your Charts
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Simple, transparent, no-risk pricing.
            </h2>
</div>
<div className="overflow-x-auto mb-8">
<table className="w-full border border-slate-200 rounded-xl overflow-hidden">
<thead>
<tr className="bg-slate-50 border-b border-slate-200">
<th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Program</th>
<th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">When Used</th>
<th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Fee</th>
<th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Guarantee</th>
</tr>
</thead>
<tbody className="bg-white">
<tr className="border-b border-slate-200">
<td className="px-6 py-4 font-medium text-slate-900">Backward Claims</td>
<td className="px-6 py-4 text-slate-600">12-month recovery</td>
<td className="px-6 py-4 text-slate-900">35% of collected</td>
<td className="px-6 py-4 text-slate-600">Pay only when paid</td>
</tr>
<tr className="border-b border-slate-200 bg-slate-50">
<td className="px-6 py-4 font-medium text-slate-900">Forward Claims</td>
<td className="px-6 py-4 text-slate-600">Ongoing compliant billing</td>
<td className="px-6 py-4 text-slate-900">22%</td>
<td className="px-6 py-4 text-slate-600">45-day first-cash SLA</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Prepaid Credits</td>
<td className="px-6 py-4 text-slate-600">Optional 20% discount</td>
<td className="px-6 py-4 text-slate-900">Variable</td>
<td className="px-6 py-4 text-slate-600">Never expire</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" data-lucide="info"></i>
<div>
<p className="text-slate-900 font-medium mb-1">Add-on: Complete Onboarding Package</p>
<p className="text-slate-600">
                        $5,000 one-time fee includes full credentialing review + $249/mo software platform FREE
                    </p>
</div>
</div>
</div>
<div className="text-center">
<button className="px-8 py-4 bg-slate-900 text-white text-base font-medium rounded-lg hover:bg-slate-800 transition-colors">
                Lock My Found-Money Audit
            </button>
</div>
</section>

<section className="bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                    Why Guident beats the alternatives.
                </h2>
<p className="text-lg text-slate-600">
                    See how compliance-led recovery outperforms generic billing.
                </p>
</div>
<div className="overflow-x-auto mb-8">
<table className="w-full border border-slate-200 rounded-xl overflow-hidden bg-white">
<thead>
<tr className="border-b border-slate-200">
<th className="text-left px-6 py-4 text-sm font-semibold text-slate-900 bg-slate-50">Feature</th>
<th className="text-center px-6 py-4 text-sm font-semibold text-slate-900 bg-slate-900 text-white">Guident</th>
<th className="text-center px-6 py-4 text-sm font-semibold text-slate-900 bg-slate-50">Generic Billing</th>
<th className="text-center px-6 py-4 text-sm font-semibold text-slate-900 bg-slate-50">DIY</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-slate-200">
<td className="px-6 py-4 text-slate-900 font-medium">Setup Speed</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-emerald-600" data-lucide="check"></i>
</div>
<div className="text-xs text-slate-600 mt-1">7–10 days</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="minus"></i>
</div>
<div className="text-xs text-slate-600 mt-1">30+ days</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="x"></i>
</div>
<div className="text-xs text-slate-600 mt-1">Varies</div>
</td>
</tr>
<tr className="border-b border-slate-200 bg-slate-50">
<td className="px-6 py-4 text-slate-900 font-medium">Compliance Engine</td>
<td className="px-6 py-4 text-center bg-white">
<div className="flex justify-center">
<i className="w-5 h-5 text-emerald-600" data-lucide="check"></i>
</div>
<div className="text-xs text-slate-600 mt-1">Built-in</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="x"></i>
</div>
<div className="text-xs text-slate-600 mt-1">None</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="x"></i>
</div>
<div className="text-xs text-slate-600 mt-1">Manual</div>
</td>
</tr>
<tr className="border-b border-slate-200">
<td className="px-6 py-4 text-slate-900 font-medium">AI Claim Scan</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-emerald-600" data-lucide="check"></i>
</div>
<div className="text-xs text-slate-600 mt-1">12-month lookback</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="minus"></i>
</div>
<div className="text-xs text-slate-600 mt-1">Limited</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="x"></i>
</div>
<div className="text-xs text-slate-600 mt-1">None</div>
</td>
</tr>
<tr className="border-b border-slate-200 bg-slate-50">
<td className="px-6 py-4 text-slate-900 font-medium">ROI Tracking</td>
<td className="px-6 py-4 text-center bg-white">
<div className="flex justify-center">
<i className="w-5 h-5 text-emerald-600" data-lucide="check"></i>
</div>
<div className="text-xs text-slate-600 mt-1">Real-time dashboard</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="minus"></i>
</div>
<div className="text-xs text-slate-600 mt-1">Reports only</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="x"></i>
</div>
<div className="text-xs text-slate-600 mt-1">Spreadsheets</div>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-slate-900 font-medium">Performance Guarantee</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-emerald-600" data-lucide="check"></i>
</div>
<div className="text-xs text-slate-600 mt-1">Pay when paid</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="x"></i>
</div>
<div className="text-xs text-slate-600 mt-1">Fixed fees</div>
</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="x"></i>
</div>
<div className="text-xs text-slate-600 mt-1">N/A</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="text-center">
<p className="text-slate-600 mb-8 text-lg">
                    If it isn't measured and automated, it isn't collected.
                </p>
<button className="px-8 py-4 bg-slate-900 text-white text-base font-medium rounded-lg hover:bg-slate-800 transition-colors">
                    Compare Your Current Process → Free Audit
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="bg-slate-900 rounded-2xl p-12 md:p-16 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Your charts hold cash. Let's release it.
            </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
<div className="flex items-center gap-3 text-white">
<i className="w-5 h-5 flex-shrink-0" data-lucide="shield-check"></i>
<span className="text-sm">HIPAA Compliant</span>
</div>
<div className="flex items-center gap-3 text-white">
<i className="w-5 h-5 flex-shrink-0" data-lucide="dollar-sign"></i>
<span className="text-sm">No Up-Front Fees</span>
</div>
<div className="flex items-center gap-3 text-white">
<i className="w-5 h-5 flex-shrink-0" data-lucide="clock"></i>
<span className="text-sm">First Cash ≤ 45 Days</span>
</div>
<div className="flex items-center gap-3 text-white">
<i className="w-5 h-5 flex-shrink-0" data-lucide="trending-up"></i>
<span className="text-sm">$27K Avg Recovery</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="px-8 py-4 bg-white text-slate-900 text-base font-medium rounded-lg hover:bg-slate-50 transition-colors">
                    Start My Free Audit Now
                </button>
<a className="text-white text-sm hover:text-slate-200 transition-colors flex items-center gap-2" href="#">
<span>Prefer to see a demo? → Book 15 min Walkthrough</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<div className="text-xl font-semibold tracking-tighter text-slate-900 mb-2">Guident.ai</div>
<p className="text-sm text-slate-600">Dental Compliance &amp; Revenue Recovery</p>
</div>
<div className="flex items-center gap-6 text-sm text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-900 transition-colors flex items-center gap-2" href="mailto:support@guident.ai">
<i className="w-4 h-4" data-lucide="mail"></i>
                        support@guident.ai
                    </a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-600">
                © 2025 Guident AI. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
