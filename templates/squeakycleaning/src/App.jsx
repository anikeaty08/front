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
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0170B9', // Squeaky Brand Blue
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
}
},
animation: {
'ping-slow': 'pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
'scroll': 'scroll 1.5s infinite',
'fade-in': 'fadeIn 0.5s ease-out',
'marquee': 'marquee 60s linear infinite',
'cta-attention': 'ctaAttention 3s infinite',
},
keyframes: {
pingSlow: {
'0%': { transform: 'scale(1)', opacity: '1' },
'75%, 100%': { transform: 'scale(2)', opacity: '0' },
},
scroll: {
'0%': { transform: 'translateY(0)', opacity: '1' },
'100%': { transform: 'translateY(12px)', opacity: '0' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
ctaAttention: {
'0%, 80%, 100%': { transform: 'scale(1) rotate(0deg)' },
'85%': { transform: 'scale(1.05) rotate(-1deg)' },
'90%': { transform: 'scale(1.05) rotate(1deg)' },
'95%': { transform: 'scale(1.05) rotate(-1deg)' },
}
}
}
}
}



      function openQuoteForm(serviceType = '') {
        const modal = document.getElementById('quote-modal');
        const select = document.getElementById('service-select');

        if (serviceType) {
            select.value = serviceType;
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }

      function closeQuoteForm() {
        const modal = document.getElementById('quote-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }

      function handleQuoteSubmit(event) {
        event.preventDefault();
        const btn = event.target.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        btn.disabled = true;
        btn.innerText = 'Sending...';

        setTimeout(() => {
          btn.innerText = 'Sent Successfully!';
          btn.classList.remove('bg-brand-600');
          btn.classList.add('bg-green-600');

          setTimeout(() => {
            closeQuoteForm();
            event.target.reset();
            btn.disabled = false;
            btn.innerText = originalText;
            btn.classList.add('bg-brand-600');
            btn.classList.remove('bg-green-600');
          }, 1500);
        }, 1000);
      }

      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('menu-closed')) {
          menu.classList.remove('menu-closed');
          menu.classList.add('menu-open');
        } else {
          menu.classList.add('menu-closed');
          menu.classList.remove('menu-open');
        }
      }

      function closeMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.add('menu-closed');
        menu.classList.remove('menu-open');
      }

      // Scroll Reveal
      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Navbar bg change on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('bg-white/90', 'shadow-sm');
                nav.classList.remove('bg-white/80');
            } else {
                nav.classList.remove('bg-white/90', 'shadow-sm');
                nav.classList.add('bg-white/80');
            }
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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-gray-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2">
<img alt="Squeaky Cleaning Services Logo" className="h-10 w-auto object-contain" src="https://www.squeakycleanghana.com/storage/2021/02/logo.png"/>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#about">
            About
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#projects">
            Our Work
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#contact">
            Contact
          </a>
<div className="flex items-center gap-4 ml-2">
<a className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-brand-600 transition-colors tracking-tight" href="tel:+233249689429">
<svg aria-hidden="true" data-icon="lucide:phone" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              024 968 9429
            </a>
<button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 animate-cta-attention hover:animate-none" onclick="openQuoteForm()">
              Get a Free Quote
            </button>
</div>
</div>

<div className="flex items-center gap-4 md:hidden">
<a className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 border border-gray-200" href="tel:+233249689429">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-brand-600" onclick="toggleMobileMenu()">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="menu-closed flex flex-col bg-white border-b border-gray-100 md:hidden absolute top-20 w-full left-0 shadow-xl z-40" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#about" onclick="closeMobileMenu()">
            About Us
          </a>
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#services" onclick="closeMobileMenu()">
            Services
          </a>
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#projects" onclick="closeMobileMenu()">
            Our Work
          </a>
<button className="w-full bg-brand-600 text-white text-base font-medium py-3 rounded-lg shadow-sm" onclick="openQuoteForm(); closeMobileMenu()">
            Get a Free Quote
          </button>
</div>
</div>
</nav>

<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">

<div className="bg-[url(https://www.squeakycleanghana.com/storage/2021/02/Attachment_1608198227-Copy-1.jpeg)] bg-cover bg-center z-0 absolute top-0 right-0 bottom-0 left-0 opacity-40">
</div>

<div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900 z-0"></div>

<div className="relative z-10 w-full px-6 flex flex-col items-center justify-center pt-16">
<div className="max-w-4xl w-full mx-auto text-center animate-fade-in">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 backdrop-blur-md mb-8 shadow-sm ring-1 ring-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
<span className="text-brand-200 text-xs font-medium tracking-wide uppercase">
              Premier Cleaning Agency in Ghana
            </span>
</div>
<div className="flex flex-col items-center justify-center gap-6 mb-8">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner">
<svg aria-hidden="true" data-icon="lucide:sparkles" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3l1.912 5.813a2 2 0 0 0 1.272 1.272L21 12l-5.813 1.912a2 2 0 0 0-1.272 1.272L12 21l-1.912-5.813a2 2 0 0 0-1.272-1.272L3 12l5.813-1.912a2 2 0 0 0 1.272-1.272z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none drop-shadow-2xl text-center">
              Squeaky Cleaning
              <span className="text-brand-400 block lg:inline">
                Services
              </span>
</h1>
<h2 className="text-2xl md:text-3xl font-medium text-gray-200 tracking-tight leading-snug max-w-3xl text-center">
              Completely Clean. Expert Janitorial &amp; Environmental Sanitation.
            </h2>
</div>
<p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed font-light">
            We provide scientific cleaning services that meet international environmental standards. From corporate offices to residential homes in Accra.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 hover:-translate-y-0.5 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-brand-500/25 transition-all duration-300 border border-transparent animate-cta-attention hover:animate-none" onclick="openQuoteForm()">
              Get a Free Consultation
            </button>
<a className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white text-lg font-medium px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" href="#services">
              Our Services
            </a>
</div>
</div>

<div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-3 group">
<div className="bg-brand-500/20 p-2 rounded-full">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="m9 12l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-white/90 text-sm font-medium tracking-wide">
              Fully Registered
            </span>
</div>
<div className="h-8 w-px bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-3 group">
<div className="bg-brand-500/20 p-2 rounded-full">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="12" cy="10" fill="none" r="3" stroke="currentColor" strokeWidth="2"></circle>
</svg>
</div>
<span className="text-white/90 text-sm font-medium tracking-wide">
              Accra &amp; Beyond
            </span>
</div>
<div className="h-8 w-px bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-3 group">
<div className="bg-brand-500/20 p-2 rounded-full">
<svg aria-hidden="true" data-icon="lucide:star" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87l6.91-1.01z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-white/90 text-sm font-medium tracking-wide">
              Quality Guaranteed
            </span>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
<div className="p-4">
<div className="text-4xl font-bold text-brand-600 mb-1">1976+</div>
<div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Projects Done</div>
</div>
<div className="p-4">
<div className="text-4xl font-bold text-brand-600 mb-1">1124+</div>
<div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Problems Solved</div>
</div>
<div className="p-4">
<div className="text-4xl font-bold text-brand-600 mb-1">474+</div>
<div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Clients Helped</div>
</div>
<div className="p-4">
<div className="text-4xl font-bold text-brand-600 mb-1">5036+</div>
<div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Working Hours</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50/50" id="about">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-4xl font-medium text-gray-900 mb-6 tracking-tighter">About Squeaky Cleaning Services</h2>
<p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                Registered in November 2018, we rely on the experience of qualified staff in the field of sanitary and environmental services. Our mission is to be at the forefront of the janitorial industry in Ghana by utilizing simple but modern technologies.
            </p>
<div className="flex justify-center gap-2">
<span className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">Honest</span>
<span className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">Professional</span>
<span className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">Reliable</span>
</div>
</div>
</section>

<section className="bg-white py-24 border-b border-gray-200" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tighter">
            Our Services
          </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Comprehensive cleaning solutions for corporate and residential needs.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal h-80 border border-gray-200/20">
<div className="absolute inset-0 bg-[url(https://www.squeakycleanghana.com/storage/2022/02/Carpet-Cleaning-01-scaled.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>
<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:layers" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18l5.767 3.223a1.21 1.21 0 0 1 .591 1.06v5.857c0 .427-.228.82-.591 1.033l-5.767 3.393a1.21 1.21 0 0 1-1.229 0l-5.767-3.393a1.2 1.2 0 0 1-.592-1.033V6.463c0-.427.228-.82.592-1.033L11.601 2.18a1.21 1.21 0 0 1 1.229 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="m22 17.65l-9.17 5.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="m22 12.05l-9.17 5.4l-9.17-5.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="m2.83 17.65l9.17 5.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Carpet Cleaning</h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">Deep cleaning to remove dirt, stains, and allergens from your carpets.</p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Carpet Cleaning')">
                Get a Quote <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal delay-100 h-80 border border-gray-200/20">
<div className="absolute inset-0 bg-[url(https://www.squeakycleanghana.com/storage/2022/02/sofa-cleaning-01-1024x1024.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>
<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:armchair" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M4 18v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M20 18v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 4v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Sofa Cleaning</h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">Revitalize your furniture with our expert upholstery cleaning.</p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Sofa Cleaning')">
                Get a Quote <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal delay-200 h-80 border border-gray-200/20">
<div className="absolute inset-0 bg-[url(https://www.squeakycleanghana.com/storage/2022/02/post-construction-Cleaning-01-scaled.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>
<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:hard-hat" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M6 12V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M10 10v.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M14 10v.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Post Construction</h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">Heavy-duty cleaning for new builds and renovations before you move in.</p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Post Construction')">
                Get a Quote <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal h-80 border border-gray-200/20">
<div className="absolute inset-0 bg-[url(https://www.squeakycleanghana.com/storage/2022/02/Car-detailing-01-scaled.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>
<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:car" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="7" cy="17" fill="none" r="2" stroke="currentColor" strokeWidth="2"></circle>
<circle cx="17" cy="17" fill="none" r="2" stroke="currentColor" strokeWidth="2"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Car Detailing</h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">Interior and exterior detailing to make your vehicle look brand new.</p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Car Detailing')">
                Get a Quote <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal delay-100 h-80 border border-gray-200/20">
<div className="absolute inset-0 bg-[url(https://www.squeakycleanghana.com/storage/2022/07/fumigation-Cleaning.jpeg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>
<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:bug" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m8 2l1.88 1.88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M14.12 3.88L16 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 20v-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M6.53 9C4.6 8.8 3 7.1 3 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M6 13H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M3 21c0-2.1 1.7-3.9 3.8-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M22 13h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Fumigation Service</h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">Professional pest control to keep your environment safe and healthy.</p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Fumigation Service')">
                Get a Quote <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal delay-200 h-80 border border-gray-200/20">
<div className="absolute inset-0 bg-[url(https://www.squeakycleanghana.com/storage/2022/02/deep-Cleaning-01-1024x1024.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>
<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:sparkles" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Deep Cleaning</h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">Thorough residential and corporate cleaning for a hygienic environment.</p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Deep Cleaning')">
                Get a Quote <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 reveal">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tighter">
              Real Results
            </h2>
<p className="text-lg text-gray-600 font-light">
              See the difference Squeaky Cleaning makes.
            </p>
</div>
<button className="hidden md:block bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl text-sm font-medium transition-colors" onclick="openQuoteForm()">
            Get Similar Results
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative h-80 rounded-2xl overflow-hidden shadow-md reveal">
<img alt="Terrazzo Cleaning" className="w-full h-full object-cover" src="https://www.squeakycleanghana.com/storage/2021/05/WhatsApp-Image-2021-05-04-at-3.15.17-PM.jpeg"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                    Terrazzo Restoration
                </span>
<p className="font-medium text-lg">Floor Polishing</p>
</div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden shadow-md reveal delay-100">
<img alt="Sofa Cleaning" className="w-full h-full object-cover" src="https://www.squeakycleanghana.com/storage/2024/01/During-Sofa-Cleaning.jpeg"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                    Deep Clean
                </span>
<p className="font-medium text-lg">Sofa &amp; Upholstery</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<h2 className="text-4xl font-medium text-gray-900 mb-6 tracking-tighter">
              Trusted for Quality &amp; Excellence
            </h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              We provide a conducive and healthy working environment. Our objective is to ensure a clean, healthy, and safe environment within office spaces and residential facilities.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="text-brand-600" data-icon="lucide:check-circle-2" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
<span className="text-gray-700 text-sm">Professional Staff</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="text-brand-600" data-icon="lucide:check-circle-2" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
<span className="text-gray-700 text-sm">International Standards</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="text-brand-600" data-icon="lucide:check-circle-2" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
<span className="text-gray-700 text-sm">Reliable &amp; Timely Service</span>
</div>
</div>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative reveal delay-100">
<svg aria-hidden="true" className="text-gray-300 mb-4" data-icon="lucide:quote" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="flex text-yellow-400 mb-4">
<svg fill="currentColor" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg fill="currentColor" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg fill="currentColor" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg fill="currentColor" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg fill="currentColor" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-gray-800 text-lg leading-relaxed mb-6 italic">
              "One of professional cleaning services provider agency Ghana. Best wishes."
            </p>
<div>
<div className="font-medium text-gray-900">Amran DC</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">
                Satisfied Client
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-center relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-gray-900 opacity-50"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tighter">
          Need Cleaning Services?
        </h2>
<p className="text-xl text-gray-300 mb-10 font-light">
          We are Honest &amp; our work makes you Satisfied. Call us today.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="hover:bg-brand-500 hover:scale-105 transition-all duration-300 text-lg font-medium text-white rounded-xl pt-4 pr-10 pb-4 pl-10 shadow-xl bg-brand-600" onclick="openQuoteForm()">
            Request Your Free Quote
          </button>
<a className="bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg font-medium px-10 py-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm" href="tel:+233249689429">
<svg aria-hidden="true" className="" data-icon="lucide:phone" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            024 968 9429
          </a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<img alt="Squeaky Cleaning Services" className="h-8" src="https://www.squeakycleanghana.com/storage/2021/02/logo.png"/>
</div>
<p className="text-gray-500 leading-relaxed mb-6 text-sm max-w-xs">
              Squeaky Cleaning Services registered Ghanaian company with specialization in the provision of janitorial and environmental sanitation services.
            </p>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Services
            </h3>
<ul className="space-y-3 text-sm">
<li><a className="text-gray-500 hover:text-brand-600 transition-colors" href="#services">Carpet Cleaning</a></li>
<li><a className="text-gray-500 hover:text-brand-600 transition-colors" href="#services">Sofa Cleaning</a></li>
<li><a className="text-gray-500 hover:text-brand-600 transition-colors" href="#services">Post Construction</a></li>
<li><a className="text-gray-500 hover:text-brand-600 transition-colors" href="#services">Fumigation</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Contact Info
            </h3>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="text-brand-600" data-icon="lucide:phone" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<a className="text-gray-600 hover:text-brand-600 transition-colors" href="tel:0249689429">024 968 9429 / 050 479 9299</a>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="text-brand-600" data-icon="lucide:mail" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
<a className="text-gray-600 hover:text-brand-600 transition-colors" href="mailto:info@squeakycleanghana.com">info@squeakycleanghana.com</a>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="text-brand-600" data-icon="lucide:map-pin" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
<span className="text-gray-600">J300 AYABEN ST GD-050-2646<br/>Adenta Post Office, Box No: DT3007</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-400 text-xs">
            © 2024 Squeaky Cleaning Services. All Rights Reserved.
          </p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="quote-modal">
<div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onclick="closeQuoteForm()"></div>
<div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in ring-1 ring-gray-200">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight">
                Request a Quote
              </h3>
<p className="text-sm text-gray-500 mt-1">
                Tell us about your cleaning needs. We'll reply fast.
              </p>
</div>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600" onclick="closeQuoteForm()">
<svg aria-hidden="true" data-icon="lucide:x" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<form className="space-y-5" onsubmit="handleQuoteSubmit(event)">
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                Name
              </label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400 hover:border-gray-300" placeholder="Your Name" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Phone
                </label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400 hover:border-gray-300" placeholder="024 000 0000" required="" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Location
                </label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400 hover:border-gray-300" placeholder="Accra, Adenta, etc." required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                Service Needed
              </label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-white hover:border-gray-300 text-gray-700" id="service-select">
<option value="">Select a service...</option>
<option value="Carpet Cleaning">Carpet Cleaning</option>
<option value="Sofa Cleaning">Sofa Cleaning</option>
<option value="Post Construction">Post Construction Cleaning</option>
<option value="Glass Steam">Glass Steam Cleaning</option>
<option value="Mattress Cleaning">Mattress Cleaning</option>
<option value="Fumigation Service">Fumigation Service</option>
<option value="Car Detailing">Car Detailing</option>
<option value="Deep Cleaning">Deep Cleaning</option>
</select>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                Message
              </label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm resize-none placeholder-gray-400 hover:border-gray-300" placeholder="Describe your request..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-3.5 rounded-lg transition-all shadow-md mt-2 flex items-center justify-center gap-2 transform active:scale-[0.98]" type="submit">
              Send Request
            </button>
</form>
</div>
</div>
</div>



    </>
  );
}
