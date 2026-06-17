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
      

<header className="fixed top-0 z-50 w-full border-b border-[#E8DCC4]/50 bg-[#FDFBF7]/90 backdrop-blur-md">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

<a className="text-xl font-medium tracking-tighter text-[#A44C3A] hover:opacity-80 transition-opacity" href="#" style={{fontFamily: '\'Fraunces\', serif'}}>
                HA
            </a>

<nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#5C554E]">
<a className="hover:text-[#A44C3A] transition-colors" href="#story">Our Story</a>
<a className="hover:text-[#A44C3A] transition-colors" href="#menu">Menu</a>
<a className="hover:text-[#A44C3A] transition-colors" href="#visit">Location</a>
</nav>
<div className="flex items-center gap-6">
<a className="inline-flex h-9 items-center justify-center rounded-full bg-[#2D4A3E] px-5 text-sm font-medium text-[#FDFBF7] shadow-sm hover:bg-[#1E332A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF7] transition-all" href="#menu">
                    Order Ahead
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Atmospheric cafe interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>

<div className="absolute inset-0 bg-[#2D4A3E]/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-[#2A2624]/60"></div>
</div>
<div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-6 pt-20">
<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-[#FDFBF7] mb-8">
<iconify-icon className="text-[#C59B27] text-base" icon="solar:star-fall-linear"></iconify-icon>
                    Now pouring: Seasonal Golden Lattes
                </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#FDFBF7] leading-[1.05]" style={{fontFamily: '\'Fraunces\', serif'}}>
                    Soulful coffee <br className="hidden md:block"/>in the heart of the Haight.
                </h1>
<p className="mt-8 max-w-xl text-base md:text-lg text-[#E8DCC4] font-normal leading-relaxed">
                    Third-wave precision meets bohemian spirit. A space for thinkers, dreamers, and damn good coffee.
                </p>
<div className="mt-12">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-[#A44C3A] px-8 text-sm font-medium text-[#FDFBF7] shadow-lg hover:bg-[#8A3F30] transition-all" href="#menu">
                        Explore the Offerings
                    </a>
</div>
</div>

<a className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#FDFBF7] opacity-60 hover:opacity-100 transition-opacity flex flex-col items-center gap-2" href="#story">
<span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
<iconify-icon className="text-xl" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</section>

<section className="mx-auto max-w-6xl px-6 py-24 md:py-32" id="story">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative aspect-[4/5] md:aspect-square rounded-t-full rounded-b-[2rem] overflow-hidden bg-[#E8DCC4] shadow-2xl order-2 lg:order-1">
<img alt="Vintage coffee elements" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1495474472201-417ceb679469?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 border-[1px] border-[#C59B27]/40 rounded-t-full rounded-b-[2rem] m-4 pointer-events-none"></div>
</div>
<div className="order-1 lg:order-2 flex flex-col items-start">
<h2 className="text-xs font-medium tracking-[0.2em] text-[#C59B27] uppercase mb-4">Our Roots</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#2D4A3E] mb-8 leading-[1.1]" style={{fontFamily: '\'Fraunces\', serif'}}>
                        Honoring the counterculture.
                    </h3>
<p className="text-base text-[#5C554E] font-normal leading-relaxed mb-6">
                        Born amidst the eclectic energy of Haight-Ashbury, our roastery bridges the neighborhood's bohemian, free-thinking 60s heritage with today's exacting third-wave standards.
                    </p>
<p className="text-base text-[#5C554E] font-normal leading-relaxed mb-10">
                        We believe coffee shouldn't be pretentious. It should be soulful, ethically sourced, and roasted to highlight the innate character of the bean—served in a warm space where community and creativity collide.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#A44C3A] hover:text-[#8A3F30] transition-colors group" href="#">
<span className="border-b border-[#A44C3A]/30 pb-0.5 group-hover:border-[#8A3F30] transition-colors">Read our manifesto</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#F9F6EF] border-y border-[#E8DCC4]/60 py-24" id="menu">
<div className="mx-auto max-w-5xl px-6">
<div className="text-center mb-16 flex flex-col items-center">
<iconify-icon className="text-3xl text-[#2D4A3E] mb-4" icon="solar:leaf-linear"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#2A2624] mb-4" style={{fontFamily: '\'Fraunces\', serif'}}>Curated Pours</h2>
<p className="text-sm text-[#5C554E] font-medium max-w-md">Focused offerings, prepared to exacting standards. Sourced directly from independent producers.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8DCC4] mb-16 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FDFBF7] rounded-bl-full border-l border-b border-[#E8DCC4]/50 -mr-4 -mt-4"></div>
<h3 className="text-xs font-medium tracking-[0.2em] text-[#C59B27] uppercase mb-6 relative z-10">Seasonal Reverie</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
<div className="flex justify-between items-start group">
<div className="flex-grow pr-4">
<h4 className="text-lg font-medium text-[#2D4A3E]" style={{fontFamily: '\'Fraunces\', serif'}}>The Golden Ashbury</h4>
<p className="text-sm text-[#5C554E] mt-1.5 font-normal leading-relaxed">Turmeric, black pepper, local honey, house-made oat milk, double espresso</p>
</div>
<span className="text-base font-medium text-[#2A2624] mt-1">$7.0</span>
</div>
<div className="flex justify-between items-start group">
<div className="flex-grow pr-4">
<h4 className="text-lg font-medium text-[#2D4A3E]" style={{fontFamily: '\'Fraunces\', serif'}}>Cardamom Rose Pour</h4>
<p className="text-sm text-[#5C554E] mt-1.5 font-normal leading-relaxed">Single origin Ethiopian filter, steeped with crushed cardamom and dried rose</p>
</div>
<span className="text-base font-medium text-[#2A2624] mt-1">$6.5</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

<div>
<h3 className="text-xs font-medium tracking-[0.2em] text-[#A44C3A] uppercase mb-8">Classics</h3>
<div className="flex flex-col gap-6">
<div className="flex justify-between items-baseline group">
<div className="flex-grow pr-4">
<h4 className="text-base font-medium text-[#2A2624]">Espresso</h4>
<p className="text-xs text-[#5C554E] mt-1 font-normal">House blend or rotating single origin</p>
</div>
<span className="text-base font-medium text-[#2A2624]">$4.0</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-grow pr-4">
<h4 className="text-base font-medium text-[#2A2624]">Cortado</h4>
<p className="text-xs text-[#5C554E] mt-1 font-normal">Equal parts espresso and perfectly textured milk</p>
</div>
<span className="text-base font-medium text-[#2A2624]">$4.5</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-grow pr-4">
<h4 className="text-base font-medium text-[#2A2624]">Latte</h4>
<p className="text-xs text-[#5C554E] mt-1 font-normal">Rich, creamy, 12oz pour</p>
</div>
<span className="text-base font-medium text-[#2A2624]">$5.5</span>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium tracking-[0.2em] text-[#A44C3A] uppercase mb-8">Slow Bar &amp; Botanicals</h3>
<div className="flex flex-col gap-6">
<div className="flex justify-between items-baseline group">
<div className="flex-grow pr-4">
<h4 className="text-base font-medium text-[#2A2624]">Hand Pour</h4>
<p className="text-xs text-[#5C554E] mt-1 font-normal">Chemex or V60, rotating single origins</p>
</div>
<span className="text-base font-medium text-[#2A2624]">$6.0</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-grow pr-4">
<h4 className="text-base font-medium text-[#2A2624]">Ceremonial Matcha</h4>
<p className="text-xs text-[#5C554E] mt-1 font-normal">Directly sourced Uji matcha, whisked to order</p>
</div>
<span className="text-base font-medium text-[#2A2624]">$6.5</span>
</div>
<div className="flex justify-between items-baseline group">
<div className="flex-grow pr-4">
<h4 className="text-base font-medium text-[#2A2624]">Loose Botanicals</h4>
<p className="text-xs text-[#5C554E] mt-1 font-normal">Curated herbal infusions and rare teas</p>
</div>
<span className="text-base font-medium text-[#2A2624]">$4.5</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-6 py-24 md:py-32" id="visit">
<div className="rounded-[2rem] bg-[#2D4A3E] text-[#FDFBF7] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#1E332A]">

<div className="w-full md:w-1/2 relative min-h-[400px] bg-[#E8DCC4]">

<iframe allowfullscreen="" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-90" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.567362879598!2d-122.4485551!3d37.7701784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587520e5405bd%3A0xc6c4296eb4cba6ea!2sHaight-Ashbury%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0', filter: 'contrast(1.1) sepia(0.3) hue-rotate(20deg)'}}>
</iframe>
</div>

<div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">

<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon className="text-8xl" icon="solar:sun-fog-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12 text-[#FDFBF7]" style={{fontFamily: '\'Fraunces\', serif'}}>Find Us</h2>
<div className="space-y-8 mb-12 relative z-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#1E332A] flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-[#C59B27]" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="pt-2">
<p className="text-sm text-[#E8DCC4] leading-relaxed font-normal">1500 Haight Street<br/>San Francisco, CA 94117</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#1E332A] flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-[#C59B27]" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="pt-2">
<p className="text-sm text-[#E8DCC4] leading-relaxed font-normal">Mon-Fri — 7am to 4pm<br/>Sat-Sun — 8am to 5pm</p>
</div>
</div>
</div>
<div className="border-t border-[#FDFBF7]/10 pt-8 relative z-10">
<p className="text-sm font-medium mb-3 text-[#FDFBF7]">Join the Commune</p>
<p className="text-sm text-[#E8DCC4] mb-5 font-normal leading-relaxed">Sign up for rare bean drops, local art events, and brewing guides.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-grow bg-[#1E332A] border border-[#FDFBF7]/20 rounded-full px-5 py-3 text-sm text-[#FDFBF7] placeholder:text-[#E8DCC4]/50 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all font-medium" placeholder="Email address" required="" type="email"/>
<button className="bg-[#A44C3A] text-[#FDFBF7] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#8A3F30] transition-colors shadow-sm whitespace-nowrap" type="submit">
                                Subscribe
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="w-full grid grid-cols-2 md:grid-cols-5 border-t border-[#E8DCC4]">
<a className="group relative aspect-square overflow-hidden bg-[#2D4A3E]" href="#">
<img alt="Latte art" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1507133750070-4cb6b5790691?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-[#A44C3A]/0 group-hover:bg-[#A44C3A]/40 transition-colors flex items-center justify-center">
<iconify-icon className="text-[#FDFBF7] opacity-0 group-hover:opacity-100 text-3xl transform scale-50 group-hover:scale-100 transition-all duration-300" icon="solar:camera-linear"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square overflow-hidden bg-[#2D4A3E]" href="#">
<img alt="Pour over" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-[#A44C3A]/0 group-hover:bg-[#A44C3A]/40 transition-colors flex items-center justify-center">
<iconify-icon className="text-[#FDFBF7] opacity-0 group-hover:opacity-100 text-3xl transform scale-50 group-hover:scale-100 transition-all duration-300" icon="solar:camera-linear"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square overflow-hidden bg-[#2D4A3E] hidden md:block" href="#">
<img alt="Barista working" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-[#A44C3A]/0 group-hover:bg-[#A44C3A]/40 transition-colors flex items-center justify-center">
<iconify-icon className="text-[#FDFBF7] opacity-0 group-hover:opacity-100 text-3xl transform scale-50 group-hover:scale-100 transition-all duration-300" icon="solar:camera-linear"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square overflow-hidden bg-[#2D4A3E] hidden md:block" href="#">
<img alt="Cafe exterior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-[#A44C3A]/0 group-hover:bg-[#A44C3A]/40 transition-colors flex items-center justify-center">
<iconify-icon className="text-[#FDFBF7] opacity-0 group-hover:opacity-100 text-3xl transform scale-50 group-hover:scale-100 transition-all duration-300" icon="solar:camera-linear"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square overflow-hidden bg-[#2D4A3E] hidden md:block" href="#">
<img alt="Coffee beans" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-[#A44C3A]/0 group-hover:bg-[#A44C3A]/40 transition-colors flex items-center justify-center">
<iconify-icon className="text-[#FDFBF7] opacity-0 group-hover:opacity-100 text-3xl transform scale-50 group-hover:scale-100 transition-all duration-300" icon="solar:camera-linear"></iconify-icon>
</div>
</a>
</section>
</main>

<footer className="bg-[#FDFBF7] py-12 border-t border-[#E8DCC4]">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<a className="text-xl font-medium tracking-tighter text-[#A44C3A]" href="#" style={{fontFamily: '\'Fraunces\', serif'}}>HA</a>
<span className="w-1 h-1 rounded-full bg-[#C59B27] hidden md:block"></span>
<p className="text-xs text-[#5C554E] font-medium hidden md:block tracking-widest uppercase">San Francisco, CA</p>
</div>
<div className="flex gap-8 text-sm font-medium text-[#5C554E]">
<a className="hover:text-[#A44C3A] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#A44C3A] transition-colors" href="#">Wholesale</a>
<a className="hover:text-[#A44C3A] transition-colors" href="#">Contact</a>
</div>
<p className="text-xs text-[#5C554E]/60 font-medium">© 2024 Haight Ashbury Coffee.</p>
</div>
</footer>

    </>
  );
}
