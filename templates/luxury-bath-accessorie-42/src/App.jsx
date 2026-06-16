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
      

<div className="bg-[#1C1C1E] text-[#F5F0EB] text-xs font-medium uppercase tracking-widest py-2.5 text-center flex items-center justify-center gap-4">
<span>Free shipping on orders over $75</span>
</div>

<header className="sticky top-0 z-50 bg-[#F5F0EB]/90 backdrop-blur-md border-b border-[#EDE8E1]">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<a className="font-serif text-2xl font-medium tracking-tighter uppercase w-32" href="#home">LINO</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-[#8E8E93] hover:text-[#1C1C1E] transition-colors" href="#home">Home</a>
<a className="text-[#8E8E93] hover:text-[#1C1C1E] transition-colors" href="#shop">Shop</a>
<a className="text-[#8E8E93] hover:text-[#1C1C1E] transition-colors" href="#about">About</a>
<a className="text-[#8E8E93] hover:text-[#1C1C1E] transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-5 w-32 justify-end">
<button className="text-[#1C1C1E] hover:text-[#C4714F] transition-colors flex">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-[#1C1C1E] hover:text-[#C4714F] transition-colors flex hidden sm:block">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-[#1C1C1E] hover:text-[#C4714F] transition-colors flex relative">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-2 bg-[#1C1C1E] text-[#F5F0EB] text-[0.6rem] font-medium w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</header>

<section className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-[#EDE8E1]" id="home">

<div className="absolute inset-0 w-full h-full">
<img alt="Premium men's bathrobe and towels" className="w-full h-full object-cover opacity-90 object-center" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex flex-col items-start pt-20">
<span className="text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-6">The Signature Collection</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-[#1C1C1E] leading-[1.05] tracking-tight max-w-2xl font-medium mb-8">
                Elevate Your Daily Ritual.
            </h1>
<p className="text-base md:text-lg text-[#1C1C1E]/80 max-w-md font-light mb-10">
                Exceptionally crafted bath linens and accessories designed for the modern man. Experience unparalleled softness and durability.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#1C1C1E] text-[#F5F0EB] text-sm font-medium px-8 py-3.5 hover:bg-[#C4714F] transition-all w-full sm:w-auto text-center inline-block" href="#shop">
                    Shop Collection
                </a>
<a className="bg-transparent border border-[#1C1C1E] text-[#1C1C1E] text-sm font-medium px-8 py-3.5 hover:bg-[#1C1C1E] hover:text-[#F5F0EB] transition-all w-full sm:w-auto text-center inline-block" href="#about">
                    Explore Materials
                </a>
</div>
</div>
</section>

<div className="border-b border-[#EDE8E1] bg-[#F5F0EB] py-6 hidden md:block">
<div className="max-w-[1440px] mx-auto px-12 flex justify-between items-center text-xs font-medium uppercase tracking-widest text-[#8E8E93]">
<div className="flex items-center gap-2"><iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon> 100% Turkish Cotton</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon> Oeko-Tex Certified</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:box-minimalistic-linear" width="16"></iconify-icon> Free Returns</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:star-linear" width="16"></iconify-icon> 5-Star Rated</div>
</div>
</div>

<section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20" id="shop">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#EDE8E1] pb-6 gap-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-[#1C1C1E]">Bath Linens</h2>
<p className="text-sm text-[#8E8E93] mt-2 font-light">42 products</p>
</div>
<div className="flex items-center gap-4 text-sm">
<span className="text-[#8E8E93]">Sort by</span>
<div className="relative group cursor-pointer border border-[#EDE8E1] px-4 py-2 bg-white">
<div className="flex items-center gap-2 font-medium">Featured <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-12 relative">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-10 sticky top-28 h-max hidden lg:block">

<div>
<h3 className="text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-5">Categories</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 text-sm cursor-pointer group">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span className="text-[#1C1C1E] group-hover:text-[#C4714F] transition-colors">Towels</span>
</label>
<label className="flex items-center gap-3 text-sm cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-[#8E8E93] group-hover:text-[#1C1C1E] transition-colors">Bathrobes</span>
</label>
<label className="flex items-center gap-3 text-sm cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-[#8E8E93] group-hover:text-[#1C1C1E] transition-colors">Bath Mats</span>
</label>
<label className="flex items-center gap-3 text-sm cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-[#8E8E93] group-hover:text-[#1C1C1E] transition-colors">Accessories</span>
</label>
</div>
</div>

<div className="border-t border-[#EDE8E1] pt-10">
<h3 className="text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-5">Price</h3>
<div className="space-y-6">
<input className="custom-slider" max="250" min="0" type="range" value="150"/>
<div className="flex justify-between text-xs text-[#8E8E93]">
<span>$0</span>
<span className="text-[#1C1C1E] font-medium">$150</span>
<span>$250+</span>
</div>
</div>
</div>

<div className="border-t border-[#EDE8E1] pt-10">
<h3 className="text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-5">Color</h3>
<div className="flex flex-wrap gap-3">
<button className="w-6 h-6 rounded-full bg-[#1C1C1E] ring-1 ring-offset-2 ring-offset-[#F5F0EB] ring-[#1C1C1E]"></button>
<button className="w-6 h-6 rounded-full bg-[#F5F0EB] border border-[#EDE8E1]"></button>
<button className="w-6 h-6 rounded-full bg-[#8E8E93]"></button>
<button className="w-6 h-6 rounded-full bg-[#C4714F]"></button>
<button className="w-6 h-6 rounded-full bg-[#5C6B73]"></button>
</div>
</div>
</aside>

<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#EDE8E1] overflow-hidden mb-4">
<img alt="Charcoal Bath Towel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 flex flex-col gap-2">
<span className="bg-[#1C1C1E] text-[#F5F0EB] text-[0.65rem] font-medium uppercase tracking-widest px-2 py-1">Bestseller</span>
</div>

<button className="absolute top-4 right-4 text-[#1C1C1E] opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full flex items-center justify-center hover:text-[#C4714F]">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>

<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur-sm text-[#1C1C1E] text-sm font-medium py-3 hover:bg-[#1C1C1E] hover:text-white transition-colors">
                                Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-serif text-lg tracking-tight text-[#1C1C1E] mb-1">Signature Bath Towel</h4>
<p className="text-sm text-[#8E8E93] font-light">Charcoal Grey</p>
</div>
<span className="text-sm font-medium text-[#1C1C1E]">$45</span>
</div>

<div className="flex gap-1.5 mt-3">
<div className="w-3 h-3 rounded-full bg-[#1C1C1E] border border-transparent"></div>
<div className="w-3 h-3 rounded-full bg-[#F5F0EB] border border-[#EDE8E1]"></div>
<div className="w-3 h-3 rounded-full bg-[#8E8E93] border border-transparent"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#EDE8E1] overflow-hidden mb-4">
<img alt="Linen Bathrobe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1598300056393-4aac492f4344?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 flex flex-col gap-2">
<span className="bg-[#C4714F] text-[#F5F0EB] text-[0.65rem] font-medium uppercase tracking-widest px-2 py-1">New</span>
</div>
<button className="absolute top-4 right-4 text-[#1C1C1E] opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full flex items-center justify-center hover:text-[#C4714F]">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur-sm text-[#1C1C1E] text-sm font-medium py-3 hover:bg-[#1C1C1E] hover:text-white transition-colors">
                                Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-serif text-lg tracking-tight text-[#1C1C1E] mb-1">Waffle Knit Robe</h4>
<p className="text-sm text-[#8E8E93] font-light">Warm Linen</p>
</div>
<span className="text-sm font-medium text-[#1C1C1E]">$125</span>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3 h-3 rounded-full bg-[#EDE8E1] border border-transparent ring-1 ring-offset-1 ring-[#1C1C1E]"></div>
<div className="w-3 h-3 rounded-full bg-[#1C1C1E] border border-transparent"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#EDE8E1] overflow-hidden mb-4">
<img alt="Bath Mat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-4 right-4 text-[#1C1C1E] opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full flex items-center justify-center hover:text-[#C4714F]">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur-sm text-[#1C1C1E] text-sm font-medium py-3 hover:bg-[#1C1C1E] hover:text-white transition-colors">
                                Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-serif text-lg tracking-tight text-[#1C1C1E] mb-1">Plush Bath Mat</h4>
<p className="text-sm text-[#8E8E93] font-light">Stone Grey</p>
</div>
<span className="text-sm font-medium text-[#1C1C1E]">$55</span>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3 h-3 rounded-full bg-[#8E8E93] border border-transparent"></div>
</div>
</div>

<div className="group cursor-pointer hidden md:block">
<div className="relative aspect-[4/5] bg-[#EDE8E1] overflow-hidden mb-4">
<img alt="Hand Towel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-4 right-4 text-[#1C1C1E] opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full flex items-center justify-center hover:text-[#C4714F]">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full bg-white/90 backdrop-blur-sm text-[#1C1C1E] text-sm font-medium py-3 hover:bg-[#1C1C1E] hover:text-white transition-colors">
                                Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-serif text-lg tracking-tight text-[#1C1C1E] mb-1">Hand Towel Set</h4>
<p className="text-sm text-[#8E8E93] font-light">Terracotta</p>
</div>
<span className="text-sm font-medium text-[#1C1C1E]">$35</span>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3 h-3 rounded-full bg-[#C4714F] border border-transparent"></div>
<div className="w-3 h-3 rounded-full bg-[#1C1C1E] border border-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-b border-[#EDE8E1] py-20">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row gap-16">

<div className="w-full lg:w-1/2 flex gap-4">
<div className="hidden md:flex flex-col gap-4 w-20 flex-shrink-0">
<div className="aspect-[4/5] bg-[#F5F0EB] cursor-pointer border border-[#1C1C1E]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598300056393-4aac492f4344?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] bg-[#F5F0EB] cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full aspect-[4/5] bg-[#F5F0EB] relative">
<img alt="Waffle Knit Robe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598300056393-4aac492f4344?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:text-[#C4714F] transition-colors shadow-sm">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col justify-center">
<nav className="flex text-xs text-[#8E8E93] mb-6 uppercase tracking-widest gap-2">
<a className="hover:text-[#1C1C1E]" href="#shop">Shop</a> / 
                        <a className="hover:text-[#1C1C1E]" href="#shop">Bathrobes</a> / 
                        <span className="text-[#1C1C1E]">Waffle Knit Robe</span>
</nav>
<h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#1C1C1E] mb-4">Waffle Knit Robe</h1>
<div className="flex items-center gap-4 mb-6">
<span className="text-xl font-medium text-[#1C1C1E]">$125</span>
<div className="flex items-center gap-1 text-[#C9A84C]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-xs text-[#8E8E93] ml-2 font-sans underline cursor-pointer">(142 reviews)</span>
</div>
</div>
<p className="text-sm text-[#1C1C1E]/80 font-light leading-relaxed mb-8">
                        Woven from 100% long-staple Turkish cotton, our Waffle Knit Robe is lightweight, highly absorbent, and designed to dry quickly. The honeycomb texture provides a gentle exfoliation while wrapping you in spa-like comfort.
                    </p>
<div className="mb-8">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-[#1C1C1E]">Color: <span className="text-[#8E8E93] font-light ml-1">Warm Linen</span></span>
</div>
<div className="flex gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-[#EDE8E1] border-2 border-transparent peer-checked:border-[#1C1C1E] ring-2 ring-transparent peer-checked:ring-white group-hover:scale-110 transition-transform"></div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-[#1C1C1E] border-2 border-transparent peer-checked:border-[#1C1C1E] ring-2 ring-transparent peer-checked:ring-white group-hover:scale-110 transition-transform"></div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-[#8E8E93] border-2 border-transparent peer-checked:border-[#1C1C1E] ring-2 ring-transparent peer-checked:ring-white group-hover:scale-110 transition-transform"></div>
</label>
</div>
</div>
<div className="mb-8">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-[#1C1C1E]">Size</span>
<a className="text-xs text-[#8E8E93] underline hover:text-[#1C1C1E]" href="#">Size Guide</a>
</div>
<div className="grid grid-cols-4 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="border border-[#EDE8E1] text-[#1C1C1E] py-3 text-center text-sm peer-checked:bg-[#1C1C1E] peer-checked:text-white peer-checked:border-[#1C1C1E] hover:border-[#1C1C1E] transition-colors">S</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="border border-[#EDE8E1] text-[#1C1C1E] py-3 text-center text-sm peer-checked:bg-[#1C1C1E] peer-checked:text-white peer-checked:border-[#1C1C1E] hover:border-[#1C1C1E] transition-colors">M</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="border border-[#EDE8E1] text-[#1C1C1E] py-3 text-center text-sm peer-checked:bg-[#1C1C1E] peer-checked:text-white peer-checked:border-[#1C1C1E] hover:border-[#1C1C1E] transition-colors">L</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="border border-[#EDE8E1] text-[#1C1C1E] py-3 text-center text-sm peer-checked:bg-[#1C1C1E] peer-checked:text-white peer-checked:border-[#1C1C1E] hover:border-[#1C1C1E] transition-colors">XL</div>
</label>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<div className="flex items-center border border-[#EDE8E1] h-12 w-32 justify-between px-4 text-[#1C1C1E]">
<button className="hover:text-[#C4714F]"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="text-sm font-medium">1</span>
<button className="hover:text-[#C4714F]"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
<button className="flex-1 bg-[#1C1C1E] text-white h-12 text-sm font-medium hover:bg-[#C4714F] transition-colors flex items-center justify-center gap-2">
                            Add to Cart
                        </button>
<button className="w-12 h-12 border border-[#EDE8E1] flex items-center justify-center text-[#1C1C1E] hover:border-[#1C1C1E] transition-colors flex-shrink-0">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div className="border-t border-[#EDE8E1]">
<details className="group border-b border-[#EDE8E1]" open="">
<summary className="flex justify-between items-center py-5 text-sm font-medium text-[#1C1C1E] outline-none">
                                Materials &amp; Care
                                <span className="group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="pb-5 text-sm text-[#8E8E93] font-light leading-relaxed">
                                100% Turkish Cotton, 320 GSM.<br/>
                                Machine wash cold with like colors. Tumble dry low. Do not bleach. To maintain texture, avoid fabric softeners.
                            </div>
</details>
<details className="group border-b border-[#EDE8E1]">
<summary className="flex justify-between items-center py-5 text-sm font-medium text-[#1C1C1E] outline-none">
                                Shipping &amp; Returns
                                <span className="group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="pb-5 text-sm text-[#8E8E93] font-light leading-relaxed">
                                Free standard shipping on orders over $75. Returns are accepted within 30 days of purchase for unused items in original packaging.
                            </div>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F0EB] py-24" id="about">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-square bg-[#EDE8E1] overflow-hidden">
<img alt="About Lino" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-10">
<span className="text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-6">Our Story</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1E] leading-[1.1] tracking-tight font-medium mb-8">
                    Crafting the Perfect Start to Your Day.
                </h2>
<p className="text-base text-[#1C1C1E]/80 font-light mb-6 leading-relaxed">
                    Founded in 2026, LINO emerged from a simple observation: men's bath accessories were either an afterthought or overly complicated. We set out to create a sanctuary of simplicity, focusing purely on exceptional materials and timeless design.
                </p>
<p className="text-base text-[#1C1C1E]/80 font-light mb-10 leading-relaxed">
                    Every towel, robe, and mat is thoughtfully woven by master artisans in Turkey, utilizing 100% long-staple organic cotton. We believe that elevating your daily rituals shouldn't be a luxury, but a standard.
                </p>
<div className="flex flex-col gap-1">
<span className="font-serif text-2xl tracking-tighter text-[#1C1C1E]">The Founders</span>
<span className="text-xs text-[#8E8E93] uppercase tracking-widest">Lino Studios</span>
</div>
</div>
</div>
</section>

<section className="bg-[#EDE8E1] py-24 border-t border-[#1C1C1E]/5" id="contact">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">

<div className="w-full lg:w-5/12 flex flex-col justify-center">
<span className="text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-6 block">Get in Touch</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1E] leading-[1.1] tracking-tight font-medium mb-8">
                    We're Here to Help.
                </h2>
<p className="text-base text-[#1C1C1E]/80 font-light mb-12 leading-relaxed max-w-md">
                    Whether you have a question about our materials, need help with an order, or just want to share your experience, we'd love to hear from you.
                </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 border border-[#1C1C1E] rounded-full flex items-center justify-center flex-shrink-0 text-[#1C1C1E]">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#1C1C1E] mb-1">Email</h4>
<a className="text-sm text-[#8E8E93] font-light hover:text-[#C4714F] transition-colors" href="mailto:hello@lino.com">hello@lino.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 border border-[#1C1C1E] rounded-full flex items-center justify-center flex-shrink-0 text-[#1C1C1E]">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#1C1C1E] mb-1">Phone</h4>
<a className="text-sm text-[#8E8E93] font-light hover:text-[#C4714F] transition-colors" href="tel:+18001234567">+1 (800) 123-4567</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 border border-[#1C1C1E] rounded-full flex items-center justify-center flex-shrink-0 text-[#1C1C1E]">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#1C1C1E] mb-1">Studio</h4>
<p className="text-sm text-[#8E8E93] font-light">123 Artisan Way<br/>Los Angeles, CA 90012</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 bg-white p-8 md:p-12 border border-[#1C1C1E]/5 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-2">First Name</label>
<input className="w-full border-b border-[#EDE8E1] bg-transparent py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E] transition-colors placeholder:text-[#8E8E93]/50" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-2">Last Name</label>
<input className="w-full border-b border-[#EDE8E1] bg-transparent py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E] transition-colors placeholder:text-[#8E8E93]/50" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-2">Email Address</label>
<input className="w-full border-b border-[#EDE8E1] bg-transparent py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E] transition-colors placeholder:text-[#8E8E93]/50" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium uppercase tracking-widest text-[#1C1C1E] mb-2">Message</label>
<textarea className="w-full border-b border-[#EDE8E1] bg-transparent py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E] transition-colors resize-none placeholder:text-[#8E8E93]/50" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full bg-[#1C1C1E] text-white text-sm font-medium py-4 hover:bg-[#C4714F] transition-all text-center mt-4" type="button">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-[#1C1C1E] text-white pt-20 pb-10">
<div className="max-w-[1440px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-4">
<a className="font-serif text-3xl font-medium tracking-tighter uppercase mb-6 block text-[#F5F0EB]" href="#home">LINO</a>
<p className="text-sm text-[#8E8E93] font-light max-w-xs mb-8">
                        Redefining the modern man's sanctuary with exceptionally crafted bath linens and accessories.
                    </p>
<div className="flex gap-4 text-[#F5F0EB]">
<a className="hover:text-[#C4714F] transition-colors" href="#"><iconify-icon icon="fa6-brands:instagram" width="18"></iconify-icon></a>
<a className="hover:text-[#C4714F] transition-colors" href="#"><iconify-icon icon="fa6-brands:pinterest-p" width="18"></iconify-icon></a>
<a className="hover:text-[#C4714F] transition-colors" href="#"><iconify-icon icon="fa6-brands:tiktok" width="18"></iconify-icon></a>
</div>
</div>

<div className="lg:col-span-2">
<h4 className="text-xs font-medium uppercase tracking-widest text-[#F5F0EB] mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-[#8E8E93] font-light">
<li><a className="hover:text-white transition-colors" href="#shop">Towels</a></li>
<li><a className="hover:text-white transition-colors" href="#shop">Bathrobes</a></li>
<li><a className="hover:text-white transition-colors" href="#shop">Bath Mats</a></li>
<li><a className="hover:text-white transition-colors" href="#shop">Accessories</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-xs font-medium uppercase tracking-widest text-[#F5F0EB] mb-6">Company</h4>
<ul className="space-y-4 text-sm text-[#8E8E93] font-light">
<li><a className="hover:text-white transition-colors" href="#about">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Materials</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div className="lg:col-span-4">
<h4 className="text-xs font-medium uppercase tracking-widest text-[#F5F0EB] mb-6">Join the Club</h4>
<p className="text-sm text-[#8E8E93] font-light mb-6">
                        Subscribe for early access to new collections, exclusive events, and 10% off your first order.
                    </p>
<form className="flex border-b border-[#8E8E93]/50 focus-within:border-white transition-colors pb-2">
<input className="bg-transparent w-full outline-none text-sm text-white placeholder:text-[#8E8E93] font-light" placeholder="Email address" type="email"/>
<button className="text-xs font-medium uppercase tracking-widest text-white hover:text-[#C4714F] transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="border-t border-[#8E8E93]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8E8E93] font-light">
<div className="flex items-center gap-6">
<span>© 2026 LINO Studios.</span>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>

<div className="flex gap-3 text-lg text-[#F5F0EB]/50">
<iconify-icon icon="logos:visa" width="30"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="20"></iconify-icon>
<iconify-icon icon="logos:paypal" width="16"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
