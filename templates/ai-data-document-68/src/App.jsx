import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function triggerDownload(content, fileName, mimeType) {
            const blob = new Blob([content], { type: mimeType });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function downloadExcel() {
            const btn = document.getElementById('btn-excel');
            const originalContent = btn.innerHTML;
            const fileNameInput = document.getElementById('excel-name');
            const fileName = (fileNameInput.value || 'data_export') + '.csv';
            
            // Loading State
            btn.disabled = true;
            btn.innerHTML = `<iconify-icon icon="svg-spinners:ring-resize" width="14" class="text-neutral-400"></iconify-icon><span class="text-neutral-300">Generating...</span>`;
            
            setTimeout(() => {
                // Mock CSV Data
                const headers = ["UUID", "Full Name", "Email", "Status"];
                const rows = [
                    ["550e8400-e29b", "Alex Rivera", "alex@company.com", "Active"],
                    ["6ba7b810-9dad", "Sarah Chen", "sarah@company.com", "Pending"],
                    ["7a9c1d20-8efe", "Mike Ross", "mike@company.com", "Active"]
                ];
                const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
                
                triggerDownload(csvContent, fileName, 'text/csv');
                
                // Reset Button
                btn.innerHTML = originalContent;
                btn.disabled = false;
            }, 1000);
        }

        function downloadWord() {
            const btn = document.getElementById('btn-word');
            const originalContent = btn.innerHTML;
            const titleInput = document.getElementById('word-title');
            const fileName = (titleInput.value.replace(/\s+/g, '_') || 'document') + '.doc';
            
            // Loading State
            btn.disabled = true;
            btn.innerHTML = `<iconify-icon icon="svg-spinners:ring-resize" width="14" class="text-neutral-400"></iconify-icon><span class="text-neutral-300">Writing...</span>`;
            
            setTimeout(() => {
                // Mock Word Data (Simple HTML masquerading as doc)
                const content = `
                    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
                    <head><meta charset='utf-8'><title>${titleInput.value}</title></head>
                    <body>
                        <h1>${titleInput.value}</h1>
                        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                        <p>This is an automatically generated document based on the parameters selected in the dashboard.</p>
                        <h2>Executive Summary</h2>
                        <p>The strategy outlines key performance indicators and actionable insights for the upcoming quarter. Initial analysis suggests a 15% increase in operational efficiency is achievable.</p>
                    </body>
                    </html>
                `;
                
                triggerDownload(content, fileName, 'application/msword');
                
                // Reset Button
                btn.innerHTML = originalContent;
                btn.disabled = false;
            }, 1200);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neutral-900/30 rounded-[100%] blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
</div>

<nav className="relative z-10 border-b border-neutral-900 bg-black/50 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:border-neutral-700 transition-colors">
<span className="font-medium tracking-tighter text-sm">DG</span>
</div>
<span className="text-sm font-medium text-neutral-200 tracking-tight">DataGen</span>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-neutral-500"></div>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center pt-16 pb-24 px-4 sm:px-6">

<div className="w-full max-w-2xl text-center mb-12 animate-enter">
<h1 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-3">
                Describe your data structure.
            </h1>
<p className="text-neutral-500 text-sm font-normal mb-8 max-w-md mx-auto leading-relaxed">
                Generate complex Excel spreadsheets or formatted Word documents instantly using natural language processing.
            </p>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-xl opacity-40 blur transition duration-500 group-hover:opacity-75"></div>
<div className="relative flex flex-col bg-black rounded-xl border border-neutral-800 shadow-2xl overflow-hidden">
<div className="flex items-start p-4">
<div className="mt-1 text-neutral-500">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<textarea className="w-full bg-transparent border-none focus:ring-0 text-neutral-200 placeholder-neutral-600 text-sm px-4 py-1 resize-none h-24" placeholder="Example: Create a sales report for Q3 with columns for Date, Region, Product, and Revenue, then write a summary memo..."></textarea>
</div>
<div className="bg-neutral-900/50 px-3 py-2 flex items-center justify-between border-t border-neutral-800">
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors">
<iconify-icon icon="solar:upload-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>Context</span>
</button>
<button className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors">
<iconify-icon icon="solar:tuning-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>Settings</span>
</button>
</div>
<button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span>Generate</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl animate-enter delay-100">

<div className="group relative flex flex-col bg-neutral-950/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-900/20 border border-green-900/30 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:file-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-neutral-200 font-medium text-sm tracking-tight">Excel Data</h3>
<p className="text-xs text-neutral-500">Structured datasets &amp; tables</p>
</div>
</div>
<button className="text-neutral-600 hover:text-neutral-300 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-0.5">Dataset Name</label>
<input className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-300 focus:outline-none focus:border-neutral-600 transition-colors placeholder-neutral-700" id="excel-name" type="text" value="Customer_Leads_2023"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-0.5">Rows</label>
<div className="relative">
<input className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-300 focus:outline-none focus:border-neutral-600 transition-colors" type="number" value="1000"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-700 pointer-events-none">
<iconify-icon icon="solar:sort-vertical-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-0.5">Format</label>
<div className="relative">
<select className="w-full appearance-none bg-black border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-300 focus:outline-none focus:border-neutral-600 transition-colors">
<option>.xlsx (Excel)</option>
<option>.csv (Comma)</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="pt-2">
<label className="block text-xs font-medium text-neutral-500 mb-2 ml-0.5">Include Fields</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer group/chip">
<input checked="" className="hidden peer" type="checkbox"/>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-800 bg-neutral-900/30 text-xs text-neutral-400 peer-checked:bg-green-950/30 peer-checked:text-green-400 peer-checked:border-green-900/50 transition-all select-none hover:border-neutral-700">
<span>UUID</span>
</span>
</label>
<label className="cursor-pointer group/chip">
<input checked="" className="hidden peer" type="checkbox"/>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-800 bg-neutral-900/30 text-xs text-neutral-400 peer-checked:bg-green-950/30 peer-checked:text-green-400 peer-checked:border-green-900/50 transition-all select-none hover:border-neutral-700">
<span>Full Name</span>
</span>
</label>
<label className="cursor-pointer group/chip">
<input checked="" className="hidden peer" type="checkbox"/>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-800 bg-neutral-900/30 text-xs text-neutral-400 peer-checked:bg-green-950/30 peer-checked:text-green-400 peer-checked:border-green-900/50 transition-all select-none hover:border-neutral-700">
<span>Email</span>
</span>
</label>
<label className="cursor-pointer group/chip">
<input className="hidden peer" type="checkbox"/>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-800 bg-neutral-900/30 text-xs text-neutral-400 peer-checked:bg-green-950/30 peer-checked:text-green-400 peer-checked:border-green-900/50 transition-all select-none hover:border-neutral-700">
<span>Phone</span>
</span>
</label>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-neutral-900 flex justify-end">
<button className="text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 group/btn" id="btn-excel" onclick="downloadExcel()">
<span className="btn-text">Export .CSV</span>
<iconify-icon className="btn-icon group-hover/btn:translate-y-0.5 transition-transform" icon="solar:download-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-950/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-900/20 border border-blue-900/30 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-neutral-200 font-medium text-sm tracking-tight">Word Document</h3>
<p className="text-xs text-neutral-500">Reports, contracts &amp; letters</p>
</div>
</div>
<button className="text-neutral-600 hover:text-neutral-300 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-0.5">Topic / Title</label>
<input className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-300 focus:outline-none focus:border-neutral-600 transition-colors placeholder-neutral-700" id="word-title" type="text" value="Q4 Marketing Strategy"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-0.5">Tone</label>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer">
<input checked="" className="hidden peer" name="tone" type="radio"/>
<div className="text-center py-2 rounded-lg border border-neutral-800 bg-neutral-900/20 text-xs text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-neutral-600 transition-all hover:bg-neutral-900">
                                        Formal
                                    </div>
</label>
<label className="cursor-pointer">
<input className="hidden peer" name="tone" type="radio"/>
<div className="text-center py-2 rounded-lg border border-neutral-800 bg-neutral-900/20 text-xs text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-neutral-600 transition-all hover:bg-neutral-900">
                                        Casual
                                    </div>
</label>
<label className="cursor-pointer">
<input className="hidden peer" name="tone" type="radio"/>
<div className="text-center py-2 rounded-lg border border-neutral-800 bg-neutral-900/20 text-xs text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-neutral-600 transition-all hover:bg-neutral-900">
                                        Creative
                                    </div>
</label>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-0.5">Length</label>
<div className="relative w-full h-8 flex items-center">
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-neutral-200" max="100" min="1" type="range" value="75"/>
<div className="absolute right-0 top-0 text-[10px] text-neutral-500 -mt-3">Long</div>
<div className="absolute left-0 top-0 text-[10px] text-neutral-500 -mt-3">Short</div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-neutral-900 flex justify-end">
<button className="text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 group/btn" id="btn-word" onclick="downloadWord()">
<span className="btn-text">Export .DOCX</span>
<iconify-icon className="btn-icon group-hover/btn:translate-y-0.5 transition-transform" icon="solar:download-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 animate-enter delay-200 hidden md:block">
<div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-full px-4 py-2 shadow-2xl flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-neutral-400 font-medium">System Operational</span>
</div>
</div>
</main>


    </>
  );
}
