import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
page: '#050505', // True black/zinc base
card: '#0a0a0a',
primary: '#f97316', // Orange-500
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'spotlight': 'spotlight 2s ease .75s 1 forwards',
'shimmer': 'shimmer 2s linear infinite',
'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
spotlight: {
'0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
'100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
},
shimmer: {
'0%': { backgroundPosition: '200% 0' },
'100%': { backgroundPosition: '-200% 0' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });

        /* 
           Advanced Particle System 
           - Replaces static stars with drifting "dust" and "nodes"
           - Mouse interaction: Nodes glow orange when close to mouse
           - Connections: Nodes connect to mouse with faint lines
        */
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        
        // Configuration
        const config = {
            particleCount: 120, // Lower density for cleaner look
            connectionRadius: 120,
            mouseRadius: 180,
            baseColor: 'rgba(255, 255, 255, 0.3)',
            highlightColor: 'rgba(249, 115, 22, 0.8)', // Orange-500
            lineColor: 'rgba(249, 115, 22, 0.15)', // Very faint orange
        };

        const mouse = { x: null, y: null };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3; // Very slow horizontal drift
                this.vy = (Math.random() - 0.5) * 0.3; // Very slow vertical drift
                this.size = Math.random() * 1.5;
                this.baseAlpha = Math.random() * 0.4 + 0.1;
                this.currentAlpha = this.baseAlpha;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges (or wrap)
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Interaction with mouse
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.mouseRadius) {
                    // Particle gets bigger and orange when near mouse
                    this.currentAlpha = Math.min(this.baseAlpha + 0.5, 1);
                    // Draw line to mouse
                    ctx.beginPath();
                    ctx.strokeStyle = config.lineColor;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                    ctx.closePath();
                    
                    // Add subtle fill glow
                    ctx.fillStyle = config.highlightColor;
                } else {
                    this.currentAlpha = this.baseAlpha;
                    ctx.fillStyle = config.baseColor;
                }
            }

            draw() {
                ctx.globalAlpha = this.currentAlpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            
            // Adjust density based on screen size
            const count = window.innerWidth < 768 ? 60 : config.particleCount;
            
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Mouse "Flashlight" Glow on Canvas background
            if (mouse.x) {
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
                gradient.addColorStop(0, 'rgba(249, 115, 22, 0.08)'); // Center orange
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        
        // Remove mouse influence when leaving window
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Initialize
        resize();
        animate();


        // Spotlight Card Effect (Logic retained)
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });

        // Hero 3D Card Tilt Effect
        const heroSection = document.getElementById('hero-section');
        const heroCard = document.getElementById('hero-card');

        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5; 
            const rotateY = ((x - centerX) / centerX) * 5;

            heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="particle-canvas"></canvas>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] rounded-[100%] mix-blend-screen opacity-20 animate-spotlight bg-orange-600/10"></div>
<div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] blur-[90px] rounded-full mix-blend-screen opacity-10 bg-amber-600/10"></div>
</div>
<div className="fixed inset-0 bg-grid-slate pointer-events-none -z-20"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl transition-all duration-300 hover:-translate-y-1">
<div className="relative flex items-center justify-between px-2 py-2 rounded-full border backdrop-blur-xl shadow-2xl ring-1 transition-all border-white/5 bg-black/50 ring-white/5 hover:bg-black/80 hover:border-white/10">
<div className="flex items-center pl-4 gap-3 cursor-pointer">

<div className="w-5 h-5 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-md flex items-center justify-center shadow-lg shadow-orange-500/20 group">
<div className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform bg-black"></div>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-100">Acme Finance</span>
</div>
<div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
<a className="px-3 py-1.5 text-xs transition-colors rounded-full text-zinc-500 hover:text-orange-100 hover:bg-white/5" href="#">Features</a>
<a className="px-3 py-1.5 text-xs transition-colors rounded-full text-zinc-500 hover:text-orange-100 hover:bg-white/5" href="#">Method</a>
<a className="px-3 py-1.5 text-xs transition-colors rounded-full text-zinc-500 hover:text-orange-100 hover:bg-white/5" href="#">Customers</a>
<a className="px-3 py-1.5 text-xs transition-colors rounded-full text-zinc-500 hover:text-orange-100 hover:bg-white/5" href="#">Changelog</a>
</div>
<div className="flex items-center pr-1 gap-2">
<a className="hidden sm:block text-xs font-medium px-3 transition-colors text-zinc-500 hover:text-white" href="#">Sign in</a>
<button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-50">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fdba74_0%,#f97316_50%,#fdba74_100%)] opacity-70 group-hover:opacity-100 transition-opacity"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 py-1.5 text-xs font-medium backdrop-blur-3xl transition-colors bg-zinc-950 text-white hover:bg-zinc-900">
                      Get Started
                    </span>
</button>
</div>
</div>
</nav>

<main className="relative pt-40 pb-20 overflow-visible" id="hero-section">
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md mb-8 hover:border-orange-500/50 transition-all cursor-pointer group shadow-[0_0_20px_-10px_rgba(249,115,22,0.3)] border-white/5 bg-white/[0.03] hover:bg-white/[0.08]">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs group-hover:text-white transition-colors text-zinc-400">v2.0 is now live</span>
<svg className="w-3 h-3 text-zinc-600 group-hover:translate-x-0.5 transition-transform group-hover:text-orange-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<h1 className="md:text-7xl lg:text-8xl bg-clip-text leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 text-5xl font-medium text-transparent tracking-tighter bg-gradient-to-b max-w-5xl mr-auto mb-6 ml-auto from-white via-white to-zinc-500">
                Banking infrastructure <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-100/80 to-amber-200">for the internet.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                A fully integrated suite of financial products. Issue cards, manage spend, and forecast cashflow with <span className="text-zinc-200">AI-driven precision</span>.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
<button className="shine-button h-12 px-8 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 bg-white text-black hover:bg-zinc-100">
                    Start Integration
                    <svg className="w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="group h-12 px-8 rounded-full border text-sm font-medium transition-colors flex items-center gap-2 backdrop-blur-sm bg-white/5 border-white/5 text-zinc-300 hover:bg-white/10 hover:border-white/10 hover:text-white">
<svg className="w-4 h-4 group-hover:text-orange-300 transition-colors text-zinc-500" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                    Read Documentation
                </button>
</div>

<div className="perspective-container relative w-full max-w-6xl mx-auto h-[500px] md:h-[700px] animate-in fade-in zoom-in-95 duration-1000 delay-500">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-orange-500/10 blur-[100px] rounded-full -z-10 transition-opacity duration-500 group-hover:opacity-80"></div>

<div className="transform-3d-card w-full h-full bg-[#0a0a0a] rounded-xl border shadow-2xl overflow-hidden relative group border-white/10" id="hero-card" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>

<div className="h-10 border-b bg-[#0a0a0a] flex items-center px-4 justify-between z-20 relative border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/5"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/5"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/5"></div>
</div>
<div className="w-64 h-5 rounded-md mx-auto hidden md:block bg-zinc-900 border border-white/5"></div>
<div className="w-10"></div>
</div>
<div className="flex h-full">

<div className="w-60 border-r bg-[#09090b] p-4 hidden md:flex flex-col gap-1 z-10 border-white/5">
<div className="flex items-center gap-3 px-3 py-2 bg-orange-500/10 rounded-lg mb-4 cursor-default text-orange-400 border border-orange-500/10">
<svg className="w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-xs font-medium">Overview</span>
</div>
<div className="text-[10px] font-semibold uppercase tracking-wider px-3 mb-2 mt-2 text-zinc-600">Finance</div>
<div className="flex items-center gap-3 px-3 py-2 text-zinc-500 rounded-md cursor-pointer transition-colors hover:text-white hover:bg-white/5">
<svg className="w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="text-xs font-medium">Cards</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-zinc-500 rounded-md cursor-pointer transition-colors hover:text-white hover:bg-white/5">
<svg className="w-4 h-4" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
<span className="text-xs font-medium">Transactions</span>
</div>
</div>

<div className="flex-1 p-8 bg-[#050505] relative">

<div className="absolute inset-0 bg-grid-slate opacity-30 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-end mb-8 pop-out">
<div>
<h2 className="text-xs text-zinc-500 mb-1 font-medium">Total Cash Balance</h2>
<div className="text-4xl font-semibold tracking-tight flex items-center gap-2 text-white">
                                            $2,845,920.00
                                            <span className="text-xs font-normal bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20 text-orange-400">+4.2%</span>
</div>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 rounded-lg text-xs font-medium border transition-colors bg-zinc-900 text-zinc-300 border-white/5 hover:bg-zinc-800">Filter</button>
<button className="px-4 py-2 hover:bg-orange-500 rounded-lg text-xs font-medium shadow-lg shadow-orange-900/20 transition-colors bg-orange-600 text-white">Export CSV</button>
</div>
</div>

<div className="w-full h-64 border rounded-xl bg-gradient-to-b from-white/[0.02] to-transparent relative overflow-hidden mb-6 pop-out shadow-2xl border-white/5">
<div className="absolute inset-0 flex items-end justify-between px-6 pb-0 pt-10 gap-2 opacity-90">

<div className="w-full bg-zinc-800 h-[30%] rounded-t-sm hover:bg-orange-600 transition-all duration-300 hover:scale-y-105 origin-bottom"></div>
<div className="w-full bg-zinc-800 h-[45%] rounded-t-sm hover:bg-orange-600 transition-all duration-300 hover:scale-y-105 origin-bottom"></div>
<div className="w-full bg-zinc-800 h-[35%] rounded-t-sm hover:bg-orange-600 transition-all duration-300 hover:scale-y-105 origin-bottom"></div>
<div className="w-full bg-zinc-800 h-[60%] rounded-t-sm hover:bg-orange-600 transition-all duration-300 hover:scale-y-105 origin-bottom"></div>
<div className="w-full bg-zinc-800 h-[50%] rounded-t-sm hover:bg-orange-600 transition-all duration-300 hover:scale-y-105 origin-bottom"></div>

<div className="w-full bg-orange-600 h-[75%] rounded-t-sm hover:bg-orange-500 transition-all duration-300 hover:scale-y-105 origin-bottom relative group/bar">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] py-1 px-2 rounded border opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl bg-zinc-900 text-white border-white/10">
                                                $842K
                                            </div>

<div className="absolute inset-0 blur-lg opacity-30 bg-orange-400"></div>
</div>
<div className="w-full bg-zinc-800 h-[65%] rounded-t-sm hover:bg-orange-600 transition-all duration-300 hover:scale-y-105 origin-bottom"></div>
<div className="w-full bg-zinc-800 h-[80%] rounded-t-sm hover:bg-orange-600 transition-all duration-300 hover:scale-y-105 origin-bottom"></div>
<div className="w-full bg-zinc-800 h-[90%] rounded-t-sm hover:bg-orange-600 transition-all duration-300 hover:scale-y-105 origin-bottom"></div>
<div className="w-full bg-zinc-800 h-[70%] rounded-t-sm hover:bg-orange-600 transition-all duration-300 hover:scale-y-105 origin-bottom"></div>
</div>

<div className="absolute inset-0 border-t top-1/4 pointer-events-none border-white/5"></div>
<div className="absolute inset-0 border-t top-2/4 pointer-events-none border-white/5"></div>
<div className="absolute inset-0 border-t top-3/4 pointer-events-none border-white/5"></div>
</div>
<div className="grid grid-cols-3 gap-4 pop-out">
<div className="p-4 rounded-xl border bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer group/stat border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-orange-500 group-hover/stat:shadow-[0_0_8px_rgba(249,115,22,0.6)] transition-shadow"></div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Revenue</div>
</div>
<div className="text-lg font-medium text-white">$124,000</div>
</div>
<div className="p-4 rounded-xl border bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer group/stat border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-zinc-600 group-hover/stat:bg-white transition-colors"></div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Burn Rate</div>
</div>
<div className="text-lg font-medium text-white">$32,450</div>
</div>
<div className="p-4 rounded-xl border bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer group/stat border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-zinc-600 group-hover/stat:bg-white transition-colors"></div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Net Profit</div>
</div>
<div className="text-lg font-medium text-white">$91,550</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-32 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-metallic mb-6">Designed for scale.</h2>
<p className="text-xl text-zinc-500 font-light max-w-2xl">
                    Every feature is crafted to help you manage your financial operations with speed and confidence.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[380px]">

<div className="spotlight-card group md:col-span-6 lg:col-span-8 rounded-3xl border transition-colors border-white/10 hover:border-white/20" style={{-X: '362px', -Y: '56px'}}>
<div className="relative z-10 p-8 h-full flex flex-col justify-between pointer-events-none">
<div>
<div className="w-10 h-10 rounded-full border flex items-center justify-center mb-4 group-hover:bg-orange-500/10 group-hover:text-orange-400 transition-colors border-white/10 bg-white/5 text-zinc-400">
<svg className="w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-2xl font-medium mb-2 text-white">Global Infrastructure</h3>
<p className="max-w-sm font-light text-zinc-400">Accept payments in 135+ currencies with local acquiring optimization.</p>
</div>

<div className="absolute right-0 bottom-0 w-full h-full opacity-30 mix-blend-screen">
<div className="absolute top-[30%] right-[10%] w-64 h-64 rounded-full border border-orange-500/10 animate-pulse-glow"></div>

<div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse bg-orange-400"></div>
<div className="absolute top-[60%] right-[15%] w-1 h-1 rounded-full bg-white/40"></div>
</div>
</div>
</div>

<div className="spotlight-card group md:col-span-6 lg:col-span-4 transition-colors hover:border-white/20 border-white/10 border rounded-3xl" style={{-X: '122.3359375px', -Y: '81px'}}>
<div className="relative z-10 p-8 h-full flex flex-col pointer-events-none">
<div className="w-10 h-10 rounded-full border flex items-center justify-center mb-4 group-hover:bg-orange-500/10 group-hover:text-orange-400 transition-colors border-white/10 bg-white/5 text-zinc-400">
<svg className="w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-medium mb-2 text-white">Vault Security</h3>
<p className="text-sm font-light mb-8 text-zinc-400">SOC2 Type II Certified. End-to-end encryption.</p>
<div className="mt-auto relative w-full h-32 flex items-center justify-center rounded-xl border overflow-hidden bg-white/5 border-white/5">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(249,115,22,0.03)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer"></div>
<div className="p-3 border border-orange-500/20 rounded-lg flex items-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.1)] z-10 bg-black/80">
<svg className="w-4 h-4 text-orange-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-xs font-mono text-orange-400">Encrypted</span>
</div>
</div>
</div>
</div>

<div className="spotlight-card group md:col-span-6 lg:col-span-4 rounded-3xl border transition-colors border-white/10 hover:border-white/20">
<div className="p-8 h-full flex flex-col relative z-10 pointer-events-none">
<div className="w-10 h-10 rounded-full border flex items-center justify-center mb-4 group-hover:bg-orange-500/10 group-hover:text-orange-400 transition-colors border-white/10 bg-white/5 text-zinc-400">
<svg className="w-5 h-5" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</div>
<h3 className="text-2xl font-medium mb-2 text-white">Developer First</h3>
<p className="text-sm font-light mb-6 text-zinc-400">Robust APIs with typed SDKs for easy integration.</p>
<div className="mt-auto w-full bg-[#030303] rounded-lg border p-4 font-mono text-[10px] leading-relaxed shadow-inner group-hover:border-white/20 transition-colors border-white/10 text-zinc-500">
<div className="flex gap-2 mb-2 border-b pb-2 border-white/5">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>
<p><span className="text-orange-400">const</span> <span className="text-zinc-300">card</span> = <span className="text-orange-400">await</span> api.<span className="text-yellow-200">create</span>({</p>
<p className="pl-4">currency: <span className="text-green-400">'usd'</span>,</p>
<p className="pl-4">limit: <span className="text-orange-300">5000</span>,</p>
<p className="pl-4">type: <span className="text-green-400">'virtual'</span></p>
<p>});</p>
</div>
</div>
</div>

<div className="spotlight-card group md:col-span-6 lg:col-span-8 rounded-3xl border transition-colors border-white/10 hover:border-white/20" style={{-X: '525.671875px', -Y: '67px'}}>
<div className="p-8 h-full flex flex-col md:flex-row gap-8 relative z-10 pointer-events-none">
<div className="flex flex-col justify-between max-w-sm">
<div>
<div className="w-10 h-10 rounded-full border flex items-center justify-center mb-4 group-hover:bg-orange-500/10 group-hover:text-orange-400 transition-colors border-white/10 bg-white/5 text-zinc-400">
<svg className="w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-medium mb-2 text-white">Intelligent Forecasting</h3>
<p className="font-light text-zinc-400">Our model analyzes 50+ data points to predict cash flow anomalies before they happen.</p>
</div>
<div className="mt-8 flex gap-3">
<div className="px-3 py-1 rounded-full border text-[10px] border-white/10 bg-white/5 text-zinc-400 group-hover:text-orange-200 group-hover:border-orange-500/20 transition-colors">Runway Detection</div>
<div className="px-3 py-1 rounded-full border text-[10px] border-white/10 bg-white/5 text-zinc-400 group-hover:text-orange-200 group-hover:border-orange-500/20 transition-colors">Spend Alerts</div>
</div>
</div>

<div className="flex-1 bg-[#050505] rounded-xl border p-4 relative overflow-hidden group-hover:border-orange-500/30 transition-all duration-500 border-white/5">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-medium text-white">Q3 Forecast</span>
<span className="text-[10px] px-2 py-0.5 rounded border text-orange-400 bg-orange-900/10 border-orange-900/20">+12% Predicted</span>
</div>

<div className="h-32 w-full flex items-end justify-between gap-1">
<div className="w-full h-[20%] rounded-t-sm group-hover:bg-zinc-800 transition-colors bg-zinc-900"></div>
<div className="w-full h-[35%] rounded-t-sm group-hover:bg-zinc-800 transition-colors bg-zinc-900"></div>
<div className="w-full h-[40%] rounded-t-sm group-hover:bg-zinc-800 transition-colors bg-zinc-900"></div>
<div className="w-full h-[30%] rounded-t-sm group-hover:bg-zinc-800 transition-colors bg-zinc-900"></div>
<div className="w-full h-[50%] rounded-t-sm group-hover:bg-zinc-800 transition-colors bg-zinc-900"></div>
<div className="w-full bg-gradient-to-t to-orange-500 h-[70%] rounded-t-sm animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.3)] from-orange-900/50"></div>
<div className="w-full bg-orange-500/10 border-t border-orange-500/50 h-[85%] rounded-t-sm border-dashed"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-black border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-sm font-medium text-zinc-600 mb-12 uppercase tracking-widest">Trusted by innovative teams</h3>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">

<div className="flex items-center gap-2 text-xl font-bold transition-colors text-white hover:text-white"><svg className="w-5 h-5 fill-white" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Vercel</div>
<div className="flex items-center gap-2 text-xl font-bold transition-colors text-white hover:text-white"><svg className="w-5 h-5 fill-white" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Linear</div>
<div className="flex items-center gap-2 text-xl font-bold transition-colors text-white hover:text-white"><svg className="w-5 h-5 fill-white" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Dropbox</div>
<div className="flex items-center gap-2 text-xl font-bold transition-colors text-white hover:text-white"><svg className="w-5 h-5 fill-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Stripe</div>
</div>

<div className="mt-24 max-w-3xl mx-auto">
<blockquote className="text-3xl md:text-4xl font-medium leading-tight mb-8 text-white">
                    "The level of insight we get is unparalleled. It's the operating system for our entire financial stack."
                </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br border ring-2 ring-transparent group-hover:ring-orange-500/20 transition-all from-zinc-800 to-zinc-950 border-white/10"></div>
<div className="text-left">
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-zinc-500">CTO at TechFlow</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-black"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-glow"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-6 text-white">Ready to upgrade?</h2>
<p className="text-lg mb-10 max-w-lg mx-auto font-light text-zinc-500">Join thousands of companies managing their finance with the precision of code.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="shine-button px-8 py-4 rounded-full text-sm font-semibold transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 duration-200 bg-white text-black hover:bg-zinc-200">
                    Get Started Now
                </button>
<button className="px-8 py-4 rounded-full border text-sm font-medium transition-colors bg-black border-white/10 text-white hover:bg-white/5">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t py-12 px-6 border-white/5 bg-black">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4 font-medium text-white">
<div className="w-4 h-4 rounded-sm bg-orange-500"></div>
                    Acme Finance
                </div>
<p className="text-xs text-zinc-500 max-w-xs">
                    San Francisco, CA<br/>
                    Designed for the future of commerce.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-white">Product</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="cursor-pointer transition-colors hover:text-white">Features</li>
<li className="cursor-pointer transition-colors hover:text-white">Integrations</li>
<li className="cursor-pointer transition-colors hover:text-white">Pricing</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-white">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="cursor-pointer transition-colors hover:text-white">About</li>
<li className="cursor-pointer transition-colors hover:text-white">Blog</li>
<li className="cursor-pointer transition-colors hover:text-white">Careers</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-white">Resources</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="cursor-pointer transition-colors hover:text-white">Documentation</li>
<li className="cursor-pointer transition-colors hover:text-white">Help Center</li>
<li className="cursor-pointer transition-colors hover:text-white">API Status</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-white">Legal</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="cursor-pointer transition-colors hover:text-white">Privacy</li>
<li className="cursor-pointer transition-colors hover:text-white">Terms</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t flex justify-between items-center border-white/5">
<p className="text-[10px] text-zinc-600">© 2024 Acme Inc. All rights reserved.</p>
<div className="flex gap-4">
<svg className="w-4 h-4 transition-colors cursor-pointer text-zinc-600 hover:text-white" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="w-4 h-4 transition-colors cursor-pointer text-zinc-600 hover:text-white" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
</div>
</footer>



    </>
  );
}
