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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-500 bg-gradient-to-b from-[#0f0e0d]/90 to-transparent backdrop-blur-sm border-b border-white/5 pt-6 pb-4 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<button className="md:hidden text-[#e3ded5] hover:text-[#a38a5e] transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-xs uppercase tracking-[0.15em] text-[#9a9488] hover:text-[#e3ded5] transition-colors duration-300" href="#">For Him</a>
<a className="text-xs uppercase tracking-[0.15em] text-[#9a9488] hover:text-[#e3ded5] transition-colors duration-300" href="#">For Her</a>
<a className="text-xs uppercase tracking-[0.15em] text-[#9a9488] hover:text-[#e3ded5] transition-colors duration-300" href="#">Unisex</a>
</div>

<a className="absolute left-1/2 transform -translate-x-1/2 font-['Cormorant_Garamond',_serif] font-medium text-2xl tracking-tighter uppercase text-white" href="#">
                S I G N E
            </a>

<div className="flex space-x-6 items-center">
<a className="hidden md:block text-xs uppercase tracking-[0.15em] text-[#a38a5e] hover:text-[#e3ded5] transition-colors duration-300" href="#">Exclusive</a>
<button className="text-[#e3ded5] hover:text-[#a38a5e] transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-[#e3ded5] hover:text-[#a38a5e] transition-colors duration-300 relative">
<iconify-icon className="text-xl" icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#a38a5e] text-[#0f0e0d] text-[0.6rem] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">2</span>
</button>
</div>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<img alt="Luxury Perfume" className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0d]/40 via-[#0f0e0d]/60 to-[#0f0e0d]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0f0e0d]/80 via-transparent to-[#0f0e0d]/80"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mt-20">
<span className="block text-xs uppercase tracking-[0.2em] text-[#a38a5e] mb-6 font-light">L'Essence de l'Identité</span>
<h1 className="font-['Cormorant_Garamond',_serif] text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-tight">
                An Invisible Garment <br className="hidden md:block"/> of Confidence
            </h1>
<p className="text-sm md:text-base text-[#9a9488] mb-12 max-w-lg mx-auto font-light leading-relaxed">
                Discover a curated collection of rare, evocative fragrances designed to linger in the memory and elevate the everyday.
            </p>
<a className="inline-flex items-center justify-center px-10 py-4 border border-[#a38a5e]/50 text-[#e3ded5] text-xs uppercase tracking-[0.15em] hover:bg-[#a38a5e] hover:text-[#0f0e0d] hover:border-[#a38a5e] transition-all duration-500" href="#collection">
                Explore The Collection
            </a>
</div>
</header>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full" id="collection">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs uppercase tracking-[0.2em] text-[#a38a5e] mb-3 block">Iconic Scents</span>
<h2 className="font-['Cormorant_Garamond',_serif] text-3xl md:text-4xl font-medium tracking-tight text-white">Curated Signatures</h2>
</div>
<a className="text-xs uppercase tracking-[0.1em] text-[#9a9488] hover:text-[#e3ded5] border-b border-[#9a9488]/30 hover:border-[#e3ded5] pb-1 transition-all duration-300" href="#">
                View All Fragrances
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

<a className="group block" href="#">
<div className="relative aspect-[3/4] bg-[#161513] overflow-hidden mb-6 rounded-sm">
<img alt="Oud Mystère" className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="text-center">
<h3 className="font-['Cormorant_Garamond',_serif] text-xl font-medium tracking-tight text-[#e3ded5] mb-2 group-hover:text-[#a38a5e] transition-colors">Oud Mystère</h3>
<p className="text-xs text-[#827d73] mb-3 font-light">Agarwood • Saffron • Black Leather</p>
<span className="text-sm text-[#e3ded5] tracking-wide">$285</span>
</div>
</a>

<a className="group block mt-0 lg:mt-12" href="#">
<div className="relative aspect-[3/4] bg-[#161513] overflow-hidden mb-6 rounded-sm">
<img alt="Santal Blanc" className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="text-center">
<h3 className="font-['Cormorant_Garamond',_serif] text-xl font-medium tracking-tight text-[#e3ded5] mb-2 group-hover:text-[#a38a5e] transition-colors">Santal Blanc</h3>
<p className="text-xs text-[#827d73] mb-3 font-light">White Sandalwood • Cardamom • Fig</p>
<span className="text-sm text-[#e3ded5] tracking-wide">$240</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative aspect-[3/4] bg-[#161513] overflow-hidden mb-6 rounded-sm">
<img alt="Noire Épice" className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="text-center">
<h3 className="font-['Cormorant_Garamond',_serif] text-xl font-medium tracking-tight text-[#e3ded5] mb-2 group-hover:text-[#a38a5e] transition-colors">Noire Épice</h3>
<p className="text-xs text-[#827d73] mb-3 font-light">Black Pepper • Vanilla Absolute • Amber</p>
<span className="text-sm text-[#e3ded5] tracking-wide">$310</span>
</div>
</a>

<a className="group block mt-0 lg:mt-12" href="#">
<div className="relative aspect-[3/4] bg-[#161513] overflow-hidden mb-6 rounded-sm">
<img alt="Fleur de Cendre" className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="text-center">
<h3 className="font-['Cormorant_Garamond',_serif] text-xl font-medium tracking-tight text-[#e3ded5] mb-2 group-hover:text-[#a38a5e] transition-colors">Fleur de Cendre</h3>
<p className="text-xs text-[#827d73] mb-3 font-light">Smoked Rose • Vetiver • Patchouli</p>
<span className="text-sm text-[#e3ded5] tracking-wide">$265</span>
</div>
</a>
</div>
</section>

<section className="py-24 bg-[#141311] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-square md:aspect-[4/5] overflow-hidden bg-[#0f0e0d] rounded-sm">
<img alt="Sensory Details" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1608501821300-4f99e58bba77?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-8 w-32 h-32 border border-[#a38a5e]/20 hidden md:block"></div>
</div>
<div className="order-1 lg:order-2 lg:pl-12">
<span className="text-xs uppercase tracking-[0.2em] text-[#a38a5e] mb-4 block">The Art of Extraction</span>
<h2 className="font-['Cormorant_Garamond',_serif] text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
                        A symphony of <br/> rare botanicals
                    </h2>
<p className="text-sm text-[#9a9488] mb-6 font-light leading-relaxed">
                        Every bottle holds a narrative. We source the world's most elusive ingredients, from the damp, shaded floors of Indonesian forests to the sun-drenched valleys of Grasse.
                    </p>
<p className="text-sm text-[#9a9488] mb-10 font-light leading-relaxed">
                        Our master perfumers blend traditional maceration techniques with modern precision, resulting in scents that evolve beautifully on the skin—revealing new depths hour by hour.
                    </p>
<a className="group inline-flex items-center text-xs uppercase tracking-[0.15em] text-[#e3ded5] hover:text-[#a38a5e] transition-colors duration-300" href="#">
                        Discover Our Process
                        <iconify-icon className="ml-2 text-lg transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#0a0a09] pt-24 pb-12 border-t border-white/5 mt-auto">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

<div className="md:col-span-1">
<a className="inline-block font-['Cormorant_Garamond',_serif] font-medium text-2xl tracking-tighter uppercase text-white mb-6" href="#">
                        S I G N E
                    </a>
<p className="text-xs text-[#827d73] font-light leading-relaxed max-w-xs">
                        Refining the invisible. A luxury fragrance house established to capture memories and project presence.
                    </p>
</div>

<div>
<h4 className="text-xs uppercase tracking-[0.15em] text-[#e3ded5] mb-6">Collections</h4>
<ul className="space-y-4">
<li><a className="text-sm text-[#827d73] hover:text-[#a38a5e] transition-colors font-light" href="#">Les Extraits</a></li>
<li><a className="text-sm text-[#827d73] hover:text-[#a38a5e] transition-colors font-light" href="#">Eau de Parfum</a></li>
<li><a className="text-sm text-[#827d73] hover:text-[#a38a5e] transition-colors font-light" href="#">Home Fragrance</a></li>
<li><a className="text-sm text-[#827d73] hover:text-[#a38a5e] transition-colors font-light" href="#">Discovery Sets</a></li>
</ul>
</div>

<div>
<h4 className="text-xs uppercase tracking-[0.15em] text-[#e3ded5] mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-[#827d73] hover:text-[#a38a5e] transition-colors font-light" href="#">Bespoke Consultations</a></li>
<li><a className="text-sm text-[#827d73] hover:text-[#a38a5e] transition-colors font-light" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-[#827d73] hover:text-[#a38a5e] transition-colors font-light" href="#">Track Order</a></li>
<li><a className="text-sm text-[#827d73] hover:text-[#a38a5e] transition-colors font-light" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-xs uppercase tracking-[0.15em] text-[#e3ded5] mb-6">The Inner Circle</h4>
<p className="text-xs text-[#827d73] font-light mb-6">
                        Subscribe to receive early access to new releases, private events, and olfactory insights.
                    </p>
<form className="relative group">
<input className="w-full bg-transparent border-b border-[#333] text-sm text-[#e3ded5] pb-3 focus:outline-none focus:border-[#a38a5e] transition-colors placeholder:text-[#555] font-light" placeholder="Email Address" type="email"/>
<button className="absolute right-0 bottom-3 text-[#555] group-hover:text-[#a38a5e] transition-colors" type="submit">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[0.65rem] uppercase tracking-widest text-[#555]">
<p>© 2023 SIGNE. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-[#a38a5e] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#a38a5e] transition-colors" href="#">Terms</a>
<a className="hover:text-[#a38a5e] transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
