import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
trust: {
400: '#34d399', // Emerald 400
500: '#10b981', // Emerald 500
glow: 'rgba(16, 185, 129, 0.5)'
}
},
animation: {
'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeUp: {
'from': { opacity: 0, transform: 'translateY(20px)', filter: 'blur(4px)' },
'to': { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' }
}
}
}
}
}



        const canvas = document.getElementById('greenRain');
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const drops = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        function drawRain() {
            // Semi-transparent black to create fade trail effect
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#10b981'; // Tailwind emerald-500
            ctx.font = '14px JetBrains Mono';

            for (let i = 0; i < drops.length; i++) {
                // Random binary character or verification symbols
                const text = Math.random() > 0.5 ? '1' : '0';
                
                ctx.fillText(text, i * 20, drops[i] * 20);

                // Reset drop to top randomly
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }

        // Resize handler
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Re-calc columns
            const newCols = Math.floor(width / 20);
            // Preserve existing drops if possible, or reset
            if(newCols > drops.length) {
                for(let i=drops.length; i<newCols; i++) drops[i] = Math.random() * -100;
            }
        });

        // Animation Loop
        setInterval(drawRain, 50);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" id="greenRain"></canvas>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-trust-500 opacity-[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-blue-500 opacity-[0.02] blur-[120px] rounded-full pointer-events-none -z-10"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid-lines"></div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-up">
<nav className="flex bg-[#0a0a0a]/80 w-full h-12 max-w-5xl border-white/5 border rounded-full pr-2 pl-6 shadow-2xl backdrop-blur-md items-center justify-between">

<a className="flex items-center gap-2.5 group hover:opacity-80 transition-opacity" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-tr from-trust-500 to-emerald-300 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]">
<iconify-icon icon="lucide:shield-check" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-white">TRUSTKART</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#">Marketplace</a>
<a className="hover:text-white transition-colors duration-200" href="#">Sell Device</a>
<a className="hover:text-white transition-colors duration-200" href="#">Verification</a>
</div>

<div className="flex items-center gap-3">
<div className="relative hidden sm:block group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-trust-400 transition-colors" icon="lucide:search" width="14"></iconify-icon>
<input className="h-8 w-40 rounded-full border border-white/5 bg-white/5 pl-8 pr-3 text-xs text-white placeholder:text-neutral-600 outline-none focus:border-trust-500/50 focus:bg-white/10 transition-all" placeholder="Search..." type="text"/>
</div>
<button className="group relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all overflow-hidden">
<span className="text-xs font-semibold text-white tracking-tight group-hover:text-trust-400 transition-colors">Login</span>
<div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none"></div>
</button>
</div>
</nav>
</div>

<section className="relative z-10 flex flex-col pt-40 pb-20 max-w-7xl mx-auto px-6 items-center justify-center min-h-[80vh]">

<div className="animate-fade-up delay-100 mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-trust-500/20 transition-colors cursor-default">
<span className="flex h-1.5 w-1.5 rounded-full bg-trust-500 animate-[pulse_2s_infinite]"></span>
<span className="text-[11px] font-medium text-neutral-300 tracking-wide uppercase">Escrow Secured Marketplace</span>
</div>
</div>

<h1 className="animate-fade-up delay-200 md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-medium text-neutral-400 tracking-tight text-center max-w-5xl mx-auto mb-8">
            Pre-owned tech, <br/>
<span className="text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">verified by experts.</span>
</h1>

<p className="animate-fade-up delay-300 leading-relaxed md:text-xl text-lg font-light text-neutral-400 tracking-tight text-center max-w-2xl mx-auto">
            The safest way to buy and sell electronics. We inspect every item, hold payments in escrow, and guarantee authenticity.
        </p>

<div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4">
<button className="group relative h-12 px-8 rounded-full bg-trust-500 text-black text-sm font-bold tracking-tight hover:bg-trust-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2">
                Browse Marketplace
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-neutral-300 text-sm font-medium hover:bg-white/5 transition-all">
                Start Selling
            </button>
</div>

<div className="animate-fade-up delay-300 mt-24 w-full overflow-hidden border-y border-white/5 bg-[#050505]/50 backdrop-blur-sm py-4">
<div className="flex items-center gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
<span className="text-xs font-mono text-neutral-500 flex items-center gap-2"><iconify-icon className="text-trust-500" icon="lucide:check-circle"></iconify-icon> IPHONE 14 PRO VERIFIED</span>
<span className="text-xs font-mono text-neutral-500 flex items-center gap-2"><iconify-icon className="text-trust-500" icon="lucide:shield"></iconify-icon> ₹1.2L HELD IN ESCROW</span>
<span className="text-xs font-mono text-neutral-500 flex items-center gap-2"><iconify-icon className="text-trust-500" icon="lucide:truck"></iconify-icon> MACBOOK AIR M2 SHIPPED</span>
<span className="text-xs font-mono text-neutral-500 flex items-center gap-2"><iconify-icon className="text-trust-500" icon="lucide:check-circle"></iconify-icon> SONY A7IV INSPECTED</span>
<span className="text-xs font-mono text-neutral-500 flex items-center gap-2"><iconify-icon className="text-trust-500" icon="lucide:user-check"></iconify-icon> SELLER KYB COMPLETE</span>
<span className="text-xs font-mono text-neutral-500 flex items-center gap-2"><iconify-icon className="text-trust-500" icon="lucide:check-circle"></iconify-icon> IPHONE 14 PRO VERIFIED</span>
<span className="text-xs font-mono text-neutral-500 flex items-center gap-2"><iconify-icon className="text-trust-500" icon="lucide:shield"></iconify-icon> ₹1.2L HELD IN ESCROW</span>
<span className="text-xs font-mono text-neutral-500 flex items-center gap-2"><iconify-icon className="text-trust-500" icon="lucide:truck"></iconify-icon> MACBOOK AIR M2 SHIPPED</span>
</div>
</div>
</section>

<section className="z-20 bg-[#050505] w-full border-white/5 border-t py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<h2 className="md:text-5xl leading-[1.05] text-3xl font-medium text-white tracking-tight mb-6">
                        Trust isn't just a word.<br/>It's our protocol.
                    </h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed mb-8 max-w-lg">
                        We replace the uncertainty of P2P marketplaces with a rigorous verification layer. No scams, no lemons, no ghosting.
                    </p>
<div className="space-y-6">
<div className="flex group gap-4 items-start">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-trust-500/50 group-hover:bg-trust-500/10 transition-all duration-300">
<iconify-icon className="text-neutral-400 group-hover:text-trust-400 transition-colors" icon="lucide:scan-eye" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white">50-Point Physical Inspection</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Our agents physically verify screen, battery, ports, and internals before listing.</p>
</div>
</div>
<div className="flex group gap-4 items-start">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-trust-500/50 group-hover:bg-trust-500/10 transition-all duration-300">
<iconify-icon className="text-neutral-400 group-hover:text-trust-400 transition-colors" icon="lucide:lock-keyhole" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Escrow Protection</h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">Payment is locked in a secure vault. Seller gets paid only after you approve the delivery.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative group">
<div className="overflow-hidden aspect-square md:aspect-[4/3] bg-[#0a0a0a] border-white/10 border rounded-3xl relative shadow-2xl">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>

<div className="absolute top-6 left-6 z-30 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-trust-500/20 bg-trust-500/10 backdrop-blur-md shadow-lg shadow-trust-500/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trust-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-trust-500"></span>
</span>
<span className="text-[10px] font-semibold tracking-wide text-trust-400 uppercase font-mono">Verification Active</span>
</div>

<div className="flex z-10 absolute inset-0 items-center justify-center">
<div className="relative w-full h-full p-12">
<svg className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none">
<defs>
<filter id="glow-connector">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path d="M 120 200 L 220 200 L 220 150 L 300 150" fill="none" stroke="#10b981" stroke-opacity="0.2" strokeWidth="1"></path>
<path d="M 220 200 L 220 250 L 300 250" fill="none" stroke="#10b981" stroke-opacity="0.2" strokeWidth="1"></path>

<circle fill="#10b981" filter="url(#glow-connector)" r="2">
<animatemotion calcmode="linear" dur="3s" path="M 120 200 L 220 200 L 220 150 L 300 150" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#10b981" filter="url(#glow-connector)" r="2">
<animatemotion begin="1.5s" calcmode="linear" dur="3s" path="M 220 200 L 220 250 L 300 250" repeatcount="indefinite"></animatemotion>
</circle>
</svg>


<div className="absolute left-[80px] top-[180px] w-12 h-12 bg-[#161616] border border-trust-500/30 rounded-lg flex items-center justify-center shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-trust-400" icon="lucide:smartphone"></iconify-icon>
</div>

<div className="absolute left-[200px] top-[180px] w-12 h-12 bg-[#161616] border border-trust-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)] z-10">
<iconify-icon className="text-trust-400" icon="lucide:scan"></iconify-icon>
</div>

<div className="absolute left-[300px] top-[130px] w-auto px-4 h-10 bg-[#161616] border border-trust-500/30 rounded-lg flex items-center justify-center gap-2">
<iconify-icon className="text-trust-400" icon="lucide:badge-check"></iconify-icon>
<span className="text-[10px] text-white font-mono">PASSED</span>
</div>

<div className="absolute left-[300px] top-[230px] w-auto px-4 h-10 bg-[#161616] border border-trust-500/30 rounded-lg flex items-center justify-center gap-2">
<iconify-icon className="text-trust-400" icon="lucide:lock"></iconify-icon>
<span className="text-[10px] text-white font-mono">SECURED</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#080808] border-t border-white/5 py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Marketplace</h2>
<p className="text-sm text-neutral-400">Freshly inspected devices added today.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs text-white hover:bg-white/10 transition-colors">Filters</button>
<button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs text-white hover:bg-white/10 transition-colors">Sort: Newest</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<aside className="hidden md:block space-y-8 p-6 rounded-2xl border border-white/5 bg-[#0a0a0a]">
<div>
<h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Categories</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-white/20 bg-black group-hover:border-trust-500/50 transition-colors">
<input checked="" className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="text-trust-400 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Laptops</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-white/20 bg-black group-hover:border-trust-500/50 transition-colors">
<input className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="text-trust-400 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Smartphones</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded border border-white/20 bg-black group-hover:border-trust-500/50 transition-colors">
<input className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="text-trust-400 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Consoles</span>
</label>
</div>
</div>
<div>
<h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Price Range</h3>
<input className="w-full mb-2" type="range"/>
<div className="flex justify-between text-[10px] text-neutral-500 font-mono">
<span>₹0</span>
<span>₹100k+</span>
</div>
</div>
</aside>

<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden hover:border-trust-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-3 left-3 z-10 px-2 py-1 rounded bg-black/60 backdrop-blur border border-white/10 text-[10px] font-mono text-trust-400 uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-trust-500 inline-block mr-1"></span> Verified
                        </div>
<div className="aspect-[4/3] bg-[#111] relative overflow-hidden flex items-center justify-center group-hover:bg-[#151515] transition-colors">
<iconify-icon className="text-neutral-700 group-hover:text-neutral-500 transition-colors duration-500" icon="lucide:smartphone" width="64"></iconify-icon>

<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-trust-400 transition-colors">iPhone 14 Pro</h3>
<p className="text-xs text-neutral-500 mt-1">Deep Purple • 256GB</p>
</div>
<span className="text-sm font-semibold text-white">₹82k</span>
</div>
<div className="w-full h-px bg-white/5 my-3"></div>
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>Condition: Like New</span>
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:battery-medium" width="12"></iconify-icon> 98%
                                </div>
</div>
</div>
</div>

<div className="group relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden hover:border-trust-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-3 left-3 z-10 px-2 py-1 rounded bg-black/60 backdrop-blur border border-white/10 text-[10px] font-mono text-white uppercase tracking-wide">
                            Excellent
                        </div>
<div className="aspect-[4/3] bg-[#111] relative overflow-hidden flex items-center justify-center group-hover:bg-[#151515] transition-colors">
<iconify-icon className="text-neutral-700 group-hover:text-neutral-500 transition-colors duration-500" icon="lucide:laptop" width="64"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-trust-400 transition-colors">MacBook Air M2</h3>
<p className="text-xs text-neutral-500 mt-1">Midnight • 8GB/256GB</p>
</div>
<span className="text-sm font-semibold text-white">₹74k</span>
</div>
<div className="w-full h-px bg-white/5 my-3"></div>
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>Condition: Excellent</span>
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:battery-full" width="12"></iconify-icon> 92%
                                </div>
</div>
</div>
</div>

<div className="group relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden hover:border-trust-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-3 left-3 z-10 px-2 py-1 rounded bg-black/60 backdrop-blur border border-white/10 text-[10px] font-mono text-trust-400 uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-trust-500 inline-block mr-1"></span> Verified
                        </div>
<div className="aspect-[4/3] bg-[#111] relative overflow-hidden flex items-center justify-center group-hover:bg-[#151515] transition-colors">
<iconify-icon className="text-neutral-700 group-hover:text-neutral-500 transition-colors duration-500" icon="lucide:headphones" width="64"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-trust-400 transition-colors">Sony WH-1000XM5</h3>
<p className="text-xs text-neutral-500 mt-1">Silver • Box included</p>
</div>
<span className="text-sm font-semibold text-white">₹18k</span>
</div>
<div className="w-full h-px bg-white/5 my-3"></div>
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>Condition: Good</span>
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:check-circle" width="12"></iconify-icon> Cleaned
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#050505] py-24">
<div className="mx-auto max-w-6xl px-6">

<div className="mb-8 flex items-center gap-2 text-xs font-mono text-neutral-500">
<span className="text-trust-500">MARKETPLACE</span>
<span>/</span>
<span>LAPTOPS</span>
<span>/</span>
<span className="text-white">ID: TK-8829-XJ</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

<div className="lg:col-span-7 space-y-6">

<div className="relative aspect-video rounded-3xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05),_transparent_70%)]"></div>
<iconify-icon className="text-neutral-800 group-hover:text-neutral-700 transition-colors" icon="lucide:laptop" width="120"></iconify-icon>

<div className="absolute bottom-6 left-6 flex gap-3">
<button className="flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur border border-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-all">
<iconify-icon icon="lucide:image" width="14"></iconify-icon> Gallery
                            </button>
<button className="flex items-center gap-2 rounded-lg bg-trust-500/10 backdrop-blur border border-trust-500/20 px-3 py-1.5 text-xs font-medium text-trust-400 hover:bg-trust-500/20 transition-all">
<iconify-icon icon="lucide:scan-line" width="14"></iconify-icon> Inspection Report
                            </button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#080808] p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<iconify-icon icon="lucide:fingerprint" width="64"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<h3 className="text-sm font-semibold text-white flex items-center gap-2">
<iconify-icon className="text-trust-500" icon="lucide:terminal"></iconify-icon>
                                DIAGNOSTIC_REPORT
                            </h3>
<span className="font-mono text-xs text-trust-400 bg-trust-500/10 px-2 py-1 rounded">SCORE: 98/100</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 rounded-lg bg-white/5 border border-white/5 flex justify-between items-center group hover:border-trust-500/30 transition-colors">
<span className="text-xs text-neutral-400 font-mono">BATTERY_CYCLE</span>
<span className="text-xs text-white font-mono">142 (92%)</span>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5 flex justify-between items-center group hover:border-trust-500/30 transition-colors">
<span className="text-xs text-neutral-400 font-mono">SCREEN_PIXELS</span>
<span className="text-xs text-trust-400 font-mono">OK</span>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5 flex justify-between items-center group hover:border-trust-500/30 transition-colors">
<span className="text-xs text-neutral-400 font-mono">KEYBOARD_MECH</span>
<span className="text-xs text-trust-400 font-mono">OK</span>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5 flex justify-between items-center group hover:border-trust-500/30 transition-colors">
<span className="text-xs text-neutral-400 font-mono">BODY_DENTS</span>
<span className="text-xs text-white font-mono">NONE</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="sticky top-24 rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.03),_transparent_50%)]"></div>
<div className="relative z-10">
<h1 className="text-2xl font-medium tracking-tight text-white">MacBook Pro 14" M1 Pro</h1>
<p className="mt-2 text-sm text-neutral-400 font-light">16GB RAM • 512GB SSD • Space Grey</p>
<div className="mt-8 flex items-baseline gap-3">
<span className="text-4xl font-semibold text-white tracking-tighter">₹1,25,000</span>
<span className="text-sm text-neutral-600 line-through">₹1.99L</span>
</div>

<div className="mt-6 p-4 rounded-xl bg-trust-500/5 border border-trust-500/10 flex gap-3">
<iconify-icon className="text-trust-400 mt-0.5 shrink-0" icon="lucide:shield-check" width="16"></iconify-icon>
<div>
<h4 className="text-xs font-bold text-white uppercase mb-1">Escrow Protected</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed">Funds are held securely. Seller is paid only after you inspect and accept the device.</p>
</div>
</div>
<div className="mt-8 space-y-3">
<button className="w-full h-12 rounded-xl bg-white text-black text-sm font-bold tracking-tight hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                                    Buy Now
                                </button>
<button className="w-full h-12 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                                    Make an Offer
                                </button>
</div>
<div className="mt-6 flex justify-center text-xs text-neutral-500 gap-4">
<span className="flex items-center gap-1 hover:text-white transition-colors"><iconify-icon icon="lucide:truck" width="12"></iconify-icon> Free Shipping</span>
<span className="flex items-center gap-1 hover:text-white transition-colors"><iconify-icon icon="lucide:undo-2" width="12"></iconify-icon> 7-Day Returns</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded bg-trust-500/10 text-trust-500 border border-trust-500/20">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-white">TRUSTKART</span>
</div>
<div className="flex gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
<a className="hover:text-white transition-colors" href="#">Verification Standards</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 font-mono">
<p>© 2024 TrustKart Inc. Secure Marketplace.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-trust-500 animate-pulse"></span>
<span>SYSTEMS OPERATIONAL</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
