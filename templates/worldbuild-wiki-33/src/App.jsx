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



        // Initialize Lucide icons
        lucide.createIcons();
        
        // ============================================
        // STORAGE & STATE MANAGEMENT (LocalStorage Backend Simulation)
        // ============================================
        
        const DB_KEYS = {
            WORKSPACE: 'oddyssey_workspace',
            FOLDERS: 'oddyssey_folders',
            PAGES: 'oddyssey_pages',
            FAVORITES: 'oddyssey_favorites',
            RECENT: 'oddyssey_recent',
            SIDEBAR_STATE: 'oddyssey_sidebar',
            FOLDER_STATES: 'oddyssey_folder_states'
        };
        
        // Default workspace structure
        const DEFAULT_WORKSPACE = {
            id: 'workspace-1',
            name: "Homer's Workspace",
            autoSave: true
        };
        
        const DEFAULT_FOLDERS = [
            { id: 'characters', name: 'Characters', icon: 'users', order: 0, deletedAt: null },
            { id: 'locations', name: 'Locations', icon: 'map', order: 1, deletedAt: null },
            { id: 'lore', name: 'Lore & History', icon: 'scroll', order: 2, deletedAt: null },
            { id: 'items', name: 'Items', icon: 'backpack', order: 3, deletedAt: null }
        ];
        
        // Database operations
        const db = {
            get(key, defaultValue = null) {
                try {
                    const data = localStorage.getItem(key);
                    return data ? JSON.parse(data) : defaultValue;
                } catch (e) {
                    console.error('DB get error:', e);
                    return defaultValue;
                }
            },
            
            set(key, value) {
                try {
                    localStorage.setItem(key, JSON.stringify(value));
                    return true;
                } catch (e) {
                    console.error('DB set error:', e);
                    return false;
                }
            },
            
            // Workspace operations
            getWorkspace() {
                return this.get(DB_KEYS.WORKSPACE, DEFAULT_WORKSPACE);
            },
            
            saveWorkspace(workspace) {
                return this.set(DB_KEYS.WORKSPACE, workspace);
            },
            
            // Folder operations
            getFolders() {
                const folders = this.get(DB_KEYS.FOLDERS, DEFAULT_FOLDERS);
                return folders.filter(f => !f.deletedAt);
            },
            
            getAllFolders() {
                return this.get(DB_KEYS.FOLDERS, DEFAULT_FOLDERS);
            },
            
            saveFolder(folder) {
                const folders = this.getAllFolders();
                const index = folders.findIndex(f => f.id === folder.id);
                if (index >= 0) {
                    folders[index] = { ...folders[index], ...folder, updatedAt: Date.now() };
                } else {
                    folders.push({ ...folder, createdAt: Date.now(), updatedAt: Date.now() });
                }
                return this.set(DB_KEYS.FOLDERS, folders);
            },
            
            deleteFolder(folderId, soft = true) {
                const folders = this.getAllFolders();
                const index = folders.findIndex(f => f.id === folderId);
                if (index >= 0) {
                    if (soft) {
                        folders[index].deletedAt = Date.now();
                    } else {
                        folders.splice(index, 1);
                    }
                    // Also soft delete pages in folder
                    const pages = this.getAllPages();
                    pages.forEach(p => {
                        if (p.folderId === folderId) {
                            p.deletedAt = Date.now();
                        }
                    });
                    this.set(DB_KEYS.PAGES, pages);
                    return this.set(DB_KEYS.FOLDERS, folders);
                }
                return false;
            },
            
            restoreFolder(folderId) {
                const folders = this.getAllFolders();
                const index = folders.findIndex(f => f.id === folderId);
                if (index >= 0) {
                    folders[index].deletedAt = null;
                    // Also restore pages
                    const pages = this.getAllPages();
                    pages.forEach(p => {
                        if (p.folderId === folderId && p.deletedAt) {
                            p.deletedAt = null;
                        }
                    });
                    this.set(DB_KEYS.PAGES, pages);
                    return this.set(DB_KEYS.FOLDERS, folders);
                }
                return false;
            },
            
            // Page operations
            getPages(folderId = null) {
                const pages = this.get(DB_KEYS.PAGES, []);
                let filtered = pages.filter(p => !p.deletedAt);
                if (folderId) {
                    filtered = filtered.filter(p => p.folderId === folderId);
                }
                return filtered.sort((a, b) => (a.order || 0) - (b.order || 0));
            },
            
            getAllPages() {
                return this.get(DB_KEYS.PAGES, []);
            },
            
            getPage(pageId) {
                const pages = this.getAllPages();
                return pages.find(p => p.id === pageId && !p.deletedAt);
            },
            
            savePage(page) {
                const pages = this.getAllPages();
                const index = pages.findIndex(p => p.id === page.id);
                const now = Date.now();
                if (index >= 0) {
                    pages[index] = { ...pages[index], ...page, updatedAt: now };
                } else {
                    pages.push({ ...page, createdAt: now, updatedAt: now });
                }
                this.set(DB_KEYS.PAGES, pages);
                // Add to recent
                this.addRecent(page.id);
                return pages.find(p => p.id === page.id);
            },
            
            deletePage(pageId, soft = true) {
                const pages = this.getAllPages();
                const index = pages.findIndex(p => p.id === pageId);
                if (index >= 0) {
                    const deletedPage = { ...pages[index] };
                    if (soft) {
                        pages[index].deletedAt = Date.now();
                    } else {
                        pages.splice(index, 1);
                    }
                    this.set(DB_KEYS.PAGES, pages);
                    // Remove from favorites
                    this.removeFavorite(pageId);
                    return deletedPage;
                }
                return null;
            },
            
            restorePage(pageId) {
                const pages = this.getAllPages();
                const index = pages.findIndex(p => p.id === pageId);
                if (index >= 0) {
                    pages[index].deletedAt = null;
                    return this.set(DB_KEYS.PAGES, pages);
                }
                return false;
            },
            
            // Favorites
            getFavorites() {
                return this.get(DB_KEYS.FAVORITES, []);
            },
            
            addFavorite(pageId) {
                const favorites = this.getFavorites();
                if (!favorites.includes(pageId)) {
                    favorites.push(pageId);
                    return this.set(DB_KEYS.FAVORITES, favorites);
                }
                return true;
            },
            
            removeFavorite(pageId) {
                const favorites = this.getFavorites();
                const index = favorites.indexOf(pageId);
                if (index >= 0) {
                    favorites.splice(index, 1);
                    return this.set(DB_KEYS.FAVORITES, favorites);
                }
                return true;
            },
            
            isFavorite(pageId) {
                return this.getFavorites().includes(pageId);
            },
            
            // Recent changes
            getRecent(limit = 20) {
                const recent = this.get(DB_KEYS.RECENT, []);
                return recent.slice(0, limit);
            },
            
            addRecent(pageId) {
                let recent = this.get(DB_KEYS.RECENT, []);
                recent = recent.filter(r => r.pageId !== pageId);
                recent.unshift({ pageId, timestamp: Date.now() });
                recent = recent.slice(0, 50);
                return this.set(DB_KEYS.RECENT, recent);
            },
            
            // UI State
            getSidebarState() {
                return this.get(DB_KEYS.SIDEBAR_STATE, { collapsed: false });
            },
            
            setSidebarState(state) {
                return this.set(DB_KEYS.SIDEBAR_STATE, state);
            },
            
            getFolderStates() {
                return this.get(DB_KEYS.FOLDER_STATES, {});
            },
            
            setFolderState(folderId, expanded) {
                const states = this.getFolderStates();
                states[folderId] = expanded;
                return this.set(DB_KEYS.FOLDER_STATES, states);
            }
        };
        
        // ============================================
        // APP STATE
        // ============================================
        
        let state = {
            currentPageId: null,
            workspace: db.getWorkspace(),
            saveTimeout: null,
            commandMenuState: {
                active: false,
                selectedIndex: 0,
                triggerPosition: null,
                searchQuery: ''
            },
            undoStack: [],
            contextMenuTarget: null
        };
        
        // ============================================
        // UTILITY FUNCTIONS
        // ============================================
        
        function generateId() {
            return 'id-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        }
        
        function sanitizeHTML(html) {
            const allowed = ['p', 'h1', 'h2', 'h3', 'ul', 'ol', 'li', 'blockquote', 'hr', 'div', 'br', 'strong', 'em', 'span'];
            const tmp = document.createElement('div');
            tmp.innerHTML = html;
            
            function cleanNode(node) {
                if (node.nodeType === Node.TEXT_NODE) return;
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const tag = node.tagName.toLowerCase();
                    if (!allowed.includes(tag)) {
                        const text = document.createTextNode(node.textContent);
                        node.parentNode.replaceChild(text, node);
                        return;
                    }
                    // Remove event handlers and dangerous attributes
                    const attrs = Array.from(node.attributes);
                    attrs.forEach(attr => {
                        if (attr.name.startsWith('on') || attr.name === 'href' && attr.value.startsWith('javascript:')) {
                            node.removeAttribute(attr.name);
                        }
                    });
                    Array.from(node.childNodes).forEach(cleanNode);
                }
            }
            
            Array.from(tmp.childNodes).forEach(cleanNode);
            return tmp.innerHTML;
        }
        
        function debounce(fn, delay) {
            let timeout;
            return function(...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => fn.apply(this, args), delay);
            };
        }
        
        // ============================================
        // TOAST NOTIFICATIONS
        // ============================================
        
        function showToast(message, type = 'info', undoAction = null, duration = 4000) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            const id = generateId();
            
            const colors = {
                info: 'bg-stone-900 text-white',
                success: 'bg-emerald-600 text-white',
                error: 'bg-red-600 text-white',
                warning: 'bg-amber-500 text-white'
            };
            
            toast.id = id;
            toast.className = `toast-enter ${colors[type]} px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 text-sm font-medium`;
            toast.innerHTML = `
                <span>${message}</span>
                ${undoAction ? '<button class="undo-btn ml-2 underline hover:no-underline">Undo</button>' : ''}
                <button class="close-toast ml-2 opacity-60 hover:opacity-100">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            `;
            
            container.appendChild(toast);
            
            const closeToast = () => {
                toast.classList.remove('toast-enter');
                toast.classList.add('toast-exit');
                setTimeout(() => toast.remove(), 300);
            };
            
            toast.querySelector('.close-toast').addEventListener('click', closeToast);
            
            if (undoAction) {
                toast.querySelector('.undo-btn').addEventListener('click', () => {
                    undoAction();
                    closeToast();
                });
            }
            
            setTimeout(closeToast, duration);
            
            return id;
        }
        
        // ============================================
        // CONFIRMATION MODAL
        // ============================================
        
        function showConfirmModal(title, message, onConfirm, confirmText = 'Delete') {
            const modal = document.getElementById('confirmModal');
            document.getElementById('confirmTitle').textContent = title;
            document.getElementById('confirmMessage').textContent = message;
            document.getElementById('confirmAction').textContent = confirmText;
            
            modal.classList.remove('hidden');
            
            const handleConfirm = () => {
                onConfirm();
                modal.classList.add('hidden');
                cleanup();
            };
            
            const handleCancel = () => {
                modal.classList.add('hidden');
                cleanup();
            };
            
            const cleanup = () => {
                document.getElementById('confirmAction').removeEventListener('click', handleConfirm);
                document.getElementById('confirmCancel').removeEventListener('click', handleCancel);
            };
            
            document.getElementById('confirmAction').addEventListener('click', handleConfirm);
            document.getElementById('confirmCancel').addEventListener('click', handleCancel);
        }
        
        // ============================================
        // RENAME MODAL
        // ============================================
        
        function showRenameModal(currentName, onRename) {
            const modal = document.getElementById('renameModal');
            const input = document.getElementById('renameInput');
            input.value = currentName;
            
            modal.classList.remove('hidden');
            input.focus();
            input.select();
            
            const handleConfirm = () => {
                const newName = input.value.trim();
                if (newName && newName !== currentName) {
                    onRename(newName);
                }
                modal.classList.add('hidden');
                cleanup();
            };
            
            const handleCancel = () => {
                modal.classList.add('hidden');
                cleanup();
            };
            
            const handleKeydown = (e) => {
                if (e.key === 'Enter') handleConfirm();
                if (e.key === 'Escape') handleCancel();
            };
            
            const cleanup = () => {
                document.getElementById('renameConfirm').removeEventListener('click', handleConfirm);
                document.getElementById('renameCancel').removeEventListener('click', handleCancel);
                input.removeEventListener('keydown', handleKeydown);
            };
            
            document.getElementById('renameConfirm').addEventListener('click', handleConfirm);
            document.getElementById('renameCancel').addEventListener('click', handleCancel);
            input.addEventListener('keydown', handleKeydown);
        }
        
        // ============================================
        // SAVE STATUS INDICATOR
        // ============================================
        
        function setStatus(status) {
            const statusText = document.getElementById('statusText');
            const statusSpinner = document.getElementById('statusSpinner');
            
            switch(status) {
                case 'saving':
                    statusText.textContent = 'Saving...';
                    statusText.className = 'text-amber-500';
                    statusSpinner.classList.remove('hidden');
                    break;
                case 'saved':
                    statusText.textContent = 'Saved';
                    statusText.className = 'text-emerald-500';
                    statusSpinner.classList.add('hidden');
                    break;
                case 'error':
                    statusText.textContent = 'Error';
                    statusText.className = 'text-red-500';
                    statusSpinner.classList.add('hidden');
                    break;
                default:
                    statusText.textContent = 'Ready';
                    statusText.className = 'text-stone-300';
                    statusSpinner.classList.add('hidden');
            }
        }
        
        // ============================================
        // SIDEBAR TREE RENDERING
        // ============================================
        
        function renderTree() {
            const tree = document.getElementById('worldBibleTree');
            const folders = db.getFolders();
            const folderStates = db.getFolderStates();
            
            tree.innerHTML = folders.map(folder => {
                const pages = db.getPages(folder.id);
                const isExpanded = folderStates[folder.id] !== false;
                const iconMap = {
                    'users': 'users',
                    'map': 'map',
                    'scroll': 'scroll',
                    'backpack': 'backpack',
                    'folder': 'folder'
                };
                const icon = iconMap[folder.icon] || 'folder';
                
                return `
                    <li class="folder-item" data-folder-id="${folder.id}">
                        <div class="folder-header flex items-center gap-2 px-2 py-1.5 text-sm text-stone-700 font-medium rounded-md hover:bg-stone-100 cursor-pointer group">
                            <i data-lucide="${isExpanded ? 'chevron-down' : 'chevron-right'}" class="w-3.5 h-3.5 text-stone-400 folder-chevron"></i>
                            <i data-lucide="${icon}" class="w-3.5 h-3.5 ${pages.length > 0 || folder.id === 'characters' ? 'text-rose-500' : 'text-stone-400 group-hover:text-rose-400'} transition-colors"></i>
                            <span class="folder-name flex-1 truncate">${folder.name}</span>
                            <div class="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button class="add-page-to-folder text-stone-400 hover:text-stone-700 p-0.5 rounded hover:bg-stone-200" title="Add Page">
                                    <i data-lucide="plus" class="w-3 h-3"></i>
                                </button>
                                <button class="delete-folder text-stone-400 hover:text-red-500 p-0.5 rounded hover:bg-stone-200" title="Delete Folder">
                                    <i data-lucide="trash-2" class="w-3 h-3"></i>
                                </button>
                            </div>
                        </div>
                        <ul class="folder-children ${isExpanded ? 'expanded' : ''} ml-2 pl-2 border-l border-stone-200 space-y-0.5 mt-0.5">
                            ${pages.map(page => `
                                <li class="page-item ${page.id === state.currentPageId ? 'active-page' : ''}" data-page-id="${page.id}">
                                    <a href="#" class="page-link flex items-center gap-2 px-2 py-1.5 text-sm ${page.id === state.currentPageId ? 'bg-rose-50 text-rose-700 font-medium' : 'text-stone-600'} rounded-md hover:bg-stone-100 hover:text-stone-900 transition-colors group">
                                        ${page.id === state.currentPageId 
                                            ? '<span class="w-1.5 h-1.5 rounded-full bg-rose-400"></span>'
                                            : '<span class="w-1 h-1 rounded-full bg-stone-300"></span>'
                                        }
                                        ${page.icon ? `<span class="text-sm">${page.icon}</span>` : ''}
                                        <span class="page-name flex-1 truncate">${page.title || 'Untitled'}</span>
                                        ${db.isFavorite(page.id) ? '<i data-lucide="star" class="w-3 h-3 text-amber-400 fill-amber-400"></i>' : ''}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </li>
                `;
            }).join('');
            
            lucide.createIcons();
        }
        
        // ============================================
        // PAGE MANAGEMENT
        // ============================================
        
        function createPage(folderId) {
            const page = {
                id: generateId(),
                folderId: folderId,
                title: 'Untitled Page',
                content: '',
                icon: null,
                hasCover: false,
                order: db.getPages(folderId).length
            };
            
            db.savePage(page);
            renderTree();
            selectPage(page.id);
            
            // Ensure folder is expanded
            db.setFolderState(folderId, true);
            
            // Focus title
            setTimeout(() => {
                const titleEl = document.getElementById('pageTitle');
                titleEl.focus();
                // Select all text
                const range = document.createRange();
                range.selectNodeContents(titleEl);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }, 100);
            
            return page;
        }
        
        function selectPage(pageId) {
            const page = db.getPage(pageId);
            if (!page) return;
            
            state.currentPageId = pageId;
            
            // Update UI
            document.getElementById('noPageSelected').classList.add('hidden');
            document.getElementById('pageTitle').textContent = page.title || '';
            document.getElementById('currentPageBreadcrumb').textContent = page.title || 'Untitled';
            
            // Update folder breadcrumb
            const folder = db.getFolders().find(f => f.id === page.folderId);
            document.getElementById('folderBreadcrumb').textContent = folder ? folder.name : '—';
            
            // Handle icon
            const iconDisplay = document.getElementById('pageIconDisplay');
            const addIconBtn = document.getElementById('addIconBtn');
            if (page.icon) {
                document.getElementById('selectedIcon').textContent = page.icon;
                iconDisplay.classList.remove('hidden');
                addIconBtn.classList.add('hidden');
            } else {
                iconDisplay.classList.add('hidden');
                addIconBtn.classList.remove('hidden');
            }
            
            // Handle cover
            const coverContainer = document.getElementById('coverImageContainer');
            const addCoverBtn = document.getElementById('addCoverBtn');
            if (page.hasCover) {
                coverContainer.classList.remove('hidden');
                addCoverBtn.classList.add('hidden');
            } else {
                coverContainer.classList.add('hidden');
                addCoverBtn.classList.remove('hidden');
            }
            
            // Handle content
            const contentArea = document.getElementById('contentArea');
            const templateSelector = document.getElementById('templateSelector');
            const editorContent = document.getElementById('editorContent');
            
            if (page.content) {
                contentArea.innerHTML = page.content;
                templateSelector.classList.add('hidden');
                editorContent.classList.remove('hidden');
            } else {
                contentArea.innerHTML = '';
                templateSelector.classList.remove('hidden');
                editorContent.classList.add('hidden');
            }
            
            // Update favorite button
            updateFavoriteButton();
            
            // Re-render tree to show active state
            renderTree();
            
            setStatus('ready');
        }
        
        function updateFavoriteButton() {
            const btn = document.getElementById('favoritePageBtn');
            const isFav = state.currentPageId && db.isFavorite(state.currentPageId);
            btn.innerHTML = `<i data-lucide="star" class="w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}"></i>`;
            lucide.createIcons();
        }
        
        function deletePage(pageId) {
            const page = db.getPage(pageId);
            if (!page) return;
            
            showConfirmModal(
                'Delete Page',
                `Are you sure you want to delete "${page.title || 'Untitled'}"? This action can be undone.`,
                () => {
                    const deletedPage = db.deletePage(pageId);
                    
                    if (state.currentPageId === pageId) {
                        state.currentPageId = null;
                        document.getElementById('noPageSelected').classList.remove('hidden');
                        document.getElementById('templateSelector').classList.add('hidden');
                        document.getElementById('editorContent').classList.add('hidden');
                        document.getElementById('pageTitle').textContent = '';
                        document.getElementById('currentPageBreadcrumb').textContent = 'Select a page';
                        document.getElementById('folderBreadcrumb').textContent = '—';
                    }
                    
                    renderTree();
                    
                    showToast('Page deleted', 'success', () => {
                        db.restorePage(pageId);
                        renderTree();
                        selectPage(pageId);
                        showToast('Page restored', 'info');
                    });
                }
            );
        }
        
        function renamePage(pageId, newName) {
            const page = db.getPage(pageId);
            if (!page) return;
            
            page.title = newName;
            db.savePage(page);
            renderTree();
            
            if (state.currentPageId === pageId) {
                document.getElementById('pageTitle').textContent = newName;
                document.getElementById('currentPageBreadcrumb').textContent = newName;
            }
            
            showToast('Page renamed', 'success');
        }
        
        // ============================================
        // FOLDER MANAGEMENT
        // ============================================
        
        function createFolder() {
            const folder = {
                id: generateId(),
                name: 'New Folder',
                icon: 'folder',
                order: db.getFolders().length
            };
            
            db.saveFolder(folder);
            db.setFolderState(folder.id, true);
            renderTree();
            
            showToast('Folder created', 'success');
        }
        
        function deleteFolder(folderId) {
            const folder = db.getFolders().find(f => f.id === folderId);
            if (!folder) return;
            
            const pages = db.getPages(folderId);
            
            showConfirmModal(
                'Delete Folder',
                `Delete "${folder.name}" and its ${pages.length} page(s)? This action can be undone.`,
                () => {
                    db.deleteFolder(folderId);
                    
                    if (state.currentPageId && pages.find(p => p.id === state.currentPageId)) {
                        state.currentPageId = null;
                        document.getElementById('noPageSelected').classList.remove('hidden');
                        document.getElementById('templateSelector').classList.add('hidden');
                        document.getElementById('editorContent').classList.add('hidden');
                    }
                    
                    renderTree();
                    
                    showToast('Folder deleted', 'success', () => {
                        db.restoreFolder(folderId);
                        renderTree();
                        showToast('Folder restored', 'info');
                    });
                }
            );
        }
        
        // ============================================
        // AUTO-SAVE
        // ============================================
        
        const autoSave = debounce(() => {
            if (!state.currentPageId) return;
            
            const page = db.getPage(state.currentPageId);
            if (!page) return;
            
            const contentArea = document.getElementById('contentArea');
            const pageTitle = document.getElementById('pageTitle');
            
            page.title = pageTitle.textContent.trim() || 'Untitled';
            page.content = sanitizeHTML(contentArea.innerHTML);
            
            setStatus('saving');
            
            // Simulate network delay
            setTimeout(() => {
                db.savePage(page);
                setStatus('saved');
                renderTree();
            }, 300);
        }, 800);
        
        function triggerSave() {
            if (!state.workspace.autoSave) return;
            autoSave();
        }
        
        // ============================================
        // SLASH COMMAND MENU
        // ============================================
        
        const commandMenu = document.getElementById('commandMenu');
        const commandSearch = document.getElementById('commandSearch');
        const commandList = document.getElementById('commandList');
        const contentArea = document.getElementById('contentArea');
        
        const commands = [
            { id: 'h1', label: 'Heading 1', desc: 'Large section heading', icon: '<span class="font-bold text-sm">H1</span>' },
            { id: 'h2', label: 'Heading 2', desc: 'Medium section heading', icon: '<span class="font-bold text-sm">H2</span>' },
            { id: 'h3', label: 'Heading 3', desc: 'Small section heading', icon: '<span class="font-bold text-sm">H3</span>' },
            { id: 'paragraph', label: 'Paragraph', desc: 'Plain text block', icon: 'align-left' },
            { id: 'bullet', label: 'Bullet List', desc: 'Unordered list', icon: 'list' },
            { id: 'numbered', label: 'Numbered List', desc: 'Ordered list', icon: 'list-ordered' },
            { id: 'quote', label: 'Quote', desc: 'Blockquote text', icon: 'quote' },
            { id: 'divider', label: 'Divider', desc: 'Horizontal line', icon: 'minus' },
            { id: 'callout', label: 'Callout', desc: 'Highlighted info box', icon: 'alert-circle' }
        ];
        
        function getFilteredCommands(query) {
            if (!query) return commands;
            const q = query.toLowerCase();
            return commands.filter(c => 
                c.label.toLowerCase().includes(q) || 
                c.desc.toLowerCase().includes(q)
            );
        }
        
        function renderCommandMenu(filtered) {
            const items = filtered.map((cmd, idx) => `
                <button class="command-item w-full px-3 py-2 text-left hover:bg-stone-50 flex items-center gap-3 ${idx === state.commandMenuState.selectedIndex ? 'selected bg-rose-50' : ''}" data-command="${cmd.id}" data-index="${idx}">
                    <div class="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
                        ${cmd.icon.startsWith('<') ? cmd.icon : `<i data-lucide="${cmd.icon}" class="w-4 h-4"></i>`}
                    </div>
                    <div>
                        <div class="text-sm font-medium text-stone-900">${cmd.label}</div>
                        <div class="text-xs text-stone-500">${cmd.desc}</div>
                    </div>
                </button>
            `).join('');
            
            commandList.innerHTML = `<div class="px-2 py-1 text-[10px] font-semibold text-stone-400 uppercase tracking-widest">Basic Blocks</div>${items}`;
            lucide.createIcons();
        }
        
        function showCommandMenu(x, y) {
            state.commandMenuState.active = true;
            state.commandMenuState.selectedIndex = 0;
            state.commandMenuState.searchQuery = '';
            
            commandMenu.style.top = `${y}px`;
            commandMenu.style.left = `${Math.min(x, window.innerWidth - 300)}px`;
            commandMenu.classList.add('active');
            
            commandSearch.value = '';
            renderCommandMenu(commands);
            
            setTimeout(() => commandSearch.focus(), 10);
        }
        
        function hideCommandMenu() {
            state.commandMenuState.active = false;
            commandMenu.classList.remove('active');
        }
        
        function executeCommand(commandId) {
            const selection = window.getSelection();
            if (!selection.rangeCount) return;
            
            const range = selection.getRangeAt(0);
            
            // Find and remove the slash trigger
            const textNode = range.startContainer;
            if (textNode.nodeType === Node.TEXT_NODE) {
                const text = textNode.textContent;
                const query = state.commandMenuState.searchQuery;
                const slashPos = text.lastIndexOf('/');
                
                if (slashPos !== -1) {
                    // Remove slash and any search text
                    const before = text.substring(0, slashPos);
                    const after = text.substring(range.startOffset);
                    textNode.textContent = before + after;
                    
                    // Position cursor
                    range.setStart(textNode, slashPos);
                    range.setEnd(textNode, slashPos);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
            
            // Create the block element
            let element;
            
            switch(commandId) {
                case 'h1':
                    element = document.createElement('h1');
                    element.className = 'text-4xl font-serif font-medium text-stone-900 mb-4';
                    element.textContent = 'Heading 1';
                    break;
                case 'h2':
                    element = document.createElement('h2');
                    element.className = 'text-2xl font-serif font-medium text-stone-900 mb-4';
                    element.textContent = 'Heading 2';
                    break;
                case 'h3':
                    element = document.createElement('h3');
                    element.className = 'text-xl font-serif font-medium text-stone-900 mb-3';
                    element.textContent = 'Heading 3';
                    break;
                case 'paragraph':
                    element = document.createElement('p');
                    element.className = 'text-stone-600 mb-4';
                    element.textContent = 'New paragraph...';
                    break;
                case 'bullet':
                    element = document.createElement('ul');
                    element.className = 'list-disc list-inside text-stone-600 mb-4';
                    element.innerHTML = '<li>Item 1</li><li>Item 2</li>';
                    break;
                case 'numbered':
                    element = document.createElement('ol');
                    element.className = 'list-decimal list-inside text-stone-600 mb-4';
                    element.innerHTML = '<li>Item 1</li><li>Item 2</li>';
                    break;
                case 'quote':
                    element = document.createElement('blockquote');
                    element.className = 'border-l-4 border-rose-300 pl-4 italic text-stone-600 mb-4';
                    element.textContent = 'Quote text...';
                    break;
                case 'divider':
                    element = document.createElement('hr');
                    element.className = 'border-stone-200 my-6';
                    break;
                case 'callout':
                    element = document.createElement('div');
                    element.className = 'bg-rose-50 border border-rose-200 rounded-lg p-4 mb-4 text-stone-700';
                    element.textContent = 'Callout text...';
                    break;
            }
            
            if (element) {
                // Insert at cursor position
                range.insertNode(element);
                
                // Move cursor after the element
                range.setStartAfter(element);
                range.setEndAfter(element);
                selection.removeAllRanges();
                selection.addRange(range);
                
                // Add a line break after non-hr elements
                if (commandId !== 'divider') {
                    const br = document.createElement('br');
                    range.insertNode(br);
                }
            }
            
            hideCommandMenu();
            triggerSave();
        }
        
        // Command menu event handlers
        commandSearch.addEventListener('input', (e) => {
            state.commandMenuState.searchQuery = e.target.value;
            state.commandMenuState.selectedIndex = 0;
            renderCommandMenu(getFilteredCommands(e.target.value));
        });
        
        commandSearch.addEventListener('keydown', (e) => {
            const filtered = getFilteredCommands(state.commandMenuState.searchQuery);
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                state.commandMenuState.selectedIndex = Math.min(state.commandMenuState.selectedIndex + 1, filtered.length - 1);
                renderCommandMenu(filtered);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                state.commandMenuState.selectedIndex = Math.max(state.commandMenuState.selectedIndex - 1, 0);
                renderCommandMenu(filtered);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filtered[state.commandMenuState.selectedIndex]) {
                    executeCommand(filtered[state.commandMenuState.selectedIndex].id);
                }
            } else if (e.key === 'Escape') {
                hideCommandMenu();
                contentArea.focus();
            }
        });
        
        commandList.addEventListener('click', (e) => {
            const item = e.target.closest('.command-item');
            if (item) {
                executeCommand(item.dataset.command);
            }
        });
        
        // Detect slash in content area
        contentArea.addEventListener('keydown', (e) => {
            if (e.key === '/' && !state.commandMenuState.active) {
                // Get cursor position for menu placement
                const selection = window.getSelection();
                if (selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    const rect = range.getBoundingClientRect();
                    
                    // Store trigger position
                    state.commandMenuState.triggerPosition = {
                        node: range.startContainer,
                        offset: range.startOffset
                    };
                    
                    // Show menu after the slash is typed
                    setTimeout(() => {
                        showCommandMenu(rect.left, rect.bottom + 10);
                    }, 0);
                }
            }
            
            if (e.key === 'Escape' && state.commandMenuState.active) {
                hideCommandMenu();
            }
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (state.commandMenuState.active && !commandMenu.contains(e.target) && !contentArea.contains(e.target)) {
                hideCommandMenu();
            }
        });
        
        // ============================================
        // TEMPLATE SELECTION
        // ============================================
        
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
            contentArea.focus();
            triggerSave();
        }
        
        // ============================================
        // EVENT LISTENERS
        // ============================================
        
        // Sidebar toggle
        const sidebar = document.getElementById('sidebar');
        
        function toggleSidebarVisibility() {
            const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');
            db.setSidebarState({ collapsed: isCollapsed });
        }
        
        document.getElementById('toggleSidebar').addEventListener('click', toggleSidebarVisibility);
        document.getElementById('toggleSidebarMain').addEventListener('click', toggleSidebarVisibility);
        
        // Folder toggle
        document.addEventListener('click', (e) => {
            const folderHeader = e.target.closest('.folder-header');
            if (folderHeader && !e.target.closest('.add-page-to-folder') && !e.target.closest('.delete-folder')) {
                const folderItem = folderHeader.closest('.folder-item');
                const folderId = folderItem.dataset.folderId;
                const children = folderItem.querySelector('.folder-children');
                const chevron = folderHeader.querySelector('.folder-chevron');
                
                const isExpanded = children.classList.toggle('expanded');
                db.setFolderState(folderId, isExpanded);
                
                chevron.setAttribute('data-lucide', isExpanded ? 'chevron-down' : 'chevron-right');
                lucide.createIcons();
            }
        });
        
        // Add folder button
        document.getElementById('addFolderBtn').addEventListener('click', createFolder);
        
        // Add page button (to first folder)
        document.getElementById('addPageBtn').addEventListener('click', () => {
            const folders = db.getFolders();
            if (folders.length > 0) {
                createPage(folders[0].id);
            }
        });
        
        // Add page to specific folder
        document.addEventListener('click', (e) => {
            if (e.target.closest('.add-page-to-folder')) {
                e.stopPropagation();
                const folderItem = e.target.closest('.folder-item');
                const folderId = folderItem.dataset.folderId;
                createPage(folderId);
            }
        });
        
        // Delete folder
        document.addEventListener('click', (e) => {
            if (e.target.closest('.delete-folder')) {
                e.stopPropagation();
                const folderItem = e.target.closest('.folder-item');
                deleteFolder(folderItem.dataset.folderId);
            }
        });
        
        // Page selection
        document.addEventListener('click', (e) => {
            const pageLink = e.target.closest('.page-link');
            if (pageLink) {
                e.preventDefault();
                const pageItem = pageLink.closest('.page-item');
                selectPage(pageItem.dataset.pageId);
            }
        });
        
        // Page context menu
        document.addEventListener('contextmenu', (e) => {
            const pageItem = e.target.closest('.page-item');
            if (pageItem) {
                e.preventDefault();
                state.contextMenuTarget = pageItem.dataset.pageId;
                
                const menu = document.getElementById('pageContextMenu');
                menu.style.top = `${e.clientY}px`;
                menu.style.left = `${Math.min(e.clientX, window.innerWidth - 170)}px`;
                menu.classList.remove('hidden');
                
                // Update favorite text
                const isFav = db.isFavorite(state.contextMenuTarget);
                document.getElementById('ctxFavoriteText').textContent = isFav ? 'Remove from Favorites' : 'Add to Favorites';
            }
        });
        
        document.addEventListener('click', () => {
            document.getElementById('pageContextMenu').classList.add('hidden');
        });
        
        document.getElementById('ctxRename').addEventListener('click', () => {
            const page = db.getPage(state.contextMenuTarget);
            if (page) {
                showRenameModal(page.title || 'Untitled', (newName) => {
                    renamePage(state.contextMenuTarget, newName);
                });
            }
        });
        
        document.getElementById('ctxFavorite').addEventListener('click', () => {
            if (db.isFavorite(state.contextMenuTarget)) {
                db.removeFavorite(state.contextMenuTarget);
                showToast('Removed from favorites', 'info');
            } else {
                db.addFavorite(state.contextMenuTarget);
                showToast('Added to favorites', 'success');
            }
            renderTree();
            updateFavoriteButton();
        });
        
        document.getElementById('ctxDelete').addEventListener('click', () => {
            deletePage(state.contextMenuTarget);
        });
        
        // Page title changes
        const pageTitle = document.getElementById('pageTitle');
        pageTitle.addEventListener('input', () => {
            const title = pageTitle.textContent.trim() || 'Untitled';
            document.getElementById('currentPageBreadcrumb').textContent = title;
            triggerSave();
        });
        
        // Content changes
        contentArea.addEventListener('input', triggerSave);
        
        // Delete page button
        document.getElementById('deletePageBtn').addEventListener('click', () => {
            if (state.currentPageId) {
                deletePage(state.currentPageId);
            }
        });
        
        // Favorite page button
        document.getElementById('favoritePageBtn').addEventListener('click', () => {
            if (!state.currentPageId) return;
            
            if (db.isFavorite(state.currentPageId)) {
                db.removeFavorite(state.currentPageId);
                showToast('Removed from favorites', 'info');
            } else {
                db.addFavorite(state.currentPageId);
                showToast('Added to favorites', 'success');
            }
            
            updateFavoriteButton();
            renderTree();
        });
        
        // Create first page button
        document.getElementById('createFirstPage').addEventListener('click', () => {
            const folders = db.getFolders();
            if (folders.length > 0) {
                createPage(folders[0].id);
            }
        });
        
        // Icon picker
        const iconPickerModal = document.getElementById('iconPickerModal');
        
        document.getElementById('addIconBtn').addEventListener('click', () => {
            iconPickerModal.classList.remove('hidden');
        });
        
        document.getElementById('selectedIcon').addEventListener('click', () => {
            iconPickerModal.classList.remove('hidden');
        });
        
        document.getElementById('closeIconPicker').addEventListener('click', () => {
            iconPickerModal.classList.add('hidden');
        });
        
        document.querySelectorAll('.icon-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const icon = btn.dataset.icon;
                document.getElementById('selectedIcon').textContent = icon;
                document.getElementById('pageIconDisplay').classList.remove('hidden');
                document.getElementById('addIconBtn').classList.add('hidden');
                iconPickerModal.classList.add('hidden');
                
                if (state.currentPageId) {
                    const page = db.getPage(state.currentPageId);
                    page.icon = icon;
                    db.savePage(page);
                    renderTree();
                }
            });
        });
        
        document.getElementById('removeIconBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('pageIconDisplay').classList.add('hidden');
            document.getElementById('addIconBtn').classList.remove('hidden');
            
            if (state.currentPageId) {
                const page = db.getPage(state.currentPageId);
                page.icon = null;
                db.savePage(page);
                renderTree();
            }
        });
        
        iconPickerModal.addEventListener('click', (e) => {
            if (e.target === iconPickerModal) {
                iconPickerModal.classList.add('hidden');
            }
        });
        
        // Cover image
        document.getElementById('addCoverBtn').addEventListener('click', () => {
            document.getElementById('coverImageContainer').classList.remove('hidden');
            document.getElementById('addCoverBtn').classList.add('hidden');
            
            if (state.currentPageId) {
                const page = db.getPage(state.currentPageId);
                page.hasCover = true;
                db.savePage(page);
            }
        });
        
        document.getElementById('removeCoverBtn').addEventListener('click', () => {
            document.getElementById('coverImageContainer').classList.add('hidden');
            document.getElementById('addCoverBtn').classList.remove('hidden');
            
            if (state.currentPageId) {
                const page = db.getPage(state.currentPageId);
                page.hasCover = false;
                db.savePage(page);
            }
        });
        
        // Recent changes modal
        document.getElementById('recentChangesBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById('recentChangesModal');
            const list = document.getElementById('recentChangesList');
            
            const recent = db.getRecent();
            
            if (recent.length === 0) {
                list.innerHTML = '<div class="text-center py-8 text-stone-400 text-sm">No recent changes</div>';
            } else {
                list.innerHTML = recent.map(r => {
                    const page = db.getPage(r.pageId);
                    if (!page) return '';
                    const time = new Date(r.timestamp).toLocaleString();
                    return `
                        <button class="w-full px-3 py-2 text-left hover:bg-stone-50 rounded-lg flex items-center gap-3 recent-page-item" data-page-id="${r.pageId}">
                            <i data-lucide="file-text" class="w-4 h-4 text-stone-400"></i>
                            <div class="flex-1 min-w-0">
                                <div class="text-sm font-medium text-stone-900 truncate">${page.title || 'Untitled'}</div>
                                <div class="text-xs text-stone-500">${time}</div>
                            </div>
                        </button>
                    `;
                }).join('');
            }
            
            modal.classList.remove('hidden');
            lucide.createIcons();
        });
        
        document.getElementById('closeRecentChanges').addEventListener('click', () => {
            document.getElementById('recentChangesModal').classList.add('hidden');
        });
        
        document.getElementById('recentChangesList').addEventListener('click', (e) => {
            const item = e.target.closest('.recent-page-item');
            if (item) {
                selectPage(item.dataset.pageId);
                document.getElementById('recentChangesModal').classList.add('hidden');
            }
        });
        
        // Favorites modal
        document.getElementById('favoritesBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById('favoritesModal');
            const list = document.getElementById('favoritesList');
            
            const favorites = db.getFavorites();
            
            if (favorites.length === 0) {
                list.innerHTML = '<div class="text-center py-8 text-stone-400 text-sm">No favorites yet</div>';
            } else {
                list.innerHTML = favorites.map(pageId => {
                    const page = db.getPage(pageId);
                    if (!page) return '';
                    return `
                        <button class="w-full px-3 py-2 text-left hover:bg-stone-50 rounded-lg flex items-center gap-3 favorite-page-item" data-page-id="${pageId}">
                            <i data-lucide="star" class="w-4 h-4 text-amber-400 fill-amber-400"></i>
                            <div class="flex-1 min-w-0">
                                <div class="text-sm font-medium text-stone-900 truncate">${page.icon || ''} ${page.title || 'Untitled'}</div>
                            </div>
                        </button>
                    `;
                }).join('');
            }
            
            modal.classList.remove('hidden');
            lucide.createIcons();
        });
        
        document.getElementById('closeFavorites').addEventListener('click', () => {
            document.getElementById('favoritesModal').classList.add('hidden');
        });
        
        document.getElementById('favoritesList').addEventListener('click', (e) => {
            const item = e.target.closest('.favorite-page-item');
            if (item) {
                selectPage(item.dataset.pageId);
                document.getElementById('favoritesModal').classList.add('hidden');
            }
        });
        
        // Settings modal
        const settingsModal = document.getElementById('settingsModal');
        
        document.getElementById('settingsBtn').addEventListener('click', () => {
            document.getElementById('workspaceNameInput').value = state.workspace.name;
            const toggle = document.getElementById('autoSaveToggle');
            toggle.dataset.enabled = state.workspace.autoSave;
            if (state.workspace.autoSave) {
                toggle.classList.add('bg-rose-500');
                toggle.classList.remove('bg-stone-300');
                toggle.querySelector('div').classList.add('ml-auto');
                toggle.querySelector('div').classList.remove('mr-auto');
            } else {
                toggle.classList.remove('bg-rose-500');
                toggle.classList.add('bg-stone-300');
                toggle.querySelector('div').classList.remove('ml-auto');
                toggle.querySelector('div').classList.add('mr-auto');
            }
            settingsModal.classList.remove('hidden');
        });
        
        document.getElementById('closeSettings').addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });
        
        document.getElementById('autoSaveToggle').addEventListener('click', function() {
            const enabled = this.dataset.enabled === 'true';
            this.dataset.enabled = !enabled;
            if (!enabled) {
                this.classList.add('bg-rose-500');
                this.classList.remove('bg-stone-300');
                this.querySelector('div').classList.add('ml-auto');
                this.querySelector('div').classList.remove('mr-auto');
            } else {
                this.classList.remove('bg-rose-500');
                this.classList.add('bg-stone-300');
                this.querySelector('div').classList.remove('ml-auto');
                this.querySelector('div').classList.add('mr-auto');
            }
        });
        
        document.getElementById('saveSettingsBtn').addEventListener('click', () => {
            state.workspace.name = document.getElementById('workspaceNameInput').value;
            state.workspace.autoSave = document.getElementById('autoSaveToggle').dataset.enabled === 'true';
            db.saveWorkspace(state.workspace);
            document.getElementById('workspaceName').textContent = state.workspace.name;
            settingsModal.classList.add('hidden');
            showToast('Settings saved', 'success');
        });
        
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.classList.add('hidden');
            }
        });
        
        // Close modals on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('#recentChangesModal, #favoritesModal, #settingsModal, #iconPickerModal, #confirmModal, #renameModal').forEach(modal => {
                    modal.classList.add('hidden');
                });
            }
        });
        
        // ============================================
        // INITIALIZATION
        // ============================================
        
        function init() {
            // Load workspace
            state.workspace = db.getWorkspace();
            document.getElementById('workspaceName').textContent = state.workspace.name;
            
            // Restore sidebar state
            const sidebarState = db.getSidebarState();
            if (sidebarState.collapsed) {
                sidebar.classList.add('sidebar-collapsed');
            }
            
            // Initialize default data if needed
            if (db.getAllFolders().length === 0) {
                DEFAULT_FOLDERS.forEach(f => db.saveFolder(f));
            }
            
            // Render tree
            renderTree();
            
            // Check URL hash for page
            const hash = window.location.hash.slice(1);
            if (hash && db.getPage(hash)) {
                selectPage(hash);
            }
            
            setStatus('ready');
        }
        
        // Run initialization
        init();
        
        // Save on page unload
        window.addEventListener('beforeunload', () => {
            if (state.currentPageId) {
                const page = db.getPage(state.currentPageId);
                if (page) {
                    page.title = document.getElementById('pageTitle').textContent.trim() || 'Untitled';
                    page.content = sanitizeHTML(document.getElementById('contentArea').innerHTML);
                    db.savePage(page);
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2" id="toastContainer"></div>

<div className="hidden fixed inset-0 bg-black/30 z-[60] flex items-center justify-center" id="confirmModal">
<div className="bg-white rounded-xl shadow-2xl border border-stone-200 p-6 w-96 animate-fade-in">
<div className="flex items-start gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-600" data-lucide="alert-triangle"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-lg mb-1" id="confirmTitle">Confirm Action</h3>
<p className="text-sm text-stone-500" id="confirmMessage">Are you sure you want to proceed?</p>
</div>
</div>
<div className="flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors" id="confirmCancel">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors" id="confirmAction">Delete</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-[60] flex items-center justify-center" id="renameModal">
<div className="bg-white rounded-xl shadow-2xl border border-stone-200 p-6 w-96 animate-fade-in">
<h3 className="font-medium text-stone-900 text-lg mb-4">Rename</h3>
<input className="w-full text-sm border border-stone-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 mb-4" id="renameInput" placeholder="Enter new name" type="text"/>
<div className="flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors" id="renameCancel">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors" id="renameConfirm">Save</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-[60] flex items-center justify-center" id="recentChangesModal">
<div className="bg-white rounded-xl shadow-2xl border border-stone-200 w-[480px] max-h-[80vh] animate-fade-in overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-stone-100">
<h3 className="font-medium text-stone-900">Recent Changes</h3>
<button className="text-stone-400 hover:text-stone-600 p-1 rounded hover:bg-stone-100" id="closeRecentChanges">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-2 max-h-[60vh] overflow-y-auto" id="recentChangesList"></div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-[60] flex items-center justify-center" id="favoritesModal">
<div className="bg-white rounded-xl shadow-2xl border border-stone-200 w-[480px] max-h-[80vh] animate-fade-in overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-stone-100">
<h3 className="font-medium text-stone-900">Favorites</h3>
<button className="text-stone-400 hover:text-stone-600 p-1 rounded hover:bg-stone-100" id="closeFavorites">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-2 max-h-[60vh] overflow-y-auto" id="favoritesList"></div>
</div>
</div>

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

</ul>

<div className="hidden flex items-center justify-center py-8" id="treeLoading">
<div className="loading-spinner"></div>
</div>
</div>
</div>

<div className="p-3 border-t border-stone-200 bg-white">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-stone-50 transition-colors text-left group" id="settingsBtn">
<div className="w-7 h-7 rounded-full bg-stone-200 flex items-center justify-center text-xs font-serif font-medium text-stone-600 border border-stone-300">H</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-stone-900" id="workspaceName">Homer's Workspace</span>
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
<span className="hover:text-stone-800 cursor-pointer transition-colors" id="folderBreadcrumb">—</span>
<span className="text-stone-300">/</span>
<span className="text-stone-400" id="currentPageBreadcrumb">Select a page</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-stone-300" id="documentStatus">
<span id="statusText">Ready</span>
<div className="hidden loading-spinner" id="statusSpinner"></div>
</div>
<div className="h-4 w-px bg-stone-200"></div>
<button className="text-stone-400 hover:text-amber-500 transition-colors" id="favoritePageBtn" title="Add to favorites">
<i className="w-4 h-4" data-lucide="star"></i>
</button>
<button className="text-stone-400 hover:text-red-500 transition-colors" id="deletePageBtn" title="Delete page">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
<div className="h-4 w-px bg-stone-200"></div>
<button className="text-stone-400 hover:text-stone-700 transition-colors" id="toggleSidebarMain">
<i className="w-4 h-4" data-lucide="sidebar"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-white">
<div className="max-w-[850px] mx-auto px-8 py-16 pb-32">

<div className="hidden -mx-8 -mt-16 mb-8 h-48 bg-gradient-to-br from-rose-100 to-stone-100 relative group" id="coverImageContainer">
<button className="absolute top-2 right-2 bg-white/80 hover:bg-white text-stone-600 p-1.5 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity" id="removeCoverBtn">Remove</button>
</div>

<div className="group mb-10">
<div className="flex items-center gap-3 mb-4 text-stone-400" id="pageActions">
<div className="flex items-center gap-1 hover:text-stone-600 cursor-pointer transition-colors" id="addIconBtn">
<i className="w-4 h-4" data-lucide="smile"></i>
<span className="text-xs font-medium">Add Icon</span>
</div>
<div className="flex items-center gap-1 hover:text-stone-600 cursor-pointer transition-colors" id="addCoverBtn">
<i className="w-4 h-4" data-lucide="image"></i>
<span className="text-xs font-medium">Add Cover</span>
</div>
</div>

<div className="hidden mb-4 group/icon relative inline-block" id="pageIconDisplay">
<span className="text-5xl cursor-pointer hover:opacity-80" id="selectedIcon"></span>
<button className="absolute -top-1 -right-1 bg-white border border-stone-200 rounded-full p-0.5 opacity-0 group-hover/icon:opacity-100 transition-opacity hover:bg-red-50 hover:border-red-200" id="removeIconBtn">
<i className="w-3 h-3 text-stone-400 hover:text-red-500" data-lucide="x"></i>
</button>
</div>
<h1 className="font-serif text-5xl tracking-tight text-stone-900 placeholder:text-stone-300 focus:outline-none w-full" contenteditable="true" id="pageTitle" placeholder="Untitled Page"></h1>
</div>

<div className="mt-12" id="noPageSelected">
<div className="text-center py-16">
<div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-stone-400" data-lucide="file-text"></i>
</div>
<h2 className="text-xl font-serif text-stone-700 mb-2">No page selected</h2>
<p className="text-sm text-stone-500 mb-6">Select a page from the sidebar or create a new one</p>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white text-sm font-medium rounded-lg hover:bg-rose-700 transition-colors" id="createFirstPage">
<i className="w-4 h-4" data-lucide="plus"></i>
                            Create New Page
                        </button>
</div>
</div>

<div className="hidden mt-12 animate-fade-in" id="templateSelector">
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
<div className="py-2 max-h-64 overflow-y-auto" id="commandList">
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
<div className="bg-white rounded-xl shadow-xl border border-stone-200 p-4 w-80 animate-fade-in">
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-stone-900">Choose Icon</h3>
<button className="text-stone-400 hover:text-stone-600" id="closeIconPicker">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="grid grid-cols-8 gap-2">
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="👤">👤</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="⚔️">⚔️</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="🏰">🏰</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="🗺️">🗺️</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="📜">📜</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="🐉">🐉</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="✨">✨</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="🌟">🌟</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="🔮">🔮</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="👑">👑</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="🏹">🏹</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="🛡️">🛡️</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="💎">💎</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="🌙">🌙</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="☀️">☀️</button>
<button className="icon-option text-2xl hover:bg-stone-100 rounded p-1 transition-colors" data-icon="🌊">🌊</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/20 z-50 flex items-center justify-center" id="settingsModal">
<div className="bg-white rounded-xl shadow-xl border border-stone-200 p-6 w-96 animate-fade-in">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-stone-900 text-lg">Settings</h3>
<button className="text-stone-400 hover:text-stone-600" id="closeSettings">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-stone-700">Workspace Name</span>
<input className="text-sm border border-stone-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-rose-300 w-40" id="workspaceNameInput" type="text" value="Homer's Workspace"/>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-stone-700">Auto-save</span>
<button className="w-10 h-6 bg-rose-500 rounded-full p-1 cursor-pointer transition-colors" data-enabled="true" id="autoSaveToggle">
<div className="w-4 h-4 bg-white rounded-full ml-auto transition-all"></div>
</button>
</div>
</div>
<div className="mt-6 pt-4 border-t border-stone-100">
<button className="w-full py-2 bg-rose-600 text-white text-sm font-medium rounded-lg hover:bg-rose-700 transition-colors" id="saveSettingsBtn">Save Settings</button>
</div>
</div>
</div>

<div className="hidden fixed bg-white rounded-lg shadow-xl border border-stone-200 py-1 w-40 z-50" id="pageContextMenu">
<button className="w-full px-3 py-2 text-left text-sm text-stone-700 hover:bg-stone-50 flex items-center gap-2" id="ctxRename">
<i className="w-3.5 h-3.5" data-lucide="pencil"></i>
            Rename
        </button>
<button className="w-full px-3 py-2 text-left text-sm text-stone-700 hover:bg-stone-50 flex items-center gap-2" id="ctxFavorite">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<span id="ctxFavoriteText">Add to Favorites</span>
</button>
<div className="my-1 border-t border-stone-100"></div>
<button className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2" id="ctxDelete">
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i>
            Delete
        </button>
</div>


    </>
  );
}
