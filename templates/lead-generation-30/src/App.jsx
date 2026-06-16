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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-14 flex items-center justify-between px-6">
<div className="flex items-center gap-2 w-1/4">
<span className="font-semibold tracking-tighter text-sm">NLE</span>
<span className="text-gray-300 text-xs">/</span>
<span className="text-gray-500 text-xs tracking-tight">v1.1</span>
</div>
<div className="flex items-center gap-8">
<a className="text-sm font-medium text-black" href="#leads">Leads</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#assets">Assets</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#outreach">Outreach</a>
</div>
<div className="flex items-center justify-end gap-3 w-1/4">
<div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 border border-gray-200">
                JD
            </div>
</div>
</nav>

<div className="h-24"></div>

<section className="max-w-3xl mx-auto px-6 mb-32" id="import">
<div className="mb-10 text-center">
<h1 className="text-2xl font-medium tracking-tight mb-2 text-gray-900">Import Leads</h1>
<p className="text-gray-500 text-sm">Upload CSV or JSON to begin enriching your brands.</p>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:border-gray-300 transition-colors cursor-pointer group mb-8 shadow-sm">
<div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
<span className="iconify text-gray-400" data-icon="lucide:upload-cloud" data-width="20" strokeWidth="1.5"></span>
</div>
<p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
<p className="text-xs text-gray-400">CSV, JSON, XLSX (max 25MB)</p>
</div>

<div className="flex items-center justify-between bg-gray-50/50 p-4 rounded-lg border border-gray-100 mb-8">
<div className="flex items-center gap-4">
<div className="flex flex-col gap-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Category</label>
<div className="flex items-center gap-2 cursor-pointer">
<span className="text-sm font-medium text-gray-900">Apparel (recommended)</span>
<span className="iconify text-gray-400" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-gray-600">Auto-classify categories using LLM</span>

<div className="w-9 h-5 bg-black rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>

<button className="w-full bg-black text-white hover:bg-gray-800 font-medium text-sm h-11 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm">
            Process &amp; Create Lead Table
            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</section>
<div className="w-full h-px bg-gray-100 my-12"></div>

<section className="max-w-6xl mx-auto px-6 mb-32" id="leads">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-medium tracking-tight">Lead List</h2>
<p className="text-xs text-gray-500 mt-1">142 leads imported</p>
</div>
<div className="flex gap-3">
<button className="px-4 h-9 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-50">Filter</button>
<button className="px-4 h-9 bg-black text-white text-xs font-medium rounded-lg hover:bg-gray-800 shadow-sm flex items-center gap-2">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                    Generate Samples (50)
                </button>
</div>
</div>
<div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-100">
<th className="py-3 px-4 w-10">
<div className="h-4 w-4 border border-gray-300 rounded bg-white"></div>
</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Brand Name</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Website</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Social</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide w-20">Sample</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-4">
<div className="h-4 w-4 border border-gray-300 rounded bg-white"></div>
</td>
<td className="py-3 px-4 text-sm font-medium text-gray-900">Acne Studios</td>
<td className="py-3 px-4 text-sm text-gray-500">acnestudios.com</td>
<td className="py-3 px-4 text-sm text-gray-500">@acnestudios</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">Ready</span>
</td>
<td className="py-3 px-4">
<div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-300">
<span className="iconify" data-icon="lucide:image" data-width="14"></span>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-4">
<div className="h-4 w-4 border border-gray-300 rounded bg-white"></div>
</td>
<td className="py-3 px-4 text-sm font-medium text-gray-900">Reformation</td>
<td className="py-3 px-4 text-sm text-gray-500">thereformation.com</td>
<td className="py-3 px-4 text-sm text-gray-500">@reformation</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">Generated</span>
</td>
<td className="py-3 px-4">
<div className="h-8 w-8 rounded bg-gray-200 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&amp;q=80')] bg-cover"></div>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-4">
<div className="h-4 w-4 border border-gray-300 rounded bg-white"></div>
</td>
<td className="py-3 px-4 text-sm font-medium text-gray-900">Unknown Label</td>
<td className="py-3 px-4 text-sm text-gray-500">unknownlabel.com</td>
<td className="py-3 px-4 text-sm text-gray-500">—</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">Enriching...</span>
</td>
<td className="py-3 px-4">
<div className="h-8 w-8 rounded bg-gray-50 border border-dashed border-gray-200"></div>
</td>
</tr>
</tbody>
</table>

<div className="border-t border-gray-100 bg-gray-50/30 px-4 py-3 flex items-center justify-between">
<span className="text-xs text-gray-500">Showing 1–50 of 142</span>
<div className="flex gap-1">
<button className="p-1 rounded hover:bg-gray-200 text-gray-500 disabled:opacity-50">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<button className="p-1 rounded hover:bg-gray-200 text-gray-500">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-gray-100 my-12"></div>

<section className="max-w-2xl mx-auto px-6 mb-32">
<div className="mb-8">
<h2 className="text-lg font-medium tracking-tight mb-1">Generating Visual Assets</h2>
<div className="flex items-center gap-2 text-xs text-gray-500">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Firecrawl is scraping product images &amp; Nomiki is generating samples...
            </div>
</div>
<div className="flex flex-col gap-3">

<div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white flex items-center justify-between relative overflow-hidden">
<div className="absolute bottom-0 left-0 h-0.5 bg-gray-100 w-full">
<div className="h-full bg-black w-3/4 transition-all duration-1000"></div>
</div>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
<span className="iconify text-gray-400 animate-spin" data-icon="lucide:loader-2" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Everlane</h3>
<p className="text-xs text-gray-500">everlane.com</p>
</div>
</div>
<div className="text-right">
<span className="text-xs font-medium text-gray-900 block mb-0.5">Generating Nomiki sample...</span>
<span className="text-[10px] text-gray-400 uppercase tracking-wide">Processing</span>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-gray-200 bg-[url('https://images.unsplash.com/photo-1550614000-4b9519e02a48?w=100&amp;q=80')] bg-cover ring-1 ring-gray-200"></div>
<div>
<h3 className="text-sm font-medium text-gray-900">Patagonia</h3>
<p className="text-xs text-gray-500">patagonia.com</p>
</div>
</div>
<div className="flex items-center gap-2 text-green-600">
<span className="text-xs font-medium">Complete</span>
<span className="iconify" data-icon="lucide:check-circle" data-width="14"></span>
</div>
</div>

<div className="border border-gray-100 rounded-xl p-5 bg-white opacity-60 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100"></div>
<div>
<h3 className="text-sm font-medium text-gray-400">Uniqlo</h3>
<p className="text-xs text-gray-400">uniqlo.com</p>
</div>
</div>
<span className="text-xs text-gray-300">Queued</span>
</div>
</div>
<div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
<span className="text-xs font-medium text-gray-500">47/50 completed</span>
<div className="flex gap-3">
<button className="text-xs font-medium text-gray-600 hover:text-black transition-colors">Return to Lead Table</button>
<button className="px-4 h-9 bg-gray-100 text-gray-900 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                    Download ZIP
                </button>
</div>
</div>
</section>
<div className="w-full h-px bg-gray-100 my-12"></div>

<section className="max-w-6xl mx-auto px-6 mb-32 h-[600px] flex gap-8" id="assets">

<div className="flex-1">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight">Generated Assets</h2>
<div className="flex gap-2">
<span className="p-2 bg-gray-100 rounded text-gray-600 cursor-pointer">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
</span>
<span className="p-2 rounded text-gray-400 hover:bg-gray-50 cursor-pointer">
<span className="iconify" data-icon="lucide:list" data-width="16"></span>
</span>
</div>
</div>
<div className="grid grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 mb-3 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-900">Nike Sportswear</p>
<a className="text-xs text-gray-500 hover:text-black" href="#">View Details</a>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 mb-3 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-900">Adidas Originals</p>
<a className="text-xs text-gray-500 hover:text-black" href="#">View Details</a>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 mb-3 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-900">Puma Lifestyle</p>
<a className="text-xs text-gray-500 hover:text-black" href="#">View Details</a>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 border-l border-gray-100 pl-8 flex flex-col">
<div className="mb-6">
<div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 mb-4">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&amp;q=80"/>
</div>
<h3 className="text-base font-medium text-gray-900">Nike Sportswear</h3>
<p className="text-xs text-gray-500 mt-1">nike.com</p>
</div>
<div className="space-y-4 mb-8">
<div>
<span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Source Product</span>
<div className="mt-2 flex items-center gap-3 p-2 bg-gray-50 rounded border border-gray-100">
<div className="w-8 h-8 bg-white rounded border border-gray-200 overflow-hidden">
<img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&amp;q=80"/>
</div>
<a className="text-xs text-blue-600 hover:underline truncate" href="#">nike.com/products/air-max...</a>
</div>
</div>
</div>
<div className="mt-auto flex flex-col gap-2">
<button className="w-full h-9 bg-black text-white text-xs font-medium rounded-lg hover:bg-gray-800">Copy Image URL</button>
<button className="w-full h-9 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-50">Regenerate</button>
</div>
</div>
</section>
<div className="w-full h-px bg-gray-100 my-12"></div>

<section className="max-w-6xl mx-auto px-6 mb-20" id="outreach">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-medium tracking-tight">Outreach Messages</h2>
<p className="text-xs text-gray-500 mt-1">Draft personalized outreach emails for each lead.</p>
</div>
<button className="text-xs font-medium text-gray-500 hover:text-black">Export to CSV</button>
</div>
<div className="flex border border-gray-200 rounded-xl overflow-hidden shadow-sm h-[600px]">

<div className="w-7/12 border-r border-gray-200 bg-white flex flex-col">
<div className="overflow-y-auto flex-1">
<table className="w-full text-left">
<thead className="sticky top-0 bg-white border-b border-gray-100 shadow-sm z-10">
<tr>
<th className="py-3 px-4 text-xs font-medium text-gray-500">Brand</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500">Subject Preview</th>
<th className="py-3 px-4 w-16"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50 cursor-pointer bg-blue-50/30">
<td className="py-4 px-4 align-top">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 border border-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&amp;q=80"/>
</div>
<div>
<p className="text-xs font-medium text-gray-900">Nike</p>
<p className="text-[10px] text-gray-500">partners@nike.com</p>
</div>
</div>
</td>
<td className="py-4 px-4 align-top">
<p className="text-xs font-medium text-gray-900 truncate">Elevating Nike's visual strategy</p>
<p className="text-xs text-gray-500 truncate mt-0.5 w-48">I noticed your recent campaign and...</p>
</td>
<td className="py-4 px-4 align-middle text-right">
<span className="iconify text-blue-600" data-icon="lucide:chevron-right" data-width="14"></span>
</td>
</tr>
<tr className="hover:bg-gray-50 cursor-pointer">
<td className="py-4 px-4 align-top">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 border border-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&amp;q=80"/>
</div>
<div>
<p className="text-xs font-medium text-gray-900">Adidas</p>
<p className="text-[10px] text-gray-500">media@adidas.com</p>
</div>
</div>
</td>
<td className="py-4 px-4 align-top">
<p className="text-xs font-medium text-gray-900 truncate">Partnership with Nomiki</p>
<p className="text-xs text-gray-500 truncate mt-0.5 w-48">Saw the new collection and thought...</p>
</td>
<td className="py-4 px-4 align-middle text-right">
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="w-5/12 bg-gray-50 p-6 flex flex-col overflow-y-auto">
<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex-1 flex flex-col">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
<div>
<span className="text-[10px] font-medium text-gray-400 uppercase">To</span>
<p className="text-sm text-gray-900">partners@nike.com</p>
</div>
<div className="text-right">
<span className="text-[10px] font-medium text-gray-400 uppercase">Brand</span>
<p className="text-sm text-gray-900">Nike</p>
</div>
</div>
<div className="space-y-4 text-sm text-gray-700 leading-relaxed font-normal flex-1">
<p className="font-medium text-gray-900">Subject: Elevating Nike's visual strategy with AI</p>
<p>Hi Team,</p>
<p>I’ve been following Nike’s recent digital campaigns and was impressed by the art direction on the Air Max launch.</p>
<p>At Nomiki, we specialize in enriching brand visuals. I took the liberty of generating a sample asset based on your current product line to show what our engine can do:</p>

<div className="my-4 border border-gray-100 rounded-lg overflow-hidden">
<img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&amp;q=80"/>
<div className="bg-gray-50 p-2 text-[10px] text-gray-500 text-center">Generated by NLE v1.1</div>
</div>
<p>Would love to chat about how we can scale this for your upcoming catalog.</p>
<p>Best,<br/>Nomiki Team</p>
</div>
<div className="mt-6 pt-4 border-t border-gray-100">
<button className="w-full bg-black text-white h-10 rounded-lg font-medium text-xs hover:bg-gray-800 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:copy" data-width="14"></span>
                            Copy to Clipboard
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 bg-gray-50 border-t border-gray-200">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest text-center mb-10">System Logic</h3>
<div className="flex flex-col items-center gap-6 text-xs text-gray-600 font-medium">
<div className="px-4 py-2 bg-white border border-gray-200 rounded shadow-sm">Upload CSV</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="px-4 py-2 bg-white border border-gray-200 rounded shadow-sm">
                NLE Parser <span className="text-gray-400 font-normal">→ Filter Apparel</span>
</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="px-4 py-2 bg-white border border-gray-200 rounded shadow-sm border-l-4 border-l-black">Firecrawl Scraper</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="px-4 py-2 bg-white border border-gray-200 rounded shadow-sm">Extract Products</div>
</div>
</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="px-4 py-2 bg-black text-white rounded shadow-sm">Nomiki Gen AI</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="grid grid-cols-2 gap-4 w-full max-w-xs">
<div className="px-3 py-2 bg-white border border-gray-200 rounded text-center">Store Image</div>
<div className="px-3 py-2 bg-white border border-gray-200 rounded text-center">Map to Lead ID</div>
</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="px-4 py-2 bg-white border border-gray-200 rounded shadow-sm border-dashed">LLM Outreach Draft</div>
</div>
</section>
<footer className="text-center py-10 text-xs text-gray-400">
        Nomiki Lead Engine MVP v1.1 Wireframe
    </footer>

    </>
  );
}
