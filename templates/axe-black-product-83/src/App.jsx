import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // --------------------------------------------------------
        // THREE.JS SETUP
        // --------------------------------------------------------
        
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        // Fog for that "atmospheric void" look
        scene.fog = new THREE.FogExp2(0x050505, 0.05);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 8);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild(renderer.domElement);

        // --------------------------------------------------------
        // LIGHTING
        // --------------------------------------------------------
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        // Main Spotlight (Front-Left)
        const spotLight = new THREE.SpotLight(0xffffff, 2);
        spotLight.position.set(5, 10, 10);
        spotLight.angle = 0.5;
        spotLight.penumbra = 1;
        spotLight.decay = 2;
        spotLight.distance = 50;
        scene.add(spotLight);

        // Rim Light (Back-Right - Cool Blue Tint for "Frozen" vibe)
        const rimLight = new THREE.SpotLight(0xaaccff, 4);
        rimLight.position.set(-5, 5, -5);
        rimLight.lookAt(0,0,0);
        scene.add(rimLight);

        // Rim Light (Bottom - Warm tint for "Cedarwood")
        const bottomLight = new THREE.PointLight(0xffaa88, 1);
        bottomLight.position.set(5, -5, 0);
        scene.add(bottomLight);

        // --------------------------------------------------------
        // TEXTURE GENERATION (Procedural Label)
        // --------------------------------------------------------
        
        function createLabelTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 1024;
            canvas.height = 1024;
            const ctx = canvas.getContext('2d');

            // Background
            ctx.fillStyle = '#111111';
            ctx.fillRect(0, 0, 1024, 1024);

            // Add some noise/texture to background
            for(let i=0; i<5000; i++) {
                ctx.fillStyle = `rgba(255,255,255, ${Math.random() * 0.05})`;
                ctx.fillRect(Math.random() * 1024, Math.random() * 1024, 2, 2);
            }

            // AXE Logo
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 180px sans-serif'; // Approximating the font
            ctx.textAlign = 'center';
            ctx.letterSpacing = '-5px';
            ctx.fillText('AXE', 512, 350);

            // "BLACK" Text
            ctx.font = '100px sans-serif';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText('BLACK', 512, 480);

            // "FROZEN PEAR & CEDARWOOD"
            ctx.font = '24px sans-serif';
            ctx.fillStyle = '#CCCCCC';
            ctx.fillText('FROZEN PEAR &', 512, 540);
            ctx.fillText('CEDARWOOD SCENT', 512, 570);

            // Graphic element (The crescent splash)
            ctx.beginPath();
            ctx.arc(650, 600, 150, 1.5 * Math.PI, 0.5 * Math.PI);
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 15;
            ctx.lineCap = 'round';
            ctx.stroke();
            
            // Spray particles graphic
            for(let i=0; i<20; i++) {
                ctx.beginPath();
                ctx.arc(600 + Math.random()*100, 500 + Math.random()*200, Math.random()*4, 0, Math.PI*2);
                ctx.fillStyle = '#fff';
                ctx.fill();
            }

            // 48H Text
            ctx.font = 'bold 80px sans-serif';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'left';
            ctx.fillText('48H', 250, 800);
            ctx.font = '40px sans-serif';
            ctx.fillText('HIGH DEFINITION', 250, 850);
            ctx.font = 'bold 80px sans-serif';
            ctx.fillText('SCENT', 250, 930);

            const texture = new THREE.CanvasTexture(canvas);
            texture.anisotropy = 16;
            return texture;
        }

        // --------------------------------------------------------
        // MESH CREATION (The Can)
        // --------------------------------------------------------

        const geometry = new THREE.CylinderGeometry(1.4, 1.4, 6, 64);
        // Slightly round the top/bottom edges visibly (simple approach: another slightly smaller cylinder or torus)
        // For performance, sticking to standard cylinder with good mapping.

        const material = new THREE.MeshStandardMaterial({ 
            map: createLabelTexture(),
            roughness: 0.4,
            metalness: 0.3,
            color: 0xffffff
        });

        const can = new THREE.Mesh(geometry, material);
        scene.add(can);

        // Cap (Black plastic top)
        const capGeo = new THREE.CylinderGeometry(1.38, 1.4, 1.5, 64);
        const capMat = new THREE.MeshStandardMaterial({ 
            color: 0x050505, 
            roughness: 0.2, 
            metalness: 0.1 
        });
        const cap = new THREE.Mesh(capGeo, capMat);
        cap.position.y = 3.75;
        can.add(cap); // Attach to can so they move together

        // Particle System for "Scent" visualization
        const particleCount = 200;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(particleCount * 3);
        
        for(let i=0; i<particleCount * 3; i++) {
            pPos[i] = (Math.random() - 0.5) * 10;
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({
            color: 0x00ffcc,
            size: 0.05,
            transparent: true,
            opacity: 0
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);


        // --------------------------------------------------------
        // INTERACTIVITY: DRAG TO ROTATE
        // --------------------------------------------------------
        
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let rotationVelocity = { x: 0, y: 0 };

        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
            container.style.cursor = 'grabbing';
        });

        container.addEventListener('touchstart', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }, {passive: false});

        window.addEventListener('mouseup', () => {
            isDragging = false;
            container.style.cursor = 'grab';
        });
        
        window.addEventListener('touchend', () => {
            isDragging = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaMove = {
                    x: e.clientX - previousMousePosition.x,
                    y: e.clientY - previousMousePosition.y
                };

                can.rotation.y += deltaMove.x * 0.005;
                can.rotation.x += deltaMove.y * 0.005;
                
                // Limit X rotation
                can.rotation.x = Math.max(-0.5, Math.min(0.5, can.rotation.x));

                rotationVelocity = {
                    x: deltaMove.x * 0.001,
                    y: deltaMove.y * 0.001
                };

                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });

        // Touch support for rotation
        window.addEventListener('touchmove', (e) => {
            if (isDragging) {
                const deltaMove = {
                    x: e.touches[0].clientX - previousMousePosition.x,
                    y: e.touches[0].clientY - previousMousePosition.y
                };
                can.rotation.y += deltaMove.x * 0.005;
                previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        }, {passive: false});

        // --------------------------------------------------------
        // GSAP SCROLL ANIMATIONS
        // --------------------------------------------------------
        
        gsap.registerPlugin(ScrollTrigger);

        // Initial State
        can.rotation.y = -0.5;
        can.position.y = -1;

        // 1. Move to Scent Section (Can moves left, text appears)
        gsap.to(can.position, {
            x: -2.5,
            y: 0,
            scrollTrigger: {
                trigger: "#scent",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        });
        
        gsap.to(can.rotation, {
            y: 0.5,
            scrollTrigger: {
                trigger: "#scent",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        });

        // Fade in scent card
        gsap.to("#scent-card", {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: "#scent",
                start: "top 70%",
                end: "center center",
                scrub: false,
                toggleActions: "play none none reverse"
            }
        });

        // 2. Move to Tech Section (Zoom in, show particles)
        const techTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#tech",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        });

        techTimeline.to(can.position, { x: 0, y: 0, z: 4 }) // Zoom
                    .to(can.rotation, { x: 0.2, y: 6.28 }, "<") // Spin
                    .to(pMat, { opacity: 0.8 }, "<"); // Show particles

        // Animate particles
        gsap.to(particles.rotation, {
            y: 1,
            scrollTrigger: {
                trigger: "#tech",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5
            }
        });

        // 3. Move to Features/Footer (Reset)
        gsap.to(can.position, {
            y: 1,
            z: 0,
            scrollTrigger: {
                trigger: "#features",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        });

        gsap.to(pMat, {
            opacity: 0,
            scrollTrigger: {
                trigger: "#features",
                start: "top bottom",
                end: "20% center",
                scrub: true
            }
        });

        // --------------------------------------------------------
        // RENDER LOOP & IDLE ANIMATION
        // --------------------------------------------------------
        
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);

            const time = clock.getElapsedTime();

            // Idle "Breathing" / Float animation when not dragging
            if (!isDragging) {
                // Decay velocity
                rotationVelocity.x *= 0.95;
                rotationVelocity.y *= 0.95;
                can.rotation.y += rotationVelocity.x;
                can.rotation.x += rotationVelocity.y;

                // Gentle float
                can.position.y += Math.sin(time) * 0.002;
                // Gentle rotation
                can.rotation.y += 0.002;
            }

            // Particle movement
            const positions = particles.geometry.attributes.position.array;
            for(let i=1; i<positions.length; i+=3) {
                positions[i] += Math.sin(time + positions[i-1]) * 0.02;
                if(positions[i] > 5) positions[i] = -5;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        }

        animate();

        // --------------------------------------------------------
        // RESPONSIVENESS
        // --------------------------------------------------------
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            // Adjust can scale/pos for mobile
            if(window.innerWidth < 768) {
                can.scale.set(0.7, 0.7, 0.7);
            } else {
                can.scale.set(1, 1, 1);
            }
        });

        // Initial mobile check
        if(window.innerWidth < 768) {
            can.scale.set(0.7, 0.7, 0.7);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-grab-custom" id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tighter">AXE</span>
<span className="text-sm font-medium text-zinc-400 tracking-wide border-l border-zinc-600 pl-2 ml-1">BLACK</span>
</div>
<button className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105">
<span>BUY NOW</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="shopping-bag"></i>
</button>
</nav>

<main className="relative z-10 w-full">

<section className="h-screen w-full flex flex-col justify-center items-start px-6 md:px-24 pointer-events-none" id="hero">
<div className="max-w-xl space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300 uppercase tracking-widest">New Edition</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 pb-2">
                    FROZEN<br/>PEAR &amp;<br/>CEDARWOOD.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-md font-light leading-relaxed">
                    A subtle, refined fragrance for the modern man. Experience the collision of crisp fruit and warm wood.
                </p>
<div className="pt-8 flex items-center gap-4 pointer-events-auto">
<div className="flex items-center gap-2 text-zinc-500 text-sm">
<i className="w-5 h-5" data-lucide="move-3d"></i>
<span>Drag to rotate</span>
</div>
<div className="h-px w-12 bg-zinc-800"></div>
<div className="flex items-center gap-2 text-zinc-500 text-sm">
<i className="w-5 h-5" data-lucide="mouse-pointer-2"></i>
<span>Scroll to explore</span>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-end px-6 md:px-24 py-24 pointer-events-none" id="scent">
<div className="max-w-lg space-y-8 glass-panel p-10 rounded-2xl pointer-events-auto opacity-0 translate-y-10 transition-all duration-700" id="scent-card">
<h2 className="text-4xl font-semibold tracking-tighter">Olfactive Structure</h2>
<div className="space-y-6">
<div className="group">
<div className="flex justify-between items-center mb-2">
<span className="text-lg text-white font-medium">Top Notes</span>
<i className="w-5 h-5 text-zinc-400" data-lucide="snowflake"></i>
</div>
<p className="text-zinc-400 text-lg">Crisp Frozen Pear, Watermelon, Bergamot</p>
<div className="h-px w-full bg-zinc-800 mt-4 group-hover:bg-white/30 transition-colors"></div>
</div>
<div className="group">
<div className="flex justify-between items-center mb-2">
<span className="text-lg text-white font-medium">Heart Notes</span>
<i className="w-5 h-5 text-zinc-400" data-lucide="wind"></i>
</div>
<p className="text-zinc-400 text-lg">Spicy Cardamom, Freesia</p>
<div className="h-px w-full bg-zinc-800 mt-4 group-hover:bg-white/30 transition-colors"></div>
</div>
<div className="group">
<div className="flex justify-between items-center mb-2">
<span className="text-lg text-white font-medium">Base Notes</span>
<i className="w-5 h-5 text-zinc-400" data-lucide="trees"></i>
</div>
<p className="text-zinc-400 text-lg">Warm Cedarwood, Patchouli, Musk</p>
<div className="h-px w-full bg-zinc-800 mt-4 group-hover:bg-white/30 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 pointer-events-none" id="tech">
<div className="relative z-20 space-y-4">
<div className="inline-block border border-zinc-700 bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
<span className="text-xs font-medium tracking-widest text-zinc-300">TECHNOLOGY</span>
</div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-glow">48H HIGH DEFINITION</h2>
<h3 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-600">SCENT PROTECTION</h3>
<p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Powered by zinc-fighting technology. Masking odor is past. Stopping it is the future.
                </p>
</div>
</section>

<section className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-24 px-6 border-t border-zinc-900" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-24">
<div className="glass-panel p-8 rounded-xl flex flex-col items-start gap-4 hover:bg-white/5 transition-colors">
<div className="p-3 bg-white/10 rounded-lg">
<i className="w-6 h-6 text-white" data-lucide="ban"></i>
</div>
<h3 className="text-xl font-medium">Aluminum Free</h3>
<p className="text-zinc-400">Formulated without aluminum for a lighter, breathable feel on skin.</p>
</div>
<div className="glass-panel p-8 rounded-xl flex flex-col items-start gap-4 hover:bg-white/5 transition-colors">
<div className="p-3 bg-white/10 rounded-lg">
<i className="w-6 h-6 text-white" data-lucide="droplets"></i>
</div>
<h3 className="text-xl font-medium">Clear Formula</h3>
<p className="text-zinc-400">Anti-marks protection designed to keep your black shirts black and white shirts white.</p>
</div>
<div className="glass-panel p-8 rounded-xl flex flex-col items-start gap-4 hover:bg-white/5 transition-colors">
<div className="p-3 bg-white/10 rounded-lg">
<i className="w-6 h-6 text-white" data-lucide="recycle"></i>
</div>
<h3 className="text-xl font-medium">Infinitely Recyclable</h3>
<p className="text-zinc-400">Made with 100% infinitely recyclable metal. Please recycle when empty.</p>
</div>
</div>
<div className="text-center space-y-8 z-10 relative">
<h2 className="text-6xl md:text-9xl font-semibold tracking-tighter text-zinc-800">AXE BLACK</h2>
<button className="relative group overflow-hidden bg-white text-black px-12 py-5 rounded-full text-lg font-semibold tracking-tight transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
<span className="relative z-10 flex items-center gap-2">
                        ADD TO BAG - $5.99
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</button>
<p className="text-zinc-500 text-sm mt-4">Free shipping on orders over $25</p>
</div>
</section>

<footer className="w-full border-t border-zinc-900 py-12 px-6 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
<p>© 2024 AXE. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</footer>
</main>


    </>
  );
}
