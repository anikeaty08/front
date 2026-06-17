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



        // --- State Management (FULL DATABASE) ---
        const state = {
            activeTab: 'Masters',
            docs: {
                Masters: [
                    { id: 1, name: "Passport Photo (White Background)", status: "pending" },
                    { id: 2, name: "Passport Data Page", status: "pending" },
                    { id: 3, name: "Degree Certificate", status: "pending" },
                    { id: 4, name: "Academic Transcript", status: "pending" },
                    { id: 5, name: "Statement of Account", status: "pending" },
                    { id: 6, name: "Recommendations Letter (x2)", status: "pending" },
                    { id: 7, name: "Study Plan (SoP)", status: "pending" },
                    { id: 8, name: "Medical Form", status: "pending" },
                    { id: 9, name: "Police Character Certificate", status: "pending" },
                    { id: 10, name: "English Proficiency Cert", status: "pending" },
                    { id: 11, name: "One Minute Introduction Video", status: "pending" },
                    { id: 12, name: "Academic CV", status: "pending" },
                    { id: 13, name: "Application Fee Receipt (¥2000)", status: "pending" },
                    { id: 14, name: "Nanpat Form", status: "pending" },
                ],
                Bachelors: [
                    { id: 1, name: "WAEC/NECO/Bsc Result", status: "done" },
                    { id: 2, name: "Passport Data Page", status: "done" },
                    { id: 3, name: "Passport Photo", status: "pending" },
                    { id: 4, name: "Medical Report", status: "pending" },
                    { id: 5, name: "Bank Statement", status: "pending" },
                    { id: 6, name: "Study Plan", status: "pending" },
                    { id: 7, name: "English Proficiency Cert", status: "pending" },
                    { id: 8, name: "Recommendations Letter", status: "pending" },
                    { id: 9, name: "Introduction Video", status: "pending" },
                    { id: 10, name: "Nanpat Form", status: "done" },
                ],
                Procurement: [
                    { id: 1, name: "Product Specification Sheet", status: "pending" },
                    { id: 2, name: "Supplier Link (1688/Taobao/Alibaba)", status: "pending" },
                    { id: 3, name: "Target Price (Yuan/USD)", status: "pending" },
                    { id: 4, name: "Sample Images (Upload Zip)", status: "pending" },
                    { id: 5, name: "Shipping Address (Nigeria)", status: "pending" },
                    { id: 6, name: "Initial Deposit Proof", status: "pending" },
                ],
                Visa: [
                    { id: 1, name: "Int'l Passport Data Page", status: "done" },
                    { id: 2, name: "Invitation Letter", status: "pending" },
                    { id: 3, name: "Business License Copy", status: "pending" },
                    { id: 4, name: "Police Character Certificate", status: "pending" },
                    { id: 5, name: "Yellow Card", status: "pending" },
                    { id: 6, name: "DS-160 Confirmation", status: "pending" }
                ]
            }
        };

        const navConfig = [
            { id: 'Masters', icon: 'graduation-cap', label: 'Masters', color: 'blue' },
            { id: 'Bachelors', icon: 'user', label: 'Bachelors', color: 'blue' },
            { id: 'Procurement', icon: 'package', label: 'Procurement', color: 'emerald' },
            { id: 'Visa', icon: 'globe', label: 'Visa Support', color: 'amber' }
        ];

        // --- Functions (Logic) ---

        function init() {
            renderSidebar();
            renderView();
            updateAssistantText();
        }

        function switchTab(tab) {
            state.activeTab = tab;
            toggleMenu(true);
            renderSidebar();
            renderView();
            updateAssistantText();
        }

        function handleUpload(id) {
            const category = state.activeTab;
            const docIndex = state.docs[category].findIndex(d => d.id === id);
            
            // 1. Simulator: Uploading State
            if (docIndex > -1) {
                state.docs[category][docIndex].status = 'uploading';
                renderChecklist(); 
            }

            // 2. Simulator: Done State (after 1.5s)
            setTimeout(() => {
                state.docs[category][docIndex].status = 'done';
                renderChecklist();
                renderProgress();
                updateAssistantText();
            }, 1500);
        }

        function toggleAssistant() {
            const bubble = document.getElementById('assistant-bubble');
            if (bubble.classList.contains('hidden')) {
                bubble.classList.remove('hidden');
                // Small delay to allow display:block to apply before transition
                requestAnimationFrame(() => {
                    bubble.classList.remove('translate-y-4', 'opacity-0');
                });
            } else {
                bubble.classList.add('translate-y-4', 'opacity-0');
                setTimeout(() => bubble.classList.add('hidden'), 300);
            }
        }

        function updateAssistantText() {
            const doc = state.docs[state.activeTab].find(d => d.status === 'pending');
            const textEl = document.getElementById('assistant-text');
            if (doc) {
                textEl.innerText = `"I see you are in the ${state.activeTab} dashboard. Please upload your ${doc.name} so I can verify it."`;
            } else {
                textEl.innerText = `"All documents uploaded for ${state.activeTab}! I am now processing your application for the next stage."`;
            }
        }

        // --- Renderers ---

        function renderSidebar() {
            const navContainer = document.getElementById('sidebar-nav');
            const mobileContainer = document.getElementById('mobile-nav-content');
            let sidebarHTML = '';
            
            sidebarHTML += `<div class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 mt-2 pl-3">Academic Wing</div>`;
            
            navConfig.forEach((item, index) => {
                if (index === 2) sidebarHTML += `<div class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 mt-6 pl-3">Business Wing</div>`;

                const isActive = state.activeTab === item.id;
                // Using template literals to inject colors dynamically while keeping Tailwind happy
                const activeClass = isActive 
                    ? `bg-${item.color}-900/20 text-${item.color}-400 border-${item.color}-500/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]` 
                    : `text-zinc-400 hover:bg-white/5 hover:text-white border-transparent`;
                
                // Icon Color Logic
                const iconColor = isActive ? `text-${item.color}-400` : `text-zinc-500 group-hover:text-white`;

                sidebarHTML += `
                    <button onclick="switchTab('${item.id}')" class="group w-full flex items-center gap-3 p-2.5 rounded-lg text-sm font-medium transition-all border ${activeClass}">
                        <iconify-icon icon="lucide:${item.icon}" class="text-lg ${iconColor} transition-colors"></iconify-icon>
                        ${item.label}
                    </button>
                `;
            });
            
            if(navContainer) navContainer.innerHTML = sidebarHTML;
            if(mobileContainer) mobileContainer.innerHTML = sidebarHTML;
        }

        function renderView() {
            document.getElementById('page-title').textContent = `${state.activeTab} Dashboard`;
            document.getElementById('page-subtitle').textContent = `Manage your ${state.activeTab.toLowerCase()} tasks and track status.`;
            renderChecklist();
            renderProgress();
        }

        function renderChecklist() {
            const container = document.getElementById('checklist-container');
            const docs = state.docs[state.activeTab];

            container.innerHTML = docs.map((doc, index) => {
                let iconHTML, statusHTML, bgClass, borderClass;
                // Stagger animation
                const delay = index * 50;

                if (doc.status === 'done') {
                    bgClass = 'bg-emerald-900/10';
                    borderClass = 'border-emerald-500/20';
                    iconHTML = `<div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20"><iconify-icon icon="lucide:check" class="text-emerald-500 text-sm"></iconify-icon></div>`;
                    statusHTML = `<span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">VERIFIED</span>`;
                } else if (doc.status === 'uploading') {
                    bgClass = 'bg-blue-900/10';
                    borderClass = 'border-blue-500/20';
                    iconHTML = `<div class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20"><iconify-icon icon="lucide:loader-2" class="text-blue-500 text-sm animate-spin"></iconify-icon></div>`;
                    statusHTML = `<span class="text-[10px] font-bold text-blue-400">UPLOADING...</span>`;
                } else {
                    bgClass = 'bg-zinc-900/40 hover:bg-zinc-900/80';
                    borderClass = 'border-white/5 hover:border-white/10';
                    iconHTML = `<div class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5"><iconify-icon icon="lucide:file" class="text-zinc-500 text-sm"></iconify-icon></div>`;
                    statusHTML = `
                        <button onclick="handleUpload(${doc.id})" class="group/btn flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 hover:bg-white/10 rounded-md transition-all border border-white/5 hover:border-white/20">
                            <iconify-icon icon="lucide:upload-cloud" class="group-hover/btn:-translate-y-0.5 transition-transform duration-300"></iconify-icon> Upload
                        </button>
                    `;
                }

                return `
                    <div class="flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${bgClass} ${borderClass} fade-enter-active" style="animation-delay: ${delay}ms">
                        <div class="flex items-center gap-3">
                            ${iconHTML}
                            <span class="text-sm font-medium ${doc.status === 'done' ? 'text-zinc-400 line-through decoration-zinc-600' : 'text-zinc-200'}">${doc.name}</span>
                        </div>
                        <div>${statusHTML}</div>
                    </div>
                `;
            }).join('');
        }

        function renderProgress() {
            const docs = state.docs[state.activeTab];
            const completed = docs.filter(d => d.status === 'done').length;
            const percent = Math.round((completed / docs.length) * 100);
            const badge = document.getElementById('progress-badge');
            
            badge.textContent = `${percent}% Ready`;
            
            if (percent === 100) {
                badge.className = "text-[10px] font-mono font-medium px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]";
            } else {
                badge.className = "text-[10px] font-mono font-medium px-3 py-1 bg-zinc-900 text-zinc-400 border border-white/10 rounded-full transition-all";
            }
        }

        function toggleMenu(forceClose = false) {
            const menu = document.getElementById("mobile-menu");
            if (forceClose || !menu.classList.contains("translate-x-full")) {
                menu.classList.add("translate-x-full");
                document.body.style.overflow = "";
            } else {
                menu.classList.remove("translate-x-full");
                document.body.style.overflow = "hidden";
            }
        }

        document.addEventListener('DOMContentLoaded', init);
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-900/5 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-black/80 backdrop-blur-xl">
<div className="w-full px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer" onclick="location.reload()">
<div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
<iconify-icon className="text-lg text-blue-500" icon="lucide:sparkles"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">Nanpat<span className="text-zinc-500 font-normal ml-0.5">DASHBOARD</span></span>
</div>

<div className="flex items-center gap-4">

<div className="hidden md:flex items-center gap-3 pl-4 border-l border-white/5">
<div className="text-right">
<p className="text-xs font-medium text-white">Alex D.</p>
<p className="text-[10px] text-zinc-500">ID: NP-8821</p>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-sm" icon="lucide:user"></iconify-icon>
</div>
</div>

<button className="md:hidden p-2 text-zinc-400 hover:text-white" onclick="toggleMenu()">
<iconify-icon className="text-xl" icon="lucide:menu"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[60] transform translate-x-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)" id="mobile-menu">
<div className="p-6 h-full flex flex-col">
<div className="flex justify-end mb-8">
<button className="p-2 text-zinc-400 hover:text-white" onclick="toggleMenu(true)">
<iconify-icon className="text-3xl" icon="lucide:x"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-2" id="mobile-nav-content">

</div>
</div>
</div>

<div className="flex pt-16 min-h-screen relative z-10">

<aside className="hidden md:flex flex-col w-64 fixed h-[calc(100vh-64px)] border-r border-white/5 bg-black/50 backdrop-blur-sm">
<div className="p-4 flex-1 overflow-y-auto" id="sidebar-nav">

</div>
<div className="p-4 border-t border-white/5">
<button className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-600/10 to-emerald-600/10 border border-white/5 hover:border-white/10 transition-all group" onclick="toggleAssistant()">
<div className="w-8 h-8 rounded bg-black/50 flex items-center justify-center border border-white/5 group-hover:border-white/20">
<iconify-icon className="text-blue-400" icon="lucide:bot"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-white">AI Assistant</p>
<p className="text-[10px] text-zinc-500">Ask Nanpat</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 md:ml-64 p-6 lg:p-10 max-w-5xl mx-auto w-full">

<header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 animate-on-scroll fade-enter-active">
<div>
<div className="flex items-center gap-3 mb-2">
<div className="text-[10px] font-mono font-medium px-3 py-1 bg-zinc-900 text-zinc-400 border border-white/10 rounded-full transition-all" id="progress-badge">
                            0% Ready
                        </div>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">System Live</span>
</div>
<h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-2" id="page-title">Masters Dashboard</h1>
<p className="text-zinc-500 text-sm max-w-md" id="page-subtitle">Manage your documents and track application status.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-md hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 flex items-center gap-2">
<iconify-icon className="text-sm" icon="lucide:message-circle"></iconify-icon>
                        Support Agent
                    </button>
</div>
</header>

<div className="bg-black/40 border border-white/5 rounded-xl overflow-hidden backdrop-blur-md">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/20">
<h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Required Documents</h3>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50" title="Pending"></div>
<div className="w-2 h-2 rounded-full bg-blue-500/20 border border-blue-500/50" title="Uploading"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50" title="Verified"></div>
</div>
</div>

<div className="p-4 grid gap-3" id="checklist-container">

<div className="p-8 text-center text-zinc-500 animate-pulse">
                        Loading ecosystem...
                    </div>
</div>
</div>

<div className="mt-8 text-center sm:text-left border-t border-white/5 pt-8">
<p className="text-[10px] text-zinc-600 font-mono">
                    SECURED BY NANPAT CLOUD • ID: 8821-XJ
                </p>
</div>
</main>
</div>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 hidden transition-all duration-300 transform translate-y-4 opacity-0" id="assistant-bubble">
<div className="bg-zinc-900 border border-white/10 p-4 rounded-xl rounded-tr-sm shadow-2xl max-w-xs mb-2">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-blue-400 text-xs" icon="lucide:sparkles"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Nanpat AI</span>
</div>
<p className="text-xs text-zinc-300 leading-relaxed" id="assistant-text">
                "I see you are in the Masters dashboard. Please upload your Passport Photo so I can verify it."
            </p>
</div>
<div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer hover:scale-105 transition-transform" onclick="toggleAssistant()">
<iconify-icon className="text-lg" icon="lucide:x"></iconify-icon>
</div>
</div>

<button className="md:hidden fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg z-40 border border-white/10" onclick="toggleAssistant()">
<iconify-icon className="text-xl" icon="lucide:bot"></iconify-icon>
</button>


    </>
  );
}
