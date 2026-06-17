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



        // Language Toggle
        function toggleLanguage() {
            const body = document.body;
            body.classList.toggle('english-mode');
            const isEnglish = body.classList.contains('english-mode');
            localStorage.setItem('lang', isEnglish ? 'en' : 'es');
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                setTimeout(() => menu.classList.remove('opacity-0'), 10); // Transition fix
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                icon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                menu.classList.add('opacity-0');
                setTimeout(() => {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex');
                }, 300);
                document.body.style.overflow = '';
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        }

        // Modal Logic
        function openModal() {
            document.getElementById('bookingModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        function closeModal() {
            document.getElementById('bookingModal').classList.add('hidden');
            document.body.style.overflow = '';
        }

        // Carousel Scroll Logic
        function scrollCarousel(id, direction) {
            const container = document.getElementById(id);
            const scrollAmount = container.clientWidth;
            container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
        }

        // Init Check
        if(localStorage.getItem('lang') === 'en') {
            document.body.classList.add('english-mode');
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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group z-50 relative" href="#">
<div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center shadow-sm group-hover:scale-95 transition-transform">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
</div>
<span className="font-serif font-medium text-lg tracking-tight">Caserito &amp; Co.</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#propiedades"><span className="lang-es">Propiedades</span><span className="lang-en">Properties</span></a>
<a className="hover:text-stone-900 transition-colors" href="#journal">Journal</a>
<a className="hover:text-stone-900 transition-colors" href="#about"><span className="lang-es">Nosotros</span><span className="lang-en">About</span></a>
</div>

<div className="hidden md:flex items-center gap-3">
<button className="px-3 py-1.5 rounded-full hover:bg-stone-100 text-xs font-medium tracking-wide uppercase transition-colors" onclick="toggleLanguage()">
<span className="lang-es">EN</span>
<span className="lang-en">ES</span>
</button>
<button className="flex items-center gap-2 bg-stone-900 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-stone-800 transition-all shadow-sm hover:shadow-md active:scale-95" onclick="openModal()">
<span className="lang-es">Consultar Disponibilidad</span>
<span className="lang-en">Check Availability</span>
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
</button>
</div>

<button className="md:hidden z-50 p-2 text-stone-900 focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#FAFAF9] z-40 hidden flex-col justify-center items-center gap-8 opacity-0 transition-opacity duration-300" id="mobile-menu">
<a className="text-2xl font-serif text-stone-900" href="#propiedades" onclick="toggleMobileMenu()"><span className="lang-es">Propiedades</span><span className="lang-en">Properties</span></a>
<a className="text-2xl font-serif text-stone-900" href="#journal" onclick="toggleMobileMenu()">Journal</a>
<a className="text-2xl font-serif text-stone-900" href="#about" onclick="toggleMobileMenu()"><span className="lang-es">Nosotros</span><span className="lang-en">About</span></a>
<div className="flex items-center gap-4 mt-4">
<button className="px-4 py-2 rounded-full border border-stone-200 uppercase text-sm font-medium" onclick="toggleLanguage()">
<span className="lang-es">Switch to English</span>
<span className="lang-en">Cambiar a Español</span>
</button>
</div>
</div>
</nav>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 sm:hidden w-[90%] max-w-[300px]">
<button className="w-full flex justify-center items-center gap-2 bg-stone-900 text-white px-6 py-3.5 rounded-full text-sm font-medium shadow-xl shadow-stone-900/20 backdrop-blur-sm" onclick="openModal()">
<span className="lang-es">Ver Disponibilidad</span>
<span className="lang-en">Check Availability</span>
</button>
</div>

<header className="pt-32 pb-16 px-4 sm:px-6 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="flex-1 text-center lg:text-left space-y-8 fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white text-[11px] font-medium text-stone-500 shadow-sm">
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
<span className="lang-es">Calificación 4.98/5 en Airbnb</span>
<span className="lang-en">Rated 4.98/5 on Airbnb</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-serif font-medium text-stone-900 tracking-tight">
<span className="lang-es">Alquileres temporarios<br/>de <i className="text-stone-500">alta gama</i> en Argentina.</span>
<span className="lang-en">High-end temporary<br/>rentals in <i className="text-stone-500">Argentina</i>.</span>
</h1>
<p className="text-stone-500 font-light text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
<span className="lang-es">Propiedades equipadas para largas estadías, nómadas digitales y viajeros exigentes. Disfrute la privacidad de un hogar con estándares de hotelería boutique en Buenos Aires y Córdoba.</span>
<span className="lang-en">Properties equipped for long stays, digital nomads, and discerning travelers. Enjoy the privacy of a home with boutique hotel standards in Buenos Aires and Córdoba.</span>
</p>
<div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
<a className="bg-stone-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-sm" href="#propiedades">
<span className="lang-es">Ver Casas &amp; Tarifas</span>
<span className="lang-en">View Homes &amp; Rates</span>
</a>
</div>
</div>

<div className="flex-1 w-full lg:w-auto fade-in" style={{animationDelay: '0.2s'}}>
<div className="hero-grid grid grid-cols-2 gap-3 relative">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-stone-200/50 rounded-full blur-3xl -z-10"></div>
<div className="space-y-3 pt-6">
<div className="rounded-xl overflow-hidden aspect-[4/5] shadow-sm">
<img alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_800w.jpg"/>
</div>
<div className="rounded-xl overflow-hidden aspect-square shadow-sm">
<img alt="View" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/138dd20b-dba7-4472-ac67-90747550c3b4_800w.jpg"/>
</div>
</div>
<div className="space-y-3">
<div className="rounded-xl overflow-hidden aspect-square shadow-sm">
<img alt="Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfec83a7-7e89-4bf8-b834-dc46a7d58978_800w.jpg"/>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/5] shadow-sm">
<img alt="Window" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9a715c4-56c0-4ca8-bc96-c417b473e42c_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-4 sm:px-6 bg-white border-y border-stone-100" id="propiedades">
<div className="max-w-6xl mx-auto space-y-32">

<article className="grid md:grid-cols-2 gap-10 md:gap-16 items-start group">

<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 group/slider">
<div className="carousel flex overflow-x-auto snap-x snap-mandatory hide-scroll w-full h-full scroll-smooth" id="carousel-1">
<img alt="Loft 1" className="snap-center min-w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b9edb16-de00-4fc3-a504-aa04cc6af394_1600w.jpg"/>
<img alt="Loft 2" className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Loft 3" className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Loft 4" className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white text-stone-900 opacity-0 group-hover/slider:opacity-100 transition-opacity" onclick="scrollCarousel('carousel-1', -1)">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white text-stone-900 opacity-0 group-hover/slider:opacity-100 transition-opacity" onclick="scrollCarousel('carousel-1', 1)">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-stone-900 border border-white/50 z-10">
                        San Telmo, BA
                    </div>
</div>
<div className="space-y-6">
<div className="space-y-2">
<h2 className="text-3xl font-serif text-stone-900">Caserito Loft</h2>
<p className="text-stone-500 font-light">
<span className="lang-es">Loft histórico &amp; techos altos</span>
<span className="lang-en">Historic Loft &amp; High Ceilings</span>
</p>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
<span className="lang-es">Ubicado en el casco histórico. Ideal para estancias creativas, cuenta con techos de 5 metros, luz natural abundante y una oficina equipada para trabajo remoto.</span>
<span className="lang-en">Located in the historic district. Ideal for creative stays, featuring 5-meter ceilings, abundant natural light, and a fully equipped office for remote work.</span>
</p>

<ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-stone-500 font-medium opacity-90 py-2">
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:maximize-square-linear"></iconify-icon> 85m² Duplex</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:wifi-square-linear"></iconify-icon> 300MB Fiber</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:laptop-minimalistic-linear"></iconify-icon> Monitor 27"</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:cup-linear"></iconify-icon> Nespresso</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:washing-machine-linear"></iconify-icon> Laundry</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:shield-check-linear"></iconify-icon> Self Check-in</li>
</ul>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-stone-100 mt-2">
<button className="w-full sm:w-auto flex-1 bg-stone-900 text-white px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-stone-800 transition-colors text-center" onclick="openModal()">
<span className="lang-es">Consultar Disponibilidad</span>
<span className="lang-en">Check Availability</span>
</button>
<a className="w-full sm:w-auto flex-1 border border-stone-200 text-stone-900 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-stone-50 transition-colors text-center flex items-center justify-center gap-2" href="https://airbnb.com" target="_blank">
<span className="lang-es">Reservar en Airbnb</span>
<span className="lang-en">Book on Airbnb</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="grid md:grid-cols-2 gap-10 md:gap-16 items-start group">
<div className="md:order-2 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 group/slider">
<div className="carousel flex overflow-x-auto snap-x snap-mandatory hide-scroll w-full h-full scroll-smooth" id="carousel-2">
<img alt="Cabin 1" className="snap-center min-w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Cabin 2" className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Cabin 3" className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Cabin 4" className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white text-stone-900 opacity-0 group-hover/slider:opacity-100 transition-opacity" onclick="scrollCarousel('carousel-2', -1)">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white text-stone-900 opacity-0 group-hover/slider:opacity-100 transition-opacity" onclick="scrollCarousel('carousel-2', 1)">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-stone-900 border border-white/50 z-10">
                        La Cumbre, CBA
                    </div>
</div>
<div className="md:order-1 space-y-6">
<div className="space-y-2">
<h2 className="text-3xl font-serif text-stone-900">Liz Cabin</h2>
<p className="text-stone-500 font-light">
<span className="lang-es">Refugio de montaña &amp; biblioteca</span>
<span className="lang-en">Mountain Retreat &amp; Library</span>
</p>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
<span className="lang-es">Un santuario de silencio en las sierras. Rodeada de naturaleza autóctona, Liz ofrece una experiencia de desconexión total con chimenea y biblioteca curada.</span>
<span className="lang-en">A sanctuary of silence in the hills. Surrounded by native nature, Liz offers a total disconnection experience with a fireplace and curated library.</span>
</p>
<ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-stone-500 font-medium opacity-90 py-2">
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:tree-linear"></iconify-icon> 2000m² Park</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:flame-linear"></iconify-icon> Wood Fireplace</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:book-linear"></iconify-icon> Library</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:chef-hat-linear"></iconify-icon> Full Kitchen</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:sun-fog-linear"></iconify-icon> Mountain View</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:paw-linear"></iconify-icon> Pet Friendly</li>
</ul>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-stone-100 mt-2">
<button className="w-full sm:w-auto flex-1 bg-stone-900 text-white px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-stone-800 transition-colors text-center" onclick="openModal()">
<span className="lang-es">Consultar Disponibilidad</span>
<span className="lang-en">Check Availability</span>
</button>
<a className="w-full sm:w-auto flex-1 border border-stone-200 text-stone-900 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-stone-50 transition-colors text-center flex items-center justify-center gap-2" href="https://airbnb.com" target="_blank">
<span className="lang-es">Reservar en Airbnb</span>
<span className="lang-en">Book on Airbnb</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="grid md:grid-cols-2 gap-10 md:gap-16 items-start group">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 group/slider">
<div className="carousel flex overflow-x-auto snap-x snap-mandatory hide-scroll w-full h-full scroll-smooth" id="carousel-3">
<img alt="Modern 1" className="snap-center min-w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Modern 2" className="snap-center min-w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Modern 3" className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Modern 4" className="snap-center min-w-full h-full object-cover" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white text-stone-900 opacity-0 group-hover/slider:opacity-100 transition-opacity" onclick="scrollCarousel('carousel-3', -1)">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white text-stone-900 opacity-0 group-hover/slider:opacity-100 transition-opacity" onclick="scrollCarousel('carousel-3', 1)">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-stone-900 border border-white/50 z-10">
                        Palermo, BA
                    </div>
</div>
<div className="space-y-6">
<div className="space-y-2">
<h2 className="text-3xl font-serif text-stone-900">Caserito II</h2>
<p className="text-stone-500 font-light">
<span className="lang-es">Diseño urbano &amp; luz natural</span>
<span className="lang-en">Urban Design &amp; Natural Light</span>
</p>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
<span className="lang-es">El equilibrio perfecto entre la vida cosmopolita y la calma del hogar. Situado en el corazón de Palermo Hollywood, a pasos de la mejor gastronomía.</span>
<span className="lang-en">The perfect balance between cosmopolitan life and home calm. Located in the heart of Palermo Hollywood, steps away from the best gastronomy.</span>
</p>
<ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-stone-500 font-medium opacity-90 py-2">
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:balcony-linear"></iconify-icon> Private Balcony</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:tv-linear"></iconify-icon> Smart TV 55"</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:airbuds-case-linear"></iconify-icon> Sound System</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:bed-linear"></iconify-icon> Queen Size</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:snow-flake-linear"></iconify-icon> AC / Heating</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-900" icon="solar:lock-keyhole-linear"></iconify-icon> 24h Security</li>
</ul>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-stone-100 mt-2">
<button className="w-full sm:w-auto flex-1 bg-stone-900 text-white px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-stone-800 transition-colors text-center" onclick="openModal()">
<span className="lang-es">Consultar Disponibilidad</span>
<span className="lang-en">Check Availability</span>
</button>
<a className="w-full sm:w-auto flex-1 border border-stone-200 text-stone-900 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-stone-50 transition-colors text-center flex items-center justify-center gap-2" href="https://airbnb.com" target="_blank">
<span className="lang-es">Reservar en Airbnb</span>
<span className="lang-en">Book on Airbnb</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</article>
</div>
</section>

<section className="py-20 bg-stone-900 text-stone-100" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-stone-700 mb-6">
<img alt="Lucía" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_800w.jpg"/>
</div>
<h3 className="text-2xl font-serif mb-4">
<span className="lang-es">Hola, soy Lucía</span>
<span className="lang-en">Hi, I'm Lucía</span>
</h3>
<p className="text-stone-400 font-light leading-relaxed max-w-xl mx-auto mb-8">
<span className="lang-es">Ilustradora y anfitriona apasionada por los detalles. Mi misión es crear espacios que inspiren calma y creatividad, honrando la historia de cada lugar y ofreciendo una hospitalidad genuina.</span>
<span className="lang-en">Illustrator and host passionate about details. My mission is to create spaces that inspire calm and creativity, honoring the history of each place and offering genuine hospitality.</span>
</p>
<a className="text-xs font-medium uppercase tracking-widest hover:text-white transition-colors border-b border-stone-700 pb-1" href="https://airbnb.com/users/show/48358245" target="_blank">
<span className="lang-es">Perfil de Anfitriona</span>
<span className="lang-en">Host Profile</span>
</a>
</div>
</section>

<section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto" id="journal">
<h3 className="text-2xl font-serif text-stone-900 mb-10 flex items-center gap-3">
<span className="lang-es">Journal</span>
<span className="lang-en">Journal</span>
<span className="h-px flex-1 bg-stone-200"></span>
</h3>
<div className="grid sm:grid-cols-3 gap-8">

<a className="group cursor-pointer" href="blog-san-telmo.html" target="_blank">
<div className="aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-stone-200 relative">
<img alt="San Telmo Guide" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm">Guide</div>
</div>
<h4 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors mb-2 leading-tight">
<span className="lang-es">La guía definitiva de San Telmo: Dónde comen los locales</span>
<span className="lang-en">The Ultimate San Telmo Guide: Where Locals Actually Eat</span>
</h4>
<p className="text-xs text-stone-500 line-clamp-2">Descubre bodegones ocultos y cafés de especialidad fuera del circuito turístico tradicional.</p>
</a>

<a className="group cursor-pointer" href="blog-slow-travel.html" target="_blank">
<div className="aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-stone-200 relative">
<img alt="Slow Travel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm">Lifestyle</div>
</div>
<h4 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors mb-2 leading-tight">
<span className="lang-es">Slow Travel en Córdoba: Por qué necesitamos el silencio</span>
<span className="lang-en">Slow Travel in Córdoba: Why We Need Silence to Create</span>
</h4>
<p className="text-xs text-stone-500 line-clamp-2">Una reflexión sobre la creatividad, la naturaleza y cómo el entorno influye en nuestro trabajo.</p>
</a>

<a className="group cursor-pointer" href="blog-remote-work.html" target="_blank">
<div className="aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-stone-200 relative">
<img alt="Remote Work Setup" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm">Nomad</div>
</div>
<h4 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors mb-2 leading-tight">
<span className="lang-es">Buenos Aires para Nómadas Digitales: Logística y Lifestyle</span>
<span className="lang-en">Buenos Aires for Digital Nomads: Logistics &amp; Lifestyle</span>
</h4>
<p className="text-xs text-stone-500 line-clamp-2">Todo lo que necesitas saber sobre conectividad, coworking y seguridad en la ciudad de la furia.</p>
</a>
</div>
</section>

<section className="pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
<div className="flex justify-between items-end mb-6">
<h3 className="text-xl font-serif text-stone-900">@caserito.co</h3>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 flex items-center gap-1 transition-colors" href="https://instagram.com" target="_blank">
                Follow us <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<a className="aspect-square bg-stone-100 overflow-hidden relative group" href="#">
<img alt="Insta 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<iconify-icon icon="cib:instagram" width="24"></iconify-icon>
</div>
</a>
<a className="aspect-square bg-stone-100 overflow-hidden relative group" href="#">
<img alt="Insta 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<iconify-icon icon="cib:instagram" width="24"></iconify-icon>
</div>
</a>
<a className="aspect-square bg-stone-100 overflow-hidden relative group" href="#">
<img alt="Insta 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<iconify-icon icon="cib:instagram" width="24"></iconify-icon>
</div>
</a>
<a className="aspect-square bg-stone-100 overflow-hidden relative group" href="#">
<img alt="Insta 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<iconify-icon icon="cib:instagram" width="24"></iconify-icon>
</div>
</a>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8 px-4 sm:px-6" id="contact">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1 space-y-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="font-serif font-medium">Caserito &amp; Co.</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed">
<span className="lang-es">Hogares boutique para viajeros conscientes. Diseño, historia y confort en Argentina.</span>
<span className="lang-en">Boutique homes for conscious travelers. Design, history, and comfort in Argentina.</span>
</p>
</div>
<div className="md:col-span-1">
<h5 className="font-serif text-sm font-medium mb-4">Sitemap</h5>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-stone-900" href="#">Home</a></li>
<li><a className="hover:text-stone-900" href="#propiedades"><span className="lang-es">Propiedades</span><span className="lang-en">Properties</span></a></li>
<li><a className="hover:text-stone-900" href="#journal">Journal</a></li>
<li><a className="hover:text-stone-900" href="#contact"><span className="lang-es">Contacto</span><span className="lang-en">Contact</span></a></li>
</ul>
</div>
<div className="md:col-span-1">
<h5 className="font-serif text-sm font-medium mb-4">Social</h5>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-[#FF385C] flex items-center gap-1" href="https://airbnb.com/users/show/48358245" target="_blank"><iconify-icon icon="cib:airbnb"></iconify-icon> Airbnb Profile</a></li>
<li><a className="hover:text-purple-600 flex items-center gap-1" href="https://instagram.com" target="_blank"><iconify-icon icon="cib:instagram"></iconify-icon> Instagram</a></li>
</ul>
</div>
<div className="md:col-span-1">
<h5 className="font-serif text-sm font-medium mb-4"><span className="lang-es">Contacto Directo</span><span className="lang-en">Direct Contact</span></h5>
<ul className="space-y-2 text-xs text-stone-500">
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> hello@caserito.co</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> +54 9 11 1234 5678</li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-stone-400">© 2024 Caserito &amp; Co. All rights reserved.</p>
<p className="text-[10px] text-stone-300">San Telmo • Palermo • La Cumbre</p>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="bookingModal">
<div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative fade-in flex flex-col">

<div className="sticky top-0 bg-white z-10 p-6 border-b border-stone-100 flex justify-between items-center">
<div>
<h3 className="text-xl font-serif text-stone-900">
<span className="lang-es">Consultar Disponibilidad</span>
<span className="lang-en">Check Availability</span>
</h3>
<p className="text-xs text-stone-500 mt-1">
<span className="lang-es">Consulta directa sin comisiones.</span>
<span className="lang-en">Direct inquiry, no commissions.</span>
</p>
</div>
<button className="text-stone-400 hover:text-stone-900 transition-colors p-1" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="p-6">
<form className="space-y-5" onsubmit="event.preventDefault(); closeModal(); alert('Thanks for your inquiry! We will contact you shortly.');">

<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Property</label>
<div className="relative">
<select className="w-full text-sm border border-stone-200 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:border-stone-900 appearance-none">
<option>Select a property...</option>
<option>Caserito Loft (San Telmo)</option>
<option>Liz Cabin (La Cumbre)</option>
<option>Caserito II (Palermo)</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Check-in</label>
<input className="w-full text-sm border border-stone-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-stone-900 text-stone-600" type="date"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Check-out</label>
<input className="w-full text-sm border border-stone-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-stone-900 text-stone-600" type="date"/>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Adults</label>
<div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
<button className="px-3 py-2 bg-stone-50 hover:bg-stone-100 text-stone-600 border-r border-stone-200" type="button">-</button>
<input className="w-full text-center text-sm py-2 focus:outline-none" min="1" readonly="" type="number" value="2"/>
<button className="px-3 py-2 bg-stone-50 hover:bg-stone-100 text-stone-600 border-l border-stone-200" type="button">+</button>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Children</label>
<div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
<button className="px-3 py-2 bg-stone-50 hover:bg-stone-100 text-stone-600 border-r border-stone-200" type="button">-</button>
<input className="w-full text-center text-sm py-2 focus:outline-none" min="0" readonly="" type="number" value="0"/>
<button className="px-3 py-2 bg-stone-50 hover:bg-stone-100 text-stone-600 border-l border-stone-200" type="button">+</button>
</div>
</div>
</div>

<div className="space-y-3 pt-2">
<input className="w-full text-sm border-b border-stone-200 py-2 bg-transparent focus:outline-none focus:border-stone-900 rounded-none placeholder-stone-400" placeholder="Full Name" required="" type="text"/>
<input className="w-full text-sm border-b border-stone-200 py-2 bg-transparent focus:outline-none focus:border-stone-900 rounded-none placeholder-stone-400" placeholder="Email Address" required="" type="email"/>
<textarea className="w-full text-sm border border-stone-200 rounded-lg p-3 mt-2 bg-stone-50/50 focus:outline-none focus:border-stone-900 focus:bg-white resize-none placeholder-stone-400" placeholder="Tell us about your trip..." rows="3"></textarea>
</div>
<button className="w-full bg-stone-900 text-white text-sm font-medium py-3.5 rounded-lg hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10 flex justify-center items-center gap-2 group" type="submit">
<span className="lang-es">Enviar Consulta</span>
<span className="lang-en">Send Inquiry</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>



    </>
  );
}
