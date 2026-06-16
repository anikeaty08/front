import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons globally with 1.5 stroke width for cleaner UI
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Simple script for Accordion toggle
        function toggleAccordion(contentId, iconId) {
            const content = document.getElementById(contentId);
            const icon = document.getElementById(iconId);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                content.classList.add('block');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                content.classList.remove('block');
                icon.classList.remove('rotate-180');
            }
        }

        // Simple script for Modal toggle
        function toggleModal() {
            const modal = document.getElementById('concierge-modal');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex z-10">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-gray-900">
<div className="w-8 h-8 bg-gray-900 text-white rounded-md flex items-center justify-center font-medium">K</div>
                Koli.
            </div>
</div>
<div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">

<div>
<h3 className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Menu</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="layout-dashboard"></i>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-purple-50 text-purple-700 rounded-md transition-colors relative" href="#">
<i className="w-4 h-4 text-purple-600" data-lucide="shopping-cart"></i>
                        Orders &amp; Purchases
                        <span className="absolute right-2 w-1.5 h-1.5 rounded-full bg-purple-600"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="truck"></i>
                        Logistics &amp; Cargos
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="users"></i>
                        Clients &amp; Wallets
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="sparkles"></i>
                        Inspiration Catalog
                    </a>
</nav>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Finance</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="wallet"></i>
                        Treasury
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="pie-chart"></i>
                        Net Margin
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="bar-chart-3"></i>
                        Data &amp; Insights
                    </a>
</nav>
</div>
</div>
<div className="p-4 border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="settings"></i>
                Settings &amp; Rates
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors mt-1" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="log-out"></i>
                Log out
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-8 bg-white border-b border-gray-200 z-10 shrink-0">
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Orders &amp; Purchases</h1>
<div className="flex items-center gap-4">
<button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-50">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
</button>
<div className="h-6 w-px bg-gray-200"></div>
<button className="flex items-center gap-2 hover:bg-gray-50 py-1 px-2 rounded-lg transition-colors">
<img alt="Khadija W." className="w-8 h-8 rounded-full border border-gray-200 object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<span className="text-sm font-medium text-gray-700 hidden sm:block">Khadija W.</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="space-y-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Hello, Khadija!</h2>
<p className="text-base text-gray-500">Manage ongoing purchases and organize incoming shipments.</p>
</div>

<div className="flex flex-col xl:flex-row gap-4 justify-between items-start xl:items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">

<div className="relative w-full xl:w-96 shrink-0">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" placeholder="Search by Phone, Order ID, or Name..." type="text"/>
</div>

<div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
<button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-900 rounded-md text-sm font-medium transition-colors border border-gray-200">
<span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_0_2px_rgba(239,68,68,0.2)]"></span>
                                Urgent
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors border border-transparent hover:border-gray-200">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                Partial
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors border border-transparent hover:border-gray-200">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Purchased
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors border border-transparent hover:border-gray-200">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                Forwarder
                            </button>
</div>

<button className="w-full xl:w-auto flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm shrink-0" onclick="toggleModal()">
<i className="w-4 h-4" data-lucide="plus"></i>
                            Create Manual Cart
                        </button>
</div>
</div>

<div className="space-y-4 pt-2">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200" id="accordion-1">

<div className="flex flex-col lg:flex-row lg:items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors gap-4" onclick="toggleAccordion('accordion-1-content', 'accordion-1-icon')">

<div className="flex items-center gap-4 min-w-0">
<i className="w-5 h-5 text-gray-400 transition-transform duration-200 rotate-180" data-lucide="chevron-down" id="accordion-1-icon"></i>
<div className="flex flex-col gap-0.5 min-w-[120px]">
<span className="text-sm font-medium text-gray-900 truncate">#KOLI-8942</span>
<span className="text-sm text-gray-500">Today, 14:30</span>
</div>
<div className="hidden md:flex items-center gap-2 w-48">
<img className="w-7 h-7 rounded-full bg-gray-100 object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024e"/>
<span className="text-sm font-medium text-gray-700 truncate">Amina Naseer</span>
<button className="text-green-500 hover:text-green-600 transition-colors shrink-0" title="WhatsApp">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
</button>
</div>
<div className="text-sm font-semibold text-gray-900 w-28 text-right lg:text-left">34,500 FCFA</div>
</div>

<div className="flex items-center gap-3 sm:gap-6 ml-9 lg:ml-0 flex-wrap lg:flex-nowrap">

<div className="flex items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-sm font-medium border border-gray-200">
                                        Single Purchase
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-sm font-medium border border-red-100">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                        Urgent
                                    </span>
</div>
<div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

<div className="flex items-center gap-3 w-full sm:w-auto" onclick="event.stopPropagation()">
<input className="w-full sm:w-40 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-gray-400" placeholder="Enter Tracking No." type="text"/>
<button className="shrink-0 bg-gray-900 hover:bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                                        Confirm All
                                    </button>
</div>
</div>
</div>

<div className="border-t border-gray-200 bg-gray-50/80 p-4 sm:p-6 block" id="accordion-1-content">
<div className="space-y-3">

<div className="hidden md:flex items-center px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
<div className="w-12"></div>
<div className="flex-1">Item Details</div>
<div className="w-32">Size / Color</div>
<div className="w-32">Unit Price</div>
<div className="w-40">Source</div>
<div className="w-24 text-right">Action</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition-colors">
<img alt="Nike Air Max" className="w-12 h-12 rounded-md object-cover border border-gray-100 shrink-0" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-gray-900 truncate">Nike Air Max 270 React</h4>
<p className="text-sm text-gray-500 truncate mt-0.5">SKU: SHN-99281</p>
</div>
<div className="md:w-32 flex flex-col md:block">
<span className="md:hidden text-sm text-gray-500 mb-1">Size/Color:</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 text-sm font-medium">XL / Red</span>
</div>
<div className="md:w-32 flex flex-col md:block">
<span className="md:hidden text-sm text-gray-500 mb-1">Price:</span>
<span className="text-sm font-medium text-gray-900">15,500 FCFA</span>
</div>
<div className="md:w-40 shrink-0">
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200 text-sm font-medium transition-colors w-fit" href="#">
<i className="w-3.5 h-3.5" data-lucide="globe"></i>
                                            Open Shein
                                        </a>
</div>
<div className="md:w-24 flex items-center md:justify-end shrink-0 mt-2 md:mt-0 pt-3 md:pt-0 border-t border-gray-100 md:border-0">
<label className="relative flex items-center gap-2 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 bg-white rounded flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-500 transition-all shadow-sm group-hover:border-gray-400">
<i className="w-3.5 h-3.5 text-white hidden peer-checked:block stroke-[3px]" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-gray-700 md:hidden">Confirm Item</span>
</label>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition-colors">
<div className="w-12 h-12 rounded-md bg-gray-100 border border-gray-200 shrink-0 flex items-center justify-center text-gray-400">
<i className="w-5 h-5" data-lucide="image"></i>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-gray-900 truncate">Oversized Minimalist T-Shirt</h4>
<p className="text-sm text-gray-500 truncate mt-0.5">SKU: SHN-44210</p>
</div>
<div className="md:w-32 flex flex-col md:block">
<span className="md:hidden text-sm text-gray-500 mb-1">Size/Color:</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 text-sm font-medium">L / Beige</span>
</div>
<div className="md:w-32 flex flex-col md:block">
<span className="md:hidden text-sm text-gray-500 mb-1">Price:</span>
<span className="text-sm font-medium text-gray-900">19,000 FCFA</span>
</div>
<div className="md:w-40 shrink-0">
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200 text-sm font-medium transition-colors w-fit" href="#">
<i className="w-3.5 h-3.5" data-lucide="globe"></i>
                                            Open Shein
                                        </a>
</div>
<div className="md:w-24 flex items-center md:justify-end shrink-0 mt-2 md:mt-0 pt-3 md:pt-0 border-t border-gray-100 md:border-0">
<label className="relative flex items-center gap-2 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 bg-white rounded flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-500 transition-all shadow-sm group-hover:border-gray-400">
<i className="w-3.5 h-3.5 text-white hidden peer-checked:block stroke-[3px]" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-gray-700 md:hidden">Confirm Item</span>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200" id="accordion-2">
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors gap-4" onclick="toggleAccordion('accordion-2-content', 'accordion-2-icon')">

<div className="flex items-center gap-4 min-w-0">
<i className="w-5 h-5 text-gray-400 transition-transform duration-200" data-lucide="chevron-down" id="accordion-2-icon"></i>
<div className="flex flex-col gap-0.5 min-w-[120px]">
<span className="text-sm font-medium text-gray-900 truncate">#KOLI-8941</span>
<span className="text-sm text-gray-500">20 Feb, 11:15</span>
</div>
<div className="hidden md:flex items-center gap-2 w-48">
<img className="w-7 h-7 rounded-full bg-gray-100 object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024f"/>
<span className="text-sm font-medium text-gray-700 truncate">Karim Samy</span>
<button className="text-green-500 hover:text-green-600 transition-colors shrink-0" title="WhatsApp">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
</button>
</div>
<div className="text-sm font-semibold text-gray-900 w-28 text-right lg:text-left">65,600 FCFA</div>
</div>

<div className="flex items-center gap-3 sm:gap-6 ml-9 lg:ml-0 flex-wrap lg:flex-nowrap">
<div className="flex items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-sm font-medium border border-gray-200">
                                        Cargo #12
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-medium border border-yellow-100">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                        Partially Purchased
                                    </span>
</div>
<div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
<div className="flex items-center gap-3 w-full sm:w-auto" onclick="event.stopPropagation()">
<input className="w-full sm:w-40 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-500 cursor-not-allowed" disabled="" placeholder="Enter Tracking No." type="text"/>
<button className="shrink-0 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                                        View Details
                                    </button>
</div>
</div>
</div>

<div className="border-t border-gray-200 bg-gray-50/80 p-4 sm:p-6 hidden" id="accordion-2-content">

<div className="text-sm text-gray-500 text-center py-4">Loading order details...</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200">
<div className="flex flex-col lg:flex-row lg:items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors gap-4">

<div className="flex items-center gap-4 min-w-0">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
<div className="flex flex-col gap-0.5 min-w-[120px]">
<span className="text-sm font-medium text-gray-900 truncate">#KOLI-8910</span>
<span className="text-sm text-gray-500">18 Feb, 09:00</span>
</div>
<div className="hidden md:flex items-center gap-2 w-48">
<img className="w-7 h-7 rounded-full bg-gray-100 object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024c"/>
<span className="text-sm font-medium text-gray-700 truncate">Sarah F.</span>
</div>
<div className="text-sm font-semibold text-gray-900 w-28 text-right lg:text-left">24,000 FCFA</div>
</div>

<div className="flex items-center gap-3 sm:gap-6 ml-9 lg:ml-0 flex-wrap lg:flex-nowrap">
<div className="flex items-center gap-2 shrink-0">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-sm font-medium border border-gray-200">
                                        Single Purchase
                                    </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        At Forwarder
                                    </span>
</div>
<div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<button className="shrink-0 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                                        Edit Tracking
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between py-4">
<span className="text-sm text-gray-500">Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">3</span> of <span className="font-medium text-gray-900">85</span> total orders</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 border border-gray-200 bg-white text-gray-500 rounded-md text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled="">Previous</button>
<button className="px-3 py-1.5 border border-gray-200 bg-white text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 shadow-sm">Next</button>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden" id="concierge-modal">

<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onclick="toggleModal()"></div>

<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-gray-200">
<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Create Manual Shopping Cart</h3>
<button className="text-gray-400 hover:text-gray-500 transition-colors p-1 rounded-md hover:bg-gray-100" onclick="toggleModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="px-6 py-6 space-y-5">

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Select Customer</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-gray-900 pr-10 shadow-sm">
<option disabled="" selected="" value="">Search or select a customer...</option>
<option>Amina Naseer</option>
<option>Karim Samy</option>
<option>Sarah F.</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevrons-up-down"></i>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Product Link (Shein, Zara, etc.)</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-4 w-4 text-gray-400" data-lucide="link"></i>
</div>
<input className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 shadow-sm" placeholder="https://" type="url"/>
</div>
</div>

<div>
<span className="block text-sm font-medium text-gray-700 mb-1.5">Or Upload Screenshot</span>
<div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-8 hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="text-center">
<div className="mx-auto h-10 w-10 text-gray-300 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
<i className="h-5 w-5" data-lucide="upload-cloud"></i>
</div>
<div className="flex text-sm text-gray-600 justify-center">
<label className="relative cursor-pointer rounded-md bg-transparent font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none">
<span>Upload a file</span>
<input className="sr-only" type="file"/>
</label>
<p className="pl-1">or drag and drop</p>
</div>
<p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Unit Price</label>
<div className="relative">
<input className="w-full pl-4 pr-12 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 shadow-sm text-right font-medium" placeholder="0.00" type="number"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm">FCFA</span>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 shadow-sm font-medium" min="1" type="number" value="1"/>
</div>
</div>
</div>
<div className="bg-gray-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-gray-100 rounded-b-xl">
<button className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm" onclick="toggleModal()">
                            Cancel
                        </button>
<button className="px-4 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors shadow-sm">
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
