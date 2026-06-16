import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide Icons
    lucide.createIcons();

    // 1. Flashlight Effect
    const light = document.getElementById('flashlight');
    let mouseX = 0, mouseY = 0;
    let lightX = 0, lightY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateLight() {
        // Smooth follow
        lightX += (mouseX - lightX) * 0.15;
        lightY += (mouseY - lightY) * 0.15;
        light.style.left = `${lightX}px`;
        light.style.top = `${lightY}px`;
        requestAnimationFrame(animateLight);
    }
    animateLight();

    // 2. Scroll Reveal Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

    // 3. Formula Molecule Parallax
    const molecule = document.getElementById('formula-molecule-wrapper');
    const bgText = document.getElementById('formula-bg-text');
    const formulaSection = document.getElementById('formula');

    window.addEventListener("scroll", () => {
      const rect = formulaSection.getBoundingClientRect();
      // Only animate if in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (rect.top / window.innerHeight) * 100;
        molecule.style.transform = `translateY(${progress * 0.5}px)`;
        bgText.style.transform = `translateY(${progress * -0.2}px)`;
      }
    }, { passive: true });

  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="flashlight"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="group flex items-center gap-3" href="#">
<div className="w-8 h-8 border border-white/20 flex items-center justify-center rounded-sm bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
<span className="font-sans font-semibold text-white tracking-tighter text-xs">H30</span>
</div>
<span className="font-sans text-sm font-medium tracking-[0.2em] text-neutral-300 group-hover:text-white transition-colors">ADVISORS</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#independent-sponsor">Sponsor Model</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#formula">The Formula</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#team">Partners</a>
</div>
<div className="btn-wrapper">
<button className="btn px-5 py-2.5" type="button">
<div className="flex items-center gap-2">
<span className="btn-letter" style={{transitionDelay: '0s'}}>C</span>
<span className="btn-letter" style={{transitionDelay: '0.05s'}}>o</span>
<span className="btn-letter" style={{transitionDelay: '0.1s'}}>n</span>
<span className="btn-letter" style={{transitionDelay: '0.15s'}}>t</span>
<span className="btn-letter" style={{transitionDelay: '0.2s'}}>a</span>
<span className="btn-letter" style={{transitionDelay: '0.25s'}}>c</span>
<span className="btn-letter" style={{transitionDelay: '0.3s'}}>t</span>
</div>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 reveal-text">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-neutral-300">Merchant Banking Redefined</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[0.95] reveal-text" style={{transitionDelay: '100ms'}}>
        Architecting <span className="font-serif italic font-light text-neutral-400">capital</span><br/>
        for the visionary.
      </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed reveal-text" style={{transitionDelay: '200ms'}}>
        H30 Advisors bridges the gap between operator ambition and institutional scale. We provide bespoke M&amp;A advisory and act as independent sponsors for high-growth opportunities.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-text" style={{transitionDelay: '300ms'}}>
<div className="btn-wrapper">
<button className="btn px-8 py-3 w-48 md:w-56 h-12" type="button">
<div className="flex items-center justify-center w-full gap-2">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>
<div className="flex">
<span className="btn-letter">E</span>
<span className="btn-letter">x</span>
<span className="btn-letter">e</span>
<span className="btn-letter">c</span>
<span className="btn-letter">u</span>
<span className="btn-letter">t</span>
<span className="btn-letter">e</span>
</div>
</div>
</button>
</div>
<a className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5" href="#services">Explore Capabilities</a>
</div>
</div>

<div className="absolute top-1/4 left-10 w-32 h-32 border border-white/5 rounded-full opacity-20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute bottom-1/4 right-10 w-64 h-64 border border-white/5 rounded-full opacity-20 animate-[spin_15s_linear_infinite_reverse]"></div>
</section>

<section className="py-10 border-y border-white/5 bg-neutral-950/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="flex gap-16 md:gap-32 animate-[scroll_40s_linear_infinite] whitespace-nowrap min-w-full pl-6 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">

<span className="text-xl font-serif italic text-white tracking-tighter">Goldman Sachs</span>
<span className="text-xl font-bold text-white tracking-tighter">BLACKROCK</span>
<span className="text-xl font-medium text-white tracking-[0.2em] uppercase">Sequoia</span>
<span className="text-xl font-serif text-white tracking-tight">Morgan Stanley</span>
<span className="text-xl font-bold text-white tracking-tighter">KKR</span>
<span className="text-xl font-light text-white tracking-wide uppercase">Carlyle</span>
<span className="text-xl font-serif italic text-white tracking-tighter">Lazard</span>
<span className="text-xl font-bold text-white tracking-tighter">BLACKSTONE</span>

<span className="text-xl font-serif italic text-white tracking-tighter">Goldman Sachs</span>
<span className="text-xl font-bold text-white tracking-tighter">BLACKROCK</span>
<span className="text-xl font-medium text-white tracking-[0.2em] uppercase">Sequoia</span>
<span className="text-xl font-serif text-white tracking-tight">Morgan Stanley</span>
<span className="text-xl font-bold text-white tracking-tighter">KKR</span>
<span className="text-xl font-light text-white tracking-wide uppercase">Carlyle</span>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal-text">
<h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-6">Who We Are</h2>
<h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-tight">
          We operate at the intersection of <br/>
<span className="text-neutral-500">strategy and capital structure.</span>
</h3>
</div>
<div className="space-y-8 reveal-text" style={{transitionDelay: '100ms'}}>
<p className="text-neutral-400 font-light leading-relaxed">
          H30 Advisors is not a traditional investment bank. We are a hybrid merchant banking and advisory firm built for the modern economy. We reject the "volume game" in favor of high-conviction partnerships.
        </p>
<p className="text-neutral-400 font-light leading-relaxed">
          Whether advising on a complex cross-border M&amp;A transaction or deploying our own capital as an independent sponsor, our incentives are relentlessly aligned with the long-term value creation of our partners.
        </p>
<div className="flex gap-8 pt-4">
<div>
<span className="block text-3xl font-serif italic text-white">$2B+</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-600">Transaction Value</span>
</div>
<div>
<span className="block text-3xl font-serif italic text-white">15+</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-600">Years Avg Exp.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 mb-16">
<h2 className="text-4xl font-medium text-white tracking-tight mb-4 reveal-text">Advisory Services</h2>
<p className="text-neutral-500 max-w-md reveal-text">Bespoke financial engineering for complex scenarios.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="geo-card h-96 p-8 flex flex-col justify-between rounded-xl group reveal-text">
<div className="geo-pattern"></div>

<div className="geo-shape absolute -right-12 -top-12 w-48 h-48 border rounded-full opacity-20"></div>
<div className="relative z-10">
<i className="w-8 h-8 text-white mb-6 stroke-[1]" data-lucide="arrow-left-right"></i>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Mergers &amp; Acquisitions</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
            Sell-side and buy-side advisory focused on maximizing shareholder value through precise timing and narrative construction.
          </p>
</div>
<div className="w-full h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors"></div>
</div>

<div className="geo-card h-96 p-8 flex flex-col justify-between rounded-xl group reveal-text" style={{transitionDelay: '100ms'}}>
<div className="geo-pattern"></div>
<div className="geo-shape absolute -right-12 -top-12 w-48 h-48 border rotate-45 opacity-20"></div>
<div className="relative z-10">
<i className="w-8 h-8 text-white mb-6 stroke-[1]" data-lucide="layers"></i>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Capital Raising</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
            Structuring debt and equity tailored to growth stage. We leverage deep relationships with family offices and private credit funds.
          </p>
</div>
<div className="w-full h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors"></div>
</div>

<div className="geo-card h-96 p-8 flex flex-col justify-between rounded-xl group reveal-text" style={{transitionDelay: '200ms'}}>
<div className="geo-pattern"></div>
<div className="geo-shape absolute -right-12 -top-12 w-48 h-48 border rounded-lg opacity-20"></div>
<div className="relative z-10">
<i className="w-8 h-8 text-white mb-6 stroke-[1]" data-lucide="refresh-ccw"></i>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Restructuring</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
            Navigating distress with clarity. Balance sheet optimization and operational turnarounds for asset protection.
          </p>
</div>
<div className="w-full h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors"></div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-y border-white/5" id="independent-sponsor">
<div className="absolute inset-0 bg-neutral-900/50"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 reveal-text">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-white"></span>
<span className="text-xs uppercase tracking-[0.2em] text-white">Private Equity</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
          The Independent <br/> <span className="font-serif italic text-neutral-500">Sponsor Model</span>
</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
          We don't just advise; we invest. As independent sponsors, H30 Advisors identifies proprietary off-market opportunities, raising capital on a deal-by-deal basis. 
        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white stroke-[1.5] mt-0.5" data-lucide="check"></i>
<span className="text-neutral-400 text-sm">Flexible capital duration (no fund lifecycle pressure)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white stroke-[1.5] mt-0.5" data-lucide="check"></i>
<span className="text-neutral-400 text-sm">Perfect alignment between management and investors</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white stroke-[1.5] mt-0.5" data-lucide="check"></i>
<span className="text-neutral-400 text-sm">Active operational involvement post-close</span>
</li>
</ul>
<div className="btn-wrapper">
<button className="btn px-6 py-2" type="button">
<span className="text-xs text-white font-medium tracking-widest uppercase px-2">View Portfolio Criteria</span>
</button>
</div>
</div>
<div className="lg:col-span-7 relative h-[500px] w-full border border-white/10 rounded-2xl bg-[#080808] p-1 overflow-hidden reveal-text">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_10s_linear_infinite]"></div>

<div className="relative h-full w-full flex items-center justify-center">
<div className="relative w-64 h-64 border border-white/20 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-neutral-600 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-600 rounded-full"></div>
<div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-600 rounded-full"></div>
</div>
<div className="absolute text-center">
<span className="block text-2xl font-serif text-white">Capital</span>
<span className="block text-xs uppercase tracking-widest text-neutral-500 mt-1">Deployment</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-neutral-950 overflow-hidden border-b border-white/5" id="formula">

<div className="absolute top-0 left-0 w-full text-center pointer-events-none select-none z-0">
<h2 className="text-[15vw] font-bold tracking-tighter text-white/5 leading-none mt-10 transition-transform duration-300" id="formula-bg-text">
        FORMULA
      </h2>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="flex justify-center mb-10 md:mb-0">
<div className="relative w-64 h-64 md:w-80 md:h-80" id="formula-molecule-wrapper">
<svg className="w-full h-full drop-shadow-2xl animate-molecule" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<line stroke="#333" strokeLinecap="round" strokeWidth="4" x1="100" x2="60" y1="100" y2="100"></line>
<line stroke="#333" strokeLinecap="round" strokeWidth="4" x1="100" x2="135" y1="100" y2="65"></line>
<line stroke="#333" strokeLinecap="round" strokeWidth="4" x1="100" x2="135" y1="100" y2="135"></line>
<line stroke="#333" strokeLinecap="round" strokeWidth="4" x1="60" x2="40" y1="100" y2="130"></line>

<circle cx="100" cy="100" fill="#171717" r="24" stroke="#444" strokeWidth="1"></circle>
<circle cx="60" cy="100" fill="#262626" r="18" stroke="#444" strokeWidth="1"></circle>
<circle cx="135" cy="65" fill="#e5e5e5" r="14"></circle> 
<circle cx="135" cy="135" fill="#525252" r="14"></circle>
<circle cx="40" cy="130" fill="#262626" r="10" stroke="#444" strokeWidth="1"></circle>

<circle className="animate-pulse" cx="135" cy="65" fill="white" fillOpacity="0.1" r="20"></circle>
</svg>
</div>
</div>
<div className="reveal-text">
<h3 className="text-3xl font-medium text-white tracking-tight mb-6">The Deal Chemistry</h3>
<p className="text-neutral-400 mb-8 font-light">
          Every transaction has a unique molecular structure. We analyze the volatile elements—market sentiment, debt capacity, regulatory headwinds—to synthesize a stable, high-yield outcome.
        </p>
<div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
<div>
<span className="block text-2xl text-white font-mono">Ag</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Aggressive Growth</span>
</div>
<div>
<span className="block text-2xl text-white font-mono">St</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Stability</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px] bg-white/5 hidden md:block"></div>
<div className="max-w-4xl mx-auto px-6 relative">
<div className="text-center mb-20">
<h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">Our Process</h2>
<h3 className="text-3xl font-medium text-white tracking-tight">From Conception to Close</h3>
</div>
<div className="space-y-24">

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center group">
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-800 border border-white/20 rounded-full z-10 group-hover:bg-white group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
<div className="md:text-right reveal-text">
<span className="text-4xl font-serif italic text-white/10">01</span>
<h4 className="text-xl text-white font-semibold mt-2">Thesis Development</h4>
</div>
<div className="md:pl-12 reveal-text">
<p className="text-sm text-neutral-400">Deep-dive sector analysis to identify arbitrage opportunities and valuation disconnects.</p>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center group">
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-800 border border-white/20 rounded-full z-10 group-hover:bg-white group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
<div className="order-last md:order-first md:text-right md:pr-12 reveal-text">
<p className="text-sm text-neutral-400">Rigorous financial modeling and stress-testing against downside scenarios.</p>
</div>
<div className="reveal-text">
<span className="text-4xl font-serif italic text-white/10">02</span>
<h4 className="text-xl text-white font-semibold mt-2">Structuring &amp; Diligence</h4>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center group">
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-800 border border-white/20 rounded-full z-10 group-hover:bg-white group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
<div className="md:text-right reveal-text">
<span className="text-4xl font-serif italic text-white/10">03</span>
<h4 className="text-xl text-white font-semibold mt-2">Execution</h4>
</div>
<div className="md:pl-12 reveal-text">
<p className="text-sm text-neutral-400">Precision negotiation and capital deployment. We manage the friction so you don't have to.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight">Sector Focus</h2>
<a className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mt-4 md:mt-0" href="#">View Track Record -&gt;</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-1">

<div className="group relative bg-[#0a0a0a] p-8 border border-white/5 hover:border-white/20 transition-colors h-40 flex flex-col justify-end">
<i className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors mb-4 stroke-[1.5]" data-lucide="cpu"></i>
<span className="text-sm text-white font-medium">Technology</span>
</div>
<div className="group relative bg-[#0a0a0a] p-8 border border-white/5 hover:border-white/20 transition-colors h-40 flex flex-col justify-end">
<i className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors mb-4 stroke-[1.5]" data-lucide="heart-pulse"></i>
<span className="text-sm text-white font-medium">Healthcare Services</span>
</div>
<div className="group relative bg-[#0a0a0a] p-8 border border-white/5 hover:border-white/20 transition-colors h-40 flex flex-col justify-end">
<i className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors mb-4 stroke-[1.5]" data-lucide="factory"></i>
<span className="text-sm text-white font-medium">Industrials</span>
</div>
<div className="group relative bg-[#0a0a0a] p-8 border border-white/5 hover:border-white/20 transition-colors h-40 flex flex-col justify-end">
<i className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors mb-4 stroke-[1.5]" data-lucide="shopping-bag"></i>
<span className="text-sm text-white font-medium">Consumer</span>
</div>
</div>
</div>
</section>

<section className="py-32" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-text">
<h2 className="text-4xl font-medium text-white tracking-tight">The Partners</h2>
<p className="text-neutral-500 mt-4 max-w-lg">Decades of experience at top-tier investment banks and private equity firms.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="h-80 w-full bg-neutral-900 border border-white/5 rounded-lg mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700"></div>

<div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_top,#000,transparent)] opacity-60"></div>
</div>
<h3 className="text-xl text-white font-medium">Alexander Hale</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Managing Partner</p>
</div>

<div className="group">
<div className="h-80 w-full bg-neutral-900 border border-white/5 rounded-lg mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_top,#000,transparent)] opacity-60"></div>
</div>
<h3 className="text-xl text-white font-medium">Sarah Thorne</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Head of M&amp;A</p>
</div>

<div className="group">
<div className="h-80 w-full bg-neutral-900 border border-white/5 rounded-lg mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_top,#000,transparent)] opacity-60"></div>
</div>
<h3 className="text-xl text-white font-medium">James Sterling</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Principal</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-10">Market Intelligence</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<a className="group block reveal-text" href="#">
<span className="text-xs text-neutral-600 mb-2 block">October 12, 2023</span>
<h3 className="text-2xl text-white font-medium group-hover:text-neutral-400 transition-colors mb-4">The shift from public to private markets in debt structuring.</h3>
<p className="text-neutral-500 font-light">An analysis of how middle-market companies are bypassing traditional lenders for private credit solutions.</p>
</a>
<a className="group block reveal-text" href="#">
<span className="text-xs text-neutral-600 mb-2 block">September 28, 2023</span>
<h3 className="text-2xl text-white font-medium group-hover:text-neutral-400 transition-colors mb-4">Navigating valuation gaps in a high-interest environment.</h3>
<p className="text-neutral-500 font-light">Strategies for bridging the bid-ask spread in Q4 2023 M&amp;A transactions.</p>
</a>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-24 pb-12 border-t border-white/10 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 border border-white/20 flex items-center justify-center rounded-sm bg-neutral-900">
<span className="font-sans font-semibold text-white tracking-tighter text-[10px]">H30</span>
</div>
<span className="font-sans text-sm font-medium tracking-[0.2em] text-white">ADVISORS</span>
</div>
<p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
            H30 Advisors is a premier merchant banking firm providing strategic advice and capital solutions to the global middle market.
          </p>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-6">Firm</h4>
<ul className="space-y-3">
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">About</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Services</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Team</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-6">Contact</h4>
<ul className="space-y-3">
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">New York</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">London</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">inquiries@h30advisors.com</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<span className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2024 H30 Advisors LLC. All Rights Reserved.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-[10px] text-neutral-600 uppercase tracking-widest hover:text-neutral-400" href="#">Privacy</a>
<a className="text-[10px] text-neutral-600 uppercase tracking-widest hover:text-neutral-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
