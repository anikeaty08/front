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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const header = document.getElementById('header');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('bg-black/80', 'backdrop-blur-xl', 'border-b', 'border-white/[0.05]', 'py-5');
                    header.classList.remove('bg-transparent', 'py-8', 'border-transparent');
                } else {
                    header.classList.remove('bg-black/80', 'backdrop-blur-xl', 'border-b', 'border-white/[0.05]', 'py-5');
                    header.classList.add('bg-transparent', 'py-8', 'border-transparent');
                }
            });

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Run once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-section').forEach(section => {
                observer.observe(section);
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
      

<div className="fixed inset-0 z-[-1] bg-[#0C0A09] pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)]"></div>

<div className="ambient-orb bg-[#E3B04A] w-[40vw] h-[40vw] top-[-15%] left-[5%] opacity-10"></div>
<div className="ambient-orb bg-[#234232] w-[45vw] h-[45vw] top-[20%] left-[30%] opacity-[0.08]" style={{animationDelay: '-7s'}}></div>
<div className="ambient-orb bg-[#C05C3B] w-[50vw] h-[50vw] bottom-[-20%] right-[-10%] opacity-[0.07]" style={{animationDelay: '-12s'}}></div>
</div>

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-700 bg-transparent py-8 px-6 md:px-12 flex justify-between items-center border-b border-transparent" id="header">
<a className="tracking-tight uppercase text-lg md:text-xl font-light z-10 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 hover:to-white transition-all duration-500" href="#">
            Flavors From Afar
        </a>
<nav className="hidden md:flex gap-12 text-xs tracking-widest uppercase items-center font-light" style={{fontFamily: 'var(--font-sans)'}}>
<a className="text-white/50 hover:text-white transition-colors duration-300" href="#story">Our Story</a>
<a className="text-white/50 hover:text-white transition-colors duration-300" href="#menu">Menu</a>
<a className="text-white/50 hover:text-[#E3B04A] transition-colors duration-300" href="#reservations">Reservations</a>
</nav>
<div className="flex items-center gap-6 z-10">
<button className="relative hover:opacity-100 opacity-60 transition-opacity duration-300 flex items-center justify-center group">
<iconify-icon height="22" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1.5 -right-2 bg-[#C05C3B] text-white border border-[#C05C3B]/50 text-[10px] w-5 h-5 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 scale-75 origin-center font-light shadow-[0_0_10px_rgba(192,92,59,0.4)]" style={{fontFamily: 'var(--font-sans)'}}>0</span>
</button>
<button className="md:hidden flex flex-col gap-1.5 z-50 opacity-60 hover:opacity-100 transition-opacity duration-300">
<span className="w-6 h-[1px] bg-white block"></span>
<span className="w-4 h-[1px] bg-white block ml-auto"></span>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-6">
<div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center gap-10 fade-in-section">
<h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 drop-shadow-sm" style={{fontFamily: 'var(--font-display)'}}>
                A tapestry of <br/>
<span className="italic lowercase text-[#E3B04A] opacity-90 block mt-4 font-light tracking-normal drop-shadow-[0_0_40px_rgba(227,176,74,0.25)]" style={{fontFamily: 'var(--font-serif)'}}>traditions</span>
</h1>
<p className="text-xs max-w-md mx-auto text-white/40 uppercase tracking-[0.25em] mt-2 font-light flex items-center gap-4" style={{fontFamily: 'var(--font-sans)'}}>
<span className="w-8 h-[1px] bg-white/20"></span>
                Michelin Recognized
                <span className="w-8 h-[1px] bg-white/20"></span>
</p>
<a className="mt-12 px-10 py-4 bg-white/[0.03] text-white text-xs uppercase tracking-widest rounded-full border border-[#E3B04A]/30 hover:border-[#E3B04A] hover:bg-[#E3B04A]/10 hover:text-[#E3B04A] transition-all duration-500 font-light backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden shimmer-button" href="#reservations" style={{fontFamily: 'var(--font-sans)'}}>
                Reserve a Table
            </a>
</div>
</section>

<div className="w-full overflow-hidden border-y border-[#234232]/30 py-8 flex items-center relative z-20 bg-[#0C0A09]/60 backdrop-blur-md mask-edges">
<div className="animate-marquee text-2xl md:text-4xl italic tracking-tight whitespace-nowrap text-white/50 font-extralight">
<span className="mx-12 hover:text-white/80 transition-colors duration-500 cursor-default">A celebration of the global diaspora.</span>
<span className="mx-12 text-[#C05C3B] not-italic text-sm opacity-80">✦</span>
<span className="mx-12 hover:text-white/80 transition-colors duration-500 cursor-default">Unearthing culinary heritage.</span>
<span className="mx-12 text-[#C05C3B] not-italic text-sm opacity-80">✦</span>
<span className="mx-12 hover:text-white/80 transition-colors duration-500 cursor-default">A Michelin Recognized experience.</span>
<span className="mx-12 text-[#C05C3B] not-italic text-sm opacity-80">✦</span>
<span className="mx-12 hover:text-white/80 transition-colors duration-500 cursor-default">A celebration of the global diaspora.</span>
<span className="mx-12 text-[#C05C3B] not-italic text-sm opacity-80">✦</span>
<span className="mx-12 hover:text-white/80 transition-colors duration-500 cursor-default">Unearthing culinary heritage.</span>
<span className="mx-12 text-[#C05C3B] not-italic text-sm opacity-80">✦</span>
<span className="mx-12 hover:text-white/80 transition-colors duration-500 cursor-default">A Michelin Recognized experience.</span>
<span className="mx-12 text-[#C05C3B] not-italic text-sm opacity-80">✦</span>
</div>
</div>

<section className="py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto relative z-20" id="story">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center fade-in-section">
<div className="lg:col-span-5 flex flex-col gap-12 relative">

<div className="absolute -top-10 -left-6 w-12 h-12 border-t border-l border-[#E3B04A]/40 rounded-tl-2xl"></div>
<h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E3B04A]/60" style={{fontFamily: 'var(--font-display)'}}>Provenance</h2>
<div className="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">
<p>Flavors From Afar is a sanctuary of culinary heritage. By partnering with visionary chefs from displaced communities, we weave their untold stories into a rich tapestry of global cuisine, honoring the resilience behind every recipe.</p>
<div className="relative pl-8 py-2">
<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C05C3B] to-transparent"></div>
<p className="italic text-white/90 font-light">Rooted in the timeless warmth of Ethiopian hospitality, our table is a place where boundaries dissolve and shared humanity is celebrated through the universal language of food.</p>
</div>
</div>
</div>
<div className="lg:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.05] p-2 shadow-[0_0_40px_rgba(35,66,50,0.3)] group">
<div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.05]">
<img alt="Culinary preparation" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.03] opacity-70 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#0C0A09] via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-[#E3B04A]/10 rounded-2xl pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#11130E]/60 px-6 md:px-12 lg:px-24 border-y border-[#234232]/20 relative z-20 backdrop-blur-sm" id="menu">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-12 fade-in-section">
<iconify-icon className="text-[#E3B04A] mb-[-10px]" height="32" icon="solar:star-fall-linear" width="32"></iconify-icon>
<h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50" style={{fontFamily: 'var(--font-display)'}}>The Menu</h2>
<p className="text-lg md:text-xl text-white/50 italic font-extralight leading-relaxed max-w-xl">An evolving curation of dishes, tracing the intricate journeys of migration, resilience, and belonging.</p>
<div className="flex flex-col sm:flex-row gap-6 justify-center w-full mt-8">
<a className="px-10 py-4 rounded-full bg-white/[0.02] border border-[#234232] text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 hover:bg-[#234232] hover:text-[#FAFAF9] hover:shadow-[0_0_30px_rgba(35,66,50,0.5)] group font-light relative overflow-hidden" href="#" style={{fontFamily: 'var(--font-sans)'}}>
                    Dinner Menu
                    <iconify-icon className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#E3B04A] group-hover:text-white" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<a className="px-10 py-4 rounded-full bg-transparent border border-white/10 text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white/[0.05] hover:border-[#E3B04A]/40 hover:text-[#E3B04A] group font-light" href="#" style={{fontFamily: 'var(--font-sans)'}}>
                    Beverages
                </a>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto fade-in-section relative z-20" id="reservations">

<div className="bg-white/[0.01] backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 lg:p-20 border border-white/[0.04] shadow-[0_30px_100px_-20px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-[#234232]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#E3B04A]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="text-center mb-16 relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase mb-6 font-extralight" style={{fontFamily: 'var(--font-display)'}}>Join Our Table</h2>
<p className="text-white/50 italic text-base md:text-lg font-extralight">Experience the flavors that unite us.</p>
<div className="w-px h-12 bg-gradient-to-b from-[#E3B04A]/40 to-transparent mt-10"></div>
</div>
<form className="flex flex-col gap-8 relative z-10 max-w-2xl mx-auto" style={{fontFamily: 'var(--font-sans)'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-3">
<label className="text-[10px] uppercase tracking-[0.2em] text-[#E3B04A]/60 pl-2 font-light">Date</label>
<div className="relative group/input">
<input className="w-full bg-black/60 border border-white/10 rounded-2xl p-5 text-white/80 text-sm focus:outline-none focus:ring-1 focus:ring-[#E3B04A]/50 focus:border-[#E3B04A]/50 transition-all duration-300 font-light hover:border-white/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" type="date"/>
</div>
</div>
<div className="flex flex-col gap-3">
<label className="text-[10px] uppercase tracking-[0.2em] text-[#E3B04A]/60 pl-2 font-light">Time</label>
<div className="relative group/input">
<select className="w-full bg-black/60 border border-white/10 rounded-2xl p-5 text-white/80 text-sm focus:outline-none focus:ring-1 focus:ring-[#E3B04A]/50 focus:border-[#E3B04A]/50 transition-all duration-300 appearance-none pr-12 font-light hover:border-white/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
<option disabled="" selected="" value="">Select timing</option>
<option value="18:00">6:00 PM</option>
<option value="19:00">7:00 PM</option>
<option value="20:00">8:00 PM</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover/input:text-[#E3B04A] transition-colors" height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-3">
<label className="text-[10px] uppercase tracking-[0.2em] text-[#E3B04A]/60 pl-2 font-light">Party Size</label>
<div className="relative group/input">
<select className="w-full bg-black/60 border border-white/10 rounded-2xl p-5 text-white/80 text-sm focus:outline-none focus:ring-1 focus:ring-[#E3B04A]/50 focus:border-[#E3B04A]/50 transition-all duration-300 appearance-none pr-12 font-light hover:border-white/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
<option value="2">2 Guests</option>
<option value="3">3 Guests</option>
<option value="4">4 Guests</option>
<option value="5+">5+ Guests</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover/input:text-[#E3B04A] transition-colors" height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
<button className="mt-8 w-full bg-[#C05C3B] text-white py-5 rounded-2xl text-xs uppercase tracking-[0.2em] font-light hover:bg-[#A34A28] hover:shadow-[0_0_30px_rgba(192,92,59,0.3)] transition-all duration-500 transform active:scale-[0.98]" type="button">
                    Find Availability
                </button>
</form>
</div>
</section>

<footer className="bg-black/80 backdrop-blur-lg pt-32 pb-12 px-6 md:px-12 border-t border-[#234232]/30 text-center md:text-left relative z-20">
<div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
<div className="md:col-span-5 pr-0 md:pr-16">
<a className="tracking-tight uppercase text-2xl font-light block mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E3B04A]" href="#">Flavors From Afar</a>
<p className="text-white/50 text-sm leading-loose max-w-sm mx-auto md:mx-0 font-extralight italic">A Michelin Recognized dining experience honoring global culinary traditions, deeply rooted in the timeless warmth of Ethiopian hospitality.</p>
</div>
<div className="md:col-span-3 flex flex-col gap-6 text-white/50 text-sm font-light" style={{fontFamily: 'var(--font-sans)'}}>
<h4 className="text-[#E3B04A] uppercase tracking-[0.25em] text-[10px] mb-2 font-light">Location</h4>
<p className="leading-relaxed font-extralight">1046 S Fairfax Ave<br/>Los Angeles, CA 90019</p>
<a className="hover:text-white transition-colors decoration-[#C05C3B]/50 hover:decoration-[#C05C3B] underline-offset-8 mt-4 inline-block w-max mx-auto md:mx-0 underline" href="#">Directions</a>
</div>
<div className="md:col-span-4 flex flex-col gap-6 text-white/50 text-sm font-light" style={{fontFamily: 'var(--font-sans)'}}>
<h4 className="text-[#E3B04A] uppercase tracking-[0.25em] text-[10px] mb-2 font-light">Service Hours</h4>
<div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-[240px] mx-auto md:mx-0 font-extralight">
<span>Tue - Thu</span><span className="text-right text-white/80">5pm - 10pm</span>
<span>Fri - Sat</span><span className="text-right text-white/80">5pm - 11pm</span>
<span>Sunday</span><span className="text-right text-white/80">4pm - 9pm</span>
</div>
</div>
</div>
<div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/[0.04] text-[10px] text-white/30 uppercase tracking-[0.2em] font-light" style={{fontFamily: 'var(--font-sans)'}}>
<p>© 2024 Flavors From Afar</p>
<div className="flex gap-10">
<a className="hover:text-[#E3B04A] transition-colors duration-300" href="#">Instagram</a>
<a className="hover:text-[#E3B04A] transition-colors duration-300" href="#">Press</a>
<a className="hover:text-[#E3B04A] transition-colors duration-300" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
