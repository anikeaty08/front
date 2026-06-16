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



      gsap.registerPlugin(ScrollTrigger);

      // ── LOADER ──────────────────────────────────────────────────────────────
      (function() {
        const loader = document.getElementById("loader");
        const prog   = document.getElementById("loader-progress");
        const pct    = document.getElementById("loader-percentage");
        const obj    = { val: 0 };
        gsap.to(obj, {
          val: 100, duration: 1.3, ease: "power2.inOut",
          onUpdate() { if (prog) prog.style.width = obj.val + "%"; if (pct) pct.innerText = Math.round(obj.val) + "%"; },
          onComplete() {
            if (!loader) return;
            loader.classList.add("opacity-0");
            loader.setAttribute("aria-busy", "false");
            setTimeout(() => loader.style.display = "none", 700);
          }
        });
      })();

      // ── NAV ─────────────────────────────────────────────────────────────────
      const mainNav = document.getElementById("mainNav");
      let lastST = 0;
      window.addEventListener("scroll", () => {
        const st = window.pageYOffset;
        mainNav.style.transform = (st > lastST && st > 120) ? "translateY(-140%)" : "translateY(0)";
        lastST = st <= 0 ? 0 : st;
      }, { passive: true });

      document.getElementById("mobileMenuBtn").addEventListener("click", () => document.getElementById("mobileMenu").classList.replace("-translate-y-full","translate-y-0"));
      window.closeMobileMenu = () => document.getElementById("mobileMenu").classList.replace("translate-y-0","-translate-y-full");
      document.getElementById("closeMenuBtn").addEventListener("click", closeMobileMenu);

      window.scrollToSection = function(id) {
        if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      // ── HERO VIDEO SCROLL ────────────────────────────────────────────────────
      (function() {
        const video   = document.getElementById("scrollVideo");
        const stage   = document.getElementById("video-stage");
        const overlays = document.getElementById("heroOverlays");
        const blocks  = document.querySelectorAll(".overlay-block");
        let maxScroll = 1, pending = false, targetTime = 0, seeking = false;

        video.pause();
        video.addEventListener("seeked", () => seeking = false);

        function computeMax() { maxScroll = Math.max(stage.offsetHeight - window.innerHeight, 1); }
        function clamp(v) { return Math.min(1, Math.max(0, v)); }

        function applySync() {
          pending = false;
          const p = clamp(window.scrollY / maxScroll);
          if (video.duration) targetTime = p * video.duration;
          blocks.forEach(b => {
            const inRange = p >= +b.dataset.start && p <= +b.dataset.end;
            b.classList.toggle("opacity-0",  !inRange); b.classList.toggle("scale-95",  !inRange);
            b.classList.toggle("opacity-100", inRange); b.classList.toggle("scale-100", inRange);
            b.classList.toggle("pointer-events-auto", inRange);
          });
          const done = window.scrollY >= maxScroll - 1;
          overlays.classList.toggle("opacity-0", done); overlays.classList.toggle("invisible", done);
        }

        function renderFrame() {
          if (video.readyState >= 2 && !seeking && video.duration && Math.abs(video.currentTime - targetTime) > 0.05) {
            seeking = true; try { video.currentTime = targetTime; } catch(e) { seeking = false; }
          }
          requestAnimationFrame(renderFrame);
        }

        computeMax();
        window.addEventListener("scroll", () => { if (!pending) { pending = true; requestAnimationFrame(applySync); } }, { passive: true });
        window.addEventListener("resize", () => { computeMax(); applySync(); });
        if (video.readyState >= 1) { applySync(); requestAnimationFrame(renderFrame); }
        else video.addEventListener("loadedmetadata", () => { applySync(); requestAnimationFrame(renderFrame); }, { once: true });
        applySync();
      })();

      // ── USP HORIZONTAL SCROLL ────────────────────────────────────────────────
      (function() {
        if (window.innerWidth < 768) return;
        const wrap  = document.getElementById("usp-pin-wrap");
        const track = document.getElementById("usp-track");
        const dots      = document.querySelectorAll(".usp-dot");
        const panels    = document.querySelectorAll(".usp-panel");
        const ghostNums = document.querySelectorAll(".usp-ghost-num");
        if (!wrap || !track) return;

        const totalPanels = panels.length;

        gsap.to(track, {
          x: () => -(window.innerWidth * (totalPanels - 1)),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => "+=" + (wrap.offsetHeight - window.innerHeight),
            scrub: 0.3,
            onUpdate(self) {
              const pos    = self.progress * (totalPanels - 1);
              const active = Math.round(pos);

              dots.forEach((d, i) => {
                d.style.width      = i === active ? "2rem" : "0.5rem";
                d.style.background = i === active ? "#C9A84C" : "rgba(255,255,255,0.2)";
              });

              ghostNums.forEach((n, i) => {
                const dist = Math.abs(pos - i);
                const t    = Math.max(0, 1 - dist * 2);
                const r = Math.round(255 + (201 - 255) * t);
                const g = Math.round(255 + (168 - 255) * t);
                const b = Math.round(255 + (76  - 255) * t);
                const a = 0.05 + 0.45 * t;
                n.style.color = `rgba(${r},${g},${b},${a})`;
              });
            }
          }
        });
      })();


      // ── PHILOSOPHIE canvas particle network ──────────────────────────────────
      (function() {
        const canvas = document.getElementById('phil-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let W, H, pts = [];
        const N = 55, DIST = 160, GOLD = '201,168,76';
        function resize() {
          W = canvas.width  = canvas.offsetWidth;
          H = canvas.height = canvas.offsetHeight;
        }
        function mkPts() {
          pts = Array.from({length: N}, () => ({
            x: Math.random()*W, y: Math.random()*H,
            vx: (Math.random()-.5)*.35, vy: (Math.random()-.5)*.35,
            r: Math.random()*1.8+.6
          }));
        }
        function frame() {
          ctx.clearRect(0,0,W,H);
          pts.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x<0||p.x>W) p.vx*=-1;
            if (p.y<0||p.y>H) p.vy*=-1;
            ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle=`rgba(${GOLD},.45)`; ctx.fill();
          });
          for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
            const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
            const d=Math.sqrt(dx*dx+dy*dy);
            if (d<DIST) {
              ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
              ctx.strokeStyle=`rgba(${GOLD},${(1-d/DIST)*.12})`; ctx.lineWidth=.6; ctx.stroke();
            }
          }
          requestAnimationFrame(frame);
        }
        resize(); mkPts();
        new ResizeObserver(() => { resize(); mkPts(); }).observe(canvas.parentElement);
        frame();
      })();

      // ── PHILOSOPHIE block reveal ──────────────────────────────────────────────
      document.querySelectorAll(".phil-block").forEach(block => {
        const lines = block.querySelectorAll(".phil-line");
        const fades = block.querySelectorAll(".phil-line-fade");
        const ldraw = block.querySelectorAll(".line-draw");
        const nums = block.querySelectorAll(".phil-num");
        lines.forEach(l => { l.style.cssText += "opacity:0;transform:translateY(52px);transition:opacity .65s ease,transform .65s cubic-bezier(.16,1,.3,1);"; });
        fades.forEach(f => { f.style.cssText += "opacity:0;transition:opacity .55s ease;"; });
        nums.forEach(n => { n.style.cssText += "transition:opacity 1s ease;"; });
        new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (!e.isIntersecting) return;
            lines.forEach((l,i) => setTimeout(() => { l.style.opacity="1"; l.style.transform="translateY(0)"; }, i*100));
            fades.forEach((f,i) => setTimeout(() => { f.style.opacity="1"; }, lines.length*100 + i*130));
            ldraw.forEach(l => setTimeout(() => l.classList.replace("scale-x-0", "scale-x-100"), 200));
            nums.forEach(n => setTimeout(() => { n.style.opacity="1"; }, 100));
          });
        }, { threshold: 0.18 }).observe(block);
      });

      // ── SERVICE accordion ────────────────────────────────────────────────────
      document.querySelectorAll(".accordion-trigger").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = btn.closest(".accordion-item"), body = item.querySelector(".accordion-body");
          const isOpen = item.classList.contains("active");

          document.querySelectorAll(".accordion-item").forEach(i => {
            i.classList.remove("active");
            const b = i.querySelector(".accordion-body");
            b.classList.remove("max-h-[480px]");
            b.classList.add("max-h-0");
            i.querySelector(".acc-plus").classList.remove("rotate-45");
          });

          if (!isOpen) {
            item.classList.add("active");
            body.classList.remove("max-h-0");
            body.classList.add("max-h-[480px]");
            item.querySelector(".acc-plus").classList.add("rotate-45");
          }
        });
      });

      // ── CTA ──────────────────────────────────────────────────────────────────
      (function() {
        const cta = document.getElementById("cta"); if (!cta) return;
        let counted = false;
        new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (!e.isIntersecting) return;
            cta.querySelectorAll(".cta-anim").forEach(el => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; });
            if (!counted) {
              counted = true;
              setTimeout(() => {
                cta.querySelectorAll(".cta-stat").forEach(s => {
                  const target = parseFloat(s.dataset.target), isFloat = s.dataset.float === "true";
                  let step = 0; const steps = 55;
                  const t = setInterval(() => {
                    step++; const ease = 1 - Math.pow(1 - step/steps, 3); const val = target * ease;
                    s.textContent = step >= steps ? (isFloat ? target.toFixed(1) : target) : (isFloat ? val.toFixed(1) : Math.floor(val));
                    if (step >= steps) clearInterval(t);
                  }, 2000/steps);
                });
              }, 400);
            }
          });
        }, { threshold: 0.2 }).observe(cta);
      })();
    


      (function(){
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div aria-busy="true" aria-live="polite" className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0f0f0f] transition-opacity duration-700" id="loader" style={{}}>
<div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-[0.04]">
<div className="absolute w-[200vw] h-[1px] bg-[#f2f0e8] -rotate-[15deg] -translate-y-[15vh]"></div>
<div className="absolute w-[200vw] h-[2px] bg-[#c8a45a] -rotate-[15deg]"></div>
<div className="absolute w-[200vw] h-[1px] bg-[#f2f0e8] -rotate-[15deg] translate-y-[15vh]"></div>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="flex items-center justify-center">
<img alt="Auto Voralpen" className="h-16 md:h-24 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8445f2e-9676-4e06-98f1-3e45ab87571a_3840w.png"/>
</div>
<div className="w-64 h-[2px] bg-[#333] mt-6 overflow-hidden">
<div className="h-full bg-[#c8a45a] w-0" id="loader-progress" style={{}}></div>
</div>
<span className="font-['Inter'] text-[#f2f0e8]/50 text-xs mt-3 tracking-widest font-light" id="loader-percentage">
          0%
        </span>
</div>
</div>

<nav aria-label="Hauptnavigation" className="fixed top-4 left-0 right-0 z-[100] px-4 md:px-6 transition-transform duration-300 ease-in-out" id="mainNav">
<div className="bg-black/50 max-w-3xl border-white/10 border rounded-2xl ring-white/5 ring-1 mx-auto px-6 relative shadow-lg backdrop-blur-lg">
<div className="flex h-20 items-center justify-between">
<a className="group flex items-center" href="#" onclick="scrollToSection('top')">
<div className="transition-all group-hover:scale-105 flex items-center justify-center">
<img alt="Auto Voralpen" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain max-h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8445f2e-9676-4e06-98f1-3e45ab87571a_3840w.png"/>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal transition-colors duration-200 text-[#f2f0e8]/70 hover:text-[#C9A84C] tracking-wide" href="#vorteile" onclick="scrollToSection('vorteile')">
              Vorteile
            </a>
<a className="text-xs font-normal transition-colors duration-200 text-[#f2f0e8]/70 hover:text-[#C9A84C] tracking-wide" href="#philosophie" onclick="scrollToSection('philosophie')">
              Philosophie
            </a>
<a className="text-xs font-normal transition-colors duration-200 text-[#f2f0e8]/70 hover:text-[#C9A84C] tracking-wide" href="#service" onclick="scrollToSection('service')">
              Service
            </a>
</nav>
<a className="hidden md:inline-flex items-center justify-center uppercase hover:bg-white/5 hover:text-[#C9A84C] transition-all duration-300 cursor-pointer text-xs font-semibold text-black tracking-[0.1em] bg-[#C9A84C] border-[#C9A84C] border rounded-xl px-6 py-2.5" href="#contact" onclick="scrollToSection('contact')">
            Kontakt
          </a>
<button className="md:hidden rounded-xl border p-2.5 bg-white/5 border-white/10 hover:border-[#C9A84C] text-[#f2f0e8] hover:text-[#C9A84C] transition-colors flex items-center justify-center" id="mobileMenuBtn">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[110] bg-black transform -translate-y-full transition-transform duration-500 ease-in-out flex flex-col items-center justify-center" id="mobileMenu">
<button className="absolute top-6 right-6 p-2 text-[#f2f0e8] hover:text-[#C9A84C] transition-colors flex items-center justify-center" id="closeMenuBtn">
<iconify-icon height="40" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</button>
<div className="flex flex-col gap-8 text-center">
<a className="cursor-pointer font-['Bebas_Neue'] text-5xl tracking-tight text-[#f2f0e8] hover:text-[#C9A84C] transition-colors uppercase" onclick="scrollToSection('top');closeMobileMenu()">
          Startseite
        </a>
<a className="cursor-pointer font-['Bebas_Neue'] text-5xl tracking-tight text-[#f2f0e8] hover:text-[#C9A84C] transition-colors uppercase" onclick="scrollToSection('vorteile');closeMobileMenu()">
          Vorteile
        </a>
<a className="cursor-pointer font-['Bebas_Neue'] text-5xl tracking-tight text-[#f2f0e8] hover:text-[#C9A84C] transition-colors uppercase" onclick="scrollToSection('philosophie');closeMobileMenu()">
          Philosophie
        </a>
<a className="cursor-pointer font-['Bebas_Neue'] text-5xl tracking-tight text-[#f2f0e8] hover:text-[#C9A84C] transition-colors uppercase" onclick="scrollToSection('service');closeMobileMenu()">
          Service
        </a>
<a className="cursor-pointer font-['Bebas_Neue'] text-5xl tracking-tight text-[#C9A84C] hover:text-[#e0c266] transition-colors uppercase" onclick="scrollToSection('contact');closeMobileMenu()">
          Kontakt
        </a>
</div>
</div>

<video aria-label="Markenfilm" className="fixed top-0 left-0 w-screen h-screen object-cover z-0 bg-black" disableremoteplayback="" id="scrollVideo" muted="" playsinline="" preload="auto" tabindex="-1">
<source src="https://res.cloudinary.com/dq9aym4ad/video/upload/v1778758779/mp__qhpetb.mp4" type="video/mp4"/>
</video>

<svg aria-hidden="true" className="fixed top-0 left-0 w-screen h-screen z-10 pointer-events-none opacity-10 mix-blend-overlay" preserveaspectratio="none" viewbox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter color-interpolation-filters="sRGB" height="140%" id="grainFilter" width="140%" x="-20%" y="-20%">
<feturbulence basefrequency="0.85" numoctaves="3" result="noise" stitchtiles="stitch" type="fractalNoise"></feturbulence>
<fecolormatrix in="noise" result="grey" type="saturate" values="0"></fecolormatrix>
</filter>
</defs>
<rect fill="#ffffff" filter="url(#grainFilter)" height="1080" width="1920" x="0" y="0"></rect>
</svg>

<div aria-hidden="true" className="relative h-[300vh] z-20 pointer-events-none" id="video-stage"></div>

<div className="fixed inset-0 z-30 pointer-events-none" id="heroOverlays">
<div className="absolute bottom-0 left-0 w-full h-[60vh] bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
<div className="overlay-block absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-700 ease-in-out opacity-100 scale-100 pointer-events-auto" data-end="0.18" data-start="0">
<h1 className="font-['Bebas_Neue'] text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight text-[#f2f0e8] uppercase">
          Auto Voralpen
        </h1>
</div>
<div className="overlay-block absolute inset-0 flex flex-col items-center md:items-start justify-center p-6 md:pl-[12%] text-center md:text-left transition-all duration-700 ease-in-out opacity-0 scale-95" data-end="0.44" data-start="0.25">
<h2 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f2f0e8] max-w-[14ch] uppercase">
          Exklusive Fahrzeuge.
          <br/>
          Eine erstklassige Adresse.
        </h2>
</div>
<div className="overlay-block absolute inset-0 flex flex-col items-center md:items-end justify-center p-6 md:pr-[12%] text-center md:text-right transition-all duration-700 ease-in-out opacity-0 scale-95" data-end="0.69" data-start="0.5">
<h2 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f2f0e8] max-w-[14ch] uppercase">
          Jedes Fahrzeug geprüft.
          <br/>
          Jedes Detail perfektioniert.
        </h2>
</div>
<div className="overlay-block absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-700 ease-in-out opacity-0 scale-95" data-end="0.95" data-start="0.76">
<h2 className="font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-7xl tracking-tight text-[#f2f0e8] uppercase">
          Finden Sie Ihr Traumauto.
        </h2>
<a className="pointer-events-auto inline-flex items-center justify-center uppercase hover:bg-transparent hover:text-[#C9A84C] transition-all duration-500 cursor-pointer text-xs font-bold text-black tracking-[0.1em] bg-[#C9A84C] border-[#C9A84C] border mt-8 px-8 py-4" onclick="scrollToSection('contact')">
          Kontakt aufnehmen
        </a>
</div>
</div>

<section className="relative w-full z-40 bg-[#0a0a0a]" id="vorteile">

<div className="hidden md:block h-[450vh]" id="usp-pin-wrap">
<div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">

<div className="max-w-7xl mx-auto w-full px-6 md:px-10 flex items-center justify-between pt-10 pb-0 shrink-0">
<p className="text-xs tracking-[0.4em] uppercase text-[#C9A84C]">
              Vorteile
            </p>
<div className="flex gap-2.5 items-center usp-dots">
<div className="usp-dot h-[2px] w-8 bg-[#C9A84C] transition-all duration-500 rounded-full" style={{width: '0.5rem', background: 'rgba(255, 255, 255, 0.2)'}}></div>
<div className="usp-dot h-[2px] w-2 bg-white/20 transition-all duration-500 rounded-full" style={{width: '0.5rem', background: 'rgba(255, 255, 255, 0.2)'}}></div>
<div className="usp-dot h-[2px] w-2 bg-white/20 transition-all duration-500 rounded-full" style={{width: '2rem', background: 'rgb(201, 168, 76)'}}></div>
</div>
</div>

<div className="relative flex-1 overflow-hidden">
<div className="flex h-full will-change-transform w-[300vw]" id="usp-track">

<div className="usp-panel relative flex-shrink-0 h-full w-[100vw]">
<div aria-hidden="true" className="usp-ghost-num pointer-events-none select-none absolute top-0 right-0 font-['Bebas_Neue'] leading-none text-[32vw] text-white/10 transition-colors duration-500 ease-in" style={{color: 'rgba(255, 255, 255, 0.05)'}}>
                  01
                </div>
<div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-20 relative z-10">
<div className="usp-content max-w-[780px]">
<span className="block text-xs tracking-[0.4em] uppercase text-[#C9A84C]/70 mb-8">
                      Qualität
                    </span>
<h3 className="font-['Bebas_Neue'] leading-[0.92] text-white tracking-tight mb-10 text-5xl md:text-7xl lg:text-[7vw]">
                      Ein Fahrzeug,
                      <br/>
                      das
                      <span className="text-[#C9A84C]">kompromisslos</span>
<br/>
                      geprüft wurde
                    </h3>
<div className="w-10 h-[1px] bg-[#C9A84C] mb-8"></div>
<p className="text-[#888] leading-[1.9] text-sm md:text-base max-w-[520px]">
                      Jedes Fahrzeug in unserem Bestand durchläuft eine strenge
                      Qualitätskontrolle – von Motor und Getriebe bis hin zur
                      Elektronik und Karosserie. Wir übergeben Ihnen nur
                      Fahrzeuge, die unseren höchsten Ansprüchen genügen.
                    </p>
</div>
</div>
</div>

<div className="usp-panel relative flex-shrink-0 h-full w-[100vw]">
<div aria-hidden="true" className="usp-ghost-num pointer-events-none select-none absolute top-0 right-0 font-['Bebas_Neue'] leading-none text-[32vw] text-white/10 transition-colors duration-500 ease-in" style={{color: 'rgba(255, 255, 255, 0.05)'}}>
                  02
                </div>
<div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-20 relative z-10">
<div className="usp-content max-w-[780px]">
<span className="block text-xs tracking-[0.4em] uppercase text-[#C9A84C]/70 mb-8">
                      Transparenz
                    </span>
<h3 className="font-['Bebas_Neue'] leading-[0.92] text-white tracking-tight mb-10 text-5xl md:text-7xl lg:text-[7vw]">
<span className="text-[#C9A84C]">Keine</span>
<br/>
                      versteckten
                      <br/>
                      Kosten
                    </h3>
<div className="w-10 h-[1px] bg-[#C9A84C] mb-8"></div>
<p className="text-[#888] leading-[1.9] text-sm md:text-base max-w-[520px]">
                      Wir setzen auf absolute Ehrlichkeit. Der vereinbarte Preis
                      ist verbindlich. Keine Überraschungen, keine versteckten
                      Zusatzgebühren und kein verwirrendes Kleingedrucktes.
                    </p>
</div>
</div>
</div>

<div className="usp-panel relative flex-shrink-0 h-full w-[100vw]">
<div aria-hidden="true" className="usp-ghost-num pointer-events-none select-none absolute top-0 right-0 font-['Bebas_Neue'] leading-none text-[32vw] text-white/10 transition-colors duration-500 ease-in" style={{color: 'rgba(201, 168, 76, 0.5)'}}>
                  03
                </div>
<div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-20 relative z-10">
<div className="usp-content max-w-[780px]">
<span className="block text-xs tracking-[0.4em] uppercase text-[#C9A84C]/70 mb-8">
                      Beratung
                    </span>
<h3 className="font-['Bebas_Neue'] leading-[0.92] text-white tracking-tight mb-10 text-5xl md:text-7xl lg:text-[7vw]">
<span className="text-[#C9A84C]">Persönlich</span>
                      ,
                      <br/>
                      individuell
                      <br/>
                      &amp; kompetent
                    </h3>
<div className="w-10 h-[1px] bg-[#C9A84C] mb-8"></div>
<p className="text-[#888] leading-[1.9] mb-10 text-sm md:text-base max-w-[520px]">
                      Ihre Wünsche stehen im Mittelpunkt. Wir nehmen uns die
                      nötige Zeit für Sie, beraten Sie ganz ohne Druck und hören
                      aufmerksam zu.
                    </p>
<a className="cursor-pointer inline-flex items-center gap-4 text-xs tracking-[0.35em] uppercase text-[#C9A84C] border border-[#C9A84C]/60 px-8 py-4 hover:bg-[#C9A84C] hover:text-black transition-all duration-300 w-fit" onclick="scrollToSection('contact')">
                      Kontakt aufnehmen
                      <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>

</div>

</div>

</div>


<div className="md:hidden flex flex-col">
<div className="w-full border-t border-white/10 flex flex-col px-6 py-14">
<span className="font-['Bebas_Neue'] text-4xl text-[#C9A84C] tracking-tight mb-1">
            01
          </span>
<span className="text-xs tracking-widest uppercase text-[#C9A84C]/60 mb-6">
            Qualität
          </span>
<h3 className="font-['Bebas_Neue'] text-4xl leading-[1.05] tracking-tight text-white uppercase mb-6">
            Ein Fahrzeug, das kompromisslos geprüft wurde
          </h3>
<div className="w-8 h-[1px] bg-[#C9A84C] mb-6"></div>
<p className="text-[#888] text-sm leading-[1.9]">
            Jedes Fahrzeug durchläuft eine strenge Qualitätskontrolle – von
            Motor bis Karosserie.
          </p>
</div>
<div className="w-full border-t border-white/10 flex flex-col px-6 py-14">
<span className="font-['Bebas_Neue'] text-4xl text-[#C9A84C] tracking-tight mb-1">
            02
          </span>
<span className="text-xs tracking-widest uppercase text-[#C9A84C]/60 mb-6">
            Transparenz
          </span>
<h3 className="font-['Bebas_Neue'] text-4xl leading-[1.05] tracking-tight text-white uppercase mb-6">
            Keine versteckten Kosten
          </h3>
<div className="w-8 h-[1px] bg-[#C9A84C] mb-6"></div>
<p className="text-[#888] text-sm leading-[1.9]">
            Keine Überraschungen, keine versteckten Gebühren. Klare Preise von
            Anfang an.
          </p>
</div>
<div className="w-full border-t border-white/10 flex flex-col px-6 py-14">
<span className="font-['Bebas_Neue'] text-4xl text-[#C9A84C] tracking-tight mb-1">
            03
          </span>
<span className="text-xs tracking-widest uppercase text-[#C9A84C]/60 mb-6">
            Beratung
          </span>
<h3 className="font-['Bebas_Neue'] text-4xl leading-[1.05] tracking-tight text-white uppercase mb-6">
            Persönlich, individuell &amp; kompetent
          </h3>
<div className="w-8 h-[1px] bg-[#C9A84C] mb-6"></div>
<p className="text-[#888] text-sm leading-[1.9] mb-8">
            Ihre Wünsche stehen im Mittelpunkt. Beratung ohne Druck.
          </p>
<a className="inline-flex items-center px-8 py-4 text-xs tracking-widest uppercase bg-[#C9A84C] text-black w-fit" onclick="scrollToSection('contact')">
            Kontakt aufnehmen
          </a>
</div>
</div>
</section>

<section className="relative z-40 overflow-hidden bg-[#F7F5F0]" id="philosophie">

<div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden">
<canvas className="absolute inset-0 w-full h-full opacity-70" height="1572" id="phil-canvas" width="1020"></canvas>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Bebas_Neue'] tracking-tight whitespace-nowrap leading-none text-[#C9A84C] text-[18vw] opacity-[0.035]">
          PHILOSOPHIE
        </div>

<div className="absolute -top-32 -right-32 w-[640px] h-[640px]">
<svg className="w-full h-full" fill="none" viewbox="0 0 640 640">
<circle cx="320" cy="320" r="310" stroke="#C9A84C" stroke-dasharray="6 14" strokeWidth="0.6" style={{animation: 'slowspin 55s linear infinite', transformOrigin: 'center'}}></circle>
<circle cx="320" cy="320" opacity="0.5" r="248" stroke="#C9A84C" strokeWidth="0.5" style={{animation: 'slowspin-r 40s linear infinite', transformOrigin: 'center'}}></circle>
<circle cx="320" cy="320" opacity="0.35" r="186" stroke="#C9A84C" strokeWidth="0.4" style={{animation: 'slowspin 55s linear infinite', transformOrigin: 'center'}}></circle>
<circle cx="320" cy="320" opacity="0.25" r="124" stroke="#C9A84C" strokeWidth="0.4" style={{animation: 'slowspin-r 40s linear infinite', transformOrigin: 'center'}}></circle>
<line opacity="0.2" stroke="#C9A84C" strokeWidth="0.3" x1="10" x2="630" y1="320" y2="320"></line>
<line opacity="0.2" stroke="#C9A84C" strokeWidth="0.3" x1="320" x2="320" y1="10" y2="630"></line>
<circle cx="320" cy="320" fill="#C9A84C" opacity="0.3" r="6"></circle>
</svg>
</div>

<div className="absolute -bottom-24 -left-24 w-[340px] h-[340px]" style={{animation: 'floatY 6s ease-in-out infinite'}}>
<svg className="w-full h-full" fill="none" viewbox="0 0 340 340">
<circle cx="170" cy="170" opacity="0.5" r="160" stroke="#C9A84C" stroke-dasharray="3 9" strokeWidth="0.5" style={{animation: 'slowspin-r 40s linear infinite', transformOrigin: 'center'}}></circle>
<circle cx="170" cy="170" opacity="0.3" r="110" stroke="#C9A84C" strokeWidth="0.4" style={{animation: 'slowspin 55s linear infinite', transformOrigin: 'center'}}></circle>
<circle cx="170" cy="170" opacity="0.2" r="60" stroke="#C9A84C" strokeWidth="0.4" style={{animation: 'slowspin-r 40s linear infinite', transformOrigin: 'center'}}></circle>
</svg>
</div>

<div className="absolute top-[38%] right-[22%] w-28 h-28" style={{animation: 'floatY 6s ease-in-out infinite', animationDelay: '-3s'}}>
<svg className="w-full h-full" fill="none" style={{animation: 'slowspin-r 40s linear infinite', transformOrigin: 'center'}} viewbox="0 0 112 112">
<rect height="73" opacity="0.25" rx="2" stroke="#C9A84C" strokeWidth="0.7" transform="rotate(45 56 56)" width="73" x="56" y="4"></rect>
<rect height="51" opacity="0.18" rx="1" stroke="#C9A84C" strokeWidth="0.5" transform="rotate(45 56 56)" width="51" x="56" y="20"></rect>
<circle cx="56" cy="56" fill="#C9A84C" opacity="0.25" r="5"></circle>
</svg>
</div>
</div>


<div className="relative z-10 border-b border-black/[0.07]">
<div className="max-w-7xl mx-auto px-6 md:px-10 flex items-end justify-between pt-20 pb-12">
<div className="scroll-reveal">
<span className="text-xs tracking-[0.45em] text-[#C9A84C] uppercase block mb-3">
              Unser Ansatz
            </span>
<h2 className="font-['Bebas_Neue'] leading-none tracking-tight text-black uppercase text-6xl md:text-8xl lg:text-[9vw]">
              Philosophie
            </h2>
</div>
<div className="hidden md:block w-20 h-20 shrink-0 mb-1 scroll-reveal" style={{animation: 'slowspin 25s linear infinite', transformOrigin: 'center'}}>
<svg className="w-full h-full" fill="none" viewbox="0 0 80 80">
<circle cx="40" cy="40" r="36" stroke="#C9A84C" stroke-dasharray="5 7" strokeWidth="1"></circle>
<circle cx="40" cy="40" opacity="0.5" r="24" stroke="#C9A84C" strokeWidth="0.6"></circle>
<circle cx="40" cy="40" opacity="0.3" r="12" stroke="#C9A84C" strokeWidth="0.6"></circle>
<circle cx="40" cy="40" fill="#C9A84C" opacity="0.7" r="3"></circle>
<line stroke="#C9A84C" strokeLinecap="round" strokeWidth="1.2" x1="40" x2="40" y1="4" y2="16"></line>
</svg>
</div>
</div>
</div>

<div className="phil-block relative z-10 border-b border-black/[0.07]">
<div className="max-w-7xl mx-auto px-6 md:px-10">
<div className="grid md:grid-cols-[200px_1fr] min-h-[52vh]">
<div className="hidden md:flex flex-col justify-between border-r border-black/[0.07] py-16 pr-10">
<div className="">
<span className="font-['Bebas_Neue'] text-7xl tracking-tight leading-none text-[#C9A84C] opacity-[0.08] block phil-num" style={{transition: 'opacity 1s'}}>
                  01
                </span>
<span className="text-xs tracking-[0.4em] uppercase text-black/40 mt-1 block">
                  Qualität
                </span>
</div>
<div className="line-draw h-[1px] w-full bg-gradient-to-r from-[#C9A84C] to-transparent origin-left transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
</div>
<div className="flex flex-col justify-center md:pl-14 py-16">
<span className="md:hidden text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-6 block">
                01 — Qualität
              </span>
<h3 className="font-['Bebas_Neue'] leading-[0.92] tracking-tight text-black uppercase mb-8 text-4xl md:text-6xl lg:text-[5.5vw]">
<span className="phil-line block" style={{transition: 'opacity 0.65s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'}}>
                  Kein Kompromiss.
                </span>
<span className="phil-line block" style={{color: '#C9A84C'}}>
                  Jedes Detail
                </span>
<span className="phil-line block" style={{transition: 'opacity 0.65s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'}}>
                  zählt.
                </span>
</h3>
<div className="w-10 h-[1px] bg-[#C9A84C] mb-7 phil-line-fade" style={{transition: 'opacity 0.55s'}}></div>
<p className="text-[#777] leading-[1.9] phil-line-fade text-xs md:text-sm max-w-[520px]" style={{transition: 'opacity 0.55s'}}>
                Jedes Fahrzeug durchläuft eine lückenlose Inspektion — Mechanik,
                Elektronik, Karosserie, Historie. Erst wenn alles stimmt, kommt
                es in unseren Bestand.
              </p>
</div>
</div>
</div>
</div>

<div className="phil-block relative z-10 border-b border-black/[0.07]">
<div className="max-w-7xl mx-auto px-6 md:px-10">
<div className="grid md:grid-cols-[200px_1fr] min-h-[52vh]">
<div className="hidden md:flex flex-col justify-between border-r border-black/[0.07] py-16 pr-10">
<div className="">
<span className="font-['Bebas_Neue'] text-7xl tracking-tight leading-none text-[#C9A84C] opacity-[0.08] block phil-num" style={{transition: 'opacity 1s'}}>
                  02
                </span>
<span className="text-xs tracking-[0.4em] uppercase text-black/40 mt-1 block">
                  Ehrlichkeit
                </span>
</div>
<div className="line-draw h-[1px] w-full bg-gradient-to-r from-[#C9A84C] to-transparent origin-left transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
</div>
<div className="flex flex-col justify-center md:pl-14 py-16">
<span className="md:hidden text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-6 block">
                02 — Ehrlichkeit
              </span>
<h3 className="font-['Bebas_Neue'] leading-[0.92] tracking-tight text-black uppercase mb-8 text-4xl md:text-6xl lg:text-[5.5vw]">
<span className="phil-line block" style={{transition: 'opacity 0.65s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'}}>
                  Der Preis
                </span>
<span className="phil-line block" style={{color: '#C9A84C'}}>
                  den Sie sehen,
                </span>
<span className="phil-line block" style={{transition: 'opacity 0.65s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'}}>
                  ist der Preis.
                </span>
</h3>
<div className="w-10 h-[1px] bg-[#C9A84C] mb-7 phil-line-fade" style={{transition: 'opacity 0.55s'}}></div>
<p className="text-[#777] leading-[1.9] phil-line-fade text-xs md:text-sm max-w-[520px]" style={{transition: 'opacity 0.55s'}}>
                Kein Kleingedrucktes. Kein Nachverhandeln. Was wir nennen, gilt
                — das ist unser Geschäftsprinzip seit dem ersten Tag.
              </p>
</div>
</div>
</div>
</div>

<div className="phil-block relative z-10">
<div className="max-w-7xl mx-auto px-6 md:px-10">
<div className="grid md:grid-cols-[200px_1fr] min-h-[52vh]">
<div className="hidden md:flex flex-col justify-between border-r border-black/[0.07] py-16 pr-10">
<div className="">
<span className="font-['Bebas_Neue'] text-7xl tracking-tight leading-none text-[#C9A84C] opacity-[0.08] block phil-num" style={{transition: 'opacity 1s'}}>
                  03
                </span>
<span className="text-xs tracking-[0.4em] uppercase text-black/40 mt-1 block">
                  Partnerschaft
                </span>
</div>
<div className="line-draw h-[1px] w-full bg-gradient-to-r from-[#C9A84C] to-transparent origin-left transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
</div>
<div className="flex flex-col justify-center md:pl-14 py-16">
<span className="md:hidden text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-6 block">
                03 — Partnerschaft
              </span>
<h3 className="font-['Bebas_Neue'] leading-[0.92] tracking-tight text-black uppercase mb-8 text-4xl md:text-6xl lg:text-[5.5vw]">
<span className="phil-line block" style={{transition: 'opacity 0.65s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'}}>
                  Wir hören
                </span>
<span className="phil-line block" style={{color: '#C9A84C'}}>
                  zuerst zu.
                </span>
<span className="phil-line block" style={{transition: 'opacity 0.65s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'}}>
                  Dann beraten wir.
                </span>
</h3>
<div className="w-10 h-[1px] bg-[#C9A84C] mb-7 phil-line-fade" style={{transition: 'opacity 0.55s'}}></div>
<p className="text-[#777] leading-[1.9] mb-10 phil-line-fade text-xs md:text-sm max-w-[520px]" style={{transition: 'opacity 0.55s'}}>
                Kein Verkaufsskript. Kein Druck. Wir investieren Zeit — um zu
                verstehen, was Sie wirklich suchen.
              </p>
<a className="cursor-pointer inline-flex items-center gap-4 text-xs tracking-[0.35em] uppercase text-black border border-black/25 px-8 py-4 hover:bg-[#C9A84C] hover:border-[#C9A84C] transition-all duration-300 w-fit phil-line-fade" onclick="scrollToSection('contact')" style={{transition: 'opacity 0.55s'}}>
                Gespräch vereinbaren
                <iconify-icon className="" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-40 overflow-hidden py-20 md:py-32 bg-black" id="service">

<div className="w-full max-w-7xl mx-auto px-6 md:px-10 pb-12 border-b border-white/[0.05] scroll-reveal">
<span className="text-xs tracking-[0.4em] text-[#C9A84C] uppercase font-['Inter'] block mb-3">
          Was wir tun
        </span>
<h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl leading-none tracking-tight text-[#f2f0e8] uppercase">
          Service
        </h2>
</div>
<div className="w-full max-w-7xl mx-auto px-6 md:px-10" id="serviceAccordion">
<div className="accordion-item border-b border-white/[0.05] scroll-reveal">
<button className="accordion-trigger w-full flex items-center justify-between py-8 md:py-10 text-left group">
<div className="flex items-center gap-8 md:gap-12 min-w-0">
<span className="font-['Bebas_Neue'] text-lg text-[#C9A84C]/25 shrink-0 w-8 group-hover:text-[#C9A84C]/60 transition-colors tracking-tight">
                01
              </span>
<h3 className="font-['Bebas_Neue'] text-3xl md:text-4xl lg:text-5xl text-[#f2f0e8] uppercase tracking-tight leading-none group-hover:text-[#C9A84C] transition-colors duration-300">
                Fahrzeugankauf
              </h3>
</div>
<span aria-hidden="true" className="acc-plus text-2xl text-[#C9A84C]/50 ml-4 shrink-0 group-hover:text-[#C9A84C] transition-transform duration-[380ms] ease-in-out block">
              +
            </span>
</button>
<div className="accordion-body max-h-0 overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="pb-10 md:pb-14 flex flex-col md:flex-row gap-8 md:gap-16 pl-16 md:pl-20">
<div className="md:w-[55%]">
<p className="text-sm md:text-base text-[#888] leading-[1.85] font-['Inter'] font-extralight">
                  Sie möchten Ihr Fahrzeug verkaufen? Wir nehmen Ihnen den
                  Aufwand ab. Keine Inserate, keine Besichtigungen mit Fremden,
                  keine zermürbenden Preisverhandlungen. Wir bewerten Ihr Auto
                  professionell, fair und transparent — und zahlen direkt aus.
                </p>
</div>
<div className="md:w-[45%] flex flex-col gap-4">
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Sofortige Fahrzeugbewertung
                  </span>
</div>
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Direkte Auszahlung
                  </span>
</div>
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Alle Marken &amp; Modelle
                  </span>
</div>
<div className="flex items-center gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Abholung schweizweit möglich
                  </span>
</div>
<a className="cursor-pointer mt-4 inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#C9A84C] hover:text-[#e0c266] transition-colors font-['Inter'] group" onclick="scrollToSection('contact')">
                  Jetzt anfragen
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="accordion-item border-b border-white/[0.05] scroll-reveal">
<button className="accordion-trigger w-full flex items-center justify-between py-8 md:py-10 text-left group">
<div className="flex items-center gap-8 md:gap-12 min-w-0">
<span className="font-['Bebas_Neue'] text-lg text-[#C9A84C]/25 shrink-0 w-8 group-hover:text-[#C9A84C]/60 transition-colors tracking-tight">
                02
              </span>
<h3 className="font-['Bebas_Neue'] text-3xl md:text-4xl lg:text-5xl text-[#f2f0e8] uppercase tracking-tight leading-none group-hover:text-[#C9A84C] transition-colors duration-300">
                Fahrzeugverkauf
              </h3>
</div>
<span aria-hidden="true" className="acc-plus text-2xl text-[#C9A84C]/50 ml-4 shrink-0 group-hover:text-[#C9A84C] transition-transform duration-[380ms] ease-in-out block">
              +
            </span>
</button>
<div className="accordion-body max-h-0 overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="pb-10 md:pb-14 flex flex-col md:flex-row gap-8 md:gap-16 pl-16 md:pl-20">
<div className="md:w-[55%]">
<p className="text-sm md:text-base text-[#888] leading-[1.85] font-['Inter'] font-extralight">
                  Unsere handverlesenen Fahrzeuge sind vollständig geprüft,
                  professionell aufbereitet und klar dokumentiert. Sie bekommen
                  genau das Fahrzeug, das zu Ihnen passt — ohne Kompromisse und
                  ohne böse Überraschungen nach dem Kauf.
                </p>
</div>
<div className="md:w-[45%] flex flex-col gap-4">
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Vollständige Fahrzeugdokumentation
                  </span>
</div>
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Persönliche Probefahrt
                  </span>
</div>
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Inzahlungnahme möglich
                  </span>
</div>
<div className="flex items-center gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Lieferung schweizweit
                  </span>
</div>
<a className="cursor-pointer mt-4 inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#C9A84C] hover:text-[#e0c266] transition-colors font-['Inter'] group" onclick="scrollToSection('contact')">
                  Anfrage senden
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="accordion-item border-b border-white/[0.05] scroll-reveal">
<button className="accordion-trigger w-full flex items-center justify-between py-8 md:py-10 text-left group">
<div className="flex items-center gap-8 md:gap-12 min-w-0">
<span className="font-['Bebas_Neue'] text-lg text-[#C9A84C]/25 shrink-0 w-8 group-hover:text-[#C9A84C]/60 transition-colors tracking-tight">
                03
              </span>
<h3 className="font-['Bebas_Neue'] text-3xl md:text-4xl lg:text-5xl text-[#f2f0e8] uppercase tracking-tight leading-none group-hover:text-[#C9A84C] transition-colors duration-300">
                Finanzierung
              </h3>
</div>
<span aria-hidden="true" className="acc-plus text-2xl text-[#C9A84C]/50 ml-4 shrink-0 group-hover:text-[#C9A84C] transition-transform duration-[380ms] ease-in-out block">
              +
            </span>
</button>
<div className="accordion-body max-h-0 overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="pb-10 md:pb-14 flex flex-col md:flex-row gap-8 md:gap-16 pl-16 md:pl-20">
<div className="md:w-[55%]">
<p className="text-sm md:text-base text-[#888] leading-[1.85] font-['Inter'] font-extralight">
                  Wir unterstützen Sie bei der Finanzierung Ihres
                  Wunschfahrzeugs — flexibel, transparent und auf Ihre Situation
                  zugeschnitten. Wir übernehmen die Abwicklung mit unseren
                  Finanzierungspartnern für Sie.
                </p>
</div>
<div className="md:w-[45%] flex flex-col gap-4">
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Individuelle Laufzeiten
                  </span>
</div>
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Günstige Konditionen
                  </span>
</div>
<div className="flex items-center gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Schnelle Genehmigung
                  </span>
</div>
<a className="cursor-pointer mt-4 inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#C9A84C] hover:text-[#e0c266] transition-colors font-['Inter'] group" onclick="scrollToSection('contact')">
                  Beratung anfragen
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="accordion-item scroll-reveal">
<button className="accordion-trigger w-full flex items-center justify-between py-8 md:py-10 text-left group">
<div className="flex items-center gap-8 md:gap-12 min-w-0">
<span className="font-['Bebas_Neue'] text-lg text-[#C9A84C]/25 shrink-0 w-8 group-hover:text-[#C9A84C]/60 transition-colors tracking-tight">
                04
              </span>
<h3 className="font-['Bebas_Neue'] text-3xl md:text-4xl lg:text-5xl text-[#f2f0e8] uppercase tracking-tight leading-none group-hover:text-[#C9A84C] transition-colors duration-300">
                Garantie &amp; Gewährleistung
              </h3>
</div>
<span aria-hidden="true" className="acc-plus text-2xl text-[#C9A84C]/50 ml-4 shrink-0 group-hover:text-[#C9A84C] transition-transform duration-[380ms] ease-in-out block">
              +
            </span>
</button>
<div className="accordion-body max-h-0 overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="pb-10 md:pb-14 flex flex-col md:flex-row gap-8 md:gap-16 pl-16 md:pl-20">
<div className="md:w-[55%]">
<p className="text-sm md:text-base text-[#888] leading-[1.85] font-['Inter'] font-extralight">
                  Jedes Fahrzeug aus unserem Bestand wird mit gesetzlicher
                  Gewährleistung übergeben. Auf Wunsch vermitteln wir Ihnen
                  zusätzliche Garantiepakete für maximale Sicherheit — weit über
                  den Kauf hinaus.
                </p>
</div>
<div className="md:w-[45%] flex flex-col gap-4">
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Gesetzliche Gewährleistung
                  </span>
</div>
<div className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Optionale Anschlussgarantie
                  </span>
</div>
<div className="flex items-center gap-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></span>
<span className="text-xs text-[#f2f0e8]/50 font-['Inter'] font-light">
                    Transparent &amp; klar geregelt
                  </span>
</div>
<a className="cursor-pointer mt-4 inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#C9A84C] hover:text-[#e0c266] transition-colors font-['Inter'] group" onclick="scrollToSection('contact')">
                  Mehr erfahren
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-40 bg-[#C9A84C] w-full min-h-[85vh] flex flex-col justify-between py-20 text-black overflow-hidden" id="cta">
<div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col flex-1 justify-between">
<div className="cta-anim opacity-0 translate-y-6 transition-all duration-1000 ease-out">
<span className="text-xs tracking-widest uppercase font-['Inter'] font-normal">
            Bereit?
          </span>
</div>
<div className="flex flex-col items-center justify-center text-center py-16">
<h2 className="cta-anim opacity-0 translate-y-6 transition-all duration-1000 delay-150 ease-out font-['Bebas_Neue'] text-7xl md:text-9xl lg:text-[11rem] leading-[0.88] tracking-tight uppercase mb-10">
            Ihr nächstes
            <br/>
            Auto wartet
          </h2>
<a className="cta-anim opacity-0 translate-y-6 transition-all duration-1000 delay-300 ease-out cursor-pointer inline-flex items-center gap-4 bg-black text-[#f2f0e8] font-['Bebas_Neue'] text-2xl md:text-3xl px-12 py-5 tracking-widest uppercase hover:bg-[#111] transition-colors group" onclick="scrollToSection('contact')">
            Kontakt aufnehmen
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="cta-anim transition-all duration-1000 delay-500 ease-out flex flex-wrap opacity-0 border-black/15 border-t pt-10 pb-2 translate-y-6 gap-x-24 gap-y-24 items-end justify-center">
<div className="flex flex-col items-center">
<div className="font-['Bebas_Neue'] text-6xl md:text-7xl leading-none flex items-end tracking-tight gap-1">
<span className="cta-stat" data-target="500">500</span>
<span className="text-3xl pb-1 font-['Inter'] font-thin">+</span>
</div>
<span className="text-xs tracking-widest uppercase mt-2 font-['Inter'] font-normal text-black/60">
              Fahrzeuge
            </span>
</div>
<div className="flex flex-col items-center">
<div className="font-['Bebas_Neue'] text-6xl md:text-7xl tracking-tight leading-none">
<span className="cta-stat" data-target="12">12</span>
</div>
<span className="text-xs tracking-widest uppercase mt-2 font-['Inter'] font-normal text-black/60">
              Jahre
            </span>
</div>
<div className="flex flex-col items-center">
<div className="font-['Bebas_Neue'] text-6xl md:text-7xl leading-none flex items-end tracking-tight gap-1">
<span className="cta-stat" data-float="true" data-target="4.9">
                4.9
              </span>
<span className="text-4xl pb-0.5 font-light">★</span>
</div>
<span className="text-xs tracking-widest uppercase mt-2 font-['Inter'] font-normal text-black/60">
              Bewertung
            </span>
</div>
</div>
</div>
</section>

<footer className="relative z-40 bg-black overflow-hidden text-[#f2f0e8] font-['Inter'] scroll-mt-10" id="contact">
<div className="flex flex-col min-h-[85vh] w-full max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-0 relative justify-between">
<div className="flex flex-col md:flex-row justify-between items-start w-full gap-10 border-b border-white/[0.06] pb-12 scroll-reveal">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-[#C9A84C]">
<iconify-icon className="" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-light tracking-[0.2em] uppercase text-[#f2f0e8]/60">
              Kontakt aufnehmen
            </span>
</div>
<div className="flex flex-wrap gap-8 md:gap-12 text-xs font-light tracking-widest uppercase text-[#f2f0e8]/40">
<a className="hover:text-[#C9A84C] transition-colors" href="#">
              Impressum
            </a>
<a className="hover:text-[#C9A84C] transition-colors" href="#">
              Datenschutz
            </a>
<span className="text-[#f2f0e8]/20">© 2026 Auto Voralpen GmbH</span>
</div>
</div>
<div className="flex flex-col gap-6 mt-16 mb-auto relative scroll-reveal">
<div className="group/item w-fit">
<a className="text-4xl md:text-6xl lg:text-7xl font-['Bebas_Neue'] tracking-tight text-[#f2f0e8] group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#f2f0e8] group-hover/item:to-[#C9A84C] transition-all duration-500" href="https://maps.google.com/?q=Vorderschlundstrasse+5a" rel="noopener" target="_blank">
              VORDERSCHLUNDSTRASSE 5 A
            </a>
</div>
<div className="group/item w-fit">
<a className="text-4xl md:text-6xl lg:text-7xl font-['Bebas_Neue'] tracking-tight text-[#f2f0e8] group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#f2f0e8] group-hover/item:to-[#C9A84C] transition-all duration-500" href="tel:0795401314">
              079 540 13 14
            </a>
</div>
<div className="group/item w-fit">
<a className="text-4xl md:text-6xl lg:text-7xl font-['Bebas_Neue'] tracking-tight text-[#f2f0e8] group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#f2f0e8] group-hover/item:to-[#C9A84C] transition-all duration-500" href="mailto:info@auto-voralpen.ch">
              INFO@AUTO-VORALPEN.CH
            </a>
</div>
</div>
<div className="select-none overflow-hidden flex scroll-reveal text-left w-full mt-12 relative justify-start">
<h2 className="text-[13vw] font-['Bebas_Neue'] tracking-tight text-[#f2f0e8] mix-blend-overlay opacity-25 pointer-events-none uppercase leading-none pb-2 md:pb-4">
            Auto Voralpen
          </h2>
<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
</div>
</div>
</footer>



    </>
  );
}
