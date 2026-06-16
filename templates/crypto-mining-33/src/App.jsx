import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#D4AF37', // Metallic Gold
light: '#F3CF55',
dark: '#AA8C2C',
dim: 'rgba(212, 175, 55, 0.1)',
},
copper: {
DEFAULT: '#B87333', // Metallic Copper
light: '#D99058',
dark: '#8A5221',
dim: 'rgba(184, 115, 51, 0.1)',
},
dark: {
950: '#020202',
900: '#050505',
850: '#080808',
800: '#0a0a0a',
700: '#121212',
border: 'rgba(255, 255, 255, 0.1)'
}
},
backgroundImage: {
'metallic-gradient': 'linear-gradient(135deg, #B87333 0%, #D4AF37 100%)',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'marquee': 'marquee 30s linear infinite',
'float': 'float 6s ease-in-out infinite',
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeInUp: {
'from': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(5px)' },
'to': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' }
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': "lucide"
            }
        });

        // ELECTRIC GOLD & YELLOW BACKGROUND ANIMATION
        const canvas = document.getElementById('electric-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        
        // Configuration for the electric lines
        const lines = [];
        const numLines = 40;
        const colors = [
            'rgba(212, 175, 55, 0.4)',  // Metallic Gold
            'rgba(243, 207, 85, 0.3)',  // Lighter Gold
            'rgba(184, 115, 51, 0.2)',  // Copper low opacity
            'rgba(255, 223, 0, 0.2)'    // Yellow highlights
        ];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class ElectricLine {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.points = [];
                this.maxLength = 50 + Math.random() * 50;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.width = Math.random() * 2 + 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                this.points.push({x: this.x, y: this.y});

                if (this.points.length > this.maxLength) {
                    this.points.shift();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.points[0].x, this.points[0].y);
                
                // Create a jagged "electric" path
                for (let i = 1; i < this.points.length; i++) {
                    const p = this.points[i];
                    // Add slight jitter for electric effect
                    const jitter = (Math.random() - 0.5) * 2;
                    ctx.lineTo(p.x + jitter, p.y + jitter);
                }
                
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.width;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                
                // Add glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                
                ctx.stroke();
                ctx.shadowBlur = 0; // Reset
            }
        }

        function init() {
            resize();
            for(let i = 0; i < numLines; i++) {
                lines.push(new ElectricLine());
            }
        }

        function animate() {
            ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; // Fade out effect
            ctx.fillRect(0, 0, width, height);

            lines.forEach(line => {
                line.update();
                line.draw();
            });

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        init();
        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed top-0 left-0 w-full h-screen -z-10 opacity-60" id="electric-canvas"></canvas>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/10 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight flex items-center gap-3 group" href="#">

<img alt="Aura Flow" className="h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="font-medium text-white">Aura Flow</span>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-white/60">
<a className="hover:text-brand transition-colors" href="#comparison">Comparison</a>
<a className="hover:text-brand transition-colors" href="#mining">Mining Ops</a>
<a className="hover:text-brand transition-colors" href="#platform">Platform</a>
<a className="hover:text-brand transition-colors" href="#crowdfunding">Funding</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium uppercase tracking-wide text-white hover:text-brand transition-colors" href="#video">
                    Watch Video
                </a>
<a className="flex items-center gap-2 bg-gradient-to-r from-copper to-brand text-black px-6 py-3 text-sm font-medium uppercase tracking-wide hover:opacity-90 transition-opacity duration-300 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]" href="#start">
                    Get Started
                </a>
</div>
<button className="md:hidden text-white hover:text-brand transition-colors">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="md:pt-52 md:pb-32 pt-32 pb-20 relative overflow-hidden bg-transparent border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-12 items-end justify-between">
<div className="max-w-4xl">

<div className="inline-flex items-center gap-2 px-4 py-1.5 border border-brand/30 rounded-full bg-brand/10 text-brand text-xs font-mono mb-8 backdrop-blur-sm animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
<span className="tracking-wide">CRYPTO MINING REVOLUTION</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-white mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                        Learn How <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">TEXITcoin</span> compares <br/>
                        to Bitcoin.
                    </h1>

<p className="text-2xl text-white/60 max-w-2xl font-light leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        TEXITcoin is building one of the world’s largest privately owned crypto mines, funded through crowdfunding and powered by a global decentralized platform.
                    </p>
</div>

<div className="w-full md:w-auto flex flex-col gap-5 animate-fade-in-up" style={{animationDelay: '0.3s'}}>

<a className="w-full md:w-72 flex items-center justify-between bg-gradient-to-r from-copper to-brand text-black px-8 py-5 text-base font-medium uppercase tracking-wide hover:brightness-110 transition-all duration-300 group shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(184,115,51,0.3)] rounded-sm" href="#start">
                        Get Started
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform text-black" data-lucide="arrow-right"></i>
</a>

<a className="w-full md:w-72 flex items-center justify-between border border-brand bg-black/40 backdrop-blur-md text-white px-8 py-5 text-base font-medium uppercase tracking-wide hover:bg-brand/10 transition-all duration-300 group rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.05)]" href="#video">
                        Watch Video
                        <i className="w-5 h-5 text-brand group-hover:text-brand-light transition-colors" data-lucide="play-circle"></i>
</a>
<div className="text-xs text-brand/60 font-mono text-right pt-2">
                        * SECURE &amp; TRANSPARENT<br/>
                        * TEXAS BASED OPS
                    </div>
</div>
</div>
</div>
</header>

<div className="border-b border-white/5 bg-transparent overflow-hidden py-8 backdrop-blur-sm">
<div className="flex whitespace-nowrap overflow-hidden">
<div className="flex animate-marquee items-center gap-16 px-6">
<span className="text-5xl font-medium uppercase tracking-tight text-stroke opacity-60">Decentralized</span>
<i className="w-8 h-8 text-brand" data-lucide="zap"></i>
<span className="text-5xl font-medium uppercase tracking-tight text-stroke opacity-60">Transparency</span>
<i className="w-8 h-8 text-copper" data-lucide="zap"></i>
<span className="text-5xl font-medium uppercase tracking-tight text-stroke opacity-60">Crowdfunded</span>
<i className="w-8 h-8 text-brand" data-lucide="zap"></i>
<span className="text-5xl font-medium uppercase tracking-tight text-stroke opacity-60">Texas Mining</span>
<i className="w-8 h-8 text-copper" data-lucide="zap"></i>
</div>
<div aria-hidden="true" className="flex animate-marquee items-center gap-16 px-6">
<span className="text-5xl font-medium uppercase tracking-tight text-stroke opacity-60">Decentralized</span>
<i className="w-8 h-8 text-brand" data-lucide="zap"></i>
<span className="text-5xl font-medium uppercase tracking-tight text-stroke opacity-60">Transparency</span>
<i className="w-8 h-8 text-copper" data-lucide="zap"></i>
<span className="text-5xl font-medium uppercase tracking-tight text-stroke opacity-60">Crowdfunded</span>
<i className="w-8 h-8 text-brand" data-lucide="zap"></i>
<span className="text-5xl font-medium uppercase tracking-tight text-stroke opacity-60">Texas Mining</span>
<i className="w-8 h-8 text-copper" data-lucide="zap"></i>
</div>
</div>
</div>

<section className="py-32 border-b border-white/5 bg-transparent relative" id="comparison">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<h2 className="text-sm font-mono text-brand mb-5">/// THE COMPARISON</h2>
<h3 className="text-5xl md:text-6xl font-medium tracking-tight uppercase text-white">Built Different.</h3>
</div>
<p className="text-white/60 max-w-md text-lg leading-relaxed text-right md:text-left">
                    See how TEXITcoin leverages infrastructure and transparency to outperform legacy models.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 perspective-container">

<div className="rotate-card group relative bg-black/40 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden h-[550px]">

<div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="p-10 h-full flex flex-col relative z-20">
<div className="flex justify-between items-start mb-10">
<div className="px-4 py-1.5 bg-brand/5 rounded border border-brand/20 text-xs font-mono text-brand uppercase">Real-Time Data</div>
<i className="text-brand/40 w-6 h-6" data-lucide="activity"></i>
</div>

<div className="flex-1 w-full bg-black/50 rounded border border-white/5 relative overflow-hidden mb-10">

<div className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-between px-6 gap-2 opacity-90">
<div className="w-full bg-copper/30 h-[30%] rounded-t-sm animate-pulse" style={{animationDelay: '0s'}}></div>
<div className="w-full bg-copper/50 h-[50%] rounded-t-sm animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-full bg-brand/50 h-[40%] rounded-t-sm animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-full bg-brand/70 h-[80%] rounded-t-sm animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="w-full bg-gradient-to-t from-copper to-brand h-[65%] rounded-t-sm animate-pulse" style={{animationDelay: '0.4s'}}></div>
</div>
<div className="absolute top-0 w-full h-full bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
</div>
<div>
<h4 className="text-3xl font-medium text-white mb-3">Mining Transparency</h4>
<p className="text-lg text-white/50">Unlike Bitcoin's anonymous pools, TEXITcoin offers fully auditable operations based in Texas.</p>
</div>
</div>
</div>

<div className="flex flex-col gap-10">

<div className="rotate-card group relative bg-black/40 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden h-auto p-10 flex flex-col justify-center">
<div className="absolute top-0 right-0 p-8 opacity-10">
<i className="w-24 h-24 text-copper" data-lucide="server"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mb-6 border border-copper/20">
<i className="w-6 h-6 text-copper" data-lucide="cpu"></i>
</div>
<h4 className="text-2xl font-medium text-white mb-3">Privately Owned Infrastructure</h4>
<p className="text-lg text-white/50 max-w-sm">One of the world's largest privately owned facilities, eliminating third-party hosting risks.</p>
</div>
</div>

<div className="rotate-card group relative bg-black/40 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden h-auto p-10 flex flex-col justify-center">
<div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-6 border border-brand/20">
<i className="w-6 h-6 text-brand" data-lucide="globe"></i>
</div>
<h4 className="text-2xl font-medium text-white mb-3">Decentralized Platform</h4>
<p className="text-lg text-white/50 max-w-sm">Powered by a global community through crowdfunding, democratizing access to mining rewards.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-white/5 bg-transparent" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<h2 className="text-sm font-mono text-copper mb-5">/// WHY TEXITCOIN?</h2>
<h3 className="text-5xl md:text-6xl font-medium tracking-tight uppercase text-white">Scale &amp; Security.<br/>Without Compromise.</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(320px,auto)]">

<div className="md:col-span-2 bg-black/40 backdrop-blur-sm border border-white/10 p-12 relative overflow-hidden group hover:border-brand/40 transition-colors duration-500 rounded-lg">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<i className="w-40 h-40 text-brand" data-lucide="shield-check"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-brand/10 w-14 h-14 flex items-center justify-center border border-brand/20 mb-8 rounded">
<span className="font-mono text-lg text-brand">01</span>
</div>
<div>
<h4 className="text-3xl font-medium tracking-tight mb-4 text-white">Texas-Based Compliance</h4>
<p className="text-white/60 text-lg max-w-lg">Operating in a jurisdiction known for energy stability and regulatory clarity. We bring physical accountability to digital assets.</p>
</div>
</div>
</div>

<div className="bg-black/40 backdrop-blur-sm border border-white/10 p-12 relative overflow-hidden group hover:border-copper/40 transition-colors duration-500 rounded-lg">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-copper/10 w-14 h-14 flex items-center justify-center border border-copper/20 mb-8 rounded">
<span className="font-mono text-lg text-copper">02</span>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-3 text-white">Crowdfunded Power</h4>
<p className="text-white/60 text-lg">Community-driven growth model ensuring equitable distribution.</p>
</div>
</div>
</div>

<div className="bg-black/40 backdrop-blur-sm border border-white/10 p-12 relative overflow-hidden group hover:border-brand/40 transition-colors duration-500 rounded-lg">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-brand/10 w-14 h-14 flex items-center justify-center border border-brand/20 mb-8 rounded">
<span className="font-mono text-lg text-brand">03</span>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-3 text-white">Industrial Scale</h4>
<p className="text-white/60 text-lg">Massive hashing power deployed in state-of-the-art facilities.</p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-brand to-copper text-black p-12 relative overflow-hidden group rounded-lg">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-14 h-14 flex items-center justify-center border border-black/10 mb-8 bg-black text-brand rounded">
<span className="font-mono text-lg">04</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-xl">
<h4 className="text-3xl font-medium tracking-tight mb-3">Sustainable Energy Mix</h4>
<p className="text-black/80 font-medium text-xl">Leveraging Texas's renewable energy grid to minimize environmental impact while maximizing mining efficiency.</p>
</div>
<i className="w-16 h-16 opacity-80 text-black" data-lucide="zap"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-white/5 bg-transparent relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-sm font-mono text-brand mb-5">/// PARTICIPATION</h2>
<h3 className="text-5xl md:text-6xl font-medium tracking-tight uppercase mb-6 text-white">Join the Revolution.</h3>
<p className="text-white/60 text-xl">Choose your entry level into the mining ecosystem.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

<div className="bg-black/60 backdrop-blur-md border border-white/10 p-10 flex flex-col relative group hover:border-brand/30 transition-colors rounded-lg">
<div className="mb-8">
<h4 className="text-xl font-medium uppercase text-white">Miner Node</h4>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-mono text-brand">Entry</span>
</div>
</div>
<ul className="space-y-5 mb-10 text-lg text-white/60 font-mono">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand" data-lucide="check"></i> Access to Dashboard
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand" data-lucide="check"></i> Basic Voting Rights
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand" data-lucide="check"></i> Community Support
                        </li>
</ul>
<a className="mt-auto w-full border border-white/20 py-4 text-center text-base font-medium uppercase tracking-wide text-white hover:bg-white hover:text-black transition-colors rounded-sm" href="#">
                        Learn More
                    </a>
</div>

<div className="bg-black/80 backdrop-blur-xl border border-brand p-10 flex flex-col relative transform md:-translate-y-6 shadow-[0_0_40px_rgba(212,175,55,0.1)] rounded-lg">
<div className="absolute top-0 right-0 bg-brand text-black text-xs font-semibold uppercase px-4 py-1.5 rounded-bl">Popular</div>
<div className="mb-8">
<h4 className="text-xl font-medium uppercase text-brand">Validator</h4>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-mono text-white">Advanced</span>
</div>
</div>
<ul className="space-y-5 mb-10 text-lg text-white/80 font-mono">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand" data-lucide="check"></i> Enhanced Hashrate Share
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand" data-lucide="check"></i> Priority Payouts
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand" data-lucide="check"></i> Full Governance Rights
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand" data-lucide="check"></i> 24/7 Analytics
                        </li>
</ul>
<a className="mt-auto w-full bg-gradient-to-r from-copper to-brand text-black py-4 text-center text-base font-medium uppercase tracking-wide hover:brightness-110 transition-colors rounded-sm" href="#">
                        Get Started
                    </a>
</div>

<div className="bg-black/60 backdrop-blur-md border border-white/10 p-10 flex flex-col relative group hover:border-copper/30 transition-colors rounded-lg">
<div className="mb-8">
<h4 className="text-xl font-medium uppercase text-white">Partner</h4>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-mono text-copper">Institutional</span>
</div>
</div>
<ul className="space-y-5 mb-10 text-lg text-white/60 font-mono">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-copper" data-lucide="check"></i> Dedicated Facility Racks
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-copper" data-lucide="check"></i> Custom API Access
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-copper" data-lucide="check"></i> Direct Energy Contracts
                        </li>
</ul>
<a className="mt-auto w-full border border-white/20 py-4 text-center text-base font-medium uppercase tracking-wide text-white hover:bg-white hover:text-black transition-colors rounded-sm" href="#">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-white/5 bg-transparent">
<div className="max-w-4xl mx-auto px-6">
<div className="mb-14 text-center">
<h2 className="text-4xl font-medium tracking-tight uppercase text-white">Common Questions</h2>
</div>
<div className="space-y-5">
<details className="group bg-black/40 backdrop-blur-sm border border-white/10 open:border-brand/30 transition-colors rounded-lg overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-8 font-medium text-white hover:text-brand transition-colors">
<span className="uppercase tracking-wide text-lg">How is this different from Bitcoin mining?</span>
<span className="transition group-open:rotate-180">
<i className="w-6 h-6 text-brand" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-8 pb-8 text-white/50 text-lg leading-relaxed">
                        Bitcoin mining is often dominated by opaque, overseas pools. TEXITcoin brings operations to Texas, USA, offering transparency, regulatory compliance, and a community-funded model where you can see exactly where the hashrate comes from.
                    </div>
</details>
<details className="group bg-black/40 backdrop-blur-sm border border-white/10 open:border-brand/30 transition-colors rounded-lg overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-8 font-medium text-white hover:text-brand transition-colors">
<span className="uppercase tracking-wide text-lg">Is the hardware actually in Texas?</span>
<span className="transition group-open:rotate-180">
<i className="w-6 h-6 text-brand" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-8 pb-8 text-white/50 text-lg leading-relaxed">
                        Yes. We believe in physical verification. Our facilities are located in Texas, taking advantage of the state's robust energy infrastructure and business-friendly environment.
                    </div>
</details>
<details className="group bg-black/40 backdrop-blur-sm border border-white/10 open:border-brand/30 transition-colors rounded-lg overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-8 font-medium text-white hover:text-brand transition-colors">
<span className="uppercase tracking-wide text-lg">How does crowdfunding work?</span>
<span className="transition group-open:rotate-180">
<i className="w-6 h-6 text-brand" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-8 pb-8 text-white/50 text-lg leading-relaxed">
                        By pooling resources from a global community, we can purchase industrial-grade mining hardware at scale, reducing costs and increasing efficiency for all participants compared to solo mining.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-transparent pt-32 pb-16 relative border-t border-white/5" id="contact">

<div className="absolute inset-0 bg-black/80 -z-10 backdrop-blur-md"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-28">
<div className="max-w-2xl">
<h2 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mb-8 leading-[0.8] text-white">
                        Start<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-copper">Mining.</span>
</h2>
<p className="text-white/50 mb-10 text-xl">Ready to join the future of decentralized infrastructure? Get in touch today.</p>
<a className="inline-flex items-center gap-3 border-b-2 border-brand text-2xl text-white hover:text-brand transition-colors pb-1" href="mailto:hello@texitcoin.io">
                        hello@texitcoin.io
                        <i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-2 gap-16 text-lg text-white/50">
<div className="flex flex-col gap-5">
<span className="text-white font-medium uppercase tracking-wide text-xl">Platform</span>
<a className="hover:text-brand transition-colors" href="#">Crowdfunding</a>
<a className="hover:text-brand transition-colors" href="#">Technology</a>
<a className="hover:text-brand transition-colors" href="#">Roadmap</a>
</div>
<div className="flex flex-col gap-5">
<span className="text-white font-medium uppercase tracking-wide text-xl">Legal</span>
<a className="hover:text-brand transition-colors" href="#">Whitepaper</a>
<a className="hover:text-brand transition-colors" href="#">Privacy</a>
<a className="hover:text-brand transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40 font-mono uppercase">
<div>© 2024 Aura Flow / TEXITcoin. All rights reserved.</div>
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 bg-brand rounded-full animate-pulse"></div>
                    Systems Operational
                </div>
</div>

<div className="mt-16 select-none pointer-events-none">
<h1 className="text-[14vw] leading-none font-semibold text-white/5 text-center tracking-tighter">AURA FLOW</h1>
</div>
</div>
</footer>



    </>
  );
}
