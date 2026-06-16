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
      

<aside className="w-64 bg-[#FAFAFA] border-r border-gray-200/80 flex flex-col justify-between hidden md:flex shrink-0">
<div className="p-5 flex flex-col gap-8">

<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm">
<span className="font-medium text-xs tracking-tight">ID</span>
</div>
<span className="font-medium text-sm tracking-tight">IDEAS</span>
</div>
<div className="flex flex-col gap-6">

<button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white transition-colors rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 font-medium text-sm shadow-sm">
<iconify-icon icon="lucide:plus-circle" width="18"></iconify-icon>
                    New idea
                </button>

<nav className="flex flex-col gap-1.5">
<a className="flex items-center gap-3 px-3 py-2 bg-white shadow-sm border border-gray-200/80 rounded-lg text-gray-900 font-medium text-sm transition-all" href="#">
<iconify-icon className="text-gray-500" icon="lucide:home" width="18"></iconify-icon>
                        Home
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 font-medium text-sm transition-all" href="#">
<iconify-icon icon="lucide:lightbulb" width="18"></iconify-icon>
                        My ideas
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 font-medium text-sm transition-all" href="#">
<iconify-icon icon="lucide:sparkles" width="18"></iconify-icon>
                        Get ideas
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 font-medium text-sm transition-all" href="#">
<iconify-icon icon="lucide:bookmark" width="18"></iconify-icon>
                        Saved
                    </a>
</nav>
</div>
</div>

<div className="p-6 flex flex-col gap-2 border-t border-gray-200/60 mt-auto">
<div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
<a className="hover:text-gray-600 transition-colors" href="#">Settings</a>
<a className="hover:text-gray-600 transition-colors" href="#">Help</a>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto w-full">

<div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200/80 bg-white">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<span className="font-medium text-xs tracking-tight">ID</span>
</div>
<span className="font-medium text-sm tracking-tight">IDEAS</span>
</div>
<button className="text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
<div className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">

<section className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
<header className="flex flex-col gap-2">
<span className="text-sm font-medium text-gray-500">Good afternoon</span>
<h1 className="text-3xl font-medium tracking-tight text-gray-900">Turn an idea into something real</h1>
</header>
<div className="flex flex-col gap-6">

<div className="flex flex-col gap-3 relative group">
<textarea className="w-full min-h-[140px] rounded-xl border border-gray-200/80 bg-white p-6 text-lg text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-700/50 focus:ring-4 focus:ring-emerald-700/10 outline-none resize-none transition-all" placeholder="Type your idea here..."></textarea>
<div className="flex justify-between items-center px-2">
<span className="text-xs font-medium text-gray-400">( rough is fine, we'll shape it together )</span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
<button className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white px-7 py-2.5 rounded-lg font-medium text-sm shadow-sm transition-all flex items-center justify-center gap-2">
                            Start this idea
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white border border-gray-200/80 hover:border-gray-300 hover:bg-gray-50 text-gray-700 px-7 py-2.5 rounded-lg font-medium text-sm shadow-sm transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
                            Give me an idea
                        </button>
</div>
</div>
</section>

<section className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-sm relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-800"></div>
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-gray-400" icon="lucide:history" width="16"></iconify-icon>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pick up where you left off</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900">Untitled idea</h3>
<span className="text-sm text-gray-500">Next step: define the problem clearly</span>
</div>
<button className="w-full sm:w-auto bg-white border border-gray-200/80 hover:bg-gray-50 text-gray-900 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm">
                    Continue shaping
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</section>

<section className="flex flex-col gap-6">
<h2 className="text-lg font-medium tracking-tight text-gray-900 px-1">Where your ideas are</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="bg-white border border-gray-200/80 rounded-xl p-5 flex flex-col gap-5 shadow-sm">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-medium text-gray-900 text-sm tracking-tight">Early stage</span>
<span className="text-xs font-medium text-gray-900 bg-gray-100 px-2 py-0.5 rounded-full">4</span>
</div>
<span className="text-xs text-gray-500">Shaping the concept</span>
</div>
<div className="flex flex-col gap-2 mt-auto pt-2">
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-gray-900 h-full rounded-full" style={{width: '60%'}}></div>
</div>
<div className="flex justify-between items-center text-xs text-gray-400 font-medium">
<span>Capacity</span>
<span>60%</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200/80 rounded-xl p-5 flex flex-col gap-5 shadow-sm">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-medium text-gray-900 text-sm tracking-tight">Getting clearer</span>
<span className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">0</span>
</div>
<span className="text-xs text-gray-500">Problem defined</span>
</div>
<div className="flex flex-col gap-2 mt-auto pt-2">
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-gray-300 h-full rounded-full" style={{width: '0%'}}></div>
</div>
<div className="flex justify-between items-center text-xs text-gray-400 font-medium">
<span>Capacity</span>
<span>0%</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200/80 rounded-xl p-5 flex flex-col gap-5 shadow-sm">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-medium text-gray-900 text-sm tracking-tight">Ready soon</span>
<span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">1</span>
</div>
<span className="text-xs text-gray-500">Ready to test</span>
</div>
<div className="flex flex-col gap-2 mt-auto pt-2">
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-700 h-full rounded-full" style={{width: '25%'}}></div>
</div>
<div className="flex justify-between items-center text-xs text-gray-400 font-medium">
<span>Capacity</span>
<span>25%</span>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6 pb-16">
<header className="flex items-center justify-between px-1">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Your ideas</h2>
<a className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1" href="#">
                        View all
                        <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="group bg-white border border-gray-200/80 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col gap-5 shadow-sm cursor-pointer relative">
<div className="flex items-start justify-between">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                Problem defined
                            </span>
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1.5">
<h3 className="font-medium text-gray-900 text-lg tracking-tight">Ceramic Repaint Academy</h3>
<p className="text-sm text-gray-500 line-clamp-2">A platform teaching automotive detailing shops how to properly apply and maintain ceramic coatings...</p>
</div>
<div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
<span className="text-xs text-gray-400 font-medium">Updated 2 days ago</span>
<iconify-icon className="text-gray-300 group-hover:text-emerald-700 transition-colors" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="group bg-white border border-gray-200/80 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col gap-5 shadow-sm cursor-pointer relative">
<div className="flex items-start justify-between">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                Shaping it
                            </span>
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1.5">
<h3 className="font-medium text-gray-900 text-lg tracking-tight">Auto-Sponsor Matcher</h3>
<p className="text-sm text-gray-500 line-clamp-2">Connecting local grassroots racing teams with potential local business sponsors through automated outreach.</p>
</div>
<div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
<span className="text-xs text-gray-400 font-medium">Updated 5 days ago</span>
<iconify-icon className="text-gray-300 group-hover:text-emerald-700 transition-colors" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="group bg-white border border-gray-200/80 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col gap-5 shadow-sm cursor-pointer relative">
<div className="flex items-start justify-between">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                Almost ready
                            </span>
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1.5">
<h3 className="font-medium text-gray-400 text-lg tracking-tight italic">Untitled idea</h3>
<p className="text-sm text-gray-500 line-clamp-2">No description provided yet. Click to continue defining the core problem and solution.</p>
</div>
<div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
<span className="text-xs text-gray-400 font-medium">Updated just now</span>
<iconify-icon className="text-gray-300 group-hover:text-emerald-700 transition-colors" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="group bg-transparent border border-dashed border-gray-300 rounded-xl p-6 hover:border-emerald-600 hover:bg-emerald-50/50 transition-all duration-200 flex flex-col items-center justify-center gap-3 cursor-pointer min-h-[180px]">
<div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-emerald-100 flex items-center justify-center text-gray-500 group-hover:text-emerald-700 transition-colors">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-600 group-hover:text-emerald-800">Add a new idea</span>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
