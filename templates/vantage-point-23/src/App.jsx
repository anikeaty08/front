import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Theme Toggle Logic
        const toggleBtn = document.getElementById('theme-toggle');
        const toggleThumb = toggleBtn.querySelector('.theme-toggle-thumb');
        
        function updateIcon(isLight) {
            // Re-render the correct icon
            toggleThumb.innerHTML = isLight 
                ? '<i data-lucide="sun" class="w-3 h-3 text-[#FF4D00]"></i>' 
                : '<i data-lucide="moon" class="w-3 h-3 text-black"></i>';
            lucide.createIcons();
        }

        // Set initial icon
        updateIcon(false);

        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            updateIcon(isLight);
        });

        // Reveal Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text').forEach(el => {
            observer.observe(el);
        });

        // Ticker Simulation
        function updateTicker() {
            document.querySelectorAll('[id^="nodes-"]').forEach(el => {
                if(Math.random() > 0.7) {
                    let current = parseInt(el.innerText);
                    el.innerText = current + (Math.random() > 0.5 ? 1 : -1);
                }
            });

            document.querySelectorAll('[id^="latency-"]').forEach(el => {
                if(Math.random() > 0.6) {
                    let ms = 10 + Math.floor(Math.random() * 5);
                    el.innerText = ms;
                    el.style.color = ms > 14 ? '#FF4D00' : 'inherit';
                }
            });
            
             document.querySelectorAll('[id^="req-"]').forEach(el => {
                let base = 42000;
                let variation = Math.floor(Math.random() * 500);
                el.innerText = (base + variation).toLocaleString();
            });
        }

        setInterval(updateTicker, 2000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="noise"></div>

<nav className="fixed top-0 w-full z-50 bg-[var(--bg-main)]/80 backdrop-blur-md border-b border-grid transition-colors duration-300">
<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">

<div className="w-1/4">
<a className="text-sm font-bold tracking-[0.2em] text-main hover:opacity-80 transition-opacity" href="#">
                    VANTAGE POINT
                </a>
</div>

<div className="hidden md:flex w-2/4 justify-center gap-8">
<a className="text-xs font-mono text-muted hover:text-main transition-colors uppercase tracking-widest" href="#services">Services</a>
<a className="text-xs font-mono text-muted hover:text-main transition-colors uppercase tracking-widest" href="#work">Work</a>
<a className="text-xs font-mono text-muted hover:text-main transition-colors uppercase tracking-widest" href="#process">Process</a>
<a className="text-xs font-mono text-muted hover:text-main transition-colors uppercase tracking-widest" href="#insights">Insights</a>
</div>

<div className="w-1/4 flex justify-end items-center gap-6">

<button aria-label="Toggle Dark Mode" className="theme-toggle" id="theme-toggle">
<div className="theme-toggle-thumb">

</div>
</button>
<a className="hidden md:flex text-sm font-medium text-main hover:text-[#FF4D00] transition-colors items-center gap-2 group" href="#">
                    Book a Demo
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF4D00]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 border-b border-grid">

<div className="absolute inset-0 z-0 pointer-events-none grid-bg transition-all duration-300"></div>
<div className="relative z-10 max-w-5xl mx-auto text-center">
<div className="reveal-text mb-6 flex justify-center">
<span className="px-3 py-1 border border-[#FF4D00]/30 bg-[#FF4D00]/10 text-[#FF4D00] text-xs font-mono tracking-widest uppercase rounded-sm">
                    System v2.0 Online
                </span>
</div>
<h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight-custom leading-[0.9] mb-8 text-main transition-colors duration-300">
                Infrastructure <br/>
<span className="text-neutral-500">Built to Scale.</span>
</h1>
<p className="reveal-text max-w-2xl mx-auto text-muted text-lg md:text-xl leading-relaxed mb-12 font-light transition-colors duration-300">
                Accelerate your roadmap with battle-tested cloud architecture. We engineer high-performance systems ready for millions of users from Day One.
            </p>
<div className="reveal-text flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-[#FF4D00] text-white font-semibold text-sm hover:bg-[#ff6a2b] transition-all duration-300 btn-glow flex items-center justify-center gap-2 rounded-sm" href="#">
<i className="w-4 h-4" data-lucide="terminal"></i>
                    Start Your Build
                </a>
<a className="btn-secondary w-full sm:w-auto px-8 py-4 bg-transparent font-medium text-sm transition-colors flex items-center justify-center gap-2 rounded-sm" href="#">
                    Book a Demo
                </a>
</div>
</div>
</header>

<div className="w-full border-b border-grid bg-main py-3 overflow-hidden select-none relative z-20 transition-colors duration-300">
<div className="marquee-container flex items-center">
<div className="marquee-content flex gap-12 items-center text-xs font-mono tracking-wider text-[#FF4D00]">

<span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF4D00] rounded-full animate-pulse"></span>ACTIVE NODES: <span id="nodes-1">842</span></span>
<span className="text-neutral-600">//</span>
<span>UPTIME: 99.999%</span>
<span className="text-neutral-600">//</span>
<span>LATENCY: <span id="latency-1">12</span>ms</span>
<span className="text-neutral-600">//</span>
<span>REQUESTS/SEC: <span id="req-1">42,105</span></span>
<span className="text-neutral-600">//</span>
<span>SECURITY: ENCRYPTED</span>
<span className="text-neutral-600">//</span>
<span className="flex items-center gap-2 ml-12"><span className="w-2 h-2 bg-[#FF4D00] rounded-full animate-pulse"></span>ACTIVE NODES: <span id="nodes-2">842</span></span>
<span className="text-neutral-600">//</span>
<span>UPTIME: 99.999%</span>
<span className="text-neutral-600">//</span>
<span>LATENCY: <span id="latency-2">12</span>ms</span>
<span className="text-neutral-600">//</span>
<span>REQUESTS/SEC: <span id="req-2">42,105</span></span>
<span className="text-neutral-600">//</span>
<span>SECURITY: ENCRYPTED</span>
<span className="text-neutral-600">//</span>
</div>
</div>
</div>

<section className="border-b border-grid bg-main transition-colors duration-300" id="services">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-grid">

<div className="p-8 md:p-12 bg-hover transition-colors group">
<div className="font-mono text-[#FF4D00] text-xs mb-6">01</div>
<h3 className="text-2xl font-semibold mb-4 text-main group-hover:translate-x-1 transition-transform">Scalable Cloud Infrastructure</h3>
<p className="text-muted leading-relaxed text-sm">
                    Architecture designed for day one and day one thousand. We build systems that breathe with your user base, auto-scaling seamlessly during traffic spikes.
                </p>
</div>

<div className="p-8 md:p-12 bg-hover transition-colors group">
<div className="font-mono text-[#FF4D00] text-xs mb-6">02</div>
<h3 className="text-2xl font-semibold mb-4 text-main group-hover:translate-x-1 transition-transform">Radical Transparency</h3>
<p className="text-muted leading-relaxed text-sm">
                    Direct line to the architects. No layers, just code and craft. Pure signal, zero noise. You see the commits, the roadmap, and the bottlenecks.
                </p>
</div>

<div className="p-8 md:p-12 bg-hover transition-colors group">
<div className="font-mono text-[#FF4D00] text-xs mb-6">03</div>
<h3 className="text-2xl font-semibold mb-4 text-main group-hover:translate-x-1 transition-transform">World-Class UI/UX</h3>
<p className="text-muted leading-relaxed text-sm">
                    Design that commands a premium. We move your brand from 'template-tier' to 'elite-tier' with pixel-perfect implementation and fluid motion.
                </p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto bg-main transition-colors duration-300" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-grid pb-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight-custom text-main">Selected Works</h2>
<span className="text-neutral-500 font-mono text-xs mt-4 md:mt-0">[ VIEW ALL CASE STUDIES ]</span>
</div>
<div className="flex flex-col">

<div className="group py-8 md:py-12 border-b border-grid cursor-pointer flex flex-col md:flex-row justify-between md:items-center hover:opacity-100 opacity-80 transition-all">
<div>
<div className="text-[#FF4D00] font-mono text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">FINTECH CORE</div>
<h3 className="text-2xl md:text-4xl font-medium text-main group-hover:pl-4 transition-all duration-300">Onyx Ledger</h3>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<span className="text-neutral-500 text-sm hidden md:block group-hover:text-main transition-colors">Distributed Ledger System</span>
<div className="w-10 h-10 border border-grid rounded-full flex items-center justify-center group-hover:bg-[#FF4D00] group-hover:border-[#FF4D00] transition-colors">
<i className="w-4 h-4 text-main group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group py-8 md:py-12 border-b border-grid cursor-pointer flex flex-col md:flex-row justify-between md:items-center hover:opacity-100 opacity-80 transition-all">
<div>
<div className="text-[#FF4D00] font-mono text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">AI INFRASTRUCTURE</div>
<h3 className="text-2xl md:text-4xl font-medium text-main group-hover:pl-4 transition-all duration-300">Kortex Array</h3>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<span className="text-neutral-500 text-sm hidden md:block group-hover:text-main transition-colors">LLM Processing Pipeline</span>
<div className="w-10 h-10 border border-grid rounded-full flex items-center justify-center group-hover:bg-[#FF4D00] group-hover:border-[#FF4D00] transition-colors">
<i className="w-4 h-4 text-main group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group py-8 md:py-12 border-b border-grid cursor-pointer flex flex-col md:flex-row justify-between md:items-center hover:opacity-100 opacity-80 transition-all">
<div>
<div className="text-[#FF4D00] font-mono text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">WEALTH MANAGEMENT</div>
<h3 className="text-2xl md:text-4xl font-medium text-main group-hover:pl-4 transition-all duration-300">Lumen Capital</h3>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<span className="text-neutral-500 text-sm hidden md:block group-hover:text-main transition-colors">Real-time Trading Dashboard</span>
<div className="w-10 h-10 border border-grid rounded-full flex items-center justify-center group-hover:bg-[#FF4D00] group-hover:border-[#FF4D00] transition-colors">
<i className="w-4 h-4 text-main group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[var(--bg-secondary)] border-y border-grid transition-colors duration-300" id="process">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

<div className="lg:col-span-4 p-8 md:p-12 lg:border-r border-grid flex flex-col justify-between">
<div className="sticky top-24">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight-custom mb-6 text-main">The Protocol</h2>
<p className="text-muted leading-relaxed text-sm max-w-xs">
                        A rigorous engineering standard designed to eliminate technical debt before it begins. We don't just write code; we architect outcomes.
                    </p>
<div className="mt-12 hidden lg:block">
<i className="w-12 h-12 text-[#FF4D00]/50" data-lucide="cpu"></i>
</div>
</div>
</div>

<div className="lg:col-span-8">

<div className="p-8 md:p-12 border-b border-grid bg-hover transition-colors flex gap-6 md:gap-12">
<div className="font-mono text-[#FF4D00] text-sm whitespace-nowrap pt-1">PHASE 01</div>
<div>
<h3 className="text-xl font-bold text-main mb-2">Discovery &amp; Architecture</h3>
<p className="text-muted text-sm leading-relaxed max-w-md">We map the system topology. Database schema design, API contract definition, and infrastructure selection happen here. Measure twice, cut once.</p>
</div>
</div>

<div className="p-8 md:p-12 border-b border-grid bg-hover transition-colors flex gap-6 md:gap-12">
<div className="font-mono text-[#FF4D00] text-sm whitespace-nowrap pt-1">PHASE 02</div>
<div>
<h3 className="text-xl font-bold text-main mb-2">Rapid MVP Delivery</h3>
<p className="text-muted text-sm leading-relaxed max-w-md">Core feature implementation using modular component architecture. We ship a functional, testable build in weeks, not months.</p>
</div>
</div>

<div className="p-8 md:p-12 border-b border-grid bg-hover transition-colors flex gap-6 md:gap-12">
<div className="font-mono text-[#FF4D00] text-sm whitespace-nowrap pt-1">PHASE 03</div>
<div>
<h3 className="text-xl font-bold text-main mb-2">Stress Testing &amp; Scale</h3>
<p className="text-muted text-sm leading-relaxed max-w-md">Load balancing simulation and security audits. We break the system intentionally so your users can't break it accidentally.</p>
</div>
</div>

<div className="p-8 md:p-12 bg-hover transition-colors flex gap-6 md:gap-12">
<div className="font-mono text-[#FF4D00] text-sm whitespace-nowrap pt-1">PHASE 04</div>
<div>
<h3 className="text-xl font-bold text-main mb-2">Deployment &amp; Handover</h3>
<p className="text-muted text-sm leading-relaxed max-w-md">CI/CD pipeline setup for automated deployment. Full documentation transfer. Your team takes the keys to a Ferrari.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-b border-grid bg-main transition-colors duration-300">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

<div className="flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-[#FF4D00] mb-6 fill-[#FF4D00]/20" data-lucide="quote"></i>
<p className="text-xl md:text-2xl font-medium leading-tight text-main mb-8">
                        "Vantage Point didn't just build our platform; they re-engineered our entire technical strategy. The latency reduction alone secured our Series B."
                    </p>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="font-semibold text-main">Alex Thorne</span>
<span className="text-sm text-neutral-500">CTO, Nexus Labs</span>
</div>

<div className="h-8 ml-auto opacity-50">
<div className="flex items-center gap-2 font-bold tracking-tighter text-lg text-main">
<i className="w-5 h-5 fill-current" data-lucide="hexagon"></i> NEXUS
                        </div>
</div>
</div>
</div>

<div className="flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-[#FF4D00] mb-6 fill-[#FF4D00]/20" data-lucide="quote"></i>
<p className="text-xl md:text-2xl font-medium leading-tight text-main mb-8">
                        "The gap between agency code and enterprise engineering is massive. Vantage Point bridges that gap. Our wealth management dashboard is flawless."
                    </p>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="font-semibold text-main">Sarah Jenks</span>
<span className="text-sm text-neutral-500">VP Product, Lumen Capital</span>
</div>

<div className="h-8 ml-auto opacity-50">
<div className="flex items-center gap-2 font-bold tracking-tighter text-lg text-main">
<i className="w-5 h-5 fill-current" data-lucide="gem"></i> LUMEN
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 text-center bg-[var(--bg-main)] relative overflow-hidden transition-colors duration-300">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4D00] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight-custom text-main mb-6">
                Ready to build your <br/> next unicorn?
            </h2>
<p className="text-muted text-lg md:text-xl mb-12">
                The gap between good and elite is engineering. <br/> Bridge it with us.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-[#FF4D00] text-white font-semibold text-sm hover:bg-[#ff6a2b] transition-all duration-300 btn-glow flex items-center justify-center gap-2 rounded-sm" href="#">
                    Start Your Build
                </a>
<a className="btn-secondary w-full sm:w-auto px-8 py-4 bg-transparent font-medium text-sm transition-colors flex items-center justify-center gap-2 rounded-sm" href="#">
                    Book a Demo
                </a>
</div>
</div>
</section>

<footer className="border-t border-grid bg-[var(--bg-secondary)] py-12 px-6 transition-colors duration-300">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-bold tracking-[0.2em] text-main">
                VANTAGE POINT
            </div>
<div className="text-xs font-mono text-neutral-600">
                © 2024 SYSTEM ARCHITECTURE. ALL RIGHTS RESERVED.
            </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-main transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-main transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-neutral-500 hover:text-main transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
</div>
</div>
</footer>


    </>
  );
}
