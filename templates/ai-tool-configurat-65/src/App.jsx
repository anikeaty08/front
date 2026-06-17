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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
violet: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed',
700: '#6d28d9',
800: '#5b21b6',
900: '#4c1d95',
}
}
}
}
}



        // --- Mock Data ---
        const initialTools = [
            {
                id: '1',
                name: 'search_knowledge_base',
                description: 'Searches the internal knowledge base for relevant articles.',
                type: 'manual',
                createdAt: new Date().toISOString(),
                params: [
                    { name: 'query', type: 'string', description: 'The search query string', required: true },
                    { name: 'limit', type: 'number', description: 'Max results to return', required: false }
                ]
            },
            {
                id: '2',
                name: 'get_stock_price',
                description: 'Retrieves current stock price for a given ticker symbol.',
                type: 'api',
                createdAt: new Date(Date.now() - 86400000).toISOString(),
                api: {
                    method: 'GET',
                    url: 'https://api.finance.com/quote',
                    mapping: { 'symbol': 'ticker', 'current_price': 'price' }
                },
                params: [
                     { name: 'ticker', type: 'string', description: 'Stock Symbol', required: true }
                ]
            }
        ];

        // --- Application Logic ---
        const app = {
            data: {
                tools: JSON.parse(localStorage.getItem('claude_tools')) || initialTools,
                currentView: 'list',
                editingId: null,
                form: {
                    name: '',
                    description: '',
                    type: 'api',
                    params: [],
                    api: { method: 'GET', url: '', mapping: {} }
                }
            },

            init() {
                this.renderList();
                this.setupEventListeners();
                if(!localStorage.getItem('claude_tools')) {
                    localStorage.setItem('claude_tools', JSON.stringify(this.data.tools));
                }
            },

            setupEventListeners() {
                document.getElementById('search-input').addEventListener('input', (e) => this.renderList(e.target.value));
                document.getElementById('type-filter').addEventListener('change', () => this.renderList());
                const inputs = ['tool-name', 'tool-desc'];
                inputs.forEach(id => {
                    document.getElementById(id).addEventListener('input', () => this.updatePreview());
                });
            },

            // --- Navigation & State ---

            showList() {
                document.getElementById('view-list').classList.remove('hidden');
                document.getElementById('view-editor').classList.add('hidden');
                this.renderList();
            },

            createNew() {
                this.data.editingId = null;
                this.data.form = { name: '', description: '', type: 'api', params: [], api: { method: 'GET', url: '', mapping: {} } };
                this.resetForm();
                this.showEditor();
            },

            editTool(id) {
                const tool = this.data.tools.find(t => t.id === id);
                if (!tool) return;
                
                this.data.editingId = id;
                this.data.form = JSON.parse(JSON.stringify(tool));
                
                document.getElementById('tool-name').value = tool.name;
                document.getElementById('tool-desc').value = tool.description;
                document.querySelector(`input[name="tool-type"][value="${tool.type}"]`).checked = true;
                
                if (tool.type === 'api') {
                    document.getElementById('api-method').value = tool.api?.method || 'GET';
                    document.getElementById('api-url').value = tool.api?.url || '';
                }

                this.toggleType(tool.type);
                this.renderParams();
                this.showEditor();
            },

            showEditor() {
                document.getElementById('view-list').classList.add('hidden');
                document.getElementById('view-editor').classList.remove('hidden');
                document.getElementById('view-editor').classList.add('grid'); 
                this.updatePreview();
            },

            resetForm() {
                document.getElementById('tool-name').value = '';
                document.getElementById('tool-desc').value = '';
                document.querySelector('input[name="tool-type"][value="api"]').checked = true;
                document.getElementById('api-url').value = '';
                document.getElementById('params-container').innerHTML = '';
                document.getElementById('api-mapper').classList.add('hidden');
                this.toggleType('api');
            },

            // --- Rendering ---

            renderList(searchTerm = '') {
                const tableBody = document.getElementById('tool-table-body');
                const empty = document.getElementById('empty-state');
                const typeFilter = document.getElementById('type-filter').value;
                const searchVal = (searchTerm || document.getElementById('search-input').value).toLowerCase();

                tableBody.innerHTML = '';
                
                const filtered = this.data.tools.filter(t => {
                    const matchesSearch = t.name.toLowerCase().includes(searchVal) || t.description.toLowerCase().includes(searchVal);
                    const matchesType = typeFilter === 'all' || t.type === typeFilter;
                    return matchesSearch && matchesType;
                });

                if (filtered.length === 0) {
                    empty.classList.remove('hidden');
                } else {
                    empty.classList.add('hidden');
                    filtered.forEach(tool => {
                        const date = new Date(tool.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                        const isApi = tool.type === 'api';
                        const badgeColor = isApi ? 'bg-violet-50 text-violet-700 border-violet-100' : 'bg-slate-100 text-slate-600 border-slate-200';
                        const icon = isApi ? 'lucide:webhook' : 'lucide:settings-2';

                        const tr = document.createElement('tr');
                        tr.className = 'group hover:bg-slate-50 transition-colors cursor-default';
                        tr.innerHTML = `
                            <td class="px-6 py-4 border-b border-slate-100 group-last:border-0">
                                <div class="font-medium text-slate-900 tracking-tight">${tool.name}</div>
                            </td>
                            <td class="px-6 py-4 border-b border-slate-100 group-last:border-0">
                                <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] uppercase tracking-wider font-semibold border ${badgeColor}">
                                    <iconify-icon icon="${icon}" width="10"></iconify-icon> ${tool.type}
                                </span>
                            </td>
                            <td class="px-6 py-4 border-b border-slate-100 group-last:border-0">
                                <p class="text-xs text-slate-500 truncate max-w-xs">${tool.description}</p>
                            </td>
                            <td class="px-6 py-4 border-b border-slate-100 group-last:border-0 whitespace-nowrap">
                                <span class="text-xs text-slate-400 font-medium">${date}</span>
                            </td>
                            <td class="px-6 py-4 border-b border-slate-100 group-last:border-0 text-right">
                                <div class="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onclick="app.copyToolJson('${tool.id}')" title="Copy JSON" class="text-slate-400 hover:text-slate-700 transition-colors">
                                        <iconify-icon icon="lucide:code" width="14"></iconify-icon>
                                    </button>
                                    <button onclick="app.editTool('${tool.id}')" title="Edit" class="text-slate-400 hover:text-violet-600 transition-colors">
                                        <iconify-icon icon="lucide:edit-3" width="14"></iconify-icon>
                                    </button>
                                    <button onclick="app.deleteTool('${tool.id}')" title="Delete" class="text-slate-400 hover:text-red-500 transition-colors">
                                        <iconify-icon icon="lucide:trash-2" width="14"></iconify-icon>
                                    </button>
                                </div>
                            </td>
                        `;
                        tableBody.appendChild(tr);
                    });
                }
            },

            // --- Editor Logic ---

            toggleType(type) {
                this.data.form.type = type;
                if (type === 'api') {
                    document.getElementById('section-api').classList.remove('hidden');
                    document.getElementById('section-manual').classList.add('hidden');
                } else {
                    document.getElementById('section-api').classList.add('hidden');
                    document.getElementById('section-manual').classList.remove('hidden');
                    if (this.data.form.params.length === 0) {
                        this.addParameter();
                    }
                }
                this.updatePreview();
            },

            // --- Manual Parameters ---
            renderParams() {
                const container = document.getElementById('params-container');
                container.innerHTML = '';
                this.data.form.params.forEach((param, index) => {
                    const el = document.createElement('div');
                    el.className = 'p-4 group hover:bg-slate-50 transition-colors';
                    el.innerHTML = `
                        <div class="flex gap-3 items-start">
                            <div class="flex-grow grid grid-cols-12 gap-3">
                                <div class="col-span-4">
                                    <label class="block text-[10px] font-medium text-slate-500 mb-1">Name</label>
                                    <input type="text" value="${param.name}" oninput="app.updateParam(${index}, 'name', this.value)" class="w-full px-2 py-1.5 bg-white border border-slate-200 rounded text-xs focus:border-violet-500 focus:outline-none" placeholder="param_name">
                                </div>
                                <div class="col-span-3">
                                    <label class="block text-[10px] font-medium text-slate-500 mb-1">Type</label>
                                    <select onchange="app.updateParam(${index}, 'type', this.value)" class="w-full px-2 py-1.5 bg-white border border-slate-200 rounded text-xs focus:border-violet-500 focus:outline-none">
                                        <option value="string" ${param.type === 'string' ? 'selected' : ''}>String</option>
                                        <option value="number" ${param.type === 'number' ? 'selected' : ''}>Number</option>
                                        <option value="boolean" ${param.type === 'boolean' ? 'selected' : ''}>Boolean</option>
                                    </select>
                                </div>
                                <div class="col-span-5">
                                    <label class="block text-[10px] font-medium text-slate-500 mb-1">Description</label>
                                    <input type="text" value="${param.description}" oninput="app.updateParam(${index}, 'description', this.value)" class="w-full px-2 py-1.5 bg-white border border-slate-200 rounded text-xs focus:border-violet-500 focus:outline-none" placeholder="What is this?">
                                </div>
                            </div>
                            <div class="pt-6">
                                <button onclick="app.removeParam(${index})" class="text-slate-300 hover:text-red-500 transition-colors"><iconify-icon icon="lucide:x" width="14"></iconify-icon></button>
                            </div>
                        </div>
                        <div class="px-4 pb-3">
                            <label class="inline-flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" onchange="app.updateParam(${index}, 'required', this.checked)" ${param.required ? 'checked' : ''} class="rounded border-slate-300 text-violet-600 focus:ring-violet-500 h-3 w-3">
                                <span class="text-[10px] text-slate-600">Required parameter</span>
                            </label>
                        </div>
                    `;
                    container.appendChild(el);
                });
            },

            addParameter() {
                this.data.form.params.push({ name: '', type: 'string', description: '', required: false });
                this.renderParams();
                this.updatePreview();
            },

            removeParam(index) {
                this.data.form.params.splice(index, 1);
                this.renderParams();
                this.updatePreview();
            },

            updateParam(index, field, value) {
                this.data.form.params[index][field] = value;
                this.updatePreview();
            },

            // --- API Logic ---
            testApi() {
                const btn = event.target;
                const originalText = btn.innerText;
                btn.innerText = 'Testing...';
                
                setTimeout(() => {
                    const mockResponse = {
                        status: "success",
                        data: {
                            id: 12345,
                            user: {
                                name: "John Doe",
                                email: "john@example.com",
                                preferences: { theme: "dark" }
                            },
                            stats: { visits: 42 }
                        }
                    };
                    
                    document.getElementById('api-mapper').classList.remove('hidden');
                    this.renderJsonTree(mockResponse, document.getElementById('json-tree'));
                    btn.innerText = originalText;
                }, 800);
            },

            renderJsonTree(obj, container, path = '') {
                container.innerHTML = '';
                const ul = document.createElement('ul');
                ul.className = 'pl-2 border-l border-slate-200 ml-1';
                
                for (const key in obj) {
                    const val = obj[key];
                    const currentPath = path ? `${path}.${key}` : key;
                    const li = document.createElement('li');
                    li.className = 'my-1';
                    
                    if (typeof val === 'object' && val !== null) {
                        li.innerHTML = `<span class="text-violet-600 font-medium">${key}</span>: {`;
                        const subContainer = document.createElement('div');
                        this.renderJsonTree(val, subContainer, currentPath);
                        li.appendChild(subContainer);
                        li.insertAdjacentHTML('beforeend', '}');
                    } else {
                        const span = document.createElement('span');
                        span.className = 'cursor-pointer hover:bg-violet-50 hover:text-violet-700 px-1 rounded transition-colors duration-150 inline-block';
                        span.innerHTML = `<span class="text-violet-600">${key}</span>: <span class="text-emerald-600">"${val}"</span>`;
                        span.onclick = () => this.addMappedField(currentPath, key);
                        li.appendChild(span);
                    }
                    ul.appendChild(li);
                }
                container.appendChild(ul);
            },

            addMappedField(path, key) {
                const exists = this.data.form.params.find(p => p.name === key);
                if (!exists) {
                    this.data.form.params.push({
                        name: key, 
                        type: 'string',
                        description: `Mapped from ${path}`,
                        required: true
                    });
                    this.renderMappedFields();
                    this.updatePreview();
                }
            },

            renderMappedFields() {
                const container = document.getElementById('mapped-fields');
                container.innerHTML = '';
                if(this.data.form.params.length === 0) {
                     container.innerHTML = `<div class="text-center mt-10 text-xs text-slate-400">Select fields from the left to map them.</div>`;
                     return;
                }

                this.data.form.params.forEach((p, idx) => {
                    const div = document.createElement('div');
                    div.className = 'flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-200 text-xs';
                    div.innerHTML = `
                        <div class="flex items-center gap-2 overflow-hidden">
                             <iconify-icon icon="lucide:arrow-right" class="text-slate-400 min-w-[12px]"></iconify-icon>
                             <span class="font-mono text-slate-700 truncate">${p.name}</span>
                        </div>
                        <button onclick="app.removeParam(${idx}); app.renderMappedFields();" class="text-slate-400 hover:text-red-500"><iconify-icon icon="lucide:trash-2" width="12"></iconify-icon></button>
                    `;
                    container.appendChild(div);
                });
            },

            // --- Core CRUD ---

            updatePreview() {
                const name = document.getElementById('tool-name').value;
                const desc = document.getElementById('tool-desc').value;
                
                const schema = {
                    name: name || "tool_name",
                    description: desc || "Tool description...",
                    input_schema: {
                        type: "object",
                        properties: {},
                        required: []
                    }
                };

                this.data.form.params.forEach(p => {
                    if (p.name) {
                        schema.input_schema.properties[p.name] = {
                            type: p.type,
                            description: p.description
                        };
                        if (p.required) {
                            schema.input_schema.required.push(p.name);
                        }
                    }
                });

                document.getElementById('json-preview').innerText = JSON.stringify(schema, null, 2);
            },

            saveTool() {
                const name = document.getElementById('tool-name').value;
                if (!name) return alert('Tool name is required');

                const newTool = {
                    id: this.data.editingId || Date.now().toString(),
                    name: name,
                    description: document.getElementById('tool-desc').value,
                    type: this.data.form.type,
                    params: this.data.form.params,
                    api: this.data.form.type === 'api' ? {
                        method: document.getElementById('api-method').value,
                        url: document.getElementById('api-url').value
                    } : null,
                    createdAt: new Date().toISOString()
                };

                if (this.data.editingId) {
                    const idx = this.data.tools.findIndex(t => t.id === this.data.editingId);
                    this.data.tools[idx] = newTool;
                } else {
                    this.data.tools.push(newTool);
                }

                this.saveToStorage();
                this.showList();
            },

            deleteTool(id) {
                if(confirm('Are you sure you want to delete this tool?')) {
                    this.data.tools = this.data.tools.filter(t => t.id !== id);
                    this.saveToStorage();
                    this.renderList();
                }
            },

            saveToStorage() {
                localStorage.setItem('claude_tools', JSON.stringify(this.data.tools));
            },

            // --- Utilities ---
            copyJson() {
                const text = document.getElementById('json-preview').innerText;
                navigator.clipboard.writeText(text);
                alert('JSON copied to clipboard');
            },
            
            copyToolJson(id) {
                const tool = this.data.tools.find(t => t.id === id);
                if(tool) {
                    const schema = {
                        name: tool.name,
                        description: tool.description,
                        input_schema: { type: "object", properties: {}, required: [] }
                    };
                    tool.params.forEach(p => {
                         schema.input_schema.properties[p.name] = { type: p.type, description: p.description };
                         if(p.required) schema.input_schema.required.push(p.name);
                    });
                    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
                    alert('Tool JSON copied');
                }
            }
        };

        // Initialize app
        document.addEventListener('DOMContentLoaded', () => {
            app.init();
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="app.showList()">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-bold tracking-tighter">C</div>
<span className="font-medium tracking-tight text-slate-900">TOOL CONFIG</span>
</div>
<div className="flex items-center gap-4">
<a className="text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors" href="#">Documentation</a>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-100 to-slate-100 border border-slate-200 flex items-center justify-center text-xs font-medium text-violet-700">JS</div>
</div>
</div>
</nav>

<main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8">

<div className="space-y-6" id="view-list">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Tools</h1>
<p className="text-sm text-slate-500 mt-1">Manage your Claude AI function calling definitions.</p>
</div>
<button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm active:scale-95" onclick="app.createNew()">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
                    Create New Tool
                </button>
</div>

<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow max-w-md">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400" id="search-input" placeholder="Search tools..." type="text"/>
</div>
<select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 cursor-pointer" id="type-filter">
<option value="all">All Types</option>
<option value="api">API Integration</option>
<option value="manual">Manual Config</option>
</select>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
<tr>
<th className="px-6 py-3 text-xs uppercase tracking-wider font-semibold w-1/4">Name</th>
<th className="px-6 py-3 text-xs uppercase tracking-wider font-semibold w-32">Type</th>
<th className="px-6 py-3 text-xs uppercase tracking-wider font-semibold">Description</th>
<th className="px-6 py-3 text-xs uppercase tracking-wider font-semibold w-32">Updated</th>
<th className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-right w-24">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100" id="tool-table-body">

</tbody>
</table>
</div>

<div className="hidden text-center py-20 bg-slate-50/50" id="empty-state">
<div className="w-12 h-12 bg-white border border-slate-100 rounded-lg shadow-sm flex items-center justify-center mx-auto mb-3 text-slate-400">
<iconify-icon icon="lucide:box" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">No tools found</h3>
<p className="text-xs text-slate-500 mt-1">Get started by creating a new tool configuration.</p>
</div>
</div>
</div>

<div className="hidden grid grid-cols-1 lg:grid-cols-12 gap-8 h-full" id="view-editor">

<div className="lg:col-span-7 space-y-8 pb-20">

<button className="group flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="app.showList()">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="lucide:arrow-left" width="14"></iconify-icon>
                    Back to tools
                </button>

<div className="space-y-4">
<h2 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<span className="w-6 h-6 rounded bg-slate-100 text-slate-500 flex items-center justify-center text-xs">1</span>
                        Basic Information
                    </h2>
<div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Tool Name <span className="text-red-500">*</span></label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500" id="tool-name" placeholder="e.g., get_weather" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Description <span className="text-red-500">*</span></label>
<textarea className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 resize-none" id="tool-desc" placeholder="Explain what this tool does so the AI knows when to use it..." rows="3"></textarea>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Configuration Type</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer">
<input checked="" className="peer sr- only" name="tool-type" onchange="app.toggleType('api')" type="radio" value="api"/>
<div className="px-4 py-3 border border-slate-200 rounded-lg peer-checked:border-violet-500 peer-checked:bg-violet-50 text-center transition-all">
<div className="text-sm font-medium text-slate-700 peer-checked:text-violet-700">API Integration</div>
<div className="text-[10px] text-slate-400 mt-0.5">Map API response to schema</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="tool-type" onchange="app.toggleType('manual')" type="radio" value="manual"/>
<div className="px-4 py-3 border border-slate-200 rounded-lg peer-checked:border-violet-500 peer-checked:bg-violet-50 text-center transition-all">
<div className="text-sm font-medium text-slate-700 peer-checked:text-violet-700">Manual Config</div>
<div className="text-[10px] text-slate-400 mt-0.5">Define parameters manually</div>
</div>
</label>
</div>
</div>
</div>
</div>

<div className="space-y-4" id="section-api">
<h2 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<span className="w-6 h-6 rounded bg-slate-100 text-slate-500 flex items-center justify-center text-xs">2</span>
                        API Configuration
                    </h2>
<div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-5">
<div className="flex gap-2">
<select className="w-24 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-violet-500" id="api-method">
<option>GET</option>
<option>POST</option>
<option>PUT</option>
<option>DELETE</option>
</select>
<input className="flex-grow px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-mono text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500" id="api-url" placeholder="https://api.example.com/v1/resource" type="text"/>
<button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors" onclick="app.testApi()">Test</button>
</div>

<div className="hidden border border-slate-200 rounded-lg overflow-hidden" id="api-mapper">
<div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex justify-between items-center">
<span className="text-xs font-medium text-slate-600">Response Mapper</span>
<span className="text-[10px] text-slate-400">Click field to map</span>
</div>
<div className="grid grid-cols-2 h-64">
<div className="p-3 overflow-auto border-r border-slate-200 bg-slate-50/30">
<div className="text-xs font-mono text-slate-600 space-y-1" id="json-tree">

</div>
</div>
<div className="p-3 overflow-auto bg-white">
<div className="space-y-2" id="mapped-fields">
<div className="text-center mt-10 text-xs text-slate-400">
                                            Select fields from the left to map them as tool parameters.
                                        </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-4" id="section-manual">
<h2 className="text-lg font-medium tracking-tight text-slate-900 flex items-center gap-2">
<span className="w-6 h-6 rounded bg-slate-100 text-slate-500 flex items-center justify-center text-xs">2</span>
                        Parameters
                    </h2>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="divide-y divide-slate-100" id="params-container">

</div>
<div className="p-3 bg-slate-50 border-t border-slate-200">
<button className="w-full py-2 border border-dashed border-slate-300 rounded-lg text-xs font-medium text-slate-500 hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50 transition-all flex items-center justify-center gap-1" onclick="app.addParameter()">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon> Add Parameter
                            </button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="sticky top-24 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">JSON Preview</h2>
<div className="flex gap-2">
<button className="text-xs flex items-center gap-1 text-slate-500 hover:text-violet-600 transition-colors" onclick="app.copyJson()">
<iconify-icon icon="lucide:copy" width="12"></iconify-icon> Copy
                            </button>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 to-blue-500/5 rounded-xl -z-10"></div>
<div className="bg-slate-900 rounded-xl border border-slate-800 shadow-xl overflow-hidden">
<div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
<pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto"><code id="json-preview">
// Tool definition will appear here...
                            </code></pre>
</div>
</div>

<div className="flex gap-3 pt-4 border-t border-slate-200">
<button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm shadow-violet-200 transition-all active:scale-[0.98]" onclick="app.saveTool()">Save Configuration</button>
<button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors" onclick="app.showList()">Cancel</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
