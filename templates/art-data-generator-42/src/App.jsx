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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex w-full max-w-5xl mr-auto ml-auto pt-6 px-6 pb-6 items-center justify-between bg-[#FAFAF8]/80 backdrop-blur-md">
<div className="flex items-center gap-2 select-none group cursor-default">
<span className="text-sm font-semibold text-stone-900 tracking-tight">
          Fauxfolio
        </span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-stone-900 transition-colors text-xs font-normal text-stone-400" href="#about">
          About
        </a>
<div className="w-7 h-7 rounded-full bg-stone-200 flex items-center justify-center text-[10px] text-stone-600 font-medium cursor-pointer hover:bg-stone-300 transition-colors">
          KR
        </div>
</div>
</nav>
<main className="flex-grow flex flex-col items-center w-full">

<section className="flex flex-col md:pt-32 w-full max-w-5xl pt-28 pr-6 pb-12 pl-6 items-center justify-start">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-center text-stone-900 max-w-3xl leading-[1.05]">
          Generate believable art-world data, fast.
        </h1>
<p className="md:text-lg leading-relaxed text-base text-stone-500 text-center max-w-xl mt-6 font-normal">
          Fauxfolio helps you create realistic artworks and contacts for demos
          and internal use.
        </p>
<div className="mt-10 flex flex-col items-center gap-3 relative z-10">
<div className="relative group">
<button className="hover:bg-stone-800 hover:shadow transition-all duration-200 active:scale-[0.99] flex text-sm font-medium text-white bg-stone-900 w-full rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5 shadow-sm gap-x-2 gap-y-2 items-center justify-center" onclick="const dd = document.getElementById('gen-dropdown'); dd.classList.toggle('hidden'); dd.classList.toggle('opacity-0'); dd.classList.toggle('-translate-y-2');">
              Start generating
              <iconify-icon className="text-white/80" icon="lucide:chevron-down" width="16"></iconify-icon>
</button>
<div className="hidden opacity-0 -translate-y-2 transform transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-stone-200/80 rounded-lg shadow-xl shadow-stone-200/50 overflow-hidden py-1 z-20" id="gen-dropdown">
<a className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors" href="#generate-works">
<iconify-icon icon="lucide:palette" width="14"></iconify-icon>
                Generate works
              </a>
<a className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors" href="#generate-contacts">
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
                Generate contacts
              </a>
</div>
</div>
<p className="text-[11px] font-medium text-stone-400">v2.1</p>
</div>
</section>
<div className="w-full max-w-5xl mx-auto px-6">
<div className="h-px bg-stone-200/70"></div>
</div>

<section className="scroll-mt-24 md:scroll-mt-28 w-full max-w-5xl mx-auto px-6 pt-16 md:pt-20 pb-24 md:pb-28" id="generate-works">
<div className="mb-10">
<h2 className="text-xl font-semibold text-stone-900 tracking-tight">
            Works Generator
          </h2>
<p className="text-sm text-stone-500 max-w-xl mt-2">
            Create realistic inventory records you can paste into Sheets or use
            in import templates.
          </p>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
<div className="pb-2 border-b border-stone-200/60">
<h2 className="flex items-center gap-2 text-sm font-medium text-stone-700 tracking-tight">
<iconify-icon className="text-stone-400" icon="lucide:sliders-horizontal" width="16"></iconify-icon>
                Configuration
              </h2>
</div>
<div className="space-y-6">

<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-600 ml-0.5">
                  Primary Artist
                </label>
<div className="relative group">
<input className="w-full text-sm bg-white border border-stone-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 placeholder-stone-400 transition-all shadow-sm" type="text" value="Elara Vance"/>
<div className="absolute right-3 top-2.5 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon icon="lucide:x-circle" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-600 ml-0.5">
                  Medium
                </label>
<button className="w-full flex items-center justify-between text-sm bg-white border border-stone-200 rounded-lg px-3 py-2.5 hover:border-stone-300 transition-colors text-left text-stone-900 shadow-sm group">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    Oil on Linen
                  </span>
<iconify-icon className="text-stone-400 group-hover:text-stone-600 transition-colors" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>

<div className="space-y-3 pt-1">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-stone-600 ml-0.5">
                    Quantity
                  </label>
<span className="text-xs font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                    12
                  </span>
</div>
<div className="relative w-full h-1.5 bg-stone-200 rounded-full cursor-pointer group">
<div className="absolute top-0 left-0 h-full w-[40%] bg-stone-800 rounded-full group-hover:bg-stone-700 transition-colors"></div>
<div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border border-stone-300 shadow-sm rounded-full group-hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-stone-400 font-medium">
<span>1</span>
<span className="">50</span>
</div>
</div>

<div className="space-y-3 pt-2">
<label className="flex items-center gap-3 cursor-pointer group select-none">
<input checked="" className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 rounded bg-white flex items-center justify-center transition-all shadow-sm">
<svg className="opacity-0 transition-opacity" fill="none" height="10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="10">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-xs text-stone-600 group-hover:text-stone-900 transition-colors">
                    Generate thumbnails
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group select-none">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 rounded bg-white flex items-center justify-center transition-all shadow-sm">
<svg className="opacity-0 transition-opacity" fill="none" height="10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="10">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-xs text-stone-600 group-hover:text-stone-900 transition-colors">
                    Include provenance history
                  </span>
</label>
</div>

<div className="pt-2">
<button className="hover:bg-black shadow-stone-900/5 transition-all active:scale-[0.99] flex group text-sm font-medium text-white bg-stone-900 w-full rounded-lg pt-2.5 pb-2.5 shadow-lg gap-x-2 gap-y-2 items-center justify-center">
<svg className="text-stone-400 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="sparkles" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
                  Generate Data
                </button>
</div>
</div>
</div>

<div className="lg:col-span-8 lg:sticky lg:top-28 self-start flex flex-col gap-4 lg:h-[calc(100vh-7rem)]">
<div className="flex h-[37px] border-stone-200/60 border-b pb-2 items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-stone-900">
                Output Preview
              </h2>
<div className="flex gap-2">
<button className="text-[11px] font-medium text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1.5 bg-white border border-stone-200 rounded-md px-2 py-1 shadow-sm">
<iconify-icon icon="lucide:download" width="12"></iconify-icon>
                  CSV
                </button>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[500px] lg:flex-1">

<div className="overflow-auto flex-1">
<div className="hidden h-full flex flex-col items-center justify-center text-center px-8 py-14">
<div className="w-10 h-10 rounded-xl border border-stone-200 bg-stone-50 flex items-center justify-center mb-4">
<iconify-icon className="text-stone-500" icon="lucide:sparkles" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-stone-900">
                    Nothing generated yet
                  </h3>
<p className="mt-2 text-xs text-stone-500 max-w-sm">
                    Adjust your settings, then click
                    <span className="font-medium text-stone-700">Generate</span>
                    to preview the output here.
                  </p>
</div>
<div className="hidden px-5 py-4">
<div className="flex items-center justify-between mb-3">
<p className="text-xs font-medium text-stone-700">
                      Generating…
                    </p>
<span className="text-[11px] text-stone-400">Please wait</span>
</div>
<div className="space-y-2">
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
</div>
<div className="mt-4 flex items-center gap-2 text-[11px] text-stone-400">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Building rows and formatting columns…
                  </div>
</div>
<table className="w-full text-left border-collapse min-w-[500px]">
<thead className="">
<tr className="border-b border-stone-100 bg-stone-50/50 text-xs text-stone-500 font-medium">
<th className="pl-5 pr-3 py-3 font-medium w-16">ID</th>
<th className="font-medium pt-3 pr-3 pb-3 pl-3">Title</th>
<th className="px-3 py-3 font-medium">Year</th>
<th className="px-3 py-3 font-medium">Dimensions</th>
<th className="pl-3 pr-5 py-3 font-medium text-right">
                        Est. Price
                      </th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-stone-50">

<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-400 font-mono text-[11px]">
                        #0841
                      </td>
<td className="px-3 py-3.5 text-stone-900 font-medium">
                        Untitled (Blue Echo)
                      </td>
<td className="px-3 py-3.5 text-stone-500">2019</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        48 × 60 in
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        $12,500
                      </td>
</tr>

<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-400 font-mono text-[11px]">
                        #0842
                      </td>
<td className="px-3 py-3.5 text-stone-900 font-medium">
                        Composition No. 7
                      </td>
<td className="px-3 py-3.5 text-stone-500">2020</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        36 × 36 in
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        $8,200
                      </td>
</tr>

<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-400 font-mono text-[11px]">
                        #0843
                      </td>
<td className="px-3 py-3.5 text-stone-900 font-medium">
                        Morning Shadows
                      </td>
<td className="px-3 py-3.5 text-stone-500">2018</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        24 × 30 in
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        $5,400
                      </td>
</tr>

<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-400 font-mono text-[11px]">
                        #0844
                      </td>
<td className="px-3 py-3.5 text-stone-900 font-medium">
                        Abstract Study IV
                      </td>
<td className="px-3 py-3.5 text-stone-500">2021</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        12 × 16 in
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        $2,100
                      </td>
</tr>

<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-400 font-mono text-[11px]">
                        #0845
                      </td>
<td className="px-3 py-3.5 text-stone-900 font-medium">
                        The Silent Room
                      </td>
<td className="px-3 py-3.5 text-stone-500">2019</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        60 × 72 in
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        $18,000
                      </td>
</tr>

<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-400 font-mono text-[11px]">
                        #0846
                      </td>
<td className="px-3 py-3.5 text-stone-900 font-medium">
                        Red Line
                      </td>
<td className="px-3 py-3.5 text-stone-500">2022</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        40 × 40 in
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        $9,500
                      </td>
</tr>
</tbody>
</table>
</div>

<div className="border-t border-stone-100 p-3 bg-stone-50/30 flex items-center justify-between text-xs text-stone-500">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Ready — 6 of 12 generated
                </span>
<div className="flex gap-1">
<button className="w-6 h-6 flex items-center justify-center rounded hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-900 disabled:opacity-50">
<iconify-icon className="" icon="lucide:chevron-left" width="14"></iconify-icon>
</button>
<button className="w-6 h-6 flex items-center justify-center rounded hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-900">
<iconify-icon className="" icon="lucide:chevron-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="scroll-mt-24 md:scroll-mt-28 w-full max-w-5xl mx-auto px-6 pb-24 md:pb-28 pt-16 md:pt-20" id="generate-contacts">
<div className="mb-10">
<h2 className="text-xl font-semibold text-stone-900 tracking-tight">
            Contacts Generator
          </h2>
<p className="text-sm text-stone-500 max-w-xl mt-2">
            Create realistic contact records you can paste into Sheets or use in
            import templates.
          </p>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
<div className="pb-2 border-b border-stone-200/60">
<h2 className="flex items-center gap-2 text-sm font-medium text-stone-700">
<iconify-icon className="text-stone-400" icon="lucide:sliders-horizontal" width="16"></iconify-icon>
                Configuration
              </h2>
</div>
<div className="space-y-6">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-600 ml-0.5">
                  Role
                </label>
<button className="w-full flex items-center justify-between text-sm bg-white border border-stone-200 rounded-lg px-3 py-2.5 hover:border-stone-300 transition-colors text-left text-stone-900 shadow-sm group">
<span className="flex items-center gap-2">Collector</span>
<iconify-icon className="text-stone-400 group-hover:text-stone-600 transition-colors" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-600 ml-0.5">
                  Location
                </label>
<div className="relative group">
<input className="w-full text-sm bg-white border border-stone-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 placeholder-stone-400 transition-all shadow-sm" type="text" value="Global"/>
<div className="absolute right-3 top-2.5 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon className="" icon="lucide:x-circle" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-3 pt-1">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-stone-600 ml-0.5">
                    Quantity
                  </label>
<span className="text-xs font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                    50
                  </span>
</div>
<div className="relative w-full h-1.5 bg-stone-200 rounded-full cursor-pointer group">
<div className="absolute top-0 left-0 h-full w-[40%] bg-stone-800 rounded-full group-hover:bg-stone-700 transition-colors"></div>
<div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border border-stone-300 shadow-sm rounded-full group-hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-stone-400 font-medium">
<span>1</span>
<span>100</span>
</div>
</div>
<div className="space-y-3 pt-2">
<label className="flex items-center gap-3 cursor-pointer group select-none">
<input checked="" className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 rounded bg-white flex items-center justify-center transition-all shadow-sm">
<svg className="opacity-0 transition-opacity" fill="none" height="10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="10">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-xs text-stone-600 group-hover:text-stone-900 transition-colors">
                    Include email addresses
                  </span>
</label>
</div>
<div className="pt-2">
<button className="w-full bg-stone-900 hover:bg-black text-white text-sm font-medium py-2.5 rounded-lg shadow-lg shadow-stone-900/5 transition-all active:scale-[0.99] flex justify-center items-center gap-2 group">
<iconify-icon className="text-stone-400 group-hover:text-white transition-colors" icon="lucide:users" width="14"></iconify-icon>
                  Generate Contacts
                </button>
</div>
</div>
</div>

<div className="lg:col-span-8 lg:sticky lg:top-28 self-start flex flex-col gap-4 lg:h-[calc(100vh-7rem)]">
<div className="flex items-center justify-between pb-2 border-b border-stone-200/60 h-[37px]">
<h2 className="text-lg font-semibold text-stone-900 tracking-tight">
                Output Preview
              </h2>
<div className="flex gap-2">
<button className="text-[11px] font-medium text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1.5 bg-white border border-stone-200 rounded-md px-2 py-1 shadow-sm">
<iconify-icon icon="lucide:download" width="12"></iconify-icon>
                  CSV
                </button>
</div>
</div>
<div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-1 min-h-[500px]">
<div className="overflow-auto flex-1">
<div className="hidden h-full flex flex-col items-center justify-center text-center px-8 py-14">
<div className="w-10 h-10 rounded-xl border border-stone-200 bg-stone-50 flex items-center justify-center mb-4">
<iconify-icon className="text-stone-500" icon="lucide:sparkles" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-stone-900">
                    Nothing generated yet
                  </h3>
<p className="mt-2 text-xs text-stone-500 max-w-sm">
                    Adjust your settings, then click
                    <span className="font-medium text-stone-700">Generate</span>
                    to preview the output here.
                  </p>
</div>
<div className="hidden px-5 py-4">
<div className="flex items-center justify-between mb-3">
<p className="text-xs font-medium text-stone-700">
                      Generating…
                    </p>
<span className="text-[11px] text-stone-400">Please wait</span>
</div>
<div className="space-y-2">
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
<div className="h-10 rounded-lg bg-stone-100 animate-pulse"></div>
</div>
<div className="mt-4 flex items-center gap-2 text-[11px] text-stone-400">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Building rows and formatting columns…
                  </div>
</div>
<table className="w-full text-left border-collapse min-w-[500px]">
<thead className="">
<tr className="border-b border-stone-100 bg-stone-50/50 text-xs text-stone-500 font-medium">
<th className="pl-5 pr-3 py-3 font-medium">Name</th>
<th className="px-3 py-3 font-medium">Role</th>
<th className="px-3 py-3 font-medium">Company/Entity</th>
<th className="pl-3 pr-5 py-3 font-medium text-right">
                        Location
                      </th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-stone-50">
<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-900 font-medium">
                        Eleanor Sterling
                      </td>
<td className="px-3 py-3.5 text-stone-500">Collector</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        Sterling Foundation
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        New York, NY
                      </td>
</tr>
<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-900 font-medium">
                        Marcus Chen
                      </td>
<td className="px-3 py-3.5 text-stone-500">Advisor</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        Chen Art Advisory
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        London, UK
                      </td>
</tr>
<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-900 font-medium">
                        Sarah Miller
                      </td>
<td className="px-3 py-3.5 text-stone-500">Curator</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        Modern Art Institute
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        Berlin, DE
                      </td>
</tr>
<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-900 font-medium">
                        James Thorne
                      </td>
<td className="px-3 py-3.5 text-stone-500">Dealer</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        Thorne Gallery
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        Los Angeles, CA
                      </td>
</tr>
<tr className="group hover:bg-stone-50 transition-colors">
<td className="pl-5 pr-3 py-3.5 text-stone-900 font-medium">
                        Amara Patel
                      </td>
<td className="px-3 py-3.5 text-stone-500">Collector</td>
<td className="px-3 py-3.5 text-stone-500 text-xs">
                        Private Collection
                      </td>
<td className="pl-3 pr-5 py-3.5 text-stone-700 font-mono text-xs text-right tracking-tight">
                        Mumbai, IN
                      </td>
</tr>
</tbody>
</table>
</div>
<div className="border-t border-stone-100 p-3 bg-stone-50/30 flex items-center justify-between text-xs text-stone-500">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Ready — 5 of 50 generated
                </span>
<div className="flex gap-1">
<button className="w-6 h-6 flex items-center justify-center rounded hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-900 disabled:opacity-50">
<iconify-icon icon="lucide:chevron-left" width="14"></iconify-icon>
</button>
<button className="w-6 h-6 flex items-center justify-center rounded hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-900">
<iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
