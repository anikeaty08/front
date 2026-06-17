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



        // Auto-advance cursor functionality
        const inputs = ['dob-day', 'dob-month', 'dob-year'];
        inputs.forEach((id, index) => {
            document.getElementById(id).addEventListener('input', function() {
                if (this.value.length >= this.maxLength) {
                    // Logic handled in verify check mostly, but UX improvement:
                    if(index < 2 && this.value.length >= 2) document.getElementById(inputs[index+1]).focus();
                    if(index === 2 && this.value.length >= 4) verifyAge(); // Optional: verify on finish
                }
            });
        });

        function verifyAge() {
            const dayInput = document.getElementById('dob-day');
            const monthInput = document.getElementById('dob-month');
            const yearInput = document.getElementById('dob-year');
            const errorDiv = document.getElementById('age-error');
            const modal = document.getElementById('age-gate');

            const day = parseInt(dayInput.value);
            const month = parseInt(monthInput.value);
            const year = parseInt(yearInput.value);

            // Basic Validity Check
            if (!day || !month || !year || day > 31 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
                errorDiv.innerText = "Please enter a valid date.";
                errorDiv.style.opacity = '1';
                modal.children[0].classList.remove('animate-shake');
                void modal.children[0].offsetWidth; // trigger reflow
                modal.children[0].classList.add('animate-shake');
                return;
            }

            // Age Calculation
            const today = new Date();
            let age = today.getFullYear() - year;
            const m = (today.getMonth() + 1) - month;
            
            if (m < 0 || (m === 0 && today.getDate() < day)) {
                age--;
            }

            if (age < 18) {
                // UNDER AGE
                errorDiv.innerText = "Sorry, you must be 18 or older to enter this site.";
                errorDiv.style.opacity = '1';
                
                // Block Inputs
                dayInput.disabled = true;
                monthInput.disabled = true;
                yearInput.disabled = true;
                
                // Style for blocked state
                dayInput.classList.add('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
                monthInput.classList.add('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
                yearInput.classList.add('bg-stone-200', 'text-stone-400', 'cursor-not-allowed');
                
                modal.children[0].classList.add('animate-shake');
            } else {
                // ACCESS GRANTED
                errorDiv.style.opacity = '0';
                modal.style.opacity = '0';
                modal.style.pointerEvents = 'none';
                document.getElementById('main-body').classList.remove('overflow-hidden');
                
                // Remove from DOM after transition
                setTimeout(() => {
                    modal.remove();
                }, 700);
            }
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
      
<div className="bg-grain"></div>

<div className="fixed flex transition-all duration-700 bg-stone-900/95 z-[100] pt-6 pr-6 pb-6 pl-6 top-0 right-0 bottom-0 left-0 backdrop-blur-md items-center justify-center" id="age-gate">
<div className="bg-white max-w-[480px] w-full rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1.5 bg-[#C41E3A]"></div>

<div className="flex mb-8 justify-center">
<div className="w-40 h-40 bg-stone-50 rounded-full flex items-center justify-center border-2 border-[#D2B48C] border-dashed p-4">

<img alt="BRA's Logo" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7839d19f-817e-4c55-be1b-ecdf7c670d4f_3840w.png"/>
</div>
</div>
<h2 className="text-3xl font-semibold text-[#8B4513] tracking-tight mb-3">Welcome to the Family</h2>
<p className="text-stone-500 mb-8 text-sm leading-relaxed max-w-xs mx-auto">Please confirm your birth date to enter. You must be 18 years or older.</p>

<div className="grid grid-cols-3 gap-3 mb-2">
<div className="flex flex-col text-center">
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl py-4 text-center text-lg font-medium text-[#4A4036] focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A] transition-all placeholder:text-stone-300" id="dob-day" max="31" min="1" placeholder="DD" type="number"/>
</div>
<div className="flex flex-col text-center">
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl py-4 text-center text-lg font-medium text-[#4A4036] focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A] transition-all placeholder:text-stone-300" id="dob-month" max="12" min="1" placeholder="MM" type="number"/>
</div>
<div className="flex flex-col text-center">
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl py-4 text-center text-lg font-medium text-[#4A4036] focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A] transition-all placeholder:text-stone-300" id="dob-year" max="2024" min="1900" placeholder="YYYY" type="number"/>
</div>
</div>

<div className="h-6 mb-6 text-[#C41E3A] text-xs font-semibold tracking-wide opacity-0 transition-opacity" id="age-error">

</div>
<button className="w-full bg-[#8B4513] text-white font-semibold py-4 rounded-xl hover:bg-[#6D360F] active:scale-[0.98] transition-all shadow-lg shadow-stone-900/10 tracking-wide text-sm" onclick="verifyAge()">
                ENTER SITE
            </button>
<div className="flex gap-6 text-xs font-medium text-stone-400 border-stone-100 border-t mt-8 pt-6 gap-x-6 gap-y-6 justify-center">
<span className="opacity-70">Enjoy Responsibly. ©2026 BRA's Traditional Beer®</span>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 h-[70px]">
<div className="flex h-full max-w-[1200px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<img alt="BRA's Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7839d19f-817e-4c55-be1b-ecdf7c670d4f_320w.png"/>
<span className="font-semibold text-[#8B4513] tracking-tight hidden md:block">BRA's Beer</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-[#C41E3A] transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-stone-600 hover:text-[#C41E3A] transition-colors" href="#legacy">Legacy</a>
<a className="text-sm font-medium text-stone-600 hover:text-[#C41E3A] transition-colors" href="#packaging">Packaging</a>
<a className="text-sm font-medium text-stone-600 hover:text-[#C41E3A] transition-colors" href="#gallery">Gallery</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-[#C41E3A] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#A01830] transition-all shadow-md shadow-[#C41E3A]/20" href="#contact">
<span>Contact Us</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<button className="lg:hidden text-[#8B4513]">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="min-h-[85vh] flex overflow-hidden pt-[70px] relative items-center justify-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="African Celebration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bb27f76-091b-4d10-8c04-de6a99237551_3840w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#FFFACD]/30 via-[#D2B48C]/40 to-[#FAFAF9]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1200px] w-full px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFACD]/90 backdrop-blur border border-[#D2B48C] rounded-full w-fit animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-[#C41E3A] animate-pulse"></span>
<span className="text-xs font-bold text-[#8B4513] uppercase tracking-wider">Authentic • Urban • African</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] shadow-sm animate-fade-in-up delay-100">
                    Welcome to the Home of <br/>
<span className="text-[#FFFACD]">BRA’s Traditional Beer®</span>
</h1>
<p className="text-lg text-stone-100 max-w-lg font-light leading-relaxed animate-fade-in-up delay-200">
                    Experience the rhythm of heritage. A sorghum beer crafted with passion, celebrating the vibrant spirit of South African culture.
                </p>
<div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
<a className="bg-[#C41E3A] text-white px-8 py-3.5 rounded-lg font-bold uppercase tracking-wide text-sm hover:scale-105 transition-transform shadow-lg shadow-[#C41E3A]/30" href="#about">
                        Discover Our Story
                    </a>
<a className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-lg font-bold uppercase tracking-wide text-sm hover:bg-white/20 transition-all" href="#gallery">
                        View Gallery
                    </a>
</div>
</div>

<div></div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-1/3 h-full pattern-overlay -z-10"></div>
<div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">

<div className="md:col-span-7 space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] tracking-tight mb-6">A Legacy of <span className="text-[#C41E3A]">African Brewing</span></h2>
<p className="text-stone-600 leading-relaxed text-lg">
                        My Urban Africa is more than just a brewery; we are the custodians of a timeless tradition. BRA’s Traditional Sorghum Beer is brewed to bring people together, honoring the communal spirit that defines our heritage.
                    </p>
<p className="text-stone-600 leading-relaxed text-lg mt-4">
                        From the careful selection of sorghum malt to the rhythmic process of fermentation, every sip tells a story of urban resilience and ancestral pride.
                    </p>
</div>
<div className="grid sm:grid-cols-2 gap-6 pt-4">
<div className="p-6 rounded-xl bg-white border border-[#D2B48C]/30 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#FFFACD] flex items-center justify-center mb-4 text-[#8B4513]">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#8B4513] mb-2">Consumer Health</h3>
<p className="text-sm text-stone-500">Rigorous safety standards ensuring a pure, safe, and enjoyable experience.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-[#D2B48C]/30 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-[#FFFACD] flex items-center justify-center mb-4 text-[#8B4513]">
<iconify-icon icon="lucide:heart-handshake" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#8B4513] mb-2">Community First</h3>
<p className="text-sm text-stone-500">Rooted in the townships, brewed for the people. A true taste of home.</p>
</div>
</div>
</div>

<div className="md:col-span-5 relative group">
<div className="absolute inset-0 bg-[#D2B48C] rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
<div className="relative h-[500px] w-full bg-stone-200 rounded-2xl overflow-hidden border border-[#D2B48C]/20 shadow-xl">

<img alt="Traditional Beer" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/160ea10d-bedb-4e90-944d-08cbb018ca03_1600w.png?w=800&amp;q=80" style={{}}/>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-[#D2B48C]/20 pt-24 pb-24" id="packaging">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] tracking-tight mb-4">Clever Packaging</h2>
<p className="text-stone-500">Innovation meets responsibility. Our commitment to the environment is as strong as our beer.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-[#FAFAF9] border border-stone-100 hover:border-[#D2B48C]/50 hover:bg-[#FFFACD]/20 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-green-100 text-green-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:recycle" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#8B4513] mb-3">Recycling</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Our cartons are 100% recyclable. We actively participate in collection initiatives to keep our urban spaces clean.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFAF9] border border-stone-100 hover:border-[#D2B48C]/50 hover:bg-[#FFFACD]/20 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:box" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#8B4513] mb-3">Repurposing</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Designed for a second life. From seedling planters to insulation, our packaging serves the community long after the last sip.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFAF9] border border-stone-100 hover:border-[#D2B48C]/50 hover:bg-[#FFFACD]/20 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:droplets" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#8B4513] mb-3">Environmental Benefit</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Reduced carbon footprint in manufacturing and transport. We are committed to a greener Africa.
                    </p>
</div>
</div>

<div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[400px] relative bg-stone-900 group cursor-pointer">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cc56243-3ed1-4e4f-a17d-1cd65436f902_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-[#C41E3A] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon className="ml-1" icon="lucide:play" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-8 left-8">
<span className="text-[#FFFACD] text-xs font-bold uppercase tracking-widest mb-2 block">Watch Video</span>
<h3 className="text-white text-2xl font-bold">The Journey of the Carton</h3>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="gallery">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-bold text-[#8B4513] tracking-tight mb-2">Our Moments</h2>
<p className="text-stone-500">Snapshots of joy, heritage, and celebration.</p>
</div>
<button className="text-sm font-semibold text-[#C41E3A] flex items-center gap-2 hover:underline">
                    Follow on Instagram <iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">

<div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9662d93-79da-4a4b-90d6-77fa7b32c599_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-white font-medium">Festive Celebrations</p>
</div>
</div>

<div className="relative rounded-xl overflow-hidden group bg-stone-200">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fcadd23-cfe1-4a01-9b64-3ea4413f3bad_3840w.png?w=800&amp;q=80"/>
</div>

<div className="relative rounded-xl overflow-hidden group bg-stone-200">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e3885ab-fd7e-40fb-9fb6-e293d0e80ace_3840w.jpg?w=800&amp;q=80"/>
</div>

<div className="relative rounded-xl overflow-hidden group bg-stone-200">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db0fdc3a-3ff8-4356-b726-06ce21731486_3840w.jpg"/>
</div>

<div className="relative rounded-xl overflow-hidden group bg-stone-200">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e07c6bc1-bf10-4f87-a119-0e982d2580e6_3840w.jpg"/>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden text-stone-200 bg-[#8B4513] relative" id="contact">

<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C41E3A] via-[#D2B48C] to-[#FFFACD]"></div>
<div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-bold text-white tracking-tight mb-2">Get in Touch</h2>
<p className="text-stone-300 mb-8">Have a question or want to stock BRA's? Send us a message.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C41E3A] focus:bg-white/10 transition-colors" placeholder="First Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C41E3A] focus:bg-white/10 transition-colors" placeholder="Last Name" type="text"/>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C41E3A] focus:bg-white/10 transition-colors" placeholder="Email Address" type="email"/>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C41E3A] focus:bg-white/10 transition-colors resize-none" placeholder="Your Message" rows="4"></textarea>
<button className="bg-[#C41E3A] text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-[#C41E3A] transition-colors w-full sm:w-auto" type="button">
                        Send Message
                    </button>
</form>
</div>

<div className="flex flex-col justify-between">
<div className="space-y-8">
<div>
<h4 className="text-white font-semibold mb-4">Contact Info</h4>
<ul className="space-y-3 text-sm text-stone-300">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#D2B48C]" icon="lucide:map-pin"></iconify-icon>
<span>1130 Paterson Rd, North End<br/> Gqeberha, 6001</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#D2B48C]" icon="lucide:phone"></iconify-icon>
<span>041 484 44644</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#D2B48C]" icon="lucide:mail"></iconify-icon>
<span>sales@myurbanafrica.co.za</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-stone-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">PAIA Manual</a></li>
</ul>
</div>
</div>
<div className="flex gap-4 mt-8">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-colors text-white" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-colors text-white" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-colors text-white" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 bg-black/20">
<div className="max-w-[1200px] mx-auto px-6 py-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-500">© 2026 My Urban Africa. All rights reserved.</p>
<p className="text-xs text-stone-500 flex items-center gap-1">
<iconify-icon icon="lucide:alert-circle"></iconify-icon>
                    Not for Sale to Persons Under the Age of 18.
                </p>
</div>
</div>
</footer>


    </>
  );
}
