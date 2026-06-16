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



      const menuButton = document.getElementById("menuButton");
      const mobileMenu = document.getElementById("mobileMenu");
      const menuIcon = document.getElementById("menuIcon");

      function renderIcons() {
        lucide.createIcons({
          attrs: {
            "stroke-width": 1.5
          }
        });
      }

      menuButton.addEventListener("click", () => {
        const isOpen = !mobileMenu.classList.contains("hidden");
        mobileMenu.classList.toggle("hidden");
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
        menuIcon.setAttribute("data-lucide", isOpen ? "menu" : "x");
        renderIcons();
      });

      document.querySelectorAll("#mobileMenu a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", "Open menu");
          menuIcon.setAttribute("data-lucide", "menu");
          renderIcons();
        });
      });

      renderIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative min-h-screen overflow-hidden">
<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 bg-black"></div>
<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-25" style={{backgroundImage: 'linear-gradient(rgba(37,99,235,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.12) 1px, transparent 1px)', backgroundSize: '4rem 4rem', animation: 'gridMove 20s linear infinite'}}></div>
<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,rgba(29,78,216,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(30,64,175,0.12),transparent_32%),linear-gradient(to_bottom,rgba(2,6,23,0.22),rgba(2,6,23,1))]"></div>
<header className="fixed inset-x-0 top-0 z-50 border-b border-blue-400/10 bg-slate-950/70 backdrop-blur-xl">
<nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a aria-label="Cape Current Electrical home" className="group flex items-center gap-3" href="#home">
<span className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 shadow-[0_0_40px_rgba(37,99,235,0.25)]">
<i className="h-5 w-5 text-blue-300" data-lucide="zap"></i>
<span className="absolute inset-0 rounded-2xl border border-blue-300/20 opacity-0 transition group-hover:opacity-100"></span>
</span>
<span className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight text-white">
                Cape Current
              </span>
<span className="mt-1 text-xs font-medium uppercase tracking-[0.18rem] text-blue-300/80">
                Electrical
              </span>
</span>
</a>
<div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" href="#home">
              Home
            </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" href="#services">
              Services
            </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" href="#contact">
              Contact
            </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" href="#about">
              About
            </a>
</div>
<div className="hidden items-center gap-3 md:flex">
<a className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-100 shadow-[0_0_40px_rgba(37,99,235,0.16)] transition hover:bg-blue-500/20" href="tel:+27215550197">
<i className="h-4 w-4" data-lucide="phone"></i>
              Call 021 555 0197
            </a>
<a className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_40px_rgba(37,99,235,0.35)] transition hover:bg-blue-400" href="#contact">
              Get a quote
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-100 md:hidden" id="menuButton" type="button">
<i className="h-5 w-5" data-lucide="menu" id="menuIcon"></i>
</button>
</nav>
<div className="hidden border-t border-white/10 bg-slate-950/95 px-4 py-4 shadow-2xl md:hidden" id="mobileMenu">
<div className="mx-auto flex max-w-7xl flex-col gap-2">
<a className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/10" href="#home">
              Home
            </a>
<a className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/10" href="#services">
              Services
            </a>
<a className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/10" href="#contact">
              Contact
            </a>
<a className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/10" href="#about">
              About
            </a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-4 py-3 text-base font-semibold text-white" href="tel:+27215550197">
<i className="h-4 w-4" data-lucide="phone"></i>
              Call 021 555 0197
            </a>
</div>
</div>
</header>
<main id="home">
<section className="relative isolate overflow-hidden pt-28 sm:pt-32">
<svg aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full opacity-80" preserveaspectratio="xMidYMid slice" viewbox="0 0 1600 980">
<defs>
<lineargradient id="cableFade" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="#020617"></stop>
<stop offset="0.5" stop-color="#2563eb"></stop>
<stop offset="1" stop-color="#020617"></stop>
</lineargradient>
<radialgradient cx="50%" cy="50%" id="blueCore" r="50%">
<stop offset="0" stop-color="#2563eb" stop-opacity="0.55"></stop>
<stop offset="0.55" stop-color="#1d4ed8" stop-opacity="0.16"></stop>
<stop offset="1" stop-color="#020617" stop-opacity="0"></stop>
</radialgradient>
</defs>
<rect fill="#020617" height="980" width="1600"></rect>
<circle cx="1180" cy="340" fill="url(#blueCore)" r="420" style={{animation: 'softGlow 7s ease-in-out infinite'}}></circle>
<circle cx="330" cy="620" fill="url(#blueCore)" opacity="0.38" r="380" style={{animation: 'softGlow 9s ease-in-out infinite'}}></circle>
<g fill="none" strokeLinecap="round">
<path d="M-90 710 C 190 520, 350 785, 570 575 S 970 235, 1210 370 S 1450 650, 1700 440" opacity="0.82" stroke="url(#cableFade)" strokeWidth="24"></path>
<path d="M-120 300 C 180 165, 330 420, 550 280 S 880 100, 1090 210 S 1410 420, 1710 260" opacity="0.78" stroke="#020617" strokeWidth="26"></path>
<path d="M-120 300 C 180 165, 330 420, 550 280 S 880 100, 1090 210 S 1410 420, 1710 260" opacity="0.9" stroke="#172554" strokeWidth="8"></path>
<path d="M-100 865 C 240 740, 410 940, 670 755 S 1060 565, 1310 700 S 1480 875, 1690 720" opacity="0.92" stroke="#020617" strokeWidth="28"></path>
<path d="M-100 865 C 240 740, 410 940, 670 755 S 1060 565, 1310 700 S 1480 875, 1690 720" opacity="0.82" stroke="#1e3a8a" strokeWidth="9"></path>
<path d="M1280 -80 C 1160 170, 1325 290, 1195 455 S 1090 720, 1235 1050" opacity="0.86" stroke="#020617" strokeWidth="34"></path>
<path d="M1280 -80 C 1160 170, 1325 290, 1195 455 S 1090 720, 1235 1050" opacity="0.82" stroke="#172554" strokeWidth="10"></path>
<path d="M-90 710 C 190 520, 350 785, 570 575 S 970 235, 1210 370 S 1450 650, 1700 440" stroke="#3b82f6" stroke-dasharray="120 400" strokeWidth="8" style={{animation: 'electricPulse 4.8s linear infinite'}}></path>
<path d="M-120 300 C 180 165, 330 420, 550 280 S 880 100, 1090 210 S 1410 420, 1710 260" stroke="#60a5fa" stroke-dasharray="90 420" strokeWidth="7" style={{animation: 'electricPulse 5.6s linear infinite', animationDelay: '-1.6s'}}></path>
<path d="M-100 865 C 240 740, 410 940, 670 755 S 1060 565, 1310 700 S 1480 875, 1690 720" stroke="#2563eb" stroke-dasharray="140 380" strokeWidth="8" style={{animation: 'electricPulse 6.4s linear infinite', animationDelay: '-2.2s'}}></path>
<path d="M1280 -80 C 1160 170, 1325 290, 1195 455 S 1090 720, 1235 1050" stroke="#60a5fa" stroke-dasharray="110 360" strokeWidth="8" style={{animation: 'electricPulse 5.1s linear infinite', animationDelay: '-0.8s'}}></path>
</g>
</svg>
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.38),rgba(2,6,23,0.98)),linear-gradient(to_right,rgba(2,6,23,0.99),rgba(2,6,23,0.50),rgba(2,6,23,0.94))]"></div>
<div className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-32">
<div className="flex flex-col justify-center">
<div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-100 shadow-[0_0_50px_rgba(37,99,235,0.16)]">
<span className="flex h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(147,197,253,1)]"></span>
                Licensed electricians serving Cape Town
              </div>
<h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Reliable electricians in Cape Town, wired for safety and speed.
              </h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                From urgent fault finding to clean commercial fit-outs, Cape
                Current Electrical delivers dependable workmanship, clear
                communication and neat handovers across the Cape Town metro.
              </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-4 text-base font-semibold text-white shadow-[0_0_50px_rgba(37,99,235,0.32)] transition hover:bg-blue-400" href="#contact">
                  Request a quote
                  <i className="h-5 w-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-base font-semibold text-slate-100 transition hover:bg-white/10" href="tel:+27215550197">
<i className="h-5 w-5 text-blue-300" data-lucide="phone-call"></i>
                  021 555 0197
                </a>
</div>
<div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
<div className="flex items-center gap-2 text-blue-200">
<i className="h-5 w-5" data-lucide="shield-check"></i>
<span className="text-sm font-semibold">Certified</span>
</div>
<p className="mt-2 text-base text-slate-300">
                    Registered, insured and safety-focused.
                  </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
<div className="flex items-center gap-2 text-blue-200">
<i className="h-5 w-5" data-lucide="clock-3"></i>
<span className="text-sm font-semibold">On time</span>
</div>
<p className="mt-2 text-base text-slate-300">
                    Fast response for homes and businesses.
                  </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
<div className="flex items-center gap-2 text-blue-200">
<i className="h-5 w-5" data-lucide="sparkles"></i>
<span className="text-sm font-semibold">Clean work</span>
</div>
<p className="mt-2 text-base text-slate-300">
                    Neat installs, tidy sites, clear advice.
                  </p>
</div>
</div>
</div>
<div className="relative lg:pt-8" id="contact">
<div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-3xl"></div>
<div className="relative rounded-[2rem] border border-blue-200/15 bg-slate-950/78 p-5 shadow-2xl shadow-blue-950/50 backdrop-blur-2xl sm:p-6 lg:p-8">
<div className="mb-6 flex items-start justify-between gap-6">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.18rem] text-blue-300">
                      Contact
                    </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Tell us what needs power.
                    </h2>
<p className="mt-3 text-base leading-7 text-slate-300">
                      Send the details and we’ll come back with the next step.
                    </p>
</div>
<div className="hidden rounded-2xl border border-blue-300/20 bg-blue-500/10 p-3 text-blue-200 sm:block">
<i className="h-6 w-6" data-lucide="send"></i>
</div>
</div>
<form action="#" className="grid gap-4" method="post">
<div className="grid gap-4 sm:grid-cols-2">
<label className="grid gap-2">
<span className="text-sm font-medium text-slate-200">
                        Name
                      </span>
<input autocomplete="name" className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base text-white placeholder:text-slate-500 transition focus:border-blue-300/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/15" name="name" placeholder="Your name" required="" type="text"/>
</label>
<label className="grid gap-2">
<span className="text-sm font-medium text-slate-200">
                        Phone
                      </span>
<input autocomplete="tel" className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base text-white placeholder:text-slate-500 transition focus:border-blue-300/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/15" name="phone" placeholder="021 000 0000" required="" type="tel"/>
</label>
</div>
<label className="grid gap-2">
<span className="text-sm font-medium text-slate-200">
                      Email
                    </span>
<input autocomplete="email" className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base text-white placeholder:text-slate-500 transition focus:border-blue-300/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/15" name="email" placeholder="you@example.co.za" required="" type="email"/>
</label>
<label className="grid gap-2">
<span className="text-sm font-medium text-slate-200">
                      Suburb
                    </span>
<input autocomplete="address-level2" className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base text-white placeholder:text-slate-500 transition focus:border-blue-300/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/15" name="suburb" placeholder="Sea Point, Claremont, Gardens..." type="text"/>
</label>
<label className="grid gap-2">
<span className="text-sm font-medium text-slate-200">
                      Message
                    </span>
<textarea className="resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base text-white placeholder:text-slate-500 transition focus:border-blue-300/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/15" name="message" placeholder="Briefly describe the electrical work you need." required="" rows="5"></textarea>
</label>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-4 text-base font-semibold text-white shadow-[0_0_45px_rgba(37,99,235,0.34)] transition hover:bg-blue-400" type="submit">
                    Submit enquiry
                    <i className="h-5 w-5" data-lucide="arrow-up-right"></i>
</button>
<p className="text-sm leading-6 text-slate-400">
                    For urgent electrical faults, call us directly. We
                    prioritise safety-critical work.
                  </p>
</form>
</div>
</div>
</div>
</section>
<section className="border-y border-white/10 bg-slate-950/70 py-10">
<div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
<div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
<i className="h-5 w-5 text-blue-300" data-lucide="map-pin"></i>
<p className="text-base font-medium text-slate-200">
                Cape Town Metro
              </p>
</div>
<div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
<i className="h-5 w-5 text-blue-300" data-lucide="home"></i>
<p className="text-base font-medium text-slate-200">
                Residential specialists
              </p>
</div>
<div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
<i className="h-5 w-5 text-blue-300" data-lucide="building-2"></i>
<p className="text-base font-medium text-slate-200">
                Commercial fit-outs
              </p>
</div>
<div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
<i className="h-5 w-5 text-blue-300" data-lucide="badge-check"></i>
<p className="text-base font-medium text-slate-200">
                Insured workmanship
              </p>
</div>
</div>
</section>
<section className="relative overflow-hidden py-20 sm:py-28" id="services">
<div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_60%)]"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-[0.18rem] text-blue-300">
                Services
              </p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Electrical services built for modern Cape Town properties.
              </h2>
<p className="mt-5 text-lg leading-8 text-slate-300">
                Practical electrical solutions for homes, retail spaces,
                offices, rentals, renovations and new installations.
              </p>
</div>
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
<article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-blue-500/[0.08]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-6 w-6" data-lucide="lightbulb"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  LED lighting upgrades
                </h3>
<p className="mt-3 text-base leading-7 text-slate-300">
                  Downlights, strip lighting, outdoor lighting and
                  energy-efficient replacements that reduce running costs.
                </p>
</article>
<article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-blue-500/[0.08]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-6 w-6" data-lucide="panel-top"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  DB board upgrades
                </h3>
<p className="mt-3 text-base leading-7 text-slate-300">
                  Safe distribution board upgrades, surge protection, earth
                  leakage repairs and compliance checks.
                </p>
</article>
<article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-blue-500/[0.08]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-6 w-6" data-lucide="plug-zap"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  Plug points &amp; repairs
                </h3>
<p className="mt-3 text-base leading-7 text-slate-300">
                  Additional plug points, isolators, fault finding, tripping
                  circuits and general electrical maintenance.
                </p>
</article>
<article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-blue-500/[0.08]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-6 w-6" data-lucide="camera"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  CCTV &amp; security
                </h3>
<p className="mt-3 text-base leading-7 text-slate-300">
                  Camera systems, sensor lights, video intercoms and practical
                  security wiring for homes and businesses.
                </p>
</article>
<article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-blue-500/[0.08]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-6 w-6" data-lucide="wifi"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  Data &amp; networking
                </h3>
<p className="mt-3 text-base leading-7 text-slate-300">
                  Structured cabling, access points, fibre-ready routes and
                  reliable connections where you need them.
                </p>
</article>
<article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-blue-500/[0.08]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-6 w-6" data-lucide="car"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  EV charger installs
                </h3>
<p className="mt-3 text-base leading-7 text-slate-300">
                  Dedicated EV charging circuits, load checks and neat
                  installations for homes and commercial bays.
                </p>
</article>
<article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-blue-500/[0.08]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-6 w-6" data-lucide="clipboard-check"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  Compliance support
                </h3>
<p className="mt-3 text-base leading-7 text-slate-300">
                  Inspection support, remedial work and preparation for
                  electrical compliance requirements.
                </p>
</article>
<article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-blue-500/[0.08]">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-6 w-6" data-lucide="wrench"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  Maintenance call-outs
                </h3>
<p className="mt-3 text-base leading-7 text-slate-300">
                  Responsive troubleshooting and repairs for landlords, body
                  corporates, offices and homeowners.
                </p>
</article>
</div>
</div>
</section>
<section className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-20 sm:py-28" id="about">
<div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
<div className="relative">
<div aria-hidden="true" className="absolute -inset-6 rounded-[2rem] bg-blue-500/20 blur-3xl"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl">
<div className="aspect-[4/3] bg-[radial-gradient(circle_at_50%_40%,rgba(96,165,250,0.42),transparent_24%),linear-gradient(135deg,rgba(2,6,23,1),rgba(15,23,42,1))]">
<svg aria-hidden="true" className="h-full w-full" viewbox="0 0 900 680">
<defs>
<lineargradient id="toolGlow" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="#93c5fd"></stop>
<stop offset="1" stop-color="#1d4ed8"></stop>
</lineargradient>
</defs>
<rect fill="transparent" height="680" width="900"></rect>
<g fill="none" opacity="0.22" stroke="#60a5fa" strokeWidth="2">
<path d="M80 120H820"></path>
<path d="M80 220H820"></path>
<path d="M80 320H820"></path>
<path d="M80 420H820"></path>
<path d="M80 520H820"></path>
<path d="M160 70V600"></path>
<path d="M310 70V600"></path>
<path d="M460 70V600"></path>
<path d="M610 70V600"></path>
<path d="M760 70V600"></path>
</g>
<g fill="none" strokeLinecap="round" strokeLinejoin="round">
<path d="M270 430 C 245 330, 300 240, 400 225 C 505 210, 590 285, 590 390 C 590 485, 520 550, 430 550 C 360 550, 302 505, 270 430Z" opacity="0.65" stroke="#1e3a8a" strokeWidth="22"></path>
<path d="M360 382 L430 300 L410 395 L500 385 L405 505 L430 410 Z" stroke="url(#toolGlow)" strokeWidth="16" style={{filter: 'drop-shadow(0 0 24px rgba(96,165,250,0.95))', animation: 'softGlow 4s ease-in-out infinite'}}></path>
<path d="M180 160 C 310 210, 430 130, 575 195 S 770 250, 840 180" stroke="#020617" strokeWidth="24"></path>
<path d="M180 160 C 310 210, 430 130, 575 195 S 770 250, 840 180" opacity="0.8" stroke="#1d4ed8" strokeWidth="5"></path>
<path d="M180 160 C 310 210, 430 130, 575 195 S 770 250, 840 180" stroke="#60a5fa" stroke-dasharray="80 260" strokeWidth="4" style={{animation: 'electricPulse 4.2s linear infinite'}}></path>
</g>
</svg>
</div>
</div>
</div>
<div>
<p className="text-sm font-semibold uppercase tracking-[0.18rem] text-blue-300">
                About
              </p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                When quality matters, choose electricians who treat the details
                seriously.
              </h2>
<p className="mt-6 text-lg leading-8 text-slate-300">
                Cape Current Electrical is a Cape Town-based electrical team
                focused on dependable residential and commercial work. We
                combine careful planning, clear communication and tidy execution
                so your project is safe, compliant and built to last.
              </p>
<div className="mt-8 grid gap-4">
<div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
<i className="mt-1 h-5 w-5 shrink-0 text-blue-300" data-lucide="check-circle-2"></i>
<div>
<h3 className="text-lg font-semibold text-white">
                      Licensed and insured
                    </h3>
<p className="mt-1 text-base leading-7 text-slate-300">
                      Work carried out with safety, standards and accountability
                      at the centre.
                    </p>
</div>
</div>
<div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
<i className="mt-1 h-5 w-5 shrink-0 text-blue-300" data-lucide="check-circle-2"></i>
<div>
<h3 className="text-lg font-semibold text-white">
                      Friendly communication
                    </h3>
<p className="mt-1 text-base leading-7 text-slate-300">
                      You’ll know what we’re doing, why it matters and what it
                      will cost.
                    </p>
</div>
</div>
<div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
<i className="mt-1 h-5 w-5 shrink-0 text-blue-300" data-lucide="check-circle-2"></i>
<div>
<h3 className="text-lg font-semibold text-white">
                      Clean handovers
                    </h3>
<p className="mt-1 text-base leading-7 text-slate-300">
                      Neat finishes, labelled circuits where needed and a
                      workspace left clean.
                    </p>
</div>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-6 py-4 text-base font-semibold text-blue-100 transition hover:bg-blue-500/20" href="#contact">
                  Book an electrician
                  <i className="h-5 w-5" data-lucide="calendar-check"></i>
</a>
</div>
</div>
</div>
</section>
<section className="py-20 sm:py-28">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-[0.18rem] text-blue-300">
                Why choose us
              </p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Professional electrical work without the uncertainty.
              </h2>
</div>
<div className="mt-12 grid gap-5 lg:grid-cols-3">
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-5 w-5" data-lucide="timer"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Arrive when promised
                  </h3>
</div>
<p className="mt-4 text-base leading-7 text-slate-300">
                  We plan call-outs properly, communicate delays early and
                  respect your schedule.
                </p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-5 w-5" data-lucide="file-check-2"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Clear quotes
                  </h3>
</div>
<p className="mt-4 text-base leading-7 text-slate-300">
                  You get practical recommendations and transparent pricing
                  before work begins.
                </p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-300/20">
<i className="h-5 w-5" data-lucide="hard-hat"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white">
                    Safety first
                  </h3>
</div>
<p className="mt-4 text-base leading-7 text-slate-300">
                  Every repair and installation is approached with careful
                  testing and safe workmanship.
                </p>
</div>
</div>
<div className="mt-12 rounded-[2rem] border border-blue-300/15 bg-blue-500/[0.08] p-6 sm:p-8">
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div>
<p className="text-4xl font-semibold tracking-tight text-white">
                    24h
                  </p>
<p className="mt-2 text-base text-slate-300">
                    Emergency triage available
                  </p>
</div>
<div>
<p className="text-4xl font-semibold tracking-tight text-white">
                    100%
                  </p>
<p className="mt-2 text-base text-slate-300">
                    Insured electrical work
                  </p>
</div>
<div>
<p className="text-4xl font-semibold tracking-tight text-white">
                    8+
                  </p>
<p className="mt-2 text-base text-slate-300">
                    Core service categories
                  </p>
</div>
<div>
<p className="text-4xl font-semibold tracking-tight text-white">
                    CT
                  </p>
<p className="mt-2 text-base text-slate-300">
                    Local Cape Town team
                  </p>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-20 sm:py-28">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.14),transparent_36%)]"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.18rem] text-blue-300">
                  Reviews
                </p>
<h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  What Cape Town clients can expect.
                </h2>
</div>
<a className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/10" href="#contact">
                Get the same service
                <i className="h-5 w-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-12 grid gap-5 lg:grid-cols-3">
<figure className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
<div aria-label="Five star review" className="flex gap-1 text-blue-300">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<blockquote className="mt-5 text-lg leading-8 text-slate-200">
                  “Fast, professional and tidy. The team added new plug points
                  and upgraded our lighting without any fuss.”
                </blockquote>
<figcaption className="mt-6 text-base font-semibold text-white">
                  Residential client, Claremont
                </figcaption>
</figure>
<figure className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
<div aria-label="Five star review" className="flex gap-1 text-blue-300">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<blockquote className="mt-5 text-lg leading-8 text-slate-200">
                  “They explained the DB board issue clearly, fixed the tripping
                  circuit and left everything labelled.”
                </blockquote>
<figcaption className="mt-6 text-base font-semibold text-white">
                  Homeowner, Durbanville
                </figcaption>
</figure>
<figure className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
<div aria-label="Five star review" className="flex gap-1 text-blue-300">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<blockquote className="mt-5 text-lg leading-8 text-slate-200">
                  “Our office fit-out was completed on schedule. Great
                  communication from quote to handover.”
                </blockquote>
<figcaption className="mt-6 text-base font-semibold text-white">
                  Business owner, Woodstock
                </figcaption>
</figure>
</div>
</div>
</section>
<section className="py-20 sm:py-28">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-[2.25rem] border border-blue-300/20 bg-blue-500/[0.08] p-8 shadow-[0_0_80px_rgba(37,99,235,0.18)] sm:p-12">
<div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
<div aria-hidden="true" className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-blue-700/25 blur-3xl"></div>
<div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.18rem] text-blue-300">
                    Ready when you are
                  </p>
<h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    Need a reliable electrician in Cape Town?
                  </h2>
<p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                    Call now or send your project details. We’ll help you choose
                    the safest, cleanest electrical solution.
                  </p>
</div>
<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-4 text-base font-semibold text-white shadow-[0_0_45px_rgba(37,99,235,0.36)] transition hover:bg-blue-400" href="tel:+27215550197">
<i className="h-5 w-5" data-lucide="phone-call"></i>
                    Call 021 555 0197
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-4 text-base font-semibold text-slate-100 transition hover:bg-white/10" href="mailto:hello@capecurrent.co.za">
<i className="h-5 w-5 text-blue-300" data-lucide="mail"></i>
                    Email us
                  </a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-slate-950 py-10">
<div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
<div className="flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
<i className="h-5 w-5 text-blue-300" data-lucide="zap"></i>
</span>
<div>
<p className="text-base font-semibold text-white">
                Cape Current Electrical
              </p>
<p className="mt-1 text-sm text-slate-400">Electricians Cape Town</p>
</div>
</div>
<div className="grid gap-3 text-base text-slate-300 sm:grid-cols-3 lg:gap-8">
<a className="flex items-center gap-2 hover:text-white" href="tel:+27215550197">
<i className="h-4 w-4 text-blue-300" data-lucide="phone"></i>
              021 555 0197
            </a>
<a className="flex items-center gap-2 hover:text-white" href="mailto:hello@capecurrent.co.za">
<i className="h-4 w-4 text-blue-300" data-lucide="mail"></i>
              hello@capecurrent.co.za
            </a>
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-300" data-lucide="map-pin"></i>
              Cape Town, ZA
            </span>
</div>
<p className="text-sm text-slate-500">
            © 2026 Cape Current Electrical. All rights reserved.
          </p>
</div>
</footer>
</div>


    </>
  );
}
