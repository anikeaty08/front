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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#c2beb3]/30 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-full bg-[#faf9f6] border border-[#c2beb3] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
<i className="text-[#483627] w-5 h-5" data-lucide="leaf"></i>
</div>
<div className="flex flex-col leading-none">
<span className="font-serif font-semibold text-2xl tracking-tight text-[#312f2a]">GENIKA</span>
<span className="text-xs font-semibold tracking-widest text-[#483627] uppercase mt-0.5">Café</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-10">
<a className="text-base font-medium text-[#504d49] hover:text-[#483627] transition-colors" href="#about">Our Story</a>
<a className="text-base font-medium text-[#504d49] hover:text-[#483627] transition-colors" href="#menu">Menu</a>
<a className="text-base font-medium text-[#504d49] hover:text-[#483627] transition-colors" href="#visit">Visit Us</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#483627] text-white text-base font-medium hover:bg-[#312f2a] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="#reserve">
                    Reserve a Table
                </a>
<button className="md:hidden p-2 text-[#312f2a]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#312f2a]">

<div className="absolute inset-0 z-0">
<img alt="Genika Cafe Interior" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#312f2a] via-[#312f2a]/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#c2beb3] text-sm font-medium mb-8">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                Experience Timeless Elegance
            </span>
<h1 className="font-serif font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white max-w-4xl leading-tight mb-8">
                A classic café experience, <span className="italic text-[#c2beb3]">reimagined.</span>
</h1>
<p className="text-lg md:text-xl text-[#c2beb3] max-w-2xl mb-12 font-light">
                Discover a warm, inviting atmosphere where expertly crafted beverages meet refined, timeless design in the heart of the city.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#312f2a] text-base font-semibold hover:bg-[#c2beb3] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group" href="#menu">
                    View Our Menu
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#c2beb3] text-white text-base font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center" href="#visit">
                    Plan Your Visit
                </a>
</div>
</div>
</section>

<div className="relative z-20 -mt-8 max-w-6xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl border border-[#c2beb3]/30 p-2 md:p-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#c2beb3]/30">
<div className="flex items-center gap-4 w-full md:w-1/3 px-6 py-4 md:py-2">
<div className="w-12 h-12 rounded-full bg-[#faf9f6] flex items-center justify-center text-[#483627] flex-shrink-0">
<i data-lucide="clock"></i>
</div>
<div>
<p className="text-sm font-semibold text-[#312f2a] uppercase tracking-wider">Opening Hours</p>
<p className="text-base text-[#504d49]">Mon-Sun, 7:00 AM - 8:00 PM</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-1/3 px-6 py-4 md:py-2">
<div className="w-12 h-12 rounded-full bg-[#faf9f6] flex items-center justify-center text-[#483627] flex-shrink-0">
<i data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm font-semibold text-[#312f2a] uppercase tracking-wider">Location</p>
<p className="text-base text-[#504d49]">124 Heritage Ave, City Center</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-1/3 px-6 py-4 md:py-2 justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#faf9f6] flex items-center justify-center text-[#483627] flex-shrink-0">
<i data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-semibold text-[#312f2a] uppercase tracking-wider">Contact</p>
<p className="text-base text-[#504d49]">+1 (555) 123-4567</p>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 md:py-32 bg-[#faf9f6]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-[#c2beb3] rounded-3xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
<img alt="Barista preparing coffee" className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-[#c2beb3]/30 hidden md:flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#483627] flex items-center justify-center text-[#c2beb3]">
<i className="w-6 h-6" data-lucide="coffee"></i>
</div>
<div>
<p className="font-serif font-semibold text-2xl text-[#312f2a] tracking-tight">Est. 2024</p>
<p className="text-base text-[#504d49]">Locally roasted</p>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<span className="text-[#483627] font-semibold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
<span className="w-8 h-[1px] bg-[#483627]"></span>
                        Our Heritage
                    </span>
<h2 className="font-serif font-semibold text-4xl md:text-5xl tracking-tight text-[#312f2a] leading-tight mb-6">
                        Rooted in tradition, crafted for today.
                    </h2>
<p className="text-lg text-[#504d49] mb-6 leading-relaxed">
                        At Genika Café, we believe that a great cup of coffee is more than just a drink; it's a moment of pause. Our space is designed to reflect the warmth and classic elegance of traditional coffee houses, brought into the modern era.
                    </p>
<p className="text-lg text-[#504d49] mb-10 leading-relaxed">
                        From the carefully selected woven pendants illuminating our textured walls to the rich aroma of our ethically sourced beans, every detail is curated to encourage you to linger, connect, and savor the experience.
                    </p>
<div className="flex items-center gap-6">
<a className="inline-flex items-center gap-2 text-base font-semibold text-[#483627] hover:text-[#312f2a] transition-colors pb-1 border-b-2 border-[#483627] hover:border-[#312f2a]" href="#about">
                            Read our full story
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
<span className="text-[#483627] font-semibold tracking-widest uppercase text-sm mb-4 block">Curated Selection</span>
<h2 className="font-serif font-semibold text-4xl md:text-5xl tracking-tight text-[#312f2a] mb-6">Menu Highlights</h2>
<p className="text-lg text-[#504d49]">
                    A glimpse into our offerings. We pride ourselves on using locally sourced ingredients to create classic flavors with a refined touch.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

<div className="group bg-[#faf9f6] rounded-3xl p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-[#c2beb3]/20">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
<img alt="Artisan Latte" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=2187&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm text-[#312f2a] font-semibold text-base">
                            $5.50
                        </div>
</div>
<div className="px-2 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif font-semibold text-2xl tracking-tight text-[#312f2a]">Signature Latte</h3>
</div>
<p className="text-base text-[#504d49] mb-4">
                            Our house blend espresso, perfectly steamed milk, and a subtle hint of Madagascar vanilla.
                        </p>
</div>
</div>

<div className="group bg-[#faf9f6] rounded-3xl p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-[#c2beb3]/20">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
<img alt="Avocado Toast" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm text-[#312f2a] font-semibold text-base">
                            $12.00
                        </div>
</div>
<div className="px-2 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif font-semibold text-2xl tracking-tight text-[#312f2a]">Heritage Toast</h3>
</div>
<p className="text-base text-[#504d49] mb-4">
                            Thick-cut sourdough, smashed Hass avocado, radish, microgreens, and a dash of chili flakes.
                        </p>
</div>
</div>

<div className="group bg-[#faf9f6] rounded-3xl p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-[#c2beb3]/20">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
<img alt="Almond Croissant" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm text-[#312f2a] font-semibold text-base">
                            $4.75
                        </div>
</div>
<div className="px-2 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif font-semibold text-2xl tracking-tight text-[#312f2a]">Almond Croissant</h3>
</div>
<p className="text-base text-[#504d49] mb-4">
                            Twice-baked butter croissant filled with rich frangipane and topped with toasted almonds.
                        </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#483627] text-[#483627] text-base font-semibold hover:bg-[#483627] hover:text-white transition-colors duration-300" href="#menu">
                    Explore Full Menu
                </a>
</div>
</div>
</section>

<section className="relative py-24 bg-[#c2beb3] overflow-hidden" id="reserve">

<div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-[#483627]/5 blur-3xl"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="font-serif font-semibold text-4xl md:text-5xl tracking-tight text-[#312f2a] mb-6">
                Join us for a moment of calm.
            </h2>
<p className="text-lg text-[#504d49] mb-10 max-w-2xl mx-auto">
                Whether it's a quiet morning coffee or a leisurely weekend brunch, we look forward to hosting you at Genika Café.
            </p>
<form className="bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
<div className="flex-1 relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#504d49]">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<input className="w-full pl-12 pr-4 py-3 bg-[#faf9f6] border border-[#c2beb3]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#483627]/20 text-base text-[#312f2a] placeholder-[#c2beb3]" placeholder="Date &amp; Time" type="text"/>
</div>
<div className="flex-1 relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#504d49]">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<select className="w-full pl-12 pr-4 py-3 bg-[#faf9f6] border border-[#c2beb3]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#483627]/20 text-base text-[#312f2a] appearance-none cursor-pointer">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>5+ Guests</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#504d49]">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<button className="px-8 py-3 bg-[#483627] text-white rounded-xl text-base font-semibold hover:bg-[#312f2a] transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap" type="button">
                    Book Table
                </button>
</form>
</div>
</section>

<footer className="bg-[#312f2a] pt-20 pb-10 border-t border-[#483627]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="flex flex-col leading-none">
<span className="font-serif font-semibold text-2xl tracking-tight text-white">GENIKA</span>
<span className="text-xs font-semibold tracking-widest text-[#c2beb3] uppercase mt-0.5">Café</span>
</div>
</a>
<p className="text-base text-[#c2beb3]/80 mb-6 max-w-xs">
                        Warmth, classic elegance, and expertly crafted coffee.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#c2beb3] hover:bg-white/10 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#c2beb3] hover:bg-white/10 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#c2beb3] hover:bg-white/10 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>

<div>
<h4 className="font-semibold text-white text-base tracking-wide mb-6">Explore</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#c2beb3]/80 hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="text-base text-[#c2beb3]/80 hover:text-white transition-colors" href="#">Food Menu</a></li>
<li><a className="text-base text-[#c2beb3]/80 hover:text-white transition-colors" href="#">Drinks Menu</a></li>
<li><a className="text-base text-[#c2beb3]/80 hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white text-base tracking-wide mb-6">Information</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#c2beb3]/80 hover:text-white transition-colors" href="#">Reservations</a></li>
<li><a className="text-base text-[#c2beb3]/80 hover:text-white transition-colors" href="#">Private Events</a></li>
<li><a className="text-base text-[#c2beb3]/80 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-base text-[#c2beb3]/80 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white text-base tracking-wide mb-6">Visit Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-[#c2beb3]/80">
<i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span className="text-base">124 Heritage Ave,<br/>City Center, ST 12345</span>
</li>
<li className="flex items-center gap-3 text-[#c2beb3]/80">
<i className="w-5 h-5 shrink-0" data-lucide="phone"></i>
<span className="text-base">+1 (555) 123-4567</span>
</li>
<li className="flex items-center gap-3 text-[#c2beb3]/80">
<i className="w-5 h-5 shrink-0" data-lucide="mail"></i>
<span className="text-base">hello@genikacafe.com</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-base text-[#c2beb3]/60">
                    © 2024 Genika Café. All rights reserved.
                </p>
<div className="flex items-center gap-6">
<a className="text-base text-[#c2beb3]/60 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-base text-[#c2beb3]/60 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
