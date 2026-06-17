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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function toggleDropdown(id) {
       const el = document.getElementById(id);
       const isHidden = el.classList.contains('hidden');
       closeAllDropdowns();
       if (isHidden) el.classList.remove('hidden');
      }

      function closeAllDropdowns(e) {
       if (e && e.target.closest('.dropdown-container')) return;
       document.querySelectorAll('[role="menu"]').forEach(menu => menu.classList.add('hidden'));
      }
      document.addEventListener('click', closeAllDropdowns);

      function toggleDrawer(id) {
       const el = document.getElementById(id);
       el.classList.toggle('-translate-x-full');
      }

      function openModal(id, contentId){
       const modal = document.getElementById(id);
       const content = document.getElementById(contentId);
       modal.classList.remove('hidden');
       modal.classList.add('flex');
       // Trigger reflow for transition
       void modal.offsetWidth;
       modal.classList.remove('opacity-0');
       content.classList.remove('scale-95');
       content.classList.add('scale-100');
      }

      function closeModal(id, contentId) {
       const modal = document.getElementById(id);
       const content = document.getElementById(contentId);
       modal.classList.add('opacity-0');
       content.classList.remove('scale-100');
       content.classList.add('scale-95');
       setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
       }, 200);
      }

      // Settings
      function openSettings() { openModal('settings-modal', 'settings-modal-content'); }
      function closeSettings() { closeModal('settings-modal', 'settings-modal-content'); }

      function switchSettingsTab(tab) {
       ['api-keys', 'general', 'advanced'].forEach(t => {
        const panel = document.getElementById('st-panel-' + t);
        const tabBtn = document.getElementById('st-tab-' + t);
        panel.classList.add('hidden');
        panel.classList.remove('flex');
        tabBtn.classList.remove('bg-white/[0.05]', 'text-zinc-200', 'font-medium');
        tabBtn.classList.add('text-zinc-500', 'font-normal');
       });
       document.getElementById('st-panel-' + tab).classList.remove('hidden');
       document.getElementById('st-panel-' + tab).classList.add('flex');
       const activeBtn = document.getElementById('st-tab-' + tab);
       activeBtn.classList.remove('text-zinc-500', 'font-normal');
       activeBtn.classList.add('bg-white/[0.05]', 'text-zinc-200', 'font-medium');
      }

      // Node Config
      function openNodeConfig(type, title) {
       document.getElementById('nc-title').innerText = title;

       // Icon mapping
       const iconMap = {
        'Prompt': 'solar:command-line-linear',
        'Ingestor': 'solar:folder-open-linear',
        'Planner': 'solar:cpu-linear',
        'MetaPrompter': 'solar:magic-stick-3-linear',
        'Iterator': 'solar:repeat-linear',
        'Agent': 'solar:bot-linear',
        'Output': 'solar:document-text-linear'
       };
       document.getElementById('nc-icon').setAttribute('icon', iconMap[type] || 'solar:settings-linear');

       // Hide specific configuration sections
       ['Prompt', 'Ingestor', 'Iterator', 'Model', 'Output', 'Generic'].forEach(t => {
        const el = document.getElementById('nc-spec-' + t);
        if(el) { el.classList.add('hidden'); el.classList.remove('flex'); }
       });

       // Show the relevant one
       const targetSpec = document.getElementById('nc-spec-' + type) ? type : 'Generic';
       const specEl = document.getElementById('nc-spec-' + targetSpec);
       if(specEl) { specEl.classList.remove('hidden'); specEl.classList.add('flex'); }

       // Special Agent Logic
       if(type === 'Agent') {
        document.getElementById('nct-tab-agent').classList.remove('hidden');
        document.getElementById('nct-tab-agent').classList.add('flex');
        switchNodeConfigTab('agent');
       } else {
        document.getElementById('nct-tab-agent').classList.add('hidden');
        document.getElementById('nct-tab-agent').classList.remove('flex');
        switchNodeConfigTab('config');
       }

       openModal('node-config-modal', 'node-config-modal-content');
      }

      function closeNodeConfig() {
       closeModal('node-config-modal', 'node-config-modal-content');
      }

      function switchNodeConfigTab(tab) {
       ['config', 'output', 'monitor', 'agent'].forEach(t => {
        const panel = document.getElementById('nc-panel-' + t);
        const tabBtn = document.getElementById('nct-tab-' + t);
        if(panel) { panel.classList.add('hidden'); panel.classList.remove('flex'); }
        if(tabBtn) {
         if(t === 'agent') {
          tabBtn.classList.remove('border-orange-400', 'text-orange-300');
          tabBtn.classList.add('border-transparent', 'text-orange-400');
         } else {
          tabBtn.classList.remove('border-blue-500', 'text-zinc-200');
          tabBtn.classList.add('border-transparent', 'text-zinc-500');
         }
        }
       });

       const activePanel = document.getElementById('nc-panel-' + tab);
       const activeBtn = document.getElementById('nct-tab-' + tab);
       if(activePanel) { activePanel.classList.remove('hidden'); activePanel.classList.add('flex'); }
       if(activeBtn) {
        if(tab === 'agent') {
         activeBtn.classList.remove('border-transparent', 'text-orange-400');
         activeBtn.classList.add('border-orange-400', 'text-orange-300');
        } else {
         activeBtn.classList.remove('border-transparent', 'text-zinc-500');
         activeBtn.classList.add('border-blue-500', 'text-zinc-200');
        }
       }
      }

      // Templates
      function openTemplateModal() { openModal('template-modal', 'template-modal-content'); }
      function closeTemplateModal() { closeModal('template-modal', 'template-modal-content'); }

      function applyTemplate(name) {
       const textarea = document.getElementById('system-instruction');
       if(textarea) {
        textarea.value = `Template: ${name}\n\n# Role Definition\nYou are an expert specialized in autonomous plan generation...`;
        textarea.classList.add('text-blue-200');
        setTimeout(() => textarea.classList.remove('text-blue-200'), 500);
       }
       showToast(`Applied "${name}" template.`, 'success');
      }

      // Command Palette
      function openCommandPalette() {
       const cp = document.getElementById('command-palette');
       cp.classList.remove('hidden');
       cp.classList.add('flex');
       void cp.offsetWidth;
       cp.classList.remove('opacity-0');
       document.getElementById('command-input').focus();
      }

      function closeCommandPalette(e) {
       if(e && e.target !== e.currentTarget && e.currentTarget.id === 'command-palette') return;
       const cp = document.getElementById('command-palette');
       cp.classList.add('opacity-0');
       setTimeout(() => {
        cp.classList.add('hidden');
        cp.classList.remove('flex');
       }, 200);
      }

      // Utilities
      function showToast(message, type = 'info') {
       const container = document.getElementById('toast-container');
       const toast = document.createElement('div');
       toast.className = 'nm-raised px-4 py-3 rounded-lg border border-white/[0.05] shadow-lg flex items-center gap-3 toast-enter pointer-events-auto';

       let icon = 'solar:info-circle-linear';
       let iconColor = 'text-blue-400';
       if (type === 'success') { icon = 'solar:check-circle-linear'; iconColor = 'text-green-400'; }
       else if (type === 'error') { icon = 'solar:danger-circle-linear'; iconColor = 'text-red-400'; }

       toast.innerHTML = `
        <iconify-icon icon="${icon}" class="${iconColor} text-lg shrink-0"></iconify-icon>
        <span class="text-sm text-zinc-200 font-normal tracking-wide">${message}</span>
       `;

       container.appendChild(toast);

       setTimeout(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 200);
       }, 3000);
      }

      function togglePassword(btn) {
       const input = btn.previousElementSibling;
       const icon = btn.querySelector('iconify-icon');
       if (input.type === 'password') {
        input.type = 'text';
        icon.setAttribute('icon', 'solar:eye-closed-linear');
       } else {
        input.type = 'password';
        icon.setAttribute('icon', 'solar:eye-linear');
       }
      }

      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => {
       if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openCommandPalette();
       }
       if (e.key === 'Escape') {
        closeCommandPalette();
        closeSettings();
        closeNodeConfig();
        closeTemplateModal();
        const drawer = document.getElementById('drawer-components');
        if(!drawer.classList.contains('-translate-x-full')) toggleDrawer('drawer-components');
       }
      });

      // Init canvas draggable state (simplified)
      let isDraggingCanvas = false;
      let startX, startY, scrollLeft, scrollTop;
      const canvas = document.getElementById('canvas-container');

      canvas.addEventListener('mousedown', (e) => {
       if(e.target.closest('.nm-node') || e.target.closest('button')) return;
       isDraggingCanvas = true;
       canvas.style.cursor = 'grabbing';
       startX = e.pageX - canvas.offsetLeft;
       startY = e.pageY - canvas.offsetTop;
       scrollLeft = canvas.scrollLeft;
       scrollTop = canvas.scrollTop;
      });

      canvas.addEventListener('mouseleave', () => { isDraggingCanvas = false; canvas.style.cursor = 'default'; });
      canvas.addEventListener('mouseup', () => { isDraggingCanvas = false; canvas.style.cursor = 'default'; });

      canvas.addEventListener('mousemove', (e) => {
       if(!isDraggingCanvas) return;
       e.preventDefault();
       const x = e.pageX - canvas.offsetLeft;
       const y = e.pageY - canvas.offsetTop;
       const walkX = (x - startX) * 1.5;
       const walkY = (y - startY) * 1.5;
       canvas.scrollLeft = scrollLeft - walkX;
       canvas.scrollTop = scrollTop - walkY;
      });
    


      function openGlobalVariables() { openModal('globals-modal', 'globals-modal-content'); }
      function closeGlobalVariables() { closeModal('globals-modal', 'globals-modal-content'); }
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeGlobalVariables(); });
    


      // Override switchNodeConfigTab and openNodeConfig to include 'review' tab
      function switchNodeConfigTab(tab) {
       ['config', 'output', 'monitor', 'agent', 'review'].forEach(t => {
        const panel = document.getElementById('nc-panel-' + t);
        const tabBtn = document.getElementById('nct-tab-' + t);
        if(panel) { panel.classList.add('hidden'); panel.classList.remove('flex'); }
        if(tabBtn) {
         if(t === 'agent') {
          tabBtn.classList.remove('border-orange-400', 'text-orange-300');
          tabBtn.classList.add('border-transparent', 'text-orange-400');
         } else if(t === 'review') {
          tabBtn.classList.remove('border-purple-400', 'text-purple-300');
          tabBtn.classList.add('border-transparent', 'text-purple-400');
         } else {
          tabBtn.classList.remove('border-blue-500', 'text-zinc-200');
          tabBtn.classList.add('border-transparent', 'text-zinc-500');
         }
        }
       });

       const activePanel = document.getElementById('nc-panel-' + tab);
       const activeBtn = document.getElementById('nct-tab-' + tab);
       if(activePanel) { activePanel.classList.remove('hidden'); activePanel.classList.add('flex'); }
       if(activeBtn) {
        if(tab === 'agent') {
         activeBtn.classList.remove('border-transparent', 'text-orange-400');
         activeBtn.classList.add('border-orange-400', 'text-orange-300');
        } else if(tab === 'review') {
         activeBtn.classList.remove('border-transparent', 'text-purple-400');
         activeBtn.classList.add('border-purple-400', 'text-purple-300');
        } else {
         activeBtn.classList.remove('border-transparent', 'text-zinc-500');
         activeBtn.classList.add('border-blue-500', 'text-zinc-200');
        }
       }
      }

      function openNodeConfig(type, title) {
       document.getElementById('nc-title').innerText = title;

       const iconMap = {
        'Prompt': 'solar:command-line-linear',
        'Ingestor': 'solar:folder-open-linear',
        'Planner': 'solar:cpu-linear',
        'MetaPrompter': 'solar:magic-stick-3-linear',
        'Iterator': 'solar:repeat-linear',
        'Agent': 'solar:bot-linear',
        'Output': 'solar:document-text-linear'
       };
       document.getElementById('nc-icon').setAttribute('icon', iconMap[type] || 'solar:settings-linear');

       ['Prompt', 'Ingestor', 'Iterator', 'Model', 'Output', 'Generic'].forEach(t => {
        const el = document.getElementById('nc-spec-' + t);
        if(el) { el.classList.add('hidden'); el.classList.remove('flex'); }
       });

       const targetSpec = document.getElementById('nc-spec-' + type) ? type : 'Generic';
       const specEl = document.getElementById('nc-spec-' + targetSpec);
       if(specEl) { specEl.classList.remove('hidden'); specEl.classList.add('flex'); }

       if(type === 'Agent') {
        document.getElementById('nct-tab-agent').classList.remove('hidden');
        document.getElementById('nct-tab-agent').classList.add('flex');
        document.getElementById('nct-tab-review').classList.remove('hidden');
        document.getElementById('nct-tab-review').classList.add('flex');
        switchNodeConfigTab('agent');
       } else {
        document.getElementById('nct-tab-agent').classList.add('hidden');
        document.getElementById('nct-tab-agent').classList.remove('flex');
        document.getElementById('nct-tab-review').classList.add('hidden');
        document.getElementById('nct-tab-review').classList.remove('flex');
        switchNodeConfigTab('config');
       }

       openModal('node-config-modal', 'node-config-modal-content');
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
      
<header className="h-8 w-full flex items-center justify-between shrink-0 select-none z-[400] relative electron-drag" style={{background: '#0a0b10', borderBottom: '1px solid rgba(100,120,200,0.05)'}}>
<div className="flex items-center h-full">
<div aria-hidden="true" className="px-3 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-sm" icon="solar:widget-linear"></iconify-icon>
</div>
<nav className="flex items-center h-full electron-nodrag">
<div className="relative h-full flex items-center dropdown-container">
<button aria-expanded="false" aria-haspopup="true" aria-label="File menu" className="text-xs text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05] h-full px-3 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="toggleDropdown('menu-file')">
              File
            </button>
<div className="hidden absolute top-full left-0 w-48 nm-raised rounded-md border border-white/[0.05] py-1 z-[500] shadow-xl mt-1" id="menu-file" role="menu">
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.05] hover:text-zinc-100 flex items-center gap-2 outline-none focus-visible:bg-white/[0.05] focus-visible:text-zinc-100" role="menuitem">
<iconify-icon aria-hidden="true" className="text-sm text-zinc-400" icon="solar:document-add-linear"></iconify-icon>
                New Pipeline
              </button>
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.05] hover:text-zinc-100 flex items-center gap-2 outline-none focus-visible:bg-white/[0.05] focus-visible:text-zinc-100" role="menuitem">
<iconify-icon aria-hidden="true" className="text-sm text-zinc-400" icon="solar:folder-open-linear"></iconify-icon>
                Open…
              </button>
<div className="h-px w-full bg-white/[0.05] my-1" role="separator"></div>
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.05] hover:text-zinc-100 flex items-center gap-2 outline-none focus-visible:bg-white/[0.05] focus-visible:text-zinc-100" onclick="openSettings(); closeAllDropdowns();" role="menuitem">
<iconify-icon aria-hidden="true" className="text-sm text-zinc-400" icon="solar:settings-linear"></iconify-icon>
                Settings
              </button>
<div className="h-px w-full bg-white/[0.05] my-1" role="separator"></div>
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.05] hover:text-zinc-100 flex items-center gap-2 outline-none focus-visible:bg-white/[0.05] focus-visible:text-zinc-100" onclick="showToast('Version saved to history.', 'success'); closeAllDropdowns();" role="menuitem">
<iconify-icon aria-hidden="true" className="text-sm text-zinc-400" icon="solar:diskette-linear"></iconify-icon>
                Save Version
              </button>
</div>
</div>
</nav>
</div>
<div className="absolute left-1/2 -translate-x-1/2 text-xs text-zinc-500 tracking-wide pointer-events-none">
        Agentic Planner — AI Pipeline Builder
      </div>
<div className="flex items-center h-full text-zinc-400 electron-nodrag">
<button aria-label="Minimize" className="w-11 h-full flex items-center justify-center hover:bg-white/[0.05] hover:text-zinc-200 transition-colors outline-none focus-visible:bg-white/[0.05]">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:minus-square-linear"></iconify-icon>
</button>
<button aria-label="Maximize" className="w-11 h-full flex items-center justify-center hover:bg-white/[0.05] hover:text-zinc-200 transition-colors outline-none focus-visible:bg-white/[0.05]">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:stop-linear"></iconify-icon>
</button>
<button aria-label="Close" className="w-11 h-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors outline-none focus-visible:bg-red-500 focus-visible:text-white">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
</header>
<div className="flex shrink-0 w-full h-11 z-[350] pr-4 pl-3 items-center justify-between relative" style={{background: '#14161f', borderBottom: '1px solid rgba(100,120,200,0.09)', boxShadow: '0 1px 6px #06070c'}}>
<div className="flex items-center gap-3">
<div aria-hidden="true" className="nm-raised-sm w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-sm text-zinc-200" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs">
<button className="text-zinc-500 hover:text-zinc-300 transition-colors outline-none focus-visible:text-zinc-200 focus-visible:underline">
            Projects
          </button>
<iconify-icon aria-hidden="true" className="text-xs text-zinc-700" icon="solar:alt-arrow-right-linear"></iconify-icon>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors outline-none focus-visible:text-zinc-200 focus-visible:underline">
            Customer Onboarding
          </button>
<iconify-icon aria-hidden="true" className="text-xs text-zinc-700" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="relative inline-block dropdown-container">
<button aria-expanded="false" aria-haspopup="true" aria-label="Version history" className="nm-pressed px-2 py-1 rounded-md flex items-center gap-2 hover:bg-[#12141c] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="toggleDropdown('version-dropdown')">
<span className="text-xs text-zinc-300 mono">Agentic Planner v2</span>
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500" style={{boxShadow: '0 0 5px rgba(34,197,94,0.6)'}}></span>
<span className="text-xs text-green-400 uppercase tracking-wide">
                  Active
                </span>
</span>
<iconify-icon aria-hidden="true" className="text-xs text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden absolute top-full left-0 w-52 nm-raised rounded-md border border-white/[0.05] py-1 z-[500] shadow-xl mt-1" id="version-dropdown" role="menu">
<div className="px-3 py-1.5 text-xs text-zinc-500 uppercase tracking-wider font-normal">
                Version History
              </div>
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-200 bg-white/[0.02] flex items-center justify-between outline-none focus-visible:bg-white/[0.05]" role="menuitem">
<span className="flex items-center gap-2">
<iconify-icon aria-hidden="true" className="text-sm text-zinc-400" icon="solar:branching-paths-linear"></iconify-icon>
                  v2 (Current)
                </span>
<span className="text-xs text-zinc-500 mono">Now</span>
</button>
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200 transition-colors flex items-center justify-between outline-none focus-visible:bg-white/[0.05]" role="menuitem">
<span className="flex items-center gap-2">
<iconify-icon aria-hidden="true" className="text-sm text-zinc-500" icon="solar:branching-paths-linear"></iconify-icon>
                  v1 (Legacy)
                </span>
<span className="text-xs text-zinc-500 mono">2d ago</span>
</button>
</div>
</div>
</nav>
</div>
<div className="flex items-center gap-3 text-xs">
<div aria-live="polite" className="flex items-center text-zinc-500 bg-[#0f1118] border border-white/[0.04] px-2 py-1 rounded-md gap-1.5 shadow-inner hidden sm:flex">
<iconify-icon aria-hidden="true" className="text-green-500" icon="solar:bolt-linear"></iconify-icon>
<span>WS Synced</span>
</div>
<button aria-label="Search command palette" className="nm-pressed flex items-center gap-2 px-3 py-1.5 rounded-md text-zinc-500 hover:text-zinc-300 transition-colors w-40 border border-white/[0.02] outline-none focus-visible:ring-1 focus-visible:ring-white/20 group hidden md:flex" onclick="openCommandPalette()">
<iconify-icon aria-hidden="true" className="text-sm group-hover:text-zinc-300 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-xs">Search…</span>
<span className="ml-auto text-xs font-mono border border-white/[0.08] rounded px-1 py-0.5 group-hover:border-white/[0.2] transition-colors">
            ⌘K
          </span>
</button>
<button className="px-2.5 py-1.5 rounded-md text-zinc-900 font-normal transition-all hover:bg-white outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#14161f]" onclick="showToast('Deployment initiated.', 'info')" style={{background: '#e4e4e7', boxShadow: '0 1px 4px #0a0a0d'}}>
          Deploy Pipeline
        </button>
</div>
</div>
<main className="flex-1 flex w-full relative overflow-hidden blueprint-bg" onclick="closeAllDropdowns()">
<aside className="w-11 flex flex-col items-center py-3 z-30 shrink-0 relative" style={{background: '#14161f', borderRight: '1px solid rgba(100,120,200,0.09)'}}>
<div className="flex flex-col gap-2 w-full items-center">
<button aria-controls="drawer-components" aria-expanded="false" aria-label="Toggle node library" className="nm-btn w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-200 transition-all shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="toggleDrawer('drawer-components')" title="Components">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:box-linear"></iconify-icon>
</button>
<div aria-hidden="true" className="w-5 h-px bg-white/[0.05] my-1"></div>
<button aria-controls="drawer-files" aria-expanded="false" aria-label="Toggle file browser" className="nm-btn w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-200 transition-all shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="toggleDrawer('drawer-files')" title="File Browser">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:folder-with-files-linear"></iconify-icon>
</button>
<div aria-hidden="true" className="w-5 h-px bg-white/[0.05] my-1"></div>
<button aria-label="Manage global variables" className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02] transition-all outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="openGlobalVariables()" title="Global Variables">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:database-linear"></iconify-icon>
</button>
<div aria-hidden="true" className="w-5 h-px bg-white/[0.05] my-1"></div>
<button aria-label="Settings" className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02] transition-all outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="openSettings()" title="Settings">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</aside>
<div aria-label="Node Library" className="absolute left-11 top-0 bottom-0 w-64 bg-[#14161f] border-r border-white/[0.09] transform -translate-x-full transition-transform duration-300 z-20 flex flex-col shadow-2xl overscroll-contain" id="drawer-components" role="region">
<div className="px-4 py-3 border-b border-white/[0.05] flex items-center justify-between bg-[#12141c]">
<h3 className="text-xs font-medium text-zinc-200 tracking-tight">
            Node Library
          </h3>
<button aria-label="Close node library" className="text-zinc-500 hover:text-zinc-300 transition-colors p-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" onclick="toggleDrawer('drawer-components')">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="p-3 flex flex-col gap-4 overflow-y-auto overscroll-contain">
<div className="relative">
<label className="sr-only" htmlFor="search-nodes">Search nodes</label>
<iconify-icon aria-hidden="true" className="text-sm text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2" icon="solar:magnifer-linear"></iconify-icon>
<input autocomplete="off" className="nm-input w-full pl-8 pr-3 py-1.5 rounded-md text-xs text-zinc-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 border border-transparent transition-colors" id="search-nodes" placeholder="Search nodes…" spellcheck="false" type="text"/>
</div>
<div>
<h4 className="text-xs text-zinc-500 uppercase tracking-wider font-normal mb-2 px-1">
              Input &amp; Data
            </h4>
<div className="flex flex-col gap-1.5">
<div aria-label="Drag Prompt node" className="nm-inset p-2 rounded-md border border-white/[0.02] cursor-grab hover:border-white/[0.08] transition-colors flex items-center gap-2.5 group" role="button" tabindex="0">
<div className="w-6 h-6 rounded bg-[#181b26] flex items-center justify-center border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:command-line-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 group-hover:text-white transition-colors">
                    Prompt
                  </span>
<span className="text-xs text-zinc-500">
                    Starting string entry
                  </span>
</div>
</div>
<div aria-label="Drag Context Ingestor node" className="nm-inset p-2 rounded-md border border-white/[0.02] cursor-grab hover:border-white/[0.08] transition-colors flex items-center gap-2.5 group" role="button" tabindex="0">
<div className="w-6 h-6 rounded bg-[#181b26] flex items-center justify-center border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:folder-open-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 group-hover:text-white transition-colors">
                    Context Ingestor
                  </span>
<span className="text-xs text-zinc-500">
                    MD, JSON, Text loading
                  </span>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-xs text-zinc-500 uppercase tracking-wider font-normal mb-2 px-1">
              AI &amp; Logic
            </h4>
<div className="flex flex-col gap-1.5">
<div aria-label="Drag Planner Node" className="nm-inset p-2 rounded-md border border-white/[0.02] cursor-grab hover:border-white/[0.08] transition-colors flex items-center gap-2.5 group" role="button" tabindex="0">
<div className="w-6 h-6 rounded bg-[#e4e4e7] flex items-center justify-center border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-900" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 group-hover:text-white transition-colors">
                    Planner Node
                  </span>
<span className="text-xs text-zinc-500">
                    Complex reasoning step
                  </span>
</div>
</div>
<div aria-label="Drag MetaPrompter node" className="nm-inset p-2 rounded-md border border-white/[0.02] cursor-grab hover:border-white/[0.08] transition-colors flex items-center gap-2.5 group" role="button" tabindex="0">
<div className="w-6 h-6 rounded bg-[#181b26] flex items-center justify-center border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 group-hover:text-white transition-colors">
                    MetaPrompter
                  </span>
<span className="text-xs text-zinc-500">
                    Dynamic system generation
                  </span>
</div>
</div>
<div aria-label="Drag Agent node" className="nm-inset p-2 rounded-md border border-white/[0.02] cursor-grab hover:border-white/[0.08] transition-colors flex items-center gap-2.5 group" role="button" tabindex="0">
<div className="w-6 h-6 rounded bg-[#181b26] flex items-center justify-center border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:bot-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 group-hover:text-white transition-colors">
                    Agent
                  </span>
<span className="text-xs text-zinc-500">
                    Autonomous worker task
                  </span>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-xs text-zinc-500 uppercase tracking-wider font-normal mb-2 px-1">
              Control Flow
            </h4>
<div className="flex flex-col gap-1.5">
<div aria-label="Drag Iterator node" className="nm-inset p-2 rounded-md border border-white/[0.02] cursor-grab hover:border-white/[0.08] transition-colors flex items-center gap-2.5 group" role="button" tabindex="0">
<div className="w-6 h-6 rounded bg-[#181b26] flex items-center justify-center border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:repeat-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 group-hover:text-white transition-colors">
                    Iterator
                  </span>
<span className="text-xs text-zinc-500">
                    Loop through array maps
                  </span>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-xs text-zinc-500 uppercase tracking-wider font-normal mb-2 px-1 mt-2">
              Output &amp; Export
            </h4>
<div className="flex flex-col gap-1.5">
<div aria-label="Drag Document Exporter node" className="nm-inset p-2 rounded-md border border-white/[0.02] cursor-grab hover:border-white/[0.08] transition-colors flex items-center gap-2.5 group" role="button" tabindex="0">
<div className="w-6 h-6 rounded bg-[#181b26] flex items-center justify-center border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 group-hover:text-white transition-colors">
                    MD Exporter
                  </span>
<span className="text-xs text-zinc-500">
                    Capture markdown artifacts
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div aria-label="File Browser" className="absolute left-11 top-0 bottom-0 w-64 bg-[#14161f] border-r border-white/[0.09] transform -translate-x-full transition-transform duration-300 z-20 flex flex-col shadow-2xl overscroll-contain" id="drawer-files" role="region">
<div className="px-4 py-3 border-b border-white/[0.05] flex items-center justify-between bg-[#12141c]">
<h3 className="text-xs font-medium text-zinc-200 tracking-tight">
            Repository
          </h3>
<button aria-label="Close file browser" className="text-zinc-500 hover:text-zinc-300 transition-colors p-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" onclick="toggleDrawer('drawer-files')">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="p-3 flex flex-col gap-1 overflow-y-auto overscroll-contain text-xs text-zinc-400">
<div className="flex items-center gap-2 p-1.5 hover:bg-white/[0.04] rounded cursor-pointer group transition-colors">
<iconify-icon className="text-sm text-zinc-500 group-hover:text-zinc-300" icon="solar:folder-linear"></iconify-icon>
<span className="group-hover:text-zinc-200 transition-colors font-medium">
              src
            </span>
</div>
<div className="flex flex-col pl-4 gap-1 border-l border-white/[0.05] ml-2.5 mt-1 mb-1">
<div className="flex items-center gap-2 p-1.5 hover:bg-white/[0.04] rounded cursor-pointer group transition-colors">
<iconify-icon className="text-sm text-zinc-500 group-hover:text-zinc-300" icon="solar:document-linear"></iconify-icon>
<span className="group-hover:text-zinc-200 transition-colors">
                index.js
              </span>
</div>
<div className="flex items-center gap-2 p-1.5 hover:bg-white/[0.04] rounded cursor-pointer group transition-colors">
<iconify-icon className="text-sm text-zinc-500 group-hover:text-zinc-300" icon="solar:document-linear"></iconify-icon>
<span className="group-hover:text-zinc-200 transition-colors">
                agent.js
              </span>
</div>
</div>
<div className="flex items-center gap-2 p-1.5 hover:bg-white/[0.04] rounded cursor-pointer group transition-colors">
<iconify-icon className="text-sm text-zinc-500 group-hover:text-zinc-300" icon="solar:document-linear"></iconify-icon>
<span className="group-hover:text-zinc-200 transition-colors">
              package.json
            </span>
</div>
<div className="flex items-center gap-2 p-1.5 hover:bg-white/[0.04] rounded cursor-pointer group transition-colors">
<iconify-icon className="text-sm text-zinc-500 group-hover:text-zinc-300" icon="solar:document-linear"></iconify-icon>
<span className="group-hover:text-zinc-200 transition-colors">
              README.md
            </span>
</div>
</div>
</div>
<div className="flex-1 overflow-auto w-full h-full relative z-10" id="canvas-container">
<div className="w-[2600px] h-[900px] absolute top-0 left-0">
<svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none z-0">
<defs>
<filter id="glow-line">
<fegaussianblur result="coloredBlur" stddeviation="2.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter id="glow-dot">
<fegaussianblur result="coloredBlur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<marker id="arrow" markerheight="6" markerwidth="6" orient="auto" refx="5" refy="3">
<path d="M0,0.5 L0,5.5 L5,3 z" fill="rgba(140,160,230,0.45)"></path>
</marker>
<marker id="arrow-active" markerheight="6" markerwidth="6" orient="auto" refx="5" refy="3">
<path d="M0,0.5 L0,5.5 L5,3 z" fill="rgba(228,228,231,0.9)"></path>
</marker>
</defs>
<path d="M 360 148 C 382 148, 382 228, 404 228" fill="none" marker-end="url(#arrow)" stroke="rgba(140,160,230,0.45)" strokeWidth="1.5"></path>
<path d="M 360 308 C 382 308, 382 228, 404 228" fill="none" marker-end="url(#arrow)" stroke="rgba(140,160,230,0.45)" strokeWidth="1.5"></path>
<path d="M 724 228 L 757 228" fill="none" marker-end="url(#arrow)" stroke="rgba(140,160,230,0.45)" strokeWidth="1.5"></path>
<path d="M 1020 228 L 1084 228" fill="none" marker-end="url(#arrow)" stroke="rgba(140,160,230,0.45)" strokeWidth="1.5"></path>
<path d="M 1340 228 L 1404 228" fill="none" filter="url(#glow-line)" stroke="rgba(228,228,231,0.2)" strokeWidth="4"></path>
<path className="flow-active" d="M 1340 228 L 1397 228" fill="none" marker-end="url(#arrow-active)" stroke="rgba(228,228,231,0.9)" stroke-dasharray="5 5" strokeWidth="1.5"></path>
<path d="M 1660 228 L 1724 228" fill="none" marker-end="url(#arrow)" stroke="rgba(140,160,230,0.45)" strokeWidth="1.5"></path>
<circle cx="1370" cy="228" fill="rgba(255,255,255,0.9)" filter="url(#glow-dot)" r="2.5" style={{animation: 'ping 1.8s cubic-bezier(0,0,0.2,1) infinite'}}></circle>
</svg>
<div className="nm-node absolute w-64 rounded-lg z-10 flex flex-col transition-all duration-200 cursor-default group hover:border-white/[0.15]" style={{left: '48px', top: '100px'}}>
<div className="px-3 py-2.5 flex items-center justify-between border-b border-white/[0.04]">
<div className="flex items-center gap-2.5">
<div className="nm-raised-sm w-6 h-6 rounded-md flex items-center justify-center">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:command-line-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xs text-zinc-200 mono">Prompt</h3>
<p className="text-xs text-zinc-500">Starting Point</p>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button aria-label="Configure Prompt node" className="text-zinc-500 hover:text-zinc-200 transition-all p-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" onclick="openNodeConfig('Prompt', 'Prompt Node')" title="Configure node">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>
<div className="px-3 py-2.5">
<p className="text-xs text-zinc-500 leading-relaxed">
                Ingests a prompt into the pipeline. Always the starting point of
                a new pipeline.
              </p>
</div>
<div aria-label="Connect output" className="connector-dot absolute top-1/2 -right-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
</div>
<div className="nm-node absolute w-64 rounded-lg z-10 flex flex-col transition-all duration-200 cursor-default group hover:border-white/[0.15]" style={{left: '48px', top: '260px'}}>
<div className="px-3 py-2.5 flex items-center justify-between border-b border-white/[0.04]">
<div className="flex items-center gap-2.5">
<div className="nm-raised-sm w-6 h-6 rounded-md flex items-center justify-center">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:folder-open-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xs text-zinc-200 mono">Context Ingestor</h3>
<p className="text-xs text-zinc-500">Data Injection</p>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button aria-label="Configure Context Ingestor node" className="text-zinc-500 hover:text-zinc-200 transition-all p-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" onclick="openNodeConfig('Ingestor', 'Context Ingestor')" title="Configure node">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>
<div className="px-3 py-2.5">
<p className="text-xs text-zinc-500 leading-relaxed">
                Allows specific injection of context (Atlassian links, MD files,
                schemas).
              </p>
</div>
<div aria-label="Connect output" className="connector-dot absolute top-1/2 -right-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
</div>
<div className="nm-node absolute w-64 rounded-lg z-10 flex flex-col transition-all duration-200 cursor-default group hover:border-white/[0.15]" style={{left: '404px', top: '178px'}}>
<div className="px-3 py-2.5 flex items-center justify-between border-b border-white/[0.04]">
<div className="flex items-center gap-2.5">
<div className="nm-raised-sm w-6 h-6 rounded-md flex items-center justify-center">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xs text-zinc-200 mono">MetaPrompter</h3>
<p className="text-xs text-zinc-500">Discovery Engine</p>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button aria-label="Configure MetaPrompter node" className="text-zinc-500 hover:text-zinc-200 transition-all p-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" onclick="openNodeConfig('MetaPrompter', 'MetaPrompter')" title="Configure node">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>
<div aria-label="Connect input" className="connector-dot absolute top-1/2 -left-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
<div aria-label="Connect output" className="connector-dot absolute top-1/2 -right-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
</div>
<div className="nm-node absolute w-64 rounded-lg z-10 flex flex-col transition-all duration-200 cursor-default group hover:border-white/[0.15]" style={{left: '764px', top: '178px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-lg pointer-events-none"></div>
<div className="px-3 py-2.5 flex items-center justify-between border-b border-white/[0.06] relative z-10">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{background: '#e4e4e7', boxShadow: '0 1px 4px #0a0a0d'}}>
<iconify-icon aria-hidden="true" className="text-xs text-zinc-900" icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xs text-zinc-100 mono">Planner</h3>
<p className="text-xs text-zinc-400">Plan Generation</p>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
<button aria-label="Configure Planner node" className="text-zinc-500 hover:text-zinc-200 transition-all p-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" onclick="openNodeConfig('Planner', 'Planner Node')" title="Configure node">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>
<div className="px-3 py-2.5 relative z-10 pointer-events-none">
<p className="text-xs text-zinc-400 leading-relaxed mb-2.5">
                Writes the individual plans, creating output artifacts for
                subsequent subnodes.
              </p>
<div className="flex gap-2">
<span className="nm-tag px-2 py-0.5 rounded flex items-center gap-1 text-xs text-zinc-400 border border-white/[0.02]">
<iconify-icon aria-hidden="true" className="text-xs text-blue-400" icon="solar:bolt-linear"></iconify-icon>
                  GPT-4 Turbo
                </span>
</div>
</div>
<div aria-label="Connect input" className="connector-dot absolute top-1/2 -left-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
<div aria-label="Connect output" className="connector-dot absolute top-1/2 -right-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
</div>
<div className="nm-node absolute w-64 rounded-lg z-10 flex flex-col transition-all duration-200 cursor-default group hover:border-white/[0.15]" style={{left: '1084px', top: '178px'}}>
<div className="px-3 py-2.5 flex items-center justify-between border-b border-white/[0.04]">
<div className="flex items-center gap-2.5">
<div className="nm-raised-sm w-6 h-6 rounded-md flex items-center justify-center">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:repeat-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xs text-zinc-200 mono">Iterator</h3>
<p className="text-xs text-zinc-500">Array Processing</p>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button aria-label="Configure Iterator node" className="text-zinc-500 hover:text-zinc-200 transition-all p-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" onclick="openNodeConfig('Iterator', 'Iterator Node')" title="Configure node">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>
<div className="px-3 py-2.5 relative z-10 pointer-events-none">
<p className="text-xs text-zinc-400 leading-relaxed mb-2.5">
                Loops over array outputs generated by the planner.
              </p>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs text-zinc-500 font-mono bg-white/[0.05] px-1.5 rounded border border-white/[0.02]">
                  items: 5
                </span>
<span aria-live="polite" className="text-xs text-blue-400 flex items-center gap-1">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:refresh-circle-linear"></iconify-icon>
                  In Progress
                </span>
</div>
</div>
<div aria-label="Connect input" className="connector-dot absolute top-1/2 -left-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
<div aria-label="Connect output" className="connector-dot absolute top-1/2 -right-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
</div>
<div className="nm-node-active absolute w-64 rounded-lg z-10 flex flex-col transition-all duration-200 cursor-default group border border-blue-500/[0.15]" style={{left: '1404px', top: '168px', boxShadow: '0 2px 10px #06070c, 0 1px 3px #0b0c14, 0 0 15px rgba(59,130,246,0.05)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-lg pointer-events-none"></div>
<div className="px-3 py-2.5 flex items-center justify-between border-b border-white/[0.06] relative z-10">
<div className="flex items-center gap-2.5">
<div className="nm-raised-sm w-6 h-6 rounded-md flex items-center justify-center">
<iconify-icon aria-hidden="true" className="text-xs text-blue-400" icon="solar:bot-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xs text-zinc-100 mono">Agent</h3>
<p className="text-xs text-zinc-400">Task Executor</p>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
<button aria-label="Configure Agent node" className="text-zinc-500 hover:text-zinc-200 transition-all p-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" onclick="openNodeConfig('Agent', 'Agent Settings')" title="Configure node">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>
<div className="px-3 py-3 relative z-10">
<div aria-live="polite" className="bg-[#0f1118] border border-white/[0.05] rounded p-2 mb-3 font-mono text-xs text-zinc-500 flex flex-col gap-1 overflow-hidden pointer-events-none">
<span className="text-blue-400 truncate">
                  &gt; analyzing doc_4.md
                </span>
<span className="text-zinc-300 animate-pulse">_</span>
</div>
<div className="flex flex-col gap-1.5 pointer-events-none">
<div className="flex justify-between text-xs text-zinc-500 uppercase tracking-widest font-normal">
<span>Context</span>
<span className="text-zinc-400">45%</span>
</div>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" className="w-full h-1 bg-[#0f1118] border border-white/[0.05] rounded-full overflow-hidden" role="progressbar">
<div className="h-full bg-blue-500 w-[45%] rounded-full shadow-[0_0_5px_rgba(59,130,246,0.6)]"></div>
</div>
</div>
<button className="w-full mt-3 nm-pressed px-2 py-1.5 rounded-md text-xs text-orange-400 border border-orange-500/[0.1] flex items-center justify-center gap-2 hover:bg-orange-500/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-orange-500 cursor-pointer" onclick="openNodeConfig('Agent', 'Agent Settings')">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_5px_rgba(251,146,60,0.6)]"></div>
                Awaiting Feedback
              </button>
</div>
<div aria-label="Connect input" className="connector-dot absolute top-1/2 -left-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
<div aria-label="Disconnect output" className="connector-dot-active absolute top-1/2 -right-1.5 -translate-y-1/2 z-20 cursor-pointer" role="button" tabindex="0"></div>
</div>
<div className="nm-node absolute w-64 rounded-lg z-10 flex flex-col transition-all duration-200 cursor-default group hover:border-white/[0.15]" style={{left: '1724px', top: '178px'}}>
<div className="px-3 py-2.5 flex items-center justify-between border-b border-white/[0.04]">
<div className="flex items-center gap-2.5">
<div className="nm-raised-sm w-6 h-6 rounded-md flex items-center justify-center">
<iconify-icon aria-hidden="true" className="text-xs text-zinc-300" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xs text-zinc-200 mono">MD Exporter</h3>
<p className="text-xs text-zinc-500">Document Capture</p>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button aria-label="Configure Output node" className="text-zinc-500 hover:text-zinc-200 transition-all p-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" onclick="openNodeConfig('Output', 'MD Exporter')" title="Configure node">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>
<div className="px-3 py-2.5 relative z-10 pointer-events-none">
<p className="text-xs text-zinc-400 leading-relaxed mb-2.5">
                Captures final planning artifacts as Markdown documents.
              </p>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs text-zinc-500 font-mono bg-white/[0.05] px-1.5 rounded border border-white/[0.02]">
                  path: /outputs
                </span>
</div>
</div>
<div aria-label="Connect input" className="connector-dot absolute top-1/2 -left-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
<div aria-label="Connect output" className="connector-dot absolute top-1/2 -right-1.5 -translate-y-1/2 z-20 hover:scale-125 transition-transform cursor-pointer" role="button" tabindex="0"></div>
</div>
</div>
</div>
<div className="absolute bottom-5 right-5 z-20 pointer-events-none">
<div className="nm-sidebar px-4 py-2.5 rounded-lg border border-white/[0.05] flex items-center gap-4 text-xs shadow-2xl pointer-events-auto">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-normal">
              Nodes
            </span>
<span className="text-zinc-200 mono">7</span>
</div>
<div aria-hidden="true" className="w-px h-5 bg-white/[0.06]"></div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-normal">
              Variables
            </span>
<span className="text-zinc-200 mono">14</span>
</div>
<div aria-hidden="true" className="w-px h-5 bg-white/[0.06]"></div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-normal">
              Latency
            </span>
<span className="text-green-400 mono">~4.8s</span>
</div>
</div>
</div>
</main>

<div aria-labelledby="globals-title" aria-modal="true" className="fixed inset-0 z-[700] hidden items-center justify-center bg-[#0a0b10]/70 backdrop-blur-sm transition-opacity opacity-0 duration-200" id="globals-modal" role="dialog">
<div className="nm-sidebar w-[500px] max-h-[85vh] h-[500px] rounded-xl shadow-2xl flex flex-col border border-white/[0.08] transform scale-95 transition-transform duration-200 overscroll-contain" id="globals-modal-content">
<div className="px-4 py-3 flex items-center justify-between border-b border-white/[0.05] shrink-0 bg-[#12141c] rounded-t-xl">
<div className="flex items-center gap-3">
<div aria-hidden="true" className="nm-raised-sm w-7 h-7 rounded-md flex items-center justify-center border border-white/[0.05]">
<iconify-icon className="text-sm text-zinc-300" icon="solar:database-linear"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-zinc-100 tracking-tight" id="globals-title">
              Global Variables
            </h2>
</div>
<button aria-label="Close globals" className="nm-btn w-6 h-6 rounded flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-all outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="closeGlobalVariables()">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto bg-[#13151f] p-6 rounded-b-xl flex flex-col gap-4">
<div className="flex justify-between items-end mb-2">
<p className="text-xs text-zinc-500">
              Define variables accessible across all nodes in the pipeline.
            </p>
<button className="px-3 py-1.5 rounded-md text-xs text-zinc-900 font-normal transition-all hover:bg-white flex items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-white" onclick="showToast('Variable added', 'success')" style={{background: '#e4e4e7', boxShadow: '0 1px 4px #0a0a0d'}}>
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon>
              Add Variable
            </button>
</div>
<div className="flex flex-col gap-3">
<div className="flex gap-2 items-start nm-inset p-3 rounded-lg border border-white/[0.02]">
<div className="flex-1 flex flex-col gap-2">
<input className="nm-input w-full px-3 py-2 rounded-md text-xs text-zinc-200 focus:outline-none border border-transparent focus:border-white/[0.15] font-mono" placeholder="Key" type="text" value="task_name"/>
<input className="nm-input w-full px-3 py-2 rounded-md text-xs text-zinc-200 focus:outline-none border border-transparent focus:border-white/[0.15]" placeholder="Value" type="text" value="New Product Launch"/>
</div>
<button className="w-8 h-8 rounded flex items-center justify-center text-zinc-500 hover:text-red-400 hover:bg-red-500/[0.1] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" title="Delete">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<div className="flex gap-2 items-start nm-inset p-3 rounded-lg border border-white/[0.02]">
<div className="flex-1 flex flex-col gap-2">
<input className="nm-input w-full px-3 py-2 rounded-md text-xs text-zinc-200 focus:outline-none border border-transparent focus:border-white/[0.15] font-mono" placeholder="Key" type="text" value="audience"/>
<input className="nm-input w-full px-3 py-2 rounded-md text-xs text-zinc-200 focus:outline-none border border-transparent focus:border-white/[0.15]" placeholder="Value" type="text" value="Enterprise IT Managers"/>
</div>
<button className="w-8 h-8 rounded flex items-center justify-center text-zinc-500 hover:text-red-400 hover:bg-red-500/[0.1] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" title="Delete">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
<div aria-labelledby="settings-title" aria-modal="true" className="fixed inset-0 z-[700] hidden items-center justify-center bg-[#0a0b10]/70 backdrop-blur-sm transition-opacity opacity-0 duration-200" id="settings-modal" role="dialog">
<div className="nm-sidebar w-[680px] max-h-[85vh] h-[540px] rounded-xl shadow-2xl flex flex-col border border-white/[0.08] transform scale-95 transition-transform duration-200 overscroll-contain" id="settings-modal-content">
<div className="px-4 py-3 flex items-center justify-between border-b border-white/[0.05] shrink-0 bg-[#12141c] rounded-t-xl">
<div className="flex items-center gap-3">
<div aria-hidden="true" className="nm-raised-sm w-7 h-7 rounded-md flex items-center justify-center border border-white/[0.05]">
<iconify-icon className="text-sm text-zinc-300" icon="solar:settings-minimalistic-linear"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-zinc-100 tracking-tight" id="settings-title">
              Workspace Settings
            </h2>
</div>
<button aria-label="Close settings" className="nm-btn w-6 h-6 rounded flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-all outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="closeSettings()">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-1 overflow-hidden">
<div className="w-44 bg-[#0f1118] border-r border-white/[0.05] p-3 flex flex-col gap-1 shrink-0 rounded-bl-xl z-10">
<button className="w-full text-left px-3 py-2 text-xs font-medium rounded-md bg-white/[0.05] text-zinc-200 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" id="st-tab-api-keys" onclick="switchSettingsTab('api-keys')">
              API Keys
            </button>
<button className="w-full text-left px-3 py-2 text-xs font-normal text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02] rounded-md transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" id="st-tab-general" onclick="switchSettingsTab('general')">
              General
            </button>
<button className="w-full text-left px-3 py-2 text-xs font-normal text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02] rounded-md transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" id="st-tab-advanced" onclick="switchSettingsTab('advanced')">
              Advanced
            </button>
</div>
<div className="flex-1 overflow-y-auto bg-[#13151f] p-6 rounded-br-xl">
<div className="flex flex-col gap-6" id="st-panel-api-keys">
<div>
<h3 className="text-sm font-medium text-zinc-200 mb-1 tracking-tight">
                  Provider Credentials
                </h3>
<p className="text-xs text-zinc-500 mb-4">
                  Keys are stored locally in your browser and never transmitted
                  to our servers.
                </p>
</div>
<div className="flex flex-col gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400">OpenAI API Key</label>
<div className="nm-input border border-white/[0.04] rounded-md flex items-center focus-within:border-white/[0.15] transition-colors pr-1">
<input autocomplete="off" className="w-full bg-transparent px-3 py-2 text-xs text-zinc-200 font-mono focus:outline-none" spellcheck="false" type="password" value="sk-proj-xxxxxxxxxxxxxxxxxxxx"/>
<button aria-label="Toggle visibility" className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-zinc-300 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="togglePassword(this)">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:eye-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400">Anthropic API Key</label>
<div className="nm-input border border-white/[0.04] rounded-md flex items-center focus-within:border-white/[0.15] transition-colors pr-1">
<input autocomplete="off" className="w-full bg-transparent px-3 py-2 text-xs text-zinc-200 font-mono focus:outline-none" placeholder="sk-ant-..." spellcheck="false" type="password"/>
<button aria-label="Toggle visibility" className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-zinc-300 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="togglePassword(this)">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:eye-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400">Pinecone API Key</label>
<div className="nm-input border border-white/[0.04] rounded-md flex items-center focus-within:border-white/[0.15] transition-colors pr-1">
<input autocomplete="off" className="w-full bg-transparent px-3 py-2 text-xs text-zinc-200 font-mono focus:outline-none" placeholder="pc-..." spellcheck="false" type="password"/>
<button aria-label="Toggle visibility" className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-zinc-300 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="togglePassword(this)">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:eye-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 flex">
<button className="px-4 py-1.5 rounded-md text-xs text-zinc-900 font-normal hover:bg-white transition-colors flex items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-white" onclick="showToast('API Keys saved successfully.', 'success')" style={{background: '#e4e4e7', boxShadow: '0 1px 4px #0a0a0d'}}>
                  Save Keys
                </button>
</div>
</div>
<div className="hidden flex-col gap-6" id="st-panel-general">
<div>
<h3 className="text-sm font-medium text-zinc-200 mb-1 tracking-tight">
                  General Preferences
                </h3>
<p className="text-xs text-zinc-500 mb-4">
                  Manage workspace behavior and interface settings.
                </p>
</div>
<div className="flex flex-col gap-4">
<button className="w-full flex items-center justify-between nm-inset p-3 rounded-lg border border-white/[0.02] text-left outline-none focus-visible:border-white/[0.15] group" onclick="const t = this.querySelector('.custom-toggle'); t.classList.toggle('bg-blue-500'); t.classList.toggle('bg-white/[0.1]'); t.firstElementChild.classList.toggle('translate-x-4');">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-zinc-300 group-hover:text-zinc-200 transition-colors">
                      Auto-save Pipeline
                    </span>
<span className="text-[10px] text-zinc-500">
                      Automatically save changes every 30 seconds
                    </span>
</div>
<div aria-hidden="true" className="custom-toggle w-8 h-4 bg-blue-500 rounded-full relative shadow-inner flex items-center shrink-0 transition-colors pointer-events-none">
<div className="w-3 h-3 bg-white rounded-full shadow-sm mx-0.5 transition-transform translate-x-4"></div>
</div>
</button>
<button className="w-full flex items-center justify-between nm-inset p-3 rounded-lg border border-white/[0.02] text-left outline-none focus-visible:border-white/[0.15] group" onclick="const t = this.querySelector('.custom-toggle'); t.classList.toggle('bg-blue-500'); t.classList.toggle('bg-white/[0.1]'); t.firstElementChild.classList.toggle('translate-x-4');">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-zinc-300 group-hover:text-zinc-200 transition-colors">
                      Hardware Acceleration
                    </span>
<span className="text-[10px] text-zinc-500">
                      Use GPU for canvas rendering
                    </span>
</div>
<div aria-hidden="true" className="custom-toggle w-8 h-4 bg-blue-500 rounded-full relative shadow-inner flex items-center shrink-0 transition-colors pointer-events-none">
<div className="w-3 h-3 bg-white rounded-full shadow-sm mx-0.5 transition-transform translate-x-4"></div>
</div>
</button>
</div>
</div>
<div className="hidden flex-col gap-6" id="st-panel-advanced">
<div>
<h3 className="text-sm font-medium text-zinc-200 mb-1 tracking-tight">
                  Danger Zone
                </h3>
<p className="text-xs text-zinc-500 mb-4">
                  Destructive actions and deep resets.
                </p>
</div>
<div className="border border-red-500/[0.15] bg-red-500/[0.02] rounded-lg p-4 flex flex-col gap-5">
<div className="flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-zinc-300">
                      Clear Cache &amp; Storage
                    </span>
<span className="text-[10px] text-zinc-500">
                      Removes all local drafts and minor settings.
                    </span>
</div>
<button className="px-3 py-1.5 rounded-md text-xs text-zinc-300 border border-white/[0.1] hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20 whitespace-nowrap ml-4" onclick="showToast('Cache cleared successfully.', 'success')">
                    Clear Cache
                  </button>
</div>
<div aria-hidden="true" className="h-px w-full bg-red-500/[0.1]"></div>
<div className="flex items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-red-400">
                      Reset to Factory Defaults
                    </span>
<span className="text-[10px] text-zinc-500">
                      Reverts all settings, drops unsaved pipelines and API
                      keys.
                    </span>
</div>
<button className="px-3 py-1.5 rounded-md text-xs text-red-400 border border-red-500/[0.3] bg-red-500/[0.05] hover:bg-red-500/[0.1] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-red-500 whitespace-nowrap ml-4" onclick="showToast('Settings reset to defaults.', 'error'); closeSettings();">
                    Factory Reset
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div aria-labelledby="nc-title" aria-modal="true" className="fixed inset-0 z-[600] hidden items-center justify-center bg-[#0a0b10]/70 backdrop-blur-sm transition-opacity opacity-0 duration-200" id="node-config-modal" role="dialog">
<div className="nm-sidebar w-[680px] max-h-[85vh] h-[640px] rounded-xl shadow-2xl flex flex-col border border-white/[0.08] transform scale-95 transition-transform duration-200 overscroll-contain" id="node-config-modal-content">
<div className="px-4 py-3 flex items-center justify-between border-b border-white/[0.05] shrink-0 bg-[#12141c] rounded-t-xl">
<div className="flex items-center gap-3">
<div aria-hidden="true" className="nm-raised-sm w-7 h-7 rounded-md flex items-center justify-center border border-white/[0.05]" id="nc-icon-wrapper">
<iconify-icon className="text-sm text-zinc-300" icon="solar:settings-minimalistic-linear" id="nc-icon"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium text-zinc-100 tracking-tight" id="nc-title">
                Node Settings
              </h2>
<div aria-live="polite" className="flex items-center gap-1.5 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.6)] animate-pulse"></span>
<span className="text-xs text-zinc-500 font-mono tracking-wide uppercase">
                  WS Active
                </span>
</div>
</div>
</div>
<button aria-label="Close settings modal" className="nm-btn w-6 h-6 rounded flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-all outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="closeNodeConfig()">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="px-4 py-2 border-b border-white/[0.05] shrink-0 flex items-center gap-4 bg-[#0f1118] overflow-x-auto overscroll-contain">
<button className="whitespace-nowrap text-xs font-normal text-zinc-200 border-b-2 border-blue-500 pb-1 -mb-2 transition-all outline-none focus-visible:text-blue-300" id="nct-tab-config" onclick="switchNodeConfigTab('config')">
            Configuration
          </button>
<button className="whitespace-nowrap text-xs font-normal text-zinc-500 border-b-2 border-transparent hover:text-zinc-300 pb-1 -mb-2 transition-all outline-none focus-visible:text-zinc-300" id="nct-tab-output" onclick="switchNodeConfigTab('output')">
            Output Viewer
          </button>
<button className="whitespace-nowrap text-xs font-normal text-zinc-500 border-b-2 border-transparent hover:text-zinc-300 pb-1 -mb-2 transition-all outline-none focus-visible:text-zinc-300" id="nct-tab-monitor" onclick="switchNodeConfigTab('monitor')">
            Monitoring
          </button>
<button className="hidden whitespace-nowrap text-xs font-normal text-orange-400 border-b-2 border-transparent hover:text-orange-300 pb-1 -mb-2 transition-all items-center gap-1.5 outline-none focus-visible:text-orange-300" id="nct-tab-agent" onclick="switchNodeConfigTab('agent')">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_5px_rgba(251,146,60,0.6)]"></div>
            Live Agent Console
          </button>
<button className="hidden whitespace-nowrap text-xs font-normal text-purple-400 border-b-2 border-transparent hover:text-purple-300 pb-1 -mb-2 transition-all items-center gap-1.5 outline-none focus-visible:text-purple-300" id="nct-tab-review" onclick="switchNodeConfigTab('review')">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:git-pull-request-linear"></iconify-icon>
            Code Review
          </button>
</div>
<div className="flex-1 overflow-y-auto overscroll-contain relative bg-[#13151f] rounded-b-xl flex flex-col">
<div className="p-5 flex flex-col gap-6" id="nc-panel-config">
<div className="hidden flex-col gap-6" id="nc-spec-Prompt">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center mb-1">
<label className="text-xs text-zinc-400" htmlFor="system-instruction">
                    System Instruction
                  </label>
<div className="flex items-center gap-3">
<div className="relative flex items-center group">
<select aria-label="Version selection" className="nm-pressed px-2 py-1 rounded text-xs text-zinc-300 border border-white/[0.05] outline-none focus-visible:border-white/[0.2] appearance-none cursor-pointer pr-6 bg-transparent">
<option>v3 (Latest)</option>
<option>v2</option>
<option>v1</option>
</select>
<iconify-icon aria-hidden="true" className="text-xs text-zinc-500 absolute right-2 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors px-2 py-1 bg-blue-500/[0.08] hover:bg-blue-500/[0.15] rounded border border-blue-500/[0.1] outline-none focus-visible:ring-1 focus-visible:ring-blue-500" onclick="openTemplateModal()">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:book-linear"></iconify-icon>
                      Load Template
                    </button>
</div>
</div>
<div className="flex flex-col nm-input border border-white/[0.04] rounded-md overflow-hidden focus-within:border-white/[0.15] transition-colors">
<div aria-label="Formatting tools" className="flex items-center bg-[#12141c] border-b border-white/[0.05] px-2 py-1.5 gap-1.5" role="toolbar">
<button className="text-xs text-zinc-200 px-2 py-0.5 bg-white/[0.05] rounded shadow-sm border border-white/[0.02] outline-none focus-visible:ring-1 focus-visible:ring-white/20">
                      Edit
                    </button>
<button className="text-xs text-zinc-500 px-2 py-0.5 hover:text-zinc-300 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded">
                      Preview
                    </button>
<div aria-hidden="true" className="w-px h-3 bg-white/[0.1] mx-1"></div>
<button aria-label="Bold text" className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:text-bold-linear"></iconify-icon>
</button>
<button aria-label="Italic text" className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:text-italic-linear"></iconify-icon>
</button>
<button aria-label="Code block" className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:code-linear"></iconify-icon>
</button>
<button aria-label="Unordered list" className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:list-linear"></iconify-icon>
</button>
</div>
<textarea className="w-full bg-transparent px-3 py-3 text-xs text-zinc-300 font-mono resize-none focus:outline-none min-h-[80px]" id="system-instruction" placeholder="System role definition…" spellcheck="false">
You are an expert AI architect...</textarea>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400 mb-1" htmlFor="user-prompt">
                  User Prompt
                  <span className="text-zinc-600 text-xs ml-2">
                    Use {{var}} for variables
                  </span>
</label>
<div className="flex flex-col nm-input border border-white/[0.04] rounded-md overflow-hidden focus-within:border-white/[0.15] transition-colors">
<div aria-label="Formatting tools" className="flex items-center bg-[#12141c] border-b border-white/[0.05] px-2 py-1.5 gap-1.5" role="toolbar">
<button className="text-xs text-zinc-200 px-2 py-0.5 bg-white/[0.05] rounded shadow-sm border border-white/[0.02] outline-none focus-visible:ring-1 focus-visible:ring-white/20">
                      Edit
                    </button>
<button className="text-xs text-zinc-500 px-2 py-0.5 hover:text-zinc-300 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded">
                      Preview
                    </button>
<div aria-hidden="true" className="w-px h-3 bg-white/[0.1] mx-1"></div>
<button aria-label="Bold text" className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:text-bold-linear"></iconify-icon>
</button>
<button aria-label="Italic text" className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:text-italic-linear"></iconify-icon>
</button>
<button aria-label="Code block" className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:code-linear"></iconify-icon>
</button>
<button aria-label="Unordered list" className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-white/[0.05] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:list-linear"></iconify-icon>
</button>
</div>
<textarea className="w-full bg-transparent px-3 py-3 text-xs text-zinc-300 font-mono resize-none focus:outline-none min-h-[120px]" id="user-prompt" placeholder="Enter prompt markdown here…" spellcheck="false">
Create a comprehensive project plan for {{task_name}} targeting {{audience}}.</textarea>
</div>
</div>
</div>
<div className="hidden flex-col gap-5" id="nc-spec-Ingestor">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400" htmlFor="data-source-select">
                  Data Source
                </label>
<select className="nm-input w-full px-3 py-2 rounded-md text-xs text-zinc-200 border border-transparent focus:outline-none focus-visible:border-white/[0.15] appearance-none cursor-pointer" id="data-source-select">
<option>Vector Database (Pinecone)</option>
<option>Static URL / Markdown</option>
<option>Confluence Workspace</option>
</select>
</div>
</div>
<div className="hidden flex-col gap-5" id="nc-spec-Iterator">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400" htmlFor="target-array">
                  Target Array Variable
                </label>
<input autocomplete="off" className="nm-input w-full px-3 py-2 rounded-md text-xs text-zinc-200 focus:outline-none border border-transparent focus:border-white/[0.15] transition-colors font-mono" id="target-array" spellcheck="false" type="text" value="{{planner_tasks}}"/>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<label className="text-xs text-zinc-400" htmlFor="concurrency-limit">
                    Concurrency Limit
                  </label>
<span aria-hidden="true" className="text-xs text-zinc-500 mono bg-[#0d0f17] px-1.5 rounded">
                    3
                  </span>
</div>
<input className="w-full h-1 mt-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" id="concurrency-limit" max="10" min="1" step="1" type="range" value="3"/>
</div>
</div>
<div className="hidden flex-col gap-5" id="nc-spec-Model">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400 font-normal tracking-wide">
                  LLM Engine Selection
                </label>
<div aria-label="Select LLM Engine" className="grid grid-cols-2 gap-2" role="group">
<button className="nm-pressed flex items-center justify-center py-2.5 rounded-lg border border-blue-500/[0.2] gap-2 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-blue-500">
<iconify-icon aria-hidden="true" className="text-sm text-blue-400" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs text-zinc-200">GPT-4 Turbo</span>
</button>
<button className="nm-inset flex items-center justify-center py-2.5 rounded-lg border border-transparent hover:border-white/[0.05] gap-2 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-sm text-orange-400" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs text-zinc-400">Claude 3.5 Sonnet</span>
</button>
</div>
</div>
<div aria-hidden="true" className="h-px w-full bg-white/[0.04]"></div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<label className="text-xs text-zinc-400" htmlFor="temp-slider">
                    Temperature
                  </label>
<span aria-hidden="true" className="text-xs text-zinc-500 mono bg-[#0d0f17] px-1.5 rounded">
                    0.7
                  </span>
</div>
<input className="w-full h-1 mt-1 outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded" id="temp-slider" max="2" min="0" step="0.1" type="range" value="0.7"/>
</div>
</div>
<div className="hidden flex-col gap-5" id="nc-spec-Output">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400" htmlFor="output-filename">
                  File Name Pattern
                </label>
<input autocomplete="off" className="nm-input w-full px-3 py-2 rounded-md text-xs text-zinc-200 focus:outline-none border border-transparent focus:border-white/[0.15] transition-colors font-mono" id="output-filename" spellcheck="false" type="text" value="plan_output_{{run_id}}.md"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400" htmlFor="output-dir">
                  Export Directory
                </label>
<input autocomplete="off" className="nm-input w-full px-3 py-2 rounded-md text-xs text-zinc-200 focus:outline-none border border-transparent focus:border-white/[0.15] transition-colors font-mono" id="output-dir" spellcheck="false" type="text" value="/workspace/docs/plans/"/>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-300">
                  Append to existing file
                </span>
<button className="w-8 h-4 bg-white/[0.1] rounded-full relative shadow-inner flex items-center shrink-0 transition-colors cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="this.classList.toggle('bg-blue-500'); this.classList.toggle('bg-white/[0.1]'); this.firstElementChild.classList.toggle('translate-x-4');">
<div className="w-3 h-3 bg-white rounded-full shadow-sm mx-0.5 transition-transform"></div>
</button>
</div>
</div>
<div className="hidden flex-col gap-5" id="nc-spec-Generic">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400" htmlFor="node-description">
                  Node Description (Metadata)
                </label>
<input autocomplete="off" className="nm-input w-full px-3 py-2 rounded-md text-xs text-zinc-200 focus:outline-none border border-transparent focus:border-white/[0.15] transition-colors" id="node-description" type="text" value="Processes incoming streams."/>
</div>
</div>
</div>
<div className="hidden p-5 flex-col gap-4 h-full" id="nc-panel-output">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.6)]"></div>
<h3 className="text-xs font-medium text-zinc-200 tracking-tight">
                  Structured Response
                </h3>
<span className="text-xs text-zinc-500 font-mono ml-2">
                  from run_9a2b4f
                </span>
</div>
<div className="flex bg-[#0f1118] border border-white/[0.05] rounded p-0.5">
<button className="px-2.5 py-1 text-xs text-zinc-200 bg-white/[0.05] rounded shadow-sm flex items-center gap-1.5 outline-none focus-visible:ring-1 focus-visible:ring-white/20">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:document-text-linear"></iconify-icon>
                  Markdown
                </button>
<button className="px-2.5 py-1 text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:code-square-linear"></iconify-icon>
                  JSON Payload
                </button>
</div>
</div>
<div className="flex-1 nm-input border border-white/[0.02] rounded-md p-5 overflow-y-auto font-mono text-xs text-zinc-300 leading-relaxed shadow-inner" tabindex="0">
<span className="text-blue-400 font-medium">
                # Output Generation Blueprint
              </span>
<br/>
<br/>
<span className="text-zinc-400 font-normal">
                **Phase 1: Initial Discovery**
              </span>
<br/>
              - Analyzed context constraints and pipeline variables.
              <br/>
              - Extracted key references:
              <span className="text-orange-300 bg-orange-500/[0.08] px-1 rounded">
                `task_name`
              </span>
              ,
              <span className="text-orange-300 bg-orange-500/[0.08] px-1 rounded">
                `audience`
              </span>
              .
              <br/>
<br/>
<span className="text-zinc-400 font-normal">
                **Phase 2: Execution Path**
              </span>
<br/>
              1. Generated primary blueprint artifacts.
              <br/>
              2. Validated against internal schema requirements.
              <br/>
              3. Stripped extraneous data blocks.
              <br/>
<br/>
<div className="mt-4 p-3 border border-green-500/[0.1] bg-green-500/[0.02] rounded-md flex gap-2">
<iconify-icon aria-hidden="true" className="text-base text-green-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-300">
<span className="text-green-400 font-normal">
                    System check passed.
                  </span>
                  Ready for downstream agentic processing.
                </span>
</div>
</div>
</div>
<div className="hidden p-5 flex-col gap-5" id="nc-panel-monitor">
<div className="grid grid-cols-3 gap-3">
<div className="nm-inset p-3 rounded-lg border border-white/[0.02] flex flex-col gap-1">
<span className="text-xs uppercase tracking-wider text-zinc-500 font-normal flex items-center gap-1.5">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:clock-circle-linear"></iconify-icon>
                  Avg Latency
                </span>
<div className="text-lg text-zinc-100 font-normal mono mt-1 tracking-tight">
                  1.24s
                </div>
<span className="text-xs text-green-400 flex items-center gap-0.5">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:graph-down-linear"></iconify-icon>
                  12% faster
                </span>
</div>
<div className="nm-inset p-3 rounded-lg border border-white/[0.02] flex flex-col gap-1">
<span className="text-xs uppercase tracking-wider text-zinc-500 font-normal flex items-center gap-1.5">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:wad-of-money-linear"></iconify-icon>
                  Tokens / Run
                </span>
<div className="text-lg text-zinc-100 font-normal mono mt-1 tracking-tight">
                  4.2k
                </div>
<span className="text-xs text-zinc-500 flex items-center gap-0.5">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
                  Stable
                </span>
</div>
<div className="nm-inset p-3 rounded-lg border border-white/[0.02] flex flex-col gap-1" title="Estimated amount calculated in client, not final billing.">
<span className="text-xs uppercase tracking-wider text-zinc-500 font-normal flex items-center gap-1.5">
<iconify-icon aria-hidden="true" className="text-xs" icon="solar:dollar-minimalistic-linear"></iconify-icon>
                  Est. Cost
                </span>
<div className="text-lg text-zinc-100 font-normal mono mt-1 tracking-tight">
                  $0.04
                </div>
<span className="text-xs text-zinc-500 mt-0.5 leading-tight italic">
                  Client-side estimate
                </span>
</div>
</div>
<div aria-hidden="true" className="h-px w-full bg-white/[0.04]"></div>
<div>
<h3 className="text-xs font-medium text-zinc-200 mb-3 tracking-tight">
                Recent Executions
              </h3>
<div className="flex flex-col gap-2">
<button className="w-full flex items-center justify-between p-2.5 nm-raised rounded-md border border-white/[0.03] hover:border-white/[0.1] transition-colors cursor-pointer group outline-none focus-visible:border-white/[0.2]">
<div className="flex items-center gap-3">
<div aria-hidden="true" className="w-2 h-2 rounded-full bg-green-500" style={{boxShadow: '0 0 4px rgba(34,197,94,0.5)'}}></div>
<div className="flex flex-col text-left">
<span className="text-xs text-zinc-300 mono">run_9a2b4f</span>
<span className="text-xs text-zinc-500">2 mins ago</span>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-400 mono">
<span>1.1s</span>
<span className="text-blue-400/80 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                      View Details
                      <iconify-icon aria-hidden="true" className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</button>
</div>
</div>
</div>
<div className="hidden p-5 flex-col gap-4 h-full" id="nc-panel-agent">
<div className="nm-inset p-3 rounded-lg border border-white/[0.02] flex flex-col gap-2 shrink-0">
<div className="flex justify-between items-center text-xs text-zinc-400">
<span className="uppercase tracking-wider font-normal">
                  Context Window Usage
                </span>
<span className="font-mono text-zinc-300">
                  14,240 / 32,768
                  <span className="text-zinc-500 ml-1 text-[10px]">(43%)</span>
</span>
</div>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" className="w-full h-1.5 bg-[#0f1118] border border-white/[0.05] rounded-full overflow-hidden relative" role="progressbar">
<div className="h-full bg-blue-500 w-[43%] rounded-full relative">
<div className="absolute inset-0 bg-white/[0.2] animate-pulse"></div>
</div>
</div>
</div>
<div aria-atomic="false" aria-live="polite" className="flex-1 nm-inset border border-white/[0.02] rounded-lg p-4 overflow-y-auto overscroll-contain flex flex-col gap-4 shadow-inner">
<div className="text-xs font-mono text-zinc-500 leading-relaxed">
<span className="text-blue-400 opacity-70">[10:24:01]</span>
                Agent initialized on subtask id:82.
                <br/>
<span className="text-blue-400 opacity-70">[10:24:02]</span>
                Ingesting iterator payload (item 1/5)…
                <br/>
<span className="text-blue-400 opacity-70">[10:24:05]</span>
                Querying internal dataset…
                <br/>
<span className="text-blue-400 opacity-70">[10:24:07]</span>
                Halting execution for human-in-the-loop review.
              </div>
<div className="bg-[#1a1d29] border border-orange-500/[0.2] p-3 rounded-lg flex flex-col gap-2 shadow-sm mr-8 relative">
<div aria-hidden="true" className="absolute -left-1 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-orange-500 rounded-full"></div>
<div className="flex items-center gap-2 text-xs text-orange-400 mb-1 ml-1">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:bot-linear"></iconify-icon>
<span className="font-medium tracking-tight">
                    Agent Feedback Required
                  </span>
</div>
<p className="text-xs text-zinc-200 leading-relaxed ml-1">
                  I encountered an ambiguous schema reference in the user data
                  ("id" could refer to user_id or transaction_id). Which one
                  should I map this to for the final database push?
                </p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 font-mono mt-1">
<div aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
                Waiting for user input…
              </div>
</div>
<div className="nm-input border border-white/[0.04] rounded-lg p-1.5 flex items-center gap-2 focus-within:border-white/[0.15] transition-colors shrink-0">
<input aria-label="Terminal input" autocomplete="off" className="flex-1 bg-transparent border-none text-xs text-zinc-200 px-3 py-1.5 focus:outline-none placeholder-zinc-600" placeholder="Type your instruction to unblock the agent…" spellcheck="false" type="text"/>
<button aria-label="Send instruction" className="w-8 h-8 nm-btn rounded flex items-center justify-center text-zinc-400 hover:text-white transition-colors shrink-0 outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="showToast('Answer submitted to agent.', 'success'); document.querySelector('#nc-panel-agent input').value=''">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</div>
<div className="hidden p-5 flex-col gap-4 h-full bg-[#13151f]" id="nc-panel-review">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-zinc-200 tracking-tight flex items-center gap-2">
<iconify-icon className="text-sm text-purple-400" icon="solar:git-pull-request-linear"></iconify-icon>
                Pending Changes
              </h3>
<div className="flex gap-2">
<button className="px-2.5 py-1 text-xs text-red-400 bg-red-500/[0.05] hover:bg-red-500/[0.1] border border-red-500/[0.1] rounded transition-colors" onclick="showToast('Changes rejected', 'error')">
                  Reject
                </button>
<button className="px-2.5 py-1 text-xs text-green-400 bg-green-500/[0.05] hover:bg-green-500/[0.1] border border-green-500/[0.1] rounded transition-colors" onclick="showToast('Changes approved', 'success')">
                  Approve
                </button>
</div>
</div>
<div className="flex-1 nm-inset border border-white/[0.02] rounded-lg overflow-hidden flex flex-col font-mono text-[11px] leading-relaxed relative">
<div className="flex items-center justify-between px-3 py-2 bg-[#0f1118] border-b border-white/[0.05]">
<span className="text-zinc-400">src/agent.js</span>
</div>
<div className="flex-1 overflow-y-auto p-3">
<div className="flex text-zinc-500">
<span className="w-8 select-none opacity-50">12</span>
<span className="text-zinc-400">
                    function processData(data) {
                  </span>
</div>
<div className="flex text-zinc-500">
<span className="w-8 select-none opacity-50">13</span>
<span className="text-zinc-400">
                    // Analyze context constraints
                  </span>
</div>
<div className="flex text-red-400 bg-red-500/[0.05]">
<span className="w-8 select-none opacity-50 text-red-400">-</span>
<span>return data.map(item =&gt; item.value);</span>
</div>
<div className="flex text-green-400 bg-green-500/[0.05]">
<span className="w-8 select-none opacity-50 text-green-400">
                    +
                  </span>
<span>return data.map(item =&gt; ({</span>
</div>
<div className="flex text-green-400 bg-green-500/[0.05]">
<span className="w-8 select-none opacity-50 text-green-400">
                    +
                  </span>
<span>value: item.value,</span>
</div>
<div className="flex text-green-400 bg-green-500/[0.05]">
<span className="w-8 select-none opacity-50 text-green-400">
                    +
                  </span>
<span>timestamp: Date.now()</span>
</div>
<div className="flex text-green-400 bg-green-500/[0.05]">
<span className="w-8 select-none opacity-50 text-green-400">
                    +
                  </span>
<span>}));</span>
</div>
<div className="flex text-zinc-500">
<span className="w-8 select-none opacity-50">14</span>
<span className="text-zinc-400">}</span>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5 shrink-0">
<label className="text-xs text-zinc-400">Suggestions / Amends</label>
<div className="flex gap-2">
<input className="nm-input flex-1 px-3 py-2 rounded-md text-xs text-zinc-200 focus:outline-none border border-transparent focus:border-white/[0.15] transition-colors" placeholder="E.g., Ensure timestamp is ISO formatted..." type="text"/>
<button className="nm-btn px-4 py-2 rounded-md text-xs text-zinc-200 border border-white/[0.05] hover:bg-white/[0.05] transition-colors" onclick="showToast('Feedback sent to agent', 'success')">
                  Request Changes
                </button>
</div>
</div>
</div>
<div className="mt-auto sticky bottom-0 left-0 right-0 p-4 border-t border-white/[0.05] bg-[#12141c]/90 backdrop-blur flex items-center justify-between shrink-0" id="nc-footer">
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:database-linear"></iconify-icon>
<span>Pushes to PostgreSQL via WS</span>
</div>
<div className="flex gap-2">
<button className="nm-btn px-4 py-1.5 rounded-md text-xs text-zinc-400 hover:text-zinc-200 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="closeNodeConfig()">
                Cancel
              </button>
<button className="px-4 py-1.5 rounded-md text-xs text-zinc-900 font-normal hover:bg-white transition-colors flex items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#12141c]" onclick="closeNodeConfig(); showToast('Pushed config to database.', 'success')" style={{background: '#e4e4e7', boxShadow: '0 1px 4px #0a0a0d'}}>
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:cloud-upload-linear"></iconify-icon>
                Push to DB
              </button>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="template-title" aria-modal="true" className="fixed inset-0 z-[750] hidden items-center justify-center bg-[#0a0b10]/70 backdrop-blur-sm transition-opacity opacity-0 duration-200" id="template-modal" role="dialog">
<div className="nm-sidebar w-[500px] max-h-[80vh] flex flex-col rounded-xl shadow-2xl border border-white/[0.08] transform scale-95 transition-transform duration-200 overscroll-contain" id="template-modal-content">
<div className="px-4 py-3 flex items-center justify-between border-b border-white/[0.05] shrink-0 bg-[#12141c] rounded-t-xl">
<div className="flex items-center gap-3">
<div className="nm-raised-sm w-7 h-7 rounded-md flex items-center justify-center border border-white/[0.05]">
<iconify-icon aria-hidden="true" className="text-sm text-zinc-300" icon="solar:book-linear"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-zinc-100 tracking-tight" id="template-title">
              Load Prompt Template
            </h2>
</div>
<button aria-label="Close templates" className="nm-btn w-6 h-6 rounded flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-all outline-none focus-visible:ring-1 focus-visible:ring-white/20" onclick="closeTemplateModal()">
<iconify-icon aria-hidden="true" className="text-sm" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="px-4 py-3 border-b border-white/[0.05] bg-[#13151f]">
<div className="relative">
<iconify-icon aria-hidden="true" className="text-sm text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2" icon="solar:magnifer-linear"></iconify-icon>
<input autocomplete="off" className="nm-input w-full pl-8 pr-3 py-1.5 rounded-md text-xs text-zinc-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 border border-transparent transition-colors" placeholder="Search templates…" spellcheck="false" type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto bg-[#13151f] p-2 flex flex-col gap-1 rounded-b-xl overscroll-contain">
<button className="w-full text-left p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/[0.05] group outline-none focus-visible:bg-white/[0.04]" onclick="applyTemplate('Agentic Architect'); closeTemplateModal();">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                Agentic Architect
              </span>
<span className="text-[10px] text-blue-400 bg-blue-500/[0.1] border border-blue-500/[0.2] rounded px-1.5 py-0.5">
                System
              </span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
              Directs the model to break down complex tasks into autonomous
              agent loops and artifact streams.
            </p>
</button>
<button className="w-full text-left p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/[0.05] group outline-none focus-visible:bg-white/[0.04]" onclick="applyTemplate('Data Extraction &amp; Formatting'); closeTemplateModal();">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                Data Extraction &amp; Formatting
              </span>
<span className="text-[10px] text-blue-400 bg-blue-500/[0.1] border border-blue-500/[0.2] rounded px-1.5 py-0.5">
                System
              </span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
              Strict JSON extraction schema handling edge cases and empty data
              entries gracefully.
            </p>
</button>
<button className="w-full text-left p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/[0.05] group outline-none focus-visible:bg-white/[0.04]" onclick="applyTemplate('Markdown Content Generator'); closeTemplateModal();">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                Markdown Content Generator
              </span>
<span className="text-[10px] text-purple-400 bg-purple-500/[0.1] border border-purple-500/[0.2] rounded px-1.5 py-0.5">
                User
              </span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
              Template expecting dynamic variables to produce long-form,
              well-structured documentation in markdown format.
            </p>
</button>
<button className="w-full text-left p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/[0.05] group outline-none focus-visible:bg-white/[0.04]" onclick="applyTemplate('Code Review Assistant'); closeTemplateModal();">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                Code Review Assistant
              </span>
<span className="text-[10px] text-blue-400 bg-blue-500/[0.1] border border-blue-500/[0.2] rounded px-1.5 py-0.5">
                System
              </span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
              Acts as a strict senior developer, identifying anti-patterns and
              proposing optimized solutions.
            </p>
</button>
</div>
</div>
</div>
<div aria-label="Command Palette" aria-modal="true" className="fixed inset-0 z-[800] hidden items-start justify-center pt-[15vh] bg-[#0a0b10]/60 backdrop-blur-[2px] transition-opacity opacity-0 duration-200" id="command-palette" onclick="closeCommandPalette(event)" role="dialog">
<div className="w-[600px] max-w-[90vw] nm-sidebar rounded-xl shadow-2xl border border-white/[0.08] flex flex-col overflow-hidden transform scale-95 transition-transform duration-200 overscroll-contain" id="command-palette-content" onclick="event.stopPropagation()">
<div className="flex items-center px-4 py-4 border-b border-white/[0.05] bg-[#12141c]">
<iconify-icon aria-hidden="true" className="text-xl text-zinc-400 mr-3" icon="solar:magnifer-linear"></iconify-icon>
<input autocomplete="off" className="w-full bg-transparent border-none text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none font-normal tracking-wide" id="command-input" placeholder="Search commands, nodes, or pipelines…" spellcheck="false" type="text"/>
<div className="flex gap-1 ml-3 shrink-0">
<span className="text-xs text-zinc-500 bg-[#0f1118] border border-white/[0.05] rounded px-1.5 py-0.5 font-mono shadow-inner">
              ESC
            </span>
</div>
</div>
<div className="flex flex-col p-2 max-h-[400px] overflow-y-auto bg-[#14161f] overscroll-contain">
<div className="px-3 py-2 text-xs text-zinc-500 font-normal uppercase tracking-wider">
            Quick Actions
          </div>
<button className="w-full text-left px-3 py-2.5 text-zinc-300 hover:bg-white/[0.04] hover:text-zinc-100 rounded-lg transition-colors flex items-center justify-between group outline-none focus-visible:bg-white/[0.04] focus-visible:text-white" onclick="closeCommandPalette(); showToast('Running pipeline…', 'info')">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded flex items-center justify-center bg-[#1a1d29] border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-sm text-green-400" icon="solar:play-linear"></iconify-icon>
</div>
<span className="font-normal text-sm">Run Pipeline</span>
</div>
<span className="text-xs text-zinc-500 font-mono tracking-widest bg-[#0f1118] px-1.5 py-0.5 rounded border border-white/[0.05]">
              ⌘R
            </span>
</button>
<button className="w-full text-left px-3 py-2.5 text-zinc-300 hover:bg-white/[0.04] hover:text-zinc-100 rounded-lg transition-colors flex items-center justify-between group outline-none focus-visible:bg-white/[0.04] focus-visible:text-white" onclick="closeCommandPalette(); showToast('Version saved to history.', 'success')">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded flex items-center justify-center bg-[#1a1d29] border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-sm text-blue-400" icon="solar:history-linear"></iconify-icon>
</div>
<span className="font-normal text-sm">Save Version</span>
</div>
<span className="text-xs text-zinc-500 font-mono tracking-widest bg-[#0f1118] px-1.5 py-0.5 rounded border border-white/[0.05]">
              ⌘S
            </span>
</button>
<button className="w-full text-left px-3 py-2.5 text-zinc-300 hover:bg-white/[0.04] hover:text-zinc-100 rounded-lg transition-colors flex items-center justify-between group outline-none focus-visible:bg-white/[0.04] focus-visible:text-white" onclick="closeCommandPalette(); openSettings();">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded flex items-center justify-center bg-[#1a1d29] border border-white/[0.05] shadow-sm">
<iconify-icon aria-hidden="true" className="text-sm text-zinc-400" icon="solar:settings-linear"></iconify-icon>
</div>
<span className="font-normal text-sm">Open Settings</span>
</div>
<span className="text-xs text-zinc-500 font-mono tracking-widest bg-[#0f1118] px-1.5 py-0.5 rounded border border-white/[0.05]">
              ⌘,
            </span>
</button>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-[1000] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>




    </>
  );
}
