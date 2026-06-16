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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

        // 1. Core Setup
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        // Add subtle fog to fade out the top/bottom of the spiral into the black void
        scene.fog = new THREE.FogExp2(0x030101, 0.025);

        // Safe dimension getters to prevent load issues in background tabs
        let getWidth = () => window.innerWidth || document.documentElement.clientWidth || 1024;
        let getHeight = () => window.innerHeight || document.documentElement.clientHeight || 768;

        const camera = new THREE.PerspectiveCamera(45, getWidth() / getHeight(), 0.1, 100);
        
        // Offset camera based on screen size so spiral sits nicely on the right on desktop
        const setCameraPosition = () => {
            if (getWidth() > 768) {
                camera.position.set(4, 0, 22);
            } else {
                camera.position.set(0, 0, 26);
            }
        };
        setCameraPosition();

        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
        renderer.setSize(getWidth(), getHeight());
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        // Tone mapping for realistic bright lights
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 1.2;
        container.appendChild(renderer.domElement);

        // 2. Post Processing (The Neon Glow / Bloom)
        const renderScene = new RenderPass(scene, camera);
        // Resolution, Strength, Radius, Threshold
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(getWidth(), getHeight()), 2.0, 0.8, 0.1);
        bloomPass.strength = 1.8; 
        bloomPass.radius = 0.6;
        bloomPass.threshold = 0.0;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // 3. Custom Helix Geometry (To match the 3D coil)
        class CustomHelixCurve extends THREE.Curve {
            constructor(radius = 1, height = 1, turns = 1) {
                super();
                this.radius = radius;
                this.height = height;
                this.turns = turns;
            }
            getPoint(t, optionalTarget = new THREE.Vector3()) {
                // T goes from 0 to 1
                const angle = t * Math.PI * 2 * this.turns;
                const x = Math.cos(angle) * this.radius;
                const z = Math.sin(angle) * this.radius;
                const y = (t - 0.5) * this.height;
                return optionalTarget.set(x, y, z);
            }
        }

        const path = new CustomHelixCurve(3.5, 20, 4.5);
        const geometry = new THREE.TubeGeometry(path, 300, 1.4, 64, false);

        // 4. Material and Shading
        const material = new THREE.MeshStandardMaterial({
            color: 0x220000,
            emissive: 0x551100,
            emissiveIntensity: 0.2,
            roughness: 0.3,
            metalness: 0.1,
        });

        const spiral = new THREE.Mesh(geometry, material);
        spiral.rotation.x = Math.PI / 6;
        spiral.rotation.z = -Math.PI / 12;
        scene.add(spiral);

        // 5. Lighting Setup
        const ambientLight = new THREE.AmbientLight(0x110000, 1);
        scene.add(ambientLight);

        const coreLight = new THREE.PointLight(0xffaa00, 200, 15);
        coreLight.position.set(0, 0, 0);
        scene.add(coreLight);

        const topLight = new THREE.PointLight(0xff3300, 100, 20);
        topLight.position.set(0, 8, 2);
        scene.add(topLight);

        const bottomLight = new THREE.PointLight(0xff1100, 100, 20);
        bottomLight.position.set(0, -8, 2);
        scene.add(bottomLight);

        // 6. Interaction & Animation
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - (getWidth() / 2));
            mouseY = (event.clientY - (getHeight() / 2));
        });

        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Continuous rotation
            spiral.rotation.y = elapsedTime * -0.15;

            // Parallax effect on mouse move
            targetX = mouseX * 0.003;
            targetY = mouseY * 0.003;

            // Smooth interpolation
            camera.position.x += (targetX + (getWidth() > 768 ? 4 : 0) - camera.position.x) * 0.05;
            camera.position.y += (-targetY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            // Pulsing light effect
            coreLight.intensity = 150 + Math.sin(elapsedTime * 2) * 50;
            topLight.intensity = 80 + Math.cos(elapsedTime * 1.5) * 30;

            composer.render();
        }

        animate();

        // 7. Responsive Handling
        window.addEventListener('resize', () => {
            const w = getWidth();
            const h = getHeight();
            setCameraPosition();
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            composer.setSize(w, h);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none" id="canvas-container"></div>

<nav className="fixed w-full z-50 bg-[#0a0505]/60 backdrop-blur-[16px] border-b border-[#ff4400]/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center cursor-pointer">
<span className="font-['Space_Grotesk',sans-serif] font-semibold text-2xl tracking-tighter text-white">NEX<span className="text-[#ff4400]">GEN</span></span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#technology">Technology</a>
</div>
<div>
<button className="px-6 py-2.5 rounded-full bg-gradient-to-br from-[#190a0a]/40 to-[#0a0505]/80 backdrop-blur-md border border-[#ff4400]/20 text-white font-medium text-sm tracking-wide hover:border-[#ff4400]/50 hover:bg-[#1a0a0a] transition-all duration-300">
                        Launch App
                    </button>
</div>
</div>
</div>
</nav>

<main className="relative z-10 flex flex-col pt-20">

<section className="min-h-[90vh] flex items-center max-w-7xl mx-auto px-6 lg:px-8 w-full" id="home">
<div className="w-full md:w-3/5 lg:w-1/2 pt-20 pb-12">
<div className="inline-block px-4 py-1.5 rounded-full border border-[#ff4400]/20 bg-[#ff4400]/5 backdrop-blur-md mb-6 animate-fade-up">
<p className="text-[#ff4400] text-xs font-medium tracking-widest uppercase">The Next Dimension</p>
</div>
<h1 className="font-['Space_Grotesk',sans-serif] text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-6 animate-fade-up delay-100">
                    Interact with the <br/>
<span className="bg-gradient-to-r from-[#ffaa00] via-[#ff4400] to-[#cc1100] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,68,0,0.2)]">Future of Web</span>
</h1>
<p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed animate-fade-up delay-200">
                    Experience hyper-realistic 3D elements natively integrated into the DOM. We blur the line between static layouts and immersive digital reality.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
<button className="px-8 py-4 rounded-xl bg-gradient-to-br from-[#ff4400]/90 to-[#cc1100]/90 shadow-[0_4px_20px_rgba(255,68,0,0.2)] backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,68,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 text-white font-medium text-sm flex items-center justify-center gap-2">
                        Get Started
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-xl bg-gradient-to-br from-[#190a0a]/40 to-[#0a0505]/80 backdrop-blur-[20px] border border-white/5 text-white/80 font-medium text-sm hover:text-white hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                        View Demo
                    </button>
</div>

<div className="grid grid-cols-3 gap-6 mt-20 border-t border-white/5 pt-8 animate-fade-up delay-300">
<div>
<h4 className="text-3xl font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-white">60fps</h4>
<p className="text-xs text-white/40 uppercase tracking-widest mt-2">Performance</p>
</div>
<div>
<h4 className="text-3xl font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-white">100%</h4>
<p className="text-xs text-white/40 uppercase tracking-widest mt-2">Responsive</p>
</div>
<div>
<h4 className="text-3xl font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-white">WebGL</h4>
<p className="text-xs text-white/40 uppercase tracking-widest mt-2">Powered</p>
</div>
</div>
</div>
<div className="hidden md:block md:w-2/5 lg:w-1/2 h-full"></div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-20" id="features">
<div className="text-center mb-16">
<h2 className="font-['Space_Grotesk',sans-serif] text-4xl font-semibold tracking-tight mb-4">Crafted with <span className="text-[#ff4400]">Precision</span></h2>
<p className="text-white/50 max-w-2xl mx-auto text-base">Our toolkit leverages the power of modern browsers to deliver experiences previously only possible in native applications.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gradient-to-br from-[#190a0a]/30 to-[#0a0505]/60 backdrop-blur-[20px] border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:border-[#ff4400]/30 hover:shadow-[0_15px_40px_0_rgba(255,68,0,0.1)] transition-all duration-500 rounded-2xl p-8 flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-[#ff4400]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#ff4400]/20 transition-all duration-500">
<iconify-icon className="text-2xl text-[#ff4400]" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-white mb-3">Spatial Design</h3>
<p className="text-white/50 text-sm leading-relaxed flex-grow">Push past the 2D plane with true spatial geometry that responds dynamically to user interaction and scroll.</p>
<div className="mt-8 w-8 h-px bg-gradient-to-r from-[#ff4400]/80 to-transparent"></div>
</div>

<div className="bg-gradient-to-br from-[#190a0a]/30 to-[#0a0505]/60 backdrop-blur-[20px] border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:border-[#ff4400]/30 hover:shadow-[0_15px_40px_0_rgba(255,68,0,0.1)] transition-all duration-500 rounded-2xl p-8 flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-[#ff4400]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#ff4400]/20 transition-all duration-500">
<iconify-icon className="text-2xl text-[#ff4400]" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-white mb-3">Fluid Physics</h3>
<p className="text-white/50 text-sm leading-relaxed flex-grow">Custom shaders and material lighting create hyper-realistic glows, refractions, and fluid-like visual states.</p>
<div className="mt-8 w-8 h-px bg-gradient-to-r from-[#ff4400]/80 to-transparent"></div>
</div>

<div className="bg-gradient-to-br from-[#190a0a]/30 to-[#0a0505]/60 backdrop-blur-[20px] border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:border-[#ff4400]/30 hover:shadow-[0_15px_40px_0_rgba(255,68,0,0.1)] transition-all duration-500 rounded-2xl p-8 flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-[#ff4400]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#ff4400]/20 transition-all duration-500">
<iconify-icon className="text-2xl text-[#ff4400]" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-['Space_Grotesk',sans-serif] font-semibold tracking-tight text-white mb-3">Core Engine</h3>
<p className="text-white/50 text-sm leading-relaxed flex-grow">Built on standard web technologies to ensure lightweight delivery, fast times to interactive, and zero plugins.</p>
<div className="mt-8 w-8 h-px bg-gradient-to-r from-[#ff4400]/80 to-transparent"></div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030101]/80 backdrop-blur-xl mt-20 py-8 relative z-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center">
<span className="font-['Space_Grotesk',sans-serif] font-semibold text-xl tracking-tighter text-white">NEX<span className="text-[#ff4400]">GEN</span></span>
</div>
<p className="text-white/40 text-xs tracking-wide">© 2026 NexGen Web Systems. All rights reserved.</p>
</div>
</footer>
</main>



    </>
  );
}
