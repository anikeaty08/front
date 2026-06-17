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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#fcfbf9]/80 border-b border-[#e8e4dc]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="serif text-2xl tracking-tight text-[#2d3b2f] z-50 relative" href="#">SANTI.</a>
<div className="hidden md:flex items-center gap-6 text-sm tracking-wide text-[#6c7c70]">
<a className="hover:text-[#9d8189] transition-colors duration-300" href="#">Rituals</a>
<a className="hover:text-[#9d8189] transition-colors duration-300" href="#">Space</a>
<a className="hover:text-[#9d8189] transition-colors duration-300" href="#">Membership</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#2d3b2f] hover:text-[#9d8189] transition-colors">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                    Book Now
                </button>
<button className="md:hidden text-[#2d3b2f]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#f4ecec] to-transparent opacity-40 -z-10 blur-3xl"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-[#9d8189]"></span>
<span className="text-xs uppercase tracking-widest text-[#9d8189]">Bali Inspired Wellness</span>
</div>
<h1 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight text-[#2d3b2f] mb-8">
                    Breathe in <br/>
<span className="italic text-[#9d8189]">the stillness</span> <br/>
                    of nature.
                </h1>
<p className="text-[#6c7c70] text-lg font-light leading-relaxed max-w-md mb-10">
                    An organic sanctuary designed to reconnect your soul with the earth. Experience the healing power of Balinese florals and ancient touch.
                </p>
<div className="flex items-center gap-6">
<button className="group relative px-8 py-3 bg-[#2d3b2f] text-[#fcfbf9] rounded-full overflow-hidden transition-all hover:bg-[#3d4f40]">
<span className="relative z-10 flex items-center gap-2 text-sm tracking-wide">
                            View Treatments
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="flex items-center gap-3 group">
<div className="w-10 h-10 rounded-full border border-[#dcd3d3] flex items-center justify-center text-[#2d3b2f] group-hover:border-[#9d8189] group-hover:text-[#9d8189] transition-colors">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-[#6c7c70] group-hover:text-[#9d8189] transition-colors">Our Story</span>
</button>
</div>
</div>
<div className="order-1 md:order-2 relative">

<div className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-[#9d8189]/10">
<img alt="Woman in spa" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 flex items-center justify-between">
<div>
<p className="serif text-lg text-[#2d3b2f]">Rose Petal Bath</p>
<p className="text-xs text-[#6c7c70]">60 min · Relaxation</p>
</div>
<div className="w-8 h-8 rounded-full bg-[#f4ecec] flex items-center justify-center text-[#9d8189]">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-20 pointer-events-none">
<iconify-icon className="text-[#9d8189]" height="100%" icon="solar:flower-linear" width="100%"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f4ecec]/30 border-y border-[#e8e4dc]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="serif text-4xl md:text-5xl text-[#2d3b2f] mb-4">Holistic Rituals</h2>
<p className="text-[#6c7c70] font-light">Curated experiences for body, mind, and spirit.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-[#fcfbf9] border border-[#e8e4dc] hover:border-[#dcd3d3] hover:shadow-lg hover:shadow-[#9d8189]/5 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#f4ecec] flex items-center justify-center text-[#9d8189] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="serif text-2xl text-[#2d3b2f] mb-3">Hydrotherapy</h3>
<p className="text-sm text-[#6c7c70] leading-relaxed mb-6 font-light">
                        Immersion in floral waters infused with essential oils sourced directly from Ubud.
                    </p>
<a className="inline-flex items-center text-xs uppercase tracking-widest text-[#2d3b2f] group-hover:text-[#9d8189] transition-colors" href="#">
                        Discover
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-[#fcfbf9] border border-[#e8e4dc] hover:border-[#dcd3d3] hover:shadow-lg hover:shadow-[#9d8189]/5 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#f4ecec] flex items-center justify-center text-[#9d8189] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="serif text-2xl text-[#2d3b2f] mb-3">Organic Facials</h3>
<p className="text-sm text-[#6c7c70] leading-relaxed mb-6 font-light">
                        Gentle exfoliation using crushed pearls and rose quartz rollers to revive your glow.
                    </p>
<a className="inline-flex items-center text-xs uppercase tracking-widest text-[#2d3b2f] group-hover:text-[#9d8189] transition-colors" href="#">
                        Discover
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-[#fcfbf9] border border-[#e8e4dc] hover:border-[#dcd3d3] hover:shadow-lg hover:shadow-[#9d8189]/5 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#f4ecec] flex items-center justify-center text-[#9d8189] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<h3 className="serif text-2xl text-[#2d3b2f] mb-3">Energy Healing</h3>
<p className="text-sm text-[#6c7c70] leading-relaxed mb-6 font-light">
                        Realign your chakras with traditional Balinese massage and sound bowl therapy.
                    </p>
<a className="inline-flex items-center text-xs uppercase tracking-widest text-[#2d3b2f] group-hover:text-[#9d8189] transition-colors" href="#">
                        Discover
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative h-[500px] md:h-[600px] flex items-center justify-center">
<img alt="Spa atmosphere" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#2d3b2f]/30 mix-blend-multiply"></div>
<div className="relative z-10 text-center text-[#fcfbf9] max-w-2xl px-6">
<iconify-icon className="mb-6 opacity-80" icon="solar:lotus-linear" width="48"></iconify-icon>
<h2 className="serif text-5xl md:text-7xl mb-6">Return to Yourself</h2>
<p className="text-lg md:text-xl font-light opacity-90 leading-relaxed">
                    "In the heart of the garden, amidst the scent of wild roses, time stands still. Here, beauty is not made, it is revealed."
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="serif text-4xl text-[#2d3b2f]">Begin Your Journey</h2>
<p className="text-[#6c7c70] mt-2 font-light">Reserve your moment of tranquility.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#6c7c70]">First Name</label>
<input className="w-full bg-[#fcfbf9] border border-[#e8e4dc] p-4 rounded-xl text-[#2d3b2f] focus:outline-none focus:border-[#9d8189] focus:ring-1 focus:ring-[#9d8189] transition-all font-light placeholder:text-[#d1d5db]" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#6c7c70]">Last Name</label>
<input className="w-full bg-[#fcfbf9] border border-[#e8e4dc] p-4 rounded-xl text-[#2d3b2f] focus:outline-none focus:border-[#9d8189] focus:ring-1 focus:ring-[#9d8189] transition-all font-light placeholder:text-[#d1d5db]" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#6c7c70]">Service Interest</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl border border-[#e8e4dc] bg-[#fcfbf9] peer-checked:border-[#9d8189] peer-checked:bg-[#f4ecec] transition-all flex items-center gap-3">
<iconify-icon className="text-[#9d8189]" icon="solar:spa-candle-linear"></iconify-icon>
<span className="text-sm text-[#2d3b2f]">Massage</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl border border-[#e8e4dc] bg-[#fcfbf9] peer-checked:border-[#9d8189] peer-checked:bg-[#f4ecec] transition-all flex items-center gap-3">
<iconify-icon className="text-[#9d8189]" icon="solar:face-scan-circle-linear"></iconify-icon>
<span className="text-sm text-[#2d3b2f]">Facial</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl border border-[#e8e4dc] bg-[#fcfbf9] peer-checked:border-[#9d8189] peer-checked:bg-[#f4ecec] transition-all flex items-center gap-3">
<iconify-icon className="text-[#9d8189]" icon="solar:bath-linear"></iconify-icon>
<span className="text-sm text-[#2d3b2f]">Body Wrap</span>
</div>
</label>
</div>
</div>

<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-[#d1d5db] flex items-center justify-center transition-colors">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-sm text-[#6c7c70] font-light group-hover:text-[#2d3b2f] transition-colors">Send me seasonal offers and wellness tips.</span>
</label>
<div className="pt-4">
<button className="w-full py-4 bg-[#2d3b2f] text-[#fcfbf9] rounded-xl text-sm uppercase tracking-widest hover:bg-[#3d4f40] transition-colors shadow-lg shadow-[#2d3b2f]/10">
                        Request Availability
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-[#fcfbf9] border-t border-[#e8e4dc] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="serif text-3xl text-[#2d3b2f] block mb-6" href="#">SANTI.</a>
<p className="text-sm text-[#6c7c70] font-light leading-relaxed">
                        A sanctuary where the romance of nature meets the art of relaxation. 
                    </p>
</div>
<div className="col-span-1">
<h4 className="text-xs uppercase tracking-widest text-[#2d3b2f] mb-6">Explore</h4>
<ul className="space-y-3 text-sm font-light text-[#6c7c70]">
<li><a className="hover:text-[#9d8189] transition-colors" href="#">Treatments</a></li>
<li><a className="hover:text-[#9d8189] transition-colors" href="#">Retreats</a></li>
<li><a className="hover:text-[#9d8189] transition-colors" href="#">Products</a></li>
<li><a className="hover:text-[#9d8189] transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs uppercase tracking-widest text-[#2d3b2f] mb-6">Visit</h4>
<ul className="space-y-3 text-sm font-light text-[#6c7c70]">
<li>Jl. Hanoman, Ubud</li>
<li>Bali, Indonesia</li>
<li className="pt-2"><a className="hover:text-[#9d8189] transition-colors" href="#">hello@santispa.com</a></li>
<li>+62 361 900 800</li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs uppercase tracking-widest text-[#2d3b2f] mb-6">Social</h4>
<div className="flex gap-4 text-[#2d3b2f]">
<a className="hover:text-[#9d8189] hover:scale-110 transition-all" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-[#9d8189] hover:scale-110 transition-all" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-[#9d8189] hover:scale-110 transition-all" href="#">
<iconify-icon icon="solar:threads-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-[#e8e4dc] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#d1d5db] font-light">© 2023 Santi Spa. All rights reserved.</p>
<div className="flex gap-6 text-xs text-[#d1d5db] font-light">
<a className="hover:text-[#9d8189] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#9d8189] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
