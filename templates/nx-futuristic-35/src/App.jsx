import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Lightweight component library: tokens, theming, and color migration
      (function () {
        const TOKENS = {
          dark: {
            '--bg': '#0b1220', '--panel': '#0f1629', '--hover': '#101a32', '--hover-2': '#111a31', '--overlay': '#0b1220cc',
            '--border': '#1a2540', '--text': '#e6e7eb', '--muted': '#b9c2cf', '--subtle': '#9aa4b2', '--weak': '#95a1b1', '--strong': '#c6cfdb',
            '--accent': '#22ff88', '--accent-2': '#60a5fa', '--accent-3': '#a3e635', '--accent-contrast': '#071019'
          },
          light: {
            '--bg': '#f8fafc', '--panel': '#ffffff', '--hover': '#f1f5f9', '--hover-2': '#eef2f7', '--overlay': '#ffffffcc',
            '--border': '#e5e7eb', '--text': '#0b1220', '--muted': '#475569', '--subtle': '#64748b', '--weak': '#6b7280', '--strong': '#334155',
            '--accent': '#22ff88', '--accent-2': '#60a5fa', '--accent-3': '#a3e635', '--accent-contrast': '#071019'
          }
        };

        const HEX_TO_VAR = {
          '#0b1220':'var(--bg)', '#0f1629':'var(--panel)', '#101a32':'var(--hover)', '#111a31':'var(--hover-2)', '#0b1220cc':'var(--overlay)',
          '#1a2540':'var(--border)', '#e6e7eb':'var(--text)', '#b9c2cf':'var(--muted)', '#9aa4b2':'var(--subtle)', '#95a1b1':'var(--weak)', '#c6cfdb':'var(--strong)',
          '#22ff88':'var(--accent)', '#60a5fa':'var(--accent-2)', '#a3e635':'var(--accent-3)', '#071019':'var(--accent-contrast)'
        };

        function applyVars(theme) {
          const t = TOKENS[theme] || TOKENS.dark;
          Object.entries(t).forEach(([k, v]) => document.body.style.setProperty(k, v));
          document.body.setAttribute('data-theme', theme);
          setThemeIcon(theme);
          localStorage.setItem('theme', theme);
        }

        function migrateColorClassesToVars(root = document) {
          const nodes = root.querySelectorAll('[class]');
          nodes.forEach(el => {
            const classes = Array.from(el.classList);
            for (const cls of classes) {
              let m;
              if ((m = cls.match(/^bg-\[\#([0-9a-fA-F]{6,8})\]$/))) {
                const hex = ('#' + m[1]).toLowerCase();
                if (HEX_TO_VAR[hex]) {
                  el.style.backgroundColor = HEX_TO_VAR[hex];
                  el.classList.remove(cls);
                }
              } else if ((m = cls.match(/^text-\[\#([0-9a-fA-F]{6,8})\]$/))) {
                const hex = ('#' + m[1]).toLowerCase();
                if (HEX_TO_VAR[hex]) {
                  el.style.color = HEX_TO_VAR[hex];
                  el.classList.remove(cls);
                }
              } else if ((m = cls.match(/^border-\[\#([0-9a-fA-F]{6,8})\]$/))) {
                const hex = ('#' + m[1]).toLowerCase();
                if (HEX_TO_VAR[hex]) {
                  el.style.borderColor = HEX_TO_VAR[hex];
                  el.classList.remove(cls);
                }
              }
            }
          });

          // SVG grid strokes -> var(--border)
          document.querySelectorAll('svg [stroke="#1a2540"], svg g[stroke="#1a2540"]').forEach(n => {
            n.style.stroke = 'var(--border)';
            if (n.hasAttribute('stroke')) n.removeAttribute('stroke');
          });
          document.querySelectorAll('svg [stroke="#e5e7eb"], svg g[stroke="#e5e7eb"]').forEach(n => {
            n.style.stroke = 'var(--border)';
            if (n.hasAttribute('stroke')) n.removeAttribute('stroke');
          });
        }

        function setThemeIcon(theme) {
          const btn = document.getElementById('theme-toggle');
          if (!btn) return;
          btn.innerHTML = '';
          const i = document.createElement('i');
          i.setAttribute('data-lucide', theme === 'light' ? 'sun' : 'moon');
          i.className = 'w-4.5 h-4.5';
          btn.appendChild(i);
          if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        function initTheme() {
          const saved = localStorage.getItem('theme');
          const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
          const theme = saved || (prefersLight ? 'light' : 'dark');
          applyVars(theme);
        }

        function navActiveStyles(route) {
          document.querySelectorAll('[data-nav]').forEach(a => {
            const active = a.getAttribute('data-nav') === route;
            if (active) {
              a.style.borderColor = 'var(--border)';
              a.style.backgroundColor = 'var(--panel)';
            } else {
              a.style.borderColor = 'transparent';
              a.style.backgroundColor = '';
            }
          });
        }

        function setRoute(route) {
          const routes = ['landing', 'login', 'app'];
          routes.forEach(r => {
            const el = document.querySelector(`#route-${r}`);
            if (el) el.classList.toggle('hidden', r !== route);
            if (el) el.classList.toggle('block', r === route);
          });
          navActiveStyles(route);
          const m = document.getElementById('mobile-nav');
          if (m) m.classList.add('hidden');
          if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        function resolveRoute() {
          const hash = (location.hash || '#landing').slice(1);
          const route = ['landing', 'login', 'app'].includes(hash) ? hash : 'landing';
          setRoute(route);
        }

        // Public API
        window.NXUI = {
          theme: {
            set: applyVars,
            current: () => document.body.getAttribute('data-theme') || 'dark'
          },
          migrate: migrateColorClassesToVars,
          route: { set: setRoute, resolve: resolveRoute }
        };

        // Boot
        document.addEventListener('DOMContentLoaded', function () {
          initTheme();
          migrateColorClassesToVars(document);
          if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

          // Year
          const year = document.getElementById('year');
          if (year) year.textContent = new Date().getFullYear();

          // Routing
          window.addEventListener('hashchange', resolveRoute);
          resolveRoute();

          // Mobile nav toggle
          const openMenu = document.getElementById('open-menu');
          if (openMenu) {
            openMenu.addEventListener('click', () => {
              const m = document.getElementById('mobile-nav');
              if (m) m.classList.toggle('hidden');
            });
          }

          // CTA
          const primaryCta = document.getElementById('primary-cta');
          if (primaryCta) {
            primaryCta.addEventListener('click', () => { location.hash = '#app'; });
          }

          // Pricing toggle
          const toggleAnnual = document.getElementById('toggle-annual');
          if (toggleAnnual) {
            toggleAnnual.addEventListener('click', function () {
              const pressed = this.getAttribute('aria-pressed') === 'true';
              this.setAttribute('aria-pressed', String(!pressed));
              const knob = this.querySelector('span');
              if (knob) knob.style.left = pressed ? '3px' : '22px';
              document.querySelectorAll('[data-price-monthly]').forEach(el => {
                const m = el.getAttribute('data-price-monthly');
                const a = el.getAttribute('data-price-annual');
                el.textContent = this.getAttribute('aria-pressed') === 'true' ? a : m;
              });
            });
          }

          // Realtime toggle
          const rt = document.getElementById('realtime-toggle');
          if (rt) {
            rt.addEventListener('click', function () {
              const on = this.getAttribute('aria-pressed') === 'true';
              this.setAttribute('aria-pressed', String(!on));
              const knob = this.querySelector('span');
              if (knob) knob.style.left = on ? '3px' : '22px';
              this.style.backgroundColor = on ? 'var(--bg)' : 'var(--panel)';
            });
          }

          // Login fake submit
          const loginForm = document.getElementById('login-form');
          if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
              e.preventDefault();
              location.hash = '#app';
            });
          }

          // Theme toggle
          const themeToggle = document.getElementById('theme-toggle');
          if (themeToggle) {
            themeToggle.addEventListener('click', () => {
              const current = document.body.getAttribute('data-theme') || 'dark';
              const next = current === 'dark' ? 'light' : 'dark';
              applyVars(next);
            });
          }
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-[#0b1220cc]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--overlay)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-md border bg-[#0f1629] shadow-sm" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<span className="text-sm font-semibold tracking-tight" style={{color: 'var(--accent)'}}>NX</span>
</div>
<nav className="hidden md:flex items-center gap-1 text-sm">
<a className="px-3 py-2 rounded-md border border-transparent hover:bg-[#0f1629] transition-colors" data-nav="landing" href="#landing" style={{color: 'var(--text)'}}>Home</a>
<a className="px-3 py-2 rounded-md border border-transparent hover:bg-[#0f1629] transition-colors" data-nav="app" href="#app" style={{color: 'var(--text)'}}>Dashboard</a>
<a className="px-3 py-2 rounded-md border border-transparent hover:bg-[#0f1629] transition-colors" data-nav="login" href="#login" style={{color: 'var(--text)'}}>Login</a>
</nav>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50 border transition-colors" id="primary-cta" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-contrast)', borderColor: '#0cf06a'}}>
<i className="w-4 h-4" data-lucide="rocket"></i>
            Get Started
          </button>

<button aria-label="Toggle theme" className="inline-flex items-center justify-center w-9 h-9 rounded-md border hover:bg-[#111a31] focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50 transition-colors" id="theme-toggle" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<i className="w-4.5 h-4.5" data-lucide="moon"></i>
</button>
<button className="inline-flex md:hidden items-center justify-center w-9 h-9 rounded-md border hover:bg-[#111a31] focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50 transition-colors" id="open-menu" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<i className="w-4.5 h-4.5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t" id="mobile-nav" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<div className="px-4 py-3 flex flex-col gap-1 text-sm">
<a className="px-3 py-2 rounded-md border border-transparent hover:bg-[#0f1629] transition-colors" href="#landing" style={{color: 'var(--text)'}}>Home</a>
<a className="px-3 py-2 rounded-md border border-transparent hover:bg-[#0f1629] transition-colors" href="#app" style={{color: 'var(--text)'}}>Dashboard</a>
<a className="px-3 py-2 rounded-md border border-transparent hover:bg-[#0f1629] transition-colors" href="#login" style={{color: 'var(--text)'}}>Login</a>
</div>
</div>
</header>

<main className="block" data-route="landing" id="route-landing">

<section className="relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-20 -left-20 w-[520px] h-[520px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent-2) 20%, transparent) 0%, transparent 70%)'}}></div>
<div className="absolute -bottom-24 -right-16 w-[560px] h-[560px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent) 20%, transparent) 0%, transparent 70%)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border bg-[#0f1629] text-[12px]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)', color: 'var(--subtle)'}}>
<i className="w-3.5 h-3.5" data-lucide="sparkles" style={{color: 'var(--accent-3)'}}></i>
                Real-time control plane for your data
              </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                Operate at
                <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(92deg,var(--accent) 0%,var(--accent-2) 55%,var(--accent-3) 100%)'}}>escape velocity</span>.
              </h1>
<p className="mt-5 text-[15px] leading-7" style={{color: 'var(--muted)'}}>
                Ship faster with an adaptive admin, streaming analytics, and access controls baked-in.
                Built for teams moving from zero to hyperscale.
              </p>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50 border transition-colors" href="#app" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-contrast)', borderColor: '#0cf06a'}}>
<i className="w-4.5 h-4.5" data-lucide="zap"></i>
                  Launch Dashboard
                </a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border bg-[#0f1629] hover:bg-[#111a31] focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50 transition-colors" href="#login" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)', color: 'var(--text)'}}>
<i className="w-4.5 h-4.5" data-lucide="log-in"></i>
                  Sign In
                </a>
</div>

<div className="mt-10 flex items-center gap-6" style={{color: 'var(--weak)'}}>
<span className="text-xs">Trusted by</span>
<div className="flex items-center gap-5 opacity-80">
<div className="text-sm font-semibold tracking-tight">AL</div>
<div className="text-sm font-semibold tracking-tight">VX</div>
<div className="text-sm font-semibold tracking-tight">QO</div>
<div className="text-sm font-semibold tracking-tight">ZT</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-xl border bg-[#0f1629] shadow-2xl overflow-hidden" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center gap-2 px-4 h-10 border-b" style={{borderColor: 'var(--border)'}}>
<div className="flex gap-1.5">
<span className="inline-block w-2.5 h-2.5 rounded-full" style={{backgroundColor: 'var(--accent-2)'}}></span>
<span className="inline-block w-2.5 h-2.5 rounded-full" style={{backgroundColor: 'var(--accent-3)'}}></span>
<span className="inline-block w-2.5 h-2.5 rounded-full" style={{backgroundColor: 'var(--accent)'}}></span>
</div>
<div className="ml-auto flex items-center gap-2" style={{color: 'var(--weak)'}}>
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
<i className="w-4 h-4" data-lucide="maximize-2"></i>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-0">
<div className="p-5 border-r" style={{borderColor: 'var(--border)'}}>
<div className="text-xs" style={{color: 'var(--weak)'}}>Throughput</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">124.3k/s</div>
<div className="mt-3 h-28">
<svg className="w-full h-full" viewbox="0 0 240 80">
<defs>
<lineargradient id="g1" x1="0" x2="1">
<stop offset="0%" stop-color="var(--accent)" stop-opacity="1"></stop>
<stop offset="100%" stop-color="var(--accent-2)" stop-opacity="1"></stop>
</lineargradient>
</defs>
<path d="M0,55 L20,50 L40,60 L60,30 L80,35 L100,25 L120,45 L140,20 L160,28 L180,15 L200,22 L220,10 L240,14" fill="none" stroke="url(#g1)" strokeWidth="2.2"></path>
</svg>
</div>
</div>
<div className="p-5">
<div className="text-xs" style={{color: 'var(--weak)'}}>Latency p95</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">38 ms</div>
<div className="mt-3 h-28">
<svg className="w-full h-full" viewbox="0 0 240 80">
<defs>
<lineargradient id="g2" x1="0" x2="1">
<stop offset="0%" stop-color="var(--accent-3)" stop-opacity="1"></stop>
<stop offset="100%" stop-color="var(--accent)" stop-opacity="1"></stop>
</lineargradient>
</defs>
<path d="M0,20 L20,25 L40,30 L60,40 L80,48 L100,52 L120,58 L140,60 L160,62 L180,65 L200,68 L220,70 L240,72" fill="none" stroke="url(#g2)" strokeWidth="2.2"></path>
</svg>
</div>
</div>
</div>
<div className="px-5 py-4 border-t flex items-center gap-3" style={{borderColor: 'var(--border)'}}>
<span className="text-xs px-2 py-1 rounded-md border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--subtle)'}}>Websocket</span>
<span className="text-xs px-2 py-1 rounded-md border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--subtle)'}}>Edge</span>
<span className="text-xs px-2 py-1 rounded-md border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--subtle)'}}>Observability</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t" style={{borderColor: 'var(--border)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-lg border p-6 hover:border-[#264070] hover:shadow transition-colors" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="w-10 h-10 rounded-md grid place-items-center border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<i className="w-5 h-5" data-lucide="cpu" style={{color: 'var(--accent-2)'}}></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Compute at the edge</h3>
<p className="mt-2 text-sm" style={{color: 'var(--muted)'}}>Low-latency pipelines running on globally distributed workers with zero cold starts.</p>
</div>
<div className="rounded-lg border p-6 hover:border-[#264070] hover:shadow transition-colors" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="w-10 h-10 rounded-md grid place-items-center border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<i className="w-5 h-5" data-lucide="shield-check" style={{color: 'var(--accent)'}}></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Granular access</h3>
<p className="mt-2 text-sm" style={{color: 'var(--muted)'}}>Role-based policies, audit trails, and signed actions to keep your org secure.</p>
</div>
<div className="rounded-lg border p-6 hover:border-[#264070] hover:shadow transition-colors" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="w-10 h-10 rounded-md grid place-items-center border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<i className="w-5 h-5" data-lucide="activity" style={{color: 'var(--accent-3)'}}></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Live analytics</h3>
<p className="mt-2 text-sm" style={{color: 'var(--muted)'}}>Stream metrics in real-time and react with automations and alerts.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-t" style={{borderColor: 'var(--border)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Simple, scalable pricing</h2>
<div className="flex items-center gap-3">
<span className="text-sm" style={{color: 'var(--subtle)'}}>Monthly</span>

<button aria-pressed="false" className="relative inline-flex w-12 h-6 rounded-full border transition-colors" data-ui="toggle" id="toggle-annual" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<span className="absolute top-[3px] left-[3px] w-5 h-5 rounded-full shadow transition-all" style={{backgroundColor: 'var(--accent)'}}></span>
</button>
<span className="text-sm" style={{color: 'var(--subtle)'}}>Annual</span>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-lg border p-6 hover:border-[#264070] transition-colors" data-ui="card" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Starter</h3>
<i className="w-5 h-5" data-lucide="leaf" style={{color: 'var(--accent)'}}></i>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight" data-price-annual="$0" data-price-monthly="$0">$0</span>
<span className="text-sm" style={{color: 'var(--subtle)'}}>/ mo</span>
</div>
<ul className="mt-4 space-y-2 text-sm" style={{color: 'var(--muted)'}}>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check" style={{color: 'var(--accent)'}}></i>1 project</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check" style={{color: 'var(--accent)'}}></i>10k events</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check" style={{color: 'var(--accent)'}}></i>Email support</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 px-3 py-2.5 rounded-md border hover:bg-[#101a32] focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50" href="#login" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--text)'}}>Get started</a>
</div>

<div className="relative rounded-lg border p-6 shadow-lg" style={{borderColor: '#3583ff', backgroundColor: 'var(--panel)'}}>
<div className="absolute -top-2 right-4 text-[11px] px-2 py-0.5 rounded-full border" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>Popular</div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Growth</h3>
<i className="w-5 h-5" data-lucide="trending-up" style={{color: 'var(--accent-2)'}}></i>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight" data-price-annual="$32" data-price-monthly="$39">$39</span>
<span className="text-sm" style={{color: 'var(--subtle)'}}>/ mo</span>
</div>
<ul className="mt-4 space-y-2 text-sm" style={{color: 'var(--muted)'}}>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check" style={{color: 'var(--accent)'}}></i>Unlimited projects</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check" style={{color: 'var(--accent)'}}></i>1M events</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check" style={{color: 'var(--accent)'}}></i>Priority support</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 px-3 py-2.5 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50" href="#login" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-contrast)', borderColor: '#0cf06a'}}>Choose Growth</a>
</div>

<div className="rounded-lg border p-6 hover:border-[#264070] transition-colors" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Scale</h3>
<i className="w-5 h-5" data-lucide="server" style={{color: 'var(--accent-3)'}}></i>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight" data-price-annual="$119" data-price-monthly="$149">$149</span>
<span className="text-sm" style={{color: 'var(--subtle)'}}>/ mo</span>
</div>
<ul className="mt-4 space-y-2 text-sm" style={{color: 'var(--muted)'}}>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check" style={{color: 'var(--accent)'}}></i>Unlimited events</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check" style={{color: 'var(--accent)'}}></i>SLA &amp; SSO</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="check" style={{color: 'var(--accent)'}}></i>Dedicated cluster</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 px-3 py-2.5 rounded-md border hover:bg-[#101a32] focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50" href="#login" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--text)'}}>Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-14 border-t" style={{borderColor: 'var(--border)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-xl border p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div>
<h3 className="text-2xl font-semibold tracking-tight">Ready to accelerate?</h3>
<p className="mt-1 text-sm" style={{color: 'var(--muted)'}}>Deploy your control plane in minutes with built-in observability.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50" href="#app" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-contrast)', borderColor: '#0cf06a'}}>
<i className="w-4.5 h-4.5" data-lucide="layout-dashboard"></i>
                Open Admin
              </a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border hover:bg-[#101a32] focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50" href="#login" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--text)'}}>
<i className="w-4.5 h-4.5" data-lucide="user"></i>
                Sign In
              </a>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t" style={{borderColor: 'var(--border)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm" style={{color: 'var(--subtle)'}}>
<div className="h-7 w-7 grid place-items-center rounded-md border bg-[#0f1629]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<span className="text-xs font-semibold tracking-tight" style={{color: 'var(--accent)'}}>NX</span>
</div>
<span>© <span id="year"></span> NX Systems</span>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="hover:text-[#e6e7eb]" href="#" style={{color: 'var(--subtle)'}}>Privacy</a>
<a className="hover:text-[#e6e7eb]" href="#" style={{color: 'var(--subtle)'}}>Terms</a>
<a className="hover:text-[#e6e7eb]" href="#" style={{color: 'var(--subtle)'}}>Status</a>
</div>
</div>
</footer>
</main>

<main className="hidden" data-route="login" id="route-login">
<section className="min-h-[calc(100vh-64px)] grid place-items-center px-4">
<div className="w-full max-w-md">
<div className="rounded-xl border p-6 shadow-xl" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<span className="text-sm font-semibold tracking-tight" style={{color: 'var(--accent)'}}>NX</span>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight">Welcome back</h1>
<p className="text-[13px]" style={{color: 'var(--subtle)'}}>Sign in to access your dashboard</p>
</div>
</div>
<form className="mt-6 space-y-4" id="login-form">
<div>
<label className="text-sm" style={{color: 'var(--muted)'}}>Email</label>
<div className="mt-2 flex items-center gap-2 rounded-md border px-3 focus-within:ring-2 focus-within:ring-[#60a5fa]/50" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<i className="w-4.5 h-4.5" data-lucide="mail" style={{color: 'var(--subtle)'}}></i>
<input className="w-full bg-transparent py-2.5 text-sm focus:outline-none" placeholder="you@company.com" required="" style={{color: 'var(--text)', : ':placeholder{color: var(--weak)'}} type="email"/>
</div>
</div>
<div>
<label className="text-sm" style={{color: 'var(--muted)'}}>Password</label>
<div className="mt-2 flex items-center gap-2 rounded-md border px-3 focus-within:ring-2 focus-within:ring-[#60a5fa]/50" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<i className="w-4.5 h-4.5" data-lucide="lock" style={{color: 'var(--subtle)'}}></i>
<input className="w-full bg-transparent py-2.5 text-sm focus:outline-none" placeholder="••••••••" required="" style={{color: 'var(--text)', : ':placeholder{color: var(--weak)'}} type="password"/>
</div>
</div>
<div className="flex items-center justify-between">

<label className="inline-flex items-center gap-2 text-sm select-none cursor-pointer" style={{color: 'var(--muted)'}}>
<input className="peer hidden" id="remember" type="checkbox" />
<span className="w-[18px] h-[18px] rounded-[5px] border grid place-items-center peer-checked:border-[#22ff88] transition-colors" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<i className="w-3.5 h-3.5 text-[#22ff88] hidden peer-checked:block" data-lucide="check"></i>
</span>
                  Remember me
                </input></label>
<a className="text-sm" href="#" style={{color: 'var(--accent-2)'}}>Forgot?</a>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/50" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-contrast)', borderColor: '#0cf06a'}}>
<i className="w-4.5 h-4.5" data-lucide="log-in"></i>
                Sign In
              </button>
</form>
<div className="mt-6 text-center text-sm" style={{color: 'var(--subtle)'}}>
              No account?
              <a href="#landing" style={{color: 'var(--accent-2)'}}>Create one</a>
</div>
</div>
</div>
</section>
</main>

<main className="hidden" data-route="app" id="route-app">
<div className="grid grid-cols-12">

<aside className="hidden lg:flex col-span-2 min-h-[calc(100vh-64px)] flex-col border-r" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="p-4">
<div className="text-xs" style={{color: 'var(--subtle)'}}>Navigation</div>
<nav className="mt-3 space-y-1 text-sm">
<a className="group flex items-center gap-2.5 px-3 py-2 rounded-md border border-transparent hover:bg-[#101a32]" href="#">
<i className="w-4.5 h-4.5" data-lucide="layout-dashboard" style={{color: 'var(--accent-2)'}}></i>
<span className="group-hover:text-[#e6e7eb]" style={{color: 'var(--strong)'}}>Overview</span>
</a>
<a className="group flex items-center gap-2.5 px-3 py-2 rounded-md border border-transparent hover:bg-[#101a32]" href="#">
<i className="w-4.5 h-4.5" data-lucide="users" style={{color: 'var(--accent-3)'}}></i>
<span className="group-hover:text-[#e6e7eb]" style={{color: 'var(--strong)'}}>Users</span>
</a>
<a className="group flex items-center gap-2.5 px-3 py-2 rounded-md border border-transparent hover:bg-[#101a32]" href="#">
<i className="w-4.5 h-4.5" data-lucide="activity" style={{color: 'var(--accent)'}}></i>
<span className="group-hover:text-[#e6e7eb]" style={{color: 'var(--strong)'}}>Analytics</span>
</a>
<a className="group flex items-center gap-2.5 px-3 py-2 rounded-md border border-transparent hover:bg-[#101a32]" href="#">
<i className="w-4.5 h-4.5" data-lucide="settings" style={{color: 'var(--subtle)'}}></i>
<span className="group-hover:text-[#e6e7eb]" style={{color: 'var(--strong)'}}>Settings</span>
</a>
</nav>
</div>
<div className="mt-auto p-4 border-t" style={{borderColor: 'var(--border)'}}>
<div className="rounded-lg border p-3 text-xs" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--subtle)'}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="life-buoy" style={{color: 'var(--accent-2)'}}></i>
                Need help?
              </div>
<a className="mt-2 inline-flex items-center gap-1" href="#" style={{color: 'var(--accent-2)'}}>Open docs<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i></a>
</div>
</div>
</aside>

<section className="col-span-12 lg:col-span-10 min-h-[calc(100vh-64px)]">

<div className="sticky top-16 z-40 border-b backdrop-blur-md" style={{borderColor: 'var(--border)', backgroundColor: 'var(--overlay)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="hidden md:flex items-center gap-2 text-sm">
<span className="px-2 py-1 rounded-md border bg-[#0f1629]" style={{borderColor: 'var(--border)', color: 'var(--subtle)', backgroundColor: 'var(--panel)'}}>Project</span>
<button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border hover:bg-[#101a32]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
                  NX Core
                  <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="flex items-center gap-2 w-full md:w-auto">
<div className="flex-1 md:flex-none flex items-center gap-2 rounded-md border px-3 h-9" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<i className="w-4.5 h-4.5" data-lucide="search" style={{color: 'var(--subtle)'}}></i>
<input className="w-full bg-transparent text-sm focus:outline-none" placeholder="Search events, users, configs..." style={{color: 'var(--text)', : ':placeholder{color: var(--weak)'}} />
</input></div>
<button className="inline-flex items-center justify-center w-9 h-9 rounded-md border hover:bg-[#101a32]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<i className="w-4.5 h-4.5" data-lucide="bell"></i>
</button>
<div className="w-9 h-9 rounded-md overflow-hidden border" style={{borderColor: 'var(--border)'}}>
<img alt="avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="rounded-lg border p-4" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center justify-between">
<span className="text-sm" style={{color: 'var(--subtle)'}}>Requests</span>
<i className="w-4.5 h-4.5" data-lucide="bar-chart-3" style={{color: 'var(--accent-2)'}}></i>
</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">2.4M</div>
<div className="mt-1 text-xs inline-flex items-center gap-1" style={{color: 'var(--accent)'}}><i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>+12.4%</div>
</div>
<div className="rounded-lg border p-4" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center justify-between">
<span className="text-sm" style={{color: 'var(--subtle)'}}>Errors</span>
<i className="w-4.5 h-4.5" data-lucide="alert-triangle" style={{color: 'var(--accent-3)'}}></i>
</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">0.19%</div>
<div className="mt-1 text-xs" style={{color: 'var(--subtle)'}}>p95 36ms</div>
</div>
<div className="rounded-lg border p-4" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center justify-between">
<span className="text-sm" style={{color: 'var(--subtle)'}}>Active users</span>
<i className="w-4.5 h-4.5" data-lucide="users" style={{color: 'var(--accent)'}}></i>
</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">18,392</div>
<div className="mt-1 text-xs inline-flex items-center gap-1" style={{color: 'var(--accent)'}}><i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>+3.2%</div>
</div>
<div className="rounded-lg border p-4" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center justify-between">
<span className="text-sm" style={{color: 'var(--subtle)'}}>Revenue</span>
<i className="w-4.5 h-4.5" data-lucide="coins" style={{color: 'var(--accent-2)'}}></i>
</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">$124k</div>
<div className="mt-1 text-xs" style={{color: 'var(--subtle)'}}>MRR</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 rounded-lg border p-4" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center justify-between">
<div>
<h4 className="text-[15px] font-semibold tracking-tight">Traffic</h4>
<p className="text-xs" style={{color: 'var(--subtle)'}}>Live over last 24h</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border bg-[#0b1220] hover:bg-[#101a32] text-xs" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
                      24h
                    </button>
<button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border bg-[#0b1220] hover:bg-[#101a32] text-xs" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>7d</button>
<button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border bg-[#0b1220] hover:bg-[#101a32] text-xs" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>30d</button>
</div>
</div>
<div className="mt-4 h-64">
<svg className="w-full h-full" viewbox="0 0 640 240">
<defs>
<lineargradient id="lgA" x1="0" x2="1">
<stop offset="0%" stop-color="var(--accent-2)"></stop>
<stop offset="100%" stop-color="var(--accent)"></stop>
</lineargradient>
<lineargradient id="lgFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="var(--accent)" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="var(--accent)" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,180 L60,170 L120,160 L180,120 L240,130 L300,100 L360,140 L420,90 L480,110 L540,80 L600,90" fill="none" stroke="url(#lgA)" strokeWidth="2.2"></path>
<path d="M0,180 L60,170 L120,160 L180,120 L240,130 L300,100 L360,140 L420,90 L480,110 L540,80 L600,90 L600,240 L0,240 Z" fill="url(#lgFill)"></path>

<g data-token-stroke="border" opacity="0.7" stroke="#1a2540" strokeWidth="1"></g>
<line style={{stroke: 'var(--border)'}} x1="0" x2="640" y1="200" y2="200"></line>
<line style={{stroke: 'var(--border)'}} x1="0" x2="640" y1="160" y2="160"></line>
<line style={{stroke: 'var(--border)'}} x1="0" x2="640" y1="120" y2="120"></line>
<line style={{stroke: 'var(--border)'}} x1="0" x2="640" y1="80" y2="80"></line>
</svg>
</div>
</div>
<div className="rounded-lg border p-4" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="flex items-center justify-between">
<h4 className="text-[15px] font-semibold tracking-tight">Realtime</h4>

<button aria-pressed="true" className="relative inline-flex w-11 h-6 rounded-full border transition-colors" data-ui="toggle" id="realtime-toggle" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<span className="absolute top-[3px] left-[22px] w-5 h-5 rounded-full shadow transition-all" style={{backgroundColor: 'var(--accent-2)'}}></span>
</button>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between text-sm">
<span style={{color: 'var(--subtle)'}}>Ingest</span>
<span className="font-medium">98.1k/s</span>
</div>
<div className="h-2 rounded border overflow-hidden" style={{backgroundColor: 'var(--bg)', borderColor: 'var(--border)'}}>
<div className="h-full" style={{width: '72%', backgroundColor: 'var(--accent)'}}></div>
</div>
<div className="flex items-center justify-between text-sm">
<span style={{color: 'var(--subtle)'}}>Egress</span>
<span className="font-medium">63.4k/s</span>
</div>
<div className="h-2 rounded border overflow-hidden" style={{backgroundColor: 'var(--bg)', borderColor: 'var(--border)'}}>
<div className="h-full" style={{width: '54%', backgroundColor: 'var(--accent-2)'}}></div>
</div>
<div className="flex items-center justify-between text-sm">
<span style={{color: 'var(--subtle)'}}>Dropped</span>
<span className="font-medium">0.02%</span>
</div>
<div className="h-2 rounded border overflow-hidden" style={{backgroundColor: 'var(--bg)', borderColor: 'var(--border)'}}>
<div className="h-full" style={{width: '2%', backgroundColor: 'var(--accent-3)'}}></div>
</div>
</div>
</div>
</div>

<div className="rounded-lg border overflow-hidden" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<div className="px-4 py-3 flex items-center justify-between border-b" style={{borderColor: 'var(--border)'}}>
<div>
<h4 className="text-[15px] font-semibold tracking-tight">Recent events</h4>
<p className="text-xs" style={{color: 'var(--subtle)'}}>Last 50 ingested</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border bg-[#0b1220] hover:bg-[#101a32] text-xs" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<i className="w-3.5 h-3.5" data-lucide="sliders-horizontal"></i>
                    Filter
                  </button>
<button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border text-xs" style={{backgroundColor: 'var(--accent)', color: 'var(--accent-contrast)', borderColor: '#0cf06a'}}>
<i className="w-3.5 h-3.5" data-lucide="download"></i>
                    Export
                  </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-left" style={{color: 'var(--subtle)'}}>
<tr className="border-b" style={{borderColor: 'var(--border)'}}>
<th className="px-4 py-3 font-medium">Event</th>
<th className="px-4 py-3 font-medium">Source</th>
<th className="px-4 py-3 font-medium">Latency</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y" style={{borderColor: 'var(--border)'}}>
<tr className="hover:bg-[#0b1220]">
<td className="px-4 py-3 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="activity" style={{color: 'var(--accent-2)'}}></i>
                        pipeline.ingest
                      </td>
<td className="px-4 py-3">edge-ap-sg</td>
<td className="px-4 py-3">32 ms</td>
<td className="px-4 py-3"><span className="px-2 py-1 rounded-md text-[12px] border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--accent)'}}>OK</span></td>
<td className="px-4 py-3 text-right">
<button className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md border hover:bg-[#101a32] text-xs" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<i className="w-3.5 h-3.5" data-lucide="eye"></i>
                          View
                        </button>
</td>
</tr>
<tr className="hover:bg-[#0b1220]">
<td className="px-4 py-3 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="activity" style={{color: 'var(--accent-2)'}}></i>
                        auth.token.verify
                      </td>
<td className="px-4 py-3">edge-us-east</td>
<td className="px-4 py-3">41 ms</td>
<td className="px-4 py-3"><span className="px-2 py-1 rounded-md text-[12px] border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--accent)'}}>OK</span></td>
<td className="px-4 py-3 text-right">
<button className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md border hover:bg-[#101a32] text-xs" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<i className="w-3.5 h-3.5" data-lucide="eye"></i>
                          View
                        </button>
</td>
</tr>
<tr className="hover:bg-[#0b1220]">
<td className="px-4 py-3 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="activity" style={{color: 'var(--accent-2)'}}></i>
                        pipeline.transform
                      </td>
<td className="px-4 py-3">edge-eu-de</td>
<td className="px-4 py-3">58 ms</td>
<td className="px-4 py-3"><span className="px-2 py-1 rounded-md text-[12px] border bg-[#0b1220]" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--accent-3)'}}>DEGRADED</span></td>
<td className="px-4 py-3 text-right">
<button className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md border hover:bg-[#101a32] text-xs" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<i className="w-3.5 h-3.5" data-lucide="eye"></i>
                          View
                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-4">
<div className="rounded-lg border p-4" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<h4 className="text-[15px] font-semibold tracking-tight">API Keys</h4>
<div className="mt-3 rounded-md border p-3" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<div className="flex items-center justify-between">
<code className="text-xs" style={{color: '#cde9ff', fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo'}}>
                      nx_live_7b4e...4f2
                    </code>
<button className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md border hover:bg-[#101a32] text-xs" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
                      Copy
                    </button>
</div>
</div>
</div>
<div className="rounded-lg border p-4" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<h4 className="text-[15px] font-semibold tracking-tight">Env</h4>
<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
<div className="rounded-md border p-2" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<div className="text-[11px]" style={{color: 'var(--subtle)'}}>Region</div>
<div className="font-medium">eu-central</div>
</div>
<div className="rounded-md border p-2" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<div className="text-[11px]" style={{color: 'var(--subtle)'}}>Tier</div>
<div className="font-medium">growth</div>
</div>
</div>
</div>
<div className="rounded-lg border p-4" style={{borderColor: 'var(--border)', backgroundColor: 'var(--panel)'}}>
<h4 className="text-[15px] font-semibold tracking-tight">Webhooks</h4>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between rounded-md border p-2" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="radio" style={{color: 'var(--accent-2)'}}></i>
<span className="text-sm">delivery.success</span>
</div>
<span className="text-xs px-2 py-1 rounded-md border" style={{borderColor: 'var(--border)'}}>Active</span>
</div>
<div className="flex items-center justify-between rounded-md border p-2" style={{borderColor: 'var(--border)', backgroundColor: 'var(--bg)'}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="radio" style={{color: 'var(--accent-3)'}}></i>
<span className="text-sm">delivery.retry</span>
</div>
<span className="text-xs px-2 py-1 rounded-md border" style={{borderColor: 'var(--border)'}}>Active</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
