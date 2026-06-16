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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:steering-wheel-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl tracking-tight font-medium uppercase tracking-widest">
                Autolink
              </span>
</a>
<div className="hidden md:flex space-x-6">
<a className="text-sm font-medium text-gray-900" href="#">Buy</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
                Rent
              </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
                Sell
              </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
                Finance
              </a>
</div>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
<a className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors hidden sm:block" href="#">
              Log in
            </a>
<a className="bg-gray-900 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors" href="#">
              Post an ad
            </a>
<button className="md:hidden p-2 text-gray-500">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="advanced-search py-8 md:py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
<div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">
              Advanced search: Cars
            </h1>
<p className="text-sm text-gray-500 mt-2">
              Refine your vehicle search with detailed filters.
            </p>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<button className="text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-50" type="button">
<iconify-icon className="text-lg" icon="solar:bookmark-linear" strokeWidth="1.5"></iconify-icon>
              Save this search
            </button>
<button className="bg-orange-500 text-white px-6 py-3 text-sm font-medium rounded-xl hover:bg-orange-600 transition-colors shadow-sm" type="button">
              Show 342,104 offers
            </button>
</div>
</div>
<form className="space-y-6">
<details className="filter-card bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden" open="">
<summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
<h2 className="text-xl tracking-tight font-medium text-gray-900">
                Basic data
              </h2>
<iconify-icon className="chevron text-xl text-gray-400 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="border-t border-gray-100 p-5 md:p-6 space-y-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<label className="select-field block">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Brand
                  </span>
<select className="w-full h-10 bg-white border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 focus:border-purple-600 outline-none">
<option>Any brand</option>
<option>Audi</option>
<option>BMW</option>
<option>Mercedes-Benz</option>
<option>Volkswagen</option>
</select>
</label>
<label className="select-field block">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Model
                  </span>
<select className="w-full h-10 bg-white border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 focus:border-purple-600 outline-none">
<option>Any model</option>
</select>
</label>
<label className="block">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Model variant
                  </span>
<input className="w-full h-10 bg-white border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 focus:border-purple-600 outline-none" placeholder="e.g. Sportback" type="text"/>
</label>
</div>
<div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
<a className="text-purple-700 hover:text-purple-800" href="#">
                  + Add more vehicles
                </a>
<a className="text-gray-500 hover:text-gray-900" href="#">
                  Exclude vehicle
                </a>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                  Vehicle type
                </h3>
<div className="checkbox-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<label className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 text-sm hover:border-purple-200 hover:bg-purple-50/40 transition-colors">
<input className="rounded border-gray-300" type="checkbox"/>
<iconify-icon className="text-gray-400 text-lg" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
                    Convertible/Roadster
                  </label>
<label className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 text-sm hover:border-purple-200 hover:bg-purple-50/40 transition-colors">
<input className="rounded border-gray-300" type="checkbox"/>
<iconify-icon className="text-gray-400 text-lg" icon="solar:bus-linear" strokeWidth="1.5"></iconify-icon>
                    Off-road vehicle/Pickup truck/SUV
                  </label>
<label className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 text-sm hover:border-purple-200 hover:bg-purple-50/40 transition-colors">
<input className="rounded border-gray-300" type="checkbox"/>
<iconify-icon className="text-gray-400 text-lg" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
                    Small cars
                  </label>
<label className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 text-sm hover:border-purple-200 hover:bg-purple-50/40 transition-colors">
<input className="rounded border-gray-300" type="checkbox"/>
<iconify-icon className="text-gray-400 text-lg" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
                    Combination
                  </label>
<label className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 text-sm hover:border-purple-200 hover:bg-purple-50/40 transition-colors">
<input className="rounded border-gray-300" type="checkbox"/>
<iconify-icon className="text-gray-400 text-lg" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
                    Limousine
                  </label>
<label className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 text-sm hover:border-purple-200 hover:bg-purple-50/40 transition-colors">
<input className="rounded border-gray-300" type="checkbox"/>
<iconify-icon className="text-gray-400 text-lg" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
                    Sports car/Coupé
                  </label>
<label className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 text-sm hover:border-purple-200 hover:bg-purple-50/40 transition-colors">
<input className="rounded border-gray-300" type="checkbox"/>
<iconify-icon className="text-gray-400 text-lg" icon="solar:bus-linear" strokeWidth="1.5"></iconify-icon>
                    Van/Minibus
                  </label>
<label className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 text-sm hover:border-purple-200 hover:bg-purple-50/40 transition-colors">
<input className="rounded border-gray-300" type="checkbox"/>
<iconify-icon className="text-gray-400 text-lg" icon="solar:garage-linear" strokeWidth="1.5"></iconify-icon>
                    Other
                  </label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
<div className="range-input">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Number of seats
                  </span>
<div className="grid grid-cols-2 gap-2">
<select className="h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>from</option>
<option>2</option>
<option>4</option>
<option>5</option>
</select>
<select className="h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>until</option>
<option>5</option>
<option>7</option>
<option>9</option>
</select>
</div>
</div>
<label className="select-field block">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Number of doors
                  </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>2/3</option>
<option>4/5</option>
</select>
</label>
<div className="segmented-control">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Payment method
                  </span>
<div className="grid grid-cols-2 rounded-lg bg-gray-100 p-1">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="payment" type="radio"/>
<span className="block text-center text-sm font-medium rounded-md px-3 py-2 peer-checked:bg-purple-600 peer-checked:text-white text-gray-600">
                        Buy
                      </span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="payment" type="radio"/>
<span className="block text-center text-sm font-medium rounded-md px-3 py-2 peer-checked:bg-purple-600 peer-checked:text-white text-gray-600">
                        Lease
                      </span>
</label>
</div>
</div>
<div className="radio-group">
<span className="block text-xs font-medium text-gray-500 mb-2">
                    Sliding door
                  </span>
<div className="space-y-1.5 text-sm">
<label className="flex items-center gap-2">
<input checked="" name="sliding" type="radio"/>
                      Any
                    </label>
<label className="flex items-center gap-2">
<input name="sliding" type="radio"/>
                      Sliding door on the right
                    </label>
<label className="flex items-center gap-2">
<input name="sliding" type="radio"/>
                      Sliding door on the left
                    </label>
<label className="flex items-center gap-2">
<input name="sliding" type="radio"/>
                      Sliding door on both sides
                    </label>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
<div className="range-input">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Price
                  </span>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-7 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="from" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        €
                      </span>
</div>
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-7 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="until" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        €
                      </span>
</div>
</div>
</div>
<div className="range-input">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    First registration
                  </span>
<div className="grid grid-cols-2 gap-2">
<select className="h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>from</option>
<option>2024</option>
<option>2023</option>
<option>2020</option>
</select>
<select className="h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>until</option>
<option>2024</option>
<option>2022</option>
<option>2020</option>
</select>
</div>
</div>
<div className="range-input">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Mileage
                  </span>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-9 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="from" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        km
                      </span>
</div>
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-9 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="until" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        km
                      </span>
</div>
</div>
</div>
<div className="radio-group">
<span className="block text-xs font-medium text-gray-500 mb-2">
                    Vehicle condition
                  </span>
<div className="flex flex-wrap gap-3 text-sm">
<label className="flex items-center gap-2">
<input checked="" name="condition" type="radio"/>
                      Any
                    </label>
<label className="flex items-center gap-2">
<input name="condition" type="radio"/>
                      New
                    </label>
<label className="flex items-center gap-2">
<input name="condition" type="radio"/>
                      Needed
                    </label>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                    Maintenance
                  </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Roadworthy
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Guarantee
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      New inspection
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Non-smoking vehicle
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Full service history
                    </label>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                    Provider
                  </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
<label className="flex items-center gap-2">
<input checked="" name="provider" type="radio"/>
                      Any
                    </label>
<label className="flex items-center gap-2">
<input name="provider" type="radio"/>
                      Dealers
                    </label>
<label className="flex items-center gap-2">
<input name="provider" type="radio"/>
                      Private provider
                    </label>
<label className="flex items-center gap-2">
<input name="provider" type="radio"/>
                      Company vehicles
                    </label>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                      HU minimum valid
                    </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>6 months</option>
<option>12 months</option>
</select>
</label>
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                      Owners
                    </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>1</option>
<option>2</option>
</select>
</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Country
                  </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Germany</option>
<option>Austria</option>
<option>France</option>
</select>
</label>
<label className="md:col-span-2">
<span className="block text-xs font-medium text-gray-500 mb-1">
                    City / Postcode
                  </span>
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="e.g. 10115 Berlin" type="text"/>
</label>
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Area
                  </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>+ 50 km</option>
<option>+ 100 km</option>
<option>Nationwide</option>
</select>
</label>
</div>
<label className="flex items-center gap-2 text-sm text-gray-400 cursor-not-allowed">
<input disabled="" type="checkbox"/>
                Additional offers with delivery
              </label>
<div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
<span className="font-medium text-gray-900">
                  Additional offers with delivery
                </span>
                — This expands your search results to include vehicles that can
                be delivered by the dealer either to a nearby branch or even
                directly to your home.
              </div>
</div>
</details>
<details className="filter-card bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden" open="">
<summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
<h2 className="text-xl tracking-tight font-medium text-gray-900">
                Technical data
              </h2>
<iconify-icon className="chevron text-xl text-gray-400 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="border-t border-gray-100 p-5 md:p-6 space-y-8">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                  Fuel type
                </h3>
<div className="checkbox-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Petrol
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Diesel
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Electric
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Ethanol
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Hybrid Diesel/Electric
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Hybrid Petrol/Electric
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Hydrogen
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Autogas LPG
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Natural gas CNG
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Other
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Plug-in hybrid
                  </label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
<div>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Performance
                  </span>
<div className="grid grid-cols-2 gap-2">
<input className="h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="from" type="text"/>
<input className="h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="until" type="text"/>
</div>
</div>
<div>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Power unit
                  </span>
<div className="grid grid-cols-2 rounded-lg bg-gray-100 p-1">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="powerUnit" type="radio"/>
<span className="block text-center text-sm font-medium rounded-md px-3 py-2 peer-checked:bg-purple-600 peer-checked:text-white text-gray-600">
                        PS
                      </span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="powerUnit" type="radio"/>
<span className="block text-center text-sm font-medium rounded-md px-3 py-2 peer-checked:bg-purple-600 peer-checked:text-white text-gray-600">
                        kW
                      </span>
</label>
</div>
</div>
<div>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Engine displacement
                  </span>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-10 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="from" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        cm³
                      </span>
</div>
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-10 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="until" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        cm³
                      </span>
</div>
</div>
</div>
<div>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Tank size
                  </span>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-7 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="from" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        l
                      </span>
</div>
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-7 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="until" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        l
                      </span>
</div>
</div>
</div>
<div>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Cylinder
                  </span>
<div className="grid grid-cols-2 gap-2">
<input className="h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="from" type="text"/>
<input className="h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="until" type="text"/>
</div>
</div>
<div>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Weight
                  </span>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-8 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="from" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        kg
                      </span>
</div>
<div className="relative">
<input className="w-full h-10 border border-gray-200 rounded-lg px-3 pr-8 text-sm focus:ring-1 focus:ring-purple-600 outline-none" placeholder="until" type="text"/>
<span className="absolute right-3 top-2.5 text-xs text-gray-400">
                        kg
                      </span>
</div>
</div>
</div>
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Fuel consumption combined up to
                  </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>5 l/100 km</option>
<option>7 l/100 km</option>
</select>
</label>
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Environmental badge
                  </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>Green</option>
<option>Yellow</option>
</select>
</label>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                    Drive type
                  </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
<label className="flex items-center gap-2">
<input checked="" name="drive" type="radio"/>
                      Any
                    </label>
<label className="flex items-center gap-2">
<input name="drive" type="radio"/>
                      All-wheel drive
                    </label>
<label className="flex items-center gap-2">
<input name="drive" type="radio"/>
                      Front-wheel drive
                    </label>
<label className="flex items-center gap-2">
<input name="drive" type="radio"/>
                      Rear-wheel drive
                    </label>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                    Transmission
                  </h3>
<div className="grid grid-cols-1 gap-2 text-sm">
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Automatic
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Semi-automatic
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Manual transmission
                    </label>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                      Emissions class
                    </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>Euro 6</option>
<option>Euro 5</option>
</select>
</label>
<label className="flex items-end gap-2 text-sm pb-2">
<input type="checkbox"/>
                    Particle filter
                  </label>
</div>
</div>
</div>
</details>
<details className="filter-card bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden" open="">
<summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
<h2 className="text-xl tracking-tight font-medium text-gray-900">
                Exterior
              </h2>
<iconify-icon className="chevron text-xl text-gray-400 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="border-t border-gray-100 p-5 md:p-6 space-y-8">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                  Exterior paint color
                </h3>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 text-sm">
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-black border border-gray-300"></span>
                    Black
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-amber-100 border border-gray-300"></span>
                    Beige
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-gray-500 border border-gray-300"></span>
                    Gray
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-yellow-900 border border-gray-300"></span>
                    Brown
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-white border border-gray-300"></span>
                    White
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-orange-500 border border-gray-300"></span>
                    Orange
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-blue-600 border border-gray-300"></span>
                    Blue
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-yellow-400 border border-gray-300"></span>
                    Yellow
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-red-600 border border-gray-300"></span>
                    Red
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-green-600 border border-gray-300"></span>
                    Green
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-slate-300 border border-gray-300"></span>
                    Silver
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-yellow-600 border border-gray-300"></span>
                    Gold
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-purple-600 border border-gray-300"></span>
                    Purple
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-gray-300 border border-gray-300"></span>
                    Frosted
                  </label>
<label className="color-swatch-checkbox flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-100 via-gray-400 to-gray-100 border border-gray-300"></span>
                    Metallic
                  </label>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">Towbar</h3>
<div className="space-y-2 text-sm">
<label className="flex items-center gap-2">
<input checked="" name="towbar" type="radio"/>
                      Any
                    </label>
<label className="flex items-center gap-2">
<input name="towbar" type="radio"/>
                      Fixed, removable or swiveling
                    </label>
<label className="flex items-center gap-2">
<input name="towbar" type="radio"/>
                      Removable or swiveling
                    </label>
<label className="flex items-center gap-2">
<input name="towbar" type="radio"/>
                      Swiveling towbar
                    </label>
</div>
</div>
<div className="grid grid-cols-1 gap-4">
<label className="flex items-center gap-2 text-sm">
<input type="checkbox"/>
                    Trailer maneuvering assistant
                  </label>
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                      Braked towing capacity from
                    </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>750 kg</option>
<option>1,500 kg</option>
<option>2,000 kg</option>
</select>
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                      Unbraked towing capacity from
                    </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>500 kg</option>
<option>750 kg</option>
</select>
</label>
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                      Support load from
                    </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>50 kg</option>
<option>75 kg</option>
<option>100 kg</option>
</select>
</label>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                    Parking assistance
                  </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      360° camera
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Parking assistant
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Rear
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Camera
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      Self-steering systems
                    </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                      In front
                    </label>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                    Cruise control
                  </h3>
<div className="flex flex-wrap gap-4 text-sm">
<label className="flex items-center gap-2">
<input checked="" name="cruise" type="radio"/>
                      Any
                    </label>
<label className="flex items-center gap-2">
<input name="cruise" type="radio"/>
                      Cruise control
                    </label>
<label className="flex items-center gap-2">
<input name="cruise" type="radio"/>
                      Adaptive cruise control
                    </label>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                  Exterior extras
                </h3>
<div className="checkbox-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Tinted windows
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    ABS
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Distance warning system
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Adaptive suspension
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Adaptive cornering lights
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    All-weather tires
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Heated windshield
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Accessible for people with disabilities
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Hill start assist
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Bi-Xenon headlights
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Glare-free high beam
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Roof rails
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Electric tailgate
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Electric immobiliser
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    ESP
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Folding roof
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    High beam assist
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Speed limiter
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Cornering lights
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Laser light
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    LED headlights
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    LED daytime running lights
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Alloy wheels
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Light sensor
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Air suspension
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Night Vision Assistant
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Fog lights
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Emergency brake assist
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Spare wheel
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Breakdown kit
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Panoramic roof
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Rain sensor
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Tire pressure monitoring system
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Headlight cleaning system
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Sunroof
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Keyless central locking
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Power steering
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Summer tires
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Sport suspension
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Sports package
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Lane Keeping Assist
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Steel rims
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Start/stop system
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Daytime running lights
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Blind Spot Assist
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Traction control
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Traffic sign recognition
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Winter package
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Winter tires
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Xenon headlights
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Central locking
                  </label>
</div>
</div>
</div>
</details>
<details className="filter-card bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden" open="">
<summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
<h2 className="text-xl tracking-tight font-medium text-gray-900">
                Interior
              </h2>
<iconify-icon className="chevron text-xl text-gray-400 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="border-t border-gray-100 p-5 md:p-6 space-y-8">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                  Interior color
                </h3>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-sm">
<label className="flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-amber-100 border border-gray-300"></span>
                    Beige
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-black border border-gray-300"></span>
                    Black
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-blue-600 border border-gray-300"></span>
                    Blue
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-yellow-900 border border-gray-300"></span>
                    Brown
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-gray-500 border border-gray-300"></span>
                    Gray
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-red-600 border border-gray-300"></span>
                    Red
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
<span className="w-5 h-5 rounded-full bg-white border border-gray-300"></span>
                    Other
                  </label>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                  Interior furnishing material
                </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Alcantara
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Full leather
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Partial leather
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Faux leather
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Velour
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Material
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Other
                  </label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Airbags
                  </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>Driver airbag</option>
<option>Front and side airbags</option>
<option>Full airbags</option>
</select>
</label>
<label>
<span className="block text-xs font-medium text-gray-500 mb-1">
                    Air conditioning
                  </span>
<select className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm focus:ring-1 focus:ring-purple-600 outline-none">
<option>Any</option>
<option>Manual air conditioning</option>
<option>Automatic climate control</option>
<option>Multi-zone climate control</option>
</select>
</label>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-3">
                  Interior features
                </h3>
<div className="checkbox-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Alarm system
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Ambient lighting
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Android Auto
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Apple CarPlay
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Armrest
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Heated steering wheel
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Bluetooth
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    On-board computer
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    CD player
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Electric window regulator
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Electric side mirrors
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Electrically folding side mirrors
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Electric seat adjustment
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Electric seat adjustment with memory function
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Electric seat adjustment, rear
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Hands-free system
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Luggage compartment partition
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Head-up Display
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Inductive charging for smartphones
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Interior mirror with automatic dimming
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Isofix
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Isofix passenger seat
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Leather steering wheel
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Lumbar support
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Massage seats
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Fatigue warning
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Multifunction steering wheel
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Music streaming integrated
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Navigation system
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Emergency call system
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    DAB radio
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Smoker’s package
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Right-hand drive
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Paddle shifters
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Seat ventilation
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Heated seats
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Rear seat heating
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Ski bag
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Sound system
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Sports seats
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Voice control
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Auxiliary heater
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Touchscreen
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Tuner/Radio
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    TV
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Folding passenger seat
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    USB
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Virtual side mirrors
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Fully digital instrument cluster
                  </label>
<label className="flex items-center gap-2">
<input type="checkbox"/>
                    Wi-Fi hotspot
                  </label>
</div>
</div>
</div>
</details>
</form>
</div>
</main>

<footer className="bg-white border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:steering-wheel-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight uppercase tracking-widest text-gray-900">
            Autolink
          </span>
</div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-gray-900" href="#">About</a>
<a className="hover:text-gray-900" href="#">Privacy</a>
<a className="hover:text-gray-900" href="#">Terms</a>
<a className="hover:text-gray-900" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
