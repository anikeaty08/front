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
display: ['Syne', 'sans-serif'],
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
purple: '#A855F7',
pink: '#E879D9',
deep: '#150A1F', // Deep purple, almost black but warmer
teal: '#1A4D4D',
surface: '#2A1B3D',
}
},
animation: {
'aurora': 'aurora-shift 20s ease-in-out infinite',
'float': 'float 6s ease-in-out infinite',
'wave': 'wave-slide 3s ease-in-out infinite',
'glow': 'glow-pulse 4s ease-in-out infinite',
}
}
}
}



        // --- ICONS ---
        lucide.createIcons();

        // --- CURSOR LOGIC ---
        const cursor = document.getElementById('cursor');
        const hoverTargets = document.querySelectorAll('.cursor-none-target, button, a');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Mouse track for cards
            const cards = document.querySelectorAll('.glass-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            target.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });

        // --- SCROLL LOGIC ---
        const track = document.getElementById('cardTrack');
        document.getElementById('scrollLeft').addEventListener('click', () => {
            track.scrollBy({ left: -400, behavior: 'smooth' });
        });
        document.getElementById('scrollRight').addEventListener('click', () => {
            track.scrollBy({ left: 400, behavior: 'smooth' });
        });

        // --- THREE.JS ROBOT ARM (PROCEDURAL WIREFRAME) ---
        const container = document.getElementById('canvas-container');
        
        // Scene Setup
        const scene = new THREE.Scene();
        // No fog, let the background handle depth
        
        const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(20, 15, 20);
        camera.lookAt(0, 3, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Materials
        const wireframeMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x2D6A6A, // Brand Teal
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        
        const jointMaterial = new THREE.MeshBasicMaterial({
            color: 0xA855F7, // Brand Purple Highlights
            wireframe: true,
            transparent: true,
            opacity: 0.4
        });

        // Robot Group
        const robot = new THREE.Group();
        scene.add(robot);

        // 1. Base
        const baseGeo = new THREE.CylinderGeometry(4, 5, 1, 16);
        const base = new THREE.Mesh(baseGeo, wireframeMaterial);
        base.position.y = 0.5;
        robot.add(base);

        const baseTopGeo = new THREE.CylinderGeometry(3, 4, 1.5, 16);
        const baseTop = new THREE.Mesh(baseTopGeo, wireframeMaterial);
        baseTop.position.y = 1.5;
        robot.add(baseTop);

        // 2. Swivel Joint (Shoulder)
        const shoulderGroup = new THREE.Group();
        shoulderGroup.position.y = 2.5;
        robot.add(shoulderGroup);

        const shoulderGeo = new THREE.BoxGeometry(3, 3, 3);
        const shoulder = new THREE.Mesh(shoulderGeo, wireframeMaterial);
        shoulderGroup.add(shoulder);

        // 3. Lower Arm
        const lowerArmGroup = new THREE.Group();
        lowerArmGroup.position.y = 1;
        lowerArmGroup.position.x = 0.5;
        shoulderGroup.add(lowerArmGroup);

        // Arm Pivot
        const pivotGeo = new THREE.CylinderGeometry(1, 1, 4, 12);
        const pivot = new THREE.Mesh(pivotGeo, jointMaterial);
        pivot.rotation.x = Math.PI / 2;
        lowerArmGroup.add(pivot);

        // The Arm Shaft
        const arm1Length = 8;
        const arm1Geo = new THREE.BoxGeometry(1.5, arm1Length, 1.5);
        const arm1 = new THREE.Mesh(arm1Geo, wireframeMaterial);
        arm1.position.y = arm1Length / 2;
        // Tilt the arm
        arm1.rotation.z = -0.3;
        arm1.position.x = 1;
        lowerArmGroup.add(arm1);

        // 4. Upper Arm (Elbow)
        const elbowGroup = new THREE.Group();
        // Position at top of arm1 (trig approx)
        elbowGroup.position.x = 1 + (Math.sin(0.3) * arm1Length);
        elbowGroup.position.y = (Math.cos(0.3) * arm1Length); 
        lowerArmGroup.add(elbowGroup);

        const elbowJoint = new THREE.Mesh(pivotGeo, jointMaterial);
        elbowJoint.rotation.x = Math.PI / 2;
        elbowGroup.add(elbowJoint);

        const arm2Length = 6;
        const arm2Geo = new THREE.BoxGeometry(1.2, arm2Length, 1.2);
        const arm2 = new THREE.Mesh(arm2Geo, wireframeMaterial);
        arm2.position.y = arm2Length / 2;
        arm2.rotation.z = 1.2; // Bend forward
        arm2.position.x = 1;
        elbowGroup.add(arm2);

        // 5. Wrist & Claw
        const wristGroup = new THREE.Group();
        // Calculate end of arm2
        const arm2X = 1 - (Math.sin(1.2) * arm2Length);
        const arm2Y = (Math.cos(1.2) * arm2Length);
        wristGroup.position.set(arm2X, arm2Y, 0);
        wristGroup.rotation.z = -0.5; // Wrist angle
        elbowGroup.add(wristGroup);

        const wristGeo = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 10);
        const wrist = new THREE.Mesh(wristGeo, jointMaterial);
        wrist.rotation.z = Math.PI / 2;
        wristGroup.add(wrist);

        // Claw
        const clawGroup = new THREE.Group();
        clawGroup.position.x = 1;
        wristGroup.add(clawGroup);

        const clawBase = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2, 0.5), wireframeMaterial);
        clawGroup.add(clawBase);
        
        const finger1 = new THREE.Mesh(new THREE.BoxGeometry(2, 0.2, 0.2), jointMaterial);
        finger1.position.y = 0.8;
        finger1.position.x = 1;
        finger1.rotation.z = 0.2;
        clawGroup.add(finger1);

        const finger2 = new THREE.Mesh(new THREE.BoxGeometry(2, 0.2, 0.2), jointMaterial);
        finger2.position.y = -0.8;
        finger2.position.x = 1;
        finger2.rotation.z = -0.2;
        clawGroup.add(finger2);

        // Animation Vars
        let time = 0;

        function animate() {
            requestAnimationFrame(animate);
            time += 0.005;

            // Slow global rotation (Y-axis) - 40s full rotation approx
            robot.rotation.y = time * 0.2;

            // Subtle breathing animation for joints
            lowerArmGroup.rotation.z = Math.sin(time) * 0.05;
            elbowGroup.rotation.z = Math.cos(time * 0.8) * 0.05;
            
            // Hover effect
            robot.position.y = -2 + Math.sin(time * 0.5) * 0.2;

            renderer.render(scene, camera);
        }

        animate();

        // Responsive handling
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            // Move robot based on screen size (Right side on desktop, center/top on mobile)
            if (window.innerWidth < 768) {
                robot.position.set(0, 2, 0);
                robot.scale.set(0.6, 0.6, 0.6);
            } else {
                robot.position.set(5, -2, 0);
                robot.scale.set(1, 1, 1);
            }
        }
        
        window.addEventListener('resize', onWindowResize);
        onWindowResize(); // Initial call

    
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
      

<div className="custom-cursor hidden md:block" id="cursor"></div>

<div className="aurora-container"></div>
<div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen transition-opacity duration-1000" id="canvas-container"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex items-center justify-between fade-in-up delay-100">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(232,121,217,0.6)] transition-shadow duration-300">
                V
            </div>
<div className="flex flex-col">
<span className="font-display font-bold tracking-tight text-white leading-none">VELDBOOM</span>
<span className="font-mono text-[10px] tracking-[0.2em] text-brand-pink/80 leading-none mt-1">STUDIOS</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-xl">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest" href="#">Vision</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest" href="#">Process</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest" href="#">Contact</a>
</div>
<button className="relative group p-2">
<div className="absolute inset-0 bg-brand-purple/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-6 h-6 text-white relative z-10" data-lucide="menu"></i>
</button>
</nav>

<main className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1600px] mx-auto px-6 md:px-12 h-full pt-20 pb-10">

<div className="mb-12 md:mb-16 relative z-20 max-w-4xl">
<div className="overflow-hidden">
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-velvet mb-6 fade-in-up delay-300">
                    Imagine <br/>
<span className="text-gradient-brand">Engineering.</span>
</h1>
</div>
<p className="font-light text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed fade-in-up delay-500 pl-2 border-l-2 border-brand-purple/30">
                Precision manufacturing meets digital artistry. <br className="hidden md:block"/>
                Select your pathway to begin the creation process.
            </p>
</div>

<div className="w-full relative fade-in-up delay-700">

<div className="absolute -top-12 right-0 hidden md:flex gap-2">
<button className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors" id="scrollLeft"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors" id="scrollRight"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
<div className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-20 pt-10 px-2 items-center" id="cardTrack">

<div className="glass-card flex-shrink-0 snap-center w-[85vw] md:w-[400px] h-[500px] flex flex-col justify-between p-8 group cursor-none-target" style={{'--card-glow': 'rgba(168, 85, 247, 0.4)', '--card-accent': '#A855F7'}}>
<div className="card-wave"></div>
<div>
<div className="w-12 h-12 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-white transition-all duration-500">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</div>
<h3 className="font-display text-3xl text-white font-bold mb-2">Bestellen</h3>
<p className="text-sm font-mono text-brand-purple mb-4">CATALOG_ACCESS_V1</p>
<p className="text-gray-400 font-light leading-relaxed">
                            Access our curated library of premium artifacts. Ready to ship, precision printed, hand-finished.
                        </p>
</div>
<button className="btn-glass w-full py-4 rounded-xl text-white font-medium text-sm tracking-wide uppercase flex items-center justify-between px-6 group-hover:border-brand-purple/50 transition-colors">
<span>Browse Store</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="glass-card flex-shrink-0 snap-center w-[85vw] md:w-[400px] h-[500px] flex flex-col justify-between p-8 group cursor-none-target" style={{'--card-glow': 'rgba(232, 121, 217, 0.4)', '--card-accent': '#E879D9'}}>
<div className="card-wave"></div>
<div>
<div className="w-12 h-12 rounded-2xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink mb-6 group-hover:bg-brand-pink group-hover:text-white transition-all duration-500">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="font-display text-3xl text-white font-bold mb-2">Investeerder</h3>
<p className="text-sm font-mono text-brand-pink mb-4">PARTNER_PORTAL_ALPHA</p>
<p className="text-gray-400 font-light leading-relaxed">
                            Discover the business architecture behind the future of distributed manufacturing.
                        </p>
</div>
<button className="btn-glass w-full py-4 rounded-xl text-white font-medium text-sm tracking-wide uppercase flex items-center justify-between px-6 group-hover:border-brand-pink/50 transition-colors">
<span>View Pitch</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="glass-card flex-shrink-0 snap-center w-[85vw] md:w-[400px] h-[500px] flex flex-col justify-between p-8 group cursor-none-target" style={{'--card-glow': 'rgba(45, 212, 191, 0.4)', '--card-accent': '#2DD4BF'}}>
<div className="card-wave"></div>
<div>
<div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="font-display text-3xl text-white font-bold mb-2">Maker</h3>
<p className="text-sm font-mono text-teal-400 mb-4">STUDIO_CONFIGURATOR</p>
<p className="text-gray-400 font-light leading-relaxed">
                            Upload your blueprint. Configure materials. Watch your creation take shape in real-time.
                        </p>
</div>
<button className="btn-glass w-full py-4 rounded-xl text-white font-medium text-sm tracking-wide uppercase flex items-center justify-between px-6 group-hover:border-teal-500/50 transition-colors">
<span>Open Studio</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="w-12 flex-shrink-0"></div>
</div>
</div>

<div className="absolute bottom-6 left-6 md:left-12 flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest fade-in-up delay-700">
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Systems Online</span>
<span className="hidden md:inline">V2.0.4 BUILD 8892</span>
</div>
</main>


    </>
  );
}
