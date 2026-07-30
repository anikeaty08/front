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

    const toggleBtn = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    toggleBtn?.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      toggleBtn.querySelector('i').dataset.lucide = navMenu.classList.contains('hidden') ? 'menu' : 'x';
      lucide.createIcons();
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
      
<main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
<div className="sm:p-10 lg:p-14 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-green-50 rounded-3xl pt-6 pr-6 pb-6 pl-6">

<nav className="relative z-10">
<div className="flex sm:px-6 bg-white rounded-full pt-3 pr-4 pb-3 pl-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between" style={{}}>

<a className="flex items-center gap-2" href="#">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white" style={{}}>
<svg className="lucide lucide-rocket w-5 h-5 stroke-[3]" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</span>
<span className="text-base font-semibold tracking-tight hidden sm:block text-slate-900 font-geist" style={{}}>Nova</span>
</a>

<ul className="hidden sm:flex items-center gap-8 text-sm font-medium" id="nav-menu">
<li><a className="text-slate-900 hover:text-slate-700 font-geist" href="#" style={{}}>Overview</a></li>
<li className=""><a className="text-slate-500 hover:text-slate-700 font-geist" href="#" style={{}}>Features</a></li>
<li className=""><a className="text-slate-500 hover:text-slate-700 font-geist" href="#" style={{}}>Pricing</a></li>
<li className=""><a className="text-slate-500 hover:text-slate-700 font-geist" href="#" style={{}}>Blog</a></li>
</ul>

<button className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100" id="nav-toggle" style={{}}>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>

<div className="hidden sm:block">
<a className="ml-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-cyan-500 text-sm font-semibold shadow-sm transition hover:bg-cyan-600 text-white font-geist" href="#" style={{}}>Sign Up</a>
</div>
</div>
</nav>

<div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

<div className="">
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-slate-900 tracking-tight font-jakarta" style={{}}>Accelerate Your Growth. Unlock New Horizons.</h1>
<p className="mt-6 text-lg max-w-lg text-slate-600 font-geist" style={{}}>Our platform empowers modern teams to build, launch and scale products faster with data-backed insights and modular tooling.</p>
<div className="mt-8 flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-cyan-500 font-medium shadow-sm transition hover:bg-cyan-600 text-white font-geist" href="#" style={{}}>Start Free Trial</a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full border font-medium transition border-slate-300 hover:border-slate-400 text-slate-900 font-geist" href="#" style={{}}>Explore Docs</a>
</div>
<div className="mt-16 flex items-start gap-12">
<div>
<p className="text-4xl text-slate-900 font-jakarta font-semibold" style={{}}>5M+</p>
<p className="mt-1 text-sm text-slate-600 font-geist" style={{}}>monthly interactions</p>
</div>
<div className="w-px h-12 hidden md:block bg-slate-300"></div>
<div>
<p className="text-4xl text-slate-900 font-jakarta font-semibold" style={{}}>98%</p>
<p className="mt-1 text-sm text-slate-600 font-geist" style={{}}>CSAT score</p>
</div>
</div>
</div>

<div className="relative h-[340px] sm:h-[420px] lg:h-[480px]">
<div className="absolute inset-0 -translate-x-4 sm:-translate-x-8">
<img alt="Team collaboration" className="w-full h-full object-cover rounded-xl" src="/assets/dbbf1869-f6fb-45ad-af6f-bde5244ee6df_1600w.jpg" />
</div>
</div>
</div><section className="max-w-7xl lg:px-8 mt-20 mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-jakarta">Features Designed for Your Success</h2>
<p className="mt-4 max-w-2xl text-lg text-slate-600 font-geist">Discover how our platform can empower your team with tools built to accelerate product growth and optimize workflows.</p>
<div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
<div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
<svg className="lucide lucide-bar-chart-2 w-7 h-7 text-cyan-500" data-lucide="bar-chart-2" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<h3 className="text-xl font-semibold text-slate-900 font-jakarta">Data-Driven Insights</h3>
<p className="text-slate-600 font-geist text-base">Analyze real-time metrics to make smarter decisions quickly and confidently.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
<svg className="lucide lucide-layers w-7 h-7 text-cyan-500" data-lucide="layers" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="text-xl font-semibold text-slate-900 font-jakarta">Modular Tooling</h3>
<p className="text-slate-600 font-geist text-base">Customize your workflow with flexible components designed to scale with you.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
<svg className="lucide lucide-users w-7 h-7 text-cyan-500" data-lucide="users" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-xl font-semibold text-slate-900 font-jakarta">Collaboration at Scale</h3>
<p className="text-slate-600 font-geist text-base">Empower teams with seamless communication and shared goals to drive results.</p>
</div>
<div className="flex flex-col items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
<svg className="lucide lucide-shield-check w-7 h-7 text-cyan-500" data-lucide="shield-check" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-xl font-semibold text-slate-900 font-jakarta">Reliable Security</h3>
<p className="text-slate-600 font-geist text-base">Safeguard your data with enterprise-grade protection and compliance.</p>
</div>
</div>
<div className="mt-20 border-t border-slate-200 pt-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-jakarta">Pricing Plans</h2>
<p className="mt-4 max-w-2xl text-lg text-slate-600 font-geist">Choose a plan that fits your team's needs and start growing today.</p>
<div className="mt-12 grid gap-8 sm:grid-cols-3">
<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition">
<h3 className="text-xl font-semibold text-slate-900 font-jakarta">Starter</h3>
<p className="mt-2 text-slate-600 font-geist">Ideal for small teams to get started.</p>
<p className="mt-6 text-4xl font-semibold text-slate-900 font-jakarta">$19<span className="text-lg font-medium text-slate-600 font-geist">/month</span></p>
<ul className="mt-8 space-y-4 text-slate-600 font-geist" role="list">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-500 flex-shrink-0" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Customizable workflows
          </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-500 flex-shrink-0" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Basic analytics
          </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-500 flex-shrink-0" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Email support
          </li>
</ul>
<a className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-600 font-geist" href="#">Get Started</a>
</div>
<div className="flex flex-col rounded-2xl border-2 border-cyan-500 bg-white p-8 shadow-md">
<h3 className="text-xl font-semibold text-slate-900 font-jakarta">Pro</h3>
<p className="mt-2 text-slate-600 font-geist">For growing teams that need more power.</p>
<p className="mt-6 text-4xl font-semibold text-slate-900 font-jakarta">$49<span className="text-lg font-medium text-slate-600 font-geist">/month</span></p>
<ul className="mt-8 space-y-4 text-slate-600 font-geist" role="list">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-500 flex-shrink-0" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Advanced analytics & reporting
          </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-500 flex-shrink-0" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Priority email & chat support
          </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-500 flex-shrink-0" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Unlimited projects & integrations
          </li>
</ul>
<a className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-600 font-geist" href="#">Get Started</a>
</div>
<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition">
<h3 className="text-xl font-semibold text-slate-900 font-jakarta">Enterprise</h3>
<p className="mt-2 text-slate-600 font-geist">Custom solutions for large organizations.</p>
<p className="mt-6 text-4xl font-semibold text-slate-900 font-jakarta">Contact Us</p>
<ul className="mt-8 space-y-4 text-slate-600 font-geist" role="list">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-500 flex-shrink-0" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Dedicated account manager
          </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-500 flex-shrink-0" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Advanced security & compliance
          </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-5 h-5 text-cyan-500 flex-shrink-0" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Custom integrations & support
          </li>
</ul>
<a className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-500 px-6 py-3 text-sm font-semibold text-cyan-500 shadow-sm transition hover:bg-cyan-50 font-geist" href="#">Contact Sales</a>
</div>
</div>
</div>
</section><section className="max-w-7xl lg:px-8 mt-20 mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 font-jakarta">Frequently Asked Questions</h2>
<p className="max-w-2xl text-lg text-slate-600 font-geist mt-4">Answers to common questions to help you get the most out of our platform.</p>
<div className="mt-12 max-w-4xl divide-y divide-slate-200 border-t border-slate-200">
<details className="group py-6 cursor-pointer" open="">
<summary className="flex items-center justify-between font-semibold text-slate-900 font-jakarta text-lg list-none">
        What is the refund policy?
        <svg className="lucide lucide-chevron-down w-5 h-5 text-cyan-500 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-slate-600 font-geist text-base leading-relaxed">We offer a 30-day money-back guarantee on all plans. If you’re not satisfied, contact our support team for a full refund.</p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex items-center justify-between font-semibold text-slate-900 font-jakarta text-lg list-none">
        Can I upgrade or downgrade my plan later?
        <svg className="lucide lucide-chevron-down w-5 h-5 text-cyan-500 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-slate-600 font-geist text-base leading-relaxed">Yes, you can change your subscription at any time from your account settings without any interruption to your service.</p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex items-center justify-between font-semibold text-slate-900 font-jakarta text-lg list-none">
        Do you offer custom integrations?
        <svg className="lucide lucide-chevron-down w-5 h-5 text-cyan-500 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-slate-600 font-geist text-base leading-relaxed">Custom integrations are available on our Enterprise plan. Contact our sales team to discuss your specific requirements.</p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex items-center justify-between font-semibold text-slate-900 font-jakarta text-lg list-none">
        Is my data secure on your platform?
        <svg className="lucide lucide-chevron-down w-5 h-5 text-cyan-500 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-slate-600 font-geist text-base leading-relaxed">We use enterprise-grade encryption, regular security audits, and compliance standards to protect your data at all times.</p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex items-center justify-between font-semibold text-slate-900 font-jakarta text-lg list-none">
        How do I get support if I have an issue?
        <svg className="lucide lucide-chevron-down w-5 h-5 text-cyan-500 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-slate-600 font-geist text-base leading-relaxed">Support varies by plan: Starter includes email support, Pro adds priority email & chat, and Enterprise offers a dedicated account manager.</p>
</details>
</div>
</section><section className="max-w-7xl lg:px-8 bg-teal-900 bg-[url(/assets/e8c8bc93-9fa2-4ae8-9066-52376ec84807_1600w.jpg)] bg-cover rounded-2xl mt-20 mr-auto ml-auto pr-6 pl-6 shadow-lg">
<div className="max-w-4xl mx-auto py-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight font-jakarta text-white">Ready to Elevate Your Product Growth?</h2>
<p className="mt-4 text-lg font-geist text-cyan-100 max-w-xl mx-auto">Join thousands of teams who trust Nova to accelerate their workflows and deliver outstanding results. Start your free trial today and unlock your team's potential.</p>
<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-cyan-600 font-semibold shadow-md hover:bg-cyan-50 transition font-geist" href="#">Start Free Trial</a>
<a className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-white font-semibold shadow-md hover:bg-cyan-500 hover:border-cyan-500 transition font-geist" href="#">Contact Sales</a>
</div>
</div>
</section>
</div>
</main>



    </>
  );
}
