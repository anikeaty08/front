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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Smooth reveal animation based on IntersectionObserver
    document.addEventListener("DOMContentLoaded", () => {
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-40 px-6 py-4 md:px-12 flex justify-between items-center backdrop-blur-md border-b border-slate-200/60 bg-white/80 transition-all">
<a className="text-xl font-semibold text-teal-700 tracking-tight flex items-center gap-2 group" href="#">
<iconify-icon className="text-teal-600 transition-colors" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
      DURO
    </a>
<div className="hidden md:flex gap-8 text-sm tracking-wide text-slate-600 font-medium">
<a className="hover:text-teal-700 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-teal-700 transition-colors" href="#why-duro">Why Duro</a>
<a className="hover:text-teal-700 transition-colors" href="#partners">For Partners</a>
<a className="hover:text-teal-700 transition-colors" href="#about">About</a>
</div>
<a className="hidden md:inline-flex items-center justify-center text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-5 py-2.5 rounded-full transition-all shadow-sm" href="#download">
      Download App
    </a>
</nav>

<header className="pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] max-w-4xl bg-teal-100/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="z-10 flex flex-col items-center max-w-4xl relative mt-8">
<h1 className="reveal md:text-6xl text-4xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
        Get your medication <br className="hidden sm:block"/> without leaving home
      </h1>
<p className="reveal delay-100 md:text-lg text-base font-normal text-slate-600 max-w-2xl mb-10 leading-relaxed">
        Upload photos or receive e-prescriptions directly from your clinic. Find nearby pharmacies with live stock, and get it delivered anywhere in Accra.
      </p>

<div className="reveal delay-200 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center mb-12">
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all shadow-md" href="#download">
<iconify-icon icon="mdi:apple" width="28"></iconify-icon>
<div className="text-left flex flex-col">
<span className="text-[10px] leading-none text-slate-300 font-medium mb-0.5">Download on the</span>
<span className="text-sm font-semibold leading-none tracking-tight">App Store</span>
</div>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all shadow-md" href="#download">
<iconify-icon icon="mdi:google-play" width="26"></iconify-icon>
<div className="text-left flex flex-col">
<span className="text-[10px] leading-none text-slate-300 font-medium mb-0.5">Get it on</span>
<span className="text-sm font-semibold leading-none tracking-tight">Google Play</span>
</div>
</a>
</div>

<div className="reveal delay-300 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600 text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
          Licensed pharmacies
        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600 text-lg" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
          Fast e-bike delivery
        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600 text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
          Direct clinic integration
        </div>
</div>
</div>

<div className="reveal delay-300 mt-16 w-full max-w-4xl mx-auto rounded-[2.5rem] p-4 bg-white/40 border border-slate-200/50 backdrop-blur-sm shadow-xl">
<div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100 relative">
<img alt="Duro App Experience" className="w-full h-full object-cover mix-blend-multiply opacity-90 object-center" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 relative border-t border-slate-200/60 bg-white/50" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">How Duro works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal flex flex-col gap-4">
<div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-2">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Get your prescription</h3>
<p className="text-sm font-normal text-slate-600 leading-relaxed">
            Take a photo of your paper prescription, or receive an e-prescription securely sent directly from your clinic to the app.
          </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal delay-100 flex flex-col gap-4">
<div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-2">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Search &amp; compare</h3>
<p className="text-sm font-normal text-slate-600 leading-relaxed">
            Use our smart search to instantly see which nearby pharmacies have your medication in stock, along with pricing.
          </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal delay-200 flex flex-col gap-4">
<div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-2">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Fast, tracked delivery</h3>
<p className="text-sm font-normal text-slate-600 leading-relaxed">
            Pay seamlessly with mobile money and track your delivery rider in real-time as they weave through Accra traffic.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative" id="why-duro">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Why choose Duro?</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-8 rounded-2xl border border-slate-200/60 reveal">
<iconify-icon className="text-teal-600 mb-6" icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-slate-900 mb-3 tracking-tight">Trusted medication</h3>
<p className="text-sm text-slate-600 font-normal leading-relaxed">All prescriptions are verified and fulfilled by licensed partner pharmacies.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200/60 reveal delay-100">
<iconify-icon className="text-teal-600 mb-6" icon="solar:box-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-slate-900 mb-3 tracking-tight">No more stockouts</h3>
<p className="text-sm text-slate-600 font-normal leading-relaxed">Stop guessing. Our live search engine shows exactly who has your drug in stock.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200/60 reveal delay-200">
<iconify-icon className="text-teal-600 mb-6" icon="solar:clock-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-slate-900 mb-3 tracking-tight">Skip queues &amp; traffic</h3>
<p className="text-sm text-slate-600 font-normal leading-relaxed">Our e-bike riders navigate the city efficiently, saving you time and stress.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200/60 reveal delay-300">
<iconify-icon className="text-teal-600 mb-6" icon="solar:wallet-money-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-base font-medium text-slate-900 mb-3 tracking-tight">Built for Ghana</h3>
<p className="text-sm text-slate-600 font-normal leading-relaxed">Designed for local needs with seamless mobile money integration.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-teal-900 text-white overflow-hidden relative">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-10 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">Everything you need, <br/> in one app</h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Smart Search Engine</h3>
<p className="text-sm text-teal-200 font-normal">Search for specific medications by brand and instantly see which local pharmacies have them in stock.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">E-Prescription Integration</h3>
<p className="text-sm text-teal-200 font-normal">Receive digital prescriptions and test results directly within the app after your clinic visit.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Personalized Reminders</h3>
<p className="text-sm text-teal-200 font-normal">Get smart alerts when you're running low on chronic meds so you can order a refill with one tap.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] w-full reveal delay-200 flex justify-center md:justify-end">

<div className="absolute w-64 h-full bg-slate-100 rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden left-0 md:left-10 z-10 transform -rotate-6">
<img alt="App Screen 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute w-64 h-full bg-slate-100 rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden right-0 md:right-10 z-20 transform rotate-3 translate-y-8">
<img alt="App Screen 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-slate-200/60 bg-white/50">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Who is Duro for?</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 hover:shadow-lg transition-shadow duration-300 reveal flex flex-col justify-between group">
<div>
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-teal-600 transition-colors" icon="solar:case-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Working professionals</h3>
<p className="text-sm text-slate-600 font-normal leading-relaxed">Relieve the stress of managing your health amidst a hectic schedule. Order on the go and get it delivered to your office or home.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 hover:shadow-lg transition-shadow duration-300 reveal delay-100 flex flex-col justify-between group">
<div>
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-teal-600 transition-colors" icon="solar:wheelchair-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Elderly care</h3>
<p className="text-sm text-slate-600 font-normal leading-relaxed">A caring and considerate solution for those with limited mobility. Ensure your parents or loved ones never miss a dose.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 hover:shadow-lg transition-shadow duration-300 reveal delay-200 flex flex-col justify-between group">
<div>
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-teal-600 transition-colors" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Chronic conditions</h3>
<p className="text-sm text-slate-600 font-normal leading-relaxed">Manage your repeat prescriptions securely and comfortably. Receive smart refill alerts and easy home delivery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white" id="partners">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Empowering Healthcare Providers</h2>
<p className="text-base text-slate-600 font-normal max-w-2xl">Duro connects hospitals, clinics, and pharmacies directly to patients through a seamless digital ecosystem, optimizing operations and patient outcomes.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200/80 reveal">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-sm">
<iconify-icon className="text-teal-600" icon="solar:shop-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">For Pharmacies</h3>
<p className="text-sm text-slate-600 font-normal leading-relaxed mb-8">
            Turn your physical store into a digital powerhouse. Connect directly to local patients seeking your inventory.
          </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-teal-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
              Live inventory management &amp; restocking alerts.
            </li>
<li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-teal-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
              Advanced analytics on consumer purchasing behavior.
            </li>
<li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-teal-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
              Increase revenue without additional delivery logistics.
            </li>
</ul>
</div>

<div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200/80 reveal delay-100">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-sm">
<iconify-icon className="text-teal-600" icon="solar:hospital-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">For Hospitals &amp; Clinics</h3>
<p className="text-sm text-slate-600 font-normal leading-relaxed mb-8">
            Improve the post-consultation experience by ensuring your patients actually get the medication they need.
          </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-teal-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
              Send e-prescriptions directly to patient devices.
            </li>
<li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-teal-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
              Reduce post-care waiting times at your in-house pharmacy.
            </li>
<li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-teal-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
              Track patient adherence and care outcomes via analytics.
            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-5xl mx-auto bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 text-center reveal relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.3),transparent_50%)]"></div>
<div className="relative z-10 flex flex-col items-center">
<iconify-icon className="text-teal-400 mb-6" icon="solar:verified-check-linear" strokeWidth="1.5" width="48"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Healthcare you can trust</h2>
<p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-10">
          Your privacy and health are our top priorities. Duro operates solely with licensed and verified pharmacies. Our strict data systems ensure your medical information stays confidential.
        </p>
<div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl max-w-xl border border-white/10">
<div className="flex items-center gap-1 text-teal-400 mb-3 justify-center">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-200 italic">"Duro made it so easy to find Metformin in stock without driving around Accra. Delivered to my door the same day."</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-slate-200/60 bg-white" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12 reveal text-center">Frequently asked questions</h2>
<div className="space-y-4 reveal delay-100">

<div className="border border-slate-200 rounded-2xl px-6 bg-slate-50/50">
<details className="group py-5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm md:text-base outline-none">
              Do I need a prescription?
              <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 text-sm mt-4 mb-2 leading-relaxed font-normal">
              Yes, for certain medications. You can either upload a photo of your paper prescription or receive an e-prescription securely sent from your doctor to your Duro app.
            </p>
</details>
</div>

<div className="border border-slate-200 rounded-2xl px-6 bg-slate-50/50">
<details className="group py-5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm md:text-base outline-none">
              How does the smart search work?
              <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 text-sm mt-4 mb-2 leading-relaxed font-normal">
              Duro connects directly to the live inventory systems of our partner pharmacies. When you search for a medication, we immediately show you which nearby pharmacies have it in stock and the price.
            </p>
</details>
</div>

<div className="border border-slate-200 rounded-2xl px-6 bg-slate-50/50">
<details className="group py-5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm md:text-base outline-none">
              How long does delivery take?
              <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 text-sm mt-4 mb-2 leading-relaxed font-normal">
              Delivery times depend on your location in Accra, but our dedicated e-bike riders weave through traffic to process and deliver your medication rapidly. You can track your rider in real-time in the app.
            </p>
</details>
</div>

<div className="border border-slate-200 rounded-2xl px-6 bg-slate-50/50">
<details className="group py-5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 text-sm md:text-base outline-none">
              How do I pay?
              <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 text-sm mt-4 mb-2 leading-relaxed font-normal">
              You can securely pay via mobile money, debit/credit cards, or other available digital payment options natively integrated within the Duro checkout experience.
            </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center bg-teal-50 relative overflow-hidden flex flex-col items-center justify-center border-t border-teal-100" id="download">
<div className="relative z-10 max-w-3xl mx-auto reveal flex flex-col items-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-10 leading-tight">
        Experience seamless <br/> healthcare access
      </h2>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
<button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-md">
<iconify-icon icon="mdi:apple" width="30"></iconify-icon>
<div className="text-left flex flex-col">
<span className="text-xs leading-none text-slate-300 font-medium mb-0.5">Download on the</span>
<span className="text-base font-semibold leading-none tracking-tight">App Store</span>
</div>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-md">
<iconify-icon icon="mdi:google-play" width="28"></iconify-icon>
<div className="text-left flex flex-col">
<span className="text-xs leading-none text-slate-300 font-medium mb-0.5">Get it on</span>
<span className="text-base font-semibold leading-none tracking-tight">Google Play</span>
</div>
</button>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white py-16 px-6 md:px-12 mt-auto">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2 md:col-span-1 flex flex-col items-start gap-4">
<a className="text-xl font-semibold text-teal-700 tracking-tight flex items-center gap-2" href="#">
<iconify-icon className="text-teal-600" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
          DURO
        </a>
<p className="text-sm text-slate-500 font-normal leading-relaxed mt-2">
          Connecting patients, pharmacies, and healthcare providers through a single digital platform.
        </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-slate-900 mb-2">Platform</h4>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#why-duro">Why Duro</a>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#partners">For Providers</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-slate-900 mb-2">Support</h4>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#faq">FAQs</a>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Contact Us</a>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Partner Waitlist</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-slate-900 mb-2">Legal</h4>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-slate-500 font-normal text-center md:text-left">
        © 2025 Duro. All rights reserved.
      </div>
</div>
</footer>

<a className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform" href="#">
<iconify-icon icon="mdi:whatsapp" width="30"></iconify-icon>
</a>

<div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-slate-200/80 z-40">
<a className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3.5 rounded-xl font-medium shadow-md hover:bg-teal-700 active:bg-teal-800 transition-colors" href="#download">
      Download App
    </a>
</div>


    </>
  );
}
