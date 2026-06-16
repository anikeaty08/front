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
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen pulse-glow"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[500px] bg-red-900/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-sm font-semibold tracking-tighter uppercase flex items-center gap-2 group" href="#">
<div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] group-hover:scale-125 transition-transform duration-300"></div>
                    Ignis
                </a>
<div className="hidden md:flex gap-6 text-xs font-medium">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#technology">Technology</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-xs hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors">
                    Request Demo
                </button>
</div>
</div>
</nav>
<main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">

<div className="flex flex-col items-center text-center mb-16 relative">
<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-[10px] font-medium text-orange-400 mb-8 hover:bg-orange-500/10 transition-colors cursor-default">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
</span>
                v2.0: Satellite thermal imaging active
            </div>
<h1 className="animate-enter delay-100 text-4xl md:text-6xl lg:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight max-w-4xl mx-auto mb-6 leading-[1.1]">
                Predict wildfires <br className="hidden md:block"/> before they burn.
            </h1>
<p className="animate-enter delay-200 text-base md:text-lg text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Ignis provides real-time thermal analysis, predictive AI modeling, and automated suppression logistics for modern forestry management.
            </p>
<div className="animate-enter delay-300 flex flex-col sm:flex-row gap-4 items-center">
<button className="h-10 px-6 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white text-sm font-medium shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all border border-orange-400/20 flex items-center gap-2 group">
                    Start Monitoring
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium hover:bg-white/10 transition-all hover:text-white">
                    View Coverage Map
                </button>
</div>
</div>

<div className="animate-enter delay-500 relative w-full max-w-5xl mx-auto border border-white/10 rounded-xl bg-[#080808] shadow-2xl shadow-orange-900/20 overflow-hidden group mb-24">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2 justify-between">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] font-mono text-neutral-600">IGNIS_KERNEL_V2.0.4</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 h-[450px]">

<div className="col-span-1 border-r border-white/5 bg-[#0A0A0A] p-4 flex flex-col gap-6 hidden lg:flex">
<div>
<div className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-3">Sectors</div>
<div className="space-y-1">
<div className="flex items-center justify-between p-2 rounded bg-orange-500/10 border border-orange-500/20 text-orange-200 text-xs">
<span>Napa Valley North</span>
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 text-neutral-400 text-xs transition-colors cursor-pointer">
<span>Sierra Foothills</span>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 text-neutral-400 text-xs transition-colors cursor-pointer">
<span>Redwood Coast</span>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</div>
</div>
</div>
<div>
<div className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-3">Live Assets</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:drone-linear"></iconify-icon>
<div>
<div>Unit Alpha-04</div>
<div className="text-[10px] text-neutral-600">Patrolling • 84% Bat</div>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:satellite-antenna-linear"></iconify-icon>
<div>
<div>Sat-Link V7</div>
<div className="text-[10px] text-neutral-600">Connected • 12ms Latency</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-3 relative bg-neutral-900/30 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<svg className="absolute inset-0 w-full h-full stroke-white/5" fill="none">
<path d="M100 200 Q 250 100 400 250 T 700 300" strokeWidth="2"></path>
<path d="M0 400 Q 200 350 300 450" strokeWidth="2"></path>
</svg>

<div className="relative w-48 h-48 flex items-center justify-center">
<div className="absolute inset-0 border border-orange-500/30 rounded-full radar-effect"></div>
<div className="absolute inset-0 border border-orange-500/20 rounded-full radar-effect radar-delay-1"></div>
<div className="absolute inset-0 border border-orange-500/10 rounded-full radar-effect radar-delay-2"></div>

<div className="relative z-10 w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.8)] animate-pulse"></div>

<div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-neutral-900/90 border border-orange-500/30 rounded text-[10px] text-orange-200 backdrop-blur-md shadow-lg flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:flame-bold"></iconify-icon>
<span>Thermal Anomaly: 482°C</span>
</div>
</div>

<div className="absolute bottom-6 left-6 p-4 rounded-lg bg-neutral-900/80 border border-white/10 backdrop-blur-md w-48">
<div className="text-[10px] text-neutral-500 mb-2 uppercase tracking-wide">Wind Vectors</div>
<div className="flex items-center justify-between text-xs text-white font-mono">
<span>14 km/h</span>
<span className="text-neutral-500">NW</span>
</div>
<div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white w-2/3 rounded-full"></div>
</div>
</div>
<div className="absolute top-6 right-6 p-4 rounded-lg bg-neutral-900/80 border border-white/10 backdrop-blur-md w-48">
<div className="text-[10px] text-neutral-500 mb-2 uppercase tracking-wide">Risk Probability</div>
<div className="text-2xl font-semibold text-white tracking-tight">92%</div>
<div className="text-[10px] text-orange-400 mt-1">Immediate intervention advised</div>
</div>
</div>
</div>
</div>

<div className="border-y border-white/5 py-10 mb-24 overflow-hidden reveal">
<p className="text-center text-[10px] font-semibold text-neutral-600 uppercase tracking-widest mb-8">Trusted by national forestry services</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tighter text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:mountains-linear"></iconify-icon> CALFIRE</span>
<span className="text-lg font-bold tracking-tighter text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:tree-linear"></iconify-icon> US FOREST SERVICE</span>
<span className="text-lg font-bold tracking-tighter text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:shield-star-linear"></iconify-icon> NATIONAL PARKS</span>
<span className="text-lg font-bold tracking-tighter text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:globe-linear"></iconify-icon> EURO FORESTRY</span>
<span className="text-lg font-bold tracking-tighter text-neutral-400 flex items-center gap-2"><iconify-icon icon="solar:leaf-linear"></iconify-icon> GREENPEACE</span>
</div>
</div>

<div className="mb-32" id="platform">
<div className="text-center mb-16 reveal">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Complete Operational Awareness</h2>
<p className="text-sm text-neutral-500">Hardware agnostic, AI driven, and real-time.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="reveal col-span-1 md:col-span-4 row-span-2 relative group overflow-hidden rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-transparent"></div>
<div className="p-8 relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Topography 3D Analysis</h3>
<p className="text-xs text-neutral-500">LiDAR scanning integration for slope and fuel load estimation.</p>
</div>
<div className="mt-8 relative w-full h-[250px] rounded-lg border border-white/5 bg-neutral-900/50 overflow-hidden">

<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px', transform: 'perspective(500px) rotateX(60deg) translateY(-100px)'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 bg-orange-500/20 blur-2xl rounded-full"></div>
</div>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="px-2 py-1 bg-black/50 border border-white/10 rounded text-[10px] text-neutral-400">Elevation: 4,200ft</span>
<span className="px-2 py-1 bg-black/50 border border-white/10 rounded text-[10px] text-neutral-400">Fuel Moisture: 12%</span>
</div>
</div>
</div>
</div>

<div className="reveal col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80"></div>
<div className="p-6 h-full flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-1">Instant Alerts</h3>
<p className="text-xs text-neutral-500">Push notifications for field teams.</p>
</div>
<div className="flex-1 space-y-3 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#080808] to-transparent z-10"></div>

<div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm flex gap-3 items-start">
<div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:bell-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Critical Heat Spike</div>
<div className="text-[10px] text-neutral-500 mt-0.5">Sector 4 • 2 mins ago</div>
</div>
</div>

<div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm flex gap-3 items-start opacity-70">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:wind-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Wind Shift Detected</div>
<div className="text-[10px] text-neutral-500 mt-0.5">North Ridge • 12 mins ago</div>
</div>
</div>

<div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm flex gap-3 items-start opacity-40">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
<iconify-icon icon="solar:drone-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Drone Deployed</div>
<div className="text-[10px] text-neutral-500 mt-0.5">Auto-Dispatch • 24 mins ago</div>
</div>
</div>
</div>
<button className="mt-4 w-full py-2 bg-white text-black text-xs font-medium rounded-lg hover:bg-neutral-200 transition-colors">Configure Alerts</button>
</div>
</div>

<div className="reveal col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors" style={{transitionDelay: '200ms'}}>
<div className="p-6 flex flex-col h-full justify-between">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Team Sync</h3>
<iconify-icon className="text-neutral-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="flex -space-x-3 mt-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px] text-white">JD</div>
<div className="w-8 h-8 rounded-full bg-neutral-700 border border-black flex items-center justify-center text-[10px] text-white">AS</div>
<div className="w-8 h-8 rounded-full bg-neutral-600 border border-black flex items-center justify-center text-[10px] text-white">MK</div>
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-[10px] text-neutral-400">+4</div>
</div>
<div className="mt-4 flex items-center gap-2 text-[10px] text-green-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            All units active
                        </div>
</div>
</div>

<div className="reveal col-span-1 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors" style={{transitionDelay: '300ms'}}>
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-orange-500/5 to-transparent"></div>
<div className="p-6 flex items-center justify-between h-full">
<div>
<h3 className="text-lg font-medium text-white mb-1">Universal Hardware Link</h3>
<p className="text-xs text-neutral-500 max-w-sm">Connects seamlessly with DJI, Freefly, and custom sensor arrays via MQTT.</p>
</div>
<div className="hidden md:flex gap-4 opacity-50">
<iconify-icon className="text-white" icon="solar:server-square-linear" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="solar:satellite-linear" width="32"></iconify-icon>
<iconify-icon className="text-white" icon="solar:radio-minimalistic-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="reveal mb-32" style={{transitionDelay: '100ms'}}>
<div className="border border-white/10 rounded-xl bg-black overflow-hidden font-mono text-xs">
<div className="h-8 bg-neutral-900 border-b border-white/5 flex items-center px-4 justify-between">
<span className="text-neutral-500">live_event_stream.log</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-green-500 text-[10px]">LIVE</span>
</div>
</div>
<div className="p-6 h-64 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
<div className="space-y-2 text-neutral-400">
<div className="flex gap-4"><span className="text-neutral-600">[14:02:22]</span> <span>System initialized. Region: <span className="text-blue-400">US-West-1</span></span></div>
<div className="flex gap-4"><span className="text-neutral-600">[14:02:24]</span> <span>Connecting to satellite feed (Constellation B)... <span className="text-green-400">Success</span></span></div>
<div className="flex gap-4"><span className="text-neutral-600">[14:02:45]</span> <span>Drone-04 telemetry received. Battery: 89%.</span></div>
<div className="flex gap-4"><span className="text-neutral-600">[14:03:12]</span> <span>Analysing thermal spectrum...</span></div>
<div className="flex gap-4"><span className="text-neutral-600">[14:03:15]</span> <span className="text-orange-400">WARNING: Heat signature detected at coord 34.22, -118.44</span></div>
<div className="flex gap-4"><span className="text-neutral-600">[14:03:16]</span> <span>Calculating wind vectors... Risk Factor: <span className="text-red-400">HIGH</span></span></div>
<div className="flex gap-4"><span className="text-neutral-600">[14:03:18]</span> <span>Dispatching alert to local station.</span></div>
<div className="flex gap-4"><span className="text-neutral-600">[14:03:20]</span> <span>Auto-deploying containment drone swarm...</span></div>
<div className="flex gap-4"><span className="text-neutral-600">[14:03:22]</span> <span className="animate-pulse">_</span></div>
</div>
</div>
</div>
</div>

<div className="mb-32" id="pricing">
<h2 className="reveal text-2xl md:text-3xl font-medium text-white tracking-tight mb-4 text-center">Protection at scale.</h2>
<p className="reveal text-sm text-neutral-500 text-center mb-16 max-w-lg mx-auto">Flexible plans for private estates, commercial forestry, and government agencies.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="reveal p-8 rounded-2xl border border-white/5 bg-neutral-900/10 hover:border-white/10 transition-all">
<h3 className="text-sm font-medium text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$499</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<p className="text-xs text-neutral-500 mb-8">For private estates and small land holdings.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Up to 500 Acres
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> 15 min update frequency
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Email Alerts
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> 2 User Seats
                        </li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Start Trial</button>
</div>

<div className="reveal p-8 rounded-2xl border border-orange-500/30 bg-[#0A0A0A] relative shadow-2xl shadow-orange-900/10 scale-105 z-10" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-sm font-medium text-white mb-2">Commercial</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$2,400</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<p className="text-xs text-neutral-500 mb-8">For commercial logging and mid-size parks.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon> Up to 10,000 Acres
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon> Real-time Satellite (1m)
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon> Drone API Access
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon> SMS &amp; Phone Alerts
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon> 10 User Seats
                        </li>
</ul>
<button className="w-full py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">Get Started</button>
</div>

<div className="reveal p-8 rounded-2xl border border-white/5 bg-neutral-900/10 hover:border-white/10 transition-all" style={{transitionDelay: '200ms'}}>
<h3 className="text-sm font-medium text-white mb-2">Government</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">Custom</span>
</div>
<p className="text-xs text-neutral-500 mb-8">For national parks and state departments.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Unlimited Acreage
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Dedicated Satellite Relay
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> On-premise Deployment
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> 24/7 Priority Support
                        </li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto mb-32 reveal">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8 text-center">Frequently asked questions</h2>
<div className="divide-y divide-white/5">

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white text-sm">
<span>Does Ignis work in overcast conditions?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 mt-3 group-open:animate-fadeIn text-sm leading-relaxed">
                        Yes. Our thermal imaging sensors penetrate cloud cover and smoke, ensuring continuous monitoring regardless of weather conditions or visibility.
                    </div>
</details>

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white text-sm">
<span>What drone hardware is supported?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 mt-3 group-open:animate-fadeIn text-sm leading-relaxed">
                        Ignis comes with SDKs for DJI Enterprise, Freefly Systems, and Autel robotics. We also support MAVLink for custom builds.
                    </div>
</details>

<details className="group py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white text-sm">
<span>How fast are the alerts?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 mt-3 group-open:animate-fadeIn text-sm leading-relaxed">
                        Alert latency depends on the plan. Pro and Government plans feature sub-30 second detection-to-alert times via direct satellite link.
                    </div>
</details>
</div>
</div>

<div className="reveal relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-20 text-center group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.1),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.15),transparent_70%)] transition-all duration-700"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Ready to secure your perimeter?</h2>
<p className="text-sm text-neutral-400 mb-10 max-w-md mx-auto">
                    Join forestry services and private estates worldwide using Ignis for early detection.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-3 max-w-sm mx-auto">
<input className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 w-full backdrop-blur-sm transition-colors" placeholder="enterpriselabs@company.com" type="email"/>
<button className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-neutral-200 transition-colors whitespace-nowrap shadow-lg shadow-white/5">
                        Get Access
                    </button>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-neutral-500">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> 14-day free trial
                    <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> No hardware required
                </div>
</div>
</div>
</main>
<footer className="border-t border-white/5 py-12 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm text-white font-semibold tracking-tighter uppercase">IGNIS</span>
</div>
<p className="text-xs text-neutral-500 max-w-[150px]">Advanced thermal intelligence for a safer planet.</p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-orange-400 transition-colors" href="#">Detection</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Suppression</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Hardware</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-orange-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-orange-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-neutral-600">
                © 2024 Ignis Systems Inc. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="16"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
