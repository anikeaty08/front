import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Basic helpers
      const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
      const $ = (sel, ctx=document) => ctx.querySelector(sel);

      // Screen router
      function showScreen(name) {
        $$('section[data-screen]').forEach(s => s.classList.remove('active'));
        const target = $(`section[data-screen="${name}"]`);
        if (target) target.classList.add('active');

        // Update header tabs aria-current
        $$('nav[aria-label="Primary"] [data-screen-trigger]').forEach(btn => {
          btn.setAttribute('aria-current', btn.dataset.screenTrigger === name ? 'true' : 'false');
          btn.classList.toggle('aria-[current=true]:bg-black/5', btn.dataset.screenTrigger === name);
        });

        // Hide any open menus/modals
        $('#filterMenu')?.classList.add('hidden');
        $('#swapModal')?.classList.add('hidden');
        $('#swapModal')?.classList.remove('flex');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        lucide.createIcons();
      }

      // Init default screen
      document.addEventListener('DOMContentLoaded', () => {
        // Activate Home by default
        showScreen('home');

        // Wire screen triggers
        $$('[data-screen-trigger]').forEach(btn => {
          btn.addEventListener('click', () => showScreen(btn.dataset.screenTrigger));
        });

        // Theme toggle
        const themeBtn = $('#themeToggle');
        const root = document.documentElement;
        const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && preferredDark)) {
          root.classList.add('dark');
        }
        themeBtn?.addEventListener('click', () => {
          root.classList.toggle('dark');
          localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
          const icon = themeBtn.querySelector('i');
          if (icon) icon.setAttribute('data-lucide', root.classList.contains('dark') ? 'sun' : 'moon');
          lucide.createIcons();
        });

        // Builder tabs
        $$('[data-builder-tab]').forEach(tab => {
          tab.addEventListener('click', () => {
            const target = tab.dataset.builderTab;
            $$('[data-builder-tab]').forEach(t => {
              t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
              t.classList.toggle('text-[#5F6368]', t !== tab);
              t.classList.toggle('dark:text-[#AEB3B9]', t !== tab);
              t.classList.toggle('border-b-2', t === tab);
              t.classList.toggle('border-[#3A7DFF]', t === tab);
            });
            $$('[data-builder-panel]').forEach(panel => {
              panel.classList.toggle('hidden', panel.getAttribute('data-builder-panel') !== target);
            });
          });
        });

        // Storage toggle
        $$('[data-storage]').forEach(btn => {
          btn.addEventListener('click', () => {
            const group = btn.parentElement;
            $$('[data-storage]', group).forEach(sib => {
              const isActive = sib === btn;
              sib.setAttribute('aria-checked', String(isActive));
              sib.classList.toggle('bg-[#3A7DFF]', isActive);
              sib.classList.toggle('text-white', isActive);
              sib.classList.toggle('hover:bg-black/5', !isActive);
              sib.classList.toggle('dark:hover:bg-white/10', !isActive);
            });
          });
        });

        // Pushback toggle
        const pushToggle = $('#pushbackToggle');
        pushToggle?.addEventListener('click', () => {
          const checked = pushToggle.getAttribute('aria-checked') === 'true';
          pushToggle.setAttribute('aria-checked', String(!checked));
          pushToggle.classList.toggle('bg-[#4CAF50]', !checked);
          pushToggle.classList.toggle('bg-black/20', checked);
          const knob = pushToggle.querySelector('span.inline-block');
          if (knob) {
            knob.classList.toggle('translate-x-6', !checked);
            knob.classList.toggle('translate-x-1', checked);
          }
        });

        // Live: filter menu
        const filterBtn = $('#filterBtn');
        const filterMenu = $('#filterMenu');
        filterBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          filterMenu?.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
          if (filterMenu && !filterMenu.contains(e.target) && !filterBtn.contains(e.target)) {
            filterMenu.classList.add('hidden');
          }
        });

        // Live: split view toggle
        const splitBtn = $('#splitToggle');
        const wrap = $('#transcriptWrap');
        const col2 = $('#splitCol2');
        splitBtn?.addEventListener('click', () => {
          const isSplit = !col2.classList.contains('hidden');
          col2.classList.toggle('hidden', isSplit);
          wrap.classList.toggle('lg:grid-cols-2', !isSplit);
          wrap.classList.toggle('lg:grid-cols-1', isSplit);
        });

        // Swap modal
        const swapOpen = $('#personaSwapOpen');
        const swapOpen2 = $('#personaSwapOpen2');
        const swapModal = $('#swapModal');
        const swapClose = $('#swapClose');
        const swapCancel = $('#swapCancel');

        function openSwap() {
          swapModal.classList.remove('hidden');
          swapModal.classList.add('flex');
          swapModal.querySelector('input,button')?.focus();
        }
        function closeSwap() {
          swapModal.classList.add('hidden');
          swapModal.classList.remove('flex');
        }
        swapOpen?.addEventListener('click', openSwap);
        swapOpen2?.addEventListener('click', openSwap);
        swapClose?.addEventListener('click', closeSwap);
        swapCancel?.addEventListener('click', closeSwap);
        swapModal?.addEventListener('click', (e) => {
          if (e.target === swapModal) closeSwap();
        });
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            closeSwap();
            filterMenu?.classList.add('hidden');
          }
        });

        // Footer year
        $('#year').textContent = new Date().getFullYear();

        // Icons
        lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex min-h-screen flex-col">

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 dark:bg-[#1B1E23]/80 border-b border-black/5 dark:border-white/10">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">

<div className="flex items-center gap-3">
<button aria-label="Toggle sidebar" className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3A7DFF]">
<svg className="lucide lucide-grip w-5 h-5" data-lucide="grip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="1"></circle><circle cx="19" cy="5" r="1"></circle><circle cx="5" cy="5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="19" cy="19" r="1"></circle><circle cx="5" cy="19" r="1"></circle></svg>
</button>
<div className="flex items-center gap-2">
<div aria-label="Logo" className="h-7 w-7 rounded-md bg-[#3A7DFF] text-white flex items-center justify-center text-sm tracking-tight font-medium">VP</div>
<div className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Voice Panel</div>
</div>

<nav aria-label="Primary" className="hidden md:flex items-center gap-1 ml-2">
<button aria-current="true" className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 aria-[current=true]:bg-black/5 dark:aria-[current=true]:bg-white/10" data-screen-trigger="home">Home</button>
<button aria-current="false" className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10" data-screen-trigger="builder">Expert Builder</button>
<button aria-current="false" className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10" data-screen-trigger="create">Create Session</button>
<button aria-current="false" className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10" data-screen-trigger="live">Live Session</button>
<button aria-current="false" className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10" data-screen-trigger="audit">Audit</button>
<button aria-current="false" className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10" data-screen-trigger="resume">Resume</button>
</nav>
</div>

<div className="flex items-center gap-2">

<div className="hidden md:flex items-center gap-2" id="toolbar-area">

</div>

<button aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3A7DFF]" id="themeToggle" title="Toggle light/dark">
<svg className="lucide lucide-moon w-5 h-5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>

<button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20">
<div className="h-6 w-6 rounded-md bg-[#2A2E35] dark:bg-[#2A2E35] text-white flex items-center justify-center text-[10px] tracking-tight">HN</div>
<span className="text-sm">Host</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">

<section className="space-y-6 active" data-screen="home">

<div className="flex items-center justify-between">
<div className="">
<h1 className="text-[24px] leading-7 tracking-tight font-semibold">Welcome back</h1>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-1">Start a session or build your advisory board.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20">
<svg className="lucide lucide-settings w-4 h-4 mr-1.5 inline" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  Preferences
                </button>
<button className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]" data-screen-trigger="create">
<svg className="lucide lucide-play w-4 h-4 mr-2 inline" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                  Start Session
                </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

<div className="space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-[18px] leading-6 tracking-tight font-medium">Recent Sessions</h2>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20">
<svg className="lucide lucide-filter w-4 h-4 mr-1.5 inline" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                      Filter
                    </button>
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20">
<svg className="lucide lucide-sort-desc w-4 h-4 mr-1.5 inline" data-lucide="sort-desc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 16 4 4 4-4"></path><path d="M7 20V4"></path><path d="M11 4h10"></path><path d="M11 8h7"></path><path d="M11 12h4"></path></svg>
                      Sort
                    </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">

<article className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4 hover:shadow-sm transition-all cursor-pointer" tabindex="0">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-base font-medium tracking-tight">Pricing strategy review</h3>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-1 line-clamp-2">Explored tiered pricing and freemium impact on LTV/CAC.</p>
<div className="flex items-center gap-2 mt-3">
<div className="flex -space-x-2">
<img alt="Expert avatar" className="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#2A2E35]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="Expert avatar" className="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#2A2E35]" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="Expert avatar" className="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#2A2E35]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">3 experts</span>
</div>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1 text-xs text-[#5F6368] dark:text-[#AEB3B9]">
<svg className="lucide lucide-cloud w-4 h-4" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span>Cloud</span>
</div>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9] mt-1">Updated 2h ago</div>
</div>
</div>
</article>
<article className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4 hover:shadow-sm transition-all cursor-pointer" tabindex="0">
<div className="flex items-start justify-between gap-3">
<div className="">
<h3 className="text-base font-medium tracking-tight">Compliance checklist</h3>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-1 line-clamp-2">SOC2 renewals, data retrofits for EU region.</p>
<div className="flex items-center gap-2 mt-3">
<div className="flex -space-x-2">
<img alt="Expert avatar" className="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#2A2E35]" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="Expert avatar" className="h-7 w-7 rounded-full ring-2 ring-white dark:ring-[#2A2E35]" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">2 experts</span>
</div>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1 text-xs text-[#5F6368] dark:text-[#AEB3B9]">
<svg className="lucide lucide-hard-drive w-4 h-4" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
<span>Local</span>
</div>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9] mt-1">Updated yesterday</div>
</div>
</div>
</article>
</div>
</div>

<div className="space-y-3">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
<button className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4 hover:shadow-sm transition text-left" data-screen-trigger="create">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-[#3A7DFF]/10 text-[#3A7DFF] flex items-center justify-center">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div>
<div className="text-base font-medium tracking-tight">New Session</div>
<div className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Pick experts and start</div>
</div>
</div>
</button>
<button className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4 hover:shadow-sm transition text-left" data-screen-trigger="builder">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-[#FFB020]/10 text-[#FFB020] flex items-center justify-center">
<svg className="lucide lucide-user-plus w-5 h-5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div>
<div className="text-base font-medium tracking-tight">Build Expert</div>
<div className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Real or generated</div>
</div>
</div>
</button>
<button className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4 hover:shadow-sm transition text-left" data-screen-trigger="resume">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-[#2A2E35]/10 text-[#2A2E35] dark:bg-white/10 dark:text-white flex items-center justify-center">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<div className="text-base font-medium tracking-tight">Resume Session</div>
<div className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Pick up where you left off</div>
</div>
</div>
</button>
</div>
<div className="rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-[#2A2E35]">
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="text-base font-medium tracking-tight">Your advisory board, on demand</div>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-1">Mix real-world and generated experts. Capture decisions, risks, and alternatives.</p>
</div>
<div className="aspect-[16/9]">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="md:hidden fixed bottom-3 inset-x-4 z-40">
<div className="rounded-2xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-3 shadow-sm">
<div className="grid grid-cols-3 gap-2">
<button className="col-span-2 px-4 py-3 rounded-xl text-base uppercase font-medium tracking-wide bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]" data-screen-trigger="create">Start Session</button>
<button className="px-4 py-3 rounded-xl text-base uppercase font-medium tracking-wide border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20" data-screen-trigger="builder">Build</button>
</div>
</div>
</div>
</section>

<section className="hidden" data-screen="builder">
<div className="flex items-center justify-between mb-4">
<div>
<h1 className="text-[24px] leading-7 tracking-tight font-semibold">Expert Profile Builder</h1>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-1">Create expert personas with research-backed context.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20">
<svg className="lucide lucide-file-text w-4 h-4 mr-1.5 inline" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                  Import
                </button>
</div>
</div>

<div className="flex items-center gap-2 border-b border-black/5 dark:border-white/10 mb-4" role="tablist">
<button aria-selected="true" className="px-3 py-2 text-sm font-medium rounded-t-lg border-b-2 border-[#3A7DFF]" data-builder-tab="real" role="tab">Real-World</button>
<button aria-selected="false" className="px-3 py-2 text-sm font-medium text-[#5F6368] dark:text-[#AEB3B9]" data-builder-tab="gen" role="tab">Generated</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

<div className="space-y-4" data-builder-panel="real">
<div className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
<label className="text-sm font-medium">Expert Name</label>
<input aria-label="Expert Name" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="e.g., Patty McCord" type="text"/>
</div>
<div>
<label className="text-sm font-medium">Focus (optional)</label>
<input aria-label="Focus" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="e.g., People Ops, Culture" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
<div className="md:col-span-1">
<label className="text-sm font-medium">Upload PDF</label>
<button className="mt-1 w-full px-3 py-2 rounded-lg border border-dashed border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">
<svg className="lucide lucide-upload w-4 h-4 mr-1.5 inline" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                        Choose File
                      </button>
</div>
<div className="md:col-span-2">
<label className="text-sm font-medium">Add URL</label>
<div className="mt-1 flex gap-2">
<input aria-label="Research URL" className="flex-1 rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="https://example.com/profile" type="url"/>
<button className="px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button aria-label="Research Expert" className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]">
<svg className="lucide lucide-search w-4 h-4 mr-2 inline" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                      Research Expert
                    </button>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Use 1–3 sources for a balanced profile</div>
</div>
</div>

<div className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10">
<div className="p-4 border-b border-black/5 dark:border-white/10">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium tracking-tight">Research Results</h3>
<span className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Select relevant sources</span>
</div>
</div>
<div className="p-2">

<label className="flex items-start gap-3 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
<input aria-label="Select source" className="peer sr-only" type="checkbox"/>
<div className="h-5 w-5 rounded-md border border-black/20 dark:border-white/30 flex items-center justify-center peer-checked:bg-[#3A7DFF] peer-checked:border-[#3A7DFF]">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium">HBR: Culture of candor</div>
<div className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-0.5 line-clamp-2">Encourage dissent and data-driven decisions to avoid groupthink.</div>
</div>
<svg className="lucide lucide-external-link w-4 h-4 text-[#5F6368] dark:text-[#AEB3B9]" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
<input aria-label="Select source" className="peer sr-only" type="checkbox"/>
<div className="h-5 w-5 rounded-md border border-black/20 dark:border-white/30 flex items-center justify-center peer-checked:bg-[#3A7DFF] peer-checked:border-[#3A7DFF]">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium">Podcast: Scaling People Ops</div>
<div className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-0.5 line-clamp-2">Frameworks for feedback and accountability in hybrid teams.</div>
</div>
<svg className="lucide lucide-headphones w-4 h-4 text-[#5F6368] dark:text-[#AEB3B9]" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</label>
</div>
</div>
<div className="flex items-center justify-end gap-2">
<button className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20">Cancel</button>
<button className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]">Save</button>
</div>
</div>

<div className="space-y-4" data-builder-panel="real">
<div className="rounded-xl border border-black/5 dark:border-white/10 overflow-hidden">
<div className="p-4 bg-[#F0F2F5] dark:bg-[#2E3238]">
<div className="flex items-center gap-3">
<img alt="Expert avatar" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-base font-medium tracking-tight">Preview: Real-World Expert</div>
<div className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Patterns, principles, risks</div>
</div>
</div>
</div>
<div className="p-4 bg-white dark:bg-[#2A2E35]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Patterns</div>
<ul className="text-sm text-[#5F6368] dark:text-[#AEB3B9] list-disc pl-5 space-y-1">
<li>Bias for candor</li>
<li>Written principles &gt; slogans</li>
</ul>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Principles</div>
<ul className="text-sm text-[#5F6368] dark:text-[#AEB3B9] list-disc pl-5 space-y-1">
<li>Hire adults, set context</li>
<li>Disagree and commit</li>
</ul>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Risks</div>
<ul className="text-sm text-[#5F6368] dark:text-[#AEB3B9] list-disc pl-5 space-y-1">
<li>Over-rotating on confrontation</li>
</ul>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Blind Spots</div>
<ul className="text-sm text-[#5F6368] dark:text-[#AEB3B9] list-disc pl-5 space-y-1">
<li>Early-stage ambiguity tolerance</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-4" data-builder-panel="gen">
<div className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
<label className="text-sm font-medium">Role</label>
<input aria-label="Generated Role" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="e.g., Growth Strategist" type="text"/>
</div>
<div>
<label className="text-sm font-medium">Tone</label>
<input aria-label="Tone" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="e.g., Direct, Data-Driven" type="text"/>
</div>
<div className="md:col-span-2">
<label className="text-sm font-medium">Strategies</label>
<textarea aria-label="Strategies" className="mt-1 min-h-[88px] w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="Acquisition, retention, pricing levers..."></textarea>
</div>
<div className="md:col-span-2">
<label className="text-sm font-medium">Blind Spots</label>
<textarea aria-label="Blind Spots" className="mt-1 min-h-[88px] w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="Potential pitfalls or biases..."></textarea>
</div>
</div>
<div className="mt-4 flex items-center justify-end gap-2">
<button className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20">Cancel</button>
<button className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]">Save</button>
</div>
</div>
</div>

<div className="hidden space-y-4" data-builder-panel="gen">
<div className="rounded-xl border border-black/5 dark:border-white/10 overflow-hidden">
<div className="p-4 bg-[#F0F2F5] dark:bg-[#2E3238]">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-[#3A7DFF]/10 text-[#3A7DFF] flex items-center justify-center">
<svg className="lucide lucide-bot w-5 h-5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div>
<div className="text-base font-medium tracking-tight">Preview: Generated Expert</div>
<div className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Role, strategies, tone</div>
</div>
</div>
</div>
<div className="p-4 bg-white dark:bg-[#2A2E35]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Role</div>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Growth Strategist</p>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Tone</div>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Direct, Data-Driven</p>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3 md:col-span-2">
<div className="text-sm font-medium mb-1">Strategies</div>
<ul className="text-sm text-[#5F6368] dark:text-[#AEB3B9] list-disc pl-5 space-y-1">
<li>PLG loops</li>
<li>Pricing experiments</li>
<li>Lifecycle messaging</li>
</ul>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3 md:col-span-2">
<div className="text-sm font-medium mb-1">Blind Spots</div>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Over-index on short-term experiments</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" data-screen="create">
<div className="flex items-center justify-between mb-4">
<div>
<h1 className="text-[24px] leading-7 tracking-tight font-semibold">New Session</h1>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-1">Select experts and configuration to begin.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

<div className="lg:col-span-2">
<div className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
<label className="text-sm font-medium">Session Title</label>
<input aria-label="Session Title" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="e.g., Q3 GTM Review" type="text"/>
</div>
<div>
<label className="text-sm font-medium">Industry</label>
<input aria-label="Industry" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="e.g., SaaS" type="text"/>
</div>
</div>

<div className="mt-4">
<label className="text-sm font-medium">Storage</label>
<div className="mt-2 inline-flex rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
<button aria-checked="true" className="px-4 py-2 text-sm font-medium bg-[#3A7DFF] text-white" data-storage="cloud" role="switch">Cloud</button>
<button aria-checked="false" className="px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10" data-storage="local" role="switch">Local</button>
</div>
</div>

<div className="mt-4">
<label className="text-sm font-medium">Experts (2–5)</label>
<div className="mt-2 flex flex-wrap gap-2">
<button className="px-2.5 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#3A7DFF] hover:text-[#3A7DFF] flex items-center gap-1 bg-white dark:bg-[#2A2E35]">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span>Ops</span>
</button>
<button className="px-2.5 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#3A7DFF] hover:text-[#3A7DFF] flex items-center gap-1 bg-white dark:bg-[#2A2E35]">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span>Finance</span>
</button>
<button className="px-2.5 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#3A7DFF] hover:text-[#3A7DFF] flex items-center gap-1 bg-white dark:bg-[#2A2E35]">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span>Growth</span>
</button>
<button className="px-2.5 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#3A7DFF] hover:text-[#3A7DFF] flex items-center gap-1 bg-white dark:bg-[#2A2E35]">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span>Legal</span>
</button>
<button className="px-2.5 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#3A7DFF] hover:text-[#3A7DFF] flex items-center gap-1 bg-white dark:bg-[#2A2E35]">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<span>PM</span>
</button>
</div>
</div>

<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-lg border border-black/10 dark:border-white/10 p-3 flex items-center justify-between">
<div className="text-sm">
<div className="font-medium">Pushback</div>
<div className="text-[#5F6368] dark:text-[#AEB3B9]">Challenge assumptions</div>
</div>
<button aria-checked="true" className="relative inline-flex h-7 w-12 items-center rounded-full bg-[#4CAF50] transition" id="pushbackToggle" role="switch">
<span className="sr-only">Toggle pushback</span>
<span className="inline-block h-5 w-5 translate-x-6 transform rounded-full bg-white transition"></span>
</button>
</div>
<div className="rounded-lg border border-black/10 dark:border-white/10 p-3 flex items-center justify-between">
<div className="text-sm">
<div className="font-medium">Mode</div>
<div className="text-[#5F6368] dark:text-[#AEB3B9]">Voice or text</div>
</div>
<div className="inline-flex rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
<button aria-pressed="true" className="px-3 py-1.5 text-sm font-medium bg-[#3A7DFF] text-white">Voice</button>
<button aria-pressed="false" className="px-3 py-1.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Text</button>
</div>
</div>
<div className="rounded-lg border border-black/10 dark:border-white/10 p-3 flex items-center justify-between">
<div className="text-sm">
<div className="font-medium">Duration</div>
<div className="text-[#5F6368] dark:text-[#AEB3B9]">30–60 minutes</div>
</div>
<div className="text-sm px-2 py-1 rounded-md border border-black/10 dark:border-white/10">Auto</div>
</div>
</div>

<div className="md:hidden fixed bottom-3 inset-x-4 z-40">
<button className="w-full px-4 py-3 rounded-2xl text-base uppercase font-medium tracking-wide bg-[#3A7DFF] text-white shadow hover:bg-[#2f6ae0]" data-screen-trigger="live">Start Session</button>
</div>
</div>
</div>

<aside className="hidden lg:block">
<div className="sticky top-[72px] rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4">
<h3 className="text-base font-medium tracking-tight">Preview</h3>
<div className="mt-3 space-y-3">
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Experts</div>
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#2A2E35]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#2A2E35]" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#2A2E35]" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Storage</div>
<div className="flex items-center gap-2 text-sm"><svg className="lucide lucide-cloud w-4 h-4" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> Cloud</div>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Pushback</div>
<div className="inline-flex items-center gap-2 text-sm text-[#4CAF50]">
<span className="h-2 w-2 rounded-full bg-[#4CAF50]"></span> Enabled
                      </div>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Mode</div>
<div className="flex items-center gap-2 text-sm"><svg className="lucide lucide-mic w-4 h-4" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg> Voice</div>
</div>
<button className="w-full mt-2 px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]" data-screen-trigger="live">Start Session</button>
</div>
</div>
</aside>
</div>
</section>

<section className="hidden" data-screen="live">

<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<h1 className="text-[24px] leading-7 tracking-tight font-semibold">Live Session</h1>
<span className="hidden md:inline-flex items-center gap-1 text-xs text-[#5F6368] dark:text-[#AEB3B9] ml-1">
<svg className="lucide lucide-dot w-5 h-5 text-[#4CAF50]" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg> Connected
                </span>
</div>

<div className="hidden md:flex items-center gap-2">
<div className="relative">
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10" id="filterBtn">
<svg className="lucide lucide-filter w-4 h-4 mr-1.5 inline" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                    Filter
                  </button>
<div className="hidden absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-[#2A2E35] border border-black/10 dark:border-white/10 shadow" id="filterMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">All</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">Expert</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">Host</button>
</div>
</div>
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10" id="splitToggle">
<svg className="lucide lucide-columns-2 w-4 h-4 mr-1.5 inline" data-lucide="columns-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M12 3v18"></path></svg>
                  Split-View
                </button>
<button className="px-3 py-2 rounded-lg text-sm font-medium text-[#E53935] border border-[#E53935]/30 hover:bg-[#E53935]/10" data-screen-trigger="audit">
<svg className="lucide lucide-square w-4 h-4 mr-1.5 inline" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
                  End Session
                </button>
</div>
</div>

<div className="mb-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="px-3 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 bg-white dark:bg-[#2A2E35] hover:border-[#3A7DFF] hover:text-[#3A7DFF]">All</button>
<button className="px-3 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#3A7DFF] hover:text-[#3A7DFF]">Ops</button>
<button className="px-3 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#3A7DFF] hover:text-[#3A7DFF]">Finance</button>
<button className="px-3 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#3A7DFF] hover:text-[#3A7DFF]">Growth</button>
<button className="px-3 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#3A7DFF] hover:text-[#3A7DFF]">Legal</button>
<button className="px-3 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/10 hover:border-[#FFB020] hover:text-[#FFB020]" id="personaSwapOpen">
<svg className="lucide lucide-repeat-2 w-4 h-4 mr-1 inline" data-lucide="repeat-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 9 3-3 3 3"></path><path d="M13 18H7a2 2 0 0 1-2-2V6"></path><path d="m22 15-3 3-3-3"></path><path d="M11 6h6a2 2 0 0 1 2 2v10"></path></svg> Swap
              </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-1 gap-4" id="transcriptWrap">

<div className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 overflow-hidden">
<div className="p-3 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
<div className="text-sm font-medium">Transcript</div>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Auto-scrolling</div>
</div>
<div className="p-3 space-y-3 max-h-[48vh] md:max-h-[56vh] overflow-y-auto">

<div className="flex items-start justify-end gap-2">
<div className="max-w-[85%] md:max-w-[70%] rounded-2xl rounded-br-md bg-[#3A7DFF] text-white px-3 py-2 text-sm shadow select-text">How should we price the new add-on to avoid cannibalizing Pro?</div>
<div className="h-8 w-8 rounded-lg bg-[#1B1E23] text-white flex items-center justify-center text-[10px] tracking-tight">HN</div>
</div>

<div className="flex items-start gap-2">
<img alt="" className="h-8 w-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9] mb-1">Finance</div>
<div className="max-w-[85%] md:max-w-[70%] rounded-2xl rounded-bl-md bg-black/5 dark:bg-white/10 px-3 py-2 text-sm select-text">Anchor at +25% vs Pro, discount with annual prepay. Validate WTP with a 3-cell test.</div>
</div>
</div>

<div className="flex items-center justify-center">
<div className="italic text-xs text-[#5F6368] dark:text-[#AEB3B9] bg-[#F0F2F5] dark:bg-[#2E3238] px-3 py-2 rounded-full">Host summary: test 3 price points, guardrail churn</div>
</div>

<div className="flex items-start gap-2">
<img alt="" className="h-8 w-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9] mb-1">Ops</div>
<div className="max-w-[85%] md:max-w-[70%] rounded-2xl rounded-bl-md bg-black/5 dark:bg-white/10 px-3 py-2 text-sm select-text">Consider support load; higher price tiers correlate with premium SLAs.</div>
</div>
</div>

<div className="flex items-start gap-2">
<img alt="" className="h-8 w-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9] mb-1">Growth</div>
<div className="max-w-[85%] md:max-w-[70%] rounded-2xl rounded-bl-md bg-black/5 dark:bg-white/10 px-3 py-2 text-sm select-text">Bundle with Pro trials; use a feature gate to push upgrade prompts.</div>
</div>
</div>
</div>
</div>

<div className="hidden rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 overflow-hidden" id="splitCol2">
<div className="p-3 border-b border-black/5 dark:border-white/10 text-sm font-medium">Expert Focus</div>
<div className="p-3 text-sm text-[#5F6368] dark:text-[#AEB3B9]">Filtered transcript for selected personas.</div>
</div>
</div>

<div className="md:hidden fixed bottom-4 inset-x-4 z-40">
<div className="rounded-2xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-3 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-2 w-24 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-[#3A7DFF]"></div>
</div>
<span className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Usage</span>
</div>
<button className="relative h-12 w-12 rounded-full bg-[#3A7DFF] text-white flex items-center justify-center shadow hover:bg-[#2f6ae0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3A7DFF]">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<span className="absolute -top-1 -right-1 bg-[#4CAF50] text-[10px] px-1.5 py-0.5 rounded">LIVE</span>
</button>
<button className="px-3 py-2 rounded-lg text-sm font-medium text-[#E53935] border border-[#E53935]/30 hover:bg-[#E53935]/10" data-screen-trigger="audit">
                    End
                  </button>
</div>
</div>
</div>

<div className="hidden md:flex items-center justify-between mt-4">
<div className="flex items-center gap-3">
<button className="relative h-12 w-12 rounded-full bg-[#3A7DFF] text-white flex items-center justify-center shadow hover:bg-[#2f6ae0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3A7DFF]">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<span className="absolute -top-1 -right-1 bg-[#4CAF50] text-[10px] px-1.5 py-0.5 rounded">LIVE</span>
</button>
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10" id="personaSwapOpen2">
<svg className="lucide lucide-users w-4 h-4 mr-1.5 inline" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  Swap Persona
                </button>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-40 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-[#3A7DFF]"></div>
</div>
<span className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Usage</span>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-[60] items-end md:items-center justify-center" id="swapModal">
<div className="absolute inset-0 bg-black/50"></div>
<div className="relative w-full md:w-[880px] max-w-[95vw] rounded-t-2xl md:rounded-2xl bg-white dark:bg-[#2A2E35] border border-black/10 dark:border-white/10 p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight">Swap Persona</h3>
<button aria-label="Close swap modal" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" id="swapClose">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="rounded-xl border border-black/5 dark:border-white/10 p-3">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Current: Ops</div>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Patterns, risks</div>
</div>
</div>
<div className="mt-3 grid grid-cols-1 gap-2">
<div className="rounded-lg border border-black/5 dark:border-white/10 p-2">
<div className="text-xs font-medium mb-1">Patterns</div>
<p className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Process-first, SLA focus</p>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-2">
<div className="text-xs font-medium mb-1">Risks</div>
<p className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Overhead creep</p>
</div>
</div>
</div>

<div className="rounded-xl border border-black/5 dark:border-white/10 p-3">
<label className="text-sm font-medium">Search Expert</label>
<div className="mt-1 relative">
<input className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]" placeholder="Search by role or name" type="text"/>
<svg className="lucide lucide-search w-4 h-4 absolute right-3 top-2.5 text-[#5F6368] dark:text-[#AEB3B9]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="mt-3 space-y-2">
<button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 text-left">
<img alt="" className="h-8 w-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-sm font-medium">Support Lead</div>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Patterns: CSAT, response time</div>
</div>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 dark:hover:bg:white/10 border border-black/5 dark:border-white/10 text-left">
<img alt="" className="h-8 w-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="text-sm font-medium">Product Manager</div>
<div className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Risks: scope creep</div>
</div>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-end gap-2">
<button className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20" id="swapCancel">Cancel</button>
<button className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide bg-[#FFB020] text-black hover:bg-[#e19d1d]">Confirm Swap</button>
</div>
</div>
</div>

<section className="hidden" data-screen="audit">
<div className="flex items-center justify-between mb-4">
<div>
<h1 className="text-[24px] leading-7 tracking-tight font-semibold">Session Summary</h1>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-1">Key takeaways, risks, and alternatives.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

<div className="space-y-3">
<div className="relative rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4 overflow-hidden">

<div className="pointer-events-none absolute -top-4 right-6 h-2 w-2 bg-[#FFB020] rounded-full"></div>
<div className="pointer-events-none absolute top-6 -right-2 h-2 w-2 bg-[#3A7DFF] rounded-full"></div>
<div className="pointer-events-none absolute top-3 right-12 h-1.5 w-1.5 bg-[#4CAF50] rounded-full"></div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full border border-[#4CAF50]/30 text-[#4CAF50] flex items-center justify-center">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-base font-medium tracking-tight">Session Complete</div>
<div className="text-sm text-[#5F6368] dark:text-[#AEB3B9]">Artifacts ready to export</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-3">
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Key Takeaways</div>
<ul className="text-sm text-[#5F6368] dark:text-[#AEB3B9] list-disc pl-5 space-y-1">
<li>Price add-on at +25% vs Pro</li>
<li>Run 3-cell price test; monitor churn</li>
</ul>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Risks</div>
<ul className="text-sm text-[#5F6368] dark:text-[#AEB3B9] list-disc pl-5 space-y-1">
<li>Increased support load from tiering</li>
</ul>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="text-sm font-medium mb-1">Alternatives</div>
<ul className="text-sm text-[#5F6368] dark:text-[#AEB3B9] list-disc pl-5 space-y-1">
<li>Bundle add-on into Pro annual</li>
</ul>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]">
<svg className="lucide lucide-file-text w-4 h-4 mr-1.5 inline" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                      Export PDF
                    </button>
<button className="px-4 py-2 rounded-lg text-base uppercase font-medium tracking-wide border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20">
<svg className="lucide lucide-file w-4 h-4 mr-1.5 inline" data-lucide="file" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                      Export TXT
                    </button>
</div>
</div>

<div className="md:hidden fixed bottom-3 inset-x-4 z-40">
<div className="rounded-2xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-3 shadow-sm">
<div className="grid grid-cols-3 gap-2">
<button className="px-3 py-3 rounded-xl text-base uppercase font-medium tracking-wide border border-black/10 dark:border-white/10" data-screen-trigger="create">New</button>
<button className="px-3 py-3 rounded-xl text-base uppercase font-medium tracking-wide border border-black/10 dark:border-white/10">Share</button>
<button className="px-3 py-3 rounded-xl text-base uppercase font-medium tracking-wide bg-[#3A7DFF] text-white" data-screen-trigger="resume">Resume</button>
</div>
</div>
</div> 
<div className="space-y-3">
<div className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium tracking-tight">Decision Log</h3>
<span className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">v1.0</span>
</div>
<ul className="mt-3 space-y-2">
<li className="flex items-start gap-2">
<svg className="lucide lucide-circle-check w-4 h-4 text-[#4CAF50] mt-0.5" data-lucide="circle-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-sm">
                          Price add-on at +25% vs Pro
                          <div className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Owner: Finance • Impact: Revenue</div>
</div>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-circle-check w-4 h-4 text-[#4CAF50] mt-0.5" data-lucide="circle-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-sm">
                          Run 3-cell price test
                          <div className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">Owner: Growth • Guardrail: churn</div>
</div>
</li>
</ul>
</div>
<div className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4">
<h3 className="text-base font-medium tracking-tight">Transcript Snippets</h3>
<div className="mt-3 space-y-3">
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="flex items-center justify-between">
<span className="text-xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10">Finance</span>
<span className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">00:04:32</span>
</div>
<p className="mt-2 text-sm text-[#2A2E35] dark:text-white/90">Anchor at +25% vs Pro; validate willingness-to-pay with a 3-cell test.</p>
</div>
<div className="rounded-lg border border-black/5 dark:border-white/10 p-3">
<div className="flex items-center justify-between">
<span className="text-xs px-2 py-0.5 rounded-full bg-black/5 dark:bg:white/10">Ops</span>
<span className="text-xs text-[#5F6368] dark:text-[#AEB3B9]">00:07:11</span>
</div>
<p className="mt-2 text-sm text-[#2A2E35] dark:text-white/90">Higher tiers should map to premium SLAs to avoid support overload.</p>
</div>
</div>
<div className="mt-3 flex items-center justify-end">
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">
<svg className="lucide lucide-download w-4 h-4 mr-1.5 inline" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                        Export Snippets
                      </button>
</div>
</div>
<div className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4">
<h3 className="text-base font-medium tracking-tight">Next Actions</h3>
<div className="mt-3 space-y-2">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-black/20 dark:border-white/30 flex items-center justify-center peer-checked:bg-[#3A7DFF] peer-checked:border-[#3A7DFF]">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm">Configure price test in billing service</span>
</label>
<label className="flex items-center gap-2 cursor-pointer select-none">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-black/20 dark:border-white/30 flex items-center justify-center peer-checked:bg-[#3A7DFF] peer-checked:border-[#3A7DFF]">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm">Draft SLA proposals for premium tier</span>
</label>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" data-screen="resume">
<div className="flex items-center justify-between mb-4">
<div>
<h1 className="text-[24px] leading-7 tracking-tight font-semibold">Resume Sessions</h1>
<p className="text-sm text-[#5F6368] dark:text-[#AEB3B9] mt-1">Pick up where you left off.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<input 10="" ="pl-9="" bg-white="" border="" border-black="" dark:bg-[#2a2e35]="" dark:border-white="" focus:outline-none="" focus:ring-2="" focus:ring-[#3a7dff]"="" placeholder="Search sessions..." pr-3="" py-2="" rounded-lg="" text-sm="" type="text"/>
<svg className="lucide lucide-search w-4 h-4 absolute left-2.5 top-2.5 text-[#5F6368] dark:text-[#AEB3B9]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">

<article className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4 hover:shadow-sm transition">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-base font-medium tracking-tight">Q3 GTM Review</h3>
<p className="text-xs text-[#5F6368] dark:text-[#AEB3B9] mt-1">Experts: Ops, Finance, Growth</p>
</div>
<span className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10">Cloud</span>
</div>
<div className="mt-3">
<div className="h-2 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-[#3A7DFF]"></div>
</div>
<div className="mt-1 text-xs text-[#5F6368] dark:text-[#AEB3B9]">66% complete</div>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">Details</button>
<button className="px-3 py-2 rounded-lg text-sm font-medium bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]" data-screen-trigger="live">
<svg className="lucide lucide-play w-4 h-4 mr-1 inline" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Resume
                  </button>
</div>
</article>
<article className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4 hover:shadow-sm transition">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-base font-medium tracking-tight">Security Posture Audit</h3>
<p className="text-xs text-[#5F6368] dark:text-[#AEB3B9] mt-1">Experts: Legal, Ops</p>
</div>
<span className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10">Local</span>
</div>
<div className="mt-3">
<div className="h-2 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-[#3A7DFF]"></div>
</div>
<div className="mt-1 text-xs text-[#5F6368] dark:text-[#AEB3B9]">35% complete</div>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">Details</button>
<button className="px-3 py-2 rounded-lg text-sm font-medium bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]" data-screen-trigger="live">
<svg className="lucide lucide-play w-4 h-4 mr-1 inline" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Resume
                  </button>
</div>
</article>
<article className="rounded-xl bg-white dark:bg-[#2A2E35] border border-black/5 dark:border-white/10 p-4 hover:shadow-sm transition">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-base font-medium tracking-tight">Pricing Strategy v2</h3>
<p className="text-xs text-[#5F6368] dark:text-[#AEB3B9] mt-1">Experts: Finance, Growth</p>
</div>
<span className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10">Cloud</span>
</div>
<div className="mt-3">
<div className="h-2 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-4/5 bg-[#3A7DFF]"></div>
</div>
<div className="mt-1 text-xs text-[#5F6368] dark:text-[#AEB3B9]">80% complete</div>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="px-3 py-2 rounded-lg text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">Details</button>
<button className="px-3 py-2 rounded-lg text-sm font-medium bg-[#3A7DFF] text-white hover:bg-[#2f6ae0]" data-screen-trigger="live">
<svg className="lucide lucide-play w-4 h-4 mr-1 inline" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Resume
                  </button>
</div>
</article>
</div>
</section>
</div>
</main>

<footer className="border-t border-black/5 dark:border-white/10">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-xs text-[#5F6368] dark:text-[#AEB3B9]">
<div>© <span id="year">2025</span> Voice Panel</div>
<div className="hidden sm:flex items-center gap-3">
<a className="hover:text-[#3A7DFF]" href="#">Privacy</a>
<a className="hover:text-[#3A7DFF]" href="#">Terms</a>
<a className="hover:text-[#3A7DFF]" href="#">Support</a>
</div>
</div>
</footer>
</div>

<style>
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      [data-screen] { display: none; }
      [data-screen].active { display: block; }
    </style>


    </>
  );
}
