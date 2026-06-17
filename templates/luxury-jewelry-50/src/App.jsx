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
      

<header className="fixed top-0 w-full bg-[#FCFCFC]/90 backdrop-blur-md z-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<nav className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-gray-500">
<a className="transition-colors duration-300 hover:text-gray-900" href="#">Collections</a>
<a className="transition-colors duration-300 hover:text-gray-900" href="#">High Jewelry</a>
</nav>

<a className="text-xl md:text-2xl font-medium tracking-[0.2em] uppercase absolute left-1/2 -translate-x-1/2 text-gray-900" href="#" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                ANJANA
            </a>
<div className="flex items-center gap-5 text-gray-600">
<a className="hidden md:block text-sm font-light tracking-wide transition-colors duration-300 mr-4 hover:text-gray-900" href="#">Bespoke</a>
<button className="transition-colors duration-300 flex items-center hover:text-gray-900">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="transition-colors duration-300 flex items-center relative hover:text-gray-900">
<iconify-icon icon="solar:bag-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full text-[0.6rem] flex items-center justify-center bg-gray-900 text-white">2</span>
</button>
<button className="md:hidden transition-colors duration-300 flex items-center ml-2 hover:text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="min-h-screen flex flex-col text-center pt-32 pr-6 pb-20 pl-6 items-center justify-center">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<span className="text-xs uppercase tracking-[0.2em] mb-8 font-medium text-gray-400">The Heritage Collection</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-8 leading-[1.1] text-gray-900" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                Timeless Elegance,<br/> Refined for Today.
            </h1>
<p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-12 font-light leading-relaxed">
                Discover fine jewelry that transcends generations. Exquisite diamonds and precious gemstones meticulously set in sustainable 18k gold.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 bg-gray-900 text-white hover:bg-gray-800" href="#">
                    Explore Collection
                </a>
<a className="transition-colors duration-300 hover:bg-gray-50 text-sm font-medium text-gray-900 tracking-wide border-gray-200 border pt-3.5 pr-8 pb-3.5 pl-8" href="#">
                    Book an Appointment
                </a>
</div>
</div>

<div className="w-full max-w-7xl mx-auto mt-24 relative h-[60vh] md:h-[75vh] overflow-hidden group bg-gray-100">
<img alt="Fine Jewelry Collection" className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</section>

<section className="py-24 px-6 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12 border-b pb-6 border-gray-200">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Curated Categories</h2>
<a className="text-sm font-medium tracking-wide text-gray-500 transition-colors duration-300 hidden md:flex items-center gap-1 group hover:text-gray-900" href="#">
                    View All 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<a className="group block cursor-pointer" href="#">
<div className="aspect-[4/5] overflow-hidden mb-5 relative bg-gray-200">
<img alt="Signature Rings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 bg-black/5"></div>
</div>
<h3 className="text-xl font-normal tracking-tight mb-1 text-gray-900" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Signature Rings</h3>
<p className="text-sm text-gray-500 font-light">From classic solitaires to modern bands.</p>
</a>

<a className="group block cursor-pointer" href="#">
<div className="aspect-[4/5] overflow-hidden mb-5 relative bg-gray-200">
<img alt="Pendants &amp; Necklaces" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 bg-black/5"></div>
</div>
<h3 className="text-xl font-normal tracking-tight mb-1 text-gray-900" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Necklaces &amp; Pendants</h3>
<p className="text-sm text-gray-500 font-light">Delicate layers and statement pieces.</p>
</a>

<a className="group block cursor-pointer" href="#">
<div className="aspect-[4/5] overflow-hidden mb-5 relative bg-gray-200">
<img alt="Fine Earrings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 bg-black/5"></div>
</div>
<h3 className="text-xl font-normal tracking-tight mb-1 text-gray-900" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Fine Earrings</h3>
<p className="text-sm text-gray-500 font-light">Brilliant diamond studs and elegant drops.</p>
</a>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-wide border-b pb-0.5 text-gray-900 border-gray-900" href="#">
                    View All Collections
                </a>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="order-2 md:order-1 aspect-square md:aspect-[4/5] overflow-hidden bg-gray-100">
<img alt="Master Jeweler at Work" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 space-y-8">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Our Philosophy</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] text-gray-900" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                    Artistry in<br/> Every Detail.
                </h2>
<div className="space-y-6 text-base text-gray-500 font-light leading-relaxed">
<p>
                        At Anjana Luxe Jewels, we believe that true luxury lies in the unseen. It's the meticulous selection of ethically sourced stones, the countless hours spent refining a setting, and the passion poured into every curve of gold.
                    </p>
<p>
                        Our master artisans blend traditional techniques with contemporary vision, creating pieces that are not merely worn, but cherished as heirlooms to be passed down through generations.
                    </p>
</div>
<div className="pt-4 border-t border-gray-100">
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-wide hover:text-gray-500 transition-colors group text-gray-900" href="#">
                        Discover Our Story
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center bg-gray-950 text-white">
<div className="max-w-3xl mx-auto space-y-8 flex flex-col items-center">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-4 border-gray-800">
<iconify-icon className="text-gray-300" height="24" icon="solar:pen-new-square-linear" strokeWidth="1.5" style={{color: 'rgb(209, 213, 219)'}} width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Create Your Legacy</h2>
<p className="font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto text-gray-400">
                Work directly with our master designers to bring your vision to life. A truly unique piece, tailored specifically to your individual story.
            </p>
<div className="pt-4">
<a className="inline-block px-8 py-3.5 text-sm font-medium tracking-wide transition-colors bg-white text-gray-950 hover:bg-gray-200" href="#">
                    Begin Bespoke Journey
                </a>
</div>
</div>
</section>

<footer className="bg-[#FCFCFC] pt-24 pb-12 px-6 border-t border-gray-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">

<div className="md:col-span-4 lg:col-span-5 pr-8">
<a className="text-2xl font-medium tracking-[0.2em] uppercase block mb-6 text-gray-900" href="#" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                    ANJANA
                </a>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs mb-8">
                    Defining modern luxury through exceptional craftsmanship, ethical sourcing, and timeless design.
                </p>
<div className="flex gap-4 text-gray-400">
<a className="transition-colors hover:text-gray-900" href="#"><iconify-icon className="" icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-gray-900" href="#"><iconify-icon className="" icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-6 text-gray-900">Shop</h4>
<ul className="space-y-4 text-sm text-gray-500 font-light">
<li><a className="transition-colors duration-300 hover:text-gray-900" href="#">New Arrivals</a></li>
<li className=""><a className="transition-colors duration-300 hover:text-gray-900" href="#">Rings</a></li>
<li className=""><a className="transition-colors duration-300 hover:text-gray-900" href="#">Necklaces</a></li>
<li><a className="transition-colors duration-300 hover:text-gray-900" href="#">Earrings</a></li>
<li className=""><a className="transition-colors duration-300 hover:text-gray-900" href="#">Bracelets</a></li>
</ul>
</div>
<div className="md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-6 text-gray-900">About</h4>
<ul className="space-y-4 text-sm text-gray-500 font-light">
<li className=""><a className="transition-colors duration-300 hover:text-gray-900" href="#">Our Story</a></li>
<li><a className="transition-colors duration-300 hover:text-gray-900" href="#">Craftsmanship</a></li>
<li className=""><a className="transition-colors duration-300 hover:text-gray-900" href="#">Sustainability</a></li>
<li className=""><a className="transition-colors duration-300 hover:text-gray-900" href="#">Bespoke Services</a></li>
<li><a className="transition-colors duration-300 hover:text-gray-900" href="#">Contact Us</a></li>
</ul>
</div>

<div className="md:col-span-4 lg:col-span-3">
<h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-6 text-gray-900">Newsletter</h4>
<p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">Subscribe to receive updates on new collections, exclusive access, and more.</p>
<form className="flex border-b focus-within:border-gray-900 transition-colors duration-300 pb-2 border-gray-300">
<input className="w-full bg-transparent text-sm focus:outline-none placeholder:text-gray-400 font-light text-gray-900" placeholder="Your email address" required="" type="email"/>
<button className="transition-colors duration-300 flex items-center justify-center pl-2 text-gray-400 hover:text-gray-900" type="submit">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light border-gray-100 text-gray-400">
<p className="">© 2024 Anjana Luxe Jewels. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition-colors duration-300 hover:text-gray-900" href="#">Privacy Policy</a>
<a className="transition-colors duration-300 hover:text-gray-900" href="#">Terms of Service</a>
<a className="transition-colors duration-300 hover:text-gray-900" href="#">Shipping &amp; Returns</a>
</div>
</div>
</footer>

    </>
  );
}
