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



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
'luxury-black': '#0a0a0a',
'luxury-white': '#fcfcfc',
'luxury-grey': '#e5e5e5',
'luxury-charcoal': '#1a1a1a',
},
letterSpacing: {
'ultra-tight': '-0.05em',
}
}
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-luxury-white/90 backdrop-blur-sm border-b border-black/5">
<div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between">

<button className="lg:hidden p-2 -ml-2 hover:opacity-50 transition-opacity">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<nav className="hidden lg:flex gap-8 text-xs uppercase tracking-widest font-medium text-black/60">
<a className="hover:text-black transition-colors" href="#">Collections</a>
<a className="hover:text-black transition-colors" href="#">Atelier</a>
<a className="hover:text-black transition-colors" href="#">Maison</a>
</nav>

<a className="absolute left-1/2 -translate-x-1/2 text-center group" href="#">
<h1 className="font-serif text-3xl md:text-4xl tracking-tighter uppercase text-luxury-black leading-none group-hover:opacity-80 transition-opacity">
                    House of Tania
                </h1>
</a>

<div className="flex items-center gap-6">
<button className="hidden lg:block hover:opacity-50 transition-opacity">
<span className="text-xs uppercase tracking-widest font-medium">Account</span>
</button>
<button className="hover:opacity-50 transition-opacity">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative hover:opacity-50 transition-opacity">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-black opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-luxury-black"></span>
</span>
</button>
</div>
</div>
</header>

<section className="relative h-screen w-full overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<img alt="Luxury Fashion Campaign" className="w-full h-full object-cover object-top opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div className="relative h-full flex flex-col items-center justify-center text-center px-4">
<span className="text-white text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-in font-medium">Fall Winter 2024</span>
<h2 className="text-white font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-8 opacity-0 animate-fade-in delay-300">
                Silence &amp; Form
            </h2>
<a className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-white/30 rounded-full hover:bg-white hover:text-black opacity-0 animate-fade-in delay-500" href="#">
<span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
<span className="relative flex items-center gap-2 text-xs uppercase tracking-widest">
                    Discover Collection
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce duration-[2000ms]">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-luxury-white">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="mb-8 opacity-40" icon="lucide:asterisk" strokeWidth="1.5" width="24"></iconify-icon>
<p className="font-serif text-3xl md:text-5xl leading-tight md:leading-snug tracking-tight text-luxury-black font-light">
                We believe in the quiet authority of impeccable design. 
                <span className="text-black/40">House of Tania creates garments that exist beyond the trend cycle, focused on silhouette, texture, and an understated elegance.</span>
</p>
<div className="mt-12">
<a className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors" href="#">Read the Manifesto</a>
</div>
</div>
</section>

<section className="px-4 md:px-6 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[800px]">

<div className="lg:col-span-7 relative group cursor-pointer h-[500px] lg:h-full overflow-hidden">
<div className="img-zoom-container h-full w-full">
<img alt="Coats" className="img-zoom w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/50 to-transparent">
<h3 className="text-white font-serif text-4xl tracking-tight mb-2">Outerwear</h3>
<p className="text-white/80 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">Shop The Edit</p>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-4 h-full">

<div className="relative flex-1 group cursor-pointer overflow-hidden min-h-[300px]">
<div className="img-zoom-container h-full w-full">
<img alt="Dresses" className="img-zoom w-full h-full object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-serif text-3xl tracking-tight">Evening Wear</h3>
</div>
<div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
</div>

<div className="relative flex-1 group cursor-pointer overflow-hidden min-h-[300px]">
<div className="img-zoom-container h-full w-full">
<img alt="Accessories" className="img-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white font-serif text-3xl tracking-tight">Accessories</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 bg-stone-50 overflow-hidden w-full">
<div className="max-w-[1920px] mx-auto">
<div className="px-6 mb-12 flex justify-between items-end">
<div>
<span className="text-xs uppercase tracking-widest text-black/50 mb-2 block">New Arrivals</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-luxury-black">The Edit</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity" href="#">
                    View All
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>


<div className="w-full overflow-x-auto no-scrollbar pb-12 px-6">
<div className="flex gap-4 w-max">

<div className="flex-none w-[280px] md:w-[400px] group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-luxury-grey/30">
<img alt="The Silk Dress" className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">The Silk Slip</h3>
<p className="text-xs text-black/50">Midnight Blue</p>
</div>
<span className="text-sm font-medium">$890</span>
</div>
</div>

<div className="flex-none w-[280px] md:w-[400px] group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-luxury-grey/30">
<img alt="Wool Blazer" className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">Structured Wool Blazer</h3>
<p className="text-xs text-black/50">Charcoal</p>
</div>
<span className="text-sm font-medium">$1,250</span>
</div>
</div>

<div className="flex-none w-[280px] md:w-[400px] group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-luxury-grey/30">
<img alt="Cashmere Knit" className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">Cashmere Knit</h3>
<p className="text-xs text-black/50">Oatmeal</p>
</div>
<span className="text-sm font-medium">$650</span>
</div>
</div>

<div className="flex-none w-[280px] md:w-[400px] group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-luxury-grey/30">
<img alt="Trousers" className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-xl tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">Pleated Trousers</h3>
<p className="text-xs text-black/50">Black</p>
</div>
<span className="text-sm font-medium">$520</span>
</div>
</div>

<div className="w-2 flex-none"></div>
</div>
</div>
</div>
</section>


<section className="relative w-full py-24 bg-luxury-black text-white overflow-hidden">
<div className="absolute inset-0 opacity-40 pointer-events-none">
<img alt="Background Texture" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<span className="text-xs uppercase tracking-[0.2em] text-white/60 mb-6 block">The Atelier</span>
<h2 className="font-serif text-5xl md:text-7xl tracking-tighter mb-8 leading-none">Crafted for<br/>Eternity</h2>
<p className="text-white/70 font-light text-lg mb-10 max-w-md">
                    Every seam is intentional. Every fabric is sourced with an obsession for quality. We don't just make clothes; we engineer confidence.
                </p>
<button className="bg-white text-black px-8 py-4 text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                    Explore Our Process
                </button>
</div>

<div className="order-1 lg:order-2 h-[400px] md:h-[500px] w-full relative">
<div className="absolute top-0 right-0 w-[85%] h-[85%] bg-neutral-900 overflow-hidden">
<img alt="Tailoring" className="w-full h-full object-cover opacity-80 hover:scale-110 transition duration-[1.5s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-neutral-800 border-4 border-luxury-black overflow-hidden shadow-2xl">
<img alt="Detail" className="w-full h-full object-cover opacity-90 hover:scale-110 transition duration-[1.5s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-black/5 bg-luxury-white">
<div className="max-w-2xl mx-auto text-center">
<h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">Join the Inner Circle</h3>
<p className="text-sm text-black/60 mb-8 font-light">Receive early access to collections and exclusive atelier insights.</p>
<form className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
<div className="relative flex-grow group">
<input className="peer w-full bg-transparent border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-3 text-sm text-black/40 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black peer-valid:-top-4 peer-valid:text-xs">Email Address</label>
</div>
<button className="md:w-auto w-full py-3 px-8 bg-luxury-black text-white text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-luxury-white py-16 px-6">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="md:col-span-1">
<a className="block font-serif text-2xl tracking-tighter uppercase mb-6" href="#">House of Tania</a>
<p className="text-xs text-black/40 leading-relaxed max-w-xs">
                    Redefining luxury through the lens of modern minimalism and timeless craft.
                </p>
<div className="flex gap-4 mt-6">
<a className="opacity-40 hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="opacity-40 hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
<a className="opacity-40 hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest font-medium mb-6">Shop</h4>
<ul className="space-y-3 text-sm font-light text-black/60">
<li><a className="hover:text-black transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-black transition-colors" href="#">Ready to Wear</a></li>
<li><a className="hover:text-black transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-black transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest font-medium mb-6">Client Services</h4>
<ul className="space-y-3 text-sm font-light text-black/60">
<li><a className="hover:text-black transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-black transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-black transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-black transition-colors" href="#">Book an Appointment</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest font-medium mb-6">Legal</h4>
<ul className="space-y-3 text-sm font-light text-black/60">
<li><a className="hover:text-black transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-black transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-black transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-[1920px] mx-auto mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-black/30 uppercase tracking-widest">© 2024 House of Tania. All Rights Reserved.</p>
<div className="flex gap-4">
<iconify-icon className="opacity-20" icon="lucide:credit-card" width="16"></iconify-icon>
<iconify-icon className="opacity-20" icon="lucide:wallet" width="16"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
