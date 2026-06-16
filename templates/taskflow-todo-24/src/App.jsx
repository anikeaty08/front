import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Application State
        let tasks = [
            {
                id: 1,
                name: "Complete project proposal",
                description: "Finish writing the Q4 project proposal and send it to the team for review",
                completed: false,
                priority: "high",
                project: "work",
                dueDate: new Date().toISOString().split('T')[0],
                tags: ["urgent", "review"],
                createdAt: new Date(Date.now() - 86400000)
            },
            {
                id: 2,
                name: "Buy groceries",
                description: "Milk, eggs, bread, vegetables, and fruits",
                completed: false,
                priority: "medium",
                project: "shopping",
                dueDate: new Date().toISOString().split('T')[0],
                tags: ["shopping", "food"],
                createdAt: new Date(Date.now() - 172800000)
            },
            {
                id: 3,
                name: "Update website design",
                description: "Review the new design mockups and provide feedback",
                completed: true,
                priority: "low",
                project: "work",
                dueDate: new Date(Date.now() - 86400000).toISOString().split('T')[0],
                tags: ["design", "feedback"],
                createdAt: new Date(Date.now() - 259200000)
            },
            {
                id: 4,
                name: "Schedule dentist appointment",
                description: "Call the dentist office to schedule a checkup",
                completed: false,
                priority: "medium",
                project: "personal",
                dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
                tags: ["health", "appointment"],
                createdAt: new Date(Date.now() - 345600000)
            },
            {
                id: 5,
                name: "Read new book",
                description: "Start reading 'Atomic Habits' by James Clear",
                completed: false,
                priority: "low",
                project: "personal",
                dueDate: new Date(Date.now() + 604800000).toISOString().split('T')[0],
                tags: ["learning", "personal-development"],
                createdAt: new Date(Date.now() - 432000000)
            }
        ];
        
        let currentFilter = 'all';
        let currentPriorityFilter = 'all';
        let currentProjectFilter = null;
        let currentSort = 'date';
        let isGridView = false;
        let taskToDelete = null;
        let editingTaskId = null;
        
        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            loadTasksFromStorage();
            renderTasks();
            updateStats();
            updateCounts();
            
            // Form submission
            document.getElementById('task-form').addEventListener('submit', function(e) {
                e.preventDefault();
                saveTask();
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('#user-menu') && !e.target.closest('button[onclick="toggleUserMenu()"]')) {
                    document.getElementById('user-menu').classList.add('hidden');
                }
                if (!e.target.closest('#sort-menu') && !e.target.closest('button[onclick="toggleSortMenu()"]')) {
                    document.getElementById('sort-menu').classList.add('hidden');
                }
                if (!e.target.closest('#priority-menu') && !e.target.closest('button[onclick="togglePriorityFilter()"]')) {
                    document.getElementById('priority-menu').classList.add('hidden');
                }
            });
            
            // Keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                // N - New task
                if (e.key === 'n' && !e.target.matches('input, textarea')) {
                    e.preventDefault();
                    openAddTaskModal();
                }
                // ESC - Close modal
                if (e.key === 'Escape') {
                    closeTaskModal();
                    closeDeleteModal();
                }
                // / - Focus search
                if (e.key === '/' && !e.target.matches('input, textarea')) {
                    e.preventDefault();
                    document.getElementById('search-input').focus();
                }
            });
        });
        
        // Local Storage Functions
        function saveTasksToStorage() {
            localStorage.setItem('taskflow_tasks', JSON.stringify(tasks));
        }
        
        function loadTasksFromStorage() {
            const stored = localStorage.getItem('taskflow_tasks');
            if (stored) {
                tasks = JSON.parse(stored);
            }
        }
        
        // Task Management Functions
        function saveTask() {
            const id = document.getElementById('task-id').value;
            const name = document.getElementById('task-name').value.trim();
            const description = document.getElementById('task-description').value.trim();
            const dueDate = document.getElementById('task-due-date').value;
            const priority = document.getElementById('task-priority').value;
            const project = document.getElementById('task-project').value;
            const tags = document.getElementById('task-tags').value.split(',').map(t => t.trim()).filter(t => t);
            
            if (!name) {
                showToast('Please enter a task name', 'error');
                return;
            }
            
            if (id) {
                // Edit existing task
                const task = tasks.find(t => t.id === parseInt(id));
                if (task) {
                    task.name = name;
                    task.description = description;
                    task.dueDate = dueDate;
                    task.priority = priority;
                    task.project = project;
                    task.tags = tags;
                    showToast('Task updated successfully');
                }
            } else {
                // Add new task
                const newTask = {
                    id: Date.now(),
                    name,
                    description,
                    completed: false,
                    priority,
                    project,
                    dueDate,
                    tags,
                    createdAt: new Date()
                };
                tasks.unshift(newTask);
                showToast('Task created successfully');
            }
            
            saveTasksToStorage();
            renderTasks();
            updateStats();
            updateCounts();
            closeTaskModal();
        }
        
        function toggleTaskComplete(id) {
            const task = tasks.find(t => t.id === id);
            if (task) {
                task.completed = !task.completed;
                saveTasksToStorage();
                renderTasks();
                updateStats();
                updateCounts();
                showToast(task.completed ? 'Task completed!' : 'Task marked as incomplete');
            }
        }
        
        function editTask(id) {
            editingTaskId = id;
            const task = tasks.find(t => t.id === id);
            if (task) {
                document.getElementById('modal-title').textContent = 'Edit Task';
                document.getElementById('task-id').value = task.id;
                document.getElementById('task-name').value = task.name;
                document.getElementById('task-description').value = task.description || '';
                document.getElementById('task-due-date').value = task.dueDate || '';
                document.getElementById('task-priority').value = task.priority;
                document.getElementById('task-project').value = task.project;
                document.getElementById('task-tags').value = task.tags.join(', ');
                document.getElementById('task-modal').classList.remove('hidden');
            }
        }
        
        function deleteTask(id) {
            taskToDelete = id;
            document.getElementById('delete-modal').classList.remove('hidden');
        }
        
        function confirmDelete() {
            if (taskToDelete) {
                tasks = tasks.filter(t => t.id !== taskToDelete);
                saveTasksToStorage();
                renderTasks();
                updateStats();
                updateCounts();
                closeDeleteModal();
                showToast('Task deleted successfully');
            }
        }
        
        function duplicateTask(id) {
            const task = tasks.find(t => t.id === id);
            if (task) {
                const newTask = {
                    ...task,
                    id: Date.now(),
                    name: task.name + ' (Copy)',
                    completed: false,
                    createdAt: new Date()
                };
                tasks.unshift(newTask);
                saveTasksToStorage();
                renderTasks();
                updateStats();
                updateCounts();
                showToast('Task duplicated successfully');
            }
        }
        
        // Filter and Sort Functions
        function filterTasks(filter) {
            currentFilter = filter;
            currentProjectFilter = null;
            
            // Update active filter button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
            
            // Update section title
            const titles = {
                'all': 'All Tasks',
                'today': 'Today',
                'upcoming': 'Upcoming',
                'completed': 'Completed'
            };
            document.getElementById('section-title').textContent = titles[filter];
            
            renderTasks();
        }
        
        function filterByProject(project) {
            currentProjectFilter = project;
            currentFilter = 'all';
            
            // Update section title
            document.getElementById('section-title').textContent = project.charAt(0).toUpperCase() + project.slice(1);
            
            // Update active filter button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            renderTasks();
        }
        
        function filterByPriority(priority) {
            currentPriorityFilter = priority;
            document.getElementById('priority-menu').classList.add('hidden');
            renderTasks();
        }
        
        function sortTasks(sortBy) {
            currentSort = sortBy;
            document.getElementById('sort-menu').classList.add('hidden');
            renderTasks();
        }
        
        function searchTasks() {
            renderTasks();
        }
        
        function getFilteredTasks() {
            let filtered = [...tasks];
            const today = new Date().toISOString().split('T')[0];
            const searchQuery = document.getElementById('search-input').value.toLowerCase();
            
            // Apply main filter
            switch(currentFilter) {
                case 'today':
                    filtered = filtered.filter(t => !t.completed && t.dueDate === today);
                    break;
                case 'upcoming':
                    filtered = filtered.filter(t => !t.completed && t.dueDate && t.dueDate > today);
                    break;
                case 'completed':
                    filtered = filtered.filter(t => t.completed);
                    break;
            }
            
            // Apply project filter
            if (currentProjectFilter) {
                filtered = filtered.filter(t => t.project === currentProjectFilter);
            }
            
            // Apply priority filter
            if (currentPriorityFilter !== 'all') {
                filtered = filtered.filter(t => t.priority === currentPriorityFilter);
            }
            
            // Apply search filter
            if (searchQuery) {
                filtered = filtered.filter(t => 
                    t.name.toLowerCase().includes(searchQuery) ||
                    (t.description && t.description.toLowerCase().includes(searchQuery)) ||
                    t.tags.some(tag => tag.toLowerCase().includes(searchQuery))
                );
            }
            
            // Apply sorting
            switch(currentSort) {
                case 'priority':
                    const priorityOrder = { high: 0, medium: 1, low: 2 };
                    filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
                    break;
                case 'name':
                    filtered.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'dueDate':
                    filtered.sort((a, b) => {
                        if (!a.dueDate) return 1;
                        if (!b.dueDate) return -1;
                        return new Date(a.dueDate) - new Date(b.dueDate);
                    });
                    break;
                default: // date created
                    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            }
            
            return filtered;
        }
        
        // Render Functions
        function renderTasks() {
            const container = document.getElementById('tasks-container');
            const emptyState = document.getElementById('empty-state');
            const filtered = getFilteredTasks();
            
            if (filtered.length === 0) {
                container.classList.add('hidden');
                emptyState.classList.remove('hidden');
                return;
            }
            
            container.classList.remove('hidden');
            emptyState.classList.add('hidden');
            
            container.innerHTML = filtered.map(task => {
                const priorityClass = `priority-${task.priority}`;
                const priorityColors = {
                    high: 'bg-red-50 text-red-700 border-red-200',
                    medium: 'bg-amber-50 text-amber-700 border-amber-200',
                    low: 'bg-green-50 text-green-700 border-green-200'
                };
                const projectColors = {
                    work: 'bg-blue-500',
                    personal: 'bg-green-500',
                    shopping: 'bg-purple-500'
                };
                
                const dueDateText = task.dueDate ? formatDueDate(task.dueDate) : 'No due date';
                const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;
                
                return `
                    <div class="task-item ${priorityClass} p-4 sm:p-6" data-task-id="${task.id}">
                        <div class="flex items-start gap-4">
                            <input 
                                type="checkbox" 
                                class="checkbox-custom mt-1 flex-shrink-0" 
                                ${task.completed ? 'checked' : ''} 
                                onchange="toggleTaskComplete(${task.id})"
                            >
                            <div class="flex-1 min-w-0">
                                <div class="flex items-start justify-between gap-4 mb-2">
                                    <h3 class="font-medium text-gray-900 ${task.completed ? 'task-completed' : ''}">${task.name}</h3>
                                    <div class="flex items-center gap-1 flex-shrink-0">
                                        <button onclick="editTask(${task.id})" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" title="Edit">
                                            <i data-lucide="pencil" class="w-4 h-4" style="stroke-width: 1.5;"></i>
                                        </button>
                                        <button onclick="duplicateTask(${task.id})" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" title="Duplicate">
                                            <i data-lucide="copy" class="w-4 h-4" style="stroke-width: 1.5;"></i>
                                        </button>
                                        <button onclick="deleteTask(${task.id})" class="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Delete">
                                            <i data-lucide="trash-2" class="w-4 h-4" style="stroke-width: 1.5;"></i>
                                        </button>
                                    </div>
                                </div>
                                ${task.description ? `<p class="text-sm text-gray-600 mb-3 ${task.completed ? 'task-completed' : ''}">${task.description}</p>` : ''}
                                <div class="flex flex-wrap items-center gap-2 text-xs">
                                    <span class="inline-flex items-center gap-1.5 px-2 py-1 ${priorityColors[task.priority]} border rounded-full font-medium">
                                        <div class="w-1.5 h-1.5 rounded-full ${task.priority === 'high' ? 'bg-red-500' : task.priority === 'medium' ? 'bg-amber-500' : 'bg-green-500'}"></div>
                                        ${task.priority}
                                    </span>
                                    <span class="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                        <div class="w-2 h-2 rounded-full ${projectColors[task.project]}"></div>
                                        ${task.project}
                                    </span>
                                    ${task.dueDate ? `
                                        <span class="inline-flex items-center gap-1.5 px-2 py-1 ${isOverdue ? 'bg-red-50 text-red-700' : 'bg-gray-100 text-gray-700'} rounded-full">
                                            <i data-lucide="calendar" class="w-3 h-3" style="stroke-width: 1.5;"></i>
                                            ${dueDateText}
                                        </span>
                                    ` : ''}
                                    ${task.tags.map(tag => `
                                        <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">#${tag}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            
            lucide.createIcons();
        }
        
        function formatDueDate(dateString) {
            const date = new Date(dateString);
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            if (dateString === today.toISOString().split('T')[0]) {
                return 'Today';
            } else if (dateString === tomorrow.toISOString().split('T')[0]) {
                return 'Tomorrow';
            } else {
                return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            }
        }
        
        function updateStats() {
            const total = tasks.length;
            const completed = tasks.filter(t => t.completed).length;
            const pending = total - completed;
            
            document.getElementById('stat-total').textContent = total;
            document.getElementById('stat-completed').textContent = completed;
            document.getElementById('stat-pending').textContent = pending;
        }
        
        function updateCounts() {
            const today = new Date().toISOString().split('T')[0];
            
            document.getElementById('count-all').textContent = tasks.length;
            document.getElementById('count-today').textContent = tasks.filter(t => !t.completed && t.dueDate === today).length;
            document.getElementById('count-upcoming').textContent = tasks.filter(t => !t.completed && t.dueDate && t.dueDate > today).length;
            document.getElementById('count-completed').textContent = tasks.filter(t => t.completed).length;
        }
        
        // Modal Functions
        function openAddTaskModal() {
            editingTaskId = null;
            document.getElementById('modal-title').textContent = 'Add New Task';
            document.getElementById('task-form').reset();
            document.getElementById('task-id').value = '';
            document.getElementById('task-modal').classList.remove('hidden');
            document.getElementById('task-name').focus();
        }
        
        function closeTaskModal() {
            document.getElementById('task-modal').classList.add('hidden');
            editingTaskId = null;
        }
        
        function closeDeleteModal() {
            document.getElementById('delete-modal').classList.add('hidden');
            taskToDelete = null;
        }
        
        // UI Functions
        function toggleUserMenu() {
            document.getElementById('user-menu').classList.toggle('hidden');
        }
        
        function toggleSortMenu() {
            document.getElementById('sort-menu').classList.toggle('hidden');
        }
        
        function togglePriorityFilter() {
            document.getElementById('priority-menu').classList.toggle('hidden');
        }
        
        function toggleView() {
            isGridView = !isGridView;
            const icon = document.getElementById('view-icon');
            icon.setAttribute('data-lucide', isGridView ? 'grid-3x3' : 'list');
            lucide.createIcons();
            // Grid view implementation would go here
        }
        
        function selectAllTasks() {
            const checkboxes = document.querySelectorAll('.checkbox-custom');
            checkboxes.forEach(cb => {
                if (!cb.checked) cb.click();
            });
        }
        
        function deleteSelectedTasks() {
            const completed = tasks.filter(t => t.completed);
            if (completed.length === 0) {
                showToast('No completed tasks to delete', 'error');
                return;
            }
            
            if (confirm(`Delete ${completed.length} completed task(s)?`)) {
                tasks = tasks.filter(t => !t.completed);
                saveTasksToStorage();
                renderTasks();
                updateStats();
                updateCounts();
                showToast(`${completed.length} task(s) deleted`);
            }
        }
        
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            const icon = toast.querySelector('i');
            
            toastMessage.textContent = message;
            
            if (type === 'error') {
                icon.setAttribute('data-lucide', 'alert-circle');
                icon.classList.remove('text-green-500');
                icon.classList.add('text-red-500');
            } else {
                icon.setAttribute('data-lucide', 'check-circle');
                icon.classList.remove('text-red-500');
                icon.classList.add('text-green-500');
            }
            
            lucide.createIcons();
            toast.classList.remove('hidden');
            
            setTimeout(() => {
                hideToast();
            }, 3000);
        }
        
        function hideToast() {
            document.getElementById('toast').classList.add('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<div className="fixed top-4 right-4 z-50 hidden" id="toast">
<div className="toast bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 min-w-[300px]">
<div className="flex-shrink-0">
<svg className="lucide lucide-check-circle w-5 h-5 text-green-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900" id="toast-message"></p>
</div>
<button className="flex-shrink-0 text-gray-400 hover:text-gray-600" onclick="hideToast()">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<header className="fixed z-40 top-0 left-0 right-0 pt-6 pr-6 pb-6 pl-6 bg-transparent">
<div className="max-w-7xl mx-auto border border-black/10 rounded-full" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65)) padding-box, linear-gradient(120deg, rgba(0,0,0,0.08), rgba(0,0,0,0.03)) border-box', border: '1px solid transparent', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', boxShadow: '0 10px 30px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)'}}>
<div className="flex h-16 items-center justify-between px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tight">TF</span>
</div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">TaskFlow</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-full transition-all duration-300 border border-black/5" onclick="toggleView()" style={{background: 'rgba(0, 0, 0, 0.02)'}}>
<svg className="lucide lucide-list w-5 h-5" data-lucide="list" fill="none" height="24" id="view-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
</button>
<div className="relative">
<button className="flex items-center gap-2 p-2 hover:bg-black/5 rounded-full transition-all duration-300 border border-black/5" onclick="toggleUserMenu()" style={{background: 'rgba(0, 0, 0, 0.02)'}}>
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
<span className="text-white text-sm font-medium">JD</span>
</div>
</button>
<div className="dropdown hidden absolute right-0 mt-2 w-56 bg-white/90 border border-black/10 rounded-lg shadow-lg py-1" id="user-menu" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
<div className="px-4 py-3 border-b border-gray-100">
<p className="text-sm font-medium text-gray-900">John Doe</p>
<p className="text-xs text-gray-500">john@example.com</p>
</div>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-black/5 transition-colors" href="#">Profile</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-black/5 transition-colors" href="#">Settings</a>
<a className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors" href="#">Sign out</a>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

<aside className="lg:col-span-1">
<div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-24">
<button className="shiny-cta focus:outline-none w-full mb-6" onclick="openAddTaskModal()" style={{-GradientAngle: '0deg', -GradientAngleOffset: '0deg', -GradientPercent: '20%', -GradientShine: '#8484ff', -ShadowSize: '2px', position: 'relative', overflow: 'hidden', borderRadius: '9999px', padding: '0.625rem 1rem', fontSize: '0.875rem', lineHeight: '1.2', fontWeight: '500', color: 'rgb(255, 255, 255)', background: 'linear-gradient(#000000, #000000) padding-box, conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100%) border-box', border: '2px solid transparent', boxShadow: 'rgb(26, 24, 24) 0px 0px 0px 1px inset', cursor: 'pointer', isolation: 'isolate', fontFamily: 'Inter, "Helvetica Neue", sans-serif', zIndex: '0', animation: '2.5s linear 0s infinite normal none running border-spin', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center'}}>
<style>
    @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; } @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; } .shiny-cta::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient(from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black); border-radius: inherit; opacity: 0.4; pointer-events: none; } .shiny-cta::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #1d4ed8, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; } .shiny-cta span { position: relative; z-index: 2; display: inline-block; } .shiny-cta span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #1d4ed8; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; } .shiny-cta:active { transform: translateY(1px); } @keyframes border-spin { to { --gradient-angle: 360deg; } } @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} } @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
  </style>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', position: 'relative', zIndex: '2'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>New Task</span>
</button>
<nav className="space-y-1">
<button className="filter-btn active w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between" data-filter="all" onclick="filterTasks('all')">
<div className="flex items-center gap-3">
<svg className="lucide lucide-inbox w-4 h-4" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span>All Tasks</span>
</div>
<span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full" id="count-all">4</span>
</button>
<button className="filter-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between" data-filter="today" onclick="filterTasks('today')">
<div className="flex items-center gap-3">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Today</span>
</div>
<span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full" id="count-today">0</span>
</button>
<button className="filter-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between" data-filter="upcoming" onclick="filterTasks('upcoming')">
<div className="flex items-center gap-3">
<svg className="lucide lucide-calendar-days w-4 h-4" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span>Upcoming</span>
</div>
<span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full" id="count-upcoming">0</span>
</button>
<button className="filter-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between" data-filter="completed" onclick="filterTasks('completed')">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span>Completed</span>
</div>
<span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full" id="count-completed">3</span>
</button>
</nav>
<div className="border-t border-gray-200 mt-6 pt-6">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Projects</h3>
<nav className="space-y-1">
<button className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="filterByProject('work')">
<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
<span>Work</span>
</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="filterByProject('personal')">
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<span>Personal</span>
</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-3 transition-colors" onclick="filterByProject('shopping')">
<div className="w-3 h-3 bg-purple-500 rounded-full"></div>
<span>Shopping</span>
</button>
</nav>
</div>
</div>
</aside>

<div className="lg:col-span-3">

<div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex-1 relative">
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="search-input" onkeyup="searchTasks()" placeholder="Search tasks..." type="text"/>
</div>
<div className="flex gap-2">
<div className="relative">
<button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors" onclick="toggleSortMenu()">
<svg className="lucide lucide-arrow-up-down w-4 h-4" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
<span>Sort</span>
</button>
<div className="dropdown hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10" id="sort-menu">
<button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors" onclick="sortTasks('date')">Date Created</button>
<button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors" onclick="sortTasks('priority')">Priority</button>
<button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors" onclick="sortTasks('name')">Name</button>
<button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors" onclick="sortTasks('dueDate')">Due Date</button>
</div>
</div>
<div className="relative">
<button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors" onclick="togglePriorityFilter()">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<span className="">Priority</span>
</button>
<div className="dropdown hidden absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10" id="priority-menu">
<button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors" onclick="filterByPriority('all')">All</button>
<button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2" onclick="filterByPriority('high')">
<div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        High
                                    </button>
<button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2" onclick="filterByPriority('medium')">
<div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                        Medium
                                    </button>
<button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2" onclick="filterByPriority('low')">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        Low
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
<div className="bg-white border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-500 mb-1">Total Tasks</p>
<p className="text-2xl font-semibold tracking-tight" id="stat-total">4</p>
</div>
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-list-checks w-6 h-6 text-blue-600" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-500 mb-1">Completed</p>
<p className="text-2xl font-semibold tracking-tight" id="stat-completed">3</p>
</div>
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-check-circle-2 w-6 h-6 text-green-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-500 mb-1">Pending</p>
<p className="text-2xl font-semibold tracking-tight" id="stat-pending">1</p>
</div>
<div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-clock w-6 h-6 text-amber-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
<div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight" id="section-title">All Tasks</h2>
<div className="flex items-center gap-2">
<button className="text-sm text-gray-600 hover:text-gray-900 transition-colors" onclick="selectAllTasks()">
                                Select All
                            </button>
<span className="text-gray-300">•</span>
<button className="text-sm text-red-600 hover:text-red-700 transition-colors" onclick="deleteSelectedTasks()">
                                Delete Selected
                            </button>
</div>
</div>
<div className="divide-y divide-gray-100" id="tasks-container">
<div className="task-item priority-medium p-4 sm:p-6" data-task-id="2">
<div className="flex items-start gap-4">
<input className="checkbox-custom mt-1 flex-shrink-0" onchange="toggleTaskComplete(2)" type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-4 mb-2">
<h3 className="font-medium text-gray-900">Buy groceries</h3>
<div className="flex items-center gap-1 flex-shrink-0">
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" onclick="editTask(2)" title="Edit">
<svg className="lucide lucide-pencil w-4 h-4" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" onclick="duplicateTask(2)" title="Duplicate">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
<button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" onclick="deleteTask(2)" title="Delete">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
</div>
<p className="text-sm text-gray-600 mb-3">Milk, eggs, bread, vegetables, and fruits</p>
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-amber-50 text-amber-700 border-amber-200 border rounded-full font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                        medium
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        shopping
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-50 text-red-700 rounded-full">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                                            Nov 6
                                        </span>
<span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">#shopping</span>
<span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">#food</span>
</div>
</div>
</div>
</div>
<div className="task-item priority-low p-4 sm:p-6" data-task-id="3">
<div className="flex items-start gap-4">
<input checked="" className="checkbox-custom mt-1 flex-shrink-0" onchange="toggleTaskComplete(3)" type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-4 mb-2">
<h3 className="font-medium text-gray-900 task-completed">Update website design</h3>
<div className="flex items-center gap-1 flex-shrink-0">
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" onclick="editTask(3)" title="Edit">
<svg className="lucide lucide-pencil w-4 h-4" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" onclick="duplicateTask(3)" title="Duplicate">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
<button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" onclick="deleteTask(3)" title="Delete">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
</div>
<p className="text-sm text-gray-600 mb-3 task-completed">Review the new design mockups and provide feedback</p>
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 border-green-200 border rounded-full font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        low
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        work
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                                            Nov 5
                                        </span>
<span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">#design</span>
<span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">#feedback</span>
</div>
</div>
</div>
</div>
<div className="task-item priority-medium p-4 sm:p-6" data-task-id="4">
<div className="flex items-start gap-4">
<input checked="" className="checkbox-custom mt-1 flex-shrink-0" onchange="toggleTaskComplete(4)" type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-4 mb-2">
<h3 className="font-medium text-gray-900 task-completed">Schedule dentist appointment</h3>
<div className="flex items-center gap-1 flex-shrink-0">
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" onclick="editTask(4)" title="Edit">
<svg className="lucide lucide-pencil w-4 h-4" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" onclick="duplicateTask(4)" title="Duplicate">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
<button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" onclick="deleteTask(4)" title="Delete">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
</div>
<p className="text-sm text-gray-600 mb-3 task-completed">Call the dentist office to schedule a checkup</p>
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-amber-50 text-amber-700 border-amber-200 border rounded-full font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                        medium
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        personal
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                                            Tomorrow
                                        </span>
<span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">#health</span>
<span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">#appointment</span>
</div>
</div>
</div>
</div>
<div className="task-item priority-low p-4 sm:p-6" data-task-id="5">
<div className="flex items-start gap-4">
<input checked="" className="checkbox-custom mt-1 flex-shrink-0" onchange="toggleTaskComplete(5)" type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-4 mb-2">
<h3 className="font-medium text-gray-900 task-completed">Read new book</h3>
<div className="flex items-center gap-1 flex-shrink-0">
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" onclick="editTask(5)" title="Edit">
<svg className="lucide lucide-pencil w-4 h-4" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" onclick="duplicateTask(5)" title="Duplicate">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
<button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" onclick="deleteTask(5)" title="Delete">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
</div>
<p className="text-sm text-gray-600 mb-3 task-completed">Start reading 'Atomic Habits' by James Clear</p>
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 border-green-200 border rounded-full font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        low
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        personal
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                                            Nov 13
                                        </span>
<span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">#learning</span>
<span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full">#personal-development</span>
</div>
</div>
</div>
</div>
</div>

<div className="empty-state hidden p-12 text-center" id="empty-state">
<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-inbox w-8 h-8 text-gray-400" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">No tasks found</h3>
<p className="text-sm text-gray-500 mb-6">Get started by creating your first task</p>
<button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors" onclick="openAddTaskModal()">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>New Task</span>
</button>
</div>
</div>
</div>
</div>
</main>

<div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4" id="task-modal">
<div className="modal-content bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
<div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 bg-white">
<h2 className="text-lg font-semibold tracking-tight" id="modal-title">Add New Task</h2>
<button className="text-gray-400 hover:text-gray-600 transition-colors" onclick="closeTaskModal()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="p-6 space-y-6" id="task-form">
<input id="task-id" type="hidden"/>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Task Name*</label>
<input className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="task-name" placeholder="Enter task name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
<textarea className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" id="task-description" placeholder="Add a description..." rows="4"></textarea>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
<input className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="task-due-date" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Priority*</label>
<select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="task-priority" required="">
<option value="low">Low</option>
<option selected="" value="medium">Medium</option>
<option value="high">High</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Project</label>
<select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="task-project">
<option value="work">Work</option>
<option selected="" value="personal">Personal</option>
<option value="shopping">Shopping</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
<input className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="task-tags" placeholder="Enter tags separated by commas" type="text"/>
<p className="text-xs text-gray-500 mt-1">Example: urgent, review, important</p>
</div>
<div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
<button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors" onclick="closeTaskModal()" type="button">
                        Cancel
                    </button>
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors" type="submit">
                        Save Task
                    </button>
</div>
</form>
</div>
</div>

<div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4" id="delete-modal">
<div className="modal-content bg-white rounded-lg shadow-xl max-w-md w-full">
<div className="p-6">
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
<svg className="lucide lucide-trash-2 w-6 h-6 text-red-600" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-gray-900 text-center mb-2 tracking-tight">Delete Task</h3>
<p className="text-sm text-gray-500 text-center mb-6">Are you sure you want to delete this task? This action cannot be undone.</p>
<div className="flex items-center gap-3">
<button className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors" onclick="closeDeleteModal()">
                        Cancel
                    </button>
<button className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors" onclick="confirmDelete()">
                        Delete
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
