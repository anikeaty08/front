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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const DEFAULT_TASKS = [
      {
        id: crypto.randomUUID(),
        name: "Pushups",
        category: "Exercise",
        subcategory: "Pushups",
        targetCount: 50,
        completedCount: 20,
        scheduledDate: new Date().toISOString().slice(0, 10),
        scheduledTime: "",
        reminderEnabled: false,
        reminderTime: "",
        recurring: false,
        recurrencePattern: "",
        customWeekdays: [],
        notes: "",
        createdAt: new Date().toISOString(),
        restored: false
      },
      {
        id: crypto.randomUUID(),
        name: "Read Chapter 5",
        category: "Study",
        subcategory: "Reading",
        targetCount: 1,
        completedCount: 0,
        scheduledDate: new Date().toISOString().slice(0, 10),
        scheduledTime: "",
        reminderEnabled: true,
        reminderTime: "18:00",
        recurring: false,
        recurrencePattern: "",
        customWeekdays: [],
        notes: "",
        createdAt: new Date().toISOString(),
        restored: false
      },
      {
        id: crypto.randomUUID(),
        name: "Clean Room",
        category: "Chores",
        subcategory: "Cleaning",
        targetCount: 1,
        completedCount: 0,
        scheduledDate: new Date().toISOString().slice(0, 10),
        scheduledTime: "",
        reminderEnabled: false,
        reminderTime: "",
        recurring: false,
        recurrencePattern: "",
        customWeekdays: [],
        notes: "",
        createdAt: new Date().toISOString(),
        restored: false
      }
    ];

    const STORAGE_KEYS = {
      tasks: "tasks",
      trashBin: "trashBin",
      categoryLearning: "categoryLearning",
      appSettings: "appSettings"
    };

    const defaultLearning = {
      exercise: ["pushup", "pull-up", "pullup", "crunch", "squat", "lunge", "run", "jog", "walk", "gym", "workout", "exercise", "yoga", "stretch"],
      study: ["read", "write", "study", "learn", "homework", "assignment", "exam", "test", "chapter", "book", "practice"],
      work: ["meeting", "email", "report", "project", "client", "presentation", "deadline", "office"],
      chores: ["clean", "tidy", "laundry", "dishes", "vacuum", "sweep", "mop", "organize", "declutter"],
      personal: ["meditate", "journal", "call friend", "hobby", "relax", "self-care"]
    };

    const defaultSettings = {
      trashRetentionDays: 30,
      maxTrashSize: -1,
      autoCategorizeNewTasks: true,
      learnFromChanges: true,
      showCompletedTasks: true
    };

    let tasks = JSON.parse(localStorage.getItem(STORAGE_KEYS.tasks) || "null") || DEFAULT_TASKS;
    let trashBin = JSON.parse(localStorage.getItem(STORAGE_KEYS.trashBin) || "null") || [];
    let categoryLearning = JSON.parse(localStorage.getItem(STORAGE_KEYS.categoryLearning) || "null") || defaultLearning;
    let appSettings = JSON.parse(localStorage.getItem(STORAGE_KEYS.appSettings) || "null") || defaultSettings;

    if (typeof appSettings.showCompletedTasks === "undefined") appSettings.showCompletedTasks = true;

    let currentSort = "category";
    let bulkMode = false;
    let selectedTaskIds = new Set();
    let expandedCategories = new Set(["Exercise", "Study", "Work", "Chores", "Personal"]);
    let selectedSubcategoryFilter = null;
    let selectedTrashSubcategoryFilter = null;
    let currentView = "home";
    let addReminderEnabled = false;

    const categoryOrder = ["Exercise", "Study", "Work", "Chores", "Personal"];
    const categoryColors = {
      Exercise: "bg-cyan-400/10 text-cyan-300 border-cyan-300/20",
      Study: "bg-violet-400/10 text-violet-300 border-violet-300/20",
      Work: "bg-emerald-400/10 text-emerald-300 border-emerald-300/20",
      Chores: "bg-amber-400/10 text-amber-300 border-amber-300/20",
      Personal: "bg-pink-400/10 text-pink-300 border-pink-300/20"
    };

    function saveAll() {
      localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(tasks));
      localStorage.setItem(STORAGE_KEYS.trashBin, JSON.stringify(trashBin));
      localStorage.setItem(STORAGE_KEYS.categoryLearning, JSON.stringify(categoryLearning));
      localStorage.setItem(STORAGE_KEYS.appSettings, JSON.stringify(appSettings));
    }

    function daysFromNow(days) {
      const d = new Date();
      d.setDate(d.getDate() + days);
      return d.toISOString();
    }

    function daysLeft(expiresAt) {
      if (!expiresAt) return null;
      const now = new Date();
      const end = new Date(expiresAt);
      const diff = end.getTime() - now.getTime();
      return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }

    function formatDate(dateStr) {
      if (!dateStr) return "—";
      const d = new Date(dateStr);
      return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
    }

    function cleanupTrashBin() {
      if (appSettings.trashRetentionDays !== -1) {
        trashBin = trashBin.filter(item => !item.expiresAt || new Date(item.expiresAt).getTime() > Date.now());
      }

      if (appSettings.maxTrashSize !== -1 && trashBin.length > appSettings.maxTrashSize) {
        trashBin = trashBin
          .sort((a, b) => new Date(b.deletedAt) - new Date(a.deletedAt))
          .slice(0, appSettings.maxTrashSize);
      }

      saveAll();
    }

    function detectCategory(taskName) {
      const text = taskName.toLowerCase();

      const buckets = [
        { key: "Exercise", values: categoryLearning.exercise || [] },
        { key: "Study", values: categoryLearning.study || [] },
        { key: "Work", values: categoryLearning.work || [] },
        { key: "Chores", values: categoryLearning.chores || [] },
        { key: "Personal", values: categoryLearning.personal || [] }
      ];

      for (const bucket of buckets) {
        if (bucket.values.some(keyword => text.includes(keyword.toLowerCase()))) {
          return { category: bucket.key, autoDetected: true };
        }
      }

      return { category: "Personal", autoDetected: false };
    }

    function detectSubcategory(name, category) {
      const lower = name.toLowerCase();

      if (category === "Exercise") {
        if (lower.includes("pushup")) return "Pushups";
        if (lower.includes("pull-up") || lower.includes("pullup")) return "Pull-ups";
        if (lower.includes("crunch")) return "Crunches";
        if (lower.includes("squat")) return "Squats";
        if (lower.includes("lunge")) return "Lunges";
        if (lower.includes("run") || lower.includes("jog")) return "Running";
        if (lower.includes("walk")) return "Walking";
        if (lower.includes("yoga")) return "Yoga";
        if (lower.includes("stretch")) return "Stretching";
      }

      if (category === "Study") {
        if (lower.includes("read") || lower.includes("chapter") || lower.includes("book")) return "Reading";
        if (lower.includes("write") || lower.includes("essay")) return "Writing";
        if (lower.includes("exam") || lower.includes("test")) return "Exam Prep";
        if (lower.includes("practice")) return "Practice";
      }

      if (category === "Work") {
        if (lower.includes("meeting")) return "Meetings";
        if (lower.includes("email")) return "Emails";
        if (lower.includes("report")) return "Reports";
        if (lower.includes("project")) return "Projects";
        if (lower.includes("client")) return "Clients";
        if (lower.includes("presentation")) return "Presentations";
      }

      if (category === "Chores") {
        if (lower.includes("clean") || lower.includes("vacuum") || lower.includes("sweep") || lower.includes("mop") || lower.includes("tidy")) return "Cleaning";
        if (lower.includes("laundry")) return "Laundry";
        if (lower.includes("dishes")) return "Dishes";
        if (lower.includes("organize") || lower.includes("declutter")) return "Organizing";
      }

      if (category === "Personal") {
        if (lower.includes("meditate")) return "Meditation";
        if (lower.includes("journal")) return "Journaling";
        if (lower.includes("hobby")) return "Hobbies";
        if (lower.includes("relax") || lower.includes("self-care")) return "Self Care";
      }

      return name.trim();
    }

    function maybeLearnOverride(taskName, selectedCategory, autoCategory, wasAutoDetected) {
      if (!appSettings.learnFromChanges || !wasAutoDetected || selectedCategory === autoCategory) return;
      const firstWord = taskName.toLowerCase().trim().split(" ").slice(0, 2).join(" ");
      if (!firstWord) return;
      const key = selectedCategory.toLowerCase();
      if (!categoryLearning[key]) categoryLearning[key] = [];
      if (!categoryLearning[key].includes(firstWord)) {
        categoryLearning[key].push(firstWord);
      }
    }

    function moveTaskToTrash(taskId) {
      const idx = tasks.findIndex(t => t.id === taskId);
      if (idx === -1) return;
      const task = tasks[idx];
      const deletedAt = new Date().toISOString();

      const trashedTask = {
        ...task,
        subcategory: task.subcategory || detectSubcategory(task.name, task.category),
        deletedAt,
        expiresAt: appSettings.trashRetentionDays === -1 ? null : daysFromNow(appSettings.trashRetentionDays),
        originalCategory: task.category,
        autoDetectedCategory: task.autoDetectedCategory || false,
        userOverrodeCategory: task.userOverrodeCategory || false
      };

      trashBin.unshift(trashedTask);
      tasks.splice(idx, 1);
      cleanupTrashBin();
      saveAll();
      renderAll();
    }

    function permanentlyDeleteTask(taskId) {
      trashBin = trashBin.filter(t => t.id !== taskId);
      saveAll();
      renderAll();
    }

    function restoreTask(taskId) {
      const idx = trashBin.findIndex(t => t.id === taskId);
      if (idx === -1) return;
      const item = trashBin[idx];
      trashBin.splice(idx, 1);

      const restoredTask = {
        ...item,
        restored: true
      };

      delete restoredTask.deletedAt;
      delete restoredTask.expiresAt;
      delete restoredTask.originalCategory;

      tasks.unshift(restoredTask);
      saveAll();
      renderAll();
    }

    function emptyTrash() {
      trashBin = [];
      saveAll();
      renderAll();
    }

    function deleteSelectedTasksToTrash() {
      const ids = Array.from(selectedTaskIds);
      ids.forEach(id => moveTaskToTrash(id));
      selectedTaskIds.clear();
      bulkMode = false;
      renderAll();
    }

    function deleteAllTasksToTrash() {
      const allIds = tasks.map(t => t.id);
      allIds.forEach(id => moveTaskToTrash(id));
      selectedTaskIds.clear();
      bulkMode = false;
      renderAll();
    }

    function toggleTaskComplete(taskId, increment = true) {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;
      task.completedCount = Math.max(0, increment ? task.completedCount + 1 : task.completedCount - 1);
      saveAll();
      renderAll();
    }

    function applySmartCategoryPreview() {
      const input = document.getElementById("taskName");
      const categorySelect = document.getElementById("taskCategory");
      const hint = document.getElementById("autoDetectHint");
      const value = input.value.trim();

      if (!value) {
        hint.classList.add("hidden");
        return;
      }

      const result = detectCategory(value);

      if (categorySelect.value === "Auto-detect" && appSettings.autoCategorizeNewTasks) {
        hint.textContent = "Suggested category: " + result.category;
        hint.classList.remove("hidden");
      } else if (result.autoDetected && appSettings.autoCategorizeNewTasks) {
        hint.textContent = "Suggested category: " + result.category;
        hint.classList.remove("hidden");
      } else {
        hint.classList.add("hidden");
      }
    }

    function getSortedTasks(list) {
      const sorted = [...list];

      if (currentSort === "az") sorted.sort((a, b) => a.name.localeCompare(b.name));
      if (currentSort === "za") sorted.sort((a, b) => b.name.localeCompare(a.name));
      if (currentSort === "dateNew") sorted.sort((a, b) => new Date(b.createdAt || b.deletedAt || 0) - new Date(a.createdAt || a.deletedAt || 0));
      if (currentSort === "dateOld") sorted.sort((a, b) => new Date(a.createdAt || a.deletedAt || 0) - new Date(b.createdAt || b.deletedAt || 0));
      if (currentSort === "reminder") sorted.sort((a, b) => Number(Boolean(b.reminderEnabled)) - Number(Boolean(a.reminderEnabled)));
      if (currentSort === "completion") sorted.sort((a, b) => {
        const aDone = a.completedCount >= a.targetCount ? 1 : 0;
        const bDone = b.completedCount >= b.targetCount ? 1 : 0;
        return aDone - bDone;
      });
      if (currentSort === "category") {
        sorted.sort((a, b) => {
          const categoryDiff = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
          if (categoryDiff !== 0) return categoryDiff;
          const subA = (a.subcategory || detectSubcategory(a.name, a.category)).toLowerCase();
          const subB = (b.subcategory || detectSubcategory(b.name, b.category)).toLowerCase();
          if (subA !== subB) return subA.localeCompare(subB);
          return a.name.localeCompare(b.name);
        });
      }

      return sorted;
    }

    function filterTasksBySearch(list, query) {
      if (!query) return list;
      const q = query.toLowerCase();
      return list.filter(task =>
        task.name.toLowerCase().includes(q) ||
        task.category.toLowerCase().includes(q) ||
        (task.subcategory || "").toLowerCase().includes(q)
      );
    }

    function groupByCategoryAndSubcategory(list) {
      const grouped = {};

      list.forEach(task => {
        const category = task.category || "Personal";
        const subcategory = task.subcategory || detectSubcategory(task.name, category);

        if (!grouped[category]) {
          grouped[category] = { items: [], subcategories: {} };
        }

        if (!grouped[category].subcategories[subcategory]) {
          grouped[category].subcategories[subcategory] = [];
        }

        grouped[category].items.push(task);
        grouped[category].subcategories[subcategory].push(task);
      });

      return grouped;
    }

    function getStats() {
      const today = new Date().toISOString().slice(0, 10);
      return {
        todayTasks: tasks.filter(t => t.scheduledDate === today).length,
        completedToday: tasks.filter(t => t.scheduledDate === today && t.completedCount >= t.targetCount).length,
        activeTasks: tasks.filter(t => t.completedCount < t.targetCount).length,
        trashItems: trashBin.length,
        activeCategories: [...new Set(tasks.map(t => t.category))].length,
        totalCompleted: tasks.filter(t => t.completedCount >= t.targetCount).length,
        totalTasks: tasks.length
      };
    }

    function renderStats() {
      const stats = getStats();

      document.getElementById("statTodayTotal").textContent = stats.todayTasks;
      document.getElementById("statTodayCompleted").textContent = stats.completedToday;
      document.getElementById("statActiveTasks").textContent = stats.activeTasks;
      document.getElementById("statTrashCount").textContent = stats.trashItems;
      document.getElementById("statCategoryCount").textContent = stats.activeCategories;
      document.getElementById("statTotalCompleted").textContent = stats.totalCompleted;

      document.getElementById("summaryTotalTasks").textContent = stats.totalTasks;
      document.getElementById("summaryActiveTasks").textContent = stats.activeTasks;
      document.getElementById("summaryCompletedTasks").textContent = stats.totalCompleted;
      document.getElementById("summaryTrashItems").textContent = stats.trashItems;
      document.getElementById("summaryCategoriesUsed").textContent = stats.activeCategories;

      document.getElementById("trashCountBadge").textContent = trashBin.length;
      document.getElementById("trashCountBadge").classList.toggle("hidden", trashBin.length === 0);

      renderCategorySummary();
      populateSingleDeleteSelector();
    }

    function renderCategorySummary() {
      const wrap = document.getElementById("categorySummaryList");
      const counts = categoryOrder
        .map(category => ({
          category,
          count: tasks.filter(t => t.category === category).length
        }))
        .filter(item => item.count > 0);

      wrap.innerHTML = counts.length ? counts.map(item => `
        <div class="flex items-center justify-between rounded-xl border border-white/10 bg-[#0F0F0F] px-3 py-2">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center rounded-full border px-2 py-1 text-xs ${categoryColors[item.category]}">${item.category}</span>
          </div>
          <span class="text-sm text-white/80">${item.count}</span>
        </div>
      `).join("") : `<p class="text-xs text-white/50">No categories in use.</p>`;
    }

    function populateSingleDeleteSelector() {
      const select = document.getElementById("singleDeleteSelector");
      const current = select.value;
      select.innerHTML = `<option value="">Select a task</option>` + tasks.map(task => `
        <option value="${task.id}">${task.name} · ${task.category}</option>
      `).join("");
      if ([...select.options].some(option => option.value === current)) {
        select.value = current;
      }
    }

    function taskCard(task) {
      const done = task.completedCount >= task.targetCount;
      const selected = selectedTaskIds.has(task.id);
      const showRestored = task.restored === true;
      const badgeClass = categoryColors[task.category] || "bg-white/10 text-white/80 border-white/10";

      return `
        <div class="group relative w-[18rem] shrink-0 overflow-hidden rounded-3xl border ${selected ? "border-cyan-300/40" : "border-white/10"} bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">
          <div class="mb-4 flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="mb-2 flex flex-wrap items-center gap-2">
                <span class="inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${badgeClass}">${task.category}</span>
                ${showRestored ? '<span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60">↻ restored</span>' : ""}
              </div>
              <h3 class="truncate text-base font-medium text-white">${task.name}</h3>
              <p class="mt-1 text-xs text-white/45">${task.subcategory || detectSubcategory(task.name, task.category)}</p>
            </div>

            <div class="flex items-center gap-2">
              ${bulkMode ? `
                <button onclick="window.toggleSelectTask('${task.id}')" class="flex h-8 w-8 items-center justify-center rounded-lg border ${selected ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200" : "border-white/10 bg-white/5 text-white/60"}">
                  <iconify-icon icon="${selected ? "solar:check-circle-linear" : "solar:stop-circle-linear"}" stroke-width="1.5" class="text-base"></iconify-icon>
                </button>
              ` : ""}
              <button onclick="window.sendTaskToTrash('${task.id}')" class="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300">
                <iconify-icon icon="solar:trash-bin-minimalistic-linear" stroke-width="1.5" class="text-base"></iconify-icon>
              </button>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-white/45">
              <span>${formatDate(task.scheduledDate)}</span>
              <span>${task.completedCount}/${task.targetCount}</span>
            </div>

            <div class="h-2 overflow-hidden rounded-full bg-white/10">
              <div class="h-full rounded-full ${done ? "bg-emerald-300" : "bg-cyan-300"}" style="width: ${Math.min(100, (task.completedCount / Math.max(1, task.targetCount)) * 100)}%"></div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="window.changeTaskCount('${task.id}', -1)" class="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/[0.08]">
                <iconify-icon icon="solar:minus-circle-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
              </button>
              <button onclick="window.changeTaskCount('${task.id}', 1)" class="flex h-9 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-white/90 transition hover:bg-white/[0.08]">
                ${done ? "Completed" : "Update Progress"}
              </button>
              <button onclick="window.changeTaskCount('${task.id}', 1)" class="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/[0.08]">
                <iconify-icon icon="solar:add-circle-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function trashCard(task) {
      const left = daysLeft(task.expiresAt);
      const retention = appSettings.trashRetentionDays === -1 ? null : appSettings.trashRetentionDays;
      const percent = retention && left !== null ? Math.max(0, Math.min(100, (left / retention) * 100)) : 100;
      const badgeClass = categoryColors[task.category] || "bg-white/10 text-white/80 border-white/10";

      return `
        <div class="w-[19rem] shrink-0 overflow-hidden rounded-3xl border border-red-500/20 p-4" style="background-color: rgba(255,68,68,0.08);">
          <div class="mb-4 flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="mb-2 flex flex-wrap items-center gap-2">
                <span class="inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${badgeClass}">${task.originalCategory || task.category}</span>
                <span class="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-xs text-red-200">Trash</span>
              </div>
              <h3 class="truncate text-base font-medium text-white">${task.name}</h3>
              <p class="mt-1 text-xs text-white/55">${task.subcategory || detectSubcategory(task.name, task.category)}</p>
            </div>

            <div class="flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/10 text-red-300">
              <iconify-icon icon="solar:trash-bin-minimalistic-linear" stroke-width="1.5" class="text-base"></iconify-icon>
            </div>
          </div>

          <div class="space-y-3">
            <div class="text-xs text-white/60">Deleted ${formatDate(task.deletedAt)}</div>
            <div class="text-xs text-white/60">Original progress ${task.completedCount}/${task.targetCount}</div>
            <div class="text-xs ${left === null ? "text-white/60" : "text-red-200"}">${left === null ? "Never expires" : "Expires in " + left + " days"}</div>

            <div class="h-2 overflow-hidden rounded-full bg-red-950/40">
              <div class="h-full rounded-full bg-red-400" style="width: ${percent}%"></div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button onclick="window.restoreTrashTask('${task.id}')" class="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2.5 text-xs text-emerald-200 transition hover:bg-emerald-400/15">
                <iconify-icon icon="solar:undo-left-linear" stroke-width="1.5" class="text-base"></iconify-icon>
                Restore
              </button>
              <button onclick="window.deleteTrashTaskPermanent('${task.id}')" class="flex items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-xs text-red-200 transition hover:bg-red-500/15">
                <iconify-icon icon="solar:trash-bin-minimalistic-linear" stroke-width="1.5" class="text-base"></iconify-icon>
                Delete
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderCategoryRows() {
      const search = document.getElementById("searchInput").value.trim();
      const rows = document.getElementById("categoryRows");
      let filteredTasks = filterTasksBySearch(tasks, search);

      if (!appSettings.showCompletedTasks) {
        filteredTasks = filteredTasks.filter(task => task.completedCount < task.targetCount);
      }

      const data = getSortedTasks(filteredTasks);
      const grouped = groupByCategoryAndSubcategory(data);

      let displayData = grouped;

      if (selectedSubcategoryFilter) {
        const { category, subcategory } = selectedSubcategoryFilter;
        displayData = {
          [category]: {
            items: grouped[category]?.subcategories?.[subcategory] || [],
            subcategories: { [subcategory]: grouped[category]?.subcategories?.[subcategory] || [] }
          }
        };
        document.getElementById("subcategoryFilterBar").classList.remove("hidden");
        document.getElementById("subcategoryFilterText").textContent = category + " · " + subcategory;
        document.getElementById("clearFilterBtn").classList.remove("hidden");
      } else {
        document.getElementById("subcategoryFilterBar").classList.add("hidden");
        document.getElementById("clearFilterBtn").classList.add("hidden");
      }

      const orderedCategories = categoryOrder.filter(cat => displayData[cat]);

      rows.innerHTML = orderedCategories.map(category => {
        const group = displayData[category];
        const total = group.items.length;
        const isExpanded = expandedCategories.has(category);
        const subcats = Object.keys(group.subcategories).sort((a, b) => a.localeCompare(b));

        return `
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-4">
              <button onclick="window.toggleCategoryExpand('${category}')" class="flex items-center gap-3">
                <h2 class="text-lg font-semibold tracking-tight text-white">${category} <span class="text-white/45">(${total})</span></h2>
                <iconify-icon icon="${isExpanded ? "solar:alt-arrow-down-linear" : "solar:alt-arrow-right-linear"}" stroke-width="1.5" class="text-base text-white/50"></iconify-icon>
              </button>

              <div class="hidden items-center gap-2 sm:flex">
                ${subcats.map(sub => `
                  <button onclick="window.filterSubcategory('${category}', '${sub.replace(/'/g, "\\'")}')" class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/[0.08]">
                    ${sub} (${group.subcategories[sub].length})
                  </button>
                `).join("")}
              </div>
            </div>

            ${isExpanded ? `
              <div class="flex gap-4 overflow-x-auto pb-1">
                ${group.items.map(task => taskCard(task)).join("")}
              </div>
            ` : ""}
          </div>
        `;
      }).join("");

      if (!orderedCategories.length) {
        rows.innerHTML = `
          <div class="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p class="text-sm text-white/60">No tasks match your current filters.</p>
          </div>
        `;
      }
    }

    function getFilteredTrashBin() {
      const query = document.getElementById("trashSearchInput").value.trim().toLowerCase();
      const category = document.getElementById("trashCategoryFilter").value;
      const dateRange = document.getElementById("trashDateFilter").value;

      return trashBin.filter(item => {
        const matchesQuery =
          !query ||
          item.name.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          formatDate(item.deletedAt).toLowerCase().includes(query);

        const matchesCategory = !category || item.category === category;

        let matchesDate = true;
        if (dateRange) {
          const deletedAt = new Date(item.deletedAt);
          const cutoff = new Date();
          cutoff.setDate(cutoff.getDate() - Number(dateRange));
          matchesDate = deletedAt >= cutoff;
        }

        return matchesQuery && matchesCategory && matchesDate;
      });
    }

    function renderTrashRows() {
      const rows = document.getElementById("trashCategoryRows");
      const data = getSortedTasks(getFilteredTrashBin());
      const grouped = groupByCategoryAndSubcategory(data);

      let displayData = grouped;

      if (selectedTrashSubcategoryFilter) {
        const { category, subcategory } = selectedTrashSubcategoryFilter;
        displayData = {
          [category]: {
            items: grouped[category]?.subcategories?.[subcategory] || [],
            subcategories: { [subcategory]: grouped[category]?.subcategories?.[subcategory] || [] }
          }
        };
        document.getElementById("trashSubcategoryFilterBar").classList.remove("hidden");
        document.getElementById("trashSubcategoryFilterText").textContent = category + " Trash · " + subcategory;
      } else {
        document.getElementById("trashSubcategoryFilterBar").classList.add("hidden");
      }

      const orderedCategories = categoryOrder.filter(cat => displayData[cat]);

      rows.innerHTML = orderedCategories.map(category => {
        const group = displayData[category];
        const total = group.items.length;
        const subcats = Object.keys(group.subcategories).sort((a, b) => a.localeCompare(b));

        return `
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <h2 class="text-lg font-semibold tracking-tight text-white">🗑️ ${category.toUpperCase()} TRASH <span class="text-white/45">(${total} items)</span></h2>
              </div>

              <div class="hidden items-center gap-2 sm:flex">
                ${subcats.map(sub => `
                  <button onclick="window.filterTrashSubcategory('${category}', '${sub.replace(/'/g, "\\'")}')" class="rounded-full border border-red-500/15 bg-red-500/10 px-3 py-1.5 text-xs text-red-100/80 transition hover:bg-red-500/15">
                    ${sub} (${group.subcategories[sub].length})
                  </button>
                `).join("")}
              </div>
            </div>

            <div class="flex gap-4 overflow-x-auto pb-1">
              ${group.items.map(task => trashCard(task)).join("")}
            </div>
          </div>
        `;
      }).join("");

      if (!orderedCategories.length) {
        rows.innerHTML = `
          <div class="rounded-3xl border border-red-500/15 p-10 text-center" style="background-color: rgba(255,68,68,0.06);">
            <p class="text-sm text-white/60">Trash bin is empty.</p>
          </div>
        `;
      }
    }

    function renderToggles() {
      const autoBtn = document.getElementById("toggleAutoCategorize");
      const autoKnob = document.getElementById("toggleAutoCategorizeKnob");
      const learnBtn = document.getElementById("toggleLearnChanges");
      const learnKnob = document.getElementById("toggleLearnChangesKnob");
      const showBtn = document.getElementById("toggleShowCompleted");
      const showKnob = document.getElementById("toggleShowCompletedKnob");

      if (appSettings.autoCategorizeNewTasks) {
        autoBtn.className = "relative h-7 w-12 rounded-full bg-cyan-300 transition";
        autoKnob.className = "absolute left-6 top-1 h-5 w-5 rounded-full bg-[#0A0A0A] transition";
      } else {
        autoBtn.className = "relative h-7 w-12 rounded-full bg-white/15 transition";
        autoKnob.className = "absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition";
      }

      if (appSettings.learnFromChanges) {
        learnBtn.className = "relative h-7 w-12 rounded-full bg-cyan-300 transition";
        learnKnob.className = "absolute left-6 top-1 h-5 w-5 rounded-full bg-[#0A0A0A] transition";
      } else {
        learnBtn.className = "relative h-7 w-12 rounded-full bg-white/15 transition";
        learnKnob.className = "absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition";
      }

      if (appSettings.showCompletedTasks) {
        showBtn.className = "relative h-7 w-12 rounded-full bg-cyan-300 transition";
        showKnob.className = "absolute left-6 top-1 h-5 w-5 rounded-full bg-[#0A0A0A] transition";
      } else {
        showBtn.className = "relative h-7 w-12 rounded-full bg-white/15 transition";
        showKnob.className = "absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition";
      }

      document.getElementById("trashRetention").value = String(appSettings.trashRetentionDays);
      document.getElementById("trashMaxSize").value = String(appSettings.maxTrashSize);
      document.getElementById("drawerSortPreference").value = currentSort;
      document.getElementById("categoryDisplayOption").value = expandedCategories.size === categoryOrder.length ? "expanded" : "collapsed";
    }

    function renderBulkControls() {
      document.getElementById("deleteSelectedBtn").classList.toggle("hidden", !bulkMode || selectedTaskIds.size === 0);
      document.getElementById("bulkToggleBtn").textContent = bulkMode ? "Cancel Bulk Select" : "Bulk Select";
      document.getElementById("expandAllBtn").textContent = expandedCategories.size === categoryOrder.length ? "Collapse Categories" : "Expand Categories";
    }

    function setNavActive(view) {
      currentView = view;
      const homeBtn = document.getElementById("navHomeBtn");
      const settingsBtn = document.getElementById("navSettingsBtn");
      const addBtn = document.getElementById("navAddBtn");

      homeBtn.className = "flex flex-1 flex-col items-center justify-center gap-1 text-white/60";
      settingsBtn.className = "flex flex-1 flex-col items-center justify-center gap-1 text-white/60";
      addBtn.className = "flex flex-1 flex-col items-center justify-center gap-1 text-white/60";
      homeBtn.style.filter = "none";
      settingsBtn.style.filter = "none";
      addBtn.style.filter = "none";

      if (view === "home") {
        homeBtn.className = "flex flex-1 flex-col items-center justify-center gap-1 text-cyan-300";
        homeBtn.style.filter = "drop-shadow(0 0 0.5rem rgba(0,255,255,0.45))";
      }
      if (view === "settings") {
        settingsBtn.className = "flex flex-1 flex-col items-center justify-center gap-1 text-cyan-300";
        settingsBtn.style.filter = "drop-shadow(0 0 0.5rem rgba(0,255,255,0.45))";
      }
      if (view === "add") {
        addBtn.className = "flex flex-1 flex-col items-center justify-center gap-1 text-cyan-300";
        addBtn.style.filter = "drop-shadow(0 0 0.5rem rgba(0,255,255,0.45))";
      }
    }

    function openSettingsDrawer() {
      document.getElementById("settingsDrawer").classList.remove("pointer-events-none");
      document.getElementById("settingsBackdrop").classList.remove("hidden");
      const panel = document.getElementById("settingsPanel");
      requestAnimationFrame(() => {
        panel.classList.remove("translate-y-full", "md:translate-x-full");
      });
      setNavActive("settings");
    }

    function closeSettingsDrawer() {
      const panel = document.getElementById("settingsPanel");
      panel.classList.add("translate-y-full", "md:translate-x-full");
      document.getElementById("settingsBackdrop").classList.add("hidden");
      setTimeout(() => {
        document.getElementById("settingsDrawer").classList.add("pointer-events-none");
      }, 300);
      setNavActive("home");
    }

    function openAddModal() {
      document.getElementById("addModal").classList.remove("hidden");
      setNavActive("add");
    }

    function closeAddModal() {
      document.getElementById("addModal").classList.add("hidden");
      setNavActive("home");
    }

    function openTrashModal() {
      document.getElementById("trashModal").classList.remove("hidden");
      renderTrashRows();
    }

    function closeTrashModal() {
      document.getElementById("trashModal").classList.add("hidden");
    }

    function renderReminderToggle() {
      const btn = document.getElementById("taskReminderToggle");
      const knob = document.getElementById("taskReminderToggleKnob");
      const wrap = document.getElementById("taskReminderTimeWrap");

      if (addReminderEnabled) {
        btn.className = "relative h-7 w-12 rounded-full bg-cyan-300 transition";
        knob.className = "absolute left-6 top-1 h-5 w-5 rounded-full bg-[#0A0A0A] transition";
        wrap.classList.remove("hidden");
      } else {
        btn.className = "relative h-7 w-12 rounded-full bg-white/15 transition";
        knob.className = "absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition";
        wrap.classList.add("hidden");
      }
    }

    function resetAddForm() {
      document.getElementById("taskName").value = "";
      document.getElementById("taskCategory").value = "Auto-detect";
      document.getElementById("taskTarget").value = "";
      document.getElementById("taskCompleted").value = "0";
      document.getElementById("taskDate").value = new Date().toISOString().slice(0, 10);
      document.getElementById("taskReminderTime").value = "";
      document.getElementById("taskNotes").value = "";
      document.getElementById("autoDetectHint").classList.add("hidden");
      addReminderEnabled = false;
      renderReminderToggle();
    }

    function renderAll() {
      cleanupTrashBin();
      renderStats();
      renderToggles();
      renderBulkControls();
      renderCategoryRows();
      renderTrashRows();
      saveAll();
    }

    document.getElementById("taskDate").value = new Date().toISOString().slice(0, 10);

    document.getElementById("taskName").addEventListener("input", applySmartCategoryPreview);
    document.getElementById("taskCategory").addEventListener("change", applySmartCategoryPreview);

    document.getElementById("addTaskBtn").addEventListener("click", () => {
      const name = document.getElementById("taskName").value.trim();
      const categorySelect = document.getElementById("taskCategory");
      const selectedCategoryValue = categorySelect.value;
      const detected = detectCategory(name);
      const selectedCategory = selectedCategoryValue === "Auto-detect" ? detected.category : selectedCategoryValue;
      const targetCount = Number(document.getElementById("taskTarget").value || 0);
      const completedCount = Number(document.getElementById("taskCompleted").value || 0);
      const scheduledDate = document.getElementById("taskDate").value || new Date().toISOString().slice(0, 10);
      const notes = document.getElementById("taskNotes").value.trim();
      const reminderTime = document.getElementById("taskReminderTime").value || "";

      if (!name || !selectedCategory || !targetCount) return;

      maybeLearnOverride(name, selectedCategory, detected.category, detected.autoDetected);

      const task = {
        id: crypto.randomUUID(),
        name,
        category: selectedCategory,
        subcategory: detectSubcategory(name, selectedCategory),
        targetCount,
        completedCount,
        scheduledDate,
        scheduledTime: "",
        reminderEnabled: addReminderEnabled,
        reminderTime: addReminderEnabled ? reminderTime : "",
        recurring: false,
        recurrencePattern: "",
        customWeekdays: [],
        notes,
        createdAt: new Date().toISOString(),
        originalCategory: selectedCategory,
        autoDetectedCategory: selectedCategoryValue === "Auto-detect" ? true : detected.autoDetected,
        userOverrodeCategory: detected.autoDetected && detected.category !== selectedCategory,
        restored: false
      };

      tasks.unshift(task);
      saveAll();
      resetAddForm();
      closeAddModal();
      renderAll();
    });

    document.getElementById("cancelAddTaskBtn").addEventListener("click", closeAddModal);
    document.getElementById("closeAddBtn").addEventListener("click", closeAddModal);
    document.getElementById("addBackdrop").addEventListener("click", closeAddModal);

    document.getElementById("searchInput").addEventListener("input", renderCategoryRows);

    document.getElementById("sortBtn").addEventListener("click", () => {
      document.getElementById("sortMenu").classList.toggle("hidden");
    });

    document.querySelectorAll(".sort-option").forEach(btn => {
      btn.addEventListener("click", () => {
        currentSort = btn.dataset.sort;
        document.getElementById("sortMenu").classList.add("hidden");
        renderAll();
      });
    });

    document.getElementById("bulkToggleBtn").addEventListener("click", () => {
      bulkMode = !bulkMode;
      if (!bulkMode) selectedTaskIds.clear();
      renderAll();
    });

    document.getElementById("deleteSelectedBtn").addEventListener("click", () => {
      if (!selectedTaskIds.size) return;
      if (confirm("Send selected tasks to trash?")) {
        deleteSelectedTasksToTrash();
      }
    });

    document.getElementById("deleteAllBtn").addEventListener("click", () => {
      if (!tasks.length) return;
      if (confirm("Send ALL tasks to trash?")) {
        deleteAllTasksToTrash();
      }
    });

    document.getElementById("expandAllBtn").addEventListener("click", () => {
      if (expandedCategories.size === categoryOrder.length) {
        expandedCategories.clear();
      } else {
        expandedCategories = new Set(categoryOrder);
      }
      renderAll();
    });

    document.getElementById("clearFilterBtn").addEventListener("click", () => {
      selectedSubcategoryFilter = null;
      renderAll();
    });

    document.getElementById("subcategoryFilterClose").addEventListener("click", () => {
      selectedSubcategoryFilter = null;
      renderAll();
    });

    document.getElementById("trashOpenBtn").addEventListener("click", openTrashModal);
    document.getElementById("trashStatCard").addEventListener("click", openTrashModal);
    document.getElementById("restoreFromTrashBtn").addEventListener("click", () => {
      closeSettingsDrawer();
      openTrashModal();
    });

    document.getElementById("closeTrashBtn").addEventListener("click", closeTrashModal);
    document.getElementById("trashBackdrop").addEventListener("click", closeTrashModal);

    document.getElementById("emptyTrashBtn").addEventListener("click", () => {
      if (!trashBin.length) return;
      if (confirm("Permanently empty trash bin?")) {
        emptyTrash();
      }
    });

    document.getElementById("trashSearchInput").addEventListener("input", renderTrashRows);
    document.getElementById("trashCategoryFilter").addEventListener("change", renderTrashRows);
    document.getElementById("trashDateFilter").addEventListener("change", renderTrashRows);

    document.getElementById("trashSubcategoryFilterClose").addEventListener("click", () => {
      selectedTrashSubcategoryFilter = null;
      renderTrashRows();
    });

    document.getElementById("trashRetention").addEventListener("change", (e) => {
      appSettings.trashRetentionDays = Number(e.target.value);
      trashBin = trashBin.map(item => ({
        ...item,
        expiresAt: appSettings.trashRetentionDays === -1 ? null : daysFromNow(appSettings.trashRetentionDays)
      }));
      renderAll();
    });

    document.getElementById("trashMaxSize").addEventListener("change", (e) => {
      appSettings.maxTrashSize = Number(e.target.value);
      renderAll();
    });

    document.getElementById("toggleAutoCategorize").addEventListener("click", () => {
      appSettings.autoCategorizeNewTasks = !appSettings.autoCategorizeNewTasks;
      renderToggles();
      saveAll();
    });

    document.getElementById("toggleLearnChanges").addEventListener("click", () => {
      appSettings.learnFromChanges = !appSettings.learnFromChanges;
      renderToggles();
      saveAll();
    });

    document.getElementById("toggleShowCompleted").addEventListener("click", () => {
      appSettings.showCompletedTasks = !appSettings.showCompletedTasks;
      renderAll();
    });

    document.getElementById("drawerSortPreference").addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderAll();
    });

    document.getElementById("categoryDisplayOption").addEventListener("change", (e) => {
      if (e.target.value === "expanded") {
        expandedCategories = new Set(categoryOrder);
      } else {
        expandedCategories.clear();
      }
      renderAll();
    });

    document.getElementById("deleteSingleBtn").addEventListener("click", () => {
      document.getElementById("singleDeleteSelectorWrap").classList.toggle("hidden");
      populateSingleDeleteSelector();
    });

    document.getElementById("confirmSingleDeleteBtn").addEventListener("click", () => {
      const id = document.getElementById("singleDeleteSelector").value;
      if (!id) return;
      moveTaskToTrash(id);
      document.getElementById("singleDeleteSelector").value = "";
      document.getElementById("singleDeleteSelectorWrap").classList.add("hidden");
    });

    document.getElementById("bulkDeleteFromSettingsBtn").addEventListener("click", () => {
      bulkMode = true;
      selectedTaskIds.clear();
      closeSettingsDrawer();
      renderAll();
    });

    document.getElementById("navHomeBtn").addEventListener("click", () => {
      closeSettingsDrawer();
      closeAddModal();
      closeTrashModal();
      setNavActive("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("navSettingsBtn").addEventListener("click", () => {
      closeAddModal();
      openSettingsDrawer();
    });

    document.getElementById("navAddBtn").addEventListener("click", () => {
      closeSettingsDrawer();
      openAddModal();
    });

    document.getElementById("closeSettingsBtn").addEventListener("click", closeSettingsDrawer);
    document.getElementById("settingsBackdrop").addEventListener("click", closeSettingsDrawer);

    document.getElementById("taskReminderToggle").addEventListener("click", () => {
      addReminderEnabled = !addReminderEnabled;
      renderReminderToggle();
    });

    window.sendTaskToTrash = function(id) {
      moveTaskToTrash(id);
    };

    window.deleteTrashTaskPermanent = function(id) {
      if (confirm("Permanently delete this task?")) {
        permanentlyDeleteTask(id);
      }
    };

    window.restoreTrashTask = function(id) {
      restoreTask(id);
    };

    window.changeTaskCount = function(id, delta) {
      toggleTaskComplete(id, delta > 0);
    };

    window.toggleSelectTask = function(id) {
      if (selectedTaskIds.has(id)) selectedTaskIds.delete(id);
      else selectedTaskIds.add(id);
      renderAll();
    };

    window.toggleCategoryExpand = function(category) {
      if (expandedCategories.has(category)) expandedCategories.delete(category);
      else expandedCategories.add(category);
      renderAll();
    };

    window.filterSubcategory = function(category, subcategory) {
      selectedSubcategoryFilter = { category, subcategory };
      renderAll();
    };

    window.filterTrashSubcategory = function(category, subcategory) {
      selectedTrashSubcategoryFilter = { category, subcategory };
      renderTrashRows();
    };

    document.addEventListener("click", (e) => {
      const sortMenu = document.getElementById("sortMenu");
      const sortBtn = document.getElementById("sortBtn");
      if (!sortMenu.contains(e.target) && !sortBtn.contains(e.target)) {
        sortMenu.classList.add("hidden");
      }
    });

    resetAddForm();
    renderReminderToggle();
    setNavActive("home");
    renderAll();
  
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
<header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<iconify-icon className="text-xl text-cyan-300" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight text-white">Productivity Tracker</h1>
<p className="text-xs text-white/50">Focus, schedule, and review</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="relative hidden sm:block">
<iconify-icon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-white/40" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-56 rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.07]" id="searchInput" placeholder="Search tasks" type="text"/>
</div>
<div className="relative">
<button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/[0.08] hover:text-white" id="sortBtn">
<iconify-icon className="text-lg" icon="solar:sort-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute right-0 top-12 hidden w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl shadow-black/40" id="sortMenu">
<button className="sort-option flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5" data-sort="az">Alphabetical A–Z</button>
<button className="sort-option flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5" data-sort="za">Alphabetical Z–A</button>
<button className="sort-option flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5" data-sort="dateNew">Date · Newest first</button>
<button className="sort-option flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5" data-sort="dateOld">Date · Oldest first</button>
<button className="sort-option flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5" data-sort="category">Category</button>
<button className="sort-option flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5" data-sort="reminder">Reminder Date</button>
<button className="sort-option flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5" data-sort="completion">Completion Status</button>
</div>
</div>
<button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/[0.08] hover:text-white" id="trashOpenBtn">
<iconify-icon className="text-lg" icon="solar:trash-bin-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -right-1 -top-1 hidden min-w-[1.125rem] rounded-full bg-red-500 px-1.5 py-0.5 text-center text-xs font-medium leading-none text-white" id="trashCountBadge">0</span>
</button>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" id="homeView">
<section className="mb-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
<div className="flex gap-3 sm:grid sm:grid-cols-2 xl:grid-cols-6">
<button className="min-w-[11rem] rounded-lg p-3 text-left sm:min-w-0" style={{backgroundColor: '#1E1E1E'}} type="button">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-cyan-300" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-white" id="statTodayTotal">0</p>
<p className="text-xs text-[#B0B0B0]">Today's Tasks</p>
</div>
</div>
</button>
<button className="min-w-[11rem] rounded-lg p-3 text-left sm:min-w-0" style={{backgroundColor: '#1E1E1E'}} type="button">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-cyan-300" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-white" id="statTodayCompleted">0</p>
<p className="text-xs text-[#B0B0B0]">Completed Today</p>
</div>
</div>
</button>
<button className="min-w-[11rem] rounded-lg p-3 text-left sm:min-w-0" style={{backgroundColor: '#1E1E1E'}} type="button">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-cyan-300" icon="solar:hourglass-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-white" id="statActiveTasks">0</p>
<p className="text-xs text-[#B0B0B0]">Active Tasks</p>
</div>
</div>
</button>
<button className="min-w-[11rem] rounded-lg p-3 text-left sm:min-w-0" id="trashStatCard" style={{backgroundColor: '#1E1E1E'}} type="button">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-cyan-300" icon="solar:trash-bin-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-white" id="statTrashCount">0</p>
<p className="text-xs text-[#B0B0B0]">Trash Items</p>
</div>
</div>
</button>
<button className="min-w-[11rem] rounded-lg p-3 text-left sm:min-w-0" style={{backgroundColor: '#1E1E1E'}} type="button">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-cyan-300" icon="solar:widgets-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-white" id="statCategoryCount">0</p>
<p className="text-xs text-[#B0B0B0]">Active Categories</p>
</div>
</div>
</button>
<button className="min-w-[11rem] rounded-lg p-3 text-left sm:min-w-0" style={{backgroundColor: '#1E1E1E'}} type="button">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-cyan-300" icon="solar:medal-ribbons-star-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xl font-semibold tracking-tight text-white" id="statTotalCompleted">0</p>
<p className="text-xs text-[#B0B0B0]">Completed Tasks</p>
</div>
</div>
</button>
</div>
</section>
<section className="mb-6 flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2">
<button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition hover:bg-white/[0.08]" id="bulkToggleBtn">Bulk Select</button>
<button className="hidden rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-300 transition hover:bg-red-500/15" id="deleteSelectedBtn">Delete Selected</button>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition hover:bg-white/[0.08]" id="expandAllBtn">Expand Categories</button>
<button className="hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition hover:bg-white/[0.08]" id="clearFilterBtn">Clear Subcategory Filter</button>
</div>
</section>
<section className="mb-6 hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3" id="subcategoryFilterBar">
<div className="flex items-center justify-between gap-4">
<p className="text-sm text-cyan-100" id="subcategoryFilterText"></p>
<button className="text-xs text-cyan-200/80 transition hover:text-white" id="subcategoryFilterClose">Clear</button>
</div>
</section>
<section className="space-y-8" id="categoryRows"></section>
</main>
</div>
<div className="pointer-events-none fixed inset-0 z-50" id="settingsDrawer">
<div className="absolute inset-0 hidden bg-black/70 backdrop-blur-sm" id="settingsBackdrop"></div>
<div className="absolute bottom-0 right-0 flex h-[85vh] w-[90%] translate-y-full flex-col overflow-hidden rounded-t-[1.25rem] border border-white/10 bg-[#1E1E1E] transition duration-300 ease-out md:top-0 md:h-full md:w-[25rem] md:translate-x-full md:translate-y-0 md:rounded-none md:rounded-l-[1.25rem]" id="settingsPanel">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white">Settings</h2>
<p className="text-xs text-white/50">Manage tasks, trash, and display</p>
</div>
<button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/[0.08] hover:text-white" id="closeSettingsBtn">
<iconify-icon className="text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto px-4 py-5">
<section className="mb-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
<div className="mb-4">
<h3 className="text-sm font-medium text-white">Delete Options</h3>
</div>
<div className="space-y-3">
<button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-left text-sm text-white/80 transition hover:bg-white/[0.04]" id="deleteSingleBtn">
<span className="flex items-center gap-3">
<iconify-icon className="text-lg text-red-300" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
                Delete Single Task
              </span>
<iconify-icon className="text-base text-white/40" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-left text-sm text-white/80 transition hover:bg-white/[0.04]" id="bulkDeleteFromSettingsBtn">
<span className="flex items-center gap-3">
<iconify-icon className="text-lg text-red-300" icon="solar:check-square-linear" strokeWidth="1.5"></iconify-icon>
                Delete Multiple Tasks
              </span>
<iconify-icon className="text-base text-white/40" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="flex w-full items-center justify-between rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-left text-sm text-red-300 transition hover:bg-red-500/15" id="deleteAllBtn">
<span className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:broom-linear" strokeWidth="1.5"></iconify-icon>
                Delete All Tasks
              </span>
</button>
<button className="flex w-full items-center justify-between rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-left text-sm text-red-300 transition hover:bg-red-500/15" id="emptyTrashBtn">
<span className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:trash-bin-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                Empty Trash
              </span>
</button>
<button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-left text-sm text-white/80 transition hover:bg-white/[0.04]" id="restoreFromTrashBtn">
<span className="flex items-center gap-3">
<iconify-icon className="text-lg text-cyan-300" icon="solar:undo-left-linear" strokeWidth="1.5"></iconify-icon>
                Restore from Trash
              </span>
<iconify-icon className="text-base text-white/40" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="mt-4 hidden rounded-2xl border border-white/10 bg-[#111111] p-4" id="singleDeleteSelectorWrap">
<label className="mb-2 block text-xs text-white/50">Choose task</label>
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40" id="singleDeleteSelector">
<option value="">Select a task</option>
</select>
<button className="mt-3 w-full rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300 transition hover:bg-red-500/15" id="confirmSingleDeleteBtn">Delete Selected Task</button>
</div>
</section>
<section className="mb-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
<div className="mb-4">
<h3 className="text-sm font-medium text-white">Task Information Summary</h3>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<p className="text-xs text-white/50">Total Tasks</p>
<p className="mt-2 text-lg font-semibold text-white" id="summaryTotalTasks">0</p>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<p className="text-xs text-white/50">Active Tasks</p>
<p className="mt-2 text-lg font-semibold text-white" id="summaryActiveTasks">0</p>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<p className="text-xs text-white/50">Completed Tasks</p>
<p className="mt-2 text-lg font-semibold text-white" id="summaryCompletedTasks">0</p>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<p className="text-xs text-white/50">Trash Items</p>
<p className="mt-2 text-lg font-semibold text-white" id="summaryTrashItems">0</p>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4 sm:col-span-2">
<p className="text-xs text-white/50">Categories Used</p>
<p className="mt-2 text-lg font-semibold text-white" id="summaryCategoriesUsed">0</p>
</div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-[#111111] p-4">
<div className="mb-3 flex items-center justify-between">
<p className="text-sm text-white">Tasks by Category</p>
</div>
<div className="space-y-2" id="categorySummaryList"></div>
</div>
</section>
<section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
<div className="mb-4">
<h3 className="text-sm font-medium text-white">View Options</h3>
</div>
<div className="space-y-4">
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-sm text-white">Show Completed Tasks</p>
<p className="mt-1 text-xs text-white/50">Hide finished tasks from home view</p>
</div>
<button className="relative h-7 w-12 rounded-full bg-cyan-300 transition" id="toggleShowCompleted">
<span className="absolute left-6 top-1 h-5 w-5 rounded-full bg-[#0A0A0A] transition" id="toggleShowCompletedKnob"></span>
</button>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<label className="mb-2 block text-xs text-white/50">Sort Preferences</label>
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40" id="drawerSortPreference">
<option value="category">Category</option>
<option value="az">Alphabetical A–Z</option>
<option value="za">Alphabetical Z–A</option>
<option value="dateNew">Date · Newest first</option>
<option value="dateOld">Date · Oldest first</option>
<option value="reminder">Reminder Date</option>
<option value="completion">Completion Status</option>
</select>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<label className="mb-2 block text-xs text-white/50">Category Display Options</label>
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40" id="categoryDisplayOption">
<option value="expanded">Expanded Categories</option>
<option value="collapsed">Collapsed Categories</option>
</select>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<label className="mb-2 block text-xs text-white/50">Auto-delete trash after</label>
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40" id="trashRetention">
<option value="7">7 days</option>
<option value="14">14 days</option>
<option selected="" value="30">30 days</option>
<option value="-1">Never</option>
</select>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<label className="mb-2 block text-xs text-white/50">Maximum trash size</label>
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40" id="trashMaxSize">
<option value="100">100 items</option>
<option value="500">500 items</option>
<option selected="" value="-1">Unlimited</option>
</select>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-sm text-white">Auto-categorize new tasks</p>
<p className="mt-1 text-xs text-white/50">Preselect category from task keywords</p>
</div>
<button className="relative h-7 w-12 rounded-full bg-cyan-300 transition" id="toggleAutoCategorize">
<span className="absolute left-6 top-1 h-5 w-5 rounded-full bg-[#0A0A0A] transition" id="toggleAutoCategorizeKnob"></span>
</button>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-sm text-white">Learn from my changes</p>
<p className="mt-1 text-xs text-white/50">Improve automatic category suggestions</p>
</div>
<button className="relative h-7 w-12 rounded-full bg-cyan-300 transition" id="toggleLearnChanges">
<span className="absolute left-6 top-1 h-5 w-5 rounded-full bg-[#0A0A0A] transition" id="toggleLearnChangesKnob"></span>
</button>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 hidden" id="addModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" id="addBackdrop"></div>
<div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl rounded-t-[1.25rem] border border-white/10 bg-[#1E1E1E]">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white">Add Task</h2>
<p className="text-xs text-white/50">Create a new task</p>
</div>
<button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/[0.08] hover:text-white" id="closeAddBtn">
<iconify-icon className="text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="max-h-[80vh] overflow-y-auto p-4 sm:p-6">
<div className="grid gap-4 md:grid-cols-2">
<div className="md:col-span-2">
<label className="mb-2 block text-xs text-white/50">Task Title</label>
<input className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-cyan-300/40" id="taskName" placeholder="e.g., Morning Pushups" type="text"/>
<p className="mt-2 hidden text-xs text-cyan-300" id="autoDetectHint"></p>
</div>
<div>
<label className="mb-2 block text-xs text-white/50">Category</label>
<select className="w-full appearance-none rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/40" id="taskCategory">
<option value="Auto-detect">Auto-detect</option>
<option>Exercise</option>
<option>Study</option>
<option>Work</option>
<option>Chores</option>
<option>Personal</option>
</select>
</div>
<div>
<label className="mb-2 block text-xs text-white/50">Target Count</label>
<input className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-cyan-300/40" id="taskTarget" min="1" placeholder="Enter target (e.g., 30)" type="number"/>
</div>
<div>
<label className="mb-2 block text-xs text-white/50">Completed Count</label>
<input className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-cyan-300/40" id="taskCompleted" min="0" placeholder="0" type="number" value="0"/>
</div>
<div>
<label className="mb-2 block text-xs text-white/50">Date</label>
<input className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/40" id="taskDate" type="date"/>
</div>
<div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#111111] p-4">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-sm text-white">Set reminder</p>
<p className="mt-1 text-xs text-white/50">Enable a reminder time for this task</p>
</div>
<button className="relative h-7 w-12 rounded-full bg-white/15 transition" id="taskReminderToggle">
<span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition" id="taskReminderToggleKnob"></span>
</button>
</div>
<div className="mt-4 hidden" id="taskReminderTimeWrap">
<label className="mb-2 block text-xs text-white/50">Reminder Time</label>
<input className="w-full rounded-2xl border border-white/10 bg-[#0F0F0F] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/40" id="taskReminderTime" type="time"/>
</div>
</div>
<div className="md:col-span-2">
<label className="mb-2 block text-xs text-white/50">Notes</label>
<textarea className="w-full resize-none rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-cyan-300/40" id="taskNotes" placeholder="Add additional details..." rows="4"></textarea>
</div>
</div>
<div className="mt-5 grid gap-3 sm:grid-cols-2">
<button className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/[0.08]" id="cancelAddTaskBtn">Cancel</button>
<button className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:opacity-90" id="addTaskBtn">Save</button>
</div>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 hidden" id="trashModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" id="trashBackdrop"></div>
<div className="absolute inset-x-0 bottom-0 top-10 mx-auto flex max-w-7xl flex-col overflow-hidden rounded-t-3xl border border-red-500/20 bg-[#161616]" style={{backgroundColor: 'rgba(255,68,68,0.1)'}}>
<div className="flex items-center justify-between border-b border-red-500/10 px-4 py-4 sm:px-6 lg:px-8">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white">Trash Bin</h2>
<p className="text-xs text-red-100/60">Deleted tasks stay here before permanent removal</p>
</div>
<div className="flex items-center gap-2">
<button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/[0.08] hover:text-white" id="closeTrashBtn">
<iconify-icon className="text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="border-b border-red-500/10 px-4 py-4 sm:px-6 lg:px-8">
<div className="grid gap-3 md:grid-cols-3">
<div className="relative">
<iconify-icon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-white/40" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full rounded-2xl border border-red-500/15 bg-black/20 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-red-300/40" id="trashSearchInput" placeholder="Search trash" type="text"/>
</div>
<select className="w-full appearance-none rounded-2xl border border-red-500/15 bg-black/20 px-4 py-2.5 text-sm text-white outline-none transition focus:border-red-300/40" id="trashCategoryFilter">
<option value="">All categories</option>
<option value="Exercise">Exercise</option>
<option value="Study">Study</option>
<option value="Work">Work</option>
<option value="Chores">Chores</option>
<option value="Personal">Personal</option>
</select>
<select className="w-full appearance-none rounded-2xl border border-red-500/15 bg-black/20 px-4 py-2.5 text-sm text-white outline-none transition focus:border-red-300/40" id="trashDateFilter">
<option value="">Any deleted date</option>
<option value="7">Last 7 days</option>
<option value="14">Last 14 days</option>
<option value="30">Last 30 days</option>
</select>
</div>
</div>
<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
<section className="mb-6 hidden rounded-2xl border border-red-300/20 bg-red-300/10 px-4 py-3" id="trashSubcategoryFilterBar">
<div className="flex items-center justify-between gap-4">
<p className="text-sm text-red-100" id="trashSubcategoryFilterText"></p>
<button className="text-xs text-red-100/70 transition hover:text-white" id="trashSubcategoryFilterClose">Clear</button>
</div>
</section>
<section className="space-y-8" id="trashCategoryRows"></section>
</div>
</div>
</div>
<nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10" style={{backgroundColor: '#1E1E1E', padding: '12px'}}>
<div className="mx-auto flex max-w-3xl items-center justify-between">
<button className="flex flex-1 flex-col items-center justify-center gap-1 text-cyan-300" id="navHomeBtn" style={{filter: 'drop-shadow(0 0 0.5rem rgba(0,255,255,0.45))'}}>
<iconify-icon className="text-[2rem]" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Home</span>
</button>
<button className="flex flex-1 flex-col items-center justify-center gap-1 text-white/60" id="navSettingsBtn">
<iconify-icon className="text-[2rem]" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Settings</span>
</button>
<button className="flex flex-1 flex-col items-center justify-center gap-1 text-white/60" id="navAddBtn">
<iconify-icon className="text-[2rem]" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Add</span>
</button>
</div>
</nav>


    </>
  );
}
