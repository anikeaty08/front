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
      

<nav className="fixed top-0 w-full z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-display font-semibold tracking-tighter text-2xl uppercase flex items-center gap-1" href="#">
                LUCKY<span className="text-[#E63946]">TACOSHI</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-[#F5F5F5] transition-colors" href="#menu">Menu</a>
<a className="hover:text-[#F5F5F5] transition-colors" href="#about">Story</a>
<a className="hover:text-[#F5F5F5] transition-colors" href="#location">Location</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-[#7ED957] text-[#111111] px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-[#68b846] neon-shadow-green" href="#order">
                    Order Online
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-2xl text-[#F5F5F5]">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Sushi preparation" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-[#111111]/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 flex flex-col items-start">

<div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
<iconify-icon className="text-[#7ED957]" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-medium">4.3/5 from 43+ Reviews</span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] max-w-4xl mb-6">
                Sushi Tacos Like You’ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#ff7b85]">Never Had Before</span> 🌮🍣
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-medium">
                A bold fusion of fresh, high-quality ingredients and explosive flavors — right in the heart of West Covina.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#7ED957] text-[#111111] px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-[#68b846] neon-shadow-green" href="#order">
                    Order Online
                    <iconify-icon className="text-xl" icon="solar:bag-3-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#E63946] text-[#E63946] px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-[#E63946]/10" href="#menu">
                    View Menu
                </a>
</div>
</div>
</section>

<section className="py-24 relative bg-[#111111]" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-[#7ED957]/20 to-[#E63946]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
<img alt="Sushi fusion concept" className="relative rounded-2xl w-full h-[500px] object-cover border border-white/5 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div>
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-6">
                    Where Tokyo Meets <span className="text-[#7ED957]">Tijuana</span>
</h2>
<p className="text-neutral-400 text-base md:text-lg mb-8 leading-relaxed">
                    Lucky Tacoshi is a unique fusion concept combining the precision of Japanese sushi with the bold spirit of Mexican street tacos. Located inside Haven City Market, we bring fresh, high-quality ingredients together in an unforgettable way.
                </p>

<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
<iconify-icon className="text-2xl text-[#7ED957]" icon="solar:leaf-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Fresh Ingredients</span>
</div>
<div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
<iconify-icon className="text-2xl text-[#F5F5F5]" icon="solar:chef-hat-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Sushi-Inspired</span>
</div>
<div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
<iconify-icon className="text-2xl text-[#E63946]" icon="solar:fire-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Taco Style</span>
</div>
<div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
<iconify-icon className="text-2xl text-[#7ED957]" icon="solar:wad-of-money-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">$10–20 Affordable</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-neutral-950" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-4">Our Fan Favorites</h2>
<p className="text-neutral-400 text-lg">The fusion dishes that keep them coming back.</p>
</div>
<a className="group flex items-center gap-2 text-sm font-semibold text-[#F5F5F5] hover:text-[#7ED957] transition-colors" href="#">
                    View Full Menu
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="group bg-[#111111] rounded-2xl p-4 border border-white/5 hover:border-[#7ED957]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,217,87,0.1)] flex flex-col">
<div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
<img alt="Tempura Shrimp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-2 group-hover:text-[#7ED957] transition-colors">Tempura Shrimp Sushi Taco</h3>
<p className="text-neutral-400 text-sm mb-6 flex-grow">Crispy shrimp, fresh toppings, wrapped in a crispy nori shell with our signature sauce.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-display font-semibold text-xl">$12</span>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#7ED957] group-hover:text-[#111111] group-hover:border-transparent transition-all">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group bg-[#111111] rounded-2xl p-4 border border-white/5 hover:border-[#E63946]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,70,0.1)] flex flex-col">
<div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
<img alt="Seasonal Uni" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute top-4 right-4 bg-[#E63946] text-xs font-semibold px-2 py-1 rounded tracking-tight">Premium</div>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-2 group-hover:text-[#E63946] transition-colors">Seasonal Uni Sushi Taco</h3>
<p className="text-neutral-400 text-sm mb-6 flex-grow">Premium seasonal uni with fresh garnish, delivering a melt-in-your-mouth experience.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-display font-semibold text-xl">$18</span>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E63946] group-hover:text-white group-hover:border-transparent transition-all">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group bg-[#111111] rounded-2xl p-4 border border-white/5 hover:border-[#7ED957]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,217,87,0.1)] flex flex-col">
<div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
<img alt="Salmon Spicy Tuna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-2 group-hover:text-[#7ED957] transition-colors">Salmon &amp; Spicy Tuna Taco</h3>
<p className="text-neutral-400 text-sm mb-6 flex-grow">Fresh salmon paired with our kickin' spicy tuna mix, avocado, and sesame seeds.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-display font-semibold text-xl">$14</span>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#7ED957] group-hover:text-[#111111] group-hover:border-transparent transition-all">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<p className="text-xs text-neutral-500 text-center tracking-tight">Please inform staff of any food allergies before ordering.</p>
</div>
</section>

<section className="py-24 bg-[#111111] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-4">What Our Customers Say</h2>
<div className="flex items-center justify-center gap-2 text-2xl font-semibold">
<iconify-icon className="text-[#7ED957]" icon="solar:star-bold"></iconify-icon>
<span>4.3 <span className="text-neutral-500 text-lg">/ 5</span></span>
</div>
</div>

<div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 md:px-0 md:justify-center max-w-7xl mx-auto pb-8">

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 snap-center hover:border-white/10 transition-colors">
<div className="flex gap-1 text-[#7ED957] mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-neutral-300 mb-6 font-medium leading-relaxed">"It is a delicious fusion of fresh, high-quality ingredients and bold flavors. The vibe is immaculate."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center font-semibold text-sm">KS</div>
<span className="font-semibold text-sm tracking-tight">— Kite S.</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 snap-center hover:border-white/10 transition-colors">
<div className="flex gap-1 text-[#7ED957] mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<p className="text-base text-neutral-300 mb-6 font-medium leading-relaxed">"I ordered their tempura shrimp sushi taco and their seasonal uni sushi taco. Absolutely blown away by the quality."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center font-semibold text-sm">KB</div>
<span className="font-semibold text-sm tracking-tight">— Katrina Barney</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#111111]" id="location">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative w-full h-[400px] lg:h-[500px] bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden group">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=989%20S%20Glendora%20Ave,%20West%20Covina,%20CA%2091790&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{filter: 'invert(90%) hue-rotate(180deg) brightness(85%)'}}>
</iframe>
<div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg text-xs border border-white/10 pointer-events-none">
                    Map View
                </div>
</div>

<div className="flex flex-col gap-8">
<div>
<h2 className="font-display font-semibold text-4xl tracking-tight mb-2">Find Us at Haven City Market</h2>
<p className="text-neutral-400">Your spot for street food luxury.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex gap-4">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 border border-white/5 text-[#7ED957]">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm mb-1 tracking-tight">Address</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                                989 S Glendora Ave<br/>
                                West Covina, CA 91790<br/>
                                Inside: Haven City Market
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 border border-white/5 text-[#7ED957]">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm mb-1 tracking-tight">Hours</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                                Open Daily<br/>
                                11:00 AM – 8:45 PM
                            </p>
</div>
</div>
<div className="flex gap-4 sm:col-span-2">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 border border-white/5 text-[#7ED957]">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm mb-1 tracking-tight">Phone</h4>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="tel:+19513739816">+1 951-373-9816</a>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
<a className="flex items-center gap-2 bg-white text-[#111111] px-6 py-3 rounded-full text-sm font-semibold transition-all hover:bg-neutral-200" href="https://share.google/2O3SVBn8qmXYEYUDl" rel="noopener noreferrer" target="_blank">
                        Get Directions
                    </a>
<a className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:bg-white/5" href="tel:+19513739816">
                        Call Now
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-display font-semibold text-4xl tracking-tight mb-2">Follow the Flavor</h2>
<p className="text-neutral-400 text-sm">Join the hype on Instagram</p>
</div>
<a className="flex items-center gap-2 text-sm font-semibold hover:text-[#E63946] transition-colors" href="https://instagram.com/lucky_tacoshi" target="_blank">
                    @lucky_tacoshi
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 block" href="#">
<img alt="IG Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:heart-bold"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 block" href="#">
<img alt="IG Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:heart-bold"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 block" href="#">
<img alt="IG Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:heart-bold"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 block" href="#">
<img alt="IG Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:heart-bold"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 relative bg-[#111111] overflow-hidden border-t border-white/5" id="order">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#7ED957]/10 to-[#E63946]/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tighter mb-8">Craving It Now?</h2>
<a className="inline-flex items-center justify-center gap-3 bg-[#E63946] text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:bg-[#cf2b38] hover:-translate-y-1 neon-shadow-red shadow-2xl" href="#">
                Order Online
                <span className="text-xl group-hover:animate-bounce">🌮</span>
</a>
</div>
</section>

<footer className="bg-black pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-2">
<a className="font-display font-semibold tracking-tighter text-2xl uppercase flex items-center gap-1 mb-4" href="#">
                        LUCKY<span className="text-[#E63946]">TACOSHI</span>
</a>
<p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
                        Japanese × Mexican Fusion Street Food. High quality ingredients, explosive flavors. Located in West Covina.
                    </p>
</div>

<div>
<h4 className="font-semibold text-sm mb-4 tracking-tight text-white">Quick Links</h4>
<ul className="flex flex-col gap-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Menu</a></li>
<li><a className="hover:text-white transition-colors" href="#order">Order Online</a></li>
<li><a className="hover:text-white transition-colors" href="#location">Contact</a></li>
<li><a className="hover:text-[#7ED957] transition-colors" href="https://instagram.com/lucky_tacoshi">Instagram</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-sm mb-4 tracking-tight text-white">Contact</h4>
<ul className="flex flex-col gap-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="tel:+19513739816">951-373-9816</a></li>
<li><a className="hover:text-white transition-colors" href="mailto:luckytacoshi@gmail.com">luckytacoshi@gmail.com</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
<p>© 2026 Lucky Tacoshi. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-300" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#7ED957] text-[#111111] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(126,217,87,0.4)] z-50" href="#order">
<iconify-icon className="text-2xl" icon="solar:bag-3-bold"></iconify-icon>
</a>

    </>
  );
}
