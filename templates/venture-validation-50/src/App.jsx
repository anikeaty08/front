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



        // Icons
        lucide.createIcons();

        function generateResults() {
            const btn = document.getElementById('generate-btn');
            const btnText = document.getElementById('btn-text');
            const results = document.getElementById('ai-results');
            const mainContent = document.getElementById('main-content');

            // Loading State
            btn.disabled = true;
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            const originalIcon = btn.querySelector('svg');
            originalIcon.style.display = 'none'; // Hide sparkles
            
            // Create spinner icon
            const spinner = document.createElement('i');
            spinner.setAttribute('data-lucide', 'loader-2');
            spinner.classList.add('w-4', 'h-4', 'animate-spin');
            btn.insertBefore(spinner, btnText);
            lucide.createIcons();

            btnText.innerHTML = "Generating<span class='loading-dots'></span>";

            // Simulate API Call
            setTimeout(() => {
                // Reset Button
                btn.disabled = false;
                btn.classList.remove('opacity-80', 'cursor-not-allowed');
                spinner.remove();
                originalIcon.style.display = 'block';
                btnText.innerText = "Regenerate Analysis";
                
                // Change button style to secondary to indicate action is done
                btn.classList.remove('bg-[#1A56DB]', 'text-white', 'shadow-blue-900/20');
                btn.classList.add('bg-[#151827]', 'border', 'border-[#323644]', 'text-[#D1D5DB]', 'hover:text-white');

                // Show Results
                results.classList.remove('hidden');
                results.classList.add('animate-fade-in');

                // Scroll to results
                setTimeout(() => {
                    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);

            }, 1500);
        }
    
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
      

<aside className="w-[280px] bg-[#151827] border-r border-[#323644] flex flex-col h-full shrink-0 z-20">

<div className="h-[72px] flex items-center px-6 border-b border-[#323644]/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-[#151827] rounded-full"></div>
</div>
<span className="font-display font-bold text-lg tracking-tight">Stryber</span>
</div>
</div>

<nav className="flex-1 px-4 py-6 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-[#9CA3AF] hover:text-white hover:bg-[#1A1E2F]/50 rounded-lg transition-all" href="#">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="text-[15px] font-medium">Dashboard</span>
</a>
<div className="px-3 py-2 text-xs font-semibold text-[#6B7280] uppercase tracking-wider mt-4 mb-2">Current Venture</div>
<a className="flex items-center gap-3 px-3 py-2.5 bg-[#1A1E2F] text-white rounded-lg border border-[#323644] group transition-all" href="#">
<i className="w-5 h-5 text-blue-500" data-lucide="crosshair"></i>
<span className="text-[15px] font-medium">Validation</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-[#9CA3AF] hover:text-white hover:bg-[#1A1E2F]/50 rounded-lg transition-all" href="#">
<i className="w-5 h-5" data-lucide="files"></i>
<span className="text-[15px] font-medium">Data Room</span>
</a>
</nav>

<div className="p-4 border-t border-[#323644]">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#1A1E2F] cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-semibold border border-blue-500/30">
                    MH
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Mahmoud Hijazi</p>
<p className="text-xs text-[#9CA3AF] truncate">View Profile</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[#1A1E2F]">

<header className="h-[72px] bg-[#151827] border-b border-[#323644] flex items-center justify-between px-8 shrink-0">
<div className="flex items-center gap-3">
<div className="bg-[#1A1E2F] border border-[#323644] rounded-lg p-1.5">
<i className="w-4 h-4 text-blue-400" data-lucide="folder-open"></i>
</div>
<div className="h-4 w-[1px] bg-[#323644]"></div>
<span className="text-[15px] text-[#9CA3AF]">Ventures</span>
<i className="w-4 h-4 text-[#6B7280]" data-lucide="chevron-right"></i>
<span className="text-[15px] font-medium text-white">Greenlight</span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wide">In Progress</span>
</div>
<div className="flex items-center gap-3">
<button className="text-[#9CA3AF] hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="bell"></i></button>
<div className="h-4 w-[1px] bg-[#323644]"></div>
<button className="text-[#9CA3AF] hover:text-white transition-colors text-sm font-medium">Help</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 lg:p-12 scroll-smooth" id="main-content">
<div className="max-w-4xl mx-auto space-y-10">

<div className="space-y-2">
<h1 className="text-3xl font-display font-semibold tracking-tight text-white">Signal Information</h1>
<p className="text-[#9CA3AF] text-base font-light">To start, we need your Signal Information. Providing clear and accurate details helps the AI generate precise value propositions.</p>
</div>

<div className="grid grid-cols-1 gap-6">

<div className="space-y-2">
<label className="block text-sm font-medium text-[#D1D5DB]">Company/Signal Name <span className="text-red-400">*</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-4 w-4 text-[#6B7280]" data-lucide="building-2"></i>
</div>
<input className="input-base block w-full pl-10 pr-3 py-2.5 rounded-lg text-sm placeholder-[#4B5563]" placeholder="e.g. Stripe" type="text" value="Greenlight"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-[#D1D5DB]">Website URL <span className="text-red-400">*</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-4 w-4 text-[#6B7280]" data-lucide="link"></i>
</div>
<input className="input-base block w-full pl-10 pr-3 py-2.5 rounded-lg text-sm placeholder-[#4B5563]" placeholder="https://..." type="text" value="https://greenlight.com/"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-[#D1D5DB]">Target Market <span className="text-red-400">*</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-4 w-4 text-[#6B7280]" data-lucide="globe"></i>
</div>
<select className="input-base block w-full pl-10 pr-10 py-2.5 rounded-lg text-sm placeholder-[#4B5563]">
<option disabled="" value="">Select a market</option>
<option value="US">United States</option>
<option selected="" value="SA">Saudi Arabia</option>
<option value="UAE">United Arab Emirates</option>
<option value="DE">Germany</option>
<option value="UK">United Kingdom</option>
</select>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-[#D1D5DB]">Upload Files <span className="text-[#6B7280] font-normal ml-1">(Optional)</span></label>
<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#323644] border-dashed rounded-xl hover:border-[#4B5563] hover:bg-[#1A1E2F]/50 transition-all cursor-pointer group">
<div className="space-y-1 text-center">
<div className="mx-auto h-10 w-10 text-[#6B7280] bg-[#151827] rounded-lg flex items-center justify-center border border-[#323644] group-hover:border-[#6B7280] transition-colors">
<i className="w-5 h-5" data-lucide="upload-cloud"></i>
</div>
<div className="flex text-sm text-[#9CA3AF] justify-center pt-2">
<span className="relative cursor-pointer rounded-md font-medium text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 hover:text-blue-400">
<span>Upload a file</span>
</span>
<p className="pl-1">or drag and drop</p>
</div>
<p className="text-xs text-[#6B7280]">PDF, DOCX up to 10MB</p>
</div>
</div>
<div className="flex items-center justify-between py-2 px-3 bg-[#151827] border border-[#323644] rounded-lg mt-2">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="file-text"></i>
<span className="text-sm text-[#D1D5DB]">Financial_Literacy_KSA2025.pdf</span>
<span className="text-xs text-[#6B7280]">2.4 MB</span>
</div>
<button className="text-[#6B7280] hover:text-red-400 transition-colors"><i className="w-4 h-4" data-lucide="trash-2"></i></button>
</div>
</div>

<div className="flex items-center gap-4 pt-4 border-t border-[#323644]/50">
<button className="px-4 py-2.5 bg-[#151827] border border-[#323644] hover:bg-[#1f2336] text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="folder"></i>
                            Project Folder
                        </button>
<button className="ml-auto px-6 py-2.5 bg-[#1A56DB] hover:bg-[#1548b8] text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2" id="generate-btn" onclick="generateResults()">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span id="btn-text">Generate Value Proposition</span>
</button>
</div>
</div>

<div className="hidden space-y-10 pt-8 border-t border-[#323644]" id="ai-results">

<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-3 mb-1">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<h2 className="text-2xl font-display font-semibold text-white">Signal: Greenlight</h2>
</div>
<p className="text-[#9CA3AF] text-sm">AI analysis completed based on provided URL and market data.</p>
</div>
<div className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                            Analysis Ready
                        </div>
</div>

<div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
<h3 className="text-sm font-semibold text-blue-400 mb-1">Similarity Reasoning</h3>
<p className="text-sm text-[#D1D5DB] leading-relaxed">
                            Greenlight offers a debit card for kids and teens combined with a financial management app for families, which directly aligns with the target market analysis for Saudi Arabia's growing youth demographic and fintech adoption.
                        </p>
</div>

<div className="grid grid-cols-1 gap-8">
<div className="space-y-2">
<label className="block text-sm font-medium text-[#D1D5DB]">Value Proposition</label>
<textarea className="input-base block w-full px-4 py-3 rounded-lg text-sm placeholder-[#4B5563] min-h-[80px] leading-relaxed resize-none">Debit Card for Kids &amp; Teens, Plus Financial Learning &amp; Family Safety.</textarea>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-[#D1D5DB]">Company Description</label>
<textarea className="input-base block w-full px-4 py-3 rounded-lg text-sm placeholder-[#4B5563] min-h-[120px] leading-relaxed resize-y">This company offers a debit card for kids and teens combined with a financial management app for families. It allows parents to automate allowance, set spending controls, and monitor their children's transactions. Kids and teens learn financial literacy from a young age through interactive lessons and savings goals.</textarea>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white">Similar TV(s) Found</h3>
<span className="text-xs text-[#6B7280]">3 matches in database</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-4 bg-[#151827] border border-[#323644] hover:border-[#4B5563] rounded-xl transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#1A1E2F] border border-[#323644] flex items-center justify-center text-xs font-bold">P</div>
<div>
<h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Pahamify</h4>
<p className="text-[10px] text-[#6B7280]">EdTech • Series A</p>
</div>
</div>
<div className="px-2 py-0.5 rounded text-[10px] bg-[#323644] text-[#9CA3AF]">85% Match</div>
</div>
<p className="text-xs text-[#9CA3AF] line-clamp-2">Educational app combining gamification to improve financial literacy among teens in Southeast Asia.</p>
</div>

<div className="p-4 bg-[#151827] border border-[#323644] hover:border-[#4B5563] rounded-xl transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#1A1E2F] border border-[#323644] flex items-center justify-center text-xs font-bold text-yellow-500">L</div>
<div>
<h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Leap</h4>
<p className="text-[10px] text-[#6B7280]">Fintech • Seed</p>
</div>
</div>
<div className="px-2 py-0.5 rounded text-[10px] bg-[#323644] text-[#9CA3AF]">72% Match</div>
</div>
<p className="text-xs text-[#9CA3AF] line-clamp-2">Prepaid card for kids aimed at the UAE market with parental controls and saving pockets.</p>
</div>
</div>

<div className="flex items-center gap-3 pt-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#323644] bg-[#1A1E2F] checked:border-blue-500 checked:bg-blue-500 transition-all" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-[#D1D5DB] group-hover:text-white transition-colors">Include selected projects in analysis context</span>
</label>
</div>
</div>

<div className="flex justify-end pt-6">
<button className="px-6 py-2.5 bg-[#1A56DB] hover:bg-[#1548b8] text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2 group">
                            Create Final Deliverable
                            <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="h-20"></div>
</div>
</div>
</main>


    </>
  );
}
