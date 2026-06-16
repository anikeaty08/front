import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



  (function () {

  function initUnicorn() {
    if (window.UnicornStudio && window.UnicornStudio.init) {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
  }

  if (window.UnicornStudio && window.UnicornStudio.init) {
    initUnicorn();
    return;
  }

  if (!window.UnicornStudio) {
    window.UnicornStudio = { isInitialized:false };
  }

  if (!document.querySelector("script[data-unicorn-loader]")) {

    var s = document.createElement("script");
    s.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";

    s.setAttribute("data-unicorn-loader","true");

    s.onload = function () {
      initUnicorn();
    };

    (document.head || document.body).appendChild(s);
  }

})();



      document.addEventListener('DOMContentLoaded', () => {
          // Navbar glass effect on scroll
          const navbar = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  navbar.classList.add('shadow-lg', 'border-b', 'border-white/5');
                  navbar.classList.remove('bg-transparent');
              } else {
                  navbar.classList.remove('shadow-lg', 'border-b', 'border-white/5');
              }
          });

          // Intersection Observer for Reveal Animations
          const revealElements = document.querySelectorAll('.reveal');
          const revealOptions = {
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
          };

          const revealOnScroll = new IntersectionObserver(function(entries, observer) {
              entries.forEach(entry => {
                  if (!entry.isIntersecting) return;
                  entry.target.classList.add('active');

                  // Trigger counters if within revealed element
                  const counters = entry.target.querySelectorAll('.counter');
                  if(counters.length > 0) {
                      animateCounters(counters);
                  }
                  // For counters directly in hero
                  if(entry.target.classList.contains('active') && entry.target.querySelector('.counter')) {
                      // handled above
                  }

                  observer.unobserve(entry.target);
              });
          }, revealOptions);

          revealElements.forEach(el => revealOnScroll.observe(el));

          // Counter Animation Function
          let animated = false;
          function animateCounters(counters) {
              if(animated) return;
              counters.forEach(counter => {
                  const target = parseFloat(counter.getAttribute('data-target'));
                  const duration = 2000;
                  const stepTime = Math.abs(Math.floor(duration / target));
                  let current = 0;

                  const timer = setInterval(() => {
                      current += target / (duration / 30); // smooth increment
                      if (current >= target) {
                          counter.innerText = target;
                          clearInterval(timer);
                      } else {
                          counter.innerText = (current % 1 !== 0) ? current.toFixed(1) : Math.floor(current);
                      }
                  }, 30);
              });
              animated = true; // prevent re-running if multiple sections have counters
          }

          // Simple Parallax Effect for Hero
          const parallaxWrap = document.querySelector('.parallax-wrap');
          const parallaxEls = document.querySelectorAll('.parallax-el');

          if(parallaxWrap && window.innerWidth > 768) {
              document.addEventListener('mousemove', (e) => {
                  const x = (window.innerWidth - e.pageX * 2) / 100;
                  const y = (window.innerHeight - e.pageY * 2) / 100;

                  parallaxEls.forEach(el => {
                      const speed = el.getAttribute('data-speed') || 0.05;
                      const xOffset = x * speed * 100;
                      const yOffset = y * speed * 100;
                      el.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
                  });
              });
          }
      });
    


      document.addEventListener('DOMContentLoaded', () => {
          const menuBtn = document.getElementById('mobile-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          const navLinks = document.querySelectorAll('#navbar a');

          function closeMobileMenu() {
              if (!mobileMenu) return;
              mobileMenu.classList.add('hidden');
              if (menuBtn) {
                  const icon = menuBtn.querySelector('iconify-icon');
                  if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
              }
          }

          if (menuBtn && mobileMenu) {
              menuBtn.addEventListener('click', () => {
                  mobileMenu.classList.toggle('hidden');
                  const icon = menuBtn.querySelector('iconify-icon');
                  if (icon) {
                      if (mobileMenu.classList.contains('hidden')) {
                          icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                      } else {
                          icon.setAttribute('icon', 'solar:close-circle-linear');
                      }
                  }
              });

              navLinks.forEach(link => {
                  link.addEventListener('click', () => {
                      closeMobileMenu();
                  });
              });

              window.addEventListener('resize', () => {
                  if (window.innerWidth >= 768) closeMobileMenu();
              });
          }
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        const aiToggle = document.getElementById('ai-toggle');
        const savingsVal = document.getElementById('savings-val');
        const gridStatusVal = document.getElementById('grid-status-val');
        const chartBars = document.querySelectorAll('.chart-bar-active');
        if(aiToggle) {
          aiToggle.addEventListener('change', (e) => {
            if(e.target.checked) {
              if(savingsVal) {
                savingsVal.innerHTML = '2,450 <span class="text-sm text-[#00c16a]/60">PLN</span>';
                savingsVal.className = 'text-xl font-medium text-[#00c16a]';
              }
              if(gridStatusVal) {
                gridStatusVal.innerHTML = '<div class="w-2 h-2 rounded-full bg-[#00c16a] animate-pulse"></div> Stabilny';
              }
              chartBars.forEach((bar, index) => {
                if(index === 0) {
                  bar.className = 'w-full bg-[#00c16a]/80 rounded-t-sm h-[80%] shadow-[0_0_15px_rgba(0,193,106,0.3)] chart-bar-active transition-all duration-500';
                } else {
                  bar.className = 'w-full bg-[#00c16a] rounded-t-sm h-[100%] shadow-[0_0_15px_rgba(0,193,106,0.5)] chart-bar-active transition-all duration-500';
                }
              });
            } else {
              if(savingsVal) {
                savingsVal.innerHTML = '850 <span class="text-sm text-slate-500">PLN</span>';
                savingsVal.className = 'text-xl font-medium text-slate-400';
              }
              if(gridStatusVal) {
                gridStatusVal.innerHTML = '<div class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div> Tryb Ręczny';
              }
              chartBars.forEach((bar, index) => {
                if(index === 0) {
                  bar.className = 'w-full bg-slate-700 rounded-t-sm h-[80%] chart-bar-active transition-all duration-500';
                } else {
                  bar.className = 'w-full bg-slate-700 rounded-t-sm h-[100%] chart-bar-active transition-all duration-500';
                }
              });
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="unicorn-bg absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen">
<div className="absolute inset-0 w-full h-full" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="ywpMeQH9jueVeyngMZw0">
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#00c16a]/10 blur-[120px] animate-pulse-glow mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[150px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 text-xl font-semibold text-white tracking-tighter" href="#">
<iconify-icon className="text-[#00c16a] text-2xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
          VOLTOP
        </a>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
<a className="hover:text-white transition-colors" href="o-nas.html">
            O nas
          </a>
<a className="hover:text-white transition-colors" href="dla-przemyslu.html">
            Dla Przemysłu
          </a>
<a className="hover:text-white transition-colors" href="dla-farm-pv.html">
            Dla Farm PV
          </a>
<a className="hover:text-white transition-colors" href="#rozwiazania">
            Rozwiązania
          </a>
<a className="hover:text-white transition-colors" href="#ems">
            System EMS
          </a>
<a className="hover:text-white transition-colors" href="#realizacje">
            Realizacje
          </a>
<a className="hover:text-white transition-colors" href="#finansowanie">
            Finansowanie
          </a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="bg-[#00c16a] text-slate-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#00a85c] transition-all shadow-[0_0_20px_rgba(0,193,106,0.2)] hover:shadow-[0_0_30px_rgba(0,193,106,0.4)]" href="#kontakt">
            Skontaktuj się
          </a>
</div>
<button className="md:hidden text-2xl text-slate-300" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="md:hidden hidden bg-slate-950/95 backdrop-blur-md border-t border-white/10 absolute top-full left-0 w-full flex flex-col px-6 py-4 shadow-2xl" id="mobile-menu">
<a className="text-white py-3 border-b border-white/5 font-medium transition-colors mobile-link" href="o-nas.html">
          O nas
        </a>
<a className="text-white py-3 border-b border-white/5 font-medium transition-colors mobile-link" href="dla-przemyslu.html">
          Dla Przemysłu
        </a>
<a className="text-white py-3 border-b border-white/5 font-medium transition-colors mobile-link" href="dla-farm-pv.html">
          Dla Farm PV
        </a>
<a className="text-white py-3 border-b border-white/5 font-medium transition-colors mobile-link" href="#rozwiazania">
          Rozwiązania
        </a>
<a className="text-white py-3 border-b border-white/5 font-medium transition-colors mobile-link" href="#ems">
          System EMS
        </a>
<a className="text-white py-3 border-b border-white/5 font-medium transition-colors mobile-link" href="#realizacje">
          Realizacje
        </a>
<a className="text-white py-3 border-b border-white/5 font-medium transition-colors mobile-link" href="#finansowanie">
          Finansowanie
        </a>
<a className="text-white py-3 border-b border-white/5 font-medium transition-colors mobile-link" href="#faq">
          FAQ
        </a>
<a className="bg-[#00c16a] text-slate-950 px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#00a85c] transition-all text-center mt-4 mobile-link" href="#kontakt">
          Skontaktuj się
        </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern">

<div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12">
<div className="flex flex-col justify-center pt-10 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00c16a]/30 bg-[#00c16a]/10 text-[#00c16a] text-xs font-medium mb-6 w-fit reveal">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c16a] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c16a]"></span>
</span>
            Nowa generacja magazynów 2024
          </div>
<h1 className="text-5xl lg:text-7xl tracking-tighter font-medium leading-[1.1] mb-6 reveal reveal-delay-1 text-white">
            Inteligencja w
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c16a] to-emerald-300 glow-text">
              każdej watogodzinie.
            </span>
</h1>
<p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed reveal reveal-delay-2 font-light">
            Skalowane systemy magazynowania energii dla przemysłu i farm PV.
            Zoptymalizuj koszty, zapewnij ciągłość działania i osiągnij
            niezależność energetyczną.
          </p>
<div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
<a className="bg-[#00c16a] text-slate-950 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#00a85c] transition-all text-center flex items-center justify-center gap-2" href="#kontakt">
              Rozpocznij projekt
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="glass px-8 py-3.5 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all text-center" href="zobacz-jak-to-dziala.html">
              Zobacz jak to działa
            </a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-8 reveal reveal-delay-3">
<div>
<div className="text-2xl font-medium tracking-tight text-white counter" data-target="99.9">
                0
              </div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Niezawodność (%)
              </div>
</div>
<div>
<div className="text-2xl font-medium tracking-tight text-white flex">
<span className="counter" data-target="40">0</span>
                %
              </div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Redukcja kosztów
              </div>
</div>
<div className="hidden sm:block">
<div className="text-2xl font-medium tracking-tight text-white flex">
<span className="counter" data-target="24">0</span>
                /7
              </div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Monitoring AI
              </div>
</div>
</div>
</div>

<div className="relative h-[50vh] lg:h-auto flex items-center justify-center reveal reveal-delay-2 parallax-wrap">
<div className="absolute inset-0 bg-gradient-to-tr from-[#00c16a]/5 to-transparent rounded-full blur-3xl"></div>

<div className="relative w-full max-w-md aspect-square animate-float parallax-el" data-speed="0.05">

<div className="absolute inset-4 rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden">

<div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-6 justify-between">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c16a] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c16a]"></span>
</span>
<span className="text-xs text-[#00c16a] font-mono">ONLINE</span>
</div>
</div>

<div className="flex-1 relative flex items-center justify-center">
<div className="absolute inset-10 border border-[#00c16a]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-14 border border-dashed border-[#00c16a]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#00c16a] to-emerald-200 blur-xl opacity-40 animate-pulse-glow"></div>
<div className="w-16 h-16 rounded-full bg-[#00c16a] flex items-center justify-center shadow-[0_0_40px_#00c16a] z-10">
<iconify-icon className="text-slate-950 text-3xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="h-24 bg-gradient-to-t from-slate-950 to-transparent p-4 flex items-end gap-2">
<div className="flex-1 w-full flex items-end gap-1 h-full opacity-50">
<div className="w-full bg-[#00c16a] rounded-t-sm h-[40%] animate-[pulse_2s_ease-in-out_infinite]"></div>
<div className="w-full bg-[#00c16a] rounded-t-sm h-[60%] animate-[pulse_2.5s_ease-in-out_infinite]"></div>
<div className="w-full bg-[#00c16a] rounded-t-sm h-[30%] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-full bg-[#00c16a] rounded-t-sm h-[80%] animate-[pulse_3s_ease-in-out_infinite]"></div>
<div className="w-full bg-[#00c16a] rounded-t-sm h-[50%] animate-[pulse_2.2s_ease-in-out_infinite]"></div>
</div>
</div>
</div>

<div className="absolute -right-8 top-1/4 glass-card p-4 rounded-xl animate-float-slow parallax-el" data-speed="0.1">
<div className="text-xs text-slate-400 mb-1">Moc wyjściowa</div>
<div className="text-xl text-white font-medium tracking-tight">
                2.5 MW
              </div>
</div>
<div className="absolute -left-4 bottom-1/3 glass-card p-4 rounded-xl animate-float parallax-el" data-speed="-0.08">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#00c16a]/20 flex items-center justify-center">
<iconify-icon className="text-[#00c16a]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Emisja CO2</div>
<div className="text-sm text-white font-medium">-45% r/r</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-slate-500 font-medium uppercase tracking-widest mb-6">
          Zaufali nam liderzy branży
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl tracking-tighter font-semibold text-white">
            ACME CORP
          </div>
<div className="text-xl tracking-tighter font-semibold text-white">
            GLOBAL
            <span className="font-light">ENERGY</span>
</div>
<div className="text-xl tracking-tighter font-semibold text-white">
            NEXUS
          </div>
<div className="text-xl tracking-tighter font-semibold text-white">
            SYNTH
            <span className="text-[#00c16a]">O</span>
</div>
<div className="text-xl tracking-tighter font-semibold text-white hidden md:block">
            TECHFRONTIER
          </div>
</div>
</div>
</section>

<section className="py-32 relative" id="rozwiazania">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-5xl tracking-tighter font-medium mb-6 text-white">
            Architektura przyszłości
          </h2>
<p className="text-slate-400 font-light leading-relaxed">
            Nasze systemy to nie tylko baterie. To zaawansowane centra
            zarządzania energią, które same podejmują decyzje w oparciu o
            predykcje AI.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl reveal group">
<div className="w-12 h-12 rounded-xl bg-[#00c16a]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-[#00c16a]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Bezpieczeństwo LFP
            </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
              Najbezpieczniejsza technologia ogniw
              litowo-żelazowo-fosforanowych, gwarantująca ponad 10 000 cykli
              pracy bez utraty wydajności.
            </p>
</div>

<div className="glass-card p-8 rounded-2xl reveal reveal-delay-1 group">
<div className="w-12 h-12 rounded-xl bg-[#00c16a]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-[#00c16a]" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Arbitraż Cenowy
            </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
              Algorytmy automatycznie ładują magazyn w dolinach cenowych i
              uwalniają energię podczas szczytów taryfowych.
            </p>
</div>

<div className="glass-card p-8 rounded-2xl reveal reveal-delay-2 group">
<div className="w-12 h-12 rounded-xl bg-[#00c16a]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-[#00c16a]" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Integracja Microgrid
            </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
              Bezproblemowe połączenie z farmami PV, generatorami diesla oraz
              siecią dystrybucyjną w jeden inteligentny ekosystem.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900/30 border-y border-white/5 relative overflow-hidden" id="ems">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#00c16a]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="text-[#00c16a] text-sm font-medium tracking-wide uppercase mb-4">
              Voltop OS™
            </div>
<h2 className="text-3xl md:text-5xl tracking-tighter font-medium mb-6 text-white leading-[1.1]">
              Zarządzaj energią z poziomu jednej aplikacji.
            </h2>
<p className="text-slate-400 font-light leading-relaxed mb-8">
              Nasz autorski system EMS (Energy Management System) zbiera dane w
              czasie rzeczywistym. Dzięki wykorzystaniu machine learningu,
              przewiduje produkcję z OZE i optymalizuje przepływy energii,
              maksymalizując zyski.
            </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00c16a] text-xl mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-300">
                  Monitoring parametrów co 100ms
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00c16a] text-xl mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-300">
                  Prognozy pogody zintegrowane z logiką ładowania
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00c16a] text-xl mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-300">
                  Zarządzanie mocą bierną i aktywną
                </span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#00c16a] transition-colors border-b border-transparent hover:border-[#00c16a] pb-1" href="#">
              Poznaj możliwości Voltop OS
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="relative reveal reveal-delay-1">
<div className="absolute inset-0 bg-gradient-to-tr from-[#00c16a]/20 to-transparent blur-2xl rounded-3xl transform rotate-3"></div>
<div className="relative bg-slate-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden glow-box">

<div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="text-xs text-slate-500 font-medium tracking-widest">
                  VOLTOP OS
                </div>
</div>

<div className="p-6">

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-[10px] text-slate-400 uppercase mb-1">
                      Stan naładowania
                    </div>
<div className="text-xl font-medium text-white">
                      84
                      <span className="text-sm text-slate-500">%</span>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-[10px] text-slate-400 uppercase mb-1">
                      Oszczędność dziś
                    </div>
<div className="text-xl font-medium text-[#00c16a]" id="savings-val">
                      2,450
                      <span className="text-sm text-[#00c16a]/60">PLN</span>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-[10px] text-slate-400 uppercase mb-1">
                      Grid Status
                    </div>
<div className="text-sm font-medium text-white flex items-center gap-1 mt-1" id="grid-status-val">
<div className="w-2 h-2 rounded-full bg-[#00c16a] animate-pulse"></div>
                      Stabilny
                    </div>
</div>
</div>

<div className="bg-white/5 rounded-lg border border-white/5 p-4 h-48 relative flex items-end gap-2">
<div className="absolute top-4 left-4 text-xs text-slate-400">
                    Przepływ mocy (kW)
                  </div>

<div className="flex-1 w-full flex items-end gap-2 h-full pt-10">
<div className="w-full bg-slate-800 rounded-t-sm h-[30%] hover:bg-slate-700 transition-colors relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        120
                      </div>
</div>
<div className="w-full bg-slate-800 rounded-t-sm h-[50%] hover:bg-slate-700 transition-colors"></div>
<div className="w-full bg-[#00c16a]/80 rounded-t-sm h-[80%] shadow-[0_0_15px_rgba(0,193,106,0.3)] chart-bar-active transition-all duration-500"></div>
<div className="w-full bg-[#00c16a] rounded-t-sm h-[100%] shadow-[0_0_15px_rgba(0,193,106,0.5)] chart-bar-active transition-all duration-500"></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[20%]"></div>
</div>
</div>

<div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
<div className="text-xs text-slate-400">AI Auto-Trading</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="ai-toggle" type="checkbox" value=""/>
<div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00c16a]"></div>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="realizacje">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl tracking-tighter font-medium mb-4 text-white">
              Sprawdzone w przemyśle
            </h2>
<p className="text-slate-400 font-light">
              Skalowalne systemy dla firm o zróżnicowanym zapotrzebowaniu na
              moc.
            </p>
</div>
<div className="mt-6 md:mt-0">
<button className="glass px-6 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all">
              Wszystkie case studies
            </button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer reveal">
<div className="overflow-hidden rounded-2xl mb-6 relative aspect-video bg-slate-900">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<iconify-icon className="text-9xl text-white" icon="solar:buildings-linear"></iconify-icon>
</div>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-xs px-3 py-1 rounded-full text-white">
                Zakład Produkcyjny
              </div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-[#00c16a] transition-colors">
              Redukcja peaków mocy o 35%
            </h3>
<p className="text-sm text-slate-400 font-light mb-4">
              Instalacja 1.5MW / 3MWh w zakładzie obróbki metalu w Poznaniu.
              Zwróciła się w 3.5 roku.
            </p>
<div className="flex gap-4 text-xs font-medium text-slate-500">
<span>Pojemność: 3MWh</span>
<span className="w-1 h-1 bg-slate-700 rounded-full my-auto"></span>
<span>Moc: 1.5MW</span>
</div>
</div>

<div className="group cursor-pointer reveal reveal-delay-1">
<div className="overflow-hidden rounded-2xl mb-6 relative aspect-video bg-slate-900">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-bl from-slate-800 to-slate-950 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<iconify-icon className="text-9xl text-white" icon="solar:solar-panel-linear"></iconify-icon>
</div>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-xs px-3 py-1 rounded-full text-white">
                Farma Fotowoltaiczna
              </div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-[#00c16a] transition-colors">
              Cable Pooling i magazynowanie OZE
            </h3>
<p className="text-sm text-slate-400 font-light mb-4">
              System 5MW / 10MWh zintegrowany z farmą PV, maksymalizujący zyski
              z handlu energią.
            </p>
<div className="flex gap-4 text-xs font-medium text-slate-500">
<span>Pojemność: 10MWh</span>
<span className="w-1 h-1 bg-slate-700 rounded-full my-auto"></span>
<span>Moc: 5MW</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 relative border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl tracking-tighter font-medium mb-16 text-center text-white reveal">
          Proces wdrożenia
        </h2>
<div className="relative border-l border-white/10 ml-4 md:ml-[50%] space-y-12 pb-8">

<div className="relative pl-8 md:pl-0 reveal">
<div className="relative md:w-1/2 md:pr-12 md:text-right md:-ml-[50%]">
<div className="absolute w-4 h-4 rounded-full bg-slate-950 border-2 border-[#00c16a] -left-[38px] md:left-auto md:-right-[8px] top-1 z-10 shadow-[0_0_10px_#00c16a]"></div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Audyt i Analiza
              </h3>
<p className="text-sm text-slate-400 font-light">
                Analizujemy profile zużycia energii (dane z OSD), warunki
                przyłączeniowe i określamy optymalną wielkość magazynu.
              </p>
</div>
</div>

<div className="relative pl-8 md:pl-0 reveal">
<div className="relative md:w-1/2 md:pl-12 md:ml-[50%]">
<div className="absolute w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600 -left-[38px] md:-left-[8px] top-1 z-10"></div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Projekt i Pozwolenia
              </h3>
<p className="text-sm text-slate-400 font-light">
                Przygotowujemy pełną dokumentację techniczną oraz pomagamy w
                uzyskaniu warunków przyłączenia (jeśli wymagane).
              </p>
</div>
</div>

<div className="relative pl-8 md:pl-0 reveal">
<div className="relative md:w-1/2 md:pr-12 md:text-right md:-ml-[50%]">
<div className="absolute w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600 -left-[38px] md:left-auto md:-right-[8px] top-1 z-10"></div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Dostawa i Instalacja
              </h3>
<p className="text-sm text-slate-400 font-light">
                Transport, posadowienie kontenerów, podłączenie elektryczne i
                integracja z systemem nadrzędnym.
              </p>
</div>
</div>

<div className="relative pl-8 md:pl-0 reveal">
<div className="relative md:w-1/2 md:pl-12 md:ml-[50%]">
<div className="absolute w-4 h-4 rounded-full bg-[#00c16a] border-2 border-[#00c16a] -left-[38px] md:-left-[8px] top-1 z-10 shadow-[0_0_15px_#00c16a]"></div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Rozruch i EMS
              </h3>
<p className="text-sm text-slate-400 font-light">
                Konfiguracja algorytmów Voltop OS, testy wydajnościowe i oddanie
                systemu do pracy ciągłej.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative border-t border-white/5 bg-slate-900/30" id="finansowanie">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-5xl tracking-tighter font-medium mb-6 text-white">
            Elastyczne finansowanie
          </h2>
<p className="text-slate-400 font-light leading-relaxed">
            Zrealizuj swoją inwestycję w systemy magazynowania energii bez
            obciążania bieżącego budżetu. Oferujemy różnorodne modele
            finansowania dostosowane do Twoich potrzeb.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="glass-card p-8 rounded-2xl reveal group">
<div className="w-12 h-12 rounded-xl bg-[#00c16a]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-[#00c16a]" icon="solar:banknotes-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Zakup na kredyt
            </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
              Współpracujemy z wiodącymi instytucjami finansowymi, oferując
              dedykowane kredyty na transformację energetyczną na dogodnych
              warunkach.
            </p>
</div>
<div className="glass-card p-8 rounded-2xl reveal reveal-delay-1 group">
<div className="w-12 h-12 rounded-xl bg-[#00c16a]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-[#00c16a]" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Leasing
            </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
              Optymalizacja podatkowa i minimalne zaangażowanie kapitału
              własnego. Korzystne warunki leasingu operacyjnego dla
              przedsiębiorstw.
            </p>
</div>
<div className="glass-card p-8 rounded-2xl reveal reveal-delay-2 group">
<div className="w-12 h-12 rounded-xl bg-[#00c16a]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-[#00c16a]" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Raty
            </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
              Rozłóż koszty inwestycji na dogodne raty. Oszczędności generowane
              przez magazyn energii będą w dużej części pokrywać miesięczne
              zobowiązania.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="kontakt">
<div className="absolute inset-0 bg-[#00c16a] mix-blend-overlay opacity-5 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00c16a]/10 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="glass-card rounded-3xl p-8 md:p-16 border border-[#00c16a]/20 shadow-[0_0_50px_-20px_#00c16a]">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-5xl tracking-tighter font-medium mb-6 text-white">
                Gotowy na niezależność?
              </h2>
<p className="text-slate-400 font-light mb-8">
                Zostaw dane, a nasi inżynierowie przygotują bezpłatną analizę
                ROI dla Twojego przedsiębiorstwa w ciągu 48 godzin.
              </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-medium">
                    kontakt@voltop-energy.pl
                  </div>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-medium">+48 22 123 45 67</div>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">
                    Imię i nazwisko
                  </label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00c16a]/50 transition-colors" placeholder="Jan Kowalski" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">
                    Firma
                  </label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00c16a]/50 transition-colors" placeholder="Nazwa firmy" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">
                  Adres E-mail
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00c16a]/50 transition-colors" placeholder="jan@firma.pl" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">
                  Miesięczne zużycie (MWh)
                </label>

<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-300 appearance-none focus:outline-none focus:border-[#00c16a]/50 transition-colors">
<option className="bg-slate-900">Mniej niż 50 MWh</option>
<option className="bg-slate-900">50 - 200 MWh</option>
<option className="bg-slate-900">Powyżej 200 MWh</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-[#00c16a] text-slate-950 mt-4 px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#00a85c] transition-all shadow-[0_0_20px_rgba(0,193,106,0.2)]" type="button">
                Wyślij zapytanie
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl tracking-tighter font-semibold text-white flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-[#00c16a] text-2xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
              VOLTOP
            </a>
<p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm mb-6">
              Lider w dostarczaniu zaawansowanych systemów magazynowania energii
              dla przemysłu i sektora OZE.
            </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5" href="#">
<iconify-icon icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5" href="#">
<iconify-icon icon="solar:link-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Rozwiązania</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li>
<a className="hover:text-[#00c16a] transition-colors" href="dla-przemyslu.html">
                  Dla Przemysłu
                </a>
</li>
<li>
<a className="hover:text-[#00c16a] transition-colors" href="dla-farm-pv.html">
                  Dla Farm PV
                </a>
</li>
<li>
<a className="hover:text-[#00c16a] transition-colors" href="#">
                  Voltex OS (EMS)
                </a>
</li>
<li>
<a className="hover:text-[#00c16a] transition-colors" href="#">
                  Mikrosieci
                </a>
</li>
<li>
<a className="hover:text-[#00c16a] transition-colors" href="#finansowanie">
                  Finansowanie
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Firma</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li>
<a className="hover:text-[#00c16a] transition-colors" href="o-nas.html">
                  O nas
                </a>
</li>
<li>
<a className="hover:text-[#00c16a] transition-colors" href="#">
                  Kariera
                </a>
</li>
<li>
<a className="hover:text-[#00c16a] transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-[#00c16a] transition-colors" href="#">
                  Kontakt
                </a>
</li>
</ul>
</div>
<div className="col-span-2 md:col-span-4 lg:col-span-1">
<h4 className="text-white font-medium text-sm mb-4">Newsletter</h4>
<p className="text-xs text-slate-500 mb-4 font-light">
              Nowości technologiczne i zmiany prawne z rynku energii.
            </p>
<div className="flex gap-2">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00c16a]/50" placeholder="E-mail" type="email"/>
<button className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg border border-white/5 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500 font-light">
            © 2024 Voltop Energy Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
<div className="flex gap-6 text-xs text-slate-500 font-light">
<a className="hover:text-white transition-colors" href="#">
              Polityka Prywatności
            </a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
