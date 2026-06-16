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
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

        // --- Configuration ---
        const config = {
            level: 2,         // 1 to 4 (Discrete grid sizes)
            floors: 12,       // 1 to 24
            intensity: 0.5,   // 0 to 1
            gap: 0.1,         // Vertical spacing
            blockSize: { w: 2, h: 1, d: 1 }, // 2:1 Aspect Ratio Block
        };

        // --- Init Icons ---
        lucide.createIcons({
            attrs: {
                class: "stroke-zinc-500", 
                "stroke-width": 1.5
            }
        });

        // --- Scene Setup ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#050505');
        scene.fog = new THREE.FogExp2('#050505', 0.035);

        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
        camera.position.set(20, 20, 20);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ 
            antialias: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: true 
        });
        renderer.setSize(600, 600);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        container.appendChild(renderer.domElement);

        // --- Post Processing ---
        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(600, 600),
            0.6, 0.8, 0.2
        );
        composer.addPass(bloomPass);

        // --- Materials ---
        const blockMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0.2,
            metalness: 0.1,
            transmission: 0.6,
            thickness: 2.0,
            ior: 1.5,
            emissive: 0xffffff,
            emissiveIntensity: config.intensity
        });

        // --- Geometry ---
        // Subtracting margin for visual separation on the grid
        const margin = 0.12; 
        
        // BoxGeometry(width, height, depth) -> (X, Y, Z)
        // We shrink X and Z to create the gap on the floor plane. 
        // Y (height) remains purely controlled by vertical logic.
        const geometry = new THREE.BoxGeometry(
            config.blockSize.w - margin, 
            config.blockSize.d, 
            config.blockSize.h - margin
        );

        let mesh = new THREE.InstancedMesh(geometry, blockMaterial, 2000);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        scene.add(mesh);

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 2);
        dirLight.position.set(10, 20, 5);
        scene.add(dirLight);
        
        const blueLight = new THREE.PointLight(0x4f46e5, 2, 20);
        blueLight.position.set(-10, 0, -10);
        scene.add(blueLight);

        // --- Tatami Logic ---
        function getTatamiLayout(level) {
            const layout = [];
            const N = (level + 1) * 2; 
            const offset = N / 2;

            for (let size = N; size >= 2; size -= 2) {
                const ringIndex = (N - size) / 2;
                const isEvenRing = ringIndex % 2 === 0;
                
                const start = ringIndex;
                const end = ringIndex + size;

                if (size === 2) {
                    if (isEvenRing) {
                        layout.push({ x: start + 1 - offset, z: start + 0.5 - offset, r: 0 }); 
                        layout.push({ x: start + 1 - offset, z: start + 1.5 - offset, r: 0 }); 
                    } else {
                        layout.push({ x: start + 0.5 - offset, z: start + 1 - offset, r: Math.PI / 2 }); 
                        layout.push({ x: start + 1.5 - offset, z: start + 1 - offset, r: Math.PI / 2 }); 
                    }
                } else {
                    if (isEvenRing) {
                        for (let x = start; x < end; x += 2) {
                            layout.push({ x: x + 1 - offset, z: start + 0.5 - offset, r: 0 });
                            layout.push({ x: x + 1 - offset, z: end - 0.5 - offset, r: 0 });
                        }
                        for (let z = start + 1; z < end - 1; z += 2) {
                            layout.push({ x: start + 0.5 - offset, z: z + 1 - offset, r: Math.PI / 2 });
                            layout.push({ x: end - 0.5 - offset, z: z + 1 - offset, r: Math.PI / 2 });
                        }
                    } else {
                        const tempLayout = [];
                         for (let x = start; x < end; x += 2) {
                            tempLayout.push({ x: x + 1 - offset, z: start + 0.5 - offset, r: 0 });
                            tempLayout.push({ x: x + 1 - offset, z: end - 0.5 - offset, r: 0 });
                        }
                        for (let z = start + 1; z < end - 1; z += 2) {
                            tempLayout.push({ x: start + 0.5 - offset, z: z + 1 - offset, r: Math.PI / 2 });
                            tempLayout.push({ x: end - 0.5 - offset, z: z + 1 - offset, r: Math.PI / 2 });
                        }
                        tempLayout.forEach(b => {
                            layout.push({ x: -b.z, z: b.x, r: b.r + Math.PI / 2 });
                        });
                    }
                }
            }
            return layout;
        }

        // --- Render Loop ---
        const dummy = new THREE.Object3D();

        function updateScene() {
            const floorLayout = getTatamiLayout(config.level);
            const blocksPerFloor = floorLayout.length;
            const totalBlocks = blocksPerFloor * config.floors;

            mesh.count = totalBlocks;

            let idx = 0;
            for (let f = 0; f < config.floors; f++) {
                const totalHeight = config.floors * (config.blockSize.h + config.gap);
                const yBase = (f * (config.blockSize.h + config.gap)) - (totalHeight / 2);

                for (let b = 0; b < blocksPerFloor; b++) {
                    const block = floorLayout[b];
                    dummy.position.set(block.x, yBase, block.z);
                    dummy.rotation.set(0, block.r, 0);
                    dummy.scale.set(1, 1, 1);
                    dummy.updateMatrix();
                    mesh.setMatrixAt(idx, dummy.matrix);
                    idx++;
                }
            }
            mesh.instanceMatrix.needsUpdate = true;
            mesh.material.emissiveIntensity = config.intensity;
        }

        // --- Event Listeners ---
        const elSize = document.getElementById('input-size');
        const dispSize = document.getElementById('val-size');
        
        const elFloors = document.getElementById('input-floors');
        const dispFloors = document.getElementById('val-floors');
        
        const elGlow = document.getElementById('input-glow');
        const dispGlow = document.getElementById('val-glow');
        
        const elGap = document.getElementById('input-gap');
        const dispGap = document.getElementById('val-gap');

        elSize.addEventListener('input', (e) => {
            config.level = parseInt(e.target.value);
            dispSize.innerText = `LVL ${config.level}`;
            updateScene();
        });

        elFloors.addEventListener('input', (e) => {
            config.floors = parseInt(e.target.value);
            dispFloors.innerText = config.floors;
            updateScene();
        });

        elGlow.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            config.intensity = val / 100 * 2.0;
            dispGlow.innerText = `${val}%`;
            mesh.material.emissiveIntensity = config.intensity;
        });

        elGap.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            config.gap = val / 200;
            dispGap.innerText = config.gap.toFixed(2);
            updateScene();
        });

        // Animation Loop
        const clock = new THREE.Clock();
        
        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();
            mesh.rotation.y = time * 0.1;
            composer.render();
        }

        window.addEventListener('resize', () => {});

        updateScene();
        animate();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="relative z-10 grid grid-cols-[240px_1fr_240px] gap-16 items-center w-full max-w-7xl px-12 fade-in">

<nav className="flex flex-col gap-12 text-left items-start h-full justify-center border-r border-zinc-900/50 pr-8">

<div className="mb-4 group cursor-pointer">
<div className="flex gap-1 items-center">
<div className="h-3 w-3 bg-zinc-200"></div>
<div className="h-3 w-3 bg-zinc-600"></div>
<div className="h-3 w-3 bg-zinc-800"></div>
</div>
<h1 className="text-zinc-100 font-semibold tracking-tighter text-lg mt-4 group-hover:text-white transition-colors">
                    NUHAUS
                </h1>
</div>

<ul className="flex flex-col gap-6 text-sm font-medium tracking-tight">
<li>
<a className="text-zinc-100 flex items-center gap-3 transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-100"></span>
                        Concept
                    </a>
</li>
<li>
<a className="hover:text-zinc-200 flex items-center gap-3 transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-transparent border border-zinc-600"></span>
                        Exhibition
                    </a>
</li>
<li>
<a className="hover:text-zinc-200 flex items-center gap-3 transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-transparent border border-zinc-600"></span>
                        Manifesto
                    </a>
</li>
<li>
<a className="hover:text-zinc-200 flex items-center gap-3 transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-transparent border border-zinc-600"></span>
                        Get In Touch
                    </a>
</li>
</ul>
<div className="mt-8 text-xs text-zinc-600 font-mono">
                BUILD v4.0.3<br/>
                TATAMI // LOGIC
            </div>
</nav>

<div className="relative w-full aspect-square flex items-center justify-center" id="canvas-container">

</div>

<aside className="flex flex-col gap-10 text-xs font-medium tracking-wide justify-center h-full border-l border-zinc-900/50 pl-8">

<div className="flex flex-col gap-3 group">
<div className="flex justify-between items-center text-zinc-500 group-hover:text-zinc-300 transition-colors">
<label className="uppercase flex items-center gap-2">
<i className="w-3 h-3" data-lucide="grid-3x3"></i> Layout Scale
                    </label>
<span className="font-mono text-zinc-400" id="val-size">LVL 2</span>
</div>
<input id="input-size" max="4" min="1" step="1" type="range" value="2"/>
<div className="flex justify-between px-0.5 mt-1">
<div className="w-0.5 h-1 bg-zinc-800"></div>
<div className="w-0.5 h-1 bg-zinc-800"></div>
<div className="w-0.5 h-1 bg-zinc-800"></div>
<div className="w-0.5 h-1 bg-zinc-800"></div>
</div>
</div>

<div className="flex flex-col gap-3 group">
<div className="flex justify-between items-center text-zinc-500 group-hover:text-zinc-300 transition-colors">
<label className="uppercase flex items-center gap-2">
<i className="w-3 h-3" data-lucide="layers"></i> Stack Height
                    </label>
<span className="font-mono text-zinc-400" id="val-floors">12</span>
</div>
<input id="input-floors" max="24" min="1" step="1" type="range" value="12"/>
</div>

<div className="flex flex-col gap-3 group">
<div className="flex justify-between items-center text-zinc-500 group-hover:text-zinc-300 transition-colors">
<label className="uppercase flex items-center gap-2">
<i className="w-3 h-3" data-lucide="sun"></i> Intensity
                    </label>
<span className="font-mono text-zinc-400" id="val-glow">50%</span>
</div>
<input id="input-glow" max="100" min="0" type="range" value="50"/>
</div>

<div className="flex flex-col gap-3 group">
<div className="flex justify-between items-center text-zinc-500 group-hover:text-zinc-300 transition-colors">
<label className="uppercase flex items-center gap-2">
<i className="w-3 h-3" data-lucide="align-justify"></i> Aperture
                    </label>
<span className="font-mono text-zinc-400" id="val-gap">0.1</span>
</div>
<input id="input-gap" max="100" min="0" type="range" value="10"/>
</div>
</aside>
</main>


    </>
  );
}
