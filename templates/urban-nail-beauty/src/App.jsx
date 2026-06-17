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
nude: {
50: '#FDFCFB',
100: '#FAF5F2', // Main BG
200: '#F4EAE6', // Card BG
300: '#E8D5CD',
},
burgundy: {
800: '#4A1D2F', // Primary Text
900: '#2A0F1A', // Darker Text
},
accent: {
500: '#9D3456', // Button/Highlight
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
        });

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) { 
                nav.classList.add('shadow-sm'); 
                nav.classList.replace('bg-nude-100/80', 'bg-nude-100/85'); 
            } else { 
                nav.classList.remove('shadow-sm'); 
                nav.classList.replace('bg-nude-100/95', 'bg-nude-100/85'); 
            }
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
      

<div className="border-burgundy-800/10 bg-nude-200 w-full border-b pt-2 pr-6 pb-2 pl-6">
<div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs tracking-wide uppercase font-medium opacity-70">
<span>Mon - Sun: 9AM - 9PM</span>
<div className="flex gap-6">
<span className="">0481779858</span>
<span className="">Chipping Norton NSW 2170</span>
</div>
</div>
</div>

<nav className="sticky bg-nude-100/80 transition-all duration-300 w-full z-50 border-transparent border-b pt-6 pr-6 pb-6 pl-6 top-0 backdrop-blur-sm" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2">

<span className="font-serif text-xl font-medium tracking-tight">Urban Nail &amp; Beauty</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-accent-500 transition-colors" href="#about">About</a>
<a className="hover:text-accent-500 transition-colors" href="#services">Services</a>
<a className="hover:text-accent-500 transition-colors" href="#team">Team</a>
<a className="hover:text-accent-500 transition-colors" href="#faq">FAQ</a>
</div>
<button className="bg-accent-500 hover:bg-burgundy-800 text-white text-xs font-medium uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
                Book Now <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>

<header className="overflow-hidden pt-12 pr-6 pb-24 pl-6 relative">
<div className="text-center max-w-7xl mr-auto mb-16 ml-auto">
<h1 className="reveal-element font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
                Ready for nails<br/>
                that feel <span className="italic font-light text-accent-500">like you?</span>
</h1>
<p className="reveal-element delay-100 max-w-md mx-auto text-base text-burgundy-800/70 mb-8 leading-relaxed">
                Custom nail designs that reflect your mood, style, and everyday energy. Experience the art of mindful beauty.
            </p>
<div className="reveal-element delay-200">
<button className="bg-burgundy-800 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-accent-500 transition-colors duration-300 flex items-center gap-2 mx-auto">
                    Start Your Journey <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 max-w-5xl mr-auto ml-auto pr-4 pl-4 gap-x-6 gap-y-6">
<div className="reveal-element delay-100 group relative">
<div className="aspect-[1/2] overflow-hidden rounded-t-[200px] rounded-b-[100px]">
<img alt="Manicure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="reveal-element delay-200 group relative md:mt-12">
<div className="aspect-[1/2] overflow-hidden rounded-t-[200px] rounded-b-[100px]">
<img alt="Nail Art" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://assets.vogue.com/photos/691f357cc27b47cad254eb6d/master/w_1600%2Cc_limit/SaveClip.App_579687142_18379744144178067_1109136112459296107_n.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="reveal-element delay-300 group relative">
<div className="aspect-[1/2] overflow-hidden rounded-t-[200px] rounded-b-[100px]">
<img alt="Details" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="absolute top-10 left-1/2 -translate-x-1/2 flex justify-center w-full opacity-20 pointer-events-none">
<svg className="lucide lucide-crown w-12 h-12 text-accent-500" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<div className="text-center mb-16 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">The foundation</h2>
<p className="font-serif text-3xl md:text-4xl italic text-accent-500">of great nails</p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-element delay-100 bg-nude-200/50 p-10 rounded-2xl text-center hover:bg-nude-200 transition-colors duration-300 cursor-pointer group">
<div className="bg-white/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-sparkle w-5 h-5 text-burgundy-800 stroke-[1.5]" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<h3 className="font-serif text-xl font-medium mb-2">Manicures</h3>
<p className="text-xs uppercase tracking-widest text-burgundy-800/60">8 Services</p>
</div>

<div className="reveal-element delay-200 bg-nude-200/50 p-10 rounded-2xl text-center hover:bg-nude-200 transition-colors duration-300 cursor-pointer group">
<div className="bg-white/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-flower-2 w-5 h-5 text-burgundy-800 stroke-[1.5]" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
</div>
<h3 className="font-serif text-xl font-medium mb-2">Pedicures</h3>
<p className="text-xs uppercase tracking-widest text-burgundy-800/60">4 Services</p>
</div>

<div className="reveal-element delay-300 bg-nude-200/50 p-10 rounded-2xl text-center hover:bg-nude-200 transition-colors duration-300 cursor-pointer group">
<div className="bg-white/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-droplet w-5 h-5 text-burgundy-800 stroke-[1.5]" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<h3 className="font-serif text-xl font-medium mb-2">Gel Nails</h3>
<p className="text-xs uppercase tracking-widest text-burgundy-800/60">6 Services</p>
</div>
</div>
<p className="text-center text-sm text-burgundy-800/60 mt-12 max-w-md mx-auto reveal-element">
            Our most-loved treatments, crafted to refresh, relax, and leave you polished to perfection.
        </p>
</section>

<section className="py-24 px-6 bg-nude-200/30" id="about">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 reveal-element">
<span className="text-xs uppercase tracking-widest opacity-60 mb-2 block">About Us</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-1">Rooted in calm.</h2>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight italic text-accent-500">Built on detail</h2>
</div>

<div className="flex justify-center gap-8 md:gap-24 mb-16 text-center reveal-element delay-100">
<div>
<div className="flex items-center justify-center gap-2 font-serif text-2xl md:text-3xl text-accent-500">
<svg className="lucide lucide-star w-5 h-5 fill-accent-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.98
                    </div>
<span className="text-xs font-medium uppercase tracking-wide opacity-60 mt-1 block">Average Rating</span>
</div>
<div>
<div className="flex items-center justify-center gap-2 font-serif text-2xl md:text-3xl text-accent-500">
<svg className="lucide lucide-award w-5 h-5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg> 12+
                    </div>
<span className="text-xs font-medium uppercase tracking-wide opacity-60 mt-1 block">Years Expertise</span>
</div>
<div>
<div className="flex items-center justify-center gap-2 font-serif text-2xl md:text-3xl text-accent-500">
<svg className="lucide lucide-repeat w-5 h-5" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg> 98%
                    </div>
<span className="text-xs font-medium uppercase tracking-wide opacity-60 mt-1 block">Rebook Rate</span>
</div>
</div>

<div className="relative max-w-5xl mx-auto reveal-element delay-200">
<div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden">
<img alt="Calm Salon Environment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-[-40px] md:bottom-[-60px] left-1/2 -translate-x-1/2 bg-nude-100/95 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-xl max-w-sm md:max-w-md w-[90%] text-center border border-burgundy-800/5">
<p className="font-serif text-lg md:text-xl italic leading-relaxed mb-6">
                        "Urban is where calm meets style. Clean sets, custom art, zero drama. Just good nails, done right."
                    </p>
<div className="flex items-center justify-center gap-3">
<img alt="Founder" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-xs font-semibold text-burgundy-800">Sarah Jenkins</p>
<p className="text-[10px] uppercase tracking-wide opacity-60">Founder of Urban</p>
</div>
</div>
</div>
</div>
</div>
<div className="h-24"></div> 
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-element">
<div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Services that</h2>
<p className="font-serif text-4xl md:text-5xl italic text-accent-500">speak your style</p>
</div>
<div className="mt-4 md:mt-0 text-right">
<p className="text-xs max-w-[200px] ml-auto text-burgundy-800/60 mb-4">Style that fits your schedule, your energy, and your aesthetic.</p>
<button className="bg-nude-200 hover:bg-nude-300 text-[10px] uppercase font-semibold tracking-wider px-4 py-2 rounded-lg transition-colors">
                        Full Menu
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

<div className="reveal-element delay-100">
<div className="flex items-center gap-2 mb-6 opacity-60">
<svg className="lucide lucide-circle-dashed w-3 h-3" data-lucide="circle-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path></svg>
<span className="text-xs uppercase tracking-widest font-medium">Manicures</span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Classic Manicure</span>
<span className="text-lg italic font-serif text-accent-500">$25</span>
</li>
<li className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Russian Manicure</span>
<span className="text-lg italic font-serif text-accent-500">$65</span>
</li>
<li className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Express Manicure</span>
<span className="text-lg italic font-serif text-accent-500">$20</span>
</li>
<li className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Natural Manicure</span>
<span className="text-lg italic font-serif text-accent-500">$30</span>
</li>
</ul>
</div>

<div className="reveal-element delay-200">
<div className="flex items-center gap-2 mb-6 opacity-60">
<svg className="lucide lucide-sun w-3 h-3" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-xs uppercase tracking-widest font-medium">Pedicures</span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Classic Pedicure</span>
<span className="text-lg italic font-serif text-accent-500">$35</span>
</li>
<li className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Spa Pedicure</span>
<span className="text-lg italic font-serif text-accent-500">$70</span>
</li>
<li className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Silk Soles</span>
<span className="text-lg italic font-serif text-accent-500">$60</span>
</li>
<li className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Deluxe Pedicure</span>
<span className="text-lg italic font-serif text-accent-500">$80</span>
</li>
</ul>
</div>

<div className="md:col-span-2 reveal-element delay-300">
<div className="flex items-center gap-2 mb-6 opacity-60 mt-4">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs uppercase tracking-widest font-medium">Gel Nails</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
<div className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Gel Manicure</span>
<span className="text-lg italic font-serif text-accent-500">$40</span>
</div>
<div className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Gel Overlay</span>
<span className="text-lg italic font-serif text-accent-500">$55</span>
</div>
<div className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">Gel Pedicure</span>
<span className="text-lg italic font-serif text-accent-500">$55</span>
</div>
<div className="flex justify-between items-baseline border-b border-burgundy-800/10 pb-2">
<span className="text-lg font-serif">BIAB / Builder Gel</span>
<span className="text-lg italic font-serif text-accent-500">$75</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-nude-200/20">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-element">
<div className="flex justify-center gap-4 mb-4">
<svg className="lucide lucide-message-circle w-6 h-6 text-accent-500" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<svg className="lucide lucide-thumbs-up w-6 h-6 text-accent-500 -mt-2" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<svg className="lucide lucide-music w-6 h-6 text-accent-500" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight">Why they keep <span className="italic text-accent-500 block md:inline">coming back</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flex flex-col gap-6 reveal-element delay-100">
<div className="bg-nude-200/50 p-8 rounded-2xl">
<svg className="lucide lucide-quote w-6 h-6 text-accent-500/40 mb-4 rotate-180" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-xl mb-4">It's rare to find a salon that feels this calm – and leaves your nails looking this good.</p>
<p className="text-xs uppercase tracking-wider opacity-60">Jasmine L.</p>
</div>
<div className="h-64 rounded-2xl overflow-hidden">
<img alt="Customer hands" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="flex flex-col gap-6 reveal-element delay-200">
<div className="bg-nude-200/50 p-8 rounded-2xl">
<svg className="lucide lucide-quote w-6 h-6 text-accent-500/40 mb-4 rotate-180" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-xl mb-4">From natural sets to bold, custom nail art, they just get it. Urban makes me feel seen, styled, and completely at ease.</p>
<p className="text-xs uppercase tracking-wider opacity-60">Rachel T.</p>
</div>
<div className="h-64 rounded-2xl overflow-hidden">
<img alt="Customer hands" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
<div className="text-center mt-12 reveal-element">
<button className="bg-nude-200 hover:bg-nude-300 px-6 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors">View All Stories</button>
</div>
</div>
</section>

<section className="relative h-[700px] flex items-center justify-center overflow-hidden my-24 group">
<div className="absolute inset-0 z-0">
<img alt="Dark moody nail art" className="w-full h-full object-cover brightness-[0.4]" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center text-white px-6 w-full max-w-4xl">
<span className="text-xs uppercase tracking-[0.2em] mb-4 block reveal-element">Special Offer</span>
<h2 className="font-serif text-5xl md:text-7xl mb-4 tracking-tight reveal-element delay-100">Chic nails,<span className="italic font-light">special price</span></h2>
<p className="text-white/80 mb-8 max-w-lg mx-auto reveal-element delay-200">Treat yourself to 15% off your next appointment when you book a bundle.</p>
<button className="bg-white text-burgundy-900 px-8 py-3 rounded-full font-medium hover:bg-nude-200 transition-colors mb-16 reveal-element delay-300">
                Book Now
            </button>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-burgundy-900 mt-8">
<div className="bg-nude-100 p-8 rounded-lg reveal-element delay-100 hover:-translate-y-2 transition-transform duration-300">
<svg className="lucide lucide-star w-5 h-5 mx-auto mb-4 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<h3 className="font-serif text-lg mb-1">Curated</h3>
<p className="text-[10px] uppercase opacity-60">Selected to match you</p>
</div>
<div className="bg-nude-100 p-8 rounded-lg reveal-element delay-200 hover:-translate-y-2 transition-transform duration-300">
<svg className="lucide lucide-sun w-5 h-5 mx-auto mb-4 stroke-[1.5]" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<h3 className="font-serif text-lg mb-1">Polished</h3>
<p className="text-[10px] uppercase opacity-60">Flawless finish, always</p>
</div>
<div className="bg-nude-100 p-8 rounded-lg reveal-element delay-300 hover:-translate-y-2 transition-transform duration-300">
<svg className="lucide lucide-heart w-5 h-5 mx-auto mb-4 stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<h3 className="font-serif text-lg mb-1">Trusted</h3>
<p className="text-[10px] uppercase opacity-60">Loved by loyal clients</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="team">
<div className="text-center mb-16 reveal-element">
<span className="text-xs uppercase tracking-widest opacity-60 mb-2 block">The Team</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-1">Crafted by</h2>
<p className="font-serif text-4xl md:text-5xl italic text-accent-500">calm hands</p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center group reveal-element delay-100">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-nude-200">
<img alt="Team member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl">Lina Markovic</h3>
<p className="text-xs uppercase tracking-wider opacity-60 mt-1">Founder &amp; Nail Artist</p>
</div>
<div className="text-center group reveal-element delay-200">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-nude-200">
<img alt="Team member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl">Amira Clark</h3>
<p className="text-xs uppercase tracking-wider opacity-60 mt-1">Nail Art Specialist</p>
</div>
<div className="text-center group reveal-element delay-300">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-nude-200">
<img alt="Team member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl">Sofia Davis</h3>
<p className="text-xs uppercase tracking-wider opacity-60 mt-1">Gel &amp; BIAB Expert</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-nude-200/30" id="faq">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Everything you</h2>
<p className="font-serif text-4xl md:text-5xl italic text-accent-500 mb-8">might wonder</p>
<button className="bg-nude-200 hover:bg-nude-300 text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-colors flex items-center gap-2">
                    Full FAQ <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="md:col-span-8 space-y-4">
<details className="group bg-nude-100 rounded-lg open:bg-white transition-colors duration-300 reveal-element delay-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>How do I book an appointment?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-burgundy-800/70 p-6 pt-0 text-sm leading-relaxed">
                        Booking is simple via our online portal. Select your service, choose your preferred stylist, and pick a time that works for you. A deposit is required to secure your slot.
                    </div>
</details>
<details className="group bg-nude-100 rounded-lg open:bg-white transition-colors duration-300 reveal-element delay-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Do you accept walk-ins?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-burgundy-800/70 p-6 pt-0 text-sm leading-relaxed">
                        We primarily operate by appointment to ensure every client gets our full attention. Walk-ins are accommodated subject to availability, but we highly recommend booking ahead.
                    </div>
</details>
<details className="group bg-nude-100 rounded-lg open:bg-white transition-colors duration-300 reveal-element delay-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>What products do you use?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-burgundy-800/70 p-6 pt-0 text-sm leading-relaxed">
                        We use only high-quality, non-toxic, and cruelty-free polishes and gels. Brands include The Gel Bottle, OPI Infinite Shine, and our own custom care oils.
                    </div>
</details>
<details className="group bg-nude-100 rounded-lg open:bg-white transition-colors duration-300 reveal-element delay-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Can I bring my own nail design?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-burgundy-800/70 p-6 pt-0 text-sm leading-relaxed">
                        Absolutely! We love creative challenges. Please upload your inspiration photo when booking so we can allocate the correct amount of time for complex art.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-2xl mx-auto text-center mb-12 reveal-element">
<div className="flex justify-center gap-6 mb-4 text-accent-500 opacity-60">
<svg className="lucide lucide-mail w-6 h-6 -rotate-12" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<svg className="lucide lucide-crown w-8 h-8 -mt-4" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<svg className="lucide lucide-sparkles w-6 h-6 rotate-12" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Reach out,</h2>
<p className="font-serif text-4xl md:text-5xl italic text-accent-500">stay polished</p>
</div>
<div className="max-w-xl mx-auto bg-nude-200/50 p-8 md:p-12 rounded-2xl reveal-element delay-100">
<h3 className="font-serif text-xl mb-6">Get in touch</h3>
<form className="space-y-4">
<div>
<label className="block text-xs uppercase tracking-wide opacity-60 mb-1">Full Name</label>
<input className="w-full bg-nude-100 border border-transparent focus:border-accent-500 focus:ring-0 rounded-md p-3 text-sm transition-all outline-none" placeholder="Enter your name" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wide opacity-60 mb-1">Email</label>
<input className="w-full bg-nude-100 border border-transparent focus:border-accent-500 focus:ring-0 rounded-md p-3 text-sm transition-all outline-none" placeholder="Enter your email" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wide opacity-60 mb-1">Inquiry Type</label>
<select className="w-full bg-nude-100 border border-transparent focus:border-accent-500 focus:ring-0 rounded-md p-3 text-sm transition-all outline-none text-burgundy-800/70">
<option>Select Subject...</option>
<option>Booking Issue</option>
<option>Feedback</option>
<option>Press</option>
</select>
</div>
<div>
<label className="block text-xs uppercase tracking-wide opacity-60 mb-1">Message</label>
<textarea className="w-full bg-nude-100 border border-transparent focus:border-accent-500 focus:ring-0 rounded-md p-3 text-sm transition-all outline-none resize-none" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full bg-accent-500 text-white font-medium text-sm py-3 rounded-md hover:bg-burgundy-800 transition-colors mt-2">
                    Send Message
                </button>
</form>
</div>

<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
<div className="bg-nude-200/30 p-4 rounded-lg flex justify-between items-center reveal-element delay-100 border border-burgundy-800/5">
<div>
<h4 className="font-serif text-lg">Call Us</h4>
<p className="text-[10px] uppercase opacity-60">Let's talk nails</p>
</div>
<svg className="lucide lucide-phone w-4 h-4 opacity-40" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="bg-nude-200/30 p-4 rounded-lg flex justify-between items-center reveal-element delay-200 border border-burgundy-800/5">
<div>
<h4 className="font-serif text-lg">Find Us</h4>
<p className="text-[10px] uppercase opacity-60">See you here</p>
</div>
<svg className="lucide lucide-map-pin w-4 h-4 opacity-40" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="bg-nude-200/30 p-4 rounded-lg flex justify-between items-center reveal-element delay-300 border border-burgundy-800/5">
<div>
<h4 className="font-serif text-lg">Email Us</h4>
<p className="text-[10px] uppercase opacity-60">We're listening</p>
</div>
<svg className="lucide lucide-mail w-4 h-4 opacity-40" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
</div>
</section>

<footer className="bg-burgundy-900 text-nude-100 py-16 px-6">
<div className="max-w-7xl mx-auto rounded-2xl bg-burgundy-900 overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-sparkles w-5 h-5 text-accent-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-serif text-xl font-medium tracking-tight">Urban Nail &amp; Beauty</span>
</div>
<p className="text-white/60 text-xs leading-relaxed max-w-xs mb-8">
                        A studio built around calm service, clean products, and good nails. We believe in beauty that feels as good as it looks.
                    </p>
<div className="text-xs text-white/60 space-y-2">
<p>+1 (555) 091-2345</p>
<p>124 Beauty Lane, SoHo, NY</p>
<p>hello@urbannail.com</p>
</div>
<div className="mt-8">
<p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">We're Open:</p>
<p className="text-xs text-white/80">Mon - Fri: 10AM - 8PM</p>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-6">Menu</h4>
<ul className="space-y-3 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-6">Follow Us</h4>
<ul className="space-y-3 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Facebook</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pinterest</a></li>
<li><a className="hover:text-white transition-colors" href="#">TikTok</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40">
<p>© 2024 Urban Nail &amp; Beauty. All rights reserved.</p>
<p>Designed with Care.</p>
</div>
</div>
</footer>



    </>
  );
}
