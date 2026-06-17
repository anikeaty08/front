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



      // Icons
      lucide.createIcons();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu
      const toggle = document.getElementById('mobileToggle');
      const menu = document.getElementById('mobileMenu');
      toggle?.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });

      // Chart.js donut
      const ctx = document.getElementById('donut-1');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Complete', 'Remaining'],
            datasets: [
              {
                data: [32, 68],
                backgroundColor: ['#F472B6', 'rgba(255,255,255,0.08)'],
                borderWidth: 0,
                hoverOffset: 2,
                cutout: '70%',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
          },
        });
      }
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(139,92,246,0.18),transparent),radial-gradient(40%_40%_at_0%_0%,rgba(16,185,129,0.12),transparent),radial-gradient(30%_30%_at_100%_100%,rgba(59,130,246,0.12),transparent)]"></div>
<div className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute bottom-[-10rem] right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-emerald-400/10 blur-3xl"></div>
<div className="absolute top-[40%] left-[-10rem] h-[22rem] w-[22rem] rounded-full bg-indigo-500/10 blur-3xl"></div>
</div>

<header className="relative z-10">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/80 to-indigo-500/80 ring-1 ring-white/10 shadow-lg shadow-fuchsia-500/20">
<i className="h-5 w-5 text-white/90" data-lucide="asterisk"></i>
</span>
<span className="text-xl font-semibold tracking-tight text-white">Nebula</span>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#">Meet the team</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#">Events</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#">Challenges</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#">Blog</a>
</nav>
<div className="hidden md:flex">
<a className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10" href="#">
<i className="h-4 w-4 text-fuchsia-300 transition group-hover:scale-110" data-lucide="download-cloud"></i>
            Download App
          </a>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-lg bg-white/5 p-2 ring-1 ring-white/10" id="mobileToggle">
<i className="h-5 w-5 text-white" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-slate-950/70 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-6 py-4">
<div className="grid gap-4">
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#">Meet the team</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#">Events</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#">Challenges</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#">Blog</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10" href="#">
<i className="h-4 w-4 text-fuchsia-300" data-lucide="download-cloud"></i>
              Download App
            </a>
</div>
</div>
</div>
</header>

<section className="relative z-10 overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24">
<div className="mx-auto max-w-3xl px-6 text-center">
<div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="target"></i>
          CHALLENGES
        </div>
<h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
          Everything big starts small
        </h1>
<p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300">
          Learn by building. Bite-sized quests, expert feedback, and a community that turns ideas into momentum.
        </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="h-5 w-5 text-white/90" data-lucide="apple"></i>
            Get on App Store
          </a>
<a className="inline-flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="h-5 w-5 text-[#34D399]" data-lucide="play"></i>
            Get on Google Play
          </a>
</div>
</div>

<div className="relative mx-auto mt-16 max-w-6xl px-6">

<button className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
<i className="h-5 w-5 text-white/80" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
<i className="h-5 w-5 text-white/80" data-lucide="chevron-right"></i>
</button>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

<div className="relative hidden sm:block">
<div className="relative h-full overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-0 bg-gradient-to-br from-transparent via-fuchsia-500/10 to-transparent"></div>
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/80 to-teal-500/80 ring-1 ring-white/10">
<i className="h-5 w-5 text-white" data-lucide="layers"></i>
</span>
<div>
<p className="text-sm text-slate-400">7 challenges</p>
<h3 className="text-lg font-semibold tracking-tight text-white">Solara</h3>
</div>
</div>
<div className="mt-6 flex items-center gap-2 opacity-70">
<img alt="avatar" className="h-6 w-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" className="h-6 w-6 rounded-full object-cover -ml-2 ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<span className="text-xs text-slate-300">+9,842 builders</span>
</div>
</div>
<div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-emerald-500/10 blur-xl"></div>
</div>

<div className="relative">
<div className="relative overflow-hidden rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl shadow-fuchsia-500/20">
<div className="absolute -top-20 right-[-60px] h-56 w-56 rounded-full bg-fuchsia-500/10 blur-2xl"></div>
<div className="flex items-center gap-4">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 ring-1 ring-white/10">
<i className="h-6 w-6 text-white" data-lucide="sparkles"></i>
</span>
<div>
<p className="text-sm text-slate-300/80">56 challenges</p>
<h3 className="text-2xl font-semibold tracking-tight text-white">Polaris</h3>
</div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="flex items-center gap-2">
<img alt="avatar" className="h-7 w-7 rounded-full object-cover ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" className="h-7 w-7 rounded-full object-cover -ml-2 ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" className="h-7 w-7 rounded-full object-cover -ml-2 ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<span className="ml-2 text-sm text-slate-300">20,010 builders</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-3/4 rounded-full bg-gradient-to-r from-fuchsia-500 to-emerald-400"></div>
</div>
<span className="text-xs text-slate-300">75% complete</span>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30" href="#">
<i className="h-5 w-5" data-lucide="play-circle"></i>
                  View Challenge
                </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="h-5 w-5 text-emerald-300" data-lucide="bookmark-plus"></i>
                  Save for later
                </a>
</div>
</div>
<div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-fuchsia-500/10 blur-2xl"></div>
</div>

<div className="relative hidden sm:block">
<div className="relative h-full overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-0 bg-gradient-to-tl from-transparent via-indigo-500/10 to-transparent"></div>
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400/80 to-sky-500/80 ring-1 ring-white/10">
<i className="h-5 w-5 text-white" data-lucide="box"></i>
</span>
<div>
<p className="text-sm text-slate-400">8 challenges</p>
<h3 className="text-lg font-semibold tracking-tight text-white">Immutable Z</h3>
</div>
</div>
<div className="mt-6 flex items-center gap-2 opacity-70">
<img alt="avatar" className="h-6 w-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" className="h-6 w-6 rounded-full object-cover -ml-2 ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="text-xs text-slate-300">+14,527 builders</span>
</div>
</div>
<div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-indigo-500/10 blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 sm:py-28">
<div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
<div>
<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Download the App</h2>
<p className="mt-4 max-w-xl text-base sm:text-lg text-slate-300">
            Learn from the world’s leading ecosystems and get certified right from your phone.
          </p>
<div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="h-5 w-5 text-white/90" data-lucide="apple"></i>
              App Store
            </a>
<a className="inline-flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<i className="h-5 w-5 text-[#34D399]" data-lucide="play"></i>
              Google Play
            </a>
</div>
</div>

<div className="relative">

<div className="absolute -top-6 -left-4 hidden sm:block">
<img alt="3D render" className="h-24 w-24 rounded-2xl object-cover opacity-80 ring-1 ring-white/10" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 rounded-2xl bg-emerald-400/10 blur-xl -z-10"></div>
</div>
<div className="relative mx-auto grid w-full max-w-lg gap-6">

<div className="relative rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl shadow-fuchsia-500/10">
<div className="flex items-center gap-4">
<img alt="profile" className="h-12 w-12 rounded-2xl object-cover ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="text-slate-300 text-sm">Rank</p>
<h4 className="text-xl font-semibold tracking-tight text-white truncate">104 / 20,206</h4>
</div>
</div>
<div className="mt-4 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-3/5 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-emerald-400"></div>
</div>
<div className="mt-4 flex items-center gap-3">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10">
<i className="h-4 w-4 text-fuchsia-300" data-lucide="stars"></i>
                  +56 XP
                </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10">
<i className="h-4 w-4 text-emerald-300" data-lucide="clock-3"></i>
                  2d
                </span>
</div>
<div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-fuchsia-500/10 blur-2xl"></div>
</div>

<div className="relative -ml-6 w-[85%] self-start rounded-3xl bg-gradient-to-br from-emerald-400/15 to-teal-500/10 p-6 ring-1 ring-emerald-400/20 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/30 ring-1 ring-white/10">
<i className="h-6 w-6 text-emerald-200" data-lucide="play-circle"></i>
</div>
<div className="text-right">
<p className="text-sm text-emerald-200/80">Next up</p>
<h5 className="font-semibold tracking-tight text-white">Build a Wallet</h5>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400/70"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400/40"></span>
</div>
<div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-emerald-500/10 blur-2xl"></div>
</div>

<div className="relative -mr-6 w-[88%] self-end rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-300/80">Weekly streak</p>
<h5 className="mt-1 text-xl font-semibold tracking-tight text-white">32% complete</h5>
</div>

<div className="relative h-20 w-20">
<div className="relative h-full w-full">
<canvas className="!h-20 !w-20" id="donut-1"></canvas>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-white/5 px-3 py-2 text-xs text-slate-300 ring-1 ring-white/10">
<span className="inline-flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-fuchsia-400"></span> Learned
                  </span>
<p className="mt-1 text-white font-medium">16</p>
</div>
<div className="rounded-xl bg-white/5 px-3 py-2 text-xs text-slate-300 ring-1 ring-white/10">
<span className="inline-flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-white/20"></span> Remaining
                  </span>
<p className="mt-1 text-white font-medium">34</p>
</div>
</div>
<div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-indigo-500/10 blur-2xl"></div>
</div>
</div>

<div className="pointer-events-none absolute -bottom-10 -right-8 hidden sm:block">
<img alt="mountains" className="h-24 w-36 rounded-xl object-cover opacity-70 ring-1 ring-white/10" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/80 to-indigo-500/80 ring-1 ring-white/10">
<i className="h-4 w-4 text-white/90" data-lucide="asterisk"></i>
</span>
<span className="text-sm font-medium text-slate-300">© <span id="year"></span> Nebula. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm text-slate-300 hover:text-white transition" href="#">Terms</a>
<a className="text-sm text-slate-300 hover:text-white transition" href="#">Privacy</a>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="text-slate-300 hover:text-white transition" href="#">
<i className="h-5 w-5" data-lucide="twitter"></i>
</a>
<a aria-label="Github" className="text-slate-300 hover:text-white transition" href="#">
<i className="h-5 w-5" data-lucide="github"></i>
</a>
<a aria-label="Mail" className="text-slate-300 hover:text-white transition" href="#">
<i className="h-5 w-5" data-lucide="mail"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
