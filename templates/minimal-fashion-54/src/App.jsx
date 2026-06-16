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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
concrete: '#F2F2F2',
charcoal: '#1A1A1A',
}
}
}
}



        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            const backdrop = document.getElementById('cart-backdrop');
            
            if (drawer.classList.contains('translate-x-full')) {
                drawer.classList.remove('translate-x-full');
                backdrop.classList.remove('hidden');
                setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
                document.body.style.overflow = 'hidden';
            } else {
                drawer.classList.add('translate-x-full');
                backdrop.classList.add('opacity-0');
                setTimeout(() => backdrop.classList.add('hidden'), 300);
                document.body.style.overflow = '';
            }
        }

        function toggleSearch() {
            const overlay = document.getElementById('search-overlay');
            const input = overlay.querySelector('input');
            
            if (overlay.classList.contains('hidden')) {
                overlay.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                    input.focus();
                }, 10);
                document.body.style.overflow = 'hidden';
            } else {
                overlay.classList.add('opacity-0');
                setTimeout(() => {
                    overlay.classList.add('hidden');
                }, 300);
                document.body.style.overflow = '';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 md:px-8 mix-blend-difference text-white md:mix-blend-normal md:text-charcoal bg-transparent md:bg-concrete/90 md:backdrop-blur-sm transition-all duration-300">
<div className="flex items-center gap-6">
<a className="text-xl tracking-tighter uppercase font-medium" href="#">SPLY</a>
<nav className="hidden md:flex gap-4 text-xs font-mono tracking-tight text-gray-500 uppercase">
<a className="hover:text-black transition-colors" href="#">Apparel</a>
<a className="hover:text-black transition-colors" href="#">Footwear</a>
<a className="hover:text-black transition-colors" href="#">Archive</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hover:opacity-50 transition-opacity" onclick="toggleSearch()">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative hover:opacity-50 transition-opacity group" onclick="toggleCart()">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
</span>
</button>
</div>
</header>

<div className="fixed inset-0 bg-white z-40 hidden flex-col pt-24 px-4 opacity-0 transition-opacity duration-300" id="search-overlay">
<div className="max-w-4xl mx-auto w-full">
<input className="w-full text-4xl md:text-6xl tracking-tighter font-medium uppercase border-b border-gray-200 py-4 focus:outline-none focus:border-black bg-transparent placeholder-gray-300" placeholder="SEARCH SPLY..." type="text"/>
</div>
<button className="absolute top-4 right-4 p-2" onclick="toggleSearch()">
<iconify-icon icon="solar:close-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<main className="flex-grow pt-20 pb-12 px-2 md:px-4">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-2 gap-4">
<h1 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Season 4 / Wet Tank</h1>
<div className="flex items-center gap-6 text-xs font-mono uppercase">
<div className="flex items-center gap-2">
<span>View</span>
<button className="w-4 h-4 bg-black"></button>
<button className="w-4 h-4 border border-gray-300"></button>
</div>
<div className="flex items-center gap-2">
<span>Sort</span>
<iconify-icon icon="solar:sort-vertical-linear" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2">

<div className="group relative bg-white aspect-[3/4] flex flex-col justify-between p-4 cursor-pointer hover:shadow-xl transition-all duration-500 ease-out overflow-hidden">
<div className="absolute inset-0 bg-gray-100 flex items-center justify-center">

<img alt="Item" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="bg-black text-white text-[10px] uppercase px-1.5 py-0.5 font-mono">New</span>
<button className="bg-white/80 backdrop-blur rounded-full p-1.5 hover:bg-black hover:text-white transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="relative z-10 mt-auto">
<div className="bg-white/90 backdrop-blur-md p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-gray-100">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xs font-medium uppercase tracking-tight">Box Tee</h3>
<span className="text-xs font-mono text-gray-500">$20</span>
</div>

<div className="flex gap-1 pt-2 border-t border-gray-100">
<label className="cursor-pointer group/size">
<input className="peer sr-only" name="size1" type="radio"/>
<div className="w-6 h-6 flex items-center justify-center text-[10px] border border-gray-200 text-gray-400 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">1</div>
</label>
<label className="cursor-pointer group/size">
<input className="peer sr-only" name="size1" type="radio"/>
<div className="w-6 h-6 flex items-center justify-center text-[10px] border border-gray-200 text-gray-400 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">2</div>
</label>
<label className="cursor-pointer group/size">
<input className="peer sr-only" name="size1" type="radio"/>
<div className="w-6 h-6 flex items-center justify-center text-[10px] border border-gray-200 text-gray-400 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">3</div>
</label>
</div>
</div>
</div>
</div>

<div className="group relative bg-white aspect-[3/4] flex flex-col justify-between p-4 cursor-pointer hover:shadow-xl transition-all duration-500 ease-out overflow-hidden">
<div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
<img alt="Item" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 flex justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white/80 backdrop-blur rounded-full p-1.5 hover:bg-black hover:text-white transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="relative z-10 mt-auto">
<div className="bg-white/90 backdrop-blur-md p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-gray-100">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xs font-medium uppercase tracking-tight">Wet Tank</h3>
<span className="text-xs font-mono text-gray-500">$20</span>
</div>
<button className="w-full bg-black text-white text-[10px] uppercase py-2 hover:bg-gray-800 transition-colors">Add to Cart</button>
</div>
</div>
</div>

<div className="group relative bg-white aspect-[3/4] flex flex-col justify-between p-4 cursor-pointer hover:shadow-xl transition-all duration-500 ease-out overflow-hidden">
<div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
<img alt="Item" className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 flex justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white/80 backdrop-blur rounded-full p-1.5 hover:bg-black hover:text-white transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="relative z-10 mt-auto">
<div className="bg-white/90 backdrop-blur-md p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-gray-100">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xs font-medium uppercase tracking-tight">Vultures Pant</h3>
<span className="text-xs font-mono text-gray-500">$40</span>
</div>
<div className="flex gap-1 pt-2 border-t border-gray-100">
<label className="cursor-pointer group/size">
<input className="peer sr-only" name="size3" type="radio"/>
<div className="w-6 h-6 flex items-center justify-center text-[10px] border border-gray-200 text-gray-400 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">S</div>
</label>
<label className="cursor-pointer group/size">
<input className="peer sr-only" name="size3" type="radio"/>
<div className="w-6 h-6 flex items-center justify-center text-[10px] border border-gray-200 text-gray-400 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">M</div>
</label>
<label className="cursor-pointer group/size">
<input className="peer sr-only" name="size3" type="radio"/>
<div className="w-6 h-6 flex items-center justify-center text-[10px] border border-gray-200 text-gray-400 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">L</div>
</label>
</div>
</div>
</div>
</div>

<div className="group relative bg-white aspect-[3/4] flex flex-col justify-between p-4 cursor-pointer hover:shadow-xl transition-all duration-500 ease-out overflow-hidden">
<div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
<img alt="Item" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="bg-charcoal text-white text-[10px] uppercase px-1.5 py-0.5 font-mono">Sold Out</span>
</div>
<div className="relative z-10 mt-auto opacity-50">
<div className="bg-white/90 backdrop-blur-md p-3 border border-gray-100">
<div className="flex justify-between items-baseline">
<h3 className="text-xs font-medium uppercase tracking-tight">Pods</h3>
<span className="text-xs font-mono text-gray-500">$20</span>
</div>
</div>
</div>
</div>

<div className="bg-[#111] aspect-[3/4] flex flex-col justify-center items-center p-8 text-white text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-600"></div>
<h3 className="text-2xl tracking-tighter uppercase font-medium mb-4">Subscribe</h3>
<p className="text-xs font-mono text-gray-400 mb-6 max-w-[200px]">Join the list for early access to future drops.</p>
<form className="w-full max-w-[200px] flex flex-col gap-2">
<input className="bg-transparent border-b border-gray-700 text-xs py-2 focus:outline-none focus:border-white text-center placeholder-gray-600 font-mono" placeholder="EMAIL" type="email"/>
<button className="mt-4 bg-white text-black text-[10px] uppercase py-2 hover:bg-gray-200 transition-colors tracking-wide" type="submit">Enter</button>
</form>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-xs font-mono uppercase tracking-widest hover:underline decoration-1 underline-offset-4 animate-pulse-slow">Load More</button>
</div>
</main>

<div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-50 transform translate-x-full transition-transform duration-500 shadow-2xl flex flex-col border-l border-gray-100" id="cart-drawer">
<div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
<h2 className="text-sm font-medium uppercase tracking-tight">Cart (1)</h2>
<button className="hover:rotate-90 transition-transform duration-300" onclick="toggleCart()">
<iconify-icon icon="solar:close-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex-grow p-6 overflow-y-auto no-scrollbar">

<div className="flex gap-4 mb-6">
<div className="w-20 h-24 bg-gray-100 flex-shrink-0 relative">
<img alt="Item" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-grow flex flex-col justify-between py-1">
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium uppercase tracking-tight">Wet Tank</h3>
<span className="text-sm font-mono text-gray-500">$20</span>
</div>
<p className="text-xs text-gray-400 font-mono mt-1">SIZE: 2</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center border border-gray-200">
<button className="px-2 py-0.5 text-xs hover:bg-gray-50">-</button>
<span className="px-2 text-xs font-mono">1</span>
<button className="px-2 py-0.5 text-xs hover:bg-gray-50">+</button>
</div>
<button className="text-[10px] uppercase border-b border-transparent hover:border-black transition-colors">Remove</button>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-gray-100 bg-gray-50/50">
<div className="flex justify-between items-center mb-4 text-sm">
<span className="uppercase tracking-tight">Subtotal</span>
<span className="font-mono">$20.00</span>
</div>
<p className="text-[10px] text-gray-400 mb-4 text-center">Shipping &amp; taxes calculated at checkout</p>
<button className="w-full bg-black text-white py-3 uppercase text-xs tracking-wider hover:bg-gray-900 transition-colors flex justify-between px-4 items-center">
<span>Checkout</span>
<iconify-icon className="text-white" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 hidden transition-opacity duration-300" id="cart-backdrop" onclick="toggleCart()"></div>

<footer className="mt-auto border-t border-gray-200 px-4 md:px-8 py-12 bg-white">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-2">
<h4 className="text-xs font-mono text-gray-400 uppercase mb-2">Help</h4>
<a className="text-xs uppercase hover:text-gray-500 transition-colors" href="#">Shipping</a>
<a className="text-xs uppercase hover:text-gray-500 transition-colors" href="#">Returns</a>
<a className="text-xs uppercase hover:text-gray-500 transition-colors" href="#">Sizing</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-xs font-mono text-gray-400 uppercase mb-2">Legal</h4>
<a className="text-xs uppercase hover:text-gray-500 transition-colors" href="#">Terms</a>
<a className="text-xs uppercase hover:text-gray-500 transition-colors" href="#">Privacy</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-xs font-mono text-gray-400 uppercase mb-2">Social</h4>
<a className="text-xs uppercase hover:text-gray-500 transition-colors" href="#">Instagram</a>
<a className="text-xs uppercase hover:text-gray-500 transition-colors" href="#">Twitter</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-mono text-gray-400 uppercase">Newsletter</h4>
<div className="relative">
<input className="w-full border-b border-gray-300 pb-2 text-xs uppercase focus:outline-none focus:border-black bg-transparent" placeholder="ENTER EMAIL" type="email"/>
<button className="absolute right-0 bottom-2 text-xs uppercase font-medium">Join</button>
</div>
</div>
</div>
<div className="mt-16 flex justify-between items-end">
<span className="text-[100px] leading-[0.8] font-medium tracking-tighter opacity-5 select-none pointer-events-none">YZY</span>
<span className="text-[10px] text-gray-400 font-mono">© 2024 SPLY INC</span>
</div>
</footer>


    </>
  );
}
