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
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
},
animation: {
'ping-slow': 'pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
'scroll': 'scroll 1.5s infinite',
'bounce-slow': 'bounce 2s infinite',
'fade-in': 'fadeIn 0.5s ease-out',
'marquee': 'marquee 60s linear infinite',
},
keyframes: {
pingSlow: {
'0%': { transform: 'scale(1)', opacity: '1' },
'75%, 100%': { transform: 'scale(2)', opacity: '0' },
},
pulseGlow: {
'0%, 100%': { opacity: '0.5' },
'50%': { opacity: '0.8' },
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
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- UI Interaction Functions ---
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

      function togglePower() {
        const btn = document.getElementById('power-button');
        const text = document.getElementById('power-text');
        btn.classList.toggle('active');
        text.classList.toggle('powered');
      }

      // --- Scroll Reveal Logic ---
      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target); // Only animate once
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
          const nav = document.getElementById('navbar');
          if (window.scrollY > 20) {
            nav.classList.add('shadow-md');
          } else {
            nav.classList.remove('shadow-md');
          }
        });
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        const spotlightTargets = [
          ...document.querySelectorAll('.service-card'),
          ...document.querySelectorAll('#benefits .grid > div')
        ];

        spotlightTargets.forEach(card => {
          card.classList.add('spotlight-card');
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          });
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
      
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-brand-500/30 blur-[70px] animate-pulse-glow mix-blend-multiply"></div>
<div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/30 blur-[70px] animate-pulse-glow mix-blend-multiply" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-500/30 blur-[70px] animate-pulse-glow mix-blend-multiply" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex-shrink-0 flex items-center gap-2">

<span className="text-xl font-bold tracking-tight text-gray-900">RenovateYourKitchen<span className="text-brand-500">.com</span></span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors" href="#styles">
            Styles
          </a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors" href="#process">
            Our Process
          </a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors" href="#portfolio">
            Portfolio
          </a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors" href="#integration">
            Integration Guide
          </a>
<div className="flex items-center gap-4 ml-2">
<a className="text-sm font-semibold text-gray-900 hover:text-brand-600 transition-colors tracking-tight" href="/estimate">
              Estimate Tool
            </a>
<a className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cta-glow inline-block text-center" href="/estimate">
              Start Your Estimate
            </a>
</div>
</div>

<div className="flex items-center gap-4 md:hidden">
<a className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 border border-brand-100" href="/contact">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-brand-500" onclick="toggleMobileMenu()">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
</div>
</div>

<div className="menu-closed flex flex-col bg-white/95 backdrop-blur-xl border-t border-gray-100 md:hidden absolute top-20 w-full left-0 shadow-xl z-40" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-brand-600 transition-colors" href="#styles" onclick="closeMobileMenu()">
            Styles
          </a>
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-brand-600 transition-colors" href="#process" onclick="closeMobileMenu()">
            Our Process
          </a>
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-brand-600 transition-colors" href="#portfolio" onclick="closeMobileMenu()">
            Portfolio
          </a>
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-brand-600 transition-colors" href="#integration" onclick="closeMobileMenu()">
            Integration Guide
          </a>
<a className="w-full bg-brand-500 text-white text-base font-medium py-3 rounded-lg shadow-sm active:scale-[0.98] transition-transform cta-glow text-center inline-block" href="/estimate" onclick="closeMobileMenu()">
            Start Your Estimate
          </a>
</div>
</div>
</nav>

<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">

<div className="absolute inset-0 z-0">
<img alt="Luxury Kitchen Background" className="w-full h-full object-cover object-center opacity-100" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
</div>

<div className="relative z-10 w-full px-6 flex flex-col items-center justify-center pt-16">

<div className="max-w-4xl w-full mx-auto text-center animate-fade-in">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 backdrop-blur-md mb-8 shadow-sm ring-1 ring-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
<span className="text-brand-300 text-xs font-semibold tracking-wide uppercase">
              Bespoke Craftsmanship • NY, NJ, CT
            </span>
</div>
<div className="flex flex-col items-center justify-center gap-6 mb-6">

<button className="power-button relative w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center transition-all duration-500 group mb-2 hover:bg-white/10 backdrop-blur-sm" id="power-button" onclick="togglePower()">
<iconify-icon className="text-white/80 group-hover:text-white transition-colors" height="24" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<div className="hidden absolute inset-0 rounded-full border border-brand-300 animate-ping-slow glow-ring"></div>
</button>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[1.1] transition-all duration-700 drop-shadow-xl" id="power-text">
              Elevated Living Begins in the Kitchen.
            </h1>
</div>
<p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            The Tri-State’s premier design-build authority for high-end kitchen transformations. Bespoke craftsmanship meet streamlined execution in NY, NJ, and CT.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 hover:-translate-y-0.5 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-brand-500/25 transition-all duration-300 border border-transparent cta-glow text-center inline-block" href="#styles">
              Browse Style Collections
            </a>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/30 text-white text-lg font-medium px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/5" href="/contact">
<iconify-icon height="20" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
              Book an In-Home Consultation
            </a>
</div>
</div>

<div className="mt-16 flex items-center justify-center gap-10 opacity-80 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex flex-col items-center drop-shadow-lg group cursor-default">
<div className="flex text-brand-400 gap-0.5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<span className="text-white/90 text-xs mt-2 font-medium tracking-wide uppercase">
              5-Star Rated Design-Build
            </span>
</div>
<div className="h-10 w-px bg-white/20"></div>
<div className="flex flex-col items-center drop-shadow-lg group cursor-default">
<iconify-icon className="text-brand-400 group-hover:scale-110 transition-transform duration-300" height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-white/90 text-xs mt-2 font-medium tracking-wide uppercase">
              Tri-State Licensed &amp; Insured
            </span>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-40 hover:opacity-100 transition-opacity cursor-pointer" onclick="document.getElementById('stats-section').scrollIntoView()">
<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
<div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-br from-brand-500 to-brand-600 relative overflow-hidden" id="stats-section">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center reveal">
<div className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tighter">
              15+
            </div>
<div className="text-white/90 font-medium text-sm md:text-base">
              Years Bespoke Craftsmanship
            </div>
</div>
<div className="text-center reveal delay-100">
<div className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tighter">
              400+
            </div>
<div className="text-white/90 font-medium text-sm md:text-base">
              Kitchens Transformed
            </div>
</div>
<div className="text-center reveal delay-200">
<div className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tighter">
              100%
            </div>
<div className="text-white/90 font-medium text-sm md:text-base">
              Fixed Quote Guarantee
            </div>
</div>
<div className="text-center reveal delay-300">
<div className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tighter">
              8-12
            </div>
<div className="text-white/90 font-medium text-sm md:text-base">
              Weeks Average Build Time
            </div>
</div>
</div>
</div>
</section>

<section className="border-gray-100 border-t border-b pt-24 pb-24 relative z-10" id="styles">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tighter">
            Signature Style Collections
          </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have reimagined the luxury renovation experience. By combining artisanal design with a "productized" approach, we eliminate the ambiguity of custom building.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="service-card group overflow-hidden cursor-pointer hover:shadow-xl transition-all reveal bg-center h-96 bg-[url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop)] bg-cover border-gray-100 border rounded-2xl relative shadow-sm">
<div className="service-content absolute bottom-0 left-0 right-0 p-8 z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">
                Modern Minimalist
              </h3>
<p className="service-description text-gray-200 text-sm mb-4">
                Optimized for high-rise living and sleek urban aesthetics in Manhattan &amp; Jersey City.
              </p>
<div className="service-features space-y-2">
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Handle-less cabinetry
                </div>
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Integrated smart appliances
                </div>
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Seamless slab backsplashes
                </div>
</div>
</div>
</div>

<div className="service-card group overflow-hidden cursor-pointer hover:shadow-xl transition-all reveal delay-100 h-96 bg-[url(https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop)] bg-cover bg-center border-gray-100 border rounded-2xl relative shadow-sm">
<div className="service-content absolute bottom-0 left-0 right-0 p-8 z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">
                Coastal Hamptons
              </h3>
<p className="service-description text-gray-200 text-sm mb-4">
                Airy, light-filled, and timeless designs perfectly tailored for Long Island and Fairfield.
              </p>
<div className="service-features space-y-2">
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Shaker-style millwork
                </div>
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Oversized marble islands
                </div>
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Nautical-inspired brass accents
                </div>
</div>
</div>
</div>

<div className="service-card group overflow-hidden cursor-pointer hover:shadow-xl transition-all reveal h-96 bg-[url(https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop)] bg-cover bg-center border-gray-100 border rounded-2xl relative shadow-sm">
<div className="service-content absolute bottom-0 left-0 right-0 p-8 z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">
                Industrial Loft
              </h3>
<p className="service-description text-gray-200 text-sm mb-4">
                Raw materials meet culinary perfection for the iconic Brooklyn &amp; Hoboken feel.
              </p>
<div className="service-features space-y-2">
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Exposed brick integration
                </div>
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Matte black hardware
                </div>
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Professional-grade ranges
                </div>
</div>
</div>
</div>

<div className="service-card group overflow-hidden cursor-pointer hover:shadow-xl transition-all reveal delay-100 h-96 bg-[url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=1600&amp;auto=format&amp;fit=crop)] bg-cover bg-center border-gray-100 border rounded-2xl relative shadow-sm">
<div className="service-content absolute bottom-0 left-0 right-0 p-8 z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">
                Bespoke &amp; Hybrid
              </h3>
<p className="service-description text-gray-200 text-sm mb-4">
                Select from our signature aesthetic palettes or customize a completely hybrid look.
              </p>
<div className="service-features space-y-2">
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Tailored for Tri-State architecture
                </div>
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Curated material accounts
                </div>
<div className="flex items-center gap-2 text-white text-sm">
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
                  Uncompromising detail
                </div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal">
<a className="bg-gray-900 hover:bg-black text-white text-lg font-medium px-10 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 ring-1 ring-gray-800 inline-block" href="/estimate">
            Start Your Instant Estimate
          </a>
</div>
</div>
</section>

<section className="py-24 bg-white relative z-10" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tighter">
            How It Works
          </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent journey from signature style selection to a chef-ready kitchen.
          </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative flex flex-col items-center text-center group reveal">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  1
                </div>
<iconify-icon className="text-brand-500" height="32" icon="solar:palette-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
                Style Selection
              </h3>
<p className="text-sm text-gray-500 leading-relaxed">
                Choose from our three signature aesthetic palettes or customize a hybrid look.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-100">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  2
                </div>
<iconify-icon className="text-brand-500" height="32" icon="solar:ruler-pen-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
                Precision Measurement
              </h3>
<p className="text-sm text-gray-500 leading-relaxed">
                Our team conducts a technical site survey in your Westchester, Bergen, or Fairfield home.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-200">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  3
                </div>
<iconify-icon className="text-brand-500" height="32" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fixed-Quote Proposal
              </h3>
<p className="text-sm text-gray-500 leading-relaxed">
                Receive a comprehensive bid covering labor and material allowances—no "estimate creep."
              </p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-300">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  4
                </div>
<iconify-icon className="text-brand-500" height="32" icon="solar:hammer-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
                White-Glove Build
              </h3>
<p className="text-sm text-gray-500 leading-relaxed">
                We manage all local permits and construction, delivering a chef-ready kitchen in 8–12 weeks.
              </p>
</div>
</div>
<div className="mt-16 text-center reveal">
<a className="bg-brand-500 hover:bg-brand-600 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-brand-500/25 transition-all duration-300 transform hover:-translate-y-0.5 border border-transparent cta-glow inline-block" href="/estimate">
              Start Your Estimate
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-brand-100 relative z-10 bg-slate-50" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tighter">
            The Design-Build Advantage
          </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience a fixed-labor, high-margin transformation that respects your time and your investment.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 reveal">
<div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl shadow-sm z-10 tracking-wide">
              FIXED PRICE
            </div>
<h3 className="text-xl font-medium text-gray-900 mb-3 mt-4 tracking-tight">
              Fixed Labor Pricing
            </h3>
<p className="text-gray-600 text-sm mb-6 leading-relaxed">
              We eliminate the uncertainty of hourly billing, providing a clear financial roadmap. No unexpected overages or hidden "estimate creep" mid-project.
            </p>
<div className="mt-auto">
<a className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg inline-block text-center" href="/estimate">
                Get Your Fixed Quote
              </a>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 reveal delay-100">
<div className="absolute top-0 right-0 bg-gray-900 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl shadow-sm z-10 tracking-wide">
              COMPLIANCE
            </div>
<h3 className="text-xl font-medium text-gray-900 mb-3 mt-4 tracking-tight">
              Local Permit Expertise
            </h3>
<p className="text-gray-600 text-sm mb-6 leading-relaxed">
              We navigate the complex building codes of NYC, Westchester, and Greenwich so you don’t have to. Full DOB filings and local board variances handled.
            </p>
<div className="mt-auto">
<a className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg ring-1 ring-gray-800 inline-block text-center" href="/contact">
                Discuss Your Area
              </a>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 reveal delay-200">
<div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl shadow-sm z-10 tracking-wide">
              TRADE ACCESS
            </div>
<h3 className="text-xl font-medium text-gray-900 mb-3 mt-4 tracking-tight">
              Curated Material Accounts
            </h3>
<p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Access trade-only discounts on Sub-Zero, Wolf, and Miele through our procurement team. Premium stone imports and bespoke finishes included.
            </p>
<div className="mt-auto">
<a className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg inline-block text-center" href="/estimate">
                View Collections
              </a>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 reveal delay-300">
<div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl shadow-sm z-10 tracking-wide">
              ALL-IN-ONE
            </div>
<h3 className="text-xl font-medium text-gray-900 mb-3 mt-4 tracking-tight">
              Design-Build Synergy
            </h3>
<p className="text-gray-600 text-sm mb-6 leading-relaxed">
              One point of contact from the first sketch to the final backsplash tile. We align the architectural vision with pristine execution seamlessly.
            </p>
<div className="mt-auto">
<a className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg inline-block text-center" href="/contact">
                Book Consultation
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-100 relative z-10 bg-white" id="faq">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
<div className="reveal lg:col-span-1">
<h2 className="text-4xl font-medium text-gray-900 mb-6 tracking-tighter">
              Frequently Asked Questions
            </h2>
<p className="text-lg text-gray-600 leading-relaxed mb-6">
              Everything you need to know about your Tri-State kitchen transformation. Have more questions? Contact our experts directly.
            </p>
<a className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-800 transition-colors" href="/contact">
              Speak with a designer
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-2 space-y-8 reveal delay-100">

<div className="border-b border-gray-100 pb-8">
<h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does a typical Tri-State kitchen renovation take?
              </h3>
<p className="text-gray-600 leading-relaxed">
                Most of our signature transformations are completed within 8 to 12 weeks once materials arrive on-site. We prioritize aggressive scheduling to minimize downtime in your home.
              </p>
</div>

<div className="border-b border-gray-100 pb-8">
<h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you handle DOB permits in NYC or local board approvals in CT?
              </h3>
<p className="text-gray-600 leading-relaxed">
                Yes. Our team specializes in the specific bureaucratic requirements of Tri-State municipalities, from Manhattan Department of Buildings filings to Westchester local board variances.
              </p>
</div>

<div className="border-b border-gray-100 pb-8">
<h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is included in the "Standard, Premium, and Luxury" tiers?
              </h3>
<p className="text-gray-600 leading-relaxed">
                All tiers include full demolition and professional installation. "Luxury" adds bespoke cabinetry, premium stone imports (e.g., Calacatta Borghini), and integrated high-end appliance suites.
              </p>
</div>

<div className="border-b border-gray-100 pb-8">
<h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I keep my current appliances?
              </h3>
<p className="text-gray-600 leading-relaxed">
                While we recommend a full integration for the best aesthetic result, our "Modern Minimalist" and "Industrial Loft" packages can be adapted to fit your existing high-end appliances.
              </p>
</div>

<div className="border-b border-gray-100 pb-8">
<h3 className="text-xl font-semibold text-gray-900 mb-3">
                What areas do you serve specifically?
              </h3>
<p className="text-gray-600 leading-relaxed">
                We serve a 60-mile radius from Midtown Manhattan, including all five boroughs, Westchester, Nassau County, Bergen County, Hudson County, and Fairfield County.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 text-center border-t border-gray-100">
<div className="max-w-4xl mx-auto px-6 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tighter">
          Your Signature Kitchen Awaits.
        </h2>
<p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Take the first step toward a kitchen designed for your lifestyle and engineered for your home’s value.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-brand-500 text-white hover:bg-brand-600 text-lg font-medium px-10 py-4 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 cta-glow inline-block" href="/estimate">
            Start Your Instant Estimate
          </a>
<a className="bg-white text-gray-800 border border-gray-200 hover:bg-gray-100 text-lg font-medium px-10 py-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-gray-300" href="/contact">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            Contact Our Team
          </a>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div>
<span className="text-xl font-bold tracking-tight text-white mb-6 block">RenovateYourKitchen<span className="text-brand-500">.com</span></span>
<p className="text-gray-400 leading-relaxed mb-6 text-sm">
              The Tri-State’s premier design-build authority for high-end kitchen transformations. Bespoke craftsmanship meet streamlined execution.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-brand-500 transition-colors" href="#">
<iconify-icon height="20" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-brand-500 transition-colors" href="#">
<iconify-icon height="20" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-lg font-medium mb-6 text-white">Menu</h3>
<ul className="space-y-3 text-sm">
<li>
<a className="text-gray-400 hover:text-brand-400 transition-colors" href="#styles">
                  Style Collections
                </a>
</li>
<li>
<a className="text-gray-400 hover:text-brand-400 transition-colors" href="#process">
                  Our Process
                </a>
</li>
<li>
<a className="text-gray-400 hover:text-brand-400 transition-colors" href="#portfolio">
                  Portfolio
                </a>
</li>
<li>
<a className="text-gray-400 hover:text-brand-400 transition-colors" href="/estimate">
                  Instant Estimate Tool
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium mb-6 text-white">Service Area</h3>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-400 mt-0.5" height="16" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-gray-400">Manhattan &amp; Surrounding Boroughs</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-400 mt-0.5" height="16" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-gray-400">Westchester &amp; Fairfield Counties</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-400 mt-0.5" height="16" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-gray-400">Bergen &amp; Hudson Counties</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col justify-between items-center gap-4 text-center">
<p className="text-gray-500 text-xs leading-loose">
            © 2026 RenovateYourKitchen.com. Tri-State Signature Kitchens is a licensed and insured design-build firm.
          </p>
<p className="text-gray-500 text-xs leading-loose">
            CT HIC #000000 <span className="hidden md:inline">|</span> NJ HIC #000000 <span className="hidden md:inline">|</span> NYC DCA #000000
          </p>
<p className="text-gray-500 text-xs leading-loose">
            All kitchen designs are proprietary.
          </p>
</div>
</div>
</footer>




    </>
  );
}
