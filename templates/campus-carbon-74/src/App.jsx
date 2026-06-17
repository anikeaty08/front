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



    // Icon init
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
    });

    // Utility
    const $ = (sel, root=document) => root.querySelector(sel);
    const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    // Particles background
    (() => {
      const canvas = document.getElementById('particles');
      const ctx = canvas.getContext('2d');
      let w, h, particles, running = true, reduceMotion = false;

      const resize = () => {
        w = canvas.width = innerWidth * devicePixelRatio;
        h = canvas.height = innerHeight * devicePixelRatio;
      };
      const init = () => {
        particles = Array.from({ length: 80 }, () => ({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
          r: (Math.random() * 1.2 + 0.4) * devicePixelRatio
        }));
      };
      const tick = () => {
        if (!running) return;
        ctx.clearRect(0, 0, w, h);
        ctx.globalAlpha = 0.8;
        particles.forEach(p => {
          p.x += reduceMotion ? 0 : p.vx;
          p.y += reduceMotion ? 0 : p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          ctx.fillStyle = 'rgba(52, 211, 153, 0.5)';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        });
        requestAnimationFrame(tick);
      };
      window.addEventListener('resize', () => { resize(); init(); });
      resize(); init(); tick();

      // Settings bindings
      $('#toggleParticles')?.addEventListener('change', (e) => running = e.target.checked);
      $('#toggleMotion')?.addEventListener('change', (e) => reduceMotion = e.target.checked);
    })();

    // Loading overlay with spinning globe (2D)
    (() => {
      const canvas = document.getElementById('globeCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let t = 0, loaded = false;

      const draw = () => {
        const { width, height } = canvas.getBoundingClientRect();
        const dpr = devicePixelRatio || 1;
        canvas.width = width * dpr; canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);

        const cx = width/2, cy = height/2, r = Math.min(width, height)/2.4;
        // Globe
        ctx.strokeStyle = 'rgba(34,255,136,0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.stroke();
        // Longitudes
        for (let i=0;i<6;i++){
          const phase = t/15 + i * Math.PI/6;
          ctx.beginPath();
          for (let a=-Math.PI/2; a<=Math.PI/2; a+=0.05){
            const x = cx + r * Math.cos(a) * Math.cos(phase);
            const y = cy + r * Math.sin(a);
            if (a===-Math.PI/2) ctx.moveTo(x,y); else ctx.lineTo(x,y);
          }
          ctx.strokeStyle = 'rgba(34,255,136,0.25)'; ctx.stroke();
        }
        // Latitudes
        for (let i=1;i<=3;i++){
          const rr = r * Math.cos(i * Math.PI/8);
          ctx.beginPath(); ctx.ellipse(cx, cy, rr, rr*0.45, 0, 0, Math.PI*2);
          ctx.strokeStyle = 'rgba(255,122,26,0.25)'; ctx.stroke();
        }
        t++;
        if (!loaded) requestAnimationFrame(draw);
      };
      draw();

      // Fake loading
      const bar = document.getElementById('loadBar');
      let p = 0;
      const i = setInterval(() => {
        p += Math.random()*18 + 6;
        if (p >= 100) { p = 100; clearInterval(i); loaded = true;
          setTimeout(() => $('#loading')?.classList.add('hidden'), 400);
        }
        bar.style.width = p + '%';
      }, 350);
    })();

    // Mobile menu
    (() => {
      const btn = document.getElementById('mobileMenuBtn');
      const menu = document.getElementById('mobileMenu');
      btn?.addEventListener('click', () => menu?.classList.toggle('hidden'));
      menu?.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') menu.classList.add('hidden');
      });
    })();

    // Tabs: Show/Hide sections (true tabs behavior)
    (() => {
      const sectionIds = ['hero','twin','actions','drone','forecast','wallet','alerts'];
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
      const showSection = (id) => {
        sections.forEach(sec => {
          if (sec.id === id) sec.classList.remove('hidden');
          else sec.classList.add('hidden');
        });
        // highlight active nav
        $$('header a[href^="#"]').forEach(a => {
          a.classList.toggle('text-emerald-300', a.getAttribute('href') === '#' + id);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      // init (start with hero)
      showSection('hero');

      const bind = (root=document) => {
        $$('a[href^="#"]', root).forEach(a => {
          a.addEventListener('click', (e) => {
            const id = a.getAttribute('href').slice(1);
            if (sectionIds.includes(id)) {
              e.preventDefault();
              showSection(id);
            }
          });
        });
      };
      bind(document);
      // Footer links also work
      bind(document.querySelector('footer'));

      // Expose for other buttons
      window._showSection = showSection;
    })();

    // Settings modal handlers
    (() => {
      const modal = document.getElementById('settingsModal');
      const openBtn = document.getElementById('openSettings');
      const closeEls = $$('[data-close="settings"]', modal);
      openBtn?.addEventListener('click', () => {
        modal.classList.remove('hidden'); modal.classList.add('flex');
      });
      closeEls.forEach(el => el.addEventListener('click', () => {
        modal.classList.add('hidden'); modal.classList.remove('flex');
      }));
      document.getElementById('saveSettings')?.addEventListener('click', () => {
        // demo toast
        const btn = document.getElementById('saveSettings');
        btn.disabled = true; btn.innerHTML = '<span class="text-emerald-300">Saved ✓</span>';
        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = '<i data-lucide="save" class="h-4 w-4"></i>';
          if (window.lucide) lucide.createIcons();
        }, 1200);
      });
    })();

    // AR modal handlers
    (() => {
      const modal = document.getElementById('arModal');
      const open = document.getElementById('openAR');
      const closeEls = $$('[data-close="ar"]', modal);
      open?.addEventListener('click', () => {
        modal.classList.remove('hidden'); modal.classList.add('flex');
      });
      closeEls.forEach(el => el.addEventListener('click', () => {
        modal.classList.add('hidden'); modal.classList.remove('flex');
      }));
      document.getElementById('launchAR')?.addEventListener('click', () => {
        const w = window.open('', '_blank');
        if (!w) return;
        w.document.write(`
          <!doctype html><html><head>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
          <script src="https://aframe.io/releases/1.5.0/aframe.min.js">
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
      

<canvas className="fixed inset-0 -z-10" id="particles"></canvas>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08]">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,255,136,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,122,26,0.12),transparent_55%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_60%,rgba(255,255,255,0.06)_100%)]"></div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#06090d]" id="loading">
<div className="flex flex-col items-center gap-6">
<div className="relative">
<canvas className="h-48 w-48" id="globeCanvas"></canvas>

<div className="pointer-events-none absolute inset-0 animate-pulse">
<div className="absolute left-2 top-4 h-6 w-6 rounded-full blur-md bg-emerald-400/40"></div>
<div className="absolute right-3 top-8 h-8 w-8 rounded-full blur-lg bg-orange-400/40"></div>
<div className="absolute bottom-6 left-6 h-5 w-5 rounded-full blur-md bg-emerald-300/40"></div>
</div>
</div>
<p className="text-sm text-slate-400 tracking-tight">Initializing carbon twin · drones · AI · students</p>
<div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/5">
<div className="h-full w-0 bg-gradient-to-r from-emerald-400 via-emerald-300 to-orange-400 transition-all duration-700" id="loadBar"></div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0b0f14]/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-emerald-300 tracking-tighter font-semibold">
            CC
          </div>
<div className="hidden sm:block">
<p className="text-sm text-slate-300 tracking-tight">Campus Carbon Digital Twin</p>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
<a className="hover:text-emerald-300 transition-colors" href="#hero">Home</a>
<a className="hover:text-emerald-300 transition-colors" href="#twin">Digital Twin</a>
<a className="hover:text-emerald-300 transition-colors" href="#actions">Eco-Actions</a>
<a className="hover:text-emerald-300 transition-colors" href="#drone">Drone Insights</a>
<a className="hover:text-emerald-300 transition-colors" href="#forecast">Forecast</a>
<a className="hover:text-emerald-300 transition-colors" href="#wallet">Wallet</a>
<a className="hover:text-emerald-300 transition-colors" href="#alerts">Alerts</a>
</nav>
<div className="flex items-center gap-3">
<button className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-colors" id="openSettings">
<i className="h-4 w-4 text-slate-300 group-hover:text-emerald-300" data-lucide="settings"></i>
<span>Settings</span>
</button>
<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 hover:border-emerald-400/40 hover:bg-emerald-400/5" id="mobileMenuBtn">
<i className="h-5 w-5 text-slate-300" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-[#0b0f14]/80 backdrop-blur-xl" id="mobileMenu">
<div className="px-4 py-3 flex flex-col gap-2 text-sm">
<a className="rounded-md px-3 py-2 hover:bg-white/5" href="#hero">Home</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5" href="#twin">Digital Twin</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5" href="#actions">Eco-Actions</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5" href="#drone">Drone Insights</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5" href="#forecast">Forecast</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5" href="#wallet">Wallet</a>
<a className="rounded-md px-3 py-2 hover:bg-white/5" href="#alerts">Alerts</a>
</div>
</div>
</header>

<section className="relative" id="hero">

<div className="relative h-[78vh] sm:h-[84vh] overflow-hidden">
<canvas className="absolute inset-0" id="campusCanvas"></canvas>

<div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
<div className="mx-auto max-w-3xl">
<h1 className="text-4xl sm:text-5xl md:text-6 tracking-tight font-semibold text-white drop-shadow-[0_0_20px_rgba(34,255,136,0.18)]">
            Campus Carbon Digital Twin – Powered by Drones, AI &amp; Students.
          </h1>
<p className="mt-4 text-slate-300 text-base sm:text-lg">Glowing carbon clouds above buildings reflect real-time emissions. Explore, act, and reduce together.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-400/10 px-5 py-3 text-sm font-medium text-emerald-200 hover:bg-emerald-400/20 hover:ring-2 hover:ring-emerald-400/40 transition" href="#twin">
<i className="h-4 w-4" data-lucide="radar"></i>
              Explore Dashboard
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-400/50 bg-orange-400/10 px-5 py-3 text-sm font-medium text-orange-200 hover:bg-orange-400/20 hover:ring-2 hover:ring-orange-400/40 transition" href="#actions">
<i className="h-4 w-4" data-lucide="zap"></i>
              Join Eco-Movement
            </a>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
<div className="pointer-events-auto mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2">
<div className="flex items-center gap-2 text-xs text-slate-300">
<i className="h-4 w-4" data-lucide="mouse-pointer-2"></i> Hover buildings for emissions
          </div>
<span className="text-slate-600">•</span>
<div className="flex items-center gap-2 text-xs text-slate-300">
<i className="h-4 w-4" data-lucide="rotate-3d"></i> Drag to rotate · Scroll to zoom
          </div>
</div>
</div>
</div>
</section>

<section className="relative py-14" id="twin">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">3D Campus Carbon Map</h2>
<p className="mt-1 text-slate-400 text-sm">SimCity-style overlays · Solar potential · Vehicle density · Energy spikes</p>
</div>
<div className="hidden md:flex items-center gap-2">

<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-2">
<label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
<span className="text-xs">Solar</span>
<button className="relative inline-flex h-6 w-10 items-center rounded-full transition bg-white/10 border border-white/10" id="layerSolar">
<span className="dot translate-x-1 inline-block h-4 w-4 transform rounded-full bg-emerald-400 transition"></span>
</button>
</label>
<label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
<span className="text-xs">Vehicles</span>
<button className="relative inline-flex h-6 w-10 items-center rounded-full transition bg-white/10 border border-white/10" id="layerVehicles">
<span className="dot translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white/60 transition"></span>
</button>
</label>
<label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
<span className="text-xs">Energy</span>
<button className="relative inline-flex h-6 w-10 items-center rounded-full transition bg-white/10 border border-white/10" id="layerEnergy">
<span className="dot translate-x-1 inline-block h-4 w-4 transform rounded-full bg-emerald-400 transition"></span>
</button>
</label>
</div>

<div className="hidden sm:flex items-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-1 py-1">
<button className="text-xs px-2.5 py-1.5 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-200" id="view3D">3D</button>
<button className="text-xs px-2.5 py-1.5 rounded-md hover:bg-white/10 border border-white/10 text-slate-300" id="viewIndia">India Map</button>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

<div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
<div className="flex items-center gap-2 text-slate-300 text-sm">
<i className="h-4 w-4" data-lucide="map"></i>
<span>Digital Twin View</span>
</div>
<div className="md:hidden flex items-center gap-2">
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-1">
<button className="text-xs px-2 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-200" id="mLayerSolar">Solar</button>
<button className="text-xs px-2 py-1 rounded-md hover:bg-white/10 border border-white/10 text-slate-300" id="mLayerVehicles">Vehicles</button>
<button className="text-xs px-2 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-200" id="mLayerEnergy">Energy</button>
</div>

<div className="flex items-center gap-1">
<button className="text-[11px] px-2 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-200" id="mView3D">3D</button>
<button className="text-[11px] px-2 py-1 rounded-md hover:bg-white/10 border border-white/10 text-slate-300" id="mViewIndia">India</button>
</div>
</div>
</div>
<div className="relative h-[52vh] sm:h-[56vh]">
<canvas className="absolute inset-0" id="twinCanvas"></canvas>
<div className="absolute inset-0 hidden" id="indiaMap"></div>

<div className="hidden absolute z-10 w-56 rounded-xl border border-white/15 bg-[#0b0f14]/90 backdrop-blur-xl p-3 text-xs shadow-lg" id="hoverCard">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-200">Building</span>
<span className="text-slate-400" id="hoverBuilding">–</span>
</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-slate-300">
<div className="rounded-lg bg-white/5 p-2 border border-white/10">
<div className="text-[10px] text-slate-400">CO₂ / yr</div>
<div className="text-emerald-300" id="hoverCO2">– t</div>
</div>
<div className="rounded-lg bg-white/5 p-2 border border-white/10">
<div className="text-[10px] text-slate-400">Energy</div>
<div className="text-orange-300" id="hoverEnergy">– MWh</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="cloud-sun"></i> Emissions Today
              </div>
<span className="text-[10px] text-slate-500">Simulated</span>
</div>
<div className="mt-3 text-3xl tracking-tight font-semibold text-white" id="kpiEmissions">– t CO₂e</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-1/3 bg-gradient-to-r from-orange-400 via-emerald-400 to-emerald-300" id="kpiEmissionsBar"></div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="sun"></i> Solar Potential
            </div>
<p className="mt-2 text-xs text-slate-400">Estimated daily harvest if rooftops optimized.</p>
<div className="mt-3 text-2xl tracking-tight font-semibold text-white" id="kpiSolar">– MWh</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-orange-300" data-lucide="car"></i> Vehicle Density
            </div>
<p className="mt-2 text-xs text-slate-400">Drone simulated counts as proxy for emissions.</p>
<div className="mt-3 text-2xl tracking-tight font-semibold text-white" id="kpiVehicles">– vehicles</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14" id="actions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Gamified Student Eco-Actions</h2>
<p className="mt-1 text-slate-400 text-sm">Log actions, earn badges, climb the leaderboard.</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200 hover:bg-emerald-400/20 transition" id="scanQRBtn">
<i className="h-4 w-4" data-lucide="qr-code"></i> Scan QR
        </button>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="trophy"></i> Top 10 Eco Warriors
            </div>
<span className="text-[10px] text-slate-500">Live</span>
</div>
<ul className="divide-y divide-white/10" id="leaderboard">

</ul>
</div>

<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<button className="actionBtn group rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200 hover:bg-emerald-400/20 transition flex items-center justify-center gap-2" data-action="cycle">
<i className="h-4 w-4" data-lucide="bike"></i> Log Cycling
            </button>
<button className="actionBtn group rounded-xl border border-orange-400/40 bg-orange-400/10 px-4 py-3 text-sm text-orange-200 hover:bg-orange-400/20 transition flex items-center justify-center gap-2" data-action="bottle">
<i className="h-4 w-4" data-lucide="cup-soda"></i> Reusable Bottle
            </button>
<button className="actionBtn group rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200 hover:bg-emerald-400/20 transition flex items-center justify-center gap-2" data-action="plant">
<i className="h-4 w-4" data-lucide="tree-pine"></i> Tree Plantation
            </button>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<span className="text-emerald-300">🌱</span> Green Starter
              </div>
<p className="mt-1 text-xs text-slate-400">Log your first eco-action.</p>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/5 overflow-hidden" id="badgeStarter">
<div className="h-full w-0 bg-emerald-400 transition-all duration-700"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<span className="text-emerald-300">🚴</span> Energy Saver
              </div>
<p className="mt-1 text-xs text-slate-400">Cycle 10 times in a week.</p>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/5 overflow-hidden" id="badgeSaver">
<div className="h-full w-0 bg-orange-400 transition-all duration-700"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<span className="text-emerald-300">🌳</span> Tree Champion
              </div>
<p className="mt-1 text-xs text-slate-400">Plant 5 trees this term.</p>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/5 overflow-hidden" id="badgeChampion">
<div className="h-full w-0 bg-emerald-300 transition-all duration-700"></div>
</div>
</div>
</div>

<input accept="image/*" className="hidden" id="qrFile" type="file"/>
<div className="mt-4 rounded-xl border border-white/10 bg-[#0b0f14]/60 p-3 text-xs text-slate-400">
            Tip: Scan event QR codes to add eco-points to your Carbon Wallet.
          </div>
</div>
</div>
</div>
</section>

<section className="relative py-14" id="drone">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Drone Insights</h2>
<p className="mt-1 text-slate-400 text-sm">Upload drone shots. Detect vehicles and solar coverage. Compare overlays.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-slate-500 rounded-lg border border-white/10 bg-white/5 px-2 py-1">Real-time Drone Scan (Simulated)</span>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="upload-cloud"></i> Upload Drone Image
            </div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200 hover:bg-emerald-400/20 transition" id="runDetection">
<i className="h-4 w-4" data-lucide="scan-line"></i> Run Detection
              </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10 transition" id="toggleOverlay">
<i className="h-4 w-4" data-lucide="layers"></i> Toggle Overlay
              </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="relative aspect-[4/3]">
<img alt="Drone view" className="absolute inset-0 h-full w-full object-cover" id="droneImg" src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14]/40 to-transparent pointer-events-none"></div>
<div className="absolute bottom-3 left-3 text-xs text-slate-300 bg-black/30 backdrop-blur-xl rounded-md border border-white/10 px-2 py-1">Before</div>
</div>
<div className="relative aspect-[4/3]">
<canvas className="absolute inset-0 h-full w-full" id="droneCanvas"></canvas>
<div className="absolute bottom-3 left-3 text-xs text-slate-300 bg-black/30 backdrop-blur-xl rounded-md border border-white/10 px-2 py-1">After (AI overlay)</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-orange-300" data-lucide="car"></i> Car Counts
            </div>
<div className="mt-2 text-2xl tracking-tight font-semibold text-white" id="carCount">–</div>
<p className="mt-1 text-xs text-slate-400">Proxy for parking emissions.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="sun"></i> Solar Panel Coverage
            </div>
<div className="mt-2 text-2xl tracking-tight font-semibold text-white"><span id="solarCoverage">–</span>%</div>
<p className="mt-1 text-xs text-slate-400">Roof area with panels detected.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-slate-300" data-lucide="image"></i> Gallery
            </div>
<div className="mt-2 grid grid-cols-3 gap-2">
<img className="h-16 w-full object-cover rounded-md border border-white/10" src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-16 w-full object-cover rounded-md border border-white/10" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-16 w-full object-cover rounded-md border border-white/10" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14" id="forecast">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Future of Our Campus</h2>
<p className="mt-1 text-slate-400 text-sm">Adjust scenarios to visualize CO₂ trajectories.</p>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="flex items-center gap-2 text-sm text-slate-300">
<i className="h-4 w-4 text-emerald-300" data-lucide="activity"></i> Forecast (2024–2035)
          </div>
<div className="mt-2">
<div className="rounded-xl border border-white/10 bg-[#0b0f14]/60 p-3">
<div className="grid grid-cols-3 gap-3 text-xs text-slate-300">
<div>
<div className="flex items-center justify-between">
<span>Solar %</span>
<span className="text-emerald-300" id="solarVal">30%</span>
</div>
<input className="w-full accent-emerald-400" id="solarRange" max="60" min="0" type="range" value="30"/>
</div>
<div>
<div className="flex items-center justify-between">
<span>EV %</span>
<span className="text-emerald-300" id="evVal">20%</span>
</div>
<input className="w-full accent-emerald-400" id="evRange" max="60" min="0" type="range" value="20"/>
</div>
<div>
<div className="flex items-center justify-between">
<span>LED %</span>
<span className="text-emerald-300" id="ledVal">40%</span>
</div>
<input className="w-full accent-emerald-400" id="ledRange" max="100" min="0" type="range" value="40"/>
</div>
</div>
</div>
</div>
<div className="mt-3">
<div className="rounded-xl border border-white/10 bg-[#0b0f14]/60 p-3">
<div>
<h3 className="text-slate-200 text-sm tracking-tight">CO₂ Scenarios</h3>
<p className="text-xs text-slate-400">Scenario A: No Action, Scenario B: Optimized Interventions</p>
</div>
<div className="mt-2">
<div className="relative w-full">
<div className="w-full">
<div className="rounded-lg border border-white/10 bg-white/5 p-2">
<div className="relative">
<div>
<div className="rounded-md bg-[#0b0f14]/40 p-2">
<div>

<div className="relative h-72">
<canvas className="absolute inset-0" id="forecastChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="mt-2 flex items-center gap-3 text-[11px] text-slate-400">
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-400"></span> No Action</span>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400"></span> With Interventions</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="sparkles"></i> Key Insight
            </div>
<p className="mt-2 text-sm text-slate-200" id="forecastInsight">Adjust sliders to see potential reductions.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="brain"></i> Optimization Tip
            </div>
<p className="mt-2 text-xs text-slate-400">Combining 30% solar with 20% bus electrification and 50% LED upgrades can cut emissions significantly by 2030.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14" id="wallet">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Carbon Wallet</h2>
<p className="mt-1 text-slate-400 text-sm">Your points, rank, and CO₂ offset history. Campus target fills as students contribute.</p>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="wallet"></i> Student Wallet
            </div>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10 transition" id="connectBtn">
<i className="h-4 w-4" data-lucide="user-plus"></i> Connect
            </button>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-[#0b0f14]/60 p-3">
<div className="text-[10px] text-slate-400">Points</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-white" id="walletPoints">0</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0b0f14]/60 p-3">
<div className="text-[10px] text-slate-400">Rank</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-white" id="walletRank">–</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0b0f14]/60 p-3">
<div className="text-[10px] text-slate-400">CO₂ Offset</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-white" id="walletCO2">0 kg</div>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-slate-400 mb-1">Offset History</div>
<div className="space-y-2 text-xs">
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-2 py-1.5">
<span className="text-slate-300 flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="leaf"></i> Cycle to Campus</span>
<span className="text-emerald-300">+3 pts</span>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-2 py-1.5">
<span className="text-slate-300 flex items-center gap-2"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="recycle"></i> Refill Bottle</span>
<span className="text-emerald-300">+1 pt</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-orange-300" data-lucide="target"></i> Campus Target
          </div>
<p className="mt-1 text-xs text-slate-400">Community goal: offset 10,000 kg CO₂ this term.</p>
<div className="mt-3 h-3 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[14%] bg-gradient-to-r from-emerald-400 via-emerald-300 to-orange-400" id="campusProgress"></div>
</div>
<div className="mt-2 text-xs text-slate-400"><span className="text-emerald-200" id="campusProgressVal">1,400</span>/10,000 kg</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300 flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="camera"></i> AR Mode (Beta)
            </div>
<button className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200 hover:bg-emerald-400/20 transition" id="openAR">
<i className="h-4 w-4" data-lucide="scan"></i> Try AR
            </button>
</div>
<p className="mt-2 text-xs text-slate-400">Point your camera at buildings to overlay emissions using marker-based AR.</p>
</div>
</div>
</div>
</section>

<section className="relative py-14" id="alerts">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Emergency Emission Alerts</h2>
<p className="mt-1 text-slate-400 text-sm">Live monitoring with simulated triggers.</p>
</div>
<audio id="alertSound" preload="auto">
<source src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Beep-09.ogg" type="audio/ogg"/>
</audio>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="alertsList">

</div>
</div>
</section>

<div className="fixed inset-0 z-50 hidden items-center justify-center" id="settingsModal">
<div className="absolute inset- 0 bg-black/60 backdrop-blur-sm" data-close="settings"></div>
<div aria-labelledby="settingsTitle" aria-modal="true" className="relative z-10 w-[92vw] max-w-lg rounded-2xl border border-white/10 bg-[#0b0f14]/90 backdrop-blur-xl p-5 shadow-2xl" role="dialog">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-white" id="settingsTitle">Settings</h3>
<p className="text-xs text-slate-400 mt-0.5">Personalize visuals and performance.</p>
</div>
<button aria-label="Close settings" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" data-close="settings">
<i className="h-4 w-4 text-slate-300" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 space-y-3 text-sm">
<label className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<span className="text-slate-300">Particles Background</span>
<input checked="" className="accent-emerald-400" id="toggleParticles" type="checkbox"/>
</label>
<label className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<span className="text-slate-300">Reduce Motion</span>
<input className="accent-emerald-400" id="toggleMotion" type="checkbox"/>
</label>
<label className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<span className="text-slate-300">High-Detail 3D</span>
<input checked="" className="accent-emerald-400" id="toggle3DDetail" type="checkbox"/>
</label>
</div>
<div className="mt-5 flex items-center justify-end gap-2">
<button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10 transition" data-close="settings">Close</button>
<button className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200 hover:bg-emerald-400/20 transition" id="saveSettings">
<i className="h-4 w-4" data-lucide="save"></i>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center" id="arModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" data-close="ar"></div>
<div className="relative z-10 w-[92vw] max-w-xl rounded-2xl border border-white/10 bg-[#0b0f14]/90 backdrop-blur-xl p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-white">AR Mode (Marker)</h3>
<p className="text-xs text-slate-400 mt-0.5">Open a simple AR scene using your camera. Works best on mobile.</p>
</div>
<button aria-label="Close AR" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" data-close="ar">
<i className="h-4 w-4 text-slate-300" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 space-y-3 text-sm text-slate-300">
<p>Tap “Launch AR” to open a new window with an AR marker scene. Point it at a Hiro marker to see an emission orb.</p>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs">
          Tip: Print “hiro” marker or show it on another screen.
        </div>
</div>
<div className="mt-5 flex items-center justify-end gap-2">
<button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10 transition" data-close="ar">Cancel</button>
<button className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200 hover:bg-emerald-400/20 transition" id="launchAR">
<i className="h-4 w-4" data-lucide="external-link"></i> Launch AR
        </button>
</div>
</div>
</div>

<footer className="border-t border-white/10 py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-emerald-300 font-semibold">CC</span>
<span>Campus Carbon Digital Twin • v1.0</span>
</div>
<div className="flex items-center gap-3">
<a className="hover:text-emerald-300 transition" href="#hero">Home</a>
<a className="hover:text-emerald-300 transition" href="#twin">Digital Twin</a>
<a className="hover:text-emerald-300 transition" href="#actions">Eco-Actions</a>
<a className="hover:text-emerald-300 transition" href="#drone">Drone</a>
<a className="hover:text-emerald-300 transition" href="#forecast">Forecast</a>
<a className="hover:text-emerald-300 transition" href="#wallet">Wallet</a>
<a className="hover:text-emerald-300 transition" href="#alerts">Alerts</a>
</div>
</div>
</div>
</footer>



<style>html,body{margin:0;height:100%;background:#000}</style>
<body>
<a-scene arjs="sourceType: webcam; debugUIEnabled: false;" embedded="">
<a-marker preset="hiro">
<a-entity position="0 0 0">
<a-sphere color="#34D399" opacity="0.75" position="0 0.6 0" radius="0.5"></a-sphere>
<a-torus color="#F59E0B" opacity="0.6" radius="0.7" radius-tubular="0.05" rotation="90 0 0"></a-torus>
</a-entity>
</a-marker>
<a-entity camera=""></a-entity>
</a-scene>
</body>
    </>
  );
}
