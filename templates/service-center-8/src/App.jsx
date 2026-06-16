import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Data (from prompt)
      const payload = {
        "data": [
          {
            "id": 1,
            "title": "Утренняя проверка",
            "description": "Проверьте статус всех активных заказов в начале рабочего дня",
            "image": "https://placehold.co/800x600/4a90e2/ffffff.webp?text=%D0%A3%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F+%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0",
            "key_metric": null,
            "target_value": 10,
            "reward_amount": 50,
            "deadline": null,
            "status": "active",
            "is_recurring": true,
            "recurrence_type": "daily",
            "recurrence_days": null,
            "recurrence_day_of_month": null,
            "reset_time": "2025-09-19T09:00:00.000000Z",
            "user_progress": {
              "current_value": 64,
              "completed_at": "2025-09-03T05:46:33.000000Z",
              "reward_received": true,
              "is_completed": true
            },
            "created_at": "2025-09-18T14:00:52+00:00",
            "updated_at": "2025-09-18T14:00:52+00:00"
          },
          {
            "id": 2,
            "title": "Обзвон клиентов",
            "description": "Свяжитесь с 5 потенциальными клиентами из базы",
            "image": "https://placehold.co/800x600/6c5ce7/ffffff.webp?text=%D0%9E%D0%B1%D0%B7%D0%B2%D0%BE%D0%BD+%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2",
            "key_metric": null,
            "target_value": 5,
            "reward_amount": 75,
            "deadline": null,
            "status": "active",
            "is_recurring": true,
            "recurrence_type": "daily",
            "recurrence_days": null,
            "recurrence_day_of_month": null,
            "reset_time": "2025-09-19T10:00:00.000000Z",
            "user_progress": {
              "current_value": 17,
              "completed_at": null,
              "reward_received": false,
              "is_completed": false
            },
            "created_at": "2025-09-18T14:00:52+00:00",
            "updated_at": "2025-09-18T14:00:52+00:00"
          },
          {
            "id": 3,
            "title": "Заполнение CRM",
            "description": "Внесите информацию о всех встречах и звонках в CRM систему",
            "image": "https://placehold.co/800x600/00b894/ffffff.webp?text=CRM",
            "key_metric": null,
            "target_value": 8,
            "reward_amount": 40,
            "deadline": null,
            "status": "active",
            "is_recurring": true,
            "recurrence_type": "daily",
            "recurrence_days": null,
            "recurrence_day_of_month": null,
            "reset_time": "2025-09-19T18:00:00.000000Z",
            "user_progress": {
              "current_value": 98,
              "completed_at": "2025-09-06T20:55:03.000000Z",
              "reward_received": true,
              "is_completed": true
            },
            "created_at": "2025-09-18T14:00:52+00:00",
            "updated_at": "2025-09-18T14:00:52+00:00"
          },
          {
            "id": 4,
            "title": "Презентация продукта",
            "description": "Проведите презентацию продукта для новых клиентов",
            "image": "https://placehold.co/800x600/fdcb6e/000000.webp?text=%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",
            "key_metric": null,
            "target_value": 3,
            "reward_amount": 200,
            "deadline": null,
            "status": "active",
            "is_recurring": true,
            "recurrence_type": "weekly",
            "recurrence_days": [2,4],
            "recurrence_day_of_month": null,
            "reset_time": "2025-09-19T09:00:00.000000Z",
            "user_progress": {
              "current_value": 17,
              "completed_at": null,
              "reward_received": false,
              "is_completed": false
            },
            "created_at": "2025-09-18T14:00:52+00:00",
            "updated_at": "2025-09-18T14:00:52+00:00"
          },
          {
            "id": 5,
            "title": "Месячный план продаж",
            "description": "Разработайте план продаж на следующий месяц с детальной стратегией",
            "image": "https://placehold.co/800x600/fd79a8/ffffff.webp?text=%D0%9F%D0%BB%D0%B0%D0%BD",
            "key_metric": null,
            "target_value": 10,
            "reward_amount": 500,
            "deadline": null,
            "status": "active",
            "is_recurring": true,
            "recurrence_type": "monthly",
            "recurrence_days": null,
            "recurrence_day_of_month": 1,
            "reset_time": "2025-09-19T09:00:00.000000Z",
            "user_progress": {
              "current_value": 53,
              "completed_at": "2025-09-02T00:44:54.000000Z",
              "reward_received": true,
              "is_completed": true
            },
            "created_at": "2025-09-18T14:00:52+00:00",
            "updated_at": "2025-09-18T14:00:52+00:00"
          },
          {
            "id": 6,
            "title": "Клиентский день",
            "description": "Организуйте день открытых дверей для существующих и потенциальных клиентов",
            "image": "https://placehold.co/800x600/a29bfe/ffffff.webp?text=%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%8B",
            "key_metric": null,
            "target_value": 50,
            "reward_amount": 600,
            "deadline": "2025-10-09T14:00:52+00:00",
            "status": "active",
            "is_recurring": false,
            "recurrence_type": null,
            "recurrence_days": null,
            "recurrence_day_of_month": null,
            "reset_time": null,
            "user_progress": {
              "current_value": 2,
              "completed_at": null,
              "reward_received": false,
              "is_completed": false
            },
            "created_at": "2025-09-18T14:00:52+00:00",
            "updated_at": "2025-09-18T14:00:52+00:00"
          },
          {
            "id": 7,
            "title": "Сервисное обслуживание",
            "description": "Проведите комплексное обслуживание оборудования у 10 ключевых клиентов",
            "image": "https://placehold.co/800x600/ffeaa7/000000.webp?text=%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81",
            "key_metric": null,
            "target_value": 10,
            "reward_amount": 300,
            "deadline": "2025-09-25T14:00:52+00:00",
            "status": "active",
            "is_recurring": false,
            "recurrence_type": null,
            "recurrence_days": null,
            "recurrence_day_of_month": null,
            "reset_time": null,
            "user_progress": {
              "current_value": 64,
              "completed_at": "2025-09-10T20:57:02.000000Z",
              "reward_received": true,
              "is_completed": true
            },
            "created_at": "2025-09-18T14:00:52+00:00",
            "updated_at": "2025-09-18T14:00:52+00:00"
          }
        ]
      };

      // State
      let allTasks = payload.data.slice();
      let filtered = allTasks.slice();
      let filterType = 'all';
      let searchTerm = '';
      let sortBy = 'default';
      let gridView = true;
      let dense = false;
      let displayCount = 6;

      // Elements
      const tasksContainer = document.getElementById('tasksContainer');
      const emptyState = document.getElementById('emptyState');
      const loadMoreBtn = document.getElementById('loadMore');
      const searchInput = document.getElementById('searchInput');
      const clearSearch = document.getElementById('clearSearch');
      const balanceEl = document.getElementById('balance');
      const resetCountEl = document.getElementById('resetCount');
      const sortButton = document.getElementById('sortButton');
      const sortMenu = document.getElementById('sortMenu');
      const sortLabel = document.getElementById('sortLabel');
      const weekBuckets = document.getElementById('weekBuckets');
      const weekOf = document.getElementById('weekOf');
      const monthlyCalendars = document.getElementById('monthlyCalendars');
      const viewToggle = document.getElementById('viewToggle');
      const densityToggle = document.getElementById('densityToggle');

      // Helpers
      const fmtTime = (iso) => {
        if (!iso) return null;
        const d = new Date(iso);
        return new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit' }).format(d);
      };
      const fmtDate = (iso) => {
        if (!iso) return null;
        const d = new Date(iso);
        return new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: 'short' }).format(d);
      };
      const isTodaySameDay = (iso) => {
        if (!iso) return false;
        const d = new Date(iso);
        const now = new Date();
        return d.toDateString() === now.toDateString();
      };
      const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

      // Map: 1..7 -> Mon..Sun
      const WEEK_LABELS = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

      // Initial balance (sum of received rewards)
      function computeBalance(tasks) {
        return tasks.reduce((sum, t) => sum + (t.user_progress?.reward_received ? t.reward_amount || 0 : 0), 0);
      }

      function taskType(t) {
        if (t.is_recurring) {
          if (t.recurrence_type === 'daily') return 'daily';
          if (t.recurrence_type === 'weekly') return 'weekly';
          if (t.recurrence_type === 'monthly') return 'monthly';
        }
        return 'oneoff';
      }

      function typeLabel(t) {
        const type = taskType(t);
        switch (type) {
          case 'daily': return 'Ежедневно';
          case 'weekly': return 'Еженедельно';
          case 'monthly': return 'Ежемесячно';
          default: return 'Разовая';
        }
      }

      function nextResetLabel(t) {
        const type = taskType(t);
        if (type === 'oneoff') {
          if (t.deadline) {
            return `Дедлайн: ${fmtDate(t.deadline)}`;
          }
          return '';
        }
        if (t.reset_time) {
          const time = fmtTime(t.reset_time);
          const todayMark = isTodaySameDay(t.reset_time) ? 'сегодня' : '';
          return `Сброс ${todayMark ? todayMark + ' в ' : 'в '}${time}`;
        }
        return '';
      }

      function buildWeeklyPills(days = []) {
        const tpl = document.getElementById('weeklyPillsTemplate').content.cloneNode(true);
        const row = tpl.querySelector('div');
        WEEK_LABELS.forEach((label, idx) => {
          const dayTpl = document.getElementById('dayPillTemplate').content.cloneNode(true);
          const pill = dayTpl.querySelector('div');
          const active = days.includes(idx + 1); // 1..7 map to Mon..Sun
          pill.textContent = label;
          pill.className = `w-6 h-6 rounded-md text-[11px] flex items-center justify-center border ${
            active ? 'bg-sky-500/20 text-sky-200 border-sky-400/30' : 'bg-white/5 text-slate-400 border-white/10'
          }`;
          row.appendChild(pill);
        });
        return row;
      }

      function buildMonthlyMiniCalendar(dayOfMonth) {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth(); // 0-based
        const first = new Date(year, month, 1);
        const last = new Date(year, month + 1, 0);
        // Adjust to Monday-first grid
        const firstDayIndex = (first.getDay() + 6) % 7; // 0=Mon
        const totalDays = last.getDate();

        const tpl = document.getElementById('miniCalendarTemplate').content.cloneNode(true);
        tpl.querySelector('.calendar-title').textContent = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(now);
        tpl.querySelector('.calendar-day').textContent = dayOfMonth;

        const grid = tpl.querySelector('.days-grid');

        // leading blanks
        for (let i = 0; i < firstDayIndex; i++) {
          const cell = document.createElement('div');
          cell.className = 'h-6';
          grid.appendChild(cell);
        }
        for (let d = 1; d <= totalDays; d++) {
          const btn = document.createElement('div');
          const isTarget = d === dayOfMonth;
          btn.className = `h-7 text-[11px] rounded-md flex items-center justify-center border ${
            isTarget ? 'bg-violet-500/20 text-violet-200 border-violet-400/30' : 'bg-white/5 text-slate-300 border-white/10'
          }`;
          btn.textContent = d;
          grid.appendChild(btn);
        }
        return tpl;
      }

      function buildRecurrenceRow(t) {
        const row = document.createDocumentFragment();
        const type = taskType(t);

        // Type pill
        const typePill = document.createElement('div');
        typePill.className = 'inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-200';
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', type === 'daily' ? 'sun' : type === 'weekly' ? 'calendar-days' : type === 'monthly' ? 'calendar' : 'sparkles');
        icon.className = 'h-3.5 w-3.5 ' + (type === 'daily' ? 'text-amber-300' : type === 'weekly' ? 'text-sky-300' : type === 'monthly' ? 'text-violet-300' : 'text-emerald-300');
        const label = document.createElement('span');
        label.textContent = typeLabel(t);
        typePill.appendChild(icon);
        typePill.appendChild(label);
        row.appendChild(typePill);

        if (type === 'weekly' && Array.isArray(t.recurrence_days)) {
          row.appendChild(buildWeeklyPills(t.recurrence_days));
        }

        if (type === 'monthly' && t.recurrence_day_of_month) {
          const pill = document.createElement('div');
          pill.className = 'inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-200';
          const i2 = document.createElement('i');
          i2.setAttribute('data-lucide', 'hash');
          i2.className = 'h-3.5 w-3.5 text-violet-300';
          const sp = document.createElement('span');
          sp.textContent = `День: ${t.recurrence_day_of_month}`;
          pill.appendChild(i2);
          pill.appendChild(sp);
          row.appendChild(pill);
        }

        if (type === 'oneoff' && t.deadline) {
          const pill = document.createElement('div');
          pill.className = 'inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-200';
          const i3 = document.createElement('i');
          i3.setAttribute('data-lucide', 'calendar-clock');
          i3.className = 'h-3.5 w-3.5 text-rose-300';
          const sp3 = document.createElement('span');
          sp3.textContent = `Дедлайн: ${fmtDate(t.deadline)}`;
          pill.appendChild(i3);
          pill.appendChild(sp3);
          row.appendChild(pill);
        }

        return row;
      }

      function buildTaskCard(t) {
        const tpl = document.getElementById('taskCardTemplate').content.cloneNode(true);
        const article = tpl.querySelector('article');

        // Image
        const img = tpl.querySelector('img');
        img.src = t.image;
        img.alt = t.title;

        // Reward
        tpl.querySelector('.reward-amount').textContent = `+${t.reward_amount}`;

        // Title & description
        tpl.querySelector('.title').textContent = t.title;
        tpl.querySelector('.description').textContent = t.description || '';

        // Status badge
        const statusBadge = tpl.querySelector('.status-badge');
        const completed = t.user_progress?.is_completed;
        const received = t.user_progress?.reward_received;
        if (completed) {
          statusBadge.textContent = received ? 'Получено' : 'Готово';
          statusBadge.className = 'status-badge text-[11px] px-2 py-0.5 rounded-full border bg-emerald-500/15 text-emerald-200 border-emerald-400/30';
        } else {
          statusBadge.textContent = 'Активно';
          statusBadge.className = 'status-badge text-[11px] px-2 py-0.5 rounded-full border bg-white/5 text-slate-300 border-white/10';
        }

        // Progress
        const target = t.target_value || 0;
        const current = t.user_progress?.current_value ?? 0;
        // Try to infer ratio: if target>0, use current/target; else 0
        const ratio = target > 0 ? clamp(current / target, 0, 1) : 0;
        const percent = Math.round(ratio * 100);
        tpl.querySelector('.progress-label').textContent = target ? `Прогресс: цель ${target}` : 'Прогресс';
        tpl.querySelector('.progress-value').textContent = `${percent}%`;
        tpl.querySelector('.progress-bar').style.width = `${percent}%`;

        // Recurrence row
        const recRow = tpl.querySelector('.recurrence-row');
        recRow.appendChild(buildRecurrenceRow(t));

        // Reset/deadline line
        const resetLine = tpl.querySelector('.reset-line');
        const iClock = document.createElement('i');
        iClock.setAttribute('data-lucide', 'clock');
        iClock.className = 'h-3.5 w-3.5';
        const span = document.createElement('span');
        span.textContent = nextResetLabel(t);
        resetLine.appendChild(iClock);
        resetLine.appendChild(span);

        // Actions
        const primary = tpl.querySelector('.action-primary');
        const secondary = tpl.querySelector('.action-secondary');

        if (completed && !received) {
          secondary.classList.remove('hidden');
        }

        primary.addEventListener('click', () => {
          toast('Открыта карточка задачи');
        });

        secondary.addEventListener('click', () => {
          // Simulate claiming
          if (t.user_progress) t.user_progress.reward_received = true;
          balanceEl.textContent = computeBalance(allTasks);
          toast(`Награда +${t.reward_amount} за "${t.title}"`);
          render(); // refresh UI
        });

        // Density & view apply later by container classes
        return article;
      }

      function filterTasks() {
        filtered = allTasks.filter(t => {
          const type = taskType(t);
          const matchesType = filterType === 'all' ? true : type === filterType;
          const q = searchTerm.trim().toLowerCase();
          const matchesSearch = q.length === 0 ? true : (
            (t.title || '').toLowerCase().includes(q) ||
            (t.description || '').toLowerCase().includes(q)
          );
          return matchesType && matchesSearch;
        });

        // Sorting
        filtered.sort((a, b) => {
          if (sortBy === 'reward_desc') return (b.reward_amount || 0) - (a.reward_amount || 0);
          if (sortBy === 'reward_asc') return (a.reward_amount || 0) - (b.reward_amount || 0);
          if (sortBy === 'deadline_asc') {
            const ad = a.deadline ? new Date(a.deadline).getTime() : Infinity;
            const bd = b.deadline ? new Date(b.deadline).getTime() : Infinity;
            return ad - bd;
          }
          if (sortBy === 'reset_asc') {
            const ar = a.reset_time ? new Date(a.reset_time).getTime() : Infinity;
            const br = b.reset_time ? new Date(b.reset_time).getTime() : Infinity;
            return ar - br;
          }
          // default: completed last, higher reward first within active
          const ac = a.user_progress?.is_completed ? 1 : 0;
          const bc = b.user_progress?.is_completed ? 1 : 0;
          if (ac !== bc) return ac - bc;
          return (b.reward_amount || 0) - (a.reward_amount || 0);
        });
      }

      function renderTasks() {
        tasksContainer.innerHTML = '';
        // Apply view mode classes
        tasksContainer.className = gridView
          ? `grid grid-cols-1 ${dense ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-4`
          : `grid grid-cols-1 gap-3`;

        const toShow = filtered.slice(0, displayCount);
        toShow.forEach(t => {
          const card = buildTaskCard(t);
          tasksContainer.appendChild(card);
        });

        emptyState.classList.toggle('hidden', filtered.length > 0);
        loadMoreBtn.classList.toggle('hidden', displayCount >= filtered.length);

        // Update resets count
        const todayResets = filtered.filter(t => t.reset_time && isTodaySameDay(t.reset_time)).length;
        resetCountEl.textContent = todayResets.toString();

        // Re-init icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function renderWeeklyBuckets(tasks) {
        const counts = [0,0,0,0,0,0,0]; // Mon..Sun
        tasks.forEach(t => {
          const type = taskType(t);
          if (type === 'daily') {
            for (let i = 0; i < 7; i++) counts[i] += 1;
          } else if (type === 'weekly' && Array.isArray(t.recurrence_days)) {
            t.recurrence_days.forEach(d => { // d is 1..7
              if (d >= 1 && d <= 7) counts[d-1] += 1;
            });
          } else if (type === 'monthly') {
            // Monthly: assume any day is potential; but to avoid noise, do not count into weekdays
            // Optionally, add light weight to illustration:
            // skip
          }
        });

        weekBuckets.innerHTML = '';
        const now = new Date();
        const mondayIdx = (now.getDay() + 6) % 7;
        weekOf.textContent = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(now);

        counts.forEach((c, i) => {
          const isToday = i === mondayIdx;
          const cell = document.createElement('div');
          cell.className = `rounded-lg border ${isToday ? 'border-indigo-400/40 bg-indigo-500/10' : 'border-white/10 bg-white/5'} p-2 text-center`;
          const label = document.createElement('div');
          label.className = `text-[11px] ${isToday ? 'text-indigo-200' : 'text-slate-400'}`;
          label.textContent = WEEK_LABELS[i];
          const barWrap = document.createElement('div');
          barWrap.className = 'mt-2 h-2 w-full rounded-full bg-white/5 overflow-hidden';
          const bar = document.createElement('div');
          const pct = Math.min(100, c * 10); // scale
          bar.className = `h-2 rounded-full ${isToday ? 'bg-indigo-400' : 'bg-sky-400'}`;
          bar.style.width = pct + '%';
          barWrap.appendChild(bar);
          const count = document.createElement('div');
          count.className = `mt-1 text-xs ${isToday ? 'text-indigo-100' : 'text-slate-300'} font-medium tracking-tight`;
          count.textContent = c.toString();

          cell.appendChild(label);
          cell.appendChild(barWrap);
          cell.appendChild(count);
          weekBuckets.appendChild(cell);
        });
      }

      function renderMonthlyCalendars(tasks) {
        monthlyCalendars.innerHTML = '';
        const monthly = tasks.filter(t => taskType(t) === 'monthly' && t.recurrence_day_of_month);
        if (monthly.length === 0) {
          const empty = document.createElement('div');
          empty.className = 'text-sm text-slate-400';
          empty.textContent = 'Ежемесячных повторов нет';
          monthlyCalendars.appendChild(empty);
          return;
        }
        monthly.forEach(t => {
          const cal = buildMonthlyMiniCalendar(t.recurrence_day_of_month);
          monthlyCalendars.appendChild(cal);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function toast(msg) {
        const sb = document.getElementById('snackbar');
        const text = document.getElementById('snackbarText');
        text.textContent = msg;
        sb.style.opacity = '1';
        setTimeout(() => { sb.style.opacity = '0'; }, 1800);
      }

      function setFilterButtonsActive() {
        document.querySelectorAll('.filter-chip').forEach(btn => {
          const active = btn.getAttribute('data-filter') === filterType;
          btn.classList.toggle('bg-indigo-500/15', active);
          btn.classList.toggle('border-indigo-400/30', active);
          btn.classList.toggle('text-indigo-100', active);
        });
      }

      function render() {
        filterTasks();
        renderTasks();
        renderWeeklyBuckets(filtered);
        renderMonthlyCalendars(allTasks); // show from all monthly tasks
      }

      // Events
      document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          filterType = btn.getAttribute('data-filter');
          setFilterButtonsActive();
          displayCount = 6;
          render();
        });
      });

      loadMoreBtn.addEventListener('click', () => {
        displayCount += 6;
        renderTasks();
      });

      searchInput.addEventListener('input', () => {
        searchTerm = searchInput.value;
        clearSearch.classList.toggle('hidden', !searchTerm);
        displayCount = 6;
        render();
      });

      clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchTerm = '';
        clearSearch.classList.add('hidden');
        displayCount = 6;
        render();
      });

      sortButton.addEventListener('click', () => {
        const opened = !sortMenu.classList.contains('hidden');
        sortMenu.classList.toggle('hidden', opened);
      });

      sortMenu.querySelectorAll('button[data-sort]').forEach(b => {
        b.addEventListener('click', () => {
          sortBy = b.getAttribute('data-sort');
          sortLabel.textContent = b.textContent;
          sortMenu.classList.add('hidden');
          displayCount = 6;
          render();
        });
      });

      document.addEventListener('click', (e) => {
        if (!sortButton.contains(e.target) && !sortMenu.contains(e.target)) {
          sortMenu.classList.add('hidden');
        }
      });

      viewToggle.addEventListener('click', () => {
        gridView = !gridView;
        viewToggle.querySelector('i').setAttribute('data-lucide', gridView ? 'layout-grid' : 'list');
        viewToggle.querySelector('span')?.remove();
        const lbl = document.createElement('span');
        lbl.className = 'hidden sm:inline';
        lbl.textContent = gridView ? 'Сетка' : 'Список';
        viewToggle.appendChild(lbl);
        renderTasks();
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      densityToggle.addEventListener('click', () => {
        dense = !dense;
        densityToggle.querySelector('i').setAttribute('data-lucide', dense ? 'rows' : 'rows-3');
        renderTasks();
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Init
      (function init() {
        document.body.style.fontFamily = 'Inter, ui-sans-serif, system-ui, -apple-system';
        balanceEl.textContent = computeBalance(allTasks);
        setFilterButtonsActive();
        render();
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center gap-3">

<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white text-sm font-semibold tracking-tight">
                SC
              </div>
<div className="hidden sm:flex flex-col">
<span className="text-[15px] font-semibold tracking-tight">Service Center</span>
<span className="text-xs text-slate-400 -mt-0.5">Gamified Tasks</span>
</div>
</div>

<div className="flex-1 min-w-0">
<div className="relative max-w-xl ml-2">
<i className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" data-lucide="search"></i>
<input className="w-full bg-slate-800/60 border border-white/10 rounded-md pl-10 pr-10 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40" id="searchInput" placeholder="Поиск задач, описаний..." style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system', fontWeight: '400'}} type="text"/>
<button className="hidden absolute right-2 top-1.5 rounded-md px-2 py-1 text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300" id="clearSearch">Очистить</button>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3">
<div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-slate-800/60 border border-white/10">
<i className="h-5 w-5 text-amber-300" data-lucide="coins"></i>
<span className="text-sm text-slate-300">Баланс</span>
<span className="text-sm font-semibold tracking-tight text-amber-200" id="balance">0</span>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-800/60 border border-white/10 hover:border-white/20 hover:bg-slate-800 text-sm" id="viewToggle">
<i className="h-5 w-5 text-slate-300" data-lucide="layout-grid"></i>
<span className="hidden sm:inline">Сетка</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-800/60 border border-white/10 hover:border-white/20 hover:bg-slate-800 text-sm" id="densityToggle">
<i className="h-5 w-5 text-slate-300" data-lucide="rows-3"></i>
<span className="hidden sm:inline">Плотность</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-500/90 hover:bg-indigo-500 text-white border border-indigo-300/10 text-sm">
<i className="h-5 w-5" data-lucide="shopping-bag"></i>
<span className="hidden sm:inline">Мерч</span>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="flex items-start sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Задания</h1>
<p className="text-sm text-slate-400 mt-1">Выполняйте задачи, получайте монеты и обменивайте их на мерч</p>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-800/60 border border-white/10 hover:border-white/20 hover:bg-slate-800 text-sm" id="sortButton">
<i className="h-5 w-5 text-slate-300" data-lucide="arrow-up-down"></i>
<span className="text-slate-200" id="sortLabel">Сначала актуальные</span>
</button>
<div className="hidden absolute right-0 mt-2 w-56 bg-slate-900/95 backdrop-blur border border-white/10 rounded-md shadow-xl overflow-hidden" id="sortMenu">
<div className="py-1">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="default">Сначала актуальные</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="reward_desc">Награда: по убыванию</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="reward_asc">Награда: по возрастанию</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="deadline_asc">Скоро дедлайн</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="reset_asc">Ближайший сброс</button>
</div>
</div>
</div>
</div>

<div className="mt-5 flex flex-wrap items-center gap-2">
<button className="filter-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10" data-filter="all">
<i className="h-4 w-4 text-slate-300" data-lucide="list-checks"></i> Все
            </button>
<button className="filter-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10" data-filter="daily">
<i className="h-4 w-4 text-amber-300" data-lucide="sun"></i> Ежедневные
            </button>
<button className="filter-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10" data-filter="weekly">
<i className="h-4 w-4 text-sky-300" data-lucide="calendar-days"></i> Еженедельные
            </button>
<button className="filter-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10" data-filter="monthly">
<i className="h-4 w-4 text-violet-300" data-lucide="calendar"></i> Ежемесячные
            </button>
<button className="filter-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10" data-filter="oneoff">
<i className="h-4 w-4 text-emerald-300" data-lucide="sparkles"></i> Разовые
            </button>

<div className="ml-auto inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs bg-slate-800/60 border border-white/10">
<i className="h-4 w-4 text-slate-400" data-lucide="clock"></i>
<span className="text-slate-300">Сбросы сегодня:</span>
<span className="font-semibold tracking-tight text-slate-100" id="resetCount">0</span>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

<section className="lg:col-span-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="tasksContainer"></div>
<div className="hidden mt-10" id="emptyState">
<div className="flex flex-col items-center justify-center text-center p-10 rounded-xl border border-white/10 bg-slate-900/50">
<i className="h-8 w-8 text-slate-400 mb-2" data-lucide="inbox"></i>
<h3 className="text-lg font-semibold tracking-tight">Ничего не найдено</h3>
<p className="text-sm text-slate-400 mt-1">Попробуйте изменить фильтры или строку поиска</p>
</div>
</div>
<div className="mt-6 flex justify-center">
<button className="px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm" id="loadMore">
                  Показать ещё
                </button>
</div>
</section>

<aside className="lg:col-span-4 space-y-6">

<div className="rounded-xl border border-white/10 bg-slate-900/50">
<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-sky-300" data-lucide="calendar-days"></i>
<h2 className="text-base font-semibold tracking-tight">Нагрузка по дням недели</h2>
</div>
<span className="text-xs text-slate-400" id="weekOf"></span>
</div>
<div className="p-3 grid grid-cols-7 gap-2" id="weekBuckets">

</div>
<div className="px-4 pb-4">
<p className="text-xs text-slate-400">Подсказка: планируйте сложные визиты на дни с меньшей нагрузкой</p>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-slate-900/50">
<div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
<i className="h-5 w-5 text-violet-300" data-lucide="calendar"></i>
<h2 className="text-base font-semibold tracking-tight">Повторы в этом месяце</h2>
</div>
<div className="p-4">
<div className="space-y-4" id="monthlyCalendars">

</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-slate-900/50">
<div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
<i className="h-5 w-5 text-amber-300" data-lucide="lightbulb"></i>
<h2 className="text-base font-semibold tracking-tight">Советы по продуктивности</h2>
</div>
<ul className="divide-y divide-white/5">
<li className="p-4">
<p className="text-sm text-slate-300">Группируйте звонки и CRM-задачи в один блок времени — меньше переключений, выше концентрация.</p>
</li>
<li className="p-4">
<p className="text-sm text-slate-300">Следите за “Сбросом” — выполненные до него задачи быстрее приносят валюту.</p>
</li>
</ul>
</div>
</aside>
</div>
</div>
</main>

<div className="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 transition opacity-0" id="snackbar">
<div className="px-4 py-2 rounded-md bg-slate-900/95 border border-white/10 shadow-xl text-sm">
<span id="snackbarText">Сохранено</span>
</div>
</div>
</div>

<template id="taskCardTemplate">
<article className="group overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/70 hover:border-white/20 transition-colors">
<div className="flex gap-3 p-3">
<div className="relative shrink-0">
<img alt="image" className="h-24 w-24 rounded-lg object-cover border border-white/10"/>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] rounded-full border border-white/10 bg-slate-900/80 backdrop-blur">
<span className="flex items-center gap-1 text-slate-300">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="coins"></i>
<span className="font-medium tracking-tight reward-amount"></span>
</span>
</div>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-start justify-between gap-2">
<div className="min-w-0">
<h3 className="text-[15px] font-semibold tracking-tight leading-snug title"></h3>
<p className="mt-1 text-xs text-slate-400 description" style={{WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}></p>
</div>
<div className="flex items-center gap-1 mt-0.5">
<span className="status-badge text-[11px] px-2 py-0.5 rounded-full border"></span>
</div>
</div>

<div className="mt-3">
<div className="flex items-center justify-between text-[11px] text-slate-400">
<span className="progress-label"></span>
<span className="progress-value font-medium tracking-tight text-slate-300"></span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 progress-bar" style={{width: '0%'}}></div>
</div>
</div>

<div className="mt-3 flex flex-col gap-2">
<div className="flex items-center gap-2 flex-wrap recurrence-row">

</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-slate-400 reset-line">

</div>
<div className="flex items-center gap-2">
<button className="action-primary px-3 py-1.5 text-xs rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200">
                    Открыть
                  </button>
<button className="action-secondary px-3 py-1.5 text-xs rounded-md bg-indigo-500/90 hover:bg-indigo-500 text-white border border-indigo-300/10 hidden">
                    Забрать награду
                  </button>
</div>
</div>
</div>
</div>
</div>
</article>
</template>

<template id="weeklyPillsTemplate">
<div className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-1 py-1">

</div>
</template>

<template id="dayPillTemplate">
<div className="w-6 h-6 rounded-md text-[11px] flex items-center justify-center border">

</div>
</template>

<template id="miniCalendarTemplate">
<div className="rounded-lg border border-white/10 bg-slate-800/50">
<div className="px-3 py-2 flex items-center justify-between border-b border-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-violet-300" data-lucide="repeat-2"></i>
<span className="text-sm font-medium tracking-tight calendar-title"></span>
</div>
<span className="text-[11px] text-slate-400">Каждый <b className="text-slate-200 calendar-day"></b> день месяца</span>
</div>
<div className="p-3">
<div className="grid grid-cols-7 gap-1">
<div className="text-[10px] text-slate-400 text-center">Пн</div>
<div className="text-[10px] text-slate-400 text-center">Вт</div>
<div className="text-[10px] text-slate-400 text-center">Ср</div>
<div className="text-[10px] text-slate-400 text-center">Чт</div>
<div className="text-[10px] text-slate-400 text-center">Пт</div>
<div className="text-[10px] text-slate-400 text-center">Сб</div>
<div className="text-[10px] text-slate-400 text-center">Вс</div>
</div>
<div className="mt-1 grid grid-cols-7 gap-1 days-grid">

</div>
</div>
</div>
</template>


    </>
  );
}
