import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. Text Splitter for Chipped Reveal ---
        document.querySelectorAll('.split-text').forEach(el => {
            const text = el.innerText;
            el.innerHTML = text.split(' ').map(word => 
                `<span class="inline-block"><span class="word-span reveal-chunk">${word}</span>&nbsp;</span>`
            ).join('');
        });

        // --- 2. Intersection Observer for "Discovered" Elements ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add delay class randomly for natural chaos
                    const delay = Math.floor(Math.random() * 3);
                    if(!entry.target.classList.contains('reveal-delay-1') && !entry.target.classList.contains('reveal-delay-2')) {
                        if(delay === 1) entry.target.classList.add('reveal-delay-1');
                        if(delay === 2) entry.target.classList.add('reveal-delay-2');
                    }
                    
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Trigger once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-chunk').forEach(el => observer.observe(el));

        // --- 3. Scroll Velocity Penalty (Discomfort Moment) ---
        let lastScrollTop = 0;
        let penaltyOverlay = document.getElementById('penalty-overlay');
        let penaltyTimeout;

        window.addEventListener('scroll', () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            const velocity = Math.abs(st - lastScrollTop);
            
            // If scrolling too fast (> 100px per tick), trigger penalty
            if (velocity > 150) {
                penaltyOverlay.classList.add('active');
                
                // Remove penalty after delay
                clearTimeout(penaltyTimeout);
                penaltyTimeout = setTimeout(() => {
                    penaltyOverlay.classList.remove('active');
                }, 800);
            }

            lastScrollTop = st <= 0 ? 0 : st;
        }, { passive: true });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<div className="fixed inset-0 bg-orange-600 z-[100] flex items-center justify-center pointer-events-none mix-blend-hard-light" id="penalty-overlay">
<div className="text-black font-mono font-bold text-6xl md:text-9xl tracking-tighter text-center">
            SYSTEM_HANG<br/>
<span className="text-xl tracking-widest block mt-4 bg-black text-white p-2">SLOW_DOWN_EXECUTION</span>
</div>
</div>

<div className="fixed top-0 left-0 p-4 z-40 mix-blend-difference pointer-events-none animate-hard-in" style={{animationDelay: '1.5s'}}>
<span className="text-xs font-mono tracking-widest text-orange-500">[ 0x1 ] SYSTEM_READY</span>
</div>
<div className="fixed top-0 right-0 p-4 z-40 mix-blend-difference animate-hard-in" style={{animationDelay: '1.6s'}}>
<span className="iconify text-2xl text-orange-500" data-icon="lucide:cpu" data-strokeWidth="1.5"></span>
</div>
<div className="fixed bottom-0 left-0 p-4 z-40 mix-blend-difference w-48 hidden md:block animate-hard-in" style={{animationDelay: '1.8s'}}>
<p className="text-[10px] leading-tight opacity-50 text-neutral-300 font-mono">
            MEMORY SAFE<br/>
            CONCURRENCY HANDLED<br/>
            STATE: VOLATILE
        </p>
</div>

<div className="fixed bottom-0 right-0 p-0 z-50 bg-orange-600 text-black animate-hard-in" style={{animationDelay: '2s'}}>
<a className="block p-4 font-mono text-sm font-bold hover:bg-white hover:text-black transition-colors duration-0 border-l border-t border-black" href="#contact">
            ping();
        </a>
</div>

<nav className="absolute top-1/4 -right-12 rotate-90 origin-center hidden lg:flex gap-12 text-xs font-mono tracking-widest text-neutral-600 z-30 animate-hard-in" style={{animationDelay: '2.5s'}}>
<a className="hover:text-orange-500 hover:line-through transition-none duration-0" href="#work">INDEX</a>
<a className="hover:text-orange-500 hover:line-through transition-none duration-0" href="#philosophy">LOGIC</a>
<a className="hover:text-orange-500 hover:line-through transition-none duration-0" href="#stack">STACK</a>
</nav>

<header className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden border-b border-neutral-900 snap-section">

<div className="absolute top-10 left-[10%] w-px h-64 bg-neutral-800 animate-hard-in" style={{animationDelay: '0.5s'}}></div>
<div className="absolute bottom-20 right-[20%] w-64 h-px bg-neutral-800 animate-hard-in" style={{animationDelay: '0.8s'}}></div>
<div className="container mx-auto px-4 relative z-10">
<div className="flex flex-col relative">

<div className="overflow-hidden">
<h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] text-neutral-200 select-none animate-snap-up" style={{animationDelay: '0.2s'}}>
                        NO
                    </h1>
</div>
<div className="overflow-hidden">
<h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] text-neutral-200 select-none animate-snap-up" style={{animationDelay: '0.4s'}}>
                        SIGNALS
                    </h1>
</div>

<h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] absolute top-2 left-1 md:top-4 md:left-2 outline-text pointer-events-none opacity-0 animate-hard-in mix-blend-exclusion" style={{animationDelay: '1.2s'}}>
                    NO<br/>SIGNALS
                </h1>
<div className="mt-16 md:ml-32 max-w-xl animate-hard-in" style={{animationDelay: '1.5s'}}>
<p className="font-mono text-xs md:text-sm text-neutral-500 leading-relaxed uppercase tracking-wide border-l-2 border-orange-600 pl-4">
<span className="text-orange-500">///</span> Constructing high-frequency logic on Solana. <br/>
                        Rejecting abstraction. Embracing the metal. <br/>
                        Rust is the only truth.
                    </p>
</div>
</div>
</div>

<div className="absolute bottom-12 left-4 md:left-20 font-mono text-[10px] text-neutral-800 leading-none hidden sm:block select-none animate-hard-in" style={{animationDelay: '2s'}}>
            pub fn process_instruction(<br/>
              program_id: &amp;Pubkey,<br/>
              accounts: &amp;[AccountInfo],<br/>
              _instruction_data: &amp;[u8],<br/>
            ) -&gt; ProgramResult {
        </div>
</header>

<section className="min-h-[80vh] w-full bg-[#0a0a0a] relative snap-section overflow-hidden" id="philosophy">
<div className="grid grid-cols-1 md:grid-cols-12 h-full">

<div className="hidden md:block md:col-span-4 border-r border-neutral-900 relative bg-[#050505]">
<div className="sticky top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap mix-blend-difference">
<span className="text-8xl text-neutral-800 font-bold opacity-30 select-none reveal-chunk">STATELESS</span>
</div>
</div>

<div className="col-span-1 md:col-span-8 p-8 md:p-24 flex flex-col justify-between relative bg-[#080808]">

<div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-orange-500/20 reveal-chunk reveal-delay-3"></div>
<div className="mt-12">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-white split-text">
                        CONTROLLED<br/>BRUTALITY.
                    </h2>
<div className="space-y-12 font-mono text-sm max-w-md ml-auto border-l border-neutral-800 pl-8">
<p className="text-neutral-400 reveal-chunk reveal-delay-1">
                            Design is a crutch. I build systems that survive high throughput and network congestion.
                        </p>
<p className="text-neutral-400 reveal-chunk reveal-delay-2">
                            Solana isn't about pretty UIs. It's about global state synchronization at the speed of light. If your Pda logic is flawed, your gradient background won't save you.
                        </p>
</div>
</div>
<div className="mt-32 flex gap-8 items-end reveal-chunk reveal-delay-3">
<div className="w-full h-px bg-neutral-900 relative">
<div className="absolute right-0 -top-1 w-2 h-2 bg-orange-600"></div>
</div>
<span className="text-5xl font-mono text-neutral-800">001</span>
</div>
</div>
</div>
</section>

<div className="border-y border-neutral-900 py-6 bg-orange-600 text-black overflow-hidden select-none">
<div className="marquee-container">
<div className="marquee-content font-mono text-xl font-black tracking-tight uppercase whitespace-nowrap">
                Latency is the enemy — Deterministic Execution — Sealevel Runtime — Gossip Protocol — Tower BFT — POH — Latency is the enemy — Deterministic Execution — Sealevel Runtime — Gossip Protocol — Tower BFT — POH —
            </div>
</div>
</div>

<section className="min-h-screen py-32 px-4 md:px-12 relative bg-[#050505] snap-section" id="work">

<div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>
<div className="relative z-10 max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-32 border-b border-neutral-800 pb-4 reveal-chunk">
<h2 className="text-xs font-mono tracking-widest text-orange-500 blink-text">TRANSACTION_LOG</h2>
<span className="iconify text-2xl text-neutral-700" data-icon="lucide:database-zap"></span>
</div>

<div className="group relative border-b border-neutral-900 py-16 cursor-help reveal-chunk reveal-delay-1">
<div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-0"></div> 
<div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span className="font-mono text-xs text-neutral-600 group-hover:text-orange-500 transition-colors duration-0">SLOT_9281</span>
<h3 className="text-5xl md:text-8xl font-bold tracking-tighter text-neutral-500 group-hover:text-white group-hover:translate-x-4 transition-transform duration-75 ease-linear">
                        SERUM_FORK_V3
                    </h3>
</div>

<div className="relative z-10 mt-0 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-8 transition-all duration-0 delay-75">
<div className="md:ml-32 max-w-xl">
<p className="font-mono text-sm text-neutral-300 border-l-2 border-orange-600 pl-4 mb-6">
                            Custom orderbook matching engine. Eliminated front-running vectors via commit-reveal scheme. Zero UI, pure RPC interface.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white text-black px-2 py-1 font-bold">RUST</span>
<span className="text-[10px] bg-neutral-800 text-white px-2 py-1">ANCHOR</span>
</div>
</div>
</div>
</div>

<div className="group relative border-b border-neutral-900 py-16 cursor-help reveal-chunk reveal-delay-2">
<div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-0"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span className="font-mono text-xs text-neutral-600 group-hover:text-orange-500 transition-colors duration-0">SLOT_9285</span>
<h3 className="text-5xl md:text-8xl font-bold tracking-tighter text-neutral-500 group-hover:text-white group-hover:translate-x-4 transition-transform duration-75 ease-linear">
                        MEV_ARBITRAGE
                    </h3>
</div>
<div className="relative z-10 mt-0 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-8 transition-all duration-0 delay-75">
<div className="md:ml-32 max-w-xl">
<p className="font-mono text-sm text-neutral-300 border-l-2 border-orange-600 pl-4 mb-6">
                            Monitoring mempool for liquidity imbalances across Raydium and Orca. Execution time: &lt;400ms.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white text-black px-2 py-1 font-bold">TYPESCRIPT</span>
<span className="text-[10px] bg-neutral-800 text-white px-2 py-1">WEB3.JS</span>
</div>
</div>
</div>
</div>

<div className="group relative border-b border-neutral-900 py-16 cursor-help reveal-chunk reveal-delay-3">
<div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-0"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span className="font-mono text-xs text-neutral-600 group-hover:text-orange-500 transition-colors duration-0">SLOT_9311</span>
<h3 className="text-5xl md:text-8xl font-bold tracking-tighter text-neutral-500 group-hover:text-white group-hover:translate-x-4 transition-transform duration-75 ease-linear">
                        COMPRESSED_NFT
                    </h3>
</div>
<div className="relative z-10 mt-0 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-8 transition-all duration-0 delay-75">
<div className="md:ml-32 max-w-xl">
<p className="font-mono text-sm text-neutral-300 border-l-2 border-orange-600 pl-4 mb-6">
                            State compression implementation using Merkle trees. Minted 1M assets for 5 SOL. High-scale infrastructure test.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white text-black px-2 py-1 font-bold">METAPLEX</span>
<span className="text-[10px] bg-neutral-800 text-white px-2 py-1">RUST</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808] border-t border-neutral-900 overflow-hidden relative snap-section" id="stack">
<div className="container mx-auto px-6 relative z-10">
<h2 className="text-[20vw] font-black text-[#0f0f0f] leading-none absolute -top-10 left-0 -z-10 select-none tracking-tighter">TOOLING</h2>
<div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-0 max-w-5xl ml-auto mt-24">

<span className="reveal-chunk hover-jitter border border-neutral-800 bg-black px-6 py-4 text-xl font-mono hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-none cursor-crosshair">RUST_LANG</span>
<span className="reveal-chunk reveal-delay-1 hover-jitter border border-neutral-800 bg-black px-6 py-4 text-xl font-mono hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-none cursor-crosshair ml-[-1px]">ANCHOR_FW</span>
<span className="reveal-chunk reveal-delay-2 hover-jitter border border-neutral-800 bg-black px-6 py-4 text-xl font-mono hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-none cursor-crosshair ml-[-1px] mt-[-1px] md:mt-0">SOLANA_CLI</span>
<span className="reveal-chunk hover-jitter border border-neutral-800 bg-black px-6 py-4 text-xl font-mono hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-none cursor-crosshair ml-[-1px] mt-[-1px]">NEXT.JS</span>
<span className="reveal-chunk reveal-delay-1 hover-jitter border border-neutral-800 bg-black px-6 py-4 text-xl font-mono hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-none cursor-crosshair ml-[-1px] mt-[-1px]">GRAPHQL</span>
<span className="reveal-chunk reveal-delay-2 hover-jitter border border-neutral-800 bg-black px-6 py-4 text-xl font-mono hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-none cursor-crosshair ml-[-1px] mt-[-1px]">DOCKER</span>
<span className="reveal-chunk hover-jitter border border-neutral-800 bg-black px-6 py-4 text-xl font-mono hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-none cursor-crosshair ml-[-1px] mt-[-1px]">POSTGRES</span>
</div>
<div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-900 pt-12 reveal-chunk">
<div>
<span className="block text-[10px] text-neutral-600 mb-2">// STATUS</span>
<span className="text-orange-500 font-mono text-sm font-bold">AVAILABLE</span>
</div>
<div>
<span className="block text-[10px] text-neutral-600 mb-2">// LOCATION</span>
<span className="text-white font-mono text-sm">GLOBAL</span>
</div>
<div>
<span className="block text-[10px] text-neutral-600 mb-2">// COMMITMENT</span>
<span className="text-white font-mono text-sm">FINALIZED</span>
</div>
<div>
<span className="block text-[10px] text-neutral-600 mb-2">// ENCRYPTION</span>
<span className="text-white font-mono text-sm">ED25519</span>
</div>
</div>
</div>
</section>

<footer className="min-h-[60vh] flex flex-col justify-end bg-black relative border-t-8 border-orange-600 snap-section" id="contact">
<div className="absolute top-10 right-10 animate-pulse">
<div className="w-3 h-3 bg-red-600 rounded-none"></div>
</div>
<div className="container mx-auto px-4 pb-20 relative z-10">
<h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-3xl text-white">
                EXECUTION<br/>HALTED.
            </h2>
<p className="font-mono text-neutral-600 max-w-md mb-12 text-xs">
                The loop has broken. If you require my logic, you must initiate the handshake manually. Do not waste cycles.
            </p>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
<a className="text-lg md:text-2xl font-mono text-white bg-neutral-900 px-6 py-3 hover:bg-white hover:text-black transition-colors duration-0" href="mailto:dev@null.sol">
                    INIT_HANDSHAKE(EMAIL)
                </a>
<div className="flex gap-0">
<a className="p-3 border border-neutral-800 hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-colors duration-0" href="#">
<span className="iconify" data-icon="lucide:github"></span>
</a>
<a className="p-3 border border-neutral-800 border-l-0 hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-colors duration-0" href="#">
<span className="iconify" data-icon="lucide:twitter"></span>
</a>
</div>
</div>
<div className="mt-32 text-[10px] font-mono text-neutral-800 flex justify-between uppercase">
<span>© 2024 ANTI_DESIGN_LABS</span>
<span>GAS: 0.000005 SOL</span>
</div>
</div>
</footer>


    </>
  );
}
