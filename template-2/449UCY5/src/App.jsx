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
      
tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
keyframes: {
fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
slideIn: { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
},
animation: {
fadeIn: 'fadeIn .3s ease-in-out',
slideIn: 'slideIn .3s ease-in-out',
}
}
}
}



    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    /* ----- Expansion toggles for the three main options ----- */
    const radioCurrent = document.getElementById('opt-current');
    const radioAll = document.getElementById('opt-all');
    const radioSpecific = document.getElementById('opt-specific');
    const panelCurrent = document.getElementById('panel-current');
    const panelAll = document.getElementById('panel-all');
    const panelSpecific = document.getElementById('panel-specific');

    [radioCurrent, radioAll, radioSpecific].forEach(r => {
      r.addEventListener('change', () => {
        panelCurrent.classList.toggle('hidden', !radioCurrent.checked);
        panelAll.classList.toggle('hidden', !radioAll.checked);
        panelSpecific.classList.toggle('hidden', !radioSpecific.checked);
        updateApplyBtnState();
      });
    });

    /* ----- Specific versions toggle Current Product ----- */
    document.getElementById('current-spec-ver').addEventListener('change', e => {
      document.getElementById('current-versions-panel').classList.toggle('hidden', !e.target.checked);
    });

    /* ----- Specific versions toggle All Products ----- */
    document.getElementById('all-spec-ver').addEventListener('change', e => {
      document.getElementById('all-versions-explorer').classList.toggle('hidden', !e.target.checked);
    });

    /* ----- Sample data ----- */
    const sampleData = [
      {
        state: 'FL',
        name: 'Florida',
        products: [
          {
            id: 'FL-HO3',
            name: 'HO3 – Nexus Admitted',
            versions: [
              { id: 'v3.2', text: 'v3.2 – Eff 01 / 01 / 25', status: 'CURRENT' },
              { id: 'v3.1', text: 'v3.1 – Eff 07 / 01 / 24', status: 'ACTIVE' },
              { id: 'v2.9', text: 'v2.9 – Eff 01 / 01 / 24', status: 'ACTIVE' }
            ]
          },
          {
            id: 'FL-HO6',
            name: 'HO6 – Nexus Admitted',
            versions: [
              { id: 'v1.1', text: 'v1.1 – Eff 07 / 01 / 24', status: 'CURRENT' }
            ]
          }
        ]
      },
      {
        state: 'CA',
        name: 'California',
        products: [
          {
            id: 'CA-DP3',
            name: 'DP3 – Tower Standard',
            versions: [
              { id: 'v2.5', text: 'v2.5 – Eff 02 / 01 / 24', status: 'CURRENT' }
            ]
          }
        ]
      }
    ];

    /* ----- Build All-versions Explorer (Option 2) ----- */
    const stateList = document.getElementById('stateList');
    buildTree(sampleData, stateList, false);

    /* ----- Build Specific-product Tree (Option 3) ----- */
    const treeContainer = document.getElementById('treeContainer');
    buildTree(sampleData, treeContainer, true);

    function buildTree(data, container, includeTriState) {
      data.forEach(state => {
        const stateTpl = document.getElementById('stateTemplate').content.cloneNode(true);
        const header = stateTpl.querySelector('.state-header');
        const stateCheck = stateTpl.querySelector('.state-checkbox');
        const chevron = stateTpl.querySelector('.state-header i');
        stateTpl.querySelector('.state-name').textContent = `${state.state} ${state.name}`;
        stateTpl.querySelector('.state-count').textContent = `${state.products.length} products`;
        const productList = stateTpl.querySelector('.state-products');

        /* Populate products */
        state.products.forEach(prod => {
          const prodTpl = document.getElementById('productTemplate').content.cloneNode(true);
          prodTpl.querySelector('.product-name').textContent = prod.name;
          prodTpl.querySelector('.product-count').textContent = `${prod.versions.length} versions`;
          const prodCheck = prodTpl.querySelector('.product-checkbox');
          const prodChevron = prodTpl.querySelector('.product-header i');
          const versionList = prodTpl.querySelector('.product-versions');

          /* Populate versions */
          prod.versions.forEach(ver => {
            const verTpl = document.getElementById('versionTemplate').content.cloneNode(true);
            verTpl.querySelector('.version-label').textContent = ver.text;
            const badge = verTpl.querySelector('.badge');
            badge.textContent = ver.status;
            if (ver.status === 'CURRENT') {
              badge.classList.add('bg-blue-100', 'text-blue-800');
            } else {
              badge.classList.add('bg-gray-100', 'text-gray-700');
            }
            const verCheck = verTpl.querySelector('.version-checkbox-single');

            /* Checkbox events */
            verCheck.addEventListener('change', () => {
              syncUp(prodCheck, versionList.querySelectorAll('input'));
              syncUp(stateCheck, productList.querySelectorAll('.product-checkbox'));
              updateCounts();
            });

            versionList.appendChild(verTpl);
          });

          /* Product expand/collapse */
          prodTpl.querySelector('.product-header').addEventListener('click', e => {
            if (e.target.tagName !== 'INPUT') {
              versionList.classList.toggle('hidden');
              prodChevron.classList.toggle('rotate-90');
            }
          });

          /* Product checkbox propagate */
          prodCheck.addEventListener('change', () => {
            versionList.querySelectorAll('input').forEach(v => v.checked = prodCheck.checked);
            syncUp(stateCheck, productList.querySelectorAll('.product-checkbox'));
            updateCounts();
          });

          productList.appendChild(prodTpl);
        });

        /* State expand/collapse */
        header.addEventListener('click', e => {
          if (e.target.tagName !== 'INPUT') {
            productList.classList.toggle('hidden');
            chevron.classList.toggle('rotate-90');
          }
        });

        /* State checkbox propagate */
        stateCheck.addEventListener('change', () => {
          productList.querySelectorAll('input').forEach(p => p.checked = stateCheck.checked);
          updateCounts();
        });

        container.appendChild(stateTpl);
      });
    }

    /* ----- Helper: sync up parent checkbox (basic tri-state) ----- */
    function syncUp(parentChk, childChks) {
      const all = [...childChks];
      const allChecked = all.every(c => c.checked);
      const noneChecked = all.every(c => !c.checked);
      parentChk.indeterminate = !allChecked && !noneChecked;
      parentChk.checked = allChecked;
    }

    /* ----- Counts & summary ----- */
    const footerCount = document.getElementById('footerCount');
    const summaryBanner = document.getElementById('summaryBanner');
    const floatSummaryBody = document.getElementById('floatSummaryBody');

    function updateCounts() {
      const selected = document.querySelectorAll('#stateList input:checked, #treeContainer input:checked').length;
      footerCount.textContent = selected;
      document.getElementById('applyBtn').disabled = selected === 0;
      if (summaryBanner) {
        summaryBanner.textContent = `${selected} versions selected`;
        summaryBanner.classList.toggle('hidden', selected === 0);
      }
      floatSummaryBody.textContent = `${selected} versions selected across the explorer.`;
    }

    /* ----- Expand all / Collapse all ----- */
    const expandCollapseBtn = document.getElementById('expandCollapseBtn');
    let allExpanded = false;
    expandCollapseBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      document.querySelectorAll('#stateList .state-products, #stateList .product-versions').forEach(el => {
        el.classList.toggle('hidden', !allExpanded);
      });
      document.querySelectorAll('#stateList .state-header i, #stateList .product-header i').forEach(i => {
        i.classList.toggle('rotate-90', allExpanded);
      });
      expandCollapseBtn.querySelector('span').textContent = allExpanded ? 'Collapse all' : 'Expand all';
    });

    /* ----- Search filter (debounced) ----- */
    function debounce(fn, wait = 300) {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
      };
    }
    document.getElementById('searchInput').addEventListener('input', debounce(filterExplorer));
    function filterExplorer(e) {
      const term = e.target.value.toLowerCase();
      stateList.querySelectorAll('.state-products, .product-versions').forEach(el => el.classList.remove('hidden'));
      stateList.querySelectorAll('.state-header, .product-header, .version-line').forEach(node => {
        const txt = node.textContent.toLowerCase();
        node.parentElement.classList.toggle('hidden', !txt.includes(term));
      });
    }

    /* ----- Floating summary panel ----- */
    const toggleFloatSummary = document.getElementById('toggleFloatSummary');
    const floatSummary = document.getElementById('floatSummary');
    const closeFloatSummary = document.getElementById('closeFloatSummary');
    toggleFloatSummary.addEventListener('click', () => floatSummary.classList.toggle('translate-y-full'));
    closeFloatSummary.addEventListener('click', () => floatSummary.classList.add('translate-y-full'));

    /* ----- Enable Apply button when selection made ----- */
    function updateApplyBtnState() {
      const selected = document.querySelector('input[name="productScope"]:checked');
      document.getElementById('applyBtn').disabled = !selected;
    }

    /* ----- Initial counts ----- */
    updateCounts();
  
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
      

<div className="min-h-screen flex flex-col">
<main className="flex-1 flex justify-center">
<div className="w-full max-w-5xl px-4 py-12 space-y-8">

<section className="bg-white shadow-sm rounded-xl border border-gray-200 p-8 animate-fadeIn">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Where should this rule apply?</h1>

<div className="space-y-4">

<label className="flex items-start space-x-3 cursor-pointer">
<input className="mt-1.5 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600" id="opt-current" name="productScope" type="radio" />
<div>
<span className="font-medium">Current product only – FL HO3 Nexus</span>
<div className="pl-8 mt-4 hidden" id="panel-current">

<fieldset className="space-y-3">
<legend className="text-sm font-medium text-gray-700 mb-1">Policy scope</legend>
<div className="space-y-2">
<label className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600" name="policyScopeCurrent" type="radio" value="new" />
<span>New policies only</span>
</label>
<label className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600" name="policyScopeCurrent" type="radio" value="all" />
<span>All active policies</span>
</label>
<label className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600" id="current-spec-ver" name="policyScopeCurrent" type="radio" value="versions" />
<span>Specific versions</span>
</label>
</div>
</fieldset>

<div className="mt-4 hidden" id="current-versions-panel">
<h3 className="text-sm font-medium text-gray-700 mb-2">Select versions</h3>
<div className="space-y-2 border border-gray-200 rounded-lg p-3 max-h-56 overflow-y-auto">

<label className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50">
<div className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600 checked:bg-blue-600 version-checkbox" type="checkbox" />
<span className="text-sm">v3.2 – Effective 01 / 01 / 2025</span>
</div>
<span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">CURRENT</span>
</label>
<label className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50">
<div className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600 version-checkbox" type="checkbox" />
<span className="text-sm">v3.1 – Effective 07 / 01 / 2024</span>
</div>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">ACTIVE</span>
</label>
<label className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50">
<div className="flex items-center space-x-2">
<input checked className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600 version-checkbox" type="checkbox" />
<span className="text-sm">v2.9 – Effective 01 / 01 / 2024</span>
</div>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">ACTIVE</span>
</label>
</div>
</div>
</div>
</div>
</label>

<div className="border-t border-dashed border-gray-200"></div>

<label className="flex items-start space-x-3 cursor-pointer">
<input className="mt-1.5 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600" id="opt-all" name="productScope" type="radio" />
<div className="w-full">
<span className="font-medium">All active products</span>
<p className="text-gray-500 text-sm">127 products across 12 states</p>
<div className="pl-8 mt-4 hidden" id="panel-all">

<fieldset className="space-y-3">
<legend className="text-sm font-medium text-gray-700 mb-1">Policy scope</legend>
<div className="space-y-2">
<label className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600" name="policyScopeAll" type="radio" value="new" />
<span>New policies only</span>
</label>
<label className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600" name="policyScopeAll" type="radio" value="all" />
<span>All active policies</span>
</label>
<label className="flex items-center space-x-2">
<input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600" id="all-spec-ver" name="policyScopeAll" type="radio" value="versions" />
<span>Specific versions</span>
</label>
</div>
</fieldset>

<div className="mt-4 hidden" id="all-versions-explorer">

<div className="sticky top-0 bg-white z-10 py-2 border-b border-gray-200 flex items-center space-x-3">
<div className="relative flex-1 max-w-sm">
<span className="absolute left-2 top-2.5 text-gray-400"><i className="w-4 h-4 stroke-1.5" data-lucide="search"></i></span>
<input className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" id="searchInput" placeholder="Search states or products" type="text" />
</div>
<button className="text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md flex items-center space-x-1" id="expandCollapseBtn">
<i className="w-4 h-4 stroke-1.5" data-lucide="chevron-down"></i><span>Expand all</span>
</button>
<button className="text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md" id="selectCurrentBtn">Select current versions</button>
<button className="text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md" id="clearBtn">Clear</button>
</div>

<div className="sticky top-10 bg-blue-50 text-blue-800 text-sm px-3 py-1.5 rounded-md my-2 hidden" id="summaryBanner"></div>

<div className="space-y-2 max-h-[34rem] overflow-y-auto pr-2 animate-slideIn" id="stateList">

</div>
</div>
</div>
</div>
</label>

<div className="border-t border-dashed border-gray-200"></div>

<label className="flex items-start space-x-3 cursor-pointer">
<input className="mt-1.5 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600" id="opt-specific" name="productScope" type="radio" />
<div className="w-full">
<span className="font-medium">Select specific products</span>
<div className="pl-8 mt-4 hidden" id="panel-specific">

<div className="sticky top-0 bg-white z-10 py-2 border-b border-gray-200 flex items-center space-x-3">
<div className="relative flex-1 max-w-sm">
<span className="absolute left-2 top-2.5 text-gray-400"><i className="w-4 h-4 stroke-1.5" data-lucide="search"></i></span>
<input className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" id="searchInput2" placeholder="Search states or products" type="text" />
</div>
<button className="text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md" id="selectCurrentBtn2">Select current versions</button>
<button className="text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md" id="clearBtn2">Clear</button>
</div>

<button className="fixed bottom-24 right-4 bg-blue-600 text-white rounded-full shadow-lg p-3 hover:bg-blue-700 focus:outline-none" id="toggleFloatSummary">
<i className="w-5 h-5 stroke-1.5" data-lucide="list"></i>
</button>

<div className="fixed bottom-0 right-0 w-80 max-w-full bg-white border-t border-l border-gray-200 shadow-2xl rounded-tl-xl rounded-tr-none p-4 space-y-3 translate-y-full transition-transform duration-300" id="floatSummary">
<div className="flex justify-between items-center">
<h2 className="font-medium">Selection summary</h2>
<button className="text-gray-500 hover:text-gray-700" id="closeFloatSummary">
<i className="w-4 h-4 stroke-1.5" data-lucide="x"></i>
</button>
</div>
<div className="text-sm text-gray-700" id="floatSummaryBody"></div>
</div>

<div className="space-y-2 max-h-[34rem] overflow-y-auto pr-2 animate-slideIn" id="treeContainer">

</div>
</div>
</div>
</label>
</div>
</section>
</div>
</main>

<footer className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
<div className="text-sm text-gray-700"><span id="footerCount">0</span> items selected</div>
<div className="space-x-3">
<button className="text-sm text-gray-600 hover:text-gray-900" id="reviewBtn">Review selection</button>
<button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded shadow-sm disabled:opacity-50" disabled id="applyBtn">Apply rule</button>
</div>
</footer>
</div>

<template id="stateTemplate"><div className="border border-gray-200 rounded-lg"><div className="flex items-center justify-between px-3 py-2 bg-gray-50 hover:bg-gray-100 cursor-pointer state-header"><div className="flex items-center space-x-2"><input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600 state-checkbox" type="checkbox" /><i className="w-4 h-4 stroke-1.5 transition-transform" data-lucide="chevron-right"></i><span className="text-sm font-medium state-name"></span></div><span className="text-xs text-gray-500 state-count"></span></div><div className="state-products pl-7 hidden"></div></div></template>
<template id="productTemplate"><div className="border-t border-gray-200 product-node"><div className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 cursor-pointer product-header"><div className="flex items-center space-x-2"><input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600 product-checkbox" type="checkbox" /><i className="w-3.5 h-3.5 stroke-1.5 transition-transform" data-lucide="chevron-right"></i><span className="text-sm product-name"></span></div><span className="text-xs text-gray-500 product-count"></span></div><div className="product-versions pl-7 hidden"></div></div></template>
<template id="versionTemplate"><label className="flex items-center justify-between px-3 py-1.5 hover:bg-blue-50 rounded-md version-line"><div className="flex items-center space-x-2"><input className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-600 version-checkbox-single" type="checkbox" /><span className="text-sm version-label"></span></div><span className="text-xs badge px-2 py-0.5 rounded"></span></label></template>


    </>
  );
}
