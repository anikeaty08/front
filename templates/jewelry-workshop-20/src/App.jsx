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



        lucide.createIcons();

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'text-stone-900', 'shadow-sm');
                navbar.classList.remove('text-white');
            } else {
                navbar.classList.remove('bg-white', 'text-stone-900', 'shadow-sm');
                navbar.classList.add('text-white');
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 group hover:bg-white hover:text-stone-900 text-white" id="navbar">
<div className="w-full px-4 md:px-8 h-20 flex items-center justify-between">

<div className="flex items-center gap-6">
<button className="hover:opacity-70">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="search"></i>
</button>
<div className="hidden md:flex gap-6 text-xs font-medium tracking-wide uppercase">
<a className="hover:underline underline-offset-4 decoration-1" href="#workshops">Workshops</a>
<a className="hover:underline underline-offset-4 decoration-1" href="#atelier">Atelier</a>
</div>
</div>

<a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold tracking-tighter uppercase" href="#">
                sternbar
            </a>

<div className="flex items-center gap-6">
<span className="text-xs font-medium tracking-wide uppercase hidden md:block">Münster, DE</span>
<a className="hover:opacity-70" href="#kontakt">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user"></i>
</a>
<a className="hover:opacity-70 relative" href="#buchen">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-stone-500 rounded-full"></span>
</a>
</div>
</div>

<div className="md:hidden absolute top-0 left-16 h-20 flex items-center">
</div>
</nav>

<header className="relative w-full h-[90vh] md:h-screen overflow-hidden">
<div className="absolute inset-0">
<img alt="Sternbar Hero" className="w-full h-full object-cover object-center grayscale-[10%] brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="text-center text-white space-y-4">
<p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase opacity-90">
                    Drop 01. Handwerk in Münster.
                </p>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-down"></i>
</div>
</header>

<section className="pt-16 pb-12 px-4 md:px-8" id="workshops">
<div className="flex items-end justify-between mb-8 md:mb-12">
<h2 className="text-sm md:text-base font-bold uppercase tracking-wide text-stone-900">
                Workshops - Upcoming
            </h2>
<a className="text-xs font-medium uppercase tracking-wide text-stone-500 hover:text-stone-900 flex items-center gap-1 transition-colors" href="#">
                View All <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-5">
<div className="absolute top-0 left-0 z-10 p-3">
<span className="bg-white text-stone-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-block">
                            New In
                        </span>
</div>
<img alt="Silber Basics" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="text-center space-y-1.5">
<h3 className="text-xs font-semibold uppercase tracking-wide text-stone-900">Silber Basics</h3>
<p className="text-xs text-stone-500 font-medium">€149,00 EUR</p>
<div className="flex justify-center gap-1 pt-1 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-stone-300"></div>
<div className="w-2 h-2 rounded-full bg-stone-400"></div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-5">
<div className="absolute top-0 left-0 z-10 p-3">
<span className="bg-white text-stone-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-block">
                            Popular
                        </span>
</div>
<img alt="Trauringe" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale-[20%]" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center space-y-1.5">
<h3 className="text-xs font-semibold uppercase tracking-wide text-stone-900">Trauringe (Paar)</h3>
<p className="text-xs text-stone-500 font-medium">€350,00 EUR</p>
<div className="flex justify-center gap-1 pt-1 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-[#E5D7BD]"></div> 
<div className="w-2 h-2 rounded-full bg-stone-300"></div> 
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-5">
<div className="absolute top-0 left-0 z-10 p-3">
<span className="bg-white text-stone-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-block">
                            New In
                        </span>
</div>
<img alt="Organic Shapes" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&amp;w=2675&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center space-y-1.5">
<h3 className="text-xs font-semibold uppercase tracking-wide text-stone-900">Organic Shapes</h3>
<p className="text-xs text-stone-500 font-medium">€129,00 EUR</p>
<div className="flex justify-center gap-1 pt-1 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-amber-700"></div> 
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-5">
<img alt="Gutschein" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale-[30%]" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center space-y-1.5">
<h3 className="text-xs font-semibold uppercase tracking-wide text-stone-900">Geschenkgutschein</h3>
<p className="text-xs text-stone-500 font-medium">Ab €50,00 EUR</p>
<div className="flex justify-center gap-1 pt-1 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-stone-200 border border-stone-300"></div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-12 pb-24 px-4 md:px-8" id="atelier">
<div className="flex items-end justify-between mb-8 md:mb-12">
<h2 className="text-sm md:text-base font-bold uppercase tracking-wide text-stone-900">
                Most Wanted Now
            </h2>
<a className="text-xs font-medium uppercase tracking-wide text-stone-500 hover:text-stone-900 flex items-center gap-1 transition-colors" href="#">
                View All <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group relative aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-stone-100">
<div className="absolute top-0 left-0 z-10 p-4">
<span className="bg-white text-stone-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-block">
                        Atelier
                    </span>
</div>
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale-[10%]" src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-20">
<h3 className="text-xl md:text-2xl font-semibold tracking-tighter mb-2">Private Sessions</h3>
<p className="text-sm font-medium opacity-90 mb-4">Exklusive Betreuung für deine Projekte.</p>
<span className="inline-block border-b border-white pb-0.5 text-xs font-medium tracking-wide uppercase hover:opacity-70 cursor-pointer">Termin Anfragen</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
</div>

<div className="group relative aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-stone-100">
<div className="absolute top-0 left-0 z-10 p-4">
<span className="bg-white text-stone-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-block">
                        Sustainability
                    </span>
</div>
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-20">
<h3 className="text-xl md:text-2xl font-semibold tracking-tighter mb-2">Recycled Gold</h3>
<p className="text-sm font-medium opacity-90 mb-4">100% faires und recyceltes Material.</p>
<span className="inline-block border-b border-white pb-0.5 text-xs font-medium tracking-wide uppercase hover:opacity-70 cursor-pointer">Mehr Erfahren</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
</div>
</div>
</section>

<section className="border-t border-stone-100 py-16 px-4 md:px-8">
<div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-900">Echtes Handwerk</h4>
<p className="text-xs text-stone-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                    Kein vorgefertigter Kitsch. Wir sägen, feilen, löten und schmieden. Du lernst die echten Techniken der Goldschmiedekunst.
                </p>
</div>
<div className="space-y-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-900">Kleine Gruppen</h4>
<p className="text-xs text-stone-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                    Maximal 4 Teilnehmer pro Kurs. Individuelle Betreuung in entspannter, skandinavisch inspirierter Atmosphäre.
                </p>
</div>
<div className="space-y-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-900">Nachhaltigkeit</h4>
<p className="text-xs text-stone-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                    Wir arbeiten ausschließlich mit Recycling-Gold und -Silber sowie konfliktfreien Materialien. Fair und transparent.
                </p>
</div>
</div>
</section>

<footer className="pt-20 pb-8 px-4 md:px-8 bg-stone-50 border-t border-stone-100" id="kontakt">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="space-y-6 md:w-1/3">
<a className="text-xl font-semibold tracking-tighter uppercase text-stone-900" href="#">sternbar</a>
<p className="text-xs text-stone-500 leading-relaxed uppercase tracking-wide">
                    Hafenweg 24, 48155 Münster<br/>
<a className="hover:text-stone-900" href="mailto:hallo@sternbar.de">hallo@sternbar.de</a>
</p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="instagram"></i>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="facebook"></i>
</a>
</div>
</div>
<div className="flex gap-12 md:gap-24">
<div>
<h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-900 mb-4">Shop</h5>
<ul className="space-y-2 text-xs text-stone-500 uppercase tracking-wide">
<li><a className="hover:text-stone-900" href="#">Workshops</a></li>
<li><a className="hover:text-stone-900" href="#">Gutscheine</a></li>
<li><a className="hover:text-stone-900" href="#">Termine</a></li>
</ul>
</div>
<div>
<h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-900 mb-4">Info</h5>
<ul className="space-y-2 text-xs text-stone-500 uppercase tracking-wide">
<li><a className="hover:text-stone-900" href="#">FAQ</a></li>
<li><a className="hover:text-stone-900" href="#">Impressum</a></li>
<li><a className="hover:text-stone-900" href="#">Datenschutz</a></li>
</ul>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-8 border-t border-stone-200">
<p className="text-[10px] text-stone-400 uppercase tracking-wide">© 2023 Sternbar Münster</p>
<div className="flex items-center gap-2">
<p className="text-[10px] text-stone-400 uppercase tracking-wide">Design by Vercel Style</p>
</div>
</div>
</footer>


    </>
  );
}
