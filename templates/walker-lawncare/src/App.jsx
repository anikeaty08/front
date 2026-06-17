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


document.write(new Date().getFullYear())
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-semibold tracking-tighter text-slate-900">WALKER</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#gallery">Our Work</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">Reviews</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors" href="tel:+19316988747">
<iconify-icon className="text-lg" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    (931) 698-8747
                </a>
<a className="bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-sm" href="#contact">
                    Free Estimate
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Licensed &amp; Insured in Tennessee
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
                    Expert Lawn Care for a <br className="hidden md:block"/>
<span className="text-emerald-800">Pristine Property.</span>
</h1>
<p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Professional, reliable, and detail-oriented property maintenance serving Cornersville and surrounding counties. We take pride in making your lawn look its absolute best.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-base font-medium px-6 py-3 rounded-lg transition-colors shadow-sm" href="tel:+19316988747">
<iconify-icon className="text-xl" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Call (931) 698-8747
                    </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-base font-medium px-6 py-3 rounded-lg transition-colors shadow-sm" href="#contact">
                        Request Free Estimate
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50 py-12" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center md:items-start gap-4">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Locally Owned</h3>
<p className="mt-1 text-sm text-slate-500">Based in Cornersville, TN. We know the local climate and soil to keep your yard thriving year-round.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-4">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Licensed &amp; Insured</h3>
<p className="mt-1 text-sm text-slate-500">Fully credentialed for your peace of mind. Your property is safe and protected in our hands.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-4">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
<iconify-icon className="text-2xl" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Unmatched Quality</h3>
<p className="mt-1 text-sm text-slate-500">We take immense pride in our work. We don't just mow; we manicure and maintain.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Comprehensive Lawn Services</h2>
<p className="mt-4 text-base text-slate-500">Everything you need to maintain a beautiful, healthy outdoor space without lifting a finger.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-emerald-200 transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:scissors-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Precision Mowing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Routine, precise cutting using professional-grade equipment to ensure a healthy, even lawn week after week.</p>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-emerald-200 transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:route-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Edging &amp; Trimming</h3>
<p className="text-sm text-slate-500 leading-relaxed">Crisp, clean lines along driveways, sidewalks, and flower beds that instantly elevate your property's curb appeal.</p>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-emerald-200 transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Seasonal Cleanup</h3>
<p className="text-sm text-slate-500 leading-relaxed">Thorough spring and fall cleanups. Leaf removal, debris clearing, and preparing your landscape for the changing seasons.</p>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-emerald-200 transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:droplet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Mulch &amp; Pine Straw</h3>
<p className="text-sm text-slate-500 leading-relaxed">Delivery and professional installation of premium mulch or pine straw to protect plant roots and suppress weeds.</p>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-emerald-200 transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Hedge Trimming</h3>
<p className="text-sm text-slate-500 leading-relaxed">Shaping and pruning of shrubs and small trees to maintain plant health and create a manicured look.</p>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-emerald-200 transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Custom Projects</h3>
<p className="text-sm text-slate-500 leading-relaxed">Need something specific? We handle minor landscaping projects, planting, and specialized property maintenance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">See the Difference</h2>
<p className="mt-4 text-base text-slate-500">Real results from properties across Cornersville and neighboring counties. We let our work speak for itself.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-2">
<div className="relative w-full aspect-video sm:aspect-square sm:w-1/2 overflow-hidden rounded-xl">
<img alt="Overgrown lawn before service" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-700 shadow-sm">Before</div>
</div>
<div className="relative w-full aspect-video sm:aspect-square sm:w-1/2 overflow-hidden rounded-xl">
<img alt="Manicured lawn after service" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-emerald-800/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white shadow-sm">After</div>
</div>
</div>

<div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-2">
<div className="relative w-full aspect-video sm:aspect-square sm:w-1/2 overflow-hidden rounded-xl">
<img alt="Messy yard before cleanup" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-700 shadow-sm">Before</div>
</div>
<div className="relative w-full aspect-video sm:aspect-square sm:w-1/2 overflow-hidden rounded-xl">
<img alt="Cleaned yard after service" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3 bg-emerald-800/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white shadow-sm">After</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Trusted by Local Homeowners</h2>
<p className="mt-4 text-base text-slate-500">Don't just take our word for it. Here is what our neighbors have to say about Walker Lawn Care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<div className="flex gap-1 text-emerald-600 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Walker Lawn Care completely transformed my yard. They show up exactly when they say they will, and the attention to detail on the edging is incredible. Best service in Cornersville, hands down."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">MS</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Michael S.</h4>
<p className="text-xs text-slate-500">Cornersville, TN</p>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<div className="flex gap-1 text-emerald-600 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Finding a reliable lawn care company was tough until I called them. The fact that they are licensed and insured gave me peace of mind, but their quality of work is why I'm a loyal customer."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">JT</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Jennifer T.</h4>
<p className="text-xs text-slate-500">Marshall County</p>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<div className="flex gap-1 text-emerald-600 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"They did a massive fall cleanup for my property. Removed all the leaves, trimmed the hedges perfectly, and prepped the beds. Very professional crew and highly communicative."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-sm">DH</div>
<div>
<h4 className="text-sm font-medium text-slate-900">David H.</h4>
<p className="text-xs text-slate-500">Giles County</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-emerald-900/40 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready for a Better Lawn?</h2>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Contact Walker Lawn Care today for a free, no-obligation estimate. We are licensed, insured, and ready to get to work.</p>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
<p className="text-sm font-medium text-emerald-400 mb-2 uppercase tracking-wider">Call or Text Us Directly</p>
<a className="inline-block text-4xl md:text-6xl font-semibold tracking-tighter text-white hover:text-emerald-300 transition-colors mb-8" href="tel:+19316988747">
                        (931) 698-8747
                    </a>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-base font-medium px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2" href="tel:+19316988747">
<iconify-icon className="text-xl" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Call Now
                        </a>
<a className="bg-white/10 hover:bg-white/20 text-white text-base font-medium px-8 py-4 rounded-lg transition-colors border border-white/10 flex items-center justify-center gap-2" href="mailto:info@walkerlawncare.com">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Email Us
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-semibold tracking-tighter text-slate-900">WALKER</span>
</div>
<p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-6">
                        Premium, reliable, and detail-oriented lawn care and property maintenance services based in Cornersville, TN. Licensed and insured.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#services">Precision Mowing</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#services">Edging &amp; Trimming</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#services">Seasonal Cleanups</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#services">Mulch Installation</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Contact Info</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-emerald-700 transition-colors" href="tel:+19316988747">+1 931-698-8747</a>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Cornersville, TN <br/> Serving surrounding counties</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<p>©  Walker Lawn Care. All rights reserved.</p>
<div className="flex items-center gap-4">
<span>Licensed</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>Insured</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
