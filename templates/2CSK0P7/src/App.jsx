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



    (() => {
      const root = document.getElementById('aura-emei98atd');
      const monthLabel = root?.querySelector('#month-label');
      const grid = root?.querySelector('#calendar-grid');
      const meetingsList = root?.querySelector('#meetings-list');
      const tzLabel = root?.querySelector('#timezone-label');
      const addBtn = root?.querySelector('#add-event-btn');
      const shareBtn = root?.querySelector('#share-day-btn');

      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local';
        if (tzLabel) tzLabel.textContent = tz.replace(/_/g, ' ');
      } catch {
        if (tzLabel) tzLabel.textContent = 'Local time';
      }

      const events = {
        '2025-08-19': [
          { time: '09:30', title: 'Sync with Lina about launch', meta: 'Zoom · Hosted by Nova', icon: 'users', grad: 'from-violet-500 to-fuchsia-600' },
          { time: '11:00', title: 'Design jam with Core UI', meta: 'Figma · Collaborative', icon: 'palette', grad: 'from-cyan-400 to-blue-600' },
          { time: '14:00', title: 'Weekly product triage', meta: 'Zenith Calendar', icon: 'wrench', grad: 'from-emerald-400 to-teal-600', dim: true }
        ]
      };

      let selected = new Date(2025, 7, 19);
      let viewYear = selected.getFullYear();
      let viewMonth = selected.getMonth();

      const pad = (n) => String(n).padStart(2, '0');
      const keyFromDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
      const fmtMonthYear = (y, m) => new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }).format(new Date(y, m, 1));
      const to12h = (hhmm) => {
        const [h, m] = hhmm.split(':').map(Number);
        const am = h < 12 || h === 24;
        const h12 = ((h % 12) || 12);
        return `${h12}:${pad(m)}${am ? 'am' : 'pm'}`;
      };

      function renderCalendar() {
        if (!monthLabel || !grid) return;
        monthLabel.textContent = fmtMonthYear(viewYear, viewMonth);
        grid.innerHTML = '';

        const first = new Date(viewYear, viewMonth, 1);
        const startDow = first.getDay();
        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
        const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();

        const totalCells = 42;
        for (let i = 0; i < totalCells; i++) {
          const cell = document.createElement('div');
          cell.className = 'h-9 flex items-center justify-center';
          let dayNum, cellDate, inCurrent = true;

          if (i < startDow) {
            dayNum = prevMonthDays - (startDow - 1 - i);
            const d = new Date(viewYear, viewMonth - 1, dayNum);
            cellDate = d;
            inCurrent = false;
          } else if (i >= startDow + daysInMonth) {
            dayNum = i - (startDow + daysInMonth) + 1;
            const d = new Date(viewYear, viewMonth + 1, dayNum);
            cellDate = d;
            inCurrent = false;
          } else {
            dayNum = i - startDow + 1;
            const d = new Date(viewYear, viewMonth, dayNum);
            cellDate = d;
            inCurrent = true;
          }

          const iso = keyFromDate(cellDate);
          cell.dataset.date = iso;
          cell.setAttribute('role', 'button');
          cell.setAttribute('aria-label', cellDate.toDateString());

          if (!inCurrent) cell.className += ' text-slate-600';

          const isSelected = keyFromDate(selected) === iso;
          if (isSelected) {
            cell.innerHTML = `<div class="h-7 w-7 rounded-lg bg-violet-500 text-white flex items-center justify-center shadow-inner shadow-violet-900/40">${dayNum}</div>`;
          } else {
            cell.textContent = dayNum;
          }

          grid.appendChild(cell);
        }
      }

      function renderMeetings() {
        if (!meetingsList) return;
        const k = keyFromDate(selected);
        const list = (events[k] || []).slice().sort((a, b) => a.time.localeCompare(b.time));
        meetingsList.innerHTML = '';

        if (!list.length) {
          const empty = document.createElement('div');
          empty.className = 'px-3 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center gap-3';
          empty.innerHTML = `
            <div class="h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center ring-1 ring-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar" class="lucide lucide-calendar h-4 w-4 text-white"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-slate-200 truncate">No meetings scheduled</p>
              <p class="text-xs text-slate-400 truncate">Add one with the + button</p>
            </div>
          `;
          meetingsList.appendChild(empty);
          if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({ attrs: { width: 24, height: 24 } });
          return;
        }

        list.forEach(ev => {
          const row = document.createElement('div');
          row.className = `flex items-center gap-3 px-3 py-3 rounded-lg bg-white/5 ring-1 ring-white/10${ev.dim ? ' opacity-70' : ''}`;
          row.innerHTML = `
            <div class="h-8 w-8 rounded-md bg-gradient-to-br ${ev.grad} flex items-center justify-center ring-1 ring-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="${ev.icon}" class="lucide h-4 w-4 text-white"></svg>
            </div>
            <div class="min-w-0">
              <p class="text-sm font-medium text-slate-200 truncate">${ev.title}</p>
              <p class="text-xs text-slate-400 truncate">${ev.meta || ''}</p>
            </div>
            <div class="ml-auto flex items-center gap-2">
              <span class="text-xs text-slate-300">${to12h(ev.time)}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="clock" class="lucide h-4 w-4 text-slate-400"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            </div>
          `;
          meetingsList.appendChild(row);
        });
        if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({ attrs: { width: 24, height: 24 } });
      }

      const prevBtn = document.querySelector('[data-nav="prev"]');
      const nextBtn = document.querySelector('[data-nav="next"]');
      const gridEl = document.querySelector('#calendar-grid');

      prevBtn?.addEventListener('click', () => {
        if (viewMonth === 0) { viewMonth = 11; viewYear -= 1; } else { viewMonth -= 1; }
        selected = new Date(viewYear, viewMonth, Math.min(selected.getDate(), new Date(viewYear, viewMonth + 1, 0).getDate()));
        renderCalendar(); renderMeetings();
      });

      nextBtn?.addEventListener('click', () => {
        if (viewMonth === 11) { viewMonth = 0; viewYear += 1; } else { viewMonth += 1; }
        selected = new Date(viewYear, viewMonth, Math.min(selected.getDate(), new Date(viewYear, viewMonth + 1, 0).getDate()));
        renderCalendar(); renderMeetings();
      });

      gridEl?.addEventListener('click', (e) => {
        const cell = e.target.closest('[data-date]');
        if (!cell) return;
        const [y, m, d] = cell.dataset.date.split('-').map(Number);
        selected = new Date(y, m - 1, d);
        viewYear = selected.getFullYear();
        viewMonth = selected.getMonth();
        renderCalendar(); renderMeetings();
      });

      addBtn?.addEventListener('click', async () => {
        const title = prompt('Event title');
        if (!title) return;
        let time = prompt('Start time (24h, e.g., 14:30)');
        if (!time) time = '09:00';
        const meta = prompt('Location / notes (optional)') || '';
        const k = keyFromDate(selected);
        if (!events[k]) events[k] = [];
        events[k].push({ time, title, meta, icon: 'calendar-plus', grad: 'from-violet-500 to-fuchsia-600' });
        renderMeetings();
      });

      shareBtn?.addEventListener('click', async () => {
        const k = keyFromDate(selected);
        const text = `My schedule for ${selected.toDateString()}: ${location.href.split('#')[0]}#${k}`;
        try {
          await navigator.clipboard.writeText(text);
          const original = shareBtn.innerHTML;
          shareBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide h-4 w-4"><path d="M20 6 9 17l-5-5"></path></svg> Copied`;
          if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
          setTimeout(() => { shareBtn.innerHTML = original; if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(); }, 1200);
        } catch {
          alert('Copy failed. You can share this date: ' + text);
        }
      });

      const hash = (location.hash || '').slice(1);
      if (/^\d{4}-\d{2}-\d{2}$/.test(hash)) {
        const [hy, hm, hd] = hash.split('-').map(Number);
        selected = new Date(hy, hm - 1, hd);
        viewYear = selected.getFullYear();
        viewMonth = selected.getMonth();
      }

      renderCalendar();
      renderMeetings();
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({ attrs: { width: 24, height: 24 } });
    })();
  


      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(138,92,246,0.55),rgba(18,18,27,0))]"></div>
<div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.45),rgba(18,18,27,0))]"></div>
</div>

<header className="relative z-50 sticky top-0 backdrop-blur-xl bg-[#0a0a12]/80 border-b border-white/5">
<div className="max-w-7xl sm:px-6 lg:px-8 border-slate-50/5 mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset]">
<svg className="lucide lucide-asterisk w-[16px] h-[16px]" data-lucide="asterisk" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Nova</span>
</a>
<nav className="hidden md:flex gap-1 border-slate-50/5 border rounded-full px-4 items-center">
<a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#">Product</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#">Pricing</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white" href="#">Changelog</a><a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#">Blog</a><a className="hover:text-white text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#">Company</a>
</nav>
<div className="flex gap-2 items-center">
<button aria-label="Sign up" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-md pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-md pt-2 pr-4 pb-2 pl-4">
<svg aria-hidden="true" className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span className="">Login</span>
</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative z-10 bg-[#000000]">
<div className="max-w-6xl sm:px-6 lg:px-8 sm:pt-16 bg-[url(https://s.mj.run/0i_tDBV5Cqk?w=800&amp;q=80)] bg-cover mt-0 mr-auto mb-0 ml-auto pt-0 pr-0 pl-0" style={{}}>
<div className="flex flex-col text-center mr-auto mb-30 ml-auto space-y-6 items-center">
<div className="mb-6">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-violet-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              New: Realtime graph sync just landed
            </span>
</div>
<h1 className="sm:text-6xl md:text-7xl text-4xl font-semibold text-white tracking-tight">
  Smarter notes, instantly
</h1>
<p className="max-w-2xl sm:text-lg text-base text-zinc-300 mt-0">
            Capture ideas, connect them with backlinks, and recall anything in milliseconds—across devices, offline-first.
          </p>
<div className="flex gap-3 mt-8 mb-0 pb-[60px] items-center">
<a className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75" href="#" style={{transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)'}}>Start free trial<svg className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<a className="inline-flex items-center gap-2 hover:bg-white/5 text-sm font-medium text-zinc-200 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-lg" href="#">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Watch demo
            </a>
</div>
</div>

<div className="relative sm:mt-16 mt-12">

<div className="absolute inset-0 -top-8 mx-auto h-56 max-w-5xl rounded-[28px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-indigo-500/30 blur-2xl"></div>
<section className="relative ring-1 ring-white/10 supports-[backdrop-filter]:bg-white/5 overflow-hidden text-white bg-white/5 border-slate-50/10 border rounded-2xl backdrop-blur-xl" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)'}}>

<nav aria-label="Primary" className="hidden sm:flex flex-col absolute inset-y-0 left-0 w-14 ring-1 ring-white/10 z-10 border-slate-50/0 border-r pt-4 pr-2 pb-4 pl-2 backdrop-blur items-center justify-between">
<div className="flex flex-col gap-3 items-center">
<button aria-label="Home" className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 ring-1 ring-white/20 shadow-lg shadow-violet-900/25 flex items-center justify-center" title="Home" type="button">
<svg className="lucide lucide-asterisk w-[20px] h-[20px]" data-lucide="asterisk" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</button>
<div className="h-px w-8 bg-white/10"></div>
<button aria-label="Search" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Search" type="button">
<svg className="lucide lucide-search w-[20px] h-[20px]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Calendar" className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 ring-1 ring-white/20 shadow-lg shadow-violet-900/20 text-white flex items-center justify-center" title="Calendar" type="button">
<svg className="lucide lucide-calendar w-[20px] h-[20px]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button aria-label="Tasks" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Tasks" type="button">
<svg className="lucide lucide-list-checks h-5 w-5" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
</button>
<button aria-label="Messages" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Messages" type="button">
<svg className="lucide lucide-message-square h-5 w-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
<button aria-label="Files" className="h-10 w-10 ring-1 ring-white/10 hover:bg-white/10 flex text-slate-300 bg-white/5 rounded-xl items-center justify-center" title="Files" type="button">
<svg className="lucide lucide-folder h-5 w-5" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</button>
</div>
<div className="flex flex-col items-center gap-3">
<button aria-label="Settings" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Settings" type="button">
<svg className="lucide lucide-settings-2 h-5 w-5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
<button aria-label="Help" className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-slate-300 flex items-center justify-center" title="Help" type="button">
<svg className="lucide lucide-help-circle h-5 w-5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
</div>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-2 sm:pl-16">

<div className="sm:p-8 lg:p-10 pt-5 pr-5 pb-5 pl-5">
<div className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="sm:text-2xl text-xl font-semibold text-white tracking-tight">Tue, August 19th, 2025</h2>
<div className="flex items-center gap-2 text-slate-400">
<svg className="lucide lucide-calendar-days h-4 w-4" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="text-xs sm:text-sm font-medium">Timeline</span>
</div>
</div>
<div className="space-y-8">
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400"></div>
<p className="text-sm sm:text-base text-slate-300">
                Kicked off using <a className="text-violet-400 hover:text-violet-300 underline underline-offset-4 decoration-violet-500/50" href="#">Nova Notes</a>!
              </p>
</div>
<div className="ml-6 pl-4 border-l border-white/10 space-y-2">
<div className="flex items-center gap-2 text-slate-400">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<p className="text-sm">What can I organize here?</p>
</div>
<div className="flex items-center gap-2 text-slate-400">
<svg className="lucide lucide-list-checks h-4 w-4" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
<p className="text-sm">A few workflows to try this week</p>
</div>
<div className="flex items-center gap-2 text-slate-500">
<svg className="lucide lucide-ellipsis h-4 w-4" data-lucide="ellipsis" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
<p className="text-sm">Next steps…</p>
</div>
</div>
</div>

<div className="relative space-y-2">
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex gap-3 ring-1 ring-white/10 bg-white/5 rounded-xl pt-3 pr-4 pb-3 pl-4 shadow-sm backdrop-blur items-center">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center ring-1 ring-white/20">
<svg className="lucide lucide-calendar h-4 w-4 text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<p className="text-sm font-medium text-slate-200">Zenith Calendar</p>
<p className="text-xs text-slate-400 truncate">sara@nimbus.team</p>
</div>
</div>
<div className="flex gap-3 ring-1 ring-white/10 bg-white/5 rounded-xl pt-3 pr-4 pb-3 pl-4 shadow-sm backdrop-blur items-center">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center ring-1 ring-white/20">
<svg className="lucide lucide-mail h-4 w-4 text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-slate-200">Orbit Mail</p>
<p className="text-xs text-slate-400 truncate">sara@orbitmail.io</p>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-lg tracking-tight font-semibold text-white">Notes</h3>
<div className="space-y-2">
<div className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-text h-4 w-4 text-slate-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<p className="text-sm text-slate-300 truncate">Launch checklist — beta cohort</p>
</div>
<span className="text-xs text-slate-400">Updated 2h ago</span>
</div>
<div className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-lightbulb h-4 w-4 text-slate-400" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<p className="text-sm text-slate-300 truncate">Onboarding ideas for v1.3</p>
</div>
<span className="text-xs text-slate-400">Today 9:12</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:border-t-0 lg:border-l border-white/10 border-t pr-4 pl-4">
<div className="sm:p-8 lg:p-10 pt-5 pr-5 pb-5 pl-5 space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<button aria-label="Previous month" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10" data-nav="prev" type="button"><svg className="lucide lucide-chevron-left h-4 w-4 text-slate-200" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button aria-label="Next month" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10" data-nav="next" type="button"><svg className="lucide lucide-chevron-right w-[16px] h-[16px]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(226, 232, 240)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
<h3 className="text-xl tracking-tight font-semibold text-white" id="month-label">August 2025</h3>
<button aria-label="Add event" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10" id="add-event-btn" type="button">
<svg className="lucide lucide-calendar-plus h-4 w-4 text-slate-200" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</button>
</div>

<div className="ring-1 ring-white/10 bg-white/5 rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-7 text-center text-xs text-slate-400 mb-2">
<div className="">Su</div><div className="">Mo</div><div className="">Tu</div><div>We</div><div className="">Th</div><div className="">Fr</div><div className="">Sa</div>
</div>
<div aria-live="polite" className="grid grid-cols-7 gap-1 text-sm" id="calendar-grid"><div aria-label="Sun Jul 27 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-07-27" role="button">27</div><div aria-label="Mon Jul 28 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-07-28" role="button">28</div><div aria-label="Tue Jul 29 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-07-29" role="button">29</div><div aria-label="Wed Jul 30 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-07-30" role="button">30</div><div aria-label="Thu Jul 31 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-07-31" role="button">31</div><div aria-label="Fri Aug 01 2025" className="h-9 flex items-center justify-center" data-date="2025-08-01" role="button">1</div><div aria-label="Sat Aug 02 2025" className="h-9 flex items-center justify-center" data-date="2025-08-02" role="button">2</div><div aria-label="Sun Aug 03 2025" className="h-9 flex items-center justify-center" data-date="2025-08-03" role="button">3</div><div aria-label="Mon Aug 04 2025" className="h-9 flex items-center justify-center" data-date="2025-08-04" role="button">4</div><div aria-label="Tue Aug 05 2025" className="h-9 flex items-center justify-center" data-date="2025-08-05" role="button">5</div><div aria-label="Wed Aug 06 2025" className="h-9 flex items-center justify-center" data-date="2025-08-06" role="button">6</div><div aria-label="Thu Aug 07 2025" className="h-9 flex items-center justify-center" data-date="2025-08-07" role="button">7</div><div aria-label="Fri Aug 08 2025" className="h-9 flex items-center justify-center" data-date="2025-08-08" role="button">8</div><div aria-label="Sat Aug 09 2025" className="h-9 flex items-center justify-center" data-date="2025-08-09" role="button">9</div><div aria-label="Sun Aug 10 2025" className="h-9 flex items-center justify-center" data-date="2025-08-10" role="button">10</div><div aria-label="Mon Aug 11 2025" className="h-9 flex items-center justify-center" data-date="2025-08-11" role="button">11</div><div aria-label="Tue Aug 12 2025" className="h-9 flex items-center justify-center" data-date="2025-08-12" role="button">12</div><div aria-label="Wed Aug 13 2025" className="h-9 flex items-center justify-center" data-date="2025-08-13" role="button">13</div><div aria-label="Thu Aug 14 2025" className="h-9 flex items-center justify-center" data-date="2025-08-14" role="button">14</div><div aria-label="Fri Aug 15 2025" className="h-9 flex items-center justify-center" data-date="2025-08-15" role="button">15</div><div aria-label="Sat Aug 16 2025" className="h-9 flex items-center justify-center" data-date="2025-08-16" role="button">16</div><div aria-label="Sun Aug 17 2025" className="h-9 flex items-center justify-center" data-date="2025-08-17" role="button">17</div><div aria-label="Mon Aug 18 2025" className="h-9 flex items-center justify-center" data-date="2025-08-18" role="button">18</div><div aria-label="Tue Aug 19 2025" className="h-9 flex items-center justify-center" data-date="2025-08-19" role="button"><div className="h-7 w-7 rounded-lg bg-violet-500 text-white flex items-center justify-center shadow-inner shadow-violet-900/40">19</div></div><div aria-label="Wed Aug 20 2025" className="h-9 flex items-center justify-center" data-date="2025-08-20" role="button">20</div><div aria-label="Thu Aug 21 2025" className="h-9 flex items-center justify-center" data-date="2025-08-21" role="button">21</div><div aria-label="Fri Aug 22 2025" className="h-9 flex items-center justify-center" data-date="2025-08-22" role="button">22</div><div aria-label="Sat Aug 23 2025" className="h-9 flex items-center justify-center" data-date="2025-08-23" role="button">23</div><div aria-label="Sun Aug 24 2025" className="h-9 flex items-center justify-center" data-date="2025-08-24" role="button">24</div><div aria-label="Mon Aug 25 2025" className="h-9 flex items-center justify-center" data-date="2025-08-25" role="button">25</div><div aria-label="Tue Aug 26 2025" className="h-9 flex items-center justify-center" data-date="2025-08-26" role="button">26</div><div aria-label="Wed Aug 27 2025" className="h-9 flex items-center justify-center" data-date="2025-08-27" role="button">27</div><div aria-label="Thu Aug 28 2025" className="h-9 flex items-center justify-center" data-date="2025-08-28" role="button">28</div><div aria-label="Fri Aug 29 2025" className="h-9 flex items-center justify-center" data-date="2025-08-29" role="button">29</div><div aria-label="Sat Aug 30 2025" className="h-9 flex items-center justify-center" data-date="2025-08-30" role="button">30</div><div aria-label="Sun Aug 31 2025" className="h-9 flex items-center justify-center" data-date="2025-08-31" role="button">31</div><div aria-label="Mon Sep 01 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-09-01" role="button">1</div><div aria-label="Tue Sep 02 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-09-02" role="button">2</div><div aria-label="Wed Sep 03 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-09-03" role="button">3</div><div aria-label="Thu Sep 04 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-09-04" role="button">4</div><div aria-label="Fri Sep 05 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-09-05" role="button">5</div><div aria-label="Sat Sep 06 2025" className="h-9 flex items-center justify-center text-slate-600" data-date="2025-09-06" role="button">6</div></div>
</div>
</div>

<div className="ring-1 ring-white/10 bg-white/5 rounded-xl pt-4 pr-4 pb-4 pl-4 blur-none grayscale-0">
<div className="flex items-center justify-between mb-3">
<h4 className="text-lg tracking-tight font-semibold text-white">Meetings</h4>
<div className="flex items-center gap-2 text-xs text-slate-400">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="" id="timezone-label">Asia/Singapore</span>
</div>
</div>
<div className="space-y-3" id="meetings-list"><div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center ring-1 ring-white/20">
<svg className="lucide lucide-users h-4 w-4 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-slate-200 truncate">Sync with Lina about launch</p>
<p className="text-xs text-slate-400 truncate">Zoom · Hosted by Nova</p>
</div>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs text-slate-300">9:30am</span>
<svg className="lucide lucide-clock h-4 w-4 text-slate-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div><div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center ring-1 ring-white/20">
<svg className="lucide lucide-palette h-4 w-4 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-slate-200 truncate">Design jam with Core UI</p>
<p className="text-xs text-slate-400 truncate">Figma · Collaborative</p>
</div>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs text-slate-300">11:00am</span>
<svg className="lucide lucide-clock h-4 w-4 text-slate-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div><div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 opacity-70">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center ring-1 ring-white/20">
<svg className="lucide lucide-wrench h-4 w-4 text-white" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-slate-200 truncate">Weekly product triage</p>
<p className="text-xs text-slate-400 truncate">Zenith Calendar</p>
</div>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs text-slate-300">2:00pm</span>
<svg className="lucide lucide-clock h-4 w-4 text-slate-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div></div>
<div className="mt-4 flex items-center justify-between">
<button className="text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 inline-flex items-center gap-2" id="share-day-btn" type="button">
<svg className="lucide lucide-link h-4 w-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          Share day
        </button>
<button className="text-xs text-violet-300 hover:text-violet-200 inline-flex items-center gap-2" id="preferences-btn" type="button">
<svg className="lucide lucide-settings-2 h-4 w-4" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
          Preferences
        </button>
</div>
</div>
</div>

</div>
</section>
</div>
</div>
</section>

<section className="relative z-10 bg-gradient-to-b from-[#000000] to-[#0A0A11]">
<div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
<div className="relative h-full">
<div className="ring-1 ring-white/10 max-w-xl h-full flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur">
<div className="relative overflow-hidden rounded-t-3xl">
<div className="h-56 sm:h-64">

<div className="relative h-full w-full">
<div className="absolute inset-0">
<div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 ring-1 ring-white/10 rounded-full"></div>
<div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"></div>
<div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"></div>
<div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<svg className="lucide lucide-target h-6 w-6 text-white/70" data-lucide="target" fillnone"="" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle className="" cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>

<div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-gradient-to-b from-white/5-transparent ring-1 ring-white/10"></div>
<div className="absolute right-6 top- h-24 w-24 rounded-full bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10"></div>
<div className="absolute bottom-0 left-12 h-28 w-28 translate-y-1/3 rounded-full bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10"></div>
</div>
</div>
</div>
</div>
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check h-5 w-5 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-neutral-300">Security update</span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white">End‑to‑end encryption</h2>
<p className="text-sm leading-relaxed text-neutral-300">
                  Nova secures your notes with end‑to‑end encryption. Keys stay on your devices, with continuous, zero‑knowledge sync—no manual steps required.
                </p>
<div className="mt-3 flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/20">
<svg className="lucide lucide-lock h-3.5 w-3.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Private
                  </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-400/10 px-2 py-1 text-xs text-indigo-300 ring-1 ring-indigo-400/20">
<svg className="lucide lucide-cpu h-3.5 w-3.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><path d="M9 9h6v6H9z"></path><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M20 15h2"></path><path d="M2 9h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
                    On‑device
                  </span>
</div>
</div>
</div>
</div>
<div className="relative ring-1 ring-white/5 bg-neutral-900/40 border-neutral-800/70 border rounded-3xl shadow-2xl backdrop-blur max-w-xl h-full flex flex-col">

<div className="pointer-events-none absolute inset-0 rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-[0.08]">
<defs>
<pattern height="48" id="grid" patternunits="userSpaceOnUse" width="48">
<path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative sm:p-6 lg:p-8 flex-1 flex flex-col pt-5 pr-5 pb-5 pl-5">

<div className="relative mx-auto max-w-2xl flex-1">

<div className="absolute left-1/2 top-6 -translate-x-1/2 h-[220px] sm:h-[230px]">
<div className="mx-auto h-full w-px bg-gradient-to-b from-neutral-700/60 via-neutral-700/30 to-neutral-700/60"></div>
</div>

<div className="relative z-10 mx-auto w-full max-w-xl rounded-2xl border border-neutral-800/80 bg-neutral-900/70 px-4 py-3 sm:px-5 sm:py-4 shadow-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/15 ring-1 ring-indigo-500/30">
<svg className="lucide lucide-laptop h-3.5 w-3.5 text-indigo-300" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="12" rx="2" width="18" x="3" y="4"></rect><path d="M2 20h20"></path></svg>
</span>
<span className="text-white font-medium">All devices</span>
</div>

<span className="absolute -top-3 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-2 ring-neutral-700"></span>
</div>
<div className="mt-3 rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-3">
<div className="flex items-center gap-2 text-neutral-300">
<svg className="lucide lucide-laptop h-3.5 w-3.5 text-neutral-400" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="18" x="3" y="4"></rect><path d="M2 20h20"></path></svg>
<span className="text-sm">MacBook Pro</span>
</div>
<div className="mt-2 flex items-center gap-2 text-neutral-300">
<svg className="lucide lucide-smartphone h-3.5 w-3.5 text-neutral-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-sm">iPhone 15</span>
</div>
<div className="mt-2 flex items-center gap-2 text-neutral-300">
<svg className="lucide lucide-tablet h-3.5 w-3.5 text-neutral-400" data-lucide="tablet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-sm">iPad Air</span>
</div>
</div>

<span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-neutral-800 ring-2 ring-neutral-700"></span>
</div>

<div className="relative z-10 mx-auto mt-14 w-full max-w-md rounded-2xl border border-neutral-800/80 bg-neutral-900/70 px-4 py-3 shadow-lg">
<div className="flex items-center gap-2.5">
<span className="inline-flex-6 w-6 items-center justify-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-500/30">
<svg className="lucide lucide-cloud h-3.5 w-3.5 text-emerald-300" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a5 5 0 1 1 4.9-6"></path><path d="M17.5 19a4.5 4.5 0 1 0 0-9 5 5 0 0 0-9.5 2"></path></svg>
</span>
<div className="flex-1">
<p className="text-white font-medium">Nova Sync Service</p>
<p className="text-[13px] text-neutral-400">P2P + Local‑first</p>
</div>
</div>
</div>
</div>


<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
<div className="flex gap-2">
<button className="inline-flex hover:bg-neutral-100 active:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-lg pt-2 pr-3.5 pb-2 pl-3.5 items-center justify-center"><svg className="lucide lucide-wand-2 mr-2 h-4 w-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path className="" d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path className="" d="M21 16h-4"></path><path className="" d="M11 3H9"></path></svg>Customize</button>
<button className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 px-3.5 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition">
<svg className="lucide lucide-download mr-2 h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                  Export image
                </button>
</div>
</div>
</div>
</div>
<div className="max-w-xl mr-auto ml-auto">
<div className="ring-1 ring-white/10 shadow-black/40 bg-white/5 rounded-[28px] shadow-2xl backdrop-blur">
<div className="sm:p-6 border-white/10 border-b pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
<svg className="lucide lucide-refresh-ccw w-5 h-5 text-white/80" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</div>
<h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                    Capture a note
                  </h3>
</div>
<div className="flex items-center gap-2 text-emerald-400">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="mt-4 space-y-2.5">
<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
<svg className="lucide lucide-badge-check w-4.5 h-4.5 text-emerald-400 mt-0.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="flex-1">
<p className="text-sm text-white/90 font-medium">
                      Note captured: <span className="text-white">Kickoff meeting</span>
</p>
<p className="text-[13px] text-white/60">Encrypted and signed</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3">
<svg className="lucide lucide-server w-4.5 h-4.5 text-sky-300 mt-0.5" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<div className="flex-1">
<p className="text-sm text-white/80 font-medium">Backlinks generated automatically</p>
<p className="text-[13px] text-white/55">Linked to 12 notes</p>
</div>
</div>
</div>
</div>
<div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-white/7 flex items-center justify-center ring-1 ring-inset ring-white/12">
<svg className="lucide lucide-cloud-upload w-5 h-5 text-white/70" data-lucide="cloud-upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="m16 17-4-4-4 4"></path><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>
</div>
<p className="text-[18px] font-medium text-white/80">Sync to cloud</p>
</div>
<div className="flex items-center gap-2 text-white/40">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
<div className="mt-3 ml-[52px] space-y-2">
<div className="flex items-center gap-2 text-[13px] text-white/55">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/30"></span>
                  Uploading encrypted delta
                </div>
<div className="flex items-center gap-2 text-[13px] text-white/55">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/30"></span>
                  Verifying device signatures
                </div>
</div>
</div>
<div className="sm:p-7 mt-7 mb-0 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-wrap gap-3 mt-5 items-center">
<button className="inline-flex gap-2 hover:bg-white/90 transition text-xs font-medium text-neutral-900 bg-white rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm items-center">
<svg className="lucide lucide-download-cloud w-4.5 h-4.5" data-lucide="download-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 13v8l-4-4"></path><path d="m12 21 4-4"></path><path className="" d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path></svg>
                  Get quickstart
                </button>
<button className="inline-flex gap-2 hover:bg-white/15 ring-1 ring-inset ring-white/15 transition text-xs font-medium text-white bg-white/10 rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 items-center">
                  
                  Privacy overview
                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="relative z-10 mt-10 mb-20 pt-0 pb-0">
<div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight text-center">What can you do with Nova AI?</h2>
<div className="ring-1 ring-white/10 bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-blue-500/20 to-purple-500/10 rounded-2xl mt-10 backdrop-blur">

<div className="grid grid-cols-1 md:grid-cols-3 border-white/10 border-b">
<div className="hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8" onclick="this.classList.add('shine-effect'); setTimeout(() =&gt; this.classList.remove('shine-effect'), 600)">
<div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
<div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-mic h-5 w-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="text-lg text-white">Transform speech to text</h3>
<p className="mt-1 text-sm text-zinc-400">in seconds with AI precision</p>
</div>
<div className="p-8 text-center md:border-l md:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group" onclick="this.classList.add('shine-effect'); setTimeout(() =&gt; this.classList.remove('shine-effect'), 600)">
<div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
<div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-file-text h-5 w-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Create structured content</h3>
<p className="mt-1 text-sm text-zinc-400">from messy brainstorms</p>
</div>
<div className="p-8 text-center md:border-l md:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group" onclick="this.classList.add('shine-effect'); setTimeout(() =&gt; this.classList.remove('shine-effect'), 600)">
<div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
<div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-file-check-2 h-5 w-5" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m3 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Extract insights and tasks</h3>
<p className="mt-1 text-sm text-zinc-400">from complex discussions</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2">
<div className="md:border-r md:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group text-center pt-8 pr-8 pb-8 pl-8" onclick="this.classList.add('shine-effect'); setTimeout(() =&gt; this.classList.remove('shine-effect'), 600)">
<div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
<div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-message-square h-5 w-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Chat with your notes</h3>
<p className="text-sm text-zinc-400 mt-1">to find and organize information</p>
</div>
<div className="p-8 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden group" onclick="this.classList.add('shine-effect'); setTimeout(() =&gt; this.classList.remove('shine-effect'), 600)">
<div className="absolute inset-0 opacity-0 shine-effect-animation pointer-events-none"></div>
<div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-slate-200 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Save your own</h3>
<p className="mt-1 text-sm text-zinc-400">custom prompts</p>
</div>
</div>
</div>
<style>
      @keyframes shine {
        0% {
          transform: translateX(-100%);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translateX(100%);
          opacity: 0;
        }
      }
      
      .shine-effect .shine-effect-animation {
        opacity: 1 !important;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        animation: shine 0.6s ease-out;
      }
    </style>
</div>
</section>

<section className="relative">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-8 pl-4">
<div className="grid gap-10 pt-4 md:grid-cols-12 md:gap-8 md:pt-8">
<div className="md:col-span-7 lg:col-span-8">
<h1 className="leading-tight sm:text-6xl lg:text-7xl text-5xl font-semibold text-white tracking-tight font-sans">
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 pt-0 pb-3">Think clearly.</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600 pt-0 pb-3">Capture instantly.</span>
</h1>
<div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
<div className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-sparkles h-4 w-4 text-violet-300" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Offline‑first
          </div>
<div className="h-px w-24 bg-white/10"></div>
<div className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-shield h-4 w-4 text-violet-300" data-lucide="shield" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            Private by default
          </div>
</div>
</div>
<div className="md:col-span-5 lg:col-span-4">
<p className="text-base leading-relaxed text-slate-300 font-sans">Capture ideas, link them with effortless backlinks, and recall anything in milliseconds—across devices, even offline.</p>
<div className="mt-6 flex items-center gap-3">
<button className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75" id="aura-emejxzef1">Start free trial<svg className="lucide lucide-arrow-right w-[16px] h-[16px]" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
<button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5 border border-white/10">Watch demo<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></button>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
<article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
<div className="flex items-start justify-between">
<span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">New</span>
<button aria-label="Open" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
<svg className="lucide lucide-expand h-4 w-4" data-lucide="expand" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6"></path><path d="m15 9 6-6"></path><path d="M21 16v5h-5"></path><path d="M21 8V3h-5"></path><path d="M3 16v5h5"></path><path d="m3 21 6-6"></path><path d="M3 8V3h5"></path><path d="M9 9 3 3"></path></svg>
</button>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Instant capture</h3>
<p className="text-sm text-slate-300 mt-1">Open a note anywhere. Works offline and syncs when you’re back.</p>
<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="workspace" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/9d1de9bd-4ff4-42aa-a3e3-8a2bb4281aac/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
</article>
<article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
<div className="flex items-start justify-between">
<span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Built‑in</span>
<button aria-label="Open" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
<svg className="lucide lucide-network h-4 w-4" data-lucide="network" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</button>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">Backlinks &amp; graph</h3>
<p className="text-sm text-slate-300 mt-1">Type to link ideas. See relationships with an instant graph.</p>
<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="abstract" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/57c7383f-0520-4ba3-b327-792c429bff72/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
</article>
<article className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-4 shadow-sm backdrop-blur">
<div className="flex items-start justify-between">
<span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200 font-sans">Private</span>
<button aria-label="Open" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
<svg className="lucide lucide-lock h-4 w-4" data-lucide="lock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</button>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white font-sans">AI summaries</h3>
<p className="mt-1 text-sm text-slate-300 font-sans">Turn long notes into crisp takeaways you can act on—locally processed.</p>
<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="minimal" className="aspect-[3/4] w-full object-cover" src="https://cdn.midjourney.com/abdd2d48-3bf3-4630-a8c3-3e28a7f6b4ff/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
</article>
</div>
</div>
</section><section className="relative z-10 mt-10">
<div className="max-w-5xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-20 pl-4">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 p-8 text-center backdrop-blur">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Start organizing your ideas today</h2>
<p className="mt-2 text-zinc-300">Free for individuals. Upgrade when you’re ready to scale.</p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75" href="#" id="aura-emejxzjoj">
              Create your workspace
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5" href="#">
              Compare plans
              <svg className="lucide lucide-credit-card h-4 w-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
<svg className="lucide lucide-asterisk h-4 w-4 text-white" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</span>
<span className="text-sm font-medium text-zinc-300">© 2025 Nova Labs</span>
</div>
<div className="flex items-center gap-4 text-sm text-zinc-400">
<a className="hover:text-zinc-200" href="#">Privacy</a>
<a className="hover:text-zinc-200" href="#">Terms</a>
<a className="hover:text-zinc-200" href="#">Status</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
