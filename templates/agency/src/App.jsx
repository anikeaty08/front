import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          window.initRoiCharts = function() {
            if(typeof Chart === 'undefined') {
              setTimeout(window.initRoiCharts, 100);
              return;
            }

            if(window.roiChartsInitialized) return;
            window.roiChartsInitialized = true;

            Chart.defaults.font.family = 'Geist, Inter, sans-serif';
            Chart.defaults.color = '#a1a1aa';
            Chart.defaults.font.size = 10;

            const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

            const getLineOptions = (prefix = '', suffix = '') => ({
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                  callbacks: {
                    label: function(context) {
                      return context.dataset.label ? context.dataset.label + ': ' + prefix + context.parsed.y + suffix : prefix + context.parsed.y + suffix;
                    }
                  }
                }
              },
              scales: {
                y: {
                  display: true,
                  beginAtZero: true,
                  grid: { color: 'rgba(0,0,0,0.05)' },
                  border: { display: false },
                  ticks: { callback: function(value) { return prefix + value + suffix; }, maxTicksLimit: 5 }
                },
                x: {
                  display: true,
                  grid: { color: 'rgba(0,0,0,0.05)' },
                  border: { display: false }
                }
              },
              elements: {
                point: { radius: 3, hitRadius: 10, hoverRadius: 6, backgroundColor: '#fff', borderWidth: 2 },
                line: { tension: 0.4 }
              }
            });

            const getBarOptions = (prefix = '', suffix = '') => ({
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                  callbacks: {
                    label: function(context) {
                      return prefix + context.parsed.y + suffix;
                    }
                  }
                }
              },
              scales: {
                y: {
                  display: true,
                  beginAtZero: true,
                  grid: { color: 'rgba(0,0,0,0.05)' },
                  border: { display: false },
                  ticks: { callback: function(value) { return prefix + value + suffix; }, maxTicksLimit: 5 }
                },
                x: {
                  display: true,
                  grid: { display: false },
                  border: { display: false }
                }
              }
            });

            const getCtx = id => document.getElementById(id) ? document.getElementById(id).getContext('2d') : null;

            const ctx1 = getCtx('chart-cs-1');
            if(ctx1) {
              let grad1 = ctx1.createLinearGradient(0, 0, 0, 200);
              grad1.addColorStop(0, 'rgba(168, 85, 247, 0.4)');
              grad1.addColorStop(1, 'rgba(168, 85, 247, 0.0)');
              new Chart(ctx1, {
                type: 'line',
                data: { labels, datasets: [{ data: [1.8, 4.5, 2.5, 7.2, 5.8, 12], borderColor: '#a855f7', backgroundColor: grad1, fill: true, borderWidth: 2 }] },
                options: getLineOptions('$', 'k')
              });
            }

            const ctx2 = getCtx('chart-cs-2');
            if(ctx2) {
              let grad2 = ctx2.createLinearGradient(0, 0, 0, 200);
              grad2.addColorStop(0, 'rgba(132, 204, 22, 0.4)');
              grad2.addColorStop(1, 'rgba(132, 204, 22, 0.0)');
              new Chart(ctx2, {
                type: 'line',
                data: { labels, datasets: [{ data: [15, 32, 22, 48, 35, 55], borderColor: '#84cc16', backgroundColor: grad2, fill: true, borderWidth: 2 }] },
                options: getLineOptions('', '%')
              });
            }

            const ctx3 = getCtx('chart-cs-3');
            if(ctx3) {
              let grad3 = ctx3.createLinearGradient(0, 0, 0, 200);
              grad3.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
              grad3.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
              let gradRed = ctx3.createLinearGradient(0, 0, 0, 200);
              gradRed.addColorStop(0, 'rgba(239, 68, 68, 0.4)');
              gradRed.addColorStop(1, 'rgba(239, 68, 68, 0.0)');

              new Chart(ctx3, {
                type: 'line',
                data: { labels, datasets: [
                  { label: 'AI', data: [92, 92.5, 93.5, 94.2, 94.8, 95], borderColor: '#3b82f6', backgroundColor: grad3, fill: true, borderWidth: 2 },
                  { label: 'Before AI', data: [65, 60, 54, 47, 42, 35], borderColor: '#ef4444', backgroundColor: gradRed, fill: true, borderWidth: 2, borderDash: [4, 4] }
                ] },
                options: getLineOptions('', '%')
              });
            }

            const ctx4 = getCtx('chart-sales-1');
            if(ctx4) {
              let grad4 = ctx4.createLinearGradient(0, 0, 0, 200);
              grad4.addColorStop(0, 'rgba(249, 115, 22, 0.8)');
              grad4.addColorStop(1, 'rgba(249, 115, 22, 0.2)');
              new Chart(ctx4, {
                type: 'bar',
                data: { labels, datasets: [{ data: [52, 88, 65, 110, 95, 142], backgroundColor: grad4, borderRadius: 4 }] },
                options: getBarOptions('', ' leads')
              });
            }

            const ctx5 = getCtx('chart-sales-2');
            if(ctx5) {
              let grad5 = ctx5.createLinearGradient(0, 0, 0, 200);
              grad5.addColorStop(0, 'rgba(236, 72, 153, 0.4)');
              grad5.addColorStop(1, 'rgba(236, 72, 153, 0.0)');
              new Chart(ctx5, {
                type: 'line',
                data: { labels, datasets: [{ data: [8, 18, 12, 28, 22, 38], borderColor: '#ec4899', backgroundColor: grad5, fill: true, borderWidth: 2 }] },
                options: getLineOptions('', '%')
              });
            }
          };

          window.currentRoiSlide = window.currentRoiSlide || 0;
          window.updateRoiCarousel = function() {
            var roiTrack = document.getElementById('roi-carousel-track');
            if(roiTrack) roiTrack.style.transform = 'translateX(-' + (window.currentRoiSlide * 100) + '%)';

            var tab0 = document.getElementById('roi-tab-0');
            var tab1 = document.getElementById('roi-tab-1');
            var activeClass = 'px-4 md:px-6 py-2 rounded-full bg-zinc-900 text-white font-light text-xs md:text-sm transition-all tracking-tight shadow-[0_8px_16px_rgba(0,0,0,0.2)] scale-105';
            var inactiveClass = 'px-4 md:px-6 py-2 rounded-full bg-white border border-zinc-200/60 text-zinc-600 font-light text-xs md:text-sm transition-all hover:bg-zinc-50 tracking-tight scale-100';

            if(tab0) tab0.className = window.currentRoiSlide === 0 ? activeClass : inactiveClass;
            if(tab1) tab1.className = window.currentRoiSlide === 1 ? activeClass : inactiveClass;
          };

          window.goToRoiSlide = function(n) {
            window.currentRoiSlide = n;
            window.updateRoiCarousel();
          };

          // Customer Support Carousel Logic
          window.currentCsSlide = window.currentCsSlide || 0;
          window.totalCsSlides = 3;

          window.updateCsDots = function(index) {
            window.currentCsSlide = index;
            for(var i=0; i<window.totalCsSlides; i++) {
              var dot = document.getElementById('cs-indicator-' + i);
              if(dot) {
                dot.className = i === window.currentCsSlide
                  ? 'w-2 h-2 rounded-full bg-zinc-900 transition-colors duration-300'
                  : 'w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300';
              }
            }
          };

          window.initCsTrack = function() {
            var csTrack = document.getElementById('cs-carousel-track');
            if(csTrack) {
              csTrack.addEventListener('scroll', function() {
                var index = Math.round(csTrack.scrollLeft / csTrack.clientWidth);
                window.updateCsDots(index);
              });
            }
          };
          setTimeout(window.initCsTrack, 100);

          window.goToCsSlide = function(n) {
            var csTrack = document.getElementById('cs-carousel-track');
            if(csTrack) csTrack.scrollTo({left: n * csTrack.clientWidth, behavior: 'smooth'});
          };
          window.nextCsSlide = function() { window.goToCsSlide((window.currentCsSlide + 1) % window.totalCsSlides); };
          window.prevCsSlide = function() { window.goToCsSlide((window.currentCsSlide - 1 + window.totalCsSlides) % window.totalCsSlides); };

          // Sales AI Carousel Logic
          window.currentSalesSlide = window.currentSalesSlide || 0;
          window.totalSalesSlides = 2;

          window.updateSalesDots = function(index) {
            window.currentSalesSlide = index;
            for(var i=0; i<window.totalSalesSlides; i++) {
              var dot = document.getElementById('sales-indicator-' + i);
              if(dot) {
                dot.className = i === window.currentSalesSlide
                  ? 'w-2 h-2 rounded-full bg-zinc-900 transition-colors duration-300'
                  : 'w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300';
              }
            }
          };

          window.initSalesTrack = function() {
            var salesTrack = document.getElementById('sales-carousel-track');
            if(salesTrack) {
              salesTrack.addEventListener('scroll', function() {
                var index = Math.round(salesTrack.scrollLeft / salesTrack.clientWidth);
                window.updateSalesDots(index);
              });
            }
          };
          setTimeout(window.initSalesTrack, 100);

          window.goToSalesSlide = function(n) {
            var salesTrack = document.getElementById('sales-carousel-track');
            if(salesTrack) salesTrack.scrollTo({left: n * salesTrack.clientWidth, behavior: 'smooth'});
          };
          window.nextSalesSlide = function() { window.goToSalesSlide((window.currentSalesSlide + 1) % window.totalSalesSlides); };
          window.prevSalesSlide = function() { window.goToSalesSlide((window.currentSalesSlide - 1 + window.totalSalesSlides) % window.totalSalesSlides); };

          // Init initially
          setTimeout(window.initRoiCharts, 200);
        


      const observerOptions = {
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-blur').forEach(el => observer.observe(el));
    


      (function() {
        function initSwipe(containerId, onSwipeLeft, onSwipeRight) {
          const container = document.getElementById(containerId);
          if (!container) return;

          let touchStartX = 0;
          let touchStartY = 0;

          container.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
          }, {passive: true});

          container.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].screenX;
            const touchEndY = e.changedTouches[0].screenY;

            const diffX = touchStartX - touchEndX;
            const diffY = touchStartY - touchEndY;

            // Ensure it's a horizontal swipe, not vertical scrolling
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
              if (diffX > 0) {
                onSwipeLeft();
              } else {
                onSwipeRight();
              }
            }
          }, {passive: true});
        }

        // Wait for elements and functions to load fully
        setTimeout(() => {
          if (typeof nextWid === 'function' && typeof prevWid === 'function') {
            initSwipe('wid-visual-container', nextWid, prevWid);
          }
          if (typeof nextRoiSlide === 'function' && typeof prevRoiSlide === 'function') {
            initSwipe('roi-carousel', nextRoiSlide, prevRoiSlide);
          }
        }, 500);
      })();
    


        (function(d, t) {
        var g = document.createElement(t);
        var s = d.getElementsByTagName(t)[0];
        g.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
        g.defer = true; g.async = true;
        s.parentNode.insertBefore(g, s);

        g.onload = function() {
          var PUBLIC_KEY   = "740483af-dea3-42c6-b61c-78e45a0bab6c";
          var ASSISTANT_ID = "c5d9866a-ac54-4b32-ae54-5ad97c004a9f";

          var vapi = window.vapiSDK.run({
            apiKey: PUBLIC_KEY,
            assistant: ASSISTANT_ID,
            config: { hideButton: true }
          });

          // Remove Vapi's injected button
          function removeVapiBtn() {
            var btn = document.getElementById('vapi-support-btn');
            if (btn) btn.remove();
          }
          setTimeout(removeVapiBtn, 500);
          setTimeout(removeVapiBtn, 1500);
          setTimeout(removeVapiBtn, 3000);

          var mic = document.getElementById("vapi-mic");
          var callActive = false;

          mic.addEventListener("click", function() {
            if (!callActive) {
              vapi.start(ASSISTANT_ID);
              callActive = true;
            } else {
              vapi.stop();
              callActive = false;
            }
          });

          vapi.on("call-end", function() { callActive = false; });
          vapi.on("error", function(e) { console.error("Vapi error:", e); callActive = false; });
        };
      })(document, "script");
    


      function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'en',autoDisplay:false},'google_translate_element');} function toggleSpanish(){var select=document.querySelector('.goog-te-combo');if(select){select.value=select.value==='es'?'en':'es';select.dispatchEvent(new Event('change'));var btn=document.getElementById('lang-toggle-btn');if(btn) btn.innerText=select.value==='es'?'EN':'ES';}}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#F2F2F5]">
<div className="absolute inset-0 bg-grid-light mask-image-gradient opacity-60"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="sun-beam sun-beam-wide" style={{-Angle: '25deg', -BeamColor: 'rgba(249, 115, 22, 0.05)', left: '10%', animationDelay: '0s'}}></div>
<div className="sun-beam" style={{-Angle: '15deg', -BeamColor: 'rgba(249, 115, 22, 0.1)', left: '20%', animationDelay: '1s'}}></div>
<div className="sun-beam" style={{-Angle: '-10deg', -BeamColor: 'rgba(161, 161, 170, 0.1)', left: '80%', animationDelay: '3s'}}></div>
<div className="sun-beam sun-beam-wide" style={{-Angle: '-20deg', -BeamColor: 'rgba(161, 161, 170, 0.05)', left: '70%', animationDelay: '2s'}}></div>
<div className="sun-beam" style={{-Angle: '35deg', -BeamColor: 'rgba(251, 146, 60, 0.08)', left: '40%', animationDelay: '5s'}}></div>
<div className="sun-beam" style={{-Angle: '-25deg', -BeamColor: 'rgba(212, 212, 216, 0.1)', left: '60%', animationDelay: '2s'}}></div>
<div className="sun-beam" style={{-Angle: '5deg', -BeamColor: 'rgba(0, 0, 0, 0.02)', left: '10%', animationDelay: '4s'}}></div>
</div>
</div>

<nav className="fixed z-50 flex pr-4 pl-4 top-6 right-0 left-0 justify-center">
<div className="bubble-3d rounded-full px-2 py-2 flex items-center justify-between gap-1 md:gap-8 max-w-4xl w-full">

<a className="flex items-center gap-2 text-lg font-semibold text-zinc-900 tracking-tight pr-2 pl-4 notranslate" href="#" translate="no">
<span className="logo-dot-anim w-2.5 h-2.5 rounded-full bg-orange-500"></span>
          agence
        </a>

<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-all font-medium" href="#how-it-works">
            How it works
          </a>
<a className="px-4 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-all font-medium" href="#features">
            Capabilities
          </a>
<a className="px-4 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-all font-medium" href="#plans">
            Plans
          </a>
</div>

<div className="flex items-center gap-2">
<button className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-600 dark:text-zinc-300 flex items-center justify-center" onclick="document.documentElement.classList.toggle('dark')">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
</svg>
</button>
<button className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-600 dark:text-zinc-300 font-bold text-sm w-9 h-9 flex items-center justify-center" id="lang-toggle-btn" onclick="toggleSpanish()">
            ES
          </button>
<a className="travel-light bubble-3d transition-all shadow-orange-500/10 hover:text-orange-600 text-sm font-semibold text-zinc-900 rounded-full pt-2 pr-6 pb-2 pl-6 relative shadow-md" href="#plans">
            Get Started
          </a>
</div>
</div>
</nav>

<header className="overflow-hidden min-h-screen flex flex-col md:pt-32 md:pb-10 reveal-blur active z-10 pt-24 pr-6 pb-10 pl-6 relative justify-center">
<div className="fade-in-up text-center max-w-5xl mr-auto ml-auto relative" style={{animationDelay: '0.1s'}}>

<div className="flex z-20 mt-16 mb-16 relative perspective-midrange justify-center">
<style>
            @keyframes neonFloat {
              0%, 100% {
                transform: translateY(0px) scale(1);
              }
              50% {
                transform: translateY(-10px) scale(1.02);
              }
            }

            .active-mic .electric-ripple {
              animation: electric-pulse 1.5s infinite cubic-bezier(0.4, 0, 0.2, 1) !important;
            }

            .active-mic .neon-mic-btn {
              animation: water-beat 2s infinite ease-in-out !important;
              box-shadow: 0 0 0 1px rgba(249, 115, 22, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.8), 0 15px 30px rgba(249, 115, 22, 0.15) !important;
              border-color: rgba(249, 115, 22, 0.3) !important;
              transform: scale(1.05) !important;
            }

            .active-mic .mic-icon {
              transform: scale(1.1) !important;
              color: rgb(249 115 22) !important;
            }

            .active-mic .glass-orb {
              --tw-ring-color: rgb(249 115 22 / 0.2) !important;
            }
          </style>
<div className="neon-mic-container w-24 h-24 md:w-32 md:h-32 rounded-full cursor-pointer group relative flex items-center justify-center transition-all duration-700" id="vapi-mic" onclick="this.classList.toggle('active-mic')" style={{animation: 'neonFloat 7s ease-in-out infinite'}}>

<div className="absolute inset-[-20px] rounded-full bg-gradient-to-tr via-transparent to-orange-500/10 blur-2xl opacity-40 animate-pulse pointer-events-none from-amber-400/10"></div>

<div className="glass-orb absolute inset-0 rounded-full bg-gradient-to-b from-white/40 via-white/10 to-transparent backdrop-blur-[4px] border border-white/60 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.5)] ring-1 ring-white/50 group-hover:ring-orange-500/20 transition-all duration-500"></div>

<div className="absolute inset-2 rounded-full border border-zinc-900/5 border-dashed opacity-40 animate-[spin_12s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-zinc-500/10 border-dotted opacity-40 animate-[spin_18s_linear_infinite_reverse]"></div>

<div className="absolute inset-0 rounded-full border border-white/30 shadow-[inset_-8px_-8px_20px_rgba(255,255,255,0.1),inset_8px_8px_20px_rgba(255,255,255,0.6),0_20px_30px_-10px_rgba(0,0,0,0.15)] backdrop-blur-[2px]" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 20%, transparent 60%)'}}></div>

<div className="electric-ripple border-orange-500/20"></div>
<div className="electric-ripple border-orange-500/10" style={{animationDelay: '0.5s'}}></div>
<div className="electric-ripple border-orange-500/10" style={{animationDelay: '1.0s'}}></div>

<button className="neon-mic-btn z-10 md:w-20 md:h-20 flex group-hover:shadow-[0_0_0_1px_rgba(249,115,22,0.1),inset_0_0_20px_rgba(255,255,255,0.8),0_15px_30px_rgba(249,115,22,0.15)] group-hover:scale-105 transition-all duration-500 overflow-hidden bg-white w-16 h-16 border-white border rounded-full relative shadow-[0_5px_15px_rgba(0,0,0,0.05),inset_0_0_10px_rgba(255,255,255,1)] backdrop-blur-xl items-center justify-center">

<div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-80 pointer-events-none rounded-t-full"></div>
<svg className="mic-icon md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-500 text-zinc-400 w-[32px] h-[32px] z-20 relative" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
</button>
</div>
</div>

<div className="inline-flex gap-2 text-[9px] md:text-[10px] font-semibold text-zinc-600 bg-white/60 border-zinc-200 border rounded-full mb-6 pt-1 pr-2.5 pb-1 pl-2.5 shadow-sm backdrop-blur-md gap-x-2 gap-y-2 items-center hover:bg-white/80 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]"></span>
</span>
          24/7 AI Intake &amp; Customer Support
        </div>

<h1 className="md:text-5xl leading-[1.1] text-3xl font-semibold text-zinc-900 tracking-tight mb-5 drop-shadow-sm">
          Never miss a lead again
        </h1>
<p className="md:text-xl text-lg text-zinc-500 max-w-2xl mr-auto mb-10 ml-auto">
          Automate calls, texts, and bookings 24/7.
        </p>


<div className="flex flex-col sm:flex-row gap-3 mb-10 gap-x-4 gap-y-3 items-center justify-center">
<a className="travel-light bubble-3d sm:w-auto md:text-sm transition-all group flex items-center justify-center gap-2 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] hover:text-orange-600 text-xs font-semibold text-zinc-900 w-full rounded-full pt-3 pr-6 pb-3 pl-6 relative" href="#plans">
            Get Started
          </a>
<a className="sm:w-auto hover:text-zinc-900 md:text-sm transition-all flex items-center justify-center gap-2 hover:bg-white/50 hover:shadow-sm text-xs font-medium text-zinc-600 w-full rounded-full pt-3 pr-6 pb-3 pl-6" href="#how-it-works">
            See What It Does
          </a>
</div>
<div className="flex gap-6 uppercase text-[9px] md:text-[10px] font-semibold text-zinc-400 tracking-wide gap-x-6 gap-y-6 items-center justify-center">
<span className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-default">
<svg className="text-orange-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
            2 week Setup
          </span>
<span className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-default">
<svg className="text-orange-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
            30 Day Satisfaction Guarantee
          </span>
<span className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-default">
<svg className="text-orange-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
            CRM Integration
          </span>
</div>
</div>

</header>

<section className="z-10 flex flex-col reveal-blur sm:pt-4 sm:pr-6 sm:pl-6 active pt-8 pr-4 pb-6 pl-4" id="how-it-works">

<style className="">
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        @keyframes float {

          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes pulse-ring-org {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }

          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pop-check {
          0% {
            transform: scale(0);
            opacity: 0;
          }

          50% {
            transform: scale(1.2);
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes chat-bounce {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes scan-line {
          0% {
            top: -10%;
          }

          100% {
            top: 110%;
          }
        }

        @keyframes data-flow-emerald {
          0% {
            transform: translateX(-10px);
            opacity: 0;
          }

          50% {
            opacity: 1;
          }

          100% {
            transform: translateX(20px);
            opacity: 0;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }

          75%,
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(10px);
          }

          100% {
            transform: translateX(0);
          }
        }

        @keyframes bar-grow-1 {
          0% {
            width: 0%;
          }

          100% {
            width: 100%;
          }
        }

        @keyframes bar-grow-2 {
          0% {
            width: 0%;
          }

          100% {
            width: 45%;
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      </style>

<div className="hidden border-orange-500/50 ring-orange-500/20 bg-orange-50/50 border-blue-500/50 ring-blue-500/20 bg-blue-50/50 border-purple-500/50 ring-purple-500/20 bg-purple-50/50 border-emerald-500/50 ring-emerald-500/20 bg-emerald-50/50 border-indigo-500/50 ring-indigo-500/20 bg-indigo-50/50 border-pink-500/50 ring-pink-500/20 bg-pink-50/50 border-teal-500/50 ring-teal-500/20 bg-teal-50/50 border-rose-500/50 ring-rose-500/20 bg-rose-50/50"></div>
<div className="w-full max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-16 px-2 mt-8 md:mt-12">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-3 sm:mb-4 [text-shadow:none]">
            What It Does
          </h2>
<p className="leading-relaxed text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto [text-shadow:none]">
            Agence handles customer conversations, books appointments, and
            follows up automatically.
          </p>
</div>

<div className="w-full px-1 md:px-4">
<div className="flex flex-col group/inner max-w-4xl mr-auto ml-auto relative items-center">
<button className="absolute -left-10 md:-left-14 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/80 border border-zinc-200 shadow-sm text-zinc-500 hover:text-zinc-900 hidden md:block z-20 transition-transform hover:scale-105" onclick="const t=document.getElementById('unified-carousel-track'); const cw = t.clientWidth || 1; t.scrollTo({left: cw * Math.max(0, Math.round(t.scrollLeft/cw)-1), behavior: 'smooth'})">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="bubble-3d rounded-2xl md:rounded-3xl border border-white/60 relative bg-white/70 backdrop-blur-xl flex flex-col shadow-xl md:shadow-2xl h-[480px] md:h-[480px] w-full max-w-3xl mx-auto overflow-hidden glass-bubble-panel" id="unified-carousel-container">
<div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full flex-1" id="unified-carousel-track" onscroll="const cw = this.clientWidth || 1; const idx = Math.round(this.scrollLeft / cw); [0,1,2,3,4,5,6,7].forEach(i =&gt; { const d = document.getElementById('unified-dot-'+i); if(d) d.className = (i===idx) ? 'w-2 h-2 rounded-full bg-zinc-900 transition-colors duration-300' : 'w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300'; })" style={{scrollBehavior: 'smooth'}}>

<div className="min-w-full snap-center flex flex-col h-full">
<div className="flex-1 flex sm:p-6 overflow-hidden bg-gradient-to-br from-orange-50/80 to-white/20 border-orange-100/50 border-b pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-orange-400/30 to-rose-400/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-tr from-orange-300/30 to-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
<svg className="absolute bottom-8 right-8 w-24 h-24 text-orange-300/40 animate-[spin_30s_linear_infinite]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"></path>
<circle cx="12" cy="12" r="10" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<circle cx="12" cy="12" r="6" stroke-dasharray="2 2" strokeWidth="0.5"></circle>
</svg>
<div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-orange-400/50 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
</div>
<div className="relative z-10 w-full flex justify-center items-center scale-[0.65] sm:scale-[0.80] md:scale-[0.90] origin-center [perspective:1000px]">
<div className="relative w-full max-w-[95%] sm:max-w-sm text-[11px] sm:text-[13px] font-medium flex flex-col gap-3 transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(0deg)_rotateX(0deg)] [transform:rotateY(-12deg)_rotateX(8deg)]">
<div className="self-start bg-white/95 backdrop-blur-md border border-white/80 text-zinc-700 px-4 py-3 rounded-2xl rounded-tl-sm shadow-[0_10px_25px_-5px_rgba(249,115,22,0.15),inset_0_1px_1px_rgba(255,255,255,1)] max-w-[95%] sm:max-w-[85%] flex items-start gap-2 transition-transform duration-700 group-hover:[transform:translateZ(30px)] [transform:translateZ(10px)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
<svg className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0 relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span className="leading-relaxed relative z-10">
                            Hi, I need a roofing estimate for a 2,000 sq ft
                            house.
                          </span>
</div>
<div className="self-end bg-gradient-to-br from-orange-400 to-orange-500 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-[0_15px_35px_-5px_rgba(249,115,22,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] max-w-[95%] sm:max-w-[85%] transition-transform duration-700 group-hover:[transform:translateZ(50px)] [transform:translateZ(20px)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent pointer-events-none"></div>
<span className="leading-relaxed relative z-10">
                            Hello! We can absolutely help with that. Are you
                            available for a quick call now to go over the
                            details?
                          </span>
</div>
<div className="self-center mt-2 flex items-center gap-2 bg-white/90 backdrop-blur-xl border border-white/80 px-3.5 py-2 rounded-full text-[9px] sm:text-[10px] text-zinc-600 shadow-[0_15px_30px_-5px_rgba(249,115,22,0.15),inset_0_1px_2px_rgba(255,255,255,1)] font-semibold transition-transform duration-700 group-hover:[transform:translateZ(70px)] [transform:translateZ(30px)]">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]"></span>
</span>
                          Responded in &lt; 1 min
                        </div>
</div>
</div>
</div>
<div className="p-5 sm-20 border-t border-white/50 shrink-0 min-h-[140px] justify-center">
<div className="flex items-center gap-2 mb-2 sm:mb-2">
<div className="p-1.5 bg-orange-100 text-orange-600 rounded-lg shadow-sm border border-orange-200">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div className="text-[9px] sm:text-[10px] font-bold text-orange-600 tracking-widest uppercase [text-shadow:none]">
                        Instant Lead Response
                      </div>
</div>
<h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-1 sm:mb-2 leading-tight tracking-tight [text-shadow:none]">
                      Engage leads in seconds
                    </h3>
<p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed [text-shadow:none]">
                      AI calls and texts leads within 60 seconds of submission,
                      24/7.
                    </p>
</div>
</div>

<div className="min-w-full snap-center flex flex-col h-full">
<div className="flex-1 bg-gradient-to-br from-blue-50/80 to-white/20 relative flex items-center justify-center border-b border-blue-100/50 p-4 sm:p-6 overflow-hidden">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-5 -left-5 w-48 h-48 bg-gradient-to-br from-blue-400/30 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-tr from-cyan-300/30 to-blue-300/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s'}}></div>
<svg className="absolute bottom-8 left-8 w-24 h-24 text-blue-300/40 animate-[spin_20s_linear_infinite]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<circle cx="12" cy="12" r="6" stroke-dasharray="2 2" strokeWidth="0.5"></circle>
<rect height="8" strokeWidth="0.5" transform="rotate(45 12 12)" width="8" x="8" y="8"></rect>
</svg>
<div className="absolute top-10 right-1/4 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
</div>
<div className="relative z-10 w-full flex justify-center items-center scale-[0.70] sm:scale-80 md:scale-95 origin-center [perspective:1000px]">
<div className="relative w-full max-w-sm text-[10px] sm:text-[12px] md:text-[13px] font-medium flex flex-col gap-2.5 transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(0deg)_rotateX(0deg)] [transform:rotateY(8deg)_rotateX(4deg)]">
<div className="self-end bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-[0_15px_35px_-5px_rgba(59,130,246,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] max-w-[85%] transition-transform duration-700 group-hover:[transform:translateZ(50px)] [transform:translateZ(20px)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none"></div>
<span className="leading-relaxed relative z-10">
                            Would tomorrow at 10:00 AM or 2:00 PM work better
                            for an initial consultation?
                          </span>
</div>
<div className="self-start bg-white/95 backdrop-blur-md border border-white/80 text-zinc-700 px-4 py-3 rounded-2xl rounded-tl-sm shadow-[0_10px_25px_-5px_rgba(59,130,246,0.15),inset_0_1px_1px_rgba(255,255,255,1)] max-w-[85%] transition-transform duration-700 group-hover:[transform:translateZ(30px)] [transform:translateZ(10px)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
<span className="leading-relaxed relative z-10">
                            10 AM works perfect for me.
                          </span>
</div>
<div className="self-center bg-white/95 backdrop-blur-xl border border-white/80 rounded-xl p-3 shadow-[0_20px_40px_-5px_rgba(59,130,246,0.2),inset_0_1px_2px_rgba(255,255,255,1)] w-full max-w-[220px] mt-1 flex flex-col gap-2 relative overflow-hidden group/card transition-transform duration-700 group-hover:[transform:translateZ(70px)] [transform:translateZ(35px)]">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="absolute right-2 top-2 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
<svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="flex items-center gap-2 text-blue-600 font-semibold text-[10px] sm:text-xs">
<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                            Appointment Scheduled
                          </div>
<div className="bg-zinc-50 rounded-lg p-2 text-[10px] sm:text-[11px] text-zinc-600 border border-zinc-100">
<div className="font-semibold text-zinc-900 mb-0.5">
                              Initial Consultation
                            </div>
<div className="flex items-center gap-1.5">
<svg className="w-3 h-3 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                              Tomorrow, 10:00 AM
                            </div>
</div>
</div>
</div>
</div>
</div>
<div className="p-5 sm:p-6 pb-6 flex flex-col bg-white/60 backdrop-blur-sm relative z-20 border-t border-white/50 shrink-0 min-h-[140px] justify-center">
<div className="flex items-center gap-2 mb-2 sm:mb-2">
<div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg shadow-sm border border-blue-200">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<div className="text-[9px] sm:text-[10px] font-bold text-blue-600 tracking-widest uppercase [text-shadow:none]">
                        Appointment Booking
                      </div>
</div>
<h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-1 sm:mb-2 leading-tight tracking-tight [text-shadow:none]">
                      Seamless Calendar Booking
                    </h3>
<p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed [text-shadow:none]">
                      Schedules and confirms appointments directly in your CRM
                      without double-booking.
                    </p>
</div>
</div>

<div className="min-w-full snap-center flex flex-col h-full">
<div className="flex-1 flex sm:p-6 overflow-hidden bg-gradient-to-br from-indigo-50/80 to-white/20 border-indigo-100/50 border-b pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/30 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 left-10 w-32 h-32 bg-gradient-to-tr from-violet-400/30 to-indigo-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
<div className="relative z-10 w-full flex justify-center items-center scale-[0.70] sm:scale-80 md:scale-95 origin-center [perspective:1000px]">
<div className="relative w-full max-w-[95%] sm:max-w-sm text-[9px] sm:text-[11px] md:text-[12px] font-medium flex flex-col gap-1.5 sm:gap-2 transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(0deg)_rotateX(0deg)] [transform:rotateY(-6deg)_rotateX(6deg)]">
<div className="self-start bg-white/95 backdrop-blur-md border border-white/80 text-zinc-700 px-3 py-2 sm:px-3 sm:py-2.5 rounded-2xl rounded-tl-sm shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] max-w-[90%] flex items-start gap-1.5 transition-transform duration-700 group-hover:[transform:translateZ(20px)] [transform:translateZ(5px)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
<span className="leading-snug relative z-10">
                            Hi, I'd like to get a quote for a roof replacement.
                          </span>
</div>
<div className="self-end bg-gradient-to-br from-indigo-500 to-indigo-600 text-white px-3 py-2 sm:px-3 sm:py-2.5 rounded-2xl rounded-tr-sm shadow-[0_15px_30px_-5px_rgba(99,102,241,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] max-w-[90%] leading-snug transition-transform duration-700 group-hover:[transform:translateZ(40px)] [transform:translateZ(15px)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent pointer-events-none"></div>
<span className="leading-snug relative z-10">
                            Hi there! We can definitely help with that. Do you
                            happen to know the approximate square footage?
                          </span>
</div>
<div className="self-center my-0.5 flex items-center gap-1.5 bg-white/90 backdrop-blur-xl border border-white/80 px-2.5 py-1 rounded-full text-[8px] sm:text-[9px] text-zinc-600 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,1)] font-semibold transition-transform duration-700 group-hover:[transform:translateZ(60px)] [transform:translateZ(25px)]">
<svg className="w-2.5 h-2.5 text-indigo-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                          Lead idle for 5 mins
                        </div>
<div className="self-end bg-gradient-to-br from-indigo-500 to-indigo-600 text-white px-3 py-2 sm:px-3 sm:py-2.5 rounded-2xl rounded-tr-sm shadow-[0_15px_30px_-5px_rgba(99,102,241,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] max-w-[90%] leading-snug transition-transform duration-700 group-hover:[transform:translateZ(80px)] [transform:translateZ(35px)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent pointer-events-none"></div>
<span className="leading-snug relative z-10">
                            Just following up! If you're not sure about the
                            size, we can also send someone for a free
                            inspection. Does tomorrow afternoon work?
                          </span>
</div>
</div>
</div>
</div>
<div className="p-5 sm:p-6 pb-6 flex flex-col bg-white/60 backdrop-blur-sm relative z-20 border-t border-white/50 shrink-0 min-h-[140px] justify-center">
<div className="flex items-center gap-2 mb-2 sm:mb-2">
<div className="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg shadow-sm border border-indigo-200">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
<line x1="6" x2="6" y1="9" y2="21"></line>
</svg>
</div>
<div className="text-[9px] sm:text-[10px] font-bold text-indigo-600 tracking-widest uppercase [text-shadow:none]">
                        Follow-Up Automation
                      </div>
</div>
<h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-1 sm:mb-2 leading-tight tracking-tight [text-shadow:none]">
                      Intelligent Branching Logic
                    </h3>
<p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed [text-shadow:none]">
                      Follows up on no-shows, confirms appointments, and adjusts
                      to replies.
                    </p>
</div>
</div>

<div className="min-w-full snap-center flex flex-col h-full">
<div className="flex-1 bg-gradient-to-br from-pink-50/80 to-white/20 relative flex items-center justify-center border-b border-pink-100/50 p-4 sm:p-6 overflow-hidden">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-pink-400/30 to-rose-400/20 rounded-bl-full blur-3xl"></div>
<div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tr from-fuchsia-400/30 to-pink-300/20 rounded-tr-full blur-2xl animate-pulse"></div>
<svg className="absolute top-1/2 left-1/4 w-32 h-32 text-pink-300/30 animate-[spin_15s_linear_infinite]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 22h20L12 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"></path>
<circle cx="12" cy="15" r="3" strokeWidth="0.5"></circle>
</svg>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full max-w-md relative z-10 scale-[0.60] sm:scale-90 md:scale-100 origin-center [perspective:1000px] transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(0deg)_rotateX(0deg)] [transform:rotateY(10deg)_rotateX(5deg)]">
<div className="bg-white/95 backdrop-blur-md rounded-xl shadow-[0_20px_40px_rgba(236,72,153,0.15),inset_0_1px_1px_rgba(255,255,255,1)] border border-white/80 p-3 sm:p-4 w-[160px] sm:w-[180px] transition-transform duration-700 group-hover:[transform:translateZ(40px)] [transform:translateZ(20px)]">
<div className="flex items-center gap-1.5 mb-3">
<svg className="w-3.5 h-3.5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="18" x="3" y="11"></rect>
<circle cx="12" cy="5" r="2"></circle>
<path d="M12 7v4"></path>
</svg>
<span className="text-[10px] sm:text-[11px] font-bold text-zinc-700">
                            Contact Us
                          </span>
</div>
<div className="space-y-2 mb-3">
<div className="h-6 sm:h-8 bg-zinc-50 border border-zinc-200 rounded flex items-center px-2">
<span className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">
                              Alex M.
                            </span>
</div>
<div className="h-6 sm:h-8 bg-zinc-50 border border-zinc-200 rounded flex items-center px-2">
<span className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">
                              alex@mail.com
                            </span>
</div>
</div>
<div className="h-6 sm:h-8 bg-pink-500 rounded text-white text-[10px] sm:text-xs font-semibold flex items-center justify-center shadow-md shadow-pink-500/20 cursor-pointer overflow-hidden relative group/btn">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                          Submit Form
                        </div>
</div>
<div className="text-pink-400 flex flex-col items-center rotate-90 sm:rotate-0 my-0 sm:my-0 transition-transform duration-700 group-hover:[transform:translateZ(50px)] [transform:translateZ(30px)]">
<span className="text-[8px] font-bold uppercase tracking-wider text-pink-500 mb-1 hidden sm:block opacity-70">
                          Instant
                        </span>
<svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
<div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl rounded-tl-sm sm:rounded-tl-xl sm:rounded-bl-sm shadow-[0_20px_40px_rgba(236,72,153,0.25),inset_0_2px_4px_rgba(255,255,255,0.4)] p-3 sm:p-4 w-[160px] sm:w-[180px] text-white text-[10px] sm:text-[11px] font-medium leading-relaxed relative transition-transform duration-700 group-hover:[transform:translateZ(60px)] [transform:translateZ(40px)]">
<div className="absolute -left-1 -top-1 w-2 h-2 bg-white rounded-full animate-ping opacity-50"></div>
                        "Hi Alex! We just received your inquiry. A specialist
                        will review your details shortly. Is there anything
                        specific you'd like to ask now?"
                      </div>
</div>
</div>
<div className="p-5 sm:p-6 pb-6 flex flex-col bg-white/60 backdrop-blur-sm relative z-20 border-t border-white/50 shrink-0 min-h-[140px] justify-center">
<div className="flex items-center gap-2 mb-2 sm:mb-2">
<div className="p-1.5 bg-pink-100 text-pink-600 rounded-lg shadow-sm border border-pink-200">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<line x1="9" x2="9" y1="21" y2="9"></line>
</svg>
</div>
<div className="text-[9px] sm:text-[10px] font-bold text-pink-600 tracking-widest uppercase [text-shadow:none]">
                        Web Forms Integration
                      </div>
</div>
<h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-1 sm:mb-2 leading-tight tracking-tight [text-shadow:none]">
                      Native Form Capture
                    </h3>
<p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed [text-shadow:none]">
                      Captures and engages leads instantly from your existing
                      web forms.
                    </p>
</div>
</div>

<div className="min-w-full snap-center flex flex-col h-full">
<div className="flex-1 bg-gradient-to-br from-purple-50/80 to-white/20 relative flex items-center justify-center border-b border-purple-100/50 p-4 sm:p-6 overflow-hidden [perspective:1000px]">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-fuchsia-400/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 left-10 w-32 h-32 bg-gradient-to-tr from-violet-400/30 to-purple-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-purple-300/20 animate-[spin_30s_linear_infinite]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<circle cx="12" cy="12" r="12" stroke-dasharray="2 2" strokeWidth="0.5"></circle>
</svg>
</div>
<div className="relative z-10 w-full flex justify-center items-center scale-[0.85] sm:scale-100 origin-center">
<div className="w-full max-w-[220px] sm:max-w-[240px] bg-white/95 backdrop-blur-xl rounded-xl border border-white/80 shadow-[0_25px_50px_-10px_rgba(168,85,247,0.25),inset_0_1px_2px_rgba(255,255,255,1)] p-4 sm:p-5 relative transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.05)] [transform:rotateY(-12deg)_rotateX(8deg)_scale(1)] group">
<div className="flex items-center justify-between mb-3 border-b border-zinc-100 pb-2 transition-transform duration-700 group-hover:[transform:translateZ(15px)]">
<div className="flex items-center gap-2">
<div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-[10px] sm:text-xs">
                              JD
                            </div>
<div>
<div className="text-[11px] sm:text-xs font-bold text-zinc-900 leading-tight">
                                John Doe
                              </div>
<div className="text-[9px] sm:text-[10px] text-zinc-500">
                                Active Lead
                              </div>
</div>
</div>
<span className="bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">
                            Synced
                          </span>
</div>
<div className="space-y-2">
<div className="bg-zinc-50/80 border border-white shadow-[0_5px_15px_rgba(168,85,247,0.05)] rounded-lg p-2 sm:p-2.5 text-[9px] sm:text-[10px] transition-transform duration-700 group-hover:[transform:translateZ(30px)] [transform:translateZ(10px)]">
<div className="text-purple-600 font-semibold mb-1 flex items-center gap-1.5">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                              Context Memory
                            </div>
<div className="text-zinc-600 leading-relaxed relative pl-2 border-l-2 border-purple-200">
                              Mentioned they are moving next month. Budget is
                              around $5k.
                            </div>
</div>
<div className="bg-zinc-50/80 border border-white shadow-[0_5px_15px_rgba(59,130,246,0.05)] rounded-lg p-2 sm:p-2.5 text-[9px] sm:text-[10px] transition-transform duration-700 group-hover:[transform:translateZ(50px)] [transform:translateZ(20px)]">
<div className="text-blue-600 font-semibold mb-1 flex items-center gap-1.5">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                              CRM Updated
                            </div>
<div className="text-zinc-600 flex items-center gapblue-700 px-1.5 py-0.5 rounded font-medium">
                              Qualified
                            </div>
</div>
</div>
</div>
</div>
</div>
<div className="p-5 sm:p-6 pb-6 flex flex-col bg-white/60 backdrop-blur-sm relative z-20 border-t border-white/50 shrink-0 min-h-[140px] justify-center">
<div className="flex items-center gap-2 mb-2 sm:mb-2">
<div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg shadow-sm border border-purple-svg" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</div>
<div className="text-[9px] sm:text-[10px] font-bold text-purple-600 tracking-widest uppercase [text-shadow:none]">
                        Intelligent Context
                      </div>
</div>
<h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-1 sm:mb-2 leading-tight tracking-tight [text-shadow:none]">
                      Conversation Memory &amp; CRM
                    </h3>
<p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed [text-shadow:none]">
                      Remembers past details seamlessly and updates your CRM
                      records in real time.
                    </p>
</div>
</div>

<div className="min-w-full snap-center flex flex-col h-full">
<div className="flex-1 bg-gradient-to-br from-emerald-50/80 to-white/20 relative flex items-center justify-center border-b border-emerald-100/50 p-4 sm:p-6 overflow-hidden [perspective:1000px]">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-bl from-emerald-400/30 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tr from-green-400/30 to-emerald-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
<div className="flex items-center gap-3 sm:gap-4 relative z-10 scale-[0.85] sm:scale-100 origin-center [transform-style:preserve-3d] group hover:[transform:rotateY(0deg)_rotateX(0deg)] [transform:rotateY(10deg)_rotateX(5deg)] transition-transform duration-700">
<div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_30px_rgba(52,211,153,0.2),inset_0_1px_2px_rgba(255,255,255,1)] border border-white/80 z-20 transition-transform duration-700 group-hover:[transform:translateZ(40px)] [transform:translateZ(20px)]">
<svg className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent rounded-2xl shadow-[0_0_15px_rgba(52,211,153,0.5)] pointer-events-none" style={{animation: 'scan-line 2s linear infinite'}}></div>
</div>
<div className="flex gap-1.5 sm:gap-2 relative w-10 sm:w-12 justify-center transition-transform duration-700 group-hover:[transform:translateZ(60px)] [transform:translateZ(30px)]">
<div className="absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 -translate-y-1/2 z-0 opacity-50"></div>
<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] z-10"></div>
<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] z-10" style={{animationDelay: '0.2s'}}></div>
</div>
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(52,211,153,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-emerald-300 z-20 transition-transform duration-700 group-hover:[transform:translateZ(80px)_rotate(12deg)] [transform:translateZ(40px)]">
<svg className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
</div>
<div className="p-5 sm:p-6 pb-6 flex flex-col bg-white/60 backdrop-blur-sm relative z-20 border-t border-white/50 shrink-0 min-h-[140px] justify-center">
<div className="flex items-center gap-2 mb-2 sm:mb-2">
<div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg shadow-sm border border-emerald-200">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
<div className="text-[9px] sm:text-[10px] font-bold text-emerald-600 tracking-widest uppercase [text-shadow:none]">
                        Lead Reactivation
                      </div>
</div>
<h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-1 sm:mb-2 leading-tight tracking-tight [text-shadow:none]">
                      Dormant Pipeline Reactivation
                    </h3>
<p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed [text-shadow:none]">
                      Automatically reaches out to old leads via multi-channel
                      cadences.
                    </p>
</div>
</div>

<div className="min-w-full snap-center flex flex-col h-full">
<div className="flex-1 bg-gradient-to-br from-teal-50/80 to-white/20 relative flex items-center justify-center border-b border-teal-100/50 p-4 sm:p-6 overflow-hidden [perspective:1000px]">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 right-10 w-40 h-40 bg-gradient-to-b from-teal-400/30 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-0 left-10 w-32 h-32 bg-gradient-to-t from-cyan-400/30 to-teal-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
<div className="relative w-full h-full flex flex-col items-center justify-center scale-[0.85] sm:scale-100 origin-center [transform-style:preserve-3d] group hover:[transform:rotateY(0deg)_rotateX(0deg)] [transform:rotateY(-10deg)_rotateX(10deg)] transition-transform duration-700">
<div className="relative z-10" style={{animation: 'float 4s ease-in-out infinite'}}>
<div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(20,184,166,0.15),inset_0_1px_2px_rgba(255,255,255,1)] border border-white/80 flex items-center justify-center transition-transform duration-700 group-hover:[transform:translateZ(40px)] [transform:translateZ(20px)]">
<svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
</div>
<div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-br from-red-500 to-red-600 text-white text-[10px] sm:text-xs font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-white shadow-[0_10px_20px_rgba(239,68,68,0.3)] transition-transform duration-700 group-hover:[transform:translateZ(60px)] [transform:translateZ(30px)]">
                          3
                        </div>
</div>
<div className="mt-6 sm:mt-8 bg-white/95 backdrop-blur-md border border-white/80 shadow-[0_15px_30px_rgba(20,184,166,0.1),inset_0_1px_2px_rgba(255,255,255,1)] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 z-20 transition-transform duration-700 group-hover:[transform:translateZ(50px)] [transform:translateZ(25px)]">
<div className="bg-teal-100 p-1 sm:p-1.5 rounded-full">
<svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
<line x1="7" x2="7.01" y1="7" y2="7"></line>
</svg>
</div>
<span className="text-[10px] sm:text-[11px] font-bold tracking-wide uppercase text-teal-700 [text-shadow:none]">
                          Sent 10% Off SMS
                        </span>
</div>
</div>
</div>
<div className="p-5 sm:p-6 pb-6 flex flex-col bg-white/60 backdrop-blur-sm relative z-20 border-t border-white/50 shrink-0 min-h-[140px] justify-center">
<div className="flex items-center gap-2 mb-2 sm:mb-2">
<div className="p-1.5 bg-teal-100 text-teal-600 rounded-lg shadow-sm border border-teal-200">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
</div>
<div className="text-[9px] sm:text-[10px] font-bold text-teal-600 tracking-widest uppercase [text-shadow:none]">
                        Abandoned Carts
                      </div>
</div>
<h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-1 sm:mb-2 leading-tight tracking-tight [text-shadow:none]">
                      Cart Recovery Engine
                    </h3>
<p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed [text-shadow:none]">
                      Calls or texts customers with abandoned carts, offering
                      incentives to close the sale.
                    </p>
</div>
</div>

<div className="min-w-full snap-center flex flex-col h-full">
<div className="flex-1 bg-gradient-to-br from-rose-50/80 to-white/20 relative flex items-center justify-center border-b border-rose-100/50 p-4 sm:p-6 overflow-hidden [perspective:1000px]">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-10 w-40 h-40 bg-gradient-to-br from-rose-400/30 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-0 right-10 w-32 h-32 bg-gradient-to-tl from-red-400/30 to-rose-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
<div className="relative z-20 w-full flex justify-center items-center scale-[0.85] sm:scale-100 origin-center">
<div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[180px] sm:max-w-[200px] bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-[0_25px_50px_rgba(244,63,94,0.15),inset_0_1px_2px_rgba(255,255,255,1)] border border-white/80 relative transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.05)] [transform:rotateY(10deg)_rotateX(10deg)_scale(1)] group">
<div className="flex justify-between items-center text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider [text-shadow:none] transition-transform duration-700 group-hover:[transform:translateZ(30px)] [transform:translateZ(10px)]">
<span>Dials</span>
<span className="text-rose-700 bg-rose-50 px-1.5 sm:px-2 py-0.5 rounded-md">
                            500
                          </span>
</div>
<div className="h-2.5 sm:h-3 w-full bg-zinc-100 rounded-full overflow-hidden shadow-inner relative transition-transform duration-700 group-hover:[transform:translateZ(40px)] [transform:translateZ(15px)]">
<div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-500 w-full rounded-full" style={{animation: 'bar-grow-1 2s ease-out forwards'}}></div>
</div>
<div className="h-px w-full bg-zinc-100 my-0.5 sm:my-1"></div>
<div className="flex justify-between items-center text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider [text-shadow:none] transition-transform duration-700 group-hover:[transform:translateZ(50px)] [transform:translateZ(20px)]">
<span>Connected</span>
<span className="text-emerald-700 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-md">
                            45
                          </span>
</div>
<div className="h-2.5 sm:h-3 w-full bg-zinc-100 rounded-full overflow-hidden shadow-inner relative transition-transform duration-700 group-hover:[transform:translateZ(60px)] [transform:translateZ(25px)]">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 w-[45%] rounded-full" style={{animation: 'bar-grow-2 2s ease-out forwards'}}></div>
</div>
</div>
</div>
</div>
<div className="p-5 sm:p-6 pb-6 flex flex-col bg-white/60 backdrop-blur-sm relative z-20 border-t border-white/50 shrink-0 min-h-[140px] justify-center">
<div className="flex items-center gap-2 mb-2 sm:mb-2">
<div className="p-1.5 bg-rose-100 text-rose-600 rounded-lg shadow-sm border border-rose-200">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 16.92 22 20 20 20 18 20 18 16.92 18 16.92 22 16.92"></polyline>
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div className="text-[9px] sm:text-[10px] font-bold text-rose-600 tracking-widest uppercase [text-shadow:none]">
                        Sales Campaigns
                      </div>
</div>
<h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-1 sm:mb-2 leading-tight tracking-tight [text-shadow:none]">
                      Automated Outbound
                    </h3>
<p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed [text-shadow:none]">
                      Launches voice and SMS campaigns to drive outbound
                      conversions at scale.
                    </p>
</div>
</div>
</div>
</div>
<button className="absolute -right-10 md:-right-14 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/80 border border-zinc-200 shadow-sm text-zinc-500 hover:text-zinc-900 hidden md:block z-20 transition-transform hover:scale-105" onclick="const t=document.getElementById('unified-carousel-track'); const cw = t.clientWidth || 1; t.scrollTo({left: cw * Math.min(7, Math.round(t.scrollLeft/cw)+1), behavior: 'smooth'})">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
<div className="flex gap-2 md:mt-6 mt-4 gap-x-2 gap-y-2 justify-center">
<button className="w-2 h-2 rounded-full bg-zinc-900 transition-colors duration-300" id="unified-dot-0" onclick="const t=document.getElementById('unified-carousel-track'); t.scrollTo({left: (t.clientWidth || 1) * 0, behavior: 'smooth'})"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="unified-dot-1" onclick="const t=document.getElementById('unified-carousel-track'); t.scrollTo({left: (t.clientWidth || 1) * 1, behavior: 'smooth'})"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="unified-dot-2" onclick="const t=document.getElementById('unified-carousel-track'); t.scrollTo({left: (t.clientWidth || 1) * 2, behavior: 'smooth'})"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="unified-dot-3" onclick="const t=document.getElementById('unified-carousel-track'); t.scrollTo({left: (t.clientWidth || 1) * 3, behavior: 'smooth'})"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="unified-dot-4" onclick="const t=document.getElementById('unified-carousel-track'); t.scrollTo({left: (t.clientWidth || 1) * 4, behavior: 'smooth'})"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="unified-dot-5" onclick="const t=document.getElementById('unified-carousel-track'); t.scrollTo({left: (t.clientWidth || 1) * 5, behavior: 'smooth'})"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="unified-dot-6" onclick="const t=document.getElementById('unified-carousel-track'); t.scrollTo({left: (t.clientWidth || 1) * 6, behavior: 'smooth'})"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="unified-dot-7" onclick="const t=document.getElementById('unified-carousel-track'); t.scrollTo({left: (t.clientWidth || 1) * 7, behavior: 'smooth'})"></button>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col reveal-blur md:px-6 md:py-20 active text-zinc-900 bg-transparent pt-12 pr-4 pb-12 pl-4 justify-center" id="features">
<style>
        @keyframes roiFadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-roi-value {
          animation: roiFadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes roiLimeGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 2px rgba(132, 204, 22, 0.1));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(132, 204, 22, 0.6));
          }
        }
        .text-glow-lime {
          animation: roiLimeGlow 3s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      </style>
<div className="w-full max-w-6xl mr-auto ml-auto">
<div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 mt-8 md:mt-12">
<h2 className="text-3xl md:text-4xl font-normal text-zinc-900 tracking-tight mb-4 md:mb-6">
            AI ROI Analysis
          </h2>
<p className="text-base md:text-lg text-zinc-500 font-light">
            Transform missed interactions into measurable revenue.
          </p>
</div>
<div className="flex justify-center mb-6 md:mb-8 gap-2 md:gap-4">
<button className="px-4 md:px-6 py-2 rounded-full bg-zinc-900 text-white font-light text-xs md:text-sm transition-all tracking-tight shadow-[0_8px_16px_rgba(0,0,0,0.2)] scale-105" id="roi-tab-0" onclick="goToRoiSlide(0)">
            Customer Support
          </button>
<button className="px-4 md:px-6 py-2 rounded-full bg-white border border-zinc-200/60 text-zinc-600 font-light text-xs md:text-sm transition-all hover:bg-zinc-50 tracking-tight" id="roi-tab-1" onclick="goToRoiSlide(1)">
            Sales AI
          </button>
</div>
<div className="relative group" id="roi-carousel">
<div className="overflow-hidden touch-pan-y">
<div className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform" id="roi-carousel-track" style={{transform: 'translateX(0%)'}}>

<div className="min-w-full md:px-4 pr-1 pl-1" style={{perspective: '1200px'}}>
<div className="flex flex-col h-full max-w-2xl mr-auto ml-auto items-center" style={{transformStyle: 'preserve-3d'}}>
<p className="leading-relaxed md:text-lg md:mb-10 text-sm text-zinc-500 text-center max-w-lg mb-6 font-extralight tracking-normal">
                    Capture every lead instantly and increase conversions by up
                    to 55% at least for doing so.
                  </p>
<div className="relative w-full group/inner" style={{transformStyle: 'preserve-3d'}}>
<button className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.9)] text-zinc-500 hover:text-zinc-900 hidden md:flex items-center justify-center z-30 transition-all duration-500 hover:scale-110 active:scale-95 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" onclick="prevCsSlide()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>

<div className="bubble-3d rounded-2xl md:rounded-3xl border border-white/70 relative bg-white/40 backdrop-blur-2xl flex flex-col shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.9)] min-h-[400px] md:min-h-[460px] w-full overflow-hidden glass-bubble-panel transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15),inset_0_1px_3px_rgba(255,255,255,0.9)]" id="cs-carousel-container" style={{transformStyle: 'preserve-3d'}}>
<div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full flex-1" id="cs-carousel-track" style={{scrollBehavior: 'smooth', transformStyle: 'preserve-3d'}}>

<div className="min-w-full snap-center p-5 md:p-8 flex flex-col justify-between relative overflow-hidden group/card transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:[transform:rotateX(3deg)_rotateY(-2deg)]" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 group-hover/card:[transform:translateZ(80px)]"></div>
<div className="absolute inset-0 z-0 pointer-events-none transition-transform duration-700 ease-out group-hover/card:[transform:translateZ(-30px)]" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute -bottom-8 -left-8 md:bottom-16 md:left-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-purple-400/20 to-fuchsia-300/20 rounded-full blur-[30px] md:blur-[40px] animate-[pulse_5s_ease-in-out_infinite]"></div>
</div>
<div className="w-full flex justify-between items-start z-10 border-b border-zinc-200/50 pb-4 md:pb-6 mb-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:[transform:translateZ(40px)]">
<div className="flex items-center gap-2 md:gap-3">
<div className="p-2 bg-purple-50/80 backdrop-blur-md rounded-xl border border-purple-200 shadow-[0_4px_12px_rgba(168,85,247,0.05)]">
<svg className="text-purple-600 lucide lucide-moon" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
</svg>
</div>
<div>
<h3 className="text-base md:text-lg font-light text-zinc-900 tracking-tight">
                                  After-Hours Revenue
                                </h3>
<p className="text-[10px] md:text-xs font-extralight text-zinc-400 tracking-tight">
                                  Nighttime ROI
                                </p>
</div>
</div>
</div>
<div className="relative flex flex-col items-center justify-center w-full py-2 z-10 mb-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:[transform:translateZ(60px)_scale(1.05)]">
<div className="text-center drop-shadow-[0_8px_16px_rgba(168,85,247,0.1)]">
<div className="text-4xl md:text-5xl font-normal text-zinc-900 mb-1 md:mb-2 tracking-tight">
                                +$12k
                                <span className="text-xl md:text-2xl text-lime-500 font-extralight">
                                  /mo
                                </span>
</div>
<p className="text-[10px] md:text-sm text-zinc-500 uppercase tracking-wide font-light">
                                Found Money
                              </p>
</div>
</div>
<div className="w-full h-[160px] md:h-[200px] z-10 relative mt-auto px-1 md:px-3 pb-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:[transform:translateZ(30px)]">
<canvas className="w-full h-full" height="240" id="chart-cs-1" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '582.4px'}} width="728"></canvas>
</div>
</div>

<div className="min-w-full snap-center p-5 md:p-8 flex flex-col justify-between relative overflow-hidden group/card transition-transform duration-700 ease-[cubic-bezier(0.(-2deg)]" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 [transform:translateZ(80px)]"></div>
<div className="absolute inset-0 z-0 pointer-events-none transition-transform duration-700 ease-out group-hover/card:[transform:translateZ(-30px)]" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute -top-8 -right-8 md:top-10 md:right-0 w-32 h-32 md:w-48 md:h-48 bg20 rounded-full blur-[30px] md:blur-[40px] animate-[pulse_6s_ease-in-out_infinite]"></div>
</div>
<div className="w-full flex justify-between items-start z-10 border-b border-zinc-200/50 pb-4 md:pb-6 mb-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:[transform:translateZ(40px)]">
<div className="flex items-center gap-2 md:gap-3">
<div className="p-2 bg-lime-50/80 backdrop-blur-md rounded-xl border border-lime-200 shadow-[0_4px_12px_rgba(132,204,22,0.05)]">
<svg className="text-lime-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div>
<h3 className="text-base md:text-lg font-light text-zinc-900 tracking-tight">
                                  Conversion Lift
                                </h3>
<p className="text-[10px] md:text-xs font-extralight text-zinc-400 tracking-tight">
                                  Immediate Answer ROI
                                </p>
</div>
</div>
<div className="flex items-center gap-1 md:gap-2 bg-white/60 backdrop-blur-md shadow-sm rounded-full px-2.5 py-1 border border-zinc-200/60">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.6)]"></span>
</span>
<span className="text-[9px] md:text-[10px] font-normal text-zinc-600 uppercase tracking-wider">
                                Active
                              </span>
</div>
</div>
<div className="relative flex flex-col items-center justify-center w-full py-2 z-10 mb-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:[transform:translateZ(60px)_scale(1.05)]">
<div className="text-center drop-shadow-[0_8px_16px_rgba(132,204,22,0.1)]">
<div className="text-4xl md:text-5xl font-normal text-zinc-900 mb-1 md:mb-2 tracking-tight">
                                55
                                <span className="text-xl md:text-2xl text-lime-500 font-extralight">
                                  %
                                </span>
</div>
<p className="text-[10px] md:text-sm text-zinc-500 uppercase tracking-wide font-light">
                                More Conversions
                              </p>
</div>
</div>
<div className="w-full h-[160px] md:h-[200px] z-10 relative mt-auto px-1 md:px-3 pb-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:[transform:translateZ(30px)]">
<canvas className="w-full h-full" height="240" id="chart-cs-2" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '582.4px'}} width="728"></canvas>
</div>
</div>

<div className="min-w-full snap-center p-5 md:p-8 flex flex-col justify-between relative overflow-hidden group/card transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:[transform:rotateX(3deg)_rotateY(-2deg)]" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 [transform:translateZ(80px)]"></div>
<div className="absolute inset-0 z-0 pointer-events-none transition-transform duration-700 ease-out group-hover/card:[transform:translateZ(-30px)]" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute -bottom-8 -right-8 md:bottom-1/4 md:left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-blue-300/20 to-sky-300/20 rounded-full blur-[30px] md:blur-[40px] animate-[pulse_7s_ease-in-out_infinite]" style={{animationDelay: '1s'}}></div>
</div>
<div className="w-full flex justify-between items-start z-10 border-b border-zinc-200/50 pb-4 md:pb-6 mb-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:[transform:translateZ(40px)]">
<div className="flex items-center gap-2 md:gap-3">
<div className="p-2 bg-blue-50/80 backdrop-blur-md rounded-xl border border-blue-200 shadow-[0_4px_12px_rgba(59,130,246,0.05)]">
<svg className="text-blue-600 lucide lucide-database" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
<div>
<h3 className="text-base md:text-lg font-light text-zinc-900 tracking-tight">
                                  Leads Collected
                                </h3>
<p className="text-[10px] md:text-xs font-extralight text-zinc-400 tracking-tight">
                                  Automated Entry
                                </p>
</div>
</div>
<div className="flex flex-col gap-1 items-end justify-center">
<div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md shadow-sm rounded-full px-2 py-0.5 border border-zinc-200/60">
<span className="w-2 h-0.5 bg-blue-500 rounded-full"></span>
<span className="text-[8px] md:text-[9px] font-medium text-zinc-600 uppercase tracking-wider">
                                  AI
                                </span>
</div>
<div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md shadow-sm rounded-full px-2 py-0.5 border border-zinc-200/60">
<span className="w-2 h-0.5 bg-red-500 rounded-full border-dashed"></span>
<span className="text-[8px] md:text-[9px] font-medium text-zinc-600 uppercase tracking-wider">
                                  Before AI
                                </span>
</div>
</div>
</div>
<div className="relative flex flex-col items-center justify-center w-full py-2 z-10 mb-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:[transform:translateZ(60px)_scale(1.05)]">
<div className="text-center drop-shadow-[0_8px_16px_rgba(59,130,246,0.1)]">
<div className="text-4xl md:text-5xl font-normal text-zinc-900 mb-1 md:mb-2 tracking-tight flex items-center justify-center gap-2">
<span className="text-2xl md:text-3xl text-zinc-400">
                                  92%
                                </span>
<svg className="text-zinc-300 w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 "></path>
</svg>
                                95
                                <span className="text-xl md:text-2xl text-blue-500 font-extralight">
                                  %
                                </span>
</div>
<p className="text-[10px] md:text-sm text-zinc-500 uppercase tracking-wide font-light">
                                Avg Collected Leads
                              </p>
</div>
</div>
<div className="w-full h-[160px] md:h-[200px] z-10 relative mt-auto px-1 md:px-3 pb-2 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:[transform:translateZ(30px)]">
<canvas className="w-full h-full" height="240" id="chart-cs-3" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '582.4px'}} width="728"></canvas>
</div>
</div>
</div>
</div>
<button className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.9)] text-zinc-500 hover:text-zinc-900 hidden md:flex items-center justify-center z-30 transition-all duration-500 hover:scale-110 active:scale-95 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" onclick="nextCsSlide()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
<div className="flex justify-center gap-3 mt-10 md:mt-14 relative z-20">
<button className="w-2 h-2 rounded-full bg-zinc-900 transition-colors duration-300" id="cs-indicator-0" onclick="goToCsSlide(0)"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="cs-indicator-1" onclick="goToCsSlide(1)"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="cs-indicator-2" onclick="goToCsSlide(2)"></button>
</div>
</div>
</div>
</div>

<div className="min-w-full px-1 md:px-4">
<div className="flex flex-col items-center h-full max-w-2xl mx-auto">
<p className="leading-relaxed text-sm md:text-lg font-light text-zinc-500 mb-6 md:mb-10 text-center max-w-lg">
                    Re-engage old prospects and recover lost sales
                    automatically. Found money from leads that were otherwise
                    ignored.
                  </p>
<div className="relative w-full group/inner">
<button className="absolute -left-10 md:-left-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-zinc-200 shadow-sm text-zinc-500 hover:text-zinc-900 hidden md:block z-20 transition-transform hover:scale-105" onclick="prevSalesSlide()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="bubble-3d rounded-2xl md:rounded-3xl border border-white/60 relative bg-white/70 backdrop-blur-xl flex flex-col shadow-xl md:shadow-2xl min-h-[400px] md:min-h-[460px] w-full overflow-hidden glass-bubble-panel" id="sales-carousel-container">
<div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full flex-1" id="sales-carousel-track" style={{scrollBehavior: 'smooth'}}>

<div className="min-w-full snap-center p-5 md:p-8 flex flex-col justify-between relative overflow-hidden group/card">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute -top-10 right-0 w-48 h-48 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
</div>
<div className="w-full flex justify-between items-start z-10 border-b border-zinc-200/50 pb-4 md:pb-6 mb-2">
<div className="flex items-center gap-2 md:gap-3">
<div className="p-2 bg-orange-100 rounded-xl border border-orange-200">
<svg className="text-orange-600 lucide lucide-users" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div>
<h3 className="text-base md:text-lg font-light text-zinc-900 tracking-tight">
                                  Active Appointments
                                </h3>
<p className="text-[10px] md:text-xs font-light text-zinc-400 tracking-tight">
                                  Lead Reactivation
                                </p>
</div>
</div>
</div>
<div className="relative flex flex-col items-center justify-center w-full py-2 z-10 mb-2">
<div className="text-center animate-roi-value">
<div className="text-4xl md:text-5xl font-normal text-zinc-900 mb-1 md:mb-2 tracking-tight">
                                142
                                <span className="text-xl md:text-2xl text-lime-500 font-extralight">
                                  leads
                                </span>
</div>
<p className="text-[10px] md:text-sm text-zinc-500 uppercase tracking-wide font-light">
                                Reactivated
                              </p>
</div>
</div>
<div className="w-full h-[160px] md:h-[200px] z-10 relative mt-auto px-1 md:px-3 pb-2">
<canvas className="w-full h-full" height="240" id="chart-sales-1" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '582.4px'}} width="728"></canvas>
</div>
</div>

<div className="min-w-full snap-center p-5 md:p-8 flex flex-col justify-between relative overflow-hidden group/card">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200/20 rounded-tr-full blur-3xl animate-pulse"></div>
</div>
<div className="w-full flex justify-between items-start z-10 border-b border-zinc-200/50 pb-4 md:pb-6 mb-2">
<div className="flex items-center gap-2 md:gap-3">
<div className="p-2 bg-pink-100 rounded-xl border border-pink-200">
<svg className="text-pink-600 lucide lucide-shopping-cart" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
</div>
<div>
<h3 className="text-base md:text-lg font-light text-zinc-900 tracking-tight">
                                  Abandoned Carts
                                </h3>
<p className="text-[10px] md:text-xs font-light text-zinc-400 tracking-tight">
                                  Recovered Checkouts
                                </p>
</div>
</div>
</div>
<div className="relative flex flex-col items-center justify-center w-full py-2 z-10 mb-2">
<div className="text-center animate-roi-value">
<div className="text-4xl md:text-5xl font-normal text-zinc-900 mb-1 md:mb-2 tracking-tight">
                                38
                                <span className="text-xl md:text-2xl text-lime-500 font-extralight">
                                  %
                                </span>
</div>
<p className="text-[10px] md:text-sm text-zinc-500 uppercase tracking-wide font-light">
                                Carts Saved
                              </p>
</div>
</div>
<div className="w-full h-[160px] md:h-[200px] z-10 relative mt-auto px-1 md:px-3 pb-2">
<canvas className="w-full h-full" height="240" id="chart-sales-2" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '582.4px'}} width="728"></canvas>
</div>
</div>
</div>
</div>
<button className="absolute -right-10 md:-right-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-zinc-200 shadow-sm text-zinc-500 hover:text-zinc-900 hidden md:block z-20 transition-transform hover:scale-105" onclick="nextSalesSlide()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
<div className="flex justify-center gap-2 mt-4 md:mt-6">
<button className="w-2 h-2 rounded-full bg-zinc-900 transition-colors duration-300" id="sales-indicator-0" onclick="goToSalesSlide(0)"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 transition-colors duration-300" id="sales-indicator-1" onclick="goToSalesSlide(1)"></button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


</div>
</section>

<section className="reveal-blur active pt-24 pr-6 pb-24 pl-6 relative" id="plans">
<div className="max-w-6xl mr-auto ml-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
<p className="text-lg text-zinc-500 max-w-2xl mr-auto ml-auto">
            The only plan that's best for your business.
          </p>
</div>
<div className="group max-w-md mt-8 mr-auto ml-auto pt-4 pb-4 relative">
<div className="bubble-3d z-10 flex flex-col bg-white/80 h-auto border-zinc-200/50 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl">
<div className="">
<h3 className="text-2xl font-semibold text-zinc-900 mb-2 flex items-center gap-3">
<span className="relative flex h-3 w-3 items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" style={{animationDuration: '2s'}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span>
</span>
                Setup and Management
              </h3>
<div className="text-4xl font-bold text-zinc-900 mb-2">
                $5,749
                <span className="text-lg font-normal text-zinc-400">once</span>
</div>
<p className="text-sm text-zinc-500 mb-1">
                We set up everything once.
              </p>
<p className="text-xs font-semibold text-orange-600 mb-6">
                + $1,500/mo for management and optimization
              </p>
<a className="travel-light block hover:bg-black transition-all shadow-orange-500/20 overflow-hidden font-semibold text-white text-center bg-zinc-900 w-full rounded-full mb-8 pt-3 pr-4 pb-3 pl-4 relative shadow-lg" href="https://www.agence.cc/subscription">
                Get Started
              </a>
<ul className="space-y-3 text-sm text-zinc-700 font-medium">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Complete Custom Setup</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">ROI Tracking and Optimization</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Fully Managed by Our Team</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Full time support</span>
</li>
</ul>
<div className="mt-6 pt-6 border-t border-zinc-200/50">
<div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
<svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  30-Day Satisfaction Guarantee
                </div>
</div>
</div>
</div>
</div>

<div className="mt-16 max-w-3xl mx-auto">
<h3 className="text-xl font-semibold text-zinc-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
<div className="space-y-4">
<details className="bubble-3d group bg-white/40 border-white/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<summary className="font-semibold text-zinc-900 cursor-pointer list-none flex justify-between items-center">
                Why is there only one package?
                <svg className="transition-transform group-open:rotate-180 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(161, 161, 170)', width: '20px', height: '20px'}} viewbox="0 0 24 24">
<path className="" d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<p className="mt-4 text-sm text-zinc-600 leading-relaxed">
                We believe in partnering to deliver high quality results only.
                In order to deliver the best possible results for your business,
                our team needs to be fully integrated into your setup and
                optimization process.
              </p>
</details>
<details className="bubble-3d group bg-white/40 border-white/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<summary className="cursor-pointer list-none flex font-semibold text-zinc-900 items-center justify-between">
                How long does setup take?
                <svg className="transition-transform group-open:rotate-180 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(161, 161, 170)'}} viewbox="0 0 24 24">
<path className="" d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<p className="text-sm text-zinc-600 mt-4">
                For setup and testing it takes usually less than 3 weeks from
                start to finish and up to a month for complex workflows.
              </p>
</details>
<details className="bubble-3d group bg-white/40 border-white/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<summary className="cursor-pointer list-none flex font-semibold text-zinc-900 items-center justify-between">
                What if it doesn't work for my business?
                <svg className="transition-transform group-open:rotate-180 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(161, 161, 170)', width: '20px', height: '20px'}} viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<p className="mt-4 text-sm text-zinc-600">
                If the system doesn't meet initial expectations in the agreed
                timeframe. You'll get your money back.
              </p>
</details>
<details className="bubble-3d p-6 rounded-2xl bg-white/40 border border-white/60 group">
<summary className="font-semibold text-zinc-900 cursor-pointer list-none flex justify-between items-center">
                What happens to my current staff?
                <svg className="w-5 h-5 text-zinc-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<p className="mt-4 text-sm text-zinc-600">
                They can focus on higher-value work like sales, customer
                service, complex issues/roles.
              </p>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-white z-10 border-zinc-200 border-t pt-16 pb-12 relative">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 group text-lg font-semibold text-zinc-900 tracking-tight mb-4 notranslate" href="#" translate="no">
<span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform duration-300"></span>
              agence
            </a>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs font-medium">
              Building the future of voice-first autonomous business intake. No
              missed calls, just revenue.
            </p>
</div>
<div className="col-span-1 flex flex-col gap-4 gap-x-4 gap-y-4">
<h3 className="font-semibold text-zinc-900 text-sm tracking-tight">
              Legal
            </h3>
<div className="flex flex-col gap-3">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium w-fit" href="https://www.agence.cc/terms-and-conditions">
                Terms &amp; Conditions
              </a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium w-fit" href="https://www.agence.cc/privacy-policy">
                Privacy Policy
              </a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-zinc-100 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs font-medium text-zinc-400">
            © 2025 Agence. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-600 transition-colors duration-200" href="#"></a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors duration-200" href="#"></a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors duration-200" href="#"></a>
</div>
</div>
</div>
</footer>





<div id="google_translate_element" style={{display: 'none'}}></div>



    </>
  );
}
