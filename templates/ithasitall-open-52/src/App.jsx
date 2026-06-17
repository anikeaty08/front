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
brand: '#FF5F1F', // Neon Orange
brandDark: '#CC4A16',
dark: '#050505',
concrete: '#F2F2F2',
grid: '#1F1F1F',
subtle: '#333333'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tightest: '-.05em',
},
animation: {
'scan': 'scan 4s linear infinite',
'blink': 'blink 1s step-end infinite',
'processing': 'processing 2s ease-in-out infinite',
'float': 'float 6s ease-in-out infinite',
'glow': 'glow 3s ease-in-out infinite alternate',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(500%)' }
},
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' }
},
processing: {
'0%': { width: '0%' },
'50%': { width: '70%' },
'100%': { width: '100%' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' }
},
glow: {
'0%': { opacity: '0.5', filter: 'blur(50px)' },
'100%': { opacity: '0.8', filter: 'blur(70px)' }
}
}
}
}
}



        lucide.createIcons();
        gsap.registerPlugin(ScrollTrigger);

        const revealElements = document.querySelectorAll('.reveal-content');
        revealElements.forEach((el, index) => {
            gsap.to(el, { y: '0%', duration: 1.2, ease: "power4.out", delay: 0.2 + (index * 0.1) });
        });

        ScrollTrigger.create({
            trigger: 'body', start: 'top top', end: 'bottom bottom',
            onUpdate: (self) => { gsap.to('#scroll-progress', { height: (self.progress * 100) + '%', duration: 0.1 }); }
        });

        const stats = document.querySelectorAll('.count-up');
        stats.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            ScrollTrigger.create({
                trigger: stat, start: "top 85%", once: true,
                onEnter: () => { gsap.to(stat, { innerHTML: target, duration: 2, snap: { innerHTML: target % 1 === 0 ? 1 : 0.01 }, ease: "power2.out" }); }
            });
        });

        // WebGL Background - Hexagonal Wireframe & Stars
        const canvas = document.querySelector('#gl');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 5;

        // Hexagon-like Shape (Icosahedron in wireframe)
        const geometry = new THREE.IcosahedronGeometry(1.5, 0);
        const material = new THREE.MeshBasicMaterial({ color: 0xFF5F1F, wireframe: true, transparent: true, opacity: 0.2 });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Inner solid core for glow
        const coreGeo = new THREE.IcosahedronGeometry(1.2, 0);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xFF4500, transparent: true, opacity: 0.05 });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        scene.add(coreMesh);

        // Stars
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 500;
        const posArray = new Float32Array(starsCount * 3);
        
        for(let i = 0; i < starsCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }
        
        starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starsMaterial = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff, transparent: true, opacity: 0.5 });
        const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starsMesh);

        let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
        document.addEventListener('mousemove', (e) => { 
            mouseX = (e.clientX / window.innerWidth) * 2 - 1; 
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1; 
        });

        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();
            
            targetX += (mouseX - targetX) * 0.05; 
            targetY += (mouseY - targetY) * 0.05;
            
            // Rotate Hexagon
            mesh.rotation.y = time * 0.1 + (targetX * 0.1); 
            mesh.rotation.x = time * 0.05 + (targetY * 0.1);
            coreMesh.rotation.copy(mesh.rotation);
            
            // Rotate Stars slowly
            starsMesh.rotation.y = -time * 0.05;

            // Pulse effect
            const scale = 1 + Math.sin(time * 0.5) * 0.05;
            mesh.scale.set(scale, scale, scale);

            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => { 
            camera.aspect = window.innerWidth / window.innerHeight; 
            camera.updateProjectionMatrix(); 
            renderer.setSize(window.innerWidth, window.innerHeight); 
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-60">
<canvas id="gl"></canvas>
</div>

<div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[150vw] h-[100vh] z-0 pointer-events-none sun-glow animate-glow"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-grid bg-dark/80 backdrop-blur-sm">
<div className="flex justify-between items-center h-14 px-6 md:px-12">
<div className="flex items-center gap-4">
<div className="w-3 h-3 bg-brand animate-pulse shadow-[0_0_10px_#FF5F1F]"></div>
<span className="font-mono text-xs tracking-widest text-concrete">ITHASITALL_V.2.0</span>
</div>
<div className="hidden md:flex gap-8 font-mono text-xs text-neutral-500">
<span className="hover:text-brand cursor-pointer transition-colors hover:shadow-[0_0_10px_#FF5F1F]">[ CONVERT ]</span>
<span className="hover:text-brand cursor-pointer transition-colors hover:shadow-[0_0_10px_#FF5F1F]">[ PROCESS ]</span>
<span className="hover:text-brand cursor-pointer transition-colors hover:shadow-[0_0_10px_#FF5F1F]">[ TRANSFER ]</span>
</div>
<a className="font-mono text-xs border border-neutral-700 px-4 py-2 hover:bg-brand hover:text-black hover:border-brand transition-all duration-300" href="#">
                GITHUB_REPO
            </a>
</div>
</nav>

<div className="fixed top-1/2 left-6 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 font-mono text-[0.65rem] text-neutral-600 mix-blend-difference">
<div id="page-indicator">01</div>
<div className="w-px h-12 bg-neutral-800 relative">
<div className="absolute top-0 left-0 w-full bg-brand h-0 box-shadow-[0_0_5px_#FF5F1F]" id="scroll-progress"></div>
</div>
<div>07</div>
</div>

<main className="relative z-10 pt-14">

<section className="min-h-screen flex flex-col justify-center pb-24 px-6 md:px-12 border-b border-grid relative overflow-hidden">
<div className="absolute inset-0 bg-grid z-[-1] opacity-30"></div>
<div className="max-w-7xl w-full mx-auto relative z-10">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
<div className="font-mono text-xs text-brand mb-2 md:mb-0 border border-brand/30 inline-block px-2 py-1 bg-brand/5 shadow-[0_0_10px_rgba(255,95,31,0.2)]">
                        // NEXT GEN KERNEL ACTIVE
                    </div>
<div className="font-mono text-xs text-neutral-500 text-right">
                        SYSTEM STATUS: OPTIMAL<br/>
                        SOLAR FLARE: DETECTED
                    </div>
</div>

<div className="reveal-overflow text-center md:text-left mb-12">
<h1 className="reveal-content text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-none">
                        YES IT<br/>
<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F1F] via-[#FF8C00] to-[#FFD700] title-glow italic pr-4">
                            {HASITALL}
                            
<span className="absolute -top-4 -right-4 w-4 h-4 bg-white rounded-full blur-[2px] animate-pulse"></span>
<span className="absolute top-1/2 -right-8 w-1 h-20 bg-brand rotate-45 blur-[1px]"></span>
</span>
</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 border-t border-grid pt-8">
<div className="md:col-span-5 font-mono text-xs md:text-sm text-neutral-400 leading-relaxed reveal-overflow">
<p className="reveal-content">The definitive open-source toolkit. Everything you need in one solar-charged hyperbolic chamber. No limits. No subscriptions. Just raw power.</p>
</div>
<div className="md:col-span-7 flex flex-col md:flex-row gap-4 md:justify-end reveal-overflow items-center">
<div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-transparent to-brand"></div>
<button className="reveal-content group relative px-8 py-4 bg-transparent border border-neutral-700 hover:border-brand transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:bg-brand/5">
<span className="font-mono text-xs group-hover:text-brand transition-colors flex items-center gap-2">
                                INITIATE_DOWNLOAD <i className="w-4 h-4" data-lucide="sun"></i>
</span>
</button>
</div>
</div>
</div>
</section>

<section className="border-b border-grid bg-dark relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-grid">
<div className="p-8 group hover:bg-neutral-900 transition-colors duration-500">
<div className="font-mono text-xs text-neutral-500 mb-12 flex justify-between"><span>MODULES</span><i className="w-4 h-4 text-neutral-700 group-hover:text-brand transition-colors" data-lucide="box"></i></div>
<div className="text-4xl md:text-5xl font-mono tracking-tighter text-white group-hover:text-brand transition-colors"><span className="count-up" data-target="999">0</span></div>
</div>
<div className="p-8 group hover:bg-neutral-900 transition-colors duration-500">
<div className="font-mono text-xs text-neutral-500 mb-12 flex justify-between"><span>LATENCY</span><i className="w-4 h-4 text-neutral-700 group-hover:text-brand transition-colors" data-lucide="zap"></i></div>
<div className="text-4xl md:text-5xl font-mono tracking-tighter text-white group-hover:text-brand transition-colors"><span className="count-up" data-target="0.01">0</span>ms</div>
</div>
<div className="p-8 group hover:bg-neutral-900 transition-colors duration-500">
<div className="font-mono text-xs text-neutral-500 mb-12 flex justify-between"><span>UPTIME</span><i className="w-4 h-4 text-neutral-700 group-hover:text-brand transition-colors" data-lucide="activity"></i></div>
<div className="text-4xl md:text-5xl font-mono tracking-tighter text-white group-hover:text-brand transition-colors">100%</div>
</div>
<div className="p-8 group hover:bg-neutral-900 transition-colors duration-500">
<div className="font-mono text-xs text-neutral-500 mb-12 flex justify-between"><span>PRICE</span><i className="w-4 h-4 text-neutral-700 group-hover:text-brand transition-colors" data-lucide="gem"></i></div>
<div className="text-4xl md:text-5xl font-mono tracking-tighter text-brand drop-shadow-[0_0_5px_rgba(255,95,31,0.5)]">FREE</div>
</div>
</div>
</section>

<section className="py-24 border-b border-grid bg-[#030303] overflow-hidden relative">

<div className="absolute inset-0 dither-overlay opacity-20 pointer-events-none z-10"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
<div className="flex items-end justify-between mb-16">
<div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">
                            CHAOS<span className="text-brand">.MODE</span>
</h2>
<p className="font-mono text-sm text-neutral-400">Entropy simulated in real-time. Cats included.</p>
</div>
<div className="hidden md:block">
<div className="w-16 h-16 rounded-full border border-brand/50 flex items-center justify-center animate-spin-slow">
<i className="w-8 h-8 text-brand" data-lucide="cat"></i>
</div>
</div>
</div>

<div className="w-full h-[500px] border border-neutral-800 bg-neutral-900/50 rounded-lg relative overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,95,31,0.1),transparent_50%)] animate-pulse"></div>

<div className="absolute top-1/4 left-1/4 animate-float" style={{animationDelay: '0s'}}>
<svg fill="none" height="60" stroke="#FF5F1F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="60"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-2.96 7-.24.65-.54 1.27-.9 1.84a4.99 4.99 0 0 1-5.63 7.02c-1.5-.2-2.84-.96-3.88-2.07-1.04 1.11-2.38 1.87-3.88 2.07A4.99 4.99 0 0 1 3.5 11c-.36-.57-.66-1.19-.9-1.84C.08 9.16-1.74 2.74-.34 2.16c1.4-.58 4.64.26 6.42 2.26.65-.17 1.33-.26 2-.26z"></path></svg>
</div>
<div className="absolute bottom-1/3 right-1/4 animate-float" style={{animationDelay: '1s'}}>
<svg className="opacity-50" fill="none" height="40" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="font-mono text-[10rem] md:text-[15rem] font-bold text-neutral-800/30 select-none">MEOW</div>
</div>

<div className="cat-runner absolute bottom-10 -left-10 animate-[scan_10s_linear_infinite]" style={{animationDirection: 'normal', animationDuration: '8s'}}>
<i className="w-12 h-12 text-white flip-x" data-lucide="cat"></i>
</div>
<div className="cat-chaser absolute bottom-10 -left-20 animate-[scan_10s_linear_infinite]" style={{animationDirection: 'normal', animationDelay: '0.5s', animationDuration: '8s'}}>
<div className="w-3 h-3 bg-brand rounded-full shadow-[0_0_10px_#FF5F1F] animate-bounce"></div>
</div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none dither-bg mix-blend-overlay"></div>

<div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur border border-neutral-700 p-4 font-mono text-xs text-brand rounded">
<span>while(true) { chaos++; }</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-grid bg-dark overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="font-mono text-brand text-xs mb-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-[0_0_8px_#FF5F1F]"></span>
                            PROCESSING_PIPELINE
                        </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 leading-tight">
                            CLIENT-SIDE<br/>EXECUTION LAYER
                        </h2>
<p className="text-neutral-400 font-mono text-sm leading-relaxed mb-8 border-l border-brand pl-4">
                            By utilizing WebAssembly, ITHASITALL offloads 100% of processing to the local GPU/CPU. Zero data leaves your machine. The architectural latency is virtually non-existent.
                        </p>
<div className="space-y-4 font-mono text-xs">
<div className="flex items-center gap-4 text-neutral-300">
<div className="w-6 h-6 border border-neutral-700 flex items-center justify-center text-brand font-bold bg-neutral-900">01</div>
<span>INITIALIZE WASM MODULE</span>
</div>
<div className="w-px h-4 bg-neutral-800 ml-3"></div>
<div className="flex items-center gap-4 text-neutral-300">
<div className="w-6 h-6 border border-neutral-700 flex items-center justify-center text-brand font-bold bg-neutral-900">02</div>
<span>BUFFER ALLOCATION</span>
</div>
<div className="w-px h-4 bg-neutral-800 ml-3"></div>
<div className="flex items-center gap-4 text-neutral-300">
<div className="w-6 h-6 border border-neutral-700 flex items-center justify-center text-brand font-bold bg-neutral-900">03</div>
<span>EXECUTE BINARY TRANSFORMATION</span>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-video bg-[#0A0A0A] border border-grid rounded-sm p-1 shadow-2xl overflow-hidden group">

<div className="absolute -inset-1 bg-gradient-to-r from-brand to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>

<div className="relative h-6 bg-neutral-900 border-b border-neutral-800 flex items-center px-2 gap-2 z-10">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="font-mono text-[0.6rem] text-neutral-500 ml-auto">zsh — root — 80x24</span>
</div>

<div className="relative p-4 font-mono text-xs text-neutral-400 h-full overflow-hidden z-10 bg-black/90">
<div className="absolute inset-0 scanline pointer-events-none opacity-20"></div>
<div className="mb-2">
<span className="text-brand">root@sun:~$</span> ./ignite_core --orange --force
                            </div>
<div className="space-y-1 opacity-90 text-[#FFDAB9]">
<p>&gt; Warming up reactor... [OK]</p>
<p>&gt; Solar arrays aligned (98%)... [OK]</p>
<p className="text-white">&gt; Analyzing input stream...</p>
<div className="my-4 p-2 border border-brand/30 bg-brand/5">
<div className="flex justify-between mb-1 text-[0.65rem] uppercase text-brand">
<span>Temperature</span>
<span className="animate-pulse">RISING...</span>
</div>
<div className="w-full h-1 bg-neutral-800">
<div className="h-full bg-gradient-to-r from-yellow-500 to-brand animate-processing box-shadow-[0_0_10px_#FF5F1F]"></div>
</div>
<div className="mt-2 text-[0.6rem] text-neutral-500 grid grid-cols-4 gap-2">
<div>HEAT: 4000K</div>
<div>MEM: 42%</div>
<div>CORE: STABLE</div>
<div>FPS: 240</div>
</div>
</div>
<p className="text-brand">&gt; Fusion Complete.</p>
<p>&gt; Output generated.</p>
<p>&gt; <span className="animate-blink bg-brand text-black px-1">_</span></p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#050505] relative border-b border-grid">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">CAPABILITIES</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto md:grid-rows-4 gap-4 h-auto md:h-[800px]">

<div className="md:col-span-4 md:row-span-2 bg-neutral-900/30 border border-neutral-800 relative overflow-hidden group hover:border-brand/50 transition-colors">
<div className="absolute top-4 left-4 z-10 font-mono text-xs text-brand">SPECTRAL_ANALYSIS</div>
<div className="absolute inset-0 flex items-end justify-between px-1 gap-1 pb-0 opacity-80">

<div className="w-full bg-neutral-800 group-hover:bg-brand transition-all duration-300 h-[30%]"></div>
<div className="w-full bg-neutral-800 group-hover:bg-brand transition-all duration-300 h-[50%]"></div>
<div className="w-full bg-neutral-800 group-hover:bg-brand transition-all duration-300 h-[70%]"></div>
<div className="w-full bg-neutral-800 group-hover:bg-brand transition-all duration-300 h-[40%]"></div>
<div className="w-full bg-neutral-800 group-hover:bg-brand transition-all duration-300 h-[60%]"></div>
<div className="w-full bg-neutral-800 group-hover:bg-brand transition-all duration-300 h-[80%]"></div>
<div className="w-full bg-neutral-800 group-hover:bg-brand transition-all duration-300 h-[45%]"></div>
<div className="w-full bg-neutral-800 group-hover:bg-brand transition-all duration-300 h-[90%]"></div>
<div className="w-full bg-neutral-800 group-hover:bg-brand transition-all duration-300 h-[20%]"></div>
</div>
<div className="absolute inset-0 bg-grid-small opacity-20 pointer-events-none"></div>
</div>

<div className="md:col-span-2 md:row-span-2 bg-neutral-900/30 border border-neutral-800 p-6 flex flex-col justify-center gap-6 hover:border-brand/50 transition-colors">
<div className="font-mono text-xs text-neutral-500 mb-2">CONTROL_SURFACE</div>

<div className="flex items-center justify-between">
<span className="font-mono text-xs text-neutral-300">GPU_ACCEL</span>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-800 appearance-none cursor-pointer transition-all duration-300 checked:bg-brand" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between font-mono text-xs text-neutral-400">
<span>QUALITY</span>
<span>99%</span>
</div>
<div className="relative w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[99%] bg-brand rounded-full shadow-[0_0_10px_#FF5F1F]"></div>
</div>
</div>

<div className="border border-neutral-700 p-2 flex justify-between items-center cursor-pointer hover:border-brand hover:text-brand transition-colors group">
<span className="font-mono text-xs text-white group-hover:text-brand">FMT: .RAW (UNCOMPRESSED)</span>
<i className="w-3 h-3 text-neutral-500 group-hover:text-brand" data-lucide="chevron-down"></i>
</div>
</div>

<div className="md:col-span-3 md:row-span-1 bg-neutral-800 border border-neutral-700 relative overflow-hidden flex items-center justify-center group hover:border-brand transition-colors">
<div className="absolute inset-0 dither-bg opacity-30 group-hover:opacity-50 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
<div className="relative z-10 flex items-center gap-4">
<i className="w-6 h-6 text-brand" data-lucide="layers"></i>
<span className="font-mono text-sm tracking-widest text-white group-hover:text-brand transition-colors">DITHER_ENGINE_ENABLED</span>
</div>
</div>

<div className="md:col-span-3 md:row-span-1 bg-black border border-neutral-800 p-4 font-mono text-[0.6rem] text-neutral-400 flex flex-col justify-between relative overflow-hidden hover:border-brand/50 transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-brand box-shadow-[0_0_10px_#FF5F1F]"></div>
<div className="opacity-80">
                            import { Solar } from '@ithasitall/core';<br/>
                            const engine = await Solar.init({ mode: 'blaze' });<br/>
                            engine.burn(input_data);
                        </div>
<div className="mt-2 text-right text-brand">V.2.0.0</div>
</div>

<div className="md:col-span-6 md:row-span-1 bg-neutral-900/30 border border-neutral-800 relative overflow-hidden flex items-center justify-around hover:border-brand/50 transition-colors">
<div className="absolute inset-0 grid grid-cols-12 gap-4 p-4 opacity-20">
<div className="w-1 h-1 bg-white rounded-full place-self-center"></div>
<div className="w-1 h-1 bg-white rounded-full place-self-center"></div>
<div className="w-1 h-1 bg-brand rounded-full place-self-center animate-ping"></div>
<div className="w-1 h-1 bg-white rounded-full place-self-center"></div>
</div>
<div className="z-10 text-center">
<h3 className="font-mono text-lg text-white tracking-tight">GLOBAL DISTRIBUTION</h3>
<p className="font-mono text-xs text-neutral-500">NODES ACTIVE: 8,192</p>
</div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand/10 to-transparent animate-scan pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-dark relative border-b border-grid">
<div className="max-w-7xl mx-auto">
<div className="mb-16 border-l-2 border-brand pl-6">
<h2 className="text-4xl md:text-6xl tracking-tight font-semibold mb-4">MODULES</h2>
<p className="font-mono text-sm text-neutral-400 max-w-xl">
                        A comprehensive suite of processing tools. No uploads. Local execution via WebAssembly.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grid border border-grid">

<div className="bg-dark p-8 hover:bg-neutral-900 transition-all duration-300 group cursor-pointer border border-transparent hover:border-brand/30 relative overflow-hidden">
<div className="w-10 h-10 border border-neutral-700 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors"><i className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" data-lucide="music"></i></div>
<h3 className="text-xl font-mono mb-2 text-neutral-200 group-hover:text-brand transition-colors">AUDIO_PROC</h3>
<p className="text-xs text-neutral-500 font-mono leading-relaxed">Bitrate manipulation and spectral analysis.</p>
</div>

<div className="bg-dark p-8 hover:bg-neutral-900 transition-all duration-300 group cursor-pointer border border-transparent hover:border-brand/30 relative overflow-hidden">
<div className="w-10 h-10 border border-neutral-700 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors"><i className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" data-lucide="video"></i></div>
<h3 className="text-xl font-mono mb-2 text-neutral-200 group-hover:text-brand transition-colors">VIDEO_TRANS</h3>
<p className="text-xs text-neutral-500 font-mono leading-relaxed">H.264/H.265 transcoding and compression.</p>
</div>

<div className="bg-dark p-8 hover:bg-neutral-900 transition-all duration-300 group cursor-pointer border border-transparent hover:border-brand/30 relative overflow-hidden">
<div className="w-10 h-10 border border-neutral-700 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors"><i className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" data-lucide="file-digit"></i></div>
<h3 className="text-xl font-mono mb-2 text-neutral-200 group-hover:text-brand transition-colors">DOC_CONVERT</h3>
<p className="text-xs text-neutral-500 font-mono leading-relaxed">PDF tools, OCR text recognition.</p>
</div>

<div className="bg-dark p-8 hover:bg-neutral-900 transition-all duration-300 group cursor-pointer border border-transparent hover:border-brand/30 relative overflow-hidden">
<div className="w-10 h-10 border border-neutral-700 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors"><i className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" data-lucide="image"></i></div>
<h3 className="text-xl font-mono mb-2 text-neutral-200 group-hover:text-brand transition-colors">IMG_OPTI</h3>
<p className="text-xs text-neutral-500 font-mono leading-relaxed">Lossless compression and resizing pipelines.</p>
</div>

<div className="bg-dark p-8 hover:bg-neutral-900 transition-all duration-300 group cursor-pointer border border-transparent hover:border-brand/30 relative overflow-hidden">
<div className="w-10 h-10 border border-neutral-700 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors"><i className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" data-lucide="binary"></i></div>
<h3 className="text-xl font-mono mb-2 text-neutral-200 group-hover:text-brand transition-colors">BINARY_READ</h3>
<p className="text-xs text-neutral-500 font-mono leading-relaxed">Hex editing and raw data stream analysis.</p>
</div>

<div className="bg-dark p-8 hover:bg-neutral-900 transition-all duration-300 group cursor-pointer border border-transparent hover:border-brand/30 relative overflow-hidden">
<div className="w-10 h-10 border border-neutral-700 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand transition-colors"><i className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" data-lucide="cpu"></i></div>
<h3 className="text-xl font-mono mb-2 text-neutral-200 group-hover:text-brand transition-colors">AI_MODELS</h3>
<p className="text-xs text-neutral-500 font-mono leading-relaxed">Run quantized local LLMs on browser GPU.</p>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 py-12 px-6 md:px-12 border-t border-grid relative overflow-hidden">
<div className="absolute bottom-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-2">ITHASITALL</h4>
<p className="font-mono text-xs text-neutral-500 max-w-xs">
                        Open source utility primitive.<br/>Licensed under MIT.<br/>Build v2.0.0-release
                    </p>
</div>
<div className="flex gap-12 font-mono text-xs text-neutral-400">
<ul className="space-y-2"><li className="text-white uppercase mb-2">Platform</li><li className="hover:text-brand cursor-pointer">Documentation</li><li className="hover:text-brand cursor-pointer">API Reference</li></ul>
<ul className="space-y-2"><li className="text-white uppercase mb-2">Community</li><li className="hover:text-brand cursor-pointer">GitHub</li><li className="hover:text-brand cursor-pointer">Discord</li></ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-neutral-900 flex justify-between items-center font-mono text-[0.6rem] text-neutral-600 uppercase">
<span>© 2024 ITHASITALL INC.</span><span>SYSTEM_ID: 0x8F2A</span>
</div>
</footer>
</main>


    </>
  );
}
