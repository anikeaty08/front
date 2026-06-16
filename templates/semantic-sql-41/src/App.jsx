import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Configuration ---
        const CONFIG = {
            apiKey: "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",
            model: "qwen/qwen-2.5-72b-instruct"
        };

        // --- State ---
        let state = {
            filename: null,
            schema: [],
            isLoaded: false,
            history: []
        };

        // --- Navigation ---
        function switchTab(tabId) {
            // Hide all views
            ['upload', 'schema', 'query', 'history'].forEach(id => {
                document.getElementById(`view-${id}`).classList.add('hidden');
                const btn = document.getElementById(`nav-${id}`);
                if(btn) {
                    // Reset button styles
                    btn.classList.remove('bg-white', 'shadow-sm', 'ring-1', 'text-zinc-900');
                    btn.classList.add('text-zinc-500');
                    btn.querySelector('iconify-icon').classList.add('opacity-70');
                }
            });

            // Show active view
            document.getElementById(`view-${tabId}`).classList.remove('hidden');
            
            // Activate button style
            const activeBtn = document.getElementById(`nav-${tabId}`);
            if(activeBtn) {
                activeBtn.classList.remove('text-zinc-500');
                activeBtn.classList.add('bg-white', 'shadow-sm', 'ring-1', 'text-zinc-900');
                activeBtn.querySelector('iconify-icon').classList.remove('opacity-70');
            }

            if(tabId === 'history') renderHistory();
        }

        // --- File Handling ---
        function handleFileUpload(input) {
            const file = input.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => processCSV(e.target.result, file.name, file.size);
            reader.readAsText(file);
        }

        function processCSV(csvText, filename, size) {
            const lines = csvText.split(/\r\n|\n/).filter(line => line.trim() !== '');
            if (lines.length < 2) {
                alert("CSV file is empty or invalid.");
                return;
            }

            // Simple parse (handles basic commas)
            const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
            const firstRow = lines[1].split(',').map(d => d.trim().replace(/^"|"$/g, ''));

            // Infer Schema
            const newSchema = headers.map((header, i) => {
                const val = firstRow[i] || "";
                let type = "VARCHAR";
                
                if (val && !isNaN(val)) {
                    type = val.includes('.') ? "FLOAT" : "INTEGER";
                } else if (val && !isNaN(Date.parse(val)) && val.length > 5) {
                    type = "DATE";
                }

                // Clean header name for SQL
                const safeName = header.replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase();

                return { original: header, name: safeName, type: type, sample: val };
            });

            // Update State
            state.filename = filename;
            state.schema = newSchema;
            state.isLoaded = true;

            // Update UI
            updateUploadUI(filename, size);
            updateSchemaUI();
            
            // Auto switch to schema after brief delay
            setTimeout(() => switchTab('schema'), 600);
        }

        function updateUploadUI(name, size) {
            const sizeMB = (size / (1024 * 1024)).toFixed(2);
            document.getElementById('filename-display').textContent = name;
            document.getElementById('filesize-display').textContent = `${sizeMB} MB • Parsed Successfully`;
            document.getElementById('upload-status').classList.remove('hidden');
            document.getElementById('dropzone').classList.add('border-zinc-400', 'bg-zinc-100/50');
        }

        function updateSchemaUI() {
            const tbody = document.getElementById('schema-body');
            tbody.innerHTML = '';

            document.getElementById('schema-badge').classList.remove('hidden');
            document.getElementById('schema-name').textContent = state.filename;

            state.schema.forEach(col => {
                const tr = document.createElement('tr');
                tr.className = "group hover:bg-zinc-50/80 transition-colors";
                
                let typeColor = "text-zinc-500 bg-zinc-100 border-zinc-200";
                if(col.type === 'INTEGER') typeColor = "text-blue-600 bg-blue-50 border-blue-100";
                if(col.type === 'FLOAT') typeColor = "text-orange-600 bg-orange-50 border-orange-100";
                if(col.type === 'DATE') typeColor = "text-emerald-600 bg-emerald-50 border-emerald-100";

                tr.innerHTML = `
                    <td class="py-3 px-6 text-zinc-700 font-mono text-[11px]">${col.name}</td>
                    <td class="py-3 px-6">
                        <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border ${typeColor}">${col.type}</span>
                    </td>
                    <td class="py-3 px-6 text-zinc-400 text-[11px] font-mono truncate max-w-[150px]">${col.sample || 'NULL'}</td>
                `;
                tbody.appendChild(tr);
            });
        }

        // --- AI Generation ---
        async function generateQuery() {
            if (!state.isLoaded) {
                alert("Please upload a dataset first.");
                switchTab('upload');
                return;
            }

            const prompt = document.getElementById('promptInput').value.trim();
            if (!prompt) return;

            // UI Loading State
            const loader = document.getElementById('loader');
            const resultArea = document.getElementById('result-area');
            const btn = document.getElementById('generateBtn');
            const sqlContainer = document.getElementById('sql-container');
            const errorContainer = document.getElementById('error-container');

            loader.classList.remove('hidden');
            resultArea.classList.add('hidden');
            sqlContainer.classList.add('hidden');
            errorContainer.classList.add('hidden');
            btn.disabled = true;
            btn.classList.add('opacity-70');

            // Build Context
            const tableContext = state.schema.map(c => `- ${c.name} (${c.type})`).join('\n');
            const systemPrompt = `
                You are a SQL expert. 
                Table Name: ${state.filename.split('.')[0].replace(/[^a-zA-Z0-9]/g, '_')}
                Schema:
                ${tableContext}
                
                Rules:
                1. Return ONLY valid PostgreSQL SQL. No markdown, no explanations.
                2. Use the exact column names provided.
                3. If the user asks for something not in the schema, return exactly: "ERROR: Insufficient data."
            `;

            try {
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${CONFIG.apiKey}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "model": CONFIG.model,
                        "messages": [
                            {"role": "system", "content": systemPrompt},
                            {"role": "user", "content": prompt}
                        ],
                        "temperature": 0.1,
                        "max_tokens": 500
                    })
                });

                if (!response.ok) throw new Error("API Error");
                const data = await response.json();
                let content = data.choices[0].message.content.trim();

                // Clean Markdown if present
                content = content.replace(/
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-zinc-100 flex flex-col justify-between bg-zinc-50/30 hidden md:flex">
<div className="p-4 pt-6">
<div className="flex items-center gap-2 mb-8 px-2">
<div className="h-6 w-6 bg-zinc-900 rounded-md flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:database-bold" width="14"></iconify-icon>
</div>
<span className="text-zinc-900 font-semibold tracking-tight text-sm">DataQuery</span>
</div>
<nav className="space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-md text-zinc-900 bg-white shadow-sm ring-1 ring-zinc-200/50 transition-all duration-200" id="nav-upload" onclick="switchTab('upload')">
<iconify-icon className="opacity-70" icon="solar:file-text-linear" width="16"></iconify-icon>
                    Data Source
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 transition-all duration-200" id="nav-schema" onclick="switchTab('schema')">
<iconify-icon className="opacity-70" icon="solar:structure-linear" width="16"></iconify-icon>
                    Schema
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 transition-all duration-200" id="nav-query" onclick="switchTab('query')">
<iconify-icon className="opacity-70" icon="solar:code-circle-linear" width="16"></iconify-icon>
                    Query Generator
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 transition-all duration-200" id="nav-history" onclick="switchTab('history')">
<iconify-icon className="opacity-70" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                    Log
                </button>
</nav>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3 px-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900 tracking-tight">Analyst</span>
<span className="text-[10px] text-zinc-400">Pro Plan</span>
</div>
</div>
</div>
</aside>

<div className="md:hidden fixed top-0 w-full bg-white border-b border-zinc-100 z-50 px-4 py-3 flex justify-between items-center">
<span className="text-zinc-900 font-semibold tracking-tight text-sm">DataQuery</span>
<button className="text-zinc-500 hover:text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>

<main className="flex-1 overflow-y-auto bg-white relative pt-14 md:pt-0">

<section className="max-w-2xl mx-auto py-16 px-8 fade-in h-full flex flex-col justify-center" id="view-upload">
<div className="mb-8 text-center">
<h1 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Import Dataset</h1>
<p className="text-xs text-zinc-500">Upload a CSV file to initialize the semantic analysis engine.</p>
</div>
<div className="relative group cursor-pointer transition-all duration-300">
<input accept=".csv" className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer" id="fileInput" onchange="handleFileUpload(this)" type="file"/>
<div className="w-full h-64 rounded-xl border border-dashed border-zinc-300 bg-zinc-50/50 hover:bg-zinc-50 hover:border-zinc-400 transition-all flex flex-col items-center justify-center gap-4 text-center p-6" id="dropzone">
<div className="h-12 w-12 bg-white rounded-lg border border-zinc-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-zinc-400" icon="solar:upload-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Click or drop file</p>
<p className="text-xs text-zinc-400 mt-1">CSV files up to 10MB</p>
</div>
</div>
</div>

<div className="hidden mt-6" id="upload-status">
<div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-green-50 text-green-600 flex items-center justify-center border border-green-100">
<iconify-icon icon="solar:file-check-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-900" id="filename-display">data.csv</p>
<p className="text-[10px] text-zinc-400" id="filesize-display">Ready for analysis</p>
</div>
</div>
<button className="text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-3 py-1.5 rounded transition-colors flex items-center gap-2" onclick="switchTab('schema')">
                        Inspect Schema
                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto py-12 px-8 hidden fade-in" id="view-schema">
<header className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-100">
<div>
<h1 className="text-xl font-medium tracking-tight text-zinc-900">Semantic Schema</h1>
<p className="text-xs text-zinc-500 mt-1">Inferred data types used for SQL generation.</p>
</div>
<div className="hidden flex items-center gap-2 px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded text-[10px] font-mono text-zinc-500" id="schema-badge">
<iconify-icon icon="solar:database-linear" width="12"></iconify-icon>
<span id="schema-name">No Data</span>
</div>
</header>
<div className="rounded-lg border border-zinc-200 overflow-hidden bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<table className="w-full text-left border-collapse">
<thead className="bg-zinc-50/50 text-[10px] uppercase font-medium text-zinc-500 tracking-wider">
<tr>
<th className="py-3 px-6 border-b border-zinc-100 w-1/3">Column</th>
<th className="py-3 px-6 border-b border-zinc-100 w-1/4">Type</th>
<th className="py-3 px-6 border-b border-zinc-100">Sample Value</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-zinc-50" id="schema-body">
<tr>
<td className="py-12 text-center text-zinc-400 italic" colspan="3">
                                No schema loaded. Please upload a dataset.
                            </td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6 flex justify-end">
<button className="text-xs font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1.5 transition-colors" onclick="switchTab('query')">
                    Continue to Query Lab
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</section>

<section className="max-w-3xl mx-auto py-12 px-8 hidden fade-in" id="view-query">
<header className="mb-8">
<h1 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Query Lab</h1>
<p className="text-xs text-zinc-500">Transform natural language into SQL using the active schema.</p>
</header>
<div className="space-y-6">

<div className="relative rounded-xl border border-zinc-200 bg-white shadow-sm focus-within:ring-1 focus-within:ring-zinc-900 focus-within:border-zinc-900 transition-all duration-200">
<textarea className="w-full bg-transparent p-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none resize-none font-normal" id="promptInput" placeholder="Ask a question about your data (e.g., 'Show me the top 5 sales by region')..." rows="3"></textarea>
<div className="flex items-center justify-between px-3 py-2 border-t border-zinc-50 bg-zinc-50/30 rounded-b-xl">
<div className="flex items-center gap-2 text-[10px] text-zinc-400 px-2">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
<span>Model: Qwen 2.5-72B</span>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-sm transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="generateBtn" onclick="generateQuery()">
<span>Generate SQL</span>
<iconify-icon icon="solar:plain-2-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="hidden" id="loader">
<div className="flex items-center gap-3 p-4">
<div className="w-4 h-4 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin"></div>
<span className="text-xs text-zinc-500 font-medium">Analyzing schema relationships...</span>
</div>
<div className="space-y-2 mt-2">
<div className="h-2 w-3/4 rounded bg-zinc-100 shimmer"></div>
<div className="h-2 w-1/2 rounded bg-zinc-100 shimmer"></div>
</div>
</div>

<div className="hidden space-y-4 fade-in" id="result-area">

<div className="hidden rounded-xl bg-[#0d0e11] border border-zinc-800 shadow-xl overflow-hidden group" id="sql-container">
<div className="flex items-center justify-between px-4 py-2.5 bg-[#16181d] border-b border-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PostgreSQL</span>
</div>
<div className="p-5 overflow-x-auto code-scroll">
<pre className="font-mono text-xs leading-relaxed text-zinc-300 whitespace-pre-wrap"><code id="sql-code">SELECT * FROM table;</code></pre>
</div>
<div className="bg-[#16181d] px-4 py-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1.5" onclick="copyToClipboard()">
<iconify-icon icon="solar:copy-linear" width="12"></iconify-icon>
                                Copy to clipboard
                            </button>
</div>
</div>

<div className="hidden rounded-lg border border-amber-200 bg-amber-50/50 p-4 flex gap-3" id="error-container">
<div className="mt-0.5 text-amber-600">
<iconify-icon icon="solar:danger-triangle-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-xs font-medium text-amber-900">Insufficient Data</h3>
<p className="text-[11px] text-amber-700/80 mt-1 leading-relaxed" id="error-msg"></p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto py-12 px-8 hidden fade-in" id="view-history">
<header className="flex items-center justify-between mb-8">
<h1 className="text-xl font-medium tracking-tight text-zinc-900">Activity Log</h1>
<button className="text-xs text-zinc-400 hover:text-red-600 transition-colors flex items-center gap-1" onclick="clearHistory()">
<iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
                    Clear
                </button>
</header>
<div className="space-y-4" id="history-list">
<div className="text-center py-12">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 mb-3">
<iconify-icon className="text-zinc-300" icon="solar:history-linear" width="20"></iconify-icon>
</div>
<p className="text-xs text-zinc-400">No queries generated yet.</p>
</div>
</div>
</section>
</main>

    </>
  );
}
