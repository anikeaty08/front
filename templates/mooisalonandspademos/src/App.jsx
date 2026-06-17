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



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#1A1C20]/90', 'backdrop-blur-md', 'shadow-lg');
            } else {
                navbar.classList.remove('bg-[#1A1C20]/90', 'backdrop-blur-md', 'shadow-lg');
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
                MOOI.
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-slate-200 hover:text-[#10B981] transition-colors tracking-wide uppercase" href="#about">Why Mooi?</a>
<a className="text-sm font-light text-slate-200 hover:text-[#10B981] transition-colors tracking-wide uppercase" href="#services">Services</a>
<a className="text-sm font-light text-slate-200 hover:text-[#10B981] transition-colors tracking-wide uppercase" href="#reviews">Reviews</a>
<a className="text-sm font-light text-slate-200 hover:text-[#10B981] transition-colors tracking-wide uppercase" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#10B981] text-white text-sm font-medium tracking-wide hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]" href="https://www.vagaro.com/mooisalonandspa1/book-now" target="_blank">
<span>Book Now</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>

<button aria-label="Menu" className="md:hidden text-white relative z-50">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative w-full h-[80vh] min-h-[600px] max-h-[900px] overflow-hidden flex items-center justify-center bg-[#1A1C20]">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Mooi Salon Interior" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfec97fa-b7f1-4e68-b5a0-1e8c56e02b03_3840w.jpg"/>
</div>

<div className="bg-gradient-to-r from-[#1A1C20]/95 via-[#1A1C20]/60 to-[#10B981]/5 z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-12">
<div className="max-w-3xl reveal-on-scroll">
<p className="text-[#10B981] text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium">Boutique Salon in South Tampa</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6 tracking-tight">
                    Trendy Hair &amp; <br/> <span className="italic text-emerald-100">Glowing Skin</span>
</h1>
<p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg">
                    Experience the beauty of renewal. From expert highlights and cuts to rejuvenating facials and massage, welcome to your pristine sanctuary.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-[#10B981] text-white text-sm tracking-wide font-medium hover:scale-105 transition-transform duration-300" href="https://www.vagaro.com/mooisalonandspa1/book-now" target="_blank">
                        Book Online
                    </a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 border border-white/30 text-white backdrop-blur-sm text-sm tracking-wide font-medium hover:bg-white hover:text-[#1A1C20] transition-all duration-300" href="tel:8134094900">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        (813) 409-4900
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal-on-scroll">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#10B981]/10 z-0"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C9A24D]/10 z-0"></div>
<img alt="Mooi Salon Team" className="relative z-10 w-full h-[550px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-8 left-8 md:right-8 md:left-auto max-w-xs p-6 bg-white shadow-xl z-20 border-l-4 border-[#10B981]">
<p className="font-serif italic text-slate-800 text-lg">"To us, every client is special, so we accommodate our customers in every possible way."</p>
</div>
</div>

<div className="reveal-on-scroll reveal-delay-200">
<h2 className="text-[#C9A24D] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Why Mooi?</h2>
<h3 className="text-3xl md:text-5xl font-serif text-[#1A1C20] mb-6 tracking-tight">Because We Care.</h3>
<p className="text-slate-600 font-light leading-relaxed mb-6">
                        Mooi Salon and Spa is a full-service boutique beauty salon in South Tampa, Florida. We are renowned as the best salon in Tampa for highlights and color correction.
                    </p>
<p className="text-slate-600 font-light leading-relaxed mb-8">
                        In addition to exceptional customer service, we embrace new technology and use premium products to ensure your experience is seamless. From the moment you walk in, our mission is to provide outstanding services at affordable prices.
                    </p>
<div className="grid grid-cols-2 gap-6 mt-8">
<div>
<p className="font-serif text-[#1A1C20] text-lg">Hair Artistry</p>
<p className="text-xs text-slate-500 font-light mt-1">Trendy Cuts &amp; Color Specialists</p>
</div>
<div>
<p className="font-serif text-[#1A1C20] text-lg">Spa Retreat</p>
<p className="text-xs text-slate-500 font-light mt-1">Massage &amp; Skin Therapy</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1C20] text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#10B981] text-xs font-semibold tracking-[0.2em] uppercase">Prestige Services</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 tracking-tight">Curated For You</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#10B981] transition-all duration-500 reveal-on-scroll">
<div className="w-12 h-12 mb-6 text-[#10B981] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:scissors-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Cut &amp; Style</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Women's, men's, and kid's cuts. Plus expert blowouts and special occasion styling.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#10B981] transition-all duration-500 reveal-on-scroll reveal-delay-100">
<div className="w-12 h-12 mb-6 text-[#10B981] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Color &amp; Light</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Full color, root touch-ups, Balayage, Ombre, and corrective color by Tampa's specialists.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#10B981] transition-all duration-500 reveal-on-scroll reveal-delay-200">
<div className="w-12 h-12 mb-6 text-[#10B981] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Hair Treatments</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Keratin treatments, Brazilian blowouts, Perms, Relaxers, and deep conditioning.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#10B981] transition-all duration-500 reveal-on-scroll reveal-delay-300">
<div className="w-12 h-12 mb-6 text-[#10B981] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:spa-candle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Spa Services</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        European facials, chemical peels, body waxing, tinting, and relaxation massages.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#10B981] border-b border-[#10B981] pb-1 hover:text-white transition-colors" href="https://www.vagaro.com/mooisalonandspa1/book-now" target="_blank">
                    View Full Price List <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#F9FAFB]" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div>
<span className="text-[#C9A24D] text-xs font-semibold tracking-[0.2em] uppercase">Portfolio</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#1A1C20] tracking-tight">Our Work</h2>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll rounded-sm">
<img alt="Balayage" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/6b5f13_c91babf010784131a11429181acb3adf~mv2.jpg/v1/fit/w_480,h_601,q_90,enc_avif,quality_auto/6b5f13_c91babf010784131a11429181acb3adf~mv2.jpg"/>
<div className="absolute inset-0 bg-[#1A1C20]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Balayage</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll reveal-delay-100 rounded-sm">
<img alt="Hair Color" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/6b5f13_409751dad3f74f6a943fb35e661f59a2~mv2.jpeg/v1/fit/w_960,h_1438,q_90,enc_avif,quality_auto/6b5f13_409751dad3f74f6a943fb35e661f59a2~mv2.jpeg"/>
<div className="absolute inset-0 bg-[#1A1C20]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Expert Color</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll rounded-sm">
<img alt="Keratin Treatment" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/6b5f13_54b5347cd7304c1fa1efa9d1c67f2f43~mv2.jpg/v1/fit/w_960,h_641,q_90,enc_avif,quality_auto/6b5f13_54b5347cd7304c1fa1efa9d1c67f2f43~mv2.jpg"/>
<div className="absolute inset-0 bg-[#1A1C20]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Keratin Treatments</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll reveal-delay-200 rounded-sm">
<img alt="Facial" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/6b5f13_2b97245cc9234e9baa146cc6eb17cc58~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/6b5f13_2b97245cc9234e9baa146cc6eb17cc58~mv2.jpg"/>
<div className="absolute inset-0 bg-[#1A1C20]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">European Facials</p>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden reveal-on-scroll rounded-sm">
<img alt="Bridal Updo" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" src="https://static.wixstatic.com/media/6b5f13_649228f6758948f795a31ce4ad3da53e~mv2.jpg/v1/fit/w_960,h_1440,q_90,enc_avif,quality_auto/6b5f13_649228f6758948f795a31ce4ad3da53e~mv2.jpg"/>
<div className="absolute inset-0 bg-[#1A1C20]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Bridal Styles</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-serif text-[#1A1C20] tracking-tight">Client Stories</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#F9FAFB] p-10 reveal-on-scroll border border-slate-100">
<div className="flex text-[#C9A24D] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6 leading-relaxed">"Best &amp; Professional Services Provided Here Be Sure To Visit Them When You Are In Tampa."</p>
<div className="flex items-center gap-4">
<div>
<p className="font-serif text-[#1A1C20] text-sm">Sandy V.</p>
<p className="text-xs text-slate-400">Client</p>
</div>
</div>
</div>

<div className="bg-[#F9FAFB] p-10 reveal-on-scroll reveal-delay-100 border border-slate-100">
<div className="flex text-[#C9A24D] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6 leading-relaxed">"The team at Mooi Salon and Spa were so wonderful to me. I felt welcomed from the moment I walked in... My hair looks and feels like a million bucks. I cannot thank them enough!!!"</p>
<div className="flex items-center gap-4">
<div>
<p className="font-serif text-[#1A1C20] text-sm">Emma B.</p>
<p className="text-xs text-slate-400">Client</p>
</div>
</div>
</div>

<div className="bg-[#F9FAFB] p-10 reveal-on-scroll reveal-delay-200 border border-slate-100">
<div className="flex text-[#C9A24D] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6 leading-relaxed">"Newly renovated, pristine space with outstanding customer service and upscale product line. Definitely your choice if you want to look great..."</p>
<div className="flex items-center gap-4">
<div>
<p className="font-serif text-[#1A1C20] text-sm">Carol D.</p>
<p className="text-xs text-slate-400">Client</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1C20] relative overflow-hidden" id="contact">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#10B981]/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal-on-scroll text-white">
<span className="text-[#10B981] text-xs font-semibold tracking-[0.2em] uppercase">Visit Us</span>
<h2 className="text-3xl md:text-5xl font-serif mt-3 text-white tracking-tight mb-6">Mooi Salon &amp; Spa</h2>
<p className="text-slate-400 font-light leading-relaxed mb-10 max-w-md">
                        2307 South Dale Mabry Highway<br/>
                        Suite # E<br/>
                        Tampa, FL 33629
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-full text-[#10B981] flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Direct Line</p>
<a className="text-slate-400 text-sm font-light hover:text-white" href="tel:8134094900">(813) 409-4900</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-full text-[#10B981] flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Opening Hours</p>
<p className="text-slate-400 text-sm font-light">Mon - Sat: 9:00 AM - 8:00 PM</p>
<p className="text-slate-400 text-sm font-light">Sunday: Closed</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-full text-[#10B981] flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Email</p>
<a className="text-slate-400 text-sm font-light hover:text-white" href="mailto:frontdeskmooi@gmail.com">frontdeskmooi@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 shadow-2xl reveal-on-scroll reveal-delay-200">
<h3 className="text-2xl font-serif text-[#1A1C20] mb-6">Contact Us</h3>
<form action="#" className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all" placeholder="How can we help you?" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-[#1A1C20] text-white font-semibold text-sm tracking-widest uppercase hover:bg-[#10B981] transition-all duration-300" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#111214] text-slate-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-serif text-white tracking-tight block mb-6" href="#">MOOI.</a>
<p className="text-sm font-light leading-relaxed mb-6">
                        Trendy Hair + Glowing Skin.<br/>
                        Tampa's premier destination for luxury grooming and relaxation.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#10B981] transition-colors" href="https://www.instagram.com/mooisalonandspa/" target="_blank"><iconify-icon icon="ri:instagram-line" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#10B981] transition-colors" href="https://www.facebook.com/mooisalonandspa" target="_blank"><iconify-icon icon="ri:facebook-fill" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#10B981] transition-colors" href="https://www.tiktok.com/@mooisalonspa" target="_blank"><iconify-icon icon="ri:tiktok-fill" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#10B981] transition-colors" href="https://www.yelp.com/biz/mooi-salon-and-spa-tampa" target="_blank"><iconify-icon icon="simple-icons:yelp" width="18"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Explore</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#10B981] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#10B981] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#10B981] transition-colors" href="#gallery">Portfolio</a></li>
<li><a className="hover:text-[#10B981] transition-colors" href="https://www.mooisalonandspa.com/careers">Careers</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Services</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#10B981] transition-colors" href="#">Haircuts &amp; Styling</a></li>
<li><a className="hover:text-[#10B981] transition-colors" href="#">Color &amp; Highlights</a></li>
<li><a className="hover:text-[#10B981] transition-colors" href="#">Keratin Treatments</a></li>
<li><a className="hover:text-[#10B981] transition-colors" href="#">Massage &amp; Facials</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#10B981]" icon="solar:phone-calling-linear" width="16"></iconify-icon> (813) 409-4900</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#10B981]" icon="solar:letter-linear" width="16"></iconify-icon> frontdeskmooi@gmail.com</li>
<li className="flex items-start gap-2 mt-2"><iconify-icon className="text-[#10B981]" icon="solar:map-point-linear" width="16"></iconify-icon> 2307 S Dale Mabry Hwy</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p>© 2023 MOOI SALON &amp; SPA. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="https://www.mooisalonandspa.com/cancellation-policy">Cancellation Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
