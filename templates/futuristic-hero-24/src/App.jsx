import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section h2, section p, .glass-panel').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter font-semibold text-white hover:text-cyan-400 transition-colors duration-300" href="#">
                A E G I S
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#about">ORIGIN</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#powers">ABILITIES</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#gallery">ARMORY</a>
</div>
<button className="group relative px-6 py-2 bg-white/5 rounded-full overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative text-xs font-semibold tracking-widest uppercase text-white group-hover:text-cyan-300">Connect</span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] bg-glow"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&amp;w=2676&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
</div>
<div className="relative z-20 container mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-8 reveal-text" style={{animationDelay: '0.1s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                System Online
            </div>
<h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 reveal-text" style={{animationDelay: '0.2s'}}>
                BORN IN SHADOW.<br/>
<span className="text-white text-glow">FORGED IN POWER.</span>
</h1>
<p className="max-w-xl mx-auto text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-12 reveal-text" style={{animationDelay: '0.4s'}}>
                The world doesn't need another hero. It needs a guardian who watches from the void. Faster than light, stronger than steel, darker than night.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 reveal-text" style={{animationDelay: '0.6s'}}>
<button className="group relative px-8 py-4 bg-white text-black rounded-sm overflow-hidden transition-all hover:scale-105 duration-300">
<span className="relative z-10 font-semibold tracking-tight">INITIATE PROTOCOL</span>
<div className="absolute inset-0 bg-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
</button>
<button className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-white transition-colors">
<i className="w-4 h-4 fill-current ml-0.5" data-lucide="play"></i>
</div>
<span className="text-sm font-medium tracking-wide">WATCH ORIGIN</span>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
<i className="w-4 h-4 text-zinc-500" data-lucide="chevron-down"></i>
</div>
</section>

<section className="relative py-24 md:py-32 overflow-hidden" id="about">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-1/2 relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10">
<img alt="Aegis Suit" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1614726365723-49faaa5bf206?q=80&amp;w=1587&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
<div className="glass-panel p-4 rounded-lg animate-float" style={{animationDelay: '0s'}}>
<div className="flex items-center gap-2 text-cyan-400 mb-1">
<i className="w-4 h-4" data-lucide="zap"></i>
<span className="text-xs font-bold uppercase tracking-wider">Speed</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-cyan-400 h-full w-[98%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>
<div className="glass-panel p-4 rounded-lg animate-float" style={{animationDelay: '1.5s'}}>
<div className="flex items-center gap-2 text-purple-400 mb-1">
<i className="w-4 h-4" data-lucide="shield"></i>
<span className="text-xs font-bold uppercase tracking-wider">Durability</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-purple-400 h-full w-[100%] shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                        THE ARCHITECT OF <br/>
<span className="text-zinc-500">TOMORROW'S PEACE.</span>
</h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                        Subject 7, known as "Aegis", was not born—he was engineered. A perfect fusion of organic adaptability and cybernetic precision. Following the Collapse of 2089, Aegis emerged from the ruins of the Citadels as the sole protector of the Neo-Kyoto remnant.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-4">
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">Mach 10</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Flight Velocity</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">500TB</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Neural Processing</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">Unknown</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Energy Output</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">Class S</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Threat Level</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5" id="powers">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Capabilities</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">COMBAT MODULES</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-cyan-500/30">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-cyan-500/50">
<i className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Photon Manipulation</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Ability to bend light for invisibility cloaking or condense it into high-impact photon blasts capable of piercing titanium alloy.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-purple-500/30">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-purple-500/50">
<i className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Technopathy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Direct neural interface with any digital system. Can override security protocols and control automated defense grids remotely.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-amber-500/30">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-amber-500/50">
<i className="w-6 h-6 text-white group-hover:text-amber-400 transition-colors" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Hyper-Regeneration</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Nano-bot swarms repair biological and synthetic tissue damage in seconds, granting near-invulnerability in sustained combat.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="container mx-auto px-6 max-w-4xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-16">PROJECT AEGIS: TIMELINE</h2>
<div className="relative">

<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1 pl-8 md:pl-0">
<span className="text-cyan-500 text-xs font-bold tracking-widest">2089</span>
<h3 className="text-xl font-medium text-white mt-1">The Great Collapse</h3>
<p className="text-sm text-zinc-500 mt-2">Global infrastructure fails. The Citadels fall silent. The "Guardian" initiative is greenlit in secret bunkers.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-950 border border-zinc-500 rounded-full group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_15px_rgba(0,0,0,1)]"></div>
<div className="md:w-5/12 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
<div className="md:w-5/12 order-1 md:order-1"></div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-950 border border-zinc-500 rounded-full group-hover:border-purple-400 group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_15px_rgba(0,0,0,1)]"></div>
<div className="md:w-5/12 text-left order-2 md:order-3 pl-8 md:pl-0">
<span className="text-purple-500 text-xs font-bold tracking-widest">2095</span>
<h3 className="text-xl font-medium text-white mt-1">First Contact</h3>
<p className="text-sm text-zinc-500 mt-2">Subject 7 integrates with the Symbiote-A.I. core. Vital signs stabilize. First consciousness detected.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1 pl-8 md:pl-0">
<span className="text-white text-xs font-bold tracking-widest">PRESENT DAY</span>
<h3 className="text-xl font-medium text-white mt-1">Shadow War</h3>
<p className="text-sm text-zinc-500 mt-2">Aegis operates from the ionosphere, intercepting orbital threats before they reach the surface.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] z-10"></div>
<div className="md:w-5/12 order-3"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20" id="gallery">
<div className="container mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">TACTICAL VARIANTS</h2>
<p className="text-zinc-500 mt-2">Adaptive suit configurations for hostile environments.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[500px] relative rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Cyberpunk City" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest border border-cyan-500/30 px-2 py-1 rounded mb-2 inline-block">MK. IV</span>
<h3 className="text-2xl font-medium text-white mb-1">Stealth Operative</h3>
<p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Light-bending nano-weave for absolute zero visibility.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[500px] relative rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Neon Red" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm" src="https://images.unsplash.com/photo-1626222880182-45e771ce020c?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-red-500 text-[10px] font-bold uppercase tracking-widest border border-red-500/30 px-2 py-1 rounded mb-2 inline-block">MK. VII</span>
<h3 className="text-2xl font-medium text-white mb-1">Crimson Buster</h3>
<p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Heavy plating reinforced for kinetic impact absorption.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[500px] relative rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Space" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest border border-amber-500/30 px-2 py-1 rounded mb-2 inline-block">MK. X</span>
<h3 className="text-2xl font-medium text-white mb-1">Solar Voyager</h3>
<p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Radiation shielding for deep space interception.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10"></div>
<div className="absolute inset-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[100px] animate-pulse"></div>
</div>
<div className="relative z-10 text-center px-6">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-tight">
                THE WORLD IS WAITING.<br/>
<span className="text-cyan-400">ANSWER THE CALL.</span>
</h2>
<p className="text-zinc-400 mb-10 max-w-lg mx-auto">Join the defense network. Get exclusive access to mission briefings and suit schematics.</p>
<button className="magnetic-btn group relative inline-flex items-center justify-center px-8 py-4 bg-transparent overflow-hidden rounded-sm transition-all">
<div className="btn-bg absolute inset-0 bg-white group-hover:bg-cyan-400 transition-colors duration-300"></div>
<span className="relative z-10 font-bold text-black tracking-wide flex items-center gap-2">
                    JOIN THE ALLIANCE
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<a className="text-2xl font-semibold tracking-tighter text-white" href="#">A E G I S</a>
<p className="text-zinc-500 text-sm mt-4 max-w-xs">Protecting the remnants of humanity from the shadows of the void.</p>
</div>
<div className="grid grid-cols-2 gap-12 sm:gap-24">
<div>
<h4 className="text-white font-medium mb-4">Database</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Origins</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Abilities</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Enemies</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Network</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Discord</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2099 Aegis Defense Systems. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
