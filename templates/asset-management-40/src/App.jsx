import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Data for Dynamic Forms
        const assetSchemas = {
            vehicle: {
                label: "Vehicle",
                icon: "car",
                tabs: [
                    {
                        name: "Basic Details",
                        fields: [
                            { label: "Vehicle Name", type: "text", placeholder: "e.g. Ford Transit 2023" },
                            { label: "Registration Number", type: "text", placeholder: "e.g. ABC-1234" },
                            { label: "Vehicle Type", type: "select", options: ["Car", "Van", "Truck", "Bike"] },
                            { label: "Fuel Type", type: "select", options: ["Petrol", "Diesel", "Electric", "Hybrid"] },
                            { label: "Purchase Date", type: "date" },
                            { label: "Purchase Value", type: "text", prefix: "$" }
                        ]
                    },
                    {
                        name: "Compliance",
                        fields: [
                            { label: "Insurance Expiry", type: "date" },
                            { label: "Permit Expiry", type: "date" },
                            { label: "Policy Number", type: "text" }
                        ]
                    }
                ]
            },
            property: {
                label: "Property",
                icon: "building",
                tabs: [
                    {
                        name: "Property Info",
                        fields: [
                            { label: "Property Name", type: "text", placeholder: "e.g. HQ Building" },
                            { label: "Type", type: "select", options: ["Office", "Warehouse", "Land"] },
                            { label: "Ownership", type: "select", options: ["Owned", "Leased"] },
                            { label: "Area (sqft)", type: "number" },
                            { label: "Address", type: "textarea" }
                        ]
                    },
                    {
                        name: "Legal",
                        fields: [
                            { label: "Title Deed No.", type: "text" },
                            { label: "Lease Expiry", type: "date" }
                        ]
                    }
                ]
            },
            equipment: {
                label: "Equipment",
                icon: "settings",
                tabs: [
                    {
                         name: "Details",
                         fields: [
                             { label: "Name", type: "text" },
                             { label: "Serial Number", type: "text" },
                             { label: "Manufacturer", type: "text" }
                         ]
                    },
                    {
                        name: "Maintenance",
                        fields: [
                            { label: "Cycle", type: "select", options: ["Monthly", "Yearly"] },
                            { label: "Last Service", type: "date" }
                        ]
                    }
                ]
            },
            digital: {
                label: "Digital Asset",
                icon: "monitor",
                tabs: [
                    {
                        name: "Asset Info",
                        fields: [
                            { label: "Asset Name", type: "text" },
                            { label: "Category", type: "select", options: ["Hardware", "Software", "Cloud"] }
                        ]
                    },
                    {
                        name: "License",
                        fields: [
                            { label: "License Key", type: "text" },
                            { label: "Renewal Date", type: "date" }
                        ]
                    }
                ]
            },
            ip: {
                label: "Intellectual Property",
                icon: "shield",
                tabs: [
                    {
                        name: "IP Details",
                        fields: [
                            { label: "IP Name", type: "text" },
                            { label: "Type", type: "select", options: ["Patent", "Trademark", "Copyright"] }
                        ]
                    },
                    {
                        name: "Validity",
                        fields: [
                            { label: "Registration No", type: "text" },
                            { label: "Valid Until", type: "date" }
                        ]
                    }
                ]
            }
        };

        let currentType = null;
        let currentTab = 0;

        // UI Functions
        function openAddAsset() {
            const overlay = document.getElementById('addAssetOverlay');
            const panel = document.getElementById('overlayPanel');
            const backdrop = document.getElementById('overlayBackdrop');
            
            overlay.classList.remove('hidden');
            // Small delay for animation
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                panel.classList.remove('translate-x-full');
            }, 10);
            
            resetSelection();
        }

        function closeAddAsset() {
            const overlay = document.getElementById('addAssetOverlay');
            const panel = document.getElementById('overlayPanel');
            const backdrop = document.getElementById('overlayBackdrop');

            panel.classList.add('translate-x-full');
            backdrop.classList.add('opacity-0');
            
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300);
        }

        function resetSelection() {
            document.getElementById('step-selection').classList.remove('hidden');
            document.getElementById('step-form').classList.add('hidden');
            currentType = null;
        }

        function selectType(type) {
            currentType = type;
            const schema = assetSchemas[type];
            
            // UI Switch
            document.getElementById('step-selection').classList.add('hidden');
            document.getElementById('step-form').classList.remove('hidden');
            
            // Set Header Info
            document.getElementById('selected-type-label').innerText = schema.label;
            document.getElementById('selected-icon').setAttribute('data-lucide', schema.icon);
            lucide.createIcons();

            // Render Tabs
            renderTabs(schema);
            
            // Render Fields for first tab
            renderFields(schema, 0);
        }

        function renderTabs(schema) {
            const tabContainer = document.getElementById('form-tabs');
            tabContainer.innerHTML = '';
            
            schema.tabs.forEach((tab, index) => {
                const btn = document.createElement('button');
                const isActive = index === 0;
                btn.className = `whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${isActive ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`;
                btn.innerText = tab.name;
                btn.onclick = () => {
                    // Reset styling
                    Array.from(tabContainer.children).forEach(c => {
                        c.className = 'whitespace-nowrap py-3 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors';
                    });
                    // Set active styling
                    btn.className = 'whitespace-nowrap py-3 px-1 border-b-2 border-gray-900 font-medium text-sm text-gray-900 transition-colors';
                    renderFields(schema, index);
                };
                tabContainer.appendChild(btn);
            });
        }

        function renderFields(schema, tabIndex) {
            const container = document.getElementById('form-fields');
            container.innerHTML = '';
            
            // Fade effect
            container.style.opacity = '0';
            
            const fields = schema.tabs[tabIndex].fields;
            
            const gridDiv = document.createElement('div');
            gridDiv.className = 'grid grid-cols-2 gap-4';

            fields.forEach(field => {
                const wrapper = document.createElement('div');
                wrapper.className = field.type === 'textarea' ? 'col-span-2' : 'col-span-1';
                
                const label = document.createElement('label');
                label.className = 'block text-xs font-medium text-gray-500 mb-1.5';
                label.innerText = field.label;
                
                let input;
                
                if (field.type === 'select') {
                    const relativeDiv = document.createElement('div');
                    relativeDiv.className = 'relative';
                    
                    const select = document.createElement('select');
                    select.className = 'block w-full rounded-lg border-gray-200 text-sm px-3 py-2 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 appearance-none bg-white';
                    
                    field.options.forEach(opt => {
                        const option = document.createElement('option');
                        option.value = opt;
                        option.innerText = opt;
                        select.appendChild(option);
                    });
                    
                    const icon = document.createElement('i');
                    icon.setAttribute('data-lucide', 'chevron-down');
                    icon.className = 'w-4 h-4 text-gray-400 absolute right-3 top-2.5 pointer-events-none';
                    
                    relativeDiv.appendChild(select);
                    relativeDiv.appendChild(icon);
                    input = relativeDiv;
                } else if (field.type === 'textarea') {
                    input = document.createElement('textarea');
                    input.rows = 3;
                    input.className = 'block w-full rounded-lg border-gray-200 text-sm px-3 py-2 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 placeholder:text-gray-400';
                } else {
                    input = document.createElement('input');
                    input.type = field.type === 'date' ? 'date' : 'text';
                    input.placeholder = field.placeholder || '';
                    input.className = 'block w-full rounded-lg border-gray-200 text-sm px-3 py-2 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 placeholder:text-gray-400';
                }

                wrapper.appendChild(label);
                wrapper.appendChild(input);
                gridDiv.appendChild(wrapper);
            });

            container.appendChild(gridDiv);
            lucide.createIcons();
            
            // Fade in
            setTimeout(() => {
                container.style.transition = 'opacity 0.2s ease';
                container.style.opacity = '1';
            }, 10);
        }
        
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white">
<span className="font-bold text-xs tracking-tighter">AM</span>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900">ACME ASSETS</span>
</div>
</div>
<nav className="flex-1 px-3 py-6 space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-lg" href="#">
<i className="w-4 h-4 text-gray-900" data-lucide="layout-grid"></i>
                Asset List
            </a>
<button className="w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" onclick="openAddAsset()">
<i className="w-4 h-4 text-gray-500 group-hover:text-gray-900" data-lucide="plus-circle"></i>
                Add Asset
            </button>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4 text-gray-500 group-hover:text-gray-900" data-lucide="calendar"></i>
                Calendar
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4 text-gray-500 group-hover:text-gray-900" data-lucide="bar-chart-3"></i>
                Reports
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">Jane Doe</span>
<span className="text-[10px] text-gray-500">Asset Manager</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10">
<div className="flex items-center text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer">Module</span>
<span className="mx-2 text-gray-300">/</span>
<span className="text-gray-900 font-medium">Asset List</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-gray-600" data-lucide="search"></i>
<input className="pl-9 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all placeholder:text-gray-400" placeholder="Search assets..." type="text"/>
</div>
<button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-auto p-8">

<div className="grid grid-cols-4 gap-6 mb-8">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
<i className="w-4 h-4 text-gray-600" data-lucide="box"></i>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">1,248</div>
<div className="text-xs text-gray-500 mt-1">Total Assets</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
<i className="w-4 h-4 text-gray-600" data-lucide="dollar-sign"></i>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">$4.2M</div>
<div className="text-xs text-gray-500 mt-1">Total Value</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
<i className="w-4 h-4 text-gray-600" data-lucide="tool"></i>
</div>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Alert</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">14</div>
<div className="text-xs text-gray-500 mt-1">Maintenance Due</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
<i className="w-4 h-4 text-gray-600" data-lucide="refresh-cw"></i>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">28</div>
<div className="text-xs text-gray-500 mt-1">Upcoming Renewals</div>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50">All Assets</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">Active</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">Draft</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">Archived</button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50">
<i className="w-3.5 h-3.5" data-lucide="filter"></i> Filter
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50">
<i className="w-3.5 h-3.5" data-lucide="download"></i> Export
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 border border-gray-900 rounded-md shadow-sm hover:bg-gray-800 transition-colors" onclick="openAddAsset()">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> New Asset
                    </button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="py-3 px-4 w-12">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Asset Code</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Name</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Type</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Value</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 text-xs font-medium text-gray-500 font-mono">AST-2023-4821</td>
<td className="py-3 px-4 text-sm font-medium text-gray-900">MacBook Pro M2 16"</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2 text-xs text-gray-600">
<i className="w-3.5 h-3.5" data-lucide="monitor"></i>
                                    Digital / IT
                                </div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-green-50 text-green-700 border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Active
                                </span>
</td>
<td className="py-3 px-4 text-sm text-gray-600">$2,499.00</td>
<td className="py-3 px-4 text-right">
<button className="p-1.5 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 text-xs font-medium text-gray-500 font-mono">AST-2022-1102</td>
<td className="py-3 px-4 text-sm font-medium text-gray-900">Ford Transit Van</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2 text-xs text-gray-600">
<i className="w-3.5 h-3.5" data-lucide="car"></i>
                                    Vehicle
                                </div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                    Maintenance
                                </span>
</td>
<td className="py-3 px-4 text-sm text-gray-600">$35,000.00</td>
<td className="py-3 px-4 text-right">
<button className="p-1.5 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 text-xs font-medium text-gray-500 font-mono">AST-2023-9921</td>
<td className="py-3 px-4 text-sm font-medium text-gray-900">Warehouse - Sector 7</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2 text-xs text-gray-600">
<i className="w-3.5 h-3.5" data-lucide="building"></i>
                                    Property
                                </div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-green-50 text-green-700 border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Active
                                </span>
</td>
<td className="py-3 px-4 text-sm text-gray-600">$1,200,000</td>
<td className="py-3 px-4 text-right">
<button className="p-1.5 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 text-xs font-medium text-gray-500 font-mono">AST-2024-0001</td>
<td className="py-3 px-4 text-sm font-medium text-gray-900">Project Alpha Patent</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2 text-xs text-gray-600">
<i className="w-3.5 h-3.5" data-lucide="shield"></i>
                                    Intellectual Property
                                </div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                    Draft
                                </span>
</td>
<td className="py-3 px-4 text-sm text-gray-600">--</td>
<td className="py-3 px-4 text-right">
<button className="p-1.5 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>

<div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
<span className="text-xs text-gray-500">Showing 1-4 of 128 assets</span>
<div className="flex gap-1">
<button className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled="">Prev</button>
<button className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50">Next</button>
</div>
</div>
</div>
</div>
</main>

<div aria-modal="true" className="fixed inset-0 z-30 hidden" id="addAssetOverlay" role="dialog">

<div className="absolute inset-0 bg-gray-900/20 backdrop-blur-[1px] transition-opacity opacity-0" id="overlayBackdrop" onclick="closeAddAsset()"></div>

<div className="absolute inset-y-0 right-0 max-w-2xl w-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col" id="overlayPanel">

<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Add New Asset</h2>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" onclick="closeAddAsset()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto">

<div className="p-6" id="step-selection">
<p className="text-sm text-gray-500 mb-4">Select the type of asset you want to register.</p>
<div className="grid grid-cols-2 gap-3">

<button className="flex flex-col items-start p-4 border border-gray-200 rounded-xl hover:border-gray-900 hover:ring-1 hover:ring-gray-900 transition-all text-left group" onclick="selectType('vehicle')">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
<i className="w-4 h-4 text-gray-600 group-hover:text-white" data-lucide="car"></i>
</div>
<span className="text-sm font-medium text-gray-900">Vehicle</span>
<span className="text-xs text-gray-500 mt-1">Cars, trucks, vans &amp; fleet</span>
</button>

<button className="flex flex-col items-start p-4 border border-gray-200 rounded-xl hover:border-gray-900 hover:ring-1 hover:ring-gray-900 transition-all text-left group" onclick="selectType('property')">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
<i className="w-4 h-4 text-gray-600 group-hover:text-white" data-lucide="building"></i>
</div>
<span className="text-sm font-medium text-gray-900">Property</span>
<span className="text-xs text-gray-500 mt-1">Real estate, offices &amp; land</span>
</button>

<button className="flex flex-col items-start p-4 border border-gray-200 rounded-xl hover:border-gray-900 hover:ring-1 hover:ring-gray-900 transition-all text-left group" onclick="selectType('equipment')">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
<i className="w-4 h-4 text-gray-600 group-hover:text-white" data-lucide="settings"></i>
</div>
<span className="text-sm font-medium text-gray-900">Equipment</span>
<span className="text-xs text-gray-500 mt-1">Machinery &amp; tools</span>
</button>

<button className="flex flex-col items-start p-4 border border-gray-200 rounded-xl hover:border-gray-900 hover:ring-1 hover:ring-gray-900 transition-all text-left group" onclick="selectType('digital')">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
<i className="w-4 h-4 text-gray-600 group-hover:text-white" data-lucide="monitor"></i>
</div>
<span className="text-sm font-medium text-gray-900">Digital / IT</span>
<span className="text-xs text-gray-500 mt-1">Hardware, software &amp; licenses</span>
</button>

<button className="flex flex-col items-start p-4 border border-gray-200 rounded-xl hover:border-gray-900 hover:ring-1 hover:ring-gray-900 transition-all text-left group" onclick="selectType('ip')">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
<i className="w-4 h-4 text-gray-600 group-hover:text-white" data-lucide="shield"></i>
</div>
<span className="text-sm font-medium text-gray-900">Intellectual Property</span>
<span className="text-xs text-gray-500 mt-1">Patents, trademarks &amp; copyrights</span>
</button>
</div>
</div>

<div className="hidden" id="step-form">

<div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-white p-1 rounded border border-gray-200 shadow-sm">
<i className="w-4 h-4 text-gray-600" data-lucide="car" id="selected-icon"></i>
</div>
<span className="text-sm font-medium text-gray-900" id="selected-type-label">Vehicle Details</span>
</div>
<button className="text-xs text-gray-500 hover:text-gray-900 underline" onclick="resetSelection()">Change Type</button>
</div>

<div className="p-6 pb-0 grid grid-cols-2 gap-4">
<div className="col-span-1">
<label className="block text-xs font-medium text-gray-500 mb-1.5">Asset Code</label>
<div className="relative">
<input className="block w-full rounded-lg border-gray-200 bg-gray-50 text-gray-500 text-sm px-3 py-2 shadow-sm border opacity-75 cursor-not-allowed" disabled="" type="text" value="AST-2023-XXXX"/>
<i className="w-3 h-3 text-gray-400 absolute right-3 top-2.5" data-lucide="lock"></i>
</div>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium text-gray-500 mb-1.5">Status</label>
<div className="relative">
<select className="block w-full rounded-lg border-gray-200 text-sm px-3 py-2 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 appearance-none bg-white">
<option>Draft</option>
<option>Active</option>
<option>Assigned</option>
<option>Under Maintenance</option>
</select>
<i className="w-4 h-4 text-gray-400 absolute right-3 top-2.5 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="px-6 mt-6">
<div className="border-b border-gray-200">
<nav className="-mb-px flex gap-6" id="form-tabs">

</nav>
</div>
</div>

<div className="p-6 space-y-4" id="form-fields">

</div>
</div>
</div>

<div className="p-6 border-t border-gray-100 flex items-center justify-between bg-gray-50">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors" onclick="closeAddAsset()">Cancel</button>
<div className="flex gap-3">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">Save as Draft</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg shadow-sm transition-colors flex items-center gap-2">
<span>Create Asset</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-3 z-50" id="toast">
<i className="w-5 h-5 text-green-400" data-lucide="check-circle"></i>
<div>
<h4 className="text-sm font-medium">Asset Created</h4>
<p className="text-xs text-gray-400">The vehicle has been successfully added.</p>
</div>
</div>


    </>
  );
}
