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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-8 h-8 rounded-md bg-[#ba0c2f] flex items-center justify-center text-white font-semibold tracking-tighter text-sm">
                    MR
                </div>
<span className="font-medium tracking-tight text-base">MeSH Recommender</span>
</div>
<nav className="hidden sm:flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-[#ba0c2f] transition-colors" href="#about">About</a>
<a className="hover:text-[#ba0c2f] transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-[#ba0c2f] transition-colors" href="#how-to-use">How to Use</a>
</nav>
</div>
</header>
<main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12 sm:py-20 space-y-20 sm:space-y-32">

<section className="space-y-10">
<div className="text-center space-y-4 max-w-2xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007a86]/10 border border-[#007a86]/20 text-xs font-medium text-[#007a86] mb-4">
<iconify-icon className="text-[#007a86]/70" icon="solar:tag-linear"></iconify-icon>
                    Updated for 2025 MeSH Terms
                </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-slate-900">
                    MeSH Recommender 2025
                </h1>
<p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
                    Upload your PubMed metadata to generate data-driven recommendations for the National Library of Medicine's Medical Subject Headings.
                </p>
</div>

<div className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center space-y-6">
<div className="w-16 h-16 rounded-full bg-[#ba0c2f]/5 border border-[#ba0c2f]/10 flex items-center justify-center mx-auto">
<iconify-icon className="text-2xl text-[#ba0c2f]" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-base font-medium tracking-tight text-slate-900">Upload PubMed Data</h3>
<p className="text-sm text-slate-500 font-light">Select the .txt file downloaded from your PubMed search.</p>
</div>
<div className="flex items-center justify-center gap-4">
<label className="cursor-pointer inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#ba0c2f] hover:border-[#ba0c2f]/30 transition-all shadow-sm">
<iconify-icon className="mr-2 text-slate-400 group-hover:text-[#ba0c2f]" icon="solar:document-add-linear"></iconify-icon>
                        Choose File
                        <input accept=".txt" className="hidden" type="file"/>
</label>
<button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#ba0c2f] text-white text-sm font-medium hover:bg-[#9a0a27] transition-all shadow-sm shadow-[#ba0c2f]/20">
                        Analyze
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="grid sm:grid-cols-12 gap-10 items-start" id="about">
<div className="sm:col-span-4">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 sticky top-24">
                    About the Program
                </h2>
</div>
<div className="sm:col-span-8 space-y-6 text-base text-slate-600 font-light leading-relaxed">
<p>
                    This program analyzes author keyword metadata from a PubMed search. The goal is to create a justification for recommending specific terms to be added to the National Library of Medicine's Medical Subject Headings (MeSH).
                </p>
<div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm">
<h3 className="text-sm font-medium text-slate-900 tracking-tight uppercase tracking-widest mb-4">Output Lists Generated</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ba0c2f] mt-1 flex-shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Author Keywords from Most to Least Common (Author Keywords without MeSH or MeSH Entry terms).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ba0c2f] mt-1 flex-shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Author Keywords without MeSH, MeSH Entry Terms, Supplementary Concepts, or Supplementary Concept Terms.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#ba0c2f] mt-1 flex-shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Author Keywords that are also MeSH Supplementary Concepts.</span>
</li>
</ul>
</div>
<p>
                    The program compares Author Keywords found in PubMed metadata to the 2025 MeSH terms. Each keyword is followed by a number, which represents how many times that keyword was used in PubMed records.
                </p>
</div>
</section>

<section className="grid sm:grid-cols-12 gap-10 items-start" id="use-cases">
<div className="sm:col-span-4 space-y-3">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 sticky top-24">
                    Use Cases
                </h2>
<p className="text-sm text-slate-500 font-light">
                    Analyze Author Keyword Metadata from PubMed to achieve the following outcomes.
                </p>
</div>
<div className="sm:col-span-8">
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
<details className="group" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-800 hover:bg-[#ba0c2f]/5 transition-colors text-sm sm:text-base">
<span className="flex items-center gap-3">
<iconify-icon className="text-[#ba0c2f] text-lg" icon="solar:bookmark-circle-linear"></iconify-icon>
                                Justify recommending a specific author keyword to be added to MeSH.
                            </span>
<span className="transition-transform duration-200 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-2 text-slate-500 text-sm font-light leading-relaxed pl-14">
                            Identify high-frequency author keywords that currently lack a corresponding MeSH term, providing quantitative backing for inclusion proposals to the National Library of Medicine.
                        </div>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-800 hover:bg-[#ba0c2f]/5 transition-colors text-sm sm:text-base">
<span className="flex items-center gap-3">
<iconify-icon className="text-[#ba0c2f] text-lg" icon="solar:link-circle-linear"></iconify-icon>
                                Justify recommending an author keyword to be added as a MeSH Entry term.
                            </span>
<span className="transition-transform duration-200 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-2 text-slate-500 text-sm font-light leading-relaxed pl-14">
                            Map common author phrasing to existing MeSH terminology. When an author concept matches an existing MeSH term conceptually but differs linguistically, use the frequency data to propose it as a new Entry Term.
                        </div>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-800 hover:bg-[#ba0c2f]/5 transition-colors text-sm sm:text-base">
<span className="flex items-center gap-3">
<iconify-icon className="text-[#ba0c2f] text-lg" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
                                Generate ideas for keywords in evidence synthesis searches.
                            </span>
<span className="transition-transform duration-200 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-2 text-slate-500 text-sm font-light leading-relaxed pl-14">
                            Discover alternative vocabulary and nuanced phrasing utilized by authors in your specific domain to broaden and strengthen systematic review search strategies.
                        </div>
</details>
</div>
</div>
</section>

<section className="space-y-10" id="how-to-use">
<div className="space-y-3">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">
                    How to Use
                </h2>
<p className="text-base text-slate-500 font-light max-w-2xl">
                    Follow these steps to extract your citation data from PubMed and run the analysis.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
<div className="flex items-start justify-between">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ba0c2f]/10 text-[#ba0c2f] font-medium text-xs border border-[#ba0c2f]/20">1</div>
</div>
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Navigate to PubMed</h3>
<p className="text-xs text-slate-500 font-light">Visit <a className="text-[#007a86] underline decoration-[#007a86]/30 underline-offset-2 hover:decoration-[#007a86]" href="#">PubMed</a> to begin.</p>
<div className="aspect-video bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-300">
<iconify-icon className="text-2xl mb-2" icon="solar:gallery-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium">Screenshot 1</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
<div className="flex items-start justify-between">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ba0c2f]/10 text-[#ba0c2f] font-medium text-xs border border-[#ba0c2f]/20">2</div>
</div>
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Create a Search</h3>
<p className="text-xs text-slate-500 font-light">Run a search that generates less than 10,000 results.</p>
<div className="aspect-video bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-300">
<iconify-icon className="text-2xl mb-2" icon="solar:gallery-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium">Screenshot 2</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
<div className="flex items-start justify-between">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ba0c2f]/10 text-[#ba0c2f] font-medium text-xs border border-[#ba0c2f]/20">3</div>
</div>
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Click 'Save'</h3>
<p className="text-xs text-slate-500 font-light">Click the Save button located under the search box.</p>
<div className="aspect-video bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-300">
<iconify-icon className="text-2xl mb-2" icon="solar:gallery-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium">Screenshot 3</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
<div className="flex items-start justify-between">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ba0c2f]/10 text-[#ba0c2f] font-medium text-xs border border-[#ba0c2f]/20">4</div>
</div>
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Select 'All results'</h3>
<p className="text-xs text-slate-500 font-light">In the dropdown menu for Selection, pick 'All results'.</p>
<div className="aspect-video bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-300">
<iconify-icon className="text-2xl mb-2" icon="solar:gallery-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium">Screenshot 4</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
<div className="flex items-start justify-between">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ba0c2f]/10 text-[#ba0c2f] font-medium text-xs border border-[#ba0c2f]/20">5</div>
</div>
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Set Format to 'PubMed'</h3>
<p className="text-xs text-slate-500 font-light">Ensure the Format dropdown is explicitly set to 'PubMed'.</p>
<div className="aspect-video bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-300">
<iconify-icon className="text-2xl mb-2" icon="solar:gallery-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium">Screenshot 5</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
<div className="flex items-start justify-between">
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ba0c2f]/10 text-[#ba0c2f] font-medium text-xs border border-[#ba0c2f]/20">6</div>
</div>
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Create File</h3>
<p className="text-xs text-slate-500 font-light">Click 'Create file' to start the download to your computer.</p>
<div className="aspect-video bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-300">
<iconify-icon className="text-2xl mb-2" icon="solar:gallery-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium">Screenshot 6</span>
</div>
</div>
</div>

<div className="mt-8 bg-[#ba0c2f] rounded-xl p-6 sm:p-8 text-center sm:text-left sm:flex items-center justify-between shadow-lg shadow-[#ba0c2f]/20">
<div className="space-y-2 mb-6 sm:mb-0">
<div className="text-white/70 text-xs font-medium tracking-widest uppercase">Final Step</div>
<h3 className="text-lg font-medium text-white tracking-tight">Ready to Analyze?</h3>
<p className="text-sm text-white/90 font-light">Upload the downloaded file at the top of this page and click 'Analyze'.</p>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#ba0c2f] text-sm font-medium hover:bg-slate-50 transition-colors" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    Go to Upload
                    <iconify-icon className="ml-2" icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white mt-12">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400">
<p>© 2025 MeSH Recommender.</p>
<p>Utilizing 2025 MeSH vocabulary standards.</p>
</div>
</footer>

    </>
  );
}
