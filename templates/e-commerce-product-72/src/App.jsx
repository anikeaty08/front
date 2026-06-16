import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
primary: '#10b981', // Emerald 500
dark: '#09090b', // Zinc 950
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-zinc-900"></div>
<span className="text-sm font-semibold tracking-tight">STORE</span>
</div>
<div className="flex gap-4">
<span className="iconify text-zinc-500 hover:text-zinc-900 transition-colors" data-icon="lucide:search" data-width="20"></span>
<span className="iconify text-zinc-500 hover:text-zinc-900 transition-colors" data-icon="lucide:shopping-bag" data-width="20"></span>
</div>
</div>
</nav>


<section className="mx-auto max-w-7xl px-6 py-16">
<div className="mb-8 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Essentials Collection</h2>
<p className="mt-2 text-sm text-zinc-500">Structured grid with bordered separation.</p>
</div>
</div>
<div className="grid grid-cols-1 gap-px bg-zinc-200 border border-zinc-200 sm:grid-cols-2 lg:grid-cols-4">

<div className="group relative flex flex-col bg-white p-6 hover:bg-zinc-50/50 transition-colors duration-300">
<div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded bg-zinc-100">
<img alt="Product" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute right-3 top-3 rounded-full bg-white px-2 py-1 text-[10px] font-medium tracking-wide text-zinc-900 shadow-sm">NEW</div>
</div>
<div className="flex flex-1 flex-col text-center">
<h3 className="text-sm font-medium text-zinc-900">Analog Quartz Watch</h3>
<p className="mt-1 text-sm text-zinc-500">$120.00</p>
<button className="mt-5 w-full items-center justify-center rounded border border-zinc-200 bg-white py-2.5 text-xs font-medium uppercase tracking-wide text-zinc-900 transition-all duration-200 hover:border-emerald-600 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 group-hover:border-zinc-300">
                        Add to Cart
                    </button>
</div>
</div>

<div className="group relative flex flex-col bg-white p-6 hover:bg-zinc-50/50 transition-colors duration-300">
<div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded bg-zinc-100">
<img alt="Product" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col text-center">
<h3 className="text-sm font-medium text-zinc-900">Nike Air Redux</h3>
<p className="mt-1 text-sm text-zinc-500">$180.00</p>
<button className="mt-5 w-full items-center justify-center rounded border border-zinc-200 bg-white py-2.5 text-xs font-medium uppercase tracking-wide text-zinc-900 transition-all duration-200 hover:border-emerald-600 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 group-hover:border-zinc-300">
                        Add to Cart
                    </button>
</div>
</div>

<div className="group relative flex flex-col bg-white p-6 hover:bg-zinc-50/50 transition-colors duration-300">
<div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded bg-zinc-100">
<img alt="Product" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col text-center">
<h3 className="text-sm font-medium text-zinc-900">Sonic Noise Cancelling</h3>
<p className="mt-1 text-sm text-zinc-500">$299.00</p>
<button className="mt-5 w-full items-center justify-center rounded border border-zinc-200 bg-white py-2.5 text-xs font-medium uppercase tracking-wide text-zinc-900 transition-all duration-200 hover:border-emerald-600 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 group-hover:border-zinc-300">
                        Add to Cart
                    </button>
</div>
</div>

<div className="group relative flex flex-col bg-white p-6 hover:bg-zinc-50/50 transition-colors duration-300">
<div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded bg-zinc-100">
<img alt="Product" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute right-3 top-3 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-medium tracking-wide text-emerald-800 shadow-sm">-20%</div>
</div>
<div className="flex flex-1 flex-col text-center">
<h3 className="text-sm font-medium text-zinc-900">Mineral Foundation</h3>
<p className="mt-1 text-sm text-zinc-500">$45.00</p>
<button className="mt-5 w-full items-center justify-center rounded border border-zinc-200 bg-white py-2.5 text-xs font-medium uppercase tracking-wide text-zinc-900 transition-all duration-200 hover:border-emerald-600 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 group-hover:border-zinc-300">
                        Add to Cart
                    </button>
</div>
</div>
</div>
</section>


<section className="mx-auto max-w-7xl px-6 py-16 bg-zinc-50/50">
<div className="mb-10 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Featured Drops</h2>
<p className="mt-2 text-sm text-zinc-500">Minimalist cards with soft focus.</p>
</div>
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="group flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-zinc-200/50">
<div className="relative mb-5 aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
<img alt="Product" className="h-full w-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col items-start px-2">
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Leather Crossbody</h3>
<p className="mt-1 text-sm font-medium text-emerald-600">$145.00</p>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-emerald-600">
<span className="iconify" data-icon="lucide:shopping-cart" data-width="16"></span>
                        Add to Cart
                    </button>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-zinc-200/50">
<div className="relative mb-5 aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
<img alt="Product" className="h-full w-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col items-start px-2">
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Canvas Tote</h3>
<p className="mt-1 text-sm font-medium text-emerald-600">$85.00</p>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-emerald-600">
<span className="iconify" data-icon="lucide:shopping-cart" data-width="16"></span>
                        Add to Cart
                    </button>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-zinc-200/50">
<div className="relative mb-5 aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
<img alt="Product" className="h-full w-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col items-start px-2">
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Retro Sneakers</h3>
<p className="mt-1 text-sm font-medium text-emerald-600">$110.00</p>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-emerald-600">
<span className="iconify" data-icon="lucide:shopping-cart" data-width="16"></span>
                        Add to Cart
                    </button>
</div>
</div>
</div>
</section>


<section className="mx-auto max-w-7xl px-6 py-16">
<div className="mb-12 border-b border-zinc-100 pb-4">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">New Arrivals</h2>
</div>
<div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

<div className="group flex flex-col">
<div className="relative mb-4 overflow-hidden bg-zinc-100">

<div className="aspect-[3/4] w-full">
<img alt="Product" className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-80" src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-zinc-900">Training Hoodie</h3>
</div>
<p className="mt-1 mb-4 text-sm text-zinc-500">$95.00</p>
<button className="group/btn flex w-full items-center justify-between border-b border-zinc-200 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-emerald-600 hover:text-emerald-600">
<span>Add to Cart</span>
<span className="iconify opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="group flex flex-col">
<div className="relative mb-4 overflow-hidden bg-zinc-100">
<div className="aspect-[3/4] w-full">
<img alt="Product" className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-80" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-medium text-zinc-900">Wool Blend Coat</h3>
<p className="mt-1 mb-4 text-sm text-zinc-500">$250.00</p>
<button className="group/btn flex w-full items-center justify-between border-b border-zinc-200 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-emerald-600 hover:text-emerald-600">
<span>Add to Cart</span>
<span className="iconify opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="group flex flex-col">
<div className="relative mb-4 overflow-hidden bg-zinc-100">
<div className="aspect-[3/4] w-full">
<img alt="Product" className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-80" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-medium text-zinc-900">Oxford Leather Shoe</h3>
<p className="mt-1 mb-4 text-sm text-zinc-500">$180.00</p>
<button className="group/btn flex w-full items-center justify-between border-b border-zinc-200 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-emerald-600 hover:text-emerald-600">
<span>Add to Cart</span>
<span className="iconify opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="group flex flex-col">
<div className="relative mb-4 overflow-hidden bg-zinc-100">
<div className="aspect-[3/4] w-full">
<img alt="Product" className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-medium text-zinc-900">Ceramic Vase Set</h3>
<p className="mt-1 mb-4 text-sm text-zinc-500">$65.00</p>
<button className="group/btn flex w-full items-center justify-between border-b border-zinc-200 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-emerald-600 hover:text-emerald-600">
<span>Add to Cart</span>
<span className="iconify opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</section>

    </>
  );
}
