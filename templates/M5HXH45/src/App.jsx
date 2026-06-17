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
        email: "contact@arcadia.com",
        company: "Arcadia & Co",
        pack: "Core",
        credits: 800,
        assignedAM: "Zoe",
        purchaseDate: "2023-09-10",
        status: "Not Started",
        tasks: [
            { id: 1, name: "Initial Brand Audit", status: "Done", dueDate: "2023-09-15", priority: "High" },
            { id: 2, name: "Strategy Development", status: "In Progress", dueDate: "2023-09-20", priority: "Medium" }
        ]
    },
    {
        id: 2,
        name: "Nimbus Wear",
        email: "hello@nimbuswear.com",
        company: "Nimbus Wear",
        pack: "Pro",
        credits: 1200,
        assignedAM: "Mila",
        purchaseDate: "2023-09-13",
        status: "In Progress",
        tasks: [
            { id: 3, name: "Content Strategy", status: "Done", dueDate: "2023-09-18", priority: "High" },
            { id: 4, name: "Social Media Setup", status: "In Progress", dueDate: "2023-09-25", priority: "Medium" }
        ]
    },
    {
        id: 3,
        name: "Vertex Labs",
        email: "team@vertexlabs.io",
        company: "Vertex Labs",
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
        email: "info@sundial.co",
        company: "Sundial",
        pack: "Core",
        credits: 800,
        assignedAM: "Ethan",
        purchaseDate: "2023-09-16",
        status: "Complete",
        tasks: Array.from({length: 15}, (_, i) => ({
            id: i + 5,
            name: `Task ${i + 1}`,
            status: "Done",
            dueDate: "2023-09-20",
            priority: "Medium"
        }))
    }
];

let currentClientId = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderClients();
    setupEventListeners();
    updateCounts();
});

function setupEventListeners() {
    // Modal controls
    document.getElementById('createClientBtn').addEventListener('click', () => {
        document.getElementById('createClientModal').classList.remove('hidden');
    });
    
    document.getElementById('closeCreateModal').addEventListener('click', closeCreateModal);
    document.getElementById('cancelCreate').addEventListener('click', closeCreateModal);
    
    document.getElementById('addTaskBtn').addEventListener('click', () => {
        document.getElementById('addTaskModal').classList.remove('hidden');
    });
    
    document.getElementById('closeAddTaskModal').addEventListener('click', closeAddTaskModal);
    document.getElementById('cancelAddTask').addEventListener('click', closeAddTaskModal);
    
    document.getElementById('closeClientDetailModal').addEventListener('click', closeClientDetailModal);
    
    // Forms
    document.getElementById('createClientForm').addEventListener('submit', handleCreateClient);
    document.getElementById('addTaskForm').addEventListener('submit', handleAddTask);
    
    // Filters
    document.getElementById('filterType').addEventListener('change', applyFilters);
    document.getElementById('filterAM').addEventListener('change', applyFilters);
    document.getElementById('filterStatus').addEventListener('change', applyFilters);
    
    // Set today's date as default for new client
    document.getElementById('clientDate').valueAsDate = new Date();
}

function closeCreateModal() {
    document.getElementById('createClientModal').classList.add('hidden');
    document.getElementById('createClientForm').reset();
    document.getElementById('clientDate').valueAsDate = new Date();
}

function closeAddTaskModal() {
    document.getElementById('addTaskModal').classList.add('hidden');
    document.getElementById('addTaskForm').reset();
}

function closeClientDetailModal() {
    document.getElementById('clientDetailModal').classList.add('hidden');
    currentClientId = null;
}

function handleCreateClient(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newClient = {
        id: clients.length + 1,
        name: document.getElementById('clientName').value,
        email: document.getElementById('clientEmail').value,
        company: document.getElementById('clientCompany').value,
        pack: document.getElementById('clientPack').value,
        credits: parseInt(document.getElementById('clientCredits').value),
        assignedAM: document.getElementById('clientAM').value,
        purchaseDate: document.getElementById('clientDate').value,
        status: "Not Started",
        tasks: []
    };
    
    clients.push(newClient);
    renderClients();
    updateCounts();
    closeCreateModal();
}

function handleAddTask(e) {
    e.preventDefault();
    
    if (!currentClientId) return;
    
    const client = clients.find(c => c.id === currentClientId);
    if (!client) return;
    
    const newTask = {
        id: Date.now(),
        name: document.getElementById('taskName').value,
        status: document.getElementById('taskStatus').value,
        dueDate: document.getElementById('taskDueDate').value,
        priority: document.getElementById('taskPriority').value,
        description: document.getElementById('taskDescription').value
    };
    
    client.tasks.push(newTask);
    renderClients();
    renderClientDetail(currentClientId);
    closeAddTaskModal();
}

function renderClients() {
    const tbody = document.getElementById('clientRows');
    tbody.innerHTML = '';
    
    clients.forEach((client, index) => {
        const completedTasks = client.tasks.filter(t => t.status === 'Done').length;
        const totalTasks = client.tasks.length;
        const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        
        const row = document.createElement('tr');
        row.className = index % 2 === 0 ? 'bg-white' : 'bg-neutral-50';
        
        row.innerHTML = `
            <td class="px-6 py-4 font-medium text-neutral-900">${client.name}</td>
            <td class="px-6 py-4">${client.pack}</td>
            <td class="px-6 py-4">${client.credits}</td>
            <td class="px-6 py-4">${client.assignedAM}</td>
            <td class="px-6 py-4">${client.purchaseDate}</td>
            <td class="px-6 py-4 w-32">
                ${totalTasks > 0 ? `
                    <div class="flex items-center gap-2">
                        <div class="flex-1 bg-neutral-200 rounded-full h-2">
                            <div class="bg-emerald-600 h-2 rounded-full transition-all" style="width: ${progress}%"></div>
                        </div>
                        <span class="text-xs text-neutral-600 min-w-max">${completedTasks}/${totalTasks}</span>
                    </div>
                ` : '<span class="text-xs text-neutral-500">No tasks</span>'}
            </td>
            <td class="px-6 py-4">
                <span class="px-2 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(client.status)}">${client.status}</span>
            </td>
            <td class="px-6 py-4 text-right">
                <button class="p-2 rounded-lg hover:bg-neutral-100 transition" onclick="openClientDetail(${client.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-right" class="lucide lucide-arrow-right w-4 h-4 stroke-1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function getStatusClasses(status) {
    switch(status) {
        case 'Not Started': return 'bg-neutral-200 text-neutral-700';
        case 'In Progress': return 'bg-amber-200 text-amber-800';
        case 'Complete': return 'bg-emerald-200 text-emerald-800';
        default: return 'bg-neutral-200 text-neutral-700';
    }
}

function updateCounts() {
    const total = clients.length;
    const core = clients.filter(c => c.pack === 'Core').length;
    const pro = clients.filter(c => c.pack === 'Pro').length;
    const bespoke = clients.filter(c => c.pack === 'Bespoke').length;
    
    document.getElementById('totalCount').textContent = total;
    document.getElementById('coreCount').textContent = core;
    document.getElementById('proCount').textContent = pro;
    document.getElementById('bespokeCount').textContent = bespoke;
}

function applyFilters() {
    const typeFilter = document.getElementById('filterType').value;
    const amFilter = document.getElementById('filterAM').value;
    const statusFilter = document.getElementById('filterStatus').value;
    
    const rows = document.querySelectorAll('#clientRows tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const pack = cells[1].textContent;
        const am = cells[3].textContent;
        const status = cells[6].textContent.trim();
        
        const matchesType = !typeFilter || pack === typeFilter;
        const matchesAM = !amFilter || am === amFilter;
        const matchesStatus = !statusFilter || status === statusFilter;
        
        if (matchesType && matchesAM && matchesStatus) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function openClientDetail(clientId) {
    currentClientId = clientId;
    renderClientDetail(clientId);
    document.getElementById('clientDetailModal').classList.remove('hidden');
}

function renderClientDetail(clientId) {
    const client = clients.find(c => c.id === clientId);
    if (!client) return;
    
    document.getElementById('clientDetailName').textContent = client.name;
    document.getElementById('clientDetailCompany').textContent = client.company;
    document.getElementById('clientDetailPack').textContent = client.pack;
    document.getElementById('clientDetailCredits').textContent = client.credits;
    document.getElementById('clientDetailAM').textContent = client.assignedAM;
    
    // Render tasks
    const tasksList = document.getElementById('tasksList');
    tasksList.innerHTML = '';
    
    if (client.tasks.length === 0) {
        tasksList.innerHTML = '<p class="text-neutral-500 text-center py-8">No tasks yet. Add a task to get started.</p>';
    } else {
        client.tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'flex items-center justify-between p-3 bg-neutral-50 rounded-lg';
            taskElement.innerHTML = `
                <div class="flex-1">
                    <h5 class="font-medium">${task.name}</h5>
                    <div class="flex items-center gap-4 mt-1">
                        <span class="text-xs px-2 py-1 rounded-full ${getTaskStatusClasses(task.status)}">${task.status}</span>
                        <span class="text-xs text-neutral-600">Priority: ${task.priority}</span>
                        ${task.dueDate ? `<span class="text-xs text-neutral-600">Due: ${task.dueDate}</span>` : ''}
                    </div>
                </div>
                <button onclick="toggleTaskStatus(${clientId}, ${task.id})" class="px-3 py-1 text-xs rounded-lg ${task.status === 'Done' ? 'bg-emerald-600 text-white' : 'bg-neutral-200 text-neutral-700'} hover:opacity-80 transition">
                    ${task.status === 'Done' ? 'Completed' : 'Mark Done'}
                </button>
            `;
            tasksList.appendChild(taskElement);
        });
    }
}

function getTaskStatusClasses(status) {
    switch(status) {
        case 'Pending': return 'bg-neutral-200 text-neutral-700';
        case 'In Progress': return 'bg-blue-200 text-blue-800';
        case 'Blocked': return 'bg-red-200 text-red-800';
        case 'Done': return 'bg-emerald-200 text-emerald-800';
        default: return 'bg-neutral-200 text-neutral-700';
    }
}

function toggleTaskStatus(clientId, taskId) {
    const client = clients.find(c => c.id === clientId);
    if (!client) return;
    
    const task = client.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    task.status = task.status === 'Done' ? 'Pending' : 'Done';
    
    // Update client status based on task completion
    const completedTasks = client.tasks.filter(t => t.status === 'Done').length;
    const totalTasks = client.tasks.length;
    
    if (completedTasks === 0) {
        client.status = 'Not Started';
    } else if (completedTasks === totalTasks) {
        client.status = 'Complete';
    } else {
        client.status = 'In Progress';
    }
    
    renderClients();
    renderClientDetail(clientId);
}

// Add lucide icons
lucide.createIcons();

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
<label className="text-sm font-medium text-neutral-700 block">Due Date</label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="taskDueDate" type="date"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Priority</label>
<select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" id="taskPriority">
<option value="Low">Low</option>
<option selected="" value="Medium">Medium</option>
<option value="High">High</option>
<option value="Critical">Critical</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-neutral-700 block">Description</label>
<textarea className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none" id="taskDescription" placeholder="Task details..." rows="3"></textarea>
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
<header className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 sticky top-0 bg-white">
<div>
<h3 className="text-lg font-semibold tracking-tight" id="clientDetailName">Client Details</h3>
<p className="text-sm text-neutral-600" id="clientDetailCompany">Company Name</p>
</div>
<button className="p-2 -mr-2 hover:bg-neutral-100 rounded-full" id="closeClientDetailModal">
<svg className="lucide lucide-x w-5 h-5 stroke-1.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</header>
<div className="p-6 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-neutral-50 rounded-lg p-4">
<p className="text-sm font-medium text-neutral-500">Pack Type</p>
<p className="text-lg font-semibold" id="clientDetailPack">Core</p>
</div>
<div className="bg-neutral-50 rounded-lg p-4">
<p className="text-sm font-medium text-neutral-500">Credits</p>
<p className="text-lg font-semibold" id="clientDetailCredits">800</p>
</div>
<div className="bg-neutral-50 rounded-lg p-4">
<p className="text-sm font-medium text-neutral-500">Assigned AM</p>
<p className="text-lg font-semibold" id="clientDetailAM">Zoe</p>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold">Tasks</h4>
<button className="flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white font-medium text-sm rounded-lg hover:bg-emerald-700 transition" id="addTaskBtn">
<svg className="lucide lucide-plus w-4 h-4 stroke-1.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Add Task
                        </button>
</div>
<div className="space-y-3" id="tasksList">

</div>
</div>

<div className="space-y-4">
<h4 className="text-lg font-semibold">Recent Activity</h4>
<div className="space-y-3" id="activityFeed">
<div className="flex gap-3 p-3 bg-neutral-50 rounded-lg">
<div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
<svg className="lucide lucide-user-plus w-4 h-4 text-emerald-600 stroke-1.5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Client created</p>
<p className="text-xs text-neutral-600">Account set up and initial onboarding completed</p>
<p className="text-xs text-neutral-500 mt-1">2 days ago</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
