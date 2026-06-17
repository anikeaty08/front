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



        // Navigation scroll effect
        const nav = document.getElementById('mainNav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                nav.classList.add('nav-scrolled');
                nav.classList.remove('border-transparent');
            } else {
                nav.classList.remove('nav-scrolled');
                nav.classList.add('border-transparent');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuLine1 = document.getElementById('menuLine1');
        const menuLine2 = document.getElementById('menuLine2');
        let menuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('hidden');
            if (menuOpen) {
                menuLine1.style.transform = 'rotate(45deg) translate(2px, 2px)';
                menuLine2.style.transform = 'rotate(-45deg) translate(1px, -1px)';
                menuLine2.style.width = '1.5rem';
            } else {
                menuLine1.style.transform = '';
                menuLine2.style.transform = '';
                menuLine2.style.width = '1rem';
            }
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuOpen = false;
                mobileMenu.classList.add('hidden');
                menuLine1.style.transform = '';
                menuLine2.style.transform = '';
                menuLine2.style.width = '1rem';
            });
        });

        // Scroll reveal animation
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // Run once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
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
      

<div className="fixed top-0 left-0 w-full h-[2px] z-[60]" style={{background: 'linear-gradient(90deg, #0A0A0A 0%, #0D5016 25%, #C9A84C 50%, #8B2500 75%, #0A0A0A 100%)', opacity: '0.80'}}></div>

<nav className="fixed top-[2px] w-full z-50 transition-all duration-500 border-b border-transparent" id="mainNav" style={{background: 'transparent'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20 lg:h-24">

<div className="flex items-center gap-3">
<div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #C9A84C 0%, #E8D48B 50%, #C9A84C 100%)'}}>
<iconify-icon className="text-[#0A0A0A] lg:hidden" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="text-[#0A0A0A] hidden lg:block" icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="leading-tight">
<span className="font-serif text-sm lg:text-base font-medium tracking-wide text-white block">MANDELA AWARDS</span>
<span className="text-[10px] lg:text-xs tracking-[0.25em] uppercase" style={{color: '#C9A84C'}}>Commission</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-10">
<a className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C] transition-colors duration-300" href="#about">About</a>
<a className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C] transition-colors duration-300" href="#awards">Awards</a>
<a className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C] transition-colors duration-300" href="#honourees">Honourees</a>
<a className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C] transition-colors duration-300" href="#events">Events</a>
<a className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C] transition-colors duration-300" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]" href="#nominations" style={{background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)', color: '#0A0A0A'}}>
                        Nominate a Leader
                    </a>
<button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none" id="mobileMenuBtn">
<span className="w-6 h-[1px] bg-white transition-all duration-300" id="menuLine1"></span>
<span className="w-4 h-[1px] bg-white transition-all duration-300" id="menuLine2"></span>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden border-t" id="mobileMenu" style={{background: 'rgba(10, 10, 10, 0.98)', borderColor: 'rgba(201,168,76,0.15)'}}>
<div className="px-6 py-8 space-y-6">
<a className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]" href="#about">About</a>
<a className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]" href="#awards">Awards</a>
<a className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]" href="#honourees">Honourees</a>
<a className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]" href="#nominations">Nominations</a>
<a className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]" href="#events">Events</a>
<a className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs tracking-[0.15em] uppercase font-medium mt-4 w-full justify-center" href="#nominations" style={{background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)', color: '#0A0A0A'}}>
                    Nominate a Leader
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0">
<img alt="Global Leadership" className="w-full h-full object-cover animate-slow-zoom" src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&amp;q=80" style={{filter: 'brightness(0.35) saturate(0.7)'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.9) 100%)'}}></div>
</div>

<div className="absolute top-1/2 left-8 lg:left-16 -translate-y-1/2 w-px h-32 hidden lg:block" style={{background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)'}}></div>
<div className="absolute top-1/2 right-8 lg:right-16 -translate-y-1/2 w-px h-32 hidden lg:block" style={{background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)'}}></div>

<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
<div className="animate-fade-in mb-8" style={{animationDelay: '0.2s', opacity: '0'}}>
<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.05)'}}>
<div className="w-1.5 h-1.5 rounded-full" style={{background: '#C9A84C'}}></div>
<span className="text-[10px] md:text-xs tracking-[0.3em] uppercase" style={{color: '#C9A84C'}}>Established in Honour of Nelson Mandela</span>
</div>
</div>
<h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.1] mb-8 animate-fade-in-up" style={{animationDelay: '0.4s', opacity: '0'}}>
                Honouring Global<br/>
<span className="italic" style={{color: '#C9A84C'}}>Leadership</span> and<br/>
                Service to Humanity
            </h1>
<p className="text-base lg:text-lg font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up text-white/60" style={{animationDelay: '0.6s', opacity: '0'}}>
                The Mandela Awards Commission recognises world leaders, diplomats, innovators and changemakers whose work advances peace, development and human dignity across the world.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.8s', opacity: '0'}}>
<a className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] w-full sm:w-auto justify-center" href="#honourees" style={{background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)', color: '#0A0A0A'}}>
                    View Honourees
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-3 px-8 py-4 rounded-sm text-xs tracking-[0.2em] uppercase font-medium border transition-all duration-300 hover:bg-white/5 w-full sm:w-auto justify-center" href="#nominations" style={{borderColor: 'rgba(255,255,255,0.2)'}}>
                    Nominate a Leader
                </a>
</div>
<div className="mt-8 animate-fade-in-up" style={{animationDelay: '1.0s', opacity: '0'}}>
<a className="inline-flex items-center gap-2 px-4 py-4 text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-white/80 transition-colors" href="#about">
                    About the Commission
                    <iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="w-full h-px" style={{background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'}}></div>

<div className="py-5 border-b overflow-hidden relative" style={{background: '#0D0D0D', borderColor: 'rgba(255,255,255,0.05)'}}>

<div className="absolute left-0 top-0 w-24 h-full z-10" style={{background: 'linear-gradient(90deg, #0D0D0D, transparent)'}}></div>
<div className="absolute right-0 top-0 w-24 h-full z-10" style={{background: 'linear-gradient(270deg, #0D0D0D, transparent)'}}></div>
<div className="flex items-center gap-8 whitespace-nowrap" style={{animation: 'marquee 40s linear infinite'}}>
<span className="text-xs tracking-[0.3em] uppercase text-white/20">Peace &amp; Diplomacy</span>
<span style={{color: 'rgba(201,168,76,0.3)'}}>◆</span>
<span className="text-xs tracking-[0.3em] uppercase text-white/20">Global Leadership</span>
<span style={{color: 'rgba(201,168,76,0.3)'}}>◆</span>
<span className="text-xs tracking-[0.3em] uppercase text-white/20">Humanitarian Service</span>
<span style={{color: 'rgba(201,168,76,0.3)'}}>◆</span>
<span className="text-xs tracking-[0.3em] uppercase text-white/20">Innovation for Humanity</span>
<span style={{color: 'rgba(201,168,76,0.3)'}}>◆</span>
<span className="text-xs tracking-[0.3em] uppercase text-white/20">Public Service Excellence</span>
<span style={{color: 'rgba(201,168,76,0.3)'}}>◆</span>

<span className="text-xs tracking-[0.3em] uppercase text-white/20">Peace &amp; Diplomacy</span>
<span style={{color: 'rgba(201,168,76,0.3)'}}>◆</span>
<span className="text-xs tracking-[0.3em] uppercase text-white/20">Global Leadership</span>
<span style={{color: 'rgba(201,168,76,0.3)'}}>◆</span>
<span className="text-xs tracking-[0.3em] uppercase text-white/20">Humanitarian Service</span>
<span style={{color: 'rgba(201,168,76,0.3)'}}>◆</span>
<span className="text-xs tracking-[0.3em] uppercase text-white/20">Innovation for Humanity</span>
<span style={{color: 'rgba(201,168,76,0.3)'}}>◆</span>
<span className="text-xs tracking-[0.3em] uppercase text-white/20">Public Service Excellence</span>
</div>
</div>

<section className="py-24 lg:py-36 px-6 lg:px-8" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="scroll-reveal">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
<span className="text-xs tracking-[0.3em] uppercase" style={{color: '#C9A84C'}}>About the Commission</span>
</div>
<h2 className="font-serif text-3xl lg:text-5xl tracking-tight leading-tight mb-8">
                        Dedicated to Recognising<br/>
<span className="italic" style={{color: '#C9A84C'}}>Exceptional Leadership</span>
</h2>
<div className="space-y-6 text-base font-light leading-relaxed text-white/60">
<p>
                            The Mandela Awards Commission is an international initiative dedicated to recognising exceptional leadership and service to humanity. Inspired by the enduring legacy of Nelson Mandela, the Commission honours individuals whose work has advanced peace, human dignity, diplomacy, innovation and sustainable development across the world.
                        </p>
<p>
                            Recipients include global leaders, heads of state, public officials, diplomats, philanthropists, scholars and individuals whose contributions have created meaningful and lasting impact in their communities and across international society.
                        </p>
<p>
                            Through its recognition programmes, the Commission seeks to inspire future generations of leaders and reinforce the values of compassion, justice and cooperation that Nelson Mandela championed throughout his extraordinary life.
                        </p>
</div>
<div className="flex items-center gap-6 mt-10">
<a className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:opacity-80" href="#awards" style={{color: '#C9A84C'}}>
                            Explore the Awards
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="scroll-reveal" style={{transitionDelay: '0.2s'}}>
<div className="relative">
<div className="relative overflow-hidden rounded-sm border border-white/5 p-2 bg-white/[0.02]">
<img alt="Diplomatic Summit" className="w-full h-[400px] lg:h-[500px] object-cover rounded-sm" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&amp;q=80" style={{filter: 'brightness(0.8) saturate(0.9)'}}/>
<div className="absolute inset-0 rounded-sm" style={{background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.9) 100%)'}}></div>
</div>

<div className="absolute bottom-6 left-0 right-0 px-8">
<div className="grid grid-cols-3 gap-6 divide-x divide-white/10">
<div className="text-center px-2">
<span className="font-serif text-2xl lg:text-4xl font-medium block" style={{color: '#C9A84C'}}>48+</span>
<p className="text-[9px] lg:text-[10px] tracking-[0.2em] uppercase mt-2 text-white/50">Countries</p>
</div>
<div className="text-center px-2">
<span className="font-serif text-2xl lg:text-4xl font-medium block" style={{color: '#C9A84C'}}>200+</span>
<p className="text-[9px] lg:text-[10px] tracking-[0.2em] uppercase mt-2 text-white/50">Honourees</p>
</div>
<div className="text-center px-2">
<span className="font-serif text-2xl lg:text-4xl font-medium block" style={{color: '#C9A84C'}}>12</span>
<p className="text-[9px] lg:text-[10px] tracking-[0.2em] uppercase mt-2 text-white/50">Years</p>
</div>
</div>
</div>

<div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r" style={{borderColor: 'rgba(201,168,76,0.4)'}}></div>
<div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l" style={{borderColor: 'rgba(201,168,76,0.4)'}}></div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y py-16 px-6" style={{background: '#0D0D0D', borderColor: 'rgba(255,255,255,0.05)'}}>
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
<div className="text-center scroll-reveal">
<div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center mb-5" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.05)'}}>
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="22"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2 text-white/90">Integrity</h4>
<p className="text-xs font-light text-white/40 leading-relaxed max-w-[200px] mx-auto">Upholding the highest standards of ethical leadership.</p>
</div>
<div className="text-center scroll-reveal" style={{transitionDelay: '0.1s'}}>
<div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center mb-5" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.05)'}}>
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="22"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2 text-white/90">Global Unity</h4>
<p className="text-xs font-light text-white/40 leading-relaxed max-w-[200px] mx-auto">Bridging nations through shared humanitarian purpose.</p>
</div>
<div className="text-center scroll-reveal" style={{transitionDelay: '0.2s'}}>
<div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center mb-5" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.05)'}}>
<iconify-icon icon="solar:hand-heart-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="22"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2 text-white/90">Compassion</h4>
<p className="text-xs font-light text-white/40 leading-relaxed max-w-[200px] mx-auto">Recognising service driven by empathy and human dignity.</p>
</div>
<div className="text-center scroll-reveal" style={{transitionDelay: '0.3s'}}>
<div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center mb-5" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.05)'}}>
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="22"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2 text-white/90">Excellence</h4>
<p className="text-xs font-light text-white/40 leading-relaxed max-w-[200px] mx-auto">Celebrating extraordinary achievement and dedication.</p>
</div>
</div>
</div>

<section className="py-24 lg:py-36 px-6 lg:px-8 relative" id="awards" style={{background: 'linear-gradient(180deg, #0A0A0A 0%, #0D0D0D 50%, #0A0A0A 100%)'}}>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20 scroll-reveal">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
<span className="text-xs tracking-[0.3em] uppercase" style={{color: '#C9A84C'}}>The Awards</span>
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
</div>
<h2 className="font-serif text-3xl lg:text-5xl tracking-tight mb-6">
                    Five Pillars of <span className="italic" style={{color: '#C9A84C'}}>Recognition</span>
</h2>
<p className="text-base font-light text-white/50 max-w-2xl mx-auto leading-relaxed">
                    Each award represents a distinct dimension of extraordinary service to humanity, reflecting the breadth of Mandela's vision for a more just and peaceful world.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="scroll-reveal group relative p-8 lg:p-10 rounded-sm border transition-all duration-500 hover:border-[#C9A84C]/30" style={{background: 'rgba(255, 255, 255, 0.015)', borderColor: 'rgba(255,255,255,0.05)'}}>
<div className="absolute top-0 left-0 w-full h-[2px] transition-all duration-500 opacity-0 group-hover:opacity-100" style={{background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'}}></div>
<div className="w-14 h-14 rounded-full border flex items-center justify-center mb-8 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] group-hover:bg-[#C9A84C]/10" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.03)'}}>
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl lg:text-2xl mb-4 tracking-tight text-white/90">Global Leadership Award</h3>
<p className="text-sm font-light leading-relaxed text-white/50">Recognising heads of state, government leaders and officials who have demonstrated extraordinary vision, governance and dedication to the advancement of their nations and the international community.</p>
<div className="mt-8 pt-6 border-t" style={{borderColor: 'rgba(255,255,255,0.05)'}}>
<span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Highest Distinction</span>
</div>
</div>

<div className="scroll-reveal group relative p-8 lg:p-10 rounded-sm border transition-all duration-500 hover:border-[#C9A84C]/30" style={{background: 'rgba(255, 255, 255, 0.015)', borderColor: 'rgba(255,255,255,0.05)', transitionDelay: '0.1s'}}>
<div className="absolute top-0 left-0 w-full h-[2px] transition-all duration-500 opacity-0 group-hover:opacity-100" style={{background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'}}></div>
<div className="w-14 h-14 rounded-full border flex items-center justify-center mb-8 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] group-hover:bg-[#C9A84C]/10" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.03)'}}>
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl lg:text-2xl mb-4 tracking-tight text-white/90">Humanitarian Impact Award</h3>
<p className="text-sm font-light leading-relaxed text-white/50">Honouring individuals and organisations whose philanthropic work and humanitarian initiatives have created transformative and lasting change in the lives of vulnerable communities worldwide.</p>
<div className="mt-8 pt-6 border-t" style={{borderColor: 'rgba(255,255,255,0.05)'}}>
<span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Service to Humanity</span>
</div>
</div>

<div className="scroll-reveal group relative p-8 lg:p-10 rounded-sm border transition-all duration-500 hover:border-[#C9A84C]/30" style={{background: 'rgba(255, 255, 255, 0.015)', borderColor: 'rgba(255,255,255,0.05)', transitionDelay: '0.2s'}}>
<div className="absolute top-0 left-0 w-full h-[2px] transition-all duration-500 opacity-0 group-hover:opacity-100" style={{background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'}}></div>
<div className="w-14 h-14 rounded-full border flex items-center justify-center mb-8 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] group-hover:bg-[#C9A84C]/10" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.03)'}}>
<iconify-icon icon="solar:flag-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl lg:text-2xl mb-4 tracking-tight text-white/90">Peace &amp; Diplomacy Award</h3>
<p className="text-sm font-light leading-relaxed text-white/50">Celebrating diplomats, mediators and peacemakers who have worked tirelessly to resolve conflicts, foster international cooperation and build bridges between nations and cultures.</p>
<div className="mt-8 pt-6 border-t" style={{borderColor: 'rgba(255,255,255,0.05)'}}>
<span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Diplomatic Excellence</span>
</div>
</div>

<div className="scroll-reveal group relative p-8 lg:p-10 rounded-sm border transition-all duration-500 hover:border-[#C9A84C]/30 md:col-span-1" style={{background: 'rgba(255, 255, 255, 0.015)', borderColor: 'rgba(255,255,255,0.05)'}}>
<div className="absolute top-0 left-0 w-full h-[2px] transition-all duration-500 opacity-0 group-hover:opacity-100" style={{background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'}}></div>
<div className="w-14 h-14 rounded-full border flex items-center justify-center mb-8 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] group-hover:bg-[#C9A84C]/10" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.03)'}}>
<iconify-icon icon="solar:lightbulb-bolt-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl lg:text-2xl mb-4 tracking-tight text-white/90">Innovation for Humanity</h3>
<p className="text-sm font-light leading-relaxed text-white/50">Recognising visionary innovators, scientists and entrepreneurs whose technology, medicine, education or social enterprise has demonstrably improved the human condition globally.</p>
<div className="mt-8 pt-6 border-t" style={{borderColor: 'rgba(255,255,255,0.05)'}}>
<span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Visionary Progress</span>
</div>
</div>

<div className="scroll-reveal group relative p-8 lg:p-10 rounded-sm border transition-all duration-500 hover:border-[#C9A84C]/30 md:col-span-2 lg:col-span-2" style={{background: 'rgba(255, 255, 255, 0.015)', borderColor: 'rgba(255,255,255,0.05)', transitionDelay: '0.1s'}}>
<div className="absolute top-0 left-0 w-full h-[2px] transition-all duration-500 opacity-0 group-hover:opacity-100" style={{background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'}}></div>
<div className="flex flex-col lg:flex-row lg:items-start gap-8">
<div className="w-14 h-14 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] group-hover:bg-[#C9A84C]/10" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.03)'}}>
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-xl lg:text-2xl mb-4 tracking-tight text-white/90">Public Service Excellence Award</h3>
<p className="text-sm font-light leading-relaxed text-white/50">Honouring ministers, public servants, civil society leaders and community advocates who have demonstrated unwavering commitment to public welfare, institutional reform and the delivery of essential services to their communities and nations.</p>
<div className="mt-8 pt-6 border-t" style={{borderColor: 'rgba(255,255,255,0.05)'}}>
<span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Dedicated Public Service</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-36 px-6 lg:px-8 border-t" id="honourees" style={{background: '#0A0A0A', borderColor: 'rgba(255,255,255,0.05)'}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 scroll-reveal">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
<span className="text-xs tracking-[0.3em] uppercase" style={{color: '#C9A84C'}}>Distinguished Honourees</span>
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
</div>
<h2 className="font-serif text-3xl lg:text-5xl tracking-tight mb-6">
                    The Global <span className="italic" style={{color: '#C9A84C'}}>Hall of Honour</span>
</h2>
<p className="text-base font-light text-white/50 max-w-2xl mx-auto leading-relaxed">
                    Our distinguished recipients represent the highest ideals of leadership, service and human achievement from across the globe.
                </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="scroll-reveal group">
<div className="p-2 border border-white/5 rounded-sm bg-white/[0.01] mb-5 group-hover:border-[#C9A84C]/30 transition-colors duration-500 relative">
<div className="relative overflow-hidden rounded-sm">
<img alt="Honouree" className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&amp;q=80" style={{filter: 'saturate(0.85)'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.95) 100%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full" style={{background: '#C9A84C'}}></div>
<span className="text-[9px] tracking-[0.2em] uppercase" style={{color: '#C9A84C'}}>Global Leadership</span>
</div>
</div>
</div>
</div>
<div className="px-1 text-center sm:text-left">
<h4 className="font-serif text-lg mb-1 text-white/90">H.E. Dr. Amara Okafor</h4>
<p className="text-xs font-light text-white/40 mb-1">President of the Republic</p>
<p className="text-[11px] uppercase tracking-wider" style={{color: 'rgba(201,168,76,0.7)'}}>Federal Republic of Nigeria</p>
</div>
</div>

<div className="scroll-reveal group" style={{transitionDelay: '0.1s'}}>
<div className="p-2 border border-white/5 rounded-sm bg-white/[0.01] mb-5 group-hover:border-[#C9A84C]/30 transition-colors duration-500 relative">
<div className="relative overflow-hidden rounded-sm">
<img alt="Honouree" className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&amp;q=80" style={{filter: 'saturate(0.85)'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.95) 100%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full" style={{background: '#C9A84C'}}></div>
<span className="text-[9px] tracking-[0.2em] uppercase" style={{color: '#C9A84C'}}>Humanitarian Impact</span>
</div>
</div>
</div>
</div>
<div className="px-1 text-center sm:text-left">
<h4 className="font-serif text-lg mb-1 text-white/90">Dr. Ingrid Johansson</h4>
<p className="text-xs font-light text-white/40 mb-1">UN Special Envoy</p>
<p className="text-[11px] uppercase tracking-wider" style={{color: 'rgba(201,168,76,0.7)'}}>Kingdom of Sweden</p>
</div>
</div>

<div className="scroll-reveal group" style={{transitionDelay: '0.2s'}}>
<div className="p-2 border border-white/5 rounded-sm bg-white/[0.01] mb-5 group-hover:border-[#C9A84C]/30 transition-colors duration-500 relative">
<div className="relative overflow-hidden rounded-sm">
<img alt="Honouree" className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;q=80" style={{filter: 'saturate(0.85)'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.95) 100%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full" style={{background: '#C9A84C'}}></div>
<span className="text-[9px] tracking-[0.2em] uppercase" style={{color: '#C9A84C'}}>Peace &amp; Diplomacy</span>
</div>
</div>
</div>
</div>
<div className="px-1 text-center sm:text-left">
<h4 className="font-serif text-lg mb-1 text-white/90">Ambassador Khalid Al-Rashid</h4>
<p className="text-xs font-light text-white/40 mb-1">Senior Diplomat</p>
<p className="text-[11px] uppercase tracking-wider" style={{color: 'rgba(201,168,76,0.7)'}}>United Arab Emirates</p>
</div>
</div>

<div className="scroll-reveal group" style={{transitionDelay: '0.3s'}}>
<div className="p-2 border border-white/5 rounded-sm bg-white/[0.01] mb-5 group-hover:border-[#C9A84C]/30 transition-colors duration-500 relative">
<div className="relative overflow-hidden rounded-sm">
<img alt="Honouree" className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&amp;q=80" style={{filter: 'saturate(0.85)'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.95) 100%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full" style={{background: '#C9A84C'}}></div>
<span className="text-[9px] tracking-[0.2em] uppercase" style={{color: '#C9A84C'}}>Innovation</span>
</div>
</div>
</div>
</div>
<div className="px-1 text-center sm:text-left">
<h4 className="font-serif text-lg mb-1 text-white/90">Prof. Maria Santos-Silva</h4>
<p className="text-xs font-light text-white/40 mb-1">Minister of Science &amp; Technology</p>
<p className="text-[11px] uppercase tracking-wider" style={{color: 'rgba(201,168,76,0.7)'}}>Republic of Brazil</p>
</div>
</div>
</div>

<div className="text-center mt-16 scroll-reveal">
<a className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm text-xs tracking-[0.2em] uppercase font-medium border transition-all duration-300 hover:bg-white/5" href="#" style={{borderColor: 'rgba(201,168,76,0.3)'}}>
<span style={{color: '#C9A84C'}}>View All Honourees</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-36 px-6 lg:px-8 border-t relative overflow-hidden" id="nominations" style={{background: '#0D0D0D', borderColor: 'rgba(255,255,255,0.05)'}}>

<div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: 'radial-gradient(rgba(201,168,76,1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="scroll-reveal">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
<span className="text-xs tracking-[0.3em] uppercase" style={{color: '#C9A84C'}}>Nominations</span>
</div>
<h2 className="font-serif text-3xl lg:text-5xl tracking-tight leading-tight mb-8">
                        Nominate an<br/>
<span className="italic" style={{color: '#C9A84C'}}>Extraordinary Leader</span>
</h2>
<p className="text-base font-light leading-relaxed text-white/50 mb-12">
                        The Mandela Awards Commission invites nominations from governments, international organisations, civil institutions and the general public. Every nomination is meticulously reviewed by our independent Awards Council.
                    </p>

<div className="space-y-8">

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]" style={{borderColor: 'rgba(201, 168, 76, 0.4)', background: 'rgba(201,168,76,0.05)'}}>
<span className="font-serif text-lg" style={{color: '#C9A84C'}}>1</span>
</div>
<div className="w-px h-full mt-2" style={{background: 'rgba(201,168,76,0.15)'}}></div>
</div>
<div className="pb-8">
<h4 className="font-serif text-lg mb-2 text-white/90">Submit a Nomination</h4>
<p className="text-sm font-light leading-relaxed text-white/40">Complete the official nomination form with details about the nominee's contributions to humanity, their leadership impact and supporting documentation.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]" style={{borderColor: 'rgba(201, 168, 76, 0.4)', background: 'rgba(201,168,76,0.05)'}}>
<span className="font-serif text-lg" style={{color: '#C9A84C'}}>2</span>
</div>
<div className="w-px h-full mt-2" style={{background: 'rgba(201,168,76,0.15)'}}></div>
</div>
<div className="pb-8">
<h4 className="font-serif text-lg mb-2 text-white/90">Review by the Commission</h4>
<p className="text-sm font-light leading-relaxed text-white/40">All nominations undergo a thorough, confidential review process by the Commission's secretariat to verify eligibility and assess the depth of the nominee's contributions.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]" style={{borderColor: 'rgba(201, 168, 76, 0.4)', background: 'rgba(201,168,76,0.05)'}}>
<span className="font-serif text-lg" style={{color: '#C9A84C'}}>3</span>
</div>
<div className="w-px h-full mt-2" style={{background: 'rgba(201,168,76,0.15)'}}></div>
</div>
<div className="pb-8">
<h4 className="font-serif text-lg mb-2 text-white/90">Selection by the Awards Council</h4>
<p className="text-sm font-light leading-relaxed text-white/40">An independent panel of distinguished international figures evaluates shortlisted nominees and selects the final award recipients based on established criteria of excellence.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]" style={{borderColor: 'rgba(201, 168, 76, 0.4)', background: 'rgba(201,168,76,0.05)'}}>
<span className="font-serif text-lg" style={{color: '#C9A84C'}}>4</span>
</div>
</div>
<div>
<h4 className="font-serif text-lg mb-2 text-white/90">Official Recognition Ceremony</h4>
<p className="text-sm font-light leading-relaxed text-white/40">Award recipients are honoured at a prestigious international ceremony attended by world leaders, diplomats and distinguished guests.</p>
</div>
</div>
</div>
</div>

<div className="scroll-reveal lg:pt-20" style={{transitionDelay: '0.2s'}}>
<div className="relative rounded-sm overflow-hidden border p-10 lg:p-14" style={{background: 'rgba(201, 168, 76, 0.02)', borderColor: 'rgba(201,168,76,0.15)'}}>
<div className="absolute top-0 left-0 w-full h-[2px]" style={{background: 'linear-gradient(90deg, #C9A84C, transparent)'}}></div>
<div className="absolute top-0 left-0 h-full w-[2px]" style={{background: 'linear-gradient(180deg, #C9A84C, transparent)'}}></div>
<div className="w-16 h-16 rounded-full border flex items-center justify-center mb-8" style={{borderColor: 'rgba(201, 168, 76, 0.3)', background: 'rgba(201,168,76,0.08)'}}>
<iconify-icon icon="solar:pen-new-round-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="28"></iconify-icon>
</div>
<h3 className="font-serif text-2xl lg:text-3xl tracking-tight mb-4 text-white/90">Begin Your<br/>Nomination</h3>
<p className="text-sm font-light leading-relaxed text-white/50 mb-8">
                            Know an exceptional leader who has made a significant contribution to humanity? Submit your nomination for consideration by the Awards Council.
                        </p>
<div className="space-y-4 mb-10 text-sm font-light text-white/40">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="18"></iconify-icon>
<span>Open to all nationalities and sectors</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="18"></iconify-icon>
<span>Confidential review process</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="18"></iconify-icon>
<span>Independent international judging panel</span>
</div>
</div>
<a className="group inline-flex items-center gap-3 w-full justify-center px-8 py-4 rounded-sm text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]" href="#" style={{background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)', color: '#0A0A0A'}}>
                            Submit a Nomination
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<p className="text-[10px] uppercase tracking-widest text-white/20 text-center mt-6">Nominations are reviewed in strict confidence</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-36 px-6 lg:px-8 border-t" style={{background: '#0A0A0A', borderColor: 'rgba(255,255,255,0.05)'}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 scroll-reveal">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
<span className="text-xs tracking-[0.3em] uppercase" style={{color: '#C9A84C'}}>Global Impact</span>
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
</div>
<h2 className="font-serif text-3xl lg:text-5xl tracking-tight mb-6">
                    A Legacy of <span className="italic" style={{color: '#C9A84C'}}>Meaningful Change</span>
</h2>
<p className="text-base font-light text-white/50 max-w-2xl mx-auto leading-relaxed">
                    The Mandela Awards Commission's mission goes beyond recognition — we seek to inspire transformative leadership and amplify the impact of those who serve humanity.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="scroll-reveal group p-8 lg:p-10 rounded-sm border transition-all duration-500 hover:border-[#C9A84C]/30" style={{background: 'rgba(255, 255, 255, 0.015)', borderColor: 'rgba(255,255,255,0.05)'}}>
<div className="flex items-center gap-4 mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="28"></iconify-icon>
<h4 className="font-serif text-xl text-white/90">Leadership Development</h4>
</div>
<p className="text-sm font-light leading-relaxed text-white/40">By recognising exceptional leaders, we create visible role models who inspire the next generation of public servants, diplomats and humanitarian advocates worldwide.</p>
</div>
<div className="scroll-reveal group p-8 lg:p-10 rounded-sm border transition-all duration-500 hover:border-[#C9A84C]/30" style={{background: 'rgba(255, 255, 255, 0.015)', borderColor: 'rgba(255,255,255,0.05)', transitionDelay: '0.1s'}}>
<div className="flex items-center gap-4 mb-6">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="28"></iconify-icon>
<h4 className="font-serif text-xl text-white/90">International Cooperation</h4>
</div>
<p className="text-sm font-light leading-relaxed text-white/40">Our ceremonies and programmes bring together leaders from diverse nations and backgrounds, fostering dialogue, partnership and collaborative solutions to global challenges.</p>
</div>
<div className="scroll-reveal group p-8 lg:p-10 rounded-sm border transition-all duration-500 hover:border-[#C9A84C]/30" style={{background: 'rgba(255, 255, 255, 0.015)', borderColor: 'rgba(255,255,255,0.05)', transitionDelay: '0.2s'}}>
<div className="flex items-center gap-4 mb-6">
<iconify-icon icon="solar:hand-heart-linear" strokeWidth="1.5" style={{color: '#C9A84C'}} width="28"></iconify-icon>
<h4 className="font-serif text-xl text-white/90">Humanitarian Advocacy</h4>
</div>
<p className="text-sm font-light leading-relaxed text-white/40">Through our platform, we amplify the voices and impact of those dedicated to alleviating poverty, advancing education and promoting social justice across the world.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-36 px-6 lg:px-8 border-t" id="events" style={{background: '#0D0D0D', borderColor: 'rgba(255,255,255,0.05)'}}>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-24 scroll-reveal">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
<span className="text-xs tracking-[0.3em] uppercase" style={{color: '#C9A84C'}}>Events &amp; Ceremonies</span>
<div className="w-8 h-px" style={{background: '#C9A84C'}}></div>
</div>
<h2 className="font-serif text-3xl lg:text-5xl tracking-tight mb-6">
                    Moments of <span className="italic" style={{color: '#C9A84C'}}>Global Recognition</span>
</h2>
<p className="text-base font-light text-white/50 max-w-2xl mx-auto leading-relaxed">
                    Our ceremonies and diplomatic gatherings bring together the world's most distinguished leaders in celebration of extraordinary service to humanity.
                </p>
</div>

<div className="relative max-w-4xl mx-auto">

<div className="absolute top-0 bottom-0 left-[23px] md:left-[39px] w-[2px]" style={{background: 'linear-gradient(180deg, #C9A84C 0%, rgba(201,168,76,0.15) 80%, transparent 100%)'}}></div>
<div className="space-y-20">

<div className="relative pl-16 md:pl-28 scroll-reveal flex flex-col md:flex-row gap-6 md:gap-12 items-start">

<div className="absolute left-0 md:left-4 top-1 w-12 h-12 rounded-full border flex items-center justify-center bg-[#0D0D0D] z-10" style={{borderColor: 'rgba(201,168,76,0.4)'}}>
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#C9A84C', boxShadow: '0 0 10px rgba(201,168,76,0.5)'}}></div>
</div>
<div className="md:w-1/3 flex-shrink-0 pt-2">
<span className="text-[10px] tracking-[0.2em] uppercase font-medium block mb-2" style={{color: '#C9A84C'}}>Upcoming Event</span>
<span className="text-sm text-white/50 block font-light leading-relaxed">December 2024<br/>Johannesburg, South Africa</span>
</div>
<div className="md:w-2/3">
<div className="relative overflow-hidden rounded-sm mb-6 group border p-1.5" style={{borderColor: 'rgba(255, 255, 255, 0.05)', background: 'rgba(255,255,255,0.01)'}}>
<img alt="Awards Ceremony" className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105 rounded-sm" src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&amp;q=80" style={{filter: 'brightness(0.7) saturate(0.85)'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 40%, rgba(13,13,13,0.9) 100%)'}}></div>
</div>
<h4 className="font-serif text-2xl lg:text-3xl mb-4 text-white/90">12th Annual Awards Ceremony</h4>
<p className="text-sm font-light text-white/40 leading-relaxed">The flagship recognition ceremony celebrating the 2024 cohort of Mandela Award recipients at the Sandton Convention Centre. The event will gather heads of state, international diplomats, and distinguished humanitarian leaders.</p>
</div>
</div>

<div className="relative pl-16 md:pl-28 scroll-reveal flex flex-col md:flex-row gap-6 md:gap-12 items-start" style={{transitionDelay: '0.1s'}}>
<div className="absolute left-0 md:left-4 top-1 w-12 h-12 rounded-full border flex items-center justify-center bg-[#0D0D0D] z-10" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
<div className="w-2 h-2 rounded-full bg-white/30"></div>
</div>
<div className="md:w-1/3 flex-shrink-0 pt-2">
<span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/30 block mb-2">Past Event</span>
<span className="text-sm text-white/50 block font-light leading-relaxed">September 2024<br/>Geneva, Switzerland</span>
</div>
<div className="md:w-2/3">
<div className="relative overflow-hidden rounded-sm mb-6 group border p-1.5" style={{borderColor: 'rgba(255, 255, 255, 0.05)', background: 'rgba(255,255,255,0.01)'}}>
<img alt="Leadership Forum" className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105 rounded-sm" src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&amp;q=80" style={{filter: 'brightness(0.6) saturate(0.8)'}}/>
</div>
<h4 className="font-serif text-2xl mb-3 text-white/90">Global Leadership Forum</h4>
<p className="text-sm font-light text-white/40 leading-relaxed">A high-level dialogue at the Palais des Nations bringing together past honourees and emerging leaders to discuss the future of humanitarian leadership and diplomatic cooperation.</p>
</div>
</div>

<div className="relative pl-16 md:pl-28 scroll-reveal flex flex-col md:flex-row gap-6 md:gap-12 items-start" style={{transitionDelay: '0.2s'}}>
<div className="absolute left-0 md:left-4 top-1 w-12 h-12 rounded-full border flex items-center justify-center bg-[#0D0D0D] z-10" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
<div className="w-2 h-2 rounded-full bg-white/30"></div>
</div>
<div className="md:w-1/3 flex-shrink-0 pt-2">
<span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/30 block mb-2">Past Event</span>
<span className="text-sm text-white/50 block font-light leading-relaxed">July 2024<br/>Nairobi, Kenya</span>
</div>
<div className="md:w-2/3">
<h4 className="font-serif text-2xl mb-3 text-white/90">African Diplomatic Reception</h4>
<p className="text-sm font-light text-white/40 leading-relaxed">An exclusive reception honouring African leaders and diplomats who have contributed substantially to continental peace, security, and sustainable development initiatives.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t px-6 lg:px-8 relative" style={{background: '#050505', borderColor: 'rgba(255,255,255,0.05)'}}>

<div className="absolute top-0 left-0 w-full h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)'}}></div>
<div className="max-w-7xl mx-auto py-20 lg:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

<div className="lg:col-span-2 pr-4">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #C9A84C 0%, #E8D48B 50%, #C9A84C 100%)'}}>
<iconify-icon className="text-[#0A0A0A]" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="leading-tight">
<span className="font-serif text-sm font-medium tracking-wide text-white block">MANDELA AWARDS</span>
<span className="text-[10px] tracking-[0.25em] uppercase" style={{color: '#C9A84C'}}>Commission</span>
</div>
</div>
<p className="text-sm font-light leading-relaxed text-white/40 max-w-sm mb-8">
                        An international institutional initiative dedicated to recognising exceptional leadership, diplomacy, and service to humanity, inspired by the enduring legacy of Nelson Mandela.
                    </p>
<a className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#E8D48B] transition-colors" href="mailto:info@mandelaawards.org">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        info@mandelaawards.org
                    </a>
</div>

<div>
<h5 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/70">Commission</h5>
<ul className="space-y-4">
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#about">About</a></li>
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#">Leadership</a></li>
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#">Advisory Council</a></li>
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#">Partners</a></li>
</ul>
</div>

<div>
<h5 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/70">Awards</h5>
<ul className="space-y-4">
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#awards">Award Categories</a></li>
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#honourees">Honourees</a></li>
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#nominations">Nominations</a></li>
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#events">Events &amp; Ceremonies</a></li>
</ul>
</div>

<div>
<h5 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/70">Information</h5>
<ul className="space-y-4">
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#">Media &amp; Press</a></li>
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#contact">Contact</a></li>
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm font-light text-white/40 hover:text-[#C9A84C] transition-colors" href="#">Terms of Use</a></li>
</ul>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto py-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{borderColor: 'rgba(255,255,255,0.05)'}}>
<p className="text-xs text-white/30 font-light">© 2024 Mandela Awards Commission. All rights reserved.</p>
<p className="text-[10px] tracking-widest uppercase text-white/20 font-light">An Independent Global Initiative</p>
</div>
</footer>



    </>
  );
}
