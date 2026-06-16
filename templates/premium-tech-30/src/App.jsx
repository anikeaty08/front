import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Sora', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
black: '#0A0A0F',
surface: '#111827',
elevated: '#1F2937',
accent: '#00D4FF',
text: '#FFFFFF',
muted: '#9CA3AF',
success: '#10B981',
warning: '#F59E0B',
danger: '#EF4444'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-brand-accent text-black py-1.5 px-4 text-xs font-medium tracking-wide flex justify-between items-center z-50 relative">
<div className="flex-1 flex justify-center items-center gap-6 overflow-hidden whitespace-nowrap">
<span className="flex items-center gap-2"><iconify-icon icon="solar:box-linear"></iconify-icon> FREE SHIPPING ON ORDERS OVER $999</span>
<span className="hidden md:flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> 2-YEAR OFFICIAL WARRANTY</span>
<span className="hidden lg:flex items-center gap-2"><iconify-icon icon="solar:wallet-linear"></iconify-icon> 0% INSTALLMENT PLANS</span>
</div>
<button className="hover:opacity-70 transition-opacity"><iconify-icon className="text-sm" icon="solar:close-circle-linear"></iconify-icon></button>
</div>

<nav className="sticky top-0 z-40 backdrop-blur-xl bg-brand-black/80 border-b border-brand-elevated/50 transition-all">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-brand-text text-black flex items-center justify-center rounded-sm group-hover:bg-brand-accent transition-colors">
<iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Aura</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-muted">
<a className="hover:text-brand-text transition-colors" href="#">Laptops</a>
<a className="hover:text-brand-text transition-colors" href="#">Desktops</a>
<a className="hover:text-brand-text transition-colors" href="#">Monitors</a>
<a className="hover:text-brand-text transition-colors" href="#">Accessories</a>
<a className="hover:text-brand-text transition-colors flex items-center gap-1" href="#">Deals <span className="px-1.5 py-0.5 bg-brand-danger/10 text-brand-danger text-[0.65rem] rounded-sm tracking-widest uppercase">Live</span></a>
</div>

<div className="flex items-center gap-5 text-brand-text">
<button className="hover:text-brand-accent transition-colors"><iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon></button>
<button className="hover:text-brand-accent transition-colors hidden md:block relative">
<iconify-icon className="text-xl" icon="solar:scale-linear"></iconify-icon>
<span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-surface border border-brand-elevated text-[0.6rem] flex items-center justify-center rounded-full">2</span>
</button>
<button className="hover:text-brand-accent transition-colors relative">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<button className="hover:text-brand-accent transition-colors relative">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-accent text-black text-[0.65rem] font-medium flex items-center justify-center rounded-full">3</span>
</button>
<button className="hover:text-brand-accent transition-colors hidden md:block"><iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon></button>
<button className="lg:hidden hover:text-brand-accent transition-colors"><iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon></button>
</div>
</div>
</nav>
<main>

<section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-brand-elevated/30">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 py-20">

<div className="flex flex-col items-start gap-6">
<div className="flex items-center gap-3">
<span className="px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-medium uppercase tracking-widest flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span> New Arrival
                        </span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1]">
                        Power that <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-muted">defies limits.</span>
</h1>

<div className="flex flex-wrap gap-3 mt-2">
<div className="px-3 py-1.5 rounded bg-brand-surface border border-brand-elevated text-xs font-mono text-brand-muted flex items-center gap-2">
<iconify-icon className="text-brand-accent" icon="solar:cpu-linear"></iconify-icon> RTX 4090
                        </div>
<div className="px-3 py-1.5 rounded bg-brand-surface border border-brand-elevated text-xs font-mono text-brand-muted flex items-center gap-2">
<iconify-icon className="text-brand-success" icon="solar:database-linear"></iconify-icon> 64GB DDR5
                        </div>
<div className="px-3 py-1.5 rounded bg-brand-surface border border-brand-elevated text-xs font-mono text-brand-muted flex items-center gap-2">
<iconify-icon className="text-brand-warning" icon="solar:monitor-linear"></iconify-icon> 16" Mini-LED
                        </div>
</div>
<p className="text-brand-muted text-base md:text-lg max-w-md mt-2 font-light">
                        Experience desktop-grade performance in a chassis milled from a single block of aerospace aluminum.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3.5 bg-brand-text text-black font-medium text-sm rounded-sm hover:bg-brand-accent transition-colors flex items-center justify-center gap-2">
                            Shop Pro Series <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 border border-brand-elevated bg-brand-surface/50 text-brand-text font-medium text-sm rounded-sm hover:bg-brand-elevated transition-colors flex items-center justify-center gap-2">
                            View Specs
                        </button>
</div>

<div className="flex items-center gap-6 mt-8 pt-8 border-t border-brand-elevated/50 w-full">
<div className="flex items-center gap-2 text-xs text-brand-muted">
<iconify-icon className="text-brand-success text-base" icon="solar:verified-check-linear"></iconify-icon> Authorized Dealer
                        </div>
<div className="flex items-center gap-2 text-xs text-brand-muted">
<iconify-icon className="text-brand-accent text-base" icon="solar:shield-warning-linear"></iconify-icon> Price Match
                        </div>
</div>
</div>

<div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">

<img alt="Premium Laptop" className="object-cover w-[80%] h-[80%] opacity-80 rounded-lg filter mix-blend-lighten" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&amp;w=2068&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3" style={{maskImage: 'radial-gradient(circle, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'}}/>
</div>
</div>
</section>

<section className="py-12 border-b border-brand-elevated/30">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12">
<div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide" style={{scrollbarWidth: 'none'}}>

<a className="min-w-[140px] p-4 bg-brand-surface border border-brand-elevated rounded-lg flex flex-col items-center justify-center gap-3 hover:border-brand-accent/50 hover:-translate-y-1 transition-all group" href="#">
<iconify-icon className="text-3xl text-brand-muted group-hover:text-brand-accent transition-colors" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium">Laptops</span>
</a>
<a className="min-w-[140px] p-4 bg-brand-surface border border-brand-elevated rounded-lg flex flex-col items-center justify-center gap-3 hover:border-brand-accent/50 hover:-translate-y-1 transition-all group" href="#">
<iconify-icon className="text-3xl text-brand-muted group-hover:text-brand-accent transition-colors" icon="solar:monitor-linear"></iconify-icon>
<span className="text-xs font-medium">Monitors</span>
</a>
<a className="min-w-[140px] p-4 bg-brand-surface border border-brand-elevated rounded-lg flex flex-col items-center justify-center gap-3 hover:border-brand-accent/50 hover:-translate-y-1 transition-all group" href="#">
<iconify-icon className="text-3xl text-brand-muted group-hover:text-brand-accent transition-colors" icon="solar:server-square-linear"></iconify-icon>
<span className="text-xs font-medium">Desktops</span>
</a>
<a className="min-w-[140px] p-4 bg-brand-surface border border-brand-elevated rounded-lg flex flex-col items-center justify-center gap-3 hover:border-brand-accent/50 hover:-translate-y-1 transition-all group" href="#">
<iconify-icon className="text-3xl text-brand-muted group-hover:text-brand-accent transition-colors" icon="solar:keyboard-linear"></iconify-icon>
<span className="text-xs font-medium">Keyboards</span>
</a>
<a className="min-w-[140px] p-4 bg-brand-surface border border-brand-elevated rounded-lg flex flex-col items-center justify-center gap-3 hover:border-brand-accent/50 hover:-translate-y-1 transition-all group" href="#">
<iconify-icon className="text-3xl text-brand-muted group-hover:text-brand-accent transition-colors" icon="solar:mouse-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium">Mice</span>
</a>
<a className="min-w-[140px] p-4 bg-brand-surface border border-brand-elevated rounded-lg flex flex-col items-center justify-center gap-3 hover:border-brand-accent/50 hover:-translate-y-1 transition-all group" href="#">
<iconify-icon className="text-3xl text-brand-muted group-hover:text-brand-accent transition-colors" icon="solar:headphones-round-sound-linear"></iconify-icon>
<span className="text-xs font-medium">Audio</span>
</a>
<a className="min-w-[140px] p-4 bg-brand-surface border border-brand-elevated rounded-lg flex flex-col items-center justify-center gap-3 hover:border-brand-accent/50 hover:-translate-y-1 transition-all group" href="#">
<iconify-icon className="text-3xl text-brand-muted group-hover:text-brand-accent transition-colors" icon="solar:usb-linear"></iconify-icon>
<span className="text-xs font-medium">Cables</span>
</a>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="font-display font-semibold text-2xl tracking-tight flex items-center gap-2">
<iconify-icon className="text-brand-accent" icon="solar:bolt-linear"></iconify-icon> Flash Deals
                        </h2>
<p className="text-brand-muted text-sm mt-1">Limited quantities available.</p>
</div>
<div className="flex items-center gap-3 bg-brand-surface border border-brand-elevated px-4 py-2 rounded-sm font-mono text-sm">
<span className="text-brand-danger">Ends in:</span>
<span>04</span><span className="text-brand-muted text-xs">h</span>
<span>12</span><span className="text-brand-muted text-xs">m</span>
<span>59</span><span className="text-brand-muted text-xs">s</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-brand-surface border border-brand-elevated rounded-lg p-5 group relative overflow-hidden flex flex-col h-full hover:border-brand-accent/30 transition-colors">
<div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
<span className="bg-brand-danger text-white text-[0.65rem] font-semibold px-2 py-1 rounded-sm uppercase tracking-widest">-25%</span>
</div>
<button className="absolute top-4 right-4 z-10 text-brand-muted hover:text-brand-accent transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="h-48 w-full bg-brand-black/50 rounded flex items-center justify-center mb-4 p-4 relative group-hover:bg-brand-black transition-colors">
<img alt="Monitor" className="max-h-full object-contain mix-blend-lighten opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="text-[0.65rem] text-brand-muted uppercase tracking-widest mb-1">Samsung</div>
<h3 className="text-sm font-medium leading-snug mb-3 line-clamp-2 text-brand-text">49" Odyssey G9 OLED Curved Smart Gaming Monitor</h3>
<div className="mt-auto">
<div className="flex items-end gap-2 mb-3">
<span className="font-mono text-xl text-brand-text tabular-nums tracking-tight">$1,199.99</span>
<span className="font-mono text-sm text-brand-muted line-through tabular-nums pb-0.5">$1,599.99</span>
</div>

<div className="mb-4">
<div className="flex justify-between text-[0.65rem] text-brand-muted mb-1 font-mono uppercase">
<span>Claimed: 85%</span>
<span className="text-brand-warning">Only 3 left</span>
</div>
<div className="w-full h-1 bg-brand-black rounded-full overflow-hidden">
<div className="h-full bg-brand-warning w-[85%] rounded-full"></div>
</div>
</div>
<button className="w-full py-2.5 bg-brand-elevated hover:bg-brand-accent hover:text-black text-brand-text text-sm font-medium rounded-sm transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
</div>

<div className="bg-brand-surface border border-brand-elevated rounded-lg p-5 group relative overflow-hidden flex flex-col h-full hover:border-brand-accent/30 transition-colors">
<div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
<span className="bg-brand-danger text-white text-[0.65rem] font-semibold px-2 py-1 rounded-sm uppercase tracking-widest">-15%</span>
</div>
<button className="absolute top-4 right-4 z-10 text-brand-muted hover:text-brand-accent transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="h-48 w-full bg-brand-black/50 rounded flex items-center justify-center mb-4 p-4 relative group-hover:bg-brand-black transition-colors">
<img alt="Keyboard" className="max-h-full object-contain mix-blend-lighten opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="text-[0.65rem] text-brand-muted uppercase tracking-widest mb-1">Keychron</div>
<h3 className="text-sm font-medium leading-snug mb-3 line-clamp-2 text-brand-text">Q1 Pro Custom Mechanical Keyboard (Wireless)</h3>
<div className="mt-auto">
<div className="flex items-end gap-2 mb-3">
<span className="font-mono text-xl text-brand-text tabular-nums tracking-tight">$169.00</span>
<span className="font-mono text-sm text-brand-muted line-through tabular-nums pb-0.5">$199.00</span>
</div>
<div className="mb-4">
<div className="flex justify-between text-[0.65rem] text-brand-muted mb-1 font-mono uppercase">
<span>Claimed: 40%</span>
<span>In Stock</span>
</div>
<div className="w-full h-1 bg-brand-black rounded-full overflow-hidden">
<div className="h-full bg-brand-success w-[40%] rounded-full"></div>
</div>
</div>
<button className="w-full py-2.5 bg-brand-elevated hover:bg-brand-accent hover:text-black text-brand-text text-sm font-medium rounded-sm transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-brand-elevated/30">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h2 className="font-display font-semibold text-2xl tracking-tight">Best Sellers</h2>
<p className="text-brand-muted text-sm mt-1">Top rated equipment by professionals.</p>
</div>

<div className="flex p-1 bg-brand-surface border border-brand-elevated rounded-sm w-max">
<button className="px-4 py-1.5 text-xs font-medium bg-brand-elevated text-white rounded-sm">All</button>
<button className="px-4 py-1.5 text-xs font-medium text-brand-muted hover:text-white transition-colors rounded-sm">Laptops</button>
<button className="px-4 py-1.5 text-xs font-medium text-brand-muted hover:text-white transition-colors rounded-sm">Components</button>
<button className="px-4 py-1.5 text-xs font-medium text-brand-muted hover:text-white transition-colors rounded-sm">Accessories</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-brand-surface border border-brand-elevated rounded-lg p-5 group hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)] transition-all duration-300 flex flex-col h-full relative">
<button className="absolute top-4 right-4 z-10 text-brand-muted hover:text-brand-accent transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="h-48 w-full flex items-center justify-center mb-4 p-4">

<img alt="Macbook" className="max-h-full object-contain mix-blend-lighten opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-1">
<div className="text-[0.65rem] text-brand-muted uppercase tracking-widest font-medium">Apple</div>
<div className="flex items-center gap-1 text-[0.65rem] text-brand-muted">
<iconify-icon className="text-brand-accent" icon="solar:star-bold"></iconify-icon> 4.9 (128)
                                </div>
</div>
<h3 className="text-sm font-medium leading-snug mb-3 line-clamp-2">MacBook Pro 16" M3 Max</h3>

<div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
<span className="px-2 py-1 text-[0.65rem] rounded border border-blue-500/20 bg-blue-500/5 text-blue-400 font-mono">16-Core CPU</span>
<span className="px-2 py-1 text-[0.65rem] rounded border border-green-500/20 bg-green-500/5 text-green-400 font-mono">48GB RAM</span>
<span className="px-2 py-1 text-[0.65rem] rounded border border-orange-500/20 bg-orange-500/5 text-orange-400 font-mono">1TB SSD</span>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-elevated/50">
<div className="flex flex-col">
<span className="text-[0.65rem] text-brand-success font-medium uppercase flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-success"></span> In Stock</span>
<span className="font-mono text-lg text-brand-text tabular-nums tracking-tight mt-0.5">$3,499.00</span>
</div>
<button className="w-10 h-10 rounded bg-brand-text text-black flex items-center justify-center hover:bg-brand-accent transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>

<div className="mt-4 pt-3 border-t border-brand-elevated/30">
<label className="cursor-pointer relative flex items-center group/check w-max">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-brand-muted/50 rounded-sm flex items-center justify-center peer-checked:bg-brand-accent peer-checked:border-brand-accent transition-colors">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-2 text-[0.7rem] text-brand-muted peer-checked:text-brand-text transition-colors group-hover/check:text-brand-text">Add to Compare</span>
</label>
</div>
</div>
</div>

<div className="bg-brand-surface border border-brand-elevated rounded-lg p-5 group hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)] transition-all duration-300 flex flex-col h-full relative">
<button className="absolute top-4 right-4 z-10 text-brand-muted hover:text-brand-accent transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="h-48 w-full flex items-center justify-center mb-4 p-4">
<img alt="GPU" className="max-h-full object-contain mix-blend-lighten opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-1">
<div className="text-[0.65rem] text-brand-muted uppercase tracking-widest font-medium">ASUS</div>
<div className="flex items-center gap-1 text-[0.65rem] text-brand-muted">
<iconify-icon className="text-brand-accent" icon="solar:star-bold"></iconify-icon> 4.8 (89)
                                </div>
</div>
<h3 className="text-sm font-medium leading-snug mb-3 line-clamp-2">ROG Strix GeForce RTX 4090 OC Edition</h3>

<div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
<span className="px-2 py-1 text-[0.65rem] rounded border border-purple-500/20 bg-purple-500/5 text-purple-400 font-mono">24GB GDDR6X</span>
<span className="px-2 py-1 text-[0.65rem] rounded border border-gray-500/20 bg-gray-500/5 text-gray-400 font-mono">DLSS 3</span>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-elevated/50">
<div className="flex flex-col">
<span className="text-[0.65rem] text-brand-warning font-medium uppercase flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-warning"></span> Low Stock</span>
<span className="font-mono text-lg text-brand-text tabular-nums tracking-tight mt-0.5">$1,999.00</span>
</div>
<button className="w-10 h-10 rounded bg-brand-text text-black flex items-center justify-center hover:bg-brand-accent transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>

<div className="mt-4 pt-3 border-t border-brand-elevated/30">
<label className="cursor-pointer relative flex items-center group/check w-max">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-brand-muted/50 rounded-sm flex items-center justify-center peer-checked:bg-brand-accent peer-checked:border-brand-accent transition-colors">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-2 text-[0.7rem] text-brand-muted peer-checked:text-brand-text transition-colors group-hover/check:text-brand-text">Add to Compare</span>
</label>
</div>
</div>
</div>

<div className="bg-brand-surface border border-brand-elevated rounded-lg p-5 group hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)] transition-all duration-300 flex flex-col h-full relative opacity-75">
<button className="absolute top-4 right-4 z-10 text-brand-muted hover:text-brand-accent transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="h-48 w-full flex items-center justify-center mb-4 p-4 relative">
<div className="absolute inset-0 bg-brand-surface/50 z-10 flex items-center justify-center backdrop-blur-[1px]">
<span className="bg-brand-danger/90 text-white text-xs font-semibold px-3 py-1 rounded-sm uppercase tracking-widest">Out of Stock</span>
</div>
<img alt="Headphones" className="max-h-full object-contain mix-blend-lighten opacity-50 grayscale" src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-1">
<div className="text-[0.65rem] text-brand-muted uppercase tracking-widest font-medium">Sony</div>
<div className="flex items-center gap-1 text-[0.65rem] text-brand-muted">
<iconify-icon className="text-brand-accent" icon="solar:star-bold"></iconify-icon> 4.7 (210)
                                </div>
</div>
<h3 className="text-sm font-medium leading-snug mb-3 line-clamp-2 text-brand-muted">WH-1000XM5 Wireless Noise Canceling Headphones</h3>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-elevated/50">
<div className="flex flex-col">
<span className="text-[0.65rem] text-brand-danger font-medium uppercase flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-danger"></span> Unavailable</span>
<span className="font-mono text-lg text-brand-muted tabular-nums tracking-tight mt-0.5">$398.00</span>
</div>
<button className="w-10 h-10 rounded border border-brand-elevated text-brand-muted flex items-center justify-center cursor-not-allowed">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</button>
</div>

<div className="mt-4 pt-3 border-t border-brand-elevated/30">
<label className="cursor-pointer relative flex items-center group/check w-max">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-brand-muted/50 rounded-sm flex items-center justify-center peer-checked:bg-brand-accent peer-checked:border-brand-accent transition-colors">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-2 text-[0.7rem] text-brand-muted peer-checked:text-brand-text transition-colors group-hover/check:text-brand-text">Add to Compare</span>
</label>
</div>
</div>
</div>

<div className="bg-brand-surface border border-brand-elevated rounded-lg p-5 group hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)] transition-all duration-300 flex flex-col h-full relative">
<button className="absolute top-4 right-4 z-10 text-brand-muted hover:text-brand-accent transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="h-48 w-full flex items-center justify-center mb-4 p-4">
<img alt="Desktop" className="max-h-full object-contain mix-blend-lighten opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-1">
<div className="text-[0.65rem] text-brand-muted uppercase tracking-widest font-medium">Dell</div>
<div className="flex items-center gap-1 text-[0.65rem] text-brand-muted">
<iconify-icon className="text-brand-accent" icon="solar:star-bold"></iconify-icon> 4.5 (42)
                                </div>
</div>
<h3 className="text-sm font-medium leading-snug mb-3 line-clamp-2">Alienware Aurora R16 Gaming Desktop</h3>

<div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
<span className="px-2 py-1 text-[0.65rem] rounded border border-blue-500/20 bg-blue-500/5 text-blue-400 font-mono">Core i9</span>
<span className="px-2 py-1 text-[0.65rem] rounded border border-purple-500/20 bg-purple-500/5 text-purple-400 font-mono">RTX 4080</span>
<span className="px-2 py-1 text-[0.65rem] rounded border border-orange-500/20 bg-orange-500/5 text-orange-400 font-mono">2TB NVMe</span>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-elevated/50">
<div className="flex flex-col">
<span className="text-[0.65rem] text-brand-success font-medium uppercase flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-success"></span> In Stock</span>
<span className="font-mono text-lg text-brand-text tabular-nums tracking-tight mt-0.5">$2,799.99</span>
</div>
<button className="w-10 h-10 rounded bg-brand-text text-black flex items-center justify-center hover:bg-brand-accent transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>

<div className="mt-4 pt-3 border-t border-brand-elevated/30">
<label className="cursor-pointer relative flex items-center group/check w-max">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-brand-muted/50 rounded-sm flex items-center justify-center peer-checked:bg-brand-accent peer-checked:border-brand-accent transition-colors">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-2 text-[0.7rem] text-brand-muted peer-checked:text-brand-text transition-colors group-hover/check:text-brand-text">Add to Compare</span>
</label>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-brand-surface/30 border-t border-brand-elevated/30">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12">
<div className="bg-brand-surface border border-brand-elevated rounded-lg p-8">
<h2 className="font-display font-semibold text-xl tracking-tight mb-6">Advanced Filtering Tool</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="col-span-1 md:col-span-2">
<label className="text-xs font-medium text-brand-muted uppercase tracking-widest mb-3 block">Price Range</label>
<div className="flex items-center gap-4 mb-3">
<div className="bg-brand-black border border-brand-elevated rounded px-3 py-2 flex-1 flex items-center">
<span className="text-brand-muted text-xs mr-1">$</span>
<input className="bg-transparent border-none outline-none text-sm font-mono w-full text-brand-text" type="number" value="500"/>
</div>
<span className="text-brand-muted">-</span>
<div className="bg-brand-black border border-brand-elevated rounded px-3 py-2 flex-1 flex items-center">
<span className="text-brand-muted text-xs mr-1">$</span>
<input className="bg-transparent border-none outline-none text-sm font-mono w-full text-brand-text" type="number" value="4500"/>
</div>
</div>

<div className="relative h-1 bg-brand-elevated rounded-full mt-4">
<div className="absolute h-full bg-brand-accent rounded-full left-[10%] right-[30%]"></div>
<div className="absolute w-4 h-4 bg-brand-text rounded-full -top-1.5 left-[10%] -ml-2 cursor-pointer shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
<div className="absolute w-4 h-4 bg-brand-text rounded-full -top-1.5 right-[30%] -mr-2 cursor-pointer shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
</div>
</div>

<div className="col-span-1">
<label className="text-xs font-medium text-brand-muted uppercase tracking-widest mb-3 block">Availability</label>
<label className="flex items-center cursor-pointer group">
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-brand-elevated peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-brand-muted peer-checked:after:bg-black after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-accent"></div>
</div>
<span className="ml-3 text-sm font-medium text-brand-text">In Stock Only</span>
</label>
</div>

<div className="col-span-1">
<label className="text-xs font-medium text-brand-muted uppercase tracking-widest mb-3 block">Sort By</label>
<div className="relative">
<button className="w-full bg-brand-black border border-brand-elevated rounded px-4 py-2.5 text-sm flex items-center justify-between hover:border-brand-accent/50 transition-colors">
<span>Recommended</span>
<iconify-icon className="text-brand-muted" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-brand-elevated/30">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-elevated flex items-center justify-center text-brand-accent shrink-0">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm mb-1">Fast Delivery</h4>
<p className="text-xs text-brand-muted leading-relaxed">Same-day shipping in select cities. Track every step.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-elevated flex items-center justify-center text-brand-accent shrink-0">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm mb-1">2-Year Warranty</h4>
<p className="text-xs text-brand-muted leading-relaxed">Official manufacturer warranty on all major components.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-elevated flex items-center justify-center text-brand-accent shrink-0">
<iconify-icon className="text-2xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm mb-1">0% Installments</h4>
<p className="text-xs text-brand-muted leading-relaxed">Split payments over 12 months with no hidden fees.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-elevated flex items-center justify-center text-brand-accent shrink-0">
<iconify-icon className="text-2xl" icon="solar:wrench-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm mb-1">Expert Support</h4>
<p className="text-xs text-brand-muted leading-relaxed">24/7 technical assistance from certified professionals.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-brand-surface border-t border-brand-elevated/50 pt-16 pb-8">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">

<div className="col-span-2 lg:col-span-2 pr-8">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-brand-text text-black flex items-center justify-center rounded-sm">
<iconify-icon className="text-sm" icon="solar:cpu-linear"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg tracking-tighter uppercase">Aura Tech</span>
</a>
<p className="text-xs text-brand-muted leading-relaxed mb-6">
                        The ultimate destination for premium tech, high-performance computing, and elite gaming gear. Build beyond limits.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded border border-brand-elevated flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-accent transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded border border-brand-elevated flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-accent transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h5 className="text-xs font-semibold uppercase tracking-widest text-brand-text mb-4">Shop</h5>
<ul className="flex flex-col gap-2.5 text-xs text-brand-muted">
<li><a className="hover:text-brand-accent transition-colors" href="#">Laptops</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Desktops</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Monitors</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Components</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Accessories</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-semibold uppercase tracking-widest text-brand-text mb-4">Brands</h5>
<ul className="flex flex-col gap-2.5 text-xs text-brand-muted">
<li><a className="hover:text-brand-accent transition-colors" href="#">Apple</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">ASUS ROG</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Razer</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Dell Alienware</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">NVIDIA</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-semibold uppercase tracking-widest text-brand-text mb-4">Support</h5>
<ul className="flex flex-col gap-2.5 text-xs text-brand-muted">
<li><a className="hover:text-brand-accent transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Returns Policy</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Warranty Info</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div className="col-span-2 lg:col-span-1">
<h5 className="text-xs font-semibold uppercase tracking-widest text-brand-text mb-4">Stay Updated</h5>
<p className="text-[0.7rem] text-brand-muted mb-3 block">Get exclusive deals and tech insights.</p>
<form className="flex flex-col gap-2">
<input className="w-full bg-brand-black border border-brand-elevated rounded px-3 py-2 text-xs outline-none focus:border-brand-accent text-brand-text transition-colors" placeholder="Email address" type="email"/>
<button className="w-full bg-brand-text text-black font-medium text-xs py-2 rounded hover:bg-brand-accent transition-colors" type="button">Subscribe</button>
</form>
</div>
</div>

<div className="pt-6 border-t border-brand-elevated flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[0.65rem] text-brand-muted">
                    © 2024 Aura Tech. All rights reserved. Prices include VAT.
                </p>
<div className="flex items-center gap-3 text-brand-muted">

<div className="h-6 w-10 border border-brand-elevated rounded flex items-center justify-center text-[0.6rem] font-medium">VISA</div>
<div className="h-6 w-10 border border-brand-elevated rounded flex items-center justify-center text-[0.6rem] font-medium">MC</div>
<div className="h-6 w-10 border border-brand-elevated rounded flex items-center justify-center text-[0.6rem] font-medium">AMEX</div>
<div className="h-6 w-10 border border-brand-elevated rounded flex items-center justify-center text-[0.6rem] font-medium">PAY</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
