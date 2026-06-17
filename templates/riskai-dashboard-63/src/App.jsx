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



        const app = {
            state: {
                activeTab: 'sources', // sources | reports
                centerView: 'chat', // chat | report
                reports: []
            },

            // --- NAVIGATION ---
            
            activateTab(tabName) {
                this.state.activeTab = tabName;
                
                // UI Updates
                const sourcesTab = document.getElementById('tab-sources');
                const reportsTab = document.getElementById('tab-reports');
                const sourcesContent = document.getElementById('content-sources');
                const reportsContent = document.getElementById('content-reports');
                const badge = document.getElementById('report-badge');

                if (tabName === 'sources') {
                    // Styles for Sources Active
                    sourcesTab.classList.add('text-indigo-600', 'border-indigo-600');
                    sourcesTab.classList.remove('text-slate-500', 'border-transparent');
                    reportsTab.classList.add('text-slate-500', 'border-transparent');
                    reportsTab.classList.remove('text-indigo-600', 'border-indigo-600');
                    
                    sourcesContent.classList.remove('hidden');
                    reportsContent.classList.add('hidden');
                } else {
                    // Styles for Reports Active
                    reportsTab.classList.add('text-indigo-600', 'border-indigo-600');
                    reportsTab.classList.remove('text-slate-500', 'border-transparent');
                    sourcesTab.classList.add('text-slate-500', 'border-transparent');
                    sourcesTab.classList.remove('text-indigo-600', 'border-indigo-600');
                    
                    reportsContent.classList.remove('hidden');
                    sourcesContent.classList.add('hidden');
                    badge.classList.add('hidden'); // Clear badge
                }
            },

            highlightSource(id) {
                this.activateTab('sources');
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    el.classList.add('source-highlight');
                    // Add subtle pulse
                    el.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        el.classList.remove('source-highlight');
                        el.style.transform = 'scale(1)';
                    }, 1500);
                }
            },

            // --- REPORT GENERATION ---

            generateReport() {
                const btnContainer = document.getElementById('generate-btn-container');
                const btn = btnContainer.querySelector('button');
                
                // 1. Loading State
                btn.innerHTML = `<iconify-icon icon="solar:restart-circle-linear" class="animate-spin" width="16"></iconify-icon> Analyzing Sources...`;
                btn.classList.add('cursor-wait', 'opacity-80');
                
                // Simulate AI delay
                setTimeout(() => {
                    // 2. Create Report Data
                    const newReport = {
                        id: 'rep-' + Date.now(),
                        title: 'Risk Assessment v' + (this.state.reports.length + 1),
                        date: 'Just now'
                    };
                    this.state.reports.unshift(newReport);
                    
                    // 3. Update Report List UI
                    this.renderReportList();
                    
                    // 4. Switch View
                    document.getElementById('view-chat').classList.add('hidden');
                    document.getElementById('view-report').classList.remove('hidden');
                    document.getElementById('view-report').classList.add('animate-fade-in');
                    
                    // 5. Notify in Right Panel
                    document.getElementById('report-badge').classList.remove('hidden');
                    
                    // Reset Button
                    btn.innerHTML = `<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon> Generate Full Risk Report`;
                    btn.classList.remove('cursor-wait', 'opacity-80');
                    
                }, 1500);
            },

            resetView() {
                document.getElementById('view-report').classList.add('hidden');
                document.getElementById('view-chat').classList.remove('hidden');
            },

            renderReportList() {
                const container = document.getElementById('report-list');
                const emptyState = document.getElementById('empty-reports');
                
                if (emptyState) emptyState.classList.add('hidden');
                
                // Clear current list except empty state
                Array.from(container.children).forEach(child => {
                    if (child.id !== 'empty-reports') child.remove();
                });

                this.state.reports.forEach(rep => {
                    const html = `
                        <div class="group bg-white rounded-xl p-3 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer animate-fade-in" onclick="app.openReport('${rep.id}')">
                            <div class="flex items-start gap-3">
                                <div class="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-600 group-hover:scale-105 transition-transform">
                                    <iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between">
                                        <h5 class="text-sm font-medium text-slate-800 truncate">${rep.title}</h5>
                                        <iconify-icon icon="solar:alt-arrow-right-linear" width="14" class="text-slate-300 group-hover:text-indigo-400 transition-colors"></iconify-icon>
                                    </div>
                                    <div class="flex items-center gap-2 mt-1">
                                        <span class="text-xs text-slate-500">PDF Report</span>
                                        <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                                        <span class="text-[10px] text-slate-400">${rep.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    container.insertAdjacentHTML('beforeend', html);
                });
            },

            openReport(id) {
                // Switch to report view (simulated for prototype)
                document.getElementById('view-chat').classList.add('hidden');
                document.getElementById('view-report').classList.remove('hidden');
            },

            // --- MODALS ---

            openSourceModal(title, type, impact) {
                const overlay = document.getElementById('modal-overlay');
                const modal = document.getElementById('modal-source-detail');
                
                // Populate Data
                document.getElementById('detail-title').innerText = title;
                document.getElementById('detail-type').innerText = type;
                document.getElementById('detail-impact').innerText = impact === 'critical' ? 'critical safety risks' : 'environmental factors';

                // Show
                overlay.classList.remove('hidden');
                // Trigger reflow
                void overlay.offsetWidth;
                overlay.classList.remove('opacity-0');
                
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('scale-95');
                    modal.classList.add('scale-100');
                }, 10);
            },

            openAddSourceModal() {
                const overlay = document.getElementById('modal-overlay');
                const modal = document.getElementById('modal-add-source');
                
                overlay.classList.remove('hidden');
                void overlay.offsetWidth;
                overlay.classList.remove('opacity-0');
                
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('scale-95');
                    modal.classList.add('scale-100');
                }, 10);
                
                // Focus input
                setTimeout(() => document.getElementById('new-source-input').focus(), 100);
            },

            closeModals() {
                const overlay = document.getElementById('modal-overlay');
                const modals = overlay.querySelectorAll('div[id^="modal-"]');
                
                overlay.classList.add('opacity-0');
                modals.forEach(m => {
                    m.classList.remove('scale-100');
                    m.classList.add('scale-95');
                });
                
                setTimeout(() => {
                    overlay.classList.add('hidden');
                    modals.forEach(m => m.classList.add('hidden'));
                }, 300);
            },

            addNewSource() {
                const input = document.getElementById('new-source-input');
                const val = input.value || 'New-Site-Data.xlsx';
                
                this.closeModals();
                
                // Add to List with animation
                const container = document.getElementById('source-list-custom');
                const newId = 'source-' + Date.now();
                
                const html = `
                    <div id="${newId}" class="group bg-white rounded-xl p-3 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer source-highlight" onclick="app.openSourceModal('${val}', 'User Upload', 'low')">
                        <div class="flex items-start gap-3">
                            <div class="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
                                <iconify-icon icon="solar:file-check-linear" width="18"></iconify-icon>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between">
                                    <h5 class="text-sm font-medium text-slate-800 truncate">${val}</h5>
                                    <iconify-icon icon="solar:alt-arrow-right-linear" width="14" class="text-slate-300 group-hover:text-indigo-400 transition-colors"></iconify-icon>
                                </div>
                                <div class="flex items-center gap-2 mt-1">
                                    <span class="text-xs text-slate-500">Processing...</span>
                                    <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                                    <span class="text-[10px] text-indigo-600 font-medium bg-indigo-50 px-1 rounded">New</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                container.insertAdjacentHTML('afterbegin', html);
                
                // Clear Input
                input.value = '';
                
                // Simulate "Processed" state change
                setTimeout(() => {
                    const el = document.getElementById(newId);
                    if(el) {
                        el.classList.remove('source-highlight');
                        el.querySelector('span.text-xs').innerText = 'Ready';
                    }
                }, 2000);
            }
        };

        // Close modal on outside click
        document.getElementById('modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'modal-overlay') app.closeModals();
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
      

<aside className="w-64 h-full border-r border-slate-100 flex flex-col bg-slate-50/50 hidden md:flex shrink-0 z-20">

<div className="h-14 flex items-center px-4 border-b border-slate-100 bg-white">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onclick="window.location.reload()">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight">RiskAI</span>
</div>
</div>

<div className="p-3">
<div className="relative group">
<div className="absolute left-2.5 top-2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="w-full bg-white border border-slate-200 rounded-lg py-1.5 pl-9 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-slate-400 transition-shadow shadow-sm" placeholder="Search chats..." type="text"/>
<span className="absolute right-2.5 top-2 text-[10px] border border-slate-200 rounded px-1 text-slate-400">⌘K</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-2 space-y-6 pt-2">
<div>
<h3 className="px-2 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
<iconify-icon icon="solar:widget-2-linear" width="12"></iconify-icon> Agents
                </h3>
<ul className="space-y-0.5">
<li><button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-md transition-colors text-left"><iconify-icon className="text-slate-400" icon="solar:bolt-linear" width="16"></iconify-icon> Agririsk AI</button></li>
<li><button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-md transition-colors text-left"><iconify-icon className="text-slate-400" icon="solar:thermometer-linear" width="16"></iconify-icon> Heat AI</button></li>
</ul>
</div>
<div>
<div className="flex items-center justify-between px-2 mb-2 group cursor-pointer">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:folder-linear" width="12"></iconify-icon> Projects
                    </h3>
<iconify-icon className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:add-circle-linear" width="12"></iconify-icon>
</div>
<ul className="space-y-0.5">
<li>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm bg-indigo-50 text-indigo-900 font-medium rounded-md text-left" onclick="app.resetView()">
<iconify-icon className="text-indigo-500" icon="solar:folder-open-linear" width="16"></iconify-icon>
                            Mission District Analysis
                        </button>
<ul className="ml-4 mt-1 border-l border-slate-200 pl-2 space-y-1">
<li><button className="w-full flex items-center gap-2 px-2 py-1 text-sm text-slate-500 hover:text-slate-900 text-left"><iconify-icon icon="solar:chat-line-linear" width="14"></iconify-icon> Initial Scope</button></li>
<li><button className="w-full flex items-center gap-2 px-2 py-1 text-sm text-slate-500 hover:text-slate-900 text-left"><iconify-icon icon="solar:document-text-linear" width="14"></iconify-icon> Risk Report v1</button></li>
</ul>
</li>
<li><button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-md transition-colors mt-1 text-left"><iconify-icon className="text-slate-400" icon="solar:folder-linear" width="16"></iconify-icon> Coastal Zone A</button></li>
</ul>
</div>
</nav>

<div className="p-3 border-t border-slate-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-slate-100 rounded-lg transition-colors text-left group">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full bg-slate-200 border border-slate-200" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arbin"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Arbin Paudel</p>
<p className="text-xs text-slate-500 truncate">Pro Plan</p>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:alt-arrow-up-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">

<header className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-white shrink-0 z-10">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="hover:text-slate-900 cursor-pointer transition-colors">Projects</span>
<span className="text-slate-300">/</span>
<span className="font-medium text-slate-900">Mission District Analysis</span>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-600 relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></button>
</div>
</header>

<div className="flex-1 flex flex-col h-full relative" id="view-chat">
<div className="flex-1 overflow-y-auto p-6 space-y-8 relative scroll-smooth" id="chat-content">

<div className="flex gap-4 max-w-3xl animate-fade-in">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-200">
<iconify-icon className="text-white" icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="font-medium text-sm">RiskAI</span>
<span className="text-xs text-slate-400">10:23 AM</span>
</div>
<div className="bg-slate-50 p-3.5 rounded-lg rounded-tl-none border border-slate-100 text-sm leading-relaxed text-slate-700 shadow-sm">
                            Hello Arbin, I'm ready to assist. I have loaded the Mission District project context, including recent seismic data and local zone maps.
                        </div>
</div>
</div>

<div className="flex gap-4 max-w-3xl ml-auto justify-end animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="space-y-1 text-right">
<div className="flex items-center gap-2 justify-end">
<span className="text-xs text-slate-400">10:24 AM</span>
<span className="font-medium text-sm">You</span>
</div>
<div className="bg-slate-900 text-white p-3.5 rounded-lg rounded-tr-none text-sm leading-relaxed shadow-md">
                            Assess the liquefaction and flood risk for 2401 Utah Street. Please include historical data from the last 20 years.
                        </div>
</div>
<img className="w-8 h-8 rounded-full border border-slate-100 shadow-sm shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arbin"/>
</div>

<div className="flex gap-4 max-w-4xl animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-200">
<iconify-icon className="text-white" icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</div>
<div className="space-y-4 w-full">
<div className="flex items-center gap-2">
<span className="font-medium text-sm">RiskAI</span>
<span className="text-xs text-slate-400">10:25 AM</span>
</div>

<div className="bg-slate-50 p-4 rounded-lg rounded-tl-none border border-slate-100 text-sm leading-relaxed text-slate-700 shadow-sm">
<p>I've analyzed 2401 Utah Street. The property is in a <strong className="font-semibold text-slate-900">high liquefaction susceptibility zone</strong> due to artificial fill over Mission Creek. Flood risk is moderate (Zone X).</p>
<div className="flex gap-2 mt-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-white border border-slate-200 text-slate-600 shadow-sm">FEMA Zone X</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-white border border-slate-200 text-slate-600 shadow-sm">20y History</span>
<button className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-white border border-slate-200 text-indigo-600 hover:bg-indigo-50 cursor-pointer shadow-sm transition-colors" onclick="app.activateTab('sources')">
                                    View 3 Sources
                                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="bg-white rounded-xl border border-slate-200 p-1 h-40 shadow-sm overflow-hidden relative group cursor-pointer hover:border-indigo-300 transition-colors" onclick="app.highlightSource('source-1')">
<span className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-medium border border-slate-100 shadow-sm text-slate-600 flex items-center gap-1">
<iconify-icon icon="solar:map-linear" width="10"></iconify-icon> Map View
                                </span>
<div className="w-full h-full bg-slate-50 rounded-lg relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="w-full h-px bg-slate-300 absolute top-1/2"></div>
<div className="h-full w-px bg-slate-300 absolute left-1/3"></div>
<div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-md z-10 relative animate-pulse-ring"></div>
</div>
</div>

<button className="bg-red-50/50 rounded-xl border border-red-100 p-4 h-40 flex flex-col justify-between items-center text-center shadow-sm relative overflow-hidden hover:bg-red-50 hover:border-red-200 transition-all group text-left" onclick="app.highlightSource('source-2')">
<span className="absolute top-2 left-2 px-2 py-0.5 bg-white/80 rounded text-[10px] font-semibold text-red-600 border border-red-100">Liquefaction</span>
<div className="flex-1 flex flex-col items-center justify-center pt-2">
<iconify-icon className="text-red-500 mb-2 group-hover:scale-110 transition-transform" icon="solar:water-waves-linear" width="32"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900">High</span>
<span className="text-xs text-red-600/80 mt-1">Susceptibility</span>
</div>
<div className="w-full mt-2 h-1 bg-red-200 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-red-500 rounded-full"></div>
</div>
</button>

<button className="bg-blue-50/50 rounded-xl border border-blue-100 p-4 h-40 flex flex-col justify-between items-center text-center shadow-sm relative overflow-hidden hover:bg-blue-50 hover:border-blue-200 transition-all group text-left" onclick="app.highlightSource('source-3')">
<span className="absolute top-2 left-2 px-2 py-0.5 bg-white/80 rounded text-[10px] font-semibold text-blue-600 border border-blue-100">Flood Zone</span>
<div className="flex-1 flex flex-col items-center justify-center pt-2">
<iconify-icon className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" icon="solar:drop-linear" width="32"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900">Moderate</span>
<span className="text-xs text-blue-600/80 mt-1">Zone X (500yr)</span>
</div>
<div className="w-full mt-2 h-1 bg-blue-200 rounded-full overflow-hidden">
<div className="w-[35%] h-full bg-blue-500 rounded-full"></div>
</div>
</button>
</div>

<div className="flex justify-center pt-2" id="generate-btn-container">
<button className="group flex items-center gap-2 px-4 py-2 bg-white border border-indigo-100 text-indigo-600 text-sm font-medium rounded-full shadow-sm shadow-indigo-50 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-indigo-200 transition-all transform active:scale-95" onclick="app.generateReport()">
<iconify-icon className="group-hover:animate-pulse" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
                                Generate Full Risk Report
                            </button>
</div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-slate-100 shrink-0">
<div className="max-w-4xl mx-auto relative">
<textarea className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-24 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-slate-300 resize-none shadow-sm transition-shadow" placeholder="Ask follow-up questions or request changes..." rows="1"></textarea>
<div className="absolute right-2 bottom-2 flex items-center gap-1">
<button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"><iconify-icon icon="solar:microphone-linear" width="18"></iconify-icon></button>
<button className="p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm"><iconify-icon icon="solar:arrow-up-linear" width="18"></iconify-icon></button>
</div>
</div>
<p className="text-center text-[10px] text-slate-300 mt-2">AI analysis based on provided data sources. Verify before critical decisions.</p>
</div>
</div>

<div className="flex-1 flex flex-col h-full hidden bg-slate-50/50" id="view-report">
<div className="h-12 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0">
<div className="flex items-center gap-2">
<button className="text-slate-500 hover:text-slate-800 flex items-center gap-1 text-sm font-medium transition-colors" onclick="app.resetView()">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> Back to Chat
                    </button>
<div className="h-4 w-px bg-slate-200 mx-2"></div>
<span className="text-sm font-semibold text-slate-900">2401 Utah St Risk Assessment</span>
<span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-medium border border-green-100">Draft</span>
</div>
<div className="flex items-center gap-2">
<button className="text-slate-500 hover:text-indigo-600 p-2"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
<button className="text-slate-500 hover:text-indigo-600 p-2"><iconify-icon icon="solar:download-linear" width="18"></iconify-icon></button>
<button className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors">Share</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-8 flex justify-center">
<div className="w-full max-w-3xl bg-white shadow-sm border border-slate-200 rounded-xl min-h-[800px] p-12 animate-fade-in relative">

<div className="flex justify-between items-start mb-8">
<div>
<h1 className="text-2xl font-bold text-slate-900 tracking-tight">Property Risk Assessment</h1>
<p className="text-slate-500 text-sm mt-1">2401 Utah Street, San Francisco, CA</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-400">Generated on</p>
<p className="text-sm font-medium text-slate-700">Oct 24, 2025</p>
</div>
</div>
<div className="h-px bg-slate-100 w-full mb-8"></div>
<div className="space-y-6">
<section>
<h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Executive Summary</h2>
<p className="text-sm text-slate-600 leading-relaxed">
                                The subject property is located within a <span className="bg-red-50 text-red-700 px-1 rounded">High Liquefaction Potential</span> zone identified by the California Geological Survey. The site is situated on artificial fill over the historical Mission Creek bed, amplifying seismic shaking risks. Flood risk remains moderate (Zone X) per FEMA charts, though localized pooling during storm events is noted in municipal records.
                            </p>
</section>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg border border-slate-100 bg-slate-50">
<h3 className="text-xs font-medium text-slate-500 mb-1">Liquefaction Score</h3>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-red-600">8.5</span>
<span className="text-xs text-slate-400 mb-1">/ 10</span>
</div>
</div>
<div className="p-4 rounded-lg border border-slate-100 bg-slate-50">
<h3 className="text-xs font-medium text-slate-500 mb-1">Flood Score</h3>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-blue-600">3.2</span>
<span className="text-xs text-slate-400 mb-1">/ 10</span>
</div>
</div>
</div>
<section>
<h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Recommended Mitigation</h2>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Geotechnical soil densification prior to any new structural additions.</span>
</li>
<li className="flex gap-2">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Installation of automatic gas shut-off valves (seismic actuation).</span>
</li>
</ul>
</section>
</div>
</div>
</div>
</div>
</main>

<aside className="w-[22rem] bg-slate-50 border-l border-slate-200 flex flex-col h-full shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.01)] z-20 shrink-0 transition-all duration-300 transform translate-x-0" id="right-panel">

<div className="px-5 pt-5 pb-0 bg-slate-50 border-b border-slate-200 shrink-0">
<div className="flex gap-6 relative">
<button className="pb-3 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 transition-colors relative group w-1/2 text-center" id="tab-sources" onclick="app.activateTab('sources')">
                    Sources
                </button>
<button className="pb-3 text-sm font-medium text-slate-500 border-b-2 border-transparent hover:text-slate-700 hover:border-slate-200 transition-colors w-1/2 text-center" id="tab-reports" onclick="app.activateTab('reports')">
                    Reports
                    <span className="hidden absolute top-0 right-4 w-2 h-2 bg-red-500 rounded-full" id="report-badge"></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 relative no-scrollbar">

<div className="space-y-6 animate-fade-in" id="content-sources">

<section>
<div className="flex items-center justify-between mb-3 px-1">
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">System Intelligence</h4>
<span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">3 Active</span>
</div>
<div className="space-y-3" id="source-list-system">

<div className="group bg-white rounded-xl p-3 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer relative overflow-hidden" id="source-1" onclick="app.openSourceModal('USGS Sensor Net', 'Live API', 'high')">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:satellite-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h5 className="text-sm font-medium text-slate-800 truncate">USGS Sensor Net</h5>
<iconify-icon className="text-slate-300 group-hover:text-indigo-400 transition-colors" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-500">Live API Stream</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-1 rounded">Active</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl p-3 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer" id="source-2" onclick="app.openSourceModal('CA Geo Survey 2024', 'Database', 'critical')">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:database-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h5 className="text-sm font-medium text-slate-800 truncate">CA Geo Survey 2024</h5>
<iconify-icon className="text-slate-300 group-hover:text-indigo-400 transition-colors" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-500">Historical Dataset</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-[10px] text-blue-600 font-medium bg-blue-50 px-1 rounded">Verified</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-3 px-1">
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Context &amp; Uploads</h4>
</div>
<div className="space-y-3" id="source-list-custom">

<div className="group bg-white rounded-xl p-3 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer" id="source-3" onclick="app.openSourceModal('FEMA-Map-Panel-093.pdf', 'PDF Document', 'medium')">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-orange-600 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h5 className="text-sm font-medium text-slate-800 truncate">FEMA-Map-Panel-093</h5>
<iconify-icon className="text-slate-300 group-hover:text-indigo-400 transition-colors" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-500">PDF Document</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-[10px] text-slate-400">2.4 MB</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="space-y-6 hidden animate-fade-in" id="content-reports">
<div className="flex items-center justify-between mb-3 px-1">
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Generated Reports</h4>
</div>
<div className="space-y-3" id="report-list">

<div className="text-center py-10 text-slate-400 text-sm" id="empty-reports">
<iconify-icon className="mb-2 opacity-50" icon="solar:document-add-linear" width="32"></iconify-icon>
<p>No reports generated yet.</p>
<button className="mt-2 text-indigo-600 hover:underline" onclick="app.generateReport()">Create one now</button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-slate-50/80 backdrop-blur-sm shrink-0">
<button className="w-full group flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-indigo-50 hover:border-indigo-200 shadow-sm transition-all text-sm font-medium text-slate-700 hover:text-indigo-600" onclick="app.openAddSourceModal()">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 transition-colors" icon="solar:cloud-upload-linear" width="18"></iconify-icon>
                Add Custom Source
            </button>
</div>
</aside>


<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300 flex items-center justify-center" id="modal-overlay">

<div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md transform scale-95 transition-transform duration-300 hidden p-6" id="modal-source-detail">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900" id="detail-title">Source Title</h3>
<p className="text-xs text-slate-500" id="detail-type">Source Type</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600" onclick="app.closeModals()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-600 mb-6 border border-slate-100">
<p>This source was heavily weighted in the analysis of <strong id="detail-impact">liquefaction risks</strong>. Data last updated: 2 days ago.</p>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon> Preview
                </button>
<button className="flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon> Use in Chat
                </button>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md transform scale-95 transition-transform duration-300 hidden p-6" id="modal-add-source">
<h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:cloud-upload-linear" width="20"></iconify-icon>
                Add Custom Source
            </h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Source URL or File</label>
<div className="relative">
<input className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" id="new-source-input" placeholder="https://..." type="text"/>
<button className="absolute right-2 top-2 text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:link-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 hover:border-indigo-200 transition-colors">
<iconify-icon className="text-slate-400 mb-2" icon="solar:upload-track-linear" width="24"></iconify-icon>
<p className="text-xs font-medium text-slate-600">Click to upload PDF or XLS</p>
<p className="text-[10px] text-slate-400 mt-1">Max 10MB</p>
</div>
<div className="flex gap-3 pt-2">
<button className="flex-1 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors" onclick="app.closeModals()">
                        Cancel
                    </button>
<button className="flex-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors shadow-sm shadow-indigo-200" onclick="app.addNewSource()">
                        Add Source
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
