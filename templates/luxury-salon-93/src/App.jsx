import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // Initialize Lucide Icons
        lucide.createIcons();

        // Three.js Setup
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild(renderer.domElement);

        // --- 1. Background Particles (Gold Dust) ---
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 800;
        const posArray = new Float32Array(particlesCount * 3);
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 12; 
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xD4AF37,
            transparent: true,
            opacity: 0.5,
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // --- 2. Advanced Custom Scissors (Based on JARGEM Reference) ---
        
        // Material: High polish gold with some roughness to catch light like engraved metal
        const goldMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xFFD700, 
            roughness: 0.15,
            metalness: 1.0,
            envMapIntensity: 1.0
        });

        // Blade Shape Generator
        function createBladeShape() {
            const shape = new THREE.Shape();
            shape.moveTo(0, 0); // Pivot Center
            // Top edge (Straight spine)
            shape.lineTo(0.15, 2.5); 
            // Tip
            shape.lineTo(0, 2.8);
            // Cutting edge (Curved)
            shape.quadraticCurveTo(-0.3, 1.0, -0.25, 0);
            shape.lineTo(0, 0);
            return shape;
        }

        const bladeShape = createBladeShape();
        const extrudeSettings = { depth: 0.05, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.01, bevelThickness: 0.01 };
        
        // 2a. Static Blade Group (Thumb side)
        const staticGroup = new THREE.Group();
        
        // Blade Geometry
        const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, extrudeSettings);
        const staticBlade = new THREE.Mesh(bladeGeo, goldMaterial);
        staticBlade.position.set(0, 0.5, 0);
        staticGroup.add(staticBlade);

        // Handle Shank (Curved tube)
        const staticHandleCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0.5, 0),
            new THREE.Vector3(0.1, -0.2, 0),
            new THREE.Vector3(-0.2, -1.0, 0),
            new THREE.Vector3(-0.5, -1.5, 0)
        ]);
        const staticHandleGeo = new THREE.TubeGeometry(staticHandleCurve, 20, 0.06, 8, false);
        const staticHandle = new THREE.Mesh(staticHandleGeo, goldMaterial);
        staticGroup.add(staticHandle);

        // Thumb Ring
        const ringGeo = new THREE.TorusGeometry(0.35, 0.06, 16, 32);
        const thumbRing = new THREE.Mesh(ringGeo, goldMaterial);
        thumbRing.position.set(-0.5, -1.8, 0);
        staticGroup.add(thumbRing);

        // 2b. Moving Blade Group (Finger side + Tang)
        const movingGroup = new THREE.Group();
        
        // Blade (Mirrored)
        const movingBlade = new THREE.Mesh(bladeGeo, goldMaterial);
        movingBlade.rotation.y = Math.PI; // Flip blade
        movingBlade.position.set(0, 0.5, 0.05); // Offset Z slightly to overlap
        movingGroup.add(movingBlade);

        // Finger Handle Shank (Curved higher for offset look)
        const movingHandleCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0.5, 0.05),
            new THREE.Vector3(-0.1, -0.2, 0.05),
            new THREE.Vector3(0.3, -1.0, 0.05),
            new THREE.Vector3(0.6, -1.4, 0.05)
        ]);
        const movingHandleGeo = new THREE.TubeGeometry(movingHandleCurve, 20, 0.06, 8, false);
        const movingHandle = new THREE.Mesh(movingHandleGeo, goldMaterial);
        movingGroup.add(movingHandle);

        // Finger Ring
        const fingerRing = new THREE.Mesh(ringGeo, goldMaterial);
        fingerRing.position.set(0.65, -1.7, 0.05);
        movingGroup.add(fingerRing);

        // Tang (The little finger rest hook)
        const tangCurve = new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(0.7, -1.4, 0.05),
            new THREE.Vector3(1.2, -1.5, 0.1),
            new THREE.Vector3(1.1, -1.8, 0.05)
        );
        const tangGeo = new THREE.TubeGeometry(tangCurve, 10, 0.03, 8, false);
        const tang = new THREE.Mesh(tangGeo, goldMaterial);
        movingGroup.add(tang);

        // "Bamboo" decorative segments on handles (Simulating the ornate look)
        function createBambooJoint(pos) {
            const joint = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.02, 16, 16), goldMaterial);
            joint.position.copy(pos);
            // Orient somewhat correctly - simplification
            return joint;
        }
        // Add some decorative rings on shanks
        staticGroup.add(createBambooJoint(new THREE.Vector3(0.05, -0.1, 0)));
        staticGroup.add(createBambooJoint(new THREE.Vector3(-0.15, -0.8, 0)));
        movingGroup.add(createBambooJoint(new THREE.Vector3(0.1, -0.6, 0.05)));
        movingGroup.add(createBambooJoint(new THREE.Vector3(0.45, -1.2, 0.05)));


        // 2c. Pivot Screw
        const screwHeadGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.15, 32);
        const screw = new THREE.Mesh(screwHeadGeo, goldMaterial);
        screw.rotation.x = Math.PI / 2;
        screw.position.set(0, 0.5, 0.025);
        
        // Center Jewel/Detail on screw
        const jewelGeo = new THREE.SphereGeometry(0.08, 16, 16);
        const jewel = new THREE.Mesh(jewelGeo, new THREE.MeshStandardMaterial({ color: 0xaa8800, metalness: 1, roughness: 0 }));
        jewel.position.set(0, 0.08, 0);
        screw.add(jewel);

        // Master Group
        const scissors = new THREE.Group();
        scissors.add(staticGroup);
        scissors.add(movingGroup);
        scissors.add(screw);

        // Orientation for Camera
        scissors.rotation.z = -Math.PI / 4;
        scissors.position.set(2, 0, 0);
        scissors.scale.set(1.5, 1.5, 1.5);
        
        scene.add(scissors);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);
        
        const mainLight = new THREE.DirectionalLight(0xffffff, 1);
        mainLight.position.set(5, 5, 5);
        scene.add(mainLight);

        const goldLight = new THREE.PointLight(0xD4AF37, 2, 10);
        goldLight.position.set(-2, 1, 2);
        scene.add(goldLight);

        const rimLight = new THREE.SpotLight(0x4455ff, 1); // Blueish rim light for contrast like image
        rimLight.position.set(0, 10, -5);
        rimLight.lookAt(0,0,0);
        scene.add(rimLight);

        camera.position.z = 6;

        // --- Animation Loop ---
        let time = 0;

        function animate() {
            requestAnimationFrame(animate);
            time += 0.02;

            // Background particles drift
            particlesMesh.rotation.y = time * 0.02;
            particlesMesh.rotation.x = time * 0.01;

            // Scissors Float
            scissors.position.y = Math.sin(time * 0.5) * 0.2;
            
            // Scissor Snipping Animation
            // Rotate moving blade around pivot (0, 0.5, 0)
            const snipAngle = (Math.sin(time * 3) + 1) * 0.2; // oscillate between 0 and 0.4 radians
            
            // We need to rotate around the pivot point. 
            // The geometry was built relative to origin, but pivot is at y=0.5
            // Easiest way is to offset rotation in the loop manually or use a pivot group.
            // Since our geometries are in local space where 0,0 is "center" but pivot is 0.5 up:
            
            // Reset rotation
            movingGroup.rotation.z = 0;
            staticGroup.rotation.z = 0;
            
            // Apply snip
            // Rotate around point (0, 0.5, 0)
            // Translate to pivot -> rotate -> translate back
            
            // Simple visual approximation: 
            movingGroup.position.set(0, 0.5, 0.05);
            movingGroup.rotation.z = -snipAngle; 
            movingGroup.position.x += Math.sin(snipAngle)*0.5; // slight correction
            movingGroup.position.y -= (1 - Math.cos(snipAngle))*0.5;
            
            // Actually, simpler approach:
            // Since we built geometry with (0,0) at bottom, but pivot is at y=0.5
            // Let's just rotate the whole group slightly
            
            // Better math:
            movingGroup.rotation.z = -snipAngle; 
            // Correct position drift because origin of mesh isn't pivot
            // Pivot is at (0, 0.5, 0). 
            const px = 0, py = 0.5;
            const x = 0, y = 0; // Current pos
            const theta = -snipAngle;
            
            // Rotate (0,0) around (0, 0.5)
            // x' = px + (x-px)cos - (y-py)sin
            // y' = py + (x-px)sin + (y-py)cos
            
            const newX = px + (0 - px)*Math.cos(theta) - (0 - py)*Math.sin(theta);
            const newY = py + (0 - px)*Math.sin(theta) + (0 - py)*Math.cos(theta);
            
            movingGroup.position.set(newX, newY, 0.05);

            // Rotate entire scissor object slowly to show off 3D
            scissors.rotation.y = Math.sin(time * 0.3) * 0.3;

            // Mouse interaction parallax
            const targetX = (mouseX * 0.5);
            const targetY = (-mouseY * 0.5);
            
            scissors.rotation.x += (targetY * 0.5 - scissors.rotation.x) * 0.05;
            scissors.rotation.y += (targetX * 0.5 - scissors.rotation.y) * 0.05;

            renderer.render(scene, camera);
        }

        let mouseX = 0;
        let mouseY = 0;
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = (event.clientY / window.innerHeight) * 2 - 1;
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HrR4RrsSf8RcKjStWKwR"></div></div>

<div id="canvas-container"><canvas height="1920" style={{display: 'block', width: '384px', height: '683px'}} width="1080"></canvas></div>

<aside className="fixed left-0 top-0 h-full w-20 z-50 bg-black/80 backdrop-blur-xl border-r border-white/5 hidden md:flex flex-col items-center py-8 justify-between transition-all duration-300">

<a className="w-10 h-10 border border-[#D4AF37]/50 rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-lg hover:bg-[#D4AF37]/10 transition-colors font-serif" href="#">
            V
        </a>

<div className="flex flex-col gap-8">
<a className="sidebar-item p-3 text-neutral-500 transition-all relative group" href="#hero" title="Home">
<svg className="lucide lucide-home w-6 h-6 transition-transform" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="absolute left-14 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">Home</span>
</a>
<a className="sidebar-item p-3 text-neutral-500 transition-all relative group" href="#ai-consultant" title="AI Stylist">
<svg className="lucide lucide-wand-2 w-6 h-6 transition-transform" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span className="absolute left-14 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">AI Architect</span>
</a>
<a className="sidebar-item p-3 text-neutral-500 transition-all relative group" href="#collection" title="Collection">
<svg className="lucide lucide-image w-6 h-6 transition-transform" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span className="absolute left-14 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">Collection</span>
</a>
<a className="sidebar-item p-3 text-neutral-500 transition-all relative group" href="#booking" title="Booking">
<svg className="lucide lucide-calendar w-6 h-6 transition-transform" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="absolute left-14 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">Book Visit</span>
</a>
</div>

<div className="flex flex-col gap-4">
<a className="sidebar-item p-3 text-neutral-500 transition-all" href="#">
<svg className="lucide lucide-user w-6 h-6 transition-transform" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</a>
</div>
</aside>

<nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5 md:hidden px-6 py-4 flex justify-between items-center">
<span className="text-gold font-semibold tracking-tight">VANDIT'S</span>
<button className="text-white"><svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button>
</nav>

<main className="md:ml-20 relative">

<section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 pt-20 overflow-hidden" id="hero">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>
<div className="z-10 text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-subtle bg-black/40 backdrop-blur-sm">
<svg className="lucide lucide-crown w-3 h-3 text-gold-flat" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="text-xs text-[#D4AF37] tracking-widest font-medium uppercase">Ultra Luxury Experience</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter font-light leading-none">
<span className="text-white">Vandit's</span><br/>
<span className="text-gold italic font-serif">Hairport.</span>
</h1>
<p className="text-neutral-400 font-light text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                    Where artificial intelligence meets artisanal mastery. Experience the 3D evolution of hair architecture in an environment draped in gold.
                </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
<a className="hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 md:w-auto flex items-center justify-center gap-2 group text-sm font-semibold text-black tracking-wide w-full rounded-sm pt-3 pr-8 pb-3 pl-8" href="#ai-consultant">
<svg className="lucide lucide-wand-2 w-4 h-4 text-black group-hover:rotate-12 transition-transform" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                        Try AI Stylist
                    </a>
<a className="px-8 py-3 glass-panel border-gold-subtle text-white text-sm font-medium tracking-wide rounded-sm hover:border-[#D4AF37] transition-colors w-full md:w-auto" href="#collection">
                        View Styles
                    </a>
</div>
</div>
<div className="absolute bottom-10 w-full flex justify-center text-[#D4AF37]/50 text-[10px] tracking-[0.3em] animate-pulse">
                SCROLL TO EXPLORE
            </div>
</section>

<section className="py-24 px-6 bg-[#080808] border-t border-white/5 relative overflow-hidden" id="ai-consultant">
<div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-3">AI Architect</h2>
<h3 className="text-4xl md:text-5xl tracking-tight font-light text-white">Precision Face Mapping</h3>
</div>
<p className="text-neutral-500 text-sm max-w-sm text-right md:text-left">
                        Our proprietary AI analyzes your facial geometry, bone structure, and jawline to engineer the mathematically perfect cut for you.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[600px]">

<div className="relative rounded-2xl border border-white/10 bg-black overflow-hidden group">
<div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-neutral-900/50 backdrop-blur-sm transition-opacity duration-500 hover:bg-neutral-900/30">
<label className="cursor-pointer flex flex-col items-center gap-4 p-12 border border-dashed border-[#D4AF37]/30 rounded-xl hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all group-hover:scale-105">
<svg className="lucide lucide-scan-face w-12 h-12 text-[#D4AF37]" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
<span className="text-sm font-medium text-white">Upload Portrait</span>
<span className="text-xs text-neutral-500">AI Analysis requires clear lighting</span>
<input className="hidden" type="file"/>
</label>
</div>
<img alt="Face Model" className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="scan-line z-10"></div>
<div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#D4AF37] rounded-full blur-[2px] z-10"></div>
<div className="absolute top-[45%] left-[40%] w-2 h-2 border border-[#D4AF37] rounded-full z-10"></div>
<div className="absolute top-[45%] left-[60%] w-2 h-2 border border-[#D4AF37] rounded-full z-10"></div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col border-gold-subtle relative">
<div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-mono text-[#D4AF37]">VANDIT_AI_CORE_v2.0</span>
</div>
<div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
<div className="flex gap-4">
<div className="w-8 h-8 rounded bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-bot w-5 h-5 text-[#D4AF37]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="space-y-2">
<p className="text-sm text-neutral-300 bg-white/5 p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg">
                                        Welcome. Please upload a clear portrait. I will analyze your face shape (Oval, Square, Diamond) to recommend the "Golden Ratio" cut.
                                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-bot w-5 h-5 text-[#D4AF37]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="space-y-3 w-full">
<p className="text-xs text-[#D4AF37] uppercase tracking-wider">Analysis Complete</p>
<div className="bg-gradient-to-br from-neutral-900 to-black border border-[#D4AF37]/30 p-4 rounded-lg">
<div className="flex justify-between items-center mb-2">
<span className="text-white text-sm font-medium">Face Shape: Diamond</span>
<span className="text-[#D4AF37] text-xs">98% Match</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full mb-4">
<div className="h-full w-[98%] bg-[#D4AF37] rounded-full"></div>
</div>
<p className="text-xs text-neutral-400 mb-3">Recommendation: A chin-length textured bob will accentuate your cheekbones while softening the jawline.</p>
<button className="w-full py-2 border border-[#D4AF37]/50 text-[#D4AF37] text-xs rounded hover:bg-[#D4AF37] hover:text-black transition-colors">
                                            View 3D Simulation
                                        </button>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
<input className="flex-1 bg-transparent border-none text-sm text-white focus:ring-0 placeholder-neutral-600 font-light focus:outline-none" placeholder="Ask about maintenance..." type="text"/>
<button className="text-[#D4AF37] hover:text-white transition-colors"><svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black relative" id="collection">
<div className="max-w-7xl mx-auto space-y-12">
<div className="text-center space-y-4">
<h2 className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">Masterpieces</h2>
<h3 className="text-4xl text-white font-light">The Gold Collection</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] rounded-sm mb-4">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
<img alt="Hair Style" className="object-cover w-full h-full transform group-hover:scale-105 transition duration-1000 saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-[#D4AF37] text-xs tracking-wider block mb-1">THE BOB</span>
<span className="text-white text-xl font-light">Sharp &amp; Sleek</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] rounded-sm mb-4">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
<img alt="Hair Style" className="object-cover w-full h-full transform group-hover:scale-105 transition duration-1000 saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-[#D4AF37] text-xs tracking-wider block mb-1">THE WAVES</span>
<span className="text-white text-xl font-light">Liquid Gold</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] rounded-sm mb-4">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
<img alt="Hair Style" className="object-cover w-full h-full transform group-hover:scale-105 transition duration-1000 saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-[#D4AF37] text-xs tracking-wider block mb-1">THE PIXIE</span>
<span className="text-white text-xl font-light">Architectural</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#090909] border-t border-white/5" id="booking">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-4">Reservations</h2>
<h3 className="text-4xl md:text-5xl text-white font-light">Secure Your Session</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 glass-panel p-8 rounded-2xl border-gold-subtle">

<div className="md:col-span-2 space-y-6">
<div className="flex justify-between items-center text-white">
<span className="font-medium">October 2024</span>
<div className="flex gap-2">
<button className="p-1 hover:text-[#D4AF37]"><svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-1 hover:text-[#D4AF37]"><svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
<div className="text-neutral-600 text-xs">M</div>
<div className="text-neutral-600 text-xs">T</div>
<div className="text-neutral-600 text-xs">W</div>
<div className="text-neutral-600 text-xs">T</div>
<div className="text-neutral-600 text-xs">F</div>
<div className="text-neutral-600 text-xs">S</div>
<div className="text-neutral-600 text-xs">S</div>
</div>
<div className="grid grid-cols-7 gap-3 text-sm">
<div className="aspect-square"></div><div className="aspect-square"></div>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">1</button>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">2</button>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">3</button>
<button className="aspect-square rounded-full text-white bg-white/5 border border-white/10">4</button>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">5</button>
<button className="aspect-square rounded-full bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">6</button>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">7</button>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">8</button>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">9</button>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">10</button>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">11</button>
<button className="aspect-square rounded-full text-neutral-500 hover:text-white transition-colors">12</button>
</div>
</div>

<div className="space-y-6 pl-0 md:pl-8 border-l border-white/5">
<h4 className="text-white text-sm font-medium">Available Slots</h4>
<div className="grid grid-cols-2 gap-2">
<button className="py-2 px-3 rounded border border-white/10 text-xs text-neutral-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">10:00 AM</button>
<button className="py-2 px-3 rounded border border-[#D4AF37] bg-[#D4AF37]/10 text-xs text-[#D4AF37] font-medium">11:30 AM</button>
<button className="py-2 px-3 rounded border border-white/10 text-xs text-neutral-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">02:00 PM</button>
<button className="py-2 px-3 rounded border border-white/10 text-xs text-neutral-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">04:30 PM</button>
</div>
<div className="pt-8 space-y-3">
<div className="flex justify-between text-xs text-neutral-400">
<span>Service</span>
<span className="text-white">Gold Tier Cut</span>
</div>
<div className="flex justify-between text-xs text-neutral-400">
<span>Stylist</span>
<span className="text-white">Vandit</span>
</div>
<div className="flex justify-between text-sm text-white font-medium pt-2 border-t border-white/10">
<span>Total</span>
<span className="text-[#D4AF37]">$250.00</span>
</div>
<button className="w-full py-3 mt-2 bg-gold-gradient text-black font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity">
                                Confirm Booking
                            </button>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/10 bg-black">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-neutral-500">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
<span>VANDIT'S HAIRPORT © 2024</span>
</div>
<div className="flex gap-8">
<a className="hover:text-[#D4AF37]" href="#">Instagram</a>
<a className="hover:text-[#D4AF37]" href="#">Twitter</a>
<a className="hover:text-[#D4AF37]" href="#">Contact</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
