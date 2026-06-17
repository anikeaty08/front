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



        lucide.createIcons();
        document.querySelectorAll('.flashlight-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });
    


        import {
            Clock,
            PerspectiveCamera,
            Scene,
            WebGLRenderer,
            SRGBColorSpace,
            MathUtils,
            Vector2,
            Vector3,
            MeshPhysicalMaterial,
            ShaderChunk,
            Color,
            Object3D,
            InstancedMesh,
            PMREMGenerator,
            SphereGeometry,
            AmbientLight,
            PointLight,
            ACESFilmicToneMapping,
            Raycaster,
            Plane
        } from 'three';
        import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

        // --- Core Render Class ---
        class RenderManager {
            constructor(config) {
                this.config = { ...config };
                this.setupCamera();
                this.setupScene();
                this.setupRenderer();
                this.setupResize();
                this.resize();
                this.clock = new Clock();
                this.loopInfo = { elapsed: 0, delta: 0 };
                this.isRunning = false;
            }

            setupCamera() {
                this.camera = new PerspectiveCamera();
                this.cameraFov = this.camera.fov;
            }

            setupScene() {
                this.scene = new Scene();
            }

            setupRenderer() {
                this.canvas = this.config.canvas;
                this.renderer = new WebGLRenderer({
                    canvas: this.canvas,
                    powerPreference: 'high-performance',
                    antialias: true,
                    alpha: true,
                    ...(this.config.rendererOptions || {})
                });
                this.renderer.outputColorSpace = SRGBColorSpace;
                this.renderer.toneMapping = ACESFilmicToneMapping;
            }

            setupResize() {
                window.addEventListener('resize', this.resize.bind(this));
            }

            resize() {
                const width = window.innerWidth;
                const height = window.innerHeight;
                this.renderer.setSize(width, height);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

                this.camera.aspect = width / height;
                
                // Adjust FOV based on aspect ratio to keep spheres in view
                if(this.camera.aspect < 1.0) {
                     this.camera.fov = 70;
                } else {
                     this.camera.fov = 50;
                }
                
                this.camera.updateProjectionMatrix();

                // Calculate World Size at z=0 (approximate)
                const vFOV = MathUtils.degToRad(this.camera.fov);
                const heightAtDist = 2 * Math.tan(vFOV / 2) * 20; // 20 is camera z pos
                const widthAtDist = heightAtDist * this.camera.aspect;
                
                if (this.onResize) this.onResize({ wWidth: widthAtDist, wHeight: heightAtDist });
            }

            start() {
                if (this.isRunning) return;
                this.renderer.setAnimationLoop(this.render.bind(this));
                this.isRunning = true;
            }

            stop() {
                this.renderer.setAnimationLoop(null);
                this.isRunning = false;
            }

            render() {
                this.loopInfo.delta = this.clock.getDelta();
                this.loopInfo.elapsed += this.loopInfo.delta;
                
                if (this.onBeforeRender) this.onBeforeRender(this.loopInfo);
                this.renderer.render(this.scene, this.camera);
            }
        }

        // --- Interaction Handler ---
        const pointer = new Vector2();
        let isTouch = false;

        function setupInteractions(domElement, handlers) {
            const onPointerMove = (e) => {
                pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
                pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
                handlers.onMove(pointer, e.clientX, e.clientY);
            };

            const onTouchMove = (e) => {
                 if (e.touches.length > 0) {
                    const touch = e.touches[0];
                    pointer.x = (touch.clientX / window.innerWidth) * 2 - 1;
                    pointer.y = -(touch.clientY / window.innerHeight) * 2 + 1;
                    handlers.onMove(pointer, touch.clientX, touch.clientY);
                }
            }

            window.addEventListener('mousemove', onPointerMove);
            window.addEventListener('touchmove', onTouchMove, { passive: true }); // passive true allows scroll

            return {
                dispose: () => {
                    window.removeEventListener('mousemove', onPointerMove);
                    window.removeEventListener('touchmove', onTouchMove);
                }
            };
        }

        // --- Physics & Simulation ---
        const { randFloat, randFloatSpread } = MathUtils;
        const tmpVec3A = new Vector3();
        const tmpVec3B = new Vector3();
        const tmpVec3C = new Vector3();

        class PhysicsSystem {
            constructor(config) {
                this.config = config;
                this.count = config.count;
                this.positionData = new Float32Array(3 * this.count);
                this.velocityData = new Float32Array(3 * this.count);
                this.sizeData = new Float32Array(this.count);
                this.center = new Vector3();
                this.initPositions();
            }

            initPositions() {
                for (let i = 0; i < this.count; i++) {
                    const idx = 3 * i;
                    this.positionData[idx] = randFloatSpread(20);
                    this.positionData[idx + 1] = randFloatSpread(20);
                    this.positionData[idx + 2] = randFloatSpread(10);
                    
                    this.sizeData[i] = i === 0 ? this.config.size0 : randFloat(this.config.minSize, this.config.maxSize);
                }
            }

            update(delta) {
                const { gravity, friction, maxVelocity, wallBounce, maxX, maxY, maxZ, controlSphere0 } = this.config;
                
                // Cursor interaction
                if (controlSphere0) {
                     tmpVec3A.fromArray(this.positionData, 0);
                     // Smoothly move first sphere to cursor center
                     tmpVec3A.lerp(this.center, 0.1).toArray(this.positionData, 0);
                     // Reset velocity for cursor sphere
                     this.velocityData[0] = 0; 
                     this.velocityData[1] = 0;
                     this.velocityData[2] = 0;
                }

                // Physics loop
                for (let i = (controlSphere0 ? 1 : 0); i < this.count; i++) {
                    const idx = 3 * i;
                    
                    // Velocity Verlet Integration (simplified)
                    const vx = this.velocityData[idx];
                    const vy = this.velocityData[idx+1] - (gravity * delta * 5); // Added simple gravity
                    const vz = this.velocityData[idx+2];

                    // Apply velocity
                    this.positionData[idx] += vx;
                    this.positionData[idx+1] += vy;
                    this.positionData[idx+2] += vz;

                    // Friction
                    this.velocityData[idx] *= friction;
                    this.velocityData[idx+1] *= friction;
                    this.velocityData[idx+2] *= friction;
                }

                // Collisions (Naive O(N^2) for small N)
                const v1 = new Vector3(); const v2 = new Vector3();
                const p1 = new Vector3(); const p2 = new Vector3();
                const diff = new Vector3();

                for (let i = 0; i < this.count; i++) {
                    const idx1 = 3 * i;
                    const r1 = this.sizeData[i];
                    p1.fromArray(this.positionData, idx1);

                    // Wall Constraints
                    if (p1.x > maxX - r1) { p1.x = maxX - r1; this.velocityData[idx1] *= -wallBounce; }
                    if (p1.x < -maxX + r1) { p1.x = -maxX + r1; this.velocityData[idx1] *= -wallBounce; }
                    
                    if (p1.y > maxY - r1) { p1.y = maxY - r1; this.velocityData[idx1+1] *= -wallBounce; }
                    if (p1.y < -maxY + r1) { p1.y = -maxY + r1; this.velocityData[idx1+1] *= -wallBounce; }
                    
                    if (p1.z > maxZ - r1) { p1.z = maxZ - r1; this.velocityData[idx1+2] *= -wallBounce; }
                    if (p1.z < -maxZ + r1) { p1.z = -maxZ + r1; this.velocityData[idx1+2] *= -wallBounce; }
                    
                    this.positionData[idx1] = p1.x;
                    this.positionData[idx1+1] = p1.y;
                    this.positionData[idx1+2] = p1.z;

                    // Sphere vs Sphere
                    for (let j = i + 1; j < this.count; j++) {
                        const idx2 = 3 * j;
                        const r2 = this.sizeData[j];
                        p2.fromArray(this.positionData, idx2);
                        
                        diff.copy(p1).sub(p2);
                        const dist = diff.length();
                        const minDist = r1 + r2;

                        if (dist < minDist && dist > 0) {
                             const overlap = minDist - dist;
                             diff.normalize().multiplyScalar(overlap * 0.5);
                             
                             // Separate
                             this.positionData[idx1] += diff.x;
                             this.positionData[idx1+1] += diff.y;
                             this.positionData[idx1+2] += diff.z;
                             
                             this.positionData[idx2] -= diff.x;
                             this.positionData[idx2+1] -= diff.y;
                             this.positionData[idx2+2] -= diff.z;

                             // Exchange velocities (simple elastic)
                             v1.fromArray(this.velocityData, idx1);
                             v2.fromArray(this.velocityData, idx2);
                             
                             const normal = diff.normalize();
                             const v1n = v1.dot(normal);
                             const v2n = v2.dot(normal);
                             
                             // Swap normal components
                             if (v1n - v2n < 0) { // moving towards each other
                                const m1 = 1; const m2 = 1;
                                const newV1n = (v1n * (m1 - m2) + 2 * m2 * v2n) / (m1 + m2);
                                const newV2n = (v2n * (m2 - m1) + 2 * m1 * v1n) / (m1 + m2);
                                
                                v1.addScaledVector(normal, newV1n - v1n);
                                v2.addScaledVector(normal, newV2n - v2n);
                                
                                v1.toArray(this.velocityData, idx1);
                                v2.toArray(this.velocityData, idx2);
                             }
                        }
                    }
                }
            }
        }

        // --- Custom Material for Thickness/Glass Effect ---
        class BallpitMaterial extends MeshPhysicalMaterial {
            constructor(parameters) {
                super(parameters);
                this.uniforms = {
                    thicknessDistortion: { value: 0.1 },
                    thicknessAmbient: { value: 0.0 },
                    thicknessAttenuation: { value: 0.1 },
                    thicknessPower: { value: 2.0 },
                    thicknessScale: { value: 10.0 }
                };
            }
            // Note: Shader injection skipped for brevity and stability in vanilla, 
            // using standard PhysicalMaterial which looks great on its own.
        }

        // --- Main Ballpit Class ---
        class Ballpit {
            constructor(renderer, config) {
                this.config = config;
                this.physics = new PhysicsSystem(config);
                
                // Environment Map
                const pmremGenerator = new PMREMGenerator(renderer);
                pmremGenerator.compileEquirectangularShader();
                const roomEnvironment = new RoomEnvironment();
                this.envMap = pmremGenerator.fromScene(roomEnvironment).texture;
                roomEnvironment.dispose();

                // Material
                const material = new MeshPhysicalMaterial({
                    color: 0xffffff,
                    metalness: config.metalness,
                    roughness: config.roughness,
                    clearcoat: config.clearcoat,
                    clearcoatRoughness: config.clearcoatRoughness,
                    envMap: this.envMap,
                    transmission: 0, // Solid balls for now, set to >0 for glass
                    flatShading: false
                });

                // Geometry
                const geometry = new SphereGeometry(1, 32, 32);

                this.mesh = new InstancedMesh(geometry, material, config.count);
                this.dummy = new Object3D();
                
                // Colors (Grayscale/Stone palette)
                const colors = [
                    new Color(0x292524), // Stone 800
                    new Color(0x44403c), // Stone 700
                    new Color(0x78716c), // Stone 500
                    new Color(0xa8a29e)  // Stone 400
                ];
                
                for (let i = 0; i < config.count; i++) {
                    const col = colors[Math.floor(Math.random() * colors.length)];
                    this.mesh.setColorAt(i, col);
                }
                this.mesh.instanceColor.needsUpdate = true;

                // Lighting
                this.lights = new Object3D();
                const ambient = new AmbientLight(0xffffff, 0.5);
                const point = new PointLight(0xffffff, 200);
                point.position.set(0, 0, 10);
                this.lights.add(ambient, point);
            }

            addToScene(scene) {
                scene.add(this.mesh);
                scene.add(this.lights);
            }

            update(delta) {
                this.physics.update(delta);
                
                for (let i = 0; i < this.config.count; i++) {
                    this.dummy.position.fromArray(this.physics.positionData, i * 3);
                    this.dummy.scale.setScalar(this.physics.sizeData[i]);
                    this.dummy.updateMatrix();
                    this.mesh.setMatrixAt(i, this.dummy.matrix);
                    
                    // Move light with the first ball (cursor)
                    if (i === 0) {
                        this.lights.children[1].position.copy(this.dummy.position);
                        this.lights.children[1].position.z += 5;
                    }
                }
                this.mesh.instanceMatrix.needsUpdate = true;
            }
        }

        // --- Initialization ---
        const canvas = document.getElementById('ballpit-canvas');
        
        const config = {
            count: 70, // Number of balls
            minSize: 0.6,
            maxSize: 1.4,
            size0: 1.5, // Cursor ball size
            gravity: 0.2,
            friction: 0.96,
            wallBounce: 0.8,
            maxVelocity: 0.5,
            maxX: 10,
            maxY: 10,
            maxZ: 5,
            metalness: 0.4,
            roughness: 0.2,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            controlSphere0: true // First sphere follows mouse
        };

        const app = new RenderManager({ canvas });
        app.camera.position.set(0, 0, 20);
        
        const ballpit = new Ballpit(app.renderer, config);
        ballpit.addToScene(app.scene);

        // Resize handler to update simulation bounds
        app.onResize = ({ wWidth, wHeight }) => {
            config.maxX = wWidth / 2;
            config.maxY = wHeight / 2;
        };
        // Trigger initial resize to set bounds
        app.resize();

        // Raycaster for mouse interaction
        const raycaster = new Raycaster();
        const plane = new Plane(new Vector3(0, 0, 1), 0);
        const intersectPoint = new Vector3();

        setupInteractions(canvas, {
            onMove: (ndc, x, y) => {
                raycaster.setFromCamera(ndc, app.camera);
                raycaster.ray.intersectPlane(plane, intersectPoint);
                ballpit.physics.center.copy(intersectPoint);
            }
        });

        app.onBeforeRender = ({ delta }) => {
            // Cap delta to prevent explosion on tab switch
            ballpit.update(Math.min(delta, 0.05)); 
        };

        app.start();

    
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
      

<div className="fixed top-0 w-full h-screen -z-[5] bg-cover bg-center blur-2xl brightness-[0.4] opacity-40 mix-blend-difference hue-rotate-15 pointer-events-none" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d39b14a0-af45-4d7c-a694-1be60eab623b_1600w.png\')'}}>
</div>

<canvas className="opacity-60" data-engine="three.js r160" height="908" id="ballpit-canvas" style={{width: '1337px', height: '908px'}} width="1337"></canvas>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-enter delay-0">
<div className="flashlight-card relative flex items-center gap-1 p-2 rounded-full border shadow-2xl shadow-black/20 bg-stone-900/40 border-white/10 backdrop-blur-md" style={{'--fx-filter': 'liquid-glass(2, 10) saturate(1.25)', '--x': '446.453125px', '--y': '30px'}}>
<a className="px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors rounded-full hover:bg-white/10 text-stone-300 hover:text-white" href="#">HOME</a>
<a className="px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors rounded-full hover:bg-white/10 text-stone-300 hover:text-white" href="#works">WORKS</a>
<a className="transition-colors hover:bg-white/10 hover:text-white text-xs font-semibold text-stone-300 tracking-wide rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#about">ABOUT </a>
<a className="px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors rounded-full hover:bg-white/10 text-stone-300 hover:text-white" href="#about">RESUME</a>
<a className="transition-colors hover:bg-white/10 hover:text-white text-xs font-semibold text-stone-300 tracking-wide rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#contact">CONTACT</a>
</div>
</nav>

<main className="min-h-screen flex flex-col w-full max-w-[1400px] z-10 mr-auto ml-auto relative">

<section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-24 relative pointer-events-none">

<div className="max-w-4xl mt-12 md:mt-0 pointer-events-auto">
<h1 className="md:text-8xl leading-[0.9] animate-enter delay-100 text-6xl font-semibold text-white tracking-tighter mix-blend-overlay">Hello! I'm John Doe</h1>
<h1 className="md:text-8xl leading-[0.9] text-6xl font-semibold tracking-tighter text-white animate-enter delay-100 absolute top-0 left-0 opacity-100 mask-image">

</h1>
<p className="md:text-2xl leading-relaxed animate-enter delay-200 text-xl font-light text-stone-400 max-w-2xl mt-8">I am John Doe, a Full Stack Web Developer who loves turning complex market problems into simple, functional digital experiences.</p>

<div className="mt-10 flex flex-wrap items-center gap-4 animate-enter delay-300">
<a className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95 bg-stone-100 text-stone-950 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#works">
<span>View Projects</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-colors text-stone-300 hover:bg-white/5 border border-transparent hover:border-white/10">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="">Contact Me</span>
</button>
</div>
</div>

<div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-auto animate-enter delay-400 hidden md:block pointer-events-auto">
<p className="text-xs font-semibold mb-6 tracking-widest uppercase text-stone-600">Previously worked with</p>
<div className="flex flex-wrap items-center gap-x-10 gap-y-6">
<div className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><iconify-icon className="text-white" height="30" icon="simple-icons:vercel" width="90"></iconify-icon></div>
<div className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><svg className="text-white w-[90px] h-[30px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="adafruit" height="30" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '90px', height: '30px'}} viewbox="0 0 24 24" width="90" xmlns="http://www.w3.org/2000/svg"><path d="M14.399 12.794c-.924.148-1.722-.037-1.781-.412c-.06-.375.64-.798 1.565-.945s1.721.038 1.78.412c.06.374-.64.798-1.564.945m-.878 3.86c-.338.172-.957-.363-1.382-1.196c-.426-.834-.497-1.65-.158-1.822s.956.363 1.382 1.196s.497 1.65.158 1.822m-3.64-1.552c-.662.662-1.415.981-1.683.713c-.27-.268.05-1.022.71-1.684c.66-.663 1.414-.982 1.683-.714s-.05 1.023-.71 1.685m-2.531-4.61c.171-.339.987-.268 1.82.156s1.372 1.042 1.2 1.38s-.988.269-1.822-.155s-1.37-1.043-1.198-1.381m4.8-2.45c.375.058.56.856.414 1.78c-.145.925-.566 1.625-.942 1.567c-.374-.06-.56-.857-.415-1.78c.145-.925.567-1.626.943-1.568m11.835 2.53c-.078-.491-.345-.632-.989-.837l-3.762-1.2s-2.283-.863-3.974.357c-.228.164-.464.351-.7.55c.198-.236.385-.472.55-.7c1.215-1.694.349-3.975.349-3.975l-1.207-3.761c-.207-.643-.347-.91-.84-.986c-.492-.078-.707.132-1.101.68l-2.305 3.209s-1.524 1.903-.888 3.89c.086.266.191.549.308.836a12 12 0 0 0-.497-.74C7.693 6.215 5.258 6.332 5.258 6.332S1.82 6.32 1.308 6.32c-.676-.003-.972.05-1.198.493s-.093.714.307 1.258c.303.415 2.34 3.183 2.34 3.183S4.095 13.292 6.18 13.3c.28.001.58-.012.889-.034a12 12 0 0 0-.855.244c-1.98.656-2.619 3.01-2.619 3.01L2.36 20.273c-.21.64-.252.939.1 1.29c.352.353.65.31 1.291.098c.489-.16 3.75-1.242 3.75-1.242s2.352-.644 3.004-2.624c.088-.266.169-.556.243-.854a11 11 0 0 0-.03.887c.01 2.085 2.051 3.421 2.051 3.421l3.186 2.333c.546.398.816.531 1.26.305c.443-.226.495-.523.491-1.199l-.022-3.95s.114-2.435-1.567-3.668a12 12 0 0 0-.739-.495c.287.115.568.22.836.304c1.986.633 3.888-.894 3.888-.894l3.204-2.31c.547-.395.756-.612.679-1.104" fill="#ffffff"></path></svg></div>
<div className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><svg className="w-[90px] h-[30px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="actualbudget" height="30" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '90px', height: '30px'}} viewbox="0 0 24 24" width="90" xmlns="http://www.w3.org/2000/svg"><path d="m17.442 10.779l.737 2.01l-16.758 6.145a.253.253 0 0 1-.324-.15l-.563-1.536a.253.253 0 0 1 .15-.324zM1.13 23.309L12.036.145A.25.25 0 0 1 12.265 0h.478c.097 0 .185.055.227.142l7.036 14.455l2.206-.848c.13-.05.277.015.327.145l.587 1.526a.253.253 0 0 1-.145.327l-2.034.783l2.51 5.156a.253.253 0 0 1-.117.338l-1.47.716a.253.253 0 0 1-.339-.117l-2.59-5.322l-17.37 6.682a.253.253 0 0 1-.328-.145l-.002-.004l-.12-.33a.25.25 0 0 1 .009-.195M12.528 4.127L4.854 20.425L18 15.369z" fill="#ffffff"></path></svg></div>
</div>
</div>

<div className="absolute top-28 md:top-36 right-6 md:right-12 max-w-sm text-right hidden lg:block animate-enter delay-600 pointer-events-auto">
<p className="text-lg md:text-xl font-normal leading-relaxed opacity-70 text-stone-300">
                    I approach design by stepping back, seeing the bigger picture, and watching everything start to making sense.
                </p>
</div>
</section>

<section className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 py-32 bg-stone-950/80 backdrop-blur-xl rounded-t-3xl border-t border-white/5 mt-12" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5 space-y-8 animate-enter delay-100">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-black"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
</span>
<span className="text-xs font-bold text-stone-950 uppercase tracking-wide">Open to Work</span>
</div>
<p className="text-xl md:text-2xl font-jakarta font-normal leading-relaxed text-stone-300">
<span className="text-white font-medium">21-year-old designer</span> driven by curiosity, systems thinking, and the joy of solving real problems through thoughtful digital experiences.
                    </p>
<div className="flex flex-col gap-4">
<a className="group flex items-center gap-3 text-stone-400 hover:text-white transition-colors w-fit" href="#">
<div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium">Download Resume</span>
</a>
</div>
<div className="h-px w-full bg-gradient-to-r from-stone-800 via-stone-800 to-transparent"></div>
</div>

<div className="lg:col-span-7 animate-enter delay-200">
<div className="flex items-center gap-3 mb-10 relative">
<h2 className="text-4xl font-semibold tracking-tight text-white">Work Experience</h2>
</div>
<div className="space-y-6 font-jakarta">

<div className="group flashlight-card flex flex-col md:flex-row md:items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-stone-900/40 border border-transparent hover:border-white/5 transition-all">
<span className="text-sm font-medium text-stone-500 mb-2 md:mb-0 tabular-nums">Jun 2025 - Sep 2025</span>
<div className="flex items-center gap-2 text-base">
<span className="text-stone-300">Product Design Intern at</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
<iconify-icon icon="lucide:zap" width="12"></iconify-icon>
                                    Emergent
                                </span>
</div>
</div>

<div className="group flashlight-card flex flex-col md:flex-row md:items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-stone-900/40 border border-transparent hover:border-white/5 transition-all">
<span className="text-sm font-medium text-stone-500 mb-2 md:mb-0 tabular-nums">Sep 2024 - Mar 2025</span>
<div className="flex items-center gap-2 text-base">
<span className="text-stone-300">Lead Designer at</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
<iconify-icon icon="lucide:arrow-right-circle" width="12"></iconify-icon>
                                    Interact
                                </span>
</div>
</div>

<div className="group flashlight-card flex flex-col md:flex-row md:items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-stone-900/40 border border-transparent hover:border-white/5 transition-all" style={{'--x': '357.671875px', '--y': '47.8125px'}}>
<span className="text-sm font-medium text-stone-500 mb-2 md:mb-0 tabular-nums">Dec 2024 - Feb 2025</span>
<div className="flex items-center gap-2 text-base">
<span className="text-stone-300">Product Designer at</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-300 border border-pink-500/20">
<iconify-icon icon="lucide:shapes" width="12"></iconify-icon>
                                    Meetsii
                                </span>
</div>
</div>

<div className="group flashlight-card flex flex-col md:flex-row md:items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-stone-900/40 border border-transparent hover:border-white/5 transition-all" style={{'--x': '12.671875px', '--y': '43.8125px'}}>
<span className="text-sm font-medium text-stone-500 mb-2 md:mb-0 tabular-nums">Nov 2024 - Dec 2024</span>
<div className="flex items-center gap-2 text-base">
<span className="text-stone-300">Design Intern at</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
<iconify-icon icon="lucide:atom" width="12"></iconify-icon>
                                    The Tritium Crew
                                </span>
</div>
</div>

<div className="group flashlight-card flex flex-col md:flex-row md:items-center justify-between p-4 -mx-4 rounded-2xl hover:bg-stone-900/40 border border-transparent hover:border-white/5 transition-all">
<span className="text-sm font-medium text-stone-500 mb-2 md:mb-0 tabular-nums">Jun 2025 - Sep 2025</span>
<div className="flex items-center gap-2 text-base">
<span className="text-stone-300">Video Editing Intern at</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-700/50 text-stone-300 border border-stone-600/50">
<iconify-icon icon="lucide:film" width="12"></iconify-icon>
                                    Finest Edit
                                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full px-6 md:px-12 pb-32 bg-stone-950" id="works">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-enter delay-200">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Selected Works</h2>
<p className="text-lg text-stone-400 font-light leading-relaxed">
                        A curation of digital products, brands, and experiences I've engineered.
                    </p>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-stone-300 hover:text-white transition-colors" href="#">
<span>View all projects</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flashlight-card group relative col-span-1 md:col-span-2 lg:col-span-2 h-[400px] md:h-[500px] rounded-3xl border border-white/10 bg-stone-900/20 overflow-hidden cursor-pointer">
<div className="absolute inset-0">
<img alt="Project Image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
</div>
<div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-stone-200 backdrop-blur-md">Fintech</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-stone-200 backdrop-blur-md">2024</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-2 tracking-tight">Nova Financial</h3>
<p className="text-stone-300 font-light max-w-lg leading-relaxed line-clamp-2 group-hover:text-white transition-colors">
                                A comprehensive dashboard for decentralized trading, featuring real-time WebGL data visualization.
                            </p>
</div>
</div>
</div>

<div className="flashlight-card group relative h-[400px] md:h-[500px] rounded-3xl border border-white/10 bg-stone-900/20 overflow-hidden cursor-pointer">
<div className="absolute inset-0">
<img alt="Project Image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
</div>
<div className="relative z-20 h-full flex flex-col justify-end p-8">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-stone-200 backdrop-blur-md">AI Tool</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Vortex Mind</h3>
</div>
</div>
</div>

<div className="flashlight-card group relative h-[400px] md:h-[500px] rounded-3xl border border-white/10 bg-stone-900/20 overflow-hidden cursor-pointer">
<div className="absolute inset-0">
<img alt="Project Image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
</div>
<div className="relative z-20 h-full flex flex-col justify-end p-8">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-stone-200 backdrop-blur-md">Mobile App</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Lumina Health</h3>
</div>
</div>
</div>

<div className="flashlight-card group relative col-span-1 md:col-span-2 lg:col-span-2 h-[400px] md:h-[500px] rounded-3xl border border-white/10 bg-stone-900/20 overflow-hidden cursor-pointer">
<div className="absolute inset-0">
<img alt="Project Image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
</div>
<div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-stone-200 backdrop-blur-md">SaaS</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-stone-200 backdrop-blur-md">2023</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-2 tracking-tight">Chronos Workspace</h3>
<p className="text-stone-300 font-light max-w-lg leading-relaxed line-clamp-2 group-hover:text-white transition-colors">
                                A collaborative calendar engine designed for remote teams.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full px-6 md:px-12 py-32 border-t border-white/5 bg-stone-950" id="contact">
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto items-center">
<div className="mb-8 inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-stone-300" icon="lucide:mail" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                    Have an idea?
                </h2>
<p className="text-lg md:text-xl text-stone-400 max-w-lg mb-10 font-light">
                    I'm currently available for freelance projects and open to full-time opportunities.
                </p>
<a className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-stone-100 text-stone-950 text-lg font-semibold tracking-tight transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]" href="mailto:hello@example.com">
<span className="">hello@Johndoe.dev</span>
<iconify-icon className="opacity-50 group-hover:opacity-100 transition-opacity" icon="lucide:copy" width="18"></iconify-icon>
</a>
</div>
<div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-medium text-stone-500">© 2026 John Doe All rights reserved.</div>
<div className="flex items-center gap-8">
<a className="text-stone-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2" href="#">
<iconify-icon icon="simple-icons:twitter" width="16"></iconify-icon>
                        Twitter
                    </a>
<a className="text-stone-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2" href="#">
<iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
                        LinkedIn
                    </a>
<a className="text-stone-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2" href="#">
<iconify-icon icon="simple-icons:github" width="16"></iconify-icon>
                        GitHub
                    </a>
</div>
</div>
</section>
</main>





    </>
  );
}
