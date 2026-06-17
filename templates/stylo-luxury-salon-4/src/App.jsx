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
      
tailwind.config = {
theme: {
extend: {
colors: {
dark: '#0b0b1f',
gold: '#d4af37',
light: '#f5f5f5',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
slowZoom: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.15)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(2rem)' },
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



        // Loader
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    // Trigger initial animations after loader is gone
                    initScrollAnimations();
                }, 1000);
            }, 800);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-dark/95', 'backdrop-blur-md', 'shadow-md', 'py-4');
                navbar.classList.remove('py-6');
            } else {
                navbar.classList.remove('bg-dark/95', 'backdrop-blur-md', 'shadow-md', 'py-4');
                navbar.classList.add('py-6');
            }
        });

        // Scroll Animations (Intersection Observer)
        function initScrollAnimations() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0-js');
                        entry.target.classList.add('animate-slide-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                observer.observe(el);
            });
        }

        // Form Submission Mock
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="18" height="18"></iconify-icon> Processing...';
            btn.disabled = true;

            setTimeout(() => {
                document.getElementById('successMsg').classList.remove('hidden');
                this.reset();
                btn.innerText = originalText;
                btn.disabled = false;
                
                setTimeout(() => {
                    document.getElementById('successMsg').classList.add('hidden');
                }, 5000);
            }, 1500);
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
      

<div className="fixed inset-0 z-[100] bg-dark flex items-center justify-center transition-opacity duration-1000" id="loader">
<div className="flex flex-col items-center">
<h1 className="font-serif tracking-widest text-2xl text-gold mb-4 uppercase">Stylo</h1>
<div className="w-24 h-[1px] bg-white/20 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gold animate-[slideRight_1.5s_ease-in-out_infinite]" style={{width: '40%', animation: 'slideRight 1.5s ease-in-out infinite'}}></div>
</div>
</div>
</div>
<style>@keyframes slideRight { 0% { transform: translateX(-100%); } 100% { transform: translateX(250%); } }</style>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group flex items-center justify-center" href="#contact">
<iconify-icon height="24" icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute right-full mr-4 bg-white text-dark text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">Chat with us</span>
</a>

<nav className="fixed w-full z-40 transition-all duration-500 py-6 px-6 lg:px-12" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="font-serif text-xl tracking-[0.2em] uppercase text-white hover:text-gold transition-colors" href="#">
                Stylo
            </a>
<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-light text-white/80 hover:text-gold transition-colors" href="#home">Home</a>
<a className="text-sm font-light text-white/80 hover:text-gold transition-colors" href="#services">Services</a>
<a className="text-sm font-light text-white/80 hover:text-gold transition-colors" href="#about">About</a>
<a className="text-sm font-light text-white/80 hover:text-gold transition-colors" href="#gallery">Gallery</a>
<a className="px-6 py-2.5 border border-gold/50 text-gold text-sm font-medium hover:bg-gold hover:text-dark transition-all duration-300 rounded-sm" href="#book">Book Now</a>
</div>
<button className="md:hidden text-white">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-screen w-full overflow-hidden flex items-center justify-center" id="home">

<div className="absolute inset-0 z-0">
<img alt="Luxury Salon" className="w-full h-full object-cover animate-slow-zoom" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-b from-dark/60 via-dark/80 to-dark"></div>

<div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
<span className="block text-gold text-sm font-medium tracking-widest uppercase mb-6 opacity-0-js animate-on-scroll">Welcome to Stylo</span>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 leading-tight opacity-0-js animate-on-scroll" style={{animationDelay: '0.2s'}}>
                Transform Your Look with <span className="italic text-gold">Premium Care</span>
</h1>
<p className="text-base md:text-lg font-light text-white/70 mb-10 max-w-2xl mx-auto opacity-0-js animate-on-scroll" style={{animationDelay: '0.4s'}}>
                Experience luxury salon services with expert professionals in an environment designed for your ultimate relaxation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0-js animate-on-scroll" style={{animationDelay: '0.6s'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-gold text-dark text-sm font-medium hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2" href="#book">
                    Book Appointment
                    <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white text-sm font-medium hover:border-gold hover:text-gold transition-colors duration-300 glass-panel" href="#contact">
                    Chat on WhatsApp
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-dark relative z-20" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16 opacity-0-js animate-on-scroll">
<h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mb-4">Our Services</h2>
<div className="w-12 h-0.5 bg-gold mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-500 hover:border-gold/30 cursor-pointer opacity-0-js animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-normal tracking-tight mb-3 group-hover:text-gold transition-colors">Hair Styling</h3>
<p className="text-sm font-light text-white/50 leading-relaxed">Expert cuts, coloring, and styling tailored to your unique facial structure.</p>
</div>

<div className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-500 hover:border-gold/30 cursor-pointer opacity-0-js animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-normal tracking-tight mb-3 group-hover:text-gold transition-colors">Hair Spa</h3>
<p className="text-sm font-light text-white/50 leading-relaxed">Rejuvenating treatments to restore shine, strength, and vitality to your hair.</p>
</div>

<div className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-500 hover:border-gold/30 cursor-pointer opacity-0-js animate-on-scroll" style={{animationDelay: '0.3s'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:face-scan-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-normal tracking-tight mb-3 group-hover:text-gold transition-colors">Facial &amp; Skin</h3>
<p className="text-sm font-light text-white/50 leading-relaxed">Premium skincare routines using high-end products for a glowing complexion.</p>
</div>

<div className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-500 hover:border-gold/30 cursor-pointer opacity-0-js animate-on-scroll" style={{animationDelay: '0.4s'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:crown-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-normal tracking-tight mb-3 group-hover:text-gold transition-colors">Bridal Makeup</h3>
<p className="text-sm font-light text-white/50 leading-relaxed">Flawless, long-lasting makeup application for your most special day.</p>
</div>

<div className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-500 hover:border-gold/30 cursor-pointer opacity-0-js animate-on-scroll" style={{animationDelay: '0.5s'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="24" icon="solar:user-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-normal tracking-tight mb-3 group-hover:text-gold transition-colors">Beard Grooming</h3>
<p className="text-sm font-light text-white/50 leading-relaxed">Precision trimming, shaping, and conditioning for the modern gentleman.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-light text-dark relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative opacity-0-js animate-on-scroll">
<div className="absolute -inset-4 border border-gold/30 translate-x-4 translate-y-4"></div>
<img alt="Stylist working" className="relative z-10 w-full h-[600px] object-cover shadow-2xl" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute -bottom-8 -left-8 z-20 glass-panel-light p-6 max-w-[200px] shadow-xl">
<p className="font-serif text-4xl text-gold mb-1">10+</p>
<p className="text-xs font-medium uppercase tracking-wider text-dark/70">Years of Luxury Experience</p>
</div>
</div>

<div className="opacity-0-js animate-on-scroll" style={{animationDelay: '0.2s'}}>
<span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">Why Choose Us</span>
<h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight mb-6 leading-tight">Elevating Grooming to an Art Form</h2>
<p className="text-sm md:text-base font-light text-dark/70 mb-10 leading-relaxed">
                    At Stylo, we believe that true luxury lies in the details. Our sanctuary is designed to provide you with an unparalleled grooming experience, blending classic techniques with modern trends. 
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 text-gold"><iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon></div>
<div>
<h4 className="font-serif text-lg font-normal tracking-tight mb-1">Certified Experts</h4>
<p className="text-xs font-light text-dark/60">Our team consists of internationally trained stylists and colorists.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-gold"><iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon></div>
<div>
<h4 className="font-serif text-lg font-normal tracking-tight mb-1">Premium Products</h4>
<p className="text-xs font-light text-dark/60">We exclusively use high-end, cruelty-free products for optimal results.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-gold"><iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon></div>
<div>
<h4 className="font-serif text-lg font-normal tracking-tight mb-1">Hygienic Environment</h4>
<p className="text-xs font-light text-dark/60">Strict sterilization protocols ensure your safety and comfort.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-gold"><iconify-icon height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon></div>
<div>
<h4 className="font-serif text-lg font-normal tracking-tight mb-1">Affordable Luxury</h4>
<p className="text-xs font-light text-dark/60">Experience world-class services at competitive, transparent pricing.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
<div className="flex justify-between items-end mb-12 opacity-0-js animate-on-scroll">
<div>
<h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mb-2">Our Portfolio</h2>
<p className="text-sm font-light text-white/50">Glimpses of our recent transformations</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm text-gold hover:text-white transition-colors" href="#">
                    View All <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="relative group overflow-hidden md:row-span-2 aspect-[3/4] md:aspect-auto opacity-0-js animate-on-scroll">
<img alt="Haircut" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-gold/90 text-dark flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon height="20" icon="solar:maximize-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="relative group overflow-hidden aspect-square opacity-0-js animate-on-scroll" style={{animationDelay: '0.1s'}}>
<img alt="Makeup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-gold/90 text-dark flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon height="20" icon="solar:maximize-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="relative group overflow-hidden aspect-square opacity-0-js animate-on-scroll" style={{animationDelay: '0.2s'}}>
<img alt="Beard trim" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-gold/90 text-dark flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon height="20" icon="solar:maximize-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="relative group overflow-hidden aspect-[2/1] lg:col-span-2 opacity-0-js animate-on-scroll" style={{animationDelay: '0.3s'}}>
<img alt="Salon interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-gold/90 text-dark flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon height="20" icon="solar:maximize-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="book">

<div className="absolute inset-0 bg-gradient-to-br from-dark via-[#11112b] to-dark z-0"></div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="glass-panel p-8 md:p-12 shadow-2xl opacity-0-js animate-on-scroll">
<div className="text-center mb-10">
<h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mb-3">Reserve Your Experience</h2>
<p className="text-sm font-light text-white/60">Fill in the details below and we will confirm your appointment shortly.</p>
</div>
<form className="space-y-8" id="bookingForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative">
<input className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors peer placeholder-transparent" id="name" placeholder="Full Name" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-white/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold" htmlFor="name">Full Name</label>
</div>

<div className="relative">
<input className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors peer placeholder-transparent" id="phone" placeholder="Phone Number" required="" type="tel"/>
<label className="absolute left-0 -top-3.5 text-xs text-white/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold" htmlFor="phone">Phone Number</label>
</div>

<div className="relative">
<select className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white/80 focus:outline-none focus:border-gold transition-colors cursor-pointer" id="service" required="">
<option className="bg-dark text-white/50" disabled="" selected="" value="">Select a Service</option>
<option className="bg-dark text-white" value="hair">Hair Styling &amp; Cut</option>
<option className="bg-dark text-white" value="spa">Hair Spa Treatment</option>
<option className="bg-dark text-white" value="facial">Facial &amp; Skin Care</option>
<option className="bg-dark text-white" value="bridal">Bridal Makeup</option>
<option className="bg-dark text-white" value="beard">Beard Grooming</option>
</select>
</div>

<div className="relative">
<input className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white/80 focus:outline-none focus:border-gold transition-colors" id="datetime" required="" type="datetime-local"/>
</div>
</div>
<div className="pt-4 flex flex-col sm:flex-row gap-4 justify-end">
<button className="px-8 py-4 bg-gold text-dark text-sm font-medium hover:bg-white transition-colors duration-300 w-full sm:w-auto text-center" type="submit">
                            Confirm Booking
                        </button>
</div>

<div className="hidden mt-4 p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-sm text-center" id="successMsg">
                        Thank you! Your appointment request has been received. We will contact you soon.
                    </div>
</form>
</div>
</div>
</section>

<section className="py-24 bg-dark">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mb-16 text-center opacity-0-js animate-on-scroll">Client Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 opacity-0-js animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="flex text-gold mb-4 gap-1">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-white/70 mb-6 italic leading-relaxed">"Absolutely phenomenal experience. The attention to detail and the luxurious ambiance makes Stylo stand out from any other salon I've visited."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-gold">SJ</div>
<div>
<h5 className="text-xs font-medium text-white">Sarah Jenkins</h5>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Hair Styling</span>
</div>
</div>
</div>

<div className="glass-panel p-8 opacity-0-js animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="flex text-gold mb-4 gap-1">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-white/70 mb-6 italic leading-relaxed">"I booked them for my bridal makeup. The team was so professional and made me feel like royalty. The makeup stayed flawless all day."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-gold">MR</div>
<div>
<h5 className="text-xs font-medium text-white">Maria Rodriguez</h5>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Bridal Package</span>
</div>
</div>
</div>

<div className="glass-panel p-8 opacity-0-js animate-on-scroll" style={{animationDelay: '0.3s'}}>
<div className="flex text-gold mb-4 gap-1">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-white/70 mb-6 italic leading-relaxed">"Best beard grooming in the city. The hot towel treatment and precision cut show they truly care about their craft. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-gold">DT</div>
<div>
<h5 className="text-xs font-medium text-white">David Thompson</h5>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Grooming</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden bg-gold text-dark">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&amp;fit=crop&amp;q=80')] opacity-5 mix-blend-overlay object-cover w-full h-full"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 opacity-0-js animate-on-scroll">
<h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight mb-6">Ready for Your Makeover?</h2>
<p className="text-sm font-medium text-dark/70 mb-10">Step into our world of luxury and let us transform your style.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 bg-dark text-gold text-sm font-medium hover:bg-white hover:text-dark transition-colors duration-300" href="#book">
                    Book Now
                </a>
<a className="px-8 py-4 border border-dark text-dark text-sm font-medium hover:bg-dark hover:text-white transition-colors duration-300 flex items-center justify-center gap-2" href="#">
<iconify-icon height="18" icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    WhatsApp Us
                </a>
</div>
</div>
</section>

<footer className="bg-[#050510] pt-20 pb-10 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-gold mb-6">Stylo</h3>
<p className="text-xs font-light text-white/50 leading-relaxed mb-6">
                        Where luxury meets expertise. Redefining the salon experience with premium care and sophisticated style.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors" href="#">
<iconify-icon height="16" icon="solar:camera-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors" href="#">
<iconify-icon height="16" icon="solar:letter-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors" href="#">
<iconify-icon height="16" icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-serif text-base text-white mb-6 tracking-wide">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-xs text-white/50 hover:text-gold transition-colors" href="#home">Home</a></li>
<li><a className="text-xs text-white/50 hover:text-gold transition-colors" href="#about">Our Story</a></li>
<li><a className="text-xs text-white/50 hover:text-gold transition-colors" href="#services">Services</a></li>
<li><a className="text-xs text-white/50 hover:text-gold transition-colors" href="#gallery">Portfolio</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-base text-white mb-6 tracking-wide">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-xs text-white/50">
<iconify-icon className="text-gold shrink-0 mt-0.5" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>123 Luxury Avenue, Fashion District,<br/>New York, NY 10001</span>
</li>
<li className="flex items-center gap-3 text-xs text-white/50">
<iconify-icon className="text-gold shrink-0" height="16" icon="solar:phone-linear" width="16"></iconify-icon>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center gap-3 text-xs text-white/50">
<iconify-icon className="text-gold shrink-0" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
<span>hello@stylosalon.com</span>
</li>
</ul>
</div>

<div className="h-40 rounded-sm overflow-hidden border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744400755!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s" style={{border: '0', filter: 'grayscale(100%) invert(90%)'}} width="100%"></iframe>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-white/40 uppercase tracking-widest">© 2023 Stylo Barber Shop. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors" href="#">Privacy Policy</a>
<a className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
