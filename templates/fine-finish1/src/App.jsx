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
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
},
accent: {
50: '#fffbeb',
100: '#fef3c7',
200: '#fde68a',
300: '#fcd34d',
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
700: '#b45309',
800: '#92400e',
900: '#78350f',
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'shimmer': 'shimmer 3s infinite',
'shine': 'shine 3s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'50%': { transform: 'translateX(100%)' },
'100%': { transform: 'translateX(100%)' },
},
shine: {
'from': { 'background-position': '0 0' },
'to': { 'background-position': '-200% 0' },
}
}
}
}
}



      // Mobile Menu Logic
      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('menu-closed')) {
          menu.classList.remove('menu-closed');
          menu.classList.add('menu-open');
        } else {
          menu.classList.remove('menu-open');
          menu.classList.add('menu-closed');
        }
      }

      function closeMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.remove('menu-open');
        menu.classList.add('menu-closed');
      }

      // Accordion Logic
      function toggleAccordion(button) {
        const content = button.nextElementSibling;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Optional: Close others when one opens (Accordian style)
        document.querySelectorAll('.accordion-btn').forEach(btn => {
          if (btn !== button) {
            btn.setAttribute('aria-expanded', 'false');
            btn.nextElementSibling.classList.remove('open');
          }
        });

        if (!isExpanded) {
          button.setAttribute('aria-expanded', 'true');
          content.classList.add('open');
        } else {
          button.setAttribute('aria-expanded', 'false');
          content.classList.remove('open');
        }
      }

      // Intersection Observer for Reveal on Scroll
      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px 0px -50px 0px',
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
      });
    


      document.addEventListener('mousemove', e => { document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px'); document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px'); });
    
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
      

<nav className="fixed z-50 transition-all duration-300 supports-[backdrop-filter]:bg-white/60 bg-white/90 border-stone-200/50 border-b top-0 right-0 left-0 backdrop-blur-md" id="navbar">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex group-hover:bg-accent-500 transition-colors duration-300 text-white bg-stone-900 w-8 h-8 rounded-lg shadow-sm items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
</div>
<span className="group-hover:text-stone-700 transition-colors text-xl font-playfair font-medium text-stone-900 tracking-tight">
            Fine Finish Flooring
          </span>
</a>

<div className="hidden md:flex items-center">
<a className="text-sm font-medium text-stone-600 hover:text-accent-600 transition-colors px-3" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-stone-600 hover:text-accent-600 transition-colors px-3" href="#about">
            About
          </a>
<a className="text-sm font-medium text-stone-600 hover:text-accent-600 transition-colors px-3" href="#faq">
            FAQ
          </a>
<a className="text-sm font-medium text-stone-600 hover:text-accent-600 transition-colors px-3" href="#contact">
            Contact
          </a>
<div className="h-4 w-px bg-stone-300 mx-3"></div>
<a className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-accent-600 transition-colors mr-4" href="tel:0431565725">
            0431 565 725
          </a>
<a className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0" href="#contact">
            Get a Quote
          </a>
</div>

<button aria-label="Toggle menu" className="md:hidden p-2 text-stone-600 hover:text-stone-900" onclick="toggleMobileMenu()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="menu-closed flex flex-col bg-white/95 backdrop-blur-xl border-t border-stone-100 md:hidden absolute top-20 w-full left-0 shadow-xl z-40" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<a className="text-base font-medium text-stone-700 py-2 border-b border-stone-50" href="#services" onclick="closeMobileMenu()">
            Services
          </a>
<a className="text-base font-medium text-stone-700 py-2 border-b border-stone-50" href="#about" onclick="closeMobileMenu()">
            About
          </a>
<a className="text-base font-medium text-stone-700 py-2 border-b border-stone-50" href="#faq" onclick="closeMobileMenu()">
            FAQ
          </a>
<a className="text-base font-medium text-stone-700 py-2 border-b border-stone-50" href="#contact" onclick="closeMobileMenu()">
            Contact
          </a>
<a className="w-full bg-accent-500 text-white text-center text-base font-medium py-3 rounded-lg shadow-sm mt-2" href="#contact" onclick="closeMobileMenu()">
            Get a Free Quote
          </a>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden bg-stone-50 pt-20 relative items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Marble Flooring Background" className="w-full h-full object-cover" fetchpriority="high" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d643e4d4-25a4-478b-8f16-a6e792508e03_3840w.jpg"/>
<div className="absolute inset-0 bg-white/30 mix-blend-overlay"></div>
</div>

<div className="z-10 animate-slide-up text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/5 border border-stone-900/10 backdrop-blur-md mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
<span className="uppercase text-xs font-semibold text-stone-600 tracking-wide">
            Serving Bondi &amp; Eastern Suburbs
          </span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-playfair font-medium text-stone-900 tracking-tight mb-6 drop-shadow-sm">
<span className="underline decoration-stone-300 decoration-2 underline-offset-8">
<span className="animate-shine bg-clip-text text-transparent bg-gradient-to-r from-stone-900 via-stone-500 to-stone-900 bg-[length:200%_auto]">
              Fine Finish
            </span>
            Flooring
          </span>
          —
          <span className="block mt-8 text-stone-500 font-sans">
            Bondi’s Stone &amp; Tile Restoration Specialists
          </span>
</h1>
<p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Protecting and restoring your stone floors with professional service
          and premium results.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative overflow-hidden w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-accent-500/25 transition-all duration-300 transform hover:-translate-y-0.5 isolate" href="#contact">
<span className="relative z-10 flex items-center justify-center gap-2">
              Get a Free Quote
              <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-0 skew-x-12"></div>
</a>
<a className="sm:w-auto hover:bg-white/80 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium text-stone-900 bg-white/50 w-full border-stone-200 border rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm backdrop-blur-md" href="#services">
            View Services
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</section>
<section className="py-16 bg-white border-b border-stone-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6 reveal">
<div className="">
<div className="flex items-center gap-2 mb-3">
<div className="flex text-amber-400">
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<span className="text-sm font-medium text-stone-500">
                5.0 Average based on Google Reviews
              </span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
              Trusted by Sydney Locals
            </h2>
</div>
</div>

<div className="-mx-6 px-6 md:mx-0 md:px-0 [&amp;::-webkit-scrollbar]:hidden overflow-hidden mask-edges" id="reviews-carousel" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<div className="carousel-track pb-8 pt-2">

<div className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "Connor did an amazing job on our travertine floors. They were
                dull and scratched, now they look brand new. Highly professional
                service."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  SJ
                </div>
<div>
<div className="text-sm font-medium text-stone-900">
                    Sarah Jenkins
                  </div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
<div className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "We had our outdoor sandstone sealed and the difference is
                incredible. Water just beads off it now. Great work!"
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  MD
                </div>
<div>
<div className="text-sm font-medium text-stone-900">
                    Mike Davies
                  </div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
<div className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "Professional, punctual and polite. The team restored our
                kitchen marble benchtop and floors. Very happy!"
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  JL
                </div>
<div>
<div className="text-sm font-medium text-stone-900">Jenny L</div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>

<div aria-hidden="true" className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "Connor did an amazing job on our travertine floors. They were
                dull and scratched, now they look brand new. Highly professional
                service."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  SJ
                </div>
<div>
<div className="text-sm font-medium text-stone-900">
                    Sarah Jenkins
                  </div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
<div aria-hidden="true" className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "We had our outdoor sandstone sealed and the difference is
                incredible. Water just beads off it now. Great work!"
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  MD
                </div>
<div>
<div className="text-sm font-medium text-stone-900">
                    Mike Davies
                  </div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
<div aria-hidden="true" className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "Professional, punctual and polite. The team restored our
                kitchen marble benchtop and floors. Very happy!"
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  JL
                </div>
<div>
<div className="text-sm font-medium text-stone-900">Jenny L</div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-stone-200 border-b pt-24 pb-24 relative overflow-hidden" id="services">
<div className="absolute inset-0 z-0 pointer-events-none relative z-10">
<div className="absolute inset-0 bg-grid-stone"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-300/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="reveal text-center mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-4">
            Our Expertise
          </h2>
<p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Cleaning, Sealing &amp; Polishing natural stone to perfection.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

<div className="flex flex-col bg-white h-full border border-stone-100 rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal">
<div className="overflow-hidden bg-stone-200 w-full h-64 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c424c5a8-cb8e-4da5-b6e2-01ec0b76582f_800w.jpg)] bg-cover bg-center rounded-2xl relative">
<span className="absolute top-5 left-5 font-medium text-stone-500 mix-blend-multiply z-20">
                Cleaning &amp; Polishing
              </span>

</div>
<div className="pt-6 px-3 pb-4">
<div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">
                Clean &amp; Polish
              </h3>
<p className="text-stone-500 text-sm leading-relaxed">
                We restore worn, poor condition stone back to high quality using
                industrial-grade diamonds and polishing compounds.
              </p>
</div>
</div>

<div className="flex flex-col bg-white h-full border border-stone-100 rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-100">
<div className="relative w-full h-64 bg-stone-200 rounded-2xl overflow-hidden">
<span className="absolute top-5 left-5 font-medium text-stone-500 mix-blend-multiply z-20">
                Sealing
              </span>
<div className="bg-stone-200 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d4d96a8-4b72-4af3-9c25-c315dd33cacc_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="pt-6 px-3 pb-4">
<div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">
                Seal Protected Surfaces
              </h3>
<p className="text-stone-500 text-sm leading-relaxed">
                Lock in protection on newly conditioned stone with premium
                penetrating sealers that resist stains and wear.
              </p>
</div>
</div>

<div className="flex flex-col bg-white h-full border border-stone-100 rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-200">
<div className="relative w-full h-64 bg-stone-200 rounded-2xl overflow-hidden">
<img alt="Luxury Bathroom Stone Floor" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95588915-2bd4-4492-acc3-799c65a22ffa_800w.jpg"/>
</div>
<div className="pt-6 px-3 pb-4">
<div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path>
<path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">
                Fine Finish Service
              </h3>
<p className="text-stone-500 text-sm leading-relaxed">
                Professional service with professional results. We don't cut
                corners, ensuring a mirror-like or honed finish that lasts.
              </p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-stone-100 p-8 md:p-12 reveal">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3">
<h3 className="text-2xl font-medium text-stone-900 mb-4 tracking-tight">
                Products &amp; Stone Types
              </h3>
<p className="text-stone-500 text-lg leading-relaxed mb-6">
                We use premium products, high-grade penetrating sealers, and
                meticulous techniques to maximise protection and beauty for a
                wide variety of natural stones.
              </p>
<a className="inline-flex items-center gap-2 text-base font-medium text-accent-600 hover:text-accent-700 transition-colors" href="#contact">
                Ask about your stone type
                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-stone-100 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-stone-200/50 cursor-default">
<span className="font-medium text-stone-700">Limestone</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-orange-50 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-orange-100/50 cursor-default">
<span className="font-medium text-stone-700">Travertine</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-zinc-100 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-zinc-200/50 cursor-default">
<span className="font-medium text-stone-700">Terrazzo</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-amber-50 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-amber-100/50 cursor-default">
<span className="font-medium text-stone-700">Sandstone</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-red-50 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-red-100/50 cursor-default">
<span className="font-medium text-stone-700">Terracotta</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-gray-200 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-gray-300/50 cursor-default">
<span className="font-medium text-stone-700">Granite</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-slate-50 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-slate-200/50 cursor-default">
<span className="font-medium text-stone-700">Marble</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-slate-200 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-slate-300/50 cursor-default">
<span className="font-medium text-stone-700">Slate</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="reveal mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-stone-900 tracking-tight">
            Why Choose Fine Finish
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 reveal group hover:bg-white hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-accent-500 transition-colors mb-4 iconify--lucide" data-icon="lucide:heart-handshake" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h3 className="text-xl font-medium text-stone-900 mb-2">
              Old-Fashioned Values
            </h3>
<p className="text-stone-500 text-base">
              We value people and results over automation. You get a
              professional service with a friendly, personal touch.
            </p>
</div>

<div className="reveal delay-100 group hover:bg-white hover:shadow-lg transition-all duration-300 bg-stone-50 border-stone-100 border rounded-2xl p-6">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-accent-500 transition-colors mb-4 iconify--lucide" data-icon="lucide:ruler" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h3 className="text-xl font-medium text-stone-900 mb-2">
              Attention to Detail
            </h3>
<p className="text-stone-500 text-base">
              Quality work and relationships matter. We treat your home with
              respect and your floors with care.
            </p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 reveal delay-200 group hover:bg-white hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-accent-500 transition-colors mb-4 iconify--lucide" data-icon="lucide:clipboard-check" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="m9 14l2 2l4-4"></path>
</g>
</svg>
<h3 className="text-xl font-medium text-stone-900 mb-2">
              On-Site Quotes Only
            </h3>
<p className="text-stone-500 text-base">
              No guesswork. We visit your site to assess the stone condition
              personally before providing a quote.
            </p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 reveal delay-300 group hover:bg-white hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-accent-500 transition-colors mb-4 iconify--lucide" data-icon="lucide:shield" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h3 className="text-xl font-medium text-stone-900 mb-2">
              Protecting Investment
            </h3>
<p className="text-stone-500 text-base">
              We prioritise long-term protection. Our sealing and polishing
              extends the life of your natural stone.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-stone-900 pt-24 pb-24 relative" id="about">
<div className="transform bg-stone-800/50 w-1/2 h-full absolute top-0 right-0 translate-x-1/4 skew-x-12"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 reveal">
<div className="inline-block text-accent-400 font-medium text-sm mb-4 tracking-wide uppercase">
              Meet the Owner
            </div>
<h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">
              Connor Cooper
            </h2>
<h3 className="text-xl text-stone-300 mb-8 font-medium">
              Head Technician &amp; Owner
            </h3>
<div className="prose prose-invert prose-lg text-stone-400 mb-10 leading-relaxed">
<p className="">
                Connor started Fine Finish Flooring to combine result-driven
                craftsmanship with professional and friendly service.
              </p>
<p className="mt-4">
                His experience in both commercial and residential work means
                clients get both quality outcomes and a positive service
                experience. When you book with Fine Finish, you deal directly
                with the expert who understands your floor's needs.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-accent-400 border border-stone-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm font-medium text-stone-200">
                  Police-checked technicians
                </span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-accent-400 border border-stone-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm font-medium text-stone-200">
                  Highest-quality products
                </span>
</div>
</div>
</div>
<div className="lg:w-1/2 reveal delay-200">
<div className="overflow-hidden aspect-[4/5] bg-center bg-stone-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03eff33a-648e-407e-8190-c0d483dfe072_1600w.jpg)] max-w-md bg-cover border-stone-700 border rounded-2xl mr-auto ml-auto relative shadow-2xl">
<div className="absolute bottom-6 left-6"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 pt-24 pb-24 relative overflow-hidden" id="faq">
<div className="absolute inset-0 z-0 pointer-events-none relative z-10">
<div className="absolute inset-0 bg-grid-stone"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-300/40 rounded-full blur-[90px] mix-blend-multiply"></div>
</div>
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
<p className="text-stone-500">
            Common questions about our process and care.
          </p>
</div>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-stone-200 overflow-hidden reveal">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-medium text-stone-900">
                What professionalism and safety measures do you take?
              </span>
<svg aria-hidden="true" className="accordion-icon iconify text-stone-400 iconify--lucide" data-icon="lucide:chevron-down" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="accordion-content bg-stone-50/50">
<div className="px-6 pb-6 pt-2 text-stone-600 text-sm leading-relaxed">
                We take great pride in our workspace. We use protective
                coverings for walls and furniture, use high-quality equipment to
                minimize dust, and our technicians are police-checked. Safety
                and respect for your home are our top priorities.
              </div>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 overflow-hidden reveal delay-100">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-medium text-stone-900">
                How do you determine the right process?
              </span>
<svg aria-hidden="true" className="accordion-icon iconify text-stone-400 iconify--lucide" data-icon="lucide:chevron-down" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="accordion-content bg-stone-50/50">
<div className="px-6 pb-6 pt-2 text-stone-600 text-sm leading-relaxed">
                Every stone is different. That's why we only provide on-site
                quotes. We assess the stone type, current wear, and finish
                requirements (honed vs polished) to create a bespoke plan for
                your floor.
              </div>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 overflow-hidden reveal delay-200">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-medium text-stone-900">Do timelines vary?</span>
<svg aria-hidden="true" className="accordion-icon iconify text-stone-400 iconify--lucide" data-icon="lucide:chevron-down" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="accordion-content bg-stone-50/50">
<div className="px-6 pb-6 pt-2 text-stone-600 text-sm leading-relaxed">
                Yes, timelines depend on the size of the area and the level of
                restoration required. Most residential jobs take between 1-3
                days. We provide a clear estimated timeline with your quote so
                you can plan accordingly.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-200 relative overflow-hidden" id="contact">
<div className="absolute inset-0 z-0 bg-grid-white pointer-events-none"></div>

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent-500/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-stone-500/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="reveal">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Get Your Free Quote
            </h2>
<p className="text-stone-400 text-lg mb-10 leading-relaxed max-w-md">
              Ready to restore your stone floors? Contact Connor today for an
              obligation-free on-site assessment and quote.
            </p>
<div className="space-y-8">
<a className="flex items-start gap-5 group" href="tel:0431565725">
<div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
<p className="text-stone-400 group-hover:text-accent-400 transition-colors">
                    0431 565 725
                  </p>
</div>
</a>
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-accent-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">
                    Service Area
                  </h3>
<p className="text-stone-400">
                    Bondi, Eastern Suburbs &amp; Sydney Metro
                  </p>
</div>
</div>
<a className="flex items-start gap-5 group" href="mailto:info@finefinish.com.au">
<div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Email</h3>
<p className="text-stone-400 group-hover:text-accent-400 transition-colors">
                    info@finefinishflooring.com.au
                  </p>
</div>
</a>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-2xl reveal delay-200">
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="name">
                    Full Name
                  </label>
<input className="custom-input w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-accent-400 transition-colors bg-stone-50" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="phone">
                    Phone Number
                  </label>
<input className="custom-input w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-accent-400 transition-colors bg-stone-50" id="phone" placeholder="0400 000 000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="email">
                  Email Address
                </label>
<input className="custom-input w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-accent-400 transition-colors bg-stone-50" id="email" placeholder="john@example.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="location">
                    Job Location
                  </label>
<input className="custom-input w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-accent-400 transition-colors bg-stone-50" id="location" placeholder="e.g. Bondi Beach" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="urgency">
                    Urgency
                  </label>
<div className="relative">
<select className="custom-input w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-accent-400 transition-colors bg-stone-50 appearance-none text-stone-600" id="urgency">
<option disabled="" selected="" value="">
                        When do you need it?
                      </option>
<option value="asap">As soon as possible</option>
<option value="week">Within a week</option>
<option value="month">Within a month</option>
<option value="flexible">Flexible</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="message">
                  How can we help?
                </label>
<textarea className="custom-input w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-accent-400 transition-colors bg-stone-50 resize-none" id="message" placeholder="Tell us about your stone floors..." rows="4"></textarea>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700" htmlFor="photos">
                  Photos of the area (Optional)
                </label>
<input accept="image/*" className="block w-full text-sm text-stone-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-stone-100 file:text-stone-700 hover:file:bg-stone-200 cursor-pointer border border-stone-200 rounded-lg bg-stone-50" id="photos" multiple="" type="file"/>
</div>
<button className="w-full bg-stone-900 hover:bg-accent-500 hover:text-white text-white font-medium py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg mt-2" type="button">
                Request Free Quote
              </button>
<p className="text-xs text-center text-stone-400 mt-4">
                We respect your privacy. No spam, ever.
              </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="flex text-white bg-stone-900 w-8 h-8 rounded-lg shadow-sm items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
</div>
<span className="text-xl font-playfair font-medium text-stone-900 tracking-tight">
                Fine Finish
              </span>
</a>
<p className="text-stone-500 text-sm leading-relaxed">
              Sydney's trusted specialists in natural stone restoration,
              polishing, and sealing. Bringing life back to your floors.
            </p>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Services</h4>
<ul className="space-y-2 text-sm text-stone-600">
<li>
<a className="hover:text-accent-600 transition-colors" href="#">
                  Stone Polishing
                </a>
</li>
<li>
<a className="hover:text-accent-600 transition-colors" href="#">
                  Tile Cleaning
                </a>
</li>
<li>
<a className="hover:text-accent-600 transition-colors" href="#">
                  Sealing &amp; Protection
                </a>
</li>
<li>
<a className="hover:text-accent-600 transition-colors" href="#">
                  Grout Restoration
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Stone Types</h4>
<ul className="space-y-2 text-sm text-stone-600">
<li>
<a className="hover:text-accent-600 transition-colors" href="#">
                  Marble
                </a>
</li>
<li>
<a className="hover:text-accent-600 transition-colors" href="#">
                  Travertine
                </a>
</li>
<li>
<a className="hover:text-accent-600 transition-colors" href="#">
                  Limestone
                </a>
</li>
<li>
<a className="hover:text-accent-600 transition-colors" href="#">
                  Terrazzo
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                0431 565 725
              </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
<polyline points="22,6 12,13 2,6"></polyline>
</svg>
                info@finefinish.com.au
              </li>
<li className="pt-2">
<div className="flex gap-4">

<a aria-label="Facebook" className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path>
</svg>
</a>
<a aria-label="Instagram" className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm0 1.802c-2.607 0-2.923.01-3.957.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.957v.08c0 2.607.01 2.923.058 3.957.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.957-.058h-.08zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2024 Fine Finish Flooring. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-stone-600" href="#">Privacy Policy</a>
<a className="hover:text-stone-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



<div className="pointer-events-none fixed inset-0 z-[30] transition duration-300" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 158, 11, 0.08), transparent 40%)'}}></div>

    </>
  );
}
