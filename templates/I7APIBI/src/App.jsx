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
      
// Sample data
let clients = [
    {
        id: 1,
        name: "Arcadia & Co",
        company: "Arcadia & Co",
        email: "contact@arcadia.com",
        pack: "Core",
        credits: 800,
        assignedAM: "Zoe",
        purchaseDate: "2023-09-10",
        status: "Not Started",
        tasks: [
            { id: 1, name: "Research & Identify target audience", status: "Done", priority: "High", dueDate: "2023-09-15", description: "Complete market research" },
            { id: 2, name: "Develop brand messaging framework", status: "Done", priority: "High", dueDate: "2023-09-20", description: "Create comprehensive messaging strategy" },
            { id: 3, name: "Design visual identity system", status: "Pending", priority: "Medium", dueDate: "2023-09-25", description: "Logo, colors, typography" },
            { id: 4, name: "Create brand guidelines document", status: "Pending", priority: "Medium", dueDate: "2023-09-30", description: "Comprehensive brand standards" },
            { id: 5, name: "Develop website wireframes", status: "Pending", priority: "Low", dueDate: "2023-10-05", description: "Site structure and layout" },
            { id: 6, name: "Design website mockups", status: "Pending", priority: "Low", dueDate: "2023-10-10", description: "Visual website designs" },
            { id: 7, name: "Build responsive website", status: "Pending", priority: "Low", dueDate: "2023-10-15", description: "Full website development" },
            { id: 8, name: "Set up social media profiles", status: "Pending", priority: "Medium", dueDate: "2023-10-20", description: "LinkedIn, Twitter, Instagram" },
            { id: 9, name: "Create content calendar", status: "Pending", priority: "Medium", dueDate: "2023-10-25", description: "3-month content plan" },
            { id: 10, name: "Design marketing collateral", status: "Pending", priority: "Low", dueDate: "2023-10-30", description: "Brochures, business cards" },
            { id: 11, name: "Develop email templates", status: "Pending", priority: "Low", dueDate: "2023-11-05", description: "Newsletter and marketing emails" },
            { id: 12, name: "Create presentation templates", status: "Pending", priority: "Low", dueDate: "2023-11-10", description: "Sales and pitch decks" },
            { id: 13, name: "Set up analytics tracking", status: "Pending", priority: "Medium", dueDate: "2023-11-15", description: "Google Analytics, social metrics" },
            { id: 14, name: "Launch brand campaign", status: "Pending", priority: "High", dueDate: "2023-11-20", description: "Coordinated brand launch" },
            { id: 15, name: "Monitor and optimize performance", status: "Pending", priority: "Medium", dueDate: "2023-11-25", description: "Track metrics and adjust strategy" }
        ]
    },
    {
        id: 2,
        name: "Nimbus Wear",
        company: "Nimbus Wear Ltd",
        email: "hello@nimbuswear.com",
        pack: "Pro",
        credits: 1200,
        assignedAM: "Mila",
        purchaseDate: "2023-09-13",
        status: "In Progress",
        tasks: [
            { id: 1, name: "Comprehensive market analysis", status: "Done", priority: "High", dueDate: "2023-09-18", description: "In-depth competitor and market research" },
            { id: 2, name: "Develop brand strategy", status: "Done", priority: "High", dueDate: "2023-09-23", description: "Complete brand positioning strategy" },
            { id: 3, name: "Create brand identity", status: "In Progress", priority: "High", dueDate: "2023-09-28", description: "Logo, visual system, brand voice" },
            { id: 4, name: "Design comprehensive guidelines", status: "Pending", priority: "Medium", dueDate: "2023-10-03", description: "Extended brand standards document" },
            { id: 5, name: "Develop premium website", status: "Pending", priority: "High", dueDate: "2023-10-08", description: "Advanced website with e-commerce" },
            { id: 6, name: "Create product photography guidelines", status: "Pending", priority: "Medium", dueDate: "2023-10-13", description: "Photography standards for products" },
            { id: 7, name: "Design packaging system", status: "Pending", priority: "Medium", dueDate: "2023-10-18", description: "Complete packaging design" },
            { id: 8, name: "Develop marketing campaigns", status: "Pending", priority: "High", dueDate: "2023-10-23", description: "Multi-channel marketing strategy" },
            { id: 9, name: "Create social media strategy", status: "Pending", priority: "Medium", dueDate: "2023-10-28", description: "Comprehensive social media plan" },
            { id: 10, name: "Design retail materials", status: "Pending", priority: "Low", dueDate: "2023-11-02", description: "Point of sale materials" },
            { id: 11, name: "Develop influencer program", status: "Pending", priority: "Medium", dueDate: "2023-11-07", description: "Influencer partnership strategy" },
            { id: 12, name: "Create customer journey maps", status: "Pending", priority: "Low", dueDate: "2023-11-12", description: "Map customer touchpoints" },
            { id: 13, name: "Set up advanced analytics", status: "Pending", priority: "Medium", dueDate: "2023-11-17", description: "Comprehensive tracking setup" },
            { id: 14, name: "Launch integrated campaign", status: "Pending", priority: "High", dueDate: "2023-11-22", description: "Multi-platform brand launch" }
        ]
    },
    {
        id: 3,
        name: "Vertex Labs",
        company: "Vertex Labs Inc",
        email: "info@vertexlabs.com",
        pack: "Bespoke",
        credits: 2000,
        assignedAM: "Zoe",
        purchaseDate: "2023-09-14",
        status: "In Progress",
        tasks: []
    },
    {
        id: 4,
        name: "Sundial",
        company: "Sundial Creative",
        email: "team@sundial.co",
        pack: "Core",
        credits: 800,
        assignedAM: "Ethan",
        purchaseDate: "2023-09-16",
        status: "Complete",
        tasks: [
            { id: 1, name: "Research & Identify target audience", status: "Done", priority: "High", dueDate: "2023-09-21", description: "Complete market research" },
            { id: 2, name: "Develop brand messaging framework", status: "Done", priority: "High", dueDate: "2023-09-26", description: "Create comprehensive messaging strategy" },
            { id: 3, name: "Design visual identity system", status: "Done", priority: "Medium", dueDate: "2023-10-01", description: "Logo, colors, typography" },
            { id: 4, name: "Create brand guidelines document", status: "Done", priority: "Medium", dueDate: "2023-10-06", description: "Comprehensive brand standards" },
            { id: 5, name: "Develop website wireframes", status: "Done", priority: "Low", dueDate: "2023-10-11", description: "Site structure and layout" },
            { id: 6, name: "Design website mockups", status: "Done", priority: "Low", dueDate: "2023-10-16", description: "Visual website designs" },
            { id: 7, name: "Build responsive website", status: "Done", priority: "Low", dueDate: "2023-10-21", description: "Full website development" },
            { id: 8, name: "Set up social media profiles", status: "Done", priority: "Medium", dueDate: "2023-10-26", description: "LinkedIn, Twitter, Instagram" },
            { id: 9, name: "Create content calendar", status: "Done", priority: "Medium", dueDate: "2023-10-31", description: "3-month content plan" },
            { id: 10, name: "Design marketing collateral", status: "Done", priority: "Low", dueDate: "2023-11-05", description: "Brochures, business cards" },
            { id: 11, name: "Develop email templates", status: "Done", priority: "Low", dueDate: "2023-11-10", description: "Newsletter and marketing emails" },
            { id: 12, name: "Create presentation templates", status: "Done", priority: "Low", dueDate: "2023-11-15", description: "Sales and pitch decks" },
            { id: 13, name: "Set up analytics tracking", status: "Done", priority: "Medium", dueDate: "2023-11-20", description: "Google Analytics, social metrics" },
            { id: 14, name: "Launch brand campaign", status: "Done", priority: "High", dueDate: "2023-11-25", description: "Coordinated brand launch" },
            { id: 15, name: "Monitor and optimize performance", status: "Done", priority: "Medium", dueDate: "2023-11-30", description: "Track metrics and adjust strategy" }
        ]
    }
];

let currentClientId = null;

// DOM Elements
const createClientBtn = document.getElementById('createClientBtn');
const createClientModal = document.getElementById('createClientModal');
const closeCreateModal = document.getElementById('closeCreateModal');
const cancelCreate = document.getElementById('cancelCreate');
const createClientForm = document.getElementById('createClientForm');

const addTaskModal = document.getElementById('addTaskModal');
const closeAddTaskModal = document.getElementById('closeAddTaskModal');
const cancelAddTask = document.getElementById('cancelAddTask');
const addTaskForm = document.getElementById('addTaskForm');
const addTaskBtn = document.getElementById('addTaskBtn');

const clientDetailModal = document.getElementById('clientDetailModal');
const closeDetailModal = document.getElementById('closeDetailModal');

const filterType = document.getElementById('filterType');
const filterAM = document.getElementById('filterAM');
const filterStatus = document.getElementById('filterStatus');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderClientTable();
    updateCounts();
    
    // Event listeners
    createClientBtn.addEventListener('click', () => showModal(createClientModal));
    closeCreateModal.addEventListener('click', () => hideModal(createClientModal));
    cancelCreate.addEventListener('click', () => hideModal(createClientModal));
    
    closeAddTaskModal.addEventListener('click', () => hideModal(addTaskModal));
    cancelAddTask.addEventListener('click', () => hideModal(addTaskModal));
    
    closeDetailModal.addEventListener('click', () => hideModal(clientDetailModal));
    
    createClientForm.addEventListener('submit', handleCreateClient);
    addTaskForm.addEventListener('submit', handleAddTask);
    
    filterType.addEventListener('change', applyFilters);
    filterAM.addEventListener('change', applyFilters);
    filterStatus.addEventListener('change', applyFilters);
    
    // Close modals on backdrop click
    [createClientModal, addTaskModal, clientDetailModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModal(modal);
        });
    });
});

function showModal(modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideModal(modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function renderClientTable() {
    const tbody = document.getElementById('clientRows');
    tbody.innerHTML = '';
    
    clients.forEach((client, index) => {
        const completedTasks = client.tasks.filter(task => task.status === 'Done').length;
        const totalTasks = client.tasks.length;
        const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        
        const progressHTML = totalTasks > 0 ? `
            <div class="flex items-center gap-2">
                <div class="flex-1 bg-neutral-200 rounded-full h-2">
                    <div class="bg-emerald-600 h-2 rounded-full transition-all" style="width: ${progressPercent}%"></div>
                </div>
                <span class="text-xs text-neutral-600 min-w-max">${completedTasks}/${totalTasks}</span>
            </div>
        ` : '<span class="text-xs text-neutral-500">No tasks</span>';
        
        const statusClass = client.status === 'Complete' ? 'bg-emerald-200 text-emerald-800' :
                           client.status === 'In Progress' ? 'bg-amber-200 text-amber-800' :
                           'bg-neutral-200 text-neutral-700';
        
        const row = document.createElement('tr');
        row.className = 'odd:bg-white even:bg-neutral-50';
        row.innerHTML = `
            <td class="px-6 py-4 font-medium text-neutral-900">${client.name}</td>
            <td class="px-6 py-4">${client.pack}</td>
            <td class="px-6 py-4">${client.credits}</td>
            <td class="px-6 py-4">${client.assignedAM}</td>
            <td class="px-6 py-4">${client.purchaseDate}</td>
            <td class="px-6 py-4 w-32">${progressHTML}</td>
            <td class="px-6 py-4"><span class="px-2 py-0.5 rounded-full text-xs font-medium ${statusClass}">${client.status}</span></td>
            <td class="px-6 py-4 text-right">
                <button class="p-2 rounded-lg hover:bg-neutral-100 transition" data-id="${client.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-right" class="lucide lucide-arrow-right w-4 h-4 stroke-1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
            </td>
        `;
        
        // Add click handler for view button
        const viewBtn = row.querySelector('button[data-id]');
        viewBtn.addEventListener('click', () => showClientDetail(client.id));
        
        tbody.appendChild(row);
    });
}

function updateCounts() {
    const coreClients = clients.filter(c => c.pack === 'Core').length;
    const proClients = clients.filter(c => c.pack === 'Pro').length;
    const bespokeClients = clients.filter(c => c.pack === 'Bespoke').length;
    
    document.getElementById('totalCount').textContent = clients.length;
    document.getElementById('coreCount').textContent = coreClients;
    document.getElementById('proCount').textContent = proClients;
    document.getElementById('bespokeCount').textContent = bespokeClients;
}

function applyFilters() {
    const typeFilter = filterType.value;
    const amFilter = filterAM.value;
    const statusFilter = filterStatus.value;
    
    const filteredClients = clients.filter(client => {
        return (!typeFilter || client.pack === typeFilter) &&
               (!amFilter || client.assignedAM === amFilter) &&
               (!statusFilter || client.status === statusFilter);
    });
    
    // Update table with filtered clients
    const tbody = document.getElementById('clientRows');
    tbody.innerHTML = '';
    
    filteredClients.forEach(client => {
        const completedTasks = client.tasks.filter(task => task.status === 'Done').length;
        const totalTasks = client.tasks.length;
        const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        
        const progressHTML = totalTasks > 0 ? `
            <div class="flex items-center gap-2">
                <div class="flex-1 bg-neutral-200 rounded-full h-2">
                    <div class="bg-emerald-600 h-2 rounded-full transition-all" style="width: ${progressPercent}%"></div>
                </div>
                <span class="text-xs text-neutral-600 min-w-max">${completedTasks}/${totalTasks}</span>
            </div>
        ` : '<span class="text-xs text-neutral-500">No tasks</span>';
        
        const statusClass = client.status === 'Complete' ? 'bg-emerald-200 text-emerald-800' :
                           client.status === 'In Progress' ? 'bg-amber-200 text-amber-800' :
                           'bg-neutral-200 text-neutral-700';
        
        const row = document.createElement('tr');
        row.className = 'odd:bg-white even:bg-neutral-50';
        row.innerHTML = `
            <td class="px-6 py-4 font-medium text-neutral-900">${client.name}</td>
            <td class="px-6 py-4">${client.pack}</td>
            <td class="px-6 py-4">${client.credits}</td>
            <td class="px-6 py-4">${client.assignedAM}</td>
            <td class="px-6 py-4">${client.purchaseDate}</td>
            <td class="px-6 py-4 w-32">${progressHTML}</td>
            <td class="px-6 py-4"><span class="px-2 py-0.5 rounded-full text-xs font-medium ${statusClass}">${client.status}</span></td>
            <td class="px-6 py-4 text-right">
                <button class="p-2 rounded-lg hover:bg-neutral-100 transition" data-id="${client.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-right" class="lucide lucide-arrow-right w-4 h-4 stroke-1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
            </td>
        `;
        
        const viewBtn = row.querySelector('button[data-id]');
        viewBtn.addEventListener('click', () => showClientDetail(client.id));
        
        tbody.appendChild(row);
    });
    
    // Update total count
    document.getElementById('totalCount').textContent = filteredClients.length;
}

function handleCreateClient(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const clientData = {
        id: clients.length + 1,
        name: document.getElementById('clientName').value,
        company: document.getElementById('clientCompany').value,
        email: document.getElementById('clientEmail').value,
        pack: document.getElementById('clientPack').value,
        credits: parseInt(document.getElementById('clientCredits').value),
        assignedAM: document.getElementById('clientAM').value,
        purchaseDate: document.getElementById('clientDate').value,
        status: "Not Started",
        tasks: []
    };
    
    clients.push(clientData);
    renderClientTable();
    updateCounts();
    hideModal(createClientModal);
    createClientForm.reset();
}

function showClientDetail(clientId) {
    const client = clients.find(c => c.id === clientId);
    if (!client) return;
    
    currentClientId = clientId;
    
    // Update modal content
    document.getElementById('clientDetailName').textContent = client.name;
    document.getElementById('clientDetailCompany').textContent = client.company;
    document.getElementById('clientDetailPack').textContent = client.pack;
    document.getElementById('clientDetailCredits').textContent = client.credits;
    document.getElementById('clientDetailAM').textContent = client.assignedAM;
    document.getElementById('clientDetailDate').textContent = client.purchaseDate;
    
    const completedTasks = client.tasks.filter(task => task.status === 'Done').length;
    const totalTasks = client.tasks.length;
    const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    document.getElementById('clientDetailProgress').style.width = `${progressPercent}%`;
    document.getElementById('clientDetailProgressText').textContent = totalTasks > 0 ? `${completedTasks}/${totalTasks}` : '0/0';
    
    const statusElement = document.getElementById('clientDetailStatus');
    statusElement.textContent = client.status;
    statusElement.className = client.status === 'Complete' ? 'inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-200 text-emerald-800 mt-1' :
                             client.status === 'In Progress' ? 'inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-amber-200 text-amber-800 mt-1' :
                             'inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700 mt-1';
    
    renderTasksList(client.tasks);
    showModal(clientDetailModal);
    
    // Set up add task button
    const addTaskBtn = document.getElementById('addTaskBtn');
    addTaskBtn.onclick = () => {
        hideModal(clientDetailModal);
        showModal(addTaskModal);
    };
}

function renderTasksList(tasks) {
    const tasksList = document.getElementById('tasksList');
    
    if (tasks.length === 0) {
        tasksList.innerHTML = '<p class="text-neutral-500 text-center py-8">No tasks yet. Click "Add Task" to get started.</p>';
        return;
    }
    
    tasksList.innerHTML = tasks.map(task => {
        const statusClass = task.status === 'Done' ? 'bg-emerald-200 text-emerald-800' :
                           task.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                           task.status === 'Blocked' ? 'bg-red-200 text-red-800' :
                           'bg-neutral-200 text-neutral-700';
        
        const priorityClass = task.priority === 'High' ? 'bg-red-100 text-red-700' :
                             task.priority === 'Medium' ? 'bg-amber-100 text-amber-700' :
                             'bg-neutral-100 text-neutral-600';
        
        return `
            <div class="p-4 border border-neutral-200 rounded-lg">Looking at this incomplete task list rendering, I'll continue the HTML exactly where it left off to complete the task card structure and finish the application:

                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <h5 class="font-medium text-neutral-900 mb-1">${task.name}</h5>
                        <p class="text-sm text-neutral-600 mb-2">${task.description}</p>
                        <div class="flex items-center gap-2 text-xs">
                            <span class="px-2 py-1 rounded-full ${statusClass}">${task.status}</span>
                            <span class="px-2 py-1 rounded-full ${priorityClass}">${task.priority}</span>
                            ${task.dueDate ? `<span class="text-neutral-500">Due: ${task.dueDate}</span>` : ''}
                        </div>
                    </div>
                    <div class="flex items-center gap-2 ml-4">
                        <button onclick="toggleTaskStatus(${task.id})" class="p-1.5 rounded-lg hover:bg-neutral-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 stroke-1.5">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <path d="m9 11 3 3L22 4"></path>
                            </svg>
                        </button>
                        <button onclick="deleteTask(${task.id})" class="p-1.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 stroke-1.5">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-2 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function handleAddTask(e) {
    e.preventDefault();
    
    const client = clients.find(c => c.id === currentClientId);
    if (!client) return;
    
    const newTask = {
        id: client.tasks.length + 1,
        name: document.getElementById('taskName').value,
        status: document.getElementById('taskStatus').value,
        priority: document.getElementById('taskPriority').value,
        dueDate: document.getElementById('taskDueDate').value,
        description: document.getElementById('taskDescription').value
    };
    
    client.tasks.push(newTask);
    
    // Update client status based on task completion
    updateClientStatus(client);
    
    renderTasksList(client.tasks);
    renderClientTable();
    updateClientDetailProgress(client);
    hideModal(addTaskModal);
    showModal(clientDetailModal);
    addTaskForm.reset();
}

function toggleTaskStatus(taskId) {
    const client = clients.find(c => c.id === currentClientId);
    if (!client) return;
    
    const task = client.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    // Cycle through statuses
    const statuses = ['Pending', 'In Progress', 'Done'];
    const currentIndex = statuses.indexOf(task.status);
    task.status = statuses[(currentIndex + 1) % statuses.length];
    
    updateClientStatus(client);
    renderTasksList(client.tasks);
    renderClientTable();
    updateClientDetailProgress(client);
}

function deleteTask(taskId) {
    const client = clients.find(c => c.id === currentClientId);
    if (!client) return;
    
    client.tasks = client.tasks.filter(t => t.id !== taskId);
    
    updateClientStatus(client);
    renderTasksList(client.tasks);
    renderClientTable();
    updateClientDetailProgress(client);
}

function updateClientStatus(client) {
    const completedTasks = client.tasks.filter(task => task.status === 'Done').length;
    const totalTasks = client.tasks.length;
    
    if (totalTasks === 0) {
        client.status = 'Not Started';
    } else if (completedTasks === totalTasks) {
        client.status = 'Complete';
    } else if (completedTasks > 0) {
        client.status = 'In Progress';
    } else {
        client.status = 'Not Started';
    }
}

function updateClientDetailProgress(client) {
    const completedTasks = client.tasks.filter(task => task.status === 'Done').length;
    const totalTasks = client.tasks.length;
    const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    document.getElementById('clientDetailProgress').style.width = `${progressPercent}%`;
    document.getElementById('clientDetailProgressText').textContent = totalTasks > 0 ? `${completedTasks}/${totalTasks}` : '0/0';
    
    const statusElement = document.getElementById('clientDetailStatus');
    statusElement.textContent = client.status;
    statusElement.className = client.status === 'Complete' ? 'inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-200 text-emerald-800 mt-1' :
                             client.status === 'In Progress' ? 'inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-amber-200 text-amber-800 mt-1' :
                             'inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700 mt-1';
}

// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

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
      
<div className="flex h-full">

<aside className="hidden lg:flex flex-col shrink-0 w-64 bg-white border-r border-neutral-200">
<div className="flex items-center gap-2 px-6 pt-6">
<svg className="w-6 h-6 text-emerald-600 stroke-2" fill="none" stroke="currentColor"><use href="#hash"></use></svg>
<span className="text-2xl tracking-tight font-semibold"><span className="text-neutral-900">creator</span><span className="text-emerald-600">flow</span></span>
</div>
<nav className="mt-10 flex-1 px-2 space-y-1 text-sm">
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Jobs</a>
<a className="flex items-center px-4 py-2 rounded-lg bg-emerald-700 text-white font-medium" href="#">Concierge</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Reviews</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Invoices</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Cleanup</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Finance</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Blog</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Release Notes</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Order Session</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">ABN Requests</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Feedbacks</a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-neutral-100 transition" href="#">Links</a>
</nav>
</aside>

<div className="flex-1 flex flex-col overflow-y-auto">

<header className="flex items-center justify-between px-4 lg:px-8 h-16 bg-white border-b border-neutral-200 sticky top-0 z-10">
<h1 className="text-lg font-semibold tracking-tight">Concierge Dashboard</h1>
<button className="relative p-2 rounded-full hover:bg-neutral-100 transition">
<svg className="lucide lucide-bell w-5 h-5 stroke-1.5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-1 right-1 inline-block w-2 h-2 rounded-full bg-rose-600"></span>
</button>
</header>

<main className="flex-1 p-4 lg:p-8 space-y-10">

<section className="space-y-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div className="">
<p className="text-sm font-medium text-neutral-500">Total Concierge Clients</p>
<h2 className="text-3xl tracking-tight font-semibold" id="totalCount">4</h2>
</div>
<div className="flex flex-wrap gap-4">
<select className="px-4 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="filterType">
<option value="">All Types</option>
<option value="Core">Core</option>
<option value="Pro">Pro</option>
<option value="Bespoke">Bespoke</option>
</select>
<select className="px-4 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="filterAM">
<option value="">All AMs</option>
<option value="Zoe">Zoe</option><option value="Mila">Mila</option><option value="Ethan">Ethan</option></select>
<select className="px-4 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="filterStatus">
<option value="">All Statuses</option>
<option value="Not Started">Not Started</option>
<option value="In Progress">In Progress</option>
<option value="Complete">Complete</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl bg-white shadow-sm border border-neutral-200 p-5 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-neutral-500">Core</p>
<h3 className="text-xl tracking-tight font-semibold" id="coreCount">2</h3>
</div>
<span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
<svg className="lucide lucide-check-circle w-6 h-6 text-emerald-600 stroke-1.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</span>
</div>
<div className="rounded-xl bg-white shadow-sm border border-neutral-200 p-5 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-neutral-500">Pro</p>
<h3 className="text-xl tracking-tight font-semibold" id="proCount">1</h3>
</div>
<span className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
<svg className="lucide lucide-star w-6 h-6 text-sky-600 stroke-1.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
</div>
<div className="rounded-xl bg-white shadow-sm border border-neutral-200 p-5 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-neutral-500">Bespoke</p>
<h3 className="text-xl tracking-tight font-semibold" id="bespokeCount">1</h3>
</div>
<span className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">
<svg className="lucide lucide-settings w-6 h-6 text-neutral-600 stroke-1.5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</span>
</div>
</div>
</section>

<section className="">
<div className="flex mb-4 items-center justify-between" id="aura-emdn0bpo3">
<h2 className="text-xl tracking-tight font-semibold">Client Concierge Table</h2>
<button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white font-medium text-sm rounded-lg hover:bg-emerald-700 transition" id="createClientBtn">
<svg className="lucide lucide-plus w-4 h-4 stroke-1.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        Create New Client
    </button>
</div>
<div className="overflow-x-auto bg-white rounded-xl border border-neutral-200 shadow-sm">
<table className="min-w-full text-sm">
<thead className="bg-neutral-50 text-neutral-600">
<tr className="">
<th className="px-6 py-3 text-left font-medium cursor-pointer">Client</th>
<th className="px-6 py-3 text-left font-medium cursor-pointer">Pack</th>
<th className="px-6 py-3 text-left font-medium">Credits</th>
<th className="px-6 py-3 text-left font-medium">Assigned AM</th>
<th className="px-6 py-3 text-left font-medium">Purchase Date</th>
<th className="px-6 py-3 text-left font-medium">Progress</th>
<th className="px-6 py-3 text-left font-medium">Status</th>
<th className="px-6 py-3 text-right font-medium">View</th>
</tr>
</thead>
<tbody className="" id="clientRows">
<tr className="odd:bg-white even:bg-neutral-50">
<td className="px-6 py-4 font-medium text-neutral-900">Arcadia &amp; Co</td>
<td className="px-6 py-4">Core</td>
<td className="px-6 py-4">800</td>
<td className="px-6 py-4">Zoe</td>
<td className="px-6 py-4">2023-09-10</td>
<td className="px-6 py-4 w-32">
<div className="flex items-center gap-2">
<div className="flex-1 bg-neutral-200 rounded-full h-2">
<div className="bg-emerald-600 h-2 rounded-full transition-all" style={{width: '13%'}}></div>
</div>
<span className="text-xs text-neutral-600 min-w-max">2/15</span>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700">Not Started</span></td>
<td className="px-6 py-4 text-right">
<button className="p-2 rounded-lg hover:bg-neutral-100 transition" data-id="1">
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-1.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</td>
</tr>
<tr className="odd:bg-white even:bg-neutral-50">
<td className="px-6 py-4 font-medium text-neutral-900">Nimbus Wear</td>
<td className="px-6 py-4">Pro</td>
<td className="px-6 py-4">1200</td>
<td className="px-6 py-4">Mila</td>
<td className="px-6 py-4">2023-09-13</td>
<td className="px-6 py-4 w-32">
<div className="flex items-center gap-2">
<div className="flex-1 bg-neutral-200 rounded-full h-2">
<div className="bg-emerald-600 h-2 rounded-full transition-all" style={{width: '14%'}}></div>
</div>
<span className="text-xs text-neutral-600 min-w-max">2/14</span>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-200 text-amber-800">In Progress</span></td>
<td className="px-6 py-4 text-right">
<button className="p-2 rounded-lg hover:bg-neutral-100 transition" data-id="2">
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-1.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</td>
</tr>
<tr className="odd:bg-white even:bg-neutral-50">
<td className="px-6 py-4 font-medium text-neutral-900">Vertex Labs</td>
<td className="px-6 py-4">Bespoke</td>
<td className="px-6 py-4">2000</td>
<td className="px-6 py-4">Zoe</td>
<td className="px-6 py-4">2023-09-14</td>
<td className="px-6 py-4 w-32"><span className="text-xs text-neutral-500">No tasks</span></td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-200 text-amber-800">In Progress</span></td>
<td className="px-6 py-4 text-right">
<button className="p-2 rounded-lg hover:bg-neutral-100 transition" data-id="3">
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-1.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</td>
</tr>
<tr className="odd:bg-white even:bg-neutral-50">
<td className="px-6 py-4 font-medium text-neutral-900">Sundial</td>
<td className="px-6 py-4">Core</td>
<td className="px-6 py-4">800</td>
<td className="px-6 py-4">Ethan</td>
<td className="px-6 py-4">2023-09-16</td>
<td className="px-6 py-4 w-32">
<div className="flex items-center gap-2">
<div className="flex-1 bg-neutral-200 rounded-full h-2">
<div className="bg-emerald-600 h-2 rounded-full transition-all" style={{width: '100%'}}></div>
</div>
<span className="text-xs text-neutral-600 min-w-max">15/15</span>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-200 text-emerald-800">Complete</span></td>
<td className="px-6 py-4 text-right">
<button className="p-2 rounded-lg hover:bg-neutral-100 transition" data-id="4">
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-1.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</main>
</div>
</div>

<div className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm hidden z-50" id="createClientModal">
<div className="fixed inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-xl shadow-xl w-full max-w-md">
<header className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
<h3 className="text-lg font-semibold tracking-tight">Create New Client</h3>
<button className="p-2 -mr-2 hover:bg-neutral-100 rounded-full" id="closeCreateModal">
<svg className="lucide lucide-x w-5 h-5 stroke-1.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</header>
<form className="p-6 space-y-4" id="createClientForm">
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Client Name *</label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="clientName" placeholder="Enter client name" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Email *</label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="clientEmail" placeholder="client@company.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Company *</label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="clientCompany" placeholder="Company name" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Pack *</label>
<select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="clientPack" required="">
<option value="">Select pack</option>
<option value="Core">Core</option>
<option value="Pro">Pro</option>
<option value="Bespoke">Bespoke</option>
</select>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Credits *</label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="clientCredits" placeholder="800" required="" type="number"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Assigned AM *</label>
<select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="clientAM" required="">
<option value="">Select AM</option>
<option value="Zoe">Zoe</option><option value="Mila">Mila</option><option value="Ethan">Ethan</option></select>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Purchase Date *</label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="clientDate" required="" type="date"/>
</div>
</div>
<div className="flex justify-end gap-3 pt-4">
<button className="px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg transition" id="cancelCreate" type="button">Cancel</button>
<button className="px-4 py-2 bg-emerald-600 text-white font-medium text-sm rounded-lg hover:bg-emerald-700 transition" type="submit">Create Client</button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm hidden z-50" id="addTaskModal">
<div className="fixed inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-xl shadow-xl w-full max-w-md">
<header className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
<h3 className="text-lg font-semibold tracking-tight">Add New Task</h3>
<button className="p-2 -mr-2 hover:bg-neutral-100 rounded-full" id="closeAddTaskModal">
<svg className="lucide lucide-x w-5 h-5 stroke-1.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</header>
<form className="p-6 space-y-4" id="addTaskForm">
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Task Name *</label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="taskName" placeholder="Enter task name" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Status</label>
<select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="taskStatus">
<option value="Pending">Pending</option>
<option value="In Progress">In Progress</option>
<option value="Blocked">Blocked</option>
<option value="Done">Done</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Priority</label>
<select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="taskPriority">
<option value="Low">Low</option>
<option value="Medium">Medium</option>
<option value="High">High</option>
</select>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Due Date</label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="taskDueDate" type="date"/>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Description</label>
<textarea className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none" id="taskDescription" placeholder="Task description (optional)" rows="3"></textarea>
</div>
<div className="flex justify-end gap-3 pt-4">
<button className="px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg transition" id="cancelAddTask" type="button">Cancel</button>
<button className="px-4 py-2 bg-emerald-600 text-white font-medium text-sm rounded-lg hover:bg-emerald-700 transition" type="submit">Add Task</button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm hidden z-50" id="clientDetailModal">
<div className="fixed inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
<header className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 sticky top-0 bg-white z-10">
<div>
<h3 className="text-lg font-semibold tracking-tight" id="clientDetailName">Client Details</h3>
<p className="text-sm text-neutral-500" id="clientDetailCompany">Company</p>
</div>
<button className="p-2 -mr-2 hover:bg-neutral-100 rounded-full" id="closeDetailModal">
<svg className="lucide lucide-x w-5 h-5 stroke-1.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</header>
<div className="p-6 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-4">
<div>
<p className="text-sm font-medium text-neutral-500">Package Type</p>
<p className="text-base font-medium" id="clientDetailPack">Core</p>
</div>
<div>
<p className="text-sm font-medium text-neutral-500">Credits</p>
<p className="text-base font-medium" id="clientDetailCredits">800</p>
</div>
</div>
<div className="space-y-4">
<div>
<p className="text-sm font-medium text-neutral-500">Assigned AM</p>
<p className="text-base font-medium" id="clientDetailAM">Zoe</p>
</div>
<div>
<p className="text-sm font-medium text-neutral-500">Purchase Date</p>
<p className="text-base font-medium" id="clientDetailDate">2023-09-10</p>
</div>
</div>
<div className="space-y-4">
<div>
<p className="text-sm font-medium text-neutral-500">Overall Progress</p>
<div className="flex items-center gap-2 mt-1">
<div className="flex-1 bg-neutral-200 rounded-full h-2">
<div className="bg-emerald-600 h-2 rounded-full transition-all" id="clientDetailProgress" style={{width: '13%'}}></div>
</div>
<span className="text-xs text-neutral-600 min-w-max" id="clientDetailProgressText">2/15</span>
</div>
</div>
<div>
<p className="text-sm font-medium text-neutral-500">Status</p>
<span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700 mt-1" id="clientDetailStatus">Not Started</span>
</div>
</div>
</div>

<div className="border-t border-neutral-200 pt-6">
<div className="flex items-center justify-between mb-4">
<h4 className="text-lg font-semibold tracking-tight">Tasks</h4>
<button className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600 text-white font-medium text-sm rounded-lg hover:bg-emerald-700 transition" id="addTaskBtn">
<svg className="lucide lucide-plus w-4 h-4 stroke-1.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Add Task
                        </button>
</div>
<div className="space-y-3" id="tasksList">

</div>
</div>
</div>
</div>
</div>
</div>

<svg style={{display: 'none'}}>
<symbol id="hash" viewbox="0 0 24 24">
<line x1="4" x2="20" y1="9" y2="9"></line>
<line x1="4" x2="20" y1="15" y2="15"></line>
<line x1="10" x2="8" y1="3" y2="21"></line>
<line x1="16" x2="14" y1="3" y2="21"></line>
</symbol>
</svg>


    </>
  );
}
