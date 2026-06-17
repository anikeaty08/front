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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 glass-header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="index.html">
<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
<iconify-icon height="24" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-800 font-jakarta uppercase">Ms. Gloria's TLC llc</span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="index.html">HOME</a>
<a className="hover:text-blue-600 transition-colors" href="about.html">ABOUT</a>
<a className="hover:text-blue-600 transition-colors" href="contact.html">CONTACT</a>
</div>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-100" href="contact.html">
                Contact Us
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 hero-gradient overflow-hidden">
<div className="absolute top-0 right-0 -z-10 w-1/3 h-full opacity-10 pointer-events-none">
<iconify-icon className="text-blue-600" height="400" icon="solar:health-linear" width="400"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    CERTIFIED NURSES ASSISTANT (CNA)
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-8">
                    Exceptional Care with <span className="text-blue-600 italic">Tender Loving Care</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                    Ms. Gloria’s Caregivers &amp; Companions are specially trained to provide just the TLC services your loved one needs, allowing them to live at home as long as possible.
                </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-xl" href="#services">
                        LEARN MORE
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all" href="contact.html">
                        CONTACT US
                    </a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
<img alt="Healthcare professional" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586773860418-d3b9795056f7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon height="24" icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<span className="font-bold text-slate-800">Professional Training</span>
</div>
<p className="text-xs text-slate-500 font-medium leading-relaxed">Specially trained companions for specialized elder care.</p>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<img alt="Elderly care" className="rounded-2xl shadow-lg w-full h-64 object-cover" src="https://images.unsplash.com/photo-1581578731522-638df752e276?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<img alt="Companion" className="rounded-2xl shadow-lg w-full h-48 object-cover" src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="space-y-4 pt-8">
<img alt="Medical help" className="rounded-2xl shadow-lg w-full h-48 object-cover" src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<img alt="Nursing assistance" className="rounded-2xl shadow-lg w-full h-64 object-cover" src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">OUR COMMITMENT</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Whether a family member needs a little extra help around the house, assistance from recovery of a hospital surgery or someone to check in on them throughout the week, our in-home exceptional care is the answer.
                    </p>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Our exceptional care services are planned around your specific needs. We also modify the plan for your family member as their needs change.
                    </p>
<a className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all" href="contact.html">
                        Schedule a Consultation
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Personal &amp; Specialized Care Services</h2>
<p className="text-slate-500">Comprehensive support tailored to maintain dignity and independence at home.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm service-card">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-slate-900">Specialized Health</h3>
<ul className="space-y-3 text-slate-600 text-sm">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Alzheimer’s &amp; Dementia Care</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Hospice Support</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Post-Surgery Recovery</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Catheter/Ostomy Bag (Emptying)</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm service-card">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:home-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-slate-900">Daily Living Support</h3>
<ul className="space-y-3 text-slate-600 text-sm">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Medication Reminders</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Meals &amp; Menu Planning</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Personal Grooming &amp; Bathing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Grocery &amp; Pharmacy Errands</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm service-card">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-slate-900">Advocacy &amp; Companion</h3>
<ul className="space-y-3 text-slate-600 text-sm">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Emotional Companionship</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Doctor Appointment Escort</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Physician Communication</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Flexible Care Planning</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<h3 className="text-xl font-medium tracking-tight">FOLLOW OUR JOURNEY</h3>
<div className="flex items-center gap-6">
<a className="text-white/60 hover:text-white transition-colors text-2xl" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="text-white/60 hover:text-white transition-colors text-2xl" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="text-white/60 hover:text-white transition-colors text-2xl" href="#">
<iconify-icon icon="solar:videocamera-record-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-12">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<span className="font-bold text-slate-900 font-jakarta uppercase">Ms. Gloria's TLC</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Providing professional Certified Nurses Assistant services with a personalized touch for families across the region.
                    </p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="index.html">Home</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="about.html">About</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="contact.html">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="http://msgloria.com/Privacy_Rights.pdf" target="_blank">Patient Privacy Policy</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Terms of Use</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">Copyright © 2025 Ms. Gloria's TLC llc. All Rights Reserved.</p>
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-blue-500" icon="solar:shield-check-linear"></iconify-icon>
                    Licensed &amp; Insured Professional Care
                </div>
</div>
</div>
</footer>

    </>
  );
}
