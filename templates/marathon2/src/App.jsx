import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Navigation Logic ---
        let isMobileMenuOpen = false;

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('mobile-menu-icon');
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (isMobileMenuOpen) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                icon.setAttribute('icon', 'solar:close-linear');
                document.body.style.overflow = 'hidden'; 
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = ''; 
            }
        }

        function switchTab(event, tabId) {
            if (event) event.preventDefault();

            if (isMobileMenuOpen) toggleMobileMenu();
            
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex');
            });
            
            const targetPage = document.getElementById(tabId);
            if (targetPage) {
                targetPage.classList.remove('hidden');
                targetPage.classList.add('flex');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Initialize Viewer if opened
            if(tabId === 'page-viewer' && !viewerInitialized) {
                initViewer();
            }

            if (event && event.currentTarget) {
                const target = event.currentTarget;
                if (target.classList.contains('nav-link')) {
                    document.querySelectorAll('.nav-link').forEach(el => {
                        el.classList.remove('text-white', 'border-[#e0ff00]');
                        el.classList.add('text-zinc-400', 'border-transparent');
                    });
                    target.classList.remove('text-zinc-400', 'border-transparent');
                    target.classList.add('text-white', 'border-[#e0ff00]');
                } 
                else if (target.classList.contains('mobile-nav-link')) {
                    document.querySelectorAll('.mobile-nav-link').forEach(el => {
                        el.classList.remove('text-white');
                        el.classList.add('text-zinc-400');
                    });
                    target.classList.remove('text-zinc-400');
                    target.classList.add('text-white');
                }
                else {
                    document.querySelectorAll('.nav-link').forEach(el => {
                        if(el.getAttribute('onclick').includes(tabId)) {
                            el.classList.remove('text-zinc-400', 'border-transparent');
                            el.classList.add('text-white', 'border-[#e0ff00]');
                        } else {
                            el.classList.remove('text-white', 'border-[#e0ff00]');
                            el.classList.add('text-zinc-400', 'border-transparent');
                        }
                    });
                }
            }
        }

        // --- 3D Viewer Logic ---
        let vScene, vCamera, vRenderer, vControls, vMixer, vClock;
        let vModel;
        let vAnimations = [];
        let vCurrentAction = null;
        let viewerInitialized = false;

        function initViewer() {
            if(viewerInitialized) return;
            viewerInitialized = true;

            const container = document.getElementById('viewer-canvas-container');
            vScene = new THREE.Scene();

            vCamera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
            vCamera.position.set(0, 2, 5);

            vRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            vRenderer.setSize(container.clientWidth, container.clientHeight);
            vRenderer.setPixelRatio(window.devicePixelRatio);
            vRenderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(vRenderer.domElement);

            vControls = new THREE.OrbitControls(vCamera, vRenderer.domElement);
            vControls.enableDamping = true;
            vControls.dampingFactor = 0.05;

            // Lighting setup for optimal model viewing
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            vScene.add(ambientLight);

            const dirLight = new THREE.DirectionalLight(0xffffff, 1);
            dirLight.position.set(5, 10, 7);
            vScene.add(dirLight);

            const backLight = new THREE.DirectionalLight(0xe0ff00, 0.5);
            backLight.position.set(-5, 5, -7);
            vScene.add(backLight);

            // Subtle Grid
            const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
            vScene.add(gridHelper);

            vClock = new THREE.Clock();

            window.addEventListener('resize', onViewerResize);
            setupFileHandlers();
            animateViewer();
        }

        function onViewerResize() {
            const container = document.getElementById('viewer-canvas-container');
            if(!container || !vCamera) return;
            vCamera.aspect = container.clientWidth / container.clientHeight;
            vCamera.updateProjectionMatrix();
            vRenderer.setSize(container.clientWidth, container.clientHeight);
        }

        function animateViewer() {
            requestAnimationFrame(animateViewer);
            // Only render if viewer tab is active
            if(!document.getElementById('page-viewer').classList.contains('hidden')) {
                const delta = vClock.getDelta();
                if (vMixer) vMixer.update(delta);
                if (vControls) vControls.update();
                if (vRenderer && vScene && vCamera) vRenderer.render(vScene, vCamera);
            }
        }

        function setupFileHandlers() {
            const uploadInput = document.getElementById('model-upload');
            uploadInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (!file) return;

                const url = URL.createObjectURL(file);
                const extension = file.name.split('.').pop().toLowerCase();
                
                document.getElementById('file-name').textContent = file.name;
                document.getElementById('file-info').classList.remove('hidden');
                document.getElementById('file-info').classList.add('flex');
                
                const loadingUI = document.getElementById('viewer-loading');
                loadingUI.classList.remove('hidden');
                loadingUI.classList.add('flex');
                document.getElementById('anim-controls').classList.add('hidden');

                // Cleanup previous model
                if (vModel) {
                    vScene.remove(vModel);
                    vModel.traverse((child) => {
                        if (child.isMesh) {
                            if(child.geometry) child.geometry.dispose();
                            if (child.material) {
                                if(Array.isArray(child.material)) child.material.forEach(m => m.dispose());
                                else child.material.dispose();
                            }
                        }
                    });
                }
                if (vMixer) {
                    vMixer.stopAllAction();
                    vMixer = null;
                }
                vAnimations = [];
                const select = document.getElementById('anim-select');
                select.innerHTML = '';

                // Load based on extension
                if (extension === 'glb' || extension === 'gltf') {
                    const loader = new THREE.GLTFLoader();
                    loader.load(url, (gltf) => {
                        vModel = gltf.scene;
                        setupLoadedModel(vModel, gltf.animations);
                    }, undefined, (err) => {
                        console.error(err);
                        loadingUI.innerHTML = '<span class="text-red-500">Error loading file</span>';
                    });
                } else if (extension === 'fbx') {
                    const loader = new THREE.FBXLoader();
                    loader.load(url, (fbx) => {
                        vModel = fbx;
                        setupLoadedModel(vModel, fbx.animations);
                    }, undefined, (err) => {
                        console.error(err);
                        loadingUI.innerHTML = '<span class="text-red-500">Error loading file</span>';
                    });
                } else {
                    loadingUI.innerHTML = '<span class="text-red-500">Unsupported format</span>';
                }
            });
        }

        function setupLoadedModel(model, animations) {
            vScene.add(model);
            
            // Auto scale and center
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 5 / maxDim; // Fit within 5 units
            model.scale.set(scale, scale, scale);
            
            // Recompute box after scaling to center properly
            const boxScaled = new THREE.Box3().setFromObject(model);
            const centerScaled = boxScaled.getCenter(new THREE.Vector3());
            model.position.sub(centerScaled);
            
            // Adjust camera to fit
            vCamera.position.set(0, 2, 7);
            vControls.target.set(0, 0, 0);
            vControls.update();

            // Handle Animations
            if (animations && animations.length > 0) {
                vMixer = new THREE.AnimationMixer(model);
                vAnimations = animations;
                
                const select = document.getElementById('anim-select');
                animations.forEach((clip, index) => {
                    const option = document.createElement('option');
                    option.value = index;
                    // FBX clips sometimes have complex names like "Take 001", clean it up or use index
                    option.text = clip.name && clip.name !== 'mixamo.com' ? clip.name : `Sequence ${index + 1}`;
                    select.appendChild(option);
                });

                document.getElementById('anim-controls').classList.remove('hidden');
                document.getElementById('anim-controls').classList.add('flex');
                
                select.onchange = (e) => playAnimation(e.target.value);
                playAnimation(0);

                const btnPlayPause = document.getElementById('btn-play-pause');
                btnPlayPause.onclick = () => {
                    if(vCurrentAction) {
                        vCurrentAction.paused = !vCurrentAction.paused;
                        btnPlayPause.innerHTML = `<iconify-icon icon="solar:${vCurrentAction.paused ? 'play' : 'pause'}-linear" width="18" height="18"></iconify-icon>`;
                        
                        if(vCurrentAction.paused) {
                            btnPlayPause.classList.remove('bg-[#e0ff00]', 'text-black');
                            btnPlayPause.classList.add('bg-zinc-800', 'text-[#e0ff00]');
                        } else {
                            btnPlayPause.classList.add('bg-[#e0ff00]', 'text-black');
                            btnPlayPause.classList.remove('bg-zinc-800', 'text-[#e0ff00]');
                        }
                    }
                };
            }

            const loadingUI = document.getElementById('viewer-loading');
            loadingUI.classList.remove('flex');
            loadingUI.classList.add('hidden');
        }

        function playAnimation(index) {
            if (vCurrentAction) {
                vCurrentAction.stop();
            }
            const clip = vAnimations[index];
            vCurrentAction = vMixer.clipAction(clip);
            vCurrentAction.play();
            vCurrentAction.paused = false;
            
            const btnPlayPause = document.getElementById('btn-play-pause');
            btnPlayPause.innerHTML = `<iconify-icon icon="solar:pause-linear" width="18" height="18"></iconify-icon>`;
            btnPlayPause.classList.add('bg-[#e0ff00]', 'text-black');
            btnPlayPause.classList.remove('bg-zinc-800', 'text-[#e0ff00]');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #3f3f46 0%, transparent 50%)'}}></div>
<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-40">
<iframe allowtransparency="true" className="w-full h-full object-cover border-none" srcdoc="&lt;!DOCTYPE html&gt;
&lt;html lang='en'&gt;
&lt;head&gt;
&lt;meta charset='UTF-8'&gt;
&lt;meta name='viewport' content='width=device-width, initial-scale=1.0'&gt;
&lt;style&gt;
  body { margin: 0; overflow: hidden; background-color: transparent; }
  #canvas-container { width: 100vw; height: 100vh; position: absolute; top: 0; left: 0; z-index: 1; }
&lt;/style&gt;
&lt;script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'&gt;&lt;/script&gt;
&lt;script src='https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js'&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id='canvas-container'&gt;&lt;/div&gt;
  &lt;script&gt;
    let scene, camera, renderer, controls, currentModel;
    init();
    animate();
    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 20);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container').appendChild(renderer.domElement);
        
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.0;
        controls.enableZoom = false;
        controls.enablePan = false;

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
        hemiLight.position.set(0, 200, 0);
        scene.add(hemiLight);
        
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(0, 20, 10);
        scene.add(dirLight);
        
        const backLight = new THREE.DirectionalLight(0xe0ff00, 0.6);
        backLight.position.set(-10, 10, -10);
        scene.add(backLight);

        const geo = new THREE.TorusKnotGeometry(3, 0.8, 128, 32);
        const mat = new THREE.MeshStandardMaterial({ 
            color: 0x222222, 
            roughness: 0.3, 
            metalness: 0.8
        });
        currentModel = new THREE.Mesh(geo, mat);
        
        const wireframeMat = new THREE.MeshBasicMaterial({ color: 0xe0ff00, wireframe: true, transparent: true, opacity: 0.15 });
        const wireframe = new THREE.Mesh(geo, wireframeMat);
        currentModel.add(wireframe);

        scene.add(currentModel);
        window.addEventListener('resize', onWindowResize);
    }
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;"></iframe>
</div>

<header className="fixed top-0 w-full z-50 flex items-center justify-between p-6 md:px-12 backdrop-blur-md bg-black/60 border-b border-white/10">
<div className="flex items-center gap-8">
<button className="text-xl md:text-2xl font-semibold tracking-tighter uppercase text-white hover:text-[#e0ff00] transition-colors relative z-50" onclick="switchTab(event, 'page-home')">
                M A R A T H O N
            </button>
<nav className="hidden md:flex items-center gap-6">
<button className="nav-link text-sm font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors pb-1 border-b-2 border-transparent" onclick="switchTab(event, 'page-game')">Game</button>
<button className="nav-link text-sm font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors pb-1 border-b-2 border-transparent" onclick="switchTab(event, 'page-lore')">Lore</button>
<button className="nav-link text-sm font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors pb-1 border-b-2 border-transparent" onclick="switchTab(event, 'page-viewer')">Viewer</button>
<button className="nav-link text-sm font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors pb-1 border-b-2 border-transparent" onclick="switchTab(event, 'page-community')">Community</button>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center justify-center bg-[#e0ff00] text-black px-6 py-2 text-sm font-semibold uppercase tracking-widest hover:bg-white transition-colors relative z-50" href="#" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
                Pre-Order
            </a>
<button className="md:hidden text-white hover:text-[#e0ff00] transition-colors flex items-center justify-center relative z-50" onclick="toggleMobileMenu()">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" id="mobile-menu-icon" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex-col items-center justify-center gap-8 hidden" id="mobile-menu">
<button className="mobile-nav-link text-2xl font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" onclick="switchTab(event, 'page-home')">Home</button>
<button className="mobile-nav-link text-2xl font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" onclick="switchTab(event, 'page-game')">Game</button>
<button className="mobile-nav-link text-2xl font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" onclick="switchTab(event, 'page-lore')">Lore</button>
<button className="mobile-nav-link text-2xl font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" onclick="switchTab(event, 'page-viewer')">Viewer</button>
<button className="mobile-nav-link text-2xl font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" onclick="switchTab(event, 'page-community')">Community</button>
<a className="mt-8 flex items-center justify-center bg-[#e0ff00] text-black px-10 py-4 text-lg font-semibold uppercase tracking-widest hover:bg-white transition-colors" href="#" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
            Pre-Order
        </a>
</div>

<div className="relative z-10 flex-grow flex flex-col pt-24 md:pt-0">

<main className="page-section flex flex-col w-full h-full" id="page-home">

<section className="min-h-[90vh] flex flex-col border-white/10 border-b pr-6 pl-6 relative items-center justify-center">
<div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-[#e0ff00] animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-300">Transmission Active</span>
</div>
<h1 className="md:text-8xl lg:text-9xl uppercase leading-none bg-clip-text text-6xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-white to-zinc-600 mb-6 drop-shadow-2xl">
                        Become<br/>A Runner
                    </h1>
<p className="text-base md:text-lg text-zinc-300 max-w-2xl font-light tracking-wide mb-10 drop-shadow-lg">
                        Enter the mysterious zone of Tau Ceti IV. Extract artifacts, outsmart rivals, and survive the unknown in a relentless PvPvE extraction shooter.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 items-center">
<a className="group relative flex items-center justify-center bg-black/50 backdrop-blur-sm text-[#e0ff00] border border-[#e0ff00] px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#e0ff00] hover:text-black transition-all duration-300" href="#" style={{clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'}}>
<span className="relative z-10 flex items-center gap-2">
                                Watch Trailer
                                <iconify-icon className="group-hover:animate-ping" height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</span>
</a>
<button className="text-sm font-medium text-zinc-300 hover:text-white uppercase tracking-wider transition-colors border-b border-transparent hover:border-white pb-1 mt-4 sm:mt-0 drop-shadow-lg" onclick="switchTab(event, 'page-game')">
                            Learn More
                        </button>
</div>
</div>

<div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-zinc-500 hidden md:block z-10"></div>
<div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-zinc-500 hidden md:block z-10"></div>
<div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-zinc-500 hidden md:block z-10"></div>
<div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-zinc-500 hidden md:block z-10"></div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 relative z-10 bg-black/40 backdrop-blur-sm">
<div className="p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-zinc-950/50">
<span className="text-[#e0ff00] text-sm font-semibold uppercase tracking-widest mb-4 block">01 // Extraction</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight uppercase mb-6 leading-tight">
                        Risk Everything.
                    </h2>
<p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
                        Every drop is a gamble. Secure alien artifacts and valuable tech, but remember: if you fall in the zone, you lose it all. The stakes have never been higher.
                    </p>
<button className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#e0ff00] uppercase tracking-wider transition-colors w-fit group" onclick="switchTab(event, 'page-game')">
                        View Arsenal
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="relative aspect-square lg:aspect-auto bg-zinc-900/50 group overflow-hidden flex items-center justify-center p-12 backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-transparent z-10"></div>

<div className="relative z-20 w-64 h-64 border border-[#e0ff00]/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
<div className="w-48 h-48 border border-[#e0ff00]/50 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute w-2 h-2 bg-[#e0ff00] top-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_#e0ff00]"></div>
<div className="absolute w-2 h-2 bg-[#e0ff00] bottom-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_#e0ff00]"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center bg-[#e0ff00] text-black relative z-10">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter uppercase leading-none mb-8">
                    Fame. Infamy.<br/>Survival.
                </h2>
<button className="bg-black text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-zinc-900 transition-colors flex items-center gap-2 group" onclick="switchTab(event, 'page-community')" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
                    Join the Network
                    <iconify-icon height="18" icon="solar:user-plus-linear" width="18"></iconify-icon>
</button>
</section>
</main>

<main className="page-section hidden flex-col w-full min-h-screen pt-12 md:pt-24 px-6 md:px-12 pb-24 relative z-10" id="page-game">
<div className="max-w-7xl mx-auto w-full bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
<div className="mb-16">
<span className="text-[#e0ff00] text-sm font-semibold uppercase tracking-widest mb-4 block">System Overview</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                        Mechanics
                    </h1>
<p className="text-base text-zinc-300 font-light max-w-2xl leading-relaxed">
                        Customize your runner. Upgrade your cybernetics. Choose your loadout carefully. Your survival on Tau Ceti IV depends on your preparation and execution.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-white/10 bg-zinc-950/80 p-8 hover:border-[#e0ff00]/50 transition-colors group backdrop-blur-md">
<div className="w-12 h-12 border border-zinc-700 rounded-sm flex items-center justify-center mb-8 text-zinc-400 group-hover:text-[#e0ff00] group-hover:border-[#e0ff00] transition-colors">
<iconify-icon height="24" icon="solar:shield-cross-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase mb-4">Cybernetics</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                            Augment your physical capabilities. Trade humanity for survival. Enhance speed, resilience, or sensory perception to gain an edge in the zone.
                        </p>
<div className="w-full bg-zinc-900 h-1 mb-2">
<div className="bg-[#e0ff00] h-full w-[75%]"></div>
</div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">System Load: 75%</span>
</div>

<div className="border border-white/10 bg-zinc-950/80 p-8 hover:border-[#e0ff00]/50 transition-colors group backdrop-blur-md">
<div className="w-12 h-12 border border-zinc-700 rounded-sm flex items-center justify-center mb-8 text-zinc-400 group-hover:text-[#e0ff00] group-hover:border-[#e0ff00] transition-colors">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase mb-4">Arsenal</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                            From precision energy rifles to brutal kinetic sidearms. Mod your weapons with alien tech recovered during extractions to create devastating combos.
                        </p>
<div className="w-full bg-zinc-900 h-1 mb-2">
<div className="bg-white h-full w-[40%]"></div>
</div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Mod Capacity: 40%</span>
</div>

<div className="border border-white/10 bg-zinc-950/80 p-8 hover:border-[#e0ff00]/50 transition-colors group backdrop-blur-md">
<div className="w-12 h-12 border border-zinc-700 rounded-sm flex items-center justify-center mb-8 text-zinc-400 group-hover:text-[#e0ff00] group-hover:border-[#e0ff00] transition-colors">
<iconify-icon height="24" icon="solar:radar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase mb-4">Navigation</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                            The map is constantly shifting. Use your localized radar to track anomalies, avoid automated defenses, and pinpoint extraction zones.
                        </p>
<div className="w-full bg-zinc-900 h-1 mb-2">
<div className="bg-zinc-500 h-full w-[90%] flex justify-end">
<span className="w-2 h-2 bg-[#e0ff00] rounded-full -mt-0.5 animate-pulse"></span>
</div>
</div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Signal Strength: Optimal</span>
</div>
</div>
</div>
</main>

<main className="page-section hidden flex-col w-full min-h-screen pt-12 md:pt-24 px-6 md:px-12 pb-24 relative z-10" id="page-lore">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5">

<div className="lg:col-span-4 flex flex-col">
<span className="text-[#e0ff00] text-sm font-semibold uppercase tracking-widest mb-4 block">Archive Directory</span>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase mb-8 text-white border-b border-white/10 pb-6">
                        Data Logs
                    </h1>
<div className="flex flex-col gap-2">
<button className="text-left px-4 py-3 bg-white/10 border-l-2 border-[#e0ff00] text-sm font-medium uppercase tracking-wider text-white transition-colors flex justify-between items-center">
<span>01 // Tau Ceti IV</span>
<span className="text-xs text-zinc-400">Unlocked</span>
</button>
<button className="text-left px-4 py-3 hover:bg-white/10 border-l-2 border-transparent hover:border-zinc-500 text-sm font-medium uppercase tracking-wider text-zinc-400 transition-colors flex justify-between items-center">
<span>02 // The Ghost Ship</span>
<span className="text-xs text-zinc-500">Decrypted</span>
</button>
<button className="text-left px-4 py-3 hover:bg-white/10 border-l-2 border-transparent hover:border-zinc-500 text-sm font-medium uppercase tracking-wider text-zinc-400 transition-colors flex justify-between items-center">
<span>03 // Origin of Artifacts</span>
<span className="text-xs text-zinc-500">Decrypted</span>
</button>
<button className="text-left px-4 py-3 opacity-50 border-l-2 border-transparent text-sm font-medium uppercase tracking-wider text-zinc-500 flex justify-between items-center cursor-not-allowed">
<span>04 // ███████</span>
<iconify-icon height="16" icon="solar:lock-password-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-8">
<div className="border border-white/10 bg-zinc-950/80 p-6 md:p-10 font-mono text-sm leading-relaxed h-full relative overflow-hidden group backdrop-blur-md">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e0ff00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8 text-zinc-400 text-xs uppercase tracking-widest border-b border-white/5 pb-4">
<span>Source: Orbital Hub</span>
<span className="hidden sm:inline">•</span>
<span>Classification: Level 2</span>
<span className="sm:ml-auto flex items-center gap-2 mt-2 sm:mt-0">
                                Status: Active <span className="w-2 h-2 bg-[#e0ff00] rounded-full animate-pulse"></span>
</span>
</div>
<h2 className="text-2xl font-semibold tracking-tight uppercase text-white mb-6 font-['Space_Grotesk']">Tau Ceti IV: The Abandoned Colony</h2>
<div className="text-zinc-300 space-y-6">
<p>
                                Initial scans indicated a thriving colony. Thirty thousand souls, cutting-edge terraforming engines, a beacon of human expansion. When the first recon teams dropped, they found silence.
                            </p>
<p>
                                The infrastructure is intact. Coffee mugs left on desks, automated transport networks still running on phantom schedules. But the colonists are gone. Vanished.
                            </p>
<p className="border-l border-[#e0ff00] pl-4 text-zinc-200">
<span className="text-[#e0ff00]">&gt;</span> WARNING: Anomalous energy signatures detected in Sector 4.
                            </p>
<p>
                                Now, the zone is flooded with Runners. Mercenaries, scavengers, and corporate operatives diving into the ghost town to retrieve alien artifacts left behind by whatever—or whoever—cleared the colony. It's not a rescue mission anymore. It's a gold rush.
                            </p>
<div className="pt-4 flex items-center text-[#e0ff00]">
<span>Awaiting input</span>
<span className="w-2 h-4 bg-[#e0ff00] ml-1 animate-[pulse_1s_step-end_infinite]"></span>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section hidden flex-col w-full h-[calc(100vh-6rem)] relative z-20 overflow-hidden md:mt-24 mt-20" id="page-viewer">

<div className="absolute inset-0 z-0 bg-[#0a0a0a] border-t border-b border-white/5 shadow-inner" id="viewer-canvas-container"></div>

<div className="absolute top-6 left-6 md:left-12 z-10 bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-6 w-80 max-w-[calc(100vw-3rem)] rounded shadow-2xl flex flex-col gap-4">
<div>
<span className="text-[#e0ff00] text-xs font-semibold uppercase tracking-widest mb-1 block">Asset Inspection</span>
<h2 className="text-xl font-semibold tracking-tight uppercase text-white">3D Viewer</h2>
</div>

<label className="cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 border-dashed rounded flex flex-col items-center justify-center py-8 transition-colors group">
<div className="w-10 h-10 rounded-full bg-black/50 border border-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#e0ff00]" height="20" icon="solar:upload-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-white uppercase tracking-wider font-medium">Select Model</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">.GLB, .GLTF, .FBX</span>
<input accept=".glb,.gltf,.fbx" className="hidden" id="model-upload" type="file"/>
</label>

<div className="text-xs text-zinc-400 hidden flex-col gap-1 bg-black/40 p-3 rounded border border-white/5" id="file-info">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" height="14" icon="solar:document-linear" width="14"></iconify-icon>
<span className="uppercase tracking-wider truncate" id="file-name">filename.glb</span>
</div>
</div>

<div className="hidden items-center justify-center gap-2 text-[#e0ff00] text-xs uppercase tracking-widest py-2 bg-black/40 rounded border border-[#e0ff00]/20" id="viewer-loading">
<iconify-icon className="animate-spin" height="16" icon="solar:refresh-linear" width="16"></iconify-icon>
                    Processing Asset...
                </div>

<div className="hidden flex-col gap-3 pt-4 border-t border-white/10" id="anim-controls">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-wider text-zinc-400">Timeline</span>
<button className="w-8 h-8 rounded bg-[#e0ff00] text-black flex items-center justify-center hover:bg-white transition-colors shadow-[0_0_10px_rgba(224,255,0,0.2)]" id="btn-play-pause">
<iconify-icon height="18" icon="solar:pause-linear" width="18"></iconify-icon>
</button>
</div>
<div className="relative">
<select className="w-full bg-black border border-white/10 text-xs text-white p-3 pr-8 outline-none focus:border-[#e0ff00] rounded appearance-none cursor-pointer uppercase tracking-wider transition-colors" id="anim-select">

</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 md:right-12 z-10 flex gap-4 text-[10px] text-zinc-500 uppercase tracking-widest bg-black/60 backdrop-blur-md px-4 py-2 rounded border border-white/5" id="viewer-instructions">
<span className="flex items-center gap-1"><iconify-icon height="14" icon="solar:mouse-left-button-linear" width="14"></iconify-icon> Rotate</span>
<span className="flex items-center gap-1"><iconify-icon height="14" icon="solar:mouse-right-button-linear" width="14"></iconify-icon> Pan</span>
<span className="flex items-center gap-1"><iconify-icon height="14" icon="solar:mouse-circle-linear" width="14"></iconify-icon> Zoom</span>
</div>
</main>

<main className="page-section hidden flex-col w-full min-h-screen pt-12 md:pt-24 px-6 md:px-12 pb-24 relative z-10" id="page-community">
<div className="max-w-7xl mx-auto w-full flex flex-col items-center bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
<div className="text-center mb-16">
<span className="text-[#e0ff00] text-sm font-semibold uppercase tracking-widest mb-4 block">Global Network</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase mb-6">
                        The Runner Hub
                    </h1>
<p className="text-base text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Track top performers, join factions, and stay updated with the latest dispatches from the orbital command.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

<div className="flex flex-col overflow-x-auto">
<h3 className="text-lg font-semibold tracking-tight uppercase text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-[#e0ff00]" height="20" icon="solar:cup-star-linear" width="20"></iconify-icon>
                            Extraction Leaders
                        </h3>
<div className="border border-white/10 bg-zinc-950/80 backdrop-blur-md rounded-sm divide-y divide-white/5 min-w-[500px]">

<div className="grid grid-cols-12 gap-4 p-4 text-xs font-semibold text-zinc-400 uppercase tracking-widest bg-white/5">
<div className="col-span-2">Rank</div>
<div className="col-span-6">Callsign</div>
<div className="col-span-4 text-right">Value Extracted</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center text-sm font-medium hover:bg-white/10 transition-colors">
<div className="col-span-2 text-[#e0ff00]">01</div>
<div className="col-span-6 text-white flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-800 rounded-sm border border-zinc-700 shrink-0"></div>
<span className="truncate">VOID_WALKER</span>
</div>
<div className="col-span-4 text-right text-zinc-400">9,420,100c</div>
</div>
<div className="grid grid-cols-12 gap-4 p-4 items-center text-sm font-medium hover:bg-white/10 transition-colors">
<div className="col-span-2 text-zinc-300">02</div>
<div className="col-span-6 text-white flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-800 rounded-sm border border-zinc-700 shrink-0"></div>
<span className="truncate">SILENT_ECHO</span>
</div>
<div className="col-span-4 text-right text-zinc-400">8,104,500c</div>
</div>
<div className="grid grid-cols-12 gap-4 p-4 items-center text-sm font-medium hover:bg-white/10 transition-colors">
<div className="col-span-2 text-zinc-400">03</div>
<div className="col-span-6 text-white flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-800 rounded-sm border border-zinc-700 shrink-0"></div>
<span className="truncate">JAX_REBORN</span>
</div>
<div className="col-span-4 text-right text-zinc-400">7,950,000c</div>
</div>
<div className="grid grid-cols-12 gap-4 p-4 items-center text-sm font-medium hover:bg-white/10 transition-colors">
<div className="col-span-2 text-zinc-500">04</div>
<div className="col-span-6 text-white flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-800 rounded-sm border border-zinc-700 shrink-0"></div>
<span className="truncate">NEXUS_PRIME</span>
</div>
<div className="col-span-4 text-right text-zinc-400">7,120,300c</div>
</div>
</div>
<button className="mt-4 text-xs text-[#e0ff00] uppercase tracking-widest font-semibold hover:text-white transition-colors self-start drop-shadow-lg">View Full Rankings -&gt;</button>
</div>

<div className="flex flex-col">
<h3 className="text-lg font-semibold tracking-tight uppercase text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-[#e0ff00]" height="20" icon="solar:rss-linear" width="20"></iconify-icon>
                            Command Dispatches
                        </h3>
<div className="flex flex-col gap-4">

<a className="group block border border-white/10 bg-zinc-950/80 backdrop-blur-md p-5 hover:border-zinc-500 transition-colors" href="#">
<span className="text-xs text-[#e0ff00] font-medium uppercase tracking-widest mb-2 block">Patch Notes // V1.2.4</span>
<h4 className="text-lg font-semibold tracking-tight text-white mb-2 group-hover:text-[#e0ff00] transition-colors">Weapon Balancing &amp; New Zones</h4>
<p className="text-sm text-zinc-400 font-light line-clamp-2">Adjustments to kinetic rifle falloff damage, and opening of the Sector 7 Hydro-Facilities for exploration.</p>
</a>

<a className="group block border border-white/10 bg-zinc-950/80 backdrop-blur-md p-5 hover:border-zinc-500 transition-colors" href="#">
<span className="text-xs text-zinc-400 font-medium uppercase tracking-widest mb-2 block">Community Event</span>
<h4 className="text-lg font-semibold tracking-tight text-white mb-2 group-hover:text-[#e0ff00] transition-colors">The Artifact Rush</h4>
<p className="text-sm text-zinc-400 font-light line-clamp-2">Double extraction value for all alien tech recovered this weekend. Group up and secure the bag.</p>
</a>
</div>
</div>
</div>
</div>
</main>
</div>

<footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8 px-6 md:px-12 relative z-10 mt-auto">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<button className="text-2xl font-semibold tracking-tighter uppercase text-white mb-6 block text-left" onclick="switchTab(event, 'page-home')">
                    M A R A T H O N
                </button>
<p className="text-xs text-zinc-500 font-light max-w-sm leading-relaxed mb-6">
                    A sci-fi PvPvE extraction shooter from Bungie. Available on PS5, Xbox Series X|S, and PC.
                </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-[#e0ff00] transition-colors" href="#"><iconify-icon height="24" icon="solar:scooter-linear" width="24"></iconify-icon></a>
<a className="text-zinc-500 hover:text-[#e0ff00] transition-colors" href="#"><iconify-icon height="24" icon="solar:tv-linear" width="24"></iconify-icon></a>
<a className="text-zinc-500 hover:text-[#e0ff00] transition-colors" href="#"><iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-2">Intel</span>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">News</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Media</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Forums</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-2">Legal</span>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Cookie Policy</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-zinc-600 font-light">
<p>© 2024 Bungie, Inc. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<iconify-icon height="16" icon="solar:global-linear" width="16"></iconify-icon>
<span className="uppercase tracking-wider">English (US)</span>
</div>
</div>
</footer>



    </>
  );
}
