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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle Logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = menuBtn.querySelector('i');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon between menu and x
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.setAttribute('data-lucide', 'menu');
            } else {
                menuIcon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons(); // re-initialize to swap icon
        });

        // Close mobile menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 z-50" href="#">
<img alt="The Lost Yeti Logo" className="h-10 md:h-12 w-auto object-contain brightness-110" src="https://i.postimg.cc/qRbXzzWf/LOST-YETI-ORANGE.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-lg font-normal text-zinc-300 hover:text-[#C65A1E] transition-colors" href="#menu">Menu</a>
<a className="text-lg font-normal text-zinc-300 hover:text-[#C65A1E] transition-colors" href="#lunch">Lunch</a>
<a className="text-lg font-normal text-zinc-300 hover:text-[#C65A1E] transition-colors" href="#events">Private Events</a>
<a className="text-lg font-normal text-zinc-300 hover:text-[#C65A1E] transition-colors" href="#vouchers">Gift Vouchers</a>
<a className="inline-flex items-center justify-center bg-[#C65A1E] hover:bg-[#a84c19] text-white px-6 py-2.5 rounded-lg text-lg font-medium transition-all shadow-lg shadow-[#C65A1E]/20" href="#book">
                    Book a Table
                </a>
</div>

<button className="lg:hidden p-2 text-zinc-300 hover:text-white z-50" id="menu-btn">
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden absolute top-0 left-0 w-full h-screen bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 pt-24 px-6 flex flex-col gap-6" id="mobile-menu">
<a className="text-2xl [font-family:'Forum',serif] tracking-tight text-zinc-300 hover:text-[#C65A1E]" href="#menu">Menu</a>
<a className="text-2xl [font-family:'Forum',serif] tracking-tight text-zinc-300 hover:text-[#C65A1E]" href="#lunch">Lunch</a>
<a className="text-2xl [font-family:'Forum',serif] tracking-tight text-zinc-300 hover:text-[#C65A1E]" href="#events">Private Events</a>
<a className="text-2xl [font-family:'Forum',serif] tracking-tight text-zinc-300 hover:text-[#C65A1E]" href="#vouchers">Gift Vouchers</a>
<a className="mt-4 inline-flex items-center justify-center bg-[#C65A1E] text-white px-6 py-4 rounded-xl text-lg font-medium w-full text-center" href="#book">
                Book a Table
            </a>
</div>
</nav>

<header className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Restaurant Atmosphere" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-zinc-950/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start pt-12">
<h1 className="[font-family:'Forum',serif] text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4 font-medium max-w-4xl leading-[1.1]">
                The Lost Yeti
            </h1>
<p className="[font-family:'Forum',serif] text-3xl md:text-4xl tracking-tight text-[#C65A1E] mb-6 font-medium">
                Good Food. Good Nights.
            </p>
<p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mb-10 font-normal leading-relaxed">
                A vibrant restaurant and bar in Guernsey serving creative dishes, sushi, cocktails, and unforgettable dining experiences.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C65A1E] hover:bg-[#a84c19] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-lg shadow-[#C65A1E]/20" href="#book">
                    Book a Table
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all" href="#menu">
                    View Menu
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:text-[#C65A1E] text-zinc-300 px-8 py-4 rounded-xl text-lg font-medium transition-all group" href="#vouchers">
                    Gift Vouchers
                    <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-zinc-950 relative border-b border-zinc-900/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="[font-family:'Forum',serif] text-4xl md:text-5xl tracking-tight text-white mb-8 font-medium">
                A Social Dining Experience
            </h2>
<p className="text-xl md:text-2xl text-zinc-400 font-normal leading-relaxed">
                The Lost Yeti is a vibrant restaurant and bar where bold flavours, creative dishes and great drinks come together. Join us for lunch, dinner or cocktails in a lively, modern setting designed for good food and good nights.
            </p>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="[font-family:'Forum',serif] text-4xl md:text-5xl tracking-tight text-white mb-4 font-medium">
                        Signature Dishes
                    </h2>
<p className="text-xl text-zinc-400 font-normal">Bold flavours designed to be shared.</p>
</div>
<a className="inline-flex items-center gap-2 text-lg text-[#C65A1E] hover:text-[#a84c19] transition-colors font-medium group" href="#">
                    View Full Menu
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
<img alt="Tuna Taco" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="[font-family:'Forum',serif] text-2xl tracking-tight text-zinc-100 font-medium group-hover:text-[#C65A1E] transition-colors">Tuna Taco</h3>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
<img alt="Burrata Momo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="[font-family:'Forum',serif] text-2xl tracking-tight text-zinc-100 font-medium group-hover:text-[#C65A1E] transition-colors">Burrata Momo</h3>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
<img alt="Shadow Claw Roll" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="[font-family:'Forum',serif] text-2xl tracking-tight text-zinc-100 font-medium group-hover:text-[#C65A1E] transition-colors">Shadow Claw Roll</h3>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
<img alt="Pan Seared Salmon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="[font-family:'Forum',serif] text-2xl tracking-tight text-zinc-100 font-medium group-hover:text-[#C65A1E] transition-colors">Pan Seared Salmon</h3>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
<img alt="Grilled Chicken" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="[font-family:'Forum',serif] text-2xl tracking-tight text-zinc-100 font-medium group-hover:text-[#C65A1E] transition-colors">Grilled Chicken</h3>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
<img alt="Key Lime Cheesecake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="[font-family:'Forum',serif] text-2xl tracking-tight text-zinc-100 font-medium group-hover:text-[#C65A1E] transition-colors">Key Lime Cheesecake</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/40 border-y border-zinc-900" id="lunch">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-zinc-800 relative shadow-2xl">
<img alt="Lunch Dining" className="w-full aspect-square lg:aspect-[4/5] object-cover opacity-90" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 to-transparent"></div>
</div>
<div className="w-full lg:w-1/2 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-[#C65A1E] text-base mb-6 font-medium">
<i className="w-4 h-4" data-lucide="sun" strokeWidth="1.5"></i>
                    Midday Dining
                </div>
<h2 className="[font-family:'Forum',serif] text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6 font-medium">
                    Lunch in Town
                </h2>
<p className="text-xl text-zinc-400 mb-8 leading-relaxed font-normal">
                    Fast, fresh lunches designed for busy days in town. Whether you're catching up with colleagues or taking a break from the office, it's perfect for a quick dine-in or takeaway.
                </p>
<div className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl mb-10 w-full max-w-md">
<div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
<i className="w-6 h-6 text-[#C65A1E]" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-lg text-white font-medium">Monday – Friday</p>
<p className="text-lg text-zinc-400">12:00 – 14:30</p>
</div>
</div>
<a className="inline-flex items-center justify-center border border-[#C65A1E] hover:bg-[#C65A1E] text-[#C65A1E] hover:text-white px-8 py-4 rounded-xl text-lg font-medium transition-all group" href="#menu">
                    View Lunch Menu
                </a>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 bg-zinc-950 overflow-hidden">
<div className="absolute inset-0">
<img alt="Cocktail Bar Atmosphere" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-[#C65A1E] text-base mb-6 font-medium">
<i className="w-4 h-4" data-lucide="moon" strokeWidth="1.5"></i>
                Nightlife
            </div>
<h2 className="[font-family:'Forum',serif] text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6 font-medium">
                After Work &amp; Evening Dining
            </h2>
<p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed font-normal">
                Bar open from 5pm. Join us for expertly crafted cocktails, fresh sushi, bold small plates and an unforgettable dinner in a vibrant social atmosphere.
            </p>
<a className="inline-flex items-center justify-center bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-4 rounded-xl text-lg font-medium transition-all" href="#book">
                Reserve a Spot
            </a>
</div>
</section>

<section className="py-24 bg-zinc-950 relative border-t border-zinc-900/50">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-10 md:p-14 rounded-2xl flex flex-col items-start group hover:border-zinc-700 transition-colors" id="events">
<div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-8 group-hover:border-[#C65A1E]/50 transition-colors">
<i className="w-8 h-8 text-[#C65A1E]" data-lucide="party-popper" strokeWidth="1.5"></i>
</div>
<h3 className="[font-family:'Forum',serif] text-3xl md:text-4xl tracking-tight text-white mb-4 font-medium">
                    Private Events &amp; Group Dining
                </h3>
<p className="text-xl text-zinc-400 mb-10 leading-relaxed flex-grow font-normal">
                    Celebrate at The Lost Yeti. With tailored menus and a vibrant atmosphere, it's perfect for birthdays, corporate events, office parties and large group dining.
                </p>
<a className="inline-flex items-center justify-center bg-zinc-100 hover:bg-white text-zinc-950 px-8 py-4 rounded-xl text-lg font-medium transition-all w-full sm:w-auto" href="#contact">
                    Enquire About Events
                </a>
</div>

<div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-10 md:p-14 rounded-2xl flex flex-col items-start group hover:border-zinc-700 transition-colors" id="vouchers">
<div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 mb-8 group-hover:border-[#C65A1E]/50 transition-colors">
<i className="w-8 h-8 text-[#C65A1E]" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<h3 className="[font-family:'Forum',serif] text-3xl md:text-4xl tracking-tight text-white mb-4 font-medium">
                    Gift Vouchers
                </h3>
<p className="text-xl text-zinc-400 mb-10 leading-relaxed flex-grow font-normal">
                    Give the gift of great food and good nights. A dining experience at The Lost Yeti is perfect for birthdays, celebrations, and those special occasions.
                </p>
<a className="inline-flex items-center justify-center bg-[#C65A1E] hover:bg-[#a84c19] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all w-full sm:w-auto shadow-lg shadow-[#C65A1E]/10" href="#">
                    Buy Gift Voucher
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-900/30 border-t border-zinc-900" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

<div className="flex flex-col justify-center">
<h2 className="[font-family:'Forum',serif] text-4xl md:text-5xl tracking-tight text-white mb-10 font-medium">
                        Find Us
                    </h2>
<div className="space-y-8">

<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-6 h-6 text-[#C65A1E]" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg text-white font-medium mb-1">Location</h4>
<p className="text-lg text-zinc-400">
                                    The Lost Yeti<br/>
                                    St Peter Port, Guernsey<br/>
                                    GY1 2LQ
                                </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-6 h-6 text-[#C65A1E]" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg text-white font-medium mb-1">Contact</h4>
<p className="text-lg text-zinc-400 mb-1">+44 (0) 1481 123456</p>
<a className="text-lg text-zinc-400 hover:text-[#C65A1E] transition-colors" href="mailto:hello@thelostyeti.gg">hello@thelostyeti.gg</a>
</div>
</div>
<hr className="border-zinc-800 my-4"/>

<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-6 h-6 text-[#C65A1E]" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div className="w-full">
<h4 className="text-lg text-white font-medium mb-4">Opening Hours</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
<p className="text-base text-[#C65A1E] font-medium mb-1 uppercase tracking-wider">Lunch</p>
<p className="text-lg text-white">Mon – Fri</p>
<p className="text-lg text-zinc-400">12:00 – 14:30</p>
</div>
<div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
<p className="text-base text-[#C65A1E] font-medium mb-1 uppercase tracking-wider">Bar &amp; Dinner</p>
<p className="text-lg text-white">Mon – Sat</p>
<p className="text-lg text-zinc-400">From 5:00 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full aspect-square lg:aspect-auto rounded-2xl overflow-hidden border border-zinc-800 relative bg-zinc-900 group">
<img alt="Map Location" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-950/20 mix-blend-multiply"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-12 h-12 bg-[#C65A1E] rounded-full flex items-center justify-center shadow-xl shadow-[#C65A1E]/30 animate-bounce">
<i className="w-6 h-6 text-white" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="w-4 h-1 bg-black/40 rounded-full mt-1 blur-[1px]"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<img alt="The Lost Yeti" className="h-12 w-auto object-contain brightness-110 mb-4" src="https://i.postimg.cc/qRbXzzWf/LOST-YETI-ORANGE.png"/>
<p className="[font-family:'Forum',serif] text-2xl tracking-tight text-zinc-400 font-medium">Good Food. Good Nights.</p>
</div>

<div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 max-w-2xl">
<a className="text-lg text-zinc-400 hover:text-[#C65A1E] transition-colors" href="#">Home</a>
<a className="text-lg text-zinc-400 hover:text-[#C65A1E] transition-colors" href="#menu">Menu</a>
<a className="text-lg text-zinc-400 hover:text-[#C65A1E] transition-colors" href="#lunch">Lunch</a>
<a className="text-lg text-zinc-400 hover:text-[#C65A1E] transition-colors" href="#book">Book a Table</a>
<a className="text-lg text-zinc-400 hover:text-[#C65A1E] transition-colors" href="#vouchers">Gift Vouchers</a>
<a className="text-lg text-zinc-400 hover:text-[#C65A1E] transition-colors" href="#events">Private Events</a>
<a className="text-lg text-zinc-400 hover:text-[#C65A1E] transition-colors" href="#">About</a>
<a className="text-lg text-zinc-400 hover:text-[#C65A1E] transition-colors" href="#contact">Contact</a>
</div>
</div>
<hr className="border-zinc-900 mb-8"/>
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-base text-zinc-500 text-center md:text-left">
                    © 2024 The Lost Yeti – Restaurant &amp; Bar. All rights reserved.
                </p>

<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-[#C65A1E] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-[#C65A1E] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
