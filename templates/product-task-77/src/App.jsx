import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function () {
      const taskToggle = document.getElementById('taskMappingToggle');
      const taskToggleThumb = document.getElementById('taskMappingToggleThumb');
      const panelWrapper = document.getElementById('taskMappingPanelWrapper');

      function setToggleState(on) {
        if (on) {
          taskToggle.classList.remove('bg-slate-100', 'border-slate-300');
          taskToggle.classList.add('bg-sky-500', 'border-sky-500');
          taskToggleThumb.classList.remove('translate-x-0');
          taskToggleThumb.classList.add('translate-x-4');
          taskToggle.setAttribute('aria-pressed', 'true');

          const scrollHeight = panelWrapper.scrollHeight;
          panelWrapper.style.maxHeight = scrollHeight + 'px';
          panelWrapper.style.opacity = '1';
        } else {
          taskToggle.classList.add('bg-slate-100', 'border-slate-300');
          taskToggle.classList.remove('bg-sky-500', 'border-sky-500');
          taskToggleThumb.classList.add('translate-x-0');
          taskToggleThumb.classList.remove('translate-x-4');
          taskToggle.setAttribute('aria-pressed', 'false');

          panelWrapper.style.maxHeight = '0';
          panelWrapper.style.opacity = '0';
        }
      }

      taskToggle.addEventListener('click', () => {
        const isOn = taskToggle.getAttribute('aria-pressed') === 'true';
        setToggleState(!isOn);
      });

      // Tabs
      const tabTriggers = Array.from(document.querySelectorAll('.tab-trigger'));
      const tabPanels = {
        projects: document.getElementById('tab-projects'),
        checklists: document.getElementById('tab-checklists'),
      };

      function setActiveTab(key) {
        tabTriggers.forEach((btn) => {
          const isActive = btn.dataset.tab === key;
          if (isActive) {
            btn.classList.add('text-sky-600', 'border-sky-500');
            btn.classList.remove('text-slate-500', 'border-transparent');
          } else {
            btn.classList.remove('text-sky-600', 'border-sky-500');
            btn.classList.add('text-slate-500', 'border-transparent');
          }
        });

        Object.entries(tabPanels).forEach(([k, el]) => {
          if (k === key) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });
      }

      tabTriggers.forEach((btn) => {
        btn.addEventListener('click', () => {
          setActiveTab(btn.dataset.tab);
        });
      });

      // Template selection (multiple select)
      const state = {
        projects: new Set(),
        checklists: new Set(),
      };

      function updateCardVisual(card, selected) {
        const checkboxIcon = card.querySelector('svg');
        const checkboxBox = card.querySelector('span.relative.inline-flex');

        if (selected) {
          card.classList.add('border-sky-500', 'bg-sky-50');
          card.classList.remove('border-slate-200', 'bg-white');
          checkboxBox.classList.remove('border-slate-300', 'bg-white');
          checkboxBox.classList.add('border-sky-500', 'bg-sky-50');
          if (checkboxIcon) checkboxIcon.classList.add('opacity-100');
        } else {
          card.classList.remove('border-sky-500', 'bg-sky-50');
          card.classList.add('border-slate-200', 'bg-white');
          checkboxBox.classList.add('border-slate-300', 'bg-white');
          checkboxBox.classList.remove('border-sky-500', 'bg-sky-50');
          if (checkboxIcon) checkboxIcon.classList.remove('opacity-100');
        }
      }

      const cards = Array.from(document.querySelectorAll('.template-card'));
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          const type = card.dataset.itemType;
          const id = card.dataset.id;
          const set = state[type === 'project' ? 'projects' : 'checklists'];
          const isSelected = set.has(id);
          if (isSelected) {
            set.delete(id);
          } else {
            set.add(id);
          }
          updateCardVisual(card, !isSelected);
          // Here you can sync to your real form state / API payload
          // console.log('current mapping', {
          //   projects: Array.from(state.projects),
          //   checklists: Array.from(state.checklists),
          // });
        });

        // Hover states (purely visual; maintaining light, native feel)
        card.addEventListener('mouseenter', () => {
          if (!card.classList.contains('border-sky-500')) {
            card.classList.add('bg-sky-50/40', 'border-sky-200');
          }
        });
        card.addEventListener('mouseleave', () => {
          if (!card.classList.contains('border-sky-500')) {
            card.classList.remove('bg-sky-50/40', 'border-sky-200');
            card.classList.add('bg-white', 'border-slate-200');
          }
        });
      });

      // Initialize default states
      setToggleState(false);
      setActiveTab('projects');
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full flex items-start justify-center bg-slate-50/60">

<div className="w-full max-w-2xl rounded-2xl bg-white shadow-lg border border-slate-200 mt-10 mb-10">

<div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
<div className="">
<div className="text-base font-semibold tracking-tight text-slate-900">Add New Product</div>
<div className="text-sm text-slate-500 mt-0.5">Physical product configuration</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
<button className="inline-flex items-center rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-slate-800">Save</button>
</div>
</div>

<div className="px-6 pt-5 pb-4 border-b border-slate-200">
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700 tracking-tight">Product name</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500" placeholder="e.g. Premium Spa Package"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700 tracking-tight">SKU</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500" placeholder="SPA-PRM-001"/>
</div>
</div>

<div className="mt-6 border-t border-slate-200 pt-4">
<div className="flex items-start justify-between gap-4">
<div className="">
<div className="text-sm font-medium tracking-tight text-slate-900">Enable Tiered Pricing</div>
<div className="mt-0.5 text-sm text-slate-500">Set quantity-based price breaks for this product.</div>
</div>

<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-slate-300 bg-slate-100 transition-colors duration-200" data-toggle-tiered="" type="button">
<span className="inline-block h-4 w-4 translate-x-0 rounded-full bg-white shadow-sm ring-1 ring-slate-300 transition-transform duration-200"></span>
</button>
</div>
</div>
</div>

<div className="px-6 pt-4 pb-6">
<div className="flex items-start justify-between gap-4">
<div className="">
<div className="text-sm font-medium tracking-tight text-slate-900">Enable Task Mapping</div>
<div className="text-sm text-slate-500 mt-0.5">Automatically map projects or checklists when this order is accepted.</div>
</div>

<button aria-pressed="true" className="inline-flex transition-colors duration-200 w-9 h-5 border rounded-full relative items-center" id="taskMappingToggle" type="button">
<span className="inline-block transition-transform duration-200 bg-white w-4 h-4 ring-slate-300 ring-1 rounded-full shadow-sm" id="taskMappingToggleThumb"></span>
</button>
</div>

<div className="mt-4 overflow-hidden transition-[max-height,opacity] duration-200" id="taskMappingPanelWrapper" style={{maxHeight: '459px', opacity: '1'}}>
<div className="border border-slate-200 rounded-xl bg-white">

<div className="flex items-center gap-6 border-b border-slate-200 bg-white px-3 pt-2.5 pb-1.5 sticky top-0 z-10" id="taskMappingTabs">
<button className="tab-trigger text-xs font-medium tracking-tight border-b-2 pb-1" data-tab="projects" type="button">
                Project Templates
              </button>
<button className="tab-trigger text-xs font-medium tracking-tight border-b-2 pb-1" data-tab="checklists" type="button">
                Checklist Templates
              </button>
</div>

<div className="px-3 pb-3 pt-2">

<div className="tab-panel" id="tab-projects">
<div className="mb-2.5">
<div className="text-sm font-medium tracking-tight text-slate-900">Select Project Templates</div>
<div className="text-sm text-slate-500 mt-0.5">
                    Assign project workflows automatically for this product.
                  </div>
</div>

<div className="mt-2 space-y-2 overflow-y-auto" style={{maxHeight: '20rem'}}>

<button className="template-card group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-colors" data-id="website-launch" data-item-type="project" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-sky-600 border border-sky-100">
<iconify-icon icon="solar:folder-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-slate-900">
                          Website Launch Project
                        </div>
<div className="text-xs text-slate-500 mt-0.5">• 18 tasks</div>
</div>
</div>

<div>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
<button className="template-card group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-colors" data-id="hotel-onboarding" data-item-type="project" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
<iconify-icon icon="solar:map-arrow-right-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-slate-900">
                          Hotel Onboarding Workflow
                        </div>
<div className="text-xs text-slate-500 mt-0.5">• 24 tasks</div>
</div>
</div>
<div>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
<button className="template-card group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-colors" data-id="spa-setup" data-item-type="project" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
<iconify-icon icon="solar:graph-new-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-slate-900 tracking-tight">
                          Spa Setup Implementation
                        </div>
<div className="text-xs text-slate-500 mt-0.5">• 15 tasks</div>
</div>
</div>
<div className="">
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
<button className="template-card group flex gap-3 transition-colors text-left w-full border rounded-xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 gap-x-3 gap-y-3 items-center justify-between" data-id="maintenance-annual" data-item-type="project" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-100">
<iconify-icon icon="solar:calendar-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-slate-900">
                          Maintenance Annual Plan
                        </div>
<div className="text-xs text-slate-500 mt-0.5">• 10 tasks</div>
</div>
</div>
<div className="">
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
<button className="template-card group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-colors" data-id="product-delivery" data-item-type="project" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-600 border border-slate-100">
<iconify-icon icon="solar:route-square-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-slate-900">
                          Product Delivery Lifecycle
                        </div>
<div className="text-xs text-slate-500 mt-0.5"> • 20 tasks</div>
</div>
</div>
<div>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
</div>
</div>

<div className="tab-panel" id="tab-checklists">
<div className="mb-2.5">
<div className="mt-0.5 text-sm text-slate-500">
                    Attach operational checklists for consistent execution.
                  </div>
</div>

<div className="mt-2 space-y-2 overflow-y-auto" style={{maxHeight: '20rem'}}>

<button className="template-card group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-colors" data-id="order-fulfillment" data-item-type="checklist" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-sky-600 border border-sky-100">
<iconify-icon icon="solar:checklist-minimalistic-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">
                          Order Fulfillment Checklist
                        </div>
<div className="mt-0.5 text-xs text-slate-500">
                          10 checklist items
                        </div>
</div>
</div>
<div>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
<button className="template-card group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-colors" data-id="quality-assurance" data-item-type="checklist" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
<iconify-icon icon="solar:check-square-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">
                          Quality Assurance Checklist
                        </div>
<div className="mt-0.5 text-xs text-slate-500">
                          12 checklist items
                        </div>
</div>
</div>
<div>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
<button className="template-card group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-colors" data-id="spa-preparation" data-item-type="checklist" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
<iconify-icon icon="solar:clipboard-text-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">
                          Spa Preparation Checklist
                        </div>
<div className="mt-0.5 text-xs text-slate-500">
                          8 checklist items
                        </div>
</div>
</div>
<div>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
<button className="template-card group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-colors" data-id="room-service" data-item-type="checklist" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-100">
<iconify-icon icon="solar:clipboard-check-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">
                          Room Service Delivery Checklist
                        </div>
<div className="mt-0.5 text-xs text-slate-500">
                          9 checklist items
                        </div>
</div>
</div>
<div>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
<button className="template-card group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-colors" data-id="inventory-dispatch" data-item-type="checklist" type="button">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-600 border border-slate-100">
<iconify-icon icon="solar:checklist-linear" style={{fontSize: '1.1rem', color: '#007CEE', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">
                          Inventory Dispatch Checklist
                        </div>
<div className="mt-0.5 text-xs text-slate-500">
                          11 checklist items
                        </div>
</div>
</div>
<div>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white">
<svg className="h-3 w-3 text-sky-600 opacity-0 transition-opacity" fill="none" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10.5L8.00002 13.5L15 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="mt-2.5 flex items-center justify-between text-xs text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear" style={{fontSize: '0.9rem', color: '#6B7280', strokeWidth: '1.5'}}></iconify-icon>
<span className="" style={{}}>Templates run when order is accepted.</span>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
