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

    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');

    navToggle?.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('scale-y-100');
      mobileNav.classList.toggle('scale-y-0', !isOpen);
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
      

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
<svg className="lucide lucide-zap text-white w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight">Flowly</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-indigo-600" href="#features">Features</a>
<a className="hover:text-indigo-600" href="#pricing">Pricing</a>
<a className="hover:text-indigo-600" href="#faq">FAQ</a>
<a className="hover:text-indigo-600" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm hover:text-indigo-600" href="#">Log in</a>
<a className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition" href="#">
          Get Started<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<button className="md:hidden p-2 rounded-md hover:bg-slate-100" id="navToggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden transform transition-transform origin-top scale-y-0 bg-white border-t border-slate-200" id="mobileNav">
<nav className="px-4 py-6 space-y-4 text-sm">
<a className="block hover:text-indigo-600" href="#features">Features</a>
<a className="block hover:text-indigo-600" href="#pricing">Pricing</a>
<a className="block hover:text-indigo-600" href="#faq">FAQ</a>
<a className="block hover:text-indigo-600" href="#contact">Contact</a>
<div className="pt-4 border-t border-slate-200 flex items-center gap-4">
<a className="text-sm hover:text-indigo-600" href="#">Log in</a>
<a className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition flex-1 justify-center" href="#">
            Get Started<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 absolute -top-24 -left-32"></div>
<div className="w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50 absolute bottom-0 right-0"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative">
<div className="max-w-3xl mx-auto text-center space-y-6">
<h1 className="sm:text-5xl lg:text-6xl text-3xl font-semibold tracking-tight" style={{}}>Faster than ever, like the speed of light</h1>
<p className="text-lg sm:text-xl text-slate-600">Flowly connects your favorite apps so your team can focus on what matters.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-indigo-700 transition" href="#">
            Start Free Trial<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm font-medium hover:text-indigo-600" href="#features">
            See Features<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>

<div className="mt-16 shadow-2xl rounded-xl overflow-hidden ring-1 ring-slate-200">
<img alt="Product screenshot" className="w-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need to build, run &amp; grow</h2>
<p className="text-slate-600 mt-4">Powerful features designed to streamline your workflow, all in one place.</p>
</div>
<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-lg font-semibold">No-code Workflows</h3>
<p className="text-slate-600 text-sm leading-relaxed">Drag-and-drop builder lets anyone automate complex processes without writing a single line.</p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-semibold">Real-time Insights</h3>
<p className="text-slate-600 text-sm leading-relaxed">Monitor key metrics and see the impact of every automation the moment it happens.</p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-rose-600 text-white flex items-center justify-center">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold">Enterprise-grade Security</h3>
<p className="text-slate-600 text-sm leading-relaxed">SAML SSO, audit logs, and advanced permissions keep your data safe and compliant.</p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center">
<svg className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<h3 className="text-lg font-semibold">24/7 Support</h3>
<p className="text-slate-600 text-sm leading-relaxed">Our team of experts are on standby around the clock to help you every step of the way.</p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-semibold">Collaboration Built-in</h3>
<p className="text-slate-600 text-sm leading-relaxed">Share, comment and iterate together without leaving the platform.</p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-600 text-white flex items-center justify-center">
<svg className="lucide lucide-smartphone w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold">Works Everywhere</h3>
<p className="text-slate-600 text-sm leading-relaxed">Responsive design and native mobile apps keep your automations at your fingertips.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-xl mx-auto text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Transparent pricing for teams of all sizes</h2>
<p className="text-slate-600 mt-4">No hidden fees. Cancel anytime.</p>
</div>
<div className="grid gap-8 md:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow hover:shadow-lg transition">
<div className="p-6 border-b border-slate-200">
<h3 className="text-lg font-semibold">Starter</h3>
<p className="mt-2 text-slate-600 text-sm">For individuals getting started.</p>
</div>
<div className="p-6 flex-1 flex flex-col">
<p className="text-4xl font-semibold tracking-tight">$9<span className="text-base font-medium text-slate-600">/mo</span></p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>3 automations</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>1k tasks / mo</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Email support</li>
</ul>
<a className="mt-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition w-full mt-8" href="#">
              Choose Plan
            </a>
</div>
</div>

<div className="relative flex flex-col rounded-2xl border-2 border-indigo-600 bg-white shadow-lg">
<span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-indigo-600 text-white text-[11px] uppercase font-semibold px-2 py-0.5 rounded-full">Popular</span>
<div className="p-6 border-b border-slate-200">
<h3 className="text-lg font-semibold">Growth</h3>
<p className="mt-2 text-slate-600 text-sm">Everything for small teams.</p>
</div>
<div className="p-6 flex-1 flex flex-col">
<p className="text-4xl font-semibold tracking-tight">$29<span className="text-base font-medium text-slate-600">/mo</span></p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>20 automations</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>50k tasks / mo</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Priority support</li>
</ul>
<a className="mt-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition w-full mt-8" href="#">
              Choose Plan
            </a>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow hover:shadow-lg transition">
<div className="p-6 border-b border-slate-200">
<h3 className="text-lg font-semibold">Enterprise</h3>
<p className="mt-2 text-slate-600 text-sm">Advanced features and support.</p>
</div>
<div className="p-6 flex-1 flex flex-col">
<p className="text-4xl font-semibold tracking-tight">Custom</p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited automations</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited tasks</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Dedicated CSM</li>
</ul>
<a className="mt-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition w-full mt-8" href="#">
              Contact Sales
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
</div>
<div className="max-w-3xl mx-auto divide-y divide-slate-200 border border-slate-200 rounded-xl">

<details className="group p-6 cursor-pointer open:bg-slate-50">
<summary className="flex items-center justify-between list-none">
<span className="font-medium">Is there a free trial?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm text-slate-600">Yes! Every new account receives a 14-day free trial with full access to the Growth plan.</p>
</details>

<details className="group p-6 cursor-pointer open:bg-slate-50">
<summary className="flex items-center justify-between list-none">
<span className="font-medium">Can I change my plan later?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm text-slate-600">Absolutely. You can upgrade or downgrade anytime from your billing settings.</p>
</details>

<details className="group p-6 cursor-pointer open:bg-slate-50">
<summary className="flex items-center justify-between list-none">
<span className="font-medium">Do you offer discounts for nonprofits?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm text-slate-600">We love supporting good causes. Reach out to our team and we’ll get you set up.</p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Automate  your first workflow in minutes.</h2>
<a className="inline-flex items-center gap-2 bg-white text-indigo-700 text-sm font-medium px-6 py-3 rounded-md hover:bg-slate-200 transition" href="#">
        Start Free Trial<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<p className="text-sm mt-2 text-indigo-100">No credit card required • Cancel anytime</p>
</div>
</section>

<footer className="bg-slate-900 text-slate-200 pt-16" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-3">
<div>
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
<svg className="lucide lucide-zap text-white w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Flowly</span>
</a>
<p className="text-sm text-slate-400 mt-4">Workflow automation made simple.</p>
</div>
<div className="text-sm">
<h3 className="font-semibold mb-4">Product</h3>
<ul className="space-y-2">
<li><a className="hover:text-white" href="#features">Features</a></li>
<li><a className="hover:text-white" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white" href="#faq">FAQ</a></li>
</ul>
</div>
<div className="text-sm">
<h3 className="font-semibold mb-4">Company</h3>
<ul className="space-y-2">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-slate-800 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
<p className="text-slate-500">© 2024 Flowly. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Security</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
