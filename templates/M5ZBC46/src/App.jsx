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
document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');
let isOpen = false;

menuBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  mobileMenu.style.transform = isOpen ? 'translateX(0)' : 'translateX(100%)';
  menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
  lucide.createIcons();
});

// Close menu when clicking on links
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    isOpen = false;
    mobileMenu.style.transform = 'translateX(100%)';
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

document.getElementById('newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  const button = e.target.querySelector('button');
  const originalText = button.innerHTML;
  button.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i><span>Thank you!</span>';
  lucide.createIcons();
  
  setTimeout(() => {
    button.innerHTML = originalText;
    lucide.createIcons();
    e.target.reset();
  }, 2000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
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
      
<header className="w-full fixed top-0 z-50 glass-effect border-b border-white/10">
<div className="max-w-7xl flex lg:px-8 mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="heading-font gradient-text fade-in text-2xl font-medium tracking-tight" href="#" style={{animationPlayState: 'running'}}>SHINE</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-gray-300 transition fade-in fade-in-delay-1" href="#collections" style={{animationPlayState: 'running'}}>Collections</a>
<a className="hover:text-gray-300 transition fade-in fade-in-delay-2" href="#about" style={{animationPlayState: 'running'}}>About</a>
<a className="hover:text-gray-300 transition fade-in fade-in-delay-3" href="#services" style={{animationPlayState: 'running'}}>Services</a>
<a className="hover:text-gray-300 transition fade-in fade-in-delay-4" href="#contact" style={{animationPlayState: 'running'}}>Contact</a>
</nav>
<button className="flex items-center gap-2 text-sm tracking-wide font-medium uppercase hover:opacity-80 transition fade-in" id="menuBtn" style={{animationPlayState: 'running'}}>
<span className="hidden sm:inline">Menu</span>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" id="menuIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transform translate-x-full transition-transform duration-300" id="mobileMenu">
<div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl heading-font">
<a className="hover:text-gray-300 transition" href="#collections">Collections</a>
<a className="hover:text-gray-300 transition" href="#about">About Us</a>
<a className="hover:text-gray-300 transition" href="#services">Services</a>
<a className="hover:text-gray-300 transition" href="#contact">Contact</a>
</div>
</div>
<main className="pt-20">
<section className="border-b border-white/5">
<div className="grid lg:grid-cols-2 min-h-screen">
<div className="lg:px-20 flex bg-[url(https://images.unsplash.com/photo-1481754100984-dbae571fe45b?w=2160&amp;q=80)] bg-cover pt-16 pr-6 pb-16 pl-6 items-center justify-center">
<div className="text-center">
<h1 className="heading-font text-5xl sm:text-6xl lg:text-8xl font-medium leading-tight tracking-tight fade-in fade-in-delay-2" style={{animationPlayState: 'running'}}>
<span className="gradient-text">Rise.</span>
<span className="text-gray-500">Shine.</span>
<span className="">Repeat.</span>
</h1>
<p className="mt-8 text-gray-400 text-lg max-w-lg mx-auto fade-in fade-in-delay-3" style={{animationPlayState: 'running'}}>
            Elevate your style with our curated collection of premium fashion essentials
          </p>
</div>
</div><div className="lg:px-20 flex flex-col gap-8 pt-16 pr-6 pb-16 pl-6 justify-center">
<div className="flex gap-6 fade-in" style={{animationPlayState: 'running'}}>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition hover-lift" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition hover-lift" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition hover-lift" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition hover-lift" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
<div className="fade-in fade-in-delay-1" style={{animationPlayState: 'running'}}>
<p className="leading-relaxed max-w-md text-sm text-gray-400 mb-8">Discover the intersection of timeless elegance and contemporary design. SHINE brings you exclusive collections that define modern luxury.</p>
<div className="flex items-center gap-4">
<div className="w-12 h-px bg-gradient-to-r from-white to-transparent"></div>
<span className="text-xs uppercase tracking-widest text-gray-500">Est. 2019</span>
</div>
</div>
</div>
</div>
</section>
<section className="border-b border-white/5 py-20" id="collections">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 fade-in" style={{animationPlayState: 'running'}}>
<h2 className="heading-font text-4xl lg:text-5xl font-medium mb-6 tracking-tight">Featured Collections</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Discover our latest seasonal offerings, each piece crafted with meticulous attention to detail and uncompromising quality.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group cursor-pointer fade-in fade-in-delay-1" style={{animationPlayState: 'running'}}>
<div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg mb-4 overflow-hidden">
<img alt="Executive Collection" className="w-full h-full group-hover:scale-105 transition-transform duration-500 object-cover" src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=1080&amp;q=80"/>
</div>
<h3 className="text-xl font-medium mb-2">Executive Collection</h3>
<p className="text-gray-400 text-sm">Sophisticated business attire for the modern professional</p>
</div>
<div className="group cursor-pointer fade-in fade-in-delay-2" style={{animationPlayState: 'running'}}>
<div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg mb-4 overflow-hidden">
<img alt="Casual Luxe" className="w-full h-full group-hover:scale-105 transition-transform duration-500 object-cover" src="https://images.unsplash.com/photo-1538330627166-33d1908c210d?w=1080&amp;q=80"/>
</div>
<h3 className="text-xl font-medium mb-2">Casual Luxe</h3>
<p className="text-gray-400 text-sm">Elevated everyday essentials with premium comfort</p>
</div>
<div className="group cursor-pointer fade-in fade-in-delay-3" style={{animationPlayState: 'running'}}>
<div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg mb-4 overflow-hidden">
<img alt="Evening Elegance" className="w-full h-full group-hover:scale-105 transition-transform duration-500 object-cover" src="https://images.unsplash.com/photo-1538331269258-6c97a6bdeae0?w=1080&amp;q=80"/>
</div>
<h3 className="text-xl font-medium mb-2">Evening Elegance</h3>
<p className="text-gray-400 text-sm">Sophisticated pieces for special occasions</p>
</div>
</div>
</div>
</section>
<section className="border-b border-white/5">
<div className="grid lg:grid-cols-2">
<div className="px-6 py-20 lg:px-20 flex flex-col justify-center gap-10">
<div className="fade-in" style={{animationPlayState: 'running'}}>
<h2 className="heading-font text-4xl sm:text-5xl mb-6 tracking-tight">Stay Connected</h2>
<p className="text-sm leading-relaxed text-gray-400 max-w-md">
            Be the first to discover new arrivals, exclusive collections, and styling insights from our fashion experts. Join our community of style enthusiasts.
          </p>
</div>
<form className="flex flex-col gap-6 max-w-md fade-in fade-in-delay-1" id="newsletterForm" style={{animationPlayState: 'running'}}>
<div className="grid sm:grid-cols-2 gap-6">
<div className="border-b border-gray-600 focus-within:border-white transition">
<input className="w-full bg-transparent py-3 text-sm focus:outline-none placeholder-gray-500" placeholder="First Name" required="" type="text"/>
</div>
<div className="border-b border-gray-600 focus-within:border-white transition">
<input className="w-full bg-transparent py-3 text-sm focus:outline-none placeholder-gray-500" placeholder="Last Name" required="" type="text"/>
</div>
</div>
<div className="border-b border-gray-600 focus-within:border-white transition">
<input className="w-full bg-transparent py-3 text-sm focus:outline-none placeholder-gray-500" placeholder="Email Address" required="" type="email"/>
</div>
<div className="flex items-center gap-3 text-sm text-gray-400">
<input className="w-4 h-4 rounded border-gray-600" id="newsletter" type="checkbox"/>
<label htmlFor="newsletter">Send me style tips and exclusive offers</label>
</div>
<button className="group flex items-center justify-center gap-3 py-4 px-8 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300" type="submit">
<span className="text-sm font-medium">Join Our Community</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<div className="flex items-center gap-4 mt-8 fade-in fade-in-delay-2" style={{animationPlayState: 'running'}}>
<div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center">
<svg className="lucide lucide-shield-check w-5 h-5 text-gray-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium">Privacy Protected</p>
<p className="text-xs text-gray-500">We never share your information</p>
</div>
</div>
</div>
<div className="px-6 py-20 lg:px-20">
<div className="grid sm:grid-cols-2 gap-12 lg:gap-16">
<div className="fade-in" style={{animationPlayState: 'running'}}>
<h3 className="text-xs font-medium tracking-widest mb-6 text-gray-400 uppercase">Company</h3>
<ul className="space-y-4 text-sm">
<li className=""><a className="hover:text-white transition" href="#">About SHINE</a></li>
<li><a className="hover:text-white transition" href="#">Our Story</a></li>
<li className=""><a className="hover:text-white transition" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition" href="#">Careers</a></li>
<li className=""><a className="hover:text-white transition" href="#">Press</a></li>
<li className=""><a className="hover:text-white transition" href="#">Investors</a></li>
</ul>
</div>
<div className="fade-in fade-in-delay-1" style={{animationPlayState: 'running'}}>
<h3 className="text-xs font-medium tracking-widest mb-6 text-gray-400 uppercase">Services</h3>
<ul className="space-y-4 text-sm">
<li className=""><a className="hover:text-white transition" href="#">Personal Styling</a></li>
<li><a className="hover:text-white transition" href="#">Custom Tailoring</a></li>
<li><a className="hover:text-white transition" href="#">Wardrobe Consultation</a></li>
<li><a className="hover:text-white transition" href="#">Corporate Solutions</a></li>
<li><a className="hover:text-white transition" href="#">Alteration Services</a></li>
<li><a className="hover:text-white transition" href="#">VIP Concierge</a></li>
</ul>
</div>
<div className="fade-in fade-in-delay-2" style={{animationPlayState: 'running'}}>
<h3 className="text-xs font-medium tracking-widest mb-6 text-gray-400 uppercase">Collections</h3>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition" href="#">Men's Luxury</a></li>
<li><a className="hover:text-white transition" href="#">Women's Elite</a></li>
<li><a className="hover:text-white transition" href="#">Accessories</a></li>
<li><a className="hover:text-white transition" href="#">Seasonal Limited</a></li>
<li><a className="hover:text-white transition" href="#">Heritage Collection</a></li>
</ul>
</div>
<div className="fade-in fade-in-delay-3" style={{animationPlayState: 'running'}}>
<h3 className="text-xs font-medium tracking-widest mb-6 text-gray-400 uppercase">Support</h3>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition" href="#">Size Guide</a></li>
<li><a className="hover:text-white transition" href="#">Care Instructions</a></li>
<li><a className="hover:text-white transition" href="#">Returns &amp; Exchanges</a></li>
<li><a className="hover:text-white transition" href="#">Shipping Info</a></li>
<li><a className="hover:text-white transition" href="#">FAQ</a></li>
<li><a className="hover:text-white transition" href="#">Contact Us</a></li>
</ul>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-8">
<p className="text-xs text-gray-500">©  SHINE Fashion House. All rights reserved.<span id="year">2025</span></p>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
<a className="hover:text-white transition" href="#">Cookie Policy</a>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-gray-500">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Crafted in Milan, Italy</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
