import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Elements configuration
        const stages = {
            1: {
                cards: ['card-earn', 'card-borrow'],
                lines: ['line-1-left', 'line-1-right'],
                color: 'active'
            },
            2: {
                cards: ['card-protocol'],
                lines: [], // Internal logic handled separately
                special: 'protocol-progress',
                color: 'active'
            },
            3: {
                cards: ['card-yield', 'card-loan'],
                lines: ['line-2-left', 'line-2-right'],
                color: 'active'
            }
        };

        // Helper to set state
        const setStageState = (stageNum, isActive) => {
            const config = stages[stageNum];
            
            // Toggle Cards
            config.cards.forEach(id => {
                const el = document.getElementById(id);
                if(el) {
                    // Check if it's the borrow side for purple color
                    if(id.includes('borrow') || id.includes('loan')) {
                        isActive ? el.classList.add('active-purple') : el.classList.remove('active-purple');
                    } else {
                        isActive ? el.classList.add('active') : el.classList.remove('active');
                    }
                }
            });

            // Toggle Lines (Connectors)
            if (config.lines) {
                config.lines.forEach(id => {
                    const el = document.getElementById(id);
                    if(el) isActive ? el.classList.add('filled') : el.classList.remove('filled');
                });
            }

            // Protocol Special Horizontal Beam
            if (stageNum === 2) {
                const bar = document.getElementById('protocol-progress');
                const hLine = document.querySelector('.connector-h');
                if(isActive) {
                    bar.style.width = '100%';
                    hLine.classList.add('filled');
                } else {
                    bar.style.width = '0%';
                    hLine.classList.remove('filled');
                }
            }
        };

        // Scroll Logic
        let lastScrollY = window.scrollY;
        
        function handleScroll() {
            const diagram = document.getElementById('flow-diagram');
            const rect = diagram.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY;
            
            // Calculate progress through the diagram component
            // 0 = top of diagram enters bottom of viewport
            // 1 = bottom of diagram leaves top of viewport
            // We focus on the "middle" active area
            
            const startOffset = viewportHeight * 0.8; // Trigger when top is 80% down
            const endOffset = viewportHeight * 0.2;   // Finish when top is 20% down
            
            // Refined Logic: Based on element position relative to center of screen
            const center = viewportHeight / 2;
            const diagramTop = rect.top;
            const diagramHeight = rect.height;
            
            // Define trigger points relative to the diagram container's layout
            // We want the animation to play as we scroll DOWN through it, and reverse as we scroll UP.
            
            // Thresholds (pixels from top of diagram container)
            const stage1Threshold = viewportHeight * 0.6; // Early
            const stage2Threshold = viewportHeight * 0.4; // Middle
            const stage3Threshold = viewportHeight * 0.2; // Late

            // If the top of the diagram is above these thresholds, activate the stage
            
            // Stage 1: Activate when diagram comes into view
            if (rect.top < viewportHeight * 0.7) {
                setStageState(1, true);
            } else {
                setStageState(1, false);
            }

            // Stage 2: Activate when scrolled deeper
            if (rect.top < viewportHeight * 0.4) {
                setStageState(2, true);
            } else {
                setStageState(2, false);
            }

            // Stage 3: Activate near bottom
            if (rect.top < viewportHeight * 0.1) {
                setStageState(3, true);
            } else {
                setStageState(3, false);
            }

            lastScrollY = currentScrollY;
        }

        // Attach listener
        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(handleScroll);
        });
        
        // Initial check
        handleScroll();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

<div className="w-full h-[20vh]"></div>

<div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center py-10 px-4" id="flow-diagram">

<div className="text-center mb-16 space-y-2 opacity-100 transition-opacity duration-700" id="header">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Value Flow Architecture</h1>
<p className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Scroll to interact</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 w-full mb-0">

<div className="flex flex-col items-center relative group">
<div className="glass-card flow-transition w-full max-w-xs p-6 rounded-2xl flex flex-col items-center text-center z-10" id="card-earn">
<div className="size-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon height="24" icon="solar:user-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-300 tracking-tight text-highlight">EARN USER</h3>
<p className="text-xs text-zinc-500 mt-1">Deposits Assets</p>

<div className="card-progress"></div>
</div>

<div className="connector-v mt-0" id="line-1-left">
<div className="connector-fill"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-full whitespace-nowrap z-10 scale-90">
<span className="text-[10px] font-medium text-blue-400/80 flex items-center gap-1">
                            USDT <iconify-icon icon="solar:arrow-down-linear" width="12"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="flex flex-col items-center relative group">
<div className="glass-card flow-transition w-full max-w-xs p-6 rounded-2xl flex flex-col items-center text-center z-10" id="card-borrow">
<div className="size-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-300 tracking-tight text-highlight">BORROW USER</h3>
<p className="text-xs text-zinc-500 mt-1">Collateralizes</p>

<div className="card-progress"></div>
</div>

<div className="connector-v mt-0" id="line-1-right">
<div className="connector-fill purple"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 border border-zinc-800 px-2 py-1 rounded-full whitespace-nowrap z-10 scale-90">
<span className="text-[10px] font-medium text-purple-400/80 flex items-center gap-1">
                            ETH <iconify-icon icon="solar:arrow-down-linear" width="12"></iconify-icon>
</span>
</div>
</div>
</div>
</div>

<div className="w-full relative z-10">
<div className="glass-card flow-transition rounded-3xl p-1 border border-zinc-800 bg-zinc-950/80 overflow-hidden relative" id="card-protocol">

<div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-800">
<div className="h-full bg-gradient-to-r from-blue-500 via-white to-purple-500 w-0 transition-all duration-1000 ease-in-out" id="protocol-progress"></div>
</div>
<div className="relative p-8 flex flex-col items-center">

<div className="flex flex-col items-center mb-10">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400 tracking-wider mb-2">
<iconify-icon icon="solar:layers-minimalistic-linear" width="12"></iconify-icon> SMART CONTRACTS
                        </div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-0.5 text-highlight">LIQUIDITY PROTOCOL</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 w-full relative">

<div className="hidden md:block connector-h">
<div className="connector-h-fill"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 whitespace-nowrap z-10 scale-75">
<span className="text-[9px] text-zinc-500 font-mono">MATCHING ENGINE</span>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-5 flex flex-col gap-3 hover:bg-zinc-900/60 transition-colors">
<div className="flex items-center gap-2 mb-1">
<div className="size-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
<span className="text-xs font-semibold text-zinc-300 tracking-tight uppercase">Earn Pool</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-[11px] text-zinc-400">
<iconify-icon className="text-blue-500/60" icon="solar:check-circle-linear" width="14"></iconify-icon>
<span>High Yield Generation</span>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-5 flex flex-col gap-3 hover:bg-zinc-900/60 transition-colors">
<div className="flex items-center gap-2 mb-1">
<div className="size-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
<span className="text-xs font-semibold text-zinc-300 tracking-tight uppercase">Risk Engine</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-[11px] text-zinc-400">
<iconify-icon className="text-purple-500/60" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>Over-collateralized</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 w-full mt-0">

<div className="flex flex-col items-center relative">
<div className="connector-v mb-0" id="line-2-left">
<div className="connector-fill"></div>
</div>
<div className="glass-card flow-transition w-full max-w-xs p-5 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-between group" id="card-yield">
<div className="flex flex-col">
<span className="text-xs font-semibold text-zinc-300 text-highlight">Yield Distribution</span>
<span className="text-[10px] text-blue-400 mt-1 flex items-center gap-1">
                            Passive Income <iconify-icon icon="solar:graph-new-up-linear" width="12"></iconify-icon>
</span>
</div>
<div className="size-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:wallet-money-linear" width="18"></iconify-icon>
</div>
<div className="card-progress"></div>
</div>
</div>

<div className="flex flex-col items-center relative">
<div className="connector-v mb-0" id="line-2-right">
<div className="connector-fill purple"></div>
<div className="absolute bg-emerald-950/90 border border-emerald-500/20 px-2 py-0.5 rounded text-[9px] text-emerald-400/90 font-mono tracking-tight z-10 whitespace-nowrap top-1/2 -translate-y-1/2">
                        Liquidity Unlocked
                    </div>
</div>
<div className="glass-card flow-transition w-full max-w-xs p-5 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-between group" id="card-loan">
<div className="flex flex-col">
<span className="text-xs font-semibold text-zinc-300 text-highlight">Loan Disbursed</span>
<span className="text-[10px] text-purple-400 mt-1 flex items-center gap-1">
                            Instant Access <iconify-icon icon="solar:wad-of-money-linear" width="12"></iconify-icon>
</span>
</div>
<div className="size-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-purple-400 transition-colors">
<iconify-icon icon="solar:card-transfer-linear" width="18"></iconify-icon>
</div>
<div className="card-progress"></div>
</div>
</div>
</div>
</div>

<div className="w-full h-[50vh]"></div>


    </>
  );
}
