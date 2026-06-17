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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="text-xl tracking-tight font-medium text-white uppercase flex items-center gap-2" href="#">
<img alt="Udi Logo" className="h-10 w-auto invert brightness-200" src="https://images.squarespace-cdn.com/content/v1/5ef8a4c4256fcf3774ed0650/1593353478813-6EEK59LVMOF6NEWJIYJ8/Udi+Final+Logo.png?format=1500w"/>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#experience">The Experience</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-white transition-colors" href="#location">Location &amp; Hours</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="tel:+972509675556">
<i className="w-3 h-3" data-lucide="phone"></i>
                    +972 50-967-5556
                </a>
<a className="px-5 py-2 text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors uppercase tracking-wide" href="#book">
                    Book Appointment
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Barber Shop Atmosphere" className="w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1503951914875-befbb7470d03?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">Open in Tel Aviv</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-6 leading-none">
                SHARP AND <br/>
<span className="text-neutral-500">SOPHISTICATED</span>
</h1>
<p className="text-xl md:text-2xl font-light text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Where style meets excellence, meets you. We don’t just sell haircuts; we sell relaxation and good looks.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-4 bg-white text-black font-semibold text-sm uppercase tracking-wide hover:bg-neutral-200 transition-all" href="#book">
                    Schedule An Appointment
                </a>
<a className="w-full md:w-auto px-8 py-4 border border-white/20 text-white font-medium text-sm uppercase tracking-wide hover:bg-white/5 transition-all" href="#services">
                    View Services
                </a>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
<div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-2">Our Services</h2>
<p className="text-neutral-500 font-light text-lg">Precision grooming for the modern individual.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-400 transition-colors" href="#book">
                    Book a service <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 border border-white/5 hover:border-white/20 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.04]">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mb-8 text-white group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="scissors"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Haircut</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                        Consultation followed by a precision cut tailored to your head shape and lifestyle. Finished with styling and advice.
                    </p>
</div>

<div className="group p-8 border border-white/5 hover:border-white/20 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.04]">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mb-8 text-white group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="user"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Beard Trim</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                        Sculpting and shaping of the beard. Includes hot towel treatment and line-up for a sharp finish.
                    </p>
</div>

<div className="group p-8 border border-white/5 hover:border-white/20 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.04]">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mb-8 text-white group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="palette"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Color &amp; Highlights</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                        Professional coloring services to cover greys or add dimension to your look with subtle highlights.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 relative overflow-hidden" id="experience">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-900 to-transparent opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div className="relative">

<img alt="Udi Barber Experience" className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-sm" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&amp;w=1588&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black border border-white/10 p-6 flex flex-col justify-center">
<span className="text-4xl font-medium text-white mb-1">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Satisfaction</span>
</div>
</div>
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
                    THE UDI <br/> EXPERIENCE
                </h2>
<div className="space-y-6 text-lg font-light text-neutral-400 leading-relaxed">
<p>
                        "Udi is the best barber I've ever had, with an irreplaceable charm and good mood. There is no one that loves what they do more than Udi."
                    </p>
<p>
                        He takes his time to listen to what you want, helps you relax, and connects with you, ensuring you leave with a stunning look.
                    </p>
</div>
<div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-2 gap-8">
<div>
<h4 className="text-white font-medium text-lg mb-1">Udi Eliahu</h4>
<p className="text-neutral-500 text-sm">Master Barber &amp; Founder</p>
</div>
<div className="flex items-center gap-4">
<a className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="https://www.instagram.com/udieliahu" target="_blank">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border border-white/10 bg-neutral-900/30">

<div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
<h2 className="text-3xl font-medium tracking-tight text-white mb-8">Visit Us</h2>
<div className="mb-12">
<p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">Address</p>
<p className="text-xl text-white font-light">22 Yirmeyahu St. <br/> Tel Aviv-Yafo, Israel</p>
<a className="inline-flex items-center gap-2 mt-4 text-sm text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5" href="https://www.google.com/maps?q=%D7%90%D7%95%D7%93%D7%99+%D7%94%D7%A1%D7%A4%D7%A8+Udi+Barber+Shop,+Ben+Yehuda+St+260,+Tel+Aviv-Yafo&amp;ftid=0x151d4b96919a898d:0x334e0bd1649d4f7c&amp;hl=en-US&amp;gl=us&amp;shorturl=1" target="_blank">
                            Get Directions <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
<div>
<p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">Contact</p>
<a className="text-xl text-white font-light block hover:text-neutral-300 transition-colors" href="tel:+972509675556">+972 50-967-5556</a>
<a className="text-sm text-neutral-400 mt-2 block hover:text-white transition-colors" href="https://www.instagram.com/udieliahu">@udieliahu</a>
</div>
</div>

<div className="lg:col-span-5 p-8 md:p-12 bg-white/[0.02]">
<h2 className="text-3xl font-medium tracking-tight text-white mb-8">Opening Hours</h2>
<ul className="space-y-4">
<li className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-neutral-400 font-light">Sunday</span>
<span className="text-white font-medium">10:00am - 8:30pm</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-neutral-400 font-light">Monday</span>
<span className="text-white font-medium">10:00am - 8:30pm</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-neutral-400 font-light">Tuesday</span>
<span className="text-white font-medium">10:00am - 8:30pm</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-neutral-400 font-light">Wednesday</span>
<span className="text-white font-medium">10:00am - 8:30pm</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-neutral-400 font-light">Thursday</span>
<span className="text-white font-medium">10:00am - 8:30pm</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-neutral-400 font-light">Friday</span>
<span className="text-white font-medium">9:00am - 2:00pm</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-transparent">
<span className="text-neutral-500 font-light">Saturday</span>
<span className="text-neutral-500 font-medium">Closed</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5 overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl font-medium tracking-tight text-white">Client Reviews</h2>
<p className="text-neutral-500 mt-2 font-light">What people are saying about their cut.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">

<div className="p-8 border border-white/10 bg-neutral-900/20">
<div className="flex gap-1 text-white mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-300 font-light mb-6 leading-relaxed">
                    "Udi is the best barber I've ever had... There is no one that loves what they do, more than Udi. He’ll take his time to listen... ending with a stunning look."
                </p>
<p className="text-white font-medium text-sm">— Sam Benzaquen</p>
</div>

<div className="p-8 border border-white/10 bg-neutral-900/20">
<div className="flex gap-1 text-white mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-300 font-light mb-6 leading-relaxed">
                    "No.1 barber in TLV. Got a recommendation from a friend 2 years ago about Udi... and now we meet every two weeks."
                </p>
<p className="text-white font-medium text-sm">— Roi Bar</p>
</div>

<div className="p-8 border border-white/10 bg-neutral-900/20">
<div className="flex gap-1 text-white mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-300 font-light mb-6 leading-relaxed">
                    "Great hands! Udi is very kind and humble. Always knows to cut my hair exactly the way I like and the way I ask. Highly recommended!!"
                </p>
<p className="text-white font-medium text-sm">— Sunny Agababa</p>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-block px-8 py-3 border border-white/20 text-white font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all" href="https://g.page/udibarber/review?gm" target="_blank">
                Leave a Review
            </a>
</div>
</section>

<section className="grid grid-cols-2 md:grid-cols-4 bg-black">
<div className="aspect-square relative group overflow-hidden border-r border-b border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.squarespace-cdn.com/content/v1/5ef8a4c4256fcf3774ed0650/1596557522789-49B89UF5QVHENRKFPIRY/image-asset.jpeg"/>
</div>
<div className="aspect-square relative group overflow-hidden border-r border-b border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.squarespace-cdn.com/content/v1/5ef8a4c4256fcf3774ed0650/1593372006466-OO955ZWOU3VNKIY1BQPT/Haircut.png"/>
</div>
<div className="aspect-square relative group overflow-hidden border-r border-b border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.squarespace-cdn.com/content/v1/5ef8a4c4256fcf3774ed0650/1593372136653-QMJV49ZMX8M3OJDO7ELR/Color.png"/>
</div>
<div className="aspect-square relative group overflow-hidden border-b border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.squarespace-cdn.com/content/v1/5ef8a4c4256fcf3774ed0650/1628238162082-XDR0UZONY2S0854UXICV/image-asset.jpeg"/>
</div>
</section>

<footer className="bg-black pt-24 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div>
<a className="text-xl tracking-tight font-medium uppercase text-white mb-6 block" href="#">Udi Barber Shop</a>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                    Elevating men's grooming in Tel Aviv with precision, style, and a personal touch.
                </p>
</div>

<div>
<h4 className="text-white font-medium text-sm uppercase tracking-wider mb-6">Explore</h4>
<ul className="space-y-3 text-sm font-light text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#experience">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#location">Locations</a></li>
<li><a className="hover:text-white transition-colors" href="#reviews">Reviews</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium text-sm uppercase tracking-wider mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-light text-neutral-400">
<li>22 Yirmeyahu St.</li>
<li>Tel Aviv-Yafo, Israel</li>
<li className="pt-2"><a className="hover:text-white transition-colors" href="tel:+972509675556">+972 50-967-5556</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium text-sm uppercase tracking-wider mb-6">Follow Us</h4>
<div className="flex space-x-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="https://www.instagram.com/udieliahu" target="_blank">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="https://www.google.com/maps?q=%D7%90%D7%95%D7%93%D7%99+%D7%94%D7%A1%D7%A4%D7%A8+Udi+Barber+Shop,+Ben+Yehuda+St+260,+Tel+Aviv-Yafo&amp;ftid=0x151d4b96919a898d:0x334e0bd1649d4f7c&amp;hl=en-US&amp;gl=us&amp;shorturl=1" target="_blank">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-light text-neutral-600">
<p>© 2024 Udi Barber Shop. All rights reserved.</p>
<p className="mt-2 md:mt-0">Designed with precision.</p>
</div>
</footer>


    </>
  );
}
