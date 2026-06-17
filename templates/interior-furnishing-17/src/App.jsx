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



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm', 'bg-white/95');
                navbar.classList.remove('bg-white/70');
            } else {
                navbar.classList.remove('shadow-sm', 'bg-white/95');
                navbar.classList.add('bg-white/70');
            }
        });

        // Parallax Effect for Backgrounds
        const parallaxLayers = document.querySelectorAll('.parallax-layer');
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            parallaxLayers.forEach(layer => {
                const speed = 0.15;
                // Only animate if the element is roughly in view
                const limit = layer.offsetTop + layer.offsetHeight + window.innerHeight;
                if(scrolled <= limit) {
                    layer.style.transform = `translateY(${scrolled * speed}px)`;
                }
            });
        });

        // Intersection Observer for Reveal Animations
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
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
      

<div className="bg-[#2a2520] text-[#c2a373] text-xs py-2 text-center tracking-wide font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:tag-linear" strokeWidth="1.5"></iconify-icon>
        Get 10% OFF on your first interior consultation
    </div>

<nav className="fixed w-full z-50 glass-panel border-b border-gray-200/50 transition-all duration-500" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="font-serif text-lg tracking-[0.2em] uppercase font-medium text-[#2a2520] hover:opacity-70 transition-opacity duration-300" href="#">
                    Rampurwala
                </a>

<div className="hidden md:flex space-x-10 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-[#c2a373] transition-colors duration-300" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#c2a373] transition-colors duration-300" href="#products">Collections</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#c2a373] transition-colors duration-300" href="#gallery">Gallery</a>
<a className="px-5 py-2.5 bg-[#2a2520] text-[#faf9f6] text-sm font-medium rounded-lg hover:bg-[#c2a373] transition-all duration-500 shadow-lg shadow-black/5 hover:shadow-xl transform hover:-translate-y-0.5" href="#contact">
                        Free Consultation
                    </a>
</div>

<button className="md:hidden text-gray-800 focus:outline-none transition-transform duration-300 active:scale-90">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1714]">
<div className="absolute inset-0 w-full h-[120%] -top-[10%] parallax-layer">
<img alt="Luxury Living Room" className="w-full h-full object-cover opacity-60 animate-bg-zoom object-center" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/90 via-[#1a1714]/40 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 reveal">
<p className="text-[#c2a373] font-medium tracking-widest uppercase text-xs mb-6 flex items-center justify-center gap-2">
<span className="w-8 h-[1px] bg-[#c2a373]"></span>
                Premium Furnishing
                <span className="w-8 h-[1px] bg-[#c2a373]"></span>
</p>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
                Transform Your Space with <br className="hidden md:block"/> Timeless Elegance
            </h1>
<p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Exquisite curtains, luxurious sofas, orthopedic mattresses, and complete interior furnishing solutions tailored for modern living.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-1">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#c2a373] text-white text-sm font-medium rounded-lg hover:bg-[#b09160] transition-all duration-500 shadow-[0_0_20px_rgba(194,163,115,0.3)] hover:shadow-[0_0_30px_rgba(194,163,115,0.5)] transform hover:-translate-y-1" href="#products">
                    Explore Collection
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/30 text-white text-sm font-medium rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-1" href="#contact">
                    Book Consultation
                </a>
</div>
</div>
</section>

<section className="border-b border-gray-200/50 bg-white/80 backdrop-blur-xl relative z-20 -mt-8 mx-6 md:mx-auto max-w-5xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 reveal">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="reveal reveal-delay-1">
<p className="font-serif text-3xl font-medium text-[#2a2520] tracking-tight">25+</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Years Experience</p>
</div>
<div className="reveal reveal-delay-2">
<p className="font-serif text-3xl font-medium text-[#2a2520] tracking-tight">5k+</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Happy Clients</p>
</div>
<div className="reveal reveal-delay-3">
<p className="font-serif text-3xl font-medium text-[#2a2520] tracking-tight">100%</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Customization</p>
</div>
<div className="reveal reveal-delay-3">
<p className="font-serif text-3xl font-medium text-[#2a2520] tracking-tight">Prem</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Quality Materials</p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal-left">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
<img alt="Craftsmanship" className="w-full h-full object-cover img-hover-zoom hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#f0eadd] rounded-full blur-3xl opacity-60 -z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
</div>
<div className="reveal-right">
<h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2a2520] tracking-tight mb-6 leading-tight">
                        Crafting Comfort, <br/> Defining Lifestyle
                    </h2>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        At Rampurwala Furnishing, we believe your home should tell your story. For over two decades, we have been transforming houses into warm, luxurious homes with our meticulously curated collection of fabrics, furnishings, and bespoke interior solutions.
                    </p>
<p className="text-gray-600 mb-8 text-sm leading-relaxed">
                        From handpicked luxury curtains to custom-crafted sofas and ergonomic mattresses, every piece is a testament to our commitment to quality, durability, and unmatched aesthetic appeal.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-[#2a2520] group">
<iconify-icon className="text-[#c2a373] text-lg group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Master Craftsmanship &amp; Fine Detailing
                        </li>
<li className="flex items-center gap-3 text-sm text-[#2a2520] group">
<iconify-icon className="text-[#c2a373] text-lg group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            Premium Imported &amp; Domestic Fabrics
                        </li>
<li className="flex items-center gap-3 text-sm text-[#2a2520] group">
<iconify-icon className="text-[#c2a373] text-lg group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                            End-to-End Installation Services
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#2a2520] border-b border-[#2a2520] pb-1 hover:text-[#c2a373] hover:border-[#c2a373] transition-all duration-300 group" href="#contact">
                        Learn More About Us <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="products">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2a2520] tracking-tight mb-4">Our Signature Collections</h2>
<p className="text-gray-500 text-sm">Discover our handpicked range of premium furnishings designed to elevate every corner of your space.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer reveal shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 bg-[#faf9f6] transform hover:-translate-y-2">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Curtains" className="w-full h-full object-cover img-hover-zoom group-hover:scale-110" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="font-serif text-xl font-medium text-white mb-1">Curtains &amp; Blinds</h3>
<p className="text-white/80 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Sheer, blackout, and motorized solutions.</p>
<span className="inline-flex items-center gap-1 text-xs font-medium text-[#c2a373] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            Explore <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer reveal reveal-delay-1 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 bg-[#faf9f6] transform hover:-translate-y-2">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Sofas" className="w-full h-full object-cover img-hover-zoom group-hover:scale-110" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="font-serif text-xl font-medium text-white mb-1">Sofa &amp; Upholstery</h3>
<p className="text-white/80 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Custom builds, premium fabrics &amp; restoration.</p>
<span className="inline-flex items-center gap-1 text-xs font-medium text-[#c2a373] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            Explore <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer reveal reveal-delay-2 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 bg-[#faf9f6] transform hover:-translate-y-2">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Mattresses" className="w-full h-full object-cover img-hover-zoom group-hover:scale-110" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="font-serif text-xl font-medium text-white mb-1">Premium Mattresses</h3>
<p className="text-white/80 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Orthopedic, memory foam &amp; pocket spring.</p>
<span className="inline-flex items-center gap-1 text-xs font-medium text-[#c2a373] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            Explore <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer reveal shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 bg-[#faf9f6] transform hover:-translate-y-2">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Wallpapers" className="w-full h-full object-cover img-hover-zoom group-hover:scale-110" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="font-serif text-xl font-medium text-white mb-1">Wallpapers &amp; Decor</h3>
<p className="text-white/80 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Textured, 3D and imported wall coverings.</p>
<span className="inline-flex items-center gap-1 text-xs font-medium text-[#c2a373] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            Explore <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer reveal reveal-delay-1 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 bg-[#faf9f6] transform hover:-translate-y-2">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Rugs" className="w-full h-full object-cover img-hover-zoom group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="font-serif text-xl font-medium text-white mb-1">Carpets &amp; Rugs</h3>
<p className="text-white/80 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Hand-tufted, Persian and modern rugs.</p>
<span className="inline-flex items-center gap-1 text-xs font-medium text-[#c2a373] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            Explore <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer reveal reveal-delay-2 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 bg-[#faf9f6] border border-gray-100 flex items-center justify-center p-8 text-center transform hover:-translate-y-2">
<div>
<div className="w-16 h-16 rounded-full bg-[#f4f0e6] text-[#c2a373] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#c2a373] group-hover:text-white transition-all duration-500">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-[#2a2520] mb-2 transition-colors duration-300">Custom Interior Solutions</h3>
<p className="text-gray-500 text-xs mb-4">Need something unique? We design from scratch.</p>
<button className="px-5 py-2 text-xs font-medium border border-[#2a2520] text-[#2a2520] rounded-lg group-hover:bg-[#2a2520] group-hover:text-white transition-all duration-300">
                            Request Quote
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#faf9f6]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 reveal-left">
<h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2a2520] tracking-tight mb-4">The Rampurwala Advantage</h2>
<p className="text-gray-500 text-sm mb-8">We don't just furnish homes; we build relationships. Our dedication to perfection is visible in every stitch, cut, and installation.</p>
<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] group">
<img alt="Interior Detail" className="w-full h-full object-cover img-hover-zoom group-hover:scale-105" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-8">
<div className="reveal p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
<iconify-icon className="text-3xl text-[#c2a373] mb-4 block" icon="solar:medal-ribbon-linear"></iconify-icon>
<h4 className="font-medium text-[#2a2520] mb-2">Premium Materials</h4>
<p className="text-xs text-gray-500 leading-relaxed">We source the finest fabrics, woods, and foams globally to ensure longevity and luxury.</p>
</div>
<div className="reveal reveal-delay-1 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
<iconify-icon className="text-3xl text-[#c2a373] mb-4 block" icon="solar:wallet-money-linear"></iconify-icon>
<h4 className="font-medium text-[#2a2520] mb-2">Honest Pricing</h4>
<p className="text-xs text-gray-500 leading-relaxed">Luxury doesn't always mean overpriced. We offer exceptional value for premium quality.</p>
</div>
<div className="reveal p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
<iconify-icon className="text-3xl text-[#c2a373] mb-4 block" icon="solar:ruler-pen-linear"></iconify-icon>
<h4 className="font-medium text-[#2a2520] mb-2">Tailored Designs</h4>
<p className="text-xs text-gray-500 leading-relaxed">Every piece is measured and customized to fit your specific spatial and aesthetic needs.</p>
</div>
<div className="reveal reveal-delay-1 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
<iconify-icon className="text-3xl text-[#c2a373] mb-4 block" icon="solar:box-linear"></iconify-icon>
<h4 className="font-medium text-[#2a2520] mb-2">Expert Installation</h4>
<p className="text-xs text-gray-500 leading-relaxed">Our in-house team ensures flawless fitting, delivery, and a hassle-free experience.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-end mb-12 reveal">
<div>
<h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2a2520] tracking-tight mb-2">Our Portfolio</h2>
<p className="text-gray-500 text-sm">Glimpses of spaces we've transformed.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-[#2a2520] hover:text-[#c2a373] transition-colors group">
                    View All <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid rounded-xl overflow-hidden group relative reveal shadow-sm hover:shadow-xl transition-all duration-500">
<img alt="Gallery" className="w-full object-cover img-hover-zoom group-hover:scale-105 group-hover:blur-[2px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="text-white border border-white/50 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Project</span>
</div>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden group relative reveal reveal-delay-1 shadow-sm hover:shadow-xl transition-all duration-500">
<img alt="Gallery" className="w-full object-cover img-hover-zoom group-hover:scale-105 group-hover:blur-[2px]" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="text-white border border-white/50 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Project</span>
</div>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden group relative reveal reveal-delay-2 shadow-sm hover:shadow-xl transition-all duration-500">
<img alt="Gallery" className="w-full object-cover img-hover-zoom group-hover:scale-105 group-hover:blur-[2px]" src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="text-white border border-white/50 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Project</span>
</div>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden group relative reveal shadow-sm hover:shadow-xl transition-all duration-500">
<img alt="Gallery" className="w-full object-cover img-hover-zoom group-hover:scale-105 group-hover:blur-[2px]" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=2758&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="text-white border border-white/50 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Project</span>
</div>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden group relative reveal reveal-delay-1 shadow-sm hover:shadow-xl transition-all duration-500">
<img alt="Gallery" className="w-full object-cover img-hover-zoom group-hover:scale-105 group-hover:blur-[2px]" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="text-white border border-white/50 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Project</span>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<button className="inline-flex items-center gap-2 text-sm font-medium text-[#2a2520] border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    View All Gallery
                </button>
</div>
</div>
</section>

<section className="py-24 bg-[#f4f0e6] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2a2520] tracking-tight mb-12 text-center reveal">What Our Clients Say</h2>

<div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory reveal">

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-grab active:cursor-grabbing">
<div className="flex text-[#c2a373] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-gray-600 text-sm italic mb-6">"The sheer curtains and blackout blinds installed by Rampurwala completely changed our living room. Premium quality and the team was highly professional."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#2a2520] font-serif font-medium">SA</div>
<div>
<h5 className="text-sm font-medium text-[#2a2520]">Sarah Ahmed</h5>
<p className="text-xs text-gray-500">Homeowner</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-grab active:cursor-grabbing">
<div className="flex text-[#c2a373] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-gray-600 text-sm italic mb-6">"Got a custom L-shaped sofa made from them. The fabric choice was vast, and the final product is incredibly comfortable and looks highly luxurious."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#2a2520] font-serif font-medium">MR</div>
<div>
<h5 className="text-sm font-medium text-[#2a2520]">Mohammed Rizwan</h5>
<p className="text-xs text-gray-500">Architect</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-grab active:cursor-grabbing">
<div className="flex text-[#c2a373] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-gray-600 text-sm italic mb-6">"Their wallpaper collection is out of this world. Fast delivery, precise installation without any mess. Highly recommend Rampurwala Furnishing!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#2a2520] font-serif font-medium">NK</div>
<div>
<h5 className="text-sm font-medium text-[#2a2520]">Neha Kapoor</h5>
<p className="text-xs text-gray-500">Interior Designer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 flex items-center justify-center text-center overflow-hidden bg-[#2a2520]">
<div className="absolute inset-0 w-full h-[120%] -top-[10%] parallax-layer">
<img alt="Background" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-[#2a2520]/80 via-[#2a2520]/60 to-[#2a2520]/90"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 reveal">
<h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 drop-shadow-lg">Ready to Upgrade Your Home?</h2>
<p className="text-gray-300 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">Book a free consultation with our design experts today and let's bring your vision to life with premium furnishings.</p>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2a2520] text-sm font-medium rounded-lg hover:bg-gray-100 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 group" href="#contact">
                Contact Us Now <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal-left">
<h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2a2520] tracking-tight mb-4">Get in Touch</h2>
<p className="text-gray-500 text-sm mb-10">Visit our studio or drop us a message. We're here to help you design the perfect space.</p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-[#f4f0e6] text-[#c2a373] flex items-center justify-center shrink-0 group-hover:bg-[#c2a373] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-[#2a2520]">Our Studio</h5>
<p className="text-xs text-gray-500 mt-1">2, City centre Complex Miskin Mala Tarakpur,<br/>Ganga Udyan Rd, Savedi, Ahilyanagar, Maharashtra 414003</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-[#f4f0e6] text-[#c2a373] flex items-center justify-center shrink-0 group-hover:bg-[#c2a373] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-[#2a2520]">Call Us</h5>
<p className="text-xs text-gray-500 mt-1">099701 71752</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-[#f4f0e6] text-[#c2a373] flex items-center justify-center shrink-0 group-hover:bg-[#c2a373] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-[#2a2520]">Email Us</h5>
<p className="text-xs text-gray-500 mt-1">hello@rampurwalafurnishing.com</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-[#f4f0e6] text-[#c2a373] flex items-center justify-center shrink-0 group-hover:bg-[#c2a373] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-[#2a2520]">Hours</h5>
<p className="text-xs text-gray-500 mt-1">Open · Closes 8:30 am Fri</p>
</div>
</div>
</div>

<div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden grayscale contrast-125 opacity-80 border border-gray-200 flex items-center justify-center hover:grayscale-0 hover:opacity-100 transition-all duration-700">
<p className="text-xs text-gray-400">[ Interactive Map Embed ]</p>
</div>
</div>

<div className="bg-[#faf9f6] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm reveal-right">
<h3 className="font-serif text-2xl font-medium text-[#2a2520] mb-6">Send a Message</h3>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-600 mb-1">First Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c2a373]/50 transition-shadow duration-300" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-600 mb-1">Last Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c2a373]/50 transition-shadow duration-300" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-600 mb-1">Phone / WhatsApp</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c2a373]/50 transition-shadow duration-300" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-600 mb-1">Requirement</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c2a373]/50 appearance-none text-gray-600 transition-shadow duration-300 cursor-pointer">
<option>Curtains &amp; Blinds</option>
<option>Sofa &amp; Upholstery</option>
<option>Mattresses</option>
<option>Complete Home Furnishing</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-600 mb-1">Message</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c2a373]/50 transition-shadow duration-300 resize-none" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-[#2a2520] text-white text-sm font-medium rounded-lg hover:bg-[#c2a373] transition-colors duration-500 mt-2 transform active:scale-[0.98]" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#1a1714] text-gray-400 py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8 reveal">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 mb-12">
<div className="md:col-span-2">
<a className="font-serif text-xl tracking-[0.2em] uppercase font-medium text-white mb-6 block hover:opacity-80 transition-opacity" href="#">
                        Rampurwala
                    </a>
<p className="text-xs leading-relaxed max-w-sm">
                        Elevating living spaces with premium furnishings, bespoke designs, and uncompromising quality. Your trusted partner for complete interior solutions.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Quick Links</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-white transition-colors duration-300" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#products">Collections</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#gallery">Our Portfolio</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Social</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1" href="#">
<iconify-icon icon="ri:instagram-line" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1" href="#">
<iconify-icon icon="ri:facebook-fill" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1" href="#">
<iconify-icon icon="ri:pinterest-line" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-wide uppercase">
<p>© 2024 Rampurwala Furnishing. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-500 z-50 animate-bounce" href="https://wa.me/919970171752" style={{animationDuration: '2s'}} target="_blank">
<iconify-icon icon="ri:whatsapp-line" width="30"></iconify-icon>
</a>



    </>
  );
}
