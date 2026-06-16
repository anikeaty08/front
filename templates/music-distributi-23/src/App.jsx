import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const canvas = document.getElementById('hero-canvas');
            const ctx = canvas.getContext('2d');
            
            let width, height;
            let dots = [];
            const spacing = 40; // Space between dots
            const baseRadius = 1;
            const maxRadius = 3;
            const mouseRadius = 250;
            
            let mouse = {
                x: -1000,
                y: -1000
            };

            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                initDots();
            }

            function initDots() {
                dots = [];
                const cols = Math.floor(width / spacing) + 1;
                const rows = Math.floor(height / spacing) + 1;
                
                const offsetX = (width - (cols * spacing)) / 2;
                const offsetY = (height - (rows * spacing)) / 2;

                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        dots.push({
                            x: offsetX + i * spacing,
                            y: offsetY + j * spacing,
                            baseX: offsetX + i * spacing,
                            baseY: offsetY + j * spacing,
                            phase: Math.random() * Math.PI * 2
                        });
                    }
                }
            }

            function draw() {
                ctx.clearRect(0, 0, width, height);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'; // Base dot color

                const time = Date.now() * 0.001;

                dots.forEach(dot => {
                    // Calculate distance to mouse
                    const dx = mouse.x - dot.x;
                    const dy = mouse.y - dot.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    let radius = baseRadius;
                    let opacity = 0.15;

                    // Ripple effect based on time
                    const ripple = Math.sin(dot.x * 0.01 + time) * Math.cos(dot.y * 0.01 + time);
                    dot.y = dot.baseY + ripple * 2;
                    dot.x = dot.baseX + ripple * 2;

                    // Interaction with mouse
                    if (dist < mouseRadius) {
                        const intensity = 1 - (dist / mouseRadius);
                        radius = baseRadius + (maxRadius - baseRadius) * intensity;
                        opacity = 0.15 + (0.85 * intensity);
                        
                        // Push away slightly
                        const angle = Math.atan2(dy, dx);
                        const pushDist = intensity * 10;
                        dot.x -= Math.cos(angle) * pushDist * 0.1;
                        dot.y -= Math.sin(angle) * pushDist * 0.1;
                    } else {
                        // Return to base position
                        dot.x += (dot.baseX - dot.x) * 0.1;
                        dot.y += (dot.baseY - dot.y) * 0.1;
                    }

                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.fill();
                });

                requestAnimationFrame(draw);
            }

            window.addEventListener('resize', resize);
            window.addEventListener('mousemove', (e) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            });
            window.addEventListener('mouseout', () => {
                mouse.x = -1000;
                mouse.y = -1000;
            });

            // Init
            resize();
            draw();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-60" id="hero-canvas"></canvas>

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 border-l-0 border-r-0">
<div className="max-w-[clamp(65rem,95vw,90rem)] mx-auto px-[clamp(1rem,4vw,2rem)] h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="square" strokeWidth="2.5" viewbox="0 0 24 24" width="24">
<path d="M2 12h4l3-8 5 16 3-8h5"></path>
</svg>
<span className="text-lg font-semibold tracking-tighter uppercase">PULSE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-[#888888]">
<a className="hover:text-white transition-colors" href="#dashboard">Platform</a>
<a className="hover:text-white transition-colors" href="#network">Network</a>
<a className="hover:text-white transition-colors" href="#roster">Results</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="btn-tech bg-white text-black font-semibold text-xs px-6 py-2.5 flex items-center gap-2 group z-10" href="#onboard">
                INITIATE
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
</div>
</nav>
<main className="relative z-10 flex flex-col pt-16">

<section className="min-h-[90vh] flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
<div className="max-w-[clamp(65rem,95vw,90rem)] mx-auto px-[clamp(1rem,4vw,2rem)] w-full py-20">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-8 btn-tech">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Infrastructure Online
                </div>
<h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] font-semibold tracking-tighter w-full max-w-5xl text-white mb-8">
                    Monetize Every <br/>
<span className="text-neutral-500">Frequency.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 font-normal leading-relaxed max-w-xl mb-12">
                    Zero-fluff distribution engineered for aggressive growth. We bypass traditional bottlenecks to put your masters on 150+ DSPs in under 24 hours. Keep 100% of your rights. Scale relentlessly.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="btn-tech bg-white text-black font-semibold text-sm px-8 py-4 flex items-center justify-center gap-3 group w-full sm:w-auto text-center uppercase tracking-tight" href="#onboard">
                        Deploy Catalog
                        <iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:upload-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="btn-tech btn-tech-outline border border-white/20 text-white font-medium text-sm px-8 py-4 flex items-center justify-center gap-3 group w-full sm:w-auto text-center uppercase tracking-tight" href="#dashboard">
                        View Analytics Engine
                        <iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="absolute right-[clamp(1rem,4vw,2rem)] bottom-12 hidden lg:flex flex-col items-end gap-2 font-mono text-[10px] text-neutral-500 text-right">
<div className="flex items-center gap-4 border-b border-white/10 pb-2">
<span>LATENCY</span>
<span className="text-white">12ms</span>
</div>
<div className="flex items-center gap-4 border-b border-white/10 pb-2">
<span>INGESTION RATE</span>
<span className="text-white">99.98%</span>
</div>
<div className="flex items-center gap-4">
<span>ENCRYPTION</span>
<span className="text-white">AES-256</span>
</div>
</div>
</div>
</section>

<section className="border-b border-white/10 bg-[#0A0A0A] overflow-hidden py-4 flex items-center relative z-20">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
<div className="marquee-track flex gap-16 font-mono text-sm tracking-widest text-neutral-600 uppercase items-center opacity-70">

<div className="flex items-center gap-16">
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Spotify Certified</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Apple Music API</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Beatport Exclusive</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Tidal Masters</span>
<span className="text-white font-semibold">OVER $42.5M ROYALTIES PAID</span>
</div>

<div className="flex items-center gap-16">
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Spotify Certified</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Apple Music API</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Beatport Exclusive</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Tidal Masters</span>
<span className="text-white font-semibold">OVER $42.5M ROYALTIES PAID</span>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] border-b border-white/10 relative z-20" id="dashboard">
<div className="max-w-[clamp(65rem,95vw,90rem)] mx-auto px-[clamp(1rem,4vw,2rem)]">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tighter uppercase leading-none mb-6">Total Data Supremacy.</h2>
<p className="text-sm text-neutral-400">Stop guessing. We provide sub-second latency reporting across all major DSPs. Track geographic anomalies, playlist velocity, and royalty accrual in real-time.</p>
</div>

<div className="w-full bg-[#050505] border border-white/10 p-2 md:p-6 relative shadow-[0_0_50px_rgba(255,255,255,0.03)] rounded-sm group">

<div className="corner-bracket tl"></div>
<div className="corner-bracket tr"></div>
<div className="corner-bracket bl"></div>
<div className="corner-bracket br"></div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/5 pb-4 gap-4">
<div>
<div className="text-[10px] font-mono text-neutral-500 mb-1">AGGREGATED REVENUE (30D)</div>
<div className="text-3xl font-semibold tracking-tight tabular-nums">$124,592.80 <span className="text-xs text-[#00FF5F] font-mono ml-2">+14.2% ↑</span></div>
</div>
<div className="flex gap-2 font-mono text-xs">
<button className="px-3 py-1 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors">7D</button>
<button className="px-3 py-1 bg-white text-black font-semibold">30D</button>
<button className="px-3 py-1 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors">YTD</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 border border-white/5 bg-[#0A0A0A] p-6 relative h-64 flex flex-col justify-end">
<div className="absolute top-4 left-4 text-[10px] font-mono text-neutral-500">STREAMING VELOCITY</div>

<div className="flex items-end justify-between h-32 gap-1 md:gap-2 mt-auto w-full border-b border-white/10 relative z-10">

<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[20%] bar-chart-fill" style={{animationDelay: '0.1s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[35%] bar-chart-fill" style={{animationDelay: '0.15s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[25%] bar-chart-fill" style={{animationDelay: '0.2s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[50%] bar-chart-fill" style={{animationDelay: '0.25s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[45%] bar-chart-fill" style={{animationDelay: '0.3s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[70%] bar-chart-fill" style={{animationDelay: '0.35s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[60%] bar-chart-fill" style={{animationDelay: '0.4s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[85%] bar-chart-fill" style={{animationDelay: '0.45s'}}></div>
<div className="w-full bg-white/20 hover:bg-white/50 transition-colors rounded-t-sm h-[100%] bar-chart-fill" style={{animationDelay: '0.5s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[65%] bar-chart-fill" style={{animationDelay: '0.55s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[40%] bar-chart-fill" style={{animationDelay: '0.6s'}}></div>
<div className="w-full bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[55%] bar-chart-fill" style={{animationDelay: '0.65s'}}></div>
</div>

<div className="flex justify-between w-full mt-2 text-[8px] font-mono text-neutral-600">
<span>01.10</span>
<span>15.10</span>
<span>30.10</span>
</div>
</div>

<div className="border border-white/5 bg-[#0A0A0A] p-0 flex flex-col">
<div className="p-4 border-b border-white/5 text-[10px] font-mono text-neutral-500">TOP SOURCES</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-center p-4 border-b border-white/5 data-row cursor-pointer hover:bg-white/5">
<span className="text-xs font-medium data-highlight flex items-center gap-2"><iconify-icon icon="solar:music-note-linear"></iconify-icon> Spotify Algorithmic</span>
<span className="text-xs tabular-nums text-neutral-400">45.2%</span>
</div>
<div className="flex justify-between items-center p-4 border-b border-white/5 data-row cursor-pointer hover:bg-white/5">
<span className="text-xs font-medium data-highlight flex items-center gap-2"><iconify-icon icon="solar:headphones-linear"></iconify-icon> Apple Music Editorial</span>
<span className="text-xs tabular-nums text-neutral-400">28.7%</span>
</div>
<div className="flex justify-between items-center p-4 border-b border-white/5 data-row cursor-pointer hover:bg-white/5">
<span className="text-xs font-medium data-highlight flex items-center gap-2"><iconify-icon icon="solar:record-circle-linear"></iconify-icon> Beatport Top 100</span>
<span className="text-xs tabular-nums text-neutral-400">14.1%</span>
</div>
<div className="flex justify-between items-center p-4 data-row cursor-pointer hover:bg-white/5 mt-auto">
<span className="text-xs font-medium data-highlight flex items-center gap-2"><iconify-icon icon="solar:globe-linear"></iconify-icon> Direct Discovery</span>
<span className="text-xs tabular-nums text-neutral-400">12.0%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] border-b border-white/10 bg-[#020202] z-20" id="network">
<div className="max-w-[clamp(65rem,95vw,90rem)] mx-auto px-[clamp(1rem,4vw,2rem)]">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div>
<div className="text-[10px] font-mono text-neutral-500 mb-4 border border-white/10 inline-block px-2 py-1">04 // INFRASTRUCTURE</div>
<h2 className="text-[clamp(2rem,3vw,3rem)] font-semibold tracking-tighter uppercase leading-none">Global Pipeline.</h2>
</div>
<p className="text-sm text-neutral-400 max-w-sm">From local drive to global availability. We removed the middlemen to ensure maximum royalty retention and speed.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="border border-white/10 p-6 bg-[#0A0A0A] group hover:border-white/30 transition-colors relative overflow-hidden btn-tech-outline">
<iconify-icon className="text-2xl text-white mb-6 group-hover:scale-110 transition-transform" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-sm font-semibold uppercase tracking-tight mb-2">Instant Ingestion</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Drag and drop raw WAVs. Our system automatically processes, tags, and queues for immediate dispatch to DSPs.</p>
</div>

<div className="border border-white/10 p-6 bg-[#0A0A0A] group hover:border-white/30 transition-colors relative overflow-hidden btn-tech-outline">
<iconify-icon className="text-2xl text-white mb-6 group-hover:scale-110 transition-transform" icon="solar:database-linear"></iconify-icon>
<h3 className="text-sm font-semibold uppercase tracking-tight mb-2">Automated Splits</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Configure revenue splits once. Our smart contracts automatically disburse payments to collaborators instantly.</p>
</div>

<div className="border border-white/10 p-6 bg-[#0A0A0A] group hover:border-white/30 transition-colors relative overflow-hidden btn-tech-outline">
<iconify-icon className="text-2xl text-white mb-6 group-hover:scale-110 transition-transform" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-sm font-semibold uppercase tracking-tight mb-2">Rights Protection</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Immutable ISRC generation and YouTube Content ID fingerprinting ensures no unauthorized monetization.</p>
</div>

<div className="border border-white/10 p-6 bg-[#0A0A0A] group hover:border-white/30 transition-colors relative overflow-hidden btn-tech-outline">
<iconify-icon className="text-2xl text-white mb-6 group-hover:scale-110 transition-transform" icon="solar:magnifer-linear"></iconify-icon>
<h3 className="text-sm font-semibold uppercase tracking-tight mb-2">Algorithmic Pitching</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Direct pipeline to curatorial editors. We format your metadata exactly how platform algorithms prefer.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-white/10 z-20">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-[clamp(2rem,6vw,6rem)] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-[#000000]">
<h2 className="text-[clamp(2rem,3vw,3.5rem)] font-semibold tracking-tighter uppercase leading-none mb-6">Engineered for the Algorithm.</h2>
<p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-md">
                        Great audio isn't enough. Our ingestion protocol automatically structures your release metadata to trigger algorithmic playlisting. We analyze BPM, key, and energy dynamics to position your tracks where they will convert highest.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-mono"><iconify-icon className="text-white text-lg" icon="solar:check-read-linear"></iconify-icon> Automated Metadata Optimization</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-mono"><iconify-icon className="text-white text-lg" icon="solar:check-read-linear"></iconify-icon> Editorial Pitch Generation</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-mono"><iconify-icon className="text-white text-lg" icon="solar:check-read-linear"></iconify-icon> Pre-save Campaign Builder</li>
</ul>
<a className="btn-tech text-white border border-white/20 font-semibold text-xs px-6 py-3 w-fit tracking-widest uppercase hover:bg-white hover:text-black" href="#onboard">
                        Analyze Protocol
                    </a>
</div>

<div className="relative min-h-[400px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center p-8">

<div className="absolute inset-0 z-10 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<img alt="Studio Console" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-150 mix-blend-luminosity" src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="relative z-20 glass-panel p-6 border border-white/20 w-full max-w-sm backdrop-blur-md btn-tech-outline">
<div className="text-[10px] font-mono text-neutral-400 mb-4 border-b border-white/10 pb-2">PRE-SAVE METRICS</div>
<div className="flex items-end justify-between mb-4">
<span className="text-4xl font-semibold tracking-tighter tabular-nums">4,892</span>
<span className="text-xs text-[#00FF5F] font-mono mb-1">HIGH PROBABILITY</span>
</div>
<div className="w-full h-1 bg-white/10 mt-2">
<div className="h-full bg-white w-[78%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[2px]"></div>
</div>
</div>
<div className="flex justify-between text-[8px] font-mono text-neutral-500 mt-2">
<span>DAY 01</span>
<span>RELEASE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] border-b border-white/10 bg-[#000000] z-20" id="roster">
<div className="max-w-[clamp(65rem,95vw,90rem)] mx-auto px-[clamp(1rem,4vw,2rem)]">
<div className="mb-12">
<h2 className="text-[clamp(2rem,3vw,3.5rem)] font-semibold tracking-tighter uppercase leading-none mb-4">Verified Growth.</h2>
<p className="text-sm text-neutral-400">Labels operating on Pulse consistently outperform legacy distributors.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-white/10 bg-[#0A0A0A] p-6 group hover:-translate-y-1 transition-transform duration-300">
<div className="text-xs font-mono text-neutral-500 mb-6">LABEL: SYNDICATE AUDIO</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-3xl font-semibold tracking-tighter tabular-nums">+450%</span>
<span className="text-[10px] uppercase text-neutral-400">MoM Streams</span>
</div>
<p className="text-xs text-neutral-500 mb-6 pb-6 border-b border-white/10 line-clamp-3">"Switching to Pulse automated our entire back-office. The split payment engine alone saved us 20 hours a week, and ingestion is instantaneous."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
<div>
<div className="text-xs font-semibold">David R.</div>
<div className="text-[10px] font-mono text-neutral-500">Label Manager</div>
</div>
</div>
</div>

<div className="border border-white/10 bg-[#0A0A0A] p-6 group hover:-translate-y-1 transition-transform duration-300">
<div className="text-xs font-mono text-neutral-500 mb-6">LABEL: NEURAL IMPLANT</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-3xl font-semibold tracking-tighter tabular-nums">1.2M</span>
<span className="text-[10px] uppercase text-neutral-400">First Week Listens</span>
</div>
<p className="text-xs text-neutral-500 mb-6 pb-6 border-b border-white/10 line-clamp-3">"The pre-save tooling and algorithmic metadata formatting landed our debut release on three major editorial playlists."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
<div>
<div className="text-xs font-semibold">Sarah K.</div>
<div className="text-[10px] font-mono text-neutral-500">A&amp;R Director</div>
</div>
</div>
</div>

<div className="border border-white/10 bg-[#0A0A0A] p-6 group hover:-translate-y-1 transition-transform duration-300">
<div className="text-xs font-mono text-neutral-500 mb-6">ARTIST: VØID</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-3xl font-semibold tracking-tighter tabular-nums">100%</span>
<span className="text-[10px] uppercase text-neutral-400">Royalty Retention</span>
</div>
<p className="text-xs text-neutral-500 mb-6 pb-6 border-b border-white/10 line-clamp-3">"Zero hidden fees. Complete transparency. Pulse acts like a utility, not a gatekeeper. I own my masters and see my data instantly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
<div>
<div className="text-xs font-semibold">Marcus T.</div>
<div className="text-[10px] font-mono text-neutral-500">Independent</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] border-b border-white/10 bg-[#050505] z-20" id="pricing">
<div className="max-w-4xl mx-auto px-[clamp(1rem,4vw,2rem)]">
<div className="text-center mb-16">
<h2 className="text-[clamp(2.5rem,4vw,4rem)] font-semibold tracking-tighter uppercase leading-none mb-4">Keep Your Masters.</h2>
<p className="text-sm text-neutral-400">Stop giving away 15% to legacy distributors. One flat fee. Absolute control.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-[#0A0A0A] flex flex-col">
<h3 className="text-sm font-mono text-neutral-400 uppercase mb-4">Independent</h3>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tighter tabular-nums">$19</span>
<span className="text-xs text-neutral-500 uppercase">/ year</span>
</div>
<ul className="flex flex-col gap-4 text-sm text-neutral-300 mb-12 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited Releases</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Keep 100% Royalties</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Standard Analytics</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon> Basic Splitting (2 Users)</li>
</ul>
<button className="w-full btn-tech btn-tech-outline border border-white/20 text-white font-semibold text-xs py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Select Plan
                        </button>
</div>

<div className="p-8 md:p-12 bg-white text-black flex flex-col relative overflow-hidden">
<div className="absolute top-4 right-4 bg-black text-white text-[8px] font-mono px-2 py-1 uppercase tracking-widest">Most Selected</div>
<h3 className="text-sm font-mono text-neutral-600 uppercase mb-4">Label Network</h3>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tighter tabular-nums">$49</span>
<span className="text-xs text-neutral-500 uppercase">/ month</span>
</div>
<ul className="flex flex-col gap-4 text-sm text-black mb-12 flex-1 font-medium">
<li className="flex items-center gap-3"><iconify-icon className="text-black text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited Artists</li>
<li className="flex items-center gap-3"><iconify-icon className="text-black text-lg" icon="solar:check-circle-linear"></iconify-icon> Real-time API Analytics</li>
<li className="flex items-center gap-3"><iconify-icon className="text-black text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited Royalty Splits</li>
<li className="flex items-center gap-3"><iconify-icon className="text-black text-lg" icon="solar:check-circle-linear"></iconify-icon> Algorithmic Pitching Tools</li>
<li className="flex items-center gap-3"><iconify-icon className="text-black text-lg" icon="solar:check-circle-linear"></iconify-icon> Priority 1hr Support</li>
</ul>
<button className="w-full btn-tech bg-black text-white font-semibold text-xs py-4 uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                            Deploy Network
                        </button>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,12rem)] relative z-20 overflow-hidden bg-[#000000]" id="onboard">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-[clamp(1rem,4vw,2rem)] relative z-10 text-center">
<iconify-icon className="text-5xl text-white mb-6" icon="solar:upload-track-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-[clamp(3rem,5vw,5rem)] font-semibold tracking-tighter uppercase leading-none mb-6">Initiate Transfer.</h2>
<p className="text-base text-neutral-400 mb-10 font-normal leading-relaxed max-w-lg mx-auto">
                    Create your account, upload your first release, and map your royalty splits in under 5 minutes.
                </p>
<form className="max-w-md mx-auto flex flex-col gap-4">
<input className="w-full bg-[#0A0A0A] border border-white/20 px-6 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors rounded-none btn-tech-outline placeholder:text-neutral-600 font-mono" placeholder="Enter Label/Artist Email" type="email"/>
<button className="w-full btn-tech bg-white text-black font-bold text-sm py-4 uppercase tracking-widest hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2" type="button">
                        Start Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] font-mono text-neutral-600 mt-2 uppercase">No credit card required for standard account setup.</p>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#050505] py-12 relative z-20">
<div className="max-w-[clamp(65rem,95vw,90rem)] mx-auto px-[clamp(1rem,4vw,2rem)] flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="square" strokeWidth="2.5" viewbox="0 0 24 24" width="16">
<path d="M2 12h4l3-8 5 16 3-8h5"></path>
</svg>
<span className="text-sm font-semibold tracking-tight uppercase">PULSE NETWORK © 2026</span>
</div>
<div className="flex gap-6 text-xs font-mono text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">API Status</a>
</div>
</div>
</footer>



    </>
  );
}
