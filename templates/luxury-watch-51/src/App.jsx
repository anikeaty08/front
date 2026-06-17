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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        const menuOpen = document.getElementById('menu-open');
        const menuClose = document.getElementById('menu-close');
        const sideMenu = document.getElementById('side-menu');

        menuOpen.addEventListener('click', () => {
            sideMenu.classList.remove('translate-x-full');
        });

        menuClose.addEventListener('click', () => {
            sideMenu.classList.add('translate-x-full');
        });

        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            const logo = document.getElementById('nav-logo');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(253, 253, 252, 0.95)';
                nav.classList.remove('text-white');
                nav.style.padding = '1.5rem 3rem';
                logo.style.filter = 'none';
            } else {
                nav.style.background = 'transparent';
                nav.classList.add('text-white');
                nav.style.padding = '2rem 3rem';
                logo.style.filter = 'brightness(0) invert(1)';
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        const drawer = document.getElementById('product-drawer');
        const drawerClose = document.getElementById('drawer-close');
        const triggers = document.querySelectorAll('.product-trigger');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const title = trigger.getAttribute('data-title');
                const ref = trigger.getAttribute('data-ref');
                document.getElementById('drawer-title').innerText = title;
                document.getElementById('drawer-ref').innerText = ref;
                drawer.classList.remove('translate-x-full');
            });
        });

        drawerClose.addEventListener('click', () => {
            drawer.classList.add('translate-x-full');
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
      
<div className="bg-grain"></div>
<nav className="fixed top-0 w-full z-[100] py-8 px-6 md:px-12 flex justify-between items-center transition-all duration-700" id="navbar" style={{background: 'transparent', padding: '2rem 3rem'}}>
<button className="flex items-center gap-4 group mix-blend-difference text-white" id="menu-open">
<div className="space-y-[5px]">
<span className="block w-6 h-[1px] bg-current"></span>
<span className="block w-4 h-[1px] bg-current transition-all group-hover:w-6"></span>
</div>
<span className="text-xs uppercase tracking-[0.4em] font-light hidden md:block">Menu</span>
</button>
<div className="absolute left-1/2 -translate-x-1/2 pointer-events-auto">
<img alt="MUGEN" className="h-6 md:h-8 object-contain brightness-0 invert" id="nav-logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'brightness(0) invert(1)'}}/>
</div>
<div className="flex gap-6 mix-blend-difference text-white">
<i className="w-4 h-4 stroke-[1.5] cursor-pointer hover:text-[#bda67a]" data-lucide="search"></i>
<i className="w-4 h-4 stroke-[1.5] cursor-pointer" data-lucide="shopping-bag"></i>
</div>
</nav>
<div className="fixed inset-0 z-[110] bg-[#0a0a0a] text-white translate-x-full transition-transform duration-[0.8s] ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col justify-center px-8 md:px-24" id="side-menu">
<button className="absolute top-10 right-10 group" id="menu-close">
<i className="w-8 h-8 stroke-[1.5] group-hover:rotate-90 transition-transform" data-lucide="x"></i>
</button>
<div className="grid md:grid-cols-2 gap-20 items-center">
<ul className="space-y-6">
<li><a className="font-['Cormorant_Garamond'] text-6xl md:text-8xl italic font-light hover:text-[#bda67a] transition-colors" href="#">Kolekcje</a>
</li>
<li><a className="font-['Cormorant_Garamond'] text-6xl md:text-8xl italic font-light hover:text-[#bda67a] transition-colors" href="#">Savoir-Faire</a>
</li>
<li><a className="font-['Cormorant_Garamond'] text-6xl md:text-8xl italic font-light hover:text-[#bda67a] transition-colors" href="#">Butiki</a>
</li>
</ul>
</div>
</div>
<header className="relative h-screen w-full bg-black overflow-hidden flex items-end pb-24 px-8 md:px-20">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-50" loop="" muted="" playsinline="">
<source src="filmseiko1.mp4" type="video/mp4"/>
</video>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 reveal active">
<p className="text-xs uppercase text-[#bda67a] tracking-[0.6em] mb-4">Mugen Magnifique</p>
<h1 className="md:text-9xl leading-none text-6xl font-light italic text-white font-['Cormorant_Garamond'] mb-10 tracking-tight">Seiko mods<span className="not-italic text-4xl md:text-6xl block mt-4 tracking-tight">Ref. MM-01</span></h1>
<a className="inline-block text-xs uppercase hover:bg-white hover:text-black transition-all text-slate-50 tracking-[0.4em] border-white/30 border rounded-full pt-4 pr-12 pb-4 pl-12" href="#kolekcje">
                Eksploruj
            </a>
</div>
</header>
<section className="py-40 bg-white px-8" id="kolekcje">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-48 reveal">
<div className="md:col-span-7 bg-[#f9f8f6] aspect-video flex items-center justify-center p-12 overflow-hidden cursor-pointer product-trigger" data-ref="Ref. 5204G" data-title="L'Éclipse Blue">
<img className="w-3/4 object-contain hover:scale-110 transition-transform duration-[3s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="md:col-span-4 md:col-start-9">
<h3 className="font-['Cormorant_Garamond'] text-5xl italic mb-6 tracking-tight">L'Éclipse Blue</h3>
<p className="text-base font-light text-gray-500 leading-relaxed mb-8 uppercase tracking-widest">Platyna •
                        Granatowa Tarcza</p>
<button className="text-xs border-b border-black pb-1 tracking-[0.4em] uppercase product-trigger" data-ref="Ref. 5204G" data-title="L'Éclipse Blue">Szczegóły</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center reveal">
<div className="md:col-span-4 order-2 md:order-1">
<h3 className="font-['Cormorant_Garamond'] text-5xl italic mb-6 tracking-tight">Rose Gold Skeleton</h3>
<p className="text-base font-light text-gray-500 leading-relaxed mb-8 uppercase tracking-widest">18K
                        Różowe Złoto • Kaliber MM-01</p>
<button className="text-xs border-b border-black pb-1 tracking-[0.4em] uppercase product-trigger" data-ref="Ref. 5711R" data-title="Rose Gold Skeleton">Szczegóły</button>
</div>
<div className="md:col-span-7 md:col-start-6 order-1 md:order-2 bg-[#f9f8f6] aspect-video flex items-center justify-center p-12 overflow-hidden cursor-pointer product-trigger" data-ref="Ref. 5711R" data-title="Rose Gold Skeleton">
<img className="w-3/4 object-contain hover:scale-110 transition-transform duration-[3s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[var(--ivory)] px-8 border-t border-gray-100" id="seiko-mods">
<div className="max-w-[1400px] mx-auto reveal">
<div className="text-center mb-24">
<p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 font-light">Iconic</p>
<h2 className="text-4xl md:text-5xl font-['Montserrat'] font-medium tracking-tight text-[var(--black)]">SEIKO MODS</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

<div className="group cursor-pointer product-trigger" data-ref="Ref. GMT-BW" data-title="Gmteiko - Bruce Wayne">
<div className="bg-[#f9f8f6] aspect-[4/5] flex items-center justify-center p-8 mb-6 overflow-hidden">
<img alt="Gmteiko - Bruce Wayne" className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex flex-col items-start">
<h4 className="text-base font-medium text-[var(--black)] mb-1">Gmteiko - Bruce Wayne</h4>
<p className="text-base font-light text-gray-500">1.133,00 PLN</p>
</div>
</div>

<div className="group cursor-pointer product-trigger" data-ref="Ref. OHN-C" data-title="Open Heart Nautiko - Chocolate">
<div className="bg-[#f9f8f6] aspect-[4/5] flex items-center justify-center p-8 mb-6 overflow-hidden">
<img alt="Open Heart Nautiko - Chocolate" className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex flex-col items-start">
<h4 className="text-base font-medium text-[var(--black)] mb-1">Open Heart Nautiko - Chocolate</h4>
<p className="text-base font-light text-gray-500">1.133,00 PLN</p>
</div>
</div>

<div className="group cursor-pointer product-trigger" data-ref="Ref. SJ-W" data-title="Seikojust - Wimbledon">
<div className="bg-[#f9f8f6] aspect-[4/5] flex items-center justify-center p-8 mb-6 overflow-hidden">
<img alt="Seikojust - Wimbledon" className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col items-start">
<h4 className="text-base font-medium text-[var(--black)] mb-1">Seikojust - Wimbledon</h4>
<p className="text-base font-light text-gray-500">1.084,00 PLN</p>
</div>
</div>

<div className="group cursor-pointer product-trigger" data-ref="Ref. SM-JB" data-title="Seikomaster - James Bond 007">
<div className="bg-[#f9f8f6] aspect-[4/5] flex items-center justify-center p-8 mb-6 overflow-hidden">
<img alt="Seikomaster - James Bond 007" className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col items-start">
<h4 className="text-base font-medium text-[var(--black)] mb-1">Seikomaster - James Bond 007</h4>
<p className="text-base font-light text-gray-500">1.084,00 PLN</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0a0a0a] text-white py-24 px-8 border-t border-white/10">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 reveal">
<div className="md:col-span-4">
<img alt="MUGEN" className="h-6 object-contain mb-8 filter invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<p className="text-base font-light text-gray-400 max-w-sm leading-relaxed">
                    Ekskluzywne modyfikacje zegarków. Rzemiosło, precyzja i unikalny design dopasowany do Twojego stylu.
                </p>
</div>
<div className="md:col-span-2 md:col-start-7">
<h4 className="text-xs uppercase tracking-[0.2em] mb-8 font-medium text-gray-200">Kolekcje</h4>
<ul className="space-y-4 text-base font-light text-gray-400">
<li><a className="hover:text-[var(--gold)] transition-colors duration-300" href="#">Seiko Mods</a></li>
<li><a className="hover:text-[var(--gold)] transition-colors duration-300" href="#">Nautilus Line</a></li>
<li><a className="hover:text-[var(--gold)] transition-colors duration-300" href="#">Royal Oak</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs uppercase tracking-[0.2em] mb-8 font-medium text-gray-200">Maison</h4>
<ul className="space-y-4 text-base font-light text-gray-400">
<li><a className="hover:text-[var(--gold)] transition-colors duration-300" href="#">Savoir-Faire</a></li>
<li><a className="hover:text-[var(--gold)] transition-colors duration-300" href="#">O Nas</a></li>
<li><a className="hover:text-[var(--gold)] transition-colors duration-300" href="#">Butiki</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs uppercase tracking-[0.2em] mb-8 font-medium text-gray-200">Kontakt</h4>
<ul className="space-y-4 text-base font-light text-gray-400">
<li>concierge@mugen.com</li>
<li>+48 123 456 789</li>
</ul>
</div>
</div>
</footer>
<div className="fixed top-0 right-0 w-full md:w-[500px] h-full bg-white z-[150] translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] shadow-2xl p-12 flex flex-col" id="product-drawer">
<button className="mb-20" id="drawer-close">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="arrow-left"></i>
</button>
<p className="text-xs tracking-[0.5em] text-[#bda67a] uppercase mb-4" id="drawer-ref">Ref. XXXX</p>
<h2 className="font-['Cormorant_Garamond'] text-5xl italic mb-10 tracking-tight" id="drawer-title">Zegarek</h2>
<div className="space-y-8 text-gray-500 font-light text-base leading-relaxed mb-12">
<p>Ręcznie składany mechanizm z naciągiem automatycznym. Koperta ze stali szlachetnej 316L, polerowana
                metodą Zaratsu.</p>
<div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
<div>
<span className="block text-black text-xl font-['Cormorant_Garamond'] italic">40 mm</span>
<span className="text-xs uppercase tracking-widest">Średnica</span>
</div>
<div>
<span className="block text-black text-xl font-['Cormorant_Garamond'] italic">72h</span>
<span className="text-xs uppercase tracking-widest">Rezerwa chodu</span>
</div>
</div>
</div>
<button className="w-full py-5 bg-black text-white text-xs uppercase tracking-[0.4em] hover:bg-[#bda67a] transition-colors mt-auto">Zapytaj Konsjerża</button>
</div>


    </>
  );
}
