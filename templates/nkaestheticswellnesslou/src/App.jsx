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



        lucide.createIcons();

        // Mobile Menu Logic
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu() {
            if (mobileMenu.classList.contains('menu-hidden')) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                closeMenu();
            }
        }

        function closeMenu() {
            mobileMenu.classList.remove('menu-visible');
            mobileMenu.classList.add('menu-hidden');
            document.body.style.overflow = ''; // Restore scrolling
        }

        menuToggle.addEventListener('click', toggleMenu);
        menuClose.addEventListener('click', closeMenu);
    
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
      

<div className="bg-[#27252a] text-[#f2e9e0] py-2.5 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] uppercase tracking-wider font-medium">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><i className="w-3 h-3 text-[#a5c0bb]" data-lucide="map-pin"></i> Ridgewood, NJ</span>
<span className="hidden sm:inline text-white/20">|</span>
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="tel:+12015006930"><i className="w-3 h-3 text-[#a5c0bb]" data-lucide="phone"></i> (201) 500-6930</a>
</div>
<span className="opacity-90 hidden sm:block">Grand Opening Special: Receive a $50 Gift Card for First Visit</span>
</div>
</div>

<nav className="sticky transition-all duration-300 bg-white/90 z-40 border-[#f2e9e0] border-b top-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex flex-col leading-tight group" href="#">
<span className="font-serif text-2xl text-[#27252a] tracking-tight">NK Aesthetics</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#a5c0bb] font-bold">&amp; Wellness Lounge</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-[13px] font-medium uppercase tracking-widest text-[#60381e]">
<a className="hover:text-[#a5c0bb] transition-colors py-2" href="#cosmetics">Cosmetics</a>
<a className="hover:text-[#a5c0bb] transition-colors py-2" href="#wellness">Wellness</a>
<a className="hover:text-[#a5c0bb] transition-colors py-2" href="#vip">VIP Program</a>
<a className="hover:text-[#a5c0bb] transition-colors py-2" href="#about">About</a>
<a className="hover:text-[#a5c0bb] transition-colors py-2" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<button className="bg-[#a5c0bb] text-[#27252a] px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#8daea8] transition-all shadow-md active:scale-95 flex items-center gap-2" onclick="document.getElementById('booking-section').scrollIntoView()">
                    Book Visit
                </button>
</div>

<button className="lg:hidden p-2 text-[#27252a] z-50 relative" id="menu-toggle">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="menu-hidden fixed inset-0 z-40 bg-[#f2e9e0]/98 backdrop-blur-xl flex items-center justify-center" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-[#27252a]" id="menu-close">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<div className="flex flex-col items-center gap-8 text-center">
<a className="mobile-link text-2xl font-serif text-[#27252a]" href="#cosmetics" onclick="closeMenu()">Cosmetics</a>
<a className="mobile-link text-2xl font-serif text-[#27252a]" href="#wellness" onclick="closeMenu()">Wellness</a>
<a className="mobile-link text-2xl font-serif text-[#27252a]" href="#vip" onclick="closeMenu()">VIP Program</a>
<a className="mobile-link text-2xl font-serif text-[#27252a]" href="#about" onclick="closeMenu()">About Us</a>
<a className="bg-[#27252a] text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest mt-4" href="#booking-section" onclick="closeMenu()">Request Appointment</a>
</div>
</div>

<header className="relative min-h-[90vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="NK Aesthetics Interior" className="w-full h-full object-cover object-center" src="https://nkaestheticswl.com/wp-content/uploads/2024/08/nk-aesthetics-wellness-lounge.webp"/>
<div className="bg-gray-950 opacity-40 mix-blend-hard-light absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10">
<div className="max-w-2xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f2e9e0] text-[10px] uppercase tracking-[0.2em] font-medium">
<span className="w-2 h-2 rounded-full bg-[#a5c0bb]"></span>
                    Accepting New Patients
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Enhancing Your <br/>
<span className="italic text-[#a5c0bb] font-serif">Natural Beauty</span> &amp; Inner Wellness.
                </h1>
<p className="text-lg text-[#f2e9e0]/90 font-light leading-relaxed max-w-lg border-l-2 border-[#a5c0bb] pl-6">
                    A holistic medical lounge in Ridgewood dedicated to integrity, safety, and personalized patient care.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-[#a5c0bb] text-[#27252a] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#f2e9e0] transition-all shadow-xl" onclick="document.getElementById('booking-section').scrollIntoView()">
                        Request Appointment
                    </button>
<a className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex justify-center items-center gap-2" href="tel:+12015006930">
<i className="w-4 h-4" data-lucide="phone"></i> (201) 500-6930
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-[#f2e9e0] border-t border-[#60381e]/10 py-6">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-6 md:gap-12 items-center text-[#60381e]">
<div className="flex items-center gap-3">
<div className="flex text-[#a5c0bb]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-bold uppercase tracking-wider">5-Star Rated Care</span>
</div>
<div className="hidden md:flex items-center gap-3">
<i className="w-5 h-5 text-[#a5c0bb]" data-lucide="shield-check"></i>
<span className="text-xs font-bold uppercase tracking-wider">Licensed Medical Team</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#a5c0bb]" data-lucide="map"></i>
<span className="text-xs font-bold uppercase tracking-wider">Ridgewood, NJ</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="cosmetics">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-[#a5c0bb] text-xs font-bold tracking-widest uppercase block mb-3">Service Menu</span>
<h2 className="text-4xl md:text-5xl font-medium text-[#27252a] tracking-tight">Cosmetic Treatments</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group p-8 bg-[#fcfbf9] rounded-[2rem] border border-[#f2e9e0] hover:border-[#a5c0bb] transition-all hover:shadow-lg" href="#">
<div className="w-12 h-12 bg-[#f2e9e0] rounded-full flex items-center justify-center text-[#60381e] mb-6 group-hover:bg-[#a5c0bb] transition-colors">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<h3 className="text-xl font-serif text-[#27252a] mb-2">Neurotoxins</h3>
<p className="text-sm text-[#60381e]/70 leading-relaxed mb-4">FDA-approved wrinkle reducers (Botox) to smooth fine lines and refresh your look.</p>
<span className="text-xs font-bold uppercase tracking-wider text-[#a5c0bb] flex items-center gap-2 group-hover:translate-x-2 transition-transform">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></span>
</a>

<a className="group p-8 bg-[#fcfbf9] rounded-[2rem] border border-[#f2e9e0] hover:border-[#a5c0bb] transition-all hover:shadow-lg" href="#">
<div className="w-12 h-12 bg-[#f2e9e0] rounded-full flex items-center justify-center text-[#60381e] mb-6 group-hover:bg-[#a5c0bb] transition-colors">
<i className="w-6 h-6" data-lucide="syringe"></i>
</div>
<h3 className="text-xl font-serif text-[#27252a] mb-2">Dermal Fillers</h3>
<p className="text-sm text-[#60381e]/70 leading-relaxed mb-4">Restore volume and contour features for a youthful, balanced appearance.</p>
<span className="text-xs font-bold uppercase tracking-wider text-[#a5c0bb] flex items-center gap-2 group-hover:translate-x-2 transition-transform">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></span>
</a>

<a className="group p-8 bg-[#fcfbf9] rounded-[2rem] border border-[#f2e9e0] hover:border-[#a5c0bb] transition-all hover:shadow-lg" href="#">
<div className="w-12 h-12 bg-[#f2e9e0] rounded-full flex items-center justify-center text-[#60381e] mb-6 group-hover:bg-[#a5c0bb] transition-colors">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-serif text-[#27252a] mb-2">Microneedling</h3>
<p className="text-sm text-[#60381e]/70 leading-relaxed mb-4">Available with PRP, Salmon DNA, or Exosomes to stimulate collagen.</p>
<span className="text-xs font-bold uppercase tracking-wider text-[#a5c0bb] flex items-center gap-2 group-hover:translate-x-2 transition-transform">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></span>
</a>

<a className="group p-8 bg-[#fcfbf9] rounded-[2rem] border border-[#f2e9e0] hover:border-[#a5c0bb] transition-all hover:shadow-lg" href="#">
<div className="w-12 h-12 bg-[#f2e9e0] rounded-full flex items-center justify-center text-[#60381e] mb-6 group-hover:bg-[#a5c0bb] transition-colors">
<i className="w-6 h-6" data-lucide="scissors"></i>
</div>
<h3 className="text-xl font-serif text-[#27252a] mb-2">Hair Restoration</h3>
<p className="text-sm text-[#60381e]/70 leading-relaxed mb-4">Non-surgical solutions to promote hair growth and thickness.</p>
<span className="text-xs font-bold uppercase tracking-wider text-[#a5c0bb] flex items-center gap-2 group-hover:translate-x-2 transition-transform">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></span>
</a>

<a className="group p-8 bg-[#fcfbf9] rounded-[2rem] border border-[#f2e9e0] hover:border-[#a5c0bb] transition-all hover:shadow-lg" href="#">
<div className="w-12 h-12 bg-[#f2e9e0] rounded-full flex items-center justify-center text-[#60381e] mb-6 group-hover:bg-[#a5c0bb] transition-colors">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<h3 className="text-xl font-serif text-[#27252a] mb-2">VI Peel</h3>
<p className="text-sm text-[#60381e]/70 leading-relaxed mb-4">Medium-depth chemical peel to improve tone, texture, and clarity.</p>
<span className="text-xs font-bold uppercase tracking-wider text-[#a5c0bb] flex items-center gap-2 group-hover:translate-x-2 transition-transform">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#f2e9e0] relative" id="wellness">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-right">
<span className="text-[#60381e] text-xs font-bold tracking-widest uppercase block mb-3">Holistic Health</span>
<h2 className="text-4xl md:text-5xl font-medium text-[#27252a] tracking-tight">Wellness Treatments</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-lg font-bold text-[#27252a] mb-2">Medical Weight Loss</h3>
<p className="text-sm text-[#60381e]/70">Physician-guided programs for sustainable results.</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-lg font-bold text-[#27252a] mb-2">Hormone Therapy</h3>
<p className="text-sm text-[#60381e]/70">Bio-identical hormone replacement for balance.</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-lg font-bold text-[#27252a] mb-2">IV Infusions</h3>
<p className="text-sm text-[#60381e]/70">Hydration and vitamin blends for optimal wellness.</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-lg font-bold text-[#27252a] mb-2">Peptide Therapy</h3>
<p className="text-sm text-[#60381e]/70">Advanced cellular signaling for health optimization.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-4xl font-medium text-[#27252a] tracking-tight">Our Values: <br/><span className="font-serif italic text-[#a5c0bb]">Integrity &amp; Trust</span></h2>
<div className="space-y-6 text-[#60381e] font-light leading-relaxed text-lg">
<p>At NK Aesthetics &amp; Wellness Lounge, we are committed to holistic well-being with a focus on integrity and personalized care. We provide transparent, safe, and high-quality treatments to enhance both physical appearance and internal health.</p>
<p>Our team of skilled professionals ensures that every client receives tailored, patient-centered service.</p>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="flex items-center gap-3 p-4 bg-[#fcfbf9] rounded-lg">
<i className="w-6 h-6 text-[#a5c0bb]" data-lucide="heart-handshake"></i>
<span className="text-sm font-bold text-[#27252a]">Patient-Centered</span>
</div>
<div className="flex items-center gap-3 p-4 bg-[#fcfbf9] rounded-lg">
<i className="w-6 h-6 text-[#a5c0bb]" data-lucide="shield-check"></i>
<span className="text-sm font-bold text-[#27252a]">Safety First</span>
</div>
</div>
</div>

<div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://nkaestheticswl.com/wp-content/uploads/2024/08/nk-aesthetics-wellness-lounge.webp"/>
</div>
</div>
</section>

<section className="text-[#f2e9e0] bg-[#27252a] pt-4 pb-4" id="vip">
<div className="text-center max-w-4xl mt-4 mr-auto mb-4 ml-auto">
<div className="inline-block p-3 rounded-full bg-white/10 mb-6">
<i className="w-8 h-8 text-[#a5c0bb]" data-lucide="gift"></i>
</div>
<p className="text-lg md:text-xl font-light text-white/80 mb-10">Receive a complimentary <span className="text-[#a5c0bb] font-bold">$50 Gift Card</span> to be applied toward your first visit at NK Aesthetics.</p>
<a className="inline-block bg-[#f2e9e0] text-[#27252a] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#a5c0bb] transition-colors" href="#booking-section">Claim Your Gift</a>
</div>
</section>

<section className="py-24 bg-[#fcfbf9]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">

<div className="">
<h2 className="text-3xl font-serif text-[#27252a] mb-8">Visit The Lounge</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 bg-[#f2e9e0] rounded-full flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#60381e]" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="font-bold text-[#27252a] mb-1">Ridgewood</h3>
<p className="text-[#60381e] text-sm leading-relaxed">
                                    235 E Ridgewood Ave, Suite 8<br/>
                                    Ridgewood, NJ 07451
                                </p>
<a className="text-[#a5c0bb] text-xs font-bold uppercase tracking-wider mt-2 inline-block border-b border-[#a5c0bb] pb-0.5" href="https://maps.google.com/?q=235+E+Ridgewood+Ave+Suite+8+Ridgewood+NJ+07451" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-[#f2e9e0] rounded-full flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#60381e]" data-lucide="clock"></i>
</div>
<div>
<h3 className="font-bold text-[#27252a] mb-1">Hours</h3>
<table className="text-sm text-[#60381e] w-full max-w-xs">
<tbody><tr><td className="py-1">Monday</td><td className="text-right">9:30 am – 2 pm</td></tr>
<tr><td className="py-1 opacity-50">Tuesday</td><td className="text-right opacity-50">Closed</td></tr>
<tr><td className="py-1">Wednesday</td><td className="text-right">10 am – 4 pm</td></tr>
<tr><td className="py-1">Thursday</td><td className="text-right">10 am – 6 pm</td></tr>
<tr><td className="py-1">Friday</td><td className="text-right">10 am – 4 pm</td></tr>
<tr><td className="py-1 opacity-50">Sat/Sun</td><td className="text-right opacity-50">Closed</td></tr>
</tbody></table>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-[#f2e9e0]" id="booking-section">
<h3 className="text-2xl font-serif text-[#27252a] mb-6">Request Appointment</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. Our team will contact you shortly to confirm.');">
<div className="grid grid-cols-2 gap-4">
<input className="w-full p-4 bg-[#fcfbf9] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#a5c0bb]" placeholder="First Name" required="" type="text"/>
<input className="w-full p-4 bg-[#fcfbf9] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#a5c0bb]" placeholder="Last Name" required="" type="text"/>
</div>
<input className="w-full p-4 bg-[#fcfbf9] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#a5c0bb]" placeholder="Phone Number" required="" type="tel"/>
<input className="w-full p-4 bg-[#fcfbf9] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#a5c0bb]" placeholder="Email Address" required="" type="email"/>
<select className="w-full p-4 bg-[#fcfbf9] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#a5c0bb] text-[#60381e]">
<option value="">Select Treatment of Interest</option>
<option value="neurotoxins">Neurotoxins (Botox)</option>
<option value="filler">Dermal Filler</option>
<option value="microneedling">Microneedling</option>
<option value="vi-peel">VI Peel</option>
<option value="weight-loss">Medical Weight Loss</option>
<option value="hormone">Hormone Therapy</option>
<option value="iv">IV Infusion</option>
</select>
<textarea className="w-full p-4 bg-[#fcfbf9] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#a5c0bb]" placeholder="How can we help you?" rows="3"></textarea>
<button className="w-full bg-[#27252a] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#a5c0bb] hover:text-[#27252a] transition-colors" type="submit">
                            Submit Request
                        </button>
<p className="text-[10px] text-center text-gray-400 mt-2">Connects to clinic email autoresponder.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#f2e9e0]" id="reviews">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-serif text-[#27252a] mb-12">Patient Stories</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 bg-[#fcfbf9] rounded-2xl">
<div className="flex text-[#a5c0bb] justify-center mb-4">★★★★★</div>
<p className="text-[#60381e] text-sm leading-relaxed italic">"Dr. O was amazing. I had the VI Peel... he was so understanding and explained the procedure thoroughly."</p>
<p className="mt-4 font-bold text-xs uppercase tracking-wide text-[#27252a]">- Shila P.</p>
</div>
<div className="p-8 bg-[#fcfbf9] rounded-2xl">
<div className="flex text-[#a5c0bb] justify-center mb-4">★★★★★</div>
<p className="text-[#60381e] text-sm leading-relaxed italic">"Best Wellness lounge I’ve been to. I was treated like a true VIP. I highly recommend NK aesthetics!"</p>
<p className="mt-4 font-bold text-xs uppercase tracking-wide text-[#27252a]">- Mitchell O.</p>
</div>
<div className="p-8 bg-[#fcfbf9] rounded-2xl">
<div className="flex text-[#a5c0bb] justify-center mb-4">★★★★★</div>
<p className="text-[#60381e] text-sm leading-relaxed italic">"Wow! Exactly the type of place I was looking for! Dr. O was thorough in explaining everything."</p>
<p className="mt-4 font-bold text-xs uppercase tracking-wide text-[#27252a]">- Anjali J.</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#27252a] text-[#f2e9e0]/60 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="block text-2xl font-serif text-white tracking-tight" href="#">NK Aesthetics.</a>
<p className="text-sm leading-relaxed max-w-sm">
                        Committed to holistic well-being with a focus on integrity and personalized care.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#a5c0bb] hover:text-[#27252a] transition-colors" href="https://instagram.com/nkaestheticswl/" target="_blank"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#a5c0bb] hover:text-[#27252a] transition-colors" href="https://www.facebook.com/profile.php?id=61564147351797" target="_blank"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Explore</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#cosmetics">Cosmetics</a></li>
<li><a className="hover:text-white transition-colors" href="#wellness">Wellness</a></li>
<li><a className="hover:text-white transition-colors" href="#vip">VIP Program</a></li>
<li><a className="hover:text-white transition-colors" href="https://nkaestheticswl.com/privacy-policy/">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#a5c0bb]" data-lucide="map-pin"></i>
<span>235 E Ridgewood Ave, Ste 8<br/>Ridgewood, NJ 07451</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#a5c0bb]" data-lucide="phone"></i>
<span>(201) 500-6930</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#a5c0bb]" data-lucide="mail"></i>
<span>NKAestheticsWL@gmail.com</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 text-center md:text-left text-xs">
<p>© 2024 NK Aesthetics &amp; Wellness Lounge. All Rights Reserved.</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-30 md:hidden">
<button className="bg-[#a5c0bb] text-[#27252a] p-4 rounded-full shadow-2xl hover:scale-105 transition-transform border border-white/20" onclick="document.getElementById('booking-section').scrollIntoView()">
<i className="w-6 h-6" data-lucide="calendar-days"></i>
</button>
</div>


    </>
  );
}
