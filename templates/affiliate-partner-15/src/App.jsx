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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tight text-sm flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-white/10 border border-white/10 rounded-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon className="text-xs" icon="solar:bolt-linear"></iconify-icon>
</div>
                STRYKE MARKETS
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium">
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#structure">Commissions</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white hover:text-gray-300 transition-colors hidden sm:block" href="#">Log In</a>
<a className="text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors" href="#apply">
                    Become a Partner
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in-up">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] uppercase tracking-widest font-medium text-white">Accepting New Partners</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Monetize your <br className="hidden md:block"/>
<span className="text-gradient">influence &amp; network.</span>
</h1>
<p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto mb-10">
                Partner with Stryke Markets to offer your audience a premium trading ecosystem. Earn competitive CPA and revenue share commissions with transparent tracking.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" href="#apply">
                    Start Earning
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/10 bg-white/5 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors" href="#structure">
                    View Commission Structure
                </a>
</div>
</div>

<div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">$5M+</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Paid to Partners</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">Weekly</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Payout Schedule</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">100+</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Active Countries</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Support Team</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]" id="benefits">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Why partner with Stryke?</h2>
<p className="text-sm text-gray-400">We provide the tools, transparency, and payouts you need to scale your affiliate business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-white/20 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:chart-2-linear" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:graph-new-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">High Conversion Rates</h3>
<p className="text-xs leading-relaxed text-gray-400">Our optimized onboarding flow and premium trading conditions ensure maximum conversion from click to funded account.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-white/20 transition-all duration-300 md:col-span-2">
<div className="flex flex-col h-full justify-between">
<div className="flex items-start justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest text-emerald-500 font-medium bg-emerald-500/10 px-2 py-1 rounded">Fast Payouts</span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Flexible Commission Structures</h3>
<p className="text-xs leading-relaxed text-gray-400 max-w-md">Choose between CPA (Cost Per Acquisition), Revenue Share, or Hybrid deals. We tailor our offers to match your traffic source and business model.</p>
</div>
</div>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-white/20 transition-all duration-300 md:col-span-2">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Advanced Dashboard</h3>
<p className="text-xs leading-relaxed text-gray-400">Track clicks, registrations, and commissions in real-time. Access marketing assets, create custom tracking links, and export detailed reports.</p>
</div>
<div className="border border-white/10 rounded-lg bg-black/50 p-4 aspect-video flex items-center justify-center relative overflow-hidden">

<div className="w-full space-y-2">
<div className="h-2 w-1/3 bg-white/10 rounded"></div>
<div className="h-20 w-full bg-gradient-to-r from-white/5 to-transparent rounded"></div>
<div className="flex gap-2">
<div className="h-8 w-1/2 bg-white/5 rounded"></div>
<div className="h-8 w-1/2 bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Dedicated Support</h3>
<p className="text-xs leading-relaxed text-gray-400">Every partner gets a dedicated account manager to help optimize campaigns, provide creative assets, and ensure timely payments.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="apply">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Ready to get started?</h2>
<p className="text-sm text-gray-400">Review the agreement below and sign up to access your partner dashboard.</p>
</div>

<div className="bg-[#080808] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-white tracking-tight">Standard Affiliate Agreement v2.1</span>
</div>
<button className="text-[10px] text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:download-linear"></iconify-icon>
                        Download PDF
                    </button>
</div>

<div className="h-[400px] overflow-y-auto p-8 text-xs leading-6 text-gray-400 bg-black/40">
<div className="space-y-6 max-w-3xl mx-auto">
<div>
<h4 className="text-white font-medium mb-2 text-sm">1. Definitions &amp; Interpretation</h4>
<p className="mb-2"><strong>1.1 "Program"</strong> — the affiliate program managed by Stryke Markets Ltd. (the "Company") under which the Affiliate may refer prospective clients.</p>
<p><strong>1.2 "Referred Client"</strong> — any person or entity that registers, funds an account, or trades with the Company as a result of being referred by the Affiliate.</p>
</div>
<div className="border-t border-white/5 pt-4">
<h4 className="text-white font-medium mb-2 text-sm">2. Appointment &amp; Scope</h4>
<p className="mb-2">2.1 The Company hereby appoints the Affiliate, and the Affiliate accepts, to participate in the Program and to refer prospective clients to the Company via the Affiliate’s Tracking Link Code.</p>
<p>2.2 This appointment is non-exclusive. The Company reserves the right to engage other Affiliates.</p>
</div>
<div className="border-t border-white/5 pt-4">
<h4 className="text-white font-medium mb-2 text-sm">3. Affiliate Obligations</h4>
<ul className="list-disc pl-4 space-y-1">
<li>Use only the Tracking Link/Code and approved Promotional Materials provided by the Company.</li>
<li>Clearly and accurately represent the Company and its services without making misleading claims.</li>
<li>Not solicit, target, or market to residents of Restricted Jurisdictions (e.g., USA, Canada, UK).</li>
<li>Comply with all applicable laws, regulations, and anti-spam laws.</li>
</ul>
</div>
<div className="border-t border-white/5 pt-4">
<h4 className="text-white font-medium mb-2 text-sm">4. Commission &amp; Payment</h4>
<p>4.1 The Affiliate will be eligible to receive Commission for Referred Clients as defined in the specific offer available in the Dashboard.</p>
<p>4.2 Commissions are payable only after the Company confirms that referred clients meet all onboarding/compliance requirements.</p>
</div>
<div className="border-t border-white/5 pt-4">
<h4 className="text-white font-medium mb-2 text-sm">5. Termination</h4>
<p>The Company may immediately suspend or terminate the Affiliate’s participation if the Affiliate breaches any term, targets Restricted Jurisdictions, or engages in fraudulent behavior.</p>
</div>
<div className="border-t border-white/5 pt-4">
<h4 className="text-white font-medium mb-2 text-sm">6. Governing Law</h4>
<p>This Agreement shall be governed by the laws of Saint Lucia.</p>
</div>
<div className="border-t border-white/5 pt-4 pb-4 text-center">
<p className="italic opacity-50">End of Agreement Text</p>
</div>
</div>
</div>

<div className="p-8 border-t border-white/5 bg-gradient-to-b from-[#080808] to-black">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-300">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-300">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-300">Traffic Source</label>
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer">
<option>Website / Blog</option>
<option>Social Media</option>
<option>Email Marketing</option>
<option>Trading Signals</option>
<option>Education / Course</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-300">Country of Residence</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="Select Country" type="text"/>
</div>
</div>
<div className="pt-4">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 opacity-0 absolute" type="checkbox"/>
<div className="w-4 h-4 border border-white/20 rounded bg-white/5 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
<svg className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>
<span className="text-xs text-gray-500 group-hover:text-gray-400 select-none leading-tight">
                                    I have read and agree to the <span className="text-white">Affiliate Agreement</span> above. I confirm I do not target restricted jurisdictions.
                                </span>
</label>
</div>
<button className="w-full bg-white text-black font-semibold text-sm py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                            Submit Application
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-semibold tracking-tight text-sm flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                        STRYKE MARKETS
                    </a>
<p className="text-[10px] leading-relaxed text-gray-500">
                        A premium trading ecosystem built for performance, transparency, and speed.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-xs mb-4">Program</h4>
<ul className="space-y-2 text-[11px] text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Overview</a></li>
<li><a className="hover:text-white transition-colors" href="#">Commissions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Marketing Tools</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs mb-4">Legal</h4>
<ul className="space-y-2 text-[11px] text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Affiliate Agreement</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Risk Disclosure</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-xs mb-4">Contact</h4>
<ul className="space-y-2 text-[11px] text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">partners@stryke.com</a></li>
<li><a className="hover:text-white transition-colors" href="#">Support Center</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-gray-600">
                    © 2026 Stryke Markets Ltd. Saint Lucia. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-gray-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon>
</a>
<a className="text-gray-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
