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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
colors: {
charcoal: '#0f0c09',
ember: '#1B2A4E',
wine: '#8B1A1A',
cream: '#F2EAD9',
surface: '#1C1612',
gold: '#E8C88A',
olive: '#6B8E4E',
terracotta: '#C84B31',
azure: '#2563EB',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
boxShadow: {
'glow': '0 0 20px rgba(27, 42, 78, 0.35)',
}
}
}
}



tailwind.config = {
theme: {
extend: {
colors: {
charcoal: '#0f0c09',
ember: '#C8783A',
wine: '#8B1A1A',
cream: '#F2EAD9',
surface: '#1C1612',
gold: '#E8C88A',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
boxShadow: {
'glow': '0 0 20px rgba(200, 120, 58, 0.15)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // 1. Scroll Animations (Fade Up)
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.fade-up').forEach((el) => {
          observer.observe(el);
      });

      // 2. Sticky Navbar Background Logic
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('bg-charcoal', 'border-ember/40', 'shadow-lg');
              navbar.classList.remove('bg-gradient-to-b', 'border-transparent');
          } else {
              navbar.classList.remove('bg-charcoal', 'border-ember/40', 'shadow-lg');
              navbar.classList.add('bg-gradient-to-b', 'border-transparent');
          }
      });

      // 3. Mobile Menu Toggle
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');
      let isMenuOpen = false;

      function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          if (isMenuOpen) {
              mobileMenu.classList.remove('hidden');
              // Small timeout to allow the block display to render before transitioning opacity
              setTimeout(() => {
                  mobileMenu.classList.remove('opacity-0');
                  mobileMenu.classList.add('opacity-100');
              }, 10);
              document.body.style.overflow = 'hidden';
              mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="text-2xl text-ember"></iconify-icon>';
          } else {
              mobileMenu.classList.add('opacity-0');
              mobileMenu.classList.remove('opacity-100');
              document.body.style.overflow = 'auto';
              mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>';
              // Hide element fully after animation ends
              setTimeout(() => {
                  if (!isMenuOpen) mobileMenu.classList.add('hidden');
              }, 300);
          }
      }

      mobileMenuBtn.addEventListener('click', toggleMenu);
      mobileLinks.forEach(link => {
          link.addEventListener('click', toggleMenu);
      });

      // 4. Menu Tab Filtering
      const tabs = document.querySelectorAll('.menu-tab');
      const items = document.querySelectorAll('.menu-item');

      tabs.forEach(tab => {
          tab.addEventListener('click', () => {
              // Remove active styling from all tabs
              tabs.forEach(t => {
                  t.classList.remove('bg-ember', 'text-charcoal');
                  t.classList.add('text-cream/70');
              });
              // Add active styling to clicked tab
              tab.classList.add('bg-ember', 'text-charcoal');
              tab.classList.remove('text-cream/70');

              const target = tab.getAttribute('data-target');

              // Hide all, show targeted
              items.forEach(item => {
                  if (item.classList.contains(target)) {
                      item.classList.remove('hidden');
                      // Small trick to trigger animation
                      item.style.opacity = '0';
                      setTimeout(() => { item.style.transition = 'opacity 0.4s ease'; item.style.opacity = '1'; }, 50);
                  } else {
                      item.classList.add('hidden');
                  }
              });
          });
      });

      // 5. Form Handling
      const form = document.getElementById('reservation-form');
      const successMsg = document.getElementById('form-success');

      form.addEventListener('submit', (e) => {
          e.preventDefault();
          form.style.opacity = '0';
          setTimeout(() => {
              form.classList.add('hidden');
              successMsg.classList.remove('hidden');
              successMsg.style.display = 'flex';
              // Reset opacity for potential reuse
              form.style.opacity = '1';
          }, 300);
      });

      function resetForm() {
          form.reset();
          successMsg.classList.add('hidden');
          successMsg.style.display = 'none';
          form.classList.remove('hidden');
      }

      // 6. Cookie Banner Logic
      const cookieBanner = document.getElementById('cookie-banner');
      function dismissCookies() {
          cookieBanner.classList.remove('translate-y-0', 'opacity-100');
          cookieBanner.classList.add('translate-y-10', 'opacity-0');
          setTimeout(() => {
              cookieBanner.style.display = 'none';
          }, 500);
      }

      // Initialize today's date in date picker
      const dateInput = document.querySelector('input[type="date"]');
      if(dateInput) {
          dateInput.min = new Date().toISOString().split("T")[0];
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
      

<nav className="fixed z-50 transition-all duration-300 w-full border-b top-0 bg-charcoal border-ember/40 shadow-lg" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-azure text-2xl group-hover:scale-110 transition-transform" icon="solar:leaf-linear"></iconify-icon>
<span className="text-xl tracking-tight text-cream font-playfair font-medium">
              Grego
            </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-cream/80 hover:text-azure transition-colors font-geist" href="#speisekarte">
              Speisekarte
            </a>
<a className="text-sm font-medium text-cream/80 hover:text-azure transition-colors font-geist" href="#restaurant">
              Restaurant
            </a>
<a className="text-sm font-medium text-cream/80 hover:text-azure transition-colors font-geist" href="#ambiente">
              Galerie
            </a>
<a className="text-sm font-medium text-cream/80 hover:text-azure transition-colors font-geist" href="#kontakt">
              Kontakt
            </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-[#1B2A4E] text-cream font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#243a6b] transition-colors shadow-glow font-geist" href="#reservierung">
              Reservieren
            </a>
<button className="md:hidden text-cream p-2" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed z-40 hidden flex-col transition-opacity duration-300 opacity-0 top-0 right-0 bottom-0 left-0 items-center justify-center bg-charcoal/98 backdrop-blur-md" id="mobile-menu">
<div className="flex flex-col gap-8 items-center">
<a className="mobile-link text-cream hover:text-azure transition-colors text-3xl tracking-tight font-playfair font-medium" href="#speisekarte">
          Speisekarte
        </a>
<a className="mobile-link text-3xl tracking-tight text-cream hover:text-azure transition-colors font-playfair font-medium" href="#restaurant">
          Restaurant
        </a>
<a className="mobile-link text-3xl tracking-tight text-cream hover:text-azure transition-colors font-playfair font-medium" href="#ambiente">
          Galerie
        </a>
<a className="mobile-link text-3xl tracking-tight text-cream hover:text-azure transition-colors font-playfair font-medium" href="#kontakt">
          Kontakt
        </a>
<a className="mobile-link mt-4 bg-[#1B2A4E] text-cream font-medium text-lg px-8 py-3 rounded-full font-geist" href="#reservierung">
          Tisch reservieren
        </a>
</div>
</div>

<section className="min-h-screen flex overflow-hidden pt-20 relative items-center justify-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Griechisches Restaurant" className="object-center opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37c142fd-9f6a-445a-ba8b-03832ee0f9c2_3840w.png"/>

<div className="bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-gradient-to-r from-charcoal/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="lg:px-8 flex flex-col w-full h-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-24 pl-6 relative items-start justify-center">
<span className="fade-up inline-block text-terracotta font-medium tracking-wide uppercase text-xs mb-4 visible font-geist">
          Authentisch griechisch in Dortmund
        </span>
<h1 className="fade-up text-5xl md:text-6xl lg:text-7xl tracking-tight text-cream max-w-4xl leading-tight mb-6 visible font-playfair font-medium">
          Grego, griechisches
          <br/>
          Restaurant in Dortmund
        </h1>
<p className="fade-up text-lg md:text-xl text-cream/80 max-w-2xl mb-10 visible font-playfair font-medium">
          Mediterrane Aromen, frische Zutaten und echte griechische
          Gastfreundschaft. Erleben Sie Grego — Ihr griechisches Restaurant in
          Dortmund.
        </p>
<div className="fade-up flex flex-col sm:flex-row gap-4 visible">
<a className="inline-flex items-center justify-center bg-[#1B2A4E] text-cream font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#243a6b] transition-colors font-geist" href="#reservierung">
            Tisch reservieren
          </a>
<a className="inline-flex items-center justify-center border border-cream/30 text-cream font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-cream hover:text-charcoal transition-colors font-geist" href="#speisekarte">
            Speisekarte ansehen
          </a>
</div>
</div>

<div className="fade-up absolute bottom-8 left-6 lg:left-8 z-10 visible">
<div className="bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
<div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
<iconify-icon className="text-gold text-xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-1 text-gold mb-0.5 font-geist">
<div className="flex items-center gap-0.5 text-gold">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<span className="ml-2 text-cream font-medium text-sm font-geist">
                  4,9
                </span>
</div>
</div>
<span className="text-xs text-cream/60 font-geist">
              Google-Bewertungen
            </span>
</div>
</div>
</div>

<a className="absolute bottom-8 right-6 lg:right-8 z-10 animate-bounce w-10 h-10 rounded-full bg-[#1B2A4E] text-cream hover:bg-[#243a6b] transition-colors flex items-center justify-center" href="#restaurant">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
</section>

<section className="pt-24 pb-24 relative" id="restaurant">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="fade-up relative order-2 lg:order-1 visible">
<div className="absolute -inset-4 border border-azure/30 rounded-3xl transform -rotate-2"></div>
<img alt="Restaurant Atmosphäre" className="w-full h-[600px] object-cover rounded-2xl relative shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa379611-bf66-4a00-8023-84cff8ec5fca_1600w.png"/>
<div className="absolute -bottom-6 -right-6 bg-surface p-6 rounded-2xl border border-terracotta/30 shadow-xl">
<iconify-icon className="text-4xl text-terracotta mb-2" icon="solar:medal-star-linear"></iconify-icon>
<div className="font-serif text-lg tracking-tight font-geist">
                Lokal des Jahres
              </div>
<div className="text-xs text-cream/60 uppercase tracking-widest mt-1 font-geist">
                Dortmund
              </div>
</div>
</div>

<div className="fade-up order-1 lg:order-2 visible">
<h2 className="text-3xl md:text-5xl tracking-tight text-cream mb-6 leading-tight font-playfair font-medium">
              Mehr als ein Restaurant —
              <br/>
<span className="text-terracotta font-playfair font-medium">
                eine Reise nach Griechenland.
              </span>
</h2>
<p className="text-cream/70 text-lg mb-6 leading-relaxed font-light font-geist">
              Der Name Grego steht für authentische griechische Küche, herzliche
              Gastfreundschaft und mediterrane Lebensfreude mitten in Dortmund.
            </p>
<p className="text-cream/70 text-lg mb-12 leading-relaxed font-light font-geist">
              Unser Team bringt die Aromen Griechenlands direkt nach Dortmund —
              täglich frisch, mit Leidenschaft zubereitet, nach traditionellen
              Rezepten. Ein Ort, an dem man als Gast kommt und als Freund geht.
            </p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-cream/10">
<div className="">
<div className="text-olive font-medium text-sm mb-1 uppercase tracking-wider font-geist">
                  Qualität
                </div>
<div className="text-xl tracking-tight font-playfair font-medium">
                  Mehrfach ausgezeichnet
                </div>
</div>
<div>
<div className="text-azure font-medium text-sm mb-1 uppercase tracking-wider font-geist">
                  Vertrauen
                </div>
<div className="text-xl tracking-tight font-playfair font-medium">
                  5,0 Sterne Bewertung
                </div>
</div>
<div>
<div className="text-terracotta font-medium text-sm mb-1 uppercase tracking-wider font-geist">
                  Tradition
                </div>
<div className="text-xl tracking-tight font-playfair font-medium">
                  Seit Jahren etabliert
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="speisekarte">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="fade-up text-center mb-16 visible">
<span className="inline-flex items-center gap-2 text-olive text-sm uppercase tracking-widest font-medium mb-4 font-geist">
<iconify-icon className="text-olive" icon="solar:leaf-linear"></iconify-icon>
            Frisch aus der griechischen Küche
          </span>
<h2 className="text-4xl md:text-5xl tracking-tight text-cream mb-4 font-playfair font-medium">
            Unsere Spezialitäten
          </h2>
<p className="text-cream/60 max-w-2xl mx-auto font-light font-geist">
            Traditionelle griechische Spezialitäten — nach Originalrezeptur,
            ohne Kompromisse.
          </p>
</div>

<div className="fade-up flex overflow-x-auto hide-scrollbar gap-2 mb-12 justify-start md:justify-center border-b border-cream/10 pb-4 visible">
<button className="menu-tab active px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-azure text-cream transition-all font-geist" data-target="balkan">
            Vorspeisen
          </button>
<button className="menu-tab px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap text-cream/70 hover:text-cream hover:bg-white/5 transition-all font-geist" data-target="schnitzel">
            Grillgerichte
          </button>
<button className="menu-tab px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap text-cream/70 hover:text-cream hover:bg-white/5 transition-all font-geist" data-target="fruehstueck">
            Fisch
          </button>
<button className="menu-tab px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap text-cream/70 hover:text-cream hover:bg-white/5 transition-all font-geist" data-target="pizza">
            Salate
          </button>
<button className="menu-tab px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap text-cream/70 hover:text-cream hover:bg-white/5 transition-all font-geist" data-target="desserts">
            Desserts
          </button>
</div>

<div className="fade-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 visible" id="menu-grid">

<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-azure/20 hover:border-azure/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5 font-geist">
              5
            </span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug font-geist">
                Gyros Teller
              </h3>
<span className="text-terracotta font-medium whitespace-nowrap font-geist">
                € 13,50
              </span>
</div>
<p className="text-sm text-cream/60 font-light font-geist">
              Hähnchenfleisch, Tomate, Zwiebel, Pommes mit Salz &amp; Oregano,
              Pita-Brot, Tzatziki
            </p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-azure/20 hover:border-azure/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5 font-geist">
              6
            </span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug font-geist">
                Gyros Club
              </h3>
<span className="text-terracotta font-medium whitespace-nowrap font-geist">
                € 13,50
              </span>
</div>
<p className="text-sm text-cream/60 font-light font-geist">
              Hähnchenfleisch, Tomate, Zwiebel, 2 Pita-Brot, Käse, Pommes mit
              Salz &amp; Oregano, Tzatziki
            </p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-azure/20 hover:border-azure/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5 font-geist">
              7
            </span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug font-geist">
                Suvlaki Teller
              </h3>
<span className="text-terracotta font-medium whitespace-nowrap font-geist">
                € 14,50
              </span>
</div>
<p className="text-sm text-cream/60 font-light font-geist">
              2 Suvlaki, Tomate, Zwiebel, Pita-Brot, Pommes mit Salz &amp;
              Oregano, Tzatziki, Zitrone
            </p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-terracotta/50 shadow-glow hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute -top-3 right-4 bg-terracotta text-cream text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full font-geist">
              Hausempfehlung
            </span>
<div className="mt-4 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug text-gold font-geist">
                Mix Teller
              </h3>
<span className="text-terracotta font-medium whitespace-nowrap font-geist">
                € 21,50
              </span>
</div>
<p className="text-sm text-cream/60 font-light font-geist">
              1 Hähnchenspieß, 1 Rindfleischspieß, 1 Lammkotelett, 1 Bifteki,
              Salat, Pommes mit Salz &amp; Oregano, Pita-Brot, Tzatziki, Zitrone
            </p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-azure/20 hover:border-azure/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5 font-geist">
              9
            </span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug font-geist">
                Bifteki Teller
              </h3>
<span className="text-terracotta font-medium whitespace-nowrap font-geist">
                € 12,50
              </span>
</div>
<p className="text-sm text-cream/60 font-light font-geist">
              2 Bifteki kalb, Tomate, Zwiebel, Pommes mit Salz &amp; Oregano,
              Pita-Brot, Tzatziki, Zitrone
            </p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-azure/20 hover:border-azure/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5 font-geist">
              10
            </span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug font-geist">
                Lammkotelett Teller
              </h3>
<span className="text-terracotta font-medium whitespace-nowrap font-geist">
                € 19,90
              </span>
</div>
<p className="text-sm text-cream/60 font-light font-geist">
              3 Lammkoteletts, Tomate, Zwiebel, Pita-Brot, Pommes mit Salz &amp;
              Oregano, Tzatziki, Zitrone
            </p>
</div>
</div>
<div className="fade-up mt-12 text-center visible">
<a className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-azure transition-colors border-b border-transparent hover:border-azure pb-1 font-geist" href="#">
            Vollständige Speisekarte ansehen
            <iconify-icon className="text-azure" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-xs text-cream/40 mt-6 font-light font-geist">
            Bei Fragen zu Allergenen wenden Sie sich bitte an unser Personal.
          </p>
</div>
</div>
</section>
<section className="pt-24 pb-24 relative border-t border-white/5" id="ambiente">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="fade-up text-center mb-16 visible">
<span className="inline-flex items-center gap-2 text-olive text-sm uppercase tracking-widest font-medium mb-4 font-geist">
<iconify-icon className="text-olive" icon="solar:gallery-linear"></iconify-icon>
            Ambiente &amp; Eindrücke
          </span>
<h2 className="text-4xl md:text-5xl tracking-tight text-cream mb-4 font-playfair font-medium">
            Galerie
          </h2>
<p className="text-cream/60 max-w-2xl mx-auto font-light font-geist">
            Werfen Sie einen Blick in unser Restaurant und lassen Sie sich von
            der griechischen Atmosphäre verzaubern.
          </p>
</div>
<div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-6 visible">
<div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-surface aspect-[4/3]">
<img alt="Galerie Bild 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25ed60c0-6f76-4d63-b309-96a78d724169_800w.png"/>
</div>
<div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-surface aspect-[4/3]">
<img alt="Galerie Bild 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54c7a2e1-7f32-4255-98cd-34a037273776_1600w.png"/>
</div>
</div>
</div>
</section>


<section className="border-white/5 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="fade-up flex flex-col items-center justify-center text-center mb-20 visible">
<iconify-icon className="text-5xl text-gold mb-4" icon="solar:cup-star-linear"></iconify-icon>
<h3 className="text-3xl md:text-4xl tracking-tight text-cream mb-2 font-playfair font-medium">
            Beliebt in Dortmund
          </h3>
<p className="text-terracotta uppercase tracking-widest text-sm font-medium font-geist">
            Griechische Küche · Dortmund
          </p>
</div>

<div className="fade-up masonry-grid text-cream visible">
<div className="masonry-item bg-surface p-8 rounded-2xl border border-white/5">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed mb-6 font-geist">
              "Das Essen war hervorragend — besonders das Gyros und der
              Bauernsalat. Alles frisch und perfekt gewürzt."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-geist">
                G
              </div>
<span className="text-sm text-cream/60 font-geist">
                Google Bewertung
              </span>
</div>
</div>
<div className="masonry-item bg-surface/50 p-8 rounded-2xl border border-white/5">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed mb-6 font-geist">
              "Große Portionen, faire Preise. Das Souvlaki ist der Wahnsinn!"
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-geist">
                A
              </div>
<span className="text-sm text-cream/60 font-geist">
                Google Bewertung
              </span>
</div>
</div>
<div className="masonry-item bg-surface p-8 rounded-2xl border border-white/5">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed mb-6 font-geist">
              "Wenn ich Heimweh nach Griechenland habe, gehe ich zu Grego. Beste
              Küche der Stadt."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-geist">
                M
              </div>
<span className="text-sm text-cream/60 font-geist">
                Google Bewertung
              </span>
</div>
</div>
<div className="masonry-item bg-surface/50 p-8 rounded-2xl border border-white/5">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed mb-6 font-geist">
              "Man hat das Gefühl, in Griechenland zu sein. Den Oktopus auf
              jeden Fall probieren!"
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-geist">
                S
              </div>
<span className="text-sm text-cream/60 font-geist">
                Google Bewertung
              </span>
</div>
</div>
</div>
<div className="fade-up mt-16 text-center visible">
<div className="inline-flex flex-col items-center">
<div className="text-4xl text-gold mb-1 font-playfair font-medium">
              4,9
            </div>
<div className="flex text-gold mb-2 gap-1 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm text-cream/60 uppercase tracking-widest font-geist">
              Top bewertet auf Google
            </span>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24 relative" id="kontakt">
<div className="absolute -top-24" id="reservierung"></div>

<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">

<div className="fade-up lg:col-span-2 visible">
<div className="mb-10">
<span className="text-3xl tracking-tight text-cream block mb-2 font-playfair font-medium">
                Grego
              </span>
<div className="h-1 w-12 bg-terracotta rounded-full"></div>
</div>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<iconify-icon className="text-azure text-xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div className="">
<h4 className="font-medium text-cream mb-1 font-geist">
                    Adresse
                  </h4>
<p className="text-cream/60 font-light text-sm leading-relaxed font-geist">
                    Klönnestraße 60
                    <br/>
                    44143 Dortmund
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-olive text-xl mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div className="">
<h4 className="font-medium text-cream mb-1 font-geist">
                    Öffnungszeiten
                  </h4>
<p className="text-cream/60 font-light text-sm leading-relaxed font-geist">
                    Mo 10:00–22:00
                    <br/>
                    Di 16:00–22:00
                    <br/>
                    Mi 10:00–22:00
                    <br/>
                    Do 10:00–22:00
                    <br/>
                    Fr 10:00–00:00
                    <br/>
                    Sa 10:00–01:00
                    <br/>
                    So 10:00–22:00
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-terracotta text-xl mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<h4 className="font-medium text-cream mb-1 font-geist">
                    Telefon
                  </h4>
<p className="text-cream/60 font-light text-sm font-geist">
                    0176 79919167
                  </p>
</div>
</li>
</ul>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream hover:bg-azure hover:text-cream hover:border-azure transition-all" href="#">
<iconify-icon icon="solar:map-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream hover:bg-azure hover:text-cream hover:border-azure transition-all" href="#">
<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path>
</svg>
</a>
</div>

<div className="mt-10 w-full h-48 bg-charcoal rounded-xl border border-white/5 relative overflow-hidden group flex items-center justify-center">
<div className="absolute inset-0 opacity-30 object-cover grayscale mix-blend-overlay bg-[url(default)]"></div>
<a className="relative z-10 bg-surface/80 backdrop-blur px-4 py-2 rounded border border-white/10 text-sm font-medium flex items-center gap-2 group-hover:bg-azure group-hover:text-cream transition-colors font-geist" href="#">
                Auf Google Maps öffnen
                <iconify-icon className="text-azure" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="fade-up lg:col-span-3 md:p-10 overflow-hidden border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute inset-0 bg-charcoal z-20 hidden flex-col items-center justify-center text-center p-8" id="form-success">
<div className="w-16 h-16 bg-azure/20 rounded-full flex items-center justify-center text-azure mb-6">
<iconify-icon className="text-3xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-3xl text-cream mb-2 font-playfair font-medium">
                Vielen Dank!
              </h3>
<p className="text-cream/60 font-light font-geist">
                Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in
                Kürze zur Bestätigung bei Ihnen.
              </p>
<button className="mt-8 border border-white/20 px-6 py-2 rounded-full text-sm hover:bg-white/5 transition-colors font-geist" onclick="resetForm()">
                Neue Reservierung
              </button>
</div>
<h3 className="text-2xl tracking-tight text-cream mb-8 font-playfair font-medium">
              Tisch reservieren
            </h3>
<form className="space-y-5" id="reservation-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2 font-geist">
                    Name
                  </label>
<input className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors placeholder:text-cream/20 text-sm" placeholder="Max Mustermann" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2 font-geist">
                    Telefon / E-Mail
                  </label>
<input className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors placeholder:text-cream/20 text-sm" placeholder="Für Rückfragen" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2 font-geist">
                    Datum
                  </label>
<input className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors text-sm" min="2026-05-20" required="" type="date"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2 font-geist">
                    Uhrzeit
                  </label>
<select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors text-sm" required="">
<option className="font-geist" disabled="" selected="" value="">
                      Wählen...
                    </option>
<option className="font-geist" value="17:00">17:00</option>
<option className="font-geist" value="17:30">17:30</option>
<option className="font-geist" value="18:00">18:00</option>
<option className="font-geist" value="18:30">18:30</option>
<option className="font-geist" value="19:00">19:00</option>
<option className="font-geist" value="19:30">19:30</option>
<option className="font-geist" value="20:00">20:00</option>
<option className="font-geist" value="20:30">20:30</option>
<option className="font-geist" value="21:00">21:00</option>
</select>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2 font-geist">
                    Personen
                  </label>
<select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors text-sm" required="">
<option className="font-geist" value="1">1 Person</option>
<option className="font-geist" selected="" value="2">
                      2 Personen
                    </option>
<option className="font-geist" value="3">3 Personen</option>
<option className="font-geist" value="4">4 Personen</option>
<option className="font-geist" value="5">5 Personen</option>
<option className="font-geist" value="6">6 Personen</option>
<option className="font-geist" value="group">
                      7+ (Größere Gruppe)
                    </option>
</select>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2 font-geist">
                  Anlass (Optional)
                </label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="anlass" type="radio"/>
<span className="inline-block px-4 py-2 rounded-full border border-white/10 text-xs text-cream/70 peer-checked:bg-white/10 peer-checked:text-cream peer-checked:border-white/30 transition-colors font-geist">
                      Geburtstag
                    </span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="anlass" type="radio"/>
<span className="inline-block px-4 py-2 rounded-full border border-white/10 text-xs text-cream/70 peer-checked:bg-white/10 peer-checked:text-cream peer-checked:border-white/30 transition-colors font-geist">
                      Firmenessen
                    </span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="anlass" type="radio"/>
<span className="inline-block px-4 py-2 rounded-full border border-white/10 text-xs text-cream/70 peer-checked:bg-white/10 peer-checked:text-cream peer-checked:border-white/30 transition-colors font-geist">
                      Familienfeier
                    </span>
</label>
</div>
</div>
<div className="">
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2 font-geist">
                  Sonderwünsche
                </label>
<textarea className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors text-sm placeholder:text-cream/20 resize-none" placeholder="Allergien, Hochstuhl benötigt..." rows="3"></textarea>
</div>
<button className="w-full bg-[#1B2A4E] text-cream font-semibold py-4 rounded-xl hover:bg-[#243a6b] transition-colors mt-2 shadow-glow flex items-center justify-center gap-2 font-geist" type="submit">
                Anfrage senden
                <iconify-icon className="text-cream" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-cream/30 text-center mt-4 font-geist">
                Mit dem Absenden erklären Sie sich mit unseren
                Datenschutzbestimmungen einverstanden.
              </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#0a0806] pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
<div className="md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-azure text-xl" icon="solar:leaf-linear"></iconify-icon>
<span className="font-serif font-medium text-lg tracking-tight text-cream block font-geist">
                Grego
              </span>
</a>
<p className="text-cream/50 text-sm font-light max-w-xs font-geist">
              Authentische griechische Küche im Herzen von Dortmund. Mediterrane
              Aromen und herzliche Gastfreundschaft.
            </p>
</div>
<div className="">
<h5 className="text-cream font-medium mb-4 text-sm font-geist">
              Navigation
            </h5>
<ul className="space-y-2">
<li>
<a className="text-cream/50 hover:text-azure text-sm transition-colors font-geist" href="#">
                  Startseite
                </a>
</li>
<li>
<a className="text-cream/50 hover:text-azure text-sm transition-colors font-geist" href="#speisekarte">
                  Speisekarte
                </a>
</li>
<li>
<a className="text-cream/50 hover:text-azure text-sm transition-colors font-geist" href="#restaurant">
                  Über uns
                </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-cream font-medium mb-4 text-sm font-geist">
              Rechtliches
            </h5>
<ul className="space-y-2">
<li>
<a className="text-cream/50 hover:text-cream text-sm transition-colors font-geist" href="#">
                  Impressum
                </a>
</li>
<li>
<a className="text-cream/50 hover:text-cream text-sm transition-colors font-geist" href="#">
                  Datenschutz
                </a>
</li>
</ul>
<div className="mt-6">
<h5 className="text-cream/50 text-xs uppercase tracking-widest mb-3 font-geist">
                Folgen Sie uns
              </h5>
<div className="flex gap-4">
<a className="text-cream/50 hover:text-terracotta transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</a>
<a className="text-cream/50 hover:text-terracotta transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40 font-light font-geist">
          Klönnestraße 60, 44143 Dortmund · 0176 79919167
        </div>
</div>
</footer>

<div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-sm bg-surface border border-white/10 rounded-2xl p-5 shadow-2xl z-50 transition-all duration-500 transform translate-y-10 opacity-0" id="cookie-banner" style={{display: 'none'}}>
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm text-cream/80 font-light mb-3 font-geist">
            Wir nutzen Cookies, um Ihr Erlebnis zu verbessern.
            <a className="text-azure hover:underline font-geist" href="#">
              Mehr erfahren
            </a>
</p>
<div className="flex gap-3">
<button className="bg-white/10 hover:bg-white/20 text-cream text-xs px-4 py-2 rounded-full transition-colors font-geist" onclick="dismissCookies()">
              Ablehnen
            </button>
<button className="bg-[#1B2A4E] text-cream font-medium text-xs px-4 py-2 rounded-full hover:bg-[#243a6b] transition-colors font-geist" onclick="dismissCookies()">
              Akzeptieren
            </button>
</div>
</div>
<button className="text-cream/40 hover:text-cream" onclick="dismissCookies()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>



    </>
  );
}
