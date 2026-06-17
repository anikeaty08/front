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



        // Simple Interaction for Calculator Mockup
        const calcButtons = document.querySelectorAll('#calculator button');
        calcButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset states
                calcButtons.forEach(b => {
                    b.classList.remove('border-[var(--color-accent)]', 'bg-[var(--bg-tertiary)]');
                    b.querySelector('.rounded-full div').classList.remove('opacity-100');
                    b.querySelector('.rounded-full').classList.remove('border-[var(--color-accent)]');
                });
                
                // Set active
                btn.classList.add('border-[var(--color-accent)]', 'bg-[var(--bg-tertiary)]');
                btn.querySelector('.rounded-full div').classList.add('opacity-100');
                btn.querySelector('.rounded-full').classList.add('border-[var(--color-accent)]');
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
      

<nav className="fixed w-full z-50 glass-nav h-[72px] flex items-center transition-all duration-300">
<div className="container-custom w-full flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-[var(--color-primary)] rounded-[var(--radius-sm)] flex items-center justify-center text-white">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
</div>
<span className="text-[19px] font-bold tracking-tight text-[var(--color-primary)]">CorpSec</span>
</div>
<div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[var(--text-secondary)]">
<a className="hover:text-[var(--color-primary)] transition-colors" href="#services">Jurisdictions</a>
<a className="hover:text-[var(--color-primary)] transition-colors" href="#calculator">Calculator</a>
<a className="hover:text-[var(--color-primary)] transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-[var(--color-primary)] transition-colors" href="#resources">Resources</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-[15px] font-medium text-[var(--color-primary)] hover:opacity-70 transition-opacity" href="#">Log in</a>
<a className="btn-primary !py-2.5 !px-5 !text-[15px]" href="#calculator">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-[var(--bg-primary)]">
<div className="container-custom grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-light)] text-[var(--text-secondary)] text-[11px] font-semibold uppercase tracking-wider mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
                    Now incorporating in Dubai &amp; Singapore
                </div>
<h1 className="text-display text-[var(--color-primary)] mb-8">
                    Launch your global <br/>
<span className="text-[var(--color-accent)]">business entity.</span>
</h1>
<p className="text-body-large mb-12 max-w-xl">
                    France, Singapore, Dubai, USA: Incorporation, accounting, and compliance in one unified dashboard. Join 2,000+ founders simplifying their expansion.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="btn-primary" href="#calculator">
                        Start for free
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="btn-secondary" href="#how-it-works">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        How it works
                    </a>
</div>
<div className="flex items-center gap-10 text-[15px] font-medium text-[var(--text-tertiary)]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[var(--color-accent)]" icon="solar:bolt-circle-linear" width="20"></iconify-icon>
                        48h Setup
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[var(--color-success)]" icon="solar:shield-check-linear" width="20"></iconify-icon>
                        100% Compliant
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[var(--color-accent)]" icon="solar:cup-star-linear" width="20"></iconify-icon>
                        Expert Support
                    </div>
</div>
</div>

<div className="lg:col-span-5 relative">

<div className="relative z-10 bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] border border-[var(--border-light)] p-8">

<div className="flex justify-between items-center mb-8 border-b border-[var(--border-light)] pb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center">
<iconify-icon className="text-[var(--color-primary)]" icon="solar:buildings-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-[15px] font-semibold text-[var(--color-primary)]">TechFlow SAS</div>
<div className="text-[13px] text-[var(--text-secondary)]">Paris, France</div>
</div>
</div>
<div className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--color-success)] text-[12px] font-medium rounded-full flex items-center gap-1.5 border border-[var(--border-light)]">
<span className="w-1.5 h-1.5 bg-[var(--color-success)] rounded-full"></span> Active
                        </div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-5 bg-[var(--bg-secondary)] rounded-[var(--radius-md)] border border-[var(--border-light)]">
<div className="text-[13px] text-[var(--text-tertiary)] mb-2">Corporate Tax</div>
<div className="text-h3 text-[var(--color-primary)]">25%</div>
</div>
<div className="p-5 bg-[var(--bg-secondary)] rounded-[var(--radius-md)] border border-[var(--border-light)]">
<div className="text-[13px] text-[var(--text-tertiary)] mb-2">Compliance</div>
<div className="text-h3 text-[var(--color-primary)]">On Track</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-4 border border-[var(--border-light)] rounded-[var(--radius-md)] hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--color-primary)] transition-colors" icon="solar:document-add-linear"></iconify-icon>
<span className="text-[14px] text-[var(--text-primary)]">File Annual Return</span>
</div>
<iconify-icon className="text-[var(--border-light)] group-hover:text-[var(--color-primary)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 border border-[var(--border-light)] rounded-[var(--radius-md)] hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--color-primary)] transition-colors" icon="solar:card-send-linear"></iconify-icon>
<span className="text-[14px] text-[var(--text-primary)]">Open Bank Account</span>
</div>
<iconify-icon className="text-[var(--border-light)] group-hover:text-[var(--color-primary)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -top-8 -right-8 w-56 bg-white p-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] border border-[var(--border-light)] animate-float">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--color-accent)]">
<span className="font-bold text-xs">SG</span>
</div>
<div className="text-[13px] font-semibold text-[var(--color-primary)]">New Entity</div>
</div>
<div className="h-1.5 w-full bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
<div className="h-full bg-[var(--color-accent)] w-3/4"></div>
</div>
<div className="mt-3 text-[11px] text-[var(--text-tertiary)] text-right">Setup 75% complete</div>
</div>
</div>
</div>
</section>

<section className="border-y border-[var(--border-light)] bg-white py-12">
<div className="container-custom">
<p className="text-center text-[12px] font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-10">TRUSTED BY 2,000+ COMPANIES &amp; PARTNERS</p>
<div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50">
<div className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]"><iconify-icon icon="mdi:stripe"></iconify-icon> Stripe</div>
<div className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]"><iconify-icon icon="simple-icons:wise"></iconify-icon> Wise</div>
<div className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]"><iconify-icon icon="simple-icons:xero"></iconify-icon> Xero</div>
<div className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]">AMARRIS</div>
<div className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]">LexFlow</div>
<div className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]">ACRA</div>
</div>
</div>
</section>

<section className="section-padding bg-[var(--bg-secondary)]">
<div className="container-custom">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="space-y-10">
<h2 className="text-h1 text-[var(--color-primary)]">
                        Going global shouldn't be a <span className="text-red-500">headache.</span>
</h2>
<p className="text-body text-[var(--text-secondary)] leading-relaxed">Traditional incorporation is broken. Dealing with foreign bureaucracy, hidden fees, and disconnected lawyers slows down your growth.</p>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<iconify-icon className="text-red-500 mt-1 text-2xl flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-body text-[var(--text-secondary)]">Endless paperwork and opaque processes</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-red-500 mt-1 text-2xl flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-body text-[var(--text-secondary)]">Hidden fees and unexpected tax implications</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-red-500 mt-1 text-2xl flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-body text-[var(--text-secondary)]">Manual compliance tracking on spreadsheets</span>
</li>
</ul>
</div>

<div className="bg-white p-12 rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)] border border-[var(--border-light)]">
<div className="space-y-10">
<h2 className="text-h1 text-[var(--color-primary)]">
                            Our platform <span className="text-[var(--color-accent)]">simplifies everything.</span>
</h2>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-h3 text-[var(--color-primary)] mb-2">100% Digital Incorporation</h3>
<p className="text-body-small text-[var(--text-secondary)]">Setup your entity in 48h without leaving your desk.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-h3 text-[var(--color-primary)] mb-2">Transparent Pricing</h3>
<p className="text-body-small text-[var(--text-secondary)]">Pay what you see. No hidden legal fees.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
<iconify-icon icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-h3 text-[var(--color-primary)] mb-2">Automated Compliance</h3>
<p className="text-body-small text-[var(--text-secondary)]">Accounting &amp; tax filing handled by experts.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding-lg bg-[var(--bg-secondary)] relative overflow-hidden" id="calculator">
<div className="container-custom relative z-10">
<div className="text-center mb-16">
<span className="text-micro text-[var(--color-accent)] mb-4 block">Smart Recommendation</span>
<h2 className="text-h1 text-[var(--color-primary)] mb-6">Which jurisdiction fits your project?</h2>
<p className="text-body-large max-w-2xl mx-auto">Answer 5 questions to get a personalized recommendation in 30 seconds.</p>
</div>

<div className="bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-md)] overflow-hidden border border-[var(--border-light)]">
<div className="flex flex-col md:flex-row min-h-[500px]">

<div className="p-12 md:w-2/3 border-r border-[var(--border-light)]">
<div className="flex justify-between items-center mb-12">
<span className="text-micro text-[var(--text-tertiary)]">Question 1/5</span>
<div className="w-32 h-1 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
<div className="w-1/5 h-full bg-[var(--color-accent)] rounded-full"></div>
</div>
</div>
<h3 className="text-h2 text-[var(--color-primary)] mb-8">What is your primary business activity?</h3>
<div className="grid grid-cols-1 gap-4">
<button className="flex items-center gap-4 p-5 border border-[var(--border-light)] rounded-[var(--radius-md)] hover:border-[var(--color-accent)] hover:bg-[var(--bg-tertiary)] transition-all duration-300 text-left group">
<div className="w-6 h-6 rounded-full border border-[var(--border-light)] group-hover:border-[var(--color-accent)] flex items-center justify-center transition-all">
<div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-body font-medium text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">SaaS / Tech Startup</span>
</button>
<button className="flex items-center gap-4 p-5 border border-[var(--border-light)] rounded-[var(--radius-md)] hover:border-[var(--color-accent)] hover:bg-[var(--bg-tertiary)] transition-all duration-300 text-left group">
<div className="w-6 h-6 rounded-full border border-[var(--border-light)] group-hover:border-[var(--color-accent)] flex items-center justify-center transition-all"></div>
<span className="text-body font-medium text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">E-commerce / Dropshipping</span>
</button>
<button className="flex items-center gap-4 p-5 border border-[var(--border-light)] rounded-[var(--radius-md)] hover:border-[var(--color-accent)] hover:bg-[var(--bg-tertiary)] transition-all duration-300 text-left group">
<div className="w-6 h-6 rounded-full border border-[var(--border-light)] group-hover:border-[var(--color-accent)] flex items-center justify-center transition-all"></div>
<span className="text-body font-medium text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">Consulting / Freelance</span>
</button>
</div>
</div>

<div className="bg-[var(--bg-tertiary)] p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
<div className="w-20 h-20 bg-white rounded-full shadow-[var(--shadow-sm)] flex items-center justify-center mb-6">
<iconify-icon className="text-5xl text-[var(--color-accent)]" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h4 className="text-h3 text-[var(--color-primary)] mb-3">AI Analyzing...</h4>
<p className="text-body-small text-[var(--text-secondary)] mb-8">We compare tax rates, setup speed, and banking access across 4 countries.</p>
<div className="w-full space-y-4">
<div className="flex justify-between text-caption text-[var(--text-secondary)]">
<span>Tax Optimization</span>
<span className="font-bold text-[var(--color-primary)]">High</span>
</div>
<div className="w-full bg-[var(--border-light)] rounded-full h-1.5 overflow-hidden">
<div className="bg-[var(--color-primary)] h-full rounded-full w-3/4"></div>
</div>
</div>
</div>
</div>
</div>
<div className="text-center mt-10">
<a className="text-body-small text-[var(--text-secondary)] hover:text-[var(--color-primary)] border-b border-[var(--border-light)] hover:border-[var(--text-secondary)] pb-0.5 transition-all duration-300" href="#services">Skip quiz and see all jurisdictions</a>
</div>
</div>
</section>

<section className="section-padding bg-white" id="services">
<div className="container-custom">
<div className="text-center mb-20">
<h2 className="text-h1 text-[var(--color-primary)] mb-6">Global hubs, local expertise</h2>
<p className="text-body-large max-w-2xl mx-auto">Choose the perfect jurisdiction for your goals. We handle the local complexities.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="feature-card group cursor-pointer">
<div className="w-16 h-16 bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
<span className="text-2xl font-bold">FR</span>
</div>
<h3 className="text-h3 text-[var(--color-primary)] mb-2">France</h3>
<p className="text-body-small text-[var(--text-secondary)] font-medium mb-8">EU Market Access + Credibility</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> SAS / SASU Setup
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Kbis in 48h
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> French IBAN
                        </li>
</ul>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border-light)]">
<span className="text-body font-semibold text-[var(--color-primary)]">From €499</span>
<iconify-icon className="text-[var(--text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>

<div className="feature-card group cursor-pointer">
<div className="w-16 h-16 bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
<span className="text-2xl font-bold">SG</span>
</div>
<h3 className="text-h3 text-[var(--color-primary)] mb-2">Singapore</h3>
<p className="text-body-small text-[var(--text-secondary)] font-medium mb-8">Asian Tech Hub + Tax Efficiency</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Pte Ltd Setup
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> 0% on foreign income
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Nominee Director
                        </li>
</ul>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border-light)]">
<span className="text-body font-semibold text-[var(--color-primary)]">From €1,899</span>
<iconify-icon className="text-[var(--text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>

<div className="feature-card group cursor-pointer">
<div className="w-16 h-16 bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
<span className="text-2xl font-bold">AE</span>
</div>
<h3 className="text-h3 text-[var(--color-primary)] mb-2">Dubai</h3>
<p className="text-body-small text-[var(--text-secondary)] font-medium mb-8">0% Tax + Lifestyle</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Freezone Setup
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Residency Visa
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> No corporate tax
                        </li>
</ul>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border-light)]">
<span className="text-body font-semibold text-[var(--color-primary)]">From €4,500</span>
<iconify-icon className="text-[var(--text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>

<div className="feature-card group cursor-pointer">
<div className="w-16 h-16 bg-[var(--bg-tertiary)] rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
<span className="text-2xl font-bold">US</span>
</div>
<h3 className="text-h3 text-[var(--color-primary)] mb-2">USA</h3>
<p className="text-body-small text-[var(--text-secondary)] font-medium mb-8">Global Credibility + VC</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Delaware / Wyoming
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> EIN in 24h
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Stripe access
                        </li>
</ul>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border-light)]">
<span className="text-body font-semibold text-[var(--color-primary)]">From €890</span>
<iconify-icon className="text-[var(--text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding bg-[var(--bg-secondary)] border-y border-[var(--border-light)]" id="how-it-works">
<div className="container-custom">
<h2 className="text-h1 text-[var(--color-primary)] mb-20 text-center">From concept to company in 4 steps</h2>
<div className="relative">
<div className="hidden lg:block absolute top-12 left-10 right-10 h-px bg-[var(--border-light)] z-0"></div>
<div className="grid lg:grid-cols-4 gap-12 relative z-10">

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-[var(--bg-secondary)] shadow-[var(--shadow-sm)] flex items-center justify-center mb-8">
<iconify-icon className="text-3xl text-[var(--color-primary)]" icon="solar:calculator-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-h3 text-[var(--color-primary)] mb-3">1. Calculate</h3>
<p className="text-body-small text-[var(--text-secondary)]">Take the 30-sec quiz to find your ideal jurisdiction.</p>
</div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-[var(--bg-secondary)] shadow-[var(--shadow-sm)] flex items-center justify-center mb-8">
<iconify-icon className="text-3xl text-[var(--color-primary)]" icon="solar:bag-check-linear"></iconify-icon>
</div>
<h3 className="text-h3 text-[var(--color-primary)] mb-3">2. Choose</h3>
<p className="text-body-small text-[var(--text-secondary)]">Select your package and transparent pricing.</p>
</div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-[var(--bg-secondary)] shadow-[var(--shadow-sm)] flex items-center justify-center mb-8">
<iconify-icon className="text-3xl text-[var(--color-primary)]" icon="solar:file-check-linear"></iconify-icon>
</div>
<h3 className="text-h3 text-[var(--color-primary)] mb-3">3. Upload</h3>
<p className="text-body-small text-[var(--text-secondary)]">Submit KYC documents via our secure dashboard.</p>
</div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-[var(--color-primary)] rounded-full border-4 border-[var(--bg-secondary)] shadow-[var(--shadow-md)] flex items-center justify-center mb-8 text-white">
<iconify-icon className="text-3xl" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<h3 className="text-h3 text-[var(--color-primary)] mb-3">4. Launch</h3>
<p className="text-body-small text-[var(--text-secondary)]">Receive your company registration and IBAN in 48h.</p>
</div>
</div>
</div>
<div className="text-center mt-16">
<a className="btn-primary" href="#calculator">Start Now</a>
</div>
</div>
</section>

<section className="section-padding bg-white" id="pricing">
<div className="container-custom">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-h1 text-[var(--color-primary)] mb-6">Transparent pricing. No hidden fees.</h2>
<p className="text-body-large text-[var(--text-secondary)]">Compare real costs per country. Includes government fees.</p>
</div>
<div className="grid lg:grid-cols-3 gap-10">

<div className="border-2 border-[var(--border-light)] rounded-[var(--radius-lg)] p-10 hover:border-[var(--color-accent)] transition-all duration-300">
<h3 className="text-h3 text-[var(--color-primary)] mb-2">Starter</h3>
<p className="text-body-small text-[var(--text-secondary)] mb-8">To test your idea</p>
<div className="mb-8">
<span className="text-5xl font-bold text-[var(--color-primary)]">€499</span>
<span className="text-body text-[var(--text-secondary)]">/one-off</span>
</div>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-3 text-body-small text-[var(--text-primary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Incorporation
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-primary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Basic Compliance
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-primary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> 1 Year Dashboard
                        </li>
</ul>
<button className="w-full py-4 rounded-[var(--radius-md)] border-2 border-[var(--border-light)] font-medium text-[var(--color-primary)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--border-medium)] transition-all">View Details</button>
</div>

<div className="border-2 border-[var(--color-primary)] rounded-[var(--radius-lg)] p-10 bg-[var(--color-primary)] text-white relative shadow-[var(--shadow-lg)]">
<div className="absolute top-4 right-4 bg-[var(--color-accent)] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">POPULAR</div>
<h3 className="text-h3 text-white mb-2">Pro All-in-One</h3>
<p className="text-body-small text-gray-400 mb-8">Incorporation + Accounting</p>
<div className="mb-8">
<span className="text-5xl font-bold text-white">€1,499</span>
<span className="text-body text-gray-400">/year</span>
</div>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-3 text-body-small text-white">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Incorporation Included
                        </li>
<li className="flex items-center gap-3 text-body-small text-white">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Annual Accounting
                        </li>
<li className="flex items-center gap-3 text-body-small text-white">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Registered Address
                        </li>
<li className="flex items-center gap-3 text-body-small text-white">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Corporate Secretary
                        </li>
</ul>
<button className="w-full py-4 rounded-[var(--radius-md)] bg-[var(--color-accent)] font-medium text-white hover:bg-white hover:text-[var(--color-primary)] transition-all">Choose Pro</button>
</div>

<div className="border-2 border-[var(--border-light)] rounded-[var(--radius-lg)] p-10 hover:border-[var(--color-accent)] transition-all duration-300">
<h3 className="text-h3 text-[var(--color-primary)] mb-2">Growth</h3>
<p className="text-body-small text-[var(--text-secondary)] mb-8">Multi-jurisdiction scaling</p>
<div className="mb-8">
<span className="text-5xl font-bold text-[var(--color-primary)]">Custom</span>
</div>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-3 text-body-small text-[var(--text-primary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Multi-country Setup
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-primary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Dedicated CFO
                        </li>
<li className="flex items-center gap-3 text-body-small text-[var(--text-primary)]">
<iconify-icon className="text-[var(--color-success)]" icon="solar:check-circle-linear" width="18"></iconify-icon> Complex Tax Advisory
                        </li>
</ul>
<button className="w-full py-4 rounded-[var(--radius-md)] border-2 border-[var(--border-light)] font-medium text-[var(--color-primary)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--border-medium)] transition-all">Contact Sales</button>
</div>
</div>
<p className="text-center mt-8 text-body-small text-[var(--text-secondary)]">💡 Use our calculator to estimate your exact project cost.</p>
</div>
</section>

<section className="section-padding bg-[var(--bg-secondary)]">
<div className="container-custom">
<h2 className="text-h1 text-[var(--color-primary)] mb-20 text-center">Built for modern founders</h2>
<div className="grid md:grid-cols-2 gap-10 mb-20">

<div className="bg-white p-10 rounded-[var(--radius-lg)] border border-[var(--border-light)] shadow-[var(--shadow-sm)]">
<div className="flex items-center gap-1 mb-6 text-orange-400 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-body text-[var(--text-primary)] mb-8 leading-relaxed">"I set up my Singapore Pte Ltd in 3 days from Paris. The unified dashboard is a game changer for managing my French and Asian entities."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[var(--bg-tertiary)]"></div>
<div className="flex-1">
<div className="font-semibold text-body text-[var(--color-primary)]">Marie D.</div>
<div className="text-body-small text-[var(--text-secondary)]">Founder @ TechCo</div>
</div>
<div className="px-3 py-1.5 bg-red-50 text-red-600 text-[12px] rounded-full font-medium border border-red-100">🇸🇬 Singapore</div>
</div>
</div>

<div className="bg-white p-10 rounded-[var(--radius-lg)] border border-[var(--border-light)] shadow-[var(--shadow-sm)]">
<div className="flex items-center gap-1 mb-6 text-orange-400 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-body text-[var(--text-primary)] mb-8 leading-relaxed">"Finally a platform that understands French complexities. The support team is ultra-responsive and the pricing is 100% transparent."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[var(--bg-tertiary)]"></div>
<div className="flex-1">
<div className="font-semibold text-body text-[var(--color-primary)]">Thomas L.</div>
<div className="text-body-small text-[var(--text-secondary)]">CEO @ ConsultCorp</div>
</div>
<div className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[12px] rounded-full font-medium border border-blue-100">🇫🇷 France</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-[var(--border-light)] pt-16">
<div>
<div className="text-5xl font-bold text-[var(--color-primary)] mb-2">2,000+</div>
<div className="text-body-small text-[var(--text-secondary)]">Companies Created</div>
</div>
<div>
<div className="text-5xl font-bold text-[var(--color-primary)] mb-2">48h</div>
<div className="text-body-small text-[var(--text-secondary)]">Avg Setup Time</div>
</div>
<div>
<div className="text-5xl font-bold text-[var(--color-primary)] mb-2">4</div>
<div className="text-body-small text-[var(--text-secondary)]">Jurisdictions</div>
</div>
<div>
<div className="text-5xl font-bold text-[var(--color-primary)] mb-2">4.9/5</div>
<div className="text-body-small text-[var(--text-secondary)]">Client Rating</div>
</div>
</div>
</div>
</section>

<section className="section-padding bg-white">
<div className="container-custom max-w-[1000px]">
<h2 className="text-h1 text-[var(--color-primary)] mb-12 text-center">Why choose CorpSec?</h2>
<div className="overflow-x-auto no-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b-2 border-[var(--border-light)]">
<th className="py-5 pl-6 text-body-small font-medium text-[var(--text-secondary)]">Feature</th>
<th className="py-5 px-6 text-body font-bold text-[var(--color-primary)] bg-[var(--bg-tertiary)] rounded-t-xl text-center">CorpSec</th>
<th className="py-5 px-6 text-body-small font-medium text-[var(--text-secondary)] text-center">Global Platforms</th>
<th className="py-5 px-6 text-body-small font-medium text-[var(--text-secondary)] text-center">Traditional Lawyers</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-[var(--border-light)]">
<td className="py-5 pl-6 text-body font-medium text-[var(--color-primary)]">France Expertise</td>
<td className="py-5 px-6 text-center bg-[var(--bg-tertiary)] border-x border-white font-semibold text-[var(--color-accent)]">Deep Expert</td>
<td className="py-5 px-6 text-center text-body-small text-[var(--text-secondary)]">Basic</td>
<td className="py-5 px-6 text-center text-body-small text-[var(--text-secondary)]">Expert</td>
</tr>
<tr className="border-b border-[var(--border-light)]">
<td className="py-5 pl-6 text-body font-medium text-[var(--color-primary)]">Setup Speed</td>
<td className="py-5 px-6 text-center bg-[var(--bg-tertiary)] border-x border-white font-semibold text-[var(--color-accent)]">48h</td>
<td className="py-5 px-6 text-center text-body-small text-[var(--text-secondary)]">3-5 days</td>
<td className="py-5 px-6 text-center text-body-small text-[var(--text-secondary)]">2-4 weeks</td>
</tr>
<tr className="border-b border-[var(--border-light)]">
<td className="py-5 pl-6 text-body font-medium text-[var(--color-primary)]">Pricing</td>
<td className="py-5 px-6 text-center bg-[var(--bg-tertiary)] border-x border-white font-semibold text-[var(--color-accent)]">Transparent</td>
<td className="py-5 px-6 text-center text-body-small text-[var(--text-secondary)]">Variable</td>
<td className="py-5 px-6 text-center text-body-small text-[var(--text-secondary)]">Opaque / High</td>
</tr>
<tr>
<td className="py-5 pl-6 text-body font-medium text-[var(--color-primary)]">Unified Dashboard</td>
<td className="py-5 px-6 text-center bg-[var(--bg-tertiary)] rounded-b-xl font-semibold text-[var(--color-accent)]">Yes (Multi-country)</td>
<td className="py-5 px-6 text-center text-body-small text-[var(--text-secondary)]">No (Per country)</td>
<td className="py-5 px-6 text-center text-body-small text-[var(--text-secondary)]">Email / Paper</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="section-padding bg-[var(--bg-secondary)]">
<div className="container-custom max-w-[800px]">
<h2 className="text-h1 text-[var(--color-primary)] mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-5">

<details className="group bg-white rounded-[var(--radius-lg)] border-2 border-[var(--border-light)] overflow-hidden hover:border-[var(--color-accent)] transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer p-7 text-body text-[var(--color-primary)]">
<span>Which country should I choose?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-body-small text-[var(--text-secondary)] px-7 pb-7 leading-relaxed">
                        It depends on your activity. Tech/SaaS often benefits from Singapore or USA. E-commerce focused on Europe should consider France or Ireland. Use our free calculator to get a tailored recommendation.
                    </div>
</details>

<details className="group bg-white rounded-[var(--radius-lg)] border-2 border-[var(--border-light)] overflow-hidden hover:border-[var(--color-accent)] transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer p-7 text-body text-[var(--color-primary)]">
<span>Do I need to travel to open the company?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-body-small text-[var(--text-secondary)] px-7 pb-7 leading-relaxed">
                        No. The entire process is 100% remote. We handle the paperwork and verification digitally.
                    </div>
</details>

<details className="group bg-white rounded-[var(--radius-lg)] border-2 border-[var(--border-light)] overflow-hidden hover:border-[var(--color-accent)] transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer p-7 text-body text-[var(--color-primary)]">
<span>Can you help with bank accounts?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-body-small text-[var(--text-secondary)] px-7 pb-7 leading-relaxed">
                        Yes, we facilitate account opening with partners like Wise, Mercury, and local banks depending on the jurisdiction.
                    </div>
</details>
</div>
</div>
</section>

<section className="section-padding-lg bg-[var(--color-primary)] relative overflow-hidden">
<div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="container-custom text-center relative z-10">
<h2 className="text-display text-white mb-6">Ready to launch your global entity?</h2>
<p className="text-body-large text-white/70 mb-12">Join 2,000+ entrepreneurs simplifying their expansion today.</p>
<form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-10">
<input className="flex-1 px-6 py-4 rounded-[var(--radius-md)] text-[var(--text-primary)] border-2 border-transparent focus:border-[var(--color-accent)] focus:outline-none transition-all duration-300" placeholder="Enter your email" type="email"/>
<button className="bg-[var(--color-accent)] text-white font-medium px-10 py-4 rounded-[var(--radius-md)] hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 whitespace-nowrap">
                    Start Free
                </button>
</form>
<div className="flex justify-center gap-10 text-body-small text-white/50">
<span className="flex items-center gap-2"><iconify-icon icon="solar:lock-keyhole-linear" width="18"></iconify-icon> Secure data</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:bolt-circle-linear" width="18"></iconify-icon> No commitment</span>
</div>
</div>
</section>

<footer className="bg-white border-t border-[var(--border-light)] pt-20 pb-10">
<div className="container-custom">
<div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-[var(--color-primary)] rounded-[var(--radius-sm)] flex items-center justify-center text-white">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
</div>
<span className="text-[19px] font-bold text-[var(--color-primary)]">CorpSec</span>
</div>
<div className="text-body-small text-[var(--text-secondary)] mb-6">Simplifying global business for modern entrepreneurs.</div>
<div className="flex gap-4 text-[var(--text-tertiary)]">
<a className="hover:text-[var(--color-primary)] transition-colors" href="#"><iconify-icon icon="mdi:linkedin" width="22"></iconify-icon></a>
<a className="hover:text-[var(--color-primary)] transition-colors" href="#"><iconify-icon icon="mdi:twitter" width="22"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-body text-[var(--color-primary)] mb-5">Services</h4>
<ul className="space-y-4 text-body-small text-[var(--text-secondary)]">
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">France</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Singapore</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Dubai</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">USA</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-body text-[var(--color-primary)] mb-5">Resources</h4>
<ul className="space-y-4 text-body-small text-[var(--text-secondary)]">
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Calculator</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Country Comparator</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-body text-[var(--color-primary)] mb-5">Company</h4>
<ul className="space-y-4 text-body-small text-[var(--text-secondary)]">
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-body text-[var(--color-primary)] mb-5">Legal</h4>
<ul className="space-y-4 text-body-small text-[var(--text-secondary)]">
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-[var(--color-primary)] transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-[var(--border-light)] pt-10 flex flex-col md:flex-row justify-between items-center text-body-small text-[var(--text-tertiary)]">
<p>© 2025 CorpSec. All rights reserved.</p>
<div className="flex gap-6 mt-6 md:mt-0">
<span>ACRA Reg.</span>
<span>GDPR Compliant</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
