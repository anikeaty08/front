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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-purple-600">
<iconify-icon className="text-xl" icon="solar:wrench-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900">Purple Plumbing</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="tel:+64274396474">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    027 439 6474
                </a>
<a className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-xs font-medium transition-colors" href="mailto:info@purpleplumbing.co.nz">
                    Email Us
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 border border-purple-200 text-purple-700 text-xs font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                    Wellington Region
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Plumbing, Gasfitting and Drainlaying.
                </h1>
<p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8">
                    Established in 2021, we have over 14 years experience in the trade, your number one Wellington Plumber, Gasfitter and Drainlayer.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="w-full sm:w-auto text-center bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#contact">
                        Book a Job
                    </a>
<a className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-sm font-medium text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors" href="#services">
                        Explore Services
                    </a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-lg shadow-slate-200/40">
<img alt="Hamish Reid - Purple Plumbing" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/6c15e7_0a99639f6230454bbb355cf0ad4e32b8~mv2.jpg/v1/fill/w_979,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hamish%20Reid_edited.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border border-slate-100 shadow-xl flex items-center gap-4 hidden md:flex">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Fully Licensed</p>
<p className="text-xs text-slate-500">Certified Professionals</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 shadow-sm">
<img alt="Purple Plumbing Van in Lower Hutt" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/6c15e7_321a26e8799242ff97becdb71aee669f~mv2.jpeg/v1/crop/x_147,y_220,w_1711,h_1189/fill/w_848,h_582,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_919098532108385.jpeg"/>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-6">Family owned and operated based in Lower Hutt.</h2>
<div className="space-y-4 text-sm text-slate-500 leading-relaxed">
<p>We service the greater Wellington region including the CBD and surrounding suburbs, Hutt Valley and Porirua.</p>
<p>We will happily travel further including the Kapiti Coast and Wairarapa by appointment.</p>
<p>Please don't hesitate to contact us to make a booking!</p>
</div>
<div className="grid grid-cols-2 gap-6 mt-10">
<div className="flex flex-col gap-2">
<iconify-icon className="text-2xl text-purple-600" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Wellington Wide</span>
<span className="text-xs text-slate-500">CBD, Hutt Valley &amp; Porirua</span>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-2xl text-purple-600" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Reliable Service</span>
<span className="text-xs text-slate-500">Over 14 years experience</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Services</h2>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive solutions for residential and commercial properties across the Wellington region.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Plumbing</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Whether you are looking at renovating your current home or building a new one, Purple Plumbing is your first choice. We have the knowledge and experience to make sure everything comes out in the right place, even the not so nice bits.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:flame-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Gasfitting</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Purple Plumbing is licensed to repair, service and replace gas fittings and appliances. This is not limited to residential properties but commercial ones too.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:waterdrop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Drainlaying</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        We construct, alter and repair drains of any size. We want your storm water and sewer pipes to discharge to the appropriate outfalls ensuring correct treatment and protection. This will sustain our streams, rivers and oceans for future generations.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Commercial Plumbing</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        We specialise in Commercial Plumbing, this can be at your office or industrial workspace.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Pricing</h2>
<p className="text-sm text-slate-400 leading-relaxed">
                    Purple Plumbing charges set hourly rates outlined below, we don't believe in hidden administration fees or travel costs. Our hourly rates exclude materials, all quotations and prices exclude GST.
                </p>
<p className="text-xs text-slate-500 mt-2">Quotations are valid for thirty days.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-2xl text-purple-400" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">Standard Business Hours</h3>
</div>
<p className="text-sm text-slate-400 mb-8 pb-8 border-b border-slate-700">For work scheduled in advance between 8am and 4pm</p>
<ul className="space-y-6">
<li className="flex items-center justify-between">
<span className="text-sm text-slate-300">First hour of work</span>
<span className="text-base font-medium">$165.00 <span className="text-xs text-slate-500">+ GST</span></span>
</li>
<li className="flex items-center justify-between">
<span className="text-sm text-slate-300">Any hour thereafter</span>
<span className="text-base font-medium">$100.00 <span className="text-xs text-slate-500">+ GST</span></span>
</li>
</ul>
</div>

<div className="bg-purple-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl translate-x-10 -translate-y-10 pointer-events-none"></div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-2xl text-purple-400" icon="solar:moon-stars-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">After Hours</h3>
</div>
<p className="text-sm text-slate-400 mb-8 pb-8 border-b border-slate-700/50">For work scheduled outside of our standard business hours</p>
<ul className="space-y-6">
<li className="flex items-center justify-between">
<span className="text-sm text-slate-300">First hour of work</span>
<span className="text-base font-medium">$200.00 <span className="text-xs text-slate-500">+ GST</span></span>
</li>
<li className="flex items-center justify-between">
<span className="text-sm text-slate-300">Any hour thereafter</span>
<span className="text-base font-medium">$150.00 <span className="text-xs text-slate-500">+ GST</span></span>
</li>
<li className="flex items-center justify-between pt-4 mt-2 border-t border-slate-700/50">
<span className="text-sm text-white font-medium">Emergency call outs</span>
<span className="text-base text-purple-400 font-semibold">$385.00 <span className="text-xs text-slate-500">+ GST</span></span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Contact Us</h2>
<div className="space-y-8 mb-12">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 mb-1">Call Hamish</p>
<a className="text-sm text-purple-600 hover:text-purple-700 transition-colors" href="tel:+64274396474">027 439 6474</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 mb-1">Email Hamish</p>
<a className="text-sm text-purple-600 hover:text-purple-700 transition-colors" href="mailto:info@purpleplumbing.co.nz">info@purpleplumbing.co.nz</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 mb-1">Our Hours</p>
<p className="text-sm text-slate-500">Monday - Friday</p>
<p className="text-sm text-slate-500">8am to 4.30pm</p>
<p className="text-xs text-slate-400 mt-2">After hours bookings available on request.</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
<img alt="Plumbing Work" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/6c15e7_8c3fb7a80bfe4ee6bada3ad11b8ccf4a~mv2.jpg/v1/fill/w_452,h_602,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20220206_125946.jpg"/>
</div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
<img alt="Plumbing Work Setup" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/6c15e7_8410237953ed4e9bac841f24f06e62b9~mv2.jpg/v1/fill/w_452,h_602,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20220206_140422.jpg"/>
</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">First Name</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-slate-400" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Last Name</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-slate-400" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Email Address</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-slate-400" placeholder="name@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Phone</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-slate-400" required="" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Address</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-slate-400" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">How can we help?</label>
<textarea className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-slate-400 resize-none" placeholder="Can you please send us a quotation to install a new tap in our kitchen?" required="" rows="4"></textarea>
</div>
<button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl mt-2 transition-colors text-sm" type="button">
                        Submit Request
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-purple-600">
<iconify-icon className="text-xl" icon="solar:wrench-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-semibold tracking-tight text-slate-900">Purple Plumbing</span>
</div>
<p className="text-sm text-slate-500">© 2023, Purple Plumbing. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-purple-600 hover:border-purple-200 transition-colors" href="https://www.facebook.com/PurplePlumbingNZ/" rel="noreferrer noopener" target="_blank">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> 
</a>
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-purple-600 hover:border-purple-200 transition-colors" href="https://www.instagram.com/purpleplumbingnz/" rel="noreferrer noopener" target="_blank">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon> 
</a>
</div>
</div>
</footer>

    </>
  );
}
