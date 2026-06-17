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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element');
      }

      document.addEventListener('DOMContentLoaded', () => {
        const gtScript = document.createElement('script');
        gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(gtScript);

        const langMap = { 'Spanish': 'es', 'Italian': 'it', 'French': 'fr', 'English': 'en', 'Portuguese': 'pt' };
        const langLinks = document.querySelectorAll('a:has(iconify-icon[icon^="twemoji:flag-"])');
        const currentLangContainer = document.querySelector('.group.relative.z-50 > span:first-child');

        if(langLinks.length > 0 && currentLangContainer) {
          langLinks.forEach(link => {
            link.addEventListener('click', (e) => {
              e.preventDefault();
              const text = link.innerText.trim();
              const icon = link.querySelector('iconify-icon').getAttribute('icon');
              currentLangContainer.innerHTML = `<iconify-icon icon="${icon}"></iconify-icon> ${text.substring(0,3).toUpperCase()} <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>`;
              const dropdown = link.closest('div.absolute');
              if(dropdown) { dropdown.style.display = 'none'; setTimeout(() => dropdown.style.display = '', 100); }

              const langCode = langMap[text];
              if(langCode) {
                const gtSelect = document.querySelector('.goog-te-combo');
                if(gtSelect) {
                  gtSelect.value = langCode;
                  gtSelect.dispatchEvent(new Event('change'));
                } else {
                  document.cookie = `googtrans=/en/${langCode}; path=/;`;
                  window.location.reload();
                }
              }
            });
          });
        }

        const views = {
          'home': document.querySelectorAll('.home-view'),
          'shop': [document.getElementById('shop-view')],
          'shipping': [document.getElementById('shipping-view')],
          'about': [document.getElementById('about-view')]
        };

        function showView(viewName) {
          Object.keys(views).forEach(key => {
            const els = views[key];
            els.forEach(el => {
              if (el) {
                if (key === viewName) {
                  el.classList.remove('hidden');
                } else {
                  el.classList.add('hidden');
                }
              }
            });
          });
        }

        document.querySelectorAll('[data-route]').forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            showView(link.getAttribute('data-route'));
          });
        });

        const show = (id) => { const el = document.getElementById(id); if(el) { el.classList.remove('hidden'); el.classList.add('flex'); } };
        document.querySelectorAll('a, button').forEach(el => {
          const text = el.innerText.trim();
          if(text.includes('Price Calculator') || text.includes('Calculate Shipping')) {
            el.addEventListener('click', (e) => { e.preventDefault(); show('calc-modal'); });
          }
          if(text.includes('Order Tracking')) {
            el.addEventListener('click', (e) => { e.preventDefault(); show('track-modal'); });
          }
          if(text.includes('Start Shopping') || text.includes('Shop All') || text.includes('Checkout')) {
            el.addEventListener('click', (e) => { e.preventDefault(); show('pay-modal'); });
          }
        });

        let cartCount = 0;
        const cartBadges = document.querySelectorAll('button:has(iconify-icon[icon*="cart"]) span');
        document.querySelectorAll('.group button:has(iconify-icon[icon*="cart"])').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            cartCount++;
            cartBadges.forEach(badge => badge.innerText = cartCount);
            const originalIcon = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" class="text-xl text-red-600"></iconify-icon>';
            setTimeout(() => { btn.innerHTML = originalIcon; }, 1000);
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
      
<div id="google_translate_element" style={{position: 'absolute', top: '-9999px', left: '-9999px', zIndex: '-99'}}></div>

<div className="bg-gray-950 text-gray-300 py-2 px-6 text-xs border-b border-gray-800">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
            7850 NW 46th St, Miami, FL
          </span>
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer hidden sm:flex">
<iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon>
            info@flybox.com
          </span>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
<iconify-icon className="text-sm" icon="solar:phone-linear"></iconify-icon>
            +1 305 123 4567
          </span>
<div className="relative group cursor-pointer z-50">
<span className="flex items-center gap-1.5 hover:text-white transition-colors">
<iconify-icon icon="twemoji:flag-united-states"></iconify-icon>
              ENG
              <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
<div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 flex flex-col py-2 z-50">
<a className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 text-sm font-medium flex items-center gap-3 transition-colors" href="#">
<iconify-icon className="text-lg" icon="twemoji:flag-spain"></iconify-icon>
                Spanish
              </a>
<a className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 text-sm font-medium flex items-center gap-3 transition-colors" href="#">
<iconify-icon className="text-lg" icon="twemoji:flag-italy"></iconify-icon>
                Italian
              </a>
<a className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 text-sm font-medium flex items-center gap-3 transition-colors" href="#">
<iconify-icon className="text-lg" icon="twemoji:flag-france"></iconify-icon>
                French
              </a>
<a className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 text-sm font-medium flex items-center gap-3 transition-colors" href="#">
<iconify-icon className="text-lg" icon="twemoji:flag-united-states"></iconify-icon>
                English
              </a>
<a className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 text-sm font-medium flex items-center gap-3 transition-colors" href="#">
<iconify-icon className="text-lg" icon="twemoji:flag-brazil"></iconify-icon>
                Portuguese
              </a>
</div>
</div>
</div>
</div>
</div>

<header className="bg-white sticky top-0 z-40 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="text-2xl font-semibold tracking-tighter text-black flex items-center gap-2" href="#">
<iconify-icon className="text-red-600 text-3xl" icon="solar:box-minimalistic-linear"></iconify-icon>
          FLYBOX
        </a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 h-full">
<a className="flex items-center gap-1.5 text-red-600 relative after:content-[''] after:absolute after:-bottom-[28px] after:left-0 after:w-full after:h-0.5 after:bg-red-600" data-route="home" href="#home">
            HOME
          </a>
<div className="group flex items-center h-full">
<a className="flex items-center gap-1.5 hover:text-black transition-colors py-8" data-route="shop" href="#shop">
              SHOP
              <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-4 gap-8">
<div>
<h4 className="font-semibold text-gray-900 mb-4 tracking-tight">
                    Fashion
                  </h4>
<ul className="space-y-3">
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Women's Clothing
                      </a>
</li>
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Men's Clothing
                      </a>
</li>
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Accessories &amp; Jewelry
                      </a>
</li>
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Shoes &amp; Sneakers
                      </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 tracking-tight">
                    Lifestyle
                  </h4>
<ul className="space-y-3">
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Home &amp; Decor
                      </a>
</li>
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Technology &amp; Gadgets
                      </a>
</li>
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Sports &amp; Outdoors
                      </a>
</li>
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Beauty &amp; Health
                      </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 tracking-tight">
                    Trending Collections
                  </h4>
<ul className="space-y-3">
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Eco-Friendly &amp; Sustainable
                      </a>
</li>
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Smart Home Devices
                      </a>
</li>
<li>
<a className="text-gray-500 hover:text-red-600 transition-colors" href="#">
                        Vintage &amp; Retro
                      </a>
</li>
</ul>
</div>
<div className="relative rounded-xl overflow-hidden h-48 group/img cursor-pointer shadow-md">
<img alt="New Arrivals" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
<span className="text-white font-semibold tracking-tight text-xl mb-1">
                      New Arrivals
                    </span>
<span className="text-red-400 text-xs font-semibold uppercase tracking-wide flex items-center gap-1">
                      Shop Now
                      <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</div>
<div className="group relative flex items-center h-full">
<a className="flex items-center gap-1.5 hover:text-black transition-colors py-8" data-route="shipping" href="#shipping">
              SHIPPING &amp; COURIER
              <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute left-0 top-full w-72 bg-white shadow-xl border border-gray-100 rounded-b-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
<div className="p-2">
<a className="block p-4 hover:bg-gray-50 rounded-xl transition-colors group/link" href="#">
<div className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
<iconify-icon className="text-red-600 text-lg" icon="solar:info-circle-linear"></iconify-icon>
                    General Info
                  </div>
<div className="text-xs text-gray-500">
                    Overview of international shipping.
                  </div>
</a>
<a className="block p-4 hover:bg-gray-50 rounded-xl transition-colors group/link" href="#">
<div className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
<iconify-icon className="text-red-600 text-lg" icon="solar:calculator-linear"></iconify-icon>
                    Price Calculator
                  </div>
<div className="text-xs text-gray-500">
                    Estimate your export shipping costs.
                  </div>
</a>
<a className="block p-4 hover:bg-gray-50 rounded-xl transition-colors group/link" href="#">
<div className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
<iconify-icon className="text-red-600 text-lg" icon="solar:routing-2-linear"></iconify-icon>
                    Order Tracking
                  </div>
<div className="text-xs text-gray-500">
                    Track your packages in real-time.
                  </div>
</a>
</div>
</div>
</div>
<div className="group relative flex items-center h-full">
<a className="flex items-center gap-1.5 hover:text-black transition-colors py-8" data-route="about" href="#about">
              ABOUT US
              <iconify-icon className="" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute left-0 top-full w-64 bg-white shadow-xl border border-gray-100 rounded-b-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
<div className="py-2">
<a className="block px-6 py-3 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors" href="#">
                  About Us
                </a>
<a className="block px-6 py-3 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors" href="#">
                  Help / FAQ
                </a>
<a className="block px-6 py-3 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors" href="#">
                  B2B / Corporate Services
                </a>
<a className="block px-6 py-3 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors" href="#">
                  Contact / Communication
                </a>
</div>
</div>
</div>
</nav>

<div className="flex items-center gap-5 text-gray-700">
<button className="hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<div className="w-px h-5 bg-gray-200 hidden sm:block"></div>
<a className="hidden sm:flex items-center gap-1.5 text-sm font-medium hover:text-black transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
            Account
          </a>
<button className="relative hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
              2
            </span>
</button>
<button className="relative hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
              0
            </span>
</button>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 home-view">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
<iconify-icon icon="solar:plain-linear"></iconify-icon>
            Logistics Overseas
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-gray-900">
            SHOP IN
            <span className="text-red-600">THE USA</span>
            ,
            <br/>
            RECEIVE IT IN
            <span className="text-red-600">SPAIN</span>
            .
          </h1>
<p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Fast, reliable, and secure shipping from top US retailers directly
            to your door in Spain. Experience seamless cross-border shopping
            with fully transparent pricing.
          </p>
<div className="flex flex-wrap items-center gap-4 mb-10">
<button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-2">
              Start Shopping
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-2">
              Calculate Shipping
            </button>
</div>
<div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                10k+
              </div>
<div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                Packages
              </div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                48h
              </div>
<div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                Delivery
              </div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                100%
              </div>
<div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                Insured
              </div>
</div>
</div>
</div>

<div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 group">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-container-ship-at-sea-5246/1080p.mp4" type="video/mp4"/>
<img alt="Logistics" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</video>
<div className="absolute inset-0 overflow-hidden rounded-3xl">
<style>
              @keyframes slide-fade-1 { 0%, 30% { opacity: 1; } 33.33%, 96.66% { opacity: 0; } 100% { opacity: 1; } }
              @keyframes slide-fade-2 { 0%, 30% { opacity: 0; } 33.33%, 63.33% { opacity: 1; } 66.66%, 100% { opacity: 0; } }
              @keyframes slide-fade-3 { 0%, 63.33% { opacity: 0; } 66.66%, 96.66% { opacity: 1; } 100% { opacity: 0; } }
            </style>
<img alt="Logistics Container Ship" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80" style={{animation: 'slide-fade-1 90s infinite'}}/>
<img alt="Logistics Warehouse" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80" style={{animation: 'slide-fade-2 90s infinite'}}/>
<img alt="Logistics Transport" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80" style={{animation: 'slide-fade-3 90s infinite'}}/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none"></div>
</div>
<div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-12 bg-gray-900 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-xl ring-8 ring-white transform hover:scale-105 transition-transform duration-300 z-10">
<span className="text-2xl sm:text-3xl font-semibold tracking-tight">
              -40%
            </span>
<span className="text-xs font-medium text-red-500 uppercase tracking-wider mt-0.5">
              Sale
            </span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white relative overflow-hidden home-view">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-xs font-semibold text-red-600 tracking-widest uppercase mb-3">
            Premium Benefits
          </p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            WHY CHOOSE FLYBOX
          </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
<div className="bg-red-50 text-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-4xl" icon="solar:shield-check-bold-duotone"></iconify-icon>
</div>
<h3 className="font-semibold text-gray-900 text-lg mb-3 tracking-tight">
              Secure Payment
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              100% secure payment with advanced military-grade encryption.
            </p>
</div>
<div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
<div className="bg-red-50 text-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-4xl" icon="solar:box-bold-duotone"></iconify-icon>
</div>
<h3 className="font-semibold text-gray-900 text-lg mb-3 tracking-tight">
              Free Repacking
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              We consolidate your items to save you money on dimensional weight.
            </p>
</div>
<div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
<div className="bg-red-50 text-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-4xl" icon="solar:routing-2-bold-duotone"></iconify-icon>
</div>
<h3 className="font-semibold text-gray-900 text-lg mb-3 tracking-tight">
              Live Tracking
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Monitor your package globally, every step of the way, in
              real-time.
            </p>
</div>
<div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
<div className="bg-red-50 text-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-4xl" icon="solar:headset-bold-duotone"></iconify-icon>
</div>
<h3 className="font-semibold text-gray-900 text-lg mb-3 tracking-tight">
              24/7 Support
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Our dedicated multilingual team is ready to assist you anytime.
            </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 lg:py-24 home-view">
<div className="text-center mb-16">
<p className="text-xs font-semibold text-red-600 tracking-widest uppercase mb-3">
          How It Works
        </p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          THREE SIMPLE STEPS
        </h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">

<div className="hidden md:block absolute top-1/2 left-[31%] -translate-y-1/2 text-red-600 z-10">
<iconify-icon className="text-4xl opacity-50" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="hidden md:block absolute top-1/2 right-[31%] -translate-y-1/2 text-red-600 z-10">
<iconify-icon className="text-4xl opacity-50" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>

<div className="relative bg-gray-50 rounded-3xl p-8 lg:p-10 overflow-hidden group hover:bg-gray-100 transition-colors">
<span className="absolute -top-4 -right-4 text-9xl font-semibold text-gray-200/50 select-none group-hover:scale-110 transition-transform duration-500">
            01
          </span>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-red-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:shop-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-3">
              Shop Online
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Buy from your favorite US stores (Amazon, eBay, etc.) and use your
              free Flybox address at checkout.
            </p>
</div>
</div>

<div className="relative bg-gray-50 rounded-3xl p-8 lg:p-10 overflow-hidden group hover:bg-gray-100 transition-colors">
<span className="absolute -top-4 -right-4 text-9xl font-semibold text-gray-200/50 select-none group-hover:scale-110 transition-transform duration-500">
            02
          </span>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-red-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-3">
              We Receive
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Your packages arrive at our Miami warehouse. We notify you,
              inspect, and safely store them.
            </p>
</div>
</div>

<div className="relative bg-gray-50 rounded-3xl p-8 lg:p-10 overflow-hidden group hover:bg-gray-100 transition-colors">
<span className="absolute -top-4 -right-4 text-9xl font-semibold text-gray-200/50 select-none group-hover:scale-110 transition-transform duration-500">
            03
          </span>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-red-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-3">
              You Receive
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Request shipment and we fly your items to Spain, handling all
              customs clearance for you.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#0B132B] py-20 lg:py-24 home-view">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
<div>
<p className="text-xs font-semibold text-red-500 tracking-widest uppercase mb-3">
              Our Services
            </p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              WHAT WE OFFER
            </h2>
</div>
<button className="text-white text-sm font-medium hover:text-red-400 transition-colors flex items-center gap-2 group">
            View All Services
            <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Air Freight" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 bg-red-600 p-3 rounded-xl">
<iconify-icon className="text-white text-2xl" icon="solar:plane-linear"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                Air Express Freight
              </h3>
<p className="text-sm text-gray-300 mb-4 line-clamp-2">
                Fastest delivery option for urgent packages and high-value items
                directly to Europe.
              </p>
<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 uppercase tracking-wide">
                Read More
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Ocean Freight" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 bg-red-600 p-3 rounded-xl">
<iconify-icon className="text-white text-2xl" icon="solar:ship-linear"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                Ocean Freight
              </h3>
<p className="text-sm text-gray-300 mb-4 line-clamp-2">
                Cost-effective shipping for bulk orders, large furniture, and
                heavy equipment.
              </p>
<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 uppercase tracking-wide">
                Read More
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Warehouse" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 bg-red-600 p-3 rounded-xl">
<iconify-icon className="text-white text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                Storage &amp; Consolidation
              </h3>
<p className="text-sm text-gray-300 mb-4 line-clamp-2">
                Store purchases for up to 30 days free and combine them into one
                shipment to save.
              </p>
<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 uppercase tracking-wide">
                Read More
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-100 py-10 home-view">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
          Shop from top US retailers
        </p>
<div className="flex flex-wrap justify-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-gray-800 flex items-center gap-1">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
            AMAZON
          </span>
<span className="text-xl font-bold tracking-tighter text-gray-800 flex items-center gap-1">
<iconify-icon icon="solar:monitor-smartphone-linear"></iconify-icon>
            APPLE
          </span>
<span className="text-xl font-bold tracking-tighter text-gray-800 flex items-center gap-1">
<iconify-icon icon="solar:shop-2-linear"></iconify-icon>
            EBAY
          </span>
<span className="text-xl font-bold tracking-tighter text-gray-800 flex items-center gap-1">
<iconify-icon icon="solar:hanger-linear"></iconify-icon>
            ZARA
          </span>
<span className="text-xl font-bold tracking-tighter text-gray-800 flex items-center gap-1">
<iconify-icon icon="solar:t-shirt-linear"></iconify-icon>
            NIKE
          </span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 home-view">
<div className="text-center mb-12">
<p className="text-xs font-semibold text-red-600 tracking-widest uppercase mb-3">
          Popular Categories
        </p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          SHOP BY CATEGORY
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[600px] mb-4">

<div className="relative h-[400px] lg:h-full rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Women Fashion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-3xl font-semibold tracking-tight text-white">
              WOMEN
            </h3>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-rows-2 gap-4 h-[600px] lg:h-full">

<div className="relative rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Men Fashion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-2xl font-semibold tracking-tight text-white">
                MEN
              </h3>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Technology" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-2xl font-semibold tracking-tight text-white">
                TECHNOLOGY
              </h3>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[300px]">

<div className="relative h-[250px] md:h-full rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Home Decor" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-2xl font-semibold tracking-tight text-white">
              HOME DECOR
            </h3>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative h-[250px] md:h-full rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Shoes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-2xl font-semibold tracking-tight text-white">
              SNEAKERS
            </h3>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-20 home-view">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Trending Now
          </h2>
<a className="text-sm font-medium text-gray-600 hover:text-black border-b border-gray-300 hover:border-black transition-colors pb-1" href="#">
            Shop All
          </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
<div className="relative aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
<span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide z-10">
                Sale
              </span>
<img alt="Headphones" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</button>
</div>
<div className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-1">
              Sony
            </div>
<h3 className="font-semibold text-gray-900 mb-2 truncate">
              WH-1000XM4 Wireless Headphones
            </h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="text-xs text-gray-400 ml-1">(124)</span>
</div>
<div className="flex items-center gap-2">
<span className="font-semibold text-red-600">$248.00</span>
<span className="text-xs text-gray-400 line-through">$348.00</span>
</div>
</div>

<div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
<div className="relative aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
<span className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide z-10">
                New
              </span>
<img alt="Watch" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</button>
</div>
<div className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-1">
              Apple
            </div>
<h3 className="font-semibold text-gray-900 mb-2 truncate">
              Apple Watch Series 9
            </h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-gray-400 ml-1">(56)</span>
</div>
<div className="flex items-center gap-2">
<span className="font-semibold text-gray-900">$399.00</span>
</div>
</div>

<div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
<div className="relative aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
<img alt="Watch" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</button>
</div>
<div className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-1">
              Garmin
            </div>
<h3 className="font-semibold text-gray-900 mb-2 truncate">
              Forerunner 245 Music
            </h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="text-xs text-gray-400 ml-1">(89)</span>
</div>
<div className="flex items-center gap-2">
<span className="font-semibold text-gray-900">$299.99</span>
</div>
</div>

<div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
<div className="relative aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
<span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide z-10">
                -20%
              </span>
<img alt="Headphones" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</button>
</div>
<div className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-1">
              Bose
            </div>
<h3 className="font-semibold text-gray-900 mb-2 truncate">
              QuietComfort Earbuds II
            </h3>
<div className="flex items-center gap-1 mb-2 text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
<span className="text-xs text-gray-400 ml-1">(210)</span>
</div>
<div className="flex items-center gap-2">
<span className="font-semibold text-red-600">$239.00</span>
<span className="text-xs text-gray-400 line-through">$299.00</span>
</div>
</div>
</div>
</div>
</section>
<div className="hidden min-h-screen py-20 px-6 max-w-7xl mx-auto" id="shop-view">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-8">
        Shop Stores
      </h1>
<p className="text-gray-600 mb-12 max-w-2xl text-lg">
        Welcome to our dedicated shopping portal. Browse integrated US stores
        below.
      </p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-xl transition-all cursor-pointer group">
<iconify-icon className="text-6xl text-red-600 group-hover:scale-110 transition-transform" icon="solar:cart-large-bold-duotone"></iconify-icon>
<span className="text-2xl font-bold tracking-tight text-gray-900">
            Amazon US
          </span>
</div>
<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-xl transition-all cursor-pointer group">
<iconify-icon className="text-6xl text-red-600 group-hover:scale-110 transition-transform" icon="solar:monitor-smartphone-bold-duotone"></iconify-icon>
<span className="text-2xl font-bold tracking-tight text-gray-900">
            Apple Store
          </span>
</div>
<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-xl transition-all cursor-pointer group">
<iconify-icon className="text-6xl text-red-600 group-hover:scale-110 transition-transform" icon="solar:shop-2-bold-duotone"></iconify-icon>
<span className="text-2xl font-bold tracking-tight text-gray-900">
            eBay US
          </span>
</div>
</div>
</div>
<div className="hidden min-h-screen py-20 px-6 max-w-7xl mx-auto" id="shipping-view">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-8">
        Shipping &amp; Courier
      </h1>
<p className="text-gray-600 mb-12 max-w-2xl text-lg">
        Manage your shipments, calculate costs, and track your active packages
        in real-time.
      </p>
<div className="flex flex-wrap gap-4">
<button className="bg-red-600 hover:bg-red-700 transition-colors text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2" onclick="document.getElementById('calc-modal').classList.remove('hidden'); document.getElementById('calc-modal').classList.add('flex');">
<iconify-icon className="text-xl" icon="solar:calculator-linear"></iconify-icon>
          Calculate Rates
        </button>
<button className="bg-gray-900 hover:bg-black transition-colors text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2" onclick="document.getElementById('track-modal').classList.remove('hidden'); document.getElementById('track-modal').classList.add('flex');">
<iconify-icon className="text-xl" icon="solar:routing-2-linear"></iconify-icon>
          Track Package
        </button>
</div>
</div>
<div className="hidden min-h-screen py-20 px-6 max-w-7xl mx-auto" id="about-view">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-8">
        About Flybox
      </h1>
<p className="text-gray-600 mb-12 max-w-3xl text-lg leading-relaxed">
        Flybox is your premier logistics partner for cross-border e-commerce. We
        bridge the gap between US retailers and European shoppers, providing a
        seamless, secure, and lightning-fast delivery experience.
      </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 max-w-3xl">
<div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
<iconify-icon className="text-4xl text-red-600 mb-4" icon="solar:map-point-bold-duotone"></iconify-icon>
<h3 className="font-bold text-2xl text-gray-900 mb-2">Miami</h3>
<p className="text-gray-500 leading-relaxed">
            7850 NW 46th St
            <br/>
            Miami, FL 33166
            <br/>
            USA
          </p>
</div>
<div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
<iconify-icon className="text-4xl text-red-600 mb-4" icon="solar:map-point-bold-duotone"></iconify-icon>
<h3 className="font-bold text-2xl text-gray-900 mb-2">Madrid</h3>
<p className="text-gray-500 leading-relaxed">
            Calle Gran Vía 28
            <br/>
            28013 Madrid
            <br/>
            Spain
          </p>
</div>
</div>
</div>

<footer className="bg-[#0B132B] pt-20 pb-10 border-t-4 border-red-600">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

<div className="lg:col-span-5">
<a className="text-2xl font-semibold tracking-tighter text-white flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-red-600 text-3xl" icon="solar:box-minimalistic-linear"></iconify-icon>
              FLYBOX
            </a>
<p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-sm">
              Subscribe to our newsletter to receive updates on shipping routes,
              new partner stores, and exclusive discounts.
            </p>
<form className="flex max-w-sm relative">
<input className="w-full bg-[#152042] text-white text-sm px-4 py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-red-600 transition-colors pr-12" placeholder="Your email address" type="email"/>
<button className="absolute right-2 top-2 bottom-2 bg-red-600 text-white w-10 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors" type="submit">
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>

<div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<h4 className="text-white font-semibold mb-6 tracking-tight">
                Our Services
              </h4>
<ul className="space-y-4 text-sm text-gray-400">
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Air Freight
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Ocean Freight
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Package Consolidation
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Customs Clearance
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Return Management
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 tracking-tight">
                Quick Links
              </h4>
<ul className="space-y-4 text-sm text-gray-400">
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Tracking
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Shipping Calculator
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Prohibited Items
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    FAQs
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Contact Us
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 tracking-tight">
                Company
              </h4>
<ul className="space-y-4 text-sm text-gray-400">
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    About Flybox
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Careers
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Partners
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Terms &amp; Conditions
                  </a>
</li>
<li>
<a className="hover:text-red-400 transition-colors" href="#">
                    Privacy Policy
                  </a>
</li>
</ul>
</div>
</div>
</div>

<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">
            © 2024 Flybox Logistics. All rights reserved.
          </p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:card-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 right-4 z-50">
<a className="inline-flex items-center gap-2 bg-black rounded-full px-3 py-2 shadow-xl hover:scale-105 transition-transform duration-200" href="#">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white text-xs font-semibold tracking-wide">
          Made with Emergent
        </span>
</a>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm" id="pay-modal">
<div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl relative transform transition-all border border-gray-100">
<button className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors" onclick="document.getElementById('pay-modal').classList.add('hidden'); document.getElementById('pay-modal').classList.remove('flex');">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="text-center mb-6">
<h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Secure Checkout
          </h3>
<p className="text-sm text-gray-500 mt-1">
            Select your preferred payment method
          </p>
</div>
<div className="space-y-3">
<button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-red-600 hover:bg-red-50 transition-colors group">
<span className="flex items-center gap-3 font-semibold text-gray-900 group-hover:text-red-600">
<iconify-icon className="text-2xl text-red-600" icon="solar:card-bold-duotone"></iconify-icon>
              Credit / Debit Card
            </span>
<iconify-icon className="text-gray-400 group-hover:text-red-600 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-[#003087] hover:bg-blue-50 transition-colors group">
<span className="flex items-center gap-3 font-semibold text-gray-900">
<iconify-icon className="text-2xl" icon="logos:paypal"></iconify-icon>
              PayPal
            </span>
<iconify-icon className="text-gray-400 group-hover:text-blue-600 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors group">
<span className="flex items-center gap-3 font-semibold text-gray-900">
<iconify-icon className="text-3xl" icon="logos:apple-pay"></iconify-icon>
</span>
<iconify-icon className="text-gray-400 group-hover:text-black transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm" id="calc-modal">
<div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl relative transform transition-all border border-gray-100">
<button className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors" onclick="document.getElementById('calc-modal').classList.add('hidden'); document.getElementById('calc-modal').classList.remove('flex');">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="mb-6">
<h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Shipping Calculator
          </h3>
<p className="text-sm text-gray-500 mt-1">
            Estimate your delivery costs to Spain.
          </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('calc-result').classList.remove('hidden');">
<div>
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Weight (kg)
            </label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all" placeholder="e.g. 2.5" required="" step="0.1" type="number"/>
</div>
<div className="grid grid-cols-3 gap-4">
<div>
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                L (cm)
              </label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-red-600 transition-all" placeholder="10" type="number"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                W (cm)
              </label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-red-600 transition-all" placeholder="10" type="number"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                H (cm)
              </label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-red-600 transition-all" placeholder="10" type="number"/>
</div>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors" type="submit">
            Calculate Estimate
          </button>
</form>
<div className="hidden mt-4 p-4 bg-red-50 rounded-xl border border-red-100 text-center" id="calc-result">
<p className="text-sm text-gray-500 mb-1">Estimated Cost</p>
<p className="text-3xl font-bold text-red-600">€24.50</p>
<p className="text-xs text-red-600 font-semibold mt-1 flex items-center justify-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
            Includes customs clearance
          </p>
</div>
</div>
</div>
<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm" id="track-modal">
<div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl relative transform transition-all border border-gray-100">
<button className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors" onclick="document.getElementById('track-modal').classList.add('hidden'); document.getElementById('track-modal').classList.remove('flex');">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="mb-6">
<h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Track Order
          </h3>
<p className="text-sm text-gray-500 mt-1">
            Enter your Flybox tracking number.
          </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('track-result').classList.remove('hidden');">
<div>
<input className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all uppercase" placeholder="FBX-123456789" required="" type="text"/>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors" type="submit">
            Track Package
          </button>
</form>
<div className="hidden mt-6 space-y-4" id="track-result">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="w-0.5 h-8 bg-red-100"></div>
</div>
<div className="pb-4">
<p className="font-semibold text-gray-900 text-sm">
                Arrived at Miami Facility
              </p>
<p className="text-xs text-gray-500">Today, 09:45 AM</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center animate-pulse">
<iconify-icon icon="solar:plane-bold"></iconify-icon>
</div>
<div className="w-0.5 h-8 bg-gray-100"></div>
</div>
<div className="pb-4">
<p className="font-semibold text-red-600 text-sm">
                In Transit to Madrid
              </p>
<p className="text-xs text-gray-500">Estimated Arrival: Tomorrow</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
<iconify-icon icon="solar:home-smile-bold"></iconify-icon>
</div>
</div>
<div>
<p className="font-semibold text-gray-400 text-sm">
                Out for Delivery
              </p>
<p className="text-xs text-gray-500">Pending</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
