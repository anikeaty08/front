import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with specific stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Simple interaction for Hero Bottom Navigation
        const navBtns = document.querySelectorAll('.hero-nav-btn');
        
        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset all
                navBtns.forEach(b => {
                    b.classList.remove('text-[#111111]');
                    b.classList.add('text-zinc-400');
                    b.querySelector('span:first-child').classList.remove('border-[#111111]', 'font-semibold');
                    b.querySelector('span:first-child').classList.add('border-transparent');
                });

                // Set active
                btn.classList.remove('text-zinc-400');
                btn.classList.add('text-[#111111]');
                btn.querySelector('span:first-child').classList.remove('border-transparent');
                btn.querySelector('span:first-child').classList.add('border-[#111111]', 'font-semibold');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-[#EAE8E3] border-b border-theme text-xs lg:text-sm font-medium tracking-widest uppercase flex flex-col md:flex-row w-full backdrop-blur-sm bg-opacity-90">

<div className="flex items-center justify-between md:justify-start md:w-1/3 border-b md:border-b-0 border-theme">
<div className="px-6 py-4 flex-1">
<span className="block text-[0.65rem] text-zinc-500 mb-0.5">Maison</span>
<span className="text-base font-semibold tracking-tight">Velorès</span>
</div>
<div className="hidden lg:block w-px h-16 bg-[#D3D0C9]"></div>
<div className="px-6 py-4 flex-1 hidden lg:block text-[0.65rem] text-zinc-500 leading-relaxed">
                Vineyard<br/>South of France
            </div>
</div>

<nav className="hidden md:flex flex-1 items-center justify-center space-x-8 lg:space-x-12 px-6 py-4 md:border-l md:border-r border-theme">
<a className="hover:text-zinc-500 transition-colors" href="#estate">The Estate</a>
<a className="hover:text-zinc-500 transition-colors" href="#wines">Wines</a>
<a className="hover:text-zinc-500 transition-colors" href="#experiences">Experiences</a>
<a className="hover:text-zinc-500 transition-colors" href="#journal">Journal</a>
<a className="hover:text-zinc-500 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-stretch md:w-1/3 justify-between md:justify-end">
<button className="px-6 flex items-center space-x-2 hover:text-zinc-500 transition-colors border-r md:border-l md:border-r-0 border-theme">
<span className="w-1.5 h-1.5 bg-zinc-900 rounded-full"></span>
<span>En</span>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<a className="bg-[#111111] text-[#EAE8E3] flex-1 md:flex-none flex items-center justify-center space-x-4 px-8 py-4 hover:bg-zinc-800 transition-colors group" href="#book">
<span>Book a visit</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</div>
</header>
<main className="">

<section className="min-h-[600px] flex flex-col border-theme bg-[#EAE8E3] w-full h-[85vh] border-b relative">

<div className="relative flex-1 w-full overflow-hidden">

<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Vineyard Coast" className="filter brightness-[0.85] contrast-[1.1] grayscale-[0.2] bg-center w-full h-full object-cover" onclick="window.location.href='https://cdn.midjourney.com/e9b49625-3dc2-4aa3-901a-93e9452423f5/0_0.png'" role="button" src="https://cdn.midjourney.com/e9b49625-3dc2-4aa3-901a-93e9452423f5/0_0.png?w=800&amp;q=80"/>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-[#EAE8E3]/80 via-transparent to-transparent md:w-1/2"></div>

<div className="absolute top-[10%] lg:top-[15%] left-4 md:left-12 lg:left-24 z-10">
<h1 className="font-display font-semibold text-6xl md:text-8xl lg:text-[10rem] tracking-tighter uppercase leading-[0.85] text-[#111111] mix-blend-multiply flex flex-col">
<span className="">Wild Land.</span>
<span className="">Raw Soil.</span>
<span className="">True Wine.</span>
</h1>

<div className="mt-8 md:mt-12 flex items-start space-x-3">
<div className="w-3 h-3 border-t-2 border-l-2 border-[#111111] mt-1.5"></div>
<div className="font-mono text-xs tracking-widest uppercase text-[#111111] leading-loose mix-blend-multiply font-semibold">
                            Organic Vines.<br/>
                            Mediterranean Climate.<br/>
                            Timeless Craft.
                        </div>
</div>
</div>

<div className="hidden lg:flex absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-40 h-40">
<svg className="w-full h-full animate-spin-slow mix-blend-multiply opacity-80" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="circlePath"></path>
<text className="font-mono text-[9px] tracking-[0.3em] uppercase fill-[#111111]">
<textpath href="#circlePath" startoffset="0%">Maison Velorès · South of France ·</textpath>
</text>
</svg>
<div className="flex mix-blend-multiply absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<i className="w-8 h-8 text-[#111111] stroke-[1px]" data-lucide="arrow-down-left"></i>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#111111] p-8 hidden md:flex flex-col space-y-8 z-20 w-32 border-l border-zinc-800">
<div className="font-mono text-[0.65rem] tracking-widest text-[#EAE8E3] uppercase leading-relaxed opacity-70">
                        43.412° N<br/>5.123° E
                    </div>
<div className="w-6 h-px bg-zinc-700"></div>
<div className="font-mono text-[0.65rem] tracking-widest text-[#EAE8E3] uppercase leading-relaxed opacity-70">
                        Alt.<br/>320 M
                    </div>
<div className="flex flex-col space-y-1 pt-4">
<div className="w-8 h-px bg-zinc-600"></div>
<div className="w-4 h-px bg-zinc-600"></div>
</div>
</div>


<div className="absolute bottom-12 right-12 z-20 hidden lg:block group cursor-pointer border border-white/20">
<div className="relative w-48 h-32 overflow-hidden bg-zinc-900">
<img alt="Vine Leaf" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#EAE8E3] flex items-center justify-center transition-transform group-hover:scale-110">
<i className="w-4 h-4 text-[#111111] ml-0.5 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
</div>

<div className="h-20 lg:h-24 w-full flex border-t border-theme z-30 bg-[#EAE8E3]">
<div className="flex-1 border-r border-theme hidden md:block"></div>
<div className="w-full md:w-2/3 lg:w-1/2 flex items-center justify-between px-8 md:px-16 font-mono text-xs tracking-widest uppercase">

<button className="hero-nav-btn text-[#111111] flex flex-col items-start space-y-2 group" data-target="1">
<span className="text-lg font-semibold border-b border-[#111111] pb-1 w-full text-left">01</span>
<span className="opacity-100 transition-opacity">The Land</span>
</button>
<button className="hero-nav-btn text-zinc-400 flex flex-col items-start space-y-2 group hover:text-zinc-600 transition-colors" data-target="2">
<span className="text-lg border-b border-transparent group-hover:border-zinc-300 pb-1 w-full text-left">02</span>
<span className="transition-opacity">The Philosophy</span>
</button>
<button className="hero-nav-btn text-zinc-400 flex flex-col items-start space-y-2 group hover:text-zinc-600 transition-colors" data-target="3">
<span className="text-lg border-b border-transparent group-hover:border-zinc-300 pb-1 w-full text-left">03</span>
<span className="transition-opacity">The Wines</span>
</button>
</div>
<div className="flex-1 border-l border-theme hidden md:block"></div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24 border-b border-theme relative" id="philosophy">
<div className="absolute top-0 left-24 w-px h-full bg-[#D3D0C9] hidden lg:block"></div>
<div className="absolute top-0 right-24 w-px h-full bg-[#D3D0C9] hidden lg:block"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
<div className="md:col-span-5 flex flex-col justify-between">
<div>
<div className="font-mono text-xs tracking-widest text-zinc-500 mb-8 uppercase flex items-center space-x-4">
<span>02</span>
<div className="w-8 h-px bg-zinc-400"></div>
<span>Philosophy</span>
</div>
<h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tighter uppercase leading-[0.9] text-[#111111]">
                            Sculpted by<br/>the Mistral.
                        </h2>
</div>
</div>
<div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-7 flex flex-col space-y-8 pt-4 md:pt-16">
<p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-light">
                        We do not make wine; we accompany the soil. Our approach is entirely hands-off in the cellar, demanding absolute precision in the vineyard. Biodynamic practices are not a marketing tool, but the baseline for survival in this extreme terroir.
                    </p>
<p className="text-base text-zinc-600 leading-relaxed max-w-md">
                        Every bottle is a singular expression of a specific vintage, uncorrected and unfiltered. It is a raw translation of the limestone beneath our feet and the relentless sun above.
                    </p>
<div className="pt-8">
<a className="inline-flex items-center space-x-3 text-xs font-mono tracking-widest uppercase border-b border-[#111111] pb-2 hover:text-zinc-500 hover:border-zinc-500 transition-all" href="#">
<span>Read the manifesto</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-0 border-b border-theme bg-[#EAE8E3]" id="estate">
<div className="max-w-[100rem] mx-auto">
<div className="px-0 lg:px-24 mb-16 flex flex-col md:flex-row md:items-end justify-between space-y-8 md:space-y-0">
<h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tighter uppercase text-[#111111]">
                        The Architecture<br/>of the Estate
                    </h2>
<div className="font-mono text-xs tracking-widest text-zinc-500 uppercase text-right">
                        Concrete &amp; Limestone<br/>Built 2018
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-t border-theme">

<div className="group relative border-b md:border-b-0 md:border-r border-theme overflow-hidden aspect-[4/5] bg-zinc-200">
<img alt="Cellar" className="w-full h-full object-cover filter grayscale-[0.5] contrast-[1.1] group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="font-mono text-xs tracking-widest text-white uppercase bg-black/50 backdrop-blur-md px-3 py-1.5">The Cellar</span>
<span className="font-mono text-xs text-white bg-black/50 backdrop-blur-md px-3 py-1.5">14M Depth</span>
</div>
</div>

<div className="group relative border-b md:border-b-0 md:border-r border-theme overflow-hidden aspect-[4/5] bg-zinc-200">
<img alt="Tasting Room" className="w-full h-full object-cover filter grayscale-[0.3] group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="font-mono text-xs tracking-widest text-white uppercase bg-black/50 backdrop-blur-md px-3 py-1.5">Tasting Room</span>
<span className="font-mono text-xs text-white bg-black/50 backdrop-blur-md px-3 py-1.5">Top Floor</span>
</div>
</div>

<div className="group relative overflow-hidden aspect-[4/5] bg-[#111111] flex flex-col justify-between p-12">
<div className="font-mono text-xs tracking-widest text-[#EAE8E3] uppercase opacity-70">Gallery</div>
<div>
<div className="font-display text-4xl tracking-tight uppercase text-white mb-6 leading-none">View full<br/>archive</div>
<button className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 border-b border-theme bg-[#EAE8E3] flex flex-col lg:flex-row">
<div className="w-full lg:w-1/3 bg-[#111111] text-[#EAE8E3] p-12 md:p-24 flex flex-col justify-center">
<h2 className="font-display font-semibold text-5xl tracking-tighter uppercase mb-12">Terroir<br/>Metrics</h2>
<div className="space-y-8 font-mono text-sm tracking-widest uppercase">
<div>
<div className="text-zinc-500 mb-2 text-xs">Soil Composition</div>
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span>Limestone</span>
<span>65%</span>
</div>
</div>
<div>
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span>Clay</span>
<span>25%</span>
</div>
</div>
<div>
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span>Sand</span>
<span>10%</span>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-2/3 p-12 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-16 relative">
<div className="absolute left-1/2 top-12 bottom-12 w-px bg-theme hidden md:block"></div>
<div className="space-y-16">
<div>
<i className="w-6 h-6 mb-6 stroke-[1px]" data-lucide="sun"></i>
<h3 className="text-lg font-semibold uppercase tracking-widest mb-4">Climate</h3>
<p className="text-base text-zinc-600 font-light leading-relaxed">
                            Strict Mediterranean. Over 300 days of sunshine annually. Rapid temperature drops at night preserve acidity.
                        </p>
</div>
<div>
<i className="w-6 h-6 mb-6 stroke-[1px]" data-lucide="wind"></i>
<h3 className="text-lg font-semibold uppercase tracking-widest mb-4">The Wind</h3>
<p className="text-base text-zinc-600 font-light leading-relaxed">
                            The Mistral blows intensely from the north, naturally ventilating the vines and preventing disease organically.
                        </p>
</div>
</div>
<div className="space-y-16">
<div>
<i className="w-6 h-6 mb-6 stroke-[1px]" data-lucide="droplets"></i>
<h3 className="text-lg font-semibold uppercase tracking-widest mb-4">Rainfall</h3>
<p className="text-base text-zinc-600 font-light leading-relaxed">
                            Scarce, averaging 400mm per year. Deep root systems (up to 15m) are forced to seek moisture in the bedrock.
                        </p>
</div>
<div>
<i className="w-6 h-6 mb-6 stroke-[1px]" data-lucide="leaf"></i>
<h3 className="text-lg font-semibold uppercase tracking-widest mb-4">Farming</h3>
<p className="text-base text-zinc-600 font-light leading-relaxed">
                            Certified biodynamic since 2012. No synthetic inputs. Cover crops maintained year-round to build soil health.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-theme bg-[#EAE8E3] overflow-hidden" id="wines">
<div className="px-6 md:px-12 lg:px-24 mb-16 flex items-end justify-between">
<h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tighter uppercase text-[#111111]">
                    Current<br/>Releases
                </h2>
<a className="hidden md:inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase hover:text-zinc-500 transition-colors" href="#">
<span>Shop all</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="flex overflow-x-auto no-scrollbar pl-6 md:pl-12 lg:pl-24 pr-24 space-x-8 md:space-x-16 pb-12 cursor-ew-resize">

<div className="flex-none w-[280px] md:w-[320px] group">
<div className="aspect-[3/4] bg-zinc-200 mb-6 relative overflow-hidden flex items-center justify-center p-8">

<div className="w-16 h-[80%] bg-zinc-900 rounded-t-xl opacity-90 group-hover:scale-105 transition-transform duration-700 shadow-2xl"></div>
<div className="absolute top-4 right-4 bg-white/90 px-2 py-1 font-mono text-[10px] tracking-widest uppercase backdrop-blur-sm">Sold Out</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-tight uppercase">L'Origine</h3>
<span className="font-mono text-sm">€45</span>
</div>
<div className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-4">2021 · Syrah Blend</div>
<button className="w-full py-3 border border-[#111111] text-xs font-mono tracking-widest uppercase hover:bg-[#111111] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="">Join Waitlist</button>
</div>

<div className="flex-none w-[280px] md:w-[320px] group">
<div className="aspect-[3/4] bg-zinc-200 mb-6 relative overflow-hidden flex items-center justify-center p-8">
<div className="w-16 h-[80%] bg-zinc-800 rounded-t-xl opacity-90 group-hover:scale-105 transition-transform duration-700 shadow-2xl"></div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-tight uppercase">Roc Blanc</h3>
<span className="font-mono text-sm">€52</span>
</div>
<div className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-4">2022 · Rolle / Clairette</div>
<button className="w-full py-3 border border-[#111111] text-xs font-mono tracking-widest uppercase hover:bg-[#111111] hover:text-white transition-colors">Add to Cart</button>
</div>

<div className="flex-none w-[280px] md:w-[320px] group">
<div className="aspect-[3/4] bg-[#111111] mb-6 relative overflow-hidden flex items-center justify-center p-8">
<div className="w-16 h-[80%] bg-zinc-700 rounded-t-xl opacity-90 group-hover:scale-105 transition-transform duration-700 shadow-2xl"></div>
<div className="absolute top-4 left-4 text-white font-mono text-[10px] tracking-widest uppercase">Members Only</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-tight uppercase">Cuvée C</h3>
<span className="font-mono text-sm">€120</span>
</div>
<div className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-4">2018 · Grand Cru</div>
<button className="w-full py-3 border border-[#111111] text-xs font-mono tracking-widest uppercase hover:bg-[#111111] hover:text-white transition-colors">Login to Buy</button>
</div>

<div className="flex-none w-12"></div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24 border-b border-theme bg-[#EAE8E3]" id="journal">
<div className="max-w-5xl mx-auto">
<div className="flex justify-between items-end mb-16 border-b border-theme pb-8">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter uppercase text-[#111111]">Notes from<br/>the domain</h2>
<a className="font-mono text-xs tracking-widest uppercase hover:text-zinc-500" href="#">View all</a>
</div>
<div className="flex flex-col">

<a className="group py-8 border-b border-zinc-300 flex flex-col md:flex-row md:items-center justify-between hover:px-6 hover:bg-white/50 transition-all duration-300 -mx-6 px-6" href="#">
<div className="font-mono text-xs tracking-widest text-zinc-500 w-32 mb-4 md:mb-0">OCT 12, 2023</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight uppercase flex-1 group-hover:translate-x-2 transition-transform duration-300">The 2023 Harvest Report</h3>
<div className="hidden md:block font-mono text-xs uppercase tracking-widest border border-zinc-300 rounded-full px-4 py-1.5 group-hover:bg-[#111111] group-hover:text-white transition-colors">Read</div>
</a>

<a className="group py-8 border-b border-zinc-300 flex flex-col md:flex-row md:items-center justify-between hover:px-6 hover:bg-white/50 transition-all duration-300 -mx-6 px-6" href="#">
<div className="font-mono text-xs tracking-widest text-zinc-500 w-32 mb-4 md:mb-0">SEP 05, 2023</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight uppercase flex-1 group-hover:translate-x-2 transition-transform duration-300">Biodynamics in extreme drought</h3>
<div className="hidden md:block font-mono text-xs uppercase tracking-widest border border-zinc-300 rounded-full px-4 py-1.5 group-hover:bg-[#111111] group-hover:text-white transition-colors">Read</div>
</a>

<a className="group py-8 border-b border-zinc-300 flex flex-col md:flex-row md:items-center justify-between hover:px-6 hover:bg-white/50 transition-all duration-300 -mx-6 px-6" href="#">
<div className="font-mono text-xs tracking-widest text-zinc-500 w-32 mb-4 md:mb-0">MAY 20, 2023</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight uppercase flex-1 group-hover:translate-x-2 transition-transform duration-300">A new concrete cellar</h3>
<div className="hidden md:block font-mono text-xs uppercase tracking-widest border border-zinc-300 rounded-full px-4 py-1.5 group-hover:bg-[#111111] group-hover:text-white transition-colors">Read</div>
</a>
</div>
</div>
</section>

<footer className="bg-[#111111] text-[#EAE8E3] pt-32 pb-12 px-6 md:px-12 lg:px-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 mb-32">

<div className="lg:col-span-2">
<h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter uppercase leading-[0.85] mb-8">
                        Maison<br/>Velorès
                    </h2>
<p className="font-mono text-xs tracking-widest text-zinc-500 uppercase leading-relaxed max-w-xs">
                        Route de la Sainte-Victoire<br/>
                        13100 Aix-en-Provence<br/>
                        France
                    </p>
</div>

<div className="flex flex-col space-y-4 font-mono text-xs tracking-widest uppercase">
<h4 className="text-zinc-600 mb-4">Explore</h4>
<a className="hover:text-white transition-colors" href="#">The Estate</a>
<a className="hover:text-white transition-colors" href="#">Our Wines</a>
<a className="hover:text-white transition-colors" href="#">Tastings</a>
<a className="hover:text-white transition-colors" href="#">Journal</a>
</div>

<div className="flex flex-col">
<h4 className="font-mono text-xs tracking-widest uppercase text-zinc-600 mb-8">Newsletter</h4>
<form className="flex border-b border-zinc-700 pb-2 group focus-within:border-white transition-colors">
<input className="bg-transparent border-none outline-none w-full font-mono text-xs tracking-widest uppercase placeholder:text-zinc-700 text-white" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<button className="p-1 hover:text-white text-zinc-500 transition-colors" type="submit">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>

<label className="mt-6 flex items-start space-x-3 cursor-pointer group">
<div className="relative flex-none mt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 peer-checked:bg-white peer-checked:border-white transition-all rounded-[1px]"></div>
<i className="absolute inset-0 w-4 h-4 text-[#111111] opacity-0 peer-checked:opacity-100 pointer-events-none stroke-[3px]" data-lucide="check"></i>
</div>
<span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase leading-snug group-hover:text-zinc-400 transition-colors">
                            I agree to receive communications.<br/>Read privacy policy.
                        </span>
</label>
</div>
</div>

<div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
<div>© 2024 Maison Velorès. All rights reserved.</div>
<div className="flex space-x-8">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
