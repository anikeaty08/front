import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function toggleBenefit(index) {
        for (let i = 1; i <= 3; i++) {
          const isSelected = i === index;
          
          // Toggle Images
          const img = document.getElementById(`benefit-img-${i}`);
          if (img) img.style.opacity = isSelected ? '1' : '0';
          
          // Toggle Text Content Height (Accordion)
          const content = document.getElementById(`benefit-content-${i}`);
          if (content) content.className = isSelected
            ? 'grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out'
            : 'grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out';
            
          // Toggle Inner Opacity
          const inner = document.getElementById(`benefit-inner-${i}`);
          if (inner) {
            inner.className = isSelected
              ? 'pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100'
              : 'pt-0 pb-0 opacity-0 transition-opacity duration-500';
          }
          
          // Toggle Styling (Active vs Inactive)
          const title = document.getElementById(`benefit-title-${i}`);
          if (title) {
            title.className = isSelected
              ? 'text-xl md:text-2xl font-medium tracking-tight transition-colors text-neutral-900'
              : 'text-xl md:text-2xl font-medium tracking-tight transition-colors text-neutral-400';
          }
          
          const num = document.getElementById(`benefit-num-${i}`);
          if (num) {
            num.className = isSelected
              ? 'text-sm font-mono transition-colors pt-1.5 text-neutral-900'
              : 'text-sm font-mono transition-colors pt-1.5 text-neutral-400';
          }

          const icon = document.getElementById(`benefit-icon-${i}`);
          if (icon) {
             icon.className = isSelected 
             ? 'transition-colors text-neutral-900' 
             : 'transition-colors text-neutral-400';
          }
        }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-neutral-200/50">
<div className="md:h-20 flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="uppercase text-sm font-semibold text-neutral-900 tracking-widest" href="#">EASYCUBE FRIDGE</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500 gap-x-8 gap-y-8">
<a className="transition-colors hover:text-neutral-900" href="#benefits">Product benefits</a>
<a className="transition-colors hover:text-neutral-900" href="#how-it-works">How it Works</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 transition-all group hover:bg-neutral-800 hover:shadow-md text-xs font-medium text-white tracking-wide bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#pilot-form">
                Join Pilot Program
                <iconify-icon className="text-white group-hover:translate-x-0.5 transition-transform" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<button aria-label="Open menu" className="md:hidden p-2 text-neutral-600">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="md:pt-40 md:pb-24 overflow-hidden pt-32 pb-16 relative">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-10 gap-x-10 gap-y-10">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-600 mb-2">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            Accepting Pilot Applications
                        </div>
<h1 className="md:text-8xl lg:text-9xl leading-[0.85] uppercase text-7xl font-medium text-neutral-900 tracking-tighter font-display">EASYCUBE</h1>
<div className="flex gap-4 flex-wrap gap-x-4 gap-y-4 items-center">
<div className="md:h-20 md:w-48 overflow-hidden shrink-0 w-32 h-16 border-neutral-200 border rounded-full relative">
<img alt="Logistics Dashboard" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ac27de6-317a-490a-a9b2-f8ab2a1506ce_800w.webp"/>
</div>
<h1 className="md:text-8xl lg:text-9xl leading-[0.85] uppercase text-7xl font-medium text-neutral-900 tracking-tighter font-display">— fridge</h1>
</div>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-4">
<p className="leading-relaxed text-lg font-normal text-neutral-500 max-w-md">Chilled storage system that give flexible pickup with no delivery coordination chaos. Fresh and safe storage</p>
<a className="inline-flex items-center justify-center uppercase transition-all shrink-0 hover:bg-neutral-800 hover:shadow-xl shadow-neutral-900/10 text-xs font-semibold text-white tracking-wider bg-neutral-900 h-12 rounded-full pr-8 pl-8 shadow-lg" href="#pilot-form">
                            Apply for Access
                        </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-100">
<div className="">
<span className="block text-4xl text-neutral-900 tracking-tight font-display">24/7</span>
<span className="text-xs font-medium text-neutral-500">Operate round the clock</span>
</div>
<div className="">
<span className="block text-4xl text-neutral-900 tracking-tight font-display">0 failure</span>
<span className="text-xs font-medium text-neutral-500">Collect on their own</span>
</div>
<div className="hidden md:block">
<span className="block text-4xl text-neutral-900 tracking-tight font-display">0-4 degree</span>
<span className="text-xs font-medium text-neutral-500">Keep your item fresh </span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-[650px] rounded-[20px] overflow-hidden bg-neutral-100 border border-neutral-200">
<img alt="Logistics Network" className="-translate-x-4 text-left opacity-100 w-full h-full object-cover translate-x-1 scale-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2d7b9a5-5425-4617-94aa-2b21091884e9_1600w.png"/>
<div className="bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0 scale-100 justify-between"></div>
<div className="absolute top-6 right-6 z-20">
<div className="bg-white/90 backdrop-blur-md border border-white/50 px-4 py-2 rounded-lg shadow-sm">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-semibold tracking-tight">System Operational</span>
</div>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8 text-white z-20">
<div className="flex items-center gap-2 mb-3 text-white/80">
<iconify-icon height="18" icon="solar:route-linear" width="18"></iconify-icon>
<span className="uppercase text-xs font-medium tracking-wider">Self pick up</span>
</div>
<p className="leading-relaxed text-sm font-light text-white/90 max-w-sm">Pick up of chilled product will not be constraint by time, short pick up window.</p>
</div>
</div>
</div>
</div>
</header>

<div className="border-y overflow-hidden bg-neutral-50 w-full border-neutral-100 py-12 relative group">
<div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-neutral-50 to-transparent"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-neutral-50 to-transparent"></div>
<div className="flex gap-24 items-center animate-scroll whitespace-nowrap w-max">

<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">SME</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Home Bakers</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Florist</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Meal Kits</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Supermarkets</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Pharmacies</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Cloud Kitchens</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Beverage Brands</span>

<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">SME</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Home Bakers</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Florist</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Meal Kits</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Supermarkets</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Pharmacies</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Cloud Kitchens</span>
<span className="text-xl font-semibold tracking-tight text-neutral-400 grayscale opacity-70">Beverage Brands</span>
</div>
</div>

<section className="bg-white border-neutral-200 border-b pt-24 pr-6 pb-24 pl-6" id="benefits">
<div className="max-w-7xl mr-auto ml-auto">
<span className="uppercase block text-xl font-semibold text-neutral-500 tracking-widest mb-12">Product Benefits</span>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative items-start">

<div className="lg:w-1/2 lg:sticky lg:top-32 lg:h-[500px] overflow-hidden order-2 lg:order-1 group bg-neutral-50 w-full h-[400px] border-neutral-100 border rounded-2xl relative shadow-sm">
<div className="z-10 bg-neutral-100/50 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Routing" className="transition-opacity duration-700 z-0 opacity-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" id="benefit-img-1" src="https://images.unsplash.com/photo-1482932973216-15c6808e8691?w=1600&amp;q=80"/>
<img alt="Cost" className="transition-opacity duration-700 z-0 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" id="benefit-img-2" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1600&amp;q=80"/>
<img alt="Analytics" className="transition-opacity duration-700 z-0 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" id="benefit-img-3" src="https://images.unsplash.com/photo-1568658176307-bfbd2873abda?w=1600&amp;q=80"/>
</div>

<div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-2">

<div className="cursor-pointer group border-neutral-200 border-b pt-6 pb-6" onclick="toggleBenefit(1)">
<div className="flex gap-6 items-start">
<span className="text-sm font-mono transition-colors pt-1.5 text-neutral-900" id="benefit-num-1">01</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-center w-full mb-2">
<h3 className="md:text-2xl transition-colors text-xl font-medium text-neutral-900 tracking-tight" id="benefit-title-1">Designed for Business Owner</h3>
<iconify-icon className="transition-colors text-neutral-900" height="20" icon="solar:map-arrow-right-linear" id="benefit-icon-1" width="20"></iconify-icon>
</div>
<div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out" id="benefit-content-1">
<div className="overflow-hidden">
<div className="transition-opacity duration-500 opacity-100 pt-2 pb-4" id="benefit-inner-1">
<p className="leading-relaxed text-sm text-neutral-500 max-w-md mb-4">Simple workflow with no fuss</p>
<ul className="space-y-2">
<li className="flex gap-2 text-xs font-medium text-neutral-600 gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                                                    Seller prepares the order
                                                </li>
<li className="flex gap-2 text-xs font-medium text-neutral-600 gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                                                    Drops it at a nearby chilled storage point
                                                </li>
<li className="flex gap-2 text-xs font-medium text-neutral-600 gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                                                    Customer picks up at their convenience
                                                </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="cursor-pointer group border-neutral-200 border-b pt-6 pb-6" onclick="toggleBenefit(2)">
<div className="flex gap-6 items-start">
<span className="transition-colors text-sm text-neutral-400 font-mono pt-1.5" id="benefit-num-2">02</span>
<div className="flex-1 w-full">
<div className="flex w-full mb-2 items-center justify-between">
<h3 className="md:text-2xl transition-colors text-xl font-medium text-neutral-400 tracking-tight" id="benefit-title-2">Unlock New Market</h3>
<svg className="transition-colors text-neutral-400" data-icon-set="solar" data-solar="chart-2-linear" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path className="" d="M3 22h18" strokeLinecap="round" strokeLinejoin="round"></path><path className="" d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z"></path></g></svg>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="benefit-content-2">
<div className="overflow-hidden">
<div className="transition-opacity duration-500 opacity-0 pt-0 pb-0" id="benefit-inner-2">
<p className="leading-relaxed text-sm text-neutral-500 max-w-md mb-4">Access wider customer bases with shared infrastructure.</p>
<ul className="space-y-2">
<li className="flex gap-2 text-xs font-medium text-neutral-600 items-center">
<iconify-icon className="" icon="solar:check-circle-linear" width="14"></iconify-icon>
                                                    Expand customer reach beyond nearby areas
                                                </li>
<li className="flex gap-2 text-xs font-medium text-neutral-600 gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                                                    Shared chilled storage access
                                                </li>
<li className="flex gap-2 text-xs font-medium text-neutral-600 gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                                                    Reduce failed deliveries
                                                </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="cursor-pointer group border-neutral-200 border-b pt-6 pb-6" onclick="toggleBenefit(3)">
<div className="flex gap-6 gap-x-6 gap-y-6 items-start">
<span className="text-sm font-mono transition-colors pt-1.5 text-neutral-400" id="benefit-num-3">03</span>
<div className="flex-1 w-full">
<div className="flex w-full mb-2 items-center justify-between">
<h3 className="md:text-2xl transition-colors text-xl font-medium text-neutral-400 tracking-tight" id="benefit-title-3">Flexible</h3>
<iconify-icon className="transition-colors text-neutral-400" height="20" icon="solar:box-minimalistic-linear" id="benefit-icon-3" width="20"></iconify-icon>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="benefit-content-3">
<div className="overflow-hidden">
<div className="transition-opacity duration-500 opacity-0 pt-0 pb-0" id="benefit-inner-3">
<p className="leading-relaxed text-sm text-neutral-500 max-w-md mb-4">Versatile storage options for various needs.</p>
<ul className="space-y-2">
<li className="flex gap-2 text-xs font-medium text-neutral-600 gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                                                    Our system accommodate to different item size
                                                </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 border-neutral-200 border-b pt-24 pr-6 pb-24 pl-6" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="mb-20 text-center">
<span className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-2 block">Workflow</span>
<h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 tracking-tighter uppercase">How it works</h2>
</div>
<div className="relative">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 md:-translate-x-1/2 border-l border-dashed border-neutral-300"></div>
<div className="space-y-16">

<div className="flex flex-col md:flex-row md:gap-16 relative gap-x-8 gap-y-8 items-center">
<div className="w-full md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-8 order-1">
<div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm relative group hover:shadow-md transition-all">
<div className="h-48 w-full overflow-hidden rounded-lg mb-4 bg-neutral-100">
<img alt="Order" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d3f1d52-8e21-4869-be4b-1abebaa0fe66_1600w.webp"/>
</div>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-2">01. Placing Order</h3>
<p className="leading-relaxed text-sm text-neutral-500">Customer places an order via your usual channel (Website, Instagram, WhatsApp, Shopify, Telegram, etc.).</p>
</div>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-neutral-900 z-10 shadow-sm top-8 md:top-1/2 md:-translate-y-1/2"></div>
<div className="hidden md:block w-1/2 order-2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="hidden md:block w-1/2 order-1"></div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-neutral-900 z-10 shadow-sm top-8 md:top-1/2 md:-translate-y-1/2"></div>
<div className="w-full md:w-1/2 pl-20 md:pl-8 order-2">
<div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm relative group hover:shadow-md transition-all">
<div className="h-48 w-full overflow-hidden rounded-lg mb-4 bg-neutral-100">
<img alt="Select Option" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&amp;q=80"/>
</div>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-2">02. Booking page</h3>
<p className="leading-relaxed text-sm text-neutral-500">Delivery option can be integrated to your platform or simply access through our booking page</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="w-full md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-8 order-1">
<div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm relative group hover:shadow-md transition-all">
<div className="h-48 w-full overflow-hidden rounded-lg mb-4 bg-neutral-100">
<img alt="Booking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1649433391719-2e784576d044?w=1600&amp;q=80"/>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">03. Book a Slot</h3>
<p className="leading-relaxed text-sm text-neutral-500">Use the booking page to reserve a drop-off slot at the nearest chilled location.</p>
</div>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-neutral-900 z-10 shadow-sm top-8 md:top-1/2 md:-translate-y-1/2"></div>
<div className="hidden md:block w-1/2 order-2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="hidden md:block w-1/2 order-1"></div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-neutral-900 z-10 shadow-sm top-8 md:top-1/2 md:-translate-y-1/2"></div>
<div className="w-full md:w-1/2 pl-20 md:pl-8 order-2">
<div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm relative group hover:shadow-md transition-all">
<div className="h-48 w-full overflow-hidden rounded-lg mb-4 bg-neutral-100">
<img alt="Packing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1708861618433-01ba6ad4b6b0?w=1600&amp;q=80"/>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">04. Pack &amp; Label</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Place items into a packing bag provided, label with POS slip or receipt, and prepare for drop-off.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="w-full md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-8 order-1">
<div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm relative group hover:shadow-md transition-all">
<div className="h-48 w-full overflow-hidden rounded-lg mb-4 bg-neutral-100">
<img alt="Drop Off" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600186755589-84242bd8368f?w=1600&amp;q=80"/>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">05. Drop Off</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Bring the order to the selected location within your scheduled drop-off window.</p>
</div>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-neutral-900 z-10 shadow-sm top-8 md:top-1/2 md:-translate-y-1/2"></div>
<div className="hidden md:block w-1/2 order-2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="hidden md:block w-1/2 order-1"></div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-neutral-900 z-10 shadow-sm top-8 md:top-1/2 md:-translate-y-1/2"></div>
<div className="w-full md:w-1/2 pl-20 md:pl-8 order-2">
<div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm relative group hover:shadow-md transition-all">
<div className="h-48 w-full overflow-hidden rounded-lg mb-4 bg-neutral-100">
<img alt="Pickup" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1711029028450-f6dd62bd7a84?w=1600&amp;q=80"/>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">06. Customer Pickup</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Customer receives pickup details and collects at their convenience with a pin.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-neutral-200 border-b py-24 px-6">
<div className="max-w-7xl mx-auto">

<div className="mb-16 max-w-2xl">
<span className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-2 block">Value Proposition</span>
<h2 className="text-3xl md:text-4xl font-display font-medium text-neutral-900 tracking-tighter uppercase">Why it works for business owners</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="flex group-hover:scale-110 transition-transform text-neutral-900 bg-neutral-50 w-12 h-12 border-neutral-100 border rounded-lg mb-6 items-center justify-center">
<svg className="w-[24px] h-[24px]" data-icon-set="solar" data-solar="layers-minimalistic-linear" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></path><path d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" strokeLinecap="round"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight mb-3">Integrate to your existing system</h3>
<p className="leading-relaxed text-sm font-normal text-neutral-500">Whether it is your own booking page or manual order taking, our booking page will be integrated easily via google form, Shopify plug-ins or API</p>
</div>

<div className="group">
<div className="flex group-hover:scale-110 transition-transform text-neutral-900 bg-neutral-50 w-12 h-12 border-neutral-100 border rounded-lg mb-6 items-center justify-center">
<svg className="" data-icon-set="solar" data-solar="wallet-money-linear" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor"><path d="M6 10h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M20.833 11h-2.602C16.446 11 15 12.343 15 14s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933c-.035-.002-.076-.002-.16-.002Z" strokeWidth="1.5"></path><path d="M20.965 11c-.078-1.872-.328-3.02-1.137-3.828C18.657 6 16.771 6 13 6h-3C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828" strokeWidth="1.5"></path><path d="m6 6l3.735-2.477a3.24 3.24 0 0 1 3.53 0L17 6" strokeLinecap="round" strokeWidth="1.5"></path><path d="M17.991 14h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-neutral-900 tracking-tight mb-3">Cost-effective</h3>
<p className="leading-relaxed text-sm font-normal text-neutral-500">Pay per use. No high cost in subscription or finding delivery partners that is costly.</p>
</div>

<div className="group">
<div className="flex group-hover:scale-110 transition-transform text-neutral-900 bg-neutral-50 w-12 h-12 border-neutral-100 border rounded-lg mb-6 items-center justify-center">
<svg className="" data-icon-set="solar" data-solar="shield-check-linear" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path><path d="m9.5 12.4l1.429 1.6l3.571-4" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Secure</h3>
<p className="leading-relaxed text-sm font-normal text-neutral-500">The package each carry a unique ID which will be binded to a security PIN. This PIN will be send over to your customers via SMS only.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-neutral-50 pt-24 pr-6 pb-24 pl-6" id="pilot-form">
<div className="max-w-4xl mr-auto ml-auto">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-neutral-900 tracking-tight mb-4">Join the Pilot Program</h2>
<p className="leading-relaxed text-base text-neutral-500 max-w-lg mr-auto mb-2 ml-auto">Express your interest where we
        will map out the potential delivery point. Tell us more about you!</p>
</div>
<div className="bg-white rounded-2xl shadow-xl shadow-neutral-200/40 border border-neutral-200 overflow-hidden">
<div className="md:p-10 pt-8 pr-8 pb-8 pl-8">

<form action="https://formsubmit.co/easycubesg@gmail.com" className="space-y-6" method="POST">
<input name="_subject" type="hidden" value="New Pilot Application"/>
<input name="_captcha" type="hidden" value="false"/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 ml-1" htmlFor="name">Full Name</label>
<input className="focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors hover:bg-white placeholder:text-neutral-400 text-sm bg-neutral-50 w-full h-12 border-neutral-200 border rounded-lg pr-4 pl-4" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 ml-1" htmlFor="email">Email Address</label>
<input className="focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors hover:bg-white placeholder:text-neutral-400 text-sm bg-neutral-50 w-full h-12 border-neutral-200 border rounded-lg pr-4 pl-4" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 ml-1" htmlFor="company">Company Name</label>
<input className="focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors hover:bg-white placeholder:text-neutral-400 text-sm bg-neutral-50 w-full h-12 border-neutral-200 border rounded-lg pr-4 pl-4" id="company" name="company" placeholder="Acme Logistics" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 ml-1" htmlFor="business-type">Business Type</label>
<div className="relative">
<select className="focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors hover:bg-white cursor-pointer text-sm text-neutral-700 bg-neutral-50 w-full h-12 border-neutral-200 border rounded-lg pr-4 pl-4" id="business-type" name="business-type" required="">
<option className="" disabled="" selected="" value="">Select type...</option>
<option className="" value="Retail Shop">Retails Shop</option>
<option className="" value="Home Based">Home based business</option>
<option className="" value="Ecommerce">Shopee, Tiktok live, lazada</option>
<option className="" value="Online Store">Web store / chat group</option>
<option className="" value="Other">Others</option>
</select>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 ml-1" htmlFor="delivery-method">Current Delivery Method</label>
<div className="relative">
<select className="focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors hover:bg-white cursor-pointer text-sm text-neutral-700 bg-neutral-50 w-full h-12 border-neutral-200 border rounded-lg pr-4 pl-4" id="delivery-method" name="delivery-method" required="">
<option className="" disabled="" selected="" value="">Select method...</option>
<option className="" value="3rd Party Courier">3rd Party delivery courier</option>
<option className="" value="Delivery Partners">Delivery Partners (Grab / Foodpanda)</option>
<option className="" value="In-house Fleet">In-house Fleet</option>
<option className="" value="Others">Others</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 ml-1" htmlFor="volume">Deliveries per day</label>
<input className="w-full h-12 px-4 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors bg-neutral-50 hover:bg-white placeholder:text-neutral-400" id="volume" name="volume" placeholder="e.g. 50" required="" type="number"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 ml-1" htmlFor="cost">Avg. Cost of Delivery ($)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-sm">$</span>
<input className="w-full h-12 pl-8 pr-4 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-colors bg-neutral-50 hover:bg-white placeholder:text-neutral-400" id="cost" name="cost" placeholder="0.00" required="" step="0.01" type="number"/>
</div>
</div>
<div className="pt-4 gap-x-3 gap-y-3">
<button className="transition-all flex hover:bg-neutral-800 shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5 text-sm font-medium text-white bg-neutral-900 w-full h-14 rounded-xl shadow-lg gap-x-3 gap-y-3 items-center justify-center" type="submit">
                                Submit Application
                                <iconify-icon className="" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-[11px] text-neutral-400 text-center mt-4">By clicking submit, you agree to our Terms of
              Service. Your data is secure.</p>
</div>
</form>
</div>

<div className="bg-neutral-900 px-8 py-10 md:px-10 border-t border-neutral-800">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-emerald-400" height="16" icon="solar:star-fall-linear" width="16"></iconify-icon>
</div>
<h3 className="text-white font-medium tracking-tight">Pilot Member Benefits</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-3">
<span className="text-neutral-500 font-mono text-xs uppercase tracking-widest">Rate Lock</span>
<p className="leading-relaxed text-sm font-light text-neutral-200">Secure pilot-exclusive pricing for 6 months
              regardless of volume fluctuation.</p>
</div>
<div className="flex flex-col gap-3">
<span className="text-neutral-500 font-mono text-xs uppercase tracking-widest">Priority</span>
<p className="leading-relaxed text-sm font-light text-neutral-200">Direct Telegram channel access to
              chatbot-assist booking system and latest update</p>
</div>
<div className="flex flex-col gap-3">
<span className="text-neutral-500 font-mono text-xs uppercase tracking-widest">Data</span>
<p className="leading-relaxed text-sm font-light text-neutral-200">Full access to raw historical data and
              predictive analytics dashboards.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-12 px-6 bg-white border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<a className="uppercase block text-sm font-semibold text-neutral-900 tracking-widest mb-6" href="#">EASYCUBE FRIDGE</a>
<p className="text-neutral-500 text-sm leading-relaxed font-normal">
                        Redefining last-mile logistics through algorithmic routing and sustainable fleet management.
                    </p>
</div>
<div className="flex gap-16 md:gap-24">
<div className="">
<ul className="space-y-4 text-sm text-neutral-500">
<li className=""></li>
</ul>
</div>
<div className="">
<ul className="space-y-4 text-sm text-neutral-500">
<li className=""></li>
</ul>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-neutral-100">
<p className="text-xs text-neutral-400">© 2026 EASYCUBE SG PTE LTD All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="18" icon="solar:brand-x-linear" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="18" icon="solar:brand-linkedin-linear" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="18" icon="solar:brand-github-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
