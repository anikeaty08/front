import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



lucide.createIcons({attrs:{'stroke-width':1.5}});

// Checkbox visuals
document.querySelectorAll('input[type="checkbox"]').forEach(cb=>{
  const span=cb.nextElementSibling;
  cb.addEventListener('change',()=>{
    span.classList.toggle('bg-brand-500',cb.checked);
    span.classList.toggle('border-brand-500',cb.checked);
    span.innerHTML=cb.checked?
      '<svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>'
      :'';
  });
});

const master=document.getElementById('check-all');
if(master){
  master.addEventListener('change',()=>{
    document.querySelectorAll('.row-check').forEach(cb=>{
      cb.checked=master.checked; cb.dispatchEvent(new Event('change'));
    });
  });
}

// Chart
const ctx=document.getElementById('dispatchChart').getContext('2d');
new Chart(ctx,{type:'line',
  data:{
    labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets:[{label:'Dispatched',data:[12,19,7,11,15,9,13],
      tension:.4,
      borderColor:'#3b82f6',
      backgroundColor:'rgba(59,130,246,0.15)',
      fill:true,
      pointRadius:3,
      pointBackgroundColor:'#3b82f6'}]},
  options:{plugins:{legend:{display:false}},scales:{y:{grid:{color:'#e2e8f0'},ticks:{color:'#64748b'}},x:{ticks:{color:'#64748b'}}}}
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9dead2ce-9640-41bd-8153-af6e7acc42cf_3840w.jpg")'}}></div>
<main className="w-full max-w-6xl ring-1 fade-in rounded-3xl shadow-xl ring-slate-100 bg-white">

<header className="flex rounded-[20px] border-b mt-1 mr-1 mb-1 ml-1 pt-4 pr-6 pb-4 pl-6 items-center justify-between bg-slate-900 border-slate-700">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full ring-1 transition flex items-center justify-center ring-slate-700 hover:bg-slate-800">
<svg className="lucide lucide-arrow-left w-5 h-5 text-slate-300" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="flex items-center gap-2">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2de2a5b1-5048-4f3e-9c13-f8152f7e5834_320w.jpg"/>
<span className="text-sm font-medium font-geist text-slate-300">Hi, Jordan</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-9 h-9 rounded-lg transition flex items-center justify-center hover:bg-slate-800">
<svg className="lucide lucide-bell w-5 h-5 text-slate-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="w-9 h-9 rounded-lg transition flex items-center justify-center hover:bg-slate-800">
<svg className="lucide lucide-settings w-5 h-5 text-slate-300" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</header>

<section className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 pr-6 pb-4 pl-6">
<div className="flex fade-in bg-slate-900/90 rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between" style={{animationDelay: '.05s'}}>
<div className="">
<p className="text-xs text-slate-400 font-medium font-geist">Total consignments</p>
<p className="text-2xl tracking-tight font-jakarta font-medium text-slate-200">128</p>
</div>
<svg className="lucide lucide-package w-[24px] h-[24px] text-gray-100" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="rounded-xl p-4 flex items-center justify-between fade-in bg-slate-900/90" style={{animationDelay: '.1s'}}>
<div className="">
<p className="text-xs text-slate-400 font-medium font-geist">In transit</p>
<p className="text-2xl tracking-tight font-jakarta font-medium text-slate-200">86</p>
</div>
<svg className="lucide lucide-truck w-[24px] h-[24px] text-gray-100" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path className="" d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div className="rounded-xl p-4 flex items-center justify-between fade-in bg-slate-900/90" style={{animationDelay: '.15s'}}>
<div className="">
<p className="text-xs text-slate-400 font-medium font-geist">Awaiting pickup</p>
<p className="text-2xl tracking-tight font-jakarta font-medium text-slate-200">32</p>
</div>
<svg className="lucide lucide-clock w-[24px] h-[24px] text-gray-100" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle className="" cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="rounded-xl p-4 flex items-center justify-between fade-in bg-slate-900/90" style={{animationDelay: '.2s'}}>
<div>
<p className="text-xs text-slate-400 font-medium font-geist">Delivered</p>
<p className="text-2xl tracking-tight font-jakarta font-medium text-slate-200">10</p>
</div>
<svg className="lucide lucide-check-circle w-[24px] h-[24px] text-gray-100" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</section>

<section className="px-6 pb-8 grid lg:grid-cols-2 gap-8">

<div className="space-y-3">
<h2 className="text-base font-semibold tracking-tight fade-in font-geist">Ongoing Deliveries</h2>

<div className="border-brand-500 flex gap-4 fade-in border-2 rounded-xl pt-4 pr-4 pb-4 pl-4 items-start border-black/20" style={{animationDelay: '.05s'}}>
<div className="flex-1">
<p className="text-xs text-slate-500 font-medium mb-1 font-geist">Shipment ID:</p>
<p className="font-semibold text-sm mb-2 font-geist">#LX-9021</p>
<div className="flex items-center text-xs text-slate-500 gap-1 font-geist">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            4129 Sunset Blvd, Los Angeles, CA
          </div>
<div className="flex items-center text-xs text-slate-500 gap-1 font-geist">
<svg className="lucide lucide-flag w-3 h-3" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
            55 Water St, New York, NY
          </div>
<p className="text-xs mt-1 font-geist text-slate-400">Distance left: 2 451 mi</p>
</div>
<img alt="delivery truck" className="w-28 h-14 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e9172c7-5d67-4da7-8de0-05525c420fec_320w.jpg"/>
</div>

<div className="flex gap-4 hover:border-brand-500 transition fade-in border rounded-xl pt-4 pr-4 pb-4 pl-4 items-start border-black/20" style={{animationDelay: '.1s'}}>
<div className="flex-1">
<p className="text-xs text-slate-500 font-medium mb-1 font-geist">Shipment ID:</p>
<p className="font-semibold text-sm mb-2 font-geist">#QT-5544</p>
<div className="flex items-center text-xs text-slate-500 gap-1 font-geist">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            201 King St, Seattle, WA
          </div>
<div className="flex items-center text-xs text-slate-500 gap-1 font-geist">
<svg className="lucide lucide-flag w-3 h-3" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
            87 Market Rd, Austin, TX
          </div>
<p className="text-xs mt-1 font-geist text-slate-400">Distance left: 1 765 mi</p>
</div>
<img alt="delivery van" className="w-28 h-14 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae731e89-9af1-4914-82cc-9039bb5c090d_320w.jpg"/>
</div>

<div className="flex gap-4 hover:border-brand-500 transition fade-in border rounded-xl pt-4 pr-4 pb-4 pl-4 items-start border-black/20" style={{animationDelay: '.15s'}}>
<div className="flex-1">
<p className="text-xs text-slate-500 font-medium mb-1 font-geist">Shipment ID:</p>
<p className="font-semibold text-sm mb-2 font-geist">#MN-7832</p>
<div className="flex items-center text-xs text-slate-500 gap-1 font-geist">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            66 Lakeview Dr, Chicago, IL
          </div>
<div className="flex gap-1 text-xs text-slate-500 font-geist items-center">
<svg className="lucide lucide-flag w-3 h-3" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
            29 Queen St, Toronto, ON
          </div>
<p className="text-xs mt-1 font-geist text-slate-400">Distance left: 525 mi</p>
</div>
<img alt="cargo truck" className="w-28 h-14 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22df5474-7a3a-4fea-b5c6-e2980964892d_320w.jpg" style={{}}/>
</div>
</div>

<div className="flex flex-col gap-3 fade-in lg:order-none order-first">
<div className="w-full h-80 rounded-xl overflow-hidden relative bg-slate-200">
<iframe className="absolute inset-0 w-full h-full" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24177.445!2d-73.978!3d40.758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v171001"></iframe>
</div>

<div className="ring-1 flex flex-col gap-3 fade-in rounded-xl p-4 shadow-sm ring-slate-700 bg-slate-900">
<div className="flex items-start justify-between">
<p className="text-sm font-medium font-geist text-slate-300">Shipment details <span className="font-geist text-brand-400">• In transit</span></p>
<button className="w-8 h-8 rounded flex items-center justify-center hover:bg-slate-800">
<svg className="lucide lucide-x w-4 h-4 text-slate-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="grid grid-cols-3 gap-4 text-xs text-slate-300">
<div className="space-y-1">
<p className="font-geist text-slate-400">Driver</p>
<div className="flex items-center gap-1">
<span className="text-lg font-geist">🚚</span>
<span className="font-medium font-geist text-slate-200">Lena Forbes</span>
</div>
</div>
<div className="space-y-1">
<p className="font-geist text-slate-400">Tracking no.</p>
<p className="font-medium font-geist text-slate-200">QT5544</p>
</div>
<div className="space-y-1">
<p className="font-geist text-slate-400">Weight</p>
<p className="font-medium font-geist text-slate-200">12.8 kg</p>
</div>
<div className="space-y-1">
<p className="font-geist text-slate-400">Category</p>
<p className="font-medium font-geist text-slate-200">Electronics</p>
</div>
<div className="space-y-1">
<p className="font-geist text-slate-400">Charge</p>
<p className="font-medium font-geist text-slate-200">$312.50</p>
</div>
<div className="flex items-center justify-end">
<img alt="qr" className="w-14 h-14 rounded" src="https://api.qrserver.com/v1/create-qr-code/?size=70x70&amp;data=QT5544" style={{}}/>
</div>
</div>
<div className="flex items-center gap-2 text-slate-400">
<span className="text-xs font-geist text-slate-400">Mar 11</span>
<div className="w-full h-1 rounded-full bg-slate-800">
<div className="h-1 rounded-full bg-brand-400" style={{width: '64%'}}></div>
</div>
<span className="text-xs font-geist text-slate-400">Mar 18</span>
</div>
</div>
</div>
</section>

<section className="px-6 pb-8">
<h2 className="text-base font-semibold tracking-tight mb-3 fade-in font-geist">Weekly Dispatch Trend</h2>
<div className="rounded-xl ring-1 overflow-hidden fade-in bg-slate-50/40 ring-slate-100">
<div className="p-4">
<p className="text-xs text-slate-500 mb-2 font-geist">Packages dispatched each day (past week)</p>
<div className="">
<canvas className="" height="857" id="dispatchChart" style={{display: 'block', boxSizing: 'border-box', height: '428px', width: '1072px'}} width="2144"></canvas>
</div>
</div>
</div>
</section>

<section className="pr-6 pb-6 pl-6">
<h2 className="text-base font-semibold tracking-tight mb-3 fade-in font-geist">Track Orders</h2>
<div className="overflow-hidden ring-1 fade-in rounded-xl shadow-sm ring-slate-700 bg-slate-900">

<div className="flex border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between bg-slate-800/90 border-slate-600">
<div className="flex gap-2 text-sm items-center text-slate-300" style={{fontFamily: 'Inter, sans-serif'}}>
<span className="font-geist">Showing</span>
<div className="flex rounded-md border shadow-sm ring-1 ring-inset ring-transparent bg-slate-900 border-slate-600">
<button className="focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-1 text-sm font-medium rounded-l-md pt-1.5 pr-3 pb-1.5 pl-3 font-geist text-brand-400 bg-slate-800" type="button">4</button>
<button className="px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-1 font-geist text-slate-300 hover:text-brand-400 hover:bg-slate-800" type="button">8</button>
<button className="px-3 py-1.5 text-sm font-medium rounded-r-md focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-1 font-geist text-slate-300 hover:text-brand-400 hover:bg-slate-800" type="button">12</button>
</div>
<span className="font-geist">entries</span>
</div>
<div className="relative">
<input className="pl-9 pr-10 py-2 rounded-lg border focus:ring-2 focus:ring-brand-400 focus:border-brand-400 text-sm w-64 placeholder:text-slate-500 bg-slate-900 border-slate-600 text-slate-300" placeholder="Search orders..." type="search"/>
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-slate-700">
<svg className="lucide lucide-filter w-4 h-4 text-slate-500" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="min-w-full text-sm text-slate-300">
<thead className="border-b bg-slate-800 border-slate-600">
<tr className="">
<th className="w-12 py-4 pl-6">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only" id="check-all" type="checkbox"/>
<span className="w-4 h-4 rounded border flex items-center justify-center border-slate-600 bg-slate-900"></span>
</label>
</th>
<th className="px-4 py-4 text-left font-semibold font-geist text-slate-300">Tracking no.</th>
<th className="px-4 py-4 text-left font-semibold font-geist text-slate-300">Courier</th>
<th className="px-4 py-4 text-left font-semibold font-geist text-slate-300">Category</th>
<th className="px-4 py-4 text-left font-semibold font-geist text-slate-300">Ship date</th>
<th className="px-4 py-4 text-left font-semibold font-geist text-slate-300">Destination</th>
<th className="px-4 py-4 text-right font-semibold font-geist text-slate-300">Weight</th>
<th className="px-4 py-4 text-right font-semibold font-geist text-slate-300">Charge</th>
<th className="px-4 py-4 text-left font-semibold font-geist text-slate-300">Status</th>
<th className="w-12 py-4 pr-6"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-700">

<tr className="transition-colors hover:bg-slate-800">
<td className="py-4 pl-6">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only row-check" type="checkbox"/>
<span className="w-4 h-4 rounded border flex items-center justify-center border-slate-600 bg-slate-900"></span>
</label>
</td>
<td className="px-4 py-4 font-semibold font-geist text-slate-300">#LX-9021</td>
<td className="px-4 py-4 font-geist text-slate-400">ShipSimple</td>
<td className="px-4 py-4">
<span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium font-geist bg-slate-700 text-slate-300">Clothing</span>
</td>
<td className="px-4 py-4 font-geist text-slate-400">Mar 09, 2024</td>
<td className="px-4 py-4 font-geist text-slate-400">55 Water St, New York</td>
<td className="px-4 py-4 text-right font-geist text-slate-400">7.3 kg</td>
<td className="px-4 py-4 text-right font-semibold font-geist text-slate-300">$74.00</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium font-geist bg-blue-900 text-blue-400">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> In transit
                </span>
</td>
<td className="py-4 pr-6">
<button className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-slate-700">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</td>
</tr>

<tr className="transition-colors hover:bg-slate-800">
<td className="py-4 pl-6">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only row-check" type="checkbox"/>
<span className="w-4 h-4 rounded border flex items-center justify-center border-slate-600 bg-slate-900"></span>
</label>
</td>
<td className="px-4 py-4 font-semibold font-geist text-slate-300">#QT-5544</td>
<td className="px-4 py-4 font-geist text-slate-400">QuickParcel</td>
<td className="px-4 py-4">
<span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium font-geist bg-slate-700 text-slate-300">Electronics</span>
</td>
<td className="px-4 py-4 font-geist text-slate-400">Mar 08, 2024</td>
<td className="px-4 py-4 font-geist text-slate-400">87 Market Rd, Austin</td>
<td className="px-4 py-4 text-right font-geist text-slate-400">12.8 kg</td>
<td className="px-4 py-4 text-right font-semibold font-geist text-slate-300">$312.50</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium font-geist bg-blue-900 text-blue-400">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> In transit
                </span>
</td>
<td className="py-4 pr-6">
<button className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-slate-700">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</td>
</tr>

<tr className="transition-colors hover:bg-slate-800">
<td className="py-4 pl-6">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only row-check" type="checkbox"/>
<span className="w-4 h-4 rounded border flex items-center justify-center border-slate-600 bg-slate-900"></span>
</label>
</td>
<td className="px-4 py-4 font-semibold font-geist text-slate-300">#DZ-1122</td>
<td className="px-4 py-4 font-geist text-slate-400">AirLift</td>
<td className="px-4 py-4">
<span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium font-geist bg-slate-700 text-slate-300">Home goods</span>
</td>
<td className="px-4 py-4 font-geist text-slate-400">Mar 06, 2024</td>
<td className="px-4 py-4 font-geist text-slate-400">66 Lakeview Dr, Chicago</td>
<td className="px-4 py-4 text-right font-geist text-slate-400">5.6 kg</td>
<td className="px-4 py-4 text-right font-semibold font-geist text-slate-300">$59.30</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium font-geist bg-green-900 text-green-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Delivered
                </span>
</td>
<td className="py-4 pr-6">
<button className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-slate-700">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</td>
</tr>

<tr className="transition-colors hover:bg-slate-800">
<td className="py-4 pl-6">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only row-check" type="checkbox"/>
<span className="w-4 h-4 rounded border flex items-center justify-center border-slate-600 bg-slate-900"></span>
</label>
</td>
<td className="px-4 py-4 font-semibold font-geist text-slate-300">#MN-7832</td>
<td className="px-4 py-4 font-geist text-slate-400">ShipSimple</td>
<td className="px-4 py-4">
<span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium font-geist bg-slate-700 text-slate-300">Books</span>
</td>
<td className="px-4 py-4 font-geist text-slate-400">Mar 10, 2024</td>
<td className="px-4 py-4 font-geist text-slate-400">29 Queen St, Toronto</td>
<td className="px-4 py-4 text-right font-geist text-slate-400">9.4 kg</td>
<td className="px-4 py-4 text-right font-semibold font-geist text-slate-300">$102.20</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium font-geist bg-orange-900 text-orange-400">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Pending
                </span>
</td>
<td className="py-4 pr-6">
<button className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-slate-700">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-6 py-4 border-t border-slate-600 bg-slate-800/90">
<p className="text-sm font-geist text-slate-400">Showing 1 to 4 of 128 results</p>
<div className="flex items-center gap-1">
<button className="px-3 py-1.5 text-sm text-slate-500 rounded transition-colors font-geist hover:text-slate-300 hover:bg-slate-700">Previous</button>
<button className="px-3 py-1.5 text-sm rounded font-geist bg-brand-400 text-slate-900">1</button>
<button className="px-3 py-1.5 text-sm rounded transition-colors font-geist text-slate-300 hover:bg-slate-700">2</button>
<button className="px-3 py-1.5 text-sm rounded transition-colors font-geist text-slate-300 hover:bg-slate-700">3</button>
<span className="px-2 font-geist text-slate-600">...</span>
<button className="px-3 py-1.5 text-sm rounded transition-colors font-geist text-slate-300 hover:bg-slate-700">32</button>
<button className="px-3 py-1.5 text-sm rounded transition-colors font-geist text-slate-300 hover:text-slate-100 hover:bg-slate-700">Next</button>
</div>
</div>
</div>
</section>
</main>




    </>
  );
}
