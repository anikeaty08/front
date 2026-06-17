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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Space Grotesk', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
extend: {
colors: {
background: '#000000',
surface: '#08080A',
primary: '#9945FF', // Solana Purple
accent: '#14F195',  // Solana Green
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.03em',
},
animation: {
'spin-slow': 'spin 30s linear infinite',
'pulse-fast': 'pulseGlow 2s ease-in-out infinite',
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
pulseGlow: {
'0%, 100%': { opacity: 0.6, boxShadow: '0 0 10px #9945FF' },
'50%': { opacity: 1, boxShadow: '0 0 25px #9945FF' },
},
fadeIn: {
'0%': { opacity: 0 },
'100%': { opacity: 1 },
},
slideUp: {
'0%': { transform: 'translateY(40px)', opacity: 0 },
'100%': { transform: 'translateY(0)', opacity: 1 },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // --- Custom Cursor Logic ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');
        
        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 100, fill: "forwards" });
        });
        
        // Hover effects for cursor
        const clickables = document.querySelectorAll('a, button, input');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5) rotate(45deg)';
                cursorOutline.style.borderColor = '#14F195';
                cursorOutline.style.backgroundColor = 'rgba(20, 241, 149, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
                cursorOutline.style.borderColor = 'rgba(153, 69, 255, 0.5)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });

        // --- Hyperscale Warp Background (Vertical Rain/Particles) ---
        const warpCanvas = document.getElementById('warp-canvas');
        const wCtx = warpCanvas.getContext('2d');
        let warpSpeed = 15;

        function resizeWarp() {
            warpCanvas.width = window.innerWidth;
            warpCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeWarp);
        resizeWarp();

        let particles = [];
        const particleCount = 200;

        for(let i=0; i<particleCount; i++){
            particles.push({
                x: Math.random() * warpCanvas.width,
                y: Math.random() * warpCanvas.height,
                length: Math.random() * 100 + 10,
                speed: Math.random() * warpSpeed + 5,
                color: Math.random() > 0.5 ? '#9945FF' : '#14F195',
                alpha: Math.random() * 0.5
            });
        }

        function animateWarp() {
            wCtx.clearRect(0, 0, warpCanvas.width, warpCanvas.height);
            
            particles.forEach(p => {
                p.y += p.speed;
                if(p.y > warpCanvas.height) {
                    p.y = -p.length;
                    p.x = Math.random() * warpCanvas.width;
                    p.speed = Math.random() * warpSpeed + 5; // Update speed based on slider
                }

                wCtx.beginPath();
                wCtx.moveTo(p.x, p.y);
                wCtx.lineTo(p.x, p.y + p.length);
                wCtx.strokeStyle = p.color;
                wCtx.globalAlpha = p.alpha;
                wCtx.stroke();
                wCtx.globalAlpha = 1.0;
            });
            requestAnimationFrame(animateWarp);
        }
        animateWarp();

        // Customizer function to update speed
        function updateSpeed(val) {
            document.getElementById('density-val').innerText = val + '%';
            warpSpeed = (val / 100) * 40; // Max speed 40
        }

        // --- Visualizer Logic ---
        const blockContainer = document.getElementById('block-container');
        const txList = document.getElementById('tx-list');
        const blockHeightEl = document.getElementById('block-height');
        let currentHeight = 234921441;

        function createBlock() {
            currentHeight++;
            blockHeightEl.innerText = currentHeight.toLocaleString();
            
            // Visual Block (Square geometric style)
            const block = document.createElement('div');
            block.className = 'w-16 h-16 mx-1 bg-[#14F195]/10 border border-[#14F195]/40 flex items-center justify-center shrink-0 animate-in fade-in slide-in-from-right duration-500 relative group cursor-pointer hover:bg-[#14F195] transition-colors';
            block.innerHTML = `
                <div class="text-[10px] font-mono text-[#14F195] group-hover:text-black font-bold rotate-90">SLOT</div>
            `;
            
            if (blockContainer.firstChild) {
                blockContainer.insertBefore(block, blockContainer.firstChild);
            } else {
                blockContainer.appendChild(block);
            }

            if (blockContainer.children.length > 12) {
                blockContainer.removeChild(blockContainer.lastChild);
            }

            // Fake TX Data
            const tx = document.createElement('div');
            const types = ['VOTE', 'SOL_TRANSFER', 'SERUM_DEX', 'NFT_MINT'];
            const type = types[Math.floor(Math.random() * types.length)];
            
            tx.className = "flex justify-between items-center border-b border-white/5 pb-2 animate-in fade-in slide-in-from-top duration-200";
            tx.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="text-[#14F195] font-bold w-20 text-[10px] tracking-wider uppercase">${type}</span>
                    <span class="text-white/40 font-mono">...${Math.random().toString(16).substr(2, 6)}</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-white/70 font-mono">${(Math.random() * 2).toFixed(4)} SOL</span>
                </div>
            `;
            
            if (txList.firstChild) {
                txList.insertBefore(tx, txList.firstChild);
            } else {
                txList.appendChild(tx);
            }
            if (txList.children.length > 6) {
                txList.removeChild(txList.lastChild);
            }
        }

        setInterval(createBlock, 400); // Faster generation for Solana speed

        // --- Customizer Toggle ---
        function toggleCustomizer() {
            const el = document.getElementById('customizer');
            if (el.classList.contains('translate-x-[120%]')) {
                el.classList.remove('translate-x-[120%]');
                el.classList.add('translate-x-0');
            } else {
                el.classList.add('translate-x-[120%]');
                el.classList.remove('translate-x-0');
            }
        }

        // --- Canvas Background for Network ---
        const canvas = document.getElementById('network-canvas');
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            if(canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        }
        window.addEventListener('resize', resizeCanvas);
        setTimeout(resizeCanvas, 100);

        let nodes = [];
        
        for(let i=0; i<30; i++) {
            nodes.push({
                x: Math.random() * 800,
                y: Math.random() * 400,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2
            });
        }

        function drawNetwork() {
            ctx.clearRect(0,0,canvas.width, canvas.height);
            
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                if(node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if(node.y < 0 || node.y > canvas.height) node.vy *= -1;
                
                ctx.fillStyle = '#14F195';
                ctx.fillRect(node.x, node.y, 2, 2); // Square nodes
            });

            ctx.lineWidth = 0.5;
            for(let i=0; i<nodes.length; i++) {
                for(let j=i+1; j<nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if(dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(153, 69, 255, ${1 - dist/100})`;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawNetwork);
        }
        drawNetwork();

    
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
      

<div id="cursor-dot"></div>
<div id="cursor-outline"></div>

<canvas id="warp-canvas"></canvas>

<nav className="fixed top-0 w-full z-50 border-b border-[#9945FF]/20 bg-black/80 backdrop-blur-md h-20 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<a className="flex items-center gap-3 group opacity-0 animate-slide-up stagger-1" href="#">
<div className="relative w-10 h-10 flex items-center justify-center bg-black border border-[#14F195] group-hover:bg-[#14F195] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(20,241,149,0.3)]">
<i className="w-5 h-5 relative z-10 stroke-[2] transition-colors" data-lucide="zap"></i>
</div>
<span className="font-display font-bold text-white tracking-tighter text-xl uppercase">Nexus<span className="text-[#9945FF]">OS</span></span>
</a>
<div className="hidden md:flex items-center gap-10 opacity-0 animate-slide-up stagger-2">
<a className="text-white/70 hover:text-[#14F195] transition-colors text-xs font-bold tracking-widest uppercase hover:tracking-[0.2em] duration-300 neon-text-accent-hover" href="#features">Architecture</a>
<a className="text-white/70 hover:text-[#14F195] transition-colors text-xs font-bold tracking-widest uppercase hover:tracking-[0.2em] duration-300" href="#visualizer">Turbine</a>
<a className="text-white/70 hover:text-[#14F195] transition-colors text-xs font-bold tracking-widest uppercase hover:tracking-[0.2em] duration-300" href="#governance">Dao</a>
</div>
<div className="flex items-center gap-4 opacity-0 animate-slide-up stagger-3">
<button className="p-2.5 text-white/70 hover:text-[#9945FF] transition-colors border border-transparent hover:border-[#9945FF]/30 hover:bg-[#9945FF]/10" onclick="toggleCustomizer()">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="sliders-horizontal"></i>
</button>
<button className="bg-[#14F195] text-black px-6 py-2.5 text-xs font-bold font-display uppercase tracking-tight hover:bg-[#9945FF] hover:text-white hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(20,241,149,0.4)] clip-path-slant">
<span>Devnet</span>
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</nav>

<aside className="fixed right-6 top-28 z-40 w-72 glass transform translate-x-[120%] transition-transform duration-500 cubic-bezier(0.2, 0, 0, 1)" id="customizer">
<div className="p-5 border-b border-[#9945FF]/20 flex justify-between items-center bg-[#9945FF]/5">
<span className="text-[10px] font-bold font-mono text-[#14F195] uppercase tracking-widest">Sys_Config</span>
<button className="text-white/50 hover:text-[#14F195]" onclick="toggleCustomizer()"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="p-6 space-y-8">
<div className="space-y-4">
<div className="flex justify-between text-xs text-white/60 font-display font-bold uppercase">
<span>Warp Velocity</span>
<span className="font-mono text-[#14F195]" id="density-val">50%</span>
</div>
<input max="100" min="0" oninput="updateSpeed(this.value)" type="range" value="50"/>
</div>
<div className="text-[10px] text-white/30 font-mono leading-relaxed">
                ADJUSTING SYSTEM PARAMETERS WILL IMPACT VISUAL PERFORMANCE.
            </div>
</div>
</aside>
<main className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[90vh]">

<div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
<div className="opacity-0 animate-slide-up stagger-1">
<div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#14F195]/30 bg-[#14F195]/5 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14F195] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#14F195]"></span>
</span>
<span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#14F195]">Mainnet Beta</span>
</div>
</div>
<h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] text-white select-none opacity-0 animate-slide-up stagger-2 neon-text-primary">
                SPEED OF<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14F195] to-[#9945FF]">LIGHT</span>
                CONSENSUS
            </h1>
<p className="font-sans text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight opacity-0 animate-slide-up stagger-3">
                Experience the first layer-1 built for <span className="text-[#14F195]">hyperscale</span>. Powered by Proof of History and Gulf Stream forwarding for sub-millisecond finality.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 opacity-0 animate-slide-up stagger-4">
<button className="group h-14 px-10 bg-white text-black text-sm font-display font-bold hover:scale-[1.02] transition-all duration-200 flex items-center gap-3 shadow-[0_0_50px_-10px_rgba(20,241,149,0.6)] overflow-hidden relative border-2 border-transparent hover:border-[#9945FF]">
<span className="relative z-10 flex items-center gap-2 uppercase tracking-wide">Start Building <i className="w-4 h-4 fill-black" data-lucide="zap"></i></span>
</button>
<button className="h-14 px-10 bg-black border border-white/20 text-white text-sm font-display font-bold hover:border-[#14F195] hover:text-[#14F195] transition-all flex items-center gap-3 backdrop-blur-md uppercase tracking-wide">
<i className="w-4 h-4" data-lucide="code-2"></i>
                    Read the Docs
                </button>
</div>
</div>

<div className="mt-32 w-full max-w-6xl bg-black/40 border border-[#9945FF]/30 p-1 flex justify-between items-center overflow-hidden opacity-0 animate-fade-in stagger-5 shadow-[0_0_30px_-5px_rgba(153,69,255,0.15)]">
<div className="flex items-center gap-16 animate-infinite-scroll whitespace-nowrap px-8 py-6 w-full">

<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-[#9945FF] font-bold font-mono">TPS (Live)</span>
<div className="flex items-center gap-2 font-display text-2xl font-bold">
<span className="text-white neon-text-accent">164,092</span>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-[#9945FF] font-bold font-mono">Avg Latency</span>
<div className="flex items-center gap-2 font-display text-2xl font-bold">
<span className="text-white">400</span> <span className="text-white/40 text-sm">ms</span>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-[#9945FF] font-bold font-mono">Global Validators</span>
<div className="flex items-center gap-2 font-display text-2xl font-bold">
<span className="text-white">3,402</span> <span className="text-[#14F195] text-[10px] animate-pulse">●</span>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-[#9945FF] font-bold font-mono">Epoch</span>
<div className="flex items-center gap-2 font-display text-2xl font-bold">
<span className="text-white">402</span>
</div>
</div>
</div>
</div>
</main>

<section className="py-32 px-6 relative z-10 border-t border-[#9945FF]/20 bg-[#050505]" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 uppercase">
                    Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14F195] to-[#9945FF]">Scale</span>
</h2>
<p className="text-white/60 text-base md:text-lg max-w-2xl font-mono">
                    Breaking the blockchain trilemma through hardware acceleration and parallel architecture.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass glass-hover p-10 md:col-span-2 group relative overflow-hidden border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-[#9945FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-black border border-[#14F195] flex items-center justify-center mb-8 shadow-[0_0_20px_-5px_rgba(20,241,149,0.4)]">
<i className="w-8 h-8 text-[#14F195] stroke-[1.5]" data-lucide="layers"></i>
</div>
<h3 className="font-display text-2xl font-bold text-white mb-3 uppercase tracking-tight">Sealevel Runtime</h3>
<p className="text-white/50 text-sm leading-relaxed max-w-md font-mono">
                            The world's first parallel smart contract runtime. Sealevel allows Nexus to process tens of thousands of contracts simultaneously, utilizing all available validator cores.
                        </p>
</div>
<div className="absolute top-10 right-10 opacity-20 group-hover:opacity-40 transition-all duration-500 transform group-hover:rotate-45">
<i className="w-32 h-32 text-[#9945FF] stroke-[1]" data-lucide="cpu"></i>
</div>
</div>

<div className="glass glass-hover p-10 group relative border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-[#14F195]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-16 h-16 bg-black border border-[#9945FF] flex items-center justify-center mb-8 shadow-[0_0_20px_-5px_rgba(153,69,255,0.4)]">
<i className="w-8 h-8 text-[#9945FF] stroke-[1.5]" data-lucide="wind"></i>
</div>
<h3 className="font-display text-xl font-bold text-white mb-3 uppercase tracking-tight">Gulf Stream</h3>
<p className="text-white/50 text-sm leading-relaxed font-mono">
                        Mempool-less transaction forwarding. Validators push transactions to the next leader before the previous block is confirmed.
                    </p>
</div>

<div className="glass glass-hover p-10 group relative border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-[#9945FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-16 h-16 bg-black border border-white/20 flex items-center justify-center mb-8 group-hover:border-[#14F195] transition-colors">
<i className="w-8 h-8 text-white group-hover:text-[#14F195] stroke-[1.5] transition-colors" data-lucide="shield-check"></i>
</div>
<h3 className="font-display text-xl font-bold text-white mb-3 uppercase tracking-tight">Tower BFT</h3>
<p className="text-white/50 text-sm leading-relaxed font-mono">
                        A custom implementation of PBFT that leverages the cryptographic clock of Proof of History to reduce messaging overhead.
                    </p>
</div>

<div className="glass glass-hover p-10 md:col-span-2 relative overflow-hidden flex flex-col md:flex-row items-center gap-10 border border-white/5">
<div className="flex-1 relative z-10">
<div className="w-16 h-16 bg-black border border-[#14F195] flex items-center justify-center mb-8 shadow-[0_0_20px_-5px_rgba(20,241,149,0.4)]">
<i className="w-8 h-8 text-[#14F195] stroke-[1.5]" data-lucide="database"></i>
</div>
<h3 className="font-display text-2xl font-bold text-white mb-3 uppercase tracking-tight">Cloudbreak</h3>
<p className="text-white/50 text-sm leading-relaxed font-mono">
                            Horizontally scaled state architecture. Cloudbreak scales the database across RAID 0 SSDs, optimizing for concurrent reads and writes.
                        </p>
</div>

<div className="flex-1 w-full h-40 border border-[#9945FF]/30 relative overflow-hidden bg-black/50 flex items-center justify-center">
<div className="absolute inset-0 flex gap-1 justify-center opacity-30">
<div className="w-1 h-full bg-[#9945FF] animate-pulse"></div>
<div className="w-1 h-full bg-[#14F195] animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 h-full bg-[#9945FF] animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 h-full bg-[#14F195] animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 h-full bg-[#9945FF] animate-pulse" style={{animationDelay: '0.4s'}}></div>
</div>
<div className="z-10 font-mono text-[10px] text-white bg-black px-2 border border-white/20">RW_LOCK_RELEASED</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-[#9945FF]/20 bg-[#020202]" id="visualizer">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-display text-3xl font-bold text-white tracking-tighter uppercase">Cluster State</h2>
<p className="text-[#14F195] text-sm mt-2 font-mono">System Status: NOMINAL</p>
</div>
<div className="flex items-center gap-3 mt-6 md:mt-0 px-3 py-1.5 border border-[#14F195] bg-[#14F195]/10">
<span className="text-[10px] text-[#14F195] uppercase tracking-widest font-mono font-bold">Turbine Active</span>
<span className="w-1.5 h-1.5 bg-[#14F195] shadow-[0_0_10px_#14F195] animate-ping"></span>
</div>
</div>
<div className="glass rounded-none border border-[#9945FF]/30 shadow-[0_0_50px_-20px_rgba(153,69,255,0.3)]">

<div className="h-40 bg-black border-b border-[#9945FF]/20 flex items-center relative overflow-hidden px-10" id="block-container">
<div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>

</div>

<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#9945FF]/20">
<div className="p-8 bg-black/50">
<h4 className="text-[10px] font-bold text-[#9945FF] uppercase tracking-widest mb-6 font-mono">Confirmed Slots</h4>
<div className="space-y-3 font-mono text-[10px] h-64 overflow-hidden relative" id="tx-list">
<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
</div>
</div>
<div className="p-0 col-span-2 bg-black flex flex-col justify-center items-center relative overflow-hidden h-[340px]">
<canvas className="absolute inset-0 w-full h-full opacity-30" id="network-canvas"></canvas>
<div className="relative z-10 text-center p-8 border border-[#14F195]/30 bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(20,241,149,0.1)]">
<div className="text-6xl font-mono text-white font-bold mb-2 tracking-tighter neon-text-accent" id="block-height">234,921,441</div>
<div className="text-[10px] text-[#9945FF] uppercase tracking-[0.3em] font-bold font-display">Slot Height</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-[#9945FF]/20 bg-black">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="w-8 h-8 bg-[#14F195] flex items-center justify-center">
<i className="w-5 h-5 text-black fill-current" data-lucide="zap"></i>
</div>
<span className="font-display font-bold text-white tracking-tighter text-xl uppercase">Nexus</span>
</a>
<p className="text-white/40 text-xs leading-relaxed max-w-xs font-mono">
                        High-performance blockchain built for mass adoption.
                    </p>
</div>
<div>
<h4 className="text-[#14F195] font-mono font-bold text-xs uppercase tracking-wider mb-6">Ecosystem</h4>
<ul className="space-y-3 text-xs text-white/50 font-mono hover:text-white">
<li><a className="hover:text-[#9945FF] transition-colors" href="#">Grants</a></li>
<li><a className="hover:text-[#9945FF] transition-colors" href="#">Breakpoints</a></li>
<li><a className="hover:text-[#9945FF] transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-[#14F195] font-mono font-bold text-xs uppercase tracking-wider mb-6">Developers</h4>
<ul className="space-y-3 text-xs text-white/50 font-mono">
<li><a className="hover:text-[#9945FF] transition-colors" href="#">Docs</a></li>
<li><a className="hover:text-[#9945FF] transition-colors" href="#">Github</a></li>
<li><a className="hover:text-[#9945FF] transition-colors" href="#">Playground</a></li>
</ul>
</div>
<div>
<h4 className="text-[#14F195] font-mono font-bold text-xs uppercase tracking-wider mb-6">Social</h4>
<div className="flex gap-5">
<a className="text-white/50 hover:text-[#14F195] transition-colors" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="twitter"></i></a>
<a className="text-white/50 hover:text-[#14F195] transition-colors" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="github"></i></a>
<a className="text-white/50 hover:text-[#14F195] transition-colors" href="#"><i className="w-5 h-5 stroke-[1.5]" data-lucide="message-square"></i></a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 font-mono">
<p>© 2024 Nexus Foundation. System active.</p>
<div className="flex gap-8">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
