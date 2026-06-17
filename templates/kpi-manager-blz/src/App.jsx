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



        // --- Mock Data ---
        let kpis = [
            // Company Source
            { id: 1, title: "$2.5M ARR", category: "Revenue Growth", source: "company", selected: true, isNorthStar: true },
            { id: 2, title: "92% Customer Retention", category: "Customer Success", source: "company", selected: true, isNorthStar: false },
            { id: 3, title: "150 New Customers", category: "Growth", source: "company", selected: false, isNorthStar: false },
            { id: 10, title: "Reduce Churn < 5%", category: "Customer Success", source: "company", selected: false, isNorthStar: false },
            
            // AI Source
            { id: 4, title: "$5M ARR", category: "Revenue Growth", source: "ai", selected: true, isNorthStar: false, explanation: "Based on your growth trajectory of 20% MoM, $5M is an ambitious but achievable target for next year." },
            { id: 5, title: "98% Retention", category: "Customer Success", source: "ai", selected: false, isNorthStar: false, explanation: "High retention correlates strongly with long-term valuation in your sector." },
            { id: 6, title: "40% EBITDA", category: "Profitability", source: "ai", selected: false, isNorthStar: false, explanation: "Optimizing operational costs could yield 40% margin." },
            { id: 7, title: "Employee Happiness > 9", category: "People", source: "ai", selected: true, isNorthStar: false, explanation: "Your recent survey indicated a drop in morale. Focusing here will improve productivity." },
            { id: 8, title: "Global Expansion", category: "Strategy", source: "ai", selected: false, isNorthStar: false, explanation: "Competitors are moving into EU markets. Establishing a presence now secures market share." },
            
            // Industry Source
            { id: 11, title: "CAC Payback < 12 Months", category: "Efficiency", source: "industry", selected: false, isNorthStar: false },
            { id: 12, title: "NPS > 50", category: "Customer Satisfaction", source: "industry", selected: false, isNorthStar: false },
            { id: 13, title: "Gross Margin > 80%", category: "Finance", source: "industry", selected: false, isNorthStar: false },
            { id: 14, title: "LTV:CAC > 3:1", category: "Growth Efficiency", source: "industry", selected: false, isNorthStar: false }
        ];

        let editingId = null;
        let isCreating = false;

        // --- Render Logic ---
        function render() {
            const northStarContainer = document.getElementById('north-star-slot');
            const listContainer = document.getElementById('selected-list-slot');
            const companyGrid = document.getElementById('company-kpis-grid');
            const aiGrid = document.getElementById('ai-kpis-grid');
            const industryGrid = document.getElementById('industry-kpis-grid');
            const customGrid = document.getElementById('custom-kpis-grid');
            const counter = document.getElementById('kpi-counter');

            // Clear previous content
            northStarContainer.innerHTML = '';
            listContainer.innerHTML = '';
            companyGrid.innerHTML = '';
            aiGrid.innerHTML = '';
            industryGrid.innerHTML = '';
            customGrid.innerHTML = '';

            // Filter Selected
            const selected = kpis.filter(k => k.selected);
            const northStar = selected.find(k => k.isNorthStar);
            const others = selected.filter(k => !k.isNorthStar);

            counter.innerText = `${selected.length} / 7`;

            // 1. Render North Star
            if (northStar) {
                northStarContainer.innerHTML = `
                    <div class="group relative bg-[#FFFDF0] border border-[#FBEFBC] rounded-lg p-5 flex flex-col md:flex-row md:items-center md:justify-between transition-all hover:shadow-sm gap-4">
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-1.5">
                                <i data-lucide="star" class="w-4 h-4 fill-yellow-500 text-yellow-500"></i>
                                <h3 class="text-lg font-semibold text-gray-900 tracking-tight">${northStar.title}</h3>
                            </div>
                            <p class="text-xs font-medium text-gray-500 uppercase tracking-wide opacity-80 pl-6">${northStar.category}</p>
                        </div>
                        <div class="flex items-center gap-2 pl-6 md:pl-0">
                             <button onclick="openEditModal(${northStar.id})" class="p-2 text-gray-400 hover:text-gray-700 hover:bg-yellow-100 rounded-md transition-colors" title="Edit">
                                <i data-lucide="pencil" class="w-4 h-4"></i>
                            </button>
                            <button onclick="toggleSelection(${northStar.id})" class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Remove">
                                <i data-lucide="x" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                `;
            } else {
                northStarContainer.innerHTML = `<div class="border border-dashed border-gray-200 rounded-lg p-6 text-center text-sm text-gray-400 bg-gray-50/50 flex flex-col items-center justify-center gap-2">
                    <i data-lucide="star" class="w-5 h-5 text-gray-300"></i>
                    Select a KPI to be your North Star
                </div>`;
            }

            // 2. Render Other Selected
            if (others.length > 0) {
                others.forEach(kpi => {
                    listContainer.innerHTML += `
                        <div class="group bg-white border border-gray-200 rounded-lg p-3.5 flex items-center justify-between hover:border-gray-300 transition-all shadow-sm">
                            <div class="min-w-0">
                                <h4 class="text-sm font-semibold text-gray-900 mb-0.5 truncate">${kpi.title}</h4>
                                <p class="text-xs text-gray-500 truncate">${kpi.category}</p>
                            </div>
                            <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onclick="setNorthStar(${kpi.id})" class="p-1.5 text-gray-400 hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors" title="Make North Star">
                                    <i data-lucide="star" class="w-3.5 h-3.5"></i>
                                </button>
                                <button onclick="openEditModal(${kpi.id})" class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors" title="Edit">
                                    <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                                </button>
                                <button onclick="toggleSelection(${kpi.id})" class="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Remove">
                                    <i data-lucide="x" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                        </div>
                    `;
                });
            } else {
                 listContainer.innerHTML = `<div class="col-span-full p-6 text-center text-sm text-gray-400 bg-gray-50/50 rounded-lg border border-dashed border-gray-200">No other KPIs selected</div>`;
            }

            // 3. Render Grid Cards
            const renderCard = (kpi) => {
                const isSel = kpi.selected;
                const borderClass = isSel 
                    ? 'border-blue-500 ring-1 ring-blue-500 bg-blue-50/10' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md bg-white';
                
                const checkIcon = isSel 
                    ? `<div class="absolute top-3 right-3 text-blue-600 z-10"><i data-lucide="check-circle-2" class="w-5 h-5 fill-blue-50"></i></div>` 
                    : '';
                
                const starIcon = kpi.isNorthStar 
                    ? `<i data-lucide="star" class="w-4 h-4 fill-yellow-400 text-yellow-400 absolute bottom-3 right-3"></i>` 
                    : `<i data-lucide="star" class="w-4 h-4 text-gray-200 absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"></i>`;

                // AI Explanation Button
                let extraAction = '';
                if (kpi.source === 'ai') {
                    extraAction = `
                        <button onclick="toggleExplanation(event, ${kpi.id})" class="absolute top-3 right-3 p-1 rounded-full text-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-colors z-20 ${isSel ? 'mr-7' : ''}" title="Why this KPI?">
                            <i data-lucide="sparkles" class="w-4 h-4"></i>
                        </button>
                        
                        <!-- Explanation Popover -->
                        <div id="explanation-${kpi.id}" class="hidden absolute top-10 left-0 right-0 mx-2 z-30 p-3 bg-white rounded-lg shadow-xl border border-gray-100 text-left animate-in fade-in slide-in-from-top-2 duration-200" onclick="event.stopPropagation()">
                             <div class="flex items-start gap-2 mb-2">
                                <i data-lucide="sparkles" class="w-3.5 h-3.5 text-purple-500 mt-0.5 shrink-0"></i>
                                <p class="text-xs text-gray-600 leading-snug">${kpi.explanation}</p>
                             </div>
                             <button class="w-full mt-1 py-1.5 px-3 bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-colors">
                                <i data-lucide="message-circle" class="w-3 h-3"></i>
                                Ask AI why
                             </button>
                        </div>
                    `;
                }

                // Edit Button (Visible on hover)
                const editBtn = `
                    <button onclick="editFromGrid(event, ${kpi.id})" class="absolute top-3 ${kpi.source === 'ai' ? 'right-9' : 'right-3'} ${isSel ? (kpi.source === 'ai' ? 'mr-7' : 'mr-7') : ''} p-1 text-gray-300 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-all opacity-0 group-hover:opacity-100 z-20" title="Edit">
                        <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                    </button>
                `;

                return `
                    <div onclick="toggleSelection(${kpi.id})" class="group relative cursor-pointer h-28 p-4 rounded-xl border ${borderClass} transition-all duration-200 flex flex-col justify-between">
                        ${checkIcon}
                        ${extraAction}
                        ${editBtn}
                        
                        <div class="pr-8">
                            <h4 class="text-sm font-semibold text-gray-900 tracking-tight leading-snug line-clamp-2">${kpi.title}</h4>
                        </div>
                        
                        <div class="mt-auto">
                            <span class="text-xs font-medium text-gray-500 truncate max-w-[85%] block">${kpi.category}</span>
                            ${starIcon}
                        </div>
                    </div>
                `;
            };

            // Render Grids
            const companyItems = kpis.filter(k => k.source === 'company');
            companyItems.forEach(k => companyGrid.innerHTML += renderCard(k));

            const aiItems = kpis.filter(k => k.source === 'ai');
            aiItems.forEach(k => aiGrid.innerHTML += renderCard(k));

            const industryItems = kpis.filter(k => k.source === 'industry');
            industryItems.forEach(k => industryGrid.innerHTML += renderCard(k));
            
            const customItems = kpis.filter(k => k.source === 'custom');
            customItems.forEach(k => customGrid.innerHTML += renderCard(k));

            // Toggle Visibility of Custom Section
            const customSection = document.getElementById('custom-kpis-grid');
            if(customItems.length > 0) {
                customSection.classList.remove('hidden');
            } else {
                customSection.classList.add('hidden');
            }

            // Re-init Icons
            lucide.createIcons();
        }

        // --- Logic Functions ---

        function toggleSelection(id) {
            const kpi = kpis.find(k => k.id === id);
            if (!kpi) return;

            // Close any open popovers
            document.querySelectorAll('[id^="explanation-"]').forEach(el => el.classList.add('hidden'));

            if (kpi.selected) {
                kpi.selected = false;
                if (kpi.isNorthStar) {
                    kpi.isNorthStar = false;
                    const nextSelected = kpis.find(k => k.selected);
                    if (nextSelected) nextSelected.isNorthStar = true;
                }
            } else {
                const selectedCount = kpis.filter(k => k.selected).length;
                if(selectedCount >= 7) {
                    alert("Maximum 7 KPIs allowed.");
                    return;
                }
                kpi.selected = true;
                if (kpis.filter(k => k.selected).length === 1) {
                    kpi.isNorthStar = true;
                }
            }
            render();
        }

        function setNorthStar(id) {
            kpis.forEach(k => k.isNorthStar = false);
            const kpi = kpis.find(k => k.id === id);
            if(kpi) {
                kpi.isNorthStar = true;
                kpi.selected = true;
            }
            render();
        }

        function toggleExplanation(e, id) {
            e.stopPropagation(); // Prevent card selection
            const el = document.getElementById(`explanation-${id}`);
            
            // Close others
            document.querySelectorAll('[id^="explanation-"]').forEach(item => {
                if(item.id !== `explanation-${id}`) item.classList.add('hidden');
            });

            if(el.classList.contains('hidden')) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
            lucide.createIcons(); // Refresh icons inside popover
        }

        function editFromGrid(e, id) {
            e.stopPropagation();
            openEditModal(id);
        }

        // --- Modal & Edit Logic ---

        const modal = document.getElementById('kpi-modal');
        const modalContent = document.getElementById('modal-content');

        function openCreateModal() {
            editingId = null;
            isCreating = true;
            document.getElementById('modal-title').innerText = "Create Custom KPI";
            document.getElementById('modal-input-title').value = "";
            document.getElementById('modal-input-category').value = "";
            document.getElementById('modal-info-box').classList.add('hidden');
            
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
        }

        function openEditModal(id) {
            const kpi = kpis.find(k => k.id === id);
            if (!kpi) return;

            editingId = id;
            isCreating = false;
            document.getElementById('modal-title').innerText = "Edit KPI";
            document.getElementById('modal-input-title').value = kpi.title;
            document.getElementById('modal-input-category').value = kpi.category;

            const infoBox = document.getElementById('modal-info-box');
            
            // If editing a non-custom KPI, show warning
            if (kpi.source !== 'custom') {
                infoBox.classList.remove('hidden');
                infoBox.classList.add('flex');
            } else {
                infoBox.classList.add('hidden');
                infoBox.classList.remove('flex');
            }

            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function saveKPI() {
            const title = document.getElementById('modal-input-title').value;
            const category = document.getElementById('modal-input-category').value;

            if (!title) return;

            if (isCreating) {
                const newId = Math.max(...kpis.map(k => k.id)) + 1;
                kpis.push({
                    id: newId,
                    title: title,
                    category: category || 'Custom',
                    source: 'custom',
                    selected: true,
                    isNorthStar: kpis.filter(k => k.selected).length === 0
                });
            } else {
                const index = kpis.findIndex(k => k.id === editingId);
                const originalKPI = kpis[index];

                if (originalKPI.source === 'custom') {
                    // Update in place
                    originalKPI.title = title;
                    originalKPI.category = category;
                } else {
                    // Logic: Clone to custom
                    const wasSelected = originalKPI.selected;
                    const wasNorthStar = originalKPI.isNorthStar;
                    
                    // Create new custom KPI
                    const newId = Math.max(...kpis.map(k => k.id)) + 1;
                    const newKPI = {
                        id: newId,
                        title: title,
                        category: category,
                        source: 'custom',
                        selected: false, // Default false, decide below
                        isNorthStar: false
                    };

                    if (wasSelected) {
                        // If original was selected: Deselect original, Select new one
                        originalKPI.selected = false;
                        originalKPI.isNorthStar = false;
                        
                        newKPI.selected = true;
                        newKPI.isNorthStar = wasNorthStar;
                    } else {
                        // If original was NOT selected: keep it not selected, create new one but don't select it
                        // (User prompt says: "if original not selected, we don't select new one")
                        newKPI.selected = false;
                    }

                    kpis.push(newKPI);
                }
            }

            render();
            closeModal();
        }

        // Close popovers on click outside
        document.addEventListener('click', (e) => {
            if(!e.target.closest('[id^="explanation-"]') && !e.target.closest('button[onclick^="toggleExplanation"]')) {
                document.querySelectorAll('[id^="explanation-"]').forEach(el => el.classList.add('hidden'));
            }
        });

        // Initial Render
        document.addEventListener('DOMContentLoaded', () => {
            render();
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
      

<header className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Company KPIs</h1>
<p className="text-gray-500 mt-2 text-base font-normal">Establish and track your company-wide Key Performance Indicators</p>
</div>
<div className="bg-white border border-gray-200 shadow-sm rounded-lg px-3 py-2 flex items-center gap-3">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
<span className="text-sm text-gray-600">Strategy Period:</span>
<select className="text-sm font-medium text-gray-900 bg-transparent outline-none cursor-pointer">
<option>12 Months</option>
<option>6 Months</option>
<option>3 Months</option>
</select>
</div>
</header>
<main className="max-w-7xl mx-auto px-6 space-y-12">

<section className="bg-white border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
<div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-white">
<h2 className="text-sm font-semibold text-gray-900">Selected KPIs</h2>
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md" id="kpi-counter">0 / 7</span>
</div>
<div className="p-6 bg-white space-y-6">

<div id="north-star-container">
<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">North Star</p>
<div className="min-h-[80px]" id="north-star-slot">

</div>
</div>

<div id="selected-list-container">
<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Other KPIs</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" id="selected-list-slot">

</div>
</div>
</div>
</section>

<div className="space-y-12">

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Company KPIs</h3>
<span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full border border-gray-300/50">Doc</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="company-kpis-grid">

</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Suggestions</h3>
<span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full border border-purple-200">AI</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="ai-kpis-grid">

</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Popular In Industry</h3>
<span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full border border-blue-200">SaaS</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="industry-kpis-grid">

</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Custom KPIs</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 hidden" id="custom-kpis-grid">

</div>

<button className="w-full py-4 border border-dashed border-gray-300 rounded-xl text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-400 hover:bg-white transition-all flex items-center justify-center gap-2 group" onclick="openCreateModal()">
<span className="p-1 rounded-md bg-gray-100 group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
                    Add Custom KPI
                </button>
</section>
</div>
</main>

<div className="fixed inset-0 z-50 hidden bg-gray-900/40 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300" id="kpi-modal">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 transform scale-95 transition-transform duration-300" id="modal-content">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-gray-900" id="modal-title">Edit KPI</h3>
<button className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-md" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="space-y-5">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">KPI Name</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 text-gray-900" id="modal-input-title" placeholder="e.g. $10M ARR" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Category / Description</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 text-gray-900" id="modal-input-category" placeholder="e.g. Revenue Growth" type="text"/>
</div>
<div className="bg-blue-50 p-4 rounded-lg flex gap-3 items-start hidden" id="modal-info-box">
<i className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" data-lucide="info"></i>
<div className="space-y-1">
<p className="text-sm font-medium text-blue-900">Creating Custom KPI</p>
<p className="text-xs text-blue-700 leading-relaxed">
                            You are editing a generated KPI. Saving changes will create a new <strong>Custom KPI</strong> and the original item will be deselected.
                        </p>
</div>
</div>
</div>
<div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-100">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors" onclick="closeModal()">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" onclick="saveKPI()">Save Changes</button>
</div>
</div>
</div>


    </>
  );
}
