import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6', // Water Blue Primary
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-gray-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2">
<img alt="Coastal Bend Cleaning" className="w-8 h-8 rounded-lg object-cover" src="https://coastalbendcleaning.com/wp-content/uploads/2024/10/cropped-cropped-CC_Cleaning_logo_03-06-24.jpg"/>
<span className="font-semibold text-lg tracking-tight text-gray-900">
            Coastal Bend
            <span className="text-gray-400 font-normal hidden sm:inline">
              Cleaning
            </span>
</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#process">
            Process
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#results">
            Results
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#about">
            About
          </a>
<div className="flex items-center gap-4 ml-2">
<a className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-brand-600 transition-colors tracking-tight" href="tel:3614137596">
<svg aria-hidden="true" data-icon="lucide:phone" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              361-413-7596
            </a>
<button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 animate-cta-attention hover:animate-none" onclick="openQuoteForm()">
              Get a Free Quote
            </button>
</div>
</div>

<div className="flex items-center gap-4 md:hidden">
<a className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 border border-gray-200" href="tel:3614137596">
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
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#services" onclick="closeMobileMenu()">
            Services
          </a>
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#process" onclick="closeMobileMenu()">
            Process
          </a>
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#results" onclick="closeMobileMenu()">
            Results
          </a>
<button className="w-full bg-brand-600 text-white text-base font-medium py-3 rounded-lg shadow-sm" onclick="openQuoteForm(); closeMobileMenu()">
            Get a Free Quote
          </button>
</div>
</div>
</nav>

<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">

<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4401067f-6325-47b4-bed8-902c860ffad0_3840w.jpg)] bg-cover bg-center z-0 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url("https://coastalbendcleaning.com/wp-content/uploads/2025/08/Photo-Aug-04-2024-6-31-42-PM-scaled.jpg")'}}>

</div>

<div className="relative z-10 w-full px-6 flex flex-col items-center justify-center pt-16">
<div className="max-w-4xl w-full mx-auto text-center animate-fade-in">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 backdrop-blur-md mb-8 shadow-sm ring-1 ring-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
<span className="text-brand-200 text-xs font-medium tracking-wide uppercase">
              Serving Corpus Christi &amp; Surrounding Areas
            </span>
</div>
<div className="flex flex-col items-center justify-center gap-6 mb-8">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner">
<svg aria-hidden="true" data-icon="lucide:droplets" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path>
<path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</g>
</svg>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none drop-shadow-2xl text-center">
              Coastal Bend Cleaning
              <span className="text-brand-400 block lg:inline">
                Commercial Services
              </span>
</h1>
<h2 className="text-2xl md:text-3xl font-medium text-gray-200 tracking-tight leading-snug max-w-3xl text-center">
              Professional Commercial Cleaning &amp; Janitorial Services
            </h2>
</div>
<p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed font-light">
            We're From Corpus Christi— We show up Fast, treat your Office with
            care, and leave it cleaner than we found it.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 hover:-translate-y-0.5 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-brand-500/25 transition-all duration-300 border border-transparent animate-cta-attention hover:animate-none" onclick="openQuoteForm()">
              Get a Free Quote
            </button>
<a className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white text-lg font-medium px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" href="#services">
              View Services
            </a>
</div>
</div>

<div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-3 group">
<div className="bg-brand-500/20 p-2 rounded-full">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
<span className="text-white/90 text-sm font-medium tracking-wide">
              Fully Insured
            </span>
</div>
<div className="h-8 w-px bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-3 group">
<div className="bg-brand-500/20 p-2 rounded-full">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
</div>
<span className="text-white/90 text-sm font-medium tracking-wide">
              Local &amp; Reliable
            </span>
</div>
<div className="h-8 w-px bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-3 group">
<div className="bg-brand-500/20 p-2 rounded-full">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
</div>
<span className="text-white/90 text-sm font-medium tracking-wide">
              Quality Guaranteed
            </span>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex -space-x-1">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 border-2 border-white z-10">
<span className="font-bold text-sm">5.0</span>
</div>
<div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
<svg className="w-5 h-5 text-gray-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="font-bold text-gray-900">Excellent</span>
<div className="flex text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<span className="text-xs text-gray-500 font-medium">
              Based on 120+ local reviews
            </span>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
<svg className="w-4 h-4 text-gray-900" fill="currentColor" viewbox="0 0 24 24">
<path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"></path>
</svg>
          Top Rated on Google
        </div>
</div>
<div className="relative w-full">
<div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
<div className="flex items-center">

<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Excellent job on our driveway. Looks brand new again. Highly
                recommend the service."
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  James P.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  2 days ago
                </span>
</div>
</div>

<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Andrew was professional and punctual. The house wash made a
                huge difference."
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  Sarah L.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  1 week ago
                </span>
</div>
</div>

<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Roof looks brand new. Great service and very clean work site.
                Highly recommended."
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  Michael T.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  2 weeks ago
                </span>
</div>
</div>

<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Reliable service for our strata complex. Good communication and
                great results."
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  David K.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  3 weeks ago
                </span>
</div>
</div>

<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Restored our old pavers beautifully. Very happy with the
                outcome!"
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  Jessica R.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  1 month ago
                </span>
</div>
</div>
</div>

<div aria-hidden="true" className="flex items-center">
<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Excellent job on our driveway. Looks brand new again. Highly
                recommend the service."
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  James P.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  2 days ago
                </span>
</div>
</div>
<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Andrew was professional and punctual. The house wash made a
                huge difference."
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  Sarah L.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  1 week ago
                </span>
</div>
</div>
<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Roof looks brand new. Great service and very clean work site.
                Highly recommended."
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  Michael T.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  2 weeks ago
                </span>
</div>
</div>
<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Reliable service for our strata complex. Good communication and
                great results."
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  David K.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  3 weeks ago
                </span>
</div>
</div>
<div className="w-80 flex-shrink-0 p-5 bg-gray-50 border border-gray-100 rounded-xl mx-3 hover:bg-white hover:shadow-md transition-all duration-300">
<div className="flex gap-0.5 mb-3 text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                "Restored our old pavers beautifully. Very happy with the
                outcome!"
              </p>
<div className="flex items-center justify-between">
<span className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  Jessica R.
                </span>
<span className="text-[10px] text-gray-400 uppercase">
                  1 month ago
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 border-b border-gray-200" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tighter">
            Commercial Cleaning Services
          </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            We use the right techniques to safely clean every surface of your
            commercial property.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal h-80 border border-gray-200/20">

<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97206b69-8974-44da-9ade-d0bc0f048485_800w.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://coastalbendcleaning.com/wp-content/uploads/2024/10/uyL_qfuAslide-1.webp")'}}></div>

<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>

<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:car-front" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m21 8l-2 2l-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10L3 8m4 6h.01M17 14h.01"></path>
<rect height="8" rx="2" width="18" x="3" y="10"></rect>
<path d="M5 18v2m14-2v2"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  Office Cleaning
                </h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">
                  Sparkling clean office environments that impress clients and
                  boost productivity.
                </p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Office Cleaning')">
                Get a Quote
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal delay-100 h-80 border border-gray-200/20">

<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99a3abaa-0cc7-4209-999b-d40a9e142b2a_800w.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://coastalbendcleaning.com/wp-content/uploads/2025/04/Janitor-coastal-bend-cleaning-front-page.jpg")'}}></div>

<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>

<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:home" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  Janitorial Services
                </h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">
                  Comprehensive daily or weekly janitorial solutions tailored to
                  your facility.
                </p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Janitorial Services')">
                Get a Quote
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal delay-200 h-80 border border-gray-200/20">

<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40282789-73f7-4150-976d-8d92bb9fccad_800w.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://coastalbendcleaning.com/wp-content/uploads/2024/10/aLYLWqAQslide-4-1024x512.webp")'}}></div>

<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>

<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:arrow-up-from-line" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 9l-6-6l-6 6m6-6v14m-7 4h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  Floor Strip &amp; Wax
                </h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">
                  Revitalize your commercial floors with our professional
                  stripping and waxing.
                </p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Floor Strip &amp; Wax')">
                Get a Quote
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal h-80 border border-gray-200/20">

<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1434dbf3-5e13-4c70-92c7-7b3f8a4ac5b9_800w.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://coastalbendcleaning.com/wp-content/uploads/2024/11/Erik_Bathroom.webp")'}}></div>

<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>

<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:footprints" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  Bathroom Sanitation
                </h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">
                  Deep cleaning and sanitation to ensure hygiene and safety in
                  restrooms.
                </p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Bathroom Sanitation')">
                Get a Quote
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal delay-100 h-80 border border-gray-200/20">

<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29da96ae-3c75-4e69-8996-54f260996aa9_800w.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://coastalbendcleaning.com/wp-content/uploads/2025/08/sh5-scaled.jpg")'}}></div>

<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>

<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:building-2" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  Junk Removal
                </h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">
                  Fast, affordable junk removal in Corpus Christi. Same-day
                  service, no mess left behind.
                </p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Junk Removal')">
                Get a Quote
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 reveal delay-200 h-80 border border-gray-200/20">

<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96922261-38dc-4155-bc78-b117606c3799_800w.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://coastalbendcleaning.com/wp-content/uploads/2025/08/Photo-Aug-08-2024-1-51-01-PM-scaled.jpg")'}}></div>

<div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors duration-300"></div>

<div className="relative p-8 h-full flex flex-col items-start justify-between">
<div>
<div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
<svg aria-hidden="true" data-icon="lucide:calendar-check" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18M9 16l2 2l4-4"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  Recurring Service
                </h3>
<p className="text-sm text-gray-200 mb-6 leading-relaxed font-light">
                  Your office, reception, or shop—emptied, cleaned, and ready to
                  use again by tonight.
                </p>
</div>
<button className="text-sm font-medium text-white hover:text-brand-300 flex items-center gap-1 transition-colors" onclick="openQuoteForm('Recurring Service')">
                Get a Quote
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 reveal">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tighter">
              Real Results
            </h2>
<p className="text-lg text-gray-600 font-light">
              See the difference professional cleaning makes.
            </p>
</div>
<button className="hidden md:block bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl text-sm font-medium transition-colors" onclick="openQuoteForm()">
            Get Similar Results
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative h-80 rounded-2xl overflow-hidden shadow-md reveal">
<img alt="Driveway Cleaning" className="w-full h-full object-cover" src="https://coastalbendcleaning.com/wp-content/uploads/2025/08/Photo-Aug-14-2025-9-58-50-PM-e1755283143342.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="flex bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/face8928-c4b3-4ffc-8b13-f9df3adb8025_1600w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center" style={{backgroundImage: 'url("https://coastalbendcleaning.com/wp-content/uploads/2025/08/Photo-Aug-14-2025-9-58-50-PM-1-e1755283986186.jpg")'}}>
<div className="bg-white/90 backdrop-blur text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                Office Floor Care
              </div>
</div>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="bg-black/60 text-white px-2 py-1 rounded text-xs">
                Before
              </span>
<span className="bg-brand-600 text-white px-2 py-1 rounded text-xs">
                After
              </span>
</div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden shadow-md reveal delay-100">
<img alt="House Washing" className="w-full h-full object-cover" src="https://coastalbendcleaning.com/wp-content/uploads/2025/08/Photo-Aug-14-2025-9-58-50-PM-1-e1755283986186.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="flex bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6240dcbb-3743-4dd0-ae6c-71bd7892bd0c_1600w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center" style={{backgroundImage: 'url("https://coastalbendcleaning.com/wp-content/uploads/2025/08/Photo-Aug-14-2025-9-58-50-PM-e1755283143342.jpg")'}}>
<div className="bg-white/90 backdrop-blur text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                Commercial Space Clean
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50/50 border-t border-gray-100" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tighter">
            How It Works
          </h2>
<p className="text-lg text-gray-600 max-w-xl mx-auto font-light">
            We keep it simple. From quote to clean in 4 steps.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

<div className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm reveal">
<div className="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 shadow-lg shadow-brand-500/20">
              1
            </div>
<h3 className="text-lg font-medium text-gray-900 mb-2">
              Request a Quote
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Fill out our form or call us. We’ll respond quickly.
            </p>
</div>

<div className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm reveal delay-100">
<div className="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 shadow-lg shadow-brand-500/20">
              2
            </div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Assessment</h3>
<p className="text-sm text-gray-500 leading-relaxed">
              We assess the job onsite or via photos to give a fixed price.
            </p>
</div>

<div className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm reveal delay-200">
<div className="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 shadow-lg shadow-brand-500/20">
              3
            </div>
<h3 className="text-lg font-medium text-gray-900 mb-2">The Clean</h3>
<p className="text-sm text-gray-500 leading-relaxed">
              We arrive on time, protect your plants, and get to work.
            </p>
</div>

<div className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm reveal delay-300">
<div className="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 shadow-lg shadow-brand-500/20">
              4
            </div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Walkthrough</h3>
<p className="text-sm text-gray-500 leading-relaxed">
              We ensure you are 100% happy with the result before leaving.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<h2 className="text-4xl font-medium text-gray-900 mb-6 tracking-tighter">
              Trusted Locally for Reliable Commercial Cleaning
            </h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              Coastal Bend Cleaning is your local Corpus Christi partner. We
              ensure communication is clear and the job is done right the first
              time.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
<span className="text-gray-700 text-sm">
                  Servicing Corpus Christi &amp; Surrounding Areas
                </span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
<span className="text-gray-700 text-sm">Word-of-mouth trusted</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path className="" d="m9 12l2 2l4-4"></path>
</g>
</svg>
<span className="text-gray-700 text-sm">
                  Professional Equipment &amp; Safety Standards
                </span>
</div>
</div>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative reveal delay-100">
<svg aria-hidden="true" data-icon="lucide:quote" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="flex text-yellow-400 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-gray-800 text-lg leading-relaxed mb-6 italic">
              "Andrew did an incredible job on our driveway and pool area. The
              difference is night and day. He was punctual, polite, and very
              thorough. Highly recommend Sallesis for anyone needing a refresh."
            </p>
<div>
<div className="font-medium text-gray-900">Sarah M.</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">
                CORPUS CHRISTI BUSINESS OWNER
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-gray-900 opacity-50"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tighter">
          Bring Your Property Back to Life
        </h2>
<p className="text-xl text-gray-300 mb-10 font-light">
          Fast quotes. Reliable results. No shortcuts.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="hover:bg-brand-500 hover:scale-105 transition-all duration-300 text-lg font-medium text-white rounded-xl pt-4 pr-10 pb-4 pl-10 shadow-xl" onclick="openQuoteForm()">
            Request Your Free Quote
          </button>
<a className="bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg font-medium px-10 py-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm" href="tel:3614137596">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Call Now
          </a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<img alt="Coastal Bend Cleaning" className="w-6 h-6 rounded object-cover" src="https://coastalbendcleaning.com/wp-content/uploads/2024/10/cropped-cropped-CC_Cleaning_logo_03-06-24.jpg"/>
<span className="font-semibold text-gray-900">
                Coastal Bend Cleaning
              </span>
</div>
<p className="text-gray-500 leading-relaxed mb-6 text-sm max-w-xs">
              Professional commercial cleaning and junk removal services for
              Corpus Christi and surrounding areas. Restoring value to your
              business.
            </p>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Services
            </h3>
<ul className="space-y-3 text-sm">
<li>
<a className="text-gray-500 hover:text-brand-600 transition-colors" href="#services">
                  Office Cleaning
                </a>
</li>
<li>
<a className="text-gray-500 hover:text-brand-600 transition-colors" href="#services">
                  Janitorial Services
                </a>
</li>
<li>
<a className="text-gray-500 hover:text-brand-600 transition-colors" href="#services">
                  Floor Strip &amp; Wax
                </a>
</li>
<li>
<a className="text-gray-500 hover:text-brand-600 transition-colors" href="#services">
                  Junk Removal
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Contact
            </h3>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<a className="text-gray-600 hover:text-brand-600 transition-colors" href="tel:3614137596">
                  361-413-7596
                </a>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
<a className="text-gray-600 hover:text-brand-600 transition-colors" href="mailto:CoastalBendCleaningcctx@gmail.com">
                  CoastalBendCleaningcctx@gmail.com
                </a>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
<span className="text-gray-600">
                  321 N. Sandpiper, Ingleside, TX
                </span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:file-text" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
</g>
</svg>
<span className="text-gray-600">Locally Owned &amp; Operated</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-400 text-xs">© 2026 Coastal Bend Cleaning.</p>
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
                Tell us about your property. We'll reply fast.
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
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400 hover:border-gray-300" placeholder="361-413-7596" required="" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Location
                </label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400 hover:border-gray-300" placeholder="Property Address or Suburb" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                Service Needed
              </label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-white hover:border-gray-300 text-gray-700" id="service-select">
<option value="">Select a service...</option>
<option value="Office Cleaning">Office Cleaning</option>
<option value="Janitorial Services">Janitorial Services</option>
<option value="Floor Strip &amp; Wax">
                  Floor Strip &amp; Wax
                </option>
<option value="Bathroom Sanitation">Bathroom Sanitation</option>
<option value="Junk Removal">Junk Removal</option>
<option value="Recurring Service">Recurring Service</option>
</select>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                Urgency
              </label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-white hover:border-gray-300 text-gray-700">
<option value="Flexible">Flexible timing</option>
<option value="ASAP">As soon as possible</option>
<option value="This Week">Within this week</option>
<option value="Next Week">Within next week</option>
</select>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                Details
              </label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm resize-none placeholder-gray-400 hover:border-gray-300" placeholder="Any specific areas of concern?" rows="3"></textarea>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                Upload Photo (Optional)
              </label>
<input accept="image/*" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-white hover:border-gray-300 text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100" type="file"/>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-3.5 rounded-lg transition-all shadow-md mt-2 flex items-center justify-center gap-2 transform active:scale-[0.98]" type="submit">
              Send Request
            </button>
<p className="text-xs text-center text-gray-400 mt-4">
              We respect your privacy.
            </p>
</form>
</div>
</div>
</div>



    </>
  );
}
