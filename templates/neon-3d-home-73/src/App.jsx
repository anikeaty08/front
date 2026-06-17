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



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}
}



        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
        import { TransformControls } from 'three/addons/controls/TransformControls.js';

        // --- Notification (Toast) System ---
        window.showToast = (message, type = 'info') => {
            const container = document.getElementById('toast-container');
            const el = document.createElement('div');
            el.className = 'toast-enter pointer-events-auto flex items-center gap-3 bg-[#18181b] border border-white/10 text-white px-4 py-2.5 rounded-lg shadow-2xl shadow-black/50 min-w-[240px]';
            
            let icon = 'info-circle-linear';
            let color = 'text-indigo-400';
            
            if(type === 'success') { icon = 'check-circle-linear'; color = 'text-emerald-400'; }
            if(type === 'warning') { icon = 'danger-circle-linear'; color = 'text-orange-400'; }
            if(type === 'error') { icon = 'close-circle-linear'; color = 'text-red-400'; }

            el.innerHTML = `
                <iconify-icon icon="solar:${icon}" class="${color}" width="18"></iconify-icon>
                <div class="flex flex-col">
                    <span class="text-[11px] font-medium tracking-tight text-white/90">${message}</span>
                </div>
            `;
            
            container.appendChild(el);
            
            // Remove after delay
            setTimeout(() => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(5px)';
                el.style.transition = 'all 0.3s ease';
                setTimeout(() => el.remove(), 300);
            }, 3000);
        }

        // --- Menu System Logic (macOS Style) ---
        const menuBtns = document.querySelectorAll('.menu-btn');
        const menus = document.querySelectorAll('.menu-dropdown');
        let isMenuOpen = false;

        function closeMenus() {
            menus.forEach(m => m.classList.add('hidden'));
            menuBtns.forEach(b => {
                b.classList.remove('bg-white/[0.08]', 'text-white');
                b.classList.add('text-white/70');
            });
            isMenuOpen = false;
        }

        function openMenu(btnId) {
            closeMenus(); // Close others first
            const btn = document.querySelector(`button[data-menu="${btnId}"]`);
            const menu = document.getElementById(`menu-${btnId}`);
            
            if(menu && btn) {
                menu.classList.remove('hidden');
                btn.classList.add('bg-white/[0.08]', 'text-white');
                btn.classList.remove('text-white/70');
                isMenuOpen = true;
            }
        }

        menuBtns.forEach(btn => {
            const id = btn.dataset.menu;
            
            // Click to toggle
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const menu = document.getElementById(`menu-${id}`);
                if(menu && !menu.classList.contains('hidden')) {
                    closeMenus();
                } else {
                    openMenu(id);
                }
            });

            // Hover switch
            btn.addEventListener('mouseenter', () => {
                if(isMenuOpen) {
                    openMenu(id);
                }
            });
        });

        // Close when clicking outside
        window.addEventListener('click', (e) => {
            if(isMenuOpen && !e.target.closest('.menu-dropdown') && !e.target.closest('.menu-btn')) {
                closeMenus();
            }
        });

        // --- Core 3D Setup ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#000000'); // Pure black for better contrast
        scene.fog = new THREE.Fog('#000000', 5, 40);

        const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(4, 4, 6);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // Lights
        const ambiLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(5, 10, 7);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.set(2048, 2048);
        scene.add(dirLight);

        // Grid
        const grid = new THREE.GridHelper(30, 30, 0x444444, 0x111111);
        grid.position.y = -0.01;
        scene.add(grid);

        // Controls
        const orbit = new OrbitControls(camera, renderer.domElement);
        orbit.enableDamping = true;
        orbit.dampingFactor = 0.05;

        const transformControl = new TransformControls(camera, renderer.domElement);
        transformControl.addEventListener('dragging-changed', (e) => orbit.enabled = !e.value);
        transformControl.addEventListener('change', () => { if(activeObject) updateInspectorUI(activeObject); });
        scene.add(transformControl);

        // --- App State ---
        let activeObject = null;
        let objectCount = 1;
        const objects = []; 
        const sceneGraphEl = document.getElementById('scene-graph');
        const inspectorContainer = document.getElementById('properties-container');
        const inspectorTitle = document.getElementById('inspector-title');
        const inspectorUuid = document.getElementById('inspector-uuid');
        const selectionIndicator = document.getElementById('selection-indicator');

        // --- Functions ---

        function updateSceneGraph() {
            sceneGraphEl.innerHTML = '';
            objects.forEach((obj) => {
                const isActive = activeObject === obj;
                
                const item = document.createElement('div');
                // Added group and hover states
                item.className = `flex items-center gap-2 px-3 py-1.5 mb-0.5 rounded cursor-pointer text-[11px] font-medium transition-all group border border-transparent ${isActive ? 'bg-indigo-500/10 text-white border-indigo-500/20' : 'hover:bg-white/[0.04] text-white/60 hover:text-white/90 hover:border-white/[0.04]'}`;
                
                let iconName = 'box-linear';
                if(obj.geometry.type.includes('Sphere')) iconName = 'basketball-linear';
                if(obj.geometry.type.includes('Torus')) iconName = 'donut-linear';
                if(obj.geometry.type.includes('Plane')) iconName = 'card-linear';
                
                item.innerHTML = `
                    <iconify-icon icon="solar:${iconName}" class="${isActive ? 'text-indigo-400' : 'text-white/30 group-hover:text-white/50'} transition-colors" width="14"></iconify-icon>
                    <span class="flex-1 truncate pointer-events-none select-none tracking-tight">${obj.name}</span>
                    <button class="visibility-btn opacity-0 group-hover:opacity-100 text-white/20 hover:text-white transition-all hover:scale-110 p-0.5" title="Toggle Visibility">
                        <iconify-icon icon="solar:eye-linear" width="12"></iconify-icon>
                    </button>
                `;
                
                item.addEventListener('click', (e) => {
                    if(e.target.closest('.visibility-btn')) return;
                    selectObject(obj);
                });

                const visBtn = item.querySelector('.visibility-btn');
                visBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    obj.visible = !obj.visible;
                    item.classList.toggle('opacity-50');
                    if(activeObject === obj && !obj.visible) selectObject(null);
                });
                
                sceneGraphEl.appendChild(item);
            });
        }

        function selectObject(obj) {
            activeObject = obj;
            
            if (obj) {
                transformControl.attach(obj);
                // Visual feedback for inspector
                inspectorContainer.classList.remove('opacity-30', 'blur-[1px]', 'pointer-events-none');
                inspectorContainer.classList.add('opacity-100', 'blur-0');
                
                inspectorTitle.value = obj.name;
                inspectorTitle.disabled = false;
                inspectorUuid.textContent = 'ID: ' + obj.uuid.slice(0, 8);
                selectionIndicator.classList.remove('hidden');
                
                updateInspectorUI(obj);
                updateSceneGraph();
            } else {
                transformControl.detach();
                inspectorContainer.classList.add('opacity-30', 'blur-[1px]', 'pointer-events-none');
                inspectorContainer.classList.remove('opacity-100', 'blur-0');
                
                inspectorTitle.value = "";
                inspectorTitle.placeholder = "No Selection";
                inspectorTitle.disabled = true;
                inspectorUuid.textContent = "ID: -";
                selectionIndicator.classList.add('hidden');
                
                updateSceneGraph();
            }
        }

        function updateInspectorUI(obj) {
            if (!obj) return;
            const F = (n) => parseFloat(n.toFixed(2));
            const R = (rad) => Math.round(THREE.MathUtils.radToDeg(rad));

            document.getElementById('pos-x').value = F(obj.position.x);
            document.getElementById('pos-y').value = F(obj.position.y);
            document.getElementById('pos-z').value = F(obj.position.z);

            document.getElementById('rot-x').value = R(obj.rotation.x);
            document.getElementById('rot-y').value = R(obj.rotation.y);
            document.getElementById('rot-z').value = R(obj.rotation.z);

            document.getElementById('scl-x').value = F(obj.scale.x);
            document.getElementById('scl-y').value = F(obj.scale.y);
            document.getElementById('scl-z').value = F(obj.scale.z);

            if (obj.material) {
                const hex = '#' + obj.material.color.getHexString().toUpperCase();
                document.getElementById('hex-display').textContent = hex;
                document.getElementById('color-preview').style.backgroundColor = hex;
                
                document.getElementById('mat-roughness').value = obj.material.roughness;
                document.getElementById('val-roughness').textContent = obj.material.roughness.toFixed(2);
                document.getElementById('mat-metalness').value = obj.material.metalness;
                document.getElementById('val-metalness').textContent = obj.material.metalness.toFixed(2);
            }
        }

        // --- Interaction Logic ---

        // Name Editing
        inspectorTitle.addEventListener('change', (e) => {
            if(activeObject && e.target.value.trim() !== "") {
                activeObject.name = e.target.value.trim();
                updateSceneGraph();
            }
        });

        // Add Object Logic
        function addObject(type) {
            let geometry;
            let name = type.charAt(0).toUpperCase() + type.slice(1);
            
            switch(type) {
                case 'cube': geometry = new THREE.BoxGeometry(1,1,1); break;
                case 'sphere': geometry = new THREE.SphereGeometry(0.6, 32, 32); break;
                case 'plane': geometry = new THREE.PlaneGeometry(2,2); break;
                case 'torus': geometry = new THREE.TorusGeometry(0.5, 0.2, 16, 32); break;
                default: geometry = new THREE.BoxGeometry(1,1,1);
            }

            const mat = new THREE.MeshStandardMaterial({ color: 0x6366f1, roughness: 0.3, metalness: 0.1 });
            const mesh = new THREE.Mesh(geometry, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            
            mesh.position.set(0, 0.5, 0);
            if(type === 'plane') {
                mesh.rotation.x = -Math.PI / 2;
                mesh.position.y = 0;
            } else {
                // Randomize slightly if occupied
                if(objects.length > 0) mesh.position.x = (Math.random() - 0.5) * 2;
            }

            mesh.name = `${name} ${objectCount++}`;
            scene.add(mesh);
            objects.push(mesh);
            selectObject(mesh);
            showToast(`${name} Added`, 'success');
        }

        document.querySelectorAll('.add-primitive').forEach(btn => {
            btn.addEventListener('click', () => addObject(btn.dataset.type));
        });
        document.getElementById('add-btn-dropdown').addEventListener('click', () => addObject('cube'));

        // Delete Logic
        function deleteActiveObject() {
            if(activeObject) {
                const name = activeObject.name;
                const index = objects.indexOf(activeObject);
                if (index > -1) objects.splice(index, 1);
                transformControl.detach();
                scene.remove(activeObject);
                selectObject(null);
                showToast(`Deleted ${name}`, 'info');
            }
        }
        document.getElementById('delete-btn').addEventListener('click', deleteActiveObject);
        document.getElementById('action-delete').addEventListener('click', () => {
            deleteActiveObject(); closeMenus();
        });

        // Duplicate
        document.getElementById('action-duplicate').addEventListener('click', () => {
            if(activeObject) {
                const clone = activeObject.clone();
                clone.material = activeObject.material.clone();
                clone.name = activeObject.name + ' (Copy)';
                clone.position.addScalar(0.5);
                scene.add(clone);
                objects.push(clone);
                selectObject(clone);
                showToast('Object Duplicated', 'success');
            }
            closeMenus();
        });

        // Transform Inputs
        document.querySelectorAll('.transform-input').forEach(input => {
            const update3D = (e) => {
                if (!activeObject) return;
                const val = parseFloat(e.target.value);
                if (isNaN(val)) return;

                switch(e.target.id) {
                    case 'pos-x': activeObject.position.x = val; break;
                    case 'pos-y': activeObject.position.y = val; break;
                    case 'pos-z': activeObject.position.z = val; break;
                    case 'rot-x': activeObject.rotation.x = THREE.MathUtils.degToRad(val); break;
                    case 'rot-y': activeObject.rotation.y = THREE.MathUtils.degToRad(val); break;
                    case 'rot-z': activeObject.rotation.z = THREE.MathUtils.degToRad(val); break;
                    case 'scl-x': activeObject.scale.x = val; break;
                    case 'scl-y': activeObject.scale.y = val; break;
                    case 'scl-z': activeObject.scale.z = val; break;
                }
                if(transformControl.object) transformControl.update();
            };
            input.addEventListener('input', update3D);
        });

        // Material Inputs
        ['mat-roughness', 'mat-metalness'].forEach(id => {
            document.getElementById(id).addEventListener('input', (e) => {
                if(activeObject?.material) {
                    const val = parseFloat(e.target.value);
                    activeObject.material[id === 'mat-roughness' ? 'roughness' : 'metalness'] = val;
                    document.getElementById(id === 'mat-roughness' ? 'val-roughness' : 'val-metalness').textContent = val.toFixed(2);
                }
            });
        });

        // Tools
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                transformControl.setMode(mode);
                document.querySelectorAll('.tool-btn').forEach(b => {
                    const active = b.dataset.mode === mode;
                    b.classList.toggle('text-white', active);
                    b.classList.toggle('bg-white/10', active);
                    b.classList.toggle('text-white/40', !active);
                    if(active) showToast(`Tool: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`, 'info');
                });
            });
        });

        // Grid Toggle
        document.getElementById('toggle-grid-btn').addEventListener('click', () => toggleGrid());
        document.getElementById('action-toggle-grid').addEventListener('click', () => { toggleGrid(); closeMenus(); });

        function toggleGrid() {
            grid.visible = !grid.visible;
            const btn = document.getElementById('toggle-grid-btn');
            const check = document.getElementById('check-grid');
            
            if(grid.visible) {
                btn.classList.add('text-indigo-400', 'bg-indigo-500/10');
                btn.classList.remove('text-white/40', 'hover:text-white', 'hover:bg-white/10');
                check.classList.remove('opacity-0');
            } else {
                btn.classList.remove('text-indigo-400', 'bg-indigo-500/10');
                btn.classList.add('text-white/40', 'hover:text-white', 'hover:bg-white/10');
                check.classList.add('opacity-0');
            }
        }

        // Reset
        document.getElementById('reset-transform').addEventListener('click', () => {
            if(activeObject) {
                activeObject.position.set(0,0,0);
                activeObject.rotation.set(0,0,0);
                activeObject.scale.set(1,1,1);
                updateInspectorUI(activeObject);
                showToast('Transform Reset', 'info');
            }
        });
        
        document.getElementById('action-reset-camera').addEventListener('click', () => {
            camera.position.set(4, 4, 6);
            camera.lookAt(0,0,0);
            orbit.reset();
            closeMenus();
            showToast('Camera Reset', 'info');
        });

        document.getElementById('action-new').addEventListener('click', () => {
            [...objects].forEach(o => { activeObject = o; deleteActiveObject(); });
            objectCount = 1;
            closeMenus();
            showToast('New Project Created', 'success');
        });

        // Raycasting
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        
        container.addEventListener('pointerdown', (event) => {
            if(transformControl.dragging) return;
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(objects.filter(o => o.visible));

            if (intersects.length > 0) {
                if(activeObject !== intersects[0].object) selectObject(intersects[0].object);
            } else {
                selectObject(null);
            }
        });

        // Keyboard
        window.addEventListener('keydown', (e) => {
            if(e.target.matches('input')) return;
            switch(e.key.toLowerCase()) {
                case 't': document.querySelector('[data-mode="translate"]').click(); break;
                case 'r': document.querySelector('[data-mode="rotate"]').click(); break;
                case 's': document.querySelector('[data-mode="scale"]').click(); break;
                case 'delete': case 'backspace': deleteActiveObject(); break;
                case 'escape': selectObject(null); closeMenus(); break;
            }
        });

        // Color Palette
        const palette = document.getElementById('color-palette');
        const colors = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef', '#f43f5e', '#ffffff', '#a1a1aa', '#27272a'];
        colors.forEach(col => {
            const btn = document.createElement('button');
            btn.className = 'w-full aspect-square rounded-sm cursor-pointer hover:scale-110 transition-transform border border-white/10 hover:border-white/50';
            btn.style.backgroundColor = col;
            btn.addEventListener('click', () => {
                if(activeObject?.material) {
                    activeObject.material.color.set(col);
                    updateInspectorUI(activeObject);
                }
            });
            palette.appendChild(btn);
        });

        // Render Loop
        function animate() {
            requestAnimationFrame(animate);
            orbit.update();
            renderer.render(scene, camera);
            document.getElementById('poly-count').textContent = renderer.info.render.triangles + " TRIANGLES";
        }
        
        // Resize
        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });

        // Init
        addObject('cube');
        animate();
        document.querySelector('[data-mode="translate"]').click(); // Select translate by default
    
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
      

<div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<nav className="h-10 border-b border-white/[0.06] flex items-center justify-between px-3 bg-[#0a0a0a] z-[100] shrink-0 select-none relative">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2.5 mr-1 group cursor-pointer" onclick="showToast('Welcome to Neon Engine', 'info')">
<div className="w-5 h-5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-110">
<iconify-icon icon="solar:box-minimalistic-bold" width="12"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">Neon</span>
</div>
<div className="h-3 w-px bg-white/[0.08]"></div>

<div className="flex items-center gap-0.5" id="top-menu-bar">

<div className="relative">
<button className="menu-btn px-2.5 py-1 rounded hover:bg-white/[0.06] text-[11px] font-medium text-white/70 hover:text-white transition-all outline-none focus:bg-white/[0.08]" data-menu="file">File</button>
<div className="hidden absolute top-full left-0 mt-1 w-48 bg-[#18181b] rounded-lg border border-white/[0.08] shadow-2xl shadow-black/50 p-1 z-[100] menu-dropdown" id="menu-file">
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-indigo-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" id="action-new">
<span className="flex items-center gap-2"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:file-linear" width="14"></iconify-icon> New Project</span>
</button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-indigo-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" onclick="showToast('Import functionality pending', 'warning')">
<span className="flex items-center gap-2"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:import-linear" width="14"></iconify-icon> Import JSON</span>
<span className="text-[9px] opacity-30 font-mono group-hover:opacity-70">⌘I</span>
</button>
<div className="h-px bg-white/[0.08] my-1 mx-1"></div>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-indigo-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" onclick="showToast('Project saved successfully', 'success')">
<span className="flex items-center gap-2"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:diskette-linear" width="14"></iconify-icon> Save</span>
<span className="text-[9px] opacity-30 font-mono group-hover:opacity-70">⌘S</span>
</button>
</div>
</div>

<div className="relative">
<button className="menu-btn px-2.5 py-1 rounded hover:bg-white/[0.06] text-[11px] font-medium text-white/70 hover:text-white transition-all outline-none focus:bg-white/[0.08]" data-menu="edit">Edit</button>
<div className="hidden absolute top-full left-0 mt-1 w-48 bg-[#18181b] rounded-lg border border-white/[0.08] shadow-2xl shadow-black/50 p-1 z-[100] menu-dropdown" id="menu-edit">
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-indigo-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" onclick="showToast('Undo action', 'info')">
<span className="flex items-center gap-2"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:undo-left-linear" width="14"></iconify-icon> Undo</span>
<span className="text-[9px] opacity-30 font-mono group-hover:opacity-70">⌘Z</span>
</button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-indigo-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" onclick="showToast('Redo action', 'info')">
<span className="flex items-center gap-2"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:undo-right-linear" width="14"></iconify-icon> Redo</span>
<span className="text-[9px] opacity-30 font-mono group-hover:opacity-70">⌘Y</span>
</button>
<div className="h-px bg-white/[0.08] my-1 mx-1"></div>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-indigo-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" id="action-duplicate">
<span className="flex items-center gap-2"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:copy-linear" width="14"></iconify-icon> Duplicate</span>
<span className="text-[9px] opacity-30 font-mono group-hover:opacity-70">⌘D</span>
</button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-red-500/20 hover:text-red-200 text-[11px] text-red-300 flex items-center justify-between group transition-colors" id="action-delete">
<span className="flex items-center gap-2"><iconify-icon className="opacity-70 group-hover:opacity-100" icon="solar:trash-bin-trash-linear" width="14"></iconify-icon> Delete</span>
<span className="text-[9px] opacity-50 font-mono group-hover:opacity-80">Del</span>
</button>
</div>
</div>

<div className="relative">
<button className="menu-btn px-2.5 py-1 rounded hover:bg-white/[0.06] text-[11px] font-medium text-white/70 hover:text-white transition-all outline-none focus:bg-white/[0.08]" data-menu="view">View</button>
<div className="hidden absolute top-full left-0 mt-1 w-48 bg-[#18181b] rounded-lg border border-white/[0.08] shadow-2xl shadow-black/50 p-1 z-[100] menu-dropdown" id="menu-view">
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-indigo-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" id="action-toggle-grid">
<span className="flex items-center gap-2"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:grid-linear" width="14"></iconify-icon> Toggle Grid</span>
<iconify-icon className="text-white opacity-0 transition-opacity" icon="solar:check-circle-bold" id="check-grid" width="12"></iconify-icon>
</button>
<button className="w-full text-left px-2 py-1.5 rounded hover:bg-indigo-600 hover:text-white text-[11px] text-white/80 flex items-center justify-between group transition-colors" id="action-reset-camera">
<span className="flex items-center gap-2"><iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:videocamera-linear" width="14"></iconify-icon> Reset Camera</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
<div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></div> Online
            </span>
<button className="group flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-black hover:bg-indigo-50 text-[11px] font-semibold transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transform active:scale-95" onclick="showToast('Project Published!', 'success')">
<span>Publish</span>
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:upload-linear" width="12"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-1 flex overflow-hidden">

<aside className="w-64 border-r border-white/[0.06] bg-[#0a0a0a] flex flex-col shrink-0 z-10">
<div className="px-3 py-2 border-b border-white/[0.06] flex items-center justify-between min-h-[40px] bg-[#0c0c0c]">
<span className="text-[10px] font-semibold tracking-tight text-white/50 uppercase pl-1">Hierarchy</span>
<button className="text-white/40 hover:text-white transition-colors p-1 rounded hover:bg-white/10" id="add-btn-dropdown" onclick="showToast('Quick Add: Cube', 'info')">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-1.5 space-y-0.5" id="scene-graph">

</div>

<div className="p-3 border-t border-white/[0.06] bg-[#09090b]">
<div className="text-[10px] text-white/40 mb-2.5 font-semibold tracking-tight px-1">ADD PRIMITIVE</div>
<div className="grid grid-cols-4 gap-2">
<button className="add-primitive aspect-square rounded bg-[#151516] hover:bg-[#202022] hover:border-white/20 border border-white/[0.06] flex flex-col gap-1 items-center justify-center transition-all group active:scale-95" data-type="cube">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:box-linear" width="18"></iconify-icon>
</button>
<button className="add-primitive aspect-square rounded bg-[#151516] hover:bg-[#202022] hover:border-white/20 border border-white/[0.06] flex flex-col gap-1 items-center justify-center transition-all group active:scale-95" data-type="sphere">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:basketball-linear" width="18"></iconify-icon>
</button>
<button className="add-primitive aspect-square rounded bg-[#151516] hover:bg-[#202022] hover:border-white/20 border border-white/[0.06] flex flex-col gap-1 items-center justify-center transition-all group active:scale-95" data-type="plane">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:card-linear" width="18"></iconify-icon>
</button>
<button className="add-primitive aspect-square rounded bg-[#151516] hover:bg-[#202022] hover:border-white/20 border border-white/[0.06] flex flex-col gap-1 items-center justify-center transition-all group active:scale-95" data-type="torus">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:donut-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</aside>

<div className="flex-1 relative bg-black flex flex-col min-w-0 shadow-inner">

<div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 glass-panel rounded-full px-1.5 py-1.5 flex items-center gap-1 transition-all duration-300 hover:border-white/20">
<button className="tool-btn w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all active:scale-90" data-mode="translate" data-tooltip="Translate (T)">
<iconify-icon icon="solar:cursor-linear" width="16"></iconify-icon>
</button>
<button className="tool-btn w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all active:scale-90" data-mode="rotate" data-tooltip="Rotate (R)">
<iconify-icon icon="solar:refresh-circle-linear" width="16"></iconify-icon>
</button>
<button className="tool-btn w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all active:scale-90" data-mode="scale" data-tooltip="Scale (S)">
<iconify-icon icon="solar:maximize-square-linear" width="16"></iconify-icon>
</button>
<div className="w-px h-3 bg-white/10 mx-1"></div>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-indigo-400 bg-indigo-500/10 hover:text-indigo-300 hover:bg-indigo-500/20 transition-all active:scale-90" id="toggle-grid-btn">
<iconify-icon icon="solar:grid-linear" width="16"></iconify-icon>
</button>
</div>

<div className="flex-1 w-full h-full cursor-crosshair relative outline-none z-0" id="canvas-container">

<div className="absolute bottom-4 left-4 pointer-events-none flex flex-col gap-1 select-none z-10">
<span className="text-[10px] font-bold text-white/30 tracking-widest">PERSPECTIVE</span>
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
<span className="text-[10px] font-mono text-white/50" id="poly-count">0 TRIANGLES</span>
</div>
</div>
</div>
</div>

<aside className="w-[280px] border-l border-white/[0.06] bg-[#0a0a0a] flex flex-col overflow-y-auto shrink-0 z-10">

<div className="px-4 py-3 border-b border-white/[0.06] min-h-[50px] flex flex-col justify-center bg-[#0c0c0c]">
<input className="bg-transparent border-none p-0 text-sm font-semibold tracking-tight text-white placeholder-white/20 focus:ring-0 w-full truncate cursor-text hover:text-indigo-300 transition-colors" disabled="" id="inspector-title" placeholder="No Selection" spellcheck="false" type="text"/>
<div className="text-[10px] text-white/30 font-mono mt-0.5 flex items-center justify-between">
<span id="inspector-uuid">ID: -</span>
<span className="text-indigo-400/50 hidden" id="selection-indicator">• Selected</span>
</div>
</div>
<div className="transition-all duration-300 opacity-30 blur-[1px] pointer-events-none" id="properties-container">

<div className="p-4 border-b border-white/[0.06]">
<div className="flex items-center justify-between mb-3 group">
<span className="text-[11px] font-semibold text-white/40 group-hover:text-white/70 transition-colors">TRANSFORM</span>
<button className="text-white/20 hover:text-white transition-colors opacity-0 group-hover:opacity-100" id="reset-transform" title="Reset">
<iconify-icon icon="solar:restart-linear" width="12"></iconify-icon>
</button>
</div>
<div className="space-y-2.5">

<div className="grid grid-cols-[50px_1fr] gap-2 items-center group">
<span className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors">Position</span>
<div className="grid grid-cols-3 gap-1.5">
<div className="relative">
<span className="absolute left-1.5 top-1 text-[9px] text-red-500 font-bold opacity-60">X</span>
<input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 pl-4 text-[10px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right font-mono" id="pos-x" step="0.1" type="number"/>
</div>
<div className="relative">
<span className="absolute left-1.5 top-1 text-[9px] text-green-500 font-bold opacity-60">Y</span>
<input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 pl-4 text-[10px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right font-mono" id="pos-y" step="0.1" type="number"/>
</div>
<div className="relative">
<span className="absolute left-1.5 top-1 text-[9px] text-blue-500 font-bold opacity-60">Z</span>
<input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 pl-4 text-[10px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right font-mono" id="pos-z" step="0.1" type="number"/>
</div>
</div>
</div>

<div className="grid grid-cols-[50px_1fr] gap-2 items-center group">
<span className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors">Rotation</span>
<div className="grid grid-cols-3 gap-1.5">
<input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 text-[10px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right font-mono hover:bg-[#202023]" id="rot-x" step="15" type="number"/>
<input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 text-[10px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right font-mono hover:bg-[#202023]" id="rot-y" step="15" type="number"/>
<input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 text-[10px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right font-mono hover:bg-[#202023]" id="rot-z" step="15" type="number"/>
</div>
</div>

<div className="grid grid-cols-[50px_1fr] gap-2 items-center group">
<span className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors">Scale</span>
<div className="grid grid-cols-3 gap-1.5">
<input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 text-[10px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right font-mono hover:bg-[#202023]" id="scl-x" step="0.1" type="number"/>
<input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 text-[10px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right font-mono hover:bg-[#202023]" id="scl-y" step="0.1" type="number"/>
<input className="transform-input w-full bg-[#18181b] border border-white/[0.06] rounded px-1 py-1 text-[10px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right font-mono hover:bg-[#202023]" id="scl-z" step="0.1" type="number"/>
</div>
</div>
</div>
</div>

<div className="p-4 border-b border-white/[0.06]">
<div className="flex items-center justify-between mb-3">
<span className="text-[11px] font-semibold text-white/40">MATERIAL</span>
</div>
<div className="space-y-4">

<div>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-white/40">Albedo</span>
<div className="flex items-center gap-2 px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
<div className="w-2 h-2 rounded-full border border-white/20" id="color-preview"></div>
<span className="text-[10px] font-mono text-white/70" id="hex-display">#FFFFFF</span>
</div>
</div>
<div className="grid grid-cols-7 gap-1.5" id="color-palette">

</div>
</div>

<div className="space-y-3 pt-1">
<div className="grid grid-cols-[60px_1fr_30px] gap-2 items-center group">
<span className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors">Roughness</span>
<input className="accent-indigo-500" id="mat-roughness" max="1" min="0" step="0.01" type="range"/>
<span className="text-[9px] text-white/30 text-right font-mono" id="val-roughness">0.5</span>
</div>
<div className="grid grid-cols-[60px_1fr_30px] gap-2 items-center group">
<span className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors">Metalness</span>
<input className="accent-indigo-500" id="mat-metalness" max="1" min="0" step="0.01" type="range"/>
<span className="text-[9px] text-white/30 text-right font-mono" id="val-metalness">0.1</span>
</div>
</div>
</div>
</div>

<div className="p-4 mt-auto">
<button className="w-full py-1.5 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-semibold hover:bg-red-500/20 hover:text-red-300 transition-colors flex items-center justify-center gap-2 group" id="delete-btn">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
                        Delete Object
                    </button>
<div className="mt-4 pt-4 border-t border-white/[0.04] grid grid-cols-2 gap-2 text-[9px] text-white/20 font-mono">
<div><span className="text-white/40">T</span> Translate</div>
<div className="text-right"><span className="text-white/40">R</span> Rotate</div>
<div><span className="text-white/40">S</span> Scale</div>
<div className="text-right"><span className="text-white/40">Del</span> Delete</div>
</div>
</div>
</div>
</aside>
</main>



    </>
  );
}
