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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="flex items-center gap-2 text-xl font-semibold tracking-tight" href="#">Great Cafe.</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#coffee">Our Coffee</a>
<a className="hover:text-slate-900 transition-colors" href="#food">Food</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="md:hidden text-2xl text-slate-600 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-30" loop="" muted="" playsinline="" poster="https://static.wixstatic.com/media/75eaea_1b223d7668e646c19b3a6bc8ba03d804f000.jpg/v1/fill/w_980,h_751,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/75eaea_1b223d7668e646c19b3a6bc8ba03d804f000.jpg">
<source src="https://video.wixstatic.com/video/75eaea_1b223d7668e646c19b3a6bc8ba03d804/480p/mp4/file.mp4" type="video/mp4"/>
</video>
<div className="video-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6 tracking-wide border border-slate-200">
                Prahran, Melbourne
            </span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Expertly crafted.<br/>Locally loved.
            </h1>
<p className="md:text-lg leading-relaxed text-base font-light text-slate-500 max-w-2xl mr-auto mb-10 ml-auto">Welcome to our local coffee shop, where fresh brews meet a warm atmosphere. Whether you're catching up with friends or enjoying a quiet moment, we’re here to serve quality coffee and simple, satisfying bites every day.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-white bg-slate-900 w-full rounded-full pt-3 pr-8 pb-3 pl-8 shadow-sm" href="/home">
                    Order Online
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="sm:w-auto hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-slate-700 bg-white w-full border-slate-200 border rounded-full pt-3 pr-8 pb-3 pl-8 shadow-sm" href="/home" target="_blank">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                    View Menu
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="coffee">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[600px] border border-slate-200 shadow-sm bg-white">
<img alt="Pouring coffee" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/75eaea_57f3388310c64a448ac66a7f76306a0b~mv2.jpeg/v1/fill/w_980,h_677,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75eaea_57f3388310c64a448ac66a7f76306a0b~mv2.jpeg"/>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-3 mb-6 text-slate-500">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
<span className="text-xs font-medium tracking-widest uppercase">Our Coffee</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Serious about beans.</h2>
<div className="space-y-6 text-slate-600 text-sm leading-relaxed font-light">
<p className="">Our coffee beans are ethically sourced from trusted growers who prioritize fair wages, sustainable farming, and environmental care—ensuring every cup supports farming communities while delivering rich, high-quality flavor you can feel good about.</p>
<p className=""></p>
<p className=""></p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="food">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Food &amp; Ambience</h2>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                    Whether you're after a nourishing breakfast, a quick lunch, or a cheeky afternoon snack, our selection of sandwiches, croissants, bagels, and sweets will hit the spot.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative border border-slate-100 group">
<img alt="Pardon Storefront" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://static.wixstatic.com/media/75eaea_ebc2c35c39d14182b689081bc2785a88~mv2.jpeg/v1/fill/w_980,h_652,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75eaea_ebc2c35c39d14182b689081bc2785a88~mv2.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<p className="font-semibold tracking-tight text-xl mb-1">Warmth &amp; Friendliness</p>
<p className="text-xs text-white/80 font-light">A cozy environment to relax, read, and chat.</p>
</div>
</div>

<div className="rounded-3xl overflow-hidden relative border border-slate-100 group">
<img alt="Croissant" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://static.wixstatic.com/media/75eaea_d33cee6bc6a04881bfa5900599d63fc5~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75eaea_d33cee6bc6a04881bfa5900599d63fc5~mv2.jpeg"/>
</div>

<div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-center">
<iconify-icon className="text-3xl text-slate-700 mb-4" icon="solar:pie-chart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Fresh Daily</h3>
<p className="text-xs text-slate-500 leading-relaxed font-light mb-6">
                        Enjoy seating indoors or out in the sunshine, or grab your lunch on the run with our online ordering system.
                    </p>
<a className="inline-flex items-center gap-1 hover:text-slate-600 transition-colors text-sm font-medium text-slate-900 w-max" href="/home">
                        Order Pickup <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="rounded-3xl overflow-hidden relative border border-slate-100 group">
<img alt="Bagel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://static.wixstatic.com/media/75eaea_d33025d78b534ecf9bf5dfc7fecda0b0~mv2.jpeg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75eaea_d33025d78b534ecf9bf5dfc7fecda0b0~mv2.jpeg"/>
</div>

<div className="md:col-span-2 rounded-3xl overflow-hidden relative border border-slate-100 group">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://static.wixstatic.com/media/75eaea_3f73ba453877472fb96fb8043c789ed5~mv2.jpeg/v1/fill/w_980,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75eaea_3f73ba453877472fb96fb8043c789ed5~mv2.jpeg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-y border-slate-200" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Community Love</h2>
<p className="text-sm text-slate-500 font-light">Don't just take our word for it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-slate-900 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                            "Best coffee in Prahran, hands down. The signature BLK blend is incredibly smooth. Friendly staff and great atmosphere for a morning catchup."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">SM</div>
<span className="text-xs font-medium text-slate-900">Sarah M.</span>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex gap-1 text-slate-900 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                            "Their bagels are a lifesaver on a busy morning. Always fresh, and the Disciple single origin hits the spot perfectly every time. Highly recommend."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">JT</div>
<span className="text-xs font-medium text-slate-900">James T.</span>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-slate-900 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                            "A hidden gem! The attention to detail in their pours and the cozy vibe make it my go-to spot. The staff always greet you with a smile."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">ER</div>
<span className="text-xs font-medium text-slate-900">Emily R.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-6 pb-24 pl-6" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Visit Us</h2>
<div className="space-y-6 text-sm font-light text-slate-600 mb-10">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-slate-900 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<div className="">
<p className="font-medium text-slate-900 mb-1">Location</p>
<p className="">Prahran VIC 3181</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-slate-900 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<div className="">
<p className="font-medium text-slate-900 mb-1">Contact</p>
<a className="hover:text-slate-900 transition-colors" href="tel:0431611518"></a><br className=""/>
<a className="hover:text-slate-900 transition-colors" href="mailto:info@pardoncoffee.com.au">Email@coffee.com</a>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<iconify-icon className="text-xl text-slate-900 shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<div className="">
<p className="font-medium text-slate-900 mb-1">Hours</p>
<p className="">Mon - Fri: 7:00am - 4:00pm<br/>Sat - Sun: 7:30am - 5:00pm</p>
</div>
</div>
</div>
<div className="flex gap-4">
<a aria-label="Instagram" className="flex items-center justify-center hover:bg-slate-50 hover:text-slate-900 transition-colors text-slate-600 w-10 h-10 border-slate-200 border rounded-full" href="/home" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a aria-label="Facebook" className="flex items-center justify-center hover:bg-slate-50 hover:text-slate-900 transition-colors text-slate-600 w-10 h-10 border-slate-200 border rounded-full" href="/home" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" height="18" icon="solar:users-group-rounded-linear" style={{color: 'rgb(15, 23, 42)'}} width="18"></iconify-icon>
</a>
</div>
</div>
<div className="w-full h-[400px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src='width="100%"' style={{border: '0'}}>
</iframe>
</div>
</div>
</section>

<footer className="py-8 px-6 bg-white border-t border-slate-100 text-center flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-xs text-slate-500 font-light">
<p className="">© 2024 Pardon Coffee. All rights reserved.</p>
<p className="mt-2 md:mt-0">
            Website Design Melbourne by <a className="font-medium text-slate-900 hover:underline" href="https://www.emddigital.com.au/" rel="noopener noreferrer" target="_blank">emd:digital</a>
</p>
</footer>

    </>
  );
}
