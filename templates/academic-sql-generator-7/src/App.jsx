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



        // Simple Navigation Logic
        function switchTab(tabId) {
            // Hide all sections
            ['upload', 'schema', 'query', 'history'].forEach(id => {
                document.getElementById(`view-${id}`).classList.add('hidden');
                // Reset nav styles
                const btn = document.getElementById(`nav-${id}`);
                if(btn) {
                    btn.classList.remove('bg-white', 'shadow-sm', 'ring-1', 'ring-slate-200', 'text-slate-900');
                    btn.classList.add('text-slate-500');
                }
            });

            // Show selected section
            document.getElementById(`view-${tabId}`).classList.remove('hidden');

            // Active nav style
            const activeBtn = document.getElementById(`nav-${tabId}`);
            if(activeBtn) {
                activeBtn.classList.remove('text-slate-500');
                activeBtn.classList.add('bg-white', 'shadow-sm', 'ring-1', 'ring-slate-200', 'text-slate-900');
            }
        }

        // File Upload Simulation
        function handleFileUpload() {
            const fileInput = document.getElementById('fileInput');
            if (fileInput.files.length > 0) {
                document.getElementById('upload-success').classList.remove('hidden');
                document.getElementById('dropzone').classList.add('border-slate-400', 'bg-slate-50');
            }
        }

        // Generate SQL Simulation
        function generateSQL() {
            const input = document.getElementById('queryInput').value.toLowerCase();
            const loader = document.getElementById('loader');
            const resultContainer = document.getElementById('result-container');
            const noInfoContainer = document.getElementById('no-info-container');
            const outputBlock = document.getElementById('sql-output');

            // Reset
            resultContainer.classList.add('hidden');
            noInfoContainer.classList.add('hidden');
            loader.classList.remove('hidden');

            setTimeout(() => {
                loader.classList.add('hidden');

                if (input.includes('salary') || input.includes('budget') || input.includes('tuition')) {
                    // Scenario: No Info
                    noInfoContainer.classList.remove('hidden');
                } else {
                    // Scenario: Success
                    const sql = `<span class="text-purple-400">SELECT</span> full_name, semester_gpa \n<span class="text-purple-400">FROM</span> university_enrollments \n<span class="text-purple-400">WHERE</span> course_code = <span class="text-emerald-400">'CS-101'</span> \n<span class="text-purple-400">ORDER BY</span> semester_gpa <span class="text-purple-400">DESC</span> \n<span class="text-purple-400">LIMIT</span> 5;`;
                    
                    outputBlock.innerHTML = sql;
                    resultContainer.classList.remove('hidden');
                }
            }, 1200); // 1.2s fake latency
        }
    
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
      

<aside className="w-64 border-r border-slate-200 flex flex-col justify-between bg-slate-50/50 hidden md:flex">
<div>
<div className="p-6">
<div className="flex items-center gap-2 mb-8">
<div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-medium tracking-tighter text-sm">SG</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight">SQLGen<span className="text-slate-400 font-normal">.edu</span></span>
</div>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-900 bg-white shadow-sm ring-1 ring-slate-200" id="nav-upload" onclick="switchTab('upload')">
<iconify-icon icon="solar:upload-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Data Source
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 transition-colors" id="nav-schema" onclick="switchTab('schema')">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Semantic Schema
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 transition-colors" id="nav-query" onclick="switchTab('query')">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Query Lab
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 transition-colors" id="nav-history" onclick="switchTab('history')">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        History
                    </button>
</nav>
</div>
</div>
<div className="p-6 border-t border-slate-200">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Student User</span>
<span className="text-xs text-slate-400">Academic License</span>
</div>
</div>
</div>
</aside>

<div className="md:hidden fixed top-0 w-full bg-white border-b border-slate-200 z-50 px-4 py-3 flex justify-between items-center">
<span className="text-slate-900 font-semibold tracking-tight">SQLGen.edu</span>
<button className="text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<main className="flex-1 overflow-y-auto no-scrollbar relative md:p-0 pt-16">

<section className="max-w-3xl mx-auto py-12 px-6 fade-in" id="view-upload">
<header className="mb-10">
<h1 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Dataset Configuration</h1>
<p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                    Upload a CSV file to establish the source of truth for the AI model. 
                    <br/>This system generates SQL for educational exploration and does not execute queries against a live production database.
                </p>
</header>
<div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center hover:bg-slate-50 transition-colors cursor-pointer group relative" id="dropzone">
<input accept=".csv" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="fileInput" onchange="handleFileUpload()" type="file"/>
<div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:file-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Upload CSV Dataset</h3>
<p className="text-xs text-slate-400 mb-6">Drag and drop or click to browse</p>
<div className="flex items-center justify-center gap-2 text-xs text-slate-400 bg-slate-50 py-2 px-3 rounded-full inline-flex border border-slate-100">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>Local processing validation enabled</span>
</div>
</div>

<div className="hidden mt-6 bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-between shadow-sm" id="upload-success">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-50 rounded-md flex items-center justify-center border border-emerald-100">
<iconify-icon className="text-emerald-600" icon="solar:file-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">university_enrollments.csv</p>
<p className="text-xs text-slate-400">24KB • Parsed successfully</p>
</div>
</div>
<button className="text-xs font-medium bg-slate-900 text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors" onclick="switchTab('schema')">
                    View Schema
                </button>
</div>
</section>

<section className="max-w-4xl mx-auto py-12 px-6 hidden fade-in" id="view-schema">
<header className="flex items-end justify-between mb-8">
<div>
<h1 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Semantic Context</h1>
<p className="text-sm text-slate-500">
                        The AI utilizes this inferred schema to map natural language to SQL logic. Verify data types below.
                    </p>
</div>
<div className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                    university_enrollments.csv
                </div>
</header>
<div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-200 bg-slate-50/50">
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Column Name</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Inferred Type</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Example Value</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Constraint</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-slate-100">
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-mono text-slate-700">student_id</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">INTEGER</span></td>
<td className="py-3 px-4 text-slate-500">2023001</td>
<td className="py-3 px-4 text-xs text-slate-400">PRIMARY KEY</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-mono text-slate-700">full_name</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">VARCHAR</span></td>
<td className="py-3 px-4 text-slate-500">"Alice Johnson"</td>
<td className="py-3 px-4 text-xs text-slate-400">-</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-mono text-slate-700">course_code</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">VARCHAR</span></td>
<td className="py-3 px-4 text-slate-500">"CS-101"</td>
<td className="py-3 px-4 text-xs text-slate-400">INDEX</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-mono text-slate-700">semester_gpa</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">FLOAT</span></td>
<td className="py-3 px-4 text-slate-500">3.85</td>
<td className="py-3 px-4 text-xs text-slate-400">MIN 0.0</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-mono text-slate-700">enrollment_date</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">DATE</span></td>
<td className="py-3 px-4 text-slate-500">2023-09-01</td>
<td className="py-3 px-4 text-xs text-slate-400">-</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-4 flex justify-end">
<button className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" onclick="switchTab('query')">
                    Proceed to Query Lab
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="max-w-4xl mx-auto py-12 px-6 hidden fade-in" id="view-query">
<header className="mb-8">
<h1 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Natural Language to SQL</h1>
<p className="text-sm text-slate-500 max-w-2xl">
                    Ask questions about your data. The system generates <span className="font-mono text-xs bg-slate-100 px-1 rounded">SELECT</span> statements based strictly on the provided CSV structure. 
                    <span className="block mt-1 text-amber-600/80 text-xs flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                        Generated queries are for educational review and are not executed.
                    </span>
</p>
</header>

<div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 ring-4 ring-transparent focus-within:ring-slate-50 transition-shadow">
<textarea className="w-full resize-none border-none bg-transparent p-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0" id="queryInput" placeholder="e.g., Show me the top 5 students with the highest GPA enrolled in CS-101..." rows="3"></textarea>
<div className="flex justify-between items-center px-4 pb-3 pt-2 border-t border-slate-50">
<div className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:database-linear"></iconify-icon>
                        Context: university_enrollments.csv
                    </div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-lg shadow-sm transition-all flex items-center gap-2" onclick="generateSQL()">
<iconify-icon className="text-white" icon="solar:magic-stick-3-linear"></iconify-icon>
                        Generate SQL
                    </button>
</div>
</div>

<div className="hidden py-12 flex justify-center" id="loader">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="animate-spin text-slate-300" icon="solar:refresh-circle-linear" width="32"></iconify-icon>
<span className="text-xs text-slate-400 font-medium">Analyzing schema relationships...</span>
</div>
</div>

<div className="hidden mt-8 fade-in" id="result-container">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-slate-900">Generated Query</h3>
<div className="flex gap-2">
<span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">READ ONLY</span>
<span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">POSTGRESQL DIALECT</span>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
<div className="relative rounded-lg bg-[#0F172A] p-0 overflow-hidden shadow-lg border border-slate-800">
<div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
</div>
<button className="text-slate-400 hover:text-white transition-colors" title="Copy">
<iconify-icon icon="solar:copy-linear" width="14"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-x-auto code-scroll">
<pre className="font-mono text-sm leading-relaxed text-slate-300" id="sql-output"></pre>
</div>
</div>
</div>

<div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-lg flex gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:shield-warning-linear" width="16"></iconify-icon>
<p className="text-xs text-slate-500 leading-snug">
<strong>Hallucination Check:</strong> The query references columns <code>full_name</code>, <code>semester_gpa</code>, and <code>course_code</code> which exist in the schema. No external tables were hallucinated.
                    </p>
</div>
</div>

<div className="hidden mt-8 fade-in" id="no-info-container">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col items-center text-center">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm border border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Information Not Available</h3>
<p className="text-xs text-slate-500 max-w-md">
                        The current dataset does not contain information regarding "professor salaries" or "department budgets". 
                        The AI is restricted to the uploaded schema to prevent fabrication of data.
                    </p>
<button className="mt-4 text-xs font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600" onclick="document.getElementById('queryInput').focus()">Try a different question</button>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto py-12 px-6 hidden fade-in" id="view-history">
<header className="mb-8 flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Interaction History</h1>
<p className="text-sm text-slate-500">
                        Audit log of generated queries. Editing or re-execution is disabled.
                    </p>
</div>
<button className="text-xs text-slate-500 flex items-center gap-1 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                    Clear Log
                </button>
</header>
<div className="space-y-4">

<div className="bg-white rounded-lg border border-slate-200 p-5 hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start mb-3">
<p className="text-sm font-medium text-slate-800">"List students in CS-101 with GPA above 3.5"</p>
<span className="text-[10px] text-slate-400 font-mono">10:42 AM</span>
</div>
<div className="bg-slate-50 rounded border border-slate-200 p-3">
<code className="text-xs font-mono text-slate-600 break-all">
                            SELECT full_name, semester_gpa FROM university_enrollments WHERE course_code = 'CS-101' AND semester_gpa &gt; 3.5;
                        </code>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 p-5 hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start mb-3">
<p className="text-sm font-medium text-slate-800">"Count enrollments by date"</p>
<span className="text-[10px] text-slate-400 font-mono">10:38 AM</span>
</div>
<div className="bg-slate-50 rounded border border-slate-200 p-3">
<code className="text-xs font-mono text-slate-600 break-all">
                            SELECT enrollment_date, COUNT(*) FROM university_enrollments GROUP BY enrollment_date ORDER BY enrollment_date DESC;
                        </code>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 p-5 opacity-75">
<div className="flex justify-between items-start mb-1">
<p className="text-sm font-medium text-slate-800">"What is the tuition fee?"</p>
<span className="text-[10px] text-slate-400 font-mono">10:35 AM</span>
</div>
<div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon>
<span>No SQL generated. Column "tuition_fee" not found in schema.</span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
