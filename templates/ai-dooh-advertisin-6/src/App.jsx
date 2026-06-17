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
screens: {
'md': '768px',
},
colors: {
teal: {
DEFAULT: '#008080',
dark: '#006666',
},
navy: {
DEFAULT: '#001F3F',
light: '#022b52',
},
emerald: {
DEFAULT: '#28A745',
dark: '#1E7E34',
},
slate: {
50: '#F8FAFC',
}
},
fontFamily: {
inter: ['Inter', 'sans-serif'],
roboto: ['Roboto', 'sans-serif'],
},
backgroundImage: {
'hero-pattern': "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670&auto=format&fit=crop')",
}
}
}
}



        // Init AOS
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });

        // Simple Snapshot Slideshow
        const slides = document.querySelectorAll('.snapshot-slide');
        let currentSlide = 0;

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 glass h-[55px] md:h-[70px] flex items-center">
<div className="max-w-[1280px] w-full mx-auto px-6 flex items-center justify-between">

<a className="flex items-center gap-3 md:gap-4 group" href="#">
<div className="relative h-8 md:h-10 w-auto flex-shrink-0">
<img alt="Commuter Interactive Logo" className="shadow-teal/20 w-auto h-full object-contain rounded-lg shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b509263-c499-4d76-bbc7-385fbb5b2f94_320w.png?w=800&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<span className="font-inter font-bold text-white leading-none tracking-tight text-base md:text-lg">COMMUTER</span>
<span className="font-inter text-[8px] md:text-[10px] text-teal tracking-[0.2em] font-medium">INTERACTIVE</span>
</div>
</a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
<a className="hover:text-emerald transition-colors" href="#mission">Why Us</a>
<a className="hover:text-emerald transition-colors" href="#solution">Solution</a>
<a className="hover:text-emerald transition-colors" href="#tech">Tech</a>
<a className="hover:text-emerald transition-colors" href="#audience">Audience</a>
<a className="hover:text-emerald transition-colors" href="#ecosystem">Ecosystem</a>
<a className="px-5 py-2 rounded-lg bg-emerald text-white hover:bg-emerald-dark hover:shadow-lg hover:shadow-emerald/20 transition-all transform hover:scale-105 active:scale-95 duration-200" href="#contact">
                    Schedule Demo
                </a>
</div>

<button className="md:hidden text-white hover:text-emerald p-2" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-24 px-8" id="mobile-menu">
<a className="text-xl font-medium text-white py-4 border-b border-white/10 mobile-link" href="#mission">Why Us</a>
<a className="text-xl font-medium text-white py-4 border-b border-white/10 mobile-link" href="#solution">Solution</a>
<a className="text-xl font-medium text-white py-4 border-b border-white/10 mobile-link" href="#tech">Tech</a>
<a className="text-xl font-medium text-white py-4 border-b border-white/10 mobile-link" href="#audience">Audience</a>
<a className="text-xl font-medium text-white py-4 border-b border-white/10 mobile-link" href="#ecosystem">Ecosystem</a>
<a className="mt-8 w-full py-4 rounded-xl bg-emerald text-white text-center font-bold text-lg mobile-link" href="#contact">
            Schedule Demo
        </a>
<button className="absolute top-4 right-6 text-white/50 hover:text-white" id="close-menu-btn">
<iconify-icon icon="lucide:x" width="32"></iconify-icon>
</button>
</div>

<header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-[55px] md:pt-[70px]">

<div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 aos-init aos-animate" data-aos="zoom-out" data-aos-duration="2000"></div>
<div className="absolute inset-0 bg-gradient-to-b from-teal/40 via-navy/90 to-navy md:from-teal/80"></div>

<div className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/80 border border-emerald/50 text-emerald text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 backdrop-blur-md aos-init aos-animate" data-aos="fade-down">
<iconify-icon icon="lucide:cpu" width="14"></iconify-icon>
                AI-Powered DOOH Intelligence
            </div>
<h1 className="font-inter text-4xl md:text-7xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-[1.1] drop-shadow-2xl aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
<span className="hidden md:inline">Leading Smart AI Digital Advertising in</span>
<span className="md:hidden">Leading Smart AI<br/>Digital Advertising</span>
<br className="hidden md:block"/>
<span className="text-gradient block md:inline mt-2 md:mt-0">Strategic Out-of-Home Environments</span>
</h1>
<p className="font-roboto text-base md:text-2xl text-slate-300 italic font-light max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
<span className="md:hidden">"We power foot traffic—from pickup to mall doors."</span>
<span className="hidden md:inline">"We don't follow foot traffic, we power it—from the pickup point to the mall doors."</span>
</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
<a className="w-full md:w-auto px-8 py-4 rounded-xl md:rounded-lg bg-emerald text-white font-medium hover:bg-emerald-dark hover:shadow-lg hover:shadow-emerald/30 transition-all flex items-center justify-center gap-2 group border border-transparent min-h-[50px]" href="#contact">
                    Schedule Demo
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-4 rounded-xl md:rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm min-h-[50px]" href="#ecosystem">
                    View Ecosystem
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-emerald/70 hidden md:block">
<iconify-icon icon="lucide:mouse" width="28"></iconify-icon>
</div>
</header>

<section className="py-16 md:py-24 relative overflow-hidden bg-navy" id="mission">
<div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
<div className="aos-init" data-aos="fade-right">
<h2 className="font-inter text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">Why We Exist</h2>
<p className="text-lg md:text-xl text-emerald font-medium mb-8">
<span className="md:hidden">Transforming Spaces &amp; Driving Revenue</span>
<span className="hidden md:inline">Our Mission: Transforming Spaces, Shaping Communities &amp; Driving Revenue</span>
</p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center text-teal shrink-0 border border-teal/30 group-hover:bg-emerald/20 group-hover:text-emerald group-hover:border-emerald transition-all">
<iconify-icon icon="lucide:settings-2" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-semibold text-lg">Custom Integration</h3>
<p className="text-slate-400 text-sm mt-1 md:hidden">Tailored for commuter journeys.</p>
<p className="text-slate-400 text-sm mt-1 hidden md:block">Tailored solutions that fit seamlessly into the commuter's daily journey.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center text-teal shrink-0 border border-teal/30 group-hover:bg-emerald/20 group-hover:text-emerald group-hover:border-emerald transition-all">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-semibold text-lg">Real-Time Content</h3>
<p className="text-slate-400 text-sm mt-1 md:hidden">AI adapting to location and time.</p>
<p className="text-slate-400 text-sm mt-1 hidden md:block">Dynamic delivery powered by AI adapting to location and time.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center text-teal shrink-0 border border-teal/30 group-hover:bg-emerald/20 group-hover:text-emerald group-hover:border-emerald transition-all">
<iconify-icon icon="lucide:bar-chart-3" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-semibold text-lg">Data-Driven Impact</h3>
<p className="text-slate-400 text-sm mt-1 md:hidden">Measurable ROI and analytics.</p>
<p className="text-slate-400 text-sm mt-1 hidden md:block">Measurable ROI with granular analytics proving network effectiveness.</p>
</div>
</div>
</div>
</div>
<div className="relative group aos-init order-first md:order-last" data-aos="fade-left">

<div className="absolute -inset-2 bg-gradient-to-r from-teal to-emerald rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-light aspect-[4/3] md:aspect-[4/3]">
<img alt="Innovative DOOH in action" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6877604-b2fb-49c5-8973-82ed3c968a37_1600w.png?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
<span className="text-xs font-bold text-emerald uppercase tracking-widest">Live Integration</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50/5 border-y border-white/5" id="solution">
<div className="max-w-[1280px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8 aos-init" data-aos="fade-up">
<div className="max-w-2xl">
<h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Our Solution</h2>
<p className="text-slate-400 text-sm md:text-base">Targeting commuters at every high-impact touchpoint of their daily migration.</p>
</div>
<div className="text-emerald font-medium text-xs md:text-sm uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
                    Areas of Focus
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">

<div className="glass-card p-6 rounded-xl flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0 group cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="0">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-teal md:mb-4 group-hover:bg-emerald group-hover:text-white transition-colors shadow-lg shadow-black/20 shrink-0">
<iconify-icon icon="lucide:beer" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 md:mb-2">Pub Ads</h3>
<p className="text-xs text-slate-400 md:hidden">Engage vibrant crowds.</p>
<div className="hidden md:block h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
<p className="text-xs text-slate-400">High dwell time &amp; social engagement.</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0 group cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="100">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-teal md:mb-4 group-hover:bg-emerald group-hover:text-white transition-colors shadow-lg shadow-black/20 shrink-0">
<iconify-icon icon="lucide:shopping-bag" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 md:mb-2">Mall Ads</h3>
<p className="text-xs text-slate-400 md:hidden">Point of sale intent.</p>
<div className="hidden md:block h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
<p className="text-xs text-slate-400">Purchase intent at point of sale.</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0 group cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-teal md:mb-4 group-hover:bg-emerald group-hover:text-white transition-colors shadow-lg shadow-black/20 shrink-0">
<iconify-icon icon="lucide:car-taxi-front" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 md:mb-2">Taxi Ride Ads</h3>
<p className="text-xs text-slate-400 md:hidden">Captive transit audience.</p>
<div className="hidden md:block h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
<p className="text-xs text-slate-400">Captive transit audience.</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0 group cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="300">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-teal md:mb-4 group-hover:bg-emerald group-hover:text-white transition-colors shadow-lg shadow-black/20 shrink-0">
<iconify-icon icon="lucide:utensils" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 md:mb-2">Restaurant Ads</h3>
<p className="text-xs text-slate-400 md:hidden">Digital menu integration.</p>
<div className="hidden md:block h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
<p className="text-xs text-slate-400">Digital menu &amp; lifestyle integration.</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0 group cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="400">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-teal md:mb-4 group-hover:bg-emerald group-hover:text-white transition-colors shadow-lg shadow-black/20 shrink-0">
<iconify-icon icon="lucide:store" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 md:mb-2">Retail Ads</h3>
<p className="text-xs text-slate-400 md:hidden">In-store displays.</p>
<div className="hidden md:block h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
<p className="text-xs text-slate-400">In-store displays driving awareness.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-navy relative" id="tech">
<div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
<div className="order-1 relative aos-init" data-aos="fade-right">

<div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-teal/20 aspect-video relative">
<img alt="Real-time audience analysis" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 right-4 bg-navy/80 backdrop-blur border border-emerald/50 rounded-lg p-3">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
<span className="text-[8px] md:text-[10px] font-bold text-white uppercase">Detection Active</span>
</div>
<div className="h-1 w-16 md:w-20 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-emerald"></div>
</div>
</div>
</div>
</div>
<div className="order-2 aos-init" data-aos="fade-left">
<h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">Tech Capability</h2>
<div className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden">
<div className="divide-y divide-white/5">
<div className="p-4 md:p-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<span className="text-white font-medium text-sm md:text-base">POPI Compliant Data Handling</span>
<iconify-icon className="text-emerald/60 md:text-emerald" icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<div className="p-4 md:p-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<span className="text-white font-medium text-sm md:text-base">Secure Cloud Backup</span>
<iconify-icon className="text-emerald/60 md:text-emerald" icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<div className="p-4 md:p-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<span className="text-white font-medium text-sm md:text-base">Remote Campaign Management</span>
<iconify-icon className="text-emerald/60 md:text-emerald" icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<div className="p-4 md:p-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<span className="text-white font-medium text-sm md:text-base">Precision Geo-Targeting</span>
<iconify-icon className="text-emerald/60 md:text-emerald" icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<div className="p-4 md:p-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<span className="text-white font-medium text-sm md:text-base">Real-Time Audience Analysis</span>
<iconify-icon className="text-emerald/60 md:text-emerald" icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-navy-light border-t border-white/5" id="audience">
<div className="max-w-[1280px] mx-auto px-6">
<h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 text-center aos-init" data-aos="fade-up">Audience Matrix</h2>
<p className="text-slate-400 text-sm md:text-base text-center mb-8 md:mb-12 max-w-2xl mx-auto aos-init" data-aos="fade-up" data-aos-delay="100">Optimized slots and reach profiles across our key environments.</p>

<div className="md:hidden aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="p-8 border border-teal/20 rounded-xl text-center bg-navy shadow-inner">
<iconify-icon className="text-emerald mb-4 opacity-75" icon="lucide:users" width="32"></iconify-icon>
<h3 className="text-white font-semibold mb-2">Detailed Audience Insights</h3>
<p className="text-slate-400 text-sm mb-4">Optimized profiles for Transit Hubs, Malls, Campuses, and Residential zones.</p>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald/50 text-emerald text-sm font-medium">
                        View full matrix on desktop
                    </div>
</div>
</div>

<div className="hidden md:block overflow-x-auto rounded-xl border border-white/10 shadow-2xl bg-navy aos-init" data-aos="fade-up" data-aos-delay="200">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-teal/20 text-emerald border-b border-white/10">
<th className="p-6 text-xs font-bold uppercase tracking-widest">Location Type</th>
<th className="p-6 text-xs font-bold uppercase tracking-widest">Audience Profile</th>
<th className="p-6 text-xs font-bold uppercase tracking-widest">Key Interests</th>
<th className="p-6 text-xs font-bold uppercase tracking-widest">Advertising Strengths</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm text-slate-300">
<tr className="group hover:bg-emerald/5 transition-colors">
<td className="p-6 font-medium text-white group-hover:text-emerald transition-colors">Transit Hubs (Taxi Ranks)</td>
<td className="p-6">Working class, students, daily travelers</td>
<td className="p-6">Retail, Finance, Education, Telco</td>
<td className="p-6 text-teal">High Volume / Dwell Time</td>
</tr>
<tr className="group hover:bg-emerald/5 transition-colors">
<td className="p-6 font-medium text-white group-hover:text-emerald transition-colors">Shopping Malls</td>
<td className="p-6">Shoppers with intent, families</td>
<td className="p-6">Fashion, Food, Tech, Entertainment</td>
<td className="p-6 text-teal">Conversion Proximity</td>
</tr>
<tr className="group hover:bg-emerald/5 transition-colors">
<td className="p-6 font-medium text-white group-hover:text-emerald transition-colors">Universities / Campus</td>
<td className="p-6">Gen Z, Early Adopters</td>
<td className="p-6">Tech, Fast Food, Events, Streaming</td>
<td className="p-6 text-teal">Targeted Demographics</td>
</tr>
<tr className="group hover:bg-emerald/5 transition-colors">
<td className="p-6 font-medium text-white group-hover:text-emerald transition-colors">CBD &amp; Residential</td>
<td className="p-6">Professionals, Residents</td>
<td className="p-6">Banking, Insurance, Property, Autos</td>
<td className="p-6 text-teal">Daily Routine Recall</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-teal-dark/20 relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-contain bg-center bg-no-repeat grayscale"></div>
<div className="max-w-[1280px] mx-auto px-6 relative z-10">
<h2 className="font-inter text-3xl font-bold text-white mb-12 md:mb-16 text-center">Network Scale &amp; Reach</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

<div className="glass-card mobile-outline-stat rounded-full aspect-auto md:aspect-square flex flex-row md:flex-col items-center justify-between md:justify-center p-6 md:p-4 relative group aos-init" data-aos="zoom-in">
<div className="text-3xl md:text-5xl font-bold text-white mb-0 md:mb-2 font-inter group-hover:text-emerald transition-colors">9</div>
<div className="text-xs font-bold text-teal uppercase tracking-widest text-center">Provinces</div>
</div>

<div className="glass-card mobile-outline-stat rounded-full aspect-auto md:aspect-square flex flex-row md:flex-col items-center justify-between md:justify-center p-6 md:p-4 relative group aos-init" data-aos="zoom-in" data-aos-delay="100">
<div className="text-3xl md:text-5xl font-bold text-white mb-0 md:mb-2 font-inter group-hover:text-emerald transition-colors">1M+</div>
<div className="text-xs font-bold text-teal uppercase tracking-widest text-center">Commuters</div>
</div>

<div className="glass-card mobile-outline-stat rounded-full aspect-auto md:aspect-square flex flex-row md:flex-col items-center justify-between md:justify-center p-6 md:p-4 relative group aos-init" data-aos="zoom-in" data-aos-delay="200">
<div className="text-3xl md:text-5xl font-bold text-white mb-0 md:mb-2 font-inter group-hover:text-emerald transition-colors">5K</div>
<div className="text-xs font-bold text-teal uppercase tracking-widest text-center">Taxis</div>
</div>

<div className="glass-card mobile-outline-stat rounded-full aspect-auto md:aspect-square flex flex-row md:flex-col items-center justify-between md:justify-center p-6 md:p-4 relative group aos-init" data-aos="zoom-in" data-aos-delay="300">
<div className="text-3xl md:text-5xl font-bold text-white mb-0 md:mb-2 font-inter group-hover:text-emerald transition-colors">400</div>
<div className="text-xs font-bold text-teal uppercase tracking-widest text-center">Target Screens</div>
</div>
</div>
<div className="mt-12 md:mt-16 flex justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-white font-bold text-lg md:text-xl border border-white/30 px-4 py-2 rounded">SANTACO</div>
<div className="text-white font-bold text-lg md:text-xl border border-white/30 px-4 py-2 rounded">NTA</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-navy relative border-b border-white/5">
<div className="max-w-[1280px] mx-auto px-6">
<h2 className="font-inter text-3xl font-bold text-white mb-8 md:mb-12 text-center aos-init" data-aos="fade-up">Commuter Snapshots</h2>
<div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 aos-init" data-aos="fade-up" id="snapshot-container">

<div className="snapshot-slide active">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e364bf3e-363f-46b1-b73f-a880d52044da_1600w.png?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
<h3 className="text-lg md:text-2xl text-white font-bold">Taxi Rank Dominance</h3>
<p className="text-emerald text-sm md:text-base font-medium">Nationwide High Traffic Zones</p>
</div>
</div>

<div className="snapshot-slide">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf3f8749-dca4-4a37-a5fd-549205d9aa1e_1600w.png?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
<h3 className="text-lg md:text-2xl text-white font-bold">The Commuter Experience</h3>
<p className="text-emerald text-sm md:text-base font-medium">Smarter &amp; Trackable</p>
</div>
</div>

<div className="snapshot-slide">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eebafd3f-1e9e-475d-9c96-9e69ef75ef96_1600w.png?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
<h3 className="text-lg md:text-2xl text-white font-bold">Digital Network</h3>
<p className="text-emerald text-sm md:text-base font-medium">Seamless Integration</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#050505]" id="ecosystem">
<div className="max-w-[1280px] mx-auto px-6">
<div className="mb-12 md:mb-16 text-center aos-init" data-aos="fade-up">
<h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4">Hybrid Media Ecosystem</h2>
<p className="text-slate-400 text-sm md:text-base">Comprehensive coverage across the entire commuter journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-emerald/50 transition-all duration-300 aos-init" data-aos="fade-up">
<div className="h-48 md:h-56 overflow-hidden bg-teal/10 relative">
<img className="group-hover:scale-110 transition-transform duration-700 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24831a5f-b811-4539-a063-1a502a4a60f4_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg md:text-xl text-white font-bold mb-2">Taxi Screens</h3>
<p className="text-sm text-slate-400 mb-4">Captive commuter engagement inside minibus taxis.</p>
<div className="flex items-center gap-2 text-xs text-emerald uppercase tracking-widest font-bold">
<iconify-icon icon="lucide:wifi"></iconify-icon> Connected
                        </div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-emerald/50 transition-all duration-300 aos-init" data-aos="fade-up" data-aos-delay="100">
<div className="h-48 md:h-56 overflow-hidden bg-teal/10 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cae7d432-0cf7-4f1d-a7a9-61804bcd0138_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg md:text-xl text-white font-bold mb-2">Mall Screens</h3>
<p className="text-sm text-slate-400 mb-4">High-impact billboards at point-of-purchase.</p>
<div className="flex items-center gap-2 text-xs text-emerald uppercase tracking-widest font-bold">
<iconify-icon icon="lucide:shopping-cart"></iconify-icon> Conversion
                        </div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-emerald/50 transition-all duration-300 aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="h-48 md:h-56 overflow-hidden bg-teal/10 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2ac4ddf-b7f9-47bf-af09-a02d9a221bc0_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg md:text-xl text-white font-bold mb-2">Campus Digital</h3>
<p className="text-sm text-slate-400 mb-4">Youth-targeted education hubs &amp; student centers.</p>
<div className="flex items-center gap-2 text-xs text-emerald uppercase tracking-widest font-bold">
<iconify-icon icon="lucide:graduation-cap"></iconify-icon> Gen Z
                        </div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-emerald/50 transition-all duration-300 aos-init" data-aos="fade-up">
<div className="h-48 md:h-56 overflow-hidden bg-teal/10 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c13eb849-d5f4-45b4-a1b3-b076657a0f51_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg md:text-xl text-white font-bold mb-2">CBD Billboards</h3>
<p className="text-sm text-slate-400 mb-4">High-traffic professional zones and urban centers.</p>
<div className="flex items-center gap-2 text-xs text-emerald uppercase tracking-widest font-bold">
<iconify-icon icon="lucide:briefcase"></iconify-icon> Professional
                        </div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-emerald/50 transition-all duration-300 aos-init" data-aos="fade-up" data-aos-delay="100">
<div className="h-48 md:h-56 overflow-hidden bg-teal/10 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/baea7625-56b1-483a-b347-04202b8c03be_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg md:text-xl text-white font-bold mb-2">Lobby &amp; Office</h3>
<p className="text-sm text-slate-400 mb-4">Daily routine integration in elevators and receptions.</p>
<div className="flex items-center gap-2 text-xs text-emerald uppercase tracking-widest font-bold">
<iconify-icon icon="lucide:building"></iconify-icon> Lifestyle
                        </div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-emerald/50 transition-all duration-300 aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="h-48 md:h-56 overflow-hidden bg-teal/10 relative flex items-center justify-center">
<iconify-icon className="text-teal/50" icon="lucide:monitor-smartphone" width="64"></iconify-icon>
</div>
<div className="p-6">
<h3 className="text-lg md:text-xl text-white font-bold mb-2">Hardware Specs</h3>
<p className="text-sm text-slate-400 mb-4">SLDP 43", LED Posters, &amp; Open AI TV Integration.</p>
<div className="flex items-center gap-2 text-xs text-emerald uppercase tracking-widest font-bold">
<iconify-icon icon="lucide:cpu"></iconify-icon> Advanced
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-navy-light overflow-hidden">
<div className="max-w-[1280px] mx-auto px-6">
<h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-2 text-center aos-init" data-aos="fade-up">Seamless Integrated Journey</h2>
<p className="text-slate-400 text-sm md:text-base text-center mb-12 md:mb-16 aos-init" data-aos="fade-up">Reach Shoppers at Any Touchpoint</p>

<div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 z-10">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 -z-10"></div>

<div className="group relative bg-navy border border-white/10 p-6 rounded-xl w-full lg:w-64 hover:-translate-y-2 transition-transform duration-300 aos-init" data-aos="fade-up" data-aos-delay="0">
<div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center mb-4 shadow-lg shadow-teal/30">
<iconify-icon icon="lucide:bus" width="24"></iconify-icon>
</div>
<h3 className="text-white font-bold mb-2">Taxi Phase</h3>
<p className="text-xs text-slate-400">High frequency exposure during commute.</p>
</div>

<iconify-icon className="hidden lg:block text-emerald/50" icon="lucide:arrow-right" width="32"></iconify-icon>
<iconify-icon className="lg:hidden text-emerald/50 opacity-50" icon="lucide:arrow-down" width="32"></iconify-icon>

<div className="group relative bg-navy border border-white/10 p-6 rounded-xl w-full lg:w-64 hover:-translate-y-2 transition-transform duration-300 aos-init" data-aos="fade-up" data-aos-delay="100">
<div className="w-12 h-12 rounded-full bg-teal-dark text-white flex items-center justify-center mb-4 border border-teal/50">
<iconify-icon icon="lucide:graduation-cap" width="24"></iconify-icon>
</div>
<h3 className="text-white font-bold mb-2">College/CBD</h3>
<p className="text-xs text-slate-400">Targeted demographic reinforcement.</p>
</div>

<iconify-icon className="hidden lg:block text-emerald/50" icon="lucide:arrow-right" width="32"></iconify-icon>
<iconify-icon className="lg:hidden text-emerald/50 opacity-50" icon="lucide:arrow-down" width="32"></iconify-icon>

<div className="group relative bg-navy border border-white/10 p-6 rounded-xl w-full lg:w-64 hover:-translate-y-2 transition-transform duration-300 aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="w-12 h-12 rounded-full bg-teal-dark text-white flex items-center justify-center mb-4 border border-teal/50">
<iconify-icon icon="lucide:shopping-bag" width="24"></iconify-icon>
</div>
<h3 className="text-white font-bold mb-2">Mall/POS</h3>
<p className="text-xs text-slate-400">Decision point proximity.</p>
</div>

<iconify-icon className="hidden lg:block text-emerald/50" icon="lucide:arrow-right" width="32"></iconify-icon>
<iconify-icon className="lg:hidden text-emerald/50 opacity-50" icon="lucide:arrow-down" width="32"></iconify-icon>

<div className="group relative bg-gradient-to-br from-emerald/20 to-navy border border-emerald/50 p-6 rounded-xl w-full lg:w-64 hover:-translate-y-2 transition-transform duration-300 aos-init" data-aos="fade-up" data-aos-delay="300">
<div className="w-12 h-12 rounded-full bg-emerald text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald/50">
<iconify-icon icon="lucide:check" width="24"></iconify-icon>
</div>
<h3 className="text-white font-bold mb-2">Outcome</h3>
<p className="text-xs text-slate-400">Conversion &amp; measurable lift.</p>
<div className="hidden md:block absolute -top-12 left-0 bg-emerald text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        ROI Delivered
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-navy border-t border-white/5 pt-16 md:pt-24 pb-12" id="contact">
<div className="max-w-[1280px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">

<div className="aos-init" data-aos="fade-up">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center">
<iconify-icon icon="lucide:network" width="20"></iconify-icon>
</div>
<span className="font-inter font-bold text-white tracking-tight">COMMUTER INTERACTIVE</span>
</div>
<p className="text-slate-400 mb-8 text-sm leading-relaxed">
                        Revolutionizing South African OOH advertising with AI-driven intelligence and seamless commuter integration.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
</div>
<div className="mt-8 space-y-2 text-xs text-slate-500 uppercase tracking-widest font-semibold">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald"></div> Nielsen Certified</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald"></div> POPI Compliant</div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald"></div> SANTACO Partner</div>
</div>
</div>

<div className="aos-init" data-aos="fade-up" data-aos-delay="100">
<h3 className="font-inter text-xl text-white font-bold mb-6">Get In Touch</h3>
<form className="space-y-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:py-4 text-white focus:outline-none focus:border-emerald transition-colors placeholder-white/20 text-sm md:text-base" placeholder="Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:py-4 text-white focus:outline-none focus:border-emerald transition-colors placeholder-white/20 text-sm md:text-base" placeholder="Email" type="email"/>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 md:py-4 text-white focus:outline-none focus:border-emerald transition-colors placeholder-white/20 text-sm md:text-base" placeholder="Message" rows="4"></textarea>
<button className="w-full py-3 md:py-4 bg-emerald text-white font-medium rounded-lg hover:bg-emerald-dark hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-emerald/20 text-base" type="button">
                            Send Message
                        </button>
</form>
</div>

<div className="aos-init" data-aos="fade-up" data-aos-delay="200">
<h3 className="font-inter text-xl text-white font-bold mb-6">Locations</h3>
<div className="bg-white/5 rounded-xl h-48 w-full mb-4 relative overflow-hidden flex items-center justify-center group">

<div className="absolute inset-0 bg-teal/20 mix-blend-overlay"></div>
<iconify-icon className="text-emerald animate-bounce" icon="lucide:map-pin" width="32"></iconify-icon>
<span className="absolute bottom-2 right-2 text-[10px] text-white/50 bg-black/50 px-2 rounded">Johannesburg HQ</span>
</div>
<p className="text-sm text-slate-400">Headquarters: Johannesburg, South Africa</p>
<p className="text-sm text-emerald mt-2">Active in 9 Provinces</p>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 text-center md:text-left">
<p>© 2025 Commuter Interactive (Pty) Ltd. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
