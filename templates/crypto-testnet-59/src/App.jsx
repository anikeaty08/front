import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Network Background Script
        const canvas = document.getElementById('networkCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let time = 0;

        // Configuration
        const config = {
            particleCount: 60,
            connectionDistance: 150,
            baseSpeed: 0.2,
            color: '168, 85, 247' // Purple 500
        };

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * config.baseSpeed;
                this.vy = (Math.random() - 0.5) * config.baseSpeed;
                this.size = Math.random() * 1.5 + 0.5;
                this.pulseOffset = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                const opacity = 0.3 + 0.3 * Math.sin(time * 2 + this.pulseOffset);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.min(width / 15, config.particleCount);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            time += 0.01;

            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < config.connectionDistance) {
                        ctx.beginPath();
                        const opacity = (1 - dist / config.connectionDistance) * 0.15;
                        ctx.strokeStyle = `rgba(${config.color}, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();

                        // Occasional "data packet" moving along the line
                        if (Math.random() < 0.002) {
                             // This would be complex to implement efficiently in this loop, 
                             // sticking to glowing connections for performance in single block
                        }
                    }
                }
            });

            // Draw a subtle "flow" line in the background (like the road in reference)
            // Using a large sine wave
            ctx.beginPath();
            ctx.moveTo(0, height * 0.8);
            for(let x = 0; x < width; x+=10) {
                const y = height * 0.8 + Math.sin(x * 0.002 + time) * 100;
                ctx.lineTo(x, y);
            }
            ctx.strokeStyle = `rgba(${config.color}, 0.05)`;
            ctx.lineWidth = 200; // Very thick blur
            ctx.lineCap = 'round';
            ctx.stroke();

            // Sharp line inside
            ctx.beginPath();
            ctx.moveTo(0, height * 0.8);
            for(let x = 0; x < width; x+=10) {
                const y = height * 0.8 + Math.sin(x * 0.002 + time) * 100;
                ctx.lineTo(x, y);
            }
            ctx.strokeStyle = `rgba(236, 72, 153, 0.2)`; // Pink
            ctx.lineWidth = 2;
            ctx.stroke();

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        resize();
        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">

<div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen opacity-60"></div>

<div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-fuchsia-900/20 rounded-full blur-[120px] mix-blend-screen opacity-60"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20"></div>
</div>

<canvas className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60" id="networkCanvas"></canvas>

<div className="relative z-10 flex flex-col min-h-screen w-full fade-enter">

<header className="w-full max-w-7xl mx-auto p-6 md:p-8 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)] backdrop-blur-md">
<div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-[0_0_8px_rgba(217,70,239,0.8)]"></div>
<span className="text-xs font-semibold tracking-wide text-neutral-200">POCHAIN</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
<a className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 rounded-full shadow-sm" href="#">Faucet</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Explorer</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Docs</a>
</nav>
<div className="hidden md:block">

</div>
</header>

<main className="flex-grow flex flex-col items-center justify-center p-4 relative">

<div className="text-center mb-10 md:mb-12 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-semibold tracking-wider uppercase mb-6 shadow-[0_0_10px_-5px_rgba(168,85,247,0.5)]">
<span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse"></span>
                    Testnet Live
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif-display text-white leading-[0.9] md:leading-[0.85] tracking-tight mb-2 drop-shadow-2xl">
                    Fuel your <br/>
<span className="italic font-normal bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 text-transparent bg-clip-text animate-gradient">next big idea</span>
</h1>
<p className="mt-6 text-lg text-neutral-400 font-light max-w-lg mx-auto leading-relaxed">
                    Instantly receive POC tokens to deploy, test, and scale your dApps on the POChain testnet.
                </p>
</div>

<div className="w-full max-w-[460px] bg-[#0c0c0e]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] p-2 relative overflow-hidden group/card">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50"></div>
<div className="bg-[#111113]/80 rounded-[20px] p-6 md:p-8 border border-white/5 relative z-10">
<form className="space-y-5" onsubmit="event.preventDefault();">

<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-500 ml-1 uppercase tracking-wide" htmlFor="wallet">Destination Address</label>
<div className="relative group/input">
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-neutral-700 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 font-mono" id="wallet" placeholder="0x..." type="text"/>
<div className="absolute left-3.5 top-3 text-neutral-600 group-focus-within/input:text-purple-400 transition-colors">
<i className="w-4 h-4" data-lucide="wallet"></i>
</div>

<div className="absolute right-3 top-3.5 w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.4)]"></div>
</div>
</div>

<div className="space-y-1.5">
<div className="flex justify-between items-end px-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Amount</label>
<span className="text-xs font-semibold text-white">5.0 POC</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden flex items-center">
<div className="h-full w-3/4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full relative shadow-[0_0_10px_rgba(192,38,211,0.5)]"></div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex items-center justify-between group/captcha hover:bg-white/[0.04] transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded border border-neutral-600 bg-neutral-900 group-hover/captcha:border-purple-400 transition-colors flex items-center justify-center">
<div className="w-3 h-3 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-[2px] opacity-0 group-active:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-neutral-400 font-medium">Verify human status</span>
</div>
<i className="w-4 h-4 text-neutral-600 group-hover/captcha:text-purple-400 transition-colors" data-lucide="shield-check"></i>
</div>

<button className="w-full bg-white text-black font-semibold py-3.5 rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group/btn relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
<span className="relative z-10 flex items-center gap-2">
<span className="tracking-tight">Initiate Transfer</span>
<i className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</span>
</button>
</form>
</div>
</div>

<div className="mt-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<p className="text-[10px] text-center font-medium tracking-widest text-neutral-600 uppercase mb-4">Securing the future of web3</p>
<div className="flex items-center justify-center gap-8 text-neutral-500">

<div className="h-5 flex items-center gap-1.5"><div className="w-4 h-4 bg-current rounded-full"></div><span className="text-sm font-semibold tracking-tighter">sphere</span></div>
<div className="h-5 flex items-center gap-1.5"><div className="w-4 h-4 border-2 border-current rounded"></div><span className="text-sm font-semibold tracking-tighter">block</span></div>
<div className="h-5 flex items-center gap-1.5"><div className="w-4 h-4 bg-current rotate-45"></div><span className="text-sm font-semibold tracking-tighter">nexus</span></div>
</div>
</div>
</main>
</div>


    </>
  );
}
