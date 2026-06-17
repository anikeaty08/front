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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
medical: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
900: '#0c4a6e',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Intersection Observer for Animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      }, observerOptions);

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });

      // Mobile Menu Logic
      const mobileOpen = document.getElementById('mobileOpen');
      const mobileClose = document.getElementById('mobileClose');
      const mobileDrawer = document.getElementById('mobileDrawer');
      const drawerContent = mobileDrawer.querySelector('div.bg-white');

      function toggleMobileMenu(show) {
        if (show) {
          mobileDrawer.classList.remove('hidden');
          requestAnimationFrame(() => {
            drawerContent.classList.remove('-translate-x-full');
          });
        } else {
          drawerContent.classList.add('-translate-x-full');
          setTimeout(() => {
            mobileDrawer.classList.add('hidden');
          }, 300);
        }
      }

      mobileOpen.addEventListener('click', () => toggleMobileMenu(true));
      mobileClose.addEventListener('click', () => toggleMobileMenu(false));
      mobileDrawer.querySelector('#mobileBackdrop').addEventListener('click', () => toggleMobileMenu(false));

      // Theme Toggle Logic
      const themeToggle = document.getElementById('themeToggle');
      const html = document.documentElement;

      // Check local storage or system preference
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }

      themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
          localStorage.theme = 'dark';
        } else {
          localStorage.theme = 'light';
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
      

<div className="hidden sm:block bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-medium tracking-wide py-2.5 px-6 text-center animate-on-scroll fade-in animate">
<span className="opacity-90">Trusted by over 500,000 Health Seekers across Queens, Manhattan &amp; Brooklyn</span>
</div>

<header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="lg:hidden p-2 -ml-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" id="mobileOpen">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="text-xl font-bold font-serif tracking-tight uppercase" href="#">Acuiderm</a>
</div>
<nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
<div className="relative services-menu group h-20 flex items-center">
<button className="flex items-center gap-1.5 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              Services
              <iconify-icon className="text-xs opacity-50 group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="services-dropdown absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-8 z-50">
<div>
<h4 className="font-semibold text-neutral-900 dark:text-white mb-4 border-b border-neutral-100 dark:border-neutral-700 pb-2">Medical</h4>
<div className="flex flex-col gap-2.5">
<a className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm" href="#">Acne &amp; Rosacea</a>
<a className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm" href="#">Eczema &amp; Psoriasis</a>
<a className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm" href="#">Skin Cancer Screening</a>
<a className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm" href="#">Wart &amp; Cyst Removal</a>
</div>
</div>
<div>
<h4 className="font-semibold text-neutral-900 dark:text-white mb-4 border-b border-neutral-100 dark:border-neutral-700 pb-2">Cosmetic</h4>
<div className="flex flex-col gap-2.5">
<a className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm" href="#">Botox &amp; Fillers</a>
<a className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm" href="#">Laser Resurfacing</a>
<a className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm" href="#">CoolSculpting</a>
<a className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm" href="#">Ultherapy</a>
</div>
</div>
</div>
</div>
<a className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors" href="#locations">Locations</a>
<a className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors" href="#about">About</a>
<a className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors" href="tel:718-661-9554">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
            718-661-9554
          </a>
<a className="hidden sm:inline-flex bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95" href="#appointment">
            Book Appointment
          </a>
<button className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400" id="themeToggle">
<iconify-icon className="text-xl dark:hidden" icon="solar:sun-2-linear"></iconify-icon>
<iconify-icon className="text-xl hidden dark:block" icon="solar:moon-stars-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-50 hidden" id="mobileDrawer">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" id="mobileBackdrop"></div>
<div className="absolute left-0 top-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-neutral-900 shadow-2xl transform -translate-x-full transition-transform duration-300 p-6 flex flex-col">
<div className="flex items-center justify-between mb-8">
<span className="text-lg font-bold font-serif uppercase">Acuiderm</span>
<button className="p-2 -mr-2 text-neutral-500" id="mobileClose">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<nav className="flex flex-col gap-6 text-lg font-medium">
<a className="hover:text-blue-500" href="#services">Services</a>
<a className="hover:text-blue-500" href="#locations">Locations</a>
<a className="hover:text-blue-500" href="#about">About Dr. Cui</a>
<a className="hover:text-blue-500" href="#contact">Contact</a>
</nav>
<div className="mt-auto pt-6 border-t border-neutral-100 dark:border-neutral-800">
<a className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 rounded-lg font-medium mb-4" href="#appointment">
            Book Appointment
          </a>
<a className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400" href="tel:718-661-9554">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
            718-661-9554
          </a>
</div>
</div>
</div>

<section className="relative min-h-[600px] h-[85vh] flex items-center overflow-hidden bg-neutral-900">
<div className="absolute inset-0 z-0 animate-on-scroll scale-in animate">
<img alt="Dermatology Clinic" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=2068"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium tracking-wide mb-6 animate-on-scroll fade-in stagger-1 animate">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Accepting New Patients
          </div>
<h1 className="text-5xl md:text-7xl font-bold font-serif text-white tracking-tight leading-[1.1] mb-6 animate-on-scroll fade-in stagger-2 animate">
            Expert Dermatology &amp; <br/> Cosmetic Surgery
          </h1>
<p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-10 animate-on-scroll fade-in stagger-3 animate">
            Experience world-class skin care with Dr. Jian C. Cui. Delivering over 30 years of clinical excellence in medical and aesthetic dermatology.
          </p>
<div className="flex flex-col sm:flex-row gap-4 animate-on-scroll fade-in stagger-4 animate">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-all hover:scale-105 shadow-lg shadow-white/10" href="#appointment">
              Request Appointment
              <iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all" href="tel:718-661-9554">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
              718-661-9554
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-on-scroll slide-up">
<div>
<span className="text-blue-600 dark:text-blue-400 font-medium tracking-tight text-sm uppercase">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 tracking-tight">Our Services</h2>
<p className="text-neutral-600 dark:text-neutral-400 mt-3 max-w-lg">Advanced treatments tailored to your unique skin needs.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors" href="#">
          View all services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">

<div className="flex-card group relative rounded-2xl overflow-hidden cursor-pointer h-[250px] md:h-auto animate-on-scroll fade-in stagger-1">
<img alt="Medical Dermatology" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.65]" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="text-white text-2xl font-serif font-medium mb-2">Medical</h3>
<p className="text-white/80 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 ease-out overflow-hidden leading-relaxed">
                Treatment for Acne, Rosacea, Psoriasis, Eczema, and comprehensive skin cancer screenings.
              </p>
</div>
<div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
<iconify-icon className="text-white text-3xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex-card group relative rounded-2xl overflow-hidden cursor-pointer h-[250px] md:h-auto animate-on-scroll fade-in stagger-2">
<img alt="Cosmetic Injectables" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.65]" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="text-white text-2xl font-serif font-medium mb-2">Injectables</h3>
<p className="text-white/80 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 ease-out overflow-hidden leading-relaxed">
                Restore youth with Botox®, Dysport®, Juvederm®, Restylane® and Kybella®.
              </p>
</div>
<div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
<iconify-icon className="text-white text-3xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex-card group relative rounded-2xl overflow-hidden cursor-pointer h-[250px] md:h-auto animate-on-scroll fade-in stagger-3">
<img alt="Laser Treatments" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.65]" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="text-white text-2xl font-serif font-medium mb-2">Laser &amp; Body</h3>
<p className="text-white/80 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 ease-out overflow-hidden leading-relaxed">
                Advanced technology including Ultherapy®, CoolSculpting®, Fraxel® and Laser Hair Removal.
              </p>
</div>
<div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
<iconify-icon className="text-white text-3xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex-card group relative rounded-2xl overflow-hidden cursor-pointer h-[250px] md:h-auto animate-on-scroll fade-in stagger-4">
<img alt="Surgical Services" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.65]" src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="text-white text-2xl font-serif font-medium mb-2">Surgery</h3>
<p className="text-white/80 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 ease-out overflow-hidden leading-relaxed">
                Expert removal of moles, cysts, lipomas, and skin tags with minimal scarring techniques.
              </p>
</div>
<div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
<iconify-icon className="text-white text-3xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 dark:bg-neutral-800/50 border-y border-neutral-200 dark:border-neutral-800" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-on-scroll slide-up">
<div>
<span className="text-blue-600 dark:text-blue-400 font-medium tracking-tight text-sm uppercase">Visit Us</span>
<h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 tracking-tight">Our Locations</h2>
<p className="text-neutral-600 dark:text-neutral-400 mt-3 max-w-lg">Conveniently located across New York City.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-black/50 transition-all duration-300 flex flex-col h-full">
<div className="h-48 bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
<img alt="Flushing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1543489822-c49534f3271f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<span className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold uppercase px-3 py-1 rounded-md shadow-sm">Queens</span>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-serif font-bold mb-2">Flushing</h3>
<p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow">136-20 38th Ave #5H<br/>Flushing, NY 11354</p>
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-sm font-medium" href="https://maps.app.goo.gl/LbpNqtgzUqqujKQ66" target="_blank">
                Get Directions
                <iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-black/50 transition-all duration-300 flex flex-col h-full">
<div className="h-48 bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
<img alt="Elmhurst" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512445239398-6d0c4c575b89?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<span className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold uppercase px-3 py-1 rounded-md shadow-sm">Queens</span>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-serif font-bold mb-2">Elmhurst</h3>
<p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow">87-08 Justice Ave #CJ<br/>Elmhurst, NY 11373</p>
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-sm font-medium" href="https://maps.app.goo.gl/Yoom4KqrrJPPgN1k7" target="_blank">
                Get Directions
                <iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-black/50 transition-all duration-300 flex flex-col h-full">
<div className="h-48 bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
<img alt="Manhattan" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<span className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold uppercase px-3 py-1 rounded-md shadow-sm">Manhattan</span>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-serif font-bold mb-2">Little Italy</h3>
<p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow">185 Canal St #201<br/>New York, NY 10013</p>
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-sm font-medium" href="https://maps.app.goo.gl/opvhCjHS9thdT6HZ9" target="_blank">
                Get Directions
                <iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-black/50 transition-all duration-300 flex flex-col h-full">
<div className="h-48 bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
<img alt="Brooklyn" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<span className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold uppercase px-3 py-1 rounded-md shadow-sm">Brooklyn</span>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-serif font-bold mb-2">Sunset Park</h3>
<p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow">6402 8th Ave #505<br/>Brooklyn, NY 11220</p>
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-sm font-medium" href="https://maps.app.goo.gl/dVZxkrvzryGJQWhR7" target="_blank">
                Get Directions
                <iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="about">
<div className="bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 p-8 md:p-12 shadow-2xl relative overflow-hidden">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 lg:order-1 animate-on-scroll slide-up">
<h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Dr. Jian Cui, MD, PhD</h2>
<p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-8">
              With over 30 years of clinical experience, Dr. Cui is a Board-Certified Dermatologist and Fellow of the American Academy of Dermatology. He combines academic excellence with practical expertise to treat diverse skin conditions.
            </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-2xl mt-1" icon="solar:diploma-verified-linear"></iconify-icon>
<div>
<h4 className="font-semibold">Associate Professor</h4>
<p className="text-sm text-neutral-500 dark:text-neutral-400">NYU Dermatology Department</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-2xl mt-1" icon="solar:medal-star-circle-linear"></iconify-icon>
<div>
<h4 className="font-semibold">Fellow</h4>
<p className="text-sm text-neutral-500 dark:text-neutral-400">American Academy of Dermatology</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-2xl mt-1" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<div>
<h4 className="font-semibold">Member</h4>
<p className="text-sm text-neutral-500 dark:text-neutral-400">American Academy of Dermatologic Surgery</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-lg hover:shadow-blue-600/30" href="#appointment">
                Book Consultation
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] animate-on-scroll scale-in">
<img alt="Dr. Jian Cui" className="w-full h-full object-cover rounded-2xl shadow-2xl" src="https://acuidermnyc.com/wp-content/uploads/2025/04/38f78aebee72a53a89f98fcc.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-16 overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
<div className="text-center mb-10 px-6">
<h3 className="text-2xl font-serif font-bold mb-2">Accepted Insurance</h3>
<p className="text-neutral-500 text-sm">We work with most major insurance providers</p>
</div>
<div className="marquee-container opacity-60">
<div className="marquee-content flex gap-16 px-6">
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">UnitedHealthcare</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Humana</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">BlueCross</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Cigna</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">EmblemHealth</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Fidelis</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Medicare</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Aetna</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">MetroPlus</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">1199SEIU</span>

<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">UnitedHealthcare</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Humana</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">BlueCross</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Cigna</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">EmblemHealth</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Fidelis</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Medicare</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">Aetna</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">MetroPlus</span>
<span className="text-2xl font-bold font-serif text-neutral-800 dark:text-neutral-200">1199SEIU</span>
</div>
</div>
</section>

<footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="animate-on-scroll fade-in stagger-1">
<h4 className="text-xl font-bold font-serif uppercase tracking-tight mb-6">Acuiderm</h4>
<div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
<p>Providing exceptional dermatological care to the New York City community for over three decades.</p>
<div className="flex gap-4">
<a className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-blue-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="logos:facebook" width="18"></iconify-icon>
</a>
<a className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-blue-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="logos:twitter" width="18"></iconify-icon>
</a>
<a className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-blue-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="logos:instagram-icon" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="animate-on-scroll fade-in stagger-2">
<h5 className="font-semibold text-neutral-900 dark:text-white mb-6">Locations</h5>
<ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
<li><a className="hover:text-blue-500 transition-colors" href="#">Flushing (Main St)</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Elmhurst (Queens Blvd)</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Manhattan (Canal St)</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Brooklyn (8th Ave)</a></li>
</ul>
</div>
<div className="animate-on-scroll fade-in stagger-3">
<h5 className="font-semibold text-neutral-900 dark:text-white mb-6">Medical Services</h5>
<ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
<li><a className="hover:text-blue-500 transition-colors" href="#">Acne Treatment</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Mole Removal</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Cyst Excision</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#">Eczema Therapy</a></li>
</ul>
</div>
<div className="animate-on-scroll fade-in stagger-4">
<h5 className="font-semibold text-neutral-900 dark:text-white mb-6">Cosmetic Services</h5>
<ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
<li className=""><a className="hover:text-blue-500 transition-colors" href="#">Botox &amp; Dysport</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#">Dermal Fillers</a></li>
<li className=""><a className="hover:text-blue-500 transition-colors" href="#">Ultherapy</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">CoolSculpting</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© 2026 Jian C. Cui Dermatology PC. All rights reserved. Customized by Ryan Smith.</p>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-neutral-900 dark:hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900 dark:hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
