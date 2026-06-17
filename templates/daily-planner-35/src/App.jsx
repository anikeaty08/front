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



        // Initial State
        const state = {
            tasks: [
                { id: 1, title: "Review Q4 Product Roadmap", section: "priority", completed: false, tags: ["Product"], time: "1h", icon: "slack" },
                { id: 2, title: "Update billing components in UI library", section: "priority", completed: false, tags: ["Eng"], time: "2h", avatar: "L" },
                { id: 3, title: "Sync with Design team", section: "afternoon", completed: false, time: "30m", icon: "mail" },
                { id: 4, title: "Write monthly summary report", section: "afternoon", completed: false, tags: ["Personal"], time: "45m" },
                { id: 5, title: "Morning Standup", section: "priority", completed: true, time: "9:30 AM" }
            ]
        };

        // Render Functions
        function renderApp() {
            const priorityList = document.getElementById('priority-list');
            const afternoonList = document.getElementById('afternoon-list');
            const completedList = document.getElementById('completed-list');
            const taskCounter = document.getElementById('task-counter');

            // Clear lists
            priorityList.innerHTML = '';
            afternoonList.innerHTML = '';
            completedList.innerHTML = '';

            // Counters
            let activeCount = 0;

            state.tasks.forEach(task => {
                const taskElement = createTaskElement(task);
                
                if (task.completed) {
                    completedList.appendChild(taskElement);
                } else {
                    activeCount++;
                    if (task.section === 'priority') {
                        priorityList.appendChild(taskElement);
                    } else {
                        afternoonList.appendChild(taskElement);
                    }
                }
            });

            taskCounter.textContent = `${activeCount} tasks left`;
            lucide.createIcons({ attrs: { "stroke-width": 1.5, "class": "lucide" } });
        }

        function createTaskElement(task) {
            const div = document.createElement('div');
            div.className = `task-item group flex items-center gap-3 p-3 bg-white rounded-lg border ${task.completed ? 'border-transparent' : 'border-zinc-100 hover:border-zinc-200 hover:shadow-sm'} transition-all cursor-default relative`;
            
            // Build Tags HTML
            let tagsHtml = '';
            if (task.tags) {
                task.tags.forEach(tag => {
                    const colorMap = { 'Product': 'orange', 'Eng': 'blue', 'Personal': 'emerald' };
                    const color = colorMap[tag] || 'zinc';
                    tagsHtml += `<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-${color}-50 text-${color}-600 border border-${color}-100">${tag}</span>`;
                });
            }

            // Build Icon HTML
            let iconHtml = '';
            if (task.icon === 'slack') iconHtml = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" class="w-3.5 h-3.5 opacity-60 grayscale hover:grayscale-0 transition">`;
            if (task.icon === 'mail') iconHtml = `<div class="w-3.5 h-3.5 rounded text-[8px] flex items-center justify-center"><i data-lucide="mail" class="w-3 h-3 text-zinc-400"></i></div>`;
            if (task.avatar) iconHtml = `<div class="w-3.5 h-3.5 rounded-full bg-zinc-800 text-[8px] text-white flex items-center justify-center font-bold">${task.avatar}</div>`;

            div.innerHTML = `
                <div class="opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing">
                    <i data-lucide="grip-vertical" class="w-3 h-3 text-zinc-300"></i>
                </div>
                <label class="custom-checkbox relative flex items-center cursor-pointer">
                    <input type="checkbox" class="peer sr-only" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
                    <div class="w-4 h-4 border border-zinc-300 rounded hover:border-zinc-400 bg-white transition-colors flex items-center justify-center">
                        <svg class="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                </label>

                <div class="flex-1 min-w-0">
                    <span class="text-sm ${task.completed ? 'text-zinc-400 line-through' : 'text-zinc-900'} font-normal truncate block">${task.title}</span>
                </div>

                <div class="${task.completed ? 'hidden' : 'flex'} items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    ${tagsHtml}
                    ${task.time ? `
                    <div class="flex items-center gap-1 text-zinc-400">
                        <i data-lucide="clock" class="w-3 h-3"></i>
                        <span class="text-xs">${task.time}</span>
                    </div>` : ''}
                    ${iconHtml}
                </div>
                
                <div class="${task.completed ? 'block' : 'hidden'} text-xs text-zinc-300">
                    Done
                </div>

                <!-- Delete Button -->
                 <button onclick="deleteTask(${task.id})" class="absolute right-2 opacity-0 group-hover:opacity-100 hover:text-red-500 text-zinc-300 p-1">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
            `;
            return div;
        }

        // Logic Functions
        function toggleTask(id) {
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                task.completed = !task.completed;
                renderApp();
            }
        }

        function deleteTask(id) {
            state.tasks = state.tasks.filter(t => t.id !== id);
            renderApp();
        }

        function addTask(title) {
            const newTask = {
                id: Date.now(),
                title: title,
                section: "priority",
                completed: false,
                time: null
            };
            state.tasks.unshift(newTask);
            renderApp();
        }

        // Event Listeners
        document.getElementById('new-task-input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter' && this.value.trim() !== "") {
                addTask(this.value.trim());
                this.value = "";
            }
        });

        // Initialize
        renderApp();
    
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
      

<aside className="w-64 h-full flex flex-col border-r border-zinc-100 bg-zinc-50/50 hidden md:flex flex-shrink-0">
<div className="h-14 flex items-center px-5">
<span className="text-sm font-semibold tracking-tighter text-zinc-900">PLAN.</span>
</div>
<nav className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-1.5 rounded-md bg-white shadow-sm border border-zinc-200 text-zinc-900 text-sm font-medium" href="#">
<i className="w-4 h-4 text-zinc-500" data-lucide="calendar"></i>
                    Today
                </a>
<a className="flex items-center gap-3 px-3 py-1.5 rounded-md hover:bg-zinc-100 text-zinc-500 text-sm font-normal transition-colors" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="inbox"></i>
                    Inbox
                </a>
<a className="flex items-center gap-3 px-3 py-1.5 rounded-md hover:bg-zinc-100 text-zinc-500 text-sm font-normal transition-colors" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="search"></i>
                    Search
                </a>
</div>

<div className="px-3">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-400">OCTOBER 2023</span>
<div className="flex gap-1">
<button className="hover:bg-zinc-200 rounded p-0.5"><i className="w-3 h-3 text-zinc-400" data-lucide="chevron-left"></i></button>
<button className="hover:bg-zinc-200 rounded p-0.5"><i className="w-3 h-3 text-zinc-400" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-xs">
<span className="text-zinc-300 font-normal">M</span><span className="text-zinc-300 font-normal">T</span><span className="text-zinc-300 font-normal">W</span><span className="text-zinc-300 font-normal">T</span><span className="text-zinc-300 font-normal">F</span><span className="text-zinc-300 font-normal">S</span><span className="text-zinc-300 font-normal">S</span>
<span className="text-zinc-400 font-light py-1">25</span><span className="text-zinc-400 font-light py-1">26</span><span className="text-zinc-400 font-light py-1">27</span><span className="text-zinc-400 font-light py-1">28</span><span className="text-zinc-400 font-light py-1">29</span><span className="text-zinc-400 font-light py-1">30</span><span className="text-zinc-400 font-light py-1">1</span>
<span className="text-zinc-400 font-light py-1">2</span><span className="text-zinc-400 font-light py-1">3</span><span className="text-zinc-900 font-medium bg-white shadow-sm border border-zinc-200 rounded-full py-1">4</span><span className="text-zinc-600 font-light py-1">5</span><span className="text-zinc-600 font-light py-1">6</span><span className="text-zinc-600 font-light py-1">7</span><span className="text-zinc-600 font-light py-1">8</span>
</div>
</div>
<div className="px-1">
<div className="flex items-center justify-between px-2 mb-2">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Channels</span>
<i className="w-3 h-3 text-zinc-400 cursor-pointer hover:text-zinc-600" data-lucide="plus"></i>
</div>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-zinc-100 group transition-colors">
<span className="w-2 h-2 rounded-full bg-orange-400/80"></span>
<span className="text-sm text-zinc-600 font-normal group-hover:text-zinc-900">Product</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-zinc-100 group transition-colors">
<span className="w-2 h-2 rounded-full bg-blue-400/80"></span>
<span className="text-sm text-zinc-600 font-normal group-hover:text-zinc-900">Engineering</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-zinc-100 group transition-colors">
<span className="w-2 h-2 rounded-full bg-emerald-400/80"></span>
<span className="text-sm text-zinc-600 font-normal group-hover:text-zinc-900">Personal</span>
</button>
</div>
</div>
</nav>
<div className="p-3 border-t border-zinc-100">
<button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-zinc-100 transition-colors">
<div className="w-6 h-6 rounded bg-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-500">JP</div>
<span className="text-sm font-medium text-zinc-700">James P.</span>
<i className="w-3 h-3 text-zinc-400 ml-auto" data-lucide="settings"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">
<header className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 md:px-8 flex-shrink-0">
<div className="flex items-baseline gap-3">
<h1 className="text-xl font-medium tracking-tight text-zinc-900">Wednesday, Oct 4</h1>
<span className="text-sm text-zinc-400 font-light">Week 40</span>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-1.5 text-xs text-zinc-500 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
<span id="task-counter">Loading...</span>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-md hover:bg-zinc-800 transition shadow-sm hover:shadow">
<i className="w-3 h-3 fill-current" data-lucide="play"></i>
                    Focus Mode
                </button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-3xl mx-auto space-y-8">

<div className="group relative">
<div className="absolute left-4 top-3.5 text-zinc-400">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<input className="w-full bg-zinc-50/50 hover:bg-zinc-50 focus:bg-white text-zinc-900 placeholder-zinc-400 text-sm py-3.5 pl-12 pr-4 rounded-lg border border-transparent focus:border-zinc-200 focus:ring-4 focus:ring-zinc-50 transition-all outline-none font-normal shadow-sm" id="new-task-input" placeholder="Add a new task..." type="text"/>
<div className="absolute right-3 top-2.5 hidden group-focus-within:flex gap-2">
<span className="text-[10px] text-zinc-400 border border-zinc-200 bg-white px-1.5 py-1 rounded">Enter</span>
</div>
</div>

<section>
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Priorities</h3>
<div className="space-y-1" id="priority-list">

</div>
</section>

<section>
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Afternoon</h3>
<div className="space-y-1" id="afternoon-list">

</div>
</section>

<section className="opacity-60 hover:opacity-100 transition-opacity duration-300" id="completed-section">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Completed</h3>
<div className="space-y-1" id="completed-list">

</div>
</section>
</div>
</div>
</main>

<aside className="w-80 h-full border-l border-zinc-100 bg-white hidden lg:flex flex-col flex-shrink-0">
<div className="h-14 border-b border-zinc-100 flex items-center justify-between px-4">
<span className="text-xs font-medium text-zinc-500">SCHEDULE</span>
<button className="text-zinc-400 hover:text-zinc-600">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto relative">
<div className="absolute inset-0 pointer-events-none flex flex-col pt-4">

<div className="flex-1 border-t border-zinc-100/50" style={{minHeight: '60px'}}></div>
<div className="flex-1 border-t border-zinc-100/50" style={{minHeight: '60px'}}></div>
<div className="flex-1 border-t border-zinc-100/50" style={{minHeight: '60px'}}></div>
<div className="flex-1 border-t border-zinc-100/50" style={{minHeight: '60px'}}></div>
<div className="flex-1 border-t border-zinc-100/50" style={{minHeight: '60px'}}></div>
<div className="flex-1 border-t border-zinc-100/50" style={{minHeight: '60px'}}></div>
<div className="flex-1 border-t border-zinc-100/50" style={{minHeight: '60px'}}></div>
<div className="flex-1 border-t border-zinc-100/50" style={{minHeight: '60px'}}></div>
</div>
<div className="relative min-h-full pb-10">

<div className="flex h-[60px] relative group">
<div className="w-12 text-[10px] text-zinc-400 font-light text-right pr-2 pt-1.5 -mt-3 bg-white z-10">9 AM</div>
<div className="flex-1 relative pt-1 pr-2 pl-1">
<div className="bg-zinc-50 border border-zinc-200 rounded p-1.5 h-full opacity-60">
<span className="text-xs text-zinc-500 font-medium line-through">Standup</span>
</div>
</div>
</div>

<div className="flex h-[120px] relative group">
<div className="w-12 text-[10px] text-zinc-400 font-light text-right pr-2 pt-1.5 -mt-3 bg-white z-10">10 AM</div>
<div className="flex-1 relative pt-1 pr-2 pl-1">
<div className="bg-indigo-50/50 border border-indigo-100 hover:border-indigo-200 rounded p-2 h-full cursor-pointer shadow-sm transition-all relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l"></div>
<span className="text-xs text-indigo-900 font-medium block pl-2">Review Roadmap</span>
<span className="text-[10px] text-indigo-400 pl-2 block mt-0.5">Focus • 2h</span>
</div>
</div>
</div>

<div className="flex h-[60px] relative group">
<div className="w-12 text-[10px] text-zinc-400 font-light text-right pr-2 pt-1.5 -mt-3 bg-white z-10">12 PM</div>
<div className="flex-1 relative pt-1 pr-2 pl-1">
<div className="border border-dashed border-zinc-200 rounded h-full flex items-center justify-center">
<span className="text-[10px] text-zinc-400 font-light">Break</span>
</div>
</div>
</div>

<div className="flex h-[120px] relative group">
<div className="w-12 text-[10px] text-zinc-400 font-light text-right pr-2 pt-1.5 -mt-3 bg-white z-10">1 PM</div>
<div className="flex-1 relative pt-1 pr-2 pl-1">
<div className="bg-blue-50/50 border border-blue-100 hover:border-blue-200 rounded p-2 h-full cursor-pointer shadow-sm transition-all relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l"></div>
<span className="text-xs text-blue-900 font-medium block pl-2">Billing UI Updates</span>
<span className="text-[10px] text-blue-400 pl-2 block mt-0.5">Eng • 2h</span>
</div>
</div>
</div>

<div className="flex h-[60px] relative group">
<div className="w-12 text-[10px] text-zinc-400 font-light text-right pr-2 pt-1.5 -mt-3 bg-white z-10">3 PM</div>
<div className="flex-1 relative pt-1 pr-2 pl-1">
<div className="bg-white border border-zinc-200 rounded p-2 h-full cursor-pointer shadow-sm transition-all relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-300 rounded-l"></div>
<span className="text-xs text-zinc-700 font-medium block pl-2">Sync Design</span>
<span className="text-[10px] text-zinc-400 pl-2 block mt-0.5">3:00 - 3:30</span>
</div>
</div>
</div>
<div className="absolute top-[340px] left-0 right-0 flex items-center z-20 pointer-events-none">
<div className="w-12 text-right pr-2">
<span className="text-[9px] font-bold text-red-500">1:45</span>
</div>
<div className="flex-1 h-px bg-red-500 relative">
<div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="h-12 border-t border-zinc-100 flex items-center justify-center">
<button className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-800 transition">
<i className="w-3.5 h-3.5" data-lucide="plus-circle"></i>
<span>Add Integration</span>
</button>
</div>
</aside>


    </>
  );
}
