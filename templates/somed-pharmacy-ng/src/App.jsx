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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="flex text-white bg-teal-600 w-8 h-8 rounded-lg items-center justify-center">
<svg className="text-lg w-[17px] h-[17px]" data-icon-set="solar" data-solar="health-outline" height="17" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M17.25 7a.75.75 0 0 0-1.5 0v1.25H14.5a.75.75 0 0 0 0 1.5h1.25V11a.75.75 0 0 0 1.5 0V9.75h1.25a.75.75 0 0 0 0-1.5h-1.25z" fill="currentColor"></path><path className="" clip-rule="evenodd" d="M22.75 9.318c0-3.326-1.482-5.808-3.79-6.711c-2.135-.837-4.698-.211-6.96 1.906C9.738 2.396 7.175 1.77 5.04 2.607c-2.308.903-3.79 3.385-3.79 6.71c0 2.119 1.13 4.203 2.537 5.997c1.422 1.813 3.21 3.436 4.702 4.647l.134.11c1.2.975 2.068 1.68 3.377 1.68c1.31 0 2.176-.705 3.377-1.68l.134-.11c1.492-1.21 3.28-2.834 4.702-4.647c1.407-1.794 2.537-3.878 2.537-5.996M12.548 6.087c2.112-2.259 4.301-2.696 5.866-2.084c1.568.614 2.836 2.41 2.836 5.315c0 1.611-.88 3.364-2.218 5.07c-1.324 1.69-3.016 3.232-4.466 4.409c-1.393 1.13-1.843 1.453-2.566 1.453s-1.173-.323-2.566-1.454c-1.45-1.176-3.142-2.719-4.466-4.407c-1.339-1.707-2.218-3.46-2.218-5.071c0-2.905 1.268-4.7 2.836-5.315c1.565-.612 3.754-.175 5.866 2.084a.75.75 0 0 0 1.096 0" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">SOMED PHARMACY</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-teal-600 transition-colors" href="#about">About</a>
<a className="hover:text-teal-600 transition-colors" href="#services">Services</a>
<a className="hover:text-teal-600 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-teal-600 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium hover:text-teal-600 transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="tel:08027171245">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    0802 717 1245
                </a>
</div>
<button className="md:hidden text-slate-900">
<iconify-icon className="text-2xl" height="23" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5', color: 'rgb(15, 23, 42)'}} width="23"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-24 pb-20 px-6 overflow-hidden bg-white">
<div className="opacity-70 absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-[#99bdd6] via-[#43d0a1] to-white"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                Your Trusted Community <br className="hidden md:block"/> Pharmacy in Igando, Lagos
            </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                Quality medications, professional care, and reliable delivery — right when you need it. Fast &amp; reliable service you can depend on.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm shadow-teal-600/20" href="tel:08027171245">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Call Now
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm" href="#contact">
<iconify-icon className="text-lg" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Get Directions
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm" href="#contact">
<iconify-icon className="text-lg" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Request Delivery
                </a>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-slate-100 bg-slate-50" id="about">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-xs font-medium text-teal-600 tracking-wide uppercase mb-3">About Us</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Caring. Reliable. Professional.</h3>
<p className="leading-relaxed mb-4">SOMED PHARMACY AND STORE is a trusted neighborhood pharmacy dedicated to serving our community with integrity and professionalism.</p>
<p className="mb-8 leading-relaxed">
                    We believe that access to safe medication and reliable healthcare advice should be simple and convenient. That’s why we provide quality pharmaceutical products, attentive customer care, and dependable delivery services. Our mission is to improve the health and well-being of every customer who walks through our doors.
                </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
                        5-Star Rated Service
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
                        Friendly, Knowledgeable Staff
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
                        Fast Prescription Fulfillment
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
                        Convenient Delivery Available
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
                        Open Daily from 8:00 AM
                    </div>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#428f7d] to-sky-50">
<iconify-icon className="text-7xl text-teal-200" icon="solar:buildings-2-linear" style={{strokeWidth: '1'}}></iconify-icon>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Trusted by Our Community</div>
<div className="text-xs text-slate-500">Quality Medicines. Genuine Care.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="services">
<div className="max-w-6xl mx-auto text-center mb-16">
<h2 className="text-xs font-medium text-teal-600 tracking-wide uppercase mb-3">What We Do</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">Our Services</h3>
</div>
<div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-teal-100 hover:shadow-[0_8px_24px_rgb(0,0,0,0.04)] transition-all group">
<div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-teal-50 flex items-center justify-center text-slate-600 group-hover:text-teal-600 mb-6 transition-colors">
<iconify-icon className="text-2xl" icon="solar:pill-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Prescription Medications</h4>
<p className="text-sm text-slate-500 leading-relaxed">We carefully dispense prescribed medications with attention to accuracy and safety you can trust.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-teal-100 hover:shadow-[0_8px_24px_rgb(0,0,0,0.04)] transition-all group">
<div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-teal-50 flex items-center justify-center text-slate-600 group-hover:text-teal-600 mb-6 transition-colors">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Over-the-Counter</h4>
<p className="text-sm text-slate-500 leading-relaxed">From everyday pain relief to cold &amp; flu remedies, vitamins, and everyday essentials.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-teal-100 hover:shadow-[0_8px_24px_rgb(0,0,0,0.04)] transition-all group">
<div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-teal-50 flex items-center justify-center text-slate-600 group-hover:text-teal-600 mb-6 transition-colors">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Delivery Service</h4>
<p className="text-sm text-slate-500 leading-relaxed">Busy schedule? Call us to arrange convenient medication delivery within Igando and nearby areas.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-teal-100 hover:shadow-[0_8px_24px_rgb(0,0,0,0.04)] transition-all group">
<div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-teal-50 flex items-center justify-center text-slate-600 group-hover:text-teal-600 mb-6 transition-colors">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Health &amp; Wellness</h4>
<p className="text-sm text-slate-500 leading-relaxed">Supplements, personal care items, and essential healthcare guidance from our professional team.</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-100 bg-slate-50" id="reviews">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-xs font-medium text-teal-600 tracking-wide uppercase mb-3">Testimonials</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">What Our Community Says</h3>
<div className="flex items-center justify-center gap-1 text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-sm text-slate-600 ml-2 font-medium">5.0 on Google Maps</span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-slate-100">
<div className="flex text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 font-medium">“SOMED PHARMACY AND STORE provides excellent service.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">AA</div>
<div>
<div className="text-sm font-semibold text-slate-900">Adewale Adeoye</div>
<div className="text-xs text-slate-500">Local Customer</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-slate-100">
<div className="flex text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 font-medium">“Reliable and professional.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">S</div>
<div>
<div className="text-sm font-semibold text-slate-900">Saheed</div>
<div className="text-xs text-slate-500">Local Guide</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-t pt-24 pr-6 pb-24 pl-6" id="contact">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
<div className="">
<h2 className="text-xs font-medium text-teal-600 tracking-wide uppercase mb-3">Get in Touch</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Visit or Contact Us</h3>
<p className="text-slate-500 mb-10">Need medication or healthcare support today? Professional care you can depend on is just a message or visit away.</p>
<div className="space-y-6 mb-12">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 shrink-0 border border-slate-100">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 mb-1">Address</div>
<div className="text-sm text-slate-600">No 2 Sekoni Way, Igando,<br/>Lagos 300001</div>
<div className="text-xs text-slate-400 mt-1">Plus Code: H63R+4M Lagos</div>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 shrink-0 border border-slate-100">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 mb-1">Phone</div>
<a className="text-sm text-slate-600 hover:text-teal-600 transition-colors" href="tel:08027171245">0802 717 1245</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 shrink-0 border border-slate-100">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-slate-900 mb-1">Hours</div>
<div className="text-sm text-slate-600">Open Daily from 8:00 AM</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
<h4 className="text-base font-semibold text-slate-900 mb-4">Request Delivery or Contact</h4>
<form className="space-y-4">
<div className="">
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm text-slate-900 placeholder:text-slate-400 transition-shadow" placeholder="Name" type="text"/>
</div>
<div>
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm text-slate-900 placeholder:text-slate-400 transition-shadow" placeholder="Phone Number" type="tel"/>
</div>
<div className="">
<textarea className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm text-slate-900 placeholder:text-slate-400 transition-shadow resize-none" placeholder="Message or Medication List" rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors" type="button">
                            Submit Request
                        </button>
</form>
</div>
</div>

<div className="h-full min-h-[400px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative">

<div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-8 text-center">
<iconify-icon className="text-6xl text-slate-300 mb-4" icon="solar:map-bold-duotone"></iconify-icon>
<p className="text-sm mb-4">Google Maps Embedded Here</p>
<p className="text-xs text-slate-500 max-w-xs">No 2 Sekoni Way, Igando, Lagos 300001</p>
<a className="mt-4 text-xs font-medium text-teal-600 bg-teal-50 px-4 py-2 rounded-full border border-teal-100 hover:bg-teal-100 transition-colors" href="https://maps.google.com/?q=SOMED+PHARMACY+AND+STORE+Igando" target="_blank">Open in Google Maps</a>
</div>
</div>
</div>
</section><section className="py-24 px-6 bg-white border-t border-slate-100" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-xs font-medium text-teal-600 tracking-wide uppercase mb-3">Information</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h3>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<h4 className="text-base font-semibold text-slate-900 mb-2">What time do you open?</h4>
<p className="text-sm text-slate-600">We are open daily from 8:00 AM.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<h4 className="text-base font-semibold text-slate-900 mb-2">Do you offer delivery?</h4>
<p className="text-sm text-slate-600">Yes, delivery is available within Igando and nearby areas. Just give us a call to arrange it.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<h4 className="text-base font-semibold text-slate-900 mb-2">Can I call to confirm medication availability?</h4>
<p className="text-sm text-slate-600">Absolutely. Please call <a className="text-teal-600 hover:underline" href="tel:08027171245">0802 717 1245</a> and our staff will assist you right away.</p>
</div>
</div>
</div>
</section>


<footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">SOMED</span>
</div>
<div className="text-sm text-center md:text-left">
                Your Health Comes First. © 2023 SOMED Pharmacy and Store.
            </div>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-teal-600 transition-colors" href="https://wa.me/2348027171245">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 md:hidden z-50 flex gap-3 shadow-[0_-4px_24px_rgb(0,0,0,0.05)]">
<a className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-4 py-3 rounded-xl text-sm font-medium active:bg-slate-200 transition-colors" href="https://wa.me/2348027171245">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
            WhatsApp
        </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-3 rounded-xl text-sm font-medium active:bg-teal-700 transition-colors shadow-sm shadow-teal-600/20" href="tel:08027171245">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
            Call Now
        </a>
</div>

    </>
  );
}
