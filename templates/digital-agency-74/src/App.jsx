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
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'blob': 'blob 7s infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('canvas-container');
            
            // Scene Setup
            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x0a0a0a, 0.002);

            // Camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            // Renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            // Geometry - Abstract Icosahedron
            const geometry = new THREE.IcosahedronGeometry(2, 2);
            
            // Material
            const material = new THREE.MeshBasicMaterial({ 
                color: 0x6366f1, // Indigo-500
                wireframe: true,
                transparent: true,
                opacity: 0.15
            });

            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            // Particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 700;
            const posArray = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 15; 
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.02,
                color: 0xffffff,
                transparent: true,
                opacity: 0.4
            });
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            // Mouse Interaction
            let mouseX = 0;
            let mouseY = 0;
            
            document.addEventListener('mousemove', (event) => {
                mouseX = event.clientX / window.innerWidth - 0.5;
                mouseY = event.clientY / window.innerHeight - 0.5;
            });

            // Animation Loop
            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                
                const elapsedTime = clock.getElapsedTime();

                sphere.rotation.y += 0.002;
                sphere.rotation.x += 0.001;
                sphere.rotation.y += mouseX * 0.05;
                sphere.rotation.x += mouseY * 0.05;
                
                particlesMesh.rotation.y = -elapsedTime * 0.05;
                particlesMesh.rotation.x = mouseY * 0.1;
                sphere.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

                renderer.render(scene, camera);
            }

            animate();

            // Handle Resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        });

        // Simple Range Slider Logic
        const rangeInput = document.querySelector('input[type=range]');
        const rangeValue = document.getElementById('budget-value');
        const rangeBar = rangeInput.previousElementSibling; // The indigo bar
        const thumb = rangeInput.nextElementSibling; // The white thumb

        rangeInput.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            rangeValue.textContent = `$${val.toLocaleString()}`;
            
            const min = 1000;
            const max = 50000;
            const percentage = ((val - min) / (max - min)) * 100;
            
            rangeBar.style.width = `${percentage}%`;
            thumb.style.left = `${percentage}%`;
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-xl font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
</div>
                ALLCLIQ
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#industries">Industries</a>
<a className="hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-200" href="#about">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-medium text-white border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-full transition-all hover:border-neutral-500" href="#contact">
                    Get Proposal
                </a>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
<div id="canvas-container"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-blob"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>
<div className="relative z-10 text-center max-w-4xl px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-indigo-200 tracking-wide uppercase">Full-Service Digital Agency</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 text-glow">
                We don't just market.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">We dominate.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                ALLCLIQ is a global creative agency helping brands scale through subscription-based marketing, paid media, and high-end production.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center hover:bg-neutral-200 transition-colors w-full sm:w-auto" href="#contact">
                    Start Your Project
                </a>
<a className="h-12 px-8 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-md text-white font-medium text-sm flex items-center justify-center hover:bg-neutral-800 transition-colors w-full sm:w-auto gap-2 group" href="#work">
                    View Case Studies
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
<div className="absolute bottom-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-6">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest whitespace-nowrap">Trusted by industry leaders</p>
<div className="flex-1 overflow-hidden relative mask-image-linear-gradient">
<div className="flex gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-white">stripe</span>
<span className="text-lg font-semibold tracking-tighter text-white">Linear</span>
<span className="text-lg font-semibold tracking-tighter text-white">Vercel</span>
<span className="text-lg font-semibold tracking-tighter text-white">ACME Corp</span>
<span className="text-lg font-semibold tracking-tighter text-white">Polymath</span>
<span className="text-lg font-semibold tracking-tighter text-white">Ramp</span>
<span className="text-lg font-semibold tracking-tighter text-white">Raycast</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">Our Expertise.</h2>
<p className="text-neutral-400 max-w-xl">A comprehensive suite of digital services designed to scale your business from every angle.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:share-2" width="24"></iconify-icon>
<iconify-icon className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Social Media</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Strategic content and community growth across all major platforms.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:megaphone" width="24"></iconify-icon>
<iconify-icon className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Paid Advertising</h3>
<p className="text-neutral-500 text-sm leading-relaxed">High-ROAS campaigns on Google, Meta, and LinkedIn.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:search" width="24"></iconify-icon>
<iconify-icon className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Search Engine Optimisation</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Technical audits and content strategies to dominate rankings.</p>
</div>

<div className="lg:col-span-2 p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
<iconify-icon icon="lucide:palette" width="140"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:palette" width="24"></iconify-icon>
<iconify-icon className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Digital Design</h3>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">Award-winning UI/UX, brand identity, and visual systems that captivate audiences.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:code-2" width="24"></iconify-icon>
<iconify-icon className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Development</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Full-stack engineering for scalable web and mobile applications.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:users" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Influencer Marketing</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Authentic partnerships that drive brand awareness.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Content Marketing</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Storytelling that converts readers into loyal customers.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:percent" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Conversion Rate Optimisation</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Data-driven testing to maximize funnel efficiency.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:mail" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Email Marketing &amp; Automation</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Automated flows designed for retention and LTV.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:newspaper" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Strategic Public Relations</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Media placement and reputation management.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:bar-chart-2" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Data &amp; Analytics</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Deep insights to inform every strategic decision.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:compass" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Strategy &amp; Consulting</h3>
<p className="text-neutral-500 text-sm leading-relaxed">High-level guidance for market entry and scaling.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-white" icon="lucide:message-circle" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Community Management</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Building and nurturing engaged user bases.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950" id="industries">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">Industries We Serve.</h2>
<p className="text-neutral-400 max-w-lg">Specialized experience across high-growth sectors.</p>
</div>
<a className="text-sm font-medium text-white hover:text-neutral-300 flex items-center gap-2" href="#work">
                    View Case Studies <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:briefcase" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">B2B</span>
</div>
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:shopping-bag" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">B2C</span>
</div>
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:blocks" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Web3</span>
</div>
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:cloud" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">SaaS</span>
</div>
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:wallet" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Fintech</span>
</div>
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:shopping-cart" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Ecommerce</span>
</div>
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:gamepad-2" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">iGaming</span>
</div>
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:monitor" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">IT &amp; Software</span>
</div>
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:trending-up" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Forex</span>
</div>
<div className="h-24 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col items-center justify-center gap-2 group cursor-default">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:bot" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">AI</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">$150M+</div>
<div className="text-sm text-neutral-500 uppercase tracking-wide">Ad Spend Managed</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">2.5k+</div>
<div className="text-sm text-neutral-500 uppercase tracking-wide">Campaigns Launched</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">350%</div>
<div className="text-sm text-neutral-500 uppercase tracking-wide">Average ROI</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">Global</div>
<div className="text-sm text-neutral-500 uppercase tracking-wide">Team Presence</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">Estimate Your Growth</h2>
<p className="text-neutral-400">Configure your needs to get an instant scope.</p>
</div>
<div className="p-8 rounded-3xl bg-neutral-900/30 border border-white/10 backdrop-blur-sm">

<div className="mb-10">
<label className="flex justify-between text-sm font-medium text-white mb-4">
<span>Monthly Budget</span>
<span className="text-indigo-400" id="budget-value">$5,000</span>
</label>
<div className="relative w-full h-2 bg-neutral-800 rounded-full">
<div className="absolute h-full bg-indigo-500 rounded-full w-1/4"></div>
<input className="absolute w-full h-full opacity-0 cursor-pointer z-10" max="50000" min="1000" step="1000" type="range" value="5000"/>
<div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-indigo-500 z-0"></div>
</div>
<div className="flex justify-between text-xs text-neutral-600 mt-2">
<span>$1k</span>
<span>$50k+</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 hover:bg-neutral-800 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-neutral-600 bg-transparent group-hover:border-indigo-500 transition-colors">
<input className="peer appearance-none w-full h-full absolute cursor-pointer" type="checkbox"/>
<iconify-icon className="text-indigo-500 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">Social Media Management</span>
</label>
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 hover:bg-neutral-800 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-neutral-600 bg-transparent group-hover:border-indigo-500 transition-colors">
<input className="peer appearance-none w-full h-full absolute cursor-pointer" type="checkbox"/>
<iconify-icon className="text-indigo-500 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">Paid Advertising</span>
</label>
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 hover:bg-neutral-800 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-neutral-600 bg-transparent group-hover:border-indigo-500 transition-colors">
<input className="peer appearance-none w-full h-full absolute cursor-pointer" type="checkbox"/>
<iconify-icon className="text-indigo-500 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">Web Development</span>
</label>
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 hover:bg-neutral-800 cursor-pointer transition-colors group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-neutral-600 bg-transparent group-hover:border-indigo-500 transition-colors">
<input className="peer appearance-none w-full h-full absolute cursor-pointer" type="checkbox"/>
<iconify-icon className="text-indigo-500 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">AI &amp; Automation</span>
</label>
</div>
<button className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors">
                    Request Custom Proposal
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-white text-lg font-semibold tracking-tighter mb-6 block" href="#">ALLCLIQ</a>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Redefining digital landscapes for the brands of tomorrow.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Social Media</a></li>
<li><a className="hover:text-white transition-colors" href="#">Paid Media</a></li>
<li><a className="hover:text-white transition-colors" href="#">SEO</a></li>
<li><a className="hover:text-white transition-colors" href="#">Web Design</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Connect</h4>
<div className="flex gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-xs text-neutral-600">
<p>© 2024 ALLCLIQ. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
