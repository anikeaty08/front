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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
            
            // Navbar Scroll Effect
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    nav.classList.add('py-2');
                    nav.classList.remove('py-4');
                } else {
                    nav.classList.add('py-4');
                    nav.classList.remove('py-2');
                }
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-2xl tracking-tight font-medium text-white font-serif relative group" href="#">
                RALSS<span className="text-[#00D7EF]">LUXE</span>
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7EF] transition-all duration-300 group-hover:w-full"></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-300">
<a className="hover:text-[#00D7EF] transition-colors" href="#about">About</a>
<a className="hover:text-[#00D7EF] transition-colors" href="#services">Services</a>
<a className="hover:text-[#00D7EF] transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-[#00D7EF] transition-colors" href="#location">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium tracking-wide text-[#0F172A] uppercase bg-[#00D7EF] rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(0,215,239,0.5)] transition-all duration-300" href="#booking">
                Book Now
            </a>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full glass-nav border-t border-white/10 p-6 flex flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-gray-300 hover:text-[#00D7EF]" href="#about">About</a>
<a className="text-gray-300 hover:text-[#00D7EF]" href="#services">Services</a>
<a className="text-gray-300 hover:text-[#00D7EF]" href="#gallery">Gallery</a>
<a className="text-gray-300 hover:text-[#00D7EF]" href="#location">Contact</a>
<a className="text-[#00D7EF]" href="#booking">Book Appointment</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Salon Interior" className="w-full h-full object-cover object-center opacity-60 scale-105 animate-float" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=2532&amp;auto=format&amp;fit=crop" style={{animationDuration: '20s'}}/>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#00D7EF]/10"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F172A]/90 to-transparent"></div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-2xl reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D7EF]/10 border border-[#00D7EF]/30 text-[#00D7EF] text-xs font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#00D7EF] animate-pulse"></span>
                    Premium Unisex Salon
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-white mb-6">
                    One Stop for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D7EF] to-white">Every Style</span>
</h1>
<p className="text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed max-w-lg">
                    Experience premium hair and beauty services in the heart of Coimbatore. Luxury redefined for him and her.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-[#0F172A] bg-[#00D7EF] rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,215,239,0.3)]" href="#booking">
                        Book Appointment
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-white border border-white/20 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 hover:border-[#00D7EF]/50 transition-all duration-300" href="#services">
                        View Services
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative z-10">
<img alt="Stylist at work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1674&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border border-[#00D7EF]/30 z-20 hidden md:block">
<img alt="Salon Product" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&amp;w=1770&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00D7EF]/20 rounded-full blur-3xl -z-10"></div>
</div>

<div className="reveal delay-200">
<h2 className="text-[#C9A24D] font-medium tracking-widest text-xs uppercase mb-3">Our Story</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">Luxury in Every Detail</h3>
<p className="text-gray-400 leading-relaxed mb-6 font-light">
                        At <strong className="text-white font-normal">Ralss Luxe</strong>, we believe that style is a personal signature. Our unisex salon in Coimbatore combines modern aesthetics with traditional hospitality to offer you a sanctuary of relaxation.
                    </p>
<p className="text-gray-400 leading-relaxed mb-8 font-light">
                        Our team of experienced stylists uses only premium international products to ensure your hair and skin receive the care they deserve. Whether it's a transformative haircut or a rejuvenating spa session, we are here to elevate your style.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-gray-300 text-sm">
<span className="iconify text-[#00D7EF]" data-icon="lucide:check-circle-2" data-width="20"></span>
                            Professional Unisex Services
                        </li>
<li className="flex items-center gap-3 text-gray-300 text-sm">
<span className="iconify text-[#00D7EF]" data-icon="lucide:check-circle-2" data-width="20"></span>
                            Premium International Products
                        </li>
<li className="flex items-center gap-3 text-gray-300 text-sm">
<span className="iconify text-[#00D7EF]" data-icon="lucide:check-circle-2" data-width="20"></span>
                            Experienced Stylists
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50 relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D7EF]/5 rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C9A24D]/5 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Premium Services</h2>
<p className="text-gray-400 font-light">Curated treatments designed to make you look and feel your absolute best.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:border-[#00D7EF]/50 reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-[#00D7EF]/10 flex items-center justify-center text-[#00D7EF] mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:scissors" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Hair Styling</h3>
<p className="text-sm text-gray-400 font-light mb-6">Precision cuts, creative styling, and personalized looks for every occasion.</p>
<a className="text-xs font-medium text-[#00D7EF] flex items-center gap-1 group-hover:gap-2 transition-all" href="#booking">
                        Book Now <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group relative glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:border-[#00D7EF]/50 reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-[#00D7EF]/10 flex items-center justify-center text-[#00D7EF] mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:palette" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Hair Coloring</h3>
<p className="text-sm text-gray-400 font-light mb-6">Global color, highlights, balayage, and root touch-ups using ammonia-free products.</p>
<a className="text-xs font-medium text-[#00D7EF] flex items-center gap-1 group-hover:gap-2 transition-all" href="#booking">
                        Book Now <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group relative glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:border-[#00D7EF]/50 reveal delay-300">
<div className="w-12 h-12 rounded-xl bg-[#00D7EF]/10 flex items-center justify-center text-[#00D7EF] mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Beauty Treatments</h3>
<p className="text-sm text-gray-400 font-light mb-6">Facials, cleanup, and skin rejuvenation therapies customized for your skin type.</p>
<a className="text-xs font-medium text-[#00D7EF] flex items-center gap-1 group-hover:gap-2 transition-all" href="#booking">
                        Book Now <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group relative glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:border-[#00D7EF]/50 reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-[#00D7EF]/10 flex items-center justify-center text-[#00D7EF] mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:gem" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Spa &amp; Grooming</h3>
<p className="text-sm text-gray-400 font-light mb-6">Manicure, pedicure, head massage, and complete grooming packages.</p>
<a className="text-xs font-medium text-[#00D7EF] flex items-center gap-1 group-hover:gap-2 transition-all" href="#booking">
                        Book Now <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-[#00D7EF] transition-colors" href="#booking">
                    View All Services <span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-24 relative" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
<div>
<h2 className="text-[#C9A24D] font-medium tracking-widest text-xs uppercase mb-2">Portfolio</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Our Masterpieces</h3>
</div>
<p className="text-gray-400 text-sm font-light max-w-sm text-right md:text-left">
                    A glimpse into the ambiance and the art we create every day.
                </p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="relative group rounded-2xl overflow-hidden reveal">
<img alt="Salon Interior" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Interior Ambience</span>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden reveal delay-100">
<img alt="Hair Styling" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Hair Color</span>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden reveal delay-200">
<img alt="Makeup" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Professional Makeup</span>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden reveal">
<img alt="Barber" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&amp;w=2511&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Men's Grooming</span>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden reveal delay-100">
<img alt="Spa" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Spa Treatment</span>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden reveal delay-100">
<img alt="Salon Detail" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&amp;w=2636&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Premium Products</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00D7EF]/10 via-[#0F172A] to-[#0F172A]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-4xl font-medium text-center text-white mb-16 tracking-tight reveal">What Our Clients Say</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl reveal delay-100">
<div className="flex text-[#C9A24D] mb-4">
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
</div>
<p className="text-gray-300 font-light italic mb-6">"Absolutely stunning place. The vibe is so luxurious yet welcoming. My hair color turned out exactly how I wanted!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div>
<h4 className="text-white text-sm font-medium">Priya S.</h4>
<p className="text-gray-500 text-xs">Regular Client</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-200 transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,215,239,0.1)] border-t border-[#00D7EF]/30">
<div className="flex text-[#C9A24D] mb-4">
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
</div>
<p className="text-gray-300 font-light italic mb-6">"Best salon in Coimbatore. The staff is extremely professional and the interior is world-class. Highly recommended."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div>
<h4 className="text-white text-sm font-medium">Karthik R.</h4>
<p className="text-gray-500 text-xs">Customer</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-300">
<div className="flex text-[#C9A24D] mb-4">
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="18"></span>
</div>
<p className="text-gray-300 font-light italic mb-6">"Loved the spa session. It was incredibly relaxing. Ralss Luxe truly lives up to its name."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg"/>
</div>
<div>
<h4 className="text-white text-sm font-medium">Ananya M.</h4>
<p className="text-gray-500 text-xs">VIP Member</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#0F172A]" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-8 reveal">
<div>
<h2 className="text-[#C9A24D] font-medium tracking-widest text-xs uppercase mb-2">Visit Us</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Find Your Style <br/>Destination</h3>
<p className="text-gray-400 font-light">Conveniently located in Kavundampalayam, we offer ample parking and a serene environment.</p>
</div>
<div className="space-y-6">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#00D7EF] shrink-0">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Address</h4>
<p className="text-gray-400 text-sm font-light">No 14, Kaveri Nagar, Pombhuhar Nagar,<br/>Kavundampalayam Road, Edayar Palayam,<br/>Coimbatore-641025</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#00D7EF] shrink-0">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Contact</h4>
<p className="text-gray-400 text-sm font-light">+91 73583 91117<br/>0422 4697655</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#00D7EF] shrink-0">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Opening Hours</h4>
<p className="text-gray-400 text-sm font-light">Mon – Sun: 9:30 AM – 9:00 PM</p>
</div>
</div>
</div>
</div>

<div className="h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative reveal delay-200 group">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.142385368453!2d76.9427!3d11.028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzQyLjAiTiA3NsKwNTYnMzMuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)'}} width="100%">
</iframe>
<div className="absolute inset-0 pointer-events-none border border-[#00D7EF]/20 rounded-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="booking">
<div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#00D7EF]/10"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="glass-panel rounded-3xl p-8 md:p-12 reveal">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">Book Your Appointment</h2>
<p className="text-gray-400 font-light">Fill out the form below and we will confirm your slot.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm text-gray-400 ml-1">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00D7EF] focus:ring-1 focus:ring-[#00D7EF] transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm text-gray-400 ml-1">Phone Number</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00D7EF] focus:ring-1 focus:ring-[#00D7EF] transition-all" placeholder="+91 98765 43210" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm text-gray-400 ml-1">Service Category</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00D7EF] focus:ring-1 focus:ring-[#00D7EF] transition-all appearance-none">
<option className="bg-[#0F172A]">Hair Styling</option>
<option className="bg-[#0F172A]">Hair Coloring</option>
<option className="bg-[#0F172A]">Beauty Treatment</option>
<option className="bg-[#0F172A]">Spa &amp; Grooming</option>
</select>
<span className="absolute right-4 top-3.5 text-gray-400 pointer-events-none">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</div>
</div>
<div className="space-y-2">
<label className="text-sm text-gray-400 ml-1">Preferred Date</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00D7EF] focus:ring-1 focus:ring-[#00D7EF] transition-all [color-scheme:dark]" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm text-gray-400 ml-1">Message (Optional)</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00D7EF] focus:ring-1 focus:ring-[#00D7EF] transition-all" placeholder="Any specific requirements..." rows="3"></textarea>
</div>
<button className="w-full bg-[#00D7EF] text-[#0F172A] font-medium py-4 rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,215,239,0.3)] mt-4" type="button">
                        Confirm Booking
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-[#050B14] border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="text-center md:text-left">
<h2 className="text-2xl font-serif text-white tracking-tight">RALSS<span className="text-[#00D7EF]">LUXE</span></h2>
<p className="text-gray-500 text-sm mt-2">One Stop for Every Style</p>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00D7EF] hover:bg-white/10 transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00D7EF] hover:bg-white/10 transition-all" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00D7EF] hover:bg-white/10 transition-all" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-light">
<p>© 2025 Ralss Luxe Unisex Salon. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl pulse-btn hover:scale-110 transition-transform" href="https://wa.me/917358391117" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="28"></span>
</a>



    </>
  );
}
