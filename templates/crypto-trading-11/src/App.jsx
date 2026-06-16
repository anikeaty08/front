import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Particle System (Modified for Sharpness & Square shapes)
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5; // Size range
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random() * 0.4 + 0.1;
                // Mix of Blue and Teal
                this.color = Math.random() > 0.5 ? '#2dd4bf' : '#3b82f6';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                // Using fillRect for square particles (Sharp design)
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.floor((canvas.width * canvas.height) / 18000);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        resizeCanvas();
        initParticles();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });

        // Add keyframes for marquee
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `;
        document.head.appendChild(style);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="particle-canvas"></canvas>

<div className="w-full bg-[#0a0a0a] border-b border-gray-800 text-teal-500/80 text-[10px] font-mono py-1.5 overflow-hidden whitespace-nowrap z-50 relative">
<div className="inline-block animate-[marquee_40s_linear_infinite]">
            BTC $64,230 // ETH $3,450 // SOL $145 // AI_CONFIDENCE: 98.2% // SKAI_VOL: $45M // NEXT_ROLL: 04:32 // BTC $64,230 // ETH $3,450 // SOL $145 // AI_CONFIDENCE: 98.2% //
        </div>
</div>

<header className="fixed top-[29px] w-full z-40 glass-panel">
<div className="max-w-7xl mx-auto px-4 sm:px-6">

<div className="h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-teal-500/50 transition-colors">
<i className="w-4 h-4 text-teal-400 fill-teal-400/10" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-xl font-bold tracking-tight logo-gradient">SKAI.trade</span>
</a>

<div className="hidden md:flex items-center flex-1 max-w-md mx-8">
<div className="relative w-full group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-teal-400 transition-colors" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
<input className="w-full bg-[#0a0a0a] border border-gray-800 py-2.5 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-[#111] transition-all rounded-none font-mono" placeholder="Search markets, users, tokens..." type="text"/>
</div>
</div>

<div className="flex items-center gap-4">

<div className="hidden lg:flex items-center gap-3 font-mono text-xs">
<div className="flex items-center gap-2 bg-[#0a0a0a] border border-gray-800 px-3 py-1.5 hover:border-teal-500/30 transition-colors cursor-default">
<span className="text-teal-400">GEM</span>
<span className="text-white">960</span>
</div>
<div className="flex items-center gap-2 bg-[#0a0a0a] border border-gray-800 px-3 py-1.5 hover:border-teal-500/30 transition-colors cursor-default">
<span className="text-blue-400">PTS</span>
<span className="text-white">87.8K</span>
</div>
<div className="flex items-center gap-2 bg-[#0a0a0a] border border-gray-800 px-3 py-1.5 hover:border-teal-500/30 transition-colors cursor-default">
<span className="text-teal-400">$SKAI</span>
<span className="text-white">0.5034</span>
</div>
</div>

<div className="flex items-center gap-1">
<button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-none border border-transparent hover:border-white/10">
<i className="w-5 h-5" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-none border border-transparent hover:border-white/10">
<i className="w-5 h-5" data-lucide="bell" style={{strokeWidth: '1.5'}}></i>
<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-none"></div>
</button>
</div>

<button className="flex items-center gap-3 pl-3 py-1.5 pr-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all rounded-none group">
<div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-[10px] font-bold text-white tracking-wider rounded-none">SK</div>
<span className="text-sm font-medium text-gray-300 group-hover:text-white hidden sm:block">skaicasey</span>
<i className="w-3 h-3 text-gray-500" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="h-10 flex items-center gap-6 border-t border-white/5 overflow-x-auto scrollbar-hide">
<a className="text-xs font-medium text-teal-400 hover:text-teal-300 uppercase tracking-widest flex items-center gap-1" href="#">
<span className="w-1.5 h-1.5 bg-teal-400 rounded-none animate-pulse"></span>
                    AI Copilot
                </a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors" href="#">Trade</a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors" href="#">Buy</a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors" href="#">Earn</a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors" href="#">Lend</a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors" href="#">Play</a>
<a className="text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors" href="#">Predict</a>
</div>
</div>
</header>

<main className="relative z-10 pt-32 pb-20">

<section className="min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-3 border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 mb-10 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full opacity-75 bg-teal-400 rounded-none"></span>
<span className="relative inline-flex h-2 w-2 bg-teal-500 rounded-none"></span>
</span>
<span className="text-xs font-mono text-teal-400 tracking-widest uppercase">System Online v2.0</span>
</div>

<h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white mb-2 leading-[0.9]">
                    TRADE SMARTER.
                </h1>
<h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter logo-gradient mb-10 leading-[0.9]">
                    WIN BIGGER.
                </h1>

<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
                    AI-powered perpetual trading and prediction markets. <br className="hidden sm:block"/>
<span className="text-gray-300">Provably fair. Decentralized. Zero compromise.</span>
</p>

<div className="max-w-md mx-auto bg-[#0a0a0a] border border-gray-800 p-1 mb-12 hover:border-teal-500/30 transition-colors group cursor-pointer">
<div className="flex items-center justify-between bg-[#111] p-5 border border-gray-800/50 group-hover:bg-[#151515] transition-colors">
<div className="flex items-center gap-5">
<div className="w-10 h-10 bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
<i className="w-5 h-5" data-lucide="dice-5" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-left">
<div className="text-sm font-semibold text-white">Free SKAI Roll</div>
<div className="text-xs text-gray-500 font-mono mt-0.5">Win up to <span className="text-white">500 SKAI</span></div>
</div>
</div>
<button className="bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs px-5 py-2.5 uppercase tracking-wide transition-colors">
                            Roll Now
                        </button>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-0 w-full max-w-md mx-auto sm:max-w-none">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors border-r-0 sm:border-r border-gray-300">
                        Start Trading
                        <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0a0a0a] border border-gray-800 text-white font-bold px-8 py-4 text-sm uppercase tracking-widest hover:border-gray-600 transition-colors hover:bg-[#111] group">
<i className="w-4 h-4 text-teal-400 group-hover:text-teal-300" data-lucide="bot" style={{strokeWidth: '1.5'}}></i>
                        Ask AI Copilot
                    </button>
</div>
</div>

<div className="absolute bottom-20 right-10 hidden xl:block">
<div className="border border-gray-800 bg-[#050505]/90 backdrop-blur p-4 w-64 shadow-2xl">
<div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-800">
<span className="text-xs font-mono text-gray-500">ETH-PERP</span>
<span className="text-xs font-mono text-green-400">+4.2%</span>
</div>
<div className="text-2xl font-mono text-white mb-1">$3,452.10</div>
<div className="h-10 w-full relative overflow-hidden">

<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 L10 32 L20 36 L30 25 L40 28 L50 20 L60 22 L70 15 L80 10 L90 12 L100 5" fill="none" stroke="#2dd4bf" strokeWidth="1.5"></path>
<path d="M0 35 L10 32 L20 36 L30 25 L40 28 L50 20 L60 22 L70 15 L80 10 L90 12 L100 5 V 40 H 0 Z" fill="rgba(45, 212, 191, 0.1)" stroke="none"></path>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<i className="w-5 h-5 text-gray-600" data-lucide="arrow-down" style={{strokeWidth: '1.5'}}></i>
</div>
</section>
</main>

<div className="fixed left-0 bottom-10 z-50 flex flex-col border-y border-r border-gray-800 bg-[#050505]">
<button className="p-3 text-gray-500 hover:text-teal-400 hover:bg-teal-900/10 border-b border-gray-800 transition-colors">
<i className="w-5 h-5" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-3 text-gray-500 hover:text-teal-400 hover:bg-teal-900/10 border-b border-gray-800 transition-colors">
<i className="w-5 h-5" data-lucide="headphones" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-3 text-gray-500 hover:text-teal-400 hover:bg-teal-900/10 transition-colors relative group">
<i className="w-5 h-5 transition-transform group-hover:rotate-90" data-lucide="settings" style={{strokeWidth: '1.5'}}></i>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-teal-500 rounded-none"></span>
</button>
</div>


    </>
  );
}
