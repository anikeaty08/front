import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 cursor-pointer group" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white group-hover:scale-95 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter text-zinc-900">LUOTTAA</span>
</a>

<div className="hidden md:flex flex-1 max-w-md mx-8 relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="w-full h-10 pl-10 pr-4 bg-zinc-100/50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-zinc-900/5 transition-all" placeholder="Search in Renovation..." type="text"/>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6 text-sm font-normal">
<a className="text-zinc-900 font-medium" href="#">Categories</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Blog</a>
</div>
<div className="w-px h-6 bg-zinc-200 hidden md:block"></div>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600" href="#">Log in</a>
<a className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors" href="#">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="pt-28 pb-8 bg-white border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6">

<div className="flex items-center gap-2 text-xs text-zinc-500 mb-6">
<a className="hover:text-zinc-900 transition-colors" href="#">Home</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="10"></iconify-icon>
<a className="hover:text-zinc-900 transition-colors" href="#">Services</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="10"></iconify-icon>
<span className="text-zinc-900 font-medium">Renovation</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-3xl font-medium text-zinc-900 tracking-tight mb-2">Renovation Companies</h1>
<p className="text-zinc-500 text-sm max-w-2xl">
                        Compare trusted renovation contractors in Finland. Verified reviews, licenses check, and financial reliability scores.
                    </p>
</div>
<div className="flex items-center gap-3">
<button className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                        Filters
                    </button>
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 transition-colors min-w-[160px] justify-between">
<span>Sort: Recommended</span>
<iconify-icon className="text-zinc-400" icon="solar:sort-vertical-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex gap-2 mt-6 overflow-x-auto no-scrollbar pb-1">
<button className="px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-medium whitespace-nowrap">All</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-xs font-medium whitespace-nowrap transition-colors">Bathroom</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-xs font-medium whitespace-nowrap transition-colors">Kitchen</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-xs font-medium whitespace-nowrap transition-colors">Roofing</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-xs font-medium whitespace-nowrap transition-colors">Flooring</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-xs font-medium whitespace-nowrap transition-colors">Electrician</button>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<aside className="hidden lg:block lg:col-span-3 space-y-8">

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-4">Specialty</h3>
<div className="space-y-3">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all group-hover:border-zinc-400">
<iconify-icon className="hidden text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">General Renovation</span>
<span className="ml-auto text-xs text-zinc-400">142</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all group-hover:border-zinc-400">
<iconify-icon className="hidden text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">Bathroom</span>
<span className="ml-auto text-xs text-zinc-400">89</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all group-hover:border-zinc-400">
<iconify-icon className="hidden text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">Kitchen</span>
<span className="ml-auto text-xs text-zinc-400">64</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all group-hover:border-zinc-400">
<iconify-icon className="hidden text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">Painting</span>
<span className="ml-auto text-xs text-zinc-400">42</span>
</label>
</div>
</div>
<div className="h-px bg-zinc-200"></div>

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-4">Location</h3>
<div className="relative mb-4">
<input className="w-full h-9 pl-8 pr-3 bg-zinc-50 border border-zinc-200 rounded-lg text-xs focus:outline-none focus:border-zinc-400 transition-colors" placeholder="City or Zip code" type="text"/>
<iconify-icon className="absolute left-2.5 top-2.5 text-zinc-400" icon="solar:map-point-linear" width="14"></iconify-icon>
</div>
<div className="space-y-3">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all group-hover:border-zinc-400">
<iconify-icon className="hidden text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">Helsinki</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all group-hover:border-zinc-400">
<iconify-icon className="hidden text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">Espoo</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all group-hover:border-zinc-400">
<iconify-icon className="hidden text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">Vantaa</span>
</label>
</div>
</div>
<div className="h-px bg-zinc-200"></div>

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-4">Luottaa Score</h3>
<div className="space-y-3">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all group-hover:border-zinc-400">
<iconify-icon className="hidden text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div className="flex items-center gap-1">
<span className="text-sm text-zinc-600">4.5+</span>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all group-hover:border-zinc-400">
<iconify-icon className="hidden text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div className="flex items-center gap-1">
<span className="text-sm text-zinc-600">4.0+</span>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</label>
</div>
</div>

<div>
<div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-zinc-900">Verified Only</h3>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer toggle-checkbox" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900 toggle-label"></div>
</label>
</div>
<p className="text-xs text-zinc-500">Show only companies with verified financial data.</p>
</div>
</div>
</aside>

<main className="lg:col-span-9 space-y-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-zinc-900">142 Companies found</span>
</div>

<div className="bg-white border border-emerald-500/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-bl-lg border-b border-l border-emerald-100 uppercase tracking-wide">
                        Featured Selection
                    </div>
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-shrink-0">
<div className="w-20 h-20 rounded-xl bg-zinc-900 text-white flex items-center justify-center text-xl font-bold">
                                H
                            </div>
</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-1">
<h2 className="text-lg font-semibold text-zinc-900">Helsinki Remodeling Oy</h2>
<iconify-icon className="text-emerald-500" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-3">
<div className="flex items-center gap-1 text-zinc-800 font-medium">
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
                                            4.9 (124 reviews)
                                        </div>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                            Helsinki, Uusimaa
                                        </div>
</div>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">
                                        Full-service renovation company specializing in modern Nordic interiors. 
                                        Expertise in bathroom renovations, kitchen remodeling, and complete apartment overhauls.
                                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">Wet Room Certificate</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">Electrical</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">Microcement</span>
</div>
</div>
<div className="flex md:flex-col items-center md:items-end gap-3 md:min-w-[140px]">
<div className="text-right hidden md:block">
<div className="text-xs text-zinc-400 mb-0.5">Trust Score</div>
<div className="text-2xl font-semibold text-emerald-600">98<span className="text-sm text-zinc-400 font-normal">/100</span></div>
</div>
<button className="w-full md:w-auto px-5 py-2.5 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                                        Request Quote
                                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-all group">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-shrink-0">
<div className="w-20 h-20 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl font-bold">
                                V
                            </div>
</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-1">
<h2 className="text-lg font-semibold text-zinc-900">Vantaa Builders</h2>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-3">
<div className="flex items-center gap-1 text-zinc-800 font-medium">
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
                                            4.6 (42 reviews)
                                        </div>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                            Vantaa, Uusimaa
                                        </div>
</div>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">
                                        Reliable construction partner for residential and commercial projects. 
                                        Focus on sustainable materials and energy-efficient solutions.
                                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">General Contracting</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">Design</span>
</div>
</div>
<div className="flex md:flex-col items-center md:items-end gap-3 md:min-w-[140px]">
<div className="text-right hidden md:block">
<div className="text-xs text-zinc-400 mb-0.5">Trust Score</div>
<div className="text-2xl font-semibold text-zinc-700">92<span className="text-sm text-zinc-400 font-normal">/100</span></div>
</div>
<button className="w-full md:w-auto px-5 py-2.5 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
                                        View Profile
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-all group">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-shrink-0">
<div className="w-20 h-20 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                                K
                            </div>
</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-1">
<h2 className="text-lg font-semibold text-zinc-900">Koti Renovations</h2>
<iconify-icon className="text-emerald-500" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-3">
<div className="flex items-center gap-1 text-zinc-800 font-medium">
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
                                            4.8 (215 reviews)
                                        </div>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                            Espoo, Uusimaa
                                        </div>
</div>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">
                                        Award-winning kitchen and bathroom specialists. Turnkey solutions from design to final cleaning.
                                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">Kitchens</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">Plumbing</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">HVAC</span>
</div>
</div>
<div className="flex md:flex-col items-center md:items-end gap-3 md:min-w-[140px]">
<div className="text-right hidden md:block">
<div className="text-xs text-zinc-400 mb-0.5">Trust Score</div>
<div className="text-2xl font-semibold text-emerald-600">96<span className="text-sm text-zinc-400 font-normal">/100</span></div>
</div>
<button className="w-full md:w-auto px-5 py-2.5 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
                                        View Profile
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-all group">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-shrink-0">
<div className="w-20 h-20 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl font-bold">
                                N
                            </div>
</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-1">
<h2 className="text-lg font-semibold text-zinc-900">Nordic Living</h2>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-3">
<div className="flex items-center gap-1 text-zinc-800 font-medium">
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
                                            4.3 (18 reviews)
                                        </div>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                            Turku, Varsinais-Suomi
                                        </div>
</div>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">
                                        Specialized in flooring and surface treatments. Parquet sanding, varnishing, and installation of new floors.
                                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">Flooring</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600">Carpentry</span>
</div>
</div>
<div className="flex md:flex-col items-center md:items-end gap-3 md:min-w-[140px]">
<div className="text-right hidden md:block">
<div className="text-xs text-zinc-400 mb-0.5">Trust Score</div>
<div className="text-2xl font-semibold text-zinc-700">88<span className="text-sm text-zinc-400 font-normal">/100</span></div>
</div>
<button className="w-full md:w-auto px-5 py-2.5 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
                                        View Profile
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="pt-8 flex items-center justify-between border-t border-zinc-200">
<button className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-2 transition-colors disabled:opacity-50" disabled="">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
                        Previous
                    </button>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg bg-zinc-900 text-white text-sm font-medium">1</button>
<button className="w-8 h-8 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium transition-colors">2</button>
<button className="w-8 h-8 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium transition-colors">3</button>
<span className="text-zinc-400 text-sm px-1">...</span>
<button className="w-8 h-8 rounded-lg hover:bg-zinc-100 text-zinc-600 text-sm font-medium transition-colors">12</button>
</div>
<button className="px-4 py-2 text-sm font-medium text-zinc-900 hover:text-zinc-700 flex items-center gap-2 transition-colors">
                        Next
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</main>
</div>
</div>

<footer className="bg-white border-t border-zinc-200 py-12 mt-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tighter text-zinc-900">LUOTTAA</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900" href="#">Privacy</a>
<a className="hover:text-zinc-900" href="#">Terms</a>
<a className="hover:text-zinc-900" href="#">Contact</a>
</div>
<span className="text-xs text-zinc-400">© 2024 Luottaa Oy</span>
</div>
</footer>

    </>
  );
}
