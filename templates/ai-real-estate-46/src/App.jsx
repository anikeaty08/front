import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Geist Mono', 'monospace']
},
colors: {
background: 'var(--bg-app)',
surface: 'var(--bg-surface)',
border: 'var(--border-color)',
primary: '#f4f4f5',
accent: '#6366f1',
},
animation: {
'fadeIn': 'fadeIn 0.4s ease-out forwards',
'slideUp': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'sonar': 'sonar 2s infinite',
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
sonar: {
'0%': { transform: 'scale(0.9)', opacity: '1' },
'100%': { transform: 'scale(2.5)', opacity: '0' }
}
}
}
}
}



        const data = {
            metrics: { activeAgents: 12, totalRevenue: '$892,400', closedDeals: 28, pipelineValue: '$12.8M', avgCommission: '2.8%' },
            leads: [
                { id: 'L-201', name: 'Marcus Thorne', property: 'Skyline Heights', value: '$3.5M', priority: 'High', status: 'Offer Made', agent: 'Atlas AI', next: 'Contract Review' },
                { id: 'L-202', name: 'Alicia Velez', property: 'Grand Avenue', value: '$1.1M', priority: 'Medium', status: 'Touring', agent: 'Elena F.', next: 'Feedback' },
                { id: 'L-203', name: 'Chen Wei', property: 'The Lofts', value: '$650k', priority: 'Low', status: 'New', agent: 'Nexus Bot', next: 'Qualification' },
            ],
            pipeline: [
                { step: '01', title: 'Lead Ingestion', desc: 'AI qualifies inbound leads via voice & chat.', active: 24, icon: 'lucide:inbox' },
                { step: '02', title: 'Nurturing', desc: 'Automated follow-ups and scheduling.', active: 18, icon: 'lucide:messages-square' },
                { step: '03', title: 'Closing', desc: 'Human agent handoff for final negotiation.', active: 5, icon: 'lucide:badge-check' },
            ],
            messages: [
                { role: 'ai', text: 'Hello Marcus, thanks for your interest in Skyline Heights.', time: '10:02 AM' },
                { role: 'user', text: 'Hi, looking for a primary home. I need at least 3 bedrooms.', time: '10:05 AM' },
                { role: 'ai', text: 'Understood. Unit 4B is available and matches your criteria. Would you like to see the floor plan?', time: '10:06 AM' }
            ]
        };

        const store = {
            theme: localStorage.theme || 'dark',
            route: 'dashboard',
            nodes: [],
        };

        const app = {
            init() {
                this.applyTheme();
                this.router('dashboard');
            },

            applyTheme() {
                const html = document.documentElement;
                if (store.theme === 'dark') {
                    html.classList.add('dark');
                    document.getElementById('theme-icon').setAttribute('icon', 'lucide:moon');
                } else {
                    html.classList.remove('dark');
                    document.getElementById('theme-icon').setAttribute('icon', 'lucide:sun');
                }
            },

            toggleTheme() {
                store.theme = store.theme === 'dark' ? 'light' : 'dark';
                localStorage.theme = store.theme;
                this.applyTheme();
            },

            router(route, id = null) {
                store.route = route;
                
                // Sidebar Active State
                document.querySelectorAll('.nav-item').forEach(el => {
                    const key = el.id.replace('nav-', '');
                    const isActive = route === key || route.startsWith(key) || (route === 'lead-detail' && key === 'leads') || (route === 'property-detail' && key === 'portfolio');
                    
                    if (isActive) {
                        el.classList.add('bg-zinc-200', 'dark:bg-white/10', 'text-zinc-900', 'dark:text-white');
                        el.classList.remove('text-zinc-500', 'dark:text-muted');
                    } else {
                        el.classList.remove('bg-zinc-200', 'dark:bg-white/10', 'text-zinc-900', 'dark:text-white');
                        el.classList.add('text-zinc-500', 'dark:text-muted');
                    }
                });

                // Render View
                const view = document.getElementById('app-view');
                view.innerHTML = '';
                
                if (route === 'dashboard') view.innerHTML = views.dashboard();
                else if (route === 'portfolio') view.innerHTML = views.portfolio();
                else if (route === 'leads') view.innerHTML = views.leads();
                else if (route === 'lead-detail') view.innerHTML = views.leadDetail(id);
                else if (route === 'agents') view.innerHTML = views.agents();
                else if (route === 'settings') view.innerHTML = views.settings();
                
                // Update Breadcrumbs
                const breadcrumbs = document.getElementById('breadcrumbs');
                if(breadcrumbs) {
                    let bHtml = `<span class="opacity-50">Summit</span> <iconify-icon icon="lucide:chevron-right" width="12" class="opacity-30"></iconify-icon> ${route.charAt(0).toUpperCase() + route.slice(1)}`;
                    if(id) bHtml += ` <iconify-icon icon="lucide:chevron-right" width="12" class="opacity-30"></iconify-icon> <span class="text-zinc-900 dark:text-white">${id}</span>`;
                    breadcrumbs.innerHTML = bHtml;
                }
            }
        };

        const views = {
            dashboard: () => `
                <div class="p-6 md:p-10 max-w-[1200px] mx-auto space-y-10 animate-fadeIn">
                    <!-- Header -->
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 class="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">Dashboard</h1>
                            <p class="text-zinc-500 mt-1">Real-time ecosystem metrics.</p>
                        </div>
                        <button class="px-3 py-1.5 text-xs font-medium border border-border rounded-md hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2 bg-surface">
                             <iconify-icon icon="lucide:calendar"></iconify-icon> Last 30 Days
                        </button>
                    </div>
                    
                    <!-- KPI Grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${[
                            { l: 'Pipeline Value', v: data.metrics.pipelineValue, i: 'lucide:bar-chart-2', c: 'text-blue-500' },
                            { l: 'Deals Closed', v: data.metrics.closedDeals, i: 'lucide:check-circle-2', c: 'text-emerald-500' },
                            { l: 'Active Agents', v: data.metrics.activeAgents, i: 'lucide:cpu', c: 'text-purple-500' },
                            { l: 'Revenue', v: data.metrics.totalRevenue, i: 'lucide:dollar-sign', c: 'text-orange-500' },
                        ].map(k => `
                            <div class="glass p-5 rounded-xl flex flex-col justify-between h-28 card-gradient transition-colors cursor-default shadow-sm border border-border">
                                <div class="flex justify-between items-start">
                                    <span class="text-xs font-medium text-zinc-500">${k.l}</span>
                                    <iconify-icon icon="${k.i}" class="${k.c}" width="16"></iconify-icon>
                                </div>
                                <div class="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">${k.v}</div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- 01 02 03 Pipeline Steps -->
                    <div>
                        <h2 class="text-sm font-medium text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                            <iconify-icon icon="lucide:workflow" class="text-zinc-400"></iconify-icon> Active Workflows
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            ${data.pipeline.map((step, idx) => `
                                <div class="glass p-6 rounded-xl border border-border relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                                    <div class="absolute -right-4 -top-6 text-[120px] font-bold number-decor pointer-events-none group-hover:translate-y-2 transition-transform duration-500">${step.step}</div>
                                    <div class="relative z-10 flex flex-col h-full justify-between">
                                        <div class="mb-8">
                                            <div class="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-white/5 border border-border flex items-center justify-center mb-4 text-zinc-900 dark:text-white">
                                                <iconify-icon icon="${step.icon}" width="16"></iconify-icon>
                                            </div>
                                            <h3 class="text-base font-semibold text-zinc-900 dark:text-white">${step.title}</h3>
                                            <p class="text-xs text-zinc-500 mt-2 leading-relaxed">${step.desc}</p>
                                        </div>
                                        <div class="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                            <span class="relative flex h-2 w-2">
                                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                            ${step.active} Active
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2 space-y-4">
                            <div class="flex items-center justify-between">
                                <h2 class="text-sm font-medium text-zinc-900 dark:text-white">Recent Activity</h2>
                            </div>
                            <div class="glass rounded-xl overflow-hidden border border-border">
                                <table class="w-full text-sm text-left whitespace-nowrap">
                                    <thead class="bg-zinc-50/50 dark:bg-white/5 text-xs text-zinc-500 border-b border-border">
                                        <tr>
                                            <th class="px-5 py-3 font-medium pl-6">Lead</th>
                                            <th class="px-5 py-3 font-medium">Status</th>
                                            <th class="px-5 py-3 font-medium">Value</th>
                                            <th class="px-5 py-3 font-medium">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-border">
                                        ${data.leads.slice(0, 3).map(l => `
                                            <tr class="group hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer" onclick="app.router('lead-detail', '${l.id}')">
                                                <td class="px-5 py-3 pl-6 font-medium text-zinc-900 dark:text-white">${l.name}</td>
                                                <td class="px-5 py-3 text-xs text-zinc-500">
                                                    <span class="inline-flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full ${l.priority === 'High' ? 'bg-orange-500' : 'bg-emerald-500'}"></div> ${l.status}</span>
                                                </td>
                                                <td class="px-5 py-3 text-zinc-500 font-mono text-xs">${l.value}</td>
                                                <td class="px-5 py-3 text-zinc-400 text-xs flex items-center gap-2">
                                                    <button class="hover:text-zinc-900 dark:hover:text-white transition-colors">Review</button>
                                                </td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                         <div class="space-y-4">
                            <h2 class="text-sm font-medium text-zinc-900 dark:text-white">System Health</h2>
                            <div class="glass p-5 rounded-xl border border-border space-y-6 relative overflow-hidden">
                                <!-- Decoration -->
                                <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
                                
                                <div>
                                    <div class="flex justify-between text-xs mb-2">
                                        <span class="text-zinc-500 flex items-center gap-1"><iconify-icon icon="lucide:server" width="12"></iconify-icon> API Usage</span>
                                        <span class="text-zinc-900 dark:text-white font-mono">84%</span>
                                    </div>
                                    <div class="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                                        <div class="bg-zinc-900 dark:bg-white h-full rounded-full" style="width: 84%"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex justify-between text-xs mb-2">
                                        <span class="text-zinc-500 flex items-center gap-1"><iconify-icon icon="lucide:database" width="12"></iconify-icon> Database</span>
                                        <span class="text-zinc-900 dark:text-white font-mono">42%</span>
                                    </div>
                                    <div class="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                                        <div class="bg-zinc-900 dark:bg-white h-full rounded-full" style="width: 42%"></div>
                                    </div>
                                </div>
                                <div class="pt-2 flex gap-2">
                                    <button class="flex-1 py-1.5 text-xs border border-border rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">Logs</button>
                                    <button class="flex-1 py-1.5 text-xs border border-border rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">Status</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            portfolio: () => `
                <div class="p-6 md:p-10 max-w-[1200px] mx-auto space-y-6 animate-fadeIn">
                    <div class="flex justify-between items-center">
                        <h1 class="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">Properties</h1>
                        <button class="bg-zinc-900 dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-md text-xs font-medium hover:opacity-90 flex items-center gap-2 transition-opacity shadow-sm">
                            <iconify-icon icon="lucide:plus"></iconify-icon> Add Listing
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Cards -->
                        <div class="glass p-8 rounded-xl border border-border border-dashed flex items-center justify-center flex-col gap-3 text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                             <div class="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-zinc-400 transition-colors">
                                <iconify-icon icon="lucide:plus" width="20"></iconify-icon>
                             </div>
                             <span class="text-sm font-medium">New Property</span>
                        </div>
                        <!-- Add actual portfolio items here similar to dashboard logic -->
                    </div>
                </div>
            `,
            leads: () => `
                <div class="p-6 md:p-10 max-w-[1200px] mx-auto space-y-6 animate-fadeIn">
                    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                        <h1 class="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">Leads Database</h1>
                        <div class="relative w-full md:w-64">
                            <iconify-icon icon="lucide:search" class="absolute left-2.5 top-2.5 text-zinc-400" width="14"></iconify-icon>
                            <input type="text" placeholder="Search contacts..." class="w-full input-base rounded-md pl-9 pr-3 py-2 text-xs">
                        </div>
                    </div>
                    <div class="glass rounded-xl overflow-hidden border border-border shadow-sm">
                        <table class="w-full text-sm text-left whitespace-nowrap">
                            <thead class="bg-zinc-50/50 dark:bg-white/5 text-xs text-zinc-500 border-b border-border">
                                <tr>
                                    <th class="px-6 py-3 font-medium">Contact</th>
                                    <th class="px-6 py-3 font-medium">Interest</th>
                                    <th class="px-6 py-3 font-medium">Priority</th>
                                    <th class="px-6 py-3 font-medium">Stage</th>
                                    <th class="px-6 py-3 font-medium text-right"></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border">
                                ${data.leads.map(l => `
                                    <tr class="group hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer" onclick="app.router('lead-detail', '${l.id}')">
                                        <td class="px-6 py-3.5">
                                            <div class="flex items-center gap-3">
                                                <div class="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-border flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-zinc-400">${l.name[0]}</div>
                                                <div>
                                                    <div class="font-medium text-zinc-900 dark:text-white">${l.name}</div>
                                                    <div class="text-[10px] text-zinc-500">${l.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3.5 text-zinc-500">${l.property}</td>
                                        <td class="px-6 py-3.5">
                                             <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border
                                                ${l.priority === 'High' ? 'bg-orange-500/5 text-orange-600 border-orange-200 dark:border-orange-500/20' : 
                                                'bg-zinc-500/5 text-zinc-500 border-zinc-200 dark:border-zinc-700'}">
                                                ${l.priority}
                                            </span>
                                        </td>
                                        <td class="px-6 py-3.5 text-zinc-500 text-xs">${l.status}</td>
                                        <td class="px-6 py-3.5 text-right">
                                            <iconify-icon icon="lucide:chevron-right" class="text-zinc-400" width="14"></iconify-icon>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            leadDetail: (id) => `
                <div class="h-full flex flex-col lg:flex-row overflow-hidden animate-slideIn">
                    <!-- Sidebar Info -->
                    <div class="w-full lg:w-80 border-r border-border bg-surface p-6 overflow-y-auto z-10">
                        <button onclick="app.router('leads')" class="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 mb-6"><iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon> Back</button>
                        <div class="flex flex-col items-center text-center mb-6">
                            <div class="w-20 h-20 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-border flex items-center justify-center text-2xl font-bold text-zinc-600 dark:text-zinc-400 mb-3 relative">
                                M
                                <div class="absolute bottom-0 right-0 w-5 h-5 bg-surface rounded-full flex items-center justify-center border border-border">
                                    <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                            <h2 class="text-lg font-semibold text-zinc-900 dark:text-white">Marcus Thorne</h2>
                            <p class="text-xs text-zinc-500">Investor • New York</p>
                        </div>
                        <div class="grid grid-cols-3 gap-2 mb-6">
                             <button class="p-2 border border-border rounded hover:bg-zinc-50 dark:hover:bg-white/5 text-zinc-500 hover:text-indigo-500 transition-colors flex justify-center"><iconify-icon icon="lucide:phone" width="16"></iconify-icon></button>
                             <button class="p-2 border border-border rounded hover:bg-zinc-50 dark:hover:bg-white/5 text-zinc-500 hover:text-indigo-500 transition-colors flex justify-center"><iconify-icon icon="lucide:mail" width="16"></iconify-icon></button>
                             <button class="p-2 border border-border rounded hover:bg-zinc-50 dark:hover:bg-white/5 text-zinc-500 hover:text-indigo-500 transition-colors flex justify-center"><iconify-icon icon="lucide:message-circle" width="16"></iconify-icon></button>
                        </div>
                        <div class="space-y-4">
                            <div class="text-xs">
                                <div class="text-zinc-500 mb-1 flex justify-between"><span>Lead Score</span> <span>85/100</span></div>
                                <div class="w-full bg-zinc-100 dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
                                    <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Chat Area -->
                    <div class="flex-1 flex flex-col bg-zinc-50/50 dark:bg-[#050505] relative">
                         <!-- Decor -->
                        <div class="absolute inset-0 bg-grid pointer-events-none opacity-50"></div>

                        <div class="h-14 border-b border-border flex items-center px-6 bg-surface/50 backdrop-blur z-10 justify-between">
                            <span class="text-sm font-medium text-zinc-900 dark:text-white flex items-center gap-2"><iconify-icon icon="lucide:sparkles" class="text-indigo-500" width="14"></iconify-icon> AI Interaction Log</span>
                            <div class="flex items-center gap-2">
                                <span class="text-[10px] px-2 py-0.5 border border-green-500/20 bg-green-500/10 text-green-500 rounded-full flex items-center gap-1">
                                    <span class="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span> Live
                                </span>
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto p-6 space-y-6 z-10">
                             ${data.messages.map(msg => `
                                <div class="flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}">
                                    <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold border border-border shadow-sm
                                        ${msg.role === 'ai' ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600'}">
                                        ${msg.role === 'ai' ? 'AI' : 'U'}
                                    </div>
                                    <div class="max-w-[75%] space-y-1">
                                        <div class="p-3.5 rounded-2xl text-sm border border-border shadow-sm
                                            ${msg.role === 'ai' ? 'bg-surface text-zinc-800 dark:text-zinc-200 rounded-tl-none' : 'bg-zinc-900 dark:bg-white text-white dark:text-black border-transparent rounded-tr-none'}">
                                            ${msg.text}
                                        </div>
                                        <div class="text-[10px] text-zinc-400 ${msg.role === 'user' ? 'text-right' : ''}">${msg.time}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="p-4 border-t border-border bg-surface z-10">
                            <div class="relative">
                                <input type="text" placeholder="Type an internal note or command..." class="w-full input-base rounded-lg px-4 py-3 text-sm pr-10">
                                <button class="absolute right-2 top-2 p-1 text-zinc-400 hover:text-indigo-500 transition-colors"><iconify-icon icon="lucide:send" width="16"></iconify-icon></button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            agents: () => `
                <div class="p-6 md:p-10 max-w-[1200px] mx-auto space-y-6 animate-fadeIn">
                     <div class="flex justify-between items-center">
                        <div>
                            <h1 class="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">AI Workforce</h1>
                        </div>
                        <button class="bg-zinc-900 dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-md text-xs font-medium hover:opacity-90 flex items-center gap-2">
                            <iconify-icon icon="lucide:plus"></iconify-icon> New Agent
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <!-- Empty State / Add Card -->
                        <div class="glass p-5 rounded-xl border border-border border-dashed flex flex-col gap-2 items-center justify-center text-zinc-400 h-full min-h-[160px] hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                            <iconify-icon icon="lucide:plus-circle" width="24"></iconify-icon>
                            <span class="text-sm">Deploy New Model</span>
                        </div>
                        <!-- Active Agents -->
                         <div class="glass p-5 rounded-xl border border-border flex flex-col gap-5 relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm">
                                <div class="flex items-center justify-between z-10">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center">
                                            <iconify-icon icon="lucide:bot" width="20"></iconify-icon>
                                        </div>
                                        <div>
                                            <h3 class="font-medium text-zinc-900 dark:text-white text-sm">Atlas AI</h3>
                                            <span class="text-xs text-zinc-500">Voice Inbound</span>
                                        </div>
                                    </div>
                                    <div class="relative inline-block w-8 align-middle select-none">
                                        <input type="checkbox" checked class="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border-2 appearance-none cursor-pointer border-zinc-300 transition-all duration-300 top-0.5 left-0.5 z-10"/>
                                        <label class="toggle-label block overflow-hidden h-4.5 rounded-full cursor-pointer bg-zinc-300 dark:bg-zinc-700 transition-colors duration-300"></label>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-4 py-3 border-t border-border z-10">
                                    <div>
                                        <div class="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Tasks</div>
                                        <div class="font-medium text-zinc-900 dark:text-white text-sm">2,450</div>
                                    </div>
                                    <div>
                                        <div class="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Cost</div>
                                        <div class="font-medium text-zinc-900 dark:text-white text-sm">$89/mo</div>
                                    </div>
                                </div>
                                <div class="absolute bottom-0 left-0 w-full h-1 bg-indigo-500/50"></div>
                            </div>
                    </div>
                </div>
            `,
            settings: () => `<div class="p-6 md:p-10 animate-fadeIn text-zinc-500">Settings Module Loading...</div>`
        };

        document.addEventListener('DOMContentLoaded', () => app.init());
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
<div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none z-0"></div>

<div className="md:hidden h-14 border-b border-border bg-surface flex items-center justify-between px-4 relative z-50">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-900 dark:text-white" icon="lucide:infinity" width="20"></iconify-icon>
<span className="font-semibold tracking-tight text-zinc-900 dark:text-white">Summit</span>
</div>
<button className="text-zinc-500" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>

<div className="hidden absolute inset-x-0 top-14 bg-surface border-b border-border p-4 z-40 shadow-xl space-y-2 md:hidden" id="mobile-menu">
<button className="flex items-center gap-3 w-full p-2 rounded hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-500" onclick="app.router('dashboard'); document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon icon="lucide:layout-grid" width="16"></iconify-icon> Overview
        </button>
<button className="flex items-center gap-3 w-full p-2 rounded hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-500" onclick="app.router('leads'); document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon icon="lucide:users" width="16"></iconify-icon> Leads
        </button>
<button className="flex items-center gap-3 w-full p-2 rounded hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-500" onclick="app.router('agents'); document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon> Agents
        </button>
</div>

<aside className="w-[72px] hover:w-64 flex-shrink-0 border-r border-border bg-surface hidden md:flex flex-col justify-between z-50 relative transition-all duration-300 group">
<div className="flex flex-col h-full">

<div className="flex group-hover:justify-start group-hover:px-5 border-border transition-all h-14 border-b pr-5 pl-5 items-center justify-center">
<div className="flex items-center gap-3">
<div className="shrink-0 text-zinc-900 dark:text-white transition-transform duration-300 group-hover:scale-100">
<iconify-icon className="" icon="lucide:infinity" width="24"></iconify-icon>
</div>
<span className="whitespace-nowrap group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 text-sm font-semibold tracking-tight opacity-0 translate-x-2" style={{}}>Web Imoveis</span>
</div>
</div>
<nav className="p-2 space-y-1 mt-2 flex-1">
<button className="nav-item w-full flex items-center h-9 px-2.5 rounded transition-all font-medium hover:bg-zinc-100 dark:hover:bg-white/5 relative hover:text-zinc-900 dark:hover:text-white group/item bg-zinc-200 dark:bg-white/10 text-zinc-900 dark:text-white" id="nav-dashboard" onclick="app.router('dashboard')">
<iconify-icon className="shrink-0" icon="lucide:layout-grid" width="18"></iconify-icon>
<span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-9">Overview</span>
<div className="opacity-0 group-hover:opacity-100 absolute right-2 w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
</button>
<button className="nav-item w-full flex items-center h-9 px-2.5 rounded transition-all font-medium hover:bg-zinc-100 dark:hover:bg-white/5 relative text-zinc-500 dark:text-muted hover:text-zinc-900 dark:hover:text-white" id="nav-portfolio" onclick="app.router('portfolio')">
<iconify-icon className="shrink-0" icon="lucide:building-2" width="18"></iconify-icon>
<span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-9">Properties</span>
</button>
<button className="nav-item w-full flex items-center h-9 px-2.5 rounded transition-all font-medium hover:bg-zinc-100 dark:hover:bg-white/5 relative text-zinc-500 dark:text-muted hover:text-zinc-900 dark:hover:text-white" id="nav-leads" onclick="app.router('leads')">
<iconify-icon className="shrink-0" icon="lucide:users" width="18"></iconify-icon>
<span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-9">Leads</span>
</button>
<button className="nav-item w-full flex items-center h-9 px-2.5 rounded transition-all font-medium hover:bg-zinc-100 dark:hover:bg-white/5 relative text-zinc-500 dark:text-muted hover:text-zinc-900 dark:hover:text-white" id="nav-board" onclick="app.router('board')">
<iconify-icon className="shrink-0" icon="lucide:git-branch" width="18"></iconify-icon>
<span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-9">Workflows</span>
</button>
<button className="nav-item flex transition-all hover:bg-zinc-100 dark:hover:bg-white/5 font-medium w-full h-9 rounded px-2.5 relative items-center text-zinc-500 dark:text-muted hover:text-zinc-900 dark:hover:text-white" id="nav-agents" onclick="app.router('agents')">
<iconify-icon className="shrink-0" icon="lucide:bot" width="18"></iconify-icon>
<span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-9">AI Agents</span>
</button>
</nav>
<div className="p-2 border-t border-border space-y-1">
<button className="nav-item w-full flex items-center h-9 px-2.5 rounded transition-all font-medium hover:bg-zinc-100 dark:hover:bg-white/5 relative text-zinc-500 dark:text-muted hover:text-zinc-900 dark:hover:text-white" id="nav-settings" onclick="app.router('settings')">
<iconify-icon className="shrink-0" icon="lucide:settings-2" width="18"></iconify-icon>
<span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-9">Settings</span>
</button>
<button className="w-full flex items-center h-9 px-2.5 rounded transition-all font-medium hover:bg-zinc-100 dark:hover:bg-white/5 relative text-zinc-500 dark:text-muted hover:text-zinc-900 dark:hover:text-white" onclick="app.toggleTheme()">
<iconify-icon className="shrink-0" icon="lucide:sun" id="theme-icon" width="18"></iconify-icon>
<span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-9">Theme</span>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative h-full overflow-hidden transition-colors duration-300 z-10">

<header className="h-14 glass-panel flex items-center justify-between px-6 sticky top-0 z-40 hidden md:flex">
<div className="flex items-center gap-3">
<div className="flex gap-2 text-xs font-medium text-zinc-500 gap-x-2 gap-y-2 items-center" id="breadcrumbs"><span className="opacity-50">Summit</span> <iconify-icon className="opacity-30" icon="lucide:chevron-right" width="12"></iconify-icon> Dashboard</div>
</div>
<div className="flex items-center gap-5">
<div className="flex items-center gap-2 text-[11px] font-medium text-zinc-500 border border-border px-2.5 py-1 rounded bg-surface shadow-sm">
<div className="sonar-emitter">
<div className="sonar-wave"></div>
</div>
<span>System Online</span>
</div>
<div className="h-4 w-[1px] bg-border"></div>
<button className="relative text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-surface"></span>
</button>
<div className="flex items-center gap-3 pl-2">
<div className="w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-800 object-cover border border-border flex items-center justify-center text-[10px] font-bold">EF</div>
</div>
</div>
</header>

<div className="flex-1 h-full w-full relative overflow-y-auto overflow-x-hidden scroll-smooth pb-10" id="app-view">
<div className="p-6 md:p-10 max-w-[1200px] mx-auto space-y-10 animate-fadeIn">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">Dashboard</h1>
<p className="text-zinc-500 mt-1">Real-time ecosystem metrics.</p>
</div>
<button className="px-3 py-1.5 text-xs font-medium border border-border rounded-md hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2 bg-surface">
<iconify-icon icon="lucide:calendar"></iconify-icon> Last 30 Days
                        </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass p-5 rounded-xl flex flex-col justify-between h-28 card-gradient transition-colors cursor-default shadow-sm border border-border">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500">Pipeline Value</span>
<iconify-icon className="text-blue-500" icon="lucide:bar-chart-2" width="16"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">$12.8M</div>
</div>
<div className="glass p-5 rounded-xl flex flex-col justify-between h-28 card-gradient transition-colors cursor-default shadow-sm border border-border">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500">Deals Closed</span>
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">28</div>
</div>
<div className="glass p-5 rounded-xl flex flex-col justify-between h-28 card-gradient transition-colors cursor-default shadow-sm border border-border">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500">Active Agents</span>
<iconify-icon className="text-purple-500" icon="lucide:cpu" width="16"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">12</div>
</div>
<div className="glass p-5 rounded-xl flex flex-col justify-between h-28 card-gradient transition-colors cursor-default shadow-sm border border-border">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500">Revenue</span>
<iconify-icon className="text-orange-500" icon="lucide:dollar-sign" width="16"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">$892,400</div>
</div>
</div>

<div>
<h2 className="text-sm font-medium text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="lucide:workflow"></iconify-icon> Active Workflows
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass p-6 rounded-xl border border-border relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
<div className="absolute -right-4 -top-6 text-[120px] font-bold number-decor pointer-events-none group-hover:translate-y-2 transition-transform duration-500">01</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-white/5 border border-border flex items-center justify-center mb-4 text-zinc-900 dark:text-white">
<iconify-icon icon="lucide:inbox" width="16"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 dark:text-white">Lead Ingestion</h3>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">AI qualifies inbound leads via voice &amp; chat.</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                                            24 Active
                                        </div>
</div>
</div>
<div className="glass p-6 rounded-xl border border-border relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
<div className="absolute -right-4 -top-6 text-[120px] font-bold number-decor pointer-events-none group-hover:translate-y-2 transition-transform duration-500">02</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-white/5 border border-border flex items-center justify-center mb-4 text-zinc-900 dark:text-white">
<iconify-icon icon="lucide:messages-square" width="16"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 dark:text-white">Nurturing</h3>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">Automated follow-ups and scheduling.</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                                            18 Active
                                        </div>
</div>
</div>
<div className="glass p-6 rounded-xl border border-border relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
<div className="absolute -right-4 -top-6 text-[120px] font-bold number-decor pointer-events-none group-hover:translate-y-2 transition-transform duration-500">03</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-white/5 border border-border flex items-center justify-center mb-4 text-zinc-900 dark:text-white">
<iconify-icon icon="lucide:badge-check" width="16"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 dark:text-white">Closing</h3>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">Human agent handoff for final negotiation.</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                                            5 Active
                                        </div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-900 dark:text-white">Recent Activity</h2>
</div>
<div className="glass rounded-xl overflow-hidden border border-border">
<table className="w-full text-sm text-left whitespace-nowrap">
<thead className="bg-zinc-50/50 dark:bg-white/5 text-xs text-zinc-500 border-b border-border">
<tr>
<th className="px-5 py-3 font-medium pl-6">Lead</th>
<th className="px-5 py-3 font-medium">Status</th>
<th className="px-5 py-3 font-medium">Value</th>
<th className="px-5 py-3 font-medium">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-border">
<tr className="group hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer" onclick="app.router('lead-detail', 'L-201')">
<td className="px-5 py-3 pl-6 font-medium text-zinc-900 dark:text-white">Marcus Thorne</td>
<td className="px-5 py-3 text-xs text-zinc-500">
<span className="inline-flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Offer Made</span>
</td>
<td className="px-5 py-3 text-zinc-500 font-mono text-xs">$3.5M</td>
<td className="px-5 py-3 text-zinc-400 text-xs flex items-center gap-2">
<button className="hover:text-zinc-900 dark:hover:text-white transition-colors">Review</button>
</td>
</tr>
<tr className="group hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer" onclick="app.router('lead-detail', 'L-202')">
<td className="px-5 py-3 pl-6 font-medium text-zinc-900 dark:text-white">Alicia Velez</td>
<td className="px-5 py-3 text-xs text-zinc-500">
<span className="inline-flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Touring</span>
</td>
<td className="px-5 py-3 text-zinc-500 font-mono text-xs">$1.1M</td>
<td className="px-5 py-3 text-zinc-400 text-xs flex items-center gap-2">
<button className="hover:text-zinc-900 dark:hover:text-white transition-colors">Review</button>
</td>
</tr>
<tr className="group hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer" onclick="app.router('lead-detail', 'L-203')">
<td className="px-5 py-3 pl-6 font-medium text-zinc-900 dark:text-white">Chen Wei</td>
<td className="px-5 py-3 text-xs text-zinc-500">
<span className="inline-flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> New</span>
</td>
<td className="px-5 py-3 text-zinc-500 font-mono text-xs">$650k</td>
<td className="px-5 py-3 text-zinc-400 text-xs flex items-center gap-2">
<button className="hover:text-zinc-900 dark:hover:text-white transition-colors">Review</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="space-y-4">
<h2 className="text-sm font-medium text-zinc-900 dark:text-white">System Health</h2>
<div className="glass p-5 rounded-xl border border-border space-y-6 relative overflow-hidden">

<div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500 flex items-center gap-1"><iconify-icon icon="lucide:server" width="12"></iconify-icon> API Usage</span>
<span className="text-zinc-900 dark:text-white font-mono">84%</span>
</div>
<div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-900 dark:bg-white h-full rounded-full" style={{width: '84%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500 flex items-center gap-1"><iconify-icon icon="lucide:database" width="12"></iconify-icon> Database</span>
<span className="text-zinc-900 dark:text-white font-mono">42%</span>
</div>
<div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-900 dark:bg-white h-full rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div className="pt-2 flex gap-2">
<button className="flex-1 py-1.5 text-xs border border-border rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">Logs</button>
<button className="flex-1 py-1.5 text-xs border border-border rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">Status</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-2 pointer-events-none" id="toast-container"></div>
</main>



    </>
  );
}
