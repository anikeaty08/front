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
    const $ = (s, el=document) => el.querySelector(s);
    const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));
    const fmt = (d) => d.toLocaleDateString(undefined,{month:'short',day:'2-digit'});
    const pad = (n) => String(n).padStart(2,'0');
    const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    const parseISO = (s) => { const [y,m,d]=s.split('-').map(Number); return new Date(y, m-1, d); };
    const addDays = (d, n) => { const x=new Date(d); x.setDate(x.getDate()+n); return x; };
    const diffDays = (a,b) => Math.round((parseISO(b)-parseISO(a))/(1000*60*60*24));
    const monthSpanTitle = (start,end) => {
      const s = parseISO(start), e = parseISO(end);
      const sameYear = s.getFullYear()===e.getFullYear();
      const left = s.toLocaleDateString(undefined,{month:'long'});
      const right = e.toLocaleDateString(undefined,{month:'long'});
      const y = sameYear ? e.getFullYear() : `${s.getFullYear()}–${e.getFullYear()}`;
      return left===right? `${left} ${y}`: `${left} – ${right} ${y}`;
    };

    // State
    const state = {
      range: { start: '2025-01-24', end: '2025-02-07' },
      view: 'month',
      filter: 'All',
      selectedDayIndex: 0,
      lanes: [
        'Research & Wireframe',
        'High Fidelity Website',
        'Development',
      ],
      tasks: [
        {
          id: 't1',
          title: 'Research & Wireframe',
          lane: 'Research & Wireframe',
          start: '2025-01-24', end: '2025-01-28',
          status: 'Ongoing',
          color: 'emerald',
          assignees: [
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop'
          ]
        },
        {
          id: 't2',
          title: 'High Fidelity Website',
          lane: 'High Fidelity Website',
          start: '2025-01-26', end: '2025-01-30',
          status: 'Urgent',
          color: 'rose',
          assignees: [
            'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=200&auto=format&fit=crop',
          ]
        },
        {
          id: 't3',
          title: 'Wireframe Website',
          lane: 'High Fidelity Website',
          start: '2025-01-29', end: '2025-02-02',
          status: 'Done',
          color: 'emerald',
          assignees: [
            'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop',
          ]
        },
        {
          id: 't4',
          title: 'Research Dev Team',
          lane: 'Research & Wireframe',
          start: '2025-01-31', end: '2025-02-04',
          status: 'Ongoing',
          color: 'emerald',
          assignees: [
            'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop'
          ]
        },
        {
          id: 't5',
          title: 'Front-end Website',
          lane: 'Development',
          start: '2025-02-02', end: '2025-02-06',
          status: 'Soon',
          color: 'amber',
          assignees: [
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop'
          ]
        },
        {
          id: 't6',
          title: 'Website QA',
          lane: 'Development',
          start: '2025-02-03', end: '2025-02-07',
          status: 'Soon',
          color: 'amber',
          assignees: [
            'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop',
          ]
        },
      ]
    };

    // Derived
    const getDays = () => {
      const s = parseISO(state.range.start);
      const e = parseISO(state.range.end);
      const days = [];
      for (let d = new Date(s); d <= e; d = addDays(d,1)) days.push(new Date(d));
      return days;
    };

    // DOM refs
    const daysRow = $('#daysRow');
    const daysScroller = $('#daysScroller');
    const lanesWrap = $('#lanesWrap');
    const cursorLine = $('#cursorLine');
    const monthTitle = $('#monthTitle');
    const viewToggle = $('#viewToggle');

    const startInput = $('#startInput');
    const endInput = $('#endInput');
    const todayBtn = $('#todayBtn');
    const prevBtn = $('#prevBtn');
    const nextBtn = $('#nextBtn');

    const searchInput = $('#searchInput');
    const filterBtn = $('#filterBtn');
    const filterMenu = $('#filterMenu');

    const taskModal = $('#taskModal');
    const modalTitle = $('#modalTitle');
    const modalStart = $('#modalStart');
    const modalEnd = $('#modalEnd');
    const laneSelectBtn = $('#laneSelectBtn');
    const laneSelectMenu = $('#laneSelectMenu');
    const laneSelectLabel = $('#laneSelectLabel');
    const createTaskBtn = $('#createTask');
    const cancelCreateBtn = $('#cancelCreate');
    const closeModalBtn = $('#closeModal');
    const newTaskBtn = $('#newTaskBtn');

    const drawer = $('#drawer');
    const closeDrawer = $('#closeDrawer');
    const drawerTitle = $('#drawerTitle');
    const drawerDates = $('#drawerDates');
    const drawerStatus = $('#drawerStatus');
    const drawerAssignees = $('#drawerAssignees');
    const drawerCover = $('#drawerCover');
    const duplicateTaskBtn = $('#duplicateTask');
    const deleteTaskBtn = $('#deleteTask');

    // Render Days
    function renderDays() {
      const days = getDays();
      daysRow.style.gridTemplateColumns = `repeat(${days.length}, var(--day-width))`;
      daysRow.innerHTML = '';

      const months = new Set(days.map(d=>d.toLocaleDateString(undefined,{month:'long'})));
      monthTitle.textContent = monthSpanTitle(state.range.start, state.range.end);

      days.forEach((d, i)=>{
        const isWeekend = d.getDay()===0 || d.getDay()===6;
        const isToday = toISO(d) === toISO(new Date());
        const el = document.createElement('div');
        el.className = `relative flex flex-col items-center select-none`;
        el.innerHTML = `
          <div class="w-full h-6 border-l ${i===0?'border-transparent':'border-slate-200'}"></div>
          <button data-day-index="${i}" class="day-circle w-9 h-9 rounded-xl ${isToday?'bg-indigo-600 text-white':'bg-white text-slate-700'} border border-slate-200 hover:border-slate-300 flex items-center justify-center text-sm font-medium ${isWeekend?'opacity-70':''}">
            ${d.getDate()}
          </button>
          <div class="text-[10px] mt-1 text-slate-500">${d.toLocaleDateString(undefined,{weekday:'short'})}</>
        `;
        daysRow.appendChild(el);
      });

      // Selected indicator line initial align
      state.selectedDayIndex = Math.min(state.selectedDayIndex, days.length-1);
      positionCursorLine();
    }

    function positionCursorLine() {
      const buttons = $$('.day-circle', daysRow);
      if (!buttons.length) return;
      const btn = buttons[state.selectedDayIndex];
      const scRect = daysScroller.getBoundingClientRect();
      const bRect = btn.getBoundingClientRect();
      const scLeft = daysScroller.scrollLeft;
      const x = (bRect.left - scRect.left) + scLeft + bRect.width/2 + 4; // +4 for left padding
      cursorLine.style.left = x + 'px';
      cursorLine.classList.remove('hidden');
    }

    // Render Lanes and Tasks
    function badge(status) {
      const map = {
        Ongoing: 'bg-emerald-50 text-emerald-700',
        Done: 'bg-emerald-100 text-emerald-700',
        Soon: 'bg-amber-50 text-amber-700',
        Urgent: 'bg-rose-50 text-rose-700',
      };
      return `<span class="px-2 py-0.5 text-[11px] rounded-full ${map[status]||'bg-slate-100 text-slate-700'}">${status}</span>`;
    }

    function filteredTasks() {
      const q = (searchInput?.value||'').toLowerCase();
      return state.tasks.filter(t=>{
        const matchQ = t.title.toLowerCase().includes(q);
        const matchF = state.filter==='All' ? true : t.status===state.filter;
        // also hide outside range
        return matchQ && matchF && !(t.end < state.range.start || t.start > state.range.end);
      });
    }

    function placeTasks(grid, laneName) {
      const days = getDays();
      const tasks = filteredTasks().filter(t=>t.lane===laneName);
      const row = grid.querySelector('.tasks');
      row.innerHTML = '';

      tasks.forEach(task=>{
        // bounds within current range
        const sIdx = Math.max(0, diffDays(state.range.start, task.start));
        const eIdx = Math.min(days.length-1, diffDays(state.range.start, task.end));
        const span = Math.max(1, eIdx - sIdx + 1);

        const card = document.createElement('div');
        card.className = `task-card relative group select-none rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-shadow`;
        card.setAttribute('data-id', task.id);
        card.style.gridColumn = `${sIdx+1} / span ${span}`;
        card.innerHTML = `
          <div class="absolute -left-px top-0 bottom-0 w-1 rounded-l-xl ${task.status==='Urgent'?'bg-rose-400': task.status==='Done'?'bg-emerald-400': task.status==='Soon'?'bg-amber-400':'bg-indigo-400'}"></div>
          <div class="px-3 py-2 pr-24">
            <div class="flex items-center gap-2">
              ${badge(task.status)}
              <button class="hover:bg-slate-50 rounded-md p-1 ml-auto opacity-0 group-hover:opacity-100 transition"><i data-lucide="more-horizontal" class="w-4 h-4"></i></button>
            </div>
            <div class="mt-1 text-sm font-medium text-slate-800">${task.title}</div>
            <div class="mt-1 text-xs text-slate-500">P ${fmt(parseISO(task.start))} – ${fmt(parseISO(task.end))}</div>
          </div>
          <div class="absolute right-2 bottom-2 flex -space-x-2">
            ${(task.assignees||[]).slice(0,3).map(src=>`<img class="h-6 w-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="">`).join('')}
          </div>
          <!-- Drag handles -->
          <div class="handle left-0 top-0 bottom-0 w-2 absolute group-hover:opacity-100 opacity-0"></div>
          <div class="handle right-0 top-0 bottom-0 w-2 absolute group-hover:opacity-100 opacity-0"></div>
        `;
        row.appendChild(card);
      });

      lucide.createIcons();
    }

    function renderLanes() {
      const days = getDays();
      lanesWrap.innerHTML = '';
      state.lanes.forEach((laneName, idx)=>{
        const lane = document.createElement('section');
        lane.className = "relative";
        lane.innerHTML = `
          <div class="sticky left-0 z-10 bg-white/90 glass flex items-center gap-2 px-4 md:px-6 py-3 border-b border-slate-200">
            <div class="text-sm font-medium text-slate-700">${laneName}</div>
          </div>

          <div class="overflow-x-auto thin-scroll">
            <div class="min-w-max relative grid bg-white" style="grid-template-rows: var(--lane-height); grid-template-columns: repeat(${days.length}, var(--day-width));">
              <!-- Background grid lines -->
              ${days.map((_,i)=>`<div class="border-l ${i===0?'border-transparent':'border-slate-100'}"></div>`).join('')}
              <!-- Tasks layer -->
              <div class="tasks absolute inset-0 grid items-center gap-2 px-4 md:px-6" style="grid-template-columns: repeat(${days.length}, var(--day-width)); grid-auto-rows: var(--lane-height);"></div>
            </div>
          </div>
        `;
        lanesWrap.appendChild(lane);
        placeTasks(lane, laneName);
      });
    }

    // Interactions
    function attachInteractions() {
      // Day click
      daysRow.addEventListener('click', (e)=>{
        const btn = e.target.closest('.day-circle');
        if (!btn) return;
        state.selectedDayIndex = Number(btn.dataset.dayIndex);
        positionCursorLine();
      });

      // Scroll sync cursor
      daysScroller.addEventListener('scroll', positionCursorLine);
      $('#timelineScrollArea').addEventListener('scroll', positionCursorLine);

      // Filter
      filterBtn.addEventListener('click', ()=>{
        filterMenu.classList.toggle('hidden');
      });
      document.addEventListener('click', (e)=>{
        if (!filterMenu.contains(e.target) && !filterBtn.contains(e.target)) filterMenu.classList.add('hidden');
      });
      filterMenu.addEventListener('click', (e)=>{
        const chip = e.target.closest('.chip');
        if (!chip) return;
        state.filter = chip.dataset.chip;
        $$('.chip', filterMenu).forEach(c=>c.classList.remove('bg-slate-900','text-white'));
        chip.classList.add('bg-slate-900','text-white');
        renderLanes();
      });

      // View toggle
      viewToggle.addEventListener('click', (e)=>{
        const btn = e.target.closest('button[data-view]');
        if (!btn) return;
        state.view = btn.dataset.view;
        $$('#viewToggle button').forEach(b=>{ b.classList.remove('bg-slate-900','text-white'); b.classList.add('text-slate-700'); });
        btn.classList.add('bg-slate-900','text-white'); btn.classList.remove('text-slate-700');

        // Week view clamps to 7 days around selected index
        if (state.view==='week') {
          const days = getDays();
          let startIdx = Math.max(0, state.selectedDayIndex - 3);
          let endIdx = Math.min(days.length-1, startIdx + 6);
          startIdx = Math.max(0, endIdx - 6);
          state.range.start = toISO(days[startIdx]);
          state.range.end = toISO(days[endIdx]);
        } else {
          // restore to full default demo range
          state.range.start = '2025-01-24';
          state.range.end = '2025-02-07';
        }
        startInput.value = state.range.start;
        endInput.value = state.range.end;
        renderAll();
      });

      // Range inputs
      startInput.value = state.range.start;
      endInput.value = state.range.end;
      startInput.addEventListener('change', ()=>{ state.range.start = startInput.value; renderAll(); });
      endInput.addEventListener('change', ()=>{ state.range.end = endInput.value; renderAll(); });

      // Today
      todayBtn.addEventListener('click', ()=>{
        const today = toISO(new Date());
        const days = getDays();
        const idx = days.findIndex(d=>toISO(d)===today);
        if (idx>=0) state.selectedDayIndex = idx;
        positionCursorLine();
        daysScroller.scrollLeft = Math.max(0, (idx-3) * parseInt(getComputedStyle(document.documentElement).getPropertyValue('--day-width')));
      });

      // Prev/Next jump by week
      prevBtn.addEventListener('click', ()=>shiftRange(-7));
      nextBtn.addEventListener('click', ()=>shiftRange(7));

      // Search
      searchInput?.addEventListener('input', ()=> renderLanes());

      // Sidebar toggle (mobile)
      $('#openSidebar').addEventListener('click', ()=>{
        $('#sidebar').classList.toggle('hidden');
      });

      // New task modal
      newTaskBtn.addEventListener('click', openModal);
      closeModalBtn.addEventListener('click', closeModal);
      cancelCreateBtn.addEventListener('click', closeModal);
      laneSelectBtn.addEventListener('click', ()=> laneSelectMenu.classList.toggle('hidden'));
      laneSelectMenu.addEventListener('click', (e)=>{
        const btn = e.target.closest('button[data-lane]');
        if (!btn) return;
        laneSelectLabel.textContent = btn.dataset.lane;
        laneSelectMenu.classList.add('hidden');
      });
      document.addEventListener('click', (e)=>{
        if (!laneSelectBtn.contains(e.target) && !laneSelectMenu.contains(e.target)) laneSelectMenu.classList.add('hidden');
      });
      // Status pick in modal
      $$('[data-modal-status]').forEach(b=>{
        b.addEventListener('click', ()=>{
          $$('[data-modal-status]').forEach(x=>x.classList.remove('ring-2','ring-slate-900/5'));
          b.classList.add('ring-2','ring-slate-900/5');
          b.dataset.selected = 'true';
        });
      });

      createTaskBtn.addEventListener('click', ()=>{
        const title = modalTitle.value.trim() || 'Untitled Task';
        const start = modalStart.value || state.range.start;
        const end = modalEnd.value || start;
        const lane = laneSelectLabel.textContent;
        const selBtn = $$('[data-modal-status]').find(x=>x.dataset.selected==='true');
        const status = selBtn ? selBtn.dataset.modalStatus : 'Ongoing';
        const newId = 't' + Math.random().toString(36).slice(2,7);
        state.tasks.push({
          id: newId, title, lane, start, end, status, color: 'indigo',
          assignees: [
            'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=200&auto=format&fit=crop'
          ]
        });
        closeModal();
        renderLanes();
        lucide.createIcons();
      });

      // Task click -> open drawer
      lanesWrap.addEventListener('click', (e)=>{
        const card = e.target.closest('.task-card');
        if (!card) return;
        openDrawer(card.dataset.id);
      });

      // Drag and resize
      initDragAndResize();
    }

    function shiftRange(daysDelta) {
      const s = addDays(parseISO(state.range.start), daysDelta);
      const e = addDays(parseISO(state.range.end), daysDelta);
      state.range.start = toISO(s);
      state.range.end = toISO(e);
      startInput.value = state.range.start;
      endInput.value = state.range.end;
      renderAll();
    }

    function openModal() {
      modalTitle.value = '';
      modalStart.value = state.range.start;
      modalEnd.value = state.range.end;
      taskModal.classList.remove('hidden');
      taskModal.classList.add('flex');
    }
    function closeModal() {
      taskModal.classList.add('hidden');
      taskModal.classList.remove('flex');
    }

    // Drawer
    let drawerTaskId = null;
    function openDrawer(taskId) {
      const t = state.tasks.find(x=>x.id===taskId);
      if (!t) return;
      drawerTaskId = t.id;
      drawerTitle.textContent = t.title;
      drawerDates.textContent = `${fmt(parseISO(t.start))} – ${fmt(parseISO(t.end))}, ${parseISO(t.end).getFullYear()}`;
      drawerStatus.textContent = t.status;
      drawerStatus.className = 'px-2.5 py-1 text-xs rounded-full ' + ({
        Ongoing: 'bg-emerald-50 text-emerald-700',
        Done: 'bg-emerald-100 text-emerald-700',
        Soon: 'bg-amber-50 text-amber-700',
        Urgent: 'bg-rose-50 text-rose-700'
      }[t.status] || 'bg-slate-100 text-slate-700');
      drawerAssignees.innerHTML = (t.assignees||[]).map(src=>`<img class="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="">`).join('');
      // Cover image
      const coverQuery = ['3d','render','mountains','minimal'][Math.floor(Math.random()*4)];
      drawerCover.src = `https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop&${Date.now()}`.replace('photo-1519681393784-d120267933ba', {
        '3d':'photo-1549880338-65ddcdfd017b',
        'render':'photo-1500530855697-b586d89ba3ee',
        'mountains':'photo-1501785888041-af3ef285b470',
        'minimal':'photo-1526498460520-4c246339dccb'
      }[coverQuery]);
      drawer.style.transform = 'translateX(0)';
    }
    function closeDrawerPanel() {
      drawer.style.transform = 'translateX(100%)';
      drawerTaskId = null;
    }
    closeDrawer.addEventListener('click', closeDrawerPanel);
    duplicateTaskBtn.addEventListener('click', ()=>{
      if (!drawerTaskId) return;
      const t = state.tasks.find(x=>x.id===drawerTaskId);
      const clone = {...t, id: 't'+Math.random().toString(36).slice(2,7), title: t.title + ' (Copy)'};
      state.tasks.push(clone);
      renderLanes();
      lucide.createIcons();
    });
    deleteTaskBtn.addEventListener('click', ()=>{
      if (!drawerTaskId) return;
      state.tasks = state.tasks.filter(x=>x.id!==drawerTaskId);
      closeDrawerPanel();
      renderLanes();
    });

    // Drag + Resize logic
    function initDragAndResize() {
      let active = null; // { el, task, type: 'move'|'resize-left'|'resize-right', startX, startStartISO, startEndISO }
      const dayW = () => parseInt(getComputedStyle(document.documentElement).getPropertyValue('--day-width')) || 86;

      const onDown = (e) => {
        const card = e.target.closest('.task-card');
        if (!card) return;
        const id = card.dataset.id;
        const task = state.tasks.find(t=>t.id===id);
        if (!task) return;

        const rect = card.getBoundingClientRect();
        const isLeft = e.clientX - rect.left < 8;
        const isRight = rect.right - e.clientX < 8;
        const type = isLeft ? 'resize-left' : isRight ? 'resize-right' : 'move';

        active = { el: card, task, type, startX: e.clientX, startStartISO: task.start, startEndISO: task.end };
        document.body.classList.add('dragging');
        card.classList.add('dragging');
        e.preventDefault();
      };

      const onMove = (e) => {
        if (!active) return;
        const dx = e.clientX - active.startX;
        const daysDelta = Math.round(dx / dayW());
        if (active.type === 'move') {
          const s = addDays(parseISO(active.startStartISO), daysDelta);
          const eDate = addDays(parseISO(active.startEndISO), daysDelta);
          active.el.style.opacity = '.9';
          active.task.start = toISO(s);
          active.task.end = toISO(eDate);
        } else if (active.type === 'resize-left') {
          const newStart = addDays(parseISO(active.startStartISO), daysDelta);
          if (newStart <= parseISO(active.task.end)) active.task.start = toISO(newStart);
        } else if (active.type === 'resize-right') {
          const newEnd = addDays(parseISO(active.startEndISO), daysDelta);
          if (newEnd >= parseISO(active.task.start)) active.task.end = toISO(newEnd);
        }
        renderLanes();
      };

      const onUp = () => {
        if (!active) return;
        active.el?.classList.remove('dragging');
        document.body.classList.remove('dragging');
        active = null;
      };

      lanesWrap.addEventListener('mousedown', onDown);
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      // Touch support
      lanesWrap.addEventListener('touchstart', (e)=>onDown(e.touches[0]));
      window.addEventListener('touchmove', (e)=>onMove(e.touches[0]));
      window.addEventListener('touchend', onUp);
    }

    // Render all
    function renderAll() {
      renderDays();
      renderLanes();
      lucide.createIcons();
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', ()=>{
      renderAll();
      attachInteractions();
      // Focus initial day
      const days = getDays();
      const idx = Math.min(4, days.length-1);
      state.selectedDayIndex = idx;
      positionCursorLine();
      // Scroll to near selected
      daysScroller.scrollLeft = Math.max(0, (idx-3) * parseInt(getComputedStyle(document.documentElement).getPropertyValue('--day-width')));
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
      

<div className="h-full w-full flex">

<aside className="hidden md:flex w-72 shrink-0 flex-col border-r border-slate-200 bg-white" id="sidebar">
<div className="px-5 pt-5 pb-4 flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="shapes"></i>
</div>
<div className="flex flex-col">
<span className="text-lg tracking-tight font-semibold">Tentacle Studio</span>
<span className="text-xs text-slate-500">Company</span>
</div>
</div>
<div className="px-5 mt-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700" href="#">
<i className="w-4.5 h-4.5" data-lucide="check-square"></i>
<span className="text-sm font-medium">My Task</span>
<span className="ml-auto text-xs px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700" href="#">
<i className="w-4.5 h-4.5" data-lucide="activity"></i>
<span className="text-sm font-medium">Activity</span>
</a>
</div>
<div className="px-5 mt-6">
<div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Menu</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700" href="#">
<i className="w-4.5 h-4.5" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700" href="#">
<i className="w-4.5 h-4.5" data-lucide="grid-2x2"></i>
<span className="text-sm font-medium">Boards</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700" href="#">
<i className="w-4.5 h-4.5" data-lucide="users"></i>
<span className="text-sm font-medium">Team Member</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700" href="#">
<i className="w-4.5 h-4.5" data-lucide="calendar"></i>
<span className="text-sm font-medium">Calendar</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700" href="#">
<i className="w-4.5 h-4.5" data-lucide="message-square"></i>
<span className="text-sm font-medium">Messages</span>
</a>
</nav>
</div>
<div className="px-5 mt-6">
<div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Projects</div>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700">
<i className="w-4.5 h-4.5" data-lucide="smartphone"></i>
<span className="text-sm font-medium">Land.me Mobile</span>
</button>
<div className="rounded-xl bg-indigo-600 text-white px-3 py-2">
<div className="flex items-center gap-2">
<i className="w-4.5 h-4.5" data-lucide="globe"></i>
<span className="text-sm font-medium">Vonzy Website</span>
<i className="w-4 h-4 ml-auto opacity-80" data-lucide="chevron-down"></i>
</div>
<div className="mt-2 ml-7 space-y-1">
<a className="block text-sm/6 px-2 py-1 rounded-lg bg-white/10">Roadmap</a>
<a className="block text-sm/6 px-2 py-1 rounded-lg hover:bg-white/10">Backlog</a>
<a className="block text-sm/6 px-2 py-1 rounded-lg hover:bg-white/10">Kanban</a>
</div>
</div>
</div>
</div>
<div className="mt-auto p-5">
<div className="rounded-2xl bg-slate-50 p-3 flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
<div className="flex-1">
<div className="text-sm font-medium">Jiro Lupat</div>
<div className="text-xs text-slate-500">Product Manager</div>
</div>
<button className="p-2 rounded-lg hover:bg-white">
<i className="w-4.5 h-4.5" data-lucide="settings"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="h-16 border-b border-slate-200 bg-white flex items-center px-4 md:px-6">
<button className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700 mr-2" id="openSidebar">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="hidden sm:flex items-center gap-2 text-slate-500">
<span className="text-sm">Project</span>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-sm">Coachable WebApp</span>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-sm text-slate-900">Roadmap</span>
</div>
<div className="ml-auto flex items-center gap-2 sm:gap-3">
<div className="relative hidden md:block">
<i className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 w-64 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 ring-slate-900/5 focus:border-slate-300" id="searchInput" placeholder="Search tasks" />
</div>
<button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50" id="feedbackBtn">
<i className="w-4 h-4" data-lucide="message-circle"></i><span className="text-sm font-medium">Feedback</span>
</button>
<button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
<i className="w-4 h-4" data-lucide="share-2"></i><span className="text-sm font-medium">Share</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800" id="newTaskBtn">
<i className="w-4 h-4" data-lucide="plus"></i><span className="text-sm font-medium">New Task</span>
</button>
</div>
</header>

<section className="flex-1 overflow-hidden flex flex-col">

<div className="px-4 md:px-6 py-5 bg-white border-b border-slate-200">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Coachable Web App</h1>
<p className="text-sm text-slate-500 mt-1">Plan, track and deliver across teams</p>
</div>
<div className="hidden sm:flex items-center gap-2">

<div className="inline-flex rounded-xl border border-slate-200 p-0.5" id="viewToggle">
<button className="px-3 py-1.5 text-sm rounded-lg bg-slate-900 text-white" data-view="month">Month</button>
<button className="px-3 py-1.5 text-sm rounded-lg text-slate-700 hover:bg-slate-50" data-view="week">Week</button>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50" id="filterBtn">
<i className="w-4 h-4" data-lucide="filter"></i>
<span className="text-sm font-medium">Filter</span>
</button>
<div className="hidden absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl p-3 elevate" id="filterMenu">
<div className="text-xs uppercase text-slate-500 mb-2">Status</div>
<div className="flex flex-wrap gap-2">
<button className="chip px-2.5 py-1.5 text-xs rounded-lg bg-slate-900 text-white" data-chip="All">All</button>
<button className="chip px-2.5 py-1.5 text-xs rounded-lg bg-emerald-100 text-emerald-700" data-chip="Ongoing">Ongoing</button>
<button className="chip px-2.5 py-1.5 text-xs rounded-lg bg-emerald-50 text-emerald-700" data-chip="Done">Done</button>
<button className="chip px-2.5 py-1.5 text-xs rounded-lg bg-amber-50 text-amber-700" data-chip="Soon">Soon</button>
<button className="chip px-2.5 py-1.5 text-xs rounded-lg bg-rose-50 text-rose-700" data-chip="Urgent">Urgent</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-5 flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Overview</button>
<button className="px-3 py-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Board</button>
<button className="px-3 py-1.5 rounded-lg text-sm bg-slate-900 text-white">Timeline</button>
<button className="px-3 py-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Activities</button>
</div>
</div>

<div className="flex-1 overflow-hidden">
<div className="h-full flex flex-col">

<div className="border-b border-slate-200 bg-white">
<div className="px-4 md:px-6 pt-4 pb-3">
<div className="flex items-center gap-3">
<button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50" id="prevBtn">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<div className="text-sm font-medium text-slate-700" id="monthTitle">January – February 2025</div>
<button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50" id="nextBtn">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<div className="ml-auto flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm" id="todayBtn">Today</button>
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-2.5 text-slate-400 pointer-events-none" data-lucide="calendar"></i>
<input className="pl-9 pr-3 py-2 w-36 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 ring-slate-900/5 focus:border-slate-300" id="startInput" type="date" />
</div>
<span className="text-slate-400">—</span>
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-2.5 text-slate-400 pointer-events-none" data-lucide="calendar-range"></i>
<input className="pl-9 pr-3 py-2 w-36 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 ring-slate-900/5 focus:border-slate-300" id="endInput" type="date" />
</div>
</div>
</div>
</div>

<div className="overflow-x-auto thin-scroll scroll-smooth-x" id="daysScroller">
<div className="min-w-max grid gap-0 px-4 md:px-6 pb-3" id="daysRow" style={{gridAutoRows: `minmax(0,1fr)`, gridTemplateColumns: `repeat(1, var(--day-width))`}}></div>
</div>
</div>

<div className="flex-1 overflow-auto thin-scroll" id="timelineScrollArea">
<div className="relative">

<div className="hidden absolute top-0 bottom-0 w-px bg-indigo-500/60 pointer-events-none" id="cursorLine"></div>
</div>
<div className="px-0" id="lanesWrap">

</div>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-white border-l border-slate-200 translate-x-full transition-transform duration-300 ease-out flex flex-col z-40" id="drawer">
<div className="p-4 border-b border-slate-200 flex items-center gap-3">
<button className="p-2 rounded-lg hover:bg-slate-50" id="closeDrawer">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="text-sm text-slate-500">Task Details</div>
<div className="ml-auto flex items-center gap-2">
<button className="p-2 rounded-lg hover:bg-rose-50 text-rose-600" id="deleteTask">
<i className="w-4.5 h-4.5" data-lucide="trash-2"></i>
</button>
<button className="p-2 rounded-lg hover:bg-slate-50" id="duplicateTask">
<i className="w-4.5 h-4.5" data-lucide="copy"></i>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto thin-scroll">
<img alt="cover" className="w-full h-40 object-cover" id="drawerCover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" />
<div className="p-5 space-y-4">
<div className="flex items-start gap-3">
<div className="flex-1">
<h3 className="text-xl tracking-tight font-semibold" id="drawerTitle">Task title</h3>
<div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span id="drawerDates">Jan 24 – Jan 28, 2025</span>
</div>
</div>
<span className="px-2.5 py-1 text-xs rounded-full bg-slate-100 text-slate-700" id="drawerStatus">Status</span>
</div>
<div>
<div className="text-xs uppercase text-slate-500 mb-2">Assignees</div>
<div className="flex -space-x-2" id="drawerAssignees">

</div>
</div>
<div>
<div className="text-xs uppercase text-slate-500 mb-2">Description</div>
<p className="text-sm text-slate-700 leading-6">
            High-level objectives, acceptance criteria and links. Click any date to move the vertical cursor. Drag or resize the task on the timeline to reschedule.
          </p>
</div>
<div className="flex items-center gap-2 pt-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
<i className="w-4 h-4" data-lucide="paperclip"></i> <span className="text-sm">Attachments</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
<i className="w-4 h-4" data-lucide="link"></i> <span className="text-sm">Copy link</span>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 hidden items-center justify-center z-50" id="taskModal">
<div className="absolute inset-0 bg-slate-900/30"></div>
<div className="relative bg-white w-[min(92vw,560px)] rounded-2xl elevate">
<div className="p-4 border-b border-slate-200 flex items-center justify-between">
<div className="text-sm text-slate-500">Create Task</div>
<button className="p-2 rounded-lg hover:bg-slate-50" id="closeModal"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="p-5 space-y-4">
<div>
<label className="text-sm font-medium text-slate-700">Title</label>
<input className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 ring-slate-900/5" id="modalTitle" placeholder="e.g. Front-end Website" />
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium text-slate-700">Start</label>
<input className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 ring-slate-900/5" id="modalStart" type="date" />
</div>
<div>
<label className="text-sm font-medium text-slate-700">End</label>
<input className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 ring-slate-900/5" id="modalEnd" type="date" />
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-700">Lane</label>
<div className="mt-1 relative">
<button className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm text-left flex items-center justify-between" id="laneSelectBtn">
<span id="laneSelectLabel">Research & Wireframe</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-xl p-2 space-y-1 elevate" id="laneSelectMenu">
<button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm" data-lane="Research & Wireframe">Research & Wireframe</button>
<button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm" data-lane="High Fidelity Website">High Fidelity Website</button>
<button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm" data-lane="Development">Development</button>
</div>
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-700">Status</label>
<div className="mt-2 flex flex-wrap gap-2">
<button className="px-2.5 py-1.5 text-xs rounded-lg bg-emerald-100 text-emerald-700" data-modal-status="Ongoing">Ongoing</button>
<button className="px-2.5 py-1.5 text-xs rounded-lg bg-amber-50 text-amber-700" data-modal-status="Soon">Soon</button>
<button className="px-2.5 py-1.5 text-xs rounded-lg bg-emerald-50 text-emerald-700" data-modal-status="Done">Done</button>
<button className="px-2.5 py-1.5 text-xs rounded-lg bg-rose-50 text-rose-700" data-modal-status="Urgent">Urgent</button>
</div>
</div>
<div className="pt-2 flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-sm" id="cancelCreate">Cancel</button>
<button className="px-3 py-2 rounded-xl bg-slate-900 text-white text-sm" id="createTask">Create</button>
</div>
</div>
</div>
</div>


    </>
  );
}
