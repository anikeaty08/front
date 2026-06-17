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
navy: { DEFAULT: '#0A1D37', 50: '#F0F4F8', 100: '#D9E2EC', 800: '#0A1D37', 900: '#050E1C' },
red: { DEFAULT: '#D32F2F', 600: '#D32F2F', 700: '#B71C1C' }
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(10, 29, 55, 0.05)',
'glow': '0 0 15px rgba(211, 47, 47, 0.3)'
}
}
}
}



        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slide-dot');
        const slideCount = document.getElementById('slide-count');

        function changeSlide(index) {
            // Remove active classes
            slides[currentSlide].classList.remove('active-slide');
            slides[currentSlide].classList.add('opacity-0', 'z-0');
            slides[currentSlide].classList.remove('opacity-100', 'z-10');
            
            dots[currentSlide].classList.remove('bg-red-600');
            dots[currentSlide].classList.add('bg-white/30');

            // Update index
            currentSlide = index;

            // Add active classes
            slides[currentSlide].classList.add('active-slide');
            slides[currentSlide].classList.remove('opacity-0', 'z-0');
            slides[currentSlide].classList.add('opacity-100', 'z-10');
            
            dots[currentSlide].classList.remove('bg-white/30');
            dots[currentSlide].classList.add('bg-red-600');

            // Update counter text
            slideCount.innerText = `0${currentSlide + 1} / 03`;
        }

        // Auto play
        setInterval(() => {
            let next = (currentSlide + 1) % slides.length;
            changeSlide(next);
        }, 6000);
    
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
      

<header className="fixed top-0 inset-x-0 z-50 glass-nav border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-navy text-white p-1.5 rounded-lg">
<iconify-icon icon="solar:scale-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter text-navy group-hover:opacity-80 transition-opacity">LEX<span className="text-red-600">IMMIGRATION</span></span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="text-navy hover:text-red-600 transition-colors" href="#">Home</a>
<a className="hover:text-navy transition-colors" href="#practice">Practice Areas</a>
<a className="hover:text-navy transition-colors" href="#team">Our Team</a>
<a className="hover:text-navy transition-colors" href="#news">News</a>
<a className="hover:text-navy transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2.5 px-5 rounded-md transition-all shadow-glow hover:shadow-lg flex items-center gap-2">
<span>Consult Now</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="md:hidden text-navy">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-navy pt-20">

<div className="relative w-full h-full" id="slider-container">

<div className="absolute inset-0 transition-opacity duration-1000 opacity-100 z-10 slide active-slide" data-index="0">
<div className="absolute inset-0 bg-navy/40 z-10 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent z-20"></div>
<img alt="Family Immigration" className="w-full h-full object-cover slide-image" src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-30 flex items-center">
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl fade-enter">
<span className="inline-block py-1 px-3 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-semibold tracking-wider mb-4 uppercase">Family Reunification</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                                Expert Family Immigration Services for Your <span className="text-red-500 font-serif italic">Loved Ones</span>.
                            </h1>
<p className="text-lg text-slate-200 font-light leading-relaxed mb-8 max-w-lg">
                                Navigating the complexities of green cards and visas to keep families together. We unite hearts across borders.
                            </p>
<div className="flex gap-4">
<button className="bg-white text-navy hover:bg-slate-100 py-3 px-6 rounded-md font-medium transition-colors text-sm">Start Application</button>
<button className="border border-white/30 text-white hover:bg-white/10 py-3 px-6 rounded-md font-medium transition-colors text-sm backdrop-blur-sm">Learn More</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 transition-opacity duration-1000 opacity-0 z-0 slide" data-index="1">
<div className="absolute inset-0 bg-navy/50 z-10 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent z-20"></div>
<img alt="Legal Appeal" className="w-full h-full object-cover slide-image" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-30 flex items-center">
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-wider mb-4 uppercase">Litigation &amp; Appeals</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                                Strategic Representation for Immigration <span className="text-red-500">Appeals</span>.
                            </h1>
<p className="text-lg text-slate-200 font-light leading-relaxed mb-8 max-w-lg">
                                Fighting for your second chance after a visa denial. We handle complex legal battles with precision and tenacity.
                            </p>
<div className="flex gap-4">
<button className="bg-red-600 text-white hover:bg-red-700 py-3 px-6 rounded-md font-medium transition-colors text-sm shadow-glow">Review Case</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 transition-opacity duration-1000 opacity-0 z-0 slide" data-index="2">
<div className="absolute inset-0 bg-navy/40 z-10 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent z-20"></div>
<img alt="Work Visa" className="w-full h-full object-cover slide-image" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-30 flex items-center">
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-semibold tracking-wider mb-4 uppercase">Corporate &amp; Education</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                                Global Opportunities: Work and <span className="text-red-500">Study Abroad</span>.
                            </h1>
<p className="text-lg text-slate-200 font-light leading-relaxed mb-8 max-w-lg">
                                Fast-track processing for H1-B, L1, and F1 visas to top global destinations. Expanding your professional horizon.
                            </p>
<div className="flex gap-4">
<button className="bg-white text-navy hover:bg-slate-100 py-3 px-6 rounded-md font-medium transition-colors text-sm">Check Eligibility</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-12 left-0 right-0 z-40">
<div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
<div className="flex gap-2">
<button className="slide-dot w-2.5 h-2.5 rounded-full bg-red-600 transition-all duration-300" onclick="changeSlide(0)"></button>
<button className="slide-dot w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white transition-all duration-300" onclick="changeSlide(1)"></button>
<button className="slide-dot w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white transition-all duration-300" onclick="changeSlide(2)"></button>
</div>
<div className="h-[1px] bg-white/20 w-32 hidden md:block"></div>
<p className="text-white/60 text-xs font-mono hidden md:block" id="slide-count">01 / 03</p>
</div>
</div>
</div>
</section>

<section className="relative z-40 -mt-16 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-lg p-6 shadow-soft border-b-4 border-red-600 flex items-center gap-4 group hover:-translate-y-1 transition-transform">
<div className="bg-red-50 p-3 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold text-navy tracking-tight">952+</h3>
<p className="text-sm text-slate-500 font-medium">Approved Appeals</p>
</div>
</div>

<div className="bg-white rounded-lg p-6 shadow-soft border-b-4 border-navy flex items-center gap-4 group hover:-translate-y-1 transition-transform">
<div className="bg-slate-100 p-3 rounded-full text-navy group-hover:bg-navy group-hover:text-white transition-colors">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold text-navy tracking-tight">12+</h3>
<p className="text-sm text-slate-500 font-medium">Years Experience</p>
</div>
</div>

<div className="bg-white rounded-lg p-6 shadow-soft border-b-4 border-navy flex items-center gap-4 group hover:-translate-y-1 transition-transform">
<div className="bg-slate-100 p-3 rounded-full text-navy group-hover:bg-navy group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold text-navy tracking-tight">50+</h3>
<p className="text-sm text-slate-500 font-medium">Expert Attorneys</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="practice">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-red-600 font-semibold tracking-wider text-xs uppercase mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-medium text-navy tracking-tight mb-4">Practice Areas</h2>
<p className="text-slate-500 max-w-xl mx-auto font-light">Comprehensive legal solutions tailored to your unique immigration journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-navy mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy mb-3 tracking-tight">Family Immigration</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">Reuniting families through adjustment of status, consular processing, and fiancée visas.</p>
<a className="text-sm font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-navy mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:briefcase-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy mb-3 tracking-tight">Employment Visa</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">EB-1, EB-2, H-1B, and PERM labor certifications for skilled professionals.</p>
<a className="text-sm font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-navy mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy mb-3 tracking-tight">Deportation Defense</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">Aggressive representation in removal proceedings and bond hearings.</p>
<a className="text-sm font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-navy mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:mortarboard-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy mb-3 tracking-tight">Student Visa</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">F-1 and M-1 visa assistance for international students seeking US education.</p>
<a className="text-sm font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-navy mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy mb-3 tracking-tight">Investment Visa</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">Strategic guidance for E-2 treaty investors and EB-5 immigrant investors.</p>
<a className="text-sm font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-navy mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy mb-3 tracking-tight">Asylum</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">Protection for those fleeing persecution in their home countries.</p>
<a className="text-sm font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-slate-200 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10">Trusted by Global Corporations</p>

<div className="flex justify-between items-center opacity-40 mb-24 grayscale px-4 flex-wrap gap-8 md:gap-0">
<iconify-icon icon="simple-icons:microsoft" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:google" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:uber" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:spotify" width="32"></iconify-icon>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-medium text-navy tracking-tight mb-4">Global Reach,<br/>Local Expertise.</h2>
<p className="text-slate-500 font-light mb-6">We represent clients from over 50 countries, leveraging our international network to facilitate seamless immigration processes.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon>
                            24/7 Multi-lingual Support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon>
                            Offices in NY, London, and Dubai
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon>
                            Virtual Consultations Available
                        </li>
</ul>
</div>
<div className="relative h-64 md:h-80 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#0A1D37 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-600 rounded-full shadow-glow animate-ping"></div>
<div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-navy rounded-full"></div>
<div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-navy rounded-full"></div>
<span className="relative z-10 text-slate-400 font-medium tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full shadow-sm">Global Service Map</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6" id="team">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium text-navy tracking-tight mb-2">Meet Our Attorneys</h2>
<p className="text-slate-500 font-light text-sm">Decades of combined experience at your service.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-navy hover:text-navy transition-colors bg-white">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-navy hover:text-navy transition-colors bg-white">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">

<div className="min-w-[280px] md:min-w-[320px] snap-center bg-white rounded-xl overflow-hidden border border-slate-200 group">
<div className="h-64 bg-slate-200 relative overflow-hidden">
<img alt="Attorney" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-navy">James Sterling</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Senior Partner</p>
<button className="text-red-600 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Profile <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center bg-white rounded-xl overflow-hidden border border-slate-200 group">
<div className="h-64 bg-slate-200 relative overflow-hidden">
<img alt="Attorney" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-navy">Sarah Jenkins</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Head of Appeals</p>
<button className="text-red-600 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Profile <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center bg-white rounded-xl overflow-hidden border border-slate-200 group">
<div className="h-64 bg-slate-200 relative overflow-hidden">
<img alt="Attorney" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-navy">Michael Ross</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Corporate Immigration</p>
<button className="text-red-600 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Profile <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center bg-white rounded-xl overflow-hidden border border-slate-200 group">
<div className="h-64 bg-slate-200 relative overflow-hidden">
<img alt="Attorney" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-navy">Elena Rodriguez</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Family Law Specialist</p>
<button className="text-red-600 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Profile <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6" id="news">
<div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-2">
<h2 className="text-2xl font-medium text-navy tracking-tight mb-6">Latest Immigration Insights</h2>
<div className="relative aspect-video bg-navy rounded-xl overflow-hidden group cursor-pointer shadow-lg">
<img alt="Video Thumb" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy to-transparent">
<span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1 block">Featured</span>
<h3 className="text-white text-xl font-medium">Immigrant Visas Paused: What You Need to Know</h3>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-navy">Recent Updates</h3>
<a className="text-red-600 text-sm hover:underline" href="#">View All</a>
</div>
<div className="space-y-6">

<a className="flex gap-4 group" href="#">
<div className="w-24 h-20 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs text-slate-400">Oct 24, 2023</span>
<h4 className="text-sm font-medium text-navy group-hover:text-red-600 transition-colors leading-snug mt-1">New H1-B Visa Rules Announced for 2024 Lottery</h4>
</div>
</a>

<a className="flex gap-4 group" href="#">
<div className="w-24 h-20 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs text-slate-400">Oct 18, 2023</span>
<h4 className="text-sm font-medium text-navy group-hover:text-red-600 transition-colors leading-snug mt-1">Understanding the Public Charge Rule Changes</h4>
</div>
</a>

<a className="flex gap-4 group" href="#">
<div className="w-24 h-20 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-xs text-slate-400">Oct 12, 2023</span>
<h4 className="text-sm font-medium text-navy group-hover:text-red-600 transition-colors leading-snug mt-1">Asylum Processing Times Update</h4>
</div>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-navy pt-20 pb-10 px-6 border-t border-slate-800">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<div className="bg-white text-navy p-1 rounded">
<iconify-icon icon="solar:scale-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-white">LEX<span className="text-red-600">IMMIGRATION</span></span>
</div>
<p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                        Manage your case on the go. Download our secure client portal app.
                    </p>
<div className="flex flex-col gap-3 mb-8">
<button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg flex items-center gap-3 w-fit border border-slate-700 transition-colors">
<iconify-icon icon="logos:apple" width="20"></iconify-icon>
<div className="text-left">
<p className="text-[10px] text-slate-400 uppercase leading-none">Download on the</p>
<p className="text-xs font-semibold">App Store</p>
</div>
</button>
<button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg flex items-center gap-3 w-fit border border-slate-700 transition-colors">
<iconify-icon icon="logos:google-play-icon" width="20"></iconify-icon>
<div className="text-left">
<p className="text-[10px] text-slate-400 uppercase leading-none">Get it on</p>
<p className="text-xs font-semibold">Google Play</p>
</div>
</button>
</div>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:facebook"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:twitter"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:linkedin"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:instagram"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:youtube"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li><a className="hover:text-red-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Disclaimer</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div id="contact">
<h4 className="text-white font-medium mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-600 mt-1" icon="solar:map-point-linear"></iconify-icon>
<span>100 Wall Street, 24th Floor<br/>New York, NY 10005</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-600" icon="solar:phone-calling-linear"></iconify-icon>
<span>+1 (212) 555-0199</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-600" icon="solar:letter-linear"></iconify-icon>
<span>contact@leximmigration.com</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Newsletter</h4>
<p className="text-slate-400 text-sm mb-4 font-light">Stay updated with the latest immigration news and policy changes.</p>
<form className="space-y-3">
<input className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-slate-500" placeholder="Email Address" type="email"/>
<button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2.5 rounded-md transition-colors shadow-glow">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light">
<p>© 2023 LexImmigration Law Firm. All rights reserved.</p>
<p className="mt-2 md:mt-0">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
</div>
</div>
</footer>



    </>
  );
}
