import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Data State
        const files = [
            { id: 0, name: "Design_System_v2.fig", size: "8.2 MB", type: "figma", date: "2m ago", color: "bg-purple-50 text-purple-600", icon: "solar:figma-file-linear" },
            { id: 1, name: "Project_Proposal.pdf", size: "2.4 MB", type: "pdf", date: "1h ago", color: "bg-red-50 text-red-600", icon: "solar:file-text-linear" },
            { id: 2, name: "Hero_Image_01.png", size: "4.1 MB", type: "image", date: "3h ago", color: "bg-blue-50 text-blue-600", src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
            { id: 3, name: "Q3_Financials.xlsx", size: "1.8 MB", type: "excel", date: "1d ago", color: "bg-emerald-50 text-emerald-600", icon: "solar:file-linear" },
            { id: 4, name: "Meeting_Notes.docx", size: "0.5 MB", type: "doc", date: "2d ago", color: "bg-blue-50 text-blue-600", icon: "solar:document-text-linear" },
        ];

        let currentView = 'grid'; // 'grid' | 'list'
        let expandedId = null;

        // Elements
        const container = document.getElementById('file-container');
        const btnGrid = document.getElementById('btn-grid');
        const btnList = document.getElementById('btn-list');
        const editOverlay = document.getElementById('edit-overlay');
        const fileCountEl = document.getElementById('file-count');

        function init() {
            updateSummary();
            render();
        }

        function updateSummary() {
            const count = files.length;
            const totalSize = files.reduce((acc, file) => {
                return acc + parseFloat(file.size);
            }, 0).toFixed(1);
            fileCountEl.textContent = `${count} files, ${totalSize} MB`;
        }

        function switchView(view) {
            if (currentView === view) return;
            
            // Toggle Button Styles
            const activeClass = "bg-white shadow-sm text-neutral-900";
            const inactiveClass = "text-neutral-400 hover:text-neutral-600 bg-transparent shadow-none";

            if (view === 'grid') {
                btnGrid.className = `px-2 py-1 rounded-none transition-all duration-200 ${activeClass}`;
                btnList.className = `px-2 py-1 rounded-none transition-all duration-200 ${inactiveClass}`;
            } else {
                btnList.className = `px-2 py-1 rounded-none transition-all duration-200 ${activeClass}`;
                btnGrid.className = `px-2 py-1 rounded-none transition-all duration-200 ${inactiveClass}`;
            }

            // View Transition
            if (document.startViewTransition) {
                document.startViewTransition(() => {
                    currentView = view;
                    render();
                });
            } else {
                currentView = view;
                render();
            }
        }

        function render() {
            if (currentView === 'grid') {
                container.className = "flex-1 overflow-y-auto custom-scrollbar p-5 pt-0 grid grid-cols-2 gap-4 content-start";
                container.innerHTML = files.map(file => createGridCard(file)).join('');
            } else {
                container.className = "flex-1 overflow-y-auto custom-scrollbar p-5 pt-0 flex flex-col gap-0 border-t border-neutral-200";
                container.innerHTML = files.map(file => createListItem(file)).join('');
            }
        }

        // --- HTML Generators ---

        function createGridCard(file) {
            const preview = file.src 
                ? `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style="view-transition-name: img-${file.id}">`
                : `<div class="w-full h-full flex items-center justify-center ${file.color}" style="view-transition-name: img-${file.id}"><iconify-icon icon="${file.icon}" width="32" stroke-width="1.5"></iconify-icon></div>`;

            return `
                <div onclick="openEdit(${file.id})" class="group cursor-pointer bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-200 flex flex-col rounded-none shadow-sm overflow-hidden" style="view-transition-name: file-${file.id}">
                    <!-- Image Area Flush to Edges -->
                    <div class="w-full aspect-[4/3] bg-neutral-100 relative border-b border-neutral-100 overflow-hidden">
                        ${preview}
                        <div class="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div class="bg-white/90 backdrop-blur p-1 shadow-sm border border-neutral-200/50 text-neutral-600 flex">
                                <iconify-icon icon="solar:menu-dots-bold" width="14"></iconify-icon>
                            </div>
                        </div>
                    </div>
                    <!-- Text Area with Padding -->
                    <div class="p-3">
                        <h3 class="text-xs font-medium text-neutral-900 truncate leading-tight mb-1">${file.name}</h3>
                        <p class="text-[10px] text-neutral-400 font-normal flex justify-between items-center">
                            <span>${file.size}</span>
                        </p>
                    </div>
                </div>
            `;
        }

        function createListItem(file) {
            const preview = file.src 
                ? `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover" style="view-transition-name: img-${file.id}">`
                : `<div class="w-full h-full flex items-center justify-center ${file.color}" style="view-transition-name: img-${file.id}"><iconify-icon icon="${file.icon}" width="18" stroke-width="1.5"></iconify-icon></div>`;

            return `
                <div onclick="openEdit(${file.id})" class="group cursor-pointer w-full bg-white border-b border-neutral-200 p-3 flex items-center gap-3 transition-colors duration-200 hover:bg-neutral-50 rounded-none last:border-b-0" style="view-transition-name: file-${file.id}">
                    <div class="h-8 w-8 shrink-0 overflow-hidden bg-neutral-50 border border-neutral-200 rounded-none">
                        ${preview}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-xs font-medium text-neutral-900 truncate">${file.name}</h3>
                        <div class="flex items-center gap-2 mt-0.5">
                            <span class="text-[10px] text-neutral-400 font-normal">${file.size}</span>
                        </div>
                    </div>
                    <span class="text-[10px] text-neutral-400 font-normal">${file.date}</span>
                </div>
            `;
        }

        // --- Edit View Logic ---

        function openEdit(id) {
            const file = files.find(f => f.id === id);
            expandedId = id;

            // Generate Overlay Content
            const preview = file.src 
                ? `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover">`
                : `<div class="w-full h-full flex items-center justify-center ${file.color}"><iconify-icon icon="${file.icon}" width="48" stroke-width="1.5"></iconify-icon></div>`;

            const html = `
                <div class="px-5 py-4 border-b border-neutral-200 flex justify-between items-center bg-white z-10 rounded-none">
                    <button onclick="closeEdit()" class="text-xs font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                        <iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
                        Back
                    </button>
                    <div class="flex gap-2">
                         <button class="p-1.5 rounded-none text-neutral-400 hover:text-red-500 transition-colors">
                            <iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
                        </button>
                        <button class="px-3 py-1.5 rounded-none bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-sm">
                            Save
                        </button>
                    </div>
                </div>
                <div class="flex-1 overflow-y-auto custom-scrollbar bg-neutral-50/30">
                    <div class="p-5">
                        <div class="w-full aspect-video border border-neutral-200 overflow-hidden bg-white shadow-sm mb-6 flex items-center justify-center rounded-none">
                            ${preview}
                        </div>
                        
                        <div class="space-y-6">
                            <div>
                                <label class="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-2">Filename</label>
                                <input type="text" value="${file.name}" class="w-full text-sm font-medium text-neutral-900 bg-transparent border-b border-neutral-200 pb-2 focus:outline-none focus:border-neutral-900 transition-colors rounded-none">
                            </div>
                            
                            <div class="grid grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-2">Size</label>
                                    <div class="text-sm text-neutral-900 border-b border-neutral-100 pb-2">${file.size}</div>
                                </div>
                                <div>
                                    <label class="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-2">Type</label>
                                    <div class="text-sm text-neutral-900 capitalize border-b border-neutral-100 pb-2">${file.type}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            editOverlay.innerHTML = html;
            editOverlay.classList.remove('translate-y-full');
        }

        function closeEdit() {
            editOverlay.classList.add('translate-y-full');
            setTimeout(() => {
                editOverlay.innerHTML = '';
            }, 500); 
        }

        // Initialize
        init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-sm bg-white border border-neutral-200 shadow-sm overflow-hidden relative flex flex-col h-[650px] ring-1 ring-neutral-950/5 rounded-none">

<div className="group relative flex flex-col items-center justify-center w-full h-40 border-b border-dashed border-neutral-300 bg-neutral-50/50 transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-400 cursor-pointer overflow-hidden rounded-none">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="z-10 flex flex-col items-center gap-2 text-neutral-400 group-hover:text-neutral-600 transition-colors">
<div className="p-2 bg-white shadow-sm border border-neutral-200 group-hover:scale-105 transition-transform duration-300 rounded-none">
<iconify-icon icon="solar:cloud-upload-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-xs font-normal tracking-wide uppercase">Drop files to upload</p>
</div>
</div>

<div className="px-5 py-3 border-b border-neutral-100 flex justify-between items-center bg-white z-10">

<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-900" id="file-count">Loading...</span>
</div>

<div className="flex items-center gap-px bg-neutral-100 p-0.5 border border-neutral-200 rounded-none">
<button className="px-2 py-1 text-neutral-900 bg-white shadow-sm transition-all duration-200 hover:text-black rounded-none" id="btn-grid" onclick="switchView('grid')">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="px-2 py-1 text-neutral-400 hover:text-neutral-600 transition-all duration-200 rounded-none" id="btn-list" onclick="switchView('list')">
<iconify-icon icon="solar:list-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden relative bg-neutral-50/30">
<div className="flex-1 overflow-y-auto custom-scrollbar p-5 pt-5" id="file-container">

</div>
</div>

<div className="px-5 py-3 border-t border-neutral-200 bg-white text-xs text-neutral-500 flex justify-between items-center rounded-none">
<span id="storage-text">16.5 MB used</span>
<span className="flex items-center gap-1 hover:text-neutral-800 cursor-pointer transition-colors font-medium">
                Upgrade Plan
                <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</span>
</div>

<div className="absolute inset-0 bg-white z-20 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col rounded-none" id="edit-overlay">

</div>
</div>


    </>
  );
}
