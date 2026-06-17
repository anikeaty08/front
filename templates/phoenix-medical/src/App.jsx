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



(function () {
const style = document.createElement("style");
style.textContent = `
@keyframes animationIn {
from { opacity: 0; transform: translateY(40px); }
to { opacity: 1; transform: translateY(0); }
}
.animate-on-scroll { opacity: 0; }
.animate-on-scroll.animate { animation: animationIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
/* Custom Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #f5f5f5; }
::-webkit-scrollbar-thumb { background: #d4a373; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #b48811; }
/* Custom Font Classes */
.font-heading { font-family: 'Playfair Display', serif; }
.font-body { font-family: 'Manrope', sans-serif; }
/* Gold Gradient Text */
.text-gold-gradient {
background: linear-gradient(to right, #b48811, #fde08d, #b48811);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-size: 200% auto;
animation: shine 4s linear infinite;
}
@keyframes shine { to { background-position: 200% center; } }
/* Image Hover Zoom */
.img-zoom-container { overflow: hidden; }
.img-zoom-container img { transition: transform 1s ease; }
.img-zoom-container:hover img { transform: scale(1.05); }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        lucide.createIcons();
        
        // Simple Navbar Scroll Logic
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.replace('h-20', 'h-16');
            } else {
                nav.classList.remove('shadow-md');
                nav.classList.replace('h-16', 'h-20');
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
      

<a className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:-translate-y-1 transition-transform duration-300 group animate-on-scroll delay-500" href="https://wa.me/4917636830085" target="_blank">
<svg className="lucide lucide-message-circle w-6 h-6 fill-current" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="font-bold tracking-wide uppercase text-xs hidden md:inline-block">WhatsApp Beratung</span>
</a>

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200 transition-all duration-300 animate-on-scroll" id="navbar">
<div className="max-w-[96rem] mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-sm font-heading font-bold italic text-lg">P</div>
<div className="flex flex-col">
<span className="font-heading font-bold text-lg tracking-tight text-black leading-none">PHOENIX</span>
<span className="text-[0.55rem] uppercase tracking-[0.25em] text-gold-600 font-semibold leading-none mt-0.5">Medical Travel</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-500">
<a className="hover:text-black transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left pb-1" href="#destinations">Destinationen</a>
<a className="hover:text-black transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left pb-1" href="#procedures">Behandlungen</a>
<a className="hover:text-black transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left pb-1" href="#process">Ablauf</a>
<a className="hover:text-black transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left pb-1" href="#vip">VIP Service</a>
</div>

<a className="hover:bg-neutral-800 transition-colors duration-300 flex items-center gap-2 group text-white bg-black rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg shadow-black/5" href="#contact">
<span className="text-xs font-bold uppercase tracking-widest">Beratung</span>
<svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95305714-2fc6-4413-adac-e3eb38323480_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40"></div>
</div>
<div className="text-center max-w-5xl z-10 mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-600/30 bg-white/50 backdrop-blur-sm mb-6 animate-on-scroll">
<span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
<span className="text-[0.65rem] font-bold uppercase tracking-widest text-gold-600">Germany → Türkiye VIP Medical Travel</span>
</div>
<h1 className="font-heading text-5xl md:text-7xl lg:text-9xl text-black leading-[1.0] mb-8 animate-on-scroll" style={{animationDelay: '0.1s'}}>
                Perfektion &amp;<br/>
<span className="italic text-gold-600 text-6xl md:text-8xl lg:text-9xl">Exklusiver Luxus.</span>
</h1>
<p className="text-neutral-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light animate-on-scroll" style={{animationDelay: '0.2s'}}>
                Premium Schönheitsoperationen in der Türkei. Flug, 5-Sterne Hotel, Limousinen-Transfer und deutschsprachige Betreuung – alles inklusive für Ihre Transformation.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-on-scroll" style={{animationDelay: '0.3s'}}>
<a className="w-full md:w-auto px-8 py-4 bg-black text-white rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-neutral-900/10" href="#contact">
<span className="text-xs font-bold uppercase tracking-widest">Kostenlose Erstberatung</span>
<svg className="lucide lucide-calendar w-4 h-4 text-gold-400 group-hover:text-white transition-colors" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="w-full md:w-auto px-8 py-4 bg-white border border-neutral-200 text-black rounded-full hover:bg-neutral-50 transition-all flex items-center justify-center gap-3 group" href="https://wa.me/4917636830085" target="_blank">
<svg className="lucide lucide-message-circle w-4 h-4 text-[#25D366]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-xs font-bold uppercase tracking-widest">Via WhatsApp anfragen</span>
</a>
</div>

<div className="mt-16 pt-8 border-t border-neutral-300/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 animate-on-scroll" style={{animationDelay: '0.4s'}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-5 h-5 text-gold-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs uppercase tracking-wider font-semibold text-neutral-500">TÜV Zertifiziert</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-5 h-5 text-gold-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs uppercase tracking-wider font-semibold text-neutral-500">5-Sterne Hotels</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-heart-handshake w-5 h-5 text-gold-600" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
<span className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Deutsche Betreuung</span>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-neutral-400 animate-on-scroll delay-700">
<span className="text-xs uppercase tracking-widest font-heading italic">Scroll</span>
<svg className="lucide lucide-arrow-down w-4 h-4 animate-bounce" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</section>

<section className="bg-white pt-32 pb-32 relative border-t border-neutral-100" id="destinations">
<div className="max-w-[96rem] mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 animate-on-scroll">
<div>
<span className="block text-xs font-medium tracking-[0.2em] text-neutral-400 mb-4 uppercase">Locations</span>
<h2 className="font-heading text-4xl md:text-5xl text-black mb-4">Wähle deine <span className="italic text-gold-600">Destination</span></h2>
<p className="text-neutral-500 max-w-md text-sm leading-relaxed font-light">Verbinden Sie Ihre medizinische Behandlung mit einem unvergesslichen Aufenthalt in den schönsten Metropolen der Türkei.</p>
</div>
<button className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1">
                    Alle Standorte
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative h-[600px] overflow-hidden rounded-sm cursor-pointer animate-on-scroll">
<div className="img-zoom-container h-full w-full bg-neutral-900">
<img alt="Istanbul" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&amp;w=2608&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-white font-heading text-4xl italic mb-3">Istanbul</h3>
<p className="text-neutral-300 text-xs mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Kulturhauptstadt, Bosphorus-Blick, Luxus-Shopping und Weltklasse-Kliniken.</p>
<span className="inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all">
                                Entdecken
                            </span>
</div>
</div>
</div>

<div className="group relative h-[600px] overflow-hidden rounded-sm cursor-pointer animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="img-zoom-container h-full w-full bg-neutral-900">
<img alt="Izmir" className="opacity-90 group-hover:opacity-100 transition-all duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65383784-6682-4594-9c47-5809ba2827b5_800w.jpg"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-white font-heading text-4xl italic mb-3">Izmir</h3>
<p className="text-neutral-300 text-xs mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Ägäis-Küste, entspannte Atmosphäre, Strandnähe und moderne Ästhetik.</p>
<span className="inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all">
                                Entdecken
                            </span>
</div>
</div>
</div>

<div className="group relative h-[600px] overflow-hidden rounded-sm cursor-pointer animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="img-zoom-container h-full w-full bg-neutral-900">
<img alt="Samsun" className="opacity-90 group-hover:opacity-100 transition-all duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cc957d2-2e54-4ce4-85f6-25d7dd19419e_800w.jpg"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-white font-heading text-4xl italic mb-3">Samsun</h3>
<p className="text-neutral-300 text-xs mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Schwarzes Meer, Natur pur, ruhige Genesung und exzellente medizinische Versorgung.</p>
<span className="inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all">
                                Entdecken
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-50 border-t border-neutral-200" id="procedures">
<div className="max-w-[96rem] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 animate-on-scroll">
<div>
<span className="text-neutral-500 font-bold tracking-[0.2em] text-[0.6rem] uppercase block mb-4">Exzellenz in Ästhetik</span>
<h2 className="font-heading text-4xl md:text-6xl text-black">Unsere <span className="italic text-gold-600">Expertise</span></h2>
</div>
<a className="hidden md:block bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all" href="#contact">
                    Beratung Buchen
                </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-10 border border-neutral-100 hover:border-gold-200 hover:shadow-2xl hover:shadow-gold-100/30 transition-all duration-500 group rounded-sm cursor-pointer flex flex-col items-start h-[320px] justify-between animate-on-scroll">
<div>
<div className="w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center mb-8 text-neutral-400 group-hover:text-gold-600 group-hover:bg-gold-50 transition-colors">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-heading text-black group-hover:text-gold-600 transition-colors">Nasenkorrektur</h3>
<p className="text-xs text-neutral-500 mt-3 leading-relaxed font-light">Rhinoplastik für harmonische Gesichtszüge und verbesserte Funktion.</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="bg-white p-10 border border-neutral-100 hover:border-gold-200 hover:shadow-2xl hover:shadow-gold-100/30 transition-all duration-500 group rounded-sm cursor-pointer flex flex-col items-start h-[320px] justify-between animate-on-scroll delay-100">
<div>
<div className="w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center mb-8 text-neutral-400 group-hover:text-gold-600 group-hover:bg-gold-50 transition-colors">
<svg className="lucide lucide-heart w-6 h-6" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<h3 className="text-xl font-heading text-black group-hover:text-gold-600 transition-colors">Brustvergrößerung</h3>
<p className="text-xs text-neutral-500 mt-3 leading-relaxed font-light">Hochwertige Implantate für eine natürliche und ästhetische Silhouette.</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="bg-white p-10 border border-neutral-100 hover:border-gold-200 hover:shadow-2xl hover:shadow-gold-100/30 transition-all duration-500 group rounded-sm cursor-pointer flex flex-col items-start h-[320px] justify-between animate-on-scroll delay-200">
<div>
<div className="w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center mb-8 text-neutral-400 group-hover:text-gold-600 group-hover:bg-gold-50 transition-colors">
<svg className="lucide lucide-scissors w-6 h-6" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-xl font-heading text-black group-hover:text-gold-600 transition-colors">Fettabsaugung</h3>
<p className="text-xs text-neutral-500 mt-3 leading-relaxed font-light">Liposuktion mit modernster Technologie für definierte Konturen.</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="bg-white p-10 border border-neutral-100 hover:border-gold-200 hover:shadow-2xl hover:shadow-gold-100/30 transition-all duration-500 group rounded-sm cursor-pointer flex flex-col items-start h-[320px] justify-between animate-on-scroll">
<div>
<div className="w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center mb-8 text-neutral-400 group-hover:text-gold-600 group-hover:bg-gold-50 transition-colors">
<svg className="lucide lucide-user-check w-6 h-6" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-heading text-black group-hover:text-gold-600 transition-colors">Haartransplantation</h3>
<p className="text-xs text-neutral-500 mt-3 leading-relaxed font-light">FUE &amp; DHI Methoden für dichtes, natürliches Haarwachstum.</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="bg-white p-10 border border-neutral-100 hover:border-gold-200 hover:shadow-2xl hover:shadow-gold-100/30 transition-all duration-500 group rounded-sm cursor-pointer flex flex-col items-start h-[320px] justify-between animate-on-scroll delay-100">
<div>
<div className="w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center mb-8 text-neutral-400 group-hover:text-gold-600 group-hover:bg-gold-50 transition-colors">
<svg className="lucide lucide-smile w-6 h-6" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-xl font-heading text-black group-hover:text-gold-600 transition-colors">Hollywood Smile</h3>
<p className="text-xs text-neutral-500 mt-3 leading-relaxed font-light">Veneers und Zirkonkronen für das perfekte weiße Lächeln.</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="bg-white p-10 border border-neutral-100 hover:border-gold-200 hover:shadow-2xl hover:shadow-gold-100/30 transition-all duration-500 group rounded-sm cursor-pointer flex flex-col items-start h-[320px] justify-between animate-on-scroll delay-200">
<div>
<div className="w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center mb-8 text-neutral-400 group-hover:text-gold-600 group-hover:bg-gold-50 transition-colors">
<svg className="lucide lucide-hourglass w-6 h-6" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
</div>
<h3 className="text-xl font-heading text-black group-hover:text-gold-600 transition-colors">Mommy Makeover</h3>
<p className="text-xs text-neutral-500 mt-3 leading-relaxed font-light">Kombinationseingriffe für die Wiederherstellung Ihrer Figur.</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="bg-white p-10 border border-neutral-100 hover:border-gold-200 hover:shadow-2xl hover:shadow-gold-100/30 transition-all duration-500 group rounded-sm cursor-pointer flex flex-col items-start h-[320px] justify-between animate-on-scroll">
<div>
<div className="w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center mb-8 text-neutral-400 group-hover:text-gold-600 group-hover:bg-gold-50 transition-colors">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-heading text-black group-hover:text-gold-600 transition-colors">BBL</h3>
<p className="text-xs text-neutral-500 mt-3 leading-relaxed font-light">Brazilian Butt Lift für kurvige und ästhetische Proportionen.</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="bg-neutral-900 p-10 border border-black rounded-sm cursor-pointer flex flex-col items-center justify-center h-[320px] group animate-on-scroll delay-100">
<h3 className="text-2xl font-heading text-white italic mb-4">Individuelle Wünsche?</h3>
<p className="text-xs text-neutral-400 text-center mb-8 leading-relaxed">Wir bieten weitere spezialisierte Eingriffe an.</p>
<a className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all" href="#contact">Kontakt aufnehmen</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black text-white relative overflow-hidden" id="vip">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="animate-on-scroll">
<span className="text-gold-500 font-bold tracking-[0.2em] text-[0.6rem] uppercase block mb-6">Das Phoenix Versprechen</span>
<h2 className="font-heading text-4xl md:text-6xl mb-8">All-Inclusive <br/> <span className="italic text-neutral-400">VIP Erlebnis.</span></h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-lg font-light">
                        Wir kümmern uns um jedes Detail Ihrer Reise, damit Sie sich voll und ganz auf sich konzentrieren können. Von der Landung bis zum Rückflug genießen Sie höchsten Komfort.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
<div className="flex items-start gap-4">
<div className="p-2 bg-neutral-900 rounded-full text-gold-500 border border-neutral-800"><svg className="lucide lucide-plane w-5 h-5" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg></div>
<div>
<h4 className="font-heading text-lg text-white">Flug &amp; Transfer</h4>
<p className="text-xs text-neutral-500 mt-1">Hin- &amp; Rückflug inkl. VIP Limousinen-Service.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-neutral-900 rounded-full text-gold-500 border border-neutral-800"><svg className="lucide lucide-hotel w-5 h-5" data-lucide="hotel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22v-6.57"></path><path d="M12 11h.01"></path><path d="M12 7h.01"></path><path d="M14 15.43V22"></path><path d="M15 16a5 5 0 0 0-6 0"></path><path d="M16 11h.01"></path><path d="M16 7h.01"></path><path d="M8 11h.01"></path><path d="M8 7h.01"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg></div>
<div>
<h4 className="font-heading text-lg text-white">5-Sterne Hotel</h4>
<p className="text-xs text-neutral-500 mt-1">Premium Unterkunft für Ihre Genesung.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-neutral-900 rounded-full text-gold-500 border border-neutral-800"><svg className="lucide lucide-languages w-5 h-5" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg></div>
<div>
<h4 className="font-heading text-lg text-white">Deutsche Betreuung</h4>
<p className="text-xs text-neutral-500 mt-1">24/7 persönlicher Ansprechpartner vor Ort.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-neutral-900 rounded-full text-gold-500 border border-neutral-800"><svg className="lucide lucide-stethoscope w-5 h-5" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg></div>
<div>
<h4 className="font-heading text-lg text-white">Nachsorge</h4>
<p className="text-xs text-neutral-500 mt-1">Umfassende medizinische Kontrolle.</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gold-500 hover:text-white transition-all duration-300 group" href="#contact">
<span className="text-xs font-bold uppercase tracking-widest">VIP Paket Anfragen</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="relative animate-on-scroll delay-100">
<div className="grid grid-cols-2 gap-4">
<img alt="Luxury Hotel" className="w-full h-72 object-cover rounded-sm opacity-80" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img alt="Chauffeur" className="w-full h-72 object-cover rounded-sm opacity-80 translate-y-8" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img alt="Hospital Room" className="w-full h-72 object-cover rounded-sm opacity-80" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<img alt="Istanbul City" className="w-full h-72 object-cover rounded-sm opacity-80 translate-y-8" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2668&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-[96rem] mx-auto px-6 text-center">
<h2 className="font-heading text-4xl text-black mb-16 animate-on-scroll">Ergebnisse echter <span className="italic text-gold-600">Patienten</span></h2>
<div className="flex flex-col md:flex-row gap-8 justify-center mb-16 animate-on-scroll">
<div className="relative group w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
<img alt="Result 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full">Nachher</div>
</div>
<div className="relative group w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
<img alt="Result 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full">Nachher</div>
</div>
<div className="relative group w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
<img alt="Result 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full">Nachher</div>
</div>
</div>
<a className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-all text-xs font-bold uppercase tracking-widest animate-on-scroll" href="#contact">
                Eigene Fotoanalyse starten
            </a>
</div>
</section>

<section className="py-32 bg-neutral-50 border-t border-b border-neutral-200" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20 animate-on-scroll">
<h2 className="font-heading text-4xl md:text-5xl text-black">Ihr Weg zur <span className="italic text-gold-600">Veränderung</span></h2>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 md:-translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-0 group animate-on-scroll">
<div className="md:w-1/2 pr-12 text-right hidden md:block order-1">
<h3 className="font-heading text-xl text-black">Kostenlose Beratung</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">Senden Sie uns Fotos für eine unverbindliche Ersteinschätzung durch unsere Ärzte.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-neutral-200 group-hover:border-gold-500 group-hover:text-gold-600 rounded-full flex items-center justify-center z-10 order-2 transition-all shadow-sm">
<span className="text-xs font-bold">1</span>
</div>
<div className="md:w-1/2 pl-12 order-3">
<div className="md:hidden mb-2">
<h3 className="font-heading text-xl text-black">Kostenlose Beratung</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">Senden Sie uns Fotos für eine unverbindliche Ersteinschätzung.</p>
</div>
<a className="inline-block text-[0.6rem] font-bold uppercase tracking-widest text-gold-600 border border-gold-600 rounded-full px-5 py-2 hover:bg-gold-600 hover:text-white transition-all" href="#contact">Jetzt Starten</a>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-0 md:mt-16 group animate-on-scroll">
<div className="md:w-1/2 pr-12 text-right order-1 md:order-1">
<div className="md:hidden mb-2 pl-12 text-left">
<h3 className="font-heading text-xl text-black">Reiseplanung</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">Wir organisieren Flüge und Hotel nach Ihren Wünschen.</p>
</div>
<div className="hidden md:block">
<a className="inline-block text-[0.6rem] font-bold uppercase tracking-widest text-neutral-400 border border-neutral-300 rounded-full px-5 py-2 hover:border-black hover:text-black transition-all" href="#contact">Details Planen</a>
</div>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-neutral-200 group-hover:border-gold-500 group-hover:text-gold-600 rounded-full flex items-center justify-center z-10 order-2 transition-all shadow-sm">
<span className="text-xs font-bold">2</span>
</div>
<div className="md:w-1/2 pl-12 order-3 md:order-3 hidden md:block">
<h3 className="font-heading text-xl text-black">Reiseplanung</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">Wir organisieren Flüge und Hotel nach Ihren Wünschen.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-0 md:mt-16 group animate-on-scroll">
<div className="md:w-1/2 pr-12 text-right hidden md:block order-1">
<h3 className="font-heading text-xl text-black">VIP Ankunft</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">Chauffeur-Empfang am Flughafen und Transfer ins 5-Sterne Hotel.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-neutral-200 group-hover:border-gold-500 group-hover:text-gold-600 rounded-full flex items-center justify-center z-10 order-2 transition-all shadow-sm">
<span className="text-xs font-bold">3</span>
</div>
<div className="md:w-1/2 pl-12 order-3">
<div className="md:hidden mb-2">
<h3 className="font-heading text-xl text-black">VIP Ankunft</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">Chauffeur-Empfang am Flughafen und Transfer ins 5-Sterne Hotel.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-0 md:mt-16 group animate-on-scroll">
<div className="md:w-1/2 pr-12 text-right order-1 md:order-1">
<div className="md:hidden mb-2 pl-12 text-left">
<h3 className="font-heading text-xl text-black">Behandlung &amp; Erholung</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">Operation in der Premium-Klinik, gefolgt von Erholung und City-Tour.</p>
</div>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-neutral-200 group-hover:border-gold-500 group-hover:text-gold-600 rounded-full flex items-center justify-center z-10 order-2 transition-all shadow-sm">
<span className="text-xs font-bold">4</span>
</div>
<div className="md:w-1/2 pl-12 order-3 md:order-3 hidden md:block">
<h3 className="font-heading text-xl text-black">Behandlung &amp; Erholung</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">Operation in der Premium-Klinik, gefolgt von Erholung und City-Tour.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="contact">
<div className="max-w-[96rem] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5 flex flex-col justify-center animate-on-scroll">
<h2 className="font-heading text-5xl md:text-6xl text-black mb-6">Starten Sie Ihre <br/><span className="italic text-gold-600">Reise.</span></h2>
<p className="text-neutral-500 mb-10 max-w-sm font-light">Füllen Sie das Formular aus oder schreiben Sie uns direkt über WhatsApp. Unser deutsches Team meldet sich innerhalb von 60 Minuten.</p>
<div className="space-y-6">
<a className="flex items-center gap-6 group p-6 border border-neutral-100 rounded-sm hover:border-gold-200 hover:shadow-xl transition-all duration-500" href="https://wa.me/4917636830085" target="_blank">
<div className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-lg">
<svg className="lucide lucide-message-circle w-6 h-6" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div>
<span className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Direct Chat</span>
<span className="font-heading text-xl text-black group-hover:text-[#25D366] transition-colors">WhatsApp Öffnen</span>
</div>
</a>
<div className="flex items-center gap-6 p-6">
<div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-full shadow-lg">
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<span className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Rückrufservice</span>
<span className="font-heading text-xl text-black">+49 176 368 300 85</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-neutral-50 p-8 md:p-12 rounded-sm border border-neutral-200 animate-on-scroll delay-100">
<form action="mailto:phoenixmedicaltravel@gmail.com" className="space-y-6" enctype="text/plain" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Vor- &amp; Nachname</label>
<input className="w-full bg-white border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-neutral-300" name="name" placeholder="Max Mustermann" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Telefonnummer</label>
<input className="w-full bg-white border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-neutral-300" name="phone" placeholder="+49 ..." required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Gewünschte Behandlung</label>
<select className="w-full bg-white border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-all text-neutral-800" name="treatment">
<option value="">Bitte wählen...</option>
<option value="Nasenkorrektur">Nasenkorrektur</option>
<option value="Haartransplantation">Haartransplantation</option>
<option value="Brust OP">Brust OP</option>
<option value="Zahnästhetik">Zahnästhetik</option>
<option value="Andere">Anderes</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Präferenz Stadt</label>
<select className="w-full bg-white border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-all text-neutral-800" name="city">
<option value="Istanbul">Istanbul</option>
<option value="Izmir">Izmir</option>
<option value="Samsun">Samsun</option>
<option value="Unentschlossen">Unentschlossen</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Ihre Nachricht</label>
<textarea className="w-full bg-white border border-neutral-200 px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-neutral-300" name="message" placeholder="Beschreiben Sie kurz Ihre Wünsche..." rows="4"></textarea>
</div>
<button className="w-full bg-black text-white text-sm font-bold uppercase tracking-widest py-4 rounded-full hover:bg-gold-600 transition-colors duration-300 shadow-xl mt-4" type="submit">
                            Kostenlose Beratung Anfragen
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-12 border-t border-neutral-800">
<div className="max-w-[96rem] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 animate-on-scroll">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-heading font-bold italic text-lg">P</div>
<span className="font-heading font-bold text-lg tracking-tight">PHOENIX</span>
</div>
<p className="text-neutral-500 text-xs leading-relaxed font-light">Der Premium-Partner für medizinische Reisen in die Türkei. Höchste Standards, TÜV-zertifizierte Kliniken und VIP Service für Patienten aus dem DACH-Raum.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-xs font-medium tracking-widest uppercase text-neutral-400">
<div className="flex flex-col gap-4">
<span className="text-white font-bold mb-2">Behandlungen</span>
<a className="hover:text-gold-500 transition-colors" href="#">Haare</a>
<a className="hover:text-gold-500 transition-colors" href="#">Gesicht</a>
<a className="hover:text-gold-500 transition-colors" href="#">Körper</a>
<a className="hover:text-gold-500 transition-colors" href="#">Zähne</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-bold mb-2">Service</span>
<a className="hover:text-gold-500 transition-colors" href="#">VIP Paket</a>
<a className="hover:text-gold-500 transition-colors" href="#">Ablauf</a>
<a className="hover:text-gold-500 transition-colors" href="#">Kliniken</a>
<a className="hover:text-gold-500 transition-colors" href="#">Hotels</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-bold mb-2">Kontakt</span>
<a className="hover:text-gold-500 transition-colors" href="https://wa.me/4917636830085" target="_blank">WhatsApp</a>
<a className="hover:text-gold-500 transition-colors" href="mailto:phoenixmedicaltravel@gmail.com">E-Mail</a>
<a className="hover:text-gold-500 transition-colors" href="#">Impressum</a>
<a className="hover:text-gold-500 transition-colors" href="#">Datenschutz</a>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-on-scroll">
<p className="text-[0.6rem] text-neutral-600 uppercase tracking-widest">© 2024 Phoenix Medical Travel. All Rights Reserved.</p>
<div className="flex gap-4 opacity-50">
<svg className="lucide lucide-instagram w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-facebook w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<svg className="lucide lucide-linkedin w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
