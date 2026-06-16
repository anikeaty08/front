import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      
<header className="sticky top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="font-medium tracking-tighter text-base text-zinc-900" href="#">ASAD'S</a>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Menu</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Catering</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Locations</a>
</nav>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors group">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">0</span>
</button>
</div>
</div>
</header>
<main className="flex-grow">
<section className="pt-24 pb-16 px-6 sm:pt-32 sm:pb-24 max-w-5xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-xs font-medium text-zinc-600 mb-8 border border-zinc-200/60 shadow-sm">
<iconify-icon className="text-sm text-zinc-400" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
                Now delivering citywide
            </div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 max-w-3xl leading-[1.1]">
                The perfect slice,<br className="hidden sm:block"/> refined.
            </h1>
<p className="mt-6 text-base sm:text-lg text-zinc-500 max-w-xl mx-auto font-normal leading-relaxed">
                Naturally leavened dough, crushed San Marzano tomatoes, and hand-pulled mozzarella. Experience artisanal pizza crafted with precision.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
<button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm flex items-center justify-center gap-2">
                    Order Delivery
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-zinc-900 border border-zinc-200/80 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
                    View Menu
                </button>
</div>
</section>
<section className="py-20 bg-white border-y border-zinc-100">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Signature Pies</h2>
<p className="text-zinc-500 mt-1.5 text-sm">Fired at 900°F for the perfect blistered crust.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
<div className="group flex flex-col">
<div className="aspect-square rounded-2xl bg-zinc-50 border border-zinc-200/40 overflow-hidden relative mb-4">
<img alt="Margherita" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-start justify-between gap-4 mb-3">
<div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Classic Margherita</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">San Marzano DOP, fresh fior di latte, basil, organic extra virgin olive oil.</p>
</div>
<span className="text-sm font-medium text-zinc-900 shrink-0">$18</span>
</div>
<button className="mt-auto w-full py-2 rounded-xl bg-white text-zinc-900 border border-zinc-200/80 text-xs font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-1.5 shadow-sm">
<iconify-icon className="text-base" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Add to Cart
                        </button>
</div>
<div className="group flex flex-col">
<div className="aspect-square rounded-2xl bg-zinc-50 border border-zinc-200/40 overflow-hidden relative mb-4">
<img alt="Pepperoni" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-start justify-between gap-4 mb-3">
<div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Double Pepperoni</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">Tomato base, aged mozzarella, crispy cup pepperoni, hot honey drizzle.</p>
</div>
<span className="text-sm font-medium text-zinc-900 shrink-0">$22</span>
</div>
<button className="mt-auto w-full py-2 rounded-xl bg-white text-zinc-900 border border-zinc-200/80 text-xs font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-1.5 shadow-sm">
<iconify-icon className="text-base" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Add to Cart
                        </button>
</div>
<div className="group flex flex-col">
<div className="aspect-square rounded-2xl bg-zinc-50 border border-zinc-200/40 overflow-hidden relative mb-4">
<img alt="Mushroom" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-start justify-between gap-4 mb-3">
<div>
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Truffle Fungi</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">Roasted garlic cream, wild mushrooms, thyme, truffle oil, aged pecorino.</p>
</div>
<span className="text-sm font-medium text-zinc-900 shrink-0">$24</span>
</div>
<button className="mt-auto w-full py-2 rounded-xl bg-white text-zinc-900 border border-zinc-200/80 text-xs font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-1.5 shadow-sm">
<iconify-icon className="text-base" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
</div>
</section>
<section className="py-20">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
<div className="flex flex-col gap-3">
<div className="w-8 h-8 rounded-lg bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center text-zinc-700">
<iconify-icon className="text-lg" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-zinc-900">Wood-Fired Precision</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Baked in imported Italian brick ovens to achieve the perfect balance of char and chew.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-8 h-8 rounded-lg bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center text-zinc-700">
<iconify-icon className="text-lg" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-zinc-900">Sourced Locally</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Partnering with regional farms for the highest quality seasonal ingredients and organic flour.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-8 h-8 rounded-lg bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center text-zinc-700">
<iconify-icon className="text-lg" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-zinc-900">Engineered Delivery</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Optimized routing and custom ventilated packaging ensures your pie arrives exactly as intended.</p>
</div>
</div>
</div>
</section>
</main>
<footer className="mt-auto border-t border-zinc-200/50 bg-[#FAFAFA] py-10">
<div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tighter text-sm text-zinc-900">ASAD'S</span>
</div>
<div className="flex gap-6">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Instagram</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Twitter</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Support</a>
</div>
<p className="text-xs text-zinc-400">© 2024 Asad's Pizza. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
