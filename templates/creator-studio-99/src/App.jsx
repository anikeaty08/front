import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- State Management ---
        const state = {
            baseCost: 12.00,
            sellingPrice: 35.00,
            image: null
        };

        // --- Elements ---
        const fileInput = document.getElementById('imageUpload');
        const designPreview = document.getElementById('designPreview');
        const emptyState = document.getElementById('emptyState');
        const priceInput = document.getElementById('priceInput');
        const priceRange = document.getElementById('priceRange');
        const profitDisplay = document.getElementById('profitDisplay');
        const shirtPath = document.getElementById('shirtPath');

        // --- Image Upload Logic ---
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    designPreview.src = e.target.result;
                    designPreview.classList.remove('opacity-0');
                    emptyState.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        });

        // --- Pricing Logic ---
        function updateProfit() {
            const profit = (state.sellingPrice - state.baseCost).toFixed(2);
            profitDisplay.textContent = `$${profit}`;
            
            // Visual feedback on profit
            if (profit < 0) {
                profitDisplay.classList.remove('text-emerald-400');
                profitDisplay.classList.add('text-red-400');
            } else {
                profitDisplay.classList.remove('text-red-400');
                profitDisplay.classList.add('text-emerald-400');
            }
        }

        priceInput.addEventListener('input', (e) => {
            state.sellingPrice = parseFloat(e.target.value) || 0;
            priceRange.value = state.sellingPrice;
            updateProfit();
        });

        priceRange.addEventListener('input', (e) => {
            state.sellingPrice = parseFloat(e.target.value);
            priceInput.value = state.sellingPrice.toFixed(2);
            updateProfit();
        });

        // --- Color Switching Logic ---
        function changeColor(color) {
            const shirt = document.getElementById('shirtPath');
            const preview = document.getElementById('designPreview');
            
            // Reset border on all color buttons (simple DOM traversal for demo)
            // Ideally manage active state via classes, but this works for single block
            
            if (color === 'black') {
                shirt.style.color = '#18181b'; // zinc-900
                preview.style.mixBlendMode = 'normal';
            } else if (color === 'white') {
                shirt.style.color = '#f4f4f5'; // zinc-100
                preview.style.mixBlendMode = 'multiply'; // Blend ink into fabric
            } else if (color === 'navy') {
                shirt.style.color = '#0f172a'; // slate-900
                preview.style.mixBlendMode = 'normal';
            } else if (color === 'olive') {
                shirt.style.color = '#292524'; // stone-800
                preview.style.mixBlendMode = 'normal';
            }
        }

        // Initialize
        updateProfit();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-lg font-medium tracking-tight" href="#">MERCHLESS</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-zinc-100" href="#">Studio</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Products</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Analytics</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-white px-3 py-1.5 rounded-full border border-zinc-800 transition-all">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    System Operational
                </button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-900 border border-zinc-700"></div>
</div>
</div>
</nav>

<main className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 space-y-6">

<div>
<h1 className="text-white text-xl font-medium tracking-tight mb-1">Create Product</h1>
<p className="text-sm text-zinc-500">Design, price, and publish instantly.</p>
</div>

<div className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-1">
<div className="grid grid-cols-3 gap-1">
<button className="bg-zinc-800 text-white text-xs font-medium py-2 rounded-lg shadow-sm border border-zinc-700 text-center">T-Shirt</button>
<button className="hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300 text-xs font-medium py-2 rounded-lg text-center transition-colors">Hoodie</button>
<button className="hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300 text-xs font-medium py-2 rounded-lg text-center transition-colors">Cap</button>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Design Asset</label>
<div className="group relative border border-dashed border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/30 rounded-xl transition-all h-32 flex flex-col items-center justify-center cursor-pointer">
<input accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="imageUpload" type="file"/>
<iconify-icon className="text-zinc-500 text-2xl mb-2 group-hover:text-white transition-colors" icon="solar:upload-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">Drop image or click to upload</span>
<span className="text-[10px] text-zinc-600 mt-1">PNG, JPG up to 10MB</span>
</div>
</div>

<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-300">Product Title</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent placeholder-zinc-700 transition-all" type="text" value="Premium Heavyweight Tee"/>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-300">Base Color</label>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-white ring-2 ring-zinc-800 focus:outline-none" onclick="changeColor('black')"></button>
<button className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-300 focus:outline-none hover:scale-105 transition-transform" onclick="changeColor('white')"></button>
<button className="w-8 h-8 rounded-full bg-slate-900 border border-zinc-700 focus:outline-none hover:scale-105 transition-transform" onclick="changeColor('navy')"></button>
<button className="w-8 h-8 rounded-full bg-stone-800 border border-zinc-700 focus:outline-none hover:scale-105 transition-transform" onclick="changeColor('olive')"></button>
</div>
</div>
</div>
<hr className="border-zinc-900"/>

<div className="space-y-4">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Pricing Logic</label>
<span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Global Shipping Included</span>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4 space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500">Base Cost</span>
<span className="text-zinc-300 font-medium">$12.00</span>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-200">Selling Price</span>
<div className="flex items-center">
<span className="text-zinc-500 mr-1">$</span>
<input className="w-16 bg-transparent text-right text-white font-medium focus:outline-none border-b border-zinc-700 focus:border-white transition-colors" id="priceInput" step="1" type="number" value="35.00"/>
</div>
</div>
<input className="w-full" id="priceRange" max="100" min="15" type="range" value="35"/>
</div>
<div className="pt-3 border-t border-zinc-800 flex justify-between items-center">
<span className="text-zinc-400 text-sm">Your Profit</span>
<span className="text-emerald-400 text-lg font-medium tracking-tight" id="profitDisplay">$23.00</span>
</div>
</div>
</div>

<div className="pt-2">
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-lg" icon="solar:shop-linear"></iconify-icon>
                    Publish Product
                </button>
</div>
</div>

<div className="lg:col-span-8 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-8 flex flex-col relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded border border-zinc-800 bg-zinc-950/50 text-[10px] text-zinc-400 uppercase tracking-wider">Live Preview</span>
<span className="px-2 py-1 rounded border border-zinc-800 bg-zinc-950/50 text-[10px] text-zinc-400 uppercase tracking-wider">Front View</span>
</div>
<div className="flex gap-2">
<button className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg hover:bg-zinc-900 text-white transition-colors">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 flex items-center justify-center relative">

<div className="relative w-[380px] h-[480px] transition-colors duration-500 ease-in-out" id="tshirt">

<svg className="w-full h-full drop-shadow-2xl" fill="currentColor" id="tshirtSvg" viewbox="0 0 512 512">
<path className="text-zinc-900 transition-colors duration-300" d="M378.5,64.5c-15.8,18.1-39.2,29.7-65.4,29.7c-26.2,0-49.6-11.6-65.4-29.7H133.4l-30.8,96.3l48,15.4L136,368.6h240l-14.6-192.3l48-15.4l-30.8-96.3H378.5z" stroke="#27272a" strokeWidth="2"></path>

<path className="text-zinc-900 transition-colors duration-300" d="M127 64 L30 140 L70 170 L140 140 L140 460 L372 460 L372 140 L442 170 L482 140 L385 64" fill="currentColor" id="shirtPath"></path>

<path d="M190 64 Q256 110 322 64" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
</svg>

<div className="absolute top-[20%] left-[27%] w-[46%] h-[55%] overflow-hidden flex items-center justify-center pointer-events-none border border-dashed border-white/10 rounded-sm">

<img className="max-w-full max-h-full object-contain opacity-0 transition-opacity duration-300 mix-blend-normal" id="designPreview" src=""/>
<div className="text-zinc-700 text-xs text-center" id="emptyState">
                            Print Area
                        </div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10 pointer-events-none mix-blend-overlay"></div>
</div>
</div>

<div className="relative z-10 flex justify-between items-end border-t border-zinc-800 pt-6 mt-6">
<div>
<h3 className="text-white text-sm font-medium">Free Fulfillment</h3>
<p className="text-xs text-zinc-500 mt-1 max-w-md">We handle printing, packing, and global shipping. You keep the margin. Zero inventory risk.</p>
</div>
<div className="flex items-center gap-1 text-xs text-zinc-500">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon>
<span>Secure Checkout</span>
</div>
</div>
</div>
</main>


    </>
  );
}
