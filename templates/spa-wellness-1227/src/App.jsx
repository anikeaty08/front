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
      
// State-based routing system
function handleRoute() {
const hash = window.location.hash || '#/';
const viewHome = document.getElementById('view-home');
const viewAbout = document.getElementById('view-about');
if (hash === '#/about') {
viewHome.classList.add('hidden');
viewAbout.classList.remove('hidden');
window.scrollTo({ top: 0, behavior: 'smooth' });
} else {
viewAbout.classList.add('hidden');
viewHome.classList.remove('hidden');
// Handle sub-section scrolling on the home view
if (hash === '#/services') {
setTimeout(() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }), 100);
} else if (hash === '#/contact') {
setTimeout(() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }), 100);
} else if (hash === '#/') {
window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
}
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<header className="fixed w-full top-0 bg-white/80 backdrop-blur-lg border-b border-[#f7f1eb] z-50 transition-all duration-300">
<nav className="flex justify-between items-center py-5 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
<a className="font-['Playfair_Display',serif] text-2xl font-medium text-[#333333] tracking-tighter uppercase inline-flex items-center gap-2" href="#/">
<iconify-icon className="text-xl" icon="solar:spa-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Starleve
            </a>
<ul className="hidden md:flex gap-10 items-center">
<li><a className="text-xs font-normal uppercase tracking-widest text-[#666666] hover:text-[#dcbfa6] transition-colors duration-300" href="#/">Home</a></li>
<li><a className="text-xs font-normal uppercase tracking-widest text-[#666666] hover:text-[#dcbfa6] transition-colors duration-300" href="#/services">Services</a></li>
<li><a className="text-xs font-normal uppercase tracking-widest text-[#666666] hover:text-[#dcbfa6] transition-colors duration-300" href="#/about">About</a></li>
<li><a className="text-xs font-normal uppercase tracking-widest text-[#666666] hover:text-[#dcbfa6] transition-colors duration-300" href="#/contact">Contact</a></li>
</ul>
<button className="hidden md:inline-flex items-center gap-2 bg-[#333333] text-white px-6 py-3 text-xs uppercase tracking-widest font-normal hover:bg-[#dcbfa6] hover:text-[#333333] transition-all duration-300 rounded-sm" onclick="alert('Booking system opening...')">
                Book Visit
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="md:hidden text-[#333333] text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</header>
<main className="flex-grow">

<div className="page-view" id="view-home">

<section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24">
<div className="absolute inset-0 z-0">
<img alt="Spa Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-[#f7f1eb]/85 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<span className="text-xs uppercase tracking-widest text-[#dcbfa6] font-normal mb-6 flex items-center gap-2">
<iconify-icon icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        The Ultimate Retreat
                    </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-['Playfair_Display',serif] font-light text-[#333333] tracking-tight mb-8 leading-[1.1]">
                        Elevate Your Glow
                    </h1>
<p className="text-base md:text-lg text-[#666666] mb-10 max-w-2xl leading-relaxed">
                        Experience the pinnacle of relaxation, physical conditioning, and skin rejuvenation. Starleve offers bespoke treatments designed to restore your natural radiance and physical vitality.
                    </p>
<a className="inline-flex items-center gap-3 bg-transparent border border-[#333333] text-[#333333] px-8 py-4 text-xs uppercase tracking-widest font-normal hover:bg-[#333333] hover:text-white transition-all duration-300 rounded-sm group" href="#/services">
                        Explore Treatments
                        <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white" id="services">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-light text-[#333333] tracking-tight mb-6">Our Signature Offerings</h2>
<p className="text-base text-[#666666] max-w-xl mx-auto">Tailored skincare, body therapies, and physical wellness to nurture your entire being.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group bg-[#f7f1eb]/50 hover:bg-[#f7f1eb] p-10 transition-colors duration-500 rounded-sm border border-transparent hover:border-[#dcbfa6]/30">
<div className="mb-8 overflow-hidden rounded-full w-24 h-24 mx-auto md:mx-0 relative">
<img alt="Facial" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-[#333333]/10"></div>
</div>
<h3 className="text-2xl font-['Playfair_Display',serif] font-light tracking-tight mb-4 flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-[#dcbfa6]" icon="solar:face-scan-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Luminous Facials
                            </h3>
<p className="text-[#666666] text-sm leading-relaxed text-center md:text-left">
                                Customized to your skin type, our facials utilize medical-grade serums and gentle massage to leave your skin visibly brighter and deeply hydrated.
                            </p>
</div>

<div className="group bg-[#f7f1eb]/50 hover:bg-[#f7f1eb] p-10 transition-colors duration-500 rounded-sm border border-transparent hover:border-[#dcbfa6]/30">
<div className="mb-8 overflow-hidden rounded-full w-24 h-24 mx-auto md:mx-0 relative">
<img alt="Massage" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-[#333333]/10"></div>
</div>
<h3 className="text-2xl font-['Playfair_Display',serif] font-light tracking-tight mb-4 flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-[#dcbfa6]" icon="solar:hand-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Therapeutic Massage
                            </h3>
<p className="text-[#666666] text-sm leading-relaxed text-center md:text-left">
                                Melt away tension with our signature blends of aromatherapy oils and targeted muscle relief techniques designed for ultimate post-workout relaxation.
                            </p>
</div>

<div className="group bg-[#f7f1eb]/50 hover:bg-[#f7f1eb] p-10 transition-colors duration-500 rounded-sm border border-transparent hover:border-[#dcbfa6]/30">
<div className="mb-8 overflow-hidden rounded-full w-24 h-24 mx-auto md:mx-0 relative">
<img alt="Fitness" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5adee9f50?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-[#333333]/10"></div>
</div>
<h3 className="text-2xl font-['Playfair_Display',serif] font-light tracking-tight mb-4 flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-[#dcbfa6]" icon="solar:dumbbell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Elite Conditioning
                            </h3>
<p className="text-[#666666] text-sm leading-relaxed text-center md:text-left">
                                State-of-the-art gym facilities and personalized training sessions tailored to build your physical strength, perfectly complementing our restorative spa treatments.
                            </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row bg-[#f7f1eb]">
<div className="lg:w-1/2 min-h-[50vh] lg:min-h-auto relative">
<img alt="Spa Interior" className="absolute inset-0 w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80" />
</img></div>
<div className="lg:w-1/2 p-12 md:p-24 lg:p-32 flex flex-col justify-center">
<span className="text-xs uppercase tracking-widest text-[#dcbfa6] font-normal mb-4 flex items-center gap-2">
<iconify-icon icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Our Ethos
                    </span>
<h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-light tracking-tight mb-8 text-[#333333]">The Starleve Philosophy</h2>
<div className="space-y-6 text-[#666666] text-sm md:text-base leading-relaxed">
<p>At Starleve Spa &amp; Wellness, we believe true beauty is an inside job. It starts with finding peace in your day, and manifests in a healthy, glowing complexion alongside physical strength.</p>
<p>Whether you are seeking a moment of quiet retreat, a complete skin transformation, or to elevate your fitness journey, we tailor every detail to honor your unique needs.</p>
</div>
<div className="mt-12">
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-normal text-[#333333] border-b border-[#333333] pb-1 hover:text-[#dcbfa6] hover:border-[#dcbfa6] transition-colors duration-300" href="#/about">
                            Read Our Story
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-about">

<section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#f7f1eb]">
<div className="max-w-[1000px] mx-auto text-center">
<span className="text-xs uppercase tracking-widest text-[#dcbfa6] font-normal mb-6 flex items-center justify-center gap-2">
<iconify-icon icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Our Story
                    </span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display',serif] font-light text-[#333333] tracking-tight mb-8 leading-[1.1]">
                        Where Strength Meets Serenity
                    </h1>
</div>
</section>

<section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2 relative">
<div className="absolute inset-0 bg-[#dcbfa6]/20 transform translate-x-4 translate-y-4 rounded-sm"></div>
<img alt="Wellness Gym" className="relative z-10 w-full object-cover rounded-sm grayscale-[10%]" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" />
</img></div>
<div className="md:w-1/2">
<h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] font-light text-[#333333] tracking-tight mb-6">A Holistic Approach to Wellness</h2>
<div className="space-y-6 text-[#666666] text-sm md:text-base leading-relaxed">
<p>Founded as a premier wellness destination, Starleve seamlessly integrates world-class spa treatments with state-of-the-art physical conditioning. We recognized early on that true radiance isn't just skin deep—it comes from a balanced synergy of muscular vitality and mental tranquility.</p>
<p>Our expansive facility houses not only tranquil treatment rooms for profound relaxation but also an elite gym designed for those who wish to elevate their physical capabilities. We bridge the gap between rigorous training and restorative therapy, offering a comprehensive ecosystem for your body and mind.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#333333] text-center">
<div className="max-w-4xl mx-auto">
<iconify-icon className="text-4xl text-[#dcbfa6] mb-8" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-xs uppercase tracking-widest font-normal text-white/50 mb-6">Our Mission</h2>
<p className="text-2xl md:text-4xl font-['Playfair_Display',serif] font-light text-white leading-relaxed tracking-tight">
                        "To empower individuals to achieve their highest state of well-being through a harmonious blend of advanced skincare, restorative therapies, and rigorous physical conditioning."
                    </p>
</div>
</section>
</div>
</main>
<footer className="bg-[#222222] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24" id="contact">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
<div>
<h3 className="font-['Playfair_Display',serif] text-2xl font-light text-[#dcbfa6] tracking-tight mb-6">Starleve</h3>
<p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">Your sanctuary for modern skincare, holistic wellness, and elite fitness.</p>
<p className="text-[#a0a0a0] text-sm leading-relaxed">
                        123 Glow Avenue, Suite 100<br/>
                        Lagos, Nigeria
                    </p>
</div>
<div>
<h3 className="text-xs uppercase tracking-widest font-normal text-white mb-8">Contact</h3>
<div className="flex flex-col gap-4 text-sm text-[#a0a0a0]">
<a className="hover:text-[#dcbfa6] transition-colors inline-flex items-center gap-2" href="mailto:hello@starlevespa.com">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            hello@starlevespa.com
                        </a>
<a className="hover:text-[#dcbfa6] transition-colors inline-flex items-center gap-2" href="tel:+2348000000000">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            +234 800 000 0000
                        </a>
</div>
</div>
<div>
<h3 className="text-xs uppercase tracking-widest font-normal text-white mb-8">Hours</h3>
<ul className="flex flex-col gap-4 text-sm text-[#a0a0a0]">
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Mon - Fri</span>
<span>6am - 9pm</span>
</li>
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Saturday</span>
<span>8am - 6pm</span>
</li>
<li className="flex justify-between border-b border-white/5 pb-2 text-white/40">
<span>Sunday</span>
<span>Closed</span>
</li>
</ul>
</div>
<div>
<h3 className="text-xs uppercase tracking-widest font-normal text-white mb-8">Newsletter</h3>
<p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">Subscribe for exclusive wellness tips and special offers.</p>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault(); alert('Subscribed!');">
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]" icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 text-white text-sm px-11 py-3 outline-none focus:border-[#dcbfa6] transition-colors rounded-sm placeholder:text-[#666666]" placeholder="Email address" required="" type="email"/>
</div>
<button className="w-full bg-[#dcbfa6] text-[#222222] px-6 py-3 text-xs uppercase tracking-widest font-normal hover:bg-white transition-colors duration-300 rounded-sm" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-[#666666]">
<p>© 2026 Starleve Spa &amp; Wellness. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#dcbfa6] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#dcbfa6] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
