import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
}
}
}
}
}



        // State
        let todos = [];
        const landingPage = document.getElementById('landing-page');
        const todoPage = document.getElementById('todo-page');
        const todoInput = document.getElementById('todo-input');
        const todoList = document.getElementById('todo-list');
        const emptyState = document.getElementById('empty-state');
        const taskCount = document.getElementById('task-count');
        const dateDisplay = document.getElementById('date-display');

        // Set Date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.innerText = new Date().toLocaleDateString('id-ID', options);

        // Navigation Logic
        function switchPage() {
            landingPage.classList.add('hidden');
            todoPage.classList.remove('hidden');
            todoPage.classList.add('fade-in');
            todoInput.focus();
        }

        // Core Functions
        function renderTodos() {
            todoList.innerHTML = '';
            
            if (todos.length === 0) {
                todoList.appendChild(emptyState);
                taskCount.innerText = '0';
                return;
            }

            taskCount.innerText = todos.filter(t => !t.completed).length;

            todos.forEach(todo => {
                const li = document.createElement('li');
                li.className = `group flex items-center gap-3 p-3 bg-white border border-zinc-200 rounded-xl transition-all hover:border-zinc-300 hover:shadow-sm ${todo.completed ? 'bg-zinc-50/50' : ''}`;
                
                // Checkbox Logic
                const checkboxIcon = todo.completed ? 'solar:check-circle-bold' : 'solar:circle-linear';
                const checkboxColor = todo.completed ? 'text-zinc-900' : 'text-zinc-300 group-hover:text-zinc-400';
                
                li.innerHTML = `
                    <button onclick="toggleTodo(${todo.id})" class="flex-shrink-0 focus:outline-none">
                        <iconify-icon icon="${checkboxIcon}" width="22" stroke-width="1.5" class="${checkboxColor} transition-colors"></iconify-icon>
                    </button>
                    
                    <span class="flex-1 text-sm ${todo.completed ? 'text-zinc-400 line-through decoration-zinc-300' : 'text-zinc-700'} truncate transition-all font-medium">
                        ${todo.text}
                    </span>

                    <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100">
                        <button onclick="editTodo(${todo.id})" class="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors" title="Edit">
                            <iconify-icon icon="solar:pen-linear" width="16" stroke-width="1.5"></iconify-icon>
                        </button>
                        <button onclick="deleteTodo(${todo.id})" class="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                            <iconify-icon icon="solar:trash-bin-trash-linear" width="16" stroke-width="1.5"></iconify-icon>
                        </button>
                    </div>
                `;
                todoList.appendChild(li);
            });
        }

        function addTodo() {
            const text = todoInput.value.trim();
            if (text) {
                const newTodo = {
                    id: Date.now(),
                    text: text,
                    completed: false
                };
                todos.unshift(newTodo); // Add to top
                todoInput.value = '';
                renderTodos();
            }
        }

        function toggleTodo(id) {
            todos = todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            // Optional: Move completed to bottom
            todos.sort((a, b) => a.completed - b.completed);
            renderTodos();
        }

        function deleteTodo(id) {
            todos = todos.filter(todo => todo.id !== id);
            renderTodos();
        }

        function editTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (!todo) return;

            // Simple prompt for edit (keeping code block single and clean without modal overhead)
            const newText = prompt("Edit tugas:", todo.text);
            if (newText !== null && newText.trim() !== "") {
                todos = todos.map(t => t.id === id ? { ...t, text: newText.trim() } : t);
                renderTodos();
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-50 to-zinc-50 opacity-100"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
</div>

<nav className="relative z-10 w-full max-w-2xl mx-auto px-6 py-8 flex justify-between items-center">
<div className="flex items-center gap-2 cursor-default select-none">
<div className="w-5 h-5 bg-zinc-900 rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="font-semibold tracking-tight text-sm text-zinc-900">TASKFLOW</span>
</div>
</nav>

<main className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 pb-20 fade-in" id="landing-page">
<div className="max-w-xl mx-auto text-center space-y-8">
<div className="space-y-4">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
                    Buat Todo List kamu<br/>hari ini.
                </h1>
<p className="text-lg text-zinc-500 font-normal max-w-md mx-auto leading-relaxed">
                    Organisir tugas harianmu dengan antarmuka yang bersih, cepat, dan fokus pada hal yang paling penting.
                </p>
</div>
<div className="pt-4">
<button className="group relative inline-flex items-center justify-center gap-2 h-12 px-8 bg-zinc-900 text-zinc-50 text-sm font-medium rounded-full hover:bg-zinc-800 transition-all duration-200 shadow-lg shadow-zinc-200 hover:shadow-xl hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900" onclick="switchPage()">
<span>Buat Todo List</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="pt-12 flex justify-center gap-8 opacity-40 grayscale">

<div className="flex gap-1 items-center">
<div className="w-2 h-2 rounded-full bg-zinc-400"></div>
<div className="w-16 h-2 rounded-full bg-zinc-200"></div>
</div>
<div className="flex gap-1 items-center">
<div className="w-2 h-2 rounded-full bg-zinc-400"></div>
<div className="w-10 h-2 rounded-full bg-zinc-200"></div>
</div>
</div>
</div>
</main>

<main className="hidden relative z-10 flex-1 flex-col items-center px-4 pt-4 pb-12 w-full max-w-2xl mx-auto" id="todo-page">

<div className="w-full mb-8 flex items-end justify-between border-b border-zinc-200 pb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Daftar Tugas</h2>
<p className="text-sm text-zinc-500 mt-1" id="date-display"></p>
</div>
<div className="text-xs font-medium text-zinc-400 bg-zinc-100 px-2 py-1 rounded border border-zinc-200/50">
<span id="task-count">0</span> Tugas
            </div>
</div>

<div className="w-full relative group mb-8">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-white h-14 pl-12 pr-14 rounded-xl border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:border-zinc-300 transition-all shadow-sm" id="todo-input" onkeypress="if(event.key === 'Enter') addTodo()" placeholder="Apa yang ingin dikerjakan?" type="text"/>
<button className="absolute right-2 top-2 bottom-2 aspect-square bg-zinc-900 text-white rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors" onclick="addTodo()">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="w-full flex-1 overflow-hidden flex flex-col">
<ul className="space-y-3 custom-scroll overflow-y-auto pr-1 pb-4 min-h-[300px]" id="todo-list">

<li className="flex flex-col items-center justify-center h-48 text-zinc-400 border border-dashed border-zinc-200 rounded-xl bg-zinc-50/50" id="empty-state">
<iconify-icon className="mb-3 opacity-50" icon="solar:notes-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-sm">Belum ada tugas hari ini</span>
</li>
</ul>
</div>
<button className="mt-8 text-xs text-zinc-400 hover:text-zinc-600 transition-colors flex items-center gap-1" onclick="location.reload()">
<iconify-icon icon="solar:arrow-left-linear" width="14"></iconify-icon>
            Kembali ke Beranda
        </button>
</main>


    </>
  );
}
