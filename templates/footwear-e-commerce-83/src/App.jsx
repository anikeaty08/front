import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fff1f2',
100: '#ffe4e6',
500: '#f43f5e',
600: '#e11d48',
900: '#881337',
}
}
}
}
}



        // Database of products
        const products = [
            // Women's Shoes
            { id: 1, name: "Azure Heels", category: "women", price: 85, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop", type: "Formal" },
            { id: 2, name: "Beige Comfort", category: "women", price: 65, image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop", type: "Casual" },
            { id: 3, name: "Summer Sandals", category: "women", price: 45, image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf6e?q=80&w=2070&auto=format&fit=crop", type: "Beach" },
            { id: 4, name: "Classic Stiletto", category: "women", price: 110, image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=2070&auto=format&fit=crop", type: "Formal" },
            { id: 5, name: "Urban Runner W", category: "women", price: 95, image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop", type: "Sport" },
            { id: 6, name: "Velvet Loafer", category: "women", price: 75, image: "https://images.unsplash.com/photo-1581101767229-13673c09b307?q=80&w=2070&auto=format&fit=crop", type: "Casual" },
            { id: 7, name: "White Sneaker", category: "women", price: 80, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1996&auto=format&fit=crop", type: "Street" },
            { id: 8, name: "Ankle Boot", category: "women", price: 130, image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?q=80&w=2013&auto=format&fit=crop", type: "Winter" },
            
            // Men's Shoes
            { id: 9, name: "Nike Air Green", category: "men", price: 120, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop", type: "Sport" },
            { id: 10, name: "Classic Leather", category: "men", price: 160, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop", type: "Formal" },
            { id: 11, name: "Brown Oxford", category: "men", price: 155, image: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=1974&auto=format&fit=crop", type: "Formal" },
            { id: 12, name: "Street Low", category: "men", price: 90, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop", type: "Casual" },
            { id: 13, name: "Desert Boot", category: "men", price: 140, image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2030&auto=format&fit=crop", type: "Casual" },
            { id: 14, name: "Running Pro", category: "men", price: 115, image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop", type: "Sport" },
            { id: 15, name: "Suede Slip-on", category: "men", price: 85, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=2025&auto=format&fit=crop", type: "Summer" },
            { id: 16, name: "High Top Black", category: "men", price: 105, image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop", type: "Street" },

            // Kids Shoes
            { id: 17, name: "Kids Runner", category: "kids", price: 55, image: "https://images.unsplash.com/photo-1514989940723-e8875ea15f57?q=80&w=2070&auto=format&fit=crop", type: "Sport" },
            { id: 18, name: "Tiny Boots", category: "kids", price: 60, image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2070&auto=format&fit=crop", type: "Winter" },
            { id: 19, name: "School Shoe", category: "kids", price: 45, image: "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?q=80&w=2070&auto=format&fit=crop", type: "Formal" },
            { id: 20, name: "Velcro Sport", category: "kids", price: 50, image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2015&auto=format&fit=crop", type: "Casual" },
            { id: 21, name: "Pink Sparkle", category: "kids", price: 40, image: "https://images.unsplash.com/photo-1560506840-a51081e30d91?q=80&w=1974&auto=format&fit=crop", type: "Party" },
            { id: 22, name: "Toddler Blue", category: "kids", price: 35, image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2079&auto=format&fit=crop", type: "Casual" },
            { id: 23, name: "Canvas High", category: "kids", price: 42, image: "https://images.unsplash.com/photo-1574577465551-36526cb0f3dc?q=80&w=1974&auto=format&fit=crop", type: "Street" },
            { id: 24, name: "Rain Boot", category: "kids", price: 38, image: "https://images.unsplash.com/photo-1509198399403-b84950dd0238?q=80&w=1974&auto=format&fit=crop", type: "Winter" }
        ];

        function renderProducts(category) {
            const grid = document.getElementById('product-grid');
            const title = document.getElementById('collection-title');
            grid.innerHTML = '';
            
            // Filter Data
            let filtered = category === 'all' ? products : products.filter(p => p.category === category);
            
            // Update Title
            const titles = {
                'all': 'All Collections',
                'women': "Women's Collection",
                'men': "Men's Collection",
                'kids': "Children's Collection"
            };
            title.innerText = titles[category] || 'Collection';

            // Render
            filtered.forEach(product => {
                const card = document.createElement('div');
                card.className = 'group relative cursor-pointer fade-in';
                card.innerHTML = `
                    <div class="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100 relative">
                        <img src="${product.image}" class="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="bg-white p-2 rounded-full shadow-sm hover:text-brand-600 transition-colors">
                                <iconify-icon icon="solar:heart-linear" width="18" stroke-width="1.5"></iconify-icon>
                            </button>
                        </div>
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm font-medium text-gray-900">${product.name}</h3>
                            <p class="mt-1 text-xs text-gray-500">${product.type}</p>
                        </div>
                        <p class="text-sm font-medium text-gray-900">$${product.price}</p>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function filterCategory(category) {
            // Update UI buttons
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                if(btn.id === `btn-${category}`) {
                    btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
                    btn.classList.add('bg-black', 'text-white', 'border-transparent');
                } else {
                    btn.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
                    btn.classList.remove('bg-black', 'text-white', 'border-transparent');
                }
            });

            renderProducts(category);
        }

        // Initial Load
        renderProducts('all');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 border-b border-gray-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="filterCategory('all')">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-sm tracking-tighter">Z</span>
</div>
<span className="font-semibold text-lg tracking-tight uppercase text-black">Zidiiq</span>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#home" onclick="filterCategory('all')">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#shop" onclick="filterCategory('women')">Women</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#shop" onclick="filterCategory('men')">Men</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#shop" onclick="filterCategory('kids')">Kids</a>
<a className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors" href="#admin">Admin View</a>
</div>

<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-black transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-black transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-brand-500 border border-white"></span>
</button>
<button className="md:hidden text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-6">
<span className="text-xs font-medium text-gray-600 tracking-wide uppercase">Based in Hargeisa</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.1] mb-6">
                        Walk with <br/>
<span className="text-gray-400">Confidence.</span>
</h1>
<p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                        Discover the finest collection of footwear for men, women, and children. Quality soles for the streets of Somaliland.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer" href="#shop" onclick="filterCategory('all')">
                            Shop Collection
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="px-8 py-3 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors" onclick="filterCategory('women')">
                            View New Arrivals
                        </button>
</div>
</div>
<div className="relative lg:h-[600px] w-full bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
<img alt="Nike Shoe" className="object-cover w-full h-full mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=2012&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-lg border border-white/50 shadow-sm">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Best Seller</p>
<p className="text-sm font-semibold text-gray-900">Air Jordan High</p>
<p className="text-xs font-medium text-brand-600 mt-1">$145.00</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100" id="shop">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900" id="collection-title">All Collections</h2>
<p className="text-sm text-gray-500 mt-2">Curated footwear for the season.</p>
</div>

<div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="filter-btn px-4 py-2 rounded-full bg-black text-white text-xs font-medium whitespace-nowrap transition-colors" id="btn-all" onclick="filterCategory('all')">All Items</button>
<button className="filter-btn px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-xs font-medium hover:border-gray-300 bg-white whitespace-nowrap transition-colors" id="btn-women" onclick="filterCategory('women')">Women</button>
<button className="filter-btn px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-xs font-medium hover:border-gray-300 bg-white whitespace-nowrap transition-colors" id="btn-men" onclick="filterCategory('men')">Men</button>
<button className="filter-btn px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-xs font-medium hover:border-gray-300 bg-white whitespace-nowrap transition-colors" id="btn-kids" onclick="filterCategory('kids')">Children</button>
<div className="h-6 w-px bg-gray-200 mx-2"></div>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-xs font-medium hover:border-gray-300 bg-white">
<iconify-icon icon="solar:tuning-2-linear" strokeWidth="1.5" width="14"></iconify-icon>
                        Filters
                    </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 min-h-[400px]" id="product-grid">

</div>
<div className="mt-12 flex justify-center">
<button className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-400 transition-colors">Load More Products</button>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
<div className="grid lg:grid-cols-2">
<div className="bg-gray-100 p-8 flex items-center justify-center">
<img className="w-full max-w-md mix-blend-multiply rounded-lg shadow-xl rotate-[-12deg] hover:rotate-0 transition-transform duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 lg:p-12">
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Nike Air Max 270</h2>
<p className="text-lg font-medium text-brand-600 mt-2">$150.00</p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed">
                                Experience comfort with every step. The Nike Air Max 270 React brings you a futuristic look with a light, breathable feel. Perfect for the streets of Hargeisa.
                            </p>

<div>
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Select Size (EU)</label>
<div className="grid grid-cols-5 gap-2 mt-3">
<button className="py-2 rounded-md border border-gray-200 text-sm text-gray-600 hover:border-black hover:text-black transition-colors">38</button>
<button className="py-2 rounded-md border border-gray-200 text-sm text-gray-600 hover:border-black hover:text-black transition-colors">39</button>
<button className="py-2 rounded-md bg-black text-white text-sm font-medium">40</button>
<button className="py-2 rounded-md border border-gray-200 text-sm text-gray-600 hover:border-black hover:text-black transition-colors">41</button>
<button className="py-2 rounded-md border border-gray-200 text-sm text-gray-300 cursor-not-allowed">42</button>
</div>
</div>

<div className="flex gap-4 pt-4 border-t border-gray-100">
<div className="w-32 flex items-center border border-gray-200 rounded-lg">
<button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-l-lg">-</button>
<input className="w-full h-10 text-center text-sm font-medium focus:outline-none text-gray-900" type="number" value="1"/>
<button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-r-lg">+</button>
</div>
<button className="flex-1 bg-black text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                    Add to Cart
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 bg-gray-100" id="admin">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
<iconify-icon icon="solar:shield-user-linear" width="20"></iconify-icon>
                        Store Admin Panel
                    </h2>
<p className="text-sm text-gray-500">Secure owner interface demonstration</p>
</div>
<div className="flex gap-2">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        System Active
                     </span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[600px]">

<div className="hidden lg:flex lg:col-span-1 flex-col bg-white rounded-xl shadow-sm border border-gray-200 p-4">
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50 text-black text-sm font-medium" href="#">
<iconify-icon icon="solar:chart-2-linear" width="18"></iconify-icon>
                            Dashboard
                        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-black text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
                            Products
                        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-black text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:bag-check-linear" width="18"></iconify-icon>
                            Orders <span className="ml-auto bg-brand-100 text-brand-900 text-[10px] px-1.5 py-0.5 rounded-md font-bold">3</span>
</a>
</div>
</div>

<div className="lg:col-span-4 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
<div className="h-16 border-b border-gray-100 px-6 flex items-center justify-between">
<h3 className="font-medium text-gray-900">Product Management</h3>
<button className="bg-black text-white px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 hover:bg-gray-800">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                            Add New Product
                        </button>
</div>
<div className="overflow-auto flex-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-100">
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded bg-gray-100 overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-gray-900">Nike Air Green</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-500">Men's Shoes</td>
<td className="px-6 py-4 text-sm font-medium text-gray-900">$120.00</td>
<td className="px-6 py-4 text-right">
<button className="p-1 text-gray-400 hover:text-black"><iconify-icon icon="solar:pen-linear" width="16"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded bg-gray-100 overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-gray-900">Azure Heels</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-500">Women's Shoes</td>
<td className="px-6 py-4 text-sm font-medium text-gray-900">$85.00</td>
<td className="px-6 py-4 text-right">
<button className="p-1 text-gray-400 hover:text-black"><iconify-icon icon="solar:pen-linear" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<span className="font-bold text-xs">Z</span>
</div>
<span className="font-semibold text-base tracking-tight uppercase">Zidiiq</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Quality Shoes for Women, Men &amp; Children in Hargeisa. Committed to style, comfort, and durability.
                    </p>
</div>
<div>
<h4 className="font-semibold text-sm text-gray-900 mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-black transition-colors cursor-pointer" onclick="filterCategory('women')">Women</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors cursor-pointer" onclick="filterCategory('men')">Men</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors cursor-pointer" onclick="filterCategory('kids')">Kids</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-gray-900 mb-4">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Main Road, Jigjiga Yar,<br/>Hargeisa, Somaliland</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2023 Zidiiq Collection.</p>
</div>
</div>
</footer>


    </>
  );
}
