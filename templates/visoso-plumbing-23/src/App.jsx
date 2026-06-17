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


document.write(new Date().getFullYear())


        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
                navbar.classList.remove('py-4', 'border-transparent');
                navbar.classList.add('py-3');
            } else {
                navbar.classList.remove('nav-scrolled', 'py-3');
                navbar.classList.add('py-4', 'border-transparent');
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="text-2xl"></iconify-icon>';
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>';
                document.body.style.overflow = 'auto';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>';
                menuOpen = false;
                document.body.style.overflow = 'auto';
            });
        });

        // Scroll Reveal Animation Observer
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
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
      

<nav className="fixed w-full z-50 transition-all duration-300 top-0 border-b nav-scrolled py-3" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between">

<a className="flex flex-col relative group" href="#">
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2">
                        VISOSO <span className="text-white/50 font-medium">Plumbing</span>
</span>
<span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#D90429] transition-all group-hover:w-full duration-300"></span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex flex-col items-end">
<span className="text-xs text-[#D90429] font-medium tracking-wide mb-1.5 uppercase">24/7 Emergency Service</span>
<div className="flex flex-col gap-1.5">
<a className="inline-flex items-center justify-center rounded-full bg-[#D90429] px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-[#b00322] hover:shadow-[0_0_15px_rgba(217,4,41,0.4)]" href="tel:7145611534">
<iconify-icon className="mr-2 text-sm" icon="solar:phone-linear"></iconify-icon>
                            (714) 561-1534
                        </a>
<a className="inline-flex items-center justify-center rounded-full bg-[#D90429] px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-[#b00322] hover:shadow-[0_0_15px_rgba(217,4,41,0.4)]" href="tel:7145610968">
<iconify-icon className="mr-2 text-sm" icon="solar:phone-linear"></iconify-icon>
                            (714) 561-0968
                        </a>
</div>
</div>

<button className="md:hidden text-white p-2" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-md z-40 transform translate-x-full transition-transform duration-300 flex flex-col pt-24 px-6" id="mobile-menu">
<div className="flex flex-col space-y-6 text-xl tracking-tight">
<a className="mobile-link text-white/80 hover:text-white" href="#home">Home</a>
<a className="mobile-link text-white/80 hover:text-white" href="#services">Services</a>
<a className="mobile-link text-white/80 hover:text-white" href="#about">About</a>
<a className="mobile-link text-white/80 hover:text-white" href="#reviews">Reviews</a>
<a className="mobile-link text-white/80 hover:text-white" href="#contact">Contact</a>
<div className="mt-8 pt-8 border-t border-white/10">
<span className="text-xs text-[#D90429] font-medium tracking-wide uppercase block mb-3">24/7 Emergency Service</span>
<div className="flex flex-col gap-3">
<a className="inline-flex w-full items-center justify-center rounded-xl bg-[#D90429] px-6 py-4 text-base font-medium text-white" href="tel:7145611534">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-linear"></iconify-icon>
                        (714) 561-1534
                    </a>
<a className="inline-flex w-full items-center justify-center rounded-xl bg-[#D90429] px-6 py-4 text-base font-medium text-white" href="tel:7145610968">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-linear"></iconify-icon>
                        (714) 561-0968
                    </a>
</div>
</div>
</div>
</div>

<section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden pt-20" id="home">

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-0"></div>
<div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-[#D90429]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-12">
<div className="reveal active">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse"></span>
                    Se Habla Español 🇲🇽
                </span>
</div>
<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.1] text-glow active">
                Reliable Plumbing.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Done Right.</span>
</h1>
<p className="reveal delay-200 mt-8 text-base md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed active">
                24/7 Emergency Plumbing Services in Orange County.<br className="hidden md:block"/>
                Tankless Water Heaters • Slab Leaks • Sewer Location • Rooter Service
            </p>
<div className="reveal delay-300 mt-10 flex flex-col md:flex-row items-center justify-center gap-4 active">
<div className="flex flex-col w-full md:w-auto gap-3">
<a className="group relative inline-flex w-full md:w-auto items-center justify-center rounded-full bg-[#D90429] px-8 py-3 text-sm font-medium text-white transition-all hover:bg-[#b00322] hover:scale-105 glow-red overflow-hidden" href="tel:7145611534">
<span className="relative z-10 flex items-center">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-linear"></iconify-icon>
                            Call Now - 714-561-1534
                        </span>
<div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100 group-active:bg-white/30"></div>
</a>
<a className="group relative inline-flex w-full md:w-auto items-center justify-center rounded-full bg-[#D90429] px-8 py-3 text-sm font-medium text-white transition-all hover:bg-[#b00322] hover:scale-105 glow-red overflow-hidden" href="tel:7145610968">
<span className="relative z-10 flex items-center">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-linear"></iconify-icon>
                            Call Now - 714-561-0968
                        </span>
<div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100 group-active:bg-white/30"></div>
</a>
</div>
<a className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-transparent border border-white/20 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/5 hover:border-white/40 backdrop-blur-sm self-stretch md:self-auto md:h-[46px] md:mt-[3px]" href="#contact">
                    Get Free Estimate
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
</section>

<section className="py-24 md:py-32 relative bg-[#0A0A0A]" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 md:mb-24 reveal text-center md:text-left active">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Our Plumbing Services</h2>
<div className="h-1 w-12 bg-[#D90429] mx-auto md:mx-0"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal service-card bg-[#111111] border border-white/5 rounded-2xl p-8 relative overflow-hidden group active">
<div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-8xl text-[#D90429]" icon="solar:flame-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-[#D90429]/10 flex items-center justify-center mb-6 group-hover:bg-[#D90429] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D90429] group-hover:text-white transition-colors duration-300" icon="solar:flame-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Tankless Water Heaters</h3>
<p className="text-sm text-white/50 leading-relaxed">Installation, repair, and maintenance for continuous hot water efficiency.</p>
</div>

<div className="reveal delay-100 service-card bg-[#111111] border border-white/5 rounded-2xl p-8 relative overflow-hidden group active">
<div className="w-12 h-12 rounded-xl bg-[#D90429]/10 flex items-center justify-center mb-6 group-hover:bg-[#D90429] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D90429] group-hover:text-white transition-colors duration-300" icon="solar:map-arrow-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Sewer Location</h3>
<p className="text-sm text-white/50 leading-relaxed">Advanced video inspection and accurate underground line locating.</p>
</div>

<div className="reveal delay-200 service-card bg-[#111111] border border-white/5 rounded-2xl p-8 relative overflow-hidden group active">
<div className="w-12 h-12 rounded-xl bg-[#D90429]/10 flex items-center justify-center mb-6 group-hover:bg-[#D90429] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D90429] group-hover:text-white transition-colors duration-300" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Slab Leak Repair</h3>
<p className="text-sm text-white/50 leading-relaxed">Non-destructive detection and permanent solutions for foundation leaks.</p>
</div>

<div className="reveal delay-300 service-card bg-[#111111] border border-white/5 rounded-2xl p-8 relative overflow-hidden group active">
<div className="w-12 h-12 rounded-xl bg-[#D90429]/10 flex items-center justify-center mb-6 group-hover:bg-[#D90429] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D90429] group-hover:text-white transition-colors duration-300" icon="solar:pipette-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Water &amp; Gas Lines</h3>
<p className="text-sm text-white/50 leading-relaxed">Safe and code-compliant installation and repair of essential lines.</p>
</div>

<div className="reveal service-card bg-[#111111] border border-white/5 rounded-2xl p-8 relative overflow-hidden group active">
<div className="w-12 h-12 rounded-xl bg-[#D90429]/10 flex items-center justify-center mb-6 group-hover:bg-[#D90429] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D90429] group-hover:text-white transition-colors duration-300" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Rooter Service</h3>
<p className="text-sm text-white/50 leading-relaxed">Tough clogs cleared fast with professional-grade rooter equipment.</p>
</div>

<div className="reveal delay-100 service-card bg-[#111111] border border-white/5 rounded-2xl p-8 relative overflow-hidden group active">
<div className="w-12 h-12 rounded-xl bg-[#D90429]/10 flex items-center justify-center mb-6 group-hover:bg-[#D90429] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D90429] group-hover:text-white transition-colors duration-300" icon="solar:round-transfer-diagonal-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Copper Repipes</h3>
<p className="text-sm text-white/50 leading-relaxed">Whole-home repiping to eliminate low pressure and rusty water.</p>
</div>

<div className="reveal delay-200 service-card bg-[#111111] border border-white/5 rounded-2xl p-8 relative overflow-hidden group md:col-span-2 lg:col-span-1 border-[#D90429]/20 shadow-[0_0_15px_rgba(217,4,41,0.05)] active">
<div className="absolute inset-0 bg-gradient-to-br from-[#D90429]/5 to-transparent z-0"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-[#D90429]/20 flex items-center justify-center mb-6 group-hover:bg-[#D90429] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D90429] group-hover:text-white transition-colors duration-300" icon="solar:alarm-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">24/7 Emergency Service</h3>
<p className="text-sm text-white/50 leading-relaxed">Available day or night. We respond immediately to stop damage.</p>
</div>
</div>

<div className="reveal delay-300 service-card bg-[#111111] border border-white/5 rounded-2xl p-8 relative overflow-hidden group md:col-span-2 lg:col-span-1 active">
<div className="w-12 h-12 rounded-xl bg-[#D90429]/10 flex items-center justify-center mb-6 group-hover:bg-[#D90429] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D90429] group-hover:text-white transition-colors duration-300" icon="solar:bath-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Drain Cleaning</h3>
<p className="text-sm text-white/50 leading-relaxed">Professional hydro-jetting and snaking for slow or backed-up drains.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-[#0A0A0A] border-white/5 border-t pt-24 pb-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal relative active">
<div className="absolute -inset-4 bg-gradient-to-tr from-[#D90429]/20 to-transparent blur-2xl rounded-[3rem] opacity-50"></div>

<img alt="Visoso Plumbing Van" className="bg-center w-full h-[500px] object-cover border-white/10 border rounded-3xl relative shadow-2xl" src="https://image2url.com/r2/default/images/1772578062670-96924db8-7f72-455d-9eae-f1572a4c99a8.jpg?w=800&amp;q=80"/>

<div className="-bottom-6 -right-6 md:bottom-8 md:-right-8 flex gap-4 animate-on-scroll bg-[#1C1C1C] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 absolute shadow-xl gap-x-4 gap-y-4 items-center">
<div className="flex -space-x-3">
<div className="bg-gray-600 w-10 h-10 bg-[url(https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?w=320&amp;q=80)] bg-cover bg-center border-[#1C1C1C] border-2 rounded-full"></div>
<div className="bg-gray-500 w-10 h-10 bg-[url(https://images.unsplash.com/photo-1601576084861-5de423553c0f?w=320&amp;q=80)] bg-cover bg-center border-[#1C1C1C] border-2 rounded-full"></div>
<div className="flex text-xs font-medium text-black bg-gray-400 w-10 h-10 bg-[url(https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&amp;q=80)] bg-cover bg-center border-[#1C1C1C] border-2 rounded-full items-center justify-center">+</div>
</div>
<div className="">
<p className="text-sm font-medium text-white leading-tight">Trusted by hundreds</p>
<p className="text-xs text-white/50">in Orange County</p>
</div>
</div>
</div>

<div className="reveal delay-100 active">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">About Visoso Plumbing</h2>
<p className="text-base text-white/60 leading-relaxed mb-8">
                        We are a family-owned plumbing company committed to providing high-quality, reliable, and affordable services. With years of experience, we tackle everything from minor leaks to major underground sewer repairs. Our focus is on honest pricing, fast response times, and workmanship you can trust.
                    </p>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
<div className="flex items-center gap-3 group">
<iconify-icon className="text-xl text-[#D90429] group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white/80">Licensed &amp; Insured</span>
</div>
<div className="flex items-center gap-3 group">
<iconify-icon className="text-xl text-[#D90429] group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white/80">Fast Response</span>
</div>
<div className="flex items-center gap-3 group">
<iconify-icon className="text-xl text-[#D90429] group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white/80">Honest Pricing</span>
</div>
<div className="flex items-center gap-3 group">
<iconify-icon className="text-xl text-[#D90429] group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white/80">Family Owned</span>
</div>
<div className="flex items-center gap-3 group">
<iconify-icon className="text-xl text-[#D90429] group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white/80">Se Habla Español</span>
</div>
<div className="flex items-center gap-3 group">
<iconify-icon className="text-xl text-[#D90429] group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-white/80">Guaranteed Work</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white relative overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0A0A0A] mb-4">What Our Customers Say</h2>
<p className="text-[#0A0A0A]/60">Don't just take our word for it.</p>
</div>
<div className="flex items-center gap-3 bg-gray-50 border border-gray-200 py-2 px-4 rounded-full shadow-sm">
<div className="flex text-[#D90429]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-half-bold"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#0A0A0A]">4.8 Average Rating</span>
</div>
</div>

<div className="relative w-full overflow-hidden reveal delay-100 pb-10">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 hidden md:block"></div>
<div className="carousel-track gap-6">

<div className="w-[350px] md:w-[400px] bg-gray-50 border border-gray-100 rounded-2xl p-8 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
<div className="flex text-[#D90429] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#0A0A0A]/70 mb-6 leading-relaxed">"Visoso Plumbing was a lifesaver. We had a slab leak that was flooding our kitchen. They arrived within 45 minutes, located the leak quickly, and fixed it the same day. Extremely professional and fair pricing."</p>
<p className="font-medium text-[#0A0A0A] text-sm tracking-tight">— Michael T., Anaheim</p>
</div>
<div className="w-[350px] md:w-[400px] bg-gray-50 border border-gray-100 rounded-2xl p-8 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
<div className="flex text-[#D90429] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#0A0A0A]/70 mb-6 leading-relaxed">"Called them to install a tankless water heater. The team was clean, respectful of my home, and the installation looks like a work of art. Highly recommend them for any serious plumbing work."</p>
<p className="font-medium text-[#0A0A0A] text-sm tracking-tight">— Sarah J., Irvine</p>
</div>
<div className="w-[350px] md:w-[400px] bg-gray-50 border border-gray-100 rounded-2xl p-8 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
<div className="flex text-[#D90429] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#0A0A0A]/70 mb-6 leading-relaxed">"Honest plumber! They could have charged me thousands for a sewer line replacement, but instead found the root clog and cleared it out for a fraction of the cost. Customer for life."</p>
<p className="font-medium text-[#0A0A0A] text-sm tracking-tight">— David R., Santa Ana</p>
</div>

<div className="w-[350px] md:w-[400px] bg-gray-50 border border-gray-100 rounded-2xl p-8 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
<div className="flex text-[#D90429] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#0A0A0A]/70 mb-6 leading-relaxed">"Visoso Plumbing was a lifesaver. We had a slab leak that was flooding our kitchen. They arrived within 45 minutes, located the leak quickly, and fixed it the same day. Extremely professional and fair pricing."</p>
<p className="font-medium text-[#0A0A0A] text-sm tracking-tight">— Michael T., Anaheim</p>
</div>
<div className="w-[350px] md:w-[400px] bg-gray-50 border border-gray-100 rounded-2xl p-8 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
<div className="flex text-[#D90429] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#0A0A0A]/70 mb-6 leading-relaxed">"Called them to install a tankless water heater. The team was clean, respectful of my home, and the installation looks like a work of art. Highly recommend them for any serious plumbing work."</p>
<p className="font-medium text-[#0A0A0A] text-sm tracking-tight">— Sarah J., Irvine</p>
</div>
<div className="w-[350px] md:w-[400px] bg-gray-50 border border-gray-100 rounded-2xl p-8 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
<div className="flex text-[#D90429] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#0A0A0A]/70 mb-6 leading-relaxed">"Honest plumber! They could have charged me thousands for a sewer line replacement, but instead found the root clog and cleared it out for a fraction of the cost. Customer for life."</p>
<p className="font-medium text-[#0A0A0A] text-sm tracking-tight">— David R., Santa Ana</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111111] relative border-t border-[#1C1C1C]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Proudly Serving Orange County</h2>
<p className="text-white/60 text-sm mb-10 leading-relaxed">
                        We are a local business dedicated to our community. No matter where you are in the OC area, our technicians are ready to dispatch quickly.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-white/5 flex items-center justify-center flex-shrink-0 text-[#D90429]">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white/50 mb-1 uppercase tracking-wide font-medium">Phones</p>
<div className="flex flex-col gap-1">
<a className="text-base font-medium text-white hover:text-[#D90429] transition-colors" href="tel:7145611534">(714) 561-1534</a>
<a className="text-base font-medium text-white hover:text-[#D90429] transition-colors" href="tel:7145610968">(714) 561-0968</a>
</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-white/5 flex items-center justify-center flex-shrink-0 text-[#D90429]">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white/50 mb-1 uppercase tracking-wide font-medium">Hours</p>
<p className="text-base font-medium text-white">Open 24 Hours / 7 Days</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-white/5 flex items-center justify-center flex-shrink-0 text-[#D90429]">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white/50 mb-1 uppercase tracking-wide font-medium">Website</p>
<a className="text-base font-medium text-white hover:text-[#D90429] transition-colors" href="http://visosoplomeriaeconomica.com" target="_blank">visosoplomeriaeconomica.com</a>
</div>
</div>
</div>
<div className="bg-[#1C1C1C] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-[#D90429]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 relative z-10">Need Plumbing Help Now?</h3>
<a className="inline-flex items-center text-[#D90429] font-medium hover:text-white transition-colors relative z-10" href="tel:7145611534">
                            Call Now <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-7 reveal delay-100 h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#1C1C1C]">

<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423985.3524962291!2d-118.06734185246733!3d33.68112349791485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9018448ebdf%3A0xc392a8b30db52e18!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(1) invert(1) contrast(1.2)'}} width="100%">
</iframe>

<div className="absolute inset-0 bg-[#0A0A0A]/30 pointer-events-none mix-blend-multiply"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#0A0A0A] overflow-hidden flex items-center justify-center min-h-[60vh] border-y border-white/5">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[20vw] bg-[#D90429] blur-[150px] opacity-20 rounded-[100%] pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8 leading-tight">
                Plumbing Emergency?<br/>
<span className="text-white/60">We’re Available 24/7.</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
<a className="inline-flex items-center justify-center rounded-full bg-[#D90429] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#b00322] hover:scale-105 animate-pulse-glow group w-full sm:w-auto" href="tel:7145611534">
<iconify-icon className="mr-3 text-xl group-hover:rotate-12 transition-transform" icon="solar:phone-bold"></iconify-icon>
                    Call Now – 714-561-1534
                </a>
<a className="inline-flex items-center justify-center rounded-full bg-[#D90429] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#b00322] hover:scale-105 animate-pulse-glow group w-full sm:w-auto" href="tel:7145610968">
<iconify-icon className="mr-3 text-xl group-hover:rotate-12 transition-transform" icon="solar:phone-bold"></iconify-icon>
                    Call Now – 714-561-0968
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] relative" id="contact">
<div className="max-w-3xl mx-auto px-6 lg:px-8 reveal">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-3">Request a Free Estimate</h2>
<p className="text-sm text-white/50">Fill out the form below and we will get back to you shortly.</p>
</div>
<form className="bg-[#1C1C1C] border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div className="relative">
<label className="text-xs font-medium text-white/50 uppercase tracking-wider mb-2 block">Full Name</label>
<input className="w-full bg-transparent border-b border-white/10 text-white pb-2 transition-colors focus:border-[#D90429] text-sm" placeholder="John Doe" type="text"/>
</div>
<div className="relative">
<label className="text-xs font-medium text-white/50 uppercase tracking-wider mb-2 block">Phone Number</label>
<input className="w-full bg-transparent border-b border-white/10 text-white pb-2 transition-colors focus:border-[#D90429] text-sm" placeholder="(714) 555-0123" type="tel"/>
</div>
</div>
<div className="mb-8 relative">
<label className="text-xs font-medium text-white/50 uppercase tracking-wider mb-2 block">Service Needed</label>
<select className="w-full bg-transparent border-b border-white/10 text-white/70 pb-2 transition-colors focus:border-[#D90429] text-sm appearance-none cursor-pointer outline-none">
<option className="bg-[#1C1C1C]" value="">Select a service...</option>
<option className="bg-[#1C1C1C]" value="emergency">Emergency Service</option>
<option className="bg-[#1C1C1C]" value="tankless">Tankless Water Heater</option>
<option className="bg-[#1C1C1C]" value="slab">Slab Leak</option>
<option className="bg-[#1C1C1C]" value="sewer">Sewer Location</option>
<option className="bg-[#1C1C1C]" value="other">Other</option>
</select>
</div>
<div className="mb-10 relative">
<label className="text-xs font-medium text-white/50 uppercase tracking-wider mb-2 block">Message</label>
<textarea className="w-full bg-transparent border-b border-white/10 text-white pb-2 transition-colors focus:border-[#D90429] text-sm resize-none" placeholder="Briefly describe your plumbing issue..." rows="4"></textarea>
</div>
<button className="w-full rounded-xl bg-[#D90429] px-6 py-4 text-sm font-medium text-white transition-all hover:bg-[#b00322] shadow-[0_4px_14px_0_rgba(217,4,41,0.39)] hover:shadow-[0_6px_20px_rgba(217,4,41,0.23)] flex items-center justify-center gap-2 group" type="button">
                    Send Request
                    <iconify-icon className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-black py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="flex flex-col relative group inline-flex mb-6" href="#">
<span className="text-2xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2">
                            VISOSO <span className="text-white/50 font-medium">Plumbing</span>
</span>
</a>
<p className="text-sm text-white/50 max-w-sm leading-relaxed mb-6">
                        High-quality, reliable, and professional plumbing services for Orange County. Available 24/7 for emergencies.
                    </p>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D90429]/10 text-xs font-medium text-[#D90429] border border-[#D90429]/20">
                        Se Habla Español
                    </span>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/50 hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight">Contact</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/50 hover:text-[#D90429] transition-colors flex items-center gap-2" href="tel:7145611534"><iconify-icon icon="solar:phone-linear"></iconify-icon> (714) 561-1534</a></li>
<li><a className="text-sm text-white/50 hover:text-[#D90429] transition-colors flex items-center gap-2" href="tel:7145610968"><iconify-icon icon="solar:phone-linear"></iconify-icon> (714) 561-0968</a></li>
<li className="text-sm text-white/50 flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon> Orange County, CA</li>
<li className="text-sm text-white/50 flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 24/7 Emergency Service</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/40">
                    © 202620262026202620262026 Visoso Plumbing. All rights reserved.
                </p>
<div className="flex items-center gap-4">
<a className="text-white/40 hover:text-white text-lg transition-colors" href="#"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
<a className="text-white/40 hover:text-white text-lg transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
