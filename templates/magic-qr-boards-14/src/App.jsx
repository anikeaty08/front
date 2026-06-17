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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State Management
        let draggedId = null;
        let selectedEventData = null;

        // Mock Data for Dropdown
        const eventDatabase = {
            'wedding': {
                title: 'Sai + Siri Wedding',
                category: 'Wedding',
                date: '12-08-2025',
                image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
            },
            'conference': {
                title: 'Tech Summit 2025',
                category: 'Conference',
                date: '15-09-2025',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop'
            },
            'gala': {
                title: 'Charity Gala Night',
                category: 'Fundraiser',
                date: '20-10-2025',
                image: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=2070&auto=format&fit=crop'
            }
        };

        // --- Drag & Drop Logic ---

        function allowDrop(ev) {
            ev.preventDefault();
            const zone = ev.currentTarget;
            if (zone.id === 'staging-zone' && selectedEventData) {
                zone.classList.add('bg-indigo-50/50', 'border-indigo-200');
            } else if (zone.id === 'col-todo') {
                zone.classList.add('bg-gray-100');
            }
        }

        function drag(ev) {
            draggedId = ev.target.id;
            ev.dataTransfer.setData("text", draggedId);
            ev.target.classList.add('dragging');
            // Remove drop styling from anywhere just in case
            removeDropStyling();
        }

        // Standard drop (back to available)
        function drop(ev) {
            ev.preventDefault();
            removeDropStyling();
            const id = ev.dataTransfer.getData("text");
            const element = document.getElementById(id);
            const targetCol = document.getElementById('col-todo');
            
            if (element && targetCol.contains(ev.target) || ev.target === targetCol) {
                // Return to original state style
                resetCardStyle(element);
                targetCol.appendChild(element);
                updateCounts();
            }
            element.classList.remove('dragging');
        }

        // Drop into Staging Zone
        function dropInStaging(ev) {
            ev.preventDefault();
            removeDropStyling();
            
            if (!selectedEventData) {
                alert("Please select an event first!");
                document.getElementById(draggedId).classList.remove('dragging');
                return;
            }

            const id = ev.dataTransfer.getData("text");
            const element = document.getElementById(id);
            const stagingZone = document.getElementById('staging-zone');
            
            if (element) {
                // Style for staging (Compact)
                convertToStagingStyle(element);
                stagingZone.appendChild(element);
                
                // Hide placeholder
                const ph = document.getElementById('staging-placeholder');
                if(ph) ph.style.display = 'none';
                
                updateCounts();
            }
            element.classList.remove('dragging');
        }

        function removeDropStyling() {
            document.getElementById('staging-zone').classList.remove('bg-indigo-50/50', 'border-indigo-200');
            document.getElementById('col-todo').classList.remove('bg-gray-100');
        }

        // --- Styling Logic ---

        function convertToStagingStyle(card) {
            // Simplify card for the list view in staging
            const boardId = card.querySelector('h3').innerText;
            const qrSrc = card.querySelector('img').src;
            
            card.className = "bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between group relative animate-fade-in";
            card.innerHTML = `
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gray-50 rounded-lg p-1 border border-gray-100">
                        <img src="${qrSrc}" class="w-full h-full object-contain">
                    </div>
                    <div>
                        <h4 class="text-sm font-semibold text-gray-800">${boardId}</h4>
                        <span class="text-[10px] text-green-600 font-medium bg-green-50 px-1.5 py-0.5 rounded">Ready to attach</span>
                    </div>
                </div>
                <button onclick="detachFromStaging('${card.id}')" class="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors">
                    <iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
                </button>
            `;
        }

        function resetCardStyle(card) {
            // Revert to full card for Available column
            // Extract ID (simplified parsing for demo)
            const text = card.innerText; 
            const boardId = text.match(/Board #\d+/)?.[0] || "Board #XXXX";
            const idNum = boardId.replace('Board #', '');
            
            card.className = "bg-white p-5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-grab relative";
            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <span class="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wide uppercase">Idle</span>
                    <div class="relative">
                        <button class="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-50 transition-colors">
                            <iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
                        </button>
                    </div>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1 tracking-tight">${boardId}</h3>
                <p class="text-xs text-gray-500 leading-relaxed mb-4">Unassigned. Drag to configure.</p>
                <div class="flex justify-between items-end pt-2 border-t border-gray-50">
                    <div class="text-[10px] text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md">ID: ${idNum}</div>
                    <div class="w-14 h-14 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Board${idNum}" alt="QR" class="w-full h-full object-contain opacity-80">
                    </div>
                </div>
            `;
        }

        function detachFromStaging(cardId) {
            const card = document.getElementById(cardId);
            const todoCol = document.getElementById('col-todo');
            if(card) {
                resetCardStyle(card);
                todoCol.appendChild(card);
                updateCounts();
                
                // Check if staging is empty to show placeholder
                const staging = document.getElementById('staging-zone');
                // Filter out placeholder div
                const items = Array.from(staging.children).filter(c => c.id !== 'staging-placeholder');
                if (items.length === 0) {
                    document.getElementById('staging-placeholder').style.display = 'flex';
                }
            }
        }

        // --- Interaction Logic ---

        function handleEventSelection() {
            const selector = document.getElementById('event-selector');
            const value = selector.value;
            
            if (value && eventDatabase[value]) {
                selectedEventData = eventDatabase[value];
                
                // UI Switch
                document.getElementById('config-empty-state').classList.add('hidden');
                document.getElementById('config-active-state').classList.remove('hidden');
                document.getElementById('config-active-state').classList.add('flex');
                
                // Populate Data
                document.getElementById('event-title-preview').innerText = selectedEventData.title;
                document.getElementById('event-cat-preview').innerText = selectedEventData.category;
                document.getElementById('event-img-preview').src = selectedEventData.image;
            } else {
                resetConfigurationUI();
            }
        }

        function resetConfiguration() {
            document.getElementById('event-selector').value = "";
            
            // Move any staged cards back to todo
            const staging = document.getElementById('staging-zone');
            const cards = Array.from(staging.children).filter(c => c.id !== 'staging-placeholder');
            
            cards.forEach(c => {
                detachFromStaging(c.id);
            });

            resetConfigurationUI();
        }

        function resetConfigurationUI() {
            selectedEventData = null;
            document.getElementById('config-empty-state').classList.remove('hidden');
            document.getElementById('config-active-state').classList.add('hidden');
            document.getElementById('config-active-state').classList.remove('flex');
            document.getElementById('staging-placeholder').style.display = 'flex';
            updateCounts();
        }

        function saveConnection() {
            if (!selectedEventData) return;
            
            const staging = document.getElementById('staging-zone');
            const stagedCards = Array.from(staging.children).filter(c => c.id !== 'staging-placeholder');
            
            if (stagedCards.length === 0) {
                alert("Please attach at least one QR board.");
                return;
            }

            // Create Running Connection Card (Figma Style)
            createRunningCard(selectedEventData, stagedCards.length);

            // Clean up: Remove cards from DOM (they are now "inside" the event card logic-wise)
            stagedCards.forEach(c => c.remove());
            
            // Reset UI
            resetConfiguration();
        }

        function createRunningCard(data, boardCount) {
            const container = document.getElementById('col-running');
            const emptyState = document.getElementById('running-empty-state');
            if(emptyState) emptyState.style.display = 'none';

            const cardId = 'run-' + Date.now();
            
            const cardHTML = `
                <div id="${cardId}" class="w-full bg-white rounded-[20px] shadow-[0_3px_8px_rgba(50,50,71,0.05),0_0_1px_rgba(12,26,75,0.24)] overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in relative">
                    <!-- Top Image Section -->
                    <div class="h-[140px] w-full relative">
                        <img src="${data.image}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        <!-- Top Right Action -->
                        <div class="absolute top-3 right-3">
                             <div class="relative">
                                <button class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors" onclick="toggleMenu('${cardId}-menu')">
                                    <iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
                                </button>
                                <!-- Dropdown -->
                                <div id="${cardId}-menu" class="absolute right-0 top-9 w-32 bg-white rounded-xl shadow-xl border border-gray-100 z-20 hidden flex-col py-1 overflow-hidden">
                                    <button class="flex items-center gap-2 px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 w-full text-left">
                                        <iconify-icon icon="solar:pen-linear"></iconify-icon> Edit
                                    </button>
                                    <button class="flex items-center gap-2 px-3 py-2 text-xs text-red-500 hover:bg-red-50 w-full text-left" onclick="deleteRunningCard('${cardId}')">
                                        <iconify-icon icon="solar:link-broken-linear"></iconify-icon> Detach
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content Section -->
                    <div class="p-4 relative">
                        <!-- Floating Icon -->
                        <div class="absolute -top-8 left-4">
                            <div class="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white">
                                <img src="${data.image}" class="w-full h-full object-cover">
                            </div>
                        </div>

                        <div class="mt-4 flex justify-between items-start">
                            <div>
                                <h3 class="text-base font-medium text-gray-900 leading-tight">${data.title}</h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span class="text-xs text-gray-500">${data.date}</span>
                                    <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                                    <div class="flex items-center gap-1">
                                        <iconify-icon icon="solar:tag-linear" class="text-gray-400" width="10"></iconify-icon>
                                        <span class="text-xs text-gray-500">${data.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Data Safe Badge -->
                        <div class="mt-3 flex items-center gap-2">
                             <div class="bg-indigo-50 px-2 py-0.5 rounded-full flex items-center gap-1 border border-indigo-100">
                                <iconify-icon icon="solar:shield-check-linear" class="text-indigo-600" width="12"></iconify-icon>
                                <span class="text-[10px] font-medium text-indigo-700 italic">Data Safe</span>
                            </div>
                            <div class="bg-orange-50 px-2 py-0.5 rounded-full flex items-center gap-1 border border-orange-100">
                                <iconify-icon icon="solar:clock-circle-linear" class="text-orange-600" width="12"></iconify-icon>
                                <span class="text-[10px] font-medium text-orange-700">Exp: 24h</span>
                            </div>
                        </div>

                        <!-- Footer Stats -->
                        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                            <div class="flex items-center -space-x-2">
                                <div class="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-gray-500 font-bold shadow-sm">+3</div>
                                <div class="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center shadow-sm">
                                    <iconify-icon icon="solar:user-linear" width="12" class="text-gray-500"></iconify-icon>
                                </div>
                            </div>
                            <div class="flex items-center gap-1.5 text-gray-600">
                                <iconify-icon icon="solar:qr-code-linear" width="16"></iconify-icon>
                                <span class="text-xs font-semibold">${boardCount} Boards</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            container.insertAdjacentHTML('afterbegin', cardHTML);
            updateCounts();
        }

        function deleteRunningCard(id) {
            document.getElementById(id).remove();
            const container = document.getElementById('col-running');
            if (container.children.length <= 1) { // 1 because of empty state div logic check
                 // Check visually if only empty state remains
                 const visibleCards = Array.from(container.children).filter(c => c.id !== 'running-empty-state');
                 if(visibleCards.length === 0) {
                     document.getElementById('running-empty-state').style.display = 'flex';
                 }
            }
            updateCounts();
        }

        // --- Utilities ---

        function updateCounts() {
            document.getElementById('count-todo').innerText = document.getElementById('col-todo').children.length;
            
            const staging = document.getElementById('staging-zone');
            if(staging) {
                 const count = Array.from(staging.children).filter(c => c.id !== 'staging-placeholder').length;
                 document.getElementById('staging-count').innerText = count;
            }

            const running = document.getElementById('col-running');
            const runningCount = Array.from(running.children).filter(c => c.id !== 'running-empty-state').length;
            document.getElementById('count-running').innerText = runningCount;
        }

        function createNewBoard() {
            const id = Math.floor(1000 + Math.random() * 9000);
            const cardId = 'card-' + Date.now();
            const col = document.getElementById('col-todo');
            
            const cardHtml = `
                <div class="bg-white p-5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-grab relative animate-fade-in" draggable="true" ondragstart="drag(event)" id="${cardId}">
                    <div class="flex justify-between items-start mb-3">
                        <span class="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wide uppercase">New</span>
                        <div class="relative">
                            <button class="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-50 transition-colors" onclick="toggleMenu('menu-${cardId}')">
                                <iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
                            </button>
                            <div id="menu-${cardId}" class="absolute right-0 top-6 w-32 bg-white rounded-xl shadow-xl border border-gray-100 z-50 hidden flex-col py-1 overflow-hidden">
                                <button class="flex items-center gap-2 px-3 py-2 text-xs text-red-500 hover:bg-red-50 w-full text-left" onclick="document.getElementById('${cardId}').remove(); updateCounts();"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Delete</button>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1 tracking-tight">Board #${id}</h3>
                    <p class="text-xs text-gray-500 leading-relaxed mb-4">Just created.</p>
                    <div class="flex justify-between items-end pt-2 border-t border-gray-50">
                        <div class="text-[10px] text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md">ID: ${id}</div>
                        <div class="w-14 h-14 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Board${id}" alt="QR" class="w-full h-full object-contain opacity-80">
                        </div>
                    </div>
                </div>
            `;
            col.insertAdjacentHTML('afterbegin', cardHtml);
            updateCounts();
        }

        function toggleMenu(id) {
            const menu = document.getElementById(id);
            // Hide all other menus
            document.querySelectorAll('[id$="-menu"], [id^="menu-"]').forEach(el => {
                if (el.id !== id) {
                    el.classList.add('hidden');
                    el.classList.remove('flex');
                }
            });

            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }

        // Close menus on click outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('button')) {
                document.querySelectorAll('[id$="-menu"], [id^="menu-"]').forEach(el => {
                    el.classList.add('hidden');
                    el.classList.remove('flex');
                });
            }
        });

        // Init
        updateCounts();

    
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
      

<aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 gap-8 hidden sm:flex shrink-0 z-20">
<div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-semibold text-xl tracking-tighter">
            M
        </div>
<nav className="flex flex-col gap-6 w-full items-center">
<button className="p-3 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-3 text-indigo-600 bg-indigo-50 rounded-xl transition-colors relative">
<iconify-icon icon="solar:qr-code-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-3 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-3 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>
</aside>

<main className="flex-1 flex flex-col h-full relative">

<header className="h-20 border-b border-gray-200 bg-white px-8 flex items-center justify-between shrink-0">
<div className="flex flex-col">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Magic QR Boards</h1>
<p className="text-xs text-gray-500 mt-0.5 font-medium">Manage and assign boards to events</p>
</div>
<div className="flex items-center gap-4">
<div className="relative group hidden md:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-100 w-64 text-gray-600 placeholder:text-gray-400 transition-all" placeholder="Search boards..." type="text"/>
</div>
<button className="flex items-center gap-2 bg-[#0D062D] hover:bg-gray-800 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg shadow-indigo-900/10" onclick="createNewBoard()">
<iconify-icon icon="solar:add-square-linear" width="20"></iconify-icon>
<span>Create Board</span>
</button>
</div>
</header>

<div className="flex-1 overflow-x-auto overflow-y-hidden p-8">
<div className="flex h-full gap-8 min-w-max">

<div className="w-[340px] flex flex-col h-full bg-[#F5F5F7] rounded-3xl">
<div className="flex items-center justify-between mb-5 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-600"></div>
<h2 className="text-base font-semibold text-[#0D062D]">Available Boards</h2>
<span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-md text-[10px] font-bold" id="count-todo">0</span>
</div>
</div>
<div className="h-[3px] w-full bg-indigo-600 mb-6 rounded-full"></div>
<div className="flex-1 overflow-y-auto hide-scrollbar pb-10 space-y-4 kanban-col min-h-[100px]" id="col-todo" ondragover="allowDrop(event)" ondrop="drop(event)">

<div className="bg-white p-5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-grab relative" draggable="true" id="card-init-1" ondragstart="drag(event)">
<div className="flex justify-between items-start mb-3">
<span className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wide uppercase">Idle</span>
<div className="relative">
<button className="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-50 transition-colors" onclick="toggleMenu('menu-init-1')">
<iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">Board #8821</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-4">Unassigned. Drag to configure.</p>
<div className="flex justify-between items-end pt-2 border-t border-gray-50">
<div className="text-[10px] text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md">ID: 8821</div>
<div className="w-14 h-14 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
<img alt="QR" className="w-full h-full object-contain opacity-80" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=Board8821"/>
</div>
</div>
</div>
</div>
</div>

<div className="w-[400px] flex flex-col h-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

<div className="p-5 border-b border-gray-100 bg-white z-10">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold text-[#0D062D]">Configure Event</h2>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors" onclick="resetConfiguration()">Cancel</button>
<button className="px-3 py-1.5 rounded-lg bg-[#0D062D] text-white text-xs font-medium hover:bg-gray-800 transition-colors shadow-md shadow-gray-200" onclick="saveConnection()">Save</button>
</div>
</div>
<div className="relative w-full group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" icon="solar:calendar-add-linear" width="18"></iconify-icon>
<select className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-100 text-gray-700 cursor-pointer hover:border-gray-300 transition-colors appearance-none" id="event-selector" onchange="handleEventSelection()">
<option disabled="" selected="" value="">Select an event to attach...</option>
<option value="wedding">Sai + Siri Wedding</option>
<option value="conference">Tech Summit 2025</option>
<option value="gala">Charity Gala Night</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar bg-gray-50/50 relative">

<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-100 transition-opacity duration-300" id="config-empty-state">
<div className="w-16 h-16 bg-white rounded-2xl border border-dashed border-gray-300 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-gray-300" icon="solar:calendar-search-linear" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium text-gray-900">No Event Selected</p>
<p className="text-xs text-gray-500 mt-1 max-w-[200px]">Select an event from the dropdown above to start attaching QR boards.</p>
</div>

<div className="hidden flex-col p-5 h-full" id="config-active-state">

<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-5 animate-fade-in">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-xl bg-gray-100 shrink-0 overflow-hidden">
<img alt="Event" className="w-full h-full object-cover" id="event-img-preview" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight" id="event-title-preview">Event Name</h3>
<div className="flex items-center gap-1.5 mt-1">
<iconify-icon className="text-gray-400" icon="solar:tag-linear" width="12"></iconify-icon>
<span className="text-xs text-gray-500" id="event-cat-preview">Category</span>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-gray-50 grid grid-cols-2 gap-3">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider">Start Date</label>
<div className="relative">
<input className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg px-2 py-2 outline-none focus:border-indigo-300 transition-colors" type="date"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider">End Date</label>
<div className="relative">
<input className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg px-2 py-2 outline-none focus:border-indigo-300 transition-colors" type="date"/>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="h-px bg-gray-200 flex-1"></div>
<span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Attach Boards</span>
<div className="h-px bg-gray-200 flex-1"></div>
</div>

<div className="flex-1 rounded-2xl border-2 border-dashed border-gray-200 bg-white/50 transition-all duration-200 flex flex-col gap-3 p-3 overflow-y-auto min-h-[150px]" id="staging-zone" ondragover="allowDrop(event)" ondrop="dropInStaging(event)">
<div className="h-full flex flex-col items-center justify-center text-gray-400 pointer-events-none py-8" id="staging-placeholder">
<iconify-icon className="mb-2 opacity-50" icon="solar:arrow-to-down-left-linear" width="24"></iconify-icon>
<span className="text-xs">Drag QR Boards here</span>
</div>
</div>
<div className="mt-3 flex justify-between items-center px-1">
<span className="text-xs text-gray-500 font-medium">Boards attached: <span className="text-indigo-600 font-bold" id="staging-count">0</span></span>
</div>
</div>
</div>
</div>

<div className="w-[340px] flex flex-col h-full rounded-3xl">
<div className="flex items-center justify-between mb-5 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<h2 className="text-base font-semibold text-[#0D062D]">Listing Events</h2>
<span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-md text-[10px] font-bold" id="count-running">0</span>
</div>
</div>
<div className="h-[3px] w-full bg-emerald-500 mb-6 rounded-full"></div>
<div className="flex-1 overflow-y-auto hide-scrollbar pb-10 space-y-4" id="col-running">

<div className="flex flex-col items-center justify-center h-48 text-gray-400 border border-dashed border-gray-200 rounded-2xl bg-white/30" id="running-empty-state">
<iconify-icon className="mb-2 opacity-40" icon="solar:clipboard-list-linear" width="28"></iconify-icon>
<span className="text-xs font-medium">No running connections</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
