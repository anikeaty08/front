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
      
    // Lucide
    lucide.createIcons();

    // Subtle cursor-follow glow on primary CTA
    const ctaBtn = document.getElementById('cta-cursor');
    if (ctaBtn) {
      ctaBtn.addEventListener('mousemove', (e) => {
        const r = ctaBtn.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        ctaBtn.style.backgroundImage = `radial-gradient(200px circle at ${x}px ${y}px, rgba(16,185,129,0.25), transparent 40%)`;
      });
      ctaBtn.addEventListener('mouseleave', () => {
        ctaBtn.style.backgroundImage = '';
      });
    }

    // 3D tilt for hero preview
    const heroTilt = document.getElementById('hero-tilt')?.querySelector('.relative.mx-auto.max-w-5xl');
    const heroWrap = document.getElementById('hero-tilt');
    if (heroWrap && heroTilt) {
      heroWrap.addEventListener('mousemove', (e) => {
        const rect = heroWrap.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        heroTilt.style.transform = `perspective(1200px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateZ(0)`;
      });
      heroWrap.addEventListener('mouseleave', () => {
        heroTilt.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      });
    }

    // Tilt for cards
    const tiltCards = document.querySelectorAll('[data-tilt]');
    tiltCards.forEach((card) => {
      card.style.transformStyle = 'preserve-3d';
      const inner = card.querySelector('.h-full');
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        inner.style.transform = `rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(0)`;
      });
      card.addEventListener('mouseleave', () => {
        inner.style.transform = '';
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
      

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#03150a]"></div>

<div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(to_right,rgba(16,185,129,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.18)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-25 bg-[radial-gradient(closest-side,rgba(16,185,129,0.35),rgba(0,0,0,0))]"></div>
<div className="absolute bottom-0 right-0 w-[900px] h-[900px] translate-x-1/4 translate-y-1/4 rounded-full blur-3xl opacity-20 bg-[radial-gradient(closest-side,rgba(34,197,94,0.25),rgba(0,0,0,0))]"></div>
<div className="absolute top-1/3 left-0 w-[600px] h-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full blur-3xl opacity-15 bg-[radial-gradient(closest-side,rgba(74,222,128,0.2),rgba(0,0,0,0))]"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-emerald-400/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="relative">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 via-emerald-400 to-lime-400 flex items-center justify-center shadow-lg ring-1 ring-inset ring-emerald-300/30">
<svg className="lucide lucide-shield w-4 h-4 text-black/80" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="absolute -inset-1 opacity-30 bg-emerald-500/30 rounded-lg blur-md"></div>
</div>
<span className="text-lg font-semibold tracking-tight">Eco Firmware</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#firmware">Firmware</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#hardware">Hardware</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#guides">Guides</a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors" href="#">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Discord
          </a>
</nav>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Sign in</button>
<button className="group relative inline-flex min-w-[120px] items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-emerald-100 transition-all hover:-translate-y-[2px]" style={{boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.35)', background: 'radial-gradient(ellipse at bottom,rgba(16,185,129,0.35) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10">Get Access</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 opacity-30 transition group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(16,185,129,0) 0%,rgba(16,185,129,0.9) 50%,rgba(16,185,129,0) 100%)'}}></span>
</button>
</div>
</div>
</div>
</header>

<section className="relative" id="hero">
<div className="max-w-7xl sm:px-6 lg:px-8 sm:pt-28 mr-auto ml-auto pt-20 pr-4 pl-4">
<div className="mx-auto text-center max-w-3xl">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 backdrop-blur">
<svg className="lucide lucide-scan-line w-4 h-4" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
          Low-level, high-trust builds
        </span>
<h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
          Underground-grade firmware, polished for reliability
        </h1>
<p className="mt-5 text-lg sm:text-xl text-emerald-100/80">
          A modern matrix console aesthetic with real engineering underneath. Custom tiers. Hardware that matches. Glass and glow—without the noise.
        </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="relative overflow-hidden isolate rounded-full px-6 py-3 text-base font-medium text-white bg-emerald-500/20 border border-emerald-400/40 hover:bg-emerald-400/25 transition" id="cta-cursor" style={{boxShadow: 'rgba(16, 185, 129, 0.35) 0px 0px 0px 1px, rgba(16, 185, 129, 0.15) 0px 10px 30px'}}>
<span className="relative z-10 inline-flex items-center gap-2">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Download Loader
            </span>
<span className="pointer-events-none absolute -inset-16 opacity-0 transition group-hover:opacity-100" id="cta-sheen"></span>
</button>
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium text-emerald-200 bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur transition" href="#firmware">
<svg className="lucide lucide-zap w-4 h-4 text-emerald-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Explore Tiers
          </a>
</div>
</div>

<div className="relative mt-16" id="hero-tilt">
<div className="absolute inset-0 -top-10 mx-auto h-56 max-w-5xl rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.25),rgba(0,0,0,0))] blur-3xl"></div>
<div className="relative mx-auto max-w-5xl bg-zinc-900/60 ring-1 ring-white/10 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-2xl" style={{transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)', willChange: 'transform'}}>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="col-span-1 hidden md:flex flex-col gap-3 p-4 bg-black/30 border-r border-white/10">
<button className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 flex items-center justify-center hover:bg-emerald-500/30 transition">
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</button>
<button className="h-10 w-10 rounded-xl bg-white/5 text-zinc-300 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path className="" d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path className="" d="M7 2v2"></path><rect className="" height="16" rx="2" width="16" x="4" y="4"></rect><rect className="" height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</button>
<button className="h-10 w-10 rounded-xl bg-white/5 text-zinc-300 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</button>
<div className="mt-auto flex items-center justify-between">
<span className="text-xs text-zinc-400">v2.4.1</span>
<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
</div>
</div>
<div className="md:col-span-2 p-6">
<div className="rounded-2xl bg-black/40 border border-white/10 p-4">
<div className="flex items-center gap-2 text-xs text-emerald-200/80">
<svg className="lucide lucide-activity w-4 h-4 text-emerald-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                  Live console
                </div>
<div className="mt-3 font-mono text-[13px] leading-6">
<p className="text-emerald-300/90">› initializing eco-runtime...</p>
<p className="text-emerald-300/70">› probing device tree: intel, amd — ok</p>
<p className="text-emerald-300/70">› loading tier profile: titanium.x64</p>
<p className="text-emerald-300/70">› device manager footprint: clean</p>
<p className="text-emerald-300/70">› anti-tamper handshake: synced</p>
<p className="text-emerald-300/90">› ready. execute with confidence.</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<div className="text-xs text-zinc-400">Latency</div>
<div className="text-lg font-semibold tracking-tight text-white">~0.2 ms</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<div className="text-xs text-zinc-400">Footprint</div>
<div className="text-lg font-semibold tracking-tight text-white">Minimal</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<div className="text-xs text-zinc-400">Warranty</div>
<div className="text-lg font-semibold tracking-tight text-white">30–180 d</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<div className="text-xs text-zinc-400">Support</div>
<div className="text-lg font-semibold tracking-tight text-white">1:1 Dev</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-24" id="firmware">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Firmware tiers</h2>
<p className="mt-2 text-zinc-400">Choose a profile tuned to your hardware, anticheat targets, and warranty horizon.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-emerald-200 bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#guides">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
          View Guides
        </a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

<div className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-amber-500/40 via-stone-500/30 to-amber-300/40" data-tilt="" style={{transformStyle: 'preserve-3d'}}>
<div className="h-full rounded-[14px] bg-zinc-950/70 border border-white/10 backdrop-blur-xl p-5 hover:-translate-y-1 transition will-change-transform">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-amber-200 bg-amber-500/15 border border-amber-400/30">
<svg className="lucide lucide-medal w-3.5 h-3.5" data-lucide="medal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg> Bronze
              </div>
<span className="text-sm text-zinc-400">Entry</span>
</div>
<div className="mt-4">
<div className="text-2xl font-semibold tracking-tight">$49</div>
<div className="text-xs text-zinc-400 mt-1">monthly</div>
</div>
<ul className="mt-5 space-y-2 text-sm">
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-shield-check w-4 h-4 text-amber-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>EAC (basic), BE (basic)</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-hard-drive w-4 h-4 text-amber-300" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>Clean Device Manager</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-git-branch w-4 h-4 text-amber-300" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>Driverless operation</li>
</ul>
<div className="mt-5 grid grid-cols-2 gap-2 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                Warranty: 30d
              </div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                HW: Intel/AMD
              </div>
</div>
<div className="mt-5 flex gap-2">
<button className="flex-1 rounded-lg px-3 py-2 text-sm font-medium bg-amber-500/20 text-amber-100 border border-amber-400/30 hover:bg-amber-500/25 transition">Select</button>
<button className="rounded-lg px-3 py-2 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10">Details</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-sky-500/40 via-slate-500/30 to-blue-400/40" data-tilt="" style={{transformStyle: 'preserve-3d'}}>
<div className="h-full rounded-[14px] bg-zinc-950/70 border border-white/10 backdrop-blur-xl p-5 hover:-translate-y-1 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-sky-200 bg-sky-500/15 border border-sky-400/30">
<svg className="lucide lucide-layers w-3.5 h-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Titanium
              </div>
<span className="text-sm text-zinc-400">Performance</span>
</div>
<div className="mt-4">
<div className="text-2xl font-semibold tracking-tight">$149</div>
<div className="text-xs text-zinc-400 mt-1">monthly</div>
</div>
<ul className="mt-5 space-y-2 text-sm">
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-shield-check w-4 h-4 text-sky-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>EAC, BE (expanded)</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-cpu w-4 h-4 text-sky-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>Hypervisor-safe routines</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-git-branch w-4 h-4 text-sky-300" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>Driverless mode</li>
</ul>
<div className="mt-5 grid grid-cols-2 gap-2 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                Warranty: 90d
              </div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                HW: Intel/AMD
              </div>
</div>
<div className="mt-5 flex gap-2">
<button className="flex-1 rounded-lg px-3 py-2 text-sm font-medium bg-sky-500/20 text-sky-100 border border-sky-400/30 hover:bg-sky-500/25 transition">Select</button>
<button className="rounded-lg px-3 py-2 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10">Details</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-cyan-400/50 via-teal-400/30 to-sky-300/40" data-tilt="" style={{transformStyle: 'preserve-3d'}}>
<div className="h-full rounded-[14px] bg-zinc-950/70 border border-white/10 backdrop-blur-xl p-5 hover:-translate-y-1 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-500/15 border border-cyan-400/30">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Platinum
              </div>
<span className="text-sm text-zinc-400">Flagship</span>
</div>
<div className="mt-4">
<div className="text-2xl font-semibold tracking-tight">$249</div>
<div className="text-xs text-zinc-400 mt-1">monthly</div>
</div>
<ul className="mt-5 space-y-2 text-sm">
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-shield-check w-4 h-4 text-cyan-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>EAC, BE, Vanguard (scoped)</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-file-check-2 w-4 h-4 text-cyan-300" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m3 15 2 2 4-4"></path></svg>Clean Device Manager</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-lock w-4 h-4 text-cyan-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>Private signing pipeline</li>
</ul>
<div className="mt-5 grid grid-cols-2 gap-2 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                Warranty: 120d
              </div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                HW: Intel/AMD
              </div>
</div>
<div className="mt-5 flex gap-2">
<button className="flex-1 rounded-lg px-3 py-2 text-sm font-medium bg-cyan-500/20 text-cyan-100 border border-cyan-400/30 hover:bg-cyan-500/25 transition">Select</button>
<button className="rounded-lg px-3 py-2 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10">Details</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-fuchsia-400/50 via-indigo-400/40 to-cyan-300/40" data-tilt="" style={{transformStyle: 'preserve-3d'}}>
<div className="h-full rounded-[14px] bg-zinc-950/70 border border-white/10 backdrop-blur-xl p-5 hover:-translate-y-1 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-fuchsia-100 bg-fuchsia-500/15 border border-fuchsia-400/30">
<svg className="lucide lucide-orbit w-3.5 h-3.5" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg> Aether
              </div>
<span className="text-sm text-zinc-400">Cosmic</span>
</div>
<div className="mt-4">
<div className="text-2xl font-semibold tracking-tight">$399</div>
<div className="text-xs text-zinc-400 mt-1">monthly</div>
</div>
<ul className="mt-5 space-y-2 text-sm">
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-shield-check w-4 h-4 text-fuchsia-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>Wide AC support set</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-user-cog w-4 h-4 text-fuchsia-300" data-lucide="user-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15H6a4 4 0 0 0-4 4v2"></path><path d="m14.305 16.53.923-.382"></path><path d="m15.228 13.852-.923-.383"></path><path d="m16.852 12.228-.383-.923"></path><path d="m16.852 17.772-.383.924"></path><path d="m19.148 12.228.383-.923"></path><path d="m19.53 18.696-.382-.924"></path><path d="m20.772 13.852.924-.383"></path><path d="m20.772 16.148.924.383"></path><circle cx="18" cy="15" r="3"></circle><circle cx="9" cy="7" r="4"></circle></svg>Custom per-user 1:1 build</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-radio w-4 h-4 text-fuchsia-300" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>Low-noise telemetry</li>
</ul>
<div className="mt-5 grid grid-cols-2 gap-2 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                Warranty: 150d
              </div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                HW: Intel/AMD
              </div>
</div>
<div className="mt-5 flex gap-2">
<button className="flex-1 rounded-lg px-3 py-2 text-sm font-medium bg-fuchsia-500/20 text-fuchsia-100 border border-fuchsia-400/30 hover:bg-fuchsia-500/25 transition">Select</button>
<button className="rounded-lg px-3 py-2 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10">Details</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-lime-400/60 via-emerald-400/40 to-teal-400/50" data-tilt="" style={{transformStyle: 'preserve-3d'}}>
<div className="h-full rounded-[14px] bg-zinc-950/70 border border-white/10 backdrop-blur-xl p-5 hover:-translate-y-1 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-lime-100 bg-lime-500/15 border border-lime-400/30">
<svg className="lucide lucide-grid w-3.5 h-3.5" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg> Slotted
              </div>
<span className="text-sm text-zinc-400">Unique</span>
</div>
<div className="mt-4">
<div className="text-2xl font-semibold tracking-tight">$699</div>
<div className="text-xs text-zinc-400 mt-1">monthly</div>
</div>
<ul className="mt-5 space-y-2 text-sm">
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-key-round w-4 h-4 text-lime-300" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>Private slot — non-recycled</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-fingerprint w-4 h-4 text-lime-300" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>Per-build fingerprints</li>
<li className="flex items-center gap-2 text-zinc-300"><svg className="lucide lucide-headphones w-4 h-4 text-lime-300" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>Direct dev support</li>
</ul>
<div className="mt-5 grid grid-cols-2 gap-2 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                Warranty: 180d
              </div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
                HW: Intel/AMD
              </div>
</div>
<div className="mt-5 flex gap-2">
<button className="flex-1 rounded-lg px-3 py-2 text-sm font-medium bg-lime-500/20 text-lime-100 border border-lime-400/30 hover:bg-lime-500/25 transition">Select</button>
<button className="rounded-lg px-3 py-2 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10">Details</button>
</div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-zinc-500">
        Coverage varies by title and platform. Warranty applies to active subscription period; ask support for tier matrices.
      </p>
</div>
</section>

<section className="relative pt-24" id="hardware">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Hardware, in-theme</h2>
<p className="mt-2 text-zinc-400">Purpose-built boards and second-PC setups. Photos are representative; batches vary.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-emerald-200 bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
          View Store
        </a>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl hover:-translate-y-1 transition" data-tilt="" style={{transformStyle: 'preserve-3d'}}>
<div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
<img alt="HackDMA Board" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-emerald-300/20"></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">HackDMA Board</h3>
<span className="text-sm text-emerald-300">$189</span>
</div>
<ul className="mt-3 text-sm text-zinc-300 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-cpu w-4 h-4 text-emerald-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> PCIe x1 bridge, low-latency link</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-cable w-4 h-4 text-emerald-300" data-lucide="cable" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"></path><path d="M17 21v-2"></path><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"></path><path d="M21 21v-2"></path><path d="M3 5V3"></path><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"></path><path d="M7 5V3"></path></svg> Shielded FFC harness</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-settings-2 w-4 h-4 text-emerald-300" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg> Firmware pre-config slot</li>
</ul>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded-lg px-3 py-2 text-sm font-medium bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 hover:bg-emerald-500/25 transition">Add</button>
<button className="rounded-lg px-3 py-2 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10">Specs</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl hover:-translate-y-1 transition" data-tilt="" style={{transformStyle: 'preserve-3d'}}>
<div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
<img alt="Fuser Module" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-emerald-300/20"></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Fuser Module</h3>
<span className="text-sm text-emerald-300">$129</span>
</div>
<ul className="mt-3 text-sm text-zinc-300 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-merge w-4 h-4 text-emerald-300" data-lucide="merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 6 4-4 4 4"></path><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path><path d="m20 22-5-5"></path></svg> USB-C inline signal blend</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-shield w-4 h-4 text-emerald-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Noise-filtered I/O path</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-circle-ellipsis w-4 h-4 text-emerald-300" data-lucide="circle-ellipsis" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg> Adjustable timing windows</li>
</ul>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded-lg px-3 py-2 text-sm font-medium bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 hover:bg-emerald-500/25 transition">Add</button>
<button className="rounded-lg px-3 py-2 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10">Specs</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl hover:-translate-y-1 transition" data-tilt="" style={{transformStyle: 'preserve-3d'}}>
<div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
<img alt="Second PC Laptop" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-emerald-300/20"></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Second PC Laptop</h3>
<span className="text-sm text-emerald-300">from $699</span>
</div>
<ul className="mt-3 text-sm text-zinc-300 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-network w-4 h-4 text-emerald-300" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg> Dedicated offload host</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-wifi w-4 h-4 text-emerald-300" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg> Isolated network profile</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-battery-charging w-4 h-4 text-emerald-300" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg> Long-cycle battery</li>
</ul>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded-lg px-3 py-2 text-sm font-medium bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 hover:bg-emerald-500/25 transition">Configure</button>
<button className="rounded-lg px-3 py-2 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10">Specs</button>
</div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-zinc-500">Stock is limited; hardware batches are QC’d and serialized.</p>
</div>
</section>

<section className="relative pt-24" id="guides">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why choose us</h2>
<p className="mt-2 text-zinc-400">Reliability meets underground exclusivity—no recycled stacks, no cut corners.</p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center gap-3">
<svg className="lucide lucide-user-check w-5 h-5 text-emerald-300" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="font-semibold tracking-tight">Direct dev support</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Work with the builders—1:1 sessions for tier alignment and longevity.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center gap-3">
<svg className="lucide lucide-infinity w-5 h-5 text-emerald-300" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
<h3 className="font-semibold tracking-tight">Longevity first</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Stable, low-noise routines built to last through patch cycles.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center gap-3">
<svg className="lucide lucide-toggle-right w-5 h-5 text-emerald-300" data-lucide="toggle-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="12" r="3"></circle><rect height="14" rx="7" width="20" x="2" y="5"></rect></svg>
<h3 className="font-semibold tracking-tight">Driverless operation</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Minimal footprint modes for a clean device tree and simple rollbacks.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center gap-3">
<svg className="lucide lucide-shield-plus w-5 h-5 text-emerald-300" data-lucide="shield-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M9 12h6"></path><path d="M12 9v6"></path></svg>
<h3 className="font-semibold tracking-tight">No recycled firmware</h3>
</div>
<p className="mt-2 text-sm text-zinc-300">Private pipeline, per-slot fingerprints, and audit trails on request.</p>
</div>
</div>
</div>
<div className="lg:col-span-1">
<div className="relative rounded-2xl p-0.5 bg-gradient-to-br from-emerald-400/40 via-lime-400/30 to-teal-400/40">
<div className="rounded-[14px] bg-zinc-950/70 border border-white/10 backdrop-blur-xl p-5">
<div className="flex items-center gap-2 text-xs text-emerald-200/90">
<svg className="lucide lucide-terminal w-4 h-4 text-emerald-300" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
                Console snapshot
              </div>
<div className="mt-3 font-mono text-[13px] leading-6">
<p className="text-emerald-300/90">› verify.integrity --deep</p>
<p className="text-emerald-300/70">✓ device tree: clean</p>
<p className="text-emerald-300/70">✓ hv calls: minimal</p>
<p className="text-emerald-300/70">✓ slot: private</p>
<p className="text-emerald-300/90">› status: green</p>
</div>
<div className="mt-5 grid grid-cols-2 gap-2">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="text-xs text-zinc-400">Builds</div>
<div className="text-lg font-semibold tracking-tight">1:1</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="text-xs text-zinc-400">Uptime</div>
<div className="text-lg font-semibold tracking-tight">99.9%</div>
</div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 hover:bg-emerald-500/25 transition" href="#">
<svg className="lucide lucide-headset w-4 h-4" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
                Contact support
              </a>
</div>
</div>
</div>
</div>

<div className="mt-16 flex items-center justify-center">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</section>

<section className="relative pt-24 pb-24">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="relative">
<div className="absolute inset-0 rounded-3xl blur-3xl bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.3),rgba(0,0,0,0))]"></div>
<div className="relative rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-2xl p-10 sm:p-16">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Step into the modern matrix—confidently
          </h3>
<p className="mt-3 text-emerald-100/80 text-lg">Private builds, clean footprints, and responsive support. Start with a tier and tune later.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium text-black bg-emerald-400 hover:bg-emerald-300 transition" href="#firmware">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              Choose a Tier
            </a>
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium text-emerald-200 bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#hardware">
<svg className="lucide lucide-server w-4 h-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
              Browse Hardware
            </a>
</div>
<p className="mt-4 text-xs text-zinc-500">Windows 10/11 • Intel/AMD • Support response within 24h</p>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10 bg-zinc-900/60 backdrop-blur-xl">
<div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,rgba(16,185,129,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.18)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 via-emerald-400 to-lime-400 flex items-center justify-center ring-1 ring-emerald-300/30">
<svg className="lucide lucide-leaf w-4 h-4 text-black/80" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="text-lg font-semibold">Eco Firmware</span>
</div>
<p className="text-zinc-400 text-sm">Underground look, enterprise discipline. Built for stability, supported by builders.</p>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Product</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-zinc-400 hover:text-white transition" href="#firmware">Tiers</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#hardware">Hardware</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#guides">Guides</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-zinc-400 hover:text-white transition" href="#">About</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">Contact</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">Partners</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">Discord</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-zinc-400 hover:text-white transition" href="#">Refunds</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">ToS</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">Privacy</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-zinc-500 text-sm">© 2025 Eco Firmware. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-400 hover:text-white transition" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-400 hover:text-white transition" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-zinc-400 hover:text-white transition" href="#"><svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
