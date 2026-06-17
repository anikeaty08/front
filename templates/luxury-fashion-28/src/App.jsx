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
            // Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
                    navbar.classList.remove('bg-transparent', 'py-6');
                    navbar.classList.add('py-4');
                } else {
                    navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
                    navbar.classList.add('bg-transparent', 'py-6');
                    navbar.classList.remove('py-4');
                }
            });

            // Cart Toggle Logic
            const cartToggle = document.getElementById('cartToggle');
            const closeCart = document.getElementById('closeCart');
            const cartPanel = document.getElementById('cartPanel');
            const cartOverlay = document.getElementById('cartOverlay');

            function openCart() {
                cartOverlay.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    cartOverlay.classList.remove('opacity-0');
                    cartPanel.classList.remove('translate-x-full');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }, 10);
            }

            function hideCart() {
                cartOverlay.classList.add('opacity-0');
                cartPanel.classList.add('translate-x-full');
                document.body.style.overflow = '';
                // Wait for transition to finish before hiding element
                setTimeout(() => {
                    cartOverlay.classList.add('hidden');
                }, 500);
            }

            cartToggle.addEventListener('click', (e) => {
                e.preventDefault();
                openCart();
            });

            closeCart.addEventListener('click', hideCart);
            cartOverlay.addEventListener('click', hideCart);

            // Scroll Reveal Animation via Intersection Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
                observer.observe(el);
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
      

<div className="relative z-50 bg-neutral-900 border-b border-white/5 py-2 px-4 flex justify-center items-center">
<div className="text-xs font-light tracking-widest uppercase text-neutral-300 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            Limited Capsule Drop | Complimentary Worldwide Shipping
        </div>
</div>

<nav className="fixed transition-all duration-500 md:px-12 flex ease-premium z-40 w-full pr-6 pl-6 top-[33px] items-center justify-between" id="navbar">
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-neutral-300">
<a className="hover:text-white transition-colors" href="/#collection">Collection</a>
<a className="hover:text-white transition-colors" href="/#collections">Product page</a>
<a className="hover:text-white transition-colors" href="/#about">Cart</a>
</div>
<a className="text-2xl md:text-3xl font-semibold tracking-tighter uppercase text-white mx-auto md:mx-0" href="#">
            AURA
        </a>
<div className="flex items-center gap-6 text-white">
<button className="hidden md:block hover:opacity-70 transition-opacity">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<button className="hidden md:block hover:opacity-70 transition-opacity">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<button className="relative hover:opacity-70 transition-opacity flex items-center gap-2" id="cartToggle">
<iconify-icon className="" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="absolute -top-1.5 -right-2 bg-white text-black text-xs w-4 h-4 flex items-center justify-center rounded-full font-medium">2</span>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-500 ease-premium" id="cartOverlay"></div>
<div className="fixed top-0 right-0 h-full w-full md:w-[28rem] bg-neutral-950 border-l border-white/10 z-[60] translate-x-full transition-transform duration-700 ease-premium flex flex-col" id="cartPanel">
<div className="flex justify-between items-center p-8 border-b border-white/10">
<h2 className="text-xl font-semibold tracking-tight uppercase">Your Selection</h2>
<button className="text-neutral-400 hover:text-white transition-colors" id="closeCart">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">

<div className="flex gap-6 group">
<div className="w-24 aspect-[3/4] bg-neutral-900 relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-between py-1">
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-semibold tracking-tight uppercase text-white">Obsidian Trench Coat</h3>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
</button>
</div>
<p className="text-xs text-neutral-400 mt-1">Size: M | Color: Noir</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center gap-4 border border-white/20 px-3 py-1 text-sm">
<button className="text-neutral-400 hover:text-white">-</button>
<span>1</span>
<button className="text-neutral-400 hover:text-white">+</button>
</div>
<p className="text-sm font-medium">$1,250</p>
</div>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-24 aspect-[3/4] bg-neutral-900 relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-between py-1">
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-semibold tracking-tight uppercase text-white">Silk Blend Trousers</h3>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
</button>
</div>
<p className="text-xs text-neutral-400 mt-1">Size: 32 | Color: Ash</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center gap-4 border border-white/20 px-3 py-1 text-sm">
<button className="text-neutral-400 hover:text-white">-</button>
<span>1</span>
<button className="text-neutral-400 hover:text-white">+</button>
</div>
<p className="text-sm font-medium">$680</p>
</div>
</div>
</div>
<div className="mt-4 p-4 border border-amber-500/20 bg-amber-500/5 flex gap-4 items-start rounded-sm">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:info-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<div>
<p className="text-sm font-medium text-amber-500 tracking-tight">High Demand</p>
<p className="text-xs text-neutral-300 mt-1">Items in your cart are selling fast. Checkout now to secure your pieces.</p>
</div>
</div>
</div>
<div className="p-8 border-t border-white/10 bg-neutral-950">
<div className="flex justify-between text-sm mb-4 text-neutral-300">
<span>Subtotal</span>
<span className="text-white font-medium">$1,930</span>
</div>
<div className="flex justify-between text-sm mb-6 text-neutral-300">
<span>Shipping</span>
<span className="text-white font-medium">Complimentary</span>
</div>
<button className="w-full bg-white text-black py-4 text-sm font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2 group">
                Proceed to Checkout
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<div className="flex justify-center gap-4 mt-6 opacity-50">
<iconify-icon icon="solar:lock-password-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
</div>
</div>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Hero Background" className="w-full h-full object-cover opacity-60 animate-slow-zoom filter brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center px-4 flex flex-col items-center w-full max-w-5xl mx-auto mt-20">
<span className="md:text-sm uppercase fade-in-up text-xs font-medium text-white/80 tracking-[0.3em] mb-6 blur-sm" style={{animationDelay: '0.2s', maskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 65%, black 100%, transparent)'}}>Act II: The Shadows</span>
<h1 className="md:text-7xl lg:text-8xl uppercase leading-[0.9] fade-in-up text-5xl font-semibold text-white tracking-tighter mb-8" style={{animationDelay: '0.4s', maskImage: 'linear-gradient(180deg, transparent, black 45%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 45%, black 100%, transparent)'}}>
                Ephemeral<br/>Elegance
            </h1>
<p className="text-sm md:text-base font-light text-neutral-300 max-w-md mx-auto mb-10 tracking-wide fade-in-up" style={{animationDelay: '0.6s'}}>
                A study in contrasts. Minimalist silhouettes tailored for the modern ascetic. Limited pieces remaining in the archive.
            </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in-up w-full sm:w-auto" style={{animationDelay: '0.8s'}}>
<a className="bg-white text-black px-12 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-colors w-full sm:w-auto text-center" href="#collection">
                    Buy Now
                </a>
<a className="bg-transparent border border-white text-white px-12 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-full sm:w-auto text-center" href="#editorial">
                    Explore Editorial
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 fade-in-up" style={{animationDelay: '1.2s'}}>
<span className="text-[0.65rem] tracking-widest uppercase font-light">Scroll to discover</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<div className="border-y border-white/10 py-3 overflow-hidden bg-black flex whitespace-nowrap">
<div className="animate-marquee flex gap-12 text-[0.65rem] tracking-widest uppercase font-medium text-neutral-400">
<span>Only a few pieces remaining</span>
<span className="text-amber-500/80">•</span>
<span className="">Selling fast</span>
<span className="text-amber-500/80">•</span>
<span>Exclusive online drop</span>
<span className="text-amber-500/80">•</span>
<span className="">Complimentary express shipping</span>
<span className="text-amber-500/80">•</span>
<span>Only a few pieces remaining</span>
<span className="text-amber-500/80">•</span>
<span>Selling fast</span>
<span className="text-amber-500/80">•</span>
<span>Exclusive online drop</span>
<span className="text-amber-500/80">•</span>
<span>Complimentary express shipping</span>
<span className="text-amber-500/80">•</span>
</div>
</div>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-[100rem] mx-auto" id="collection">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
<div className="">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase mb-4">Trending Now</h2>
<p className="text-sm font-light text-neutral-400 tracking-wide max-w-md">The most coveted pieces from our current archive. Stock is strictly limited.</p>
</div>
<a className="text-xs font-semibold tracking-widest uppercase border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors" href="#">View All Archive</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">

<div className="group reveal-on-scroll">
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-6">
<div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
<span className="bg-black text-white text-[0.65rem] px-3 py-1 tracking-widest uppercase font-medium border border-white/20 backdrop-blur-md">Bestseller</span>
</div>
<img alt="Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Product Alternate" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-premium group-hover:opacity-100 filter grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md text-black py-4 text-xs font-semibold tracking-widest uppercase translate-y-full transition-transform duration-500 ease-premium group-hover:translate-y-0 hover:bg-white">
                        Quick Add
                    </button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-sm font-semibold tracking-tight uppercase mb-1">Obsidian Trench</h3>
<p className="text-xs text-neutral-500 font-light tracking-wide">Heavyweight Italian Wool</p>
</div>
<p className="text-sm font-medium">$1,250</p>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<p className="text-[0.65rem] uppercase lg:bg-clip-text lg:text-transparent font-medium tracking-widest bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-400 via-[#f70202] to-red-600">Only 2 left in M</p>
</div>
</div>

<div className="group reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-6">
<div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
<span className="bg-white text-black text-[0.65rem] px-3 py-1 tracking-widest uppercase font-semibold">New</span>
</div>
<img alt="Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Product Alternate" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-premium group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md text-black py-4 text-xs font-semibold tracking-widest uppercase translate-y-full transition-transform duration-500 ease-premium group-hover:translate-y-0 hover:bg-white">
                        Quick Add
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold tracking-tight uppercase mb-1">Silk Blend Trousers</h3>
<p className="text-xs text-neutral-500 font-light tracking-wide">Relaxed Fit</p>
</div>
<p className="text-sm font-medium">$680</p>
</div>
</div>

<div className="group reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-6">
<img alt="Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-105 filter grayscale" src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Product Alternate" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-premium group-hover:opacity-100 filter grayscale" src="https://images.unsplash.com/photo-1588117260148-b47818741c74?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md text-black py-4 text-xs font-semibold tracking-widest uppercase translate-y-full transition-transform duration-500 ease-premium group-hover:translate-y-0 hover:bg-white">
                        Quick Add
                    </button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-sm font-semibold tracking-tight uppercase mb-1">Structural Blazer</h3>
<p className="text-xs text-neutral-500 font-light tracking-wide">Cashmere Blend</p>
</div>
<p className="text-sm font-medium">$1,450</p>
</div>
</div>

<div className="group reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-6">
<div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
<span className="bg-amber-600/20 text-amber-500 text-[0.65rem] px-3 py-1 tracking-widest uppercase font-medium border border-amber-500/20 backdrop-blur-md">Limited Edition</span>
</div>
<img alt="Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-105" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Product Alternate" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-premium group-hover:opacity-100" src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md text-black py-4 text-xs font-semibold tracking-widest uppercase translate-y-full transition-transform duration-500 ease-premium group-hover:translate-y-0 hover:bg-white">
                        Quick Add
                    </button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-sm font-semibold tracking-tight uppercase mb-1">Monolith Boots</h3>
<p className="text-xs text-neutral-500 font-light tracking-wide">Calf Leather</p>
</div>
<p className="text-sm font-medium">$950</p>
</div>
<div className="mt-3 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:clock-circle-linear" style={{fontSize: '0.8rem'}}></iconify-icon>
<p className="text-[0.65rem] tracking-widest uppercase text-neutral-400 font-medium">Offer ends in 02:14:59</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 bg-neutral-950" id="editorial">
<div className="relative h-[50vh] lg:h-screen w-full overflow-hidden">
<img alt="Brand Story" className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-80" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center px-8 py-20 lg:px-24 reveal-on-scroll">
<span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">The Manifesto</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase mb-8 leading-tight">Redefining<br/>Modern<br/>Uniforms</h2>
<p className="text-sm font-light text-neutral-400 leading-relaxed mb-8 max-w-md">
                AURA is born from the desire to strip away the unnecessary. We create garments that serve as a canvas for the wearer, focusing obsessively on material, cut, and the subtle tension between structure and drape. 
            </p>
<p className="text-sm font-light text-neutral-400 leading-relaxed mb-12 max-w-md">
                Every piece is constructed with uncompromising craftsmanship in strictly limited runs to ensure exclusivity and eliminate waste. True luxury is intentional.
            </p>
<a className="inline-flex items-center gap-4 text-xs font-semibold tracking-widest uppercase group w-max" href="#">
<span className="border-b border-transparent group-hover:border-white transition-colors pb-1">Discover Our Story</span>
<iconify-icon className="group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-white/10 bg-black">
<div className="max-w-4xl mx-auto text-center reveal-on-scroll">
<div className="flex justify-center gap-2 mb-8 text-amber-500">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
<iconify-icon className="" icon="solar:star-fall-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
<iconify-icon className="" icon="solar:star-fall-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
<iconify-icon className="" icon="solar:star-fall-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
<iconify-icon className="" icon="solar:star-fall-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-light tracking-tight mb-8 leading-relaxed">
                "The construction is flawless. It feels less like clothing and more like soft armor. Easily the most worn pieces in my wardrobe."
            </h3>
<p className="text-xs font-medium tracking-widest uppercase text-neutral-500">— Alexander V., Verified Client</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-24 opacity-60">
<div className="flex flex-col items-center text-center gap-4">
<iconify-icon icon="solar:box-linear" strokeWidth="1" style={{fontSize: '2rem'}}></iconify-icon>
<span className="text-xs tracking-widest uppercase font-medium">Complimentary<br/>Shipping</span>
</div>
<div className="flex flex-col items-center text-center gap-4">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1" style={{fontSize: '2rem'}}></iconify-icon>
<span className="text-xs tracking-widest uppercase font-medium">14-Day<br/>Returns</span>
</div>
<div className="flex flex-col items-center text-center gap-4">
<iconify-icon className="" icon="solar:shield-check-linear" strokeWidth="1" style={{fontSize: '2rem'}}></iconify-icon>
<span className="text-xs tracking-widest uppercase font-medium">Secure<br/>Checkout</span>
</div>
<div className="flex flex-col items-center text-center gap-4">
<iconify-icon icon="solar:medal-star-circle-linear" strokeWidth="1" style={{fontSize: '2rem'}}></iconify-icon>
<span className="text-xs tracking-widest uppercase font-medium">Lifetime<br/>Guarantee</span>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605367319989-13e00fc9d737?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 filter grayscale mix-blend-overlay"></div>
<div className="relative z-10 max-w-xl mx-auto text-center reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter uppercase mb-4">Join the Inner Circle</h2>
<p className="text-sm font-light text-neutral-400 mb-10">Sign up to receive private invitations to exclusive drops and editorial content. Members gain 24-hour early access.</p>
<form className="flex flex-col sm:flex-row gap-0 w-full border border-white/20 focus-within:border-white transition-colors group">
<input className="flex-1 bg-transparent px-6 py-4 text-xs font-medium tracking-widest uppercase text-white placeholder-neutral-600 focus:outline-none w-full" placeholder="YOUR EMAIL ADDRESS" type="email"/>
<button className="bg-white text-black px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-colors sm:w-auto w-full border-t sm:border-t-0 border-white/20 sm:border-l" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-black pt-24 pb-12 px-6 md:px-12 border-t border-white/10 text-neutral-400">
<div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
<div className="col-span-1 md:col-span-1">
<a className="text-3xl font-semibold tracking-tighter uppercase text-white mb-6 block" href="#">AURA</a>
<p className="text-xs font-light leading-relaxed max-w-xs">Contemporary luxury defined by stark minimalism, precise tailoring, and uncompromising quality.</p>
</div>
<div>
<h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-6">Explore</h4>
<ul className="flex flex-col gap-4 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">The Archive</a></li>
<li><a className="hover:text-white transition-colors" href="#">Editorial</a></li>
<li><a className="hover:text-white transition-colors" href="#">About the Maison</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-6">Client Services</h4>
<ul className="flex flex-col gap-4 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-6">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="solar:camera-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[0.65rem] tracking-widest uppercase font-medium">
<p>© 2024 AURA MAISON. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
