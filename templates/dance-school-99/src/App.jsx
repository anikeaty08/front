import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile menu
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      mobileBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Schedule tabs
      const trackBtns = document.querySelectorAll('.track-btn');
      const tables = {
        kids: document.getElementById('table-kids'),
        teens: document.getElementById('table-teens'),
        adults: document.getElementById('table-adults'),
      };
      function setTrack(name) {
        Object.values(tables).forEach((el) => el.classList.add('hidden'));
        tables[name]?.classList.remove('hidden');
        trackBtns.forEach((b) => {
          b.classList.remove('bg-slate-900','text-white');
          b.classList.add('bg-white','text-slate-900');
        });
        const active = Array.from(trackBtns).find((b) => b.dataset.track === name);
        if (active) {
          active.classList.remove('bg-white','text-slate-900');
          active.classList.add('bg-slate-900','text-white');
        }
      }
      setTrack('teens'); // default view (middle track for balance)
      trackBtns.forEach((btn) => btn.addEventListener('click', () => setTrack(btn.dataset.track)));

      // Footer year
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-50 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-2.5 text-sm text-slate-600 flex items-center justify-between gap-4">
<p className="truncate">
          New term enrollment is open. Limited spots for Foundations and Hip-Hop Teens.
        </p>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#enroll">
<i className="size-4" data-lucide="ticket"></i>
          Enroll now
        </a>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-4">
<div className="flex items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="h-9 w-9 rounded-md border border-slate-300 grid place-items-center text-slate-900 tracking-tighter text-sm font-semibold">
              DS
            </div>
<div className="text-base font-medium tracking-tight">Dance School</div>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-700">
<a className="hover:text-slate-900" href="#highlights">Highlights</a>
<a className="hover:text-slate-900" href="#events">Annual Events</a>
<a className="hover:text-slate-900" href="#schedule">Schedule</a>
<a className="hover:text-slate-900" href="#fees">Fees</a>
<a className="hover:text-slate-900" href="#collab">Collaborations</a>
<a className="hover:text-slate-900" href="#competitions">Competitions</a>
<a className="hover:text-slate-900" href="#director">Director</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#contact">
<i className="size-4" data-lucide="phone"></i>
              Contact
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-black transition-colors" href="#enroll">
<i className="size-4" data-lucide="calendar"></i>
              Enroll
            </a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 p-2 hover:bg-slate-100 hover:border-slate-400 transition-colors" id="mobileMenuBtn">
<i className="size-5" data-lucide="menu"></i>
</button>
</div>
<div className="md:hidden pt-4 hidden" id="mobileMenu">
<div className="grid gap-2 text-sm text-slate-700">
<a className="rounded-md px-3 py-2 hover:bg-slate-100" href="#highlights">Highlights</a>
<a className="rounded-md px-3 py-2 hover:bg-slate-100" href="#events">Annual Events</a>
<a className="rounded-md px-3 py-2 hover:bg-slate-100" href="#schedule">Schedule</a>
<a className="rounded-md px-3 py-2 hover:bg-slate-100" href="#fees">Fees</a>
<a className="rounded-md px-3 py-2 hover:bg-slate-100" href="#collab">Collaborations</a>
<a className="rounded-md px-3 py-2 hover:bg-slate-100" href="#competitions">Competitions</a>
<a className="rounded-md px-3 py-2 hover:bg-slate-100" href="#director">Director</a>
<a className="rounded-md px-3 py-2 hover:bg-slate-100" href="#contact">Contact</a>
<a className="rounded-md px-3 py-2 bg-slate-900 text-white hover:bg-black" href="#enroll">Enroll</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
<i className="size-4" data-lucide="award"></i>
              Celebrating artistry and technique
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Move. Learn. Perform.
            </h1>
<p className="mt-5 text-slate-600 text-base sm:text-lg">
              A community-focused studio offering foundations to advanced training. Small classes, personal attention, and performances that inspire.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm hover:bg-black transition-colors" href="#schedule">
<i className="size-5" data-lucide="calendar"></i>
                View Schedule
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#highlights">
<i className="size-5" data-lucide="play"></i>
                Watch Highlights
              </a>
</div>
<div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
<div className="flex items-center gap-2">
<i className="size-4" data-lucide="users"></i>
                20+ active students
              </div>
<div className="flex items-center gap-2">
<i className="size-4" data-lucide="star"></i>
                Annual showcases
              </div>
<div className="flex items-center gap-2">
<i className="size-4" data-lucide="trophy"></i>
                Competition-ready
              </div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
<img alt="Dancers performing on stage" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -left-6 hidden md:block bg-white rounded-xl border border-slate-200 shadow-sm p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md overflow-hidden border border-slate-200">
<img alt="Director portrait" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium">Season Highlights</p>
<p className="text-xs text-slate-600">2024 Showcase Reel</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="highlights">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Performance Highlights</h2>
<p className="mt-2 text-slate-600">Moments from past showcases, group and solo pieces across styles.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors">
<i className="size-4" data-lucide="filter"></i>
              All
            </button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors">Group</button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors">Solo</button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors">Contemporary</button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors">Hip-Hop</button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative overflow-hidden rounded-lg border border-slate-200">
<img alt="Contemporary group performance" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 p-4 text-white">
<div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-2.5 py-1 text-xs">
<i className="size-3.5" data-lucide="users"></i>
                Group
              </div>
<h3 className="mt-2 text-lg font-medium tracking-tight">Rivers &amp; Roads</h3>
<p className="text-sm text-white/80">Contemporary Ensemble</p>
</div>
</article>
<article className="group relative overflow-hidden rounded-lg border border-slate-200">
<img alt="Solo jazz performance" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 p-4 text-white">
<div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-2.5 py-1 text-xs">
<i className="size-3.5" data-lucide="user"></i>
                Solo
              </div>
<h3 className="mt-2 text-lg font-medium tracking-tight">Midnight Swing</h3>
<p className="text-sm text-white/80">Jazz / Improvisation</p>
</div>
</article>
<article className="group relative overflow-hidden rounded-lg border border-slate-200">
<img alt="Hip-hop crew performance" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 p-4 text-white">
<div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-2.5 py-1 text-xs">
<i className="size-3.5" data-lucide="zap"></i>
                Hip-Hop
              </div>
<h3 className="mt-2 text-lg font-medium tracking-tight">Pulse Breakers</h3>
<p className="text-sm text-white/80">Crew Showcase</p>
</div>
</article>
<article className="group relative overflow-hidden rounded-lg border border-slate-200">
<img alt="Ballet duet" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 p-4 text-white">
<div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-2.5 py-1 text-xs">
<i className="size-3.5" data-lucide="heart"></i>
                Ballet
              </div>
<h3 className="mt-2 text-lg font-medium tracking-tight">Echoes in White</h3>
<p className="text-sm text-white/80">Pas de deux</p>
</div>
</article>
<article className="group relative overflow-hidden rounded-lg border border-slate-200">
<img alt="Contemporary floorwork" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 p-4 text-white">
<div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-2.5 py-1 text-xs">
<i className="size-3.5" data-lucide="waves"></i>
                Contemporary
              </div>
<h3 className="mt-2 text-lg font-medium tracking-tight">Gravity Lines</h3>
<p className="text-sm text-white/80">Floorwork Study</p>
</div>
</article>
<article className="group relative overflow-hidden rounded-lg border border-slate-200">
<img alt="Stage finale" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 p-4 text-white">
<div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-2.5 py-1 text-xs">
<i className="size-3.5" data-lucide="sparkles"></i>
                Finale
              </div>
<h3 className="mt-2 text-lg font-medium tracking-tight">Lights Up</h3>
<p className="text-sm text-white/80">Show Finale</p>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="events">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Annual Events</h2>
<p className="mt-2 text-slate-600">Signature productions that spotlight individual and group performances.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#contact">
<i className="size-4" data-lucide="megaphone"></i>
            Book Us
          </a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2 text-slate-700">
<i className="size-5" data-lucide="sun"></i>
<h3 className="text-lg font-medium tracking-tight">Spring Recital</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Solo spotlights, small ensembles, and debut works from new choreographers.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
<i className="size-4" data-lucide="calendar"></i>
              May
            </div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2 text-slate-700">
<i className="size-5" data-lucide="sparkles"></i>
<h3 className="text-lg font-medium tracking-tight">Annual Showcase</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Full-cast performance featuring all classes, groups, and invited artists.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
<i className="size-4" data-lucide="calendar"></i>
              August
            </div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2 text-slate-700">
<i className="size-5" data-lucide="snowflake"></i>
<h3 className="text-lg font-medium tracking-tight">Winter Gala</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Fundraiser and performance with guest teachers and alumni appearances.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
<i className="size-4" data-lucide="calendar"></i>
              December
            </div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="schedule">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Weekly Schedule</h2>
<p className="mt-2 text-slate-600">Clear, consistent times. Separate tracks by age and level.</p>
</div>
<div className="flex items-center gap-2">
<button className="track-btn inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" data-track="kids">
<i className="size-4" data-lucide="baby"></i>
              Kids
            </button>
<button className="track-btn inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" data-track="teens">
<i className="size-4" data-lucide="smile"></i>
              Teens
            </button>
<button className="track-btn inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" data-track="adults">
<i className="size-4" data-lucide="user"></i>
              Adults
            </button>
</div>
</div>

<div className="mt-8 rounded-xl border border-slate-200 overflow-hidden">
<div className="track-table" id="table-kids">
<div className="bg-slate-50 border-b border-slate-200 px-4 py-3 text-sm text-slate-700 flex items-center gap-2">
<i className="size-4" data-lucide="calendar-clock"></i>
              Kids Track (6–12)
            </div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white">
<tr className="[&amp;&gt;th]:px-4 [&amp;&gt;th]:py-3 [&amp;&gt;th]:text-left [&amp;&gt;th]:font-medium [&amp;&gt;th]:text-slate-700">
<th>Day</th><th>Time</th><th>Class</th><th>Teacher</th><th>Studio</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="[&amp;&gt;td]:px-4 [&amp;&gt;td]:py-3">
<td>Mon</td><td>4:00–5:00p</td><td>Foundations I</td><td>Aria</td><td>A</td>
</tr>
<tr className="[&amp;&gt;td]:px-4 [&amp;&gt;td]:py-3">
<td>Wed</td><td>4:00–5:00p</td><td>Ballet Basics</td><td>Leo</td><td>B</td>
</tr>
<tr className="[&amp;&gt;td]:px-4 [&amp;&gt;td]:py-3">
<td>Fri</td><td>4:30–5:30p</td><td>Hip-Hop Kids</td><td>Nova</td><td>A</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="track-table hidden" id="table-teens">
<div className="bg-slate-50 border-b border-slate-200 px-4 py-3 text-sm text-slate-700 flex items-center gap-2">
<i className="size-4" data-lucide="calendar-clock"></i>
              Teens Track (13–17)
            </div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white">
<tr className="[&amp;&gt;th]:px-4 [&amp;&gt;th]:py-3 [&amp;&gt;th]:text-left [&amp;&gt;th]:font-medium [&amp;&gt;th]:text-slate-700">
<th>Day</th><th>Time</th><th>Class</th><th>Teacher</th><th>Studio</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="[&amp;&gt;td]:px-4 [&amp;&gt;td]:py-3">
<td>Tue</td><td>5:30–7:00p</td><td>Contemporary II</td><td>Aria</td><td>A</td>
</tr>
<tr className="[&amp;&gt;td]:px-4 [&amp;&gt;td]:py-3">
<td>Thu</td><td>5:00–6:30p</td><td>Hip-Hop Crew</td><td>Nova</td><td>B</td>
</tr>
<tr className="[&amp;&gt;td]:px-4 [&amp;&gt;td]:py-3">
<td>Sat</td><td>11:00–12:30p</td><td>Ballet Tech I</td><td>Leo</td><td>A</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="track-table hidden" id="table-adults">
<div className="bg-slate-50 border-b border-slate-200 px-4 py-3 text-sm text-slate-700 flex items-center gap-2">
<i className="size-4" data-lucide="calendar-clock"></i>
              Adults Track (18+)
            </div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white">
<tr className="[&amp;&gt;th]:px-4 [&amp;&gt;th]:py-3 [&amp;&gt;th]:text-left [&amp;&gt;th]:font-medium [&amp;&gt;th]:text-slate-700">
<th>Day</th><th>Time</th><th>Class</th><th>Teacher</th><th>Studio</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="[&amp;&gt;td]:px-4 [&amp;&gt;td]:py-3">
<td>Tue</td><td>7:30–8:30p</td><td>Contemporary Flow</td><td>Aria</td><td>B</td>
</tr>
<tr className="[&amp;&gt;td]:px-4 [&amp;&gt;td]:py-3">
<td>Thu</td><td>7:00–8:00p</td><td>Beginner Ballet</td><td>Leo</td><td>A</td>
</tr>
<tr className="[&amp;&gt;td]:px-4 [&amp;&gt;td]:py-3">
<td>Sat</td><td>9:30–10:30a</td><td>Hip-Hop Foundations</td><td>Nova</td><td>B</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm">
<p className="text-slate-600">
            Looking for private sessions or intensives? See Collaborations or contact us.
          </p>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 hover:bg-black transition-colors" href="#enroll">
<i className="size-4" data-lucide="clipboard-list"></i>
            Reserve a Spot
          </a>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="fees">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Transparent Fees</h2>
<p className="mt-3 text-slate-600">Simple plans that scale with your commitment. No hidden costs.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2">
<i className="size-5 text-slate-700" data-lucide="leaf"></i>
<h3 className="text-lg font-medium tracking-tight">Foundations</h3>
</div>
<p className="mt-2 text-sm text-slate-600">1 class/week. Ideal for beginners exploring technique.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">$49</span>
<span className="text-slate-600 text-sm">/month</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="size-4" data-lucide="check"></i>One weekly class</li>
<li className="flex items-center gap-2"><i className="size-4" data-lucide="check"></i>Showcase participation</li>
<li className="flex items-center gap-2"><i className="size-4" data-lucide="check"></i>Class recordings</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#enroll">
              Choose Foundations
            </a>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2">
<i className="size-5 text-slate-700" data-lucide="flame"></i>
<h3 className="text-lg font-medium tracking-tight">Dedicated</h3>
</div>
<p className="mt-2 text-sm text-slate-600">2–3 classes/week. Grow faster with more stage time.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">$99</span>
<span className="text-slate-600 text-sm">/month</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="size-4" data-lucide="check"></i>Up to 3 weekly classes</li>
<li className="flex items-center gap-2"><i className="size-4" data-lucide="check"></i>Priority casting</li>
<li className="flex items-center gap-2"><i className="size-4" data-lucide="check"></i>Competition prep add-on</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-black transition-colors" href="#enroll">
              Choose Dedicated
            </a>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2">
<i className="size-5 text-slate-700" data-lucide="infinity"></i>
<h3 className="text-lg font-medium tracking-tight">Unlimited</h3>
</div>
<p className="mt-2 text-sm text-slate-600">All classes. Best for pre-pro and competition teams.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">$159</span>
<span className="text-slate-600 text-sm">/month</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="size-4" data-lucide="check"></i>Unlimited classes</li>
<li className="flex items-center gap-2"><i className="size-4" data-lucide="check"></i>Mentorship sessions</li>
<li className="flex items-center gap-2"><i className="size-4" data-lucide="check"></i>Competition coaching</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#enroll">
              Choose Unlimited
            </a>
</div>
</div>
<div className="mt-6 text-center text-sm text-slate-600">
          Family discounts and scholarships available. Ask us for details.
        </div>
</div>
</section>

<section className="border-t border-slate-200" id="collab">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Collaborations</h2>
<p className="mt-2 text-slate-600">Workshops and co-teaching with guest instructors and local studios.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#contact">
<i className="size-4" data-lucide="handshake"></i>
            Propose a Collaboration
          </a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-4">
<img alt="Guest teacher" className="h-14 w-14 rounded-md object-cover border border-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-base font-medium tracking-tight">Maya Chen</h3>
<p className="text-sm text-slate-600">Contemporary / Floorwork</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Signature workshop on momentum and release, open to teens and adults.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
<i className="size-4" data-lucide="calendar"></i> Oct 12, 2–5p
            </div>
</div>
<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-4">
<img alt="Guest teacher" className="h-14 w-14 rounded-md object-cover border border-slate-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-base font-medium tracking-tight">Devin Blue</h3>
<p className="text-sm text-slate-600">Hip-Hop / Choreography</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Crew intensive covering musicality, textures, and stage presence.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
<i className="size-4" data-lucide="calendar"></i> Nov 3, 12–4p
            </div>
</div>
<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-4">
<img alt="Guest teacher" className="h-14 w-14 rounded-md object-cover border border-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-base font-medium tracking-tight">Studio LX</h3>
<p className="text-sm text-slate-600">Partner Studio</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-700">Exchange program for cross-training and combined showcases.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
<i className="size-4" data-lucide="map-pin"></i> Downtown Arts Hub
            </div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="competitions">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Competitions &amp; Specials</h2>
<p className="mt-2 text-slate-600">Select events beyond our annual shows—auditions required for some items.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-black transition-colors" href="#enroll">
<i className="size-4" data-lucide="clipboard-check"></i>
            Join Team Prep
          </a>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2 text-slate-700">
<i className="size-5" data-lucide="trophy"></i>
<h3 className="text-lg font-medium tracking-tight">City Dance Cup</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Group and solo entries, contemporary and hip-hop divisions.</p>
<div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
<span className="inline-flex items-center gap-2"><i className="size-4" data-lucide="calendar"></i> Mar</span>
<span className="inline-flex items-center gap-2"><i className="size-4" data-lucide="map-pin"></i> River Center</span>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2 text-slate-700">
<i className="size-5" data-lucide="music"></i>
<h3 className="text-lg font-medium tracking-tight">Arts in the Park</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Outdoor community stage, mixed styles, family-friendly event.</p>
<div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
<span className="inline-flex items-center gap-2"><i className="size-4" data-lucide="calendar"></i> Jun</span>
<span className="inline-flex items-center gap-2"><i className="size-4" data-lucide="map-pin"></i> Greenview</span>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow">
<div className="flex items-center gap-2 text-slate-700">
<i className="size-5" data-lucide="mic"></i>
<h3 className="text-lg font-medium tracking-tight">Guest Spotlight</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Special invitation performances with partner studios and artists.</p>
<div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
<span className="inline-flex items-center gap-2"><i className="size-4" data-lucide="calendar"></i> Rolling</span>
<span className="inline-flex items-center gap-2"><i className="size-4" data-lucide="map-pin"></i> Various</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="director">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid lg:grid-cols-3 gap-10 items-start">
<div className="lg:col-span-1">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Director</h2>
<p className="mt-2 text-slate-600">Guiding the studio’s vision for artistry, discipline, and joy in movement.</p>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-5 gap-8">
<div className="sm:col-span-2">
<div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-slate-200">
<img alt="Dance director portrait" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="sm:col-span-3">
<h3 className="text-xl font-medium tracking-tight">Aria Bennett</h3>
<p className="mt-2 text-slate-700 text-sm leading-6">
                With over 12 years of professional performance and choreography, Aria founded the studio to create rigorous yet welcoming training. Her work has appeared at regional festivals and national competitions, with a focus on storytelling and musicality.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="size-4" data-lucide="award"></i> Regional Choreography Award (2023)</li>
<li className="flex items-center gap-2"><i className="size-4" data-lucide="trophy"></i> National Finalists (2022, 2024)</li>
<li className="flex items-center gap-2"><i className="size-4" data-lucide="graduation-cap"></i> BFA in Dance Performance</li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#contact">
<i className="size-4" data-lucide="mail"></i>
                  Contact
                </a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-black transition-colors" href="#highlights">
<i className="size-4" data-lucide="play"></i>
                  Director’s Reel
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="enroll">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to dance?</h2>
<p className="mt-2 text-slate-600">Tell us your goals and we’ll recommend the right track and classes.</p>
<div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
<form className="grid gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-700">First name</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Alex" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-700">Last name</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Rivera" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-700">Email</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm text-slate-700">Phone</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="(###) ###-####" type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-700">Track</label>
<select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400">
<option>Kids (6–12)</option>
<option>Teens (13–17)</option>
<option>Adults (18+)</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-700">Experience</label>
<select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400">
<option>Beginner</option>
<option>Intermediate</option>
<option>Advanced</option>
</select>
</div>
</div>
<div>
<label className="block text-sm text-slate-700">Notes</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Goals, preferred styles, availability..." rows="4"></textarea>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-black transition-colors" type="submit">
<i className="size-4" data-lucide="send"></i>
                  Submit
                </button>
</form>
</div>
</div>
<div className="lg:pl-8" id="contact">
<div className="rounded-xl border border-slate-200 bg-white p-6">
<h3 className="text-lg font-medium tracking-tight">Contact</h3>
<p className="mt-2 text-sm text-slate-600">We’ll get back within 1–2 business days.</p>
<div className="mt-4 space-y-3 text-sm text-slate-700">
<div className="flex items-center gap-3">
<i className="size-4" data-lucide="mail"></i>
                  hello@danceschool.example
                </div>
<div className="flex items-center gap-3">
<i className="size-4" data-lucide="phone"></i>
                  (555) 123-4567
                </div>
<div className="flex items-center gap-3">
<i className="size-4" data-lucide="map-pin"></i>
                  123 Studio Ave, Arts District
                </div>
</div>
<div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg border border-slate-200">
<img alt="Studio interior" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#">
<i className="size-4" data-lucide="instagram"></i>
                  Instagram
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors" href="#">
<i className="size-4" data-lucide="facebook"></i>
                  Facebook
                </a>
</div>
</div>
<div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2 text-slate-700">
<i className="size-5" data-lucide="info"></i>
<h4 className="text-base font-medium tracking-tight">Policies</h4>
</div>
<ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
<li>Drop-ins allowed where space permits.</li>
<li>Make-up classes available within the same month.</li>
<li>Tuition billed monthly; cancel anytime before next cycle.</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md border border-slate-300 grid place-items-center text-slate-900 tracking-tighter text-sm font-semibold">DS</div>
<div className="text-base font-medium tracking-tight">Dance School</div>
</div>
<p className="mt-3 text-sm text-slate-600 max-w-md">
              Training dancers to move with intention and perform with confidence.
            </p>
</div>
<div>
<h5 className="text-sm font-medium tracking-tight">Explore</h5>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li><a className="hover:underline" href="#highlights">Highlights</a></li>
<li><a className="hover:underline" href="#events">Annual Events</a></li>
<li><a className="hover:underline" href="#schedule">Schedule</a></li>
<li><a className="hover:underline" href="#fees">Fees</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium tracking-tight">More</h5>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li><a className="hover:underline" href="#collab">Collaborations</a></li>
<li><a className="hover:underline" href="#competitions">Competitions</a></li>
<li><a className="hover:underline" href="#director">Director</a></li>
<li><a className="hover:underline" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600">
<p>© <span id="year"></span> Dance School. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:underline" href="#">Terms</a>
<a className="hover:underline" href="#">Privacy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
