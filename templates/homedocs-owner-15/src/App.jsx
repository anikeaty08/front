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



    const docData = {
      'construction-agreement': {
        title: 'Construction Agreement',
        subtitle: 'A high-level overview of the terms of your construction contract.',
        type: 'Text Document',
        typeColor: 'bg-sky-400',
        id: 'DOC-AGMT-2025-01',
        updated: 'Updated Mar 12, 2025',
      },
      'change-orders': {
        title: 'Change Order Log',
        subtitle: 'All approved changes, credits, and additional work during construction.',
        type: 'Text Document',
        typeColor: 'bg-sky-400',
        id: 'DOC-CHG-LOG-2025-03',
        updated: 'Updated Feb 27, 2025',
      },
      'inspection-reports': {
        title: 'Inspection Reports',
        subtitle: 'Official inspection approvals for each major milestone.',
        type: 'Text Document',
        typeColor: 'bg-sky-400',
        id: 'DOC-INSP-2025-10',
        updated: 'Updated Mar 05, 2025',
      },
      'floor-plans': {
        title: 'Final Floor Plans',
        subtitle: 'Dimensioned plans for each level of your home.',
        type: 'Design Document',
        typeColor: 'bg-emerald-400',
        id: 'DOC-PLAN-2025-02',
        updated: 'Updated Jan 18, 2025',
      },
      'interior-finishes': {
        title: 'Interior Finish Selections',
        subtitle: 'Cabinets, countertops, flooring, paint colors, and fixtures.',
        type: 'Design Document',
        typeColor: 'bg-emerald-400',
        id: 'DOC-FIN-2025-07',
        updated: 'Updated Feb 09, 2025',
      },
      'exterior-elevations': {
        title: 'Exterior Elevations',
        subtitle: 'Exterior views with materials and trim details.',
        type: 'Design Document',
        typeColor: 'bg-emerald-400',
        id: 'DOC-ELEV-2025-01',
        updated: 'Updated Jan 12, 2025',
      },
      'structural-warranty': {
        title: '10-Year Structural Warranty',
        subtitle: 'Coverage details for major structural components of your home.',
        type: 'Warranty',
        typeColor: 'bg-amber-400',
        id: 'DOC-WARR-STRUCT-2035',
        updated: 'Effective Mar 20, 2025',
      },
      'appliance-warranties': {
        title: 'Appliance Warranties & Manuals',
        subtitle: 'Serial numbers, coverage periods, and quick-start guides.',
        type: 'Warranty',
        typeColor: 'bg-amber-400',
        id: 'DOC-WARR-APPL-2025',
        updated: 'Updated Mar 15, 2025',
      },
      'hvac-maintenance': {
        title: 'HVAC System & Maintenance',
        subtitle: 'Equipment details, filter sizes, thermostat settings, and service intervals.',
        type: 'Warranty',
        typeColor: 'bg-amber-400',
        id: 'DOC-HVAC-2025',
        updated: 'Updated Mar 10, 2025',
      },
      'room-by-room': {
        title: 'Room-by-Room Details',
        subtitle: 'Paint colors, flooring, lighting, and outlets for every space in your home.',
        type: 'Home Details',
        typeColor: 'bg-violet-400',
        id: 'DOC-RM-DETAIL-2025',
        updated: 'Updated Mar 08, 2025',
      },
      'plumbing-map': {
        title: 'Plumbing & Shutoff Map',
        subtitle: 'Main shutoff, fixture locations, hose bibs, and cleanout access.',
        type: 'Home Details',
        typeColor: 'bg-violet-400',
        id: 'DOC-PLUMB-2025',
        updated: 'Updated Mar 04, 2025',
      },
      'electrical-circuit': {
        title: 'Electrical Circuit Index',
        subtitle: 'Panel directory, GFCI locations, and low-voltage wiring map.',
        type: 'Home Details',
        typeColor: 'bg-violet-400',
        id: 'DOC-ELEC-2025',
        updated: 'Updated Mar 06, 2025',
      },
    };

    function enterPortal() {
      document.getElementById('loginView').classList.add('hidden');
      document.getElementById('mainView').classList.remove('hidden');
    }

    function logout() {
      document.getElementById('mainView').classList.add('hidden');
      document.getElementById('loginView').classList.remove('hidden');
    }

    function openDocument(key) {
      const data = docData[key];
      if (!data) return;

      document.getElementById('placeholderState').classList.add('hidden');
      document.getElementById('docContentWrapper').classList.remove('hidden');

      document.getElementById('docTitle').textContent = data.title;
      document.getElementById('docHeaderTitle').textContent = data.title;
      document.getElementById('docHeaderSubtitle').textContent = data.subtitle;
      document.getElementById('docId').textContent = data.id;
      document.getElementById('docUpdated').textContent = data.updated;

      const badge = document.getElementById('docTypeBadge');
      badge.querySelector('span:nth-child(2)').textContent = data.type;
      const dot = badge.querySelector('span:first-child');
      dot.className = 'w-1.5 h-1.5 rounded-full ' + data.typeColor;

      document.querySelectorAll('.doc-item').forEach(btn => {
        btn.classList.remove('bg-slate-900/70');
        btn.classList.add('bg-slate-900/50');
      });
      Object.values(docSectionsByType).forEach(fn => fn(false));
      const clicked = Object.keys(docData).includes(key)
        ? document.querySelector(`button[onclick*="${key}"]`)
        : null;
      if (clicked) {
        clicked.classList.add('bg-slate-900/70');
      }
      updateDocBodyForKey(key);
    }

    const docSectionsByType = {
      text: function(active) {},
      design: function(active) {},
      warranty: function(active) {},
      systems: function(active) {},
    };

    function updateDocBodyForKey(key) {
      const intro = document.getElementById('docSectionIntro');
      const content = document.getElementById('docSectionContent');
      intro.classList.remove('hidden');
      content.classList.remove('hidden');

      if (key === 'interior-finishes') {
        intro.innerHTML = `
          <p>
            This document captures all of the final interior finish selections for your home—cabinets, countertops,
            flooring, paint, hardware, and plumbing fixtures. Use it when touching up paint, replacing materials,
            or confirming what was installed.
          </p>
          <p>
            Each selection lists the manufacturer, collection, color or finish, and, where available, the model number.
          </p>
        `;
      } else if (key === 'room-by-room') {
        intro.innerHTML = `
          <p>
            Your home is documented room by room so you can quickly look up paint colors, flooring types,
            outlet counts, and lighting for any space.
          </p>
          <p>
            Start with the level and room name, then use this document when planning furniture, wiring upgrades,
            or future remodeling.
          </p>
        `;
      } else if (key === 'plumbing-map') {
        intro.innerHTML = `
          <p>
            This map shows where water lines run through your home, including the main shutoff, fixture shutoffs,
            hose bibs, and cleanouts.
          </p>
          <p>
            In an emergency, use this document to quickly locate the main shutoff and isolate affected areas.
          </p>
        `;
      } else if (key === 'structural-warranty') {
        intro.innerHTML = `
          <p>
            Your structural warranty protects key load‑bearing components of your home for the first ten years.
          </p>
          <p>
            It is backed by your builder and a third‑party provider, and applies to defects in materials and
            workmanship that compromise the structural integrity of your home.
          </p>
        `;
      } else {
        intro.innerHTML = `
          <p>
            This is a concise, homeowner‑friendly view of the original document stored in your project records.
          </p>
          <p>
            Use the quick sections and related documents on the right to explore connected details.
          </p>
        `;
      }
    }

    function filterDocuments() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const items = document.querySelectorAll('.doc-item');
      items.forEach(btn => {
        const text = btn.innerText.toLowerCase();
        btn.style.display = text.includes(query) ? '' : 'none';
      });
    }

    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  
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
      
<div className="w-full min-h-screen flex items-stretch justify-center bg-slate-950" id="app">

<div className="w-full flex items-center justify-center" id="loginView">
<div className="max-w-lg w-full mx-4 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl shadow-slate-950/40 backdrop-blur-sm">
<div className="flex items-center justify-between border-b border-slate-800/80 px-8 pt-6 pb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-950">
              HD
            </div>
<div>
<p className="text-base font-semibold tracking-tight text-slate-50">HomeDocs</p>
<p className="text-sm font-medium text-slate-400">Your home, fully documented.</p>
</div>
</div>
<span className="text-[0.7rem] font-medium text-slate-500 uppercase tracking-[0.2em]">
            Owner Portal
          </span>
</div>
<div className="px-8 py-7 space-y-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-50">
              Welcome home, Jamie
            </h1>
<p className="mt-2 text-base font-medium text-slate-400">
              Sign in to review every document created during your construction phase—plans, specs, warranties, and more.
            </p>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-300">Email</label>
<div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2.5 focus-within:border-sky-500/80 focus-within:ring-1 focus-within:ring-sky-500/60">
<svg className="w-4 h-4 text-slate-500" data-lucide="mail" strokeWidth="1.5"></svg>
<input className="w-full bg-transparent outline-none text-sm font-medium text-slate-100 placeholder-slate-500" placeholder="you@example.com" type="email" value="jamie@example.com"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-300">Access code</label>
<div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2.5 focus-within:border-sky-500/80 focus-within:ring-1 focus-within:ring-sky-500/60">
<svg className="w-4 h-4 text-slate-500" data-lucide="lock" strokeWidth="1.5"></svg>
<input className="w-full bg-transparent outline-none text-sm font-medium text-slate-100 placeholder-slate-500" placeholder="One-time code" type="password" value="••••••••"/>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="relative inline-flex items-center">
<input className="peer sr-only" id="remember" type="checkbox"/>
<div className="w-9 h-5 rounded-full border border-slate-700 bg-slate-900/70 peer-checked:bg-sky-500/90 transition-colors duration-200 flex items-center px-0.5">
<div className="w-4 h-4 rounded-full bg-slate-500 peer-checked:bg-slate-950 transform peer-checked:translate-x-4 transition-transform duration-200 shadow-sm"></div>
</div>
</div>
<label className="text-sm font-medium text-slate-400 cursor-pointer" htmlFor="remember">
                Remember this device
              </label>
</div>
<button className="text-xs font-medium text-sky-400 hover:text-sky-300">
              Need help?
            </button>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500/90 hover:bg-sky-400 text-sm font-semibold tracking-tight text-slate-950 py-2.5 shadow-md shadow-sky-500/30 transition-colors" onclick="enterPortal()">
<span>Enter HomeDocs</span>
<svg className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</button>
<div className="border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs font-medium text-slate-500">
<span>Lot 27 · Maple Ridge · Permit #4821</span>
<span>Updated: Mar 12, 2025</span>
</div>
</div>
</div>
</div>

<div className="hidden w-full" id="mainView">
<div className="flex flex-col md:flex-row w-full min-h-screen text-slate-50">

<aside className="w-full md:w-80 lg:w-96 border-r border-slate-800 bg-slate-950/95 flex flex-col">

<div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-950">
                HD
              </div>
<div>
<p className="text-base font-semibold tracking-tight text-slate-50">HomeDocs</p>
<p className="text-sm font-medium text-slate-400">Welcome back, Jamie</p>
</div>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-[0.7rem] font-medium text-slate-300 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<svg className="w-3.5 h-3.5" data-lucide="user" strokeWidth="1.5"></svg>
<span>Profile</span>
</button>
</div>

<div className="px-5 pt-4 pb-3 border-b border-slate-800/80 space-y-3 bg-slate-950">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100">
                  Maple Ridge · Lot 27
                </p>
<p className="text-sm font-medium text-slate-400">
                  4 Bed · 3 Bath · 2,450 sq ft
                </p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-slate-400 uppercase tracking-[0.16em]">
                  Phase
                </p>
<p className="text-sm font-semibold text-sky-300">
                  Completed
                </p>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-xs">
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-2">
<p className="text-[0.7rem] font-medium text-slate-400">Docs</p>
<p className="text-sm font-semibold text-slate-100">64</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-2">
<p className="text-[0.7rem] font-medium text-slate-400">Warranties</p>
<p className="text-sm font-semibold text-slate-100">18</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-2">
<p className="text-[0.7rem] font-medium text-slate-400">Systems</p>
<p className="text-sm font-semibold text-slate-100">25</p>
</div>
</div>
</div>

<div className="px-5 py-3 border-b border-slate-800/80 bg-slate-950/90">
<label className="block text-xs font-medium text-slate-400 mb-2">Search all home documents</label>
<div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-2.5 py-1.5 focus-within:border-sky-500/80 focus-within:ring-1 focus-within:ring-sky-500/50">
<svg className="w-4 h-4 text-slate-500" data-lucide="search" strokeWidth="1.5"></svg>
<input className="w-full bg-transparent outline-none text-sm font-medium text-slate-100 placeholder-slate-500" id="searchInput" oninput="filterDocuments()" placeholder="Try “kitchen faucet”, “roof warranty”, “HVAC filter size”…" type="text"/>
<button className="hidden md:inline-flex items-center gap-1 rounded-lg bg-slate-800 px-2 py-1 text-[0.7rem] font-medium text-slate-300 hover:bg-slate-700 transition-colors">
<svg className="w-3.5 h-3.5" data-lucide="sliders-horizontal" strokeWidth="1.5"></svg>
<span>Filters</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-950">

<div className="px-5 py-3 space-y-5">

<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
<p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                      Contracts &amp; Text Docs
                    </p>
</div>
<span className="text-xs font-medium text-slate-500">12</span>
</div>
<div className="space-y-1.5" id="textDocsList">
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-900 transition-colors px-3 py-2.5" data-category="text" data-title="Construction Agreement" onclick="openDocument('construction-agreement')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Construction Agreement
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Signed contract outlining scope, allowances, schedule, and payment terms.
                    </p>
</button>
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors px-3 py-2.5" data-category="text" data-title="Change Order Log" onclick="openDocument('change-orders')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Change Order Log
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Record of all approved changes, credits, and additional work.
                    </p>
</button>
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors px-3 py-2.5" data-category="text" data-title="Inspection Reports" onclick="openDocument('inspection-reports')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Inspection Reports
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Passed inspections for foundation, framing, electrical, and plumbing.
                    </p>
</button>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-2 mt-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                      Design &amp; Plans
                    </p>
</div>
<span className="text-xs font-medium text-slate-500">21</span>
</div>
<div className="space-y-1.5" id="designDocsList">
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-900 transition-colors px-3 py-2.5" data-category="design" data-title="Final Floor Plans" onclick="openDocument('floor-plans')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Final Floor Plans
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Dimensioned plans for each level, including room labels and window schedules.
                    </p>
</button>
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors px-3 py-2.5" data-category="design" data-title="Interior Finish Selections" onclick="openDocument('interior-finishes')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Interior Finish Selections
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Cabinets, countertops, flooring, paint colors, hardware, and fixtures.
                    </p>
</button>
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors px-3 py-2.5" data-category="design" data-title="Exterior Elevations" onclick="openDocument('exterior-elevations')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Exterior Elevations
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Front, rear, and side elevation drawings with materials callouts.
                    </p>
</button>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-2 mt-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
<p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                      Warranty &amp; Manuals
                    </p>
</div>
<span className="text-xs font-medium text-slate-500">18</span>
</div>
<div className="space-y-1.5" id="warrantyDocsList">
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-900 transition-colors px-3 py-2.5" data-category="warranty" data-title="10-Year Structural Warranty" onclick="openDocument('structural-warranty')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      10-Year Structural Warranty
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Coverage for foundation, load-bearing walls, and major structural components.
                    </p>
</button>
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors px-3 py-2.5" data-category="warranty" data-title="Appliance Warranties &amp; Manuals" onclick="openDocument('appliance-warranties')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Appliance Warranties &amp; Manuals
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Refrigerator, range, dishwasher, washer/dryer, and more.
                    </p>
</button>
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors px-3 py-2.5" data-category="warranty" data-title="HVAC System &amp; Maintenance" onclick="openDocument('hvac-maintenance')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      HVAC System &amp; Maintenance
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Equipment details, filter sizes, recommended service schedule.
                    </p>
</button>
</div>
</div>

<div className="pb-6">
<div className="flex items-center justify-between mb-2 mt-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
<p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                      Home System Details
                    </p>
</div>
<span className="text-xs font-medium text-slate-500">13</span>
</div>
<div className="space-y-1.5" id="systemDocsList">
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-900 transition-colors px-3 py-2.5" data-category="systems" data-title="Room-by-Room Details" onclick="openDocument('room-by-room')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Room-by-Room Details
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Paint colors, flooring, outlets, lighting, and notes for each space.
                    </p>
</button>
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors px-3 py-2.5" data-category="systems" data-title="Plumbing &amp; Shutoff Map" onclick="openDocument('plumbing-map')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Plumbing &amp; Shutoff Map
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Main shutoff, hose bibs, fixture supply lines, and cleanout locations.
                    </p>
</button>
<button className="doc-item w-full text-left rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors px-3 py-2.5" data-category="systems" data-title="Electrical Circuit Index" onclick="openDocument('electrical-circuit')">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Electrical Circuit Index
                    </p>
<p className="text-sm font-medium text-slate-400 line-clamp-1">
                      Panel directory, GFCI locations, low-voltage wiring, and smart devices.
                    </p>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-800 bg-slate-950/90 px-5 py-3 flex items-center justify-between text-xs font-medium text-slate-500">
<div className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check" strokeWidth="1.5"></svg>
<span>Backed up securely</span>
</div>
<button className="inline-flex items-center gap-1 text-slate-400 hover:text-rose-300 transition-colors" onclick="logout()">
<svg className="w-3.5 h-3.5" data-lucide="log-out" strokeWidth="1.5"></svg>
<span>Sign out</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-slate-950">

<div className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-6 py-4">
<div>
<p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                  Home document viewer
                </p>
<h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50" id="docTitle">
                  Start by selecting a document
                </h1>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<svg className="w-3.5 h-3.5" data-lucide="clock" strokeWidth="1.5"></svg>
<span>Recent</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<svg className="w-3.5 h-3.5" data-lucide="download" strokeWidth="1.5"></svg>
<span>Download PDF</span>
</button>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="h-full flex items-center justify-center px-6 py-10" id="placeholderState">
<div className="max-w-xl text-center">
<div className="mx-auto mb-5 w-14 h-14 rounded-2xl border border-slate-800 bg-slate-900/80 flex items-center justify-center">
<svg className="w-7 h-7 text-sky-400" data-lucide="file-search" strokeWidth="1.5"></svg>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-50">
                  All your construction documents in one place
                </h2>
<p className="mt-2 text-base font-medium text-slate-400">
                  Use the panel on the left to browse contracts, design selections, warranties, and detailed information for every room and system in your home.
                </p>
<div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/90 hover:bg-sky-400 text-xs font-semibold tracking-tight text-slate-950 px-4 py-2 shadow-md shadow-sky-500/30 transition-colors">
<svg className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></svg>
<span>Suggested: Interior Finish Selections</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-medium text-slate-300 px-4 py-2 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<svg className="w-3.5 h-3.5" data-lucide="info" strokeWidth="1.5"></svg>
<span>How do I use this?</span>
</button>
</div>
</div>
</div>

<div className="hidden h-full" id="docContentWrapper">
<div className="max-w-5xl mx-auto px-6 py-8 space-y-6">

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div className="flex flex-wrap items-center gap-2 text-xs font-medium">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-slate-300" id="docTypeBadge">
<span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
<span>Text Document</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-slate-400">
<svg className="w-3.5 h-3.5" data-lucide="calendar" strokeWidth="1.5"></svg>
<span id="docUpdated">Updated Mar 12, 2025</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-slate-400">
<svg className="w-3.5 h-3.5" data-lucide="hash" strokeWidth="1.5"></svg>
<span id="docId">DOC-AGMT-2025-01</span>
</span>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs font-medium">
<button className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-slate-300 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<svg className="w-3.5 h-3.5" data-lucide="share-2" strokeWidth="1.5"></svg>
<span>Share with lender</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-slate-300 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<svg className="w-3.5 h-3.5" data-lucide="star" strokeWidth="1.5"></svg>
<span>Mark favorite</span>
</button>
</div>
</div>

<article className="rounded-2xl border border-slate-800 bg-slate-950/80 shadow-lg shadow-slate-950/40" id="docBody">
<div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-50" id="docHeaderTitle">
                        Construction Agreement
                      </h2>
<p className="mt-1 text-sm font-medium text-slate-400" id="docHeaderSubtitle">
                        A high-level overview of the terms of your construction contract.
                      </p>
</div>
<div className="hidden md:flex flex-col items-end text-xs font-medium text-slate-400">
<span>Prepared by: Skyline Builders</span>
<span>Owner: Jamie Lee</span>
</div>
</div>
<div className="px-6 py-5 space-y-6 text-base font-medium text-slate-200 leading-relaxed">

<div className="space-y-3" id="docSectionIntro">
<p>
                        This document summarizes the key terms of the construction agreement for your home at
                        <span className="text-sky-300">Maple Ridge · Lot 27</span>. It is provided here for quick reference and does not replace the signed legal contract.
                      </p>
<p>
                        Use the section list on the right to jump to specific topics like allowances, schedule, and warranties that were agreed upon during the construction phase.
                      </p>
</div>
<div className="grid lg:grid-cols-[2fr,1fr] gap-6" id="docSectionContent">
<div className="space-y-4">
<section className="space-y-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                            Scope of Work
                          </h3>
<p className="text-base font-medium text-slate-300">
                            The builder agrees to construct a single-family residence according to the approved plans and specifications dated <span className="text-sky-300">Jan 18, 2025</span>.
                            All labor, materials, permits, and inspections required to deliver a move-in ready home are included unless specifically excluded in the contract.
                          </p>
</section>
<section className="space-y-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                            Allowances &amp; Selections
                          </h3>
<p className="text-base font-medium text-slate-300">
                            Certain items—such as appliances, lighting fixtures, and flooring—were assigned dollar allowances at the time of contract.
                            Final selections are documented in the <span className="text-sky-300">Interior Finish Selections</span> document and replace the initial placeholders.
                          </p>
<ul className="mt-2 space-y-1 text-base font-medium text-slate-300 list-disc list-inside">
<li>Appliance package allowance: <span className="text-sky-300">$7,500</span></li>
<li>Lighting fixtures allowance: <span className="text-sky-300">$4,000</span></li>
<li>Flooring allowance: <span className="text-sky-300">$18,000</span></li>
</ul>
</section>
<section className="space-y-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                            Payment Schedule
                          </h3>
<p className="text-base font-medium text-slate-300">
                            Payments were tied to construction milestones (foundation, framing, rough-ins, finishes, and completion) rather than fixed dates,
                            ensuring that funds were only requested after work was completed and inspected.
                          </p>
<div className="mt-2 grid sm:grid-cols-3 gap-3 text-xs font-medium">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2">
<p className="text-[0.7rem] text-slate-400">Deposit</p>
<p className="text-sm font-semibold text-slate-50">10%</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2">
<p className="text-[0.7rem] text-slate-400">Progress draws</p>
<p className="text-sm font-semibold text-slate-50">5 stages</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2">
<p className="text-[0.7rem] text-slate-400">Final due</p>
<p className="text-sm font-semibold text-slate-50">On occupancy</p>
</div>
</div>
</section>
<section className="space-y-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                            Warranty Overview
                          </h3>
<p className="text-base font-medium text-slate-300">
                            The contract references several warranty documents which are all available in this portal:
                            workmanship and materials, systems (mechanical, electrical, plumbing), and structural coverage.
                            For details about what is covered and for how long, open the
                            <span className="text-sky-300">10-Year Structural Warranty</span> and related warranty files from the left panel.
                          </p>
</section>
</div>

<aside className="space-y-3 lg:border-l lg:border-slate-800 lg:pl-5">
<h4 className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                          Sections
                        </h4>
<div className="space-y-1">
<button className="w-full flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-200 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<span className="flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="list-todo" strokeWidth="1.5"></svg>
<span>Scope of work</span>
</span>
<span className="text-[0.65rem] text-slate-500">§1</span>
</button>
<button className="w-full flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-200 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<span className="flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="palette" strokeWidth="1.5"></svg>
<span>Allowances</span>
</span>
<span className="text-[0.65rem] text-slate-500">§2</span>
</button>
<button className="w-full flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-200 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<span className="flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="credit-card" strokeWidth="1.5"></svg>
<span>Payment schedule</span>
</span>
<span className="text-[0.65rem] text-slate-500">§3</span>
</button>
<button className="w-full flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-200 hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<span className="flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="shield" strokeWidth="1.5"></svg>
<span>Warranty</span>
</span>
<span className="text-[0.65rem] text-slate-500">§4</span>
</button>
</div>
<div className="mt-4 space-y-2 text-xs font-medium">
<p className="text-slate-400 uppercase tracking-[0.16em]">Related documents</p>
<button className="w-full flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-[0.75rem] text-slate-200 hover:border-sky-500/80 hover:text-sky-200 transition-colors" onclick="openDocument('change-orders')">
<span className="flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="file-pen-line" strokeWidth="1.5"></svg>
<span>Change Order Log</span>
</span>
<span className="text-[0.65rem] text-slate-500">3 updates</span>
</button>
<button className="w-full flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-[0.75rem] text-slate-200 hover:border-sky-500/80 hover:text-sky-200 transition-colors" onclick="openDocument('inspection-reports')">
<span className="flex items-center gap-2">
<svg className="w-3.5 h-3.5" data-lucide="badge-check" strokeWidth="1.5"></svg>
<span>Inspection Reports</span>
</span>
<span className="text-[0.65rem] text-slate-500">All passed</span>
</button>
</div>
</aside>
</div>
</div>
</article>

<div className="mt-4 grid md:grid-cols-3 gap-3">
<button className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-left hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                      Need to find…
                    </p>
<p className="mt-1 text-sm font-semibold tracking-tight text-slate-50">
                      The paint color in your primary bedroom
                    </p>
<p className="mt-1 text-sm font-medium text-slate-400">
                      Open “Room-by-Room Details” and look under “Level 2 · Primary Suite”.
                    </p>
</button>
<button className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-left hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                      Need to find…
                    </p>
<p className="mt-1 text-sm font-semibold tracking-tight text-slate-50">
                      Your kitchen faucet model and finish
                    </p>
<p className="mt-1 text-sm font-medium text-slate-400">
                      Search “kitchen faucet” or open “Interior Finish Selections” · Plumbing fixtures.
                    </p>
</button>
<button className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-left hover:border-sky-500/80 hover:text-sky-200 transition-colors">
<p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                      Need to find…
                    </p>
<p className="mt-1 text-sm font-semibold tracking-tight text-slate-50">
                      Where to shut off water in an emergency
                    </p>
<p className="mt-1 text-sm font-medium text-slate-400">
                      Open “Plumbing &amp; Shutoff Map” and review the main shutoff diagram on page 1.
                    </p>
</button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>


    </>
  );
}
