import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Icons
    lucide.createIcons();
    document.querySelectorAll('svg.lucide').forEach(svg => svg.setAttribute('stroke-width', '1.5'));

    // Tooltip toggle
    const tooltip = document.getElementById('tooltip');
    const hotAction = document.getElementById('hotAction');
    hotAction.addEventListener('click', () => tooltip.classList.toggle('hidden'));

    // Notes
    const noteInput = document.getElementById('noteInput');
    const saveNote = document.getElementById('saveNote');
    const notesGrid = document.getElementById('notesGrid');
    let notes = JSON.parse(localStorage.getItem('notes_v1') || '[]');

    function renderNotes() {
      notesGrid.innerHTML = '';
      if (notes.length === 0) {
        notesGrid.innerHTML = '<div class="text-white/60 text-sm">No notes yet.</div>';
        return;
      }
      notes.slice().reverse().forEach((n, idx) => {
        const card = document.createElement('div');
        card.className = 'rounded-xl border border-white/10 bg-white/5 p-3 flex items-center justify-between gap-3';
        card.innerHTML = `
          <div class="text-sm text-white/90 truncate">${n.text}</div>
          <div class="flex items-center gap-2 shrink-0">
            <button data-index="${notes.length - 1 - idx}" class="note-del px-2 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <i data-lucide="trash-2" stroke-width="1.5" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        notesGrid.appendChild(card);
      });
      lucide.createIcons();
      document.querySelectorAll('svg.lucide').forEach(svg => svg.setAttribute('stroke-width', '1.5'));
      document.querySelectorAll('.note-del').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const i = Number(e.currentTarget.getAttribute('data-index'));
          notes.splice(i, 1);
          localStorage.setItem('notes_v1', JSON.stringify(notes));
          renderNotes();
        });
      });
    }
    saveNote.addEventListener('click', () => {
      const v = noteInput.value.trim();
      if (!v) return;
      notes.push({ text: v, ts: Date.now() });
      localStorage.setItem('notes_v1', JSON.stringify(notes));
      noteInput.value = '';
      renderNotes();
    });
    noteInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') saveNote.click();
    });
    renderNotes();

    // Tasks
    const taskInput = document.getElementById('taskInput');
    const addTask = document.getElementById('addTask');
    const tasksList = document.getElementById('tasksList');
    const tasksStats = document.getElementById('tasksStats');
    const clearDone = document.getElementById('clearDone');
    let tasks = JSON.parse(localStorage.getItem('tasks_v1') || '[]');

    function renderTasks() {
      tasksList.innerHTML = '';
      if (tasks.length === 0) {
        tasksList.innerHTML = '<li class="text-white/60 text-sm">No tasks yet.</li>';
        tasksStats.textContent = '0 open • 0 done';
        return;
      }
      tasks.forEach((t) => {
        const li = document.createElement('li');
        li.className = 'flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5';
        li.innerHTML = `
          <button data-id="${t.id}" class="task-toggle w-5 h-5 rounded-full border ${t.done ? 'border-emerald-400 bg-emerald-400/20' : 'border-white/20 bg-transparent'} flex items-center justify-center">
            ${t.done ? '<i data-lucide="check" stroke-width="1.5" class="w-3 h-3 text-emerald-200"></i>' : ''}
          </button>
          <div class="flex-1 text-sm ${t.done ? 'line-through text-white/50' : 'text-white/90'} truncate">${t.text}</div>
          <div class="flex items-center gap-2">
            <button data-id="${t.id}" class="task-del px-2 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <i data-lucide="trash-2" stroke-width="1.5" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        tasksList.appendChild(li);
      });
      const open = tasks.filter(t => !t.done).length;
      const done = tasks.filter(t => t.done).length;
      tasksStats.textContent = `${open} open • ${done} done`;
      lucide.createIcons();
      document.querySelectorAll('svg.lucide').forEach(svg => svg.setAttribute('stroke-width', '1.5'));
      document.querySelectorAll('.task-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
          localStorage.setItem('tasks_v1', JSON.stringify(tasks));
          renderTasks();
        });
      });
      document.querySelectorAll('.task-del').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          tasks = tasks.filter(t => t.id !== id);
          localStorage.setItem('tasks_v1', JSON.stringify(tasks));
          renderTasks();
        });
      });
    }
    addTask.addEventListener('click', () => {
      const v = taskInput.value.trim();
      if (!v) return;
      tasks.push({ id: crypto.randomUUID(), text: v, done: false });
      localStorage.setItem('tasks_v1', JSON.stringify(tasks));
      taskInput.value = '';
      renderTasks();
    });
    taskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addTask.click();
    });
    clearDone.addEventListener('click', () => {
      tasks = tasks.filter(t => !t.done);
      localStorage.setItem('tasks_v1', JSON.stringify(tasks));
      renderTasks();
    });
    renderTasks();

    // Modes + Timer
    const activeModeEl = document.getElementById('activeMode');
    const modeBadge = document.getElementById('modeBadge');
    let activeMode = null;
    let elapsed = 0;
    let timerId = null;

    function fmt(sec) {
      const m = Math.floor(sec / 60).toString().padStart(2, '0');
      const s = (sec % 60).toString().padStart(2, '0');
      return `${m}:${s}`;
    }
    function setMode(name) {
      activeMode = name;
      activeModeEl.textContent = name || 'None';
      modeBadge.textContent = name ? 'ACTIVE' : '—';
      modeBadge.className = 'text-[10px] px-2 py-1 rounded-full border ' + (name ? 'border-emerald-400/50 text-emerald-200 bg-emerald-400/10' : 'border-white/15 text-white/70');
      // Optional: nudge chart color
      updateChartColor(name);
    }
    function startTimer() {
      if (timerId) return;
      timerId = setInterval(() => {
        elapsed += 1;
        document.getElementById('timer').textContent = fmt(elapsed);
      }, 1000);
    }
    function pauseTimer() {
      if (!timerId) return;
      clearInterval(timerId);
      timerId = null;
    }
    function resetTimer() {
      pauseTimer();
      elapsed = 0;
      document.getElementById('timer').textContent = '00:00';
    }
    document.getElementById('startTimer').addEventListener('click', () => startTimer());
    document.getElementById('pauseTimer').addEventListener('click', () => pauseTimer());
    document.getElementById('resetTimer').addEventListener('click', () => resetTimer());

    document.querySelectorAll('[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        const m = btn.getAttribute('data-mode');
        setMode(m);
        resetTimer();
        startTimer();
      });
    });

    // Chart
    const ctx = document.getElementById('focusChart')?.getContext('2d');
    const colorsByMode = {
      'Deep Work': 'rgba(34,211,238,0.8)',   // cyan-400
      'Meeting': 'rgba(251,191,36,0.8)',     // amber-400
      'Break': 'rgba(52,211,153,0.8)',       // emerald-400
      'Admin': 'rgba(244,114,182,0.8)',      // fuchsia-400
      'Default': 'rgba(165,180,252,0.8)'     // indigo-ish
    };
    let chartColor = colorsByMode['Default'];
    const focusChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
          label: 'mins',
          data: [42, 56, 38, 64, 75, 22, 35],
          borderColor: chartColor,
          backgroundColor: chartColor.replace('0.8','0.15'),
          fill: true,
          tension: 0.35,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.65)', font: { size: 10 } } },
          y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.65)', font: { size: 10 }, stepSize: 20 } }
        }
      }
    });
    function updateChartColor(mode) {
      const c = colorsByMode[mode] || colorsByMode['Default'];
      focusChart.data.datasets[0].borderColor = c;
      focusChart.data.datasets[0].backgroundColor = c.replace('0.8','0.15');
      focusChart.update();
    }

    // AI
    const aiInput = document.getElementById('aiInput');
    const runAI = document.getElementById('runAI');
    const aiOutput = document.getElementById('aiOutput');

    document.querySelectorAll('[data-ai]').forEach(btn => {
      btn.addEventListener('click', () => {
        aiInput.value = btn.getAttribute('data-ai');
        aiInput.focus();
      });
    });

    function fakeAIResponse(prompt) {
      const samples = [
        'Here’s a concise summary:\n• Key point 1\n• Key point 2\n• Next steps included.',
        'Drafted:\nSubject: Follow-up\nBody: Hi team, here are the updates...',
        'Outline:\n1. Introduction\n2. Main sections\n3. Action items\n4. References',
        'Ideas:\n• Option A\n• Option B\n• Option C'
      ];
      const pick = samples[(prompt.length + Date.now()) % samples.length];
      return pick;
    }

    function runAICommand() {
      const prompt = aiInput.value.trim();
      if (!prompt) return;
      aiOutput.innerHTML = `<span class="inline-flex items-center gap-2 text-white/80"><i data-lucide="loader-2" stroke-width="1.5" class="w-4 h-4 animate-spin"></i>Executing…</span>`;
      lucide.createIcons();
      document.querySelectorAll('svg.lucide').forEach(svg => svg.setAttribute('stroke-width', '1.5'));
      setTimeout(() => {
        const res = fakeAIResponse(prompt);
        aiOutput.textContent = res;
      }, 700);
    }
    runAI.addEventListener('click', runAICommand);
    aiInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') runAICommand();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<iframe className="fixed w-full h-screen pointer-events-none" frameborder="0" height="100%" src="https://my.spline.design/galaxy-YxBchtLLMNxuqLPeF7XcyWOm" width="100%"></iframe>
<header className="text-center mt-16 px-4 fade-in relative z-10">
<h1 className="md:text-5xl text-3xl tracking-tight font-geist bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-300">Orchestrate Your Day</h1>
<p className="text-base md:text-lg text-gray-300 font-geist mt-3">Quick notes, fast tasks, focused modes, and AI at your fingertips.</p>
</header>
<main className="w-full max-w-6xl px-4 md:px-0 mt-14 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<section className="relative border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden fade-in fade-in-delay-1 hover:border-white/20 transition-colors duration-300 bg-white/5 backdrop-blur-sm">
<h2 className="text-lg font-medium mb-6 font-geist">Quick Notes</h2>
<div className="flex flex-wrap gap-6">

<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 bg-gradient-to-br from-sky-300/20 to-sky-500/10 rounded-xl relative" id="hotAction">
<span className="absolute -left-1/2 -top-6 -rotate-45 origin-bottom-left bg-sky-500 text-white text-xs px-2 py-0.5 rounded-md font-geist">Tip</span>
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-sky-300" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
</button>

<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-amber-300/20 to-amber-500/10">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-amber-300" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
</button>

<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-emerald-300/20 to-emerald-500/10">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-emerald-300" data-lucide="calendar-clock" strokeWidth="1.5"></i>
</div>
</button>

<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-fuchsia-300/20 to-fuchsia-500/10">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-fuchsia-300" data-lucide="bookmark-plus" strokeWidth="1.5"></i>
</div>
</button>
</div>

<div className="hidden md:flex flex-col gap-3 absolute top-1/2 left-full ml-6 -translate-y-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 w-80" id="tooltip">
<h3 className="font-semibold text-white font-geist">Pro tip</h3>
<p className="text-sm text-sky-200/90 leading-relaxed font-geist">Use the command bar in AI to summarize a note instantly. Press Enter to save notes quickly.</p>
</div>
<div className="hidden md:block absolute left-full top-[55%] w-6 h-px bg-white/20"></div>

<div className="mt-8 space-y-3">
<div className="flex items-center gap-3">
<div className="flex-1">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40 focus:border-white/20" id="noteInput" placeholder="Jot something quick..." type="text"/>
</div>
<button className="px-4 py-2.5 rounded-xl bg-sky-500/20 text-sky-200 border border-sky-400/30 hover:bg-sky-500/30 transition" id="saveNote">Save</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="notesGrid">

</div>
</div>
</section>

<section className="border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden fade-in fade-in-delay-2 hover:border-white/20 transition-colors duration-300 bg-white/5 backdrop-blur-sm">
<h2 className="text-lg font-medium mb-6 font-geist">Tasks</h2>
<div className="flex items-center gap-3">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-violet-400/40 focus:border-white/20" id="taskInput" placeholder="Capture a task..." type="text"/>
<button className="px-4 py-2.5 rounded-xl bg-violet-500/20 text-violet-200 border border-violet-400/30 hover:bg-violet-500/30 transition" id="addTask">Add</button>
</div>
<div className="mt-5 border-t border-white/10 pt-5">
<ul className="space-y-2.5" id="tasksList">

</ul>
</div>
<div className="mt-5 flex items-center justify-between text-xs text-white/60">
<span id="tasksStats">0 open • 0 done</span>
<button className="text-white/60 hover:text-white/90 underline underline-offset-4" id="clearDone">Clear completed</button>
</div>
</section>

<section className="border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden fade-in fade-in-delay-3 hover:border-white/20 transition-colors duration-300 bg-white/5 backdrop-blur-sm">
<h2 className="text-lg font-medium mb-6 font-geist">Productivity Modes</h2>
<div className="flex flex-wrap gap-6">
<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-cyan-300/20 to-cyan-500/10" data-mode="Deep Work">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-cyan-300" data-lucide="focus" strokeWidth="1.5"></i>
</div>
</button>
<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-amber-300/20 to-amber-500/10" data-mode="Meeting">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-amber-300" data-lucide="users" strokeWidth="1.5"></i>
</div>
</button>
<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-emerald-300/20 to-emerald-500/10" data-mode="Break">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-emerald-300" data-lucide="cup-soda" strokeWidth="1.5"></i>
</div>
</button>
<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-fuchsia-300/20 to-fuchsia-500/10" data-mode="Admin">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-fuchsia-300" data-lucide="inbox" strokeWidth="1.5"></i>
</div>
</button>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-2xl border border-white/10 p-4 bg-white/5">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-white/60">Active mode</p>
<p className="text-base font-semibold tracking-tight font-geist mt-1" id="activeMode">None</p>
</div>
<span className="text-[10px] px-2 py-1 rounded-full border border-white/15 text-white/70" id="modeBadge">—</span>
</div>
<div className="mt-4 flex items-center gap-3">
<div className="text-3xl font-semibold tracking-tight" id="timer">00:00</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-1" id="startTimer">
<i className="w-4 h-4" data-lucide="play" strokeWidth="1.5"></i><span className="text-sm">Start</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-1" id="pauseTimer">
<i className="w-4 h-4" data-lucide="pause" strokeWidth="1.5"></i><span className="text-sm">Pause</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-1" id="resetTimer">
<i className="w-4 h-4" data-lucide="rotate-ccw" strokeWidth="1.5"></i><span className="text-sm">Reset</span>
</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 p-4 bg-white/5">
<p className="text-xs text-white/60">Weekly focus</p>
<div className="mt-3">
<div className="w-full h-24"><canvas id="focusChart"></canvas></div>
</div>
</div>
</div>
</section>

<section className="border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden fade-in fade-in-delay-4 hover:border-white/20 transition-colors duration-300 bg-white/5 backdrop-blur-sm">
<h2 className="text-lg font-medium mb-6 font-geist">AI Command Center</h2>
<div className="flex flex-wrap gap-6">
<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-indigo-300/20 to-indigo-500/10" data-ai="Summarize note">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-indigo-300" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
</button>
<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-sky-300/20 to-sky-500/10" data-ai="Draft email">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-sky-300" data-lucide="mail" strokeWidth="1.5"></i>
</div>
</button>
<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-rose-300/20 to-rose-500/10" data-ai="Create outline">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-rose-300" data-lucide="list-todo" strokeWidth="1.5"></i>
</div>
</button>
<button className="diamond w-20 h-20 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 rounded-xl bg-gradient-to-br from-emerald-300/20 to-emerald-500/10" data-ai="Brainstorm ideas">
<div className="-rotate-45 w-full h-full flex items-center justify-center">
<i className="w-6 h-6 text-emerald-300" data-lucide="bot" strokeWidth="1.5"></i>
</div>
</button>
</div>

<div className="mt-7 flex items-center gap-3">
<div className="flex-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
<i className="w-4 h-4 text-white/60" data-lucide="terminal" strokeWidth="1.5"></i>
<input className="w-full bg-transparent outline-none text-sm placeholder:text-white/50" id="aiInput" placeholder="Type a command (e.g., Summarize the latest note)" type="text"/>
</div>
<button className="px-4 py-2.5 rounded-xl bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 hover:bg-indigo-500/30 transition flex items-center gap-2" id="runAI">
<i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i><span>Run</span>
</button>
</div>

<div className="mt-5 rounded-2xl border border-white/10 p-4 bg-white/5 min-h-[88px]">
<p className="text-sm text-white/80" id="aiOutput">Results will appear here.</p>
</div>
</section>
</div>
</main>
<footer className="fade-in fade-in-delay-4 text-sm text-gray-400 font-geist mt-16 mb-10 relative z-10">
    © 2025 Command Center. All rights reserved.
  </footer>



    </>
  );
}
