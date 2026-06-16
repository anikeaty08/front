import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Utilities
      const $ = (s, r = document) => r.querySelector(s);
      const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

      // Year
      $('#year').textContent = new Date().getFullYear();

      // Theme handling
      const root = document.documentElement;
      const themeToggle = $('#themeToggle');
      const thumb = $('#thumb');
      function applyTheme(theme) {
        if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
        localStorage.setItem('theme', theme);
        const isDark = theme === 'dark';
        thumb.style.transform = isDark ? 'translateX(28px)' : 'translateX(0)';
      }
      const savedTheme = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      applyTheme(savedTheme);
      themeToggle?.addEventListener('click', () => {
        applyTheme(root.classList.contains('dark') ? 'light' : 'dark');
      });

      // Routing
      const routes = $$('.route');
      function showRoute(id) {
        routes.forEach(sec => sec.classList.add('hidden'));
        const el = document.getElementById(id);
        el?.classList.remove('hidden');
        // Update active nav style
        $$('.nav-link').forEach(b => b.classList.remove('bg-white/10', 'text-white'));
        $$(`[data-route="${id}"]`).forEach(b => b.classList.add('bg-white/10', 'text-white'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      $$('[data-route]').forEach(btn => {
        btn.addEventListener('click', () => showRoute(btn.dataset.route));
      });
      // Default route
      showRoute('home');

      // Content Generator: tabs
      const tabButtons = $$('.tab-btn');
      const tabTemplates = $('#tab-templates');
      const tabCreator = $('#tab-creator');
      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          tabButtons.forEach(b => {
            b.classList.remove('active', 'text-white/90');
            b.classList.add('text-neutral-300');
          });
          btn.classList.add('active', 'text-white/90');
          btn.classList.remove('text-neutral-300');
          const isTemplates = btn.dataset.tab === 'templates';
          tabTemplates.classList.toggle('hidden', !isTemplates);
          tabCreator.classList.toggle('hidden', isTemplates);
        });
      });

      // Tone select
      const toneSelect = $('#tone-select');
      const toneMenu = $('#tone-menu');
      const toneLabel = toneSelect?.querySelector('[data-selected-tone]');
      toneSelect?.addEventListener('click', () => toneMenu.classList.toggle('hidden'));
      toneMenu?.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-tone]');
        if (!btn) return;
        toneLabel.textContent = btn.dataset.tone;
        toneMenu.classList.add('hidden');
      });
      document.addEventListener('click', (e) => {
        if (!toneSelect.contains(e.target)) toneMenu?.classList.add('hidden');
      });

      // Duration label
      const cgDuration = $('#cg-duration');
      const durationLabel = $('#duration-label');
      cgDuration?.addEventListener('input', () => {
        durationLabel.textContent = `${cgDuration.value}s`;
      });

      // Avatar select
      $$('.avatar-btn').forEach((btn, i, arr) => {
        btn.addEventListener('click', () => {
          arr.forEach(b => b.setAttribute('data-active', 'false'));
          btn.setAttribute('data-active', 'true');
        });
      });

      // Generate preview (mock)
      const genBtn = $('#cg-generate');
      const previewWrap = $('#preview');
      const previewSkeleton = $('#preview-skeleton');
      const previewScript = $('#preview-script');
      const topicInput = $('#cg-topic');
      const briefInput = $('#cg-brief');
      const previewImg = $('#preview-img');
      genBtn?.addEventListener('click', () => {
        previewWrap.classList.add('hidden');
        previewSkeleton.classList.remove('hidden');
        const tone = toneLabel?.textContent || 'Friendly';
        const dur = cgDuration?.value || '30';
        setTimeout(() => {
          const topic = topicInput?.value?.trim() || 'Your product';
          const brief = briefInput?.value?.trim() || 'Boost productivity with AI-powered tools.';
          previewScript.textContent = `Hook: ${topic} in ${dur} seconds. 
Why it matters: ${brief}
CTA: Try AsapFeed today.`;
          // Pick active avatar image
          const activeAvatar = document.querySelector('.avatar-btn[data-active="true"] img') || document.querySelector('.avatar-btn img');
          if (activeAvatar) previewImg.src = activeAvatar.src;
          previewSkeleton.classList.add('hidden');
          previewWrap.classList.remove('hidden');
        }, 800);
      });

      // Features: Chart.js
      const engagementCanvas = $('#engagementChart');
      if (engagementCanvas) {
        const ctx = engagementCanvas.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
              label: 'Engagement',
              data: [12, 19, 15, 22, 30, 28, 33],
              borderColor: 'rgba(217, 70, 239, 0.9)',
              backgroundColor: 'rgba(217, 70, 239, 0.2)',
              tension: 0.35,
              fill: true,
              pointRadius: 2
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)', font: { size: 10 } } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)', font: { size: 10 } } }
            }
          }
        });
      }

      // Ad Factory interactions
      const aspectBtns = $$('.aspect-btn');
      const adStage = $('#adStage');
      const adGrid = $('#adGrid');
      const gridToggle = $('#gridToggle');
      const resetAd = $('#resetAd');
      const adHeadline = $('#adHeadline');
      const adSub = $('#adSub');
      const adCTA = $('#adCTA');
      const adBadge = $('#adBadge');
      const adBgGradient = $('#adBgGradient');
      const adDurationRange = $('#adDurationRange');
      const adDurationLabel = $('#adDurationLabel');
      const adDurationText = $('#adDuration');

      $('#inputHeadline')?.addEventListener('input', e => adHeadline.textContent = e.target.value || ' ');
      $('#inputSub')?.addEventListener('input', e => adSub.textContent = e.target.value || ' ');
      $('#inputCTA')?.addEventListener('input', e => adCTA.firstChild.nodeValue = (e.target.value || ' ').trim() + ' ');
      $('#inputBadge')?.addEventListener('input', e => adBadge.textContent = e.target.value || ' ');

      function updateGradient() {
        const from = $('#colorFrom').value;
        const to = $('#colorTo').value;
        adBgGradient.style.backgroundImage = `linear-gradient(135deg, ${from}66, ${to}4D)`;
      }
      $('#colorFrom')?.addEventListener('input', updateGradient);
      $('#colorTo')?.addEventListener('input', updateGradient);
      updateGradient();

      aspectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          aspectBtns.forEach(b => b.classList.remove('bg-white/10','text-white/90'));
          btn.classList.add('bg-white/10','text-white/90');
          const val = btn.dataset.aspect;
          adStage.classList.remove('aspect-[9/16]','aspect-[1/1]','aspect-[16/9]');
          if (val === '9/16') adStage.classList.add('aspect-[9/16]');
          if (val === '1/1') adStage.classList.add('aspect-[1/1]');
          if (val === '16/9') adStage.classList.add('aspect-[16/9]');
        });
      });

      gridToggle?.addEventListener('click', () => {
        const on = adGrid.classList.toggle('hidden');
        gridToggle.setAttribute('aria-pressed', on ? 'false' : 'true');
      });

      adDurationRange?.addEventListener('input', () => {
        const val = parseInt(adDurationRange.value, 10);
        adDurationLabel.textContent = `${val}s`;
        const m = Math.floor(val / 60);
        const s = val % 60;
        adDurationText.textContent = `${m}:${String(s).padStart(2,'0')}`;
      });

      resetAd?.addEventListener('click', () => {
        $('#inputHeadline').value = 'Create ads that convert';
        $('#inputSub').value = 'AsapFeed helps you ideate, produce, and ship winning creatives in minutes.';
        $('#inputCTA').value = 'Get Started';
        $('#inputBadge').value = 'NEW';
        $('#colorFrom').value = '#a855f7';
        $('#colorTo').value = '#6366f1';
        adDurationRange.value = 30;
        adDurationRange.dispatchEvent(new Event('input'));
        updateGradient();
        $('#imageUrl').value = '';
        $('#adImage').src = 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop';
        // Re-apply text
        adHeadline.textContent = 'Create ads that convert';
        adSub.textContent = 'AsapFeed helps you ideate, produce, and ship winning creatives in minutes.';
        adCTA.firstChild.nodeValue = 'Get Started ';
        adBadge.textContent = 'NEW';
      });

      // Apply image
      $('#applyImage')?.addEventListener('click', () => {
        const url = $('#imageUrl').value.trim();
        if (!url) return;
        const img = new Image();
        img.onload = () => { $('#adImage').src = url; };
        img.onerror = () => { alert('Could not load image. Please check the URL.'); };
        img.src = url;
      });

      // Export PNG via html-to-image
      $('#exportAd')?.addEventListener('click', async () => {
        const stage = $('#adStage');
        try {
          const dataUrl = await window.htmlToImage.toPng(stage, { pixelRatio: 2, backgroundColor: getComputedStyle(document.body).backgroundColor });
          const link = document.createElement('a');
          link.download = 'asapfeed-ad.png';
          link.href = dataUrl;
          link.click();
        } catch (e) {
          console.error(e);
          alert('Export failed. Please try again.');
        }
      });

      // Simple enter animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-safe:animate-[fadeInUp_600ms_ease-out_forwards]');
          }
        });
      }, { threshold: 0.2 });
      $$('[data-animate]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(6px)';
        observer.observe(el);
      });

      // Inject simple keyframes for fadeInUp
      const style = document.createElement('style');
      style.textContent = '@keyframes fadeInUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}';
      document.head.appendChild(style);

      // Icons
      lucide?.createIcons?.();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-sky-500/10 blur-3xl" id="blob1"></div>
<div className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/20 via-fuchsia-400/20 to-rose-400/20 blur-3xl" id="blob2"></div>
<div className="absolute left-1/2 bottom-[-15%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-500/20 via-fuchsia-500/20 to-indigo-400/10 blur-3xl" id="blob3"></div>
</div>

<header className="sticky top-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur-2xl dark:bg-neutral-900/60">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

<div className="flex items-center gap-6">
<button className="group flex items-center gap-2" data-route="home">
<span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/10 transition hover:shadow-fuchsia-500/30">
<span className="absolute inset-0 bg-white/5"></span>
<span className="text-white text-lg font-semibold tracking-tight">A</span>
</span>
<span className="sr-only">AsapFeed</span>
</button>
<nav className="hidden md:flex items-center gap-2 text-sm">
<button className="nav-link rounded-lg px-3 py-2 text-neutral-700 transition hover:bg-neutral-900/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white" data-route="features">Features</button>
<button className="nav-link rounded-lg px-3 py-2 text-neutral-700 transition hover:bg-neutral-900/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white" data-route="content-generator">Content Generator</button>
<button className="nav-link rounded-lg px-3 py-2 text-neutral-700 transition hover:bg-neutral-900/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white" data-route="affiliate">Affiliate</button>
<button className="nav-link rounded-lg px-3 py-2 text-neutral-700 transition hover:bg-neutral-900/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white" data-route="pricing">Pricing</button>
<button className="nav-link rounded-lg px-3 py-2 text-neutral-700 transition hover:bg-neutral-900/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white" data-route="ad-factory">Ad Factory</button>
</nav>
</div>

<div className="flex items-center gap-2">

<button className="group relative inline-flex h-9 w-16 items-center rounded-full border border-white/15 bg-white/50 p-1 backdrop-blur transition hover:border-white/25 dark:bg-neutral-800/60" id="themeToggle">
<span className="sr-only">Toggle theme</span>
<span className="flex w-full items-center justify-between px-1">
<i className="h-4 w-4 text-amber-400" data-lucide="sun"></i>
<i className="h-4 w-4 text-violet-300" data-lucide="moon"></i>
</span>
<span className="absolute left-1 top-1 h-7 w-7 rounded-full bg-white shadow-md shadow-black/10 transition-all dark:bg-neutral-700" id="thumb"></span>
</button>
<a className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-white/10 dark:text-neutral-200" href="#login">Login</a>
<button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold text-white tracking-tight" data-route="pricing">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="absolute inset-0 rounded-xl blur opacity-70 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="relative">Get Started</span>
<i className="relative h-4 w-4" data-lucide="sparkles"></i>
</button>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl px-4 sm:px-6">

<section className="route py-12 sm:py-20" id="home">

<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 sm:p-12">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_80%_-10%,rgba(168,85,247,0.18),transparent),radial-gradient(40rem_30rem_at_20%_120%,rgba(236,72,153,0.12),transparent)]"></div>
<div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5 text-fuchsia-300" data-lucide="zap"></i>
                New: Instant avatar videos from script
              </div>
<h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">AI-powered video creation</h1>
<p className="mt-4 max-w-xl text-neutral-300">Turn ideas into scroll-stopping videos in minutes. Write a script, pick an avatar, and generate platform-ready content with premium quality.</p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<button className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold text-white tracking-tight" data-route="content-generator">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="absolute inset-0 rounded-xl blur opacity-70 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="relative">Start creating</span>
<i className="relative h-4 w-4" data-lucide="wand-2"></i>
</button>
<button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10" data-route="features">Explore features</button>
<button className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white/80 transition hover:text-white">
<i className="h-5 w-5 text-fuchsia-300 transition group-hover:scale-105" data-lucide="play-circle"></i>
                  Watch demo
                </button>
</div>
</div>

<div className="relative">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 shadow-2xl shadow-fuchsia-500/10 ring-1 ring-white/10">
<div className="flex items-center justify-between gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
</div>
<div className="text-xs text-neutral-400">AsapFeed Studio</div>
<div className="flex items-center gap-2 text-neutral-400">
<i className="h-4 w-4" data-lucide="settings"></i>
</div>
</div>
<div className="grid gap-0 p-4 sm:p-6">
<div className="grid grid-cols-3 gap-4">
<div className="col-span-2 overflow-hidden rounded-xl">
<img alt="Avatar sample" className="h-56 w-full object-cover transition duration-500 ease-out hover:scale-105" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-xs uppercase tracking-tight text-neutral-400">Script</div>
<p className="mt-1 line-clamp-3 text-sm text-neutral-200">Meet Nova, your AI host. In this video, we’ll turn raw ideas into a ready-to-post vertical video. Let’s begin.</p>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
<span className="text-sm text-neutral-300">1080x1920 • 30s</span>
<button className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/20">
<i className="h-3.5 w-3.5" data-lucide="play"></i>
                          Preview
                        </button>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-neutral-300">Auto captions</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-neutral-300">Brand kit</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-neutral-300">Export presets</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Video examples</h2>
<p className="mt-2 text-neutral-300">Explore what creators are making with AsapFeed.</p>
<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="relative">
<img alt="3D render" className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-xs text-white backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="video"></i> Product Promo
                </div>
</div>
</div>
<div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="relative">
<img alt="Render UI" className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-xs text-white backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="component"></i> App Walkthrough
                </div>
</div>
</div>
<div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="relative">
<img alt="Mountains" className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-xs text-white backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="podcast"></i> Podcast Clip
                </div>
</div>
</div>
<div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="relative">
<img alt="Minimal face" className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-xs text-white backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="mic"></i> Talking Head
                </div>
</div>
</div>
<div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="relative">
<img alt="Minimal render" className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-xs text-white backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> UGC Style
                </div>
</div>
</div>
<div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="relative">
<img alt="City minimal" className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-xs text-white backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="megaphone"></i> Ad Creative
                </div>
</div>
</div>
</div>
</div>

<div className="mt-20">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">How it works</h2>
<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition hover:scale-[1.01] hover:shadow-lg hover:shadow-fuchsia-500/10" data-animate="">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-purple-500/30 ring-1 ring-white/15">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="file-text"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Script Writing</h3>
<p className="mt-1 text-sm text-neutral-300">Describe your idea or paste a brief. The AI suggests hooks, structure, and captions.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition hover:scale-[1.01] hover:shadow-lg hover:shadow-fuchsia-500/10" data-animate="">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-purple-500/30 ring-1 ring-white/15">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="user-square"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Avatar Selection</h3>
<p className="mt-1 text-sm text-neutral-300">Choose realistic avatars with multilingual voices and your brand styling.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition hover:scale-[1.01] hover:shadow-lg hover:shadow-fuchsia-500/10" data-animate="">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-purple-500/30 ring-1 ring-white/15">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="clapperboard"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Video Generation</h3>
<p className="mt-1 text-sm text-neutral-300">Render platform-ready videos with subtitles, aspect ratios, and exports.</p>
</div>
</div>
</div>

<div className="mt-20">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Everything you need</h2>
<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="feature-card rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="file-text"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">AI Script Generation</h3>
<p className="mt-1 text-sm text-neutral-300">From hooks to CTAs with tone control and auto chapters.</p>
</div>
<div className="feature-card rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="user"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">AI Avatar Videos</h3>
<p className="mt-1 text-sm text-neutral-300">Photo-real avatars and voice cloning in 40+ languages.</p>
</div>
<div className="feature-card rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="users"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Team Collaboration</h3>
<p className="mt-1 text-sm text-neutral-300">Shared libraries, comments, and approvals.</p>
</div>
<div className="feature-card rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="share-2"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Multi-Platform Export</h3>
<p className="mt-1 text-sm text-neutral-300">One click to Shorts, Reels, TikTok, and more.</p>
</div>
<div className="feature-card rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="chart-line"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Performance Analytics</h3>
<p className="mt-1 text-sm text-neutral-300">Track retention, CTR, and conversions.</p>
</div>
<div className="feature-card rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="shield-check"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Enterprise Security</h3>
<p className="mt-1 text-sm text-neutral-300">SSO, audit logs, and data residency controls.</p>
</div>
</div>
</div>
</section>

<section className="route hidden py-12 sm:py-16" id="content-generator">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Content Generator</h2>
<p className="mt-2 text-neutral-300">Generate scripts and avatar videos with a streamlined workflow.</p>
</div>
</div>

<div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-2">
<div className="flex gap-2">
<button className="tab-btn active relative flex-1 rounded-xl px-4 py-2 text-sm font-medium text-white/90 transition" data-tab="templates">
<span className="absolute inset-0 -z-10 rounded-xl bg-white/[0.06] ring-1 ring-white/10"></span>
              Templates
            </button>
<button className="tab-btn relative flex-1 rounded-xl px-4 py-2 text-sm font-medium text-neutral-300 transition hover:text-white" data-tab="creator">
              Content Creator
            </button>
</div>

<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" id="tab-templates">
<button className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 text-left transition hover:scale-[1.01]">
<img alt="Product" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-white">Product Promo</h3>
<p className="mt-1 text-sm text-neutral-300">30s vertical with punchy CTA.</p>
</div>
</button>
<button className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 text-left transition hover:scale-[1.01]">
<img alt="Tutorial" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-white">How‑To Tutorial</h3>
<p className="mt-1 text-sm text-neutral-300">Step-by-step with captions.</p>
</div>
</button>
<button className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 text-left transition hover:scale-[1.01]">
<img alt="Podcast" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-white">Podcast Clip</h3>
<p className="mt-1 text-sm text-neutral-300">Speaker crop + waveform.</p>
</div>
</button>
</div>

<div className="mt-6 hidden" id="tab-creator">
<div className="grid gap-6 lg:grid-cols-2">

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="space-y-4">
<div>
<label className="text-sm text-neutral-300">Topic</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus:border-fuchsia-400/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" id="cg-topic" placeholder="e.g. Launching a new feature for creators" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-300">Tone</label>
<button className="mt-1 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-left text-sm text-white" id="tone-select">
<span data-selected-tone="">Friendly</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="mt-2 hidden overflow-hidden rounded-xl border border-white/10 bg-neutral-900" id="tone-menu">
<button className="block w-full px-3 py-2 text-left text-sm hover:bg-white/5" data-tone="Friendly">Friendly</button>
<button className="block w-full px-3 py-2 text-left text-sm hover:bg-white/5" data-tone="Professional">Professional</button>
<button className="block w-full px-3 py-2 text-left text-sm hover:bg-white/5" data-tone="Energetic">Energetic</button>
<button className="block w-full px-3 py-2 text-left text-sm hover:bg-white/5" data-tone="Educational">Educational</button>
</div>
</div>
<div>
<label className="text-sm text-neutral-300">Duration</label>
<div className="mt-1 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2">
<input className="h-2 w-full appearance-none rounded-full bg-white/10 accent-fuchsia-500" id="cg-duration" max="60" min="10" type="range" value="30"/>
<span className="text-sm text-white/90" id="duration-label">30s</span>
</div>
</div>
</div>
<div>
<label className="text-sm text-neutral-300">Avatar</label>
<div className="mt-2 grid grid-cols-3 gap-3">
<button className="avatar-btn group overflow-hidden rounded-xl ring-1 ring-inset ring-white/10 data-[active=true]:ring-fuchsia-400/50">
<img alt="Avatar 1" className="h-20 w-full object-cover transition group-data-[active=true]:ring-2" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop" />
</img></button>
<button className="avatar-btn group overflow-hidden rounded-xl ring-1 ring-inset ring-white/10">
<img alt="Avatar 2" className="h-20 w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=800&amp;auto=format&amp;fit=crop" />
</img></button>
<button className="avatar-btn group overflow-hidden rounded-xl ring-1 ring-inset ring-white/10">
<img alt="Avatar 3" className="h-20 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" />
</img></button>
</div>
</div>
<div>
<label className="text-sm text-neutral-300">Brief</label>
<textarea className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus:border-fuchsia-400/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" id="cg-brief" placeholder="Describe your product, audience, and CTA…" rows="4"></textarea>
</div>
</div>
<div className="mt-5 flex gap-3">
<button className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold text-white" id="cg-generate">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="absolute inset-0 rounded-xl blur opacity-70 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="relative">Generate</span>
<i className="relative h-4 w-4" data-lucide="wand-2"></i>
</button>
<button className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm">Clear</button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold tracking-tight text-white">Preview</h3>
<p className="mt-1 text-sm text-neutral-300">Your generated script and avatar video will appear here.</p>
<div className="mt-4 hidden" id="preview">
<div className="grid gap-4 lg:grid-cols-2">
<div className="overflow-hidden rounded-xl border border-white/10">
<img alt="Preview avatar" className="h-56 w-full object-cover" id="preview-img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-xs uppercase tracking-tight text-neutral-400">Script</div>
<p className="mt-2 text-sm text-neutral-200" id="preview-script"></p>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20">
<i className="h-3.5 w-3.5" data-lucide="play"></i> Play
                        </button>
<button className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20">
<i className="h-3.5 w-3.5" data-lucide="download"></i> Export
                        </button>
</div>
</div>
</div>
</div>
<div className="mt-4 grid animate-pulse gap-4 lg:grid-cols-2 hidden" id="preview-skeleton">
<div className="h-56 rounded-xl bg-white/5"></div>
<div className="space-y-2">
<div className="h-4 w-1/3 rounded bg-white/10"></div>
<div className="h-3 w-5/6 rounded bg-white/10"></div>
<div className="h-3 w-4/6 rounded bg-white/10"></div>
<div className="h-8 w-40 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="route hidden py-12 sm:py-16" id="features">
<div className="text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5 text-fuchsia-300" data-lucide="stars"></i> Powerful &amp; Private
          </span>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Create, collaborate, and ship videos faster</h2>
<p className="mt-2 text-neutral-300">A premium toolchain built for modern marketing teams.</p>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="file-text"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">AI Script Generation</h3>
<p className="mt-1 text-sm text-neutral-300">On-brand copy, sectioning, and CTAs.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="user"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">AI Avatar Videos</h3>
<p className="mt-1 text-sm text-neutral-300">High-fidelity avatars and voice options.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="users"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Team Collaboration</h3>
<p className="mt-1 text-sm text-neutral-300">Comments, mentions, and roles.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="share-2"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Multi-Platform Export</h3>
<p className="mt-1 text-sm text-neutral-300">Presets for every network.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="shield"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Enterprise Security</h3>
<p className="mt-1 text-sm text-neutral-300">SSO, SCIM, and audit trails.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="chart-line"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Performance Analytics</h3>
<p className="mt-1 text-sm text-neutral-300">Engagement over time</p>
<div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-neutral-900 p-3">
<div>
<canvas height="120" id="engagementChart"></canvas>
</div>
</div>
</div>
</div>

<div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-indigo-500/20 p-8 text-center">
<h3 className="text-2xl font-semibold tracking-tight text-white">Ready to supercharge your content?</h3>
<p className="mt-2 text-neutral-200">Start free and upgrade as you grow.</p>
<button className="mt-6 relative inline-flex items-center gap-2 overflow-hidden rounded-2xl px-6 py-3 text-sm font-semibold text-white" data-route="pricing">
<span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="absolute inset-0 rounded-2xl blur opacity-70 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="relative">Get Started</span>
<i className="relative h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="route hidden py-12 sm:py-16" id="pricing">
<div className="text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple pricing</h2>
<p className="mt-2 text-neutral-300">Choose a plan that scales with your team.</p>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:scale-[1.01] hover:shadow-2xl hover:shadow-fuchsia-500/10">
<h3 className="text-lg font-semibold tracking-tight text-white">Starter</h3>
<p className="mt-1 text-sm text-neutral-300">For individuals getting started.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$19</span>
<span className="text-sm text-neutral-400">/mo</span>
</div>
<ul className="mt-6 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> 10 avatar videos/month</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Basic templates</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Standard export</li>
</ul>
<button className="mt-6 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">Start Free</button>
</div>

<div className="group relative rounded-3xl border border-fuchsia-400/30 bg-gradient-to-b from-white/5 to-white/10 p-6 ring-1 ring-fuchsia-400/30 transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-fuchsia-500/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/20 px-3 py-1 text-xs text-white">Most Popular</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white">Professional</h3>
<p className="mt-1 text-sm text-neutral-200">For growing teams.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$79</span>
<span className="text-sm text-neutral-300">/mo</span>
</div>
<ul className="mt-6 space-y-2 text-sm text-neutral-200">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> 100 avatar videos/month</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Brand kit &amp; captions</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Priority rendering</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Analytics</li>
</ul>
<button className="relative mt-6 w-full overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold text-white">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="absolute inset-0 rounded-xl blur opacity-70 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="relative">Get Started</span>
</button>
</div>

<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:scale-[1.01] hover:shadow-2xl hover:shadow-fuchsia-500/10">
<h3 className="text-lg font-semibold tracking-tight text-white">Enterprise</h3>
<p className="mt-1 text-sm text-neutral-300">Advanced security and needs.</p>
<div className="mt-6 text-4xl font-semibold tracking-tight text-white">Custom</div>
<ul className="mt-6 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Unlimited rendering</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> SSO/SCIM &amp; audit logs</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Dedicated support</li>
</ul>
<button className="mt-6 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">Contact Sales</button>
</div>
</div>

<div className="mt-16">
<h3 className="text-2xl font-semibold tracking-tight text-white">FAQ</h3>
<div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-white">
                How does the free trial work?
                <i className="h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Try all features with limited rendering minutes. No credit card required.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-white">
                Can I cancel anytime?
                <i className="h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Yes, cancel or switch plans anytime from your dashboard.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-white">
                Do you support teams?
                <i className="h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Invite teammates, assign roles, and manage permissions.</p>
</details>
</div>
</div>
</section>

<section className="route hidden py-12 sm:py-16" id="affiliate">
<div className="text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5 text-fuchsia-300" data-lucide="handshake"></i> Partner Program
          </span>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Earn by promoting AsapFeed</h2>
<p className="mt-2 text-neutral-300">Share with your audience and earn recurring commissions.</p>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
<i className="mx-auto h-6 w-6 text-fuchsia-300" data-lucide="percent"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">30% Commission</h3>
<p className="mt-1 text-sm text-neutral-300">On every paid subscription.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
<i className="mx-auto h-6 w-6 text-fuchsia-300" data-lucide="trending-up"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Performance Bonuses</h3>
<p className="mt-1 text-sm text-neutral-300">Boosts for top partners.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
<i className="mx-auto h-6 w-6 text-fuchsia-300" data-lucide="infinity"></i>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Lifetime Value</h3>
<p className="mt-1 text-sm text-neutral-300">Recurring payouts as long as referrals stay.</p>
</div>
</div>
<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="rocket"></i>
<h4 className="mt-2 font-medium tracking-tight text-white">High Converting</h4>
<p className="mt-1 text-sm text-neutral-300">Polished flows and top-performing pages.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="sparkles"></i>
<h4 className="mt-2 font-medium tracking-tight text-white">Easy to Promote</h4>
<p className="mt-1 text-sm text-neutral-300">Ready-made assets and swipe copy.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="badge-check"></i>
<h4 className="mt-2 font-medium tracking-tight text-white">Regular Promotions</h4>
<p className="mt-1 text-sm text-neutral-300">Seasonal deals to boost conversions.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="line-chart"></i>
<h4 className="mt-2 font-medium tracking-tight text-white">Growing Market</h4>
<p className="mt-1 text-sm text-neutral-300">Rising demand for AI video creation.</p>
</div>
</div>

<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-purple-500/30 ring-1 ring-white/15">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="user-plus"></i>
</div>
<h4 className="mt-3 font-medium tracking-tight text-white">1. Sign Up</h4>
<p className="mt-1 text-sm text-neutral-300">Apply and get your unique link.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-purple-500/30 ring-1 ring-white/15">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="share"></i>
</div>
<h4 className="mt-3 font-medium tracking-tight text-white">2. Promote</h4>
<p className="mt-1 text-sm text-neutral-300">Share content and track clicks.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-purple-500/30 ring-1 ring-white/15">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="wallet"></i>
</div>
<h4 className="mt-3 font-medium tracking-tight text-white">3. Earn</h4>
<p className="mt-1 text-sm text-neutral-300">Receive monthly payouts.</p>
</div>
</div>

<div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-indigo-500/20 p-8 text-center">
<h3 className="text-2xl font-semibold tracking-tight text-white">Join the Affiliate Program</h3>
<p className="mt-2 text-neutral-100">It’s free and takes less than 2 minutes.</p>
<button className="mt-6 relative inline-flex items-center gap-2 overflow-hidden rounded-2xl px-6 py-3 text-sm font-semibold text-white">
<span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="absolute inset-0 rounded-2xl blur opacity-70 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="relative">Join Affiliate Program</span>
<i className="relative h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="route hidden py-12 sm:py-16" id="ad-factory">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ad Factory</h2>
<p className="mt-2 text-neutral-300">Design, iterate, and export winning ad creatives.</p>
</div>
</div>
<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[320px,1fr]">

<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="search"></i>
<input className="w-full bg-transparent text-sm text-white placeholder:text-neutral-400 focus:outline-none" placeholder="Search templates"/>
</div>
<div className="mt-4 space-y-3">
<button className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left hover:bg-white/10">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-purple-500/30"></div>
<div>
<div className="text-sm font-medium text-white">UGC Hook</div>
<div className="text-xs text-neutral-400">9:16 • 15–30s</div>
</div>
</button>
<button className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left hover:bg-white/10">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500/30 to-purple-500/30"></div>
<div>
<div className="text-sm font-medium text-white">Comparison Ad</div>
<div className="text-xs text-neutral-400">1:1 • 30–45s                </div>
</div></button>
<button className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left hover:bg-white/10">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500/30 to-rose-500/30"></div>
<div>
<div className="text-sm font-medium text-white">Testimonial</div>
<div className="text-xs text-neutral-400">4:5 • 20–30s</div>
</div>
</button>
<button className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left hover:bg-white/10">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500/30 to-teal-500/30"></div>
<div>
<div className="text-sm font-medium text-white">Benefit List</div>
<div className="text-xs text-neutral-400">9:16 • 20–25s</div>
</div>
</button>
<button className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left hover:bg-white/10">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500/30 to-orange-500/30"></div>
<div>
<div className="text-sm font-medium text-white">Before / After</div>
<div className="text-xs text-neutral-400">16:9 • 20–30s</div>
</div>
</button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-4">

<div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/10 p-2">
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">Aspect</span>
<div className="inline-flex overflow-hidden rounded-lg border border-white/10">
<button className="aspect-btn bg-white/10 px-3 py-1.5 text-xs text-white/90" data-aspect="9/16">9:16</button>
<button className="aspect-btn px-3 py-1.5 text-xs text-neutral-300 hover:bg-white/10" data-aspect="1/1">1:1</button>
<button className="aspect-btn px-3 py-1.5 text-xs text-neutral-300 hover:bg-white/10" data-aspect="16/9">16:9</button>
</div>
</div>
<div className="flex items-center gap-2">
<button aria-pressed="false" className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-neutral-200 hover:bg-white/20" id="gridToggle">
<i className="h-3.5 w-3.5" data-lucide="grid"></i> Grid
                </button>
<button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-neutral-200 hover:bg-white/20" id="resetAd">
<i className="h-3.5 w-3.5" data-lucide="rotate-ccw"></i> Reset
                </button>
<button className="relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-3 py-1.5 text-xs font-semibold text-white" id="exportAd">
<span className="absolute inset-0 rounded-lg bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="absolute inset-0 rounded-lg blur opacity-70 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></span>
<span className="relative flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="download"></i> Export PNG
                  </span>
</button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[1fr,320px]">

<div className="overflow-auto rounded-2xl border border-white/10 bg-neutral-950/60 p-4">
<div className="relative mx-auto aspect-[9/16] w-full max-w-[720px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/5" id="adStage">

<div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-600/40 via-purple-600/30 to-indigo-600/30 mix-blend-screen" id="adBgGradient"></div>
<div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" id="adGrid"></div>

<div className="absolute left-4 right-4 top-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[10px] text-white/90 backdrop-blur">
<i className="h-3 w-3 text-fuchsia-300" data-lucide="sparkles"></i>
<span id="adBadge">NEW</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[10px] text-white/80 backdrop-blur">
<i className="h-3 w-3" data-lucide="clock"></i> <span id="adDuration">0:30</span>
</span>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
<h3 className="max-w-[92%] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl" id="adHeadline">Create ads that convert</h3>
<p className="mt-3 max-w-[88%] text-sm text-neutral-200 sm:text-base" id="adSub">AsapFeed helps you ideate, produce, and ship winning creatives in minutes.</p>
<button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-white" id="adCTA">
                      Get Started
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="pointer-events-none absolute -bottom-10 right-4 h-40 w-40 rotate-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/40 to-indigo-500/40 blur-2xl"></div>
<div className="absolute bottom-8 left-1/2 h-32 w-32 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:h-40 sm:w-40">
<img alt="Ad visual" className="h-full w-full rounded-2xl object-cover" id="adImage" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4">
<div>
<label className="text-xs text-neutral-300" htmlFor="inputHeadline">Headline</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus:border-fuchsia-400/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" id="inputHeadline" type="text" value="Create ads that convert"/>
</div>
<div>
<label className="text-xs text-neutral-300" htmlFor="inputSub">Subheadline</label>
<textarea className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus:border-fuchsia-400/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" id="inputSub" rows="2">AsapFeed helps you ideate, produce, and ship winning creatives in minutes.</textarea>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-xs text-neutral-300" htmlFor="inputCTA">CTA Label</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white focus:border-fuchsia-400/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" id="inputCTA" type="text" value="Get Started"/>
</div>
<div>
<label className="text-xs text-neutral-300" htmlFor="inputBadge">Badge</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white focus:border-fuchsia-400/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" id="inputBadge" type="text" value="NEW"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-xs text-neutral-300">Gradient From</label>
<input className="mt-1 h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-white/10 p-1" id="colorFrom" type="color" value="#a855f7"/>
</div>
<div>
<label className="text-xs text-neutral-300">Gradient To</label>
<input className="mt-1 h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-white/10 p-1" id="colorTo" type="color" value="#6366f1"/>
</div>
</div>
<div>
<label className="text-xs text-neutral-300">Duration</label>
<div className="mt-1 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2">
<input className="h-2 w-full appearance-none rounded-full bg-white/10 accent-fuchsia-500" id="adDurationRange" max="60" min="5" type="range" value="30"/>
<span className="text-sm text-white/90" id="adDurationLabel">30s</span>
</div>
</div>
<div>
<label className="text-xs text-neutral-300">Image URL</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus:border-fuchsia-400/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" id="imageUrl" placeholder="https://…" type="url"/>
<button className="mt-2 inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-neutral-200 hover:bg-white/20" id="applyImage">
<i className="h-3.5 w-3.5" data-lucide="image"></i> Apply Image
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-16 border-t border-white/10">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
<div className="flex items-center gap-3">
<span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 ring-1 ring-white/10">
<span className="absolute inset-0 bg-white/10"></span>
<span className="text-white text-lg font-semibold tracking-tight">A</span>
</span>
<span className="text-sm text-neutral-400">© <span id="year"></span> AsapFeed, Inc.</span>
</div>
<nav className="flex flex-wrap items-center gap-3 text-sm">
<a className="rounded-lg px-2 py-1 text-neutral-300 hover:text-white" href="#">Privacy</a>
<a className="rounded-lg px-2 py-1 text-neutral-300 hover:text-white" href="#">Terms</a>
<a className="rounded-lg px-2 py-1 text-neutral-300 hover:text-white" href="#">Status</a>
<a className="rounded-lg px-2 py-1 text-neutral-300 hover:text-white" href="#">Contact</a>
</nav>
</div>
</footer>






    </>
  );
}
