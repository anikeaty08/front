import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Lucide
        lucide.createIcons();

        // Three.js Setup
        const container = document.getElementById('webgl-container');
        const scene = new THREE.Scene();
        // Fog for depth
        scene.fog = new THREE.FogExp2(0x030712, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // --------------------------------------------------
        // 1. THE CHARACTER (Procedural "AI Core")
        // --------------------------------------------------
        const botGroup = new THREE.Group();
        scene.add(botGroup);

        // A. Core Sphere (The "Brain")
        const coreGeo = new THREE.IcosahedronGeometry(1, 4);
        const coreMat = new THREE.MeshStandardMaterial({ 
            color: 0x6366f1, // Indigo
            emissive: 0x4f46e5,
            emissiveIntensity: 0.5,
            roughness: 0.2,
            metalness: 0.8,
            wireframe: true
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        botGroup.add(core);

        // B. Inner Glow Sphere
        const innerGeo = new THREE.SphereGeometry(0.6, 32, 32);
        const innerMat = new THREE.MeshBasicMaterial({ color: 0x818cf8 });
        const inner = new THREE.Mesh(innerGeo, innerMat);
        botGroup.add(inner);

        // C. Floating Rings (Data streams)
        const ringGeo = new THREE.TorusGeometry(1.6, 0.02, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0, transparent: true, opacity: 0.3 });
        
        const ring1 = new THREE.Mesh(ringGeo, ringMat);
        const ring2 = new THREE.Mesh(ringGeo, ringMat);
        const ring3 = new THREE.Mesh(ringGeo, ringMat);

        ring1.rotation.x = Math.PI / 2;
        ring2.rotation.y = Math.PI / 2;
        
        botGroup.add(ring1);
        botGroup.add(ring2);
        botGroup.add(ring3);

        // Position Character
        // Initial position: Right side of screen for desktop
        if(window.innerWidth > 1024) {
            botGroup.position.set(3, 0, 0);
        } else {
            botGroup.position.set(0, 2, -2); // Top for mobile
        }

        // --------------------------------------------------
        // 2. THE ENVIRONMENT (Particles)
        // --------------------------------------------------
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1500;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            // Spread particles wide
            posArray[i] = (Math.random() - 0.5) * 20; 
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x475569, // Slate 600
            transparent: true,
            opacity: 0.6,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // --------------------------------------------------
        // LIGHTING
        // --------------------------------------------------
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x6366f1, 2);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const botLight = new THREE.PointLight(0x818cf8, 1, 10);
        botGroup.add(botLight);

        camera.position.z = 5;

        // --------------------------------------------------
        // INTERACTION & ANIMATION
        // --------------------------------------------------
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        });

        // Scroll Logic
        let scrollY = 0;
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
        });

        const clock = new THREE.Clock();

        const animate = () => {
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            const elapsedTime = clock.getElapsedTime();

            // 1. Character Animation
            // Float up and down
            botGroup.position.y = Math.sin(elapsedTime) * 0.1;
            if(window.innerWidth <= 1024) botGroup.position.y += 2; // Offset for mobile

            // Rings rotation
            ring1.rotation.x += 0.01;
            ring1.rotation.y += 0.005;
            ring2.rotation.y += 0.01;
            ring3.rotation.z += 0.01;

            // Core pulsing
            const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
            core.scale.set(scale, scale, scale);

            // Look at mouse (subtle)
            botGroup.rotation.y += 0.05 * (targetX - botGroup.rotation.y);
            botGroup.rotation.x += 0.05 * (targetY - botGroup.rotation.x);

            // 2. Environment Animation based on Scroll
            // Move particles based on scroll to simulate travel
            particlesMesh.rotation.y = scrollY * 0.0005;
            particlesMesh.position.y = scrollY * 0.001;

            // Camera Parallax
            camera.position.x += (mouseX * 0.005 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 0.005 - camera.position.y) * 0.05;

            // 3. Unique Character Behavior on Scroll
            // When user scrolls down, the bot rotates faster and changes color
            if (scrollY > 100) {
                const intensity = Math.min(scrollY / 2000, 1);
                ring1.material.color.setHSL(0.6, 1, 0.5 + (0.5 * intensity));
                coreMat.wireframe = scrollY % 100 > 50; // Glitch effect
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // Resize Handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            if(window.innerWidth > 1024) {
                botGroup.position.set(3, 0, 0);
            } else {
                botGroup.position.set(0, 2, -2);
            }
        });

        // Add Scroll Animations for HTML Elements using IntersectionObserver
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div, h2, h1, p').forEach((el) => {
            el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="webgl-container"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
<span className="font-mono text-indigo-400 font-bold text-lg">&lt;/&gt;</span>
</div>
<span className="font-semibold text-slate-200 tracking-tight group-hover:text-white transition-colors">Dev.NET</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all" href="#contact">
                    Contact
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Available for Architecture Roles
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                    Architecting <br/>
<span className="text-gradient-accent">Digital Realities</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed font-light">
                    Specializing in high-performance .NET ecosystems, cloud-native architecture, and immersive web experiences using WebGL.
                </p>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 group">
<span>View Projects</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="github"></i>
<span>GitHub</span>
</button>
</div>

<div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
<div>
<div className="text-2xl font-semibold text-white">8+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Exp.</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">50+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Systems Deployed</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">99%</div>
<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Uptime</div>
</div>
</div>
</div>

<div className="hidden lg:block h-[500px] w-full relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]"></div>
</div>
</div>
</main>

<section className="py-10 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm relative overflow-hidden" id="stack">
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none"></div>
<div className="flex gap-12 animate-scroll w-max px-6">

<div className="flex gap-16 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<iconify-icon icon="logos:c-sharp" width="40"></iconify-icon>
<iconify-icon icon="logos:dotnet" width="40"></iconify-icon>
<iconify-icon className="text-blue-500" icon="simple-icons:microsoftazure" width="40"></iconify-icon>
<iconify-icon icon="logos:docker-icon" width="40"></iconify-icon>
<iconify-icon icon="logos:kubernetes" width="40"></iconify-icon>
<iconify-icon icon="logos:postgresql" width="40"></iconify-icon>
<iconify-icon icon="logos:redis" width="40"></iconify-icon>
<iconify-icon icon="logos:react" width="40"></iconify-icon>
<iconify-icon className="text-sky-400" icon="simple-icons:tailwindcss" width="40"></iconify-icon>
<iconify-icon icon="logos:visual-studio-code" width="40"></iconify-icon>
</div>
<div aria-hidden="true" className="flex gap-16 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<iconify-icon icon="logos:c-sharp" width="40"></iconify-icon>
<iconify-icon icon="logos:dotnet" width="40"></iconify-icon>
<iconify-icon className="text-blue-500" icon="simple-icons:microsoftazure" width="40"></iconify-icon>
<iconify-icon icon="logos:docker-icon" width="40"></iconify-icon>
<iconify-icon icon="logos:kubernetes" width="40"></iconify-icon>
<iconify-icon icon="logos:postgresql" width="40"></iconify-icon>
<iconify-icon icon="logos:redis" width="40"></iconify-icon>
<iconify-icon icon="logos:react" width="40"></iconify-icon>
<iconify-icon className="text-sky-400" icon="simple-icons:tailwindcss" width="40"></iconify-icon>
<iconify-icon icon="logos:visual-studio-code" width="40"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">System Architecture &amp;<br/><span className="text-slate-500">Backend Precision</span></h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
<i className="w-4 h-4" data-lucide="cpu"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white">Microservices Architecture</h3>
<p className="text-slate-400 text-sm mt-2 leading-relaxed">Designing decoupled, scalable systems using .NET Core and RabbitMQ. Implementation of event-driven patterns for high throughput.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
<i className="w-4 h-4" data-lucide="database"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white">Database Optimization</h3>
<p className="text-slate-400 text-sm mt-2 leading-relaxed">Advanced SQL tuning, Entity Framework performance optimization, and implementing Redis caching strategies for millisecond latency.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center border border-sky-500/20 text-sky-400">
<i className="w-4 h-4" data-lucide="cloud"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white">Cloud Native (Azure)</h3>
<p className="text-slate-400 text-sm mt-2 leading-relaxed">Full CI/CD pipelines, Docker containerization, and Azure Kubernetes Service (AKS) orchestration.</p>
</div>
</div>
</div>
</div>

<div className="relative group scanline overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<span className="ml-2 text-xs text-slate-500 font-mono">ServiceController.cs</span>
</div>
<div className="p-6 overflow-x-auto">
<pre className="font-mono text-xs md:text-sm leading-6">
<span className="text-pink-400">using</span> Microsoft.AspNetCore.Mvc;
<span className="text-pink-400">using</span> System.Threading.Tasks;

<span className="text-blue-400">namespace</span> <span className="text-white">Core.API</span>
{
    [<span className="text-green-400">ApiController</span>]
    [<span className="text-green-400">Route</span>(<span className="text-orange-300">"api/[controller]"</span>)]
    <span className="text-blue-400">public class</span> <span className="text-yellow-300">SystemController</span> : <span className="text-green-400">ControllerBase</span>
    {
        <span className="text-blue-400">private readonly</span> <span className="text-green-400">IEngine</span> _engine;

        <span className="text-blue-400">public</span> <span className="text-yellow-300">SystemController</span>(<span className="text-green-400">IEngine</span> engine)
        {
            _engine = engine;
        }

        [<span className="text-green-400">HttpGet</span>(<span className="text-orange-300">"status"</span>)]
        <span className="text-blue-400">public async</span> <span className="text-green-400">Task</span>&lt;<span className="text-green-400">IActionResult</span>&gt; <span className="text-yellow-300">GetStatus</span>()
        {
            <span className="text-slate-500">// Optimizing thread allocation...</span>
            <span className="text-blue-400">var</span> result = <span className="text-pink-400">await</span> _engine.<span className="text-yellow-300">ExecuteAsync</span>();
            <span className="text-pink-400">return</span> <span className="text-yellow-300">Ok</span>(result);
        }
    }
}</pre>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight">Featured Projects</h2>
<p className="text-slate-400 mt-2">Enterprise solutions delivered with precision.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="#">
                    View Archive <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="glass-card rounded-xl p-6 relative group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-950/50 border border-indigo-500/20 flex items-center justify-center mb-6">
<i className="text-indigo-400" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">FinTech Core Engine</h3>
<p className="text-slate-400 text-sm mb-6 h-20">High-frequency trading platform handling 50k+ transactions per second. Built with .NET 8, SignalR, and Kafka.</p>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">C#</span>
<span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">gRPC</span>
<span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">Kafka</span>
</div>
</div>
</article>

<article className="glass-card rounded-xl p-6 relative group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center mb-6">
<i className="text-emerald-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">AuthGuard Identity</h3>
<p className="text-slate-400 text-sm mb-6 h-20">Centralized OAuth2/OpenID Connect provider for enterprise federation. Custom security policies and MFA integration.</p>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">IdentityServer</span>
<span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">Azure</span>
</div>
</div>
</article>

<article className="glass-card rounded-xl p-6 relative group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-sky-950/50 border border-sky-500/20 flex items-center justify-center mb-6">
<i className="text-sky-400" data-lucide="box"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">SupplyChain AI</h3>
<p className="text-slate-400 text-sm mb-6 h-20">Inventory forecasting system leveraging ML.NET. Integrated with ERPs via REST APIs.</p>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">ML.NET</span>
<span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">Blazor</span>
</div>
</div>
</article>
</div>
</div>
</section>

<footer className="py-20 border-t border-white/5 bg-[#020617] relative" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Ready to Architect?</h2>
<p className="text-slate-400 mb-8">Currently open for freelance architecture consultation and senior dev roles.</p>
<form className="max-w-md mx-auto space-y-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="enter@email.com" type="email"/>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell me about your project..." rows="4"></textarea>
<button className="w-full bg-white text-slate-950 font-semibold py-3 rounded-lg hover:bg-slate-200 transition-colors">Send Transmission</button>
</form>
<div className="mt-12 flex justify-center gap-6 text-slate-500">
<a className="hover:text-white transition-colors" href="#"><i data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i data-lucide="github"></i></a>
</div>
<p className="mt-8 text-xs text-slate-600">© 2024 .NET Portfolio. Built with Tailwind &amp; Three.js.</p>
</div>
</footer>



    </>
  );
}
