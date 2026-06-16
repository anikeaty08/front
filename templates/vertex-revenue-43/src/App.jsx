import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // 1. Three.js 3D Animation (Abstract Data Node)
        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            
            // Camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            // Renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            // Object: Abstract Icosahedron (Wireframe)
            const geometry = new THREE.IcosahedronGeometry(2.5, 1);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0x6366f1, 
                wireframe: true, 
                transparent: true, 
                opacity: 0.15 
            });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            // Particles around
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 300;
            const posArray = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 10;
            }
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.02,
                color: 0x818cf8,
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
            const animate = () => {
                requestAnimationFrame(animate);

                // Rotation
                sphere.rotation.x += 0.001;
                sphere.rotation.y += 0.002;
                
                particlesMesh.rotation.y -= 0.0005;

                // Parallax
                sphere.rotation.x += mouseY * 0.05;
                sphere.rotation.y += mouseX * 0.05;

                renderer.render(scene, camera);
            };

            animate();

            // Resize Handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };
        
        initThreeJS();

        // 2. Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    
                    // Trigger Counter Animation if it's a counter section
                    const counters = entry.target.querySelectorAll('.counter');
                    if(counters.length > 0) {
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; 
                            const increment = target / (duration / 16); 
                            
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                        });
                        // Stop observing once triggered
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // 3. Navbar background blur on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-grain"></div>

<div className="fixed top-0 left-0 w-full h-[100vh] z-[-1] opacity-60" id="canvas-container"></div>

<div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-[-1]"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/70 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-6 h-6 bg-gradient-to-br from-white to-neutral-400 rounded-md flex items-center justify-center shadow-lg">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white">VERTEX</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#product">Product</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#customers">Customers</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Sign In</a>
<button className="bg-white text-black px-4 py-2 rounded text-xs font-semibold hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    Start Enterprise Trial
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-8 animate-visible" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[11px] font-medium text-indigo-200 tracking-wide uppercase">New: Predictive AI Pipeline 2.0</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.05] animate-visible" style={{animationDelay: '0.2s'}}>
                Revenue intelligence <br/>
<span className="text-neutral-500">without the guesswork.</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light mb-10 leading-relaxed animate-visible" style={{animationDelay: '0.3s'}}>
                Unify attribution, creative performance, and pipeline velocity. 
                Increase MQL to SQL conversion by <span className="text-white font-medium">26%</span> in your first quarter.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-visible" style={{animationDelay: '0.4s'}}>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded text-sm font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    Start Enterprise Trial
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 glass-button text-white rounded text-sm font-medium flex items-center justify-center gap-2 group">
<span className="iconify text-neutral-400 group-hover:text-white transition-colors" data-icon="lucide:play-circle" data-width="16"></span>
                    Watch 2-Min Demo
                </button>
</div>

<p className="mt-10 text-[10px] text-neutral-500 uppercase tracking-widest animate-visible" style={{animationDelay: '0.5s'}}>Powering revenue teams at</p>
</div>
</section>

<section className="border-y border-white/5 bg-black/40 backdrop-blur-sm py-10 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">

<div className="flex items-center gap-2 group"><span className="iconify text-white" data-icon="lucide:hexagon" data-width="20"></span><span className="text-lg font-bold text-white tracking-tight">Acme</span></div>
<div className="flex items-center gap-2 group"><span className="iconify text-white" data-icon="lucide:triangle" data-width="20"></span><span className="text-lg font-bold text-white tracking-tight">Vercel</span></div>
<div className="flex items-center gap-2 group"><span className="iconify text-white" data-icon="lucide:circle" data-width="20"></span><span className="text-lg font-bold text-white tracking-tight">Stripe</span></div>
<div className="flex items-center gap-2 group"><span className="iconify text-white" data-icon="lucide:square" data-width="20"></span><span className="text-lg font-bold text-white tracking-tight">Linear</span></div>
<div className="flex items-center gap-2 group"><span className="iconify text-white" data-icon="lucide:wind" data-width="20"></span><span className="text-lg font-bold text-white tracking-tight">Tailwind</span></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Stop flying blind with fragmented data.</h2>
<div className="space-y-6">
<div className="flex gap-4 p-4 rounded-lg border border-red-500/10 bg-red-500/5">
<span className="iconify text-red-400 mt-1 flex-shrink-0" data-icon="lucide:x-circle" data-width="20"></span>
<div>
<h4 className="text-white text-sm font-medium">Siloed Analytics</h4>
<p className="text-neutral-400 text-xs mt-1">Marketing data in spreadsheets, sales data in CRM. No single source of truth.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg border border-red-500/10 bg-red-500/5">
<span className="iconify text-red-400 mt-1 flex-shrink-0" data-icon="lucide:x-circle" data-width="20"></span>
<div>
<h4 className="text-white text-sm font-medium">Leaky Funnel</h4>
<p className="text-neutral-400 text-xs mt-1">Losing 40% of leads due to slow follow-up and poor attribution models.</p>
</div>
</div>
</div>
</div>
<div className="animate-on-scroll delay-100">
<div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none"></div>
<h3 className="text-xl font-medium text-white mb-6">The Vertex Advantage</h3>
<ul className="space-y-5">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm">Unified Data Schema across all channels</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm">Real-time attribution &amp; ROI calculation</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-neutral-300 text-sm">Automated budget reallocation logic</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center animate-on-scroll">
<div className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-2 flex justify-center items-center">
<span className="counter" data-target="250">0</span>%
                    </div>
<p className="text-xs text-neutral-500 uppercase tracking-wide">Average ROI Lift</p>
</div>
<div className="text-center animate-on-scroll delay-100">
<div className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-2 flex justify-center items-center">
                        $<span className="counter" data-target="42">0</span>M+
                    </div>
<p className="text-xs text-neutral-500 uppercase tracking-wide">Revenue Tracked</p>
</div>
<div className="text-center animate-on-scroll delay-200">
<div className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-2 flex justify-center items-center">
<span className="counter" data-target="98">0</span>%
                    </div>
<p className="text-xs text-neutral-500 uppercase tracking-wide">Data Accuracy</p>
</div>
<div className="text-center animate-on-scroll delay-300">
<div className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-2 flex justify-center items-center">
<span className="counter" data-target="12">0</span>h
                    </div>
<p className="text-xs text-neutral-500 uppercase tracking-wide">Saved Weekly Per Rep</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="product">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">See Vertex in action.</h2>
<p className="text-neutral-400">From raw data to revenue signals in milliseconds.</p>
</div>
<div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden aspect-video group cursor-pointer animate-on-scroll">

<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center overflow-hidden">
<div className="w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#0a0a0a] to-[#0a0a0a]"></div>

<svg className="absolute w-full h-full stroke-white/10" viewbox="0 0 800 450">
<path d="M0 400 Q 200 350 400 200 T 800 100" fill="none" strokeWidth="2"></path>
<path d="M0 450 Q 200 400 400 250 T 800 150" fill="none" opacity="0.5" strokeWidth="2"></path>
<rect fill="rgba(255,255,255,0.05)" height="100" rx="4" width="150" x="50" y="50"></rect>
<rect fill="rgba(255,255,255,0.05)" height="100" rx="4" width="150" x="220" y="50"></rect>
<rect fill="rgba(255,255,255,0.02)" height="200" rx="4" width="500" x="50" y="170"></rect>
</svg>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
<span className="iconify text-black ml-1" data-fill="currentColor" data-icon="lucide:play" data-width="24"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl group hover:bg-white/5 transition-all duration-300 animate-on-scroll">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-indigo-400" data-icon="lucide:git-merge" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Multi-Touch Attribution</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Go beyond last-click. Our AI models weight every interaction to reveal the true path to conversion.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:bg-white/5 transition-all duration-300 animate-on-scroll delay-100">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-indigo-400" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Real-Time Velocity</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Streaming data pipelines ensure your dashboards update instantly. No more 24-hour delays.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:bg-white/5 transition-all duration-300 animate-on-scroll delay-200">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-indigo-400" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Predictive Forecasting</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Project quarterly outcomes with 94% historical accuracy using our proprietary ML models.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/10" id="customers">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-2xl font-medium text-white mb-16 animate-on-scroll">Loved by modern revenue leaders.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-[#050505] animate-on-scroll">
<div className="flex gap-1 text-indigo-400 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Vertex transformed how we allocate our $10M annual ad budget. The attribution clarity is unmatched in the industry."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">JS</div>
<div>
<div className="text-xs font-semibold text-white">James Smith</div>
<div className="text-[10px] text-neutral-500">CMO at TechFlow</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-[#050505] animate-on-scroll delay-100">
<div className="flex gap-1 text-indigo-400 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"We reduced CAC by 35% in just two months. The predictive modeling alerted us to churn risks before they happened."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">AL</div>
<div>
<div className="text-xs font-semibold text-white">Ana Lopez</div>
<div className="text-[10px] text-neutral-500">VP Growth at FinScale</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-[#050505] animate-on-scroll delay-200">
<div className="flex gap-1 text-indigo-400 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Implementation took days, not months. The pre-built connectors for Salesforce and HubSpot worked flawlessly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">MR</div>
<div>
<div className="text-xs font-semibold text-white">Michael Ross</div>
<div className="text-[10px] text-neutral-500">Director of RevOps</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Simple, transparent pricing.</h2>
<p className="text-neutral-400">Scale your revenue engine with plans built for growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="pricing-card p-8 rounded-2xl border border-white/10 bg-[#050505] flex flex-col transition-all duration-300 animate-on-scroll">
<div className="mb-4">
<h3 className="text-sm font-semibold text-white uppercase tracking-wider">Starter</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-white">$499</span>
<span className="ml-1 text-sm text-neutral-500">/mo</span>
</div>
</div>
<p className="text-sm text-neutral-400 mb-8">For early-stage startups.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start text-sm text-neutral-300"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> 2 Data Sources</li>
<li className="flex items-start text-sm text-neutral-300"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> Basic Attribution</li>
<li className="flex items-start text-sm text-neutral-300"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> Weekly Reports</li>
</ul>
<button className="w-full py-2.5 rounded border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">Start Trial</button>
</div>

<div className="pricing-card relative p-8 rounded-2xl border border-indigo-500/50 bg-[#0a0a0a] flex flex-col transition-all duration-300 shadow-[0_0_40px_rgba(79,70,229,0.1)] animate-on-scroll delay-100">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-600 rounded-full text-[10px] font-bold text-white uppercase tracking-wide">Most Popular</div>
<div className="mb-4">
<h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Growth</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-white">$1,299</span>
<span className="ml-1 text-sm text-neutral-500">/mo</span>
</div>
</div>
<p className="text-sm text-neutral-400 mb-8">For scaling revenue teams.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start text-sm text-white"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> Unlimited Data Sources</li>
<li className="flex items-start text-sm text-white"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> Multi-touch Attribution</li>
<li className="flex items-start text-sm text-white"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> Predictive Forecasting</li>
<li className="flex items-start text-sm text-white"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> Slack Integrations</li>
</ul>
<button className="w-full py-2.5 rounded bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25">Get Started</button>
</div>

<div className="pricing-card p-8 rounded-2xl border border-white/10 bg-[#050505] flex flex-col transition-all duration-300 animate-on-scroll delay-200">
<div className="mb-4">
<h3 className="text-sm font-semibold text-white uppercase tracking-wider">Enterprise</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-white">Custom</span>
</div>
</div>
<p className="text-sm text-neutral-400 mb-8">For large organizations.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start text-sm text-neutral-300"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> Dedicated Success Manager</li>
<li className="flex items-start text-sm text-neutral-300"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> Custom API Access</li>
<li className="flex items-start text-sm text-neutral-300"><span className="iconify text-indigo-500 mr-2 mt-0.5" data-icon="lucide:check" data-width="14"></span> SSO &amp; Advanced Security</li>
</ul>
<button className="w-full py-2.5 rounded border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-12 text-center animate-on-scroll">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white/5 rounded-lg open:bg-white/10 transition-colors animate-on-scroll">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-neutral-200 text-sm">
<span>How long does implementation take?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-1 px-5 pb-5 leading-relaxed">
                        Most customers are up and running within 24 hours. Our pre-built connectors for Salesforce, HubSpot, Google Ads, and Meta Ads make ingestion automatic.
                    </div>
</details>
<details className="group bg-white/5 rounded-lg open:bg-white/10 transition-colors animate-on-scroll">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-neutral-200 text-sm">
<span>Is my data secure?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-1 px-5 pb-5 leading-relaxed">
                        Yes. We are SOC2 Type II certified and GDPR compliant. Your data is encrypted at rest and in transit.
                    </div>
</details>
<details className="group bg-white/5 rounded-lg open:bg-white/10 transition-colors animate-on-scroll">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-neutral-200 text-sm">
<span>Can I export reports to PDF?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-1 px-5 pb-5 leading-relaxed">
                        Absolutely. All dashboards and reports can be exported to PDF, CSV, or automatically emailed to stakeholders on a schedule.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-black pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8">
                Ready to optimize your revenue?
            </h2>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto font-light">
                Join 500+ data-driven companies. Deploy in minutes.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded text-sm font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Get Started Now
                </button>
<button className="w-full sm:w-auto px-10 py-4 glass-panel text-white rounded text-sm font-medium hover:bg-white/5 transition-colors">
                    Book a Demo
                </button>
</div>
<div className="mt-12 flex justify-center gap-6">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="12"></span> No credit card required
                </div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="iconify text-green-500" data-icon="lucide:shield-check" data-width="12"></span> SOC2 Certified
                </div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-tight text-white">VERTEX</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed mb-6">
                    The operating system for modern revenue teams. <br/>Designed in San Francisco.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Attribution</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Forecasting</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-[10px] text-neutral-600">© 2024 Vertex Inc.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="14"></span></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="14"></span></a>
</div>
</div>
</footer>



    </>
  );
}
