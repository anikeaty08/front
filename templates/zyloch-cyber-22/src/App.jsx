import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                multiplier: 1.2,
                class: 'is-inview'
            });

            // Handle smooth scrolling for anchor links with Locomotive
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetEl = document.querySelector(targetId);
                    if (targetEl) {
                        scroll.scrollTo(targetEl, {
                            offset: -64,
                            duration: 1000,
                            easing: [0.25, 0.0, 0.35, 1.0]
                        });
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full border-b border-white/5 bg-black/50 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xs font-mono-tech tracking-widest text-zinc-300">ZYLOCH</div>
<nav className="hidden md:flex gap-8">
<a className="text-xs font-mono-tech tracking-widest text-zinc-400 hover:text-white transition-colors" href="#platform">PLATFORM</a>
<a className="text-xs font-mono-tech tracking-widest text-zinc-400 hover:text-white transition-colors" href="#product">PRODUCT</a>
<a className="text-xs font-mono-tech tracking-widest text-zinc-400 hover:text-white transition-colors" href="#contact">CONTACT</a>
</nav>
<a className="text-xs font-mono-tech tracking-widest text-[#00E5FF] hover:text-white transition-colors flex items-center gap-1 group" href="#contact">
                INITIATE SECURE LINK <iconify-icon className="w-4 h-4 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</header>

<main data-scroll-container="">

<section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden hero-bg" data-scroll-section="">
<div className="absolute right-0 top-0 w-[800px] h-[800px] opacity-30 pointer-events-none translate-x-1/3 -translate-y-1/4" data-scroll="" data-scroll-speed="-2">
<div className="w-full h-full rounded-full border border-[#00E5FF]/20" style={{background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)', boxShadow: '0 0 100px 20px rgba(0,229,255,0.05) inset'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-black rounded-full shadow-[0_0_50px_20px_rgba(0,229,255,0.2)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="text-[#00E5FF] text-xs font-mono-tech tracking-widest mb-8 uppercase reveal-up" data-scroll="">Application code posture platform</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight font-medium mb-8">
<span className="text-outline-white block reveal-up delay-100" data-scroll="">Secure</span>
<span className="block reveal-up delay-200" data-scroll="">code.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-sm mb-12 font-light leading-relaxed reveal-up delay-300" data-scroll="">
                        Catching risks in source code, AI commits, secrets, and supply chains — before they become breaches.
                    </p>
<div className="flex items-center gap-6 reveal-up delay-400" data-scroll="">
<a className="bg-[#00E5FF] text-black px-6 py-3 text-sm font-medium hover:bg-white transition-colors flex items-center gap-2 rounded-sm group cursor-pointer inline-flex" data-scroll-to="" href="#contact">
                            Book Demo <iconify-icon className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
<span className="text-xs font-mono-tech text-zinc-600 tracking-widest uppercase flex items-center gap-2">
                            Scroll 
                            <span className="w-px h-6 bg-zinc-700 block animate-pulse"></span>
</span>
</div>
</div>
</div>
<div className="absolute bottom-0 w-full border-t border-white/5 bg-black/40 py-4 overflow-hidden hidden md:block">
<div className="flex items-center gap-16 px-6 text-xs font-mono-tech text-zinc-600 tracking-widest whitespace-nowrap">
<span className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-zinc-800"></span> SBOM</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-zinc-800"></span> OWASP</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-zinc-800"></span> COMPLIANCE</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-zinc-800"></span> CI/CD</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-zinc-800"></span> CLOUD POSTURE</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-zinc-800"></span> SOURCE CODE</span>
<span className="flex items-center gap-3"><span className="w-1 h-1 rounded-full bg-zinc-800"></span> AI RISK</span>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative" data-scroll-section="" id="platform">
<div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" data-scroll="" data-scroll-speed="-0.5"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex justify-between items-start mb-16 reveal-fade" data-scroll="">
<div className="text-[#00E5FF] text-xs font-mono-tech tracking-widest uppercase">The Shift</div>
<div className="text-zinc-600 text-xs font-mono-tech">*001</div>
</div>
<h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight font-medium mb-32 max-w-4xl">
<span className="block reveal-up" data-scroll="">The biggest</span>
<span className="text-outline-white block reveal-up delay-100" data-scroll="">risk lives</span>
<span className="text-[#00E5FF] block reveal-up delay-200" data-scroll="">inside your code.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-16">
<div className="reveal-up" data-scroll="">
<div className="text-xs font-mono-tech text-zinc-500 mb-2 uppercase tracking-wider">Attack vectors detected</div>
<div className="text-5xl font-medium tracking-tight">247K<span className="text-[#00E5FF]">+</span></div>
</div>
<div className="reveal-up delay-100" data-scroll="">
<div className="text-xs font-mono-tech text-zinc-500 mb-2 uppercase tracking-wider">Repositories protected</div>
<div className="text-5xl font-medium tracking-tight">12K<span className="text-[#00E5FF]">+</span></div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#020202] relative" data-scroll-section="" id="product">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex justify-between items-start mb-16 reveal-fade" data-scroll="">
<div className="text-[#00E5FF] text-xs font-mono-tech tracking-widest uppercase">Product Capabilities</div>
<div className="text-zinc-600 text-xs font-mono-tech">*002</div>
</div>
<h2 className="text-5xl md:text-6xl tracking-tight font-medium mb-24 max-w-3xl leading-tight reveal-up" data-scroll="">
                    Deep dive into the<br/>
<span className="text-outline-white">Zyloch Engine.</span>
</h2>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 reveal-up delay-100" data-scroll="">

<div className="md:col-span-2 bg-[#050505] border border-white/5 rounded-sm p-8 relative overflow-hidden group">
<div className="absolute right-0 top-0 w-64 h-64 bg-[#00E5FF]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#00E5FF]/10 transition-colors duration-700"></div>
<div className="relative z-10 mb-32">
<h3 className="text-2xl font-medium tracking-tight mb-2">Secret Sprawl Mapping</h3>
<p className="text-sm text-zinc-400 font-light max-w-sm">Automatically trace hardcoded credentials, API keys, and tokens across your entire organization's Git history.</p>
</div>

<div className="absolute bottom-[-10%] right-[-5%] w-[120%] h-64 pointer-events-none">
<svg className="w-full h-full opacity-60" viewbox="0 0 400 200">

<path d="M50,150 L150,100 L250,130 L350,80" fill="none" stroke="#3f3f46" strokeWidth="1"></path>
<path d="M150,100 L200,50 L350,80" fill="none" stroke="#3f3f46" strokeWidth="1"></path>
<path d="M150,100 L250,180" fill="none" stroke="#3f3f46" strokeWidth="1"></path>

<path className="animate-flow" d="M50,150 L150,100 L250,130 L350,80" fill="none" stroke="#00E5FF" strokeWidth="1.5"></path>

<circle cx="50" cy="150" fill="#3f3f46" r="4"></circle>
<circle className="animate-pulse" cx="150" cy="100" fill="#00E5FF" r="6"></circle>
<circle cx="200" cy="50" fill="#3f3f46" r="4"></circle>
<circle cx="250" cy="130" fill="#ef4444" r="5"></circle>
<circle cx="250" cy="180" fill="#3f3f46" r="4"></circle>
<circle className="animate-pulse" cx="350" cy="80" fill="#00E5FF" r="6"></circle>

<text fill="#a1a1aa" fontFamily="JetBrains Mono" fontSize="10" x="145" y="85">main_api_key</text>
<text fill="#ef4444" fontFamily="JetBrains Mono" fontSize="10" x="255" y="125">EXPOSED DB_URI</text>
</svg>
</div>
</div>

<div className="md:col-span-2 bg-[#050505] border border-white/5 rounded-sm p-8 relative overflow-hidden group">
<div className="absolute inset-0 z-0">
<img alt="Cyber abstract" className="w-full h-full object-cover opacity-10 mix-blend-screen group-hover:scale-105 transition-transform duration-[3s]" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-[#050505]/80"></div>
</div>
<div className="relative z-10 mb-8">
<h3 className="text-2xl font-medium tracking-tight mb-2">Supply Chain Immune System</h3>
<p className="text-sm text-zinc-400 font-light max-w-sm">Deep inspection of OSS dependencies and third-party modules before they merge.</p>
</div>

<div className="relative z-10 bg-black/40 border border-white/5 rounded-sm p-4 backdrop-blur-sm mt-12">
<div className="flex items-center justify-between text-xs font-mono-tech text-zinc-500 mb-4 border-b border-white/5 pb-2">
<span>DEPENDENCY GRAPH</span>
<span className="text-emerald-400">SAFE</span>
</div>
<div className="space-y-3 font-mono-tech text-xs">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<span className="text-zinc-300">react-core v18.2</span>
<span className="ml-auto text-zinc-600">0 risks</span>
</div>
<div className="flex items-center gap-3 pl-5 border-l border-zinc-800 ml-1">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
<span className="text-zinc-400">lodash.merge v4.6</span>
<span className="ml-auto text-orange-500">CVE-2024-X</span>
</div>
<div className="flex items-center gap-3 pl-5 border-l border-zinc-800 ml-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<span className="text-zinc-400">axios v1.6.0</span>
<span className="ml-auto text-zinc-600">0 risks</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 bg-[#050505] border border-white/5 rounded-sm p-8 md:p-12 relative overflow-hidden group flex flex-col md:flex-row items-center gap-12">
<div className="relative z-10 w-full md:w-1/3">
<div className="text-[#00E5FF] text-xs font-mono-tech tracking-widest mb-4 uppercase">Developer Friction = 0</div>
<h3 className="text-3xl font-medium tracking-tight mb-4 leading-tight">Native Pipeline Interception</h3>
<p className="text-sm text-zinc-400 font-light">Block malicious code at the PR level. Zyloch integrates directly into GitHub, GitLab, and Bitbucket with millisecond latency.</p>
<ul className="mt-8 space-y-3 text-sm font-mono-tech text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00E5FF]" icon="solar:check-circle-linear"></iconify-icon> Pull Request Checks</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00E5FF]" icon="solar:check-circle-linear"></iconify-icon> Pre-commit Hooks</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00E5FF]" icon="solar:check-circle-linear"></iconify-icon> IDE Extensions</li>
</ul>
</div>

<div className="relative w-full md:w-2/3 h-64 flex items-center justify-center">
<div className="absolute inset-0 dot-matrix-bg opacity-20 mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)"></div>

<div className="flex items-center justify-between w-full max-w-2xl relative z-10">

<div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>
<div className="absolute top-1/2 left-0 w-2/3 h-px bg-[#00E5FF] -translate-y-1/2 z-0 opacity-50 shadow-[0_0_10px_#00E5FF]"></div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 bg-black border border-white/10 rounded-sm flex items-center justify-center text-zinc-400 group-hover:border-[#00E5FF] transition-colors">
<iconify-icon className="w-6 h-6" icon="solar:code-square-linear"></iconify-icon>
</div>
<span className="absolute -bottom-8 text-xs font-mono-tech text-zinc-500">COMMIT</span>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="absolute -inset-4 bg-[#00E5FF]/10 rounded-full blur-md animate-pulse"></div>
<div className="w-16 h-16 bg-[#020202] border-2 border-[#00E5FF] rounded-sm flex items-center justify-center text-[#00E5FF] relative z-10 transform scale-110 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
<svg className="w-8 h-8 animate-radar opacity-50 absolute inset-0 m-auto" fill="none" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke="#00E5FF" stroke-dasharray="2 4" strokeWidth="0.5"></circle>
<path d="M12 12 L12 2" stroke="#00E5FF" strokeWidth="1"></path>
</svg>
<span className="text-xs font-mono-tech tracking-widest bg-[#020202] px-1 relative z-10">SCAN</span>
</div>
<span className="absolute -bottom-10 text-xs font-mono-tech text-[#00E5FF] whitespace-nowrap text-center">
                                        ZYLOCH ENGINE<br/>
<span className="text-zinc-600 text-[10px]">42ms</span>
</span>
</div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 bg-black border border-white/10 rounded-sm flex items-center justify-center text-zinc-600">
<iconify-icon className="w-6 h-6" icon="solar:server-square-linear"></iconify-icon>
</div>
<span className="absolute -bottom-8 text-xs font-mono-tech text-zinc-600">DEPLOY</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#030303] overflow-hidden" data-scroll-section="">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-start mb-16 reveal-fade" data-scroll="">
<div className="text-[#00E5FF] text-xs font-mono-tech tracking-widest uppercase">Risk Intelligence</div>
<div className="text-zinc-600 text-xs font-mono-tech">*003</div>
</div>
<h2 className="text-5xl md:text-6xl tracking-tight font-medium mb-16 max-w-2xl leading-[1.1] reveal-up" data-scroll="">
                    One dashboard.<br/>Total intelligence.
                </h2>

<div className="flex flex-col gap-px bg-white/5 border border-white/5 rounded-sm p-px reveal-up delay-100" data-scroll="">

<div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black">

<div className="bg-[#080808] p-6 flex flex-col justify-between h-32 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors">
<div className="text-xs font-mono-tech text-zinc-500 uppercase tracking-wider">Risk Score</div>
<div className="text-4xl font-medium text-[#00E5FF] tracking-tight">94</div>
<div className="absolute bottom-0 left-0 w-full h-8 opacity-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,30 L0,20 L20,25 L40,15 L60,20 L80,5 L100,10 L100,30 Z" fill="url(#grad-cyan)"></path>
<path d="M0,20 L20,25 L40,15 L60,20 L80,5 L100,10" fill="none" stroke="#00E5FF" strokeWidth="1.5"></path>
<defs><lineargradient id="grad-cyan" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#00E5FF"></stop><stop offset="100%" stop-color="transparent"></stop></lineargradient></defs>
</svg>
</div>
</div>

<div className="bg-[#080808] p-6 flex flex-col justify-between h-32 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors">
<div className="text-xs font-mono-tech text-zinc-500 uppercase tracking-wider">Vulnerabilities</div>
<div className="text-4xl font-medium text-pink-400 tracking-tight">2</div>
<div className="absolute bottom-0 left-0 w-full h-8 opacity-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,10 L20,15 L40,10 L60,25 L80,15 L100,20" fill="none" stroke="#f472b6" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="bg-[#080808] p-6 flex flex-col justify-between h-32 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors">
<div className="text-xs font-mono-tech text-zinc-500 uppercase tracking-wider">Dependencies</div>
<div className="text-4xl font-medium text-purple-400 tracking-tight">1284</div>
<div className="absolute bottom-0 left-0 w-full h-8 opacity-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,25 L20,20 L40,22 L60,10 L80,15 L100,5" fill="none" stroke="#c084fc" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="bg-[#080808] p-6 flex flex-col justify-between h-32 relative overflow-hidden group hover:bg-[#0a0a0a] transition-colors">
<div className="text-xs font-mono-tech text-zinc-500 uppercase tracking-wider">Owasp Coverage</div>
<div className="text-4xl font-medium text-orange-400 tracking-tight">92%</div>
<div className="absolute bottom-0 left-0 w-full h-8 opacity-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,15 L20,10 L40,15 L60,5 L80,8 L100,2" fill="none" stroke="#fb923c" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative bg-[#020202]" data-scroll-section="" id="contact">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-[0.03] mix-blend-screen pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex justify-between items-start mb-16 reveal-fade" data-scroll="">
<div className="text-[#00E5FF] text-xs font-mono-tech tracking-widest uppercase">Secure Link</div>
<div className="text-zinc-600 text-xs font-mono-tech">*004</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

<div className="lg:col-span-2 flex flex-col justify-between reveal-up" data-scroll="">
<div>
<h2 className="text-5xl md:text-7xl leading-[0.9] tracking-tight font-medium mb-6">
<span className="block">Initiate</span>
<span className="text-outline-cyan block">Contact.</span>
</h2>
<p className="text-base text-zinc-400 font-light max-w-sm mb-12">
                                Request a personalized platform demonstration, API access, or discuss enterprise deployment options with our engineering team.
                            </p>
</div>

<div className="relative w-full h-48 border border-white/5 bg-[#050505] rounded-sm overflow-hidden hidden md:block mt-auto">
<div className="absolute inset-0 dot-matrix-bg opacity-30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-full h-full opacity-50" viewbox="0 0 200 100">

<path d="M40,50 L100,30 L160,60" fill="none" stroke="#3f3f46" strokeWidth="0.5"></path>
<path d="M100,30 L120,80 L160,60" fill="none" stroke="#3f3f46" strokeWidth="0.5"></path>

<circle cx="40" cy="50" fill="#71717a" r="2"></circle>

<circle cx="100" cy="30" fill="#00E5FF" r="3"></circle>
<circle className="animate-ping" cx="100" cy="30" fill="none" r="8" stroke="#00E5FF" strokeWidth="1"></circle>
<circle cx="120" cy="80" fill="#71717a" r="2"></circle>
<circle cx="160" cy="60" fill="#71717a" r="2"></circle>
<text fill="#00E5FF" fontFamily="JetBrains Mono" fontSize="6" x="105" y="25">HQ: US-EAST-1</text>
</svg>
</div>
<div className="absolute bottom-4 left-4 text-[10px] font-mono-tech text-zinc-500 uppercase">
                                Global Grid Active
                            </div>
</div>
</div>

<div className="lg:col-span-3 reveal-up delay-200" data-scroll="">
<form className="bg-[#050505] border border-white/5 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-transparent to-[#00E5FF]"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

<div className="relative group">
<label className="text-xs font-mono-tech text-zinc-500 mb-2 block uppercase tracking-widest group-focus-within:text-[#00E5FF] transition-colors">Operator Name</label>
<input className="w-full bg-transparent border-b border-white/10 pb-3 text-base text-zinc-200 focus:outline-none focus:border-[#00E5FF] transition-colors placeholder-zinc-700" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="relative group">
<label className="text-xs font-mono-tech text-zinc-500 mb-2 block uppercase tracking-widest group-focus-within:text-[#00E5FF] transition-colors">Work Channel (Email)</label>
<input className="w-full bg-transparent border-b border-white/10 pb-3 text-base text-zinc-200 focus:outline-none focus:border-[#00E5FF] transition-colors placeholder-zinc-700" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>
<div className="mb-8 relative group">
<label className="text-xs font-mono-tech text-zinc-500 mb-2 block uppercase tracking-widest group-focus-within:text-[#00E5FF] transition-colors">Organization</label>
<input className="w-full bg-transparent border-b border-white/10 pb-3 text-base text-zinc-200 focus:outline-none focus:border-[#00E5FF] transition-colors placeholder-zinc-700" placeholder="Corp Inc." type="text"/>
</div>

<div className="mb-8 relative group">
<label className="text-xs font-mono-tech text-zinc-500 mb-2 block uppercase tracking-widest group-focus-within:text-[#00E5FF] transition-colors">Transmission Type</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-white/10 pb-3 text-base text-zinc-200 focus:outline-none focus:border-[#00E5FF] appearance-none rounded-none cursor-pointer transition-colors">
<option className="bg-[#050505] text-zinc-500" disabled="" selected="" value="">Select parameter...</option>
<option className="bg-[#050505] text-white" value="demo">Platform Demonstration</option>
<option className="bg-[#050505] text-white" value="enterprise">Enterprise Architecture Setup</option>
<option className="bg-[#050505] text-white" value="api">API Access Request</option>
<option className="bg-[#050505] text-white" value="support">Technical Support</option>
</select>
<iconify-icon className="absolute right-0 top-1 text-zinc-500 pointer-events-none group-focus-within:text-[#00E5FF] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="mb-8 relative group">
<label className="text-xs font-mono-tech text-zinc-500 mb-2 block uppercase tracking-widest group-focus-within:text-[#00E5FF] transition-colors">Encrypted Message</label>
<textarea className="w-full bg-transparent border-b border-white/10 pb-3 text-base text-zinc-200 focus:outline-none focus:border-[#00E5FF] transition-colors placeholder-zinc-700 resize-none" placeholder="Describe your infrastructure needs..." rows="3"></textarea>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-12 border-t border-white/5 pt-8">

<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="opacity-0 absolute w-full h-full cursor-pointer z-10" required="" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-600 rounded-sm flex items-center justify-center bg-black transition-colors group-hover:border-zinc-400">
<iconify-icon className="w-3 h-3 text-black opacity-0 transition-opacity transform scale-50" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<span className="text-xs font-mono-tech text-zinc-500 select-none">I accept the Data Processing Agreement</span>
</label>
<button className="w-full md:w-auto bg-[#00E5FF] text-black px-8 py-3 text-sm font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm group" type="submit">
                                    Transmit <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 relative bg-[#030303]" data-scroll-section="">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs font-mono-tech tracking-widest text-zinc-500">
                    © 2024 ZYLOCH SECURITY. ALL SYSTEMS NOMINAL.
                </div>
<div className="flex gap-6 text-xs font-mono-tech text-zinc-600 uppercase tracking-widest">
<a className="hover:text-[#00E5FF] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#00E5FF] transition-colors" href="#">Terms</a>
<a className="hover:text-[#00E5FF] transition-colors" href="#">Status</a>
</div>
</div>
</footer>
</main>





    </>
  );
}
