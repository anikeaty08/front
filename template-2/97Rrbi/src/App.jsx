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
      
    // App state
    let tasks = [
      { text: 'Do more work', done: false },
      { text: 'Do more work', done: false },
      { text: 'Do more work', done: false },
    ];
    let archive = [
      { text: 'Do more work', done: true },
      { text: 'Do more work', done: true },
      { text: 'Do more work', done: true },
    ];
    let archiveOpen = true;

    // Elements
    const taskList = document.getElementById('task-list');
    const archiveList = document.getElementById('archive-list');
    const archiveSection = document.getElementById('archive-section');
    const toggleArchive = document.getElementById('toggle-archive');
    const archiveChevron = document.getElementById('archive-chevron');
    const addBtn = document.getElementById('add-btn');
    const modalBg = document.getElementById('modal-bg');
    const addForm = document.getElementById('add-form');
    const newTaskInput = document.getElementById('new-task-input');
    const cancelBtn = document.getElementById('cancel-btn');

    // Render tasks
    function renderTasks() {
      // Active
      taskList.innerHTML = '';
      tasks.forEach((task, idx) => {
        const node = document.createElement('div');
        node.className = 'flex items-center justify-between bg-neutral-900 rounded-xl px-4 py-3';
        node.innerHTML = `
          <div class="flex items-center gap-3 truncate">
            <span class="text-2xl">🚀</span>
            <span class="text-white text-base font-medium truncate">${task.text}</span>
          </div>
          <button aria-label="Mark as complete" class="flex items-center justify-center w-7 h-7 rounded-full border border-white" style="outline:none">
            <span class="block w-5 h-5"></span>
          </button>
        `;
        // Checkbox click
        node.querySelector('button').onclick = () => {
          archive.unshift({...task, done:true});
          tasks.splice(idx,1);
          renderTasks();
        };
        taskList.appendChild(node);
      });
      // Archive
      archiveList.innerHTML = '';
      archive.forEach((task, idx) => {
        const node = document.createElement('div');
        node.className = 'flex items-center justify-between bg-neutral-900 rounded-xl px-4 py-3';
        node.innerHTML = `
          <div class="flex items-center gap-3 truncate">
            <span class="text-2xl">🚀</span>
            <span class="text-neutral-400 text-base font-medium line-through truncate">${task.text}</span>
          </div>
          <button aria-label="Unarchive" class="flex items-center justify-center w-7 h-7 rounded-full bg-neutral-700 border border-neutral-700" style="outline:none">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </button>
        `;
        node.querySelector('button').onclick = () => {
          tasks.unshift({...task, done: false});
          archive.splice(idx,1);
          renderTasks();
        };
        archiveList.appendChild(node);
      });

      // Archive section visibility
      archiveList.parentElement.classList[
        archive.length ? 'remove' : 'add'
      ]('opacity-60','pointer-events-none');
      archiveList.style.display = archiveOpen ? 'flex' : 'none';
      archiveChevron.style.transform = archiveOpen ? 'rotate(0deg)' : 'rotate(-90deg)';
    }

    // Events
    toggleArchive.onclick = () => {
      archiveOpen = !archiveOpen;
      renderTasks();
    };

    // Add task modal
    addBtn.onclick = () => {
      modalBg.classList.remove('hidden');
      newTaskInput.value = "";
      setTimeout(() => newTaskInput.focus(), 100);
    };
    cancelBtn.onclick = () => modalBg.classList.add('hidden');

    addForm.onsubmit = (e) => {
      e.preventDefault();
      const val = newTaskInput.value.trim();
      if(val) {
        tasks.unshift({text:val, done:false});
        modalBg.classList.add('hidden');
        renderTasks();
      }
    };
    // ESC closes modal
    window.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') modalBg.classList.add('hidden');
      // Quick add with Enter if modal is open and not focused
      if(modalBg && !modalBg.classList.contains('hidden') && e.key === 'Enter' && document.activeElement === newTaskInput) addForm.onsubmit(e);
    });
    modalBg.addEventListener('click', e => { if(e.target === modalBg) modalBg.classList.add('hidden') });

    // Initial render
    renderTasks();
  
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
      

<div className="flex justify-between items-center pt-8 px-6 pb-2">
<h1 className="text-4xl font-extrabold text-white tracking-tight rounded-xl">Task</h1>
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center">
<span className="text-white text-2xl">😊</span>
</div>
</div>

<div className="flex-1 px-6 pb-32" id="main-content">

<div className="flex flex-col gap-3 mt-4" id="task-list"></div>

<div className="mt-8" id="archive-section">
<button aria-expanded="true" className="flex items-center gap-2 focus:outline-none w-full" id="toggle-archive">
<span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
<svg className="mx-auto" fill="none" height="18" viewBox="0 0 20 20" width="18" xmlns="http://www.w3.org/2000/svg">
<rect fill="#fff" height="6" rx="2" width="10" x="5" y="9"></rect>
<rect fill="#fff" height="4" rx="1" width="6" x="7" y="3"></rect>
</svg>
</span>
<span className="text-white font-semibold text-lg">Archive</span>
<svg className="ml-1 w-4 h-4 text-white transition-transform duration-150" fill="none" id="archive-chevron" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
</button>
<div className="flex flex-col gap-3 mt-4" id="archive-list"></div>
</div>
</div>

<button aria-label="Add task" className="fixed bottom-6 right-6 bg-blue-600 w-16 h-16 rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform duration-75 focus:outline-none" id="add-btn">
<svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
<path d="M12 5v14M5 12h14" strokeLinecap="round"></path>
</svg>
</button>

<div className="fixed inset-0 z-20 flex items-end lg:items-center justify-center bg-black bg-opacity-60 hidden" id="modal-bg">
<form className="bg-neutral-900 rounded-2xl px-6 py-5 mb-6 drop-shadow-lg w-full max-w-sm mx-auto flex flex-col gap-5" id="add-form">
<label className="text-neutral-300 text-lg font-semibold">New Task</label>
<input autocomplete="off" className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white focus:outline-none" id="new-task-input" maxlength="60" placeholder="What needs to be done?" required />
<div className="flex gap-3 justify-end">
<button className="bg-neutral-700 text-neutral-300 px-4 py-2 rounded-lg font-semibold hover:bg-neutral-600" id="cancel-btn" type="button">Cancel</button>
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700" type="submit">Add</button>
</div>
</form>
</div>


    </>
  );
}
