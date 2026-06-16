import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Loader Logic
        window.addEventListener('load', () => {
            const lines = [
                'INITIALIZING BIOS...',
                'CHECKING MINERAL STATUS...',
                'VERIFIED.',
                'CHECKING BILE FLOW...',
                'OPTIMIZED.',
                'LOADING INTERFACE...'
            ];
            const container = document.getElementById('boot-sequence');
            let delay = 0;

            lines.forEach((line, index) => {
                setTimeout(() => {
                    const div = document.createElement('div');
                    div.innerText = `> ${line}`;
                    container.appendChild(div);
                }, delay);
                delay += 300;
            });

            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, delay + 500);
        });

        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });

        document.querySelectorAll('a, button, input').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = `translate(${cursor.getBoundingClientRect().left + 12}px, ${cursor.getBoundingClientRect().top + 12}px) translate(-50%, -50%) scale(2)`;
                cursor.style.backgroundColor = 'rgba(204, 255, 0, 0.2)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = `translate(${cursor.getBoundingClientRect().left + 12}px, ${cursor.getBoundingClientRect().top + 12}px) translate(-50%, -50%) scale(1)`;
                cursor.style.backgroundColor = 'transparent';
            });
        });

        // Time Update
        function updateTime() {
            const now = new Date();
            document.getElementById('time-display').innerText = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
        }
        setInterval(updateTime, 1000);
        updateTime();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-start justify-end p-8 md:p-12 font-mono text-xs md:text-sm text-[#ccff00]" id="loader">
<div className="space-y-1 mb-8" id="boot-sequence">

</div>
<div className="w-full h-[1px] bg-white/20 relative overflow-hidden">
<div className="absolute inset-0 bg-[#ccff00] w-0 animate-[load_2s_ease-in-out_forwards]" style={{width: '100%'}}></div>
</div>
</div>

<div className="noise-overlay"></div>

<div className="fixed w-6 h-6 border border-[#ccff00] rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block transition-transform duration-100 ease-out" id="cursor">
<div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#ccff00] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-[1400px] mx-auto">
<div className="glass-panel rounded-sm px-6 py-3 flex items-center justify-between">
<a className="font-bold tracking-tighter text-xl" href="#">NØUR <span className="text-[#ccff00] text-xs align-top">®</span></a>
<div className="hidden md:flex gap-1">
<a className="font-mono text-xs px-4 py-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all rounded-sm" href="#logic">[01 : LOGIC]</a>
<a className="font-mono text-xs px-4 py-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all rounded-sm" href="#system">[02 : SYSTEM]</a>
<a className="font-mono text-xs px-4 py-2 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all rounded-sm" href="#shop">[03 : SHOP]</a>
</div>
<div className="flex items-center gap-4">
<span className="font-mono text-[10px] text-white/50 hidden sm:block">SYS.STATUS: ONLINE</span>
<button className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-colors">
<iconify-icon icon="solar:bag-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-full blur-[100px] opacity-50 animate-pulse"></div>
<div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-[#ccff00] rounded-full blur-[150px] opacity-[0.03] animate-float"></div>
<div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]"></div>
</div>
<div className="relative z-10 max-w-[1400px] w-full px-6 flex flex-col items-start">
<div className="font-mono text-[#ccff00] text-xs mb-4 tracking-widest border border-[#ccff00]/30 px-3 py-1 inline-block bg-[#ccff00]/5">
                :: BIO-AVAILABLE MATRIX
            </div>
<h1 className="text-[12vw] md:text-[8rem] leading-[0.8] font-medium tracking-tighter mb-8 mix-blend-difference reveal-text">
<span className="block">DETOX IS</span>
<span className="block text-white/40">BIOLOGY.</span>
<span className="block">NOT MAGIC.</span>
</h1>
<div className="max-w-xl border-l border-[#ccff00] pl-6 mt-8">
<p className="font-mono text-sm md:text-base text-gray-400 leading-relaxed uppercase">
                    Optimization of Phase I &amp; II Hepatic Pathways. <br/>
<span className="text-white">Mobilization ≠ Elimination.</span> <br/>
                    Engineered in Helsinki.
                </p>
</div>
</div>
<div className="absolute bottom-10 right-6 md:right-12 flex flex-col items-end gap-2 font-mono text-[10px] text-white/30">
<span>SCROLL TO INITIATE</span>
<div className="h-16 w-[1px] bg-white/20 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-1/2 bg-[#ccff00] animate-[dropdown_1.5s_infinite]"></div>
</div>
</div>
</section>

<section className="relative py-32 border-t border-white/5" id="logic">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="flex flex-col justify-center sticky top-32 h-fit">
<div className="font-mono text-xs text-white/40 mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse"></span>
                        [01 : PHYSIOLOGY]
                    </div>
<h2 className="text-5xl md:text-7xl tracking-tighter mb-8">
                        The Toxic <br/> <span className="text-outline">Re-circulation</span>
</h2>
<p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                        Most cleanses fail because they mobilize toxins without opening the elimination pathways. This causes <span className="text-white border-b border-[#ccff00]/50 pb-0.5">autointoxication</span>—where toxins are re-absorbed into the bloodstream.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 border border-white/10 bg-white/[0.02]">
<iconify-icon className="text-3xl text-white/50 mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<h3 className="font-mono text-xs text-[#ccff00] mb-2">PHASE I ERROR</h3>
<p className="text-sm text-gray-500">Reactive Intermediates produced but not conjugated.</p>
</div>
<div className="p-6 border border-white/10 bg-white/[0.02]">
<iconify-icon className="text-3xl text-white/50 mb-4" icon="solar:forbidden-circle-linear"></iconify-icon>
<h3 className="font-mono text-xs text-[#ccff00] mb-2">DRAINAGE BLOCK</h3>
<p className="text-sm text-gray-500">Bile stasis prevents excretion into intestine.</p>
</div>
</div>
</div>

<div className="relative min-h-[60vh] lg:h-full border border-white/10 bg-white/[0.02] p-8 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative w-64 h-96 flex flex-col items-center justify-between z-10">

<div className="w-32 h-24 border border-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm relative group">
<span className="font-mono text-xs">HEPATIC</span>
<div className="absolute -right-12 top-1/2 w-8 h-[1px] bg-white/20"></div>
<div className="absolute -right-24 top-1/2 font-mono text-[10px] text-[#ccff00]">TOXIN LOAD</div>
</div>

<div className="h-24 w-[1px] bg-gradient-to-b from-white/50 to-red-500/50 relative">
<div className="absolute top-1/2 left-4 font-mono text-[10px] text-red-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                 ⚠ RE-ABSORPTION
                             </div>
</div>

<div className="w-full h-32 border border-red-500/30 bg-red-900/10 rounded-lg flex items-center justify-center backdrop-blur-sm relative">
<span className="font-mono text-xs text-red-400">BLOCKED PATHWAY</span>

<div className="absolute inset-0 flex items-center justify-center overflow-hidden">
<div className="w-2 h-2 bg-white rounded-full absolute animate-[ping_3s_infinite] top-4 left-10"></div>
<div className="w-2 h-2 bg-white rounded-full absolute animate-[ping_2s_infinite] bottom-4 right-10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808]" id="system">
<div className="max-w-[1400px] mx-auto px-6 mb-24">
<h2 className="text-6xl md:text-9xl tracking-tighter text-white opacity-10 select-none">THE PROTOCOL</h2>
</div>
<div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-8">

<div className="group relative border-t border-white/20 pt-8 pb-16 hover:bg-white/[0.02] transition-colors">
<div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
<div className="md:w-1/3">
<span className="font-mono text-[#ccff00] text-lg block mb-2">01 // PRIMER</span>
<h3 className="text-4xl tracking-tight font-medium">Gut &amp; Mineral Status</h3>
</div>
<div className="md:w-1/3">
<p className="text-gray-400 font-light leading-relaxed">
                            Before mobilization, we must secure the exit. We remineralize the extracellular matrix and repair intestinal permeability to ensure toxins don't leak back.
                        </p>
</div>
<div className="md:w-1/4 flex justify-end">
<iconify-icon className="text-5xl text-white/20 group-hover:text-[#ccff00] transition-colors" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative border-t border-white/20 pt-8 pb-16 hover:bg-white/[0.02] transition-colors">
<div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
<div className="md:w-1/3">
<span className="font-mono text-[#ccff00] text-lg block mb-2">02 // FLOW</span>
<h3 className="text-4xl tracking-tight font-medium">Bile Velocity</h3>
</div>
<div className="md:w-1/3">
<p className="text-gray-400 font-light leading-relaxed">
                            Activation of bitter receptors to thin bile sludge. This creates a high-velocity channel for toxins to move from the liver to the elimination organs.
                        </p>
</div>
<div className="md:w-1/4 flex justify-end">
<iconify-icon className="text-5xl text-white/20 group-hover:text-[#ccff00] transition-colors" icon="solar:waterdrops-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative border-t border-white/20 pt-8 pb-16 border-b hover:bg-white/[0.02] transition-colors">
<div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
<div className="md:w-1/3">
<span className="font-mono text-[#ccff00] text-lg block mb-2">03 // CAPTURE</span>
<h3 className="text-4xl tracking-tight font-medium">Binder Complex</h3>
</div>
<div className="md:w-1/3">
<p className="text-gray-400 font-light leading-relaxed">
                            A specific blend of humic/fulvic acids and zeolites that act as a "net", catching toxins in the gut for permanent removal via stool.
                        </p>
</div>
<div className="md:w-1/4 flex justify-end">
<iconify-icon className="text-5xl text-white/20 group-hover:text-[#ccff00] transition-colors" icon="solar:magnet-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="shop">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex items-center justify-between mb-24">
<div className="font-mono text-xs text-white/40 flex items-center gap-2">
<span className="w-2 h-2 bg-[#ccff00] rounded-full"></span>
                    [03 : HARDWARE]
                </div>
<div className="hidden md:block font-mono text-xs text-right text-gray-500">
                    APPROVED FOR DAILY USE<br/>
                    CLINICAL GRADE
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

<div className="group relative bg-[#0a0a0a] border border-white/5 h-[600px] overflow-hidden flex flex-col justify-between p-8 hover:border-[#ccff00]/30 transition-colors">
<div className="relative z-10">
<h3 className="font-mono text-xl text-white mb-1">NØUR.01</h3>
<p className="text-gray-500 text-sm">Mineral Primer</p>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">

<div className="w-32 h-64 border border-white/20 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md relative animate-float">
<div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white/30 rotate-90 tracking-widest">
                                 ELECTROLYTE MATRIX
                             </div>
</div>
</div>
<div className="relative z-10 space-y-4">
<div className="font-mono text-[10px] text-gray-400 grid grid-cols-2 gap-y-2 border-t border-white/10 pt-4">
<span>HALF-LIFE:</span> <span className="text-white text-right">4-6 HRS</span>
<span>TARGET:</span> <span className="text-white text-right">CELL WALL</span>
<span>DOSAGE:</span> <span className="text-white text-right">2 AM/PM</span>
</div>
<button className="w-full py-4 bg-white text-black font-mono text-xs font-bold hover:bg-[#ccff00] transition-colors uppercase tracking-wider">
                            Initiate Protocol [$55]
                        </button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 h-[600px] overflow-hidden flex flex-col justify-between p-8 hover:border-[#ccff00]/30 transition-colors">
<div className="relative z-10">
<h3 className="font-mono text-xl text-white mb-1">NØUR.02</h3>
<p className="text-gray-500 text-sm">Flow Activator</p>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">

<div className="w-32 h-64 border border-white/20 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md relative animate-float" style={{animationDelay: '-2s'}}>
<div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white/30 rotate-90 tracking-widest">
                                 BILE SALTS
                             </div>
</div>
</div>
<div className="relative z-10 space-y-4">
<div className="font-mono text-[10px] text-gray-400 grid grid-cols-2 gap-y-2 border-t border-white/10 pt-4">
<span>HALF-LIFE:</span> <span className="text-white text-right">2-3 HRS</span>
<span>TARGET:</span> <span className="text-white text-right">GALLBLADDER</span>
<span>DOSAGE:</span> <span className="text-white text-right">1 W/ MEAL</span>
</div>
<button className="w-full py-4 bg-white text-black font-mono text-xs font-bold hover:bg-[#ccff00] transition-colors uppercase tracking-wider">
                            Initiate Protocol [$65]
                        </button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 h-[600px] overflow-hidden flex flex-col justify-between p-8 hover:border-[#ccff00]/30 transition-colors">
<div className="relative z-10">
<h3 className="font-mono text-xl text-white mb-1">NØUR.03</h3>
<p className="text-gray-500 text-sm">Toxin Binder</p>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">

<div className="w-32 h-64 border border-white/20 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md relative animate-float" style={{animationDelay: '-4s'}}>
<div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white/30 rotate-90 tracking-widest">
                                 ZEOLITE CLAY
                             </div>
</div>
</div>
<div className="relative z-10 space-y-4">
<div className="font-mono text-[10px] text-gray-400 grid grid-cols-2 gap-y-2 border-t border-white/10 pt-4">
<span>HALF-LIFE:</span> <span className="text-white text-right">N/A (EXCRETED)</span>
<span>TARGET:</span> <span className="text-white text-right">LUMEN</span>
<span>DOSAGE:</span> <span className="text-white text-right">1 BEDTIME</span>
</div>
<button className="w-full py-4 bg-white text-black font-mono text-xs font-bold hover:bg-[#ccff00] transition-colors uppercase tracking-wider">
                            Initiate Protocol [$55]
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#ccff00] to-transparent opacity-30"></div>
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-xs">
<div className="col-span-1 md:col-span-2">
<h4 className="text-3xl font-sans tracking-tight mb-6">NØUR.LABS</h4>
<p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                    Advanced nutraceutical engineering for high-performance biological systems. Formulated without fillers, binders, or excipients.
                </p>
<div className="flex gap-4">
<input className="bg-white/5 border border-white/10 px-4 py-3 w-64 text-white focus:outline-none focus:border-[#ccff00]" placeholder="ENTER_EMAIL_FOR_DATA" type="email"/>
<button className="bg-[#ccff00] text-black px-6 py-3 font-bold hover:opacity-90">SUBMIT</button>
</div>
</div>
<div className="text-gray-500 space-y-4">
<div className="text-white mb-4">[ DIRECTORY ]</div>
<a className="block hover:text-[#ccff00]" href="#">-&gt; SCIENCE</a>
<a className="block hover:text-[#ccff00]" href="#">-&gt; INGREDIENTS</a>
<a className="block hover:text-[#ccff00]" href="#">-&gt; CLINICAL DATA</a>
<a className="block hover:text-[#ccff00]" href="#">-&gt; FAQS</a>
</div>
<div className="text-gray-500 space-y-4">
<div className="text-white mb-4">[ SYSTEM ]</div>
<div className="flex justify-between border-b border-white/10 pb-1">
<span>SERVER</span> <span className="text-[#ccff00]">EU-WEST-3</span>
</div>
<div className="flex justify-between border-b border-white/10 pb-1">
<span>ENCRYPTION</span> <span>256-BIT</span>
</div>
<div className="flex justify-between border-b border-white/10 pb-1">
<span>TIME</span> <span id="time-display">00:00:00</span>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 mt-24 flex justify-between items-end border-t border-white/5 pt-8">
<div className="text-[10px] text-gray-600 uppercase tracking-widest">
                © 2024 NØUR BIOTECH LTD. HELSINKI, FI. <br/>
                ALL RIGHTS RESERVED.
            </div>
<iconify-icon className="text-4xl text-[#1a1a1a]" icon="solar:atom-bold"></iconify-icon>
</div>
</footer>


    </>
  );
}
