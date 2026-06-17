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
stone: {
50: '#F9F9F8',
100: '#F2F0ED',
200: '#E4E1DD',
300: '#D0CCC5',
400: '#A49F98',
500: '#7D7873',
600: '#5C5854',
800: '#343230',
900: '#1F1E1D',
950: '#0F0F0E',
},
hills: {
gold: '#C5A67C'
}
},
transitionDuration: {
'2000': '2000ms',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-wrapper');
            revealElements.forEach(el => observer.observe(el));
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
      

<div className="bg-stone-900 text-stone-100 text-[10px] md:text-xs py-2.5 text-center tracking-widest font-medium z-50 relative uppercase">
        Open Daily: 10:30 AM — 20:30 PM | Sukhumvit 49
    </div>

<nav className="sticky top-0 z-40 w-full bg-stone-50/80 backdrop-blur-xl border-b border-stone-200 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 py-5 flex justify-between items-center">

<button className="lg:hidden text-stone-800">
<span className="iconify" data-icon="solar:hamburger-menu-linear" data-width="24"></span>
</button>

<a className="text-xl md:text-2xl font-serif tracking-tight text-stone-900 font-medium z-10" href="#">
                THE HILLS
            </a>

<div className="hidden lg:flex items-center space-x-10 text-sm font-medium tracking-wide text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#products">Products</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="tel:+66850000557">
<span className="iconify" data-icon="solar:phone-calling-linear" data-width="16"></span>
                    +66 85 000 0557
                </a>
<a className="bg-stone-900 text-stone-50 px-6 py-2.5 rounded-sm text-xs md:text-sm font-medium tracking-wide hover:bg-stone-800 transition-all duration-300" href="#book">
                    Book Now
                </a>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="The Hills Ambience" className="w-full h-full object-cover object-center brightness-[0.85] scale-105 animate-[pulse_15s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{animation: 'none', transition: 'transform 10s ease'}}/>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto space-y-6">
<div className="flex items-center justify-center gap-3 hero-enter" style={{animationDelay: '0.1s'}}>
<div className="h-[1px] w-8 bg-white/60"></div>
<p className="text-xs font-medium tracking-[0.25em] uppercase opacity-90">Bangkok, Thailand</p>
<div className="h-[1px] w-8 bg-white/60"></div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.1] hero-enter" style={{animationDelay: '0.3s'}}>
                Organic wellness,<br/>refined by nature.
            </h1>
<p className="text-sm md:text-base font-light text-white/80 max-w-lg mx-auto hero-enter" style={{animationDelay: '0.5s'}}>
                Experience the best hair, nail, and beauty salon in Bangkok. A sanctuary free of toxic chemicals, dedicated to your well-being.
            </p>
<div className="pt-6 hero-enter" style={{animationDelay: '0.7s'}}>
<a className="inline-flex items-center gap-2 border border-white text-white px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-white hover:text-stone-900 transition-all duration-300" href="#services">
                    Explore Services
                    <span className="iconify" data-icon="solar:arrow-right-linear" data-width="16"></span>
</a>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-stone-50 overflow-hidden" id="about">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="space-y-8 order-2 md:order-1 reveal-wrapper">
<div className="inline-block border-b border-stone-800 pb-1">
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase">The Experience</span>
</div>
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
                    Relaxing Ambiance,<br/>Finest Organic Products.
                </h2>
<div className="space-y-6 text-stone-600 font-light text-base md:text-lg leading-relaxed">
<p>
                        From the moment you step into <strong>The Hills</strong>, you'll feel the difference that sets us apart. Unlike other salons, you are greeted with a refreshing atmosphere filled with clean air, free from the strong odor of chemicals and artificial fragrances.
                    </p>
<p>
                        Our professional staff is dedicated to providing personalized services from head to toe, ensuring safety for those with sensitive skin and even during pregnancy. Experience fabulous and healthy results with our team today.
                    </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="flex flex-col gap-2">
<span className="iconify text-stone-800" data-icon="solar:leaf-linear" data-width="24"></span>
<span className="text-xs font-medium uppercase tracking-wider text-stone-500">Certified Organic</span>
</div>
<div className="flex flex-col gap-2">
<span className="iconify text-stone-800" data-icon="solar:air-buds-case-minimalistic-linear" data-width="24"></span>
<span className="text-xs font-medium uppercase tracking-wider text-stone-500">Toxin-Free Environment</span>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative aspect-[4/5] image-scale-wrapper rounded-sm reveal-wrapper delay-100">
<img alt="The Hills Interior" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="services">
<div className="max-w-screen-xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-wrapper">
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-4 block">Our Expertise</span>
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight">Curated Menu</h2>
<p className="mt-4 text-stone-500 font-light">Comprehensive care for hair, nails, lashes, and skin.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">

<div className="bg-stone-50 p-10 group hover:bg-white transition-colors duration-500 reveal-wrapper delay-0">
<div className="mb-6 overflow-hidden aspect-[4/3] rounded-sm relative">
<img alt="Hair Services" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Hair Artistry</h3>
<ul className="space-y-2 text-sm text-stone-500 font-light mb-6">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Precision Cuts &amp; Styling</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Organic Coloring</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Perm &amp; Rebonding</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Premium Extensions</li>
</ul>
<a className="text-xs font-medium uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors" href="#">View Hair Menu</a>
</div>

<div className="bg-stone-50 p-10 group hover:bg-white transition-colors duration-500 reveal-wrapper delay-100">
<div className="mb-6 overflow-hidden aspect-[4/3] rounded-sm relative">
<img alt="Nail Services" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Nail Care</h3>
<ul className="space-y-2 text-sm text-stone-500 font-light mb-6">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Classic Mani-Pedi</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Gel Polish &amp; Art</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Organic Spa Treatments</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Hand &amp; Foot Wellness</li>
</ul>
<a className="text-xs font-medium uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors" href="#">View Nail Menu</a>
</div>

<div className="bg-stone-50 p-10 group hover:bg-white transition-colors duration-500 reveal-wrapper delay-200">
<div className="mb-6 overflow-hidden aspect-[4/3] rounded-sm relative">
<img alt="Beauty Services" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Beauty Essentials</h3>
<ul className="space-y-2 text-sm text-stone-500 font-light mb-6">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Lash &amp; Brow</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Waxing (Face &amp; Body)</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Professional Makeup</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-300 rounded-full"></span>Event Updos</li>
</ul>
<a className="text-xs font-medium uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors" href="#">View Beauty Menu</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-100" id="products">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-wrapper">
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-6">
                    Safety &amp; Quality First
                </h2>
<p className="text-stone-400 font-light text-lg leading-relaxed mb-8">
                    We top-of-the-line healthy and organic products cater to customers of all types. We meticulously select brands that align with our philosophy of non-toxic beauty.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-stone-800 pt-8">
<div>
<h4 className="font-serif text-xl mb-2 text-white">Pregnancy Safe</h4>
<p className="text-sm text-stone-500 leading-relaxed">Formulas gentle enough for expecting mothers and sensitive skin types.</p>
</div>
<div>
<h4 className="font-serif text-xl mb-2 text-white">No Harsh Odors</h4>
<p className="text-sm text-stone-500 leading-relaxed">A chemical-free environment designed for your respiratory health and relaxation.</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 reveal-wrapper delay-100">
<img alt="Product 1" className="w-full h-64 object-cover rounded-sm opacity-80" src="https://images.unsplash.com/photo-1556228720-1927659b8b60?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Product 2" className="w-full h-64 object-cover rounded-sm opacity-80 mt-8" src="https://images.unsplash.com/photo-1571290274554-6a2eaa77abc1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="contact">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="reveal-wrapper space-y-10">
<div>
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight mb-4">Visit The Hills</h2>
<p className="text-stone-500 font-light">Your sanctuary in the city.</p>
</div>
<div className="space-y-8">
<div className="flex gap-4 items-start">
<span className="iconify text-stone-900 mt-1" data-icon="solar:map-point-linear" data-width="24"></span>
<div>
<h4 className="text-sm font-medium uppercase tracking-wide text-stone-900 mb-1">Address</h4>
<p className="text-stone-600 font-light">
                                5/5 Sukhumvit 49, Khlong Tan Nuea,<br/>
                                Watthana, Bangkok 10110
                            </p>
<a className="text-xs text-stone-400 underline mt-2 block hover:text-stone-800" href="#">Get Directions</a>
</div>
</div>
<div className="flex gap-4 items-start">
<span className="iconify text-stone-900 mt-1" data-icon="solar:clock-circle-linear" data-width="24"></span>
<div>
<h4 className="text-sm font-medium uppercase tracking-wide text-stone-900 mb-1">Opening Hours</h4>
<p className="text-stone-600 font-light">
                                Mon - Sun: 10:30 — 20:30<br/>
                                (Open Daily)
                            </p>
</div>
</div>
<div className="flex gap-4 items-start">
<span className="iconify text-stone-900 mt-1" data-icon="solar:chat-round-call-linear" data-width="24"></span>
<div>
<h4 className="text-sm font-medium uppercase tracking-wide text-stone-900 mb-1">Get in Touch</h4>
<p className="text-stone-600 font-light space-y-1 block">
<span className="block">Tel: +66 85 000 0557</span>
<span className="block">Line: @thehills</span>
<span className="block">Email: thehillsbkk@gmail.com</span>
</p>
</div>
</div>
</div>
<div className="flex gap-4 pt-4">
<a className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all" href="https://www.facebook.com/thehillsbkk">
<span className="iconify" data-icon="brandico:facebook" data-width="16"></span>
</a>
<a className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all" href="https://www.instagram.com/thehills.salon">
<span className="iconify" data-icon="brandico:instagram" data-width="16"></span>
</a>
</div>
</div>

<div className="bg-white p-8 md:p-12 shadow-sm border border-stone-100 rounded-sm reveal-wrapper delay-100" id="book">
<h3 className="text-2xl font-serif text-stone-900 mb-6">Request Appointment</h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-stone-500">Name</label>
<input className="w-full bg-stone-50 border-b border-stone-200 px-3 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-stone-500">Phone</label>
<input className="w-full bg-stone-50 border-b border-stone-200 px-3 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" placeholder="+66 ..." type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-stone-500">Email</label>
<input className="w-full bg-stone-50 border-b border-stone-200 px-3 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" placeholder="email@example.com" type="email"/>
</div>
<div className="space-y-3 pt-2">
<label className="text-xs font-medium uppercase tracking-wider text-stone-500">Service of Interest</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 cursor-pointer group hover:text-stone-900 text-stone-600 transition-colors">
<input type="checkbox"/>
<span className="text-sm">Hair Services</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group hover:text-stone-900 text-stone-600 transition-colors">
<input type="checkbox"/>
<span className="text-sm">Nail Services</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group hover:text-stone-900 text-stone-600 transition-colors">
<input type="checkbox"/>
<span className="text-sm">Lash &amp; Brow</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group hover:text-stone-900 text-stone-600 transition-colors">
<input type="checkbox"/>
<span className="text-sm">Waxing</span>
</label>
</div>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-medium uppercase tracking-wider text-stone-500">Preferred Date/Time</label>
<input className="w-full bg-stone-50 border-b border-stone-200 px-3 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" placeholder="e.g. Tomorrow afternoon" type="text"/>
</div>
<div className="pt-4">
<button className="w-full bg-stone-900 text-stone-50 py-4 rounded-sm text-sm font-medium tracking-wide hover:bg-stone-800 transition-all flex justify-center items-center gap-2 group" type="button">
                            Submit Request
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-linear" data-width="16"></span>
</button>
</div>
<p className="text-xs text-center text-stone-400 font-light">We will confirm your appointment via phone or Line.</p>
</form>
</div>
</div>
</section>

<div className="w-full h-80 bg-stone-200 relative grayscale hover:grayscale-0 transition-all duration-700">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.766345698384!2d100.5727972!3d13.7277566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f04944b3607%3A0x6a0e8354c41463e2!2s5%20Soi%20Sukhumvit%2049%2C%20Khwaeng%20Khlong%20Tan%20Nuea%2C%20Khet%20Watthana%2C%20Krung%20Thep%20Maha%20Nakhon%2010110%2C%20Thailand!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
<div className="absolute inset-0 bg-stone-900/10 pointer-events-none"></div>
</div>

<footer className="bg-stone-950 text-stone-400 py-12 text-sm border-t border-stone-900">
<div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-stone-50 font-serif text-lg tracking-tight">THE HILLS</div>
<div className="flex gap-6 text-xs tracking-wide">
<a className="hover:text-stone-200 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-200 transition-colors" href="#">Terms of Service</a>
</div>
<div className="text-xs font-light">
                © 2018 by The Hills Salon.
            </div>
</div>
</footer>



    </>
  );
}
