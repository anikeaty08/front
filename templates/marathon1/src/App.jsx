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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let isMobileMenuOpen = false;

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('mobile-menu-icon');
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (isMobileMenuOpen) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                icon.setAttribute('icon', 'solar:close-linear');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = ''; // Restore background scrolling
            }
        }

        function switchTab(event, tabId) {
            if (event) {
                event.preventDefault();
            }

            // If mobile menu is open, close it on click
            if (isMobileMenuOpen) {
                toggleMobileMenu();
            }
            
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex');
            });
            
            // Show target page
            const targetPage = document.getElementById(tabId);
            if (targetPage) {
                targetPage.classList.remove('hidden');
                targetPage.classList.add('flex');
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update Header Nav Active State
            if (event && event.currentTarget) {
                const target = event.currentTarget;
                
                // For desktop nav
                if (target.classList.contains('nav-link')) {
                    document.querySelectorAll('.nav-link').forEach(el => {
                        el.classList.remove('text-white', 'border-[#e0ff00]');
                        el.classList.add('text-zinc-400', 'border-transparent');
                    });
                    target.classList.remove('text-zinc-400', 'border-transparent');
                    target.classList.add('text-white', 'border-[#e0ff00]');
                } 
                // For mobile nav
                else if (target.classList.contains('mobile-nav-link')) {
                    document.querySelectorAll('.mobile-nav-link').forEach(el => {
                        el.classList.remove('text-white');
                        el.classList.add('text-zinc-400');
                    });
                    target.classList.remove('text-zinc-400');
                    target.classList.add('text-white');
                }
                // If clicked from anywhere else, reset desktop nav states to match the active tab
                else {
                    document.querySelectorAll('.nav-link').forEach(el => {
                        if(el.getAttribute('onclick').includes(tabId)) {
                            el.classList.remove('text-zinc-400', 'border-transparent');
                            el.classList.add('text-white', 'border-[#e0ff00]');
                        } else {
                            el.classList.remove('text-white', 'border-[#e0ff00]');
                            el.classList.add('text-zinc-400', 'border-transparent');
                        }
                    });
                }
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #3f3f46 0%, transparent 50%)'}}></div>
<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>

<header className="fixed top-0 w-full z-50 flex items-center justify-between p-6 md:px-12 backdrop-blur-md bg-black/60 border-b border-white/10">
<div className="flex items-center gap-8">
<button className="text-xl md:text-2xl font-semibold tracking-tighter uppercase text-white hover:text-[#e0ff00] transition-colors relative z-50" onclick="switchTab(event, 'page-home')">
                M A R A T H O N
            </button>
<nav className="hidden md:flex items-center gap-6">
<button className="nav-link text-sm font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors pb-1 border-b-2 border-transparent" onclick="switchTab(event, 'page-game')">Game</button>
<button className="nav-link text-sm font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors pb-1 border-b-2 border-transparent" onclick="switchTab(event, 'page-lore')">Lore</button>
<button className="nav-link text-sm font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors pb-1 border-b-2 border-transparent" onclick="switchTab(event, 'page-community')">Community</button>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center justify-center bg-[#e0ff00] text-black px-6 py-2 text-sm font-semibold uppercase tracking-widest hover:bg-white transition-colors relative z-50" href="#" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
                Pre-Order
            </a>
<button className="md:hidden text-white hover:text-[#e0ff00] transition-colors flex items-center justify-center relative z-50" onclick="toggleMobileMenu()">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" id="mobile-menu-icon" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex-col items-center justify-center gap-8 hidden" id="mobile-menu">
<button className="mobile-nav-link text-2xl font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" onclick="switchTab(event, 'page-home')">Home</button>
<button className="mobile-nav-link text-2xl font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" onclick="switchTab(event, 'page-game')">Game</button>
<button className="mobile-nav-link text-2xl font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" onclick="switchTab(event, 'page-lore')">Lore</button>
<button className="mobile-nav-link text-2xl font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors" onclick="switchTab(event, 'page-community')">Community</button>
<a className="mt-8 flex items-center justify-center bg-[#e0ff00] text-black px-10 py-4 text-lg font-semibold uppercase tracking-widest hover:bg-white transition-colors" href="#" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
            Pre-Order
        </a>
</div>

<div className="relative z-10 flex-grow flex flex-col pt-24 md:pt-0">

<main className="page-section flex flex-col w-full h-full" id="page-home">

<section className="min-h-[90vh] flex flex-col border-white/10 border-b pr-6 pl-6 relative items-center justify-center"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://www.youtube.com/watch?v=jFzR8bN13FA&amp;t=107s"></video>
<div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="w-2 h-2 rounded-full bg-[#e0ff00] animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-300">Transmission Active</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter uppercase leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                        Become<br/>A Runner
                    </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl font-light tracking-wide mb-10">
                        Enter the mysterious zone of Tau Ceti IV. Extract artifacts, outsmart rivals, and survive the unknown in a relentless PvPvE extraction shooter.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 items-center">
<a className="group relative flex items-center justify-center bg-black/50 backdrop-blur-sm text-[#e0ff00] border border-[#e0ff00] px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#e0ff00] hover:text-black transition-all duration-300" href="#" style={{clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'}}>
<span className="relative z-10 flex items-center gap-2">
                                Watch Trailer
                                <iconify-icon className="group-hover:animate-ping" height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</span>
</a>
<button className="text-sm font-medium text-zinc-400 hover:text-white uppercase tracking-wider transition-colors border-b border-transparent hover:border-white pb-1 mt-4 sm:mt-0" onclick="switchTab(event, 'page-game')">
                            Learn More
                        </button>
</div>
</div>

<div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-zinc-700 hidden md:block z-10"></div>
<div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-zinc-700 hidden md:block z-10"></div>
<div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-zinc-700 hidden md:block z-10"></div>
<div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-zinc-700 hidden md:block z-10"></div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10">
<div className="p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-zinc-950/50">
<span className="text-[#e0ff00] text-sm font-semibold uppercase tracking-widest mb-4 block">01 // Extraction</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight uppercase mb-6 leading-tight">
                        Risk Everything.
                    </h2>
<p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
                        Every drop is a gamble. Secure alien artifacts and valuable tech, but remember: if you fall in the zone, you lose it all. The stakes have never been higher.
                    </p>
<button className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#e0ff00] uppercase tracking-wider transition-colors w-fit group" onclick="switchTab(event, 'page-game')">
                        View Arsenal
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="relative aspect-square lg:aspect-auto bg-zinc-900 group overflow-hidden flex items-center justify-center p-12">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-transparent z-10"></div>

<div className="relative z-20 w-64 h-64 border border-[#e0ff00]/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
<div className="w-48 h-48 border border-[#e0ff00]/50 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute w-2 h-2 bg-[#e0ff00] top-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_#e0ff00]"></div>
<div className="absolute w-2 h-2 bg-[#e0ff00] bottom-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_#e0ff00]"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center bg-[#e0ff00] text-black">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter uppercase leading-none mb-8">
                    Fame. Infamy.<br/>Survival.
                </h2>
<button className="bg-black text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-zinc-900 transition-colors flex items-center gap-2 group" onclick="switchTab(event, 'page-community')" style={{clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'}}>
                    Join the Network
                    <iconify-icon height="18" icon="solar:user-plus-linear" width="18"></iconify-icon>
</button>
</section>
</main>

<main className="page-section hidden flex-col w-full min-h-screen pt-12 md:pt-24 px-6 md:px-12 pb-24" id="page-game">
<div className="max-w-7xl mx-auto w-full">
<div className="mb-16">
<span className="text-[#e0ff00] text-sm font-semibold uppercase tracking-widest mb-4 block">System Overview</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                        Mechanics
                    </h1>
<p className="text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
                        Customize your runner. Upgrade your cybernetics. Choose your loadout carefully. Your survival on Tau Ceti IV depends on your preparation and execution.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-white/10 bg-zinc-950/40 p-8 hover:border-[#e0ff00]/50 transition-colors group">
<div className="w-12 h-12 border border-zinc-700 rounded-sm flex items-center justify-center mb-8 text-zinc-400 group-hover:text-[#e0ff00] group-hover:border-[#e0ff00] transition-colors">
<iconify-icon height="24" icon="solar:shield-cross-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase mb-4">Cybernetics</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-6">
                            Augment your physical capabilities. Trade humanity for survival. Enhance speed, resilience, or sensory perception to gain an edge in the zone.
                        </p>
<div className="w-full bg-zinc-900 h-1 mb-2">
<div className="bg-[#e0ff00] h-full w-[75%]"></div>
</div>
<span className="text-xs text-zinc-600 font-medium uppercase tracking-widest">System Load: 75%</span>
</div>

<div className="border border-white/10 bg-zinc-950/40 p-8 hover:border-[#e0ff00]/50 transition-colors group">
<div className="w-12 h-12 border border-zinc-700 rounded-sm flex items-center justify-center mb-8 text-zinc-400 group-hover:text-[#e0ff00] group-hover:border-[#e0ff00] transition-colors">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase mb-4">Arsenal</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-6">
                            From precision energy rifles to brutal kinetic sidearms. Mod your weapons with alien tech recovered during extractions to create devastating combos.
                        </p>
<div className="w-full bg-zinc-900 h-1 mb-2">
<div className="bg-white h-full w-[40%]"></div>
</div>
<span className="text-xs text-zinc-600 font-medium uppercase tracking-widest">Mod Capacity: 40%</span>
</div>

<div className="border border-white/10 bg-zinc-950/40 p-8 hover:border-[#e0ff00]/50 transition-colors group">
<div className="w-12 h-12 border border-zinc-700 rounded-sm flex items-center justify-center mb-8 text-zinc-400 group-hover:text-[#e0ff00] group-hover:border-[#e0ff00] transition-colors">
<iconify-icon height="24" icon="solar:radar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight uppercase mb-4">Navigation</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-6">
                            The map is constantly shifting. Use your localized radar to track anomalies, avoid automated defenses, and pinpoint extraction zones.
                        </p>
<div className="w-full bg-zinc-900 h-1 mb-2">
<div className="bg-zinc-500 h-full w-[90%] flex justify-end">
<span className="w-2 h-2 bg-[#e0ff00] rounded-full -mt-0.5 animate-pulse"></span>
</div>
</div>
<span className="text-xs text-zinc-600 font-medium uppercase tracking-widest">Signal Strength: Optimal</span>
</div>
</div>
</div>
</main>

<main className="page-section hidden flex-col w-full min-h-screen pt-12 md:pt-24 px-6 md:px-12 pb-24" id="page-lore">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col">
<span className="text-[#e0ff00] text-sm font-semibold uppercase tracking-widest mb-4 block">Archive Directory</span>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase mb-8 text-white border-b border-white/10 pb-6">
                        Data Logs
                    </h1>
<div className="flex flex-col gap-2">
<button className="text-left px-4 py-3 bg-white/5 border-l-2 border-[#e0ff00] text-sm font-medium uppercase tracking-wider text-white transition-colors flex justify-between items-center">
<span>01 // Tau Ceti IV</span>
<span className="text-xs text-zinc-500">Unlocked</span>
</button>
<button className="text-left px-4 py-3 hover:bg-white/5 border-l-2 border-transparent hover:border-zinc-500 text-sm font-medium uppercase tracking-wider text-zinc-500 transition-colors flex justify-between items-center">
<span>02 // The Ghost Ship</span>
<span className="text-xs text-zinc-700">Decrypted</span>
</button>
<button className="text-left px-4 py-3 hover:bg-white/5 border-l-2 border-transparent hover:border-zinc-500 text-sm font-medium uppercase tracking-wider text-zinc-500 transition-colors flex justify-between items-center">
<span>03 // Origin of Artifacts</span>
<span className="text-xs text-zinc-700">Decrypted</span>
</button>
<button className="text-left px-4 py-3 opacity-50 border-l-2 border-transparent text-sm font-medium uppercase tracking-wider text-zinc-600 flex justify-between items-center cursor-not-allowed">
<span>04 // ███████</span>
<iconify-icon height="16" icon="solar:lock-password-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-8">
<div className="border border-white/10 bg-zinc-950/80 p-6 md:p-10 font-mono text-sm leading-relaxed h-full relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e0ff00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8 text-zinc-500 text-xs uppercase tracking-widest border-b border-white/5 pb-4">
<span>Source: Orbital Hub</span>
<span className="hidden sm:inline">•</span>
<span>Classification: Level 2</span>
<span className="sm:ml-auto flex items-center gap-2 mt-2 sm:mt-0">
                                Status: Active <span className="w-2 h-2 bg-[#e0ff00] rounded-full animate-pulse"></span>
</span>
</div>
<h2 className="text-2xl font-semibold tracking-tight uppercase text-white mb-6 font-['Space_Grotesk']">Tau Ceti IV: The Abandoned Colony</h2>
<div className="text-zinc-400 space-y-6">
<p>
                                Initial scans indicated a thriving colony. Thirty thousand souls, cutting-edge terraforming engines, a beacon of human expansion. When the first recon teams dropped, they found silence.
                            </p>
<p>
                                The infrastructure is intact. Coffee mugs left on desks, automated transport networks still running on phantom schedules. But the colonists are gone. Vanished.
                            </p>
<p className="border-l border-[#e0ff00] pl-4 text-zinc-300">
<span className="text-[#e0ff00]">&gt;</span> WARNING: Anomalous energy signatures detected in Sector 4.
                            </p>
<p>
                                Now, the zone is flooded with Runners. Mercenaries, scavengers, and corporate operatives diving into the ghost town to retrieve alien artifacts left behind by whatever—or whoever—cleared the colony. It's not a rescue mission anymore. It's a gold rush.
                            </p>
<div className="pt-4 flex items-center text-[#e0ff00]">
<span>Awaiting input</span>
<span className="w-2 h-4 bg-[#e0ff00] ml-1 animate-[pulse_1s_step-end_infinite]"></span>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section hidden flex-col w-full min-h-screen pt-12 md:pt-24 px-6 md:px-12 pb-24" id="page-community">
<div className="max-w-7xl mx-auto w-full flex flex-col items-center">
<div className="text-center mb-16">
<span className="text-[#e0ff00] text-sm font-semibold uppercase tracking-widest mb-4 block">Global Network</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase mb-6">
                        The Runner Hub
                    </h1>
<p className="text-base text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Track top performers, join factions, and stay updated with the latest dispatches from the orbital command.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

<div className="flex flex-col overflow-x-auto">
<h3 className="text-lg font-semibold tracking-tight uppercase text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-[#e0ff00]" height="20" icon="solar:cup-star-linear" width="20"></iconify-icon>
                            Extraction Leaders
                        </h3>
<div className="border border-white/10 bg-zinc-950/40 rounded-sm divide-y divide-white/5 min-w-[500px]">

<div className="grid grid-cols-12 gap-4 p-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest bg-white/5">
<div className="col-span-2">Rank</div>
<div className="col-span-6">Callsign</div>
<div className="col-span-4 text-right">Value Extracted</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center text-sm font-medium hover:bg-white/5 transition-colors">
<div className="col-span-2 text-[#e0ff00]">01</div>
<div className="col-span-6 text-white flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-800 rounded-sm border border-zinc-700 shrink-0"></div>
<span className="truncate">VOID_WALKER</span>
</div>
<div className="col-span-4 text-right text-zinc-400">9,420,100c</div>
</div>
<div className="grid grid-cols-12 gap-4 p-4 items-center text-sm font-medium hover:bg-white/5 transition-colors">
<div className="col-span-2 text-zinc-300">02</div>
<div className="col-span-6 text-white flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-800 rounded-sm border border-zinc-700 shrink-0"></div>
<span className="truncate">SILENT_ECHO</span>
</div>
<div className="col-span-4 text-right text-zinc-400">8,104,500c</div>
</div>
<div className="grid grid-cols-12 gap-4 p-4 items-center text-sm font-medium hover:bg-white/5 transition-colors">
<div className="col-span-2 text-zinc-400">03</div>
<div className="col-span-6 text-white flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-800 rounded-sm border border-zinc-700 shrink-0"></div>
<span className="truncate">JAX_REBORN</span>
</div>
<div className="col-span-4 text-right text-zinc-400">7,950,000c</div>
</div>
<div className="grid grid-cols-12 gap-4 p-4 items-center text-sm font-medium hover:bg-white/5 transition-colors">
<div className="col-span-2 text-zinc-500">04</div>
<div className="col-span-6 text-white flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-800 rounded-sm border border-zinc-700 shrink-0"></div>
<span className="truncate">NEXUS_PRIME</span>
</div>
<div className="col-span-4 text-right text-zinc-400">7,120,300c</div>
</div>
</div>
<button className="mt-4 text-xs text-[#e0ff00] uppercase tracking-widest font-semibold hover:text-white transition-colors self-start">View Full Rankings -&gt;</button>
</div>

<div className="flex flex-col">
<h3 className="text-lg font-semibold tracking-tight uppercase text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-[#e0ff00]" height="20" icon="solar:rss-linear" width="20"></iconify-icon>
                            Command Dispatches
                        </h3>
<div className="flex flex-col gap-4">

<a className="group block border border-white/10 bg-zinc-950/40 p-5 hover:border-zinc-500 transition-colors" href="#">
<span className="text-xs text-[#e0ff00] font-medium uppercase tracking-widest mb-2 block">Patch Notes // V1.2.4</span>
<h4 className="text-lg font-semibold tracking-tight text-white mb-2 group-hover:text-[#e0ff00] transition-colors">Weapon Balancing &amp; New Zones</h4>
<p className="text-sm text-zinc-500 font-light line-clamp-2">Adjustments to kinetic rifle falloff damage, and opening of the Sector 7 Hydro-Facilities for exploration.</p>
</a>

<a className="group block border border-white/10 bg-zinc-950/40 p-5 hover:border-zinc-500 transition-colors" href="#">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-2 block">Community Event</span>
<h4 className="text-lg font-semibold tracking-tight text-white mb-2 group-hover:text-[#e0ff00] transition-colors">The Artifact Rush</h4>
<p className="text-sm text-zinc-500 font-light line-clamp-2">Double extraction value for all alien tech recovered this weekend. Group up and secure the bag.</p>
</a>
</div>
</div>
</div>
</div>
</main>
</div>

<footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8 px-6 md:px-12 relative z-10 mt-auto">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<button className="text-2xl font-semibold tracking-tighter uppercase text-white mb-6 block text-left" onclick="switchTab(event, 'page-home')">
                    M A R A T H O N
                </button>
<p className="text-xs text-zinc-500 font-light max-w-sm leading-relaxed mb-6">
                    A sci-fi PvPvE extraction shooter from Bungie. Available on PS5, Xbox Series X|S, and PC.
                </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-[#e0ff00] transition-colors" href="#"><iconify-icon height="24" icon="solar:scooter-linear" width="24"></iconify-icon></a>
<a className="text-zinc-500 hover:text-[#e0ff00] transition-colors" href="#"><iconify-icon height="24" icon="solar:tv-linear" width="24"></iconify-icon></a>
<a className="text-zinc-500 hover:text-[#e0ff00] transition-colors" href="#"><iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-2">Intel</span>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">News</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Media</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Forums</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-2">Legal</span>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors" href="#">Cookie Policy</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-zinc-600 font-light">
<p>© 2024 Bungie, Inc. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<iconify-icon height="16" icon="solar:global-linear" width="16"></iconify-icon>
<span className="uppercase tracking-wider">English (US)</span>
</div>
</div>
</footer>



    </>
  );
}
