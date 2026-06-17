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



    const PARTNERS = [
        { name: "A.T. Still University of Health Sciences", url: "https://app.bysavi.com/register/atsu/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "AARP Member Benefits", url: "https://app.bysavi.com/register/fiftyplusmb/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "ADP", url: "https://app.bysavi.com/register/adp/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "AFSCME District Council 47", url: "https://app.bysavi.com/register/afscmedc47/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Akron", url: "https://app.bysavi.com/register/akron/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Albright College", url: "https://app.bysavi.com/register/albright/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Albuquerque Academy", url: "https://app.bysavi.com/register/albuquerque/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Allegan Area ESA", url: "https://app.bysavi.com/register/allegan/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Allegheny Intermediate Unit", url: "https://app.bysavi.com/register/aiu3/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Alliance for Strong Families and Communities", url: "https://app.bysavi.com/register/alliance/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Allina Health", url: "https://app.bysavi.com/register/allinahealth/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "American Dental Education Association", url: "https://app.bysavi.com/register/adea/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "American Federation of Government Employees", url: "https://app.bysavi.com/register/afge/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "American Federation of Teachers", url: "https://app.bysavi.com/register/aft/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "American Library Association", url: "https://app.bysavi.com/register/ala/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "American Public Health Association", url: "https://app.bysavi.com/register/apha/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "American Society for Clinical Pathology (ASCP)", url: "https://app.bysavi.com/register/ascp/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Amherst College", url: "https://app.bysavi.com/register/amherst/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Analytic Services Inc", url: "https://app.bysavi.com/register/anser/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "AnMed", url: "https://app.bysavi.com/register/anmed/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Anne Arundel County Government", url: "https://app.bysavi.com/register/annearundelcounty/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Anne Arundel County Public Schools", url: "https://app.bysavi.com/register/aacps/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Antioch University", url: "https://app.bysavi.com/register/antioch/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Apollo Business Services LLC", url: "https://app.bysavi.com/register/apollo/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Ardley", url: "https://app.bysavi.com/register/ardley/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Arizona State University", url: "https://app.bysavi.com/register/asu/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Ascendium", url: "https://app.bysavi.com/register/ascendium/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Ascension", url: "https://app.bysavi.com/register/ascension/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Baylor University", url: "https://app.bysavi.com/register/baylor/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Boston Medical Center", url: "https://app.bysavi.com/register/bmc/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Brown University", url: "https://app.bysavi.com/register/brown/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "City of Chicago", url: "https://app.bysavi.com/register/cityofchicago/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "City of Detroit", url: "https://app.bysavi.com/register/detroitmi/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "City of Phoenix", url: "https://app.bysavi.com/register/cityofphoenix/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Columbia University", url: "https://app.bysavi.com/register/columbia/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Cornell University", url: "https://app.bysavi.com/register/join/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Georgetown University", url: "https://app.bysavi.com/register/join/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Harvard College", url: "https://app.bysavi.com/register/harvard/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Johns Hopkins University", url: "https://app.bysavi.com/register/join/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Kaiser Permanente", url: "https://app.bysavi.com/register/join/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Memorial Sloan Kettering Cancer Center", url: "https://app.bysavi.com/register/mskcc/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Miami Dade College", url: "https://app.bysavi.com/register/mdc/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "New York University", url: "https://app.bysavi.com/register/nyu/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Northwell Health", url: "https://app.bysavi.com/register/northwell/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Penn State", url: "https://app.bysavi.com/register/psu/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Stanford University", url: "https://app.bysavi.com/register/stanford/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "State of Michigan", url: "https://app.bysavi.com/register/michigan/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "State of Washington", url: "https://app.bysavi.com/register/wa/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Temple University", url: "https://app.bysavi.com/register/temple/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "The New School", url: "https://app.bysavi.com/register/newschool/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "United Way", url: "https://app.bysavi.com/register/unitedway/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "University of California", url: "https://app.bysavi.com/register/uc/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "University of Chicago", url: "https://app.bysavi.com/register/uchicago/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "University of Florida", url: "https://app.bysavi.com/register/uf/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "University of Pennsylvania", url: "https://app.bysavi.com/register/upenn/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "University of Texas", url: "https://app.bysavi.com/register/ut/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" },
        { name: "Yale University", url: "https://app.bysavi.com/register/yale/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory" }
    ];

    const GENERIC_URL = 'https://app.bysavi.com/register/join/essential?utm_campaign=2026_q2_retargeting&utm_source=meta&utm_medium=paid_social&utm_content=microsite_directory';
    const input = document.getElementById('search-input');
    const container = document.getElementById('results-container');
    const toast = document.getElementById('redirect-toast');
    const toastText = document.getElementById('toast-text');

    function normalize(str) {
        return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    }

    function showToast(name) {
        toastText.textContent = `Taking you to your ${name} page…`;
        toast.classList.remove('hidden');
        toast.classList.add('flex');
    }

    function renderFallbackItem() {
        const a = document.createElement('a');
        a.href = GENERIC_URL;
        a.target = "_blank"; // Fixes iframe restrictions in sandbox previewers
        a.className = 'flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors text-sm text-gray-500 italic cursor-pointer';
        a.innerHTML = `<span>I don't see my organization</span><iconify-icon icon="solar:arrow-right-linear" width="1.2em" class="text-gray-400"></iconify-icon>`;
        a.addEventListener('click', () => {
            showToast('Savi');
            setTimeout(() => { container.classList.add('hidden'); }, 150);
        });
        return a;
    }

    function render(matches) {
        container.innerHTML = '';
        if (matches.length === 0) {
            const noRes = document.createElement('div');
            noRes.className = 'px-4 py-3 text-sm text-gray-400 text-center';
            noRes.textContent = 'No results found — try a different search term.';
            container.appendChild(noRes);
            container.appendChild(renderFallbackItem());
            container.classList.remove('hidden');
            return;
        }
        matches.forEach(p => {
            const a = document.createElement('a');
            a.href = p.url;
            a.target = "_blank"; // Fixes iframe restrictions in sandbox previewers
            a.className = 'flex items-center justify-between px-4 py-3 border-b border-gray-50 hover:bg-[#E1F4EC] hover:pl-5 transition-all duration-200 cursor-pointer text-sm font-medium text-gray-900 group';
            a.innerHTML = `<span>${p.name}</span><iconify-icon icon="solar:arrow-right-linear" width="1.2em" class="text-[#38946F] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"></iconify-icon>`;
            
            // Allow native browser navigation instead of preventing default
            a.addEventListener('click', () => {
                showToast(p.name);
                setTimeout(() => { container.classList.add('hidden'); }, 150);
            });
            container.appendChild(a);
        });
        container.appendChild(renderFallbackItem());
        container.classList.remove('hidden');
    }

    input.addEventListener('input', () => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
        const q = normalize(input.value);
        if (q.length < 2) { 
            container.classList.add('hidden'); 
            container.innerHTML = ''; 
            return; 
        }
        render(PARTNERS.filter(p => normalize(p.name).includes(q)).slice(0, 8));
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-card-wrapper')) container.classList.add('hidden');
    });

    input.addEventListener('focus', () => {
        if (input.value.length >= 2) container.classList.remove('hidden');
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
      

<nav className="flex sticky z-50 bg-white h-16 border-gray-200 border-b pr-8 pl-8 top-0 items-center">
<a className="hover:opacity-80 transition-opacity flex items-center" href="#">

<img alt="Savi Logo" className="h-8 w-auto object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c38e730-2c4e-45b1-8277-c60232d39fa0_320w.jpg"/>
</a>
</nav>

<div className="relative overflow-hidden pt-16 pb-32 px-6 text-center animate-gradshift" style={{backgroundImage: 'linear-gradient(135deg, #163d4a 0%, #235E6D 45%, #1d5e50 100%)'}}>

<div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none animate-orb1" style={{background: 'radial-gradient(circle, rgba(56,148,111,0.22) 0%, transparent 68%)'}}></div>
<div className="absolute -bottom-28 -left-16 w-[340px] h-[340px] rounded-full pointer-events-none animate-orb2" style={{background: 'radial-gradient(circle, rgba(78,188,144,0.16) 0%, transparent 68%)'}}></div>
<div className="absolute top-[28%] left-[8%] w-[200px] h-[200px] rounded-full pointer-events-none animate-orb2" style={{background: 'radial-gradient(circle, rgba(255,185,103,0.07) 0%, transparent 70%)', animationDelay: '2s'}}></div>

<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 bg-[#4EBC90]/15 border border-[#4EBC90]/30 text-[#4EBC90] text-xs font-medium uppercase tracking-widest py-1.5 px-3 pl-2.5 rounded-full mb-6 animate-fadeup backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#4EBC90] flex-shrink-0 animate-dot-pulse"></span>
                Your student loan benefit is waiting
            </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15] max-w-2xl mb-4 animate-fadeup-1">
                Pick up where you<br className="hidden md:block"/> left off with <span className="text-[#4EBC90]">Savi</span>
</h1>
<p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed mb-8 animate-fadeup-2">
                Find your organization below to access your personalized Savi page and start saving on your student loans today.
            </p>
<div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 animate-fadeup-3">
<div className="flex items-center gap-2 text-xs md:text-sm text-white/80 font-medium">
<div className="w-5 h-5 rounded-full bg-[#4EBC90]/20 border border-[#4EBC90]/40 flex items-center justify-center text-[#4EBC90]">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</div>
                    Average savings of $187/month
                </div>
<div className="flex items-center gap-2 text-xs md:text-sm text-white/80 font-medium">
<div className="w-5 h-5 rounded-full bg-[#4EBC90]/20 border border-[#4EBC90]/40 flex items-center justify-center text-[#4EBC90]">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</div>
                    Takes less than 10 minutes
                </div>
<div className="flex items-center gap-2 text-xs md:text-sm text-white/80 font-medium">
<div className="w-5 h-5 rounded-full bg-[#4EBC90]/20 border border-[#4EBC90]/40 flex items-center justify-center text-[#4EBC90]">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</div>
                    Savi handles the paperwork
                </div>
</div>
</div>
</div>

<main className="flex-1 max-w-5xl w-full mx-auto px-6 pb-20 relative z-20">

<div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 -mt-16 animate-card-rise search-card-wrapper relative">
<div className="flex items-center justify-between mb-3">
<label className="text-sm font-medium text-gray-600" htmlFor="search-input">Search for your employer, union, or organization</label>
</div>
<div className="relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#38946F] transition-colors flex items-center justify-center">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="1.5em"></iconify-icon>
</div>
<input autocomplete="off" className="w-full h-14 pl-11 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 search-input-glow hover:bg-white" id="search-input" placeholder="e.g. City of Springfield, State University..." type="text"/>
</div>

<div className="hidden absolute left-0 right-0 top-[105%] bg-white border border-gray-200 rounded-xl shadow-lg mt-2 max-h-72 overflow-y-auto custom-scrollbar z-50" id="results-container">

</div>

<div className="hidden items-center gap-3 mt-4 bg-[#E1F4EC] border border-[#b8e6d4] rounded-lg p-3 text-sm text-[#27684E] font-medium animate-toast-in" id="redirect-toast">
<div className="w-5 h-5 rounded-full bg-[#38946F] text-white flex items-center justify-center flex-shrink-0 animate-check-pop">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2" width="1.1em"></iconify-icon>
</div>
<span id="toast-text">Taking you to your page…</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
<div className="bg-white border border-gray-200/80 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-3xl font-semibold tracking-tight text-[#38946F] mb-1 flex items-baseline justify-center gap-1">
                    $187<span className="text-lg font-medium text-[#38946F]/80">/mo</span>
</div>
<div className="text-sm text-gray-500 leading-relaxed">Average monthly savings for Savi members</div>
</div>
<div className="bg-white border border-gray-200/80 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-3xl font-semibold tracking-tight text-[#38946F] mb-1">$38k</div>
<div className="text-sm text-gray-500 leading-relaxed">Average lifetime savings unlocked through Savi</div>
</div>
<div className="bg-white border border-gray-200/80 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-3xl font-semibold tracking-tight text-[#38946F] mb-1">1M+</div>
<div className="text-sm text-gray-500 leading-relaxed">Borrowers helped through Savi's platform</div>
</div>
</div>

<div className="relative text-center my-16">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-gray-200"></div>
</div>
<span className="relative bg-gray-50 px-4 text-xs font-medium text-gray-400 uppercase tracking-widest">How it works</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white border border-gray-200/80 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-[#E1F4EC] text-[#27684E] border border-[#b8e6d4] text-sm font-semibold flex items-center justify-center mx-auto mb-4">1</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2 tracking-tight">Find your organization</h3>
<p className="text-sm text-gray-500 leading-relaxed">Search above to locate your employer, union, or membership organization and access your personalized Savi page.</p>
</div>
<div className="bg-white border border-gray-200/80 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-[#E1F4EC] text-[#27684E] border border-[#b8e6d4] text-sm font-semibold flex items-center justify-center mx-auto mb-4">2</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2 tracking-tight">See your savings</h3>
<p className="text-sm text-gray-500 leading-relaxed">Connect your student loan accounts and Savi calculates your best repayment or forgiveness options.</p>
</div>
<div className="bg-white border border-gray-200/80 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-[#E1F4EC] text-[#27684E] border border-[#b8e6d4] text-sm font-semibold flex items-center justify-center mx-auto mb-4">3</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2 tracking-tight">Enroll in minutes</h3>
<p className="text-sm text-gray-500 leading-relaxed">Savi handles the paperwork and keeps you on track toward loan forgiveness or lower monthly payments.</p>
</div>
</div>

<div className="md:p-10 flex flex-col md:flex-row gap-6 rounded-2xl mt-16 pt-8 pr-8 pb-8 pl-8 shadow-md gap-x-6 gap-y-6 items-center justify-between" style={{backgroundImage: 'linear-gradient(135deg, #235E6D 0%, #1e5e50 100%)'}}>
<div className="text-center md:text-left">
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Don't see your organization?</h3>
<p className="text-sm text-white/80 max-w-md leading-relaxed">You can still access Savi's tools to explore your repayment options and potential savings.</p>
</div>
<a className="inline-flex items-center justify-center hover:bg-[#287b5a] transition-colors duration-200 whitespace-nowrap text-sm font-semibold text-white bg-[#359570] rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-sm" href="https://app.bysavi.com/register/join/essential?utm_campaign=2026_q2_retargeting&amp;utm_source=meta&amp;utm_medium=paid_social&amp;utm_content=microsite_directory" target="_blank">
                Get started with Savi
            </a>
</div>
</main>

<footer className="bg-white border-t border-gray-200 mt-auto">
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">© 2026 Savi. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-gray-400 hover:text-[#38946F] transition-colors" href="https://bysavi.com/privacy">Privacy Policy</a>
<a className="text-xs text-gray-400 hover:text-[#38946F] transition-colors" href="https://bysavi.com/terms">Terms of Use</a>
<a className="text-xs text-gray-400 hover:text-[#38946F] transition-colors" href="https://bysavi.com">bysavi.com</a>
</div>
</div>
</footer>


    </>
  );
}
