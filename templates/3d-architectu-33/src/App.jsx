import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        import * as THREE from 'https://esm.sh/three@0.160.0';
        import { OrbitControls } from 'https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js';
        import { EffectComposer } from 'https://esm.sh/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js';
        import { RenderPass } from 'https://esm.sh/three@0.160.0/examples/jsm/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'https://esm.sh/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js';

        // --- Init Lucide Icons ---
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // --- Configuration State ---
        const config = {
            floors: 12,
            width: 8,
            depth: 8,
            blockSize: 1.0,
            glow: 0.8,
            gap: 0.05 // Gap between blocks relative to size
        };

        // --- DOM Elements ---
        const ui = {
            floors: { input: document.getElementById('input-floors'), label: document.getElementById('val-floors') },
            width: { input: document.getElementById('input-width'), label: document.getElementById('val-width') },
            depth: { input: document.getElementById('input-depth'), label: document.getElementById('val-depth') },
            scale: { input: document.getElementById('input-scale'), label: document.getElementById('val-scale') },
            glow: { input: document.getElementById('input-glow'), label: document.getElementById('val-glow') },
            reset: document.getElementById('btn-reset'),
            container: document.getElementById('canvas-container')
        };

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#050505');
        // Add subtle fog for depth
        scene.fog = new THREE.FogExp2(0x050505, 0.015);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(25, 25, 25);

        const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ReinhardToneMapping;
        ui.container.appendChild(renderer.domElement);

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
        dirLight.position.set(10, 20, 10);
        scene.add(dirLight);

        // Rim light for edge definition
        const backLight = new THREE.DirectionalLight(0xaaccff, 0.5);
        backLight.position.set(-10, 5, -10);
        scene.add(backLight);

        // --- Material (Milky Glass / Luminous Box) ---
        // MeshPhysicalMaterial handles the translucent "milky" look best
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0.15, // Smooth but not mirror
            transmission: 0.6, // Glass-like transparency
            thickness: 1.5, // Volume simulation
            clearcoat: 0.5,
            clearcoatRoughness: 0.1,
            emissive: 0xffffff,
            emissiveIntensity: config.glow * 0.5
        });

        // --- Instanced Geometry Setup ---
        // Using InstancedMesh for performance with thousands of cubes
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        // Beveling hack: we can't easily bevel standard geometry without more heavy geo, 
        // but the lighting + bloom softens edges.
        
        // Allocate max count (50 * 20 * 20 = 20,000)
        const maxCount = 20000;
        let mesh = new THREE.InstancedMesh(geometry, material, maxCount);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        scene.add(mesh);

        // Helper matrix
        const dummy = new THREE.Object3D();

        // --- Building Generator Function ---
        function updateBuilding() {
            let index = 0;
            const size = config.blockSize;
            const actualSize = size - config.gap; // create small gap between blocks
            
            // Calculate offsets to center the building
            const totalWidth = config.width * size;
            const totalDepth = config.depth * size;
            const offsetX = -totalWidth / 2 + size / 2;
            const offsetZ = -totalDepth / 2 + size / 2;

            // Generate stacks
            for (let y = 0; y < config.floors; y++) {
                for (let x = 0; x < config.width; x++) {
                    for (let z = 0; z < config.depth; z++) {
                        
                        dummy.scale.set(actualSize, actualSize, actualSize);
                        
                        dummy.position.set(
                            offsetX + x * size,
                            (y * size) + size/2, // Sit on floor 0
                            offsetZ + z * size
                        );

                        // Optional: Subtle randomization for "imperfect/organic" stacking
                        // dummy.position.x += (Math.random() - 0.5) * 0.02;
                        
                        dummy.updateMatrix();
                        mesh.setMatrixAt(index++, dummy.matrix);
                    }
                }
            }

            mesh.count = index;
            mesh.instanceMatrix.needsUpdate = true;
            
            // Update emissive based on glow slider
            mesh.material.emissiveIntensity = config.glow * 0.5; // Base scaling
        }

        // --- Post Processing (Bloom) ---
        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5, // strength
            0.4, // radius
            0.85 // threshold
        );
        // Tune bloom to match reference
        bloomPass.threshold = 0.2; // Start glowing sooner
        bloomPass.strength = config.glow; // Controlled by slider mostly
        bloomPass.radius = 0.5; // Soft dispersion
        composer.addPass(bloomPass);

        // --- Controls ---
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enablePan = false;
        controls.minDistance = 10;
        controls.maxDistance = 60;

        // --- Input Handling ---
        function handleInput(key, value) {
            config[key] = parseFloat(value);
            // Update UI label
            ui[key].label.innerText = config[key];
            
            // Special handling
            if (key === 'glow') {
                bloomPass.strength = config[key];
                mesh.material.emissiveIntensity = config[key] * 0.3; // tweak multiplier for balance
            }
            
            updateBuilding();
        }

        // Event Listeners
        ui.floors.input.addEventListener('input', (e) => handleInput('floors', e.target.value));
        ui.width.input.addEventListener('input', (e) => handleInput('width', e.target.value));
        ui.depth.input.addEventListener('input', (e) => handleInput('depth', e.target.value));
        ui.scale.input.addEventListener('input', (e) => handleInput('scale', e.target.value));
        ui.glow.input.addEventListener('input', (e) => handleInput('glow', e.target.value));

        ui.reset.addEventListener('click', () => {
            // Defaults
            ui.floors.input.value = 12; handleInput('floors', 12);
            ui.width.input.value = 8; handleInput('width', 8);
            ui.depth.input.value = 8; handleInput('depth', 8);
            ui.scale.input.value = 1.0; handleInput('scale', 1.0);
            ui.glow.input.value = 0.8; handleInput('glow', 0.8);
            
            // Reset Camera
            camera.position.set(25, 25, 25);
            controls.reset();
        });

        // Resize Handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        });

        // --- Animation Loop ---
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            
            // Subtle "breathing" or time-based movement could go here
            
            // Render via composer for bloom
            composer.render();
        }

        // Initial Generation
        updateBuilding();
        animate();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="" id="canvas-container"><canvas className="" data-engine="three.js r160" height="1900" style={{display: 'block', width: '1248px', height: '950px', touchAction: 'none'}} width="2496"></canvas><canvas data-engine="three.js r160" height="1900" style={{display: 'block', width: '1248px', height: '950px', touchAction: 'none'}} width="2496"></canvas><canvas data-engine="three.js r160" height="1900" style={{display: 'block', width: '1248px', height: '950px', touchAction: 'none'}} width="2496"></canvas><canvas data-engine="three.js r160" height="1900" style={{display: 'block', width: '1248px', height: '950px', touchAction: 'none'}} width="2496"></canvas><canvas data-engine="three.js r160" height="1900" style={{display: 'block', width: '1248px', height: '950px', touchAction: 'none'}} width="2496"></canvas></div>

<div className="ui-layer flex flex-col md:flex-row w-full h-full justify-between p-8 md:p-12">

<div className="ui-element flex flex-col md:w-1/4 space-y-12 items-start justify-center">

<div className="md:text-2xl text-xl font-semibold text-white/90 tracking-tighter" style={{}}>NUHAUS</div>

<nav className="flex flex-col text-sm font-normal text-white/60 space-y-4">
<a className="hover:text-white transition-colors duration-300 flex items-center gap-2" href="#">
                    Concept
                </a>
<a className="hover:text-white transition-colors duration-300 flex items-center gap-2" href="#">
                    Get In Touch
                </a>
<a className="hover:text-white transition-colors duration-300 flex items-center gap-2 mt-4" href="#">
</a>
</nav>
</div>

<div className="ui-element flex flex-col justify-center md:justify-center md:w-1/4 max-w-xs ml-auto mt-auto md:mt-0 space-y-8">

<div className="space-y-6 backdrop-blur-sm bg-black/20 p-6 rounded-xl border border-white/5">

<div className="flex items-center justify-between text-white/40 mb-2">
<span className="text-xs uppercase tracking-widest font-medium">Architecture</span>
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>

<div className="group">
<div className="flex justify-between text-xs font-medium text-white/70 mb-2">
<span>Floors</span>
<span id="val-floors">12</span>
</div>
<input id="input-floors" max="50" min="1" step="1" type="range" value="12"/>
</div>

<div className="group">
<div className="flex justify-between text-xs font-medium text-white/70 mb-2">
<span>Width</span>
<span id="val-width">8</span>
</div>
<input id="input-width" max="20" min="1" step="1" type="range" value="8"/>
</div>

<div className="group">
<div className="flex justify-between text-xs font-medium text-white/70 mb-2">
<span>Depth</span>
<span id="val-depth">8</span>
</div>
<input id="input-depth" max="20" min="1" step="1" type="range" value="8"/>
</div>

<div className="h-px w-full bg-white/10 my-4"></div>

<div className="flex items-center justify-between text-white/40 mb-2">
<span className="text-xs uppercase tracking-widest font-medium">Materiality</span>
<svg className="lucide lucide-sun w-4 h-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>

<div className="group">
<div className="flex justify-between text-xs font-medium text-white/70 mb-2">
<span>Block Scale</span>
<span id="val-scale">1.0</span>
</div>
<input id="input-scale" max="2.0" min="0.5" step="0.1" type="range" value="1.0"/>
</div>

<div className="group">
<div className="flex justify-between text-xs font-medium text-white/70 mb-2">
<span>Luminance</span>
<span id="val-glow">0.8</span>
</div>
<input id="input-glow" max="2.0" min="0" step="0.05" type="range" value="0.8"/>
</div>
</div>

<button className="text-xs text-white/30 hover:text-white transition-colors text-right w-full py-2" id="btn-reset">
                Reset Parameters
            </button>
</div>
</div>



    </>
  );
}
