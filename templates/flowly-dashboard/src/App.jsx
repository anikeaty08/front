import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      lucide.createIcons();
    });

    // App State
    let appData = {
      tasks: [],
      goals: [],
      habits: [],
      notes: [],
      calendarEvents: {},
      chatHistory: [],
      currentPlan: 'standard',
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      ui: {
        taskFilter: 'all',
        taskSort: 'newest',
        taskSearch: ''
      },
      charts: {}
    };

    const planLimits = {
      gratuit: { tasks: 25, goals: 3, habits: 5, notes: 10, events: 10 },
      standard: { tasks: Infinity, goals: Infinity, habits: Infinity, notes: 100, events: 100 },
      ultra: { tasks: Infinity, goals: Infinity, habits: Infinity, notes: Infinity, events: Infinity }
    };

    // Utilities
    function showAlert(message) {
      const modal = document.getElementById('alert-modal');
      const msg = document.getElementById('alert-message');
      msg.textContent = message;
      modal.classList.remove('hidden');
      setTimeout(() => lucide.createIcons(), 50);
    }

    function openFormModal({ title, description, fields, submitText = 'Valider', initialValues = {}, onSubmit }) {
      const modal = document.getElementById('form-modal');
      const titleEl = document.getElementById('form-modal-title');
      const descEl = document.getElementById('form-modal-desc');
      const form = document.getElementById('form-modal-form');
      const submitBtn = document.getElementById('form-modal-submit');
      const errorEl = document.getElementById('form-modal-error');

      titleEl.textContent = title || 'Formulaire';
      if (description) {
        descEl.classList.remove('hidden');
        descEl.textContent = description;
      } else {
        descEl.classList.add('hidden');
        descEl.textContent = '';
      }

      form.innerHTML = fields.map(f => {
        const id = `fm-${f.name}`;
        const value = initialValues[f.name] ?? '';
        const common = `id="${id}" name="${f.name}" ${f.required ? 'required' : ''} class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="${f.placeholder || ''}" ${f.min !== undefined ? 'min="'+f.min+'"' : ''} ${f.max !== undefined ? 'max="'+f.max+'"' : ''} ${f.step !== undefined ? 'step="'+f.step+'"' : ''} value="${typeof value === 'number' ? value : (value || '')}"`;
        let control = '';
        if (f.type === 'textarea') {
          control = `<textarea ${common} rows="${f.rows || 4}">${value || ''}</textarea>`;
        } else {
          control = `<input type="${f.type || 'text'}" ${common}>`;
        }
        return `
          <div>
            <label for="${id}" class="block text-sm font-medium mb-2">${f.label || f.name}</label>
            ${control}
          </div>
        `;
      }).join('');

      submitBtn.textContent = submitText;
      errorEl.classList.add('hidden');
      errorEl.textContent = '';

      function getValues() {
        const vals = {};
        fields.forEach(f => {
          const el = form.querySelector(`[name="${f.name}"]`);
          if (!el) return;
          if (f.type === 'number') {
            vals[f.name] = el.value === '' ? null : Number(el.value);
          } else {
            vals[f.name] = el.value;
          }
        });
        return vals;
      }

      function setError(msg) {
        errorEl.textContent = msg || '';
        errorEl.classList.toggle('hidden', !msg);
      }

      submitBtn.onclick = async () => {
        setError('');
        const values = getValues();
        try {
          const shouldClose = await onSubmit(values, { setError });
          if (shouldClose !== false) {
            closeModal('form-modal');
          }
        } catch (e) {
          setError('Une erreur est survenue.');
        }
      };

      form.onsubmit = (e) => { e.preventDefault(); submitBtn.click(); };

      modal.classList.remove('hidden');
      setTimeout(() => {
        lucide.createIcons();
        const first = form.querySelector('input, textarea, select');
        if (first) first.focus();
      }, 30);
    }

    function formatDateISO(date) {
      const d = new Date(date || new Date());
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2,'0');
      const day = String(d.getDate()).padStart(2,'0');
      return `${y}-${m}-${day}`;
    }

    function loadData() {
      const saved = localStorage.getItem('flowly-data');
      if (saved) {
        appData = Object.assign(appData, JSON.parse(saved));
      }
    }

    function saveData() {
      localStorage.setItem('flowly-data', JSON.stringify(appData));
    }

    function closeModal(modalId) {
      document.getElementById(modalId).classList.add('hidden');
    }

    function showProfile() {
      document.getElementById('profile-modal').classList.remove('hidden');
      setTimeout(() => lucide.createIcons(), 50);
    }

    function logout() {
      closeModal('profile-modal');
      showAlert('Déconnecté localement (données conservées).');
    }

    function openPlanModal() {
      document.getElementById('plan-modal').classList.remove('hidden');
      setTimeout(() => lucide.createIcons(), 50);
    }

    function setPlan(plan) {
      appData.currentPlan = plan;
      saveData();
      updatePlanDisplay();
      closeModal('plan-modal');
      closeModal('profile-modal');
      showAlert('Votre plan a été mis à jour.');
    }

    function updatePlanDisplay() {
      const map = { gratuit: 'Plan Gratuit', standard: 'Plan Standard', ultra: 'Plan Ultra' };
      const badge = document.getElementById('current-plan-badge');
      const profilePlan = document.getElementById('profile-plan');
      if (badge) badge.textContent = map[appData.currentPlan] || 'Plan';
      if (profilePlan) profilePlan.textContent = map[appData.currentPlan] || 'Plan';
    }

    // Navigation
    function showTab(tab) {
      const tabs = ['dashboard', 'tasks', 'goals', 'habits', 'notes', 'calendar', 'reports'];
      tabs.forEach(t => {
        const section = document.getElementById(`section-${t}`);
        if (section) section.classList.add('hidden');
        const side = document.getElementById(`side-${t}`);
        if (side) {
          side.classList.remove('bg-gray-900','text-white');
          side.classList.add('hover:bg-white');
        }
      });
      const activeSection = document.getElementById(`section-${tab}`);
      if (activeSection) activeSection.classList.remove('hidden');
      const activeSide = document.getElementById(`side-${tab}`);
      if (activeSide) {
        activeSide.classList.add('bg-gray-900','text-white');
        activeSide.classList.remove('hover:bg-white');
      }
      const titleMap = {
        dashboard: 'Dashboard',
        tasks: 'Tâches',
        goals: 'Objectifs',
        habits: 'Habitudes',
        notes: 'Notes',
        calendar: 'Agenda',
        reports: 'Rapports'
      };
      const topTitle = document.getElementById('topbar-title');
      if (topTitle) topTitle.textContent = titleMap[tab] || 'Flowly';

      if (tab === 'calendar') renderCalendar();
      if (tab === 'reports') renderReports();
      setTimeout(() => lucide.createIcons(), 50);
    }

    // Tasks
    function addTask() {
      const limit = planLimits[appData.currentPlan].tasks;
      if (appData.tasks.length >= limit) {
        showAlert(`Limite atteinte ! Passez à un plan supérieur pour ajouter plus de tâches.`);
        return;
      }
      openFormModal({
        title: 'Nouvelle tâche',
        description: 'Ajoutez une tâche à votre liste.',
        fields: [
          { name: 'title', label: 'Titre de la tâche', type: 'text', placeholder: 'Ex: Finaliser la présentation', required: true }
        ],
        submitText: 'Ajouter',
        onSubmit: (values, { setError }) => {
          const title = (values.title || '').trim();
          if (!title) { setError('Le titre est requis.'); return false; }
          appData.tasks.push({ id: Date.now(), title, completed: false, createdAt: Date.now() });
          saveData();
          renderTasks();
          renderDashboard();
          return true;
        }
      });
    }

    function toggleTask(id) {
      const task = appData.tasks.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
        saveData();
        renderTasks();
        renderDashboard();
      }
    }

    function deleteTask(id) {
      appData.tasks = appData.tasks.filter(t => t.id !== id);
      saveData();
      renderTasks();
      renderDashboard();
    }

    function toggleAllTasks() {
      const visible = getFilteredSortedTasks();
      const allCompleted = visible.length > 0 && visible.every(t => t.completed);
      visible.forEach(v => {
        const t = appData.tasks.find(x => x.id === v.id);
        if (t) t.completed = !allCompleted;
      });
      saveData();
      renderTasks();
      renderDashboard();
    }

    function clearCompletedTasks() {
      const before = appData.tasks.length;
      appData.tasks = appData.tasks.filter(t => !t.completed);
      const removed = before - appData.tasks.length;
      saveData();
      renderTasks();
      renderDashboard();
      if (removed > 0) showAlert(`${removed} tâche(s) supprimée(s).`);
    }

    function setTaskFilter(filter) {
      appData.ui.taskFilter = filter;
      document.getElementById('filter-label').textContent = `Afficher: ${filter === 'all' ? 'Tous' : filter === 'active' ? 'Actives' : 'Terminées'}`;
      hideMenu('task-filter-menu');
      renderTasks();
    }

    function setTaskSort(sort) {
      appData.ui.taskSort = sort;
      const labelMap = { 'newest': 'Récent', 'oldest': 'Ancien', 'alpha-asc': 'A → Z', 'alpha-desc': 'Z → A' };
      document.getElementById('sort-label').textContent = `Trier: ${labelMap[sort] || 'Récent'}`;
      hideMenu('task-sort-menu');
      renderTasks();
    }

    function debounce(fn, delay=250) {
      let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
    }

    function onTaskSearchInput(e) {
      appData.ui.taskSearch = e.target.value.trim().toLowerCase();
      renderTasks();
    }

    function getFilteredSortedTasks() {
      let list = appData.tasks.map(t => ({...t}));
      // fill missing createdAt for old entries
      list.forEach(t => { if (!t.createdAt) t.createdAt = t.id; });
      // filter
      if (appData.ui.taskFilter === 'active') list = list.filter(t => !t.completed);
      if (appData.ui.taskFilter === 'completed') list = list.filter(t => t.completed);
      // search
      if (appData.ui.taskSearch) list = list.filter(t => (t.title || '').toLowerCase().includes(appData.ui.taskSearch));
      // sort
      if (appData.ui.taskSort === 'newest') list.sort((a,b) => b.createdAt - a.createdAt);
      if (appData.ui.taskSort === 'oldest') list.sort((a,b) => a.createdAt - b.createdAt);
      if (appData.ui.taskSort === 'alpha-asc') list.sort((a,b) => (a.title||'').localeCompare(b.title||''));
      if (appData.ui.taskSort === 'alpha-desc') list.sort((a,b) => (b.title||'').localeCompare(a.title||''));
      return list;
    }

    function renderTasks() {
      const container = document.getElementById('tasks-container');
      if (!container) return;

      const visible = getFilteredSortedTasks();
      const total = appData.tasks.length;
      const active = appData.tasks.filter(t => !t.completed).length;
      const completed = total - active;

      const counter = document.getElementById('tasks-counter');
      if (counter) counter.textContent = `${active} actives • ${completed} terminées`;

      // Progress bar (global, non filtré)
      const pct = total ? Math.round((completed / total) * 100) : 0;
      const bar = document.getElementById('tasks-progress-bar');
      if (bar) bar.style.width = pct + '%';

      if (visible.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-8">Aucune tâche ne correspond. Ajoutez ou modifiez vos filtres.</p>';
      } else {
        container.innerHTML = visible.map(task => `
          <div class="task-item flex items-center gap-3 p-4 bg-white/50 rounded-xl hover:bg-white transition-all">
            <button onclick="toggleTask(${task.id})" class="w-5 h-5 rounded border-2 ${task.completed ? 'bg-gray-900 border-gray-900' : 'border-gray-300'} flex items-center justify-center transition-all hover:scale-110" aria-label="Basculer">
              ${task.completed ? '<i data-lucide="check" class="w-3 h-3 text-white"></i>' : ''}
            </button>
            <span class="${task.completed ? 'line-through text-gray-400' : ''} flex-1">${task.title}</span>
            <div class="text-xs text-gray-400 mr-2">${new Date(task.createdAt || task.id).toLocaleDateString()}</div>
            <button onclick="deleteTask(${task.id})" class="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-all" aria-label="Supprimer">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        `).join('');
      }
      setTimeout(() => lucide.createIcons(), 50);
    }

    // Goals
    function addGoal() {
      const limit = planLimits[appData.currentPlan].goals;
      if (appData.goals.length >= limit) {
        showAlert(`Limite atteinte ! Passez à un plan supérieur pour ajouter plus d'objectifs.`);
        return;
      }
      openFormModal({
        title: 'Nouvel objectif',
        fields: [
          { name: 'title', label: 'Titre de l\'objectif', type: 'text', placeholder: 'Ex: Courir un semi-marathon', required: true },
          { name: 'target', label: 'Valeur cible', type: 'number', placeholder: 'Ex: 100', required: true, min: 1, step: 1 }
        ],
        submitText: 'Créer',
        onSubmit: (values, { setError }) => {
          const title = (values.title || '').trim();
          const target = Number(values.target);
          if (!title) { setError('Le titre est requis.'); return false; }
          if (!target || target <= 0) { setError('La valeur cible doit être supérieure à 0.'); return false; }
          appData.goals.push({ id: Date.now(), title, current: 0, target });
          saveData();
          renderGoals();
          renderDashboard();
          return true;
        }
      });
    }

    function updateGoalProgress(id) {
      const goal = appData.goals.find(g => g.id === id);
      if (!goal) return;
      openFormModal({
        title: 'Mettre à jour la progression',
        description: goal.title,
        fields: [
          { name: 'current', label: `Valeur actuelle (0 à ${goal.target})`, type: 'number', min: 0, max: goal.target, step: 1, required: true }
        ],
        initialValues: { current: goal.current },
        submitText: 'Mettre à jour',
        onSubmit: (values, { setError }) => {
          const newValue = Number(values.current);
          if (isNaN(newValue) || newValue < 0) { setError('Entrez une valeur valide.'); return false; }
          goal.current = Math.min(newValue, goal.target);
          saveData();
          renderGoals();
          renderDashboard();
          return true;
        }
      });
    }

    function deleteGoal(id) {
      appData.goals = appData.goals.filter(g => g.id !== id);
      saveData();
      renderGoals();
      renderDashboard();
    }

    function renderGoals() {
      const container = document.getElementById('goals-container');
      if (!container) return;
      if (appData.goals.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-8">Aucun objectif. Définissez vos premiers objectifs !</p>';
      } else {
        container.innerHTML = appData.goals.map(goal => {
          const progress = Math.round((goal.current / goal.target) * 100);
          return `
            <div class="goal-item p-4 bg-white/50 rounded-xl hover:bg-white transition-all">
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-semibold">${goal.title}</h3>
                <button onclick="deleteGoal(${goal.id})" class="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-all">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="flex items-center gap-3 mb-2">
                <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-gray-900 rounded-full transition-all" style="width: ${progress}%"></div>
                </div>
                <span class="text-sm font-medium">${progress}%</span>
              </div>
              <div class="flex items-center justify-between text-sm text-gray-600">
                <span>${goal.current} / ${goal.target}</span>
                <button onclick="updateGoalProgress(${goal.id})" class="px-3 py-1 bg-gray-900 text-white rounded-lg text-xs hover:bg-gray-800 transition-all">
                  Mettre à jour
                </button>
              </div>
            </div>
          `;
        }).join('');
      }
      setTimeout(() => lucide.createIcons(), 50);
    }

    // Habits
    function addHabit() {
      const limit = planLimits[appData.currentPlan].habits;
      if (appData.habits.length >= limit) {
        showAlert(`Limite atteinte ! Passez à un plan supérieur pour ajouter plus d'habitudes.`);
        return;
      }
      openFormModal({
        title: 'Nouvelle habitude',
        fields: [
          { name: 'title', label: 'Titre de l\'habitude', type: 'text', placeholder: 'Ex: Lire 20 minutes', required: true }
        ],
        submitText: 'Ajouter',
        onSubmit: (values, { setError }) => {
          const title = (values.title || '').trim();
          if (!title) { setError('Le titre est requis.'); return false; }
          appData.habits.push({ id: Date.now(), title, streak: 0, lastChecked: null });
          saveData();
          renderHabits();
          renderDashboard();
          return true;
        }
      });
    }

    function checkHabit(id) {
      const habit = appData.habits.find(h => h.id === id);
      if (habit) {
        const today = new Date().toDateString();
        if (habit.lastChecked === today) {
          habit.lastChecked = null;
          habit.streak = Math.max(0, habit.streak - 1);
        } else {
          habit.lastChecked = today;
          habit.streak += 1;
        }
        saveData();
        renderHabits();
        renderDashboard();
      }
    }

    function deleteHabit(id) {
      appData.habits = appData.habits.filter(h => h.id !== id);
      saveData();
      renderHabits();
      renderDashboard();
    }

    function renderHabits() {
      const container = document.getElementById('habits-container');
      if (!container) return;
      if (appData.habits.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-8">Aucune habitude. Créez vos premières habitudes !</p>';
      } else {
        const today = new Date().toDateString();
        container.innerHTML = appData.habits.map(habit => {
          const checked = habit.lastChecked === today;
          return `
            <div class="habit-item flex items-center gap-3 p-4 bg-white/50 rounded-xl hover:bg-white transition-all">
              <button onclick="checkHabit(${habit.id})" class="w-5 h-5 rounded border-2 ${checked ? 'bg-gray-900 border-gray-900' : 'border-gray-300'} flex items-center justify-center transition-all hover:scale-110">
                ${checked ? '<i data-lucide="check" class="w-3 h-3 text-white"></i>' : ''}
              </button>
              <div class="flex-1">
                <div class="font-medium">${habit.title}</div>
                <div class="text-sm text-gray-500 flex items-center gap-1">
                  <i data-lucide="flame" class="w-3 h-3"></i> ${habit.streak} jour${habit.streak > 1 ? 's' : ''}
                </div>
              </div>
              <button onclick="deleteHabit(${habit.id})" class="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-all">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          `;
        }).join('');
      }
      setTimeout(() => lucide.createIcons(), 50);
    }

    // Notes
    function addNote() {
      const limit = planLimits[appData.currentPlan].notes;
      if (appData.notes.length >= limit) {
        showAlert(`Limite atteinte ! Passez à un plan supérieur pour ajouter plus de notes.`);
        return;
      }
      openFormModal({
        title: 'Nouvelle note',
        fields: [
          { name: 'title', label: 'Titre', type: 'text', placeholder: 'Ex: Idées de projet', required: true },
          { name: 'content', label: 'Contenu', type: 'textarea', placeholder: 'Saisissez votre note...', required: false, rows: 6 }
        ],
        submitText: 'Enregistrer',
        onSubmit: (values, { setError }) => {
          const title = (values.title || '').trim();
          if (!title) { setError('Le titre est requis.'); return false; }
          appData.notes.push({ id: Date.now(), title, content: values.content || '' });
          saveData();
          renderNotes();
          return true;
        }
      });
    }

    function deleteNote(id) {
      appData.notes = appData.notes.filter(n => n.id !== id);
      saveData();
      renderNotes();
    }

    function renderNotes() {
      const container = document.getElementById('notes-container');
      if (!container) return;
      if (appData.notes.length === 0) {
        container.innerHTML = '<div class="col-span-full"><p class="text-gray-500 text-center py-8">Aucune note. Commencez à noter vos idées !</p></div>';
      } else {
        container.innerHTML = appData.notes.map(note => `
          <div class="note-item p-4 bg-white/50 rounded-xl hover:bg-white transition-all hover-lift">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold">${note.title}</h3>
              <button onclick="deleteNote(${note.id})" class="p-1 hover:bg-red-50 text-red-600 rounded transition-all">
                <i data-lucide="trash-2" class="w-3 h-3"></i>
              </button>
            </div>
            <p class="text-sm text-gray-600 line-clamp-3">${note.content}</p>
          </div>
        `).join('');
      }
      setTimeout(() => lucide.createIcons(), 50);
    }

    // Calendar
    function addEvent() {
      openFormModal({
        title: 'Nouvel événement',
        fields: [
          { name: 'date', label: 'Date', type: 'date', required: true },
          { name: 'title', label: 'Titre de l\'événement', type: 'text', placeholder: 'Ex: Réunion produit', required: true }
        ],
        initialValues: { date: formatDateISO(new Date(appData.currentYear, appData.currentMonth, 1)) },
        submitText: 'Ajouter',
        onSubmit: (values, { setError }) => {
          const date = values.date;
          const title = (values.title || '').trim();
          if (!date) { setError('La date est requise.'); return false; }
          if (!title) { setError('Le titre est requis.'); return false; }

          const [y, m] = date.split('-');
          const ym = `${y}-${m}`;
          const monthEvents = Object.keys(appData.calendarEvents)
            .filter(d => d.startsWith(ym))
            .reduce((acc, key) => acc + appData.calendarEvents[key].length, 0);
          const limit = planLimits[appData.currentPlan].events;
          if (monthEvents >= limit) {
            showAlert(`Limite mensuelle atteinte ! Passez à un plan supérieur.`);
            return true;
          }

          if (!appData.calendarEvents[date]) appData.calendarEvents[date] = [];
          appData.calendarEvents[date].push({ id: Date.now(), title });
          saveData();
          renderCalendar();
          return true;
        }
      });
    }

    function addEventOn(dateStr) {
      openFormModal({
        title: 'Nouvel événement',
        fields: [
          { name: 'date', label: 'Date', type: 'date', required: true },
          { name: 'title', label: 'Titre de l\'événement', type: 'text', placeholder: 'Ex: Appel client', required: true }
        ],
        initialValues: { date: dateStr },
        submitText: 'Ajouter',
        onSubmit: (values, { setError }) => {
          const date = values.date;
          const title = (values.title || '').trim();
          if (!date) { setError('La date est requise.'); return false; }
          if (!title) { setError('Le titre est requis.'); return false; }
          if (!appData.calendarEvents[date]) appData.calendarEvents[date] = [];
          appData.calendarEvents[date].push({ id: Date.now(), title });
          saveData();
          renderCalendar();
          return true;
        }
      });
    }

    function previousMonth() {
      appData.currentMonth--;
      if (appData.currentMonth < 0) {
        appData.currentMonth = 11;
        appData.currentYear--;
      }
      renderCalendar();
    }

    function nextMonth() {
      appData.currentMonth++;
      if (appData.currentMonth > 11) {
        appData.currentMonth = 0;
        appData.currentYear++;
      }
      renderCalendar();
    }

    function renderCalendar() {
      const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      const monthEl = document.getElementById('calendar-month');
      const gridEl = document.getElementById('calendar-grid');
      if (!monthEl || !gridEl) return;

      monthEl.textContent = `${monthNames[appData.currentMonth]} ${appData.currentYear}`;

      const firstDay = new Date(appData.currentYear, appData.currentMonth, 1).getDay();
      const daysInMonth = new Date(appData.currentYear, appData.currentMonth + 1, 0).getDate();

      let html = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day =>
        `<div class="text-center text-xs font-medium text-gray-500 py-2">${day}</div>`
      ).join('');

      const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
      for (let i = 0; i < adjustedFirstDay; i++) {
        html += '<div></div>';
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${appData.currentYear}-${String(appData.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const events = appData.calendarEvents[dateStr] || [];
        const today = new Date().toDateString() === new Date(dateStr).toDateString();

        html += `
          <div class="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all ${today ? 'ring-2 ring-gray-900' : ''} cursor-pointer" onclick="addEventOn('${dateStr}')">
            <div class="text-sm font-medium mb-1 ${today ? 'text-gray-900' : 'text-gray-700'}">${day}</div>
            ${events.map(e => `<div class="text-xs bg-gray-900 text-white rounded px-1 py-0.5 mb-1 truncate">${e.title}</div>`).join('')}
          </div>
        `;
      }

      gridEl.innerHTML = html;
      setTimeout(() => lucide.createIcons(), 50);
    }

    // Dashboard
    function renderDashboard() {
      const completed = appData.tasks.filter(t => t.completed).length;
      const total = appData.tasks.length;
      const percent = total ? Math.round((completed / total) * 100) : 0;

      const pctEl = document.getElementById('progress-percent');
      const cntEl = document.getElementById('progress-count');
      const barEl = document.getElementById('progress-bar');
      if (pctEl) pctEl.textContent = `${percent}%`;
      if (cntEl) cntEl.textContent = `${completed}`;
      if (barEl) barEl.style.width = `${percent}%`;

      const counts = document.getElementById('counts-summary');
      if (counts) counts.textContent = `${total} tâches • ${appData.goals.length} objectifs • ${appData.habits.length} habitudes`;
    }

    // Reports (Chart.js)
    function renderReports() {
      // destroy previous
      Object.values(appData.charts).forEach(ch => { try { ch.destroy(); } catch(e){} });
      appData.charts = {};

      const tasksTotal = appData.tasks.length;
      const tasksCompleted = appData.tasks.filter(t => t.completed).length;
      const tasksActive = tasksTotal - tasksCompleted;

      const ctxTasks = document.getElementById('chartTasks');
      if (ctxTasks) {
        appData.charts.tasks = new Chart(ctxTasks.getContext('2d'), {
          type: 'doughnut',
          data: {
            labels: ['Actives', 'Terminées'],
            datasets: [{ data: [tasksActive, tasksCompleted], backgroundColor: ['#111827', '#60A5FA'] }]
          },
          options: { plugins: { legend: { position: 'bottom' } } }
        });
      }

      // Weekly completions (last 7 days)
      const days = [...Array(7)].map((_,i) => {
        const d = new Date(); d.setDate(d.getDate() - (6 - i));
        return d;
      });
      const labels = days.map(d => d.toLocaleDateString('fr-FR', { weekday:'short' }));
      const perDay = days.map(d => {
        const key = d.toDateString();
        // approximate: count tasks whose id/createdAt date equals this date and completed
        return appData.tasks.filter(t => t.completed && new Date(t.createdAt || t.id).toDateString() === key).length;
      });

      const ctxWeekly = document.getElementById('chartWeekly');
      if (ctxWeekly) {
        appData.charts.weekly = new Chart(ctxWeekly.getContext('2d'), {
          type: 'line',
          data: {
            labels,
            datasets: [{ label: 'Terminées', data: perDay, borderColor: '#111827', backgroundColor: '#11182722', fill: true, tension: 0.3 }]
          },
          options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, precision: 0 } } }
        });
      }
    }

    // Chat
    function toggleChat() {
      const panel = document.getElementById('chatbot-panel');
      panel.classList.toggle('hidden');
      if (!panel.classList.contains('hidden')) {
        renderChat();
        const input = document.getElementById('chat-input');
        input.focus();
        input.onkeydown = (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage();
          }
        };
      }
      setTimeout(() => lucide.createIcons(), 50);
    }

    function renderChat() {
      const wrap = document.getElementById('chat-messages');
      if (!wrap) return;
      wrap.innerHTML = appData.chatHistory.map(msg => `
        <div class="flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}">
          <div class="${msg.role === '          user' ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200'} max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow whitespace-pre-wrap break-words">
            ${escapeHTML(msg.content || '')}
          </div>
        </div>
      `).join('');
      wrap.scrollTop = wrap.scrollHeight;
    }

    function escapeHTML(str) {
      return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function sendChatMessage() {
      const input = document.getElementById('chat-input');
      const text = (input.value || '').trim();
      if (!text) return;
      appData.chatHistory.push({ role: 'user', content: text });
      input.value = '';
      renderChat();

      const reply = handleChatCommand(text);
      appData.chatHistory.push({ role: 'assistant', content: reply });
      saveData();
      renderChat();
      setTimeout(() => lucide.createIcons(), 50);
    }

    function handleChatCommand(text) {
      const t = text.trim();

      // AIDE
      if (/^(aide|help|\?)$/i.test(t)) {
        return [
          "Voici quelques commandes utiles:",
          "• créer tâche: Préparer la réunion",
          "• terminer tâche: Préparer la réunion",
          "• supprimer tâche: Préparer la réunion",
          "• créer objectif: Perdre 5kg | cible: 5",
          "• maj objectif: Perdre 5kg à 2",
          "• ajouter habitude: Méditer 10 min",
          "• cocher habitude: Méditer 10 min",
          "• créer note: Idée pitch | contenu: Penser au budget",
          "• créer événement: Démo client | date: 2025-06-12",
          "• liste tâches"
        ].join('\n');
      }

      // LISTE TÂCHES
      if (/^list(e|er)?\s*t[aâ]ches?$/i.test(t)) {
        const total = appData.tasks.length;
        const done = appData.tasks.filter(x => x.completed).length;
        const active = total - done;
        const preview = appData.tasks.slice(0, 5).map(x => `- ${x.completed ? '✅' : '⬜️'} ${x.title}`).join('\n') || 'Aucune tâche.';
        return `Tâches: ${active} actives / ${done} terminées (total ${total})\n${preview}${total > 5 ? '\n…' : ''}`;
      }

      // CRÉER TÂCHE
      let m = t.match(/^(?:cr[ée]er|ajouter)\s*t[aâ]che[:\-]?\s*(.+)$/i);
      if (m) {
        const title = m[1].trim();
        if (!title) return "Indiquez un titre pour la tâche.";
        const limit = planLimits[appData.currentPlan].tasks;
        if (appData.tasks.length >= limit) return "Limite de tâches atteinte pour votre plan.";
        appData.tasks.push({ id: Date.now(), title, completed: false, createdAt: Date.now() });
        saveData();
        renderTasks(); renderDashboard();
        return `Tâche ajoutée: "${title}" ✅`;
      }

      // TERMINER TÂCHE
      m = t.match(/^(?:terminer|compl[ée]ter|marquer.*termin[ée]e?|finir|done)\s*t[aâ]che[:\-]?\s*(.+)$/i);
      if (m) {
        const q = m[1].trim().toLowerCase();
        const task = findByTitle(appData.tasks, q);
        if (!task) return `Aucune tâche trouvée pour: "${q}".`;
        task.completed = true;
        saveData(); renderTasks(); renderDashboard();
        return `Tâche marquée comme terminée: "${task.title}" 🎉`;
      }

      // SUPPRIMER TÂCHE
      m = t.match(/^(?:supprimer|retirer|effacer)\s*t[aâ]che[:\-]?\s*(.+)$/i);
      if (m) {
        const q = m[1].trim().toLowerCase();
        const task = findByTitle(appData.tasks, q);
        if (!task) return `Aucune tâche correspondante: "${q}".`;
        appData.tasks = appData.tasks.filter(x => x.id !== task.id);
        saveData(); renderTasks(); renderDashboard();
        return `Tâche supprimée: "${task.title}" 🗑️`;
      }

      // CRÉER OBJECTIF
      m = t.match(/^(?:cr[ée]er|ajouter)\s*objectif[:\-]?\s*(.+?)(?:\s*\|\s*(?:cible|target)\s*[:\-]?\s*(\d+))?$/i);
      if (m) {
        const title = (m[1] || '').trim();
        const target = Number(m[2] || 0) || 1;
        const limit = planLimits[appData.currentPlan].goals;
        if (appData.goals.length >= limit) return "Limite d'objectifs atteinte pour votre plan.";
        if (!title) return "Indiquez un titre pour l'objectif.";
        appData.goals.push({ id: Date.now(), title, current: 0, target });
        saveData(); renderGoals(); renderDashboard();
        return `Objectif créé: "${title}" (cible: ${target}) 🎯`;
      }

      // MAJ OBJECTIF
      m = t.match(/^(?:maj|mettre\s*à\s*jour|update)\s*objectif[:\-]?\s*(.+?)\s*(?:à|to)\s*(\d+)$/i);
      if (m) {
        const q = m[1].trim().toLowerCase();
        const val = Number(m[2]);
        const goal = findByTitle(appData.goals, q);
        if (!goal) return `Objectif introuvable: "${q}".`;
        goal.current = Math.min(val, goal.target);
        saveData(); renderGoals(); renderDashboard();
        return `Progression mise à jour pour "${goal.title}": ${goal.current}/${goal.target} (${Math.round(goal.current/goal.target*100)}%) ✅`;
      }

      // CRÉER HABITUDE
      m = t.match(/^(?:cr[ée]er|ajouter)\s*habitude[:\-]?\s*(.+)$/i);
      if (m) {
        const title = m[1].trim();
        const limit = planLimits[appData.currentPlan].habits;
        if (appData.habits.length >= limit) return "Limite d'habitudes atteinte pour votre plan.";
        if (!title) return "Indiquez un titre pour l'habitude.";
        appData.habits.push({ id: Date.now(), title, streak: 0, lastChecked: null });
        saveData(); renderHabits(); renderDashboard();
        return `Habitude ajoutée: "${title}" 🔁`;
      }

      // COCHER HABITUDE
      m = t.match(/^(?:cocher|valider|check)\s*habitude[:\-]?\s*(.+)$/i);
      if (m) {
        const q = m[1].trim().toLowerCase();
        const habit = findByTitle(appData.habits, q);
        if (!habit) return `Habitude introuvable: "${q}".`;
        const today = new Date().toDateString();
        if (habit.lastChecked === today) {
          habit.lastChecked = null;
          habit.streak = Math.max(0, habit.streak - 1);
          saveData(); renderHabits(); renderDashboard();
          return `Habitude décochée: "${habit.title}". Série: ${habit.streak}`;
        } else {
          habit.lastChecked = today;
          habit.streak += 1;
          saveData(); renderHabits(); renderDashboard();
          return `Habitude cochée aujourd'hui: "${habit.title}" 🔥 Série: ${habit.streak}`;
        }
      }

      // CRÉER NOTE
      m = t.match(/^(?:cr[ée]er|ajouter)\s*note[:\-]?\s*(.+?)(?:\s*\|\s*(?:contenu|content)\s*[:\-]?\s*([\s\S]+))?$/i);
      if (m) {
        const title = (m[1] || '').trim();
        const content = (m[2] || '').trim();
        const limit = planLimits[appData.currentPlan].notes;
        if (appData.notes.length >= limit) return "Limite de notes atteinte pour votre plan.";
        if (!title) return "Indiquez un titre pour la note.";
        appData.notes.push({ id: Date.now(), title, content });
        saveData(); renderNotes();
        return `Note créée: "${title}" 📝`;
      }

      // CRÉER ÉVÉNEMENT
      m = t.match(/^(?:cr[ée]er|ajouter)\s*(?:[éè]v[ée]nement|event)[:\-]?\s*(.+?)(?:\s*\|\s*date\s*[:\-]?\s*(\d{4}-\d{2}-\d{2}))?$/i);
      if (m) {
        const title = (m[1] || '').trim();
        const date = (m[2] || formatDateISO(new Date())).trim();
        const [y, mo] = date.split('-');
        const ym = `${y}-${mo}`;
        const monthEvents = Object.keys(appData.calendarEvents).filter(d => d.startsWith(ym)).reduce((acc, k) => acc + appData.calendarEvents[k].length, 0);
        const limit = planLimits[appData.currentPlan].events;
        if (monthEvents >= limit) return "Limite mensuelle d'événements atteinte.";
        if (!title) return "Indiquez un titre pour l'événement.";
        if (!appData.calendarEvents[date]) appData.calendarEvents[date] = [];
        appData.calendarEvents[date].push({ id: Date.now(), title });
        saveData(); renderCalendar();
        return `Événement ajouté le ${date}: "${title}" 📅`;
      }

      return "Commande non reconnue. Tapez « aide » pour voir les exemples.";
    }

    function findByTitle(list, query) {
      const q = query.toLowerCase();
      // Priorité: correspondance exacte (ignorer casse), sinon contient
      return list.find(x => (x.title || '').toLowerCase() === q) ||
             list.find(x => (x.title || '').toLowerCase().includes(q));
    }

    // Menus (filter/sort)
    function toggleMenu(id) {
      const el = document.getElementById(id);
      if (!el) return;
      // Close other menus
      ['task-filter-menu','task-sort-menu'].forEach(mid => {
        if (mid !== id) hideMenu(mid);
      });
      el.classList.toggle('hidden');
    }
    function hideMenu(id) {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    }

    // Quick add Task from toolbar
    function addTaskQuick() {
      const input = document.getElementById('task-quick-input');
      const title = (input?.value || '').trim();
      if (!title) return;
      const limit = planLimits[appData.currentPlan].tasks;
      if (appData.tasks.length >= limit) {
        showAlert('Limite atteinte ! Passez à un plan supérieur pour ajouter plus de tâches.');
        return;
      }
      appData.tasks.push({ id: Date.now(), title, completed: false, createdAt: Date.now() });
      input.value = '';
      saveData(); renderTasks(); renderDashboard();
    }

    // Init
    function init() {
      loadData();
      updatePlanDisplay();
      renderTasks();
      renderGoals();
      renderHabits();
      renderNotes();
      renderDashboard();
      renderCalendar();
      showTab('dashboard');

      // Toolbar listeners
      const quick = document.getElementById('task-quick-input');
      const quickBtn = document.getElementById('task-quick-btn');
      if (quick) {
        quick.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') addTaskQuick();
        });
      }
      if (quickBtn) quickBtn.addEventListener('click', addTaskQuick);

      const search = document.getElementById('task-search');
      if (search) search.addEventListener('input', debounce(onTaskSearchInput, 200));

      // Close menus on outside click
      document.addEventListener('click', (e) => {
        const filterBtn = document.getElementById('btn-filter');
        const sortBtn = document.getElementById('btn-sort');
        const filterMenu = document.getElementById('task-filter-menu');
        const sortMenu = document.getElementById('task-sort-menu');
        if (filterMenu && !filterMenu.contains(e.target) && filterBtn && !filterBtn.contains(e.target)) {
          hideMenu('task-filter-menu');
        }
        if (sortMenu && !sortMenu.contains(e.target) && sortBtn && !sortBtn.contains(e.target)) {
          hideMenu('task-sort-menu');
        }
      });

      // Auto-resize chat input
      const chatInput = document.getElementById('chat-input');
      if (chatInput) {
        chatInput.addEventListener('input', () => {
          chatInput.style.height = 'auto';
          chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
        });
      }

      setTimeout(() => lucide.createIcons(), 50);
    }

    // Start app
    init();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <i className="w-5 h-5 hidden dark:block" data-lucide="moon"></i>';
    btn.addEventListener('click', () =&gt; { window.toggleTheme(); });
    // Ajouter le bouton en première position dans le conteneur de droite
    rightDiv.prepend(btn);
    // Rafraîchir les icônes
    if (window.lucide) { lucide.createIcons(); }
  });
})();

" className="h-full"&gt;
  <meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Flowly Dashboard</title>



<style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .glass { background: rgba(255, 255, 255, 0.45); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.6); box-shadow: 0 8px 32px rgba(2,6,23,0.06); }
    .hidden { display: none; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: translateY(0);} }
    @keyframes slideUp { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
    @keyframes scaleIn { from { opacity: 0; transform: scale(0.95);} to { opacity: 1;} }
    .animate-fade-in { animation: fadeIn 0.4s ease-out; }
    .animate-scale-in { animation: scaleIn 0.25s ease-out; }
    .task-item, .goal-item, .habit-item, .note-item { animation: slideUp 0.4s ease-out; }
    .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(2,6,23,0.12); }
    .bg-blob { filter: blur(60px); opacity: 0.35; pointer-events: none; }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist" rel="stylesheet"/><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-roboto" rel="stylesheet"/><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-montserrat" rel="stylesheet"/><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-poppins" rel="stylesheet"/><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-instrument-serif" rel="stylesheet"/><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap" id="all-fonts-link-font-merriweather" rel="stylesheet"/><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-bricolage" rel="stylesheet"/><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-jakarta" rel="stylesheet"/><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-space-grotesk" rel="stylesheet"/><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-work-sans" rel="stylesheet"/><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap" id="all-fonts-link-font-pt-serif" rel="stylesheet"/><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist-mono" rel="stylesheet"/><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" id="all-fonts-link-font-space-mono" rel="stylesheet"/><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-quicksand" rel="stylesheet"/><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-nunito" rel="stylesheet"/><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style>

<div className="absolute inset-0 overflow-hidden -z-10">
<div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blob bg-indigo-200"></div>
<div className="absolute top-40 -right-24 w-80 h-80 rounded-full bg-blob bg-fuchsia-200"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blob bg-cyan-200"></div>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-[70] flex items-center justify-center p-4" id="alert-modal">
<div className="glass rounded-2xl p-6 w-full max-w-sm animate-scale-in">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight">Information</h4>
</div>
<p className="text-sm text-gray-700" id="alert-message"></p>
<div className="mt-6 text-right">
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all" onclick="closeModal('alert-modal')">OK</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-[60] flex items-center justify-center p-4" id="form-modal">
<div className="glass rounded-2xl p-6 w-full max-w-md animate-scale-in">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight" id="form-modal-title">Titre</h3>
</div>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-all" onclick="closeModal('form-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<p className="text-sm text-gray-600 mb-4 hidden" id="form-modal-desc"></p>
<form className="space-y-4" id="form-modal-form" onsubmit="return false;"></form>
<p className="text-sm text-red-600 mt-2 hidden" id="form-modal-error"></p>
<div className="mt-6 flex items-center justify-end gap-3">
<button className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-all" id="form-modal-cancel" onclick="closeModal('form-modal')">Annuler</button>
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all" id="form-modal-submit">Valider</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" id="profile-modal">
<div className="glass rounded-2xl p-8 max-w-md w-full animate-scale-in">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Profil</h2>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-all" onclick="closeModal('profile-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="text-center mb-6">
<div className="relative inline-block">
<div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg" id="profile-pic-large">
<svg className="lucide lucide-user w-12 h-12 text-gray-600" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<p className="text-lg font-semibold">utilisateur@flowly.com</p>
<p className="text-sm text-gray-500" id="profile-plan">Plan Standard</p>
</div>
<div className="space-y-3">
<button className="w-full px-4 py-3 glass rounded-lg hover:bg-white transition-all text-sm font-medium" onclick="openPlanModal()">
<svg className="lucide lucide-crown w-4 h-4 inline mr-2" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg> Améliorer mon plan
        </button>
<button className="w-full px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all text-sm font-medium" onclick="logout()">
<svg className="lucide lucide-log-out w-4 h-4 inline mr-2" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Déconnexion
        </button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-[55] flex items-center justify-center p-4" id="plan-modal">
<div className="glass rounded-2xl p-6 w-full max-w-2xl animate-scale-in">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-semibold tracking-tight">Choisir un plan</h3>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-all" onclick="closeModal('plan-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="p-4 bg-white/60 rounded-xl border border-white">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<h4 className="font-semibold tracking-tight">Gratuit</h4>
</div>
<ul className="text-sm text-gray-600 space-y-1">
<li>• 25 tâches</li>
<li>• 3 objectifs</li>
<li>• 5 habitudes</li>
<li>• 10 notes</li>
<li>• 10 événements/mois</li>
</ul>
<button className="mt-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm" onclick="setPlan('gratuit')">Choisir</button>
</div>
<div className="p-4 bg-white rounded-xl border border-gray-200">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h4 className="font-semibold tracking-tight">Standard</h4>
</div>
<ul className="text-sm text-gray-600 space-y-1">
<li>• Illimité (tâches, objectifs, habitudes)</li>
<li>• 100 notes</li>
<li>• 100 événements/mois</li>
</ul>
<button className="mt-3 w-full px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm" onclick="setPlan('standard')">Activer</button>
</div>
<div className="p-4 bg-white/60 rounded-xl border border-white">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-crown w-4 h-4" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<h4 className="font-semibold tracking-tight">Ultra</h4>
</div>
<ul className="text-sm text-gray-600 space-y-1">
<li>• Tout illimité</li>
<li>• Rapports avancés</li>
<li>• Priorités &amp; IA+</li>
</ul>
<button className="mt-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm" onclick="setPlan('ultra')">Choisir</button>
</div>
</div>
</div>
</div>

<div className="flex min-h-screen">

<aside className="fixed left-0 top-0 bottom-0 w-16 md:w-20 glass flex flex-col items-center py-4 gap-3 z-40">
<div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex-1 flex flex-col gap-2 mt-2 gap-x-2 gap-y-2 items-center">
<button className="w-10 h-10 rounded-xl transition flex items-center justify-center bg-gray-900 text-white" id="side-dashboard" onclick="showTab('dashboard')" title="Dashboard">
<svg className="lucide lucide-grid-2x2 w-5 h-5" data-lucide="grid-2x2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M3 12h18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-white transition flex items-center justify-center" id="side-tasks" onclick="showTab('tasks')" title="Tâches">
<svg className="lucide lucide-check-square w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-white transition flex items-center justify-center" id="side-goals" onclick="showTab('goals')" title="Objectifs">
<svg className="lucide lucide-target w-5 h-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-white transition flex items-center justify-center" id="side-calendar" onclick="showTab('calendar')" title="Agenda">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-white transition flex items-center justify-center" id="side-habits" onclick="showTab('habits')" title="Habitudes">
<svg className="lucide lucide-repeat w-5 h-5" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-white transition flex items-center justify-center" id="side-notes" onclick="showTab('notes')" title="Notes">
<svg className="lucide lucide-sticky-note w-5 h-5" data-lucide="sticky-note" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path><path d="M15 3v5a1 1 0 0 0 1 1h5"></path></svg>
</button>
<button className="hover:bg-white transition flex w-10 h-10 rounded-xl items-center justify-center" id="side-reports" onclick="showTab('reports')" title="Rapports">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</button>

<div className="w-8 h-px bg-gray-300 my-2"></div>

<button className="hover:bg-white transition flex group w-10 h-10 rounded-xl relative items-center justify-center" id="side-affiliate" onclick="window.open('https://votre-url-affiliee.com/dashboard', '_blank');window.location.href='/affiliation'" role="button" title="Tableau de bord Affilié">
<svg className="lucide lucide-external-link w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6"></path>
<path className="" d="M10 14 21 3"></path>
<path className="" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>

<span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[8px] font-bold px-1 py-0.5 rounded-full">PRO</span>
</button>
</div>
<button className="w-10 h-10 rounded-xl hover:bg-white transition flex items-center justify-center" onclick="showProfile()" title="Profil">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</aside>

<div className="flex-1 pl-16 md:pl-20">

<div className="glass px-6 py-4 mb-6 animate-fade-in">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="">
<h1 className="text-lg font-semibold tracking-tight" id="topbar-title">Dashboard</h1>
<p className="text-xs text-gray-500" id="current-plan-badge">Plan Standard</p>
</div>
<div className="flex items-center gap-3">
<button className="w-5 h-5 dark:hidden" onclick="showProfi
&lt;!-- Bouton thème sombre/claire --&gt;
&lt;script&gt;
(function() {
  const style = document.createElement('style');
  style.innerHTML = `
    .dark body { background-color: #000 !important; color: #fff !important; }
    .dark .glass { background: rgba(0,0,0,0.45); border-color: rgba(255,255,255,0.2); box-shadow: 0 8px 32px rgba(255,255,255,0.06); }
    .dark .bg-gray-50, .dark .bg-gradient-to-br { background-color: #000 !important; }
    .dark .text-gray-500, .dark .text-gray-600 { color: #ccc !important; }
    .dark .text-gray-900 { color: #fff !important; }
    .dark .bg-gray-200 { background-color: #333 !important; }
    .dark .border-gray-200 { border-color: #444 !important; }
    .dark .bg-white { background-color: #111 !important; }
    .dark .border-white { border-color: rgba(255,255,255,0.2) !important; }
  `;
  document.head.appendChild(style);
  window.addEventListener('DOMContentLoaded', () =&gt; {
    const topTitle = document.getElementById('topbar-title');
    if (!topTitle) return;
    const parent = topTitle.parentElement?.parentElement;
    if (!parent) return;
    const rightDiv = parent.querySelector('div.flex.items-center.gap-3');
    if (!rightDiv) return;
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.className = 'w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition';
    btn.innerHTML = '&lt;i data-lucide=" sun"=""><i className="w-5 h-5 hidden dark:block" data-lucide="moon"></i>';
    btn.addEventListener('click', () =&gt; { window.toggleTheme(); });
    rightDiv.prepend(btn);
    if (window.lucide) { lucide.createIcons(); }
  });
})();

le()" className="relative"&gt;
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-white hover:scale-110 transition-all" id="profile-pic">
<svg className="lucide lucide-user w-5 h-5 text-gray-600" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 pb-12">

<div className="animate-fade-in" id="section-dashboard">
<div className="grid md:grid-cols-3 gap-6 mb-8">
<div className="glass rounded-2xl p-6">
<div className="flex items-center justify-between mb-2">
<h2 className="text-2xl font-semibold tracking-tight">Progression</h2>
<span className="text-sm text-gray-500">Cette semaine</span>
</div>
<div className="mt-4">
<div className="flex items-center gap-4">
<div className="w-20 h-20 rounded-full border-8 border-gray-200 relative flex items-center justify-center">
<span className="text-lg font-semibold" id="progress-percent">0%</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600">Terminées</span>
<span className="text-gray-900 font-medium" id="progress-count">0</span>
</div>
<div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-gray-900 rounded-full" id="progress-bar" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="glass rounded-2xl p-6">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Score de productivité</h3>
<p className="text-sm text-gray-600 mb-4">Tendance basée sur vos tâches et habitudes</p>
<div className="h-28 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-white"></div>
<div className="mt-4 text-sm text-gray-600">
<span className="" id="counts-summary">0 tâches • 0 objectifs • 0 habitudes</span>
</div>
</div>
<div className="glass rounded-2xl p-6">
<h3 className="text-2xl font-semibold tracking-tight mb-4">Notifications</h3>
<div className="text-sm text-gray-500" id="notifications">Aucune notification</div>
</div>
</div>

<div className="glass rounded-2xl p-6">
<h3 className="text-xl font-semibold tracking-tight mb-4">Actions rapides</h3>
<div className="grid md:grid-cols-4 gap-3">
<button className="p-4 bg-white/50 rounded-xl hover:bg-white transition-all text-left" onclick="addTask(); showTab('tasks')">
<svg className="lucide lucide-plus-circle w-6 h-6 mb-2 text-gray-900" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
<div className="font-medium text-sm">Nouvelle tâche</div>
</button>
<button className="p-4 bg-white/50 rounded-xl hover:bg-white transition-all text-left" onclick="addGoal(); showTab('goals')">
<svg className="lucide lucide-target w-6 h-6 mb-2 text-gray-900" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<div className="font-medium text-sm">Nouvel objectif</div>
</button>
<button className="p-4 bg-white/50 rounded-xl hover:bg-white transition-all text-left" onclick="addHabit(); showTab('habits')">
<svg className="lucide lucide-repeat w-6 h-6 mb-2 text-gray-900" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
<div className="font-medium text-sm">Nouvelle habitude</div>
</button>
<button className="p-4 bg-white/50 rounded-xl hover:bg-white transition-all text-left" onclick="addNote(); showTab('notes')">
<svg className="lucide lucide-file-text w-6 h-6 mb-2 text-gray-900" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<div className="font-medium text-sm">Nouvelle note</div>
</button>
</div>
</div>
</div>

<div className="hidden animate-fade-in" id="section-tasks">
<div className="glass rounded-2xl p-6 mb-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
<h2 className="text-2xl font-semibold tracking-tight">Mes Tâches</h2>
<div className="flex items-center gap-2">
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium hover:scale-105" onclick="addTask()">
<svg className="lucide lucide-plus w-4 h-4 inline mr-1" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Ajouter
                </button>
<span className="text-xs text-gray-600 px-2 py-1 rounded-lg bg-white/60" id="tasks-counter">0 actives • 0 terminées</span>
</div>
</div>

<div className="p-3 bg-white/60 rounded-xl border border-white mb-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

<div className="lg:col-span-4 flex items-center gap-2">
<div className="flex-1 relative">
<svg className="lucide lucide-plus w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<input className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" id="task-quick-input" placeholder="Ajouter une tâche et appuyer Entrée" type="text"/>
</div>
<button className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm" id="task-quick-btn">
                    Ajouter
                  </button>
</div>

<div className="lg:col-span-3 relative">
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" id="task-search" placeholder="Rechercher..." type="text"/>
</div>

<div className="lg:col-span-2 relative">
<button className="w-full px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm flex items-center justify-between" id="btn-filter" onclick="toggleMenu('task-filter-menu')">
<span className="flex items-center gap-2">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<span id="filter-label">Afficher: Tous</span>
</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-20 mt-2 w-full glass rounded-xl p-2" id="task-filter-menu">
<button className="w-full px-3 py-2 rounded-lg hover:bg-white text-left text-sm" onclick="setTaskFilter('all')">Tous</button>
<button className="w-full px-3 py-2 rounded-lg hover:bg-white text-left text-sm" onclick="setTaskFilter('active')">Actives</button>
<button className="w-full px-3 py-2 rounded-lg hover:bg-white text-left text-sm" onclick="setTaskFilter('completed')">Terminées</button>
</div>
</div>

<div className="lg:col-span-2 relative">
<button className="w-full px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm flex items-center justify-between" id="btn-sort" onclick="toggleMenu('task-sort-menu')">
<span className="flex items-center gap-2">
<svg className="lucide lucide-arrow-up-down w-4 h-4" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
<span id="sort-label">Trier: Récent</span>
</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-20 mt-2 w-full glass rounded-xl p-2" id="task-sort-menu">
<button className="w-full px-3 py-2 rounded-lg hover:bg-white text-left text-sm" onclick="setTaskSort('newest')">Plus récent</button>
<button className="w-full px-3 py-2 rounded-lg hover:bg-white text-left text-sm" onclick="setTaskSort('oldest')">Plus ancien</button>
<button className="w-full px-3 py-2 rounded-lg hover:bg-white text-left text-sm" onclick="setTaskSort('alpha-asc')">A → Z</button>
<button className="w-full px-3 py-2 rounded-lg hover:bg-white text-left text-sm" onclick="setTaskSort('alpha-desc')">Z → A</button>
</div>
</div>

<div className="lg:col-span-1 flex items-center gap-2">
<button className="w-full px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm" onclick="toggleAllTasks()" title="Tout cocher / décocher">
<svg className="lucide lucide-check-square w-4 h-4 inline mr-1" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>Tout
                  </button>
</div>
<div className="lg:col-span-12 flex items-center justify-between">
<div className="h-2 w-48 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-gray-900 rounded-full" id="tasks-progress-bar" style={{width: '0%'}}></div>
</div>
<button className="px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition text-sm" onclick="clearCompletedTasks()">
<svg className="lucide lucide-trash-2 w-4 h-4 inline mr-1" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Supprimer terminées
                  </button>
</div>
</div>
</div>
<div className="space-y-3" id="tasks-container"><p className="text-gray-500 text-center py-8">Aucune tâche ne correspond. Ajoutez ou modifiez vos filtres.</p></div>
</div>
</div>

<div className="hidden" id="section-goals">
<div className="glass rounded-2xl p-6 mb-6 animate-fade-in">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold tracking-tight">Mes Objectifs</h2>
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium hover:scale-105" onclick="addGoal()">
<svg className="lucide lucide-plus w-4 h-4 inline mr-1" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Ajouter
              </button>
</div>
<div className="space-y-4" id="goals-container"><p className="text-gray-500 text-center py-8">Aucun objectif. Définissez vos premiers objectifs !</p></div>
</div>
</div>

<div className="hidden" id="section-habits">
<div className="glass rounded-2xl p-6 mb-6 animate-fade-in">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold tracking-tight">Mes Habitudes</h2>
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium hover:scale-105" onclick="addHabit()">
<svg className="lucide lucide-plus w-4 h-4 inline mr-1" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Ajouter
              </button>
</div>
<div className="space-y-3" id="habits-container"><p className="text-gray-500 text-center py-8">Aucune habitude. Créez vos premières habitudes !</p></div>
</div>
</div>

<div className="hidden" id="section-notes">
<div className="glass rounded-2xl p-6 mb-6 animate-fade-in">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold tracking-tight">Mes Notes</h2>
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium hover:scale-105" onclick="addNote()">
<svg className="lucide lucide-plus w-4 h-4 inline mr-1" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Ajouter
              </button>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" id="notes-container"><div className="col-span-full"><p className="text-gray-500 text-center py-8">Aucune note. Commencez à noter vos idées !</p></div></div>
</div>
</div>

<div className="hidden" id="section-calendar">
<div className="glass rounded-2xl p-6 mb-6 animate-fade-in">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold tracking-tight">Mon Agenda</h2>
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium hover:scale-105" onclick="addEvent()">
<svg className="lucide lucide-plus w-4 h-4 inline mr-1" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Ajouter événement
              </button>
</div>
<div className="flex items-center justify-between mb-6" id="calendar-nav">
<button className="p-2 hover:bg-white rounded-lg transition-all" onclick="previousMonth()">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h3 className="text-lg font-semibold" id="calendar-month">Octobre 2025</h3>
<button className="p-2 hover:bg-white rounded-lg transition-all" onclick="nextMonth()">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-7 gap-2" id="calendar-grid"><div className="text-center text-xs font-medium text-gray-500 py-2">Dim</div><div className="text-center text-xs font-medium text-gray-500 py-2">Lun</div><div className="text-center text-xs font-medium text-gray-500 py-2">Mar</div><div className="text-center text-xs font-medium text-gray-500 py-2">Mer</div><div className="text-center text-xs font-medium text-gray-500 py-2">Jeu</div><div className="text-center text-xs font-medium text-gray-500 py-2">Ven</div><div className="text-center text-xs font-medium text-gray-500 py-2">Sam</div><div></div><div></div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-01')">
<div className="text-sm font-medium mb-1 text-gray-700">1</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-02')">
<div className="text-sm font-medium mb-1 text-gray-700">2</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-03')">
<div className="text-sm font-medium mb-1 text-gray-700">3</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-04')">
<div className="text-sm font-medium mb-1 text-gray-700">4</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-05')">
<div className="text-sm font-medium mb-1 text-gray-700">5</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-06')">
<div className="text-sm font-medium mb-1 text-gray-700">6</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-07')">
<div className="text-sm font-medium mb-1 text-gray-700">7</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-08')">
<div className="text-sm font-medium mb-1 text-gray-700">8</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-09')">
<div className="text-sm font-medium mb-1 text-gray-700">9</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-10')">
<div className="text-sm font-medium mb-1 text-gray-700">10</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-11')">
<div className="text-sm font-medium mb-1 text-gray-700">11</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-12')">
<div className="text-sm font-medium mb-1 text-gray-700">12</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-13')">
<div className="text-sm font-medium mb-1 text-gray-700">13</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-14')">
<div className="text-sm font-medium mb-1 text-gray-700">14</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-15')">
<div className="text-sm font-medium mb-1 text-gray-700">15</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-16')">
<div className="text-sm font-medium mb-1 text-gray-700">16</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-17')">
<div className="text-sm font-medium mb-1 text-gray-700">17</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-18')">
<div className="text-sm font-medium mb-1 text-gray-700">18</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-19')">
<div className="text-sm font-medium mb-1 text-gray-700">19</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-20')">
<div className="text-sm font-medium mb-1 text-gray-700">20</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-21')">
<div className="text-sm font-medium mb-1 text-gray-700">21</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-22')">
<div className="text-sm font-medium mb-1 text-gray-700">22</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-23')">
<div className="text-sm font-medium mb-1 text-gray-700">23</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-24')">
<div className="text-sm font-medium mb-1 text-gray-700">24</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-25')">
<div className="text-sm font-medium mb-1 text-gray-700">25</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-26')">
<div className="text-sm font-medium mb-1 text-gray-700">26</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-27')">
<div className="text-sm font-medium mb-1 text-gray-700">27</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-28')">
<div className="text-sm font-medium mb-1 text-gray-700">28</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-29')">
<div className="text-sm font-medium mb-1 text-gray-700">29</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-30')">
<div className="text-sm font-medium mb-1 text-gray-700">30</div>
</div>
<div className="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all cursor-pointer" onclick="addEventOn('2025-10-31')">
<div className="text-sm font-medium mb-1 text-gray-700">31</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="section-reports">
<div className="glass rounded-2xl p-6 mb-6 animate-fade-in">
<div className="flex items-center justify-between mb-2">
<h2 className="text-2xl font-semibold tracking-tight">Rapports</h2>
<button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm" onclick="renderReports()">
<svg className="lucide lucide-refresh-ccw w-4 h-4 inline mr-1" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg> Actualiser
              </button>
</div>
<p className="text-sm text-gray-600 mb-4">Aperçu des tâches, objectifs et habitudes.</p>
<div className="grid lg:grid-cols-2 gap-6">
<div className="p-4 bg-white rounded-xl border border-gray-200">
<h3 className="font-semibold tracking-tight mb-2">Répartition des tâches</h3>
<div className="relative">
<div className="h-64">
<div className="h-full"><canvas id="chartTasks"></canvas></div>
</div>
</div>
</div>
<div className="p-4 bg-white rounded-xl border border-gray-200">
<h3 className="font-semibold tracking-tight mb-2">Achèvement hebdo</h3>
<div className="relative">
<div className="h-64">
<div className="h-full"><canvas id="chartWeekly"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gray-900 text-white shadow-xl flex items-center justify-center hover:bg-gray-800 transition z-40" id="chat-toggle" onclick="toggleChat()">
<svg className="lucide lucide-bot w-5 h-5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</button>
<div className="hidden fixed bottom-20 right-6 w-[22rem] max-w-[90vw] glass rounded-2xl p-4 z-40 animate-scale-in" id="chatbot-panel">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h4 className="font-semibold tracking-tight">Assistant IA</h4>
</div>
<button className="p-2 hover:bg-gray-100 rounded-lg transition" onclick="toggleChat()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="h-64 overflow-y-auto space-y-3 pr-1" id="chat-messages"></div>
<div className="mt-3 flex items-center gap-2">
<textarea className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm resize-none" id="chat-input" placeholder="Ex: créer tâche: Préparer la réunion (Entrée pour envoyer)" rows="1"></textarea>
<button className="px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition" onclick="sendChatMessage()">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>


    </>
  );
}
