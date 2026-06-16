import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with consistent stroke width
      lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
      });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Copy email interaction
      const copyBtn = document.getElementById('copyEmail');
      const copyStatus = document.getElementById('copyStatus');
      if (copyBtn && copyStatus) {
        copyBtn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText('alex.rivera@example.com');
            copyStatus.textContent = 'Email copied to clipboard';
            setTimeout(() => (copyStatus.textContent = ''), 2500);
          } catch (e) {
            copyStatus.textContent = 'Unable to copy. Please copy manually.';
            setTimeout(() => (copyStatus.textContent = ''), 2500);
          }
        });
      }

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(60% 60% at 50% 50%, #3B82F6 0%, rgba(59,130,246,0.05) 60%, transparent 80%)'}}></div>
<div className="absolute -bottom-32 -right-24 h-[560px] w-[560px] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(60% 60% at 50% 50%, #22D3EE 0%, rgba(34,211,238,0.06) 60%, transparent 80%)'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_20%)]"></div>
</div>

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-6">
<div className="mt-4 flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/[0.04] border border-white/10">
<a className="flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-white/10 grid place-items-center tracking-tight text-sm font-semibold">AR</div>
<span className="hidden sm:block text-sm text-white/70">Alex Rivera</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#about">About</a>
<a className="text-white/70 hover:text-white transition-colors" href="#projects">Projects</a>
<a className="text-white/70 hover:text-white transition-colors" href="#skills">Skills</a>
<a className="text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 hover:border-white/20 transition-colors" href="#contact">
<i className="h-4 w-4" data-lucide="send"></i>
<span>Say hello</span>
</a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 hover:border-white/20 transition-colors" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="md:hidden mx-auto max-w-7xl px-6 hidden" id="mobileMenu">
<div className="mt-3 rounded-xl bg-white/[0.03] backdrop-blur border border-white/10 p-3">
<div className="grid gap-1 text-sm">
<a className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition" href="#projects">Projects</a>
<a className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition" href="#skills">Skills</a>
<a className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition" href="#contact">Contact</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
<div className="grid lg:grid-cols-2 items-center gap-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              Available for new opportunities
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Building thoughtful products for the web
            </h1>
<p className="text-base sm:text-lg text-white/70 max-w-2xl">
              I’m a product-focused software engineer who crafts performant interfaces and resilient systems. I care about clean design, accessible UX, and shipping value quickly.
            </p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors" href="#projects">
<i className="h-4 w-4" data-lucide="rocket"></i>
                View Projects
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm hover:border-white/20 hover:bg-white/10 transition-colors" href="#contact">
<i className="h-4 w-4" data-lucide="mail"></i>
                Contact
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm hover:border-white/20 hover:bg-white/5 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="download"></i>
                Resume
              </a>
</div>
<div className="flex items-center gap-5 pt-2 text-white/60">
<span className="text-xs uppercase tracking-widest">Featured In</span>
<div className="flex items-center gap-5">
<span className="text-sm tracking-tight">AR Labs</span>
<span className="h-3 w-px bg-white/10"></span>
<span className="text-sm tracking-tight">NextWave</span>
<span className="h-3 w-px bg-white/10"></span>
<span className="text-sm tracking-tight">Crafted.dev</span>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
<img alt="Workspace" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2 text-white/70">
<i className="h-4 w-4" data-lucide="code-2"></i>
<span className="text-xs">Frontend</span>
</div>
<p className="mt-1 text-sm font-medium">TypeScript, React</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2 text-white/70">
<i className="h-4 w-4" data-lucide="server"></i>
<span className="text-xs">Backend</span>
</div>
<p className="mt-1 text-sm font-medium">Node, Go</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2 text-white/70">
<i className="h-4 w-4" data-lucide="gauge"></i>
<span className="text-xs">Perf</span>
</div>
<p className="mt-1 text-sm font-medium">A11y, Lighthouse</p>
</div>
</div>
</div>
<div className="mt-10"></div>
</div>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
<div className="grid lg:grid-cols-3 gap-10">
<div className="lg:col-span-1">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2">
<img alt="Portrait" className="h-full w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:col-span-2">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About me</h2>
<p className="mt-4 text-white/70 leading-7">
              I’m Alex, a software engineer with a background in product design. Over the past 6+ years, I’ve shipped web apps for startups and enterprises—owning features end-to-end from discovery to deployment.
              I love turning complex problems into elegant, fast interfaces and reliable services.
            </p>
<p className="mt-4 text-white/70 leading-7">
              Outside of work, you’ll find me sketching interface ideas, contributing to open-source, and exploring specialty coffee.
            </p>
<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-sm text-white/60">Experience</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">6+ yrs</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-sm text-white/60">Projects shipped</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">40+</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-sm text-white/60">Open-source</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">12 repos</div>
</div>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-white/20 hover:bg-white/10 transition-colors" href="#projects">
<i className="h-4 w-4" data-lucide="folder-open"></i>
                Explore work
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm hover:border-white/20 hover:bg-white/5 transition-colors" href="#contact">
<i className="h-4 w-4" data-lucide="chat"></i>
                Let’s collaborate
              </a>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative" id="projects">
<div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Projects</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors" href="#">
<span>View all</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] outline outline-1 outline-white/5 hover:outline-white/10 transition-all" href="#">
<div className="relative">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Collaboration App" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> SaaS
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Nova Collab</h3>
<p className="text-sm text-white/70">Real-time whiteboard with multiplayer cursors and presence.</p>
</div>
</div>
<div className="p-4 flex items-center justify-between text-xs text-white/60">
<div className="flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 px-2 py-1">TypeScript</span>
<span className="rounded-md bg-white/5 px-2 py-1">WebSockets</span>
<span className="rounded-md bg-white/5 px-2 py-1">Postgres</span>
</div>
<div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="h-4 w-4" data-lucide="github"></i>
<i className="h-4 w-4" data-lucide="external-link"></i>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] outline outline-1 outline-white/5 hover:outline-white/10 transition-all" href="#">
<div className="relative">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Analytics Dashboard" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80">
<i className="h-3.5 w-3.5" data-lucide="activity"></i> Dashboard
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Pulse Metrics</h3>
<p className="text-sm text-white/70">Self-serve analytics with shareable insights and alerts.</p>
</div>
</div>
<div className="p-4 flex items-center justify-between text-xs text-white/60">
<div className="flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 px-2 py-1">Next.js</span>
<span className="rounded-md bg-white/5 px-2 py-1">Edge</span>
<span className="rounded-md bg-white/5 px-2 py-1">ClickHouse</span>
</div>
<div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="h-4 w-4" data-lucide="github"></i>
<i className="h-4 w-4" data-lucide="external-link"></i>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] outline outline-1 outline-white/5 hover:outline-white/10 transition-all" href="#">
<div className="relative">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Dev Tools" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80">
<i className="h-3.5 w-3.5" data-lucide="wrench"></i> DevTools
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Wind Forge</h3>
<p className="text-sm text-white/70">CLI to scaffold projects with opinionated best practices.</p>
</div>
</div>
<div className="p-4 flex items-center justify-between text-xs text-white/60">
<div className="flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 px-2 py-1">Node</span>
<span className="rounded-md bg-white/5 px-2 py-1">CLI</span>
<span className="rounded-md bg-white/5 px-2 py-1">DX</span>
</div>
<div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="h-4 w-4" data-lucide="github"></i>
<i className="h-4 w-4" data-lucide="external-link"></i>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] outline outline-1 outline-white/5 hover:outline-white/10 transition-all" href="#">
<div className="relative">
<div className="aspect-[16/10] overflow-hidden">
<img alt="E-commerce" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80">
<i className="h-3.5 w-3.5" data-lucide="bag"></i> Commerce
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Lumen Shop</h3>
<p className="text-sm text-white/70">Headless storefront with dynamic product personalization.</p>
</div>
</div>
<div className="p-4 flex items-center justify-between text-xs text-white/60">
<div className="flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 px-2 py-1">Headless</span>
<span className="rounded-md bg-white/5 px-2 py-1">Stripe</span>
<span className="rounded-md bg-white/5 px-2 py-1">Edge</span>
</div>
<div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="h-4 w-4" data-lucide="github"></i>
<i className="h-4 w-4" data-lucide="external-link"></i>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] outline outline-1 outline-white/5 hover:outline-white/10 transition-all" href="#">
<div className="relative">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Automation" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80">
<i className="h-3.5 w-3.5" data-lucide="workflow"></i> Automation
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Orbit Flow</h3>
<p className="text-sm text-white/70">Visual builder for event-driven workflows and cron jobs.</p>
</div>
</div>
<div className="p-4 flex items-center justify-between text-xs text-white/60">
<div className="flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 px-2 py-1">Queue</span>
<span className="rounded-md bg-white/5 px-2 py-1">Redis</span>
<span className="rounded-md bg-white/5 px-2 py-1">Workers</span>
</div>
<div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="h-4 w-4" data-lucide="github"></i>
<i className="h-4 w-4" data-lucide="external-link"></i>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] outline outline-1 outline-white/5 hover:outline-white/10 transition-all" href="#">
<div className="relative">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Creative portfolio" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80">
<i className="h-3.5 w-3.5" data-lucide="palette"></i> Creative
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Canvas Kit</h3>
<p className="text-sm text-white/70">Portfolio system with CMS and blazing-fast image pipeline.</p>
</div>
</div>
<div className="p-4 flex items-center justify-between text-xs text-white/60">
<div className="flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 px-2 py-1">Images</span>
<span className="rounded-md bg-white/5 px-2 py-1">CMS</span>
<span className="rounded-md bg-white/5 px-2 py-1">SSR</span>
</div>
<div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="h-4 w-4" data-lucide="github"></i>
<i className="h-4 w-4" data-lucide="external-link"></i>
</div>
</div>
</a>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative" id="skills">
<div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Skills</h2>
<p className="mt-3 text-white/70 max-w-2xl">Tools and technologies I use regularly to ship reliable, accessible, and performant experiences.</p>
<div className="mt-8 grid gap-6 md:grid-cols-2">

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-2 text-white/80">
<i className="h-5 w-5" data-lucide="code-2"></i>
<h3 className="text-lg font-semibold tracking-tight">Frontend</h3>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">TypeScript</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">React</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">CSS</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Accessibility</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Testing</span>
</div>
<div className="mt-5 grid gap-3">
<div>
<div className="flex items-center justify-between text-xs text-white/60">
<span>TypeScript</span><span>Advanced</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[88%] rounded-full bg-white/70"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs text-white/60">
<span>React</span><span>Advanced</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[85%] rounded-full bg-white/70"></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-2 text-white/80">
<i className="h-5 w-5" data-lucide="server"></i>
<h3 className="text-lg font-semibold tracking-tight">Backend</h3>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Node</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Go</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">PostgreSQL</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">REST/GraphQL</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Auth</span>
</div>
<div className="mt-5 grid gap-3">
<div>
<div className="flex items-center justify-between text-xs text-white/60">
<span>Node</span><span>Advanced</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[82%] rounded-full bg-white/70"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs text-white/60">
<span>PostgreSQL</span><span>Advanced</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[78%] rounded-full bg-white/70"></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-2 text-white/80">
<i className="h-5 w-5" data-lucide="cpu"></i>
<h3 className="text-lg font-semibold tracking-tight">Infrastructure</h3>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Docker</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">CI/CD</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Cloud</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Observability</span>
</div>
<div className="mt-5 grid gap-3">
<div>
<div className="flex items-center justify-between text-xs text-white/60">
<span>CI/CD</span><span>Advanced</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[80%] rounded-full bg-white/70"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs text-white/60">
<span>Monitoring</span><span>Proficient</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[72%] rounded-full bg-white/70"></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-2 text-white/80">
<i className="h-5 w-5" data-lucide="sparkles"></i>
<h3 className="text-lg font-semibold tracking-tight">Product &amp; Design</h3>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">UX</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Prototyping</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Design Systems</span>
<span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-sm">Writing</span>
</div>
<div className="mt-5 grid gap-3">
<div>
<div className="flex items-center justify-between text-xs text-white/60">
<span>Design Systems</span><span>Advanced</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[76%] rounded-full bg-white/70"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs text-white/60">
<span>Prototyping</span><span>Proficient</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[70%] rounded-full bg-white/70"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/50 text-sm">
<span className="tracking-tight">TS</span>
<span className="tracking-tight">React</span>
<span className="tracking-tight">Node</span>
<span className="tracking-tight">Go</span>
<span className="tracking-tight">Postgres</span>
<span className="tracking-tight">Docker</span>
<span className="tracking-tight">Redis</span>
<span className="tracking-tight">Stripe</span>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative" id="contact">
<div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-1">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s connect</h2>
<p className="mt-3 text-white/70">
              Have a project in mind or just want to say hi? Reach out and I’ll get back to you soon.
            </p>
<div className="mt-6 grid gap-3">
<button className="group inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm hover:bg-white/10 hover:border-white/20 transition-colors w-full text-left" id="copyEmail">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="mail"></i>
                  alex.rivera@example.com
                </span>
<span className="inline-flex items-center gap-2 text-white/70 group-hover:text-white">
<i className="h-4 w-4" data-lucide="copy"></i>
                  Copy
                </span>
</button>
<a className="inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm hover:bg-white/10 hover:border-white/20 transition-colors" href="https://github.com/" target="_blank">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="github"></i>
                  GitHub
                </span>
<i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
<a className="inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm hover:bg-white/10 hover:border-white/20 transition-colors" href="https://www.linkedin.com/" target="_blank">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="linkedin"></i>
                  LinkedIn
                </span>
<i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="lg:col-span-2">
<form className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-white/70 mb-1">Name</label>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm text-white/70 mb-1">Email</label>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20" placeholder="you@example.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-white/70 mb-1">Subject</label>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20" placeholder="How can I help?" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-white/70 mb-1">Message</label>
<textarea className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20" placeholder="Write your message..." rows="5"></textarea>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-sm text-white/60" id="copyStatus"></p>
<button className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
                  Send message
                </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="relative">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<div className="flex items-center gap-3 text-sm text-white/60">
<div className="h-7 w-7 rounded-md bg-white/10 grid place-items-center tracking-tight text-xs font-semibold">AR</div>
<span>© <span id="year"></span> Alex Rivera. All rights reserved.</span>
</div>
<div className="flex items-center gap-4 text-white/60">
<a aria-label="Twitter" className="p-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
<a aria-label="GitHub" className="p-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition" href="#">
<i className="h-4 w-4" data-lucide="github"></i>
</a>
<a aria-label="Mail" className="p-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
