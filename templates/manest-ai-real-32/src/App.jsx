import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function openPDP() {
            const overlay = document.getElementById('pdp-overlay');
            const main = document.getElementById('discovery-screen');
            
            overlay.classList.remove('hidden');
            // Small delay to allow display:block to apply before animating opacity
            setTimeout(() => {
                overlay.classList.remove('hide-overlay');
                overlay.classList.add('show-overlay');
                main.style.opacity = '0.3';
            }, 10);
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }

        function closePDP() {
            const overlay = document.getElementById('pdp-overlay');
            const main = document.getElementById('discovery-screen');
            
            overlay.classList.remove('show-overlay');
            overlay.classList.add('hide-overlay');
            main.style.opacity = '1';
            
            // Wait for transition to finish before hiding
            setTimeout(() => {
                overlay.classList.add('hidden');
                // Restore body scroll
                document.body.style.overflow = 'auto';
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="flex flex-col lg:flex-row h-screen w-full transition-opacity duration-500" id="discovery-screen">

<section className="lg:h-full lg:w-3/5 lg:border-b-0 lg:border-r map-bg overflow-hidden flex-shrink-0 h-[45vh] border-neutral-200 border-b relative">

<div className="absolute top-6 left-6 z-20">
<h1 className="text-xl font-medium tracking-tight uppercase letter-spacing-[0.1em] text-neutral-800">Manest</h1>
</div>

<div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2">
<button className="backdrop-blur p-2.5 rounded-lg shadow-sm border transition-colors bg-white/90 border-neutral-200 hover:bg-white text-neutral-600">
<iconify-icon height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
<button className="backdrop-blur p-2.5 rounded-lg shadow-sm border transition-colors bg-white/90 border-neutral-200 hover:bg-white text-neutral-600">
<iconify-icon height="20" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</button>
</div>


<div className="absolute top-[45%] left-[35%] group cursor-pointer z-10 hover:z-30" onclick="openPDP()">
<div className="relative flex items-center justify-center">
<div className="absolute w-8 h-8 rounded-full animate-ping bg-neutral-900/15"></div>
<div className="w-4 h-4 rounded-full ring-4 shadow-md z-10 transition-transform duration-300 group-hover:scale-110 bg-neutral-900 ring-white"></div>

<div className="absolute bottom-full mb-3 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border w-48 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto flex flex-col overflow-hidden origin-bottom bg-white border-neutral-100">
<div className="relative h-28 w-full flex-shrink-0 bg-neutral-100">
<img alt="Property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-2 left-2 backdrop-blur text-[10px] font-medium px-1.5 py-0.5 rounded flex items-center gap-1 bg-neutral-900/80 text-white">
<iconify-icon className="text-yellow-400" icon="solar:star-fall-linear" width="10"></iconify-icon> 98% Match
                            </div>
</div>
<div className="p-3 bg-white">
<div className="text-base font-medium tracking-tight truncate mb-0.5 text-neutral-900">Prestige Shantiniketan</div>
<div className="text-sm text-neutral-500 mb-2 truncate">Whitefield, Bangalore</div>
<div className="flex items-center justify-between mt-1 pt-2 border-t border-neutral-50">
<span className="text-base font-medium tracking-tight">₹2.40 Cr</span>
<div className="flex gap-2 text-sm text-neutral-500">
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:bed-linear" width="14"></iconify-icon> 3</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:bath-linear" width="14"></iconify-icon> 3</span>
</div>
</div>
</div>

<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-b border-r shadow-[2px_2px_4px_rgba(0,0,0,0.05)] bg-white border-neutral-100"></div>
</div>
</div>
</div>

<div className="absolute top-[30%] left-[55%] group cursor-pointer z-10 hover:z-30" onclick="openPDP()">
<div className="relative flex items-center justify-center">
<div className="w-3.5 h-3.5 bg-neutral-500 group-hover:bg-neutral-900 rounded-full ring-4 shadow-sm z-10 transition-all duration-300 group-hover:scale-110 ring-white"></div>

<div className="absolute bottom-full mb-3 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border w-48 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto flex flex-col overflow-hidden origin-bottom bg-white border-neutral-100">
<div className="relative h-28 w-full flex-shrink-0 bg-neutral-100">
<img alt="Property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-2 left-2 backdrop-blur border text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/90 border-neutral-200 text-neutral-800">
                                92% Match
                            </div>
</div>
<div className="p-3 bg-white">
<div className="text-base font-medium tracking-tight truncate mb-0.5 text-neutral-900">Sobha Habitech</div>
<div className="text-sm text-neutral-500 mb-2 truncate">Hope Farm Junction</div>
<div className="flex items-center justify-between mt-1 pt-2 border-t border-neutral-50">
<span className="text-base font-medium tracking-tight">₹1.85 Cr</span>
<div className="flex gap-2 text-sm text-neutral-500">
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:bed-linear" width="14"></iconify-icon> 3</span>
<span className="flex items-center gap-0.5"><iconify-icon icon="solar:bath-linear" width="14"></iconify-icon> 2</span>
</div>
</div>
</div>
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-b border-r shadow-[2px_2px_4px_rgba(0,0,0,0.05)] bg-white border-neutral-100"></div>
</div>
</div>
</div>

<div className="absolute top-[60%] left-[65%] group cursor-pointer z-10 hover:z-30" onclick="openPDP()">
<div className="relative flex items-center justify-center">
<div className="w-3 h-3 group-hover:bg-neutral-900 rounded-full ring-2 shadow-sm z-10 transition-all duration-300 group-hover:scale-125 bg-neutral-400 ring-white"></div>
<div className="absolute bottom-full mb-2 border text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 left-1/2 -translate-x-1/2 pointer-events-none bg-white border-neutral-200 text-neutral-800">
                        88% Match
                    </div>
</div>
</div>

<div className="absolute top-[70%] left-[40%] group cursor-pointer z-10 hover:z-30" onclick="openPDP()">
<div className="relative flex items-center justify-center">
<div className="w-3 h-3 group-hover:bg-neutral-900 rounded-full ring-2 shadow-sm z-10 transition-all duration-300 group-hover:scale-125 bg-neutral-400 ring-white"></div>
</div>
</div>

<div className="absolute top-[20%] left-[25%] group cursor-pointer z-10 hover:z-30" onclick="openPDP()">
<div className="relative flex items-center justify-center">
<div className="w-3 h-3 group-hover:bg-neutral-900 rounded-full ring-2 shadow-sm z-10 transition-all duration-300 group-hover:scale-125 bg-neutral-400 ring-white"></div>
</div>
</div>
</section>

<section className="lg:h-full lg:w-2/5 flex flex-col z-20 lg:shadow-none bg-white h-[50vh] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">

<div className="p-6 pb-5 border-b flex-shrink-0 z-30 border-neutral-200 bg-white">

<div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5 mb-5">

<div className="flex w-full xl:max-w-[280px] items-center rounded-lg border overflow-hidden focus-within:border-neutral-900 transition-colors shadow-sm border-neutral-300 bg-white">
<input className="flex-1 px-4 py-2 text-base outline-none placeholder:text-neutral-400 text-neutral-900" type="text" value="San Francisco, CA"/>
<button className="hover:bg-[#c43620] transition-colors flex self-stretch text-white bg-[#D93C23] pt-2 pr-4 pb-2 pl-4 items-center justify-center">
<svg className="lucide lucide-search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</button>
</div>

<div className="flex items-center gap-6 text-base font-medium text-neutral-800">
<a className="hover:text-neutral-500 transition-colors" href="#">Buy</a>
<a className="hover:text-neutral-500 transition-colors" href="#">Rent</a>
<a className="hover:text-neutral-500 transition-colors" href="#">Mortgage</a>
</div>
</div>

<div className="flex flex-wrap items-center gap-2.5 relative">

<div className="relative group">
<button className="flex items-center gap-2 px-3.5 py-2 rounded-md border border-transparent text-sm font-medium transition-colors cursor-pointer bg-neutral-200/60 text-neutral-900">
<span className="w-2.5 h-2.5 rounded-full bg-[#1e8b84]"></span>
                            $1m - $4m
                            <svg className="lucide lucide-chevron-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>

</div>

<button className="flex items-center gap-2 px-3.5 py-2 rounded-md border text-sm font-medium transition-colors bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-50">
                        All Beds
                        <svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-2 px-3.5 py-2 rounded-md border text-sm font-medium transition-colors bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-50">
                        All Home Types
                        <svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="flex items-center gap-2 px-3.5 py-2 rounded-md border text-sm font-medium transition-colors bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-50">
                        More
                        <svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<button className="ml-auto px-4 py-2 rounded-md border border-[#1e8b84] text-sm font-medium text-[#1e8b84] hover:bg-[#1e8b84]/5 transition-colors bg-white">
                        Save Search
                    </button>
</div>
</div>

<div className="p-6 border-b flex-shrink-0 border-neutral-100 bg-neutral-50/30">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-100 text-neutral-700">
<iconify-icon height="18" icon="solar:cpu-linear" width="18"></iconify-icon>
</div>
<div>
<h2 className="text-base font-medium tracking-tight">Manest AI Assistant</h2>
<p className="text-sm text-neutral-500">Searching Market</p>
</div>
</div>

<div className="space-y-4 text-base">

<div className="flex justify-end">
<div className="border rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm bg-neutral-100 border-neutral-200 text-neutral-800">
<p className="leading-relaxed">2 kids, elderly parents, need 3BHK near good schools</p>
</div>
</div>

<div className="flex justify-start">
<div className="pr-8 text-neutral-600">
<p className="leading-relaxed">I've scanned the market based on your criteria. Focusing on ground-floor accessibility for your parents and proximity to top-rated schools. Here are the best matches found.</p>
</div>
</div>
</div>

<div className="mt-5 flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 border px-2.5 py-1 rounded-md text-sm font-medium bg-white border-neutral-200 text-neutral-700">
<iconify-icon icon="solar:home-linear" width="16"></iconify-icon>
                        3BHK Required
                    </div>
<div className="flex items-center gap-1.5 border px-2.5 py-1 rounded-md text-sm font-medium bg-white border-neutral-200 text-neutral-700">
<iconify-icon icon="solar:wheelchair-linear" width="16"></iconify-icon>
                        Elderly Access
                    </div>
<div className="flex items-center gap-1.5 border px-2.5 py-1 rounded-md text-sm font-medium bg-white border-neutral-200 text-neutral-700">
<iconify-icon icon="solar:diploma-linear" width="16"></iconify-icon>
                        Near Schools
                    </div>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-neutral-50/50 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Top Recommendations</h3>
<span className="text-sm text-neutral-400">3 properties</span>
</div>
<div className="space-y-3">

<div className="rounded-xl p-3 border shadow-sm flex gap-4 cursor-pointer relative overflow-hidden group bg-white border-neutral-900" onclick="openPDP()">
<div className="bg-neutral-900 w-0 h-full absolute top-0 left-0"></div>
<img alt="Property" className="w-24 h-24 rounded-lg object-cover flex-shrink-0 bg-neutral-100" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="flex flex-col justify-between py-0.5 w-full">
<div className="">
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium tracking-tight group-hover:text-neutral-600 transition-colors text-neutral-900">Prestige Shantiniketan</h4>
<span className="text-xs font-medium px-1.5 py-0.5 rounded flex items-center gap-1 text-green-700 bg-green-50">
<iconify-icon className="" icon="solar:check-circle-linear" width="12"></iconify-icon>
                                        98%
                                    </span>
</div>
<p className="text-sm text-neutral-500 mb-2">Whitefield, Bangalore</p>
<div className="flex items-center gap-3 text-sm text-neutral-600">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 3 Bed</span>
<span className="flex items-center gap-1"><iconify-icon className="" icon="solar:bath-linear"></iconify-icon> 3 Bath</span>
</div>
</div>
<div className="flex items-center justify-between mt-2">
<span className="text-base font-medium tracking-tight">₹2.40 Cr</span>
<span className="text-sm group-hover:text-neutral-900 transition-colors flex items-center gap-1 text-neutral-400">
                                    Details <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="rounded-xl p-3 border border-transparent transition-all flex gap-4 cursor-pointer group bg-white hover:border-neutral-200" onclick="openPDP()">
<img alt="Property" className="w-24 h-24 rounded-lg object-cover flex-shrink-0 bg-neutral-100" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="flex flex-col justify-between py-0.5 w-full">
<div className="">
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium tracking-tight group-hover:text-neutral-600 transition-colors text-neutral-900">Sobha Habitech</h4>
<span className="text-xs font-medium px-1.5 py-0.5 rounded text-blue-700 bg-blue-50">92%</span>
</div>
<p className="text-sm text-neutral-500 mb-2">Hope Farm Junction</p>
<div className="flex items-center gap-3 text-sm text-neutral-600">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 3 Bed</span>
<span className="flex items-center gap-1"><iconify-icon className="" icon="solar:bath-linear"></iconify-icon> 2 Bath</span>
</div>
</div>
<div className="flex items-center justify-between mt-2">
<span className="text-base font-medium tracking-tight">₹1.85 Cr</span>
</div>
</div>
</div>

<div className="rounded-xl p-3 border border-transparent transition-all flex gap-4 cursor-pointer group bg-white hover:border-neutral-200" onclick="openPDP()">
<img alt="Property" className="w-24 h-24 rounded-lg object-cover flex-shrink-0 bg-neutral-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="flex flex-col justify-between py-0.5 w-full">
<div className="">
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium tracking-tight group-hover:text-neutral-600 transition-colors text-neutral-900">Brigade Cosmopolis</h4>
<span className="text-xs font-medium px-1.5 py-0.5 rounded text-blue-700 bg-blue-50">88%</span>
</div>
<p className="text-sm text-neutral-500 mb-2">Whitefield Main Rd</p>
<div className="flex items-center gap-3 text-sm text-neutral-600">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 3 Bed</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 3 Bath</span>
</div>
</div>
<div className="flex items-center justify-between mt-2">
<span className="text-base font-medium tracking-tight">₹2.10 Cr</span>
</div>
</div>
</div>
</div>

<div className="mt-6 sticky bottom-0 backdrop-blur pb-2 pt-4 bg-neutral-50/90">
<div className="relative flex items-center">
<input className="w-full border rounded-full pl-4 pr-12 py-3 text-base focus:outline-none focus:border-neutral-400 transition-colors shadow-sm placeholder:text-neutral-400 bg-white border-neutral-200" placeholder="Refine your search..." type="text"/>
<button className="absolute right-2 w-9 h-9 flex items-center justify-center rounded-full transition-colors bg-neutral-900 text-white hover:bg-neutral-800">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-50 overflow-y-auto transition-all duration-300 hide-overlay bg-white" id="pdp-overlay">

<nav className="sticky top-0 z-40 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center bg-white/80 border-neutral-100">
<h1 className="text-xl font-medium tracking-tight uppercase letter-spacing-[0.1em]">Manest</h1>
<button className="flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors px-3 py-1.5 rounded-md border hover:text-neutral-900 bg-neutral-50 border-neutral-200" onclick="closePDP()">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
                Back to Search
            </button>
</nav>

<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 h-[40vh] md:h-[60vh]">
<div className="md:col-span-2 h-full rounded-xl overflow-hidden relative group">
<img alt="Living Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/20"></div>
</div>
<div className="hidden md:flex flex-col gap-4 h-full">
<img alt="Bedroom" className="w-full h-1/2 object-cover rounded-xl" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="relative w-full h-1/2 rounded-xl overflow-hidden cursor-pointer group">
<img alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40">
<span className="text-base font-medium border px-5 py-2.5 rounded-full backdrop-blur-sm text-white border-white/30">View all 12 photos</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="lg:col-span-2 space-y-12">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-100">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs px-2 py-1 rounded font-medium bg-neutral-100 text-neutral-600">Apartment</span>
<span className="flex items-center gap-1 text-sm text-neutral-500">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Whitefield, Bangalore
                            </span>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-4 text-neutral-900">Prestige Shantiniketan, Tower B</h2>
<div className="flex flex-wrap gap-6 text-base text-neutral-600">
<div className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:bed-linear" width="22"></iconify-icon> 3 Bedrooms</div>
<div className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:bath-linear" width="22"></iconify-icon> 3 Bathrooms</div>
<div className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:ruler-linear" width="22"></iconify-icon> 1,850 sq ft</div>
<div className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:car-linear" width="22"></iconify-icon> 2 Parking</div>
</div>
</div>
<div className="text-left md:text-right">
<div className="text-3xl font-medium tracking-tight text-neutral-900">₹2.40 Cr</div>
<div className="text-base text-neutral-500 mt-1">₹12,972 / sq ft</div>
</div>
</div>

<div className="border rounded-2xl p-6 bg-neutral-50/50 border-neutral-100">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-neutral-900" icon="solar:magic-stick-3-linear" width="22"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight">Why this matches your search</h3>
<span className="ml-auto text-sm font-medium border px-2 py-1 rounded-md text-neutral-900 bg-white border-neutral-200">98% Match</span>
</div>
<p className="text-base leading-relaxed mb-5 text-neutral-600">
                        This property strongly aligns with your need for a family home with elderly considerations. It features ground-floor access, eliminates step-up entries, and is situated directly across from highly rated educational institutions.
                    </p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm shadow-sm bg-white border-neutral-200">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-neutral-700">3BHK Format</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm shadow-sm bg-white border-neutral-200">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-neutral-700">Zero-step Entry (Elderly)</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm shadow-sm bg-white border-neutral-200">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-neutral-700">Top Schools &lt; 1km</span>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-medium tracking-tight mb-6">Hyper-Local Context</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="border rounded-xl p-5 transition-colors border-neutral-200 hover:border-neutral-300 bg-white">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2 font-medium text-neutral-900">
<iconify-icon className="text-neutral-500" icon="solar:school-linear" width="22"></iconify-icon>
                                    Education Quality
                                </div>
<span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mt-1.5"></span>
</div>
<p className="text-base font-medium mb-1 text-neutral-900">Inventure Academy</p>
<p className="text-sm text-neutral-500 mb-3">450m away • Ranked #1 in zone</p>
<div className="w-full rounded-full h-1.5 bg-neutral-100">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
</div>
</div>

<div className="border rounded-xl p-5 transition-colors border-neutral-200 hover:border-neutral-300 bg-white">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2 font-medium text-neutral-900">
<iconify-icon className="text-neutral-500" icon="solar:hospital-linear" width="22"></iconify-icon>
                                    Medical Access
                                </div>
<span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mt-1.5"></span>
</div>
<p className="text-base font-medium mb-1 text-neutral-900">Manipal Hospital</p>
<p className="text-sm text-neutral-500 mb-3">1.2km away • 24/7 ER Access</p>
<div className="w-full rounded-full h-1.5 bg-neutral-100">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>

<div className="border rounded-xl p-5 transition-colors border-neutral-200 hover:border-neutral-300 bg-white">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2 font-medium text-neutral-900">
<iconify-icon className="text-neutral-500" icon="solar:waterdrops-linear" width="22"></iconify-icon>
                                    Sewage Status
                                </div>
<span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mt-1.5"></span>
</div>
<p className="text-base font-medium mb-1 text-neutral-900">BWSSB Tier 1 Line</p>
<p className="text-sm text-neutral-500">Fully connected. No dependency on private tankers.</p>
</div>

<div className="border rounded-xl p-5 transition-colors border-neutral-200 hover:border-neutral-300 bg-white">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2 font-medium text-neutral-900">
<iconify-icon className="text-neutral-500" icon="solar:bolt-linear" width="22"></iconify-icon>
                                    Power Lines (HT)
                                </div>
<span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mt-1.5"></span>
</div>
<p className="text-base font-medium mb-1 text-neutral-900">Safe Distance</p>
<p className="text-sm text-neutral-500">Nearest high-tension line is 2.4km away. Zero electromagnetic risk.</p>
</div>

<div className="border rounded-xl p-5 transition-colors border-neutral-200 hover:border-neutral-300 bg-white">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2 font-medium text-neutral-900">
<iconify-icon className="text-neutral-500" icon="solar:wind-linear" width="22"></iconify-icon>
                                    Air Quality
                                </div>
<span className="text-xs font-medium px-2 py-0.5 rounded text-green-700 bg-green-50">Good</span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-medium tracking-tight leading-none">42</span>
<span className="text-sm text-neutral-500 mb-0.5">AQI</span>
</div>
<div className="w-full flex h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 w-1/4"></div>
<div className="w-3/4 bg-neutral-100"></div>
</div>
<p className="text-sm text-neutral-500 mt-2">Annual average below city limits.</p>
</div>

<div className="border rounded-xl p-5 transition-colors border-neutral-200 hover:border-neutral-300 bg-white">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2 font-medium text-neutral-900">
<iconify-icon className="text-neutral-500" icon="solar:volume-loud-linear" width="22"></iconify-icon>
                                    Noise Level
                                </div>
<span className="text-xs font-medium px-2 py-0.5 rounded text-green-700 bg-green-50">Low</span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-medium tracking-tight leading-none">35</span>
<span className="text-sm text-neutral-500 mb-0.5">dB</span>
</div>
<div className="w-full flex gap-0.5 h-4 items-end">
<div className="w-full bg-green-500 h-1 rounded-sm"></div>
<div className="w-full bg-green-500 h-1.5 rounded-sm"></div>
<div className="w-full bg-green-500 h-2 rounded-sm"></div>
<div className="w-full h-3 rounded-sm bg-neutral-200"></div>
<div className="w-full h-4 rounded-sm bg-neutral-200"></div>
</div>
<p className="text-sm text-neutral-500 mt-2">Shielded from main road traffic.</p>
</div>
</div>
</div>

<div className="h-20"></div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 border rounded-2xl p-6 shadow-sm bg-white border-neutral-200">
<div className="mb-6">
<span className="text-sm text-neutral-500 block mb-1">Estimated EMI</span>
<div className="text-3xl font-medium tracking-tight text-neutral-900">₹1,14,500 <span className="text-base font-normal text-neutral-500">/mo</span></div>
<p className="text-sm mt-1 text-neutral-400">Based on 20% down, 8.5% over 20yrs</p>
</div>

<div className="mb-6 rounded-xl overflow-hidden border h-48 relative map-bg border-neutral-200">
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="absolute w-8 h-8 rounded-full animate-ping -left-3 -top-3 z-10 bg-neutral-900/10"></div>
<div className="w-2.5 h-2.5 rounded-full ring-4 shadow-sm z-20 relative bg-neutral-900 ring-white"></div>
</div>
</div>
<div className="absolute bottom-2 right-2 backdrop-blur text-xs font-medium px-2 py-1 rounded shadow-sm border z-20 bg-white/90 border-neutral-100 text-neutral-600">
                            Satellite View
                        </div>
</div>

<div className="space-y-3">
<button className="w-full rounded-lg py-3.5 text-base font-medium transition-colors flex items-center justify-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                            Schedule a Visit
                        </button>
<button className="w-full border rounded-lg py-3.5 text-base font-medium transition-colors flex items-center justify-center gap-2 bg-white border-neutral-200 text-neutral-900 hover:bg-neutral-50">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                            Talk to Manest Expert
                        </button>
</div>
<div className="mt-6 pt-6 border-t flex items-center gap-3 border-neutral-100">
<img alt="Agent" className="w-12 h-12 rounded-full border border-neutral-200" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-base font-medium text-neutral-900">Rahul Sharma</p>
<p className="text-sm text-neutral-500">Local Area Expert</p>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
