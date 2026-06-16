import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: {
dark: '#020204',
primary: 'rgb(var(--color-primary) / <alpha-value>)',
secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
accent: 'rgb(var(--color-accent) / <alpha-value>)',
}
},
animation: {
'blob': 'blob var(--anim-speed-slow) infinite',
'float': 'float var(--anim-speed-normal) ease-in-out infinite',
'pulse-glow': 'pulseGlow var(--anim-speed-fast) cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 20s linear infinite',
'text-shimmer': 'textShimmer 3s ease-out infinite alternate',
'hue-cycle': 'hueCycle 10s linear infinite',
'border-spin': 'borderSpin 3s linear infinite',
'holo-spin': 'holoSpin 15s linear infinite',
'holo-spin-rev': 'holoSpinRev 10s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
pulseGlow: {
'0%, 100%': { opacity: '1', boxShadow: '0 0 30px rgb(var(--color-primary) / 0.4)' },
'50%': { opacity: '.7', boxShadow: '0 0 10px rgb(var(--color-primary) / 0.1)' },
},
textShimmer: {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '100% 50%' },
},
holoSpin: {
'0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
'100%': { transform: 'rotateX(360deg) rotateY(360deg)' }
},
holoSpinRev: {
'0%': { transform: 'rotateX(360deg) rotateY(360deg)' },
'100%': { transform: 'rotateX(0deg) rotateY(0deg)' }
},
borderSpin: {
'100%': { transform: 'rotate(360deg)' }
}
}
}
}
}



        lucide.createIcons();

        // --- Customization Logic ---
        const root = document.documentElement;
        
        function updateColor(primaryRGB, secondaryRGB) {
            root.style.setProperty('--color-primary', primaryRGB);
            root.style.setProperty('--color-secondary', secondaryRGB);
            const body = document.body;
            body.style.filter = "brightness(1.5)";
            setTimeout(() => body.style.filter = "brightness(1)", 200);
        }

        function updateGlow(val) {
            root.style.setProperty('--glow-intensity', val + 'px');
            document.getElementById('glow-val').innerText = val + 'px';
        }

        function updateSpeed(val) {
            const base = 6;
            root.style.setProperty('--anim-speed-normal', (base / val) + 's');
            root.style.setProperty('--anim-speed-fast', ((base/3) / val) + 's');
            root.style.setProperty('--anim-speed-slow', ((base*2.5) / val) + 's');
            document.getElementById('speed-val').innerText = val + 'x';
            blockIntervalTime = 1500 / val;
        }

        function togglePanel() {
            const panel = document.getElementById('customizer');
            if(panel.classList.contains('translate-x-0')) {
                panel.classList.replace('translate-x-0', 'translate-x-[80%]');
            } else {
                panel.classList.replace('translate-x-[80%]', 'translate-x-0');
            }
        }
        setTimeout(() => togglePanel(), 2500); 

        // --- Particle System (Canvas) ---
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let particleCount = 80; 

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
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2;
                const rand = Math.random();
                if(rand < 0.33) this.colorType = '--color-primary';
                else if (rand < 0.66) this.colorType = '--color-secondary';
                else this.colorType = '--color-accent';
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                const rgb = getComputedStyle(root).getPropertyValue(this.colorType).trim();
                ctx.fillStyle = `rgba(${rgb}, ${Math.random() * 0.5 + 0.1})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p, index) => {
                p.update();
                p.draw();
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        const rgb = getComputedStyle(root).getPropertyValue(p.colorType).trim();
                        ctx.strokeStyle = `rgba(${rgb}, ${0.1 - dist/1000})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animateParticles);
        }
        
        initParticles();
        animateParticles();

        // --- Blockchain Visualizer ---
        const blockchainContainer = document.getElementById('blockchain-viz');
        let blockIntervalTime = 1500;
        
        function addBlock() {
            const hash = Math.random().toString(36).substring(7).toUpperCase();
            const block = document.createElement('div');
            block.className = 'w-20 h-20 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-[9px] font-mono text-white/70 relative shrink-0 animate-[pulse_0.5s_ease-out] backdrop-blur-md shadow-lg group hover:border-brand-primary/50 transition-colors hover:bg-white/10';
            block.innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl pointer-events-none"></div>
                <i data-lucide="box" class="w-5 h-5 mb-1 text-brand-secondary group-hover:text-brand-primary transition-colors"></i>
                <span class="truncate px-1 z-10 opacity-70">0x${hash}</span>
            `;
            if(blockchainContainer.children.length > 0) {
                const line = document.createElement('div');
                line.className = 'w-6 h-0.5 bg-gradient-to-r from-brand-secondary to-brand-primary shrink-0 opacity-50';
                blockchainContainer.insertBefore(line, blockchainContainer.firstChild);
            }
            blockchainContainer.insertBefore(block, blockchainContainer.firstChild);
            lucide.createIcons();
            if(blockchainContainer.children.length > 12) {
                blockchainContainer.removeChild(blockchainContainer.lastChild);
                blockchainContainer.removeChild(blockchainContainer.lastChild);
            }
            // Mempool
            const txList = document.getElementById('tx-list');
            const tx = document.createElement('div');
            const types = ['SWAP', 'MINT', 'BURN', 'DAO'];
            const type = types[Math.floor(Math.random() * types.length)];
            const val = (Math.random() * 50).toFixed(4);
            const colors = { 'SWAP': 'text-brand-primary', 'MINT': 'text-brand-secondary', 'BURN': 'text-red-400', 'DAO': 'text-brand-accent' };
            tx.className = 'flex justify-between items-center p-2.5 rounded hover:bg-white/10 border-b border-white/5 transition-colors text-white/80 cursor-default group';
            tx.innerHTML = `
                <span class="font-semibold ${colors[type]} group-hover:blur-[1px] transition-all duration-300 text-[10px]">${type}</span>
                <span class="font-mono text-[9px] opacity-60">...${Math.random().toString(36).substring(9)}</span>
                <span class="text-white font-medium text-[10px]">${val} ETH</span>
            `;
            txList.insertBefore(tx, txList.firstChild);
            if(txList.children.length > 15) txList.removeChild(txList.lastChild);
            setTimeout(addBlock, blockIntervalTime);
        }
        addBlock();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        const simCanvas = document.getElementById('sim-canvas');
        function spawnSimParticle() {
            const dot = document.createElement('div');
            const colors = ['bg-cyan-400', 'bg-fuchsia-500', 'bg-yellow-400', 'bg-green-400'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            dot.className = `absolute w-1.5 h-1.5 ${color} rounded-full shadow-[0_0_8px_currentColor]`;
            const angle = Math.random() * Math.PI * 2;
            const r = 220;
            dot.style.left = `calc(50% + ${Math.cos(angle) * r}px)`;
            dot.style.top = `calc(50% + ${Math.sin(angle) * r}px)`;
            dot.style.transition = 'all 1.5s ease-in';
            simCanvas.appendChild(dot);
            setTimeout(() => {
                dot.style.transform = `translate(${-Math.cos(angle) * r}px, ${-Math.sin(angle) * r}px) scale(0.5)`;
                dot.style.opacity = 0;
            }, 50);
            setTimeout(() => dot.remove(), 1500);
        }
        setInterval(spawnSimParticle, 150);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<canvas id="particles-canvas"></canvas>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-40"></div>
<div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-secondary/20 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-40" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-[-10%] left-[30%] w-[900px] h-[900px] bg-brand-accent/10 rounded-full blur-[150px] animate-blob mix-blend-screen opacity-30" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-white/[0.02] backdrop-blur-2xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group relative z-10" href="#">
<div className="relative w-10 h-10 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-accent rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
<div className="relative z-10 w-full h-full bg-white/5 rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-md">
<i className="w-5 h-5 text-white relative z-10 stroke-[2]" data-lucide="hexagon"></i>
</div>
</div>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary transition-all">Web3<span className="text-brand-primary group-hover:text-brand-secondary">Nexus</span></span>
</a>
<div className="hidden md:flex items-center gap-10 relative z-10">
<a className="text-white/70 hover:text-brand-primary transition-colors text-xs font-medium uppercase tracking-wider" href="#features">Protocol</a>
<a className="text-white/70 hover:text-brand-secondary transition-colors text-xs font-medium uppercase tracking-wider" href="#governance">Governance</a>
<a className="text-white/70 hover:text-brand-accent transition-colors text-xs font-medium uppercase tracking-wider" href="#ecosystem">Ecosystem</a>
</div>
<button className="relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-all group flex items-center gap-2 hover:border-brand-primary/50 hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)] backdrop-blur-md z-10">
<span className="relative z-10">Connect Wallet</span>
<i className="relative z-10 w-3.5 h-3.5 text-brand-primary group-hover:text-white transition-colors" data-lucide="wallet"></i>
</button>
</div>
</nav>

<aside className="fixed right-6 top-28 z-40 w-64 glass-panel rounded-2xl transition-transform duration-300 translate-x-0" id="customizer">
<div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
<h3 className="text-[10px] font-semibold uppercase tracking-widest text-white/70">Hyper Control</h3>
<button className="text-white/50 hover:text-white hover:rotate-90 transition-transform" onclick="togglePanel()"><i className="w-4 h-4" data-lucide="settings-2"></i></button>
</div>
<div className="p-5 space-y-7">
<div className="space-y-3">
<label className="text-[10px] uppercase tracking-wider text-brand-primary font-medium">Neon Palette</label>
<div className="grid grid-cols-4 gap-3">
<button className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 border border-white/30 hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,255,255,0.5)]" onclick="updateColor('0 255 255', '255 0 221')"></button>
<button className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-yellow-400 border border-white/30 hover:scale-110 transition-transform shadow-[0_0_10px_rgba(255,50,50,0.5)]" onclick="updateColor('255 50 50', '255 200 0')"></button>
<button className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-600 border border-white/30 hover:scale-110 transition-transform shadow-[0_0_10px_rgba(50,255,50,0.5)]" onclick="updateColor('50 255 50', '50 100 255')"></button>
<button className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-sky-400 border border-white/30 hover:scale-110 transition-transform shadow-[0_0_10px_rgba(200,50,255,0.5)]" onclick="updateColor('200 50 255', '50 200 255')"></button>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between">
<label className="text-[10px] uppercase tracking-wider text-white/60">Glow</label>
<span className="text-[10px] text-brand-primary font-mono" id="glow-val">30px</span>
</div>
<input max="60" min="0" oninput="updateGlow(this.value)" type="range" value="30"/>
</div>
<div className="space-y-3">
<div className="flex justify-between">
<label className="text-[10px] uppercase tracking-wider text-white/60">Speed</label>
<span className="text-[10px] text-brand-secondary font-mono" id="speed-val">1x</span>
</div>
<input max="3" min="0.5" oninput="updateSpeed(this.value)" step="0.5" type="range" value="1"/>
</div>
</div>
</aside>

<main className="relative pt-44 pb-24 px-6 z-10 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="holo-scene opacity-60 md:opacity-100">
<div className="holo-ring"></div>
<div className="holo-cube">
<div className="face front"></div>
<div className="face back"></div>
<div className="face right"></div>
<div className="face left"></div>
<div className="face top"></div>
<div className="face bottom"></div>
</div>
<div className="holo-cube-inner">
<div className="face-inner front"></div>
<div className="face-inner back"></div>
<div className="face-inner right"></div>
<div className="face-inner left"></div>
<div className="face-inner top"></div>
<div className="face-inner bottom"></div>
</div>
</div>
<div className="max-w-6xl mx-auto text-center relative z-20">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 reveal-up hover:border-brand-primary/60 transition-colors shadow-lg">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary shadow-[0_0_10px_rgb(var(--color-primary))]"></span>
</span>
<span className="text-xs font-semibold text-white tracking-wide uppercase">Hyper-Scale Mainnet Live</span>
</div>
<h1 className="text-7xl md:text-9xl font-semibold text-white tracking-tighter leading-[0.9] mb-10 group cursor-default reveal-up select-none mix-blend-overlay md:mix-blend-normal" style={{transitionDelay: '100ms'}}>
<span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">Decentralized</span>
<span className="hyper-gradient-text glitch-text" data-text="Reality">Reality</span>
</h1>
<p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light reveal-up drop-shadow-md" style={{transitionDelay: '200ms'}}>
                The first layer-0 protocol powered by <span className="text-white font-medium">holographic consensus</span>. 
                Interact with DeFi, DAOs, and NFTs with vibrant, sub-millisecond finality.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-up" style={{transitionDelay: '300ms'}}>
<button className="relative group px-10 py-5 rounded-full bg-white text-black font-semibold text-sm tracking-tight overflow-hidden hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(var(--color-primary),0.5)]">
<div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2 group-hover:text-white">Start Building <i className="w-4 h-4 fill-current" data-lucide="zap"></i></span>
</button>
<button className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-sm font-semibold tracking-tight backdrop-blur-xl flex items-center gap-2 hover:border-brand-secondary/50 hover:shadow-[0_0_30px_rgba(var(--color-secondary),0.2)]">
<i className="w-4 h-4 text-brand-secondary" data-lucide="file-code-2"></i> Read Whitepaper
                </button>
</div>
</div>

<div className="mt-32 reveal-up relative z-20" style={{transitionDelay: '400ms'}}>
<div className="max-w-5xl mx-auto h-32 relative flex items-center justify-center overflow-hidden mask-linear-fade glass-panel rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent animate-pulse pointer-events-none"></div>
<div className="flex items-center gap-6 transition-transform duration-500 ease-linear relative z-10" id="blockchain-viz">

</div>
</div>
<div className="text-center mt-6 flex justify-center items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]"></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-mono">Real-time Block Generation</span>
</div>
</div>
</main>

<section className="py-32 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-panel rounded-3xl p-10 group reveal-up">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-blue-600 flex items-center justify-center text-black mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_30px_rgba(var(--color-primary),0.4)]">
<i className="w-7 h-7" data-lucide="cpu"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-primary transition-colors">Smart Contracts 2.0</h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">Self-executing contracts with formal verification built-in. Reduce gas costs by 90% via batch execution.</p>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-brand-primary to-transparent w-1/2 animate-[pulse_3s_infinite]"></div>
</div>
</div>

<div className="glass-panel rounded-3xl p-10 group reveal-up" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-secondary to-purple-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-[0_0_30px_rgba(var(--color-secondary),0.4)]">
<i className="w-7 h-7" data-lucide="activity"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-secondary transition-colors">Liquid Protocols</h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">Instant liquidity provision with automated market makers (AMM) powered by off-chain computation.</p>
<div className="flex items-end gap-1.5 h-10">
<div className="w-3 bg-brand-secondary h-6 rounded-sm animate-[pulse_1s_infinite] shadow-[0_0_10px_rgb(var(--color-secondary))]"></div>
<div className="w-3 bg-brand-secondary h-8 rounded-sm animate-[pulse_1.2s_infinite] shadow-[0_0_10px_rgb(var(--color-secondary))]"></div>
<div className="w-3 bg-brand-secondary h-4 rounded-sm animate-[pulse_0.8s_infinite] shadow-[0_0_10px_rgb(var(--color-secondary))]"></div>
<div className="w-3 bg-brand-secondary h-10 rounded-sm animate-[pulse_1.5s_infinite] shadow-[0_0_10px_rgb(var(--color-secondary))]"></div>
</div>
</div>

<div className="glass-panel rounded-3xl p-10 group reveal-up" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-accent to-orange-500 flex items-center justify-center text-black mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_30px_rgba(var(--color-accent),0.4)]">
<i className="w-7 h-7" data-lucide="layers"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-accent transition-colors">Dynamic Standards</h3>
<p className="text-white/60 text-sm leading-relaxed mb-8">Composable NFTs that evolve based on on-chain data and external oracle inputs.</p>
<div className="relative w-20 h-20 rounded-xl bg-black/50 overflow-hidden border border-white/20 group-hover:border-brand-accent/50 transition-colors shadow-lg">
<img className="w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
</div>

<div className="glass-panel rounded-3xl p-10 group reveal-up lg:col-span-2 flex flex-col md:flex-row items-center gap-10" style={{transitionDelay: '300ms'}}>
<div className="flex-1">
<div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-md">
<i className="w-7 h-7" data-lucide="users-2"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">DAO Governance</h3>
<p className="text-white/60 text-sm leading-relaxed">Quadratic voting systems integrated directly into the protocol layer. Empower your community with fair governance tools.</p>
</div>
<div className="flex-1 w-full bg-[#050508]/50 border border-white/10 rounded-xl p-6 font-mono text-xs text-brand-primary/90 shadow-2xl relative overflow-hidden backdrop-blur-md">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
<div className="flex justify-between mb-4">
<span className="text-white">Proposal #402</span>
<span className="text-brand-accent px-2 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/20">Active</span>
</div>
<div className="w-full bg-white/10 h-3 rounded-full mb-3 overflow-hidden">
<div className="bg-gradient-to-r from-brand-primary to-brand-secondary h-full w-[75%] rounded-full shadow-[0_0_15px_rgb(var(--color-primary))]"></div>
</div>
<div className="flex justify-between text-white/40 font-sans"><span>Yes: 75%</span><span>No: 25%</span></div>
</div>
</div>

<div className="glass-panel rounded-3xl p-10 group reveal-up" style={{transitionDelay: '400ms'}}>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
<i className="w-7 h-7" data-lucide="fingerprint"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Universal Identity</h3>
<p className="text-white/60 text-sm leading-relaxed">One wallet, all chains. Zero-knowledge proofs ensure your data remains private.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-primary/5 [mask-image:radial-gradient(circle_at_center,black,transparent)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-4xl font-semibold text-white mb-3 tracking-tight">Protocol Explorer</h2>
<p className="text-white/50 text-sm">Visualize live transactions and contract execution in hyper-speed.</p>
</div>
<div className="flex gap-6 mt-6 md:mt-0">
<div className="flex items-center gap-3 text-xs text-white/70 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_rgb(var(--color-primary))]"></span> TPS: <span className="text-white font-mono font-semibold" id="tps-counter">4,290</span>
</div>
<div className="flex items-center gap-3 text-xs text-white/70 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse shadow-[0_0_8px_rgb(var(--color-secondary))]"></span> Latency: 40ms
                    </div>
</div>
</div>
<div className="glass-panel rounded-2xl overflow-hidden shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

<div className="col-span-1 border-b lg:border-b-0 lg:border-r border-white/10 p-0 max-h-[500px] overflow-hidden flex flex-col bg-white/[0.01]">
<div className="px-6 py-4 bg-white/5 border-b border-white/5 text-xs font-semibold uppercase tracking-wider text-white/60 flex justify-between items-center backdrop-blur-sm">
<span>Mempool</span>
<i className="w-3 h-3 text-white/40" data-lucide="database"></i>
</div>
<div className="flex-1 overflow-y-auto p-3 space-y-1 font-mono text-[10px]" id="tx-list">

</div>
</div>

<div className="col-span-2 relative bg-black/40 h-[500px] flex items-center justify-center overflow-hidden" id="sim-canvas">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>

<div className="relative w-40 h-40 rounded-full border border-brand-primary/50 flex items-center justify-center animate-pulse-glow z-10 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(var(--color-primary),0.3)]">
<div className="absolute inset-0 rounded-full border border-brand-secondary/30 animate-[spin_4s_linear_infinite]"></div>
<div className="absolute inset-2 rounded-full border border-brand-accent/20 animate-[spin_8s_linear_infinite_reverse]"></div>
<i className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgb(var(--color-primary))]" data-lucide="box"></i>
<div className="absolute inset-[-40px] animate-spin-slow border border-dashed border-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-white/5 bg-white/[0.01] backdrop-blur-xl relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div>
<h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Platform</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-brand-primary transition-colors hover:pl-2 duration-300 block" href="#">Nodes</a></li>
<li><a className="hover:text-brand-primary transition-colors hover:pl-2 duration-300 block" href="#">Staking</a></li>
<li><a className="hover:text-brand-primary transition-colors hover:pl-2 duration-300 block" href="#">Bridge</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Developers</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-brand-secondary transition-colors hover:pl-2 duration-300 block" href="#">Documentation</a></li>
<li><a className="hover:text-brand-secondary transition-colors hover:pl-2 duration-300 block" href="#">GitHub</a></li>
<li><a className="hover:text-brand-secondary transition-colors hover:pl-2 duration-300 block" href="#">Audit Reports</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Community</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-brand-accent transition-colors hover:pl-2 duration-300 block" href="#">Discord</a></li>
<li><a className="hover:text-brand-accent transition-colors hover:pl-2 duration-300 block" href="#">Twitter</a></li>
<li><a className="hover:text-brand-accent transition-colors hover:pl-2 duration-300 block" href="#">Blog</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Newsletter</h4>
<div className="flex relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
<input className="relative bg-black/60 backdrop-blur-md border border-white/10 rounded-l-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-primary/50 w-full z-10 placeholder-white/30" placeholder="Enter email" type="email"/>
<button className="relative bg-white text-black px-5 py-3 rounded-r-lg text-xs font-semibold hover:bg-brand-primary transition-colors z-10">Sub</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-brand-primary" data-lucide="hexagon"></i>
<div className="text-[10px] text-white/30 uppercase tracking-widest">© 2024 Web3 Nexus Foundation.</div>
</div>
<div className="flex gap-4 items-center px-4 py-2 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse box-shadow-[0_0_10px_#22c55e]"></div>
<span className="text-[10px] text-white/70 font-mono">ALL SYSTEMS OPERATIONAL</span>
</div>
</div>
</footer>


    </>
  );
}
