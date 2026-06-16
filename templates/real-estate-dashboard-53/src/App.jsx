import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function toggleTopUnit() {
          const body = document.getElementById('unit-101-body');
          const icon = document.getElementById('unit-101-icon');
          const header = document.getElementById('unit-101-header');
          const summary = document.getElementById('unit-101-summary');
          const price = document.getElementById('unit-101-price');
          const card = document.getElementById('unit-101-card');
          const editBtn = document.getElementById('unit-101-edit-btn');

          if (body.classList.contains('hidden')) {
              body.classList.remove('hidden');
              body.classList.add('flex');
              icon.setAttribute('icon', 'solar:alt-arrow-down-linear');
              icon.classList.remove('group-hover:text-gray-600');
              header.classList.remove('p-4', 'bg-white', 'group');
              header.classList.add('px-4', 'py-3', 'bg-gray-50', 'border-b', 'border-gray-200');
              summary.classList.remove('sm:flex');
              summary.classList.add('hidden');
              price.classList.remove('sm:block');
              price.classList.add('hidden');
              card.classList.add('ring-1', 'ring-gray-900/5');
              card.classList.remove('hover:border-gray-300', 'hover:shadow');
              editBtn.classList.add('hidden');
          } else {
              body.classList.add('hidden');
              body.classList.remove('flex');
              icon.setAttribute('icon', 'solar:alt-arrow-right-linear');
              icon.classList.add('group-hover:text-gray-600');
              header.classList.remove('px-4', 'py-3', 'bg-gray-50', 'border-b', 'border-gray-200');
              header.classList.add('p-4', 'bg-white', 'group');
              summary.classList.remove('hidden');
              summary.classList.add('sm:flex');
              price.classList.remove('hidden');
              price.classList.add('sm:block');
              card.classList.remove('ring-1', 'ring-gray-900/5');
              card.classList.add('hover:border-gray-300', 'hover:shadow');
              editBtn.classList.remove('hidden');
          }
      }

      function addDynamicField(select) {
          if (!select.value) return;
          const container = document.getElementById('unit-101-dynamic-fields');
          const fieldId = 'dynamic-field-' + select.value;

          if (document.getElementById(fieldId)) {
              select.value = '';
              return;
          }

          const label = select.options[select.selectedIndex].text;
          let inputHtml = '';

          if (select.value === 'balcony') {
              inputHtml = '<div class="relative"><input type="number" class="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all pr-8 bg-white" placeholder="e.g. 12" /><span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">m²</span></div>';
          } else if (select.value === 'bathrooms') {
              inputHtml = '<input type="number" step="0.5" class="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all bg-white" placeholder="e.g. 2" />';
          } else if (select.value === 'kitchen') {
              inputHtml = '<div class="relative"><select class="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all appearance-none bg-white"><option>Open Plan</option><option>Closed</option><option>Kitchenette</option></select><iconify-icon icon="solar:alt-arrow-down-linear" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></iconify-icon></div>';
          } else if (select.value === 'view') {
              inputHtml = '<input type="text" class="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all bg-white" placeholder="e.g. Lake View" />';
          }

          const fieldDiv = document.createElement('div');
          fieldDiv.id = fieldId;
          fieldDiv.className = 'relative group bg-white border border-gray-200 p-3 rounded-md shadow-sm';
          fieldDiv.innerHTML = '<label class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">' + label + '</label>' + inputHtml + '<button type="button" class="absolute -top-2 -right-2 bg-white border border-gray-200 text-gray-400 hover:text-red-600 rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm" onclick="this.parentElement.remove()" title="Remove override"><iconify-icon icon="solar:close-circle-linear" class="text-sm"></iconify-icon></button>';

          container.appendChild(fieldDiv);
          select.value = '';
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-14 items-center">
<div className="flex items-center gap-6">
<div className="font-medium tracking-tighter text-lg">RECRM</div>
<nav className="hidden md:flex items-center gap-2 text-sm text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">
                Properties
              </a>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-gray-900 font-medium">Sunrise Apartments</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 transition-colors">
              Discard
            </button>
<button className="bg-gray-900 text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:disk-linear"></iconify-icon>
              Save Changes
            </button>
</div>
</div>
</div>
</header>

<main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
<div className="flex flex-col lg:flex-row gap-8 items-start">

<aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6 sticky top-22">
<div>
<h1 className="text-xl font-medium tracking-tight mb-1">
              Building Details
            </h1>
<p className="text-sm text-gray-500">
              Shared information applied to all units unless overridden.
            </p>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex flex-col gap-5">

<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                Building Name
              </label>
<input className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all placeholder-gray-400" type="text" value="Sunrise Apartments"/>
</div>

<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                Address
              </label>
<textarea className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all placeholder-gray-400 resize-none" rows="2">
Seestrasse 145
8002 Zürich</textarea>
</div>

<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                Global Description
              </label>
<textarea className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all placeholder-gray-400 resize-none" rows="4">
Modern residential building located near the lake. Features high-end finishes, underground parking, and a shared rooftop terrace.</textarea>
</div>

<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Shared Amenities
              </label>
<div className="flex flex-col gap-2.5">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    Elevator
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    Underground Parking
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    Shared Garden
                  </span>
</label>
</div>
</div>
<div className="pt-4 border-t border-gray-100">
<button className="w-full bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-50 transition-colors shadow-sm flex justify-center items-center gap-2">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
                Advanced Building Settings
              </button>
</div>
</div>
</aside>

<div className="w-full flex-1 flex flex-col gap-4">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200">
<div className="flex items-center gap-3">
<h2 className="text-lg font-medium tracking-tight">Units</h2>
<span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                12 Total
              </span>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 w-48 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all bg-white shadow-sm" placeholder="Search units..." type="text"/>
</div>
<button className="bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-1.5">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                Add Unit
              </button>
</div>
</div>

<div className="flex flex-col gap-3">

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden ring-1 ring-gray-900/5 transition-all" id="unit-101-card">

<div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors" id="unit-101-header" onclick="toggleTopUnit()">
<div className="flex items-center gap-4">
<iconify-icon className="text-gray-500 transition-colors" icon="solar:alt-arrow-down-linear" id="unit-101-icon"></iconify-icon>
<div className="flex items-center gap-2 w-24">
<iconify-icon className="text-gray-400" icon="solar:door-linear"></iconify-icon>
<span className="font-medium text-sm text-gray-900">
                      Apt 101
                    </span>
</div>
<div className="hidden items-center gap-6 text-sm text-gray-500" id="unit-101-summary">
<span className="flex items-center gap-1" title="Rooms">
<iconify-icon className="text-gray-400" icon="solar:bed-linear"></iconify-icon>
                      3.5
                    </span>
<span className="flex items-center gap-1" title="Area">
<iconify-icon className="text-gray-400" icon="solar:ruler-linear"></iconify-icon>
                      85 m²
                    </span>
<span>1st Floor</span>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-sm font-medium text-gray-900 hidden" id="unit-101-price">
                    CHF 2,400
                  </span>
<span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Available
                  </span>
<button className="text-gray-400 hover:text-gray-900 transition-colors opacity-0 hidden group-hover:opacity-100" id="unit-101-edit-btn">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
</button>
</div>
</div>

<div className="p-5 flex flex-col gap-6" id="unit-101-body">

<div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                      Unit Identifier
                    </label>
<input className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all" type="text" value="Apt 101"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                      Rooms
                    </label>
<div className="relative">
<input className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all pr-8" step="0.5" type="number" value="3.5"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                      Area
                    </label>
<div className="relative">
<input className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all pr-8" type="number" value="85"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                        m²
                      </span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                      Floor
                    </label>
<div className="relative">
<select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all appearance-none bg-white">
<option>Ground Floor</option>
<option selected="">1st Floor</option>
<option>2nd Floor</option>
<option>3rd Floor</option>
<option>Penthouse</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<hr className="border-gray-100"/>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                      Monthly Rent (Net)
                    </label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                        CHF
                      </span>
<input className="w-full border border-gray-200 rounded-md pl-12 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all" type="number" value="2400"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Unit Status
                    </label>
<div className="flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
<span className="ml-3 text-sm font-medium text-gray-700">
                          Available to rent
                        </span>
</label>
</div>
</div>
</div>
<hr className="border-gray-100"/>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Property Images
                    </label>
<div className="flex gap-3 overflow-x-auto pb-1">
<div className="relative w-20 h-20 rounded-md border border-gray-200 overflow-hidden group shrink-0">
<img alt="Property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-1 right-1 bg-white/90 text-gray-500 hover:text-red-600 rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
<iconify-icon className="text-xs" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<div className="relative w-20 h-20 rounded-md border border-gray-200 overflow-hidden group shrink-0">
<img alt="Property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-1 right-1 bg-white/90 text-gray-500 hover:text-red-600 rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
<iconify-icon className="text-xs" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<button className="w-20 h-20 rounded-md border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all shrink-0">
<iconify-icon className="text-xl mb-1" icon="solar:camera-add-linear"></iconify-icon>
<span className="text-[10px] font-medium uppercase tracking-wider">
                          Add
                        </span>
</button>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Documents &amp; Floorplans
                    </label>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between p-2 border border-gray-200 rounded-md bg-white">
<div className="flex items-center gap-2 overflow-hidden">
<iconify-icon className="text-gray-400 text-lg shrink-0" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm text-gray-700 truncate">
                            Floorplan_Apt101.pdf
                          </span>
</div>
<button className="text-gray-400 hover:text-red-600 transition-colors shrink-0">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<button className="flex items-center justify-center gap-2 p-2 border-2 border-dashed border-gray-200 rounded-md text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">
<iconify-icon icon="solar:file-upload-linear"></iconify-icon>
                        Upload Document
                      </button>
</div>
</div>
</div>

<div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col gap-4">
<div>
<div className="flex items-start justify-between mb-2">
<div>
<label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-0.5">
                          Specific Description
                        </label>
<p className="text-xs text-gray-500">
                          Leave blank to inherit the global building
                          description.
                        </p>
</div>
</div>
<textarea className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all resize-none bg-white" placeholder="e.g., Features a unique corner balcony..." rows="2"></textarea>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 empty:hidden" id="unit-101-dynamic-fields"></div>
<div className="flex items-center gap-2 pt-2 border-t border-gray-200">
<div className="relative w-64">
<select className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all appearance-none bg-white text-gray-600 shadow-sm cursor-pointer" id="unit-101-add-field-select" onchange="addDynamicField(this)">
<option disabled="" selected="" value="">
                          + Add property override...
                        </option>
<option value="balcony">Balcony Size</option>
<option value="bathrooms">Bathroom Count</option>
<option value="kitchen">Kitchen Type</option>
<option value="view">View Direction</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-between items-center pt-2">
<button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5 px-2 py-1 rounded transition-colors hover:bg-red-50" onclick="event.stopPropagation();">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                    Remove Unit
                  </button>
<div className="flex items-center gap-2">
<button className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-1.5" onclick="event.stopPropagation();">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
                      Duplicate
                    </button>
<button className="bg-gray-100 text-gray-900 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors" onclick="event.stopPropagation(); toggleTopUnit();">
                      Done Editing
                    </button>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 hover:shadow transition-all cursor-pointer group flex items-center justify-between p-4">
<div className="flex items-center gap-4">
<iconify-icon className="text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="flex items-center gap-2 w-24">
<iconify-icon className="text-gray-400" icon="solar:door-linear"></iconify-icon>
<span className="font-medium text-sm text-gray-900">Apt 102</span>
</div>
<div className="hidden sm:flex items-center gap-6 text-sm text-gray-500">
<span className="flex items-center gap-1" title="Rooms">
<iconify-icon className="text-gray-400" icon="solar:bed-linear"></iconify-icon>
                    2.5
                  </span>
<span className="flex items-center gap-1" title="Area">
<iconify-icon className="text-gray-400" icon="solar:ruler-linear"></iconify-icon>
                    65 m²
                  </span>
<span>1st Floor</span>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-sm font-medium text-gray-900 hidden sm:block">
                  CHF 1,800
                </span>
<span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Available
                </span>
<button className="text-gray-400 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 hover:shadow transition-all cursor-pointer group flex items-center justify-between p-4">
<div className="flex items-center gap-4">
<iconify-icon className="text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="flex items-center gap-2 w-24">
<iconify-icon className="text-gray-400" icon="solar:door-linear"></iconify-icon>
<span className="font-medium text-sm text-gray-900">Apt 201</span>
</div>
<div className="hidden sm:flex items-center gap-6 text-sm text-gray-500">
<span className="flex items-center gap-1" title="Rooms">
<iconify-icon className="text-gray-400" icon="solar:bed-linear"></iconify-icon>
                    4.5
                  </span>
<span className="flex items-center gap-1" title="Area">
<iconify-icon className="text-gray-400" icon="solar:ruler-linear"></iconify-icon>
                    110 m²
                  </span>
<span>2nd Floor</span>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-sm font-medium text-gray-900 hidden sm:block">
                  CHF 3,200
                </span>
<span className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  Rented
                </span>
<button className="text-gray-400 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
</button>
</div>
</div>

<button className="mt-2 w-full border-2 border-dashed border-gray-200 rounded-lg p-4 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all flex justify-center items-center gap-2">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
              Add Another Unit
            </button>
</div>
</div>
</div>
</main>


    </>
  );
}
