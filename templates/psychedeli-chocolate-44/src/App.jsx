import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Nunito', 'sans-serif'],
bubble: ['Titan One', 'cursive'],
},
colors: {
'electric-pink': '#FF6AC2',
'crystal-cyan': '#00F0FF',
'deep-cocoa': '#2A1A14',
'emerald-alpine': '#00A86B',
'neon-purple': '#B026FF',
'sunset-orange': '#FF8C42',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // --- 3D SCENE SETUP ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();

        // Fog for depth (Alpine Mist)
        scene.fog = new THREE.FogExp2(0x2A1A14, 0.02);

        // Camera
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 12);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        container.appendChild(renderer.domElement);

        // --- LIGHTING (Magic Hour Neon) ---
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        // Main Sun (Warm)
        const sunLight = new THREE.DirectionalLight(0xFF8C42, 3);
        sunLight.position.set(5, 5, 5);
        scene.add(sunLight);

        // Neon Rim Light (Pink)
        const pinkLight = new THREE.PointLight(0xFF6AC2, 4, 20);
        pinkLight.position.set(-5, 2, 2);
        scene.add(pinkLight);

        // Cyan Fill Light
        const cyanLight = new THREE.PointLight(0x00F0FF, 3, 20);
        cyanLight.position.set(0, -5, 5);
        scene.add(cyanLight);

        // --- MATERIALS ---
        
        // 1. Juicy Chocolate Material
        const chocolateMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x3E2723,
            roughness: 0.2,
            metalness: 0.1,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            reflectivity: 1.0,
        });

        // 2. Iridescent Bubble Material (Glass-like)
        const bubbleMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            transmission: 0.9,
            opacity: 1,
            metalness: 0,
            roughness: 0,
            ior: 1.5,
            thickness: 0.1,
            specularIntensity: 1,
            envMapIntensity: 1,
            transparent: true
        });

        // 3. Glowing Crystal Material
        const crystalMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00F0FF,
            emissive: 0x00F0FF,
            emissiveIntensity: 0.5,
            metalness: 0.9,
            roughness: 0.1,
            transmission: 0.2,
            transparent: true
        });

        // 4. Mushroom Cap Material (Neon Gradient Simulation)
        const mushroomCapMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xFF6AC2,
            emissive: 0xFF00AA,
            emissiveIntensity: 0.8,
            roughness: 0.4,
            clearcoat: 0.5
        });

        const mushroomStemMaterial = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            roughness: 0.3
        });

        // --- OBJECTS ---

        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        // 1. The Chocolate Bar
        // Creating a rounded box manually or using basic box for simplicity in single file
        // We will make it look like a "slab" with chunks
        const barGeo = new THREE.BoxGeometry(4, 2, 0.5);
        const bar = new THREE.Mesh(barGeo, chocolateMaterial);
        mainGroup.add(bar);

        // Add "Squares" to the bar
        const squareGeo = new THREE.BoxGeometry(0.8, 0.8, 0.1);
        for(let x=-1.5; x<=1.5; x+=1) {
             for(let y=-0.5; y<=0.5; y+=1) {
                const square = new THREE.Mesh(squareGeo, chocolateMaterial);
                square.position.set(x, y, 0.25);
                // slightly rounded look by scaling
                square.scale.set(0.9, 0.9, 1);
                bar.add(square);
             }
        }
        
        // Add "Melting" Drops
        const dropGeo = new THREE.SphereGeometry(0.15, 16, 16);
        const drop1 = new THREE.Mesh(dropGeo, chocolateMaterial);
        drop1.position.set(1.5, -1.1, 0.1);
        drop1.scale.y = 1.5;
        bar.add(drop1);

        // 2. Floating Bubbles
        const bubblesGroup = new THREE.Group();
        scene.add(bubblesGroup);
        
        for(let i=0; i<15; i++) {
            const size = Math.random() * 0.4 + 0.1;
            const bubble = new THREE.Mesh(new THREE.SphereGeometry(size, 32, 32), bubbleMaterial);
            
            // Random position in orbit
            const theta = Math.random() * Math.PI * 2;
            const radius = 3 + Math.random() * 3;
            const y = (Math.random() - 0.5) * 6;
            
            bubble.position.set(
                Math.cos(theta) * radius,
                y,
                Math.sin(theta) * radius
            );
            
            // Store random animation offset
            bubble.userData = { 
                speed: Math.random() * 0.01 + 0.005, 
                yOffset: Math.random() * 100 
            };
            bubblesGroup.add(bubble);
        }

        // 3. Floating Crystals
        const crystalGroup = new THREE.Group();
        scene.add(crystalGroup);
        const crystalGeo = new THREE.OctahedronGeometry(0.3, 0);
        
        for(let i=0; i<8; i++) {
            const crystal = new THREE.Mesh(crystalGeo, crystalMaterial);
            const theta = Math.random() * Math.PI * 2;
            const radius = 2.5 + Math.random() * 2;
            
            crystal.position.set(
                Math.cos(theta) * radius,
                (Math.random() - 0.5) * 5,
                Math.sin(theta) * radius
            );
            
            crystal.rotation.set(Math.random()*3, Math.random()*3, Math.random()*3);
            crystal.userData = { rotSpeed: Math.random() * 0.02 };
            crystalGroup.add(crystal);
        }

        // 4. Magic Mushrooms
        const shroomGroup = new THREE.Group();
        scene.add(shroomGroup);
        
        function createMushroom(x, y, z, scale) {
            const group = new THREE.Group();
            
            // Stem
            const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.5, 8), mushroomStemMaterial);
            stem.position.y = 0.25;
            group.add(stem);
            
            // Cap
            const cap = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI/2), mushroomCapMaterial);
            cap.position.y = 0.5;
            group.add(cap);

            group.position.set(x, y, z);
            group.scale.set(scale, scale, scale);
            // Random rotation
            group.rotation.z = (Math.random() - 0.5) * 0.5;
            group.rotation.x = (Math.random() - 0.5) * 0.5;
            
            return group;
        }

        // Add mushrooms growing on the bar
        const shroom1 = createMushroom(1.2, 0.8, 0.3, 1.2);
        bar.add(shroom1);
        const shroom2 = createMushroom(-1.5, 0.5, 0.3, 0.8);
        shroom2.rotation.z = -0.5;
        bar.add(shroom2);

        // Add floating mushrooms
        for(let i=0; i<5; i++) {
            const theta = Math.random() * Math.PI * 2;
            const r = 4;
            const floatShroom = createMushroom(
                Math.cos(theta) * r,
                (Math.random() - 0.5) * 4,
                Math.sin(theta) * r,
                1.5
            );
            shroomGroup.add(floatShroom);
        }


        // --- ANIMATION LOOP ---
        const clock = new THREE.Clock();
        let mouseX = 0;
        let mouseY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;

        // Mouse Parallax Logic
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.001;
            mouseY = (event.clientY - windowHalfY) * 0.001;
        });

        function animate() {
            const time = clock.getElapsedTime();
            
            // Smooth Rotation for Main Bar
            targetRotationY = mouseX * 2; // Follow mouse Y
            targetRotationX = mouseY * 2; // Follow mouse X
            
            mainGroup.rotation.y += 0.05 * (targetRotationY - mainGroup.rotation.y);
            mainGroup.rotation.x += 0.05 * (targetRotationX - mainGroup.rotation.x);
            
            // Constant slight float for main bar
            mainGroup.position.y = Math.sin(time * 0.5) * 0.2;

            // Animate Bubbles
            bubblesGroup.children.forEach(b => {
                b.position.y += Math.sin(time + b.userData.yOffset) * 0.005;
                // Orbit
                const currentX = b.position.x;
                const currentZ = b.position.z;
                b.position.x = currentX * Math.cos(b.userData.speed) - currentZ * Math.sin(b.userData.speed);
                b.position.z = currentX * Math.sin(b.userData.speed) + currentZ * Math.cos(b.userData.speed);
            });

            // Animate Crystals
            crystalGroup.children.forEach(c => {
                c.rotation.x += c.userData.rotSpeed;
                c.rotation.y += c.userData.rotSpeed;
                // Bobbing
                c.position.y += Math.sin(time * 2 + c.id) * 0.002;
            });

            // Animate Floating Mushrooms
            shroomGroup.rotation.y = -time * 0.1;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        // --- GSAP SCROLL INTERACTIONS ---
        
        // 1. Explode / Spread elements on scroll
        gsap.to(mainGroup.scale, {
            x: 0.8, y: 0.8, z: 0.8,
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

        gsap.to(bubblesGroup.rotation, {
            y: Math.PI * 2,
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 2
            }
        });

        // 2. Parallax Background Mountain
        gsap.to("#mountain-bg", {
            y: 100,
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

        // 3. Fade ups
        gsap.utils.toArray('.scroll-fade-up').forEach(element => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Resize Handling
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-mountains" id="mountain-bg"></div>
<div className="bg-overlay"></div>

<img alt="Vaduz Castle" className="castle-silhouette blur-[2px] brightness-50" src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Schloss_Vaduz_Silhouette.svg"/>

<div id="canvas-container"></div>

<nav className="fixed top-0 w-full z-50 py-6 px-6 lg:px-12 backdrop-blur-sm bg-black/20 border-b border-white/5">
<div className="flex justify-between items-center max-w-7xl mx-auto">
<a className="flex items-center gap-3 group" href="#">
<iconify-icon className="text-white text-3xl group-hover:text-electric-pink transition-colors" icon="game-icons:mushroom-house"></iconify-icon>
<span className="font-bubble text-2xl tracking-wide text-white drop-shadow-md">Alpine Glow</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-bold tracking-wider text-white">
<a className="hover:text-electric-pink transition-colors drop-shadow-md" href="#home">HOME</a>
<a className="hover:text-crystal-cyan transition-colors drop-shadow-md" href="#product">PRODUCT</a>
<a className="hover:text-emerald-alpine transition-colors drop-shadow-md" href="#about">ABOUT</a>
<a className="hover:text-sunset-orange transition-colors drop-shadow-md" href="#contact">CONTACT</a>
</div>
<button className="btn-gradient px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest text-white">
                Shop Now
            </button>
</div>
</nav>

<main className="relative z-10">

<section className="h-screen w-full flex flex-col items-center justify-center text-center relative px-4 pt-20" id="home">
<div className="relative z-20 transform hover:scale-105 transition-transform duration-500">
<h2 className="text-bubble text-6xl md:text-8xl lg:text-9xl leading-tight mb-2 select-none animate-float">
                    TASTE TO<br/>ELEVATE
                </h2>
<h3 className="text-choco text-4xl md:text-6xl lg:text-7xl absolute top-full left-1/2 -translate-x-1/2 -mt-8 rotate-[-5deg] select-none whitespace-nowrap z-[-1] opacity-90">
                    ELEVATE TASTE
                </h3>
</div>
<p className="mt-16 text-lg md:text-xl text-white font-semibold max-w-lg mx-auto bg-black/30 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-[0_0_30px_rgba(255,106,194,0.3)]">
                Precision-Dosed Spiritual Elevation. <br/>
<span className="text-crystal-cyan">Native to Liechtenstein.</span>
</p>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-white text-4xl opacity-80" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
</section>

<section className="min-h-screen py-32 px-6 relative" id="product">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-all duration-500 scroll-fade-up">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-pink/30 rounded-full blur-[50px] group-hover:bg-electric-pink/50 transition-colors"></div>
<iconify-icon className="text-crystal-cyan text-5xl mb-6 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]" icon="game-icons:crystal-growth"></iconify-icon>
<h3 className="font-bubble text-2xl text-white mb-3">Crystalline Clarity</h3>
<p className="text-gray-200 leading-relaxed font-semibold">
                        Infused with nano-emulsified psilocybin crystals grown in Vaduz Labs. Experience the visuals without the body load.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-all duration-500 scroll-fade-up mt-12 md:mt-0">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-alpine/30 rounded-full blur-[50px] group-hover:bg-emerald-alpine/50 transition-colors"></div>
<iconify-icon className="text-emerald-alpine text-5xl mb-6 drop-shadow-[0_0_10px_rgba(0,168,107,0.8)]" icon="game-icons:spotted-mushroom"></iconify-icon>
<h3 className="font-bubble text-2xl text-white mb-3">Alpine Foraged</h3>
<p className="text-gray-200 leading-relaxed font-semibold">
                        Sourced from the high-altitude forests of the Rätikon range. The terroir imparts a distinct, grounding energy.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-all duration-500 scroll-fade-up">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-deep-cocoa/50 rounded-full blur-[50px] group-hover:bg-sunset-orange/50 transition-colors"></div>
<iconify-icon className="text-sunset-orange text-5xl mb-6 drop-shadow-[0_0_10px_rgba(255,140,66,0.8)]" icon="game-icons:chocolate-bar"></iconify-icon>
<h3 className="font-bubble text-2xl text-white mb-3">Swiss Cocoa 72%</h3>
<p className="text-gray-200 leading-relaxed font-semibold">
                        A velvety blend of Swiss Dark Chocolate that melts instantly, carrying the active compounds straight to the bloodstream.
                    </p>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-pink/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center px-6 relative z-10">
<span className="text-crystal-cyan tracking-[0.4em] text-sm font-black uppercase mb-4 block animate-pulse">The Liechtenstein Method</span>
<h2 className="font-bubble text-5xl md:text-7xl text-white mb-8 drop-shadow-lg">From the Peaks <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-alpine to-crystal-cyan">To Your Pineal</span></h2>
<p className="text-xl text-white/90 font-semibold leading-relaxed">
                    We combine ancient alpine folklore with modern bio-hacking. Our chocolate isn't just a treat; it's a vehicle for consciousness expansion, wrapped in a flavor profile that tastes like a dream.
                </p>
</div>
</section>

<section className="py-20 border-t border-white/10 bg-black/40 backdrop-blur-lg" id="contact">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
<div className="text-left">
<h3 className="font-bubble text-3xl text-white mb-2">Ready to Ascend?</h3>
<p className="text-gray-400 text-sm">Join the waitlist for Batch #004.</p>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-electric-pink transition-colors text-white" href="#">
<iconify-icon icon="mdi:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-crystal-cyan transition-colors text-white" href="#">
<iconify-icon icon="mdi:twitter"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-alpine transition-colors text-white" href="#">
<iconify-icon icon="mdi:youtube"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-widest">
<span>Vaduz, Liechtenstein</span>
<span className="w-1 h-1 bg-gray-500 rounded-full"></span>
<span>© 2024 Alpine Glow</span>
</div>
</div>
</section>
</main>


    </>
  );
}
