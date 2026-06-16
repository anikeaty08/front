import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#000000', // Pure Black
accent: '#ef4444', // Red 500 (Highlights)
secondary: '#a3a3a3', // Neutral 400
tertiary: '#525252', // Neutral 600
surface: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.1)',
textMain: '#fafafa', // Neutral 50
textMuted: '#737373', // Neutral 500
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.05em',
}
}
}
}



        // Custom Cursor
        const cursorRing = document.getElementById('cursor-ring');
        const cursorDot = document.getElementById('cursor-dot');
        const links = document.querySelectorAll('a, button, input, textarea, select');

        window.addEventListener('mousemove', (e) => {
            if(!cursorRing) return;
            gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.2 });
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.05 });
        });

        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(cursorRing, { scale: 2, borderColor: '#ef4444', duration: 0.2 });
                gsap.to(cursorDot, { backgroundColor: '#ef4444', duration: 0.2 });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(cursorRing, { scale: 1, borderColor: 'rgba(255, 255, 255, 0.2)', duration: 0.2 });
                gsap.to(cursorDot, { backgroundColor: '#fff', duration: 0.2 });
            });
        });

        // Three.js Background (Clean Network)
        const initThree = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Objects
            const geometry = new THREE.IcosahedronGeometry(2.5, 1);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0xffffff, 
                wireframe: true, 
                transparent: true, 
                opacity: 0.05 
            });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            // Particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 400;
            const posArray = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 12;
            }
            
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.015,
                color: 0xef4444, // Red
                transparent: true,
                opacity: 0.3,
            });
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            camera.position.z = 6;

            let mouseX = 0;
            let mouseY = 0;
            
            document.addEventListener('mousemove', (event) => {
                mouseX = event.clientX / window.innerWidth - 0.5;
                mouseY = event.clientY / window.innerHeight - 0.5;
            });

            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();

                sphere.rotation.y = elapsedTime * 0.05;
                sphere.rotation.x = elapsedTime * 0.02;
                
                particlesMesh.rotation.y = -elapsedTime * 0.02;

                // Subtle interaction
                sphere.rotation.y += mouseX * 0.1;
                sphere.rotation.x += mouseY * 0.1;

                renderer.render(scene, camera);
            }
            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        window.addEventListener('load', initThree);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader-overlay fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center font-mono text-[10px] tracking-widest">
<div className="w-32 h-[1px] bg-border relative overflow-hidden mb-4">
<div className="absolute inset-0 bg-accent animate-[loading_1.5s_ease-in-out_infinite]" style={{width: '50%'}}></div>
</div>
<span className="text-textMuted uppercase">Establishing Link...</span>
<style>
            @keyframes loading {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(200%); }
            }
        </style>
</div>

<div className="hidden md:block fixed w-6 h-6 rounded-full border border-white/20 pointer-events-none z-[60] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" id="cursor-ring"></div>
<div className="hidden md:block fixed w-1 h-1 rounded-full bg-white pointer-events-none z-[60] -translate-x-1/2 -translate-y-1/2" id="cursor-dot"></div>

<div className="fixed inset-0 z-0 opacity-40 pointer-events-none" id="canvas-container"></div>

<nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-2.5 items-center gap-8 shadow-2xl shadow-black">
<a className="text-[11px] font-medium text-textMuted hover:text-white transition-colors tracking-wide" href="#vision">VISION</a>
<a className="text-[11px] font-medium text-textMuted hover:text-white transition-colors tracking-wide" href="#services">SERVICES</a>
<a className="text-[11px] font-medium text-textMuted hover:text-white transition-colors tracking-wide" href="#outcomes">OUTCOMES</a>
<div className="w-px h-3 bg-white/10"></div>
<a className="text-[11px] font-medium px-4 py-1.5 bg-white text-bg rounded-full hover:bg-neutral-200 transition-all duration-300" href="#contact">BOOK STRATEGY</a>
</nav>

<nav className="md:hidden fixed bottom-6 left-6 right-6 z-50 glass rounded-2xl p-4 flex justify-between items-center shadow-2xl border border-white/10 bg-black/90 backdrop-blur-xl">
<a className="flex flex-col items-center gap-1 text-textMuted hover:text-white transition-colors" href="#vision">
<iconify-icon icon="lucide:eye" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-[9px] tracking-wide">Vision</span>
</a>
<a className="flex flex-col items-center gap-1 text-textMuted hover:text-white transition-colors" href="#services">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-[9px] tracking-wide">Services</span>
</a>
<a className="flex flex-col items-center gap-1 text-textMuted hover:text-white transition-colors" href="#outcomes">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-[9px] tracking-wide">ROI</span>
</a>
<a className="flex flex-col items-center gap-1 text-textMuted hover:text-white transition-colors" href="#contact">
<iconify-icon icon="lucide:calendar-check-2" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-[9px] tracking-wide">Book</span>
</a>
</nav>
<main className="relative z-10 w-full">

<section className="min-h-screen w-full flex flex-col items-center justify-center relative px-6 py-20" id="vision">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bg via-transparent to-bg pointer-events-none"></div>
<div className="text-center relative z-10 max-w-4xl mx-auto mt-10">
<h1 className="font-display font-light italic text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] mb-8 text-white">
                    "If we all did the things we are <span className="text-white not-italic font-medium">really capable</span> of doing, we would literally <span className="text-glow not-italic font-medium text-white">astound ourselves</span>."
                    <span className="block text-lg md:text-xl font-sans not-italic text-textMuted/60 mt-4 tracking-normal">— Thomas Edison</span>
</h1>
<p className="font-sans text-sm md:text-base text-textMuted max-w-xl mx-auto leading-relaxed mb-6 font-light tracking-wide">
                    Businesses operate at only a fraction of their potential. <br className="hidden md:block"/>
                    We help leaders unlock the rest through digital leverage, operational clarity, and modern execution.
                </p>
<p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-10">
                    Strategic Transformation Focused on Revenue, Efficiency, and Scale.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-sans text-xs font-medium tracking-wide text-bg bg-white rounded-full transition-all duration-300 hover:bg-neutral-200" href="#contact">
<span className="relative flex items-center gap-2">
                            REQUEST ASSESSMENT
                            <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</span>
</a>
<a className="text-xs text-textMuted hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-0.5" href="#services">
                        See What's Possible
                    </a>
</div>

<div className="mt-24 border-t border-white/5 pt-10 max-w-2xl mx-auto">
<p className="text-sm font-display text-textMuted leading-relaxed">
<span className="text-white">Modern companies win through leverage</span> — digital, operational, and strategic. We build it for them. Our work compounds silently in the background while leaders focus on clients, product, and growth.
                    </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-3 text-white">Transformation Services</h2>
<p className="text-sm text-textMuted font-light">Turnkey systems engineered for high-impact business outcomes.<br/>You set the goals — we design the execution.</p>
</div>
<div className="h-px bg-white/10 flex-1 md:ml-12 md:mb-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02]">
<div className="absolute top-8 right-8 text-white/20 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:monitor" strokeWidth="1" width="36"></iconify-icon>
</div>
<div className="relative z-10 pt-4">
<h3 className="font-display font-medium text-lg mb-2 text-white">Modern Presence Upgrade</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light h-10">Replace outdated websites with conversion-grade, credible, high-performing digital identities.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Increased Buyer Trust</li>
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Improved Conversion Economics</li>
</ul>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02]">
<div className="absolute top-8 right-8 text-white/20 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:activity" strokeWidth="1" width="36"></iconify-icon>
</div>
<div className="relative z-10 pt-4">
<h3 className="font-display font-medium text-lg mb-2 text-white">Operational Intelligence Audit</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light h-10">We analyze bottlenecks, workflows, and cost centers to identify high-ROI leverage points.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Software Spend Reduction</li>
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Clarity Report &amp; Roadmap</li>
</ul>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02]">
<div className="absolute top-8 right-8 text-white/20 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:aperture" strokeWidth="1" width="36"></iconify-icon>
</div>
<div className="relative z-10 pt-4">
<h3 className="font-display font-medium text-lg mb-2 text-white">On-Demand Creative Studio</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light h-10">Studio-grade content and product marketing without on-site shoots or agency retainers.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Continuous Market Presence</li>
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Faster Feedback Loops</li>
</ul>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02]">
<div className="absolute top-8 right-8 text-white/20 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:git-merge" strokeWidth="1" width="36"></iconify-icon>
</div>
<div className="relative z-10 pt-4">
<h3 className="font-display font-medium text-lg mb-2 text-white">Workflow Automation Systems</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light h-10">Eliminate manual, low-value tasks and optimize handoffs across the business.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Productivity Without Headcount</li>
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Cost Containment</li>
</ul>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02]">
<div className="absolute top-8 right-8 text-white/20 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:message-square" strokeWidth="1" width="36"></iconify-icon>
</div>
<div className="relative z-10 pt-4">
<h3 className="font-display font-medium text-lg mb-2 text-white">Intelligent Reception</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light h-10">Never miss a lead. Intelligent routing, qualification, and scheduling.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Higher Lead Capture</li>
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Reduced Customer Leakage</li>
</ul>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02]">
<div className="absolute top-8 right-8 text-white/20 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:database" strokeWidth="1" width="36"></iconify-icon>
</div>
<div className="relative z-10 pt-4">
<h3 className="font-display font-medium text-lg mb-2 text-white">Custom Business Systems</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light h-10">We design tailored operational tools that replace bloated SaaS stacks.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Designed Around Your Business</li>
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Fewer Subscriptions</li>
</ul>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02] md:col-span-2 lg:col-span-3">
<div className="absolute top-8 right-8 text-white/20 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:graduation-cap" strokeWidth="1" width="36"></iconify-icon>
</div>
<div className="relative z-10 pt-4 max-w-2xl">
<h3 className="font-display font-medium text-lg mb-2 text-white">Founder Training &amp; Enablement</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light">We train executives and teams to extract value from modern tools, frameworks, and capabilities. Outcome: Internal velocity, skill enablement, and strategic independence.</p>
<ul className="flex flex-wrap gap-4 mb-6">
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Internal Velocity</li>
<li className="flex items-center gap-2 text-[10px] text-textMuted"><iconify-icon className="text-accent" icon="lucide:check"></iconify-icon> Strategic Independence</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 md:px-12 bg-bg border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-2 mb-10">
<iconify-icon className="text-white" icon="lucide:route" width="20"></iconify-icon>
<span className="font-mono text-[10px] text-white tracking-widest uppercase">Our Approach</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-16">
<div>
<div className="text-[10px] font-mono text-textMuted/50 mb-4">01</div>
<h3 className="font-display font-medium text-xl text-white mb-2">Assess</h3>
<p className="text-sm text-textMuted font-light leading-relaxed">Identify constraints, bottlenecks, and leverage points. The highest ROI improvements are often invisible until analyzed.</p>
</div>
<div>
<div className="text-[10px] font-mono text-textMuted/50 mb-4">02</div>
<h3 className="font-display font-medium text-xl text-white mb-2">Architect</h3>
<p className="text-sm text-textMuted font-light leading-relaxed">Design workflows, systems, and execution frameworks tailored to your unique operational DNA.</p>
</div>
<div>
<div className="text-[10px] font-mono text-textMuted/50 mb-4">03</div>
<h3 className="font-display font-medium text-xl text-white mb-2">Implement</h3>
<p className="text-sm text-textMuted font-light leading-relaxed">Deploy solutions and optimize for compound efficiency. We build, you steer.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-bg relative overflow-hidden" id="outcomes">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 mb-4">
<iconify-icon className="text-accent" icon="lucide:trending-up" width="20"></iconify-icon>
<span className="font-mono text-[10px] text-accent tracking-widest uppercase">Outcome Model</span>
</div>
<h2 className="font-display font-medium text-3xl md:text-5xl tracking-tight mb-6 leading-[1.1] text-white">
                    CLARITY,<br/>
<span className="text-textMuted">NOT COMPLEXITY.</span>
</h2>
<p className="text-sm text-textMuted font-light mb-12 max-w-lg mx-auto leading-relaxed">
                    Leaders shouldn’t have to manage tools, workflows, or technical details. We provide the roadmap, the systems, and the leverage — you steer the business.
                </p>
<div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
<div className="flex items-center gap-3 p-4 border border-white/5 rounded-lg bg-white/[0.02]">
<iconify-icon className="text-accent shrink-0" icon="lucide:check" width="16"></iconify-icon>
<span className="text-xs text-textMuted font-light">Recover 10–40 hours weekly from operational drag</span>
</div>
<div className="flex items-center gap-3 p-4 border border-white/5 rounded-lg bg-white/[0.02]">
<iconify-icon className="text-accent shrink-0" icon="lucide:check" width="16"></iconify-icon>
<span className="text-xs text-textMuted font-light">Reduce software bloat and recurring overhead</span>
</div>
<div className="flex items-center gap-3 p-4 border border-white/5 rounded-lg bg-white/[0.02]">
<iconify-icon className="text-accent shrink-0" icon="lucide:check" width="16"></iconify-icon>
<span className="text-xs text-textMuted font-light">Accelerate sales and customer response cycles</span>
</div>
<div className="flex items-center gap-3 p-4 border border-white/5 rounded-lg bg-white/[0.02]">
<iconify-icon className="text-accent shrink-0" icon="lucide:check" width="16"></iconify-icon>
<span className="text-xs text-textMuted font-light">Improve internal decision velocity</span>
</div>
</div>
<div className="mt-12">
<a className="text-xs font-medium text-white border-b border-white/30 pb-1 hover:text-accent hover:border-accent transition-all inline-block" href="#contact">
                        Request Assessment
                    </a>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="contact">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>
</div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-12">
<h2 className="font-display font-medium text-3xl md:text-5xl tracking-tight mb-4 text-white">Transform Your Business</h2>
<p className="text-sm text-textMuted font-light">Tell us your goals. We'll engineer the roadmap.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group">
<label className="block text-[10px] font-mono text-textMuted mb-1 ml-1 group-focus-within:text-white transition-colors">NAME</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-textMain placeholder-textMuted/30 focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all" placeholder="Jane Smith" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] font-mono text-textMuted mb-1 ml-1 group-focus-within:text-white transition-colors">EMAIL</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-textMain placeholder-textMuted/30 focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] font-mono text-textMuted mb-1 ml-1 group-focus-within:text-white transition-colors">PRIMARY OBJECTIVE</label>
<div className="relative">
<select className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-textMain appearance-none focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all">
<option className="bg-bg text-textMuted">Increase Revenue</option>
<option className="bg-bg text-textMuted">Reduce Operational Drag</option>
<option className="bg-bg text-textMuted">Scale Output</option>
<option className="bg-bg text-textMuted">Modernize Presence</option>
<option className="bg-bg text-textMuted">Reduce Software Spend</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-textMuted pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="group">
<label className="block text-[10px] font-mono text-textMuted mb-1 ml-1 group-focus-within:text-white transition-colors">CURRENT CONSTRAINTS</label>
<textarea className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-textMain placeholder-textMuted/30 focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all resize-none" placeholder="What is slowing you down right now?" rows="4"></textarea>
</div>
<button className="w-full group relative overflow-hidden rounded-lg bg-white text-bg hover:bg-neutral-200 border border-white/10 px-4 py-4 transition-all duration-300" type="button">
<div className="relative z-10 flex items-center justify-center gap-2 text-sm font-semibold tracking-wide">
                            REQUEST ASSESSMENT
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</button>
<p className="text-center text-[10px] text-textMuted mt-4">Free Strategy Call. Limited Availability.</p>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-2">
<div className="text-sm font-display font-medium text-white tracking-wide uppercase">AICCELERATING</div>
<div className="text-[10px] text-textMuted font-light max-w-xs">
                        © 2025 AICCELERATING. <br/>
                        Unlocking organizational potential through digital leverage.
                    </div>
</div>
<div>
<a className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300" href="https://colinmspeer.com" target="_blank">
<span className="text-[11px] font-medium text-textMuted group-hover:text-white tracking-wide">Learn about our founder colinmspeer</span>
<iconify-icon className="text-textMuted group-hover:text-white transition-colors" icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
