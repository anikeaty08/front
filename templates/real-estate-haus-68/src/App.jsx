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
fontFamily: {
serif: ['"Instrument Serif"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
},
colors: {
brand: {
black: '#0A0A0A',
dark: '#1A1A1A',
charcoal: '#262626',
stone: '#8A8A8A',
light: '#E5E5E5',
paper: '#F2F2F0', // Warm off-white
white: '#FFFFFF',
}
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'marquee': 'marquee 25s linear infinite',
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- Navigation Logic with Transition ---
        function handleNav(pageId) {
            const target = document.getElementById(pageId);
            
            // Safety check: if target doesn't exist, don't do anything
            if (!target) {
                console.error('Page section not found:', pageId);
                return;
            }

            const activeSection = document.querySelector('.page-section.active');
            
            // If clicking current page, do nothing
            if(activeSection && activeSection.id === pageId) return;

            // Fade out current
            if (activeSection) {
                activeSection.style.opacity = '0';
                
                setTimeout(() => {
                    activeSection.classList.remove('active');
                    activeSection.style.display = 'none';
                    
                    // Activate new
                    window.scrollTo(0, 0);
                    target.style.display = 'block';
                    // Force reflow
                    void target.offsetWidth; 
                    target.classList.add('active');
                    target.style.opacity = '1';
                    
                    triggerScrollAnimations(); // Re-trigger animations for new page
                    lucide.createIcons();
                }, 600); // Wait for fade out
            } else {
                // If no active section (initial load edge case), just show target
                target.style.display = 'block';
                target.classList.add('active');
                target.style.opacity = '1';
            }
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('opacity-0')) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }
        }

        // --- Custom Cursor ---
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Delegate event listeners for dynamic content
        document.body.addEventListener('mouseover', (e) => {
            if (e.target.closest('.hover-trigger')) {
                cursor.classList.add('hovered');
            }
        });
        document.body.addEventListener('mouseout', (e) => {
            if (e.target.closest('.hover-trigger')) {
                cursor.classList.remove('hovered');
            }
        });

        // --- Intersection Observer for Animations ---
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        function triggerScrollAnimations() {
            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => {
                el.classList.add('reveal-image');
                observer.observe(el);
            });
        }
        
        // Initial Trigger
        window.addEventListener('load', () => {
            triggerScrollAnimations();
            lucide.createIcons();
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
      

<div className="hidden md:block" id="cursor"></div>

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-[60] transition-all duration-500 mix-blend-difference text-white" id="navbar">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">

<a className="hover-trigger text-2xl font-bold tracking-tighter z-50 cursor-pointer" href="#" onclick="handleNav('home')">
                ose_
            </a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight">
<button className="hover-trigger relative group" onclick="handleNav('about')">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</button>
<button className="hover-trigger relative group" onclick="handleNav('haus')">
                    HAUS Collection
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</button>
<button className="hover-trigger relative group" onclick="handleNav('brokerage')">
                    Brokerage
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</button>
<button className="hover-trigger border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-xs uppercase tracking-widest font-semibold" onclick="handleNav('contact')">
                    Inquire
                </button>
</div>

<button className="md:hidden hover-trigger z-50" onclick="toggleMobileMenu()">
<span className="block w-6 h-0.5 bg-current mb-1.5"></span>
<span className="block w-6 h-0.5 bg-current"></span>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#0A0A0A] z-[55] flex flex-col justify-center items-center opacity-0 pointer-events-none transition-all duration-500" id="mobile-menu">
<nav className="flex flex-col gap-8 text-center">
<button className="text-5xl font-serif text-brand-paper hover:text-brand-stone transition-colors italic" onclick="handleNav('about'); toggleMobileMenu()">About</button>
<button className="text-5xl font-serif text-brand-paper hover:text-brand-stone transition-colors italic" onclick="handleNav('haus'); toggleMobileMenu()">Collection</button>
<button className="text-5xl font-serif text-brand-paper hover:text-brand-stone transition-colors italic" onclick="handleNav('brokerage'); toggleMobileMenu()">Brokerage</button>
<button className="text-5xl font-serif text-brand-paper hover:text-brand-stone transition-colors italic" onclick="handleNav('contact'); toggleMobileMenu()">Contact</button>
</nav>
</div>

<main className="min-h-screen relative" id="main-container">

<section className="page-section active" id="home">

<div className="relative h-screen w-full overflow-hidden">
<div className="absolute inset-0 bg-black/20 z-10"></div>

<div className="absolute inset-0 w-full h-full scale-105">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full object-cover pointer-events-none" frameborder="0" src="https://www.youtube.com/embed/N1qPJLmNnyg?autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0&amp;playsinline=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;playlist=N1qPJLmNnyg" title="HAUS FAQRA">
</iframe>
</div>

<div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 max-w-[1800px] mx-auto text-white">
<div className="overflow-hidden">
<h1 className="text-[13vw] leading-[0.8] font-serif italic font-light tracking-tighter opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            on_site
                        </h1>
</div>
<div className="overflow-hidden pl-[10vw]">
<h1 className="text-[13vw] leading-[0.8] font-serif font-light tracking-tighter opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                            experts_
                        </h1>
</div>
<div className="mt-12 flex justify-between items-end w-full max-w-4xl opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
<p className="max-w-xs text-sm md:text-base font-light tracking-wide text-white/80 leading-relaxed">
                            Developing design-led homes shaped by architecture, clarity, and 40 years of real-estate heritage.
                        </p>
<button className="hover-trigger group flex items-center gap-4" onclick="handleNav('haus')">
<div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</div>
</button>
</div>
</div>
</div>

<div className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-4 sticky top-32">
<span className="block text-xs font-bold uppercase tracking-widest text-brand-stone mb-4">Philosophy</span>
<h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            Timeless assets,<br/><span className="italic text-brand-stone">Modern Development.</span>
</h2>
</div>
<div className="lg:col-span-8 space-y-24">
<p className="text-xl md:text-3xl font-light leading-relaxed text-brand-dark indent-12 md:indent-24">
                            We don't just build; we curate living experiences. The HAUS Collection turns mountain and city living into long-term, considered assets. Defined by clean lines, natural light, and intelligent spatial planning.
                        </p>

<div className="hover-trigger relative group cursor-pointer overflow-hidden rounded-sm aspect-[16/9] reveal-on-scroll" onclick="handleNav('haus-faqra')">
<img alt="Faqra Landscape" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 text-white">
<span className="text-xs uppercase tracking-widest mb-2 block">Featured Project</span>
<h3 className="text-4xl font-serif italic">Haus Faqra</h3>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
<span className="text-xs font-bold uppercase text-white tracking-widest">View</span>
</div>
</div>
</div>
</div>
</div>

<div className="py-12 border-y border-brand-dark/5 bg-white overflow-hidden flex whitespace-nowrap">
<div className="animate-marquee flex gap-24 items-center">
<span className="text-6xl md:text-8xl font-serif italic text-brand-black/10">Architecture</span>
<span className="text-6xl md:text-8xl font-serif text-brand-black/10">Development</span>
<span className="text-6xl md:text-8xl font-serif italic text-brand-black/10">Brokerage</span>
<span className="text-6xl md:text-8xl font-serif text-brand-black/10">Consultancy</span>
<span className="text-6xl md:text-8xl font-serif italic text-brand-black/10">Investment</span>
<span className="text-6xl md:text-8xl font-serif italic text-brand-black/10">Architecture</span>
<span className="text-6xl md:text-8xl font-serif text-brand-black/10">Development</span>
<span className="text-6xl md:text-8xl font-serif italic text-brand-black/10">Brokerage</span>
</div>
</div>

<div className="bg-[#111111] text-brand-paper py-32 px-6 md:px-12">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-5xl md:text-7xl font-serif leading-none mb-8">
                            Private <span className="italic text-white/50">Brokerage.</span>
</h2>
<p className="text-xl font-light text-white/60 max-w-md mb-8">
                            Transactions that happen in silence. We connect buyers and sellers through a strictly private, off-market network.
                        </p>
<button className="hover-trigger border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest font-bold" onclick="handleNav('brokerage')">
                            Enter the Private Office
                        </button>
</div>
</div>
</div>
</section>

<section className="page-section" id="about">
<div className="pt-40 px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<span className="block text-xs font-bold uppercase tracking-widest text-brand-stone mb-6">Who We Are</span>
<h1 className="text-5xl md:text-7xl font-serif leading-none mb-12">
                            Curators of <br/><span className="italic text-brand-stone">Space &amp; Form.</span>
</h1>
<img className="w-full aspect-[4/5] object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-7 flex flex-col justify-center space-y-12">
<p className="text-xl md:text-3xl font-light leading-relaxed text-brand-dark">
                            OSE_ was founded on the belief that real estate is not just about square footage—it is about the feeling of space. With over 40 years of heritage in construction and development, we bridge the gap between architectural rigor and investment pragmatism.
                        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/10 pt-12">
<div>
<h3 className="text-2xl font-serif italic mb-2">Development</h3>
<p className="text-sm text-brand-stone">Creating assets from the ground up with a focus on sustainable, timeless materials.</p>
</div>
<div>
<h3 className="text-2xl font-serif italic mb-2">Advisory</h3>
<p className="text-sm text-brand-stone">Guiding private clients through complex acquisitions and portfolio management.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="haus">
<div className="pt-40 px-6 md:px-12 max-w-[1800px] mx-auto mb-24">
<span className="block text-xs font-bold uppercase tracking-widest text-brand-stone mb-6">The Collection</span>
<h1 className="text-6xl md:text-8xl font-serif italic mb-16">Selected Works_</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer hover-trigger" onclick="handleNav('haus-faqra')">
<div className="relative overflow-hidden aspect-[4/3] mb-6">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest">For Sale</div>
</div>
<div className="flex justify-between items-baseline border-b border-black/10 pb-4">
<h2 className="text-3xl font-serif italic group-hover:text-brand-stone transition-colors">Haus Faqra</h2>
<span className="text-xs uppercase tracking-widest text-brand-stone">Mountain / 1750m</span>
</div>
</div>

<div className="group cursor-not-allowed opacity-60">
<div className="relative overflow-hidden aspect-[4/3] mb-6">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">Sold Out</div>
</div>
<div className="flex justify-between items-baseline border-b border-black/10 pb-4">
<h2 className="text-3xl font-serif italic">Beirut Heights</h2>
<span className="text-xs uppercase tracking-widest text-brand-stone">City / Achrafieh</span>
</div>
</div>

<div className="group cursor-not-allowed opacity-60">
<div className="relative overflow-hidden aspect-[4/3] mb-6">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">Coming Soon</div>
</div>
<div className="flex justify-between items-baseline border-b border-black/10 pb-4">
<h2 className="text-3xl font-serif italic">Metn Reserve</h2>
<span className="text-xs uppercase tracking-widest text-brand-stone">Urban / Rabieh</span>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="haus-faqra">
<div className="h-[80vh] relative w-full overflow-hidden">
<img className="w-full h-full object-cover parallax-img" data-speed="0.5" src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-20 max-w-[1800px] mx-auto text-white">
<div className="flex flex-col md:flex-row justify-between items-end">
<div>
<span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-fade-in-up">The Mountain Collection</span>
<h1 className="text-7xl md:text-9xl font-serif italic leading-none animate-fade-in-up" style={{animationDelay: '0.2s'}}>Faqra_01</h1>
</div>
<div className="hidden md:block text-right animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<p className="text-sm font-light text-white/80">Elevation: 1750m</p>
<p className="text-sm font-light text-white/80">Status: Selling Phase 1</p>
</div>
</div>
</div>
</div>
<div className="bg-brand-paper py-32 px-6 md:px-12">
<div className="max-w-[1400px] mx-auto">
<p className="text-2xl md:text-4xl font-serif leading-tight text-brand-black mb-20 indent-24">
                        A sanctuary above the clouds. Located in the heart of Faqra Club, this gated community of 22 chalets redefines the mountain aesthetic. Moving away from traditional stone-heavy rusticism, we embrace <span className="italic text-brand-stone">clean lines, wide glass apertures</span>, and intelligent thermal design.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
<div className="aspect-[4/5] overflow-hidden reveal-on-scroll">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-end space-y-12 p-8 md:p-16 bg-white reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div>
<h3 className="text-3xl font-serif italic mb-4">The Garden Duplex</h3>
<p className="text-brand-stone font-light">
                                    Private gardens blend seamlessly with the interior living space. Floor-to-ceiling glass captures the changing seasons.
                                </p>
</div>
<ul className="space-y-4 border-t border-brand-black/10 pt-8 text-sm font-medium">
<li className="flex justify-between"><span>Interior</span> <span>125 sqm</span></li>
<li className="flex justify-between"><span>Garden</span> <span>60 sqm</span></li>
<li className="flex justify-between"><span>Bedrooms</span> <span>2 Master</span></li>
<li className="flex justify-between text-brand-black font-bold"><span>Start Price</span> <span>$310,000</span></li>
</ul>
</div>
</div>

<div className="border border-brand-black/10 p-12 md:p-24 text-center relative overflow-hidden group hover-trigger cursor-pointer" onclick="handleNav('contact')">
<div className="absolute inset-0 bg-brand-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<h2 className="relative z-10 text-4xl md:text-6xl font-serif group-hover:text-white transition-colors duration-300">Request Floorplans</h2>
<span className="relative z-10 mt-4 block text-xs uppercase tracking-widest text-brand-stone group-hover:text-white/60">Phase 1 Availability Limited</span>
</div>
</div>
</div>
</section>

<section className="page-section" id="brokerage">
<div className="bg-[#0A0A0A] text-brand-paper min-h-screen pt-40 px-6 md:px-12 flex flex-col justify-between">
<div className="max-w-[1800px] mx-auto w-full">
<div className="border-b border-white/10 pb-12 mb-24">
<h1 className="text-6xl md:text-9xl font-serif italic text-white/90">Private Desk.</h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-5 text-lg md:text-xl font-light text-white/60 leading-relaxed space-y-8">
<p><span className="text-white">The most desirable assets never hit public portals.</span> They are traded quietly within a circle of trust. We grant you access to this invisible market.</p>
<p>We don't manage listings; we manage relationships. If you are serious about acquiring or disposing of a significant property, direct dialogue is the only way forward.</p>
</div>
<div className="lg:col-span-7">
<form className="space-y-0">
<div className="group relative">
<input className="w-full bg-transparent border-b border-white/20 py-8 text-2xl md:text-4xl font-serif focus:outline-none focus:border-white transition-colors placeholder:text-white/20 text-white" placeholder="Name" type="text"/>
<span className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 text-xs uppercase tracking-widest group-focus-within:text-white">Required</span>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-white/20 py-8 text-2xl md:text-4xl font-serif focus:outline-none focus:border-white transition-colors placeholder:text-white/20 text-white" placeholder="Email" type="email"/>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-white/20 py-8 text-2xl md:text-4xl font-serif focus:outline-none focus:border-white transition-colors placeholder:text-white/20 text-white" placeholder="Private Inquiry" type="text"/>
</div>
<div className="pt-12 flex justify-end">
<button className="hover-trigger bg-white text-black px-12 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-stone transition-colors" type="button">
                                        Initiate Contact
                                    </button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="pt-40 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto min-h-screen flex flex-col justify-center">
<h1 className="text-[12vw] leading-none font-serif text-center mb-12">
                    Let's Talk<span className="italic text-brand-stone">.</span>
</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-black pt-12">
<div className="text-center md:text-left hover-trigger group cursor-pointer">
<span className="block text-xs font-bold uppercase tracking-widest text-brand-stone mb-2">Email</span>
<a className="text-2xl font-serif italic group-hover:text-brand-stone transition-colors" href="mailto:hello@ose.com">hello@ose.com</a>
</div>
<div className="text-center md:text-left hover-trigger group cursor-pointer">
<span className="block text-xs font-bold uppercase tracking-widest text-brand-stone mb-2">Whatsapp</span>
<a className="text-2xl font-serif italic group-hover:text-brand-stone transition-colors" href="#">+961 70 000 000</a>
</div>
<div className="text-center md:text-left hover-trigger group cursor-pointer">
<span className="block text-xs font-bold uppercase tracking-widest text-brand-stone mb-2">Visit</span>
<p className="text-2xl font-serif italic">Beirut, Lebanon</p>
</div>
</div>
<div className="mt-auto pt-24 flex justify-between items-end">
<p className="text-xs text-brand-stone uppercase tracking-widest">© 2026 Ose_Realty</p>
<div className="flex gap-4">
<a className="hover-trigger w-10 h-10 border border-brand-black/20 rounded-full flex items-center justify-center hover:bg-brand-black hover:text-white transition-all" href="#">IG</a>
<a className="hover-trigger w-10 h-10 border border-brand-black/20 rounded-full flex items-center justify-center hover:bg-brand-black hover:text-white transition-all" href="#">LI</a>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
