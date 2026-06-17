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



        lucide.createIcons();

        // 1. Text Reveal Animation
        const heroTitle = document.getElementById('hero-title');
        
        function splitText(element) {
            // Simple fade in for MVP robustness
            element.style.opacity = 1;
            element.classList.add('animate-[fadeIn_1.5s_ease-out]');
        }

        // Wait for fonts
        document.fonts.ready.then(() => {
            splitText(heroTitle);
        });

        // 2. Card Stack Rotation
        const cards = document.querySelectorAll('.stack-card');
        let cardIndex = 0;

        function rotateCards() {
            const frontCard = cards[cardIndex];
            frontCard.classList.add('leaving');
            
            setTimeout(() => {
                cards.forEach((card, index) => {
                    card.classList.remove('pos-1', 'pos-2', 'pos-3', 'leaving');
                    // Logic: 0 -> back, 1 -> front, 2 -> middle
                    let offset = (index - (cardIndex + 1) + 3) % 3;
                    
                    if (offset === 0) card.classList.add('pos-1');
                    else if (offset === 1) card.classList.add('pos-2');
                    else if (offset === 2) card.classList.add('pos-3');
                });
                cardIndex = (cardIndex + 1) % 3;
            }, 600);
        }
        
        // Auto rotate every 5s - Slower for government readability
        setInterval(rotateCards, 5000);

        // 3. Scroll Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

        // 4. Flashlight Effect
        const light = document.getElementById('flashlight');
        let mouseX = 0, mouseY = 0;
        let lightX = 0, lightY = 0;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateLight() {
            lightX += (mouseX - lightX) * 0.1;
            lightY += (mouseY - lightY) * 0.1;
            light.style.left = `${lightX}px`;
            light.style.top = `${lightY}px`;
            requestAnimationFrame(animateLight);
        }
        animateLight();
        
        // 5. Navbar Transition
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if(window.scrollY > 50) {
                nav.classList.add('border-white/10');
                nav.classList.remove('border-transparent');
            } else {
                nav.classList.remove('border-white/10');
                nav.classList.add('border-transparent');
            }
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
      
<div id="flashlight"></div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent backdrop-blur-md bg-black/80" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<div className="relative h-12 w-auto flex items-center">

<svg aria-label="Rise Collective Logo" className="h-10 w-auto fill-current text-white" viewbox="0 0 100 80">

<path d="M10 40 Q25 10 40 40 T70 40" fill="none" stroke="#f59e0b" strokeLinecap="round" strokeWidth="8"></path>
<path d="M30 40 Q45 10 60 40 T90 40" fill="none" stroke="#dc2626" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<div className="flex flex-col justify-center ml-3">
<span className="text-white font-bold text-lg tracking-tight leading-none uppercase">Rise Collective</span>
<span className="text-red-600 font-bold text-[10px] tracking-[0.2em] uppercase mt-0.5">Australia</span>
</div>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-[11px] font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#focus">Justice Focus</a>
<a className="text-[11px] font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="text-[11px] font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#partnerships">About</a>
<button className="btn-beam-container px-6 py-2.5 rounded-sm relative group bg-white/5 border-white/10">
<div className="absolute inset-0 rounded-sm overflow-hidden"><div className="btn-beam-light"></div></div>
<span className="relative z-10 text-[11px] font-semibold uppercase tracking-widest text-white group-hover:text-red-50 transition-colors">
                        Request Partnership
                    </span>
</button>
</div>

<button className="md:hidden text-white hover:text-red-500 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-neutral-950">

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505569127510-bde15360ca7f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10"></div>

<div className="absolute inset-0 z-10 w-full h-full border-x border-white/5 max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-12 pointer-events-none">
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full"></div>
</div>
</div>
<div className="max-w-7xl w-full z-20 mx-auto px-6 md:px-12 relative flex flex-col justify-center h-full pb-10">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-8 animate-[fadeIn_1s_ease-out]">
<span className="h-[2px] w-8 bg-red-600"></span>
<p className="text-red-500 uppercase tracking-[0.25em] text-[10px] font-bold">Northern Territory • Justice Adjacent</p>
</div>
<h1 className="font-sans font-medium text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-white mb-8 opacity-0 drop-shadow-xl" id="hero-title">
                    Building capability<br/>
<span className="text-neutral-500">within the system.</span>
</h1>
<p className="reveal-text text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed font-light mb-12 delay-500">
                    Aboriginal-led, trauma-informed practice delivering complex case navigation and workforce capability across corrections, courts, and government sectors.
                </p>
<div className="reveal-text delay-700 flex flex-col sm:flex-row gap-5">
<button className="px-8 py-3.5 bg-red-700 text-white rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-900/20 border border-transparent">
                        Partner With Us
                    </button>
<button className="px-8 py-3.5 border border-white/20 text-white rounded-sm text-[11px] font-bold uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300">
                        View Focus Areas
                    </button>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-neutral-900 py-10 relative z-20">
<div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
<p className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Operational Partners &amp; Stakeholders</p>
</div>
<div className="marquee-container overflow-hidden w-full relative">
<div className="marquee-content flex gap-24 items-center opacity-60 w-max">

<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">Dept. Attorney-General &amp; Justice</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">NT Corrections</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">Local Court NT</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">Territory Families</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">NAAJA</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">Danila Dilba</span>

<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">Dept. Attorney-General &amp; Justice</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">NT Corrections</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">Local Court NT</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">Territory Families</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">NAAJA</span>
<span className="font-sans font-semibold text-lg tracking-tight text-white uppercase">Danila Dilba</span>
</div>
</div>
</section>

<section className="py-24 bg-black relative border-b border-white/5" id="focus">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-text">
<div>
<span className="text-red-600 text-[10px] font-bold uppercase tracking-widest mb-3 block">Operational Scope</span>
<h2 className="font-sans text-4xl md:text-5xl text-white tracking-tight font-medium">Systemic Interventions</h2>
</div>
<p className="text-neutral-400 max-w-xs text-sm leading-relaxed mt-6 md:mt-0 text-left">
                    Targeted programs designed to reduce recidivism and support complex needs within statutory frameworks.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 hover:border-red-900/50 transition-all duration-500 rounded-sm relative overflow-hidden reveal-text">
<div className="mb-10 text-neutral-500 group-hover:text-red-500 transition-colors">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">Corrections &amp; Reintegration</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l border-white/10 pl-4">Pre-release planning and post-release stabilization for high-risk cohorts, focusing on housing, compliance, and family reconnection.</p>
<span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors flex items-center gap-2 font-semibold">
                        View Framework <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</div>

<div className="group p-8 border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 hover:border-amber-900/50 transition-all duration-500 rounded-sm relative overflow-hidden reveal-text delay-100">
<div className="mb-10 text-neutral-500 group-hover:text-amber-500 transition-colors">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">Complex Case Navigation</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l border-white/10 pl-4">Specialized support for individuals navigating overlapping statutory orders, including child protection, DFV, and parole conditions.</p>
<span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors flex items-center gap-2 font-semibold">
                        View Framework <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</div>

<div className="group p-8 border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 hover:border-red-900/50 transition-all duration-500 rounded-sm relative overflow-hidden reveal-text delay-200">
<div className="mb-10 text-neutral-500 group-hover:text-red-500 transition-colors">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">Workforce Capability</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l border-white/10 pl-4">Training and advisory for government and NGO sectors on trauma-informed practice, cultural safety, and vicarious trauma mitigation.</p>
<span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors flex items-center gap-2 font-semibold">
                        View Framework <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 overflow-hidden" id="programs">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="reveal-text">
<span className="text-[10px] text-red-600 uppercase tracking-[0.2em] mb-4 block font-bold">The Rise Methodology</span>
<h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-8 font-medium">
                    Evidence-led.<br/>
<span className="text-neutral-600">Culturally Authoritative.</span>
</h2>
<p className="text-neutral-400 font-light leading-relaxed mb-10 text-lg">
                    We do not offer generic support. Our models are built for the specific complexities of the Northern Territory justice landscape, prioritizing safety, accountability, and measurable outcomes.
                </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1.5 w-1.5 h-1.5 bg-red-600"></div>
<div>
<span className="text-white block font-semibold text-sm mb-1 uppercase tracking-wider">Trauma-Informed</span>
<p className="text-xs text-neutral-500 leading-relaxed">Understanding the neurobiological impact of trauma on behavior within the justice system.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1.5 w-1.5 h-1.5 bg-amber-500"></div>
<div>
<span className="text-white block font-semibold text-sm mb-1 uppercase tracking-wider">System-Aware</span>
<p className="text-xs text-neutral-500 leading-relaxed">Navigating statutory requirements while maintaining engagement with participants.</p>
</div>
</li>
</ul>
<div className="mt-12 pt-8 border-t border-white/5">
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Relevant for</p>
<div className="flex gap-4 text-white text-xs font-medium">
<span className="bg-white/5 px-3 py-1 rounded-sm">Ministers</span>
<span className="bg-white/5 px-3 py-1 rounded-sm">Corrections</span>
<span className="bg-white/5 px-3 py-1 rounded-sm">Legal Aid</span>
</div>
</div>
</div>

<div className="relative w-full max-w-md mx-auto h-[460px] flex items-center justify-center">
<div className="card-stack" id="cardStack">

<div className="stack-card flex flex-col" data-index="0">
<div className="h-[45%] overflow-hidden relative">

<div className="absolute inset-0 bg-neutral-800"></div>
<img alt="Engagement" className="w-full h-full object-cover opacity-50 grayscale contrast-125" src="https://images.unsplash.com/photo-1475721027767-4d563534d673?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-[55%] p-8 flex flex-col justify-center bg-neutral-900">
<span className="text-red-500 font-mono text-[10px] mb-3">STAGE 01</span>
<h3 className="text-white text-xl font-medium mb-3 uppercase tracking-wide">Secure Engagement</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Establishing rapport within custodial or mandated settings. Moving beyond compliance to genuine participation through culturally safe protocols.</p>
</div>
</div>

<div className="stack-card flex flex-col" data-index="1">
<div className="h-[45%] overflow-hidden relative">
<div className="absolute inset-0 bg-neutral-800"></div>
<img alt="Stabilisation" className="w-full h-full object-cover opacity-50 grayscale contrast-125" src="https://images.unsplash.com/photo-1579370318021-d1933c2a6305?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-[55%] p-8 flex flex-col justify-center bg-neutral-900">
<span className="text-red-500 font-mono text-[10px] mb-3">STAGE 02</span>
<h3 className="text-white text-xl font-medium mb-3 uppercase tracking-wide">Crisis Stabilisation</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Addressing immediate psychosocial stressors—housing, acute health, and safety—to create a foundation for behavioral change.</p>
</div>
</div>

<div className="stack-card flex flex-col" data-index="2">
<div className="h-[45%] overflow-hidden relative">
<div className="absolute inset-0 bg-neutral-800"></div>
<img alt="Integration" className="w-full h-full object-cover opacity-50 grayscale contrast-125" src="https://images.unsplash.com/photo-1464639351491-a172a2aa1c28?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-[55%] p-8 flex flex-col justify-center bg-neutral-900">
<span className="text-red-500 font-mono text-[10px] mb-3">STAGE 03</span>
<h3 className="text-white text-xl font-medium mb-3 uppercase tracking-wide">Systemic Integration</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Sustainable reconnection with community and family, supported by robust inter-agency communication and safety planning.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/5 pb-12 mb-12">
<div className="reveal-text text-left">
<span className="block text-4xl font-medium text-white tracking-tighter mb-2">100%</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500">NT Owned &amp; Operated</span>
</div>
<div className="reveal-text delay-100 text-left">
<span className="block text-4xl font-medium text-white tracking-tighter mb-2">Accredited</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Aboriginal Corp</span>
</div>
<div className="reveal-text delay-200 text-left">
<span className="block text-4xl font-medium text-white tracking-tighter mb-2">Darwin</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Primary HQ</span>
</div>
<div className="reveal-text delay-300 text-left">
<span className="block text-4xl font-medium text-white tracking-tighter mb-2">Corrections</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Specialist Focus</span>
</div>
</div>
<div className="text-center max-w-2xl mx-auto">
<h3 className="text-white text-2xl font-medium mb-6">Ready to discuss a pilot or partnership?</h3>
<p className="text-neutral-400 text-sm mb-8">We engage directly with government departments and statutory bodies to co-design effective interventions.</p>
<a className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-red-600 px-6 py-3 rounded-sm transition-colors uppercase text-[11px] tracking-widest font-bold" href="mailto:partnerships@risecollective.org.au">
                    Contact Executive Team <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<footer className="bg-neutral-950 pt-24 pb-12 border-t border-white/10 z-20 relative">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
<div className="md:col-span-5 pr-8">
<a className="flex items-center gap-2 mb-8" href="#">
<div className="flex flex-col">
<span className="text-white font-bold text-lg tracking-tight uppercase">Rise Collective</span>
<span className="text-red-600 font-bold text-[10px] tracking-[0.2em] uppercase">Australia</span>
</div>
</a>
<h3 className="font-sans text-xl text-neutral-300 mb-6 tracking-tight max-w-sm leading-snug">
                        Driving systemic change in the Northern Territory justice sector.
                    </h3>
<div className="mt-8 pt-8 border-t border-white/5">
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Acknowledgment</p>
<p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
                            Rise Collective Australia acknowledges the Larrakia people as the Traditional Owners of the Darwin region. We pay our respects to Elders past, present and emerging.
                        </p>
</div>
</div>
<div className="md:col-span-2 md:col-start-7">
<span className="text-[10px] text-red-600 uppercase tracking-widest mb-6 block font-bold">Organisation</span>
<ul className="space-y-3">
<li><a className="text-neutral-400 hover:text-white transition-colors text-xs font-medium" href="#">About Rise</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-xs font-medium" href="#">Leadership</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-xs font-medium" href="#">Governance</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-xs font-medium" href="#">Careers</a></li>
</ul>
</div>
<div className="md:col-span-2">
<span className="text-[10px] text-red-600 uppercase tracking-widest mb-6 block font-bold">Programs</span>
<ul className="space-y-3">
<li><a className="text-neutral-400 hover:text-white transition-colors text-xs font-medium" href="#">Justice Support</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-xs font-medium" href="#">SupportLink</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-xs font-medium" href="#">Workforce Training</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-xs font-medium" href="#">Consulting</a></li>
</ul>
</div>
<div className="md:col-span-2">
<span className="text-[10px] text-red-600 uppercase tracking-widest mb-6 block font-bold">Contact</span>
<ul className="space-y-4">
<li>
<p className="text-[10px] uppercase text-neutral-600 mb-1">General Enquiries</p>
<a className="text-white hover:text-red-500 transition-colors text-xs font-medium" href="mailto:admin@risecollective.org.au">admin@risecollective.org.au</a>
</li>
<li>
<p className="text-[10px] uppercase text-neutral-600 mb-1">Location</p>
<span className="text-neutral-400 text-xs font-medium block">Darwin, NT 0800</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/10">
<span className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2024 Rise Collective Australia. All Rights Reserved.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-[10px] text-neutral-600 hover:text-white uppercase tracking-widest transition-colors" href="#">Privacy Policy</a>
<a className="text-[10px] text-neutral-600 hover:text-white uppercase tracking-widest transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
