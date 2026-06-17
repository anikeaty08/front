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
colors: {
bra: {
surface: '#FFF5E6', // Light Beige/Cream
surfaceAlt: '#F5F5F5', // Soft White
brown: '#8B4513', // Medium Brown (Text/Headings)
dark: '#5D4037', // Darker Brown for contrast
accent: '#F5A623', // Warm Orange
gold: '#FFD700', // CTAs
green: '#4CAF50', // Lighter Sustainability Green
input: '#FFFFFF',
border: '#E0D0C0'
}
},
fontFamily: {
sans: ['Roboto', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.02em',
tight: '-0.01em',
widest: '0.15em'
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // ------------------
        // Age Verification Logic
        // ------------------
        function verifyAge(e) {
            e.preventDefault();
            
            const dayInput = document.getElementById('dob-day');
            const monthInput = document.getElementById('dob-month');
            const yearInput = document.getElementById('dob-year');
            const errorMsg = document.getElementById('age-error');
            const gate = document.getElementById('age-gate');
            
            const day = parseInt(dayInput.value);
            const month = parseInt(monthInput.value);
            const year = parseInt(yearInput.value);
            const currentYear = new Date().getFullYear();
            
            if(!day || !month || !year || day > 31 || month > 12 || year < 1900 || year > currentYear) {
                showError("Please enter a valid date.");
                return;
            }

            const today = new Date();
            const birthDate = new Date(year, month - 1, day);
            
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age >= 18) {
                sessionStorage.setItem('bra_age_verified', 'true');
                gate.style.opacity = '0';
                gate.style.pointerEvents = 'none';
                setTimeout(() => {
                    gate.style.display = 'none';
                    triggerReveals(); 
                }, 800);
            } else {
                showError("Access Denied. You must be 18+ to enter.");
                const form = document.getElementById('age-form');
                form.classList.add('animate-pulse'); 
                setTimeout(() => form.classList.remove('animate-pulse'), 500);
            }
        }

        function showError(msg) {
            const errorMsg = document.getElementById('age-error');
            errorMsg.classList.remove('hidden');
            errorMsg.querySelector('p').innerText = msg;
        }

        ['dob-day', 'dob-month', 'dob-year'].forEach((id, index, arr) => {
            document.getElementById(id).addEventListener('input', (e) => {
                if(e.target.value.length >= e.target.maxLength && index < arr.length - 1) {
                    document.getElementById(arr[index + 1]).focus();
                }
            });
        });

        if(sessionStorage.getItem('bra_age_verified') === 'true') {
            document.getElementById('age-gate').style.display = 'none';
            setTimeout(triggerReveals, 100);
        }

        // ------------------
        // Contact Form Logic
        // ------------------
        function handleContact(e) {
            e.preventDefault(); // Stop page reload
            
            const successOverlay = document.getElementById('form-success');
            const form = e.target;
            
            // Show Success Overlay (Smooth Fade In)
            successOverlay.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
            successOverlay.classList.add('scale-100');
            
            // Briefly show (3.5 seconds), then hide and reset
            setTimeout(() => {
                // Fade out
                successOverlay.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
                successOverlay.classList.remove('scale-100');
                
                // Clear inputs
                form.reset();
            }, 3500);
        }

        // ------------------
        // Scroll Reveal Logic
        // ------------------
        function triggerReveals() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
        }

        function closeMenu() {
            document.getElementById('mobile-menu').classList.add('hidden');
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
      

<div className="fixed flex flex-col transition-all duration-1000 ease-in-out text-center z-[9999] inset-0 items-center justify-center bg-bra-surface/40 backdrop-blur-xl" id="age-gate" style={{display: 'none'}}>
<div className="absolute inset-0 bg-[#FFF5E6] opacity-90 z-0"></div>
<div className="absolute inset-0 bg-pattern z-0"></div>
<div className="relative z-10 max-w-md w-full p-8 md:p-12 rounded-2xl bg-white shadow-xl border border-bra-border mx-4">
<div className="flex flex-col items-center justify-center mb-8">
<div className="w-16 h-16 bg-bra-accent/10 rounded-full flex items-center justify-center mb-4 text-bra-accent">
<i className="w-8 h-8" data-lucide="map"></i>
</div>
<h1 className="font-serif text-3xl md:text-4xl text-bra-brown font-bold tracking-tight">My Urban Africa</h1>
</div>
<h2 className="text-xl font-serif text-bra-brown mb-2 font-semibold">Confirm Your Age</h2>
<p className="text-sm mb-8 text-bra-dark/70 font-light">
                To explore our heritage, you must be of legal drinking age.<br/>Please enter your birth date.
            </p>
<form className="space-y-6" id="age-form" onsubmit="verifyAge(event)">
<div className="flex gap-3 justify-center">
<div className="flex flex-col gap-1 w-1/4">
<label className="text-[10px] uppercase tracking-widest text-bra-brown/60 font-bold">Day</label>
<input className="text-center w-full h-12 border-bra-border border rounded-lg bg-white text-bra-brown font-serif text-lg focus:outline-none focus:border-bra-gold focus:ring-2 focus:ring-bra-gold/20 transition-all placeholder:text-bra-brown/20" id="dob-day" maxlength="2" placeholder="DD" required="" type="tel"/>
</div>
<div className="flex flex-col gap-1 w-1/4">
<label className="text-[10px] uppercase tracking-widest text-bra-brown/60 font-bold">Month</label>
<input className="text-center w-full h-12 border-bra-border border rounded-lg bg-white text-bra-brown font-serif text-lg focus:outline-none focus:border-bra-gold focus:ring-2 focus:ring-bra-gold/20 transition-all placeholder:text-bra-brown/20" id="dob-month" maxlength="2" placeholder="MM" required="" type="tel"/>
</div>
<div className="flex flex-col gap-1 w-1/2">
<label className="text-[10px] uppercase tracking-widest text-bra-brown/60 font-bold">Year</label>
<input className="text-center w-full h-12 border-bra-border border rounded-lg bg-white text-bra-brown font-serif text-lg focus:outline-none focus:border-bra-gold focus:ring-2 focus:ring-bra-gold/20 transition-all placeholder:text-bra-brown/20" id="dob-year" maxlength="4" placeholder="YYYY" required="" type="tel"/>
</div>
</div>
<div className="hidden p-3 bg-red-50 rounded-lg border border-red-100" id="age-error">
<p className="text-xs font-medium text-red-600">Access Denied. You must be 18+ to enter.</p>
</div>
<button className="w-full h-12 rounded-lg bg-bra-gold text-white font-bold text-sm tracking-widest uppercase hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl" type="submit">
                    Enter Site
                </button>
</form>
<div className="mt-8 pt-6 border-t border-bra-border/30 flex justify-center gap-6 text-xs text-bra-brown/50">
<a className="hover:text-bra-brown transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-bra-brown transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-bra-surface/90 backdrop-blur-md shadow-sm transition-opacity duration-300 border-b border-bra-brown/5"></div>
<div className="relative max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
<a className="flex items-center gap-3 group relative z-50" href="#">
<div className="md:w-12 md:h-12 text-bra-accent transition-transform duration-300 group-hover:scale-110 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d7c36fc-0d8d-46a4-ac8a-a5c12049c4c6_320w.png)] bg-cover bg-center"></div>
<div className="flex flex-col">
<span className="font-serif text-lg md:text-xl font-bold text-bra-brown leading-none tracking-tight">My Urban Africa</span>
<span className="font-sans text-[9px] md:text-[10px] text-bra-accent uppercase tracking-widest font-medium mt-0.5">Innovating Heritage</span>
</div>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-bra-brown/80 hover:text-bra-accent transition-colors" href="#hero">Home</a>
<a className="text-sm font-medium text-bra-brown/80 hover:text-bra-accent transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-bra-brown/80 hover:text-bra-accent transition-colors" href="#innovation">Innovation</a>
<a className="text-sm font-medium text-bra-brown/80 hover:text-bra-accent transition-colors" href="#sustainability">Sustainability</a>
<a className="px-6 py-2.5 bg-bra-brown text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-bra-accent transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300" href="#contact">
                    Contact Us
                </a>
<button className="flex items-center gap-1 text-xs font-bold text-bra-brown/60 hover:text-bra-brown border-b-2 border-bra-gold pb-0.5">
                    EN <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>
<button className="lg:hidden p-2 text-bra-brown hover:text-bra-accent transition-colors z-50" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
<div className="hidden lg:hidden absolute top-20 left-0 w-full bg-white border-b border-bra-border p-6 flex flex-col gap-4 shadow-xl animate-fade-in-down z-40" id="mobile-menu">
<a className="text-lg font-serif font-medium text-bra-brown py-2 border-b border-bra-surface" href="#hero" onclick="closeMenu()">Home</a>
<a className="text-lg font-serif font-medium text-bra-brown py-2 border-b border-bra-surface" href="#about" onclick="closeMenu()">About</a>
<a className="text-lg font-serif font-medium text-bra-brown py-2 border-b border-bra-surface" href="#innovation" onclick="closeMenu()">Innovation</a>
<a className="text-lg font-serif font-medium text-bra-brown py-2 border-b border-bra-surface" href="#sustainability" onclick="closeMenu()">Sustainability</a>
<a className="text-lg font-serif font-medium text-bra-accent py-2" href="#contact" onclick="closeMenu()">Contact</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#FFF5E6] via-[#FFF8F0] to-[#FFE4C4]" id="hero">
<div className="absolute inset-0 bg-pattern z-0 opacity-40"></div>
<div className="absolute top-0 right-0 w-3/4 h-full bg-[url('https://images.unsplash.com/photo-1572013343866-c045b4c65338?q=80&amp;w=2805&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply z-0 pointer-events-none"></div>
<div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-bra-gold/10 rounded-full blur-[120px]"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="reveal-up flex flex-col items-start pt-10 lg:pt-0 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bra-accent/10 text-bra-accent border border-bra-accent/20 mb-6">
<span className="w-2 h-2 rounded-full bg-bra-accent animate-pulse"></span>
<span className="text-[10px] font-bold tracking-[0.2em] uppercase">Now Available Nationwide</span>
</div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-bra-brown drop-shadow-sm">
                    My Urban Africa: <br/>
<span className="italic text-bra-accent">Brewing the Future</span> <br/>
                    of African Heritage
                </h1>
<p className="text-lg md:text-xl font-light text-bra-dark/80 mb-10 max-w-lg leading-relaxed">
                    A celebration of culture in every carton. Authentic sorghum beer refined for the modern palate, bringing the warmth of tradition to the urban spirit.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-14 px-10 rounded-full bg-bra-gold text-white text-xs font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 hover:bg-bra-accent hover:shadow-xl hover:-translate-y-1 transform duration-300" href="#innovation">
                        Explore Our Vision
                    </a>
<a className="h-14 px-10 rounded-full bg-white text-bra-brown border border-bra-border text-xs font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 hover:bg-bra-surface hover:border-bra-brown/30" href="#about">
                        Our Story
                    </a>
</div>
</div>
<div className="relative order-1 lg:order-2 flex justify-center perspective-1000">
<div className="relative z-10 w-[280px] md:w-[380px] aspect-[3/4] transition-transform duration-500 hover:scale-105">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-bra-accent/20 blur-[60px] rounded-full"></div>
<img alt="My Urban Africa Carton" className="w-full h-full object-contain drop-shadow-2xl relative z-10 img-warm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/160ea10d-bedb-4e90-944d-08cbb018ca03_3840w.png?w=800&amp;q=80"/>
</div>
<div className="absolute -top-10 -right-10 w-24 h-24 bg-bra-green/10 rounded-full blur-2xl animate-bounce delay-700"></div>
</div>
</div>
<a className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300" href="#about">
<span className="text-[9px] text-bra-brown/60 uppercase tracking-widest">Scroll</span>
<div className="w-px h-8 bg-bra-brown/30"></div>
</a>
</header>

<section className="py-24 md:py-32 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative reveal-up">
<div className="absolute -top-4 -left-4 w-full h-full border-2 border-bra-gold rounded-2xl z-0"></div>
<img alt="Team Toasting" className="relative z-10 rounded-2xl shadow-soft w-full aspect-[4/3] object-cover img-warm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79c1f966-ef8d-48ce-b7ff-21cdd3034b2d_3840w.jpg?w=800&amp;q=80"/>
</div>
<div className="reveal-up delay-200">
<span className="text-bra-accent font-sans text-xs font-bold tracking-widest uppercase mb-4 block">Our Story</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium text-bra-brown mb-6 leading-tight">Connecting Past &amp; Present</h2>
<p className="text-bra-dark/70 leading-relaxed mb-6 font-light">
                        My Urban Africa was born from a desire to preserve the communal spirit of traditional sorghum brewing while adapting it for the fast-paced urban lifestyle. We source the finest local ingredients to create a brew that is both authentic and refreshing.
                    </p>
<p className="text-bra-dark/70 leading-relaxed mb-8 font-light">
                        More than just a beverage, it's a connector—bringing friends and families together over a shared heritage.
                    </p>
<a className="inline-flex items-center text-bra-brown font-bold text-sm tracking-widest uppercase hover:text-bra-accent transition-colors group" href="#contact">
                        Read More 
                        <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-gradient-to-b from-[#F0FDF4] to-[#FFF5E6] relative overflow-hidden" id="innovation">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
<span className="text-bra-green font-sans text-xs font-bold tracking-widest uppercase mb-4 block">Craftsmanship</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium text-bra-brown mb-6">Innovation in Heritage</h2>
<p className="text-bra-dark/70 font-light">Combining age-old fermentation techniques with modern quality control to deliver a consistent, safe, and delicious taste experience.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal-up delay-100 group">
<div className="w-16 h-16 rounded-full bg-[#FFF5E6] flex items-center justify-center text-bra-brown mb-6 group-hover:bg-bra-accent group-hover:text-white transition-colors duration-500">
<i className="w-8 h-8" data-lucide="wheat"></i>
</div>
<h3 className="font-serif text-xl font-bold text-bra-brown mb-3">Premium Sorghum</h3>
<p className="text-sm text-bra-dark/70 leading-relaxed">Sourced from local farmers, ensuring the highest grade grain for a rich, authentic flavor profile.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal-up delay-200 group">
<div className="w-16 h-16 rounded-full bg-[#FFF5E6] flex items-center justify-center text-bra-brown mb-6 group-hover:bg-bra-accent group-hover:text-white transition-colors duration-500">
<i className="w-8 h-8" data-lucide="flask-conical"></i>
</div>
<h3 className="font-serif text-xl font-bold text-bra-brown mb-3">Modern Brewing</h3>
<p className="text-sm text-bra-dark/70 leading-relaxed">State-of-the-art facilities ensure hygiene and consistency without compromising the traditional recipe.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal-up delay-300 group">
<div className="w-16 h-16 rounded-full bg-[#FFF5E6] flex items-center justify-center text-bra-brown mb-6 group-hover:bg-bra-accent group-hover:text-white transition-colors duration-500">
<i className="w-8 h-8" data-lucide="leaf"></i>
</div>
<h3 className="font-serif text-xl font-bold text-bra-brown mb-3">Natural Ingredients</h3>
<p className="text-sm text-bra-dark/70 leading-relaxed">No artificial preservatives. Just water, sorghum malt, maize meal, and yeast. Pure and simple.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex h-12 px-8 rounded-full bg-bra-gold text-white text-xs font-bold tracking-[0.15em] uppercase transition-all items-center justify-center gap-2 hover:bg-bra-accent hover:shadow-lg" href="#contact">
                    Discover More
                </a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-bra-surfaceAlt" id="sustainability">
<div className="absolute inset-0 z-0 opacity-10">
<img alt="Fields" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=3432&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<span className="text-bra-green font-sans text-xs font-bold tracking-widest uppercase mb-4 block reveal-up">Our Responsibility</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium text-bra-brown mb-8 reveal-up delay-100">Commitment to Sustainability</h2>
<p className="text-bra-dark/70 max-w-2xl mx-auto mb-16 font-light reveal-up delay-200">
                We are dedicated to minimizing our environmental footprint. From recyclable packaging to water conservation in our brewing process, every step is taken with the future in mind.
            </p>
<div className="flex flex-wrap justify-center gap-6 md:gap-12 reveal-up delay-300">
<div className="flex flex-col items-center group cursor-default">
<div className="w-20 h-20 rounded-full border-2 border-bra-green/30 flex items-center justify-center bg-white mb-4 group-hover:rotate-12 transition-transform duration-500">
<i className="w-8 h-8 text-bra-green" data-lucide="recycle"></i>
</div>
<span className="font-bold text-bra-brown text-sm uppercase tracking-wide">Recyclable<br/>Packaging</span>
</div>
<div className="flex flex-col items-center group cursor-default">
<div className="w-20 h-20 rounded-full border-2 border-bra-green/30 flex items-center justify-center bg-white mb-4 group-hover:rotate-12 transition-transform duration-500">
<i className="w-8 h-8 text-bra-green" data-lucide="droplet"></i>
</div>
<span className="font-bold text-bra-brown text-sm uppercase tracking-wide">Water<br/>Conservation</span>
</div>
<div className="flex flex-col items-center group cursor-default">
<div className="w-20 h-20 rounded-full border-2 border-bra-green/30 flex items-center justify-center bg-white mb-4 group-hover:rotate-12 transition-transform duration-500">
<i className="w-8 h-8 text-bra-green" data-lucide="tractor"></i>
</div>
<span className="font-bold text-bra-brown text-sm uppercase tracking-wide">Ethical<br/>Sourcing</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="md:text-4xl text-bra-brown reveal-up text-3xl font-serif text-center mb-12">Latest Updates</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer reveal-up delay-100">
<div className="overflow-hidden rounded-xl aspect-video mb-4 relative">
<img alt="Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 img-warm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69520e12-b175-4398-84ff-a8f720c2863c_800w.jpg"/>
<div className="group-hover:bg-transparent transition-colors absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<span className="text-bra-accent text-[10px] font-bold uppercase tracking-widest">Events</span>
<h3 className="text-bra-brown group-hover:text-bra-accent transition-colors text-xl font-serif mt-1">Summer Activation Calendar</h3>
</div>

<div className="group cursor-pointer reveal-up delay-200">
<div className="overflow-hidden rounded-xl aspect-video mb-4 relative">
<img alt="Brewing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 img-warm" src="https://images.unsplash.com/photo-1571211910826-6d51744b7f43?q=80&amp;w=2806&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-transparent transition-colors bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54672755-078a-441c-b462-4e186672c833_3840w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<span className="text-bra-accent text-[10px] font-bold uppercase tracking-widest">Heritage</span>
<h3 className="font-serif text-xl mt-1 text-bra-brown group-hover:text-bra-accent transition-colors">The History of Sorghum</h3>
</div>

<div className="group cursor-pointer reveal-up delay-300">
<div className="overflow-hidden rounded-xl aspect-video mb-4 relative">
<img alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 img-warm" src="https://images.unsplash.com/photo-1555447019-2003e1e2d096?q=80&amp;w=2807&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-transparent transition-colors bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b27232a-2ee2-443d-ab7a-ffe561f81fca_3840w.jpg?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<span className="text-bra-accent text-[10px] font-bold uppercase tracking-widest">Community</span>
<h3 className="font-serif text-xl mt-1 text-bra-brown group-hover:text-bra-accent transition-colors">Giving Back: Local Initiatives</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bra-surface relative" id="contact">
<div className="opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">

<div className="reveal-up">
<h2 className="md:text-5xl text-bra-brown text-4xl font-medium font-serif mb-6">Connect With Us</h2>
<p className="text-bra-dark/70 font-light mb-10">Have questions about distribution, events, or our brewing process? We'd love to hear from you.</p>
<div className="space-y-8">
<div className="bg-white p-6 rounded-xl shadow-soft flex items-center gap-6 border border-bra-border/30">
<div className="w-12 h-12 bg-bra-surface rounded-full flex items-center justify-center text-bra-accent">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-serif text-lg text-bra-brown font-bold">Headquarters</h4>
<p className="text-sm text-bra-dark/60">Johannesburg, South Africa</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-soft flex items-center gap-6 border border-bra-border/30">
<div className="w-12 h-12 bg-bra-surface rounded-full flex items-center justify-center text-bra-accent">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<div className="">
<h4 className="font-serif text-lg text-bra-brown font-bold">Email Us</h4>
<a className="text-sm text-bra-dark/60 hover:text-bra-accent" href="mailto:info@myurbanafrica.co.za">info@myurbanafrica.co.za</a>
</div>
</div>
</div>
<div className="flex gap-4 mt-10">
<a className="w-10 h-10 rounded-full bg-bra-brown text-white flex items-center justify-center hover:bg-bra-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-bra-brown text-white flex items-center justify-center hover:bg-bra-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-bra-brown text-white flex items-center justify-center hover:bg-bra-accent transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-bra-border/50 reveal-up delay-200 relative overflow-hidden h-fit">

<div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center transition-all duration-500 opacity-0 pointer-events-none scale-95" id="form-success">
<div className="w-20 h-20 rounded-full bg-bra-green/10 flex items-center justify-center text-bra-green mb-4 animate-bounce">
<i className="w-10 h-10" data-lucide="check"></i>
</div>
<h3 className="font-serif text-2xl text-bra-brown font-bold mb-2">Message Sent</h3>
<p className="text-sm text-gray-500">Thank you! We'll be in touch shortly.</p>
</div>

<form className="space-y-5" onsubmit="handleContact(event)">
<div className="flex flex-col gap-2">
<label className="text-[10px] uppercase font-bold text-bra-brown/60 tracking-widest">Full Name</label>
<input className="w-full h-12 bg-[#F9F9F9] border border-bra-border rounded-lg px-4 focus:outline-none focus:border-bra-accent focus:bg-white transition-all text-bra-brown placeholder:text-gray-400" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-[10px] uppercase font-bold text-bra-brown/60 tracking-widest">Email</label>
<input className="w-full h-12 bg-[#F9F9F9] border border-bra-border rounded-lg px-4 focus:outline-none focus:border-bra-accent focus:bg-white transition-all text-bra-brown placeholder:text-gray-400" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-[10px] uppercase font-bold text-bra-brown/60 tracking-widest">Phone Number</label>
<input className="w-full h-12 bg-[#F9F9F9] border border-bra-border rounded-lg px-4 focus:outline-none focus:border-bra-accent focus:bg-white transition-all text-bra-brown placeholder:text-gray-400" required="" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-[10px] uppercase font-bold text-bra-brown/60 tracking-widest">Message</label>
<textarea className="w-full bg-[#F9F9F9] border border-bra-border rounded-lg p-4 focus:outline-none focus:border-bra-accent focus:bg-white transition-all text-bra-brown placeholder:text-gray-400 resize-none" required="" rows="4"></textarea>
</div>
<button className="w-full h-14 bg-bra-gold hover:bg-bra-accent text-white font-bold text-xs uppercase tracking-[0.15em] rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2" type="submit">
                        Send Message
                    </button>
<p className="text-center text-[10px] text-gray-400">Your details are kept strictly confidential.</p>
</form>
</div>
</div>

<div className="max-w-7xl mx-auto mt-24 px-6 border-t border-bra-brown/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-bra-dark/50 font-medium">
<p>© 2024 My Urban Africa. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-bra-accent transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-bra-accent transition-colors" href="#">Terms of Use</a>
<a className="hover:text-bra-accent transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</section>


    </>
  );
}
