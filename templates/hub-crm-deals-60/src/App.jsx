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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
950: '#00221E',
900: '#00332C', // Sidebar/Dark BG
800: '#004E43', // Dark Card BG
700: '#10665B',
600: '#197266', // Primary Action (Teal)
500: '#2D8A7A',
400: '#CDF08D', // Lime Accent
300: '#D8F2AB',
200: '#E6F9CA',
100: '#F0FDE2',
50: '#F8FEF0',  // Very Pale Lime
}
}
}
}
}



      lucide.createIcons();
    


      // Module Navigation Logic (Deals vs Jobs)
      const moduleDeals = document.getElementById('module-deals');
      const moduleJobs = document.getElementById('module-jobs');
      const navDeals = document.getElementById('nav-deals');
      const navJobs = document.getElementById('nav-jobs');

      // Helper to reset sidebar styles
      const resetSidebar = () => {
         const items = [navDeals, navJobs];
         items.forEach(el => {
            el.classList.remove('bg-brand-600', 'text-white', 'shadow-lg', 'shadow-brand-900/50', 'hover:bg-brand-400', 'hover:text-brand-900');
            el.classList.add('hover:text-brand-400');
         });
      };
      
      const setActiveSidebar = (el) => {
         resetSidebar();
         el.classList.remove('hover:text-brand-400');
         el.classList.add('bg-brand-600', 'text-white', 'shadow-lg', 'shadow-brand-900/50', 'hover:bg-brand-400', 'hover:text-brand-900');
      };

      window.switchModule = (moduleName) => {
          if (moduleName === 'deals') {
              moduleDeals.classList.remove('hidden');
              moduleJobs.classList.add('hidden');
              setActiveSidebar(navDeals);
          } else if (moduleName === 'jobs') {
              moduleDeals.classList.add('hidden');
              moduleJobs.classList.remove('hidden');
              setActiveSidebar(navJobs);
          }
      };
      
      // Column Panel Logic
      const columnPanel = document.getElementById('column-customizer');
      const jobsTableContainer = document.getElementById('jobs-table-container');
      
      window.toggleColumnPanel = () => {
         if (columnPanel.classList.contains('hidden')) {
             columnPanel.classList.remove('hidden');
             // Visual effect: shrink table slightly or just sit next to it
         } else {
             columnPanel.classList.add('hidden');
         }
      };

      // View Switcher Logic (Existing)
      const btnList = document.getElementById('btn-view-list');
      const btnKanban = document.getElementById('btn-view-kanban');
      const viewList = document.getElementById('view-list');
      const viewKanban = document.getElementById('view-kanban');
      const kanbanTools = document.getElementById('kanban-tools');

      const activeClasses = ['bg-white', 'shadow-sm', 'text-brand-900', 'dark:bg-brand-600', 'dark:text-white'];
      const inactiveClasses = ['hover:bg-white', 'hover:shadow-sm', 'text-brand-400', 'dark:text-brand-50/60', 'dark:hover:text-white', 'dark:hover:bg-brand-600'];

      function setActive(activeBtn, inactiveBtn) {
          activeBtn.classList.remove(...inactiveClasses);
          activeBtn.classList.add(...activeClasses);

          inactiveBtn.classList.remove(...activeClasses);
          inactiveBtn.classList.add(...inactiveClasses);
      }

      btnList.addEventListener('click', () => {
          viewList.classList.remove('hidden');
          viewKanban.classList.add('hidden');
          kanbanTools.classList.add('hidden'); 
          setActive(btnList, btnKanban);
      });

      btnKanban.addEventListener('click', () => {
          viewKanban.classList.remove('hidden');
          viewList.classList.add('hidden');
          kanbanTools.classList.remove('hidden');
          setActive(btnKanban, btnList);
      });


      // Drag and Drop Logic (Kanban)
      const draggables = document.querySelectorAll('[draggable="true"]');
      const containers = document.querySelectorAll('.overflow-y-auto.space-y-2');

      function updateColumnStats() {
          document.querySelectorAll('.min-w-max > div').forEach(col => {
              const container = col.querySelector('.overflow-y-auto');
              const badge = col.querySelector('span.bg-slate-200, span.dark\\:bg-brand-600');
              const totalEl = col.querySelector('.border-t span.font-semibold');

              if (container && badge) {
                  const cards = container.querySelectorAll('[draggable="true"]');
                  badge.textContent = cards.length;

                  if (totalEl) {
                      let total = 0;
                      cards.forEach(card => {
                          const amountText = card.innerText.match(/\$[0-9,]+/);
                          if (amountText) {
                              total += parseInt(amountText[0].replace(/[^0-9]/g, ''));
                          }
                      });
                      totalEl.textContent = '$' + total.toLocaleString();
                  }
              }
          });
      }

      draggables.forEach(draggable => {
          draggable.addEventListener('dragstart', () => {
              draggable.classList.add('opacity-50', 'dragging');
          });

          draggable.addEventListener('dragend', () => {
              draggable.classList.remove('opacity-50', 'dragging');
              updateColumnStats();
          });
      });

      containers.forEach(container => {
          container.addEventListener('dragover', e => {
              e.preventDefault();
              const draggable = document.querySelector('.dragging');
              if (draggable && container !== draggable.parentElement) {
                  container.appendChild(draggable);
              }
          });
      });

      // Dark Mode Logic
      const toggleBtn = document.getElementById('theme-toggle');
      const html = document.documentElement;

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         html.classList.add('dark');
      }

      toggleBtn.addEventListener('click', () => {
          html.classList.toggle('dark');
      });
    


      const pTrigger = document.getElementById('pagination-trigger');
      const pMenu = document.getElementById('pagination-menu');
      const pLabel = document.getElementById('pagination-label');

      if(pTrigger && pMenu) {
        pTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = pMenu.classList.contains('hidden');
            if (isHidden) {
                pMenu.classList.remove('hidden');
                requestAnimationFrame(() => {
                    pMenu.classList.remove('opacity-0', 'scale-95');
                    pMenu.classList.add('opacity-100', 'scale-100');
                });
            } else {
                closePaginationMenu();
            }
        });

        function closePaginationMenu() {
            pMenu.classList.remove('opacity-100', 'scale-100');
            pMenu.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                pMenu.classList.add('hidden');
            }, 200);
        }

        document.addEventListener('click', (e) => {
            if (!pTrigger.contains(e.target) && !pMenu.contains(e.target)) {
                closePaginationMenu();
            }
        });

        window.selectPageSize = (size, btn) => {
            pLabel.textContent = size + ' per page';
            const buttons = pMenu.querySelectorAll('button i');
            buttons.forEach(icon => icon.classList.add('opacity-0'));
            const activeIcon = btn.querySelector('i');
            if(activeIcon) activeIcon.classList.remove('opacity-0');
            closePaginationMenu();
        };
      }
      lucide.createIcons();
    
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
      

<aside className="w-16 bg-brand-900 flex flex-col items-center py-5 border-r border-brand-800 shrink-0 z-50 shadow-xl shadow-black/10 overflow-visible">

<div className="mb-8 text-brand-400">
<svg className="w-9 h-9" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
<circle cx="12" cy="12" fill="currentColor" fillOpacity="0.1" r="10"></circle>
<path clip-rule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm1 11h-2v-2h2v2zm0-4h-2V7h2v4z" fill="transparent" fill-rule="evenodd"></path>
<circle cx="12" cy="12" fill="none" r="6" stroke="currentColor" strokeWidth="2"></circle>
<circle cx="15" cy="9" fill="currentColor" r="1.5"></circle>
<circle cx="9" cy="15" fill="currentColor" r="1.5"></circle>
<circle cx="15" cy="15" fill="currentColor" r="1.5"></circle>
<line stroke="currentColor" strokeWidth="1.5" x1="12" x2="15" y1="12" y2="9"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="12" x2="9" y1="12" y2="15"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="12" x2="15" y1="12" y2="15"></line>
</svg>
</div>

<nav className="flex flex-col gap-4 w-full items-center text-brand-200/50">
<button className="hover:text-brand-400 group relative p-2 transition-colors">
<i className="w-5 h-5" data-lucide="bookmark"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Bookmarks</span>
</button>
<div className="h-px w-8 bg-brand-800"></div>

<button className="text-white bg-brand-600 p-2 rounded-lg shadow-lg shadow-brand-900/50 relative transition-all hover:bg-brand-400 hover:text-brand-900 group" id="nav-deals" onclick="switchModule('deals')">
<i className="w-5 h-5" data-lucide="contact"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Contacts &amp; Deals</span>
</button>

<button className="hover:text-brand-400 p-2 transition-colors relative group" id="nav-jobs" onclick="switchModule('jobs')">
<i className="w-5 h-5" data-lucide="briefcase"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Jobs</span>
</button>
<button className="hover:text-brand-400 p-2 transition-colors relative group">
<i className="w-5 h-5" data-lucide="megaphone"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Marketing</span>
</button>
<button className="hover:text-brand-400 p-2 transition-colors relative group">
<i className="w-5 h-5" data-lucide="file-text"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Documents</span>
</button>
<button className="hover:text-brand-400 p-2 transition-colors relative group">
<i className="w-5 h-5" data-lucide="inbox"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Inbox</span>
</button>
<button className="hover:text-brand-400 p-2 transition-colors relative group">
<i className="w-5 h-5" data-lucide="wallet"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Sales</span>
</button>
<button className="hover:text-brand-400 p-2 transition-colors relative group">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Notifications</span>
</button>
<button className="hover:text-brand-400 p-2 transition-colors relative group">
<i className="w-5 h-5" data-lucide="database"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Data</span>
</button>
<button className="hover:text-brand-400 p-2 transition-colors relative group">
<i className="w-5 h-5" data-lucide="git-fork"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Workflows</span>
</button>
<button className="hover:text-brand-400 p-2 transition-colors relative group">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Reports</span>
</button>
</nav>
<div className="mt-auto flex flex-col gap-4 mb-4 items-center text-brand-200/50">
<div className="h-px w-8 bg-brand-800"></div>

<button className="hover:text-brand-400 p-2 transition-colors rounded-full hover:bg-brand-800 text-brand-400 relative group" id="theme-toggle">
<i className="w-5 h-5 hidden dark:block" data-lucide="sun"></i>
<i className="w-5 h-5 block dark:hidden" data-lucide="moon"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Toggle Theme</span>
</button>
<button className="hover:text-brand-400 transition-colors text-brand-300 relative group">
<i className="w-6 h-6 bg-brand-800 rounded-full p-1 border border-brand-600/30" data-lucide="chevron-left"></i>
<span className="absolute left-14 top-1/2 -translate-y-1/2 bg-brand-950 text-brand-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-800 shadow-lg pointer-events-none z-50">Collapse</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden dark:bg-brand-900 transition-colors duration-300">

<header className="h-16 bg-white dark:bg-brand-900 flex items-center justify-between px-6 shrink-0 border-b border-brand-100 dark:border-brand-800 shadow-sm z-30 transition-colors duration-300 relative">
<div className="flex items-center gap-4 w-1/3">
<div className="relative w-full max-w-sm group">
<input className="bg-brand-50 dark:bg-brand-800 text-brand-900 dark:text-brand-50 text-sm rounded-full pl-10 pr-4 py-2 w-full border border-brand-100 dark:border-brand-600/30 focus:bg-white dark:focus:bg-brand-800 focus:border-brand-600 focus:ring-4 focus:ring-brand-400/20 focus:outline-none placeholder-brand-400/80 dark:placeholder-brand-600/50 transition-all" type="text" value="Search..."/>
<i className="w-4 h-4 absolute left-3.5 top-2.5 text-brand-400 dark:text-brand-600 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400" data-lucide="search"></i>
</div>
<button className="rounded-full bg-brand-50 dark:bg-brand-800 p-2 hover:bg-brand-400/20 transition-colors border border-brand-400/20 group">
<i className="w-5 h-5 text-brand-600 dark:text-brand-400" data-lucide="plus"></i>
</button>
</div>

<div className="flex items-center gap-2">

<button className="p-2.5 text-brand-700 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-full transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="settings"></i>
</button>

<button className="p-2.5 text-brand-700 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-full transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="sparkles"></i>
</button>

<button className="p-2.5 text-brand-700 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-full transition-colors mr-2">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="grip"></i>
</button>

<div className="flex items-center gap-3 border border-brand-200 dark:border-brand-600 rounded-[2rem] pl-5 pr-1 py-1 hover:bg-brand-50 dark:hover:bg-brand-800 hover:border-brand-300 dark:hover:border-brand-400 cursor-pointer transition-all group bg-white dark:bg-brand-900 shadow-sm">
<span className="text-brand-700 dark:text-brand-50 font-medium text-lg tracking-tight select-none group-hover:text-brand-900 dark:group-hover:text-white transition-colors">
              HubSpot
            </span>
<div className="w-9 h-9 bg-brand-900 dark:bg-brand-600 rounded-full text-white flex items-center justify-center overflow-hidden ring-2 ring-transparent group-hover:ring-brand-200 dark:group-hover:ring-brand-800 transition-all">
<div className="bg-brand-600 dark:bg-brand-400 dark:text-brand-900 w-full h-full flex items-center justify-center font-bold text-xs">
                HM
              </div>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-hidden flex flex-col dark:bg-brand-900/95 transition-colors duration-300" id="module-deals">

<div className="px-8 pt-6 pb-4 flex justify-between items-center shrink-0">
<div className="flex items-center gap-3 cursor-pointer group">
<h1 className="text-2xl tracking-tight font-semibold text-brand-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              Deals
            </h1>
<button className="p-1 rounded hover:bg-brand-100 dark:hover:bg-brand-800 text-brand-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</button>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-md text-brand-700 dark:text-brand-50 font-medium text-xs hover:bg-brand-50 dark:hover:bg-brand-800/80 hover:border-brand-300 dark:hover:border-brand-400 shadow-sm flex items-center gap-1.5 transition-all">
              Actions
              <i className="w-3.5 h-3.5 text-brand-400" data-lucide="chevron-down"></i>
</button>
<button className="px-3 py-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-md text-brand-700 dark:text-brand-50 font-medium text-xs hover:bg-brand-50 dark:hover:bg-brand-800/80 hover:border-brand-300 dark:hover:border-brand-400 shadow-sm transition-all">
              Import
            </button>
<button className="px-4 py-2 bg-brand-600 text-white rounded-md text-xs font-semibold hover:bg-brand-700 dark:hover:bg-brand-400 dark:hover:text-brand-900 shadow-sm shadow-brand-400/20 transition-all">
              Create deal
            </button>
</div>
</div>

<div className="px-8 flex items-end gap-6 border-b border-brand-100 dark:border-brand-800 text-xs font-medium shrink-0">
<div className="pb-3 border-b-2 border-brand-600 dark:border-brand-400 text-brand-600 dark:text-brand-400 cursor-pointer flex items-center gap-2">
            All deals
            <div className="p-0.5 rounded-full hover:bg-brand-50 dark:hover:bg-brand-800 text-brand-300 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-50">
<i className="w-3 h-3" data-lucide="x"></i>
</div>
</div>
<div className="pb-3 border-b-2 border-transparent hover:border-brand-200 dark:hover:border-brand-600 text-brand-600/70 dark:text-brand-50/60 hover:text-brand-900 dark:hover:text-white cursor-pointer transition-all">
            My deals
          </div>
<div className="pb-3 text-brand-500/70 dark:text-brand-50/40 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer flex items-center gap-1.5 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
            Add view (2/5)
          </div>
<div className="ml-auto pb-3">
<a className="text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-200 hover:underline" href="#">
              All Views
            </a>
</div>
</div>

<div className="px-8 py-3 flex items-center justify-between border-b border-brand-100 dark:border-brand-800 shrink-0 dark:bg-brand-900">
<div className="flex items-center gap-3 overflow-x-auto no-scrollbar">

<div className="flex items-center bg-brand-100/50 dark:bg-brand-800 p-1 rounded-lg border border-brand-200 dark:border-brand-600">
<button className="p-1.5 hover:bg-white hover:shadow-sm dark:hover:bg-brand-600 rounded-md text-brand-400 dark:text-brand-50/60 dark:hover:text-white transition-all" id="btn-view-list">
<i className="w-4 h-4" data-lucide="list"></i>
</button>
<button className="p-1.5 bg-white dark:bg-brand-600 rounded-md shadow-sm text-brand-900 dark:text-white transition-all" id="btn-view-kanban">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
</button>
</div>
<div className="h-6 w-px bg-brand-200 dark:bg-brand-800 mx-2"></div>
<button className="border border-brand-200 dark:border-brand-600 border-dashed rounded-md px-3 py-1.5 text-brand-700 dark:text-brand-50 text-xs font-medium flex items-center gap-2 hover:bg-brand-50 dark:hover:bg-brand-800 hover:border-brand-300 transition-all">
              All pipelines
              <i className="w-3 h-3 text-brand-400" data-lucide="chevron-down"></i>
</button>
<button className="hover:bg-brand-50 dark:hover:bg-brand-800 rounded-md px-3 py-1.5 text-brand-600 dark:text-brand-50/80 text-xs font-medium flex items-center gap-1.5 transition-colors">
              Deal owner
              <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>
<button className="hover:bg-brand-50 dark:hover:bg-brand-800 rounded-md px-3 py-1.5 text-brand-600 dark:text-brand-50/80 text-xs font-medium flex items-center gap-1.5 transition-colors">
              Create date
              <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>
<button className="text-brand-600 dark:text-brand-400 text-xs font-medium flex items-center gap-1 hover:text-brand-800 dark:hover:text-brand-200 transition-colors ml-2">
<i className="w-3 h-3" data-lucide="plus"></i>
              More
            </button>
<div className="h-6 w-px bg-brand-200 dark:bg-brand-800 mx-2"></div>
<button className="text-brand-500 dark:text-brand-50/50 text-xs font-medium flex items-center gap-1.5 hover:text-brand-800 dark:hover:text-brand-50 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="filter"></i>
              Advanced filters
            </button>
</div>

<div className="flex items-center gap-2 text-brand-400 dark:text-brand-600 pl-4 dark:bg-brand-900 z-10" id="kanban-tools">
<button className="p-2 border border-brand-200 dark:border-brand-600 rounded-md hover:bg-brand-50 dark:hover:bg-brand-800 hover:text-brand-600 dark:hover:text-brand-400 transition-all">
<i className="w-4 h-4" data-lucide="undo-2"></i>
</button>
<button className="p-2 border border-brand-200 dark:border-brand-600 rounded-md hover:bg-brand-50 dark:hover:bg-brand-800 hover:text-brand-600 dark:hover:text-brand-400 transition-all">
<i className="w-4 h-4" data-lucide="copy"></i>
</button>
<button className="p-2 border border-brand-200 dark:border-brand-600 rounded-md hover:bg-brand-50 dark:hover:bg-brand-800 hover:text-brand-600 dark:hover:text-brand-400 transition-all">
<i className="w-4 h-4" data-lucide="hard-drive"></i>
</button>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden" id="view-kanban">

<div className="px-8 py-4 flex items-center justify-between shrink-0 dark:bg-brand-900">
<div className="relative w-80">
<input className="w-full bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-lg py-2 pl-10 pr-4 text-sm placeholder:text-brand-300 dark:placeholder:text-brand-600 text-brand-900 dark:text-brand-50 focus:outline-none focus:border-brand-600 dark:focus:border-brand-400 focus:ring-4 focus:ring-brand-400/20 transition-all shadow-sm" placeholder="Search name or description" type="text"/>
<i className="w-4 h-4 text-brand-300 dark:text-brand-600 absolute left-3.5 top-2.5" data-lucide="search"></i>
</div>
<button className="px-4 py-2 border border-brand-200 dark:border-brand-600 rounded-lg text-brand-600 dark:text-brand-50 text-xs font-medium hover:bg-brand-50 dark:hover:bg-brand-800 hover:border-brand-300 shadow-sm flex items-center gap-2 transition-all">
              Board options
              <i className="w-3.5 h-3.5 text-brand-400 dark:text-brand-600" data-lucide="chevron-down"></i>
</button>
</div>

<div className="flex-1 overflow-x-auto overflow-y-hidden px-6 pb-2">
<div className="flex h-full min-w-max pb-2">

<div className="flex flex-col w-[300px] h-full ml-8 first:ml-0 dark:bg-brand-800/50 border dark:border-brand-600 rounded-xl overflow-hidden shadow-sm bg-brand-100/40 border-brand-200 dark:border-brand-700">
<div className="flex items-center justify-between p-3 shrink-0">
<div className="flex items-center gap-2">
<span className="font-semibold dark:text-brand-400 text-xs truncate uppercase tracking-wider text-brand-800">
                      Appointment Scheduled
                    </span>
<span className="dark:bg-brand-600 dark:text-brand-50 px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand-200 text-brand-800">
                      0
                    </span>
</div>
</div>
<div className="flex-1 p-2 overflow-y-auto space-y-2">

</div>
<div className="p-3 shrink-0 border-t dark:border-brand-600/50 dark:bg-brand-800/80 border-brand-200/50 bg-brand-50/50">
<div className="flex justify-between text-xs mb-1">
<span className="font-semibold dark:text-brand-50">$0</span>
<span className="text-slate-500 dark:text-brand-400/60">
                      Total
                    </span>
</div>
</div>
</div>

<div className="flex flex-col w-[300px] h-full ml-4 bg-brand-100/40 dark:bg-brand-800/50 border border-brand-200 dark:border-brand-600 rounded-xl overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-3 shrink-0">
<div className="flex items-center gap-2">
<span className="font-semibold text-brand-800 dark:text-brand-400 text-xs truncate uppercase tracking-wider">
                      Qualified To Buy
                    </span>
<span className="bg-brand-200 dark:bg-brand-600 text-brand-800 dark:text-brand-50 px-1.5 py-0.5 rounded text-[10px] font-bold">
                      0
                    </span>
</div>
</div>
<div className="flex-1 p-2 overflow-y-auto space-y-2"></div>
<div className="p-3 shrink-0 border-t border-brand-200/50 dark:border-brand-600/50 bg-brand-50/50 dark:bg-brand-800/80">
<div className="flex justify-between text-xs mb-1">
<span className="font-semibold text-brand-900 dark:text-brand-50">
                      $0
                    </span>
<span className="text-brand-500 dark:text-brand-400/60">
                      Total
                    </span>
</div>
</div>
</div>

<div className="flex flex-col w-[300px] h-full ml-4 bg-brand-100/40 dark:bg-brand-800/50 border border-brand-200 dark:border-brand-600 rounded-xl overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-3 shrink-0">
<div className="flex items-center gap-2">
<span className="font-semibold text-brand-800 dark:text-brand-400 text-xs truncate uppercase tracking-wider">
                      Presentation Scheduled
                    </span>
<span className="bg-brand-200 dark:bg-brand-600 text-brand-800 dark:text-brand-50 px-1.5 py-0.5 rounded text-[10px] font-bold">
                      0
                    </span>
</div>
</div>
<div className="flex-1 p-2 overflow-y-auto space-y-2"></div>
<div className="p-3 shrink-0 border-t border-brand-200/50 dark:border-brand-600/50 bg-brand-50/50 dark:bg-brand-800/80">
<div className="flex justify-between text-xs mb-1">
<span className="font-semibold text-brand-900 dark:text-brand-50">
                      $0
                    </span>
<span className="text-brand-500 dark:text-brand-400/60">
                      Total
                    </span>
</div>
</div>
</div>

<div className="flex flex-col w-[300px] h-full ml-4 bg-brand-100/40 dark:bg-brand-800/50 border border-brand-200 dark:border-brand-600 rounded-xl overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-3 shrink-0">
<div className="flex items-center gap-2">
<span className="font-semibold text-brand-800 dark:text-brand-400 text-xs truncate uppercase tracking-wider">
                      Decision Maker Bought-In
                    </span>
<span className="bg-brand-200 dark:bg-brand-600 text-brand-800 dark:text-brand-50 px-1.5 py-0.5 rounded text-[10px] font-bold">
                      1
                    </span>
</div>
</div>
<div className="flex-1 p-2 overflow-y-auto space-y-2">

<div className="bg-white dark:bg-brand-800 p-4 rounded-lg shadow-sm shadow-brand-900/5 border border-brand-100 dark:border-brand-600 group hover:shadow-md hover:border-brand-400 dark:hover:border-brand-400 cursor-pointer transition-all cursor-move" draggable="true" id="deal-card-1">
<div className="flex justify-between items-start mb-3">
<h3 className="text-sm font-semibold text-brand-900 dark:text-brand-50 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                        22 Lee Ave
                      </h3>
<button className="text-brand-200 dark:text-brand-600 opacity-0 group-hover:opacity-100 hover:text-brand-500 dark:hover:text-brand-400 transition-opacity">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="space-y-1.5 mb-4">
<div className="text-xs text-brand-500 dark:text-brand-200/60 font-medium flex justify-between">
<span>Amount:</span>
<span className="text-brand-700 dark:text-brand-50">
                          $120,000
                        </span>
</div>
<div className="text-xs text-brand-500 dark:text-brand-200/60 font-medium flex justify-between">
<span>Owner:</span>
<span className="text-brand-700 dark:text-brand-50">
                          Haley Morgan
                        </span>
</div>
<div className="text-xs text-brand-500 dark:text-brand-200/60 font-medium flex justify-between">
<span>Date:</span>
<span className="text-brand-700 dark:text-brand-50">
                          11/23/2025
                        </span>
</div>
</div>
<div className="flex justify-end gap-3 text-brand-300 dark:text-brand-600 border-t border-brand-50 dark:border-brand-600/50 pt-3">
<i className="w-3.5 h-3.5 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" data-lucide="calendar"></i>
<i className="w-3.5 h-3.5 hover:text-brand-400 dark:hover:text-brand-400 transition-colors" data-lucide="sparkles"></i>
<i className="w-3.5 h-3.5 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" data-lucide="mail"></i>
<i className="w-3.5 h-3.5 hover:text-brand-400 dark:hover:text-brand-400 transition-colors" data-lucide="phone"></i>
</div>
</div>
</div>
<div className="p-3 shrink-0 border-t border-brand-200/50 dark:border-brand-600/50 bg-brand-50/50 dark:bg-brand-800/80">
<div className="flex justify-between text-xs mb-1">
<span className="font-semibold text-brand-900 dark:text-brand-50">
                      $120,000
                    </span>
<span className="text-brand-500 dark:text-brand-400/60">
                      Total
                    </span>
</div>
<div className="flex justify-between text-xs text-brand-500 dark:text-brand-400/60">
<span className="font-semibold text-brand-900 dark:text-brand-50">
                      $96,000
                      <span className="font-normal text-brand-500 dark:text-brand-600">
                        (80%)
                      </span>
</span>
<span className="text-[10px] uppercase tracking-wider">
                      Weighted
                    </span>
</div>
</div>
</div>

<div className="flex flex-col w-[300px] h-full ml-4 bg-brand-100/40 dark:bg-brand-800/50 border border-brand-200 dark:border-brand-600 rounded-xl overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-3 shrink-0">
<div className="flex items-center gap-2">
<span className="font-semibold text-brand-800 dark:text-brand-400 text-xs truncate uppercase tracking-wider">
                      Contract Sent
                    </span>
<span className="bg-brand-200 dark:bg-brand-600 text-brand-800 dark:text-brand-50 px-1.5 py-0.5 rounded text-[10px] font-bold">
                      0
                    </span>
</div>
</div>
<div className="flex-1 p-2 overflow-y-auto space-y-2"></div>
<div className="p-3 shrink-0 border-t border-brand-200/50 dark:border-brand-600/50 bg-brand-50/50 dark:bg-brand-800/80">
<div className="flex justify-between text-xs mb-1">
<span className="font-semibold text-brand-900 dark:text-brand-50">
                      $0
                    </span>
<span className="text-brand-500 dark:text-brand-400/60">
                      Total
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-brand-900" id="view-list">

<div className="px-8 py-4 flex justify-between items-center border-b border-brand-100 dark:border-brand-800">
<div className="relative w-80">
<input className="w-full bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-full py-1.5 pl-10 pr-4 text-sm placeholder:text-brand-300 dark:placeholder:text-brand-600 text-brand-900 dark:text-brand-50 focus:outline-none focus:border-brand-600 dark:focus:border-brand-400 focus:ring-4 focus:ring-brand-400/20 transition-all shadow-sm" placeholder="Search" type="text"/>
<i className="w-4 h-4 text-brand-300 dark:text-brand-600 absolute left-3.5 top-2" data-lucide="search"></i>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 border border-brand-200 dark:border-brand-600 rounded bg-white dark:bg-brand-800 text-brand-600 dark:text-brand-50 text-xs font-medium hover:bg-brand-50 dark:hover:bg-brand-700 hover:border-brand-300 transition-all shadow-sm">
                Export
              </button>
<button className="px-3 py-1.5 border border-brand-200 dark:border-brand-600 rounded bg-white dark:bg-brand-800 text-brand-600 dark:text-brand-50 text-xs font-medium hover:bg-brand-50 dark:hover:bg-brand-700 hover:border-brand-300 transition-all shadow-sm">
                Edit columns
              </button>
</div>
</div>

<div className="flex-1 overflow-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-brand-50/50 dark:bg-brand-800 sticky top-0 z-10">
<tr className="text-xs font-semibold text-brand-900 dark:text-brand-50 border-b border-brand-200 dark:border-brand-700">
<th className="p-4 w-12 border-r border-brand-100 dark:border-brand-700">
<input className="custom-checkbox" type="checkbox"/>
</th>
<th className="p-3 min-w-[200px] border-r border-brand-100 dark:border-brand-700 group hover:bg-brand-100/50 dark:hover:bg-brand-700 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span>Deal Name</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-brand-400">
<i className="w-3 h-3" data-lucide="arrow-up-down"></i>
<i className="w-3 h-3" data-lucide="more-vertical"></i>
</div>
</div>
</th>
<th className="p-3 min-w-[200px] border-r border-brand-100 dark:border-brand-700 group hover:bg-brand-100/50 dark:hover:bg-brand-700 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span>Deal Stage</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-brand-400">
<i className="w-3 h-3" data-lucide="arrow-up-down"></i>
<i className="w-3 h-3" data-lucide="more-vertical"></i>
</div>
</div>
</th>
<th className="p-3 min-w-[150px] border-r border-brand-100 dark:border-brand-700 group hover:bg-brand-100/50 dark:hover:bg-brand-700 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span>Close Date (EST)</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-brand-400">
<i className="w-3 h-3" data-lucide="arrow-up-down"></i>
<i className="w-3 h-3" data-lucide="more-vertical"></i>
</div>
</div>
</th>
<th className="p-3 min-w-[200px] border-r border-brand-100 dark:border-brand-700 group hover:bg-brand-100/50 dark:hover:bg-brand-700 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span>Deal Owner</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-brand-400">
<i className="w-3 h-3" data-lucide="arrow-up-down"></i>
<i className="w-3 h-3" data-lucide="more-vertical"></i>
</div>
</div>
</th>
<th className="p-3 min-w-[120px] group hover:bg-brand-100/50 dark:hover:bg-brand-700 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span>Amount</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-brand-400">
<i className="w-3 h-3" data-lucide="arrow-up-down"></i>
<i className="w-3 h-3" data-lucide="more-vertical"></i>
</div>
</div>
</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-brand-100 dark:divide-brand-800 bg-white dark:bg-brand-900">
<tr className="hover:bg-brand-50 dark:hover:bg-brand-800/50 group transition-colors">
<td className="p-4 w-12 text-center">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="p-3 text-brand-700 dark:text-brand-200 font-semibold hover:text-brand-500 dark:hover:text-brand-50 cursor-pointer underline decoration-transparent hover:decoration-brand-500 underline-offset-2 transition-all">
                    22 Lee Ave
                  </td>
<td className="p-3 text-brand-900 dark:text-brand-50">
                    Decision Maker Bought-In (80%)
                  </td>
<td className="p-3 text-brand-900 dark:text-brand-50">--</td>
<td className="p-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-700 flex items-center justify-center text-[10px] font-bold text-brand-700 dark:text-brand-50">
                        HM
                      </div>
<span className="text-brand-900 dark:text-brand-50">
                        Haley Morgan (cmehir...)
                      </span>
</div>
</td>
<td className="p-3 text-right pr-8 text-brand-900 dark:text-brand-50 font-medium">
                    $120,000
                  </td>
</tr>

<tr className="h-10 border-b border-brand-50 dark:border-brand-800/30">
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr className="h-10 border-b border-brand-50 dark:border-brand-800/30">
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-brand-100 dark:border-brand-800 flex justify-center items-center gap-4 text-sm text-brand-600 dark:text-brand-400">
<button className="flex items-center gap-1 hover:text-brand-900 dark:hover:text-brand-200 disabled:opacity-50">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
              Prev
            </button>
<button className="w-8 h-8 rounded border border-brand-200 dark:border-brand-600 flex items-center justify-center text-brand-900 dark:text-brand-50 font-medium bg-brand-50 dark:bg-brand-800">
              1
            </button>
<button className="flex items-center gap-1 hover:text-brand-900 dark:hover:text-brand-200">
              Next
              <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<div className="h-4 w-px bg-brand-200 dark:bg-brand-700 mx-2"></div>
<div className="relative" id="pagination-dropdown-container">
<button className="group flex items-center gap-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-lg px-3 py-1.5 text-xs font-medium text-brand-700 dark:text-brand-50 shadow-sm hover:border-brand-300 dark:hover:border-brand-500 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/20" id="pagination-trigger">
<span id="pagination-label">25 per page</span>
<i className="w-3.5 h-3.5 text-brand-400 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors" data-lucide="chevron-up"></i>
</button>
<div className="hidden absolute bottom-full right-0 mb-2 w-36 bg-white dark:bg-brand-800 border border-brand-100 dark:border-brand-600 rounded-lg shadow-xl shadow-brand-900/10 dark:shadow-black/40 z-50 overflow-hidden transform origin-bottom transition-all duration-200 scale-95 opacity-0" id="pagination-menu">
<div className="py-1">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-brand-700 dark:text-brand-200 hover:bg-brand-50 dark:hover:bg-brand-700 hover:text-brand-900 dark:hover:text-white transition-colors flex items-center justify-between" onclick="selectPageSize(25, this)">
                    25 per page
                    <i className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" data-lucide="check"></i>
</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-brand-700 dark:text-brand-200 hover:bg-brand-50 dark:hover:bg-brand-700 hover:text-brand-900 dark:hover:text-white transition-colors flex items-center justify-between" onclick="selectPageSize(50, this)">
                    50 per page
                    <i className="w-3.5 h-3.5 opacity-0" data-lucide="check"></i>
</button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-brand-700 dark:text-brand-200 hover:bg-brand-50 dark:hover:bg-brand-700 hover:text-brand-900 dark:hover:text-white transition-colors flex items-center justify-between" onclick="selectPageSize(100, this)">
                    100 per page
                    <i className="w-3.5 h-3.5 opacity-0" data-lucide="check"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 overflow-hidden flex flex-col dark:bg-brand-900/95 transition-colors duration-300 relative" id="module-jobs">

<div className="px-8 pt-6 pb-4 flex justify-between items-center shrink-0">
<div className="flex items-center gap-3 cursor-pointer group">
<h1 className="text-2xl tracking-tight font-semibold text-brand-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              Jobs
            </h1>
<span className="bg-brand-100 dark:bg-brand-800 text-brand-700 dark:text-brand-200 px-2 py-0.5 rounded-full text-xs font-bold">5</span>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-md text-brand-700 dark:text-brand-50 font-medium text-xs hover:bg-brand-50 dark:hover:bg-brand-800/80 hover:border-brand-300 dark:hover:border-brand-400 shadow-sm flex items-center gap-1.5 transition-all">
<i className="w-3.5 h-3.5 text-brand-400" data-lucide="rotate-cw"></i>
              Manage Recurring Jobs
            </button>
<button className="px-4 py-2 bg-brand-600 text-white rounded-md text-xs font-semibold hover:bg-brand-700 dark:hover:bg-brand-400 dark:hover:text-brand-900 shadow-sm shadow-brand-400/20 transition-all flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
              New Job
            </button>
</div>
</div>

<div className="px-8 py-3 flex items-center justify-between border-b border-brand-100 dark:border-brand-800 shrink-0 bg-brand-50/50 dark:bg-brand-900">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-md px-3 py-1.5 text-brand-700 dark:text-brand-50 text-xs font-medium flex items-center gap-2 hover:bg-brand-50 dark:hover:bg-brand-700 hover:border-brand-300 transition-all shadow-sm">
              All Jobs
              <i className="w-3 h-3 text-brand-400" data-lucide="chevron-down"></i>
</button>
<button className="bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-md px-3 py-1.5 text-brand-600 dark:text-brand-50/80 text-xs font-medium flex items-center gap-1.5 hover:bg-brand-50 dark:hover:bg-brand-700 transition-colors shadow-sm">
<i className="w-3 h-3" data-lucide="filter"></i>
              Filter
            </button>
<button className="border border-dashed border-brand-300 dark:border-brand-600 rounded-md px-3 py-1.5 text-brand-600 dark:text-brand-50/80 text-xs font-medium flex items-center gap-1.5 hover:bg-white dark:hover:bg-brand-800 transition-colors">
<i className="w-3 h-3 opacity-50" data-lucide="crosshair"></i>
              Job Category
            </button>
<button className="border border-dashed border-brand-300 dark:border-brand-600 rounded-md px-3 py-1.5 text-brand-600 dark:text-brand-50/80 text-xs font-medium flex items-center gap-1.5 hover:bg-white dark:hover:bg-brand-800 transition-colors">
<i className="w-3 h-3 opacity-50" data-lucide="calendar-days"></i>
              Scheduled Date Range
            </button>
<button className="border border-dashed border-brand-300 dark:border-brand-600 rounded-md px-3 py-1.5 text-brand-600 dark:text-brand-50/80 text-xs font-medium flex items-center gap-1.5 hover:bg-white dark:hover:bg-brand-800 transition-colors">
<i className="w-3 h-3 opacity-50" data-lucide="alert-circle"></i>
              Job Priority
            </button>
</div>
<div className="flex items-center gap-2 pl-4">
<div className="relative w-64">
<input className="w-full bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-lg py-1.5 pl-9 pr-4 text-sm placeholder:text-brand-300 dark:placeholder:text-brand-600 text-brand-900 dark:text-brand-50 focus:outline-none focus:border-brand-600 dark:focus:border-brand-400 focus:ring-4 focus:ring-brand-400/20 transition-all shadow-sm" placeholder="Search" type="text"/>
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-600 absolute left-3 top-2.5" data-lucide="search"></i>
</div>
<button className="px-3 py-1.5 border border-brand-200 dark:border-brand-600 rounded bg-white dark:bg-brand-800 text-brand-600 dark:text-brand-50 text-xs font-medium hover:bg-brand-50 dark:hover:bg-brand-700 hover:border-brand-300 transition-all shadow-sm flex items-center gap-1" id="btn-columns" onclick="toggleColumnPanel()">
<i className="w-3 h-3 opacity-70" data-lucide="columns"></i>
              Columns
            </button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 overflow-auto bg-white dark:bg-brand-900 flex flex-col w-full transition-all duration-300" id="jobs-table-container">
<table className="w-full text-left border-collapse">
<thead className="bg-brand-50/50 dark:bg-brand-800 sticky top-0 z-10">
<tr className="text-xs font-semibold text-brand-900 dark:text-brand-50 border-b border-brand-200 dark:border-brand-700">
<th className="p-3 w-10 border-r border-brand-100 dark:border-brand-700 text-center">
<input className="custom-checkbox" type="checkbox"/>
</th>
<th className="p-3 min-w-[140px] border-r border-brand-100 dark:border-brand-700 group hover:bg-brand-100/50 dark:hover:bg-brand-700 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span>Work Order Num...</span>
<i className="w-3 h-3 text-brand-400 opacity-0 group-hover:opacity-100" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="p-3 min-w-[200px] border-r border-brand-100 dark:border-brand-700 group hover:bg-brand-100/50 dark:hover:bg-brand-700 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span>Job Title</span>
<i className="w-3 h-3 text-brand-400 opacity-0 group-hover:opacity-100" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="p-3 min-w-[150px] border-r border-brand-100 dark:border-brand-700 group hover:bg-brand-100/50 dark:hover:bg-brand-700 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span>Customer</span>
<i className="w-3 h-3 text-brand-400 opacity-0 group-hover:opacity-100" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="p-3 min-w-[180px] border-r border-brand-100 dark:border-brand-700 group hover:bg-brand-100/50 dark:hover:bg-brand-700 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span>Users / Teams Assigned</span>
<i className="w-3 h-3 text-brand-400 opacity-0 group-hover:opacity-100" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="p-3 min-w-[120px] border-r border-brand-100 dark:border-brand-700">Category</th>
<th className="p-3 min-w-[200px] border-r border-brand-100 dark:border-brand-700">Service Address</th>
<th className="p-3 min-w-[120px] border-r border-brand-100 dark:border-brand-700">Status</th>
<th className="p-3 min-w-[100px] border-r border-brand-100 dark:border-brand-700">Priority</th>
<th className="p-3 min-w-[140px]">Scheduled Date</th>
<th className="p-3 w-10"></th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-brand-100 dark:divide-brand-800 bg-white dark:bg-brand-900">

<tr className="hover:bg-brand-50 dark:hover:bg-brand-800/50 group transition-colors h-12">
<td className="p-3 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="p-3 font-medium text-brand-900 dark:text-brand-50">JB239</td>
<td className="p-3 text-brand-700 dark:text-brand-200 font-semibold">water leak</td>
<td className="p-3 text-brand-500 dark:text-brand-400">-</td>
<td className="p-3 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-brand-100 text-[9px] flex items-center justify-center text-brand-800">EH</div>
<span className="text-brand-900 dark:text-brand-50">Eli Hirschf...</span>
</td>
<td className="p-3 text-brand-900 dark:text-brand-50">Maintenance</td>
<td className="p-3 text-brand-900 dark:text-brand-50 truncate max-w-[200px]">221 East Main Street...</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Job Booked
                        </span>
</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-700">
                        Low
                        </span>
</td>
<td className="p-3 text-brand-600 dark:text-brand-400">09/01/2025</td>
<td className="p-3 text-center"><i className="w-4 h-4 text-brand-400 cursor-pointer hover:text-brand-600" data-lucide="more-horizontal"></i></td>
</tr>

<tr className="hover:bg-brand-50 dark:hover:bg-brand-800/50 group transition-colors h-12">
<td className="p-3 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="p-3 font-medium text-brand-900 dark:text-brand-50">JB238</td>
<td className="p-3 text-brand-700 dark:text-brand-200 font-semibold">test</td>
<td className="p-3 text-brand-900 dark:text-brand-50">test cohen</td>
<td className="p-3 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-brand-100 text-[9px] flex items-center justify-center text-brand-800">EH</div>
<span className="text-brand-900 dark:text-brand-50">Eli Hirschf...</span>
</td>
<td className="p-3 text-brand-900 dark:text-brand-50">Service</td>
<td className="p-3 text-brand-900 dark:text-brand-50 truncate max-w-[200px]">Israel, tel aviv</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        Job Closed
                        </span>
</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-700">
                        Low
                        </span>
</td>
<td className="p-3 text-brand-600 dark:text-brand-400">03/12/2025</td>
<td className="p-3 text-center"><i className="w-4 h-4 text-brand-400 cursor-pointer hover:text-brand-600" data-lucide="more-horizontal"></i></td>
</tr>

<tr className="hover:bg-brand-50 dark:hover:bg-brand-800/50 group transition-colors h-12">
<td className="p-3 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="p-3 font-medium text-brand-900 dark:text-brand-50 flex items-center gap-2">
                        JB237 
                        <span className="px-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[9px] text-slate-500 flex items-center gap-0.5"><i className="w-2 h-2" data-lucide="message-circle"></i> 1</span>
</td>
<td className="p-3 text-brand-700 dark:text-brand-200 font-semibold">test</td>
<td className="p-3 text-brand-900 dark:text-brand-50">test cohen</td>
<td className="p-3 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-blue-100 text-[9px] flex items-center justify-center text-blue-800">L</div>
<span className="text-brand-900 dark:text-brand-50">...</span>
</td>
<td className="p-3 text-brand-900 dark:text-brand-50">Service</td>
<td className="p-3 text-brand-900 dark:text-brand-50 truncate max-w-[200px]">Israel, tel aviv</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                        Job Scheduled
                        </span>
</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-700">
                        Low
                        </span>
</td>
<td className="p-3 text-brand-600 dark:text-brand-400">11/25/2024</td>
<td className="p-3 text-center"><i className="w-4 h-4 text-brand-400 cursor-pointer hover:text-brand-600" data-lucide="more-horizontal"></i></td>
</tr>

<tr className="hover:bg-brand-50 dark:hover:bg-brand-800/50 group transition-colors h-12">
<td className="p-3 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="p-3 font-medium text-brand-900 dark:text-brand-50 flex items-center gap-2">
                        JB236
                        <span className="px-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[9px] text-slate-500 flex items-center gap-0.5"><i className="w-2 h-2" data-lucide="message-circle"></i> 2</span>
</td>
<td className="p-3 text-brand-700 dark:text-brand-200 font-semibold">Test</td>
<td className="p-3 text-brand-500 dark:text-brand-400">-</td>
<td className="p-3 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-brand-100 text-[9px] flex items-center justify-center text-brand-800">EH</div>
<span className="text-brand-900 dark:text-brand-50">Eli Hirschf...</span>
</td>
<td className="p-3 text-brand-900 dark:text-brand-50">Installation</td>
<td className="p-3 text-brand-900 dark:text-brand-50 truncate max-w-[200px]">434 6th Avenue, Ne...</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Job Booked
                        </span>
</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-700">
                        Low
                        </span>
</td>
<td className="p-3 text-slate-400 dark:text-brand-50/40 italic">Not Yet Sched...</td>
<td className="p-3 text-center"><i className="w-4 h-4 text-brand-400 cursor-pointer hover:text-brand-600" data-lucide="more-horizontal"></i></td>
</tr>

<tr className="hover:bg-brand-50 dark:hover:bg-brand-800/50 group transition-colors h-12">
<td className="p-3 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="p-3 font-medium text-brand-900 dark:text-brand-50">JB235</td>
<td className="p-3 text-brand-700 dark:text-brand-200 font-semibold">luhy98</td>
<td className="p-3 text-brand-500 dark:text-brand-400">-</td>
<td className="p-3 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-purple-100 text-[9px] flex items-center justify-center text-purple-800">N</div>
<span className="text-brand-900 dark:text-brand-50">...</span>
</td>
<td className="p-3 text-brand-900 dark:text-brand-50">Service</td>
<td className="p-3 text-brand-900 dark:text-brand-50 truncate max-w-[200px]">4108 15th Avenue, Br...</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Job Booked
                        </span>
</td>
<td className="p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-700">
                        Low
                        </span>
</td>
<td className="p-3 text-slate-400 dark:text-brand-50/40 italic">Not Yet Sched...</td>
<td className="p-3 text-center"><i className="w-4 h-4 text-brand-400 cursor-pointer hover:text-brand-600" data-lucide="more-horizontal"></i></td>
</tr>
</tbody>
</table>

<div className="p-4 border-t border-brand-100 dark:border-brand-800 flex justify-between items-center text-xs text-brand-600 dark:text-brand-400 bg-white dark:bg-brand-900 mt-auto">
<div className="flex items-center gap-2">
<span>Rows per page:</span>
<button className="border border-brand-200 dark:border-brand-600 rounded px-2 py-1 flex items-center gap-2">15 <i className="w-3 h-3" data-lucide="chevron-down"></i></button>
</div>
<div className="flex items-center gap-2">
<span>Page 1 of 1</span>
<div className="flex gap-1">
<button className="p-1 border border-brand-200 dark:border-brand-600 rounded bg-brand-50 dark:bg-brand-800 opacity-50"><i className="w-3 h-3" data-lucide="chevrons-left"></i></button>
<button className="p-1 border border-brand-200 dark:border-brand-600 rounded bg-brand-50 dark:bg-brand-800 opacity-50"><i className="w-3 h-3" data-lucide="chevron-left"></i></button>
<button className="p-1 border border-brand-200 dark:border-brand-600 rounded bg-brand-50 dark:bg-brand-800 opacity-50"><i className="w-3 h-3" data-lucide="chevron-right"></i></button>
<button className="p-1 border border-brand-200 dark:border-brand-600 rounded bg-brand-50 dark:bg-brand-800 opacity-50"><i className="w-3 h-3" data-lucide="chevrons-right"></i></button>
</div>
</div>
</div>
</div>

<div className="hidden w-[600px] shrink-0 border-l border-brand-200 dark:border-brand-700 bg-white dark:bg-brand-900 flex flex-col shadow-xl z-20" id="column-customizer">

<div className="flex items-center justify-between p-4 border-b border-brand-100 dark:border-brand-800 shrink-0">
<h2 className="text-sm font-semibold text-brand-900 dark:text-brand-50">Customize columns</h2>
<button className="text-brand-400 hover:text-brand-600 dark:hover:text-brand-200 transition-colors" onclick="toggleColumnPanel()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 flex flex-col p-4 border-r border-brand-100 dark:border-brand-800 overflow-hidden">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-xs font-medium text-brand-500 dark:text-brand-400">Available Columns</h3>
<span className="bg-brand-100 dark:bg-brand-800 text-brand-600 dark:text-brand-300 px-1.5 py-0.5 rounded text-[10px] font-bold">12</span>
</div>
<div className="relative w-full mb-4 shrink-0">
<input className="w-full bg-brand-50 dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded-md py-1.5 pl-8 pr-3 text-xs focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all" placeholder="Search" type="text"/>
<i className="w-3.5 h-3.5 text-brand-400 absolute left-2.5 top-2" data-lucide="search"></i>
</div>
<div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                Organization
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                Property
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                Project
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                Service Territory
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                Route
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                Created By
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                Last Updated At
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                Description
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                Job Info
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                AC Info - Time Input
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                AC Info - LookUp
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
<button className="w-full text-left px-2 py-2 text-xs text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-800 rounded flex items-center justify-between group">
                                AC Info - Text Input
                                <i className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-400" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="flex-1 flex flex-col p-4 bg-brand-50/30 dark:bg-brand-900/50 overflow-hidden">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-xs font-medium text-brand-500 dark:text-brand-400">Displayed Columns</h3>
<span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 px-1.5 py-0.5 rounded text-[10px] font-bold">12 / 15</span>
</div>
<div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">

<div className="flex items-center gap-3 p-2 bg-white/50 dark:bg-brand-800/30 border border-brand-100 dark:border-brand-700/50 rounded text-xs text-brand-400 dark:text-brand-500 cursor-not-allowed select-none">
<i className="w-3.5 h-3.5" data-lucide="lock"></i>
<span>Work Order Number</span>
</div>

<div className="flex items-center gap-3 p-2 bg-white/50 dark:bg-brand-800/30 border border-brand-100 dark:border-brand-700/50 rounded text-xs text-brand-400 dark:text-brand-500 cursor-not-allowed select-none">
<i className="w-3.5 h-3.5" data-lucide="lock"></i>
<span>Job Title</span>
</div>

<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Customer</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Users / Teams Assigned</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Category</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Service Address</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Status</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Priority</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Scheduled Date</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Due Date</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Tags</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-3 p-2 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-600 rounded text-xs text-brand-700 dark:text-brand-50 cursor-grab hover:shadow-sm hover:border-brand-300 transition-all group" draggable="true">
<i className="w-3.5 h-3.5 text-brand-300 dark:text-brand-500 group-hover:text-brand-400" data-lucide="grip-vertical"></i>
<span className="flex-1">Created On</span>
<i className="w-3 h-3 text-brand-300 hover:text-brand-600 dark:hover:text-brand-200 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="x"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>




    </>
  );
}
