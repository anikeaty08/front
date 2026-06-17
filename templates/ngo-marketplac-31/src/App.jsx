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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
        const triggers = document.querySelectorAll('[data-route]');
        const views = document.querySelectorAll('.page-view');

        function switchView(targetId) {
            // Hide all views
            views.forEach(view => {
                view.classList.remove('active');
                setTimeout(() => { if(!view.classList.contains('active')) view.style.display = 'none'; }, 300);
            });

            // Show target view
            const targetView = document.getElementById(`view-${targetId}`);
            if (targetView) {
                targetView.style.display = 'block';
                // Slight delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    targetView.classList.add('active');
                    window.scrollTo(0, 0);
                }, 10);
            }
        }

        // Attach click listeners
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const target = trigger.getAttribute('data-route');
                switchView(target);
            });
        });

        // Simple auth tab toggle demo (visual only)
        const tabCsr = document.getElementById('tab-csr');
        const tabNgo = document.getElementById('tab-ngo');
        const loginBtn = document.querySelector('#view-auth form button');

        if(tabCsr && tabNgo) {
            tabCsr.addEventListener('click', (e) => {
                e.preventDefault();
                tabCsr.classList.add('bg-white', 'text-[#1a3328]', 'shadow-sm');
                tabCsr.classList.remove('text-[#6b7280]');
                tabNgo.classList.remove('bg-white', 'text-[#1a3328]', 'shadow-sm');
                tabNgo.classList.add('text-[#6b7280]');
                loginBtn.setAttribute('data-route', 'csr-dashboard');
            });
            tabNgo.addEventListener('click', (e) => {
                e.preventDefault();
                tabNgo.classList.add('bg-white', 'text-[#1a3328]', 'shadow-sm');
                tabNgo.classList.remove('text-[#6b7280]');
                tabCsr.classList.remove('bg-white', 'text-[#1a3328]', 'shadow-sm');
                tabCsr.classList.add('text-[#6b7280]');
                loginBtn.setAttribute('data-route', 'ngo-dashboard');
            });
        }
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#e5e7eb]">
<div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
<a className="font-['Syne'] font-semibold text-xs tracking-widest uppercase text-[#1a3328] flex items-center gap-2" data-route="marketplace" href="#">
<span className="block w-2 h-2 bg-[#3d6b57] rounded-full"></span>
            Impact Connect
        </a>

<ul className="hidden md:flex items-center gap-6 list-none">
<li><a className="text-[0.8125rem] font-medium text-[#4a4a4a] hover:text-[#1a3328] transition-colors" data-route="marketplace" href="#">Marketplace</a></li>
<li><a className="text-[0.8125rem] font-medium text-[#4a4a4a] hover:text-[#1a3328] transition-colors" data-route="csr-dashboard" href="#">CSR Dashboard</a></li>
<li><a className="text-[0.8125rem] font-medium text-[#4a4a4a] hover:text-[#1a3328] transition-colors" data-route="ngo-dashboard" href="#">NGO Dashboard</a></li>
</ul>
<div className="flex items-center gap-3">
<a className="text-[0.8125rem] font-medium text-[#4a4a4a] hover:text-[#1a3328] transition-colors hidden sm:block" data-route="auth" href="#">Log in</a>
<a className="bg-[#1a3328] text-white font-['Syne'] text-[0.6875rem] font-semibold tracking-widest uppercase px-4 py-2 rounded-md hover:bg-[#254b3b] transition-all shadow-sm" data-route="ngo-form" href="#">
                Post Project
            </a>
</div>
</div>
</nav>

<main className="flex-grow w-full max-w-[1400px] mx-auto px-6 py-8" id="app-root">

<div className="page-view active" id="view-marketplace">
<div className="mb-10">
<h1 className="font-['Syne'] font-semibold text-3xl md:text-4xl text-[#1a3328] tracking-tight mb-2">Discover NGO Projects</h1>
<p className="text-sm text-[#4a4a4a] max-w-2xl leading-relaxed">Browse verified NGO projects and find initiatives aligned with your CSR goals.</p>
</div>
<div className="flex flex-col lg:flex-row gap-8 items-start">

<aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6 sticky top-20">

<div>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8a8a]" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-white border border-[#d6dbd8] text-[0.8125rem] rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all shadow-sm" placeholder="Search projects, NGOs..." type="text"/>
</div>
</div>

<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<h3 className="font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] mb-4">Cause Area</h3>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-2.5 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#d6dbd8] rounded-[4px] peer-checked:bg-[#1a3328] peer-checked:border-[#1a3328] flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" style={{strokeWidth: '2.5'}}></iconify-icon>
</div>
<span className="text-[0.8125rem] text-[#4a4a4a] group-hover:text-[#1a3328] transition-colors">Education</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#d6dbd8] rounded-[4px] peer-checked:bg-[#1a3328] peer-checked:border-[#1a3328] flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" style={{strokeWidth: '2.5'}}></iconify-icon>
</div>
<span className="text-[0.8125rem] text-[#4a4a4a] group-hover:text-[#1a3328] transition-colors">Healthcare</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#d6dbd8] rounded-[4px] peer-checked:bg-[#1a3328] peer-checked:border-[#1a3328] flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" style={{strokeWidth: '2.5'}}></iconify-icon>
</div>
<span className="text-[0.8125rem] text-[#4a4a4a] group-hover:text-[#1a3328] transition-colors">Environment</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#d6dbd8] rounded-[4px] peer-checked:bg-[#1a3328] peer-checked:border-[#1a3328] flex items-center justify-center transition-colors">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" style={{strokeWidth: '2.5'}}></iconify-icon>
</div>
<span className="text-[0.8125rem] text-[#4a4a4a] group-hover:text-[#1a3328] transition-colors">Rural Development</span>
</label>
</div>
</div>

<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<h3 className="font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] mb-4">Funding Required</h3>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-2.5 cursor-pointer group">
<input className="peer sr-only" name="funding" type="radio"/>
<div className="w-4 h-4 border border-[#d6dbd8] rounded-full peer-checked:border-[5px] peer-checked:border-[#1a3328] transition-all"></div>
<span className="text-[0.8125rem] text-[#4a4a4a] group-hover:text-[#1a3328] transition-colors">&lt; ₹5 Lakhs</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer group">
<input checked="" className="peer sr-only" name="funding" type="radio"/>
<div className="w-4 h-4 border border-[#d6dbd8] rounded-full peer-checked:border-[5px] peer-checked:border-[#1a3328] transition-all"></div>
<span className="text-[0.8125rem] text-[#4a4a4a] group-hover:text-[#1a3328] transition-colors">₹5–20 Lakhs</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer group">
<input className="peer sr-only" name="funding" type="radio"/>
<div className="w-4 h-4 border border-[#d6dbd8] rounded-full peer-checked:border-[5px] peer-checked:border-[#1a3328] transition-all"></div>
<span className="text-[0.8125rem] text-[#4a4a4a] group-hover:text-[#1a3328] transition-colors">₹20–50 Lakhs</span>
</label>
</div>
</div>

<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<h3 className="font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] mb-4">Location</h3>
<div className="relative">
<select className="w-full appearance-none bg-white border border-[#d6dbd8] text-[0.8125rem] text-[#4a4a4a] rounded-lg pl-3 pr-8 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all cursor-pointer">
<option>All Regions</option>
<option>Jharkhand, India</option>
<option>Maharashtra, India</option>
<option>Karnataka, India</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a8a] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</aside>

<div className="flex-grow grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

<div className="bg-white border border-[#e5e7eb] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.06)] hover:border-[#c5d8ce] transition-all duration-300 flex flex-col h-full relative group">
<div className="absolute top-5 right-5 z-10">
<span className="inline-flex items-center gap-1 bg-[#f0d44a]/20 text-[#1a3328] text-[0.6875rem] font-medium px-2 py-0.5 rounded-full border border-[#f0d44a]/30 backdrop-blur-sm">
<iconify-icon className="text-[#b59e2b]" icon="solar:stars-linear"></iconify-icon>
                            89% Match
                        </span>
</div>
<div className="mb-3 pr-24">
<span className="text-[0.625rem] font-medium tracking-widest uppercase text-[#8caa98] mb-1 block">Environment • Education</span>
<h3 className="font-['Syne'] font-semibold text-[1.125rem] text-[#1a3328] tracking-tight leading-snug">Solar Energy for Rural Schools</h3>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-[#f5f1eb] flex items-center justify-center text-[#3d6b57] shrink-0 border border-[#e5e7eb]">
<iconify-icon icon="solar:leaf-linear" width="0.875rem"></iconify-icon>
</div>
<div className="text-[0.8125rem] text-[#4a4a4a] truncate">Green Future Foundation</div>
</div>
<p className="text-xs text-[#6b7280] leading-relaxed mb-6 flex-grow">This project aims to install solar panels in 15 rural schools to provide sustainable electricity and improve digital learning infrastructure.</p>
<div className="flex flex-col gap-3 mb-6 pt-4 border-t border-[#f3f4f6]">
<div className="flex justify-between items-center text-xs">
<span className="text-[#8a8a8a] flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Jharkhand</span>
<span className="text-[#8a8a8a] flex items-center gap-1.5"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> 1200 ben.</span>
</div>
<div className="flex justify-between items-end mt-1">
<div className="flex flex-col">
<span className="text-[0.6875rem] text-[#8a8a8a]">Goal</span>
<span className="text-[0.875rem] font-medium text-[#1a3328]">₹12,00,000</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[0.6875rem] text-[#8a8a8a]">Raised</span>
<span className="text-[0.875rem] font-medium text-[#3d6b57]">₹4,50,000</span>
</div>
</div>
<div className="w-full bg-[#e8f0ec] rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-[#3d6b57] h-1.5 rounded-full" style={{width: '37.5%'}}></div>
</div>
</div>
<div className="flex gap-2 mt-auto">
<button className="w-10 h-10 rounded-lg border border-[#d6dbd8] flex items-center justify-center text-[#4a4a4a] hover:bg-[#f5f1eb] hover:text-[#1a3328] transition-colors shrink-0">
<iconify-icon icon="solar:bookmark-linear" width="1.25rem"></iconify-icon>
</button>
<button className="flex-grow bg-white border border-[#1a3328] text-[#1a3328] text-[0.8125rem] font-medium rounded-lg hover:bg-[#1a3328] hover:text-white transition-colors flex items-center justify-center gap-2" data-route="project-detail">
                            View Details
                        </button>
</div>
</div>

<div className="bg-white border border-[#e5e7eb] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.06)] hover:border-[#c5d8ce] transition-all duration-300 flex flex-col h-full relative">
<div className="absolute top-5 right-5 z-10">
<span className="inline-flex items-center gap-1 bg-[#f0d44a]/20 text-[#1a3328] text-[0.6875rem] font-medium px-2 py-0.5 rounded-full border border-[#f0d44a]/30 backdrop-blur-sm">
<iconify-icon className="text-[#b59e2b]" icon="solar:stars-linear"></iconify-icon>
                            72% Match
                        </span>
</div>
<div className="mb-3 pr-24">
<span className="text-[0.625rem] font-medium tracking-widest uppercase text-[#8caa98] mb-1 block">Healthcare</span>
<h3 className="font-['Syne'] font-semibold text-[1.125rem] text-[#1a3328] tracking-tight leading-snug">Mobile Clinics for Remote Villages</h3>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-[#f5f1eb] flex items-center justify-center text-[#3d6b57] shrink-0 border border-[#e5e7eb]">
<iconify-icon icon="solar:health-linear" width="0.875rem"></iconify-icon>
</div>
<div className="text-[0.8125rem] text-[#4a4a4a] truncate">CarePlus India</div>
</div>
<p className="text-xs text-[#6b7280] leading-relaxed mb-6 flex-grow">Deploying 3 fully-equipped mobile medical vans to provide primary healthcare and maternal support in underserved regions.</p>
<div className="flex flex-col gap-3 mb-6 pt-4 border-t border-[#f3f4f6]">
<div className="flex justify-between items-center text-xs">
<span className="text-[#8a8a8a] flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Odisha</span>
<span className="text-[#8a8a8a] flex items-center gap-1.5"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> 5000 ben.</span>
</div>
<div className="flex justify-between items-end mt-1">
<div className="flex flex-col">
<span className="text-[0.6875rem] text-[#8a8a8a]">Goal</span>
<span className="text-[0.875rem] font-medium text-[#1a3328]">₹25,00,000</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[0.6875rem] text-[#8a8a8a]">Raised</span>
<span className="text-[0.875rem] font-medium text-[#3d6b57]">₹2,00,000</span>
</div>
</div>
<div className="w-full bg-[#e8f0ec] rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-[#3d6b57] h-1.5 rounded-full" style={{width: '8%'}}></div>
</div>
</div>
<div className="flex gap-2 mt-auto">
<button className="w-10 h-10 rounded-lg border border-[#d6dbd8] flex items-center justify-center text-[#4a4a4a] hover:bg-[#f5f1eb] hover:text-[#1a3328] transition-colors shrink-0">
<iconify-icon icon="solar:bookmark-linear" width="1.25rem"></iconify-icon>
</button>
<button className="flex-grow bg-white border border-[#1a3328] text-[#1a3328] text-[0.8125rem] font-medium rounded-lg hover:bg-[#1a3328] hover:text-white transition-colors flex items-center justify-center gap-2">
                            View Details
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="view-project-detail">
<button className="text-xs font-medium text-[#8a8a8a] hover:text-[#1a3328] flex items-center gap-1.5 mb-6 transition-colors" data-route="marketplace">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Marketplace
        </button>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="lg:col-span-2 space-y-8">
<div>
<div className="flex items-center gap-3 mb-3">
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-2.5 py-1 rounded-full">
                            Environment
                        </span>
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-2.5 py-1 rounded-full">
                            Education
                        </span>
</div>
<h1 className="font-['Syne'] font-semibold text-3xl md:text-4xl text-[#1a3328] tracking-tight mb-4">Solar Energy for Rural Schools</h1>
<p className="text-[0.9375rem] text-[#4a4a4a] leading-relaxed">This initiative will install solar power systems in 15 rural schools where electricity access is unreliable. The project will improve learning conditions, allow the use of digital tools, and reduce reliance on fossil fuels in the community.</p>
</div>

<div className="w-full h-64 md:h-80 bg-[#f3f4f6] rounded-2xl border border-[#e5e7eb] flex items-center justify-center text-[#8a8a8a]">
<iconify-icon icon="solar:gallery-wide-linear" width="2rem"></iconify-icon>
</div>
<div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 md:p-8 shadow-sm">
<h3 className="font-['Syne'] font-semibold text-lg text-[#1a3328] mb-5 tracking-tight">Project Impact</h3>
<div className="grid sm:grid-cols-3 gap-6">
<div className="flex flex-col">
<iconify-icon className="text-[#3d6b57] text-2xl mb-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xl font-medium text-[#1a3328]">1,200</span>
<span className="text-xs text-[#6b7280]">Students benefited</span>
</div>
<div className="flex flex-col">
<iconify-icon className="text-[#3d6b57] text-2xl mb-2" icon="solar:buildings-linear"></iconify-icon>
<span className="text-xl font-medium text-[#1a3328]">15</span>
<span className="text-xs text-[#6b7280]">Schools electrified</span>
</div>
<div className="flex flex-col">
<iconify-icon className="text-[#3d6b57] text-2xl mb-2" icon="solar:cloud-water-linear"></iconify-icon>
<span className="text-xl font-medium text-[#1a3328]">30 Tons</span>
<span className="text-xs text-[#6b7280]">CO₂ reduced annually</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
<div className="flex justify-between items-baseline mb-2">
<span className="text-2xl font-semibold text-[#1a3328]">₹4,50,000</span>
<span className="text-xs text-[#6b7280]">raised of ₹12,00,000</span>
</div>
<div className="w-full bg-[#f3f4f6] rounded-full h-2 mb-4 overflow-hidden">
<div className="bg-[#3d6b57] h-2 rounded-full" style={{width: '37.5%'}}></div>
</div>
<div className="flex flex-col gap-2 mb-6">
<div className="flex justify-between text-xs pb-2 border-b border-[#f3f4f6]">
<span className="text-[#6b7280]">Remaining Amount</span>
<span className="font-medium text-[#1c1c1c]">₹7,50,000</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-[#6b7280]">Project Status</span>
<span className="font-medium text-[#3d6b57]">Seeking Funding</span>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full bg-[#1a3328] text-white text-[0.8125rem] font-medium rounded-lg py-3 hover:bg-[#254b3b] transition-colors shadow-sm">
                            Fund This Project
                        </button>
<button className="w-full bg-white border border-[#d6dbd8] text-[#1c1c1c] text-[0.8125rem] font-medium rounded-lg py-3 hover:bg-[#f9fafb] transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:bookmark-linear"></iconify-icon> Save to Shortlist
                        </button>
</div>
</div>

<div className="bg-[#f5f1eb] border border-[#d6dbd8]/60 rounded-2xl p-6">
<h3 className="font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase text-[#8caa98] mb-4">Implementing Partner</h3>
<div className="flex items-start gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-white border border-[#d6dbd8] flex items-center justify-center text-[#3d6b57] shrink-0 shadow-sm">
<iconify-icon icon="solar:leaf-linear" width="1.25rem"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-[0.9375rem] text-[#1a3328] flex items-center gap-1.5">
                                Green Future Foundation
                                <iconify-icon className="text-[#3d6b57] text-[14px]" icon="solar:check-circle-bold" title="Verified NGO"></iconify-icon>
</h4>
<span className="text-[0.6875rem] text-[#6b7280]">Verified NGO (NGO-DARPAN)</span>
</div>
</div>
<ul className="space-y-2 mb-5">
<li className="flex items-start gap-2 text-xs">
<iconify-icon className="text-[#8a8a8a] mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span className="text-[#4a4a4a]">Jharkhand, India</span>
</li>
<li className="flex items-start gap-2 text-xs">
<iconify-icon className="text-[#8a8a8a] mt-0.5 shrink-0" icon="solar:calendar-linear"></iconify-icon>
<span className="text-[#4a4a4a]">Founded in 2012</span>
</li>
<li className="flex items-start gap-2 text-xs">
<iconify-icon className="text-[#8a8a8a] mt-0.5 shrink-0" icon="solar:target-linear"></iconify-icon>
<span className="text-[#4a4a4a]">Focus: Renewable Energy, Education</span>
</li>
</ul>
<button className="w-full bg-white border border-[#d6dbd8] text-[#1c1c1c] text-[0.8125rem] font-medium rounded-lg py-2 hover:bg-[#fafafa] transition-colors shadow-sm">
                        Contact NGO
                    </button>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="view-csr-dashboard">
<div className="mb-8">
<h1 className="font-['Syne'] font-semibold text-2xl text-[#1a3328] tracking-tight">CSR Dashboard</h1>
<p className="text-[0.8125rem] text-[#6b7280]">Track your investments and discover AI-matched projects.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<span className="text-[0.6875rem] font-medium text-[#8a8a8a] uppercase tracking-wider block mb-1">CSR Budget</span>
<span className="text-2xl font-semibold text-[#1a3328]">₹2 Cr</span>
</div>
<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<span className="text-[0.6875rem] font-medium text-[#8a8a8a] uppercase tracking-wider block mb-1">Funds Allocated</span>
<span className="text-2xl font-semibold text-[#3d6b57]">₹1.2 Cr</span>
</div>
<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<span className="text-[0.6875rem] font-medium text-[#8a8a8a] uppercase tracking-wider block mb-1">Projects Supported</span>
<span className="text-2xl font-semibold text-[#1a3328]">12</span>
</div>
<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<span className="text-[0.6875rem] font-medium text-[#8a8a8a] uppercase tracking-wider block mb-1">Core Impact Areas</span>
<span className="text-[0.875rem] font-medium text-[#1a3328] block mt-1 truncate">Education, Environment</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-4">
<h3 className="font-['Syne'] font-semibold text-lg text-[#1a3328] tracking-tight">Shortlisted Projects</h3>
<div className="bg-white border border-[#e5e7eb] rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#f9fafb] border-b border-[#e5e7eb] text-[0.6875rem] uppercase tracking-wider text-[#6b7280]">
<th className="px-5 py-3 font-medium">Project</th>
<th className="px-5 py-3 font-medium">Funding Needed</th>
<th className="px-5 py-3 font-medium">Match</th>
<th className="px-5 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="text-[0.8125rem]">
<tr className="border-b border-[#e5e7eb] hover:bg-[#fcfbfa] transition-colors">
<td className="px-5 py-4">
<div className="font-medium text-[#1a3328] mb-0.5">Solar Energy for Rural Schools</div>
<div className="text-[0.6875rem] text-[#8a8a8a]">Green Future Foundation</div>
</td>
<td className="px-5 py-4 text-[#4a4a4a]">₹12,00,000</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1 bg-[#f0d44a]/20 text-[#1a3328] text-[0.6875rem] font-medium px-2 py-0.5 rounded-md">
<iconify-icon className="text-[#b59e2b]" icon="solar:stars-linear"></iconify-icon> 89%
                                    </span>
</td>
<td className="px-5 py-4 text-right">
<button className="text-[#3d6b57] font-medium hover:underline mr-3">View</button>
<button className="text-[#ef4444] font-medium hover:underline"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</td>
</tr>
<tr className="border-b border-[#e5e7eb] hover:bg-[#fcfbfa] transition-colors">
<td className="px-5 py-4">
<div className="font-medium text-[#1a3328] mb-0.5">Digital Classrooms initiative</div>
<div className="text-[0.6875rem] text-[#8a8a8a]">Teach for India</div>
</td>
<td className="px-5 py-4 text-[#4a4a4a]">₹8,50,000</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1 bg-gray-100 text-[#4a4a4a] text-[0.6875rem] font-medium px-2 py-0.5 rounded-md">
                                        75%
                                    </span>
</td>
<td className="px-5 py-4 text-right">
<button className="text-[#3d6b57] font-medium hover:underline mr-3">View</button>
<button className="text-[#ef4444] font-medium hover:underline"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-4">
<h3 className="font-['Syne'] font-semibold text-lg text-[#1a3328] tracking-tight flex items-center gap-2">
<iconify-icon className="text-[#b59e2b]" icon="solar:magic-stick-3-linear"></iconify-icon> Recommended for you
                </h3>
<div className="flex flex-col gap-3">
<div className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm hover:border-[#c5d8ce] transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-1 bg-[#b59e2b] h-full"></div>
<div className="flex justify-between items-start mb-1">
<span className="text-[0.625rem] font-medium tracking-widest uppercase text-[#8caa98]">Environment</span>
<span className="text-[0.6875rem] font-medium text-[#b59e2b]">92% Match</span>
</div>
<h4 className="font-medium text-[0.875rem] text-[#1a3328] mb-1">Urban Reforestation Drive</h4>
<div className="text-[0.6875rem] text-[#6b7280] mb-3">Needs ₹5,00,000</div>
<button className="text-[0.75rem] font-medium text-[#3d6b57] hover:underline">View Project →</button>
</div>
<div className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm hover:border-[#c5d8ce] transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-[0.625rem] font-medium tracking-widest uppercase text-[#8caa98]">Education</span>
<span className="text-[0.6875rem] font-medium text-[#6b7280]">85% Match</span>
</div>
<h4 className="font-medium text-[0.875rem] text-[#1a3328] mb-1">STEM Kits for Girls</h4>
<div className="text-[0.6875rem] text-[#6b7280] mb-3">Needs ₹2,50,000</div>
<button className="text-[0.75rem] font-medium text-[#3d6b57] hover:underline">View Project →</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="view-ngo-dashboard">
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="font-['Syne'] font-semibold text-2xl text-[#1a3328] tracking-tight">NGO Dashboard</h1>
<p className="text-[0.8125rem] text-[#6b7280]">Manage your projects and track funding progress.</p>
</div>
<button className="bg-[#1a3328] text-white text-[0.8125rem] font-medium rounded-lg px-4 py-2 hover:bg-[#254b3b] transition-colors shadow-sm flex items-center gap-2" data-route="ngo-form">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Create New Project
            </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<span className="text-[0.6875rem] font-medium text-[#8a8a8a] uppercase tracking-wider block mb-1">Projects Posted</span>
<span className="text-2xl font-semibold text-[#1a3328]">8</span>
</div>
<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<span className="text-[0.6875rem] font-medium text-[#8a8a8a] uppercase tracking-wider block mb-1">Projects Funded</span>
<span className="text-2xl font-semibold text-[#1a3328]">3</span>
</div>
<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
<span className="text-[0.6875rem] font-medium text-[#8a8a8a] uppercase tracking-wider block mb-1">CSR Partnerships</span>
<span className="text-2xl font-semibold text-[#1a3328]">5</span>
</div>
<div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm bg-[#f5f1eb]/50">
<span className="text-[0.6875rem] font-medium text-[#3d6b57] uppercase tracking-wider block mb-1">Total Funds Raised</span>
<span className="text-2xl font-semibold text-[#3d6b57]">₹48,00,000</span>
</div>
</div>
<div className="space-y-4">
<h3 className="font-['Syne'] font-semibold text-lg text-[#1a3328] tracking-tight">My Projects</h3>
<div className="bg-white border border-[#e5e7eb] rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#f9fafb] border-b border-[#e5e7eb] text-[0.6875rem] uppercase tracking-wider text-[#6b7280]">
<th className="px-5 py-3 font-medium">Project Name</th>
<th className="px-5 py-3 font-medium">Funding Goal</th>
<th className="px-5 py-3 font-medium">Amount Raised</th>
<th className="px-5 py-3 font-medium">Status</th>
<th className="px-5 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="text-[0.8125rem]">
<tr className="border-b border-[#e5e7eb] hover:bg-[#fcfbfa] transition-colors">
<td className="px-5 py-4 font-medium text-[#1a3328]">Solar Energy for Rural Schools</td>
<td className="px-5 py-4 text-[#4a4a4a]">₹12,00,000</td>
<td className="px-5 py-4 text-[#3d6b57] font-medium">₹4,50,000</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[0.6875rem] px-2 py-0.5 rounded-md border border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Active
                                </span>
</td>
<td className="px-5 py-4 text-right">
<button className="text-[#6b7280] hover:text-[#1a3328] transition-colors px-2"><iconify-icon icon="solar:pen-linear" width="1.1rem"></iconify-icon></button>
<button className="text-[#6b7280] hover:text-[#1a3328] transition-colors px-2"><iconify-icon icon="solar:eye-linear" width="1.1rem"></iconify-icon></button>
</td>
</tr>
<tr className="border-b border-[#e5e7eb] hover:bg-[#fcfbfa] transition-colors">
<td className="px-5 py-4 font-medium text-[#1a3328]">Clean Water Wells Phase 1</td>
<td className="px-5 py-4 text-[#4a4a4a]">₹5,00,000</td>
<td className="px-5 py-4 text-[#3d6b57] font-medium">₹5,00,000</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 bg-[#e8f0ec] text-[#254b3b] text-[0.6875rem] px-2 py-0.5 rounded-md border border-[#c5d8ce]">
<span className="w-1.5 h-1.5 rounded-full bg-[#3d6b57]"></span> Funded
                                </span>
</td>
<td className="px-5 py-4 text-right">
<button className="text-[#6b7280] hover:text-[#1a3328] transition-colors px-2"><iconify-icon icon="solar:chart-linear" title="Update Progress" width="1.1rem"></iconify-icon></button>
<button className="text-[#6b7280] hover:text-[#1a3328] transition-colors px-2"><iconify-icon icon="solar:eye-linear" width="1.1rem"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="page-view hidden max-w-2xl mx-auto" id="view-ngo-form">
<button className="text-xs font-medium text-[#8a8a8a] hover:text-[#1a3328] flex items-center gap-1.5 mb-6 transition-colors" data-route="ngo-dashboard">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Dashboard
        </button>
<div className="mb-8">
<h1 className="font-['Syne'] font-semibold text-2xl text-[#1a3328] tracking-tight mb-2">Create New Project</h1>
<p className="text-[0.8125rem] text-[#6b7280]">Submit a new initiative to be listed on the marketplace.</p>
</div>
<form className="bg-white border border-[#e5e7eb] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">

<div>
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c] mb-1.5">Project Title <span className="text-red-500">*</span></label>
<input className="w-full bg-white border border-[#d6dbd8] text-[0.875rem] rounded-lg px-3 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all" placeholder="E.g., Solar Energy for Rural Schools" type="text"/>
</div>

<div>
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c] mb-1.5">Project Description <span className="text-red-500">*</span></label>
<textarea className="w-full bg-white border border-[#d6dbd8] text-[0.875rem] rounded-lg px-3 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all resize-y" placeholder="Describe the problem and your proposed solution..." rows="4"></textarea>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c] mb-1.5">Cause Area <span className="text-red-500">*</span></label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-[#d6dbd8] text-[0.875rem] rounded-lg pl-3 pr-8 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all cursor-pointer">
<option disabled="" selected="" value="">Select Cause</option>
<option>Education</option>
<option>Healthcare</option>
<option>Environment</option>
<option>Rural Development</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a8a] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c] mb-1.5">Location <span className="text-red-500">*</span></label>
<input className="w-full bg-white border border-[#d6dbd8] text-[0.875rem] rounded-lg px-3 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all" placeholder="State, Region" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c] mb-1.5">Funding Required (₹) <span className="text-red-500">*</span></label>
<input className="w-full bg-white border border-[#d6dbd8] text-[0.875rem] rounded-lg px-3 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all" placeholder="0" type="number"/>
</div>
<div>
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c] mb-1.5">Estimated Beneficiaries</label>
<input className="w-full bg-white border border-[#d6dbd8] text-[0.875rem] rounded-lg px-3 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all" placeholder="0" type="number"/>
</div>
</div>

<div>
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c] mb-1.5">Expected Impact Metric (Brief)</label>
<input className="w-full bg-white border border-[#d6dbd8] text-[0.875rem] rounded-lg px-3 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all" placeholder="E.g., 30 tons CO2 reduced annually" type="text"/>
</div>

<div>
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c] mb-1.5">Supporting Documents</label>
<div className="w-full border-2 border-dashed border-[#d6dbd8] rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-[#fcfbfa] hover:border-[#8caa98] transition-colors cursor-pointer">
<iconify-icon className="text-[#8a8a8a] text-2xl mb-2" icon="solar:document-add-linear"></iconify-icon>
<span className="text-[0.8125rem] font-medium text-[#4a4a4a]">Click to upload or drag and drop</span>
<span className="text-[0.6875rem] text-[#8a8a8a] mt-1">PDF, DOCX up to 10MB</span>
</div>
</div>
<div className="pt-4 border-t border-[#f3f4f6] flex justify-end gap-3">
<button className="px-4 py-2 text-[0.8125rem] font-medium text-[#4a4a4a] hover:text-[#1a3328] transition-colors" data-route="ngo-dashboard" type="button">Cancel</button>
<button className="bg-[#1a3328] text-white text-[0.8125rem] font-medium rounded-lg px-6 py-2 hover:bg-[#254b3b] transition-colors shadow-sm" type="button">
                    Submit Project
                </button>
</div>
</form>
</div>

<div className="page-view hidden" id="view-auth">
<div className="max-w-md mx-auto mt-10 bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-lg shadow-[rgba(0,0,0,0.03)]">
<div className="text-center mb-8">
<div className="w-12 h-12 bg-[#1a3328] rounded-xl mx-auto mb-4 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h2 className="font-['Syne'] font-semibold text-2xl text-[#1a3328] tracking-tight">Welcome back</h2>
<p className="text-[0.8125rem] text-[#6b7280] mt-1">Sign in to your account</p>
</div>

<div className="flex p-1 bg-[#f3f4f6] rounded-lg mb-6">
<button className="flex-1 text-[0.8125rem] font-medium py-1.5 rounded-md bg-white text-[#1a3328] shadow-sm transition-all" id="tab-csr">CSR Partner</button>
<button className="flex-1 text-[0.8125rem] font-medium py-1.5 rounded-md text-[#6b7280] hover:text-[#1a3328] transition-all" id="tab-ngo">NGO Login</button>
</div>
<form className="flex flex-col gap-4">
<div>
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c] mb-1.5">Email address</label>
<input className="w-full bg-white border border-[#d6dbd8] text-[0.875rem] rounded-lg px-3 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all" type="email" value="demo@csr.com"/>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="block text-[0.8125rem] font-medium text-[#1c1c1c]">Password</label>
<a className="text-[0.75rem] text-[#3d6b57] hover:underline" href="#">Forgot?</a>
</div>
<input className="w-full bg-white border border-[#d6dbd8] text-[0.875rem] rounded-lg px-3 py-2 outline-none focus:border-[#3d6b57] focus:ring-1 focus:ring-[#3d6b57] transition-all" type="password" value="********"/>
</div>
<button className="w-full bg-[#1a3328] text-white text-[0.875rem] font-medium rounded-lg py-2.5 mt-2 hover:bg-[#254b3b] transition-colors shadow-sm" data-route="csr-dashboard" type="button">
                    Sign in
                </button>
</form>
<p className="text-center text-[0.75rem] text-[#6b7280] mt-6">
                Don't have an account? <a className="text-[#3d6b57] font-medium hover:underline" href="#">Request access</a>
</p>
</div>
</div>
</main>



    </>
  );
}
