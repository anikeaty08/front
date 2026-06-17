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



      // Intersection Observer for scroll animations
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(el => {
              observer.observe(el);
          });
      });

      // FAQ Accordion Logic
      document.querySelectorAll('.faq-item').forEach(item => {
          item.addEventListener('click', () => {
              const isActive = item.classList.contains('faq-active');
              // Close all
              document.querySelectorAll('.faq-item').forEach(el => {
                  el.classList.remove('faq-active');
              });
              // Open clicked if it wasn't active
              if (!isActive) {
                  item.classList.add('faq-active');
              }
          });
      });

      // Modal Logic
      const modal = document.getElementById('contact-modal');
      const modalContent = document.getElementById('modal-content');
      const openBtns = document.querySelectorAll('.open-modal');
      const closeBtn = document.getElementById('close-modal');

      function openModal() {
          modal.classList.remove('hidden');
          // Small delay to allow display:block to apply before animating opacity
          setTimeout(() => {
              modal.classList.remove('opacity-0');
              modalContent.classList.remove('scale-95');
          }, 10);
          document.body.style.overflow = 'hidden';
      }

      function closeModal() {
          modal.classList.add('opacity-0');
          modalContent.classList.add('scale-95');
          setTimeout(() => {
              modal.classList.add('hidden');
              document.body.style.overflow = '';
          }, 300);
      }

      openBtns.forEach(btn => btn.addEventListener('click', (e) => {
          e.preventDefault();
          openModal();
      }));
      closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
          if (e.target === modal) closeModal();
      });

      // Form Submission Logic
      const form = document.getElementById('contact-form');
      const submitBtn = document.getElementById('submit-btn');

      form.addEventListener('submit', async (e) => {
          e.preventDefault();

          const formData = new FormData(form);
          const data = Object.fromEntries(formData);
          const originalBtnText = submitBtn.innerHTML;

          submitBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon> Wysyłanie...';
          submitBtn.disabled = true;
          submitBtn.classList.add('opacity-70');

          try {
              // Post to Make.com Webhook
              await fetch('https://hook.eu1.make.com/rqbftnenv579a4ntg8si8hmhqo8g3fqk', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
              });

              // Redirect to Zencal
              const params = new URLSearchParams({
                  email: data.email,
                  full_name: data.full_name,
                  phone: data.phone
              });
              window.location.href = `https://app.zencal.io/o/piotr-stefankiewicz/stefankiewiczai/konsultacja?${params.toString()}`;

          } catch (error) {
              console.error('Error submitting form:', error);
              submitBtn.innerHTML = 'Wystąpił błąd. Spróbuj ponownie.';
              setTimeout(() => {
                  submitBtn.innerHTML = originalBtnText;
                  submitBtn.disabled = false;
                  submitBtn.classList.remove('opacity-70');
              }, 3000);
          }
      });

      // Three.js Animated Node Graph Logic
      function initThreeJS() {
          const canvasContainer = document.getElementById('three-canvas');
          if (!canvasContainer) return;

          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(60, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);

          const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
          renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
          renderer.setPixelRatio(window.devicePixelRatio);
          canvasContainer.appendChild(renderer.domElement);

          // Create a complex wireframe shape to represent nodes/network
          const geometry = new THREE.IcosahedronGeometry(4, 2);

          // Edges (Tubes)
          const wireframeMaterial = new THREE.LineBasicMaterial({
              color: 0x0047AB,
              transparent: true,
              opacity: 0.4
          });
          const wireframe = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), wireframeMaterial);
          scene.add(wireframe);

          // Nodes (Points)
          const pointsMaterial = new THREE.PointsMaterial({
              color: 0x00FFFF,
              size: 0.1,
              transparent: true,
              opacity: 0.8
          });
          const points = new THREE.Points(geometry, pointsMaterial);
          scene.add(points);

          camera.position.z = 8;

          // Mouse parallax effect
          let mouseX = 0;
          let mouseY = 0;
          let targetX = 0;
          let targetY = 0;

          const windowHalfX = window.innerWidth / 2;
          const windowHalfY = window.innerHeight / 2;

          document.addEventListener('mousemove', (event) => {
              mouseX = (event.clientX - windowHalfX) * 0.0005;
              mouseY = (event.clientY - windowHalfY) * 0.0005;
          });

          // Animation Loop
          function animate() {
              requestAnimationFrame(animate);

              targetX = mouseX * 2;
              targetY = mouseY * 2;

              // Smooth rotation + parallax
              wireframe.rotation.x += 0.001 + (targetY - wireframe.rotation.x) * 0.02;
              wireframe.rotation.y += 0.002 + (targetX - wireframe.rotation.y) * 0.02;

              points.rotation.x = wireframe.rotation.x;
              points.rotation.y = wireframe.rotation.y;

              // Subtle scaling for "pulse" effect
              const time = Date.now() * 0.001;
              const scale = 1 + Math.sin(time * 2) * 0.02;
              wireframe.scale.set(scale, scale, scale);
              points.scale.set(scale, scale, scale);

              renderer.render(scene, camera);
          }

          animate();

          // Handle Resize
          window.addEventListener('resize', () => {
              if(canvasContainer.clientWidth === 0) return;
              camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
          });
      }

      // Initialize Three.js after load
      window.addEventListener('load', initThreeJS);
    
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
      

<div className="bg-[#0047AB] text-white px-4 py-3 z-50 relative flex justify-center items-center text-xs sm:text-sm font-medium" id="top-bar">
<span className="text-center w-full max-w-4xl pr-6">
        Bezpłatna konsultacja dla gabinetów medycznych — sprawdź ile tracisz
        Twój gabinet
      </span>
<button aria-label="Zamknij" className="absolute right-4 text-white hover:text-blue-200 transition-colors" onclick="document.getElementById('top-bar').style.display='none'">
<iconify-icon className="text-lg" icon="solar:close-linear"></iconify-icon>
</button>
</div>

<nav className="sticky top-0 z-40 bg-[#000000]/80 backdrop-blur-md border-b border-white/5 w-full">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 text-[#0047AB]" href="#">
<iconify-icon className="text-2xl" icon="solar:git-merge-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-xl uppercase text-white">
            Ductly
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#C0C0C0]">
<a className="hover:text-white transition-colors" href="#problemy">
            Problemy
          </a>
<a className="hover:text-white transition-colors" href="#rozwiazanie">
            Rozwiązanie
          </a>
<a className="hover:text-white transition-colors" href="#wyniki">
            Wyniki
          </a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<button className="open-modal bg-[#0047AB] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors">
          Bezpłatna rozmowa
        </button>
</div>
</nav>

<section className="min-h-screen flex items-center relative overflow-hidden py-24">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0047AB] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

<div className="flex flex-col items-start text-left reveal delay-100">
<div className="inline-flex items-center gap-2 border border-[#0047AB]/50 rounded-full px-4 py-1.5 mb-8 bg-[#0047AB]/10">
<span className="text-[#0047AB] text-sm">✦</span>
<span className="text-[#0047AB] text-xs sm:text-sm font-medium">
              Wdrożone w gabinecie w Warszawie — działa od stycznia 2025
            </span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white mb-6">
            Twój gabinet traci pacjentów na rzeczy które może robić maszyna.
          </h1>
<p className="text-base sm:text-lg text-[#C0C0C0] font-medium leading-relaxed mb-10 max-w-lg">
            Budujemy systemy które same przyjmują zapisy od pacjentów,
            przypominają im o wizytach i pilnują dokumentacji — żebyś Ty mógł
            skupić się na leczeniu.
          </p>
<button className="open-modal w-full sm:w-auto bg-[#0047AB] hover:bg-blue-700 text-white px-8 py-4 rounded-md text-sm font-semibold tracking-wide transition-all btn-pulse flex justify-center items-center gap-2 mb-6">
            SPRAWDŹ ILE TRACI TWÓJ GABINET
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-[#C0C0C0]">
<div className="flex items-center gap-1.5">
<span className="text-[#00FF66]">⚡</span>
              Wdrożenie w 7 dni
            </div>
<div className="flex items-center gap-1.5">
<span className="text-[#00FF66]">✓</span>
              Bez zmiany systemów
            </div>
<div className="flex items-center gap-1.5">
<span className="text-[#00FF66]">🔒</span>
              Bez długich umów
            </div>
</div>
</div>

<div className="relative w-full h-full lg:max-w-[650px] mx-auto reveal delay-200 flex items-center justify-center min-h-[400px]">
<style>
            @keyframes moveDotRight{0%{left:0%;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:100%;opacity:0}}
          </style>
<div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-2 py-8">
<div className="hidden md:block absolute top-1/2 left-12 right-12 h-[2px] border-t-2 border-dashed border-[#00FFFF]/40 -translate-y-1/2 z-0">
<div className="absolute top-1/2 -mt-[5px] h-2.5 w-2.5 bg-[#00FFFF] rounded-full shadow-[0_0_15px_#00FFFF] z-0" style={{animation: 'moveDotRight 3s linear infinite'}}></div>
</div>
<div className="z-10 flex flex-col items-center justify-center gap-3 bg-[#0A0A1A] p-4 rounded-xl border border-[#0047AB] w-40 md:w-[140px] min-w-[140px] aspect-square shadow-[0_0_20px_rgba(0,71,171,0.5)]">
<iconify-icon className="text-[32px] text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-[13px] text-center font-semibold text-white leading-tight">
                Pacjent wypełnia ankietę
              </span>
</div>
<div className="z-10 flex flex-col items-center justify-center gap-3 bg-[#0A0A1A] p-4 rounded-xl border border-[#0047AB] w-40 md:w-[140px] min-w-[140px] aspect-square shadow-[0_0_20px_rgba(0,71,171,0.5)]">
<div className="relative">
<iconify-icon className="text-[32px] text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" icon="solar:brain-linear"></iconify-icon>
<iconify-icon className="absolute -bottom-1 -right-2 text-[#00FF66] text-sm animate-pulse" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="text-[13px] text-center font-semibold text-white leading-tight">
                AI weryfikuje
              </span>
</div>
<div className="z-10 flex flex-col items-center justify-center gap-3 bg-[#0A0A1A] p-4 rounded-xl border border-[#0047AB] w-40 md:w-[140px] min-w-[140px] aspect-square shadow-[0_0_20px_rgba(0,71,171,0.5)]">
<iconify-icon className="text-[32px] text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" icon="solar:calendar-linear"></iconify-icon>
<span className="text-[13px] text-center font-semibold text-white leading-tight">
                Wybiera termin
              </span>
</div>
<div className="z-10 flex flex-col items-center justify-center gap-3 bg-[#0A0A1A] p-4 rounded-xl border border-[#0047AB] w-40 md:w-[140px] min-w-[140px] aspect-square shadow-[0_0_20px_rgba(0,71,171,0.5)]">
<iconify-icon className="text-[32px] text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" icon="solar:bell-bing-linear"></iconify-icon>
<span className="text-[13px] text-center font-semibold text-white leading-tight">
                Dostaje przypomnienie SMS
              </span>
</div>
<div className="z-10 flex flex-col items-center justify-center gap-3 bg-[#0A0A1A] p-4 rounded-xl border border-[#0047AB] w-40 md:w-[140px] min-w-[140px] aspect-square shadow-[0_0_20px_rgba(0,71,171,0.5)]">
<iconify-icon className="text-[32px] text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" icon="solar:tablet-linear"></iconify-icon>
<span className="text-[13px] text-center font-semibold text-white leading-tight">
                Podpisuje zgodę cyfrowo
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#030308] border-y border-white/5 overflow-hidden relative py-24">
<div className="absolute left-0 top-0 h-full w-20 sm:w-28 bg-gradient-to-r from-[#030308] to-transparent pointer-events-none z-10"></div>
<div className="absolute right-0 top-0 h-full w-20 sm:w-28 bg-gradient-to-l from-[#030308] to-transparent pointer-events-none z-10"></div>
<div className="max-w-6xl mx-auto px-0">
<div className="marquee group whitespace-nowrap py-4 text-xs sm:text-sm font-medium text-[#C0C0C0]">
<div className="marquee-track inline-flex items-center gap-6 sm:gap-8 will-change-transform">
<span className="text-white/90">⚡ Wdrożone w Warszawie</span>
<span className="text-white/30">·</span>
<span>✓ System działa 24/7</span>
<span className="text-white/30">·</span>
<span>📱 Automatyczne SMS</span>
<span className="text-white/30">·</span>
<span>🤖 Weryfikacja AI</span>
<span className="text-white/30">·</span>
<span>📄 Zero papieru</span>
<span className="text-white/30">·</span>
<span>⭐ Zadowoleni pacjenci</span>
<span className="text-white/30">·</span>
<span className="text-white/90">⚡ Wdrożenie w 7 dni</span>
<span className="text-white/30">·</span>
<span className="text-white/90">⚡ Wdrożone w Warszawie</span>
<span className="text-white/30">·</span>
<span>✓ System działa 24/7</span>
<span className="text-white/30">·</span>
<span>📱 Automatyczne SMS</span>
<span className="text-white/30">·</span>
<span>🤖 Weryfikacja AI</span>
<span className="text-white/30">·</span>
<span>📄 Zero papieru</span>
<span className="text-white/30">·</span>
<span>⭐ Zadowoleni pacjenci</span>
<span className="text-white/30">·</span>
<span className="text-white/90">⚡ Wdrożenie w 7 dni</span>
</div>
</div>
</div>
<style>
        @keyframes ductly-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: ductly-marquee 22s linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
      </style>
</section>
<section className="bg-[#050510] py-24 border-t border-white/5 relative overflow-hidden" id="schemat">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0047AB] rounded-full blur-[220px] opacity-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-14 reveal">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            To jest system który zbudowaliśmy dla gabinetu w Warszawie.
          </h2>
<p className="text-base sm:text-lg text-[#C0C0C0] font-medium max-w-3xl mx-auto">
            Każda strzałka to automatyczny przepływ danych. Zero ręcznej pracy.
          </p>
</div>
<div className="bg-[#0A0A1A] border border-white/5 rounded-2xl p-6 sm:p-10 reveal" id="workflow-diagram">
<div className="w-full overflow-x-auto">
<svg aria-label="Schemat przepływu danych" className="min-w-[980px] w-full h-[420px]" fill="none" role="img" viewbox="0 0 980 420" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter height="200%" id="ductlyGlowBlue" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="12"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter height="200%" id="ductlyGlowCyan" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="8"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<lineargradient id="ductlyPath" x1="0" x2="1" y1="0" y2="0">
<stop offset="0" stop-color="#0047AB" stop-opacity="0.35"></stop>
<stop offset="0.5" stop-color="#00FFFF" stop-opacity="0.6"></stop>
<stop offset="1" stop-color="#0047AB" stop-opacity="0.35"></stop>
</lineargradient>
<circle fill="#00FFFF" filter="url(#ductlyGlowCyan)" id="dot" opacity="0.9" r="4"></circle>
</defs>

<path className="wf-path" d="M 220 110 C 320 110, 350 170, 430 190" opacity="0.9" stroke="url(#ductlyPath)" stroke-dasharray="6 7" strokeWidth="2"></path>
<path className="wf-path" d="M 220 210 C 320 210, 350 210, 430 210" opacity="0.9" stroke="url(#ductlyPath)" stroke-dasharray="6 7" strokeWidth="2"></path>
<path className="wf-path" d="M 220 310 C 320 310, 350 250, 430 230" opacity="0.9" stroke="url(#ductlyPath)" stroke-dasharray="6 7" strokeWidth="2"></path>

<path className="wf-path" d="M 550 190 C 640 170, 690 110, 760 110" opacity="0.9" stroke="url(#ductlyPath)" stroke-dasharray="6 7" strokeWidth="2"></path>
<path className="wf-path" d="M 550 210 C 640 210, 690 185, 760 185" opacity="0.9" stroke="url(#ductlyPath)" stroke-dasharray="6 7" strokeWidth="2"></path>
<path className="wf-path" d="M 550 230 C 640 250, 690 285, 760 285" opacity="0.9" stroke="url(#ductlyPath)" stroke-dasharray="6 7" strokeWidth="2"></path>
<path className="wf-path" d="M 550 220 C 650 230, 700 335, 760 335" opacity="0.9" stroke="url(#ductlyPath)" stroke-dasharray="6 7" strokeWidth="2"></path>

<g className="wf-dot">
<use href="#dot"></use>
<animatemotion dur="2.6s" path="M 220 110 C 320 110, 350 170, 430 190" repeatcount="indefinite" rotate="auto"></animatemotion>
</g>
<g className="wf-dot">
<use href="#dot"></use>
<animatemotion begin="0.5s" dur="2.4s" path="M 220 210 C 320 210, 350 210, 430 210" repeatcount="indefinite" rotate="auto"></animatemotion>
</g>
<g className="wf-dot">
<use href="#dot"></use>
<animatemotion begin="1s" dur="2.8s" path="M 220 310 C 320 310, 350 250, 430 230" repeatcount="indefinite" rotate="auto"></animatemotion>
</g>

<g className="wf-dot">
<use href="#dot"></use>
<animatemotion begin="0.2s" dur="2.7s" path="M 550 190 C 640 170, 690 110, 760 110" repeatcount="indefinite" rotate="auto"></animatemotion>
</g>
<g className="wf-dot">
<use href="#dot"></use>
<animatemotion begin="0.7s" dur="2.5s" path="M 550 210 C 640 210, 690 185, 760 185" repeatcount="indefinite" rotate="auto"></animatemotion>
</g>
<g className="wf-dot">
<use href="#dot"></use>
<animatemotion begin="1.1s" dur="2.9s" path="M 550 230 C 640 250, 690 285, 760 285" repeatcount="indefinite" rotate="auto"></animatemotion>
</g>
<g className="wf-dot">
<use href="#dot"></use>
<animatemotion begin="1.4s" dur="3.1s" path="M 550 220 C 650 230, 700 335, 760 335" repeatcount="indefinite" rotate="auto"></animatemotion>
</g>

<g>
<rect fill="#050510" height="70" rx="14" stroke="#0047AB" stroke-opacity="0.55" width="180" x="40" y="75"></rect>
<circle cx="70" cy="110" fill="#0047AB" fillOpacity="0.18" r="18" stroke="#0047AB" stroke-opacity="0.6"></circle>
<foreignobject height="18" width="18" x="61" y="101">
<div style={{width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} xmlns="http://www.w3.org/1999/xhtml">
<iconify-icon icon="solar:chat-round-dots-linear" style={{color: '#00FFFF', fontSize: '18px'}}></iconify-icon>
</div>
</foreignobject>
<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" font-weight="600" x="96" y="114">
                  Wiadomość WhatsApp
                </text>
</g>
<g>
<rect fill="#050510" height="70" rx="14" stroke="#0047AB" stroke-opacity="0.55" width="180" x="40" y="175"></rect>
<circle cx="70" cy="210" fill="#0047AB" fillOpacity="0.18" r="18" stroke="#0047AB" stroke-opacity="0.6"></circle>
<foreignobject height="18" width="18" x="61" y="201">
<div style={{width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} xmlns="http://www.w3.org/1999/xhtml">
<iconify-icon icon="solar:document-text-linear" style={{color: '#00FFFF', fontSize: '18px'}}></iconify-icon>
</div>
</foreignobject>
<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" font-weight="600" x="96" y="214">
                  Formularz online
                </text>
</g>
<g>
<rect fill="#050510" height="70" rx="14" stroke="#0047AB" stroke-opacity="0.55" width="180" x="40" y="275"></rect>
<circle cx="70" cy="310" fill="#0047AB" fillOpacity="0.18" r="18" stroke="#0047AB" stroke-opacity="0.6"></circle>
<foreignobject height="18" width="18" x="61" y="301">
<div style={{width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} xmlns="http://www.w3.org/1999/xhtml">
<iconify-icon icon="solar:letter-linear" style={{color: '#00FFFF', fontSize: '18px'}}></iconify-icon>
</div>
</foreignobject>
<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" font-weight="600" x="96" y="314">
                  Email od pacjenta
                </text>
</g>

<g className="wf-center" id="wf-center">
<circle cx="490" cy="210" fill="#0047AB" fillOpacity="0.18" filter="url(#ductlyGlowBlue)" r="94" stroke="#00FFFF" stroke-opacity="0.55" strokeWidth="2">
<circle cx="490" cy="210" fill="#0A0A1A" r="70" stroke="#0047AB" stroke-opacity="0.7">
<foreignobject height="48" width="48" x="466" y="186">
<div style={{width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} xmlns="http://www.w3.org/1999/xhtml">
<iconify-icon icon="solar:cpu-linear" style={{color: '#00FFFF', fontSize: '44px', filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.7))'}}></iconify-icon>
</div>
</foreignobject>
<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="14" font-weight="600" text-anchor="middle" x="490" y="325">
                      System AI Ductly
                    </text>
<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="12" font-weight="500" text-anchor="middle" x="490" y="345">
                      Analizuje · Decyduje · Wysyła
                    </text>
</circle>
</circle>
</g>

<g>
<rect fill="#050510" height="70" rx="14" stroke="#00FF66" stroke-opacity="0.5" width="180" x="760" y="75"></rect>
<circle cx="790" cy="110" fill="#00FF66" fillOpacity="0.12" r="18" stroke="#00FF66" stroke-opacity="0.55"></circle>
<foreignobject height="18" width="18" x="781" y="101">
<div style={{width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} xmlns="http://www.w3.org/1999/xhtml">
<iconify-icon icon="solar:calendar-linear" style={{color: '#00FF66', fontSize: '18px'}}></iconify-icon>
</div>
</foreignobject>
<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" font-weight="600" x="816" y="114">
                  Termin w kalendarzu
                </text>
</g>
<g>
<rect fill="#050510" height="70" rx="14" stroke="#00FF66" stroke-opacity="0.5" width="180" x="760" y="150"></rect>
<circle cx="790" cy="185" fill="#00FF66" fillOpacity="0.12" r="18" stroke="#00FF66" stroke-opacity="0.55"></circle>
<foreignobject height="18" width="18" x="781" y="176">
<div style={{width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} xmlns="http://www.w3.org/1999/xhtml">
<iconify-icon icon="solar:bell-bing-linear" style={{color: '#00FF66', fontSize: '18px'}}></iconify-icon>
</div>
</foreignobject>
<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" font-weight="600" x="816" y="189">
                  SMS do pacjenta
                </text>
</g>
<g>
<rect fill="#050510" height="70" rx="14" stroke="#00FF66" stroke-opacity="0.5" width="180" x="760" y="250"></rect>
<circle cx="790" cy="285" fill="#00FF66" fillOpacity="0.12" r="18" stroke="#00FF66" stroke-opacity="0.55"></circle>
<foreignobject height="18" width="18" x="781" y="276">
<div style={{width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} xmlns="http://www.w3.org/1999/xhtml">
<iconify-icon icon="solar:documents-linear" style={{color: '#00FF66', fontSize: '18px'}}></iconify-icon>
</div>
</foreignobject>
<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" font-weight="600" x="816" y="289">
                  Karta w kartotece
                </text>
</g>
<g>
<rect fill="#050510" height="70" rx="14" stroke="#00FF66" stroke-opacity="0.5" width="180" x="760" y="300"></rect>
<circle cx="790" cy="335" fill="#00FF66" fillOpacity="0.12" r="18" stroke="#00FF66" stroke-opacity="0.55"></circle>
<foreignobject height="18" width="18" x="781" y="326">
<div style={{width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} xmlns="http://www.w3.org/1999/xhtml">
<iconify-icon icon="solar:star-bold" style={{color: '#00FF66', fontSize: '18px'}}></iconify-icon>
</div>
</foreignobject>
<text fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" font-weight="600" x="816" y="339">
                  Prośba o opinię Google
                </text>
</g>
</svg>
</div>
<div className="mt-10 flex flex-col items-center gap-5">
<div className="w-full bg-[#0047AB]/10 border border-[#0047AB]/40 rounded-xl px-6 py-5 text-center">
<p className="text-sm sm:text-base text-white font-medium">
                Ten sam system możemy uruchomić w Twoim gabinecie w 7 dni.
              </p>
</div>
<button className="open-modal w-full sm:w-auto bg-[#0047AB] hover:bg-blue-700 text-white px-10 py-4 rounded-md text-sm sm:text-base font-semibold tracking-wide transition-all btn-pulse flex justify-center items-center gap-2">
              UMÓW BEZPŁATNĄ ROZMOWĘ
              <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<style>
            @keyframes wfCenterPulse { 0%,100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(0,255,255,0.25)); } 50% { transform: scale(1.02); filter: drop-shadow(0 0 18px rgba(0,255,255,0.55)); } }
            #workflow-diagram .wf-center { transform-origin: 490px 210px; animation: wfCenterPulse 2.6s ease-in-out infinite; }
            #workflow-diagram:hover .wf-center { animation-duration: 1.6s; filter: drop-shadow(0 0 26px rgba(0,255,255,0.85)); }
            #workflow-diagram .wf-path { transition: opacity 220ms ease, filter 220ms ease; }
            #workflow-diagram:hover .wf-path { opacity: 1; filter: url(#ductlyGlowCyan); }
          </style>
</div>
</div>
</section>
<section className="bg-[#050510] py-24 border-t border-white/5" id="problemy">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center sm:text-left mb-16 reveal delay-100">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Czy to brzmi znajomo?
          </h2>
<p className="text-base sm:text-lg text-[#C0C0C0] font-medium max-w-2xl">
            To są problemy które słyszymy najczęściej od właścicieli gabinetów w
            Polsce.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="bg-[#0A0A1A] border-l-[3px] border-[#EF4444] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#EF4444] text-3xl mb-4 icon-shake" icon="solar:phone-calling-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Telefon nie przestaje dzwonić
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Recepcja odbiera telefony i jednocześnie obsługuje pacjenta. Ktoś
              się rozłącza — idzie do konkurencji.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#EF4444] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#EF4444] text-3xl mb-4 icon-shake" icon="solar:calendar-broken-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Puste fotele przez zapomnienie
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Pacjent nie przyszedł i nie odwołał. Straciłeś slot wart kilkaset
              złotych. Codziennie.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#EF4444] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#EF4444] text-3xl mb-4 icon-shake" icon="solar:user-cross-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Stali pacjenci nie wracają
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Wyszedł ze zleceniem kontroli za 3 miesiące — i zniknął. Nikt nie
              przypomniał. Pacjent przepadł.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#EF4444] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#EF4444] text-3xl mb-4 icon-shake" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Papier, teczki, ręczne przepisywanie
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Zgody drukowane, podpisywane, skanowane. Dane wpisywane ręcznie.
              To samo dla każdego pacjenta.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#EF4444] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#EF4444] text-3xl mb-4 icon-shake" icon="solar:star-fall-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Opinie bez odpowiedzi
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Pacjenci piszą opinie na Google i Znany Lekarz. Nie ma czasu
              reagować. Nowi pacjenci wybierają konkurencję.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#EF4444] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#EF4444] text-3xl mb-4 icon-shake" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Lekarz traci czas na papierkową robotę
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Opis wizyty, zalecenia, wpis do karty — po każdym pacjencie. To
              5-10 minut które można odzyskać.
            </p>
</div>
</div>

<div className="bg-red-900/10 border border-[#EF4444]/30 rounded-lg p-6 sm:p-8 text-center reveal">
<p className="text-sm sm:text-base text-red-200 font-medium leading-relaxed">
            Szacowany koszt tych problemów dla gabinetu przyjmującego 15
            pacjentów dziennie:
            <br/>
<span className="text-lg sm:text-xl font-semibold text-white mt-2 block tracking-tight">
              2 000 – 4 000 PLN miesięcznie w zmarnowanym czasie i utraconych
              pacjentach.
            </span>
</p>
</div>
</div>
</section>

<section className="bg-[#000000] py-24 relative overflow-hidden" id="rozwiazanie">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0047AB] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Sześć problemów. Sześć gotowych rozwiązań.
          </h2>
<p className="text-base sm:text-lg text-[#C0C0C0] font-medium max-w-2xl mx-auto">
            Każde wdrożenie jest zbudowane pod Twój gabinet — nie z półki, nie
            generyczne.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#0A0A1A] border-l-[3px] border-[#0047AB] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#0047AB] text-3xl mb-4" icon="solar:smartphone-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Rejestracja 24/7 bez telefonu
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Pacjenci zapisują się sami przez WhatsApp, formularz lub SMS — o
              każdej porze. Recepcja przestaje być sekretarką telefoniczną.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#0047AB] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#0047AB] text-3xl mb-4" icon="solar:calendar-mark-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              System który wypełnia puste fotele
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Gdy pacjent odwołuje — system automatycznie oferuje termin
              pierwszej osobie z listy oczekujących. Zero zmarnowanych slotów.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#0047AB] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#0047AB] text-3xl mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Automatyczny follow-up po wizycie
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              System sam przypomina o kontroli w odpowiednim czasie.
              Spersonalizowana wiadomość — nie masowy mailing.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#0047AB] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#0047AB] text-3xl mb-4" icon="solar:tablet-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Cyfrowa dokumentacja na tablecie
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Zgody i karty podpisywane elektronicznie. Dane automatycznie w
              kartotece. Koniec z drukowaniem i skanowaniem.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#0047AB] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#0047AB] text-3xl mb-4" icon="solar:star-circle-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Zarządzanie opiniami Google
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Po każdej wizycie pacjent dostaje prośbę o opinię. System
              monitoruje nowe opinie i przygotowuje gotową odpowiedź do
              zatwierdzenia.
            </p>
</div>

<div className="bg-[#0A0A1A] border-l-[3px] border-[#0047AB] p-8 rounded-r-xl reveal min-h-[200px]">
<iconify-icon className="text-[#0047AB] text-3xl mb-4" icon="solar:cpu-linear"></iconify-icon>
<h3 className="text-[18px] font-semibold text-white mb-3">
              Asystent AI dla lekarza
            </h3>
<p className="text-[15px] text-[#C0C0C0] font-medium leading-relaxed">
              Lekarz mówi 3 zdania po wizycie — system generuje gotowy wpis do
              karty pacjenta i zalecenia dla pacjenta. Oszczędza 5-10 minut na
              każdej wizycie.
            </p>
</div>
</div>
</div>
</section>
<section className="bg-[#050510] py-24 border-t border-white/5 relative overflow-hidden" id="porownanie">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Gotowe programy są dla wszystkich. My budujemy dla Ciebie.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-sm sm:text-base">

<div className="bg-[#0A0A1A] p-6 sm:p-8 rounded-2xl border border-white/5 reveal">
<h3 className="text-xl font-semibold text-white mb-6 text-center">
              Gotowy program
            </h3>
<ul className="flex flex-col gap-4 text-[#C0C0C0] font-medium">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#EF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Jeden rozmiar dla wszystkich</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#EF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Płacisz za funkcje których nie używasz</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#EF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Wsparcie przez ticket system</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#EF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Wdrożenie trwa miesiące</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#EF4444] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Nie integruje się z Twoim systemem</span>
</li>
</ul>
</div>

<div className="bg-[#0A0A1A] p-6 sm:p-8 rounded-2xl border-2 border-[#0047AB] shadow-[0_0_30px_rgba(0,71,171,0.15)] relative reveal delay-100 transform md:-translate-y-2">
<h3 className="text-xl font-semibold text-white mb-6 text-center">
              Ductly
            </h3>
<ul className="flex flex-col gap-4 text-white font-medium">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00FF66] text-2xl shrink-0 drop-shadow-[0_0_8px_rgba(0,255,102,0.4)]" icon="solar:check-circle-bold"></iconify-icon>
<span className="mt-0.5">Zbudowane pod Twój gabinet</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00FF66] text-2xl shrink-0 drop-shadow-[0_0_8px_rgba(0,255,102,0.4)]" icon="solar:check-circle-bold"></iconify-icon>
<span className="mt-0.5">Płacisz tylko za to co potrzebujesz</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00FF66] text-2xl shrink-0 drop-shadow-[0_0_8px_rgba(0,255,102,0.4)]" icon="solar:check-circle-bold"></iconify-icon>
<span className="mt-0.5">Bezpośredni kontakt z twórcą</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00FF66] text-2xl shrink-0 drop-shadow-[0_0_8px_rgba(0,255,102,0.4)]" icon="solar:check-circle-bold"></iconify-icon>
<span className="mt-0.5">Pierwsze efekty w 7 dni</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00FF66] text-2xl shrink-0 drop-shadow-[0_0_8px_rgba(0,255,102,0.4)]" icon="solar:check-circle-bold"></iconify-icon>
<span className="mt-0.5">Integruje się z tym co już masz</span>
</li>
</ul>
</div>

<div className="bg-[#0A0A1A] p-6 sm:p-8 rounded-2xl border border-white/5 reveal delay-200">
<h3 className="text-xl font-semibold text-white mb-6 text-center">
              Efekt
            </h3>
<ul className="flex flex-col gap-4 text-[#C0C0C0] font-medium">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0047AB] text-xl shrink-0 mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span>System który rozumie Twój proces</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0047AB] text-xl shrink-0 mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span>Niższy koszt, wyższy zwrot</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0047AB] text-xl shrink-0 mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span>Szybka reakcja na problemy</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0047AB] text-xl shrink-0 mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span>Działasz szybciej niż konkurencja</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0047AB] text-xl shrink-0 mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span>Zero nauki nowych narzędzi</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="bg-[#030308] py-24 border-t border-white/5 relative overflow-hidden" id="praktyka">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Jak to działa w praktyce?
          </h2>
<p className="text-base sm:text-lg text-[#C0C0C0] font-medium max-w-2xl mx-auto">
            Porównaj obecny proces z tym, co zyskasz po automatyzacji.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
<div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8 lg:p-12 relative reveal">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full blur-[80px] opacity-20"></div>
<h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
<span className="text-red-500 bg-red-500/10 px-3 py-1 rounded-md text-sm">
                PRZED
              </span>
              Chaos i marnowanie czasu
            </h3>
<div className="flex flex-col gap-[24px]">
<div className="flex items-start gap-4">
<iconify-icon className="text-red-500 text-3xl shrink-0 icon-shake" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<div className="text-[16px] font-bold text-white mb-1">
                    Kontakt
                  </div>
<div className="text-[14px] text-[#C0C0C0]">
                    Telefony dzwonią w trakcie obsługi innych pacjentów. Część
                    połączeń przepada.
                  </div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-red-500 text-3xl shrink-0 icon-shake" icon="solar:documents-linear"></iconify-icon>
<div>
<div className="text-[16px] font-bold text-white mb-1">
                    Weryfikacja
                  </div>
<div className="text-[14px] text-[#C0C0C0]">
                    Ręczne zbieranie wywiadu, brak pewności czy pacjent się
                    kwalifikuje przed przyjazdem.
                  </div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-red-500 text-3xl shrink-0 icon-shake" icon="solar:calendar-broken-linear"></iconify-icon>
<div>
<div className="text-[16px] font-bold text-white mb-1">
                    Termin
                  </div>
<div className="text-[14px] text-[#C0C0C0]">
                    Szukanie wolnego miejsca w kalendarzu przez telefon, częste
                    pomyłki i nieporozumienia.
                  </div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-red-500 text-3xl shrink-0 icon-shake" icon="solar:pen-new-square-linear"></iconify-icon>
<div>
<div className="text-[16px] font-bold text-white mb-1">
                    Dokumenty
                  </div>
<div className="text-[14px] text-[#C0C0C0]">
                    Drukowanie zgód, ręczne podpisywanie, skanowanie i
                    przepisywanie danych do systemu.
                  </div>
</div>
</div>
</div>
</div>
<div className="bg-blue-950/20 border border-blue-500/20 rounded-2xl p-8 lg:p-12 relative reveal delay-100">
<div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
<h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
<span className="text-[#00FF66] bg-[#00FF66]/10 px-3 py-1 rounded-md text-sm">
                PO
              </span>
              Płynna automatyzacja
            </h3>
<div className="flex flex-col gap-[24px]">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#00FF66] text-3xl shrink-0 pulse-green" icon="solar:check-circle-bold"></iconify-icon>
<div>
<div className="text-[16px] font-bold text-white mb-1">
                    Kontakt
                  </div>
<div className="text-[14px] text-[#C0C0C0]">
                    Pacjent wypełnia prosty formularz online 24/7. Zero
                    nieodebranych połączeń.
                  </div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#00FF66] text-3xl shrink-0 pulse-green" icon="solar:check-circle-bold"></iconify-icon>
<div>
<div className="text-[16px] font-bold text-white mb-1">
                    Weryfikacja
                  </div>
<div className="text-[14px] text-[#C0C0C0]">
                    System AI sam sprawdza kwalifikację pacjenta i odsiewa
                    nieodpowiednie przypadki.
                  </div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#00FF66] text-3xl shrink-0 pulse-green" icon="solar:check-circle-bold"></iconify-icon>
<div>
<div className="text-[16px] font-bold text-white mb-1">
                    Termin
                  </div>
<div className="text-[14px] text-[#C0C0C0]">
                    Pacjent sam wybiera termin z dostępnych slotów i dostaje
                    automatyczne przypomnienie.
                  </div>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#00FF66] text-3xl shrink-0 pulse-green" icon="solar:check-circle-bold"></iconify-icon>
<div>
<div className="text-[16px] font-bold text-white mb-1">
                    Dokumenty
                  </div>
<div className="text-[14px] text-[#C0C0C0]">
                    Tablet czeka w gabinecie. Cyfrowy podpis, a dane same lądują
                    w kartotece pacjenta.
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
<style>
        @keyframes pulse-green{0%,100%{transform:scale(1);filter:drop-shadow(0 0 5px rgba(0,255,102,0.4))}50%{transform:scale(1.05);filter:drop-shadow(0 0 15px rgba(0,255,102,0.8))}}.pulse-green{animation:pulse-green 2s infinite ease-in-out}
      </style>
</section>

<section className="bg-[#030308] py-24 border-t border-white/5" id="wyniki">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Wyniki z prawdziwego gabinetu
          </h2>
<p className="text-base sm:text-lg text-[#C0C0C0] font-medium">
            Gabinet medycyny estetycznej, Warszawa — wdrożenie styczeń 2025
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-[#0A0A1A] rounded-2xl p-8 border border-[#0047AB]/20 text-center shadow-[0_0_30px_rgba(0,71,171,0.05)] reveal delay-100 hover:border-[#0047AB]/50 transition-colors">
<div className="text-[64px] font-bold text-[#0047AB] tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(0,71,171,0.5)] leading-none">
              2 godz.
            </div>
<p className="text-base text-[#C0C0C0] font-medium">
              odzyskane dziennie przez recepcję i właścicielkę
            </p>
</div>

<div className="bg-[#0A0A1A] rounded-2xl p-8 border border-[#0047AB]/20 text-center shadow-[0_0_30px_rgba(0,71,171,0.05)] reveal delay-200 hover:border-[#0047AB]/50 transition-colors">
<div className="text-[64px] font-bold text-[#0047AB] tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(0,71,171,0.5)] leading-none">
              Puste fotele → 0
            </div>
<p className="text-base text-[#C0C0C0] font-medium">
              w ciągu pierwszego miesiąca po wdrożeniu
            </p>
</div>

<div className="bg-[#0A0A1A] rounded-2xl p-8 border border-[#0047AB]/20 text-center shadow-[0_0_30px_rgba(0,71,171,0.05)] reveal delay-300 hover:border-[#0047AB]/50 transition-colors">
<div className="text-[64px] font-bold text-[#0047AB] tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(0,71,171,0.5)] leading-none">
              7 dni
            </div>
<p className="text-base text-[#C0C0C0] font-medium">
              od pierwszej rozmowy do działającego systemu
            </p>
</div>
</div>

<div className="bg-[#0A0A1A] border-l-4 border-[#0047AB] p-8 sm:p-12 rounded-r-2xl relative reveal">
<iconify-icon className="absolute top-6 right-8 text-4xl text-[#0047AB]/20" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-lg sm:text-xl text-white font-medium leading-relaxed italic mb-8 max-w-4xl relative z-10">
            "Przestałam być recepcjonistką we własnym gabinecie. Telefon
            przestał dzwonić co 10 minut. Pacjenci sami się zapisują, sami
            dostają przypomnienia — a ja mam czas żeby skupić się na tym co
            ważne."
          </p>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<span className="text-sm font-semibold text-[#C0C0C0]">
              — Grażyna, właścicielka gabinetu medycyny estetycznej, Warszawa
            </span>
<div className="flex text-yellow-500 gap-1">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#000000] py-24 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Dla jakich gabinetów to działa?
          </h2>
<p className="text-base sm:text-lg text-[#C0C0C0] font-medium max-w-2xl mx-auto">
            Jeśli przyjmujesz pacjentów i masz powtarzalny proces rejestracji —
            ten system zadziała u Ciebie w 7 dni.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
<div className="bg-[#0A0A1A] p-6 rounded-xl border border-white/5 hover:border-[#0047AB] transition-colors flex flex-col items-center justify-center text-center gap-3 reveal">
<iconify-icon className="text-3xl text-[#0047AB]" icon="solar:tooth-linear"></iconify-icon>
<span className="text-sm font-semibold text-white">Stomatologia</span>
</div>
<div className="bg-[#0A0A1A] p-6 rounded-xl border border-white/5 hover:border-[#0047AB] transition-colors flex flex-col items-center justify-center text-center gap-3 reveal">
<iconify-icon className="text-3xl text-[#0047AB]" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-sm font-semibold text-white">
              Medycyna estetyczna
            </span>
</div>
<div className="bg-[#0A0A1A] p-6 rounded-xl border border-white/5 hover:border-[#0047AB] transition-colors flex flex-col items-center justify-center text-center gap-3 reveal">
<iconify-icon className="text-3xl text-[#0047AB]" icon="solar:bone-linear"></iconify-icon>
<span className="text-sm font-semibold text-white">Fizjoterapia</span>
</div>
<div className="bg-[#0A0A1A] p-6 rounded-xl border border-white/5 hover:border-[#0047AB] transition-colors flex flex-col items-center justify-center text-center gap-3 reveal">
<iconify-icon className="text-3xl text-[#0047AB]" icon="solar:droplet-linear"></iconify-icon>
<span className="text-sm font-semibold text-white">Dermatologia</span>
</div>
<div className="bg-[#0A0A1A] p-6 rounded-xl border border-white/5 hover:border-[#0047AB] transition-colors flex flex-col items-center justify-center text-center gap-3 reveal">
<iconify-icon className="text-3xl text-[#0047AB]" icon="solar:emoji-funny-circle-linear"></iconify-icon>
<span className="text-sm font-semibold text-white">Psychologia</span>
</div>
<div className="bg-[#0A0A1A] p-6 rounded-xl border border-white/5 hover:border-[#0047AB] transition-colors flex flex-col items-center justify-center text-center gap-3 reveal">
<iconify-icon className="text-3xl text-[#0047AB]" icon="solar:women-linear"></iconify-icon>
<span className="text-sm font-semibold text-white">Ginekologia</span>
</div>
<div className="bg-[#0A0A1A] p-6 rounded-xl border border-white/5 hover:border-[#0047AB] transition-colors flex flex-col items-center justify-center text-center gap-3 reveal">
<iconify-icon className="text-3xl text-[#0047AB]" icon="solar:cat-linear"></iconify-icon>
<span className="text-sm font-semibold text-white">Weterynaria</span>
</div>
<div className="bg-[#0A0A1A] p-6 rounded-xl border border-white/5 hover:border-[#0047AB] transition-colors flex flex-col items-center justify-center text-center gap-3 reveal">
<iconify-icon className="text-3xl text-[#0047AB]" icon="solar:clipboard-list-linear"></iconify-icon>
<span className="text-sm font-semibold text-white">
              Każdy gabinet usługowy
            </span>
</div>
</div>
<p className="text-center text-sm text-[#C0C0C0] font-medium reveal">
          Nie musisz zmieniać systemów których już używasz. Integrujemy się z
          tym co masz — Google Calendar, email, CRM.
        </p>
</div>
</section>

<section className="bg-[#050510] py-24 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-12 text-center reveal">
          Masz pytania? Mamy odpowiedzi.
        </h2>
<div className="flex flex-col gap-4 reveal">

<div className="bg-[#0A0A1A] rounded-xl border border-white/5 cursor-pointer faq-item">
<div className="p-6 flex justify-between items-center select-none">
<h3 className="text-base font-semibold text-white">
                Czy muszę zmieniać systemy których używam?
              </h3>
<iconify-icon className="text-white text-xl transition-transform duration-300 faq-icon shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-6 pb-6 text-sm text-[#C0C0C0] font-medium leading-relaxed">
                Nie. Integrujemy się z tym co już masz — Google Calendar, email,
                dowolny CRM. Nic nie zmieniasz.
              </div>
</div>
</div>

<div className="bg-[#0A0A1A] rounded-xl border border-white/5 cursor-pointer faq-item">
<div className="p-6 flex justify-between items-center select-none">
<h3 className="text-base font-semibold text-white">
                Ile czasu zajmuje wdrożenie?
              </h3>
<iconify-icon className="text-white text-xl transition-transform duration-300 faq-icon shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-6 pb-6 text-sm text-[#C0C0C0] font-medium leading-relaxed">
                7 dni. Twój zespół nie robi nic — Ty dajesz nam dostęp do
                narzędzi, my budujemy, testujemy i oddajemy gotowe.
              </div>
</div>
</div>

<div className="bg-[#0A0A1A] rounded-xl border border-white/5 cursor-pointer faq-item">
<div className="p-6 flex justify-between items-center select-none">
<h3 className="text-base font-semibold text-white">
                Co jeśli system przestanie działać?
              </h3>
<iconify-icon className="text-white text-xl transition-transform duration-300 faq-icon shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-6 pb-6 text-sm text-[#C0C0C0] font-medium leading-relaxed">
                Reagujemy w ciągu 2 godzin roboczych. Dostajesz też pełną
                dokumentację — jeśli kiedyś chcesz działać sam, możesz to
                zrobić.
              </div>
</div>
</div>

<div className="bg-[#0A0A1A] rounded-xl border border-white/5 cursor-pointer faq-item">
<div className="p-6 flex justify-between items-center select-none">
<h3 className="text-base font-semibold text-white">
                Ile to kosztuje?
              </h3>
<iconify-icon className="text-white text-xl transition-transform duration-300 faq-icon shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-6 pb-6 text-sm text-[#C0C0C0] font-medium leading-relaxed">
                Wdrożenie to koszt jednorazowy — wyceniamy indywidualnie po
                rozmowie, bo każdy gabinet jest inny. Narzędzia zewnętrzne
                generują niewielki koszt miesięczny, mówimy o tym szczerze przed
                startem.
              </div>
</div>
</div>

<div className="bg-[#0A0A1A] rounded-xl border border-white/5 cursor-pointer faq-item">
<div className="p-6 flex justify-between items-center select-none">
<h3 className="text-base font-semibold text-white">
                Czy to działa dla małego gabinetu jednoosobowego?
              </h3>
<iconify-icon className="text-white text-xl transition-transform duration-300 faq-icon shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-6 pb-6 text-sm text-[#C0C0C0] font-medium leading-relaxed">
                Tak — i właśnie dla takich gabinetów przynosi największy efekt.
                Jedna osoba odzyskuje czas który wcześniej szedł na telefony i
                papiery.
              </div>
</div>
</div>

<div className="bg-[#0A0A1A] rounded-xl border border-white/5 cursor-pointer faq-item">
<div className="p-6 flex justify-between items-center select-none">
<h3 className="text-base font-semibold text-white">
                Czy dane moich pacjentów są bezpieczne?
              </h3>
<iconify-icon className="text-white text-xl transition-transform duration-300 faq-icon shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-6 pb-6 text-sm text-[#C0C0C0] font-medium leading-relaxed">
                Tak. Dane pacjentów zostają na Twoich narzędziach (Google, Twój
                CRM). Działamy zgodnie z RODO. Połączenie szyfrowane HTTPS.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#000000] to-[#001533]">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047AB] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
          Gotowy żeby Twój gabinet przestał tracić pacjentów i czas?
        </h2>
<p className="text-base sm:text-lg text-[#C0C0C0] font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Umów bezpłatną 30-minutową rozmowę. Pokażę Ci dokładnie co możemy
          zautomatyzować w Twoim gabinecie i ile na tym zaoszczędzisz — bez
          żadnych zobowiązań.
        </p>
<button className="open-modal w-full sm:w-auto bg-[#0047AB] hover:bg-blue-700 text-white px-10 py-5 rounded-md text-sm sm:text-base font-semibold tracking-wide transition-all btn-pulse flex justify-center items-center gap-2 mx-auto mb-8">
          UMÓW BEZPŁATNĄ ROZMOWĘ
          <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-medium text-[#C0C0C0]">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#00FF66]" icon="solar:check-circle-linear"></iconify-icon>
            Odpowiadam w ciągu 24h
          </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#00FF66]" icon="solar:check-circle-linear"></iconify-icon>
            Wycena indywidualna
          </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#00FF66]" icon="solar:check-circle-linear"></iconify-icon>
            Pierwsze efekty w 7 dni
          </div>
</div>
</div>
</section>

<footer className="bg-[#000000] border-t border-white/5 py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#C0C0C0] font-medium">
<div className="flex items-center gap-2 text-[#0047AB]">
<iconify-icon className="text-xl" icon="solar:git-merge-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg uppercase text-white">
            Ductly
          </span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
            Polityka Prywatności
          </a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
<div>© 2025 Ductly</div>
</div>
</footer>

<div className="fixed inset-0 z-50 bg-[#000000]/90 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="contact-modal">
<div className="bg-[#0A0A1A] w-full max-w-lg rounded-3xl border border-[#0047AB]/50 shadow-[0_0_30px_rgba(0,71,171,0.2)] p-8 relative transform scale-95 transition-transform duration-300" id="modal-content">
<button className="absolute top-6 right-6 text-[#C0C0C0] hover:text-white transition-colors" id="close-modal">
<iconify-icon className="text-2xl" icon="solar:close-linear"></iconify-icon>
</button>
<h3 className="text-2xl font-semibold text-white mb-2">Porozmawiajmy</h3>
<p className="text-sm text-[#C0C0C0] font-medium mb-8">
          Zostaw kontakt — odezwę się w ciągu 24h.
        </p>
<form className="flex flex-col gap-4" id="contact-form">
<div>
<label className="block text-xs font-semibold text-[#C0C0C0] mb-1.5 uppercase tracking-wide">
              Imię i nazwisko
            </label>
<input className="w-full bg-[#050510] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0047AB] transition-colors placeholder:text-white/20" name="full_name" placeholder="Jan Kowalski" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[#C0C0C0] mb-1.5 uppercase tracking-wide">
              Email
            </label>
<input className="w-full bg-[#050510] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0047AB] transition-colors placeholder:text-white/20" name="email" placeholder="jan@gabinet.pl" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-[#C0C0C0] mb-1.5 uppercase tracking-wide">
              Telefon
            </label>
<input className="w-full bg-[#050510] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0047AB] transition-colors placeholder:text-white/20" name="phone" placeholder="+48 000 000 000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-[#C0C0C0] mb-1.5 uppercase tracking-wide">
              Nazwa gabinetu i specjalizacja
            </label>
<input className="w-full bg-[#050510] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0047AB] transition-colors placeholder:text-white/20" name="clinic" placeholder="Gabinet MedEstetyka" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[#C0C0C0] mb-1.5 uppercase tracking-wide">
              Z czym tracicie najwięcej czasu?
            </label>
<textarea className="w-full bg-[#050510] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0047AB] transition-colors resize-none placeholder:text-white/20" name="problem" placeholder="Telefony dzwonią bez przerwy..." required="" rows="3"></textarea>
</div>
<button className="w-full bg-[#0047AB] hover:bg-blue-700 text-white py-4 rounded-md text-sm font-semibold tracking-wide transition-colors mt-2 flex justify-center items-center gap-2" id="submit-btn" type="submit">
<span>WYŚLIJ I UMÓW ROZMOWĘ</span>
</button>
<p className="text-center text-xs text-[#C0C0C0] mt-2 font-medium">
<iconify-icon className="inline align-middle" icon="solar:lock-password-linear"></iconify-icon>
            Twoje dane są bezpieczne. Nie wysyłamy spamu.
          </p>
</form>
</div>
</div>



    </>
  );
}
