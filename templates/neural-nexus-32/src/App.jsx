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
colors: {
bg: '#020617',
accent: '#22d3ee', // Cyan
secondary: '#a855f7', // Purple
tertiary: '#f472b6', // Pink
surface: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.08)',
textMain: '#e2e8f0',
textMuted: '#94a3b8',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
                gsap.to(cursorRing, { scale: 1.5, borderColor: '#a855f7', duration: 0.2 });
                gsap.to(cursorDot, { backgroundColor: '#a855f7', duration: 0.2 });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(cursorRing, { scale: 1, borderColor: 'rgba(34, 211, 238, 0.5)', duration: 0.2 });
                gsap.to(cursorDot, { backgroundColor: '#22d3ee', duration: 0.2 });
            });
        });

        // Vibe Lab Simulator
        const codeElement = document.getElementById('typewriter-code');
        const previewCard = document.getElementById('preview-card');
        const previewAvatar = document.getElementById('preview-avatar');
        const previewLine1 = document.getElementById('preview-line1');
        const previewLine2 = document.getElementById('preview-line2');
        const previewBtn = document.getElementById('preview-btn');

        const codeSnippet = `
const NexusCard = () => {
  return (
    <Card variant="cyber" className="p-4">
      <Avatar glow="true" />
      <Skeleton w="full" />
      <Button>EXECUTE</Button>
    </Card>
  );
}`;

        let charIndex = 0;
        let isTyping = false;

        // Intersection Observer to start typing when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isTyping) {
                    isTyping = true;
                    typeCode();
                }
            });
        });
        observer.observe(document.getElementById('vibe_coding_lab'));

        function typeCode() {
            if (charIndex < codeSnippet.length) {
                codeElement.textContent += codeSnippet.charAt(charIndex);
                charIndex++;
                
                // Trigger Visual Updates at specific points
                if(charIndex === 50) {
                    previewCard.className = "relative z-10 w-full max-w-[200px] p-5 rounded-xl border border-accent/50 bg-black/80 shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] transition-all duration-500";
                }
                if(charIndex === 80) {
                    previewAvatar.className = "w-10 h-10 rounded-full mb-3 bg-gradient-to-tr from-accent to-secondary animate-pulse";
                }
                if(charIndex === 100) {
                    previewLine1.className = "h-2 w-2/3 rounded mb-2 bg-white/20";
                    previewLine2.className = "h-2 w-1/2 rounded bg-white/10";
                }
                if(charIndex > 130) {
                    previewBtn.classList.remove('opacity-0', 'translate-y-4');
                    previewBtn.className = "mt-4 h-8 w-full rounded flex items-center justify-center text-[10px] font-bold tracking-widest bg-accent text-bg shadow-[0_0_10px_rgba(34,211,238,0.5)]";
                }

                setTimeout(typeCode, 30 + Math.random() * 20);
            }
        }

        // Three.js Background (Procedural "Robot Brain" Node)
        const initThree = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Objects
            const geometry = new THREE.IcosahedronGeometry(2, 1);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0x22d3ee, 
                wireframe: true, 
                transparent: true, 
                opacity: 0.1 
            });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            // Particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 700;
            const posArray = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 10;
            }
            
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.02,
                color: 0xa855f7,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            camera.position.z = 5;

            // Interaction
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

                // Gentle rotation
                sphere.rotation.y = elapsedTime * 0.1;
                sphere.rotation.x = elapsedTime * 0.05;
                
                particlesMesh.rotation.y = -elapsedTime * 0.05;

                // Mouse influence
                sphere.rotation.y += mouseX * 0.5;
                sphere.rotation.x += mouseY * 0.5;
                particlesMesh.rotation.x += mouseY * 0.2;

                renderer.render(scene, camera);
            }
            animate();

            // Resize
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="loader-overlay fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center font-mono text-xs tracking-widest">
<div className="w-48 h-[1px] bg-border relative overflow-hidden mb-4">
<div className="absolute inset-0 bg-accent animate-[loading_2s_ease-in-out_infinite]" style={{width: '50%'}}></div>
</div>
<span className="text-accent animate-pulse">INITIALIZING NEURAL NEXUS...</span>
<style>
            @keyframes loading {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(200%); }
            }
        </style>
</div>

<div className="hidden md:block fixed w-8 h-8 rounded-full border border-accent/50 pointer-events-none z-[60] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" id="cursor-ring"></div>
<div className="hidden md:block fixed w-1 h-1 rounded-full bg-accent pointer-events-none z-[60] -translate-x-1/2 -translate-y-1/2" id="cursor-dot"></div>

<div className="fixed inset-0 z-0 opacity-40" id="canvas-container"></div>

<nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-8 py-3 items-center gap-8 shadow-2xl shadow-accent/5">
<a className="text-xs font-medium text-textMuted hover:text-accent transition-colors tracking-wide" href="#hero_section">HOME</a>
<a className="text-xs font-medium text-textMuted hover:text-accent transition-colors tracking-wide" href="#services_section">SERVICES</a>
<div className="w-px h-3 bg-border"></div>
<a className="text-xs font-medium text-textMuted hover:text-accent transition-colors tracking-wide" href="#vibe_coding_lab">VIBE LAB</a>
<a className="text-xs font-medium px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-textMain hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300" href="#contact_section">CONTACT</a>
</nav>

<nav className="md:hidden fixed bottom-6 left-6 right-6 z-50 glass rounded-2xl p-4 flex justify-between items-center shadow-2xl">
<a className="flex flex-col items-center gap-1 text-textMuted hover:text-accent transition-colors" href="#hero_section">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[10px]">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-textMuted hover:text-accent transition-colors" href="#services_section">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[10px]">Solutions</span>
</a>
<a className="flex flex-col items-center gap-1 text-textMuted hover:text-accent transition-colors" href="#vibe_coding_lab">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[10px]">Lab</span>
</a>
<a className="flex flex-col items-center gap-1 text-textMuted hover:text-accent transition-colors" href="#contact_section">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-[10px]">Connect</span>
</a>
</nav>

<main className="relative z-10 w-full">

<section className="h-screen w-full flex flex-col items-center justify-center relative px-6" id="hero_section">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bg via-transparent to-bg pointer-events-none"></div>
<div className="text-center relative z-10 max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-6 animate-[fadeIn_1s_ease-out]">
<div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
<span className="text-[10px] font-mono text-accent uppercase tracking-widest">Neural Nexus v1.0 // Online</span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
                    ARCHITECTING THE <br/>
<span className="text-glow">INTELLIGENCE ERA</span>
</h1>
<p className="font-sans text-sm md:text-base text-textMuted max-w-lg mx-auto leading-relaxed mb-10 font-light">
                    Autonomous Agents. Mobile Apps. SaaS. <br/>
                    Powered by Neural Architectures and Vibe Coding.
                </p>
<a className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono text-xs tracking-widest text-bg bg-accent rounded-full transition-all duration-300 hover:w-56 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]" href="#contact_section">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-64 group-hover:h-56 opacity-10"></span>
<span className="relative flex items-center gap-2 font-semibold">
                        INITIATE DEPLOYMENT
                        <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</span>
</a>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative" id="services_section">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-2">OUR NEURAL SOLUTIONS</h2>
<p className="text-sm text-textMuted font-light">Modular AI architectures tailored for scale.</p>
</div>
<div className="h-px bg-border flex-1 md:ml-8 md:mb-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-accent/30">
<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:mic-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3 group-hover:text-accent transition-colors">AI Call Agents</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light">Hyper-realistic voice agents for sales and support. Unprecedented conversion rates with <span className="text-white/80">150ms latency</span>.</p>
<button className="text-[10px] font-mono text-white/60 hover:text-accent flex items-center gap-2 uppercase tracking-wider">
                                Demo Live Agent
                                <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-secondary/30">
<div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3 group-hover:text-secondary transition-colors">Autonomous Agents</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light">Self-assembling agent swarms for complex task execution, research, and strategic market planning.</p>
<button className="text-[10px] font-mono text-white/60 hover:text-secondary flex items-center gap-2 uppercase tracking-wider">
                                Explore Use Cases
                                <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-tertiary/30">
<div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3 group-hover:text-tertiary transition-colors">App Development</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light">Full-stack development of performant, scalable, and intuitive web &amp; mobile applications with React Native.</p>
<button className="text-[10px] font-mono text-white/60 hover:text-tertiary flex items-center gap-2 uppercase tracking-wider">
                                View Portfolio
                                <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-accent/30">
<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:globe-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3 group-hover:text-accent transition-colors">Geo-Intelligence</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light">Precision-targeted campaigns and predictive analytics based on global data streams.</p>
<button className="text-[10px] font-mono text-white/60 hover:text-accent flex items-center gap-2 uppercase tracking-wider">
                                Generate Insights
                                <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-secondary/30">
<div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3 group-hover:text-secondary transition-colors">Neural Content</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light">Generate high-quality multimedia content at scale using fine-tuned LLMs.</p>
<button className="text-[10px] font-mono text-white/60 hover:text-secondary flex items-center gap-2 uppercase tracking-wider">
                                Try Generator
                                <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-tertiary/30">
<div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl mb-3 group-hover:text-tertiary transition-colors">SaaS Architecture</h3>
<p className="text-xs text-textMuted leading-relaxed mb-6 font-light">From concept to launch. Build robust, scalable platforms with our modular blocks.</p>
<button className="text-[10px] font-mono text-white/60 hover:text-tertiary flex items-center gap-2 uppercase tracking-wider">
                                Discuss SaaS
                                <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-bg relative overflow-hidden border-y border-white/5" id="vibe_coding_lab">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="order-2 lg:order-1">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-accent" icon="lucide:terminal" width="20"></iconify-icon>
<span className="font-mono text-xs text-accent">VIBE_LAB_v1.0</span>
</div>
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
                        THE VIBE LAB: <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">CODE YOUR VISION.</span>
</h2>
<p className="text-sm text-textMuted font-light mb-8 max-w-md leading-relaxed">
                        Experience our proprietary "Vibe Coding" platform. Input your aesthetic, and watch our AI instantly generate responsive, beautiful UI/UX frameworks in real-time.
                    </p>
<div className="flex flex-wrap gap-4 mb-10">
<div className="px-4 py-2 rounded-full border border-border bg-white/5 text-xs text-textMuted flex items-center gap-2">
<iconify-icon className="text-accent" icon="lucide:check-circle"></iconify-icon> Natural Language UI
                        </div>
<div className="px-4 py-2 rounded-full border border-border bg-white/5 text-xs text-textMuted flex items-center gap-2">
<iconify-icon className="text-accent" icon="lucide:check-circle"></iconify-icon> Real-time Preview
                        </div>
</div>
<a className="text-sm font-medium text-white border-b border-accent/50 pb-1 hover:text-accent hover:border-accent transition-all inline-block" href="#contact_section">
                        Request Beta Access
                    </a>
</div>

<div className="order-1 lg:order-2">
<div className="rounded-xl overflow-hidden border border-border bg-[#0a0a0a] shadow-2xl shadow-accent/5 relative">

<div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-[10px] font-mono text-textMuted opacity-50">generator.tsx</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 h-[400px]">

<div className="p-6 font-mono text-[10px] md:text-xs text-textMuted overflow-hidden relative border-r border-white/5 bg-[#050505]">
<div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
<div className="text-secondary/50 mb-2">// Analyzing "Cyber-Minimalist"...</div>
<div className="whitespace-pre-wrap text-green-400/90 leading-relaxed" id="typewriter-code"></div>
<span className="animate-pulse w-2 h-4 bg-accent inline-block align-middle ml-1"></span>
</div>

<div className="p-6 bg-white/5 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

<div className="relative z-10 w-full max-w-[200px] p-5 rounded-xl border transition-all duration-700" id="preview-card">
<div className="w-10 h-10 rounded-full mb-3 transition-all duration-700" id="preview-avatar"></div>
<div className="h-2 w-2/3 rounded mb-2 transition-all duration-700" id="preview-line1"></div>
<div className="h-2 w-1/2 rounded transition-all duration-700" id="preview-line2"></div>
<div className="mt-4 h-8 w-full rounded flex items-center justify-center text-[10px] font-bold tracking-widest transition-all duration-700 opacity-0 transform translate-y-4" id="preview-btn">
                                        EXECUTE
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="contact_section">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blur-[100px] rounded-full"></div>
</div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-12">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-4">INITIATE YOUR VISION</h2>
<p className="text-sm text-textMuted font-light">Secure uplink established. Transmit your project parameters.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group">
<label className="block text-[10px] font-mono text-textMuted mb-1 ml-1 group-focus-within:text-accent transition-colors">NEURAL IDENTIFIER</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-textMain placeholder-textMuted/30 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] font-mono text-textMuted mb-1 ml-1 group-focus-within:text-accent transition-colors">UPLINK ADDRESS</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-textMain placeholder-textMuted/30 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all" placeholder="user@nexus.ai" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] font-mono text-textMuted mb-1 ml-1 group-focus-within:text-accent transition-colors">AREA OF INTEREST</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-textMain appearance-none focus:outline-none focus:border-accent focus:bg-accent/5 transition-all">
<option className="bg-bg text-textMuted">AI Call Agents</option>
<option className="bg-bg text-textMuted">Autonomous Agents</option>
<option className="bg-bg text-textMuted">Web &amp; App Development</option>
<option className="bg-bg text-textMuted">Vibe Coding Platform</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-textMuted pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="group">
<label className="block text-[10px] font-mono text-textMuted mb-1 ml-1 group-focus-within:text-accent transition-colors">PROJECT BRIEFING</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-textMain placeholder-textMuted/30 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all resize-none" placeholder="Describe the desired 'vibe' and objectives..." rows="4"></textarea>
</div>
<button className="w-full group relative overflow-hidden rounded-lg bg-white/10 hover:bg-accent border border-white/10 hover:border-accent px-4 py-4 transition-all duration-300" type="button">
<div className="relative z-10 flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-white group-hover:text-bg">
                            DEPLOY INQUIRY
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:send" width="14"></iconify-icon>
</div>
<div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-textMuted font-light">
                    © 2024 Neural Nexus. All systems nominal.
                </div>
<div className="flex gap-6">
<a className="text-textMuted hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
<a className="text-textMuted hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-textMuted hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
</div>
</div>
</footer>
</main>



    </>
  );
}
