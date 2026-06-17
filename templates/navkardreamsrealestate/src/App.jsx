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
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
gold: {
DEFAULT: '#C5A059',
dark: '#A38141',
light: '#E6C88A'
},
charcoal: '#1A1A1A'
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Page Loader
        window.addEventListener('load', () => {
            const loader = document.getElementById('page-loader');
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 500);
        });

        // Scroll Progress & Sticky Navbar
        const navbar = document.getElementById('navbar');
        const progressBar = document.getElementById('scroll-progress');
        
        window.addEventListener('scroll', () => {
            // Progress Bar
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";

            // Navbar Style Change
            if (winScroll > 50) {
                navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'text-charcoal');
                navbar.classList.remove('text-white', 'py-6');
                navbar.classList.add('py-4');
                // Change logo part color
                navbar.querySelector('a').classList.add('text-charcoal');
                navbar.querySelector('a').classList.remove('text-white');
                // Change links color
                navbar.querySelectorAll('.hidden.md\\:flex a:not(.bg-gold\\/90)').forEach(link => {
                    link.classList.add('text-charcoal');
                    link.classList.remove('text-white');
                });
            } else {
                navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'text-charcoal', 'py-4');
                navbar.classList.add('text-white', 'py-6');
                navbar.querySelector('a').classList.remove('text-charcoal');
                navbar.querySelector('a').classList.add('text-white');
                navbar.querySelectorAll('.hidden.md\\:flex a:not(.bg-gold\\/90)').forEach(link => {
                    link.classList.remove('text-charcoal');
                    link.classList.add('text-white');
                });
            }
        });

        // Reveal Animations on Scroll
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: unobserve after revealing
                    // revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        // Animated Counters
        const counters = document.querySelectorAll('.counter');
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const targetNumber = parseInt(target.getAttribute('data-target'));
                    let currentNumber = 0;
                    const increment = targetNumber / 50; // speed
                    
                    const updateCounter = () => {
                        if (currentNumber < targetNumber) {
                            currentNumber += increment;
                            target.innerText = Math.ceil(currentNumber);
                            requestAnimationFrame(updateCounter);
                        } else {
                            target.innerText = targetNumber;
                        }
                    };
                    updateCounter();
                    observer.unobserve(target); // Run once
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));

        // Property Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const propertyCards = document.querySelectorAll('.property-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => {
                    b.classList.remove('bg-charcoal', 'text-white');
                    b.classList.add('bg-slate-100', 'text-slate-600');
                });
                btn.classList.remove('bg-slate-100', 'text-slate-600');
                btn.classList.add('bg-charcoal', 'text-white');

                const filter = btn.getAttribute('data-filter');

                propertyCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 50);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });

        // Testimonial Auto-scroll (Simple implementation)
        const carousel = document.getElementById('testimonial-carousel');
        let isDown = false;
        let startX;
        let scrollLeft;

        // Auto scroll loop
        setInterval(() => {
            if(carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10)) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 5000);

        // Contact Form Submit Handling
        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> Sending...';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                e.target.reset();
                document.getElementById('formSuccess').classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('formSuccess').classList.add('hidden');
                }, 5000);
            }, 1500);
        }

        // Modal Logic
        const modal = document.getElementById('inquiryModal');
        const modalContent = document.getElementById('modalContent');
        const modalPropName = document.getElementById('modalPropertyName');
        const modalPropPrice = document.getElementById('modalPropertyPrice');

        function openModal(name, price) {
            modalPropName.innerText = name;
            modalPropPrice.innerText = price;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Small delay to allow display:flex to apply before animating opacity/transform
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }, 300);
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
      

<div className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center" id="page-loader">
<span className="font-serif text-3xl tracking-tighter text-charcoal mb-4">Navkar Dreams</span>
<div className="w-32 h-[1px] bg-slate-200 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gold animate-[pulse_1s_ease-in-out_infinite] w-full origin-left"></div>
</div>
</div>

<div className="" id="scroll-progress" style={{width: '99.9957%'}}></div>

<nav className="fixed w-full z-50 transition-all duration-500 px-6 md:px-12 flex justify-between items-center" id="navbar">
<a className="flex items-center gap-1 text-2xl font-medium tracking-tighter font-serif" href="#">Navkar Dreams</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal tracking-wide">
<a className="hover:text-gold transition-colors" href="#about">About</a>
<a className="hover:text-gold transition-colors" href="#services">Services</a>
<a className="hover:text-gold transition-colors" href="#properties">Properties</a>
<a className="hover:text-gold transition-colors" href="#testimonials">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm hover:text-gold transition-colors" href="tel:+919876543210">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="bg-gold/90 hover:bg-gold text-white px-5 py-2.5 rounded text-xs tracking-wide transition-all font-medium backdrop-blur-sm shadow-[0_4px_14px_0_rgba(197,160,89,0.39)] hover:shadow-[0_6px_20px_rgba(197,160,89,0.23)]" href="#contact">
                Inquire Now
            </a>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-charcoal">

<img alt="Luxury Real Estate" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-40" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-4467-large.mp4" type="video/mp4"/>
</video>

<div className="bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-16">
<span className="text-gold text-xs tracking-[0.2em] uppercase mb-4 animate-slide-up block" style={{animationDelay: '0.2s', opacity: '0'}}>Exclusive Real Estate</span>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-6 animate-slide-up font-medium" style={{animationDelay: '0.4s', opacity: '0'}}>
                Discover Your <br/><span className="text-gold italic font-normal">Perfect Property</span>
</h1>
<p className="text-slate-200 text-sm md:text-base font-light max-w-2xl mb-10 animate-slide-up leading-relaxed" style={{animationDelay: '0.6s', opacity: '0'}}>
                Trusted Real Estate Partner for Buying, Selling &amp; Investing in Premium Locations. Experience luxury living with transparent and seamless transactions.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style={{animationDelay: '0.8s', opacity: '0'}}>
<a className="w-full sm:w-auto bg-white text-charcoal px-8 py-3.5 rounded text-sm font-medium transition-all hover:bg-slate-100 flex items-center justify-center gap-2" href="#properties">
                    View Properties
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3.5 rounded text-sm font-medium transition-all hover:from-emerald-600 hover:to-emerald-700 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-[pulse_2s_ease-in-out_infinite]" href="https://wa.me/+919222122229" target="_blank">
<iconify-icon icon="solar:whatsapp-linear" width="18"></iconify-icon>
                    Contact on WhatsApp
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 animate-bounce">
<span className="text-[0.65rem] text-white uppercase tracking-[0.2em]">Scroll</span>
<div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative reveal" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-[1px] bg-gold"></div>
<span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">About Aura</span>
</div>
<h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight font-medium leading-snug">
                    Redefining Luxury <br/>Real Estate in India
                </h2>
<p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                    We are a premier property consultancy dedicated to connecting discerning clients with extraordinary properties. Our approach combines deep market knowledge with absolute transparency.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<div className="mt-1 bg-gold/10 p-1 rounded-full text-gold">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-charcoal">Trust &amp; Transparency</h4>
<p className="text-xs text-slate-500 mt-1">Clear communication at every step.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-gold/10 p-1 rounded-full text-gold">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-charcoal">Verified Listings</h4>
<p className="text-xs text-slate-500 mt-1">Stringent quality and legal checks.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-gold/10 p-1 rounded-full text-gold">
<iconify-icon icon="solar:user-hands-linear" width="16"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-charcoal">End-to-End Assistance</h4>
<p className="text-xs text-slate-500 mt-1">From viewing to documentation.</p>
</div>
</li>
</ul>
</div>

<div className="grid grid-cols-2 gap-4 md:gap-6">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
<span className="counter text-3xl md:text-4xl font-serif text-charcoal mb-2 font-medium" data-target="500">10</span>
<span className="text-gold text-2xl absolute -mt-4 ml-12">+</span>
<p className="text-xs text-slate-500 uppercase tracking-wide">Properties Closed</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow mt-0 md:mt-8">
<span className="counter text-3xl md:text-4xl font-serif text-charcoal mb-2 font-medium" data-target="200">4</span>
<span className="text-gold text-2xl absolute -mt-4 ml-12">+</span>
<p className="text-xs text-slate-500 uppercase tracking-wide">Happy Clients</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow md:-mt-8">
<span className="counter text-3xl md:text-4xl font-serif text-charcoal mb-2 font-medium" data-target="10">1</span>
<span className="text-gold text-2xl absolute -mt-4 ml-8">+</span>
<p className="text-xs text-slate-500 uppercase tracking-wide">Years Experience</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
<span className="counter text-3xl md:text-4xl font-serif text-charcoal mb-2 font-medium" data-target="50">1</span>
<span className="text-gold text-2xl absolute -mt-4 ml-10">+</span>
<p className="text-xs text-slate-500 uppercase tracking-wide">Active Listings</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 reveal" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-gold text-xs tracking-[0.15em] uppercase font-medium mb-3 block">Expertise</span>
<h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight font-medium mb-4">Our Services</h2>
<p className="text-slate-500 text-sm font-light">Comprehensive real estate solutions tailored for investors, buyers, and sellers looking for premium opportunities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
<iconify-icon icon="solar:home-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-charcoal mb-2">Residential Sales</h3>
<p className="text-xs text-slate-500 leading-relaxed">Luxury apartments, villas, and penthouses in prime locations.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-charcoal mb-2">Commercial</h3>
<p className="text-xs text-slate-500 leading-relaxed">Premium office spaces and retail showrooms for business growth.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-charcoal mb-2">Investment</h3>
<p className="text-xs text-slate-500 leading-relaxed">Strategic advisory for high-yield property investments.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
<iconify-icon icon="solar:key-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-charcoal mb-2">Rental &amp; Leasing</h3>
<p className="text-xs text-slate-500 leading-relaxed">Hassle-free leasing services for landlords and tenants.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-gold">
<iconify-icon icon="solar:calculator-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-charcoal mb-2">Valuation</h3>
<p className="text-xs text-slate-500 leading-relaxed">Accurate market assessments and property appraisals.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-white reveal" id="properties">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<span className="text-gold text-xs tracking-[0.15em] uppercase font-medium mb-3 block">Portfolio</span>
<h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight font-medium">Featured Properties</h2>
</div>

<div className="flex flex-wrap gap-2">
<button className="filter-btn active px-4 py-2 rounded-full text-xs font-medium bg-charcoal text-white transition-colors" data-filter="all">All</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors" data-filter="residential">Residential</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors" data-filter="commercial">Commercial</button>
<button className="filter-btn px-4 py-2 rounded-full text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors" data-filter="plots">Plots</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="property-card group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500" data-category="residential">
<div className="relative h-64 overflow-hidden cursor-pointer" onclick="openModal('The Sky Residences', '₹4.5 Cr')">
<img alt="Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-charcoal text-[0.65rem] font-medium px-3 py-1 rounded-full uppercase tracking-wider">For Sale</div>
<div className="absolute bottom-4 right-4 bg-charcoal/80 backdrop-blur text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon icon="solar:maximize-square-linear"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg text-charcoal font-medium">The Sky Residences</h3>
<span className="text-gold font-medium text-base tracking-tight">₹4.5 Cr</span>
</div>
<p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Bandra West, Mumbai
                        </p>
<div className="flex items-center gap-4 text-xs text-slate-600 border-t border-slate-100 pt-4 mb-5">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 4 Beds</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 4 Baths</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 3,200 sqft</span>
</div>
<button className="w-full py-2.5 rounded border border-slate-200 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-white transition-colors" onclick="openModal('The Sky Residences', '₹4.5 Cr')">
                            View Details
                        </button>
</div>
</div>

<div className="property-card group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500" data-category="commercial">
<div className="relative h-64 overflow-hidden cursor-pointer" onclick="openModal('Apex Business Hub', '₹12 Cr')">
<img alt="Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-charcoal text-[0.65rem] font-medium px-3 py-1 rounded-full uppercase tracking-wider">For Lease / Sale</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg text-charcoal font-medium">Apex Business Hub</h3>
<span className="text-gold font-medium text-base tracking-tight">₹12 Cr</span>
</div>
<p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Cyber City, Gurugram
                        </p>
<div className="flex items-center gap-4 text-xs text-slate-600 border-t border-slate-100 pt-4 mb-5">
<span className="flex items-center gap-1"><iconify-icon icon="solar:buildings-linear"></iconify-icon> Office Space</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 10,000 sqft</span>
</div>
<button className="w-full py-2.5 rounded border border-slate-200 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-white transition-colors" onclick="openModal('Apex Business Hub', '₹12 Cr')">
                            View Details
                        </button>
</div>
</div>

<div className="property-card group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500" data-category="residential">
<div className="relative h-64 overflow-hidden cursor-pointer" onclick="openModal('Serenity Villas', '₹8.2 Cr')">
<img alt="Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-charcoal text-[0.65rem] font-medium px-3 py-1 rounded-full uppercase tracking-wider">Pre-Launch</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg text-charcoal font-medium">Serenity Villas</h3>
<span className="text-gold font-medium text-base tracking-tight">₹8.2 Cr</span>
</div>
<p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Jubilee Hills, Hyderabad
                        </p>
<div className="flex items-center gap-4 text-xs text-slate-600 border-t border-slate-100 pt-4 mb-5">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 5 Beds</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 6 Baths</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 6,500 sqft</span>
</div>
<button className="w-full py-2.5 rounded border border-slate-200 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-white transition-colors" onclick="openModal('Serenity Villas', '₹8.2 Cr')">
                            View Details
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-parallax reveal" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp'}}>
<div className="absolute inset-0 bg-charcoal/85 mix-blend-multiply"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight font-serif mb-4">The Navkar Dreams Advantage</h2>
<div className="w-16 h-[1px] bg-gold mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-gold mb-6 backdrop-blur-sm bg-white/5">
<iconify-icon className="" icon="solar:hand-shake-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-white text-base font-medium mb-2">Transparent Deals</h3>
<p className="text-slate-300 text-xs font-light leading-relaxed">No hidden fees, complete clarity in pricing and processes.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-gold mb-6 backdrop-blur-sm bg-white/5">
<iconify-icon className="" icon="solar:diploma-verified-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-white text-base font-medium mb-2">Legal Support</h3>
<p className="text-slate-300 text-xs font-light leading-relaxed">Comprehensive documentation and due diligence included.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-gold mb-6 backdrop-blur-sm bg-white/5">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-white text-base font-medium mb-2">Strong Negotiation</h3>
<p className="text-slate-300 text-xs font-light leading-relaxed">Securing the best possible value for your investment.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-gold mb-6 backdrop-blur-sm bg-white/5">
<iconify-icon icon="solar:user-heart-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-white text-base font-medium mb-2">Dedicated Support</h3>
<p className="text-slate-300 text-xs font-light leading-relaxed">Personalized relationship manager for every client.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden reveal" id="testimonials">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12 text-center">
<span className="text-gold text-xs tracking-[0.15em] uppercase font-medium mb-3 block">Testimonials</span>
<h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight font-medium">Client Experiences</h2>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-24 pb-10 no-scrollbar" id="testimonial-carousel">

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 snap-center">
<div className="flex text-gold mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6 leading-relaxed">"Finding a premium apartment in South Mumbai seemed daunting until I met the team. Their professionalism and curated options saved me months of searching."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-charcoal font-serif font-medium">R</div>
<div>
<h4 className="text-sm font-medium text-charcoal">Rajesh K.</h4>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-wider">NRI Investor</span>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 snap-center">
<div className="flex text-gold mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6 leading-relaxed">"We bought our first commercial space through them. Complete transparency, zero hidden facts, and excellent negotiation. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-charcoal font-serif font-medium">S</div>
<div>
<h4 className="text-sm font-medium text-charcoal">Sneha M.</h4>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-wider">Business Owner</span>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 snap-center">
<div className="flex text-gold mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6 leading-relaxed">"The level of service is unmatched. They handled the entire paperwork and legalities seamlessly. Made buying a luxury villa feel effortless."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-charcoal font-serif font-medium">A</div>
<div>
<h4 className="text-sm font-medium text-charcoal">Amit V.</h4>
<span className="text-[0.65rem] text-slate-400 uppercase tracking-wider">Tech Executive</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-white reveal" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
<h3 className="font-serif text-2xl md:text-3xl text-charcoal tracking-tight font-medium mb-2 relative z-10">Get in Touch</h3>
<p className="text-xs text-slate-500 mb-8 relative z-10">Fill out the form below and our luxury property consultant will contact you shortly.</p>
<form className="space-y-5 relative z-10" id="contactForm" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors placeholder:text-slate-400 text-charcoal" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors placeholder:text-slate-400 text-charcoal" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors placeholder:text-slate-400 text-charcoal" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-wider ml-1">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors placeholder:text-slate-400 resize-none text-charcoal" placeholder="I am interested in buying a premium villa in..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-charcoal text-white rounded-lg py-4 text-sm font-medium transition-all hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] flex items-center justify-center gap-2 mt-4 group" type="submit">
                        Send Message
                        <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-2-linear"></iconify-icon>
</button>

<div className="hidden mt-4 p-4 bg-emerald-50 text-emerald-700 text-xs rounded-lg border border-emerald-100 flex items-center gap-2" id="formSuccess">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                        Thank you! Your inquiry has been sent successfully.
                    </div>
</form>
</div>

<div className="flex flex-col justify-between">
<div className="mb-10">
<h3 className="font-serif text-2xl text-charcoal tracking-tight font-medium mb-6">Corporate Office</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-gold shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-charcoal mb-1">Location</h4>
<p className="leading-relaxed text-xs text-slate-500">202, Excel Arcade, Lal Bahadur Shastri Marg, Ghatkopar West, Mumbai, Maharashtra 400086</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-gold shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-charcoal mb-1">Contact</h4>
<a className="hover:text-gold transition-colors block text-xs text-slate-500" href="tel:+919876543210">+91 92221 22229</a>
<a className="hover:text-gold transition-colors block text-xs text-slate-500 mt-1" href="mailto:contact@aurarealty.com">info@navkardreams.in</a>
</div>
</div>
</div>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.119140935912!2d77.09108151507914!3d28.46601618248384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ca10fc7d93%3A0xcb2940bc2a0a2df3!2sOne%20Horizon%20Center!5e0!3m2!1sen!2sin!4v1625567891234!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="bg-charcoal reveal text-center pt-20 pr-6 pb-20 pl-6">
<h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight font-medium mb-8">Ready to Buy or Sell Property?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-gold text-white px-8 py-4 rounded text-sm font-medium transition-all hover:bg-gold-dark hover:-translate-y-1" href="#contact">
                Schedule Consultation
            </a>
<a className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-8 py-4 rounded text-sm font-medium transition-all hover:bg-white hover:text-charcoal flex items-center justify-center gap-2" href="https://wa.me/919876543210" target="_blank">
<iconify-icon icon="solar:whatsapp-linear" width="18"></iconify-icon>
                Chat on WhatsApp
            </a>
</div>
</section>

<footer className="md:px-12 lg:px-24 text-slate-400 bg-[#111111] border-white/10 border-t pt-16 pr-6 pb-16 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-1 text-2xl font-medium text-white tracking-tighter font-serif mb-6" href="#">Navkar Dreams</a>
<p className="text-xs font-light leading-relaxed mb-6">Premier real estate advisory bridging the gap between extraordinary properties and discerning clients.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="text-white text-sm font-medium mb-6 uppercase tracking-wider">Quick Links</h4>
<ul className="space-y-3 text-xs font-light">
<li className=""><a className="hover:text-gold transition-colors" href="#about">About Us</a></li>
<li className=""><a className="hover:text-gold transition-colors" href="#properties">Featured Properties</a></li>
<li><a className="hover:text-gold transition-colors" href="#services">Our Services</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-sm font-medium mb-6 uppercase tracking-wider">Services</h4>
<ul className="space-y-3 text-xs font-light">
<li className=""><a className="hover:text-gold transition-colors" href="#">Residential Sales</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Commercial Leasing</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Investment Advisory</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-6 uppercase tracking-wider">Newsletter</h4>
<p className="text-xs font-light mb-4">Subscribe for premium market insights.</p>
<form className="flex border border-white/20 rounded overflow-hidden focus-within:border-gold transition-colors">
<input className="bg-transparent px-4 py-2 text-xs w-full focus:outline-none text-white placeholder:text-slate-600" placeholder="Email address" type="email"/>
<button className="bg-white/10 hover:bg-gold text-white px-4 py-2 transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] uppercase tracking-wider font-light">
<p className="">© 2026 Navkar Dreams . All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-slow" href="https://wa.me/919876543210" target="_blank">
<iconify-icon icon="solar:whatsapp-bold" width="32"></iconify-icon>
</a>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="inquiryModal">

<div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="bg-white rounded-2xl w-full max-w-md m-4 relative z-10 p-8 shadow-2xl transform scale-95 opacity-0 transition-all duration-300" id="modalContent">
<button className="absolute top-4 right-4 text-slate-400 hover:text-charcoal transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<span className="text-gold text-[0.65rem] tracking-[0.15em] uppercase font-medium mb-2 block">Property Inquiry</span>
<h3 className="font-serif text-2xl text-charcoal font-medium mb-1" id="modalPropertyName">Property Name</h3>
<p className="text-sm font-medium text-slate-500 mb-6" id="modalPropertyPrice">Price</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Inquiry sent! We will contact you soon.'); closeModal();">
<div>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2.5 text-xs focus:outline-none focus:border-gold transition-colors text-charcoal" placeholder="Your Name" required="" type="text"/>
</div>
<div>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2.5 text-xs focus:outline-none focus:border-gold transition-colors text-charcoal" placeholder="Phone Number" required="" type="tel"/>
</div>
<div>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2.5 text-xs focus:outline-none focus:border-gold transition-colors text-charcoal" placeholder="Email Address" required="" type="email"/>
</div>
<button className="w-full bg-charcoal text-white rounded py-3 text-sm font-medium hover:bg-gold transition-colors mt-2" type="submit">
                    Request Details
                </button>
</form>
</div>
</div>



    </>
  );
}
