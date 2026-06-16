import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Global State
        let authorized = false;
        let isScanning = false;
        let scanTimer;

        // Authorization Logic
        function startScan() {
            if (authorized) return;
            isScanning = true;
            const textElement = document.getElementById('auth-text');
            textElement.innerText = "Scanning...";
            textElement.classList.add('text-zinc-900');
            
            // 1.5s Scan Duration
            scanTimer = setTimeout(() => {
                grantAccess();
            }, 1500);
        }

        function stopScan() {
            if (authorized) return;
            isScanning = false;
            clearTimeout(scanTimer);
            const textElement = document.getElementById('auth-text');
            textElement.innerText = "Hover to Scan";
            textElement.classList.remove('text-zinc-900');
        }

        function grantAccess() {
            authorized = true;
            
            // Visual Updates
            const textElement = document.getElementById('auth-text');
            textElement.innerHTML = "<span class='text-zinc-900 font-bold flash-text'>SOVEREIGN ACCESS GRANTED</span>";
            
            // Stop Ring Animation
            document.getElementById('scan-ring').style.opacity = '0';
            
            // Unlock Scroll
            document.body.style.overflow = 'auto';

            // Show Nav
            document.getElementById('main-nav').classList.remove('opacity-0', '-translate-y-4');

            // Show Scroll Indicator
            document.getElementById('scroll-indicator').classList.remove('opacity-0');

            // Transition Content (Quantum Immersion)
            const content = document.getElementById('content-flow');
            content.classList.remove('opacity-20', 'blur-sm', 'pointer-events-none');
        }

        // Prevent Scroll Logic
        window.addEventListener('wheel', (e) => {
            if (!authorized) {
                const lockMsg = document.getElementById('lock-message');
                lockMsg.classList.remove('opacity-0');
                setTimeout(() => {
                    lockMsg.classList.add('opacity-0');
                }, 2000);
            }
        });

        // Portal Logic
        function togglePortal() {
            const portal = document.getElementById('portal-view');
            const main = document.getElementById('main-view');
            const body = document.body;

            if (portal.classList.contains('hidden')) {
                // Open Portal
                portal.classList.remove('hidden');
                setTimeout(() => {
                    portal.classList.remove('opacity-0');
                    main.style.filter = "blur(10px)";
                }, 10);
                body.style.overflow = 'hidden';
            } else {
                // Close Portal
                portal.classList.add('opacity-0');
                main.style.filter = "none";
                setTimeout(() => {
                    portal.classList.add('hidden');
                }, 700);
                if(authorized) body.style.overflow = 'auto';
            }
        }

        // Intersection Observer for Scroll Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach(section => {
                observer.observe(section);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.08]">

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] text-zinc-500 hologram-layer" fill="none" stroke="currentColor" strokeWidth="0.5">

<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40" x="0" y="0">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-opacity="0.3"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>

<circle className="animate-pulse" cx="30%" cy="40%" fill="currentColor" r="2"></circle> 
<circle className="animate-pulse" cx="48%" cy="38%" fill="currentColor" r="2" style={{animationDelay: '1s'}}></circle> 
<circle className="animate-pulse" cx="52%" cy="42%" fill="currentColor" r="2" style={{animationDelay: '2s'}}></circle> 
<circle className="animate-pulse" cx="75%" cy="45%" fill="currentColor" r="2" style={{animationDelay: '1.5s'}}></circle> 
<circle className="animate-pulse" cx="80%" cy="40%" fill="currentColor" r="2" style={{animationDelay: '0.5s'}}></circle> 

<path className="opacity-50" d="M30% 40% Q 40% 30% 48% 38%" stroke-dasharray="4 4"></path>
<path className="opacity-50" d="M48% 38% L 52% 42%" stroke-dasharray="4 4"></path>
<path className="opacity-50" d="M52% 42% Q 65% 50% 75% 45%" stroke-dasharray="4 4"></path>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-zinc-200 rounded-full opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-zinc-200 rounded-full opacity-40"></div>
</div>

<nav className="fixed top-0 w-full z-40 transition-all duration-700 opacity-0 -translate-y-4" id="main-nav">
<div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

<div className="text-xs tracking-[0.2em] uppercase font-medium text-zinc-400">Opulence</div>

<div className="hidden md:flex items-center space-x-10 text-xs font-light tracking-widest text-zinc-500 uppercase">
<a className="hover:text-zinc-900 transition-colors" href="#">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Ecosystem</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Strategies</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Insights</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Contact</a>
<button className="text-zinc-900 border border-zinc-200 px-5 py-2 rounded-none hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all text-[10px] font-medium uppercase tracking-[0.15em]" onclick="togglePortal()">
                    Client Portal
                </button>
</div>

<button className="md:hidden text-zinc-900">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="relative z-10 transition-opacity duration-700 ease-in-out opacity-100" id="main-view">

<header className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent" id="hero-section">

<div className="cursor-pointer group relative z-10 p-16 flex flex-col items-center justify-center" id="auth-trigger" onmouseenter="startScan()" onmouseleave="stopScan()">

<div className="absolute inset-0 border-2 border-zinc-200 rounded-full scanning-ring transition-all duration-500 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100" id="scan-ring"></div>
<div className="absolute inset-0 border border-dashed border-zinc-300 rounded-full opacity-0 group-hover:opacity-30 animate-[spin_10s_linear_infinite]"></div>

<svg className="w-24 h-24 md:w-32 md:h-32 animate-logo-cycle transition-transform duration-500" fill="currentColor" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0ZM50 5V95M50 5L12 28V72L50 95L88 72V28L50 5Z" fill-rule="evenodd"></path>
<path d="M50 15V85" stroke="currentColor" strokeWidth="0.5"></path>
</svg>

<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 text-center">
<span className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase font-medium transition-all duration-300" id="auth-text">Hover to Scan</span>
</div>
</div>

<div className="absolute bottom-20 opacity-0 transition-opacity duration-300 text-red-900/50 text-[10px] tracking-widest uppercase font-medium" id="lock-message">
                Awaiting Authorization...
            </div>

<div className="absolute bottom-12 flex flex-col items-center opacity-0 transition-opacity duration-1000" id="scroll-indicator">
<span className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase mb-3">Quantum Immersion</span>
<div className="h-12 w-[1px] bg-gradient-to-b from-zinc-200 to-transparent"></div>
</div>
</header>

<section className="relative py-32 px-6 max-w-6xl mx-auto opacity-20 transition-all duration-1000 blur-sm pointer-events-none" id="content-flow">
<div className="text-center mb-32 fade-in-section">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900 mb-6">
                    Enter the Opulence Chain
                </h2>
<p className="text-lg text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto">
                    A sovereign ecosystem for capital, technology, and real-world assets. 
                    Engineered for those who think in decades.
                </p>
</div>

<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-100"></div>

<div className="relative mb-24 md:flex justify-between items-start group fade-in-section">
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-zinc-400 z-10 mt-2 group-hover:bg-zinc-900 group-hover:scale-150 transition-all duration-300"></div>
<div className="pl-12 md:pl-0 md:w-5/12 md:text-right md:pr-16">
<div className="flex items-center md:justify-end gap-3 mb-3">
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Security &amp; Treasury</h3>
<i className="w-4 h-4 text-zinc-400 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Institutional-grade asset protection and multi-entity capital structures engineered for sovereign control.</p>
</div>
<div className="hidden md:block md:w-5/12"></div>
</div>

<div className="relative mb-24 md:flex justify-between items-start group fade-in-section">
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-zinc-400 z-10 mt-2 group-hover:bg-zinc-900 group-hover:scale-150 transition-all duration-300"></div>
<div className="hidden md:block md:w-5/12"></div>
<div className="pl-12 md:pl-0 md:w-5/12 md:pl-16">
<div className="flex items-center gap-3 mb-3">
<i className="w-4 h-4 text-zinc-400 stroke-[1.5]" data-lucide="cpu"></i>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Digital Asset Management</h3>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Strategic exposure with risk-first on-chain infrastructure and deep liquidity intelligence.</p>
</div>
</div>

<div className="relative mb-24 md:flex justify-between items-start group fade-in-section">
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-zinc-400 z-10 mt-2 group-hover:bg-zinc-900 group-hover:scale-150 transition-all duration-300"></div>
<div className="pl-12 md:pl-0 md:w-5/12 md:text-right md:pr-16">
<div className="flex items-center md:justify-end gap-3 mb-3">
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Real Estate &amp; RWA</h3>
<i className="w-4 h-4 text-zinc-400 stroke-[1.5]" data-lucide="building-2"></i>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Transforming physical assets into programmable wealth vehicles across multifamily, commercial &amp; hospitality.</p>
</div>
<div className="hidden md:block md:w-5/12"></div>
</div>

<div className="relative mb-24 md:flex justify-between items-start group fade-in-section">
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-zinc-400 z-10 mt-2 group-hover:bg-zinc-900 group-hover:scale-150 transition-all duration-300"></div>
<div className="hidden md:block md:w-5/12"></div>
<div className="pl-12 md:pl-0 md:w-5/12 md:pl-16">
<div className="flex items-center gap-3 mb-3">
<i className="w-4 h-4 text-zinc-400 stroke-[1.5]" data-lucide="trending-up"></i>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Private Equity &amp; VC</h3>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Backing operators and founders aligned with long-term abundance and exponential tech leverage.</p>
</div>
</div>

<div className="relative mb-24 md:flex justify-between items-start group fade-in-section">
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-zinc-400 z-10 mt-2 group-hover:bg-zinc-900 group-hover:scale-150 transition-all duration-300"></div>
<div className="pl-12 md:pl-0 md:w-5/12 md:text-right md:pr-16">
<div className="flex items-center md:justify-end gap-3 mb-3">
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Opulence Treasury</h3>
<i className="w-4 h-4 text-zinc-400 stroke-[1.5]" data-lucide="landmark"></i>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Blueprinting private, Opulence-branded financial rails for UHNW and enterprise capital.</p>
</div>
<div className="hidden md:block md:w-5/12"></div>
</div>

<div className="relative mb-24 md:flex justify-between items-start group fade-in-section">
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-zinc-400 z-10 mt-2 group-hover:bg-zinc-900 group-hover:scale-150 transition-all duration-300"></div>
<div className="hidden md:block md:w-5/12"></div>
<div className="pl-12 md:pl-0 md:w-5/12 md:pl-16">
<div className="flex items-center gap-3 mb-3">
<i className="w-4 h-4 text-zinc-400 stroke-[1.5]" data-lucide="network"></i>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Wealth Architecture</h3>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">A sovereign ecosystem for intergenerational planning, trusts, and capital continuity.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-32 px-6 border-y border-zinc-100 relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start fade-in-section">
<div>
<h2 className="text-3xl font-light tracking-tight text-zinc-900 mb-6">Architecture for the Elite</h2>
<p className="text-base text-zinc-500 font-light leading-relaxed">
                            Opulence is designed for those who want their capital to exist in a sovereign, technology-driven ecosystem. We bridge the gap between traditional prestige and decentralized future.
                        </p>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-yellow-600 transition-colors"></div>
<span className="text-base text-zinc-800 font-light">Ultra-high-net-worth families</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-yellow-600 transition-colors"></div>
<span className="text-base text-zinc-800 font-light">Digital asset funds &amp; traders</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-yellow-600 transition-colors"></div>
<span className="text-base text-zinc-800 font-light">Real estate owners + syndicators</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-yellow-600 transition-colors"></div>
<span className="text-base text-zinc-800 font-light">Private businesses &amp; holding companies</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-yellow-600 transition-colors"></div>
<span className="text-base text-zinc-800 font-light">Strategic founders &amp; elite venture partners</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 bg-white overflow-hidden relative">
<div className="max-w-4xl mx-auto text-center fade-in-section">
<div className="text-[10px] font-semibold tracking-widest text-zinc-300 uppercase mb-20">Global Nodes</div>

<div className="relative h-[400px] w-full flex justify-center items-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-100" style={{strokeWidth: '1px'}}>
<line stroke-dasharray="2 2" x1="50%" x2="50%" y1="50%" y2="10%"></line>
<line stroke-dasharray="2 2" x1="50%" x2="20%" y1="50%" y2="85%"></line>
<line stroke-dasharray="2 2" x1="50%" x2="80%" y1="50%" y2="85%"></line>
<line stroke-dasharray="2 2" x1="50%" x2="10%" y1="50%" y2="40%"></line>
<line stroke-dasharray="2 2" x1="50%" x2="90%" y1="50%" y2="40%"></line>

<circle fill="#D4AF37" r="2">
<animatemotion dur="3s" path="M50% 50% L50% 10%" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#A3A3A3" r="2">
<animatemotion dur="4s" path="M50% 50% L80% 85%" repeatcount="indefinite"></animatemotion>
</circle>
</svg>

<div className="relative z-10 bg-white p-6 border border-zinc-100 shadow-[0_0_30px_rgba(0,0,0,0.05)] rounded-full">
<svg className="w-10 h-10 text-zinc-900" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0ZM50 5V95M50 5L12 28V72L50 95L88 72V28L50 5Z" fill-rule="evenodd"></path>
</svg>
</div>

<div className="absolute top-[5%] left-1/2 -translate-x-1/2 group">
<div className="bg-white px-5 py-2 border border-zinc-100 rounded-sm shadow-sm hover:border-zinc-900 transition-all cursor-crosshair">
<span className="text-xs font-medium tracking-wide text-zinc-800 uppercase">Treasury</span>
</div>
</div>
<div className="absolute bottom-[10%] left-[10%] group">
<div className="bg-white px-5 py-2 border border-zinc-100 rounded-sm shadow-sm hover:border-zinc-900 transition-all cursor-crosshair">
<span className="text-xs font-medium tracking-wide text-zinc-800 uppercase">Real Estate</span>
</div>
</div>
<div className="absolute bottom-[10%] right-[10%] group">
<div className="bg-white px-5 py-2 border border-zinc-100 rounded-sm shadow-sm hover:border-zinc-900 transition-all cursor-crosshair">
<span className="text-xs font-medium tracking-wide text-zinc-800 uppercase">Venture</span>
</div>
</div>
<div className="absolute top-[35%] left-[0%] group">
<div className="bg-white px-5 py-2 border border-zinc-100 rounded-sm shadow-sm hover:border-zinc-900 transition-all cursor-crosshair">
<span className="text-xs font-medium tracking-wide text-zinc-800 uppercase">Custody</span>
</div>
</div>
<div className="absolute top-[35%] right-[0%] group">
<div className="bg-white px-5 py-2 border border-zinc-100 rounded-sm shadow-sm hover:border-zinc-900 transition-all cursor-crosshair">
<span className="text-xs font-medium tracking-wide text-zinc-800 uppercase">Banking</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-zinc-400">
<div className="mb-6 md:mb-0 font-medium">
                    © 2026 Opulence Inc. All rights reserved.
                </div>
<div className="flex space-x-8">
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Disclosures</a>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-[100] hidden bg-zinc-950 text-white flex items-center justify-center opacity-0 transition-opacity duration-700" id="portal-view">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>

<button className="absolute top-10 right-10 text-zinc-600 hover:text-white transition-colors" onclick="togglePortal()">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="x"></i>
</button>

<div className="relative w-full max-w-sm p-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-sm">
<div className="flex justify-center mb-12">
<svg className="w-12 h-12 text-zinc-100" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0ZM50 5V95M50 5L12 28V72L50 95L88 72V28L50 5Z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="text-center mb-12 space-y-2">
<div className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Secure Environment</div>
<h1 className="text-xl font-light tracking-tight text-white">Client Portal</h1>
</div>
<form className="space-y-8" onsubmit="event.preventDefault();">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-zinc-800 py-2 text-zinc-100 focus:outline-none focus:border-zinc-400 transition-colors text-sm font-light z-10 relative" placeholder=" " required="" type="email"/>
<label className="absolute left-0 -top-3.5 text-[10px] text-zinc-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-zinc-400">Identity</label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-zinc-800 py-2 text-zinc-100 focus:outline-none focus:border-zinc-400 transition-colors text-sm font-light z-10 relative" placeholder=" " required="" type="password"/>
<label className="absolute left-0 -top-3.5 text-[10px] text-zinc-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-zinc-400">Passkey</label>
</div>
<div className="pt-4">
<button className="w-full bg-white text-zinc-950 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
<span>Decrypt &amp; Enter</span>
</button>
</div>
</form>
<div className="mt-8 text-center">
<p className="text-[9px] text-zinc-600 uppercase tracking-widest">For authorized partners of the Opulence ecosystem.</p>
</div>
</div>
</div>



    </>
  );
}
