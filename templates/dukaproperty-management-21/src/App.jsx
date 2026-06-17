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
sans: ['Inter', 'sans-serif'],
},
colors: {
gold: {
400: '#D4AF37',
500: '#C5A059',
600: '#B08D55',
},
neutral: {
850: '#1A1A1A',
900: '#121212',
950: '#080808',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-black/50 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 border border-gold-400/30 flex items-center justify-center rotate-45 group-hover:border-gold-400 transition-colors duration-500">
<div className="w-5 h-5 bg-gold-500/10 -rotate-45"></div>
</div>
<div className="flex flex-col">
<span className="text-white font-medium tracking-widest text-sm uppercase">Duka</span>
<span className="text-xs tracking-[0.2em] text-gold-500 uppercase">Property Management</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Company</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Services</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Communities</a>
<a className="px-5 py-2 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300 text-xs font-medium uppercase tracking-widest" href="#">
                    DukaCloud Login
                </a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Condominium" className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite] transform transition-transform duration-[20s]" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505]"></div>
</div>

<div className="relative z-10 text-center max-w-4xl px-6">
<div className="mb-6 flex justify-center">
<div className="h-px w-16 bg-gold-500/50"></div>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-6">
                Excellence in <br/> <span className="italic font-normal text-gold-gradient">Condominium</span> Care.
            </h1>
<p className="text-neutral-300 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
                Premier property management and consulting services across Mississauga and the GTA. Elevating communities through proactive care and DukaCloud intelligence.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-neutral-200 transition-colors min-w-[160px]" href="#services">
                    Our Services
                </a>
<a className="px-8 py-3 border border-white/20 text-white text-xs font-medium uppercase tracking-widest hover:bg-white/5 transition-colors min-w-[160px]" href="#contact">
                    Resident Portal
                </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
<span className="text-xs uppercase tracking-widest text-neutral-400">Scroll</span>
<iconify-icon className="text-gold-400" icon="solar:arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</header>

<section className="py-24 bg-[#050505] relative border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">20<span className="text-gold-500">+</span></h3>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Years of Excellence</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">100<span className="text-gold-500">+</span></h3>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Communities Managed</p>
</div>
<div className="space-y-2">
<h3 className="text-4xl font-light text-white tracking-tight">24<span className="text-gold-500">/7</span></h3>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Resident Support</p>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 space-y-8">
<div className="flex items-center gap-3 text-gold-500">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">The Duka Difference</span>
</div>
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
                        Intelligent <br/> <span className="text-neutral-500">Management</span>
</h2>
<div className="space-y-6 text-sm text-neutral-400 leading-relaxed font-light">
<p>
                            We go beyond standard property administration. At Duka Property Management, we integrate deep engineering expertise with white-glove resident services to ensure your condominium corporation operates flawlessly.
                        </p>
<p>
                            Powered by our proprietary DukaCloud platform, we provide unparalleled transparency to boards and residents alike. From meticulous financial oversight to proactive physical asset management, we protect and enhance the value of your community.
                        </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest hover:text-gold-400 transition-colors group" href="#">
                            Discover Our Approach
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 lg:order-2 relative group">
<div className="absolute -inset-4 border border-gold-500/20 rounded-sm translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="relative overflow-hidden aspect-[4/5] bg-neutral-900">
<img alt="Corporate Office" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-gold-500 text-xs font-medium uppercase tracking-widest mb-3 block">Expertise</span>
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Comprehensive Solutions</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 border border-white/5 bg-[#080808] hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="mb-6 text-neutral-300 group-hover:text-gold-400 transition-colors">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight">Condominium Management</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Complete day-to-day operational oversight, vendor coordination, and dedicated support to foster thriving, secure communities.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-[#080808] hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="mb-6 text-neutral-300 group-hover:text-gold-400 transition-colors">
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight">Consulting &amp; Engineering</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        In-house technical expertise for preventative maintenance, energy audits, project management, and structural preservation.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-[#080808] hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="mb-6 text-neutral-300 group-hover:text-gold-400 transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mb-3 tracking-tight">Financial Administration</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Rigorous budgeting, transparent fee collection, and institutional-grade reporting delivered securely through DukaCloud.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative" id="portfolio">
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
<div>
<span className="text-gold-500 text-xs font-medium uppercase tracking-widest mb-2 block">People &amp; Places</span>
<h2 className="text-3xl font-light text-white tracking-tight">Leadership &amp; Communities</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-widest" href="#">
                View Directory
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="grid md:grid-cols-2 gap-1">

<div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
<img alt="Executive Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8">
<p className="text-gold-400 text-xs uppercase tracking-widest mb-1">Meet The Experts</p>
<h3 className="text-xl text-white font-light tracking-tight">Executive Leadership</h3>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
<img alt="Managed Condominium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8">
<p className="text-gold-400 text-xs uppercase tracking-widest mb-1">Mississauga, ON</p>
<h3 className="text-xl text-white font-light tracking-tight">Featured Residences</h3>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900">
<img className="w-full h-full object-cover opacity-10 mix-blend-overlay" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">Streamline Your Community</h2>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                    Partner with a management team that combines industry-leading technology with decades of hands-on experience. Elevate your condominium today.
                </p>
</div>
<div>
<button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm border border-gold-500/50 text-gold-400 hover:text-black transition-colors duration-300">
<div className="absolute inset-0 w-full h-full bg-gold-500/10 group-hover:bg-gold-500 transition-all duration-300"></div>
<span className="relative text-xs font-medium uppercase tracking-widest flex items-center gap-3">
                        Request Proposal
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex flex-col gap-1 mb-6" href="#">
<span className="text-white font-medium tracking-widest text-sm uppercase">Duka</span>
<span className="text-xs tracking-[0.2em] text-gold-500 uppercase">Property Management</span>
</a>
<p className="text-neutral-500 text-xs leading-relaxed">
                        Setting the standard for condominium management, consulting, and technological integration across Ontario.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-gold-400 transition-colors" href="#">About Duka</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Our Communities</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Leadership Team</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Resources</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-gold-400 transition-colors" href="#">DukaCloud Login</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Resident Support</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Status Certificates</a></li>
<li><a className="hover:text-gold-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                            info@dukamanagement.com
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                            +1 (905) 555-DUKA
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gold-500" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                            Mississauga, ON
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600 uppercase tracking-widest">© 2024 Duka Property Management. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="14"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="14"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
