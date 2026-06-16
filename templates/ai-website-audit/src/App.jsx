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
display: ['Syne', 'sans-serif'],
},
colors: {
dark: {
900: '#050505',
800: '#0f0f0f',
700: '#1a1a1a',
},
accent: {
orange: '#FF3D00',
light: '#FFDBD0',
white: '#FFFFFF',
}
},
backgroundImage: {
'gradient-glow': 'linear-gradient(135deg, #FF3D00 0%, #FFFFFF 100%)',
'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Mock Analysis Interaction ---
        document.getElementById('analyzeButton').addEventListener('click', function() {
            const input = document.getElementById('siteInput').value;
            const resultBox = document.getElementById('result');
            const scoreDisplay = document.getElementById('scoreDisplay');
            const issuesList = document.getElementById('issuesList');
            const fixValue = document.getElementById('fixValue');
            const btn = this;

            if(!input) {
                alert("Please enter a valid URL first.");
                return;
            }

            // Loading state
            btn.innerHTML = `<iconify-icon icon="solar:refresh-circle-linear" class="animate-spin" width="18"></iconify-icon> Analyzing...`;
            btn.classList.add('opacity-80', 'cursor-not-allowed');

            // Simulate API Call delay
            setTimeout(() => {
                // Show result container
                resultBox.classList.remove('hidden');
                resultBox.classList.add('animate-fade-in');

                // Populate mock data
                scoreDisplay.innerText = "64";
                
                issuesList.innerHTML = `
                    <li class="flex items-start gap-3"><iconify-icon icon="solar:close-circle-linear" class="text-red-500 mt-0.5 text-lg"></iconify-icon> <div><span class="text-white font-medium">Missing H1 Tags</span><br><span class="text-xs text-white/40">3 pages missing primary headings.</span></div></li>
                    <li class="flex items-start gap-3"><iconify-icon icon="solar:danger-circle-linear" class="text-accent-orange mt-0.5 text-lg"></iconify-icon> <div><span class="text-white font-medium">Large Layout Shifts</span><br><span class="text-xs text-white/40">Images loading without height attributes.</span></div></li>
                    <li class="flex items-start gap-3"><iconify-icon icon="solar:danger-circle-linear" class="text-accent-orange mt-0.5 text-lg"></iconify-icon> <div><span class="text-white font-medium">Slow Server Response</span><br><span class="text-xs text-white/40">TTFB is 1.2s higher than recommended.</span></div></li>
                `;

                // Animate value
                let startTimestamp = null;
                const duration = 1500;
                const finalValue = 3450;
                
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const currentVal = Math.floor(progress * finalValue);
                    fixValue.innerText = "$" + currentVal.toLocaleString();
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);

                // Reset button
                btn.innerHTML = `<span>Analyze Again</span><iconify-icon icon="solar:refresh-linear" width="18"></iconify-icon>`;
                btn.classList.remove('opacity-80', 'cursor-not-allowed');

                // Scroll to result
                resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

            }, 2000);
        });

        // --- Smooth Scroll Interaction ---
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // --- Three.js Setup ---
        const initThree = () => {
            const canvas = document.querySelector('#webgl-canvas');
            const scene = new THREE.Scene();
            
            // Fog for depth (Darker for contrast)
            scene.fog = new THREE.FogExp2(0x050505, 0.02);

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true
            });

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Geometry: Sphere of Particles (The "Sun/Core")
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 2000;
            const posArray = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i+=3) {
                // Spherical distribution
                const r = 12;
                // Random point inside sphere
                const theta = Math.random() * 2 * Math.PI;
                const phi = Math.acos(2 * Math.random() - 1);
                const distance = Math.pow(Math.random(), 1/3) * r; // Distribute evenly
                
                posArray[i] = distance * Math.sin(phi) * Math.cos(theta);
                posArray[i+1] = distance * Math.sin(phi) * Math.sin(theta);
                posArray[i+2] = distance * Math.cos(phi);
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            // Material: Orange Points
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.05,
                color: 0xFF3D00, // Vibrant Orange
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            });

            const sphereMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(sphereMesh);

            // Add a second outer layer of faint white particles
            const outerGeometry = new THREE.BufferGeometry();
            const outerCount = 500;
            const outerPos = new Float32Array(outerCount * 3);
             for(let i = 0; i < outerCount * 3; i+=3) {
                const r = 18; // Larger radius
                const theta = Math.random() * 2 * Math.PI;
                const phi = Math.acos(2 * Math.random() - 1);
                
                outerPos[i] = r * Math.sin(phi) * Math.cos(theta);
                outerPos[i+1] = r * Math.sin(phi) * Math.sin(theta);
                outerPos[i+2] = r * Math.cos(phi);
            }
            outerGeometry.setAttribute('position', new THREE.BufferAttribute(outerPos, 3));
            const outerMaterial = new THREE.PointsMaterial({
                size: 0.03,
                color: 0xFFFFFF,
                transparent: true,
                opacity: 0.3
            });
            const outerMesh = new THREE.Points(outerGeometry, outerMaterial);
            scene.add(outerMesh);

            // Camera positioning
            camera.position.z = 25;

            // Mouse Interaction
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

            // Clock for smooth animation
            const clock = new THREE.Clock();

            const animate = () => {
                const elapsedTime = clock.getElapsedTime();

                targetX = mouseX * 0.0005;
                targetY = mouseY * 0.0005;

                // Rotate Sphere
                sphereMesh.rotation.y = elapsedTime * 0.1;
                outerMesh.rotation.y = elapsedTime * 0.05;
                outerMesh.rotation.x = elapsedTime * 0.02;

                // Mouse interaction tilt
                scene.rotation.y += 0.05 * (targetX - scene.rotation.y);
                scene.rotation.x += 0.05 * (targetY - scene.rotation.x);

                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };

            animate();

            // Resize Handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }

        // --- Intersection Observer for Scroll Animations ---
        const initScrollAnimations = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1
            });

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            initThree();
            initScrollAnimations();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<canvas className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" height="858" id="webgl-canvas" width="1320"></canvas>

<nav className="fixed top-0 w-full z-40 px-6 py-6 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center glass-panel rounded-full px-6 py-3">
<a className="font-display font-bold text-lg tracking-widest text-white uppercase z-10 flex items-center gap-2 hover:text-accent-orange transition-colors" href="#">
                AI AUDIT
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors" href="#analysis">How it Works</a>
<a className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors" href="#contact">Get Fixed</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-accent-orange hover:bg-white text-white hover:text-accent-orange text-xs font-semibold px-5 py-2.5 rounded-full transition-all border border-accent-orange/20 shadow-[0_0_20px_rgba(255,61,0,0.3)] group" href="#hero">
<span className="transition-colors">Analyze Now</span>
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white hover:text-accent-orange transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="">

<section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden" id="hero">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 text-center w-full max-w-5xl mx-auto mt-12">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-orange/20 bg-accent-orange/5 backdrop-blur-sm mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
</span>
<span className="text-xs font-medium tracking-wide text-accent-orange uppercase">Free Tool</span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-6">
<span className="block text-white">Free AI</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-white to-orange-200 italic font-light pr-4">Website Audit.</span>
</h1>
<p className="font-sans text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                    Enter any website URL and get an instant AI-powered report showing SEO issues, performance problems, and an estimated improvement value.
                </p>

<div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
<div className="relative w-full">
<iconify-icon className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" icon="solar:global-linear" width="20"></iconify-icon>
<input className="w-full pl-14 pr-6 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm backdrop-blur-md focus:outline-none focus:border-accent-orange/50 transition-all placeholder:text-white/30 shadow-inner" id="siteInput" placeholder="https://example.com" type="url"/>
</div>
<button className="w-full md:w-auto shrink-0 group relative px-8 py-4 rounded-full bg-accent-orange hover:bg-white hover:text-accent-orange text-white font-semibold text-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,61,0,0.3)] flex justify-center items-center gap-2" id="analyzeButton">
<span>Analyze My Website</span>
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</button>
</div>

<div className="hidden mt-16 max-w-4xl mx-auto glass-panel rounded-3xl p-6 md:p-8 text-left border-accent-orange/30" id="result">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col items-center justify-center p-6 border border-white/5 rounded-2xl bg-black/40">
<span className="text-xs text-white/50 uppercase tracking-widest mb-3 font-mono">Website Score</span>
<div className="text-6xl font-display font-semibold text-gradient-warm leading-none mb-1" id="scoreDisplay">--</div>
<span className="text-xs text-white/30 font-medium">Out of 100</span>
</div>

<div className="md:col-span-1 p-6 border border-white/5 rounded-2xl bg-black/40">
<span className="text-xs text-white/50 uppercase tracking-widest mb-4 block font-mono">Issues Found</span>
<ul className="space-y-3 text-sm text-white/70" id="issuesList">

</ul>
</div>

<div className="flex flex-col items-center justify-center p-6 border border-accent-orange/20 rounded-2xl bg-accent-orange/5 relative overflow-hidden group">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-orange/20 blur-2xl rounded-full group-hover:bg-accent-orange/30 transition-colors"></div>
<span className="text-xs text-accent-orange uppercase tracking-widest mb-3 relative z-10 font-mono text-center">Estimated Fix Value</span>
<div className="text-4xl md:text-5xl font-display font-semibold text-white relative z-10 tracking-tight" id="fixValue">$0</div>
<span className="text-[10px] text-white/40 mt-2 relative z-10 text-center uppercase tracking-wider">Potential Monthly MRR</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="benefits">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
<div>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-4">Deep <span className="text-gradient-accent">Diagnostics</span></h2>
<p className="text-white/50 max-w-md text-sm md:text-base">We translate complex website data into actionable growth strategies.</p>
</div>
<div className="flex items-center gap-2 text-accent-orange text-sm font-medium border-b border-accent-orange/30 pb-1">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
<span>Lightning Fast</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-2xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center mb-6 text-accent-orange pulsing-eye relative">
<iconify-icon icon="solar:scanner-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3">AI Website Analysis</h3>
<p className="text-white/50 text-sm leading-relaxed">Instant automated audit of SEO, performance, and structural hierarchy across your entire domain.</p>
</div>

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:magnifer-bug-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3">Find Hidden Issues</h3>
<p className="text-white/50 text-sm leading-relaxed">Detect missing SEO tags, slow loading elements, dead links, and critical UX problems hurting your rank.</p>
</div>

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3">Increase Conversions</h3>
<p className="text-white/50 text-sm leading-relaxed">Fix identified issues to reduce bounce rates, boost search visibility, and turn more visitors into customers.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 bg-dark-800/30 border-y border-white/5" id="analysis">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-16 text-center reveal-on-scroll">Comprehensive Analysis</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden border border-white/10 reveal-on-scroll bg-black">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,61,0,0.15),transparent_60%)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-accent-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
<div className="w-32 h-32 rounded-full bg-accent-orange/20 blur-xl animate-pulse"></div>
<div className="w-40 h-40 rounded-full border border-accent-orange/10 border-dashed animate-[spin_10s_linear_infinite]"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full z-10">
<div className="flex justify-between items-end">
<div>
<span className="text-xs font-mono text-accent-orange mb-2 block uppercase tracking-widest">Core Web Vitals</span>
<h3 className="font-display text-2xl font-medium">Performance Metrics</h3>
<p className="text-white/40 text-sm mt-2 max-w-xs">We analyze LCP, FID, and CLS to ensure your site loads instantly on any connection.</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 group relative rounded-3xl overflow-hidden border border-white/10 reveal-on-scroll bg-gradient-to-b from-[#1a1a1a] to-black">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="text-xs font-mono text-white/40 mb-2 block uppercase">Architecture</span>
<h3 className="font-display text-xl font-medium">SEO Structure</h3>
<p className="text-white/40 text-xs mt-2">Deep crawl of meta tags, headings, schema markup, and internal linking strategies.</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden border border-white/10 reveal-on-scroll bg-dark-800 hover:bg-white/5 transition-colors">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:text-accent-orange group-hover:border-accent-orange/30 transition-all">
<iconify-icon icon="solar:shield-keyhole-linear" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-6 left-6">
<span className="text-xs font-mono text-white/50 uppercase">SSL &amp; Security</span>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden border border-white/10 reveal-on-scroll bg-dark-800">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent hover:bg-accent-orange/5 transition-colors flex flex-col justify-between p-6">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/70" icon="solar:accessibility-linear" width="28"></iconify-icon>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded-full text-white/40">WCAG</span>
</div>
<div>
<h3 className="font-display text-lg font-medium">Accessibility</h3>
<p className="text-xs text-white/40 mt-1">Usable by everyone.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 relative z-10 overflow-hidden" id="contact">
<div className="text-center max-w-4xl mr-auto ml-auto relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-accent-orange/10 rounded-full pointer-events-none animate-pulse"></div>
<h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight mb-8 reveal-on-scroll">
                    Want Us To<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-white">Fix Your Website?</span>
</h2>
<div className="glass-panel max-w-md mx-auto rounded-3xl p-8 mb-12 reveal-on-scroll border-accent-orange/20 relative z-20">
<div className="text-sm text-accent-orange font-mono mb-6 uppercase tracking-widest text-left">Consultation Request</div>
<form className="flex flex-col gap-4" id="leadForm" onsubmit="event.preventDefault()">
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" icon="solar:user-linear" width="18"></iconify-icon>
<input className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white text-sm focus:outline-none focus:border-accent-orange/50 transition-all placeholder:text-white/30" id="nameInput" placeholder="Your Name" required="" type="text"/>
</div>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" icon="solar:letter-linear" width="18"></iconify-icon>
<input className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white text-sm focus:outline-none focus:border-accent-orange/50 transition-all placeholder:text-white/30" id="emailInput" placeholder="Work Email" required="" type="email"/>
</div>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" icon="solar:link-linear" width="18"></iconify-icon>
<input className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white text-sm focus:outline-none focus:border-accent-orange/50 transition-all placeholder:text-white/30" id="websiteInput" placeholder="https://example.com" required="" type="url"/>
</div>
<button className="mt-4 w-full group relative inline-flex justify-center items-center gap-2 px-8 py-4 bg-accent-orange hover:bg-white hover:text-accent-orange text-white rounded-xl font-semibold text-sm overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(255,61,0,0.3)]" id="leadSubmit" type="submit">
<span>Get My Fix Plan</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
<div className="mt-4 text-xs text-white/30 text-center">We typically respond within 24 hours.</div>
</div>
<div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-display font-bold">Shopify</span>
<span className="text-lg font-display font-bold">WordPress</span>
<span className="text-lg font-display font-bold">Webflow</span>
<span className="text-lg font-display font-bold">Next.js</span>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 px-6 relative z-10 bg-dark-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="font-display font-bold text-xl tracking-widest uppercase hover:text-accent-orange transition-colors cursor-pointer">AI AUDIT</span>
<span className="text-xs text-white/30 ml-2">© 2024</span>
</div>
<div className="flex gap-8">
<a className="text-white/40 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
