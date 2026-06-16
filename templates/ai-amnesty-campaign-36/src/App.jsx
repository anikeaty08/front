import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-slate-200 sticky top-0 z-30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 border border-blue-100">
<i className="w-6 h-6" data-lucide="shield"></i>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">AI Amnesty Campaign Generator</h1>
<p className="text-sm text-slate-500">Create customized internal marketing materials</p>
</div>
</div>
</header>

<main className="flex-grow w-full max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 space-y-6">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<div className="p-5 sm:p-6 space-y-6">

<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-slate-700" data-lucide="eye"></i>
<h2 className="text-lg font-semibold tracking-tight">Design Options</h2>
</div>

<div className="space-y-3">
<label className="block text-sm font-medium text-slate-700">Design Concept</label>
<div className="grid grid-cols-2 gap-3">

<button className="text-left p-3 rounded-lg border bg-blue-600 border-blue-600 ring-2 ring-blue-100 ring-offset-1 transition-all">
<div className="text-white font-semibold text-sm">Concept A</div>
<div className="text-blue-100 text-xs mt-0.5">Direct Approach</div>
<div className="text-blue-200 text-xs mt-1">"AI Amnesty"</div>
</button>

<button className="text-left p-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all">
<div className="text-slate-900 font-medium text-sm">Concept B</div>
<div className="text-slate-500 text-xs mt-0.5">Softer Approach</div>
<div className="text-slate-400 text-xs mt-1">"What AI tools..."</div>
</button>
</div>
</div>
<hr className="border-slate-100"/>

<div className="flex items-center gap-2 pt-2">
<i className="w-4 h-4 text-slate-700" data-lucide="sparkles"></i>
<h3 className="text-base font-semibold">Brand Customization</h3>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700">Organization Logo</label>
<button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-slate-200 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
<i className="w-4 h-4" data-lucide="upload"></i>
                                Upload Logo
                            </button>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700">Organization Name</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm" placeholder="Your Company Name" type="text"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700">Contact URL or Email</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm" type="text" value="ai-amnesty@company.com"/>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700">Accent Color</label>
<div className="flex gap-3">
<div className="w-12 h-10 rounded bg-[#00A4BD] shadow-sm border border-slate-200 shrink-0"></div>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 uppercase focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm" type="text" value="#00A4BD"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700">Campaign Dates</label>
<div className="grid grid-cols-2 gap-3">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-4 w-4 text-slate-400" data-lucide="calendar"></i>
</div>
<input className="block w-full pl-9 px-3 py-2 rounded-md border border-slate-200 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm" placeholder="Start" type="text"/>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-4 w-4 text-slate-400" data-lucide="calendar"></i>
</div>
<input className="block w-full pl-9 px-3 py-2 rounded-md border border-slate-200 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm" placeholder="End" type="text"/>
</div>
</div>
</div>

<div className="flex items-center justify-between py-2">
<span className="text-sm font-medium text-slate-700">Show QR Code</span>

<button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-blue-600" role="switch">
<span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>

<button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md shadow-sm transition-colors text-sm">
<i className="w-4 h-4" data-lucide="download"></i>
                            Download PNG (1920x1080)
                        </button>
</div>
</div>

<div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
<h3 className="text-blue-700 font-semibold mb-2 text-base">About This Tool</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        This generator creates customizable AI Amnesty campaign materials based on Just Culture principles. The "watching eyes" imagery is designed to encourage honest disclosure while maintaining a supportive, non-punitive tone.
                    </p>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-4">

<div className="flex justify-between items-end px-1">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Live Preview</h2>
<span className="text-sm text-slate-400">Concept A • 1920×1080</span>
</div>

<div className="w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 aspect-video relative group">

<img alt="Eyes background" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1534260164206-2a3a4a72891d?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>

<div className="absolute inset-0 flex items-center pl-16 sm:pl-24 pr-16">
<div className="max-w-xl space-y-6">

<h1 className="text-6xl font-bold text-white tracking-tighter">AI Amnesty</h1>

<div className="space-y-3">
<p className="text-[#00A4BD] text-lg font-bold">Your productivity. Our protection.</p>
<p className="text-slate-200 text-sm font-medium leading-relaxed max-w-md">
                                    Using AI tools at work? Tell us which and we'll help you use them safely.
                                </p>
</div>

<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded px-3 py-1.5 mt-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#00A4BD]"></div>
<span className="text-[10px] font-medium text-white uppercase tracking-wider">Confidential. No blame. We'll help.</span>
</div>
</div>
</div>

<div className="absolute bottom-12 right-12 flex items-center gap-4">
<div className="bg-white p-1 rounded w-12 h-12 flex items-center justify-center">

<div className="w-10 h-10 border-2 border-slate-900 border-dashed opacity-50"></div>
</div>
<span className="text-white/60 text-xs tracking-wider uppercase">Campaign dates TBC</span>
</div>
</div>

<p className="text-center text-slate-400 text-sm mt-2">
                    Customize the options on the left and download your personalized screensaver
                </p>
</div>
</div>
</main>

<footer className="mt-auto py-8 text-center border-t border-slate-200 bg-white">
<p className="text-sm text-slate-500">
            AI Amnesty Campaign Generator • Built on Just Culture principles
        </p>
</footer>


    </>
  );
}
