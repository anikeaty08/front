import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Configuration & State ---
        const defaultLinks = [
            { id: '1', title: 'GitHub', url: 'https://github.com' },
            { id: '2', title: 'Figma', url: 'https://figma.com' },
            { id: '3', title: 'Vercel', url: 'https://vercel.com' },
            { id: '4', title: 'ChatGPT', url: 'https://chat.openai.com' },
            { id: '5', title: 'YouTube', url: 'https://youtube.com' }
        ];

        let state = {
            links: [],
            useApi: false,
            apiUrl: '',
            showClock: true,
            showSearch: true,
            colorfulIcons: false,
            openNewTab: true,
            blankMode: false,
            uiScale: 100,
            isEditingId: null,
            contextTargetId: null
        };

        let sortableInstance = null;

        // --- Data Service Layer ---
        const DataService = {
            async init() {
                const savedUseApi = localStorage.getItem('nexus_use_api') === 'true';
                const savedApiUrl = localStorage.getItem('nexus_api_url') || '';
                
                // Interface State
                const savedShowClock = localStorage.getItem('nexus_show_clock');
                const savedShowSearch = localStorage.getItem('nexus_show_search');
                const savedColorfulIcons = localStorage.getItem('nexus_colorful_icons');
                const savedOpenNewTab = localStorage.getItem('nexus_open_new_tab');
                const savedBlankMode = localStorage.getItem('nexus_blank_mode');
                const savedScale = localStorage.getItem('nexus_ui_scale');
                
                state.useApi = savedUseApi;
                state.apiUrl = savedApiUrl;
                state.showClock = savedShowClock === null ? true : savedShowClock === 'true';
                state.showSearch = savedShowSearch === null ? true : savedShowSearch === 'true';
                state.colorfulIcons = savedColorfulIcons === 'true';
                state.openNewTab = savedOpenNewTab === null ? true : savedOpenNewTab === 'true';
                state.blankMode = savedBlankMode === 'true';
                state.uiScale = savedScale ? parseInt(savedScale) : 100;

                // Update UI Controls
                document.getElementById('useApiToggle').checked = state.useApi;
                document.getElementById('apiUrl').value = state.apiUrl;
                document.getElementById('showClockToggle').checked = state.showClock;
                document.getElementById('showSearchToggle').checked = state.showSearch;
                document.getElementById('showColorToggle').checked = state.colorfulIcons;
                document.getElementById('newTabToggle').checked = state.openNewTab;
                document.getElementById('blankModeToggle').checked = state.blankMode;
                document.getElementById('scaleSlider').value = state.uiScale;
                
                toggleApiInputs(state.useApi);
                this.applyInterfaceSettings();
                updateStorageIndicator();

                await this.fetchLinks();
            },

            applyInterfaceSettings() {
                const header = document.querySelector('header');
                const main = document.querySelector('main');
                const footer = document.querySelector('footer');
                const restoreBtn = document.getElementById('restoreBtnContainer');
                const clockSection = document.getElementById('clockSection');
                const searchSection = document.getElementById('searchSection');
                const scaleDisplay = document.getElementById('scaleValueDisplay');
                
                if (state.blankMode) {
                    header.classList.add('hidden');
                    main.classList.add('hidden');
                    footer.classList.add('hidden');
                    if (restoreBtn) restoreBtn.classList.remove('hidden');
                    document.body.style.backgroundImage = 'none';
                } else {
                    header.classList.remove('hidden');
                    main.classList.remove('hidden');
                    footer.classList.remove('hidden');
                    if (restoreBtn) restoreBtn.classList.add('hidden');
                    document.body.style.backgroundImage = ''; // restore gradient

                    if (state.showClock) clockSection.classList.remove('hidden');
                    else clockSection.classList.add('hidden');

                    if (state.showSearch) searchSection.classList.remove('hidden');
                    else searchSection.classList.add('hidden');
                }
                
                // Apply Scale
                document.body.style.zoom = state.uiScale + '%';
                scaleDisplay.textContent = state.uiScale + '%';

                // Focus search if visible and not in blank mode
                if(state.showSearch && !state.blankMode) document.getElementById('searchInput').focus();
            },

            async fetchLinks() {
                try {
                    if (state.useApi && state.apiUrl) {
                        try {
                            const response = await fetch(state.apiUrl, { method: 'GET' });
                            if (!response.ok) throw new Error('API Error');
                            state.links = await response.json();
                            updateStatus('connected');
                        } catch (err) {
                            console.error("API Fetch Failed", err);
                            updateStatus('error');
                            state.links = []; 
                        }
                    } else {
                        const stored = localStorage.getItem('nexus_links');
                        state.links = stored ? JSON.parse(stored) : defaultLinks;
                        updateStatus('local');
                    }
                } catch (e) {
                    console.error(e);
                } finally {
                    renderLinks();
                }
            },

            async saveLink(linkData) {
                if (state.useApi && state.apiUrl) {
                    const method = state.isEditingId ? 'PUT' : 'POST';
                    const endpoint = state.isEditingId ? `${state.apiUrl}/${state.isEditingId}` : state.apiUrl;
                    
                    try {
                        const res = await fetch(endpoint, {
                            method: method,
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(linkData)
                        });
                        if (!res.ok) throw new Error('Save Failed');
                        return await res.json();
                    } catch (e) {
                        alert("Database Error: " + e.message);
                        return null;
                    }
                } else {
                    let newLinks = [...state.links];
                    if (state.isEditingId) {
                        const index = newLinks.findIndex(l => l.id == state.isEditingId);
                        if (index !== -1) newLinks[index] = { ...linkData, id: state.isEditingId };
                    } else {
                        newLinks.push({ ...linkData, id: Date.now().toString() });
                    }
                    state.links = newLinks;
                    localStorage.setItem('nexus_links', JSON.stringify(state.links));
                    return true;
                }
            },

            async deleteLink(id) {
                if (state.useApi && state.apiUrl) {
                    try {
                        const res = await fetch(`${state.apiUrl}/${id}`, { method: 'DELETE' });
                        if (!res.ok) throw new Error('Delete Failed');
                    } catch(e) {
                        alert("Database Error: " + e.message);
                        return false;
                    }
                } else {
                    state.links = state.links.filter(l => l.id != id);
                    localStorage.setItem('nexus_links', JSON.stringify(state.links));
                }
                return true;
            },

            async reorderLinks(newOrder) {
                state.links = newOrder;
                if (!state.useApi) {
                    localStorage.setItem('nexus_links', JSON.stringify(state.links));
                }
            }
        };

        // --- UI Logic ---
        function updateStatus(status) {
            const indicator = document.getElementById('dbIndicator');
            const text = document.getElementById('dbStatusText');

            if (status === 'connected') {
                indicator.className = "w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]";
                text.textContent = "SQLite Connected";
            } else if (status === 'error') {
                indicator.className = "w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]";
                text.textContent = "Connection Failed";
            } else {
                indicator.className = "w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]";
                text.textContent = "System Operational";
            }
        }

        function updateStorageIndicator() {
             if(state.useApi) {
                updateStatus('connected');
             } else {
                updateStatus('local');
             }
        }

        function renderLinks() {
            const grid = document.getElementById('linksGrid');
            grid.innerHTML = '';

            state.links.forEach(link => {
                const card = document.createElement('a');
                card.href = link.url;
                card.className = "group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 select-none cursor-pointer link-card no-underline h-[100px]";
                card.setAttribute('data-id', link.id);
                
                // Explicit target logic based on setting
                if (state.openNewTab) {
                    card.target = "_blank";
                    card.rel = "noopener noreferrer";
                } else {
                    card.target = "_self";
                }
                
                // Override click event to strictly enforce behavior in non-standard environments
                card.onclick = (e) => {
                    if (!state.openNewTab && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
                        e.preventDefault();
                        window.location.href = link.url;
                    }
                };
                
                card.oncontextmenu = (e) => {
                    e.preventDefault();
                    openContextMenu(e, link.id);
                };

                const imgClass = state.colorfulIcons 
                    ? "w-5 h-5 object-contain transition-transform duration-300"
                    : "w-5 h-5 object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300";

                card.innerHTML = `
                    <div class="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center overflow-hidden border border-zinc-800 shadow-sm group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                        <img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link.url}&size=128" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
                             class="${imgClass}"
                             alt="${link.title}">
                        <iconify-icon icon="solar:link-linear" width="16" class="text-zinc-600 hidden"></iconify-icon>
                    </div>
                    <span class="text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors tracking-tight truncate w-full text-center pointer-events-none">${link.title}</span>
                `;
                grid.appendChild(card);
            });

            // Add Button
            const addBtn = document.createElement('button');
            addBtn.onclick = () => openLinkModal();
            addBtn.className = "add-btn group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-dashed border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/20 transition-all duration-300 cursor-pointer h-[100px]";
            addBtn.innerHTML = `
                <div class="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 group-hover:text-zinc-400 transition-colors pointer-events-none">
                    <iconify-icon icon="solar:add-circle-linear" width="20" stroke-width="1.5"></iconify-icon>
                </div>
                <span class="text-xs font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors pointer-events-none">Add</span>
            `;
            grid.appendChild(addBtn);

            initSortable();
        }

        function initSortable() {
            const grid = document.getElementById('linksGrid');
            if (sortableInstance) sortableInstance.destroy();

            sortableInstance = new Sortable(grid, {
                animation: 200,
                ghostClass: 'sortable-ghost',
                dragClass: 'sortable-drag',
                delay: 150,
                delayOnTouchOnly: true,
                filter: '.add-btn',
                draggable: '.link-card',
                onMove: (evt) => evt.related.className.indexOf('add-btn') === -1,
                onEnd: () => {
                    const newOrder = [];
                    grid.querySelectorAll('.link-card').forEach(item => {
                        const id = item.getAttribute('data-id');
                        const link = state.links.find(l => l.id == id);
                        if (link) newOrder.push(link);
                    });
                    DataService.reorderLinks(newOrder);
                }
            });
        }

        // --- Clock ---
        function updateTime() {
            const now = new Date();
            document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            document.getElementById('date').textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        }
        setInterval(updateTime, 1000);
        updateTime();

        // --- Modals & Settings ---
        function openLinkModal(editId = null) {
            state.isEditingId = editId;
            const modal = document.getElementById('linkModal');
            const titleInput = document.getElementById('linkTitle');
            const urlInput = document.getElementById('linkUrl');
            const modalTitle = document.getElementById('modalTitle');
            
            modal.classList.remove('hidden');
            if (editId) {
                const link = state.links.find(l => l.id == editId);
                modalTitle.textContent = "Edit Shortcut";
                titleInput.value = link ? link.title : '';
                urlInput.value = link ? link.url : '';
            } else {
                modalTitle.textContent = "Add Shortcut";
                titleInput.value = '';
                urlInput.value = '';
            }
            setTimeout(() => titleInput.focus(), 50);
        }

        function openSettings() {
            document.getElementById('settingsModal').classList.remove('hidden');
        }

        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
            if(id === 'linkModal') state.isEditingId = null;
        }

        // --- Server Code Modal Logic ---
        function openServerModal() {
            closeModal('settingsModal');
            document.getElementById('serverModal').classList.remove('hidden');
            switchTab('server');
        }

        function switchTab(tab) {
            const serverBtn = document.getElementById('tab-server');
            const schemaBtn = document.getElementById('tab-schema');
            const serverCode = document.getElementById('code-server');
            const schemaCode = document.getElementById('code-schema');

            if (tab === 'server') {
                serverBtn.classList.replace('text-zinc-500', 'text-zinc-200');
                serverBtn.classList.replace('border-transparent', 'border-zinc-200');
                schemaBtn.classList.replace('text-zinc-200', 'text-zinc-500');
                schemaBtn.classList.replace('border-zinc-200', 'border-transparent');
                
                serverCode.classList.remove('hidden');
                schemaCode.classList.add('hidden');
            } else {
                schemaBtn.classList.replace('text-zinc-500', 'text-zinc-200');
                schemaBtn.classList.replace('border-transparent', 'border-zinc-200');
                serverBtn.classList.replace('text-zinc-200', 'text-zinc-500');
                serverBtn.classList.replace('border-zinc-200', 'border-transparent');
                
                schemaCode.classList.remove('hidden');
                serverCode.classList.add('hidden');
            }
        }
        
        function copyCode() {
            const activeCode = document.getElementById('code-server').classList.contains('hidden') 
                ? document.getElementById('code-schema').textContent
                : document.getElementById('code-server').textContent;
                
            navigator.clipboard.writeText(activeCode.trim());
        }

        // --- Settings Logic ---
        const toggle = document.getElementById('useApiToggle');
        toggle.addEventListener('change', (e) => toggleApiInputs(e.target.checked));
        
        // Slider Logic
        const slider = document.getElementById('scaleSlider');
        slider.addEventListener('input', (e) => {
            document.getElementById('scaleValueDisplay').textContent = e.target.value + '%';
            document.body.style.zoom = e.target.value + '%';
        });

        function toggleApiInputs(checked) {
            const section = document.getElementById('apiConfigSection');
            if (checked) {
                section.classList.remove('opacity-50', 'pointer-events-none');
            } else {
                section.classList.add('opacity-50', 'pointer-events-none');
            }
        }

        async function saveSettings() {
            const useApi = document.getElementById('useApiToggle').checked;
            const apiUrl = document.getElementById('apiUrl').value.trim();
            const showClock = document.getElementById('showClockToggle').checked;
            const showSearch = document.getElementById('showSearchToggle').checked;
            const colorfulIcons = document.getElementById('showColorToggle').checked;
            const openNewTab = document.getElementById('newTabToggle').checked;
            const blankMode = document.getElementById('blankModeToggle').checked;
            const uiScale = document.getElementById('scaleSlider').value;

            localStorage.setItem('nexus_use_api', useApi);
            localStorage.setItem('nexus_api_url', apiUrl);
            localStorage.setItem('nexus_show_clock', showClock);
            localStorage.setItem('nexus_show_search', showSearch);
            localStorage.setItem('nexus_colorful_icons', colorfulIcons);
            localStorage.setItem('nexus_open_new_tab', openNewTab);
            localStorage.setItem('nexus_blank_mode', blankMode);
            localStorage.setItem('nexus_ui_scale', uiScale);
            
            state.useApi = useApi;
            state.apiUrl = apiUrl;
            state.showClock = showClock;
            state.showSearch = showSearch;
            state.colorfulIcons = colorfulIcons;
            state.openNewTab = openNewTab;
            state.blankMode = blankMode;
            state.uiScale = parseInt(uiScale);

            closeModal('settingsModal');
            await DataService.init(); 
        }

        async function saveLink() {
            const title = document.getElementById('linkTitle').value.trim();
            let url = document.getElementById('linkUrl').value.trim();
            
            if (!title || !url) return;
            if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

            const btn = document.getElementById('saveBtn');
            const originalText = btn.textContent;
            btn.textContent = 'Saving...';
            btn.disabled = true;

            const success = await DataService.saveLink({ title, url });
            
            btn.textContent = originalText;
            btn.disabled = false;

            if (success) {
                await DataService.fetchLinks();
                closeModal('linkModal');
            }
        }

        // --- Context Menu ---
        const contextMenu = document.getElementById('contextMenu');
        function openContextMenu(e, id) {
            state.contextTargetId = id;
            
            // Adjust coordinates based on zoom scale
            const scale = state.uiScale / 100;
            const x = e.clientX / scale;
            const y = e.clientY / scale;
            
            const menuWidth = 192;
            const windowWidth = window.innerWidth / scale;
            
            const finalX = x + menuWidth > windowWidth ? x - menuWidth : x;
            
            contextMenu.style.left = `${finalX}px`;
            contextMenu.style.top = `${y}px`;
            contextMenu.classList.remove('hidden');
        }

        function closeContextMenu() {
            contextMenu.classList.add('hidden');
        }

        async function deleteCurrentLink() {
            if (state.contextTargetId) {
                await DataService.deleteLink(state.contextTargetId);
                await DataService.fetchLinks();
            }
            closeContextMenu();
        }

        function editCurrentLink() {
            if (state.contextTargetId) openLinkModal(state.contextTargetId);
            closeContextMenu();
        }

        // --- Event Listeners ---
        document.getElementById('linkModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('linkModal')) closeModal('linkModal');
        });
        document.getElementById('settingsModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('settingsModal')) closeModal('settingsModal');
        });
        document.getElementById('serverModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('serverModal')) closeModal('serverModal');
        });
        document.getElementById('searchInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter' && this.value) {
                const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(this.value);
                if (state.openNewTab) {
                    window.open(searchUrl, '_blank', 'noopener,noreferrer');
                } else {
                    window.location.href = searchUrl;
                }
            }
        });

        // Start
        DataService.init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full max-w-6xl flex justify-between items-center z-30" style={{animation: 'fadeIn 0.8s ease-out'}}>
<div className="flex items-center gap-2 group cursor-default">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
<span className="text-zinc-100 font-semibold tracking-tighter text-sm">N</span>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-500 group-hover:text-zinc-300 transition-colors">Nexus</span>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center justify-center text-zinc-500 hover:text-zinc-200 transition-colors" onclick="openSettings()" title="Settings">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-zinc-700/50 overflow-hidden">
<img alt="Avatar" className="w-full h-full opacity-80 hover:opacity-100 transition-opacity" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&amp;backgroundColor=transparent"/>
</div>
</div>
</header>

<main className="flex-1 w-full max-w-5xl flex flex-col items-center justify-start pt-10 gap-8 z-10 transition-all duration-500">

<div className="text-center space-y-1 select-none transition-all duration-300" id="clockSection">
<h1 className="text-6xl md:text-7xl font-extralight tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500" id="clock">
                00:00
            </h1>
<p className="text-base font-light tracking-wide text-zinc-500" id="date">
                Loading date...
            </p>
</div>

<div className="w-full max-w-lg relative group z-20 transition-all duration-300" id="searchSection">
<div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl opacity-20 blur group-focus-within:opacity-50 transition duration-500"></div>
<div className="relative flex items-center bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden transition-all group-focus-within:border-zinc-700/80 group-focus-within:bg-zinc-900">
<div className="pl-4 text-zinc-500">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input autocomplete="off" className="w-full bg-transparent border-none text-zinc-200 placeholder-zinc-600 focus:ring-0 h-11 px-4 text-sm font-light tracking-wide outline-none" id="searchInput" placeholder="Search..." type="text"/>
<div className="pr-4 flex items-center gap-2">
<kbd className="hidden sm:inline-flex items-center h-5 px-1.5 rounded border border-zinc-800 bg-zinc-900/50 font-sans text-[10px] text-zinc-500 tracking-tight">⌘K</kbd>
</div>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 w-full min-h-[100px]" id="linksGrid">

<div className="col-span-full flex justify-center py-10 opacity-50">
<iconify-icon className="animate-spin text-2xl" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
</div>
</main>

<footer className="w-full max-w-6xl flex justify-between items-end text-xs text-zinc-600 font-medium pb-2">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 group cursor-help">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-colors duration-500" id="dbIndicator"></div>
<span className="tracking-wide group-hover:text-zinc-400 transition-colors" id="dbStatusText">System Operational</span>
</div>
</div>
<div className="flex gap-4 opacity-50 hover:opacity-100 transition-opacity">
<span>Right-click to edit</span>
</div>
</footer>

<div className="hidden fixed bottom-6 right-6 z-[55] opacity-20 hover:opacity-100 transition-opacity duration-300" id="restoreBtnContainer">
<button className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 hover:text-zinc-300 shadow-2xl flex items-center justify-center" onclick="openSettings()" title="Open Settings">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden fixed z-50 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-1 context-menu" id="contextMenu">
<button className="w-full text-left px-4 py-2 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors flex items-center gap-2" onclick="editCurrentLink()">
<iconify-icon icon="solar:pen-linear"></iconify-icon> Edit Shortcut
        </button>
<button className="w-full text-left px-4 py-2 text-xs text-red-400 hover:bg-zinc-800 hover:text-red-300 transition-colors flex items-center gap-2" onclick="deleteCurrentLink()">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Remove
        </button>
</div>

<div className="hidden fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" id="linkModal">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl modal-enter relative">
<h2 className="text-zinc-200 font-medium text-lg mb-4 tracking-tight" id="modalTitle">Add Shortcut</h2>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 ml-1">Title</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors placeholder-zinc-700" id="linkTitle" placeholder="e.g. GitHub" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 ml-1">URL</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors placeholder-zinc-700" id="linkUrl" placeholder="https://..." type="url"/>
</div>
</div>
<div className="flex gap-3 mt-6">
<button className="flex-1 px-4 py-2 rounded-xl border border-zinc-800 text-zinc-400 text-xs font-medium hover:bg-zinc-800 hover:text-zinc-200 transition-colors" onclick="closeModal('linkModal')">Cancel</button>
<button className="flex-1 px-4 py-2 rounded-xl bg-zinc-100 text-zinc-900 text-xs font-semibold hover:bg-white transition-colors flex justify-center items-center gap-2" id="saveBtn" onclick="saveLink()">Save</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" id="settingsModal">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-md shadow-2xl modal-enter relative max-h-[90vh] overflow-y-auto scrollbar-hide">
<div className="flex justify-between items-center mb-6">
<h2 className="text-zinc-200 font-medium text-lg tracking-tight">Settings</h2>
<button className="text-zinc-500 hover:text-zinc-300" onclick="closeModal('settingsModal')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="space-y-6">

<div className="space-y-4">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Interface</h3>
<div className="flex flex-col gap-3 pb-2 border-b border-zinc-800/50">
<div className="flex justify-between items-center">
<label className="text-sm text-zinc-300 font-medium flex items-center gap-2">
<iconify-icon icon="solar:monitor-linear"></iconify-icon>
                                UI Scale
                            </label>
<span className="text-xs font-mono text-zinc-500" id="scaleValueDisplay">100%</span>
</div>
<input className="w-full" id="scaleSlider" max="150" min="70" step="5" type="range" value="100"/>
</div>
<div className="flex items-center justify-between">
<label className="text-sm text-zinc-300 font-medium flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                            Show Time &amp; Date
                        </label>
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-700 checked:right-0 right-5 checked:border-indigo-500 transition-all duration-300" id="showClockToggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="showClockToggle"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<label className="text-sm text-zinc-300 font-medium flex items-center gap-2">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
                            Show Search Bar
                        </label>
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-700 checked:right-0 right-5 checked:border-indigo-500 transition-all duration-300" id="showSearchToggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="showSearchToggle"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<label className="text-sm text-zinc-300 font-medium flex items-center gap-2">
<iconify-icon icon="solar:palette-linear"></iconify-icon>
                            Colorful Icons
                        </label>
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-700 checked:right-0 right-5 checked:border-indigo-500 transition-all duration-300" id="showColorToggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="showColorToggle"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<label className="text-sm text-zinc-300 font-medium flex items-center gap-2" title="Open links and searches in a new browser tab">
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
                            Open Links in New Tab
                        </label>
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-700 checked:right-0 right-5 checked:border-indigo-500 transition-all duration-300" id="newTabToggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="newTabToggle"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<label className="text-sm text-zinc-300 font-medium flex items-center gap-2" title="Hide all elements for a distraction-free look">
<iconify-icon icon="solar:ghost-linear"></iconify-icon>
                            Blank Page Mode
                        </label>
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-700 checked:right-0 right-5 checked:border-indigo-500 transition-all duration-300" id="blankModeToggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="blankModeToggle"></label>
</div>
</div>
</div>
<div className="h-px bg-zinc-800 w-full"></div>

<div className="space-y-3">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Data</h3>
<div className="flex items-center justify-between">
<label className="text-sm text-zinc-300 font-medium flex items-center gap-2">
<iconify-icon icon="solar:database-linear"></iconify-icon>
                            SQLite Integration
                        </label>
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-700 checked:right-0 right-5 checked:border-indigo-500 transition-all duration-300" id="useApiToggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="useApiToggle"></label>
</div>
</div>
<div className="space-y-3 opacity-50 pointer-events-none transition-opacity duration-300" id="apiConfigSection">
<div>
<label className="text-xs text-zinc-500 ml-1">API Endpoint URL</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-zinc-400 font-mono focus:outline-none focus:border-zinc-600 transition-colors placeholder-zinc-800" id="apiUrl" placeholder="http://localhost:3000/api/links" type="text"/>
</div>
<div className="p-3 bg-zinc-950/50 border border-zinc-800/50 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:code-file-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300 font-medium">Server Code</span>
<span className="text-[10px] text-zinc-600">Node.js + SQLite Schema</span>
</div>
</div>
<button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-medium rounded-lg transition-colors border border-zinc-700/50" onclick="openServerModal()">
                                Get Code
                             </button>
</div>
</div>
</div>
<div className="h-px bg-zinc-800 w-full"></div>
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500">Version 2.3.3</span>
<button className="px-4 py-2 rounded-xl bg-zinc-100 text-zinc-900 text-xs font-semibold hover:bg-white transition-colors" onclick="saveSettings()">Apply Changes</button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" id="serverModal">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col shadow-2xl modal-enter">

<div className="flex justify-between items-center p-4 border-b border-zinc-800">
<div className="flex gap-4">
<button className="text-sm font-medium text-zinc-200 border-b-2 border-zinc-200 pb-4 -mb-4 transition-colors" id="tab-server" onclick="switchTab('server')">server.js</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent pb-4 -mb-4 transition-colors" id="tab-schema" onclick="switchTab('schema')">database.sql</button>
</div>
<button className="text-zinc-500 hover:text-zinc-300" onclick="closeModal('serverModal')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-auto bg-zinc-950 p-4 font-mono text-xs leading-relaxed text-zinc-400 relative group scrollbar-hide">
<button className="absolute top-4 right-4 p-2 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all" onclick="copyCode()">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</button>
<div id="code-server">
<pre>
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite Database
const db = new sqlite3.Database('./nexus.db', (err) =&gt; {
    if (err) console.error(err.message);
    console.log('Connected to SQLite database.');
});

// Create table if not exists
db.serialize(() =&gt; {
    db.run(`CREATE TABLE IF NOT EXISTS links (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        url TEXT NOT NULL
    )`);
});

// GET: Fetch all links
app.get('/api/links', (req, res) =&gt; {
    db.all("SELECT * FROM links ORDER BY id ASC", [], (err, rows) =&gt; {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// POST: Add new link
app.post('/api/links', (req, res) =&gt; {
    const { title, url } = req.body;
    const sql = "INSERT INTO links (title, url) VALUES (?, ?)";
    db.run(sql, [title, url], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, title, url });
    });
});

// PUT: Update link
app.put('/api/links/:id', (req, res) =&gt; {
    const { title, url } = req.body;
    const sql = "UPDATE links SET title = ?, url = ? WHERE id = ?";
    db.run(sql, [title, url, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: req.params.id, title, url });
    });
});

// DELETE: Remove link
app.delete('/api/links/:id', (req, res) =&gt; {
    const sql = "DELETE FROM links WHERE id = ?";
    db.run(sql, req.params.id, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.sendStatus(200);
    });
});

const PORT = 3000;
app.listen(PORT, () =&gt; {
    console.log(`Nexus API running on http://localhost:${PORT}`);
});
</pre>
</div>
<div className="hidden" id="code-schema">
<pre>
-- SQLite Schema (Automatically handled in server.js, but here for reference)

-- Create Table
CREATE TABLE IF NOT EXISTS links (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    url TEXT NOT NULL
);

-- Insert Demo Data
INSERT INTO links (title, url) VALUES 
('GitHub', 'https://github.com'),
('Figma', 'https://figma.com'),
('Vercel', 'https://vercel.com'),
('YouTube', 'https://youtube.com');
</pre>
</div>
</div>
<div className="p-4 border-t border-zinc-800 bg-zinc-900 text-center">
<p className="text-[10px] text-zinc-500">Install dependencies: <code className="text-zinc-400 bg-zinc-800 px-1 rounded">npm install express sqlite3 cors body-parser</code></p>
</div>
</div>
</div>


    </>
  );
}
