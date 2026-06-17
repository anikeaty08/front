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



  // Mobile menu toggle logic
  (function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggleBtn || !menu) return;

    const icon = toggleBtn.querySelector('iconify-icon');

    function openMenu() {
      menu.classList.remove('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'false');
      if (icon) icon.setAttribute('icon', 'solar:close-circle-linear');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.add('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'true');
      if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
      document.body.style.overflow = '';
    }

    function isOpen() {
      return !menu.classList.contains('opacity-0');
    }

    toggleBtn.addEventListener('click', () => {
      if (isOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) closeMenu();
    });
  })();



        // Simple Carousel Logic
        const cards = document.querySelectorAll('.slider-card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        const totalCards = cards.length;

        function showCard(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.remove('card-hidden');
                    card.classList.add('card-active');
                } else {
                    card.classList.add('card-hidden');
                    card.classList.remove('card-active');
                }
            });
        }

        function nextCard() {
            currentIndex = (currentIndex + 1) % totalCards;
            showCard(currentIndex);
        }

        function prevCard() {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            showCard(currentIndex);
        }

        nextBtn.addEventListener('click', () => {
            nextCard();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevCard();
            resetInterval();
        });

        let autoSlide = setInterval(nextCard, 4000);

        function resetInterval() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextCard, 4000);
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
      

<nav className="md:px-12 animate-enter w-full pt-6 pr-6 pb-6 pl-6 relative z-[500]">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">ZTS</div>
<span className="font-medium text-l tracking-tight">ZTS Electrical</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#safety">Safety</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#about">About</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<a className="flex items-center gap-2 bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group" href="#contact">
        Get a Quote
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:bolt-linear" width="16"></iconify-icon>
</a>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-white opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="#about">About</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="#services">Services</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="#contact">Contact</a>
</div>


<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-30">
<iconify-icon className="text-gray-600" icon="solar:shield-check-bold" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-20">
<iconify-icon className="text-gray-600" icon="solar:bolt-circle-bold" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-10">
<iconify-icon className="text-gray-600" icon="solar:document-add-bold" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium text-gray-500 tracking-wide uppercase">ISO &amp; SABS Compliant</span>
</div>

<h1 className="animate-enter delay-200 text-6xl md:text-7xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                    Comprehensive <br/>
<span className="font-serif italic font-medium">electrical solutions.</span>
</h1>

<p className="animate-enter delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
                    ZTS Electrical (Pty) Ltd offers safe, reliable installation, maintenance, and generator services across Gauteng. Registered &amp; certified experts.
                </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<a className="bg-black text-white text-base px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-gray-200" href="#contact">
                        Request Service
                        <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<a className="px-6 py-4 text-gray-600 font-medium hover:text-black flex items-center gap-2 transition-colors" href="#services">
<iconify-icon icon="solar:list-arrow-down-linear" width="24"></iconify-icon>
                        View Scope of Work
                    </a>
</div>

<div className="animate-enter delay-500 mt-8 pt-8 border-t border-gray-200 flex gap-12">
<div>
<p className="text-3xl font-bold tracking-tight">100%</p>
<p className="text-sm text-gray-500 mt-1">SANS 10142 Compliant</p>
</div>
<div>
<p className="text-3xl font-bold tracking-tight">24/7</p>
<p className="text-sm text-gray-500 mt-1">Fault Detection</p>
</div>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100/40 via-yellow-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

<button className="absolute left-0 md:left-12 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-800 hover:scale-110 transition-transform cursor-pointer" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="absolute right-0 md:right-12 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black text-white rounded-full shadow-lg border border-gray-900 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>

<div className="relative w-[300px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-900/5 overflow-hidden transform rotate-0 hover:rotate-0 transition-transform duration-500 mr-auto ml-auto">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-30"></div>

<div className="absolute top-2 w-full px-5 flex justify-between text-[10px] font-semibold text-white/90 z-30 mix-blend-difference">
<span>ZTS</span>
<div className="flex gap-1">
<iconify-icon icon="solar:signal-linear"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-20">
</div>

<div className="w-full h-full relative bg-gray-900" id="sliderContainer" style={{}}>

<div className="slider-card card-active w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Electrical Panel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black flex items-center justify-center">
<span className="text-white text-[10px] font-bold">ZTS</span>
</div>
<span className="text-white text-sm font-medium drop-shadow-md">New Installations</span>
</div>

<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-white rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                COC Certified
                <iconify-icon icon="solar:verified-check-bold" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Generators" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1455474780654-e0e640393278?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black flex items-center justify-center">
<span className="text-white text-[10px] font-bold">ZTS</span>
</div>
<span className="text-white text-sm font-medium drop-shadow-md">Generators</span>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-yellow-500 rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-yellow-500 text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                 Sales &amp; Install
                <iconify-icon icon="solar:power-bold" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Infrastructure" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black flex items-center justify-center">
<span className="text-white text-[10px] font-bold">ZTS</span>
</div>
<span className="text-white text-sm font-medium drop-shadow-md">Infrastructure</span>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-orange-500 rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-orange-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                Urban &amp; Rural
                <iconify-icon icon="solar:city-bold" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="absolute right-4 bottom-32 flex flex-col gap-4 z-20">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-bold" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-circle-bold" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 lg:mt-32 animate-enter delay-500">
<p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Registered &amp; Compliant With</p>
<div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-60">
<div className="flex items-center gap-2 text-xl font-bold font-serif"><iconify-icon icon="solar:shield-bold"></iconify-icon> ECA MEMBER</div>
<div className="flex items-center gap-2 text-xl font-bold font-serif"><iconify-icon icon="solar:verified-check-bold"></iconify-icon> SANS 10142</div>
<div className="flex items-center gap-2 text-xl font-bold font-serif"><iconify-icon icon="solar:settings-bold"></iconify-icon> ISO STANDARDS</div>
<div className="flex items-center gap-2 text-xl font-bold font-serif"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> OHS ACT</div>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10" id="services">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-enter">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Full-service 
            <span className="font-playfair italic font-medium">diversified electrical.</span>
</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900/20 pb-1 hover:border-gray-900 transition-colors" href="#contact">
            Contact us
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Installations &amp; Refurbs</h3>
<p className="text-gray-600 leading-relaxed text-sm">Townhouses, flats, hotels, schools, and factory refurbishments. We handle new developments and upgrades.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:lightbulb-bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Generators &amp; Maintenance</h3>
<p className="text-gray-600 leading-relaxed text-sm">Sales, installation, and maintenance of generators. We keep your business running with a hassle-free process.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Infrastructure</h3>
<p className="text-gray-600 leading-relaxed text-sm">Overhead power lines (11kV to 132kV), underground cabling, streetlights, and rural electrification.</p>
</div>
</div>
</section>
<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 animate-enter delay-200">
<div className="order-2 lg:order-1 flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Specialized Equipment</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                Precision Cable <span className="font-playfair italic font-medium">Fault Detection</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                ZTS Electrical utilizes state-of-the-art Megger cable detection machines. We pin-point fault distance and depth, saving clients time and money. Our hydraulic 'cable spike' ensures safety before any work begins.
            </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">HV/LV</div>
<div className="text-sm font-medium text-gray-900">Capabilities</div>
<div className="text-xs text-gray-500 mt-1">Specialists in XLPE &amp; PILC</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">100%</div>
<div className="text-sm font-medium text-gray-900">Safety Record</div>
<div className="text-xs text-gray-500 mt-1">Dedicated Safety Officers</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Technician Working" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-5xl md:text-6xl italic tracking-tight opacity-90 drop-shadow-xl">Precision</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center animate-enter delay-300">
<div className="relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Electrical Panel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-serif text-6xl md:text-7xl italic tracking-tighter opacity-90 drop-shadow-xl">Compliance</span>
</div>
</div>
</div>
<div className="flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Certification</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                Certificates of <span className="font-playfair italic font-medium">Compliance (COC)</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                We contract qualified electrical technicians to perform audits, inspections, and tests. We issue COCs for new and existing installations, ensuring your building passes all tests per SANS 10142.
            </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">Pass</div>
<div className="text-sm font-medium text-gray-900">SABS Standards</div>
<div className="text-xs text-gray-500 mt-1">Quality materials used</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">Full</div>
<div className="text-sm font-medium text-gray-900">Remedial Work</div>
<div className="text-xs text-gray-500 mt-1">Competitive quotes</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32" id="about">
<div className="flex flex-col items-center text-center mb-20 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Our Process</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] max-w-2xl">
            We deliver on time and at the 
            <span className="font-playfair italic font-medium">right price.</span>
</h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 animate-enter delay-100">

<svg className="hidden md:block absolute top-12 left-0 w-full h-24 text-gray-900/10 pointer-events-none z-0" preserveaspectratio="none">
<path d="M150,20 C300,80 500,-40 650,20 C800,80 1000,-40 1150,20" fill="none" stroke="currentColor" stroke-dasharray="8 8" strokeWidth="2"></path>
</svg>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:clipboard-list-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Planning &amp; Quote</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">We read approved plans, work out bills of material, and provide competitive quotes.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-black text-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/20 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:bolt-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Installation</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Execution by trained staff using reputable SABS-approved materials.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Testing &amp; COC</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Rigorous testing, site cleanup, and issuing of the Certificate of Compliance.</p>
</div>
</div>
</section>
<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-enter">

<div className="bg-[#efeae5] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
<div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-10">
<iconify-icon icon="solar:quote-up-bold" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 leading-tight mb-8 relative z-10">
                Our vision is to be recognized as a leading player and competitor in the <span className="font-playfair italic font-medium">Electrical Contracting Industry.</span>
</h3>
<div className="flex items-center gap-3 mt-auto">
<div>
<p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Our Mission</p>
<p className="text-sm text-gray-500">Trustworthy relationships &amp; safe end products.</p>
</div>
</div>
</div>

<div className="rounded-[2.5rem] overflow-hidden min-h-[400px] relative group">
<img alt="Construction Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-6xl italic tracking-tight opacity-90 drop-shadow-lg transform -rotate-6">Quality</span>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Why Us</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Why choose ZTS Electrical 
            over <span className="font-playfair italic font-medium">others?</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 animate-enter delay-100">

<div className="bg-gray-100/50 rounded-[2rem] p-8 md:p-12">
<h3 className="text-2xl font-semibold text-gray-400 mb-8 flex items-center gap-3">
                General Contractors
            </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Uncertified labor usage</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Substandard materials</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>No dedicated safety officers</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-900/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
                ZTS Electrical (Pty) Ltd
            </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Aligned to International ISO Standards</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Dedicated Health &amp; Safety Officers</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>SABS Approved Materials Only</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Members of the ECA</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Training at approved institutions</span>
</li>
</ul>
</div>
</div>
</section>
<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Our Team</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Skilled professionals 
            for every <span className="font-playfair italic font-medium">project.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
<img alt="Technician" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900">Certified Electricians</h3>
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">Installation &amp; Maintenance</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
<img alt="Manager" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900">Safety Officers</h3>
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">Health &amp; Safety Compliance</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
<img alt="Specialist" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535136029863-4a3813f4112e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900">Cable Specialists</h3>
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">Fault Detection &amp; Repair</p>
</div>
</div>
</section>
<section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-24 relative">
<div className="absolute -top-12 right-0 md:-right-12 w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white rotate-12 shadow-xl z-10 hidden md:flex">
<iconify-icon icon="solar:question-circle-bold" width="32"></iconify-icon>
</div>
<div className="mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Questions</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mt-6">
            Frequently 
            Asked <span className="font-playfair italic font-medium">Questions</span>
</h2>
</div>
<div className="flex flex-col gap-4 animate-enter delay-100">

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                Do you offer Certificates of Compliance (COC)?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                Yes. For old, existing, and new installations, we contract qualified electrical technicians to inspect, test, and issue the COC upon successful completion in accordance with SANS 10142.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                What areas do you service?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                We operate throughout Gauteng. Our office is based in Katlehong, but we service townhouses, hotels, schools, and factories across the region.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                Do you handle generator installations?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                Absolutely. We sell, install, and maintain generators to keep your business or home running. We ensure a hassle-free process.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                Can you detect underground cable faults?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                Yes, we use state-of-the-art Megger cable detection machines that pin-point fault distance and depth. We also use hydraulic cable spikes for safety.
            </div>
</details>
</div>
</section>
<footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-24" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24 animate-enter">

<div className="bg-[#efeae5] rounded-[2.5rem] p-12 md:p-20 flex flex-col justify-center items-start text-left relative overflow-hidden">

<div className="absolute top-12 left-12 w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8 rotate-3">
<iconify-icon icon="solar:bolt-circle-bold" width="32"></iconify-icon>
</div>
<div className="mt-20">
<span className="bg-white/50 border border-white/50 text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Contact Us</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-8">
                    Get a quote for your 
                    <span className="font-playfair italic font-medium">electrical project.</span>
</h2>
<div className="space-y-2 mb-10">
<p className="text-gray-500 text-sm"><strong>Email:</strong> ztselectricalwork@gmail.com</p>
<p className="text-gray-500 text-sm"><strong>Alt Email:</strong> Rollanciam@webmail.co.za</p>
<p className="text-gray-500 text-sm"><strong>Cell:</strong> 082 062 9375 / 072 757 2999</p>
</div>
<a className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl" href="mailto:ztselectricalwork@gmail.com">
                    Email Us Now
                    <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="bg-[#efeae5] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center min-h-[500px] group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-60"></div>

<div className="relative w-[280px] rotate-[-12deg] group-hover:rotate-0 transition-all duration-700 ease-out transform group-hover:scale-105">
<div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/20">
<div className="bg-white rounded-[2.5rem] overflow-hidden relative aspect-[9/19] border border-gray-100">

<div className="p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">ZTS</div>
<div className="h-3 w-24 bg-gray-100 rounded-full"></div>
</div>
<div className="w-full aspect-square bg-gray-100 rounded-2xl mb-2 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&amp;w=400"/>
</div>
<div className="flex gap-2 mb-2">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><iconify-icon icon="solar:verified-check-bold"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-gray-100"></div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full"></div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-3 flex items-center gap-3 w-[90%] animate-pulse">
<div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-gray-500 font-semibold uppercase">Status</div>
<div className="text-xs font-bold text-gray-900">Installation Certified</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-900/10 pt-16 flex flex-col md:flex-row justify-between gap-12 md:gap-24 animate-enter delay-200">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6 cursor-pointer">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white font-bold text-xs">
                    ZTS
                </div>
<span className="font-bold text-lg tracking-tight">ZTS Electrical (Pty) Ltd</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                Reg No: 2018/387671/07
            </h4>
<address className="text-xs text-gray-500 mb-6 not-italic leading-relaxed">
                1702 Moleleki Street<br/>
                Katlehong Extension 2<br/>
                Gauteng, 1832
            </address>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Services</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#services">Installations</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#services">Maintenance</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#services">Generators</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#services">Cable Faults</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Company</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#about">About Us</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#safety">Safety</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#contact">Contact</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-gray-900/5 flex justify-between text-[10px] text-gray-400 font-medium">
<span>© 2025 ZTS Electrical (Pty) Ltd. All rights reserved.</span>
<span>Registered &amp; Certified.</span>
</div>
</footer>

    </>
  );
}
