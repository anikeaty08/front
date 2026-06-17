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

        // 1. Column Reveal Animation Generation
        const colGrid = document.getElementById('column-grid');
        const numCols = window.innerWidth < 768 ? 6 : 12;
        for (let i = 0; i < numCols; i++) {
            const col = document.createElement('div');
            col.className = 'relative h-full w-full';
            const mask = document.createElement('div');
            mask.className = 'col-reveal-mask';
            // Stagger delay for wave effect
            mask.style.animationDelay = `${i * 0.05}s`;
            col.appendChild(mask);
            colGrid.appendChild(col);
        }

        // 2. Dynamic Text Splitting (Word + Character)
        const heroTitle = document.getElementById('hero-title');
        
        function splitTextV2(element) {
            let charIndexGlobal = 0;
            const processText = (text) => {
                const fragment = document.createDocumentFragment();
                const parts = text.split(/(\s+)/);
                
                parts.forEach(part => {
                    if (!part) return;
                    
                    if (part.match(/^\s+$/)) {
                        const spaceSpan = document.createElement('span');
                        spaceSpan.innerHTML = '&nbsp;';
                        spaceSpan.className = 'space-char';
                        fragment.appendChild(spaceSpan);
                    } else {
                        const wordSpan = document.createElement('span');
                        wordSpan.className = 'word-wrapper';
                        
                        for (let char of part) {
                            const charWrap = document.createElement('span');
                            charWrap.className = 'char-wrapper';
                            const charSlide = document.createElement('span');
                            charSlide.className = 'char-slide';
                            charSlide.textContent = char;
                            charSlide.style.animationDelay = `${0.2 + (charIndexGlobal * 0.03)}s`;
                            
                            charWrap.appendChild(charSlide);
                            wordSpan.appendChild(charWrap);
                            charIndexGlobal++;
                        }
                        fragment.appendChild(wordSpan);
                    }
                });
                return fragment;
            };

            const walk = (node) => {
                if (node.nodeType === 3) { 
                    const processed = processText(node.textContent);
                    node.parentNode.replaceChild(processed, node);
                } else if (node.nodeType === 1) { 
                    Array.from(node.childNodes).forEach(child => walk(child));
                }
            };

            walk(element);
            element.style.opacity = 1;
        }
        
        splitTextV2(heroTitle);


        // 3. Rotating Card Stack Logic
        const cards = document.querySelectorAll('.stack-card');
        let currentIndex = 0;

        function rotateCards() {
            const frontCard = cards[currentIndex];
            frontCard.classList.add('leaving');
            
            setTimeout(() => {
                cards.forEach((card, index) => {
                    card.classList.remove('pos-1', 'pos-2', 'pos-3', 'leaving');
                    let offset = (index - (currentIndex + 1) + 3) % 3;
                    if (offset === 0) card.classList.add('pos-1');
                    else if (offset === 1) card.classList.add('pos-2');
                    else if (offset === 2) card.classList.add('pos-3');
                });
                currentIndex = (currentIndex + 1) % 3;
            }, 600);
        }

        setInterval(rotateCards, 3500);


        // 4. Flashlight / Mouse Follower
        const flashlight = document.getElementById('flashlight');
        let mouseX = 0, mouseY = 0;
        let flashlightX = 0, flashlightY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateFlashlight() {
            flashlightX += (mouseX - flashlightX) * 0.1;
            flashlightY += (mouseY - flashlightY) * 0.1;
            flashlight.style.left = `${flashlightX}px`;
            flashlight.style.top = `${flashlightY}px`;
            requestAnimationFrame(animateFlashlight);
        }
        animateFlashlight();


        // 5. Scroll Reveal
        const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

        // Nav Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) navbar.classList.add('bg-[#050505]/90', 'backdrop-blur-md', 'border-white/5');
            else navbar.classList.remove('bg-[#050505]/90', 'backdrop-blur-md', 'border-white/5');
        });
        
        function scrollToContact() {
            document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
        }
    
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

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
<a className="z-50 group" href="#">
<span className="font-serif text-xl md:text-2xl tracking-tighter text-white font-medium group-hover:text-amber-100 transition-colors">GTG Studios</span>
</a>
<div className="hidden md:flex items-center gap-8 lg:gap-12">
<a className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300" href="#work">Portfolio</a>
<a className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300" href="#about">Approach</a>
<a className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300" href="#team">Team</a>

<button className="btn-beam-container px-6 py-2 rounded-full relative group" onclick="scrollToContact()">

<div className="btn-beam-mask">
<div className="btn-beam-light"></div>
</div>

<span className="relative z-10 text-xs uppercase tracking-widest text-white group-hover:text-white transition-colors">
                        Connect
                    </span>
</button>
</div>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Cinematic Background" className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_15s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 h-full w-full pointer-events-none" id="column-grid">

</div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505] z-10"></div>
</div>
<div className="md:px-12 w-full max-w-[1400px] z-20 mx-auto px-6 relative">
<div className="max-w-5xl">
<p className="text-amber-200/80 uppercase tracking-[0.2em] text-xs font-medium mb-6 ml-1 animate-[fadeIn_2s_ease-out]">Authentic Storytelling</p>

<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] md:leading-[0.9] text-white tracking-tighter mb-8 opacity-0 transition-opacity duration-700" id="hero-title">
                    Defining culture through <span className="text-white/50 italic font-light">cinematic excellence.</span>
</h1>
<p className="reveal-text text-lg md:text-xl text-white/60 max-w-lg leading-relaxed font-light mb-16 delay-700">
                    We partner with global icons to craft narratives that resonate. From concept to screen, we build the footprint for the world's most influential voices.
                </p>

<div className="reveal-text w-full max-w-3xl border-t border-white/10 pt-8 delay-1000">
<p className="text-xs uppercase tracking-widest text-white/30 mb-6">Trusted Partners</p>
<div className="marquee-container overflow-hidden w-full relative">
<div className="marquee-content flex gap-12 items-center opacity-60 w-max">

<span className="font-serif font-bold text-xl tracking-tighter">NIKE</span>
<span className="font-serif font-bold text-xl tracking-tighter">DISNEY</span>
<span className="font-serif font-bold text-xl tracking-tighter">SKYDANCE</span>
<span className="font-serif font-bold text-xl tracking-tighter">NETFLIX</span>
<span className="font-serif font-bold text-xl tracking-tighter">HBO</span>
<span className="font-serif font-bold text-xl tracking-tighter">SONY</span>
<span className="font-serif font-bold text-xl tracking-tighter">APPLE TV+</span>

<span className="font-serif font-bold text-xl tracking-tighter">NIKE</span>
<span className="font-serif font-bold text-xl tracking-tighter">DISNEY</span>
<span className="font-serif font-bold text-xl tracking-tighter">SKYDANCE</span>
<span className="font-serif font-bold text-xl tracking-tighter">NETFLIX</span>
<span className="font-serif font-bold text-xl tracking-tighter">HBO</span>
<span className="font-serif font-bold text-xl tracking-tighter">SONY</span>
<span className="font-serif font-bold text-xl tracking-tighter">APPLE TV+</span>

<span className="font-serif font-bold text-xl tracking-tighter">NIKE</span>
<span className="font-serif font-bold text-xl tracking-tighter">DISNEY</span>
<span className="font-serif font-bold text-xl tracking-tighter">SKYDANCE</span>
<span className="font-serif font-bold text-xl tracking-tighter">NETFLIX</span>
<span className="font-serif font-bold text-xl tracking-tighter">HBO</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-[#050505] relative z-20" id="work">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 reveal-text">
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tighter">Selected Works</h2>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors mt-4 md:mt-0 pb-1 border-b border-transparent hover:border-white group" href="#">
                    View Full Index <i className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12">

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-6 relative rounded-2xl">
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Project Imagery" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=2825&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal-text flex justify-between items-start border-t border-white/10 pt-4">
<div>
<span className="block text-[10px] text-amber-200/60 uppercase tracking-widest mb-2">Documentary</span>
<h3 className="font-serif text-3xl text-white group-hover:text-amber-100 transition-colors tracking-tight">Origins of Speed</h3>
</div>
<span className="text-white/40 text-xs font-mono pt-1">2023</span>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="overflow-hidden aspect-[4/5] mb-6 relative rounded-2xl">
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Project Imagery" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal-text flex justify-between items-start border-t border-white/10 pt-4">
<div>
<span className="block text-[10px] text-amber-200/60 uppercase tracking-widest mb-2">Campaign</span>
<h3 className="font-serif text-3xl text-white group-hover:text-amber-100 transition-colors tracking-tight">The Unknown Frontier</h3>
</div>
<span className="text-white/40 text-xs font-mono pt-1">2024</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal-text">
<span className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4 block flex items-center gap-2">
<span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span> The Process
                </span>
<h2 className="font-serif text-4xl md:text-6xl text-white tracking-tighter leading-[1.1] mb-8">
                    Bridging <span className="text-white/30 italic">culture</span> &amp; <span className="text-gradient-gold">commerce</span>.
                </h2>
<p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                    We don't follow trends; we set the visual tempo. Our methodology relies on three distinct pillars that transform abstract concepts into tangible legacy.
                </p>
<div className="flex gap-12 border-t border-white/10 pt-8">
<div>
<span className="block text-4xl font-serif text-white tracking-tight">20+</span>
<span className="text-[10px] uppercase tracking-widest text-white/30 mt-1 block">Global Campaigns</span>
</div>
<div>
<span className="block text-4xl font-serif text-white tracking-tight">1B+</span>
<span className="text-[10px] uppercase tracking-widest text-white/30 mt-1 block">Impressions</span>
</div>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto h-[480px] flex items-center justify-center">
<div className="card-stack" id="cardStack">

<div className="stack-card flex flex-col" data-index="0">
<div className="h-2/3 overflow-hidden relative">
<img alt="Research" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>
<div className="h-1/3 p-6 flex flex-col justify-center bg-[#0F0F0F]">
<span className="text-amber-400/80 font-mono text-xs mb-2">01. DEVELOPMENT</span>
<h3 className="text-white text-2xl font-serif mb-2 tracking-tight">The Blueprint</h3>
<p className="text-white/40 text-sm">Unearthing the core narrative through deep cultural research.</p>
</div>
</div>

<div className="stack-card flex flex-col" data-index="1">
<div className="h-2/3 overflow-hidden relative">
<img alt="Production" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>
<div className="h-1/3 p-6 flex flex-col justify-center bg-[#0F0F0F]">
<span className="text-amber-400/80 font-mono text-xs mb-2">02. PRODUCTION</span>
<h3 className="text-white text-2xl font-serif mb-2 tracking-tight">Cinematic Scale</h3>
<p className="text-white/40 text-sm">High-fidelity execution with industry-leading crews and tech.</p>
</div>
</div>

<div className="stack-card flex flex-col" data-index="2">
<div className="h-2/3 overflow-hidden relative">
<img alt="Distribution" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>
<div className="h-1/3 p-6 flex flex-col justify-center bg-[#0F0F0F]">
<span className="text-amber-400/80 font-mono text-xs mb-2">03. IMPACT</span>
<h3 className="text-white text-2xl font-serif mb-2 tracking-tight">Cultural Release</h3>
<p className="text-white/40 text-sm">Strategic placement designed for maximum resonance.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505] border-t border-white/5" id="team">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<h2 className="reveal-text font-serif text-4xl md:text-5xl text-white tracking-tighter mb-16 text-center">The Architects</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="group text-center reveal-text">
<div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-neutral-900 rounded-xl">
<img alt="Team Member" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl text-white mb-1 tracking-tight">James Sterling</h3>
<p className="text-[10px] uppercase tracking-widest text-amber-200/60">Executive Producer</p>
</div>

<div className="group text-center reveal-text delay-100">
<div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-neutral-900 rounded-xl">
<img alt="Team Member" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl text-white mb-1 tracking-tight">Elena Rostova</h3>
<p className="text-[10px] uppercase tracking-widest text-amber-200/60">Creative Director</p>
</div>

<div className="group text-center reveal-text delay-200">
<div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-neutral-900 rounded-xl">
<img alt="Team Member" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl text-white mb-1 tracking-tight">Marcus Thorne</h3>
<p className="text-[10px] uppercase tracking-widest text-amber-200/60">Head of Strategy</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-20 pb-10 border-t border-white/5 z-20 relative">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2">
<span className="font-serif text-2xl text-white block mb-6 tracking-tight">GTG Studios</span>
<p className="text-white/40 max-w-xs font-light text-sm leading-relaxed">
                        A global production house creating definitive stories for the world's most influential brands and figures.
                    </p>
</div>
<div>
<span className="text-[10px] text-white/30 uppercase tracking-widest mb-6 block">Explore</span>
<ul className="space-y-4">
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#work">Portfolio</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#about">Capabilities</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#team">Team</a></li>
</ul>
</div>
<div>
<span className="text-[10px] text-white/30 uppercase tracking-widest mb-6 block">Connect</span>
<ul className="space-y-4">
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">Instagram</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="#">LinkedIn</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm" href="mailto:hello@gtgstudios.com">hello@gtgstudios.com</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/5">
<span className="text-[10px] text-white/20 uppercase tracking-widest">© 2024 GTG Studios. All Rights Reserved.</span>
<span className="text-[10px] text-white/20 uppercase tracking-widest mt-4 md:mt-0">Los Angeles — New York</span>
</div>
</div>
</footer>



    </>
  );
}
