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



      // Lucide icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: {
            'stroke-width': 1.5,
            class: 'w-5 h-5 text-zinc-300'
          }
        });
      });

      // Chart.js Radar
      const ctx = document.getElementById('skills-radar');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['MongoDB', 'Express', 'React', 'Node', 'TypeScript', 'Testing'],
            datasets: [{
              label: 'Proficiency',
              data: [85, 80, 90, 88, 82, 75],
              borderColor: 'rgba(167, 139, 250, 0.9)',
              backgroundColor: 'rgba(167, 139, 250, 0.20)',
              pointBackgroundColor: 'rgba(199, 210, 254, 0.9)',
              pointBorderColor: 'rgba(255,255,255,0.4)',
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }
            },
            scales: {
              r: {
                angleLines: { color: 'rgba(255,255,255,0.08)' },
                grid: { color: 'rgba(255,255,255,0.08)' },
                pointLabels: { color: 'rgba(228,228,231,1)', font: { size: 11, family: 'Inter' } },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: { display: false }
              }
            }
          }
        });
      }

      // Copy email
      const btn = document.getElementById('copy-email');
      if (btn) {
        btn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText('you@domain.dev');
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>Copied</span>`;
            setTimeout(() => {
              btn.innerHTML = `<i data-lucide="copy"></i><span>Copy</span>`;
              lucide.createIcons({ attrs: { 'stroke-width': 1.5, class: 'w-4 h-4 text-zinc-300' } });
            }, 1500);
          } catch (e) {
            alert('Unable to copy. Please copy manually.');
          }
        });
      }

      // Footer year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-3 group" href="#">
<div className="h-8 w-8 grid place-content-center rounded-md bg-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition">
<span className="text-sm font-semibold tracking-tight">MS</span>
</div>
<span className="text-sm sm:text-base font-medium tracking-tight text-white/90">MERN Developer</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-300 hover:text-white transition" href="#about">About</a>
<a className="text-sm text-zinc-300 hover:text-white transition" href="#skills">Skills</a>
<a className="text-sm text-zinc-300 hover:text-white transition" href="#projects">Projects</a>
<a className="text-sm text-zinc-300 hover:text-white transition" href="#experience">Experience</a>
<a className="text-sm text-zinc-300 hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a aria-label="GitHub" className="p-2 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="https://github.com/" rel="noreferrer" target="_blank">
<i data-lucide="github"></i>
</a>
<a aria-label="LinkedIn" className="p-2 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition" href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
<i data-lucide="linkedin"></i>
</a>
<a className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/10 hover:ring-white/20 transition" href="#contact">
<i data-lucide="mail"></i>
<span className="text-sm font-medium">Get in touch</span>
</a>
</div>
</div>
</header>

<section className="relative">
<div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-zinc-300">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Open to full-time &amp; freelance
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              MERN Stack Developer crafting fast, clean, scalable products
            </h1>
<p className="mt-4 text-zinc-400 text-base leading-relaxed">
              I build production-ready apps with MongoDB, Express, React, and Node. I love type-safe APIs, clean architecture, and crisp DX.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-violet-500/90 hover:bg-violet-500 text-white ring-1 ring-violet-400/30 hover:ring-violet-300/40 transition" href="#projects">
<i data-lucide="kanban"></i>
<span className="text-sm font-medium">View Projects</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition" href="/resume.pdf">
<i data-lucide="download"></i>
<span className="text-sm font-medium">Download Resume</span>
</a>
</div>
<div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-4">
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-2xl font-semibold tracking-tight">20+</div>
<div className="text-xs text-zinc-400 mt-1">Projects shipped</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-2xl font-semibold tracking-tight">3.5y</div>
<div className="text-xs text-zinc-400 mt-1">Experience</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-2xl font-semibold tracking-tight">99.9%</div>
<div className="text-xs text-zinc-400 mt-1">Uptime delivered</div>
</div>
</div>
</div>
<div className="lg:pl-8">
<div className="rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5">
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
<i data-lucide="terminal"></i>
<span className="font-medium">Sample stack snippet</span>
</div>
<pre className="text-[12.5px] leading-6 font-normal rounded-lg bg-black/60 ring-1 ring-white/10 p-4 overflow-auto" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
const api = new Router()
  .get('/projects', async (req, res) =&gt; {
    const projects = await db.collection('projects').find({}).toArray()
    res.json(projects)
  })
  .post('/contact', async (req, res) =&gt; {
    await mailer.send({ to: 'you@domain.dev', ...req.body })
    res.status(201).json({ ok: true })
  })
export default api
              </pre>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-3 flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="database"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">MongoDB</div>
<div className="text-xs text-zinc-400">Atlas • Aggregations</div>
</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-3 flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="server"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Express</div>
<div className="text-xs text-zinc-400">REST • Middleware</div>
</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-3 flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="atom"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">React</div>
<div className="text-xs text-zinc-400">Hooks • SSR</div>
</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-3 flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="cpu"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Node.js</div>
<div className="text-xs text-zinc-400">Streams • Workers</div>
</div>
</div>
</div>
<div className="mt-5 rounded-lg ring-1 ring-white/10 bg-black/60 p-4">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium tracking-tight">Skill profile</div>
<div className="text-xs text-zinc-400">Self-assessed</div>
</div>
<div className="h-56 relative">
<div className="absolute inset-0">
<div className="h-full">
<div className="w-full h-full">
<div className="w-full h-full">
<div className="w-full h-full">
<div className="w-full h-full">
<div className="w-full h-full">
<div className="w-full h-full">
<div className="w-full h-full">
<div className="w-full h-full">
<div className="w-full h-full">

<div className="w-full h-full">
<canvas id="skills-radar"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<div className="grid lg:grid-cols-3 gap-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">About</h2>
<p className="mt-3 text-zinc-400 text-base">A bit of context and philosophy.</p>
</div>
<div className="lg:col-span-2">
<div className="grid sm:grid-cols-2 gap-6">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="code-2"></i>
</div>
<div className="font-medium tracking-tight">Product-minded engineering</div>
</div>
<p className="mt-3 text-sm text-zinc-400">
                  I ship fast without compromising code quality. I care about DX, maintainability, and tight feedback loops.
                </p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="globe"></i>
</div>
<div className="font-medium tracking-tight">End-to-end ownership</div>
</div>
<p className="mt-3 text-sm text-zinc-400">
                  From schema to CI/CD, I own the stack. I prioritize observability, performance budgets, and clean APIs.
                </p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="shield-check"></i>
</div>
<div className="font-medium tracking-tight">Quality &amp; tests</div>
</div>
<p className="mt-3 text-sm text-zinc-400">
                  I add pragmatic tests where it matters and automate checks to keep main green and releases boring.
                </p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="gauge"></i>
</div>
<div className="font-medium tracking-tight">Performance-first</div>
</div>
<p className="mt-3 text-sm text-zinc-400">
                  Measure, then optimize. I watch Core Web Vitals, server timings, and query plans to keep things fast.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="skills">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Skills</h2>
<p className="mt-3 text-zinc-400 text-base">Core stack and tools I use daily.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
<i data-lucide="sparkles"></i>
<span>Actively learning: tRPC, Next.js App Router, Prisma</span>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="database"></i>
</div>
<div className="font-medium tracking-tight">MongoDB</div>
</div>
<p className="text-sm text-zinc-400 mt-2">Schema design, aggregations, indexing, transactions</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="server"></i>
</div>
<div className="font-medium tracking-tight">Express.js</div>
</div>
<p className="text-sm text-zinc-400 mt-2">REST APIs, auth, rate limiting, validation</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="atom"></i>
</div>
<div className="font-medium tracking-tight">React</div>
</div>
<p className="text-sm text-zinc-400 mt-2">Hooks, state, server components, routing</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-content-center rounded-md bg-black/60 ring-1 ring-white/10">
<i data-lucide="cpu"></i>
</div>
<div className="font-medium tracking-tight">Node.js</div>
</div>
<p className="text-sm text-zinc-400 mt-2">Streams, workers, CLI tools, performance</p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10">TypeScript</span>
<span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10">Zod</span>
<span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10">Prisma</span>
<span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10">Docker</span>
<span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10">Redis</span>
<span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10">Jest</span>
<span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10">Playwright</span>
<span className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10">AWS</span>
</div>
</div>
</section>

<section className="border-t border-white/10" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Projects</h2>
<p className="mt-3 text-zinc-400 text-base">Selected work across SaaS, dashboards, and APIs.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition" href="https://github.com/" rel="noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="external-link"></i>
            See more
          </a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="aspect-video overflow-hidden">
<img alt="Project cover" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-white">Realtime Analytics Dashboard</h3>
<div className="flex items-center gap-1">
<span className="text-[10px] px-1.5 py-1 rounded bg-white/5 ring-1 ring-white/10">MERN</span>
</div>
</div>
<p className="mt-2 text-sm text-zinc-400">
                Stream processing with websockets, charting, and role-based access.
              </p>
<div className="mt-3 flex items-center gap-2">
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
                  Code
                </a>
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-violet-500/20 ring-1 ring-violet-400/30 text-violet-200 hover:bg-violet-500/25 hover:ring-violet-300/40 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link"></i>
                  Live
                </a>
</div>
</div>
</article>
<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="aspect-video overflow-hidden">
<img alt="Project cover" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-white">E‑commerce Platform</h3>
<div className="flex items-center gap-1">
<span className="text-[10px] px-1.5 py-1 rounded bg-white/5 ring-1 ring-white/10">Stripe</span>
<span className="text-[10px] px-1.5 py-1 rounded bg-white/5 ring-1 ring-white/10">Mongo</span>
</div>
</div>
<p className="mt-2 text-sm text-zinc-400">
                Catalog, checkout, webhooks, and admin dashboard with RBAC.
              </p>
<div className="mt-3 flex items-center gap-2">
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
                  Code
                </a>
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-violet-500/20 ring-1 ring-violet-400/30 text-violet-200 hover:bg-violet-500/25 hover:ring-violet-300/40 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link"></i>
                  Live
                </a>
</div>
</div>
</article>
<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="aspect-video overflow-hidden">
<img alt="Project cover" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-white">SaaS Subscription Manager</h3>
<div className="flex items-center gap-1">
<span className="text-[10px] px-1.5 py-1 rounded bg-white/5 ring-1 ring-white/10">SaaS</span>
</div>
</div>
<p className="mt-2 text-sm text-zinc-400">
                Multi-tenant, usage-based billing, audit logs, and team features.
              </p>
<div className="mt-3 flex items-center gap-2">
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
                  Code
                </a>
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-violet-500/20 ring-1 ring-violet-400/30 text-violet-200 hover:bg-violet-500/25 hover:ring-violet-300/40 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link"></i>
                  Live
                </a>
</div>
</div>
</article>
<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="aspect-video overflow-hidden">
<img alt="Project cover" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-white">Developer CLI</h3>
<div className="flex items-center gap-1">
<span className="text-[10px] px-1.5 py-1 rounded bg-white/5 ring-1 ring-white/10">Node</span>
</div>
</div>
<p className="mt-2 text-sm text-zinc-400">
                Scaffolding, DX utilities, and codegen for monorepos.
              </p>
<div className="mt-3 flex items-center gap-2">
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
                  Code
                </a>
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-violet-500/20 ring-1 ring-violet-400/30 text-violet-200 hover:bg-violet-500/25 hover:ring-violet-300/40 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link"></i>
                  Live
                </a>
</div>
</div>
</article>
<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="aspect-video overflow-hidden">
<img alt="Project cover" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-white">Issue Tracker</h3>
<div className="flex items-center gap-1">
<span className="text-[10px] px-1.5 py-1 rounded bg-white/5 ring-1 ring-white/10">React</span>
</div>
</div>
<p className="mt-2 text-sm text-zinc-400">
                Kanban boards, filters, and SLA reporting with exports.
              </p>
<div className="mt-3 flex items-center gap-2">
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
                  Code
                </a>
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-violet-500/20 ring-1 ring-violet-400/30 text-violet-200 hover:bg-violet-500/25 hover:ring-violet-300/40 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link"></i>
                  Live
                </a>
</div>
</div>
</article>
<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="aspect-video overflow-hidden">
<img alt="Project cover" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight text-white">API Gateway</h3>
<div className="flex items-center gap-1">
<span className="text-[10px] px-1.5 py-1 rounded bg-white/5 ring-1 ring-white/10">Node</span>
</div>
</div>
<p className="mt-2 text-sm text-zinc-400">
                Rate limiting, caching, observability, and request shaping.
              </p>
<div className="mt-3 flex items-center gap-2">
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
                  Code
                </a>
<a className="text-xs inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-violet-500/20 ring-1 ring-violet-400/30 text-violet-200 hover:bg-violet-500/25 hover:ring-violet-300/40 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link"></i>
                  Live
                </a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-white/10" id="experience">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Experience</h2>
<div className="mt-8 grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<ol className="relative border-s border-white/10">
<li className="ms-6 pb-8">
<span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/90 ring-2 ring-[#0b0b0f]"></span>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between gap-2">
<div className="font-medium tracking-tight">Senior Fullstack Engineer • Acme Inc</div>
<div className="text-xs text-zinc-400">2023 — Present</div>
</div>
<p className="mt-1 text-sm text-zinc-400">
                    Led a team to deliver a real-time analytics platform used by 50k+ users. Drove architecture, DX, and CI/CD.
                  </p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">React</span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">Node</span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">MongoDB</span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">AWS</span>
</div>
</div>
</li>
<li className="ms-6 pb-8">
<span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/70 ring-2 ring-[#0b0b0f]"></span>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between gap-2">
<div className="font-medium tracking-tight">Fullstack Engineer • Startup Co</div>
<div className="text-xs text-zinc-400">2021 — 2023</div>
</div>
<p className="mt-1 text-sm text-zinc-400">
                    Built e-commerce infra, optimized query plans, and improved TTI by 35%.
                  </p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">Express</span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">Redis</span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">Stripe</span>
</div>
</div>
</li>
<li className="ms-6">
<span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/50 ring-2 ring-[#0b0b0f]"></span>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between gap-2">
<div className="font-medium tracking-tight">Frontend Developer • Freelance</div>
<div className="text-xs text-zinc-400">2019 — 2021</div>
</div>
<p className="mt-1 text-sm text-zinc-400">
                    Delivered accessible, high-performing UIs and component libraries for SMBs.
                  </p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">React</span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">Next.js</span>
<span className="text-[10px] px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">Jest</span>
</div>
</div>
</li>
</ol>
</div>
<aside className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-4 h-fit">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight mb-3">
<i data-lucide="folder-kanban"></i>
              Recent highlights
            </div>
<ul className="space-y-3">
<li className="text-sm text-zinc-300 flex items-start gap-2">
<i className="mt-0.5" data-lucide="star"></i>
                Cut cold start time by 60% using connection pooling, lazy imports, and build profiling.
              </li>
<li className="text-sm text-zinc-300 flex items-start gap-2">
<i className="mt-0.5" data-lucide="star"></i>
                Introduced end-to-end tests and CI previews; reduced regressions by 40%.
              </li>
<li className="text-sm text-zinc-300 flex items-start gap-2">
<i className="mt-0.5" data-lucide="star"></i>
                Migrated to typed APIs with Zod + TS improving DX and refactor safety.
              </li>
</ul>
</aside>
</div>
</div>
</section>

<section className="border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Let’s build something great</h2>
<p className="mt-3 text-zinc-400 text-base">
              I’m available for full-time roles and select freelance projects. Tell me about your idea or team.
            </p>
<div className="mt-6 rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-4">
<div className="text-sm text-zinc-300">Prefer email?</div>
<div className="mt-2 flex items-center gap-2">
<code className="text-sm px-2.5 py-1.5 rounded-md bg-black/60 ring-1 ring-white/10" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas'}}>
                  you@domain.dev
                </code>
<button className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition" id="copy-email">
<i data-lucide="copy"></i>
                  Copy
                </button>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition" href="https://github.com/" rel="noreferrer" target="_blank">
<i data-lucide="github"></i>
<span className="text-sm">GitHub</span>
</a>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition" href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
<i data-lucide="linkedin"></i>
<span className="text-sm">LinkedIn</span>
</a>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-violet-500/20 hover:bg-violet-500/25 ring-1 ring-violet-400/30 hover:ring-violet-300/40 text-violet-200 transition" href="/resume.pdf">
<i data-lucide="download"></i>
<span className="text-sm">Resume</span>
</a>
</div>
</div>
<form action="https://formspree.io/f/yourid" className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-5 space-y-4" method="POST">
<div>
<label className="block text-sm text-zinc-300 mb-1">Name</label>
<input className="w-full text-sm bg-black/60 rounded-md px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-violet-500/50 outline-none placeholder:text-zinc-500 transition" name="name" placeholder="Your name" required=""/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-zinc-300 mb-1">Email</label>
<input className="w-full text-sm bg-black/60 rounded-md px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-violet-500/50 outline-none placeholder:text-zinc-500 transition" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm text-zinc-300 mb-1">Budget</label>
<input className="w-full text-sm bg-black/60 rounded-md px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-violet-500/50 outline-none placeholder:text-zinc-500 transition" name="budget" placeholder="$5k – $20k"/>
</div>
</div>
<div>
<label className="block text-sm text-zinc-300 mb-1">Message</label>
<textarea className="w-full text-sm bg-black/60 rounded-md px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-violet-500/50 outline-none placeholder:text-zinc-500 transition" name="message" placeholder="What are you building?" required="" rows="5"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-violet-500/90 hover:bg-violet-500 text-white ring-1 ring-violet-400/30 hover:ring-violet-300/40 transition" type="submit">
<i data-lucide="send"></i>
<span className="text-sm font-medium">Send message</span>
</button>
<p className="text-[11px] text-zinc-500">
              By submitting, you agree to be contacted about your project. I typically respond within 24 hours.
            </p>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-sm text-zinc-400">
          © <span id="year"></span> Your Name. All rights reserved.
        </div>
<div className="flex items-center gap-4 text-sm">
<a className="text-zinc-400 hover:text-white transition" href="#about">About</a>
<a className="text-zinc-400 hover:text-white transition" href="#projects">Projects</a>
<a className="text-zinc-400 hover:text-white transition" href="#contact">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
