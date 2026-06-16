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



      const lenis = new Lenis({
        duration: 1.15,
        easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smoothWheel: true
      });

      function lenisFrame(time) {
        lenis.raf(time);
        requestAnimationFrame(lenisFrame);
      }
      requestAnimationFrame(lenisFrame);

      gsap.registerPlugin(ScrollTrigger);
      lenis.on("scroll", ScrollTrigger.update);

      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
      heroTl.from("#site-header nav", { y: -24, opacity: 0, duration: 0.9 })
        .from(".hero-word", { yPercent: 105, duration: 1.1, stagger: 0.12 }, "-=0.45")
        .from(".gs-hero-copy p, .gs-hero-copy a", { y: 24, opacity: 0, duration: 0.75, stagger: 0.08,  clearProps: "opacity,transform" }, "-=0.55")
        .from(".gs-hero-panel", { y: 40, opacity: 0, scale: 0.96, duration: 1 }, "-=0.75");

      gsap.utils.toArray(".gs-fade-up").forEach(function(element) {
        gsap.fromTo(element,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      gsap.from(".gs-card", {
        y: 46,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: "#services",
          start: "top 70%"
        }
      });

      gsap.to(".glass-card", {
        y: -18,
        duration: 2.8,
        ease: "sine.inOut",
        stagger: 0.25,
        repeat: -1,
        yoyo: true
      });

      gsap.to("#hero-title", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      window.addEventListener("scroll", function() {
        const header = document.querySelector("#site-header nav");
        if (window.scrollY > 40) {
          header.classList.remove("bg-[#071B2C]/55", "border-white/10", "text-white");
          header.classList.add("bg-white/90", "border-[#D8E1EA]", "text-[#071B2C]");
        } else {
          header.classList.add("bg-[#071B2C]/55", "border-white/10", "text-white");
          header.classList.remove("bg-white/90", "border-[#D8E1EA]", "text-[#071B2C]");
        }
      });

      const canvas = document.getElementById("route-field");
      const ctx = canvas.getContext("2d");
      let width, height, routes, dots, mouseX = 0, mouseY = 0;

      function resizeCanvas() {
        width = canvas.width = window.innerWidth * Math.min(window.devicePixelRatio, 2);
        height = canvas.height = window.innerHeight * Math.min(window.devicePixelRatio, 2);
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        buildRoutes();
      }

      function buildRoutes() {
        routes = [];
        dots = [];
        const routeCount = Math.max(8, Math.floor(window.innerWidth / 140));
        for (let i = 0; i < routeCount; i++) {
          const startY = height * (0.18 + Math.random() * 0.55);
          const endY = height * (0.18 + Math.random() * 0.55);
          const cp1Y = height * (0.1 + Math.random() * 0.75);
          const cp2Y = height * (0.1 + Math.random() * 0.75);
          const route = {
            x1: -width * 0.1,
            y1: startY,
            x2: width * 1.1,
            y2: endY,
            cp1x: width * (0.2 + Math.random() * 0.2),
            cp1y: cp1Y,
            cp2x: width * (0.6 + Math.random() * 0.2),
            cp2y: cp2Y,
            speed: 0.0006 + Math.random() * 0.0007,
            offset: Math.random()
          };
          routes.push(route);
          dots.push({ route: route, t: Math.random(), size: 1.2 + Math.random() * 2.4, gold: Math.random() > 0.72 });
        }
      }

      function bezier(route, t) {
        const mt = 1 - t;
        const x = mt * mt * mt * route.x1 + 3 * mt * mt * t * route.cp1x + 3 * mt * t * t * route.cp2x + t * t * t * route.x2;
        const y = mt * mt * mt * route.y1 + 3 * mt * mt * t * route.cp1y + 3 * mt * t * t * route.cp2y + t * t * t * route.y2;
        return { x, y };
      }

      function drawRoute(route) {
        ctx.beginPath();
        ctx.moveTo(route.x1 + mouseX, route.y1 + mouseY);
        ctx.bezierCurveTo(route.cp1x + mouseX, route.cp1y + mouseY, route.cp2x + mouseX, route.cp2y + mouseY, route.x2 + mouseX, route.y2 + mouseY);
        ctx.strokeStyle = "rgba(139, 190, 224, 0.18)";
        ctx.lineWidth = Math.max(1, width / 1800);
        ctx.stroke();
      }

      function animateRoutes() {
        ctx.clearRect(0, 0, width, height);

        routes.forEach(function(route) {
          drawRoute(route);
        });

        dots.forEach(function(dot) {
          dot.t += dot.route.speed;
          if (dot.t > 1) dot.t = 0;
          const p = bezier(dot.route, dot.t);
          ctx.beginPath();
          ctx.arc(p.x + mouseX, p.y + mouseY, dot.size * Math.min(window.devicePixelRatio, 2), 0, Math.PI * 2);
          ctx.fillStyle = dot.gold ? "rgba(201, 162, 39, 0.86)" : "rgba(126, 185, 222, 0.75)";
          ctx.shadowColor = dot.gold ? "rgba(201, 162, 39, 0.7)" : "rgba(14, 74, 123, 0.8)";
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        requestAnimationFrame(animateRoutes);
      }

      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("mousemove", function(event) {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 18 * Math.min(window.devicePixelRatio, 2);
        mouseY = (event.clientY / window.innerHeight - 0.5) * 18 * Math.min(window.devicePixelRatio, 2);
      });

      resizeCanvas();
      animateRoutes();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6192ec3-a690-4b09-b0dd-893c775d6d1b_1600w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#071B2C]">
<img alt="Cargo vessel at sea" className="h-full w-full object-cover opacity-45 grayscale" src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&amp;fit=crop&amp;w=2400&amp;q=85"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#071B2C]/95 via-[#071B2C]/86 to-[#071B2C]"></div>
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<canvas className="absolute inset-0 h-full w-full opacity-70" height="1838" id="route-field" style={{width: '1440px', height: '919px'}} width="2880"></canvas>
</div>
<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="site-header">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<nav className="mt-4 flex items-center justify-between rounded-2xl border bg-white/10 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-300 md:px-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.10) !important', borderColor: 'rgba(255, 255, 255, 0.10) !important'}}>
<a className="flex items-center gap-3" href="#">
<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sm font-semibold tracking-tighter text-white">
              KL
            </div>
<div className="">
<div className="font-['Manrope',sans-serif] text-sm font-semibold uppercase tracking-tight">
                KL Maritime
              </div>
<div className="text-xs font-light text-white/50">
                Brokerage &amp; Shipbroking
              </div>
</div>
</a>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-light text-white/70 transition hover:text-white" href="#services">
              Services
            </a>
<a className="text-sm font-light text-white/70 transition hover:text-white" href="#markets">Services &amp; Capability</a>
<a className="text-sm font-light text-white/70 transition hover:text-white" href="#intelligence">About Us</a>
<a className="text-sm font-light text-white/70 transition hover:text-white" href="#contact">
              Contact
            </a>
</div>
<a className="group inline-flex items-center gap-2 rounded-lg bg-[#C9A227] px-4 py-2.5 text-sm font-medium text-[#071B2C] transition hover:bg-[#E8D9A3]" href="#contact">
            Request Consultation
            <svg aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</nav>
</div>
</header>
<main className="">
<section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 text-white sm:px-6 lg:px-8" id="hero">
<div className="absolute inset-x-0 top-24 hidden select-none justify-center overflow-hidden lg:flex">
<div className="font-['Manrope',sans-serif] text-[18vw] font-semibold uppercase leading-none tracking-tight text-white/[0.035]">
            MARITIME
          </div>
</div>
<div className="grid lg:grid-cols-12 w-full max-w-7xl z-10 mr-auto ml-auto pb-16 relative gap-x-12 gap-y-12 items-end">
<div className="gs-hero-copy lg:col-span-7">
<div className="mb-6 inline-flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.06] px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#E8D9A3] backdrop-blur-xl">
<span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]"></span>
              Established Since 1998
            </div>
<h1 className="font-['Manrope',sans-serif] text-5xl font-semibold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl" id="hero-title">
<span className="block overflow-hidden">
<span className="hero-word block">First Class</span>
</span>
<span className="block overflow-hidden">
<span className="hero-word block">Shipbroker House</span>
</span>
<span className="block overflow-hidden text-white/62">
<span className="hero-word block">In Malaysia</span>
</span>
</h1>
<p className="mt-7 max-w-2xl text-base font-light leading-8 text-white/70 sm:text-lg">KL Maritime provides dry and liquid bulk chartering, commodities brokerage &amp; trading, ship brokering, market intelligence, and vessel sales &amp; purchase services for domestic and international markets.</p>
<div className="flex flex-col gap-6 sm:flex-row sm:items-center mt-9 gap-x-6 gap-y-6">
<a className="group relative inline-flex items-center justify-center rounded-lg p-[3px] text-sm font-medium text-white transition-transform active:scale-95" href="#contact" style={{backgroundImage: 'linear-gradient(144deg, rgb(201, 162, 39), rgb(232, 217, 163) 50%, rgb(201, 162, 39))', boxShadow: 'rgba(201, 162, 39, 0.2) 0px 15px 30px -5px'}}>
<span className="flex h-full w-full items-center justify-center gap-2 rounded-[5px] bg-[#071B2C] px-6 py-[14px] transition-colors duration-300 group-hover:bg-transparent group-hover:text-[#071B2C]">
                  Discuss Chartering Needs
                </span>
</a>
<a className="group relative z-10 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#C9A227]/45 bg-[#C9A227]/15 px-6 py-[17px] text-sm font-medium text-white shadow-[0_12px_30px_-14px_rgba(201,162,39,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8D9A3]/70 hover:bg-[#C9A227]/25 hover:shadow-[0_18px_38px_-16px_rgba(201,162,39,0.9)] active:scale-95 sm:w-auto" href="#services" style={{display: 'inline-flex'}}>
                Explore Services
                <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="gs-hero-panel lg:col-span-5">
<div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.08] p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
<div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0E4A7B]/40 blur-3xl"></div>
<div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#C9A227]/15 blur-3xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#071B2C]/50 p-5">
<div className="mb-6 flex items-center justify-between">
<div className="">
<div className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Live Desk Coverage
                    </div>
<div className="mt-1 font-['Manrope',sans-serif] text-xl font-medium tracking-tight">
                      Chartering &amp; S&amp;P
                    </div>
</div>
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#E8D9A3] ring-1 ring-white/10">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="ship" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(232, 217, 163)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10.189V14"></path>
<path d="M12 2v3"></path>
<path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
<path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path>
<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1">
</path>
</svg>
</div>
</div>
<div className="space-y-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
<div className="flex items-center justify-between">
<span className="text-xs font-light uppercase tracking-[0.18em] text-white/45">
                        Cargo Class
                      </span>
<span className="rounded-md bg-[#C9A227]/15 px-2 py-1 text-xs font-medium text-[#E8D9A3]">
                        Dry / Liquid Bulk
                      </span>
</div>
<div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#0E4A7B] to-[#C9A227]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
<div className="text-3xl font-light tracking-tight text-white">
                        27+
                      </div>
<div className="mt-1 text-xs font-light uppercase tracking-widest text-white/45">
                        Years Market Focus
                      </div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
<div className="text-3xl font-light tracking-tight text-white">
                        24h
                      </div>
<div className="mt-1 text-xs font-light uppercase tracking-widest text-white/45">
                        Trade Desk Response
                      </div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0E4A7B]/40 text-white ring-1 ring-white/10">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">
                          Freight and vessel market intelligence
                        </div>
<div className="text-xs font-light text-white/45">
                          Reviewed across route, cargo, and timing risk.
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-3 text-center">
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
<div className="font-['Manrope',sans-serif] text-2xl font-medium tracking-tight">
                  1998
                </div>
<div className="mt-1 text-xs text-white/45">Founded</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
<div className="font-['Manrope',sans-serif] text-2xl font-medium tracking-tight">
                  MY
                </div>
<div className="mt-1 text-xs text-white/45">Based</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
<div className="font-['Manrope',sans-serif] text-2xl font-medium tracking-tight">
                  INTL
                </div>
<div className="mt-1 text-xs text-white/45">Network</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/35 md:flex">
<span className="h-px w-12 bg-white/20"></span>
          Scroll to navigate
          <span className="h-px w-12 bg-white/20"></span>
</div>
</section>
<section className="relative bg-[#F7F9FB] px-4 py-20 sm:px-6 lg:px-8 lg:py-28" id="services">
<div className="mx-auto max-w-7xl">
<div className="gs-fade-up mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
<div className="">
<div className="mb-4 inline-flex rounded-md bg-[#C9A227]/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A16]">
                Capabilities
              </div>
<h2 className="font-['Manrope',sans-serif] text-4xl font-semibold leading-tight tracking-tight text-[#071B2C] sm:text-5xl lg:text-6xl">
                Integrated maritime brokerage services.
              </h2>
</div>
<p className="max-w-md text-sm leading-7 text-[#5F7488]">
              Structured support across chartering, commodities, intelligence,
              and vessel transactions — built for owners, charterers, cargo
              interests, and trading houses.
            </p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">

<article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 border border-[#D8E1EA]/60 shadow-[0_8px_24px_-12px_rgba(7,27,44,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-16px_rgba(14,74,123,0.12)] hover:border-[#C9A227]/40">
<div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0E4A7B] to-[#C9A227] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
<div className="mb-8 flex items-start justify-between">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0E4A7B]/5 to-[#0E4A7B]/10 text-[#0E4A7B] ring-1 ring-[#0E4A7B]/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0E4A7B] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0E4A7B]/25">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 3.2-1.5 5.5-1.5 2.3 0 3 1.5 5.5 1.5 1.3 0 1.9-.5 2.5-1"></path><path className="" d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M12 10v4"></path><path d="M12 2v3"></path></svg>
</div>
<div className="font-mono text-xs font-normal uppercase tracking-[0.2em] text-[#C9A227]/70 transition-colors duration-500 group-hover:text-[#C9A227]">
        // 01
      </div>
</div>
<h3 className="font-['Manrope',sans-serif] text-xl font-medium tracking-tight text-[#071B2C] mb-4">
      Worldwide Vessel Chartering
    </h3>
<p className="text-sm leading-relaxed text-[#5F7488] flex-grow">
      Dry and liquid bulk chartering across time chartering, contract
      of affreightment, and spot chartering.
    </p>
<a className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-normal text-[#0E4A7B] transition-colors hover:text-[#C9A227]" href="#contact">
      Learn more
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>

<article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 border border-[#D8E1EA]/60 shadow-[0_8px_24px_-12px_rgba(7,27,44,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-16px_rgba(14,74,123,0.12)] hover:border-[#C9A227]/40">
<div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0E4A7B] to-[#C9A227] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
<div className="mb-8 flex items-start justify-between">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0E4A7B]/5 to-[#0E4A7B]/10 text-[#0E4A7B] ring-1 ring-[#0E4A7B]/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0E4A7B] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0E4A7B]/25">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="font-mono text-xs font-normal uppercase tracking-[0.2em] text-[#C9A227]/70 transition-colors duration-500 group-hover:text-[#C9A227]">
        // 02
      </div>
</div>
<h3 className="font-['Manrope',sans-serif] text-xl font-medium tracking-tight text-[#071B2C] mb-4">
      Commodities Trading &amp; Brokering
    </h3>
<p className="text-sm leading-relaxed text-[#5F7488] flex-grow">
      Brokerage support for petroleum products, edible oils, palm oil,
      soy, rapeseed, sand, aggregates, and dry cargo.
    </p>
<a className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-normal text-[#0E4A7B] transition-colors hover:text-[#C9A227]" href="#contact">
      Learn more
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>

<article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 border border-[#D8E1EA]/60 shadow-[0_8px_24px_-12px_rgba(7,27,44,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-16px_rgba(14,74,123,0.12)] hover:border-[#C9A227]/40">
<div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0E4A7B] to-[#C9A227] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
<div className="mb-8 flex items-start justify-between">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0E4A7B]/5 to-[#0E4A7B]/10 text-[#0E4A7B] ring-1 ring-[#0E4A7B]/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0E4A7B] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0E4A7B]/25">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="font-mono text-xs font-normal uppercase tracking-[0.2em] text-[#C9A227]/70 transition-colors duration-500 group-hover:text-[#C9A227]">
        // 03
      </div>
</div>
<h3 className="font-['Manrope',sans-serif] text-xl font-medium tracking-tight text-[#071B2C] mb-4">
      Ship Brokering &amp; Market Intelligence
    </h3>
<p className="text-sm leading-relaxed text-[#5F7488] flex-grow">
      Strategic market reviews, freight insights, negotiation support,
      and vessel network access.
    </p>
<a className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-normal text-[#0E4A7B] transition-colors hover:text-[#C9A227]" href="#contact">
      Learn more
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>

<article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 border border-[#D8E1EA]/60 shadow-[0_8px_24px_-12px_rgba(7,27,44,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-16px_rgba(14,74,123,0.12)] hover:border-[#C9A227]/40">
<div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0E4A7B] to-[#C9A227] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
<div className="mb-8 flex items-start justify-between">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0E4A7B]/5 to-[#0E4A7B]/10 text-[#0E4A7B] ring-1 ring-[#0E4A7B]/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0E4A7B] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0E4A7B]/25">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
</div>
<div className="font-mono text-xs font-normal uppercase tracking-[0.2em] text-[#C9A227]/70 transition-colors duration-500 group-hover:text-[#C9A227]">
        // 04
      </div>
</div>
<h3 className="font-['Manrope',sans-serif] text-xl font-medium tracking-tight text-[#071B2C] mb-4">
      Vessel Sales &amp; Purchase
    </h3>
<p className="text-sm leading-relaxed text-[#5F7488] flex-grow">
      End-to-end support for vessel sourcing, buyer matching, legal
      coordination, negotiation, and ownership transfer.
    </p>
<a className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-normal text-[#0E4A7B] transition-colors hover:text-[#C9A227]" href="#contact">
      Learn more
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>
</div>
</div>
</section>
<section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl rounded-[1.25rem] border border-[#D8E1EA] bg-[#071B2C] p-4 text-white shadow-[0_1rem_2.5rem_rgba(7,27,44,0.12)]">
<div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
<div className="gs-fade-up p-6">
<div className="text-xs uppercase tracking-[0.22em] text-[#E8D9A3]">Established</div>
<div className="mt-2 font-['Manrope',sans-serif] text-4xl font-semibold tracking-tight">
                1998
              </div>
<p className="mt-2 text-sm font-light text-white/55">First Class Shipbroker House in Malaysia.</p>
</div>
<div className="gs-fade-up p-6">
<div className="text-xs uppercase tracking-[0.22em] text-[#E8D9A3]">Markets</div>
<div className="mt-2 font-['Manrope',sans-serif] text-4xl font-semibold tracking-tight">Global</div>
<p className="mt-2 text-sm font-light text-white/55">Full-range freight brokerage.</p>
</div>
<div className="gs-fade-up p-6">
<div className="text-xs uppercase tracking-[0.22em] text-[#E8D9A3]">Products</div>
<div className="mt-2 font-['Manrope',sans-serif] text-4xl font-semibold tracking-tight">Specialized Cargo</div>
<p className="mt-2 text-sm font-light text-white/55">Vegetable oils, petrochemicals and clean petroleum products.
</p>
</div>
<div className="gs-fade-up p-6">
<div className="text-xs uppercase tracking-[0.22em] text-[#E8D9A3]">
                Approach
              </div>
<div className="mt-2 font-['Manrope',sans-serif] text-4xl font-semibold tracking-tight">Market Intelligence</div>
<p className="mt-2 text-sm font-light text-white/55">Freight reviews, COA expertise and informed decisions.</p>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#F7F9FB] px-4 py-20 sm:px-6 lg:px-8 lg:py-28" id="markets">
<div className="absolute right-0 top-10 hidden font-['Manrope',sans-serif] text-[14vw] font-semibold uppercase leading-none tracking-tight text-[#071B2C]/[0.035] lg:block">
          CARGO
        </div>
<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
<div className="gs-fade-up lg:col-span-5">
<div className="mb-4 inline-flex rounded-md bg-[#0E4A7B]/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#0E4A7B]">
              Market Expertise
            </div>
<h2 className="font-['Manrope',sans-serif] text-4xl font-semibold leading-tight tracking-tight text-[#071B2C] sm:text-5xl">Trade, cargo brokerage and chartering — only from KL Maritime.</h2>
<p className="mt-6 text-sm leading-7 text-[#5F7488]">
              We connect cargo requirements with suitable tonnage, market
              positioning, and practical negotiation support across liquid and
              dry bulk segments.
            </p>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-4 rounded-2xl border border-[#D8E1EA] bg-white p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#9A7A16]">
<iconify-icon className="text-xl" icon="solar:dropper-minimalistic-2-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#071B2C]">
                    Oil, Gas &amp; Chemicals
                  </div>
<div className="text-xs text-[#5F7488]">
                    Petroleum products and chemical cargo requirements.
                  </div>
</div>
</div>
<div className="flex items-center gap-4 rounded-2xl border border-[#D8E1EA] bg-white p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#9A7A16]">
<iconify-icon className="text-xl" icon="solar:bag-4-linear"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-[#071B2C]">
                    Dry Bulk Cargo
                  </div>
<div className="text-xs text-[#5F7488]">
                    Sand, aggregates, minerals, and general dry cargo.
                  </div>
</div>
</div>
<div className="flex items-center gap-4 rounded-2xl border border-[#D8E1EA] bg-white p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#9A7A16]">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-[#071B2C]">Edible Oil</div>
<div className="text-xs text-[#5F7488]">
                    Palm oil, soy, rapeseed, and related commodity flows.
                  </div>
</div>
</div>
</div>
</div>
<div className="gs-fade-up lg:col-span-7">
<div className="relative overflow-hidden rounded-[1.25rem] border border-[#D8E1EA] bg-white p-3 shadow-[0_1rem_2.5rem_rgba(7,27,44,0.08)]">
<img alt="Port container terminal" className="h-[28rem] w-full rounded-2xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6192ec3-a690-4b09-b0dd-893c775d6d1b_3840w.webp"/>
<div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-[#071B2C]/85 via-[#071B2C]/15 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
<span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]"></span>
                  Trade route evaluation
                </div>
<h3 className="font-['Manrope',sans-serif] text-3xl font-semibold tracking-tight text-white">
                  Freight strategy aligned to route, vessel, and cargo risk.
                </h3>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#071B2C] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28" id="intelligence">
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 20% 20%, #C9A227 0, transparent 25%), radial-gradient(circle at 80% 30%, #0E4A7B 0, transparent 30%)'}}></div>
<div className="mx-auto max-w-7xl">
<div className="gs-fade-up mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
<div>
<div className="mb-4 inline-flex rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#E8D9A3]">
                Market Intelligence
              </div>
<h2 className="font-['Manrope',sans-serif] text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Insight before fixture. Discipline before exposure.
              </h2>
</div>
<p className="max-w-md text-sm font-light leading-7 text-white/60">
              Our brokerage process combines vessel availability, cargo demand,
              freight indications, counterparty evaluation, and timing
              discipline.
            </p>
</div>
<div className="grid gap-5 lg:grid-cols-3">
<div className="gs-fade-up rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#E8D9A3]">
<iconify-icon className="text-2xl" icon="solar:radar-2-linear"></iconify-icon>
</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-semibold tracking-tight">COA Expertise</h3>
<p className="mt-4 text-sm font-light leading-7 text-white/55">Our Contract of Affreightment expertise helps ship owners and charterers secure suitable deals through reputable industry networks.</p>
</div>
<div className="gs-fade-up rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl lg:translate-y-10">
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#E8D9A3]">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-semibold tracking-tight">Freight Market Reviews</h3>
<p className="mt-4 text-sm font-light leading-7 text-white/55">We provide up-to-date freight market reviews to support informed commercial decisions.</p>
</div>
<div className="gs-fade-up rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#E8D9A3]">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-semibold tracking-tight">Time Charter Strategy</h3>
<p className="mt-4 text-sm font-light leading-7 text-white/55">Depending on shipping requirements, our expertise and analytical skills support effective Time Charter strategies.</p>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
<div className="mx-auto max-w-7xl">
<div className="gs-fade-up mb-12 text-center">
<p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-[#9A7A16]">
              Client Confidence
            </p>
<h2 className="font-['Manrope',sans-serif] text-4xl font-semibold tracking-tight text-[#071B2C] sm:text-5xl">
              Brokerage standards that endure.
            </h2>
</div>
<div className="relative mx-auto flex min-h-[34rem] max-w-6xl items-center justify-center overflow-hidden py-10">
<div className="absolute h-80 w-80 rounded-full bg-[#0E4A7B]/10 blur-3xl"></div>
<div className="glass-card hidden md:flex" style={{position: 'relative', width: '21rem', height: '21rem', background: 'linear-gradient(rgba(14, 74, 123, 0.10), transparent)', border: '1px solid rgba(7, 27, 44, 0.08)', boxShadow: 'rgba(7, 27, 44, 0.10) 0 1.5rem 3rem', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0 -3rem', backdropFilter: 'blur(0.75rem)', transform: 'rotate(-10deg)'}}>
<div className="absolute inset-4 overflow-hidden rounded-xl bg-white/90 p-6 text-[#102033] shadow-2xl ring-1 ring-[#D8E1EA] backdrop-blur">
<div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0E4A7B]/10 text-[#0E4A7B]">
<iconify-icon className="text-xl" icon="solar:chat-round-like-linear"></iconify-icon>
</div>
<p className="text-sm leading-7 text-[#102033]">
                  KL Maritime brings calm, precise negotiation into complex
                  chartering discussions. Their timing and market reading have
                  been consistently valuable.
                </p>
<div className="mt-6 border-t border-[#D8E1EA] pt-4">
<div className="text-sm font-medium">Regional Charterer</div>
<div className="text-xs text-[#5F7488]">Liquid bulk segment</div>
</div>
</div>
</div>
<div className="glass-card z-10 flex" style={{position: 'relative', width: '21rem', height: '21rem', background: 'linear-gradient(rgba(201, 162, 39, 0.12), transparent)', border: '1px solid rgba(7, 27, 44, 0.08)', boxShadow: 'rgba(7, 27, 44, 0.12) 0 1.5rem 3rem', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0 -3rem', backdropFilter: 'blur(0.75rem)', transform: 'rotate(0deg)'}}>
<div className="absolute inset-4 overflow-hidden rounded-xl bg-white p-6 text-[#102033] shadow-2xl ring-1 ring-[#D8E1EA]">
<div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#C9A227]/10 text-[#9A7A16]">
<iconify-icon className="text-xl" icon="solar:chat-round-like-linear"></iconify-icon>
</div>
<p className="text-sm leading-7 text-[#102033]">
                  Their shipbroking support is thorough, discreet, and
                  commercially focused. We value the quality of their
                  communication across each stage.
                </p>
<div className="mt-6 border-t border-[#D8E1EA] pt-4">
<div className="text-sm font-medium">Vessel Owner Desk</div>
<div className="text-xs text-[#5F7488]">
                    Southeast Asia network
                  </div>
</div>
</div>
</div>
<div className="glass-card hidden md:flex" style={{position: 'relative', width: '21rem', height: '21rem', background: 'linear-gradient(rgba(14, 74, 123, 0.08), transparent)', border: '1px solid rgba(7, 27, 44, 0.08)', boxShadow: 'rgba(7, 27, 44, 0.10) 0 1.5rem 3rem', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0 -3rem', backdropFilter: 'blur(0.75rem)', transform: 'rotate(8deg)'}}>
<div className="absolute inset-4 overflow-hidden rounded-xl bg-white/90 p-6 text-[#102033] shadow-2xl ring-1 ring-[#D8E1EA] backdrop-blur">
<div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0E4A7B]/10 text-[#0E4A7B]">
<iconify-icon className="text-xl" icon="solar:chat-round-like-linear"></iconify-icon>
</div>
<p className="text-sm leading-7 text-[#102033]">
                  A reliable brokerage partner for cargo movement and
                  transaction coordination. Their process gives confidence under
                  tight timelines.
                </p>
<div className="mt-6 border-t border-[#D8E1EA] pt-4">
<div className="text-sm font-medium">Commodity Trader</div>
<div className="text-xs text-[#5F7488]">Dry bulk cargo</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#F7F9FB] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
<div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
<div className="gs-fade-up rounded-[1.25rem] bg-[#071B2C] p-8 text-white lg:p-10">
<div className="mb-4 inline-flex rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#E8D9A3]">
              Why KL Maritime
            </div>
<h2 className="font-['Manrope',sans-serif] text-4xl font-semibold tracking-tight sm:text-5xl">
              Built on disciplined brokerage values.
            </h2>
<p className="mt-6 max-w-lg text-sm font-light leading-7 text-white/60">
              Our work is guided by responsibility, honesty, loyalty, teamwork,
              and careful market judgement — values that matter when commercial
              decisions carry operational risk.
            </p>
</div>
<div className="grid gap-5 sm:grid-cols-2">
<div className="gs-fade-up rounded-[1.25rem] border border-[#D8E1EA] bg-white p-6">
<iconify-icon className="text-3xl text-[#0E4A7B]" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="mt-8 font-['Manrope',sans-serif] text-xl font-semibold tracking-tight">
                Teamwork
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5F7488]">
                Coordinated communication across cargo, owner, and operational
                stakeholders.
              </p>
</div>
<div className="gs-fade-up rounded-[1.25rem] border border-[#D8E1EA] bg-white p-6">
<iconify-icon className="text-3xl text-[#0E4A7B]" icon="solar:clipboard-check-linear"></iconify-icon>
<h3 className="mt-8 font-['Manrope',sans-serif] text-xl font-semibold tracking-tight">
                Responsibility
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5F7488]">
                Careful review of requirements, exposure, documentation, and
                commercial fit.
              </p>
</div>
<div className="gs-fade-up rounded-[1.25rem] border border-[#D8E1EA] bg-white p-6">
<iconify-icon className="text-3xl text-[#0E4A7B]" icon="solar:hand-heart-linear"></iconify-icon>
<h3 className="mt-8 font-['Manrope',sans-serif] text-xl font-semibold tracking-tight">Honesty &amp; Loyalty</h3>
<p className="mt-3 text-sm leading-7 text-[#5F7488]">
                Clear brokerage communication designed to support informed
                decision-making.
              </p>
</div>
<div className="gs-fade-up rounded-[1.25rem] border border-[#D8E1EA] bg-white p-6">
<iconify-icon className="text-3xl text-[#0E4A7B]" icon="solar:medal-ribbons-star-linear"></iconify-icon>
<h3 className="mt-8 font-['Manrope',sans-serif] text-xl font-semibold tracking-tight">Disciplined</h3>
<p className="mt-3 text-sm leading-7 text-[#5F7488]">
                Long-term relationships built through reliability, discretion,
                and performance.
              </p>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#071B2C] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28" id="contact">
<div className="absolute inset-0 opacity-30">
<img alt="Ocean vessel horizon" className="h-full w-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a263445e-7d28-4abe-8627-2a9ee4001357_3840w.webp"/>
<div className="absolute inset-0 bg-[#071B2C]/80"></div>
</div>
<div className="relative mx-auto max-w-7xl">
<div className="gs-fade-up mx-auto max-w-4xl text-center">
<div className="mb-5 inline-flex rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#E8D9A3]">
              Start a Conversation
            </div>
<h2 className="font-['Manrope',sans-serif] text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
              Move cargo and vessel decisions with confidence.
            </h2>
<p className="mx-auto mt-7 max-w-2xl text-sm font-light leading-7 text-white/65">
              Contact KL Maritime to discuss vessel chartering, commodity
              brokerage, vessel sales &amp; purchase, or market intelligence
              requirements.
            </p>
<div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
<a className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#C9A227] px-5 py-3.5 text-sm font-medium text-[#071B2C] transition hover:bg-[#E8D9A3]" href="mailto:info@klmaritime.com">
                Contact KL Maritime
                <iconify-icon className="text-lg transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/25 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/10" href="tel:+60300000000">
                Call Brokerage Desk
                <iconify-icon className="text-lg" icon="solar:phone-calling-rounded-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-[#061522] px-4 py-10 text-white sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row">
<div>
<div className="font-['Manrope',sans-serif] text-2xl font-semibold uppercase tracking-tight">
              KL Maritime
            </div>
<p className="mt-4 max-w-sm text-sm font-light leading-7 text-white/50">
              Premium maritime brokerage, vessel chartering, commodities
              brokering, shipbroking, market intelligence, and vessel sales
              &amp; purchase.
            </p>
</div>
<div className="grid gap-10 sm:grid-cols-3">
<div>
<div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#E8D9A3]">
                Services
              </div>
<div className="space-y-3 text-sm font-light text-white/55">
<a className="block transition hover:text-white" href="#services">
                  Vessel Chartering
                </a>
<a className="block transition hover:text-white" href="#services">
                  Commodities Brokering
                </a>
<a className="block transition hover:text-white" href="#services">
                  Ship Brokering
                </a>
</div>
</div>
<div>
<div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#E8D9A3]">
                Markets
              </div>
<div className="space-y-3 text-sm font-light text-white/55">
<a className="block transition hover:text-white" href="#markets">
                  Dry Bulk
                </a>
<a className="block transition hover:text-white" href="#markets">
                  Liquid Bulk
                </a>
<a className="block transition hover:text-white" href="#markets">
                  Edible Oils
                </a>
</div>
</div>
<div className="">
<div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#E8D9A3]">
                Contact
              </div>
<div className="space-y-3 text-sm font-light text-white/55">
<a className="block transition hover:text-white" href="mailto:info@klmaritime.com">
                  info@klmaritime.com
                </a>
<a className="block transition hover:text-white" href="tel:+60300000000">
                  +60 3 0000 0000
                </a>
<a className="block transition hover:text-white" href="#">
                  Malaysia
                </a>
</div>
</div>
</div>
</div>
<div className="flex flex-col justify-between gap-4 pt-8 text-xs font-light uppercase tracking-[0.18em] text-white/35 sm:flex-row">
<p>© 2026 KL Maritime. All rights reserved.</p>
<p>Trust. Intelligence. Global Reach.</p>
</div>
</div>
</footer>


    </>
  );
}
