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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Boot Loader Sequence
    window.addEventListener('load', () => {
        const bar = document.getElementById('loader-bar');
        const loader = document.getElementById('loader');
        bar.style.width = '100%';
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 1500);
    });

    // Mobile Menu Interaction
    const btn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => menu.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => menu.classList.add('hidden'));
    
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => menu.classList.add('hidden'));
    });

    // Interactive Cursor Glow Effect
    const glow = document.getElementById('cursor-glow');
    window.addEventListener('mousemove', (e) => {
      glow.style.opacity = '1';
      glow.style.left = e.clientX - 128 + 'px';
      glow.style.top = e.clientY - 128 + 'px';
    });

    window.addEventListener('mouseout', () => glow.style.opacity = '0');

    // Scroll Reveal Logic
    const revealElements = () => {
        let reveals = document.querySelectorAll('.reveal');
        reveals.forEach(reveal => {
            let windowHeight = window.innerHeight;
            let revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - 100) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealElements);
    // Trigger once on load
    setTimeout(revealElements, 1600);

    // Frontend Mock of Login Fetch API (Matching user requested behavior)
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = "Connecting...";
        submitBtn.style.opacity = "0.7";
        
        // Simulating the backend fetch to '/api/login' natively
        // const formData = new URLSearchParams(new FormData(e.target));
        // const response = await fetch('/api/login', { method: 'POST', body: formData });
        // const result = await response.json();
        
        setTimeout(() => {
            // Visual transition for frontend-only output
            document.getElementById('auth-interface').classList.add('hidden');
            document.getElementById('success-interface').classList.remove('hidden');
            document.getElementById('success-interface').scrollIntoView({ behavior: 'smooth' });
            
            // Reset state
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = "1";
            e.target.reset();
        }, 1500);
    });

    // Active Glow on Nav Links
    const updateActiveLink = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('#nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = "#aaaaaa";
            link.style.textShadow = "none";
            if (link.getAttribute('href').includes(current)) {
                link.style.color = "#AAF0D1";
                link.style.textShadow = "0 0 10px #AAF0D1";
            }
        });
    };
    window.addEventListener('scroll', updateActiveLink);

    // Track Contact Clicks
    document.querySelectorAll('.contact-link').forEach(anchor => {
        anchor.addEventListener('click', function() {
            console.log("VantEdge Lead Generated: Contacting " + this.innerText.trim());
        });
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
      

<div className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center font-['Roboto_Mono']" id="loader" style={{display: 'none'}}>
<div className="mb-4 flex items-center gap-2">
<iconify-icon className="text-[#AAF0D1] text-3xl animate-spin-slow" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-white font-semibold tracking-widest text-xl">VANTEDGE<span className="text-[#AAF0D1]">_CORE</span></span>
</div>
<div className="w-48 h-[2px] bg-white/10 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-[#AAF0D1] w-0 transition-all duration-1000 ease-out" id="loader-bar" style={{width: '100%'}}></div>
</div>
<p className="text-xs text-gray-600 mt-4 uppercase tracking-widest" id="loader-text">Booting_Systems...</p>
</div>

<div className="fixed inset-0 pointer-events-none z-[150] opacity-[0.03]" style={{background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%'}}>
</div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-30" style={{background: 'radial-gradient(circle at 50% 0%, rgba(170, 240, 209, 0.15) 0%, transparent 60%)'}}></div>
<div className="fixed w-64 h-64 bg-[#AAF0D1]/10 rounded-full blur-[100px] pointer-events-none z-[-1] transition-opacity duration-500 opacity-0" id="cursor-glow" style={{left: '588px', top: '58px'}}></div>

<div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
<a className="contact-link group flex items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#AAF0D1]/20 text-white rounded-full p-3 w-[46px] hover:w-[260px] hover:border-[#AAF0D1] hover:shadow-[0_0_25px_rgba(170,240,209,0.4)] transition-all duration-500 overflow-hidden whitespace-nowrap" href="mailto:divyansh024011@gmail.com">
<iconify-icon className="text-xl shrink-0" icon="solar:letter-linear" style={{color: '#AAF0D1', strokeWidth: '1.5'}}></iconify-icon>
<span className="font-['Roboto_Mono'] text-sm shrink-0">divyansh024011@gmail.com</span>
</a>
<a className="contact-link group flex items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#AAF0D1]/20 text-white rounded-full p-3 w-[46px] hover:w-[180px] hover:border-[#AAF0D1] hover:shadow-[0_0_25px_rgba(170,240,209,0.4)] transition-all duration-500 overflow-hidden whitespace-nowrap" href="tel:+919643346645">
<iconify-icon className="text-xl shrink-0" icon="solar:phone-linear" style={{color: '#AAF0D1', strokeWidth: '1.5'}}></iconify-icon>
<span className="font-['Roboto_Mono'] text-sm shrink-0">+91 9643346645</span>
</a>
</div>

<nav className="sticky top-0 z-[1000] w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-[15px] transition-colors duration-300 py-5 px-[5%]">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#home">
<div className="flex items-center tracking-tight">
<span className="text-xl font-semibold text-white">VantEdge tech</span>
<span className="text-xl font-semibold text-[#AAF0D1] ml-0.5 drop-shadow-[0_0_5px_rgba(170,240,209,0.8)]">.</span>
</div>
</a>

<div className="hidden md:flex items-center text-sm font-medium tracking-tight text-[#aaaaaa]" id="nav-links">
<a className="mx-[15px] hover:text-[#AAF0D1] hover:drop-shadow-[0_0_10px_#AAF0D1] transition-all duration-300" href="#home" style={{color: 'rgb(170, 170, 170)', textShadow: 'none'}}>Home</a>
<a className="mx-[15px] hover:text-[#AAF0D1] hover:drop-shadow-[0_0_10px_#AAF0D1] transition-all duration-300" href="#services" style={{color: 'rgb(170, 170, 170)', textShadow: 'none'}}>Services</a>
<a className="mx-[15px] hover:text-[#AAF0D1] hover:drop-shadow-[0_0_10px_#AAF0D1] transition-all duration-300" href="#process" style={{color: 'rgb(170, 170, 170)', textShadow: 'none'}}>Process</a>
<a className="mx-[15px] hover:text-[#AAF0D1] hover:drop-shadow-[0_0_10px_#AAF0D1] transition-all duration-300" href="#tech-nebula" style={{color: 'rgb(170, 170, 170)', textShadow: 'none'}}>Tech</a>
<a className="mx-[15px] hover:text-[#AAF0D1] hover:drop-shadow-[0_0_10px_#AAF0D1] transition-all duration-300" href="#about" style={{color: 'rgb(170, 170, 170)', textShadow: 'none'}}>About</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-semibold tracking-tight text-white hover:text-[#AAF0D1] transition-all" href="#auth-interface">Login</a>
<a className="text-sm font-semibold tracking-tight text-black bg-[#AAF0D1] px-6 py-2 rounded shadow-[0_0_15px_rgba(170,240,209,0.4)] hover:scale-105 transition-all" href="#signup-interface">Get Started</a>
</div>

<button className="md:hidden text-gray-400 hover:text-[#AAF0D1] transition-all" id="menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#050505] z-[1000] flex flex-col items-center justify-center gap-8 text-2xl font-semibold hidden" id="mobile-menu">
<button className="absolute top-8 right-8 text-gray-400 hover:text-[#AAF0D1] transition-all" id="close-btn">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<a className="hover:text-[#AAF0D1] transition-all tracking-tight" href="#home">Home</a>
<a className="hover:text-[#AAF0D1] transition-all tracking-tight" href="#services">Services</a>
<a className="hover:text-[#AAF0D1] transition-all tracking-tight" href="#process">Process</a>
<a className="hover:text-[#AAF0D1] transition-all tracking-tight" href="#tech-nebula">Tech Stack</a>
<a className="hover:text-[#AAF0D1] transition-all tracking-tight" href="#about">About</a>
<div className="flex flex-col gap-4 mt-4 w-full px-12">
<button className="w-full text-center py-3 border border-white/20 rounded font-semibold tracking-tight" onclick="location.href='#auth-interface'; document.getElementById('mobile-menu').classList.add('hidden');">Login</button>
<button className="w-full text-center py-3 bg-[#AAF0D1] text-black rounded font-semibold tracking-tight shadow-[0_0_15px_rgba(170,240,209,0.4)]" onclick="location.href='#signup-interface'; document.getElementById('mobile-menu').classList.add('hidden');">Get Started</button>
</div>
</div>
<main className="flex-grow relative z-10">

<section className="reveal relative overflow-hidden px-6" id="home">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl opacity-5 pointer-events-none z-0">
<pre className="font-['Roboto_Mono'] text-xs text-[#AAF0D1] leading-none select-none" style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>const VantEdge = {
  mission: "Strategic High Ground",
  layer: "Infrastructure",
  status: "Optimized",
  execute: function(client) {
    if (client.status === "Average") {
      this.rebuild(client);
    }
    return client.dominance;
  }
};
// Engineering results since initialization.
        </pre>
</div>
<div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 pt-16">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#AAF0D1]/20 bg-[#AAF0D1]/5 mb-10 group hover:border-[#AAF0D1]/50 transition-all cursor-default">
<iconify-icon className="text-[#AAF0D1] animate-pulse text-lg" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-['Roboto_Mono'] text-xs text-gray-300 tracking-widest uppercase">
            Systems Initialized: <span className="text-[#AAF0D1]">Ready for Global Scale</span>
</span>
</div>
<h1 className="text-5xl md:text-8xl font-semibold text-white tracking-tight leading-tight mb-8">
          Build for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AAF0D1] to-white">Dominance.</span>
</h1>
<p className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed tracking-tight">
          VantEdge Tech transforms slow, manual businesses into 
          <span className="text-white border-b-2 border-[#AAF0D1]">AI-automated powerhouses.</span> 
          We build the infrastructure that handles the heavy lifting, so you can focus on the edge.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
<button className="px-8 py-3 rounded font-semibold transition-all duration-300 bg-[#AAF0D1] text-black shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(170,240,209,0.4)] hover:bg-white tracking-tight flex items-center justify-center gap-2 w-full sm:w-auto" onclick="location.href='#signup-interface'">
            Get Started
            <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="btn-ghost w-full sm:w-auto font-semibold tracking-tight px-8 py-3 rounded flex items-center justify-center gap-2" onclick="location.href='#services'">
            View Services
          </button>
</div>
</div>
</section>

<div className="w-full bg-[#050505] border-y border-white/5 py-10 mt-12 mb-12 relative z-20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="flex flex-col">
<span className="text-[#AAF0D1] text-3xl font-semibold tracking-tight">99.9%</span>
<span className="text-gray-500 text-xs uppercase tracking-widest font-['Roboto_Mono'] mt-1">Uptime_Reliability</span>
</div>
<div className="flex flex-col">
<span className="text-white text-3xl font-semibold tracking-tight">15ms</span>
<span className="text-gray-500 text-xs uppercase tracking-widest font-['Roboto_Mono'] mt-1">Latency_Optimization</span>
</div>
<div className="flex flex-col">
<span className="text-[#AAF0D1] text-3xl font-semibold tracking-tight">24/7</span>
<span className="text-gray-500 text-xs uppercase tracking-widest font-['Roboto_Mono'] mt-1">AI_Surveillance</span>
</div>
<div className="flex flex-col">
<span className="text-white text-3xl font-semibold tracking-tight">Sovereign</span>
<span className="text-gray-500 text-xs uppercase tracking-widest font-['Roboto_Mono'] mt-1">Data_Ownership</span>
</div>
</div>
</div>

<section className="reveal px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<p className="font-['Roboto_Mono'] text-xs text-[#AAF0D1] mb-4 uppercase tracking-widest">01 // Services</p>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              High-Performance
              <br/>
              Infrastructure
            </h2>
<p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
              We strip away inefficiencies and deploy institutional-grade
              technical foundations. Your operations shouldn't dictate your
              pace; your technology should accelerate it.
            </p>
<ul className="space-y-4 font-['Roboto_Mono'] text-sm text-gray-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#AAF0D1] text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Enterprise Server Arrays
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#AAF0D1] text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                AI-Driven Automation Protocols
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#AAF0D1] text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Secure Data Flows &amp; Integrity
              </li>
</ul>
</div>

<div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-[0_0_30px_rgba(170,240,209,0.05)] hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.15)] transition-all duration-500">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 flex justify-between items-start">
<div className="font-['Roboto_Mono'] text-xs text-[#AAF0D1]">
                SYS.STAT // OPTIMAL
              </div>
<div className="w-2 h-2 rounded-full bg-[#AAF0D1] animate-pulse shadow-[0_0_10px_#AAF0D1]"></div>
</div>
<div className="relative z-10 space-y-3 mt-auto">
<div className="h-1 w-full bg-white/10 overflow-hidden rounded-full">
<div className="h-full bg-[#AAF0D1] w-[87%] shadow-[0_0_10px_#AAF0D1]"></div>
</div>
<div className="h-1 w-full bg-white/10 overflow-hidden rounded-full">
<div className="h-full bg-[#AAF0D1] w-[94%] shadow-[0_0_10px_#AAF0D1]"></div>
</div>
<div className="h-1 w-full bg-white/10 overflow-hidden rounded-full">
<div className="h-full bg-white w-[60%]"></div>
</div>
<div className="flex justify-between font-['Roboto_Mono'] text-xs text-gray-500 pt-2">
<span className="">THROUGHPUT</span>
<span className="text-white">MAX</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="reveal px-6 border-t border-white/10 mt-10" id="process">
<div className="max-w-7xl mx-auto">
<p className="font-['Roboto_Mono'] text-xs text-[#AAF0D1] mb-4 uppercase tracking-widest text-center">02 // The Process</p>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center">Deployment Pipeline</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="p-10 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.15)] transition-all duration-500 cursor-default">
<p className="text-[#AAF0D1] text-xs font-['Roboto_Mono'] mb-4 tracking-widest">Phase 01</p>
<h4 className="text-white font-semibold tracking-tight text-lg">Deep System Analysis</h4>
</div>
<div className="p-10 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.15)] transition-all duration-500 cursor-default">
<p className="text-[#AAF0D1] text-xs font-['Roboto_Mono'] mb-4 tracking-widest">Phase 02</p>
<h4 className="text-white font-semibold tracking-tight text-lg">Custom Architecture</h4>
</div>
<div className="p-10 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.15)] transition-all duration-500 cursor-default">
<p className="text-[#AAF0D1] text-xs font-['Roboto_Mono'] mb-4 tracking-widest">Phase 03</p>
<h4 className="text-white font-semibold tracking-tight text-lg">Seamless Integration</h4>
</div>
<div className="p-10 bg-[#AAF0D1] border border-[#AAF0D1] rounded-2xl shadow-[0_0_20px_rgba(170,240,209,0.4)] hover:shadow-[0_0_40px_rgba(170,240,209,0.6)] transition-all duration-500 cursor-default flex flex-col justify-center">
<p className="text-black font-['Roboto_Mono'] mb-2 font-semibold text-xs underline tracking-widest">FINAL_GOAL</p>
<h4 className="text-black font-semibold text-xl tracking-tight">Unfair Advantage</h4>
</div>
</div>
</div>
</section>

<section className="reveal px-6 border-t border-white/10 relative overflow-hidden" id="tech-nebula">
<div className="max-w-7xl mx-auto text-center">
<p className="font-['Roboto_Mono'] text-xs text-[#AAF0D1] mb-4 uppercase tracking-widest">03 // Technical Stack</p>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-16">Engineered with Precision</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center">
<div className="tech-card group flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-500 hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.2)]">
<iconify-icon className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500" icon="logos:python"></iconify-icon>
<span className="mt-4 text-xs font-['Roboto_Mono'] text-gray-500 group-hover:text-[#AAF0D1] tracking-widest">PYTHON_CORE</span>
</div>
<div className="tech-card group flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-500 hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.2)]">
<iconify-icon className="text-4xl text-gray-600 group-hover:text-white transition-all duration-500" icon="simple-icons:openai"></iconify-icon>
<span className="mt-4 text-xs font-['Roboto_Mono'] text-gray-500 group-hover:text-[#AAF0D1] tracking-widest">LLM_ARCH</span>
</div>
<div className="tech-card group flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-500 hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.2)]">
<iconify-icon className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500" icon="logos:react"></iconify-icon>
<span className="mt-4 text-xs font-['Roboto_Mono'] text-gray-500 group-hover:text-[#AAF0D1] tracking-widest">VNTG_FRONTEND</span>
</div>
<div className="tech-card group flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-500 hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.2)]">
<iconify-icon className="text-4xl text-gray-600 group-hover:text-[#AAF0D1] transition-all duration-500" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="mt-4 text-xs font-['Roboto_Mono'] text-gray-500 group-hover:text-[#AAF0D1] tracking-widest">SYS_NODE</span>
</div>
<div className="tech-card group flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-500 hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.2)]">
<iconify-icon className="text-4xl text-gray-600 group-hover:text-[#AAF0D1] transition-all duration-500" icon="solar:shield-network-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="mt-4 text-xs font-['Roboto_Mono'] text-gray-500 group-hover:text-[#AAF0D1] tracking-widest">SEC_LAYER</span>
</div>
<div className="tech-card group flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-all duration-500 hover:border-[#AAF0D1] hover:shadow-[0_0_30px_rgba(170,240,209,0.2)]">
<iconify-icon className="text-4xl text-gray-600 group-hover:text-[#AAF0D1] transition-all duration-500" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="mt-4 text-xs font-['Roboto_Mono'] text-gray-500 group-hover:text-[#AAF0D1] tracking-widest">DATA_VAULT</span>
</div>
</div>
</div>
</section>

<section className="reveal overflow-hidden px-6 relative border-t border-white/10" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<p className="font-['Roboto_Mono'] text-xs text-[#AAF0D1] mb-4 uppercase tracking-widest">04 // About Us</p>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                    Engineering the <br/> <span className="italic text-gray-500">Unfair Advantage.</span>
</h2>
</div>
<div className="space-y-6">
<p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    VantEdge Tech was founded on a single logic: <span className="text-white">Mediocrity is a choice.</span> Our mission is to provide businesses with the technical sovereignty required to out-pace, out-scale, and out-perform their competition through AI and elite infrastructure.
                </p>
<div className="flex gap-8 border-l border-[#AAF0D1] pl-6 py-2">
<div>
<h5 className="text-white font-semibold text-lg md:text-xl tracking-tight">SOVEREIGN</h5>
<p className="text-xs text-gray-600 font-['Roboto_Mono'] uppercase tracking-widest">Ownership of Tech</p>
</div>
<div>
<h5 className="text-white font-semibold text-lg md:text-xl tracking-tight">AGGRESSIVE</h5>
<p className="text-xs text-gray-600 font-['Roboto_Mono'] uppercase tracking-widest">Speed to Market</p>
</div>
</div>
</div>
</div>
</section>

<section className="reveal flex bg-[#050505] border-white/10 border-t px-6 relative items-center justify-center" id="auth-interface">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#AAF0D1]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="w-full max-w-md z-10 bg-white/[0.03] border border-[rgba(170,240,209,0.2)] p-10 rounded-2xl shadow-2xl relative">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight">Welcome to <span className="text-[#AAF0D1]">VantEdge</span></h2>
<p className="text-gray-400 text-sm mt-2 tracking-tight">Initialize secure session</p>
</div>
<form className="space-y-6" id="login-form">
<div>
<label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-['Roboto_Mono']">Business Email</label>
<input className="w-full bg-black border border-white/10 rounded px-4 py-3 focus:border-[#AAF0D1] outline-none transition-all text-sm" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-['Roboto_Mono']">Password</label>
<input className="w-full bg-black border border-white/10 rounded px-4 py-3 focus:border-[#AAF0D1] outline-none transition-all text-sm" name="password" required="" type="password"/>
</div>
<button className="w-full bg-[#AAF0D1] text-black font-semibold tracking-tight py-3 rounded hover:shadow-[0_0_20px_rgba(170,240,209,0.4)] transition-all" type="submit">
                    Enter Dashboard
                </button>
</form>
<div className="mt-8 text-center text-sm">
<span className="text-gray-500">Need an account?</span>
<a className="text-[#AAF0D1] hover:underline ml-1 transition-all" href="#signup-interface">Request Access</a>
</div>
</div>
</section>

<section className="reveal flex items-center justify-center bg-[#050505] px-6 border-t border-white/10 hidden" id="success-interface">
<div className="w-full max-w-2xl text-center flex flex-col items-center">
<div className="w-[100px] h-[100px] mb-8 bg-[#AAF0D1]/5 rounded-full flex justify-center items-center border border-[#AAF0D1]/30 shadow-[0_0_50px_rgba(170,240,209,0.2)] animate-pulse-glow">
<svg fill="none" height="40" stroke="#AAF0D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                Access Granted <span className="text-[#AAF0D1] drop-shadow-[0_0_10px_#AAF0D1]">.</span>
</h1>
<div className="mb-6 w-full max-w-lg mx-auto">
<h2 className="text-sm md:text-base font-medium typing-text w-fit">VantEdge: Where Intelligence Meets Excellence.</h2>
</div>
<p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed text-sm md:text-base">
                Your secure session is now active. Divyansh and the AI Office are preparing your project environment.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto font-semibold text-black bg-[#AAF0D1] shadow-[0_0_15px_rgba(170,240,209,0.4)] hover:shadow-[0_0_20px_rgba(170,240,209,0.6)] transition-all duration-300 px-8 py-3 rounded tracking-tight" onclick="location.href='#'">
                    Go to Dashboard
                </button>
<button className="btn-ghost w-full sm:w-auto font-semibold tracking-tight transition-all duration-300 px-8 py-3 rounded" onclick="location.href='#home'; document.getElementById('success-interface').classList.add('hidden'); document.getElementById('auth-interface').classList.remove('hidden');">
                    Return Home
                </button>
</div>
<footer className="mt-16 text-xs text-gray-600 font-['Roboto_Mono'] tracking-widest uppercase">
                Encrypted via VantEdge Protocol | divyansh024011@gmail.com
            </footer>
</div>
</section>

<section className="reveal flex items-center justify-center border-t border-white/10 px-6 bg-[#050505]" id="signup-interface">
<div className="w-full max-w-2xl bg-white/[0.03] border border-white/10 p-10 rounded-2xl relative z-10 shadow-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-2">Join the <span className="text-[#AAF0D1]">Sovereign</span></h2>
<p className="text-gray-400 text-center mb-10 text-sm tracking-tight">Deploy AI infrastructure for your business.</p>

<div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-[#AAF0D1]/5 blur-[80px] rounded-full pointer-events-none z-0"></div>
<form action="https://formsubmit.co/divyansh024011@gmail.com" className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10" method="POST">
<input name="_subject" type="hidden" value="NEW VANTEDGE SIGNUP!"/>
<div className="md:col-span-1">
<input className="w-full bg-black border border-white/10 rounded px-4 py-3 focus:border-[#AAF0D1] outline-none text-sm transition-all text-white placeholder:text-gray-600" name="name" placeholder="Full Name" required="" type="text"/>
</div>
<div className="md:col-span-1">
<input className="w-full bg-black border border-white/10 rounded px-4 py-3 focus:border-[#AAF0D1] outline-none text-sm transition-all text-white placeholder:text-gray-600" name="company" placeholder="Company Name" type="text"/>
</div>
<div className="md:col-span-2">
<input className="w-full bg-black border border-white/10 rounded px-4 py-3 focus:border-[#AAF0D1] outline-none text-sm transition-all text-white placeholder:text-gray-600" name="email" placeholder="Business Email" required="" type="email"/>
</div>
<div className="md:col-span-2">
<textarea className="w-full bg-black border border-white/10 rounded px-4 py-3 focus:border-[#AAF0D1] outline-none h-32 text-sm transition-all text-white placeholder:text-gray-600" name="requirements" placeholder="Tell us about your automation needs..."></textarea>
</div>
<button className="md:col-span-2 btn-signup-glow font-semibold tracking-widest py-4 rounded transition-all uppercase text-sm" type="submit">
                    Initialize Onboarding
                </button>
</form>
<div className="mt-6 text-center text-sm">
<span className="text-gray-500">Already a partner?</span>
<a className="text-[#AAF0D1] hover:underline ml-1 transition-all" href="#auth-interface">Login here</a>
</div>
</div>
</section>

<section className="reveal px-6 bg-[#050505] border-t border-white/10 text-center" id="contact">
<div className="max-w-3xl mx-auto">
<p className="font-['Roboto_Mono'] text-xs text-[#AAF0D1] mb-4 uppercase tracking-widest">05 // Contact</p>
<h2 className="text-4xl font-semibold text-white mb-6 tracking-tight">
          Initialize Connection
        </h2>
<p className="text-gray-400 mb-10 text-lg tracking-tight">
          Ready to engineer your high ground?
        </p>
<div className="flex flex-col items-center gap-4">
<a className="text-[#AAF0D1] text-xl md:text-2xl font-medium border-b border-[#AAF0D1]/50 pb-1 hover:text-white hover:drop-shadow-[0_0_10px_#AAF0D1] hover:border-white transition-all duration-300" href="mailto:divyansh024011@gmail.com">
                divyansh024011@gmail.com
            </a>
<a className="text-gray-400 text-lg md:text-xl font-medium hover:text-[#AAF0D1] transition-all duration-300" href="tel:+919643346645">
                +91 9643346645
            </a>
</div>
</div>
</section>
</main>


    </>
  );
}
