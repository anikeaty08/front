import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Initialize Lucide Icons
        lucide.createIcons();

        // 2. Sidebar Toggle Logic
        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.getElementById('sidebar-toggle-btn');
        
        toggleBtn.addEventListener('click', () => {
            const isCollapsed = sidebar.classList.toggle('collapsed');
            sidebar.style.width = isCollapsed ? '72px' : '260px';
        });

        // 3. Theme Toggle Logic
        const themeToggle = document.getElementById('theme-toggle');
        const toggleCircle = document.getElementById('toggle-circle');
        const htmlElement = document.documentElement;

        if (htmlElement.classList.contains('dark')) {
            toggleCircle.style.transform = 'translateX(20px)';
        } else {
            toggleCircle.style.transform = 'translateX(0px)';
        }

        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            if (htmlElement.classList.contains('dark')) {
                toggleCircle.style.transform = 'translateX(20px)';
            } else {
                toggleCircle.style.transform = 'translateX(0px)';
            }
        });

        // 4. Page Navigation Logic
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page-content');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.forEach(l => {
                    l.classList.remove('bg-zinc-100', 'dark:bg-zinc-800', 'text-zinc-900', 'dark:text-zinc-100');
                    l.classList.add('text-zinc-600', 'dark:text-zinc-400');
                });
                link.classList.add('bg-zinc-100', 'dark:bg-zinc-800', 'text-zinc-900', 'dark:text-zinc-100');
                link.classList.remove('text-zinc-600', 'dark:text-zinc-400');
                
                const targetId = link.getAttribute('data-target');
                pages.forEach(page => {
                    if (page.id === targetId) {
                        page.classList.remove('hidden');
                        page.classList.add('flex');
                        page.classList.remove('opacity-100');
                        page.classList.add('opacity-0');
                        setTimeout(() => {
                            page.classList.remove('opacity-0');
                            page.classList.add('opacity-100', 'animate-in', 'fade-in', 'duration-300');
                        }, 10);
                    } else {
                        page.classList.add('hidden');
                        page.classList.remove('flex', 'animate-in', 'fade-in');
                    }
                });
            });
        });

        const initTarget = document.querySelector('.nav-link[data-target="page-dashboard"]');
        if(initTarget) initTarget.click();

        // 5. Context Menu, Modal Actions & Drag/Drop
        const contextMenu = document.getElementById('context-menu');
        const renameModal = document.getElementById('rename-modal');
        const deleteModal = document.getElementById('delete-modal');
        const renameInput = document.getElementById('rename-input');
        
        let currentTargetLi = null;
        let currentTargetLabel = null;
        window.draggedItem = null;

        const closeModals = () => {
            renameModal.classList.add('hidden');
            deleteModal.classList.add('hidden');
        };

        const showContextMenu = (x, y, li, alignRight = false) => {
            currentTargetLi = li;
            currentTargetLabel = li.querySelector('.item-label');
            
            // Show momentarily to calculate dimensions
            contextMenu.classList.remove('hidden');
            const menuRect = contextMenu.getBoundingClientRect();
            
            let finalX = x;
            if (alignRight) {
                finalX = x - menuRect.width;
            }

            // Clamp to screen bounds robustly
            finalX = Math.min(Math.max(5, finalX), window.innerWidth - menuRect.width - 10);
            let finalY = Math.min(Math.max(5, y), window.innerHeight - menuRect.height - 10);

            contextMenu.style.left = `${finalX}px`;
            contextMenu.style.top = `${finalY}px`;
        };

        // Context menu hide on off-click
        document.addEventListener('click', (e) => {
            if (!contextMenu.contains(e.target)) {
                contextMenu.classList.add('hidden');
            }
        });

        // Prevent clicks inside menu from bubbling and instantly triggering document click
        contextMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Hide when mouse leaves context menu area (plus small buffer)
        contextMenu.addEventListener('mouseleave', () => {
            contextMenu.classList.add('hidden');
        });

        // Modal triggers
        document.getElementById('rename-cancel').addEventListener('click', closeModals);
        document.getElementById('delete-cancel').addEventListener('click', closeModals);
        
        document.getElementById('menu-rename').addEventListener('click', (e) => {
            e.stopPropagation();
            contextMenu.classList.add('hidden');
            if (currentTargetLabel) {
                renameInput.value = currentTargetLabel.textContent.trim();
                renameModal.classList.remove('hidden');
                renameInput.focus();
                renameInput.select();
            }
        });

        document.getElementById('menu-delete').addEventListener('click', (e) => {
            e.stopPropagation();
            contextMenu.classList.add('hidden');
            if (currentTargetLi) {
                deleteModal.classList.remove('hidden');
            }
        });

        document.getElementById('rename-save').addEventListener('click', () => {
            if (currentTargetLabel) {
                const newName = renameInput.value.trim();
                if (newName) currentTargetLabel.textContent = newName;
            }
            closeModals();
        });

        renameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') document.getElementById('rename-save').click();
        });

        document.getElementById('delete-confirm').addEventListener('click', () => {
            if (currentTargetLi) {
                currentTargetLi.remove();
            }
            closeModals();
        });

        // Wiring function for list items (D&D + context menu)
        function wireEditableList(selector) {
            const list = document.querySelector(selector);
            if (!list) return;
            const items = list.querySelectorAll('li');

            items.forEach(li => {
                if (li.dataset.wired === "true") return;
                li.dataset.wired = "true";

                // Ensure dragging is enabled natively
                li.draggable = true;

                // Open Context Menu on Right Click
                li.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    showContextMenu(e.clientX, e.clientY, li, false);
                });

                // Open Context Menu on 3-dots Button Click
                const actionBtn = li.querySelector('.action-btn');
                if (actionBtn) {
                    // Temporarily disable dragging during button interactions so click can fire
                    actionBtn.addEventListener('mousedown', () => li.draggable = false);
                    actionBtn.addEventListener('mouseup', () => li.draggable = true);
                    actionBtn.addEventListener('mouseleave', () => li.draggable = true);

                    actionBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation(); // crucial to prevent document click auto-close
                        const btnRect = actionBtn.getBoundingClientRect();
                        // Anchor to the right edge and just below the button
                        showContextMenu(btnRect.right, btnRect.bottom + 6, li, true);
                    });
                }

                // Drag and Drop Logic
                li.addEventListener('dragstart', (e) => {
                    li.classList.add('opacity-50');
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/html', li.innerHTML);
                    window.draggedItem = li;
                });

                li.addEventListener('dragend', () => {
                    li.classList.remove('opacity-50');
                    const allItems = list.querySelectorAll('li');
                    allItems.forEach(item => item.classList.remove('drag-active', 'drag-active-bottom'));
                    window.draggedItem = null;
                });

                li.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    if (window.draggedItem === li || window.draggedItem?.parentNode !== li.parentNode) return;
                    
                    const bounding = li.getBoundingClientRect();
                    const offset = bounding.y + (bounding.height / 2);
                    
                    if (e.clientY - offset > 0) {
                        li.classList.add('drag-active-bottom');
                        li.classList.remove('drag-active');
                    } else {
                        li.classList.add('drag-active');
                        li.classList.remove('drag-active-bottom');
                    }
                });

                li.addEventListener('dragleave', () => {
                    li.classList.remove('drag-active', 'drag-active-bottom');
                });

                li.addEventListener('drop', (e) => {
                    e.preventDefault();
                    li.classList.remove('drag-active', 'drag-active-bottom');
                    
                    if (window.draggedItem === li || window.draggedItem?.parentNode !== li.parentNode) return;

                    const bounding = li.getBoundingClientRect();
                    const offset = bounding.y + (bounding.height / 2);
                    
                    if (e.clientY - offset > 0) {
                        li.parentNode.insertBefore(window.draggedItem, li.nextSibling);
                    } else {
                        li.parentNode.insertBefore(window.draggedItem, li);
                    }
                });
            });
        }

        // Apply wiring securely to the specified editable sections
        wireEditableList('#recently-updated-list');
        wireEditableList('#workspaces-list');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-[#09090b] flex flex-col items-center justify-center p-8 text-center md:hidden">
<div className="mb-6 p-3 rounded-full bg-zinc-900/50 border border-zinc-800">
<i className="text-zinc-400 w-6 h-6" data-lucide="monitor"></i>
</div>
<h2 className="text-base font-medium text-zinc-100 tracking-tight mb-2">Desktop Only</h2>
<p className="text-zinc-400 text-xs leading-relaxed max-w-[260px] mb-6">
            Cheetah R*ch Labs is available on iPad, laptop, and desktop. Please switch devices to continue.
        </p>
<a className="bg-zinc-100 hover:bg-white text-black text-xs font-medium px-5 py-2 rounded-full transition-all shadow hover:shadow-lg active:scale-95 transform duration-100" href="https://cheetahrich.com/">
            Go to cheetahrich.com
        </a>
</div>

<div className="hidden fixed z-[200] w-40 bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg p-1 animate-in fade-in zoom-in-95 duration-100" id="context-menu">
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md transition-colors text-left outline-none focus:bg-zinc-100 dark:focus:bg-zinc-800" id="menu-rename" type="button">
<iconify-icon className="text-sm" icon="solar:pen-linear"></iconify-icon> Rename
        </button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-md transition-colors text-left outline-none focus:bg-red-50 dark:focus:bg-red-500/10 mt-0.5" id="menu-delete" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon> Delete
        </button>
</div>
<div className="hidden fixed inset-0 z-[200] bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200" id="rename-modal">
<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl w-full max-w-[300px] overflow-hidden transform transition-all scale-100 animate-in zoom-in-95 duration-200">
<div className="p-4">
<h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight">Rename workspace</h3>
<input autocomplete="off" className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" id="rename-input" type="text"/>
</div>
<div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors" id="rename-cancel" type="button">Cancel</button>
<button className="px-3 py-1.5 text-xs font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 rounded-md transition-opacity shadow-sm" id="rename-save" type="button">Save</button>
</div>
</div>
</div>
<div className="hidden fixed inset-0 z-[200] bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200" id="delete-modal">
<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl w-full max-w-[300px] overflow-hidden transform transition-all scale-100 animate-in zoom-in-95 duration-200">
<div className="p-4">
<h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5 tracking-tight">Delete workspace?</h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-1">Are you sure you want to delete this? This action cannot be undone.</p>
</div>
<div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors" id="delete-cancel" type="button">Cancel</button>
<button className="px-3 py-1.5 text-xs font-medium bg-red-500 text-white hover:bg-red-600 rounded-md transition-colors shadow-sm focus:ring-2 focus:ring-red-500/50 focus:ring-offset-1 focus:ring-offset-transparent outline-none" id="delete-confirm" type="button">Delete</button>
</div>
</div>
</div>

<div className="hidden md:flex w-full h-full">

<aside className="w-[260px] shrink-0 bg-white dark:bg-[#0c0c0e] border-r border-zinc-200 dark:border-zinc-800 flex flex-col h-full z-20 group/sidebar relative" id="sidebar">

<div className="h-14 px-3.5 flex items-center justify-between shrink-0">
<div className="flex items-center gap-3 overflow-hidden">
<button className="group/toggle w-8 h-8 flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 shrink-0 outline-none" id="sidebar-toggle-btn">
<div className="relative w-5 h-5 flex items-center justify-center">
<i className="absolute inset-0 w-5 h-5 transition-all duration-200 opacity-100 rotate-0 scale-100 group-hover/toggle:opacity-0 group-hover/toggle:rotate-90 group-hover/toggle:scale-90 group-[.collapsed]/sidebar:group-hover/toggle:opacity-100 group-[.collapsed]/sidebar:group-hover/toggle:rotate-0 group-[.collapsed]/sidebar:group-hover/toggle:scale-100" data-lucide="menu"></i>
<i className="absolute inset-0 w-5 h-5 transition-all duration-200 opacity-0 -rotate-90 scale-90 group-hover/toggle:opacity-100 group-hover/toggle:rotate-0 group-hover/toggle:scale-100 group-[.collapsed]/sidebar:group-hover/toggle:opacity-0 group-[.collapsed]/sidebar:group-hover/toggle:-rotate-90 group-[.collapsed]/sidebar:group-hover/toggle:scale-90" data-lucide="x"></i>
</div>
</button>
<div className="flex items-center gap-2.5 transition-opacity duration-200 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden whitespace-nowrap">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-inner ring-1 ring-white/10 shrink-0"></div>
<span className="font-medium text-sm tracking-tight text-zinc-800 dark:text-zinc-200">Chat</span>
</div>
</div>
<button className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors text-zinc-500 group-[.collapsed]/sidebar:hidden">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
</div>

<div className="px-3 mb-2">
<button className="w-full flex items-center gap-2 group-[.collapsed]/sidebar:gap-0 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-medium py-2 px-0 rounded-md shadow-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 group justify-center relative overflow-hidden">
<i className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" data-lucide="plus"></i>
<div className="flex items-center gap-1 overflow-hidden whitespace-nowrap transition-all duration-300 w-auto opacity-100 group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0">
<span className="text-xs">New Workspace</span>
<i className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity ml-0.5" data-lucide="sparkles"></i>
</div>
</button>
</div>

<div className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 space-y-5">

<div className="">
<div className="px-2 text-[10px] font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-1.5 select-none opacity-80 whitespace-nowrap overflow-hidden transition-all duration-200 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:h-0 group-[.collapsed]/sidebar:mb-0">Recently Updated</div>
<ul className="space-y-0.5" id="recently-updated-list">
<li className="relative transition-all duration-200 rounded-md" draggable="true">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors group justify-start group-[.collapsed]/sidebar:justify-center pr-1 select-none" href="#">
<span className="w-5 h-5 rounded-[4px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[10px] font-semibold shrink-0">C</span>
<span className="item-label text-[13px] truncate transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">ChatAI</span>
<button className="action-btn relative z-10 ml-auto opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all rounded p-[3px] group-[.collapsed]/sidebar:hidden outline-none" type="button">
<i className="w-3.5 h-3.5 pointer-events-none" data-lucide="more-horizontal"></i>
</button>
</a>
</li>
<li className="relative transition-all duration-200 rounded-md" draggable="true">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors group justify-start group-[.collapsed]/sidebar:justify-center pr-1 select-none" href="#">
<span className="w-5 h-5 rounded-[4px] bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center text-[10px] shrink-0">
<i className="w-3 h-3" data-lucide="image"></i>
</span>
<span className="item-label text-[13px] truncate transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">Image of sun</span>
<button className="action-btn relative z-10 ml-auto opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all rounded p-[3px] group-[.collapsed]/sidebar:hidden outline-none" type="button">
<i className="w-3.5 h-3.5 pointer-events-none" data-lucide="more-horizontal"></i>
</button>
</a>
</li>
</ul>
</div>

<div className="border-t border-zinc-200 dark:border-zinc-800/50 pt-3 group-[.collapsed]/sidebar:border-t-0">
<div className="px-2 text-[10px] font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-1.5 select-none opacity-80 whitespace-nowrap overflow-hidden transition-all duration-200 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:h-0 group-[.collapsed]/sidebar:mb-0">Pages</div>
<div className="w-8 mx-auto h-px bg-zinc-200 dark:bg-zinc-800 mb-2 hidden group-[.collapsed]/sidebar:block"></div>
<ul className="space-y-0.5" id="pages-list">
<li className="relative transition-all duration-200 rounded-md">
<a className="nav-link bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center gap-2.5 px-2 py-1.5 rounded-md transition-colors group justify-start group-[.collapsed]/sidebar:justify-center select-none" data-target="page-dashboard" href="#">
<i className="w-4 h-4 shrink-0" data-lucide="layout-dashboard"></i>
<span className="item-label text-[13px] font-normal transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">Dashboard</span>
</a>
</li>
<li className="relative transition-all duration-200 rounded-md">
<a className="nav-link text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200 flex items-center gap-2.5 px-2 py-1.5 rounded-md transition-colors group justify-start group-[.collapsed]/sidebar:justify-center select-none" data-target="page-chat" href="#">
<i className="w-4 h-4 shrink-0" data-lucide="message-square"></i>
<span className="item-label text-[13px] font-normal transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">Chat</span>
</a>
</li>
<li className="relative transition-all duration-200 rounded-md">
<a className="nav-link text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200 flex items-center gap-2.5 px-2 py-1.5 rounded-md transition-colors group justify-start group-[.collapsed]/sidebar:justify-center select-none" data-target="page-workspace" href="#">
<i className="w-4 h-4 shrink-0" data-lucide="component"></i>
<span className="item-label text-[13px] font-normal transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">Workspace</span>
</a>
</li>
<li className="relative transition-all duration-200 rounded-md">
<a className="nav-link text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200 flex items-center gap-2.5 px-2 py-1.5 rounded-md transition-colors group justify-start group-[.collapsed]/sidebar:justify-center select-none" data-target="page-tech" href="#">
<i className="w-4 h-4 shrink-0" data-lucide="cpu"></i>
<span className="item-label text-[13px] font-normal transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">Tech</span>
</a>
</li>
<li className="relative transition-all duration-200 rounded-md">
<a className="nav-link text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200 flex items-center gap-2.5 px-2 py-1.5 rounded-md transition-colors group justify-start group-[.collapsed]/sidebar:justify-center select-none" data-target="page-library" href="#">
<i className="w-4 h-4 shrink-0" data-lucide="library"></i>
<span className="item-label text-[13px] font-normal transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">Asset Library</span>
</a>
</li>
</ul>
</div>

<div className="border-t border-zinc-200 dark:border-zinc-800/50 pt-3 group-[.collapsed]/sidebar:border-t-0">
<div className="px-2 text-[10px] font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-1.5 select-none opacity-80 whitespace-nowrap overflow-hidden transition-all duration-200 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:h-0 group-[.collapsed]/sidebar:mb-0">Workspaces</div>
<div className="w-8 mx-auto h-px bg-zinc-200 dark:bg-zinc-800 mb-2 hidden group-[.collapsed]/sidebar:block"></div>
<ul className="space-y-0.5" id="workspaces-list">
<li className="relative transition-all duration-200 rounded-md" draggable="true">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors group justify-start group-[.collapsed]/sidebar:justify-center pr-1 select-none" href="#">
<span className="w-5 h-5 rounded-[4px] bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] font-semibold shrink-0">T</span>
<span className="item-label text-[13px] truncate transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">Tactical Jacket</span>
<button className="action-btn relative z-10 ml-auto opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all rounded p-[3px] group-[.collapsed]/sidebar:hidden outline-none" type="button">
<i className="w-3.5 h-3.5 pointer-events-none" data-lucide="more-horizontal"></i>
</button>
</a>
</li>
<li className="relative transition-all duration-200 rounded-md" draggable="true">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors group justify-start group-[.collapsed]/sidebar:justify-center pr-1 select-none" href="#">
<span className="w-5 h-5 rounded-[4px] bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center text-[10px] font-semibold shrink-0">W</span>
<span className="item-label text-[13px] truncate transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">Website Redesign</span>
<button className="action-btn relative z-10 ml-auto opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all rounded p-[3px] group-[.collapsed]/sidebar:hidden outline-none" type="button">
<i className="w-3.5 h-3.5 pointer-events-none" data-lucide="more-horizontal"></i>
</button>
</a>
</li>
</ul>
</div>
</div>

<div className="p-3 border-t border-zinc-200 dark:border-zinc-800 space-y-0.5 bg-zinc-50/50 dark:bg-[#0c0c0e]">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors group justify-start group-[.collapsed]/sidebar:justify-center" href="#">
<i className="w-4 h-4 shrink-0" data-lucide="settings"></i>
<span className="text-[13px] font-normal transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">Settings</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors mt-1 group justify-start group-[.collapsed]/sidebar:justify-center overflow-hidden" href="#">
<div className="relative shrink-0">
<div className="w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border-[1.5px] border-white dark:border-[#0c0c0e]"></div>
</div>
<div className="flex flex-col flex-1 min-w-0 justify-center transition-all duration-200 opacity-100 w-auto group-[.collapsed]/sidebar:w-0 group-[.collapsed]/sidebar:opacity-0 group-[.collapsed]/sidebar:hidden">
<span className="text-xs font-medium text-zinc-900 dark:text-zinc-100 truncate group-hover:text-zinc-700 dark:group-hover:text-white transition-colors">Demo User</span>
<span className="text-[10px] text-zinc-500 truncate leading-tight">Pro Plan</span>
</div>
<i className="w-3.5 h-3.5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity group-[.collapsed]/sidebar:hidden" data-lucide="chevron-right"></i>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col relative bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300 overflow-hidden">

<header className="h-14 shrink-0 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md flex items-center justify-between px-5 sticky top-0 z-10 transition-colors duration-300">
<div className="flex items-center gap-2.5">
<h1 className="text-sm font-medium tracking-normal text-zinc-900 dark:text-zinc-100">Cheetah R*ch Labs</h1>
<span className="px-1.5 py-0.5 rounded-[4px] text-[9px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 uppercase tracking-wide border border-zinc-200 dark:border-zinc-700">Beta</span>
</div>
<div className="flex items-center gap-2.5">
<button className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all text-xs font-normal group">
<span className="">Configuration</span>
<i className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" data-lucide="settings-2"></i>
</button>
<button className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all text-xs font-normal">
<span className="">Share</span>
<i className="w-3 h-3" data-lucide="share"></i>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 transition-all text-xs font-medium shadow-sm active:scale-95">
<span className="">New</span>
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
<div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 mx-0.5"></div>
<button aria-label="Toggle Dark Mode" className="dark:bg-zinc-800 dark:border-zinc-700 cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 dark:focus:ring-offset-zinc-900 bg-zinc-100 w-12 h-7 border-zinc-200 border rounded-full p-1 relative" id="theme-toggle">
<div className="flex items-center justify-between w-full h-full px-1 relative z-10 pointer-events-none">
<i className="w-3 h-3 text-amber-500 transition-opacity" data-lucide="sun"></i>
<i className="w-3 h-3 text-indigo-400 transition-opacity" data-lucide="moon"></i>
</div>
<div className="dark:bg-zinc-600 transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) bg-white w-5 h-5 rounded-full absolute top-0.5 left-0.5 shadow-sm" id="toggle-circle" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}></div>
</button>
</div>
</header>

<div className="flex-1 relative overflow-hidden" id="pages-container">

<div className="page-content flex flex-col p-6 overflow-y-auto absolute inset-0 w-full h-full animate-in fade-in duration-300 z-10 bg-zinc-50 dark:bg-[#09090b]" id="page-dashboard">
</div>

<div className="page-content hidden flex-col absolute inset-0 w-full h-full bg-zinc-50 dark:bg-[#09090b]" id="page-chat">
<div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">
<div className="w-full max-w-3xl space-y-6 mt-8">

<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
<div className="flex-1 space-y-2 mt-1">
<p className="text-sm text-zinc-900 dark:text-zinc-100 leading-relaxed font-normal">Hello. I am your specialized AI assistant. How can I help you design, analyze, or plan today?</p>
</div>
</div>

<div className="flex gap-4 items-start flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden shrink-0 ring-1 ring-zinc-200 dark:ring-zinc-700">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex-1 space-y-2 mt-1 flex flex-col items-end">
<div className="bg-zinc-200 dark:bg-zinc-800 px-4 py-2.5 rounded-2xl rounded-tr-sm inline-block">
<p className="text-sm text-zinc-900 dark:text-zinc-100 leading-relaxed font-normal">Can you summarize the latest material specs for the jacket design?</p>
</div>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
<div className="flex-1 space-y-2 mt-1">
<p className="text-sm text-zinc-900 dark:text-zinc-100 leading-relaxed font-normal">Based on the workspace parameters, the current specs are:</p>
<ul className="text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 space-y-1">
<li>Shell: 100% Recycled Nylon (Ripstop)</li>
<li>Lining: Polyester mesh</li>
</ul>
</div>
</div>
</div>
</div>

<div className="p-4 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800">
<div className="max-w-3xl mx-auto relative flex items-end bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-1.5 focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:border-indigo-500 transition-all">
<button className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors shrink-0">
<i className="w-4 h-4" data-lucide="paperclip"></i>
</button>
<textarea className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-2 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 resize-none max-h-32 outline-none" placeholder="Ask anything..." rows="1" style={{minHeight: '40px'}}></textarea>
<button className="p-2 m-0.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:opacity-90 transition-opacity shrink-0 shadow-sm">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</div>
<p className="text-center text-[10px] text-zinc-400 mt-2">AI can make mistakes. Consider verifying important information.</p>
</div>
</div>

<div className="page-content hidden flex-1 relative absolute inset-0 w-full h-full overflow-hidden bg-zinc-50 dark:bg-[#0e0e11]" id="page-workspace">

<div className="absolute inset-0 canvas-grid opacity-30 dark:opacity-20 pointer-events-none" style={{-TwGradientStops: '#a1a1aa 1px, transparent 1px', backgroundSize: '24px 24px'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path className="text-zinc-300 dark:text-zinc-700" d="M 280 180 C 400 180, 350 300, 480 300" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>

<div className="absolute top-32 left-16 w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm z-10 hover:shadow-md transition-shadow cursor-move group">
<div className="px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50 rounded-t-xl">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-indigo-500" data-lucide="terminal-square"></i>
<span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">System Prompt</span>
</div>
<button className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity"><i className="w-3.5 h-3.5" data-lucide="more-horizontal"></i></button>
</div>
<div className="p-3">
<p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono bg-zinc-50 dark:bg-zinc-800/50 p-2 rounded border border-zinc-100 dark:border-zinc-800">Generate a high-fidelity rendering of a tactical winter jacket. Focus on techwear aesthetic.</p>
</div>

<div className="absolute right-[-6px] top-[50%] w-3 h-3 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-500 shadow-sm cursor-crosshair"></div>
</div>

<div className="absolute top-52 left-[30rem] w-72 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm z-10 hover:shadow-md transition-shadow cursor-move group">

<div className="absolute left-[-6px] top-[50%] w-3 h-3 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-500 shadow-sm cursor-crosshair"></div>
<div className="px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50 rounded-t-xl">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="image"></i>
<span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">Image Generation</span>
</div>
<button className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity"><i className="w-3.5 h-3.5" data-lucide="more-horizontal"></i></button>
</div>
<div className="p-3 space-y-3">
<div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 rounded-md overflow-hidden relative group/img">
<img alt="Generated Render" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
<button className="bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-md backdrop-blur-md transition-colors outline-none">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
<button className="bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-md backdrop-blur-md transition-colors outline-none">
<i className="w-4 h-4" data-lucide="maximize"></i>
</button>
</div>
</div>
<div className="flex items-center gap-2 w-full overflow-x-auto pb-1 scrollbar-hide">
<span className="px-2 py-1 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-medium rounded-md border border-zinc-200 dark:border-zinc-700 whitespace-nowrap shadow-sm">v4.0 Alpha</span>
<span className="px-2 py-1 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-medium rounded-md border border-zinc-200 dark:border-zinc-700 whitespace-nowrap shadow-sm">1024x1024 px</span>
<span className="ml-auto text-[10px] text-zinc-400 whitespace-nowrap pl-2">2 min ago</span>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 w-32 h-24 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm z-20 overflow-hidden flex items-center justify-center">
<div className="w-full h-full p-2 relative">
<div className="absolute inset-0 canvas-grid opacity-20" style={{-TwGradientStops: '#a1a1aa 1px, transparent 1px', backgroundSize: '8px 8px'}}></div>
<div className="absolute top-4 left-4 w-6 h-3 bg-zinc-300 dark:bg-zinc-600 rounded-[2px]"></div>
<div className="absolute top-8 left-14 w-8 h-6 bg-indigo-400 dark:bg-indigo-500 rounded-[2px]"></div>

<div className="absolute top-2 left-2 w-20 h-16 border border-indigo-500/50 bg-indigo-500/10 rounded-sm"></div>
</div>
</div>

<div className="absolute bottom-6 right-40 flex items-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm z-20">
<button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-l-lg transition-colors text-zinc-500 dark:text-zinc-400 outline-none">
<i className="w-3.5 h-3.5" data-lucide="minus"></i>
</button>
<span className="px-2 text-xs font-medium text-zinc-600 dark:text-zinc-300 select-none">100%</span>
<button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-r-lg transition-colors text-zinc-500 dark:text-zinc-400 outline-none">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="page-content hidden flex-col absolute inset-0 w-full h-full bg-zinc-50 dark:bg-[#09090b]" id="page-tech">
<div className="flex-1 overflow-y-auto p-6 lg:p-10">
<div className="max-w-5xl mx-auto space-y-8">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Technical Specifications</h2>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Material guidelines and manufacturing parameters.</p>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-md text-xs font-medium hover:opacity-90 transition-opacity shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="download-cloud"></i>
                                    Export JSON
                                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white dark:bg-[#121214] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Primary Shell</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500 dark:text-zinc-400">Material</span>
<span className="font-medium text-zinc-900 dark:text-zinc-100">GORE-TEX Pro 3L</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500 dark:text-zinc-400">Weight</span>
<span className="font-medium text-zinc-900 dark:text-zinc-100">114 g/m²</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500 dark:text-zinc-400">Waterproof Rating</span>
<span className="font-medium text-zinc-900 dark:text-zinc-100">28,000mm</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500 dark:text-zinc-400">Breathability</span>
<span className="font-medium text-zinc-900 dark:text-zinc-100">RET &lt; 6</span>
</li>
</ul>
</div>

<div className="bg-white dark:bg-[#121214] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="shield"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Reinforcements</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500 dark:text-zinc-400">Material</span>
<span className="font-medium text-zinc-900 dark:text-zinc-100">Cordura® 500D</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500 dark:text-zinc-400">Placement</span>
<span className="font-medium text-zinc-900 dark:text-zinc-100">Shoulders, Elbows</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500 dark:text-zinc-400">Treatment</span>
<span className="font-medium text-zinc-900 dark:text-zinc-100">C0 DWR Finish</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500 dark:text-zinc-400">Tear Strength</span>
<span className="font-medium text-zinc-900 dark:text-zinc-100">High (Warp 250N)</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="page-content hidden flex-col absolute inset-0 w-full h-full bg-zinc-50 dark:bg-[#09090b]" id="page-library">
<div className="flex-1 overflow-y-auto p-6 lg:p-10">
<div className="max-w-6xl mx-auto space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Asset Library</h2>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Manage generated textures, models, and reference images.</p>
</div>
<div className="flex items-center gap-3">
<div className="relative w-full sm:w-64">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" data-lucide="search"></i>
<input className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-9 pr-3 py-1.5 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm" placeholder="Search assets..." type="text"/>
</div>
<button className="flex items-center justify-center p-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors shadow-sm outline-none">
<i className="w-4 h-4" data-lucide="filter"></i>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="group relative aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 cursor-pointer">
<img alt="Asset" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<h4 className="text-white text-sm font-medium truncate">Jacket_Concept_V1</h4>
<p className="text-zinc-300 text-[10px] mt-0.5">PNG • 2.4 MB</p>
</div>
</div>

<div className="group relative aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 cursor-pointer">
<img alt="Asset" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<h4 className="text-white text-sm font-medium truncate">Material_Texture_02</h4>
<p className="text-zinc-300 text-[10px] mt-0.5">JPG • 1.1 MB</p>
</div>
</div>

<div className="group relative aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 cursor-pointer flex items-center justify-center border-dashed group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800/80 transition-colors">
<div className="text-center">
<div className="w-10 h-10 mx-auto rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-indigo-500 group-hover:scale-110 transition-all duration-300 mb-2 shadow-sm">
<i className="w-5 h-5" data-lucide="upload-cloud"></i>
</div>
<span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200">Upload Asset</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
