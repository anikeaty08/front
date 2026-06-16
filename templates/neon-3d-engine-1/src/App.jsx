import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}
}



        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
        import { TransformControls } from 'three/addons/controls/TransformControls.js';

        // --- STATE MANAGEMENT ---
        const appState = {
            isAuthenticated: false,
            user: { name: "John Doe", initials: "JD", email: "demo@neon.app" },
            projects: [
                { id: "1", title: "Cyberpunk City", date: "2 days ago", thumb: null, objects: [{type:'cube', pos:[0,0.5,0], col:'#6366f1'}] },
                { id: "2", title: "Abstract Flow", date: "4 hours ago", thumb: null, objects: [{type:'sphere', pos:[0,0.6,0], col:'#10b981'}] }
            ],
            currentProjectId: null,
            projectToDelete: null
        };

        // --- MODAL SYSTEM ---
        const modalOverlay = document.getElementById('modal-overlay');

        window.openModal = (id) => {
            // Close any currently open modal content
            document.querySelectorAll('.modal-content').forEach(el => el.classList.add('hidden'));
            // Open overlay
            modalOverlay.classList.remove('hidden');
            // Show specific modal
            document.getElementById(id).classList.remove('hidden');
        };

        window.closeModals = () => {
            modalOverlay.classList.add('hidden');
            document.querySelectorAll('.modal-content').forEach(el => el.classList.add('hidden'));
            appState.projectToDelete = null;
        };
        
        // Allow switching between modals (e.g. from profile to account)
        window.switchToModal = (id) => {
            document.querySelectorAll('.modal-content').forEach(el => el.classList.add('hidden'));
            document.getElementById(id).classList.remove('hidden');
        }

        modalOverlay.addEventListener('click', (e) => {
            if(e.target === modalOverlay) closeModals();
        });

        // --- AUTH FLOW ---
        window.toggleAuthMode = () => {
            const login = document.getElementById('auth-login-form');
            const signup = document.getElementById('auth-signup-form');
            login.classList.toggle('hidden');
            signup.classList.toggle('hidden');
        };

        window.handleAuthSuccess = () => {
            appState.isAuthenticated = true;
            document.getElementById('view-auth').classList.add('hidden');
            document.getElementById('view-dashboard').classList.remove('hidden');
            document.getElementById('view-dashboard').classList.add('flex');
            updateDashboard();
            showToast(`Welcome back, ${appState.user.name.split(' ')[0]}`, 'success');
        };

        window.handleLogout = () => {
            appState.isAuthenticated = false;
            closeModals();
            document.getElementById('view-dashboard').classList.add('hidden');
            document.getElementById('view-dashboard').classList.remove('flex');
            document.getElementById('view-auth').classList.remove('hidden');
            showToast('Logged out successfully', 'default');
        };

        // --- DASHBOARD LOGIC ---
        window.switchDashTab = (tab) => {
            document.querySelectorAll('.nav-tab').forEach(b => {
                b.classList.remove('bg-white/[0.06]', 'text-white');
                b.classList.add('text-white/50');
            });
            event.target.classList.add('bg-white/[0.06]', 'text-white');
            event.target.classList.remove('text-white/50');
            
            document.querySelectorAll('.dash-content').forEach(c => c.classList.add('hidden'));
            document.getElementById(`tab-${tab}`).classList.remove('hidden');
        };

        function updateDashboard() {
            const grid = document.getElementById('project-grid');
            const empty = document.getElementById('empty-state');
            grid.innerHTML = '';

            if(appState.projects.length === 0) {
                empty.classList.remove('hidden');
                grid.classList.add('hidden');
                return;
            }

            empty.classList.add('hidden');
            grid.classList.remove('hidden');

            appState.projects.forEach(proj => {
                const card = document.createElement('div');
                card.className = "project-card group bg-[#121214] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/20 transition-all cursor-pointer flex flex-col relative";
                
                const thumbStyle = proj.thumb ? `background-image: url(${proj.thumb}); background-size: cover; background-position: center;` : `background: linear-gradient(45deg, #1f1f23, #18181b);`;
                
                card.innerHTML = `
                    <div class="h-32 relative overflow-hidden bg-zinc-900" style="${thumbStyle}">
                        ${!proj.thumb ? '<div class="absolute inset-0 flex items-center justify-center text-white/10"><iconify-icon icon="solar:box-linear" width="32"></iconify-icon></div>' : ''}
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity card-actions flex gap-1">
                             <button class="w-6 h-6 rounded bg-red-500/80 text-white flex items-center justify-center hover:bg-red-500 stop-propagation" onclick="requestDeleteProject('${proj.id}')">
                                <iconify-icon icon="solar:trash-bin-trash-bold" width="12"></iconify-icon>
                            </button>
                        </div>
                    </div>
                    <div class="p-3">
                        <h3 class="text-xs font-semibold text-white/90 truncate">${proj.title}</h3>
                        <p class="text-[10px] text-white/40 mt-0.5 font-medium">${proj.date}</p>
                    </div>
                `;
                card.addEventListener('click', (e) => {
                    if(!e.target.closest('.stop-propagation')) loadProject(proj.id);
                });
                grid.appendChild(card);
            });
        }

        // Create Project Flow
        window.confirmCreateProject = () => {
            const nameInput = document.getElementById('input-create-name');
            const name = nameInput.value.trim() || "Untitled Project";
            
            const newId = Date.now().toString();
            appState.projects.push({
                id: newId,
                title: name,
                date: "Just now",
                thumb: null,
                objects: [] 
            });
            
            nameInput.value = ''; // Reset
            closeModals();
            updateDashboard();
            loadProject(newId);
        };

        // Delete Project Flow
        window.requestDeleteProject = (id) => {
            appState.projectToDelete = id;
            openModal('modal-delete-confirm');
        };

        document.getElementById('btn-confirm-delete').addEventListener('click', () => {
            if(appState.projectToDelete) {
                appState.projects = appState.projects.filter(p => p.id !== appState.projectToDelete);
                updateDashboard();
                showToast("Project deleted", "default");
                closeModals();
            }
        });

        // --- EDITOR LOGIC ---
        const dashboardView = document.getElementById('view-dashboard');
        const editorView = document.getElementById('view-editor');
        
        window.loadProject = (id) => {
            appState.currentProjectId = id;
            const project = appState.projects.find(p => p.id === id);
            if(!project) return;

            document.getElementById('editor-project-name').textContent = project.title;
            dashboardView.style.display = 'none'; // Use display none to fully hide
            editorView.classList.remove('hidden');
            
            // Reset Scene
            while(scene.children.length > 0){ scene.remove(scene.children[0]); }
            setupSceneEnvironment();
            
            // Load Objects
            objects.length = 0;
            if(project.objects.length > 0) {
                project.objects.forEach(data => addObject(data.type, data.pos, data.col));
            }
            
            onWindowResize();
        };

        window.closeProject = () => {
            saveProject(false);
            editorView.classList.add('hidden');
            dashboardView.style.display = 'flex'; // Restore flex
            appState.currentProjectId = null;
            updateDashboard();
        };

        window.saveProject = (showNotify) => {
            if(!appState.currentProjectId) return;
            const project = appState.projects.find(p => p.id === appState.currentProjectId);
            
            renderer.render(scene, camera);
            const thumbData = renderer.domElement.toDataURL('image/jpeg', 0.5);
            project.thumb = thumbData;
            project.date = "Edited just now";

            project.objects = objects.map(obj => ({
                type: obj.userData.type || 'cube',
                pos: [obj.position.x, obj.position.y, obj.position.z],
                col: '#' + obj.material.color.getHexString()
            }));

            if(showNotify) showToast("Project saved successfully", "success");
        };

        // --- 3D ENGINE ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#050505');
        const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(4, 4, 6);
        const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);
        
        const orbit = new OrbitControls(camera, renderer.domElement);
        orbit.enableDamping = true;
        const transformControl = new TransformControls(camera, renderer.domElement);
        transformControl.addEventListener('dragging-changed', (e) => orbit.enabled = !e.value);
        transformControl.addEventListener('change', () => { if(activeObject) updateInspectorUI(activeObject); });
        scene.add(transformControl);

        let gridHelper;
        function setupSceneEnvironment() {
            const ambiLight = new THREE.AmbientLight(0xffffff, 0.3);
            scene.add(ambiLight);
            const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
            dirLight.position.set(5, 10, 7);
            dirLight.castShadow = true;
            scene.add(dirLight);
            gridHelper = new THREE.GridHelper(30, 30, 0x333333, 0x111111);
            gridHelper.position.y = -0.01;
            scene.add(gridHelper);
            scene.add(transformControl);
        }

        const objects = [];
        let activeObject = null;
        let objectCount = 1;

        window.addObject = (type, pos = null, col = null) => {
            let geometry;
            if(type === 'cube') geometry = new THREE.BoxGeometry(1,1,1);
            else if(type === 'sphere') geometry = new THREE.SphereGeometry(0.6, 32, 32);
            else if(type === 'plane') geometry = new THREE.PlaneGeometry(2,2);
            else if(type === 'torus') geometry = new THREE.TorusGeometry(0.5, 0.2, 16, 32);
            
            const color = col || '#6366f1';
            const material = new THREE.MeshStandardMaterial({ color: color, roughness: 0.3, metalness: 0.1 });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.castShadow = true; mesh.receiveShadow = true;
            mesh.name = type.charAt(0).toUpperCase() + type.slice(1) + " " + objectCount++;
            mesh.userData.type = type;
            
            if(pos) mesh.position.set(pos[0], pos[1], pos[2]);
            else {
                mesh.position.y = (type==='plane') ? 0 : 0.5;
                if(type==='plane') mesh.rotation.x = -Math.PI/2;
            }

            scene.add(mesh);
            objects.push(mesh);
            updateSceneGraph();
            selectObject(mesh);
        };

        function updateSceneGraph() {
            const el = document.getElementById('scene-graph');
            el.innerHTML = '';
            objects.forEach(obj => {
                const isActive = activeObject === obj;
                const item = document.createElement('div');
                item.className = `flex items-center gap-2 px-3 py-1.5 mb-0.5 rounded cursor-pointer text-[11px] font-medium transition-all group border border-transparent ${isActive ? 'bg-indigo-500/10 text-white border-indigo-500/20' : 'hover:bg-white/[0.04] text-white/60 hover:text-white/90'}`;
                item.innerHTML = `<iconify-icon icon="solar:box-linear" width="14"></iconify-icon><span>${obj.name}</span>`;
                item.onclick = () => selectObject(obj);
                el.appendChild(item);
            });
        }

        function selectObject(obj) {
            activeObject = obj;
            if(obj) {
                transformControl.attach(obj);
                document.getElementById('properties-container').classList.remove('opacity-30', 'blur-[1px]', 'pointer-events-none');
                document.getElementById('inspector-title').value = obj.name;
                document.getElementById('inspector-uuid').textContent = 'ID: ' + obj.uuid.slice(0,8);
                updateInspectorUI(obj);
            } else {
                transformControl.detach();
                document.getElementById('properties-container').classList.add('opacity-30', 'blur-[1px]', 'pointer-events-none');
                document.getElementById('inspector-title').value = "No Selection";
            }
            updateSceneGraph();
        }

        function updateInspectorUI(obj) {
            if(!obj) return;
            ['x','y','z'].forEach(a => {
                document.getElementById(`pos-${a}`).value = parseFloat(obj.position[a].toFixed(2));
            });
            document.getElementById('mat-roughness').value = obj.material.roughness;
        }

        // --- EVENTS & UTILS ---
        window.showToast = (msg, type='info') => {
            const c = document.getElementById('toast-container');
            const el = document.createElement('div');
            let color = 'text-indigo-400';
            if(type==='success') color = 'text-emerald-400';
            el.className = 'toast-enter flex items-center gap-3 bg-[#18181b] border border-white/10 text-white px-4 py-2.5 rounded-lg shadow-2xl';
            el.innerHTML = `<iconify-icon icon="solar:info-circle-linear" class="${color}" width="18"></iconify-icon><span class="text-[11px] font-medium">${msg}</span>`;
            c.appendChild(el);
            setTimeout(() => { el.style.opacity='0'; setTimeout(()=>el.remove(),300); }, 3000);
        };

        // Transform controls
        document.querySelectorAll('.transform-input').forEach(inp => inp.addEventListener('input', (e) => {
            if(!activeObject) return;
            const axis = e.target.id.split('-')[1];
            activeObject.position[axis] = parseFloat(e.target.value);
        }));
        
        // Colors
        const palette = document.getElementById('color-palette');
        ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef', '#f43f5e', '#ffffff', '#a1a1aa', '#27272a'].forEach(col => {
            const btn = document.createElement('button');
            btn.className = 'w-full aspect-square rounded-sm border border-white/10';
            btn.style.backgroundColor = col;
            btn.onclick = () => { if(activeObject) activeObject.material.color.set(col); };
            palette.appendChild(btn);
        });

        // Delete
        document.getElementById('delete-btn').addEventListener('click', () => {
            if(activeObject) {
                scene.remove(activeObject);
                objects.splice(objects.indexOf(activeObject), 1);
                selectObject(null);
            }
        });

        // Tools
        document.querySelectorAll('.tool-btn').forEach(b => b.addEventListener('click', (e) => {
            transformControl.setMode(e.currentTarget.dataset.mode);
        }));

        document.getElementById('action-toggle-grid').addEventListener('click', () => {
             gridHelper.visible = !gridHelper.visible;
             document.querySelector('.menu-dropdown').classList.add('hidden');
        });

        // Toggle Menus
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const menu = document.getElementById(`menu-${btn.dataset.menu}`);
                document.querySelectorAll('.menu-dropdown').forEach(m => { if(m!==menu) m.classList.add('hidden') });
                menu.classList.toggle('hidden');
            });
        });
        window.onclick = () => document.querySelectorAll('.menu-dropdown').forEach(m => m.classList.add('hidden'));

        // Raycaster
        const raycaster = new THREE.Raycaster(); const mouse = new THREE.Vector2();
        container.addEventListener('pointerdown', (e) => {
            if(transformControl.dragging) return;
            const r = renderer.domElement.getBoundingClientRect();
            mouse.x = ((e.clientX - r.left)/r.width)*2 -1; mouse.y = -((e.clientY - r.top)/r.height)*2 +1;
            raycaster.setFromCamera(mouse, camera);
            const hits = raycaster.intersectObjects(objects);
            selectObject(hits.length ? hits[0].object : null);
        });

        function animate() { requestAnimationFrame(animate); orbit.update(); renderer.render(scene, camera); }
        function onWindowResize() { 
            if(container.clientWidth > 0 && container.clientHeight > 0) {
                camera.aspect = container.clientWidth / container.clientHeight; 
                camera.updateProjectionMatrix(); 
                renderer.setSize(container.clientWidth, container.clientHeight); 
            }
        }
        window.addEventListener('resize', onWindowResize);

        // Init
        setupSceneEnvironment();
        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-[300] flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] hidden flex items-center justify-center" id="modal-overlay">

<div className="modal-content hidden glass-panel bg-[#09090b] w-[400px] rounded-xl p-6 border border-white/10 shadow-2xl modal-enter relative" id="modal-create-project">
<h3 className="text-lg font-semibold text-white mb-4 font-geist">Create New Project</h3>
<div className="space-y-4">
<div>
<label className="text-[11px] font-medium text-white/60 mb-1.5 block font-geist">Project Name</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neutral-500/50 focus:ring-1 focus:ring-neutral-500/20 transition-all placeholder-white/20" id="input-create-name" placeholder="e.g. Cyberpunk City" type="text"/>
</div>
<div className="flex gap-2 justify-end mt-6">
<button className="px-4 py-2 text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-geist" onclick="closeModals()">Cancel</button>
<button className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg hover:bg-indigo-200 transition-colors shadow-lg shadow-white/5 font-geist" onclick="confirmCreateProject()">Create Project</button>
</div>
</div>
</div>

<div className="modal-content hidden glass-panel bg-[#09090b] w-[360px] rounded-xl p-6 border border-white/10 shadow-2xl modal-enter relative" id="modal-delete-confirm">
<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:trash-bin-trash-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-1 font-geist">Delete Project?</h3>
<p className="text-xs text-white/50 mb-6 px-4 font-geist">This action cannot be undone. This will permanently delete the project and all its data.</p>
<div className="flex gap-2 w-full">
<button className="flex-1 px-4 py-2 text-xs font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors font-geist" onclick="closeModals()">Cancel</button>
<button className="flex-1 px-4 py-2 bg-blue-500/90 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/20 font-geist" id="btn-confirm-delete">Delete</button>
</div>
</div>
</div>

<div className="modal-content hidden glass-panel bg-[#09090b] w-[480px] rounded-xl border border-white/10 shadow-2xl modal-enter relative overflow-hidden" id="modal-share">
<div className="p-4 border-b border-white/[0.06] flex items-center justify-between bg-[#0a0a0a]">
<h3 className="text-sm font-semibold text-white font-geist">Share Project</h3>
<button className="text-white/40 hover:text-white transition-colors" onclick="closeModals()"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<div className="p-6 space-y-6">
<div className="flex gap-2">
<input className="flex-1 bg-[#18181b] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neutral-500/50 transition-all placeholder-white/20" placeholder="email@example.com, user@domain.com" type="email"/>
<select className="bg-[#18181b] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none">
<option className="font-geist">Can edit</option>
<option className="font-geist">Can view</option>
</select>
<button className="px-4 py-2 bg-neutral-600 text-white text-xs font-semibold rounded-lg hover:bg-neutral-500 transition-colors font-geist" onclick="showToast('Invitation sent', 'success')">Invite</button>
</div>
<div>
<h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-3 font-geist">People with access</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-500 to-cyan-600 flex items-center justify-center text-[10px] font-bold text-white font-geist">JD</div>
<div>
<p className="text-xs font-medium text-white font-geist">John Doe (You)</p>
<p className="text-[10px] text-white/40 font-geist">owner@neon.app</p>
</div>
</div>
<span className="text-[10px] text-white/40 font-geist">Owner</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-[10px] font-bold text-white/60 font-geist">AS</div>
<div>
<p className="text-xs font-medium text-white font-geist">Alex Smith</p>
<p className="text-[10px] text-white/40 font-geist">alex@neon.app</p>
</div>
</div>
<select className="bg-transparent border-none text-[10px] text-white/60 focus:ring-0 cursor-pointer text-right pr-6">
<option className="font-geist">Can edit</option>
<option className="font-geist">Can view</option>
<option className="text-blue-400 font-geist">Remove</option>
</select>
</div>
</div>
</div>
<div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#18181b] border border-white/10 flex items-center justify-center text-white/40">
<iconify-icon icon="solar:link-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white font-geist">Anyone with the link</p>
<p className="text-[10px] text-white/40 font-geist">No access</p>
</div>
</div>
<button className="text-xs text-white/60 hover:text-white border border-white/10 px-3 py-1.5 rounded hover:bg-white/5 transition-colors font-geist" onclick="showToast('Link copied to clipboard', 'success')">Copy Link</button>
</div>
</div>
</div>

<div className="modal-content hidden glass-panel bg-[#09090b] w-[400px] rounded-xl p-6 border border-white/10 shadow-2xl modal-enter relative" id="modal-account">
<h3 className="text-lg font-semibold text-white mb-6 font-geist">Account Settings</h3>
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-700 to-indigo-600 border border-white/10 flex items-center justify-center text-xl font-bold text-white shadow-xl font-geist" id="account-avatar">JD</div>
<button className="text-xs text-neutral-400 hover:text-neutral-300 font-medium font-geist">Change Avatar</button>
</div>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-[11px] font-medium text-white/60 mb-1.5 block font-geist">First Name</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neutral-500/50" type="text" value="John"/>
</div>
<div>
<label className="text-[11px] font-medium text-white/60 mb-1.5 block font-geist">Last Name</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neutral-500/50" type="text" value="Doe"/>
</div>
</div>
<div>
<label className="text-[11px] font-medium text-white/60 mb-1.5 block font-geist">Email Address</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neutral-500/50" type="email" value="john.doe@example.com"/>
</div>
</div>
<div className="flex justify-end gap-2 mt-8">
<button className="px-4 py-2 text-xs font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-geist" onclick="closeModals()">Cancel</button>
<button className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg hover:bg-indigo-200 transition-colors font-geist" onclick="showToast('Profile updated', 'success'); closeModals()">Save Changes</button>
</div>
</div>

<div className="modal-content hidden glass-panel bg-[#09090b] w-[380px] rounded-xl border border-white/10 shadow-2xl modal-enter relative overflow-hidden" id="modal-notifications">
<div className="p-4 border-b border-white/[0.06] flex items-center justify-between bg-[#0a0a0a]">
<h3 className="text-sm font-semibold text-white font-geist">Notifications</h3>
<button className="text-white/40 hover:text-white transition-colors" onclick="closeModals()"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<div className="max-h-[400px] overflow-y-auto">
<div className="divide-y divide-white/[0.04]">
<div className="p-4 hover:bg-white/[0.02] transition-colors flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-500/20 text-neutral-400 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></div>
<div>
<p className="text-xs text-white leading-relaxed font-geist"><span className="font-semibold font-geist">Alex Smith</span> invited you to edit <span className="text-white/70 font-geist">"Mars Base Alpha"</span>.</p>
<p className="text-[10px] text-white/30 mt-1 font-geist">2 minutes ago</p>
<div className="flex gap-2 mt-2">
<button className="px-2 py-1 bg-neutral-600 hover:bg-neutral-500 rounded text-[10px] font-medium text-white font-geist">Accept</button>
<button className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded text-[10px] font-medium text-white/60 font-geist">Decline</button>
</div>
</div>
</div>
<div className="p-4 hover:bg-white/[0.02] transition-colors flex gap-3 opacity-60">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><iconify-icon icon="solar:check-circle-bold" width="14"></iconify-icon></div>
<div>
<p className="text-xs text-white leading-relaxed font-geist">Your project <span className="font-semibold font-geist">"Abstract Flow"</span> has finished rendering.</p>
<p className="text-[10px] text-white/30 mt-1 font-geist">1 hour ago</p>
</div>
</div>
</div>
</div>
<div className="p-2 border-t border-white/[0.06] text-center">
<button className="text-[10px] text-white/40 hover:text-white transition-colors py-1 font-geist">Mark all as read</button>
</div>
</div>

<div className="modal-content hidden glass-panel bg-[#09090b] w-[350px] rounded-xl border border-white/10 shadow-2xl modal-enter" id="modal-profile">
<div className="h-24 bg-gradient-to-r from-neutral-900/50 to-cyan-900/50 relative">
<button className="absolute top-2 right-2 text-white/50 hover:text-white" onclick="closeModals()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="px-6 pb-6 -mt-10">
<div className="w-20 h-20 rounded-full bg-[#18181b] p-1 relative z-10 mx-auto">
<div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-700 to-indigo-600 border border-white/10 flex items-center justify-center text-xl font-bold text-white shadow-xl font-geist" id="profile-avatar-char">JD</div>
<div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-[#18181b] rounded-full"></div>
</div>
<div className="text-center mt-3 mb-6">
<h3 className="text-lg font-semibold text-white font-geist" id="profile-name">John Doe</h3>
<p className="text-xs text-white/40 font-geist">Pro Plan Member</p>
</div>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.04] text-xs text-white/70 hover:text-white transition-colors text-left font-geist" onclick="switchToModal('modal-account')">
<iconify-icon icon="solar:user-circle-linear" width="16"></iconify-icon> Account Details
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.04] text-xs text-white/70 hover:text-white transition-colors text-left font-geist" onclick="switchToModal('modal-notifications')">
<iconify-icon icon="solar:bell-linear" width="16"></iconify-icon> Notifications <span className="ml-auto bg-neutral-500/20 text-neutral-300 px-1.5 rounded text-[10px] font-geist">2</span>
</button>
<div className="h-px bg-white/[0.06] my-1"></div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-500/10 text-xs text-blue-400 hover:text-blue-300 transition-colors text-left font-geist" onclick="handleLogout()">
<iconify-icon icon="solar:logout-linear" width="16"></iconify-icon> Log Out
                    </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center h-full w-full bg-[#09090b] relative z-[50]" id="view-auth">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neutral-600/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]"></div>
</div>
<div className="glass-panel w-full max-w-sm p-8 rounded-2xl border border-white/10 shadow-2xl relative z-10">
<div className="text-center mb-8">
<div className="w-12 h-12 mx-auto bg-gradient-to-br from-neutral-500 via-cyan-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-neutral-500/25 mb-4">
<iconify-icon icon="solar:box-minimalistic-bold" width="24"></iconify-icon>
</div>
<h1 className="text-2xl tracking-tight text-white mb-2 font-space-grotesk font-semibold">Welcome to Neon</h1>
<p className="text-sm text-white/40 font-geist">The next-generation 3D engine.</p>
</div>

<div className="space-y-4" id="auth-login-form">
<div className="">
<label className="block text-[11px] font-medium text-white/60 mb-1.5 font-geist">Email</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500/50 focus:ring-1 focus:ring-neutral-500/20 transition-all placeholder-white/20" type="email" value="demo@neon.app"/>
</div>
<div className="">
<label className="block text-[11px] font-medium text-white/60 mb-1.5 flex justify-between font-geist">
                        Password <a className="text-neutral-400 hover:text-neutral-300 font-geist" href="#">Forgot?</a>
</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500/50 focus:ring-1 focus:ring-neutral-500/20 transition-all placeholder-white/20" type="password" value="password"/>
</div>
<button className="w-full bg-white text-black font-semibold text-sm py-2.5 rounded-lg hover:bg-indigo-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] font-geist" onclick="handleAuthSuccess()">Sign In</button>
<div className="text-center mt-4">
<p className="text-xs text-white/40 font-geist">Don't have an account? <button className="text-neutral-400 hover:text-neutral-300 font-medium font-geist" onclick="toggleAuthMode()">Sign up</button></p>
</div>
</div>

<div className="hidden space-y-4" id="auth-signup-form">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[11px] font-medium text-white/60 mb-1.5 font-geist">First Name</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500/50 transition-all" type="text"/>
</div>
<div>
<label className="block text-[11px] font-medium text-white/60 mb-1.5 font-geist">Last Name</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500/50 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-white/60 mb-1.5 font-geist">Email</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500/50 transition-all" type="email"/>
</div>
<div>
<label className="block text-[11px] font-medium text-white/60 mb-1.5 font-geist">Password</label>
<input className="w-full bg-[#18181b] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500/50 transition-all" type="password"/>
</div>
<button className="w-full bg-white text-black font-semibold text-sm py-2.5 rounded-lg hover:bg-indigo-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] font-geist" onclick="handleAuthSuccess()">Create Account</button>
<div className="text-center mt-4">
<p className="text-xs text-white/40 font-geist">Already have an account? <button className="text-neutral-400 hover:text-neutral-300 font-medium font-geist" onclick="toggleAuthMode()">Log in</button></p>
</div>
</div>
</div>
</div>

<div className="hidden flex-col h-full w-full bg-[#09090b] transition-opacity duration-300" id="view-dashboard">

<header className="h-14 border-b border-white/[0.06] flex items-center justify-between px-6 bg-[#0a0a0a] shrink-0 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 bg-gradient-to-br from-neutral-500 via-cyan-500 to-cyan-500 rounded flex items-center justify-center text-white shadow-lg shadow-neutral-500/20">
<iconify-icon icon="solar:box-minimalistic-bold" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white font-geist">Neon</span>
</div>
<div className="flex items-center gap-1">
<button className="nav-tab text-[13px] font-medium text-white px-3 py-1.5 rounded-md bg-white/[0.06] transition-all font-geist" onclick="switchDashTab('overview')">Overview</button>
<button className="nav-tab text-[13px] font-medium text-white/50 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/[0.04] transition-all font-geist" onclick="switchDashTab('team')">Team</button>
<button className="nav-tab text-[13px] font-medium text-white/50 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/[0.04] transition-all font-geist" onclick="switchDashTab('settings')">Settings</button>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white/60 transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-[#18181b] border border-white/[0.08] hover:border-white/[0.15] focus:border-neutral-500/50 rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-white/30 outline-none w-48 focus:w-64 transition-all focus:ring-1 focus:ring-neutral-500/20" placeholder="Search..." type="text"/>
</div>
<button className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-700 to-indigo-600 border border-white/10 flex items-center justify-center text-[10px] font-bold hover:ring-2 ring-white/20 transition-all cursor-pointer font-geist" id="header-avatar" onclick="openModal('modal-profile')">JD</button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-8 relative">
<div className="max-w-7xl mx-auto h-full">

<div className="dash-content space-y-8 animate-fade-in" id="tab-overview">
<div className="flex items-center justify-between">
<div>
<h1 className="text-xl font-semibold tracking-tight text-white mb-1 font-geist">Projects</h1>
<p className="text-xs text-white/40 font-geist">Manage your 3D scenes and assets.</p>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded text-xs font-semibold hover:bg-indigo-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)] active:scale-95 transform font-geist" onclick="openModal('modal-create-project')">
<iconify-icon icon="solar:add-circle-bold" width="14"></iconify-icon> New Project
                        </button>
</div>

<div className="hidden flex flex-col items-center justify-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]" id="empty-state">
<div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center text-white/20 mb-4">
<iconify-icon icon="solar:folder-open-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white/80 font-geist">No projects yet</h3>
<p className="text-xs text-white/40 mt-1 mb-4 font-geist">Create your first 3D scene to get started.</p>
<button className="text-xs text-neutral-400 hover:text-neutral-300 font-medium font-geist" onclick="openModal('modal-create-project')">Create Project →</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="project-grid">

</div>
</div>

<div className="dash-content hidden space-y-6" id="tab-team">
<div>
<h1 className="text-xl font-semibold tracking-tight text-white mb-1 font-geist">Team Members</h1>
<p className="text-xs text-white/40 font-geist">Manage access and collaboration.</p>
</div>
<div className="bg-[#121214] border border-white/[0.06] rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-white/[0.06] flex justify-between items-center bg-[#151518]">
<h3 className="text-xs font-semibold text-white/80 uppercase tracking-wide font-geist">Active Members</h3>
<button className="text-[11px] font-medium text-neutral-400 hover:text-neutral-300 flex items-center gap-1 font-geist" onclick="showToast('Invite link copied', 'success')">
<iconify-icon icon="solar:link-linear" width="12"></iconify-icon> Copy Invite Link
                            </button>
</div>
<div className="divide-y divide-white/[0.04]" id="team-list">
<div className="px-6 py-3 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-neutral-600 flex items-center justify-center text-[10px] font-bold font-geist">JD</div>
<div>
<p className="text-sm text-white font-medium font-geist" id="team-you-name">John Doe (You)</p>
<p className="text-[11px] text-white/40 font-geist">Admin • Online</p>
</div>
</div>
<span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/60 font-geist">Owner</span>
</div>
<div className="px-6 py-3 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[10px] font-bold font-geist">AS</div>
<div>
<p className="text-sm text-white font-medium font-geist">Alex Smith</p>
<p className="text-[11px] text-white/40 font-geist">Editor • 2h ago</p>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 hover:bg-white/10 rounded text-white/50 hover:text-white" title="Settings"><iconify-icon icon="solar:settings-linear"></iconify-icon></button>
</div>
</div>
</div>
<div className="px-6 py-3 bg-[#151518] hover:bg-[#1a1a1d] cursor-pointer transition-colors border-t border-white/[0.06] flex items-center justify-center gap-2 text-xs text-white/60 font-geist" onclick="openModal('modal-share')">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon> Invite New Member
                        </div>
</div>
</div>

<div className="dash-content hidden space-y-6 max-w-2xl" id="tab-settings">
<div>
<h1 className="text-xl font-semibold tracking-tight text-white mb-1 font-geist">Workspace Settings</h1>
<p className="text-xs text-white/40 font-geist">Configure your editor environment.</p>
</div>
<div className="space-y-4">
<div className="p-4 bg-[#121214] border border-white/[0.06] rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/[0.04] rounded-lg text-white/70">
<iconify-icon icon="solar:cloud-upload-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white font-geist">Auto-Save Projects</h3>
<p className="text-[11px] text-white/40 font-geist">Automatically save changes every 2 minutes.</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle-autosave" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-indigo-700 cursor-pointer transition-colors duration-300" htmlFor="toggle-autosave"></label>
</div>
</div>
<div className="p-4 bg-[#121214] border border-white/[0.06] rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/[0.04] rounded-lg text-white/70">
<iconify-icon icon="solar:moon-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white font-geist">High Contrast Mode</h3>
<p className="text-[11px] text-white/40 font-geist">Increase visibility of UI elements.</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle-contrast" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-indigo-700 cursor-pointer transition-colors duration-300" htmlFor="toggle-contrast"></label>
</div>
</div>
<div className="p-4 bg-[#121214] border border-white/[0.06] rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/[0.04] rounded-lg text-white/70">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white font-geist">Clear Local Cache</h3>
<p className="text-[11px] text-white/40 font-geist">Free up space by removing temporary render files.</p>
</div>
</div>
<button className="px-3 py-1.5 border border-white/10 rounded-md text-xs text-white/70 hover:bg-white/5 transition-colors font-geist" onclick="showToast('Cache cleared', 'success')">Clear Now</button>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="hidden flex flex-col h-full w-full" id="view-editor">

<nav className="h-10 border-b border-white/[0.06] flex items-center justify-between px-3 bg-[#0a0a0a] z-[100] shrink-0 select-none relative">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2.5 mr-1 group cursor-pointer" onclick="closeProject()">
<div className="w-5 h-5 bg-[#18181b] rounded flex items-center justify-center text-white/50 border border-white/10 group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="12"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors font-geist">Back</span>
</div>
<div className="h-3 w-px bg-white/[0.08]"></div>

<div className="flex items-center gap-0.5" id="top-menu-bar">
<div className="relative">
<button className="menu-btn px-2.5 py-1 rounded hover:bg-white/[0.06] text-[11px] font-medium text-white/70 hover:text-white transition-all outline-none focus:bg-white/[0.08] font-geist" data-menu="file">File</button>
<div className="hidden absolute top-full left-0 mt-1 w-48 bg-[#18181b] rounded-lg border border-white/[0.08] shadow-2xl shadow-black/50 p-1 z-[100] menu-dropdown" id="menu-file">
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-neutral-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" onclick="saveProject(true)">
<span className="flex items-center gap-2 font-geist"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:diskette-linear" width="14"></iconify-icon> Save Project</span>
<span className="text-[9px] opacity-30 font-mono group-hover:opacity-70 font-geist">⌘S</span>
</button>
</div>
</div>
<div className="relative">
<button className="menu-btn px-2.5 py-1 rounded hover:bg-white/[0.06] text-[11px] font-medium text-white/70 hover:text-white transition-all outline-none focus:bg-white/[0.08] font-geist" data-menu="view">View</button>
<div className="hidden absolute top-full left-0 mt-1 w-48 bg-[#18181b] rounded-lg border border-white/[0.08] shadow-2xl shadow-black/50 p-1 z-[100] menu-dropdown" id="menu-view">
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-neutral-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" id="action-toggle-grid">
<span className="flex items-center gap-2 font-geist"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:grid-linear" width="14"></iconify-icon> Toggle Grid</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-white/50 font-medium tracking-tight font-geist" id="editor-project-name">Untitled</span>
<div className="h-3 w-px bg-white/[0.08]"></div>

<button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-600 text-white hover:bg-neutral-500 text-[11px] font-semibold transition-all font-geist" onclick="openModal('modal-share')">
<iconify-icon icon="solar:users-group-rounded-bold" width="12"></iconify-icon> Share
                </button>
<button className="group flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-black hover:bg-neutral-50 text-[11px] font-semibold transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transform active:scale-95" onclick="saveProject(true); showToast('Project Published', 'success')">
<span className="font-geist">Publish</span>
</button>
</div>
</nav>

<main className="flex-1 flex overflow-hidden">

<aside className="w-64 border-r border-white/[0.06] bg-[#0a0a0a] flex flex-col shrink-0 z-10">
<div className="px-3 py-2 border-b border-white/[0.06] flex items-center justify-between min-h-[40px] bg-[#0c0c0c]">
<span className="text-[10px] font-semibold tracking-tight text-white/50 uppercase pl-1 font-geist">Hierarchy</span>
<button className="text-white/40 hover:text-white transition-colors p-1 rounded hover:bg-white/10" onclick="addObject('cube')">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-1.5 space-y-0.5" id="scene-graph"></div>
<div className="p-3 border-t border-white/[0.06] bg-[#09090b]">
<div className="text-[10px] text-white/40 mb-2.5 font-semibold tracking-tight px-1 font-geist">ADD PRIMITIVE</div>
<div className="grid grid-cols-4 gap-2">
<button className="add-primitive aspect-square rounded bg-[#151516] hover:bg-[#202022] hover:border-white/20 border border-white/[0.06] flex flex-col gap-1 items-center justify-center transition-all group active:scale-95" data-type="cube"><iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:box-linear" width="18"></iconify-icon></button>
<button className="add-primitive aspect-square rounded bg-[#151516] hover:bg-[#202022] hover:border-white/20 border border-white/[0.06] flex flex-col gap-1 items-center justify-center transition-all group active:scale-95" data-type="sphere"><iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:basketball-linear" width="18"></iconify-icon></button>
<button className="add-primitive aspect-square rounded bg-[#151516] hover:bg-[#202022] hover:border-white/20 border border-white/[0.06] flex flex-col gap-1 items-center justify-center transition-all group active:scale-95" data-type="plane"><iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:card-linear" width="18"></iconify-icon></button>
<button className="add-primitive aspect-square rounded bg-[#151516] hover:bg-[#202022] hover:border-white/20 border border-white/[0.06] flex flex-col gap-1 items-center justify-center transition-all group active:scale-95" data-type="torus"><iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:donut-linear" width="18"></iconify-icon></button>
</div>
</div>
</aside>

<div className="flex-1 relative bg-black flex flex-col min-w-0 shadow-inner">
<div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 glass-panel rounded-full px-1.5 py-1.5 flex items-center gap-1 transition-all duration-300">
<button className="tool-btn w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all active:scale-90" data-mode="translate"><iconify-icon icon="solar:cursor-linear" width="16"></iconify-icon></button>
<button className="tool-btn w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all active:scale-90" data-mode="rotate"><iconify-icon icon="solar:refresh-circle-linear" width="16"></iconify-icon></button>
<button className="tool-btn w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all active:scale-90" data-mode="scale"><iconify-icon icon="solar:maximize-square-linear" width="16"></iconify-icon></button>
</div>
<div className="flex-1 w-full h-full cursor-crosshair relative outline-none z-0" id="canvas-container"><canvas data-engine="three.js r160" height="0" style={{display: 'block', width: '0px', height: '0px', touchAction: 'none'}} width="0"></canvas></div>
</div>

<aside className="w-[280px] border-l border-white/[0.06] bg-[#0a0a0a] flex flex-col overflow-y-auto shrink-0 z-10">
<div className="px-4 py-3 border-b border-white/[0.06] min-h-[50px] flex flex-col justify-center bg-[#0c0c0c]">
<input className="bg-transparent border-none p-0 text-sm font-semibold tracking-tight text-white placeholder-white/20 focus:ring-0 w-full truncate cursor-text hover:text-neutral-300 transition-colors" disabled="" id="inspector-title" placeholder="No Selection" type="text"/>
<div className="text-[10px] text-white/30 font-mono mt-0.5 flex items-center justify-between"><span className="font-geist" id="inspector-uuid">ID: -</span></div>
</div>
<div className="transition-all duration-300 opacity-30 blur-[1px] pointer-events-none" id="properties-container">

<div className="p-4 border-b border-white/[0.06]">
<div className="space-y-2.5">
<div className="grid grid-cols-[50px_1fr] gap-2 items-center group">
<span className="text-[10px] text-white/40 font-geist">Position</span>
<div className="grid grid-cols-3 gap-1.5">
<div className="relative"><span className="absolute left-1.5 top-1 text-[9px] text-blue-500 opacity-60 font-geist">X</span><input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 pl-4 text-[10px] text-white focus:outline-none focus:border-neutral-500/50 text-right font-mono" id="pos-x" step="0.1" type="number"/></div>
<div className="relative"><span className="absolute left-1.5 top-1 text-[9px] text-cyan-500 opacity-60 font-geist">Y</span><input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 pl-4 text-[10px] text-white focus:outline-none focus:border-neutral-500/50 text-right font-mono" id="pos-y" step="0.1" type="number"/></div>
<div className="relative"><span className="absolute left-1.5 top-1 text-[9px] text-indigo-500 opacity-60 font-geist">Z</span><input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 pl-4 text-[10px] text-white focus:outline-none focus:border-neutral-500/50 text-right font-mono" id="pos-z" step="0.1" type="number"/></div>
</div>
</div>
</div>
</div>

<div className="p-4 border-b border-white/[0.06]">
<span className="text-[11px] font-semibold text-white/40 mb-3 block font-geist">MATERIAL</span>
<div className="grid grid-cols-7 gap-1.5" id="color-palette"><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(239, 68, 68)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(249, 115, 22)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(245, 158, 11)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(132, 204, 22)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(16, 185, 129)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(6, 182, 212)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(59, 130, 246)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(99, 102, 241)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(139, 92, 246)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(217, 70, 239)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(244, 63, 94)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(255, 255, 255)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(161, 161, 170)'}}></button><button className="w-full aspect-square rounded-sm border border-white/10" style={{backgroundColor: 'rgb(39, 39, 42)'}}></button></div>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-2"><span className="text-[10px] text-white/40 w-12 font-geist">Roughness</span><input className="accent-neutral-500" id="mat-roughness" max="1" min="0" step="0.01" type="range"/></div>
</div>
</div>

<div className="p-4 mt-auto">
<button className="w-full py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-semibold hover:bg-blue-500/20 hover:text-blue-300 transition-colors flex items-center justify-center gap-2 group font-geist" id="delete-btn">Delete Object</button>
</div>
</div>
</aside>
</main>
</div>



    </>
  );
}
