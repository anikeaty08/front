import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide after DOM load
      document.addEventListener('DOMContentLoaded', function() {
        lucide.createIcons();
      });

      // Data storage
      let appData = {
          tasks: [],
          goals: [],
          habits: [],
          notes: [],
          calendarEvents: {},
          chatHistory: [],
          currentUser: null,
          profilePicture: null,
          currentPlan: 'gratuit',
          currentMonth: new Date().getMonth(),
          currentYear: new Date().getFullYear()
      };

      // Limits based on plan
      const planLimits = {
        gratuit: { tasks: 25, goals: 3, habits: 5, notes: 10, events: 10 },
        standard: { tasks: Infinity, goals: Infinity, habits: Infinity, notes: 100, events: 100 },
        ultra: { tasks: Infinity, goals: Infinity, habits: Infinity, notes: Infinity, events: Infinity }
      };

      // Generic Alert Modal
      function showAlert(message) {
        const modal = document.getElementById('alert-modal');
        const msg = document.getElementById('alert-message');
        msg.textContent = message;
        modal.classList.remove('hidden');
        setTimeout(() => lucide.createIcons(), 50);
      }

      // Generic Form Modal
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

        // Build fields
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

        // Hook submit
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

        // Submit on Enter when single text field
        form.onsubmit = (e) => { e.preventDefault(); submitBtn.click(); };

        modal.classList.remove('hidden');
        setTimeout(() => {
          lucide.createIcons();
          const first = form.querySelector('input, textarea, select');
          if (first) first.focus();
        }, 30);
      }

      // Helpers
      function formatDateISO(date) {
        const d = new Date(date || new Date());
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2,'0');
        const day = String(d.getDate()).padStart(2,'0');
        return `${y}-${m}-${day}`;
      }

      // Load data from localStorage
      function loadData() {
          const saved = localStorage.getItem('flowly-data');
          if (saved) {
              appData = Object.assign(appData, JSON.parse(saved));
          }
      }

      // Save data to localStorage
      function saveData() {
          localStorage.setItem('flowly-data', JSON.stringify(appData));
      }

      // Navigation functions
      function showHome() {
          document.getElementById('home-page').classList.remove('hidden');
          document.getElementById('pricing-page').classList.add('hidden');
          document.getElementById('app-dashboard').classList.add('hidden');
      }

      function showPricing() {
          document.getElementById('home-page').classList.add('hidden');
          document.getElementById('pricing-page').classList.remove('hidden');
          document.getElementById('app-dashboard').classList.add('hidden');
          setTimeout(() => lucide.createIcons(), 50);
      }

      function showSignIn() {
          document.getElementById('signin-modal').classList.remove('hidden');
          setTimeout(() => lucide.createIcons(), 50);
      }

      function showSignUp() {
          document.getElementById('signup-modal').classList.remove('hidden');
          setTimeout(() => lucide.createIcons(), 50);
      }

      function closeModal(modalId) {
          document.getElementById(modalId).classList.add('hidden');
      }

      function selectPlan(plan) {
          appData.currentPlan = plan;
          saveData();
          showSignUp();
      }

      // Auth handlers
      function handleSignIn(e) {
          e.preventDefault();
          appData.currentUser = { email: 'utilisateur@flowly.com' };
          saveData();
          closeModal('signin-modal');
          showAppDashboard();
      }

      function handleSignUp(e) {
          e.preventDefault();
          appData.currentUser = { email: 'utilisateur@flowly.com' };
          saveData();
          closeModal('signup-modal');
          showAppDashboard();
      }

      function showAppDashboard() {
          document.getElementById('home-page').classList.add('hidden');
          document.getElementById('pricing-page').classList.add('hidden');
          document.getElementById('app-dashboard').classList.remove('hidden');
          updatePlanBadge();
          renderTasks();
          renderGoals();
          renderHabits();
          renderNotes();
          renderCalendar();
          renderDashboard();
          if (appData.profilePicture) {
            document.getElementById('profile-pic').innerHTML = `<img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="w-full h-full object-cover">`;
          }
          // Default active tab
          showTab('dashboard');
          setTimeout(() => lucide.createIcons(), 50);
      }

      function updatePlanBadge() {
        const planNames = { gratuit: 'Plan Gratuit', standard: 'Plan Standard', ultra: 'Plan Ultra' };
        const planName = planNames[appData.currentPlan] || 'Plan Gratuit';
        const badge = document.getElementById('current-plan-badge');
        const profilePlan = document.getElementById('profile-plan');
        if (badge) badge.textContent = planName;
        if (profilePlan) profilePlan.textContent = planName;
      }

      function showProfile() {
        document.getElementById('profile-modal').classList.remove('hidden');
        if (appData.profilePicture) {
          document.getElementById('profile-pic-large').innerHTML = `<img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="w-full h-full object-cover">`;
        }
        setTimeout(() => lucide.createIcons(), 50);
      }

      function handleProfilePicUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            appData.profilePicture = e.target.result;
            document.getElementById('profile-pic').innerHTML = `<img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" class="w-full h-full object-cover">`;
            document.getElementById('profile-pic-large').innerHTML = `<img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" class="w-full h-full object-cover">`;
            saveData();
          };
          reader.readAsDataURL(file);
        }
      }

      function logout() {
        appData.currentUser = null;
        saveData();
        closeModal('profile-modal');
        showHome();
      }

      // Sidebar Tab Navigation
      function showTab(tab) {
        const tabs = ['dashboard', 'tasks', 'goals', 'habits', 'notes', 'calendar'];
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
          calendar: 'Agenda'
        };
        const topTitle = document.getElementById('topbar-title');
        if (topTitle) topTitle.textContent = titleMap[tab] || 'Flowly';

        if (tab === 'calendar') renderCalendar();
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
            appData.tasks.push({ id: Date.now(), title, completed: false });
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

      function renderTasks() {
        const container = document.getElementById('tasks-container');
        if (!container) return;
        if (appData.tasks.length === 0) {
          container.innerHTML = '<p class="text-gray-500 text-center py-8">Aucune tâche. Cliquez sur "Ajouter" pour commencer !</p>';
        } else {
          container.innerHTML = appData.tasks.map(task => `
            <div class="task-item flex items-center gap-3 p-4 bg-white/50 rounded-xl hover:bg-white transition-all">
              <button onclick="toggleTask(${task.id})" class="w-5 h-5 rounded border-2 ${task.completed ? 'bg-gray-900 border-gray-900' : 'border-gray-300'} flex items-center justify-center transition-all hover:scale-110">
                ${task.completed ? '<i data-lucide="check" class="w-3 h-3 text-white"></i>' : ''}
              </button>
              <span class="${task.completed ? 'line-through text-gray-400' : ''} flex-1">${task.title}</span>
              <button onclick="deleteTask(${task.id})" class="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-all">
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
            { name: 'title', label: 'Titre de l’objectif', type: 'text', placeholder: 'Ex: Courir un semi-marathon', required: true },
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
            { name: 'title', label: 'Titre de l’habitude', type: 'text', placeholder: 'Ex: Lire 20 minutes', required: true }
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
            { name: 'title', label: 'Titre de l’événement', type: 'text', placeholder: 'Ex: Réunion produit', required: true }
          ],
          initialValues: { date: formatDateISO(new Date(appData.currentYear, appData.currentMonth, 1)) },
          submitText: 'Ajouter',
          onSubmit: (values, { setError }) => {
            const date = values.date;
            const title = (values.title || '').trim();
            if (!date) { setError('La date est requise.'); return false; }
            if (!title) { setError('Le titre est requis.'); return false; }

            // Check monthly limit
            const [y, m] = date.split('-');
            const ym = `${y}-${m}`;
            const monthEvents = Object.keys(appData.calendarEvents)
              .filter(d => d.startsWith(ym))
              .reduce((acc, key) => acc + appData.calendarEvents[key].length, 0);
            const limit = planLimits[appData.currentPlan].events;
            if (monthEvents >= limit) {
              showAlert(`Limite mensuelle atteinte ! Passez à un plan supérieur.`);
              return true; // close modal after alert
            }

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
            <div class="min-h-20 p-2 bg-white/50 rounded-lg hover:bg-white transition-all ${today ? 'ring-2 ring-gray-900' : ''}">
              <div class="text-sm font-medium mb-1 ${today ? 'text-gray-900' : 'text-gray-700'}">${day}</div>
              ${events.map(e => `<div class="text-xs bg-gray-900 text-white rounded px-1 py-0.5 mb-1 truncate">${e.title}</div>`).join('')}
            </div>
          `;
        }
        
        gridEl.innerHTML = html;
        setTimeout(() => lucide.createIcons(), 50);
      }

      // Dashboard summary
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

      // Chatbot
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
            <div class="${msg.role === 'user' ? 'bg-gray-900 text-white' : 'bg-white/60 text-gray-900'} px-3 py-2 rounded-xl max-w-[80%] text-sm">${msg.text}</div>
          </div>
        `).join('');
        wrap.scrollTop = wrap.scrollHeight;
        setTimeout(() => lucide.createIcons(), 50);
      }

      function sendChatMessage() {
        const input = document.getElementById('chat-input');
        const text = input.value.trim();
        if (!text) return;
        appData.chatHistory.push({ role: 'user', text });
        input.value = '';
        renderChat();
        saveData();

        // Simple assistant reply
        setTimeout(() => {
          let reply = "Je suis là pour vous aider à organiser vos tâches, objectifs, habitudes et votre agenda.";
          const lower = text.toLowerCase();
          if (lower.includes('tache') || lower.includes('tâche')) {
            reply = "Souhaitez-vous que je crée une nouvelle tâche ? Dites « créer tâche: titre de la tâche ».";
          } else if (lower.startsWith('créer tâche:') || lower.startsWith('creer tache:')) {
            const title = text.split(':')[1]?.trim();
            if (title) {
              const limit = planLimits[appData.currentPlan].tasks;
              if (appData.tasks.length < limit) {
                appData.tasks.push({ id: Date.now(), title, completed: false });
                saveData();
                renderTasks();
                renderDashboard();
                reply = `C'est noté. Tâche « ${title} » ajoutée.`;
              } else {
                reply = "La limite de tâches est atteinte sur votre plan actuel.";
              }
            } else {
              reply = "Indiquez un titre après « créer tâche: » pour que je l’ajoute.";
            }
          }
          appData.chatHistory.push({ role: 'assistant', text: reply });
          saveData();
          renderChat();
        }, 400);
      }

      // Initialize
      loadData();
      if (appData.currentUser) {
          showAppDashboard();
      } else {
          showHome();
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 overflow-hidden -z-10">
<div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blob bg-indigo-200"></div>
<div className="absolute top-40 -right-24 w-80 h-80 rounded-full bg-blob bg-fuchsia-200"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blob bg-cyan-200"></div>
</div>

<div className="min-h-screen" id="home-page">

<header className="px-6 py-4 glass animate-fade-in">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl bg-gray-900 flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div><span className="bg-center text-xl font-semibold tracking-tight">Flowly</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#features">Fonctionnalités</a>
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#" onclick="showPricing()">Tarifs</a>
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-all" onclick="showSignIn()">Connexion</button>
<button className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105" onclick="showSignUp()">Créer un compte</button>
</div>
</div>
</header>

<section className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="text-left">
<h1 className="md:text-6xl animate-fade-in text-5xl font-semibold tracking-tight">Organisez votre vie avec simplicité</h1>
<p className="mt-6 text-xl text-gray-600 max-w-xl animate-fade-in" style={{animationDelay: '0.1s'}}>
              Tâches, objectifs, habitudes, notes et agenda — dans une interface claire et transparente.
            </p>
<div className="mt-10 flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
<button className="hover:bg-gray-800 transition-all hover:scale-105 text-white bg-gray-900 rounded-lg pt-3 pr-6 pb-3 pl-6" onclick="showSignUp()">Commencer gratuitement</button>
<button className="glass hover:bg-white transition-all hover:scale-105 rounded-lg pt-3 pr-6 pb-3 pl-6" onclick="showPricing()">Voir les tarifs</button>
</div>
</div>
<div className="glass rounded-3xl overflow-hidden">
<img alt="Dashboard preview" className="w-full h-96 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e3943eb8-a8b7-4a5e-a6b6-8b6ffef46386_1600w.png"/>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6" id="features">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Tout ce dont vous avez besoin</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass rounded-2xl p-6 hover:scale-105 transition-all">
<div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4">
<svg className="lucide lucide-check-square w-6 h-6" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Gestion des tâches</h3>
<p className="text-gray-600">Créez, organisez et suivez vos tâches avec un système simple et efficace.</p>
</div>
<div className="glass rounded-2xl p-6 hover:scale-105 transition-all">
<div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4">
<svg className="lucide lucide-target w-6 h-6" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Suivi d'objectifs</h3>
<p className="text-gray-600">Définissez vos objectifs et visualisez votre progression en temps réel.</p>
</div>
<div className="glass rounded-2xl p-6 hover:scale-105 transition-all">
<div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4">
<svg className="lucide lucide-calendar-days w-6 h-6" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Agenda et notes</h3>
<p className="text-gray-600">Ajoutez des événements à votre calendrier et consignez vos idées en notes.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20" id="faq">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Questions fréquentes</h2>
<div className="space-y-4">
<details className="glass rounded-xl p-6 group hover:bg-white transition-all">
<summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
              Flowly est-il vraiment gratuit ?
              <svg className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 animate-fade-in">
              Oui ! Le plan gratuit limite certaines actions (tâches, objectifs, notes, événements). Les plans supérieurs débloquent tout.
            </p>
</details>
<details className="glass group hover:bg-white transition-all rounded-xl pt-6 pr-6 pb-6 pl-6">
<summary className="cursor-pointer list-none flex font-semibold items-center justify-between">En quoi consiste Flowly ?<svg className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></summary>
<p className="animate-fade-in text-gray-600 mt-4">Flowly est une application d’organisation et de productivité qui t’aide à planifier tes objectifs, gérer tes tâches, suivre ton temps et rester focus grâce à un assistant IA intégré.</p>
</details><details className="glass group hover:bg-white transition-all rounded-xl pt-6 pr-6 pb-6 pl-6">
<summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
              Puis-je utiliser Flowly sur mobile ?
              <svg className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 animate-fade-in">
              Absolument ! Flowly est entièrement responsive et fonctionne parfaitement sur tous vos appareils.
            </p>
</details>
<details className="glass rounded-xl p-6 group hover:bg-white transition-all">
<summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
              Comment fonctionne l'assistant IA ?
              <svg className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 animate-fade-in">
              Disponible avec les plans Standard et Ultra. Il vous aide à prioriser, planifier et rester motivé.
            </p>
</details>
</div>
</section>

<footer className="border-t border-gray-200 mt-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg bg-gray-900 flex items-center justify-center">
<svg className="lucide lucide-zap w-4 h-4 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="font-semibold">Flowly</span>
</div>
<p className="text-sm text-gray-600">© 2025 Flowly. Tous droits réservés.</p>
</div>
</div>
</footer>
</div>

<div className="hidden min-h-screen" id="pricing-page">
<header className="px-6 py-4 glass">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<button className="flex items-center gap-2 hover:opacity-80 transition-opacity" onclick="showHome()">
<div className="w-8 h-8 rounded-xl bg-gray-900 flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight">Flowly</span>
</button>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-all" onclick="showSignIn()">Connexion</button>
<button className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105" onclick="showSignUp()">Créer un compte</button>
</div>
</div>
</header>
<section className="max-w-6xl mx-auto px-6 py-20">
<div className="text-center mb-16">
<h1 className="text-5xl font-semibold tracking-tight mb-4">Choisissez votre plan</h1>
<p className="text-xl text-gray-600">Commencez gratuitement, évoluez quand vous êtes prêt</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass rounded-2xl p-8 hover:scale-105 transition-all">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Gratuit</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight">0€</span>
<span className="text-gray-500">/mois</span>
</div>
<button className="w-full mt-6 px-4 py-3 rounded-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all font-medium" onclick="selectPlan('gratuit')">Commencer gratuitement</button>
<ul className="mt-8 space-y-3 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>25 tâches</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>3 objectifs</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>5 habitudes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>10 notes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>10 événements/mois</li>
<li className="flex items-center gap-2 text-gray-400"><svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>Assistant IA</li>
</ul>
</div>

<div className="glass rounded-2xl p-8 border-2 border-gray-900 relative hover:scale-105 transition-all">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">Populaire</div>
<h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Standard</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight">12€</span>
<span className="text-gray-500">/mois</span>
</div>
<button className="w-full mt-6 px-4 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all font-medium" onclick="selectPlan('standard')">Choisir Standard</button>
<ul className="mt-8 space-y-3 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>Tâches illimitées</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>Objectifs illimités</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>Habitudes illimitées</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-sticky-note w-4 h-4" data-lucide="sticky-note" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path><path d="M15 3v5a1 1 0 0 0 1 1h5"></path></svg>100 notes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-calendar-plus w-4 h-4" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>100 événements/mois</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>Assistant IA</li>
</ul>
</div>

<div className="glass rounded-2xl p-8 hover:scale-105 transition-all">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Ultra</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight">29€</span>
<span className="text-gray-500">/mois</span>
</div>
<button className="w-full mt-6 px-4 py-3 rounded-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all font-medium" onclick="selectPlan('ultra')">Choisir Ultra</button>
<ul className="mt-8 space-y-3 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>Tout illimité</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>IA avancée et coaching</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-plug w-4 h-4" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>Intégrations</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-life-buoy w-4 h-4" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>Support prioritaire</li>
</ul>
</div>
</div>
</section>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" id="signin-modal">
<div className="glass rounded-2xl p-8 max-w-md w-full animate-scale-in">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Connexion</h2>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-all" onclick="closeModal('signin-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form onsubmit="handleSignIn(event)">
<div className="space-y-4">
<div>
<label className="block text-sm font-medium mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="vous@exemple.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Mot de passe</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 font-medium" type="submit">Se connecter</button>
</div>
</form>
<p className="mt-6 text-center text-sm text-gray-600">
          Pas encore de compte ?
          <button className="text-gray-900 font-medium hover:underline" onclick="closeModal('signin-modal'); showSignUp();">Créer un compte</button>
</p>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" id="signup-modal">
<div className="glass rounded-2xl p-8 max-w-md w-full animate-scale-in">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Créer un compte</h2>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-all" onclick="closeModal('signup-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form onsubmit="handleSignUp(event)">
<div className="space-y-4">
<div>
<label className="block text-sm font-medium mb-2">Nom complet</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="Jean Dupont" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="vous@exemple.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Mot de passe</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" minlength="8" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 font-medium" type="submit">Créer mon compte</button>
</div>
</form>
<p className="mt-6 text-center text-sm text-gray-600">
          Déjà un compte ?
          <button className="text-gray-900 font-medium hover:underline" onclick="closeModal('signup-modal'); showSignIn();">Se connecter</button>
</p>
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
<label className="absolute bottom-4 right-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all">
<svg className="lucide lucide-camera w-4 h-4 text-white" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<input accept="image/*" className="hidden" id="profile-pic-upload" onchange="handleProfilePicUpload(event)" type="file"/>
</label>
</div>
<p className="text-lg font-semibold">utilisateur@flowly.com</p>
<p className="text-sm text-gray-500" id="profile-plan">Plan Gratuit</p>
</div>
<div className="space-y-3">
<button className="w-full px-4 py-3 glass rounded-lg hover:bg-white transition-all text-sm font-medium" onclick="showPricing(); closeModal('profile-modal');">
<svg className="lucide lucide-crown w-4 h-4 inline mr-2" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg> Améliorer mon plan
          </button>
<button className="w-full px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all text-sm font-medium" onclick="logout()">
<svg className="lucide lucide-log-out w-4 h-4 inline mr-2" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Déconnexion
          </button>
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

<div className="hidden min-h-screen" id="app-dashboard">

<div className="flex min-h-screen">

<aside className="fixed left-0 top-0 bottom-0 w-16 md:w-20 glass flex flex-col items-center py-4 gap-3">
<button className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:scale-105 transition" onclick="showHome()">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</button>
<div className="mt-2 flex-1 flex flex-col items-center gap-2">
<button className="w-10 h-10 rounded-xl hover:bg-white transition flex items-center justify-center" id="side-dashboard" onclick="showTab('dashboard')" title="Dashboard">
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
<button className="w-10 h-10 rounded-xl hover:bg-white transition flex items-center justify-center" id="side-reports" onclick="showAlert('La section Rapports arrive bientôt.')" title="Rapports">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</button>
</div>
<button className="w-10 h-10 rounded-xl hover:bg-white transition flex items-center justify-center" onclick="showProfile()" title="Profil">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</aside>

<div className="flex-1 pl-16 md:pl-20">

<div className="glass px-6 py-4 mb-6 animate-fade-in">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div>
<h1 className="text-lg font-semibold tracking-tight" id="topbar-title">Dashboard</h1>
<p className="text-xs text-gray-500" id="current-plan-badge">Plan Gratuit</p>
</div>
<div className="flex items-center gap-3">
<button className="relative" onclick="showProfile()">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-white hover:scale-110 transition-all" id="profile-pic">
<svg className="lucide lucide-user w-5 h-5 text-gray-600" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 pb-12">

<div className="animate-fade-in" id="section-dashboard">
<div className="grid md:grid-cols-3 gap-6">
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
<span id="counts-summary">0 tâches • 0 objectifs • 0 habitudes</span>
</div>
</div>
<div className="glass rounded-2xl p-6">
<h3 className="text-2xl font-semibold tracking-tight mb-4">Notifications</h3>
<div className="text-sm text-gray-500">Aucune notification</div>
</div>
</div>
</div>

<div className="hidden animate-fade-in" id="section-tasks">
<div className="glass rounded-2xl p-6 mb-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold tracking-tight">Mes Tâches</h2>
<button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium hover:scale-105" onclick="addTask()">
<svg className="lucide lucide-plus w-4 h-4 inline mr-1" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Ajouter
                  </button>
</div>
<div className="space-y-3" id="tasks-container"></div>
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
<div className="space-y-4" id="goals-container"></div>
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
<div className="space-y-3" id="habits-container"></div>
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
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" id="notes-container"></div>
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
<h3 className="text-lg font-semibold" id="calendar-month"></h3>
<button className="p-2 hover:bg-white rounded-lg transition-all" onclick="nextMonth()">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-7 gap-2" id="calendar-grid"></div>
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
<textarea className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm resize-none" id="chat-input" placeholder="Demandez-moi d'organiser votre journée..." rows="1"></textarea>
<button className="px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition" onclick="sendChatMessage()">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>


    </>
  );
}
