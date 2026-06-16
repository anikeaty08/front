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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="text-3xl font-medium tracking-tighter text-rose-800 flex items-center gap-1" href="#">
                        JR
                        <span className="w-2 h-2 rounded-full bg-amber-500 mb-1"></span>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-rose-800 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-rose-800 transition-colors" href="#properties">Listings</a>
<a className="text-sm font-medium text-slate-500 hover:text-rose-800 transition-colors" href="#markets">Markets</a>
<a className="text-sm font-medium text-slate-500 hover:text-rose-800 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-rose-800 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-rose-800 hover:bg-rose-900 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-800" href="#evaluation">
                        Home Evaluation
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-rose-800 p-2" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative bg-slate-900 overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80')] bg-cover bg-center bg-no-repeat"></div>
<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-rose-100 text-xs font-medium uppercase tracking-widest mb-6 backdrop-blur-sm">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon> Premium Canadian Real Estate
                </span>
<h1 className="text-5xl md:text-7xl font-medium font-serif tracking-tight text-white mb-6 leading-tight max-w-4xl">
                    Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic pr-2">Royal Estate</span> in the True North.
                </h1>
<p className="mt-4 max-w-2xl text-lg text-slate-300 mb-12 font-light">
                    Independent, uncompromising service. Whether you're looking for an urban penthouse or a sprawling countryside manor across Canada, expect excellence.
                </p>

<div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-white/20 flex flex-col md:flex-row gap-2">
<div className="flex-1 flex items-center px-4 py-3 bg-white rounded-xl border border-transparent focus-within:border-rose-200 transition-all">
<iconify-icon className="text-slate-400 mr-3" icon="solar:map-point-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none text-sm text-slate-900 focus:ring-0 placeholder-slate-400 outline-none" placeholder="City, Neighborhood, or Address" type="text"/>
</div>
<div className="w-full md:w-48 flex items-center px-4 py-3 bg-white rounded-xl border border-transparent focus-within:border-rose-200 transition-all">
<iconify-icon className="text-slate-400 mr-3" icon="solar:home-angle-linear" width="20"></iconify-icon>
<select className="w-full bg-transparent border-none text-sm text-slate-900 focus:ring-0 outline-none appearance-none cursor-pointer">
<option value="">Property Type</option>
<option value="house">House</option>
<option value="condo">Condo</option>
<option value="townhouse">Townhouse</option>
</select>
</div>
<button className="w-full md:w-auto px-8 py-3 bg-rose-800 hover:bg-rose-900 text-white text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
                        Search <iconify-icon icon="solar:magnifier-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white" id="markets">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium font-serif tracking-tight text-slate-900 mb-2">Featured Markets</h2>
<p className="text-slate-500 text-sm">Explore premium properties in Canada's most sought-after cities.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="relative h-[400px] rounded-3xl overflow-hidden group" href="#">
<img alt="Toronto" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity group-hover:opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
<div>
<h3 className="text-3xl font-medium font-serif text-white tracking-tight mb-1">Toronto</h3>
<p className="text-slate-300 text-sm flex items-center gap-1.5"><iconify-icon icon="solar:buildings-linear"></iconify-icon> 240 Active Listings</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="relative h-[400px] rounded-3xl overflow-hidden group" href="#">
<img alt="Vancouver" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity group-hover:opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
<div>
<h3 className="text-3xl font-medium font-serif text-white tracking-tight mb-1">Vancouver</h3>
<p className="text-slate-300 text-sm flex items-center gap-1.5"><iconify-icon icon="solar:buildings-linear"></iconify-icon> 185 Active Listings</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-100" id="properties">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium font-serif tracking-tight text-slate-900 mb-2">Exclusive Listings</h2>
<p className="text-slate-500 text-sm">Curated properties representing the finest in Canadian real estate.</p>
</div>
<a className="inline-flex items-center gap-1 text-sm font-medium text-rose-800 hover:text-rose-900 transition-colors group" href="#">
                        View all properties 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="property-grid">

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group flex flex-col">
<div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-4 left-4">
<span className="bg-rose-800 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-sm tracking-wide">NEW LISTING</span>
</div>
<button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-rose-600 transition-colors shadow-sm">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">$2,450,000 <span className="text-sm font-medium text-slate-500 tracking-normal">CAD</span></h3>
<p className="text-sm text-slate-500 flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> 
                                    184 Forest Hill Road, Toronto, ON
                                </p>
</div>
<div className="flex items-center justify-between text-sm text-slate-600 border-t border-slate-100 pt-4 mt-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:bed-linear" width="18"></iconify-icon>
<span className="font-medium">4</span> Beds
                                </div>
<div className="w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:bath-linear" width="18"></iconify-icon>
<span className="font-medium">3.5</span> Baths
                                </div>
<div className="w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:ruler-linear" width="18"></iconify-icon>
<span className="font-medium">3,200</span> Sqft
                                </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group flex flex-col">
<div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-4 left-4">
<span className="bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-sm tracking-wide">OPEN HOUSE</span>
</div>
<button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-rose-600 transition-colors shadow-sm">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">$899,000 <span className="text-sm font-medium text-slate-500 tracking-normal">CAD</span></h3>
<p className="text-sm text-slate-500 flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> 
                                    42 Harbourfront Blvd, Vancouver, BC
                                </p>
</div>
<div className="flex items-center justify-between text-sm text-slate-600 border-t border-slate-100 pt-4 mt-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:bed-linear" width="18"></iconify-icon>
<span className="font-medium">2</span> Beds
                                </div>
<div className="w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:bath-linear" width="18"></iconify-icon>
<span className="font-medium">2</span> Baths
                                </div>
<div className="w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:ruler-linear" width="18"></iconify-icon>
<span className="font-medium">1,100</span> Sqft
                                </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group flex flex-col">
<div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 group-hover:scale-105 transition-transform duration-500"></div>
<button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-rose-600 transition-colors shadow-sm">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">$1,150,000 <span className="text-sm font-medium text-slate-500 tracking-normal">CAD</span></h3>
<p className="text-sm text-slate-500 flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> 
                                    88 Mont-Royal Ave, Montreal, QC
                                </p>
</div>
<div className="flex items-center justify-between text-sm text-slate-600 border-t border-slate-100 pt-4 mt-auto">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:bed-linear" width="18"></iconify-icon>
<span className="font-medium">3</span> Beds
                                </div>
<div className="w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:bath-linear" width="18"></iconify-icon>
<span className="font-medium">2</span> Baths
                                </div>
<div className="w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:ruler-linear" width="18"></iconify-icon>
<span className="font-medium">1,850</span> Sqft
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative z-10">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-200"></div>
<img alt="Realtor Portrait" className="w-full h-full object-cover mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-rose-100 rounded-3xl z-0"></div>
</div>
<div className="w-full lg:w-1/2">
<span className="text-rose-800 font-medium text-sm tracking-widest uppercase mb-4 block">Meet Your Broker</span>
<h2 className="text-4xl md:text-5xl font-medium font-serif tracking-tight text-slate-900 mb-6">Jonathan Reyes</h2>
<p className="text-slate-600 text-lg leading-relaxed mb-6">
                            With over 15 years of dedicated service in the Canadian luxury real estate market, I provide a discrete, results-oriented approach tailored exclusively to your unique lifestyle and investment goals.
                        </p>
<p className="text-slate-500 text-base leading-relaxed mb-10">
                            By operating independently, I remove corporate red tape, allowing for a truly agile and bespoke advisory experience. My deep-rooted connections across the country ensure you have early access to off-market gems and premier developments.
                        </p>

<div className="grid grid-cols-2 gap-8 mb-10 border-t border-b border-slate-100 py-6">
<div>
<p className="text-3xl font-medium font-serif text-slate-900 mb-1">$500M+</p>
<p className="text-xs text-slate-500 uppercase tracking-widest">Career Volume</p>
</div>
<div>
<p className="text-3xl font-medium font-serif text-slate-900 mb-1">15</p>
<p className="text-xs text-slate-500 uppercase tracking-widest">Years Experience</p>
</div>
</div>

<div className="text-3xl font-serif italic text-slate-300">Jonathan Reyes</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium font-serif tracking-tight text-slate-900 mb-4">The Independent Advantage</h2>
<p className="text-slate-500 text-base">Unbound by corporate bureaucracy, I provide a tailored, agile, and fiercely loyal approach to securing your Canadian investment.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 opacity-80">
<h3 className="text-xl font-semibold tracking-tight text-slate-500 mb-6 flex items-center gap-2">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon> Traditional Agencies
                        </h3>
<ul className="space-y-5">
<li className="flex items-start gap-3 text-slate-500 text-sm">
<iconify-icon className="text-slate-300 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                                Passed off to junior agents or assistants after signing.
                            </li>
<li className="flex items-start gap-3 text-slate-500 text-sm">
<iconify-icon className="text-slate-300 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                                Bound by rigid corporate marketing templates and rules.
                            </li>
<li className="flex items-start gap-3 text-slate-500 text-sm">
<iconify-icon className="text-slate-300 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                                Volume-driven business model prioritizing quick turnover.
                            </li>
<li className="flex items-start gap-3 text-slate-500 text-sm">
<iconify-icon className="text-slate-300 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                                Limited flexibility in commission structuring.
                            </li>
</ul>
</div>

<div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-rose-900/20 rounded-full blur-3xl"></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-6 flex items-center gap-2 relative z-10">
<iconify-icon className="text-amber-400" icon="solar:star-circle-linear" width="24"></iconify-icon> JR Independent
                        </h3>
<ul className="space-y-5 relative z-10">
<li className="flex items-start gap-3 text-slate-300 text-sm">
<iconify-icon className="text-rose-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-white">Direct Access:</span> I personally handle every aspect of your transaction.
                            </li>
<li className="flex items-start gap-3 text-slate-300 text-sm">
<iconify-icon className="text-rose-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-white">Bespoke Marketing:</span> Custom media and global reach tailored to your specific property.
                            </li>
<li className="flex items-start gap-3 text-slate-300 text-sm">
<iconify-icon className="text-rose-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-white">Client-Centric:</span> Low volume, high attention. Your success is my only metric.
                            </li>
<li className="flex items-start gap-3 text-slate-300 text-sm">
<iconify-icon className="text-rose-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-white">Agile Strategy:</span> Total freedom to pivot and adapt to market shifts instantly.
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-medium font-serif tracking-tight text-slate-900 mb-12 text-center">Client Experiences</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative bg-slate-900 rounded-3xl overflow-hidden aspect-[3/4] group md:col-span-1 shadow-lg">
<img alt="Happy Clients" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

<button className="absolute inset-0 m-auto w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shadow-xl group-hover:scale-110">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</button>
<div className="absolute bottom-6 left-6 right-6 text-white">
<div className="flex gap-1 mb-2">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="font-medium font-serif text-lg tracking-tight mb-1">"Sold in record time."</p>
<p className="text-xs text-slate-300">Sarah &amp; Mark • Vancouver, BC</p>
</div>
</div>

<div className="md:col-span-2 flex flex-col gap-8 justify-center">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
<iconify-icon className="text-rose-800 mb-4" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-slate-700 text-lg leading-relaxed mb-6 font-light">
                                "Jonathan's approach is entirely different from the traditional agents we've used in the past. His independent status meant he was truly working for us, not a brokerage quota. He secured an off-market property in Forest Hill that we wouldn't have found otherwise."
                            </p>
<div>
<p className="text-sm font-semibold text-slate-900">Dr. Emily Chen</p>
<p className="text-xs text-slate-500">Purchased in Toronto, ON</p>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
<iconify-icon className="text-rose-800 mb-4" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-slate-700 text-lg leading-relaxed mb-6 font-light">
                                "Flawless execution from listing to closing. The marketing materials were cinematic quality, and his negotiation skills yielded a final sale price 12% over our asking. You simply cannot get this level of dedicated service at a big-box agency."
                            </p>
<div>
<p className="text-sm font-semibold text-slate-900">David &amp; Claire Thompson</p>
<p className="text-xs text-slate-500">Sold in Montreal, QC</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden" id="evaluation">
<div className="absolute inset-0 bg-rose-950"></div>

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-5xl font-medium font-serif tracking-tight text-white mb-6">Know What Your Home is Worth?</h2>
<p className="text-rose-100/80 text-lg mb-10 font-light max-w-2xl mx-auto">Get a complimentary, data-driven market evaluation of your property tailored to the current Canadian real estate climate.</p>
<form className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-1.5 rounded-full flex shadow-2xl border border-white/20">
<input className="w-full px-6 py-3 bg-transparent border-none text-sm text-white focus:ring-0 placeholder-rose-200 outline-none rounded-l-full" placeholder="Enter your property address" type="text"/>
<button className="flex-shrink-0 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 text-sm font-medium rounded-full transition-colors flex items-center gap-2" type="submit">
                        Get Estimate
                    </button>
</form>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium font-serif tracking-tight text-slate-900 mb-4">Start the Conversation</h2>
<p className="text-slate-500 text-base">Whether you are ready to list or just exploring your options, reach out for a confidential consultation.</p>
</div>
<form className="space-y-6 bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">First Name</label>
<input className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-colors" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Last Name</label>
<input className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-colors" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-colors" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">How can I help you?</label>
<textarea className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-colors resize-none" placeholder="Tell me a bit about your real estate goals..." rows="4"></textarea>
</div>
<button className="w-full px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2" type="button">
                        Send Message <iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</section>
</main>

<footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-3xl font-medium tracking-tighter text-white flex items-center gap-1 mb-4" href="#">
                        JR
                        <span className="w-2 h-2 rounded-full bg-amber-500 mb-1"></span>
</a>
<p className="text-slate-400 text-xs leading-relaxed pr-4">
                        Premier independent real estate services across Canada. Redefining luxury, trust, and results.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight mb-4">Properties</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Featured Listings</a></li>
<li><a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Recently Sold</a></li>
<li><a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">New Developments</a></li>
<li><a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Market Reports</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-400 hover:text-white transition-colors" href="#about">About Me</a></li>
<li><a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Testimonials</a></li>
<li><a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Buying Guide</a></li>
<li><a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Selling Guide</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight mb-4">Connect</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon> contact@jrestate.ca</a></li>
<li><a className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:phone-linear"></iconify-icon> 1-800-555-0199</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
                    © 2023 JR Real Estate. All rights reserved. Independent Brokerage.
                </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
