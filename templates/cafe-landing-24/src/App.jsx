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



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Navbar Scroll Effect & Back to Top Visibility
            const navbar = document.getElementById('navbar');
            const backToTopBtn = document.getElementById('back-to-top');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[#0d0d0d]/80', 'backdrop-blur-md', 'border-[#c8922a]/10', 'py-3');
                    navbar.classList.remove('py-4', 'border-transparent');
                } else {
                    navbar.classList.remove('bg-[#0d0d0d]/80', 'backdrop-blur-md', 'border-[#c8922a]/10', 'py-3');
                    navbar.classList.add('py-4', 'border-transparent');
                }

                if (window.scrollY > 500) {
                    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                    backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                } else {
                    backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                    backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                }
            });

            // Back to top click
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // 2. Mobile Menu Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = mobileBtn.querySelector('.menu-icon');
            const closeIcon = mobileBtn.querySelector('.close-icon');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function toggleMenu() {
                const isOpen = !mobileMenu.classList.contains('translate-x-full');
                if (isOpen) {
                    mobileMenu.classList.add('translate-x-full');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    document.body.style.overflow = '';
                } else {
                    mobileMenu.classList.remove('translate-x-full');
                    menuIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                }
            }

            mobileBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });

            // 3. Scroll Reveal Animation (Vanilla JS alternative to AOS)
            const revealElements = document.querySelectorAll('.reveal');
            
            const revealOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Run once
                });
            }, revealOptions);

            revealElements.forEach(el => {
                revealOnScroll.observe(el);
            });
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
      

<nav className="fixed w-full z-50 transition-all duration-300 px-6 md:px-12 top-0 border-b" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<a className="font-serif text-xl tracking-tighter font-medium text-[#c8922a] flex items-center gap-2 z-50 relative" href="#">
                FAM CAFE.
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-light text-[#f5f0e8]/80">
<a className="hover:text-[#c8922a] transition-colors" href="#home">Home</a>
<a className="hover:text-[#c8922a] transition-colors" href="#about">About</a>
<a className="hover:text-[#c8922a] transition-colors" href="#menu">Menu</a>
<a className="hover:text-[#c8922a] transition-colors" href="/#gallery">Gallery</a>
<a className="hover:text-[#c8922a] transition-colors" href="#contact">Contact</a>
<a className="px-5 py-2 rounded-full border border-[#c8922a]/50 text-[#c8922a] hover:bg-[#c8922a] hover:text-[#0d0d0d] transition-all duration-300" href="#contact">Book Table</a>
</div>

<button className="md:hidden text-[#f5f0e8] z-50 relative p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="menu-icon" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon className="close-icon hidden" icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-8 text-lg font-serif" id="mobile-menu">
<a className="mobile-link text-[#f5f0e8] hover:text-[#c8922a] transition-colors" href="#home">Home</a>
<a className="mobile-link text-[#f5f0e8] hover:text-[#c8922a] transition-colors" href="#about">About</a>
<a className="mobile-link text-[#f5f0e8] hover:text-[#c8922a] transition-colors" href="#menu">Menu</a>
<a className="mobile-link text-[#f5f0e8] hover:text-[#c8922a] transition-colors" href="#gallery">Gallery</a>
<a className="mobile-link text-[#f5f0e8] hover:text-[#c8922a] transition-colors" href="#contact">Contact</a>
<a className="mobile-link mt-4 px-8 py-3 rounded-full bg-[#c8922a] text-[#0d0d0d] font-sans text-sm font-medium" href="#contact">Book a Table</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b to-[#0d0d0d] z-10 from-black/80 via-black/50"></div>
<img alt="Coffee shop atmosphere" className="w-full h-full object-cover transform scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm text-xs text-[#c8922a] mb-6 tracking-wide border-white/10 bg-white/5">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
                Premium Roastery
            </div>
<h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight drop-shadow-lg text-white">
                Where Every Sip <br/> <span className="text-[#c8922a] italic font-normal">Tells a Story</span>
</h1>
<p className="text-base md:text-lg font-light text-[#f5f0e8]/80 mb-10 max-w-2xl mx-auto drop-shadow-md">
                Handcrafted coffee, cozy ambiance, and unforgettable moments waiting for you in the heart of the city.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-[#f5f0e8] transition-colors flex items-center justify-center gap-2 text-sm font-medium text-[#0d0d0d] bg-[#c8922a] w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#menu">
                    Explore Our Menu
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full border backdrop-blur-sm text-sm font-medium hover:border-[#c8922a] hover:text-[#c8922a] transition-colors flex items-center justify-center gap-2 border-white/20 text-white" href="#contact">
                    Book a Table
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 animate-bounce">
<span className="text-xs font-light tracking-widest uppercase text-white">Scroll</span>
<iconify-icon className="text-white" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</section>

<section className="md:px-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="about">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
<div className="absolute inset-0 bg-[#c8922a]/10 mix-blend-overlay z-10 hover:opacity-0 transition-opacity duration-500"></div>
<img alt="Barista pouring coffee" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#c8922a]/30 rounded-full -z-10"></div>
<div className="absolute -top-6 -left-6 w-24 h-24 border rounded-full -z-10 border-white/10"></div>
</div>
<div className="reveal delay-100">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6">Mastering the Art of <br/>Perfect Brewing</h2>
<div className="space-y-4 text-sm font-light leading-relaxed text-white/70">
<p>
                        Founded with a passion for exceptional coffee, Fam Cafe is more than just a place to get your morning fix. We are a sanctuary for coffee lovers, sourcing only the finest ethically grown beans from around the world.
                    </p>
<p>
                        Our master roasters and expert baristas treat every cup as a canvas, blending science and art to extract the most delicate flavors and aromas, ensuring an unparalleled tasting experience.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
<div>
<iconify-icon className="text-[#c8922a] mb-3" icon="solar:cup-hot-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-serif mb-1 text-white">10+</h4>
<p className="text-xs text-white/50">Years of Craft</p>
</div>
<div>
<iconify-icon className="text-[#c8922a] mb-3" icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-serif mb-1 text-white">50+</h4>
<p className="text-xs text-white/50">Coffee Blends</p>
</div>
<div>
<iconify-icon className="text-[#c8922a] mb-3" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-serif mb-1 text-white">1k+</h4>
<p className="text-xs text-white/50">Daily Guests</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#1a0f0a] border-y relative overflow-hidden border-white/5">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c8922a]/5 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
<div className="bg-[#0d0d0d]/50 backdrop-blur-md border p-6 rounded-2xl text-center hover:-translate-y-1 hover:border-[#c8922a]/30 transition-all duration-300 reveal border-white/5">
<div className="w-12 h-12 mx-auto bg-[#c8922a]/10 rounded-full flex items-center justify-center mb-4 text-[#c8922a]">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2 tracking-tight text-white">Premium Beans</h3>
<p className="text-xs font-light text-white/50">Ethically sourced single-origin beans.</p>
</div>
<div className="bg-[#0d0d0d]/50 backdrop-blur-md border p-6 rounded-2xl text-center hover:-translate-y-1 hover:border-[#c8922a]/30 transition-all duration-300 reveal delay-100 border-white/5">
<div className="w-12 h-12 mx-auto bg-[#c8922a]/10 rounded-full flex items-center justify-center mb-4 text-[#c8922a]">
<iconify-icon icon="solar:user-speak-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2 tracking-tight text-white">Expert Baristas</h3>
<p className="text-xs font-light text-white/50">Masters of the perfect pour and latte art.</p>
</div>
<div className="bg-[#0d0d0d]/50 backdrop-blur-md border p-6 rounded-2xl text-center hover:-translate-y-1 hover:border-[#c8922a]/30 transition-all duration-300 reveal delay-200 border-white/5">
<div className="w-12 h-12 mx-auto bg-[#c8922a]/10 rounded-full flex items-center justify-center mb-4 text-[#c8922a]">
<iconify-icon icon="solar:sofa-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2 tracking-tight text-white">Cozy Atmosphere</h3>
<p className="text-xs font-light text-white/50">Designed for comfort and deep conversations.</p>
</div>
<div className="bg-[#0d0d0d]/50 backdrop-blur-md border p-6 rounded-2xl text-center hover:-translate-y-1 hover:border-[#c8922a]/30 transition-all duration-300 reveal delay-300 border-white/5">
<div className="w-12 h-12 mx-auto bg-[#c8922a]/10 rounded-full flex items-center justify-center mb-4 text-[#c8922a]">
<iconify-icon icon="solar:wifi-router-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2 tracking-tight text-white">Free High-Speed WiFi</h3>
<p className="text-xs font-light text-white/50">Work or study without interruptions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="menu">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-[#c8922a] text-xs tracking-widest uppercase mb-2 block">Our Selection</span>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-4">Signature Brews</h2>
<p className="text-sm font-light text-white/60">Discover our carefully curated menu, featuring classic favorites and unique seasonal creations crafted to perfection.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-[#1a0f0a] rounded-2xl overflow-hidden border hover:border-[#c8922a]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,146,42,0.1)] reveal border-white/5">
<div className="h-60 overflow-hidden relative">
<div className="absolute inset-0 group-hover:bg-transparent transition-colors z-10 bg-black/20"></div>
<img alt="Espresso" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg font-medium text-white">Classic Espresso</h3>
<span className="text-[#c8922a] font-medium text-sm">$3.50</span>
</div>
<p className="text-xs font-light mb-6 line-clamp-2 text-white/60">A concentrated shot of intensely flavored coffee, extracted with precision.</p>
<button className="w-full py-2.5 rounded-full border text-xs font-medium group-hover:bg-[#c8922a] group-hover:text-[#0d0d0d] group-hover:border-transparent transition-all duration-300 border-white/10 text-white">Order Now</button>
</div>
</div>

<div className="group bg-[#1a0f0a] rounded-2xl overflow-hidden border hover:border-[#c8922a]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,146,42,0.1)] reveal delay-100 border-white/5">
<div className="h-60 overflow-hidden relative">
<img alt="Cappuccino" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg font-medium text-white">Velvet Cappuccino</h3>
<span className="text-[#c8922a] font-medium text-sm">$4.50</span>
</div>
<p className="text-xs font-light mb-6 line-clamp-2 text-white/60">Equal parts espresso, steamed milk, and rich microfoam dusted with cocoa.</p>
<button className="w-full py-2.5 rounded-full border text-xs font-medium group-hover:bg-[#c8922a] group-hover:text-[#0d0d0d] group-hover:border-transparent transition-all duration-300 border-white/10 text-white">Order Now</button>
</div>
</div>

<div className="group bg-[#1a0f0a] rounded-2xl overflow-hidden border hover:border-[#c8922a]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,146,42,0.1)] reveal delay-200 border-white/5">
<div className="h-60 overflow-hidden relative">
<img alt="Cold Brew" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg font-medium text-white">Nitro Cold Brew</h3>
<span className="text-[#c8922a] font-medium text-sm">$5.00</span>
</div>
<p className="text-xs font-light mb-6 line-clamp-2 text-white/60">Steeped for 24 hours and infused with nitrogen for a creamy, stout-like texture.</p>
<button className="w-full py-2.5 rounded-full border text-xs font-medium group-hover:bg-[#c8922a] group-hover:text-[#0d0d0d] group-hover:border-transparent transition-all duration-300 border-white/10 text-white">Order Now</button>
</div>
</div>

<div className="group bg-[#1a0f0a] rounded-2xl overflow-hidden border hover:border-[#c8922a]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,146,42,0.1)] reveal border-white/5">
<div className="h-60 overflow-hidden relative">
<img alt="Caramel Latte" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg font-medium text-white">Salted Caramel Latte</h3>
<span className="text-[#c8922a] font-medium text-sm">$5.50</span>
</div>
<p className="text-xs font-light mb-6 line-clamp-2 text-white/60">Rich espresso, steamed milk, and house-made salted caramel syrup.</p>
<button className="w-full py-2.5 rounded-full border text-xs font-medium group-hover:bg-[#c8922a] group-hover:text-[#0d0d0d] group-hover:border-transparent transition-all duration-300 border-white/10 text-white">Order Now</button>
</div>
</div>

<div className="group bg-[#1a0f0a] rounded-2xl overflow-hidden border hover:border-[#c8922a]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,146,42,0.1)] reveal delay-100 border-white/5">
<div className="h-60 overflow-hidden relative">
<img alt="Matcha Fusion" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg font-medium text-white">Matcha Fusion</h3>
<span className="text-[#c8922a] font-medium text-sm">$6.00</span>
</div>
<p className="text-xs font-light mb-6 line-clamp-2 text-white/60">Ceremonial grade matcha whisked with oat milk and a hint of vanilla bean.</p>
<button className="w-full py-2.5 rounded-full border text-xs font-medium group-hover:bg-[#c8922a] group-hover:text-[#0d0d0d] group-hover:border-transparent transition-all duration-300 border-white/10 text-white">Order Now</button>
</div>
</div>

<div className="group bg-[#1a0f0a] rounded-2xl overflow-hidden border hover:border-[#c8922a]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,146,42,0.1)] reveal delay-200 border-white/5">
<div className="h-60 overflow-hidden relative">
<img alt="Hazelnut Mocha" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg font-medium text-white">Hazelnut Mocha</h3>
<span className="text-[#c8922a] font-medium text-sm">$5.75</span>
</div>
<p className="text-xs font-light mb-6 line-clamp-2 text-white/60">Dark chocolate ganache, espresso, toasted hazelnut, and whipped cream.</p>
<button className="w-full py-2.5 rounded-full border text-xs font-medium group-hover:bg-[#c8922a] group-hover:text-[#0d0d0d] group-hover:border-transparent transition-all duration-300 border-white/10 text-white">Order Now</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a0f0a] border-t border-white/5" id="gallery">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex justify-between items-end mb-12 px-2 reveal">
<div>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-2">Moments at Fam</h2>
<p className="text-sm font-light text-white/60">Glimpses of our daily craft and cozy corners.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#c8922a] transition-colors border-white/10 hover:text-black"><iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#c8922a] transition-colors border-white/10 hover:text-black"><iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 reveal">

<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl h-64 md:h-[530px]">
<img alt="Cafe interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 opacity-0 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm items-center justify-center">
<iconify-icon className="transform scale-50 group-hover:scale-100 transition-transform duration-300 text-white" icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl h-32 md:h-64">
<img alt="Coffee beans" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-[#c8922a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="relative group overflow-hidden rounded-xl h-32 md:h-64">
<img alt="Latte art" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-[#c8922a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="relative group overflow-hidden rounded-xl h-32 md:h-64">
<img alt="Pastries" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-[#c8922a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="relative group overflow-hidden rounded-xl h-32 md:h-64">
<img alt="Barista working" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-[#c8922a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 overflow-hidden">
<div className="text-center mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-4">Words From Our Guests</h2>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4 reveal delay-100">

<div className="min-w-[300px] md:min-w-[400px] bg-[#1a0f0a] border p-8 rounded-2xl snap-center relative border-white/5">
<iconify-icon className="absolute top-6 right-6 text-white/5" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex gap-1 text-[#c8922a] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-light mb-6 leading-relaxed text-white/80">"The nitro cold brew here is life-changing. I've been to many specialty coffee shops around the world, and Fam Cafe holds its ground among the best. The aesthetic is incredibly moody and perfect for working."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full grayscale" src="https://i.pravatar.cc/150?img=32"/>
<div>
<h4 className="text-xs font-medium text-white">Sarah Jenkins</h4>
<span className="text-[10px] text-white/40">Local Guide</span>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-[#1a0f0a] border p-8 rounded-2xl snap-center relative border-white/5">
<iconify-icon className="absolute top-6 right-6 text-white/5" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex gap-1 text-[#c8922a] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-light mb-6 leading-relaxed text-white/80">"Exceptional service and the pastries are baked fresh daily. The baristas really know their craft and take the time to explain the flavor profiles of different beans. My new weekend spot."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full grayscale" src="https://i.pravatar.cc/150?img=11"/>
<div>
<h4 className="text-xs font-medium text-white">David Miller</h4>
<span className="text-[10px] text-white/40">Coffee Enthusiast</span>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-[#1a0f0a] border p-8 rounded-2xl snap-center relative border-white/5">
<iconify-icon className="absolute top-6 right-6 text-white/5" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex gap-1 text-[#c8922a] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm font-light mb-6 leading-relaxed text-white/80">"The atmosphere is top-notch. Very intimate lighting, comfortable seating, and the playlist is always perfect. The Matcha Fusion is surprisingly good, definitely recommend it if you want something different."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full grayscale" src="https://i.pravatar.cc/150?img=47"/>
<div>
<h4 className="text-xs font-medium text-white">Elena Rostova</h4>
<span className="text-[10px] text-white/40">Freelancer</span>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-[#1a0f0a] border p-8 rounded-2xl snap-center relative border-white/5">
<iconify-icon className="absolute top-6 right-6 text-white/5" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex gap-1 text-[#c8922a] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-light mb-6 leading-relaxed text-white/80">"A hidden gem. The attention to detail in everything from the cups to the latte art is impressive. I reserved a table for a small meeting and the staff was incredibly accommodating."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full grayscale" src="https://i.pravatar.cc/150?img=68"/>
<div>
<h4 className="text-xs font-medium text-white">James Chen</h4>
<span className="text-[10px] text-white/40">Entrepreneur</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a0f0a] border-y border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-5 gap-16">

<div className="lg:col-span-2 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-8">Visit Us</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-[#c8922a] shrink-0 border-white/10">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-white">Location</h4>
<p className="text-xs font-light leading-relaxed text-white/60">124 Espresso Lane, Coffee District<br/>Metropolis, NY 10012</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-[#c8922a] shrink-0 border-white/10">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-white">Opening Hours</h4>
<p className="text-xs font-light leading-relaxed text-white/60">Mon - Fri: 7:00 AM - 8:00 PM<br/>Sat - Sun: 8:00 AM - 9:00 PM</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-[#c8922a] shrink-0 border-white/10">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-white">Contact</h4>
<p className="text-xs font-light leading-relaxed text-white/60">hello@famcafe.com<br/>+1 (555) 123-4567</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-[#0d0d0d] p-8 md:p-10 rounded-3xl border reveal delay-100 border-white/5">
<h3 className="font-serif text-2xl font-medium mb-6">Reserve a Table</h3>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Reservation submitted successfully!');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative">
<input className="w-full bg-transparent border-b focus:border-[#c8922a] outline-none py-2 text-sm text-[#f5f0e8] placeholder:text-transparent peer transition-colors border-white/20" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 top-2 text-xs transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c8922a] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] text-white/40" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b focus:border-[#c8922a] outline-none py-2 text-sm text-[#f5f0e8] placeholder:text-transparent peer transition-colors border-white/20" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 top-2 text-xs transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c8922a] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] text-white/40" htmlFor="email">Email Address</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b focus:border-[#c8922a] outline-none py-2 text-sm text-[#f5f0e8] placeholder:text-transparent peer transition-colors border-white/20" id="phone" placeholder="Phone" required="" type="tel"/>
<label className="absolute left-0 top-2 text-xs transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c8922a] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] text-white/40" htmlFor="phone">Phone Number</label>
</div>
<div className="relative">
<select className="w-full bg-transparent border-b focus:border-[#c8922a] outline-none py-2 text-sm appearance-none transition-colors cursor-pointer border-white/20 text-white/80" id="guests">
<option className="bg-[#1a0f0a]" disabled="" selected="" value="">Number of Guests</option>
<option className="bg-[#1a0f0a]" value="1">1 Person</option>
<option className="bg-[#1a0f0a]" value="2">2 People</option>
<option className="bg-[#1a0f0a]" value="3">3 People</option>
<option className="bg-[#1a0f0a]" value="4">4 People</option>
<option className="bg-[#1a0f0a]" value="5+">5+ People</option>
</select>
<iconify-icon className="absolute right-0 top-3 pointer-events-none text-white/40" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b focus:border-[#c8922a] outline-none py-2 text-sm transition-colors cursor-pointer [color-scheme:dark] border-white/20 text-white/80" id="date" required="" type="date"/>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b focus:border-[#c8922a] outline-none py-2 text-sm transition-colors cursor-pointer [color-scheme:dark] border-white/20 text-white/80" id="time" required="" type="time"/>
</div>
</div>
<div className="relative">
<textarea className="w-full bg-transparent border-b focus:border-[#c8922a] outline-none py-2 text-sm text-[#f5f0e8] placeholder:text-transparent peer transition-colors resize-none border-white/20" id="message" placeholder="Message" rows="3"></textarea>
<label className="absolute left-0 top-2 text-xs transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c8922a] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] text-white/40" htmlFor="message">Special Requests (Optional)</label>
</div>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c8922a] to-[#a0721c] text-[#0d0d0d] text-sm font-medium hover:opacity-90 transition-opacity flex justify-center items-center gap-2" type="submit">
                            Confirm Reservation <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#0d0d0d] pt-16 pb-8 px-6 md:px-12 border-t border-[#c8922a]/20">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="font-serif text-2xl tracking-tighter font-medium text-[#c8922a] inline-block mb-4" href="#">
                    FAM.
                </a>
<p className="text-xs font-light leading-relaxed mb-6 text-white/50">
                    Crafting unforgettable coffee experiences in a warm, inviting atmosphere. Where every sip tells a story.
                </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border flex items-center justify-center hover:text-[#c8922a] hover:border-[#c8922a] transition-colors border-white/10 text-white/60" href="#"><iconify-icon icon="solar:camera-linear" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border flex items-center justify-center hover:text-[#c8922a] hover:border-[#c8922a] transition-colors border-white/10 text-white/60" href="#"><iconify-icon icon="solar:letter-linear" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white">Quick Links</h4>
<ul className="space-y-3 text-xs font-light text-white/50">
<li><a className="hover:text-[#c8922a] transition-colors" href="#about">Our Story</a></li>
<li><a className="hover:text-[#c8922a] transition-colors" href="#menu">Menu</a></li>
<li><a className="hover:text-[#c8922a] transition-colors" href="#gallery">Gallery</a></li>
<li><a className="hover:text-[#c8922a] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white">Legal</h4>
<ul className="space-y-3 text-xs font-light text-white/50">
<li><a className="transition-colors hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="transition-colors hover:text-white" href="#">Terms of Service</a></li>
<li><a className="transition-colors hover:text-white" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white">Newsletter</h4>
<p className="text-xs font-light mb-4 text-white/50">Subscribe to receive updates, access to exclusive deals, and more.</p>
<form className="relative">
<input className="w-full bg-[#1a0f0a] border rounded-full py-2.5 pl-4 pr-10 text-xs outline-none focus:border-[#c8922a] transition-colors border-white/10 text-white" placeholder="Enter your email" type="email"/>
<button className="absolute right-1 top-1 w-8 h-8 rounded-full bg-[#c8922a] text-[#0d0d0d] flex items-center justify-center transition-colors hover:bg-white" type="submit">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-light uppercase tracking-wider border-white/10 text-white/40">
<p>© 2023 Fam Cafe. All rights reserved.</p>
<p>Designed with <iconify-icon className="text-[#c8922a] inline align-middle" icon="solar:heart-bold"></iconify-icon> for Coffee Lovers</p>
</div>
</footer>

<a className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-[#25D366] rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] flex items-center justify-center hover:scale-110 transition-transform duration-300 text-white" href="https://wa.me/8801796900385" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>

<button className="fixed bottom-6 right-6 z-40 w-10 h-10 border backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#c8922a] hover:text-[#0d0d0d] hover:border-transparent transition-all duration-300 bg-white/5 border-white/10 text-white" id="back-to-top">
<iconify-icon icon="solar:alt-arrow-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>



    </>
  );
}
