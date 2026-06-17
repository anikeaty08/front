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



        // 1. VANTA.JS CONFIGURATION
        
        // Hero Background (HALO)
        document.addEventListener("DOMContentLoaded", function() {
            try {
                VANTA.HALO({
                    el: "#hero-background",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    backgroundColor: 0x0a0a0a,
                    baseColor: 0xff6b35,
                    size: 1.8,
                    amplitudeFactor: 1.2,
                    xOffset: 0.0,
                    yOffset: 0.0
                });
            } catch (e) { console.log("Vanta Hero Error", e); }

            // Services Background (NET)
            try {
                VANTA.NET({
                    el: "#services-background",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    backgroundColor: 0x0a0a0a,
                    color: 0xff4500,
                    points: 12.00,
                    maxDistance: 22.00,
                    spacing: 18.00
                });
            } catch (e) { console.log("Vanta Services Error", e); }
        });

        // 2. SCROLL REVEAL ANIMATION
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counter if it's the pricing section
                    if (entry.target.querySelector('.pricing-counter')) {
                        startPricingCounters();
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // 3. PRICING COUNTER ANIMATION
        let countersStarted = false;
        function startPricingCounters() {
            if(countersStarted) return;
            countersStarted = true;
            
            const counters = document.querySelectorAll('.pricing-counter');
            
            counters.forEach(counter => {
                const final = counter.getAttribute('data-target');
                let iterations = 0;
                const interval = setInterval(() => {
                    // Generate random price-like numbers
                    counter.innerText = '$' + Math.floor(Math.random() * 50000).toLocaleString();
                    iterations++;
                    
                    if (iterations > 20) {
                        clearInterval(interval);
                        counter.innerText = final;
                    }
                }, 80);
            });
        }

        // 4. FAQ ACCORDION
        const accordions = document.querySelectorAll('.accordion-item');
        accordions.forEach(item => {
            const btn = item.querySelector('button');
            const content = item.querySelector('.accordion-content');
            const icon = item.querySelector('iconify-icon');
            
            btn.addEventListener('click', () => {
                const isOpen = content.classList.contains('open');
                
                // Close all others
                accordions.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('.accordion-content');
                    const otherIcon = otherItem.querySelector('iconify-icon');
                    otherContent.style.maxHeight = null;
                    otherContent.classList.remove('open');
                    otherIcon.style.transform = 'rotate(0deg)';
                });

                if (!isOpen) {
                    content.classList.add('open');
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });

        // 5. MOBILE MENU
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            menu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        menuLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

    
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-[#FF6B35]/10 bg-[#0A0A0A]/90 backdrop-blur-xl h-20">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded bg-gradient-to-br from-[#FF6B35] to-[#FF4500] flex items-center justify-center font-heading font-bold text-white text-lg tracking-tighter shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                    SP
                </div>
<span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-[#FF6B35] transition-colors">SIGNAL PR</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-[#FF6B35] hover:after:w-full after:transition-all" href="#services">Services</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-[#FF6B35] hover:after:w-full after:transition-all" href="#methodology">How We Work</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-[#FF6B35] hover:after:w-full after:transition-all" href="#dgfi">DGFI Conference</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-[#FF6B35] hover:after:w-full after:transition-all" href="#faq">FAQ</a>
</div>

<div className="hidden md:block">
<a className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] text-white text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,107,53,0.3)]" href="https://calendly.com/signalpr" target="_blank">
                    Book a Call
                </a>
</div>

<button className="md:hidden text-white text-2xl" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#0A0A0A] z-40 transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center gap-8 md:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-white text-3xl" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
<a className="text-2xl font-heading font-bold text-white mobile-link" href="#services">Services</a>
<a className="text-2xl font-heading font-bold text-white mobile-link" href="#methodology">How We Work</a>
<a className="text-2xl font-heading font-bold text-white mobile-link" href="#dgfi">DGFI Conference</a>
<a className="text-2xl font-heading font-bold text-white mobile-link" href="#faq">FAQ</a>
<a className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] text-white text-lg font-bold" href="https://calendly.com/signalpr">Book a Call</a>
</div>
</nav>

<section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">

<div id="hero-background"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40 z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">

<div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B35]/50 bg-[#FF6B35]/10 backdrop-blur-md mb-8">
<span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></span>
<span className="text-xs font-mono tracking-wider uppercase text-[#FF6B35]">Web3 PR + AI Search Optimization</span>
</div>

<h1 className="reveal delay-100 font-heading font-black text-5xl md:text-7xl lg:text-[80px] leading-[0.9] tracking-tighter mb-4">
<span className="text-gradient">Be Visible</span>
</h1>
<h2 className="reveal delay-200 font-heading font-bold text-3xl md:text-5xl lg:text-[48px] leading-tight tracking-tight text-white mb-8">
                in ChatGPT, Perplexity &amp;<br/>Traditional Media
            </h2>

<p className="reveal delay-300 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                First Web3 agency combining traditional PR with AI search optimization. Get mentioned by AI assistants and featured in top-tier media.
            </p>

<div className="reveal delay-300 flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] text-white font-semibold tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all duration-300" href="https://calendly.com/signalpr">
                    Schedule Strategy Call
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#FF6B35]/50 text-white font-medium hover:bg-[#FF6B35]/10 transition-colors" href="#services">
                    Explore Services
                </a>
</div>

<div className="reveal delay-300 mt-16 flex flex-col items-center gap-4">
<p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Trusted by 50+ Web3 Projects</p>
<div className="flex gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-6 w-20 bg-white/20 rounded"></div>
<div className="h-6 w-20 bg-white/20 rounded"></div>
<div className="h-6 w-20 bg-white/20 rounded hidden md:block"></div>
<div className="h-6 w-20 bg-white/20 rounded hidden md:block"></div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 text-[#FF6B35]">
<iconify-icon icon="solar:double-alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] relative border-b border-[#FF6B35]/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 relative">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF6B35]/30 to-transparent"></div>

<div className="reveal space-y-6 md:pr-12 text-right md:text-right text-left">
<div className="inline-block px-3 py-1 rounded border border-red-500/30 text-red-500 text-xs font-mono mb-2">THE PROBLEM</div>
<h3 className="font-heading text-3xl font-bold text-white tracking-tight">Traditional SEO is dying.</h3>
<p className="text-gray-400 text-lg leading-relaxed">
                        40% of users now search via AI assistants. Your competitors are invisible to ChatGPT and Perplexity, and media coverage alone doesn't guarantee AI visibility.
                    </p>
<div className="flex justify-end gap-2">
<iconify-icon className="text-red-500 text-2xl" icon="solar:close-circle-bold"></iconify-icon>
<span className="text-gray-500">Invisible to AI</span>
</div>
</div>

<div className="reveal delay-200 space-y-6 md:pl-12">
<div className="inline-block px-3 py-1 rounded border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-mono mb-2">OUR SOLUTION</div>
<h3 className="font-heading text-3xl font-bold text-white tracking-tight">Dual-Channel Optimization.</h3>
<p className="text-gray-400 text-lg leading-relaxed">
                        We optimize your brand for both AI search engines AND traditional media. A PR + LLM optimization strategy ensuring visibility everywhere your audience searches.
                    </p>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#FF6B35] text-2xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-white">Visible Everywhere</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#0A0A0A] overflow-hidden" id="services">
<div id="services-background"></div>
<div className="absolute inset-0 bg-[#0A0A0A]/80 z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter mb-4 text-white">Core Services</h2>
<p className="text-gray-400 max-w-xl mx-auto">Comprehensive visibility strategies for the Web3 era.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-2xl reveal delay-100 flex flex-col h-full group">
<div className="w-14 h-14 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/30 flex items-center justify-center text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,107,53,0.2)]">
<iconify-icon icon="solar:megaphone-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-2xl text-white mb-4">Web3 PR</h3>
<p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">Strategic media placements in top-tier crypto and financial outlets. We secure the narrative.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#FF6B35]" icon="solar:star-linear"></iconify-icon> Tier-1 placements
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#FF6B35]" icon="solar:pen-new-square-linear"></iconify-icon> Thought leadership
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#FF6B35]" icon="solar:shield-warning-linear"></iconify-icon> Crisis Comms
                        </li>
</ul>
<a className="inline-flex items-center text-[#FF6B35] font-semibold hover:gap-2 transition-all" href="#contact">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="glass-card p-8 rounded-2xl reveal delay-200 flex flex-col h-full group border-[#FF6B35]/40 bg-[#FF6B35]/10">
<div className="w-14 h-14 rounded-xl bg-[#FF6B35] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,107,53,0.4)]">
<iconify-icon icon="solar:brain-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-2xl text-white mb-4">AI Search Optimization</h3>
<p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">Get recommended by ChatGPT, Perplexity, and Gemini. We engineer your digital footprint for LLMs.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#FF6B35]" icon="solar:magnifer-linear"></iconify-icon> LLM visibility audit
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#FF6B35]" icon="solar:graph-up-linear"></iconify-icon> Authority building
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#FF6B35]" icon="solar:radar-linear"></iconify-icon> Citation tracking
                        </li>
</ul>
<a className="inline-flex items-center text-[#FF6B35] font-semibold hover:gap-2 transition-all" href="#contact">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="glass-card p-8 rounded-2xl reveal delay-300 flex flex-col h-full group">
<div className="w-14 h-14 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/30 flex items-center justify-center text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,107,53,0.2)]">
<iconify-icon icon="solar:dollar-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-2xl text-white mb-4">RWA Tokenization</h3>
<p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">End-to-end support for real-world asset tokenization. Legal, tech, and GTM strategy.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#FF6B35]" icon="solar:documents-minimalistic-linear"></iconify-icon> SPV structuring
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#FF6B35]" icon="solar:pie-chart-2-linear"></iconify-icon> Tokenomics design
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#FF6B35]" icon="solar:users-group-rounded-linear"></iconify-icon> Investor relations
                        </li>
</ul>
<a className="inline-flex items-center text-[#FF6B35] font-semibold hover:gap-2 transition-all" href="#contact">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F]" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="font-heading font-bold text-4xl mb-2">Our Methodology</h2>
<p className="text-gray-400">A proven process for maximum visibility.</p>
</div>

<div className="mb-16 reveal">
<h3 className="text-xl font-mono text-[#FF6B35] mb-8 flex items-center gap-2">
<iconify-icon icon="solar:soundwave-linear"></iconify-icon> PR PROCESS
                </h3>
<div className="grid md:grid-cols-4 gap-4 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-[#333] z-0"></div>

<div className="relative z-10 bg-[#0F0F0F] pr-4">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#FF6B35] text-white flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">1</div>
<h4 className="font-bold text-white mb-2 text-center md:text-left">Discovery</h4>
<p className="text-sm text-gray-500 text-center md:text-left">Deep dive into project &amp; competitors.</p>
</div>
<div className="relative z-10 bg-[#0F0F0F] pr-4">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#FF6B35] text-white flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">2</div>
<h4 className="font-bold text-white mb-2 text-center md:text-left">Strategy</h4>
<p className="text-sm text-gray-500 text-center md:text-left">Custom plan &amp; messaging.</p>
</div>
<div className="relative z-10 bg-[#0F0F0F] pr-4">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#FF6B35] text-white flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">3</div>
<h4 className="font-bold text-white mb-2 text-center md:text-left">Outreach</h4>
<p className="text-sm text-gray-500 text-center md:text-left">Proactive media relations.</p>
</div>
<div className="relative z-10 bg-[#0F0F0F] pr-4">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#FF6B35] text-white flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">4</div>
<h4 className="font-bold text-white mb-2 text-center md:text-left">Amplification</h4>
<p className="text-sm text-gray-500 text-center md:text-left">Distribution &amp; monitoring.</p>
</div>
</div>
</div>

<div className="reveal delay-100">
<h3 className="text-xl font-mono text-[#FBBF24] mb-8 flex items-center gap-2">
<iconify-icon icon="solar:cpu-linear"></iconify-icon> LLM OPTIMIZATION
                </h3>
<div className="grid md:grid-cols-4 gap-4 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-[#333] z-0"></div>

<div className="relative z-10 bg-[#0F0F0F] pr-4">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#FBBF24] text-white flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">1</div>
<h4 className="font-bold text-white mb-2 text-center md:text-left">Audit</h4>
<p className="text-sm text-gray-500 text-center md:text-left">Analyze visibility on ChatGPT.</p>
</div>
<div className="relative z-10 bg-[#0F0F0F] pr-4">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#FBBF24] text-white flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">2</div>
<h4 className="font-bold text-white mb-2 text-center md:text-left">Optimize</h4>
<p className="text-sm text-gray-500 text-center md:text-left">Structure data for AI.</p>
</div>
<div className="relative z-10 bg-[#0F0F0F] pr-4">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#FBBF24] text-white flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">3</div>
<h4 className="font-bold text-white mb-2 text-center md:text-left">Authority</h4>
<p className="text-sm text-gray-500 text-center md:text-left">Build citations via peec.ai.</p>
</div>
<div className="relative z-10 bg-[#0F0F0F] pr-4">
<div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#FBBF24] text-white flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">4</div>
<h4 className="font-bold text-white mb-2 text-center md:text-left">Monitor</h4>
<p className="text-sm text-gray-500 text-center md:text-left">Track LLM responses.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#050505]" id="dgfi">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<span className="text-[#FF6B35] font-mono text-sm tracking-widest uppercase mb-2 block">Our Event</span>
<h2 className="font-heading font-black text-4xl md:text-5xl mb-6 text-white">DGFI Conference</h2>
<h3 className="text-xl text-gray-300 mb-6">Dubai Global Finance Initiative</h3>
<p className="text-gray-400 leading-relaxed mb-8">
                        We are the organizers of DGFI Conference - the premier annual event for digital finance and Web3 in the Middle East. Join 2,000+ investors, founders, and industry leaders.
                    </p>
<a className="inline-flex items-center gap-2 text-white border-b border-[#FF6B35] pb-1 hover:text-[#FF6B35] transition-colors" href="https://dgfi.io" target="_blank">
                        Learn More About DGFI <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-4 reveal delay-200">
<div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
<div className="font-mono text-3xl font-bold text-[#FF6B35] mb-1">2,000+</div>
<div className="text-sm text-gray-400">Attendees</div>
</div>
<div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
<div className="font-mono text-3xl font-bold text-[#FF6B35] mb-1">100+</div>
<div className="text-sm text-gray-400">Speakers</div>
</div>
<div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
<div className="font-mono text-3xl font-bold text-[#FF6B35] mb-1">50+</div>
<div className="text-sm text-gray-400">Countries</div>
</div>
<div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center flex flex-col justify-center">
<div className="font-mono text-lg font-bold text-white mb-1">Annual</div>
<div className="text-sm text-gray-400">Event</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-heading font-bold text-4xl text-center mb-16 reveal">Why Signal PR</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="glass-card p-8 rounded-xl flex items-start gap-6 reveal">
<div className="w-12 h-12 rounded bg-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] flex-shrink-0">
<iconify-icon icon="solar:circles-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-xl text-white mb-2">Dual-Channel Expertise</h4>
<p className="text-gray-400 text-sm">Only agency combining PR + LLM optimization. We don't just pitch media; we engineer the AI results.</p>
</div>
</div>
<div className="glass-card p-8 rounded-xl flex items-start gap-6 reveal delay-100">
<div className="w-12 h-12 rounded bg-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] flex-shrink-0">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-xl text-white mb-2">DGFI Conference Network</h4>
<p className="text-gray-400 text-sm">Direct access to 2,000+ investors and founders through our proprietary event in Dubai.</p>
</div>
</div>
<div className="glass-card p-8 rounded-xl flex items-start gap-6 reveal delay-200">
<div className="w-12 h-12 rounded bg-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] flex-shrink-0">
<iconify-icon icon="solar:cup-first-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-xl text-white mb-2">Proven Track Record</h4>
<p className="text-gray-400 text-sm">50+ Web3 projects successfully launched and scaled with our bespoke strategies.</p>
</div>
</div>
<div className="glass-card p-8 rounded-xl flex items-start gap-6 reveal delay-300">
<div className="w-12 h-12 rounded bg-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] flex-shrink-0">
<iconify-icon icon="solar:server-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-xl text-white mb-2">AI-First Approach</h4>
<p className="text-gray-400 text-sm">Using peec.ai for real-time LLM tracking to ensure your brand stays recommended.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-t from-[#0A0A0A] to-[#0F0F0F] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-bold text-4xl mb-2">Investment</h2>
<p className="text-gray-400">Transparent pricing for serious projects.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-2xl flex flex-col reveal delay-100 border-t border-t-white/10">
<h3 className="text-xl font-bold text-white mb-4">PR Essentials</h3>
<div className="text-3xl font-mono text-[#FF6B35] mb-6 pricing-counter" data-target="Custom Quote">$0</div>
<ul className="space-y-4 mb-8 flex-grow text-sm text-gray-300">
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> Media strategy development</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> 5 guaranteed placements/mo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> Monthly reporting</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> Dedicated account manager</li>
</ul>
<a className="w-full py-3 rounded-lg border border-[#FF6B35] text-[#FF6B35] text-center font-semibold hover:bg-[#FF6B35] hover:text-white transition-all" href="https://calendly.com/signalpr">Get Quote</a>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col relative reveal delay-200 bg-[#FF6B35]/5 border-[#FF6B35]/40 transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">MOST POPULAR</div>
<h3 className="text-xl font-bold text-white mb-4">PR + LLM</h3>
<div className="text-3xl font-mono text-[#FF6B35] mb-6 pricing-counter" data-target="Custom Quote">$0</div>
<ul className="space-y-4 mb-8 flex-grow text-sm text-gray-300">
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> Everything in PR Essentials</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> LLM visibility audit</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> Content optimization</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> peec.ai tracking dashboard</li>
</ul>
<a className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#FF4500] text-white text-center font-semibold hover:shadow-lg transition-all" href="https://calendly.com/signalpr">Get Quote</a>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col reveal delay-300 border-t border-t-white/10">
<h3 className="text-xl font-bold text-white mb-4">Full Service</h3>
<div className="text-3xl font-mono text-[#FF6B35] mb-6 pricing-counter" data-target="Custom Quote">$0</div>
<ul className="space-y-4 mb-8 flex-grow text-sm text-gray-300">
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> Everything in PR + LLM</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> Tokenization support</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> DGFI Conference access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-linear"></iconify-icon> 24/7 priority support</li>
</ul>
<a className="w-full py-3 rounded-lg border border-[#FF6B35] text-[#FF6B35] text-center font-semibold hover:bg-[#FF6B35] hover:text-white transition-all" href="https://calendly.com/signalpr">Get Quote</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A]" id="faq">
<div className="max-w-4xl mx-auto px-6">
<h2 className="font-heading font-bold text-4xl text-center mb-16 reveal">Frequently Asked Questions</h2>
<div className="space-y-4 reveal">

<div className="border border-white/10 rounded-lg overflow-hidden accordion-item">
<button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="font-medium text-white">What makes Signal PR different?</span>
<iconify-icon className="text-[#FF6B35] transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content bg-white/5">
<div className="px-6 py-4 text-gray-400 text-sm leading-relaxed">
                            We're the only agency that combines traditional PR with AI search optimization. While others focus solely on media placements, we ensure your brand is visible both in publications AND when users ask ChatGPT, Perplexity, or Claude about your industry.
                        </div>
</div>
</div>

<div className="border border-white/10 rounded-lg overflow-hidden accordion-item">
<button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="font-medium text-white">What is AI Search Optimization (GEO)?</span>
<iconify-icon className="text-[#FF6B35] transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content bg-white/5">
<div className="px-6 py-4 text-gray-400 text-sm leading-relaxed">
                            Generative Engine Optimization (GEO) is the practice of optimizing your digital presence so AI assistants mention and recommend your brand. As 40% of searches now happen through AI, this is becoming essential for visibility.
                        </div>
</div>
</div>

<div className="border border-white/10 rounded-lg overflow-hidden accordion-item">
<button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="font-medium text-white">How do you track AI visibility?</span>
<iconify-icon className="text-[#FF6B35] transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content bg-white/5">
<div className="px-6 py-4 text-gray-400 text-sm leading-relaxed">
                             We use peec.ai - a specialized platform that monitors how major LLMs (ChatGPT, Perplexity, Claude, Gemini) respond to queries related to your brand and industry.
                        </div>
</div>
</div>

<div className="border border-white/10 rounded-lg overflow-hidden accordion-item">
<button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="font-medium text-white">How long until we see results?</span>
<iconify-icon className="text-[#FF6B35] transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content bg-white/5">
<div className="px-6 py-4 text-gray-400 text-sm leading-relaxed">
                             PR results typically begin within 2-4 weeks. LLM optimization is a longer process - expect to see meaningful improvements in AI visibility within 2-3 months as we build your digital authority.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FF4500] opacity-10"></div>
<div className="absolute inset-0 backdrop-blur-3xl"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">Ready to Be Visible?</h2>
<p className="text-xl text-gray-300 mb-10">Book a free strategy call and get a custom proposal within 48 hours.</p>
<a className="inline-block px-10 py-5 rounded-full bg-white text-[#FF4500] font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all" href="https://calendly.com/signalpr">
                Schedule Your Call
            </a>
</div>
</section>

<footer className="bg-[#050505] border-t border-[#FF6B35]/20 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">

<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#FF6B35] to-[#FF4500] flex items-center justify-center font-bold text-white text-xs">SP</div>
<span className="font-heading font-bold text-lg text-white">SIGNAL PR</span>
</div>
<p className="text-gray-500 text-sm mb-6">The first Web3 PR agency optimizing for the AI era.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:cat-linear" width="20"></iconify-icon></a> 
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a> 
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-bold text-white mb-6">Services</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Web3 PR</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">LLM Optimization</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">RWA Tokenization</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Crisis Management</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">DGFI Conference</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-600 text-xs">© 2025 Signal PR. All rights reserved.</p>
<p className="text-gray-600 text-xs">Built for Web3 leaders.</p>
</div>
</div>
</footer>



    </>
  );
}
