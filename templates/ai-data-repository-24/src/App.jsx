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
      

<header className="bg-white border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-bold tracking-tighter text-lg">S</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg">SIMAD AI</span>
</div>
<nav className="hidden md:flex space-x-8 text-sm font-medium">
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="text-indigo-600" href="#">Datasets</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Models</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Publications</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">About</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<div className="w-8 h-8 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</header>

<div className="bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
<nav aria-label="Breadcrumb" className="flex mb-4">
<ol className="flex items-center space-x-2">
<li><a className="text-slate-400 hover:text-slate-500 transition-colors" href="#"><span className="iconify" data-icon="lucide:home" data-strokeWidth="1.5" data-width="16"></span></a></li>
<li className="text-slate-300">/</li>
<li><a aria-current="page" className="text-sm font-medium text-indigo-600" href="#">Datasets</a></li>
</ol>
</nav>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Data Repository</h1>
<p className="mt-2 text-base text-slate-500 max-w-2xl">Access curated datasets for machine learning research, covering diverse domains from NLP to computer vision.</p>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-slate-200 pb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">All Datasets</h2>
<div className="flex items-center gap-3">
<div className="relative">
<span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
</span>
<input className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none w-64 bg-white text-slate-700 placeholder:text-slate-400 shadow-sm transition-all" placeholder="Search datasets..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 shadow-sm transition-colors">
<span className="iconify" data-icon="lucide:filter" data-strokeWidth="1.5" data-width="16"></span>
                    Filters
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="dataset-card bg-white border border-slate-200 rounded-xl flex flex-col h-full overflow-hidden shadow-sm">
<div className="p-6 flex flex-col h-full">

<div className="mb-4">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center border border-indigo-100">
<span className="iconify" data-icon="lucide:database" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>

<h3 className="text-base font-bold text-slate-900 leading-snug mb-2">Somalia Mortality Risk Factors &amp; Prediction Dataset</h3>
<p className="text-sm text-slate-500 line-clamp-2 flex-grow mb-6">Aggregated multi-regional mortality statistics and risk factors for humanitarian predictive modeling.</p>

<div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase tracking-wide border border-slate-200" style={{fontSize: '10px'}}>CSV</span>
</div>
<div className="flex items-center gap-1">
<span className="iconify" data-icon="lucide:hard-drive" data-strokeWidth="1.5" data-width="12"></span>
<span>45 MB</span>
</div>
<div className="flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="12"></span>
<span>Oct 2023</span>
</div>
</div>

<div className="mt-auto grid grid-cols-2 gap-3">
<button className="flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition-colors">
                            View Details
                        </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors shadow-sm">
<span className="iconify" data-icon="lucide:download" data-strokeWidth="1.5" data-width="14"></span>
                            Download
                        </button>
</div>
</div>
</div>

<div className="dataset-card bg-white border border-slate-200 rounded-xl flex flex-col h-full overflow-hidden shadow-sm">
<div className="p-6 flex flex-col h-full">

<div className="mb-4">
<div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center border border-sky-100">
<span className="iconify" data-icon="lucide:message-square-text" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>

<h3 className="text-base font-bold text-slate-900 leading-snug mb-2">Somali Twitter Hate Speech Detection Dataset (2019–2025)</h3>
<p className="text-sm text-slate-500 line-clamp-2 flex-grow mb-6">Longitudinal corpus containing annotated tweets for sentiment analysis and classification.</p>

<div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase tracking-wide border border-slate-200" style={{fontSize: '10px'}}>JSONL</span>
</div>
<div className="flex items-center gap-1">
<span className="iconify" data-icon="lucide:hard-drive" data-strokeWidth="1.5" data-width="12"></span>
<span>1.2 GB</span>
</div>
<div className="flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="12"></span>
<span>Jan 2024</span>
</div>
</div>

<div className="mt-auto grid grid-cols-2 gap-3">
<button className="flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition-colors">
                            View Details
                        </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors shadow-sm">
<span className="iconify" data-icon="lucide:download" data-strokeWidth="1.5" data-width="14"></span>
                            Download
                        </button>
</div>
</div>
</div>

<div className="dataset-card bg-white border border-slate-200 rounded-xl flex flex-col h-full overflow-hidden shadow-sm">
<div className="p-6 flex flex-col h-full">

<div className="mb-4">
<div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center border border-amber-100">
<span className="iconify" data-icon="lucide:clipboard-list" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>

<h3 className="text-base font-bold text-slate-900 leading-snug mb-2">Intelligent SMART Survey Dataset for Somalia Mortality</h3>
<p className="text-sm text-slate-500 line-clamp-2 flex-grow mb-6">Standardized survey data optimized for machine learning applications in mortality estimation.</p>

<div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase tracking-wide border border-slate-200" style={{fontSize: '10px'}}>XLSX</span>
</div>
<div className="flex items-center gap-1">
<span className="iconify" data-icon="lucide:hard-drive" data-strokeWidth="1.5" data-width="12"></span>
<span>12 MB</span>
</div>
<div className="flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="12"></span>
<span>Dec 2023</span>
</div>
</div>

<div className="mt-auto grid grid-cols-2 gap-3">
<button className="flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition-colors">
                            View Details
                        </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors shadow-sm">
<span className="iconify" data-icon="lucide:download" data-strokeWidth="1.5" data-width="14"></span>
                            Download
                        </button>
</div>
</div>
</div>
</div>

<div className="mt-12 flex justify-center">
<nav className="flex items-center gap-2">
<a className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors" href="#">Previous</a>
<a className="px-3 py-2 bg-indigo-50 border border-indigo-100 rounded-lg text-sm font-medium text-indigo-600" href="#">1</a>
<a className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 transition-colors" href="#">2</a>
<a className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 transition-colors" href="#">3</a>
<span className="text-slate-400">...</span>
<a className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 transition-colors" href="#">Next</a>
</nav>
</div>
</main>

<footer className="bg-white border-t border-slate-200 py-8 mt-12">
<div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
            © 2024 SIMAD AI Institute. All rights reserved.
        </div>
</footer>

    </>
  );
}
