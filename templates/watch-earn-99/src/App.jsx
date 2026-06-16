import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with consistent stroke width 1.5
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Horizontal scroll buttons
        const bySel = (s, r = document) => Array.from(r.querySelectorAll(s));
        bySel('[data-scroll-left]').forEach(btn => {
          btn.addEventListener('click', () => {
            const target = document.querySelector(btn.getAttribute('data-target'));
            if (target) target.scrollBy({ left: -target.clientWidth * 0.9, behavior: 'smooth' });
          });
        });
        bySel('[data-scroll-right]').forEach(btn => {
          btn.addEventListener('click', () => {
            const target = document.querySelector(btn.getAttribute('data-target'));
            if (target) target.scrollBy({ left: target.clientWidth * 0.9, behavior: 'smooth' });
          });
        });

        // Rewards-only filter: show cards with data-reward >= 60
        const toggle = document.getElementById('rewardsOnly');
        const applyFilter = () => {
          const min = toggle.checked ? 60 : 0;
          bySel('[data-card]').forEach(card => {
            const reward = Number(card.getAttribute('data-reward') || '0');
            card.style.display = reward >= min ? '' : 'none';
          });
        };
        toggle.addEventListener('change', applyFilter);
        applyFilter();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-neutral-900/60 border-b border-neutral-800/70">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3 justify-center">
<i className="w-4 h-4 text-amber-400" data-lucide="flame"></i>
<p className="text-sm text-neutral-300">Weekly Rewards Boost: earn up to 2x on featured titles. Ends in <span className="text-amber-300">12:48:09</span>.</p>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-neutral-900/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-800 grid place-items-center ring-1 ring-neutral-700/70">
<span className="text-neutral-100 text-sm font-medium tracking-tight">NF</span>
</div>
<nav className="hidden md:flex items-center gap-4">
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors" href="#">Home</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors" href="#">Series</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors" href="#">Movies</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors" href="#">My List</a>
</nav>
</div>
<div className="ml-auto flex items-center gap-3 sm:gap-4">
<div className="hidden md:flex items-center gap-2 rounded-lg bg-neutral-900/70 ring-1 ring-neutral-800/80 px-3 py-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="search"></i>
<input className="bg-transparent outline-none text-sm placeholder:text-neutral-500 w-48" placeholder="Search titles"/>
</div>

<div className="flex items-center gap-2 rounded-lg bg-neutral-900/70 ring-1 ring-neutral-800/80 px-3 py-2 hover:ring-neutral-700 transition-colors">
<i className="w-4 h-4 text-emerald-300" data-lucide="coins"></i>
<div className="flex items-baseline gap-1">
<span className="text-sm text-neutral-300">Coins</span>
<span className="text-sm font-medium text-emerald-300 tracking-tight">2,380</span>
</div>
<span className="mx-2 h-4 w-px bg-neutral-800"></span>
<i className="w-4 h-4 text-sky-300" data-lucide="ticket"></i>
<span className="text-sm font-medium text-sky-300 tracking-tight">5</span>
</div>

<label className="relative inline-flex items-center cursor-pointer select-none group">
<input className="sr-only peer" id="rewardsOnly" type="checkbox"/>
<div className="w-12 h-7 bg-neutral-900 ring-1 ring-neutral-800 rounded-full transition-colors peer-checked:bg-emerald-500/15 peer-focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-400/40 relative">
<div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-neutral-600 transition peer-checked:translate-x-5 peer-checked:bg-emerald-400 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"></div>
</div>
<span className="ml-2 text-sm text-neutral-300">Rewards only</span>
</label>
<button className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-neutral-800 hover:ring-neutral-700 transition">
<img alt="profile" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</button>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">

<section className="relative mt-6 md:mt-8 overflow-hidden rounded-xl ring-1 ring-neutral-800">
<div className="absolute inset-0">
<img alt="Featured" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
</div>
<div className="relative z-10 p-5 sm:p-8 lg:p-10">
<div className="flex items-center gap-2 mb-3">
<span className="px-2.5 py-1 text-xs rounded-md bg-neutral-900/80 ring-1 ring-neutral-800 text-neutral-300">Sci‑Fi</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> Earn +120
            </span>
<span className="px-2.5 py-1 text-xs rounded-md bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="ticket"></i> +1 Ticket
            </span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold text-white">Galactic Horizon</h1>
<p className="mt-3 max-w-2xl text-neutral-300 text-sm sm:text-base">A pilot discovers an anomaly that bends time — and a hidden path to save her crew. Finish to earn boosted rewards this week.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900/80 ring-1 ring-neutral-800 text-sm hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 transition">
<i className="w-4 h-4" data-lucide="info"></i> Details
            </button>
<div className="ml-auto flex items-center gap-3 rounded-lg bg-neutral-900/60 ring-1 ring-neutral-800 px-3 py-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="clock"></i>
<span className="text-sm text-neutral-300">Watch 80% to earn</span>
<div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400/80 w-2/3"></div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
<div className="lg:col-span-3 flex items-center gap-2">
<button className="px-3 py-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 text-sm hover:bg-neutral-800 transition">All</button>
<button className="px-3 py-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 text-sm hover:bg-neutral-800 transition">Trending</button>
<button className="px-3 py-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 text-sm hover:bg-neutral-800 transition">New</button>
<button className="px-3 py-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 text-sm hover:bg-neutral-800 transition">Awarded</button>
<button className="px-3 py-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 text-sm hover:bg-neutral-800 transition">For You</button>
</div>
<div className="lg:col-span-1 flex items-center justify-start lg:justify-end">
<div className="flex items-center gap-2 rounded-lg bg-neutral-900 ring-1 ring-neutral-800 px-3 py-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="sparkles"></i>
<span className="text-sm text-neutral-300">Boost active on 12 titles</span>
</div>
</div>
</section>

<section className="mt-4 space-y-8">

<div>
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl tracking-tight font-semibold text-white">Trending Now</h2>
<div className="flex items-center gap-2">
<button aria-label="Scroll left" className="p-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 hover:ring-neutral-700 transition" data-scroll-left="" data-target="#row-trending">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button aria-label="Scroll right" className="p-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 hover:ring-neutral-700 transition" data-scroll-right="" data-target="#row-trending">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="group flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent" id="row-trending">

<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="120">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Nebula Run" className="h-full w-full object-cover transition duration-300 group-hover:brightness-110" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +120
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Nebula Run</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG-13</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 120
                  </div>
<div className="flex items-center gap-1.5 text-sky-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="ticket"></i> +1
                  </div>
<div className="flex items-center gap-1.5 text-amber-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="flame"></i> x1.2
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Finish credits to unlock a bonus ticket.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="80">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Crimson Echoes" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +80
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Crimson Echoes</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">R</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 80
                  </div>
<div className="flex items-center gap-1.5 text-fuchsia-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="star"></i> Badge
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Watch 70% to earn. Badge awarded on completion.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="55">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Silent Harbor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +55
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Silent Harbor</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 55
                  </div>
<div className="flex items-center gap-1.5 text-amber-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="flame"></i> Streak +1
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Complete today to maintain your streak.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="95">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Vector Prime" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1542204637-e67bc7d41e48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +95
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Vector Prime</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG-13</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 95
                  </div>
<div className="flex items-center gap-1.5 text-sky-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="ticket"></i> +1
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Watch 90% to earn coins + ticket.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="40">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Rooftop Nights" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +40
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Rooftop Nights</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 40
                  </div>
<div className="flex items-center gap-1.5 text-amber-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="flame"></i> Streak +1
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Perfect for keeping streak alive.</p>
</div>
</article>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl tracking-tight font-semibold text-white">New Releases</h2>
<div className="flex items-center gap-2">
<button aria-label="Scroll left" className="p-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 hover:ring-neutral-700 transition" data-scroll-left="" data-target="#row-new">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button aria-label="Scroll right" className="p-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 hover:ring-neutral-700 transition" data-scroll-right="" data-target="#row-new">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="group flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2" id="row-new">
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="140">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Quantum Rift" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +140
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Quantum Rift</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG-13</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 140
                  </div>
<div className="flex items-center gap-1.5 text-sky-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="ticket"></i> +2
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Double ticket on first watch this week.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="70">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Hinterland" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +70
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Hinterland</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 70
                  </div>
<div className="flex items-center gap-1.5 text-fuchsia-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="crown"></i> Elite XP
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Earn Elite XP for top-tier perks.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="50">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Northbound" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +50
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Northbound</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 50
                  </div>
<div className="flex items-center gap-1.5 text-amber-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="flame"></i> Streak +1
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Watch 60% to earn coins.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="110">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Black Circuit" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +110
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Black Circuit</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">R</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 110
                  </div>
<div className="flex items-center gap-1.5 text-sky-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="ticket"></i> +1
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Completion bonus active.</p>
</div>
</article>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl tracking-tight font-semibold text-white">Award Winners</h2>
<div className="flex items-center gap-2">
<button aria-label="Scroll left" className="p-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 hover:ring-neutral-700 transition" data-scroll-left="" data-target="#row-award">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button aria-label="Scroll right" className="p-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 hover:ring-neutral-700 transition" data-scroll-right="" data-target="#row-award">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="group flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2" id="row-award">
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="75">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Silver Strings" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +75
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Silver Strings</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 75
                  </div>
<div className="flex items-center gap-1.5 text-fuchsia-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="star"></i> Trophy Badge
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Earn the Trophy Badge on full watch.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="65">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Midnight Atlas" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +65
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Midnight Atlas</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG-13</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 65
                  </div>
<div className="flex items-center gap-1.5 text-sky-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="ticket"></i> +1
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Watch to claim ticket + coins.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="35">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Paper Lights" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +35
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Paper Lights</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">G</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 35
                  </div>
<div className="flex items-center gap-1.5 text-amber-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="flame"></i> Streak +1
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Easy watch for daily streak.</p>
</div>
</article>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl tracking-tight font-semibold text-white">Because you watched Sci‑Fi</h2>
<div className="flex items-center gap-2">
<button aria-label="Scroll left" className="p-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 hover:ring-neutral-700 transition" data-scroll-left="" data-target="#row-you">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button aria-label="Scroll right" className="p-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 hover:ring-neutral-700 transition" data-scroll-right="" data-target="#row-you">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="group flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2" id="row-you">
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="85">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Axiom" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +85
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Axiom</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG-13</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 85
                  </div>
<div className="flex items-center gap-1.5 text-fuchsia-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="crown"></i> Elite XP
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Complete within 48h for XP.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="60">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Echo Grid" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +60
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Echo Grid</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">PG</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 60
                  </div>
<div className="flex items-center gap-1.5 text-sky-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="ticket"></i> +1
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Watch 75% to earn rewards.</p>
</div>
</article>
<article className="min-w-[13.5rem] max-w-[13.5rem] snap-start rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-neutral-900 hover:ring-neutral-700/80 transition" data-card="" data-reward="25">
<div className="relative aspect-[2/3] overflow-hidden">
<img alt="Glacier Bay" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25 text-xs">
<i className="w-3.5 h-3.5" data-lucide="gift"></i> +25
                </div>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-100 transition">
<i className="w-4 h-4" data-lucide="play"></i> Play
                </button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-white">Glacier Bay</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300">G</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="flex items-center gap-1.5 text-emerald-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="coins"></i> 25
                  </div>
<div className="flex items-center gap-1.5 text-amber-300 text-xs">
<i className="w-3.5 h-3.5" data-lucide="flame"></i> Streak +1
                  </div>
</div>
<p className="mt-2 text-xs text-neutral-400">Family friendly — easy earn.</p>
</div>
</article>
</div>
</div>
</section>
</main>

<aside className="hidden lg:block fixed right-6 top-28 w-[300px] rounded-xl bg-neutral-950/80 backdrop-blur ring-1 ring-neutral-800 p-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-white">Rewards Wallet</h3>
<button aria-label="Refresh" className="p-1.5 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 transition">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
</button>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded-lg bg-neutral-900/70 ring-1 ring-neutral-800 p-3">
<div className="flex items-center gap-1.5 text-neutral-300 text-xs">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="coins"></i> Coins
          </div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">2,380</div>
</div>
<div className="rounded-lg bg-neutral-900/70 ring-1 ring-neutral-800 p-3">
<div className="flex items-center gap-1.5 text-neutral-300 text-xs">
<i className="w-3.5 h-3.5 text-sky-300" data-lucide="ticket"></i> Tickets
          </div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">5</div>
</div>
<div className="rounded-lg bg-neutral-900/70 ring-1 ring-neutral-800 p-3">
<div className="flex items-center gap-1.5 text-neutral-300 text-xs">
<i className="w-3.5 h-3.5 text-fuchsia-300" data-lucide="crown"></i> Level
          </div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">Gold</div>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">Level Progress</span>
<span className="text-sm text-neutral-400">72%</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-neutral-900 overflow-hidden">
<div className="h-full w-[72%] bg-gradient-to-r from-emerald-400 to-sky-400"></div>
</div>
</div>
<div className="mt-5">
<h4 className="text-sm font-medium text-neutral-200">Daily Quests</h4>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between rounded-lg bg-neutral-900/60 ring-1 ring-neutral-800 px-3 py-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="play-circle"></i>
<span className="text-sm text-neutral-300">Watch 2 trailers</span>
</div>
<div className="flex items-center gap-1 text-emerald-300 text-sm">
<i className="w-4 h-4" data-lucide="coins"></i> +10
            </div>
</div>
<div className="flex items-center justify-between rounded-lg bg-neutral-900/60 ring-1 ring-neutral-800 px-3 py-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="clock"></i>
<span className="text-sm text-neutral-300">Finish a movie</span>
</div>
<div className="flex items-center gap-1 text-emerald-300 text-sm">
<i className="w-4 h-4" data-lucide="coins"></i> +50
            </div>
</div>
<div className="flex items-center justify-between rounded-lg bg-neutral-900/60 ring-1 ring-neutral-800 px-3 py-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="flame"></i>
<span className="text-sm text-neutral-300">Keep streak</span>
</div>
<div className="flex items-center gap-1 text-emerald-300 text-sm">
<i className="w-4 h-4" data-lucide="coins"></i> +20
            </div>
</div>
</div>
</div>
</aside>

<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-neutral-950/90 backdrop-blur border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 rounded-md bg-neutral-900 ring-1 ring-neutral-800 px-2.5 py-1.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="coins"></i>
<span className="text-sm font-medium text-emerald-300 tracking-tight">2,380</span>
</div>
<div className="flex items-center gap-1.5 rounded-md bg-neutral-900 ring-1 ring-neutral-800 px-2.5 py-1.5">
<i className="w-4 h-4 text-sky-300" data-lucide="ticket"></i>
<span className="text-sm font-medium text-sky-300 tracking-tight">5</span>
</div>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 ring-1 ring-neutral-800 hover:bg-neutral-800 transition">
<i className="w-4 h-4 text-emerald-300" data-lucide="sparkles"></i>
<span className="text-sm text-neutral-300">View Quests</span>
</button>
</div>
</div>


    </>
  );
}
