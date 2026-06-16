import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwindConfig = {
theme: {
extend: {
colors: {
'celtic-green': '#1B5E20',
'celtic-gold': '#C8A951',
'celtic-charcoal': '#2D2D2D',
'celtic-grey': '#6B6B6B',
'celtic-cream': '#F8F6F1',
}
}
}
};
tailwind.config = tailwindConfig;



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-nav-link, #mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.add('hidden');
    });
  });

  window.addEventListener('scroll', function() {
    const header = document.getElementById('navbar');
    if (window.scrollY > 80) {
      header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar" style={{background: 'rgba(27,94,32,0.97)', backdropFilter: 'blur(12px)'}}>
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
<a className="flex items-center gap-2.5 shrink-0" href="#">
<div className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center bg-white/15">
<svg fill="none" height="20" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
</div>
<div className="flex flex-col leading-none">
<span className="font-heading text-base md:text-lg font-bold tracking-tight text-white">Celtic Elevator</span>
<span className="text-[9px] md:text-[10px] font-medium tracking-widest uppercase text-white/50">Phoenix, AZ</span>
</div>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#areas">Areas We Serve</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-3">
<a className="font-heading text-xs md:text-sm font-bold px-4 py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:brightness-110 bg-celtic-gold text-celtic-charcoal" href="#contact">
        Schedule a Free Consultation
      </a>
<button className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" id="mobileMenuBtn">
<svg fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</nav>
<div className="lg:hidden hidden border-t border-white/10 px-4 pb-4" id="mobileMenu" style={{background: 'rgba(27,94,32,0.98)'}}>
<div className="flex flex-col gap-1 pt-2">
<a className="mobile-nav-link py-3 px-3 text-sm font-medium text-white/80 hover:bg-white/10 rounded-lg transition-colors" href="#services">Services</a>
<a className="mobile-nav-link py-3 px-3 text-sm font-medium text-white/80 hover:bg-white/10 rounded-lg transition-colors" href="#areas">Areas We Serve</a>
<a className="mobile-nav-link py-3 px-3 text-sm font-medium text-white/80 hover:bg-white/10 rounded-lg transition-colors" href="#about">About</a>
<a className="mobile-nav-link py-3 px-3 text-sm font-medium text-white/80 hover:bg-white/10 rounded-lg transition-colors" href="#reviews">Reviews</a>
<a className="mobile-nav-link py-3 px-3 text-sm font-medium text-white/80 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2" href="tel:6023692573">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        (602) 369-2573
      </a>
</div>
</div>
</header>

<section className="relative min-h-[92vh] md:min-h-screen flex items-center overflow-hidden">
<div className="absolute inset-0">
<img alt="Modern residential elevator interior with glass panels and stainless steel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0" style={{background: 'rgba(27,94,32,0.75)'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-28 w-full">
<div className="max-w-3xl">
<div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6 md:mb-8" style={{color: '#C8A951', border: '1px solid rgba(200,169,81,0.35)', background: 'rgba(200,169,81,0.1)'}}>
        Elevator Installation · Maintenance · Modernisation
      </div>
<h1 className="animate-fade-up delay-100 font-heading text-[28px] sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-white leading-[1.12] tracking-tight mb-5 md:mb-6">
        Phoenix's Trusted Elevator Contractor for Property Managers and Builders
      </h1>
<p className="animate-fade-up delay-200 text-base md:text-lg text-white/80 leading-relaxed mb-8 md:mb-10 max-w-2xl" style={{fontSize: 'clamp(15px, 2.5vw, 18px)'}}>
        700+ elevators installed. 4.9 star Google rating. 15+ years of expert service across Arizona and Nevada.
      </p>
<div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 md:gap-4 mb-14 md:mb-16">
<a className="text-center font-heading text-sm md:text-base font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:brightness-110 bg-celtic-gold text-celtic-charcoal flex items-center justify-center gap-2 min-h-[48px]" href="#contact">
          Schedule a Free Consultation
          <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
<a className="text-center font-heading text-sm md:text-base font-bold px-8 py-4 rounded-full border-2 border-white/50 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]" href="tel:6023692573">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Call (602) 369-2573
        </a>
</div>
<div className="animate-fade-up delay-400 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
<div className="flex items-center gap-3 rounded-xl px-4 py-3.5 border border-white/15" style={{background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)'}}>
<svg fill="none" height="22" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
<div>
<div className="font-heading text-lg md:text-xl font-bold text-white leading-none">700+</div>
<div className="text-[10px] md:text-xs text-white/60 mt-0.5">Elevators Installed</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl px-4 py-3.5 border border-white/15" style={{background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)'}}>
<svg fill="none" height="22" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<div>
<div className="font-heading text-lg md:text-xl font-bold text-white leading-none">4.9 ★</div>
<div className="text-[10px] md:text-xs text-white/60 mt-0.5">Google Rating</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl px-4 py-3.5 border border-white/15" style={{background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)'}}>
<svg fill="none" height="22" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
<div>
<div className="font-heading text-lg md:text-xl font-bold text-white leading-none">15+</div>
<div className="text-[10px] md:text-xs text-white/60 mt-0.5">Years Experience</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl px-4 py-3.5 border border-white/15" style={{background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)'}}>
<svg fill="none" height="22" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
<div>
<div className="font-heading text-lg md:text-xl font-bold text-white leading-none tracking-tight">AZ ROC</div>
<div className="text-[10px] md:text-xs text-white/60 mt-0.5">Licensed &amp; Insured</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14 lg:mb-16">
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-celtic-charcoal mb-4">
        Tired of Unreliable Elevator Service?
      </h2>
<p className="text-celtic-grey text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        If any of these sound familiar, it might be time for a better elevator partner.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
<div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07]">
<svg fill="none" height="24" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-3">Missed Maintenance Windows</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Your current provider cancels, reschedules, or sends unqualified techs. Your tenants are stuck waiting and your compliance deadlines slip.
        </p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07]">
<svg fill="none" height="24" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><line x1="9" x2="15" y1="12" y2="12"></line></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-3">Code Compliance Headaches</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Aging elevators fail inspections. You need a contractor who handles the full process, from assessment to passing inspection the first time.
        </p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07]">
<svg fill="none" height="24" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-3">Big Manufacturer Runaround</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          The national companies treat you like a ticket number. You need a local partner who picks up the phone and shows up when they say they will.
        </p>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-celtic-cream">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14 lg:mb-16">
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-celtic-charcoal mb-4">
        Why Choose Celtic Elevator
      </h2>
<p className="text-celtic-grey text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        National expertise with local accountability. After 15 years and 700+ installs, we know what matters.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
<div className="text-left md:text-left">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(200,169,81,0.15)'}}>
<svg fill="none" height="24" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><polyline points="9 11 12 14 22 4"></polyline></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-3">Owner-Operated Accountability</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Shaun Leary, NAEC-certified master technician and founder, is directly involved in every project. No call centre. No middleman. One phone call to the owner.
        </p>
</div>
<div className="text-left md:text-left">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(200,169,81,0.15)'}}>
<svg fill="none" height="24" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-3">First-Time Inspection Pass Rate</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Celtic elevators pass inspection the first time. No costly rework. No delays to your project timeline. No surprises on inspection day.
        </p>
</div>
<div className="text-left md:text-left">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background: 'rgba(200,169,81,0.15)'}}>
<svg fill="none" height="24" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-3">Local Phoenix Expertise</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          15+ years serving Arizona's unique climate and building codes. Warehoused parts for faster turnarounds. Same-week emergency response available.
        </p>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14 lg:mb-16">
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-celtic-charcoal mb-4">
        Our Services
      </h2>
<p className="text-celtic-grey text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Full-service elevator solutions for residential and commercial properties across Arizona and Nevada.
      </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="group bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07]">
<svg fill="none" height="24" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="7 15 12 20 17 15"></polyline><polyline points="7 9 12 4 17 9"></polyline></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-2">Elevator Installation</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Custom residential and commercial installations for new construction and retrofit projects. Full project management from specification to final inspection.
        </p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07]">
<svg fill="none" height="24" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-2">Elevator Maintenance</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Scheduled maintenance programmes that exceed manufacturer specifications. Full code compliance documentation included with every visit.
        </p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07]">
<svg fill="none" height="24" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-2">Elevator Repair</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Authorised warranty repair provider for major brands. Manufacturer-approved parts only. Emergency repair available same-week.
        </p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07]">
<svg fill="none" height="24" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-2">Elevator Modernisation</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Upgrade aging systems with new controls, aesthetics, and safety features. Full code compliance for older buildings and condominiums.
        </p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07]">
<svg fill="none" height="24" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-2">Safety Inspections</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Comprehensive safety evaluations for insurance, compliance, and resale. Detailed reports available same-day.
        </p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07]">
<svg fill="none" height="24" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-2">Accessibility Equipment</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
          Stairlifts, wheelchair lifts, porch lifts, and ADA compliance solutions for commercial and residential properties.
        </p>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-celtic-cream">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="mb-6">
<span className="font-heading text-6xl md:text-7xl leading-none font-bold" style={{color: '#C8A951'}}>"</span>
</div>
<blockquote className="font-heading text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold leading-snug tracking-tight text-celtic-charcoal mb-8">
      Shaun refused to work on our elevator because it didn't meet code. He put our safety above making a quick dollar. That kind of integrity is rare.
    </blockquote>
<div className="flex items-center justify-center gap-1 mb-3">
<svg fill="#C8A951" height="18" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="18" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="18" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="18" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="18" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="font-bold text-celtic-charcoal">Ron B.</p>
<p className="text-sm text-celtic-grey">Phoenix Customer</p>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14 lg:mb-16">
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-celtic-charcoal mb-4">
        How It Works
      </h2>
<p className="text-celtic-grey text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        From first call to finished job, here is exactly what to expect.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-10 relative max-w-4xl mx-auto">
<div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[2px] bg-gray-200"></div>
<div className="md:hidden absolute top-0 bottom-0 left-8 w-[2px] bg-gray-200"></div>
<div className="flex md:flex-col items-start md:items-center text-left md:text-center relative pl-16 md:pl-0">
<div className="absolute left-0 md:relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-white bg-celtic-green shadow-lg border-4 border-white z-10 shrink-0 md:mb-5">1</div>
<div className="md:mt-0">
<div className="flex md:justify-center mb-2">
<svg fill="none" height="22" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-2">Free Consultation</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>We assess your elevator needs, inspect the equipment, and provide a detailed recommendation. No charge, no obligation.</p>
</div>
</div>
<div className="flex md:flex-col items-start md:items-center text-left md:text-center relative pl-16 md:pl-0">
<div className="absolute left-0 md:relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-white bg-celtic-green shadow-lg border-4 border-white z-10 shrink-0 md:mb-5">2</div>
<div className="md:mt-0">
<div className="flex md:justify-center mb-2">
<svg fill="none" height="22" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-2">Custom Proposal</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>You receive a clear scope of work with transparent pricing. No hidden fees. No surprise change orders.</p>
</div>
</div>
<div className="flex md:flex-col items-start md:items-center text-left md:text-center relative pl-16 md:pl-0">
<div className="absolute left-0 md:relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-white bg-celtic-green shadow-lg border-4 border-white z-10 shrink-0 md:mb-5">3</div>
<div className="md:mt-0">
<div className="flex md:justify-center mb-2">
<svg fill="none" height="22" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<h3 className="font-heading text-lg md:text-xl font-bold text-celtic-charcoal mb-2">Expert Execution</h3>
<p className="text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>Our NAEC-certified team completes the work on schedule. We stay available for ongoing service and support.</p>
</div>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="font-heading text-sm md:text-base font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:brightness-110 bg-celtic-gold text-celtic-charcoal flex items-center gap-2 min-h-[48px]" href="#contact">
        Get Started Today
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-20 bg-celtic-green">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center">
<div className="font-heading text-4xl md:text-[48px] font-bold text-white mb-1 leading-none">700+</div>
<div className="text-white/70 text-sm">Elevators Installed</div>
</div>
<div className="text-center">
<div className="font-heading text-4xl md:text-[48px] font-bold text-white mb-1 leading-none">15+</div>
<div className="text-white/70 text-sm">Years in Business</div>
</div>
<div className="text-center">
<div className="font-heading text-4xl md:text-[48px] font-bold text-white mb-1 leading-none">4.9</div>
<div className="text-white/70 text-sm">Star Google Rating</div>
</div>
<div className="text-center">
<div className="font-heading text-4xl md:text-[48px] font-bold text-white mb-1 leading-none">100%</div>
<div className="text-white/70 text-sm">First-Time Inspection Pass</div>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14 lg:mb-16">
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-celtic-charcoal mb-4">
        What Our Clients Say
      </h2>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
<div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-celtic-grey leading-relaxed italic mb-6" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>"They are the best in the business. The owner Shaun is an expert in the field, and his attention to every detail sets them apart."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-celtic-green">L</div>
<div>
<div className="text-sm font-bold text-celtic-charcoal">Laurie V.</div>
<div className="text-xs text-celtic-grey">Google Review</div>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-celtic-grey leading-relaxed italic mb-6" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>"Celtic provided constant communication throughout the process. They set themselves apart from the competition. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-celtic-green">G</div>
<div>
<div className="text-sm font-bold text-celtic-charcoal">Google Review</div>
<div className="text-xs text-celtic-grey">Verified Customer</div>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="#C8A951" height="16" stroke="#C8A951" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-celtic-grey leading-relaxed italic mb-6" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>"One of the best companies I have ever dealt with. They truly care about quality and their service was impeccable."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-celtic-green">D</div>
<div>
<div className="text-sm font-bold text-celtic-charcoal">David M.</div>
<div className="text-xs text-celtic-grey">Google Review</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-celtic-cream" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
<div className="relative h-72 md:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl order-1 lg:order-1">
<img alt="Luxury residential elevator installation with glass panels" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-celtic-gold">
<svg fill="none" height="20" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-white">NAEC Certified</div>
<div className="text-xs text-white/70">National Association of Elevator Contractors</div>
</div>
</div>
</div>
</div>
<div className="order-2 lg:order-2">
<span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 text-celtic-gold">About Celtic Elevator</span>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-celtic-charcoal mb-6">
          Built on Integrity, Driven by Service
        </h2>
<div className="space-y-4 text-celtic-grey leading-relaxed" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>
<p>Celtic Elevator was founded in 2010 by <span className="font-semibold text-celtic-charcoal">Shaun Leary</span>, who grew up in a service-focused accessibility company run by his parents in Upstate New York.</p>
<p>After seeing the lack of service commitment to clients in Arizona, Shaun built Celtic Elevator to raise the standard. Today, the company employs 20+ people and has completed over 700 installations across Arizona and Nevada.</p>
<p>The team holds NAEC certifications and serves all of Arizona (Phoenix, Scottsdale, Tucson, Sedona, Flagstaff, Prescott) and Southern Nevada (Las Vegas, Henderson).</p>
</div>
<div className="flex flex-wrap gap-3 mt-8">
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-celtic-charcoal">
<svg fill="none" height="16" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            AZ ROC #270589
          </div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-celtic-charcoal">
<svg fill="none" height="16" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            NV ROC #82668
          </div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-celtic-charcoal">
<svg fill="none" height="16" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            20+ Employees
          </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-white" id="areas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14 lg:mb-16">
<span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 text-celtic-gold">Commercial Services</span>
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-celtic-charcoal mb-4">
        Who We Work With
      </h2>
<p className="text-celtic-grey text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Tailored elevator and accessibility solutions for every type of commercial client.
      </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<div className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-celtic-green/20 bg-white hover:shadow-lg transition-all duration-300 text-center">
<div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07] group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="28" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
</div>
<h3 className="font-heading text-base md:text-lg font-bold text-celtic-charcoal mb-2">Property Managers</h3>
<p className="text-celtic-grey text-sm leading-relaxed" style={{fontSize: 'clamp(14px, 1.8vw, 15px)'}}>Multi-story residential and commercial buildings requiring maintenance, modernisation, and emergency repair.</p>
</div>
<div className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-celtic-green/20 bg-white hover:shadow-lg transition-all duration-300 text-center">
<div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07] group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="28" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h20"></path><path d="M5 20V8.2a1 1 0 0 1 .5-.9l6-3.3a1 1 0 0 1 1 0l6 3.3a1 1 0 0 1 .5.9V20"></path><path d="M12 10v4"></path><path d="M10 12h4"></path></svg>
</div>
<h3 className="font-heading text-base md:text-lg font-bold text-celtic-charcoal mb-2">General Contractors &amp; Builders</h3>
<p className="text-celtic-grey text-sm leading-relaxed" style={{fontSize: 'clamp(14px, 1.8vw, 15px)'}}>New construction projects needing a reliable elevator subcontractor from specification to final inspection.</p>
</div>
<div className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-celtic-green/20 bg-white hover:shadow-lg transition-all duration-300 text-center">
<div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07] group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="28" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path></svg>
</div>
<h3 className="font-heading text-base md:text-lg font-bold text-celtic-charcoal mb-2">Senior Living Facilities</h3>
<p className="text-celtic-grey text-sm leading-relaxed" style={{fontSize: 'clamp(14px, 1.8vw, 15px)'}}>Assisted living and retirement communities needing accessibility equipment installed and maintained.</p>
</div>
<div className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-celtic-green/20 bg-white hover:shadow-lg transition-all duration-300 text-center">
<div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-5 bg-celtic-green/[0.07] group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="28" stroke="#1B5E20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="font-heading text-base md:text-lg font-bold text-celtic-charcoal mb-2">HOA &amp; Condo Associations</h3>
<p className="text-celtic-grey text-sm leading-relaxed" style={{fontSize: 'clamp(14px, 1.8vw, 15px)'}}>Common-area elevator maintenance, code compliance, and modernisation for community buildings.</p>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 relative overflow-hidden bg-celtic-green" id="contact">
<div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-15" style={{backgroundColor: '#C8A951'}}></div>
<div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[100px] opacity-10" style={{backgroundColor: '#C8A951'}}></div>
<div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white mb-4 leading-tight">
      Schedule Your Free Elevator Consultation
    </h2>
<p className="text-white/70 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
      No obligation. No pressure. Just an honest assessment from Phoenix's most trusted elevator contractor.
    </p>
<div className="flex justify-center mb-5">
<a className="w-full sm:w-auto font-heading text-sm md:text-base font-bold px-10 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:brightness-110 bg-celtic-gold text-celtic-charcoal flex items-center justify-center gap-2 min-h-[48px]" href="#">
        Book Your Free Consultation
        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>
<p className="text-white/60 text-sm">
      Or call us directly:
      <a className="font-semibold text-white hover:underline underline-offset-4" href="tel:6023692573">(602) 369-2573</a>
</p>
</div>
</section>

<section className="py-10 md:py-16 lg:py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 md:mb-14 lg:mb-16">
<h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-celtic-charcoal">
        Frequently Asked Questions
      </h2>
</div>
<div className="space-y-3">
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md open:border-gray-300">
<summary className="flex justify-between items-center px-5 md:px-6 cursor-pointer font-semibold text-celtic-charcoal select-none min-h-[56px] py-4" style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
          What areas do you serve?
          <span className="shrink-0 ml-4 text-gray-400 group-open:hidden">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
<span className="shrink-0 ml-4 text-celtic-green hidden group-open:inline-block">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
</summary>
<div className="px-5 md:px-6 pb-5 text-celtic-grey leading-relaxed border-t border-gray-100 pt-4" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>All of Arizona (Phoenix, Scottsdale, Tucson, Sedona, Flagstaff, Prescott) and Southern Nevada (Las Vegas, Henderson).</div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md open:border-gray-300">
<summary className="flex justify-between items-center px-5 md:px-6 cursor-pointer font-semibold text-celtic-charcoal select-none min-h-[56px] py-4" style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
          Do you service commercial elevators?
          <span className="shrink-0 ml-4 text-gray-400 group-open:hidden">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
<span className="shrink-0 ml-4 text-celtic-green hidden group-open:inline-block">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
</summary>
<div className="px-5 md:px-6 pb-5 text-celtic-grey leading-relaxed border-t border-gray-100 pt-4" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>Yes. We handle maintenance, repair, modernisation, and new installations for both commercial and residential properties.</div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md open:border-gray-300">
<summary className="flex justify-between items-center px-5 md:px-6 cursor-pointer font-semibold text-celtic-charcoal select-none min-h-[56px] py-4" style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
          How quickly can you respond to an emergency?
          <span className="shrink-0 ml-4 text-gray-400 group-open:hidden">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
<span className="shrink-0 ml-4 text-celtic-green hidden group-open:inline-block">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
</summary>
<div className="px-5 md:px-6 pb-5 text-celtic-grey leading-relaxed border-t border-gray-100 pt-4" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>Same-week for most service calls. Same-day for emergencies when possible. Our team is local to Phoenix with warehoused parts for fast turnarounds.</div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md open:border-gray-300">
<summary className="flex justify-between items-center px-5 md:px-6 cursor-pointer font-semibold text-celtic-charcoal select-none min-h-[56px] py-4" style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
          Are you licensed and insured?
          <span className="shrink-0 ml-4 text-gray-400 group-open:hidden">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
<span className="shrink-0 ml-4 text-celtic-green hidden group-open:inline-block">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
</summary>
<div className="px-5 md:px-6 pb-5 text-celtic-grey leading-relaxed border-t border-gray-100 pt-4" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>Yes. AZ ROC #270589, NV ROC #82668. Fully insured and bonded.</div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md open:border-gray-300">
<summary className="flex justify-between items-center px-5 md:px-6 cursor-pointer font-semibold text-celtic-charcoal select-none min-h-[56px] py-4" style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
          Do you work with all elevator brands?
          <span className="shrink-0 ml-4 text-gray-400 group-open:hidden">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
<span className="shrink-0 ml-4 text-celtic-green hidden group-open:inline-block">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
</summary>
<div className="px-5 md:px-6 pb-5 text-celtic-grey leading-relaxed border-t border-gray-100 pt-4" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>Yes. We are authorised warranty repair providers for major brands and can service all makes and models of residential and commercial elevators.</div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md open:border-gray-300">
<summary className="flex justify-between items-center px-5 md:px-6 cursor-pointer font-semibold text-celtic-charcoal select-none min-h-[56px] py-4" style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
          What does a maintenance programme include?
          <span className="shrink-0 ml-4 text-gray-400 group-open:hidden">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
<span className="shrink-0 ml-4 text-celtic-green hidden group-open:inline-block">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
</summary>
<div className="px-5 md:px-6 pb-5 text-celtic-grey leading-relaxed border-t border-gray-100 pt-4" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>Scheduled inspections, lubrication, adjustments, safety testing, and full code compliance documentation. Frequency depends on your equipment and local requirements.</div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md open:border-gray-300">
<summary className="flex justify-between items-center px-5 md:px-6 cursor-pointer font-semibold text-celtic-charcoal select-none min-h-[56px] py-4" style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
          How much does elevator maintenance cost?
          <span className="shrink-0 ml-4 text-gray-400 group-open:hidden">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
<span className="shrink-0 ml-4 text-celtic-green hidden group-open:inline-block">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
</summary>
<div className="px-5 md:px-6 pb-5 text-celtic-grey leading-relaxed border-t border-gray-100 pt-4" style={{fontSize: 'clamp(15px, 2vw, 16px)'}}>Pricing depends on the number of units, type of equipment, and frequency of service. Contact us for a free, no-obligation quote.</div>
</details>
</div>
</div>
</section>

<footer className="pt-14 md:pt-20 pb-8" style={{backgroundColor: '#2D2D2D'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
<div className="sm:col-span-2 lg:col-span-1">
<div className="flex items-center gap-2.5 mb-5">
<div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/10">
<svg fill="none" height="18" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
</div>
<span className="font-heading text-lg font-bold tracking-tight text-white">Celtic Elevator</span>
</div>
<div className="space-y-2 text-sm text-gray-400 leading-relaxed">
<p>Celtic Elevator, LLC</p>
<p>23025 N 15th Ave, Suite 102</p>
<p>Phoenix, AZ 85027</p>
</div>
<div className="space-y-2 mt-4">
<a className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" href="tel:6023692573">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            (602) 369-2573
          </a>
<a className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" href="mailto:info@celticelevator.com">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            info@celticelevator.com
          </a>
</div>
</div>
<div>
<h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-5 text-gray-300">Quick Links</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Careers</a>
</div>
</div>
<div>
<h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-5 text-gray-300">Licensing</h4>
<div className="space-y-3">
<div className="flex items-center gap-2">
<svg fill="none" height="16" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
<span className="text-sm text-gray-400">AZ ROC #270589</span>
</div>
<div className="flex items-center gap-2">
<svg fill="none" height="16" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
<span className="text-sm text-gray-400">NV ROC #82668</span>
</div>
<div className="flex items-center gap-2">
<svg fill="none" height="16" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
<span className="text-sm text-gray-400">NAEC Certified</span>
</div>
<div className="flex items-center gap-2">
<svg fill="none" height="16" stroke="#C8A951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
<span className="text-sm text-gray-400">Fully Insured &amp; Bonded</span>
</div>
</div>
</div>
<div>
<h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-5 text-gray-300">Follow Us</h4>
<div className="flex gap-3">
<a aria-label="Facebook" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<svg fill="#999" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<svg fill="none" height="20" stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<svg fill="#999" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8">
<p className="text-xs text-gray-500 text-center">© 2026 Celtic Elevator, LLC. All Rights Reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
