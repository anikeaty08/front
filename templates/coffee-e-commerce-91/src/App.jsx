import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-slate-100/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="blocks"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Nexus</span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#">Network</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#">Developers</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#">Sign in</a>
<div className="border-gradient-button shadow-xl shadow-indigo-500/10 transition-shadow hover:shadow-indigo-500/20">
<button className="relative block h-full w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600">
                        Start Trial
                    </button>
</div>
</div>
</div>
</nav>

<main className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-16 lg:grid-cols-12 lg:gap-8 items-center">

<div className="flex flex-col justify-center lg:col-span-5">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        New: Real-time API v2.4
                    </div>
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl mb-6">
                        The operating <br/> system for <span className="text-indigo-500">global freight.</span>
</h1>
<p className="mb-8 text-lg leading-relaxed text-slate-600 max-w-lg">
                        Unify your supply chain data in a single structured view. Connect ERPs, carriers, and WMS into one immutable ledger for real-time decision making.
                    </p>
<div className="flex gap-4">
<div className="border-gradient-button shadow-xl shadow-indigo-500/20 group">
<button className="relative flex items-center gap-2 h-full w-full rounded-lg bg-indigo-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-600">
<span>View Dashboard</span>
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
<button className="px-6 py-3 text-base font-medium text-slate-600 transition hover:text-indigo-600">
                            Documentation
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-100 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-100 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-100 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p>Trusted by 4,000+ teams</p>
</div>
</div>

<div className="relative lg:col-span-7 perspective-1000">

<div className="absolute -inset-4 bg-gradient-to-tr from-indigo-100 to-slate-200 rounded-full blur-3xl opacity-50 -z-10"></div>

<div className="relative rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden transform rotate-y-2 hover:rotate-y-0 transition-transform duration-700 ease-out">

<div className="border-b border-slate-100 bg-slate-50/50 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full bg-red-400"></div>
<div className="h-3 w-3 rounded-full bg-amber-400"></div>
<div className="h-3 w-3 rounded-full bg-emerald-400"></div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-slate-400">STATUS: CONNECTED</span>
<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
<tr>
<th className="px-6 py-3 tracking-wider">Shipment ID</th>
<th className="px-6 py-3 tracking-wider">Route</th>
<th className="px-6 py-3 tracking-wider">Carrier</th>
<th className="px-6 py-3 tracking-wider">Status</th>
<th className="px-6 py-3 tracking-wider text-right">Value</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">#SHP-8921</td>
<td className="px-6 py-4 text-slate-600">
<div className="flex items-center gap-2">
<span>LAX</span>
<i className="h-3 w-3 text-slate-400" data-lucide="arrow-right"></i>
<span>JFK</span>
</div>
</td>
<td className="px-6 py-4 text-slate-600">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">M</div>
                                                Maersk
                                            </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">In Transit</span>
</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$12,450.00</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">#SHP-8922</td>
<td className="px-6 py-4 text-slate-600">
<div className="flex items-center gap-2">
<span>HAM</span>
<i className="h-3 w-3 text-slate-400" data-lucide="arrow-right"></i>
<span>RTM</span>
</div>
</td>
<td className="px-6 py-4 text-slate-600">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-700">H</div>
                                                Hapag
                                            </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">Customs</span>
</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$8,230.50</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">#SHP-8923</td>
<td className="px-6 py-4 text-slate-600">
<div className="flex items-center gap-2">
<span>PVG</span>
<i className="h-3 w-3 text-slate-400" data-lucide="arrow-right"></i>
<span>LGB</span>
</div>
</td>
<td className="px-6 py-4 text-slate-600">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700">C</div>
                                                CMA CGM
                                            </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">Booked</span>
</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$4,100.00</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">#SHP-8924</td>
<td className="px-6 py-4 text-slate-600">
<div className="flex items-center gap-2">
<span>SIN</span>
<i className="h-3 w-3 text-slate-400" data-lucide="arrow-right"></i>
<span>HKG</span>
</div>
</td>
<td className="px-6 py-4 text-slate-600">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700">O</div>
                                                ONE
                                            </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Delivered</span>
</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$2,850.25</td>
</tr>
</tbody>
</table>

<div className="border-t border-slate-100 bg-slate-50 px-6 py-3 flex justify-between items-center text-xs text-slate-500">
<span>Showing 4 of 1,204 active shipments</span>
<div className="flex gap-2">
<button className="hover:text-indigo-600 transition-colors">Previous</button>
<button className="hover:text-indigo-600 transition-colors">Next</button>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-12 z-20 w-48 rounded-lg bg-white p-4 shadow-xl border border-slate-100 animate-bounce" style={{animationDuration: '3s'}}>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">On-Time Perf.</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-slate-900">98.4%</span>
<span className="text-xs font-medium text-emerald-600 mb-1">↑ 2.1%</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-white py-24 border-y border-slate-200">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">System Integration</span>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Structured logic for <br className="hidden lg:block"/> unstructured chaos.
                    </h2>
<p className="mt-4 text-lg text-slate-600">
                        We map every data point from your fragmented ecosystem into a clean, queryable table. No more chasing PDFs or email threads.
                    </p>
</div>
<button className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    View Integration Docs <i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="border-gradient-wrapper shadow-xl hover:shadow-2xl transition-all duration-300">
<div className="border-gradient-content p-8">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="h-6 w-6" data-lucide="file-json"></i>
</div>
<h3 className="mb-3 text-lg font-semibold text-slate-900">OCR Extraction</h3>
<p className="text-sm leading-relaxed text-slate-500">
                            Automatically convert Bills of Lading, Commercial Invoices, and Packing Lists into JSON structured data with 99.9% accuracy.
                        </p>
<div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-400">
<i className="h-3 w-3 text-emerald-500" data-lucide="check-circle-2"></i> Auto-validated
                        </div>
</div>
</div>

<div className="border-gradient-wrapper shadow-xl hover:shadow-2xl transition-all duration-300">
<div className="border-gradient-content p-8">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="h-6 w-6" data-lucide="webhook"></i>
</div>
<h3 className="mb-3 text-lg font-semibold text-slate-900">Carrier Webhooks</h3>
<p className="text-sm leading-relaxed text-slate-500">
                            Real-time milestone events pushed directly to your TMS. Eliminate polling and reduce server load with event-driven architecture.
                        </p>
<div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-400">
<i className="h-3 w-3 text-amber-500" data-lucide="zap"></i> &lt; 50ms latency
                        </div>
</div>
</div>

<div className="border-gradient-wrapper shadow-xl hover:shadow-2xl transition-all duration-300">
<div className="border-gradient-content p-8">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="h-6 w-6" data-lucide="table-2"></i>
</div>
<h3 className="mb-3 text-lg font-semibold text-slate-900">Rate Normalization</h3>
<p className="text-sm leading-relaxed text-slate-500">
                            Compare spot rates, contract rates, and surcharges side-by-side. We standardize currency and units automatically.
                        </p>
<div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-400">
<i className="h-3 w-3 text-blue-500" data-lucide="refresh-cw"></i> Daily updates
                        </div>
</div>
</div>

<div className="border-gradient-wrapper shadow-xl hover:shadow-2xl transition-all duration-300">
<div className="border-gradient-content p-8">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="h-6 w-6" data-lucide="network"></i>
</div>
<h3 className="mb-3 text-lg font-semibold text-slate-900">Network Discovery</h3>
<p className="text-sm leading-relaxed text-slate-500">
                            Find new capacity in your lane history. Our graph database links carriers to routes they frequently serve.
                        </p>
</div>
</div>

<div className="border-gradient-wrapper shadow-xl hover:shadow-2xl transition-all duration-300">
<div className="border-gradient-content p-8">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="h-6 w-6" data-lucide="shield-check"></i>
</div>
<h3 className="mb-3 text-lg font-semibold text-slate-900">Compliance Audit</h3>
<p className="text-sm leading-relaxed text-slate-500">
                            Automated checking of insurance certificates, safety ratings, and operating authority before every dispatch.
                        </p>
</div>
</div>

<div className="border-gradient-wrapper shadow-xl hover:shadow-2xl transition-all duration-300">
<div className="border-gradient-content p-8">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="h-6 w-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="mb-3 text-lg font-semibold text-slate-900">Spend Analytics</h3>
<p className="text-sm leading-relaxed text-slate-500">
                            Visualize landed costs per SKU. Drill down into accessorials, demurrage, and detention fees.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-100 py-12 text-center">
<div className="mb-4 flex justify-center gap-6">
<a className="text-slate-400 hover:text-indigo-600" href="#"><i className="h-5 w-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-indigo-600" href="#"><i className="h-5 w-5" data-lucide="github"></i></a>
<a className="text-slate-400 hover:text-indigo-600" href="#"><i className="h-5 w-5" data-lucide="linkedin"></i></a>
</div>
<p className="text-sm text-slate-500">© 2024 Nexus Logistics Inc. All rights reserved.</p>
</footer>


    </>
  );
}
