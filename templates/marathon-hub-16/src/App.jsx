import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            // Reveal Animation
            const reveals = document.querySelectorAll('.reveal');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });
            reveals.forEach((element) => observer.observe(element));

            // Navbar hover effect (Acid Green Underline)
            const links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    const dot = link.querySelector('span');
                    if(dot) dot.style.opacity = '1';
                });
                link.addEventListener('mouseleave', () => {
                    const dot = link.querySelector('span');
                    if(dot) dot.style.opacity = '0';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="scanline"></div>

<header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#CCFF00]/20">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">

<div className="relative flex items-baseline gap-4 group cursor-pointer select-none py-2 pr-4">

<div className="relative flex flex-col items-center">

<div className="absolute -top-1 w-full flex justify-between px-3">
<div className="text-white group-hover:text-[#CCFF00] transition-colors duration-300">
<iconify-icon icon="lucide:plus" strokeWidth="2.5" width="10"></iconify-icon>
</div>
<div className="text-white group-hover:text-[#CCFF00] transition-colors duration-300">
<iconify-icon icon="lucide:plus" strokeWidth="2.5" width="10"></iconify-icon>
</div>
</div>

<h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#CCFF00] transform scale-y-[1.3] origin-bottom m-0 leading-none" style={{WebkitTextStroke: '1.5px #050505'}}>
                         MARATHON
                     </h1>

<div className="absolute -bottom-4 w-full text-center">
<span className="font-mono text-[10px] font-bold text-white tracking-[0.4em] group-hover:text-[#CCFF00] transition-colors duration-300" style={{textShadow: '0px 1px 2px #000'}}>13 42</span>
</div>
</div>

<h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#CCFF00] transform scale-y-[1.3] origin-bottom m-0 leading-none" style={{WebkitTextStroke: '1.5px #050505'}}>
                    HUB
                </h1>
</div>

<nav className="hidden md:flex items-center gap-8 mt-2">
<a className="nav-link text-xs font-mono font-medium text-neutral-400 hover:text-[#CCFF00] uppercase tracking-widest transition-colors flex items-center gap-2" href="#">
<span className="w-1 h-1 bg-[#CCFF00] opacity-0 transition-opacity"></span>
                    Home
                </a>
<a className="nav-link text-xs font-mono font-medium text-neutral-400 hover:text-[#CCFF00] uppercase tracking-widest transition-colors flex items-center gap-2" href="#">
<span className="w-1 h-1 bg-[#CCFF00] opacity-0 transition-opacity"></span>
                    News
                </a>
<a className="nav-link text-xs font-mono font-medium text-neutral-400 hover:text-[#CCFF00] uppercase tracking-widest transition-colors flex items-center gap-2" href="#">
<span className="w-1 h-1 bg-[#CCFF00] opacity-0 transition-opacity"></span>
                    Runners
                </a>
<a className="nav-link text-xs font-mono font-medium text-neutral-400 hover:text-[#CCFF00] uppercase tracking-widest transition-colors flex items-center gap-2" href="#">
<span className="w-1 h-1 bg-[#CCFF00] opacity-0 transition-opacity"></span>
                    Loadouts
                </a>
</nav>

<div className="flex items-center gap-4 mt-2">
<button className="hidden md:flex items-center gap-2 text-xs font-mono text-[#CCFF00] hover:text-white transition-colors uppercase tracking-widest">
                    [ Login ]
                </button>
<button className="group relative px-6 py-2 bg-transparent overflow-hidden border border-[#CCFF00] hover:bg-[#CCFF00] transition-colors duration-300">
<span className="relative z-10 text-xs font-mono font-bold tracking-widest uppercase text-[#CCFF00] group-hover:text-black">
                        Deploy
                    </span>
<div className="absolute inset-0 bg-[#CCFF00] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</button>

<button className="md:hidden text-[#CCFF00]">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-36 pb-20 md:pt-52 md:pb-24 px-4 border-b border-[#CCFF00]/20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#CCFF00] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col items-start">
<div className="inline-flex items-center gap-3 mb-8 pl-1 pr-4 py-1 border-l-2 border-[#CCFF00] bg-[#CCFF00]/5">
<iconify-icon className="text-[#CCFF00] animate-pulse" icon="lucide:radio" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-[#CCFF00] text-xs font-mono tracking-widest uppercase">Signal_Interception_Confirmed</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tight leading-[0.85] mb-8 text-white glitch-wrapper mix-blend-lighten" data-text="THE COLONY">
                    THE COLONY
                </h1>
<div className="w-full grid md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-7">
<p className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l border-white/10 pl-6">
                            Decrypting files from the Tau Ceti IV surface. Stay updated on <span className="text-[#CCFF00]">development logs</span>, lore drops, and technical playtests. The silence is loud.
                        </p>
</div>
<div className="md:col-span-5 flex flex-col md:items-end gap-4">
<div className="flex items-center gap-4 text-[#CCFF00]">
<iconify-icon icon="lucide:mouse" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-widest">Scroll_To_Decrypt</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-[#CCFF00]/20 bg-[#050505] py-2.5">
<div className="whitespace-nowrap flex gap-12 animate-marquee font-mono text-xs text-[#CCFF00] tracking-[0.2em] opacity-80">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:alert-triangle" strokeWidth="1.5"></iconify-icon> UESC MARATHON ARRIVAL IMMINENT</span>
<span className="flex items-center gap-2"><iconify-icon icon="lucide:shield-alert" strokeWidth="1.5"></iconify-icon> SECURITY BREACH IN SECTOR 7</span>
<span className="flex items-center gap-2"><iconify-icon icon="lucide:cpu" strokeWidth="1.5"></iconify-icon> AI CONSTRUCT RAMPANCY DETECTED</span>
<span className="flex items-center gap-2"><iconify-icon icon="lucide:scan-face" strokeWidth="1.5"></iconify-icon> WELCOME TO THE COLONY</span>
<span className="flex items-center gap-2"><iconify-icon icon="lucide:alert-triangle" strokeWidth="1.5"></iconify-icon> UESC MARATHON ARRIVAL IMMINENT</span>
<span className="flex items-center gap-2"><iconify-icon icon="lucide:shield-alert" strokeWidth="1.5"></iconify-icon> SECURITY BREACH IN SECTOR 7</span>
</div>
</div>
</section>

<section className="w-full border-b border-[#CCFF00]/20 reveal">
<div className="grid lg:grid-cols-2">

<div className="bg-[#050505] text-white p-8 md:p-12 lg:p-20 border-r border-[#CCFF00]/20 relative overflow-hidden flex flex-col justify-center">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
<div className="relative z-10">
<span className="font-mono text-xs text-[#CCFF00] uppercase tracking-[0.2em] mb-4 block font-medium">News</span>
<h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter mb-6 text-white leading-[0.9]">NEWS</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-12 max-w-md font-light">
                        Stay connected with the latest news, including upcoming releases, developer updates, and playtest information.
                    </p>

<div className="bg-[#0A0A0A] border border-white/10 flex flex-col sm:flex-row group hover:border-[#CCFF00]/50 transition-colors duration-300">

<div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 relative overflow-hidden bg-neutral-900">
<img alt="News" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="p-6 flex flex-col items-start justify-between flex-grow">
<div>
<span className="block font-mono text-[10px] text-[#CCFF00] tracking-widest uppercase mb-2">April 15, 2024</span>
<h3 className="text-lg font-semibold tracking-tight text-white leading-tight mb-3 group-hover:text-[#CCFF00] transition-colors">NEW GAMEPLAY TRAILER REVEALED</h3>
<p className="text-neutral-500 text-xs leading-relaxed mb-6 font-light line-clamp-2">
                                    Check out the explosive new gameplay trailer showcasing intense action, new mechanics, and more.
                                </p>
</div>
<button className="bg-white text-black px-6 py-3 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-[#CCFF00] transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                                See All News
                                <iconify-icon icon="lucide:arrow-right" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="bg-[#CCFF00] text-black p-8 md:p-12 lg:p-20 relative flex flex-col justify-center">

<div className="flex gap-1 mb-8 absolute top-8 left-8 md:static md:mb-8">
<div className="w-2.5 h-2.5 bg-black"></div>
<div className="w-2.5 h-2.5 bg-black"></div>
<div className="w-2.5 h-2.5 bg-black/30"></div>
</div>
<div className="relative z-10 mt-6 md:mt-0">
<h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter mb-6 text-black leading-[0.9]">GUIDES</h2>
<p className="text-black/80 text-sm leading-relaxed mb-12 max-w-md font-medium">
                        Explore in-depth guides to master the game, with tips, strategies, and detailed walkthroughs.
                    </p>

<div className="bg-[#F0F5D1] flex flex-col sm:flex-row shadow-xl group hover:-translate-y-1 transition-transform duration-300">

<div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 relative overflow-hidden bg-neutral-200">
<img alt="Guide" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="p-6 flex flex-col items-start justify-between flex-grow">
<div>
<span className="block font-mono text-[10px] text-black/60 tracking-widest uppercase mb-2">April 12, 2024</span>
<h3 className="text-lg font-bold tracking-tight text-black leading-tight mb-3">BEGINNER’S GUIDE: TIPS &amp; TRICKS TO GET STARTED</h3>
<p className="text-black/60 text-xs leading-relaxed mb-6 font-medium line-clamp-2">
                                    Learn essential tips and strategies to dominate the game from the very beginning.
                                </p>
</div>
<button className="bg-black text-[#CCFF00] px-6 py-3 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                                See All Guides
                                <iconify-icon icon="lucide:arrow-right" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#050505] border-b border-[#CCFF00]/20 py-32 lg:py-48 relative overflow-hidden reveal">
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="flex flex-col items-start">
<span className="font-mono text-xs md:text-sm text-neutral-300 mb-8 tracking-[0.2em] uppercase border-l-2 border-[#CCFF00] pl-4">
                    A PvPvE Survival Extraction FPS
                </span>
<h2 className="font-semibold text-5xl md:text-7xl lg:text-[8rem] xl:text-[9rem] leading-[0.85] tracking-tighter text-white uppercase select-none">
<span className="block">From The</span>
<span className="block">Creators Of</span>
<span className="block text-neutral-400 transition-colors duration-500 hover:text-white">Halo And</span>
<span className="block text-white transition-colors duration-500 hover:text-[#CCFF00]">Destiny</span>
</h2>
</div>
</div>

<div className="absolute bottom-0 right-0 p-20 hidden lg:block opacity-20 pointer-events-none">
<div className="w-64 h-64 border border-[#CCFF00]/20 rounded-full flex items-center justify-center">
<div className="w-48 h-48 border border-dashed border-[#CCFF00]/30 rounded-full animate-spin-slow"></div>
</div>
</div>
</section>

<section className="border-b border-[#CCFF00]/20 bg-[#CCFF00]/5 py-24 relative overflow-hidden">
<div className="bg-grid-acid absolute inset-0 opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1 reveal">
<div className="aspect-square md:aspect-video lg:aspect-square bg-[#050505] border border-[#CCFF00]/30 relative flex items-center justify-center p-8 group">

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#CCFF00]"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#CCFF00]"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#CCFF00]"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#CCFF00]"></div>

<div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative animate-spin-slow">
<div className="absolute inset-0 border-t border-[#CCFF00] rounded-full"></div>
<div className="absolute inset-2 border-r border-white/20 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#CCFF00] shadow-[0_0_20px_#CCFF00]"></div>
</div>
<div className="absolute bottom-6 left-6 font-mono text-[10px] text-[#CCFF00] space-y-1">
<div>SYS.TEMP: 98.4F</div>
<div>CORE.LOAD: 42%</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 reveal">
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 bg-[#CCFF00]"></span>
<h2 className="text-sm font-mono uppercase tracking-widest text-[#CCFF00]">Mission_Protocol</h2>
</div>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                        We are the architects of the <span className="text-[#CCFF00]">simulation</span>.
                    </h3>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
                        Our objective is not merely survival, but dominance over the digital frontier. We build systems that challenge the status quo, extracting value from chaos.
                    </p>
<div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-mono text-white mb-1">03</div>
<div className="text-xs font-mono text-[#CCFF00] uppercase tracking-widest">Active Sectors</div>
</div>
<div>
<div className="text-3xl font-mono text-white mb-1">1.2M</div>
<div className="text-xs font-mono text-[#CCFF00] uppercase tracking-widest">Runners Deployed</div>
</div>
</div>
</div>
</div>
</div>
</section>

<main className="flex-grow max-w-7xl mx-auto w-full px-4 py-24">

<div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4 reveal">
<h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest flex items-center gap-3">
<iconify-icon className="text-[#CCFF00]" icon="lucide:folder-open" strokeWidth="1.5"></iconify-icon>
                Latest_Decryptions
            </h2>
<div className="hidden md:flex items-center gap-4 text-xs font-mono text-neutral-500">
<span className="text-[#CCFF00]">ALL</span>
<span className="hover:text-white cursor-pointer transition-colors">DEV_LOGS</span>
<span className="hover:text-white cursor-pointer transition-colors">LORE</span>
<span className="hover:text-white cursor-pointer transition-colors">PATCH_NOTES</span>
</div>
</div>

<article className="grid md:grid-cols-2 gap-0 border border-white/10 bg-[#050505] mb-12 group tech-card reveal">
<div className="relative h-64 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-white/10 group-hover:border-[#CCFF00]/50 transition-colors">
<div className="absolute inset-0 bg-[#CCFF00]/5 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center relative">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#CCFF00 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="w-full h-full flex flex-col justify-between p-6">
<div className="flex justify-between w-full">
<iconify-icon className="text-white/20" icon="lucide:hard-drive" strokeWidth="1.5" width="32"></iconify-icon>
<iconify-icon className="text-[#CCFF00]" icon="lucide:maximize" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="font-mono text-6xl text-white/5 font-bold self-center">FILE_01</div>
</div>
</div>
</div>
<div className="p-8 md:p-12 flex flex-col justify-between relative">
<div>
<div className="flex items-center gap-4 text-xs font-mono text-[#CCFF00] mb-5 tracking-widest uppercase">
<span className="px-2 py-0.5 border border-[#CCFF00] bg-[#CCFF00]/10">Priority_High</span>
<span>2023.10.24</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 leading-tight group-hover:text-[#CCFF00] transition-colors">
                        Architecting the Cyber-Void
                    </h3>
<p className="text-neutral-400 font-light leading-relaxed mb-6">
                        An in-depth look at how we build verticality and tension into the environments of Tau Ceti IV. The silence is loud, and the corners are sharp.
                    </p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-[#CCFF00]/30 transition-colors">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[#CCFF00] flex items-center justify-center text-black">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-xs font-mono uppercase text-neutral-400">ADMIN</span>
</div>
<span className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-white group-hover:text-[#CCFF00] transition-colors">
                        Access File
                        <iconify-icon className="icon-arrow transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</article>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="flex flex-col border border-white/10 bg-[#050505] tech-card group reveal h-full">
<div className="h-56 bg-[#0a0a0a] border-b border-white/10 relative overflow-hidden p-6 flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50"><iconify-icon className="text-white" icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon></div>
<div className="mt-auto">
<div className="w-12 h-1 bg-[#CCFF00] mb-2"></div>
<div className="text-white font-mono text-lg">ENERGY_WEAPONS</div>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="text-xs font-mono text-neutral-500 mb-3 flex justify-between">
<span>FILE: 8832</span>
<span className="text-[#CCFF00]">LORE</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-white group-hover:text-[#CCFF00] transition-colors">The Runners: Factions of the Underground</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                        Who are you fighting for? A breakdown of the corporate interests vying for control.
                    </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<span className="text-[10px] font-mono uppercase text-neutral-500">READ: 4M</span>
<iconify-icon className="icon-arrow text-neutral-400 group-hover:text-[#CCFF00]" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</article>

<article className="flex flex-col border border-white/10 bg-[#050505] tech-card group reveal h-full" style={{transitionDelay: '100ms'}}>
<div className="h-56 bg-[#0a0a0a] border-b border-white/10 relative overflow-hidden p-6 flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50"><iconify-icon className="text-white" icon="lucide:database" strokeWidth="1.5" width="24"></iconify-icon></div>
<div className="mt-auto">
<div className="w-12 h-1 bg-[#CCFF00] mb-2"></div>
<div className="text-white font-mono text-lg">DATA_MINING</div>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="text-xs font-mono text-neutral-500 mb-3 flex justify-between">
<span>FILE: 9941</span>
<span className="text-[#CCFF00]">TECH</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-white group-hover:text-[#CCFF00] transition-colors">Networking: The Fusion Rifle Sync</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                        Balancing tick-rates and client prediction in zero-atmosphere environments.
                    </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<span className="text-[10px] font-mono uppercase text-neutral-500">READ: 6M</span>
<iconify-icon className="icon-arrow text-neutral-400 group-hover:text-[#CCFF00]" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</article>

<article className="flex flex-col border border-white/10 bg-[#050505] tech-card group reveal h-full" style={{transitionDelay: '200ms'}}>
<div className="h-56 bg-[#0a0a0a] border-b border-white/10 relative overflow-hidden p-6 flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50"><iconify-icon className="text-white" icon="lucide:shopping-cart" strokeWidth="1.5" width="24"></iconify-icon></div>
<div className="mt-auto">
<div className="w-12 h-1 bg-[#CCFF00] mb-2"></div>
<div className="text-white font-mono text-lg">ECONOMY_V2</div>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="text-xs font-mono text-neutral-500 mb-3 flex justify-between">
<span>FILE: 2210</span>
<span className="text-[#CCFF00]">META</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-white group-hover:text-[#CCFF00] transition-colors">Economy Reset: Credit Distribution</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                        Adjustments to extraction values and gear insurance policies for the upcoming season.
                    </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<span className="text-[10px] font-mono uppercase text-neutral-500">READ: 3M</span>
<iconify-icon className="icon-arrow text-neutral-400 group-hover:text-[#CCFF00]" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</article>
</div>

<div className="mt-16 flex justify-center reveal">
<button className="group relative px-8 py-4 bg-transparent overflow-hidden border border-white/20 hover:border-[#CCFF00] transition-colors">
<div className="absolute inset-0 w-0 bg-[#CCFF00] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
<span className="relative flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-white group-hover:text-black font-bold">
<iconify-icon icon="lucide:refresh-cw" strokeWidth="1.5"></iconify-icon>
                    Load_More_Data
                </span>
</button>
</div>
</main>

<section className="border-y border-[#CCFF00]/20 bg-[#CCFF00]/5 relative">
<div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="text-center lg:text-left max-w-lg">
<div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
<iconify-icon className="text-[#CCFF00]" icon="lucide:mail" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-mono text-[#CCFF00] uppercase tracking-widest">Network_Access</h3>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-4 text-white">Subscribe for Priority Access</h3>
<p className="text-neutral-400 text-sm font-light">Get encryption keys and playtest invitations sent directly to your terminal. No spam, only intel.</p>
</div>
<form className="w-full lg:w-auto flex flex-col sm:flex-row gap-0 shadow-2xl">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-neutral-500">
<iconify-icon icon="lucide:at-sign" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full md:w-80 h-14 bg-[#050505] border border-white/20 border-r-0 sm:border-r-0 px-12 text-sm font-mono text-white outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] placeholder:text-neutral-700 transition-all" placeholder="OPERATIVE_ID@MAIL.COM" type="email"/>
</div>
<button className="h-14 bg-[#CCFF00] text-black px-8 text-xs font-mono font-bold tracking-widest uppercase hover:bg-white transition-colors whitespace-nowrap flex items-center justify-center gap-2" type="button">
                    Submit
                    <iconify-icon icon="lucide:check" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#CCFF00]" icon="lucide:infinity" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-mono font-bold tracking-tighter text-white">MARATHON</span>
</div>
<p className="text-neutral-500 text-xs leading-relaxed max-w-[200px]">
                        The colony is waiting. Establish your connection and begin the extraction protocol.
                    </p>
</div>

<div>
<h4 className="text-xs font-mono text-[#CCFF00] uppercase tracking-widest mb-6">Database</h4>
<ul className="space-y-4 text-sm font-light text-neutral-400">
<li><a className="hover:text-white hover:pl-2 transition-all duration-300" href="#">Operatives</a></li>
<li><a className="hover:text-white hover:pl-2 transition-all duration-300" href="#">Armory</a></li>
<li><a className="hover:text-white hover:pl-2 transition-all duration-300" href="#">Missions</a></li>
<li><a className="hover:text-white hover:pl-2 transition-all duration-300" href="#">Lore</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-mono text-[#CCFF00] uppercase tracking-widest mb-6">Protocol</h4>
<ul className="space-y-4 text-sm font-light text-neutral-400">
<li><a className="hover:text-white hover:pl-2 transition-all duration-300" href="#">Privacy</a></li>
<li><a className="hover:text-white hover:pl-2 transition-all duration-300" href="#">Terms</a></li>
<li><a className="hover:text-white hover:pl-2 transition-all duration-300" href="#">Cookies</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-mono text-[#CCFF00] uppercase tracking-widest mb-6">Frequency</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors" href="#">
<iconify-icon icon="simple-icons:discord" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors" href="#">
<iconify-icon icon="lucide:youtube" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-[10px] font-mono text-neutral-600">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<iconify-icon icon="lucide:copyright" strokeWidth="1.5"></iconify-icon>
<span>2024 MARATHON FAN CONCEPT. ALL RIGHTS RESERVED.</span>
</div>
<div className="flex gap-6 uppercase tracking-widest">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse"></span>
                        Server_Status: Online
                    </span>
<span>Ver. 0.9.4</span>
</div>
</div>
</div>
</footer>

<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 40s linear infinite;
        }
        .animate-spin-slow {
            animation: spin 15s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>

    </>
  );
}
