import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('border-white/10');
                navbar.classList.add('bg-black/80');
            } else {
                navbar.classList.remove('border-white/10');
                navbar.classList.remove('bg-black/80');
            }
        });

        // Scroll Reveal Animation
        const reveals = document.querySelectorAll('.reveal');

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

        // Mouse Spotlight Effect on Cards
        const cards = document.querySelectorAll('.glass-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08), rgba(255,255,255,0.03))`;
                card.style.borderColor = `rgba(255,255,255,0.15)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.background = 'rgba(255, 255, 255, 0.03)';
                card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-green-900/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10">

<div className="flex items-center gap-8">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
<i className="w-5 h-5 animate-spin-slow" data-lucide="snowflake"></i>
</div>
<span className="font-semibold tracking-tight text-lg group-hover:text-green-400 transition-colors">match-trade</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">About us</a>
<a className="hover:text-white transition-colors" href="#">Ecosystem</a>
<a className="hover:text-white transition-colors" href="#">News</a>
</div>
</div>

<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
<i className="w-4 h-4" data-lucide="globe"></i> EN
                </button>
<a className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/5 hover:border-white/20" href="#">
                    Contact
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 overflow-hidden">

<section className="max-w-7xl mx-auto px-6 relative">

<div className="absolute inset-0 -z-10 bg-grid h-[800px] pointer-events-none"></div>
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">

<div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-green-400 uppercase tracking-wider">Trade Smarter, Grow Faster</span>
<i className="w-3 h-3 text-neutral-500" data-lucide="arrow-right"></i>
</div>

<h1 className="reveal text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                    Trading Platform for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-green-400">Forex &amp; Prop</span>
</h1>

<p className="reveal text-lg text-neutral-400 max-w-2xl mb-10 leading-relaxed">
                    Match-Trader is a standalone trading platform tailored to <br className="hidden md:block"/> Forex and Prop trading specifics.
                </p>

<div className="reveal flex flex-col sm:flex-row items-center gap-4">
<button className="flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-2xl font-medium hover:scale-105 transition-transform duration-200">
<i className="w-6 h-6 fill-current" data-lucide="apple"></i>
<div className="text-left leading-none">
<span className="text-[10px] uppercase font-bold text-neutral-500 block mb-0.5">Download on the</span>
<span className="text-sm font-bold">App Store</span>
</div>
</button>
<button className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 text-white px-6 py-3.5 rounded-2xl font-medium hover:bg-neutral-800 hover:scale-105 transition-all duration-200">
<i className="w-6 h-6 fill-current" data-lucide="play"></i>
<div className="text-left leading-none">
<span className="text-[10px] uppercase font-bold text-neutral-500 block mb-0.5">Get it on</span>
<span className="text-sm font-bold">Google Play</span>
</div>
</button>
</div>
</div>

<div className="reveal relative w-full h-[500px] md:h-[600px] mt-10 select-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-500/10 blur-[80px] rounded-full"></div>

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 400">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(74, 222, 128, 0.2)"></stop>
<stop offset="100%" stop-color="rgba(74, 222, 128, 0)"></stop>
</lineargradient>
</defs>
<path className="chart-line" d="M0,350 Q100,350 200,300 T400,250 T600,150 T800,200 T1000,100" fill="none" stroke="#4ade80" strokeWidth="2"></path>
<path d="M0,350 Q100,350 200,300 T400,250 T600,150 T800,200 T1000,100 V400 H0 Z" fill="url(#chartGradient)" style={{opacity: '0.3'}}></path>
</svg>
</div>

<div className="absolute left-[5%] md:left-[10%] top-[20%] w-64 glass-card rounded-3xl p-5 animate-float z-10 hidden md:block">
<div className="flex justify-between items-start mb-6">
<div className="space-y-1">
<p className="text-xs text-neutral-400 font-medium">Total Balance</p>
<p className="text-2xl font-bold tracking-tight">$24,593.00</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
<i className="w-4 h-4 text-green-400" data-lucide="wallet"></i>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Equity</span>
<span className="font-medium">$24,593.00</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[70%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs pt-1">
<span className="text-neutral-500">Margin Level</span>
<span className="font-medium text-green-400">1450%</span>
</div>
</div>
</div>

<div className="absolute left-1/2 top-[40%] -translate-x-1/2 glass-card px-4 py-2 rounded-xl flex items-center gap-3 z-20 animate-pulse-glow">
<div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
<div className="flex flex-col">
<span className="text-[10px] text-neutral-400 uppercase font-semibold">EUR/USD</span>
<span className="text-sm font-mono font-bold text-white">1.0924</span>
</div>
</div>

<div className="absolute right-[5%] md:right-[15%] top-[30%] w-72 glass-card rounded-3xl p-5 animate-float-delayed z-10 hidden md:block">
<div className="flex gap-2 mb-4 bg-black/40 p-1 rounded-xl">
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg bg-neutral-800 text-white shadow-sm">Market</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg text-neutral-500 hover:text-white">Pending</button>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="bg-neutral-900/50 rounded-xl p-3 border border-neutral-800 text-center">
<span className="text-[10px] text-neutral-500 block mb-1">Sell</span>
<span className="text-lg font-medium text-white">1.0921</span>
</div>
<div className="bg-neutral-900/50 rounded-xl p-3 border border-neutral-800 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-green-500/10"></div>
<span className="text-[10px] text-green-400 block mb-1">Buy</span>
<span className="text-lg font-medium text-white">1.0924</span>
</div>
</div>
<button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-2.5 rounded-xl text-sm transition-colors">
                        Place Order
                    </button>
</div>
</div>

<div className="reveal mt-0 md:mt-10 border-t border-white/5 pt-10">
<p className="text-center text-sm text-neutral-500 mb-8 font-medium">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-lg font-semibold"><i className="fill-current text-white" data-lucide="triangle"></i> Velocity</div>
<div className="flex items-center gap-2 text-lg font-semibold"><i className="fill-current text-white" data-lucide="zap"></i> Synergy</div>
<div className="flex items-center gap-2 text-lg font-semibold"><i className="fill-current text-white" data-lucide="hexagon"></i> Stellar</div>
<div className="flex items-center gap-2 text-lg font-semibold"><i className="fill-current text-white" data-lucide="codesandbox"></i> Enigma</div>
<div className="flex items-center gap-2 text-lg font-semibold"><i className="fill-current text-white" data-lucide="wifi"></i> Spectrum</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="reveal lg:col-span-5 glass-card rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden min-h-[500px] group">
<div className="relative z-10">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-6">
<i className="w-3 h-3 text-green-400" data-lucide="users"></i> Innovators at heart
                        </div>
<h2 className="text-4xl font-semibold mb-6">Who we are</h2>
<p className="text-neutral-400 leading-relaxed text-sm mb-8">
                            Match-Trade Technologies offers clients worldwide access to an in-house technology ecosystem built around our proprietary trading platform - Match-Trader, available as Server and White Label.
                        </p>
<div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
<h4 className="text-green-400 font-medium mb-2 text-sm">All-in-One Trading Ecosystem</h4>
<p className="text-xs text-neutral-500 leading-relaxed">
                                Our platform provides a fully integrated technology stack designed for modern brokerages, ensuring seamless operations and scalability.
                            </p>
</div>
</div>

<div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
<div className="w-full h-full border border-white/20 rounded-full animate-[spin_20s_linear_infinite] relative">
<div className="absolute inset-2 border border-dashed border-white/20 rounded-full"></div>
<div className="absolute inset-8 border border-white/10 rounded-full"></div>
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
<div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/10"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-900/20 to-transparent pointer-events-none"></div>
</div>

<div className="lg:col-span-7 space-y-6">

<div className="reveal flex justify-between items-end mb-4 px-2">
<div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-4">
<i className="w-3 h-3 text-green-400" data-lucide="package"></i> Portfolio
                            </div>
<h2 className="text-4xl font-semibold">Our Products</h2>
</div>
</div>

<div className="reveal glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-10 opacity-20">
<i className="w-32 h-32 text-white" data-lucide="layout-template"></i>
</div>
<div className="relative z-10 max-w-md">
<span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mb-2 block">White Label</span>
<h3 className="text-2xl font-semibold mb-3 group-hover:text-green-400 transition-colors">Match-Trader WL Platform</h3>
<p className="text-sm text-neutral-400 mb-8">Complete Forex White Label with own branded mobile app available in stores and via browser.</p>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="monitor"></i>
</div>
<div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
<i className="w-5 h-5 text-green-400" data-lucide="cloud"></i>
</div>
</div>
</div>
</div>

<div className="reveal glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group bg-gradient-to-br from-white/5 to-transparent">

<div className="absolute right-0 bottom-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1">
<span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mb-2 block">Trading</span>
<h3 className="text-2xl font-semibold mb-3 group-hover:text-green-400 transition-colors">Prop Trading Software</h3>
<p className="text-sm text-neutral-400 mb-6">Start your own proprietary trading business using our award-winning Match-Trader trading platform.</p>
<div className="flex gap-3">
<div className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="shield"></i> Secure
                                    </div>
<div className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="zap"></i> Fast
                                    </div>
</div>
</div>

<div className="w-full md:w-48 h-32 bg-neutral-900/80 rounded-2xl border border-white/10 flex items-center justify-center relative shadow-2xl">
<div className="absolute inset-0 bg-green-500/5 rounded-2xl"></div>
<div className="text-center">
<div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black mx-auto mb-2 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
<span className="font-bold text-lg">A</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 mb-20">
<div className="flex items-center justify-between mb-8 px-2">
<h3 className="text-2xl font-semibold text-neutral-200">Integrations</h3>
<a className="text-sm text-neutral-500 hover:text-white flex items-center gap-1 transition-colors" href="#">
                        Show More <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="reveal glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4 text-center group cursor-pointer hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-green-500/50 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-green-400 transition-colors" data-lucide="webhook"></i>
</div>
<div>
<h4 className="font-medium text-sm text-white">B2Broker</h4>
<p className="text-[10px] text-neutral-500 mt-1">Liquidity Provider</p>
</div>
</div>

<div className="reveal glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4 text-center group cursor-pointer hover:-translate-y-1 transition-transform" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-green-500/50 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-green-400 transition-colors" data-lucide="layers"></i>
</div>
<div>
<h4 className="font-medium text-sm text-white">FPFX Tech</h4>
<p className="text-[10px] text-neutral-500 mt-1">Prop CRM</p>
</div>
</div>

<div className="reveal glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4 text-center group cursor-pointer hover:-translate-y-1 transition-transform" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-green-500/50 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-green-400 transition-colors" data-lucide="anchor"></i>
</div>
<div>
<h4 className="font-medium text-sm text-white">Centroid</h4>
<p className="text-[10px] text-neutral-500 mt-1">Bridge &amp; Liquidity</p>
</div>
</div>

<div className="reveal glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4 text-center group cursor-pointer hover:-translate-y-1 transition-transform" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-green-500/50 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-green-400 transition-colors" data-lucide="box"></i>
</div>
<div>
<h4 className="font-medium text-sm text-white">PrimeXM</h4>
<p className="text-[10px] text-neutral-500 mt-1">Bridge &amp; Liquidity</p>
</div>
</div>
</div>
</div>

<div className="reveal text-center pb-20 pt-10 border-t border-white/5">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-6">
<i className="w-3 h-3 text-green-400" data-lucide="check-circle"></i> Benefits
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to upgrade your<br/>trading environment?</h2>
<button className="bg-green-500 text-black px-8 py-4 rounded-full font-bold hover:bg-green-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    Book a Demo
                </button>
</div>
</section>
</main>


    </>
  );
}
