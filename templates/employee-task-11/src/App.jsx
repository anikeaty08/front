import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // State
      const state = {
        employee: 'Misbah Salam',
        department: 'All',
        view: 'Daily', // Daily | Weekly | Monthly
        dateFrom: '2025-11-01',
        dateTo: '2025-11-30',
        search: '',
        performance: { bt: 5, bd: 2 },
        tasks: [
          {
            id: 1,
            title: 'Collect Client Feedback',
            category: 'Operations',
            status: 'BreakThrough',
            dependency: 'Yes (CEO Review)',
            start: '2025-11-12',
            end: '2025-11-14',
            desc: 'Gather post-onboarding feedback from new clients to refine service delivery.',
            icon: 'message-square'
          },
          {
            id: 2,
            title: 'Q4 KPI Review & Adjustments',
            category: 'Management',
            status: 'Pending',
            dependency: 'No',
            start: '2025-11-08',
            end: '2025-11-10',
            desc: 'Review KPIs and propose adjustments for Q4 targets.',
            icon: 'bar-chart-3'
          },
          {
            id: 3,
            title: 'WhatsApp Campaign Impact Report',
            category: 'Marketing',
            status: 'BreakDown',
            dependency: 'Yes (Data Team)',
            start: '2025-11-04',
            end: '2025-11-07',
            desc: 'Analyze CTR and conversion rates from WhatsApp campaign.',
            icon: 'pie-chart'
          },
          {
            id: 4,
            title: 'Project Atlas Sprint 12',
            category: 'Project Atlas',
            status: 'BreakThrough',
            dependency: 'No',
            start: '2025-11-16',
            end: '2025-11-22',
            desc: 'Complete sprint backlog for Atlas with cross-team collaboration.',
            icon: 'boxes'
          },
          {
            id: 5,
            title: 'Staff JD Clarification',
            category: 'Management',
            status: 'Pending',
            dependency: 'Yes (HR)',
            start: '2025-11-01',
            end: '2025-11-03',
            desc: 'Ensure all staff members have clearly defined job descriptions.',
            icon: 'id-card'
          },
          {
            id: 6,
            title: 'Procurement Briefs',
            category: 'Operations',
            status: 'BreakThrough',
            dependency: 'No',
            start: '2025-11-18',
            end: '2025-11-19',
            desc: 'Send inventory briefs to procurement team.',
            icon: 'package'
          },
          {
            id: 7,
            title: 'Scheduled Meetings + MoM',
            category: 'Management',
            status: 'BreakDown',
            dependency: 'No',
            start: '2025-11-25',
            end: '2025-11-26',
            desc: 'Conduct meetings and prepare minutes of meeting.',
            icon: 'calendar-days'
          }
        ]
      };

      // Utility: dates
      const toDate = (d) => new Date(d + 'T00:00:00');
      const fmt = (d) => {
        const dt = new Date(d);
        const dd = String(dt.getDate()).padStart(2, '0');
        const mm = String(dt.getMonth() + 1).padStart(2, '0');
        const yyyy = dt.getFullYear();
        return `${dd}-${mm}-${yyyy}`;
      };
      const formatRangePretty = (from, to) => {
        const df = new Date(from), dt = new Date(to);
        const opt = { day: '2-digit', month: 'short', year: 'numeric' };
        const f = df.toLocaleDateString(undefined, opt).replace(',', '');
        const t = dt.toLocaleDateString(undefined, opt).replace(',', '');
        return `${f} — ${t}`;
      };
      function getISOWeek(date) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
      }
      const dayDiff = (a, b) => Math.round((toDate(b) - toDate(a)) / 86400000);

      // Colors
      const statusStyles = {
        'BreakThrough': { bg: '#ECFDF5', text: '#065F46', border: '#34D399' },
        'BreakDown': { bg: '#FEF2F2', text: '#7F1D1D', border: '#FCA5A5' },
        'Pending': { bg: '#FFF7ED', text: '#7C2D12', border: '#F59E0B' }
      };

      // Elements
      const searchInput = document.getElementById('searchInput');
      const dateFromEl = document.getElementById('dateFrom');
      const dateToEl = document.getElementById('dateTo');
      const empLabel = document.querySelector('[data-select="employee"] [data-label]');
      const deptLabel = document.querySelector('[data-select="department"] [data-label]');
      const viewButtons = () => Array.from(document.querySelectorAll('.view-btn'));
      const periodLine = document.getElementById('timelinePeriod');
      const empNameEl = document.getElementById('empName');
      const empDeptEl = document.getElementById('empDept');
      const totalTasksEl = document.getElementById('totalTasks');
      const btChipEl = document.getElementById('btChip');
      const bdChipEl = document.getElementById('bdChip');
      const summaryLine = document.getElementById('summaryLine');

      // Timeline DOM
      const timelineHeader = document.getElementById('timelineHeader');
      const timelineCanvas = document.getElementById('timelineCanvas');
      const gridLines = document.getElementById('gridLines');
      const todayIndicator = document.getElementById('todayIndicator');
      const taskBars = document.getElementById('taskBars');
      const timelineScroll = document.getElementById('timelineScroll');

      // Drawer
      const drawer = document.getElementById('taskDrawer');
      const drawerClose = document.getElementById('drawerClose');
      const drawerTitle = document.getElementById('drawerTitle');
      const drawerTask = document.getElementById('drawerTask');
      const drawerStatus = document.getElementById('drawerStatus');
      const drawerCategory = document.getElementById('drawerCategory');
      const drawerStart = document.getElementById('drawerStart');
      const drawerEnd = document.getElementById('drawerEnd');
      const drawerDependency = document.getElementById('drawerDependency');
      const drawerDesc = document.getElementById('drawerDesc');

      // Tooltip
      const tooltip = document.getElementById('tooltip');

      // Header dropdown
      const downloadBtn = document.getElementById('downloadBtn');
      const downloadMenu = document.getElementById('downloadMenu');
      downloadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllDropdowns(downloadMenu);
        downloadMenu.classList.toggle('hidden');
      });
      downloadMenu.querySelectorAll('[data-download]').forEach((item) => {
        item.addEventListener('click', () => {
          const type = item.getAttribute('data-download');
          if (type === 'pdf') handlePDF();
          if (type === 'excel') handleExcel();
          downloadMenu.classList.add('hidden');
        });
      });

      document.getElementById('toggleFilters').addEventListener('click', () => {
        const section = document.getElementById('filtersSection');
        section.classList.toggle('hidden');
      });

      // Custom selects (employee, department)
      document.querySelectorAll('[data-select]').forEach((wrap) => {
        const btn = wrap.querySelector('[data-trigger]');
        const menu = wrap.querySelector('[data-options]');
        const label = wrap.querySelector('[data-label]');
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllDropdowns(menu);
          menu.classList.toggle('hidden');
        });
        menu.querySelectorAll('[data-option]').forEach((opt) => {
          opt.addEventListener('click', () => {
            const val = opt.textContent.trim();
            label.textContent = val;
            menu.classList.add('hidden');
            const key = wrap.getAttribute('data-select');
            if (key === 'employee') {
              state.employee = val;
              empNameEl.textContent = val;
            } else if (key === 'department') {
              state.department = val;
            }
            renderTimeline();
          });
        });
      });

      function closeAllDropdowns(except) {
        document.querySelectorAll('[data-options]').forEach((m) => {
          if (m !== except) m.classList.add('hidden');
        });
        const headerMenu = document.getElementById('downloadMenu');
        if (headerMenu && headerMenu !== except) headerMenu.classList.add('hidden');
      }
      document.addEventListener('click', () => closeAllDropdowns());

      // View segmented toggle
      function syncViewButtons() {
        viewButtons().forEach(btn => {
          const active = btn.getAttribute('data-view') === state.view;
          btn.classList.toggle('bg-[#F0781F]/10', active);
          btn.classList.toggle('text-[#F0781F]', active);
          btn.classList.toggle('border', active);
          btn.classList.toggle('border-[#F0781F]/30', active);
        });
      }
      viewButtons().forEach(btn => {
        btn.addEventListener('click', () => {
          state.view = btn.getAttribute('data-view');
          syncViewButtons();
          renderTimeline();
        });
      });
      syncViewButtons();

      // Search
      searchInput.addEventListener('input', (e) => {
        state.search = e.target.value.toLowerCase();
        renderTimeline();
      });

      // Date changes
      dateFromEl.addEventListener('change', () => {
        if (!dateFromEl.value) return;
        if (dateToEl.value && toDate(dateFromEl.value) > toDate(dateToEl.value)) {
          dateToEl.value = dateFromEl.value;
        }
        state.dateFrom = dateFromEl.value;
        state.dateTo = dateToEl.value || state.dateFrom;
        renderTimeline();
      });
      dateToEl.addEventListener('change', () => {
        if (!dateToEl.value) return;
        if (dateFromEl.value && toDate(dateToEl.value) < toDate(dateFromEl.value)) {
          dateFromEl.value = dateToEl.value;
        }
        state.dateFrom = dateFromEl.value || state.dateTo;
        state.dateTo = dateToEl.value;
        renderTimeline();
      });

      // Reset
      document.getElementById('resetBtn').addEventListener('click', () => {
        state.employee = 'Misbah Salam';
        state.department = 'All';
        state.view = 'Daily';
        state.dateFrom = '2025-11-01';
        state.dateTo = '2025-11-30';
        state.search = '';
        document.querySelector('[data-select="employee"] [data-label]').textContent = state.employee;
        document.querySelector('[data-select="department"] [data-label]').textContent = state.department;
        dateFromEl.value = state.dateFrom;
        dateToEl.value = state.dateTo;
        searchInput.value = '';
        empNameEl.textContent = state.employee;
        empDeptEl.textContent = 'Management';
        syncViewButtons();
        renderTimeline();
      });

      // Drawer controls
      drawerClose.addEventListener('click', closeDrawer);
      function openDrawer(task) {
        drawerTitle.textContent = 'Task Details';
        drawerTask.textContent = task.title;
        drawerStatus.textContent = task.status;
        drawerCategory.textContent = task.category;
        drawerStart.textContent = fmt(task.start);
        drawerEnd.textContent = fmt(task.end);
        drawerDependency.textContent = task.dependency;
        drawerDesc.textContent = task.desc || '—';
        drawer.classList.remove('translate-x-full');
        setTimeout(() => lucide.createIcons(), 0);
      }
      function closeDrawer() {
        drawer.classList.add('translate-x-full');
      }

      // Tooltip helpers
      function showTooltip(html, x, y) {
        tooltip.innerHTML = html;
        tooltip.style.left = Math.min(x + 12, window.innerWidth - 280) + 'px';
        tooltip.style.top = y + 12 + 'px';
        tooltip.classList.remove('hidden');
      }
      function hideTooltip() {
        tooltip.classList.add('hidden');
      }

      // Build timeline
      function getTimelineColumns() {
        const start = toDate(state.dateFrom);
        const end = toDate(state.dateTo);
        const cols = [];
        if (state.view === 'Daily') {
          const d = new Date(start);
          while (d <= end) {
            cols.push({ key: d.toISOString().slice(0,10), date: new Date(d), label: d.getDate(), weekend: [0,6].includes(d.getDay()) });
            d.setDate(d.getDate() + 1);
          }
        } else if (state.view === 'Weekly') {
          // start from Monday
          const s = new Date(start);
          const day = s.getDay(); // 0 Sunday
          const diffToMon = (day === 0 ? -6 : 1 - day);
          s.setDate(s.getDate() + diffToMon);
          const d = s;
          while (d <= end) {
            const w = getISOWeek(d);
            cols.push({ key: 'W' + w + '-' + d.getFullYear(), date: new Date(d), label: 'W' + w, weekend: false });
            d.setDate(d.getDate() + 7);
          }
        } else {
          // Monthly
          const sYear = start.getFullYear(), sMonth = start.getMonth();
          const eYear = end.getFullYear(), eMonth = end.getMonth();
          let y = sYear, m = sMonth;
          while (y < eYear || (y === eYear && m <= eMonth)) {
            const d = new Date(y, m, 1);
            const label = d.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
            cols.push({ key: `${y}-${m+1}`, date: d, label, weekend: false });
            m++; if (m > 11) { m = 0; y++; }
          }
        }
        return cols;
      }

      function filterTasks() {
        const q = state.search;
        const dept = state.department;
        return state.tasks.filter(t => {
          const inDept = dept === 'All' ? true : t.category === dept;
          const match = !q || t.title.toLowerCase().includes(q) || state.employee.toLowerCase().includes(q);
          // Overlap with range?
          const s = toDate(t.start), e = toDate(t.end);
          const rs = toDate(state.dateFrom), re = toDate(state.dateTo);
          const overlaps = s <= re && e >= rs;
          return inDept && match && overlaps;
        });
      }

      function assignLanes(tasks) {
        const lanes = []; // each lane stores last end date
        const placed = [];
        const sorted = [...tasks].sort((a,b) => toDate(a.start) - toDate(b.start) || toDate(a.end) - toDate(b.end));
        sorted.forEach(task => {
          let lane = 0;
          while (lane < lanes.length && toDate(task.start) <= lanes[lane]) lane++;
          lanes[lane] = toDate(task.end);
          placed.push({ ...task, lane });
        });
        return { placed, laneCount: lanes.length };
      }

      function renderTimeline() {
        // Header info
        periodLine.textContent = `${formatRangePretty(state.dateFrom, state.dateTo)} • ${state.view}`;
        empDeptEl.textContent = state.department === 'All' ? 'Management' : state.department;

        const tasks = filterTasks();
        totalTasksEl.textContent = String(tasks.length);
        const bt = tasks.filter(t => t.status === 'BreakThrough').length;
        const bd = tasks.filter(t => t.status === 'BreakDown').length;
        btChipEl.textContent = bt;
        bdChipEl.textContent = bd;

        // Build columns
        const cols = getTimelineColumns();
        const colWidth = state.view === 'Daily' ? 72 : (state.view === 'Weekly' ? 96 : 128);
        const headerHeight = 40;
        const rowHeight = 40;
        const rowGap = 8;
        const leftPad = 0;

        // Header
        timelineHeader.innerHTML = '';
        timelineHeader.style.display = 'grid';
        timelineHeader.style.gridTemplateColumns = `repeat(${cols.length}, ${colWidth}px)`;
        timelineHeader.style.minWidth = `${cols.length * colWidth}px`;
        timelineHeader.style.height = headerHeight + 'px';
        cols.forEach((c, idx) => {
          const isToday = (state.view === 'Daily') && (c.date.toDateString() === new Date().toDateString());
          const cell = document.createElement('div');
          cell.className = 'flex items-center justify-center border-l border-gray-200 text-sm';
          if (idx === cols.length - 1) cell.className += ' border-r';
          cell.style.background = isToday ? '#EEF2FF' : (c.weekend && state.view==='Daily' ? '#F9FAFB' : '#F3F4F6');
          cell.innerHTML = state.view === 'Daily'
            ? `<div class="flex flex-col items-center">
                 <div class="${isToday ? 'font-medium text-[#111827]' : 'text-gray-700'}">${c.label}</div>
                 <div class="text-[11px] text-gray-500">${c.date.toLocaleDateString(undefined, { weekday: 'short' })}</div>
               </div>`
            : `<div class="${isToday ? 'font-medium text-[#111827]' : 'text-gray-700'}">${c.label}</div>`;
          timelineHeader.appendChild(cell);
        });

        // Grid lines
        const totalWidth = cols.length * colWidth + leftPad;
        gridLines.innerHTML = '';
        gridLines.style.minWidth = totalWidth + 'px';

        // Prepare rows/bars container dimensions
        const { placed, laneCount } = assignLanes(tasks);
        const canvasHeight = laneCount * (rowHeight + rowGap) + rowGap;
        taskBars.innerHTML = '';
        taskBars.style.minWidth = totalWidth + 'px';
        taskBars.style.height = canvasHeight + 'px';

        // Draw vertical lines and weekend shading
        cols.forEach((c, idx) => {
          const x = idx * colWidth + leftPad;
          // Vertical line
          const v = document.createElement('div');
          v.className = 'absolute top-0 bottom-0';
          v.style.left = x + 'px';
          v.style.width = '1px';
          v.style.background = '#E5E7EB';
          gridLines.appendChild(v);
          // Rightmost border
          if (idx === cols.length) {
            const r = document.createElement('div');
            r.className = 'absolute top-0 bottom-0';
            r.style.left = totalWidth + 'px';
            r.style.width = '1px';
            r.style.background = '#E5E7EB';
            gridLines.appendChild(r);
          }
          // Weekend shade (daily)
          if (state.view === 'Daily' && c.weekend) {
            const shade = document.createElement('div');
            shade.className = 'absolute top-0 bottom-0';
            shade.style.left = x + 'px';
            shade.style.width = colWidth + 'px';
            shade.style.background = '#F9FAFB';
            shade.style.opacity = '0.8';
            gridLines.appendChild(shade);
          }
        });

        // Today indicator
        const today = new Date();
        let todayIndex = -1;
        if (state.view === 'Daily') {
          todayIndex = cols.findIndex(c => c.date.toDateString() === today.toDateString());
        } else if (state.view === 'Weekly') {
          // find week column containing today
          todayIndex = cols.findIndex((c, i) => {
            const startOfCol = new Date(c.date);
            const endOfCol = new Date(startOfCol); endOfCol.setDate(endOfCol.getDate() + 6);
            return today >= startOfCol && today <= endOfCol;
          });
        } else {
          todayIndex = cols.findIndex((c) => c.date.getMonth() === today.getMonth() && c.date.getFullYear() === today.getFullYear());
        }
        if (todayIndex >= 0) {
          todayIndicator.style.display = 'block';
          todayIndicator.style.left = (todayIndex * colWidth + leftPad) + 'px';
        } else {
          todayIndicator.style.display = 'none';
        }

        // Place task bars
        const rangeStart = toDate(state.dateFrom);
        const rangeEnd = toDate(state.dateTo);
        placed.forEach(task => {
          // Clamp to visible range
          const s = toDate(task.start) < rangeStart ? rangeStart : toDate(task.start);
          const e = toDate(task.end) > rangeEnd ? rangeEnd : toDate(task.end);

          let startIdx = 0, endIdx = 0;
          if (state.view === 'Daily') {
            startIdx = Math.max(0, dayDiff(state.dateFrom, s.toISOString().slice(0,10)));
            endIdx = Math.min(cols.length - 1, dayDiff(state.dateFrom, e.toISOString().slice(0,10)));
          } else if (state.view === 'Weekly') {
            // map to week index
            const startWeek = getISOWeek(s);
            const endWeek = getISOWeek(e);
            const firstWeek = getISOWeek(cols[0].date);
            startIdx = Math.max(0, startWeek - firstWeek);
            endIdx = Math.max(startIdx, endWeek - firstWeek);
          } else {
            // Monthly
            const startKey = s.getFullYear() + '-' + (s.getMonth()+1);
            const endKey = e.getFullYear() + '-' + (e.getMonth()+1);
            startIdx = Math.max(0, cols.findIndex(c => c.key === startKey));
            endIdx = Math.max(startIdx, cols.findIndex(c => c.key === endKey));
          }

          const left = startIdx * colWidth + leftPad + 2;
          const width = Math.max(colWidth * (endIdx - startIdx + 1) - 4, 32);
          const top = task.lane * (rowHeight + rowGap) + rowGap;

          const sStyle = statusStyles[task.status] || statusStyles['Pending'];
          const bar = document.createElement('button');
          bar.className = 'absolute rounded-md text-left shadow-sm border hover:shadow transition focus:outline-none focus:ring-2';
          bar.style.left = left + 'px';
          bar.style.top = top + 'px';
          bar.style.width = width + 'px';
          bar.style.height = (rowHeight) + 'px';
          bar.style.background = sStyle.bg;
          bar.style.borderColor = sStyle.border;
          bar.style.color = sStyle.text;

          // Content
          bar.innerHTML = `
            <div class="flex items-center h-full px-2 gap-2 overflow-hidden">
              <i data-lucide="${task.icon || 'file-text'}" class="w-4 h-4 shrink-0" stroke-width="1.5"></i>
              <div class="truncate text-[12px]">${task.title}</div>
              ${task.dependency && task.dependency.toLowerCase().startsWith('yes')
                ? '<span class="ml-auto h-1.5 w-1.5 rounded-full bg-gray-900 shrink-0"></span>'
                : ''}
            </div>
          `;

          // Tooltip
          bar.addEventListener('mouseenter', (ev) => {
            const html = `
              <div class="font-medium mb-0.5">${task.title}</div>
              <div class="text-gray-600">Status: ${task.status}</div>
              <div class="text-gray-600">Duration: ${fmt(task.start)}–${fmt(task.end)}</div>
              <div class="text-gray-600">Dependency: ${task.dependency}</div>
            `;
            showTooltip(html, ev.clientX, ev.clientY);
          });
          bar.addEventListener('mousemove', (ev) => {
            showTooltip(tooltip.innerHTML, ev.clientX, ev.clientY);
          });
          bar.addEventListener('mouseleave', hideTooltip);

          // Drawer open
          bar.addEventListener('click', () => openDrawer(task));

          taskBars.appendChild(bar);
        });

        // Summary footer line
        const from = toDate(state.dateFrom);
        const to = toDate(state.dateTo);
        const weekFrom = getISOWeek(from);
        const weekTo = getISOWeek(to);
        summaryLine.textContent = `Showing tasks for ${state.employee} from ${from.toLocaleDateString(undefined, { day:'2-digit', month:'short', year:'numeric' })}–${to.toLocaleDateString(undefined, { day:'2-digit', month:'short', year:'numeric' })} (Week ${weekFrom}–${weekTo})`;

        // Scroll into view: today or start
        requestAnimationFrame(() => {
          const targetLeft = todayIndex >= 0 ? Math.max(todayIndex * colWidth - 200, 0) : 0;
          timelineScroll.scrollLeft = targetLeft;
          lucide.createIcons();
        });
      }

      // Initial render
      function init() {
        dateFromEl.value = state.dateFrom;
        dateToEl.value = state.dateTo;
        empNameEl.textContent = state.employee;
        empDeptEl.textContent = 'Management';
        btChipEl.textContent = state.performance.bt;
        bdChipEl.textContent = state.performance.bd;
        renderTimeline();
      }
      init();

      // Footer exports use current filtered tasks
      function handlePDF() {
        window.print();
      }
      function handleExcel() {
        const tasks = filterTasks();
        const rows = [['Title', 'Category', 'Status', 'Dependency', 'Start', 'End']];
        tasks.forEach(t => rows.push([t.title, t.category, t.status, t.dependency, t.start, t.end]));
        rows.push([]);
        const from = toDate(state.dateFrom), to = toDate(state.dateTo);
        rows.push(['Employee', state.employee]);
        rows.push(['Period', `${formatRangePretty(state.dateFrom, state.dateTo)} (${state.view})`]);
        rows.push(['Weeks', `${getISOWeek(from)}–${getISOWeek(to)}`]);
        const csv = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Employee_Timeline_${state.employee.replace(/\s+/g, '_')}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">

<header className="print:hidden flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h1 className="text-[20px] font-semibold tracking-tight">Employee Timeline</h1>
<p className="text-sm text-gray-600">Track tasks assigned to each employee over time.</p>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">

<div className="relative w-full sm:w-80">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
</span>
<input className="w-full rounded-lg border border-gray-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F0781F]/40 focus:border-[#F0781F] transition" id="searchInput" placeholder="Search employee or task…" type="search"/>
</div>

<button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F0781F]/40" id="toggleFilters">
<i className="w-4 h-4" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
            Filters
          </button>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F0781F]/40" id="downloadBtn">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
              Export
              <i className="w-4 h-4 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-44 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg z-20" id="downloadMenu">
<button className="flex w-full items-center gap-2 px-3.5 py-2.5 text-sm hover:bg-gray-50" data-download="pdf">
<i className="w-4 h-4" data-lucide="file-down" strokeWidth="1.5"></i>
                PDF
              </button>
<button className="flex w-full items-center gap-2 px-3.5 py-2.5 text-sm hover:bg-gray-50" data-download="excel">
<i className="w-4 h-4" data-lucide="file-spreadsheet" strokeWidth="1.5"></i>
                Excel
              </button>
</div>
</div>
</div>
</header>

<section className="print:hidden mt-6" id="filtersSection">
<div className="rounded-xl bg-white shadow-sm border border-gray-100">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4">

<div className="relative" data-select="employee">
<label className="block text-[12px] text-gray-600 mb-1">Select Employee</label>
<button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F0781F]/40" data-trigger="" type="button">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-500" data-lucide="user-round" strokeWidth="1.5"></i>
<span data-label="">Misbah Salam</span>
</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down" stroke-width1.5"=""></i>
</button>
<div className="hidden absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg" data-options="">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-option="">Misbah Salam</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-option="">Ayesha Khan</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-option="">Zain Ali</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-option="">Sara Iqbal</button>
</div>
</div>

<div className="">
<label className="block text-[12px] text-gray-600 mb-1">Timeline View</label>
<div className="inline-flex rounded-lg border border-gray-200 bg-white p-0.5">
<button className="view-btn rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-[#F0781F]/40" data-view="Daily">Daily</button>
<button className="view-btn rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-[#F0781F]/40" data-view="Weekly">Weekly</button>
<button className="view-btn rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-[#F0781F]/40" data-view="Monthly">Monthly</button>
</div>
</div>

<div>
<label className="block text-[12px] text-gray-600 mb-1">From</label>
<div className="relative">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
</span>
<input className="w-full rounded-lg border border-gray-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F0781F]/40 focus:border-[#F0781F]" id="dateFrom" type="date" value="2025-11-01"/>
</div>
</div>

<div>
<label className="block text-[12px] text-gray-600 mb-1">To</label>
<div className="relative">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
</span>
<input className="w-full rounded-lg border border-gray-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F0781F]/40 focus:border-[#F0781F]" id="dateTo" type="date" value="2025-11-30"/>
</div>
</div>

<div className="relative" data-select="department">
<label className="block text-[12px] text-gray-600 mb-1">Department / Project</label>
<button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F0781F]/40" data-trigger="" type="button">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-500" data-lucide="building-2" strokeWidth="1.5"></i>
<span data-label="">All</span>
</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg" data-options="">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-option="">All</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-option="">Management</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-option="">Operations</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-option="">Marketing</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-option="">Project Atlas</button>
</div>
</div>
</div>
<div className="flex items-center justify-end gap-3 p-4 border-t border-gray-100">
<button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F0781F]/40" id="resetBtn">
              Reset Filters
            </button>

<button className="hidden rounded-lg bg-[#F0781F] px-4 py-2 text-sm font-medium text-white hover:bg-[#e06f1d] focus:outline-none focus:ring-2 focus:ring-[#F0781F]/40" id="generateBtn">
              Refresh
            </button>
</div>
</div>
</section>

<section className="mt-8" id="reportSection">
<div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">

<div className="p-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
<div>
<h2 className="text-[16px] font-medium">Employee Information</h2>
</div>
<p className="mt-1 sm:mt-0 text-sm text-gray-600" id="timelinePeriod"></p>
</div>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-3">
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">Employee Name</div>
<div className="text-sm mt-0.5" id="empName">Misbah Salam</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">Department</div>
<div className="text-sm mt-0.5" id="empDept">Management</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">Total Tasks</div>
<div className="text-sm mt-0.5" id="totalTasks">7</div>
</div>
<div className="rounded-lg border border-gray-200 p-3 flex items-center justify-between">
<div className="text-[12px] text-gray-500">BreakThrough / BreakDown</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs border" id="btChip" style={{color: '#16A34A', background: '#F0FDF4', borderColor: '#BBF7D0'}}>5</span>
<span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs border" id="bdChip" style={{color: '#DC2626', background: '#FEEE2', borderColor: '#FCA5A5'}}>2</span>
</div>
</div>
</div>
</div>
<div className="h-px bg-gray-100"></div>

<div className="relative">
<div className="overflow-x-auto" id="timelineScroll" style={{scrollBehavior: 'smooth'}}>
<div className="min-w-full" id="timelineContainer">

<div className="sticky top-0 z-10 bg-[#F3F4F6] border-y border-gray-200" id="timelineHeader"></div>

<div className="relative bg-white" id="timelineCanvas">

<div className="pointer-events-none absolute inset-0" id="gridLines"></div>

<div className="pointer-events-none absolute top-0 bottom-0 w-px" id="todayIndicator" style={{background: '#F0781F', opacity: '0.9', display: 'none'}}></div>

<div className="relative" id="taskBars"></div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-100">
<div className="flex flex-wrap items-center gap-4 text-sm">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full" style={{background: '#16A34A'}}></span>
<span>BreakThrough</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full" style={{background: '#DC2626'}}></span>
<span>BreakDown</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full" style={{background: '#D97706'}}></span>
<span>Pending</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-gray-900"></span>
<span>Dependency</span>
</div>
</div>
<p className="mt-2 text-sm text-gray-700" id="summaryLine">Showing tasks for Misbah Salam from 01–30 Nov 2025 (Week 45–48)</p>
</div>
</div>
</section>
</div>

<div className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white shadow-xl border-l border-gray-200 translate-x-full transition-transform z-40" id="taskDrawer">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-500" data-lucide="file-text" id="drawerIcon" strokeWidth="1.5"></i>
<h4 className="text-[16px] font-medium tracking-tight" id="drawerTitle">Task Details</h4>
</div>
<button className="rounded-md p-1 hover:bg-gray-50 border border-transparent hover:border-gray-200" id="drawerClose">
<i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-4 space-y-3 text-sm">
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">Task</div>
<div className="mt-0.5" id="drawerTask">—</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">Status</div>
<div className="mt-0.5" id="drawerStatus">—</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">Category</div>
<div className="mt-0.5" id="drawerCategory">—</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">Start</div>
<div className="mt-0.5" id="drawerStart">—</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">End</div>
<div className="mt-0.5" id="drawerEnd">—</div>
</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">Dependency</div>
<div className="mt-0.5" id="drawerDependency">—</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[12px] text-gray-500">Description</div>
<div className="mt-0.5 text-gray-700" id="drawerDesc">—</div>
</div>
</div>
</div>

<div className="hidden fixed z-50 rounded-md border border-gray-200 bg-white shadow-sm px-3 py-2 text-[12px] text-gray-700 pointer-events-none" id="tooltip"></div>


    </>
  );
}
