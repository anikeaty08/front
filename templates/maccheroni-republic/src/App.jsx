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



        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const scrollElements = document.querySelectorAll('.reveal');
            scrollElements.forEach(el => observer.observe(el));
            
            // Navbar Solid on Scroll
            const navbar = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if(window.scrollY > 50) {
                    navbar.classList.add('bg-[#2F3A2F]/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-white/10');
                } else {
                    navbar.classList.remove('bg-[#2F3A2F]/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-white/10');
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
      

<div className="relative w-full max-w-[1600px] bg-[#F8F5EF] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-white/50 flex flex-col">

<nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center animate-enter">
<div className="text-white font-serif text-xl md:text-2xl font-medium tracking-tight drop-shadow-md">
                Maccheroni Republic
            </div>

<div className="hidden md:flex items-center gap-8">
<a className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition drop-shadow-md" href="#">Menu</a>
<a className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition drop-shadow-md" href="#">Legacy</a>
<a className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition drop-shadow-md" href="#">Contact</a>
<a className="px-6 py-2.5 rounded-full bg-[#C65D3B] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#b05335] transition shadow-lg" href="#book">
                    Reservations
                </a>
</div>

<button className="md:hidden text-white drop-shadow-md">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="relative w-full h-[90vh] bg-[#2F3A2F] overflow-hidden shrink-0">

<div className="absolute inset-0 animate-enter duration-1000">
<img alt="Handmade Pasta" className="w-full h-full object-cover object-center opacity-80 scale-105" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent"></div>
</div>

<div className="relative w-full h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 pointer-events-none">
<div className="pointer-events-auto max-w-4xl">

<div className="flex flex-wrap items-center gap-3 mb-6 animate-enter delay-100">
<span className="px-4 py-1.5 border border-white/30 text-white backdrop-blur-md text-xs font-medium uppercase tracking-widest rounded-full">
                            Authentic Italian Dining
                        </span>
<span className="px-4 py-1.5 border border-white/30 text-white backdrop-blur-md text-xs font-medium uppercase tracking-widest rounded-full">
                            Downtown LA
                        </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight font-serif mb-6 leading-[1.1] drop-shadow-xl animate-enter delay-200">
                        Fresh Pasta,<br/>Handcrafted Daily
                    </h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10 animate-enter delay-300">
                        An authentic Italian osteria where fresh organic pasta is proudly handcrafted every day. Experience the passion of traditional pasta-making in the heart of Downtown LA.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-enter delay-500">
<a className="w-full sm:w-auto text-center bg-[#C65D3B] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#b05335] transition-colors group" href="#menu">
                            View Our Menu
                        </a>
<a className="w-full sm:w-auto text-center border border-white text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors" href="#book">
                            Book a Table
                        </a>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce delay-500">
<iconify-icon height="24" icon="solar:mouse-circle-linear" width="24"></iconify-icon>
</div>
</div>

<section className="bg-[#F8F5EF] w-full px-6 md:px-16 py-24 lg:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-5 relative rounded-[2rem] overflow-hidden reveal group">
<img alt="Chef preparing pasta" className="w-full h-full object-cover min-h-[500px] group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 border border-[#2F3A2F]/10 rounded-[2rem] pointer-events-none"></div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center reveal reveal-delay-200">
<span className="text-[#C65D3B] text-xs font-semibold uppercase tracking-widest mb-4 block">Our Legacy</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-[#1A1A1A] font-serif mb-8">
                        All-Inclusive<br/>Italian Osteria
                    </h2>
<div className="space-y-6 text-[#1A1A1A]/70 text-lg font-light leading-relaxed mb-12">
<p>
                            Maccheroni Republic is an all-inclusive dining place where you are always welcome. Located in the heart of Downtown Los Angeles, our authentic Italian osteria brings the traditions of Italy to every plate.
                        </p>
<p>
                            Every day, our passionate team handcrafts fresh pasta using the finest organic ingredients. The wind of passion meets the knowledge of expert pasta makers, creating dishes that honor centuries-old Italian traditions.
                        </p>
</div>

<div className="grid grid-cols-2 gap-8 border-t border-[#1A1A1A]/10 pt-8">
<div>
<span className="block text-3xl font-serif text-[#2F3A2F] mb-1">DAILY</span>
<span className="text-sm font-medium text-[#1A1A1A]/60">Fresh Handmade Pasta</span>
</div>
<div>
<span className="block text-3xl font-serif text-[#2F3A2F] mb-1">100%</span>
<span className="text-sm font-medium text-[#1A1A1A]/60">Organic Ingredients</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full px-6 md:px-16 py-24 lg:py-32 rounded-t-[3rem] -mt-8 relative z-10 border-t border-stone-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]" id="menu">
<div className="max-w-6xl mx-auto">

<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-[#C65D3B] text-xs font-semibold uppercase tracking-widest mb-4 block">Taste the Season</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-serif text-[#1A1A1A] mb-6">Seasonal Menu</h2>
<p className="text-[#1A1A1A]/60 text-lg font-light">
                        Our menu is updated monthly to reflect the freshest local ingredients. All pasta is handmade daily on-site.
                    </p>
</div>

<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 reveal reveal-delay-100">
<button className="px-6 py-2 rounded-full bg-[#2F3A2F] text-white text-sm font-medium transition">Antipasti</button>
<button className="px-6 py-2 rounded-full text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F8F5EF] text-sm font-medium transition">Fresh Pasta</button>
<button className="px-6 py-2 rounded-full text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F8F5EF] text-sm font-medium transition">Signature Dishes</button>
<button className="px-6 py-2 rounded-full text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F8F5EF] text-sm font-medium transition">Dolci</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-[#F8F5EF] p-8 rounded-[2rem] shadow-sm hover:-translate-y-1 transition duration-300 reveal reveal-delay-100">
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-xl font-medium text-[#1A1A1A]">Bruschetta Classica</h4>
<span className="text-[#C65D3B] font-semibold">$10</span>
</div>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                            Toasted bread with fresh tomatoes, garlic, and basil
                        </p>
</div>

<div className="bg-[#F8F5EF] p-8 rounded-[2rem] shadow-sm hover:-translate-y-1 transition duration-300 relative overflow-hidden reveal reveal-delay-200">
<div className="absolute top-0 right-0 bg-[#C65D3B] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl tracking-wider">Chef's Choice</div>
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-xl font-medium text-[#1A1A1A]">Burrata</h4>
<span className="text-[#C65D3B] font-semibold">$14</span>
</div>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                            Creamy burrata cheese with heirloom tomatoes, fresh basil, and extra virgin olive oil
                        </p>
</div>

<div className="bg-[#F8F5EF] p-8 rounded-[2rem] shadow-sm hover:-translate-y-1 transition duration-300 reveal reveal-delay-300">
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-xl font-medium text-[#1A1A1A]">Prosciutto e Melone</h4>
<span className="text-[#C65D3B] font-semibold">$12</span>
</div>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                            Italian prosciutto with fresh cantaloupe
                        </p>
</div>
</div>

<div className="text-center reveal reveal-delay-300">
<p className="text-xs text-[#1A1A1A]/50 italic mb-6">Please inform your server of any food allergies.</p>
<a className="inline-flex items-center justify-center gap-2 border border-[#2F3A2F] text-[#2F3A2F] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#2F3A2F] hover:text-white transition-colors" href="#">
                        Explore Full Menu
                    </a>
</div>
</div>
</section>

<section className="bg-[#F8F5EF] w-full px-6 md:px-16 py-12 lg:py-20">
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] reveal">
<div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden group relative shadow-md">
<img alt="Fresh Pasta" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>
<div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group relative shadow-md">
<img alt="Restaurant Interior" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>
<div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group relative shadow-md">
<img alt="Ingredients" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>
<div className="col-span-2 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group relative shadow-md">
<img alt="Diners" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>
</div>
</section>

<section className="bg-[#2F3A2F] w-full px-6 md:px-16 py-24 lg:py-32 text-[#F8F5EF] relative overflow-hidden" id="book">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/stucco.png\')'}}></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

<div className="flex flex-col justify-center reveal">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-serif mb-6 leading-[1.1]">
                        Book Your Experience
                    </h2>
<p className="text-white/70 text-lg font-light mb-12 max-w-md leading-relaxed">
                        For parties larger than 8 people, please contact us directly via phone. We recommend booking at least 48 hours in advance for weekend dining.
                    </p>
<div className="bg-white/5 rounded-[2rem] p-8 border border-white/10 backdrop-blur-sm max-w-sm">
<div className="flex items-center gap-4 mb-6 text-white/90">
<iconify-icon className="text-[#C65D3B]" height="28" icon="solar:clock-circle-linear" width="28"></iconify-icon>
<h3 className="text-xl font-medium font-serif">Opening Hours</h3>
</div>
<ul className="space-y-4 text-sm font-light text-white/70">
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Tuesday - Sunday</span>
<span>5:00 PM - 11:00 PM</span>
</li>
<li className="flex justify-between pb-1">
<span>Monday</span>
<span className="text-[#C65D3B] font-medium">Closed</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#F8F5EF] text-[#1A1A1A] rounded-[2.5rem] p-8 md:p-12 shadow-2xl reveal reveal-delay-200">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Full Name</label>
<input className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#C65D3B] transition text-[#1A1A1A] placeholder:text-[#1A1A1A]/30" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Email</label>
<input className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#C65D3B] transition text-[#1A1A1A] placeholder:text-[#1A1A1A]/30" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Date</label>
<input className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#C65D3B] transition text-[#1A1A1A]" type="date"/>
</div>
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Time</label>
<input className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#C65D3B] transition text-[#1A1A1A]" type="time"/>
</div>
</div>
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Guests</label>
<select className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#C65D3B] transition text-[#1A1A1A] cursor-pointer">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5 People</option>
<option>6 People</option>
<option>7 People</option>
<option>8 People</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-[#1A1A1A]/40 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full mt-8 bg-[#C65D3B] text-white py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#b05335] transition shadow-lg shadow-[#C65D3B]/20" type="button">
                            Confirm Reservation
                        </button>
</form>
</div>
</div>
</section>

<section className="bg-[#F8F5EF] w-full px-6 md:px-16 py-24 relative overflow-hidden text-center">
<div className="max-w-4xl mx-auto reveal">
<span className="text-[#C65D3B] text-xs font-semibold uppercase tracking-widest mb-4 block">Testimonials</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight font-serif text-[#1A1A1A] mb-8">
                    What Our Guests Say
                </h2>
<div className="flex items-center justify-center gap-3 mb-12">
<div className="flex text-[#C65D3B]">
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-half-circle-bold" width="24"></iconify-icon>
</div>
<span className="text-xl font-medium font-serif text-[#1A1A1A]">4.6/5</span>
<span className="text-sm text-[#1A1A1A]/50 font-light border-l border-[#1A1A1A]/20 pl-3">Based on 3,037+ Google reviews</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#1A1A1A]/5">
<p className="font-serif text-lg text-[#1A1A1A]/80 italic mb-6">"Handmade pasta for a decent price... outstanding quality! The atmosphere takes you right to Italy."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#2F3A2F] text-white flex items-center justify-center font-serif">S</div>
<span className="font-medium text-sm text-[#1A1A1A]">Sarah M.</span>
</div>
</div>
<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#1A1A1A]/5">
<p className="font-serif text-lg text-[#1A1A1A]/80 italic mb-6">"Beef lasagna was perfect portion and incredibly fresh. Highly recommend booking in advance."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#C65D3B] text-white flex items-center justify-center font-serif">M</div>
<span className="font-medium text-sm text-[#1A1A1A]">Michael R.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full px-6 md:px-16 py-20 border-t border-[#1A1A1A]/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto reveal">

<div className="space-y-8">
<div>
<h3 className="text-3xl font-medium font-serif mb-6 text-[#1A1A1A]">Visit Us</h3>
<p className="text-[#1A1A1A]/70 text-lg font-light leading-relaxed mb-6">
                            332 S Broadway<br/>
                            Los Angeles, CA 90013<br/>
                            United States
                        </p>
<div className="space-y-4">
<a className="flex items-center gap-3 text-[#1A1A1A]/80 hover:text-[#C65D3B] transition" href="tel:2133469725">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
<span>(213) 346-9725</span>
</a>
<a className="flex items-center gap-3 text-[#1A1A1A]/80 hover:text-[#C65D3B] transition" href="#">
<iconify-icon height="20" icon="solar:global-linear" width="20"></iconify-icon>
<span>maccheronirepublic.com</span>
</a>
</div>
</div>
<div className="pt-8 border-t border-[#1A1A1A]/10">
<span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/50 block mb-4">Follow Us</span>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#F8F5EF] flex items-center justify-center text-[#1A1A1A] hover:bg-[#C65D3B] hover:text-white transition" href="#">
<iconify-icon height="20" icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#F8F5EF] flex items-center justify-center text-[#1A1A1A] hover:bg-[#C65D3B] hover:text-white transition" href="#">
<iconify-icon height="20" icon="ri:facebook-fill" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="h-full min-h-[350px] w-full rounded-[2rem] overflow-hidden shadow-sm border border-[#1A1A1A]/10 relative group bg-[#F8F5EF]">

<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0 filter grayscale opacity-90 group-hover:grayscale-0 transition duration-700" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.744415891392!2d-118.25141522361642!3d34.05041931780447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64bdf6804a1%3A0xcf82c8160c5c4f22!2s332%20S%20Broadway%2C%20Los%20Angeles%2C%20CA%2090013%2C%20USA!5e0!3m2!1sen!2srs!4v1700000000000!5m2!1sen!2srs"></iframe>
</div>
</div>
</section>

<footer className="bg-[#F8F5EF] px-6 md:px-16 py-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-[#1A1A1A] font-serif font-medium text-lg">Maccheroni Republic</p>
<p className="text-[#1A1A1A]/50 text-xs mt-1">© 2026 Maccheroni Republic. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-[#1A1A1A]/60 hover:text-[#C65D3B] text-xs font-medium transition" href="#">About</a>
<a className="text-[#1A1A1A]/60 hover:text-[#C65D3B] text-xs font-medium transition" href="#">Menu</a>
<a className="text-[#1A1A1A]/60 hover:text-[#C65D3B] text-xs font-medium transition" href="#">Gallery</a>
<a className="text-[#1A1A1A]/60 hover:text-[#C65D3B] text-xs font-medium transition" href="#">Privacy</a>
<a className="text-[#1A1A1A]/60 hover:text-[#C65D3B] text-xs font-medium transition" href="#">Terms</a>
</div>
</footer>

<div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50">
<a className="flex items-center justify-center gap-2 w-full bg-[#C65D3B] text-white py-4 rounded-full text-xs font-semibold uppercase tracking-widest shadow-xl shadow-[#C65D3B]/30 border border-white/20" href="#book">
                Book Table
            </a>
</div>
</div>


    </>
  );
}
