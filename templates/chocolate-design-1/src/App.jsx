import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
'alpine-dark': '#0a0a0c',
'royal-purple': '#2E0B38',
'vaduz-gold': '#D4AF37',
'alpine-teal': '#1B4D4E',
'glass': 'rgba(255, 255, 255, 0.03)',
'glass-border': 'rgba(255, 255, 255, 0.08)',
},
backgroundImage: {
'vorarlberg': "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
}
}
}
}



        // --- 3D SCENE SETUP ---
        const canvasContainer = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        
        // Camera setup
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 6;
        camera.position.y = 0;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.outputEncoding = THREE.sRGBEncoding;
        canvasContainer.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xfff0dd, 2);
        spotLight.position.set(5, 5, 5);
        spotLight.angle = 0.5;
        spotLight.penumbra = 1;
        scene.add(spotLight);

        const purpleLight = new THREE.PointLight(0x2E0B38, 2, 10);
        purpleLight.position.set(-2, 1, 2);
        scene.add(purpleLight);

        const goldLight = new THREE.PointLight(0xD4AF37, 1.5, 10);
        goldLight.position.set(2, -1, 3);
        scene.add(goldLight);

        // Group to hold our bar
        const chocolateGroup = new THREE.Group();
        scene.add(chocolateGroup);

        // 1. The Chocolate Bar (Inner)
        const barGeometry = new THREE.BoxGeometry(1.8, 4, 0.2);
        // Create a custom material that looks like dark rich chocolate
        const barMaterial = new THREE.MeshStandardMaterial({
            color: 0x3e2723, // Dark brown
            roughness: 0.6,
            metalness: 0.1,
        });
        const chocolateBar = new THREE.Mesh(barGeometry, barMaterial);
        chocolateGroup.add(chocolateBar);

        // Add "Indentations" logic to geometry visually (simplified for single file)
        // We will just assume a sleek slab for the "modern" look.

        // 2. The Wrapper (Outer) - Custom Shader for "Glow"
        // This wrapper will cover the chocolate and slide off
        const wrapperGeometry = new THREE.BoxGeometry(1.9, 4.1, 0.25);
        
        // Shader Material for the Wrapper
        const vertexShader = `
            varying vec2 vUv;
            varying vec3 vNormal;
            void main() {
                vUv = uv;
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            uniform float uTime;
            uniform vec3 uColorA;
            uniform vec3 uColorB;
            varying vec2 vUv;
            varying vec3 vNormal;

            void main() {
                // Iridescent effect based on normal and time
                float sheen = dot(vNormal, vec3(0.0, 0.0, 1.0));
                
                // Subtle moving shimmer
                float wave = sin(vUv.y * 10.0 + uTime) * 0.5 + 0.5;
                
                vec3 color = mix(uColorA, uColorB, wave * 0.2 + sheen * 0.8);
                
                // Add metallic gloss
                float gloss = pow(sheen, 4.0);
                
                gl_FragColor = vec4(color + vec3(gloss * 0.3), 0.95);
            }
        `;

        const wrapperMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uColorA: { value: new THREE.Color('#2E0B38') }, // Purple
                uColorB: { value: new THREE.Color('#D4AF37') }, // Gold
            },
            transparent: true,
            side: THREE.DoubleSide
        });

        const wrapper = new THREE.Mesh(wrapperGeometry, wrapperMaterial);
        chocolateGroup.add(wrapper);

        // --- ANIMATION LOOP ---
        const clock = new THREE.Clock();

        function animate() {
            const elapsedTime = clock.getElapsedTime();

            // Update Shader uniforms
            wrapperMaterial.uniforms.uTime.value = elapsedTime;

            // Idle floating animation
            chocolateGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.1;
            chocolateGroup.rotation.y = Math.sin(elapsedTime * 0.2) * 0.1;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        // --- GSAP SCROLL INTEGRATION ---
        gsap.registerPlugin(ScrollTrigger);

        // Initial Reveal
        const timeline = gsap.timeline();
        timeline.to('#loader', { opacity: 0, duration: 1, onComplete: () => document.getElementById('loader').style.display = 'none' })
                .to('#canvas-container', { opacity: 1, duration: 1 }, "-=0.5")
                .from('.reveal-text', { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.5");

        // Scroll Interactions for 3D Model
        // 1. Rotate the bar as we scroll down
        gsap.to(chocolateGroup.rotation, {
            y: Math.PI * 2, // Full rotation
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        });

        // 2. Unwrap Effect (Move Wrapper Up and Fade Out) when reaching 'Essence' section
        const unwrapTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#essence",
                start: "top center",
                end: "center center",
                scrub: 1.5,
            }
        });

        unwrapTl.to(wrapper.position, { y: 4, ease: "power2.inOut" }) // Slide wrapper up
                .to(wrapper.material, { opacity: 0 }, "<"); // Fade it out

        // 3. Move chocolate to side on desktop to make room for text
        if (window.innerWidth > 768) {
            gsap.to(chocolateGroup.position, {
                x: 0, // Keep center initially
                scrollTrigger: {
                    trigger: "#essence",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    onUpdate: (self) => {
                        // Dynamic movement based on progress
                        if(self.progress > 0.5) {
                            // Move slightly right or stay center based on design
                             // For this layout, center is good, text is split L/R
                        }
                    }
                }
            });
        }

        // Fade in elements
        gsap.utils.toArray('.scroll-fade').forEach(element => {
            gsap.from(element, {
                opacity: 0,
                y: 30,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                }
            });
        });

        // Mouse Move Parallax
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            
            gsap.to(chocolateGroup.rotation, {
                x: y * 0.2,
                duration: 1,
                ease: "power2.out"
            });
        });

        // Resize handler
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
      

<div className="" id="loader" style={{opacity: '0', display: 'none'}}>
<div className="flex flex-col items-center gap-4">
<span className="text-vaduz-gold tracking-[0.3em] uppercase text-xs font-light animate-pulse">Initializing Reality</span>
<div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-vaduz-gold to-transparent"></div>
</div>
</div>

<div className="fixed inset-0 w-full h-full transition-opacity duration-1000 delay-500 opacity-0 z-0 bg-[#0a0505]" id="canvas-container" style={{opacity: '1'}}>

<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">

<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_45s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#2E0B38_0%,#3E2723_20%,#D4AF37_40%,#4E342E_60%,#2E0B38_80%,#3E2723_100%)] blur-[120px] opacity-90 will-change-transform"></div>

<div className="absolute inset-0 w-full h-full">
<div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-vaduz-gold/30 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite] mix-blend-screen"></div>
<div className="absolute bottom-[10%] right-[20%] w-[50vw] h-[50vw] bg-[#3E2723]/60 rounded-full blur-[120px] animate-[pulse_12s_ease-in-out_infinite_reverse] mix-blend-overlay"></div>
<div className="absolute top-[60%] left-[10%] w-[30vw] h-[30vw] bg-royal-purple/40 rounded-full blur-[100px] animate-[bounce_15s_infinite] mix-blend-color-dodge"></div>
</div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80')] bg-cover bg-center opacity-30 mix-blend-overlay filter contrast-125 saturate-150"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,5,5,0.8)_90%)] mix-blend-multiply"></div>
</div>
<canvas className="" height="1613" style={{display: 'block', width: '975px', height: '1183px'}} width="1329"></canvas></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 py-6 px-6 lg:px-12 mix-blend-difference">
<div className="flex justify-between items-center max-w-7xl mx-auto">
<a className="group flex items-center gap-3 select-none decoration-transparent" href="#">
<div className="grid h-5 w-5 rotate-45 grid-cols-2 gap-px transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-0">
<span className="rounded-[1px] bg-vaduz-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]"></span>
<span className="rounded-[1px] bg-vaduz-gold/40"></span>
<span className="rounded-[1px] bg-vaduz-gold/40"></span>
<span className="rounded-[1px] bg-vaduz-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]"></span>
</div>
<span className="font-serif text-xl font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-vaduz-gold">Lichoc</span>
</a>
<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-white/70">
<a className="hover:text-vaduz-gold transition-colors" href="#essence">Essence</a>
<a className="hover:text-vaduz-gold transition-colors" href="#terroir">Terroir</a>
<a className="hover:text-vaduz-gold transition-colors" href="#shop">Shop</a>
</div>
<button className="glass-panel px-5 py-2 rounded-full text-xs text-white hover:bg-white/10 transition-all flex items-center gap-2">
<span className="">Cart (0)</span>
</button>
</div>
</nav>

<main className="z-10 w-full relative">

<section className="flex flex-col overflow-hidden w-full h-screen relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-royal-purple/20 rounded-full blur-[120px] -z-10"></div>
<div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-alpine-teal/20 rounded-full blur-[100px] -z-10"></div>
<div className="text-center space-y-8 z-10 px-4">
<div className="overflow-hidden">
<h2 className="text-vaduz-gold text-xs tracking-[0.4em] uppercase font-light mb-4 reveal-text" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px)'}}>Liechtenstein Heritage</h2>
</div>
<div className="overflow-hidden">
<h1 className="md:text-8xl leading-[0.9] reveal-text text-5xl font-light text-white tracking-tighter" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px)'}}>LIECHTENSTEIN <span className="italic text-white/80 font-serif">Spiritual Elevation</span></h1>
</div>
<div className="pt-8 overflow-hidden">
<p className="text-sm text-gray-400 max-w-md mx-auto font-light leading-relaxed reveal-text" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px)'}}>
                        A synthesis of alpine botanical tradition and psychoactive precision. 
                        Designed in Vaduz, experienced beyond the veil.
                    </p>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-white">Unfold</span>
<iconify-icon className="text-white" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</section>

<section className="min-h-screen w-full relative py-32" id="essence">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-4 space-y-24">
<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group scroll-fade" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 30px)', opacity: '0'}}>
<div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-vaduz-gold" icon="solar:mountains-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl text-white font-light mb-4">Alpine Foraged</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                            Ingredients sourced from the high altitudes of the Rätikon mountain range. The crisp air and mineral-rich soil impart a unique vibrational quality to our cacao.
                        </p>
</div>
<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group scroll-fade" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 30px)', opacity: '0'}}>
<div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-alpine-teal" icon="solar:atom-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl text-white font-light mb-4">Nano-Emulsified</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                            Our Psilocybin complex is broken down into nanoparticles for rapid onset (15-20 mins) and distinct clarity, avoiding the traditional body load.
                        </p>
</div>
</div>

<div className="md:col-span-4 h-[50vh] md:h-auto pointer-events-none"></div>

<div className="md:col-span-4 space-y-24 pt-12 md:pt-0">
<div className="text-right scroll-fade" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 30px)', opacity: '0'}}>
<h2 className="text-4xl md:text-5xl text-white font-light tracking-tight mb-6">The Ritual<span className="text-vaduz-gold italic font-serif">Unveiled</span></h2>
<p className="text-sm text-gray-400 font-light leading-relaxed ml-auto max-w-sm">
                            As the wrapper sheds, so does the ego. We have designed the unboxing experience to mirror the psychedelic journey: layers peeling back to reveal the core truth.
                        </p>
<div className="mt-8 flex justify-end gap-6">
<div className="flex flex-col items-end">
<span className="text-2xl text-white font-light">3.5g</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Total Active</span>
</div>
<div className="w-[1px] h-12 bg-white/10"></div>
<div className="flex flex-col items-end">
<span className="text-2xl text-white font-light">12</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Micro Squares</span>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors scroll-fade" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 30px)', opacity: '0'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-royal-purple/30 flex items-center justify-center border border-royal-purple/50 text-white">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs text-vaduz-gold uppercase tracking-wider mb-1">Guided Audio</div>
<div className="text-sm text-white font-light">Chapter 1: The Ascent</div>
</div>
</div>
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:soundwave-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full relative flex items-center bg-gradient-to-b from-transparent to-black/80" id="terroir">
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-alpine-teal text-xs tracking-[0.3em] uppercase font-bold mb-4 block">Molecular Gastronomy</span>
<h2 className="text-4xl md:text-6xl text-white font-light tracking-tight mb-8">
                            Botanical <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-vaduz-gold to-white">Alchemy</span>
</h2>
<div className="space-y-6">

<div className="border-b border-white/10 pb-6 group">
<div className="flex justify-between items-center cursor-pointer">
<h4 className="text-lg text-white font-light group-hover:text-vaduz-gold transition-colors">Swiss Dark Chocolate (72%)</h4>
<iconify-icon className="text-white/30 group-hover:text-white transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-xs text-gray-400 mt-2 font-light max-w-md">Single-origin cacao beans conched for 72 hours to ensure a velvety texture that masks the earthy mushroom tones completely.</p>
</div>

<div className="border-b border-white/10 pb-6 group">
<div className="flex justify-between items-center cursor-pointer">
<h4 className="text-lg text-white font-light group-hover:text-vaduz-gold transition-colors">Lion's Mane Extract</h4>
<iconify-icon className="text-white/30 group-hover:text-white transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-xs text-gray-400 mt-2 font-light max-w-md">Added for neurogenesis support, enhancing the cognitive clarity of the experience.</p>
</div>

<div className="border-b border-white/10 pb-6 group">
<div className="flex justify-between items-center cursor-pointer">
<h4 className="text-lg text-white font-light group-hover:text-vaduz-gold transition-colors">Gold Leaf Flakes</h4>
<iconify-icon className="text-white/30 group-hover:text-white transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-xs text-gray-400 mt-2 font-light max-w-md">Edible 24k gold from Vaduz, grounding the ethereal experience in physical luxury.</p>
</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-1 h-96 relative flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-black">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(46,11,56,1)_0%,rgba(0,0,0,1)_70%)] animate-pulse"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
<div className="w-48 h-48 border border-vaduz-gold/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-2 h-2 bg-vaduz-gold rounded-full absolute -top-1"></div>
</div>
</div>
</div>
<div className="relative z-10 text-center">
<h3 className="text-3xl font-serif italic text-white mb-2">3.5g</h3>
<span className="text-[10px] uppercase tracking-widest text-alpine-teal">Psilocybin Cubensis</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-black/50 backdrop-blur-sm" id="shop">
<div className="max-w-4xl mx-auto text-center px-6">
<iconify-icon className="text-vaduz-gold mb-6 animate-pulse" icon="solar:stars-minimalistic-linear" width="40"></iconify-icon>
<h2 className="text-5xl md:text-7xl text-white font-light tracking-tighter mb-8">Ascend Now</h2>
<p className="text-sm text-gray-400 font-light mb-12">Limited release batches available for members only.</p>
<form className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto mb-16">
<input className="bg-white/5 border border-white/10 text-white px-6 py-4 rounded-full focus:outline-none focus:border-vaduz-gold/50 text-xs tracking-widest text-center md:text-left placeholder:text-gray-600 w-full" placeholder="ENTER ACCESS CODE" type="email"/>
<button className="bg-white text-black px-8 py-4 rounded-full text-xs font-semibold tracking-widest hover:bg-vaduz-gold transition-colors whitespace-nowrap" type="submit">
                        UNLOCK
                    </button>
</form>
<div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest text-gray-600">
<a className="hover:text-white transition-colors" href="#">Legal</a>
<a className="hover:text-white transition-colors" href="#">Dosage Guide</a>
<a className="hover:text-white transition-colors" href="#">Vaduz Lab</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<div className="mt-16 text-[10px] text-gray-800 font-light">
                    © 2024 ALPINE GLOW. VADUZ, LIECHTENSTEIN. 
                    CONSUME RESPONSIBLY. 21+.
                </div>
</div>
</section>
</main>


    </>
  );
}
