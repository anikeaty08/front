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
      

<nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/80 backdrop-blur-md border-b border-[#e5e1da]">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex text-[#485839] gap-x-8 gap-y-8 items-center">
<a className="text-xl font-normal tracking-tighter scale-75" href="#">bamboolove</a>
<div className="hidden md:flex gap-6 uppercase text-xs font-normal tracking-widest gap-x-6 gap-y-6 items-center">
<a className="hover:text-stone-500 transition-colors" href="#">Home</a>
<a className="hover:text-stone-500 transition-colors" href="#">Shop</a>
<a className="hover:text-stone-500 transition-colors" href="#">about</a>
<a className="hover:text-stone-500 transition-colors" href="#">business</a>
</div>
</div>
<div className="flex items-center gap-5">
<button className="flex items-center text-sm font-normal hover:text-stone-500 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="relative flex items-center text-sm font-normal hover:text-stone-500 transition-colors">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1 -right-1 text-[8px] bg-[#1a1a1a] text-white w-3 h-3 flex items-center justify-center rounded-full">0</span>
</button>
<button className="md:hidden">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center pt-20">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="bamboolove Toilet Roll" className="brightness-[0.97] -translate-y-16 -translate-x-12 -translate-x-16 text-[#44444] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98015c44-80d4-4295-a1ef-8e12af60a6f1_3840w.png"/>
</div>
<div className="w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative -translate-x-3 translate-y-16">
<div className="max-w-2xl translate-y-12">
<h1 className="leading-tight md:text-3xl text-5xl font-normal tracking-tight mb-8"></h1>
<div className="flex -translate-x-8 -translate-y-6 -translate-y-16 text-[#ded8cb] translate-x-16 translate-y-8 scale-105 gap-x-4 gap-y-4 items-center">
<a className="uppercase hover:bg-stone-800 transition-all text-xs font-normal text-orange-50 tracking-widest bg-[#485839] border-[#ded8cb] pt-4 pr-8 pb-4 pl-8" href="#">Shop Collection</a>
<a className="uppercase hover:bg-[#1a1a1a] hover:text-white transition-all text-xs font-normal text-stone-950 tracking-widest bg-orange-50 border-[#ded8cb] border pt-4 pr-8 pb-4 pl-8" href="#">Shop Product</a>
</div>
</div>
</div>
<div className="absolute bottom-10 right-10 flex items-center gap-4">
<div className="w-12 h-[1px] bg-stone-400"></div>
<span className="uppercase text-xs font-normal text-stone-50 tracking-widest">Scroll to explore</span>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl text-[#485839] tracking-tight mb-4">Free Plastic For Single Use</h2>
<p className="leading-relaxed text-sm font-normal text-stone-500">Bamboolove™'s cartons are made out of FSC certified recycled and compostable material. Bamboolove is delivered to your doorstep, free of single-use plastic. None in our packaging, our product or even the tape used.


NEVER RUN OUT WITH OUR CONVENIENT SUBSCRIPTIONS
Save upto 20% off each order when you order our fuss-free susbcription service which you can change, pause, stop at anytime.

</p>
</div>
<a className="text-xs uppercase tracking-widest font-normal border-b border-[#1a1a1a] pb-1" href="#">Browse All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-stone-100">
<img alt="Seating" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a36247f0-ead8-4d43-a8ba-08675f085c5f_800w.png"/>
</div>
<h3 className="text-lg text-[#485839] tracking-tight text-center mb-1">Toilet Roll</h3>
</div>

<div className="group cursor-pointer md:mt-12">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-stone-100">
<img alt="Lighting" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f375e510-8850-472f-a088-45d1a8f9b203_800w.jpg"/>
</div>
<h3 className="text-lg text-[#485839] tracking-tight text-center mb-1">Antibacterial Wipes</h3>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-stone-100">
<img alt="Tables" className="group-hover:scale-105 transition-transform duration-700 -translate-x-16 -translate-y-1 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be99a459-c32d-49fc-be19-f2d7d48f9ec9_800w.jpg" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>
<h3 className="text-lg text-[#485839] tracking-tight text-center mb-1">Kitchen Wipes</h3>
</div>
</div>
</section>

<section className="bg-[#f2f0eb] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl text-[#485839] tracking-tight mb-4">Never Run Out With Our Convenient Subscriptions</h2>
<div className="flex justify-center gap-8 text-xs uppercase tracking-widest font-normal mt-8">
<button className="border-b border-[#1a1a1a] pb-1">All Products</button>
<button className="hover:text-[#1a1a1a] transition-colors text-stone-400">Bestsellers</button>
<button className="text-stone-400 hover:text-[#1a1a1a] transition-colors">Limited Edition</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
<img alt="Product" className="group-hover:opacity-90 transition-opacity w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98810e86-677d-4a69-a675-ce5e15edc47a_800w.jpg?w=800&amp;q=80"/>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] font-normal opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">Quick Add</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-sm font-normal tracking-tight">Facial Tissue</h4>
<p className="text-xs text-stone-500 mt-1">Sustainable Oak &amp; Linen</p>
</div>
<span className="text-sm font-normal">$1,240</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
<img alt="Product" className="group-hover:opacity-90 transition-opacity w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0faf90f-389a-4f7f-9eff-0539cb4ff0d3_800w.jpg"/>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] font-normal opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">Quick Add</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-sm font-normal tracking-tight">Grab Bag</h4>
<p className="text-xs text-stone-500 mt-1">Hand-carved Stone</p>
</div>
<span className="text-sm font-normal">$890</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
<img alt="Product" className="group-hover:opacity-90 transition-opacity w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ac5690a-19f0-4e4f-879a-750225d83faa_800w.jpg"/>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] font-normal opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">Quick Add</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-sm font-normal tracking-tight">Toilet Rolls</h4>
<p className="text-xs text-stone-500 mt-1">Cast Concrete</p>
</div>
<span className="text-sm font-normal">$650</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
<img alt="Product" className="group-hover:opacity-90 transition-opacity w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/880444e7-bb9e-490f-a931-bf058629da90_800w.jpg"/>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] font-normal opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">Quick Add</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-sm font-normal tracking-tight">Kitchen Roll</h4>
<p className="text-xs text-stone-500 mt-1">Bouclé Fabric</p>
</div>
<span className="text-sm font-normal">$3,800</span>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-center">
<div className="">
<span className="text-xs uppercase tracking-[0.3em] font-normal mb-6 block text-stone-500">Service</span>
<h2 className="text-4xl tracking-tight mb-8 leading-tight">Bespoke Interior <br/>Consultation</h2>
<p className="text-base font-normal text-stone-600 mb-8 leading-relaxed">
                Transform your home into a cohesive sanctuary with our expert design team. We offer tailored consultations to help you select the perfect pieces for your unique architectural context.
            </p>
<a className="inline-flex items-center gap-4 group" href="#">
<span className="text-xs uppercase tracking-widest font-normal">Book a session</span>
<iconify-icon className="text-lg group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="relative aspect-square">
<img alt="Interior Consultation" className="w-full h-full object-cover translate-x-4 -translate-y-16" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/893b8f3b-b45a-48ea-ad0a-fa25a134d352_1600w.jpg?w=800&amp;q=80"/>
<div className="-bottom-6 -left-6 hidden lg:block bg-white border-stone-100 border pt-8 pr-8 pb-8 pl-8 absolute shadow-sm">
<p className="leading-tight text-xl italic">Soft where it matters.
Strong where it counts.
</p>
</div>
</div>
</section>

<section className="border-y border-[#e5e1da] pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-2xl tracking-tight mb-4">Join the Inner Circle</h2>
<p className="text-sm text-stone-500 mb-10 font-normal">Subscribers receive first access to new collections and private studio sales.</p>
<form className="flex flex-col gap-6">
<div className="flex border-b border-[#1a1a1a] pb-2">
<input className="bg-transparent w-full text-sm outline-none font-normal placeholder:text-stone-300" placeholder="Your Email Address" type="email"/>
<button className="text-xs uppercase tracking-widest font-normal" type="submit">Subscribe</button>
</div>

<label className="flex items-center justify-center gap-3 cursor-pointer group">
<div className="relative">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 flex items-center justify-center transition-all">
<iconify-icon className="text-white text-[10px] hidden" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
</div>
<span className="text-xs text-stone-400 font-normal">I agree to the privacy policy and terms of service</span>
</label>
</form>
</div>
</section>

<footer className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-12 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-normal tracking-tighter mb-8 block" href="#">RIZZI</a>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-[#1a1a1a] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:share-circle-linear"></iconify-icon></a>
<a className="text-stone-400 hover:text-[#1a1a1a] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-stone-400 hover:text-[#1a1a1a] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest font-normal mb-6">Explore</h5>
<ul className="flex flex-col gap-4 text-xs text-stone-500 font-normal">
<li><a className="hover:text-[#1a1a1a] transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-[#1a1a1a] transition-colors" href="#">Craftsmanship</a></li>
<li><a className="hover:text-[#1a1a1a] transition-colors" href="#">Stockists</a></li>
<li><a className="hover:text-[#1a1a1a] transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest font-normal mb-6">Assistance</h5>
<ul className="flex flex-col gap-4 text-xs text-stone-500 font-normal">
<li><a className="hover:text-[#1a1a1a] transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-[#1a1a1a] transition-colors" href="#">Care Guide</a></li>
<li><a className="hover:text-[#1a1a1a] transition-colors" href="#">Trade Program</a></li>
<li><a className="hover:text-[#1a1a1a] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest font-normal mb-6">Showroom</h5>
<p className="text-xs text-stone-500 font-normal leading-relaxed">
                    248 Studio Street,<br/>
                    Stockholm, Sweden<br/><br/>
                    Tue—Sat: 10am — 6pm
                </p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-[#e5e1da] pt-12 gap-6">
<span className="text-[10px] uppercase tracking-widest text-stone-400">© 2024 Rizzi Home. All rights reserved.</span>
<div className="flex gap-8 text-[10px] uppercase tracking-widest text-stone-400">
<a className="hover:text-[#1a1a1a] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#1a1a1a] transition-colors" href="#">Terms of Use</a>
</div>
</div>
</footer>

    </>
  );
}
