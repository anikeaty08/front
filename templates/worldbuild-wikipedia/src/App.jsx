import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
rose: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af',
400: '#fb7185',
500: '#f43f5e',
600: '#e11d48',
800: '#9f1239',
900: '#881337',
950: '#4c0519',
},
stone: {
850: '#1c1917',
}
}
}
}
}



        lucide.createIcons();
        
        // State
        let currentPage = { id: 'untitled', title: 'Untitled Page', content: '', folder: 'characters' };
        let favorites = [];
        let recentChanges = [];
        let folderCounter = 0;
        let pageCounter = 0;
        
        // Sidebar Toggle
        const sidebar = document.getElementById('sidebar');
        const toggleSidebar = document.getElementById('toggleSidebar');
        const toggleSidebarMain = document.getElementById('toggleSidebarMain');
        
        function toggleSidebarVisibility() {
            sidebar.classList.toggle('sidebar-collapsed');
        }
        
        toggleSidebar.addEventListener('click', toggleSidebarVisibility);
        toggleSidebarMain.addEventListener('click', toggleSidebarVisibility);
        
        // Folder Toggle
        document.addEventListener('click', (e) => {
            const folderHeader = e.target.closest('.folder-header');
            if (folderHeader && !e.target.closest('.add-page-to-folder')) {
                const folderItem = folderHeader.closest('.folder-item');
                const children = folderItem.querySelector('.folder-children');
                const chevron = folderHeader.querySelector('.folder-chevron');
                
                children.classList.toggle('expanded');
                
                if (children.classList.contains('expanded')) {
                    chevron.setAttribute('data-lucide', 'chevron-down');
                } else {
                    chevron.setAttribute('data-lucide', 'chevron-right');
                }
                lucide.createIcons();
            }
        });
        
        // Add Folder
        document.getElementById('addFolderBtn').addEventListener('click', () => {
            folderCounter++;
            const folderId = `folder-${folderCounter}`;
            const folderHtml = `
                <li class="folder-item" data-folder-id="${folderId}">
                    <div class="folder-header flex items-center gap-2 px-2 py-1.5 text-sm text-stone-600 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer group">
                        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-stone-400 folder-chevron"></i>
                        <i data-lucide="folder" class="w-3.5 h-3.5 text-stone-400 group-hover:text-rose-400 transition-colors"></i>
                        <span class="folder-name" contenteditable="true">New Folder</span>
                        <div class="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="add-page-to-folder text-stone-400 hover:text-stone-700 p-0.5 rounded hover:bg-stone-200" title="Add Page">
                                <i data-lucide="plus" class="w-3 h-3"></i>
                            </button>
                            <button class="delete-folder text-stone-400 hover:text-red-500 p-0.5 rounded hover:bg-stone-200" title="Delete Folder">
                                <i data-lucide="trash-2" class="w-3 h-3"></i>
                            </button>
                        </div>
                    </div>
                    <ul class="folder-children ml-2 pl-2 border-l border-stone-200 space-y-0.5 mt-0.5"></ul>
                </li>
            `;
            document.getElementById('worldBibleTree').insertAdjacentHTML('beforeend', folderHtml);
            lucide.createIcons();
        });
        
        // Add Page (root level)
        document.getElementById('addPageBtn').addEventListener('click', () => {
            const firstFolder = document.querySelector('.folder-item .folder-children');
            if (firstFolder) {
                addPageToFolder(firstFolder);
            }
        });
        
        // Add Page to Folder
        document.addEventListener('click', (e) => {
            if (e.target.closest('.add-page-to-folder')) {
                e.stopPropagation();
                const folderItem = e.target.closest('.folder-item');
                const children = folderItem.querySelector('.folder-children');
                children.classList.add('expanded');
                const chevron = folderItem.querySelector('.folder-chevron');
                chevron.setAttribute('data-lucide', 'chevron-down');
                lucide.createIcons();
                addPageToFolder(children);
            }
        });
        
        function addPageToFolder(container) {
            pageCounter++;
            const pageId = `page-${pageCounter}`;
            const pageHtml = `
                <li class="page-item" data-page-id="${pageId}">
                    <a href="#" class="page-link flex items-center gap-2 px-2 py-1.5 text-sm text-stone-600 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors">
                        <span class="w-1 h-1 rounded-full bg-stone-300"></span>
                        <span class="page-name">Untitled</span>
                    </a>
                </li>
            `;
            container.insertAdjacentHTML('beforeend', pageHtml);
            
            // Select the new page
            const newPage = container.querySelector(`[data-page-id="${pageId}"]`);
            selectPage(newPage);
        }
        
        // Delete Folder
        document.addEventListener('click', (e) => {
            if (e.target.closest('.delete-folder')) {
                e.stopPropagation();
                const folderItem = e.target.closest('.folder-item');
                if (confirm('Delete this folder and all its contents?')) {
                    folderItem.remove();
                }
            }
        });
        
        // Select Page
        document.addEventListener('click', (e) => {
            const pageLink = e.target.closest('.page-link');
            if (pageLink) {
                e.preventDefault();
                const pageItem = pageLink.closest('.page-item');
                selectPage(pageItem);
            }
        });
        
        function selectPage(pageItem) {
            // Remove active state from all pages
            document.querySelectorAll('.page-item').forEach(p => {
                p.classList.remove('active-page');
                const link = p.querySelector('.page-link');
                if (link) {
                    link.classList.remove('bg-rose-50', 'text-rose-700', 'font-medium');
                    link.classList.add('text-stone-600');
                }
            });
            
            // Add active state
            pageItem.classList.add('active-page');
            const link = pageItem.querySelector('.page-link');
            if (link) {
                link.classList.add('bg-rose-50', 'text-rose-700', 'font-medium');
                link.classList.remove('text-stone-600');
            }
            
            const pageName = pageItem.querySelector('.page-name').textContent;
            document.getElementById('currentPageBreadcrumb').textContent = pageName;
            document.getElementById('pageTitle').textContent = pageName;
            
            // Reset editor
            document.getElementById('templateSelector').classList.remove('hidden');
            document.getElementById('editorContent').classList.add('hidden');
            document.getElementById('contentArea').innerHTML = '';
        }
        
        // Page Title Change
        const pageTitle = document.getElementById('pageTitle');
        pageTitle.addEventListener('input', () => {
            const title = pageTitle.textContent || 'Untitled Page';
            document.getElementById('currentPageBreadcrumb').textContent = title;
            
            const activePage = document.querySelector('.active-page .page-name');
            if (activePage) {
                activePage.textContent = title;
            }
            
            // Track change
            addRecentChange(title);
        });
        
        // Template Selection
        document.querySelectorAll('.template-card').forEach(card => {
            card.addEventListener('click', () => {
                const template = card.dataset.template;
                applyTemplate(template);
            });
        });
        
        function applyTemplate(template) {
            document.getElementById('templateSelector').classList.add('hidden');
            document.getElementById('editorContent').classList.remove('hidden');
            
            const contentArea = document.getElementById('contentArea');
            let html = '';
            
            switch(template) {
                case 'blank':
                    html = '<p class="text-stone-600">Start writing...</p>';
                    break;
                case 'character':
                    html = `
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Biography</h2>
                        <p class="text-stone-600 mb-6">Write the character's background story...</p>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Physical Traits</h2>
                        <ul class="list-disc list-inside text-stone-600 mb-6">
                            <li>Age:</li>
                            <li>Height:</li>
                            <li>Appearance:</li>
                        </ul>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Personality</h2>
                        <p class="text-stone-600 mb-6">Describe their personality traits...</p>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Relationships</h2>
                        <p class="text-stone-600">Key relationships with other characters...</p>
                    `;
                    break;
                case 'location':
                    html = `
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Overview</h2>
                        <p class="text-stone-600 mb-6">General description of the location...</p>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Geography</h2>
                        <p class="text-stone-600 mb-6">Physical features and terrain...</p>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Climate</h2>
                        <p class="text-stone-600 mb-6">Weather patterns and seasons...</p>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Demographics</h2>
                        <p class="text-stone-600 mb-6">Population and inhabitants...</p>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Points of Interest</h2>
                        <ul class="list-disc list-inside text-stone-600">
                            <li>Notable landmarks</li>
                        </ul>
                    `;
                    break;
                case 'lore':
                    html = `
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Summary</h2>
                        <p class="text-stone-600 mb-6">Brief overview of this event or concept...</p>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Historical Context</h2>
                        <p class="text-stone-600 mb-6">When and where this took place...</p>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Key Figures</h2>
                        <p class="text-stone-600 mb-6">Important people involved...</p>
                        <h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Impact</h2>
                        <p class="text-stone-600">How this affected the world...</p>
                    `;
                    break;
            }
            
            contentArea.innerHTML = html;
            document.getElementById('documentStatus').textContent = 'Editing';
        }
        
        // Slash Command Menu
        const commandMenu = document.getElementById('commandMenu');
        const contentArea = document.getElementById('contentArea');
        const commandSearch = document.getElementById('commandSearch');
        
        contentArea.addEventListener('keydown', (e) => {
            if (e.key === '/') {
                const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
                commandMenu.style.top = `${rect.bottom + 10}px`;
                commandMenu.style.left = `${rect.left}px`;
                commandMenu.classList.add('active');
                setTimeout(() => commandSearch.focus(), 10);
            }
            
            if (e.key === 'Escape') {
                commandMenu.classList.remove('active');
            }
        });
        
        // Command Search
        commandSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.command-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? 'flex' : 'none';
            });
        });
        
        // Execute Command
        document.querySelectorAll('.command-item').forEach(item => {
            item.addEventListener('click', () => {
                const command = item.dataset.command;
                executeCommand(command);
                commandMenu.classList.remove('active');
                commandSearch.value = '';
            });
        });
        
        function executeCommand(command) {
            let html = '';
            
            switch(command) {
                case 'h1':
                    html = '<h1 class="text-4xl font-serif font-medium text-stone-900 mb-4">Heading 1</h1>';
                    break;
                case 'h2':
                    html = '<h2 class="text-2xl font-serif font-medium text-stone-900 mb-4">Heading 2</h2>';
                    break;
                case 'h3':
                    html = '<h3 class="text-xl font-serif font-medium text-stone-900 mb-3">Heading 3</h3>';
                    break;
                case 'paragraph':
                    html = '<p class="text-stone-600 mb-4">New paragraph...</p>';
                    break;
                case 'bullet':
                    html = '<ul class="list-disc list-inside text-stone-600 mb-4"><li>Item 1</li><li>Item 2</li></ul>';
                    break;
                case 'numbered':
                    html = '<ol class="list-decimal list-inside text-stone-600 mb-4"><li>Item 1</li><li>Item 2</li></ol>';
                    break;
                case 'quote':
                    html = '<blockquote class="border-l-4 border-rose-300 pl-4 italic text-stone-600 mb-4">Quote text...</blockquote>';
                    break;
                case 'divider':
                    html = '<hr class="border-stone-200 my-6">';
                    break;
                case 'callout':
                    html = '<div class="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-4 text-stone-700">Callout text...</div>';
                    break;
            }
            
            // Remove the / character and insert block
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const textNode = range.startContainer;
                if (textNode.nodeType === Node.TEXT_NODE) {
                    const text = textNode.textContent;
                    const slashIndex = text.lastIndexOf('/');
                    if (slashIndex !== -1) {
                        textNode.textContent = text.substring(0, slashIndex);
                    }
                }
            }
            
            document.execCommand('insertHTML', false, html);
        }
        
        // Close command menu on outside click
        document.addEventListener('click', (e) => {
            if (!commandMenu.contains(e.target) && !contentArea.contains(e.target)) {
                commandMenu.classList.remove('active');
            }
        });
        
        // Icon Picker
        const iconPickerModal = document.getElementById('iconPickerModal');
        const addIconBtn = document.getElementById('addIconBtn');
        const closeIconPicker = document.getElementById('closeIconPicker');
        const pageIconDisplay = document.getElementById('pageIconDisplay');
        const selectedIcon = document.getElementById('selectedIcon');
        
        addIconBtn.addEventListener('click', () => {
            iconPickerModal.classList.remove('hidden');
        });
        
        closeIconPicker.addEventListener('click', () => {
            iconPickerModal.classList.add('hidden');
        });
        
        document.querySelectorAll('.icon-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const icon = btn.dataset.icon;
                selectedIcon.textContent = icon;
                pageIconDisplay.classList.remove('hidden');
                addIconBtn.classList.add('hidden');
                iconPickerModal.classList.add('hidden');
            });
        });
        
        selectedIcon.addEventListener('click', () => {
            iconPickerModal.classList.remove('hidden');
        });
        
        // Cover Image
        const addCoverBtn = document.getElementById('addCoverBtn');
        const coverImageContainer = document.getElementById('coverImageContainer');
        const removeCoverBtn = document.getElementById('removeCoverBtn');
        
        addCoverBtn.addEventListener('click', () => {
            coverImageContainer.classList.remove('hidden');
            addCoverBtn.classList.add('hidden');
        });
        
        removeCoverBtn.addEventListener('click', () => {
            coverImageContainer.classList.add('hidden');
            addCoverBtn.classList.remove('hidden');
        });
        
        // Settings Modal
        const settingsModal = document.getElementById('settingsModal');
        const settingsBtn = document.getElementById('settingsBtn');
        const closeSettings = document.getElementById('closeSettings');
        
        settingsBtn.addEventListener('click', () => {
            settingsModal.classList.remove('hidden');
        });
        
        closeSettings.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });
        
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.classList.add('hidden');
            }
        });
        
        iconPickerModal.addEventListener('click', (e) => {
            if (e.target === iconPickerModal) {
                iconPickerModal.classList.add('hidden');
            }
        });
        
        // Recent Changes
        function addRecentChange(title) {
            recentChanges.unshift({ title, time: new Date() });
            if (recentChanges.length > 10) recentChanges.pop();
        }
        
        document.getElementById('recentChangesBtn').addEventListener('click', (e) => {
            e.preventDefault();
            alert('Recent Changes:\n' + (recentChanges.length ? recentChanges.map(r => `- ${r.title}`).join('\n') : 'No recent changes'));
        });
        
        // Favorites
        document.getElementById('favoritesBtn').addEventListener('click', (e) => {
            e.preventDefault();
            alert('Favorites:\n' + (favorites.length ? favorites.join('\n') : 'No favorites yet'));
        });
        
        // Auto-save simulation
        let saveTimeout;
        contentArea.addEventListener('input', () => {
            document.getElementById('documentStatus').textContent = 'Saving...';
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                document.getElementById('documentStatus').textContent = 'Saved';
                addRecentChange(pageTitle.textContent || 'Untitled Page');
            }, 1000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-72 bg-stone-50/50 border-r border-stone-200 flex flex-col h-full shrink-0 select-none transition-all duration-300" id="sidebar">

<div className="h-14 flex items-center px-4 border-b border-stone-100">
<div className="flex items-center gap-3 cursor-pointer group w-full">
<div className="w-6 h-6 rounded bg-stone-900 text-white flex items-center justify-center shadow-sm group-hover:bg-rose-600 transition-colors">
<span className="font-serif font-medium text-xs">O</span>
</div>
<span className="font-serif font-medium text-lg tracking-tight text-stone-900">ODDYSEY</span>
<button className="ml-auto text-stone-400 hover:text-stone-800 transition-colors p-1.5 rounded-md hover:bg-stone-200/50" id="toggleSidebar">
<i className="w-4 h-4" data-lucide="chevrons-left"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">

<div>
<h3 className="px-2 mb-2 text-[10px] font-semibold text-stone-400 uppercase tracking-widest">Quick Access</h3>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-stone-600 rounded-md hover:bg-stone-200/50 hover:text-stone-900 transition-colors" href="#" id="recentChangesBtn">
<i className="w-3.5 h-3.5 text-stone-400" data-lucide="clock"></i>
                            Recent Changes
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-stone-600 rounded-md hover:bg-stone-200/50 hover:text-stone-900 transition-colors" href="#" id="favoritesBtn">
<i className="w-3.5 h-3.5 text-stone-400" data-lucide="star"></i>
                            Favorites
                        </a>
</li>
</ul>
</div>

<div>
<div className="px-2 mb-2 flex items-center justify-between group">
<h3 className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest">World Bible</h3>
<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-stone-400 hover:text-stone-700 p-0.5 rounded hover:bg-stone-200" id="addFolderBtn" title="Add Folder">
<i className="w-3 h-3" data-lucide="folder-plus"></i>
</button>
<button className="text-stone-400 hover:text-stone-700 p-0.5 rounded hover:bg-stone-200" id="addPageBtn" title="Add Page">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
</div>
</div>
<ul className="space-y-0.5" id="worldBibleTree">

<li className="folder-item" data-folder-id="characters">
<div className="folder-header flex items-center gap-2 px-2 py-1.5 text-sm text-stone-700 font-medium rounded-md hover:bg-stone-100 cursor-pointer group">
<i className="w-3.5 h-3.5 text-stone-400 folder-chevron" data-lucide="chevron-down"></i>
<i className="w-3.5 h-3.5 text-rose-500" data-lucide="users"></i>
<span className="folder-name">Characters</span>
<div className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="add-page-to-folder text-stone-400 hover:text-stone-700 p-0.5 rounded hover:bg-stone-200" title="Add Page">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
</div>
</div>

<ul className="folder-children expanded ml-2 pl-2 border-l border-stone-200 space-y-0.5 mt-0.5">
<li className="page-item" data-page-id="apollo">
<a className="page-link flex items-center gap-2 px-2 py-1.5 text-sm text-stone-600 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors" href="#">
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="page-name">Apollo</span>
</a>
</li>
<li className="page-item" data-page-id="zeus">
<a className="page-link flex items-center gap-2 px-2 py-1.5 text-sm text-stone-600 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors" href="#">
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="page-name">Zeus</span>
</a>
</li>

<li className="page-item active-page" data-page-id="untitled">
<div className="flex items-center gap-2 px-2 py-1.5 text-sm bg-rose-50 text-rose-700 rounded-md font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
<span className="page-name">Untitled Page</span>
</div>
</li>
</ul>
</li>

<li className="folder-item" data-folder-id="locations">
<div className="folder-header flex items-center gap-2 px-2 py-1.5 text-sm text-stone-600 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer group">
<i className="w-3.5 h-3.5 text-stone-400 folder-chevron" data-lucide="chevron-right"></i>
<i className="w-3.5 h-3.5 text-stone-400 group-hover:text-rose-400 transition-colors" data-lucide="map"></i>
<span className="folder-name">Locations</span>
<div className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="add-page-to-folder text-stone-400 hover:text-stone-700 p-0.5 rounded hover:bg-stone-200" title="Add Page">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
</div>
</div>
<ul className="folder-children ml-2 pl-2 border-l border-stone-200 space-y-0.5 mt-0.5"></ul>
</li>

<li className="folder-item" data-folder-id="lore">
<div className="folder-header flex items-center gap-2 px-2 py-1.5 text-sm text-stone-600 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer group">
<i className="w-3.5 h-3.5 text-stone-400 folder-chevron" data-lucide="chevron-right"></i>
<i className="w-3.5 h-3.5 text-stone-400 group-hover:text-rose-400 transition-colors" data-lucide="scroll"></i>
<span className="folder-name">Lore &amp; History</span>
<div className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="add-page-to-folder text-stone-400 hover:text-stone-700 p-0.5 rounded hover:bg-stone-200" title="Add Page">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
</div>
</div>
<ul className="folder-children ml-2 pl-2 border-l border-stone-200 space-y-0.5 mt-0.5"></ul>
</li>

<li className="folder-item" data-folder-id="items">
<div className="folder-header flex items-center gap-2 px-2 py-1.5 text-sm text-stone-600 rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer group">
<i className="w-3.5 h-3.5 text-stone-400 folder-chevron" data-lucide="chevron-right"></i>
<i className="w-3.5 h-3.5 text-stone-400 group-hover:text-rose-400 transition-colors" data-lucide="backpack"></i>
<span className="folder-name">Items</span>
<div className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="add-page-to-folder text-stone-400 hover:text-stone-700 p-0.5 rounded hover:bg-stone-200" title="Add Page">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
</div>
</div>
<ul className="folder-children ml-2 pl-2 border-l border-stone-200 space-y-0.5 mt-0.5"></ul>
</li>
</ul>
</div>
</div>

<div className="p-3 border-t border-stone-200 bg-white">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-stone-50 transition-colors text-left group" id="settingsBtn">
<div className="w-7 h-7 rounded-full bg-stone-200 flex items-center justify-center text-xs font-serif font-medium text-stone-600 border border-stone-300">H</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-stone-900">Homer's Workspace</span>
<span className="text-[10px] text-stone-500">Free Plan</span>
</div>
<i className="w-3.5 h-3.5 ml-auto text-stone-400 group-hover:text-stone-600" data-lucide="settings"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-14 border-b border-stone-100 flex items-center justify-between px-8 bg-white sticky top-0 z-10">
<div className="flex items-center gap-2 text-sm text-stone-500" id="breadcrumbs">
<i className="w-4 h-4 text-stone-400 mr-1" data-lucide="book"></i>
<span className="hover:text-stone-800 cursor-pointer transition-colors">World Bible</span>
<span className="text-stone-300">/</span>
<span className="hover:text-stone-800 cursor-pointer transition-colors">Characters</span>
<span className="text-stone-300">/</span>
<span className="text-stone-400" id="currentPageBreadcrumb">Untitled Page</span>
</div>
<div className="flex items-center gap-4">
<div className="text-[10px] uppercase font-bold tracking-widest text-stone-300" id="documentStatus">Draft</div>
<div className="h-4 w-px bg-stone-200"></div>
<button className="text-stone-400 hover:text-stone-700 transition-colors" id="toggleSidebarMain">
<i className="w-4 h-4" data-lucide="sidebar"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-white">
<div className="max-w-[850px] mx-auto px-8 py-16 pb-32">

<div className="group mb-10">
<div className="flex items-center gap-3 mb-4 text-stone-400">
<div className="flex items-center gap-1 hover:text-stone-600 cursor-pointer transition-colors" id="addIconBtn">
<i className="w-4 h-4" data-lucide="smile"></i>
<span className="text-xs font-medium">Add Icon</span>
</div>
<div className="flex items-center gap-1 hover:text-stone-600 cursor-pointer transition-colors" id="addCoverBtn">
<i className="w-4 h-4" data-lucide="image"></i>
<span className="text-xs font-medium">Add Cover</span>
</div>
</div>

<div className="hidden mb-4" id="pageIconDisplay">
<span className="text-5xl cursor-pointer hover:opacity-80" id="selectedIcon"></span>
</div>

<div className="hidden -mx-8 -mt-16 mb-8 h-48 bg-gradient-to-br from-rose-100 to-stone-100 relative" id="coverImageContainer">
<button className="absolute top-2 right-2 bg-white/80 hover:bg-white text-stone-600 p-1.5 rounded-md text-xs" id="removeCoverBtn">Remove</button>
</div>
<h1 className="font-serif text-5xl tracking-tight text-stone-900 placeholder:text-stone-300 focus:outline-none w-full" contenteditable="true" id="pageTitle" placeholder="Untitled Page"></h1>
</div>

<div className="mt-12 animate-fade-in" id="templateSelector">
<div className="flex items-center justify-between mb-6">
<p className="text-sm text-stone-500 font-medium">Start writing or choose a template</p>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="template-card group p-4 rounded-xl border border-stone-200 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-100/50 cursor-pointer transition-all duration-200 bg-white" data-template="blank">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-rose-500 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1 group-hover:text-rose-600 transition-colors">Empty Page</h3>
<p className="text-xs text-stone-500 leading-relaxed">Start with a blank canvas for freeform writing.</p>
</div>
</div>
</div>

<div className="template-card group p-4 rounded-xl border border-stone-200 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-100/50 cursor-pointer transition-all duration-200 bg-white" data-template="character">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-rose-500 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1 group-hover:text-rose-600 transition-colors">Character Sheet</h3>
<p className="text-xs text-stone-500 leading-relaxed">Includes biography, physical traits, personality, and relationships.</p>
</div>
</div>
</div>

<div className="template-card group p-4 rounded-xl border border-stone-200 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-100/50 cursor-pointer transition-all duration-200 bg-white" data-template="location">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-rose-500 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1 group-hover:text-rose-600 transition-colors">Location</h3>
<p className="text-xs text-stone-500 leading-relaxed">Geography, climate, demographics, and points of interest.</p>
</div>
</div>
</div>

<div className="template-card group p-4 rounded-xl border border-stone-200 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-100/50 cursor-pointer transition-all duration-200 bg-white" data-template="lore">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-rose-500 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors">
<i className="w-5 h-5" data-lucide="book-open"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1 group-hover:text-rose-600 transition-colors">Lore Event</h3>
<p className="text-xs text-stone-500 leading-relaxed">Record historical events, myths, timeline entries, or magical systems.</p>
</div>
</div>
</div>
</div>

<div className="relative py-10">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-stone-100"></div>
</div>
<div className="relative flex justify-center text-xs uppercase tracking-widest">
<span className="bg-white px-2 text-stone-400">Or type '/' for commands</span>
</div>
</div>
<div className="pl-2 border-l-2 border-stone-200 text-stone-400 italic text-lg font-serif" id="editorPlaceholder">
                        Start typing...
                    </div>
</div>

<div className="hidden mt-8" id="editorContent">
<div className="prose prose-stone max-w-none focus:outline-none min-h-[200px] relative" contenteditable="true" id="contentArea"></div>
</div>
</div>
</div>
</main>

<div className="command-menu fixed bg-white rounded-xl shadow-xl border border-stone-200 py-2 w-72 z-50" id="commandMenu">
<div className="px-3 pb-2 border-b border-stone-100">
<input className="w-full text-sm bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 focus:outline-none focus:border-rose-300" id="commandSearch" placeholder="Search commands..." type="text"/>
</div>
<div className="py-2 max-h-64 overflow-y-auto">
<div className="px-2 py-1 text-[10px] font-semibold text-stone-400 uppercase tracking-widest">Basic Blocks</div>
<button className="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3" data-command="h1">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<span className="font-bold text-sm">H1</span>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Heading 1</div>
<div className="text-xs text-stone-500">Large section heading</div>
</div>
</button>
<button className="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3" data-command="h2">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<span className="font-bold text-sm">H2</span>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Heading 2</div>
<div className="text-xs text-stone-500">Medium section heading</div>
</div>
</button>
<button className="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3" data-command="h3">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<span className="font-bold text-sm">H3</span>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Heading 3</div>
<div className="text-xs text-stone-500">Small section heading</div>
</div>
</button>
<button className="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3" data-command="paragraph">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<i className="w-4 h-4" data-lucide="align-left"></i>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Paragraph</div>
<div className="text-xs text-stone-500">Plain text block</div>
</div>
</button>
<button className="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3" data-command="bullet">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<i className="w-4 h-4" data-lucide="list"></i>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Bullet List</div>
<div className="text-xs text-stone-500">Unordered list</div>
</div>
</button>
<button className="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3" data-command="numbered">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<i className="w-4 h-4" data-lucide="list-ordered"></i>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Numbered List</div>
<div className="text-xs text-stone-500">Ordered list</div>
</div>
</button>
<button className="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3" data-command="quote">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<i className="w-4 h-4" data-lucide="quote"></i>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Quote</div>
<div className="text-xs text-stone-500">Blockquote text</div>
</div>
</button>
<button className="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3" data-command="divider">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<i className="w-4 h-4" data-lucide="minus"></i>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Divider</div>
<div className="text-xs text-stone-500">Horizontal line</div>
</div>
</button>
<button className="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3" data-command="callout">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
<i className="w-4 h-4" data-lucide="alert-circle"></i>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Callout</div>
<div className="text-xs text-stone-500">Highlighted info box</div>
</div>
</button>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/20 z-50 flex items-center justify-center" id="iconPickerModal">
<div className="bg-white rounded-xl shadow-xl border border-stone-200 p-4 w-80">
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-stone-900">Choose Icon</h3>
<button className="text-stone-400 hover:text-stone-600" id="closeIconPicker">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="grid grid-cols-8 gap-2">
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="👤">👤</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="⚔️">⚔️</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="🏰">🏰</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="🗺️">🗺️</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="📜">📜</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="🐉">🐉</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="✨">✨</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="🌟">🌟</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="🔮">🔮</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="👑">👑</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="🏹">🏹</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="🛡️">🛡️</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="💎">💎</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="🌙">🌙</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="☀️">☀️</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1" data-icon="🌊">🌊</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/20 z-50 flex items-center justify-center" id="settingsModal">
<div className="bg-white rounded-xl shadow-xl border border-stone-200 p-6 w-96">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-stone-900 text-lg">Settings</h3>
<button className="text-stone-400 hover:text-stone-600" id="closeSettings">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-stone-700">Workspace Name</span>
<input className="text-sm border border-stone-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-rose-300" type="text" value="Homer's Workspace"/>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-stone-700">Auto-save</span>
<div className="w-10 h-6 bg-rose-500 rounded-full p-1 cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
