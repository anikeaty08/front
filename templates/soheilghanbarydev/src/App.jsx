import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
dark: '#050505',
light: '#ffffff',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Theme Logic ---
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeIcon = document.getElementById('theme-icon');
            const html = document.documentElement;
            
            // Initial Theme Check
            if (localStorage.theme === 'light') {
                html.classList.remove('dark');
                themeIcon.setAttribute('icon', 'solar:sun-linear');
            } else {
                html.classList.add('dark');
                themeIcon.setAttribute('icon', 'solar:moon-linear');
            }

            // --- Three.js Setup ---
            const container = document.getElementById('earth-container');
            const scene = new THREE.Scene();
            
            // Camera
            const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 18; 
            camera.position.x = 0;
            
            // Renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const earthGroup = new THREE.Group();
            
            // Responsive Positioning
            if(window.innerWidth > 768) {
                earthGroup.position.x = 5; 
            } else {
                earthGroup.position.x = 0; 
                earthGroup.position.y = 2; 
                camera.position.z = 25; 
            }
            scene.add(earthGroup);

            // 1. Wireframe Globe
            const geometry = new THREE.SphereGeometry(6, 32, 32);
            const material = new THREE.MeshBasicMaterial({ 
                color: html.classList.contains('dark') ? 0x52525b : 0xe4e4e7, // zinc-600 vs zinc-200
                wireframe: true,
                transparent: true,
                opacity: 0.15 
            });
            const sphere = new THREE.Mesh(geometry, material);
            earthGroup.add(sphere);

            // 2. Point Cloud
            const particleGeo = new THREE.SphereGeometry(6, 64, 64);
            const particleMat = new THREE.PointsMaterial({
                size: 0.03,
                color: html.classList.contains('dark') ? 0xffffff : 0x18181b, // white vs zinc-900
                transparent: true,
                opacity: 0.4,
            });
            const particlesMesh = new THREE.Points(particleGeo, particleMat);
            earthGroup.add(particlesMesh);

            // 3. Inner Blocking Sphere
            const fillGeometry = new THREE.SphereGeometry(5.95, 32, 32);
            const fillMaterial = new THREE.MeshBasicMaterial({ 
                color: html.classList.contains('dark') ? 0x050505 : 0xffffff 
            });
            const fillSphere = new THREE.Mesh(fillGeometry, fillMaterial);
            earthGroup.add(fillSphere);

            // Animation Loop
            function animate() {
                requestAnimationFrame(animate);
                sphere.rotation.y += 0.001;
                particlesMesh.rotation.y += 0.001;
                const time = Date.now() * 0.001;
                earthGroup.position.y += Math.sin(time) * 0.002;
                renderer.render(scene, camera);
            }
            animate();

            // --- Theme Update Function for Three.js ---
            function updateEarthTheme(isDark) {
                if(isDark) {
                    material.color.setHex(0x52525b); // zinc-600
                    particleMat.color.setHex(0xffffff); // white
                    fillMaterial.color.setHex(0x050505); // dark bg
                } else {
                    material.color.setHex(0xa1a1aa); // darker grey for visibility on white
                    particleMat.color.setHex(0x18181b); // dark zinc
                    fillMaterial.color.setHex(0xffffff); // white bg
                }
            }

            // --- Event Listeners ---
            
            // Toggle Click
            themeToggleBtn.addEventListener('click', () => {
                if (html.classList.contains('dark')) {
                    html.classList.remove('dark');
                    localStorage.theme = 'light';
                    themeIcon.setAttribute('icon', 'solar:sun-linear');
                    updateEarthTheme(false);
                } else {
                    html.classList.add('dark');
                    localStorage.theme = 'dark';
                    themeIcon.setAttribute('icon', 'solar:moon-linear');
                    updateEarthTheme(true);
                }
            });

            // Window Resize
            window.addEventListener('resize', () => {
                const width = window.innerWidth;
                const height = window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
                if(width > 768) {
                    earthGroup.position.x = 5;
                    earthGroup.position.y = 0;
                    camera.position.z = 18;
                } else {
                    earthGroup.position.x = 0;
                    earthGroup.position.y = 2;
                    camera.position.z = 25;
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="earth-container"></div>
<div className="earth-mask"></div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-white/5 backdrop-blur-md bg-white/70 dark:bg-[#050505]/70 transition-colors duration-300">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm tracking-tighter font-medium text-zinc-900 dark:text-white hover:opacity-80 transition-opacity" href="#">
                ALEX.DEV
            </a>
<div className="flex items-center gap-6">
<a className="text-xs font-light tracking-wide text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#work">WORK</a>
<a className="text-xs font-light tracking-wide text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#about">ABOUT</a>
<a className="text-xs font-light tracking-wide text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#contact">CONTACT</a>

<button className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors" id="theme-toggle">
<iconify-icon height="16" icon="solar:moon-linear" id="theme-icon" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-5xl mx-auto px-6 min-h-[70vh] flex flex-col justify-center">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 mb-8 animate-fade-in opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-light text-zinc-600 dark:text-zinc-300 tracking-wide">Available for new projects</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-zinc-900 dark:text-white mb-6 animate-fade-in delay-100 opacity-0 transition-colors duration-300">
                    Crafting digital <br/>
<span className="text-zinc-400 dark:text-zinc-500">perfection.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed animate-fade-in delay-200 opacity-0 tracking-tight transition-colors duration-300">
                    A full-stack engineer focused on building high-performance, accessible, and fluid web experiences using modern architecture.
                </p>
<div className="mt-10 flex gap-4 animate-fade-in delay-300 opacity-0">
<a className="group relative px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg overflow-hidden transition-all hover:opacity-90" href="#work">
                        View Projects
                    </a>
<a className="px-4 py-3 flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="https://github.com" target="_blank">
<iconify-icon height="24" icon="solar:github-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="px-4 py-3 flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="https://twitter.com" target="_blank">
<iconify-icon height="24" icon="solar:plain-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="border-y border-zinc-200 dark:border-white/5 bg-zinc-50/[0.5] dark:bg-white/[0.02] backdrop-blur-sm transition-colors duration-300">
<div className="max-w-5xl mx-auto px-6 py-12">
<p className="text-xs font-light text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-8 text-center">Technologies</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="text-zinc-900 dark:text-white group-hover:scale-110 transition-transform" height="32" icon="solar:code-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-light text-zinc-600 dark:text-zinc-400">Frontend</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="text-zinc-900 dark:text-white group-hover:scale-110 transition-transform" height="32" icon="solar:server-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-light text-zinc-600 dark:text-zinc-400">Backend</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="text-zinc-900 dark:text-white group-hover:scale-110 transition-transform" height="32" icon="solar:database-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-light text-zinc-600 dark:text-zinc-400">Data</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="text-zinc-900 dark:text-white group-hover:scale-110 transition-transform" height="32" icon="solar:cloud-storage-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-light text-zinc-600 dark:text-zinc-400">Cloud</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<iconify-icon className="text-zinc-900 dark:text-white group-hover:scale-110 transition-transform" height="32" icon="solar:smartphone-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-light text-zinc-600 dark:text-zinc-400">Mobile</span>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-32" id="work">
<div className="flex items-end justify-between mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">Selected Work</h2>
<a className="text-xs font-light text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="group relative rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden hover:border-zinc-300 dark:hover:bg-white/[0.04] transition-all duration-300 shadow-sm dark:shadow-none">
<div className="aspect-[16/10] bg-gradient-to-tr from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 relative overflow-hidden transition-colors duration-300">
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105 transform">
<iconify-icon className="text-zinc-800 dark:text-white" height="64" icon="solar:chart-square-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white dark:from-[#050505] to-transparent opacity-80"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">Finance Dashboard</h3>
<div className="flex gap-2">
<span className="text-[10px] font-light uppercase tracking-wide border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">Next.js</span>
<span className="text-[10px] font-light uppercase tracking-wide border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">Postgres</span>
</div>
</div>
<p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                            Real-time financial data visualization platform with high-frequency updates and complex charting capabilities.
                        </p>
<a className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform" href="#">
                            View Deployment <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</article>

<article className="group relative rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden hover:border-zinc-300 dark:hover:bg-white/[0.04] transition-all duration-300 shadow-sm dark:shadow-none">
<div className="aspect-[16/10] bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-[#0F172A] dark:to-[#1E293B] relative overflow-hidden transition-colors duration-300">
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105 transform">
<iconify-icon className="text-zinc-800 dark:text-white" height="64" icon="solar:widget-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white dark:from-[#050505] to-transparent opacity-80"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">SaaS Component Library</h3>
<div className="flex gap-2">
<span className="text-[10px] font-light uppercase tracking-wide border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">React</span>
<span className="text-[10px] font-light uppercase tracking-wide border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">Typescript</span>
</div>
</div>
<p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                            A lightweight, accessible, and headless component library designed for modern enterprise applications.
                        </p>
<a className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform" href="#">
                            View Source <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</article>

<article className="group relative rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden hover:border-zinc-300 dark:hover:bg-white/[0.04] transition-all duration-300 shadow-sm dark:shadow-none">
<div className="aspect-[16/10] bg-gradient-to-tr from-stone-100 to-stone-200 dark:from-[#1c1917] dark:to-[#292524] relative overflow-hidden transition-colors duration-300">
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105 transform">
<iconify-icon className="text-zinc-800 dark:text-white" height="64" icon="solar:cart-large-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white dark:from-[#050505] to-transparent opacity-80"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">E-commerce Engine</h3>
<div className="flex gap-2">
<span className="text-[10px] font-light uppercase tracking-wide border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">Go</span>
<span className="text-[10px] font-light uppercase tracking-wide border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">Redis</span>
</div>
</div>
<p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                            High-throughput headless e-commerce backend handling thousands of transactions per second.
                        </p>
<a className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform" href="#">
                            View Case Study <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</article>

<article className="group relative rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden hover:border-zinc-300 dark:hover:bg-white/[0.04] transition-all duration-300 shadow-sm dark:shadow-none">
<div className="aspect-[16/10] bg-gradient-to-tr from-neutral-100 to-neutral-200 dark:from-[#171717] dark:to-[#262626] relative overflow-hidden transition-colors duration-300">
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105 transform">
<iconify-icon className="text-zinc-800 dark:text-white" height="64" icon="solar:chat-round-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white dark:from-[#050505] to-transparent opacity-80"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">AI Chat Interface</h3>
<div className="flex gap-2">
<span className="text-[10px] font-light uppercase tracking-wide border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">OpenAI</span>
<span className="text-[10px] font-light uppercase tracking-wide border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded text-zinc-500 dark:text-zinc-400">Svelte</span>
</div>
</div>
<p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                            Fluid conversational interface with streaming responses and semantic search capabilities.
                        </p>
<a className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform" href="#">
                            Try Demo <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</article>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-200 dark:border-white/5 transition-colors duration-300" id="about">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4">Experience</h2>
<p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        My journey through the tech landscape, delivering robust solutions for startups and enterprise clients.
                    </p>
</div>
<div className="md:col-span-2 space-y-8">

<div className="relative pl-8 border-l border-zinc-200 dark:border-white/10">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600"></div>
<span className="text-xs font-light text-zinc-400 dark:text-zinc-500 mb-1 block">2022 - Present</span>
<h4 className="text-base font-medium text-zinc-900 dark:text-white tracking-tight">Senior Full Stack Engineer</h4>
<span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-2">TechCorp Inc.</span>
<p className="text-sm font-light text-zinc-600 dark:text-zinc-400">Leading the frontend infrastructure team, migrating legacy systems to modern architectures, and improving site performance by 40%.</p>
</div>

<div className="relative pl-8 border-l border-zinc-200 dark:border-white/10">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white dark:bg-[#050505] border border-zinc-300 dark:border-zinc-700"></div>
<span className="text-xs font-light text-zinc-400 dark:text-zinc-500 mb-1 block">2020 - 2022</span>
<h4 className="text-base font-medium text-zinc-900 dark:text-white tracking-tight">Software Developer</h4>
<span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-2">Creative Studio</span>
<p className="text-sm font-light text-zinc-600 dark:text-zinc-400">Developed interactive marketing sites and internal tools. Collaborated closely with design teams to implement pixel-perfect UIs.</p>
</div>

<div className="relative pl-8 border-l border-zinc-200 dark:border-white/10">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white dark:bg-[#050505] border border-zinc-300 dark:border-zinc-700"></div>
<span className="text-xs font-light text-zinc-400 dark:text-zinc-500 mb-1 block">2018 - 2020</span>
<h4 className="text-base font-medium text-zinc-900 dark:text-white tracking-tight">Freelance Developer</h4>
<span className="text-xs text-zinc-500 dark:text-zinc-400 block mb-2">Self Employed</span>
<p className="text-sm font-light text-zinc-600 dark:text-zinc-400">Delivered over 20+ web projects for small businesses, focusing on SEO optimization and responsive design.</p>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-32 border-t border-zinc-200 dark:border-white/5 transition-colors duration-300" id="contact">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-900 dark:text-white mb-4">Let's build something great.</h2>
<p className="text-sm font-light text-zinc-500 dark:text-zinc-400 mb-10">
                    Currently open for new opportunities and collaborations.
                </p>
<form className="space-y-4 text-left">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative group">
<input className="w-full bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 focus:bg-white dark:focus:bg-white/[0.05] transition-all" placeholder="Name" type="text"/>
</div>
<div className="relative group">
<input className="w-full bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 focus:bg-white dark:focus:bg-white/[0.05] transition-all" placeholder="Email" type="email"/>
</div>
</div>
<div className="relative group">
<textarea className="w-full bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 focus:bg-white dark:focus:bg-white/[0.05] transition-all resize-none" placeholder="Message" rows="4"></textarea>
</div>
<button className="w-full md:w-auto px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors" type="button">
                        Send Message
                    </button>
</form>
</div>
</section>
<footer className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#050505] transition-colors duration-300">
<div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-zinc-500 font-light">
                    © 2024 Alex Dev. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brands-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brands-github-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brands-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
