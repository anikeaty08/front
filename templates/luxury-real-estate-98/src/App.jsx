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
            
            // 1. Sticky Header Logic
            const header = document.getElementById('navbar');
            const logo = document.getElementById('nav-logo');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 80) {
                    header.classList.add('bg-[#1A1814]/95', 'backdrop-blur-sm', 'border-[#8A8278]/20');
                    logo.classList.replace('text-[#FDFAF5]', 'text-[#C9A96E]');
                } else {
                    header.classList.remove('bg-[#1A1814]/95', 'backdrop-blur-sm', 'border-[#8A8278]/20');
                    logo.classList.replace('text-[#C9A96E]', 'text-[#FDFAF5]');
                }
            });

            // 2. Parallax Hero Image
            const heroBg = document.getElementById('hero-bg');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                if (scrolled < window.innerHeight) {
                    // 0.5x speed
                    heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            });

            // 3. Scroll Reveal Animation via Intersection Observer
            const revealElements = document.querySelectorAll('.reveal-up');
            
            const revealOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const revealObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            revealElements.forEach(el => {
                revealObserver.observe(el);
            });

            // 4. Form Handling (Mock Submission)
            const form = document.getElementById('valuation-form');
            const successMsg = document.getElementById('form-success');
            const submitBtn = form.querySelector('button[type="submit"]');

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Simulate API Call state
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon> Processing...';
                submitBtn.classList.add('opacity-80', 'cursor-not-allowed');
                
                setTimeout(() => {
                    // Success state
                    Array.from(form.elements).forEach(el => {
                        if(el.tagName === 'INPUT') el.value = '';
                    });
                    
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
                    
                    // Hide form inputs, show message
                    form.querySelectorAll('.relative.group').forEach(el => el.style.display = 'none');
                    submitBtn.style.display = 'none';
                    successMsg.classList.remove('hidden');
                    
                }, 1500);
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="mx-auto max-w-[1280px] px-6 py-5 flex items-center justify-between">
<a className="font-serif text-xl tracking-[0.12em] uppercase transition-colors duration-300" href="#" id="nav-logo">
                MERIDIAN
            </a>
<a className="inline-flex items-center justify-center bg-[#C9A96E] text-[#1A1814] font-sans font-medium uppercase tracking-[0.12em] text-xs px-6 py-3 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(201,169,110,0.4)]" href="#valuation">
                Get Valuation
            </a>
</div>
</header>
<main className="">

<section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0" id="hero-bg">
<img alt="Luxury Estate at Golden Hour" className="w-full h-[120%] object-cover object-center transform -translate-y-[10%] saturate-[0.85] contrast-[1.1]" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>

<div className="bg-gradient-to-t from-[#1A1814] via-[#1A1814]/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 flex flex-col text-center max-w-[1280px] mt-12 mr-auto ml-auto pr-6 pl-6 relative items-center">
<h1 className="md:text-7xl reveal-up leading-tight text-5xl font-light text-[#FDFAF5] tracking-tight font-serif mb-6 drop-shadow-sm">Find Your Place <br className="hidden md:block"/> in the World.</h1>
<p className="md:text-lg reveal-up delay-100 leading-relaxed text-base font-normal text-[#FDFAF5] drop-shadow-md font-sans max-w-xl mr-auto mb-10 ml-auto">
  Meridian Estates. Boutique luxury real estate in Beverly Hills. Trusted by over 400 discerning clients.
</p>
<div className="flex flex-col items-center reveal-up delay-200">
<a className="inline-flex items-center justify-center bg-[#C9A96E] text-[#1A1814] font-sans font-medium text-base px-8 py-4 mb-3 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(201,169,110,0.4)]" href="#valuation">
                        Discover Your Home's Value
                    </a>
<span className="-multi text-xs font-normal text-[#FDFAF5] opacity-90 drop-shadow-md tracking-wide font-sans">
                        Free. No obligation. Results in 24 hours.
                    </span>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 animate-bounce">
<span className="text-xs uppercase tracking-[0.12em] text-[#8A8278] font-medium -multi">Scroll</span>
<div className="w-[1px] h-8 bg-gradient-to-b from-[#8A8278] to-transparent"></div>
</div>
</section>

<section className="bg-[#F5F0E8] py-20 md:py-32 px-6 border-b border-[#8A8278]/10">
<div className="mx-auto max-w-[1280px]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="flex flex-col items-center md:items-start text-center md:text-left reveal-up">
<iconify-icon className="text-4xl text-[#C9A96E] mb-6" icon="solar:map-point-linear"></iconify-icon>
<h3 className="font-serif font-normal text-2xl tracking-tight text-[#1A1814] mb-4">Unmatched Local Expertise</h3>
<p className="font-sans font-light text-base text-[#8A8278] leading-relaxed">
                            Deep, granular knowledge of the local luxury market, backed by 15+ years of proprietary data and neighborhood insights.
                        </p>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left reveal-up delay-100">
<iconify-icon className="text-4xl text-[#C9A96E] mb-6" icon="solar:star-fall-linear"></iconify-icon>
<h3 className="font-serif font-normal text-2xl tracking-tight text-[#1A1814] mb-4">Discreet, White-Glove Service</h3>
<p className="font-sans font-light text-base text-[#8A8278] leading-relaxed">
                            Personalized, confidential attention from first consultation to closing. We manage every detail so you don't have to.
                        </p>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left reveal-up delay-200">
<iconify-icon className="text-4xl text-[#C9A96E] mb-6" icon="solar:chart-up-linear"></iconify-icon>
<h3 className="font-serif font-normal text-2xl tracking-tight text-[#1A1814] mb-4">Results That Speak</h3>
<p className="font-sans font-light text-base text-[#8A8278] leading-relaxed">
                            $2.4B in total sales volume. Average days on market: 11. Consistently securing average sale prices at 104% of list.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 bg-[#FDFAF5]">
<div className="mx-auto max-w-[1280px]">
<div className="text-center mb-16 reveal-up">
<h2 className="font-serif font-light text-4xl md:text-5xl tracking-tight text-[#1A1814] mb-4">Curated Properties</h2>
<p className="font-sans font-light text-base text-[#8A8278] max-w-2xl mx-auto">
                        A selection of our most exceptional current listings, representing the pinnacle of architectural design and location.
                    </p>
</div>

<div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar reveal-up delay-100">

<div className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer flex flex-col bg-[#F5F0E8] transition-all duration-300 border border-transparent hover:border-[#C9A96E]/50">
<div className="relative aspect-[4/3] overflow-hidden bg-[#1A1814]">
<img alt="Modern Mansion" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-[#6B7B6E] text-[#FDFAF5] font-sans font-medium text-xs uppercase tracking-[0.12em] px-3 py-1.5">
                                Bel Air
                            </div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-4 text-sm text-[#8A8278] font-sans font-light mb-4">
<span>6 Bed</span>
<span className="w-1 h-1 rounded-full bg-[#8A8278]/40"></span>
<span>8 Bath</span>
<span className="w-1 h-1 rounded-full bg-[#8A8278]/40"></span>
<span>12,400 Sq Ft</span>
</div>
<h4 className="font-sans font-medium text-lg text-[#1A1814] mb-2 truncate">1420 Stradella Road</h4>
<p className="font-serif font-normal text-2xl tracking-tight text-[#1A1814] mb-8">$24,500,000</p>
<div className="mt-auto">
<span className="inline-block border-b border-[#1A1814]/20 pb-1 font-sans font-medium text-xs uppercase tracking-[0.12em] text-[#1A1814] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:text-[#C9A96E]">
                                    View Details
                                </span>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer flex flex-col bg-[#F5F0E8] transition-all duration-300 border border-transparent hover:border-[#C9A96E]/50">
<div className="relative aspect-[4/3] overflow-hidden bg-[#1A1814]">
<img alt="Contemporary Estate" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#6B7B6E] text-[#FDFAF5] font-sans font-medium text-xs uppercase tracking-[0.12em] px-3 py-1.5">
                                Beverly Hills
                            </div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-4 text-sm text-[#8A8278] font-sans font-light mb-4">
<span>4 Bed</span>
<span className="w-1 h-1 rounded-full bg-[#8A8278]/40"></span>
<span>5.5 Bath</span>
<span className="w-1 h-1 rounded-full bg-[#8A8278]/40"></span>
<span>8,200 Sq Ft</span>
</div>
<h4 className="font-sans font-medium text-lg text-[#1A1814] mb-2 truncate">918 N Roxbury Drive</h4>
<p className="font-serif font-normal text-2xl tracking-tight text-[#1A1814] mb-8">$18,250,000</p>
<div className="mt-auto">
<span className="inline-block border-b border-[#1A1814]/20 pb-1 font-sans font-medium text-xs uppercase tracking-[0.12em] text-[#1A1814] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:text-[#C9A96E]">
                                    View Details
                                </span>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer flex flex-col bg-[#F5F0E8] transition-all duration-300 border border-transparent hover:border-[#C9A96E]/50">
<div className="relative aspect-[4/3] overflow-hidden bg-[#1A1814]">
<img alt="Architectural Masterpiece" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#6B7B6E] text-[#FDFAF5] font-sans font-medium text-xs uppercase tracking-[0.12em] px-3 py-1.5">
                                Malibu
                            </div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-4 text-sm text-[#8A8278] font-sans font-light mb-4">
<span>5 Bed</span>
<span className="w-1 h-1 rounded-full bg-[#8A8278]/40"></span>
<span>6 Bath</span>
<span className="w-1 h-1 rounded-full bg-[#8A8278]/40"></span>
<span>9,500 Sq Ft</span>
</div>
<h4 className="font-sans font-medium text-lg text-[#1A1814] mb-2 truncate">24300 Pacific Coast Hwy</h4>
<p className="font-serif font-normal text-2xl tracking-tight text-[#1A1814] mb-8">$32,000,000</p>
<div className="mt-auto">
<span className="inline-block border-b border-[#1A1814]/20 pb-1 font-sans font-medium text-xs uppercase tracking-[0.12em] text-[#1A1814] transition-all duration-300 group-hover:border-[#C9A96E] group-hover:text-[#C9A96E]">
                                    View Details
                                </span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center reveal-up delay-200">
<a className="inline-block w-full md:w-auto bg-[#C9A96E] text-[#1A1814] font-sans font-medium text-base px-10 py-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(201,169,110,0.4)]" href="#">
                        Explore All Listings
                    </a>
</div>
</div>
</section>

<section className="noise-bg bg-[#1A1814] py-24 md:py-32 px-6 relative overflow-hidden" id="valuation">
<div className="relative z-10 mx-auto max-w-[800px]">
<div className="text-center mb-12 reveal-up">
<h2 className="font-serif font-light text-4xl md:text-5xl tracking-tight text-[#FDFAF5] mb-4">What Is Your Home Worth Today?</h2>
<p className="font-sans font-light text-base text-[#8A8278] max-w-lg mx-auto leading-relaxed">
                        Our market specialists will prepare a detailed, no-obligation valuation report tailored to your property within 24 hours.
                    </p>
</div>
<form className="space-y-8 bg-[#1A1814]/50 p-6 md:p-10 border border-[#8A8278]/20 reveal-up delay-100" id="valuation-form">

<div className="relative z-0 w-full group">
<input className="block py-3 px-0 w-full text-base text-[#FDFAF5] bg-transparent border-0 border-b border-[#8A8278]/60 appearance-none focus:outline-none focus:ring-0 focus:border-[#C9A96E] peer transition-colors duration-300" id="name" name="name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-base text-[#8A8278] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C9A96E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 tracking-wide" htmlFor="name">Full Name</label>
</div>

<div className="relative z-0 w-full group">
<input className="block py-3 px-0 w-full text-base text-[#FDFAF5] bg-transparent border-0 border-b border-[#8A8278]/60 appearance-none focus:outline-none focus:ring-0 focus:border-[#C9A96E] peer transition-colors duration-300" id="email" name="email" placeholder=" " required="" type="email"/>
<label className="peer-focus:font-medium absolute text-base text-[#8A8278] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C9A96E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 tracking-wide" htmlFor="email">Email Address</label>
</div>

<div className="relative z-0 w-full group">
<input className="block py-3 px-0 w-full text-base text-[#FDFAF5] bg-transparent border-0 border-b border-[#8A8278]/60 appearance-none focus:outline-none focus:ring-0 focus:border-[#C9A96E] peer transition-colors duration-300" id="phone" name="phone" placeholder=" " required="" type="tel"/>
<label className="peer-focus:font-medium absolute text-base text-[#8A8278] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C9A96E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 tracking-wide" htmlFor="phone">Phone Number</label>
</div>
<button className="w-full bg-[#C9A96E] text-[#1A1814] font-sans font-medium text-base py-4 mt-4 transition-all duration-300 hover:scale-[1.02] hover:bg-[#D4B57A] flex items-center justify-center gap-2 group" type="submit">
                        Get My Free Valuation Report
                        <iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>

<div className="hidden text-center text-[#C9A96E] font-sans font-light mt-4" id="form-success">
                        Thank you. We have received your request and will be in touch shortly.
                    </div>
</form>

<div className="flex flex-wrap justify-center gap-6 mt-8 reveal-up delay-200">
<div className="flex items-center gap-2 text-[#8A8278]">
<iconify-icon className="text-lg" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="font-sans text-xs tracking-wide">100% Private</span>
</div>
<div className="flex items-center gap-2 text-[#8A8278]">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-sans text-xs tracking-wide">24-Hour Turnaround</span>
</div>
<div className="flex items-center gap-2 text-[#8A8278]">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-sans text-xs tracking-wide">Zero Obligation</span>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F0E8] py-24 md:py-32 px-6">
<div className="mx-auto max-w-[1280px]">
<h2 className="font-serif font-light text-3xl md:text-4xl tracking-tight text-[#1A1814] mb-16 text-center reveal-up">Stories From Our Clients</h2>
<div className="space-y-20 md:space-y-32">

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 reveal-up">
<div className="md:w-1/2 order-2 md:order-1 relative">
<iconify-icon className="text-6xl text-[#C9A96E]/20 absolute -top-8 -left-4 md:-left-8" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-serif italic font-light text-2xl md:text-3xl text-[#1A1814] leading-relaxed mb-8 relative z-10">
                                "The level of discretion and strategic insight provided was unparalleled. They didn't just sell our home; they curated an outcome that exceeded our highest expectations."
                            </p>
<div className="flex items-center gap-1 text-[#C9A96E] mb-2">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-sans font-medium text-sm tracking-[0.05em] text-[#1A1814] uppercase">Eleanor V.</p>
<p className="font-sans font-light text-sm text-[#8A8278]">Sold in Pacific Heights, 2024</p>
</div>
<div className="md:w-1/2 order-1 md:order-2 w-full">
<div className="aspect-[4/3] overflow-hidden bg-[#1A1814]">
<img alt="Client Property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 reveal-up">
<div className="md:w-1/2 relative">
<iconify-icon className="text-6xl text-[#C9A96E]/20 absolute -top-8 -left-4 md:-left-8" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-serif italic font-light text-2xl md:text-3xl text-[#1A1814] leading-relaxed mb-8 relative z-10">
                                "Navigating the off-market landscape requires connections that few possess. Meridian secured us a property that was never listed publicly. True masters of their craft."
                            </p>
<div className="flex items-center gap-1 text-[#C9A96E] mb-2">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-sans font-medium text-sm tracking-[0.05em] text-[#1A1814] uppercase">James &amp; Sarah M.</p>
<p className="font-sans font-light text-sm text-[#8A8278]">Purchased in Brentwood, 2023</p>
</div>
<div className="md:w-1/2 w-full">
<div className="aspect-[4/3] overflow-hidden bg-[#1A1814]">
<img alt="Client Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#FDFAF5]">
<div className="mx-auto max-w-[1280px]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

<div className="md:col-span-7 reveal-up">
<div className="aspect-[3/4] md:aspect-square overflow-hidden bg-[#F5F0E8]">
<img alt="Arthur Meridian - Lead Broker" className="w-full h-full object-cover grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="md:col-span-5 reveal-up delay-100">
<h2 className="font-serif font-light text-4xl md:text-5xl tracking-tight text-[#1A1814] mb-6">Meet Arthur Meridian</h2>
<div className="font-sans font-light text-base text-[#8A8278] leading-relaxed space-y-4 mb-10">
<p>
                                Born and raised in the heart of Los Angeles, Arthur brings an insider's perspective to every transaction. His approach blends analytical rigor with an intuitive understanding of lifestyle and architecture.
                            </p>
<p>
                                With over a decade of dedication to the luxury sector, Arthur is recognized not just as a broker, but as a trusted advisor to families, innovators, and visionaries seeking their definitive residence.
                            </p>
</div>

<div className="grid grid-cols-3 gap-4 border-y border-[#8A8278]/20 py-6 mb-10">
<div className="text-center md:text-left">
<span className="block font-serif text-2xl text-[#C9A96E] mb-1">$2.4B</span>
<span className="block font-sans text-xs uppercase tracking-[0.12em] text-[#8A8278]">Sold</span>
</div>
<div className="text-center md:text-left border-l border-[#8A8278]/20 pl-4">
<span className="block font-serif text-2xl text-[#C9A96E] mb-1">15+</span>
<span className="block font-sans text-xs uppercase tracking-[0.12em] text-[#8A8278]">Years</span>
</div>
<div className="text-center md:text-left border-l border-[#8A8278]/20 pl-4">
<span className="block font-serif text-2xl text-[#C9A96E] mb-1">400+</span>
<span className="block font-sans text-xs uppercase tracking-[0.12em] text-[#8A8278]">Families</span>
</div>
</div>
<a className="inline-block border border-[#C9A96E] text-[#1A1814] font-sans font-medium text-base px-8 py-3 transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#1A1814]" href="#valuation">
                            Schedule a Consultation
                        </a>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1814] py-24 px-6 text-center border-b border-[#8A8278]/20">
<div className="mx-auto max-w-[800px] reveal-up">
<h2 className="font-serif font-light text-4xl md:text-5xl tracking-tight text-[#FDFAF5] mb-8">Your Next Chapter Starts Here.</h2>
<a className="inline-block bg-[#C9A96E] text-[#1A1814] font-sans font-medium text-base px-10 py-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(201,169,110,0.4)]" href="#valuation">
                    Start the Conversation
                </a>
</div>
</section>
</main>

<footer className="bg-[#1A1814] py-16 px-6 text-[#FDFAF5]">
<div className="mx-auto max-w-[1280px]">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

<div className="md:col-span-1 flex flex-col items-start">
<span className="font-serif text-2xl tracking-[0.12em] uppercase text-[#FDFAF5] mb-4">
                        MERIDIAN
                    </span>
<p className="font-sans font-light text-sm text-[#8A8278] leading-relaxed">
                        Curating exceptional real estate experiences for discerning individuals worldwide.
                    </p>
</div>

<div className="md:col-span-1 flex flex-col">
<h4 className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[#C9A96E] mb-6">Contact</h4>
<address className="font-sans font-light text-sm text-[#8A8278] not-italic space-y-2">
<p>420 N Santa Monica Blvd</p>
<p>Beverly Hills, CA 90210</p>
<p className="pt-2 hover:text-[#C9A96E] transition-colors"><a href="tel:+13105550198">+1 (310) 555-0198</a></p>
<p className="hover:text-[#C9A96E] transition-colors"><a href="mailto:inquiries@meridianestates.com">inquiries@meridianestates.com</a></p>
</address>
</div>

<div className="md:col-span-1 flex flex-col">
<h4 className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[#C9A96E] mb-6">Explore</h4>
<ul className="font-sans font-light text-sm text-[#8A8278] space-y-3">
<li><a className="hover:text-[#C9A96E] transition-colors" href="#">Current Listings</a></li>
<li><a className="hover:text-[#C9A96E] transition-colors" href="#">Off-Market Properties</a></li>
<li><a className="hover:text-[#C9A96E] transition-colors" href="#">Market Reports</a></li>
<li><a className="hover:text-[#C9A96E] transition-colors" href="#">Our Team</a></li>
</ul>
</div>

<div className="md:col-span-1 flex flex-col">
<h4 className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[#C9A96E] mb-6">Connect</h4>
<div className="flex gap-4">
<a aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#8A8278]/40 flex items-center justify-center text-[#FDFAF5] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-[#8A8278]/40 flex items-center justify-center text-[#FDFAF5] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:case-linear"></iconify-icon>
</a>
<a aria-label="Facebook" className="w-10 h-10 rounded-full border border-[#8A8278]/40 flex items-center justify-center text-[#FDFAF5] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-[#8A8278]/20 flex flex-col md:flex-row items-center justify-between gap-4 font-sans font-light text-[11px] text-[#8A8278]">
<p>© 2026 Meridian Estates. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-[#C9A96E] transition-colors" href="#">Privacy Policy</a>
<span>|</span>
<a className="hover:text-[#C9A96E] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
