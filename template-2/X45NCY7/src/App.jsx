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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

      (function() {
        const $ = (sel, root = document) => root.querySelector(sel);
        const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
        const html = document.documentElement;

        // Year
        $('#year').textContent = new Date().getFullYear();

        // Theme handling
        const themeKey = 'teele:theme';
        function applyTheme(mode) {
          if (mode === 'dark') {
            html.classList.add('dark');
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0F172A'); // slate-950
          } else {
            html.classList.remove('dark');
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#1976D2');
          }
          try { localStorage.setItem(themeKey, mode); } catch {}
          if (window.lucide) lucide.createIcons();
          // Re-render weather chart to match theme
          if (window._weather && window._weather.chartData) renderWeather(window._weather.chartData);
        }
        const savedTheme = localStorage.getItem(themeKey);
        applyTheme(savedTheme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
        $('#themeToggle')?.addEventListener('click', () => applyTheme(html.classList.contains('dark') ? 'light' : 'dark'));
        $('#themeToggleMobile')?.addEventListener('click', () => applyTheme(html.classList.contains('dark') ? 'light' : 'dark'));

        // Mobile menu
        $('#mobileMenuBtn')?.addEventListener('click', () => {
          $('#mobileDrawer')?.classList.toggle('hidden');
        });

        // Animate on scroll
        const io = new IntersectionObserver((entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.remove('opacity-0', 'translate-y-4');
              io.unobserve(e.target);
            }
          }
        }, { threshold: 0.2 });
        $$('[data-animate]').forEach(el => io.observe(el));

        // Suggestions for From/To
        function setupSuggest(inputId, menuId, attr) {
          const input =inputId);
          const menu = $(menuId);
          if (!input || !menu) return;
          input.addEventListener('focus', () => menu.classList.remove('hidden'));
          input.addEventListener('input', () => menu.classList.remove('hidden'));
          input.addEventListener('blur', () => setTimeout(() => menu.classList.add('hidden'), 150));
          menu.addEventListener('click', (e) =>            const btn = e.target.closest('button');
            if (!btn) return;
            input.value = btn.getAttribute(attr) || btn.textContent.trim();
            menu.classList.add('hidden');
          });
        }
        setupSuggest('#fromInput', '#fromSuggest', 'data-origin');
        setupSuggest('#toInput', '#toSuggest', 'data-dest');

        // Sorting chips -> simple reorder by tag
        const cardsContainer = $('#results .mt-4.grid');
        const sortChips $$('.sort-chip');
        function reorder(tag) {
          if (!cardsContainer) return;
          const cards =$('.result-card', cardsContainer);
          const matched = cards.filter(c => (c.dataset.tags || '').includes(tag));
          const other = cards.filter(c => !(c.dataset.tags || '').includes(tag));
          cardsContainer.innerHTML = '';
          [...matched, ...other].forEach(c => cardsContainer.appendChild(c));
        }
        sortChips.forEach(chip => {
          chip.addEventListener('click', () => {
            sortChips.forEach(c => c.setAttribute('aria-selected', 'false'));
            chip.setAttribute('aria-selected', 'true');
            const tag = chip.dataset.sort;
            reorder(tag);
          });
        });

        // Include nearby hubs toggle
        const hubsToggle = $('#altStartsToggle');
        hubsToggle?.addEventListener('click', () => {
          const pressed = hubsToggle.getAttribute('aria-pressed') === 'true';
          hubsToggle.setAttribute('aria-pressed', String(!pressed));
        });

        // Search flow with weather
        const resultsSection = $('#results');
        const weatherCard = $('#weatherCard');
        const destLabel = $('#destLabel');
        const searchBtn = $('#searchBtn');

        function parseDateRange(str) {
          if (!str) return null;
          const parts = str.split('to').map(s => s.trim());
          if (parts.length === 2) {
 const start = new Date(parts[0]);
            const end = new Date(parts[1]);
            return isNaN(start) || isNaN(end) ? null : { start, end };
          }
          const single = new Date(str.trim());
          return isNaN(single) ? null : { start: single, end: single };
        }

        // Weather rendering
        window._weather = { chart: null, chartData: null };
        function renderWeather(data) {
          window._weather.chartData = data;
          const ctx = document.getElementById('weatherChart').getContext('2d');
          const dark = html.classList.contains('dark');
          const grid = dark ? 'rgba(148,163,184,0.2)' : 'rgba(100,116,139,0.2)';
          const tick = dark ? '#CBD5E1' : '#475569';
          const line = dark ? '#60A5FA' : '#2563EB';
          if (window._weather.chart) {
            window._weather.chart.destroy();
 }
          window._weather.chart = new Chart(ctx, {
            type: '',
            data: {
              labels: data.labels,
              datasets: [{
                label: 'Temp °C',
                data: data.temps,
                tension: 0.35,
                borderColor: line,
                backgroundColor: 'rgba(37,99,235,0.12)',
                fill: true,
                pointRadius: 3,
 }]
            },
            options: {
              responsive: true,
              scales: {
                y: { grid: { color: grid }, ticks: { color: tick } },
                x: { grid: { display: false }, ticks: { color: tick } }
              },
              plugins: {
                legend: { display: false },
                tooltip: { intersect: false, mode: 'index' }
              }
            }
          });
        }

        function mockWeather(dest, range) {
          const days = 6;
          const base = 12 + Math.floor(Math.random() * 8);
          const labels = Array.from({ length: days }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() + i);
            return d.toLocaleDateString(undefined, { weekday: 'short' });
          });
          const temps = Array.from({ length: days }, (_, i) => base + Math.round(Math.sin(i / 2) * 4) + Math.round((Math.random() - 0.) * 2));
          const meta = range
            ? `${dest} • ${range.start.toLocaleDateString()} – ${range.end.toLocaleDateString()}`
            : `${dest} • Next ${days} days`;
          return { labels, temps, meta, summary: `Mild with highs around ${Math.max(...temps)}°C, chance of light rain mid‑week.` };
        }

        searchBtn?.addEventListener('click', () => {
          const dest = $('#to').value.trim() || 'Tokyo';
 destLabel.textContent = dest.replace(/\s*\(.*\)\s*/,'');
          resultsSection?.classList.remove('hidden');
          weatherCard?.classList.remove('hidden');
          // Weather
          const range = parseDateRange($('#dateInput').value.trim());
          const w = mockWeather(destLabel.textContent, range);
          $('#weatherMeta').textContent = w.meta;
          $('#weatherSummary').textContent = w.summary;
          renderWeather({ labels: w.labels, temps: w.temps });
          // Scroll into view
          resultsSection.scrollIntoView behavior: 'smooth', block: 'start' });
        });

        // Save & Share on cards
        function getTripFromCard(card) {
          const title = card.querySelector('h3')?.textContent?.() || 'Saved trip';
          const price = card.querySelector('.text-lg.font')?.textContent?.trim() || '';
          return { id: title, title, price, ts: Date.now() };
        }

        const saveButtons = $$('[data-action="save"]');
        saveButtons.forEach(btn btnEventListener('click', () => {
          const card = btn.closest('.result-card');
          if (card) saveTrip(getTripFromCard(card));
        }));

        const shareButtons = $$('[data-action="share"]');
        shareButtons.forEach(btn => btn.addEventListener('click', async () => {
          const card = btn.closest('.result-card');
          const trip = getTripFromCard(card);
          const url = new URL(location.href);
          url.hash = '#results';
          url.searchParams.set('route', encodeURIComponent(trip.title));
          try {
            await navigator.clipboard.writeText(url.toString());
            toast('Link copied to clipboard');
          } catch {
            toast('Copy failed — select the address bar to share');
 }
        }));

        // Toast
        let toastTimer;
        function toast(msg) {
          let el = $('#toast');
          if (!el) {
            el = document.createElement('div');
            el.id = 'toast';
            el.className = 'fixed bottom-4 left-1/2 -translate-x-1/2-[60] px-3 py-2 rounded-md bg-s-900 text-white text-sm shadow-lg';
            el.setAttribute('role', 'status');
            document.body.appendChild(el);
          }
          el.textContent = msg;
          el.classList.remove('opacity-0');
 clearTimeout(toastTimer);
          toastTimer setTimeout(() => { el.classList.add('opacity-0'); }, 2000);
        }

        // Saved trips
        const tripsKey = 'teele:savedTrips';
        function readTrips() {
          try { return JSON.parse(localStorage.getItem(tripsKey)) || []; } catch { return []; }
        }
        function writeTrips(arr) {
          try { localStorage.setItem(trKey, JSON.stringify(arr)); } catch {}
        }
        function saveTrip(trip) {
          const current = readTrips();
          if (!current.find => t.id === trip.id)) current.unshift(trip);
          writeTrips(current);
          renderSavedTrips();
          toast('Saved to My Trips');
        }
        function removeTrip(id) {
          const next = readTrips().filter(t => t.id !== id);
          writeTrips(next);
          renderSavedTrips();
        }
        function renderSavedTrips() {
          const grid = $('#savedTrips');
          if (!grid) return;
          const data = readTrips();
          grid.innerHTML = '';
          if (data.length === 0) {
            grid.innerHTML = '<div class="col-span-full text-sm text-slate-600 dark:text-slate-400">No saved trips yet. Save an itinerary from Results.</div>';
            return;
          }
          data.forEach(t => {
            const card = document.createElement('article');
            card.className = 'rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-2';
            card.innerHTML = `
              <div class="flex items-center justify-between gap-2">
                <h4 class="font tracking-tight">${t.title}</h4>
                <button class="remove-trip inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" aria-label="Remove trip" data-id="${t.id}">
                  <i data-lucide="trash-2" class="h-4 w-4"></i>
                </button>
              </div>
              <div class="text-sm text-slate-600 dark:text-slate-400">${t.price}</div>
              <div class="text-xs text-slate-500 dark:text-slate-400">Saved ${new Date(t.ts).toLocaleString()}</div>
              <div class="mt-2 flex items-center gap-2">
                <a href="#results" class="text-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate800/60">
                  <i data-lucide="route" class="h-4 w-4"></i> View
                </a>
              </div>
            `;
            grid.appendChild(card);
          });
          if (window.lucide) lucide.createIcons();
          $$('.remove-trip', grid).forEach(btn => {
            btn.addEventListener('click', () => removeTrip(btn.dataset.id));
          });
        }
        renderSavedTrips();

        // Details overlay
        const overlay = $('#detailsOverlay');
        const panel = overlay?.querySelector('[data-panel]');
        function openDetails(id) {
          overlay.classList.remove('hidden');
          requestAnimationFrame(() => panel.setAttribute('data-open', 'true'));
          // Populate title/body based on id
          const map = {
            route1: {
              title: 'Tallinn → Tokyo • via Helsinki (erry)',
              price: '€678'
            },
            route2: {
              title: 'Tallinn → Tokyo • via Rigabus)',
              price: '€529'
            },
            route3: {
 title: 'Tallinn → Tokyo • Premium Economy',
              price: '€799'
            }
          };
          const info = map[id] || { title: 'Route details', price: '' };
          $('#detailsTitle').textContent = info.title;
          // Update price in breakdown total if present
          const total = $$('#detailsBody dl div dd').pop();
          if (total) total.textContent = info.price || total.textContent;
          if (window.lucide) lucide.createIcons();
        }
        function closeDetails() {
          panel.removeAttribute('data-open');
          setTimeout(() => overlay.classList.add('hidden'), 250);
        }
        $$('.view-details').forEach(btn => {
          btn.addEventListener('click', () => open(btn.dataset.id));
        });
        overlay?.addEventListener('click', (e) => {
          if (e.target.closest('[data-close]') || e.target.hasAttribute('data-close')) closeDetails();
          if (e === overlay.querySelector('[data-close]') || e.target === overlay.querySelector('.absolute.inset-0')) closeDetails();
          if (e.target.matches('.absolute.inset-0')) closeDetails();
        });
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeDetails();
        });
        $('#saveDetail')?.addEventListener('click', () => {
          const title = $('#detailsTitle').textContent.trim();
          saveTrip({ id: title, title, price: '', ts: Date.now() });
        });
        $('[data-copy-details]')?.addEventListener('click', async () => {
          const title = $('#detailsTitle').textContent.trim();
          const url = new URL(location.href);
          url.hash = '#results';
          url.searchParams.set('route encodeURIComponent(title));
          try {
            await navigator.clipboard.writeText(url.toString());
            toast('Details link copied');
          } catch {}
        });

        // Initialize lucide icons
        if (window.lucide) lucide.createIcons();
      })();
    
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
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<a aria-label="Teele Home" className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-blue-600 text-white flex items-center justify-center text-sm tracking-tight font-medium">
                TE
              </div>
<span className="text-xl font-semibold tracking-tight">Teele</span>
</a>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#home">Home</a>
<a className="px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#results">Results</a>
<a className="px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#deals">Deals</a>
<a className="px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#blog">Blog</a>
<a className="px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#about">About</a>
<a className="px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#mytrips">My Trips</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<button aria-label="Toggle theme" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" id="themeToggle" type="button">
<i className="h-4 w-4 block dark:hidden" data-lucide="moon"></i>
<i className="h-4 w-4 hidden dark:block" data-lucide="sun"></i>
</button>
<button aria-label="Region and currency" className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60" type="button">
<i className="h-4 w-4" data-lucide="globe"></i>
<span>EE • EUR</span>
</button>
<button className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" type="button">
<i className="h-4 w-4" data-lucide="log-in"></i>
<span>Sign in</span>
</button>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200 dark:border-slate-800" id="mobileDrawer">
<nav className="px-4 py-3 grid gap-1 text-sm">
<a className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#home">Home</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#results">Results</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#deals">Deals</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#blog">Blog</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#about">About</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60" href="#mytrips">My Trips</a>
<div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
<div className="flex items-center gap-2">
<button aria-label="Toggle theme" className="h-9 w-9 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center justify-center" id="themeToggleMobile" type="button">
<i className="h-4 w-4 block dark:hidden" data-lucide="moon"></i>
<i className="h-4 w-4 hidden dark:block" data-lucide="sun"></i>
</button>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 w-max">
<i className="h-4 w-4" data-lucide="globe"></i>
              EE • EUR
            </button>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 w-max">
<i className="h-4 w-4" data-lucide="log-in"></i>
              Sign in
            </button>
</div>
</nav>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<section className="py-8 sm:py-12" id="home">
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div className="opacity-0 translate-y-4 transition-all duration-700" data-animate="">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Plan door‑to‑door trips from Estonia
            </h1>
<p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
              Compare flights, buses, ferries, and taxis from Tallinn, Tartu, Helsinki, and Riga. See time, cost, and effort—book in a few clicks.
            </p>

<div className="mt-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="grid gap-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300" htmlFor="fromInput">From</label>
<div className="relative">
<i className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-lucide="map-pin"></i>
<input aria-label="From origin" autocomplete="off" className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 pl-9 pr-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" id="fromInput" value="Tallinn (TLL)" />

<div className="hidden absolute z-20 mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md shadow-sm overflow-hidden" id="fromSuggest">
<button className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-origin="Tallinn (TLL)" type="button">Tallinn (TLL)</button>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-origin="Tartu (TAY)" type="button">Tartu (TAY)</button>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-origin="Helsinki (HEL) • via ferry" type="button">Helsinki (HEL) • via ferry</button>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-origin="Riga (RIX) • via bus" type="button">Riga (RIX) • via bus</button>
</div>
</div>
</div>

<div className="grid gap-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300" htmlFor="toInput">To</label>
<div className="relative">
<i className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-lucide="search"></i>
<input aria-label="Destination" autocomplete="off" className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 pl-9 pr-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" id="toInput" placeholder="Search destination (e.g., Tokyo)" />

<div className="hidden absolute z-20 mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md shadow-sm overflow-hidden" id="toSuggest">
<button className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-dest="Tokyo (TYO)" type="button">Tokyo (TYO)</button>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-dest="Lisbon (LIS)" type="button">Lisbon (LIS)</button>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-dest="New York (NYC)" type="button">New York (NYC)</button>
<button className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-dest="Bangkok (BKK)" type="button">Bangkok (BKK)</button>
</div>
</div>
</div>

<div className="grid gap-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300" htmlFor="dateInput">Dates</label>
<div className="relative">
<i className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-lucide="calendar"></i>
<input aria-label="Dates" className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 pl-9 pr-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" id="dateInput" placeholder="Flexible or set dates (YYYY-MM-DD to YYYY-MM-DD)" type="text" />
</div>
</div>

<div className="grid gap-1.5">
<label className="text-xs font-medium text-slate-700 dark:text-slate-300" htmlFor="paxInput">Travelers</label>
<div className="relative">
<i className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-lucide="user"></i>
<input aria-label="Travelers" className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 pl-9 pr-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" id="paxInput" type="text" value="1 Adult, Economy" />
</div>
</div>
</div>
<div className="px-4 sm:px-5 pb-4 sm:pb-5 flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
<i className="h-4 w-4 text-slate-500" data-lucide="info"></i>
                  Consider nearby hubs: Helsinki (ferry), Riga (bus), Tartu (car).
                </div>
<button className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" id="searchBtn">
<i className="h-4 w-4" data-lucide="search"></i>
                  Search
                </button>
</div>
</div>

<div className="mt-6 grid gap-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight">Recent searches</h2>
<button className="text-sm text-blue-700 hover:underline">Clear</button>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-sm">Tallinn → Lisbon</button>
<button className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-sm">Tallinn → Tokyo</button>
<button className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-sm">Tartu → Berlin</button>
</div>
</div>
</div>

<div className="opacity-0 translate-y-4 transition-all duration-700 delay-150" data-animate="">
<div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight">Curated deals</h2>
<a className="text-sm text-blue-700 hover:underline" href="#deals">View all</a>
</div>
<div className="p-4 grid sm:grid-cols-2 gap-4">

<article className="group rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[3/2] overflow-hidden">
<img alt="Tokyo city" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Tallinn → Tokyo</h3>
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Agency</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">From €589 • via Helsinki</p>
</div>
</article>

<article className="group rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[3/2] overflow-hidden">
<img alt="Lisbon coast" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Tallinn → Lisbon</h3>
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Package</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">3 nights + flight • €329</p>
</div>
</article>

<article className="group rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[3/2] overflow-hidden">
<img alt="New York skyline" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Riga → New York</h3>
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Agency</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">From €449 • Lux Express</p>
</div>
</article>

<article className="group rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[3/2] overflow-hidden">
<img alt="Helsinki ferry" className="h-full w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Tallinn ↔ Helsinki</h3>
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Ferry</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">From €19 • Tallink</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 sm:py-10 hidden" id="results">

<div className="sticky top-16 z-30 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
<div className="py-3">
<div className="flex flex-wrap items-center gap-2">
<div className="text-sm text-slate-700 dark:text-slate-300 px-3">Sort:</div>
<div className="flex items-center gap-2 px-3">
<button aria-selected="true" className="sort-chip px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-sm aria-selected:bg-blue-600 aria-selected:text-white aria-selected:border-blue-600" data-sort="fastest">Fastest</button>
<button className="sort-chip px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-sm" data-sort="cheapest">Cheapest</button>
<button className="sort-chip px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-sm" data-sort="comfort">Most comfortable</button>
<button className="sort-chip px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-sm" data-sort="effort">Lowest effort</button>
</div>
<div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-2"></div>
<button aria-pressed="true" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-sm" id="altStartsToggle">
<i className="h-4 w-4" data-lucide="shuffle"></i>
                Include nearby hubs
              </button>
<div className="ml-auto flex items-center gap-2 pr-2 text-sm text-slate-600 dark:text-slate-400">
<i className="h-4 w-4" data-lucide="map"></i>
                Tallinn → <span className="font-medium" id="destLabel">Tokyo</span> • 12 options
              </div>
</div>
</div>
</div>

<div className="mt-4 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hidden" id="weatherCard">
<div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-700" data-lucide="cloud-sun"></i>
<h3 className="font-medium tracking-tight">Weather forecast</h3>
</div>
<div className="text-sm text-slate-600 dark:text-slate-400" id="weatherMeta"></div>
</div>
<div className="p-4 grid gap-3">
<p className="text-sm text-slate-600 dark:text-slate-400" id="weatherSummary">Loading forecast…</p>
<div>
<div><canvas aria-label="Weather forecast chart" height="180" id="weatherChart" role="img" width="560"></canvas></div>
</div>
</div>
</div>

<div className="mt-4 grid gap-4">

<article className="result-card rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition group" data-tags="fastest comfort">
<div className="p-4 sm:p-5 grid gap-4">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Fastest</span>
<h3 className="font-medium tracking-tight">Tallinn → Tokyo</h3>
<span className="text-xs text-slate-500">door‑to‑door via Helsinki (ferry)</span>
</div>
<div className="text-right">
<div className="text-lg font-semibold tracking-tight">€678</div>
<div className="text-xs text-slate-600 dark:text-slate-400">Total • taxes incl.</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-4 text-sm">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
<i className="h-4 w-4" data-lucide="clock"></i>
                  15h 45m
                </div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
<i className="h-4 w-4" data-lucide="star"></i>
                  Comfort 8.2/10
                </div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
<i className="h-4 w-4" data-lucide="activity"></i>
                  Effort Low
                </div>
</div>

<div className="grid gap-2 text-sm">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="car"></i>
                    Home (Kesklinn) → D‑terminal • 15m Taxi
                  </div>
<span className="text-slate-400">•</span>
<span className="text-slate-600 dark:text-slate-400">Buffer 0h 20m</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="ferry"></i>
                    Tallinn → Helsinki • 2h 10m Tallink
                  </div>
<span className="text-slate-400">•</span>
<span className="text-slate-600 dark:text-slate-400">Transfer 1h 15m</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="plane"></i>
                    Helsinki → Tokyo • 10h 55m Finnair
                  </div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="car"></i>
                    Tokyo (HND) → Hotel (Shinjuku) • 25m Taxi
                  </div>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-action="save">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save
                  </button>
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-action="share">
<i className="h-4 w-4" data-lucide="share-2"></i> Share
                  </button>
</div>
<div className="flex items-center gap-2">
<button className="view-details inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800" data-id="route1">
<i className="h-4 w-4" data-lucide="route"></i> View details
                  </button>
<a className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i> Book via Finnair
                  </a>
</div>
</div>
</div>
</article>

<article className="result-card rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition group" data-tags="cheapest effort">
<div className="p-4 sm:p-5 grid gap-4">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Cheapest</span>
<h3 className="font-medium tracking-tight">Tallinn → Tokyo</h3>
<span className="text-xs text-slate-500">door‑to‑door via Riga (bus)</span>
</div>
<div className="text-right">
<div className="text-lg font-semibold tracking-tight">€529</div>
<div className="text-xs text-slate-600 dark:text-slate-400">Total • taxes incl.</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
<i className="h-4 w-4" data-lucide="clock"></i>
                  19h 30m
                </div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
<i className="h-4 w-4" data-lucide="activity"></i>
                  Effort Medium
                </div>
</div>
<div className="grid gap-2 text-sm">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="car"></i>
                    Home (Mustamäe) → Bus Station • 20m Taxi
                  </div>
<span className="text-slate-400">•</span>
<span className="text-slate-600 dark:text-slate-400">Buffer 0h 10m</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="bus"></i>
                    Tallinn → Riga • 4h 25m Lux Express
                  </div>
<span className="text-slate-400">•</span>
<span className="text-slate-600 dark:text-slate-400">Transfer 1h 05m</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="plane"></i>
                    Riga → Tokyo • 13h 10m airBaltic + partner
                  </div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="car"></i>
                    Tokyo (NRT) → Hotel (Ueno) • 45m Taxi
                  </div>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-action="save">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save
                  </button>
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-action="share">
<i className="h-4 w-4" data-lucide="share-2"></i> Share
                  </button>
</div>
<div className="flex items-center gap-2">
<button className="view-details inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800" data-id="route2">
<i className="h-4 w-4" data-lucide="route"></i> View details
                  </button>
<a className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i> Book via airBaltic
                  </a>
</div>
</div>
</div>
</article>

<article className="result-card rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition group" data-tags="comfort">
<div className="p-4 sm:p-5 grid gap-4">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Comfort</span>
<h3 className="font-medium tracking-tight">Tallinn → Tokyo</h3>
<span className="text-xs text-slate-500">door‑to‑door • 1 transfer</span>
</div>
<div className="text-right">
<div className="text-lg font-semibold tracking-tight">€799</div>
<div className="text-xs text-slate-600 dark:text-slate-400">Premium Economy</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
<i className="h-4 w-4" data-lucide="clock"></i>
                  16h 20m
                </div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
<i className="h-4 w-4" data-lucide="star"></i>
                  Comfort 9.1/10
                </div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
<i className="h-4 w-4" data-lucide="activity"></i>
                  Effort Low
                </div>
</div>
<div className="grid gap-2 text-sm">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="car"></i>
                    Home (Kadriorg) → TLL • 20m Taxi
                  </div>
<span className="text-slate-400">•</span>
<span className="text-slate-600 dark:text-slate-400">Buffer 0h 20m</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="plane"></i>
                    Tallinn → Helsinki • 0h 30m
                  </div>
<span className="text-slate-400">•</span>
<span className="text-slate-600 dark:text-slate-400">Transfer 1h 20m</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="plane"></i>
                    Helsinki → Tokyo • 11h 40m Finnair PE
                  </div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
<i className="h-4 w-4" data-lucide="car"></i>
                    Tokyo (HND) → Hotel (Ginza) • 30m Taxi
                  </div>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-action="save">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save
                  </button>
</div>
<div className="flex items-center gap-2">
<button className="view-details inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800" data-id="route3">
<i className="h-4 w-4" data-lucide="route"></i> View details
                  </button>
<a className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i> Book via partner
                  </a>
</div>
</div>
</div>
</article>
</div>

<div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800">
<div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-700" data-lucide="badge-percent"></i>
<h3 className="font-medium tracking-tight">Agency-curated offers</h3>
</div>
<a className="text-sm text-blue-700 hover:underline" href="#deals">See more</a>
</div>
<div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between">
<div>
<div className="font-medium tracking-tight">Cherry blossom Tokyo</div>
<div className="text-sm text-slate-600 dark:text-slate-400">Flight + 5 nights • €899</div>
</div>
<a className="text-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i> Book
              </a>
</div>
<div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between">
<div>
<div className="font-medium tracking-tight">Weekend Helsinki</div>
<div className="text-sm text-slate-600 dark:text-slate-400">Ferry + hotel • €79</div>
</div>
<a className="text-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i> Book
              </a>
</div>
<div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between">
<div>
<div className="font-medium tracking-tight">Riga City Break</div>
<div className="text-sm text-slate-600 dark:text-slate-400">Bus + hotel • €59</div>
</div>
<a className="text-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i> Book
              </a>
</div>
</div>
</div>
</section>

<section className="py-10" id="deals">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Deals & Packages</h2>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60">All</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60">Flights</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60">Ferries</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60">Bus</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60">Packages</button>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Seaside deal" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Tallinn → Madeira</h3>
<span className="text-sm text-blue-700">€299</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Direct charter • Apr–Oct</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Agency</span>
<button className="text-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">
<i className="h-4 w-4" data-lucide="external-link"></i> Book
                </button>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Nordic fjords" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Helsinki → Tromsø</h3>
<span className="text-sm text-blue-700">€189</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Northern Lights season</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Flight</span>
<button className="text-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">
<i className="h-4 w-4" data-lucide="external-link"></i> Book
                </button>
</div>
</div>
</article>
<article className="group rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Rome streets" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1470214304380-aadaedcfff84?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Riga → Rome</h3>
<span className="text-sm text-blue-700">€89</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Weekend special</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Flight</span>
<button className="text-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">
<i className="h-4 w-4" data-lucide="external-link"></i> Book
                </button>
</div>
</div>
</article>
</div>
</section>

<section className="py-10" id="blog">
<h2 className="text-2xl font-semibold tracking-tight">Travel tips for Estonians</h2>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="group rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Helsinki port" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Tallinn ↔ Helsinki: ferry vs flight</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Cost, time, and effort compared for weekend escapes.</p>
<button className="mt-3 inline-flex items-center gap-1.5 text-sm text-blue-700 hover:underline">
                Read more <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
<article className="group rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Lux Express bus" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Riga as a smart starting point</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">When bus + flight beats direct routes from Tallinn.</p>
<button className="mt-3 inline-flex items-center gap-1.5 text-sm text-blue-700 hover:underline">
                Read more <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
<article className="group rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Airport security line" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Airport time-savers for busy pros</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Small tricks Kaisa will love to shave minutes off.</p>
<button className="mt-3 inline-flex items-center gap-1.5 text-sm text-blue-700 hover:underline">
                Read more <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
</div>
</section>

<section className="py-10" id="about">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight">About Teele</h2>
<p className="mt-3 text-slate-700 dark:text-slate-300">
              We help Estonia-based travelers plan efficient, transparent door‑to‑door trips by unifying taxis, buses, ferries, and flights into a single, bookable itinerary. Our ranking balances time, price, comfort, and effort—so you can make the right trade-offs for every trip.
            </p>
<div className="mt-6 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
<h3 className="font-medium tracking-tight">Partners</h3>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-600 dark:text-slate-400">
<div className="px-3 py-2 rounded border border-slate-200 dark:border-slate-800 text-center tracking-tight">FA</div>
<div className="px-3 py-2 rounded border border-slate-200 dark:border-slate-800 text-center tracking-tight">AB</div>
<div className="px-3 py-2 rounded border border-slate-200 dark:border-slate-800 text-center tracking-tight">LE</div>
<div className="px-3 py-2 rounded border border-slate-200 dark:border-slate-800 text-center tracking-tight">TL</div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight">Contact</h3>
<form aria-label="Contact form" className="mt-3 grid gap-3">
<input className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" type="text" />
<input className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
<textarea className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message" rows="4"></textarea>
<button className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 w-max">
<i className="h-4 w-4" data-lucide="send"></i>
                Send
              </button>
</form>
</div>
</div>
</section>

<section className="py-10" id="mytrips">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">My Trips</h2>
<button className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60">
<i className="h-4 w-4" data-lucide="log-in"></i> Sign in to sync
          </button>
</div>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Saved itineraries are stored locally. Sign in later to sync across devices.</p>
<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" id="savedTrips">

</div>
</section>
</main>

<div aria-labelledby="detailsTitle" aria-modal="true" className="fixed inset-0 z-50 hidden" id="detailsOverlay" role="dialog">
<div className="absolute inset-0 bg-black/20" data-close=""></div>
<aside className="absolute right-0 top-0 h-full w-full sm:w-[480px] bg-white dark:bg-slate-950 shadow-xl border-l border-slate-200 dark:border-slate-800 translate-x-full data-[open=true]:translate-x-0 transition-transform duration-300" data-panel="">
<div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-700" data-lucide="route"></i>
<h3 className="font-medium tracking-tight" id="detailsTitle">Route details</h3>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" id="saveDetail">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save
            </button>
<button className="inline-flex items-center gap-1.5 text-sm px3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800" data-close="">
<i className="h-4-4" data-lucide="x"></i> Close
            </button>
</div>
</div>
<div className="p- sm:p-5 grid gap-4 overflow-y-auto h-[calc(100%-57px)]" id="detailsBody">

<div className="rounded-lg border border-slate-200 dark:border-slate-800 p-3">
<div className="flex flex-wrap items-center gap2">
<span className="inline-flex items-center gap-1.5 text-xs px-2-1 rounded border border-emerald-200 text-emerald-700 bg-emerald-50 dark:border-emerald-900/40 dark:bg-emerald-900/20">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> 15h 45m
              </span>
<span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded border border-blue-200-blue-700 bg-blue-50 dark:border-blue-900/40 dark:bg-blue-900/20">
<i-lucide="euro" className="h-3.5 w-3.5"> Est. €678
              </i-lucide="euro"></span>
<span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded border border--200 text-amber-700 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-900/20">
<i className="h-3.5 w-3.5" data-lucide="activity"></i> Low effort
              </span>
</div>
</div>

<div>
<h4 className="font-medium tracking-tight mb-2">Door‑to‑door legs</h4>
<li className="mb-5 ml-4">
<span className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-blue- ring-2 ring-blue-200 dark:ring-blue-900"></span>
<div className="flex items-center justify-between">
<div className="font-medium">Home (Kesklinn) → D‑terminal</div>
<div className="text-sm text-slate-600 dark:text-slate-400">15m • Taxi</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400">Order a Bolt/Uber. Cushion 20m for boarding.</p>
</li>
<li className="mb-5 ml-4">
<span className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-blue-600 ring-2 ring-blue-200 dark:ring-blue-900"></span>
<div className="flex items-center justify-between">
<div="-medium">Tallinn → Helsinki</div="-medium"></div>
<div className="text-sm textlate-600 dark:text-slate-400">2h 10m • Tallink ferry</div>
</li></div>
<p className="text-sm text-s-600 dark:text-slate-400">Economy seat. Wi‑Fi on board, food available.</p>
<li className="mb-5 ml-4">
<span className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-blue-600 ring-2 ring-blue-200 dark:ring-blue-900"></span>
<div className="flex items-center justify-between">
<div className="font-medium">Helsinki West → HEL Airport</div>
<div className="text-sm text-slate-600 dark:text-slate-400">1h 15m • Transfer</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400">Tram + train or taxi. Include security time at HEL.</p>
</li>
<li className="mb-5 ml-4">
<span className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-blue-600 ring-2 ring-blue-200 dark:ring-blue-900"></span>
<div className="flex items-center justify-between">
<div className="font-medium">Helsinki → Tokyo (HND)</div>10h 55m • Finnair</div>
</li></div>
<p className="text-sm text-slate-600 dark:text-slate-400">Overnight flight. 8kg cabin + 23kg checked included.</p>

              {"<"} class="ml-4"{">"}
                <span className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-blue-600 ring-2 ring-blue-200 dark:ring-blue-900"></span>
<div className="flex items-center justify-between">
<div className="font-medium">Tokyo (HND) → Hotel (Shinjuku)</div>
<div className="text-sm text-slate-600 dark:text-slate-400">25m • Taxi</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400">Consider Suica for local transit during stay.</p>
</aside></div>

<div="rounded-lg border="" border-slate-200="" dark:border-slate-800="">
<h4 className="font-medium tracking-tight">Estimated cost breakdown</h4>
<dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
<div className="flex items-center justify-between">
<dt className="text-slate-600 dark:text-slate-400">Taxi (Tallinn)</dt>
<dd className="font-medium">€10–15</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-slate-600 dark:text-slate-400">Ferry Tallinn–Helsinki</dt>
<dd className="font">€19–29</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-slate-600 dark:text-slate-400">Flight HEL→HND</dt>
<dd className="font-medium">€599–699
              </dd></div>
<div className="flex items-center justify-between">
<dt className="text-slate- dark:text-slate-400">Taxi (Tokyo)</dt>
<dd className="font-medium">€20–30</dd>
</div>
<div className="h-p bg-slate-200 dark:bg-slate-800 my-2"></div>
<div className="flex items-center justify-between">
<dt className="font-medium">Total est.</dt>
<dd className="font-semibold tracking-tight">€678</dd>
</div></dl>

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60" data-copy-details="">
<i className="h-4 w-4" data-lucide="share-2"></i> Share link
              </button>
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border-slate-200 dark:border-slate-800 hover:bg-slate50 dark:hover:bg-slate-800/60" onClick={(e) => { window.print() }}>
<i className="h-4 w-4" data-lucide="printer"></i> Print
              </button>
</div>
<a className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i> Book via partner
            </a>
</div>

<footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-blue-600 text-white flex items-center justify-center text-sm tracking-tight font-medium">TE</div>
<span className="text-lg font-semibold tracking-tight">Teele</span>
</div>
<p className="mt-3 textlate-600 dark:text-slate-400">Door‑to‑door travel from Estonia. Compare time, cost, and effort.</p>
</div>
<div>
<h4 className="font-medium tracking-tight">Company</h4>
<ul className="mt-2 grid gap-1.5">
<li><a className="hover:underline" href="#about">About</a></li>
<li><a className="hover:underline" href="#blog">Blog</a></li>
<li><a="#deals" className="hover:underline">Deals</a="#deals"></li>
</ul>
</div>
<div>
<h4 className="font-medium tracking-tight">Support</h4>
<ul className="mt-2 grid gap-1.5">
<li><a className="hover:underline" href="#home">Help center</a></li>
<li><a className="hover:underline" href="#home">Contact</a></li>
<li><a className="hover:underline" href="#">Safety</a></li>
</ul>
</div>
<div>
          {"<"}4 class="font-medium tracking-tight"{">"}Legal
<ul className="mt-2 grid gap-1.5">
<li><a className="hover:underline" href="#">Terms</a></li>
<li><a className="hover:underline" href="#">Privacy</a></li>
<li><a className="hover:underline" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 text-xs text-slate-500 dark:text-slate-400">
        © <span id="year"></span> Teele All rights reserved.
      </div>
</footer>




</div="rounded-lg>
    </>
  );
}
