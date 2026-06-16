import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<div className="pointer-events-none fixed inset-0">
<div className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 right-0 h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/70"></div>
</div>
<div className="relative">

<header className="border-b border-white/10 bg-slate-950/55 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="text-sm font-semibold tracking-tight text-white">CC</div>
</div>
<div className="leading-tight">
<div className="text-base font-semibold tracking-tight text-white">Community Care</div>
<div className="text-xs text-slate-300">Members • Blood donors • Hospitals • Emergency contacts</div>
</div>
</div>
<div className="hidden items-center gap-2 md:flex">
<button className="inline-flex items-center gap-2 rounded-xl bg-rose-500/15 px-3 py-2 text-xs font-medium text-rose-50 ring-1 ring-rose-300/20 hover:bg-rose-500/20" id="quickEmergency">
<iconify-icon height="1em" icon="solar:siren-rounded-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              Emergency
            </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/10" id="exportBtn">
<iconify-icon height="1em" icon="solar:download-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              Export
            </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-sky-500/15 px-3 py-2 text-xs font-medium text-sky-50 ring-1 ring-sky-300/20 hover:bg-sky-500/20" id="addBtn">
<iconify-icon height="1em" icon="solar:add-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              Add
            </button>
</div>
</div>

<div className="pb-4">
<div className="grid grid-cols-1 gap-3 md:grid-cols-12">
<div className="md:col-span-6">
<label className="sr-only" htmlFor="search">Search</label>
<div className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10 focus-within:ring-sky-300/30">
<iconify-icon className="text-slate-300" height="1em" icon="solar:magnifer-linear" strokeWidth="1.5" style={{fontSize: '1.15rem'}} width="1em"></iconify-icon>
<input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none" id="search" placeholder="Search by name, blood group, area, hospital..." type="text"/>
<button className="hidden rounded-xl bg-white/5 px-2 py-1 text-xs text-slate-200 ring-1 ring-white/10 hover:bg-white/10" id="clearSearch">
                  Clear
                </button>
</div>
</div>
<div className="md:col-span-3">
<label className="sr-only" htmlFor="area">Area</label>
<div className="rounded-2xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" height="1em" icon="solar:map-point-linear" strokeWidth="1.5" style={{fontSize: '1.15rem'}} width="1em"></iconify-icon>
<select className="w-full bg-transparent text-sm text-white focus:outline-none" id="area">
<option className="bg-slate-950" value="all">All areas</option>
</select>
</div>
</div>
</div>
<div className="md:col-span-3">
<label className="sr-only" htmlFor="category">Category</label>
<div className="rounded-2xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" height="1em" icon="solar:widget-2-linear" strokeWidth="1.5" style={{fontSize: '1.15rem'}} width="1em"></iconify-icon>
<select className="w-full bg-transparent text-sm text-white focus:outline-none" id="category">
<option className="bg-slate-950" value="all">All categories</option>
<option className="bg-slate-950" value="member">Members</option>
<option className="bg-slate-950" value="donor">Blood donors</option>
<option className="bg-slate-950" value="hospital">Hospitals</option>
<option className="bg-slate-950" value="ambulance">Ambulance</option>
<option className="bg-slate-950" value="police">Police</option>
</select>
</div>
</div>
</div>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10">
<iconify-icon className="text-rose-200" height="1em" icon="solar:heart-pulse-linear" strokeWidth="1.5" style={{fontSize: '1.05rem'}} width="1em"></iconify-icon>
<span className="font-medium text-white">Blood</span>
<span className="text-slate-300">A+ A- B+ B- O+ O- AB+ AB-</span>
</div>
<button className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/10" id="resetBtn">
<iconify-icon height="1em" icon="solar:refresh-linear" strokeWidth="1.5" style={{fontSize: '1.05rem'}} width="1em"></iconify-icon>
              Reset
            </button>
<div className="ml-auto hidden items-center gap-2 md:flex">
<div className="rounded-2xl bg-white/5 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10">
<span className="text-slate-300">Showing:</span>
<span className="font-medium text-white" id="resultCount">0</span>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">

<section className="grid grid-cols-1 gap-6">
<div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<div className="flex flex-wrap items-start justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-1 text-xs font-medium text-sky-50 ring-1 ring-sky-300/20">
<iconify-icon height="1em" icon="solar:shield-check-linear" strokeWidth="1.5" style={{fontSize: '1rem'}} width="1em"></iconify-icon>
                  Verified directory (demo)
                </div>
<h1 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Area-wise Donate &amp; Hospital Catalog
                </h1>
<p className="mt-2 max-w-2xl text-sm text-slate-300">
                  Find members, blood donors, hospitals with contact number &amp; location, ambulance services, and police stations—quickly searchable by area.
                </p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-2xl bg-rose-500/15 px-4 py-2.5 text-xs font-medium text-rose-50 ring-1 ring-rose-300/20 hover:bg-rose-500/20" id="callDefaultEmergency">
<iconify-icon height="1em" icon="solar:phone-calling-linear" strokeWidth="1.5" style={{fontSize: '1.15rem'}} width="1em"></iconify-icon>
                  Call emergency
                </button>
<button className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2.5 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/10" id="locateBtn">
<iconify-icon height="1em" icon="solar:compass-linear" strokeWidth="1.5" style={{fontSize: '1.15rem'}} width="1em"></iconify-icon>
                  Use my area
                </button>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="1em" icon="solar:users-group-rounded-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
                  Members
                </div>
<div className="mt-2 text-xl font-semibold tracking-tight text-white" id="statMembers">—</div>
<div className="text-xs text-slate-400">Community contacts</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="1em" icon="solar:dropper-3-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
                  Blood donors
                </div>
<div className="mt-2 text-xl font-semibold tracking-tight text-white" id="statDonors">—</div>
<div className="text-xs text-slate-400">Ready to help</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="1em" icon="solar:hospital-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
                  Hospitals
                </div>
<div className="mt-2 text-xl font-semibold tracking-tight text-white" id="statHospitals">—</div>
<div className="text-xs text-slate-400">Call &amp; navigate</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="1em" icon="solar:shield-user-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
                  Police / Emergency
                </div>
<div className="mt-2 text-xl font-semibold tracking-tight text-white" id="statEmergency">—</div>
<div className="text-xs text-slate-400">Fast contacts</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex flex-wrap gap-2">
<button className="tabBtn inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2.5 text-xs font-medium text-white ring-1 ring-white/10" data-tab="all">
<iconify-icon height="1em" icon="solar:layers-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              All
            </button>
<button className="tabBtn inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10" data-tab="member">
<iconify-icon height="1em" icon="solar:users-group-rounded-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              Members
            </button>
<button className="tabBtn inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10" data-tab="donor">
<iconify-icon height="1em" icon="solar:dropper-3-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              Blood donors
            </button>
<button className="tabBtn inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10" data-tab="hospital">
<iconify-icon height="1em" icon="solar:hospital-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              Hospitals
            </button>
<button className="tabBtn inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10" data-tab="ambulance">
<iconify-icon height="1em" icon="solar:ambulance-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              Ambulance
            </button>
<button className="tabBtn inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10" data-tab="police">
<iconify-icon height="1em" icon="solar:shield-user-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              Police
            </button>
</div>
<div className="flex items-center gap-2">
<div className="md:hidden rounded-2xl bg-white/5 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/10">
              Showing: <span className="font-medium text-white" id="resultCountMobile">0</span>
</div>
<button className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2.5 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/10" id="openHelp">
<iconify-icon height="1em" icon="solar:question-circle-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}} width="1em"></iconify-icon>
              Help
            </button>
</div>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" id="cards"></div>
<div className="mt-10 hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur" id="emptyState">
<div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<iconify-icon className="text-slate-200" height="1em" icon="solar:inbox-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}} width="1em"></iconify-icon>
</div>
<div className="mt-4 text-base font-semibold tracking-tight text-white">No results found</div>
<div className="mt-2 text-sm text-slate-300">Try clearing filters or searching by area or blood group.</div>
<button className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2.5 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/10" id="emptyReset">
<iconify-icon height="1em" icon="solar:refresh-linear" strokeWidth="1.5" style={{fontSize: '1.05rem'}} width="1em"></iconify-icon>
            Reset filters
          </button>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-slate-950/40 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="text-xs font-semibold tracking-tight text-white">CC</div>
</div>
<div className="text-xs text-slate-300">
<span className="font-medium text-white">Community Care</span>
<span className="text-slate-400">— directory demo for emergency help.</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
<iconify-icon height="1em" icon="solar:lock-keyhole-linear" strokeWidth="1.5" style={{fontSize: '1rem'}} width="1em"></iconify-icon>
              Local-only demo data
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
<iconify-icon height="1em" icon="solar:phone-calling-linear" strokeWidth="1.5" style={{fontSize: '1rem'}} width="1em"></iconify-icon>
              Click to call
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
<iconify-icon height="1em" icon="solar:map-point-wave-linear" strokeWidth="1.5" style={{fontSize: '1rem'}} width="1em"></iconify-icon>
              Open maps
            </span>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="modalWrap">
<div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" id="modalOverlay"></div>
<div className="relative mx-auto flex min-h-dvh max-w-3xl items-center justify-center p-4">
<div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl ring-1 ring-white/10 backdrop-blur">
<div className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10" id="modalIcon"></div>
<div>
<div className="text-base font-semibold tracking-tight text-white" id="modalTitle">Details</div>
<div className="mt-0.5 text-xs text-slate-300" id="modalSubtitle">—</div>
</div>
</div>
<button className="rounded-2xl bg-white/5 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/10" id="closeModal">
              Close
            </button>
</div>
<div className="p-5">
<div className="grid grid-cols-1 gap-5 md:grid-cols-12">
<div className="md:col-span-5">
<div className="overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
<img alt="" className="w-full object-cover" id="modalImage" src="" style={{height: '15.625rem'}}/>
</div>
<div className="mt-3 flex flex-wrap gap-2" id="modalBadges"></div>
</div>
<div className="md:col-span-7">
<div className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="text-xs font-medium text-white">Information</div>
<div className="mt-2 space-y-2 text-sm text-slate-200" id="modalInfo"></div>
</div>
<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500/15 px-4 py-3 text-xs font-medium text-emerald-50 ring-1 ring-emerald-300/20 hover:bg-emerald-500/20" href="#" id="modalCall">
<iconify-icon height="1em" icon="solar:phone-calling-linear" strokeWidth="1.5" style={{fontSize: '1.15rem'}} width="1em"></iconify-icon>
                    Call
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500/15 px-4 py-3 text-xs font-medium text-sky-50 ring-1 ring-sky-300/20 hover:bg-sky-500/20" href="#" id="modalMap" rel="noreferrer" target="_blank">
<iconify-icon height="1em" icon="solar:map-point-wave-linear" strokeWidth="1.5" style={{fontSize: '1.15rem'}} width="1em"></iconify-icon>
                    Open location
                  </a>
</div>
<div className="mt-4 rounded-3xl bg-slate-950/40 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between gap-3">
<div className="text-xs font-medium text-white">Quick actions</div>
<button className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/10" id="copyBtn">
<iconify-icon height="1em" icon="solar:copy-linear" strokeWidth="1.5" style={{fontSize: '1.05rem'}} width="1em"></iconify-icon>
                      Copy
                    </button>
</div>
<div className="mt-2 text-xs text-slate-300" id="modalNote">—</div>
</div>
</div>
</div>
</div>
</div></div></div></div>
    </>
  );
}
