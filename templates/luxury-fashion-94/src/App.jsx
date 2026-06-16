import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
},
},
animation: {
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 25s linear infinite',
'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1)',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
reveal: {
'0%': { transform: 'translateY(100%)' },
'100%': { transform: 'translateY(0)' },
}
}
}
}
}



        function filterItems(category) {
            const items = document.querySelectorAll('.product-card');
            const buttons = document.querySelectorAll('#filters button');
            
            buttons.forEach(btn => {
                btn.className = "px-4 py-2 border border-zinc-800 text-zinc-400 text-xs font-medium rounded-full hover:border-white hover:text-white transition-all";
            });
            event.target.className = "px-4 py-2 bg-white text-black text-xs font-semibold rounded-full transition-all";

            items.forEach(item => {
                if(category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        }

        function toggleCart() {
            const sidebar = document.getElementById('cart-sidebar');
            const overlay = document.getElementById('cart-overlay');
            
            if (sidebar.classList.contains('translate-x-full')) {
                sidebar.classList.remove('translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-y-0 right-0 w-80 bg-zinc-900 border-l border-white/10 z-[60] transform translate-x-full transition-transform duration-500 shadow-2xl flex flex-col" id="cart-sidebar">
<div className="p-6 border-b border-white/5 flex justify-between items-center">
<h2 className="text-white font-medium">Your Cart (2)</h2>
<button className="text-zinc-500 hover:text-white" onclick="toggleCart()"><iconify-icon icon="lucide:x" width="20"></iconify-icon></button>
</div>
<div className="flex-1 p-6 space-y-6 overflow-y-auto">
<div className="flex gap-4">
<div className="w-16 h-20 bg-zinc-800 rounded overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div>
<h4 className="text-sm text-white">Noir Sherwani</h4>
<p className="text-xs text-zinc-500">Size: M • Black</p>
<p className="text-sm text-white mt-1">$450</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-16 h-20 bg-zinc-800 rounded overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div>
<h4 className="text-sm text-white">Cyber Silk Saree</h4>
<p className="text-xs text-zinc-500">Size: One Size</p>
<p className="text-sm text-white mt-1">$820</p>
</div>
</div>
</div>
<div className="p-6 border-t border-white/5 bg-zinc-900">
<div className="flex justify-between text-sm mb-4">
<span className="text-zinc-400">Total</span>
<span className="text-white font-semibold">$1,270</span>
</div>
<button className="w-full py-3 bg-white text-black text-sm font-semibold rounded hover:bg-zinc-200 transition-colors">Checkout</button>
</div>
</div>
<div className="fixed inset-0 bg-black/60 z-50 hidden backdrop-blur-sm transition-opacity" id="cart-overlay" onclick="toggleCart()"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-gradient-to-tr from-white to-zinc-400 rounded-sm rotate-45 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
                ZAB-E-TAN
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#featured">Featured</a>
<a className="hover:text-white transition-colors" href="#collection">Collection</a>
<a className="hover:text-white transition-colors" href="#digital">Virtual Fit</a>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 hover:bg-white/5 rounded-full transition-colors text-white group" onclick="toggleCart()">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-zinc-950 group-hover:scale-125 transition-transform"></span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" id="featured">

<div className="absolute inset-0 z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px] animate-float"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-fuchsia-900/10 rounded-full blur-[100px] animate-float"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full h-full mt-8 md:mt-0">

<div className="space-y-8 order-2 lg:order-1 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest font-semibold text-zinc-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    New Arrival
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.05] text-glow">
                    Tradition <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 italic font-serif">Re-Engineered.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-md font-light leading-relaxed">
                    Zab-e-tan blends Pakistani craftsmanship with computational geometry. Wearable architecture for the modern era.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="h-12 px-8 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-105 flex items-center gap-2">
                        Shop Collection
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-8 pt-8 border-t border-white/5">
<div>
<p className="text-2xl font-light text-white">42</p>
<p className="text-xs text-zinc-500 uppercase tracking-wider">Looks</p>
</div>
<div>
<p className="text-2xl font-light text-white">100%</p>
<p className="text-xs text-zinc-500 uppercase tracking-wider">Handmade</p>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 h-[500px] md:h-[650px] w-full flex items-center justify-center">
<div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group">

<img alt="Eastern Fashion Model" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>

<div className="absolute bottom-8 left-8 glass-panel p-4 rounded-xl max-w-xs animate-float">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<p className="text-white text-sm font-medium">Prince Coat v2</p>
<p className="text-zinc-500 text-xs">Pure Jamawar Fabric</p>
</div>
<div className="ml-auto">
<span className="text-white text-xs font-semibold">$380</span>
</div>
</div>
</div>

<div className="absolute top-8 right-8 flex flex-col items-end gap-2">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-zinc-300 font-mono">
                            ISO 800
                        </div>
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] text-zinc-300 font-mono">
                            1/250s
                        </div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-zinc-900/50 overflow-hidden py-4">
<div className="flex w-[200%] animate-marquee whitespace-nowrap">
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> Lahore</span>
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> Karachi</span>
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> Dubai</span>
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> London</span>
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> New York</span>
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> Tokyo</span>

<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> Lahore</span>
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> Karachi</span>
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> Dubai</span>
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> London</span>
<span className="mx-8 text-sm font-medium text-zinc-500 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="lucide:asterisk"></iconify-icon> New York</span>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6" id="collection">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">The Archive</h2>
<p className="text-zinc-500">Fusion of Eastern heritage and Western industrialism.</p>
</div>
<div className="flex flex-wrap gap-2" id="filters">
<button className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-full transition-all" onclick="filterItems('all')">All</button>
<button className="px-4 py-2 border border-zinc-800 text-zinc-400 text-xs font-medium rounded-full hover:border-white hover:text-white transition-all" onclick="filterItems('sherwani')">Sherwani</button>
<button className="px-4 py-2 border border-zinc-800 text-zinc-400 text-xs font-medium rounded-full hover:border-white hover:text-white transition-all" onclick="filterItems('kurta')">Kurta</button>
<button className="px-4 py-2 border border-zinc-800 text-zinc-400 text-xs font-medium rounded-full hover:border-white hover:text-white transition-all" onclick="filterItems('fusion')">Fusion</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="product-grid">

<div className="group relative product-card" data-category="sherwani">
<div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur rounded-full text-white cursor-pointer hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full h-10 bg-white text-black text-xs font-semibold uppercase tracking-wide rounded flex items-center justify-center gap-2 hover:bg-zinc-200">
                            View Details <iconify-icon icon="lucide:arrow-up-right" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between items-start">
<h3 className="text-white text-sm font-medium">Obsidian Sherwani</h3>
<span className="text-zinc-300 text-sm">$450</span>
</div>
<p className="text-zinc-500 text-xs mt-1">Velvet • Gold Thread</p>
</div>
</div>

<div className="group relative product-card" data-category="fusion">
<div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
<div className="absolute top-3 left-3 z-10 px-2 py-1 bg-indigo-500/20 text-indigo-300 backdrop-blur-md rounded text-[10px] font-medium uppercase tracking-wider">New</div>
<img alt="Item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full h-10 bg-white text-black text-xs font-semibold uppercase tracking-wide rounded flex items-center justify-center gap-2 hover:bg-zinc-200">
                            Quick Add <iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between items-start">
<h3 className="text-white text-sm font-medium">Cyber Silk Saree</h3>
<span className="text-zinc-300 text-sm">$820</span>
</div>
<p className="text-zinc-500 text-xs mt-1">Digital Print • Smart Fabric</p>
</div>
</div>

<div className="group relative product-card" data-category="kurta">
<div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full h-10 bg-white text-black text-xs font-semibold uppercase tracking-wide rounded flex items-center justify-center gap-2 hover:bg-zinc-200">
                            Quick Add <iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between items-start">
<h3 className="text-white text-sm font-medium">Minimal Kurta</h3>
<span className="text-zinc-300 text-sm">$180</span>
</div>
<p className="text-zinc-500 text-xs mt-1">Raw Cotton • Asymmetric</p>
</div>
</div>

<div className="group relative product-card" data-category="fusion">
<div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full h-10 bg-white text-black text-xs font-semibold uppercase tracking-wide rounded flex items-center justify-center gap-2 hover:bg-zinc-200">
                            Quick Add <iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between items-start">
<h3 className="text-white text-sm font-medium">Lunar Gown</h3>
<span className="text-zinc-300 text-sm">$650</span>
</div>
<p className="text-zinc-500 text-xs mt-1">Embroidered Mesh</p>
</div>
</div>

<div className="group relative product-card" data-category="sherwani">
<div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full h-10 bg-white text-black text-xs font-semibold uppercase tracking-wide rounded flex items-center justify-center gap-2 hover:bg-zinc-200">
                            Quick Add <iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between items-start">
<h3 className="text-white text-sm font-medium">Royal Coat</h3>
<span className="text-zinc-300 text-sm">$900</span>
</div>
<p className="text-zinc-500 text-xs mt-1">Jamawar • Hand Stitched</p>
</div>
</div>

<div className="group relative product-card" data-category="fusion">
<div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full h-10 bg-white text-black text-xs font-semibold uppercase tracking-wide rounded flex items-center justify-center gap-2 hover:bg-zinc-200">
                            Quick Add <iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between items-start">
<h3 className="text-white text-sm font-medium">Eclipse Lehenga</h3>
<span className="text-zinc-300 text-sm">$1,200</span>
</div>
<p className="text-zinc-500 text-xs mt-1">Sequined • Dark Navy</p>
</div>
</div>

<div className="group relative product-card" data-category="kurta">
<div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full h-10 bg-white text-black text-xs font-semibold uppercase tracking-wide rounded flex items-center justify-center gap-2 hover:bg-zinc-200">
                            Quick Add <iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between items-start">
<h3 className="text-white text-sm font-medium">Waistcoat Set</h3>
<span className="text-zinc-300 text-sm">$250</span>
</div>
<p className="text-zinc-500 text-xs mt-1">Linen • Beige</p>
</div>
</div>

<div className="group relative product-card" data-category="sherwani">
<div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full h-10 bg-white text-black text-xs font-semibold uppercase tracking-wide rounded flex items-center justify-center gap-2 hover:bg-zinc-200">
                            Quick Add <iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4">
<div className="flex justify-between items-start">
<h3 className="text-white text-sm font-medium">Prince Coat</h3>
<span className="text-zinc-300 text-sm">$380</span>
</div>
<p className="text-zinc-500 text-xs mt-1">Slim Fit • Maroon</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5 relative overflow-hidden" id="digital">
<div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none">
<iconify-icon className="text-white" icon="lucide:fingerprint" width="300"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">

<div className="flex-1 space-y-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-500" icon="lucide:scan-face" width="32"></iconify-icon>
<h2 className="text-3xl font-medium text-white tracking-tight">Virtual Tailor</h2>
</div>
<p className="text-zinc-400 font-light text-lg">
                    Upload your measurements or scan using our app. Adjust fit, length, and fabric weight in real-time.
                </p>
<div className="space-y-6 p-8 glass-panel rounded-2xl border border-white/10 shadow-2xl">
<div className="flex items-center justify-between pb-4 border-b border-white/10">
<span className="text-white font-medium">Configuration</span>
<span className="text-xs text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Active</span>
</div>
<div className="space-y-4">
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-400">
<span>Kameez Length</span>
<span id="val-1">42 inches</span>
</div>
<input className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer hover:bg-zinc-600 transition-colors" max="50" min="30" oninput="document.getElementById('val-1').innerText = this.value + ' inches'" type="range" value="42"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-400">
<span>Sleeve Taper</span>
<span id="val-2">Regular</span>
</div>
<input className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer hover:bg-zinc-600 transition-colors" max="100" min="0" type="range" value="40"/>
</div>
</div>
<button className="w-full py-3 bg-white text-black text-xs font-bold uppercase tracking-wider rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                        Generate Preview
                    </button>
</div>
</div>

<div className="flex-1 w-full flex justify-center">
<div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent h-[20%] w-full animate-[float_3s_linear_infinite] border-y border-indigo-400/30 backdrop-blur-[1px]"></div>
<div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Measurement Valid</h4>
<p className="text-zinc-500 text-xs">Ready for pattern generation</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="space-y-4">
<a className="text-white text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-4 h-4 bg-zinc-200 rounded-sm rotate-45"></div>
                        ZAB-E-TAN
                    </a>
<p className="text-zinc-500 text-sm max-w-xs">
                        Redefining Eastern couture through the lens of futurism and technology.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Collections</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Sherwani V3.0</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cyber Kurta</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fusion Bridal</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Atelier</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Book Appointment</a></li>
<li><a className="hover:text-white transition-colors" href="#">Virtual Fitting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Newsletter</h4>
<div className="flex gap-2 mb-4">
<input className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-2 rounded-md outline-none focus:border-indigo-500 w-full placeholder:text-zinc-600" placeholder="email@domain.com" type="email"/>
<button className="bg-white text-black px-3 py-2 rounded-md font-medium text-xs hover:bg-zinc-200 transition-colors">
                            Join
                        </button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-zinc-600 text-xs">© 2024 Zab-e-tan Studios. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
