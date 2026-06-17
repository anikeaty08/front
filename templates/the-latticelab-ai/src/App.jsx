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
gray: { 900: '#111827', 950: '#030712' },
orange: { 500: '#F97316' }
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
animation: {
'float-slow': 'float-subtle 4s ease-in-out infinite',
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.rotate-y-12': { transform: 'rotateY(12deg)' },
'.rotate-x-6': { transform: 'rotateX(6deg)' },
})
}
]
};



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // --- 1. LOADER ---
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => { loader.style.display = 'none'; }, 1500);
            }, 1500);
        });

        // --- 2. PARTICLE ENGINE (CANVAS) ---
        const canvas = document.getElementById('neural-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: 0, y: 0 };

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = Math.random() > 0.8 ? 'rgba(249, 115, 22,' : 'rgba(255, 255, 255,'; 
                this.alpha = Math.random() * 0.5 + 0.1;
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if(dist < 150) {
                    this.speedX -= dx * 0.0005;
                    this.speedY -= dy * 0.0005;
                }

                this.x += this.speedX;
                this.y += this.speedY;
                
                // Bounds loop
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = this.color + this.alpha + ')';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Init Particles
        for (let i = 0; i < 80; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            ctx.lineWidth = 0.5;
            for(let i = 0; i < particles.length; i++) {
                for(let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx*dx + dy*dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(50, 50, 60, ${0.1 - distance/1000})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();

        // --- 3. CURSOR & INTERACTION ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            
            // Lag effect
            setTimeout(() => {
                cursorRing.style.left = e.clientX + 'px';
                cursorRing.style.top = e.clientY + 'px';
            }, 80);
        });

        const clickables = document.querySelectorAll('a, button, input, textarea, .group, .cursor-pointer');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '64px';
                cursorRing.style.height = '64px';
                cursorRing.style.borderColor = '#F97316';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '32px';
                cursorRing.style.height = '32px';
                cursorRing.style.borderColor = 'rgba(255,255,255,0.3)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        // --- 4. SCROLL OBSERVER ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-[slideUp_0.8s_ease-out_forwards]', 'opacity-100');
                    entry.target.classList.remove('opacity-0');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            el.classList.add('opacity-0');
            observer.observe(el);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 blur-sm opacity-40" data-alpha-mask="89" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 89%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 89%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>

<div className="" id="cursor-dot" style={{left: '933px', top: '1px', transform: 'translate(-50%, -50%) scale(1)'}}></div>
<div className="" id="cursor-ring" style={{width: '32px', height: '32px', borderColor: 'rgba(255, 255, 255, 0.3)', left: '933px', top: '1px'}}></div>

<div className="" id="loader" style={{opacity: '0', display: 'none'}}>
<div className="flex flex-col items-center">
<div className="font-display text-4xl font-bold tracking-tighter mb-4 text-white">SYNTH<span className="text-orange-500">.</span>MIND</div>
<div className="font-mono text-xs text-orange-500 tracking-[0.3em] uppercase">Loading Neural Model</div>
<div className="w-48 h-[1px] bg-gray-800 mt-6 overflow-hidden relative">
<div className="absolute inset-0 bg-orange-500 w-full origin-left animate-[grow_1.5s_ease-in-out]"></div>
</div>
</div>
</div>

<canvas className="fixed -z-10 opacity-30 w-full h-full top-0 left-0" height="776" id="neural-canvas" width="1000"></canvas>

<div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] -z-5 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-sm border-b border-white/5">
<div className="flex items-center gap-3 group cursor-none">
<div className="flex group-hover:border-orange-500/50 transition-colors duration-300 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-400 to-orange-600 w-4 h-4 rounded-lg relative items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 1), rgba(234, 88, 12, 1))', '--border-radius-before': '8px'}}>
<iconify-icon className="text-white group-hover:text-orange-500 transition-colors" icon="solar:intelligent-correction-linear" width="20"></iconify-icon>
</div>
<span className="group-hover:text-white/90 text-lg font-bold text-white tracking-tight font-display">Laticce</span>
</div>
<div className="hidden md:flex gap-8 bg-gray-900/50 border-white/5 border rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg backdrop-blur-md gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors text-sm font-medium text-gray-400 tracking-tight" href="/#vision">Home</a>
<a className="hover:text-white transition-colors text-sm font-medium text-gray-400 tracking-tight" href="/#process">Process</a>
<a className="hover:text-white transition-colors text-sm font-medium text-gray-400 tracking-tight" href="#projects">Projects</a>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[10px] font-medium text-orange-500 tracking-wider font-mono">CONTACT US</span>
</div>
</div>
</nav>


<section className="min-h-[700px] flex flex-col overflow-hidden h-screen pt-20 relative perspective-1000 items-center justify-center" id="vision">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[120px] animate-pulse bg-orange-500/5 w-[800px] h-[800px] rounded-full absolute top-1/2 left-1/2"></div>
<div className="flex flex-col flex-1 z-20 text-center w-full max-w-6xl pr-6 pl-6 relative items-center justify-center">

<div className="group relative cursor-default mb-8 md:mb-12">
<h1 className="text-[11vw] leading-[0.85] bg-clip-text transition-all duration-700 ease-in-out group-hover:text-orange-500 group-hover:bg-none hover-float select-none md:text-[8.5rem] text-6xl font-bold text-transparent tracking-tighter font-display bg-gradient-to-b from-white via-gray-200 to-gray-600 mix-blend-overlay pb-2">Redefining <br/>Creativity</h1>
</div>

<div className="flex flex-col md:flex-row animate-[fadeIn_0.8s_1.5s_forwards] md:text-center md:border-l-0 md:border-t md:rounded-none md:pt-6 md:gap-x-8 md:items-center md:mb-12 text-left bg-black/20 opacity-0 border-orange-500/50 rounded-r-lg border-l-2 mb-10 pt-2 pr-6 pb-2 pl-6 backdrop-blur-sm gap-x-y-2 gap-y-2 items-start">
<div className="text-sm text-gray-400 tracking-widest font-mono">Architecting High-Impact Visuals</div>
<div className="text-sm text-gray-300 tracking-widest font-mono">Seamless Workflow Automation</div>
<div className="text-sm text-gray-500 tracking-widest font-mono">Enterprise-Scale Efficiency</div>
</div>

<div className="opacity-0 animate-[slideUp_0.8s_1.8s_forwards]">
<a className="group relative inline-flex items-center gap-3 px-10 py-4 bg-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-105" href="#projects">
<span className="z-10 text-base tracking-tight font-mono relative">SEE OUR PROJECTS</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_1s_2.5s_forwards] flex flex-col items-center gap-3 z-20">
<div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
<span className="text-[10px] uppercase animate-pulse text-gray-500 tracking-[0.2em] font-mono">SLIDE FOR MORE</span>
</div>
</section>

<section className="bg-gray-950 border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative" id="process">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="reveal-on-scroll space-y-10">
<div className="flex items-center gap-3 text-orange-500">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
<span className="uppercase text-xs tracking-widest font-mono">About Us</span>
</div>
<h2 className="md:text-5xl leading-tight text-4xl font-semibold tracking-tight font-display">Where Human Intuition<br/> <span className="text-gray-500">Meets Algorithmic Precision.</span></h2>
<p className="leading-relaxed text-lg font-light text-gray-400">We are not just an agency; we are an AI-native partner. Our team merges deep creative expertise with cutting-edge generative technology to deliver assets and systems that were previously impossible. We don't just use AI—we build with it.</p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
<iconify-icon className="text-orange-500 mb-3 group-hover:scale-110 transition-transform" icon="solar:bolt-linear" width="32"></iconify-icon>
<div className="text-2xl font-bold font-display mb-1">Cost Efficiency</div>
<div className="uppercase text-xs text-gray-500 tracking-wide font-mono">Drastically lower production overheads through automated creative cycles.</div>
</div>
<div className="hover:bg-white/[0.05] transition-colors group border-white/10 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<iconify-icon className="text-orange-500 mb-3 group-hover:scale-110 transition-transform" icon="solar:infinity-linear" width="32"></iconify-icon>
<div className="text-2xl font-bold font-display mb-1">Infinite Scalability</div>
<div className="uppercase text-xs text-gray-500 tracking-wide font-mono">Produce thousands of personalized creative variations in seconds.</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full perspective-1000 group cursor-pointer reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 rounded-2xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

<div className="relative w-full h-full transform-style-3d transition-all duration-700 ease-out transform group-hover:rotate-y-12 group-hover:rotate-x-6">

<div className="absolute inset-0 bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
<div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="flex-1 relative overflow-hidden">
<img alt="Generative Art" className="object-cover w-full h-full opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/852a4c0d-7411-45c0-a46b-4ac766933976_1600w.webp" style={{}}/>
<div className="bg-gradient-to-t from-gray-900 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-xs text-gray-400 font-mono bg-black/60 opacity-0 border-white/10 border rounded-lg pt-4 pr-4 pb-4 pl-4 absolute right-6 bottom-6 left-6 backdrop-blur-md translate-y-4">
<div className="flex text-orange-500 mb-2 justify-between">
<span className="">generating_workflow...</span>
<span>98%</span>
</div>
<div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[98%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 relative bg-gray-950 border-t border-white/5" id="process-steps">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-4xl font-bold font-display tracking-tight text-white mb-4">Our Process</h2>
<p className="text-gray-500 max-w-xl text-lg">A systematic approach to deploying generative intelligence.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-100">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:magnifer-linear" width="32"></iconify-icon>
<span className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">01</span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Discovery</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light">Identifying friction points in your creative and operational workflows to map the opportunity space.</p>
</div>

<div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-200">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:structure-linear" width="32"></iconify-icon>
<span className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">02</span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Architecture</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light">Designing custom AI models and automated pipelines tailored specifically for your brand's unique needs.</p>
</div>

<div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:play-circle-linear" width="32"></iconify-icon>
<span className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">03</span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Execution</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light">Deploying high-end visual campaigns and seamlessly integrating new workflows into your existing ecosystem.</p>
</div>

<div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-400">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:graph-up-linear" width="32"></iconify-icon>
<span className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">04</span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Optimization</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light">Continuous fine-tuning of models and pipelines to ensure maximum performance and output quality.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505]" id="projects">
<div className="max-w-[1600px] mx-auto">
<div className="flex justify-between items-end mb-12 reveal-on-scroll">
<div className="">
<h2 className="font-display text-4xl font-semibold tracking-tight text-white mb-2">Generated Output</h2>
<p className="text-gray-500 font-light">Recent training clusters and results.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/5 cursor-pointer reveal-on-scroll delay-100">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<img alt="Abstract AI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48158ae4-0512-47bf-8a73-ab2be48fdadc_800w.webp" style={{}}/>
</div>
<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="group-hover:translate-y-0 transition-transform duration-300 w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 translate-y-4">
<div className="text-orange-500 text-xs font-mono mb-2 tracking-widest">FINTECH // LONDON</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">Neo-Bank Identity</h3>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/5 cursor-pointer reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<img alt="AI Architecture" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7cedac2-cfed-44fe-87d7-432e596c123a_800w.webp" style={{}}/>
</div>
<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="text-orange-500 text-xs font-mono mb-2 tracking-widest">FASHION // TOKYO</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">Synthetic Fabrics</h3>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/5 cursor-pointer reveal-on-scroll delay-300">
<div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<img alt="Data Vis" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01e03aad-6c6c-4c37-8f2e-539467e631dd_800w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="text-orange-500 text-xs font-mono mb-2 tracking-widest">DATA // GLOBAL</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">Market Pulse</h3>
</div>
</div>
</div>
</div>
</section>


<section className="min-h-screen flex overflow-hidden bg-gray-950 pt-24 pb-24 relative items-center justify-center" id="access">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-[120px] opacity-20">
</div>
</div>
<div className="z-10 reveal-on-scroll w-full max-w-3xl pr-8 pl-8 relative">
<div className="text-center mb-16">
<div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-glow">
<iconify-icon className="animate-[spin_10s_linear_infinite] text-orange-500" height="32" icon="solar:rocket-2-outline" width="32"></iconify-icon>
</div>
<h2 className="text-5xl font-bold tracking-tight font-display mb-3">Ready to automate your creative future?</h2>
<p className="text-gray-500">Join the ranks of forward-thinking brands leveraging Generative AI.</p>
</div>
<form className="md:p-10 bg-gray-900/30 border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-md space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group">
<label className="block uppercase group-focus-within:text-orange-500 transition-colors text-xs text-gray-500 tracking-wider font-mono mb-2">Name</label>
<input className="focus:outline-none focus:border-orange-500 transition-colors text-lg text-white bg-transparent w-full border-gray-700 border-b pt-2 pb-2" placeholder="Name or Org" type="text"/>
</div>

<div className="group">
<label className="block uppercase group-focus-within:text-orange-500 transition-colors text-xs text-gray-500 tracking-wider font-mono mb-2">Phone</label>
<input className="focus:outline-none focus:border-orange-500 transition-colors text-lg text-white bg-transparent w-full border-gray-700 border-b pt-2 pb-2" placeholder="+1 (555) 000-0000" type="tel"/>
</div>

<div className="group md:col-span-2">
<label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-orange-500 transition-colors">Coordinates</label>
<input className="w-full bg-transparent border-b border-gray-700 py-2 text-lg text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Email Address" type="email"/>
</div>

<div className="group md:col-span-2">
<label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-orange-500 transition-colors">Project Brief</label>
<textarea className="w-full bg-transparent border-b border-gray-700 py-2 text-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none h-24" placeholder="Tell us about your creative goals or workflow challenges..."></textarea>
</div>
</div>
<div className="text-right pt-4">
<button className="hover:bg-orange-500 hover:text-white transition-all duration-300 inline-flex gap-2 text-sm font-bold text-black tracking-wide bg-white rounded-lg pt-3 pr-8 pb-3 pl-8 gap-x-2 gap-y-2 items-center group" type="submit">
<span>CONTACT US</span>
<iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-gray-950 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="flex group-hover:border-orange-500/50 transition-colors duration-300 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-400 to-orange-600 w-4 h-4 rounded-lg relative items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 1), rgba(234, 88, 12, 1))', '--border-radius-before': '8px'}}>
<iconify-icon className="text-white group-hover:text-orange-500 transition-colors" icon="solar:intelligent-correction-linear" width="20"></iconify-icon>
</div>
<span className="font-bold text-white tracking-tight font-display" style={{}}>LATICCE</span>
</div>
<div className="text-[10px] uppercase text-gray-600 tracking-widest font-mono">Based in Spain. Operating Globally.</div>
<div className="flex gap-6 text-gray-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
