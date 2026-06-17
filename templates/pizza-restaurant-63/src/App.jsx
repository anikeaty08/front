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



        // Simple intersection observer to trigger CSS animations on scroll
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            }, { threshold: 0.1 });

            // Select elements to animate that aren't already animated on load (hero elements have .reveal)
            document.querySelectorAll('#about h2, #about h3, #about p, .menu-card').forEach((el) => {
                el.style.opacity = "0";
                el.style.transform = "translateY(20px)";
                el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
                observer.observe(el);
            });
            
            // Navbar blur effect on scroll
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('shadow-lg');
                } else {
                    nav.classList.remove('shadow-lg');
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-oswald text-2xl font-semibold tracking-tighter text-[#f5f5f5] flex items-center gap-2" href="#">
<span className="text-[#d62828]">LCP</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-neutral-400">
<a className="hover:text-[#f5f5f5] transition-colors" href="#about">About</a>
<a className="hover:text-[#f5f5f5] transition-colors" href="#menu">Menu</a>
<a className="hover:text-[#f5f5f5] transition-colors" href="#location">Location</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold tracking-wide bg-[#d62828]/10 text-[#d62828] px-5 py-2.5 rounded-full border border-[#d62828]/20 hover:bg-[#d62828] hover:text-white hover:border-[#d62828] transition-all duration-300" href="#menu">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                Order Online
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-fixed opacity-40 mix-blend-luminosity"></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/60 to-[#111111]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-[#111111]/50"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
<span className="reveal inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 tracking-widest uppercase mb-6 backdrop-blur-sm">
                Brooklyn Born &amp; Bred
            </span>
<h1 className="reveal delay-100 font-oswald text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter uppercase text-[#f5f5f5] leading-[0.9] mb-8 drop-shadow-2xl">
                Little Charlie's <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d62828] to-[#ff4d4d]">Pizza</span>
</h1>
<p className="reveal delay-200 max-w-2xl text-lg md:text-2xl font-light text-neutral-300 leading-relaxed mb-10 tracking-tight">
                "We do hand-tossed pizza, we make our own dough, we make our own sauces, we make everything from scratch."
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 bg-[#d62828] text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#b01e1e] hover:shadow-[0_0_20px_rgba(214,40,40,0.4)] transition-all duration-300" href="#menu">
                    View Menu
                </a>
<a className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-[#f5f5f5] px-8 py-4 rounded-full text-sm font-medium tracking-wide backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="#menu">
                    Order Now
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-xs uppercase tracking-widest text-neutral-400">Scroll</span>
<iconify-icon className="text-lg animate-bounce" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 flex flex-col justify-center">
<h2 className="font-oswald text-4xl md:text-5xl font-semibold tracking-tighter uppercase text-[#f5f5f5] mb-4">
                        About Little Charlie's
                    </h2>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#d62828] mb-8">
                        Homemade Hand-Tossed New York Style Pizza
                    </h3>
<div className="space-y-6 text-sm md:text-base text-neutral-400 leading-relaxed font-light">
<p>
                            Originally from Brooklyn, New York, owner Charlie Mariano worked with his father for over 25 years and moved to Williamsburg with his wife and three children. After owning several restaurants along the peninsula of the area, Charlie decided to open a New York-style pizzeria with his own recipes from Brooklyn.
                        </p>
<p>
                            Little Charlie's Pizza serves authentic New York pizza with homemade dough, premium ingredients, and recipes passed down for generations.
                        </p>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex flex-col">
<span className="font-oswald text-3xl font-semibold text-[#f5f5f5] tracking-tighter">25+</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Years Experience</span>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="flex flex-col">
<span className="font-oswald text-3xl font-semibold text-[#f5f5f5] tracking-tighter">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Made from Scratch</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative group">
<div className="absolute -inset-4 bg-gradient-to-tr from-[#d62828]/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
<div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#161616]">
<img alt="Chef making pizza dough" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#0a0a0a] border-y border-white/5" id="menu">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d62828]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 md:mb-24">
<span className="inline-block py-1 px-3 rounded-full bg-[#161616] border border-white/10 text-xs font-medium text-[#d62828] tracking-widest uppercase mb-4">
                    Our Menu
                </span>
<h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter uppercase text-[#f5f5f5]">
                    Handcrafted Fare
                </h2>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="menu-card bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 break-inside-avoid">
<h3 className="font-oswald text-2xl tracking-tight font-semibold text-[#f5f5f5] mb-6 flex items-center gap-3">
<span className="w-6 h-px bg-[#d62828]"></span> Starters
                    </h3>
<ul className="space-y-4">
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Garlic Knots</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">3.25</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Mozzarella Sticks</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">6.95</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">French Fries</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">4.95</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Cheese Fries</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">6.95</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Chicken Wings (10)</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.29</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Fried Calamari</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">13.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Fried Ravioli (10)</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">8.99</span>
</li>
</ul>
</div>

<div className="menu-card bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 break-inside-avoid">
<h3 className="font-oswald text-2xl tracking-tight font-semibold text-[#f5f5f5] mb-6 flex items-center gap-3">
<span className="w-6 h-px bg-[#d62828]"></span> Salads
                    </h3>
<ul className="space-y-4">
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Garden Salad</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">9.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Caesar Salad</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">9.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Chef Salad</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">12.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Greek Salad</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">12.99</span>
</li>
</ul>
</div>

<div className="menu-card bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 break-inside-avoid relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-[#d62828]/10 rounded-full blur-xl pointer-events-none"></div>
<h3 className="font-oswald text-2xl tracking-tight font-semibold text-[#f5f5f5] mb-2 flex items-center gap-3">
<span className="w-6 h-px bg-[#d62828]"></span> Specialty Pies
                    </h3>
<div className="flex justify-end mb-4">
<span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Med / Lg</span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Cheese</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">15.99 / 18.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2 text-[#d62828] group-hover/item:text-[#ff4d4d]">Margherita</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">16.99 / 18.95</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Vegetable</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">16.99 / 18.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Meat Lovers</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">19.99 / 21.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Stuffed</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">19.99 / 21.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">White</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">14.99 / 17.99</span>
</li>
</ul>
</div>

<div className="menu-card bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 break-inside-avoid">
<h3 className="font-oswald text-2xl tracking-tight font-semibold text-[#f5f5f5] mb-6 flex items-center gap-3">
<span className="w-6 h-px bg-[#d62828]"></span> Calzones &amp; Strombolis
                    </h3>
<ul className="space-y-4">
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Calzone</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">New Lover Calzone</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">11.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Veggie Calzone</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Stromboli</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">8.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">New Lover Stromboli</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">11.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Veggie Stromboli</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.99</span>
</li>
</ul>
</div>

<div className="menu-card bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 break-inside-avoid">
<h3 className="font-oswald text-2xl tracking-tight font-semibold text-[#f5f5f5] mb-6 flex items-center gap-3">
<span className="w-6 h-px bg-[#d62828]"></span> Pasta Dishes
                    </h3>
<ul className="space-y-4">
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Shrimp Fra Diavolo</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">17.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Cannelloni Marinara</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">16.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Spaghetti</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">12.99</span>
</li>
<li className="flex justify-between items-end group/item flex-wrap">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2 max-w-[70%]">Spaghetti Meatball or Sausage</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">13.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Fettuccine Alfredo</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">14.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Baked Ziti</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">13.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Lasagna</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">13.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Manicotti</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">13.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Cheese Ravioli</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">13.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Stuffed Shells</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">13.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Penne Primavera</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">13.99</span>
</li>
</ul>
</div>

<div className="menu-card bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 break-inside-avoid">
<h3 className="font-oswald text-2xl tracking-tight font-semibold text-[#f5f5f5] mb-6 flex items-center gap-3">
<span className="w-6 h-px bg-[#d62828]"></span> Dinner Dishes
                    </h3>
<ul className="space-y-4">
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Chicken Parmigiana</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">14.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Chicken Marsala</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">14.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Chicken Francese</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">14.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Chicken Piccata</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">15.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Veal Parmigiana</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">15.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Veal Francese</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">15.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Veal Marsala</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">15.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Shrimp Marinara</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">16.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Shrimp Francese</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">16.99</span>
</li>
</ul>
</div>

<div className="menu-card bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 break-inside-avoid">
<h3 className="font-oswald text-2xl tracking-tight font-semibold text-[#f5f5f5] mb-6 flex items-center gap-3">
<span className="w-6 h-px bg-[#d62828]"></span> Heros
                    </h3>
<ul className="space-y-4">
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Chicken Parmigiana</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Veal Parmigiana</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">11.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Sausage, Pepper &amp; Onion</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Eggplant Parmigiana</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Italian</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Ham &amp; Cheese</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">8.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Meatball Parmigiana</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Cheese Steak</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">11.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Grilled Chicken</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">11.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Turkey &amp; Cheese</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">8.99</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2 text-[#d62828]">Little Charlie</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">10.99</span>
</li>
</ul>
</div>

<div className="space-y-6 break-inside-avoid">

<div className="menu-card bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8">
<h3 className="font-oswald text-2xl tracking-tight font-semibold text-[#f5f5f5] mb-6 flex items-center gap-3">
<span className="w-6 h-px bg-[#d62828]"></span> By The Slice
                        </h3>
<ul className="space-y-4">
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Slice</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">1.75</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Sicilian</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">3.95</span>
</li>
</ul>
</div>

<div className="menu-card bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8">
<h3 className="font-oswald text-2xl tracking-tight font-semibold text-[#f5f5f5] mb-6 flex items-center gap-3">
<span className="w-6 h-px bg-[#d62828]"></span> Desserts
                        </h3>
<ul className="space-y-4">
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Cannoli</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">4.95</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Tiramisu</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">4.95</span>
</li>
<li className="flex justify-between items-end group/item">
<span className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors relative z-10 bg-[#161616] pr-2">Cheesecake</span>
<span className="flex-grow dot-leader mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity"></span>
<span className="text-sm font-semibold text-[#f5f5f5] bg-[#161616] pl-2 z-10">4.95</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#111111] h-[500px] w-full border-b border-white/5" id="location">
<div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(17,17,17,1)]"></div>

<iframe allowfullscreen="" className="dark-map absolute inset-0 object-cover" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24194.27641029279!2d-73.97233282216893!3d40.711833132626155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bf7849e7a6f%3A0xc3af744040a45ea4!2sWilliamsburg%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus" style={{border: '0'}} width="100%">
</iframe>

<div className="absolute top-1/2 left-6 md:left-24 -translate-y-1/2 z-20 bg-[#161616]/90 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-sm shadow-2xl">
<h3 className="font-oswald text-2xl font-semibold tracking-tight text-[#f5f5f5] mb-2 uppercase">Visit Us</h3>
<p className="text-sm text-neutral-400 mb-6 font-light">Heart of Williamsburg, Brooklyn.</p>
<div className="space-y-4">
<div className="flex items-start gap-3 text-sm">
<iconify-icon className="text-xl text-[#d62828] mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-neutral-300">123 Bedford Ave<br/>Brooklyn, NY 11211</span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-xl text-[#d62828]" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-neutral-300">(718) 555-0199</span>
</div>
<div className="flex items-start gap-3 text-sm">
<iconify-icon className="text-xl text-[#d62828] mt-0.5" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-neutral-300 space-y-1">
<p className="flex justify-between w-32"><span className="text-neutral-500">Mon-Thu</span> 11am - 10pm</p>
<p className="flex justify-between w-32"><span className="text-neutral-500">Fri-Sat</span> 11am - 12am</p>
<p className="flex justify-between w-32"><span className="text-neutral-500">Sunday</span> 12pm - 9pm</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0a0a0a] pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="font-oswald text-3xl font-semibold tracking-tighter text-[#f5f5f5] flex items-center gap-2 mb-4" href="#">
<span className="text-[#d62828]">LCP</span>
</a>
<p className="text-sm text-neutral-400 max-w-sm mb-6 font-light leading-relaxed">
                        Authentic New York style pizza with homemade dough, premium ingredients, and recipes passed down for generations. Since Brooklyn.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:facebook-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-oswald text-lg font-medium tracking-tight text-[#f5f5f5] mb-4 uppercase">Links</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#about">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Full Menu</a></li>
<li><a className="hover:text-white transition-colors" href="#location">Locations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Catering</a></li>
</ul>
</div>
<div>
<h4 className="font-oswald text-lg font-medium tracking-tight text-[#f5f5f5] mb-4 uppercase">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li>(718) 555-0199</li>
<li>hello@littlecharlies.com</li>
<li>123 Bedford Ave, BK</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-light">
<p>© 2023 Little Charlie's Pizza. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
