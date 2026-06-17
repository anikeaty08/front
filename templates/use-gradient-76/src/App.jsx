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



        function updatePricing(checkbox) {
            const price = document.getElementById('price-tag');
            const cycle = document.getElementById('billing-cycle');
            if (checkbox.checked) {
                price.innerText = '$8';
                cycle.innerText = 'billed annually';
                price.classList.add('animate-pulse');
                setTimeout(() => price.classList.remove('animate-pulse'), 500);
            } else {
                price.innerText = '$12';
                cycle.innerText = 'billed monthly';
                price.classList.add('animate-pulse');
                setTimeout(() => price.classList.remove('animate-pulse'), 500);
            }
        }
    
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
      

<div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 h-1"></div>
<div className="w-full bg-white/50 border-b border-slate-100 py-2 px-6 flex justify-between items-center text-slate-500">
<div className="flex items-center gap-4 text-xs font-medium">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:smartphone-2-linear" strokeWidth="1.5"></iconify-icon> Get the Mobile App</span>
</div>
<div className="flex gap-4 text-xs font-medium">
<a className="hover:text-indigo-600 transition-colors" href="#">Help Center</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Contact</a>
</div>
</div>

<nav className="sticky top-0 z-50 glass border-b border-slate-200/50 px-6 h-14 flex justify-between items-center">
<div className="flex items-center gap-12">
<a className="font-semibold text-lg tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600" href="#">
                CARENEXXUS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-indigo-600 transition-colors" href="#library">Library</a>
<a className="hover:text-indigo-600 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-indigo-600 transition-colors" href="#faq">FAQ</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-semibold text-slate-600 px-4 py-2 hover:text-indigo-600 transition-colors" href="#">Sign in</a>
<a className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-indigo-200 transition-all" href="#">
                Sign Up
            </a>
</div>
</nav>

<header className="mesh-gradient pt-16 md:pt-28 pb-20 overflow-hidden relative">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">New: Discharge Care Modules</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05] mb-6">
                        Stop <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">guessing</span> your way through caregiving.
                    </h1>
<p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed font-light">
                        Practical caregiver education in 7 languages. Learn exactly what to do at home after discharge with step-by-step video guidance.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="bg-slate-900 text-white text-base font-semibold px-10 py-4 rounded-xl text-center shadow-xl hover:bg-slate-800 transition-all" href="#">
                            Get Started Free
                        </a>
<a className="flex items-center justify-center gap-2 bg-white text-slate-600 border border-slate-200 text-base font-semibold px-10 py-4 rounded-xl text-center hover:bg-slate-50 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon> Watch Preview
                        </a>
</div>
<div className="flex items-center gap-6">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600">MK</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-pink-100 flex items-center justify-center text-[10px] font-bold text-pink-600">SL</div>
</div>
<p className="text-xs text-slate-400 font-medium">Trusted by 10,000+ family caregivers</p>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full"></div>
<div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-slate-100 overflow-hidden">
<div className="aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden relative group">
<img alt="Caregiving Tutorial" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-center justify-center">
<div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-all">
<iconify-icon className="text-white text-2xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
<div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
</div>
<div className="mt-3 flex justify-between items-center text-[10px] text-white font-medium uppercase tracking-widest">
<span>Lesson 4: Vital Signs</span>
<span>08:45 / 12:00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="bg-white py-12 border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-wrap justify-center gap-3">
<a className="group flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all" href="#library">
<iconify-icon className="group-hover:text-white text-indigo-500" icon="solar:hospital-linear"></iconify-icon> Discharge Care
                </a>
<a className="group flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all" href="#library">
<iconify-icon className="group-hover:text-white text-purple-500" icon="solar:pills-linear"></iconify-icon> Medication Sync
                </a>
<a className="group flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all" href="#library">
<iconify-icon className="group-hover:text-white text-pink-500" icon="solar:shield-warning-linear"></iconify-icon> Red Flags
                </a>
<a className="group flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 hover:text-white transition-all" href="#library">
<iconify-icon className="group-hover:text-white text-indigo-500" icon="solar:user-linear"></iconify-icon> Hygiene Care
                </a>
</div>
</div>
</div>

<section className="py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Built for the complexity of home care.</h2>
<p className="text-sm text-slate-500 leading-relaxed">We break down complex clinical instructions into actionable steps that any family member can follow, regardless of language or experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-indigo-100">
<iconify-icon className="text-2xl" icon="solar:globus-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-3">Multilingual Content</h3>
<p className="text-xs text-slate-500 leading-relaxed">Available in 7 languages including Spanish, Mandarin, Cantonese, and Arabic, adapted for cultural context.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-purple-100">
<iconify-icon className="text-2xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-3">Step-by-Step Video</h3>
<p className="text-xs text-slate-500 leading-relaxed">Short 2-3 minute lessons focused on single tasks like wound care, lifting, or medication management.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all">
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-pink-100">
<iconify-icon className="text-2xl" icon="solar:notes-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-3">Actionable Guides</h3>
<p className="text-xs text-slate-500 leading-relaxed">Downloadable PDF checklists and tracking logs to keep the whole care team on the same page.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="library">
<div className="max-w-6xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Explore our Modules</h2>
<p className="text-sm text-slate-500">Curated by clinical experts and professional caregivers.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700" href="#">
                    View full library <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform"></div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Discharge Essentials</h3>
<p className="text-xs text-slate-500 mb-8">Master the first 48 hours back home.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-xs font-medium text-slate-600">
<span className="w-1 h-1 rounded-full bg-indigo-400"></span> Coordinating Follow-up Visits
                        </li>
<li className="flex items-center gap-3 text-xs font-medium text-slate-600">
<span className="w-1 h-1 rounded-full bg-indigo-400"></span> Understanding New Prescriptions
                        </li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">12 Lessons</span>
<div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform"></div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Daily Care Operations</h3>
<p className="text-xs text-slate-500 mb-8">From hygiene to home safety.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-xs font-medium text-slate-600">
<span className="w-1 h-1 rounded-full bg-purple-400"></span> Safe Transfer Techniques
                        </li>
<li className="flex items-center gap-3 text-xs font-medium text-slate-600">
<span className="w-1 h-1 rounded-full bg-purple-400"></span> Meal Preparation &amp; Nutrition
                        </li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">18 Lessons</span>
<div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-purple-600">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="pricing">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
<div className="absolute top-[-20%] left-[10%] w-[40%] h-[80%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-20%] right-[10%] w-[40%] h-[80%] bg-purple-600/20 blur-[120px] rounded-full"></div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Simple, transparent pricing</h2>
<p className="text-sm text-slate-400 mb-12">One plan for full access across all languages and devices.</p>
<div className="flex items-center justify-center gap-4 mb-10">
<span className="text-xs font-semibold text-slate-400">Monthly</span>
<label className="toggle-switch">
<input checked="" onchange="updatePricing(this)" type="checkbox"/>
<span className="slider"></span>
</label>
<span className="text-xs font-semibold text-white">Annual <span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-[10px] ml-1">Save 30%</span></span>
</div>
<div className="gradient-border rounded-[32px] overflow-hidden">
<div className="bg-slate-900 p-10 text-left">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
<div>
<h3 className="text-xl font-semibold text-white">Caregiver Pro</h3>
<p className="text-xs text-slate-400 mt-1">Full access for you and one secondary caregiver.</p>
</div>
<div className="text-left md:text-right">
<div className="text-5xl font-semibold tracking-tighter text-white" id="price-tag">$8</div>
<div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mt-1" id="billing-cycle">billed annually</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
<div className="flex items-center gap-3 text-xs font-medium text-slate-300">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> 50+ High-Definition Lessons
                        </div>
<div className="flex items-center gap-3 text-xs font-medium text-slate-300">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> All 7 Languages Included
                        </div>
<div className="flex items-center gap-3 text-xs font-medium text-slate-300">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> PDF Downloads &amp; Logs
                        </div>
<div className="flex items-center gap-3 text-xs font-medium text-slate-300">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> 24/7 Mobile App Access
                        </div>
</div>
<a className="block w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-4 rounded-2xl font-semibold shadow-xl shadow-indigo-500/20 hover:scale-[1.02] transition-all" href="#">
                        Get Started Now
                    </a>
</div>
</div>
<p className="mt-8 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Cancel anytime • No hidden fees</p>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-center mb-16 text-slate-900">FAQ</h2>
<div className="space-y-4">
<details className="group border border-slate-100 rounded-2xl p-4 bg-slate-50/50 hover:bg-white transition-all">
<summary className="flex justify-between items-center cursor-pointer text-sm font-medium list-none text-slate-700">
                        Who creates the lesson content?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4">All content is developed by a clinical team including registered nurses, physical therapists, and social workers, then reviewed by experienced family caregivers for practicality.</p>
</details>
<details className="group border border-slate-100 rounded-2xl p-4 bg-slate-50/50 hover:bg-white transition-all">
<summary className="flex justify-between items-center cursor-pointer text-sm font-medium list-none text-slate-700">
                        Can I access it on my phone?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4">Yes, CareNexxus is fully optimized for mobile devices and we have dedicated apps for both iOS and Android available to all members.</p>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-24 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="font-bold text-xl tracking-tighter text-indigo-600" href="#">CARENEXXUS</a>
<p className="text-xs text-slate-400 mt-6 leading-relaxed max-w-sm font-light">
                        We believe that confidence in caregiving leads to better outcomes for everyone. Our mission is to bridge the gap between clinical instruction and home reality.
                    </p>
</div>
<div>
<h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-6">Product</h4>
<ul className="space-y-4 text-xs font-medium text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Course Library</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">For Providers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-6">Connect</h4>
<ul className="space-y-4 text-xs font-medium text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact Support</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">© 2025 CareNexxus Academy. All rights reserved.</p>
<div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
