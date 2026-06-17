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
colors: {
brand: {
black: '#111111',
white: '#F8F8F8',
gold: '#C6A75E',
beige: '#E8DFD8',
dark: '#0a0a0a'
}
},
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Montserrat"', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
widest: '0.15em',
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
      

<div className="bg-brand-black text-brand-gold h-10 flex items-center overflow-hidden relative z-50">
<div className="animate-marquee text-xs font-medium uppercase tracking-widest w-full">
            Spring Collection Launch – March 28   |   Private Consultations Now Open   |   Lagos Fashion Showcase – April 12   |   Complimentary Shipping on Orders Over $500   |   Velora Atelier – Redefining Modern Luxury
        </div>
</div>

<nav className="sticky top-0 w-full bg-brand-white/95 backdrop-blur-sm z-40 border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

<button className="md:hidden text-brand-black">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-2xl font-serif font-medium tracking-tight hover:text-brand-gold transition-colors duration-300" href="#">
                VELORA ATELIER
            </a>

<div className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-widest font-medium text-gray-600">
<a className="hover:text-brand-black transition-colors" href="#collection">Collections</a>
<a className="hover:text-brand-black transition-colors" href="#trustees">Atelier</a>
<a className="hover:text-brand-black transition-colors" href="#events">Events</a>
<a className="hover:text-brand-black transition-colors" href="#dom">Architecture</a>
<a className="hover:text-brand-black transition-colors" href="#appointments">Appointments</a>
</div>

<div className="flex items-center space-x-6">
<button className="text-brand-black hover:text-brand-gold transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-brand-black hover:text-brand-gold transition-colors relative">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] w-3 h-3 flex items-center justify-center rounded-full">0</span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0">
<img alt="Velora Hero" className="w-full h-full object-cover object-top brightness-[0.85]" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
<p className="text-xs uppercase tracking-[0.2em] mb-6 text-brand-gold opacity-90">Spring / Summer 2024</p>
<h1 className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-tight leading-tight">
                Where Elegance <br/> Meets Identity
            </h1>
<p className="text-sm md:text-base font-light text-gray-200 mb-10 tracking-wide max-w-xl mx-auto">
                Redefining contemporary fashion for the bold. A curated synthesis of minimalism and cultural sophistication.
            </p>
<a className="inline-block border border-brand-gold text-brand-gold px-10 py-4 text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all duration-500" href="#collection">
                Explore Collection
            </a>
</div>
</header>

<section className="py-24 md:py-32 px-6 bg-brand-white">
<div className="max-w-3xl mx-auto text-center">
<iconify-icon className="text-brand-gold mb-6 text-3xl" icon="solar:crown-star-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-serif font-light text-brand-black mb-8 tracking-tight">
                Crafted for the Connoisseur
            </h2>
<p className="text-sm md:text-base text-gray-500 leading-loose font-light">
                Velora Atelier is not merely a brand; it is a dialogue between tradition and modernity. We create silhouettes that empower the wearer, using only the finest sustainable fabrics sourced from the world's most exclusive mills. Every stitch tells a story of precision, passion, and timeless luxury.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-brand-white border-t border-gray-100" id="collection">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h3 className="text-2xl font-serif font-light mb-2 tracking-tight">The Collection</h3>
<p className="text-xs text-gray-400 tracking-wide">CURATED FOR EXCELLENCE</p>
</div>
<a className="hidden md:block text-xs uppercase tracking-widest border-b border-brand-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] mb-6 bg-[#EDEBE8]">
<img alt="The Velora Trench" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
<button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-white text-brand-black px-6 py-3 text-xs uppercase tracking-widest transition-all duration-500 shadow-xl w-3/4 text-center">
                            Book Fitting
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-serif font-normal text-brand-black mb-1">The Velora Trench</h4>
<p className="text-xs text-gray-400 font-light">Italian Wool Blend</p>
</div>
<span className="text-sm font-medium font-serif">$890</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] mb-6 bg-[#EDEBE8]">
<img alt="Noir Silk Dress" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
<button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-white text-brand-black px-6 py-3 text-xs uppercase tracking-widest transition-all duration-500 shadow-xl w-3/4 text-center">
                            Book Fitting
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-serif font-normal text-brand-black mb-1">Noir Silk Slip</h4>
<p className="text-xs text-gray-400 font-light">100% Mulberry Silk</p>
</div>
<span className="text-sm font-medium font-serif">$450</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] mb-6 bg-[#EDEBE8]">
<img alt="Structured Blazer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
<button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-white text-brand-black px-6 py-3 text-xs uppercase tracking-widest transition-all duration-500 shadow-xl w-3/4 text-center">
                            Book Fitting
                        </button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-serif font-normal text-brand-black mb-1">The Architect Blazer</h4>
<p className="text-xs text-gray-400 font-light">Structured Linen</p>
</div>
<span className="text-sm font-medium font-serif">$620</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-beige/20" id="trustees">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h3 className="text-3xl font-serif font-light mb-4 tracking-tight">Board of Trustees</h3>
<div className="w-12 h-px bg-brand-gold mx-auto"></div>
<p className="mt-6 text-sm text-gray-500 font-light max-w-2xl mx-auto">
                    The visionaries steering Velora Atelier towards a future of sustainable luxury and innovation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="text-center group">
<div className="w-full aspect-[4/5] bg-gray-200 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="Creative Director" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-serif font-medium text-brand-black">Elena Vesper</h4>
<p className="text-xs uppercase tracking-widest text-brand-gold mt-1">Creative Director</p>
</div>

<div className="text-center group">
<div className="w-full aspect-[4/5] bg-gray-200 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="CEO" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-serif font-medium text-brand-black">Marcus Thorne</h4>
<p className="text-xs uppercase tracking-widest text-brand-gold mt-1">Chief Executive</p>
</div>

<div className="text-center group">
<div className="w-full aspect-[4/5] bg-gray-200 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="Head of Design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1961&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-serif font-medium text-brand-black">Sia Kovar</h4>
<p className="text-xs uppercase tracking-widest text-brand-gold mt-1">Design Lead</p>
</div>

<div className="text-center group">
<div className="w-full aspect-[4/5] bg-gray-200 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="Strategy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-serif font-medium text-brand-black">Julian Reed</h4>
<p className="text-xs uppercase tracking-widest text-brand-gold mt-1">Brand Strategy</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-black text-white" id="events">
<div className="max-w-5xl mx-auto">
<h3 className="text-2xl font-serif font-light mb-16 tracking-tight text-center">Upcoming Soirées</h3>
<div className="space-y-12">

<div className="group flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-white/10">
<div className="w-full md:w-64 aspect-video overflow-hidden bg-gray-800">
<img alt="Runway" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
<h4 className="text-xl font-serif text-white group-hover:text-brand-gold transition-colors">Spring Equinox Runway</h4>
<span className="text-xs uppercase tracking-widest text-brand-gold mt-2 md:mt-0">March 28, 2024</span>
</div>
<p className="text-sm text-gray-400 font-light mb-4 leading-relaxed">
                            An exclusive first look at our botanical-inspired collection, set in the historic botanical gardens. By invitation only.
                        </p>
<div className="flex items-center text-xs text-gray-500 uppercase tracking-widest">
<iconify-icon className="mr-2 text-brand-gold" icon="solar:map-point-linear"></iconify-icon>
                            Paris, 3rd Arrondissement
                        </div>
</div>
</div>

<div className="group flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-white/10">
<div className="w-full md:w-64 aspect-video overflow-hidden bg-gray-800">
<img alt="Showcase" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
<h4 className="text-xl font-serif text-white group-hover:text-brand-gold transition-colors">Lagos Fashion Showcase</h4>
<span className="text-xs uppercase tracking-widest text-brand-gold mt-2 md:mt-0">April 12, 2024</span>
</div>
<p className="text-sm text-gray-400 font-light mb-4 leading-relaxed">
                            Celebrating pan-African luxury design. Velora Atelier presents "Roots &amp; Future" at the annual design week.
                        </p>
<div className="flex items-center text-xs text-gray-500 uppercase tracking-widest">
<iconify-icon className="mr-2 text-brand-gold" icon="solar:map-point-linear"></iconify-icon>
                            Victoria Island, Lagos
                        </div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-block text-xs uppercase tracking-widest border border-white/30 px-8 py-3 text-white hover:bg-white hover:text-brand-black transition-all" href="#">View Calendar</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#f0f0f0]" id="dom">
<div className="max-w-5xl mx-auto">
<div className="mb-12">
<h3 className="text-2xl font-serif font-light mb-2 tracking-tight text-brand-black">The Digital Architecture</h3>
<p className="text-sm text-gray-500 font-light">UNDERSTANDING THE DOCUMENT OBJECT MODEL</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<h4 className="text-lg font-medium mb-4 font-serif">What is the DOM?</h4>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                        The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. It represents the page so that programs can change the document structure, style, and content. The DOM connects web pages to scripts or programming languages.
                    </p>
<div className="p-6 bg-white border border-gray-200 shadow-sm">
<h5 className="text-xs uppercase tracking-widest text-brand-gold mb-4">Tree Structure Visualization</h5>
<div className="flex flex-col items-center space-y-4 text-xs font-mono text-gray-500">
<div className="px-4 py-2 border border-gray-300 rounded bg-gray-50">Document</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="px-4 py-2 border border-gray-300 rounded bg-gray-50">HTML</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="px-3 py-1 border border-gray-300 rounded bg-gray-50">Head</div>
</div>
<div className="flex flex-col items-center">
<div className="px-3 py-1 border border-brand-gold rounded bg-brand-white text-brand-black font-semibold">Body</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="flex gap-2">
<span className="px-2 py-1 border border-gray-200 bg-white rounded">Nav</span>
<span className="px-2 py-1 border border-gray-200 bg-white rounded">Main</span>
<span className="px-2 py-1 border border-gray-200 bg-white rounded">Footer</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-brand-black p-6 rounded-sm text-gray-300 font-mono text-xs overflow-x-auto shadow-2xl">
<div className="flex space-x-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Velora Atelier&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header id="nav"&gt;
      &lt;!-- Navigation --&gt;
    &lt;/header&gt;
    
    &lt;main className="grid-layout"&gt;
      &lt;section className="hero"&gt;...&lt;/section&gt;
      &lt;section className="products"&gt;...&lt;/section&gt;
    &lt;/main&gt;

    &lt;footer&gt;
      &lt;!-- Footer Content --&gt;
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-white" id="appointments">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-16">
<h3 className="text-3xl font-serif font-light mb-4 tracking-tight">Private Consultation</h3>
<p className="text-sm text-gray-500 font-light">
                    Experience Velora Atelier with a dedicated style consultant.
                </p>
</div>
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative">
<input className="peer w-full border-b border-gray-300 py-3 bg-transparent text-brand-black focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-gold peer-focus:text-xs" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="peer w-full border-b border-gray-300 py-3 bg-transparent text-brand-black focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-gold peer-focus:text-xs" htmlFor="email">Email Address</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative">
<input className="peer w-full border-b border-gray-300 py-3 bg-transparent text-brand-black focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent" id="phone" placeholder="Phone" type="tel"/>
<label className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-gold peer-focus:text-xs" htmlFor="phone">Phone Number</label>
</div>
<div className="relative">
<input className="peer w-full border-b border-gray-300 py-3 bg-transparent text-brand-black focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent text-sm" id="date" type="date"/>
<label className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-gold peer-focus:text-xs" htmlFor="date">Preferred Date</label>
</div>
</div>
<div className="relative">
<textarea className="peer w-full border-b border-gray-300 py-3 bg-transparent text-brand-black focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent resize-none" id="message" placeholder="Message" rows="1"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-brand-gold peer-focus:text-xs" htmlFor="message">Nature of Inquiry</label>
</div>
<div className="text-center pt-8">
<button className="bg-brand-black text-white px-12 py-4 text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all duration-300" type="button">
                        Request Appointment
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-brand-dark text-white pt-24 pb-12 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<a className="text-2xl font-serif tracking-tight text-white block mb-6" href="#">VELORA ATELIER</a>
<p className="text-xs text-gray-400 leading-relaxed font-light">
                        Velora Atelier is a registered trademark of Velora Group. All rights reserved. <br/>
                        Designed for the modern elite.
                    </p>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest text-brand-gold mb-6">Boutique</h5>
<ul className="space-y-4 text-xs text-gray-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Haute Couture</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest text-brand-gold mb-6">Maison</h5>
<ul className="space-y-4 text-xs text-gray-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest text-brand-gold mb-6">Client Care</h5>
<ul className="space-y-4 text-xs text-gray-400 font-light">
<li className="flex items-center"><iconify-icon className="mr-2" icon="solar:letter-linear"></iconify-icon> concierge@velora.com</li>
<li className="flex items-center"><iconify-icon className="mr-2" icon="solar:phone-linear"></iconify-icon> +1 (800) 900-2024</li>
<li className="mt-4 flex gap-4 text-lg">
<a className="hover:text-brand-gold transition-colors" href="#"><iconify-icon icon="brandico:instagram"></iconify-icon></a>
<a className="hover:text-brand-gold transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird"></iconify-icon></a>
<a className="hover:text-brand-gold transition-colors" href="#"><iconify-icon icon="brandico:facebook"></iconify-icon></a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-wider">
<p>© 2024 Velora Atelier. EST. Paris.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
