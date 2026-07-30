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



      // Utilities
      const $ = (s, c=document) => c.querySelector(s);
      const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));

      // Today label
      const d = new Date();
      $('#todayLabel').textContent = d.toLocaleDateString(undefined, { weekday:'long', month:'short', day:'numeric' });

      // Demo Data
      const schedule = [
        { time: '09:00', title: 'Standup', type: 'internal', where: 'Zoom' },
        { time: '10:30', title: 'Deposition Prep', type: 'activity', where: 'War Room' },
        { time: '13:00', title: 'Client Call — J. Rivera', type: 'meeting', where: 'Phone' },
        { time: '15:30', title: 'Discovery Review', type: 'activity', where: 'Docs' },
      ];

      const tasks = [
        { id:'t1', title:'Draft demand letter', due: addHours(new Date(), 2), status:'open', priority:'High' },
        { id:'t2', title:'Upload medical bills', due: endOfDay(new Date()), status:'open', priority:'Medium' },
        { id:'t3', title:'Call insurance adjuster', due: addHours(new Date(), -3), status:'missed', priority:'High' },
        { id:'t4', title:'Email police report to client', due: addHours(new Date(), -26), status:'missed', priority:'Low' },
      ];

      const cases = [
        { caseId: '23-0018', client:'Alex Morgan', status:'Discovery', nextDue:addHours(new Date(), 6), priority:'High' },
        { caseId: '23-0121', client:'Jamie Lee', status:'Intake', nextDue:addHours(new Date(), 30), priority:'Medium' },
      ];

      function addHours(date, h){ const x=new Date(date); x.setHours(x.getHours()+h); return x; }
      function endOfDay(date){ const x=new Date(date); x.setHours(23,59,0,0); return x; }
      function fmt(d){ return d.toLocaleString(undefined, { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' }); }

      // Schedule render
      function renderSchedule(){
        const ul = $('#scheduleList');
        ul.innerHTML = '';
        schedule.forEach(item => {
          const color = item.type==='meeting' ? 'bg-neutral-900' : item.type==='activity' ? 'bg-[rgb(22_163_74/1)]' : 'bg-amber-500';
          const li = document.createElement('li');
          li.className = 'flex items-center gap-4 py-3';
          li.innerHTML = `
            <div class="w-16 text-sm font-medium">${item.time}</div>
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 ${color} rounded-full"></span>
                <p class="text-sm font-medium">${item.title}</p>
              </div>
              <p class="text-xs text-neutral-500 mt-1">${item.where}</p>
            </div>
            <button class="text-xs text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1">
              <i data-lucide="calendar-plus" class="w-4 h-4"></i> Add
            </button>
          `;
          ul.appendChild(li);
        });
        $('#meetingsCount').textContent = schedule.length;
      }

      // Tasks render
      function renderTasks(){
        const todayList = $('#tasksTodayList');
        const missedList = $('#missedTasksList');
        todayList.innerHTML = '';
        missedList.innerHTML = '';

        const now = new Date();
        let dueToday = 0, missed = 0, alerts = 0;

        tasks.forEach(t => {
          const isToday = t.due.toDateString() === now.toDateString() && t.status === 'open' && t.due >= now;
          const isMissed = t.status === 'missed' || t.due < now;
          const dueSoon = t.due - now <= 3*60*60*1000; // 3h

          if (isToday) dueToday++;
          if (isMissed) missed++;
          if (dueSoon || isMissed) alerts++;

          const li = document.createElement('li');
          li.className = 'flex items-start gap-3 rounded-lg border border-neutral-200 p-3';
          const timeMeta = `<span class="text-xs text-neutral-500">${fmt(t.due)}</span>`;
          const chip = t.priority === 'High'
            ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 ring-1 ring-rose-200">High</span>'
            : t.priority === 'Medium'
              ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">Medium</span>'
              : '<span class="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200">Low</span>';

          // Custom checkbox button
          const checkBtn = `
            <button data-check="${t.id}" class="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-neutral-300 bg-white text-white transition">
              <i data-lucide="check" class="w-3.5 h-3.5 opacity-0"></i>
            </button>
          `;

          li.innerHTML = `
            ${checkBtn}
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <p class="text-sm font-medium">${t.title}</p>
                ${chip}
              </div>
              <div class="mt-1 flex items-center gap-2">${timeMeta}</div>
            </div>
            <button class="text-xs text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1">
              <i data-lucide="clock" class="w-4 h-4"></i> Reschedule
            </button>
          `;

          if (isMissed) {
            li.classList.add('bg-rose-50/40');
            missedList.appendChild(li);
          } else if (isToday) {
            todayList.appendChild(li);
          }
        });

        $('#dueTodayCount').textContent = dueToday;
        $('#missedCount').textContent = missed;
        $('#alertCount').textContent = alerts;

        // Bind checkbox behavior
        $$('[data-check]').forEach(btn => {
          btn.addEventListener('click', () => {
            btn.classList.toggle('bg-neutral-900');
            btn.classList.toggle('border-neutral-900');
            const icon = btn.querySelector('[data-lucide="check"]');
            if (icon) icon.style.opacity = icon.style.opacity === '1' ? '0' : '1';
            // mark task complete
            const id = btn.getAttribute('data-check');
            const t = tasks.find(x => x.id === id);
            if (t) t.status = 'done';
            renderTasks();
            renderAlerts();
            renderChart();
            lucide.createIcons();
          });
        });
      }

      // Alerts render
      function renderAlerts(){
        const list = $('#alertList');
        list.innerHTML = '';
        const now = new Date();

        // Build alerts from tasks
        const alerts = tasks
          .filter(t => t.status !== 'done')
          .map(t => {
            const overdue = t.due < now;
            const dueSoon = !overdue && (t.due - now <= 3*60*60*1000);
            if (!(overdue || dueSoon)) return null;
            return {
              id: t.id,
              title: t.title,
              when: overdue ? 'Overdue' : 'Due soon',
              detail: overdue ? `${timeAgo(t.due)} late` : `in ${timeIn(t.due)}`,
              tone: overdue ? 'rose' : 'amber'
            };
          })
          .filter(Boolean)
          .slice(0, 6);

        alerts.forEach(a => {
          const li = document.createElement('li');
          li.className = 'flex items-start gap-3 rounded-lg border border-neutral-200 p-3';
          li.innerHTML = `
            <div class="mt-0.5">
              <i data-lucide="${a.tone === 'rose' ? 'alert-octagon' : 'alarm-clock'}" class="w-4 h-4 ${a.tone === 'rose' ? 'text-rose-600' : 'text-amber-600'}"></i>
            </div>
            <div class="-1">
              <div class="flex items-center gap-2">
                <p class="text-sm font-medium">${a.title}</p>
                <span class="text-[10px] px-2 py-0.5 rounded-full ${a.tone==='rose'?'bg-rose-50 text-rose-700 ring-rose-200':'bg-amber-50 text-amber-700 ring-amber-200'} ring-1">${a.when}</span>
              </div>
              <p class="mt-1 text-xs text-neutral-500">${a.detail}</p>
            </div>
            <button class="text-xs text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1">
              <i data-lucide="bell-off" class="w-4 h-4"></i> Snooze
            </button>
          `;
          list.appendChild(li);
        });
      }

      function timeAgo(date){
        const diff = Math.max(1, Math.floor((new Date() - date)/60000));
        if (diff < 60) return `${diff}m`;
        const h = Math.floor(diff/60);
        return `${h}h`;
      }
      function timeIn(date){
        const diff = Math.max(1, Math.floor((date - new Date())/60000));
        if (diff < 60) return `${diff}m`;
        const h = Math.floor(diff/60);
        return `${h}h`;
      }

      // Cases render
      function renderCases(){
        const tbody = $('#assignedCasesBody');
        tbody.innerHTML = '';
        cases.forEach(c => {
          const tr = document.createElement('tr');
          tr.className = 'border-b border-neutral-100';
          tr.innerHTML = `
            <td class="py-3 pr-4">
              <div class="flex items-center gap-2">
                <i data-lucide="briefcase" class="w-4 h-4 text-neutral-500"></i>
                <span class="font-medium">${c.caseId}</span>
              </div>
            </td>
            <td class="py-3 pr-4">${c.client}</td>
            <td class="py-3 pr-4">
              <span class="text-xs px-2 py-1 rounded-full ring-1 ring-neutral-200">${c.status}</span>
            </td>
            <td class="py-3 pr-4 text-neutral-600">${fmt(c.nextDue)}</td>
            <td class="py-3 pr-4">
              ${c.priority === 'High'
                ? '<span class="text-xs px-2 py-1 rounded-full bg-rose-50 text-rose-700 ring-1 ring-rose-200">High</span>'
                : c.priority === 'Medium'
                ? '<span class="text-xs px-2 py-1 rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">Medium</span>'
                : '<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200">Low</span>'
              }
            </td>
          `;
          tbody.appendChild(tr);
        });
      }

      // Chart
      let chart;
      function renderChart(){
        const complete = tasks.filter(t => t.status==='done').length;
        const pending = tasks.filter(t => t.status!=='done').length;
        const missed = tasks.filter(t => (t.status==='missed' || t.due < new Date())).length;

        const data = [complete, pending, missed];
        const ctx = document.getElementById('progressChart');
        if (chart) chart.destroy();
        chart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Done', 'Pending', 'Missed'],
            datasets: [{
              data,
              backgroundColor: ['rgb(22,163,74)', '#111827', '#F43F5E'],
              borderWidth: 0
            }]
          },
          options: {
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true }
            },
            cutout: '68%',
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }

      // Toggle switches
      function bindSwitches(){
        $$('[data-switch]').forEach(sw => {
          sw.addEventListener('click', () => {
            const on = sw.getAttribute('aria-checked') === 'true';
            sw.setAttribute('aria-checked', String(!on));
            if (!on) {
              sw.classList.remove('bg-neutral-200');
              sw.classList.add('bg-[rgb(22_163_74/1)]');
              sw.querySelector('span').classList.remove('translate-x-0');
              sw.querySelector('span').classList.add('translate-x-5');
            } else {
              sw.classList.add('bg-neutral-200');
              sw.classList.remove('bg-[rgb(22_163_74/1)]');
              sw.querySelector('span').classList.add('translate-x-0');
              sw.querySelector('span').classList.remove('translate-x-5');
            }
            if (sw.getAttribute('name') === 'police_report') {
              $('#reportNumberWrap').classList.toggle('hidden', sw.getAttribute('aria-checked') !== 'true');
            }
            if (sw.getAttribute('name') === 'prev_attorney') {
              $('#prevAttorneyWrap').classList.toggle('hidden', sw.getAttribute('aria-checked') !== 'true');
            }
          });
        });
      }

      // Quick Entry submission -> add to Assigned Cases + create a task due today
      $('#quickEntryForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = fd.get('name');
        const tel = fd.get('tel');
        const when = new Date(fd.get('accident_date'));
        const location = fd.get('location');
        const calledPolice = $('[data-switch[name="called_police"]').getAttribute('aria-checked') === 'true';
        const policeArrived = $('[data-switch[name="police_arrived"]').getAttribute('aria-checked') === 'true';
        const policeReport = $('[data-switch[name="police_report"]').getAttribute('aria-checked') === 'true';
        const reportNum = fd.get('report_number') || '';
        const prevAtty = $('[data-switch[name="prev_attorney"]').getAttribute('aria-checked') === 'true';
        const prevAttyName = fd.get('prev_attorney_name') || '';

        // Create a new case
        const newCaseId = `INT-${String(Math.floor(Math.random()*900)+100)}`;
        cases.unshift({
          caseId: newCaseId,
          client: name,
          status: 'Intake',
          nextDue: addHours(new Date(), 24),
          priority: 'High'
        });

        // Auto-create a task due today
        const newTaskId = 't' + Math.random().toString(36).slice(2,6);
        tasks.unshift({
          id: newTaskId,
          title: `Call ${name} (${tel}) — Intake`,
          due: endOfDay(new Date()),
          status: 'open',
          priority: 'High'
        });

        // Optionally create an alert if police report promised but not provided
        if (calledPolice && !policeReport) {
          tasks.unshift({
            id: 't' + Math.random().toString(36).slice(2,6),
            title: 'Request police report' + (reportNum ? ` #${reportNum}` : ''),
            due: addHours(new Date(), 4),
            status: 'open',
            priority: 'Medium'
          });
        }

        // Rerender
        renderCases();
        renderTasks();
        renderAlerts();
        renderChart();
        lucide.createIcons();

        // Reset form minimal
        e.currentTarget.reset();
        // Reset toggles
        $$('[data-switch]').forEach(sw => {
          sw.setAttribute('aria-checked', 'false');
          sw.classList.add('bg-neutral-200'); sw.classList.remove('bg-[rgb(22_163_74/1)]');
          sw.querySelector('span').classList.add('translate-x-0'); sw.querySelector('span').classList.remove('translate-x-5');
        });
        $('#reportNumberWrap').classList.add('hidden');
        $('#prevAttorneyWrap').classList.add('hidden');

        // Small toast
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 right-4 z-50 rounded-lg border border-neutral-200 bg-white px-4 py-2 shadow-sm text-sm';
        toast.innerHTML = `<span class="inline-flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-[rgb(22_163_74/var(--tw-text-opacity,1))]"></i> Case ${newCaseId} created and assigned.</span>`;
        document.body.appendChild(toast);
        lucide.createIcons();
        setTimeout(() => toast.remove(), 2600);
      });

      // Photo input label
      $('#photoInput').addEventListener('change', (e)=>{
        const c = e.target.files.length;
        $('#photoLabel').textContent = c ? `${c} file${c>1?'s':''} selected` : 'Drag & drop or click to upload';
      });

      // Snooze all alerts (simple demo)
      $('#snoozeAll').addEventListener('click', () => {
        // push due times by 1h for pending tasks
        tasks.filter(t => t.status!=='done').forEach(t => t.due = addHours(t.due, 1));
        renderTasks(); renderAlerts(); renderChart(); lucide.createIcons();
      });

      // Add sample case button
      $('#addSampleCase').addEventListener('click', () => {
        cases.push({ caseId: `23-${String(Math.floor(Math.random()*9000)+1000)}`, client: 'Sample Client', status:'Discovery', nextDue: addHours(new Date(), 12), priority:'Low' });
        renderCases(); lucide.createIcons();
      });

      // Jump to quick entry
      $('#quickEntryJump').addEventListener('click', () => {
        document.getElementById('quickEntryForm').scrollIntoView({ behavior:'smooth', block:'start' });
      });

      // Initial render
      renderSchedule();
      renderTasks();
      renderAlerts();
      renderCases();
      renderChart();
      bindSwitches();
      lucide.createIcons();
    
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
      

<div className="min-h-screen">

<header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
</div>
<span className="text-lg font-semibold tracking-tight">Personal Dashboard</span>
<span className="hidden sm:inline text-neutral-400">•</span>
<span className="hidden sm:inline text-sm text-neutral-500" id="todayLabel"></span>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-64 rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Search cases, tasks…" type="text" />
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 active:scale-[0.98] transition" id="quickEntryJump">
<i className="w-4 h-4" data-lucide="plus"></i>
                Quick Entry
              </button>
<div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-neutral-200">
<img alt="user avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
</div>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">Deadline Alerts</span>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-amber-700 text-xs ring-1 ring-amber-200">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i> Watch
              </span>
</div>
<div className="mt-3 flex items-end justify-between">
<p className="text-3xl font-semibold tracking-tight" id="alertCount">0</p>
<p className="text-sm text-neutral-500">due soon or overdue</p>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">Tasks Due Today</span>
<i className="w-4 h-4 text-[rgb(22_163_74/var(--tw-text-opacity,1))]" data-lucide="check-circle-2"></i>
</div>
<div className="mt-3 flex items-end justify-between">
<p className="text-3xl font-semibold tracking-tight" id="dueTodayCount">0</p>
<p className="text-sm text-neutral-500">auto-generated</p>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">Missed Tasks</span>
<i className="w-4 h-4 text-rose-600" data-lucide="x-octagon"></i>
</div>
<div className="mt-3 flex items-end justify-between">
<p className="text-3xl font-semibold tracking-tight" id="missedCount">0</p>
<p className="text-sm text-neutral-500">needs follow-up</p>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-500">Meetings Today</span>
<i className="w-4 h-4 text-neutral-700" data-lucide="calendar"></i>
</div>
<div className="mt-3 flex items-end justify-between">
<p className="text-3xl font-semibold tracking-tight" id="meetingsCount">0</p>
<p className="text-sm text-neutral-500">schedule</p>
</div>
</div>
</section>

<section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Weekly Progress</h2>
<span className="text-xs text-neutral-500">Updated 5m ago</span>
</div>
<p className="mt-1 text-sm text-neutral-500">Completion across assigned tasks.</p>
<div className="mt-4">
<div className="relative">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<div className="h-48">
<canvas id="progressChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Deadline Alerts</h2>
<button className="text-sm text-neutral-600 hover:text-neutral-900" id="snoozeAll">Snooze all</button>
</div>
<ul className="mt-4 space-y-3" id="alertList">

</ul>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Today’s Schedule</h2>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full ring-1 ring-neutral-200">
<span className="h-2 w-2 rounded-full bg-neutral-900"></span> Meeting
                  </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full ring-1 ring-neutral-200">
<span className="h-2 w-2 rounded-full bg-[rgb(22_163_74/1)]"></span> Activity
                  </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full ring-1 ring-200">
<span className="h-2 w-2 rounded-full bg-amber-500"></span> Internal
                  </span>
</div>
</div>
<ul className="mt-4 divide-y divide-neutral-200" id="scheduleList">

</ul>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<h2 className="text-xl font-semibold tracking-tight">Tasks Due Today</h2>
<ul className="mt-4 space-y-3" id="tasksTodayList">

</ul>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<h2 className="text-xl font-semibold tracking-tight">Missed Tasks</h2>
<ul className="mt-4 space-y-3" id="missedTasksList">

</ul>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Assigned Cases</h2>
<button className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900" id="addSampleCase">
<i className="w-4 h-4" data-lucide="plus"></i> Add sample
                </button>
</div>
<div className="mt-4 overflow-x-auto">
<table className="w-full text-sm">
<thead className="text-left text-neutral-500">
<tr className="border-b border-neutral-200">
<th className="py-2 pr-4 font-medium">Case</th>
<th className="py-2 pr-4 font-medium">Client</th>
<th className="py-2 pr-4 font-medium">Status</th>
<th className="py-2 pr-4 font-medium">Next Due</th>
<th className="py-2 pr-4 font-medium">Priority</th>
</tr>
</thead>
<tbody className="align-top" id="assignedCasesBody">

</tbody>
</table>
</div>
</div>
</div>

<aside className="space-y-6">

<div className="rounded-xl border border-neutral-200 overflow-hidden">
<div className="h-28 w-full bg-neutral-100">
<img alt="minimal banner" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1000&auto=format&fit=crop" />
</div>
<div className="p-5 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-neutral-200">
<img alt="user" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop" />
</div>
<div>
<p className="text-sm text-neutral-500">Welcome back,</p>
<p className="text-base font-semibold tracking-tight">Your daily focus</p>
</div>
</div>
</div>
</div>

<form className="rounded-xl border border-neutral-200 bg-white p-5" id="quickEntryForm">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl font-semibold tracking-tight">Quick Entry</h2>
<span className="text-xs text-neutral-500">New intake</span>
</div>
<div className="space-y-4">

<div>
<label className="block text-sm font-medium text-neutral-700">Name</label>
<div className="mt-1 relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="user"></i>
<input className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" name="name" placeholder="Client full name" required />
</div>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700">Tel</label>
<div className="mt-1 relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="phone"></i>
<input className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" name="tel" placeholder="+1 (555) 555-1234" required type="tel" />
</div>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700">When did the accident happen?</label>
<div className="mt-1 relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="calendar"></i>
<input className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" name="accident_date" required type="datetime-local" />
</div>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700">Location of the accident</label>
<div className="mt-1 relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="map-pin"></i>
<input className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" name="location" placeholder="Street, City, State" required />
</div>
</div>

<div className="flex items-center justify-between">
<label className="text-sm font-medium text-neutral-700">Called police?</label>
<button aria-checked="false" className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-200 transition" data-switch="" name="called_police" type="button">
<span className="inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow ring-1 ring-neutral-300 transition"></span>
</button>
</div>

<div className="flex items-center justify-between">
<label className="text-sm font-medium text-neutral-700">Did police arrive?</label>
<button aria-checked="false" className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-200 transition" data-switch="" name="police_arrived" type="button">
<span className="inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow ring-1 ring-neutral-300 transition"></span>
</button>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-neutral-700">Police report?</label>
<button aria-checked="false" className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-200 transition" data-switch="" name="police_report" type="button">
<span className="inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow ring-1 ring-neutral-300 transition"></span>
</button>
</div>
<div className="hidden" id="reportNumberWrap">
<div className="relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="file-text"></i>
<input className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" name="report_number" placeholder="Report # (optional)" />
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700">Photos?</label>
<div className="mt-1">
<label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-neutral-50/50 px-3 py-8 text-sm text-neutral-600 hover:bg-neutral-50">
<i className="w-4 h-4" data-lucide="camera"></i>
<span id="photoLabel">Drag & drop or click to upload</span>
<input accept="image/*" className="sr-only" id="photoInput" multiple="" name="photos" type="file" />
</label>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-neutral-700">Do you have a previous attorney?</label>
<button aria-checked="false" className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-200 transition" data-switch="" name="prev_attorney" type="button">
<span className="inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow ring-1 ring-neutral-300 transition"></span>
</button>
</div>
<div className="hidden" id="prevAttorneyWrap">
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" name="prev_attorney_name" placeholder="Attorney / Firm name (optional)" />
</div>
</div>

<div className="flex items-center justify-between pt-2">
<p className="text-xs text-neutral-500">Saved to Assigned Cases on submit.</p>
<button className="inline-flex items-center gap-2 rounded-lg bg-[rgb(22_163_74/1)] hover:bg-[rgb(22_163_74/.9)] px-3.5 py-2.5 text-sm font-medium text-white active:scale-[0.98] transition">
<i className="w-4 h-4" data-lucide="send"></i>
                    Create case
                  </button>
</div>
</div>
</form>
</aside>
</section>
</main>
</div>


    </>
  );
}
