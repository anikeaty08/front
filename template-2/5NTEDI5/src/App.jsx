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



    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Lucide Icons
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Calendar
    const calendarEl = document.getElementById('calendar');
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 0-6
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const events = {
      4: { label: 'Seed Starting', color: 'bg-green-200' },
      15: { label: 'Balcony Gardening', color: 'bg-green-200' },
      19: { label: 'Organic Pest', color: 'bg-green-200' }
    };

    // Header row (Sun-Sat)
    ['S','M','T','W','T','F','S'].forEach(d => {
      const cell = document.createElement('div');
      cell.className = 'text-xs font-medium bg-green-100 text-green-800 p-2 text-center';
      cell.textContent = d;
      calendarEl.appendChild(cell);
    });

    // Blank cells before first day
    for (let i = 0; i < firstDay; i++) {
      const cell = document.createElement('div');
      cell.className = 'p-4 bg-white';
      calendarEl.appendChild(cell);
    }

    // Days with events
    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement('div');
      cell.className = 'relative p-4 bg-white hover:bg-green-50 transition text-sm';
      const span = document.createElement('span');
      span.textContent = day;
      cell.appendChild(span);

      if (events[day]) {
        cell.classList.add(events[day].color);
        const badge = document.createElement('div');
        badge.className = 'absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] bg-green-700 text-white px-1.5 py-0.5 rounded';
        badge.textContent = events[day].label;
        cell.appendChild(badge);
      }
      calendarEl.appendChild(cell);
    }

    // Chart.js ‑ Compost Collected
    const ctx = document.getElementById('compostChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Lbs Collected',
          data: [120, 140, 180, 220, 260, 300, 280, 310, 330, 350, 360, 400],
          borderColor: '#15803d',
          backgroundColor: 'rgba(34,197,94,0.15)',
          tension: 0.35,
          fill: true,
          pointRadius: 3,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            grid: { color: '#d1d5db30' },
            ticks: { color: '#334155', font: { size: 11 } }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#334155', font: { size: 11 } }
          }
        }
      }
    });

    // Simple fade/slide animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0');
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-fade-in, .animate-slide-in').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(el);
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
      

<header className="sticky top-0 z-40 backdrop-blur bg-green-50/80 border-b border-green-100">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<a className="text-2xl font-semibold tracking-tight text-green-800" href="#">CSC</a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-green-700 transition" href="#workshops">Workshops</a>
<a className="hover:text-green-700 transition" href="#produce">Produce Boxes</a>
<a className="hover:text-green-700 transition" href="#compost">Compost</a>
<a className="hover:text-green-700 transition" href="#events">Events</a>
<a className="hover:text-green-700 transition" href="#contact">Contact</a>
</nav>
<button className="md:hidden outline-none" id="mobileBtn">
<i className="w-6 h-6 text-green-800" data-lucide="menu"></i>
</button>
</div>

<div className="hidden flex-col gap-4 px-6 pb-4 md:hidden" id="mobileMenu">
<a className="hover:text-green-700" href="#workshops">Workshops</a>
<a className="hover:text-green-700" href="#produce">Produce Boxes</a>
<a className="hover:text-green-700" href="#compost">Compost</a>
<a className="hover:text-green-700" href="#events">Events</a>
<a className="hover:text-green-700" href="#contact">Contact</a>
</div>
</header>

<section className="relative">
<img alt="" className="w-full h-[60vh] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-green-900/50"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
<h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight mb-4 animate-fade-in">
        Grow Together in the City
      </h1>
<p className="text-green-100 max-w-xl md:text-lg mb-8 animate-fade-in delay-100">
        Workshops, fresh local produce, and composting—rooted in community.
      </p>
<div className="flex gap-4 animate-fade-in delay-200">
<a className="px-6 py-3 bg-green-600/90 text-white rounded-md shadow hover:bg-green-700 transition" href="#workshops">
          Upcoming Workshops
        </a>
<a className="px-6 py-3 border border-green-300/70 text-white rounded-md hover:bg-white/10 transition" href="#contact">
          Join the Co-op
        </a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16" id="workshops">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-green-900 mb-10 animate-fade-in">
      Hands-on Workshops
    </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-lg shadow-sm border border-green-100 animate-slide-in">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-md bg-green-100">
<i className="w-6 h-6 text-green-700 stroke-1.5" data-lucide="sprout"></i>
</div>
<h3 className="font-medium text-green-800">Seed Starting</h3>
</div>
<p className="text-sm leading-relaxed mb-6">
          Learn to start veggies from seed, create soil blocks, and nurture sprouts.
        </p>
<span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Sat · 10 AM
        </span>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm border border-green-100 animate-slide-in delay-100">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-md bg-green-100">
<i className="w-6 h-6 text-green-700 stroke-1.5" data-lucide="watering-can"></i>
</div>
<h3 className="font-medium text-green-800">Balcony Gardening</h3>
</div>
<p className="text-sm leading-relaxed mb-6">
          Turn small spaces into lush edible gardens with container strategies.
        </p>
<span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Sun · 2 PM
        </span>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm border border-green-100 animate-slide-in delay-200">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-md bg-green-100">
<i className="w-6 h-6 text-green-700 stroke-1.5" data-lucide="leaf"></i>
</div>
<h3 className="font-medium text-green-800">Organic Pest Control</h3>
</div>
<p className="text-sm leading-relaxed mb-6">
          Identify urban garden pests and defend your crops naturally.
        </p>
<span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Wed · 6 PM
        </span>
</div>
</div>
</section>

<section className="bg-amber-50/40 border-y border-amber-100" id="produce">
<div className="mx-auto max-w-7xl px-6 py-16 flex flex-col lg:flex-row gap-12 items-center">
<div className="flex-1 animate-fade-in">
<img alt="Produce Box" className="rounded-lg shadow-lg border border-white/60" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<div className="flex-1 animate-fade-in delay-100">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-900 mb-6">
          Seasonal Produce Boxes
        </h2>
<p className="mb-6 leading-relaxed">
          Subscribe for weekly or bi-weekly boxes packed with hyper-local vegetables, herbs, and
          microgreens harvested the morning of delivery.
        </p>
<ul className="mb-8 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-green-700 stroke-1.5" data-lucide="check-circle"></i>
            2–3 person & family-sized options
          </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-green-700 stroke-1.5" data-lucide="check-circle"></i>
            Swap items anytime
          </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-green-700 stroke-1.5" data-lucide="check-circle"></i>
            Free doorstep delivery within 5 mi
          </li>
</ul>
<a className="inline-flex items-center gap-1 px-6 py-3 bg-amber-700 text-white rounded-md shadow hover:bg-amber-800 transition" href="#contact">
          Subscribe
          <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16" id="compost">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 order-2 md:order-1 animate-fade-in">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-green-900 mb-6">
          Community Compost Drop-off
        </h2>
<p className="mb-6 leading-relaxed">
          Divert food scraps from landfill and enrich our garden beds. Drop off your compostables and
          help us close the nutrient loop.
        </p>
<div className="grid grid-cols-2 gap-4">
<div className="border border-green-100 p-4 rounded-lg">
<p className="font-medium text-green-700">Mon – Fri</p>
<p className="text-sm">7 AM – 7 PM</p>
</div>
<div className="border border-green-100 p-4 rounded-lg">
<p className="font-medium text-green-700">Sat & Sun</p>
<p className="text-sm">9 AM – 5 PM</p>
</div>
</div>
</div>
<div className="flex-1 order-1 md:order-2 animate-fade-in delay-100">
<img alt="Compost" className="rounded-lg shadow-lg border border-white/60" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80" />
</div>
</div>
</section>

<section className="bg-green-50 border-y border-green-100" id="events">
<div className="mx-auto max-w-7xl px-6 py-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-green-900 mb-8 animate-fade-in">
        Upcoming Events
      </h2>
<div className="overflow-x-auto">
<div className="grid grid-cols-7 gap-px rounded-lg overflow-hidden border border-green-100 animate-slide-in" id="calendar"></div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16">
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="flex-1 animate-fade-in">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-green-900 mb-2">
          Compost Collected
        </h2>
<p className="mb-6 text-sm text-zinc-600">
          Monthly totals (lbs) for the current year
        </p>
<div className="relative shadow rounded-lg border border-green-100 p-4">
<canvas className="w-full" height="280" id="compostChart"></canvas>
</div>
</div>
<div className="flex-1 animate-fade-in delay-100">
<img alt="" className="rounded-lg shadow-lg border border-white/60" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
</div>
</section>

<section className="bg-amber-50/40 border-y border-amber-100">
<div className="mx-auto max-w-7xl px-6 py-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-900 mb-8 animate-fade-in">
        From Our Feed
      </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-in">

<a className="group relative" href="https://instagram.com" target="_blank">
<img alt="" className="rounded-lg shadow-md group-hover:opacity-80 transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</a>
<a className="group relative" href="https://instagram.com" target="_blank">
<img alt="" className="rounded-lg shadow-md group-hover:opacity-80 transition" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</a>
<a className="group relative" href="https://instagram.com" target="_blank">
<img alt="" className="rounded-lg shadow-md group-hover:opacity-80 transition" src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80" />
</a>
<a className="group relative" href="https://instagram.com" target="_blank">
<img alt="" className="rounded-lg shadow-md group-hover:opacity-80 transition" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</a>
</div>
</div>
</section>

<footer className="bg-green-900 text-green-100 mt-auto" id="contact">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="flex flex-col md:flex-row gap-12">
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight mb-4">City Soil Co-op</h3>
<p className="text-sm leading-relaxed mb-6">
            123 Greenway Ln<br />
            Urbanville, ST 00000<br />
            (555) 123-4567
          </p>
<div className="flex gap-4">
<a className="hover:text-white transition" href="#"><i className="w-5 h-5 stroke-1.5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition" href="#"><i className="w-5 h-5 stroke-1.5" data-lucide="facebook"></i></a>
<a className="hover:text-white transition" href="#"><i className="w-5 h-5 stroke-1.5" data-lucide="mail"></i></a>
</div>
</div>
<div className="flex-1">
<h4 className="font-medium mb-4">Drop us a note</h4>
<form className="space-y-4">
<input className="w-full bg-green-800/40 text-green-100 placeholder-green-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-green-500 outline-none" placeholder="Name" type="text" />
<input className="w-full bg-green-800/40 text-green-100 placeholder-green-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-green-500 outline-none" placeholder="Email" type="email" />
<textarea className="w-full bg-green-800/40 text-green-100 placeholder-green-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-green-500 outline-none" placeholder="Message" rows="4"></textarea>
<button className="px-6 py-3 bg-green-700 rounded-md shadow hover:bg-green-600 transition" type="submit">
              Send
            </button>
</form>
</div>
</div>
<div className="mt-16 border-t border-green-800 pt-6 text-xs text-green-400">
        © <span id="year"></span> City Soil Co-op. All rights reserved.
      </div>
</div>
</footer>



    </>
  );
}
