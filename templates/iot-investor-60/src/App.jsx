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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
950: '#09090b',
900: '#18181b',
800: '#27272a',
700: '#3f3f46',
400: '#a1a1aa',
50: '#fafafa',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Setup Three.js Scene
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        
        // Camera setup
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 12;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Optimize performance
        container.appendChild(renderer.domElement);

        // Lighting - Subtle, modern aesthetic
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight1.position.set(5, 5, 5);
        scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0x818cf8, 0.6); // Indigo tint
        dirLight2.position.set(-5, 0, -5);
        scene.add(dirLight2);

        // Rubik's Cube Setup
        const cubeGroup = new THREE.Group();
        scene.add(cubeGroup);

        // Materials for the modern, dark-mode Rubik's cube
        const baseMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x111111,
            metalness: 0.8,
            roughness: 0.2,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1
        });

        // Vibrant but sleek sticker colors (Stripe/Linear vibe)
        const stickerColors = [
            0x6366f1, // Indigo
            0x14b8a6, // Teal
            0xd946ef, // Fuchsia
            0x3b82f6, // Blue
            0x8b5cf6, // Violet
            0xf59e0b  // Amber
        ];

        const stickerMaterials = stickerColors.map(color => 
            new THREE.MeshPhysicalMaterial({
                color: color,
                metalness: 0.1,
                roughness: 0.4,
                clearcoat: 0.5,
                emissive: color,
                emissiveIntensity: 0.1
            })
        );

        const boxGeo = new THREE.BoxGeometry(0.96, 0.96, 0.96);
        const stickerGeo = new THREE.PlaneGeometry(0.85, 0.85);
        const cubes = [];

        // Build the 3x3x3 grid
        const offset = 1;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    const miniCube = new THREE.Mesh(boxGeo, baseMaterial);
                    
                    // Final assembled position
                    const targetPos = new THREE.Vector3(x * offset, y * offset, z * offset);
                    
                    // Initial scattered position (randomly spread out)
                    const startPos = new THREE.Vector3(
                        x * offset + (Math.random() - 0.5) * 15,
                        y * offset + (Math.random() - 0.5) * 15,
                        z * offset + (Math.random() - 0.5) * 10 - 5
                    );
                    
                    // Initial random rotation
                    const startRot = new THREE.Euler(
                        Math.random() * Math.PI * 4,
                        Math.random() * Math.PI * 4,
                        Math.random() * Math.PI * 4
                    );

                    miniCube.position.copy(startPos);
                    miniCube.rotation.copy(startRot);
                    
                    // Store data for animation
                    miniCube.userData = { 
                        targetPos, 
                        startPos, 
                        startRot,
                        randomOffset: Math.random() * Math.PI * 2 // For floating effect
                    };

                    // Add colored faces (stickers) to outer sides
                    const addSticker = (px, py, pz, rx, ry, matIdx) => {
                        const sticker = new THREE.Mesh(stickerGeo, stickerMaterials[matIdx]);
                        sticker.position.set(px, py, pz);
                        sticker.rotation.set(rx, ry, 0);
                        miniCube.add(sticker);
                    };

                    if (x === 1) addSticker(0.485, 0, 0, 0, Math.PI / 2, 0);
                    if (x === -1) addSticker(-0.485, 0, 0, 0, -Math.PI / 2, 1);
                    if (y === 1) addSticker(0, 0.485, 0, -Math.PI / 2, 0, 2);
                    if (y === -1) addSticker(0, -0.485, 0, Math.PI / 2, 0, 3);
                    if (z === 1) addSticker(0, 0, 0.485, 0, 0, 4);
                    if (z === -1) addSticker(0, 0, -0.485, Math.PI, 0, 5);

                    cubes.push(miniCube);
                    cubeGroup.add(miniCube);
                }
            }
        }

        // Positioning based on screen size
        const updateLayout = () => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                cubeGroup.position.set(0, 3, -2);
                camera.position.z = 14;
            } else {
                cubeGroup.position.set(3.5, 0, 0);
                camera.position.z = 10;
            }
        };
        updateLayout();

        // GSAP Scroll Animation
        gsap.registerPlugin(ScrollTrigger);

        const animState = { progress: 0 };
        
        gsap.to(animState, {
            progress: 1,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5 // Smooth interpolation
            }
        });

        // Render Loop
        const clock = new THREE.Clock();
        
        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();
            
            // Apply GSAP progress
            const easeProgress = gsap.parseEase("power2.inOut")(animState.progress);

            cubes.forEach(cube => {
                const data = cube.userData;
                
                // Lerp Position
                cube.position.lerpVectors(data.startPos, data.targetPos, easeProgress);
                
                // Add subtle floating effect when scattered
                if (easeProgress < 0.99) {
                    const floatAmount = (1 - easeProgress) * 0.1;
                    cube.position.y += Math.sin(elapsedTime * 2 + data.randomOffset) * floatAmount;
                }

                // Slerp Rotation towards 0,0,0
                const targetQuat = new THREE.Quaternion().identity();
                const startQuat = new THREE.Quaternion().setFromEuler(data.startRot);
                cube.quaternion.slerpQuaternions(startQuat, targetQuat, easeProgress);
            });

            // Group rotation logic
            if (animState.progress > 0.95) {
                // When nearly/fully assembled, rotate the whole cube slowly
                const rotationSpeed = (animState.progress - 0.95) * 20; // ramp up speed
                cubeGroup.rotation.y += 0.005 * rotationSpeed;
                cubeGroup.rotation.x += 0.002 * rotationSpeed;
            } else {
                // Base dynamic rotation during scroll
                cubeGroup.rotation.y = animState.progress * Math.PI * 1.5;
                cubeGroup.rotation.x = animState.progress * Math.PI * 0.5;
            }

            renderer.render(scene, camera);
        }

        animate();

        // Handle Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            updateLayout();
        });
    
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
      

<div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed inset-0 bg-grid pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-40 md:opacity-100 transition-opacity duration-1000" id="canvas-container"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded flex items-center justify-center bg-white text-zinc-950 font-medium text-xs tracking-tighter">
                    IO
                </div>
<span className="text-sm font-medium tracking-tight">ioty.com</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-light text-zinc-400">
<a className="transition-colors hover:text-white" href="#about">Showcase</a>
<a className="transition-colors hover:text-white" href="#roles">Ecosystem</a>
<a className="transition-colors hover:text-white" href="#process">Verification</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#">Investor Login</a>
<a className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium transition-all bg-white text-zinc-950 hover:bg-zinc-200" href="#">
                    Submit Startup
                </a>
</div>
</div>
</nav>

<main className="relative z-10 w-full max-w-7xl mx-auto px-6">

<section className="min-h-screen flex flex-col justify-center pt-24 pb-12 md:w-1/2 md:pr-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-xs font-light tracking-wide text-zinc-300">Tracking 500+ global IoT innovations</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] mb-6 gradient-text">
                Discover the Next Breakthrough in Global IoT.
            </h1>
<p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed mb-10 max-w-lg">
                ioty.com connects venture capitalists, corporate scouts, and researchers with vetted, high-potential IoT startups and hardware innovations from emerging markets worldwide.
            </p>
<div className="flex flex-col sm:flex-row items-start gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all bg-white text-zinc-950 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="#">
                    Access Investor Portal
                    <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all bg-transparent border border-white/10 text-white hover:bg-white/5" href="#">
                    Submit IoT Startup
                </a>
</div>
<div className="mt-20 flex items-center gap-4 opacity-50">
<p className="text-xs font-light tracking-wider uppercase text-zinc-400">Scroll to discover innovations</p>
<div className="w-px h-12 bg-gradient-to-b from-zinc-400 to-transparent"></div>
</div>
</section>

<section className="py-32 md:w-1/2 md:pr-12" id="about">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Beyond surface-level pitch decks.</h2>
<div className="glass-panel rounded-2xl p-8 md:p-10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-zinc-500 mb-6" height="32" icon="solar:network-linear" style={{'--iconify-stroke-width': '1.5'}} width="32"></iconify-icon>
<p className="text-lg font-light text-zinc-300 leading-relaxed mb-6">
                    ioty.com is an authoritative intelligence platform designed exclusively for serious investors and hardware innovators actively shaping the connected future.
                </p>
<p className="text-base font-light text-zinc-500 leading-relaxed">
                    We move past noisy networking groups to provide deep-dive profiles, technical analysis, and contextual market data—facilitating targeted lead generation and strategic matchmaking in the Internet of Things sector.
                </p>
</div>
</section>

<section className="py-32 md:w-1/2 md:pr-12" id="roles">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">A curated IoT ecosystem.</h2>
<p className="text-base font-light text-zinc-400 mb-10">We maintain a high-signal environment by strictly verifying participants across these key pillars of hardware innovation.</p>
<div className="grid grid-cols-2 gap-3">
<div className="glass-panel rounded-xl p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors cursor-default">
<iconify-icon className="text-zinc-400" height="20" icon="solar:lightbulb-bolt-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Seed-Stage IoT Startups</span>
</div>
<div className="glass-panel rounded-xl p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors cursor-default">
<iconify-icon className="text-zinc-400" height="20" icon="solar:chart-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Venture Capitalists</span>
</div>
<div className="glass-panel rounded-xl p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors cursor-default">
<iconify-icon className="text-zinc-400" height="20" icon="solar:case-minimalistic-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Corporate Innovation Scouts</span>
</div>
<div className="glass-panel rounded-xl p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors cursor-default">
<iconify-icon className="text-zinc-400" height="20" icon="solar:cpu-bolt-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Hardware &amp; Edge Tech</span>
</div>
<div className="glass-panel rounded-xl p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors cursor-default">
<iconify-icon className="text-zinc-400" height="20" icon="solar:shield-check-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Verified Deal Flow</span>
</div>
<div className="glass-panel rounded-xl p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors cursor-default">
<iconify-icon className="text-zinc-400" height="20" icon="solar:global-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Global Discovery</span>
</div>
</div>
</section>

<section className="py-32 mb-20 md:w-1/2 md:pr-12" id="process">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">Verified deal flow &amp; matchmaking.</h2>
<div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12 pb-8">
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 rounded-full bg-zinc-950 border border-white/20 -left-[13px] top-0 flex items-center justify-center text-[10px] font-medium text-zinc-400">1</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Rigorous Verification</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                        Every startup undergoes transparent selection criteria, including verifiable founder background checks and community-driven technical validation before listing.
                    </p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 rounded-full bg-zinc-950 border border-white/20 -left-[13px] top-0 flex items-center justify-center text-[10px] font-medium text-zinc-400">2</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Deep-Dive Intelligence</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                        Approved innovations are showcased with comprehensive technology profiles, clear disclosure of information sources, and objective market context.
                    </p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute w-6 h-6 rounded-full bg-white border border-white -left-[13px] top-0 flex items-center justify-center">
<span className="w-2 h-2 rounded-full bg-zinc-950"></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Strategic Matchmaking</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                        Registered investors receive highly curated deal flow matching their specific IoT investment thesis, enabling direct, high-value introductions.
                    </p>
<a className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-white hover:text-zinc-300 transition-colors group" href="#">
                        Register for Investor Access 
                        <iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-white/5 bg-zinc-950/50 backdrop-blur-lg pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center bg-white/10 text-white font-medium text-[10px] tracking-tighter">
                    IO
                </div>
<span className="text-xs font-medium tracking-tight text-zinc-400">ioty.com © 2024</span>
</div>
<div className="flex gap-6 text-xs font-light text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Platform Scope</a>
<a className="hover:text-white transition-colors" href="#">Verification Process</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>



    </>
  );
}
