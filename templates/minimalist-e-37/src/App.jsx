import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function navigate(viewId) {
          // Hide all views
          document.querySelectorAll('.view-section').forEach(el => {
              el.classList.add('hidden');
              el.classList.remove('block');
          });

          // Show target view
          const targetView = document.getElementById('view-' + viewId);
          if (targetView) {
              targetView.classList.remove('hidden');
              targetView.classList.add('block');
          }

          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });

          // Update Header Nav Links
          document.querySelectorAll('.nav-link').forEach(el => {
              el.classList.remove('border-[#1C1C1C]', 'text-[#1C1C1C]');
              el.classList.add('text-[#5F5F5F]', 'border-transparent');
          });

          // Highlight active link if it exists
          const activeLinks = document.querySelectorAll(`[data-target="${viewId}"]`);
          activeLinks.forEach(el => {
              el.classList.add('border-[#1C1C1C]', 'text-[#1C1C1C]');
              el.classList.remove('text-[#5F5F5F]', 'border-transparent');
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-[#F7F5F0]/80 backdrop-blur-md border-b border-[#E6E2DB] transition-all duration-300">
<div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 h-20 flex items-center">
<div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 w-full gap-x-6 items-center">

<div className="col-span-2 lg:col-span-3">
<a className="text-2xl font-serif font-medium tracking-tight uppercase text-[#1C1C1C]" href="#" onclick="navigate('homepage'); return false;">
              NØRD
            </a>
</div>

<nav className="hidden lg:flex col-span-6 justify-center gap-8">
<a className="nav-link text-sm font-medium text-[#1C1C1C] border-b-2 border-[#1C1C1C] pb-1 uppercase tracking-wider transition-colors" data-target="homepage" href="#" onclick="navigate('homepage'); return false;">
              Homepage
            </a>
<a className="nav-link text-sm font-medium text-[#5F5F5F] hover:text-[#1C1C1C] border-b-2 border-transparent pb-1 uppercase tracking-wider transition-colors" data-target="catalogue" href="#" onclick="navigate('catalogue'); return false;">
              Shop
            </a>
<a className="text-sm font-medium text-[#5F5F5F] hover:text-[#1C1C1C] uppercase tracking-wider transition-colors" href="#">
              Collections
            </a>
<a className="text-sm font-medium text-[#5F5F5F] hover:text-[#1C1C1C] uppercase tracking-wider transition-colors" href="#">
              Journal
            </a>
</nav>

<div className="col-span-2 md:col-span-6 lg:col-span-3 flex justify-end items-center gap-6">
<button aria-label="Search" className="text-[#1C1C1C] hover:text-[#5F5F5F] transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button aria-label="Account" className="hidden md:block text-[#1C1C1C] hover:text-[#5F5F5F] transition-colors" onclick="navigate('profile')">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</button>
<button aria-label="Cart" className="relative text-[#1C1C1C] hover:text-[#5F5F5F] transition-colors flex items-center" onclick="navigate('cart')">
<iconify-icon className="text-xl" icon="solar:cart-large-linear"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-[#1C1C1C] text-white text-xs flex items-center justify-center w-4 h-4 rounded-full font-medium">
                2
              </span>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<div className="view-section block" id="view-homepage">

<section className="relative h-[70vh] min-h-[500px] w-full bg-[#E6E2DB] overflow-hidden">
<img alt="Minimalist interior" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="flex flex-col text-center pr-5 pl-5 absolute top-0 right-0 bottom-0 left-0 gap-x-6 gap-y-6 items-center justify-center">
<h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-[#1C1C1C] max-w-3xl leading-tight">
              Elevate Your Everyday Space
            </h1>
<p className="md:text-xl text-lg font-light text-[#2E2A26] max-w-xl">
              Discover our new collection of meticulously crafted furniture and
              objects designed for mindful living.
            </p>
<button className="mt-4 bg-[#1C1C1C] text-white px-8 py-3.5 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#2E2A26] transition-colors" onclick="navigate('catalogue')">
              Explore Collection
            </button>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 py-24">
<div className="flex justify-between items-end mb-12 border-b border-[#E6E2DB] pb-6">
<h2 className="text-3xl font-serif font-medium tracking-tight text-[#1C1C1C]">
              Curated Essentials
            </h2>
<a className="text-sm font-medium uppercase tracking-wider flex items-center gap-2 hover:text-[#5F5F5F] transition-colors" href="#" onclick="navigate('catalogue'); return false;">
              View All
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group cursor-pointer flex flex-col gap-4" onclick="navigate('catalogue')">
<div className="aspect-[4/5] overflow-hidden bg-white rounded-2xl relative">
<img alt="Seating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-serif font-medium tracking-tight">
                Seating
              </h3>
</div>
<div className="group cursor-pointer flex flex-col gap-4" onclick="navigate('catalogue')">
<div className="aspect-[4/5] overflow-hidden bg-white rounded-2xl relative">
<img alt="Lighting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-serif font-medium tracking-tight">
                Lighting
              </h3>
</div>
<div className="group cursor-pointer flex flex-col gap-4" onclick="navigate('catalogue')">
<div className="aspect-[4/5] overflow-hidden bg-white rounded-2xl relative">
<img alt="Objects" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xl font-serif font-medium tracking-tight">
                Objects
              </h3>
</div>
</div>
</section>
</div>

<div className="view-section hidden" id="view-catalogue">

<section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 pt-16 pb-12">
<div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
<h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#1C1C1C]">
              Shop Collection
            </h1>
<p className="text-lg text-[#5F5F5F] leading-relaxed font-light">
              Curated furniture and home accessories for the modern minimalist
              home.
            </p>
</div>
</section>

<div className="border-y border-[#E6E2DB] bg-[#F7F5F0] sticky top-20 z-40">
<div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 py-4 flex flex-wrap justify-between items-center gap-4">
<nav className="flex gap-6 overflow-x-auto no-scrollbar">
<a className="text-sm font-medium text-[#1C1C1C] uppercase tracking-wider whitespace-nowrap" href="#">
                All Products
              </a>
<a className="text-sm font-medium text-[#9C9C9C] hover:text-[#5F5F5F] uppercase tracking-wider whitespace-nowrap transition-colors" href="#">
                Seating
              </a>
<a className="text-sm font-medium text-[#9C9C9C] hover:text-[#5F5F5F] uppercase tracking-wider whitespace-nowrap transition-colors" href="#">
                Tables
              </a>
<a className="text-sm font-medium text-[#9C9C9C] hover:text-[#5F5F5F] uppercase tracking-wider whitespace-nowrap transition-colors" href="#">
                Lighting
              </a>
<a className="text-sm font-medium text-[#9C9C9C] hover:text-[#5F5F5F] uppercase tracking-wider whitespace-nowrap transition-colors" href="#">
                Storage
              </a>
<a className="text-sm font-medium text-[#9C9C9C] hover:text-[#5F5F5F] uppercase tracking-wider whitespace-nowrap transition-colors" href="#">
                Accessories
              </a>
</nav>
<div className="flex items-center gap-4 text-sm text-[#5F5F5F]">
<span className="hidden sm:inline">Showing 12 of 48 products</span>
<div className="flex items-center gap-2 border-l border-[#E6E2DB] pl-4">
<button className="text-[#1C1C1C] hover:text-[#5F5F5F] transition-colors">
<iconify-icon className="text-xl" icon="solar:widget-5-linear"></iconify-icon>
</button>
<button className="text-[#9C9C9C] hover:text-[#5F5F5F] transition-colors">
<iconify-icon className="text-xl" icon="solar:list-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 py-12">
<div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-6">

<aside className="hidden lg:block col-span-3 pr-8">
<div className="sticky top-40 flex flex-col gap-12">

<div>
<h3 className="text-xs font-medium uppercase tracking-wider text-[#1C1C1C] mb-5">
                    Price Range
                  </h3>
<div className="flex flex-col gap-3.5">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#9C9C9C] rounded-sm peer-checked:bg-[#2E2A26] peer-checked:border-[#2E2A26] transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-lg text-[#1C1C1C] transition-colors font-light">
                        $0 - $200
                      </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#9C9C9C] rounded-sm peer-checked:bg-[#2E2A26] peer-checked:border-[#2E2A26] transition-colors group-hover:border-[#5F5F5F]"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-lg text-[#5F5F5F] group-hover:text-[#1C1C1C] transition-colors font-light">
                        $200 - $500
                      </span>
</label>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#9C9C9C] rounded-sm peer-checked:bg-[#2E2A26] peer-checked:border-[#2E2A26] transition-colors group-hover:border-[#5F5F5F]"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-lg text-[#5F5F5F] group-hover:text-[#1C1C1C] transition-colors font-light">
                        $500+
                      </span>
</label>
</div>
</div>
<div className="h-px w-full bg-[#E6E2DB]"></div>

<div>
<h3 className="text-xs font-medium uppercase tracking-wider text-[#1C1C1C] mb-5">
                    Material
                  </h3>
<div className="flex flex-col gap-3.5">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#9C9C9C] rounded-sm peer-checked:bg-[#2E2A26] peer-checked:border-[#2E2A26] transition-colors group-hover:border-[#5F5F5F]"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-lg text-[#5F5F5F] group-hover:text-[#1C1C1C] transition-colors font-light">
                        Oak
                      </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#9C9C9C] rounded-sm peer-checked:bg-[#2E2A26] peer-checked:border-[#2E2A26] transition-colors group-hover:border-[#5F5F5F]"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-lg text-[#5F5F5F] group-hover:text-[#1C1C1C] transition-colors font-light">
                        Walnut
                      </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#9C9C9C] rounded-sm peer-checked:bg-[#2E2A26] peer-checked:border-[#2E2A26] transition-colors group-hover:border-[#5F5F5F]"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-lg text-[#5F5F5F] group-hover:text-[#1C1C1C] transition-colors font-light">
                        Ceramic
                      </span>
</label>
</div>
</div>
</div>
</aside>

<div className="col-span-4 md:col-span-8 lg:col-span-9">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

<article className="group flex flex-col gap-4 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg">
<div className="absolute top-4 left-4 z-10 bg-[#2E2A26] text-white text-xs px-3 py-1 font-medium tracking-wider uppercase">
                      Best Seller
                    </div>
<img alt="Aalto Lounge Chair" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-col gap-1 px-1">
<h2 className="text-lg font-medium text-[#1C1C1C]">
                      Aalto Lounge Chair
                    </h2>
<p className="text-lg text-[#5F5F5F] font-light">$1,299</p>
</div>
</article>

<article className="group flex flex-col gap-4 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg">
<div className="absolute top-4 left-4 z-10 bg-[#F7F5F0] text-[#1C1C1C] text-xs px-3 py-1 font-medium tracking-wider uppercase border border-[#E6E2DB]">
                      New
                    </div>
<img alt="Nordic Oak Coffee Table" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-col gap-1 px-1">
<h2 className="text-lg font-medium text-[#1C1C1C]">
                      Nordic Oak Coffee Table
                    </h2>
<p className="text-lg text-[#5F5F5F] font-light">$895</p>
</div>
</article>

<article className="group flex flex-col gap-4 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg">
<img alt="Kobe Floor Lamp" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-col gap-1 px-1">
<h2 className="text-lg font-medium text-[#1C1C1C]">
                      Kobe Floor Lamp
                    </h2>
<p className="text-lg text-[#5F5F5F] font-light">$450</p>
</div>
</article>

<article className="group flex flex-col gap-4 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg">
<img alt="Minimalist Sofa" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-col gap-1 px-1">
<h2 className="text-lg font-medium text-[#1C1C1C]">
                      Lumi Fabric Sofa
                    </h2>
<p className="text-lg text-[#5F5F5F] font-light">$2,100</p>
</div>
</article>

<article className="group flex flex-col gap-4 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg">
<img alt="Ceramic Vase" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col gap-1 px-1">
<h2 className="text-lg font-medium text-[#1C1C1C]">
                      Textured Ceramic Vase
                    </h2>
<p className="text-lg text-[#5F5F5F] font-light">$85</p>
</div>
</article>

<article className="group flex flex-col gap-4 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg">
<img alt="Wooden Stool" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-col gap-1 px-1">
<h2 className="text-lg font-medium text-[#1C1C1C]">
                      Ash Wood Stool
                    </h2>
<p className="text-lg text-[#5F5F5F] font-light">$320</p>
</div>
</article>
</div>

<div className="mt-20 flex justify-center">
<button className="bg-transparent border border-[#E6E2DB] text-[#1C1C1C] h-12 px-10 rounded-full font-medium hover:bg-[#F1EEE7] transition-all duration-250 ease-in-out tracking-wide">
                  Load More Products
                </button>
</div>
</div>
</div>
</section>
</div>

<div className="view-section hidden" id="view-product">

<div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 py-8">
<nav className="flex text-sm text-[#9C9C9C] uppercase tracking-wider gap-2">
<a className="hover:text-[#1C1C1C] transition-colors" href="#" onclick="navigate('homepage'); return false;">
              Home
            </a>
<span>/</span>
<a className="hover:text-[#1C1C1C] transition-colors" href="#" onclick="navigate('catalogue'); return false;">
              Seating
            </a>
<span>/</span>
<span className="text-[#1C1C1C]">Aalto Lounge Chair</span>
</nav>
</div>
<section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

<div className="flex flex-col gap-4">
<div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm">
<img alt="Aalto Lounge Chair" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="aspect-square bg-white rounded-xl overflow-hidden cursor-pointer border-2 border-[#1C1C1C]">
<img alt="Thumbnail 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="aspect-square bg-white rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#E6E2DB] transition-colors">
<img alt="Thumbnail 2" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
</div>

<div className="flex flex-col pt-4">
<div className="flex flex-col gap-2 mb-8">
<h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#1C1C1C]">
                  Aalto Lounge Chair
                </h1>
<p className="text-2xl font-light text-[#5F5F5F]">$1,299</p>
</div>
<p className="text-lg text-[#5F5F5F] font-light leading-relaxed mb-10">
                A masterclass in minimal design, the Aalto Lounge Chair offers
                unparalleled comfort without compromising on aesthetic purity.
                Crafted from sustainably sourced natural oak with premium
                upholstery, making it the perfect focal point for any modern
                living space.
              </p>

<div className="flex flex-col gap-6 mb-10">
<div className="flex flex-col gap-3">
<span className="text-xs font-medium uppercase tracking-wider text-[#1C1C1C]">
                    Material
                  </span>
<div className="flex flex-wrap gap-3">
<button className="px-6 py-2 rounded-full border border-[#1C1C1C] bg-[#1C1C1C] text-white text-sm font-medium transition-colors">
                      Natural Oak
                    </button>
<button className="px-6 py-2 rounded-full border border-[#E6E2DB] text-[#5F5F5F] hover:border-[#1C1C1C] hover:text-[#1C1C1C] text-sm font-medium transition-colors bg-white">
                      Smoked Oak
                    </button>
<button className="px-6 py-2 rounded-full border border-[#E6E2DB] text-[#5F5F5F] hover:border-[#1C1C1C] hover:text-[#1C1C1C] text-sm font-medium transition-colors bg-white">
                      Walnut
                    </button>
</div>
</div>
</div>

<div className="flex gap-4 mb-12">
<div className="flex items-center border border-[#E6E2DB] rounded-full px-4 py-3 bg-white">
<button className="text-[#5F5F5F] hover:text-[#1C1C1C] transition-colors flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:minus-linear"></iconify-icon>
</button>
<span className="px-6 text-sm font-medium">1</span>
<button className="text-[#5F5F5F] hover:text-[#1C1C1C] transition-colors flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:add-linear"></iconify-icon>
</button>
</div>
<button className="flex-grow bg-[#1C1C1C] text-white px-8 py-3.5 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#2E2A26] transition-colors flex items-center justify-center gap-2" onclick="navigate('cart')">
<iconify-icon className="text-lg" icon="solar:cart-large-linear"></iconify-icon>
                  Add to Cart
                </button>
</div>

<div className="flex flex-col border-t border-[#E6E2DB]">
<div className="py-5 border-b border-[#E6E2DB] flex justify-between items-center cursor-pointer group">
<span className="text-sm font-medium uppercase tracking-wider text-[#1C1C1C]">
                    Dimensions &amp; Details
                  </span>
<iconify-icon className="text-xl text-[#5F5F5F] group-hover:text-[#1C1C1C] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="py-5 border-b border-[#E6E2DB] flex justify-between items-center cursor-pointer group">
<span className="text-sm font-medium uppercase tracking-wider text-[#1C1C1C]">
                    Shipping &amp; Returns
                  </span>
<iconify-icon className="text-xl text-[#5F5F5F] group-hover:text-[#1C1C1C] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="py-5 border-b border-[#E6E2DB] flex justify-between items-center cursor-pointer group">
<span className="text-sm font-medium uppercase tracking-wider text-[#1C1C1C]">
                    Care Instructions
                  </span>
<iconify-icon className="text-xl text-[#5F5F5F] group-hover:text-[#1C1C1C] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="view-section hidden" id="view-cart">
<section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 py-16">
<h1 className="text-4xl font-serif font-medium tracking-tight text-[#1C1C1C] mb-12">
            Your Cart
          </h1>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 flex flex-col gap-8">
<div className="border-t border-[#E6E2DB]"></div>

<div className="flex gap-6 py-2">
<div className="w-32 h-40 bg-white rounded-xl overflow-hidden flex-shrink-0 border border-[#E6E2DB]">
<img alt="Aalto Lounge Chair" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-between w-full py-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-[#1C1C1C]">
                        Aalto Lounge Chair
                      </h3>
<p className="text-[#5F5F5F] text-sm mt-1 font-light">
                        Material: Natural Oak
                      </p>
</div>
<p className="text-lg font-medium text-[#1C1C1C]">$1,299</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center border border-[#E6E2DB] rounded-full px-3 py-1">
<button className="text-[#5F5F5F] hover:text-[#1C1C1C] transition-colors">
<iconify-icon className="text-lg" icon="solar:minus-circle-linear"></iconify-icon>
</button>
<span className="px-4 text-sm font-medium">1</span>
<button className="text-[#5F5F5F] hover:text-[#1C1C1C] transition-colors">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<button className="text-sm text-[#9C9C9C] hover:text-[#1C1C1C] uppercase tracking-wider font-medium flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                      Remove
                    </button>
</div>
</div>
</div>
<div className="border-t border-[#E6E2DB]"></div>

<div className="flex gap-6 py-2">
<div className="w-32 h-40 bg-white rounded-xl overflow-hidden flex-shrink-0 border border-[#E6E2DB]">
<img alt="Ceramic Vase" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-between w-full py-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-[#1C1C1C]">
                        Textured Ceramic Vase
                      </h3>
<p className="text-[#5F5F5F] text-sm mt-1 font-light">
                        Color: Off-white
                      </p>
</div>
<p className="text-lg font-medium text-[#1C1C1C]">$85</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center border border-[#E6E2DB] rounded-full px-3 py-1">
<button className="text-[#5F5F5F] hover:text-[#1C1C1C] transition-colors">
<iconify-icon className="text-lg" icon="solar:minus-circle-linear"></iconify-icon>
</button>
<span className="px-4 text-sm font-medium">1</span>
<button className="text-[#5F5F5F] hover:text-[#1C1C1C] transition-colors">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<button className="text-sm text-[#9C9C9C] hover:text-[#1C1C1C] uppercase tracking-wider font-medium flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                      Remove
                    </button>
</div>
</div>
</div>
<div className="border-t border-[#E6E2DB]"></div>
</div>

<div className="lg:col-span-4">
<div className="bg-white rounded-2xl p-8 border border-[#E6E2DB] sticky top-28">
<h2 className="text-xl font-serif font-medium tracking-tight text-[#1C1C1C] mb-6">
                  Order Summary
                </h2>
<div className="flex flex-col gap-4 font-light text-[#5F5F5F]">
<div className="flex justify-between">
<span>Subtotal</span>
<span className="text-[#1C1C1C]">$1,384</span>
</div>
<div className="flex justify-between">
<span>Shipping</span>
<span className="text-[#1C1C1C]">Calculated at checkout</span>
</div>
<div className="border-t border-[#E6E2DB] my-2"></div>
<div className="flex justify-between items-center">
<span className="text-[#1C1C1C] font-medium">Total</span>
<span className="text-2xl font-serif font-medium tracking-tight text-[#1C1C1C]">
                      $1,384
                    </span>
</div>
</div>
<button className="w-full mt-8 bg-[#1C1C1C] text-white px-8 py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#2E2A26] transition-colors">
                  Proceed to Checkout
                </button>
<p className="text-xs text-[#9C9C9C] text-center mt-4 tracking-wide">
                  Secure checkout powered by Stripe.
                </p>
</div>
</div>
</div>
</section>
</div>

<div className="view-section hidden" id="view-profile">
<section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 py-16">
<div className="mb-12">
<h1 className="text-4xl font-serif font-medium tracking-tight text-[#1C1C1C]">
              My Account
            </h1>
<p className="text-lg text-[#5F5F5F] font-light mt-2">
              Welcome back, Jane Doe
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<aside className="flex flex-col gap-6 border-r border-[#E6E2DB] pr-8">
<nav className="flex flex-col gap-4">
<a className="text-[#1C1C1C] font-medium text-lg border-l-2 border-[#1C1C1C] pl-4 transition-colors" href="#">
                  Personal Info
                </a>
<a className="text-[#5F5F5F] hover:text-[#1C1C1C] font-light text-lg pl-4 border-l-2 border-transparent transition-colors" href="#">
                  Order History
                </a>
<a className="text-[#5F5F5F] hover:text-[#1C1C1C] font-light text-lg pl-4 border-l-2 border-transparent transition-colors" href="#">
                  Addresses
                </a>
<a className="text-[#5F5F5F] hover:text-[#1C1C1C] font-light text-lg pl-4 border-l-2 border-transparent transition-colors" href="#">
                  Saved Items
                </a>
</nav>
<div className="mt-8 pt-6 border-t border-[#E6E2DB]">
<button className="text-[#9C9C9C] hover:text-[#1C1C1C] font-medium text-sm uppercase tracking-wider transition-colors">
                  Sign Out
                </button>
</div>
</aside>

<div className="md:col-span-3 max-w-2xl">
<h2 className="text-2xl font-serif font-medium tracking-tight text-[#1C1C1C] mb-8">
                Personal Information
              </h2>
<form className="flex flex-col gap-6">
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium uppercase tracking-wider text-[#5F5F5F]">
                      First Name
                    </label>
<input className="w-full bg-transparent border-b border-[#9C9C9C] text-[#1C1C1C] text-lg py-2 focus:outline-none focus:border-[#1C1C1C] transition-colors font-light" type="text" value="Jane"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium uppercase tracking-wider text-[#5F5F5F]">
                      Last Name
                    </label>
<input className="w-full bg-transparent border-b border-[#9C9C9C] text-[#1C1C1C] text-lg py-2 focus:outline-none focus:border-[#1C1C1C] transition-colors font-light" type="text" value="Doe"/>
</div>
</div>
<div className="flex flex-col gap-2 mt-2">
<label className="text-xs font-medium uppercase tracking-wider text-[#5F5F5F]">
                    Email Address
                  </label>
<input className="w-full bg-transparent border-b border-[#9C9C9C] text-[#1C1C1C] text-lg py-2 focus:outline-none focus:border-[#1C1C1C] transition-colors font-light" type="email" value="jane.doe@example.com"/>
</div>
<div className="flex flex-col gap-2 mt-2">
<label className="text-xs font-medium uppercase tracking-wider text-[#5F5F5F]">
                    Password
                  </label>
<input className="w-full bg-transparent border-b border-[#9C9C9C] text-[#1C1C1C] text-lg py-2 focus:outline-none focus:border-[#1C1C1C] transition-colors font-light" type="password" value="********"/>
</div>
<div className="mt-8 flex items-center gap-3">
<label className="relative flex items-center justify-center w-5 h-5 cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-[#9C9C9C] rounded-sm peer-checked:bg-[#2E2A26] peer-checked:border-[#2E2A26] transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none" icon="solar:check-linear"></iconify-icon>
</label>
<span className="text-sm text-[#5F5F5F] font-light">
                    Subscribe to the NØRD newsletter for updates and early
                    access.
                  </span>
</div>
<div className="mt-8">
<button className="bg-[#1C1C1C] text-white px-8 py-3.5 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#2E2A26] transition-colors" type="button">
                    Save Changes
                  </button>
</div>
</form>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-[#2E2A26] text-white mt-auto">
<div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20 py-16">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-6">
<div className="md:col-span-4 flex flex-col gap-6">
<span className="text-2xl font-serif font-medium tracking-tight uppercase">
              NØRD
            </span>
<p className="text-[#9C9C9C] text-lg max-w-xs leading-relaxed font-light">
              Elevating everyday living through intentional, minimalist design.
            </p>
</div>
<div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium uppercase tracking-wider text-white">
                Shop
              </h4>
<a className="text-[#9C9C9C] hover:text-white transition-colors text-lg font-light" href="#" onclick="navigate('catalogue'); return false;">
                All Products
              </a>
<a className="text-[#9C9C9C] hover:text-white transition-colors text-lg font-light" href="#">
                New Arrivals
              </a>
<a className="text-[#9C9C9C] hover:text-white transition-colors text-lg font-light" href="#">
                Best Sellers
              </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium uppercase tracking-wider text-white">
                Company
              </h4>
<a className="text-[#9C9C9C] hover:text-white transition-colors text-lg font-light" href="#">
                About Us
              </a>
<a className="text-[#9C9C9C] hover:text-white transition-colors text-lg font-light" href="#">
                Journal
              </a>
<a className="text-[#9C9C9C] hover:text-white transition-colors text-lg font-light" href="#">
                Contact
              </a>
</div>
<div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
<h4 className="text-sm font-medium uppercase tracking-wider text-white">
                Newsletter
              </h4>
<div className="flex border-b border-[#5F5F5F] pb-2 mt-2">
<input className="bg-transparent border-none outline-none text-white placeholder:text-[#5F5F5F] w-full text-lg font-light" placeholder="Email address" type="email"/>
<button className="text-white hover:text-[#9C9C9C] transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-[#5F5F5F] flex flex-col sm:flex-row justify-between items-center gap-4 text-[#9C9C9C] text-sm font-light">
<p>© 2024 NØRD. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
