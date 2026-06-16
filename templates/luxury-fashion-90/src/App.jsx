import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // MOCK DATA - UPDATED TO DARKER THEMES
        const products = [
            { id: 1, name: "Obsidian Silk Dress", category: "Dresses", price: "$1,290", image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop", color: "Black", soldOut: false },
            { id: 2, name: "Charcoal Wool Coat", category: "Coats & Jackets", price: "$2,890", image: "https://images.unsplash.com/photo-1550614000-4b9519e0984f?q=80&w=1000&auto=format&fit=crop", color: "Grey", soldOut: false },
            { id: 3, name: "Espresso Knit Sweater", category: "Knitwear", price: "$595", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop", color: "Brown", soldOut: false },
            { id: 4, name: "Structure Blazer", category: "Coats & Jackets", price: "$1,150", image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1000&auto=format&fit=crop", color: "Black", soldOut: false },
            { id: 5, name: "Slate Trousers", category: "Trousers", price: "$650", image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1000&auto=format&fit=crop", color: "Grey", soldOut: true },
            { id: 6, name: "Midnight Turtleneck", category: "Knitwear", price: "$595", image: "https://images.unsplash.com/photo-1521341057461-6eb5f40b0ee4?q=80&w=1000&auto=format&fit=crop", color: "Black", soldOut: false },
            { id: 7, name: "Cocoa Silk Shirt", category: "Tops & Shirts", price: "$490", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop", color: "Brown", soldOut: false }, // Note: Using lighter image but filtered in CSS if needed, or stick to dark context
            { id: 8, name: "Onyx Evening Gown", category: "Dresses", price: "$1,800", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop", color: "Black", soldOut: false },
        ];

        const categories = ["View All", "Coats & Jackets", "Dresses", "Knitwear", "Trousers"];
        
        // STATE
        let activeCategory = "View All";
        let activeColors = [];

        // RENDER FUNCTIONS
        function renderCategories() {
            const list = document.getElementById('category-list');
            list.innerHTML = categories.map(cat => `
                <li onclick="filterCategory('${cat}')" 
                    class="text-sm cursor-pointer transition-colors ${activeCategory === cat ? 'text-zinc-900 font-medium' : 'text-zinc-500 hover:text-zinc-900'}">
                    ${cat}
                </li>
            `).join('');
        }

        function renderProducts() {
            const grid = document.getElementById('product-grid');
            const emptyState = document.getElementById('empty-state');
            const countLabel = document.getElementById('product-count');

            // Filter logic
            const filtered = products.filter(p => {
                const matchCat = activeCategory === "View All" || p.category === activeCategory;
                const matchColor = activeColors.length === 0 || activeColors.includes(p.color);
                return matchCat && matchColor;
            });

            countLabel.innerText = `${filtered.length} Products`;

            if (filtered.length === 0) {
                grid.innerHTML = '';
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
                grid.innerHTML = filtered.map(product => `
                    <div class="group cursor-pointer" onclick="switchView('product')">
                        <div class="relative aspect-[3/4] bg-zinc-100 mb-4 overflow-hidden">
                            <img src="${product.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${product.color === 'White' ? '' : 'saturate-50'}">
                            ${product.soldOut ? '<div class="absolute top-3 left-3 bg-zinc-900 text-white px-2 py-1 text-[10px] uppercase tracking-wider font-medium">Sold Out</div>' : ''}
                        </div>
                        <h3 class="text-sm font-medium">${product.name}</h3>
                        <div class="flex justify-between mt-1">
                            <p class="text-xs text-zinc-500">${product.category}</p>
                            <span class="text-sm font-light">${product.price}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        // HANDLERS
        function filterCategory(cat) {
            activeCategory = cat;
            renderCategories(); 
            renderProducts();
        }

        function toggleColor(color) {
            if (activeColors.includes(color)) {
                activeColors = activeColors.filter(c => c !== color);
            } else {
                activeColors.push(color);
            }
            renderProducts();
        }

        function clearFilters() {
            activeCategory = "View All";
            activeColors = [];
            document.querySelectorAll('.custom-checkbox').forEach(cb => cb.checked = false);
            renderCategories();
            renderProducts();
        }

        function switchView(viewName) {
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            document.getElementById(`view-${viewName}`).classList.remove('hidden');
            window.scrollTo(0, 0);

            // Update demo buttons
            const buttons = ['home', 'collection', 'product'];
            buttons.forEach(btn => {
                const el = document.getElementById(`btn-${btn}`);
                if (btn === viewName) {
                    el.classList.add('bg-zinc-900', 'text-white');
                    el.classList.remove('text-zinc-600', 'hover:bg-zinc-100');
                } else {
                    el.classList.remove('bg-zinc-900', 'text-white');
                    el.classList.add('text-zinc-600', 'hover:bg-zinc-100');
                }
            });
        }

        // INIT
        renderCategories();
        renderProducts();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="bg-zinc-950 text-white text-xs text-center py-2 tracking-widest uppercase font-medium">
            Complimentary Worldwide Shipping
        </div>
<div className="max-w-[1920px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-4 md:gap-6 flex-1">
<button className="p-1 hover:text-zinc-500 transition-colors">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<div className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer group">
<span className="iconify" data-icon="lucide:search" data-width="18"></span>
<span className="text-sm font-light group-hover:underline decoration-zinc-300 underline-offset-4">Search</span>
</div>
</div>
<div className="flex-shrink-0">
<a className="text-2xl font-serif tracking-tighter uppercase font-medium cursor-pointer" href="#" onclick="switchView('home'); return false;">
                    OBSCURA
                </a>
</div>
<div className="flex items-center justify-end gap-4 md:gap-6 flex-1">
<button className="hidden md:block text-sm font-light hover:text-zinc-500 transition-colors">Account</button>
<div className="hidden md:block h-4 w-px bg-zinc-200"></div>
<button className="text-sm font-light hover:text-zinc-500 transition-colors">United States (USD $)</button>
<button className="relative p-1 hover:text-zinc-500 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-[8px] text-white">1</span>
</button>
</div>
</div>
</header>

<main className="view-section pt-[88px]" id="view-home">
<section className="relative w-full h-[85vh] overflow-hidden">

<img alt="Dark Fashion" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[40%] brightness-75" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
<span className="text-xs md:text-sm tracking-[0.2em] uppercase mb-4 opacity-80">Autumn Winter 2024</span>
<h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8">Shadows &amp; Form</h1>
<div className="flex gap-4">
<button className="bg-white text-zinc-950 px-8 py-3 text-sm tracking-wide uppercase font-medium hover:bg-zinc-200 transition-colors min-w-[160px]" onclick="switchView('collection')">
                        Shop Collection
                    </button>
<button className="bg-transparent border border-white/40 text-white px-8 py-3 text-sm tracking-wide uppercase font-medium hover:bg-white hover:text-zinc-950 transition-colors min-w-[160px]" onclick="switchView('collection')">
                        Editorial
                    </button>
</div>
</div>
</section>
<section className="py-20 md:py-32 px-4 md:px-8 max-w-[1920px] mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-2">The Dark Edit</h2>
<p className="text-zinc-500 text-sm font-light">Essentials in monochrome and earth tones.</p>
</div>
<button className="text-sm border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-colors" onclick="switchView('collection')">View All</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
<div className="group cursor-pointer" onclick="switchView('product')">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-50" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium">Obsidian Silk Dress</h3><p className="text-xs text-zinc-500 mt-1">Evening</p></div>
<span className="text-sm font-light">$1,290</span>
</div>
</div>
<div className="group cursor-pointer" onclick="switchView('product')">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0" src="https://images.unsplash.com/photo-1550614000-4b9519e0984f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium">Charcoal Wool Coat</h3><p className="text-xs text-zinc-500 mt-1">Outerwear</p></div>
<span className="text-sm font-light">$2,890</span>
</div>
</div>
<div className="group cursor-pointer" onclick="switchView('product')">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 saturate-50" src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium">Espresso Knit Sweater</h3><p className="text-xs text-zinc-500 mt-1">Knitwear</p></div>
<span className="text-sm font-light">$595</span>
</div>
</div>
<div className="group cursor-pointer" onclick="switchView('product')">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0" src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium">Structure Blazer</h3><p className="text-xs text-zinc-500 mt-1">Tailoring</p></div>
<span className="text-sm font-light">$1,150</span>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 md:grid-cols-2">
<div className="bg-zinc-100 p-12 md:p-24 flex flex-col justify-center">
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-6">The Philosophy</span>
<h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-8 leading-tight">Quiet confidence in <br/>every thread.</h2>
<p className="text-zinc-600 font-light leading-relaxed max-w-md mb-10">
                    We believe in the power of the understated. Our collections explore the nuance between shadow and light, utilizing deep textures and monochromatic palettes.
                </p>
<a className="inline-flex items-center text-sm font-medium uppercase tracking-widest hover:text-zinc-600 transition-colors" href="#">
                    Explore Studio <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="relative aspect-square md:aspect-auto h-full">
<img alt="Atelier" className="absolute inset-0 w-full h-full object-cover grayscale brightness-90" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
</section>
</main>

<main className="view-section pt-[88px] hidden" id="view-collection">
<div className="max-w-[1920px] mx-auto px-4 md:px-8 py-12">
<div className="mb-12">
<div className="flex items-center text-xs text-zinc-400 mb-4">
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="switchView('home'); return false;">Home</a>
<span className="mx-2">/</span>
<span className="text-zinc-900">Collection</span>
</div>
<h1 className="text-4xl font-serif tracking-tight mb-4">Autumn / Winter</h1>
<p className="text-zinc-500 font-light max-w-2xl">A curated selection of dark tailoring and textured knits.</p>
</div>
<div className="flex flex-col md:flex-row gap-12">

<aside className="w-full md:w-64 flex-shrink-0 space-y-8">
<div>
<h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Categories</h3>
<ul className="space-y-3" id="category-list">

</ul>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Palette</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox hidden" onchange="toggleColor('Black')" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-sm flex items-center justify-center transition-colors bg-zinc-900">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Black</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox hidden" onchange="toggleColor('Grey')" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-sm flex items-center justify-center transition-colors bg-zinc-500">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Grey</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox hidden" onchange="toggleColor('Brown')" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-sm flex items-center justify-center transition-colors bg-[#5d4037]">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Brown</span>
</label>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-100">
<span className="text-xs text-zinc-500" id="product-count">0 Products</span>
<div className="flex items-center gap-2 cursor-pointer group">
<span className="text-xs font-medium uppercase tracking-wide">Sort by</span>
<span className="iconify text-zinc-400" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 fade-in" id="product-grid">

</div>

<div className="hidden py-20 text-center" id="empty-state">
<p className="text-zinc-500 font-light">No items found in this shade.</p>
<button className="mt-4 text-xs font-medium uppercase border-b border-zinc-900" onclick="clearFilters()">Reset</button>
</div>
</div>
</div>
</div>
</main>

<main className="view-section pt-[88px] hidden" id="view-product">
<div className="max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:min-h-screen">
<div className="lg:col-span-7 bg-zinc-50">
<div className="lg:hidden p-4 text-xs text-zinc-500">
<a href="#" onclick="switchView('home'); return false;">Home</a> / <a href="#" onclick="switchView('collection'); return false;">Collection</a> / Midnight Cashmere
                    </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white">

<img alt="Detail 1" className="w-full h-auto object-cover aspect-[3/4] grayscale-[20%]" src="https://images.unsplash.com/photo-1521341057461-6eb5f40b0ee4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 2" className="w-full h-auto object-cover aspect-[3/4] grayscale-[20%]" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 3" className="w-full h-auto object-cover aspect-[3/4] grayscale-[20%]" src="https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="w-full aspect-[3/4] bg-zinc-100 flex items-center justify-center p-12 text-center">
<div><h4 className="font-serif text-xl mb-2">Dark Matter</h4><p className="text-sm text-zinc-500 font-light">Sourced from the highlands.<br/>Dyed in natural volcanic ash.</p></div>
</div>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="lg:sticky lg:top-[88px] lg:h-[calc(100vh-88px)] lg:overflow-y-auto px-6 py-12 md:px-12 lg:px-16 flex flex-col justify-between">
<div>
<div className="hidden lg:block text-xs text-zinc-400 mb-8">
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="switchView('home'); return false;">Home</a>
<span className="mx-2">/</span>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="switchView('collection'); return false;">Collection</a>
<span className="mx-2">/</span>
<span className="text-zinc-900">Midnight Knit</span>
</div>
<div className="flex justify-between items-start mb-6">
<div><h1 className="text-3xl lg:text-4xl font-serif tracking-tight mb-2">Midnight Knit</h1><p className="text-sm text-zinc-500 font-light">Ref. OBS-001-B</p></div>
<div className="text-xl font-light">$595.00</div>
</div>
<p className="text-zinc-600 font-light text-sm leading-relaxed mb-8">
                                An exploration of depth and texture. This piece is knitted from heavyweight wool in a deep charcoal hue, designed to absorb light and provide structure.
                            </p>
<div className="mb-8">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-3 block">Tone: <span className="text-zinc-500 font-medium normal-case">Charcoal</span></span>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full bg-[#333333] border-2 border-zinc-900 shadow-[0_0_0_2px_white]"></button>
<button className="w-10 h-10 rounded-full bg-black hover:ring-1 ring-offset-2 ring-zinc-300 transition-all"></button>
<button className="w-10 h-10 rounded-full bg-[#5d4037] hover:ring-1 ring-offset-2 ring-zinc-300 transition-all"></button>
</div>
</div>
<div className="mb-10">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-900">Size</span>
<button className="text-xs text-zinc-500 underline underline-offset-4 hover:text-zinc-900">Fit Guide</button>
</div>
<div className="grid grid-cols-5 gap-2">
<button className="h-10 border border-zinc-200 text-sm hover:border-zinc-900 transition-colors flex items-center justify-center">XS</button>
<button className="h-10 bg-zinc-900 text-white text-sm flex items-center justify-center">S</button>
<button className="h-10 border border-zinc-200 text-sm hover:border-zinc-900 transition-colors flex items-center justify-center">M</button>
<button className="h-10 border border-zinc-200 text-sm hover:border-zinc-900 transition-colors flex items-center justify-center">L</button>
<button className="h-10 border border-zinc-100 text-zinc-300 text-sm cursor-not-allowed flex items-center justify-center relative overflow-hidden">
                                        XL <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-zinc-200 rotate-45 transform"></div></div>
</button>
</div>
</div>
<button className="w-full bg-zinc-900 text-white h-12 text-sm font-medium uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 mb-4">
                                Add to Cart <span className="iconify" data-icon="lucide:shopping-bag" data-width="16"></span>
</button>
<p className="text-xs text-center text-zinc-500">Free worldwide shipping &amp; returns.</p>
</div>
<div className="mt-12 border-t border-zinc-100">
<div className="border-b border-zinc-100">
<button className="w-full py-4 flex justify-between items-center text-sm font-medium hover:text-zinc-600"><span>Details &amp; Care</span><span className="iconify" data-icon="lucide:plus" data-width="14"></span></button>
</div>
<div className="border-b border-zinc-100">
<button className="w-full py-4 flex justify-between items-center text-sm font-medium hover:text-zinc-600"><span>Shipping</span><span className="iconify" data-icon="lucide:plus" data-width="14"></span></button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="bg-zinc-950 text-white py-16 md:py-24 border-t border-zinc-900">
<div className="max-w-[1920px] mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-serif tracking-tight mb-6 block">OBSCURA</span>
<div className="flex gap-4 text-zinc-500">
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:instagram" data-width="20"></span>
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:facebook" data-width="20"></span>
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="20"></span>
</div>
</div>
<div><h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-zinc-500">Shop</h4><ul className="space-y-3 text-sm font-light text-zinc-400"><li><a href="#">All Products</a></li><li><a href="#">Coats</a></li><li><a href="#">Knitwear</a></li></ul></div>
<div><h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-zinc-500">Legal</h4><ul className="space-y-3 text-sm font-light text-zinc-400"><li><a href="#">Terms</a></li><li><a href="#">Privacy</a></li><li><a href="#">Returns</a></li></ul></div>
<div><h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-zinc-500">Newsletter</h4><p className="text-sm font-light text-zinc-400 mb-4">Join our list for early access.</p><div className="flex border-b border-zinc-800 pb-2"><input className="bg-transparent w-full outline-none text-sm placeholder-zinc-600 text-white" placeholder="Email" type="email"/><button className="text-xs uppercase tracking-widest font-medium text-zinc-400 hover:text-white">Sign Up</button></div></div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-xs text-zinc-600 font-light"><p>© 2024 OBSCURA Studio. All rights reserved.</p></div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur border border-zinc-200 shadow-xl rounded-lg p-1.5 flex gap-1">
<button className="px-4 py-2 text-xs font-medium rounded-md bg-zinc-900 text-white transition-all" id="btn-home" onclick="switchView('home')">Home</button>
<button className="px-4 py-2 text-xs font-medium rounded-md text-zinc-600 hover:bg-zinc-100 transition-all" id="btn-collection" onclick="switchView('collection')">Collection</button>
<button className="px-4 py-2 text-xs font-medium rounded-md text-zinc-600 hover:bg-zinc-100 transition-all" id="btn-product" onclick="switchView('product')">Product</button>
</div>


    </>
  );
}
