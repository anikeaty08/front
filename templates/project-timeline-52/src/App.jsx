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



      // Sidebar toggles
      const sidebar = document.getElementById('sidebar');
      document.getElementById('openSidebar')?.addEventListener('click', () => sidebar.classList.toggle('hidden'));
      document.getElementById('collapseSidebar')?.addEventListener('click', () => sidebar.classList.add('hidden'));

      // Elements
      const monthsBar = document.getElementById('monthsBar');
      const daysBar = document.getElementById('daysBar');
      const grid = document.getElementById('grid');
      const todayLine = document.getElementById('todayLine');
      const lanes = document.getElementById('lanes');
      const gridWrapper = document.getElementById('gridWrapper');
      const scrollContainer = document.getElementById('timelineScroll');

      const startInput = document.getElementById('startInput');
      const endInput = document.getElementById('endInput');
      const applyBtn = document.getElementById('applyDates');
      const viewButtons = Array.from(document.querySelectorAll('.view-btn'));
      const rangeLabelBtn = document.getElementById('rangeLabel');

      // Utilities
      const dayMs = 24 * 60 * 60 * 1000;
      const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
      const startOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
      const endOfMonth = (d) => new Date(d.getFullYear(), d.getMonth() + 1, 0);
      const startOfWeek = (d) => {
        const day = (d.getDay() + 6) % 7; // Mon=0
        return addDays(d, -day);
      };
      const endOfWeek = (d) => addDays(startOfWeek(d), 6);
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const fmtShort = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const fmtMonth = (d) => d.toLocaleDateString('en-US', { month: 'short' });
      const fmtYear = (d) => d.getFullYear();
      const weekdayLetter = (d) => d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase().slice(0,1);
      const toInput = (d) => d.toISOString().slice(0,10);
      const fromInput = (s) => {
        const [y,m,dd] = s.split('-').map(Number);
        return new Date(y, m-1, dd);
      };
      function isoWeekNumber(d) {
        const tmp = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        const dayNum = (tmp.getUTCDay() + 6) % 7;
        tmp.setUTCDate(tmp.getUTCDate() - dayNum + 3);
        const firstThursday = new Date(Date.UTC(tmp.getUTCFullYear(),0,4));
        const week = 1 + Math.round(((tmp - firstThursday) / dayMs - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7);
        return week;
      }
      const rangeLabel = (s, e) => {
        const sameYear = s.getFullYear() === e.getFullYear();
        const sameMonth = s.getMonth() === e.getMonth() && sameYear;
        if (sameMonth) return `${fmtMonth(s)} ${s.getDate()}–${e.getDate()}, ${s.getFullYear()}`;
        if (sameYear) return `${fmtShort(s)} – ${fmtShort(e)}, ${s.getFullYear()}`;
        return `${fmtShort(s)} ${s.getFullYear()} – ${fmtShort(e)} ${e.getFullYear()}`;
      };

      // State
      const state = {
        view: 'day',
        start: new Date('2024-01-26'),
        end: new Date('2024-02-09'),
        today: new Date('2024-02-01')
      };

      // Demo tasks (unchanged)
      const tasks = [
        { title: 'Discovery', start: '2024-01-31', end: '2024-01-31', lane: 0, type: 'milestone', avatars: [1,2,3], note: 'Completed' },
        { title: 'Define & Hypothesize', start: '2024-01-31', end: '2024-02-04', lane: 1, avatars: [2,3,4] },
        { title: 'Prototyping & Testing', start: '2024-01-26', end: '2024-01-31', lane: 2, avatars: [1,3] },
        { title: 'Client Review & Feedback', start: '2024-01-31', end: '2024-02-02', lane: 3, avatars: [2,4] },
        { title: 'Review', start: '2024-01-31', end: '2024-02-04', lane: 1, avatars: [1,2,3], offsetY: 48 },
        { title: 'Visual Design', start: '2024-02-01', end: '2024-02-09', lane: 4, avatars: [4,5] },
      ];
      const avatarSrc = (i)=>[
        'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=64&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=64&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=64&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544155940-38d4c31b4b5c?q=80&w=64&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=64&auto=format&fit=crop'
      ][(i-1)%5];

      // Build units based on view
      function buildUnits(view, start, end) {
        if (view === 'day') {
          const units = [];
          let d = new Date(start);
          while (d <= end) {
            units.push({ start: new Date(d), end: new Date(d), month: d.getMonth(), year: d.getFullYear(), isWeekend: d.getDay()===0 || d.getDay()===6 });
            d = addDays(d, 1);
          }
          return units;
        }
        if (view === 'week') {
          const units = [];
          let s = startOfWeek(start);
          const e = endOfWeek(end);
          while (s <= e) {
            const eW = addDays(s, 6);
            units.push({ start: new Date(s), end: eW, month: s.getMonth(), year: s.getFullYear(), week: isoWeekNumber(s) });
            s = addDays(s, 7);
          }
          return units;
        }
        // month
        const units = [];
        let s = startOfMonth(start);
        const e = endOfMonth(end);
        while (s <= e) {
          const eM = endOfMonth(s);
          units.push({ start: new Date(s), end: eM, month: s.getMonth(), year: s.getFullYear() });
          s = new Date(s.getFullYear(), s.getMonth()+1, 1);
        }
        return units;
      }

      function groupByMonth(units) {
        const groups = [];
        let current = null;
        for (const u of units) {
          const key = `${u.year}-${u.month}`;
          if (!current || current.key !== key) {
            current = { key, year: u.year, month: u.month, count: 0 };
            groups.push(current);
          }
          current.count += 1;
        }
        return groups;
      }

      function clearTimeline() {
        monthsBar.innerHTML = '';
        daysBar.innerHTML = '';
        grid.innerHTML = '';
        lanes.innerHTML = '';
      }

      function buildTimeline() {
        clearTimeline();

        // Column width per unit by view
        const colWidth = state.view === 'day' ? 96 : state.view === 'week' ? 132 : 160;
        const units = buildUnits(state.view, state.start, state.end);
        const totalWidth = units.length * colWidth;

        // Months header
        monthsBar.style.minWidth = totalWidth + 'px';
        const months = groupByMonth(units);
        for (const g of months) {
          const el = document.createElement('div');
          el.className = 'flex items-center border-r border-neutral-200 px-3 py-2';
          el.style.width = (g.count * colWidth) + 'px';
          const label = new Date(g.year, g.month, 1).toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
          el.innerHTML = `<span class="font-medium">${label} ${g.year}</span>`;
          monthsBar.appendChild(el);
        }

        // Units subheader + grid
        daysBar.style.minWidth = totalWidth + 'px';
        grid.style.minWidth = totalWidth + 'px';

        units.forEach((u, i) => {
          const cell = document.createElement('div');
          cell.className = 'flex flex-col items-center justify-center border-r border-neutral-200';
          cell.style.width = colWidth + 'px';
          if (state.view === 'day') {
            cell.innerHTML = `
              <div class="pt-2 pb-1 text-[10px] text-neutral-500">${weekdayLetter(u.start)}</div>
              <div class="pb-2 text-sm font-medium ${u.isWeekend ? 'text-neutral-400' : 'text-neutral-800'}">${u.start.getDate()}</div>
            `;
          } else if (state.view === 'week') {
            const top = `W${String(u.week).padStart(2,'0')}`;
            const bottom = `${fmtShort(u.start)}–${fmtShort(u.end)}`;
            cell.innerHTML = `
              <div class="pt-2 pb-1 text-[10px] text-neutral-500">${top}</div>
              <div class="pb-2 text-xs font-medium text-neutral-800">${bottom}</div>
            `;
          } else {
            const top = `${fmtMonth(u.start).toUpperCase()}`;
            const bottom = `${fmtYear(u.start)}`;
            cell.innerHTML = `
              <div class="pt-2 pb-1 text-[10px] text-neutral-500">${top}</div>
              <div class="pb-2 text-xs font-medium text-neutral-800">${bottom}</div>
            `;
          }
          daysBar.appendChild(cell);

          // Grid column background
          const col = document.createElement('div');
          let bg = 'bg-white';
          if (state.view === 'day') {
            bg = u.isWeekend ? 'bg-neutral-50' : 'bg-white';
          } else {
            bg = i % 2 === 0 ? 'bg-white' : 'bg-neutral-50';
          }
          col.className = `h-full border-r border-neutral-200 ${bg}`;
          col.style.width = colWidth + 'px';
          grid.appendChild(col);
        });

        // Today line position
        const t = state.today;
        let todayIdx = -1;
        if (t < units[0].start || t > units[units.length-1].end) {
          todayLine.style.display = 'none';
        } else {
          for (let i=0; i<units.length; i++){
            if (t >= units[i].start && t <= units[i].end) { todayIdx = i; break; }
          }
          if (todayIdx >= 0) {
            todayLine.style.display = '';
            todayLine.style.left = (todayIdx * colWidth) + 'px';
            todayLine.style.zIndex = 5;
          }
        }

        // Lanes scaffold
        const laneHeight = 92;
        const maxLane = Math.max(...tasks.map(t => t.lane));
        lanes.style.minWidth = totalWidth + 'px';
        for (let l = 0; l <= maxLane; l++){
          const laneRow = document.createElement('div');
          laneRow.className = 'relative border-b border-neutral-100';
          laneRow.style.height = laneHeight + 'px';
          lanes.appendChild(laneRow);
        }

        // Helpers for positioning tasks across views
        function unitIndexForDate(d) {
          for (let i=0; i<units.length; i++) {
            if (d >= units[i].start && d <= units[i].end) return i;
          }
          // If before or after range, clamp to edges
          if (d < units[0].start) return 0;
          return units.length - 1;
        }

        // Render tasks
        tasks.forEach((t)=>{
          const s = new Date(t.start);
          const e = new Date(t.end);
          const idxS = unitIndexForDate(s);
          const idxE = unitIndexForDate(e);
          const left = idxS * colWidth + 12;
          const width = Math.max((idxE - idxS + 1) * colWidth - 24, 56);
          const top = (t.lane * laneHeight) + (t.offsetY || 18);

          if (t.type === 'milestone'){
            const dot = document.createElement('div');
            dot.className = 'absolute -translate-x-1/2';
            dot.style.left = (idxS * colWidth) + 'px';
            dot.style.top = (t.lane * laneHeight + 38) + 'px';
            dot.innerHTML = `
              <div class="flex items-center gap-2">
                <div class="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
                <div class="text-xs text-neutral-600">${t.title} · <span class="text-neutral-500">${t.note || ''}</span></div>
              </div>
            `;
            lanes.appendChild(dot);
            return;
          }

          const card = document.createElement('div');
          card.className = 'absolute rounded-xl border border-neutral-200 bg-white shadow-sm shadow-neutral-900/5 hover:border-neutral-300';
          card.style.left = left + 'px';
          card.style.top = top + 'px';
          card.style.width = width + 'px';
          card.innerHTML = `
            <div class="px-4 py-3">
              <div class="flex items-start justify-between gap-2">
                <div class="text-sm font-medium text-neutral-900">${t.title}</div>
                <button class="inline-flex h-7 w-7 items-center justify-center rounded-md hover:bg-neutral-100">
                  <i data-lucide="more-horizontal" class="h-4.5 w-4.5 text-neutral-500"></i>
                </button>
              </div>
              <div class="mt-1 flex items-center justify-between">
                <div class="text-[11px] text-neutral-500">${fmtShort(s)} – ${fmtShort(e)}</div>
                <div class="flex -space-x-2">
                  ${(t.avatars || []).slice(0,3).map(i=>`<img class="h-6 w-6 rounded-full border border-white object-cover" src="${avatarSrc(i)}" alt="avatar" />`).join('')}
                </div>
              </div>
            </div>
          `;
          lanes.appendChild(card);
        });

        // Scroll near today
        setTimeout(()=>{
          if (todayIdx >= 0) {
            scrollContainer.scrollLeft = Math.max(0, todayIdx * colWidth - scrollContainer.clientWidth * 0.35);
          } else {
            scrollContainer.scrollLeft = 0;
          }
        }, 0);

        // Update range label
        rangeLabelBtn.querySelector('span').textContent = rangeLabel(state.start, state.end);

        // Refresh icons with stroke width 1.5
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Interactions
      viewButtons.forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const view = btn.getAttribute('data-view');
          if (state.view === view) return;
          state.view = view;
          viewButtons.forEach(b=>{
            const active = b.getAttribute('data-view') === view;
            b.setAttribute('aria-pressed', active ? 'true' : 'false');
            b.className = `view-btn inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm ${active ? 'font-medium text-white bg-neutral-900 hover:bg-neutral-800' : 'text-neutral-700 hover:bg-neutral-100'}`;
            // Re-append icon name preserved
            // (className set above, inner content remains)
          });
          buildTimeline();
        });
      });

      applyBtn.addEventListener('click', ()=>{
        if (!startInput.value || !endInput.value) return;
        let s = fromInput(startInput.value);
        let e = fromInput(endInput.value);
        if (s > e) [s, e] = [e, s];
        state.start = s; state.end = e;
        buildTimeline();
      });

      // Initialize inputs and timeline
      startInput.value = toInput(state.start);
      endInput.value = toInput(state.end);
      buildTimeline();
    
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
      

<div className="flex min-h-screen">

<aside className="hidden lg:flex w-72 shrink-0 flex-col border-r border-neutral-200 bg-white" id="sidebar">
<div className="flex h-16 items-center gap-2 px-5">
<button className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100" id="collapseSidebar">
<i className="h-5 w-5 text-neutral-600" data-lucide="panel-left"></i>
</button>
<div className="flex items-center gap-2">
<img alt="Brand" className="h-7 w-7 rounded-lg object-cover" src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<div className="flex items-center gap-1">
<span className="text-[15px] font-semibold tracking-tight">Horizon Workspace</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="px-4 py-3">
<div className="mb-3 text-[11px] font-medium uppercase tracking-wide text-neutral-500">Menu</div>
<nav className="space-y-1">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#">
<i className="h-4.5 w-4.5 text-neutral-500 group-hover:text-neutral-700" data-lucide="list-checks"></i>
<span>My Tasks</span>
<span className="ml-auto inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-neutral-100 px-1.5 text-[11px] text-neutral-600">7</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#">
<i className="h-4.5 w-4.5 text-neutral-500 group-hover:text-neutral-700" data-lucide="activity"></i>
<span>Activities</span>
<span className="ml-auto inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-blue-50 px-1.5 text-[11px] text-blue-600">12</span>
</a>
</nav>
<div className="mt-5 mb-3 text-[11px] font-medium uppercase tracking-wide text-neutral-500">Sections</div>
<nav className="space-y-1">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#">
<i className="h-4.5 w-4.5 text-neutral-500 group-hover:text-neutral-700" data-lucide="home"></i>
<span>Overview</span>
</a>
<a className="group flex items-center gap-3 rounded-md bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900" href="#">
<i className="h-4.5 w-4.5" data-lucide="kanban"></i>
<span>Projects</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#">
<i className="h-4.5 w-4.5 text-neutral-500 group-hover:text-neutral-700" data-lucide="message-square"></i>
<span>Messages</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#">
<i className="h-4.5 w-4.5 text-neutral-500 group-hover:text-neutral-700" data-lucide="users"></i>
<span>Team Members</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#">
<i className="h-4.5 w-4.5 text-neutral-500 group-hover:text-neutral-700" data-lucide="calendar"></i>
<span>Calendar</span>
</a>
</nav>
<div className="mt-6 mb-3 text-[11px] font-medium uppercase tracking-wide text-neutral-500">Recent Projects</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100" href="#">
<span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
<span>Way Finder</span>
</a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#">
<span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
<span>Internal Project</span>
</a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100" href="#">
<span className="inline-block h-2 w-2 rounded-full bg-rose-500"></span>
<span>Bitly Landing</span>
</a>
</nav>
</div>
<div className="mt-auto border-t border-neutral-200 p-4">
<div className="flex items-center gap-3">
<img alt="User" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Alex Carter</div>
<div className="text-xs text-neutral-500">Product Manager</div>
</div>
<button className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100">
<i className="h-4.5 w-4.5 text-neutral-600" data-lucide="settings"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1">

<header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur">
<div className="flex h-16 items-center gap-3 px-4 lg:px-6">
<button className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100" id="openSidebar">
<i className="h-5 w-5 text-neutral-600" data-lucide="panel-left-open"></i>
</button>
<div className="relative hidden md:flex flex-1 items-center">
<i className="pointer-events-none absolute left-3 h-4.5 w-4.5 text-neutral-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-neutral-200 bg-neutral-50 pl-10 pr-3 py-2 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-300 focus:bg-white" placeholder="What are you looking for?" type="text"/>
</div>
<div className="ml-auto flex items-center gap-1.5">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100">
<i className="h-5 w-5 text-neutral-600" data-lucide="bell"></i>
</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100">
<i className="h-5 w-5 text-neutral-600" data-lucide="help-circle"></i>
</button>
<img alt="Me" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544155940-38d4c31b4b5c?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<section className="px-4 py-6 lg:px-6">

<div className="mb-2 flex items-center gap-2 text-sm text-neutral-500">
<a className="hover:text-neutral-800" href="#">Projects</a>
<i className="h-4 w-4" data-lucide="chevron-right"></i>
<a className="hover:text-neutral-800" href="#">Way Finder</a>
<i className="h-4 w-4" data-lucide="chevron-right"></i>
<span className="text-neutral-900">Timeline</span>
</div>

<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Way Finder</h1>
<div className="mt-2 flex items-center gap-6">
<nav className="flex items-center gap-1">
<a className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100" href="#">Overview</a>
<a className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100" href="#">Boards</a>
<a className="rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white" href="#">Timeline</a>
<a className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100" href="#">Activities</a>
<a className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100" href="#">Files</a>
</nav>
</div>
</div>
<div className="flex items-center gap-2">

<div className="flex -space-x-2">
<img alt="member" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<img alt="member" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<img alt="member" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-neutral-100 text-[11px] text-neutral-700">+3</button>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-700">
<i className="h-4.5 w-4.5" data-lucide="plus"></i>
                Add
              </button>
</div>
</div>

<div className="mt-4 flex flex-wrap items-center gap-2">
<div className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white p-1">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100">
<i className="h-4 w-4" data-lucide="filter"></i>
                Filter
              </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100">
<i className="h-4 w-4" data-lucide="arrow-up-down"></i>
                Sort
              </button>
</div>

<div className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white p-1">
<button aria-pressed="true" className="view-btn inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800" data-view="day">
<i className="h-4 w-4" data-lucide="calendar-days"></i>
                Day
              </button>
<button aria-pressed="false" className="view-btn inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100" data-view="week">
<i className="h-4 w-4" data-lucide="calendar-range"></i>
                Week
              </button>
<button aria-pressed="false" className="view-btn inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100" data-view="month">
<i className="h-4 w-4" data-lucide="calendar"></i>
                Month
              </button>
</div>

<div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-neutral-500" data-lucide="flag"></i>
<label className="sr-only" htmlFor="startInput">Start</label>
<input className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 text-sm outline-none focus:border-neutral-300 focus:bg-white" id="startInput" type="date"/>
</div>
<span className="text-neutral-400">–</span>
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-neutral-500" data-lucide="flag-triangle-right"></i>
<label className="sr-only" htmlFor="endInput">End</label>
<input className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 text-sm outline-none focus:border-neutral-300 focus:bg-white" id="endInput" type="date"/>
</div>
<button className="ml-1 inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-medium text-white hover:bg-blue-700" id="applyDates">
<i className="h-4 w-4" data-lucide="check"></i>
                Apply
              </button>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100" id="rangeLabel">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span>Range</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 bg-white">

<div className="overflow-x-auto" id="timelineScroll">

<div className="min-w-[900px]">

<div className="sticky top-[64px] z-10 flex border-b border-neutral-200 bg-white text-xs text-neutral-500" id="monthsBar"></div>

<div className="sticky top-[96px] z-10 flex border-b border-neutral-200 bg-white text-[11px] text-neutral-600" id="daysBar"></div>

<div className="relative" id="gridWrapper">

<div className="pointer-events-none absolute inset-0 flex" id="grid"></div>

<div className="pointer-events-none absolute top-0 bottom-0 w-px bg-blue-600/70" id="todayLine"></div>

<div className="relative">
<div className="relative py-6" id="lanes"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
