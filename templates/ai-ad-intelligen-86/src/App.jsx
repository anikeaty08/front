import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
primary: {
50: '#eef2ff',
100: '#e0e7ff',
200: '#c7d2fe',
300: '#a5b4fc',
400: '#818cf8',
500: '#6366f1', // Indigo base
600: '#4f46e5',
700: '#4338ca',
800: '#3730a3',
900: '#312e81',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Routing
        function route(viewId) {
            document.querySelectorAll('.page-view').forEach(view => {
                view.classList.remove('active');
                setTimeout(() => { if(!view.classList.contains('active')) view.style.display = 'none'; }, 400);
            });
            const target = document.getElementById(viewId);
            if(target) {
                target.style.display = 'block';
                setTimeout(() => { 
                    target.classList.add('active'); 
                    window.scrollTo({top: 0, behavior: 'smooth'});
                    initReveal();
                }, 50);
            }
            // Update Nav
            document.querySelectorAll('.nav-link').forEach(link => {
                const isActive = link.dataset.target === viewId;
                link.classList.toggle('bg-white', isActive);
                link.classList.toggle('dark:bg-white/10', isActive);
                link.classList.toggle('text-zinc-900', isActive);
                link.classList.toggle('dark:text-white', isActive);
                link.classList.toggle('shadow-sm', isActive);
            });
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        // Theme
        function toggleTheme() {
            const html = document.documentElement;
            const isDark = html.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateParticlesColor(isDark);
        }

        // Scroll Reveal
        function initReveal() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        }

        // Three.js Particle Wave Animation
        let scene, camera, renderer, particles, count = 0;
        let mouseX = 0, mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        function initThree() {
            const container = document.getElementById('canvas-container');
            
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.z = 1000;

            scene = new THREE.Scene();

            const numParticles = 800;
            const positions = new Float32Array(numParticles * 3);
            const scales = new Float32Array(numParticles);

            let i = 0, j = 0;

            // Create a plane of particles
            for (let ix = 0; ix < 50; ix++) {
                for (let iy = 0; iy < 16; iy++) {
                    positions[i] = ix * 80 - ((50 * 80) / 2); // x
                    positions[i + 1] = 0; // y (will change)
                    positions[i + 2] = iy * 80 - ((16 * 80) / 2); // z
                    
                    scales[j] = 1;
                    
                    i += 3;
                    j++;
                }
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

            const material = new THREE.PointsMaterial({
                color: document.documentElement.classList.contains('dark') ? 0x6366f1 : 0x4f46e5, // Initial color
                size: 6,
                map: createCircleTexture(),
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            document.addEventListener('mousemove', onDocumentMouseMove, false);
            window.addEventListener('resize', onWindowResize, false);
            
            animate();
        }

        function createCircleTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const context = canvas.getContext('2d');
            const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
            gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
            gradient.addColorStop(1, 'rgba(255,255,255,0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, 32, 32);
            
            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        }

        function updateParticlesColor(isDark) {
            if(particles) {
                // Indigo-500 for dark, Indigo-600 for light
                particles.material.color.setHex(isDark ? 0x6366f1 : 0x4f46e5);
            }
        }

        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onDocumentMouseMove(event) {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            const positions = particles.geometry.attributes.position.array;
            const scales = particles.geometry.attributes.scale.array;

            let i = 0, j = 0;
            // Wave Animation
            for (let ix = 0; ix < 50; ix++) {
                for (let iy = 0; iy < 16; iy++) {
                    positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) +
                                       (Math.sin((iy + count) * 0.5) * 50);
                    
                    scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 2 +
                                (Math.sin((iy + count) * 0.5) + 1) * 2;
                    
                    i += 3;
                    j++;
                }
            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.geometry.attributes.scale.needsUpdate = true;

            renderer.render(scene, camera);
            count += 0.1;
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            initThree();
            initReveal();
            route('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60 transition-opacity duration-1000" id="canvas-container"></div>

<div className="fixed inset-0 z-10 pointer-events-none bg-gradient-to-b from-white/0 via-white/50 to-white dark:from-black/0 dark:via-black/50 dark:to-black"></div>

<div className="bg-grid-pattern"></div>

<div className="bg-noise"></div>

<header className="fixed top-0 inset-x-0 z-50 h-16 border-b border-zinc-200/50 dark:border-white/5 bg-white/70 dark:bg-black/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="route('home'); return false;">
<div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/10 flex items-center justify-center border border-zinc-200 dark:border-white/10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-indigo-600 dark:text-indigo-400 text-lg" icon="solar:code-square-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight font-display text-zinc-900 dark:text-white">
                    d10<span className="text-zinc-400">.engineering</span>
</span>
</a>

<nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-white/5 backdrop-blur-sm">
<button className="nav-link px-4 py-1.5 text-xs font-medium rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all hover:bg-white dark:hover:bg-white/10" data-target="home" onclick="route('home')">Platform</button>
<button className="nav-link px-4 py-1.5 text-xs font-medium rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all hover:bg-white dark:hover:bg-white/10" data-target="features" onclick="route('features')">Features</button>
<button className="nav-link px-4 py-1.5 text-xs font-medium rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all hover:bg-white dark:hover:bg-white/10" data-target="pricing" onclick="route('pricing')">Pricing</button>
<button className="nav-link px-4 py-1.5 text-xs font-medium rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all hover:bg-white dark:hover:bg-white/10" data-target="roadmap" onclick="route('roadmap')">Roadmap</button>
</nav>

<div className="flex items-center gap-4">
<button className="p-2 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block text-xl" icon="solar:moon-linear"></iconify-icon>
<iconify-icon className="dark:hidden text-xl" icon="solar:sun-2-linear"></iconify-icon>
</button>
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-medium hover:opacity-90 transition-opacity">
<span>Dashboard</span>
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>

<button className="md:hidden p-2 text-zinc-500 dark:text-zinc-400" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="hidden fixed top-16 inset-x-0 z-40 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-6 md:hidden" id="mobile-menu">
<div className="flex flex-col gap-4">
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-300" href="#" onclick="route('home');">Platform</a>
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-300" href="#" onclick="route('features');">Features</a>
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-300" href="#" onclick="route('pricing');">Pricing</a>
<a className="text-sm font-medium text-zinc-600 dark:text-zinc-300" href="#" onclick="route('roadmap');">Roadmap</a>
</div>
</div>

<main className="relative z-20 pt-24 min-h-screen">

<div className="page-view active" id="home">

<section className="relative py-20 lg:py-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Engineered with DeepSeek-R1
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight font-display text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                        Predictive Ad <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-pulse-slow">Intelligence</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        d10.engineering analyzes your Meta, Google, and TikTok campaigns in real-time, autonomously generating high-performance creatives using Hunyuan models.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 group shadow-xl shadow-indigo-500/10" onclick="route('pricing')">
                            Start Analysis
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white text-sm font-medium hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2" onclick="route('features')">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                            See how it works
                        </button>
</div>
</div>
</section>

<section className="border-y border-zinc-200/50 dark:border-white/5 py-10 bg-zinc-50/50 dark:bg-white/[0.02] backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 mb-6 text-center">
<p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Seamless Integration</p>
</div>
<div className="relative flex overflow-hidden">
<div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-20 px-10">
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:earth-linear"></iconify-icon> META ADS</div>
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:magnifier-linear"></iconify-icon> GOOGLE ADS</div>
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:videocamera-linear"></iconify-icon> TIKTOK ADS</div>
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon> DEEPSEEK-R1</div>
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon> HUNYUAN</div>
</div>
<div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-20 px-10">
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:earth-linear"></iconify-icon> META ADS</div>
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:magnifier-linear"></iconify-icon> GOOGLE ADS</div>
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:videocamera-linear"></iconify-icon> TIKTOK ADS</div>
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon> DEEPSEEK-R1</div>
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-tight"><iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon> HUNYUAN</div>
</div>
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div>
<h2 className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-3">Core Technology</h2>
<h3 className="text-3xl md:text-4xl font-display font-semibold text-zinc-900 dark:text-white tracking-tight">Data-Driven Creativity</h3>
</div>
<button className="hidden md:flex items-center text-sm font-medium text-zinc-500 hover:text-indigo-500 transition-colors mt-4 md:mt-0" onclick="route('features')">
                        View all capabilities <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300 reveal-on-scroll delay-100 backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">DeepSeek Analysis</h4>
<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Diagnose low CTR and CPM using 7B parameter reasoning models running locally on our edge nodes.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300 reveal-on-scroll delay-200 backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:clapperboard-edit-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Generative Video</h4>
<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Create 10-60s video assets automatically using Tencent's Hunyuan model and CosyVoice TTS.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300 reveal-on-scroll delay-300 backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Unified Sync</h4>
<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Cross-platform dashboard for Meta, Google, and TikTok. Compare ROI across all channels instantly.</p>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-zinc-100/80 dark:bg-zinc-900/50 -skew-y-1 transform origin-bottom-right scale-110 -z-10 backdrop-blur-sm"></div>
<div className="max-w-4xl mx-auto text-center reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-display font-semibold text-zinc-900 dark:text-white mb-6 tracking-tight">Ready to scale your reach?</h2>
<p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10">Join 100+ engineering-focused agencies automating their creative workflow.</p>
<button className="h-14 px-10 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/25" onclick="route('pricing')">
                        Get Started Now
                    </button>
</div>
</section>
</div>

<div className="page-view" id="features">
<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h1 className="text-4xl md:text-5xl font-display font-semibold text-zinc-900 dark:text-white mb-6 tracking-tight">Platform Architecture</h1>
<p className="text-lg text-zinc-500 dark:text-zinc-400">Built on a microservices architecture using Go, Python, and Next.js for maximum throughput.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/50 transition-all reveal-on-scroll delay-100 backdrop-blur-sm">
<div className="text-indigo-500 mb-4"><iconify-icon className="text-3xl" icon="solar:chart-square-linear"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">Hourly data sync via WebSocket connections.</p>
</div>
<div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/50 transition-all reveal-on-scroll delay-200 backdrop-blur-sm">
<div className="text-purple-500 mb-4"><iconify-icon className="text-3xl" icon="solar:chat-round-line-linear"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Reasoning Bot</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">Diagnosis Bot using DeepSeek-R1 for specific fixes.</p>
</div>
<div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/50 transition-all reveal-on-scroll delay-300 backdrop-blur-sm">
<div className="text-emerald-500 mb-4"><iconify-icon className="text-3xl" icon="solar:videocamera-record-linear"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Hunyuan Video</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">Generate 1080p videos at $0.15/second cost.</p>
</div>
<div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/50 transition-all reveal-on-scroll delay-100 backdrop-blur-sm">
<div className="text-orange-500 mb-4"><iconify-icon className="text-3xl" icon="solar:microphone-3-linear"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">CosyVoice TTS</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">Natural voiceovers with background music mixing.</p>
</div>
<div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/50 transition-all reveal-on-scroll delay-200 backdrop-blur-sm">
<div className="text-pink-500 mb-4"><iconify-icon className="text-3xl" icon="solar:export-linear"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Data Export</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">JSON/CSV exports for enterprise reporting.</p>
</div>
<div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-indigo-500/50 transition-all reveal-on-scroll delay-300 backdrop-blur-sm">
<div className="text-blue-500 mb-4"><iconify-icon className="text-3xl" icon="solar:shield-check-linear"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">Encrypted tokens (AWS KMS) and Kubernetes isolation.</p>
</div>
</div>
</section>
</div>

<div className="page-view" id="pricing">
<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h1 className="text-4xl md:text-5xl font-display font-semibold text-zinc-900 dark:text-white mb-6 tracking-tight">Transparent Pricing</h1>
<p className="text-lg text-zinc-500 dark:text-zinc-400">Simple commitments. Cancel anytime.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative reveal-on-scroll">
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Base</h3>
<div className="flex items-baseline gap-1 mt-4 mb-6">
<span className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">$15</span>
<span className="text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-600 dark:text-zinc-400">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> 3 Connected Accounts</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Weekly Reports</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> 5 AI Videos / Month</li>
</ul>
<button className="w-full h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">Start Trial</button>
</div>

<div className="p-8 rounded-3xl border border-indigo-500/30 bg-indigo-50/80 dark:bg-indigo-900/10 backdrop-blur-sm relative reveal-on-scroll delay-100">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">Recommended</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Premium</h3>
<div className="flex items-baseline gap-1 mt-4 mb-6">
<span className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">$50</span>
<span className="text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-600 dark:text-zinc-300">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited Accounts</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Real-time Insights</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited AI Videos</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> No Watermark</li>
</ul>
<button className="w-full h-12 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">Get Premium</button>
</div>
</div>
</section>
</div>

<div className="page-view" id="roadmap">
<section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h1 className="text-4xl md:text-5xl font-display font-semibold text-zinc-900 dark:text-white mb-6 tracking-tight">Development Plan</h1>
<p className="text-lg text-zinc-500 dark:text-zinc-400">Our trajectory to revolutionizing ad tech.</p>
</div>
<div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-0 space-y-12">

<div className="relative pl-10 md:pl-0 reveal-on-scroll">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-black"></div>
<div className="md:flex items-start justify-between group">
<div className="md:w-1/2 md:pr-12 md:text-right">
<span className="text-xs font-mono text-indigo-500 mb-1 block">WEEKS 1-3</span>
<h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Foundation</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">AWS Infrastructure setup, PostgreSQL database schema design, and initial API integrations with Meta/Google.</p>
</div>
<div className="hidden md:block md:w-1/2"></div>
</div>
</div>

<div className="relative pl-10 md:pl-0 reveal-on-scroll delay-100">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-black"></div>
<div className="md:flex items-start justify-between group">
<div className="hidden md:block md:w-1/2"></div>
<div className="md:w-1/2 md:pl-12">
<span className="text-xs font-mono text-zinc-500 mb-1 block">WEEKS 4-5</span>
<h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">AI Pipeline</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">DeepSeek-R1 logic implementation and Hunyuan video generation model training and deployment.</p>
</div>
</div>
</div>

<div className="relative pl-10 md:pl-0 reveal-on-scroll delay-200">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-black"></div>
<div className="md:flex items-start justify-between group">
<div className="md:w-1/2 md:pr-12 md:text-right">
<span className="text-xs font-mono text-zinc-500 mb-1 block">MONTH 2</span>
<h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Beta Launch</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">Public beta for 50 users. Product Hunt launch and scaling of paid acquisition channels.</p>
</div>
<div className="hidden md:block md:w-1/2"></div>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-black relative z-20 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-black">
<iconify-icon className="text-sm" icon="solar:code-square-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-zinc-900 dark:text-white">d10.engineering</span>
</div>
<div className="text-xs text-zinc-500 dark:text-zinc-400">
                © 2025 d10 Engineering Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:brand-x-linear"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:brand-github-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
