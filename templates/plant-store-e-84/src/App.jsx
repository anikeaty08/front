import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function navigate(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-view');
            pages.forEach(page => {
                page.classList.add('hidden');
            });
            
            // Show target page
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white border-b border-neutral-200 w-full">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden flex items-center text-black">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>

<nav className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-black hover:text-neutral-500 transition-colors" onclick="navigate('shop')">Shop</button>
<button className="text-sm text-neutral-500 hover:text-black transition-colors" onclick="navigate('home')">Categories</button>
<button className="text-sm text-neutral-500 hover:text-black transition-colors" onclick="navigate('home')">Care Guide</button>
</nav>

<div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer" onclick="navigate('home')">
<span className="text-xl font-semibold tracking-tighter text-black uppercase">Flora</span>
</div>

<div className="flex items-center gap-5">
<button className="text-black hover:text-neutral-500 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-black hover:text-neutral-500 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-black hover:text-neutral-500 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-black hover:text-neutral-500 transition-colors relative" onclick="navigate('cart')">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[0.65rem] font-medium w-4 h-4 flex items-center justify-center rounded-full">2</span>
</button>
</div>
</div>
</header>

<main className="flex-grow">

<div className="page-view block" id="home">

<section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
<div className="flex flex-col items-start space-y-8 pr-0 md:pr-12">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black leading-[1.1]">Cultivate pure<br/>nature indoors.</h1>
<p className="text-base text-neutral-500 max-w-md leading-relaxed">Discover our curated collection of premium nursery-grown plants, designed to bring calm, structure, and life into your modern space.</p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="bg-black text-white px-8 py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors" onclick="navigate('shop')">Shop Collection</button>
<button className="bg-white text-black border border-black px-8 py-3.5 text-sm font-medium hover:bg-neutral-50 transition-colors">Explore Care Guide</button>
</div>
</div>
<div className="relative h-[60vh] md:h-[80vh] w-full bg-neutral-100 overflow-hidden">
<img alt="Premium Monstera Plant" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="bg-neutral-50 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-black">Collections</h2>
<button className="text-sm font-medium text-black underline underline-offset-4 hover:text-neutral-500" onclick="navigate('shop')">View all</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group cursor-pointer" onclick="navigate('shop')">
<div className="aspect-[4/5] bg-neutral-200 overflow-hidden relative mb-4">
<img alt="Indoor Plants" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-base font-medium text-black tracking-tight">Indoor Plants</h3>
<p className="text-xs text-neutral-500 mt-1">Curated for modern spaces</p>
</div>
<div className="group cursor-pointer" onclick="navigate('shop')">
<div className="aspect-[4/5] bg-neutral-200 overflow-hidden relative mb-4">
<img alt="Pots &amp; Planters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-base font-medium text-black tracking-tight">Pots &amp; Planters</h3>
<p className="text-xs text-neutral-500 mt-1">Minimalist architectural vessels</p>
</div>
<div className="group cursor-pointer" onclick="navigate('shop')">
<div className="aspect-[4/5] bg-neutral-200 overflow-hidden relative mb-4">
<img alt="Large Statements" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-base font-medium text-black tracking-tight">Large Statements</h3>
<p className="text-xs text-neutral-500 mt-1">Mature trees for instant impact</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-black mb-12">New Arrivals</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img alt="Ficus Audrey" className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-4 right-4 text-black hover:text-neutral-500 z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">Ficus Audrey</h3>
<p className="text-xs text-neutral-500 mt-1">Low Maintenance</p>
</div>
<span className="text-sm text-black font-medium">$145</span>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img alt="Bird of Paradise" className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-4 right-4 text-black hover:text-neutral-500 z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">Bird of Paradise</h3>
<p className="text-xs text-neutral-500 mt-1">Bright Light</p>
</div>
<span className="text-sm text-black font-medium">$180</span>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img alt="Olive Tree" className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute top-4 right-4 text-black hover:text-neutral-500 z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">European Olive Tree</h3>
<p className="text-xs text-neutral-500 mt-1">Direct Sun</p>
</div>
<span className="text-sm text-black font-medium">$210</span>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img alt="Philodendron" className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute top-4 right-4 text-black hover:text-neutral-500 z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">Philodendron Hope</h3>
<p className="text-xs text-neutral-500 mt-1">Air Purifying</p>
</div>
<span className="text-sm text-black font-medium">$85</span>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-24 border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
<div>
<iconify-icon className="text-3xl text-black mb-4" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Nursery Grown</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Cultivated with care in our specialized greenhouses for optimal health.</p>
</div>
<div>
<iconify-icon className="text-3xl text-black mb-4" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Secure Transit</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Engineered packaging ensures your plant arrives in perfect condition.</p>
</div>
<div>
<iconify-icon className="text-3xl text-black mb-4" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Direct Delivery</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Fast, climate-controlled shipping directly to your doorstep.</p>
</div>
<div>
<iconify-icon className="text-3xl text-black mb-4" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Expert Guidance</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Lifetime support and care advice from our botanist team.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="shop">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

<div className="mb-12">
<h1 className="text-4xl font-semibold tracking-tight text-black mb-4">All Plants</h1>
<p className="text-sm text-neutral-500 max-w-2xl">Transform your environment with our collection of robust, architecturally significant plants.</p>
</div>
<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 flex-shrink-0">
<div className="space-y-8">

<div>
<h3 className="text-sm font-medium text-black mb-4">Category</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<input checked="" className="custom-checkbox" id="cat-indoor" type="checkbox"/>
<label className="text-sm text-neutral-600 cursor-pointer select-none" htmlFor="cat-indoor">Indoor Plants</label>
</li>
<li className="flex items-center gap-3">
<input className="custom-checkbox" id="cat-outdoor" type="checkbox"/>
<label className="text-sm text-neutral-600 cursor-pointer select-none" htmlFor="cat-outdoor">Outdoor Plants</label>
</li>
<li className="flex items-center gap-3">
<input className="custom-checkbox" id="cat-large" type="checkbox"/>
<label className="text-sm text-neutral-600 cursor-pointer select-none" htmlFor="cat-large">Large Statements</label>
</li>
</ul>
</div>
<hr className="border-neutral-200"/>

<div>
<h3 className="text-sm font-medium text-black mb-4">Light Requirement</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<input className="custom-checkbox" id="light-low" type="checkbox"/>
<label className="text-sm text-neutral-600 cursor-pointer select-none" htmlFor="light-low">Low Light</label>
</li>
<li className="flex items-center gap-3">
<input className="custom-checkbox" id="light-bright" type="checkbox"/>
<label className="text-sm text-neutral-600 cursor-pointer select-none" htmlFor="light-bright">Bright Indirect</label>
</li>
<li className="flex items-center gap-3">
<input className="custom-checkbox" id="light-direct" type="checkbox"/>
<label className="text-sm text-neutral-600 cursor-pointer select-none" htmlFor="light-direct">Direct Sun</label>
</li>
</ul>
</div>
<hr className="border-neutral-200"/>

<div>
<h3 className="text-sm font-medium text-black mb-4">Care Level</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<input className="custom-checkbox" id="care-easy" type="checkbox"/>
<label className="text-sm text-neutral-600 cursor-pointer select-none" htmlFor="care-easy">Beginner Friendly</label>
</li>
<li className="flex items-center gap-3">
<input className="custom-checkbox" id="care-med" type="checkbox"/>
<label className="text-sm text-neutral-600 cursor-pointer select-none" htmlFor="care-med">Intermediate</label>
</li>
</ul>
</div>
</div>
</aside>

<div className="flex-grow">

<div className="flex justify-between items-center mb-8 pb-4 border-b border-neutral-200">
<span className="text-xs text-neutral-500">Showing 1-9 of 45 results</span>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Sort by:</span>
<select className="appearance-none bg-transparent text-sm font-medium text-black focus:outline-none cursor-pointer pr-4 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200l5%206%205-6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right">
<option>Featured</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Newest</option>
</select>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">Ficus Audrey</h3><p className="text-xs text-neutral-500 mt-1">Medium</p></div>
<span className="text-sm text-black font-medium">$145</span>
</div>
</div>
<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">Bird of Paradise</h3><p className="text-xs text-neutral-500 mt-1">Large</p></div>
<span className="text-sm text-black font-medium">$180</span>
</div>
</div>
<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">European Olive</h3><p className="text-xs text-neutral-500 mt-1">Large</p></div>
<span className="text-sm text-black font-medium">$210</span>
</div>
</div>
<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">Philodendron</h3><p className="text-xs text-neutral-500 mt-1">Medium</p></div>
<span className="text-sm text-black font-medium">$85</span>
</div>
</div>
<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">Bonsai Focus</h3><p className="text-xs text-neutral-500 mt-1">Small</p></div>
<span className="text-sm text-black font-medium">$95</span>
</div>
</div>
<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4 cursor-pointer" onclick="navigate('product')">
<img className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div><h3 className="text-sm font-medium text-black cursor-pointer" onclick="navigate('product')">Monstera Deliciosa</h3><p className="text-xs text-neutral-500 mt-1">Large</p></div>
<span className="text-sm text-black font-medium">$120</span>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<button className="border border-neutral-200 px-6 py-2 text-sm text-black hover:border-black transition-colors">Load More</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="product">

<div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-2 text-xs text-neutral-500">
<span className="cursor-pointer hover:text-black" onclick="navigate('home')">Home</span>
<span>/</span>
<span className="cursor-pointer hover:text-black" onclick="navigate('shop')">Indoor</span>
<span>/</span>
<span className="text-black">Ficus Audrey</span>
</div>
<div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-4">
<div className="aspect-[4/5] bg-neutral-100 w-full overflow-hidden">
<img alt="Ficus Audrey Main" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square bg-neutral-100 cursor-pointer border-b-2 border-black"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-neutral-100 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"><img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/></div>
</div>
</div>

<div className="flex flex-col pt-4 md:pt-10">
<h1 className="text-4xl font-semibold tracking-tight text-black mb-2">Ficus Audrey</h1>
<p className="text-xl text-neutral-800 mb-8">$145</p>
<p className="text-sm text-neutral-600 leading-relaxed mb-8">
                        The Ficus Audrey features striking emerald green leaves with prominent pale veining. As the national tree of India, it brings a structured, architectural elegance to modern interiors. Easier to care for than its cousin, the Fiddle Leaf Fig.
                    </p>

<div className="mb-8">
<h3 className="text-xs font-medium text-black mb-3 uppercase tracking-wider">Select Size</h3>
<div className="flex gap-4">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="px-5 py-3 border border-neutral-200 text-sm text-neutral-500 peer-checked:border-black peer-checked:text-black transition-colors">Medium (6" Pot)</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="size" type="radio"/>
<div className="px-5 py-3 border border-neutral-200 text-sm text-neutral-500 peer-checked:border-black peer-checked:text-black transition-colors">Large (10" Pot)</div>
</label>
</div>
</div>
<div className="mb-10">
<h3 className="text-xs font-medium text-black mb-3 uppercase tracking-wider">Add Planter</h3>
<div className="flex items-center gap-3">
<input className="custom-checkbox" id="add-planter" type="checkbox"/>
<label className="text-sm text-black cursor-pointer" htmlFor="add-planter">Matte Black Ceramic Cylinder (+$45)</label>
</div>
</div>

<div className="flex gap-4 mb-12">
<div className="border border-neutral-200 flex items-center px-4 w-32 justify-between">
<button className="text-neutral-500 hover:text-black focus:outline-none">-</button>
<span className="text-sm font-medium">1</span>
<button className="text-neutral-500 hover:text-black focus:outline-none">+</button>
</div>
<button className="flex-grow bg-black text-white px-8 py-4 text-sm font-medium hover:bg-neutral-800 transition-colors" onclick="navigate('cart')">Add to Cart</button>
<button className="border border-neutral-200 px-5 flex items-center justify-center hover:border-black transition-colors">
<iconify-icon className="text-xl text-black" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="border-t border-neutral-200">
<div className="py-5 border-b border-neutral-200 flex justify-between items-center cursor-pointer group">
<span className="text-sm font-medium text-black">Care Instructions</span>
<iconify-icon className="text-black group-hover:translate-y-0.5 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="py-4 text-sm text-neutral-600 grid grid-cols-2 gap-y-4">
<div><strong className="text-black block mb-1">Light</strong>Bright, indirect light. Can tolerate some morning sun.</div>
<div><strong className="text-black block mb-1">Water</strong>Water when top 2-3 inches of soil are dry.</div>
<div><strong className="text-black block mb-1">Humidity</strong>Standard household humidity is fine.</div>
<div><strong className="text-black block mb-1">Toxicity</strong>Mildly toxic to pets if ingested.</div>
</div>
<div className="py-5 border-b border-neutral-200 flex justify-between items-center cursor-pointer group">
<span className="text-sm font-medium text-black">Delivery &amp; Returns</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden bg-neutral-50 min-h-screen py-12 md:py-24" id="cart">
<div className="max-w-6xl mx-auto px-6">
<h1 className="text-3xl font-semibold tracking-tight text-black mb-10">Your Cart</h1>
<div className="flex flex-col lg:flex-row gap-12">

<div className="flex-grow">
<div className="bg-white p-6 border border-neutral-200">

<div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-neutral-200 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<div className="col-span-6">Product</div>
<div className="col-span-2 text-center">Quantity</div>
<div className="col-span-2 text-right">Price</div>
<div className="col-span-2 text-right">Total</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-neutral-100 items-center">
<div className="col-span-1 md:col-span-6 flex gap-4 items-center">
<img className="w-20 h-24 object-cover bg-neutral-100" src="https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-sm font-medium text-black">Ficus Audrey</h3>
<p className="text-xs text-neutral-500 mt-1">Size: Medium</p>
<button className="text-xs text-neutral-400 underline mt-2 hover:text-black">Remove</button>
</div>
</div>
<div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
<div className="border border-neutral-200 flex items-center px-3 py-1 w-24 justify-between">
<button className="text-neutral-500 focus:outline-none">-</button>
<span className="text-sm">1</span>
<button className="text-neutral-500 focus:outline-none">+</button>
</div>
</div>
<div className="hidden md:block col-span-2 text-right text-sm text-neutral-500">$145.00</div>
<div className="col-span-1 md:col-span-2 text-left md:text-right text-sm font-medium text-black">$145.00</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 items-center">
<div className="col-span-1 md:col-span-6 flex gap-4 items-center">
<img className="w-20 h-24 object-cover bg-neutral-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<h3 className="text-sm font-medium text-black">Matte Cylinder Planter</h3>
<p className="text-xs text-neutral-500 mt-1">Color: Bone White</p>
<button className="text-xs text-neutral-400 underline mt-2 hover:text-black">Remove</button>
</div>
</div>
<div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
<div className="border border-neutral-200 flex items-center px-3 py-1 w-24 justify-between">
<button className="text-neutral-500 focus:outline-none">-</button>
<span className="text-sm">1</span>
<button className="text-neutral-500 focus:outline-none">+</button>
</div>
</div>
<div className="hidden md:block col-span-2 text-right text-sm text-neutral-500">$45.00</div>
<div className="col-span-1 md:col-span-2 text-left md:text-right text-sm font-medium text-black">$45.00</div>
</div>
</div>
</div>

<div className="w-full lg:w-96 flex-shrink-0">
<div className="bg-white p-6 border border-neutral-200">
<h2 className="text-lg font-medium text-black mb-6 tracking-tight">Order Summary</h2>
<div className="space-y-4 text-sm mb-6 border-b border-neutral-200 pb-6">
<div className="flex justify-between">
<span className="text-neutral-500">Subtotal</span>
<span className="text-black">$190.00</span>
</div>
<div className="flex justify-between">
<span className="text-neutral-500">Shipping</span>
<span className="text-black">Calculated at checkout</span>
</div>
</div>
<div className="flex justify-between items-end mb-8">
<span className="text-base font-medium text-black">Total</span>
<span className="text-2xl font-semibold text-black tracking-tight">$190.00</span>
</div>
<button className="w-full bg-black text-white py-4 text-sm font-medium hover:bg-neutral-800 transition-colors mb-4">Proceed to Checkout</button>
<p className="text-xs text-neutral-400 text-center flex items-center justify-center gap-2">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon> Secure Encrypted Checkout
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-neutral-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-semibold tracking-tighter text-black uppercase block mb-6">Flora</span>
<p className="text-sm text-neutral-500 mb-6 max-w-xs">Premium nursery plants delivered with care to modern homes.</p>
</div>
<div>
<h4 className="text-sm font-medium text-black mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-black transition-colors" href="#">Indoor Plants</a></li>
<li><a className="hover:text-black transition-colors" href="#">Outdoor Plants</a></li>
<li><a className="hover:text-black transition-colors" href="#">Pots &amp; Planters</a></li>
<li><a className="hover:text-black transition-colors" href="#">Care Essentials</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-black mb-6">Support</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-black transition-colors" href="#">Care Guides</a></li>
<li><a className="hover:text-black transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-black transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-black mb-6">Newsletter</h4>
<p className="text-xs text-neutral-500 mb-4">Botanical insights and early access to rare drops.</p>
<form className="flex gap-2">
<input className="bg-white border border-neutral-300 px-4 py-2 text-sm w-full focus:outline-none focus:border-black placeholder:text-neutral-400" placeholder="Email address" type="email"/>
<button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors" type="button">Join</button>
</form>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 Flora Nursery. All rights reserved.</p>
<div className="flex gap-6 text-neutral-400">
<a className="hover:text-black" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-black" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
