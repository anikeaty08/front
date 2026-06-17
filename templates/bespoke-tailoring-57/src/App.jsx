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



        // Initialize Lucide Icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = btn.querySelector('i');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            document.body.classList.toggle('overflow-hidden');
            
            if (menu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons({ strokeWidth: 1.5 });
        }

        btn.addEventListener('click', toggleMenu);

        // Close menu on link click
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Hide navbar on scroll down, show on scroll up
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollY = window.scrollY;
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-[#F3F0EA]/90 backdrop-blur-md border-b border-black/10 transition-transform duration-300" id="navbar">
<div className="flex items-stretch h-20 md:h-24">

<div className="flex items-center px-6 md:px-12 w-full md:w-auto md:border-r border-black/10 justify-between md:justify-start">
<a className="text-3xl font-semibold tracking-tighter" href="#">atelier.</a>

<button className="md:hidden p-2 text-black" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:flex flex-col justify-center px-8 border-r border-black/10 text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
<span>Premium Tailor</span>
<span>Est. 1987</span>
</div>

<nav className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-16 text-sm font-medium uppercase tracking-widest">
<a className="hover:text-[#F24E2B] transition-colors" href="#services">Services</a>
<a className="hover:text-[#F24E2B] transition-colors" href="#about">About</a>
<a className="hover:text-[#F24E2B] transition-colors" href="#collection">Collection</a>
<a className="hover:text-[#F24E2B] transition-colors" href="#journal">Journal</a>
<a className="hover:text-[#F24E2B] transition-colors" href="#contact">Contact</a>
</nav>

<a className="hidden md:flex items-center gap-3 bg-[#1a1a1a] text-white px-8 lg:px-12 hover:bg-black transition-colors group" href="#book">
<span className="text-sm font-medium uppercase tracking-widest">Book Appointment</span>
<span className="w-2 h-2 rounded-full bg-[#F24E2B] group-hover:scale-150 transition-transform duration-300"></span>
</a>
</div>

<div className="fixed inset-0 bg-[#F3F0EA] z-40 hidden flex-col pt-24 px-6 border-t border-black/10" id="mobile-menu">
<nav className="flex flex-col gap-6 text-2xl font-semibold tracking-tight">
<a className="mobile-link py-2 border-b border-black/10" href="#services">Services</a>
<a className="mobile-link py-2 border-b border-black/10" href="#about">About</a>
<a className="mobile-link py-2 border-b border-black/10" href="#collection">Collection</a>
<a className="mobile-link py-2 border-b border-black/10" href="#journal">Journal</a>
<a className="mobile-link py-2 border-b border-black/10" href="#contact">Contact</a>
</nav>
<a className="mt-8 flex items-center justify-between bg-[#1a1a1a] text-white p-6 rounded-none" href="#book">
<span className="text-base font-medium uppercase tracking-widest">Book Appointment</span>
<span className="w-3 h-3 rounded-full bg-[#F24E2B]"></span>
</a>
</div>
</header>

<section className="pt-20 md:pt-24 min-h-screen flex flex-col md:flex-row relative z-10 border-b border-black/10">

<div className="w-full md:w-5/12 lg:w-[45%] flex flex-col relative border-r border-black/10">

<div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left ml-6 text-xs uppercase tracking-widest text-gray-500 flex items-center gap-4">
<span className="w-1 h-1 rounded-full bg-black"></span>
                Bespoke Experience
            </div>
<div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:pl-32 lg:pr-16 py-12 md:py-0">
<p className="text-[#F24E2B] text-sm font-medium uppercase tracking-widest mb-6 lg:mb-12 flex items-center gap-2">
<span className="w-4 h-[1px] bg-[#F24E2B]"></span> Bespoke Tailoring
                </p>
<h1 className="text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] font-medium tracking-tighter mb-8 md:mb-12">
                    Tailored<br/>
                    for your<br/>
                    legacy<span className="text-[#F24E2B]">.</span>
</h1>
<p className="text-lg md:text-xl text-gray-700 mb-10 md:mb-16 max-w-sm leading-relaxed">
                    Precision in every stitch.<br/>
                    Individuality in every detail.
                </p>

<a className="inline-flex w-fit group" href="#collection">
<div className="bg-[#F24E2B] text-black px-8 py-5 flex items-center justify-center transition-transform group-hover:-translate-y-1">
<span className="text-sm font-medium uppercase tracking-widest">Discover Bespoke</span>
</div>
<div className="bg-black text-white p-5 flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>

<div className="hidden lg:flex absolute bottom-12 left-12 flex-col items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
<span>Scroll<br/>Down</span>
<i className="w-4 h-4" data-lucide="arrow-down"></i>
</div>
</div>

<div className="w-full md:w-5/12 lg:w-[40%] relative min-h-[50vh] md:min-h-0 bg-[#F3F0EA]">

<div className="absolute inset-y-0 left-0 right-0 md:-right-12 bg-[#F24E2B] clip-path-hero"></div>

<img alt="Tailored Suit Model" className="absolute inset-0 w-full h-full object-cover object-top mix-blend-multiply opacity-90 filter grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<img alt="Tailored Suit Model" className="absolute inset-0 w-full h-full object-cover object-top z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 100%)'}}/>

<div className="absolute bottom-12 md:-left-16 z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-black text-white flex items-center justify-center animate-[spin_20s_linear_infinite]">
<svg className="w-full h-full absolute inset-0 text-white p-2" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text className="text-[10px] tracking-widest font-medium uppercase" fill="currentColor">
<textpath href="#circlePath" startoffset="0%">QUALITY • HERITAGE • ARTISTRY •</textpath>
</text>
</svg>
<span className="text-3xl font-semibold tracking-tighter">a.</span>
</div>
</div>

<div className="w-full md:w-2/12 lg:w-[15%] flex flex-col md:border-l border-black/10">

<div className="bg-[#3B66F5] text-white p-6 md:p-8 flex-1 flex flex-col justify-between min-h-[250px]">
<span className="text-xs font-medium uppercase tracking-widest opacity-80">Made to Measure</span>
<div>
<h3 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 opacity-90">01</h3>
<div className="w-full h-[1px] bg-white/30 mb-4"></div>
<p className="text-sm md:text-base opacity-90 leading-relaxed">Crafted around you.<br/>Down to the last detail.</p>
</div>
</div>

<div className="bg-[#F2C94C] p-6 md:p-8 flex-1 relative overflow-hidden flex flex-col justify-between min-h-[250px] text-black">
<img alt="Yellow Fabric Texture" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&amp;w=1972&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 flex justify-between items-start">
<div className="text-xs font-medium uppercase tracking-widest leading-relaxed">
                        40.7128° N<br/>74.0060° W
                    </div>
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>

<a className="bg-[#1a1a1a] text-white p-6 md:p-8 h-[120px] md:h-[150px] flex items-center justify-between group hover:bg-black transition-colors" href="#collection">
<span className="text-xs md:text-sm font-medium uppercase tracking-widest w-1/2">View Collection</span>
<div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</a>
</div>

<div className="absolute bottom-0 left-0 right-0 md:w-[85%] border-t border-black/10 bg-[#F3F0EA] hidden md:flex items-center justify-between px-12 py-6 z-10">
<div className="flex items-center gap-16 text-xs font-medium uppercase tracking-widest w-full">
<span className="flex-1">Personal Consultation</span>
<span className="w-8 h-[1px] bg-black/20"></span>
<span className="flex-1 text-center">Finest Materials</span>
<span className="w-8 h-[1px] bg-black/20"></span>
<span className="flex-1 text-center">Expert Craftsmanship</span>
<span className="w-8 h-[1px] bg-black/20"></span>
<span className="flex-1 text-right">Timeless Style</span>
</div>

<div className="ml-16 grid grid-cols-4 gap-1 opacity-40">
<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-black/10 relative" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/5] bg-gray-200 overflow-hidden relative">
<img alt="Tailor working on fabric" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-white p-8 border border-black/10 shadow-xl max-w-xs">
<p className="text-4xl font-semibold tracking-tighter mb-2">35+</p>
<p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Years of Mastery in Savile Row Traditions.</p>
</div>
</div>
<div className="order-1 lg:order-2 flex flex-col items-start">
<div className="text-xs font-medium uppercase tracking-widest mb-8 flex items-center gap-4 text-gray-500">
<span>02</span>
<span className="w-12 h-[1px] bg-black/20"></span>
<span>The Philosophy</span>
</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-10 leading-tight">
                    An uncompromising<br/> dedication to <span className="text-[#3B66F5] italic">form</span>.
                </h2>
<p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                    We believe a suit is more than a garment; it is an architectural structure built for the individual. Our process eschews mass production in favor of absolute personalization.
                </p>
<p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-xl">
                    Every pattern is drawn from scratch. Every lapel is rolled by hand. It takes over eighty hours to construct an atelier bespoke suit, resulting in a silhouette that is distinctively yours.
                </p>
<a className="group flex items-center gap-4 text-sm font-medium uppercase tracking-widest pb-2 border-b border-black hover:text-[#F24E2B] hover:border-[#F24E2B] transition-colors" href="#philosophy-details">
                    Read our manifesto
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="border-b border-black/10 bg-white" id="services">
<div className="grid grid-cols-1 lg:grid-cols-3">

<div className="p-8 md:p-16 lg:border-r border-black/10 bg-[#F3F0EA] flex flex-col justify-between">
<div>
<div className="text-xs font-medium uppercase tracking-widest mb-8 text-gray-500">03 — Process</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-8">How a legacy is built.</h2>
</div>
<p className="text-lg text-gray-600 max-w-xs">Three rigorous stages to ensure absolute perfection in fit, drape, and character.</p>
</div>

<div className="p-8 md:p-16 lg:border-r border-black/10 hover:bg-[#F3F0EA] transition-colors group cursor-pointer border-t lg:border-t-0 border-black/10">
<div className="flex justify-between items-start mb-16">
<h3 className="text-3xl font-medium tracking-tighter group-hover:text-[#F24E2B] transition-colors">Consultation<br/>&amp; Measurement</h3>
<span className="text-lg text-gray-400 font-medium">I</span>
</div>
<p className="text-base text-gray-600 mb-8">Over 30 distinct measurements are taken while discussing your lifestyle, preferences, and fabric choices from our curated mills.</p>
<div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-[#F24E2B] group-hover:border-[#F24E2B] group-hover:text-white transition-all">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>

<div className="p-8 md:p-16 hover:bg-[#F3F0EA] transition-colors group cursor-pointer border-t lg:border-t-0 border-black/10">
<div className="flex justify-between items-start mb-16">
<h3 className="text-3xl font-medium tracking-tighter group-hover:text-[#3B66F5] transition-colors">The Basted<br/>Fitting</h3>
<span className="text-lg text-gray-400 font-medium">II</span>
</div>
<p className="text-base text-gray-600 mb-8">Your garment is temporarily stitched together in white basting thread. We assess the raw architecture and make structural adjustments.</p>
<div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-[#3B66F5] group-hover:border-[#3B66F5] group-hover:text-white transition-all">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 border-t border-black/10">

<div className="p-8 md:p-16 lg:border-r border-black/10 hover:bg-[#F3F0EA] transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-12">
<h3 className="text-3xl font-medium tracking-tighter">Forward Fitting</h3>
<span className="text-lg text-gray-400 font-medium">III</span>
</div>
<p className="text-base text-gray-600">The suit is nearing completion. We refine the drape, check the sleeve pitch, and select final button positionings.</p>
</div>

<div className="p-8 md:p-16 hover:bg-[#F3F0EA] transition-colors group cursor-pointer border-t lg:border-t-0 border-black/10">
<div className="flex justify-between items-start mb-12">
<h3 className="text-3xl font-medium tracking-tighter">Final Delivery</h3>
<span className="text-lg text-gray-400 font-medium">IV</span>
</div>
<p className="text-base text-gray-600">The culmination of weeks of handwork. A final try-on to ensure absolute satisfaction before the garment enters your wardrobe.</p>
</div>
</div>
</section>

<section className="py-24 border-b border-black/10 bg-[#1a1a1a] text-white overflow-hidden" id="collection">
<div className="px-6 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
<div>
<div className="text-xs font-medium uppercase tracking-widest mb-4 text-gray-400">04 — Lookbook</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter">Current Season.</h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="flex gap-8 px-6 md:px-12 lg:px-24 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">

<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden mb-6 relative">
<img alt="Navy Double Breasted" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="bg-white text-black px-6 py-3 text-sm font-medium uppercase tracking-widest">View Details</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-medium tracking-tight mb-1">The Navy Overcoat</h4>
<p className="text-sm text-gray-400">Heavyweight Cashmere Blend</p>
</div>
<span className="text-xs font-medium uppercase tracking-widest bg-white/10 px-3 py-1">AW23</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden mb-6 relative">
<img alt="Grey Three Piece" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#F2C94C]"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-medium tracking-tight mb-1">Charcoal Three-Piece</h4>
<p className="text-sm text-gray-400">Super 150s Merino Wool</p>
</div>
<span className="text-xs font-medium uppercase tracking-widest bg-white/10 px-3 py-1">Core</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden mb-6 relative">
<img alt="Tweed Jacket" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-medium tracking-tight mb-1">Donegal Tweed Sports Coat</h4>
<p className="text-sm text-gray-400">Handwoven Irish Tweed</p>
</div>
<span className="text-xs font-medium uppercase tracking-widest bg-white/10 px-3 py-1">Casual</span>
</div>
</div>
</div>
</section>

<section className="border-b border-black/10 bg-[#F3F0EA]">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative min-h-[50vh] lg:min-h-full border-b lg:border-b-0 lg:border-r border-black/10">
<img alt="Fabrics" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#3B66F5]/20 mix-blend-multiply"></div>
</div>

<div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
<div className="text-xs font-medium uppercase tracking-widest mb-8 text-gray-500">05 — Materials</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-8 leading-tight">Sourced from the finest mills globally.</h2>
<p className="text-lg text-gray-600 mb-12 leading-relaxed">
                    A suit is only as good as its foundation. We partner exclusively with legendary mills in Biella, Italy and Huddersfield, England to secure short-run, exceptional cloths.
                </p>

<div className="space-y-6">
<details className="group border-b border-black/20 pb-6" open="">
<summary className="flex justify-between items-center cursor-pointer list-none text-xl font-medium tracking-tight">
<span>Worsted Wools</span>
<span className="transition group-open:rotate-45"><i className="w-5 h-5" data-lucide="plus"></i></span>
</summary>
<p className="text-base text-gray-600 mt-4 leading-relaxed pr-8">
                            Ranging from robust Super 110s for daily resilience to ethereal Super 180s for special occasions. Woven for optimal drape and breathability.
                        </p>
</details>
<details className="group border-b border-black/20 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-xl font-medium tracking-tight">
<span>Irish Linens &amp; Cottons</span>
<span className="transition group-open:rotate-45"><i className="w-5 h-5" data-lucide="plus"></i></span>
</summary>
<p className="text-base text-gray-600 mt-4 leading-relaxed pr-8">
                            Perfect for warmer climates. Our linens are heavy enough to tailor beautifully while retaining their characteristic cooling properties.
                        </p>
</details>
<details className="group border-b border-black/20 pb-6">
<summary className="flex justify-between items-center cursor-pointer list-none text-xl font-medium tracking-tight">
<span>Cashmere &amp; Silks</span>
<span className="transition group-open:rotate-45"><i className="w-5 h-5" data-lucide="plus"></i></span>
</summary>
<p className="text-base text-gray-600 mt-4 leading-relaxed pr-8">
                            Ultimate luxury for overcoats and evening wear. Unparalleled softness with a subtle, rich luster.
                        </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-b border-black/10">
<div className="text-center mb-20">
<div className="text-xs font-medium uppercase tracking-widest mb-4 text-gray-500">06 — Signatures</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter">The Devil is in the Details.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="aspect-square bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Buttonhole" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1592878940526-0214b0f374f6?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F24E2B] transition-colors duration-300 z-10 m-4"></div>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2">Milanese Buttonhole</h4>
<p className="text-sm text-gray-500">Hand-stitched with silk thread over a gimp cord, taking nearly an hour per hole.</p>
</div>

<div className="group">
<div className="aspect-square bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Lapel Roll" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2">The Lapel Roll</h4>
<p className="text-sm text-gray-500">Pad-stitched by hand into the canvas to create a lively, three-dimensional belly.</p>
</div>

<div className="group">
<div className="aspect-square bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Horn Buttons" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2">Genuine Horn Buttons</h4>
<p className="text-sm text-gray-500">Sourced from sustainable ox horn, each unique in grain and color.</p>
</div>

<div className="group">
<div className="aspect-square bg-gray-100 mb-6 overflow-hidden relative">
<img alt="Pick Stitching" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2">Pick Stitching</h4>
<p className="text-sm text-gray-500">Subtle hand-stitching along the edges to keep facings crisp and show craftsmanship.</p>
</div>
</div>
</section>

<section className="border-b border-black/10 bg-[#F3F0EA]">
<div className="grid grid-cols-1 lg:grid-cols-12 h-full">
<div className="lg:col-span-4 p-12 md:p-24 border-r border-black/10 flex flex-col justify-between min-h-[50vh]">
<div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-12">07 — The Journal</div>
<h3 className="text-4xl font-medium tracking-tighter leading-tight mb-8 hover:text-[#3B66F5] transition-colors cursor-pointer">
                    "A suit should feel like a second skin, not a uniform."
                </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-black rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium tracking-tight uppercase">Arthur Pendelton</p>
<p className="text-xs text-gray-500">Client since 2014</p>
</div>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border-t lg:border-t-0 border-black/10">
<a className="block p-8 md:p-12 border-b sm:border-b-0 sm:border-r border-black/10 hover:bg-white transition-colors group" href="#">
<div className="aspect-[4/3] bg-gray-200 mb-8 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">Guide</div>
<h4 className="text-2xl font-medium tracking-tight mb-4">Caring for Bespoke Wool</h4>
<p className="text-sm text-gray-600">Ensure your garments last generations with proper resting and brushing techniques.</p>
</a>
<a className="block p-8 md:p-12 hover:bg-white transition-colors group" href="#">
<div className="aspect-[4/3] bg-gray-200 mb-8 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="text-xs font-medium uppercase tracking-widest text-[#F24E2B] mb-4">Editorial</div>
<h4 className="text-2xl font-medium tracking-tight mb-4">The Return of the Double Breasted</h4>
<p className="text-sm text-gray-600">Exploring the modern silhouette of a classic powerhouse cut.</p>
</a>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-24" id="book">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 border-b border-white/20 pb-24">

<div>
<h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none mb-8">
                    Begin<br/>
                    your<br/>
                    journey.
                </h2>
<p className="text-lg text-gray-400 max-w-sm mb-12">Visit our studio in London or arrange for our traveling tailor service.</p>
<div className="flex gap-4">
<div className="w-12 h-12 bg-[#F24E2B] flex items-center justify-center">
<i className="w-5 h-5 text-black" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm font-medium tracking-widest uppercase mb-1">London Studio</p>
<p className="text-sm text-gray-400">14 Savile Row, Mayfair<br/>London, W1S 3JN</p>
</div>
</div>
</div>

<div className="bg-white/5 p-8 md:p-12 border border-white/10">
<h3 className="text-2xl font-medium tracking-tight mb-8">Request an Appointment</h3>
<form className="space-y-8">
<div className="relative">
<input className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-[#F24E2B] transition-colors peer placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-3 text-sm text-gray-400 uppercase tracking-widest peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F24E2B] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-[#F24E2B] transition-colors peer placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-3 text-sm text-gray-400 uppercase tracking-widest peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F24E2B] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm" htmlFor="email">Email Address</label>
</div>
<div className="space-y-4 pt-4">
<p className="text-xs uppercase tracking-widest text-gray-400">Service of Interest</p>

<div className="flex flex-col sm:flex-row gap-4">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors relative">
<input checked="" className="peer sr-only" name="service" type="radio"/>
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm font-medium">Bespoke Suit</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors relative">
<input className="peer sr-only" name="service" type="radio"/>
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm font-medium">Made to Measure</span>
</label>
</div>
</div>
<button className="mt-12 w-full bg-white text-black py-4 px-8 text-sm font-medium uppercase tracking-widest hover:bg-[#F24E2B] hover:text-white transition-colors flex items-center justify-center gap-3 group" type="button">
                        Submit Request
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<a className="text-3xl font-semibold tracking-tighter" href="#">atelier.</a>
<div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-400">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Pinterest</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<p className="text-xs text-gray-500 uppercase tracking-widest">© 2023 Atelier Bespoke. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
