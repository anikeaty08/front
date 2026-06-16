import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        /**
         * LIVEDESK OS // AURA EDITION
         * Strictly 2D Architecture with Isometric Projection Visuals.
         * Preserves ldl3b_1 data structures and features.
         */

        // --- CONFIG ---
        const CONFIG = {
            tileWidth: 80,  // The visual width of a tile slot
            tileHeight: 46, // The visual height step (approx isometric Y)
            zoomMin: 0.5,
            zoomMax: 1.5,
            gridSize: 20,   // Virtual grid limits (-20 to 20)
        };

        // --- STATE MANAGEMENT (Simulating Alpine/Vue store) ---
        const State = {
            user: null, // { uid, email, avatar }
            apps: [],   // Array of { id, name, icon, color, page, isoX, isoY, ... }
            pages: ['Home', 'Work', 'Social'],
            currentPage: 0,
            view: { x: 0, y: 0, zoom: 1 }, // Pan/Zoom state
            ui: {
                dragging: false,
                contextMenu: { visible: false, targetId: null, x: 0, y: 0 },
                appStoreOpen: false
            },
            drag: {
                active: false,
                item: null,
                startX: 0, startY: 0,
                ghostX: 0, ghostY: 0
            }
        };

        // --- MODULE: FIREBASE (Simulated/Ready Wrapper) ---
        const Firebase = {
            // Emulates Firebase Auth & DB for immediate preview usage
            // In production, replace body with actual Firebase SDK calls
            async init() {
                const localData = localStorage.getItem('ldl_aura_data');
                if (localData) {
                    const parsed = JSON.parse(localData);
                    State.apps = parsed.apps || [];
                    State.user = parsed.user || { uid: 'guest', name: 'Guest' };
                } else {
                    await this.seedDefaults();
                }
                console.log('Firebase: Init Complete');
            },

            async seedDefaults() {
                State.user = { uid: 'guest', name: 'Guest', avatar: 'G' };
                State.apps = [
                    { id: '1', name: 'Mail', icon: 'mail', color: '#3b82f6', page: 0, isoX: 0, isoY: 0 },
                    { id: '2', name: 'Calendar', icon: 'calendar', color: '#ef4444', page: 0, isoX: 1, isoY: 0 },
                    { id: '3', name: 'Files', icon: 'folder', color: '#f59e0b', page: 0, isoX: 0, isoY: 1 },
                    { id: '4', name: 'Settings', icon: 'settings', color: '#71717a', page: 0, isoX: 1, isoY: 1 },
                    { id: '5', name: 'Notes', icon: 'file-text', color: '#10b981', page: 0, isoX: -1, isoY: 1 },
                    { id: '6', name: 'Spotify', icon: 'music', color: '#1db954', page: 0, isoX: -1, isoY: 0 },
                    // Page 1
                    { id: '7', name: 'Slack', icon: 'message-square', color: '#6366f1', page: 1, isoX: 0, isoY: 0 },
                    { id: '8', name: 'Figma', icon: 'pen-tool', color: '#ec4899', page: 1, isoX: 1, isoY: 0 },
                ];
                this.save();
            },

            save() {
                localStorage.setItem('ldl_aura_data', JSON.stringify({
                    apps: State.apps,
                    user: State.user
                }));
                // Real implementation: set(ref(db, `users/${uid}`), data)
            },

            updateApp(appId, updates) {
                const idx = State.apps.findIndex(a => a.id === appId);
                if (idx > -1) {
                    State.apps[idx] = { ...State.apps[idx], ...updates };
                    this.save();
                    Renderer.render();
                }
            },

            addApp(app) {
                State.apps.push(app);
                this.save();
                Renderer.render();
            },

            deleteApp(appId) {
                State.apps = State.apps.filter(a => a.id !== appId);
                this.save();
                Renderer.render();
            }
        };

        // --- MODULE: LAYOUT ENGINE (2D to Iso Projection) ---
        const Layout = {
            viewport: document.getElementById('viewport'),
            world: document.getElementById('world'),
            
            init() {
                this.bindEvents();
                this.centerView();
            },

            // CORE: Convert Grid Coords (x,y) to Screen Pixels (top,left)
            // Uses standard isometric projection formula
            gridToScreen(x, y) {
                // Iso projection:
                // screenX = (x - y) * width/2
                // screenY = (x + y) * height/2
                const sx = (x - y) * (CONFIG.tileWidth * 0.52); // 0.52 is spacing factor
                const sy = (x + y) * (CONFIG.tileHeight * 0.52);
                return { x: sx, y: sy };
            },

            // CORE: Approximate Screen Pixels back to Grid Coords (for drag)
            screenToGrid(sx, sy) {
                const adjX = sx / (CONFIG.tileWidth * 0.52);
                const adjY = sy / (CONFIG.tileHeight * 0.52);
                // Inverse of above:
                // x = (adjY + adjX) / 2
                // y = (adjY - adjX) / 2
                const gx = Math.round((adjY + adjX) / 2);
                const gy = Math.round((adjY - adjX) / 2);
                return { x: gx, y: gy };
            },

            updateTransform() {
                // Apply the "Camera" pan/zoom to the world container using 2D transforms
                this.world.style.transform = `
                    translate(${State.view.x}px, ${State.view.y}px) 
                    scale(${State.view.zoom})
                `;
            },

            centerView() {
                // Center (0,0) in the middle of the screen
                const cx = window.innerWidth / 2;
                const cy = window.innerHeight / 2;
                State.view.x = cx;
                State.view.y = cy; // Shift up slightly to see more grid
                this.updateTransform();
            },

            zoom(delta) {
                const newZoom = Math.min(Math.max(State.view.zoom + delta, CONFIG.zoomMin), CONFIG.zoomMax);
                State.view.zoom = newZoom;
                this.updateTransform();
            },
            
            resetView() {
                State.view.zoom = 1;
                this.centerView();
            },

            bindEvents() {
                let isPanning = false;
                let lastX, lastY;

                this.viewport.addEventListener('mousedown', (e) => {
                    // Only pan if clicking background (not a tile)
                    if (e.target.closest('.iso-tile') || e.target.closest('.pointer-events-auto')) return;
                    if (e.button !== 0) return;
                    isPanning = true;
                    lastX = e.clientX;
                    lastY = e.clientY;
                    this.viewport.style.cursor = 'grabbing';
                    Modules.ContextMenu.hide();
                });

                window.addEventListener('mousemove', (e) => {
                    if (isPanning) {
                        const dx = e.clientX - lastX;
                        const dy = e.clientY - lastY;
                        State.view.x += dx;
                        State.view.y += dy;
                        lastX = e.clientX;
                        lastY = e.clientY;
                        this.updateTransform();
                    } else if (State.drag.active) {
                        Modules.Interactions.handleDrag(e);
                    }
                });

                window.addEventListener('mouseup', () => {
                    isPanning = false;
                    this.viewport.style.cursor = 'grab';
                    if (State.drag.active) Modules.Interactions.endDrag();
                });

                // Wheel Zoom
                this.viewport.addEventListener('wheel', (e) => {
                    e.preventDefault();
                    this.zoom(e.deltaY > 0 ? -0.1 : 0.1);
                }, { passive: false });
            }
        };

        // --- MODULE: RENDERER ---
        const Renderer = {
            container: document.getElementById('tile-layer'),
            
            render() {
                this.container.innerHTML = ''; // Clear (virtual DOM diffing would be better, but simple is fine)
                
                // Filter apps by current page
                const pageApps = State.apps.filter(a => a.page === State.currentPage);

                // Z-Index Sorting: "Painter's Algorithm" for Isometric
                // Items with higher (x+y) are "closer" to camera (lower on screen) -> higher z-index
                pageApps.sort((a, b) => (a.isoX + a.isoY) - (b.isoX + b.isoY));

                pageApps.forEach(app => {
                    const pos = Layout.gridToScreen(app.isoX, app.isoY);
                    const zIndex = 100 + (app.isoX + app.isoY); // Base Z

                    const el = document.createElement('div');
                    el.className = 'iso-tile group';
                    el.id = `app-${app.id}`;
                    el.style.left = pos.x + 'px';
                    el.style.top = pos.y + 'px';
                    // We adjust z-index via style, but CSS transform on hover might need !important handling or parent layer
                    el.style.zIndex = zIndex; 
                    // To Center the "point" of the tile at x,y, we translate -50%
                    el.style.transform = `translate(-50%, -100%)`; // Anchor at bottom center

                    el.innerHTML = `
                        <div class="tile-face" style="background: linear-gradient(135deg, ${app.color}10, #18181b);">
                            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-xl"></div>
                            <i data-lucide="${app.icon}" class="w-6 h-6 text-[${app.color}]" style="color:${app.color}; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));"></i>
                        </div>
                        <div class="tile-shadow"></div>
                        <div class="tile-label">${app.name}</div>
                    `;

                    // Events
                    el.addEventListener('mousedown', (e) => Modules.Interactions.startDrag(e, app));
                    el.addEventListener('contextmenu', (e) => Modules.ContextMenu.show(e, app));

                    this.container.appendChild(el);
                });

                lucide.createIcons();
                this.renderUI();
            },

            renderUI() {
                // Page Dots
                const dots = document.getElementById('page-indicator');
                dots.innerHTML = State.pages.map((p, i) => `
                    <button onclick="Modules.Actions.setPage(${i})" 
                        class="w-2 h-2 rounded-full transition-all ${i === State.currentPage ? 'bg-white w-4' : 'bg-zinc-600 hover:bg-zinc-500'}">
                    </button>
                `).join('');

                // Update Clock
                const now = new Date();
                document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            }
        };

        // --- MODULE: INTERACTIONS (Drag & Drop) ---
        const Interactions = {
            startDrag(e, app) {
                if (e.button !== 0) return; // Left click only
                e.stopPropagation(); // Don't pan world
                
                State.drag.active = true;
                State.drag.item = app;
                State.drag.startX = e.clientX;
                State.drag.startY = e.clientY;

                // Visual Feedback
                const el = document.getElementById(`app-${app.id}`);
                el.classList.add('is-dragging');
                
                // Hide context menu
                Modules.ContextMenu.hide();
            },

            handleDrag(e) {
                if (!State.drag.item) return;

                // Calculate delta in WORLD pixels
                // We need to account for zoom to map screen pixels to world pixels
                const dx = (e.clientX - State.drag.startX) / State.view.zoom;
                const dy = (e.clientY - State.drag.startY) / State.view.zoom;

                // Move the element visually (transform translate)
                const el = document.getElementById(`app-${State.drag.item.id}`);
                // Existing position
                const currentPos = Layout.gridToScreen(State.drag.item.isoX, State.drag.item.isoY);
                el.style.left = (currentPos.x + dx) + 'px';
                el.style.top = (currentPos.y + dy) + 'px';

                // Calculate Potential Grid Snap Target
                // Determine where the center of the dragged item is relative to World Center (0,0)
                // World 0,0 is at center of screen + State.view offsets.
                // Actually, Layout.screenToGrid expects coordinates relative to the World Origin div.
                // Our calculated dx/dy is relative to where it started.
                
                // Let's get "Virtual" coords
                const virtualX = currentPos.x + dx;
                const virtualY = currentPos.y + dy;
                
                const gridPos = Layout.screenToGrid(virtualX, virtualY);
                State.drag.ghostX = gridPos.x;
                State.drag.ghostY = gridPos.y;
                
                // Highlight drop zone? (Optional implementation)
            },

            endDrag() {
                if (!State.drag.item) return;
                
                const app = State.drag.item;
                const el = document.getElementById(`app-${app.id}`);
                el.classList.remove('is-dragging');

                // Commit the new position
                // Check if occupied?
                const targetX = State.drag.ghostX;
                const targetY = State.drag.ghostY;
                
                // Simple collision check: swap if occupied, else move
                const occupied = State.apps.find(a => a.page === State.currentPage && a.isoX === targetX && a.isoY === targetY && a.id !== app.id);
                
                if (occupied) {
                    // Swap logic
                    Firebase.updateApp(occupied.id, { isoX: app.isoX, isoY: app.isoY });
                }
                
                Firebase.updateApp(app.id, { isoX: targetX, isoY: targetY });

                State.drag.active = false;
                State.drag.item = null;
                // Renderer will re-render everything snapped to grid
            }
        };

        // --- MODULE: APP STORE ---
        const AppStore = {
            library: [
                { name: 'Photos', icon: 'image', color: '#eab308' },
                { name: 'Messages', icon: 'message-circle', color: '#22c55e' },
                { name: 'Browser', icon: 'globe', color: '#3b82f6' },
                { name: 'Music', icon: 'music', color: '#f43f5e' },
                { name: 'Twitter', icon: 'twitter', color: '#0ea5e9' },
                { name: 'GitHub', icon: 'github', color: '#ffffff' },
                { name: 'YouTube', icon: 'youtube', color: '#ef4444' },
                { name: 'Docs', icon: 'file', color: '#60a5fa' }
            ],

            toggle() {
                const el = document.getElementById('app-store');
                const content = document.getElementById('store-content');
                State.ui.appStoreOpen = !State.ui.appStoreOpen;
                
                if (State.ui.appStoreOpen) {
                    this.renderGrid();
                    el.classList.remove('opacity-0', 'pointer-events-none');
                    content.classList.remove('scale-95');
                } else {
                    el.classList.add('opacity-0', 'pointer-events-none');
                    content.classList.add('scale-95');
                }
            },

            renderGrid() {
                const grid = document.getElementById('store-grid');
                grid.innerHTML = this.library.map(item => `
                    <div onclick="Modules.AppStore.install('${item.name}', '${item.icon}', '${item.color}')" 
                         class="store-item flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 cursor-pointer transition-all">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-2" style="background: ${item.color}20; color: ${item.color}">
                            <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                        </div>
                        <span class="text-xs text-zinc-300 font-medium">${item.name}</span>
                    </div>
                `).join('');
                lucide.createIcons();
            },

            install(name, icon, color) {
                // Find first empty spot using spiral search algorithm
                let x = 0, y = 0, dx = 0, dy = -1;
                // Simple search for free spot
                while(State.apps.find(a => a.page === State.currentPage && a.isoX === x && a.isoY === y)) {
                    if (x === y || (x < 0 && x === -y) || (x > 0 && x === 1-y)) {
                        let t = dx; dx = -dy; dy = t;
                    }
                    x += dx; y += dy;
                }

                Firebase.addApp({
                    id: 'app_' + Date.now(),
                    name, icon, color,
                    page: State.currentPage,
                    isoX: x, isoY: y
                });
                this.toggle();
            }
        };

        // --- MODULE: CONTEXT MENU ---
        const ContextMenu = {
            el: document.getElementById('context-menu'),
            
            show(e, app) {
                e.preventDefault();
                State.ui.contextMenu = { visible: true, targetId: app.id };
                
                this.el.style.display = 'block';
                this.el.style.left = e.clientX + 'px';
                this.el.style.top = e.clientY + 'px';
                
                // Animate in
                requestAnimationFrame(() => {
                    this.el.style.opacity = '1';
                    this.el.style.transform = 'scale(1)';
                });
            },

            hide() {
                this.el.style.opacity = '0';
                this.el.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.el.style.display = 'none';
                    State.ui.contextMenu.visible = false;
                }, 150);
            },

            action(type) {
                const appId = State.ui.contextMenu.targetId;
                if (!appId) return;

                if (type === 'delete') {
                    Firebase.deleteApp(appId);
                } else if (type === 'open') {
                    alert('Launch App: ' + appId);
                }
                this.hide();
            }
        };

        // --- MODULE: ACTIONS & UTILS ---
        const Actions = {
            setPage(idx) {
                State.currentPage = idx;
                Renderer.render();
            }
        };

        const Backup = {
            showModal() {
                // Simulate Backup Trigger
                alert('Syncing to Cloud... (Simulated)');
                Firebase.save();
            }
        }

        // --- MAIN BOOT ---
        window.Modules = {
            AppStore, Layout, Interactions, ContextMenu, Actions, Auth: { toggleMenu: () => alert('User Settings') }, Backup
        };

        (async function boot() {
            await Firebase.init();
            Layout.init();
            Renderer.render();
            
            // Timer loop
            setInterval(() => Renderer.renderUI(), 1000);
            
            // Fake collaborator cursor
            const cursorLayer = document.getElementById('cursors-layer');
            const fakeCursor = document.createElement('div');
            fakeCursor.className = 'absolute w-4 h-4 rounded-full border-2 border-white bg-purple-500 shadow-xl z-[999] transition-all duration-700 pointer-events-none';
            fakeCursor.innerHTML = `<div class="absolute top-4 left-4 bg-purple-500 text-white text-[10px] px-1.5 rounded-full whitespace-nowrap">Sarah</div>`;
            cursorLayer.appendChild(fakeCursor);

            setInterval(() => {
                const x = (Math.random() - 0.5) * 400;
                const y = (Math.random() - 0.5) * 400;
                fakeCursor.style.transform = `translate(${x}px, ${y}px)`;
            }, 3000);

        })();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-4 md:p-6" id="hud">

<div className="flex justify-between items-start pointer-events-auto">

<div className="flex items-center gap-3">
<div className="h-10 w-10 blur-panel rounded-xl flex items-center justify-center text-white shadow-lg">
<i className="w-5 h-5" data-lucide="box"></i>
</div>
<div>
<h1 className="text-sm font-semibold tracking-tight text-white leading-tight">LiveDesk <span className="text-zinc-500 font-normal">OS</span></h1>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full status-online"></span>
<span className="text-xs text-zinc-400 font-medium tracking-tight" id="status-text">Guest • <span id="clock">00:00</span></span>
</div>
</div>
</div>

<div className="flex gap-2">
<button className="h-9 px-3 blur-panel hover:bg-white/10 rounded-lg text-xs font-medium text-white transition-colors flex items-center gap-2 shadow-lg" onclick="Modules.AppStore.toggle()">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> Add
                </button>
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg cursor-pointer hover:scale-105 transition-transform flex items-center justify-center text-white text-xs font-bold" id="user-avatar" onclick="Modules.Auth.toggleMenu()">
                    G
                </div>
</div>
</div>

<div className="flex flex-col items-center gap-4 pointer-events-auto w-full">

<div className="flex items-center gap-2 blur-panel rounded-full px-3 py-1.5" id="page-indicator">

</div>

<div className="w-full flex justify-between items-end">
<div className="blur-panel rounded-lg p-1 flex flex-col gap-1 shadow-lg">
<button className="p-2 hover:bg-white/10 rounded-md text-zinc-400 hover:text-white" onclick="Modules.Layout.zoom(0.1)"><i className="w-4 h-4" data-lucide="plus"></i></button>
<button className="p-2 hover:bg-white/10 rounded-md text-zinc-400 hover:text-white" onclick="Modules.Layout.resetView()"><i className="w-4 h-4" data-lucide="maximize"></i></button>
<button className="p-2 hover:bg-white/10 rounded-md text-zinc-400 hover:text-white" onclick="Modules.Layout.zoom(-0.1)"><i className="w-4 h-4" data-lucide="minus"></i></button>
</div>
<div className="blur-panel rounded-lg px-3 py-2 flex items-center gap-2 text-xs text-zinc-400 font-medium shadow-lg hover:text-white cursor-pointer transition-colors" onclick="Modules.Backup.showModal()">
<i className="w-3.5 h-3.5" data-lucide="cloud"></i>
<span>Sync Active</span>
</div>
</div>
</div>
</div>


<div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-200" id="app-store">
<div className="bg-[#111] border border-white/10 rounded-2xl w-[500px] max-w-[90vw] shadow-2xl transform scale-95 transition-transform duration-200 flex flex-col max-h-[85vh]" id="store-content">
<div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#111] rounded-t-2xl z-10">
<h3 className="text-sm font-semibold text-white">App Library</h3>
<button className="text-zinc-500 hover:text-white" onclick="Modules.AppStore.toggle()"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="p-4 overflow-y-auto grid grid-cols-4 gap-3" id="store-grid">

</div>
</div>
</div>

<div className="fixed z-[70] w-48 bg-[#18181b] border border-white/10 rounded-lg shadow-2xl py-1 hidden opacity-0" id="context-menu">
<button className="w-full text-left px-3 py-2 text-xs font-medium text-zinc-300 hover:bg-white/10 hover:text-white flex items-center gap-2" onclick="Modules.ContextMenu.action('open')">
<i className="w-3.5 h-3.5" data-lucide="external-link"></i> Open
        </button>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-zinc-300 hover:bg-white/10 hover:text-white flex items-center gap-2" onclick="Modules.ContextMenu.action('edit')">
<i className="w-3.5 h-3.5" data-lucide="edit-2"></i> Edit
        </button>
<div className="h-px bg-white/10 my-1 mx-2"></div>
<button className="w-full text-left px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/10 flex items-center gap-2" onclick="Modules.ContextMenu.action('delete')">
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i> Delete
        </button>
</div>


<div className="fixed inset-0 w-screen h-screen cursor-grab active:cursor-grabbing z-0 touch-none" id="viewport">

<div className="world-container" id="world">

<div className="iso-grid-bg"></div>

<div id="tile-layer"></div>

<div id="cursors-layer"></div>
</div>
</div>



    </>
  );
}
