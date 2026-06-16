import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // ------- Utilities
      const $ = (sel, root = document) => root.querySelector(sel);
      const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
      const fmtDate = (d) => d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      const toISODate = (d) => d.toISOString().slice(0,10);
      const parseHM = (str) => { const [h,m] = str.split(':').map(Number); return h*60+m; };
      const minuteToTop = (min, startMin, pxPerMin) => (min - startMin) * pxPerMin;
      const isSameISO = (isoA, isoB) => isoA === isoB;
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

      // ------- Data
      const employees = [
        { id: 'alex', name: 'Alex Chen', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop' },
        { id: 'emma', name: 'Emma Davis', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop' },
        { id: 'liam', name: 'Liam Patel', avatar: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=256&auto=format&fit=crop' },
        { id: 'sofia', name: 'Sofia Martinez', avatar: 'https://images.unsplash.com/photo-1544005316-04ce1f1a1c37?q=80&w=256&auto=format&fit=crop' },
      ];

      // Seed dates
      const today = new Date();
      const isoToday = toISODate(today);
      const isoTomorrow = toISODate(new Date(today.getFullYear(), today.getMonth(), today.getDate()+1));
      const isoYesterday = toISODate(new Date(today.getFullYear(), today.getMonth(), today.getDate()-1));

      const projects = [
        { id:'p1', title: 'Website Redesign', assignee:'alex', tag:'Marketing', dueDate: isoToday, status:'in-progress', desc:'Revamp landing pages, improve hero visuals, and update brand palette.' },
        { id:'p2', title: 'Database Migration', assignee:'emma', tag:'Platform', dueDate: isoToday, status:'completed', desc:'Migrate user tables to the new cluster and validate integrity.' },
        { id:'p3', title: 'Mobile QA Sprint', assignee:'liam', tag:'App', dueDate: isoToday, status:'in-progress', desc:'Run regression suite, collect crash reports, and triage blockers.' },
        { id:'p4', title: 'Security Review', assignee:'sofia', tag:'Security', dueDate: isoTomorrow, status:'in-progress', desc:'Audit auth flows, JWT rotation, and permission checks.' },
        { id:'p5', title: 'Partner Onboarding Kit', assignee:'emma', tag:'Operations', dueDate: isoYesterday, status:'completed', desc:'Finalize documentation and checklist for new partners.' },
      ];

      const checklists = [
        { id:'c1', title:'Database Optimization', assignee:'alex', date: isoToday, start:'11:30', end:'13:30', status:'completed', desc:'Analyze slow queries, add indexes, verify improvements.' },
        { id:'c2', title:'Security Audit', assignee:'emma', date: isoToday, start:'14:00', end:'16:00', status:'in-progress', desc:'Run SAST/DAST, review dependencies, update policies.' },
        { id:'c3', title:'Daily Standup', assignee:'liam', date: isoToday, start:'09:00', end:'09:20', status:'completed', desc:'Team updates and blockers.' },
        { id:'c4', title:'Client Demo Prep', assignee:'sofia', date: isoToday, start:'10:00', end:'11:00', status:'in-progress', desc:'Polish deck, rehearse flow, prepare Q&A.' },
        { id:'c5', title:'Bug Triage', assignee:'alex', date: isoTomorrow, start:'15:00', end:'16:00', status:'in-progress', desc:'Review incoming tickets and prioritize.' },
        { id:'c6', title:'Infra Health Check', assignee:'emma', date: isoYesterday, start:'13:00', end:'14:00', status:'completed', desc:'Check latency charts and error budgets.' },
      ];

      // ------- Controls & State
      const state = {
        selectedDateISO: isoToday,
        search: '',
        employee: '',
        status: '',
        projSort: 'status',   // 'status' | 'name'
        listSort: 'time',     // 'time' | 'name' | 'status'
        // timeline config
        startHM: '08:00',
        endHM: '18:00',
        pxPerMin: 1.2, // 1 min = 1.2px, 10h => 720px
      };

      // ------- Init UI
      function initControls() {
        // Date picker
        const dateInput = $('#datePicker');
        dateInput.value = state.selectedDateISO;
        $('#todayBtn').addEventListener('click', () => {
          state.selectedDateISO = isoToday;
          dateInput.value = state.selectedDateISO;
          renderAll();
          focusButton($('#todayBtn'));
        });
        dateInput.addEventListener('change', (e) => {
          state.selectedDateISO = e.target.value || isoToday;
          renderAll();
        });

        // Populate employee filter
        const empSel = $('#employeeFilter');
        employees.forEach(e => {
          const o = document.createElement('option');
          o.value = e.id;
          o.textContent = e.name;
          empSel.appendChild(o);
        });
        empSel.addEventListener('change', (e) => {
          state.employee = e.target.value;
          renderAll();
        });

        // Status filter
        $('#statusFilter').addEventListener('change', (e) => {
          state.status = e.target.value;
          renderAll();
        });

        // Search
        $('#searchInput').addEventListener('input', (e) => {
          state.search = e.target.value.trim().toLowerCase();
          renderAll();
        });

        // Sort buttons
        $('#projSortStatus').addEventListener('click', () => {
          state.projSort = 'status'; setPressed('#projSortStatus', true); setPressed('#projSortName', false); renderProjects();
        });
        $('#projSortName').addEventListener('click', () => {
          state.projSort = 'name'; setPressed('#projSortStatus', false); setPressed('#projSortName', true); renderProjects();
        });
        $('#listSortTime').addEventListener('click', () => {
          state.listSort = 'time'; setPressed('#listSortTime', true); setPressed('#listSortName', false); setPressed('#listSortStatus', false); renderChecklists();
        });
        $('#listSortName').addEventListener('click', () => {
          state.listSort = 'name'; setPressed('#listSortTime', false); setPressed('#listSortName', true); setPressed('#listSortStatus', false); renderChecklists();
        });
        $('#listSortStatus').addEventListener('click', () => {
          state.listSort = 'status'; setPressed('#listSortTime', false); setPressed('#listSortName', false); setPressed('#listSortStatus', true); renderChecklists();
        });

        // Modal events
        $('#modalClose').addEventListener('click', hideModal);
        $('#modalCancel').addEventListener('click', hideModal);
        $('#detailModal').addEventListener('click', (e) => { if (e.target.id === 'detailModal') hideModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideModal(); });
      }

      function setPressed(sel, pressed) {
        const btn = $(sel);
        btn.setAttribute('aria-pressed', pressed ? 'true' : 'false');
        // subtly highlight when pressed via bg
        if (pressed) btn.classList.add('bg-white');
        else btn.classList.remove('bg-white');
      }

      function focusButton(btn) {
        btn.focus({ preventScroll: true });
      }

      // ------- Render Functions
      function renderAll() {
        $('#selectedDateLabel').textContent = fmtDate(new Date(state.selectedDateISO));
        $('#projectsDateLabel').textContent = isSameISO(state.selectedDateISO, isoToday) ? 'Today' : fmtDate(new Date(state.selectedDateISO));
        $('#checklistsDateLabel').textContent = fmtDate(new Date(state.selectedDateISO));
        renderProjects();
        renderChecklists();
        lucide.createIcons();
      }

      function matchesFilters(item, type) {
        // type 'project' or 'checklist'
        const empOk = !state.employee || item.assignee === state.employee;
        const statusMap = { 'in-progress':'in-progress', 'completed':'completed' };
        const statValue = item.status;
        const statusOk = !state.status || statValue === state.status;
        const text = (item.title + ' ' + (employees.find(e=>e.id===item.assignee)?.name ?? '') + ' ' + (item.tag ?? '')).toLowerCase();
        const searchOk = !state.search || text.includes(state.search);
        const dateOk = type === 'project' ? isSameISO(item.dueDate, state.selectedDateISO) : isSameISO(item.date, state.selectedDateISO);
        return empOk && statusOk && searchOk && dateOk;
      }

      function renderProjects() {
        const list = $('#projectsList');
        list.innerHTML = '';

        let items = projects.filter(p => matchesFilters(p, 'project'));

        // sorting
        if (state.projSort === 'status') {
          const order = { 'in-progress': 0, 'completed': 1 };
          items.sort((a,b) => order[a.status]-order[b.status] || a.title.localeCompare(b.title));
        } else {
          items.sort((a,b) => a.title.localeCompare(b.title));
        }

        if (items.length === 0) {
          const empty = document.createElement('div');
          empty.className = "p-6 text-sm text-neutral-600";
          empty.textContent = "No projects due for the selected date.";
          list.appendChild(empty);
          return;
        }

        items.forEach(p => {
          const assignee = employees.find(e => e.id === p.assignee);
          const row = document.createElement('button');
          row.type = 'button';
          row.className = "group w-full text-left hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";
          row.setAttribute('tabindex', '0');
          row.addEventListener('click', () => openModal({
            kind:'project', title:p.title, assignee, when: isSameISO(p.dueDate, isoToday) ? 'Due Today' : 'Due: ' + fmtDate(new Date(p.dueDate)),
            status:p.status, desc:p.desc, tag:p.tag
          }));

          row.innerHTML = `
            <div class="px-4 sm:px-5 py-4">
              <div class="flex items-start justify-between">
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="text-base font-semibold tracking-tight text-neutral-900">${p.title}</span>
                    <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-2 py-0.5 text-[10px]">Project</span>
                  </div>
                  <div class="mt-2 flex items-center gap-3">
                    <span class="inline-flex items-center">
                      <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="" class="h-6 w-6 rounded-full object-cover" />
                      <span class="ml-2 text-sm text-neutral-800">${assignee.name}</span>
                    </span>
                    <span class="text-xs text-neutral-500">•</span>
                    <span class="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">${p.tag}</span>
                  </div>
                </div>
                <div class="text-right shrink-0 ml-4">
                  <span class="inline-flex items-center gap-1 rounded-full ${p.status==='completed'?'bg-green-50 text-green-700 border border-green-200':'bg-amber-50 text-amber-700 border border-amber-200'} px-2.5 py-1 text-xs font-medium">
                    <i data-lucide="${p.status==='completed'?'check':'hourglass'}" class="h-3.5 w-3.5"></i>
                    ${p.status==='completed'?'Completed':'In Progress'}
                  </span>
                  <div class="mt-2 text-xs text-neutral-500"> ${isSameISO(p.dueDate, isoToday)?'Due Today':'Due: ' + fmtDate(new Date(p.dueDate))} </div>
                </div>
              </div>
            </div>
          `;
          list.appendChild(row);
        });
      }

      function renderChecklists() {
        // Prepare timeline scaffold
        const startMin = parseHM(state.startHM);
        const endMin = parseHM(state.endHM);
        const totalMin = endMin - startMin;
        const pxPerMin = state.pxPerMin;
        const heightPx = totalMin * pxPerMin;

        const canvas = $('#timelineCanvas');
        const timeRail = $('#timeRail');
        const tracks = $('#checklistTracks');

        // Set height for columns
        [timeRail, canvas, tracks].forEach(el => el.style.height = heightPx + 'px');

        // Build markers every 30 minutes
        timeRail.innerHTML = '';
        for (let m = startMin; m <= endMin; m += 30) {
          const top = minuteToTop(m, startMin, pxPerMin);
          const label = document.createElement('div');
          label.className = "absolute left-2 -translate-y-1/2";
          label.style.top = top + 'px';
          const hh = String(Math.floor(m/60)).padStart(2,'0');
          const mm = String(m%60).padStart(2,'0');
          label.innerHTML = `<div class="text-[10px] text-neutral-500 font-medium">${hh}:${mm}</div>`;
          timeRail.appendChild(label);

          // horizontal guide line in cards area
          const hline = document.createElement('div');
          hline.className = "absolute left-0 right-0 border-t border-neutral-100";
          hline.style.top = top + 'px';
          tracks.appendChild(hline);
        }

        // Current time line if selected is today
        const currentLine = $('#currentTimeLine');
        if (isSameISO(state.selectedDateISO, isoToday)) {
          const now = new Date();
          const mNow = now.getHours()*60 + now.getMinutes();
          const y = clamp(minuteToTop(mNow, startMin, pxPerMin), 0, heightPx);
          currentLine.style.top = y + 'px';
          currentLine.classList.remove('hidden');
          currentLine.innerHTML = `<div class="absolute right-0 -translate-y-1/2 translate-x-2 bg-red-500 text-white text-[10px] rounded px-1.5 py-0.5">Current Time</div>`;
        } else {
          currentLine.classList.add('hidden');
          currentLine.innerHTML = '';
        }

        // Filter checklist items
        let items = checklists.filter(c => matchesFilters(c, 'checklist'));

        // Sorting
        if (state.listSort === 'time') {
          items.sort((a,b) => parseHM(a.start)-parseHM(b.start) || a.title.localeCompare(b.title));
        } else if (state.listSort === 'name') {
          items.sort((a,b) => a.title.localeCompare(b.title));
        } else {
          const order = { 'in-progress': 0, 'completed': 1 };
          items.sort((a,b) => order[a.status]-order[b.status] || parseHM(a.start)-parseHM(b.start));
        }

        // Clear old cards
        // Keep guide lines (added above) by resetting tracks first
        tracks.innerHTML = tracks.innerHTML; // preserve guide lines added earlier (no-op here since we readded lines above)

        // If none
        if (items.length === 0) {
          const empty = document.createElement('div');
          empty.className = "absolute inset-0 flex items-center justify-center";
          empty.innerHTML = `<div class="text-sm text-neutral-600">No checklist tasks scheduled for the selected date.</div>`;
          tracks.appendChild(empty);
          return;
        }

        // Render cards
        items.forEach(c => {
          const assignee = employees.find(e => e.id === c.assignee);
          const start = parseHM(c.start);
          const end = parseHM(c.end);
          const top = minuteToTop(start, startMin, pxPerMin);
          const duration = Math.max(32, (end - start) * pxPerMin); // ensure min height for very short tasks

          const card = document.createElement('button');
          card.type = 'button';
          card.className = "group absolute left-4 right-4 sm:left-6 sm:right-6 text-left rounded-lg border border-green-200 bg-green-50 hover:bg-green-100 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";
          card.style.top = top + 'px';
          card.style.height = duration + 'px';
          card.setAttribute('tabindex', '0');
          card.addEventListener('click', () => openModal({
            kind:'checklist', title:c.title, assignee, when:`${c.start}–${c.end} on ${fmtDate(new Date(c.date))}`, status:c.status, desc:c.desc, tag:'Checklist'
          }));

          card.innerHTML = `
            <div class="px-4 py-3">
              <div class="flex items-start justify-between">
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-medium text-neutral-900">${c.title}</span>
                    <span class="inline-flex items-center gap-1 rounded-full border border-green-200 bg-white text-green-700 px-2 py-0.5 text-[10px]">Time-based</span>
                  </div>
                  <div class="mt-1 flex items-center gap-3 text-xs text-neutral-700">
                    <span class="inline-flex items-center">
                      <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="" class="h-5 w-5 rounded-full object-cover" />
                      <span class="ml-2">${assignee.name}</span>
                    </span>
                    <span class="text-neutral-500">•</span>
                    <span class="inline-flex items-center gap-1 text-neutral-700"><i data-lucide="clock" class="h-3.5 w-3.5"></i> ${c.start}–${c.end}</span>
                  </div>
                </div>
                <span class="shrink-0 inline-flex items-center gap-1 rounded-full ${c.status==='completed'?'bg-green-600/10 text-green-700 border border-green-200':'bg-amber-50 text-amber-700 border border-amber-200'} px-2.5 py-1 text-xs font-medium">
                  <i data-lucide="${c.status==='completed'?'check':'hourglass'}" class="h-3.5 w-3.5"></i>
                  ${c.status==='completed'?'Completed':'In Progress'}
                </span>
              </div>
            </div>
          `;
          tracks.appendChild(card);
        });
      }

      // ------- Modal
      function openModal({kind, title, assignee, when, status, desc, tag}) {
        $('#modalTitle').textContent = title;
        $('#modalSub').textContent = kind==='project' ? 'Project — Date-based' : 'Checklist — Time-based';
        $('#modalAssignee').textContent = assignee.name;
        $('#modalAvatar').src = assignee.avatar;
        $('#modalWhen').textContent = when;
        $('#modalDesc').textContent = desc || 'No additional description.';
        const badge = $('#modalStatus');
        badge.textContent = (status==='completed'?'Completed':'In Progress');
        badge.className = "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium " + (status==='completed'?'bg-green-50 text-green-700 border border-green-200':'bg-amber-50 text-amber-700 border border-amber-200');
        $('#modalTag').textContent = tag;

        $('#detailModal').classList.remove('hidden');
        // Focus primary button for accessibility
        setTimeout(() => $('#modalPrimary').focus(), 0);
      }
      function hideModal() {
        $('#detailModal').classList.add('hidden');
      }

      // ------- Boot
      document.addEventListener('DOMContentLoaded', () => {
        initControls();
        renderAll();
        lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

<div className="flex items-center gap-3">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="calendar"></i>
<input aria-label="Select date" className="peer w-48 md:w-56 rounded-lg border border-neutral-300 bg-white pl-9 pr-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 outline-none shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500" id="datePicker" type="date"/>
</div>
<button aria-label="Jump to today" className="inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500" id="todayBtn">
<i className="h-4 w-4" data-lucide="radar"></i>
                Today
              </button>
<span className="hidden md:inline text-sm text-neutral-600" id="selectedDateLabel">Selected: —</span>
</div>

<div className="flex flex-1 md:flex-none items-center gap-3">
<div className="relative flex-1 md:flex-none md:w-64">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="search"></i>
<input aria-label="Search" className="w-full rounded-lg border border-neutral-300 bg-white pl-9 pr-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 outline-none shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500" id="searchInput" placeholder="Search tasks or projects" type="text"/>
</div>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="users"></i>
<select className="appearance-none w-40 rounded-lg border border-neutral-300 bg-white pl-9 pr-8 py-2 text-sm text-neutral-900 outline-none shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500" id="employeeFilter">
<option value="">All Employees</option>
</select>
<i className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</div>
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="filter"></i>
<select className="appearance-none w-40 rounded-lg border border-neutral-300 bg-white pl-9 pr-8 py-2 text-sm text-neutral-900 outline-none shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500" id="statusFilter">
<option value="">All Statuses</option>
<option value="in-progress">In Progress</option>
<option value="completed">Completed</option>
</select>
<i className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="mb-5">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Timeline — Date-filtered Projects &amp; Checklists</h1>
<p className="mt-1 text-sm text-neutral-600">The selected date applies to both columns. Projects are date-based (no time). Checklists are scheduled with exact times.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<section aria-labelledby="projects-header" className="bg-white rounded-xl border border-neutral-200 shadow-sm">
<div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-neutral-200">
<div>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900" id="projects-header">Projects — Due on <span id="projectsDateLabel">—</span></h2>
<p className="text-xs text-neutral-600 mt-1">Date-based items only. No start/end time.</p>
</div>

<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Sort:</span>
<div aria-label="Sort projects" className="inline-flex rounded-lg border border-neutral-200 bg-neutral-50 overflow-hidden" role="group">
<button aria-pressed="true" className="px-3 py-1.5 text-xs text-neutral-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 aria-pressed:bg-white" id="projSortStatus">Status</button>
<button aria-pressed="false" className="px-3 py-1.5 text-xs text-neutral-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" id="projSortName">Name</button>
</div>
</div>
</div>
<div className="divide-y divide-neutral-100" id="projectsList">

</div>
</section>

<section aria-labelledby="checklists-header" className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-neutral-200">
<div>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900" id="checklists-header">Checklists — <span id="checklistsDateLabel">—</span></h2>
<p className="text-xs text-neutral-600 mt-1">Time-based tasks aligned to the hourly timeline.</p>
</div>

<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Sort:</span>
<div aria-label="Sort checklist" className="inline-flex rounded-lg border border-neutral-200 bg-neutral-50 overflow-hidden" role="group">
<button aria-pressed="true" className="px-3 py-1.5 text-xs text-neutral-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" id="listSortTime">Time</button>
<button aria-pressed="false" className="px-3 py-1.5 text-xs text-neutral-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" id="listSortName">Name</button>
<button aria-pressed="false" className="px-3 py-1.5 text-xs text-neutral-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" id="listSortStatus">Status</button>
</div>
</div>
</div>

<div className="relative">

<div className="relative max-h-[70vh] overflow-auto" id="timelineScroll">

<div className="relative flex" id="timelineCanvas">

<div className="relative shrink-0 w-20 bg-white" id="timeRail">

</div>

<div className="relative shrink-0 w-10">
<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200"></div>
<div className="hidden absolute left-0 right-0 h-px bg-red-500" id="currentTimeLine"></div>
</div>

<div className="relative grow" id="checklistTracks">

</div>
</div>
</div>
</div>
</section>
</div>
</main>

<div aria-hidden="true" className="hidden fixed inset-0 z-40" id="detailModal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div aria-labelledby="modalTitle" aria-modal="true" className="w-full max-w-lg rounded-xl bg-white shadow-xl border border-neutral-200 focus:outline-none" role="dialog">
<div className="flex items-start justify-between px-5 py-4 border-b border-neutral-200">
<div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900" id="modalTitle">Task details</h3>
<p className="text-xs text-neutral-600 mt-1" id="modalSub"></p>
</div>
<button aria-label="Close" className="p-2 rounded-md hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" id="modalClose">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-4 space-y-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" id="modalAvatar" src=""/>
<div className="text-sm">
<div className="font-medium text-neutral-900" id="modalAssignee"></div>
<div className="text-neutral-600" id="modalWhen"></div>
</div>
</div>
<div className="text-sm text-neutral-700">
<div className="leading-relaxed" id="modalDesc"></div>
</div>
<div className="flex items-center gap-2 pt-2">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium" id="modalStatus"></span>
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 text-neutral-700 px-2.5 py-1 text-xs" id="modalTag">Project</span>
</div>
</div>
<div className="px-5 py-3 bg-neutral-50 border-t border-neutral-200 flex justify-end gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500" id="modalPrimary">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
                Mark as Completed
              </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-sm px-3 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" id="modalCancel">
<i className="h-4 w-4" data-lucide="x-circle"></i>
                Close
              </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
