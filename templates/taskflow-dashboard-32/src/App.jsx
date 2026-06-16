import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State Management
        const state = {
            isAuthenticated: false,
            user: { name: 'Alex', email: 'alex@example.com' },
            activeTab: 'inbox',
            todos: [
                { id: 1, text: "Review quarterly design system", completed: false, category: 'Work' },
                { id: 2, text: "Sync with engineering team", completed: true, category: 'Work' },
                { id: 3, text: "Update documentation", completed: false, category: 'Project A' },
            ]
        };

        const app = document.getElementById('app');

        // Utils
        const cn = (...classes) => classes.filter(Boolean).join(' ');

        // --- VIEWS ---

        // 1. Login View
        function renderLogin() {
            app.innerHTML = `
                <div class="flex-1 flex flex-col items-center justify-center p-6 fade-in">
                    <div class="w-full max-w-[360px]">
                        <div class="mb-8 text-center">
                            <div class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 text-white mb-6 shadow-lg shadow-gray-200">
                                <span class="iconify" data-icon="lucide:layers" data-width="20"></span>
                            </div>
                            <h1 class="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Welcome back</h1>
                            <p class="text-sm text-gray-500">Enter your credentials to access your workspace.</p>
                        </div>

                        <form onsubmit="handleLogin(event)" class="space-y-4">
                            <div class="space-y-1.5">
                                <label class="text-xs font-medium text-gray-700 ml-1">Email address</label>
                                <input type="email" value="alex@example.com" class="w-full h-10 px-3 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all" placeholder="name@company.com">
                            </div>
                            <div class="space-y-1.5">
                                <label class="text-xs font-medium text-gray-700 ml-1">Password</label>
                                <input type="password" value="password" class="w-full h-10 px-3 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all" placeholder="••••••••">
                            </div>
                            
                            <button type="submit" class="w-full h-10 mt-2 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-md shadow-sm transition-colors flex items-center justify-center gap-2 group">
                                <span>Sign In</span>
                                <span class="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
                            </button>
                        </form>

                        <div class="mt-8 text-center">
                            <a href="#" class="text-xs text-gray-500 hover:text-gray-900 transition-colors">Forgot your password?</a>
                        </div>
                    </div>
                    
                    <div class="absolute bottom-6 text-center w-full">
                        <p class="text-[10px] text-gray-400 font-medium tracking-tight uppercase">Protected by 256-bit encryption</p>
                    </div>
                </div>
            `;
        }

        // 2. Dashboard View
        function renderDashboard() {
            const activeTodos = state.todos.filter(t => !t.completed);
            const completedTodos = state.todos.filter(t => t.completed);

            app.innerHTML = `
                <div class="flex h-full bg-white fade-in">
                    <!-- Sidebar -->
                    <aside class="w-[240px] bg-gray-50/50 border-r border-gray-100 flex flex-col hidden md:flex">
                        <div class="p-4 h-14 flex items-center border-b border-transparent">
                            <div class="flex items-center gap-2 text-gray-900 font-semibold tracking-tight">
                                <span class="iconify" data-icon="lucide:layers" data-width="18"></span>
                                <span>TaskFlow</span>
                            </div>
                        </div>

                        <div class="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
                            <!-- Navigation -->
                            <div class="space-y-0.5">
                                ${renderNavItem('inbox', 'Inbox', 'lucide:inbox')}
                                ${renderNavItem('today', 'Today', 'lucide:calendar')}
                                ${renderNavItem('upcoming', 'Upcoming', 'lucide:calendar-days')}
                            </div>

                            <!-- Projects -->
                            <div>
                                <h3 class="px-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-2">Projects</h3>
                                <div class="space-y-0.5">
                                    ${renderProjectItem('Design System')}
                                    ${renderProjectItem('Marketing')}
                                    ${renderProjectItem('Engineering')}
                                </div>
                            </div>
                        </div>

                        <!-- User Profile -->
                        <div class="p-3 border-t border-gray-100">
                            <button onclick="handleLogout()" class="flex items-center gap-3 w-full p-2 rounded-md hover:bg-gray-100 transition-colors text-left group">
                                <div class="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">
                                    AL
                                </div>
                                <div class="flex-1 overflow-hidden">
                                    <p class="text-xs font-medium text-gray-900 truncate">${state.user.name}</p>
                                    <p class="text-[10px] text-gray-500 truncate">Log out</p>
                                </div>
                                <span class="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:log-out" data-width="14"></span>
                            </button>
                        </div>
                    </aside>

                    <!-- Main Content -->
                    <main class="flex-1 flex flex-col min-w-0 bg-white">
                        <!-- Mobile Header -->
                        <header class="h-14 border-b border-gray-100 flex items-center justify-between px-4 md:hidden">
                            <span class="font-semibold tracking-tight">TaskFlow</span>
                            <button class="text-gray-500"><span class="iconify" data-icon="lucide:menu" data-width="20"></span></button>
                        </header>

                        <div class="flex-1 overflow-y-auto">
                            <div class="max-w-3xl mx-auto w-full px-4 md:px-12 py-8 md:py-12">
                                
                                <!-- View Header -->
                                <div class="mb-8 flex items-center justify-between group">
                                    <div>
                                        <h1 class="text-2xl font-semibold text-gray-900 tracking-tight mb-1">Inbox</h1>
                                        <p class="text-sm text-gray-500">${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                                    </div>
                                    <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button class="p-1.5 text-gray-400 hover:text-gray-900 transition-colors rounded hover:bg-gray-100">
                                            <span class="iconify" data-icon="lucide:sliders-horizontal" data-width="16"></span>
                                        </button>
                                    </div>
                                </div>

                                <!-- Add Task Input -->
                                <div class="relative group mb-8">
                                    <div class="absolute top-3 left-3 text-gray-400">
                                        <span class="iconify" data-icon="lucide:plus" data-width="18"></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        id="new-task-input"
                                        onkeydown="if(event.key === 'Enter') handleAddTask(this.value)"
                                        class="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-transparent focus:border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-4 focus:ring-gray-50 placeholder:text-gray-500 transition-all"
                                        placeholder="Add a task..."
                                    >
                                    <div class="absolute top-2.5 right-3 hidden group-focus-within:block">
                                        <kbd class="hidden sm:inline-block px-1.5 py-0.5 border border-gray-200 rounded text-[10px] font-medium text-gray-400 bg-white shadow-sm">Enter</kbd>
                                    </div>
                                </div>

                                <!-- Todo List -->
                                <div class="space-y-1">
                                    ${activeTodos.map(todo => renderTodoItem(todo)).join('')}
                                </div>

                                <!-- Completed Toggle -->
                                ${completedTodos.length > 0 ? `
                                    <div class="mt-8 pt-8 border-t border-gray-50">
                                        <h4 class="text-xs font-medium text-gray-400 mb-4 ml-2">Completed</h4>
                                        <div class="space-y-1 opacity-60">
                                            ${completedTodos.map(todo => renderTodoItem(todo)).join('')}
                                        </div>
                                    </div>
                                ` : ''}

                                <!-- Empty State -->
                                ${state.todos.length === 0 ? `
                                    <div class="py-20 text-center">
                                        <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                            <span class="iconify" data-icon="lucide:check" data-width="20"></span>
                                        </div>
                                        <p class="text-sm text-gray-900 font-medium">All tasks completed</p>
                                        <p class="text-xs text-gray-500 mt-1">Enjoy your day off.</p>
                                    </div>
                                ` : ''}

                            </div>
                        </div>
                    </main>
                </div>
            `;
            
            // Re-focus input if it was just used (rudimentary preservation)
            setTimeout(() => {
                const input = document.getElementById('new-task-input');
                if(input && state.justAdded) {
                   input.focus();
                   state.justAdded = false;
                }
            }, 0);
        }

        // --- COMPONENTS ---

        function renderNavItem(id, label, icon) {
            const active = state.activeTab === id;
            return `
                <button onclick="state.activeTab = '${id}'; renderDashboard()" class="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm transition-all ${active ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}">
                    <span class="iconify ${active ? 'text-gray-900' : 'text-gray-400'}" data-icon="${icon}" data-width="16"></span>
                    <span class="font-medium">${label}</span>
                </button>
            `;
        }

        function renderProjectItem(name) {
            return `
                <button class="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors group">
                    <span class="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-gray-900 transition-colors"></span>
                    <span>${name}</span>
                </button>
            `;
        }

        function renderTodoItem(todo) {
            return `
                <div class="group flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-default relative">
                    <button 
                        onclick="toggleTodo(${todo.id})"
                        class="mt-0.5 flex-shrink-0 w-4 h-4 rounded border ${todo.completed ? 'bg-gray-900 border-gray-900 checked' : 'bg-white border-gray-300 hover:border-gray-400'} flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-1"
                    >
                        <span class="iconify text-white check-icon" data-icon="lucide:check" data-width="10" stroke-width="3"></span>
                    </button>
                    
                    <div class="flex-1 min-w-0 pt-0.5">
                        <p class="text-sm text-gray-900 leading-tight ${todo.completed ? 'line-through text-gray-400' : ''}">${todo.text}</p>
                        ${todo.category && !todo.completed ? `<span class="inline-block mt-1.5 text-[10px] text-gray-400 border border-gray-100 px-1.5 py-0.5 rounded bg-white">${todo.category}</span>` : ''}
                    </div>

                    <div class="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                        <button class="p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors" title="Edit">
                            <span class="iconify" data-icon="lucide:pencil" data-width="14"></span>
                        </button>
                        <button onclick="deleteTodo(${todo.id})" class="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Delete">
                            <span class="iconify" data-icon="lucide:trash" data-width="14"></span>
                        </button>
                    </div>
                </div>
            `;
        }


        // --- LOGIC ---

        function handleLogin(e) {
            if(e) e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="16"></span>`;
            
            setTimeout(() => {
                state.isAuthenticated = true;
                renderDashboard();
            }, 800);
        }

        function handleLogout() {
            state.isAuthenticated = false;
            renderLogin();
        }

        function handleAddTask(text) {
            if (!text.trim()) return;
            const newTodo = {
                id: Date.now(),
                text: text,
                completed: false,
                category: 'Inbox'
            };
            state.todos.unshift(newTodo); // Add to top
            state.justAdded = true;
            renderDashboard();
            // Focus is handled in renderDashboard
        }

        function toggleTodo(id) {
            const todo = state.todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                renderDashboard();
            }
        }

        function deleteTodo(id) {
            state.todos = state.todos.filter(t => t.id !== id);
            renderDashboard();
        }

        // Init
        renderLogin();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="h-screen w-full flex flex-col relative overflow-hidden" id="app" style={{}}>
<div className="flex-1 flex flex-col fade-in pt-6 pr-6 pb-6 pl-6 items-center justify-center">
<div className="w-full max-w-[360px]">
<div className="mb-8 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 text-white mb-6 shadow-lg shadow-gray-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Welcome back</h1>
<p className="text-sm text-gray-500">Enter your credentials to access your workspace.</p>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700 ml-1">Email address</label>
<input className="w-full h-10 px-3 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all" placeholder="name@company.com" type="email" value="alex@example.com"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700 ml-1">Password</label>
<input className="w-full h-10 px-3 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all" placeholder="••••••••" type="password" value="password"/>
</div>
<button className="w-full h-10 mt-2 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-md shadow-sm transition-colors flex items-center justify-center gap-2 group" type="submit">
<span>Sign In</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
<div className="mt-8 text-center">
<a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Forgot your password?</a>
</div>
</div>
<div className="absolute bottom-6 text-center w-full">
<p className="text-[10px] text-gray-400 font-medium tracking-tight uppercase">Protected by 256-bit encryption</p>
</div>
</div>
</div>


    </>
  );
}
