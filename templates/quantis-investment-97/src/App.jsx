import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
q_black: '#0A0A0A',
q_graphite: '#5C5C5C',
q_acid: '#FF3800',
q_bone: '#F4F4F0',
q_white: '#FFFFFF',
},
fontFamily: {
display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
body: ['"Inter"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
transitionTimingFunction: {
'swiss': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Scroll Reveal Observer
            const revealElements = document.querySelectorAll('.reveal');
            const lineElements = document.querySelectorAll('.draw-line, .draw-line-y');
            
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Trigger lines inside revealed elements
                        const lines = entry.target.querySelectorAll('.draw-line, .draw-line-y');
                        lines.forEach(line => line.classList.add('active'));
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            revealElements.forEach(el => revealObserver.observe(el));

            // Decimal Counter Observer
            const counters = document.querySelectorAll('.counter');
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalValue = parseFloat(target.getAttribute('data-target'));
                        const decimals = target.hasAttribute('data-decimals') ? parseInt(target.getAttribute('data-decimals')) : 2;
                        const duration = 2000; // ms
                        const start = performance.now();
                        
                        const updateCounter = (currentTime) => {
                            const elapsed = currentTime - start;
                            const progress = Math.min(elapsed / duration, 1);
                            // Ease out cubic
                            const easeProgress = 1 - Math.pow(1 - progress, 3);
                            
                            const currentVal = (finalValue * easeProgress).toFixed(decimals);
                            target.innerText = currentVal;

                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            } else {
                                target.innerText = finalValue.toFixed(decimals);
                            }
                        };
                        
                        requestAnimationFrame(updateCounter);
                        observer.unobserve(target); // Run once
                    }
                });
            }, { threshold: 0.5 });

            counters.forEach(counter => counterObserver.observe(counter));

            // Navbar scroll effect
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('bg-q_bone', 'border-q_graphite/20');
                    nav.classList.remove('bg-q_bone/90', 'border-transparent');
                } else {
                    nav.classList.add('bg-q_bone/90', 'border-transparent');
                    nav.classList.remove('bg-q_bone', 'border-q_graphite/20');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-noise"></div>

<nav className="fixed top-0 left-0 w-full z-40 bg-q_bone/90 backdrop-blur-md border-b border-q_graphite/20 transition-all duration-300">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] h-20 flex items-center justify-between">

<a className="font-display font-semibold text-[clamp(1.25rem,2vw,1.5rem)] track-tighter uppercase flex items-center gap-2 group" href="#">
<svg className="text-q_black group-hover:text-q_acid transition-colors duration-300" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M2 22L12 2L22 22H17L12 12L7 22H2Z" fill="currentColor"></path>
</svg>
                Quantis
            </a>

<div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase track-widest text-q_graphite">
<a className="hover:text-q_black transition-colors" href="#thesis">Thesis</a>
<a className="hover:text-q_black transition-colors" href="#performance">Performance</a>
<a className="hover:text-q_black transition-colors" href="#allocation">Allocation</a>
<a className="hover:text-q_black transition-colors" href="#insights">Insights</a>
</div>

<a className="hidden sm:inline-block relative px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,2vw,1rem)] font-mono font-medium text-xs uppercase track-widest text-q_bone bg-q_black clip-button overflow-hidden group transition-all duration-300 hover:bg-q_acid" href="#onboarding">
<span className="relative z-10">Initiate Strategy</span>
</a>

<button className="md:hidden text-q_black text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-tech-grid opacity-50 z-0 pointer-events-none"></div>
<svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">

<circle className="grid-node" cx="20%" cy="30%" fill="#5C5C5C" r="2" style={{animationDelay: '0s'}}></circle>
<circle className="grid-node" cx="80%" cy="40%" fill="#5C5C5C" r="2" style={{animationDelay: '1s'}}></circle>
<circle className="grid-node" cx="60%" cy="70%" fill="#5C5C5C" r="2" style={{animationDelay: '2s'}}></circle>
<circle className="grid-node" cx="30%" cy="80%" fill="#5C5C5C" r="2" style={{animationDelay: '0.5s'}}></circle>
<line stroke="#5C5C5C" stroke-dasharray="2 2" strokeWidth="0.5" x1="20%" x2="80%" y1="30%" y2="40%"></line>
<line stroke="#5C5C5C" stroke-dasharray="2 2" strokeWidth="0.5" x1="80%" x2="60%" y1="40%" y2="70%"></line>
<line stroke="#5C5C5C" stroke-dasharray="2 2" strokeWidth="0.5" x1="60%" x2="30%" y1="70%" y2="80%"></line>
<line stroke="#5C5C5C" stroke-dasharray="2 2" strokeWidth="0.5" x1="30%" x2="20%" y1="80%" y2="30%"></line>
</svg>
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] w-full relative z-10 grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)]">

<div className="col-span-12 lg:col-span-8 reveal">
<h1 className="font-display font-semibold text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] track-tighter text-q_black mb-[clamp(1.5rem,3vw,2.5rem)] uppercase">
                    Outperform<br/>The Index.<br/>
<span className="text-q_graphite">Protect The Principal.</span>
</h1>
<p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed text-q_graphite max-w-[55ch] mb-[clamp(2.5rem,5vw,4rem)]">
                    Institutional-grade asset management built for uncompromising growth. We architect high-yield portfolios that weather volatility.
                </p>
<div className="flex flex-wrap items-center gap-6">
<a className="relative px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,2vw,1rem)] font-mono font-medium text-sm md:text-base uppercase track-widest text-q_bone bg-q_acid clip-button overflow-hidden group transition-all duration-300 hover:bg-q_black hover:-translate-y-1" href="#onboarding">
                        Secure Your Allocation
                    </a>
<a className="font-mono text-xs uppercase track-widest text-q_black border-b border-q_black pb-1 hover:text-q_acid hover:border-q_acid transition-colors duration-300" href="#performance">
                        Examine Historical Yields
                    </a>
</div>
<div className="mt-[clamp(3rem,6vw,5rem)] flex items-center gap-4 border-t border-q_graphite/20 pt-6">
<iconify-icon className="text-q_acid text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<p className="font-mono text-xs uppercase track-widest text-q_graphite">
                        Fiduciary duty bound. $4.2B AUM. No hidden layers.
                    </p>
</div>
</div>

<div className="hidden lg:flex col-span-4 flex-col justify-end pb-12 reveal" style={{transitionDelay: '0.2s'}}>
<div className="border-l border-q_graphite/20 pl-8 space-y-8">
<div>
<div className="font-mono text-xs uppercase track-widest text-q_graphite mb-2">Live Modeled ROI (YTD)</div>
<div className="font-display font-semibold text-[clamp(2rem,3vw,3rem)] track-tighter text-q_acid flex items-baseline gap-1">
                            +<span className="counter" data-target="18.42">0.00</span>%
                            <span className="w-2 h-2 rounded-full bg-q_acid animate-pulse mb-4"></span>
</div>
</div>
<div>
<div className="font-mono text-xs uppercase track-widest text-q_graphite mb-2">System Status</div>
<div className="font-mono text-sm text-q_black flex items-center gap-2">
<iconify-icon className="text-q_acid" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
                            Algorithmic Deployment Active
                        </div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-q_black border-y border-q_graphite/30 overflow-hidden py-3">
<div className="marquee-container font-mono text-xs uppercase track-widest text-q_bone">

<div className="flex-shrink-0 flex items-center gap-12 px-6">
<span>// AUM: $4.2B+</span>
<span>// Q3 YIELD: <span className="text-q_acid">+12.4%</span></span>
<span>// INSTITUTIONS TRUSTED: 148</span>
<span>// ACTIVE STRATEGIES: 12</span>
<span>// SHARPE RATIO: 2.1</span>
<span>// AUM: $4.2B+</span>
<span>// Q3 YIELD: <span className="text-q_acid">+12.4%</span></span>
<span>// INSTITUTIONS TRUSTED: 148</span>
<span>// ACTIVE STRATEGIES: 12</span>
<span>// SHARPE RATIO: 2.1</span>
</div>
</div>
</div>

<section className="py-[clamp(5rem,10vw,10rem)] relative" id="thesis">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] relative">

<div className="absolute left-[clamp(1.5rem,5vw,4rem)] top-0 bottom-0 w-[1px] bg-q_graphite/20 hidden lg:block">
<div className="w-full bg-q_acid draw-line-y scroll-trigger"></div>
</div>

<div className="col-span-12 lg:col-span-4 lg:pl-12 reveal">
<div className="font-mono text-[10px] md:text-xs uppercase track-widest text-q_graphite mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-q_acid">
                    [SEC.01_THESIS]
                </div>
</div>

<div className="col-span-12 lg:col-span-8 reveal" style={{transitionDelay: '0.1s'}}>
<h2 className="font-display font-semibold text-[clamp(2rem,5vw,4rem)] leading-[1.1] track-tight text-q_black mb-[clamp(1.5rem,3vw,2.5rem)] max-w-[20ch]">
                    The 60/40 Portfolio is <span className="scramble inline-block cursor-crosshair transition-colors duration-200">Dead Weight.</span>
</h2>
<div className="w-full h-[1px] bg-q_graphite/20 mb-[clamp(1.5rem,3vw,2.5rem)]">
<div className="h-full bg-q_graphite draw-line scroll-trigger"></div>
</div>
<p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed text-q_graphite max-w-[55ch]">
                    Inflation erodes cash. Equities face unprecedented volatility. Traditional asset allocation is designed to <span className="scramble inline-block cursor-crosshair transition-colors duration-200">fail slowly.</span> You need a mathematically superior edge.
                </p>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vw,10rem)] bg-q_white border-y border-q_graphite/20 overflow-hidden relative group" id="infrastructure">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-q_bone/50 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto pl-[clamp(1.5rem,5vw,4rem)] grid grid-cols-12 items-center relative z-10">

<div className="col-span-12 lg:col-span-4 pr-[clamp(1.5rem,5vw,4rem)] pb-12 lg:pb-0 reveal">
<div className="font-mono text-[10px] md:text-xs uppercase track-widest text-q_graphite mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-q_acid">
                    [SEC.02_INFRASTRUCTURE]
                </div>
<h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] track-tight text-q_black mb-6">
                    Unprecedented Signal Clarity.
                </h2>
<p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed text-q_graphite mb-8">
                    Monitor real-time capital deployment, stress-test your portfolio against macro events, and view tax-harvesting opportunities with granular precision.
                </p>
<div className="flex items-center gap-4 font-mono text-xs uppercase track-widest text-q_black">
<iconify-icon className="text-q_acid text-xl" icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon>
                    Proprietary Interface
                </div>
</div>

<div className="col-span-12 lg:col-span-8 reveal" style={{transitionDelay: '0.2s'}}>
<div className="bg-q_bone border-t border-l border-q_graphite/20 p-8 shadow-2xl translate-x-[5%] lg:translate-x-0 relative">

<div className="flex justify-between items-center mb-8 border-b border-q_graphite/20 pb-4">
<div className="font-mono text-xs text-q_black uppercase track-widest">Client Portal / Overview</div>
<div className="flex gap-2">
<div className="w-3 h-3 bg-q_graphite rounded-full"></div>
<div className="w-3 h-3 bg-q_graphite rounded-full"></div>
<div className="w-3 h-3 bg-q_acid rounded-full"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-6">

<div className="bg-q_white border border-q_graphite/20 p-6">
<div className="font-mono text-[10px] text-q_graphite uppercase track-widest mb-4">Sector Heatmap</div>
<div className="grid grid-cols-4 gap-1 h-32">
<div className="bg-q_black/90"></div><div className="bg-q_black/80"></div><div className="bg-q_acid/80"></div><div className="bg-q_black/70"></div>
<div className="bg-q_black/60"></div><div className="bg-q_acid/60"></div><div className="bg-q_black/50"></div><div className="bg-q_black/80"></div>
<div className="bg-q_acid"></div><div className="bg-q_black/40"></div><div className="bg-q_black/70"></div><div className="bg-q_black/90"></div>
</div>
</div>

<div className="bg-q_white border border-q_graphite/20 p-6 flex flex-col justify-between">
<div className="font-mono text-[10px] text-q_graphite uppercase track-widest mb-2">Alpha Generation</div>
<div className="font-display font-medium text-3xl text-q_black">+$840M</div>
<svg className="w-full h-16 mt-4" preserveaspectratio="none" viewbox="0 0 100 30">
<path className="dash-anim" d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,5 L60,10 L70,2 L80,8 L90,0 L100,5" fill="none" stroke="#FF3800" strokeWidth="1.5"></path>
<path d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,5 L60,10 L70,2 L80,8 L90,0 L100,5 L100,30 Z" fill="url(#grad)" opacity="0.2"></path>
<defs>
<lineargradient id="grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#FF3800"></stop>
<stop offset="100%" stop-color="#FF3800" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="col-span-2 bg-q_white border border-q_graphite/20 p-6">
<div className="font-mono text-[10px] text-q_graphite uppercase track-widest mb-4 border-b border-q_graphite/20 pb-2 flex justify-between">
<span>Asset</span><span>Weight</span><span>Variance</span>
</div>
<div className="space-y-3 font-mono text-xs">
<div className="flex justify-between items-center"><span className="text-q_black">Global Sovereign Debt</span><span className="text-q_graphite">42.5%</span><span className="text-q_acid">+1.2%</span></div>
<div className="w-full h-[1px] bg-q_graphite/10"></div>
<div className="flex justify-between items-center"><span className="text-q_black">Distressed Tech Eq.</span><span className="text-q_graphite">28.0%</span><span className="text-q_black">-0.4%</span></div>
<div className="w-full h-[1px] bg-q_graphite/10"></div>
<div className="flex justify-between items-center"><span className="text-q_black">Market-Neutral Algo</span><span className="text-q_graphite">29.5%</span><span className="text-q_acid">+3.8%</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vw,10rem)] bg-q_bone" id="performance">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="mb-[clamp(3rem,6vw,6rem)] max-w-[65ch] reveal">
<div className="font-mono text-[10px] md:text-xs uppercase track-widest text-q_graphite mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-q_acid">
                    [SEC.03_METRICS]
                </div>
<h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] track-tight text-q_black mb-4">
                    Engineered for Absolute Return.
                </h2>
<p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] text-q_graphite">
                    Our algorithmic and human-led models identify asymmetrical risk-reward scenarios globally.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-q_graphite/20 reveal" style={{transitionDelay: '0.2s'}}>

<div className="border-b border-r border-q_graphite/20 bg-q_white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-q_acid hover:relative hover:z-10 transition-all duration-500 ease-swiss group card">
<div className="font-display font-medium text-[clamp(3rem,5vw,4.5rem)] track-tighter text-q_black mb-2 flex items-baseline">
<span className="counter" data-target="24.8">0.0</span>%
                    </div>
<div className="w-12 h-[1px] bg-q_graphite/50 mb-4 group-hover:bg-q_acid transition-colors duration-300"></div>
<div className="font-mono text-xs uppercase track-widest text-q_graphite group-hover:text-q_black transition-colors duration-300">5-Year Annualized</div>
</div>

<div className="border-b border-r border-q_graphite/20 bg-q_white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-q_acid hover:relative hover:z-10 transition-all duration-500 ease-swiss group card">
<div className="font-display font-medium text-[clamp(3rem,5vw,4.5rem)] track-tighter text-q_black mb-2 flex items-baseline">
<span className="counter" data-target="0.03">0.00</span>
</div>
<div className="w-12 h-[1px] bg-q_graphite/50 mb-4 group-hover:bg-q_acid transition-colors duration-300"></div>
<div className="font-mono text-xs uppercase track-widest text-q_graphite group-hover:text-q_black transition-colors duration-300">Beta to S&amp;P 500</div>
</div>

<div className="border-b border-r border-q_graphite/20 bg-q_white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-q_acid hover:relative hover:z-10 transition-all duration-500 ease-swiss group card">
<div className="font-display font-medium text-[clamp(3rem,5vw,4.5rem)] track-tighter text-q_black mb-2 flex items-baseline">
                        $<span className="counter" data-decimals="0" data-target="840">0</span>M
                    </div>
<div className="w-12 h-[1px] bg-q_graphite/50 mb-4 group-hover:bg-q_acid transition-colors duration-300"></div>
<div className="font-mono text-xs uppercase track-widest text-q_graphite group-hover:text-q_black transition-colors duration-300">Alpha Generated (YTD)</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vw,10rem)]" id="allocation">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-[clamp(3rem,6vw,6rem)] reveal">
<div>
<div className="font-mono text-[10px] md:text-xs uppercase track-widest text-q_graphite mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-q_acid">
                        [SEC.04_STRATEGIES]
                    </div>
<h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] track-tight text-q_black mb-4">
                        Bespoke Deployment Vectors.
                    </h2>
<p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] text-q_graphite max-w-[50ch]">
                        Select from our core institutional frameworks, adapted for the aggressive private wealth builder.
                    </p>
</div>
<iconify-icon className="text-4xl text-q_graphite/50" icon="solar:chart-square-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(1.5rem,3vw,2.5rem)]">

<div className="border border-q_graphite/20 bg-q_white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-q_acid transition-all duration-400 ease-swiss group card reveal">
<div className="flex justify-between items-start mb-16">
<div className="font-mono text-xs uppercase track-widest text-q_graphite group-hover:text-q_acid transition-colors">01.</div>
<svg fill="none" height="40" viewbox="0 0 40 40" width="40">
<path className="dash-anim" d="M5 20H15L20 5L25 35L30 20H35" stroke="#0A0A0A" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="font-display font-medium text-2xl text-q_black mb-4 track-tight">Quantis Alpha</h3>
<p className="font-body text-q_graphite text-sm md:text-base leading-relaxed">
                        Market-neutral algorithmic equity trading utilizing high-frequency sentiment analysis.
                    </p>
</div>

<div className="border border-q_graphite/20 bg-q_white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-q_acid transition-all duration-400 ease-swiss group card reveal" style={{transitionDelay: '0.1s'}}>
<div className="flex justify-between items-start mb-16">
<div className="font-mono text-xs uppercase track-widest text-q_graphite group-hover:text-q_acid transition-colors">02.</div>
<svg fill="none" height="40" viewbox="0 0 40 40" width="40">
<circle className="dash-anim" cx="20" cy="20" r="15" stroke="#0A0A0A" stroke-dasharray="4 4" strokeWidth="1.5"></circle>
<path d="M10 20H30" stroke="#0A0A0A" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="font-display font-medium text-2xl text-q_black mb-4 track-tight">Global Macro</h3>
<p className="font-body text-q_graphite text-sm md:text-base leading-relaxed">
                        Exploiting inefficiencies in sovereign debt and FX through geopolitical threat modeling.
                    </p>
</div>

<div className="border border-q_graphite/20 bg-q_white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-q_acid transition-all duration-400 ease-swiss group card reveal" style={{transitionDelay: '0.2s'}}>
<div className="flex justify-between items-start mb-16">
<div className="font-mono text-xs uppercase track-widest text-q_graphite group-hover:text-q_acid transition-colors">03.</div>
<svg fill="none" height="40" viewbox="0 0 40 40" width="40">
<rect className="dash-anim" height="20" stroke="#0A0A0A" strokeWidth="1.5" width="10" x="5" y="15"></rect>
<rect className="dash-anim" height="30" stroke="#0A0A0A" strokeWidth="1.5" width="10" x="25" y="5"></rect>
</svg>
</div>
<h3 className="font-display font-medium text-2xl text-q_black mb-4 track-tight">Private Credit</h3>
<p className="font-body text-q_graphite text-sm md:text-base leading-relaxed">
                        High-yield, collateralized lending to mid-market technology infrastructure firms.
                    </p>
</div>

<div className="border border-q_graphite/20 bg-q_white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-q_acid transition-all duration-400 ease-swiss group card reveal" style={{transitionDelay: '0.3s'}}>
<div className="flex justify-between items-start mb-16">
<div className="font-mono text-xs uppercase track-widest text-q_graphite group-hover:text-q_acid transition-colors">04.</div>
<svg fill="none" height="40" viewbox="0 0 40 40" width="40">
<path className="dash-anim" d="M5 35L35 5M35 5H15M35 5V25" stroke="#0A0A0A" strokeLinejoin="bevel" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="font-display font-medium text-2xl text-q_black mb-4 track-tight">Venture Secondary</h3>
<p className="font-body text-q_graphite text-sm md:text-base leading-relaxed">
                        Acquiring distressed tech equity at deep discounts from early liquidity seekers.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vw,10rem)] bg-q_black text-q_white relative overflow-hidden dark-section" id="insights">

<div className="bg-noise absolute inset-0"></div>
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] relative z-10 grid grid-cols-12">
<div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center flex flex-col items-center reveal">
<div className="font-mono text-[10px] md:text-xs uppercase track-widest text-q_graphite mb-8 flex items-center justify-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-q_white after:content-[''] after:w-8 after:h-[1px] after:bg-q_white">
                    Intelligence Report
                </div>
<h2 className="font-display font-semibold text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] track-tighter mb-6">
                    Read our Q4 Macroeconomic Threat Assessment.
                </h2>
<p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] text-q_graphite max-w-[55ch] mb-12">
                    How we are re-allocating $1.2B ahead of upcoming central bank liquidity drains.
                </p>
<a className="relative px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,2vw,1rem)] font-mono font-medium text-sm md:text-base uppercase track-widest text-q_black bg-q_white clip-button overflow-hidden group transition-all duration-300 hover:bg-q_acid hover:text-q_white focus:ring-2 focus:ring-q_acid focus:ring-offset-2 focus:ring-offset-q_black" href="#">
<span className="relative z-10 flex items-center gap-3">
                        Download Intelligence
                        <iconify-icon icon="solar:download-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="py-[clamp(8rem,15vw,15rem)] relative overflow-hidden" id="onboarding">

<div className="absolute inset-0 bg-tech-grid opacity-70 z-0 pointer-events-none" style={{backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-q_bone/50 to-q_bone z-0"></div>
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] relative z-10 text-center flex flex-col items-center reveal">
<h2 className="font-display font-semibold text-[clamp(3rem,8vw,7rem)] leading-[0.9] track-tighter text-q_black mb-6 uppercase">
                Stop Leaving<br/><span className="text-q_acid">Alpha</span> On The Table.
            </h2>
<p className="font-body text-[clamp(1rem,1.2vw,1.25rem)] text-q_graphite max-w-[50ch] mb-10">
                Capacity for our Q1 fund vintage is strictly limited. Initiate dialogue with our allocation directors today.
            </p>
<a className="relative px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.5rem)] font-mono font-semibold text-sm md:text-lg uppercase track-widest text-q_bone bg-q_black clip-button overflow-hidden group transition-all duration-300 hover:bg-q_acid hover:scale-105 active:scale-95 shadow-2xl shadow-q_acid/20" href="#">
<span className="relative z-10">Request Prospectus &amp; Allocation</span>
</a>
<div className="mt-8 font-mono text-[10px] uppercase track-widest text-q_graphite flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
                Minimum deployment: $500,000. Accredited investors only.
            </div>
</div>
</section>

<footer className="border-t border-q_graphite/20 bg-q_bone pt-20 relative overflow-hidden">
<div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32 relative z-10">

<div className="space-y-6">
<a className="font-display font-semibold text-2xl track-tighter uppercase flex items-center gap-2" href="#">
<svg className="text-q_black" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M2 22L12 2L22 22H17L12 12L7 22H2Z" fill="currentColor"></path>
</svg>
                    Quantis
                </a>
<p className="font-mono text-xs uppercase track-widest text-q_graphite max-w-[200px]">
                    Compound Your Legacy. Eliminate the Noise.
                </p>
</div>

<div>
<h4 className="font-mono text-xs uppercase track-widest text-q_black mb-6">Strategies</h4>
<ul className="space-y-4 font-body text-sm text-q_graphite">
<li><a className="hover:text-q_acid transition-colors" href="#">Quantis Alpha</a></li>
<li><a className="hover:text-q_acid transition-colors" href="#">Global Macro</a></li>
<li><a className="hover:text-q_acid transition-colors" href="#">Private Credit</a></li>
<li><a className="hover:text-q_acid transition-colors" href="#">Venture Secondary</a></li>
</ul>
</div>

<div>
<h4 className="font-mono text-xs uppercase track-widest text-q_black mb-6">Portal</h4>
<ul className="space-y-4 font-body text-sm text-q_graphite">
<li><a className="hover:text-q_acid transition-colors" href="#">Client Login</a></li>
<li><a className="hover:text-q_acid transition-colors" href="#">LP Dashboard</a></li>
<li><a className="hover:text-q_acid transition-colors" href="#">Secure Upload</a></li>
</ul>
</div>

<div>
<h4 className="font-mono text-xs uppercase track-widest text-q_black mb-6">Intelligence</h4>
<p className="font-body text-sm text-q_graphite mb-4">Subscribe to our Weekly Macro Thesis.</p>
<form className="flex items-center border-b border-q_graphite/40 pb-2 group focus-within:border-q_acid transition-colors">
<input className="bg-transparent border-none outline-none font-mono text-xs uppercase track-widest text-q_black placeholder:text-q_graphite w-full" placeholder="ENTER EMAIL" required="" type="email"/>
<button className="text-q_black group-hover:text-q_acid transition-colors" type="submit">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
<div className="mt-12 space-y-2 font-mono text-[10px] uppercase track-widest text-q_graphite">
<a className="block hover:text-q_black" href="#">Form ADV</a>
<a className="block hover:text-q_black" href="#">Privacy</a>
<a className="block hover:text-q_black" href="#">Disclosures</a>
</div>
</div>
</div>

<div className="relative z-10 border-t border-q_graphite/10 py-6 text-center font-mono text-[10px] uppercase track-widest text-q_graphite">
            © Quantis Asset Management LLC 2026. All rights reserved.
        </div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-full text-center overflow-hidden pointer-events-none z-0">
<h1 className="font-display font-semibold text-[clamp(10rem,25vw,30rem)] leading-none track-tighter text-q_graphite opacity-5 select-none m-0 p-0">
                QUANTIS
            </h1>
</div>
</footer>



    </>
  );
}
