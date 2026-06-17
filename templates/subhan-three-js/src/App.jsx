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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Configuration & State ---
        const CONFIG = {
            particleCount: 15000,
            particleSize: 0.12,
            baseSpeed: 0.05,
            morphSpeed: 0.04,
            interactionRadius: 2.5,
            interactionForce: 2.0
        };

        const state = {
            currentShape: 'sphere',
            hue: 200,
            mouse: new THREE.Vector2(-999, -999), // Normalized device coordinates
            rayPoint: new THREE.Vector3(0, 0, 0), // 3D intersection point
            isInteracting: false,
            cameraActive: false
        };

        // --- Three.js Setup ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505);
        scene.fog = new THREE.FogExp2(0x050505, 0.035);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 8;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // --- Particles System ---
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(CONFIG.particleCount * 3);
        const targetPositions = new Float32Array(CONFIG.particleCount * 3);
        const originalPositions = new Float32Array(CONFIG.particleCount * 3); // To remember shape
        const colors = new Float32Array(CONFIG.particleCount * 3);
        const sizes = new Float32Array(CONFIG.particleCount);

        const colorObj = new THREE.Color();

        // Initialize Particles
        for (let i = 0; i < CONFIG.particleCount; i++) {
            // Initial Random Sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 4 * Math.cbrt(Math.random());

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            
            targetPositions[i * 3] = x;
            targetPositions[i * 3 + 1] = y;
            targetPositions[i * 3 + 2] = z;

            sizes[i] = Math.random();
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Custom Shader Material for better control
        const vertexShader = `
            attribute float size;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `;

        const fragmentShader = `
            varying vec3 vColor;
            void main() {
                float r = distance(gl_PointCoord, vec2(0.5));
                if (r > 0.5) discard;
                float alpha = 1.0 - smoothstep(0.3, 0.5, r);
                gl_FragColor = vec4(vColor, alpha);
            }
        `;

        const material = new THREE.ShaderMaterial({
            uniforms: {},
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const particleSystem = new THREE.Points(geometry, material);
        scene.add(particleSystem);

        // --- Shape Generators ---
        function getShapePosition(type, i, total) {
            const idx = i / total;
            let x, y, z;

            if (type === 'sphere') {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                const r = 3.5;
                x = r * Math.sin(phi) * Math.cos(theta);
                y = r * Math.sin(phi) * Math.sin(theta);
                z = r * Math.cos(phi);
            } 
            else if (type === 'heart') {
                // Parametric Heart
                const theta = idx * Math.PI * 2 * 30; // loops
                const phi = (idx * Math.PI); 
                
                // Distribute points roughly in heart volume
                const t = Math.random() * Math.PI * 2;
                const u = Math.random() * Math.PI; // slice
                
                // Classic Heart curve expanded
                // x = 16sin^3(t)
                // y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)
                
                // Re-mapping for a 3D volume feel
                const r = 0.15;
                x = r * 16 * Math.pow(Math.sin(t), 3);
                y = r * (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
                z = (Math.random() - 0.5) * 2; 
                
                // Add some thickness variation
                z *= (2 + Math.cos(t)); 
            }
            else if (type === 'flower') {
                // Polar rose/spherical harmonic type shape
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                
                // Petal modulation
                const rBase = 3 + 1.5 * Math.sin(5 * theta) * Math.sin(5 * phi);
                
                x = rBase * Math.sin(phi) * Math.cos(theta);
                y = rBase * Math.sin(phi) * Math.sin(theta);
                z = rBase * Math.cos(phi);
            }
            else if (type === 'saturn') {
                // 70% Planet, 30% Rings
                if (Math.random() > 0.3) {
                    // Planet
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos((Math.random() * 2) - 1);
                    const r = 2;
                    x = r * Math.sin(phi) * Math.cos(theta);
                    y = r * Math.sin(phi) * Math.sin(theta);
                    z = r * Math.cos(phi);
                } else {
                    // Ring
                    const theta = Math.random() * Math.PI * 2;
                    const r = 3 + Math.random() * 2.5;
                    x = r * Math.cos(theta);
                    z = r * Math.sin(theta);
                    y = (Math.random() - 0.5) * 0.2; // Thin
                    
                    // Tilt the ring
                    const tilt = 0.4;
                    const yTemp = y * Math.cos(tilt) - z * Math.sin(tilt);
                    const zTemp = y * Math.sin(tilt) + z * Math.cos(tilt);
                    y = yTemp;
                    z = zTemp;
                }
            }

            return { x, y, z };
        }

        function updateTargetShape(type) {
            state.currentShape = type;
            for (let i = 0; i < CONFIG.particleCount; i++) {
                const pos = getShapePosition(type, i, CONFIG.particleCount);
                targetPositions[i * 3] = pos.x;
                targetPositions[i * 3 + 1] = pos.y;
                targetPositions[i * 3 + 2] = pos.z;
                
                // Save 'original' target for restoration after interaction
                originalPositions[i*3] = pos.x;
                originalPositions[i*3+1] = pos.y;
                originalPositions[i*3+2] = pos.z;
            }
        }

        // --- Interaction Logic (Raycasting) ---
        const raycaster = new THREE.Raycaster();
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Virtual plane for mouse interaction depth

        function updateInteraction() {
            // Map mouse to 3D point
            raycaster.setFromCamera(state.mouse, camera);
            const target = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, target);
            
            // Adjust plane depth based on rotation to keep interaction intuitive? 
            // Simplified: Assume interaction happens around z=0 or near shape center.
            // Let's actually find the closest point on the ray to (0,0,0) to keep the "hand" inside the volume
            // Or just project to z=0 for simplicity.
            if(target) {
                state.rayPoint.copy(target);
            }
        }

        // --- Animation Loop ---
        const clock = new THREE.Clock();
        let time = 0;

        function animate() {
            requestAnimationFrame(animate);
            
            const delta = clock.getDelta();
            time += delta;
            
            updateInteraction();

            // Update UI Counters
            if(Math.random() > 0.9) document.getElementById('fps-counter').innerText = Math.round(1/delta);

            const positionsAttribute = geometry.attributes.position;
            const colorsAttribute = geometry.attributes.color;

            // Base Color Logic
            const hueBase = state.hue / 360;

            for (let i = 0; i < CONFIG.particleCount; i++) {
                const ix = i * 3;
                const iy = i * 3 + 1;
                const iz = i * 3 + 2;

                let px = positions[ix];
                let py = positions[iy];
                let pz = positions[iz];

                let tx = targetPositions[ix];
                let ty = targetPositions[iy];
                let tz = targetPositions[iz];

                // 1. Morphing: Move towards target
                px += (tx - px) * CONFIG.morphSpeed;
                py += (ty - py) * CONFIG.morphSpeed;
                pz += (tz - pz) * CONFIG.morphSpeed;

                // 2. Interactive "Hand" Repulsion / Attraction
                // Simulates gesture affecting particles
                if (state.isInteracting) {
                    const dx = px - state.rayPoint.x;
                    const dy = py - state.rayPoint.y;
                    const dz = pz - state.rayPoint.z; // Include Z for 3D feel
                    
                    const distSq = dx*dx + dy*dy + dz*dz;
                    const radiusSq = CONFIG.interactionRadius * CONFIG.interactionRadius;

                    if (distSq < radiusSq && distSq > 0.001) {
                        const dist = Math.sqrt(distSq);
                        const force = (1 - dist / CONFIG.interactionRadius) * CONFIG.interactionForce;
                        
                        // Push away
                        const fx = (dx / dist) * force;
                        const fy = (dy / dist) * force;
                        const fz = (dz / dist) * force;

                        px += fx;
                        py += fy;
                        pz += fz;
                        
                        // Temporarily update target to stay displaced (optional, creates "drag" effect)
                        // Or just let it spring back. Let's let it spring back naturally by NOT updating targetPositions here.
                    }
                }

                // 3. Noise/Float Movement
                const noiseSpeed = 0.05;
                px += Math.sin(time + py) * 0.005;
                py += Math.cos(time + px) * 0.005;

                // Update Position Buffer
                positions[ix] = px;
                positions[iy] = py;
                positions[iz] = pz;

                // 4. Color Logic
                // Gradient based on position + user hue
                const pLen = Math.sqrt(px*px + py*py + pz*pz);
                
                // Shift hue slightly based on distance from center
                const hue = (hueBase + pLen * 0.05 + time * 0.05) % 1.0;
                colorObj.setHSL(hue, 0.8, 0.6);

                // If interacting close to mouse, brighten
                if (state.isInteracting) {
                   const dx = px - state.rayPoint.x;
                   const dy = py - state.rayPoint.y;
                   const d = Math.sqrt(dx*dx + dy*dy);
                   if (d < 1.5) {
                       colorObj.setHSL(hue, 1.0, 0.8);
                   }
                }

                colorsAttribute.setXYZ(i, colorObj.r, colorObj.g, colorObj.b);
            }

            positionsAttribute.needsUpdate = true;
            colorsAttribute.needsUpdate = true;
            
            // Gentle scene rotation
            scene.rotation.y = Math.sin(time * 0.1) * 0.2;
            scene.rotation.x = Math.cos(time * 0.15) * 0.1;

            renderer.render(scene, camera);
        }

        animate();

        // --- Event Listeners & UI Logic ---

        // Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Mouse/Touch Interaction
        const onMove = (x, y) => {
            // Normalize mouse -1 to 1
            state.mouse.x = (x / window.innerWidth) * 2 - 1;
            state.mouse.y = -(y / window.innerHeight) * 2 + 1;
            state.isInteracting = true;
        };

        window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
        window.addEventListener('touchmove', (e) => {
            if(e.touches.length > 0) onMove(e.touches[0].clientX, e.touches[0].clientY);
        }, {passive: false});
        
        // Stop interaction when leaving
        window.addEventListener('mouseout', () => { state.isInteracting = false; });
        window.addEventListener('touchend', () => { state.isInteracting = false; });

        // Controls
        function setShape(type) {
            updateTargetShape(type);
            // UI Update
            document.querySelectorAll('.shape-btn').forEach(btn => btn.classList.remove('active'));
            // Find button (simple logic for demo)
            const btns = document.querySelectorAll('.shape-btn');
            const types = ['sphere', 'heart', 'flower', 'saturn'];
            const idx = types.indexOf(type);
            if(idx >= 0) btns[idx].classList.add('active');
            
            showNotification(`Shape: ${type.charAt(0).toUpperCase() + type.slice(1)}`);
        }

        function explode() {
            // Push all particles outward significantly
            for (let i = 0; i < CONFIG.particleCount; i++) {
                const ix = i * 3;
                const dirX = positions[ix];
                const dirY = positions[ix+1];
                const dirZ = positions[ix+2];
                
                // Add sudden velocity to target
                targetPositions[ix] += dirX * 3;
                targetPositions[ix+1] += dirY * 3;
                targetPositions[ix+2] += dirZ * 3;
            }
            
            // Reset after delay
            setTimeout(() => {
                setShape(state.currentShape);
            }, 800);
            
            showNotification("Explosion Triggered");
        }

        function showNotification(text) {
            const el = document.getElementById('notification');
            el.querySelector('h2').innerText = text;
            el.classList.remove('opacity-0', 'scale-90');
            el.classList.add('opacity-100', 'scale-100');
            
            setTimeout(() => {
                el.classList.remove('opacity-100', 'scale-100');
                el.classList.add('opacity-0', 'scale-90');
            }, 1500);
        }

        // Sliders
        document.getElementById('interaction-radius').addEventListener('input', (e) => {
            CONFIG.interactionRadius = parseFloat(e.target.value) / 10;
        });
        
        document.getElementById('color-hue').addEventListener('input', (e) => {
            state.hue = parseFloat(e.target.value);
        });

        // Webcam Logic
        async function toggleCamera() {
            const video = document.getElementById('webcam-feed');
            const icon = document.getElementById('camera-icon');
            const rec = document.getElementById('rec-dot');
            const status = document.getElementById('status-text');

            if (!state.cameraActive) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    video.srcObject = stream;
                    video.classList.remove('opacity-0');
                    state.cameraActive = true;
                    icon.style.opacity = '0'; // Hide icon when video shows
                    rec.classList.remove('hidden');
                    status.innerText = "Tracking Hand";
                    status.previousElementSibling.classList.replace('bg-emerald-500', 'bg-red-500');
                } catch (err) {
                    alert("Camera access denied or unavailable.");
                }
            } else {
                // Turn off
                const stream = video.srcObject;
                if(stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(track => track.stop());
                }
                video.srcObject = null;
                video.classList.add('opacity-0');
                state.cameraActive = false;
                icon.style.opacity = '1';
                rec.classList.add('hidden');
                status.innerText = "System Active";
                status.previousElementSibling.classList.replace('bg-red-500', 'bg-emerald-500');
            }
        }

        // Init
        updateTargetShape('sphere');

    
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
      

<div className="absolute inset-0 bg-neutral-950" id="canvas-container"></div>

<div className="flex flex-col justify-between h-full p-6 pointer-events-none" id="ui-layer">

<header className="flex justify-between items-start pointer-events-auto">
<div className="glass-panel rounded-xl p-4 flex items-center gap-4">
<div className="relative w-12 h-12 rounded-lg overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center group cursor-pointer" onclick="toggleCamera()">
<video autoplay="" className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500" id="webcam-feed" muted="" playsinline=""></video>
<iconify-icon className="text-2xl text-white/40 group-hover:text-white/80 transition-colors z-10" icon="solar:camera-linear" id="camera-icon"></iconify-icon>
<div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full hidden" id="rec-dot"></div>
</div>
<div>
<h1 className="text-sm font-medium text-white tracking-tight leading-none mb-1">real time interactive 3d system in three.js</h1>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span id="status-text">System Active</span>
</div>
</div>
</div>
<div className="glass-panel rounded-full px-4 py-2 flex items-center gap-3">
<div className="text-xs font-medium tracking-tight text-neutral-400">FPS <span className="text-white ml-1" id="fps-counter">60</span></div>
<div className="h-3 w-px bg-white/10"></div>
<div className="text-xs font-medium tracking-tight text-neutral-400">PARTICLES <span className="text-white ml-1">15k</span></div>
</div>
</header>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 text-center pointer-events-none transform scale-90" id="notification">
<iconify-icon className="text-4xl text-white/80 mb-2" icon="solar:hand-poked-linear"></iconify-icon>
<h2 className="text-lg font-medium text-white tracking-tight">Gesture Detected</h2>
</div>

<footer className="flex flex-col gap-4 pointer-events-auto items-center w-full">

<div className="glass-panel p-2 rounded-2xl flex items-center gap-1 overflow-x-auto max-w-full">
<button className="shape-btn glass-button active group relative w-12 h-12 rounded-xl flex items-center justify-center border border-transparent" onclick="setShape('sphere')">
<iconify-icon className="text-xl" icon="solar:planet-linear"></iconify-icon>
<span className="absolute -bottom-8 bg-neutral-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Sphere</span>
</button>
<button className="shape-btn glass-button group relative w-12 h-12 rounded-xl flex items-center justify-center border border-transparent" onclick="setShape('heart')">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
<span className="absolute -bottom-8 bg-neutral-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Heart</span>
</button>
<button className="shape-btn glass-button group relative w-12 h-12 rounded-xl flex items-center justify-center border border-transparent" onclick="setShape('flower')">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
<span className="absolute -bottom-8 bg-neutral-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Flower</span>
</button>
<button className="shape-btn glass-button group relative w-12 h-12 rounded-xl flex items-center justify-center border border-transparent" onclick="setShape('saturn')">
<iconify-icon className="text-xl" icon="solar:atom-linear"></iconify-icon>
<span className="absolute -bottom-8 bg-neutral-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Saturn</span>
</button>
<div className="w-px h-6 bg-white/10 mx-1"></div>
<button className="glass-button group relative w-12 h-12 rounded-xl flex items-center justify-center border border-transparent text-rose-400 hover:text-rose-300" onclick="explode()">
<iconify-icon className="text-xl" icon="solar:bomb-emoji-linear"></iconify-icon>
<span className="absolute -bottom-8 bg-neutral-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Explode</span>
</button>
</div>

<div className="glass-panel px-6 py-3 rounded-full flex items-center gap-6 w-full max-w-md">
<div className="flex items-center gap-3 w-1/2">
<iconify-icon className="text-neutral-400" icon="solar:maximize-square-linear"></iconify-icon>
<input className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-white" id="interaction-radius" max="100" min="0" type="range" value="30"/>
</div>
<div className="w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-3 w-1/2">
<iconify-icon className="text-neutral-400" icon="solar:palette-linear"></iconify-icon>
<input className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-white" id="color-hue" max="360" min="0" type="range" value="200"/>
</div>
</div>
<p className="text-[10px] text-neutral-600 font-medium tracking-tight">Move cursor to simulate hand tracking interaction</p>
</footer>
</div>


    </>
  );
}
