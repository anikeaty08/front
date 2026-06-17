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
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
colors: {
cream: '#E3DDD7',
surface: '#F2F0ED',
}
}
}
}



        // Slider Logic
        const slides = document.querySelectorAll('.slider-card');
        let currentSlide = 0;

        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.classList.remove('slide-active', 'slide-next', 'slide-prev');
                
                if (index === currentSlide) {
                    slide.classList.add('slide-active');
                } else if (index === (currentSlide + 1) % slides.length) {
                    slide.classList.add('slide-next');
                } else {
                    slide.classList.add('slide-prev'); // Simplified logic for demo
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
        }

        // Auto play
        setInterval(nextSlide, 4000);

        // Mobile Menu
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                menuToggle.querySelector('iconify-icon').setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                menuToggle.querySelector('iconify-icon').setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('translate-x-full');
                menuToggle.querySelector('iconify-icon').setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            });
        });

        // Sticky Nav Blur
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('py-4');
                nav.classList.remove('py-6');
            } else {
                nav.classList.add('py-6');
                nav.classList.remove('py-4');
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
      

<nav className="fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-6" id="navbar">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="w-9 h-9 bg-black text-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
<iconify-icon icon="solar:leaf-bold" width="18"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight group-hover:opacity-70 transition-opacity">Social Grow</span>
</a>

<div className="hidden md:flex items-center bg-white/50 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-white/40 shadow-sm gap-1">
<a className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all" href="#services">Services</a>
<a className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all" href="#work">Work</a>
<a className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all" href="#process">Process</a>
<a className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all group shadow-lg shadow-black/5" href="#contact">
                    Start Scaling
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[90] bg-[#E3DDD7] translate-x-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col justify-center items-center gap-6" id="mobile-menu">
<a className="text-3xl font-serif italic text-gray-900 hover:opacity-50 transition-opacity mobile-link" href="#services">Services</a>
<a className="text-3xl font-serif italic text-gray-900 hover:opacity-50 transition-opacity mobile-link" href="#work">Work</a>
<a className="text-3xl font-serif italic text-gray-900 hover:opacity-50 transition-opacity mobile-link" href="#process">Process</a>
<a className="text-3xl font-serif italic text-gray-900 hover:opacity-50 transition-opacity mobile-link" href="#pricing">Pricing</a>
<a className="mt-8 bg-black text-white px-8 py-3 rounded-full text-lg" href="#contact">Book a Call</a>
</div>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start z-10">
<div className="animate-enter flex items-center gap-2 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/50 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-wide text-gray-600">Taking new clients for Q4</span>
</div>
<h1 className="animate-enter delay-100 text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] text-gray-900 mb-8">
                    Make your brand <br/>
<span className="font-serif italic font-medium opacity-80">unmissable.</span>
</h1>
<p className="animate-enter delay-200 text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mb-10">
                    We combine algorithmic data with high-fidelity creative to help modern brands explode their reach and turn viewers into superfans.
                </p>
<div className="animate-enter delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="bg-black text-white px-8 py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-xl shadow-black/10">
                        View Case Studies
                        <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
<button className="bg-white/50 backdrop-blur-sm border border-white/60 text-gray-900 px-8 py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 hover:bg-white transition-all">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch Showreel
                    </button>
</div>
<div className="animate-enter delay-300 mt-12 flex items-center gap-6 text-sm font-medium text-gray-500">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-[#E3DDD7]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-[#E3DDD7]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-[#E3DDD7]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&amp;h=100&amp;fit=crop"/>
<div className="w-10 h-10 rounded-full border-2 border-[#E3DDD7] bg-white flex items-center justify-center text-xs text-gray-900 font-bold">+500</div>
</div>
<span>Brands trusted us</span>
</div>
</div>

<div className="relative flex justify-center lg:justify-end animate-enter delay-200 perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-orange-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
<div className="relative w-[320px] h-[640px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-white ring-1 ring-black/5 overflow-hidden z-20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-50"></div>

<div className="w-full h-full relative bg-gray-100" id="slider">

<div className="slider-card slide-active absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
<div className="absolute bottom-8 left-6 right-6 text-white">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"><iconify-icon icon="solar:bag-3-bold" width="14"></iconify-icon></div>
<span className="text-sm font-medium">Shop Now</span>
</div>
<p className="text-sm opacity-90 leading-relaxed">Summer collection is live. Get 20% off with code SOCIAL.</p>
</div>

<div className="absolute right-4 bottom-24 flex flex-col gap-4">
<div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white"><iconify-icon icon="solar:heart-bold" width="20"></iconify-icon></div>
<div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white"><iconify-icon icon="solar:chat-round-dots-bold" width="20"></iconify-icon></div>
<div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white"><iconify-icon icon="solar:share-bold" width="20"></iconify-icon></div>
</div>
</div>

<div className="slider-card slide-next absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
<div className="absolute bottom-8 left-6 right-6 text-white">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"><iconify-icon icon="solar:verified-check-bold" width="14"></iconify-icon></div>
<span className="text-sm font-medium">Tech Daily</span>
</div>
<p className="text-sm opacity-90 leading-relaxed">The future of productivity is here. Swipe to learn more.</p>
</div>
</div>

<div className="slider-card slide-next absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
<div className="absolute bottom-8 left-6 right-6 text-white">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"><iconify-icon icon="solar:leaf-bold" width="14"></iconify-icon></div>
<span className="text-sm font-medium">Fresh Eats</span>
</div>
<p className="text-sm opacity-90 leading-relaxed">Healthy never tasted so good. Order now.</p>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform" onclick="prevSlide()"><iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon></button>
<button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform" onclick="nextSlide()"><iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon></button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto mt-24 border-t border-black/5 pt-10">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">Powering growth for</p>
<div className="flex flex-wrap items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="simple-icons:nike" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:spotify" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:netflix" width="70"></iconify-icon>
<iconify-icon icon="simple-icons:shopify" width="80"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Complete <span className="font-serif italic font-medium">social</span> coverage</h2>
<p className="text-gray-600 max-w-sm">We handle everything from ideation to execution.</p>
</div>
<a className="group flex items-center text-sm font-semibold border-b border-black pb-0.5 hover:opacity-70 transition-opacity" href="#">
                    View all capabilities
                    <iconify-icon className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-[2rem] hover:bg-white transition-colors duration-300 group">
<div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:camera-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight mb-3">Content Production</h3>
<p className="text-sm text-gray-600 leading-relaxed">High-end video and static assets tailored to stop the scroll. We shoot, edit, and optimize for every platform.</p>
</div>

<div className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-[2rem] hover:bg-white transition-colors duration-300 group">
<div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight mb-3">Creator Management</h3>
<p className="text-sm text-gray-600 leading-relaxed">We source and manage 500+ vetted creators to produce authentic UGC that converts viewers into buyers.</p>
</div>

<div className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-[2rem] hover:bg-white transition-colors duration-300 group">
<div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:chart-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight mb-3">Paid Acquisition</h3>
<p className="text-sm text-gray-600 leading-relaxed">Data-driven paid strategies on Meta and TikTok. We scale what works and cut what doesn't, instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="work">
<div className="max-w-7xl mx-auto space-y-32">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center group">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-black"></span>
<span className="text-xs font-semibold uppercase tracking-wide">Client Results</span>
</div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[0.95] mb-6">
                        Scaling Glowhaus to <br/> <span className="font-serif italic text-gray-500 group-hover:text-black transition-colors">market leader.</span>
</h3>
<p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        We revitalized their organic presence with a Reels-first strategy, resulting in a massive uptake in engagement and direct sales.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
<div>
<p className="text-4xl font-semibold tracking-tight">3.5x</p>
<p className="text-sm text-gray-500 mt-1">ROAS</p>
</div>
<div>
<p className="text-4xl font-semibold tracking-tight">1.2M</p>
<p className="text-sm text-gray-500 mt-1">Organic Reach</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
<img alt="Glowhaus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center group">
<div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
<img alt="Fashion Brand" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-black"></span>
<span className="text-xs font-semibold uppercase tracking-wide">Client Results</span>
</div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[0.95] mb-6">
                        Launching Vesper's <br/> <span className="font-serif italic text-gray-500 group-hover:text-black transition-colors">summer drop.</span>
</h3>
<p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        A coordinated influencer campaign across TikTok and Instagram created hype that sold out the collection in 48 hours.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
<div>
<p className="text-4xl font-semibold tracking-tight">Sold Out</p>
<p className="text-sm text-gray-500 mt-1">In 48 Hours</p>
</div>
<div>
<p className="text-4xl font-semibold tracking-tight">45K</p>
<p className="text-sm text-gray-500 mt-1">New Followers</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface/50 border-y border-white/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Why brands choose <span className="font-serif italic">Social Grow</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

<div className="p-8 md:p-12 rounded-[2rem] bg-[#E3DDD7]/50 border border-transparent opacity-70">
<h3 className="text-xl font-semibold text-gray-500 mb-8 flex items-center gap-2">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Other Agencies
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-500"><iconify-icon className="mt-1 shrink-0" icon="solar:minus-circle-linear"></iconify-icon> Generic templates &amp; stock photos</li>
<li className="flex items-start gap-3 text-gray-500"><iconify-icon className="mt-1 shrink-0" icon="solar:minus-circle-linear"></iconify-icon> Slow monthly reporting cycles</li>
<li className="flex items-start gap-3 text-gray-500"><iconify-icon className="mt-1 shrink-0" icon="solar:minus-circle-linear"></iconify-icon> Long-term locked contracts</li>
<li className="flex items-start gap-3 text-gray-500"><iconify-icon className="mt-1 shrink-0" icon="solar:minus-circle-linear"></iconify-icon> Focus on vanity metrics (likes)</li>
</ul>
</div>

<div className="p-8 md:p-12 rounded-[2rem] bg-white shadow-xl shadow-gray-900/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
<h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Social Grow
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-900 font-medium"><iconify-icon className="mt-1 shrink-0 text-black" icon="solar:check-circle-linear"></iconify-icon> Bespoke, high-fidelity production</li>
<li className="flex items-start gap-3 text-gray-900 font-medium"><iconify-icon className="mt-1 shrink-0 text-black" icon="solar:check-circle-linear"></iconify-icon> Real-time dashboards &amp; insights</li>
<li className="flex items-start gap-3 text-gray-900 font-medium"><iconify-icon className="mt-1 shrink-0 text-black" icon="solar:check-circle-linear"></iconify-icon> Flexible, performance-based terms</li>
<li className="flex items-start gap-3 text-gray-900 font-medium"><iconify-icon className="mt-1 shrink-0 text-black" icon="solar:check-circle-linear"></iconify-icon> Focus on revenue &amp; conversions</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-12 text-center">Frequently asked <span className="font-serif italic">questions</span></h2>
<div className="space-y-4">

<details className="group bg-white/40 border border-white/60 rounded-2xl open:bg-white transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-lg">
                    How quickly can we start?
                    <iconify-icon className="text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    We can typically kick off within 5-7 business days. This includes an initial strategy workshop, asset collection, and setting up your dedicated dashboard.
                </div>
</details>

<details className="group bg-white/40 border border-white/60 rounded-2xl open:bg-white transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-lg">
                    Do you handle community management?
                    <iconify-icon className="text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Yes. We believe engagement is a two-way street. Our team actively replies to comments, DMs, and engages with relevant conversations in your niche to build community.
                </div>
</details>

<details className="group bg-white/40 border border-white/60 rounded-2xl open:bg-white transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-lg">
                    What is your pricing model?
                    <iconify-icon className="text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    We offer a monthly retainer model that covers strategy, production, and management. Paid media spend is managed separately with a percentage-of-spend fee or fixed management fee.
                </div>
</details>
</div>
</section>

<footer className="px-6 pb-6">
<div className="max-w-7xl mx-auto bg-black rounded-[3rem] text-white p-10 md:p-24 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-50"></div>
<div className="relative z-10 flex flex-col items-center">
<iconify-icon className="text-gray-400 mb-8" icon="solar:stars-minimalistic-bold" width="48"></iconify-icon>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">
                    Ready to <span className="font-serif italic text-gray-300">grow?</span>
</h2>
<p className="text-gray-400 max-w-lg text-lg mb-10">
                    Stop posting into the void. Let's build a strategy that delivers measurable ROI and builds a loyal audience.
                </p>
<a className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-transform flex items-center gap-2" href="#contact">
                    Book Discovery Call
                    <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</a>
</div>
<div className="relative z-10 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
<p>© 2024 Social Grow Agency.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
