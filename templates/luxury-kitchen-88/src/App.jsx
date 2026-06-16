import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Narrative State Management
        const narratorImages = [
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop", // 0: Intro (Suit)
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2487&auto=format&fit=crop", // 1: Origin (Coat/Outdoors - Placeholder)
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop", // 2: Design (Espresso vibe)
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2487&auto=format&fit=crop", // 3: Factory (Attentive)
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop"  // 4: Service (Suit)
        ];

        function switchScene(index) {
            // Loop through all scenes to separate logic for active vs inactive
            document.querySelectorAll('.scene').forEach((el) => {
                // Determine if this element is the target
                const elIndex = parseInt(el.id.split('-')[1]);
                
                if (elIndex === index) {
                    // ACTIVATE
                    // Ensure it is visible before fading in
                    el.style.display = 'flex';
                    
                    // Small delay to allow display block to register before opacity transition
                    setTimeout(() => {
                        el.classList.add('active');
                        el.style.opacity = '1';
                        
                        // Re-trigger animations
                        const anims = el.querySelectorAll('.animate-reveal-up, .animate-reveal-right');
                        anims.forEach(anim => {
                            anim.style.animation = 'none';
                            anim.offsetHeight; /* trigger reflow */
                            anim.style.animation = null; 
                        });
                    }, 20);

                } else {
                    // DEACTIVATE
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                        el.style.opacity = '0';
                        
                        // Only hide after transition finishes
                        setTimeout(() => {
                            // Check if it is still inactive (user didn't click back fast)
                            if (!el.classList.contains('active')) {
                                el.style.display = 'none';
                            }
                        }, 800);
                    } else {
                        // Already inactive, ensure hidden
                        el.style.display = 'none';
                    }
                }
            });

            // Update Backgrounds
            document.querySelectorAll('.bg-image').forEach(el => el.classList.remove('active'));
            const bgIndex = index === 2 ? 0 : index; 
            const targetBg = document.getElementById(`bg-${index}`) || document.getElementById(`bg-0`);
            targetBg.classList.add('active');

            // Update Narrator 
            const narrator = document.getElementById('narrator-img');
            narrator.style.opacity = '0';
            setTimeout(() => {
                narrator.src = narratorImages[index];
                narrator.style.opacity = '1';
            }, 500);

            // Update Footer
            document.getElementById('page-indicator').innerText = `0${index} / 04`;
        }

        function toggleModal(id) {
            const modal = document.getElementById(id);
            if(modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            // Ensure proper initial state before switching
            switchScene(0);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 bg-stone-950">

<img alt="Italy" className="bg-image absolute inset-0 w-full h-full object-cover active" id="bg-0" src="https://images.unsplash.com/photo-1528659166297-c290132a0c7e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<img alt="Winter Forest" className="bg-image absolute inset-0 w-full h-full object-cover" id="bg-1" src="https://images.unsplash.com/photo-1485594050903-8e8ee9b0f94e?q=80&amp;w=2555&amp;auto=format&amp;fit=crop"/>

<img alt="Workshop" className="bg-image absolute inset-0 w-full h-full object-cover" id="bg-3" src="https://images.unsplash.com/photo-1565610222536-ef125c59da2c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<img alt="NYC" className="bg-image absolute inset-0 w-full h-full object-cover" id="bg-4" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/90 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent z-10 pointer-events-none"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-16 md:py-8">
<a className="flex items-center gap-2 group cursor-pointer z-50" href="#" onclick="switchScene(0); return false;">
<span className="font-serif text-2xl tracking-widest text-stone-100 font-light group-hover:text-amber-500 transition-colors">GOLD&amp;HOME</span>
</a>
<button className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-white transition-colors z-50" onclick="switchScene(0)">
<span>Menu</span>
<div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-amber-500/50 backdrop-blur-sm">
<i className="w-4 h-4 text-stone-200 group-hover:text-amber-400" data-lucide="layout-grid"></i>
</div>
</button>
</header>

<main className="relative w-full h-full z-20 flex flex-col justify-center px-6 md:px-16 pt-20 pb-10">

<div className="scene active w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full" id="scene-0">
<div className="md:col-span-7 flex flex-col justify-center h-full">
<div className="mb-8 animate-reveal-up">
<p className="text-amber-600 tracking-[0.2em] text-xs uppercase mb-2">Introduction</p>
<h1 className="font-serif text-4xl md:text-6xl text-stone-100 font-light tracking-tight">Excellent.<br/>Where shall we start?</h1>
</div>
<nav className="flex flex-col w-full relative z-30">
<button className="menu-item group text-left py-6 border-b border-white/5 animate-reveal-right delay-100" onclick="switchScene(1)">
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-amber-500 block mb-1">Page 01</span>
<h2 className="font-serif text-3xl font-light text-stone-300 group-hover:text-white">Let's see where your kitchen grew</h2>
</button>
<button className="menu-item group text-left py-6 border-b border-white/5 animate-reveal-right delay-300" onclick="switchScene(2)">
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-amber-500 block mb-1">Page 02</span>
<h2 className="font-serif text-3xl font-light text-stone-300 group-hover:text-white">Let's see how your kitchen was designed</h2>
</button>
<button className="menu-item group text-left py-6 border-b border-white/5 animate-reveal-right delay-500" onclick="switchScene(3)">
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-amber-500 block mb-1">Page 03</span>
<h2 className="font-serif text-3xl font-light text-stone-300 group-hover:text-white">Let's head to the factory</h2>
</button>
<button className="menu-item group text-left py-6 border-b border-white/5 animate-reveal-right delay-700" onclick="switchScene(4)">
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-amber-500 block mb-1">Page 04</span>
<h2 className="font-serif text-3xl font-light text-stone-300 group-hover:text-white">I'll tell you about our New York office</h2>
</button>
</nav>
</div>
</div>

<div className="scene w-full max-w-4xl h-full flex flex-col justify-center" id="scene-1">
<div className="animate-reveal-up">
<span className="text-amber-500 text-xs tracking-[0.25em] uppercase font-semibold">Origin</span>
<h2 className="font-serif text-5xl md:text-7xl mt-2 mb-6 tracking-tight leading-[0.9]">The wood for your kitchen<br/>grew in Europe...</h2>
<div className="max-w-xl space-y-6 text-stone-300 font-light text-lg leading-relaxed">
<p>...specifically in the part where the climate is cool. Because only in this climate does wood develop the quality you can truly rely on.</p>
<div className="pl-4 border-l border-amber-800/50 py-2 my-6">
<p className="text-white text-xl font-serif italic">We cure it for at least 18 months.</p>
<p className="text-sm mt-2 text-stone-400">Steaming and drying with alternating hot and cold ventilation. Cycle after cycle. Ideally below 10% moisture.</p>
</div>
<p className="text-sm text-stone-400">Environment: TSCA Title VI, 2016 compliant. 6x stricter than EPA standards.</p>
</div>

<div className="mt-10 flex items-center gap-6">
<button className="bg-amber-900/30 border border-amber-700/50 hover:bg-amber-800/40 text-amber-100 px-6 py-3 rounded-sm uppercase tracking-[0.15em] text-xs transition-all duration-300 flex items-center gap-3" onclick="toggleModal('wood-modal')">
<i className="w-4 h-4" data-lucide="trees"></i>
                        Explore Wood Species
                    </button>
<button className="text-stone-500 hover:text-white text-xs uppercase tracking-[0.2em] transition-colors flex items-center gap-2" onclick="switchScene(2)">
                        Skip <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden absolute top-1/2 left-0 md:left-20 -translate-y-1/2 bg-stone-900/95 border border-stone-800 p-8 w-full max-w-md backdrop-blur-xl z-50 animate-fade-in shadow-2xl" id="wood-modal">
<div className="flex justify-between items-start mb-6">
<h3 className="font-serif text-2xl text-amber-500">4 Wood Species</h3>
<button onclick="toggleModal('wood-modal')"><i className="text-stone-500 hover:text-white" data-lucide="x"></i></button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-stone-800/50 p-4 text-center border border-stone-700/50"><span className="font-serif text-xl block mb-1">Oak</span><span className="text-[10px] uppercase text-stone-500 tracking-widest">Strong &amp; Durable</span></div>
<div className="bg-stone-800/50 p-4 text-center border border-stone-700/50"><span className="font-serif text-xl block mb-1">Ash</span><span className="text-[10px] uppercase text-stone-500 tracking-widest">Flexible &amp; Light</span></div>
<div className="bg-stone-800/50 p-4 text-center border border-stone-700/50"><span className="font-serif text-xl block mb-1">Walnut</span><span className="text-[10px] uppercase text-stone-500 tracking-widest">Rich &amp; Dark</span></div>
<div className="bg-stone-800/50 p-4 text-center border border-stone-700/50"><span className="font-serif text-xl block mb-1">Cherry</span><span className="text-[10px] uppercase text-stone-500 tracking-widest">Warm &amp; Red</span></div>
</div>
</div>
</div>

<div className="scene w-full h-full flex flex-col justify-center" id="scene-2">
<div className="animate-reveal-up mb-8">
<div className="flex items-baseline gap-4 mb-2">
<span className="text-amber-500 text-xs tracking-[0.25em] uppercase font-semibold">Design</span>
<span className="text-stone-500 text-[10px] tracking-[0.1em] uppercase"><i className="w-3 h-3 inline mr-1" data-lucide="map-pin"></i>Italy</span>
</div>
<h2 className="font-serif text-5xl md:text-6xl tracking-tight leading-none mb-4">Why travel so far for<br/>your ideal kitchen?</h2>
<p className="max-w-lg text-stone-300 font-light text-lg">Because the best kitchens have been made in Italy for roughly the last 500 years. We work with L'Ottocento, Michele Marcon, and Makethatstudio.</p>
</div>

<div className="w-full relative animate-reveal-right delay-300">
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">

<div className="snap-center shrink-0 w-[300px] md:w-[400px] group cursor-pointer relative">
<div className="aspect-[4/3] bg-stone-800 overflow-hidden mb-4 relative border border-white/5 group-hover:border-amber-500/50 transition-colors">
<img alt="Archetipo" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=2187&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full"><i className="w-4 h-4 text-white" data-lucide="view"></i></div>
</div>
<h3 className="font-serif text-2xl text-white group-hover:text-amber-500 transition-colors">Archetipo</h3>
<p className="text-xs text-stone-400 mt-1 line-clamp-2">Contemporary timeless design. Cylindrical support base. Handcrafted to fit your home's exact dimensions.</p>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] group cursor-pointer relative">
<div className="aspect-[4/3] bg-stone-800 overflow-hidden mb-4 relative border border-white/5 group-hover:border-amber-500/50 transition-colors">
<img alt="Chronos" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-white group-hover:text-amber-500 transition-colors">Chronos</h3>
<p className="text-xs text-stone-400 mt-1 line-clamp-2">A futuristic take on classic Italian curves. Soft-close mechanisms and hidden compartments.</p>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] group cursor-pointer relative">
<div className="aspect-[4/3] bg-stone-800 overflow-hidden mb-4 relative border border-white/5 group-hover:border-amber-500/50 transition-colors">
<img alt="Virtus" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-white group-hover:text-amber-500 transition-colors">Virtus</h3>
<p className="text-xs text-stone-400 mt-1 line-clamp-2">Minimalist perfection. Solid walnut with matte black fixtures. Award winning design 2023.</p>
</div>
</div>
<div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4 max-w-lg">
<p className="text-xs text-stone-500 uppercase tracking-widest">Select a kitchen to view details</p>
<button className="text-amber-500 hover:text-amber-300 text-xs uppercase tracking-[0.2em] transition-colors flex items-center gap-2" onclick="switchScene(3)">
                        Next: Production <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="scene w-full max-w-4xl h-full flex flex-col justify-center" id="scene-3">
<div className="animate-reveal-up bg-black/60 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
<span className="text-amber-500 text-xs tracking-[0.25em] uppercase font-semibold">Cittadella, Venice</span>
<h2 className="font-serif text-4xl md:text-5xl mt-2 mb-8 text-white">Hand-assembled twice.</h2>
<div className="space-y-6 relative border-l border-amber-900/50 pl-8">
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-stone-800 border border-amber-500/50"></div>
<h4 className="text-stone-200 font-serif text-xl">1. Replication</h4>
<p className="text-sm text-stone-400 mt-1">We build a precise replica of your kitchen space at the factory.</p>
</div>
<div className="relative delay-100">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-stone-800 border border-amber-500/50"></div>
<h4 className="text-stone-200 font-serif text-xl">2. First Assembly</h4>
<p className="text-sm text-stone-400 mt-1">We craft and hand-assemble your entire kitchen inside it.</p>
</div>
<div className="relative delay-300">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-stone-800 border border-amber-500/50"></div>
<h4 className="text-stone-200 font-serif text-xl">3. Inspection &amp; Disassembly</h4>
<p className="text-sm text-stone-400 mt-1">We inspect every element, then carefully disassemble.</p>
</div>
<div className="relative delay-500">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-stone-800 border border-amber-500/50"></div>
<h4 className="text-stone-200 font-serif text-xl">4. Packing &amp; Shipping</h4>
<p className="text-sm text-stone-400 mt-1">Meticulously packed and shipped to you.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-stone-300 italic font-serif text-lg mb-4">"See? Just as I promised - that didn't take long at all, did it?"</p>
<button className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-sm uppercase tracking-[0.15em] text-xs transition-colors" onclick="switchScene(4)">
                        Proceed to New York
                    </button>
</div>
</div>
</div>

<div className="scene w-full max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center" id="scene-4">
<div className="animate-reveal-up">
<span className="text-amber-500 text-xs tracking-[0.25em] uppercase font-semibold">Service</span>
<h2 className="font-serif text-5xl md:text-7xl mt-2 mb-6 text-white tracking-tight">And now,<br/>New York.</h2>
<p className="text-stone-300 font-light text-lg mb-6 max-w-md">We'll handle everything: measure, design, and install your ideal kitchen perfectly. The very same one that was crafted for you in Italy.</p>
<div className="flex items-center gap-4 text-amber-500/80 mb-8">
<i className="w-8 h-8 opacity-80" data-lucide="qr-code"></i>
<span className="text-[10px] uppercase tracking-widest">Scan for digital card</span>
</div>
</div>

<div className="bg-stone-900/80 backdrop-blur-md border border-stone-800 p-8 animate-reveal-right delay-300">
<h3 className="font-serif text-2xl text-white mb-1">Let's meet.</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest mb-6">No avatars. Real handshake.</p>
<form className="space-y-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-stone-400">Best way to contact</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-amber-600" name="contact" type="radio"/> <span className="text-sm text-stone-300">Phone</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-amber-600" name="contact" type="radio"/> <span className="text-sm text-stone-300">Email</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-amber-600" name="contact" type="radio"/> <span className="text-sm text-stone-300">Text</span>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-stone-400">Preferred Date &amp; Time</label>
<input className="w-full bg-stone-950 border border-stone-800 text-stone-200 px-4 py-3 text-sm focus:border-amber-600 focus:outline-none transition-colors" placeholder="e.g. Tuesday after 2pm" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-stone-400">Your Contact Info</label>
<input className="w-full bg-stone-950 border border-stone-800 text-stone-200 px-4 py-3 text-sm focus:border-amber-600 focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" type="text"/>
</div>
<button className="w-full bg-stone-100 hover:bg-white text-black px-6 py-4 uppercase tracking-[0.2em] text-xs font-semibold transition-colors mt-4" type="button">
                        Send Request
                    </button>
</form>
</div>
</div>
</main>

<div className="hidden lg:block fixed bottom-0 right-0 h-[85vh] w-[45vw] z-10 pointer-events-none overflow-hidden">
<img alt="Narrator" className="w-full h-full object-contain object-bottom drop-shadow-2xl brightness-[0.8] contrast-125 translate-y-10 opacity-0 md:opacity-100" id="narrator-img" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" style={{maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', transition: 'all 1s ease'}}/>
</div>

<footer className="fixed bottom-6 left-6 right-6 z-50 flex justify-between items-end opacity-50 mix-blend-difference pointer-events-none">
<div className="flex gap-4 pointer-events-auto">
<span className="text-[10px] tracking-widest text-white cursor-pointer hover:text-amber-500">EN</span>
<span className="text-[10px] tracking-widest text-stone-400 cursor-pointer hover:text-amber-500">IT</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] tracking-[0.2em] text-white mb-2" id="page-indicator">00 / 04</span>
<div className="h-12 w-[1px] bg-white/50"></div>
</div>
</footer>


    </>
  );
}
