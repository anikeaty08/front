import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#000000',
surface: '#050505',
panel: '#0A0A0A',
border: '#1A1A1A',
primary: '#FFFFFF',
secondary: '#737373',
muted: '#404040',
accent: '#E5FF00', // Volt
danger: '#FF3333',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.2em',
micro: '0.3em'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Scroll Reveal
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        // 2. Clock Update
        function updateTime() {
            const now = new Date();
            const timeString = now.toISOString().split('T')[1].split('.')[0] + ':' + Math.floor(now.getMilliseconds()/10).toString().padStart(2, '0');
            document.getElementById('sys-time').innerText = timeString;
            requestAnimationFrame(updateTime);
        }
        updateTime();

        // 3. WebGL/Canvas: Flickering Grid & Data Beams
        const canvas = document.getElementById('data-grid-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        const gridSize = 40;
        let beams = [];

        function initCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            beams = [];
            // Create initial beams
            for(let i=0; i<15; i++) createBeam();
        }

        function createBeam() {
            const isHorizontal = Math.random() > 0.5;
            beams.push({
                x: isHorizontal ? -100 : Math.floor(Math.random() * (width / gridSize)) * gridSize,
                y: isHorizontal ? Math.floor(Math.random() * (height / gridSize)) * gridSize : -100,
                length: Math.random() * 200 + 100,
                speed: Math.random() * 4 + 2,
                isHorizontal: isHorizontal,
                color: Math.random() > 0.8 ? 'rgba(229, 255, 0, 0.5)' : 'rgba(255, 255, 255, 0.1)'
            });
        }

        window.addEventListener('resize', initCanvas);

        function draw() {
            // Dark trail effect instead of clearRect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            // Draw faint grid dots
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            for(let x = 0; x < width; x += gridSize) {
                for(let y = 0; y < height; y += gridSize) {
                    ctx.fillRect(x, y, 1, 1);
                    // Random flicker nodes
                    if(Math.random() < 0.0005) {
                        ctx.fillStyle = 'rgba(229, 255, 0, 0.8)';
                        ctx.fillRect(x-1, y-1, 3, 3);
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)'; // reset
                    }
                }
            }

            // Update and draw beams
            for(let i = beams.length - 1; i >= 0; i--) {
                let b = beams[i];
                
                ctx.beginPath();
                ctx.strokeStyle = b.color;
                ctx.lineWidth = 1;

                if(b.isHorizontal) {
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x - b.length, b.y);
                    b.x += b.speed;
                    if(b.x - b.length > width) beams.splice(i, 1);
                } else {
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x, b.y - b.length);
                    b.y += b.speed;
                    if(b.y - b.length > height) beams.splice(i, 1);
                }
                ctx.stroke();
            }

            // Replenish beams
            if(beams.length < 15 && Math.random() < 0.05) createBeam();

            requestAnimationFrame(draw);
        }

        initCanvas();
        draw();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="data-grid-canvas"></canvas>

<div className="fixed top-0 w-full h-8 bg-black border-b border-border z-[60] flex items-center justify-between px-6 font-mono text-[0.55rem] uppercase tracking-micro text-secondary">
<div className="flex items-center gap-4">
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span> SYS.ONLINE</span>
<span className="hidden md:inline">LATENCY: 12ms</span>
<span className="hidden md:inline">NODE: VLT-09</span>
</div>
<div className="flex items-center gap-4">
<span id="sys-time">00:00:00:00</span>
<span className="text-primary data-bracket">AUTH</span>
</div>
</div>

<nav className="fixed top-8 w-full z-50 bg-black/80 backdrop-blur-md border-b border-border transition-all duration-300">
<div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">

<a className="group flex items-center gap-3" href="#">
<span className="font-sans font-medium text-lg tracking-tighter text-primary">VAULTA</span>
<span className="font-mono text-[0.55rem] tracking-micro text-muted border border-border px-1">T-OS</span>
</a>

<div className="hidden md:flex items-center space-x-12">
<a className="group flex flex-col" href="#architecture">
<span className="font-mono text-[0.5rem] text-muted tracking-micro mb-0.5 group-hover:text-accent transition-colors">01</span>
<span className="font-mono text-xs uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Architecture</span>
</a>
<a className="group flex flex-col" href="#terminal">
<span className="font-mono text-[0.5rem] text-muted tracking-micro mb-0.5 group-hover:text-accent transition-colors">02</span>
<span className="font-mono text-xs uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Terminal</span>
</a>
<a className="group flex flex-col" href="#data-hub">
<span className="font-mono text-[0.5rem] text-muted tracking-micro mb-0.5 group-hover:text-accent transition-colors">03</span>
<span className="font-mono text-xs uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Data Hub</span>
</a>
</div>

<button className="btn-swiss">
                Connect Node
            </button>
</div>
</nav>
<main className="pt-24 md:pt-32 overflow-hidden relative z-10">

<section className="max-w-[1800px] mx-auto px-6 min-h-[85vh] flex items-center relative">

<div className="absolute inset-0 border-layout-x opacity-30 pointer-events-none hidden md:block" style={{left: '1.5rem', right: '1.5rem'}}></div>
<div className="absolute inset-y-0 left-1/2 w-[1px] bg-border opacity-30 pointer-events-none hidden lg:block"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 w-full relative z-10">

<div className="lg:col-span-6 flex flex-col items-start justify-center pr-0 lg:pr-12 pb-16 lg:pb-0 reveal">
<div className="mb-8 border border-border bg-surface px-3 py-1 font-mono text-[0.6rem] text-accent tracking-widest uppercase flex items-center gap-3">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                        Protocol V3 Executing
                    </div>
<h1 className="font-sans text-[5rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.85] tracking-tighter text-primary font-medium mb-8 uppercase">
                        Liquidity<br/>
<span className="text-secondary font-serif italic font-light tracking-tight lowercase ml-2 md:ml-4 text-[4rem] md:text-[6rem] lg:text-[7.5rem]">engineered.</span>
</h1>
<div className="flex gap-4 items-stretch border-l-2 border-accent pl-6 mb-12">
<p className="font-mono text-xs md:text-sm text-secondary max-w-md leading-relaxed">
                            Bypass fragmented wrappers. Synthesize offline assets into programmable primitives. Settle with T+0 precision on sovereign, institution-grade infrastructure.
                        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto btn-swiss group">
<span className="relative z-10 flex items-center gap-2">Deploy Capital <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon></span>
</button>
<button className="w-full sm:w-auto btn-swiss-alt">
                            View Tech Specs
                        </button>
</div>
</div>

<div className="lg:col-span-6 relative h-[600px] flex items-center justify-center reveal delay-200">

<div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-border opacity-50"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-border opacity-50"></div>

<div className="w-full h-full bg-[#030303] border border-border flex flex-col relative overflow-hidden group shadow-2xl">

<div className="h-8 border-b border-border bg-black flex items-center justify-between px-3 shrink-0">
<div className="flex items-center gap-4 font-mono text-[0.55rem] text-muted tracking-widest uppercase">
<span className="text-primary">Terminal_OS_v3.1</span>
<span>PID: 88492</span>
</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 border border-border"></div>
<div className="w-2 h-2 border border-border"></div>
<div className="w-2 h-2 bg-accent border border-accent"></div>
</div>
</div>

<div className="flex-1 grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-[1px] bg-border p-[1px]">

<div className="bg-[#030303] row-span-2 col-span-2 p-4 flex flex-col relative overflow-hidden">
<div className="reg-mark reg-mark-tr"></div>
<div className="flex justify-between items-start mb-6">
<div className="font-mono text-[0.6rem] text-secondary tracking-widest uppercase">Network Throughput</div>
<div className="font-mono text-xs text-accent">74,291 TPS</div>
</div>

<div className="flex-1 w-full relative">

<div className="absolute inset-0 border-layout-y opacity-10 flex flex-col justify-between">
<div className="border-b border-border/30 w-full h-1/3"></div>
<div className="border-b border-border/30 w-full h-1/3"></div>
</div>
<svg className="w-full h-full absolute inset-0 preserve-aspect-ratio=" none"="" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 L10,60 L20,70 L30,40 L40,50 L50,20 L60,30 L70,10 L80,40 L90,20 L100,5" fill="none" stroke="rgba(229, 255, 0, 0.2)" strokeWidth="1"></path>
<path className="sparkline" d="M0,80 L10,60 L20,70 L30,40 L40,50 L50,20 L60,30 L70,10 L80,40 L90,20 L100,5" fill="none" stroke="#E5FF00" strokeWidth="2"></path>
</svg>
</div>
<div className="mt-4 flex justify-between font-mono text-[0.5rem] text-muted border-t border-border pt-2">
<span>T-00:15</span><span>T-00:10</span><span>T-00:05</span><span>NOW</span>
</div>
</div>

<div className="bg-[#030303] p-4 flex flex-col justify-between">
<div className="font-mono text-[0.6rem] text-secondary tracking-widest uppercase">Global TVL</div>
<div>
<div className="font-sans text-2xl font-medium tracking-tighter text-primary group-hover:text-accent transition-colors">$8.42B</div>
<div className="font-mono text-[0.55rem] text-secondary mt-1">Δ +142M (24H)</div>
</div>
</div>

<div className="bg-[#030303] p-4 flex flex-col justify-between">
<div className="font-mono text-[0.6rem] text-secondary tracking-widest uppercase">Primary Asset</div>
<div>
<div className="font-sans text-sm font-medium text-primary uppercase">CRE_NY_88</div>
<div className="w-full h-1 bg-surface mt-2 border border-border"><div className="h-full bg-accent w-[68%]"></div></div>
</div>
</div>

<div className="bg-[#030303] col-span-3 p-4 flex flex-col font-mono text-[0.6rem]">
<div className="text-secondary tracking-widest uppercase mb-3 border-b border-border pb-2 flex justify-between">
<span>Execution Log</span>
<span className="text-accent animate-pulse">REC...</span>
</div>
<div className="space-y-2 overflow-hidden flex-1 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303] z-10"></div>
<div className="flex justify-between text-secondary hover:text-primary transition-colors cursor-crosshair">
<span>[0x8f...4a] SYNTH_MINT</span>
<span>$450,000.00</span>
<span className="text-accent">CONFIRMED</span>
</div>
<div className="flex justify-between text-secondary hover:text-primary transition-colors cursor-crosshair">
<span>[0x11...9c] YIELD_DIST</span>
<span>$12,400.00</span>
<span className="text-accent">CONFIRMED</span>
</div>
<div className="flex justify-between text-secondary hover:text-primary transition-colors cursor-crosshair">
<span>[0x3b...2f] ATOMIC_SWAP</span>
<span>$1.2M</span>
<span className="text-primary">PENDING</span>
</div>
<div className="flex justify-between text-secondary">
<span>[0x7a...11] KYC_VERIFY</span>
<span>-</span>
<span className="text-accent">OK</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-border bg-black py-2 relative z-10 flex overflow-hidden">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex items-center bg-accent text-black font-mono text-[0.6rem] uppercase tracking-widest px-4 font-bold shrink-0 z-20">
                AUDIT LOG
            </div>
<div className="animate-marquee flex items-center font-mono text-xs uppercase tracking-widest text-secondary whitespace-nowrap min-w-full gap-8 pl-8">
<span>[SYS_CHK] J.P. MORGAN ONYX: <span className="text-primary">VERIFIED</span></span>
<span className="w-1 h-1 bg-border rounded-full"></span>
<span>[SYS_CHK] STATE STREET: <span className="text-primary">VERIFIED</span></span>
<span className="w-1 h-1 bg-border rounded-full"></span>
<span>[SYS_CHK] KPMG DIGITAL: <span className="text-primary">VERIFIED</span></span>
<span className="w-1 h-1 bg-border rounded-full"></span>
<span>[SYS_CHK] BNY MELLON: <span className="text-primary">VERIFIED</span></span>
<span className="w-1 h-1 bg-border rounded-full"></span>
<span>[SYS_CHK] FIREBLOCKS: <span className="text-primary">VERIFIED</span></span>
<span className="w-1 h-1 bg-border rounded-full"></span>

<span>[SYS_CHK] J.P. MORGAN ONYX: <span className="text-primary">VERIFIED</span></span>
<span className="w-1 h-1 bg-border rounded-full"></span>
<span>[SYS_CHK] STATE STREET: <span className="text-primary">VERIFIED</span></span>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-32 relative z-10 reveal border-x border-border">
<div className="flex flex-col items-center text-center">
<div className="border border-border p-2 mb-8 bg-surface inline-flex">
<iconify-icon className="text-2xl text-secondary" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h2 className="font-sans text-3xl md:text-5xl tracking-tighter text-primary font-medium mb-8 leading-[1.1] max-w-3xl">
                    Legacy infrastructure restricts capital velocity. <span className="text-secondary">We engineer absolute liquidity.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border max-w-4xl w-full">
<div className="bg-black p-6 flex flex-col items-center">
<span className="font-mono text-xs text-danger mb-2">ERR_01</span>
<span className="font-mono text-[0.65rem] text-secondary uppercase tracking-widest">Settlement Delays</span>
</div>
<div className="bg-black p-6 flex flex-col items-center">
<span className="font-mono text-xs text-danger mb-2">ERR_02</span>
<span className="font-mono text-[0.65rem] text-secondary uppercase tracking-widest">Opaque Reporting</span>
</div>
<div className="bg-black p-6 flex flex-col items-center">
<span className="font-mono text-xs text-danger mb-2">ERR_03</span>
<span className="font-mono text-[0.65rem] text-secondary uppercase tracking-widest">Fragmented Liquidity</span>
</div>
</div>
</div>
</section>

<section className="max-w-[1800px] mx-auto px-6 py-24 relative z-10" id="architecture">
<div className="flex justify-between items-end border-b border-border pb-4 mb-12 reveal">
<h2 className="font-sans text-3xl tracking-tighter text-primary font-medium uppercase">Core Architecture</h2>
<div className="font-mono text-[0.6rem] text-secondary tracking-widest data-bracket hidden md:block">MODULAR. SOVEREIGN.</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-[1px] bg-border border border-border">

<div className="bg-surface md:col-span-8 p-10 relative group reveal overflow-hidden min-h-[400px]">
<div className="reg-mark reg-mark-tl"></div><div className="reg-mark reg-mark-br"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-accent uppercase tracking-widest bg-black border border-border px-2 py-1">SYS.01</span>
<iconify-icon className="text-2xl text-secondary group-hover:text-primary transition-colors" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="mt-24">
<h3 className="font-sans text-4xl tracking-tighter text-primary font-medium mb-4 uppercase tech-reveal"><span className="invisible group-hover:visible absolute">Asset Synthesis</span>Asset Synthesis</h3>
<p className="font-mono text-xs text-secondary leading-relaxed max-w-lg">
                                Convert physical and traditional financial assets into programmable onchain primitives. Automated lifecycle management from issuance to redemption with embedded legal logic.
                            </p>
</div>
</div>
</div>

<div className="bg-surface md:col-span-4 p-10 relative group reveal delay-100">
<div className="flex flex-col justify-between h-full">
<div className="flex justify-between items-start mb-12">
<span className="font-mono text-xs text-secondary uppercase tracking-widest border border-border px-2 py-1">SYS.02</span>
</div>
<div>
<iconify-icon className="text-2xl text-secondary mb-6 group-hover:text-accent transition-colors" icon="solar:shield-keyhole-linear"></iconify-icon>
<h3 className="font-sans text-2xl tracking-tighter text-primary font-medium mb-3 uppercase">Compliance Oracle</h3>
<p className="font-mono text-[0.65rem] text-secondary leading-relaxed">
                                KYC/AML embedded at contract level. Instant restriction enforcement globally.
                            </p>
</div>
</div>
</div>

<div className="bg-surface md:col-span-4 p-10 relative group reveal">
<div className="flex flex-col justify-between h-full">
<div className="flex justify-between items-start mb-12">
<span className="font-mono text-xs text-secondary uppercase tracking-widest border border-border px-2 py-1">SYS.03</span>
</div>
<div>
<iconify-icon className="text-2xl text-secondary mb-6 group-hover:text-accent transition-colors" icon="solar:bolt-circle-linear"></iconify-icon>
<h3 className="font-sans text-2xl tracking-tighter text-primary font-medium mb-3 uppercase">Atomic Settlement</h3>
<p className="font-mono text-[0.65rem] text-secondary leading-relaxed">
                                T+0 execution across jurisdictions. Eliminate counterparty risk instantly.
                            </p>
</div>
</div>
</div>

<div className="bg-black md:col-span-8 p-10 relative group reveal delay-100 overflow-hidden">

<div className="absolute right-0 top-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 tech-mask">
<img alt="Server Infrastructure" className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2034&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60"></div>
</div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-secondary uppercase tracking-widest border border-border bg-black px-2 py-1">SYS.04</span>
<div className="font-mono text-[0.5rem] text-accent text-right opacity-0 group-hover:opacity-100 transition-opacity">
<div>POST /api/v1/yield</div>
<div>STATUS: 200 OK</div>
</div>
</div>
<div className="mt-24 max-w-md">
<h3 className="font-sans text-4xl tracking-tighter text-primary font-medium mb-4 uppercase">Yield Programming</h3>
<p className="font-mono text-xs text-secondary leading-relaxed mb-6">
                                Direct integration with legacy systems via GraphQL/REST. Automate NAV calculation and direct yield distribution to custodial wallets.
                            </p>
<a className="font-mono text-[0.65rem] text-primary uppercase tracking-widest border-b border-primary hover:text-accent hover:border-accent transition-colors pb-1" href="#">View Documentation</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 overflow-hidden">
<div className="max-w-[1800px] mx-auto px-6">
<div className="flex items-center gap-4 mb-16 reveal">
<div className="h-px bg-border flex-1"></div>
<h2 className="font-mono text-xs tracking-widest text-secondary uppercase data-bracket">Execution Pathway</h2>
<div className="h-px bg-border flex-1"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 group reveal delay-100">

<div className="relative h-[400px] border border-border group/step overflow-hidden bg-surface">
<div className="absolute inset-0 z-0 opacity-10 group-hover/step:opacity-30 transition-opacity duration-500">
<img alt="Real Estate" className="w-full h-full object-cover grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 p-6 flex flex-col h-full">
<div className="font-mono text-4xl text-white/10 font-bold mb-auto tracking-tighter">01</div>
<div className="bg-black/80 backdrop-blur-sm p-4 border border-border transform translate-y-4 group-hover/step:translate-y-0 transition-transform">
<h4 className="font-mono text-xs uppercase text-primary mb-2 tracking-widest">Origination</h4>
<p className="font-sans text-sm font-light text-secondary leading-relaxed">Rigorous due diligence, appraisal, and algorithmic scoring of the physical asset.</p>
</div>
</div>
</div>

<div className="relative h-[400px] border border-border group/step overflow-hidden bg-surface">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="relative z-10 p-6 flex flex-col h-full">
<div className="font-mono text-4xl text-white/10 font-bold mb-auto tracking-tighter">02</div>
<div className="bg-black/80 backdrop-blur-sm p-4 border border-border transform translate-y-4 group-hover/step:translate-y-0 transition-transform">
<h4 className="font-mono text-xs uppercase text-primary mb-2 tracking-widest">Legal Wrapper</h4>
<p className="font-sans text-sm font-light text-secondary leading-relaxed">Establishment of an automated SPV holding the asset securely offline in key jurisdictions.</p>
</div>
</div>
</div>

<div className="relative h-[400px] border border-border group/step overflow-hidden bg-surface">

<div className="absolute inset-0 z-0 opacity-10 flex flex-col justify-around pointer-events-none">
<div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div>
</div>
<div className="relative z-10 p-6 flex flex-col h-full">
<div className="font-mono text-4xl text-white/10 font-bold mb-auto tracking-tighter">03</div>
<div className="bg-black/80 backdrop-blur-sm p-4 border border-border transform translate-y-4 group-hover/step:translate-y-0 transition-transform">
<h4 className="font-mono text-xs uppercase text-primary mb-2 tracking-widest">Token Issuance</h4>
<p className="font-sans text-sm font-light text-secondary leading-relaxed">Minting security tokens representing fractional ownership, embedding compliance logic.</p>
</div>
</div>
</div>

<div className="relative h-[400px] border border-accent/30 bg-accent/5 group/step overflow-hidden shadow-[inset_0_0_50px_rgba(229,255,0,0.05)]">
<div className="relative z-10 p-6 flex flex-col h-full">
<div className="font-mono text-4xl text-accent/30 font-bold mb-auto tracking-tighter">04</div>
<div className="bg-black/90 backdrop-blur-sm p-4 border border-accent transform translate-y-4 group-hover/step:translate-y-0 transition-transform shadow-[0_0_15px_rgba(229,255,0,0.1)]">
<h4 className="font-mono text-xs uppercase text-accent mb-2 tracking-widest flex justify-between items-center">
                                    Settlement <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></span>
</h4>
<p className="font-sans text-sm font-light text-secondary leading-relaxed">Distribution to LPs, enabling secondary market liquidity and automated smart-contract yield.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-border relative z-10 bg-[#020202] reveal" id="data-hub">
<div className="max-w-[1800px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border p-px">
<div className="bg-black p-8 flex flex-col">
<span className="font-mono text-[0.6rem] text-secondary mb-4 uppercase tracking-widest border-b border-border pb-2 inline-block">Volume Processed</span>
<span className="font-mono text-4xl md:text-5xl lg:text-6xl text-primary font-medium tracking-tighter mt-auto">2.4<span className="text-secondary text-2xl">B</span></span>
</div>
<div className="bg-black p-8 flex flex-col">
<span className="font-mono text-[0.6rem] text-secondary mb-4 uppercase tracking-widest border-b border-border pb-2 inline-block">Asset Classes</span>
<span className="font-mono text-4xl md:text-5xl lg:text-6xl text-primary font-medium tracking-tighter mt-auto">18</span>
</div>
<div className="bg-black p-8 flex flex-col">
<span className="font-mono text-[0.6rem] text-secondary mb-4 uppercase tracking-widest border-b border-border pb-2 inline-block">Settlement</span>
<span className="font-mono text-4xl md:text-5xl lg:text-6xl text-primary font-medium tracking-tighter mt-auto">T+0</span>
</div>
<div className="bg-black p-8 flex flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-accent/5"></div>
<span className="font-mono text-[0.6rem] text-accent mb-4 uppercase tracking-widest border-b border-accent/30 pb-2 inline-block relative z-10">Uptime Reliability</span>
<span className="font-mono text-4xl md:text-5xl lg:text-6xl text-accent font-medium tracking-tighter mt-auto relative z-10 drop-shadow-[0_0_8px_rgba(229,255,0,0.5)]">99.9%</span>
</div>
</div>
</div>
</section>

<section className="max-w-[1800px] mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10 border-x border-border">

<div className="relative reveal border border-border bg-surface p-1">
<div className="bg-black p-6 flex flex-col">
<div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
<h4 className="font-mono text-[0.65rem] uppercase text-primary tracking-widest">Live Origination Stream</h4>
<div className="font-mono text-[0.55rem] text-accent flex items-center gap-2">
                            [SYNC_ACTIVE]
                        </div>
</div>

<div className="w-full">
<div className="flex w-full font-mono text-[0.55rem] text-secondary uppercase tracking-widest border-b border-border pb-2 mb-2">
<div className="w-1/2">Asset ID</div>
<div className="w-1/4 text-right">Value</div>
<div className="w-1/4 text-right">Target Yield</div>
</div>
<div className="space-y-1 font-mono text-xs">
<div className="flex w-full py-3 hover:bg-surface transition-colors cursor-crosshair border-b border-border/50">
<div className="w-1/2 flex flex-col">
<span className="text-primary">Project OAK (CRE)</span>
<span className="text-[0.55rem] text-secondary mt-1">LND-UK-0492</span>
</div>
<div className="w-1/4 text-right flex items-center justify-end text-primary">$125.0M</div>
<div className="w-1/4 text-right flex items-center justify-end text-accent">6.8%</div>
</div>
<div className="flex w-full py-3 hover:bg-surface transition-colors cursor-crosshair border-b border-border/50">
<div className="w-1/2 flex flex-col">
<span className="text-primary">FERRUM Fund</span>
<span className="text-[0.55rem] text-secondary mt-1">DEL-US-9912</span>
</div>
<div className="w-1/4 text-right flex items-center justify-end text-primary">$50.0M</div>
<div className="w-1/4 text-right flex items-center justify-end text-accent">11.2%</div>
</div>
<div className="flex w-full py-3 hover:bg-surface transition-colors cursor-crosshair">
<div className="w-1/2 flex flex-col">
<span className="text-primary">Apex Infra II</span>
<span className="text-[0.55rem] text-secondary mt-1">LUX-EU-1102</span>
</div>
<div className="w-1/4 text-right flex items-center justify-end text-primary">$310.5M</div>
<div className="w-1/4 text-right flex items-center justify-end text-accent">8.4%</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-200">
<div className="font-mono text-[0.55rem] text-secondary tracking-widest uppercase mb-6 flex items-center gap-2">
<iconify-icon icon="solar:microphone-2-linear"></iconify-icon> Transmission Intercepted
                </div>
<h3 className="font-sans text-2xl md:text-4xl leading-tight text-primary mb-8 border-l-2 border-accent pl-6 py-2 uppercase tracking-tighter">
                    "Vaulta's compliance engine reduced our fund structuring from months to days. <span className="text-secondary">It's the ultimate terminal for onchain capital.</span>"
                </h3>
<div className="flex flex-col gap-1 pl-6">
<div className="font-mono text-sm text-primary uppercase">Managing Partner</div>
<div className="font-mono text-[0.6rem] text-secondary tracking-widest uppercase data-bracket">Tier-1 Family Office</div>
</div>
</div>
</section>

<section className="border-y border-border bg-black py-24 relative z-10">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex justify-between items-end border-b border-border pb-4 mb-12 reveal">
<h2 className="font-sans text-3xl tracking-tighter text-primary font-medium uppercase">Institutional Access</h2>
<div className="font-mono text-[0.6rem] text-secondary tracking-widest data-bracket hidden md:block">FEE STRUCTURE</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-border">

<div className="p-8 border-b md:border-b-0 md:border-r border-border hover:bg-surface transition-colors flex flex-col reveal delay-100">
<h3 className="font-mono text-[0.65rem] uppercase tracking-widest text-secondary mb-2">Platform</h3>
<div className="font-sans text-2xl text-primary uppercase tracking-tighter mb-6 pb-6 border-b border-border">Basis Points</div>
<ul className="space-y-3 mb-12 flex-grow font-mono text-[0.65rem] text-primary uppercase tracking-wide">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-border"></span> Tokenization Engine</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-border"></span> Basic Compliance</li>
</ul>
<button className="font-mono text-[0.65rem] text-secondary uppercase tracking-widest border border-border py-3 hover:text-primary hover:border-primary transition-colors">Select Tier</button>
</div>

<div className="p-8 border-b md:border-b-0 md:border-r border-border bg-surface relative flex flex-col reveal delay-200 shadow-[inset_0_0_0_1px_#E5FF00]">
<div className="absolute top-0 right-0 bg-accent text-black font-mono text-[0.5rem] px-2 py-1 uppercase tracking-widest">Standard</div>
<h3 className="font-mono text-[0.65rem] uppercase tracking-widest text-accent mb-2">API Integration</h3>
<div className="font-sans text-2xl text-primary uppercase tracking-tighter mb-6 pb-6 border-b border-border">Custom</div>
<ul className="space-y-3 mb-12 flex-grow font-mono text-[0.65rem] text-primary uppercase tracking-wide">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span> Everything in Platform</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span> Direct REST/GraphQL API</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-accent"></span> Custom Smart Contracts</li>
</ul>
<button className="btn-swiss w-full">Contact Sales</button>
</div>

<div className="p-8 flex flex-col hover:bg-surface transition-colors reveal delay-300">
<h3 className="font-mono text-[0.65rem] uppercase tracking-widest text-secondary mb-2">White-Label</h3>
<div className="font-sans text-2xl text-primary uppercase tracking-tighter mb-6 pb-6 border-b border-border">Enterprise</div>
<ul className="space-y-3 mb-12 flex-grow font-mono text-[0.65rem] text-primary uppercase tracking-wide">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-border"></span> Full White-label UI</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-border"></span> On-premise deployment</li>
</ul>
<button className="font-mono text-[0.65rem] text-secondary uppercase tracking-widest border border-border py-3 hover:text-primary hover:border-primary transition-colors">Book Strategy</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black pt-32 pb-8 relative z-10 border-t border-border overflow-hidden">
<div className="max-w-[1800px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">

<div>
<h2 className="font-sans text-3xl md:text-5xl tracking-tighter text-primary font-medium mb-8 uppercase">System Ready.<br/><span className="text-secondary">Initiate Protocol.</span></h2>
<button className="btn-swiss">
                        Deploy Infrastructure <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-2 gap-8 md:justify-items-end text-left md:text-right">
<div>
<h4 className="font-mono text-[0.55rem] text-secondary mb-6 uppercase tracking-widest border-b border-border inline-block pb-1">Architecture</h4>
<ul className="space-y-3 font-mono text-xs uppercase">
<li><a className="text-primary hover:text-accent transition-colors" href="#">Engine V3</a></li>
<li><a className="text-primary hover:text-accent transition-colors" href="#">Compliance</a></li>
<li><a className="text-primary hover:text-accent transition-colors" href="#">Docs API</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[0.55rem] text-secondary mb-6 uppercase tracking-widest border-b border-border inline-block pb-1">Legal</h4>
<ul className="space-y-3 font-mono text-xs uppercase">
<li><a className="text-primary hover:text-accent transition-colors" href="#">Jurisdictions</a></li>
<li><a className="text-primary hover:text-accent transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-primary hover:text-accent transition-colors" href="#">Audit Reports</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-end gap-8">
<div className="flex flex-col gap-2">

<div className="flex h-6 items-end gap-[2px] opacity-50 grayscale mix-blend-screen">
<div className="w-1 h-full bg-primary"></div><div className="w-0.5 h-full bg-primary"></div><div className="w-2 h-full bg-primary"></div><div className="w-0.5 h-full bg-primary"></div><div className="w-1 h-full bg-primary"></div><div className="w-1 h-5 bg-primary"></div><div className="w-3 h-full bg-primary"></div><div className="w-0.5 h-full bg-primary"></div><div className="w-1 h-full bg-primary"></div><div className="w-2 h-4 bg-primary"></div><div className="w-1 h-full bg-primary"></div><div className="w-0.5 h-full bg-primary"></div>
</div>
<div className="font-mono text-[0.5rem] text-secondary tracking-widest uppercase">ID: VLT-SYS-2024</div>
</div>
<h1 className="font-sans text-[4rem] md:text-[8rem] leading-[0.7] tracking-tighter text-primary font-medium uppercase m-0">
                    Vaulta
                </h1>
</div>
</div>
</footer>



    </>
  );
}
