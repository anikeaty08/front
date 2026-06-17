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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



      // Initialize Lucide Icons
      lucide.createIcons();

      // SERVICE SCROLL LOGIC
      window.scrollServices = function(direction) {
        const container = document.getElementById('services-scroll');
        if(container) {
          const scrollAmount = 350; // Approx card width
          if(direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }

      // 2. CRS CALCULATOR LOGIC
      const ageInput = document.getElementById('crs-age');
      const ageDisplay = document.getElementById('crs-age-val');
      const eduInput = document.getElementById('crs-edu');
      const inputs = ['crs-age', 'crs-edu', 'crs-read', 'crs-write', 'crs-listen', 'crs-speak'];
      const scoreDisplay = document.getElementById('crs-total');
      const scoreBar = document.getElementById('crs-bar');

      function calculateCRS() {
          if(!ageInput) return;
          const age = parseInt(ageInput.value);
          const eduScore = parseInt(eduInput.value);

          let ageScore = 0;
          if (age >= 18 && age <= 35) ageScore = 110;
          else if (age > 35) ageScore = Math.max(0, 110 - (age - 35) * 5);

          const read = parseInt(document.getElementById('crs-read').value) || 0;
          const write = parseInt(document.getElementById('crs-write').value) || 0;
          const listen = parseInt(document.getElementById('crs-listen').value) || 0;
          const speak = parseInt(document.getElementById('crs-speak').value) || 0;

          const langScore = (read + write + listen + speak) * 4;

          const total = ageScore + eduScore + langScore;

          if(scoreDisplay) scoreDisplay.innerText = total;
          if(scoreBar) {
              const percentage = Math.min((total / 1200) * 100, 100);
              scoreBar.style.width = percentage + '%';
          }
          if(ageDisplay) ageDisplay.innerText = age + ' Years';
      }

      inputs.forEach(id => {
          const el = document.getElementById(id);
          if(el) el.addEventListener('input', calculateCRS);
      });
      calculateCRS();

      // 3. BOOKING LOGIC
      window.updatePrice = function(price, btn) {
          const priceDisplay = document.getElementById('booking-price');
          if(priceDisplay) priceDisplay.innerText = '$' + price.toFixed(2);

          const stdBtn = document.getElementById('type-std');
          const bizBtn = document.getElementById('type-biz');

          if(price === 150) {
              stdBtn.className = "px-4 py-2 rounded-lg bg-white text-neutral-900 text-sm font-medium shadow-sm ring-1 ring-black/5 transition-all";
              bizBtn.className = "px-4 py-2 rounded-lg text-neutral-500 text-sm font-medium hover:text-neutral-900 transition-all";
          } else {
              bizBtn.className = "px-4 py-2 rounded-lg bg-white text-neutral-900 text-sm font-medium shadow-sm ring-1 ring-black/5 transition-all";
              stdBtn.className = "px-4 py-2 rounded-lg text-neutral-500 text-sm font-medium hover:text-neutral-900 transition-all";
          }
      }

      window.handlePayment = function(e) {
          e.preventDefault();
          const btn = e.target.querySelector('button');
          const originalText = btn.innerHTML;

          btn.innerHTML = "Processing...";
          btn.disabled = true;

          setTimeout(() => {
              btn.innerHTML = "Payment Successful";
              btn.classList.add('bg-emerald-500');
          }, 2000);
      }

      // 4. BUDGET FINDER LOGIC
      const slider = document.getElementById('budget-slider');
      const display = document.getElementById('budget-value');
      const results = document.getElementById('results-container');

      const tierData = {
          low: { title: "Starter Tier", items: [{ country: "Paraguay", type: "Cedula", flag: "🇵🇾" }, { country: "Latvia", type: "Business", flag: "🇱🇻" }] },
          mid: { title: "Growth Tier", items: [{ country: "Brazil", type: "Real Estate", flag: "🇧🇷" }, { country: "Panama", type: "Friendly Nations", flag: "🇵🇦" }] },
          high: { title: "Elite Tier", items: [{ country: "USA", type: "E2 Investor", flag: "🇺🇸" }, { country: "Portugal", type: "Golden Visa", flag: "🇵🇹" }] }
      };

      if(slider) {
          slider.addEventListener('input', (e) => {
              const val = parseInt(e.target.value);
              display.innerText = '$' + val.toLocaleString();
              let tier = 'low';
              if(val > 50000) tier = 'mid';
              if(val > 250000) tier = 'high';
              updateResults(tier);
          });
      }

      let currentTier = 'mid';
      function updateResults(tier) {
          if(currentTier === tier) return;
          currentTier = tier;
          const data = tierData[tier];
          let itemsHtml = data.items.map(item => `
              <div class="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-emerald-50 ring-1 ring-neutral-100 transition cursor-pointer group">
                <div class="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">${item.flag}</div>
                <div>
                  <h4 class="font-semibold text-neutral-900 font-jakarta">${item.country}</h4>
                  <p class="text-xs text-neutral-500 font-geist">${item.type}</p>
                </div>
                <i data-lucide="arrow-right" class="ml-auto w-4 h-4 text-neutral-300 group-hover:text-emerald-500 transition-colors"></i>
              </div>
          `).join('');

          results.innerHTML = `
              <div class="bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-neutral-100 shadow-lg animate-enter">
                  <div class="flex items-center gap-3 mb-6">
                      <span class="flex h-3 w-3 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span>
                      <span class="text-xs font-bold text-neutral-400 uppercase tracking-widest">${data.title}</span>
                  </div>
                  <div class="space-y-3">${itemsHtml}</div>
              </div>`;
          lucide.createIcons();
      }

      // 5. AUSTRALIA CALCULATOR LOGIC
      const ausIds = ['aus-age', 'aus-eng', 'aus-edu', 'aus-stem', 'aus-over-exp', 'aus-aus-exp', 'aus-study', 'aus-regional', 'aus-ccl', 'aus-py', 'aus-partner', 'aus-nom'];

      function calculateAus() {
          let score = 0;
          const getVal = (id) => parseInt(document.getElementById(id)?.value || 0);
          const getCheck = (id) => document.getElementById(id)?.checked ? 1 : 0;

          score += getVal('aus-age');
          score += getVal('aus-eng');
          score += getVal('aus-edu');
          score += getVal('aus-partner');
          score += getVal('aus-nom');
          const expScore = Math.min(20, getVal('aus-over-exp') + getVal('aus-aus-exp'));
          score += expScore;

          if(getCheck('aus-stem')) score += 10;
          if(getCheck('aus-study')) score += 5;
          if(getCheck('aus-regional')) score += 5;
          if(getCheck('aus-ccl')) score += 5;
          if(getCheck('aus-py')) score += 5;

          const disp = document.getElementById('aus-score-display');
          const bar = document.getElementById('aus-score-bar');
          if(disp) disp.innerText = score;
          if(bar) {
             const pct = Math.min((score / 130) * 100, 100);
             bar.style.width = pct + '%';
          }
      }

      ausIds.forEach(id => {
          const el = document.getElementById(id);
          if(el) el.addEventListener('change', calculateAus);
      });
      setTimeout(() => calculateAus(), 500);
    


      window.addEventListener('load', () => {
        const loader = document.getElementById('initial-loader');
        const logo = document.getElementById('loader-logo');
        const text = document.getElementById('loader-text');

        // Total animation: ~6 seconds
        setTimeout(() => {
          // 1. Text Appears (T+0.5s)
          if(text) text.classList.add('visible');

          setTimeout(() => {
            // 2. Text Fades Away (T+2.5s)
            if(text) text.classList.remove('visible');
            if(text) text.classList.add('hidden');

            setTimeout(() => {
              // 3. Logo Moves to Top-Left (T+3.5s)
              if(logo) logo.classList.add('dock-logo');

              setTimeout(() => {
                // 4. Loader Fades Out (T+5.0s)
                if(loader) loader.classList.add('fade-out');

                setTimeout(() => {
                  // 5. Cleanup (T+6.0s)
                  if(loader) loader.style.display = 'none';
                }, 1000);
              }, 1500);
            }, 1000);
          }, 2000);
        }, 500);
      });
    


      function toggleMenu() {
          const menu = document.getElementById('nav-dropdown');
          if (menu) {
              const isHidden = menu.classList.contains('opacity-0');
              if (isHidden) {
                  menu.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
                  menu.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
              } else {
                  menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
                  menu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
              }
          }
      }
      document.addEventListener('click', function(event) {
          const menu = document.getElementById('nav-dropdown');
          const button = document.querySelector('button[onclick="toggleMenu()"]');
          if (menu && button && !menu.contains(event.target) && !button.contains(event.target)) {
              menu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
              menu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
          }
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        // Logo Scroll Handler
        const logo = document.getElementById('header-logo-link');
        const handleScroll = () => {
          if (window.scrollY > 50) {
            logo?.classList.add('scroll-hidden');
          } else {
            logo?.classList.remove('scroll-hidden');
          }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Section Reveal Handler
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px' });

        document.querySelectorAll('.section-reveal').forEach(section => {
          observer.observe(section);
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
      
<div className="" id="initial-loader" style={{display: 'none'}}>
<div className="relative flex flex-col items-center justify-center p-4">
<img alt="EAM Logo" className="bg-emerald-600 w-full h-auto object-cover" id="loader-logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8605359e-2b22-404c-853f-8e5d93d2aca1_320w.png" style={{}}/>
<p id="loader-text">Not just consultancy. More than that.</p>
</div>
</div>

<header className="fixed top-6 left-0 right-0 z-50 px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
<div className="flex items-center justify-between pointer-events-auto">

<a className="block hover:opacity-80 transition-opacity" href="#" id="header-logo-link">
<img alt="EAM Logo" className="w-20 h-20 object-contain rounded-lg translate-x-2 scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8605359e-2b22-404c-853f-8e5d93d2aca1_320w.png"/>
</a>

<div className="flex items-center gap-4 relative">
<a className="hidden sm:inline-flex items-center justify-center shadow-emerald-600/20 hover:bg-emerald-700 transition text-sm font-medium text-white font-geist bg-emerald-600 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg" href="#consultation">
            Book Consultancy
          </a>
<div className="relative">
<button className="flex hover:scale-105 transition-transform group z-50 bg-white/95 w-12 h-12 border-white/40 border rounded-full relative shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md items-center justify-center" onclick="toggleMenu()">
<svg className="lucide lucide-menu w-5 h-5 text-neutral-600 group-hover:text-neutral-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<div className="absolute right-0 top-full mt-4 w-64 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-2 transform opacity-0 scale-95 pointer-events-none transition-all duration-200 origin-top-right flex flex-col gap-1" id="nav-dropdown">
<a className="px-4 py-3 text-sm text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition font-medium font-geist flex items-center gap-3" href="#services" onclick="toggleMenu()">
<svg className="lucide lucide-layers" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
                Services
              </a>
<a className="px-4 py-3 text-sm text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition font-medium font-geist flex items-center gap-3" href="#tools" onclick="toggleMenu()">
<svg className="lucide lucide-calculator" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<line x1="8" x2="16" y1="6" y2="6"></line>
<line x1="16" x2="16" y1="14" y2="18"></line>
<path d="M16 10h.01"></path>
<path d="M12 10h.01"></path>
<path d="M8 10h.01"></path>
<path d="M12 14h.01"></path>
<path d="M8 14h.01"></path>
<path d="M12 18h.01"></path>
<path d="M8 18h.01"></path>
</svg>
                Budget Finder
              </a>
<a className="px-4 py-3 text-sm text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition font-medium font-geist flex items-center gap-3" href="#crs-wizard" onclick="toggleMenu()">
<svg className="lucide lucide-wand-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
<path d="m14 7 3 3"></path>
<path d="M5 6v4"></path>
<path d="M19 14v4"></path>
<path d="M10 2v2"></path>
<path d="M7 8H3"></path>
<path d="M21 16h-4"></path>
<path d="M11 3H9"></path>
</svg>
                CRS Wizard
              </a>
<a className="px-4 py-3 text-sm text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition font-medium font-geist flex items-center gap-3" href="#destinations" onclick="toggleMenu()">
<svg className="lucide lucide-globe" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
                Global Reach
              </a>
<a className="px-4 py-3 text-sm text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition font-medium font-geist flex items-center gap-3" href="#expert" onclick="toggleMenu()">
<svg className="lucide lucide-user-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<polyline points="16 11 18 13 22 9"></polyline>
</svg>
                Our Expert
              </a>
<a className="px-4 py-3 text-sm text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition font-medium font-geist flex items-center gap-3 sm:hidden" href="#consultation" onclick="toggleMenu()">
<svg className="lucide lucide-calendar-check-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<path d="M3 10h18"></path>
<path d="m16 20 2 2 4-4"></path>
</svg>
                Book Consultancy
              </a>
</div>
</div>
</div>
</div>
</header>

<main className="section-card relative pt-20 pb-24 mt-32 overflow-hidden">

<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full mix-blend-multiply"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full mix-blend-multiply"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-10 animate-enter ring-1 ring-emerald-500/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-bold tracking-widest text-emerald-800 uppercase font-geist">
            Next-Gen Global Mobility
          </span>
</div>

<h1 className="leading-[0.95] animate-enter delay-100 sm:text-7xl md:text-8xl text-5xl font-medium text-lime-700 tracking-tighter font-jakarta mb-8">Borderless <br className="hidden sm:block"/> <span className="bg-clip-text text-[#11549e] bg-gradient-to-br from-emerald-600 to-teal-500">
            Ambitions.
          </span></h1>

<p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-neutral-500 font-geist leading-relaxed animate-enter delay-200" style={{}}>
          AI-driven residency planning meets expert legal consultancy. Unlock
          your global potential with our precision-engineered pathways.
        </p>

<div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-enter delay-300">
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-white font-medium shadow-2xl shadow-neutral-900/30 hover:bg-neutral-800 transition-all hover:scale-105" href="#crs-wizard">
<span className="font-geist">Start Assessment</span>
<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/80 backdrop-blur-xl px-8 py-4 text-neutral-900 font-medium shadow-lg shadow-black/5 ring-1 ring-white/50 hover:bg-white transition-all hover:scale-105" href="#consultation">
<span className="font-geist">Book Consultation</span>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</a>
</div>

<div className="mt-24 relative mx-auto max-w-5xl animate-enter delay-300 perspective-1000">

<div className="relative z-10 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 p-2 shadow-2xl ring-1 ring-black/5 rotate-x-10 hover:rotate-x-0 transition-transform duration-1000 ease-out transform-style-3d group">
<div className="rounded-xl overflow-hidden bg-neutral-950 aspect-[21/9] relative">
<img alt="Global Network" className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-80" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>

<div className="absolute top-6 left-6 flex gap-3">
<div className="px-3 py-1 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-400 tracking-wider flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  SYSTEM_ONLINE
                </div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4 group-hover:translate-y-0">
<div className="text-3xl font-jakarta font-bold text-white tracking-tight">
                    Global Mobility OS
                  </div>
<div className="text-emerald-400 font-mono text-xs mt-1">
                    v2.4.0 • SECURE CONNECTION
                  </div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end border-t border-white/10 bg-black/20 backdrop-blur-sm">
<div>
<div className="text-5xl font-jakarta font-bold text-white mb-1 tracking-tighter">
                    142
                  </div>
<div className="text-xs text-neutral-400 font-mono uppercase tracking-widest">
                    Active Jurisdictions
                  </div>
</div>
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center text-[10px] text-white font-bold">
                    US
                  </div>
<div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center text-[10px] text-white font-bold">
                    CA
                  </div>
<div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center text-[10px] text-white font-bold">
                    UK
                  </div>
<div className="w-10 h-10 rounded-full bg-emerald-600 border-2 border-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">
                    +
                  </div>
</div>
</div>
</div>
</div>

<div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block z-20 animate-float-slow">
<div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60 w-56">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<div className="text-sm font-bold text-neutral-900 font-jakarta">
                    Visa Approved
                  </div>
<div className="text-[10px] text-neutral-500 font-geist">
                    Canada PR • 2m ago
                  </div>
</div>
</div>
<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full animate-pulse"></div>
</div>
</div>
</div>
<div className="absolute -right-12 top-1/3 hidden lg:block z-20 animate-float-delayed">
<div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60 w-56">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div>
<div className="text-sm font-bold text-neutral-900 font-jakarta">
                    98% Success Rate
                  </div>
<div className="text-[10px] text-neutral-500 font-geist">
                    Performance Analytics
                  </div>
</div>
</div>
<div className="flex gap-1.5 h-8 items-end">
<div className="h-[60%] w-2 bg-blue-500/80 rounded-sm"></div>
<div className="h-[40%] w-2 bg-blue-500/40 rounded-sm"></div>
<div className="h-[80%] w-2 bg-blue-500/60 rounded-sm"></div>
<div className="h-[50%] w-2 bg-blue-500/30 rounded-sm"></div>
<div className="h-[90%] w-2 bg-blue-500 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="services">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 px-2">
<div className="max-w-xl">
<h2 className="text-3xl sm:text-4xl font-medium font-jakarta tracking-tighter text-neutral-900 animate-enter">
              Our Services
            </h2>
<p className="mt-4 text-neutral-500 font-geist animate-enter delay-100">
              Comprehensive migration pathways tailored to your goals. Hover
              over the cards to reveal detailed program options.
            </p>
</div>
<div className="flex gap-3">
<button className="p-3 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-emerald-50 hover:text-emerald-600 transition shadow-sm" onclick="scrollServices('left')">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="p-3 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-emerald-50 hover:text-emerald-600 transition shadow-sm" onclick="scrollServices('right')">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-2 no-scrollbar" id="services-scroll">

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[580px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-3xl">

<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-white border border-neutral-200">
<img alt="North America" className="w-full h-full object-cover brightness-[0.85] transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1546083381-2bed38b42cac?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4">
<span className="text-xs font-bold font-geist uppercase tracking-widest">
                      Residency
                    </span>
</div>
<h3 className="text-3xl font-jakarta font-semibold leading-tight mb-2">
                    North America
                  </h3>
<p className="text-white/80 font-geist text-sm mb-6">
                    Canada, USA &amp; Mexico
                  </p>
<button className="inline-flex items-center text-sm font-medium border-b border-white/50 pb-0.5 hover:text-emerald-300 transition-colors focus:outline-none cursor-pointer bg-transparent" onclick="this.closest('.transform-style-3d').classList.toggle('rotate-y-180')">
                    View Programs
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-neutral-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                      North America
                    </h4>
<p className="text-xs text-neutral-500 font-geist">
                      Investment &amp; Business
                    </p>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-5 font-geist no-scrollbar">
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Canada 🇨🇦
                    </h5>
<ul className="space-y-1 text-sm text-neutral-600">
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        Start-up Visa (SUV)
                      </li>
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        Intra-Company Transfer (ICT)
                      </li>
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        Quebec Investment
                      </li>
</ul>
</div>
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      USA 🇺🇸
                    </h5>
<ul className="space-y-1 text-sm text-neutral-600">
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        EB-5 Green Card
                      </li>
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        E-2 Investor Visa
                      </li>
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        L-1 Intra-Company
                      </li>
</ul>
</div>
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Mexico 🇲🇽
                    </h5>
<ul className="space-y-1 text-sm text-neutral-600">
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        Investment ($280k) or RE ($600k)
                      </li>
</ul>
</div>
</div>
<div className="pt-4 mt-auto">
<a className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition shadow-lg" href="#consultation">
                    Book Consultation
                  </a>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[580px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-3xl">
<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-white border border-neutral-200">
<img alt="Europe" className="w-full h-full object-cover brightness-[0.85] transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53786eed-c5b1-4007-8fec-0c5fee5e90ef_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4">
<span className="text-xs font-bold font-geist uppercase tracking-widest">
                      Residency
                    </span>
</div>
<h3 className="text-3xl font-jakarta font-semibold leading-tight mb-2">
                    Europe &amp; UK
                  </h3>
<p className="text-white/80 font-geist text-sm mb-6">
                    Golden Visas &amp; Sponsorship
                  </p>
<button className="inline-flex items-center text-sm font-medium border-b border-white/50 pb-0.5 hover:text-emerald-300 transition-colors focus:outline-none cursor-pointer bg-transparent" onclick="this.closest('.transform-style-3d').classList.toggle('rotate-y-180')">
                    View Programs
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-neutral-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 21h18M5 18v3m14-3v3M7 21h10M5 8h14M12 3v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                      Europe &amp; UK
                    </h4>
<p className="text-xs text-neutral-500 font-geist">
                      Diverse Pathways
                    </p>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-4 font-geist no-scrollbar">
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">
                      United Kingdom 🇬🇧
                    </h5>
<p className="text-sm text-neutral-600">
                      Self-sponsorship &amp; Expansion Worker.
                    </p>
</div>
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">
                      Southern Europe
                    </h5>
<ul className="text-sm text-neutral-600 space-y-1">
<li>
<span className="font-medium text-emerald-600">
                          Portugal:
                        </span>
                        Golden Visa, D2/D7/D8.
                      </li>
<li>
<span className="font-medium text-emerald-600">Spain:</span>
                        Digital Nomad.
                      </li>
<li>
<span className="font-medium text-emerald-600">
                          Italy/Greece:
                        </span>
                        Golden Visa (RE).
                      </li>
</ul>
</div>
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">
                      Others
                    </h5>
<ul className="text-sm text-neutral-600 space-y-1">
<li>
<span className="font-medium text-emerald-600">
                          Hungary:
                        </span>
                        Guest Investor.
                      </li>
<li>
<span className="font-medium text-emerald-600">
                          Latvia/Serbia:
                        </span>
                        Company/RE.
                      </li>
<li>
<span className="font-medium text-emerald-600">
                          Monaco/Malta:
                        </span>
                        Investment.
                      </li>
</ul>
</div>
</div>
<div className="pt-4 mt-auto">
<a className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition shadow-lg" href="#consultation">
                    Book Consultation
                  </a>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[580px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-3xl">
<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-white border border-neutral-200">
<img alt="LatAm" className="w-full h-full object-cover brightness-[0.85] transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4">
<span className="text-xs font-bold font-geist uppercase tracking-widest">
                      Residency
                    </span>
</div>
<h3 className="text-3xl font-jakarta font-semibold leading-tight mb-2">
                    LatAm &amp; Africa
                  </h3>
<p className="text-white/80 font-geist text-sm mb-6">
                    Emerging Markets
                  </p>
<button className="inline-flex items-center text-sm font-medium border-b border-white/50 pb-0.5 hover:text-emerald-300 transition-colors focus:outline-none cursor-pointer bg-transparent" onclick="this.closest('.transform-style-3d').classList.toggle('rotate-y-180')">
                    View Programs
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-neutral-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                      LatAm &amp; Africa
                    </h4>
<p className="text-xs text-neutral-500 font-geist">
                      Flexible Options
                    </p>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-5 font-geist no-scrollbar">
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Latin America
                    </h5>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex flex-col">
<span className="font-semibold text-emerald-700">
                          Brazil 🇧🇷
                        </span>
                        Business ($30k-$100k) or RE ($200k).
                      </li>
<li className="flex flex-col">
<span className="font-semibold text-emerald-700">
                          Panama 🇵🇦
                        </span>
                        Golden Visa ($100k+), PR in 5 yrs.
                      </li>
<li className="flex flex-col">
<span className="font-semibold text-emerald-700">
                          Paraguay 🇵🇾
                        </span>
                        Company Setup (No min).
                      </li>
</ul>
</div>
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Africa
                    </h5>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex flex-col">
<span className="font-semibold text-emerald-700">
                          Mauritius 🇲🇺
                        </span>
                        RE ($375k), Investor ($50k) or Retirement.
                      </li>
</ul>
</div>
</div>
<div className="pt-4 mt-auto">
<a className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition shadow-lg" href="#consultation">
                    Book Consultation
                  </a>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[580px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-3xl">
<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-white border border-neutral-200">
<img alt="Passport" className="w-full h-full object-cover brightness-[0.85] transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33228445-999a-4243-a37b-de483eb125b2_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600 border border-emerald-500 mb-4 shadow-lg shadow-emerald-900/20">
<span className="text-xs font-bold font-geist uppercase tracking-widest text-white">
                      Citizenship
                    </span>
</div>
<h3 className="text-3xl font-jakarta font-semibold leading-tight mb-2">
                    Second Passport
                  </h3>
<p className="text-white/80 font-geist text-sm mb-6">
                    Visa-free to 140+ Countries
                  </p>
<button className="inline-flex items-center text-sm font-medium border-b border-white/50 pb-0.5 hover:text-emerald-300 transition-colors focus:outline-none cursor-pointer bg-transparent" onclick="this.closest('.transform-style-3d').classList.toggle('rotate-y-180')">
                    View Countries
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-neutral-200 overflow-hidden flex flex-col p-8">
<div className="flex gap-3 border-neutral-100 border-b mb-6 pb-4 items-center">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                      Global Access
                    </h4>
<p className="text-xs text-neutral-500 font-geist">
                      Direct Citizenship
                    </p>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-6 font-geist no-scrollbar">
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Caribbean Programs
                    </h5>
<div className="grid grid-cols-2 gap-2 text-sm text-neutral-600">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        St. Kitts
                      </div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        Dominica
                      </div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        Grenada
                      </div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        St. Lucia
                      </div>
<div className="col-span-2 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        Antigua &amp; Barbuda
                      </div>
</div>
</div>
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Pacific &amp; Others
                    </h5>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex items-center gap-2">
<span className="text-emerald-500">•</span>
                        Vanuatu (Pacific)
                      </li>
</ul>
</div>
</div>
<div className="pt-4 mt-auto">
<a className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition shadow-lg" href="#consultation">
                    Book Consultation
                  </a>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[580px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-3xl">
<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-white border border-neutral-200">
<img alt="Skilled" className="w-full h-full object-cover brightness-[0.85] transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de6294ac-2329-4c27-ba1a-1e4d7f70017d_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4">
<span className="text-xs font-bold font-geist uppercase tracking-widest">
                      Immigration
                    </span>
</div>
<h3 className="text-3xl font-jakarta font-semibold leading-tight mb-2">
                    Skilled Migration
                  </h3>
<p className="text-white/80 font-geist text-sm mb-6">
                    Live &amp; Work Abroad
                  </p>
<button className="inline-flex items-center text-sm font-medium border-b border-white/50 pb-0.5 hover:text-emerald-300 transition-colors focus:outline-none cursor-pointer bg-transparent" onclick="this.closest('.transform-style-3d').classList.toggle('rotate-y-180')">
                    View Eligibility
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-neutral-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                      Skilled Workers
                    </h4>
<p className="text-xs text-neutral-500 font-geist">
                      Points-based Systems
                    </p>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-5 font-geist no-scrollbar">
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Destinations
                    </h5>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        Canada (Express Entry / PNP)
                      </li>
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        Australia (Skilled Migration)
                      </li>
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        New Zealand
                      </li>
</ul>
</div>
<div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
<p className="text-sm text-emerald-800 font-medium mb-2">
                      Check Your Score
                    </p>
<a className="text-xs text-emerald-600 hover:text-emerald-800 underline" href="#crs-wizard">
                      Calculate Express Entry CRS →
                    </a>
</div>
</div>
<div className="pt-4 mt-auto">
<a className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition shadow-lg" href="#consultation">
                    Book Consultation
                  </a>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[580px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-3xl">
<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-white border border-neutral-200">
<img alt="Study" className="w-full h-full object-cover brightness-[0.85] transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7895c29b-3a05-4b01-82ed-0e5d8c08be16_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4">
<span className="text-xs font-bold font-geist uppercase tracking-widest">
                      Visas
                    </span>
</div>
<h3 className="text-3xl font-jakarta font-semibold leading-tight mb-2">
                    Visitor &amp; Study
                  </h3>
<p className="text-white/80 font-geist text-sm mb-6">
                    Global Education &amp; Travel
                  </p>
<button className="inline-flex items-center text-sm font-medium border-b border-white/50 pb-0.5 hover:text-emerald-300 transition-colors focus:outline-none cursor-pointer bg-transparent" onclick="this.closest('.transform-style-3d').classList.toggle('rotate-y-180')">
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-neutral-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
<div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                      Study &amp; Visit
                    </h4>
<p className="text-xs text-neutral-500 font-geist">
                      Admissions &amp; Filing
                    </p>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-5 font-geist no-scrollbar">
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Study Destinations
                    </h5>
<p className="text-sm text-neutral-600 mb-2">
                      University application &amp; visa support for:
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium">
                        Canada
                      </span>
<span className="px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium">
                        USA
                      </span>
<span className="px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium">
                        UK
                      </span>
<span className="px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium">
                        EU
                      </span>
<span className="px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium">
                        Australia
                      </span>
<span className="px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium">
                        Singapore
                      </span>
</div>
</div>
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Visitor Visas
                    </h5>
<p className="text-sm text-neutral-600">
                      Tourist &amp; Business visas for Schengen, UK, USA,
                      Canada, Japan &amp; more.
                    </p>
</div>
</div>
<div className="pt-4 mt-auto">
<a className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition shadow-lg" href="#consultation">
                    Book Consultation
                  </a>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] md:w-[380px] h-[580px] group perspective-1000">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-3xl">
<div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden bg-white border border-neutral-200">
<img alt="Corporate" className="w-full h-full object-cover brightness-[0.85] transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65a8bffe-eeba-4600-bd1e-b114dab3784c_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4">
<span className="text-xs font-bold font-geist uppercase tracking-widest">
                      Corporate
                    </span>
</div>
<h3 className="text-3xl font-jakarta font-semibold leading-tight mb-2">
                    Business Services
                  </h3>
<p className="text-white/80 font-geist text-sm mb-6">
                    Coaching &amp; Legal Support
                  </p>
<button className="inline-flex items-center text-sm font-medium border-b border-white/50 pb-0.5 hover:text-emerald-300 transition-colors focus:outline-none cursor-pointer bg-transparent" onclick="this.closest('.transform-style-3d').classList.toggle('rotate-y-180')">
                    View Services
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-white border border-neutral-200 overflow-hidden flex flex-col p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                      Support Services
                    </h4>
<p className="text-xs text-neutral-500 font-geist">
                      Business &amp; Training
                    </p>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-6 font-geist no-scrollbar">
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Documents Clearing
                    </h5>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        UAE Golden Visa
                      </li>
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        Company Setup &amp; PRO
                      </li>
<li className="flex gap-2">
<span className="text-emerald-500">•</span>
                        Attestation &amp; Legalization
                      </li>
</ul>
</div>
<div>
<h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      Coaching &amp; Language
                    </h5>
<p className="text-sm text-neutral-600">Expert training for:</p>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-bold">
                        IELTS
                      </span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-bold">
                        PTE
                      </span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-bold">
                        OET
                      </span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-bold">
                        TEF
                      </span>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-bold">
                        Duolingo
                      </span>
</div>
</div>
</div>
<div className="pt-4 mt-auto">
<a className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition shadow-lg" href="#consultation">
                    Book Consultation
                  </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="tools">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative overflow-hidden">

<div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-50/80 blur-3xl"></div>
<div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-blue-50/80 blur-3xl"></div>
<div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium ring-1 ring-neutral-200 text-neutral-600 font-geist">
<svg aria-hidden="true" className="lucide lucide-sparkles w-3 h-3 text-emerald-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Smart Tool
              </div>
<h2 className="text-3xl md:text-5xl font-jakarta font-medium tracking-tighter text-neutral-900">
                Budget Finder
              </h2>
<p className="text-neutral-500 font-geist max-w-sm">
                Adjust the slider to reveal programs matching your investment
                capability.
              </p>

<div className="bg-neutral-50 rounded-2xl p-6 ring-1 ring-neutral-200 shadow-sm">
<div className="flex justify-between items-end mb-4">
<label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    Investment Budget
                  </label>
<span className="text-2xl font-semibold text-emerald-600 font-jakarta" id="budget-value">
                    $150,000
                  </span>
</div>

<input className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-emerald-500" id="budget-slider" max="500000" min="0" step="10000" type="range" value="150000"/>
<div className="flex justify-between text-xs font-medium text-neutral-400 mt-2 font-geist">
<span>$0</span>
<span>$250k</span>
<span>$500k+</span>
</div>
</div>
</div>
<div id="results-container">

<div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-neutral-100 shadow-lg animate-enter">
<div className="flex items-center gap-3 mb-6">
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</span>
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    Growth Tier
                  </span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-emerald-50 ring-1 ring-neutral-100 transition cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      🇧🇷
                    </div>
<div>
<h4 className="font-semibold text-neutral-900 font-jakarta">
                        Brazil
                      </h4>
<p className="text-xs text-neutral-500 font-geist">
                        Real Estate Investment
                      </p>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-right ml-auto w-4 h-4 text-neutral-300 group-hover:text-emerald-500 transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-emerald-50 ring-1 ring-neutral-100 transition cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      🇵🇦
                    </div>
<div>
<h4 className="font-semibold text-neutral-900 font-jakarta">
                        Panama
                      </h4>
<p className="text-xs text-neutral-500 font-geist">
                        Qualified Investor
                      </p>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-right ml-auto w-4 h-4 text-neutral-300 group-hover:text-emerald-500 transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="crs-wizard">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-12">
<div>
<h2 className="text-3xl sm:text-4xl font-medium font-jakarta tracking-tighter text-neutral-900 animate-enter">
              Express Entry Wizard
            </h2>
<p className="mt-2 text-neutral-500 font-geist animate-enter delay-100">
              Calculate your Comprehensive Ranking System (CRS) score instantly.
            </p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100 shadow-sm font-geist animate-enter">
<svg aria-hidden="true" className="lucide lucide-refresh-cw w-3 h-3" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
            Updated for 2026
          </span>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 rounded-3xl bg-white p-8 ring-1 ring-neutral-200 shadow-sm">
<div className="mb-10">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 block font-geist">
                Step 01: Human Capital
              </span>
<div className="grid md:grid-cols-2 gap-8">
<div>
<div className="flex justify-between mb-3">
<label className="text-sm font-medium text-neutral-900 font-geist">
                      Candidate Age
                    </label>
<span className="text-sm font-semibold text-emerald-600 font-geist" id="crs-age-val">25 Years</span>
</div>
<input className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-emerald-500" id="crs-age" max="50" min="18" type="range" value="25"/>
</div>
<div className="">
<label className="text-sm font-medium text-neutral-900 mb-3 block font-geist">
                    Education Level
                  </label>
<div className="relative">
<select className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-emerald-500 outline-none font-geist appearance-none" id="crs-edu">
<option value="150">PhD / Doctorate</option>
<option selected="" value="135">Master's Degree</option>
<option value="120">Two or more certs</option>
<option value="112">Bachelor's Degree</option>
<option value="98">Diploma (2 years)</option>
<option value="30">High School</option>
</select>
<svg aria-hidden="true" className="lucide lucide-chevron-down absolute right-3 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>
<div className="">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 block font-geist">
                Step 02: Language Proficiency (CLB)
              </span>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="space-y-2">
<label className="text-[10px] uppercase text-neutral-400 font-bold font-geist">
                    Reading
                  </label>
<input className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 rounded-xl px-4 py-3 text-center font-semibold text-neutral-900 focus:ring-2 focus:ring-emerald-500 outline-none" id="crs-read" max="10" min="0" type="number" value="7"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase text-neutral-400 font-bold font-geist">
                    Writing
                  </label>
<input className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 rounded-xl px-4 py-3 text-center font-semibold text-neutral-900 focus:ring-2 focus:ring-emerald-500 outline-none" id="crs-write" max="10" min="0" type="number" value="7"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase text-neutral-400 font-bold font-geist">
                    Listening
                  </label>
<input className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 rounded-xl px-4 py-3 text-center font-semibold text-neutral-900 focus:ring-2 focus:ring-emerald-500 outline-none" id="crs-listen" max="10" min="0" type="number" value="8"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase text-neutral-400 font-bold font-geist">
                    Speaking
                  </label>
<input className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 rounded-xl px-4 py-3 text-center font-semibold text-neutral-900 focus:ring-2 focus:ring-emerald-500 outline-none" id="crs-speak" max="10" min="0" type="number" value="7"/>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-white p-8 ring-1 ring-emerald-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 ring-1 ring-emerald-100">
<svg aria-hidden="true" className="lucide lucide-sparkles text-emerald-600 w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-semibold font-jakarta mb-1 text-neutral-900">
                Your Score
              </h3>
<p className="text-neutral-500 text-sm font-geist">
                Estimated CRS total.
              </p>
</div>
<div className="relative z-10 py-8">
<div className="flex items-end gap-2 mb-4">
<span className="text-6xl font-bold tracking-tighter font-jakarta text-neutral-900" id="crs-total">361</span>
<span className="text-lg text-neutral-400 mb-2 font-geist">
                  / 1200
                </span>
</div>
<div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(16,185,129,0.4)]" id="crs-bar" style={{width: '30.0833%'}}></div>
</div>
</div>
<button className="relative z-10 w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all font-medium text-sm font-geist flex items-center justify-center gap-2">
<svg aria-hidden="true" className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
              Consult on WhatsApp
            </button>
</div>
</div>
</div>
</section>
<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="aus-calculator">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-12">
<div>
<h2 className="text-3xl sm:text-4xl font-medium font-jakarta tracking-tighter text-neutral-900 animate-enter">
              Australia PR Calculator
            </h2>
<p className="mt-2 text-neutral-500 font-geist animate-enter delay-100">
              Check your eligibility for Subclass 189, 190, and 491 visas.
            </p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100 shadow-sm font-geist animate-enter">
<svg className="lucide lucide-map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
            Updated Points Test
          </span>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">

<div className="rounded-3xl bg-white p-8 ring-1 ring-neutral-200 shadow-sm">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 block font-geist">
                Core Profile
              </span>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="text-sm font-medium text-neutral-900 mb-2 block font-geist">
                    Age Band
                  </label>
<div className="relative">
<select className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-emerald-500 outline-none font-geist appearance-none" id="aus-age">
<option value="0">Under 18 or 45+</option>
<option value="25">18-24 years (25 pts)</option>
<option selected="" value="30">
                        25-32 years (30 pts)
                      </option>
<option value="25">33-39 years (25 pts)</option>
<option value="15">40-44 years (15 pts)</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div>
<label className="text-sm font-medium text-neutral-900 mb-2 block font-geist">
                    English Level
                  </label>
<div className="relative">
<select className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-emerald-500 outline-none font-geist appearance-none" id="aus-eng">
<option value="0">Competent (IELTS 6)</option>
<option value="10">Proficient (IELTS 7) (10 pts)</option>
<option selected="" value="20">
                        Superior (IELTS 8) (20 pts)
                      </option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="md:col-span-2">
<label className="text-sm font-medium text-neutral-900 mb-2 block font-geist">
                    Education Qualification
                  </label>
<div className="relative">
<select className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-emerald-500 outline-none font-geist appearance-none" id="aus-edu">
<option value="20">Doctorate (20 pts)</option>
<option selected="" value="15">
                        Bachelor's or Master's (15 pts)
                      </option>
<option value="10">Diploma or Trade (10 pts)</option>
<option value="0">No recognized qualification</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="flex items-center gap-3 md:col-span-2 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
<input className="w-5 h-5 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500" id="aus-stem" type="checkbox"/>
<label className="text-sm text-neutral-700 font-geist select-none" htmlFor="aus-stem">
                    STEM Qualification (Research/Specialist)
                    <span className="text-emerald-600 font-bold ml-1">+10 pts</span>
</label>
</div>
</div>
</div>

<div className="rounded-3xl bg-white p-8 ring-1 ring-neutral-200 shadow-sm">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 block font-geist">
                Skilled Experience (Last 10 Years)
              </span>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="text-sm font-medium text-neutral-900 mb-2 block font-geist">
                    Overseas Experience
                  </label>
<div className="relative">
<select className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-emerald-500 outline-none font-geist appearance-none" id="aus-over-exp">
<option value="0">Less than 3 years</option>
<option value="5">3-5 years (5 pts)</option>
<option value="10">5-8 years (10 pts)</option>
<option selected="" value="15">8+ years (15 pts)</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div>
<label className="text-sm font-medium text-neutral-900 mb-2 block font-geist">
                    Australian Experience
                  </label>
<div className="relative">
<select className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-emerald-500 outline-none font-geist appearance-none" id="aus-aus-exp">
<option value="0">Less than 1 year</option>
<option value="5">1-3 years (5 pts)</option>
<option value="10">3-5 years (10 pts)</option>
<option value="15">5-8 years (15 pts)</option>
<option value="20">8+ years (20 pts)</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-white p-8 ring-1 ring-neutral-200 shadow-sm">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 block font-geist">
                Bonus Factors
              </span>
<div className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
<input className="w-5 h-5 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500" id="aus-study" type="checkbox"/>
<label className="text-sm text-neutral-700 font-geist select-none" htmlFor="aus-study">
                      Australian Study (2 yrs)
                      <span className="text-emerald-600 font-bold ml-1">+5</span>
</label>
</div>
<div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
<input className="w-5 h-5 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500" id="aus-regional" type="checkbox"/>
<label className="text-sm text-neutral-700 font-geist select-none" htmlFor="aus-regional">
                      Regional Study
                      <span className="text-emerald-600 font-bold ml-1">+5</span>
</label>
</div>
<div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
<input className="w-5 h-5 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500" id="aus-ccl" type="checkbox"/>
<label className="text-sm text-neutral-700 font-geist select-none" htmlFor="aus-ccl">
                      NAATI CCL
                      <span className="text-emerald-600 font-bold ml-1">+5</span>
</label>
</div>
<div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
<input className="w-5 h-5 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500" id="aus-py" type="checkbox"/>
<label className="text-sm text-neutral-700 font-geist select-none" htmlFor="aus-py">
                      Professional Year
                      <span className="text-emerald-600 font-bold ml-1">+5</span>
</label>
</div>
</div>
<div className="pt-4 border-t border-neutral-100"></div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="text-sm font-medium text-neutral-900 mb-2 block font-geist">
                      Partner Skills
                    </label>
<div className="relative">
<select className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-emerald-500 outline-none font-geist appearance-none" id="aus-partner">
<option value="10">
                          Single / Partner is citizen (10 pts)
                        </option>
<option value="10">
                          Partner Skilled + Competent English (10 pts)
                        </option>
<option value="5">
                          Partner Competent English Only (5 pts)
                        </option>
<option value="0">Partner not qualified</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div>
<label className="text-sm font-medium text-neutral-900 mb-2 block font-geist">
                      Nomination / Sponsorship
                    </label>
<div className="relative">
<select className="w-full bg-neutral-50 border-0 ring-1 ring-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-emerald-500 outline-none font-geist appearance-none" id="aus-nom">
<option value="0">None (189 Visa)</option>
<option value="5">
                          State Nomination (190) (5 pts)
                        </option>
<option value="15">
                          Regional Nomination (491) (15 pts)
                        </option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 rounded-3xl bg-neutral-900 text-white p-8 shadow-2xl overflow-hidden relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[60px] pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-md">
<svg className="lucide lucide-calculator w-6 h-6 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<line x="8" y="1" y2="6"></line>
<line x1="16" x2="16" y1="14" y2="18"></line>
<path d="M16 10h.01"></path>
<path d="M12 10h.01"></path>
<path d="M8 10h.01"></path>
<path d="M12 14h.01"></path>
<path d="M8 14h.01"></path>
<path d="M12 18h.01"></path>
<path d="M8 18h.01"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold font-jakarta mb-1">
                  Australia Points
                </h3>
<p className="text-neutral-400 text-sm font-geist mb-8">
                  Minimum 65 points required for EOI.
                </p>
<div className="flex items-end gap-2 mb-4">
<span className="text-7xl font-bold tracking-tighter font-jakarta text-white" id="aus-score-display">90</span>
<span className="text-lg text-neutral-500 mb-3 font-geist">
                    / 130
                  </span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-8">
<div className="h-full bg-emerald-500 rounded-full transition-all duration-700 shadow-[0_0_15px_rgba(16,185,129,0.5)]" id="aus-score-bar" style={{width: '69.2308%'}}></div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm font-geist">
<span className="text-neutral-400">Visa 189</span>
<span className="text-emerald-400 font-medium">
                      Eligible &gt; 65
                    </span>
</div>
<div className="flex justify-between items-center text-sm font-geist">
<span className="text-neutral-400">Visa 190</span>
<span className="text-emerald-400 font-medium">
                      State Nominated
                    </span>
</div>
</div>
<a className="mt-8 w-full py-3.5 rounded-xl bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition shadow-lg flex items-center justify-center gap-2 font-geist" href="#consultation">
                  Assess Profile
                  <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="destinations">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-jakarta font-medium text-neutral-900 tracking-tight">
            Global Reach
          </h2>
<p className="mt-2 text-neutral-500 font-geist">
            Explore our active jurisdictions with premium support.
          </p>
</div>

<div className="relative max-w-2xl mx-auto">

<div className="relative w-full aspect-square md:w-[450px] md:h-[450px] mx-auto rounded-full bg-emerald-50 overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.05),0_20px_50px_rgba(16,185,129,0.1)] ring-1 ring-black/5">

<div className="globe-track h-full items-center">
<div className="w-1/2 h-full relative shrink-0 flex items-center justify-center p-12">
<svg className="w-full h-auto fill-emerald-100/50 stroke-emerald-200 stroke-[1.5]" viewbox="0 0 1000 500">
<path className="" d="M150,120 Q180,90 220,130 T300,200 T180,350 Z"></path>
<path className="" d="M450,100 Q500,80 550,120 T600,250 T480,280 Z"></path>
<path d="M700,100 Q800,80 850,150 T800,300 T680,280 Z"></path>
<circle cx="900" cy="400" r="30"></circle>
<circle cx="100" cy="400" r="20"></circle>
</svg>
<div className="absolute top-[30%] left-[20%] group">
<div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping-slow absolute"></div>
<div className="w-3 h-3 bg-emerald-600 rounded-full relative shadow-lg shadow-emerald-500/50 border-2 border-white"></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white text-neutral-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg ring-1 ring-black/5 font-geist">
                    Canada
                    <span className="text-emerald-500 font-normal ml-1">PR</span>
</div>
</div>

</div>

<div className="w-1/2 h-full relative shrink-0 flex items-center justify-center p-12">
<svg className="w-full h-auto fill-emerald-100/50 stroke-emerald-200 stroke-[1.5]" viewbox="0 0 1000 500">
<path className="" d="M150,120 Q180,90 220,130 T300,200 T180,350 Z"></path>
<path className="" d="M450,100 Q500,80 550,120 T600,250 T480,280 Z"></path>
<path d="M700,100 Q800,80 850,150 T800,300 T680,280 Z"></path>
<circle cx="900" cy="400" r="30"></circle>
<circle cx="100" cy="400" r="20"></circle>
</svg>
</div>
</div>

<div className="absolute inset-0 rounded-full shadow-[inset_10px_10px_40px_rgba(0,0,0,0.05)] pointer-events-none"></div>
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-900/5 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="section-card py-24 px-6 lg:px-8 section-reveal" id="expert">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute -left-10 -bottom-10 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-80"></div>
<div className="relative rounded-[2.5rem] overflow-hidden bg-neutral-100 shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700 ring-1 ring-black/5 aspect-[3/4]">
<img alt="Alaa - Senior Immigration Expert" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c72cd09a-5504-4712-bca6-869d8fefa05e_1600w.png" style={{}}/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
<p className="text-white font-jakarta text-xl font-bold">
                  Alaa Marzouk
                </p>
<p className="text-emerald-400 font-geist text-sm">
                  Senior Immigration Consultant
                </p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 space-y-8">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-6">
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-xs font-semibold tracking-wide text-neutral-600 uppercase font-geist">
                  Trusted Authority
                </span>
</div>
<h2 className="text-4xl md:text-5xl font-jakarta font-medium text-neutral-900 tracking-tight leading-tight">
                Expert Immigration Guidance
                <br/>
<span className="text-emerald-600">You Can Trust.</span>
</h2>
</div>
<p className="text-lg text-neutral-600 font-geist leading-relaxed">
              With over 16 years of specialized experience in global migration
              law, Alaa has successfully guided hundreds of families and
              investors toward their second citizenship. His strategic approach
              ensures that every application is not just filed, but engineered
              for approval.
            </p>
<div className="grid sm:grid-cols-2 gap-6 pt-4">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-briefcase w-5 h-5 text-emerald-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<div className="">
<h4 className="font-jakarta font-bold text-neutral-900">
                    16+ Years
                  </h4>
<p className="text-sm text-neutral-500 font-geist">
                    Proven Industry Experience
                  </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-graduation-cap w-5 h-5 text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                    Cairo University
                  </h4>
<p className="text-sm text-neutral-500 font-geist">
                    Economics &amp; Political Sci. (2009)
                  </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-languages w-5 h-5 text-purple-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m5 8 5 5 5-5"></path>
<path d="M12 4V2"></path>
<path d="M7 2h10"></path>
<path d="M2 12h20"></path>
<path d="M22 22a10 10 0 0 0-20 0"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                    Multilingual
                  </h4>
<p className="text-sm text-neutral-500 font-geist">
                    Arabic, English, Portuguese, Spanish
                  </p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-trophy w-5 h-5 text-amber-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>
</div>
<div>
<h4 className="font-jakarta font-bold text-neutral-900">
                    Global Success
                  </h4>
<p className="text-sm text-neutral-500 font-geist">
                    High Approval Rate Track Record
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-card pt-24 pb-24 px-6 lg:px-8 section-reveal" id="consultation">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 shadow-xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12">

<div className="relative overflow-hidden rounded-2xl bg-neutral-50 ring-1 ring-neutral-200">
<div className="p-6">
<h3 className="text-neutral-900 text-lg font-medium mb-4 font-jakarta">
                  October 2024
                </h3>
<div className="grid grid-cols-7 gap-2 text-center text-sm mb-4 text-neutral-400 font-geist">
<span>Mon</span>
<span className="">Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span className="">Sun</span>
<span></span>
<span></span>
<span>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span>
<span>6</span>
<span className="">7</span>
<span className="bg-emerald-600 text-white rounded-full h-8 w-8 flex items-center justify-center mx-auto shadow-md">
                    8
                  </span>
<span>9</span>
<span>10</span>
<span>11</span>
<span className="">12</span>
</div>
<div className="space-y-3">
<p className="text-sm text-neutral-900 font-medium">
                    Available Slots
                  </p>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-600 hover:border-emerald-500 hover:text-emerald-600 transition shadow-sm">
                      09:00 AM
                    </button>
<button className="px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs transition font-medium">
                      11:30 AM
                    </button>
<button className="px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-neutral-600 hover:border-emerald-500 hover:text-emerald-600 transition shadow-sm">
                      02:00 PM
                    </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
<svg aria-hidden="true" className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs font-bold font-geist uppercase tracking-wider">
                  Book a Consultation
                </span>
</div>
<h3 className="text-3xl md:text-4xl font-jakarta font-medium tracking-tighter text-neutral-900 mb-4">
                Expert Guidance.
              </h3>
<p className="text-neutral-500 font-geist mb-8">
                Secure your dedicated time slot with our senior immigration
                attorneys. Total Due:
                <span className="font-semibold text-neutral-900" id="booking-price">
                  $150.00
                </span>
</p>
<div className="bg-neutral-100 p-1 rounded-xl flex mb-6 w-fit ring-1 ring-neutral-200">
<button className="px-4 py-2 rounded-lg bg-white text-neutral-900 text-sm font-medium shadow-sm ring-1 ring-black/5 transition-all" id="type-std" onclick="updatePrice(150, this)">
                  Standard
                </button>
<button className="px-4 py-2 rounded-lg text-neutral-500 text-sm font-medium hover:text-neutral-900 transition-all" id="type-biz" onclick="updatePrice(280, this)">
                  Business
                </button>
</div>
<form className="space-y-4 max-w-sm" id="payment-form" onsubmit="handlePayment(event)">
<input className="w-full rounded-xl bg-neutral-50 border-0 ring-1 ring-neutral-200 py-3 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow" placeholder="Card number" required="" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full rounded-xl bg-neutral-50 border-0 ring-1 ring-neutral-200 py-3 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow" placeholder="MM / YY" required="" type="text"/>
<input className="w-full rounded-xl bg-neutral-50 border-0 ring-1 ring-neutral-200 py-3 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow" placeholder="CVC" required="" type="text"/>
</div>
<button className="w-full py-3.5 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition font-geist shadow-lg shadow-emerald-600/20" type="submit">
                  Confirm &amp; Pay
                </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-[95%] xl:max-w-7xl mx-auto my-8 rounded-[2.5rem] bg-white text-neutral-600 py-16 shadow-2xl overflow-hidden px-6 lg:px-8 section-reveal">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 translate-x-16 translate-y-2 scale-125">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-4 translate-y-3 gap-x-12 gap-y-12">
<div className="lg:col-span-1 translate-x-16">
<div className="flex gap-2 mb-6 gap-x-2 gap-y-2 items-center">
<span className="text-neutral-900 font-semibold tracking-tight">
                EAM Immigration
              </span>
</div>
<p className="text-sm text-neutral-500 font-geist max-w-xs">
              Redefining borders with intelligent migration strategies for the
              modern investor.
            </p>
</div>
<div className="">
<ul className="mt-4 space-y-3">
<li className=""></li>
</ul>
</div>
<div className="translate-x-16">
<h3 className="text-sm font-medium text-neutral-900 font-geist translate-x-16">
              Connect
            </h3>
<div className="grid grid-cols-4 gap-3 -translate-x-16 mt-4 translate-x-16 gap-x-3 gap-y-3">
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-emerald-600 hover:text-white transition-all text-neutral-500" href="https://www.instagram.com/" target="_blank">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#0077b5] hover:text-white transition-all text-neutral-500" href="https://www.linkedin.com/company/eam-global" target="_blank">
<iconify-icon className="" icon="mdi:linkedin" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-black hover:text-white transition-all text-neutral-500" href="https://x.com/global_eam33128" target="_blank">
<iconify-icon className="" height="17" icon="simple-icons:x" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#FEAA2D] hover:text-white transition-all text-neutral-500" href="https://www.deezer.com/en/" target="_blank">
<iconify-icon className="" icon="simple-icons:deezer" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#1DB954] hover:text-white transition-all text-neutral-500" href="https://open.spotify.com/user/31vxmdsjogcmi4p34mrifznpmhvi" target="_blank">
<iconify-icon className="" icon="mdi:spotify" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#00f2ea] hover:text-white transition-all text-neutral-500" href="https://www.tiktok.com/@eam_official?lang=en" target="_blank">
<iconify-icon icon="ic:baseline-tiktok" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-black hover:text-white transition-all text-neutral-500" href="https://www.threads.net/@eam_global" target="_blank">
<iconify-icon className="" icon="simple-icons:threads" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#E60023] hover:text-white transition-all text-neutral-500" href="https://www.pinterest.com/eamglobal/" target="_blank">
<iconify-icon icon="mdi:pinterest" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-sm text-neutral-500 font-geist translate-x-16">
            © 2024 EAM Immigration. All rights reserved.
          </p>
</div>
</div>
</footer>






    </>
  );
}
