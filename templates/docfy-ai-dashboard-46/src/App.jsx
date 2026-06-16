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
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
}
}
}
}
}



        // --- State Management ---
        const state = {
            currentPage: 'dashboard',
            projects: [
                { id: 1, name: 'Legal Contracts 2024', docs: 145, status: 'Active', progress: 75, members: 4, updated: '2h ago' },
                { id: 2, name: 'HR Onboarding', docs: 32, status: 'Completed', progress: 100, members: 2, updated: '1d ago' },
                { id: 3, name: 'Q3 Financial Reports', docs: 89, status: 'Processing', progress: 45, members: 6, updated: '5m ago' },
                { id: 4, name: 'Vendor Invoices', docs: 1205, status: 'Active', progress: 92, members: 3, updated: '3h ago' },
                { id: 5, name: 'Technical Specs', docs: 12, status: 'Draft', progress: 10, members: 1, updated: '1w ago' },
            ],
            activities: [
                { id: 1, file: 'invoice_8821.pdf', type: 'Extraction', status: 'Success', time: 'Just now' },
                { id: 2, file: 'contract_draft_v2.docx', type: 'Anonymization', status: 'Processing', time: '2 mins ago' },
                { id: 3, file: 'employee_data.csv', type: 'Classification', status: 'Success', time: '1 hour ago' },
                { id: 4, file: 'scan_001.jpg', type: 'Upload', status: 'Failed', time: '3 hours ago' },
            ],
            chatHistory: [
                { id: 1, title: 'Analyze Lease Agreement', date: 'Today' },
                { id: 2, title: 'Extract Invoice Totals', date: 'Yesterday' },
                { id: 3, title: 'Identify Clauses', date: 'Last Week' }
            ],
            categories: [
                { name: 'Invoices', count: 1240, color: 'text-amber-600 bg-amber-50', confidence: 98 },
                { name: 'Contracts', count: 328, color: 'text-blue-600 bg-blue-50', confidence: 95 },
                { name: 'Receipts', count: 854, color: 'text-emerald-600 bg-emerald-50', confidence: 92 },
                { name: 'ID Documents', count: 156, color: 'text-purple-600 bg-purple-50', confidence: 99 },
            ]
        };

        // --- Render Functions for Each Page ---

        function renderDashboard() {
            return `
                <div class="fade-in space-y-8">
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        ${renderStatCard('Total Projects', '12', 'folder', 'text-brand-600', 'bg-brand-50')}
                        ${renderStatCard('Docs Processed', '14,205', 'file-text', 'text-emerald-600', 'bg-emerald-50')}
                        ${renderStatCard('Pages Redacted', '892', 'shield', 'text-indigo-600', 'bg-indigo-50')}
                        ${renderStatCard('Data Extractions', '5.2k', 'database', 'text-amber-600', 'bg-amber-50')}
                    </div>

                    <div class="grid lg:grid-cols-3 gap-8">
                        <!-- Active Projects -->
                        <div class="lg:col-span-2 space-y-4">
                            <div class="flex items-center justify-between">
                                <h2 class="text-lg font-semibold text-slate-900 tracking-tight">Active Projects</h2>
                                <button onclick="navigate('projects')" class="text-sm text-brand-600 font-medium hover:text-brand-700">View All</button>
                            </div>
                            <div class="grid md:grid-cols-2 gap-4">
                                ${state.projects.slice(0,4).map(p => `
                                    <div class="group bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
                                        <div class="flex justify-between items-start mb-4">
                                            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                                                <i data-lucide="folder-open" class="w-5 h-5"></i>
                                            </div>
                                            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(p.status)}">
                                                ${p.status}
                                            </span>
                                        </div>
                                        <h3 class="font-semibold text-slate-900 mb-1">${p.name}</h3>
                                        <p class="text-xs text-slate-500 mb-4">${p.docs} Documents • Updated ${p.updated}</p>
                                        <div class="w-full bg-slate-100 rounded-full h-1.5 mb-4">
                                            <div class="bg-brand-500 h-1.5 rounded-full" style="width: ${p.progress}%"></div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex -space-x-2">
                                                ${[...Array(p.members)].map((_,i) => `<div class="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-bold">${String.fromCharCode(65+i)}</div>`).join('')}
                                            </div>
                                            <button class="text-slate-400 hover:text-brand-600"><i data-lucide="more-horizontal" class="w-4 h-4"></i></button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Recent Activity -->
                        <div class="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
                            <div class="p-5 border-b border-slate-100">
                                <h2 class="text-lg font-semibold text-slate-900 tracking-tight">Recent Activity</h2>
                            </div>
                            <div class="p-2 flex-1 overflow-auto">
                                <table class="w-full text-left text-sm">
                                    <tbody class="divide-y divide-slate-50">
                                        ${state.activities.map(a => `
                                            <tr class="hover:bg-slate-50/50 transition-colors">
                                                <td class="p-3">
                                                    <div class="flex items-center gap-3">
                                                        <div class="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-500">
                                                            <i data-lucide="file" class="w-4 h-4"></i>
                                                        </div>
                                                        <div>
                                                            <div class="font-medium text-slate-900">${a.file}</div>
                                                            <div class="text-xs text-slate-500">${a.type}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-3 text-right">
                                                    <div class="flex flex-col items-end gap-1">
                                                        <span class="text-xs font-medium ${a.status === 'Success' ? 'text-emerald-600' : a.status === 'Processing' ? 'text-amber-600' : 'text-red-600'}">${a.status}</span>
                                                        <span class="text-xs text-slate-400">${a.time}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                            <div class="p-3 border-t border-slate-100 text-center">
                                <button class="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors">View All History</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderProjects() {
            return `
                <div class="fade-in h-full flex flex-col">
                    <div class="flex justify-between items-center mb-6">
                        <div>
                            <h1 class="text-2xl font-semibold text-slate-900 tracking-tight">Projects</h1>
                            <p class="text-slate-500 text-sm">Manage and organize your document workspaces.</p>
                        </div>
                        <button onclick="openModal('newProjectModal')" class="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-sm">
                            <i data-lucide="plus" class="w-4 h-4"></i>
                            New Project
                        </button>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <!-- Add New Card (Visual) -->
                        <div onclick="openModal('newProjectModal')" class="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-brand-300 hover:bg-brand-50/50 transition-all min-h-[200px] group">
                            <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3 group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
                                <i data-lucide="plus" class="w-6 h-6"></i>
                            </div>
                            <h3 class="font-medium text-slate-900">Create New Project</h3>
                            <p class="text-sm text-slate-500 mt-1">Start a new collection</p>
                        </div>

                        ${state.projects.map(p => `
                            <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                        <i data-lucide="folder" class="w-5 h-5"></i>
                                    </div>
                                    <button class="text-slate-400 hover:text-slate-600"><i data-lucide="more-vertical" class="w-4 h-4"></i></button>
                                </div>
                                <h3 class="text-lg font-semibold text-slate-900 mb-1">${p.name}</h3>
                                <p class="text-sm text-slate-500 mb-6 line-clamp-2">Automated processing pipeline for ${p.name.toLowerCase()}. Includes extraction and validation.</p>
                                
                                <div class="mt-auto">
                                    <div class="flex items-center justify-between text-sm text-slate-500 mb-2">
                                        <span>Progress</span>
                                        <span class="font-medium text-slate-700">${p.progress}%</span>
                                    </div>
                                    <div class="w-full bg-slate-100 rounded-full h-1.5 mb-5">
                                        <div class="bg-indigo-500 h-1.5 rounded-full" style="width: ${p.progress}%"></div>
                                    </div>
                                    
                                    <div class="flex items-center justify-between border-t border-slate-100 pt-4">
                                        <div class="flex -space-x-2">
                                             ${[...Array(p.members)].map((_,i) => `<div class="w-7 h-7 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">${String.fromCharCode(65+i)}</div>`).join('')}
                                        </div>
                                        <span class="text-xs text-slate-400">${p.docs} files</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function renderDocuments() {
            return `
                <div class="fade-in flex flex-col h-full">
                     <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <h1 class="text-2xl font-semibold text-slate-900 tracking-tight">Documents</h1>
                            <p class="text-slate-500 text-sm">Centralized repository for all your files.</p>
                        </div>
                        <div class="flex gap-2 w-full sm:w-auto">
                            <button class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 shadow-sm">
                                <i data-lucide="filter" class="w-4 h-4"></i> Filter
                            </button>
                            <button class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 shadow-sm shadow-brand-500/30">
                                <i data-lucide="upload-cloud" class="w-4 h-4"></i> Upload
                            </button>
                        </div>
                    </div>

                    <!-- Upload Area -->
                    <div class="mb-6 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 p-8 text-center hover:border-brand-400 hover:bg-brand-50/30 transition-all cursor-pointer">
                        <div class="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-3 text-brand-500">
                            <i data-lucide="upload" class="w-6 h-6"></i>
                        </div>
                        <p class="text-sm font-medium text-slate-900">Click to upload or drag and drop</p>
                        <p class="text-xs text-slate-500 mt-1">PDF, DOCX, JPG or PNG (max. 10MB)</p>
                    </div>

                    <!-- Table -->
                    <div class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex-1">
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-sm whitespace-nowrap">
                                <thead class="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold">
                                    <tr>
                                        <th class="px-6 py-4">Name</th>
                                        <th class="px-6 py-4">Project</th>
                                        <th class="px-6 py-4">Date Uploaded</th>
                                        <th class="px-6 py-4">Size</th>
                                        <th class="px-6 py-4">Status</th>
                                        <th class="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-100">
                                    <tr class="hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <td class="px-6 py-3">
                                            <div class="flex items-center gap-3">
                                                <i data-lucide="file-text" class="w-5 h-5 text-slate-400 group-hover:text-brand-500"></i>
                                                <span class="font-medium text-slate-900">Contract_Alpha_Signed.pdf</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 text-slate-500">Legal Contracts 2024</td>
                                        <td class="px-6 py-3 text-slate-500">Oct 24, 2023</td>
                                        <td class="px-6 py-3 text-slate-500">2.4 MB</td>
                                        <td class="px-6 py-3"><span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">Processed</span></td>
                                        <td class="px-6 py-3 text-right">
                                            <button class="text-slate-400 hover:text-slate-600"><i data-lucide="more-horizontal" class="w-4 h-4"></i></button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <td class="px-6 py-3">
                                            <div class="flex items-center gap-3">
                                                <i data-lucide="file-spreadsheet" class="w-5 h-5 text-slate-400 group-hover:text-green-500"></i>
                                                <span class="font-medium text-slate-900">Financials_Q3.xlsx</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 text-slate-500">Q3 Financial Reports</td>
                                        <td class="px-6 py-3 text-slate-500">Oct 23, 2023</td>
                                        <td class="px-6 py-3 text-slate-500">856 KB</td>
                                        <td class="px-6 py-3"><span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">Analyzing</span></td>
                                        <td class="px-6 py-3 text-right">
                                            <button class="text-slate-400 hover:text-slate-600"><i data-lucide="more-horizontal" class="w-4 h-4"></i></button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <td class="px-6 py-3">
                                            <div class="flex items-center gap-3">
                                                <i data-lucide="image" class="w-5 h-5 text-slate-400 group-hover:text-purple-500"></i>
                                                <span class="font-medium text-slate-900">ID_Scan_Front.jpg</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 text-slate-500">HR Onboarding</td>
                                        <td class="px-6 py-3 text-slate-500">Oct 22, 2023</td>
                                        <td class="px-6 py-3 text-slate-500">1.1 MB</td>
                                        <td class="px-6 py-3"><span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">Pending</span></td>
                                        <td class="px-6 py-3 text-right">
                                            <button class="text-slate-400 hover:text-slate-600"><i data-lucide="more-horizontal" class="w-4 h-4"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderExtractor() {
            return `
                <div class="fade-in h-full flex flex-col">
                    <div class="flex justify-between items-center mb-6">
                        <h1 class="text-2xl font-semibold text-slate-900 tracking-tight">Data Extractor</h1>
                        <button class="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 shadow-sm flex items-center gap-2">
                             <i data-lucide="download" class="w-4 h-4"></i> Export JSON
                        </button>
                    </div>

                    <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
                        <!-- Preview Panel -->
                        <div class="bg-slate-200/50 rounded-xl border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                             <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-10 bg-center"></div>
                             <div class="text-center p-8">
                                <i data-lucide="file-text" class="w-16 h-16 text-slate-400 mx-auto mb-4"></i>
                                <p class="text-slate-500 font-medium">Invoice_INV-2023-001.pdf</p>
                                <div class="mt-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button class="p-2 bg-white rounded-full shadow hover:text-brand-600"><i data-lucide="zoom-in" class="w-5 h-5"></i></button>
                                    <button class="p-2 bg-white rounded-full shadow hover:text-brand-600"><i data-lucide="move" class="w-5 h-5"></i></button>
                                </div>
                             </div>
                        </div>

                        <!-- Data Panel -->
                        <div class="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                            <div class="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                                <h3 class="font-semibold text-slate-900">Extracted Data</h3>
                                <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">98% Confidence</span>
                            </div>
                            <div class="flex-1 overflow-y-auto p-4 space-y-4">
                                <div>
                                    <label class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Invoice Details</label>
                                    <div class="mt-2 space-y-2">
                                        <div class="flex justify-between items-center p-2 rounded hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                                            <span class="text-sm text-slate-500">Invoice Number</span>
                                            <span class="text-sm font-mono font-medium text-slate-900 bg-slate-100 px-2 py-0.5 rounded">INV-2023-001</span>
                                        </div>
                                        <div class="flex justify-between items-center p-2 rounded hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                                            <span class="text-sm text-slate-500">Date</span>
                                            <span class="text-sm font-medium text-slate-900">Oct 24, 2023</span>
                                        </div>
                                        <div class="flex justify-between items-center p-2 rounded hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                                            <span class="text-sm text-slate-500">Vendor</span>
                                            <span class="text-sm font-medium text-slate-900">Acme Corp Ltd.</span>
                                        </div>
                                        <div class="flex justify-between items-center p-2 rounded hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                                            <span class="text-sm text-slate-500">Total Amount</span>
                                            <span class="text-sm font-bold text-slate-900">$ 4,500.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Line Items (3)</label>
                                    <table class="w-full text-sm mt-2 text-left">
                                        <thead class="bg-slate-50 text-xs text-slate-500">
                                            <tr>
                                                <th class="p-2">Item</th>
                                                <th class="p-2 text-right">Qty</th>
                                                <th class="p-2 text-right">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-slate-100">
                                            <tr><td class="p-2">Consulting Services</td><td class="p-2 text-right">10</td><td class="p-2 text-right">$150</td></tr>
                                            <tr><td class="p-2">Server Setup</td><td class="p-2 text-right">1</td><td class="p-2 text-right">$2000</td></tr>
                                            <tr><td class="p-2">Maintenance</td><td class="p-2 text-right">1</td><td class="p-2 text-right">$1000</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderAnonymization() {
            return `
                 <div class="fade-in h-full flex flex-col">
                    <div class="flex justify-between items-center mb-6">
                        <h1 class="text-2xl font-semibold text-slate-900 tracking-tight">Anonymization</h1>
                        <button class="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 shadow-sm flex items-center gap-2">
                             <i data-lucide="check" class="w-4 h-4"></i> Apply & Download
                        </button>
                    </div>

                    <div class="flex-1 flex gap-6 min-h-0 overflow-hidden">
                        <!-- Left Sidebar: Findings -->
                        <div class="w-80 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
                            <div class="p-4 border-b border-slate-100">
                                <h3 class="font-semibold text-slate-900">Sensitive Data</h3>
                                <p class="text-xs text-slate-500 mt-1">5 items detected</p>
                            </div>
                            <div class="overflow-y-auto flex-1 p-2 space-y-1">
                                <div class="p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
                                    <input type="checkbox" checked class="mt-1 w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500">
                                    <div>
                                        <span class="block text-sm font-medium text-slate-900">CPF / ID</span>
                                        <span class="block text-xs text-slate-500 font-mono">123.***.***-99</span>
                                        <div class="mt-1 flex gap-2">
                                            <span class="text-[10px] bg-white px-1.5 py-0.5 rounded border border-red-200 text-red-600">High Risk</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 bg-white hover:bg-slate-50 border border-transparent rounded-lg flex items-start gap-3 transition-colors">
                                    <input type="checkbox" checked class="mt-1 w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500">
                                    <div>
                                        <span class="block text-sm font-medium text-slate-900">Email Address</span>
                                        <span class="block text-xs text-slate-500">john.doe@example...</span>
                                    </div>
                                </div>
                                 <div class="p-3 bg-white hover:bg-slate-50 border border-transparent rounded-lg flex items-start gap-3 transition-colors">
                                    <input type="checkbox" checked class="mt-1 w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500">
                                    <div>
                                        <span class="block text-sm font-medium text-slate-900">Phone</span>
                                        <span class="block text-xs text-slate-500">+1 (555) 012-3456</span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 border-t border-slate-100 bg-slate-50/50">
                                <label class="text-xs font-semibold text-slate-500 uppercase">Redaction Style</label>
                                <select class="w-full mt-2 text-sm border-slate-200 rounded-md shadow-sm">
                                    <option>Black Box</option>
                                    <option>Blur</option>
                                    <option>Replace with [REDACTED]</option>
                                </select>
                            </div>
                        </div>

                        <!-- Main Preview -->
                         <div class="flex-1 bg-slate-100 rounded-xl border border-slate-200 relative overflow-hidden flex flex-col">
                            <div class="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur shadow-sm rounded-full px-4 py-1.5 flex gap-4 text-slate-600">
                                <button class="hover:text-brand-600"><i data-lucide="mouse-pointer" class="w-4 h-4"></i></button>
                                <button class="hover:text-brand-600"><i data-lucide="crop" class="w-4 h-4"></i></button>
                                <div class="w-px bg-slate-200 h-4 self-center"></div>
                                <button class="hover:text-brand-600"><i data-lucide="zoom-in" class="w-4 h-4"></i></button>
                                <span class="text-xs font-medium self-center">100%</span>
                                <button class="hover:text-brand-600"><i data-lucide="zoom-out" class="w-4 h-4"></i></button>
                            </div>
                            
                            <!-- Mock Document Canvas -->
                            <div class="flex-1 p-8 overflow-auto flex justify-center bg-slate-200/50">
                                <div class="w-[500px] h-[700px] bg-white shadow-lg p-10 relative">
                                    <!-- Fake Content -->
                                    <div class="w-32 h-8 bg-slate-800 mb-8"></div>
                                    <div class="w-full h-px bg-slate-200 mb-8"></div>
                                    <div class="space-y-4 text-xs text-slate-300 font-serif leading-relaxed select-none">
                                        <div class="w-full bg-slate-200 h-2"></div>
                                        <div class="w-11/12 bg-slate-200 h-2"></div>
                                        <div class="w-full bg-slate-200 h-2"></div>
                                        <div class="w-3/4 bg-slate-200 h-2 mb-6"></div>
                                        
                                        <!-- Highlighted PII -->
                                        <div class="relative group inline-block w-40 h-3 bg-red-100 border border-red-300 rounded cursor-pointer">
                                            <div class="absolute -top-6 left-0 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">CPF: 123.456.789-00</div>
                                        </div>
                                        
                                        <div class="w-full bg-slate-200 h-2 mt-2"></div>
                                        <div class="w-5/6 bg-slate-200 h-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            `;
        }

        function renderDocPrompt() {
            return `
                <div class="fade-in h-full flex rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <!-- Sidebar -->
                    <div class="w-72 bg-slate-50 border-r border-slate-200 flex flex-col hidden md:flex">
                         <div class="p-4">
                            <button class="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-brand-300 transition-all shadow-sm group">
                                <i data-lucide="plus" class="w-4 h-4 text-slate-400 group-hover:text-brand-500"></i>
                                New Chat
                            </button>
                        </div>
                        <div class="flex-1 overflow-y-auto px-2">
                            <div class="text-xs font-semibold text-slate-400 px-3 py-2 uppercase">History</div>
                            ${state.chatHistory.map(c => `
                                <div class="px-3 py-2.5 rounded-lg hover:bg-slate-100 cursor-pointer text-sm text-slate-700 group flex justify-between items-center transition-colors">
                                    <span class="truncate pr-2">${c.title}</span>
                                    <span class="text-[10px] text-slate-400 hidden group-hover:block">${c.date}</span>
                                </div>
                            `).join('')}
                        </div>
                         <div class="p-4 border-t border-slate-200">
                             <div class="text-xs text-slate-400 text-center">Using GPT-4 Model</div>
                         </div>
                    </div>

                    <!-- Chat Area -->
                    <div class="flex-1 flex flex-col bg-white">
                        <!-- Context Selector -->
                        <div class="h-14 border-b border-slate-100 flex items-center px-6 justify-between">
                            <div class="flex items-center gap-2">
                                <span class="text-sm text-slate-500">Context:</span>
                                <button class="flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-full border border-brand-100">
                                    <i data-lucide="folder" class="w-3 h-3"></i>
                                    Legal Contracts 2024
                                    <i data-lucide="chevron-down" class="w-3 h-3 ml-1 opacity-50"></i>
                                </button>
                            </div>
                            <button class="md:hidden text-slate-400"><i data-lucide="history" class="w-5 h-5"></i></button>
                        </div>

                        <!-- Messages -->
                        <div class="flex-1 overflow-y-auto p-6 space-y-6">
                            <!-- AI Message -->
                            <div class="flex gap-4 max-w-3xl">
                                <div class="w-8 h-8 rounded-lg bg-brand-100 text-brand-600 flex-shrink-0 flex items-center justify-center">
                                    <i data-lucide="bot" class="w-5 h-5"></i>
                                </div>
                                <div class="space-y-2">
                                    <div class="bg-slate-50 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700 leading-relaxed border border-slate-100">
                                        <p>Hello! I've analyzed the 145 documents in the <strong>Legal Contracts 2024</strong> project.</p>
                                        <p class="mt-2">I can help you with:</p>
                                        <ul class="list-disc list-inside mt-1 space-y-1 text-slate-600">
                                            <li>Extracting expiration dates</li>
                                            <li>Identifying liability clauses</li>
                                            <li>Summarizing obligations</li>
                                        </ul>
                                    </div>
                                    <div class="text-xs text-slate-400 ml-1">10:23 AM</div>
                                </div>
                            </div>

                            <!-- User Message -->
                            <div class="flex gap-4 max-w-3xl ml-auto flex-row-reverse">
                                <div class="w-8 h-8 rounded-lg bg-slate-900 text-white flex-shrink-0 flex items-center justify-center">
                                    <span class="text-xs font-bold">AM</span>
                                </div>
                                <div class="space-y-2">
                                    <div class="bg-brand-600 p-4 rounded-2xl rounded-tr-none text-sm text-white leading-relaxed shadow-sm">
                                        Show me all contracts that expire in Q4 2023.
                                    </div>
                                    <div class="text-xs text-slate-400 text-right mr-1">10:24 AM</div>
                                </div>
                            </div>

                            <!-- AI Response -->
                            <div class="flex gap-4 max-w-3xl">
                                <div class="w-8 h-8 rounded-lg bg-brand-100 text-brand-600 flex-shrink-0 flex items-center justify-center">
                                    <i data-lucide="bot" class="w-5 h-5"></i>
                                </div>
                                <div class="space-y-2">
                                    <div class="bg-slate-50 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700 leading-relaxed border border-slate-100">
                                        <p>I found <strong>3 contracts</strong> expiring between October and December 2023:</p>
                                        <div class="mt-3 space-y-2">
                                            <a href="#" class="block p-3 bg-white border border-slate-200 rounded-lg hover:border-brand-300 transition-colors group">
                                                <div class="flex items-center gap-2 font-medium text-slate-900">
                                                    <i data-lucide="file-text" class="w-4 h-4 text-slate-400 group-hover:text-brand-500"></i>
                                                    Vendor_Service_Agreement_v2.pdf
                                                </div>
                                                <div class="text-xs text-slate-500 mt-1 ml-6">Expires: Nov 15, 2023 • Page 12</div>
                                            </a>
                                             <a href="#" class="block p-3 bg-white border border-slate-200 rounded-lg hover:border-brand-300 transition-colors group">
                                                <div class="flex items-center gap-2 font-medium text-slate-900">
                                                    <i data-lucide="file-text" class="w-4 h-4 text-slate-400 group-hover:text-brand-500"></i>
                                                    Office_Lease_Annex.pdf
                                                </div>
                                                <div class="text-xs text-slate-500 mt-1 ml-6">Expires: Dec 31, 2023 • Page 4</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="text-xs text-slate-400 ml-1">10:25 AM</div>
                                </div>
                            </div>
                        </div>

                        <!-- Input Area -->
                        <div class="p-4 border-t border-slate-100 bg-white">
                            <div class="relative flex items-end gap-2 border border-slate-200 rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-500 transition-all bg-white">
                                <button class="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
                                    <i data-lucide="paperclip" class="w-5 h-5"></i>
                                </button>
                                <textarea rows="1" placeholder="Ask Docfy anything..." class="w-full bg-transparent border-0 focus:ring-0 text-sm text-slate-900 resize-none py-2 max-h-32"></textarea>
                                <button class="p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                                    <i data-lucide="send" class="w-4 h-4"></i>
                                </button>
                            </div>
                            <div class="text-center mt-2">
                                <p class="text-[10px] text-slate-400">AI can make mistakes. Verify critical information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderClassifier() {
            return `
                <div class="fade-in space-y-6">
                    <div class="flex justify-between items-center">
                        <div>
                            <h1 class="text-2xl font-semibold text-slate-900 tracking-tight">Classifier</h1>
                            <p class="text-slate-500 text-sm">Automatically categorize documents using ML models.</p>
                        </div>
                        <div class="flex gap-2">
                             <button class="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 shadow-sm flex items-center gap-2">
                                <i data-lucide="plus" class="w-4 h-4"></i> Add Category
                            </button>
                            <button class="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 shadow-sm shadow-brand-500/30 flex items-center gap-2">
                                <i data-lucide="play" class="w-4 h-4"></i> Retrain Model
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Left: Categories -->
                        <div class="space-y-4">
                             <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <h3 class="font-semibold text-slate-900 mb-4">Defined Categories</h3>
                                <div class="space-y-3">
                                    ${state.categories.map(c => `
                                        <div class="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:shadow-sm bg-white transition-all cursor-pointer group">
                                            <div class="flex items-center gap-3">
                                                <div class="w-2 h-2 rounded-full ${c.color.replace('text-', 'bg-').split(' ')[0]}"></div>
                                                <span class="font-medium text-slate-900 text-sm">${c.name}</span>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-xs font-medium text-slate-500">${c.count} docs</div>
                                                <div class="text-[10px] text-green-600">${c.confidence}% accuracy</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                             <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-indigo-100 rounded-lg text-indigo-600"><i data-lucide="sparkles" class="w-4 h-4"></i></div>
                                    <h3 class="font-semibold text-indigo-900 text-sm">Model Health</h3>
                                </div>
                                <p class="text-xs text-indigo-700 leading-relaxed">Your classification model is performing well with an average accuracy of <span class="font-bold">96.5%</span>. Last retrained 2 days ago.</p>
                             </div>
                        </div>

                        <!-- Right: Queue -->
                        <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
                            <div class="p-5 border-b border-slate-100 flex justify-between items-center">
                                <h3 class="font-semibold text-slate-900">Recent Classifications</h3>
                                <span class="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">Queue: 12</span>
                            </div>
                            <div class="flex-1 overflow-x-auto">
                                <table class="w-full text-left text-sm">
                                    <thead class="bg-slate-50 text-xs uppercase text-slate-500 font-semibold">
                                        <tr>
                                            <th class="px-5 py-3">Document</th>
                                            <th class="px-5 py-3">Predicted</th>
                                            <th class="px-5 py-3">Confidence</th>
                                            <th class="px-5 py-3 text-right">Verify</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-50">
                                        <tr class="hover:bg-slate-50/50">
                                            <td class="px-5 py-3 font-medium text-slate-900">Scan_2023_10_24.pdf</td>
                                            <td class="px-5 py-3"><span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">Invoice</span></td>
                                            <td class="px-5 py-3">
                                                <div class="flex items-center gap-2">
                                                    <div class="flex-1 h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                                                        <div class="h-full bg-green-500 rounded-full" style="width: 98%"></div>
                                                    </div>
                                                    <span class="text-xs text-slate-500">98%</span>
                                                </div>
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                <div class="flex justify-end gap-1">
                                                    <button class="p-1 text-green-600 hover:bg-green-50 rounded"><i data-lucide="check" class="w-4 h-4"></i></button>
                                                    <button class="p-1 text-red-600 hover:bg-red-50 rounded"><i data-lucide="x" class="w-4 h-4"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-slate-50/50">
                                            <td class="px-5 py-3 font-medium text-slate-900">Unknown_Doc_44.jpg</td>
                                            <td class="px-5 py-3"><span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">ID Document</span></td>
                                            <td class="px-5 py-3">
                                                <div class="flex items-center gap-2">
                                                    <div class="flex-1 h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                                                        <div class="h-full bg-yellow-400 rounded-full" style="width: 75%"></div>
                                                    </div>
                                                    <span class="text-xs text-slate-500">75%</span>
                                                </div>
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                <div class="flex justify-end gap-1">
                                                    <button class="p-1 text-green-600 hover:bg-green-50 rounded"><i data-lucide="check" class="w-4 h-4"></i></button>
                                                    <button class="p-1 text-red-600 hover:bg-red-50 rounded"><i data-lucide="x" class="w-4 h-4"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                         <tr class="hover:bg-slate-50/50">
                                            <td class="px-5 py-3 font-medium text-slate-900">Lease_Draft_Final.docx</td>
                                            <td class="px-5 py-3"><span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">Contract</span></td>
                                            <td class="px-5 py-3">
                                                <div class="flex items-center gap-2">
                                                    <div class="flex-1 h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                                                        <div class="h-full bg-green-500 rounded-full" style="width: 92%"></div>
                                                    </div>
                                                    <span class="text-xs text-slate-500">92%</span>
                                                </div>
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                <div class="flex justify-end gap-1">
                                                    <button class="p-1 text-green-600 hover:bg-green-50 rounded"><i data-lucide="check" class="w-4 h-4"></i></button>
                                                    <button class="p-1 text-red-600 hover:bg-red-50 rounded"><i data-lucide="x" class="w-4 h-4"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                             <div class="p-4 border-t border-slate-100 bg-slate-50/50 text-center">
                                <button class="text-sm text-brand-600 font-medium hover:text-brand-700">Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderSettings() {
             return `
                <div class="fade-in max-w-4xl mx-auto w-full">
                    <h1 class="text-2xl font-semibold text-slate-900 tracking-tight mb-1">Settings</h1>
                    <p class="text-slate-500 text-sm mb-6">Manage your account, team and preferences.</p>
                    
                    <div class="flex flex-col md:flex-row gap-8">
                        <!-- Sidebar Navigation -->
                        <div class="w-full md:w-64 flex-shrink-0">
                            <nav class="space-y-1">
                                <button class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-900 bg-white shadow-sm ring-1 ring-slate-200">
                                    <i data-lucide="user" class="w-4 h-4 text-slate-500"></i> General
                                </button>
                                <button class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                                    <i data-lucide="users" class="w-4 h-4 text-slate-500"></i> Team Members
                                </button>
                                <button class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                                    <i data-lucide="key" class="w-4 h-4 text-slate-500"></i> API Keys
                                </button>
                                <button class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                                    <i data-lucide="credit-card" class="w-4 h-4 text-slate-500"></i> Billing
                                </button>
                            </nav>
                        </div>

                        <!-- Settings Content -->
                        <div class="flex-1 space-y-8">
                            <!-- Profile Section -->
                            <section class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                <div class="p-6 border-b border-slate-100">
                                    <h2 class="text-base font-semibold text-slate-900">Profile Information</h2>
                                    <p class="text-sm text-slate-500 mt-1">Update your photo and personal details.</p>
                                </div>
                                <div class="p-6 space-y-6">
                                    <div class="flex items-center gap-6">
                                        <img src="https://ui-avatars.com/api/?name=Alex+Morgan&background=0f172a&color=fff&size=128" class="w-20 h-20 rounded-full border-4 border-slate-50">
                                        <div>
                                            <button class="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm">Change Photo</button>
                                            <button class="ml-2 px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-700">Remove</button>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                            <input type="text" value="Alex" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                            <input type="text" value="Morgan" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
                                        </div>
                                        <div class="md:col-span-2">
                                            <label class="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                            <div class="relative">
                                                <i data-lucide="mail" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"></i>
                                                <input type="email" value="alex.morgan@company.com" class="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                                    <button class="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 shadow-sm">Save Changes</button>
                                </div>
                            </section>

                            <!-- Preferences -->
                            <section class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                <div class="p-6 border-b border-slate-100">
                                    <h2 class="text-base font-semibold text-slate-900">Notifications</h2>
                                    <p class="text-sm text-slate-500 mt-1">Manage how we communicate with you.</p>
                                </div>
                                <div class="p-6 space-y-4">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <div class="text-sm font-medium text-slate-900">Email Analysis Reports</div>
                                            <div class="text-xs text-slate-500">Receive a weekly summary of processed docs.</div>
                                        </div>
                                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                            <input type="checkbox" name="toggle" id="toggle1" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 transition-all duration-300"/>
                                            <label for="toggle1" class="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer transition-colors duration-300"></label>
                                        </div>
                                    </div>
                                     <div class="flex items-center justify-between pt-4 border-t border-slate-50">
                                        <div>
                                            <div class="text-sm font-medium text-slate-900">Processing Alerts</div>
                                            <div class="text-xs text-slate-500">Notify when a large batch is completed.</div>
                                        </div>
                                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                            <input type="checkbox" name="toggle" id="toggle2" checked class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-brand-600 right-0 transition-all duration-300"/>
                                            <label for="toggle2" class="toggle-label block overflow-hidden h-5 rounded-full bg-brand-600 cursor-pointer transition-colors duration-300"></label>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            `;
        }

        // --- Helper Components ---

        function renderStatCard(title, value, icon, colorClass, bgClass) {
            return `
                <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
                    <div>
                        <p class="text-sm font-medium text-slate-500 mb-1">${title}</p>
                        <h3 class="text-2xl font-semibold text-slate-900 tracking-tight">${value}</h3>
                    </div>
                    <div class="w-10 h-10 rounded-lg ${bgClass} ${colorClass} flex items-center justify-center">
                        <i data-lucide="${icon}" class="w-5 h-5"></i>
                    </div>
                </div>
            `;
        }

        function getStatusColor(status) {
            const colors = {
                'Active': 'bg-green-50 text-green-700 border border-green-100',
                'Completed': 'bg-blue-50 text-blue-700 border border-blue-100',
                'Processing': 'bg-amber-50 text-amber-700 border border-amber-100',
                'Draft': 'bg-slate-100 text-slate-600 border border-slate-200'
            };
            return colors[status] || colors['Draft'];
        }

        // --- Navigation Logic ---

        function navigate(page) {
            state.currentPage = page;
            
            // Update Sidebar Active State
            document.querySelectorAll('.nav-item').forEach(el => {
                if (el.dataset.page === page) {
                    el.className = 'nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-brand-600 bg-brand-50 transition-colors';
                } else {
                    el.className = 'nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors';
                }
            });

            // Close mobile sidebar if open
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            if (!sidebar.classList.contains('-translate-x-full') && window.innerWidth < 1024) {
                 toggleSidebar();
            }

            // Render Content
            const content = document.getElementById('content-area');
            let html = '';
            
            switch(page) {
                case 'dashboard': html = renderDashboard(); break;
                case 'projects': html = renderProjects(); break;
                case 'documents': html = renderDocuments(); break;
                case 'extractor': html = renderExtractor(); break;
                case 'anonymization': html = renderAnonymization(); break;
                case 'docprompt': html = renderDocPrompt(); break;
                case 'classifier': html = renderClassifier(); break;
                case 'settings': html = renderSettings(); break;
                default: html = renderDashboard();
            }
            
            content.innerHTML = html;
            lucide.createIcons();
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        }

        function openModal(id) {
            const modal = document.getElementById(id);
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.querySelector('div.bg-white').classList.remove('scale-95', 'opacity-0');
            }, 10);
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            modal.querySelector('div.bg-white').classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 150); // wait for animation
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            navigate('dashboard');
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-slate-900/50 z-20 hidden lg:hidden" id="sidebarOverlay" onclick="toggleSidebar()"></div>

<aside className="fixed lg:relative z-30 w-64 h-full bg-white border-r border-slate-200 flex flex-col transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-sm shadow-brand-500/30">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<span className="text-lg font-semibold tracking-tight">Docfy</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-brand-600 bg-brand-50" data-page="dashboard" href="#" onclick="navigate('dashboard')">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
                Dashboard
            </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" data-page="projects" href="#" onclick="navigate('projects')">
<i className="w-5 h-5" data-lucide="folder"></i>
                Projects
            </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" data-page="documents" href="#" onclick="navigate('documents')">
<i className="w-5 h-5" data-lucide="file-text"></i>
                Documents
            </a>
<div className="pt-4 pb-2 px-3 text-xs font-medium text-slate-400 uppercase tracking-wider">AI Tools</div>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" data-page="extractor" href="#" onclick="navigate('extractor')">
<i className="w-5 h-5" data-lucide="scan-line"></i>
                Extractor
            </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" data-page="anonymization" href="#" onclick="navigate('anonymization')">
<i className="w-5 h-5" data-lucide="shield"></i>
                Anonymization
            </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" data-page="classifier" href="#" onclick="navigate('classifier')">
<i className="w-5 h-5" data-lucide="tags"></i>
                Classifier
            </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" data-page="docprompt" href="#" onclick="navigate('docprompt')">
<i className="w-5 h-5" data-lucide="message-square"></i>
                DocPrompt
            </a>
</nav>

<div className="p-4 border-t border-slate-200">
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 mb-2 transition-colors" data-page="settings" href="#" onclick="navigate('settings')">
<i className="w-5 h-5" data-lucide="settings"></i>
                Settings
            </a>
<div className="flex items-center gap-3 px-3 py-2 mt-2">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full border border-slate-200" src="https://ui-avatars.com/api/?name=Alex+Morgan&amp;background=0f172a&amp;color=fff"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Alex Morgan</span>
<span className="text-xs text-slate-500">Admin Workspace</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 z-10">
<div className="flex items-center gap-4">
<button className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md" onclick="toggleSidebar()">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="relative hidden md:block w-96">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="Search projects, documents or content..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-brand-50 text-brand-700 text-xs font-medium rounded-full border border-brand-100">
<i className="w-3 h-3" data-lucide="zap"></i>
                    Pro Plan
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 lg:p-8 scroll-smooth" id="content-area">

</div>
</main>


<div className="fixed inset-0 z-50 hidden" id="newProjectModal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeModal('newProjectModal')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-100 p-6 transform transition-all scale-100">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Create New Project</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="closeModal('newProjectModal')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); closeModal('newProjectModal');">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Project Name</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500" placeholder="e.g. Q3 Financial Audit" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
<textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500" placeholder="Brief description..." rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Members</label>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 cursor-pointer hover:bg-slate-200">+</div>
<img className="w-8 h-8 rounded-full border border-white ring-1 ring-slate-100" src="https://ui-avatars.com/api/?name=John+Doe&amp;background=e2e8f0&amp;color=64748b"/>
</div>
</div>
<div className="pt-2 flex gap-3">
<button className="flex-1 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50" onclick="closeModal('newProjectModal')" type="button">Cancel</button>
<button className="flex-1 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 shadow-sm shadow-brand-500/30" type="submit">Create Project</button>
</div>
</form>
</div>
</div>


    </>
  );
}
