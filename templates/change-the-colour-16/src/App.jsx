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



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#0F172A]/90', 'backdrop-blur-md', 'shadow-lg');
            } else {
                navbar.classList.remove('bg-[#0F172A]/90', 'backdrop-blur-md', 'shadow-lg');
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
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
      

<header className="fixed w-full top-0 z-50 transition-all duration-300 py-4 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

<a className="text-2xl md:text-3xl font-serif text-[#F8FAFC] tracking-tight hover:opacity-80 transition-opacity relative z-50" href="#">
                RALSS LUXE
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-slate-200 hover:text-[#EC4899] transition-colors tracking-wide uppercase" href="#about">About</a>
<a className="text-sm font-light text-slate-200 hover:text-[#EC4899] transition-colors tracking-wide uppercase" href="#services">Services</a>
<a className="text-sm font-light text-slate-200 hover:text-[#EC4899] transition-colors tracking-wide uppercase" href="#gallery">Gallery</a>
<a className="text-sm font-light text-slate-200 hover:text-[#EC4899] transition-colors tracking-wide uppercase" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#EC4899] text-white text-sm font-medium tracking-wide hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.4)]" href="#appointment">
<span>Book Now</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>

<button aria-label="Menu" className="md:hidden text-white relative z-50">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative w-full h-[70vh] min-h-[550px] max-h-[800px] overflow-hidden flex items-center justify-center bg-[#0F172A]">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Luxury Salon Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>

<div className="bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/70 to-[#EC4899]/10 z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-12">
<div className="max-w-2xl reveal-on-scroll">
<p className="text-[#EC4899] text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium">Premium Unisex Salon</p>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 tracking-tight">
                    Luxury Hair, Skin &amp; <br/> <span className="italic text-pink-200">Grooming Experience</span>
</h1>
<p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg">
                    Step into a sanctuary of style. Where expert artistry meets premium care, tailored specifically for you.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-[#EC4899] text-white text-sm tracking-wide font-medium hover:scale-105 transition-transform duration-300" href="#appointment">
                        Book Appointment
                    </a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 border border-white/30 text-white backdrop-blur-sm text-sm tracking-wide font-medium hover:bg-white hover:text-[#0F172A] transition-all duration-300" href="https://wa.me/">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                        WhatsApp Now
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 bg-[#FDF2F8] overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal-on-scroll">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EC4899]/10 z-0"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C9A24D]/10 z-0"></div>
<img alt="Ralss Luxe Founder" className="relative z-10 w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-8 left-8 md:right-8 md:left-auto max-w-xs p-6 bg-white shadow-xl z-20 border-l-4 border-[#C9A24D]">
<p className="font-serif italic text-slate-800 text-lg">"Beauty is not just about looks, it's a feeling of confidence and luxury."</p>
</div>
</div>

<div className="reveal-on-scroll reveal-delay-200">
<h2 className="text-[#C9A24D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Story</h2>
<h3 className="text-3xl md:text-4xl font-serif text-[#0F172A] mb-6 tracking-tight">Crafting Excellence Since 2015</h3>
<p className="text-slate-600 font-light leading-relaxed mb-6">
                        At Ralss Luxe, we believe that grooming is an art form. Founded with a passion for transforming the ordinary into the extraordinary, our salon is a haven for those seeking a premium, personalized experience.
                    </p>
<p className="text-slate-600 font-light leading-relaxed mb-8">
                        Our customer-first philosophy ensures that every visit is more than just a service—it's a retreat. From the moment you walk in, you are the center of our universe.
                    </p>
<div className="flex items-center gap-4">
<div className="font-serif text-3xl italic text-[#0F172A] opacity-80">Ralss.</div>
<div>
<p className="font-serif text-[#0F172A] text-lg">Ralss Founder</p>
<p className="text-xs text-[#C9A24D] uppercase tracking-wide">Master Stylist</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#EC4899] text-xs font-semibold tracking-[0.2em] uppercase">What We Do</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 tracking-tight">Curated Services</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#EC4899] transition-all duration-500 reveal-on-scroll">
<div className="w-12 h-12 mb-6 text-[#EC4899] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:scissors-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Hair Artistry</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Precision cuts, coloring, and styling tailored to your face shape and personality.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#EC4899] transition-all duration-500 reveal-on-scroll reveal-delay-100">
<div className="w-12 h-12 mb-6 text-[#EC4899] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Skin &amp; Glow</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Rejuvenating facials and treatments that bring out your natural radiance.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#EC4899] transition-all duration-500 reveal-on-scroll reveal-delay-200">
<div className="w-12 h-12 mb-6 text-[#EC4899] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:user-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Grooming</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Beard shaping, manicures, and pedicures for the modern gentleman and lady.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#EC4899] transition-all duration-500 reveal-on-scroll reveal-delay-300">
<div className="w-12 h-12 mb-6 text-[#EC4899] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:crown-star-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Bridal Luxe</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Complete bridal packages ensuring you look breathtaking on your special day.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div>
<span className="text-[#C9A24D] text-xs font-semibold tracking-[0.2em] uppercase">Portfolio</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#0F172A] tracking-tight">Inside Ralss Luxe</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] border-b border-[#EC4899] pb-1 hover:text-[#EC4899] transition-colors" href="#">
                    View Full Gallery <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll">
<img alt="Haircut" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Hair Styling</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll reveal-delay-100">
<img alt="Interior" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Interiors</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll">
<img alt="Coloring" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Coloring</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll reveal-delay-200">
<img alt="Products" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Premium Products</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll">
<img alt="Facial" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Skin Care</p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] border-b border-[#EC4899] pb-1" href="#">
                    View Full Gallery <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#FDF2F8] to-[#E2E8F0]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-serif text-[#0F172A] tracking-tight">Client Stories</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll">
<div className="flex text-[#C9A24D] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6">"Absolutely stunning experience. The attention to detail is unmatched in the city. My hair has never looked better."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div>
<p className="font-medium text-[#0F172A] text-sm">Sarah Jenkins</p>
<p className="text-xs text-slate-400">Regular Client</p>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll reveal-delay-100">
<div className="flex text-[#C9A24D] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6">"The ambiance is pure luxury. I came for a beard trim and left feeling revitalized. Highly recommend the grooming package."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div>
<p className="font-medium text-[#0F172A] text-sm">David Chen</p>
<p className="text-xs text-slate-400">VIP Member</p>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll reveal-delay-200">
<div className="flex text-[#C9A24D] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6">"Booked the bridal package. The team made me feel like a queen. Professional, punctual, and incredibly talented."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg"/>
</div>
<div>
<p className="font-medium text-[#0F172A] text-sm">Elena Rodriguez</p>
<p className="text-xs text-slate-400">Bride</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#EC4899] text-xs font-semibold tracking-[0.2em] uppercase">Visit Us</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#0F172A] tracking-tight">Our Locations</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="flex flex-col border border-slate-100 bg-slate-50 reveal-on-scroll">
<div className="h-48 w-full bg-slate-200 relative">

<div className="absolute inset-0 flex items-center justify-center bg-[#0F172A]/5 text-[#0F172A]/20">
<iconify-icon icon="solar:map-point-linear" width="48"></iconify-icon>
</div>
<img alt="Map" className="w-full h-full object-cover grayscale opacity-50" onerror="this.style.display='none'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-8">
<h3 className="text-xl font-serif text-[#0F172A] mb-2">Downtown Flagship</h3>
<p className="text-slate-500 font-light text-sm mb-4">1204 Luxury Lane, Fashion District, City Center</p>
<div className="flex flex-col gap-3 mb-6">
<a className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#EC4899]" href="tel:+1234567890">
<iconify-icon className="text-[#C9A24D]" icon="solar:phone-calling-linear" width="18"></iconify-icon> +1 (555) 123-4567
                            </a>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#C9A24D]" icon="solar:clock-circle-linear" width="18"></iconify-icon> Mon-Sun: 10AM - 9PM
                            </div>
</div>
<button className="w-full py-2 border border-[#0F172A] text-[#0F172A] text-sm font-medium hover:bg-[#0F172A] hover:text-white transition-colors uppercase tracking-wide">
                            Get Directions
                        </button>
</div>
</div>

<div className="flex flex-col border border-slate-100 bg-slate-50 reveal-on-scroll reveal-delay-100">
<div className="h-48 w-full bg-slate-200 relative">
<div className="absolute inset-0 flex items-center justify-center bg-[#0F172A]/5 text-[#0F172A]/20">
<iconify-icon icon="solar:map-point-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-8">
<h3 className="text-xl font-serif text-[#0F172A] mb-2">West End Studio</h3>
<p className="text-slate-500 font-light text-sm mb-4">88 Boulevard, West End Plaza, Metro City</p>
<div className="flex flex-col gap-3 mb-6">
<a className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#EC4899]" href="tel:+1234567890">
<iconify-icon className="text-[#C9A24D]" icon="solar:phone-calling-linear" width="18"></iconify-icon> +1 (555) 987-6543
                            </a>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#C9A24D]" icon="solar:clock-circle-linear" width="18"></iconify-icon> Mon-Sun: 10AM - 9PM
                            </div>
</div>
<button className="w-full py-2 border border-[#0F172A] text-[#0F172A] text-sm font-medium hover:bg-[#0F172A] hover:text-white transition-colors uppercase tracking-wide">
                            Get Directions
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] relative overflow-hidden" id="appointment">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#EC4899]/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal-on-scroll">
<span className="text-[#EC4899] text-xs font-semibold tracking-[0.2em] uppercase">Reservations</span>
<h2 className="text-3xl md:text-5xl font-serif mt-3 text-white tracking-tight mb-6">Secure Your <br/>Experience</h2>
<p className="text-slate-400 font-light leading-relaxed mb-10 max-w-md">
                        Booking with Ralss Luxe is simple. Fill out the form, and our concierge will confirm your appointment instantly via WhatsApp.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-full text-[#EC4899] flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Direct Line</p>
<p className="text-slate-400 text-sm font-light">+1 (800) RALSS-LUXE</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-full text-[#EC4899] flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Email Us</p>
<p className="text-slate-400 text-sm font-light">concierge@ralssluxe.com</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 shadow-2xl reveal-on-scroll reveal-delay-200">
<form action="#" className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#EC4899] focus:ring-1 focus:ring-[#EC4899] transition-all" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#EC4899] focus:ring-1 focus:ring-[#EC4899] transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Service Category</label>
<select className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#EC4899] focus:ring-1 focus:ring-[#EC4899] transition-all text-slate-600">
<option>Hair Styling &amp; Cut</option>
<option>Skin Treatment</option>
<option>Grooming / Spa</option>
<option>Bridal Package</option>
</select>
</div>
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Message (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#EC4899] focus:ring-1 focus:ring-[#EC4899] transition-all" placeholder="Any specific requests?" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-[#EC4899] text-white font-semibold text-sm tracking-widest uppercase hover:brightness-110 transition-all duration-300" type="submit">
                            Confirm Booking
                        </button>
<p className="text-center text-xs text-slate-400 mt-4">You will receive a WhatsApp confirmation shortly.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#020617] text-slate-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-serif text-white tracking-tight block mb-6" href="#">RALSS LUXE</a>
<p className="text-sm font-light leading-relaxed mb-6">
                        Redefining luxury grooming with passion, precision, and premium care.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#EC4899] transition-colors" href="#"><iconify-icon icon="ri:instagram-line" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#EC4899] transition-colors" href="#"><iconify-icon icon="ri:facebook-fill" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#EC4899] transition-colors" href="#"><iconify-icon icon="ri:twitter-x-line" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Explore</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#EC4899] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#EC4899] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#EC4899] transition-colors" href="#gallery">Gallery</a></li>
<li><a className="hover:text-[#EC4899] transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Services</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#EC4899] transition-colors" href="#">Haircuts &amp; Styling</a></li>
<li><a className="hover:text-[#EC4899] transition-colors" href="#">Bridal Makeup</a></li>
<li><a className="hover:text-[#EC4899] transition-colors" href="#">Skin Therapy</a></li>
<li><a className="hover:text-[#EC4899] transition-colors" href="#">Men's Grooming</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#EC4899]" icon="solar:phone-calling-linear" width="16"></iconify-icon> +1 (555) 123-4567</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#EC4899]" icon="solar:letter-linear" width="16"></iconify-icon> hello@ralssluxe.com</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p>© 2023 Ralss Luxe Salon. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group" href="https://wa.me/">
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
<span className="absolute right-full mr-4 bg-white text-[#0F172A] px-3 py-1 rounded text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat with us</span>
</a>



    </>
  );
}
