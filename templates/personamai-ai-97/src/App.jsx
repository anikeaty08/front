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
      

<nav className="w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-green-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-lime-500/20">
<i className="w-5 h-5 fill-current stroke-[1.5]" data-lucide="leaf"></i>
</div>
<div className="flex flex-col">
<span className="text-xl font-serif-custom font-semibold text-zinc-900 tracking-tight leading-none">PersonaMail</span>
<span className="text-xs text-zinc-500 font-medium mt-0.5">Eco-Friendly Outreach</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors duration-200" href="#">Dashboard</a>
<a className="text-zinc-900" href="#">Templates</a>
<a className="hover:text-zinc-900 transition-colors duration-200" href="#">Analytics</a>
</div>

<div className="flex items-center">
<div className="bg-lime-50 border border-lime-200 px-3 py-1.5 rounded-full flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.6)]"></div>
<span className="text-xs font-medium text-lime-700 tracking-wide">System Active</span>
</div>
</div>
</div>
</nav>

<main className="flex-grow max-w-7xl mx-auto px-6 py-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 flex flex-col gap-6">

<section className="bg-white border border-zinc-200 rounded-2xl p-1 overflow-hidden shadow-sm">
<div className="p-6 md:p-8">
<h2 className="text-2xl font-serif-custom font-semibold text-zinc-900 mb-6 tracking-tight">Import Your Leads</h2>

<div className="border-2 border-dashed border-zinc-200 bg-zinc-50/50 rounded-xl p-10 flex flex-col items-center justify-center text-center group hover:border-lime-400 hover:bg-lime-50/10 transition-colors cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 border border-zinc-100 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5 text-lime-600" data-lucide="upload-cloud"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-1">Drop your CSV here</h3>
<p className="text-zinc-500 text-sm mb-8">or click to browse your files</p>
<div className="flex items-center gap-4 w-full justify-center">
<button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2.5 px-5 rounded-lg text-sm flex items-center gap-2 transition-all shadow-lg shadow-lime-500/20 hover:shadow-lime-500/30 transform active:scale-95">
<i className="w-4 h-4" data-lucide="file-spreadsheet"></i>
                                Select CSV File
                            </button>
<button className="bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-600 font-medium py-2.5 px-5 rounded-lg text-sm flex items-center gap-2 transition-all active:scale-95">
<i className="w-4 h-4" data-lucide="download"></i>
                                Download Sample
                            </button>
</div>
</div>

<div className="relative py-8 flex items-center justify-center">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-zinc-100"></div>
</div>
<span className="relative bg-white px-3 text-sm text-zinc-400 font-medium">or</span>
</div>

<button className="w-full py-3.5 rounded-xl border border-zinc-200 hover:border-lime-300 hover:bg-lime-50/30 text-zinc-600 font-medium text-sm flex items-center justify-center gap-2 transition-all group">
<i className="w-4 h-4 text-zinc-400 group-hover:text-lime-600 transition-colors" data-lucide="plus"></i>
                        Add Lead Manually
                    </button>
</div>
</section>

<section className="bg-white border border-zinc-200 rounded-2xl flex-grow min-h-[400px] shadow-sm">
<div className="p-6 md:p-8 h-full flex flex-col">
<div className="mb-6">
<h2 className="text-2xl font-serif-custom font-semibold text-zinc-900 tracking-tight mb-1">Your Leads</h2>
<p className="text-zinc-500 text-sm">0 total • 0 pending • 0 completed</p>
</div>

<div className="flex-grow flex flex-col items-center justify-center text-center py-12">
<div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 border border-zinc-100">
<i className="w-8 h-8 text-zinc-300 stroke-1" data-lucide="users"></i>
</div>
<h3 className="text-lg font-serif-custom font-semibold text-zinc-900 mb-2">No leads yet</h3>
<p className="text-zinc-500 text-sm max-w-sm">Upload a CSV or add leads manually to start your eco-friendly campaign.</p>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<button className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500 text-white font-semibold py-4 rounded-xl shadow-xl shadow-lime-500/20 border border-lime-400/20 flex items-center justify-center gap-2.5 transition-all transform active:scale-[0.98] group">
<i className="w-5 h-5 fill-lime-100/30" data-lucide="zap"></i>
<span className="text-lg">Generate 0 Emails</span>
</button>

<section className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
<div className="flex items-start gap-4 mb-6">
<div className="w-10 h-10 rounded-lg bg-lime-50 border border-lime-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-lime-600" data-lucide="sliders"></i>
</div>
<div>
<h3 className="text-lg font-serif-custom font-semibold text-zinc-900">Settings</h3>
<p className="text-xs text-zinc-500">Campaign configuration</p>
</div>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="building"></i>
                            Company Name
                        </label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/10 transition-all" placeholder="Green Energy Co." type="text"/>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="align-left"></i>
                            Company Description
                        </label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/10 transition-all resize-none" placeholder="Sustainable solutions for modern cities..." rows="3"></textarea>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="link"></i>
                            CTA Link
                        </label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/10 transition-all" placeholder="https://..." type="text"/>
</div>
</form>
</section>

<section className="bg-gradient-to-br from-white to-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-lg font-serif-custom font-semibold text-zinc-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-lime-600" data-lucide="sprout"></i>
                    Green Tips
                </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 shrink-0"></div>
<p className="text-sm text-zinc-600 leading-relaxed">Personalize your intro to increase engagement rates.</p>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 shrink-0"></div>
<p className="text-sm text-zinc-600 leading-relaxed">Keep subject lines concise and relevant to the recipient.</p>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 shrink-0"></div>
<p className="text-sm text-zinc-600 leading-relaxed">A/B test your CTA links to optimize conversion.</p>
</li>
</ul>
</section>
</div>
</main>

<footer className="w-full py-8 border-t border-zinc-200 mt-auto bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-zinc-500">© 2024 PersonaMail. Growing connections sustainably.</p>
</div>
</footer>



    </>
  );
}
